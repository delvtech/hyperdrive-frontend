export const HyperdriveTarget0 = {
    "abi": [
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
            "name": "InvalidPresentValue",
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
            "inputs": [],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
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
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
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
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "decimals()": "313ce567",
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
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"HyperdriveTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates target0.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"Hyperdrive's target 0 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/HyperdriveTarget0.sol\":\"HyperdriveTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b\",\"dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9\",\"dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba\",\"dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba\",\"dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca\",\"dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
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
                    "name": "InvalidPresentValue"
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
                    "inputs": [],
                    "type": "error",
                    "name": "Unauthorized"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
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
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
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
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "decimals",
                    "outputs": [
                        {
                            "internalType": "uint8",
                            "name": "",
                            "type": "uint8"
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
                            "from": "The source account.",
                            "ids": "The array of token ids of the asset to transfer.",
                            "to": "The destination account.",
                            "values": "The amount of each token to transfer."
                        }
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "params": {
                            "_options": "The options that configure how the fees are settled."
                        },
                        "returns": {
                            "proceeds": "The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
                        }
                    },
                    "constructor": {
                        "params": {
                            "_config": "The configuration of the Hyperdrive pool."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The decimals of the MultiToken."
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
                            "_0": "The pool info."
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
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).",
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
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "caller": "The msg.sender from the bridge.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
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
                        "notice": "Instantiates target0."
                    },
                    "decimals()": {
                        "notice": "Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token."
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
                        "notice": "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature."
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
                "contracts/src/external/HyperdriveTarget0.sol": "HyperdriveTarget0"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8",
                "urls": [
                    "bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b",
                    "dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
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
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5",
                "urls": [
                    "bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9",
                    "dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc",
                "urls": [
                    "bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa",
                    "dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12",
                "urls": [
                    "bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba",
                    "dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0",
                "urls": [
                    "bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba",
                    "dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c",
                "urls": [
                    "bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca",
                    "dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU"
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
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
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
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e",
                "urls": [
                    "bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534",
                    "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785",
                "urls": [
                    "bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263",
                    "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
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
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "id": 3258,
        "exportedSymbols": {
            "AssetId": [
                14117
            ],
            "FixedPointMath": [
                14917
            ],
            "HyperdriveAdmin": [
                8936
            ],
            "HyperdriveCheckpoint": [
                10381
            ],
            "HyperdriveLP": [
                11279
            ],
            "HyperdriveLong": [
                12198
            ],
            "HyperdriveMultiToken": [
                12682
            ],
            "HyperdriveShort": [
                13634
            ],
            "HyperdriveStorage": [
                13842
            ],
            "HyperdriveTarget0": [
                3257
            ],
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveRead": [
                8371
            ],
            "LPMath": [
                17396
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:17097:16",
        "nodes": [
            {
                "id": 2496,
                "nodeType": "PragmaDirective",
                "src": "39:23:16",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 2498,
                "nodeType": "ImportDirective",
                "src": "64:60:16",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2497,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "73:11:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2500,
                "nodeType": "ImportDirective",
                "src": "125:68:16",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
                "file": "../interfaces/IHyperdriveRead.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 8372,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2499,
                            "name": "IHyperdriveRead",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8371,
                            "src": "134:15:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2502,
                "nodeType": "ImportDirective",
                "src": "194:66:16",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
                "file": "../internal/HyperdriveAdmin.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 8937,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2501,
                            "name": "HyperdriveAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8936,
                            "src": "203:15:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2504,
                "nodeType": "ImportDirective",
                "src": "261:76:16",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
                "file": "../internal/HyperdriveCheckpoint.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 10382,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2503,
                            "name": "HyperdriveCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10381,
                            "src": "270:20:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2506,
                "nodeType": "ImportDirective",
                "src": "338:64:16",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
                "file": "../internal/HyperdriveLong.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 12199,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2505,
                            "name": "HyperdriveLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12198,
                            "src": "347:14:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2508,
                "nodeType": "ImportDirective",
                "src": "403:60:16",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
                "file": "../internal/HyperdriveLP.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 11280,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2507,
                            "name": "HyperdriveLP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11279,
                            "src": "412:12:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2510,
                "nodeType": "ImportDirective",
                "src": "464:76:16",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
                "file": "../internal/HyperdriveMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 12683,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2509,
                            "name": "HyperdriveMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12682,
                            "src": "473:20:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2512,
                "nodeType": "ImportDirective",
                "src": "541:66:16",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
                "file": "../internal/HyperdriveShort.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 13635,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2511,
                            "name": "HyperdriveShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13634,
                            "src": "550:15:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2514,
                "nodeType": "ImportDirective",
                "src": "608:70:16",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
                "file": "../internal/HyperdriveStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 13843,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2513,
                            "name": "HyperdriveStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13842,
                            "src": "617:17:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2516,
                "nodeType": "ImportDirective",
                "src": "679:51:16",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 14118,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2515,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14117,
                            "src": "688:7:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2518,
                "nodeType": "ImportDirective",
                "src": "731:65:16",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 14918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2517,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14917,
                            "src": "740:14:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2520,
                "nodeType": "ImportDirective",
                "src": "797:49:16",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 3258,
                "sourceUnit": 17397,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2519,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17396,
                            "src": "806:6:16",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 3257,
                "nodeType": "ContractDefinition",
                "src": "1168:15967:16",
                "nodes": [
                    {
                        "id": 2538,
                        "nodeType": "UsingForDirective",
                        "src": "1365:33:16",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 2536,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1371:14:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14917,
                            "src": "1371:14:16"
                        },
                        "typeName": {
                            "id": 2537,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1390:7:16",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 2549,
                        "nodeType": "FunctionDefinition",
                        "src": "1507:94:16",
                        "nodes": [],
                        "body": {
                            "id": 2548,
                            "nodeType": "Block",
                            "src": "1599:2:16",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 2539,
                            "nodeType": "StructuredDocumentation",
                            "src": "1404:98:16",
                            "text": "@notice Instantiates target0.\n @param _config The configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 2545,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2542,
                                        "src": "1590:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 2546,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 2544,
                                    "name": "HyperdriveStorage",
                                    "nameLocations": [
                                        "1572:17:16"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 13842,
                                    "src": "1572:17:16"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1572:26:16"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 2543,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2542,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1558:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2549,
                                    "src": "1528:37:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 2541,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2540,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1528:11:16",
                                                "1540:10:16"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "1528:22:16"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "1528:22:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1518:53:16"
                        },
                        "returnParameters": {
                            "id": 2547,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1599:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 2563,
                        "nodeType": "FunctionDefinition",
                        "src": "1976:174:16",
                        "nodes": [],
                        "body": {
                            "id": 2562,
                            "nodeType": "Block",
                            "src": "2095:55:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2559,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2553,
                                                "src": "2134:8:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 2558,
                                            "name": "_collectGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8849,
                                            "src": "2112:21:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) returns (uint256)"
                                            }
                                        },
                                        "id": 2560,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2112:31:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2557,
                                    "id": 2561,
                                    "nodeType": "Return",
                                    "src": "2105:38:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2550,
                            "nodeType": "StructuredDocumentation",
                            "src": "1626:345:16",
                            "text": "@notice This function collects the governance fees accrued by the pool.\n @param _options The options that configure how the fees are settled.\n @return proceeds The governance fees collected. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`."
                        },
                        "functionSelector": "3e691db9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "collectGovernanceFee",
                        "nameLocation": "1985:20:16",
                        "parameters": {
                            "id": 2554,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2553,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "2044:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2563,
                                    "src": "2015:37:16",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2552,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2551,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "2015:11:16",
                                                "2027:7:16"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "2015:19:16"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "2015:19:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2005:53:16"
                        },
                        "returnParameters": {
                            "id": 2557,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2556,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "2085:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2563,
                                    "src": "2077:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2555,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2077:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2076:18:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2574,
                        "nodeType": "FunctionDefinition",
                        "src": "2302:70:16",
                        "nodes": [],
                        "body": {
                            "id": 2573,
                            "nodeType": "Block",
                            "src": "2340:32:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2570,
                                                "name": "_status",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2566,
                                                "src": "2357:7:16",
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
                                            "id": 2569,
                                            "name": "_pause",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8878,
                                            "src": "2350:6:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                                                "typeString": "function (bool)"
                                            }
                                        },
                                        "id": 2571,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2350:15:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2572,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2350:15:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2564,
                            "nodeType": "StructuredDocumentation",
                            "src": "2156:141:16",
                            "text": "@notice Allows an authorized address to pause this contract.\n @param _status True to pause all deposits and false to unpause them."
                        },
                        "functionSelector": "02329a29",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pause",
                        "nameLocation": "2311:5:16",
                        "parameters": {
                            "id": 2567,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2566,
                                    "mutability": "mutable",
                                    "name": "_status",
                                    "nameLocation": "2322:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2574,
                                    "src": "2317:12:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2565,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2317:4:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2316:14:16"
                        },
                        "returnParameters": {
                            "id": 2568,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2340:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2585,
                        "nodeType": "FunctionDefinition",
                        "src": "2482:83:16",
                        "nodes": [],
                        "body": {
                            "id": 2584,
                            "nodeType": "Block",
                            "src": "2528:37:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2581,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2577,
                                                "src": "2553:4:16",
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
                                            "id": 2580,
                                            "name": "_setGovernance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8904,
                                            "src": "2538:14:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 2582,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2538:20:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2583,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2538:20:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2575,
                            "nodeType": "StructuredDocumentation",
                            "src": "2378:99:16",
                            "text": "@notice Allows governance to change governance.\n @param _who The new governance address."
                        },
                        "functionSelector": "ab033ea9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setGovernance",
                        "nameLocation": "2491:13:16",
                        "parameters": {
                            "id": 2578,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2577,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "2513:4:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2585,
                                    "src": "2505:12:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2576,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2505:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2504:14:16"
                        },
                        "returnParameters": {
                            "id": 2579,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2528:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2599,
                        "nodeType": "FunctionDefinition",
                        "src": "2735:94:16",
                        "nodes": [],
                        "body": {
                            "id": 2598,
                            "nodeType": "Block",
                            "src": "2789:40:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2594,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2588,
                                                "src": "2810:3:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2595,
                                                "name": "status",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2590,
                                                "src": "2815:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 2593,
                                            "name": "_setPauser",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8935,
                                            "src": "2799:10:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,bool)"
                                            }
                                        },
                                        "id": 2596,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2799:23:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2597,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2799:23:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2586,
                            "nodeType": "StructuredDocumentation",
                            "src": "2571:159:16",
                            "text": "@notice Allows governance to change the pauser status of an address.\n @param who The address to change.\n @param status The new pauser status."
                        },
                        "functionSelector": "7180c8ca",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setPauser",
                        "nameLocation": "2744:9:16",
                        "parameters": {
                            "id": 2591,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2588,
                                    "mutability": "mutable",
                                    "name": "who",
                                    "nameLocation": "2762:3:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2599,
                                    "src": "2754:11:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2587,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2754:7:16",
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
                                    "id": 2590,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "2772:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2599,
                                    "src": "2767:11:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2589,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2767:4:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2753:26:16"
                        },
                        "returnParameters": {
                            "id": 2592,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2789:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2621,
                        "nodeType": "FunctionDefinition",
                        "src": "3163:240:16",
                        "nodes": [],
                        "body": {
                            "id": 2620,
                            "nodeType": "Block",
                            "src": "3291:112:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2612,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2602,
                                                "src": "3358:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 2613,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2604,
                                                "src": "3367:4:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2614,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2606,
                                                "src": "3373:2:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2615,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2608,
                                                "src": "3377:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2616,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "3385:3:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 2617,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3389:6:16",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "3385:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 2611,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12406,
                                            "src": "3344:13:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 2618,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3344:52:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2619,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3344:52:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2600,
                            "nodeType": "StructuredDocumentation",
                            "src": "2859:299:16",
                            "text": "@notice Transfers an amount of assets from the source to the destination.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move."
                        },
                        "functionSelector": "1c0f12b6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "3172:12:16",
                        "parameters": {
                            "id": 2609,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2602,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "3202:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2621,
                                    "src": "3194:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2601,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3194:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2604,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "3227:4:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2621,
                                    "src": "3219:12:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2603,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3219:7:16",
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
                                    "id": 2606,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "3249:2:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2621,
                                    "src": "3241:10:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2605,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3241:7:16",
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
                                    "id": 2608,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "3269:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2621,
                                    "src": "3261:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2607,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3261:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3184:97:16"
                        },
                        "returnParameters": {
                            "id": 2610,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3291:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2647,
                        "nodeType": "FunctionDefinition",
                        "src": "3808:285:16",
                        "nodes": [],
                        "body": {
                            "id": 2646,
                            "nodeType": "Block",
                            "src": "3986:107:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2639,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2624,
                                                "src": "4052:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 2640,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2626,
                                                "src": "4061:4:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2641,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2628,
                                                "src": "4067:2:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2642,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2630,
                                                "src": "4071:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 2643,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2632,
                                                "src": "4079:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 2638,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12406,
                                            "src": "4038:13:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 2644,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4038:48:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2645,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4038:48:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2622,
                            "nodeType": "StructuredDocumentation",
                            "src": "3409:394:16",
                            "text": "@notice Permissioned transfer for the bridge to access, only callable by\n         the ERC20 linking bridge.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move.\n @param caller The msg.sender from the bridge."
                        },
                        "functionSelector": "e44808bc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 2635,
                                        "name": "tokenID",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2624,
                                        "src": "3977:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                ],
                                "id": 2636,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 2634,
                                    "name": "onlyLinker",
                                    "nameLocations": [
                                        "3966:10:16"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 12231,
                                    "src": "3966:10:16"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3966:19:16"
                            }
                        ],
                        "name": "transferFromBridge",
                        "nameLocation": "3817:18:16",
                        "parameters": {
                            "id": 2633,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2624,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "3853:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2647,
                                    "src": "3845:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2623,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3845:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2626,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "3878:4:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2647,
                                    "src": "3870:12:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2625,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3870:7:16",
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
                                    "id": 2628,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "3900:2:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2647,
                                    "src": "3892:10:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2627,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3892:7:16",
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
                                    "id": 2630,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "3920:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2647,
                                    "src": "3912:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2629,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3912:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2632,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "3944:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2647,
                                    "src": "3936:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2631,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3936:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3835:121:16"
                        },
                        "returnParameters": {
                            "id": 2637,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3986:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2670,
                        "nodeType": "FunctionDefinition",
                        "src": "4600:225:16",
                        "nodes": [],
                        "body": {
                            "id": 2669,
                            "nodeType": "Block",
                            "src": "4761:64:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2663,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2650,
                                                "src": "4784:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 2664,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2652,
                                                "src": "4793:8:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2665,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2654,
                                                "src": "4803:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 2666,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2656,
                                                "src": "4811:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 2662,
                                            "name": "_setApproval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12435,
                                            "src": "4771:12:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,uint256,address)"
                                            }
                                        },
                                        "id": 2667,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4771:47:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2668,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4771:47:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2648,
                            "nodeType": "StructuredDocumentation",
                            "src": "4099:496:16",
                            "text": "@notice Allows the compatibility linking contract to forward calls to\n         set asset approvals.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement [saving gas\n        on transfer].\n @param caller The eth address which called the linking contract."
                        },
                        "functionSelector": "4ed2d6ac",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 2659,
                                        "name": "tokenID",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2650,
                                        "src": "4752:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                ],
                                "id": 2660,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 2658,
                                    "name": "onlyLinker",
                                    "nameLocations": [
                                        "4741:10:16"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 12231,
                                    "src": "4741:10:16"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4741:19:16"
                            }
                        ],
                        "name": "setApprovalBridge",
                        "nameLocation": "4609:17:16",
                        "parameters": {
                            "id": 2657,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2650,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "4644:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2670,
                                    "src": "4636:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2649,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4636:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2652,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "4669:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2670,
                                    "src": "4661:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2651,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4661:7:16",
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
                                    "id": 2654,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "4695:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2670,
                                    "src": "4687:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2653,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4687:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2656,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "4719:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2670,
                                    "src": "4711:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2655,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4711:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4626:105:16"
                        },
                        "returnParameters": {
                            "id": 2661,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4761:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2695,
                        "nodeType": "FunctionDefinition",
                        "src": "5057:277:16",
                        "nodes": [],
                        "body": {
                            "id": 2694,
                            "nodeType": "Block",
                            "src": "5126:208:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 2685,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 2678,
                                                    "name": "_isApprovedForAll",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13740,
                                                    "src": "5173:17:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                                        "typeString": "mapping(address => mapping(address => bool))"
                                                    }
                                                },
                                                "id": 2682,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 2679,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "5191:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 2680,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5195:6:16",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5191:10:16",
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
                                                "src": "5173:29:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 2683,
                                            "indexExpression": {
                                                "id": 2681,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2673,
                                                "src": "5203:8:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "5173:39:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 2684,
                                            "name": "approved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2675,
                                            "src": "5215:8:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5173:50:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2686,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5173:50:16"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 2688,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "5296:3:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 2689,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5300:6:16",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "5296:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2690,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2673,
                                                "src": "5308:8:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2691,
                                                "name": "approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2675,
                                                "src": "5318:8:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 2687,
                                            "name": "ApprovalForAll",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8622,
                                            "src": "5281:14:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,address,bool)"
                                            }
                                        },
                                        "id": 2692,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5281:46:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2693,
                                    "nodeType": "EmitStatement",
                                    "src": "5276:51:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2671,
                            "nodeType": "StructuredDocumentation",
                            "src": "4831:221:16",
                            "text": "@notice Allows a user to approve an operator to use all of their assets.\n @param operator The eth address which can access the caller's assets.\n @param approved True to approve, false to remove approval."
                        },
                        "functionSelector": "a22cb465",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApprovalForAll",
                        "nameLocation": "5066:17:16",
                        "parameters": {
                            "id": 2676,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2673,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "5092:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2695,
                                    "src": "5084:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2672,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5084:7:16",
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
                                    "id": 2675,
                                    "mutability": "mutable",
                                    "name": "approved",
                                    "nameLocation": "5107:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2695,
                                    "src": "5102:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2674,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5102:4:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5083:33:16"
                        },
                        "returnParameters": {
                            "id": 2677,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5126:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2714,
                        "nodeType": "FunctionDefinition",
                        "src": "5764:179:16",
                        "nodes": [],
                        "body": {
                            "id": 2713,
                            "nodeType": "Block",
                            "src": "5875:68:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2706,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2698,
                                                "src": "5898:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 2707,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2700,
                                                "src": "5907:8:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2708,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2702,
                                                "src": "5917:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2709,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "5925:3:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 2710,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5929:6:16",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "5925:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 2705,
                                            "name": "_setApproval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12435,
                                            "src": "5885:12:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,uint256,address)"
                                            }
                                        },
                                        "id": 2711,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5885:51:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2712,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5885:51:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2696,
                            "nodeType": "StructuredDocumentation",
                            "src": "5340:419:16",
                            "text": "@notice Allows a user to set an approval for an individual asset with\n         specific amount.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement (saving gas\n        on transfer)."
                        },
                        "functionSelector": "9cd241af",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApproval",
                        "nameLocation": "5773:11:16",
                        "parameters": {
                            "id": 2703,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2698,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "5802:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2714,
                                    "src": "5794:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2697,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5794:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2700,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "5827:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2714,
                                    "src": "5819:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2699,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5819:7:16",
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
                                    "id": 2702,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "5853:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2714,
                                    "src": "5845:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2701,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5845:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5784:81:16"
                        },
                        "returnParameters": {
                            "id": 2704,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5875:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2736,
                        "nodeType": "FunctionDefinition",
                        "src": "6230:209:16",
                        "nodes": [],
                        "body": {
                            "id": 2735,
                            "nodeType": "Block",
                            "src": "6381:58:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2729,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2717,
                                                "src": "6410:4:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2730,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2719,
                                                "src": "6416:2:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2731,
                                                "name": "ids",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2722,
                                                "src": "6420:3:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            },
                                            {
                                                "id": 2732,
                                                "name": "values",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2725,
                                                "src": "6425:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
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
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            ],
                                            "id": 2728,
                                            "name": "_batchTransferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12305,
                                            "src": "6391:18:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_calldata_ptr_$_t_array$_t_uint256_$dyn_calldata_ptr_$returns$__$",
                                                "typeString": "function (address,address,uint256[] calldata,uint256[] calldata)"
                                            }
                                        },
                                        "id": 2733,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6391:41:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2734,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6391:41:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2715,
                            "nodeType": "StructuredDocumentation",
                            "src": "5949:276:16",
                            "text": "@notice Transfers several assets from one account to another.\n @param from The source account.\n @param to The destination account.\n @param ids The array of token ids of the asset to transfer.\n @param values The amount of each token to transfer."
                        },
                        "functionSelector": "17fad7fc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchTransferFrom",
                        "nameLocation": "6239:17:16",
                        "parameters": {
                            "id": 2726,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2717,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "6274:4:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2736,
                                    "src": "6266:12:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2716,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6266:7:16",
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
                                    "id": 2719,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "6296:2:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2736,
                                    "src": "6288:10:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2718,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6288:7:16",
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
                                    "id": 2722,
                                    "mutability": "mutable",
                                    "name": "ids",
                                    "nameLocation": "6327:3:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2736,
                                    "src": "6308:22:16",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2720,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6308:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2721,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6308:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2725,
                                    "mutability": "mutable",
                                    "name": "values",
                                    "nameLocation": "6359:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2736,
                                    "src": "6340:25:16",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2723,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6340:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2724,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6340:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6256:115:16"
                        },
                        "returnParameters": {
                            "id": 2727,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6381:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2771,
                        "nodeType": "FunctionDefinition",
                        "src": "7775:482:16",
                        "nodes": [],
                        "body": {
                            "id": 2770,
                            "nodeType": "Block",
                            "src": "8030:227:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2759,
                                                "name": "domainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2739,
                                                "src": "8067:15:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 2760,
                                                "name": "permitTypeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2741,
                                                "src": "8096:14:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 2761,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2743,
                                                "src": "8124:5:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2762,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2745,
                                                "src": "8143:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 2763,
                                                "name": "_approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2747,
                                                "src": "8164:9:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 2764,
                                                "name": "deadline",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2749,
                                                "src": "8187:8:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 2765,
                                                "name": "v",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2751,
                                                "src": "8209:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint8",
                                                    "typeString": "uint8"
                                                }
                                            },
                                            {
                                                "id": 2766,
                                                "name": "r",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2753,
                                                "src": "8224:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 2767,
                                                "name": "s",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2755,
                                                "src": "8239:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint8",
                                                    "typeString": "uint8"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            ],
                                            "id": 2758,
                                            "name": "_permitForAll",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12633,
                                            "src": "8040:13:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                            }
                                        },
                                        "id": 2768,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8040:210:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2769,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8040:210:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2737,
                            "nodeType": "StructuredDocumentation",
                            "src": "6445:1325:16",
                            "text": "@notice Allows a caller who is not the owner of an account to execute\n         the functionality of 'approve' for all assets with the owner's\n         signature.\n @param domainSeparator The EIP712 domain separator of the contract.\n @param permitTypeHash The EIP712 domain separator of the contract.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported."
                        },
                        "functionSelector": "14e5f07b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permitForAll",
                        "nameLocation": "7784:12:16",
                        "parameters": {
                            "id": 2756,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2739,
                                    "mutability": "mutable",
                                    "name": "domainSeparator",
                                    "nameLocation": "7814:15:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7806:23:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2738,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7806:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2741,
                                    "mutability": "mutable",
                                    "name": "permitTypeHash",
                                    "nameLocation": "7847:14:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7839:22:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2740,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7839:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2743,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "7879:5:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7871:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2742,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7871:7:16",
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
                                    "id": 2745,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "7902:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7894:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2744,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7894:7:16",
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
                                    "id": 2747,
                                    "mutability": "mutable",
                                    "name": "_approved",
                                    "nameLocation": "7924:9:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7919:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2746,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7919:4:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2749,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "7951:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7943:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2748,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7943:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2751,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "7975:1:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7969:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 2750,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7969:5:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2753,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "7994:1:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "7986:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2752,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7986:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2755,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "8013:1:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2771,
                                    "src": "8005:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2754,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8005:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7796:224:16"
                        },
                        "returnParameters": {
                            "id": 2757,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8030:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2789,
                        "nodeType": "FunctionDefinition",
                        "src": "8419:121:16",
                        "nodes": [],
                        "body": {
                            "id": 2788,
                            "nodeType": "Block",
                            "src": "8484:56:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 2782,
                                                            "name": "_pausers",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13715,
                                                            "src": "8513:8:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 2784,
                                                        "indexExpression": {
                                                            "id": 2783,
                                                            "name": "_account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2774,
                                                            "src": "8522:8:16",
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
                                                        "src": "8513:18:16",
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
                                                        "id": 2780,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "8502:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2781,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8506:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "8502:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2785,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8502:30:16",
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
                                            "id": 2779,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "8494:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 2786,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8494:39:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2787,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8494:39:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8360
                        ],
                        "documentation": {
                            "id": 2772,
                            "nodeType": "StructuredDocumentation",
                            "src": "8284:130:16",
                            "text": "@notice Gets the pauser status of an address.\n @param _account The account to check.\n @return The pauser status."
                        },
                        "functionSelector": "46fbf68e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isPauser",
                        "nameLocation": "8428:8:16",
                        "parameters": {
                            "id": 2775,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2774,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "8445:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2789,
                                    "src": "8437:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2773,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8437:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8436:18:16"
                        },
                        "returnParameters": {
                            "id": 2778,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2777,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2789,
                                    "src": "8478:4:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2776,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8478:4:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8477:6:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2803,
                        "nodeType": "FunctionDefinition",
                        "src": "8615:101:16",
                        "nodes": [],
                        "body": {
                            "id": 2802,
                            "nodeType": "Block",
                            "src": "8668:48:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 2798,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13657,
                                                        "src": "8697:10:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 2796,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "8686:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2797,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8690:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "8686:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2799,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8686:22:16",
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
                                            "id": 2795,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "8678:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 2800,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8678:31:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2801,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8678:31:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8301
                        ],
                        "documentation": {
                            "id": 2790,
                            "nodeType": "StructuredDocumentation",
                            "src": "8546:64:16",
                            "text": "@notice Gets the base token.\n @return The base token."
                        },
                        "functionSelector": "c55dae63",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "baseToken",
                        "nameLocation": "8624:9:16",
                        "parameters": {
                            "id": 2791,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8633:2:16"
                        },
                        "returnParameters": {
                            "id": 2794,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2793,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2803,
                                    "src": "8659:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2792,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8659:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8658:9:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2822,
                        "nodeType": "FunctionDefinition",
                        "src": "8851:183:16",
                        "nodes": [],
                        "body": {
                            "id": 2821,
                            "nodeType": "Block",
                            "src": "8967:67:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 2815,
                                                            "name": "_checkpoints",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13701,
                                                            "src": "8996:12:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7312_storage_$",
                                                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                            }
                                                        },
                                                        "id": 2817,
                                                        "indexExpression": {
                                                            "id": 2816,
                                                            "name": "_checkpointTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2806,
                                                            "src": "9009:15:16",
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
                                                        "src": "8996:29:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$7312_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$7312_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 2813,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "8985:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2814,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8989:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "8985:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2818,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8985:41:16",
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
                                            "id": 2812,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "8977:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 2819,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8977:50:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2820,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8977:50:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8310
                        ],
                        "documentation": {
                            "id": 2804,
                            "nodeType": "StructuredDocumentation",
                            "src": "8722:124:16",
                            "text": "@notice Gets a specified checkpoint.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint."
                        },
                        "functionSelector": "20fc4881",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCheckpoint",
                        "nameLocation": "8860:13:16",
                        "parameters": {
                            "id": 2807,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2806,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "8891:15:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2822,
                                    "src": "8883:23:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2805,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8883:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8873:39:16"
                        },
                        "returnParameters": {
                            "id": 2811,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2810,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2822,
                                    "src": "8936:29:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Checkpoint_$7312_memory_ptr",
                                        "typeString": "struct IHyperdrive.Checkpoint"
                                    },
                                    "typeName": {
                                        "id": 2809,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2808,
                                            "name": "IHyperdrive.Checkpoint",
                                            "nameLocations": [
                                                "8936:11:16",
                                                "8948:10:16"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7312,
                                            "src": "8936:22:16"
                                        },
                                        "referencedDeclaration": 7312,
                                        "src": "8936:22:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Checkpoint_$7312_storage_ptr",
                                            "typeString": "struct IHyperdrive.Checkpoint"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8935:31:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2842,
                        "nodeType": "FunctionDefinition",
                        "src": "9199:213:16",
                        "nodes": [],
                        "body": {
                            "id": 2841,
                            "nodeType": "Block",
                            "src": "9300:112:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 2836,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 2834,
                                                                    "name": "_checkpointTime",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2825,
                                                                    "src": "9358:15:16",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "+",
                                                                "rightExpression": {
                                                                    "id": 2835,
                                                                    "name": "_positionDuration",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 13663,
                                                                    "src": "9376:17:16",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "9358:35:16",
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
                                                            "id": 2833,
                                                            "name": "_nonNettedLongs",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9190,
                                                            "src": "9342:15:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$",
                                                                "typeString": "function (uint256) view returns (int256)"
                                                            }
                                                        },
                                                        "id": 2837,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9342:52:16",
                                                        "tryCall": false,
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
                                                    "expression": {
                                                        "id": 2831,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "9331:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2832,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9335:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "9331:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2838,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9331:64:16",
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
                                            "id": 2830,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "9310:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 2839,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9310:95:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2840,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9310:95:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8318
                        ],
                        "documentation": {
                            "id": 2823,
                            "nodeType": "StructuredDocumentation",
                            "src": "9040:154:16",
                            "text": "@notice Gets the checkpoint exposure at a specified time.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint exposure."
                        },
                        "functionSelector": "cf210e65",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCheckpointExposure",
                        "nameLocation": "9208:21:16",
                        "parameters": {
                            "id": 2826,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2825,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "9247:15:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2842,
                                    "src": "9239:23:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2824,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9239:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9229:39:16"
                        },
                        "returnParameters": {
                            "id": 2829,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2828,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2842,
                                    "src": "9292:6:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 2827,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9292:6:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9291:8:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2877,
                        "nodeType": "FunctionDefinition",
                        "src": "9617:1075:16",
                        "nodes": [],
                        "body": {
                            "id": 2876,
                            "nodeType": "Block",
                            "src": "9724:968:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 2854,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13657,
                                                                "src": "9839:10:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            {
                                                                "id": 2855,
                                                                "name": "_linkerFactory",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13718,
                                                                "src": "9886:14:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 2856,
                                                                "name": "_linkerCodeHash",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13721,
                                                                "src": "9938:15:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 2857,
                                                                "name": "_initialVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13681,
                                                                "src": "9999:23:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 2858,
                                                                "name": "_minimumShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13684,
                                                                "src": "10066:21:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 2859,
                                                                "name": "_minimumTransactionAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13687,
                                                                "src": "10135:25:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 2860,
                                                                "name": "_positionDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13663,
                                                                "src": "10200:17:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 2861,
                                                                "name": "_checkpointDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13660,
                                                                "src": "10259:19:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 2862,
                                                                "name": "_timeStretch",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13666,
                                                                "src": "10313:12:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 2863,
                                                                "name": "_governance",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13707,
                                                                "src": "10359:11:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 2864,
                                                                "name": "_feeCollector",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13704,
                                                                "src": "10406:13:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 2867,
                                                                        "name": "_curveFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 13669,
                                                                        "src": "10489:9:16",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 2868,
                                                                        "name": "_flatFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 13672,
                                                                        "src": "10524:8:16",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 2869,
                                                                        "name": "_governanceLPFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 13675,
                                                                        "src": "10558:16:16",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 2870,
                                                                        "name": "_governanceZombieFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 13678,
                                                                        "src": "10600:20:16",
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
                                                                    "expression": {
                                                                        "id": 2865,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 7616,
                                                                        "src": "10447:11:16",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 2866,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "10459:4:16",
                                                                    "memberName": "Fees",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 7332,
                                                                    "src": "10447:16:16",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_struct$_Fees_$7332_storage_ptr_$",
                                                                        "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                                                    }
                                                                },
                                                                "id": 2871,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "structConstructorCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10447:195:16",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                                    "typeString": "contract IERC20"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
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
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 2852,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 7616,
                                                                "src": "9783:11:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 2853,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9795:10:16",
                                                            "memberName": "PoolConfig",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7407,
                                                            "src": "9783:22:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_struct$_PoolConfig_$7407_storage_ptr_$",
                                                                "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                                                            }
                                                        },
                                                        "id": 2872,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "structConstructorCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [
                                                            "9828:9:16",
                                                            "9871:13:16",
                                                            "9922:14:16",
                                                            "9975:22:16",
                                                            "10044:20:16",
                                                            "10109:24:16",
                                                            "10182:16:16",
                                                            "10239:18:16",
                                                            "10300:11:16",
                                                            "10347:10:16",
                                                            "10392:12:16",
                                                            "10441:4:16"
                                                        ],
                                                        "names": [
                                                            "baseToken",
                                                            "linkerFactory",
                                                            "linkerCodeHash",
                                                            "initialVaultSharePrice",
                                                            "minimumShareReserves",
                                                            "minimumTransactionAmount",
                                                            "positionDuration",
                                                            "checkpointDuration",
                                                            "timeStretch",
                                                            "governance",
                                                            "feeCollector",
                                                            "fees"
                                                        ],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9783:878:16",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 2850,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "9755:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2851,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9759:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "9755:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2873,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9755:920:16",
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
                                            "id": 2849,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "9734:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 2874,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9734:951:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2875,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9734:951:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8332
                        ],
                        "documentation": {
                            "id": 2843,
                            "nodeType": "StructuredDocumentation",
                            "src": "9418:194:16",
                            "text": "@notice Gets the pool's configuration parameters.\n @dev These parameters are immutable, so this should only need to be\n      called once.\n @return The PoolConfig struct."
                        },
                        "functionSelector": "b0d96580",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPoolConfig",
                        "nameLocation": "9626:13:16",
                        "parameters": {
                            "id": 2844,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9639:2:16"
                        },
                        "returnParameters": {
                            "id": 2848,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2847,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2877,
                                    "src": "9689:29:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 2846,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2845,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "9689:11:16",
                                                "9701:10:16"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "9689:22:16"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "9689:22:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9688:31:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2973,
                        "nodeType": "FunctionDefinition",
                        "src": "10861:1619:16",
                        "nodes": [],
                        "body": {
                            "id": 2972,
                            "nodeType": "Block",
                            "src": "10936:1544:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        2885
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2885,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "10954:15:16",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2972,
                                            "src": "10946:23:16",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2884,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10946:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2888,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 2886,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9032,
                                            "src": "10972:19:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 2887,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10972:21:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10946:47:16"
                                },
                                {
                                    "assignments": [
                                        2890
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2890,
                                            "mutability": "mutable",
                                            "name": "lpTotalSupply",
                                            "nameLocation": "11011:13:16",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2972,
                                            "src": "11003:21:16",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2889,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11003:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2903,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2902,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 2899,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "baseExpression": {
                                                    "id": 2891,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13733,
                                                    "src": "11027:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 2894,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 2892,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14117,
                                                        "src": "11040:7:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 2893,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "11048:12:16",
                                                    "memberName": "_LP_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 13850,
                                                    "src": "11040:20:16",
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
                                                "src": "11027:34:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "baseExpression": {
                                                    "id": 2895,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13733,
                                                    "src": "11076:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 2898,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 2896,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14117,
                                                        "src": "11089:7:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 2897,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "11097:26:16",
                                                    "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 13859,
                                                    "src": "11089:34:16",
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
                                                "src": "11076:48:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "11027:97:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 2900,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "11139:13:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 2901,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "11153:15:16",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7315,
                                            "src": "11139:29:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "11027:141:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11003:165:16"
                                },
                                {
                                    "assignments": [
                                        2905
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2905,
                                            "mutability": "mutable",
                                            "name": "presentValue",
                                            "nameLocation": "11186:12:16",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2972,
                                            "src": "11178:20:16",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2904,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11178:7:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2920,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 2908,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 2906,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2885,
                                                "src": "11201:15:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 2907,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "11219:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "11201:19:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "hexValue": "30",
                                            "id": 2918,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "11378:1:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "id": 2919,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "11201:178:16",
                                        "trueExpression": {
                                            "arguments": [
                                                {
                                                    "id": 2916,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2885,
                                                    "src": "11347:15:16",
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
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 2912,
                                                                    "name": "vaultSharePrice",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2885,
                                                                    "src": "11304:15:16",
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
                                                                "id": 2911,
                                                                "name": "_getPresentValueParams",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9319,
                                                                "src": "11281:22:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15790_memory_ptr_$",
                                                                    "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                                                }
                                                            },
                                                            "id": 2913,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "11281:39:16",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 2909,
                                                            "name": "LPMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17396,
                                                            "src": "11235:6:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                                "typeString": "type(library LPMath)"
                                                            }
                                                        },
                                                        "id": 2910,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11259:21:16",
                                                        "memberName": "calculatePresentValue",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 15819,
                                                        "src": "11235:45:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2914,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11235:86:16",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2915,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11339:7:16",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14197,
                                                "src": "11235:111:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 2917,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11235:128:16",
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
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11178:201:16"
                                },
                                {
                                    "assignments": [
                                        2925
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2925,
                                            "mutability": "mutable",
                                            "name": "poolInfo",
                                            "nameLocation": "11417:8:16",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2972,
                                            "src": "11389:36:16",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolInfo_$7453_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolInfo"
                                            },
                                            "typeName": {
                                                "id": 2924,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 2923,
                                                    "name": "IHyperdrive.PoolInfo",
                                                    "nameLocations": [
                                                        "11389:11:16",
                                                        "11401:8:16"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 7453,
                                                    "src": "11389:20:16"
                                                },
                                                "referencedDeclaration": 7453,
                                                "src": "11389:20:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$7453_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolInfo"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2964,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 2928,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11478:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2929,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11491:13:16",
                                                "memberName": "shareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7274,
                                                "src": "11478:26:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2930,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11535:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2931,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11548:15:16",
                                                "memberName": "shareAdjustment",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7286,
                                                "src": "11535:28:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2932,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11597:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2933,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11610:18:16",
                                                "memberName": "zombieBaseProceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7304,
                                                "src": "11597:31:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint112",
                                                    "typeString": "uint112"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2934,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11663:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2935,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11676:19:16",
                                                "memberName": "zombieShareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7307,
                                                "src": "11663:32:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2936,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11723:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2937,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11736:12:16",
                                                "memberName": "bondReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7277,
                                                "src": "11723:25:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 2938,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2885,
                                                "src": "11779:15:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2939,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11826:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2940,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11839:16:16",
                                                "memberName": "longsOutstanding",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7283,
                                                "src": "11826:29:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2941,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11894:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2942,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11907:23:16",
                                                "memberName": "longAverageMaturityTime",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7292,
                                                "src": "11894:36:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2943,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "11963:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2944,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11976:17:16",
                                                "memberName": "shortsOutstanding",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7289,
                                                "src": "11963:30:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2945,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "12033:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2946,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12046:24:16",
                                                "memberName": "shortAverageMaturityTime",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7295,
                                                "src": "12033:37:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 2947,
                                                "name": "lpTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2890,
                                                "src": "12099:13:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 2950,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 2948,
                                                        "name": "lpTotalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2890,
                                                        "src": "12140:13:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 2949,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "12157:1:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "12140:18:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseExpression": {
                                                    "arguments": [
                                                        {
                                                            "id": 2954,
                                                            "name": "lpTotalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2890,
                                                            "src": "12218:13:16",
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
                                                            "id": 2952,
                                                            "name": "presentValue",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2905,
                                                            "src": "12197:12:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 2953,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12210:7:16",
                                                        "memberName": "divDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14215,
                                                        "src": "12197:20:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2955,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "12197:35:16",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2956,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "Conditional",
                                                "src": "12140:92:16",
                                                "trueExpression": {
                                                    "hexValue": "30",
                                                    "id": 2951,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "12177:1:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2957,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13695,
                                                    "src": "12279:13:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 2958,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12293:15:16",
                                                "memberName": "readyToWithdraw",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7315,
                                                "src": "12279:29:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2959,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13695,
                                                    "src": "12348:13:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 2960,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12362:8:16",
                                                "memberName": "proceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7318,
                                                "src": "12348:22:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 2961,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "12398:12:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 2962,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12411:12:16",
                                                "memberName": "longExposure",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7280,
                                                "src": "12398:25:16",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint112",
                                                    "typeString": "uint112"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
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
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
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
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            ],
                                            "expression": {
                                                "id": 2926,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7616,
                                                "src": "11428:11:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 2927,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "11440:8:16",
                                            "memberName": "PoolInfo",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7453,
                                            "src": "11428:20:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_PoolInfo_$7453_storage_ptr_$",
                                                "typeString": "type(struct IHyperdrive.PoolInfo storage pointer)"
                                            }
                                        },
                                        "id": 2963,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "nameLocations": [
                                            "11463:13:16",
                                            "11518:15:16",
                                            "11577:18:16",
                                            "11642:19:16",
                                            "11709:12:16",
                                            "11762:15:16",
                                            "11808:16:16",
                                            "11869:23:16",
                                            "11944:17:16",
                                            "12007:24:16",
                                            "12084:13:16",
                                            "12126:12:16",
                                            "12246:31:16",
                                            "12322:24:16",
                                            "12384:12:16"
                                        ],
                                        "names": [
                                            "shareReserves",
                                            "shareAdjustment",
                                            "zombieBaseProceeds",
                                            "zombieShareReserves",
                                            "bondReserves",
                                            "vaultSharePrice",
                                            "longsOutstanding",
                                            "longAverageMaturityTime",
                                            "shortsOutstanding",
                                            "shortAverageMaturityTime",
                                            "lpTotalSupply",
                                            "lpSharePrice",
                                            "withdrawalSharesReadyToWithdraw",
                                            "withdrawalSharesProceeds",
                                            "longExposure"
                                        ],
                                        "nodeType": "FunctionCall",
                                        "src": "11428:1006:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$7453_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11389:1045:16"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 2968,
                                                        "name": "poolInfo",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2925,
                                                        "src": "12463:8:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolInfo_$7453_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolInfo_$7453_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 2966,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "12452:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2967,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12456:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "12452:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2969,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "12452:20:16",
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
                                            "id": 2965,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "12444:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 2970,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12444:29:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2971,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12444:29:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8339
                        ],
                        "documentation": {
                            "id": 2878,
                            "nodeType": "StructuredDocumentation",
                            "src": "10698:158:16",
                            "text": "@notice Gets info about the pool's reserves and other state that is\n         important to evaluate potential trades.\n @return The pool info."
                        },
                        "functionSelector": "60246c88",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPoolInfo",
                        "nameLocation": "10870:11:16",
                        "parameters": {
                            "id": 2879,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10881:2:16"
                        },
                        "returnParameters": {
                            "id": 2883,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2882,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2973,
                                    "src": "10907:27:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolInfo_$7453_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolInfo"
                                    },
                                    "typeName": {
                                        "id": 2881,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2880,
                                            "name": "IHyperdrive.PoolInfo",
                                            "nameLocations": [
                                                "10907:11:16",
                                                "10919:8:16"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7453,
                                            "src": "10907:20:16"
                                        },
                                        "referencedDeclaration": 7453,
                                        "src": "10907:20:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$7453_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolInfo"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10906:29:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2994,
                        "nodeType": "FunctionDefinition",
                        "src": "12604:367:16",
                        "nodes": [],
                        "body": {
                            "id": 2993,
                            "nodeType": "Block",
                            "src": "12715:256:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "id": 2985,
                                                                    "name": "_withdrawPool",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 13695,
                                                                    "src": "12838:13:16",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                                    }
                                                                },
                                                                "id": 2986,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "12852:15:16",
                                                                "memberName": "readyToWithdraw",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 7315,
                                                                "src": "12838:29:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            },
                                                            {
                                                                "expression": {
                                                                    "id": 2987,
                                                                    "name": "_withdrawPool",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 13695,
                                                                    "src": "12899:13:16",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                                    }
                                                                },
                                                                "id": 2988,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "12913:8:16",
                                                                "memberName": "proceeds",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 7318,
                                                                "src": "12899:22:16",
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
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 2983,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 7616,
                                                                "src": "12774:11:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 2984,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "12786:12:16",
                                                            "memberName": "WithdrawPool",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7319,
                                                            "src": "12774:24:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_struct$_WithdrawPool_$7319_storage_ptr_$",
                                                                "typeString": "type(struct IHyperdrive.WithdrawPool storage pointer)"
                                                            }
                                                        },
                                                        "id": 2989,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "structConstructorCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [
                                                            "12821:15:16",
                                                            "12889:8:16"
                                                        ],
                                                        "names": [
                                                            "readyToWithdraw",
                                                            "proceeds"
                                                        ],
                                                        "nodeType": "FunctionCall",
                                                        "src": "12774:166:16",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_WithdrawPool_$7319_memory_ptr",
                                                            "typeString": "struct IHyperdrive.WithdrawPool memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_WithdrawPool_$7319_memory_ptr",
                                                            "typeString": "struct IHyperdrive.WithdrawPool memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 2981,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "12746:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2982,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12750:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "12746:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2990,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "12746:208:16",
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
                                            "id": 2980,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "12725:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 2991,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12725:239:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2992,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12725:239:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8352
                        ],
                        "documentation": {
                            "id": 2974,
                            "nodeType": "StructuredDocumentation",
                            "src": "12486:113:16",
                            "text": "@notice Gets information about the withdrawal pool.\n @return Hyperdrive's withdrawal pool information."
                        },
                        "functionSelector": "fba56008",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getWithdrawPool",
                        "nameLocation": "12613:15:16",
                        "parameters": {
                            "id": 2975,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12628:2:16"
                        },
                        "returnParameters": {
                            "id": 2979,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2978,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2994,
                                    "src": "12678:31:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_WithdrawPool_$7319_memory_ptr",
                                        "typeString": "struct IHyperdrive.WithdrawPool"
                                    },
                                    "typeName": {
                                        "id": 2977,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2976,
                                            "name": "IHyperdrive.WithdrawPool",
                                            "nameLocations": [
                                                "12678:11:16",
                                                "12690:12:16"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7319,
                                            "src": "12678:24:16"
                                        },
                                        "referencedDeclaration": 7319,
                                        "src": "12678:24:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage_ptr",
                                            "typeString": "struct IHyperdrive.WithdrawPool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12677:33:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3008,
                        "nodeType": "FunctionDefinition",
                        "src": "13124:132:16",
                        "nodes": [],
                        "body": {
                            "id": 3007,
                            "nodeType": "Block",
                            "src": "13196:60:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 3003,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13710,
                                                        "src": "13225:22:16",
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
                                                        "id": 3001,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "13214:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3002,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "13218:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "13214:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3004,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13214:34:16",
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
                                            "id": 3000,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "13206:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3005,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13206:43:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3006,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13206:43:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8345
                        ],
                        "documentation": {
                            "id": 2995,
                            "nodeType": "StructuredDocumentation",
                            "src": "12977:142:16",
                            "text": "@notice Gets info about the fees presently accrued by the pool.\n @return Governance fees denominated in shares yet to be collected."
                        },
                        "functionSelector": "c69e16ad",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUncollectedGovernanceFees",
                        "nameLocation": "13133:28:16",
                        "parameters": {
                            "id": 2996,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13161:2:16"
                        },
                        "returnParameters": {
                            "id": 2999,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2998,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3008,
                                    "src": "13187:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2997,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13187:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13186:9:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3023,
                        "nodeType": "FunctionDefinition",
                        "src": "13335:159:16",
                        "nodes": [],
                        "body": {
                            "id": 3022,
                            "nodeType": "Block",
                            "src": "13444:50:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 3018,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "13473:12:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 3016,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "13462:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3017,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "13466:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "13462:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3019,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13462:24:16",
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
                                            "id": 3015,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "13454:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3020,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13454:33:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3021,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13454:33:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8325
                        ],
                        "documentation": {
                            "id": 3009,
                            "nodeType": "StructuredDocumentation",
                            "src": "13262:68:16",
                            "text": "@notice Gets the market state.\n @return The market state."
                        },
                        "functionSelector": "d8165743",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getMarketState",
                        "nameLocation": "13344:14:16",
                        "parameters": {
                            "id": 3010,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13358:2:16"
                        },
                        "returnParameters": {
                            "id": 3014,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3013,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3023,
                                    "src": "13408:30:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$7308_memory_ptr",
                                        "typeString": "struct IHyperdrive.MarketState"
                                    },
                                    "typeName": {
                                        "id": 3012,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 3011,
                                            "name": "IHyperdrive.MarketState",
                                            "nameLocations": [
                                                "13408:11:16",
                                                "13420:11:16"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7308,
                                            "src": "13408:23:16"
                                        },
                                        "referencedDeclaration": 7308,
                                        "src": "13408:23:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage_ptr",
                                            "typeString": "struct IHyperdrive.MarketState"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13407:32:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3083,
                        "nodeType": "FunctionDefinition",
                        "src": "13735:565:16",
                        "nodes": [],
                        "body": {
                            "id": 3082,
                            "nodeType": "Block",
                            "src": "13831:469:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        3037
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 3037,
                                            "mutability": "mutable",
                                            "name": "loaded",
                                            "nameLocation": "13858:6:16",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 3082,
                                            "src": "13841:23:16",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 3035,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "13841:7:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 3036,
                                                "nodeType": "ArrayTypeName",
                                                "src": "13841:9:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                                    "typeString": "bytes32[]"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 3044,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 3041,
                                                    "name": "_slots",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3027,
                                                    "src": "13881:6:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                        "typeString": "uint256[] calldata"
                                                    }
                                                },
                                                "id": 3042,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13888:6:16",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "13881:13:16",
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
                                            "id": 3040,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "13867:13:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes32[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 3038,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "13871:7:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 3039,
                                                "nodeType": "ArrayTypeName",
                                                "src": "13871:9:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                                    "typeString": "bytes32[]"
                                                }
                                            }
                                        },
                                        "id": 3043,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13867:28:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13841:54:16"
                                },
                                {
                                    "body": {
                                        "id": 3073,
                                        "nodeType": "Block",
                                        "src": "14003:253:16",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    3054
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 3054,
                                                        "mutability": "mutable",
                                                        "name": "slot",
                                                        "nameLocation": "14025:4:16",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 3073,
                                                        "src": "14017:12:16",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 3053,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "14017:7:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 3058,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "id": 3055,
                                                        "name": "_slots",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3027,
                                                        "src": "14032:6:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                            "typeString": "uint256[] calldata"
                                                        }
                                                    },
                                                    "id": 3057,
                                                    "indexExpression": {
                                                        "id": 3056,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3046,
                                                        "src": "14039:1:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "14032:9:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "14017:24:16"
                                            },
                                            {
                                                "assignments": [
                                                    3060
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 3060,
                                                        "mutability": "mutable",
                                                        "name": "data",
                                                        "nameLocation": "14063:4:16",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 3073,
                                                        "src": "14055:12:16",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 3059,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "14055:7:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 3061,
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "14055:12:16"
                                            },
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "14106:51:16",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "14124:19:16",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "slot",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "14138:4:16"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "sload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "14132:5:16"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "14132:11:16"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "data",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "14124:4:16"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 3060,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "14124:4:16",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 3054,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "14138:4:16",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "flags": [
                                                    "memory-safe"
                                                ],
                                                "id": 3062,
                                                "nodeType": "InlineAssembly",
                                                "src": "14081:76:16"
                                            },
                                            {
                                                "expression": {
                                                    "id": 3067,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 3063,
                                                            "name": "loaded",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3037,
                                                            "src": "14170:6:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                                "typeString": "bytes32[] memory"
                                                            }
                                                        },
                                                        "id": 3065,
                                                        "indexExpression": {
                                                            "id": 3064,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3046,
                                                            "src": "14177:1:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "14170:9:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 3066,
                                                        "name": "data",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3060,
                                                        "src": "14182:4:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "14170:16:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 3068,
                                                "nodeType": "ExpressionStatement",
                                                "src": "14170:16:16"
                                            },
                                            {
                                                "id": 3072,
                                                "nodeType": "UncheckedBlock",
                                                "src": "14200:46:16",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "id": 3070,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "++",
                                                            "prefix": true,
                                                            "src": "14228:3:16",
                                                            "subExpression": {
                                                                "id": 3069,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3046,
                                                                "src": "14230:1:16",
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
                                                        "id": 3071,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "14228:3:16"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 3052,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 3049,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3046,
                                            "src": "13982:1:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 3050,
                                                "name": "_slots",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3027,
                                                "src": "13986:6:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            },
                                            "id": 3051,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "13993:6:16",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "13986:13:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "13982:17:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 3074,
                                    "initializationExpression": {
                                        "assignments": [
                                            3046
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 3046,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "13975:1:16",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 3074,
                                                "src": "13967:9:16",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 3045,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "13967:7:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 3048,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 3047,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "13979:1:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "13967:13:16"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "13962:294:16"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 3078,
                                                        "name": "loaded",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3037,
                                                        "src": "14285:6:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                            "typeString": "bytes32[] memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                            "typeString": "bytes32[] memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 3076,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "14274:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3077,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14278:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "14274:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3079,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14274:18:16",
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
                                            "id": 3075,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "14266:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3080,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14266:27:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3081,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14266:27:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8370
                        ],
                        "documentation": {
                            "id": 3024,
                            "nodeType": "StructuredDocumentation",
                            "src": "13500:230:16",
                            "text": "@notice Allows plugin data libs to provide getters or other complex\n         logic instead of the main.\n @param _slots The storage slots the caller wants the data from.\n @return A raw array of loaded data."
                        },
                        "functionSelector": "becee9c3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "load",
                        "nameLocation": "13744:4:16",
                        "parameters": {
                            "id": 3028,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3027,
                                    "mutability": "mutable",
                                    "name": "_slots",
                                    "nameLocation": "13777:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3083,
                                    "src": "13758:25:16",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3025,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "13758:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 3026,
                                        "nodeType": "ArrayTypeName",
                                        "src": "13758:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13748:41:16"
                        },
                        "returnParameters": {
                            "id": 3032,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3031,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3083,
                                    "src": "13813:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3029,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "13813:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 3030,
                                        "nodeType": "ArrayTypeName",
                                        "src": "13813:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                            "typeString": "bytes32[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13812:18:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3105,
                        "nodeType": "FunctionDefinition",
                        "src": "14470:173:16",
                        "nodes": [],
                        "body": {
                            "id": 3104,
                            "nodeType": "Block",
                            "src": "14577:66:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "baseExpression": {
                                                                "id": 3096,
                                                                "name": "_balanceOf",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13728,
                                                                "src": "14606:10:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                                                }
                                                            },
                                                            "id": 3098,
                                                            "indexExpression": {
                                                                "id": 3097,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3086,
                                                                "src": "14617:7:16",
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
                                                            "src": "14606:19:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 3100,
                                                        "indexExpression": {
                                                            "id": 3099,
                                                            "name": "account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3088,
                                                            "src": "14626:7:16",
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
                                                        "src": "14606:28:16",
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
                                                        "id": 3094,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "14595:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3095,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14599:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "14595:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3101,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14595:40:16",
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
                                            "id": 3093,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "14587:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3102,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14587:49:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3103,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14587:49:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8702
                        ],
                        "documentation": {
                            "id": 3084,
                            "nodeType": "StructuredDocumentation",
                            "src": "14306:159:16",
                            "text": "@notice Gets an account's balance of a sub-token.\n @param tokenId The sub-token id.\n @param account The account.\n @return The balance."
                        },
                        "functionSelector": "3656eec2",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nameLocation": "14479:9:16",
                        "parameters": {
                            "id": 3089,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3086,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "14506:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3105,
                                    "src": "14498:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3085,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14498:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 3088,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "14531:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3105,
                                    "src": "14523:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3087,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14523:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14488:56:16"
                        },
                        "returnParameters": {
                            "id": 3092,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3091,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3105,
                                    "src": "14568:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3090,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14568:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14567:9:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3123,
                        "nodeType": "FunctionDefinition",
                        "src": "14778:129:16",
                        "nodes": [],
                        "body": {
                            "id": 3122,
                            "nodeType": "Block",
                            "src": "14848:59:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 3116,
                                                            "name": "_totalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13733,
                                                            "src": "14877:12:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                                "typeString": "mapping(uint256 => uint256)"
                                                            }
                                                        },
                                                        "id": 3118,
                                                        "indexExpression": {
                                                            "id": 3117,
                                                            "name": "tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3108,
                                                            "src": "14890:7:16",
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
                                                        "src": "14877:21:16",
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
                                                        "id": 3114,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "14866:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3115,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14870:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "14866:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3119,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14866:33:16",
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
                                            "id": 3113,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "14858:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3120,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14858:42:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3121,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14858:42:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8670
                        ],
                        "documentation": {
                            "id": 3106,
                            "nodeType": "StructuredDocumentation",
                            "src": "14649:124:16",
                            "text": "@notice Gets the total supply of a sub-token.\n @param tokenId The sub-token id.\n @return The total supply."
                        },
                        "functionSelector": "bd85b039",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nameLocation": "14787:11:16",
                        "parameters": {
                            "id": 3109,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3108,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "14807:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3123,
                                    "src": "14799:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3107,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14799:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14798:17:16"
                        },
                        "returnParameters": {
                            "id": 3112,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3111,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3123,
                                    "src": "14839:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3110,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14839:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14838:9:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3145,
                        "nodeType": "FunctionDefinition",
                        "src": "15096:186:16",
                        "nodes": [],
                        "body": {
                            "id": 3144,
                            "nodeType": "Block",
                            "src": "15208:74:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "baseExpression": {
                                                                "id": 3136,
                                                                "name": "_isApprovedForAll",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13740,
                                                                "src": "15237:17:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                                                    "typeString": "mapping(address => mapping(address => bool))"
                                                                }
                                                            },
                                                            "id": 3138,
                                                            "indexExpression": {
                                                                "id": 3137,
                                                                "name": "account",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3126,
                                                                "src": "15255:7:16",
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
                                                            "src": "15237:26:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 3140,
                                                        "indexExpression": {
                                                            "id": 3139,
                                                            "name": "operator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3128,
                                                            "src": "15264:8:16",
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
                                                        "src": "15237:36:16",
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
                                                        "id": 3134,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "15226:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3135,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15230:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "15226:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3141,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15226:48:16",
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
                                            "id": 3133,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "15218:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
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
                                        "src": "15218:57:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3143,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15218:57:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8680
                        ],
                        "documentation": {
                            "id": 3124,
                            "nodeType": "StructuredDocumentation",
                            "src": "14913:178:16",
                            "text": "@notice Gets the approval status of an operator for an account.\n @param account The account.\n @param operator The operator.\n @return The approval status."
                        },
                        "functionSelector": "e985e9c5",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isApprovedForAll",
                        "nameLocation": "15105:16:16",
                        "parameters": {
                            "id": 3129,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3126,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "15139:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3145,
                                    "src": "15131:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3125,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15131:7:16",
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
                                    "id": 3128,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "15164:8:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3145,
                                    "src": "15156:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3127,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15156:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15121:57:16"
                        },
                        "returnParameters": {
                            "id": 3132,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3131,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3145,
                                    "src": "15202:4:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 3130,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15202:4:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15201:6:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3171,
                        "nodeType": "FunctionDefinition",
                        "src": "15510:223:16",
                        "nodes": [],
                        "body": {
                            "id": 3170,
                            "nodeType": "Block",
                            "src": "15650:83:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 3160,
                                                                    "name": "_perTokenApprovals",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 13749,
                                                                    "src": "15679:18:16",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                                                        "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                                                                    }
                                                                },
                                                                "id": 3162,
                                                                "indexExpression": {
                                                                    "id": 3161,
                                                                    "name": "tokenId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 3148,
                                                                    "src": "15698:7:16",
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
                                                                "src": "15679:27:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                    "typeString": "mapping(address => mapping(address => uint256))"
                                                                }
                                                            },
                                                            "id": 3164,
                                                            "indexExpression": {
                                                                "id": 3163,
                                                                "name": "account",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3150,
                                                                "src": "15707:7:16",
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
                                                            "src": "15679:36:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 3166,
                                                        "indexExpression": {
                                                            "id": 3165,
                                                            "name": "spender",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3152,
                                                            "src": "15716:7:16",
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
                                                        "src": "15679:45:16",
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
                                                        "id": 3158,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "15668:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3159,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15672:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "15668:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3167,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15668:57:16",
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
                                            "id": 3157,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "15660:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
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
                                        "src": "15660:66:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3169,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15660:66:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8692
                        ],
                        "documentation": {
                            "id": 3146,
                            "nodeType": "StructuredDocumentation",
                            "src": "15288:217:16",
                            "text": "@notice Gets the approval status of an operator for an account.\n @param tokenId The sub-token id.\n @param account The account.\n @param spender The spender.\n @return The approval status."
                        },
                        "functionSelector": "21ff32a9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "perTokenApprovals",
                        "nameLocation": "15519:17:16",
                        "parameters": {
                            "id": 3153,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3148,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "15554:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3171,
                                    "src": "15546:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3147,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15546:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 3150,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "15579:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3171,
                                    "src": "15571:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3149,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15571:7:16",
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
                                    "id": 3152,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "15604:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3171,
                                    "src": "15596:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3151,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15596:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15536:81:16"
                        },
                        "returnParameters": {
                            "id": 3156,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3155,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3171,
                                    "src": "15641:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3154,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15641:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15640:9:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3187,
                        "nodeType": "FunctionDefinition",
                        "src": "15913:117:16",
                        "nodes": [],
                        "body": {
                            "id": 3186,
                            "nodeType": "Block",
                            "src": "15971:59:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "id": 3180,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13657,
                                                                "src": "16000:10:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 3181,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "16011:8:16",
                                                            "memberName": "decimals",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 6895,
                                                            "src": "16000:19:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                                                                "typeString": "function () view external returns (uint8)"
                                                            }
                                                        },
                                                        "id": 3182,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "16000:21:16",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint8",
                                                            "typeString": "uint8"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint8",
                                                            "typeString": "uint8"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 3178,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "15989:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3179,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15993:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "15989:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3183,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15989:33:16",
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
                                            "id": 3177,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "15981:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15981:42:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3185,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15981:42:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8646
                        ],
                        "documentation": {
                            "id": 3172,
                            "nodeType": "StructuredDocumentation",
                            "src": "15739:169:16",
                            "text": "@notice Gets the decimals of the MultiToken. This is the same as the\n         decimals used by the base token.\n @return The decimals of the MultiToken."
                        },
                        "functionSelector": "313ce567",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nameLocation": "15922:8:16",
                        "parameters": {
                            "id": 3173,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "15930:2:16"
                        },
                        "returnParameters": {
                            "id": 3176,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3175,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3187,
                                    "src": "15964:5:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 3174,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15964:5:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15963:7:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 3206,
                        "nodeType": "FunctionDefinition",
                        "src": "16149:137:16",
                        "nodes": [],
                        "body": {
                            "id": 3205,
                            "nodeType": "Block",
                            "src": "16218:68:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 3200,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3190,
                                                                "src": "16269:7:16",
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
                                                                "id": 3198,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14117,
                                                                "src": "16247:7:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 3199,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "16255:13:16",
                                                            "memberName": "assetIdToName",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 13978,
                                                            "src": "16247:21:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                "typeString": "function (uint256) pure returns (string memory)"
                                                            }
                                                        },
                                                        "id": 3201,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "16247:30:16",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 3196,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "16236:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3197,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16240:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16236:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3202,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16236:42:16",
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
                                            "id": 3195,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "16228:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3203,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16228:51:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3204,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16228:51:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8654
                        ],
                        "documentation": {
                            "id": 3188,
                            "nodeType": "StructuredDocumentation",
                            "src": "16036:108:16",
                            "text": "@notice Gets the name of a sub-token.\n @param tokenId The sub-token id.\n @return The name."
                        },
                        "functionSelector": "00ad800c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nameLocation": "16158:4:16",
                        "parameters": {
                            "id": 3191,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3190,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "16171:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3206,
                                    "src": "16163:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3189,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16163:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16162:17:16"
                        },
                        "returnParameters": {
                            "id": 3194,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3193,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3206,
                                    "src": "16203:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 3192,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16203:6:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16202:15:16"
                        },
                        "scope": 3257,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3225,
                        "nodeType": "FunctionDefinition",
                        "src": "16409:141:16",
                        "nodes": [],
                        "body": {
                            "id": 3224,
                            "nodeType": "Block",
                            "src": "16480:70:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 3219,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3209,
                                                                "src": "16533:7:16",
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
                                                                "id": 3217,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14117,
                                                                "src": "16509:7:16",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 3218,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "16517:15:16",
                                                            "memberName": "assetIdToSymbol",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 14056,
                                                            "src": "16509:23:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                "typeString": "function (uint256) pure returns (string memory)"
                                                            }
                                                        },
                                                        "id": 3220,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "16509:32:16",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 3215,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "16498:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3216,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16502:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16498:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3221,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16498:44:16",
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
                                            "id": 3214,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "16490:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16490:53:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3223,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16490:53:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8662
                        ],
                        "documentation": {
                            "id": 3207,
                            "nodeType": "StructuredDocumentation",
                            "src": "16292:112:16",
                            "text": "@notice Gets the symbol of a sub-token.\n @param tokenId The sub-token id.\n @return The symbol."
                        },
                        "functionSelector": "4e41a1fb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nameLocation": "16418:6:16",
                        "parameters": {
                            "id": 3210,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3209,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "16433:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3225,
                                    "src": "16425:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3208,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16425:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16424:17:16"
                        },
                        "returnParameters": {
                            "id": 3213,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3212,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3225,
                                    "src": "16465:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 3211,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16465:6:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16464:15:16"
                        },
                        "scope": 3257,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3243,
                        "nodeType": "FunctionDefinition",
                        "src": "16699:119:16",
                        "nodes": [],
                        "body": {
                            "id": 3242,
                            "nodeType": "Block",
                            "src": "16764:54:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 3236,
                                                            "name": "_nonces",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13754,
                                                            "src": "16793:7:16",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 3238,
                                                        "indexExpression": {
                                                            "id": 3237,
                                                            "name": "account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3228,
                                                            "src": "16801:7:16",
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
                                                        "src": "16793:16:16",
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
                                                        "id": 3234,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "16782:3:16",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 3235,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16786:6:16",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16782:10:16",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 3239,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16782:28:16",
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
                                            "id": 3233,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "16774:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3240,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16774:37:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3241,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16774:37:16"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8710
                        ],
                        "documentation": {
                            "id": 3226,
                            "nodeType": "StructuredDocumentation",
                            "src": "16556:138:16",
                            "text": "@notice Gets the permitForAll signature nonce for an account.\n @param account The account.\n @return The signature nonce."
                        },
                        "functionSelector": "7ecebe00",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nonces",
                        "nameLocation": "16708:6:16",
                        "parameters": {
                            "id": 3229,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3228,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "16723:7:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3243,
                                    "src": "16715:15:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3227,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16715:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16714:17:16"
                        },
                        "returnParameters": {
                            "id": 3232,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3231,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3243,
                                    "src": "16755:7:16",
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
                                        "src": "16755:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16754:9:16"
                        },
                        "scope": 3257,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 3256,
                        "nodeType": "FunctionDefinition",
                        "src": "17027:106:16",
                        "nodes": [],
                        "body": {
                            "id": 3255,
                            "nodeType": "Block",
                            "src": "17079:54:16",
                            "nodes": [],
                            "statements": [
                                {
                                    "errorCall": {
                                        "arguments": [
                                            {
                                                "id": 3252,
                                                "name": "_bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3246,
                                                "src": "17119:6:16",
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
                                            "expression": {
                                                "id": 3249,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7616,
                                                "src": "17096:11:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 3251,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "17108:10:16",
                                            "memberName": "ReturnData",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7555,
                                            "src": "17096:22:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 3253,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "17096:30:16",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3254,
                                    "nodeType": "RevertStatement",
                                    "src": "17089:37:16"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 3244,
                            "nodeType": "StructuredDocumentation",
                            "src": "16845:177:16",
                            "text": "@dev Reverts with the provided bytes. This is useful in getters used\n      with the force-revert delegatecall pattern.\n @param _bytes The bytes to revert with."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_revert",
                        "nameLocation": "17036:7:16",
                        "parameters": {
                            "id": 3247,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3246,
                                    "mutability": "mutable",
                                    "name": "_bytes",
                                    "nameLocation": "17057:6:16",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3256,
                                    "src": "17044:19:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 3245,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17044:5:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17043:21:16"
                        },
                        "returnParameters": {
                            "id": 3248,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "17079:0:16"
                        },
                        "scope": 3257,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 2522,
                            "name": "IHyperdriveRead",
                            "nameLocations": [
                                "1211:15:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8371,
                            "src": "1211:15:16"
                        },
                        "id": 2523,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1211:15:16"
                    },
                    {
                        "baseName": {
                            "id": 2524,
                            "name": "HyperdriveAdmin",
                            "nameLocations": [
                                "1232:15:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8936,
                            "src": "1232:15:16"
                        },
                        "id": 2525,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1232:15:16"
                    },
                    {
                        "baseName": {
                            "id": 2526,
                            "name": "HyperdriveMultiToken",
                            "nameLocations": [
                                "1253:20:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12682,
                            "src": "1253:20:16"
                        },
                        "id": 2527,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1253:20:16"
                    },
                    {
                        "baseName": {
                            "id": 2528,
                            "name": "HyperdriveLP",
                            "nameLocations": [
                                "1279:12:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11279,
                            "src": "1279:12:16"
                        },
                        "id": 2529,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1279:12:16"
                    },
                    {
                        "baseName": {
                            "id": 2530,
                            "name": "HyperdriveLong",
                            "nameLocations": [
                                "1297:14:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12198,
                            "src": "1297:14:16"
                        },
                        "id": 2531,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1297:14:16"
                    },
                    {
                        "baseName": {
                            "id": 2532,
                            "name": "HyperdriveShort",
                            "nameLocations": [
                                "1317:15:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13634,
                            "src": "1317:15:16"
                        },
                        "id": 2533,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1317:15:16"
                    },
                    {
                        "baseName": {
                            "id": 2534,
                            "name": "HyperdriveCheckpoint",
                            "nameLocations": [
                                "1338:20:16"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10381,
                            "src": "1338:20:16"
                        },
                        "id": 2535,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1338:20:16"
                    }
                ],
                "canonicalName": "HyperdriveTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 2521,
                    "nodeType": "StructuredDocumentation",
                    "src": "848:320:16",
                    "text": "@author DELV\n @title HyperdriveTarget0\n @notice Hyperdrive's target 0 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    3257,
                    10381,
                    13634,
                    12198,
                    11279,
                    12682,
                    8936,
                    9917,
                    13842,
                    67058,
                    8062,
                    8623,
                    8371,
                    8711
                ],
                "name": "HyperdriveTarget0",
                "nameLocation": "1186:17:16",
                "scope": 3258,
                "usedErrors": [
                    7472,
                    7478,
                    7481,
                    7490,
                    7502,
                    7505,
                    7514,
                    7520,
                    7523,
                    7526,
                    7550,
                    7555,
                    7567,
                    7582,
                    67003
                ],
                "usedEvents": [
                    7909,
                    7924,
                    7941,
                    7954,
                    7971,
                    7990,
                    8007,
                    8024,
                    8037,
                    8044,
                    8049,
                    8056,
                    8061,
                    8604,
                    8613,
                    8622
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 16
};
