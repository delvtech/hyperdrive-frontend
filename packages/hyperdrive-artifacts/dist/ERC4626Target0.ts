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
              "name": "initialVaultSharePrice",
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
          "name": "__vault",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "AddressInsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpInvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FailedInnerCall",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
          "name": "reason",
          "type": "uint8"
        }
      ],
      "name": "InsufficientLiquidity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidERC20Bridge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeDestination",
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
      "name": "LnInvalidInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SweepFailed",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "indexed": false,
          "internalType": "bool",
          "name": "isPaused",
          "type": "bool"
        }
      ],
      "name": "PauseStatusUpdated",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "_checkpointTime",
          "type": "uint256"
        }
      ],
      "name": "getCheckpoint",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "vaultSharePrice",
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
              "internalType": "int128",
              "name": "shareAdjustment",
              "type": "int128"
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
            },
            {
              "internalType": "uint112",
              "name": "zombieBaseProceeds",
              "type": "uint112"
            },
            {
              "internalType": "uint128",
              "name": "zombieShareReserves",
              "type": "uint128"
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
              "name": "initialVaultSharePrice",
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
              "name": "zombieBaseProceeds",
              "type": "uint256"
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
              "name": "vaultSharePrice",
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
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "isPauser",
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
    },
    {
      "inputs": [],
      "name": "vault",
      "outputs": [
        {
          "internalType": "contract IERC4626",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x6102606040523480156200001257600080fd5b5060405162004246380380620042468339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613e386200040e60003960008181610566015281816106660152818161081e0152818161135b01528181611df301528181612321015281816123c70152612491015260008181610dc40152611d24015260008181610d950152611ce70152600081816104ce0152818161075001528181610ef201528181611a5001528181611aca0152611b4601526000610e36015260008181610e100152611f2f015260008181610dea0152611f0901526000610f9e01526000610f7801526000610f5201526000610f2c015260008181610ea80152611f55015260008181610e5c0152818161111a015261253e015260008181610e82015261264b01526000818161052b015281816105d00152818161078c01528181610d6601526110c10152613e386000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80637ecebe0011610104578063c55dae63116100a2578063e44808bc11610071578063e44808bc1461042f578063e985e9c514610442578063fba5600814610455578063fbfa77cf1461048457600080fd5b8063c55dae63146103df578063c69e16ad146103ff578063cf210e6514610407578063d81657431461041a57600080fd5b8063ab033ea9116100de578063ab033ea914610384578063b0d9658014610397578063bd85b039146103ac578063becee9c3146103bf57600080fd5b80637ecebe001461034b5780639cd241af1461035e578063a22cb4651461037157600080fd5b806321ff32a91161017c5780634e41a1fb1161014b5780634e41a1fb146102fd5780634ed2d6ac1461031057806360246c88146103235780637180c8ca1461033857600080fd5b806321ff32a9146102935780633656eec2146102b45780633e691db9146102c757806346fbf68e146102da57600080fd5b806314e5f07b116101b857806314e5f07b1461022f57806317fad7fc146102425780631c0f12b61461025557806320fc48811461026857600080fd5b8062ad800c146101de57806301681a621461020757806302329a291461021c575b600080fd5b6101f16101ec3660046133a5565b61048c565b6040516101fe919061340e565b60405180910390f35b61021a610215366004613436565b6104c3565b005b61021a61022a366004613461565b6108b8565b61021a61023d36600461347e565b6108c4565b61021a61025036600461355f565b6108e0565b61021a6102633660046135f4565b6108f6565b61027b6102763660046133a5565b610903565b60405190516001600160801b031681526020016101fe565b6102a66102a136600461363c565b610944565b6040519081526020016101fe565b6102a66102c236600461367e565b61098a565b6102a66102d53660046136ae565b6109c3565b6102ed6102e8366004613436565b6109ce565b60405190151581526020016101fe565b6101f161030b3660046133a5565b610a04565b61021a61031e3660046136e9565b610a12565b61032b610a60565b6040516101fe9190613733565b61021a6103463660046137d4565b610c8d565b6102a6610359366004613436565b610c9b565b61021a61036c366004613802565b610cc7565b61021a61037f3660046137d4565b610cd8565b61021a610392366004613436565b610d44565b61039f610d4d565b6040516101fe919061383a565b6102a66103ba3660046133a5565b610fd6565b6103d26103cd366004613917565b610ff8565b6040516101fe9190613959565b6103e76110b3565b6040516001600160a01b0390911681526020016101fe565b6102a66110f3565b6102a66104153660046133a5565b61110d565b610422611156565b6040516101fe919061399d565b61021a61043d366004613aae565b611262565b6102ed610450366004613b0d565b6112aa565b61045d6112ee565b6040805182516001600160801b0390811682526020938401511692810192909252016101fe565b6103e761134d565b60606104be61049a8361138d565b6040516020016104aa919061340e565b6040516020818303038152906040526114bb565b919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480159061050c5750336000908152600a602052604090205460ff16155b15610529576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316148061059a57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316145b156105b85760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561061f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106439190613b3b565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156106ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d19190613b3b565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561071b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073f9190613b3b565b90506107756001600160a01b0385167f0000000000000000000000000000000000000000000000000000000000000000836114df565b6040516370a0823160e01b815230600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156107db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ff9190613b3b565b14158061089457506040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561086d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108919190613b3b565b14155b156108b2576040516313dd85ff60e31b815260040160405180910390fd5b50505050565b6108c181611531565b50565b6108d58989898989898989896115b4565b505050505050505050565b6108ee8686868686866117c7565b505050505050565b6108b2848484843361187b565b6040805160208101909152600081526104be600760008481526020019081526020016000206040516020016104aa91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261098391016104aa565b9392505050565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526109bd91016104aa565b92915050565b60006109bd82611a3c565b6001600160a01b0381166000908152600a602090815260408083205490516104be926104aa9260ff169101901515815260200190565b60606104be61049a83611bb7565b83610a1c81611ca9565b6001600160a01b0316336001600160a01b031614610a4d57604051632aab8bd360e01b815260040160405180910390fd5b610a5985858585611d66565b5050505050565b610ad9604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610ae3611dd3565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610b4e9190613b80565b610b589190613b93565b90506000808311610b6a576000610b85565b610b8583610b7f610b7a86611e6b565b611fd3565b90612003565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610c5957610c548486612018565b610c5c565b60005b81526002546001600160801b0316602091820152604051919250610c86916104aa91849101613733565b5050505090565b610c97828261202d565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104be91016104aa565b610cd383838333611d66565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108c1816120a5565b610d556132f5565b610fd36040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104aa919061383a565b90565b6000818152600c60209081526040808320548151928301526104be91016104aa565b606060008267ffffffffffffffff81111561101557611015613ba6565b60405190808252806020026020018201604052801561103e578160200160208202803683370190505b50905060005b8381101561109757600085858381811061106057611060613bbc565b9050602002013590506000815490508084848151811061108257611082613bbc565b60209081029190910101525050600101611044565b506110ac816040516020016104aa9190613959565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610fd391016104aa565b6000610fd36009546040516020016104aa91815260200190565b60006104be61114461113f7f000000000000000000000000000000000000000000000000000000000000000085613b80565b612119565b6040516020016104aa91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610fd360016040516020016104aa919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461126c81611ca9565b6001600160a01b0316336001600160a01b03161461129d57604051632aab8bd360e01b815260040160405180910390fd5b6108ee868686868661187b565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916109bd91016104aa565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610fd3906060016104aa565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610fd391016104aa565b606060f882901c6001600160f81b03831660006113a982612161565b905060008360038111156113bf576113bf613b54565b036113f1576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506114b3565b600183600381111561140557611405613b54565b03611431578060405160200161141b9190613bd2565b60405160208183030381529060405293506114b3565b600283600381111561144557611445613b54565b0361145b578060405160200161141b9190613c0b565b600383600381111561146f5761146f613b54565b036114b3576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016114d6919061340e565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610cd390849061226e565b336000908152600a602052604090205460ff16611560576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906115a990831515815260200190565b60405180910390a150565b834211156115d55760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166115fc5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156116ea573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461172857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061174e90613c45565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806117e457506001600160a01b038516155b156118025760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118225760405163174861a760e31b815260040160405180910390fd5b60005b838110156118725761186a85858381811061184257611842613bbc565b90506020020135888886868681811061185d5761185d613bbc565b905060200201353361187b565b600101611825565b50505050505050565b6001600160a01b038416158061189857506001600160a01b038316155b156118b65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461197a576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff1661197a576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611978576000868152600e602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611972908490613b93565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906119ac908490613b93565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906119e3908490613b80565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611a466122d1565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016611a7d6020840184613436565b6001600160a01b031614611aa457604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff16158015611aed5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015611b0457506008546001600160a01b03163314155b15611b21576040516282b42960e81b815260040160405180910390fd5b6000611b2b611dd3565b600980546000909155909150611b428183866122fb565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611b9a8585886124c4565b60405190815260200160405180910390a250506104be6001600055565b606060f882901c6001600160f81b0383166000611bd382612161565b90506000836003811115611be957611be9613b54565b03611c1b576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506114b3565b6001836003811115611c2f57611c2f613b54565b03611c45578060405160200161141b9190613c5e565b6002836003811115611c5957611c59613b54565b03611c6f578060405160200161141b9190613c96565b6003836003811115611c8357611c83613b54565b036114b3576040516c485950455244524956452d575360981b6020820152602d016114a1565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611e42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e669190613b3b565b905090565b611ec860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e08201526004549091610100830191611f9991166124f3565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611fcb929004166124f3565b905292915050565b6000806000611fe184612569565b91509150806110ac5760405163aeeb825d60e01b815260040160405180910390fd5b60006109838383670de0b6b3a76400006125e3565b600061098383670de0b6b3a7640000846125e3565b6008546001600160a01b03163314612057576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b031633146120cf576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c600061212a600285612601565b815260200190815260200160002054600c6000612148600186612601565b8152602001908152602001600020546109bd9190613cc2565b60408051604d808252608082019092526060919060009082602082018180368337019050509050612193600a85613cf8565b61219e906030613b80565b60f81b816121ad600185613b93565b815181106121bd576121bd613bbc565b60200101906001600160f81b031916908160001a9053506121df600a85613d0c565b935060015b8415612260576121f5600a86613cf8565b612200906030613b80565b60f81b8260016122108487613b93565b61221a9190613b93565b8151811061222a5761222a613bbc565b60200101906001600160f81b031916908160001a90535061224c600a86613d0c565b94508061225881613c45565b9150506121e4565b918290030190815292915050565b60006122836001600160a01b03841683612636565b905080516000141580156122a85750808060200190518101906122a69190613d20565b155b15610cd357604051635274afe760e01b81526001600160a01b03841660048201526024016114d6565b6002600054036122f457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000806123088585612003565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612370573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123949190613b3b565b9450846000036123a8576000915050610983565b6123b86040840160208501613461565b15612477576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652866123fa6020870187613436565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561244c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124709190613b3b565b91506124bc565b6124b86124876020850185613436565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690876114df565b8491505b509392505050565b60006124d66040830160208401613461565b156124e2575082610983565b6124ec8484612003565b9050610983565b600080670de0b6b3a7640000612507612644565b6125119190613d3d565b905080831161252157600061252b565b61252b8184613b93565b9150610983612562670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d3d565b8390612018565b600080600080600061257a8661267a565b915091508061259157506000958695509350505050565b8560a0015161259f876128bd565b87516125ac908590613d54565b6125b69190613d54565b6125c09190613cc2565b9250505060008112156125d95750600093849350915050565b9360019350915050565b60008260001904841183021582026125fa57600080fd5b5091020490565b60006001600160f81b0382111561262b5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606061098383836000612924565b60006126707f000000000000000000000000000000000000000000000000000000000000000042613cf8565b611e669042613b93565b600080600061269c84610140015185610120015161200390919063ffffffff16565b61010085015160e08601516126b0916129c1565b6126ba9190613cc2565b905060006126d0856000015186602001516129d6565b905060008213156127d3576000829050600080612721886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006127129190613b93565b8d606001518e608001516129f3565b915091508061273a575060009788975095505050505050565b82821061278f576000612774858a60400151868c60c00151670de0b6b3a76400006127659190613b93565b8d606001518e60800151612ae2565b905061277f81613d74565b9960019950975050505050505050565b60008860200151126127c25760a08801516127aa9085613b93565b6127b390613d74565b98600198509650505050505050565b60a088015188516127aa9190613b93565b60008212156128af5760006127e783613d74565b9050600061281b8388604001518960c00151670de0b6b3a764000061280c9190613b93565b8a606001518b60800151612b12565b90508181106128575760006127b3848960400151858b60c00151670de0b6b3a76400006128489190613b93565b8c606001518d60800151612ba8565b60006128898489604001518a60c00151670de0b6b3a764000061287a9190613b93565b8b606001518c60800151612c80565b90506128a58860600151838561289f9190613b93565b90612018565b6127b39082613b80565b506000946001945092505050565b60006128ec826101000151670de0b6b3a76400006128db9190613b93565b606084015160e08501519190612d0f565b61291a836101400151670de0b6b3a76400006129089190613b93565b606085015161012086015191906125e3565b6109bd9190613cc2565b6060814710156129495760405163cd78605960e01b81523060048201526024016114d6565b600080856001600160a01b031684866040516129659190613d90565b60006040518083038185875af1925050503d80600081146129a2576040519150601f19603f3d011682016040523d82523d6000602084013e6129a7565b606091505b50915091506129b7868383612d35565b9695505050505050565b60006109838383670de0b6b3a7640000612d0f565b6000806129e38385613cc2565b9050600081121561098357600080fd5b6000806000881215612a1557612a0888613d74565b612a129087613b80565b95505b6000612a218a8a6129d6565b90506000612a32828a898989612d91565b90506000612a55612a4d89612a47898d6129c1565b90612dc0565b889088612d0f565b612a5f9083613b93565b9050670de0b6b3a76400008110612a9357612a8c612a85670de0b6b3a76400008a612018565b8290612dc0565b9050612aab565b612aa8612a85670de0b6b3a76400008a612e17565b90505b89811015612ac25760008094509450505050612ad6565b612acc8a82613b93565b6001945094505050505b97509795505050505050565b600080612af3888888888888612e2c565b909250905080612b0757612b076000612eee565b509695505050505050565b600080612b228787878787612f09565b90506000612b4d670de0b6b3a7640000612b3c8787612018565b612b469190613b80565b8390612e17565b9050670de0b6b3a76400008110612b7a57612b73612a85670de0b6b3a764000088612e17565b9050612b92565b612b8f612a85670de0b6b3a764000088612018565b90505b612b9c8188613b93565b98975050505050505050565b600080612bb88888878787612f09565b905085871015612bcc57612bcc6000612eee565b612bda85612a47888a613b93565b965086811015612bee57612bee6000612eee565b6000612c068486612bff8b86613b93565b9190612d0f565b9050670de0b6b3a76400008110612c3357612c2c612a85670de0b6b3a764000088612e17565b9050612c4b565b612c48612a85670de0b6b3a764000088612018565b90505b612c558185612e17565b905088811015612c6957612c696000612eee565b612c738982613b93565b9998505050505050505050565b600080612c908787878787612d91565b90506000612cb4670de0b6b3a7640000612caa8787612e17565b6125629190613b80565b9050670de0b6b3a76400008110612ce157612cda612a85670de0b6b3a764000088612018565b9050612cf9565b612cf6612a85670de0b6b3a764000088612e17565b90505b612d038185612018565b9050612b9c8882613b93565b6000826000190484118302158202612d2657600080fd5b50910281810615159190040190565b606082612d4a57612d4582612f2e565b610983565b8151158015612d6157506001600160a01b0384163b155b15612d8a57604051639996b31560e01b81526001600160a01b03851660048201526024016114d6565b5080610983565b6000612d9d8585612dc0565b612db6612dae86612a47868b612003565b8590856125e3565b6129b79190613b80565b600081600003612dd95750670de0b6b3a76400006109bd565b82600003612de9575060006109bd565b816000612df585612f57565b9050818102612e0c670de0b6b3a764000082613dac565b90506129b78161316a565b600061098383670de0b6b3a764000084612d0f565b6000806000612e3e8989888888612f09565b9050612e4e86612a47898b613b80565b975087811015612e65576000809250925050612ee3565b6000612e768587612bff8c86613b93565b9050670de0b6b3a76400008110612ea357612e9c612a85670de0b6b3a764000089612e17565b9050612ebb565b612eb8612a85670de0b6b3a764000089612018565b90505b612ec58186612e17565b9050808a1115612edc57612ed9818b613b93565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016114d69190613dda565b6000612f158585612dc0565b612db6612f2686612a47868b6129c1565b859085612d0f565b805115612f3e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000808213612f795760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361318557506000919050565b680755bf798b4a1bf1e582126131ae576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016133a06040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156133b757600080fd5b5035919050565b60005b838110156133d95781810151838201526020016133c1565b50506000910152565b600081518084526133fa8160208601602086016133be565b601f01601f19169290920160200192915050565b60208152600061098360208301846133e2565b6001600160a01b03811681146108c157600080fd5b60006020828403121561344857600080fd5b813561098381613421565b80151581146108c157600080fd5b60006020828403121561347357600080fd5b813561098381613453565b60008060008060008060008060006101208a8c03121561349d57600080fd5b8935985060208a0135975060408a01356134b681613421565b965060608a01356134c681613421565b955060808a01356134d681613453565b945060a08a0135935060c08a013560ff811681146134f357600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261352557600080fd5b50813567ffffffffffffffff81111561353d57600080fd5b6020830191508360208260051b850101111561355857600080fd5b9250929050565b6000806000806000806080878903121561357857600080fd5b863561358381613421565b9550602087013561359381613421565b9450604087013567ffffffffffffffff808211156135b057600080fd5b6135bc8a838b01613513565b909650945060608901359150808211156135d557600080fd5b506135e289828a01613513565b979a9699509497509295939492505050565b6000806000806080858703121561360a57600080fd5b84359350602085013561361c81613421565b9250604085013561362c81613421565b9396929550929360600135925050565b60008060006060848603121561365157600080fd5b83359250602084013561366381613421565b9150604084013561367381613421565b809150509250925092565b6000806040838503121561369157600080fd5b8235915060208301356136a381613421565b809150509250929050565b6000602082840312156136c057600080fd5b813567ffffffffffffffff8111156136d757600080fd5b82016060818503121561098357600080fd5b600080600080608085870312156136ff57600080fd5b84359350602085013561371181613421565b925060408501359150606085013561372881613421565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156137e757600080fd5b82356137f281613421565b915060208301356136a381613453565b60008060006060848603121561381757600080fd5b83359250602084013561382981613421565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161386660208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516138ca828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561392a57600080fd5b823567ffffffffffffffff81111561394157600080fd5b61394d85828601613513565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561399157835183529284019291840191600101613975565b50909695505050505050565b81516001600160801b03168152610180810160208301516139c960208401826001600160801b03169052565b5060408301516139e460408401826001600160801b03169052565b5060608301516139ff60608401826001600160801b03169052565b506080830151613a146080840182600f0b9052565b5060a0830151613a2f60a08401826001600160801b03169052565b5060c0830151613a4a60c08401826001600160801b03169052565b5060e0830151613a6560e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b0381168285015261390f565b600080600080600060a08688031215613ac657600080fd5b853594506020860135613ad881613421565b93506040860135613ae881613421565b9250606086013591506080860135613aff81613421565b809150509295509295909350565b60008060408385031215613b2057600080fd5b8235613b2b81613421565b915060208301356136a381613421565b600060208284031215613b4d57600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156109bd576109bd613b6a565b818103818111156109bd576109bd613b6a565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613bfe8160118501602087016133be565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613c388160128501602087016133be565b9190910160120192915050565b600060018201613c5757613c57613b6a565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613c898160108501602087016133be565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613bfe8160118501602087016133be565b81810360008312801583831316838312821617156110ac576110ac613b6a565b634e487b7160e01b600052601260045260246000fd5b600082613d0757613d07613ce2565b500690565b600082613d1b57613d1b613ce2565b500490565b600060208284031215613d3257600080fd5b815161098381613453565b80820281158282048414176109bd576109bd613b6a565b808201828112600083128015821682158216171561390f5761390f613b6a565b6000600160ff1b8201613d8957613d89613b6a565b5060000390565b60008251613da28184602087016133be565b9190910192915050565b600082613dbb57613dbb613ce2565b600160ff1b821460001984141615613dd557613dd5613b6a565b500590565b6020810160048310613dfc57634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220a87a143d0b7fdf940f4d9be8dcaed930ed59d0f964d45bec59f0ae50373f25f264736f6c63430008140033",
    "sourceMap": "938:2381:25:-:0;;;1202:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:121;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1315:16:23;;;938:2381:25;;14:347:184;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:184;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:184;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:184;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1376::-;1366:6;1374;1418:9;1409:7;1405:23;1448:3;1444:2;1440:12;1437:32;;;1465:1;1462;1455:12;1437:32;1488:6;1514:2;1510;1506:11;1503:31;;;1530:1;1527;1520:12;1503:31;1556:17;;:::i;:::-;1543:30;;1596:48;1634:9;1596:48;:::i;:::-;1589:5;1582:63;1677:57;1730:2;1719:9;1715:18;1677:57;:::i;:::-;1672:2;1665:5;1661:14;1654:81;1788:2;1777:9;1773:18;1767:25;1762:2;1755:5;1751:14;1744:49;1846:2;1835:9;1831:18;1825:25;1820:2;1813:5;1809:14;1802:49;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;2025:3;2014:9;2010:19;2004:26;1998:3;1991:5;1987:15;1980:51;2085:3;2074:9;2070:19;2064:26;2058:3;2051:5;2047:15;2040:51;2110:3;2166:2;2155:9;2151:18;2145:25;2140:2;2133:5;2129:14;2122:49;;2190:3;2225:57;2278:2;2267:9;2263:18;2225:57;:::i;:::-;2209:14;;;2202:81;2302:3;2337:57;2375:18;;;2337:57;:::i;:::-;2321:14;;;2314:81;2414:3;2449:62;2503:7;2483:18;;;2449:62;:::i;:::-;2444:2;2437:5;2433:14;2426:86;;2531:5;2521:15;;2555:57;2608:2;2597:9;2593:18;2555:57;:::i;:::-;2545:67;;;;1242:1376;;;;;:::o;:::-;938:2381:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106101d95760003560e01c80637ecebe0011610104578063c55dae63116100a2578063e44808bc11610071578063e44808bc1461042f578063e985e9c514610442578063fba5600814610455578063fbfa77cf1461048457600080fd5b8063c55dae63146103df578063c69e16ad146103ff578063cf210e6514610407578063d81657431461041a57600080fd5b8063ab033ea9116100de578063ab033ea914610384578063b0d9658014610397578063bd85b039146103ac578063becee9c3146103bf57600080fd5b80637ecebe001461034b5780639cd241af1461035e578063a22cb4651461037157600080fd5b806321ff32a91161017c5780634e41a1fb1161014b5780634e41a1fb146102fd5780634ed2d6ac1461031057806360246c88146103235780637180c8ca1461033857600080fd5b806321ff32a9146102935780633656eec2146102b45780633e691db9146102c757806346fbf68e146102da57600080fd5b806314e5f07b116101b857806314e5f07b1461022f57806317fad7fc146102425780631c0f12b61461025557806320fc48811461026857600080fd5b8062ad800c146101de57806301681a621461020757806302329a291461021c575b600080fd5b6101f16101ec3660046133a5565b61048c565b6040516101fe919061340e565b60405180910390f35b61021a610215366004613436565b6104c3565b005b61021a61022a366004613461565b6108b8565b61021a61023d36600461347e565b6108c4565b61021a61025036600461355f565b6108e0565b61021a6102633660046135f4565b6108f6565b61027b6102763660046133a5565b610903565b60405190516001600160801b031681526020016101fe565b6102a66102a136600461363c565b610944565b6040519081526020016101fe565b6102a66102c236600461367e565b61098a565b6102a66102d53660046136ae565b6109c3565b6102ed6102e8366004613436565b6109ce565b60405190151581526020016101fe565b6101f161030b3660046133a5565b610a04565b61021a61031e3660046136e9565b610a12565b61032b610a60565b6040516101fe9190613733565b61021a6103463660046137d4565b610c8d565b6102a6610359366004613436565b610c9b565b61021a61036c366004613802565b610cc7565b61021a61037f3660046137d4565b610cd8565b61021a610392366004613436565b610d44565b61039f610d4d565b6040516101fe919061383a565b6102a66103ba3660046133a5565b610fd6565b6103d26103cd366004613917565b610ff8565b6040516101fe9190613959565b6103e76110b3565b6040516001600160a01b0390911681526020016101fe565b6102a66110f3565b6102a66104153660046133a5565b61110d565b610422611156565b6040516101fe919061399d565b61021a61043d366004613aae565b611262565b6102ed610450366004613b0d565b6112aa565b61045d6112ee565b6040805182516001600160801b0390811682526020938401511692810192909252016101fe565b6103e761134d565b60606104be61049a8361138d565b6040516020016104aa919061340e565b6040516020818303038152906040526114bb565b919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480159061050c5750336000908152600a602052604090205460ff16155b15610529576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316148061059a57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316145b156105b85760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561061f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106439190613b3b565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156106ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d19190613b3b565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561071b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073f9190613b3b565b90506107756001600160a01b0385167f0000000000000000000000000000000000000000000000000000000000000000836114df565b6040516370a0823160e01b815230600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156107db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ff9190613b3b565b14158061089457506040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561086d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108919190613b3b565b14155b156108b2576040516313dd85ff60e31b815260040160405180910390fd5b50505050565b6108c181611531565b50565b6108d58989898989898989896115b4565b505050505050505050565b6108ee8686868686866117c7565b505050505050565b6108b2848484843361187b565b6040805160208101909152600081526104be600760008481526020019081526020016000206040516020016104aa91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261098391016104aa565b9392505050565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526109bd91016104aa565b92915050565b60006109bd82611a3c565b6001600160a01b0381166000908152600a602090815260408083205490516104be926104aa9260ff169101901515815260200190565b60606104be61049a83611bb7565b83610a1c81611ca9565b6001600160a01b0316336001600160a01b031614610a4d57604051632aab8bd360e01b815260040160405180910390fd5b610a5985858585611d66565b5050505050565b610ad9604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610ae3611dd3565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610b4e9190613b80565b610b589190613b93565b90506000808311610b6a576000610b85565b610b8583610b7f610b7a86611e6b565b611fd3565b90612003565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610c5957610c548486612018565b610c5c565b60005b81526002546001600160801b0316602091820152604051919250610c86916104aa91849101613733565b5050505090565b610c97828261202d565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104be91016104aa565b610cd383838333611d66565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108c1816120a5565b610d556132f5565b610fd36040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104aa919061383a565b90565b6000818152600c60209081526040808320548151928301526104be91016104aa565b606060008267ffffffffffffffff81111561101557611015613ba6565b60405190808252806020026020018201604052801561103e578160200160208202803683370190505b50905060005b8381101561109757600085858381811061106057611060613bbc565b9050602002013590506000815490508084848151811061108257611082613bbc565b60209081029190910101525050600101611044565b506110ac816040516020016104aa9190613959565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610fd391016104aa565b6000610fd36009546040516020016104aa91815260200190565b60006104be61114461113f7f000000000000000000000000000000000000000000000000000000000000000085613b80565b612119565b6040516020016104aa91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610fd360016040516020016104aa919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461126c81611ca9565b6001600160a01b0316336001600160a01b03161461129d57604051632aab8bd360e01b815260040160405180910390fd5b6108ee868686868661187b565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916109bd91016104aa565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610fd3906060016104aa565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610fd391016104aa565b606060f882901c6001600160f81b03831660006113a982612161565b905060008360038111156113bf576113bf613b54565b036113f1576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506114b3565b600183600381111561140557611405613b54565b03611431578060405160200161141b9190613bd2565b60405160208183030381529060405293506114b3565b600283600381111561144557611445613b54565b0361145b578060405160200161141b9190613c0b565b600383600381111561146f5761146f613b54565b036114b3576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016114d6919061340e565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610cd390849061226e565b336000908152600a602052604090205460ff16611560576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906115a990831515815260200190565b60405180910390a150565b834211156115d55760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166115fc5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156116ea573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461172857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061174e90613c45565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806117e457506001600160a01b038516155b156118025760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118225760405163174861a760e31b815260040160405180910390fd5b60005b838110156118725761186a85858381811061184257611842613bbc565b90506020020135888886868681811061185d5761185d613bbc565b905060200201353361187b565b600101611825565b50505050505050565b6001600160a01b038416158061189857506001600160a01b038316155b156118b65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461197a576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff1661197a576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611978576000868152600e602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611972908490613b93565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906119ac908490613b93565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906119e3908490613b80565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611a466122d1565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016611a7d6020840184613436565b6001600160a01b031614611aa457604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff16158015611aed5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015611b0457506008546001600160a01b03163314155b15611b21576040516282b42960e81b815260040160405180910390fd5b6000611b2b611dd3565b600980546000909155909150611b428183866122fb565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611b9a8585886124c4565b60405190815260200160405180910390a250506104be6001600055565b606060f882901c6001600160f81b0383166000611bd382612161565b90506000836003811115611be957611be9613b54565b03611c1b576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506114b3565b6001836003811115611c2f57611c2f613b54565b03611c45578060405160200161141b9190613c5e565b6002836003811115611c5957611c59613b54565b03611c6f578060405160200161141b9190613c96565b6003836003811115611c8357611c83613b54565b036114b3576040516c485950455244524956452d575360981b6020820152602d016114a1565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611e42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e669190613b3b565b905090565b611ec860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e08201526004549091610100830191611f9991166124f3565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611fcb929004166124f3565b905292915050565b6000806000611fe184612569565b91509150806110ac5760405163aeeb825d60e01b815260040160405180910390fd5b60006109838383670de0b6b3a76400006125e3565b600061098383670de0b6b3a7640000846125e3565b6008546001600160a01b03163314612057576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b031633146120cf576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c600061212a600285612601565b815260200190815260200160002054600c6000612148600186612601565b8152602001908152602001600020546109bd9190613cc2565b60408051604d808252608082019092526060919060009082602082018180368337019050509050612193600a85613cf8565b61219e906030613b80565b60f81b816121ad600185613b93565b815181106121bd576121bd613bbc565b60200101906001600160f81b031916908160001a9053506121df600a85613d0c565b935060015b8415612260576121f5600a86613cf8565b612200906030613b80565b60f81b8260016122108487613b93565b61221a9190613b93565b8151811061222a5761222a613bbc565b60200101906001600160f81b031916908160001a90535061224c600a86613d0c565b94508061225881613c45565b9150506121e4565b918290030190815292915050565b60006122836001600160a01b03841683612636565b905080516000141580156122a85750808060200190518101906122a69190613d20565b155b15610cd357604051635274afe760e01b81526001600160a01b03841660048201526024016114d6565b6002600054036122f457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000806123088585612003565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612370573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123949190613b3b565b9450846000036123a8576000915050610983565b6123b86040840160208501613461565b15612477576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652866123fa6020870187613436565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561244c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124709190613b3b565b91506124bc565b6124b86124876020850185613436565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690876114df565b8491505b509392505050565b60006124d66040830160208401613461565b156124e2575082610983565b6124ec8484612003565b9050610983565b600080670de0b6b3a7640000612507612644565b6125119190613d3d565b905080831161252157600061252b565b61252b8184613b93565b9150610983612562670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d3d565b8390612018565b600080600080600061257a8661267a565b915091508061259157506000958695509350505050565b8560a0015161259f876128bd565b87516125ac908590613d54565b6125b69190613d54565b6125c09190613cc2565b9250505060008112156125d95750600093849350915050565b9360019350915050565b60008260001904841183021582026125fa57600080fd5b5091020490565b60006001600160f81b0382111561262b5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606061098383836000612924565b60006126707f000000000000000000000000000000000000000000000000000000000000000042613cf8565b611e669042613b93565b600080600061269c84610140015185610120015161200390919063ffffffff16565b61010085015160e08601516126b0916129c1565b6126ba9190613cc2565b905060006126d0856000015186602001516129d6565b905060008213156127d3576000829050600080612721886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006127129190613b93565b8d606001518e608001516129f3565b915091508061273a575060009788975095505050505050565b82821061278f576000612774858a60400151868c60c00151670de0b6b3a76400006127659190613b93565b8d606001518e60800151612ae2565b905061277f81613d74565b9960019950975050505050505050565b60008860200151126127c25760a08801516127aa9085613b93565b6127b390613d74565b98600198509650505050505050565b60a088015188516127aa9190613b93565b60008212156128af5760006127e783613d74565b9050600061281b8388604001518960c00151670de0b6b3a764000061280c9190613b93565b8a606001518b60800151612b12565b90508181106128575760006127b3848960400151858b60c00151670de0b6b3a76400006128489190613b93565b8c606001518d60800151612ba8565b60006128898489604001518a60c00151670de0b6b3a764000061287a9190613b93565b8b606001518c60800151612c80565b90506128a58860600151838561289f9190613b93565b90612018565b6127b39082613b80565b506000946001945092505050565b60006128ec826101000151670de0b6b3a76400006128db9190613b93565b606084015160e08501519190612d0f565b61291a836101400151670de0b6b3a76400006129089190613b93565b606085015161012086015191906125e3565b6109bd9190613cc2565b6060814710156129495760405163cd78605960e01b81523060048201526024016114d6565b600080856001600160a01b031684866040516129659190613d90565b60006040518083038185875af1925050503d80600081146129a2576040519150601f19603f3d011682016040523d82523d6000602084013e6129a7565b606091505b50915091506129b7868383612d35565b9695505050505050565b60006109838383670de0b6b3a7640000612d0f565b6000806129e38385613cc2565b9050600081121561098357600080fd5b6000806000881215612a1557612a0888613d74565b612a129087613b80565b95505b6000612a218a8a6129d6565b90506000612a32828a898989612d91565b90506000612a55612a4d89612a47898d6129c1565b90612dc0565b889088612d0f565b612a5f9083613b93565b9050670de0b6b3a76400008110612a9357612a8c612a85670de0b6b3a76400008a612018565b8290612dc0565b9050612aab565b612aa8612a85670de0b6b3a76400008a612e17565b90505b89811015612ac25760008094509450505050612ad6565b612acc8a82613b93565b6001945094505050505b97509795505050505050565b600080612af3888888888888612e2c565b909250905080612b0757612b076000612eee565b509695505050505050565b600080612b228787878787612f09565b90506000612b4d670de0b6b3a7640000612b3c8787612018565b612b469190613b80565b8390612e17565b9050670de0b6b3a76400008110612b7a57612b73612a85670de0b6b3a764000088612e17565b9050612b92565b612b8f612a85670de0b6b3a764000088612018565b90505b612b9c8188613b93565b98975050505050505050565b600080612bb88888878787612f09565b905085871015612bcc57612bcc6000612eee565b612bda85612a47888a613b93565b965086811015612bee57612bee6000612eee565b6000612c068486612bff8b86613b93565b9190612d0f565b9050670de0b6b3a76400008110612c3357612c2c612a85670de0b6b3a764000088612e17565b9050612c4b565b612c48612a85670de0b6b3a764000088612018565b90505b612c558185612e17565b905088811015612c6957612c696000612eee565b612c738982613b93565b9998505050505050505050565b600080612c908787878787612d91565b90506000612cb4670de0b6b3a7640000612caa8787612e17565b6125629190613b80565b9050670de0b6b3a76400008110612ce157612cda612a85670de0b6b3a764000088612018565b9050612cf9565b612cf6612a85670de0b6b3a764000088612e17565b90505b612d038185612018565b9050612b9c8882613b93565b6000826000190484118302158202612d2657600080fd5b50910281810615159190040190565b606082612d4a57612d4582612f2e565b610983565b8151158015612d6157506001600160a01b0384163b155b15612d8a57604051639996b31560e01b81526001600160a01b03851660048201526024016114d6565b5080610983565b6000612d9d8585612dc0565b612db6612dae86612a47868b612003565b8590856125e3565b6129b79190613b80565b600081600003612dd95750670de0b6b3a76400006109bd565b82600003612de9575060006109bd565b816000612df585612f57565b9050818102612e0c670de0b6b3a764000082613dac565b90506129b78161316a565b600061098383670de0b6b3a764000084612d0f565b6000806000612e3e8989888888612f09565b9050612e4e86612a47898b613b80565b975087811015612e65576000809250925050612ee3565b6000612e768587612bff8c86613b93565b9050670de0b6b3a76400008110612ea357612e9c612a85670de0b6b3a764000089612e17565b9050612ebb565b612eb8612a85670de0b6b3a764000089612018565b90505b612ec58186612e17565b9050808a1115612edc57612ed9818b613b93565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016114d69190613dda565b6000612f158585612dc0565b612db6612f2686612a47868b6129c1565b859085612d0f565b805115612f3e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000808213612f795760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361318557506000919050565b680755bf798b4a1bf1e582126131ae576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016133a06040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156133b757600080fd5b5035919050565b60005b838110156133d95781810151838201526020016133c1565b50506000910152565b600081518084526133fa8160208601602086016133be565b601f01601f19169290920160200192915050565b60208152600061098360208301846133e2565b6001600160a01b03811681146108c157600080fd5b60006020828403121561344857600080fd5b813561098381613421565b80151581146108c157600080fd5b60006020828403121561347357600080fd5b813561098381613453565b60008060008060008060008060006101208a8c03121561349d57600080fd5b8935985060208a0135975060408a01356134b681613421565b965060608a01356134c681613421565b955060808a01356134d681613453565b945060a08a0135935060c08a013560ff811681146134f357600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261352557600080fd5b50813567ffffffffffffffff81111561353d57600080fd5b6020830191508360208260051b850101111561355857600080fd5b9250929050565b6000806000806000806080878903121561357857600080fd5b863561358381613421565b9550602087013561359381613421565b9450604087013567ffffffffffffffff808211156135b057600080fd5b6135bc8a838b01613513565b909650945060608901359150808211156135d557600080fd5b506135e289828a01613513565b979a9699509497509295939492505050565b6000806000806080858703121561360a57600080fd5b84359350602085013561361c81613421565b9250604085013561362c81613421565b9396929550929360600135925050565b60008060006060848603121561365157600080fd5b83359250602084013561366381613421565b9150604084013561367381613421565b809150509250925092565b6000806040838503121561369157600080fd5b8235915060208301356136a381613421565b809150509250929050565b6000602082840312156136c057600080fd5b813567ffffffffffffffff8111156136d757600080fd5b82016060818503121561098357600080fd5b600080600080608085870312156136ff57600080fd5b84359350602085013561371181613421565b925060408501359150606085013561372881613421565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156137e757600080fd5b82356137f281613421565b915060208301356136a381613453565b60008060006060848603121561381757600080fd5b83359250602084013561382981613421565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161386660208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516138ca828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561392a57600080fd5b823567ffffffffffffffff81111561394157600080fd5b61394d85828601613513565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561399157835183529284019291840191600101613975565b50909695505050505050565b81516001600160801b03168152610180810160208301516139c960208401826001600160801b03169052565b5060408301516139e460408401826001600160801b03169052565b5060608301516139ff60608401826001600160801b03169052565b506080830151613a146080840182600f0b9052565b5060a0830151613a2f60a08401826001600160801b03169052565b5060c0830151613a4a60c08401826001600160801b03169052565b5060e0830151613a6560e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b0381168285015261390f565b600080600080600060a08688031215613ac657600080fd5b853594506020860135613ad881613421565b93506040860135613ae881613421565b9250606086013591506080860135613aff81613421565b809150509295509295909350565b60008060408385031215613b2057600080fd5b8235613b2b81613421565b915060208301356136a381613421565b600060208284031215613b4d57600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156109bd576109bd613b6a565b818103818111156109bd576109bd613b6a565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613bfe8160118501602087016133be565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613c388160128501602087016133be565b9190910160120192915050565b600060018201613c5757613c57613b6a565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613c898160108501602087016133be565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613bfe8160118501602087016133be565b81810360008312801583831316838312821617156110ac576110ac613b6a565b634e487b7160e01b600052601260045260246000fd5b600082613d0757613d07613ce2565b500690565b600082613d1b57613d1b613ce2565b500490565b600060208284031215613d3257600080fd5b815161098381613453565b80820281158282048414176109bd576109bd613b6a565b808201828112600083128015821682158216171561390f5761390f613b6a565b6000600160ff1b8201613d8957613d89613b6a565b5060000390565b60008251613da28184602087016133be565b9190910192915050565b600082613dbb57613dbb613ce2565b600160ff1b821460001984141615613dd557613dd5613b6a565b500590565b6020810160048310613dfc57634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220a87a143d0b7fdf940f4d9be8dcaed930ed59d0f964d45bec59f0ae50373f25f264736f6c63430008140033",
    "sourceMap": "938:2381:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15700:137:16;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1889:1210:25;;;;;;:::i;:::-;;:::i;:::-;;2164:70:16;;;;;;:::i;:::-;;:::i;7617:482::-;;;;;;:::i;:::-;;:::i;6092:209::-;;;;;;:::i;:::-;;:::i;3025:240::-;;;;;;:::i;:::-;;:::i;8693:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5135:13:184;;-1:-1:-1;;;;;5131:54:184;5113:73;;5101:2;5086:18;8693:183:16;4911:281:184;15358:223:16;;;;;;:::i;:::-;;:::i;:::-;;;5820:25:184;;;5808:2;5793:18;15358:223:16;5674:177:184;14318:173:16;;;;;;:::i;:::-;;:::i;1838:174::-;;;;;;:::i;:::-;;:::i;8261:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7096:14:184;;7089:22;7071:41;;7059:2;7044:18;8261:121:16;6931:187:184;15960:141:16;;;;;;:::i;:::-;;:::i;4462:225::-;;;;;;:::i;:::-;;:::i;10709:1619::-;;;:::i;:::-;;;;;;;:::i;2597:94::-;;;;;;:::i;:::-;;:::i;16250:119::-;;;;;;:::i;:::-;;:::i;5626:179::-;;;;;;:::i;:::-;;:::i;4919:277::-;;;;;;:::i;:::-;;:::i;2344:83::-;;;;;;:::i;:::-;;:::i;9459:1075::-;;;:::i;:::-;;;;;;;:::i;14626:129::-;;;;;;:::i;:::-;;:::i;13583:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;8457:101::-;;;:::i;:::-;;;-1:-1:-1;;;;;12648:32:184;;;12630:51;;12618:2;12603:18;8457:101:16;12484:203:184;12972:132:16;;;:::i;9041:213::-;;;;;;:::i;:::-;;:::i;13183:159::-;;;:::i;:::-;;;;;;;:::i;3670:285::-;;;;;;:::i;:::-;;:::i;14944:186::-;;;;;;:::i;:::-;;:::i;12452:367::-;;;:::i;:::-;;;;16131:13:184;;-1:-1:-1;;;;;16127:22:184;;;16109:41;;16210:4;16198:17;;;16192:24;16188:33;16166:20;;;16159:63;;;;16029:18;12452:367:16;15850:378:184;3223:94:25;;;:::i;15700:137:16:-;15754:13;15779:51;15798:30;15820:7;15798:21;:30::i;:::-;15787:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;15779:7;:51::i;:::-;15700:137;;;:::o;1889:1210:25:-;2011:10;-1:-1:-1;;;;;2025:13:25;2011:27;;;;;:52;;-1:-1:-1;2052:10:25;2043:20;;;;:8;:20;;;;;;;;2042:21;2011:52;2007:116;;;2086:26;;-1:-1:-1;;;2086:26:25;;;;;;;;;;;2007:116;2243:10;-1:-1:-1;;;;;2215:39:25;2223:7;-1:-1:-1;;;;;2215:39:25;;:90;;;;2298:6;-1:-1:-1;;;;;2270:35:25;2278:7;-1:-1:-1;;;;;2270:35:25;;2215:90;2198:180;;;2337:30;;-1:-1:-1;;;2337:30:25;;;;;;;;;;;2198:180;2505:35;;-1:-1:-1;;;2505:35:25;;2534:4;2505:35;;;12630:51:184;2483:19:25;;2505:10;-1:-1:-1;;;;;2505:20:25;;;;12603:18:184;;2505:35:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2573:31;;-1:-1:-1;;;2573:31:25;;2598:4;2573:31;;;12630:51:184;2483:57:25;;-1:-1:-1;2550:20:25;;-1:-1:-1;;;;;2573:6:25;:16;;;;12603:18:184;;2573:31:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2714:32;;-1:-1:-1;;;2714:32:25;;2740:4;2714:32;;;12630:51:184;2550:54:25;;-1:-1:-1;2696:15:25;;-1:-1:-1;;;;;2714:17:25;;;;;12603:18:184;;2714:32:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2696:50;-1:-1:-1;2756:60:25;-1:-1:-1;;;;;2756:36:25;;2793:13;2696:50;2756:36;:60::i;:::-;2912:35;;-1:-1:-1;;;2912:35:25;;2941:4;2912:35;;;12630:51:184;2951:11:25;;2912:10;-1:-1:-1;;;;;2912:20:25;;;;12603:18:184;;2912:35:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;:113;;;-1:-1:-1;2978:31:25;;-1:-1:-1;;;2978:31:25;;3003:4;2978:31;;;12630:51:184;3013:12:25;;2978:6;-1:-1:-1;;;;;2978:16:25;;;;12603:18:184;;2978:31:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:47;;2912:113;2895:198;;;3057:25;;-1:-1:-1;;;3057:25:25;;;;;;;;;;;2895:198;1929:1170;;;1889:1210;:::o;2164:70:16:-;2212:15;2219:7;2212:6;:15::i;:::-;2164:70;:::o;7617:482::-;7882:210;7909:15;7938:14;7966:5;7985:7;8006:9;8029:8;8051:1;8066;8081;7882:13;:210::i;:::-;7617:482;;;;;;;;;:::o;6092:209::-;6253:41;6272:4;6278:2;6282:3;;6287:6;;6253:18;:41::i;:::-;6092:209;;;;;;:::o;3025:240::-;3206:52;3220:7;3229:4;3235:2;3239:6;3247:10;3206:13;:52::i;8693:183::-;-1:-1:-1;;;;;;;;;;;;8819:50:16;8838:12;:29;8851:15;8838:29;;;;;;;;;;;8827:41;;;;;;16868:13:184;-1:-1:-1;;;;;16864:54:184;16846:73;;16834:2;16819:18;;16647:278;15358:223:16;15489:7;15527:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;15527:36:16;;;;;;;;;;;:45;;;;;;;;;;;15516:57;;;;;5820:25:184;15508:66:16;;5793:18:184;15516:57:16;5674:177:184;15508:66:16;15358:223;;;;;:::o;14318:173::-;14416:7;14454:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;14454:28:16;;;;;;;;;;14443:40;;;;;5820:25:184;14435:49:16;;5793:18:184;14443:40:16;5674:177:184;14435:49:16;14318:173;;;;:::o;1838:174::-;1939:16;1974:31;1996:8;1974:21;:31::i;8261:121::-;-1:-1:-1;;;;;8355:18:16;;8320:4;8355:18;;;:8;:18;;;;;;;;;8344:30;;8336:39;;8344:30;;8355:18;;;8344:30;7096:14:184;;7089:22;7071:41;;7059:2;7044:18;;6931:187;15960:141:16;16016:13;16041:53;16060:32;16084:7;16060:23;:32::i;4462:225::-;4614:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;4633:47:16::1;4646:7;4655:8;4665:6;4673;4633:12;:47::i;:::-;4462:225:::0;;;;;:::o;10709:1619::-;10755:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10755:27:16;10794:23;10820:21;:19;:21::i;:::-;10987:13;:29;10924:12;:48;;;;10851:21;10875:34;;;;;10794:47;;-1:-1:-1;10851:21:16;-1:-1:-1;;;;;10987:29:16;;;;10875:97;;10924:48;10875:97;:::i;:::-;:141;;;;:::i;:::-;10851:165;;11026:20;11067:1;11049:15;:19;:178;;11226:1;11049:178;;;11083:128;11195:15;11083:86;11129:39;11152:15;11129:22;:39::i;:::-;11083:45;:86::i;:::-;:111;;:128::i;:::-;11276:1006;;;;;;;;11326:12;:26;-1:-1:-1;;;;;11326:26:16;;;11276:1006;;11383:28;;;;;;11276:1006;;;;11445:31;;-1:-1:-1;;;;;11445:31:16;;;;11276:1006;;;;;;;-1:-1:-1;;;11511:32:16;;;;;;11276:1006;;;;11571:25;;;;;;11276:1006;;;;;;;;;;;;;;;;11383:28;11674:29;;;;;;11276:1006;;;;11445:31;11742:36;;;;11326:26;11276:1006;;;11811:30;;;;;;11276:1006;;;;11881:37;;;;;;11276:1006;;;;12127:13;:29;;;;11276:1006;;;;12196:22;;;;;;;11276:1006;;;;11026:201;;-1:-1:-1;11237:36:16;;11276:1006;;;11988:18;;:92;;12045:35;:12;12066:13;12045:20;:35::i;:::-;11988:92;;;12025:1;11988:92;11276:1006;;12246:25;;-1:-1:-1;;;;;12246:25:16;11276:1006;;;;;12300:20;;11237:1045;;-1:-1:-1;12292:29:16;;12300:20;;11237:1045;;12300:20;;:::i;12292:29::-;10784:1544;;;;10709:1619;:::o;2597:94::-;2661:23;2672:3;2677:6;2661:10;:23::i;:::-;2597:94;;:::o;16250:119::-;-1:-1:-1;;;;;16344:16:16;;16306:7;16344:16;;;:7;:16;;;;;;;;;16333:28;;;;;5820:25:184;16325:37:16;;5793:18:184;16333:28:16;5674:177:184;5626:179:16;5747:51;5760:7;5769:8;5779:6;5787:10;5747:12;:51::i;:::-;5626:179;;;:::o;4919:277::-;5053:10;5035:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;5035:39:16;;;;;;;;;;;;:50;;-1:-1:-1;;5035:50:16;;;;;;;;;;5143:46;;7071:41:184;;;5035:39:16;;5053:10;5143:46;;7044:18:184;5143:46:16;;;;;;;4919:277;;:::o;2344:83::-;2400:20;2415:4;2400:14;:20::i;9459:1075::-;9531:29;;:::i;:::-;9576:951;9625:878;;;;;;;;9681:10;-1:-1:-1;;;;;9625:878:16;;;;;9728:14;-1:-1:-1;;;;;9625:878:16;;;;;9780:15;9625:878;;;;9841:23;9625:878;;;;9908:21;9625:878;;;;9977:25;9625:878;;;;10042:17;9625:878;;;;10101:19;9625:878;;;;10155:12;9625:878;;;;10201:11;;;;;;;;;-1:-1:-1;;;;;10201:11:16;-1:-1:-1;;;;;9625:878:16;;;;;10248:13;-1:-1:-1;;;;;9625:878:16;;;;;10289:195;;;;;;;;10331:9;10289:195;;;;10366:8;10289:195;;;;10400:16;10289:195;;;;10442:20;10289:195;;;9625:878;;;9597:920;;;;;;;;:::i;9576:951::-;9459:1075;:::o;14626:129::-;14687:7;14725:21;;;:12;:21;;;;;;;;;14714:33;;;;;5820:25:184;14706:42:16;;5793:18:184;14714:33:16;5674:177:184;13583:565:16;13661:16;13689:23;13729:6;13715:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13715:28:16;;13689:54;;13815:9;13810:294;13830:17;;;13810:294;;;13865:12;13880:6;;13887:1;13880:9;;;;;;;:::i;:::-;;;;;;;13865:24;;13903:12;13986:4;13980:11;13972:19;;14030:4;14018:6;14025:1;14018:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;14076:3:16;;13810:294;;;;14114:27;14133:6;14122:18;;;;;;;;:::i;14114:27::-;13679:469;13583:565;;;;:::o;8457:101::-;8528:22;;;-1:-1:-1;;;;;8539:10:16;12648:32:184;8528:22:16;;;12630:51:184;8501:7:16;;8520:31;;12603:18:184;8528:22:16;12484:203:184;12972:132:16;13035:7;13054:43;13073:22;;13062:34;;;;;;5820:25:184;;5808:2;5793:18;;5674:177;9041:213:16;9134:6;9152:95;9184:52;9200:35;9218:17;9200:15;:35;:::i;:::-;9184:15;:52::i;:::-;9173:64;;;;;;5820:25:184;;5808:2;5793:18;;5674:177;13183:159:16;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13302:33:16;13321:12;13310:24;;;;;;;18163:13:184;;-1:-1:-1;;;;;18257:18:184;;;4841:59;;18306:3;18337:18;;;18372:4;18357:20;;4841:59;18424:4;18412:17;;18406:24;18458:20;;;18495:4;18480:20;;4841:59;18529:20;;18566:4;18551:20;;4841:59;18618:4;18606:17;;18600:24;18662:2;18651:27;;;18680:18;;;12925:34;18727:20;;18764:4;18749:20;;4841:59;18816:4;18804:17;;18798:24;18850:20;;;18887:4;18872:20;;4841:59;18921:20;;18958:4;18943:20;;4841:59;19010:4;18998:17;;;18992:24;19058:4;19041:22;;;6905:13;6898:21;19080:6;19065:22;;6886:34;19121:1;19117:19;;;19113:30;6905:13;6898:21;19160:6;19145:22;;6886:34;-1:-1:-1;;;;;19204:2:184;19200:20;;;19196:57;19270:6;19255:22;;13024:55;19306:20;;;19343:6;19328:22;;4841:59;18133:3;18118:19;;17944:1413;3670:285:16;3839:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;3900:48:16::1;3914:7;3923:4;3929:2;3933:6;3941;3900:13;:48::i;14944:186::-:0;-1:-1:-1;;;;;15085:26:16;;;15050:4;15085:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;15074:48;;15085:36;;;;7096:14:184;7089:22;15074:48:16;;;7071:41:184;;;;15050:4:16;;15066:57;;7044:18:184;15074:48:16;6931:187:184;12452:367:16;-1:-1:-1;;;;;;;;;;;;;;;;;12622:166:16;;;;;;;;12686:13;:29;-1:-1:-1;;;;;12686:29:16;;;12622:166;;;-1:-1:-1;;;12747:22:16;;;;;12622:166;;;;;;;12594:208;;;;;16109:41:184;;;;16192:24;;16188:33;16166:20;;;16159:63;;;;12573:239:16;;16029:18:184;;12594:208:16;15850:378:184;3223:94:25;3291:18;;;-1:-1:-1;;;;;3302:6:25;12648:32:184;3291:18:25;;;12630:51:184;3263:8:25;;3283:27;;12603:18:184;3291::25;12484:203:184;2533:719:71;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:71;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:71;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;20485:29:184;3187:47:71;;;20473:42:184;20531:12;;3187:47:71;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;16578:106:16:-;16670:6;16647:30;;-1:-1:-1;;;16647:30:16;;;;;;;;:::i;:::-;;;;;;;;1303:160:118;1412:43;;;-1:-1:-1;;;;;20969:32:184;;1412:43:118;;;20951:51:184;21018:18;;;;21011:34;;;1412:43:118;;;;;;;;;;20924:18:184;;;;1412:43:118;;;;;;;;-1:-1:-1;;;;;1412:43:118;-1:-1:-1;;;1412:43:118;;;1385:71;;1405:5;;1385:19;:71::i;2185:350:63:-;2319:10;2310:20;;;;:8;:20;;;;;;;;2305:85;;2353:26;;-1:-1:-1;;;2353:26:63;;;;;;;;;;;2305:85;2455:21;:31;;;;;;;-1:-1:-1;;2455:31:63;;;;;;2501:27;;;;;;2479:7;7096:14:184;7089:22;7071:41;;7059:2;7044:18;;6931:187;2501:27:63;;;;;;;;2185:350;:::o;8383:1509:68:-;8725:8;8707:15;:26;8703:93;;;8756:29;;-1:-1:-1;;;8756:29:68;;;;;;;;;;;8703:93;-1:-1:-1;;;;;8857:19:68;;8853:92;;8899:35;;-1:-1:-1;;;8899:35:68;;;;;;;;;;;8853:92;-1:-1:-1;;;;;9372:14:68;;;9027:18;9372:14;;;:7;:14;;;;;;;;;9197:245;;;;;21337:25:184;;;21416:18;;;21409:43;;;;21488:15;;;21468:18;;;21461:43;21547:14;;21540:22;21520:18;;;21513:50;21579:19;;;21572:35;;;;21623:19;;;;21616:35;;;9197:245:68;;;;;;;;;;21309:19:184;;;9197:245:68;;;9166:294;;;;;;;;-1:-1:-1;;;9071:403:68;;;21920:27:184;21963:11;;;21956:27;;;21999:12;;;21992:28;22036:12;;9071:403:68;;;-1:-1:-1;;9071:403:68;;;;;;;;;9048:436;;9071:403;9048:436;;;;9494:14;9511:30;;;;;;;;;22286:25:184;;;22359:4;22347:17;;22327:18;;;22320:45;;;;22381:18;;;22374:34;;;22424:18;;;22417:34;;;9048:436:68;;-1:-1:-1;9494:14:68;9511:30;;22258:19:184;;9511:30:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9494:47;;9565:5;-1:-1:-1;;;;;9555:15:68;:6;-1:-1:-1;;;;;9555:15:68;;9551:83;;9593:30;;-1:-1:-1;;;9593:30:68;;;;;;;;;;;9551:83;-1:-1:-1;;;;;9688:14:68;;;;;;:7;:14;;;;;9686:16;;9688:14;;;9686:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;9739:24:68;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9739:45:68;;;;;;;;;;9844:41;;7071::184;;;9844::68;;7044:18:184;9844:41:68;;;;;;;8639:1253;;8383:1509;;;;;;;;;:::o;2247:716::-;-1:-1:-1;;;;;2459:18:68;;;;:38;;-1:-1:-1;;;;;;2481:16:68;;;2459:38;2455:111;;;2520:35;;-1:-1:-1;;;2520:35:68;;;;;;;;;;;2455:111;2622:27;;;2618:103;;2672:38;;-1:-1:-1;;;2672:38:68;;;;;;;;;;;2618:103;2786:9;2781:176;2801:14;;;2781:176;;;2833:54;2847:3;;2851:1;2847:6;;;;;;;:::i;:::-;;;;;;;2855:4;2861:2;2865:6;;2872:1;2865:9;;;;;;;:::i;:::-;;;;;;;2876:10;2833:13;:54::i;:::-;2929:3;;2781:176;;;;2247:716;;;;;;:::o;3314:1579::-;-1:-1:-1;;;;;3527:18:68;;;;:38;;-1:-1:-1;;;;;;3549:16:68;;;3527:38;3523:98;;;3586:35;;-1:-1:-1;;;3586:35:68;;;;;;;;;;;3523:98;3726:4;-1:-1:-1;;;;;3716:14:68;:6;-1:-1:-1;;;;;3716:14:68;;3712:888;;-1:-1:-1;;;;;3867:23:68;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3862:728;;3977:16;3996:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;3996:33:68;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4112:29:68;;4108:468;;4506:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4506:33:68;;;;;;;;;;;:41;;;;;;;;;;:51;;4551:6;;4506:27;:51;;4551:6;;4506:51;:::i;:::-;;;;-1:-1:-1;;4108:468:68;3900:690;3862:728;4744:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4744:25:68;;;;;;;;;:35;;4773:6;;4744:19;:35;;4773:6;;4744:35;:::i;:::-;;;;-1:-1:-1;;4789:19:68;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4789:23:68;;;;;;;;;:33;;4816:6;;4789:19;:33;;4816:6;;4789:33;:::i;:::-;;;;-1:-1:-1;;4837:49:68;;;22776:25:184;;;22832:2;22817:18;;22810:34;;;-1:-1:-1;;;;;4837:49:68;;;;;;;;;;;;;;22749:18:184;4837:49:68;;;;;;;3314:1579;;;;;:::o;985:1051:63:-;1100:16;2356:21:121;:19;:21::i;:::-;-1:-1:-1;;;;;1224:13:63::1;1200:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1200:37:63::1;;1196:110;;1260:35;;-1:-1:-1::0;;;1260:35:63::1;;;;;;;;;;;1196:110;1408:10;1399:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1398:21;:64:::0;::::1;;;-1:-1:-1::0;1435:10:63::1;-1:-1:-1::0;;;;;1449:13:63::1;1435:27;;;1398:64;:105;;;;-1:-1:-1::0;1492:11:63::1;::::0;-1:-1:-1;;;;;1492:11:63::1;1478:10;:25;;1398:105;1381:191;;;1535:26;;-1:-1:-1::0;;;1535:26:63::1;;;;;;;;;;;1381:191;1652:23;1678:21;:19;:21::i;:::-;1741:22;::::0;;1709:29:::1;1773::::0;;;1652:47;;-1:-1:-1;1823:59:63::1;1741:22:::0;1652:47;1873:8;1823:9:::1;:59::i;:::-;1812:70;;1931:13;-1:-1:-1::0;;;;;1897:132:63::1;;1958:61;1983:8;1993:15;2010:8;1958:24;:61::i;:::-;1897:132;::::0;5820:25:184;;;5808:2;5793:18;1897:132:63::1;;;;;;;1118:918;;2398:20:121::0;1713:1;2924:7;:21;2744:208;3384:705:71;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:71;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:71;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:71;;;23964:28:184;24008:12;;4038:33:71;23762:264:184;10142:590:68;10338:34;;;10357:4;10338:34;;;;20951:51:184;;;;21018:18;;;21011:34;;;;10338::68;;;;;;;;;20924:18:184;;;;10338:34:68;;10328:45;;;;;;;;;-1:-1:-1;;;;;;10512:147:68;;;24242:39:184;10576:14:68;24314:15:184;;;-1:-1:-1;;24310:53:184;24297:11;;;24290:74;24380:12;;;24373:28;10630:15:68;24417:12:184;;;;24410:28;;;;10512:147:68;;;;;;;;;;24454:12:184;;;;10512:147:68;;;10489:180;;;;;;10142:590::o;5350:301::-;5496:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5496:35:68;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5610:34;;5820:25:184;;;5496:35:68;;5610:34;;5793:18:184;5610:34:68;;;;;;;5350:301;;;;:::o;6024:123:23:-;6113:27;;-1:-1:-1;;;6113:27:23;;150:4:73;6113:27:23;;;5820:25:184;6087:7:23;;6113:6;-1:-1:-1;;;;;6113:22:23;;;;5793:18:184;;6113:27:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6106:34;;6024:123;:::o;9144:970:64:-;9239:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9239:39:64;9299:808;;;;;;;;9354:12;:26;-1:-1:-1;;;;;9354:26:64;;;9299:808;;9411:28;;;;9299:808;;;;-1:-1:-1;;;9467:25:64;;;;;;9299:808;;;;;;;;;;;;;9577:23;9299:808;;;;9636:21;9299:808;;;;9684:12;9299:808;;;;9411:28;9728:29;;;;9299:808;;;;9844:36;;9299:808;;9354:26;9299:808;;;9797:97;;9844:36;9797:29;:97::i;:::-;9299:808;;9927:30;;-1:-1:-1;;;;;;;;9927:30:64;;;;;;9299:808;;;;10045:37;;9299:808;;;;;9998:98;;10045:37;;;9998:29;:98::i;:::-;9299:808;;9290:817;9144:970;-1:-1:-1;;9144:970:64:o;6170:342:75:-;6273:7;6293:20;6315:12;6331:56;6370:7;6331:25;:56::i;:::-;6292:95;;;;6402:7;6397:80;;6432:34;;-1:-1:-1;;;6432:34:75;;;;;;;;;;;1535:119:73;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;3137:330:63:-;3269:11;;-1:-1:-1;;;;;3269:11:63;3255:10;:25;3251:89;;3303:26;;-1:-1:-1;;;3303:26:63;;;;;;;;;;;3251:89;-1:-1:-1;;;;;3405:13:63;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;3405:22:63;;;;;;;3442:18;;;3405:13;3442:18;3137:330;;:::o;2642:328::-;2766:11;;-1:-1:-1;;;;;2766:11:63;2752:10;:25;2748:89;;2800:26;;-1:-1:-1;;;2800:26:63;;;;;;;;;;;2748:89;2907:11;:18;;-1:-1:-1;;;;;;2907:18:63;-1:-1:-1;;;;;2907:18:63;;;;;;;;2940:23;;;;-1:-1:-1;;2940:23:63;2642:328;:::o;6343:827:64:-;6428:6;6962:12;:187;6996:135;7043:27;7096:13;6996:21;:135::i;:::-;6962:187;;;;;;;;;;;;6723:12;:186;6757:134;6804:26;6856:13;6757:21;:134::i;:::-;6723:186;;;;;;;;;;;;6699:464;;;;:::i;4247:1154:71:-;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:71;-1:-1:-1;4841:9:71;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:71;;;;;;;;-1:-1:-1;4878:10:71;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:71;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:71;;;;;;;;-1:-1:-1;5084:10:71;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:71;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:71:o;4059:629:118:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:118;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:118;;-1:-1:-1;;;;;12648:32:184;;4631:40:118;;;12630:51:184;12603:18;;4631:40:118;12484:203:184;2431:307:121;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:121;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;4345:1482:23:-;4498:23;;4835:28;:7;4851:11;4835:15;:28::i;:::-;4883:34;;-1:-1:-1;;;4883:34:23;;;;;5820:25:184;;;4814:49:23;;-1:-1:-1;4883:6:23;-1:-1:-1;;;;;4883:22:23;;;;5793:18:184;;4883:34:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4873:44;;5005:7;5016:1;5005:12;5001:51;;5040:1;5033:8;;;;;5001:51;5203:15;;;;;;;;:::i;:::-;5199:622;;;-1:-1:-1;;;;;5371:6:23;:13;;5402:7;5427:20;;;;:8;:20;:::i;:::-;5371:121;;-1:-1:-1;;;;;;5371:121:23;;;;;;;;;;25508:25:184;;;;-1:-1:-1;;;;;25607:15:184;25587:18;;;25580:43;5473:4:23;25639:18:184;;;25632:43;25481:18;;5371:121:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5353:139;;5199:622;;;5705:66;5741:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;5719:6:23;5705:35;;5763:7;5705:35;:66::i;:::-;5803:7;5785:25;;5199:622;4523:1304;4345:1482;;;;;:::o;25501:391:64:-;25670:7;25693:15;;;;;;;;:::i;:::-;25689:197;;;-1:-1:-1;25731:7:64;25724:14;;25689:197;25842:33;:7;25858:16;25842:15;:33::i;:::-;25835:40;;;;4785:450;4884:21;4917:24;150:4:73;4944:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;4917:52;;5011:16;4995:13;:32;:95;;5089:1;4995:95;;;5042:32;5058:16;5042:13;:32;:::i;:::-;4979:111;-1:-1:-1;5182:46:64;5204:23;150:4:73;5204:17:64;:23;:::i;:::-;5182:13;;:21;:46::i;6998:1166:75:-;7105:7;7114:4;7491:19;7535:20;7557:12;7573:65;7617:7;7573:26;:65::i;:::-;7534:104;;;;7657:7;7652:64;;-1:-1:-1;7692:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;;;6998:1166:75:o;7652:64::-;7896:7;:28;;;7840:30;7862:7;7840:21;:30::i;:::-;7767:21;;7760:61;;7808:13;;7760:61;:::i;:::-;:110;;;;:::i;:::-;:165;;;;:::i;:::-;7729:196;;7520:416;;8066:1;8051:12;:16;8047:64;;;-1:-1:-1;8091:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;8047:64::-;8137:12;8152:4;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;823:556:73:-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;2705:151:119:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;5348:223:64:-;5424:24;5526:37;5544:19;5526:15;:37;:::i;:::-;5495:69;;:15;:69;:::i;8492:7050:75:-;8600:6;8608:4;9410:23;9569:106;9624:7;:33;;;9569:7;:25;;;:33;;:106;;;;:::i;:::-;9487:32;;;;9456:24;;;;:64;;:30;:64::i;:::-;9436:253;;;;:::i;:::-;9410:279;;9699:30;9732:153;9809:7;:21;;;9848:7;:23;;;9732:59;:153::i;:::-;9699:186;;10135:1;10116:16;:20;10112:5397;;;10152:25;10188:16;10152:53;;10394:21;10417:12;10433:401;10514:7;:21;;;10557:7;:23;;;10602:7;:20;;;10644:7;:28;;;10700:7;:19;;;150:4:73;10694:25:75;;;;:::i;:::-;10741:7;:23;;;10786:7;:30;;;10433:59;:401::i;:::-;10393:441;;;;10853:7;10848:64;;-1:-1:-1;10888:1:75;;;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;8492:7050:75:o;10848:64::-;11089:17;11072:13;:34;11068:2044;;11126:21;11150:385;11246:22;11294:7;:20;;;11340:17;11389:7;:19;;;150:4:73;11383:25:75;;;;:::i;:::-;11434:7;:23;;;11483:7;:30;;;11150:70;:385::i;:::-;11126:409;-1:-1:-1;11561:22:75;11126:409;11561:22;:::i;:::-;11553:37;11585:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;;8492:7050:75:o;11068:2044::-;12275:1;12248:7;:23;;;:28;12244:854;;12427:28;;;;12370:85;;:22;:85;:::i;:::-;12333:148;;;:::i;:::-;12300:233;12507:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;8492:7050:75:o;12244:854::-;12973:28;;;;12949:21;;:52;;12973:28;12949:52;:::i;10112:5397::-;13237:1;13218:16;:20;13214:2295;;;13254:25;13290:17;13291:16;13290:17;:::i;:::-;13254:54;;13425:21;13449:262;13505:22;13545:7;:20;;;13589:7;:19;;;150:4:73;13583:25:75;;;;:::i;:::-;13626:7;:23;;;13667:7;:30;;;13449:38;:262::i;:::-;13425:286;;13889:17;13872:13;:34;13868:1631;;13926:21;13950:383;14044:22;14092:7;:20;;;14138:17;14187:7;:19;;;150:4:73;14181:25:75;;;;:::i;:::-;14232:7;:23;;;14281:7;:30;;;13950:68;:383::i;13868:1631::-;14662:23;14688:331;14773:22;14821:7;:20;;;14873:7;:19;;;150:4:73;14867:25:75;;;;:::i;:::-;14918:7;:23;;;14967:7;:30;;;14688:59;:331::i;:::-;14662:357;;15288:130;15365:7;:23;;;15309:13;15289:17;:33;;;;:::i;:::-;15288:43;;:130::i;:::-;15242:176;;:15;:176;:::i;13214:2295::-;-1:-1:-1;15527:1:75;;15530:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;8492:7050:75:o;15789:1157::-;15892:6;16769:156;16830:7;:32;;;150:4:73;16824:38:75;;;;:::i;:::-;16884:23;;;;16769:24;;;;;:156;:33;:156::i;:::-;16556:160;16620:7;:33;;;150:4:73;16614:39:75;;;;:::i;:::-;16675:23;;;;16556:25;;;;;:160;:36;:160::i;:::-;16532:407;;;;:::i;3180:392:119:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:119;;3394:4;3359:41;;;12630:51:184;12603:18;;3359:41:119;12484:203:184;3303:108:119;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:119;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:119:o;3117:115:73:-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;6471:340:74:-;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;15242:1794:77;15447:7;15456:4;15753:1;15746:4;:8;15742:67;;;15792:5;15793:4;15792:5;:::i;:::-;15777:21;;:4;:21;:::i;:::-;15770:28;;15742:67;16304:10;16317:55;16364:1;16367:4;16317:46;:55::i;:::-;16304:68;;16382:9;16394:22;16400:2;16404:1;16407;16410;16413:2;16394:5;:22::i;:::-;16382:34;-1:-1:-1;16426:16:77;16449:37;16460:21;16479:1;16460:14;:2;16469:4;16460:8;:14::i;:::-;:18;;:21::i;:::-;16449:1;;16483:2;16449:10;:37::i;:::-;16445:41;;:1;:41;:::i;:::-;16426:60;;150:4:73;16500:8:77;:15;16496:295;;16614:28;16627:14;150:4:73;16639:1:77;16627:11;:14::i;:::-;16614:8;;:12;:28::i;:::-;16603:39;;16496:295;;;16754:26;16767:12;150:4:73;16777:1:77;16767:9;:12::i;16754:26::-;16743:37;;16496:295;16948:1;16937:8;:12;16933:60;;;16973:1;16976:5;16965:17;;;;;;;;;16933:60;17010:12;17021:1;17010:8;:12;:::i;:::-;17024:4;17002:27;;;;;;;15242:1794;;;;;;;;;;;:::o;9013:583::-;9203:14;9229:12;9271:141;9323:2;9339:1;9354:2;9370:1;9385;9400:2;9271:38;:141::i;:::-;9251:161;;-1:-1:-1;9251:161:77;-1:-1:-1;9251:161:77;9422:168;;9450:129;9506:59;9450:38;:129::i;:::-;9219:377;9013:583;;;;;;;;:::o;13742:861::-;13901:7;14116:9;14128:20;14132:2;14136:1;14139;14142;14145:2;14128:3;:20::i;:::-;14116:32;-1:-1:-1;14158:16:77;14177:28;150:4:73;14185:13:77;:1;14195:2;14185:9;:13::i;:::-;:19;;;;:::i;:::-;14177:1;;:7;:28::i;:::-;14158:47;;150:4:73;14219:8:77;:15;14215:293;;14330:26;14343:12;150:4:73;14353:1:77;14343:9;:12::i;14330:26::-;14319:37;;14215:293;;;14469:28;14482:14;150:4:73;14494:1:77;14482:11;:14::i;14469:28::-;14458:39;;14215:293;14584:12;14588:8;14584:1;:12;:::i;:::-;14577:19;13742:861;-1:-1:-1;;;;;;;;13742:861:77:o;4244:1797::-;4432:7;4589:9;4601:20;4605:2;4609:1;4612;4615;4618:2;4601:3;:20::i;:::-;4589:32;;4695:2;4691:1;:6;4687:166;;;4713:129;4769:59;4713:38;:129::i;:::-;4895:15;4908:1;4896:6;4900:2;4896:1;:6;:::i;4895:15::-;4891:19;;4983:1;4979;:5;4975:165;;;5000:129;5056:59;5000:38;:129::i;:::-;5295:10;5308:23;5325:2;5329:1;5309:5;5313:1;5309;:5;:::i;:::-;5308:16;:23;:16;:23::i;:::-;5295:36;;150:4:73;5345:2:77;:9;5341:261;;5443:20;5450:12;150:4:73;5460:1:77;5450:9;:12::i;5443:20::-;5438:25;;5341:261;;;5569:22;5576:14;150:4:73;5588:1:77;5576:11;:14::i;5569:22::-;5564:27;;5341:261;5684:12;:2;5693;5684:8;:12::i;:::-;5679:17;;5772:2;5767;:7;5763:167;;;5790:129;5846:59;5790:38;:129::i;:::-;6027:7;6032:2;6027;:7;:::i;:::-;6020:14;4244:1797;-1:-1:-1;;;;;;;;;4244:1797:77:o;12036:1218::-;12195:7;12710:9;12722:22;12728:2;12732:1;12735;12738;12741:2;12722:5;:22::i;:::-;12710:34;-1:-1:-1;12754:17:77;12774:28;150:4:73;12784:11:77;:1;12792:2;12784:7;:11::i;:::-;:17;;;;:::i;12774:28::-;12754:48;;150:4:73;12816:9:77;:16;12812:300;;12932:29;12946:14;150:4:73;12958:1:77;12946:11;:14::i;12932:29::-;12920:41;;12812:300;;;13074:27;13088:12;150:4:73;13098:1:77;13088:9;:12::i;13074:27::-;13062:39;;12812:300;13133:21;:9;13151:2;13133:17;:21::i;:::-;13121:33;-1:-1:-1;13233:14:77;13245:2;13121:33;13233:14;:::i;2211:748:73:-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;4625:582:119:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:119;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:119;;-1:-1:-1;;;;;12648:32:184;;5121:24:119;;;12630:51:184;12603:18;;5121:24:119;12484:203:184;5041:119:119;-1:-1:-1;5180:10:119;5173:17;;18399:352:77;18540:7;18736:8;:1;18742;18736:5;:8::i;:::-;18694:39;18707:21;18726:1;18707:14;:2;18718;18707:10;:14::i;:21::-;18694:1;;18730:2;18694:12;:39::i;:::-;:50;;;;:::i;3740:838:73:-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;10285:1320:77:-;10479:14;10495:12;10657:9;10669:20;10673:2;10677:1;10680;10683;10686:2;10669:3;:20::i;:::-;10657:32;-1:-1:-1;10732:15:77;10745:1;10733:6;10737:2;10733:1;:6;:::i;10732:15::-;10728:19;;10829:1;10825;:5;10821:53;;;10854:1;10857:5;10846:17;;;;;;;10821:53;11029:10;11042:23;11059:2;11063:1;11043:5;11047:1;11043;:5;:::i;11042:23::-;11029:36;;150:4:73;11079:2:77;:9;11075:263;;11178:20;11185:12;150:4:73;11195:1:77;11185:9;:12::i;11178:20::-;11173:25;;11075:263;;;11305:22;11312:14;150:4:73;11324:1:77;11312:11;:14::i;11305:22::-;11300:27;;11075:263;11420:12;:2;11429;11420:8;:12::i;:::-;11415:17;;11530:2;11525;:7;11521:54;;;11557:7;11562:2;11557;:7;:::i;:::-;11548:16;;11521:54;11594:4;11584:14;;10509:1096;;10285:1320;;;;;;;;;;:::o;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;17543:343:77:-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;5743:516:119:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:119;;;;;;;;;;;8345:3611:73;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;-1:-1:-1;;;;;;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:184:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:184;;14:180;-1:-1:-1;14:180:184:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:184;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:184;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:184:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:184;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:118::-;1460:5;1453:13;1446:21;1439:5;1436:32;1426:60;;1482:1;1479;1472:12;1497:241;1553:6;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1661:9;1648:23;1680:28;1702:5;1680:28;:::i;1743:1050::-;1869:6;1877;1885;1893;1901;1909;1917;1925;1933;1986:3;1974:9;1965:7;1961:23;1957:33;1954:53;;;2003:1;2000;1993:12;1954:53;2039:9;2026:23;2016:33;;2096:2;2085:9;2081:18;2068:32;2058:42;;2150:2;2139:9;2135:18;2122:32;2163:39;2196:5;2163:39;:::i;:::-;2221:5;-1:-1:-1;2278:2:184;2263:18;;2250:32;2291:41;2250:32;2291:41;:::i;:::-;2351:7;-1:-1:-1;2410:3:184;2395:19;;2382:33;2424:30;2382:33;2424:30;:::i;:::-;2473:7;-1:-1:-1;2527:3:184;2512:19;;2499:33;;-1:-1:-1;2584:3:184;2569:19;;2556:33;2633:4;2620:18;;2608:31;;2598:59;;2653:1;2650;2643:12;2598:59;2676:7;2666:17;;;2730:3;2719:9;2715:19;2702:33;2692:43;;2782:3;2771:9;2767:19;2754:33;2744:43;;1743:1050;;;;;;;;;;;:::o;2798:367::-;2861:8;2871:6;2925:3;2918:4;2910:6;2906:17;2902:27;2892:55;;2943:1;2940;2933:12;2892:55;-1:-1:-1;2966:20:184;;3009:18;2998:30;;2995:50;;;3041:1;3038;3031:12;2995:50;3078:4;3070:6;3066:17;3054:29;;3138:3;3131:4;3121:6;3118:1;3114:14;3106:6;3102:27;3098:38;3095:47;3092:67;;;3155:1;3152;3145:12;3092:67;2798:367;;;;;:::o;3170:1066::-;3310:6;3318;3326;3334;3342;3350;3403:3;3391:9;3382:7;3378:23;3374:33;3371:53;;;3420:1;3417;3410:12;3371:53;3459:9;3446:23;3478:39;3511:5;3478:39;:::i;:::-;3536:5;-1:-1:-1;3593:2:184;3578:18;;3565:32;3606:41;3565:32;3606:41;:::i;:::-;3666:7;-1:-1:-1;3724:2:184;3709:18;;3696:32;3747:18;3777:14;;;3774:34;;;3804:1;3801;3794:12;3774:34;3843:70;3905:7;3896:6;3885:9;3881:22;3843:70;:::i;:::-;3932:8;;-1:-1:-1;3817:96:184;-1:-1:-1;4020:2:184;4005:18;;3992:32;;-1:-1:-1;4036:16:184;;;4033:36;;;4065:1;4062;4055:12;4033:36;;4104:72;4168:7;4157:8;4146:9;4142:24;4104:72;:::i;:::-;3170:1066;;;;-1:-1:-1;3170:1066:184;;-1:-1:-1;3170:1066:184;;4195:8;;3170:1066;-1:-1:-1;;;3170:1066:184:o;4241:541::-;4327:6;4335;4343;4351;4404:3;4392:9;4383:7;4379:23;4375:33;4372:53;;;4421:1;4418;4411:12;4372:53;4457:9;4444:23;4434:33;;4517:2;4506:9;4502:18;4489:32;4530:39;4563:5;4530:39;:::i;:::-;4588:5;-1:-1:-1;4645:2:184;4630:18;;4617:32;4658:41;4617:32;4658:41;:::i;:::-;4241:541;;;;-1:-1:-1;4718:7:184;;4772:2;4757:18;4744:32;;-1:-1:-1;;4241:541:184:o;5197:472::-;5274:6;5282;5290;5343:2;5331:9;5322:7;5318:23;5314:32;5311:52;;;5359:1;5356;5349:12;5311:52;5395:9;5382:23;5372:33;;5455:2;5444:9;5440:18;5427:32;5468:39;5501:5;5468:39;:::i;:::-;5526:5;-1:-1:-1;5583:2:184;5568:18;;5555:32;5596:41;5555:32;5596:41;:::i;:::-;5656:7;5646:17;;;5197:472;;;;;:::o;5856:323::-;5924:6;5932;5985:2;5973:9;5964:7;5960:23;5956:32;5953:52;;;6001:1;5998;5991:12;5953:52;6037:9;6024:23;6014:33;;6097:2;6086:9;6082:18;6069:32;6110:39;6143:5;6110:39;:::i;:::-;6168:5;6158:15;;;5856:323;;;;;:::o;6184:386::-;6270:6;6323:2;6311:9;6302:7;6298:23;6294:32;6291:52;;;6339:1;6336;6329:12;6291:52;6379:9;6366:23;6412:18;6404:6;6401:30;6398:50;;;6444:1;6441;6434:12;6398:50;6467:22;;6523:2;6505:16;;;6501:25;6498:45;;;6539:1;6536;6529:12;7123:541;7209:6;7217;7225;7233;7286:3;7274:9;7265:7;7261:23;7257:33;7254:53;;;7303:1;7300;7293:12;7254:53;7339:9;7326:23;7316:33;;7399:2;7388:9;7384:18;7371:32;7412:39;7445:5;7412:39;:::i;:::-;7470:5;-1:-1:-1;7522:2:184;7507:18;;7494:32;;-1:-1:-1;7578:2:184;7563:18;;7550:32;7591:41;7550:32;7591:41;:::i;:::-;7123:541;;;;-1:-1:-1;7123:541:184;;-1:-1:-1;;7123:541:184:o;7669:1266::-;7886:13;;7868:32;;7956:4;7944:17;;;7938:24;7916:20;;;7909:54;8019:4;8007:17;;;8001:24;7979:20;;;7972:54;8082:4;8070:17;;;8064:24;8042:20;;;8035:54;8145:4;8133:17;;;8127:24;8105:20;;;8098:54;8208:4;8196:17;;;8190:24;8168:20;;;8161:54;8271:4;8259:17;;;8253:24;8231:20;;;8224:54;8334:4;8322:17;;;8316:24;8294:20;;;8287:54;8360:6;8408:15;;;8402:22;8382:18;;;8375:50;8444:6;8492:15;;;8486:22;8466:18;;;8459:50;8528:6;8576:15;;;8570:22;8550:18;;;8543:50;8612:6;8660:15;;;8654:22;8634:18;;;8627:50;8696:6;8744:15;;;8738:22;8718:18;;;8711:50;8780:6;8828:15;;;8822:22;8802:18;;;8795:50;8864:6;8912:15;;;8906:22;8886:18;;;8879:50;;;;7855:3;7840:19;;7669:1266::o;8940:390::-;9005:6;9013;9066:2;9054:9;9045:7;9041:23;9037:32;9034:52;;;9082:1;9079;9072:12;9034:52;9121:9;9108:23;9140:39;9173:5;9140:39;:::i;:::-;9198:5;-1:-1:-1;9255:2:184;9240:18;;9227:32;9268:30;9227:32;9268:30;:::i;9335:391::-;9412:6;9420;9428;9481:2;9469:9;9460:7;9456:23;9452:32;9449:52;;;9497:1;9494;9487:12;9449:52;9533:9;9520:23;9510:33;;9593:2;9582:9;9578:18;9565:32;9606:39;9639:5;9606:39;:::i;:::-;9335:391;;9664:5;;-1:-1:-1;;;9716:2:184;9701:18;;;;9688:32;;9335:391::o;10110:1290::-;10340:13;;-1:-1:-1;;;;;9805:31:184;9793:44;;10300:3;10285:19;;10412:4;10404:6;10400:17;10394:24;10427:62;10483:4;10472:9;10468:20;10454:12;-1:-1:-1;;;;;9805:31:184;9793:44;;9731:112;10427:62;;10545:4;10537:6;10533:17;10527:24;10520:4;10509:9;10505:20;10498:54;10608:4;10600:6;10596:17;10590:24;10583:4;10572:9;10568:20;10561:54;10671:4;10663:6;10659:17;10653:24;10646:4;10635:9;10631:20;10624:54;10734:4;10726:6;10722:17;10716:24;10709:4;10698:9;10694:20;10687:54;10797:4;10789:6;10785:17;10779:24;10772:4;10761:9;10757:20;10750:54;10860:4;10852:6;10848:17;10842:24;10835:4;10824:9;10820:20;10813:54;10886:6;10946:2;10938:6;10934:15;10928:22;10923:2;10912:9;10908:18;10901:50;;10970:6;11025:2;11017:6;11013:15;11007:22;11038:62;11096:2;11085:9;11081:18;11065:14;-1:-1:-1;;;;;9805:31:184;9793:44;;9731:112;11038:62;-1:-1:-1;;11119:6:184;11162:15;;;11156:22;-1:-1:-1;;;;;9805:31:184;11230:18;;;9793:44;11268:6;11311:15;;;11305:22;9918:12;;11375:18;;;9906:25;9980:4;9969:16;;9963:23;9947:14;;;9940:47;10036:4;10025:16;;10019:23;10003:14;;;9996:47;10092:4;10081:16;;10075:23;10059:14;;;10052:47;11336:58;;;10110:1290;;;;:::o;11405:437::-;11491:6;11499;11552:2;11540:9;11531:7;11527:23;11523:32;11520:52;;;11568:1;11565;11558:12;11520:52;11608:9;11595:23;11641:18;11633:6;11630:30;11627:50;;;11673:1;11670;11663:12;11627:50;11712:70;11774:7;11765:6;11754:9;11750:22;11712:70;:::i;:::-;11801:8;;11686:96;;-1:-1:-1;11405:437:184;-1:-1:-1;;;;11405:437:184:o;11847:632::-;12018:2;12070:21;;;12140:13;;12043:18;;;12162:22;;;11989:4;;12018:2;12241:15;;;;12215:2;12200:18;;;11989:4;12284:169;12298:6;12295:1;12292:13;12284:169;;;12359:13;;12347:26;;12428:15;;;;12393:12;;;;12320:1;12313:9;12284:169;;;-1:-1:-1;12470:3:184;;11847:632;-1:-1:-1;;;;;;11847:632:184:o;13090:1650::-;13314:13;;-1:-1:-1;;;;;4853:46:184;4841:59;;13282:3;13267:19;;13386:4;13378:6;13374:17;13368:24;13401:54;13449:4;13438:9;13434:20;13420:12;-1:-1:-1;;;;;4853:46:184;4841:59;;4787:119;13401:54;;13504:4;13496:6;13492:17;13486:24;13519:56;13569:4;13558:9;13554:20;13538:14;-1:-1:-1;;;;;4853:46:184;4841:59;;4787:119;13519:56;;13624:4;13616:6;13612:17;13606:24;13639:56;13689:4;13678:9;13674:20;13658:14;-1:-1:-1;;;;;4853:46:184;4841:59;;4787:119;13639:56;;13744:4;13736:6;13732:17;13726:24;13759:55;13808:4;13797:9;13793:20;13777:14;12948:2;12937:21;12925:34;;12872:93;13759:55;;13863:4;13855:6;13851:17;13845:24;13878:56;13928:4;13917:9;13913:20;13897:14;-1:-1:-1;;;;;4853:46:184;4841:59;;4787:119;13878:56;;13983:4;13975:6;13971:17;13965:24;13998:56;14048:4;14037:9;14033:20;14017:14;-1:-1:-1;;;;;4853:46:184;4841:59;;4787:119;13998:56;;14103:4;14095:6;14091:17;14085:24;14118:56;14168:4;14157:9;14153:20;14137:14;-1:-1:-1;;;;;4853:46:184;4841:59;;4787:119;14118:56;-1:-1:-1;14193:6:184;14236:15;;;14230:22;6905:13;6898:21;14293:18;;;6886:34;14331:6;14374:15;;;14368:22;6905:13;6898:21;14431:18;;;6886:34;14469:6;14512:15;;;14506:22;-1:-1:-1;;;;;13036:42:184;14572:18;;;13024:55;14610:6;14654:15;;;14648:22;-1:-1:-1;;;;;4853:46:184;;14715:18;;;4841:59;14679:55;4787:119;14745:691;14840:6;14848;14856;14864;14872;14925:3;14913:9;14904:7;14900:23;14896:33;14893:53;;;14942:1;14939;14932:12;14893:53;14978:9;14965:23;14955:33;;15038:2;15027:9;15023:18;15010:32;15051:39;15084:5;15051:39;:::i;:::-;15109:5;-1:-1:-1;15166:2:184;15151:18;;15138:32;15179:41;15138:32;15179:41;:::i;:::-;15239:7;-1:-1:-1;15293:2:184;15278:18;;15265:32;;-1:-1:-1;15349:3:184;15334:19;;15321:33;15363:41;15321:33;15363:41;:::i;:::-;15423:7;15413:17;;;14745:691;;;;;;;;:::o;15441:404::-;15509:6;15517;15570:2;15558:9;15549:7;15545:23;15541:32;15538:52;;;15586:1;15583;15576:12;15538:52;15625:9;15612:23;15644:39;15677:5;15644:39;:::i;:::-;15702:5;-1:-1:-1;15759:2:184;15744:18;;15731:32;15772:41;15731:32;15772:41;:::i;16458:184::-;16528:6;16581:2;16569:9;16560:7;16556:23;16552:32;16549:52;;;16597:1;16594;16587:12;16549:52;-1:-1:-1;16620:16:184;;16458:184;-1:-1:-1;16458:184:184:o;16930:127::-;16991:10;16986:3;16982:20;16979:1;16972:31;17022:4;17019:1;17012:15;17046:4;17043:1;17036:15;17062:127;17123:10;17118:3;17114:20;17111:1;17104:31;17154:4;17151:1;17144:15;17178:4;17175:1;17168:15;17194:125;17259:9;;;17280:10;;;17277:36;;;17293:18;;:::i;17324:128::-;17391:9;;;17412:11;;;17409:37;;;17426:18;;:::i;17457:127::-;17518:10;17513:3;17509:20;17506:1;17499:31;17549:4;17546:1;17539:15;17573:4;17570:1;17563:15;17589:127;17650:10;17645:3;17641:20;17638:1;17631:31;17681:4;17678:1;17671:15;17705:4;17702:1;17695:15;19362:449;-1:-1:-1;;;19619:3:184;19612:32;19594:3;19673:6;19667:13;19689:75;19757:6;19752:2;19747:3;19743:12;19736:4;19728:6;19724:17;19689:75;:::i;:::-;19784:16;;;;19802:2;19780:25;;19362:449;-1:-1:-1;;19362:449:184:o;19816:450::-;-1:-1:-1;;;20073:3:184;20066:33;20048:3;20128:6;20122:13;20144:75;20212:6;20207:2;20202:3;20198:12;20191:4;20183:6;20179:17;20144:75;:::i;:::-;20239:16;;;;20257:2;20235:25;;19816:450;-1:-1:-1;;19816:450:184:o;22462:135::-;22501:3;22522:17;;;22519:43;;22542:18;;:::i;:::-;-1:-1:-1;22589:1:184;22578:13;;22462:135::o;22855:448::-;-1:-1:-1;;;23112:3:184;23105:31;23087:3;23165:6;23159:13;23181:75;23249:6;23244:2;23239:3;23235:12;23228:4;23220:6;23216:17;23181:75;:::i;:::-;23276:16;;;;23294:2;23272:25;;22855:448;-1:-1:-1;;22855:448:184:o;23308:449::-;-1:-1:-1;;;23565:3:184;23558:32;23540:3;23619:6;23613:13;23635:75;23703:6;23698:2;23693:3;23689:12;23682:4;23674:6;23670:17;23635:75;:::i;24477:200::-;24543:9;;;24516:4;24571:9;;24599:10;;24611:12;;;24595:29;24634:12;;;24626:21;;24592:56;24589:82;;;24651:18;;:::i;24682:127::-;24743:10;24738:3;24734:20;24731:1;24724:31;24774:4;24771:1;24764:15;24798:4;24795:1;24788:15;24814:112;24846:1;24872;24862:35;;24877:18;;:::i;:::-;-1:-1:-1;24911:9:184;;24814:112::o;24931:120::-;24971:1;24997;24987:35;;25002:18;;:::i;:::-;-1:-1:-1;25036:9:184;;24931:120::o;25056:245::-;25123:6;25176:2;25164:9;25155:7;25151:23;25147:32;25144:52;;;25192:1;25189;25182:12;25144:52;25224:9;25218:16;25243:28;25265:5;25243:28;:::i;25686:168::-;25759:9;;;25790;;25807:15;;;25801:22;;25787:37;25777:71;;25828:18;;:::i;25859:216::-;25923:9;;;25951:11;;;25898:3;25981:9;;26009:10;;26005:19;;26034:10;;26026:19;;26002:44;25999:70;;;26049:18;;:::i;26080:136::-;26115:3;-1:-1:-1;;;26136:22:184;;26133:48;;26161:18;;:::i;:::-;-1:-1:-1;26201:1:184;26197:13;;26080:136::o;26221:287::-;26350:3;26388:6;26382:13;26404:66;26463:6;26458:3;26451:4;26443:6;26439:17;26404:66;:::i;:::-;26486:16;;;;;26221:287;-1:-1:-1;;26221:287:184:o;26513:193::-;26552:1;26578;26568:35;;26583:18;;:::i;:::-;-1:-1:-1;;;26619:18:184;;-1:-1:-1;;26639:13:184;;26615:38;26612:64;;;26656:18;;:::i;:::-;-1:-1:-1;26690:10:184;;26513:193::o;26711:360::-;26875:2;26860:18;;26908:1;26897:13;;26887:144;;26953:10;26948:3;26944:20;26941:1;26934:31;26988:4;26985:1;26978:15;27016:4;27013:1;27006:15;26887:144;27040:25;;;26711:360;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "13002": [
        {
          "start": 1323,
          "length": 32
        },
        {
          "start": 1488,
          "length": 32
        },
        {
          "start": 1932,
          "length": 32
        },
        {
          "start": 3430,
          "length": 32
        },
        {
          "start": 4289,
          "length": 32
        }
      ],
      "13005": [
        {
          "start": 3714,
          "length": 32
        },
        {
          "start": 9803,
          "length": 32
        }
      ],
      "13008": [
        {
          "start": 3676,
          "length": 32
        },
        {
          "start": 4378,
          "length": 32
        },
        {
          "start": 9534,
          "length": 32
        }
      ],
      "13011": [
        {
          "start": 3752,
          "length": 32
        },
        {
          "start": 8021,
          "length": 32
        }
      ],
      "13014": [
        {
          "start": 3884,
          "length": 32
        }
      ],
      "13017": [
        {
          "start": 3922,
          "length": 32
        }
      ],
      "13020": [
        {
          "start": 3960,
          "length": 32
        }
      ],
      "13023": [
        {
          "start": 3998,
          "length": 32
        }
      ],
      "13026": [
        {
          "start": 3562,
          "length": 32
        },
        {
          "start": 7945,
          "length": 32
        }
      ],
      "13029": [
        {
          "start": 3600,
          "length": 32
        },
        {
          "start": 7983,
          "length": 32
        }
      ],
      "13032": [
        {
          "start": 3638,
          "length": 32
        }
      ],
      "13049": [
        {
          "start": 1230,
          "length": 32
        },
        {
          "start": 1872,
          "length": 32
        },
        {
          "start": 3826,
          "length": 32
        },
        {
          "start": 6736,
          "length": 32
        },
        {
          "start": 6858,
          "length": 32
        },
        {
          "start": 6982,
          "length": 32
        }
      ],
      "13063": [
        {
          "start": 3477,
          "length": 32
        },
        {
          "start": 7399,
          "length": 32
        }
      ],
      "13066": [
        {
          "start": 3524,
          "length": 32
        },
        {
          "start": 7460,
          "length": 32
        }
      ],
      "5460": [
        {
          "start": 1382,
          "length": 32
        },
        {
          "start": 1638,
          "length": 32
        },
        {
          "start": 2078,
          "length": 32
        },
        {
          "start": 4955,
          "length": 32
        },
        {
          "start": 7667,
          "length": 32
        },
        {
          "start": 8993,
          "length": 32
        },
        {
          "start": 9159,
          "length": 32
        },
        {
          "start": 9361,
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
    "isPauser(address)": "46fbf68e",
    "load(uint256[])": "becee9c3",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "pause(bool)": "02329a29",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": "14e5f07b",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "sweep(address)": "01681a62",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "vault()": "fbfa77cf"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vault\",\"outputs\":[{\"internalType\":\"contract IERC4626\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"the destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The PoolInfo struct.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vault()\":{\"returns\":{\"_0\":\"The ERC4626 compatible vault.\"}}},\"title\":\"ERC4626Target0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"NegativePresentValue()\":[{\"notice\":\"Thrown when the present value is negative. Whatever proceeded         a negative present value should be reverted.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsupportedToken()\":[{\"notice\":\"Thrown when an unsupported option is passed to a function or         a user attempts to sweep an invalid token. The options and sweep         targets that are supported vary between instances.\"}]},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vault()\":{\"notice\":\"Gets the ERC4626 compatible vault.\"}},\"notice\":\"ERC4626Hyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target0.sol\":\"ERC4626Target0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0977333fa78572cbd52deafbd01876e232a75170bcbb729cde37bfae8904a611\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1d7ad748953d0e16b4b3a287fa7fe9cdada42a1feebf0db4fe9b4deff2c079fb\",\"dweb:/ipfs/QmNsbYuGteVv9op5AfpQheqNTjA6C1GKdCEwCiFmX1Tnje\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79\",\"dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs\"]},\"contracts/src/instances/erc4626/ERC4626Target0.sol\":{\"keccak256\":\"0x6b61a35102c60a2b19b3e59bf5a3f1128c7e1ccebe85a989ae73b59286b6de74\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4849aadf313418b10cb531e5af5026ae141a8b0a0429aaea717de5bb266ecf5f\",\"dweb:/ipfs/QmUfgk4NVE9VTxpmeRX3WCsakzb9JQhbTqqsQ5Afo7CsM1\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x9f9ace26856fd355d7934ac123672ca21a1539b7190b37099d48e9e96d3cafa4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f1297786537a3276eb161aaf55bebbaf117298dd117b7179ac51df49e425844a\",\"dweb:/ipfs/QmeZRUDmVRAYh1f8dDyLxZfBTeUHsAzCot4TGb8zNbjHoz\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa8e179af6fdc2a33e2e111ff6d4ba084e49b966241f16db30b24183ccfdd5d84\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fedf4075f1dfdc512c10b1ec637fc354bd1f360234dc5d64b1b0b6189c73dc8a\",\"dweb:/ipfs/QmTPrVM7rVu9hWgqhRokVcpwSibD1ZWtYwuL72Wvn8iGDz\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xb03ab9d883c7eb223ea4d05d5d22cb30834b5589958459ff70236c0e1f571e7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0f33134385373cb53eed027b88befe223e70ebe77ecf19dea6ce3f2a677458d1\",\"dweb:/ipfs/QmWGrRr12zS1ccFzMx82zwWoJfHDZf6bdYivNF4FA3Ggd3\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496\",\"dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x90ef3178580af58520b7517024b091b7d67cc6e6e93cb46e061ba2fd7366b972\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5841dbfb9498e283d26855ca25caebfb080c8893474858acfde43ba60c0cb2ae\",\"dweb:/ipfs/QmRYGcn4qmjt7eYsr4oMANBignijf6oz4UFmRA679zt9YD\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x7213875367ce751a20f5371d79880a2b6105bf3e20fab65044ecb9f921d17deb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://179935e894ba8c1a634b3ab16d1b3914c60218fa5dbf61e58ce54df06ac6d75e\",\"dweb:/ipfs/QmRif44MTY2U9b5TFAiEStZYu2TiUQUANi5VQKDvQezeKy\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xa1d8f02c9a470eb0e1fd2ff6195546fe414485cd3c86b9f0ff0734db27699ab6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54324a6775bbd1cfc643504cb9b0e53fd843f5a4d9d7c38c07526d6b3e44299d\",\"dweb:/ipfs/QmREvG68YXkt1EoWZL131BpnB4fWjvK6GXJpzi6msL1VzB\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x960457a35b1ac18fa27eb3524d29f8ae14cbdbad70a20c46aab62a20330eadb0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e1f791d322e18bada00890b63c13de0d4db9e37b5583d005e44e4516b0f6eb71\",\"dweb:/ipfs/Qmd8Tcer76uSNah2eKA5g9MTSVGwch9HXZUYfMN7YEWeZ7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
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
                  "name": "initialVaultSharePrice",
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
              "name": "__vault",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "AddressEmptyCode"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "AddressInsufficientBalance"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BatchInputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpInvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpiredDeadline"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FailedInnerCall"
        },
        {
          "inputs": [
            {
              "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
              "name": "reason",
              "type": "uint8"
            }
          ],
          "type": "error",
          "name": "InsufficientLiquidity"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidERC20Bridge"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeDestination"
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
          "name": "LnInvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ReentrancyGuardReentrantCall"
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
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "SafeERC20FailedOperation"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "SweepFailed"
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "PauseStatusUpdated",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "_checkpointTime",
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
                  "name": "vaultSharePrice",
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
                  "internalType": "int128",
                  "name": "shareAdjustment",
                  "type": "int128"
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
                },
                {
                  "internalType": "uint112",
                  "name": "zombieBaseProceeds",
                  "type": "uint112"
                },
                {
                  "internalType": "uint128",
                  "name": "zombieShareReserves",
                  "type": "uint128"
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
                  "name": "initialVaultSharePrice",
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
                  "name": "zombieBaseProceeds",
                  "type": "uint256"
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
                  "name": "vaultSharePrice",
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
              "name": "_account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isPauser",
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
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "vault",
          "outputs": [
            {
              "internalType": "contract IERC4626",
              "name": "",
              "type": "address"
            }
          ]
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
              "__vault": "The ERC4626 compatible vault.",
              "_config": "The configuration of the Hyperdrive pool."
            }
          },
          "getCheckpoint(uint256)": {
            "params": {
              "_checkpointTime": "The checkpoint time."
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
          "isPauser(address)": {
            "params": {
              "_account": "The account to check."
            },
            "returns": {
              "_0": "The pauser status."
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
            "details": "WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
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
          },
          "vault()": {
            "returns": {
              "_0": "The ERC4626 compatible vault."
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
          "isPauser(address)": {
            "notice": "Gets the pauser status of an address."
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
          },
          "vault()": {
            "notice": "Gets the ERC4626 compatible vault."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/instances/erc4626/ERC4626Target0.sol": "ERC4626Target0"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/HyperdriveTarget0.sol": {
        "keccak256": "0x0977333fa78572cbd52deafbd01876e232a75170bcbb729cde37bfae8904a611",
        "urls": [
          "bzz-raw://1d7ad748953d0e16b4b3a287fa7fe9cdada42a1feebf0db4fe9b4deff2c079fb",
          "dweb:/ipfs/QmNsbYuGteVv9op5AfpQheqNTjA6C1GKdCEwCiFmX1Tnje"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/erc4626/ERC4626Base.sol": {
        "keccak256": "0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18",
        "urls": [
          "bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79",
          "dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/erc4626/ERC4626Target0.sol": {
        "keccak256": "0x6b61a35102c60a2b19b3e59bf5a3f1128c7e1ccebe85a989ae73b59286b6de74",
        "urls": [
          "bzz-raw://4849aadf313418b10cb531e5af5026ae141a8b0a0429aaea717de5bb266ecf5f",
          "dweb:/ipfs/QmUfgk4NVE9VTxpmeRX3WCsakzb9JQhbTqqsQ5Afo7CsM1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e",
        "urls": [
          "bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3",
          "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"
        ],
        "license": "GPL-2.0-or-later"
      },
      "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
        "keccak256": "0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7",
        "urls": [
          "bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f",
          "dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
        "keccak256": "0x9f9ace26856fd355d7934ac123672ca21a1539b7190b37099d48e9e96d3cafa4",
        "urls": [
          "bzz-raw://f1297786537a3276eb161aaf55bebbaf117298dd117b7179ac51df49e425844a",
          "dweb:/ipfs/QmeZRUDmVRAYh1f8dDyLxZfBTeUHsAzCot4TGb8zNbjHoz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
        "keccak256": "0xa8e179af6fdc2a33e2e111ff6d4ba084e49b966241f16db30b24183ccfdd5d84",
        "urls": [
          "bzz-raw://fedf4075f1dfdc512c10b1ec637fc354bd1f360234dc5d64b1b0b6189c73dc8a",
          "dweb:/ipfs/QmTPrVM7rVu9hWgqhRokVcpwSibD1ZWtYwuL72Wvn8iGDz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
        "urls": [
          "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
          "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveAdmin.sol": {
        "keccak256": "0xb03ab9d883c7eb223ea4d05d5d22cb30834b5589958459ff70236c0e1f571e7e",
        "urls": [
          "bzz-raw://0f33134385373cb53eed027b88befe223e70ebe77ecf19dea6ce3f2a677458d1",
          "dweb:/ipfs/QmWGrRr12zS1ccFzMx82zwWoJfHDZf6bdYivNF4FA3Ggd3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826",
        "urls": [
          "bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496",
          "dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582",
        "urls": [
          "bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e",
          "dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x90ef3178580af58520b7517024b091b7d67cc6e6e93cb46e061ba2fd7366b972",
        "urls": [
          "bzz-raw://5841dbfb9498e283d26855ca25caebfb080c8893474858acfde43ba60c0cb2ae",
          "dweb:/ipfs/QmRYGcn4qmjt7eYsr4oMANBignijf6oz4UFmRA679zt9YD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0x7213875367ce751a20f5371d79880a2b6105bf3e20fab65044ecb9f921d17deb",
        "urls": [
          "bzz-raw://179935e894ba8c1a634b3ab16d1b3914c60218fa5dbf61e58ce54df06ac6d75e",
          "dweb:/ipfs/QmRif44MTY2U9b5TFAiEStZYu2TiUQUANi5VQKDvQezeKy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0xa1d8f02c9a470eb0e1fd2ff6195546fe414485cd3c86b9f0ff0734db27699ab6",
        "urls": [
          "bzz-raw://54324a6775bbd1cfc643504cb9b0e53fd843f5a4d9d7c38c07526d6b3e44299d",
          "dweb:/ipfs/QmREvG68YXkt1EoWZL131BpnB4fWjvK6GXJpzi6msL1VzB"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0x960457a35b1ac18fa27eb3524d29f8ae14cbdbad70a20c46aab62a20330eadb0",
        "urls": [
          "bzz-raw://e1f791d322e18bada00890b63c13de0d4db9e37b5583d005e44e4516b0f6eb71",
          "dweb:/ipfs/Qmd8Tcer76uSNah2eKA5g9MTSVGwch9HXZUYfMN7YEWeZ7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
        "urls": [
          "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
          "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2",
        "urls": [
          "bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b",
          "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/Errors.sol": {
        "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
        "urls": [
          "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
          "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
        "urls": [
          "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
          "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
        "urls": [
          "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
          "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/LPMath.sol": {
        "keccak256": "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266",
        "urls": [
          "bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244",
          "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
        "urls": [
          "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
          "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
        "urls": [
          "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
          "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
        "urls": [
          "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
          "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
        "urls": [
          "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
          "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
        "urls": [
          "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
          "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
        "urls": [
          "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
          "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
        "urls": [
          "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
          "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
        "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
        "urls": [
          "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
          "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/instances/erc4626/ERC4626Target0.sol",
    "id": 5948,
    "exportedSymbols": {
      "ERC20": [
        66324
      ],
      "ERC4626Base": [
        5661
      ],
      "ERC4626Target0": [
        5947
      ],
      "HyperdriveTarget0": [
        3128
      ],
      "IERC20": [
        6740
      ],
      "IERC4626": [
        7013
      ],
      "IHyperdrive": [
        7411
      ],
      "SafeERC20": [
        66754
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:3281:25",
    "nodes": [
      {
        "id": 5773,
        "nodeType": "PragmaDirective",
        "src": "39:23:25",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 5775,
        "nodeType": "ImportDirective",
        "src": "64:59:25",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin/token/ERC20/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5948,
        "sourceUnit": 66325,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5774,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 66324,
              "src": "73:5:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5777,
        "nodeType": "ImportDirective",
        "src": "124:73:25",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "file": "openzeppelin/token/ERC20/utils/SafeERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5948,
        "sourceUnit": 66755,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5776,
              "name": "SafeERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 66754,
              "src": "133:9:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5779,
        "nodeType": "ImportDirective",
        "src": "198:73:25",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "file": "../../external/HyperdriveTarget0.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5948,
        "sourceUnit": 3129,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5778,
              "name": "HyperdriveTarget0",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3128,
              "src": "207:17:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5781,
        "nodeType": "ImportDirective",
        "src": "272:53:25",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5948,
        "sourceUnit": 6741,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5780,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6740,
              "src": "281:6:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5783,
        "nodeType": "ImportDirective",
        "src": "326:57:25",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5948,
        "sourceUnit": 7014,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5782,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7013,
              "src": "335:8:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5785,
        "nodeType": "ImportDirective",
        "src": "384:63:25",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5948,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5784,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "393:11:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5787,
        "nodeType": "ImportDirective",
        "src": "448:48:25",
        "nodes": [],
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
        "file": "./ERC4626Base.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5948,
        "sourceUnit": 5662,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5786,
              "name": "ERC4626Base",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5661,
              "src": "457:11:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5947,
        "nodeType": "ContractDefinition",
        "src": "938:2381:25",
        "nodes": [
          {
            "id": 5796,
            "nodeType": "UsingForDirective",
            "src": "1002:26:25",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5793,
              "name": "SafeERC20",
              "nameLocations": [
                "1008:9:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 66754,
              "src": "1008:9:25"
            },
            "typeName": {
              "id": 5795,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5794,
                "name": "ERC20",
                "nameLocations": [
                  "1022:5:25"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 66324,
                "src": "1022:5:25"
              },
              "referencedDeclaration": 66324,
              "src": "1022:5:25",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$66324",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 5813,
            "nodeType": "FunctionDefinition",
            "src": "1202:141:25",
            "nodes": [],
            "body": {
              "id": 5812,
              "nodeType": "Block",
              "src": "1341:2:25",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 5797,
              "nodeType": "StructuredDocumentation",
              "src": "1034:163:25",
              "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 5806,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5800,
                    "src": "1311:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 5807,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 5805,
                  "name": "HyperdriveTarget0",
                  "nameLocations": [
                    "1293:17:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3128,
                  "src": "1293:17:25"
                },
                "nodeType": "ModifierInvocation",
                "src": "1293:26:25"
              },
              {
                "arguments": [
                  {
                    "id": 5809,
                    "name": "__vault",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5803,
                    "src": "1332:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$7013",
                      "typeString": "contract IERC4626"
                    }
                  }
                ],
                "id": 5810,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 5808,
                  "name": "ERC4626Base",
                  "nameLocations": [
                    "1320:11:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5661,
                  "src": "1320:11:25"
                },
                "nodeType": "ModifierInvocation",
                "src": "1320:20:25"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 5804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5800,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1253:7:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 5813,
                  "src": "1223:37:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 5799,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5798,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1223:11:25",
                        "1235:10:25"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "1223:22:25"
                    },
                    "referencedDeclaration": 7215,
                    "src": "1223:22:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5803,
                  "mutability": "mutable",
                  "name": "__vault",
                  "nameLocation": "1279:7:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 5813,
                  "src": "1270:16:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$7013",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 5802,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5801,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1270:8:25"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7013,
                      "src": "1270:8:25"
                    },
                    "referencedDeclaration": 7013,
                    "src": "1270:8:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$7013",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1213:79:25"
            },
            "returnParameters": {
              "id": 5811,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1341:0:25"
            },
            "scope": 5947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 5931,
            "nodeType": "FunctionDefinition",
            "src": "1889:1210:25",
            "nodes": [],
            "body": {
              "id": 5930,
              "nodeType": "Block",
              "src": "1929:1170:25",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 5823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 5820,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2011:3:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2015:6:25",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2011:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 5822,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13049,
                        "src": "2025:13:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2011:27:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 5828,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "2042:21:25",
                      "subExpression": {
                        "baseExpression": {
                          "id": 5824,
                          "name": "_pausers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13060,
                          "src": "2043:8:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 5827,
                        "indexExpression": {
                          "expression": {
                            "id": 5825,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2052:3:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5826,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2056:6:25",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2052:10:25",
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
                        "src": "2043:20:25",
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
                    "src": "2011:52:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5836,
                  "nodeType": "IfStatement",
                  "src": "2007:116:25",
                  "trueBody": {
                    "id": 5835,
                    "nodeType": "Block",
                    "src": "2065:58:25",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5830,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "2086:11:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5832,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2098:12:25",
                            "memberName": "Unauthorized",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7369,
                            "src": "2086:24:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5833,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2086:26:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5834,
                        "nodeType": "RevertStatement",
                        "src": "2079:33:25"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 5845,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 5839,
                            "name": "_target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5817,
                            "src": "2223:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 5838,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2215:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5837,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2215:7:25",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5840,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2215:16:25",
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
                            "id": 5843,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13002,
                            "src": "2243:10:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 5842,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2235:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5841,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2235:7:25",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5844,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2235:19:25",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2215:39:25",
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
                      "id": 5854,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 5848,
                            "name": "_target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5817,
                            "src": "2278:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 5847,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2270:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5846,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2270:7:25",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5849,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2270:16:25",
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
                            "id": 5852,
                            "name": "_vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5460,
                            "src": "2298:6:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC4626_$7013",
                              "typeString": "contract IERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC4626_$7013",
                              "typeString": "contract IERC4626"
                            }
                          ],
                          "id": 5851,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2290:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5850,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2290:7:25",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2290:15:25",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2270:35:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2215:90:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5862,
                  "nodeType": "IfStatement",
                  "src": "2198:180:25",
                  "trueBody": {
                    "id": 5861,
                    "nodeType": "Block",
                    "src": "2316:62:25",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5856,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "2337:11:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5858,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2349:16:25",
                            "memberName": "UnsupportedToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7384,
                            "src": "2337:28:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5859,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2337:30:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5860,
                        "nodeType": "RevertStatement",
                        "src": "2330:37:25"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    5864
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5864,
                      "mutability": "mutable",
                      "name": "baseBalance",
                      "nameLocation": "2491:11:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 5930,
                      "src": "2483:19:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5863,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2483:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5872,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 5869,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2534:4:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                              "typeString": "contract ERC4626Target0"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                              "typeString": "contract ERC4626Target0"
                            }
                          ],
                          "id": 5868,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2526:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5867,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2526:7:25",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2526:13:25",
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
                        "id": 5865,
                        "name": "_baseToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13002,
                        "src": "2505:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6740",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5866,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2516:9:25",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6701,
                      "src": "2505:20:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 5871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2505:35:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2483:57:25"
                },
                {
                  "assignments": [
                    5874
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5874,
                      "mutability": "mutable",
                      "name": "vaultBalance",
                      "nameLocation": "2558:12:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 5930,
                      "src": "2550:20:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5873,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2550:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5882,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 5879,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2598:4:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                              "typeString": "contract ERC4626Target0"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                              "typeString": "contract ERC4626Target0"
                            }
                          ],
                          "id": 5878,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2590:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5877,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2590:7:25",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2590:13:25",
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
                        "id": 5875,
                        "name": "_vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5460,
                        "src": "2573:6:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC4626_$7013",
                          "typeString": "contract IERC4626"
                        }
                      },
                      "id": 5876,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2580:9:25",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6701,
                      "src": "2573:16:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 5881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2573:31:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2550:54:25"
                },
                {
                  "assignments": [
                    5884
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5884,
                      "mutability": "mutable",
                      "name": "balance",
                      "nameLocation": "2704:7:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 5930,
                      "src": "2696:15:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5883,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2696:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5892,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 5889,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2740:4:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                              "typeString": "contract ERC4626Target0"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                              "typeString": "contract ERC4626Target0"
                            }
                          ],
                          "id": 5888,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2732:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5887,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2732:7:25",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5890,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2732:13:25",
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
                        "id": 5885,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5817,
                        "src": "2714:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6740",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5886,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2722:9:25",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6701,
                      "src": "2714:17:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 5891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2714:32:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2696:50:25"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5900,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13049,
                        "src": "2793:13:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5901,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5884,
                        "src": "2808:7:25",
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
                                "id": 5896,
                                "name": "_target",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5817,
                                "src": "2770:7:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6740",
                                  "typeString": "contract IERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IERC20_$6740",
                                  "typeString": "contract IERC20"
                                }
                              ],
                              "id": 5895,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2762:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 5894,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2762:7:25",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 5897,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2762:16:25",
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
                          "id": 5893,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66324,
                          "src": "2756:5:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$66324_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 5898,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2756:23:25",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$66324",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 5899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2780:12:25",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 66514,
                      "src": "2756:36:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66402_$",
                        "typeString": "function (contract IERC20,address,uint256)"
                      }
                    },
                    "id": 5902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2756:60:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5903,
                  "nodeType": "ExpressionStatement",
                  "src": "2756:60:25"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5912,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 5908,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "2941:4:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                                  "typeString": "contract ERC4626Target0"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                                  "typeString": "contract ERC4626Target0"
                                }
                              ],
                              "id": 5907,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2933:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 5906,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2933:7:25",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 5909,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2933:13:25",
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
                            "id": 5904,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13002,
                            "src": "2912:10:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 5905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2923:9:25",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6701,
                          "src": "2912:20:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 5910,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2912:35:25",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 5911,
                        "name": "baseBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5864,
                        "src": "2951:11:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2912:50:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5921,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 5917,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3003:4:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                                  "typeString": "contract ERC4626Target0"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ERC4626Target0_$5947",
                                  "typeString": "contract ERC4626Target0"
                                }
                              ],
                              "id": 5916,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2995:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 5915,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2995:7:25",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 5918,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2995:13:25",
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
                            "id": 5913,
                            "name": "_vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5460,
                            "src": "2978:6:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC4626_$7013",
                              "typeString": "contract IERC4626"
                            }
                          },
                          "id": 5914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2985:9:25",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6701,
                          "src": "2978:16:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 5919,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2978:31:25",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 5920,
                        "name": "vaultBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5874,
                        "src": "3013:12:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2978:47:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2912:113:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5929,
                  "nodeType": "IfStatement",
                  "src": "2895:198:25",
                  "trueBody": {
                    "id": 5928,
                    "nodeType": "Block",
                    "src": "3036:57:25",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5923,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "3057:11:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5925,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3069:11:25",
                            "memberName": "SweepFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7363,
                            "src": "3057:23:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5926,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3057:25:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5927,
                        "nodeType": "RevertStatement",
                        "src": "3050:32:25"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 5814,
              "nodeType": "StructuredDocumentation",
              "src": "1369:515:25",
              "text": "@notice Some yield sources [eg Morpho] pay rewards directly to this\n         contract but we can't handle distributing them internally so we\n         sweep to the fee collector address to then redistribute to users.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The token to sweep."
            },
            "functionSelector": "01681a62",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "1898:5:25",
            "parameters": {
              "id": 5818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5817,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "1911:7:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 5931,
                  "src": "1904:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$6740",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 5816,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5815,
                      "name": "IERC20",
                      "nameLocations": [
                        "1904:6:25"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6740,
                      "src": "1904:6:25"
                    },
                    "referencedDeclaration": 6740,
                    "src": "1904:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$6740",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1903:16:25"
            },
            "returnParameters": {
              "id": 5819,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1929:0:25"
            },
            "scope": 5947,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5946,
            "nodeType": "FunctionDefinition",
            "src": "3223:94:25",
            "nodes": [],
            "body": {
              "id": 5945,
              "nodeType": "Block",
              "src": "3273:44:25",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 5941,
                            "name": "_vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5460,
                            "src": "3302:6:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC4626_$7013",
                              "typeString": "contract IERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC4626_$7013",
                              "typeString": "contract IERC4626"
                            }
                          ],
                          "expression": {
                            "id": 5939,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3291:3:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 5940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3295:6:25",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3291:10:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 5942,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3291:18:25",
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
                      "id": 5938,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3127,
                      "src": "3283:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 5943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3283:27:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5944,
                  "nodeType": "ExpressionStatement",
                  "src": "3283:27:25"
                }
              ]
            },
            "documentation": {
              "id": 5932,
              "nodeType": "StructuredDocumentation",
              "src": "3126:92:25",
              "text": "@notice Gets the ERC4626 compatible vault.\n @return The ERC4626 compatible vault."
            },
            "functionSelector": "fbfa77cf",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "vault",
            "nameLocation": "3232:5:25",
            "parameters": {
              "id": 5933,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3237:2:25"
            },
            "returnParameters": {
              "id": 5937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5936,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5946,
                  "src": "3263:8:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$7013",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 5935,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5934,
                      "name": "IERC4626",
                      "nameLocations": [
                        "3263:8:25"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7013,
                      "src": "3263:8:25"
                    },
                    "referencedDeclaration": 7013,
                    "src": "3263:8:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$7013",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3262:10:25"
            },
            "scope": 5947,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 5789,
              "name": "HyperdriveTarget0",
              "nameLocations": [
                "965:17:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3128,
              "src": "965:17:25"
            },
            "id": 5790,
            "nodeType": "InheritanceSpecifier",
            "src": "965:17:25"
          },
          {
            "baseName": {
              "id": 5791,
              "name": "ERC4626Base",
              "nameLocations": [
                "984:11:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5661,
              "src": "984:11:25"
            },
            "id": 5792,
            "nodeType": "InheritanceSpecifier",
            "src": "984:11:25"
          }
        ],
        "canonicalName": "ERC4626Target0",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 5788,
          "nodeType": "StructuredDocumentation",
          "src": "498:440:25",
          "text": "@author DELV\n @title ERC4626Target0\n @notice ERC4626Hyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          5947,
          5661,
          3128,
          9965,
          12979,
          11646,
          10802,
          12127,
          8595,
          9507,
          13187,
          67106,
          7814,
          8304,
          8071,
          8377
        ],
        "name": "ERC4626Target0",
        "nameLocation": "947:14:25",
        "scope": 5948,
        "usedErrors": [
          7280,
          7286,
          7289,
          7298,
          7310,
          7313,
          7322,
          7325,
          7328,
          7337,
          7355,
          7360,
          7363,
          7369,
          7384,
          66481,
          66762,
          66767,
          66770,
          67051
        ],
        "usedEvents": [
          7691,
          7703,
          7717,
          7727,
          7741,
          7755,
          7769,
          7783,
          7795,
          7801,
          7805,
          7809,
          7813,
          8287,
          8295,
          8303
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 25
} as const;
