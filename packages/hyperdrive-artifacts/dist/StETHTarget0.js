export const StETHTarget0 = {
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
                    "internalType": "contract ILido",
                    "name": "_lido",
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
            "stateMutability": "pure",
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
            "inputs": [],
            "name": "lido",
            "outputs": [
                {
                    "internalType": "contract ILido",
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
        }
    ],
    "bytecode": {
        "object": "0x6102606040523480156200001257600080fd5b50604051620040d1380380620040d18339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613cdf620003f260003960008181610550015281816105b8015281816106e60152818161086201528181611cd00152818161222d01526122be015260008181610ce40152611c01015260008181610cb50152611bc40152600081816104f3015281816106aa01528181610e120152818161192d015281816119a70152611a2301526000610d56015260008181610d300152611e0c015260008181610d0a0152611de601526000610ebe01526000610e9801526000610e7201526000610e4c015260008181610dc80152611e32015260008181610d7c0152818161103701526123e5015260008181610da201526124f2015260008181610c860152610fde0152613cdf6000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c806360246c881161010f578063becee9c3116100a2578063d816574311610071578063d816574314610447578063e44808bc1461045c578063e985e9c51461046f578063fba560081461048257600080fd5b8063becee9c314610404578063c55dae6314610424578063c69e16ad1461042c578063cf210e651461043457600080fd5b8063a22cb465116100de578063a22cb465146103b6578063ab033ea9146103c9578063b0d96580146103dc578063bd85b039146103f157600080fd5b806360246c88146103685780637180c8ca1461037d5780637ecebe00146103905780639cd241af146103a357600080fd5b806321ff32a9116101875780633e691db9116101565780633e691db91461030c57806346fbf68e1461031f5780634e41a1fb146103425780634ed2d6ac1461035557600080fd5b806321ff32a91461029e57806323509a2d146102bf578063313ce567146102df5780633656eec2146102f957600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f736600461324c565b6104b1565b60405161020991906132b5565b60405180910390f35b6102256102203660046132dd565b6104e8565b005b610225610235366004613308565b61077c565b610225610248366004613325565b610788565b61022561025b366004613406565b6107a4565b61022561026e36600461349b565b6107ba565b61028661028136600461324c565b6107cd565b60405190516001600160801b03168152602001610209565b6102b16102ac3660046134e3565b61080e565b604051908152602001610209565b6102c7610854565b6040516001600160a01b039091168152602001610209565b6102e7610897565b60405160ff9091168152602001610209565b6102b1610307366004613525565b6108af565b6102b161031a366004613555565b6108e8565b61033261032d3660046132dd565b6108f3565b6040519015158152602001610209565b6101fc61035036600461324c565b610929565b610225610363366004613590565b610937565b610370610985565b60405161020991906135da565b61022561038b36600461367b565b610bb2565b6102b161039e3660046132dd565b610bc0565b6102256103b13660046136a9565b610bec565b6102256103c436600461367b565b610bf8565b6102256103d73660046132dd565b610c64565b6103e4610c6d565b60405161020991906136e1565b6102b16103ff36600461324c565b610ef3565b6104176104123660046137be565b610f15565b6040516102099190613800565b6102c7610fd0565b6102b1611010565b6102b161044236600461324c565b61102a565b61044f611073565b6040516102099190613844565b61022561046a366004613955565b61117f565b61033261047d3660046139b4565b6111c7565b61048a61120b565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b60606104e36104bf8361126a565b6040516020016104cf91906132b5565b604051602081830303815290604052611398565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316036105a05760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062b91906139e2565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610675573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069991906139e2565b90506106cf6001600160a01b0384167f0000000000000000000000000000000000000000000000000000000000000000836113bc565b6040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610735573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075991906139e2565b14610777576040516313dd85ff60e31b815260040160405180910390fd5b505050565b6107858161140e565b50565b610799898989898989898989611491565b505050505050505050565b6107b28686868686866116a4565b505050505050565b6107c78484848433611758565b50505050565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261084d91016104cf565b9392505050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b90565b604080516012602082015260009161089491016104cf565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526108e291016104cf565b92915050565b60006108e282611919565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611a94565b8361094181611b86565b6001600160a01b0316336001600160a01b03161461097257604051632aab8bd360e01b815260040160405180910390fd5b61097e85858585611c43565b5050505050565b6109fe604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610a08611cb0565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610a739190613a27565b610a7d9190613a3a565b90506000808311610a8f576000610aaa565b610aaa83610aa4610a9f86611d48565b611eb0565b90611ee0565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610b7e57610b798486611ef5565b610b81565b60005b81526002546001600160801b0316602091820152604051919250610bab916104cf918491016135da565b5050505090565b610bbc8282611f0a565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b61077783838333611c43565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61078581611f82565b610c7561319c565b6108946040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf91906136e1565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff811115610f3257610f32613a4d565b604051908082528060200260200182016040528015610f5b578160200160208202803683370190505b50905060005b83811015610fb4576000858583818110610f7d57610f7d613a63565b90506020020135905060008154905080848481518110610f9f57610f9f613a63565b60209081029190910101525050600101610f61565b50610fc9816040516020016104cf9190613800565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b60006108946009546040516020016104cf91815260200190565b60006104e361106161105c7f000000000000000000000000000000000000000000000000000000000000000085613a27565b611ff6565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261089460016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461118981611b86565b6001600160a01b0316336001600160a01b0316146111ba57604051632aab8bd360e01b815260040160405180910390fd5b6107b28686868686611758565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916108e291016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610894906060016104cf565b606060f882901c6001600160f81b03831660006112868261203e565b9050600083600381111561129c5761129c6139fb565b036112ce576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611390565b60018360038111156112e2576112e26139fb565b0361130e57806040516020016112f89190613a79565b6040516020818303038152906040529350611390565b6002836003811115611322576113226139fb565b0361133857806040516020016112f89190613ab2565b600383600381111561134c5761134c6139fb565b03611390576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016113b391906132b5565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261077790849061214b565b336000908152600a602052604090205460ff1661143d576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061148690831515815260200190565b60405180910390a150565b834211156114b25760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114d95760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156115c7573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461160557604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061162b90613aec565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806116c157506001600160a01b038516155b156116df5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116ff5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561174f5761174785858381811061171f5761171f613a63565b90506020020135888886868681811061173a5761173a613a63565b9050602002013533611758565b600101611702565b50505050505050565b6001600160a01b038416158061177557506001600160a01b038316155b156117935760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611857576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611857576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611855576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061184f908490613a3a565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611889908490613a3a565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906118c0908490613a27565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006119236121ae565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001661195a60208401846132dd565b6001600160a01b03161461198157604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156119ca5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b80156119e157506008546001600160a01b03163314155b156119fe576040516282b42960e81b815260040160405180910390fd5b6000611a08611cb0565b600980546000909155909150611a1f8183866121d8565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611a7785858861236b565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611ab08261203e565b90506000836003811115611ac657611ac66139fb565b03611af8576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611390565b6001836003811115611b0c57611b0c6139fb565b03611b2257806040516020016112f89190613b05565b6002836003811115611b3657611b366139fb565b03611b4c57806040516020016112f89190613b3d565b6003836003811115611b6057611b606139fb565b03611390576040516c485950455244524956452d575360981b6020820152602d0161137e565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b604051630f451f7160e31b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015611d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4391906139e2565b905090565b611da560405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e08201526004549091610100830191611e76911661239a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611ea89290041661239a565b905292915050565b6000806000611ebe84612410565b9150915080610fc95760405163aeeb825d60e01b815260040160405180910390fd5b600061084d8383670de0b6b3a764000061248a565b600061084d83670de0b6b3a76400008461248a565b6008546001600160a01b03163314611f34576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611fac576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c60006120076002856124a8565b815260200190815260200160002054600c60006120256001866124a8565b8152602001908152602001600020546108e29190613b69565b60408051604d808252608082019092526060919060009082602082018180368337019050509050612070600a85613b9f565b61207b906030613a27565b60f81b8161208a600185613a3a565b8151811061209a5761209a613a63565b60200101906001600160f81b031916908160001a9053506120bc600a85613bb3565b935060015b841561213d576120d2600a86613b9f565b6120dd906030613a27565b60f81b8260016120ed8487613a3a565b6120f79190613a3a565b8151811061210757612107613a63565b60200101906001600160f81b031916908160001a905350612129600a86613bb3565b94508061213581613aec565b9150506120c1565b918290030190815292915050565b60006121606001600160a01b038416836124dd565b905080516000141580156121855750808060200190518101906121839190613bc7565b155b1561077757604051635274afe760e01b81526001600160a01b03841660048201526024016113b3565b6002600054036121d157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006121ea6040830160208401613308565b156122085760405163350b944160e11b815260040160405180910390fd5b60006122148585611ee0565b604051631920845160e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401602060405180830381865afa15801561227c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122a091906139e2565b9450846000036122b457600091505061084d565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638fcb4e5b6122f060208601866132dd565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018890526044016020604051808303816000875af115801561233d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236191906139e2565b5093949350505050565b600061237d6040830160208401613308565b1561238957508261084d565b6123938484611ee0565b905061084d565b600080670de0b6b3a76400006123ae6124eb565b6123b89190613be4565b90508083116123c85760006123d2565b6123d28184613a3a565b915061084d612409670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613be4565b8390611ef5565b600080600080600061242186612521565b915091508061243857506000958695509350505050565b8560a0015161244687612764565b8751612453908590613bfb565b61245d9190613bfb565b6124679190613b69565b9250505060008112156124805750600093849350915050565b9360019350915050565b60008260001904841183021582026124a157600080fd5b5091020490565b60006001600160f81b038211156124d25760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606061084d838360006127cb565b60006125177f000000000000000000000000000000000000000000000000000000000000000042613b9f565b611d439042613a3a565b6000806000612543846101400151856101200151611ee090919063ffffffff16565b61010085015160e086015161255791612868565b6125619190613b69565b905060006125778560000151866020015161287d565b9050600082131561267a5760008290506000806125c8886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006125b99190613a3a565b8d606001518e6080015161289a565b91509150806125e1575060009788975095505050505050565b82821061263657600061261b858a60400151868c60c00151670de0b6b3a764000061260c9190613a3a565b8d606001518e60800151612989565b905061262681613c1b565b9960019950975050505050505050565b60008860200151126126695760a08801516126519085613a3a565b61265a90613c1b565b98600198509650505050505050565b60a088015188516126519190613a3a565b600082121561275657600061268e83613c1b565b905060006126c28388604001518960c00151670de0b6b3a76400006126b39190613a3a565b8a606001518b608001516129b9565b90508181106126fe57600061265a848960400151858b60c00151670de0b6b3a76400006126ef9190613a3a565b8c606001518d60800151612a4f565b60006127308489604001518a60c00151670de0b6b3a76400006127219190613a3a565b8b606001518c60800151612b27565b905061274c886060015183856127469190613a3a565b90611ef5565b61265a9082613a27565b506000946001945092505050565b6000612793826101000151670de0b6b3a76400006127829190613a3a565b606084015160e08501519190612bb6565b6127c1836101400151670de0b6b3a76400006127af9190613a3a565b6060850151610120860151919061248a565b6108e29190613b69565b6060814710156127f05760405163cd78605960e01b81523060048201526024016113b3565b600080856001600160a01b0316848660405161280c9190613c37565b60006040518083038185875af1925050503d8060008114612849576040519150601f19603f3d011682016040523d82523d6000602084013e61284e565b606091505b509150915061285e868383612bdc565b9695505050505050565b600061084d8383670de0b6b3a7640000612bb6565b60008061288a8385613b69565b9050600081121561084d57600080fd5b60008060008812156128bc576128af88613c1b565b6128b99087613a27565b95505b60006128c88a8a61287d565b905060006128d9828a898989612c38565b905060006128fc6128f4896128ee898d612868565b90612c67565b889088612bb6565b6129069083613a3a565b9050670de0b6b3a7640000811061293a5761293361292c670de0b6b3a76400008a611ef5565b8290612c67565b9050612952565b61294f61292c670de0b6b3a76400008a612cbe565b90505b89811015612969576000809450945050505061297d565b6129738a82613a3a565b6001945094505050505b97509795505050505050565b60008061299a888888888888612cd3565b9092509050806129ae576129ae6000612d95565b509695505050505050565b6000806129c98787878787612db0565b905060006129f4670de0b6b3a76400006129e38787611ef5565b6129ed9190613a27565b8390612cbe565b9050670de0b6b3a76400008110612a2157612a1a61292c670de0b6b3a764000088612cbe565b9050612a39565b612a3661292c670de0b6b3a764000088611ef5565b90505b612a438188613a3a565b98975050505050505050565b600080612a5f8888878787612db0565b905085871015612a7357612a736000612d95565b612a81856128ee888a613a3a565b965086811015612a9557612a956000612d95565b6000612aad8486612aa68b86613a3a565b9190612bb6565b9050670de0b6b3a76400008110612ada57612ad361292c670de0b6b3a764000088612cbe565b9050612af2565b612aef61292c670de0b6b3a764000088611ef5565b90505b612afc8185612cbe565b905088811015612b1057612b106000612d95565b612b1a8982613a3a565b9998505050505050505050565b600080612b378787878787612c38565b90506000612b5b670de0b6b3a7640000612b518787612cbe565b6124099190613a27565b9050670de0b6b3a76400008110612b8857612b8161292c670de0b6b3a764000088611ef5565b9050612ba0565b612b9d61292c670de0b6b3a764000088612cbe565b90505b612baa8185611ef5565b9050612a438882613a3a565b6000826000190484118302158202612bcd57600080fd5b50910281810615159190040190565b606082612bf157612bec82612dd5565b61084d565b8151158015612c0857506001600160a01b0384163b155b15612c3157604051639996b31560e01b81526001600160a01b03851660048201526024016113b3565b508061084d565b6000612c448585612c67565b612c5d612c55866128ee868b611ee0565b85908561248a565b61285e9190613a27565b600081600003612c805750670de0b6b3a76400006108e2565b82600003612c90575060006108e2565b816000612c9c85612dfe565b9050818102612cb3670de0b6b3a764000082613c53565b905061285e81613011565b600061084d83670de0b6b3a764000084612bb6565b6000806000612ce58989888888612db0565b9050612cf5866128ee898b613a27565b975087811015612d0c576000809250925050612d8a565b6000612d1d8587612aa68c86613a3a565b9050670de0b6b3a76400008110612d4a57612d4361292c670de0b6b3a764000089612cbe565b9050612d62565b612d5f61292c670de0b6b3a764000089611ef5565b90505b612d6c8186612cbe565b9050808a1115612d8357612d80818b613a3a565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016113b39190613c81565b6000612dbc8585612c67565b612c5d612dcd866128ee868b612868565b859085612bb6565b805115612de55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000808213612e205760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361302c57506000919050565b680755bf798b4a1bf1e58212613055576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016132476040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561325e57600080fd5b5035919050565b60005b83811015613280578181015183820152602001613268565b50506000910152565b600081518084526132a1816020860160208601613265565b601f01601f19169290920160200192915050565b60208152600061084d6020830184613289565b6001600160a01b038116811461078557600080fd5b6000602082840312156132ef57600080fd5b813561084d816132c8565b801515811461078557600080fd5b60006020828403121561331a57600080fd5b813561084d816132fa565b60008060008060008060008060006101208a8c03121561334457600080fd5b8935985060208a0135975060408a013561335d816132c8565b965060608a013561336d816132c8565b955060808a013561337d816132fa565b945060a08a0135935060c08a013560ff8116811461339a57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126133cc57600080fd5b50813567ffffffffffffffff8111156133e457600080fd5b6020830191508360208260051b85010111156133ff57600080fd5b9250929050565b6000806000806000806080878903121561341f57600080fd5b863561342a816132c8565b9550602087013561343a816132c8565b9450604087013567ffffffffffffffff8082111561345757600080fd5b6134638a838b016133ba565b9096509450606089013591508082111561347c57600080fd5b5061348989828a016133ba565b979a9699509497509295939492505050565b600080600080608085870312156134b157600080fd5b8435935060208501356134c3816132c8565b925060408501356134d3816132c8565b9396929550929360600135925050565b6000806000606084860312156134f857600080fd5b83359250602084013561350a816132c8565b9150604084013561351a816132c8565b809150509250925092565b6000806040838503121561353857600080fd5b82359150602083013561354a816132c8565b809150509250929050565b60006020828403121561356757600080fd5b813567ffffffffffffffff81111561357e57600080fd5b82016060818503121561084d57600080fd5b600080600080608085870312156135a657600080fd5b8435935060208501356135b8816132c8565b92506040850135915060608501356135cf816132c8565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561368e57600080fd5b8235613699816132c8565b9150602083013561354a816132fa565b6000806000606084860312156136be57600080fd5b8335925060208401356136d0816132c8565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161370d60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613771828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b600080602083850312156137d157600080fd5b823567ffffffffffffffff8111156137e857600080fd5b6137f4858286016133ba565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156138385783518352928401929184019160010161381c565b50909695505050505050565b81516001600160801b031681526101808101602083015161387060208401826001600160801b03169052565b50604083015161388b60408401826001600160801b03169052565b5060608301516138a660608401826001600160801b03169052565b5060808301516138bb6080840182600f0b9052565b5060a08301516138d660a08401826001600160801b03169052565b5060c08301516138f160c08401826001600160801b03169052565b5060e083015161390c60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526137b6565b600080600080600060a0868803121561396d57600080fd5b85359450602086013561397f816132c8565b9350604086013561398f816132c8565b92506060860135915060808601356139a6816132c8565b809150509295509295909350565b600080604083850312156139c757600080fd5b82356139d2816132c8565b9150602083013561354a816132c8565b6000602082840312156139f457600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156108e2576108e2613a11565b818103818111156108e2576108e2613a11565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613aa5816011850160208701613265565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613adf816012850160208701613265565b9190910160120192915050565b600060018201613afe57613afe613a11565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613b30816010850160208701613265565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613aa5816011850160208701613265565b8181036000831280158383131683831282161715610fc957610fc9613a11565b634e487b7160e01b600052601260045260246000fd5b600082613bae57613bae613b89565b500690565b600082613bc257613bc2613b89565b500490565b600060208284031215613bd957600080fd5b815161084d816132fa565b80820281158282048414176108e2576108e2613a11565b80820182811260008312801582168215821617156137b6576137b6613a11565b6000600160ff1b8201613c3057613c30613a11565b5060000390565b60008251613c49818460208701613265565b9190910192915050565b600082613c6257613c62613b89565b600160ff1b821460001984141615613c7c57613c7c613a11565b500590565b6020810160048310613ca357634e487b7160e01b600052602160045260246000fd5b9190529056fea26469706673582212204b4b219af8e4cae4738e83d459bad662dc14051998daa1920bd45aee3716e43164736f6c63430008140033",
        "sourceMap": "924:2147:32:-:0;;;1171:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:120;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1214:14:30;;;924:2147:32;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1373::-;1363:6;1371;1415:9;1406:7;1402:23;1445:3;1441:2;1437:12;1434:32;;;1462:1;1459;1452:12;1434:32;1485:6;1511:2;1507;1503:11;1500:31;;;1527:1;1524;1517:12;1500:31;1553:17;;:::i;:::-;1540:30;;1593:48;1631:9;1593:48;:::i;:::-;1586:5;1579:63;1674:57;1727:2;1716:9;1712:18;1674:57;:::i;:::-;1669:2;1662:5;1658:14;1651:81;1785:2;1774:9;1770:18;1764:25;1759:2;1752:5;1748:14;1741:49;1843:2;1832:9;1828:18;1822:25;1817:2;1810:5;1806:14;1799:49;1902:3;1891:9;1887:19;1881:26;1875:3;1868:5;1864:15;1857:51;1962:3;1951:9;1947:19;1941:26;1935:3;1928:5;1924:15;1917:51;2022:3;2011:9;2007:19;2001:26;1995:3;1988:5;1984:15;1977:51;2082:3;2071:9;2067:19;2061:26;2055:3;2048:5;2044:15;2037:51;2107:3;2163:2;2152:9;2148:18;2142:25;2137:2;2130:5;2126:14;2119:49;;2187:3;2222:57;2275:2;2264:9;2260:18;2222:57;:::i;:::-;2206:14;;;2199:81;2299:3;2334:57;2372:18;;;2334:57;:::i;:::-;2318:14;;;2311:81;2411:3;2446:62;2500:7;2480:18;;;2446:62;:::i;:::-;2441:2;2434:5;2430:14;2423:86;;2528:5;2518:15;;2552:57;2605:2;2594:9;2590:18;2552:57;:::i;:::-;2542:67;;;;1242:1373;;;;;:::o;:::-;924:2147:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101e45760003560e01c806360246c881161010f578063becee9c3116100a2578063d816574311610071578063d816574314610447578063e44808bc1461045c578063e985e9c51461046f578063fba560081461048257600080fd5b8063becee9c314610404578063c55dae6314610424578063c69e16ad1461042c578063cf210e651461043457600080fd5b8063a22cb465116100de578063a22cb465146103b6578063ab033ea9146103c9578063b0d96580146103dc578063bd85b039146103f157600080fd5b806360246c88146103685780637180c8ca1461037d5780637ecebe00146103905780639cd241af146103a357600080fd5b806321ff32a9116101875780633e691db9116101565780633e691db91461030c57806346fbf68e1461031f5780634e41a1fb146103425780634ed2d6ac1461035557600080fd5b806321ff32a91461029e57806323509a2d146102bf578063313ce567146102df5780633656eec2146102f957600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f736600461324c565b6104b1565b60405161020991906132b5565b60405180910390f35b6102256102203660046132dd565b6104e8565b005b610225610235366004613308565b61077c565b610225610248366004613325565b610788565b61022561025b366004613406565b6107a4565b61022561026e36600461349b565b6107ba565b61028661028136600461324c565b6107cd565b60405190516001600160801b03168152602001610209565b6102b16102ac3660046134e3565b61080e565b604051908152602001610209565b6102c7610854565b6040516001600160a01b039091168152602001610209565b6102e7610897565b60405160ff9091168152602001610209565b6102b1610307366004613525565b6108af565b6102b161031a366004613555565b6108e8565b61033261032d3660046132dd565b6108f3565b6040519015158152602001610209565b6101fc61035036600461324c565b610929565b610225610363366004613590565b610937565b610370610985565b60405161020991906135da565b61022561038b36600461367b565b610bb2565b6102b161039e3660046132dd565b610bc0565b6102256103b13660046136a9565b610bec565b6102256103c436600461367b565b610bf8565b6102256103d73660046132dd565b610c64565b6103e4610c6d565b60405161020991906136e1565b6102b16103ff36600461324c565b610ef3565b6104176104123660046137be565b610f15565b6040516102099190613800565b6102c7610fd0565b6102b1611010565b6102b161044236600461324c565b61102a565b61044f611073565b6040516102099190613844565b61022561046a366004613955565b61117f565b61033261047d3660046139b4565b6111c7565b61048a61120b565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b60606104e36104bf8361126a565b6040516020016104cf91906132b5565b604051602081830303815290604052611398565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316036105a05760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062b91906139e2565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610675573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069991906139e2565b90506106cf6001600160a01b0384167f0000000000000000000000000000000000000000000000000000000000000000836113bc565b6040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610735573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075991906139e2565b14610777576040516313dd85ff60e31b815260040160405180910390fd5b505050565b6107858161140e565b50565b610799898989898989898989611491565b505050505050505050565b6107b28686868686866116a4565b505050505050565b6107c78484848433611758565b50505050565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261084d91016104cf565b9392505050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b90565b604080516012602082015260009161089491016104cf565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526108e291016104cf565b92915050565b60006108e282611919565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611a94565b8361094181611b86565b6001600160a01b0316336001600160a01b03161461097257604051632aab8bd360e01b815260040160405180910390fd5b61097e85858585611c43565b5050505050565b6109fe604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610a08611cb0565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610a739190613a27565b610a7d9190613a3a565b90506000808311610a8f576000610aaa565b610aaa83610aa4610a9f86611d48565b611eb0565b90611ee0565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610b7e57610b798486611ef5565b610b81565b60005b81526002546001600160801b0316602091820152604051919250610bab916104cf918491016135da565b5050505090565b610bbc8282611f0a565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b61077783838333611c43565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61078581611f82565b610c7561319c565b6108946040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf91906136e1565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff811115610f3257610f32613a4d565b604051908082528060200260200182016040528015610f5b578160200160208202803683370190505b50905060005b83811015610fb4576000858583818110610f7d57610f7d613a63565b90506020020135905060008154905080848481518110610f9f57610f9f613a63565b60209081029190910101525050600101610f61565b50610fc9816040516020016104cf9190613800565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b60006108946009546040516020016104cf91815260200190565b60006104e361106161105c7f000000000000000000000000000000000000000000000000000000000000000085613a27565b611ff6565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261089460016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461118981611b86565b6001600160a01b0316336001600160a01b0316146111ba57604051632aab8bd360e01b815260040160405180910390fd5b6107b28686868686611758565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916108e291016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610894906060016104cf565b606060f882901c6001600160f81b03831660006112868261203e565b9050600083600381111561129c5761129c6139fb565b036112ce576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611390565b60018360038111156112e2576112e26139fb565b0361130e57806040516020016112f89190613a79565b6040516020818303038152906040529350611390565b6002836003811115611322576113226139fb565b0361133857806040516020016112f89190613ab2565b600383600381111561134c5761134c6139fb565b03611390576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016113b391906132b5565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261077790849061214b565b336000908152600a602052604090205460ff1661143d576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061148690831515815260200190565b60405180910390a150565b834211156114b25760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114d95760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156115c7573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461160557604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061162b90613aec565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806116c157506001600160a01b038516155b156116df5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116ff5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561174f5761174785858381811061171f5761171f613a63565b90506020020135888886868681811061173a5761173a613a63565b9050602002013533611758565b600101611702565b50505050505050565b6001600160a01b038416158061177557506001600160a01b038316155b156117935760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611857576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611857576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611855576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061184f908490613a3a565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611889908490613a3a565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906118c0908490613a27565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006119236121ae565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001661195a60208401846132dd565b6001600160a01b03161461198157604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156119ca5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b80156119e157506008546001600160a01b03163314155b156119fe576040516282b42960e81b815260040160405180910390fd5b6000611a08611cb0565b600980546000909155909150611a1f8183866121d8565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611a7785858861236b565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611ab08261203e565b90506000836003811115611ac657611ac66139fb565b03611af8576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611390565b6001836003811115611b0c57611b0c6139fb565b03611b2257806040516020016112f89190613b05565b6002836003811115611b3657611b366139fb565b03611b4c57806040516020016112f89190613b3d565b6003836003811115611b6057611b606139fb565b03611390576040516c485950455244524956452d575360981b6020820152602d0161137e565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b604051630f451f7160e31b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015611d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4391906139e2565b905090565b611da560405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e08201526004549091610100830191611e76911661239a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611ea89290041661239a565b905292915050565b6000806000611ebe84612410565b9150915080610fc95760405163aeeb825d60e01b815260040160405180910390fd5b600061084d8383670de0b6b3a764000061248a565b600061084d83670de0b6b3a76400008461248a565b6008546001600160a01b03163314611f34576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611fac576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c60006120076002856124a8565b815260200190815260200160002054600c60006120256001866124a8565b8152602001908152602001600020546108e29190613b69565b60408051604d808252608082019092526060919060009082602082018180368337019050509050612070600a85613b9f565b61207b906030613a27565b60f81b8161208a600185613a3a565b8151811061209a5761209a613a63565b60200101906001600160f81b031916908160001a9053506120bc600a85613bb3565b935060015b841561213d576120d2600a86613b9f565b6120dd906030613a27565b60f81b8260016120ed8487613a3a565b6120f79190613a3a565b8151811061210757612107613a63565b60200101906001600160f81b031916908160001a905350612129600a86613bb3565b94508061213581613aec565b9150506120c1565b918290030190815292915050565b60006121606001600160a01b038416836124dd565b905080516000141580156121855750808060200190518101906121839190613bc7565b155b1561077757604051635274afe760e01b81526001600160a01b03841660048201526024016113b3565b6002600054036121d157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006121ea6040830160208401613308565b156122085760405163350b944160e11b815260040160405180910390fd5b60006122148585611ee0565b604051631920845160e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401602060405180830381865afa15801561227c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122a091906139e2565b9450846000036122b457600091505061084d565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638fcb4e5b6122f060208601866132dd565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018890526044016020604051808303816000875af115801561233d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236191906139e2565b5093949350505050565b600061237d6040830160208401613308565b1561238957508261084d565b6123938484611ee0565b905061084d565b600080670de0b6b3a76400006123ae6124eb565b6123b89190613be4565b90508083116123c85760006123d2565b6123d28184613a3a565b915061084d612409670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613be4565b8390611ef5565b600080600080600061242186612521565b915091508061243857506000958695509350505050565b8560a0015161244687612764565b8751612453908590613bfb565b61245d9190613bfb565b6124679190613b69565b9250505060008112156124805750600093849350915050565b9360019350915050565b60008260001904841183021582026124a157600080fd5b5091020490565b60006001600160f81b038211156124d25760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606061084d838360006127cb565b60006125177f000000000000000000000000000000000000000000000000000000000000000042613b9f565b611d439042613a3a565b6000806000612543846101400151856101200151611ee090919063ffffffff16565b61010085015160e086015161255791612868565b6125619190613b69565b905060006125778560000151866020015161287d565b9050600082131561267a5760008290506000806125c8886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006125b99190613a3a565b8d606001518e6080015161289a565b91509150806125e1575060009788975095505050505050565b82821061263657600061261b858a60400151868c60c00151670de0b6b3a764000061260c9190613a3a565b8d606001518e60800151612989565b905061262681613c1b565b9960019950975050505050505050565b60008860200151126126695760a08801516126519085613a3a565b61265a90613c1b565b98600198509650505050505050565b60a088015188516126519190613a3a565b600082121561275657600061268e83613c1b565b905060006126c28388604001518960c00151670de0b6b3a76400006126b39190613a3a565b8a606001518b608001516129b9565b90508181106126fe57600061265a848960400151858b60c00151670de0b6b3a76400006126ef9190613a3a565b8c606001518d60800151612a4f565b60006127308489604001518a60c00151670de0b6b3a76400006127219190613a3a565b8b606001518c60800151612b27565b905061274c886060015183856127469190613a3a565b90611ef5565b61265a9082613a27565b506000946001945092505050565b6000612793826101000151670de0b6b3a76400006127829190613a3a565b606084015160e08501519190612bb6565b6127c1836101400151670de0b6b3a76400006127af9190613a3a565b6060850151610120860151919061248a565b6108e29190613b69565b6060814710156127f05760405163cd78605960e01b81523060048201526024016113b3565b600080856001600160a01b0316848660405161280c9190613c37565b60006040518083038185875af1925050503d8060008114612849576040519150601f19603f3d011682016040523d82523d6000602084013e61284e565b606091505b509150915061285e868383612bdc565b9695505050505050565b600061084d8383670de0b6b3a7640000612bb6565b60008061288a8385613b69565b9050600081121561084d57600080fd5b60008060008812156128bc576128af88613c1b565b6128b99087613a27565b95505b60006128c88a8a61287d565b905060006128d9828a898989612c38565b905060006128fc6128f4896128ee898d612868565b90612c67565b889088612bb6565b6129069083613a3a565b9050670de0b6b3a7640000811061293a5761293361292c670de0b6b3a76400008a611ef5565b8290612c67565b9050612952565b61294f61292c670de0b6b3a76400008a612cbe565b90505b89811015612969576000809450945050505061297d565b6129738a82613a3a565b6001945094505050505b97509795505050505050565b60008061299a888888888888612cd3565b9092509050806129ae576129ae6000612d95565b509695505050505050565b6000806129c98787878787612db0565b905060006129f4670de0b6b3a76400006129e38787611ef5565b6129ed9190613a27565b8390612cbe565b9050670de0b6b3a76400008110612a2157612a1a61292c670de0b6b3a764000088612cbe565b9050612a39565b612a3661292c670de0b6b3a764000088611ef5565b90505b612a438188613a3a565b98975050505050505050565b600080612a5f8888878787612db0565b905085871015612a7357612a736000612d95565b612a81856128ee888a613a3a565b965086811015612a9557612a956000612d95565b6000612aad8486612aa68b86613a3a565b9190612bb6565b9050670de0b6b3a76400008110612ada57612ad361292c670de0b6b3a764000088612cbe565b9050612af2565b612aef61292c670de0b6b3a764000088611ef5565b90505b612afc8185612cbe565b905088811015612b1057612b106000612d95565b612b1a8982613a3a565b9998505050505050505050565b600080612b378787878787612c38565b90506000612b5b670de0b6b3a7640000612b518787612cbe565b6124099190613a27565b9050670de0b6b3a76400008110612b8857612b8161292c670de0b6b3a764000088611ef5565b9050612ba0565b612b9d61292c670de0b6b3a764000088612cbe565b90505b612baa8185611ef5565b9050612a438882613a3a565b6000826000190484118302158202612bcd57600080fd5b50910281810615159190040190565b606082612bf157612bec82612dd5565b61084d565b8151158015612c0857506001600160a01b0384163b155b15612c3157604051639996b31560e01b81526001600160a01b03851660048201526024016113b3565b508061084d565b6000612c448585612c67565b612c5d612c55866128ee868b611ee0565b85908561248a565b61285e9190613a27565b600081600003612c805750670de0b6b3a76400006108e2565b82600003612c90575060006108e2565b816000612c9c85612dfe565b9050818102612cb3670de0b6b3a764000082613c53565b905061285e81613011565b600061084d83670de0b6b3a764000084612bb6565b6000806000612ce58989888888612db0565b9050612cf5866128ee898b613a27565b975087811015612d0c576000809250925050612d8a565b6000612d1d8587612aa68c86613a3a565b9050670de0b6b3a76400008110612d4a57612d4361292c670de0b6b3a764000089612cbe565b9050612d62565b612d5f61292c670de0b6b3a764000089611ef5565b90505b612d6c8186612cbe565b9050808a1115612d8357612d80818b613a3a565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016113b39190613c81565b6000612dbc8585612c67565b612c5d612dcd866128ee868b612868565b859085612bb6565b805115612de55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000808213612e205760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361302c57506000919050565b680755bf798b4a1bf1e58212613055576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016132476040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561325e57600080fd5b5035919050565b60005b83811015613280578181015183820152602001613268565b50506000910152565b600081518084526132a1816020860160208601613265565b601f01601f19169290920160200192915050565b60208152600061084d6020830184613289565b6001600160a01b038116811461078557600080fd5b6000602082840312156132ef57600080fd5b813561084d816132c8565b801515811461078557600080fd5b60006020828403121561331a57600080fd5b813561084d816132fa565b60008060008060008060008060006101208a8c03121561334457600080fd5b8935985060208a0135975060408a013561335d816132c8565b965060608a013561336d816132c8565b955060808a013561337d816132fa565b945060a08a0135935060c08a013560ff8116811461339a57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126133cc57600080fd5b50813567ffffffffffffffff8111156133e457600080fd5b6020830191508360208260051b85010111156133ff57600080fd5b9250929050565b6000806000806000806080878903121561341f57600080fd5b863561342a816132c8565b9550602087013561343a816132c8565b9450604087013567ffffffffffffffff8082111561345757600080fd5b6134638a838b016133ba565b9096509450606089013591508082111561347c57600080fd5b5061348989828a016133ba565b979a9699509497509295939492505050565b600080600080608085870312156134b157600080fd5b8435935060208501356134c3816132c8565b925060408501356134d3816132c8565b9396929550929360600135925050565b6000806000606084860312156134f857600080fd5b83359250602084013561350a816132c8565b9150604084013561351a816132c8565b809150509250925092565b6000806040838503121561353857600080fd5b82359150602083013561354a816132c8565b809150509250929050565b60006020828403121561356757600080fd5b813567ffffffffffffffff81111561357e57600080fd5b82016060818503121561084d57600080fd5b600080600080608085870312156135a657600080fd5b8435935060208501356135b8816132c8565b92506040850135915060608501356135cf816132c8565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561368e57600080fd5b8235613699816132c8565b9150602083013561354a816132fa565b6000806000606084860312156136be57600080fd5b8335925060208401356136d0816132c8565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161370d60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613771828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b600080602083850312156137d157600080fd5b823567ffffffffffffffff8111156137e857600080fd5b6137f4858286016133ba565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156138385783518352928401929184019160010161381c565b50909695505050505050565b81516001600160801b031681526101808101602083015161387060208401826001600160801b03169052565b50604083015161388b60408401826001600160801b03169052565b5060608301516138a660608401826001600160801b03169052565b5060808301516138bb6080840182600f0b9052565b5060a08301516138d660a08401826001600160801b03169052565b5060c08301516138f160c08401826001600160801b03169052565b5060e083015161390c60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526137b6565b600080600080600060a0868803121561396d57600080fd5b85359450602086013561397f816132c8565b9350604086013561398f816132c8565b92506060860135915060808601356139a6816132c8565b809150509295509295909350565b600080604083850312156139c757600080fd5b82356139d2816132c8565b9150602083013561354a816132c8565b6000602082840312156139f457600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156108e2576108e2613a11565b818103818111156108e2576108e2613a11565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613aa5816011850160208701613265565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613adf816012850160208701613265565b9190910160120192915050565b600060018201613afe57613afe613a11565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613b30816010850160208701613265565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613aa5816011850160208701613265565b8181036000831280158383131683831282161715610fc957610fc9613a11565b634e487b7160e01b600052601260045260246000fd5b600082613bae57613bae613b89565b500690565b600082613bc257613bc2613b89565b500490565b600060208284031215613bd957600080fd5b815161084d816132fa565b80820281158282048414176108e2576108e2613a11565b80820182811260008312801582168215821617156137b6576137b6613a11565b6000600160ff1b8201613c3057613c30613a11565b5060000390565b60008251613c49818460208701613265565b9190910192915050565b600082613c6257613c62613b89565b600160ff1b821460001984141615613c7c57613c7c613a11565b500590565b6020810160048310613ca357634e487b7160e01b600052602160045260246000fd5b9190529056fea26469706673582212204b4b219af8e4cae4738e83d459bad662dc14051998daa1920bd45aee3716e43164736f6c63430008140033",
        "sourceMap": "924:2147:32:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16011:137:16;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1731:933:32;;;;;;:::i;:::-;;:::i;:::-;;2164:70:16;;;;;;:::i;:::-;;:::i;7637:482::-;;;;;;:::i;:::-;;:::i;6092:209::-;;;;;;:::i;:::-;;:::i;3025:240::-;;;;;;:::i;:::-;;:::i;8713:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5135:13:182;;-1:-1:-1;;;;;5131:54:182;5113:73;;5101:2;5086:18;8713:183:16;4911:281:182;15372:223:16;;;;;;:::i;:::-;;:::i;:::-;;;5820:25:182;;;5808:2;5793:18;15372:223:16;5674:177:182;2774:89:32;;;:::i;:::-;;;-1:-1:-1;;;;;6150:32:182;;;6132:51;;6120:2;6105:18;2774:89:32;5972:217:182;2963:106:32;;;:::i;:::-;;;6366:4:182;6354:17;;;6336:36;;6324:2;6309:18;2963:106:32;6194:184:182;14332:173:16;;;;;;:::i;:::-;;:::i;1838:174::-;;;;;;:::i;:::-;;:::i;8281:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7623:14:182;;7616:22;7598:41;;7586:2;7571:18;8281:121:16;7458:187:182;16271:141:16;;;;;;:::i;:::-;;:::i;4462:225::-;;;;;;:::i;:::-;;:::i;10723:1619::-;;;:::i;:::-;;;;;;;:::i;2597:94::-;;;;;;:::i;:::-;;:::i;16561:119::-;;;;;;:::i;:::-;;:::i;5626:179::-;;;;;;:::i;:::-;;:::i;4919:277::-;;;;;;:::i;:::-;;:::i;2344:83::-;;;;;;:::i;:::-;;:::i;9479:1075::-;;;:::i;:::-;;;;;;;:::i;14640:129::-;;;;;;:::i;:::-;;:::i;13597:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;8477:101::-;;;:::i;12986:132::-;;;:::i;9061:213::-;;;;;;:::i;:::-;;:::i;13197:159::-;;;:::i;:::-;;;;;;;:::i;3670:285::-;;;;;;:::i;:::-;;:::i;14958:186::-;;;;;;:::i;:::-;;:::i;12466:367::-;;;:::i;:::-;;;;16537:13:182;;-1:-1:-1;;;;;16533:22:182;;;16515:41;;16616:4;16604:17;;;16598:24;16594:33;16572:20;;;16565:63;;;;16435:18;12466:367:16;16256:378:182;16011:137:16;16065:13;16090:51;16109:30;16131:7;16109:21;:30::i;:::-;16098:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;16090:7;:51::i;:::-;16011:137;;;:::o;1731:933:32:-;1853:10;-1:-1:-1;;;;;1867:13:32;1853:27;;;;;:52;;-1:-1:-1;1894:10:32;1885:20;;;;:8;:20;;;;;;;;1884:21;1853:52;1849:116;;;1928:26;;-1:-1:-1;;;1928:26:32;;;;;;;;;;;1849:116;2065:5;-1:-1:-1;;;;;2037:34:32;2045:7;-1:-1:-1;;;;;2037:34:32;;2033:102;;2094:30;;-1:-1:-1;;;2094:30:32;;;;;;;;;;;2033:102;2239:30;;-1:-1:-1;;;2239:30:32;;2263:4;2239:30;;;6132:51:182;2216:20:32;;2239:5;-1:-1:-1;;;;;2239:15:32;;;;6105:18:182;;2239:30:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2379:32;;-1:-1:-1;;;2379:32:32;;2405:4;2379:32;;;6132:51:182;2216:53:32;;-1:-1:-1;2361:15:32;;-1:-1:-1;;;;;2379:17:32;;;;;6105:18:182;;2379:32:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2361:50;-1:-1:-1;2421:60:32;-1:-1:-1;;;;;2421:36:32;;2458:13;2361:50;2421:36;:60::i;:::-;2553:30;;-1:-1:-1;;;2553:30:32;;2577:4;2553:30;;;6132:51:182;2587:12:32;;2553:5;-1:-1:-1;;;;;2553:15:32;;;;6105:18:182;;2553:30:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:46;2549:109;;2622:25;;-1:-1:-1;;;2622:25:32;;;;;;;;;;;2549:109;1771:893;;1731:933;:::o;2164:70:16:-;2212:15;2219:7;2212:6;:15::i;:::-;2164:70;:::o;7637:482::-;7902:210;7929:15;7958:14;7986:5;8005:7;8026:9;8049:8;8071:1;8086;8101;7902:13;:210::i;:::-;7637:482;;;;;;;;;:::o;6092:209::-;6253:41;6272:4;6278:2;6282:3;;6287:6;;6253:18;:41::i;:::-;6092:209;;;;;;:::o;3025:240::-;3206:52;3220:7;3229:4;3235:2;3239:6;3247:10;3206:13;:52::i;:::-;3025:240;;;;:::o;8713:183::-;-1:-1:-1;;;;;;;;;;;;8839:50:16;8858:12;:29;8871:15;8858:29;;;;;;;;;;;8847:41;;;;;;17049:13:182;-1:-1:-1;;;;;17045:54:182;17027:73;;17015:2;17000:18;;16828:278;15372:223:16;15503:7;15541:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;15541:36:16;;;;;;;;;;;:45;;;;;;;;;;;15530:57;;;;;5820:25:182;15522:66:16;;5793:18:182;15530:57:16;5674:177:182;15522:66:16;15372:223;;;;;:::o;2774:89:32:-;2838:17;;;-1:-1:-1;;;;;2849:5:32;6150:32:182;2838:17:32;;;6132:51:182;2813:5:32;;2830:26;;6105:18:182;2838:17:32;5972:217:182;2830:26:32;2774:89;:::o;2963:106::-;3040:21;;;3057:2;3040:21;;;6336:36:182;3015:5:32;;3032:30;;6309:18:182;3040:21:32;6194:184:182;14332:173:16;14430:7;14468:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;14468:28:16;;;;;;;;;;14457:40;;;;;5820:25:182;14449:49:16;;5793:18:182;14457:40:16;5674:177:182;14449:49:16;14332:173;;;;:::o;1838:174::-;1939:16;1974:31;1996:8;1974:21;:31::i;8281:121::-;-1:-1:-1;;;;;8375:18:16;;8340:4;8375:18;;;:8;:18;;;;;;;;;8364:30;;8356:39;;8364:30;;8375:18;;;8364:30;7623:14:182;;7616:22;7598:41;;7586:2;7571:18;;7458:187;16271:141:16;16327:13;16352:53;16371:32;16395:7;16371:23;:32::i;4462:225::-;4614:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;4633:47:16::1;4646:7;4655:8;4665:6;4673;4633:12;:47::i;:::-;4462:225:::0;;;;;:::o;10723:1619::-;10769:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10769:27:16;10808:23;10834:21;:19;:21::i;:::-;11001:13;:29;10938:12;:48;;;;10865:21;10889:34;;;;;10808:47;;-1:-1:-1;10865:21:16;-1:-1:-1;;;;;11001:29:16;;;;10889:97;;10938:48;10889:97;:::i;:::-;:141;;;;:::i;:::-;10865:165;;11040:20;11081:1;11063:15;:19;:178;;11240:1;11063:178;;;11097:128;11209:15;11097:86;11143:39;11166:15;11143:22;:39::i;:::-;11097:45;:86::i;:::-;:111;;:128::i;:::-;11290:1006;;;;;;;;11340:12;:26;-1:-1:-1;;;;;11340:26:16;;;11290:1006;;11397:28;;;;;;11290:1006;;;;11459:31;;-1:-1:-1;;;;;11459:31:16;;;;11290:1006;;;;;;;-1:-1:-1;;;11525:32:16;;;;;;11290:1006;;;;11585:25;;;;;;11290:1006;;;;;;;;;;;;;;;;11397:28;11688:29;;;;;;11290:1006;;;;11459:31;11756:36;;;;11340:26;11290:1006;;;11825:30;;;;;;11290:1006;;;;11895:37;;;;;;11290:1006;;;;12141:13;:29;;;;11290:1006;;;;12210:22;;;;;;;11290:1006;;;;11040:201;;-1:-1:-1;11251:36:16;;11290:1006;;;12002:18;;:92;;12059:35;:12;12080:13;12059:20;:35::i;:::-;12002:92;;;12039:1;12002:92;11290:1006;;12260:25;;-1:-1:-1;;;;;12260:25:16;11290:1006;;;;;12314:20;;11251:1045;;-1:-1:-1;12306:29:16;;12314:20;;11251:1045;;12314:20;;:::i;12306:29::-;10798:1544;;;;10723:1619;:::o;2597:94::-;2661:23;2672:3;2677:6;2661:10;:23::i;:::-;2597:94;;:::o;16561:119::-;-1:-1:-1;;;;;16655:16:16;;16617:7;16655:16;;;:7;:16;;;;;;;;;16644:28;;;;;5820:25:182;16636:37:16;;5793:18:182;16644:28:16;5674:177:182;5626:179:16;5747:51;5760:7;5769:8;5779:6;5787:10;5747:12;:51::i;4919:277::-;5053:10;5035:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;5035:39:16;;;;;;;;;;;;:50;;-1:-1:-1;;5035:50:16;;;;;;;;;;5143:46;;7598:41:182;;;5035:39:16;;5053:10;5143:46;;7571:18:182;5143:46:16;;;;;;;4919:277;;:::o;2344:83::-;2400:20;2415:4;2400:14;:20::i;9479:1075::-;9551:29;;:::i;:::-;9596:951;9645:878;;;;;;;;9701:10;-1:-1:-1;;;;;9645:878:16;;;;;9748:14;-1:-1:-1;;;;;9645:878:16;;;;;9800:15;9645:878;;;;9861:23;9645:878;;;;9928:21;9645:878;;;;9997:25;9645:878;;;;10062:17;9645:878;;;;10121:19;9645:878;;;;10175:12;9645:878;;;;10221:11;;;;;;;;;-1:-1:-1;;;;;10221:11:16;-1:-1:-1;;;;;9645:878:16;;;;;10268:13;-1:-1:-1;;;;;9645:878:16;;;;;10309:195;;;;;;;;10351:9;10309:195;;;;10386:8;10309:195;;;;10420:16;10309:195;;;;10462:20;10309:195;;;9645:878;;;9617:920;;;;;;;;:::i;14640:129::-;14701:7;14739:21;;;:12;:21;;;;;;;;;14728:33;;;;;5820:25:182;14720:42:16;;5793:18:182;14728:33:16;5674:177:182;13597:565:16;13675:16;13703:23;13743:6;13729:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13729:28:16;;13703:54;;13829:9;13824:294;13844:17;;;13824:294;;;13879:12;13894:6;;13901:1;13894:9;;;;;;;:::i;:::-;;;;;;;13879:24;;13917:12;14000:4;13994:11;13986:19;;14044:4;14032:6;14039:1;14032:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;14090:3:16;;13824:294;;;;14128:27;14147:6;14136:18;;;;;;;;:::i;14128:27::-;13693:469;13597:565;;;;:::o;8477:101::-;8548:22;;;-1:-1:-1;;;;;8559:10:16;6150:32:182;8548:22:16;;;6132:51:182;8521:7:16;;8540:31;;6105:18:182;8548:22:16;5972:217:182;12986:132:16;13049:7;13068:43;13087:22;;13076:34;;;;;;5820:25:182;;5808:2;5793:18;;5674:177;9061:213:16;9154:6;9172:95;9204:52;9220:35;9238:17;9220:15;:35;:::i;:::-;9204:15;:52::i;:::-;9193:64;;;;;;5820:25:182;;5808:2;5793:18;;5674:177;13197:159:16;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13316:33:16;13335:12;13324:24;;;;;;;18344:13:182;;-1:-1:-1;;;;;18438:18:182;;;4841:59;;18487:3;18518:18;;;18553:4;18538:20;;4841:59;18605:4;18593:17;;18587:24;18639:20;;;18676:4;18661:20;;4841:59;18710:20;;18747:4;18732:20;;4841:59;18799:4;18787:17;;18781:24;18843:2;18832:27;;;18861:18;;;13331:34;18908:20;;18945:4;18930:20;;4841:59;18997:4;18985:17;;18979:24;19031:20;;;19068:4;19053:20;;4841:59;19102:20;;19139:4;19124:20;;4841:59;19191:4;19179:17;;;19173:24;19239:4;19222:22;;;7432:13;7425:21;19261:6;19246:22;;7413:34;19302:1;19298:19;;;19294:30;7432:13;7425:21;19341:6;19326:22;;7413:34;-1:-1:-1;;;;;19385:2:182;19381:20;;;19377:57;19451:6;19436:22;;13430:55;19487:20;;;19524:6;19509:22;;4841:59;18314:3;18299:19;;18125:1413;3670:285:16;3839:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;3900:48:16::1;3914:7;3923:4;3929:2;3933:6;3941;3900:13;:48::i;14958:186::-:0;-1:-1:-1;;;;;15099:26:16;;;15064:4;15099:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;15088:48;;15099:36;;;;7623:14:182;7616:22;15088:48:16;;;7598:41:182;;;;15064:4:16;;15080:57;;7571:18:182;15088:48:16;7458:187:182;12466:367:16;-1:-1:-1;;;;;;;;;;;;;;;;;12636:166:16;;;;;;;;12700:13;:29;-1:-1:-1;;;;;12700:29:16;;;12636:166;;;-1:-1:-1;;;12761:22:16;;;;;12636:166;;;;;;;12608:208;;;;;16515:41:182;;;;16598:24;;16594:33;16572:20;;;16565:63;;;;12587:239:16;;16435:18:182;;12608:208:16;16256:378:182;2533:719:71;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:71;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:71;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;20666:29:182;3187:47:71;;;20654:42:182;20712:12;;3187:47:71;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;16889:106:16:-;16981:6;16958:30;;-1:-1:-1;;;16958:30:16;;;;;;;;:::i;:::-;;;;;;;;1303:160:117;1412:43;;;-1:-1:-1;;;;;21150:32:182;;1412:43:117;;;21132:51:182;21199:18;;;;21192:34;;;1412:43:117;;;;;;;;;;21105:18:182;;;;1412:43:117;;;;;;;;-1:-1:-1;;;;;1412:43:117;-1:-1:-1;;;1412:43:117;;;1385:71;;1405:5;;1385:19;:71::i;2185:350:63:-;2319:10;2310:20;;;;:8;:20;;;;;;;;2305:85;;2353:26;;-1:-1:-1;;;2353:26:63;;;;;;;;;;;2305:85;2455:21;:31;;;;;;;-1:-1:-1;;2455:31:63;;;;;;2501:27;;;;;;2479:7;7623:14:182;7616:22;7598:41;;7586:2;7571:18;;7458:187;2501:27:63;;;;;;;;2185:350;:::o;8383:1509:68:-;8725:8;8707:15;:26;8703:93;;;8756:29;;-1:-1:-1;;;8756:29:68;;;;;;;;;;;8703:93;-1:-1:-1;;;;;8857:19:68;;8853:92;;8899:35;;-1:-1:-1;;;8899:35:68;;;;;;;;;;;8853:92;-1:-1:-1;;;;;9372:14:68;;;9027:18;9372:14;;;:7;:14;;;;;;;;;9197:245;;;;;21518:25:182;;;21597:18;;;21590:43;;;;21669:15;;;21649:18;;;21642:43;21728:14;;21721:22;21701:18;;;21694:50;21760:19;;;21753:35;;;;21804:19;;;;21797:35;;;9197:245:68;;;;;;;;;;21490:19:182;;;9197:245:68;;;9166:294;;;;;;;;-1:-1:-1;;;9071:403:68;;;22101:27:182;22144:11;;;22137:27;;;22180:12;;;22173:28;22217:12;;9071:403:68;;;-1:-1:-1;;9071:403:68;;;;;;;;;9048:436;;9071:403;9048:436;;;;9494:14;9511:30;;;;;;;;;22467:25:182;;;22540:4;22528:17;;22508:18;;;22501:45;;;;22562:18;;;22555:34;;;22605:18;;;22598:34;;;9048:436:68;;-1:-1:-1;9494:14:68;9511:30;;22439:19:182;;9511:30:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9494:47;;9565:5;-1:-1:-1;;;;;9555:15:68;:6;-1:-1:-1;;;;;9555:15:68;;9551:83;;9593:30;;-1:-1:-1;;;9593:30:68;;;;;;;;;;;9551:83;-1:-1:-1;;;;;9688:14:68;;;;;;:7;:14;;;;;9686:16;;9688:14;;;9686:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;9739:24:68;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9739:45:68;;;;;;;;;;9844:41;;7598::182;;;9844::68;;7571:18:182;9844:41:68;;;;;;;8639:1253;;8383:1509;;;;;;;;;:::o;2247:716::-;-1:-1:-1;;;;;2459:18:68;;;;:38;;-1:-1:-1;;;;;;2481:16:68;;;2459:38;2455:111;;;2520:35;;-1:-1:-1;;;2520:35:68;;;;;;;;;;;2455:111;2622:27;;;2618:103;;2672:38;;-1:-1:-1;;;2672:38:68;;;;;;;;;;;2618:103;2786:9;2781:176;2801:14;;;2781:176;;;2833:54;2847:3;;2851:1;2847:6;;;;;;;:::i;:::-;;;;;;;2855:4;2861:2;2865:6;;2872:1;2865:9;;;;;;;:::i;:::-;;;;;;;2876:10;2833:13;:54::i;:::-;2929:3;;2781:176;;;;2247:716;;;;;;:::o;3314:1579::-;-1:-1:-1;;;;;3527:18:68;;;;:38;;-1:-1:-1;;;;;;3549:16:68;;;3527:38;3523:98;;;3586:35;;-1:-1:-1;;;3586:35:68;;;;;;;;;;;3523:98;3726:4;-1:-1:-1;;;;;3716:14:68;:6;-1:-1:-1;;;;;3716:14:68;;3712:888;;-1:-1:-1;;;;;3867:23:68;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3862:728;;3977:16;3996:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;3996:33:68;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4112:29:68;;4108:468;;4506:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4506:33:68;;;;;;;;;;;:41;;;;;;;;;;:51;;4551:6;;4506:27;:51;;4551:6;;4506:51;:::i;:::-;;;;-1:-1:-1;;4108:468:68;3900:690;3862:728;4744:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4744:25:68;;;;;;;;;:35;;4773:6;;4744:19;:35;;4773:6;;4744:35;:::i;:::-;;;;-1:-1:-1;;4789:19:68;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4789:23:68;;;;;;;;;:33;;4816:6;;4789:19;:33;;4816:6;;4789:33;:::i;:::-;;;;-1:-1:-1;;4837:49:68;;;22957:25:182;;;23013:2;22998:18;;22991:34;;;-1:-1:-1;;;;;4837:49:68;;;;;;;;;;;;;;22930:18:182;4837:49:68;;;;;;;3314:1579;;;;;:::o;985:1051:63:-;1100:16;2356:21:120;:19;:21::i;:::-;-1:-1:-1;;;;;1224:13:63::1;1200:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1200:37:63::1;;1196:110;;1260:35;;-1:-1:-1::0;;;1260:35:63::1;;;;;;;;;;;1196:110;1408:10;1399:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1398:21;:64:::0;::::1;;;-1:-1:-1::0;1435:10:63::1;-1:-1:-1::0;;;;;1449:13:63::1;1435:27;;;1398:64;:105;;;;-1:-1:-1::0;1492:11:63::1;::::0;-1:-1:-1;;;;;1492:11:63::1;1478:10;:25;;1398:105;1381:191;;;1535:26;;-1:-1:-1::0;;;1535:26:63::1;;;;;;;;;;;1381:191;1652:23;1678:21;:19;:21::i;:::-;1741:22;::::0;;1709:29:::1;1773::::0;;;1652:47;;-1:-1:-1;1823:59:63::1;1741:22:::0;1652:47;1873:8;1823:9:::1;:59::i;:::-;1812:70;;1931:13;-1:-1:-1::0;;;;;1897:132:63::1;;1958:61;1983:8;1993:15;2010:8;1958:24;:61::i;:::-;1897:132;::::0;5820:25:182;;;5808:2;5793:18;1897:132:63::1;;;;;;;1118:918;;2398:20:120::0;1713:1;2924:7;:21;2744:208;3384:705:71;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:71;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:71;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:71;;;24145:28:182;24189:12;;4038:33:71;23943:264:182;10142:590:68;10338:34;;;10357:4;10338:34;;;;21132:51:182;;;;21199:18;;;21192:34;;;;10338::68;;;;;;;;;21105:18:182;;;;10338:34:68;;10328:45;;;;;;;;;-1:-1:-1;;;;;;10512:147:68;;;24423:39:182;10576:14:68;24495:15:182;;;-1:-1:-1;;24491:53:182;24478:11;;;24471:74;24561:12;;;24554:28;10630:15:68;24598:12:182;;;;24591:28;;;;10512:147:68;;;;;;;;;;24635:12:182;;;;10512:147:68;;;10489:180;;;;;;10142:590::o;5350:301::-;5496:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5496:35:68;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5610:34;;5820:25:182;;;5496:35:68;;5610:34;;5793:18:182;5610:34:68;;;;;;;5350:301;;;;:::o;5606:169:30:-;5737:31;;-1:-1:-1;;;5737:31:30;;150:4:73;5737:31:30;;;5820:25:182;5701:13:30;;5737:5;-1:-1:-1;;;;;5737:26:30;;;;5793:18:182;;5737:31:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5730:38;;5606:169;:::o;9144:970:64:-;9239:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9239:39:64;9299:808;;;;;;;;9354:12;:26;-1:-1:-1;;;;;9354:26:64;;;9299:808;;9411:28;;;;9299:808;;;;-1:-1:-1;;;9467:25:64;;;;;;9299:808;;;;;;;;;;;;;9577:23;9299:808;;;;9636:21;9299:808;;;;9684:12;9299:808;;;;9411:28;9728:29;;;;9299:808;;;;9844:36;;9299:808;;9354:26;9299:808;;;9797:97;;9844:36;9797:29;:97::i;:::-;9299:808;;9927:30;;-1:-1:-1;;;;;;;;9927:30:64;;;;;;9299:808;;;;10045:37;;9299:808;;;;;9998:98;;10045:37;;;9998:29;:98::i;:::-;9299:808;;9290:817;9144:970;-1:-1:-1;;9144:970:64:o;6170:342:75:-;6273:7;6293:20;6315:12;6331:56;6370:7;6331:25;:56::i;:::-;6292:95;;;;6402:7;6397:80;;6432:34;;-1:-1:-1;;;6432:34:75;;;;;;;;;;;1535:119:73;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;3148:330:63:-;3280:11;;-1:-1:-1;;;;;3280:11:63;3266:10;:25;3262:89;;3314:26;;-1:-1:-1;;;3314:26:63;;;;;;;;;;;3262:89;-1:-1:-1;;;;;3416:13:63;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;3416:22:63;;;;;;;3453:18;;;3416:13;3453:18;3148:330;;:::o;2653:328::-;2777:11;;-1:-1:-1;;;;;2777:11:63;2763:10;:25;2759:89;;2811:26;;-1:-1:-1;;;2811:26:63;;;;;;;;;;;2759:89;2918:11;:18;;-1:-1:-1;;;;;;2918:18:63;-1:-1:-1;;;;;2918:18:63;;;;;;;;2951:23;;;;-1:-1:-1;;2951:23:63;2653:328;:::o;6343:827:64:-;6428:6;6962:12;:187;6996:135;7043:27;7096:13;6996:21;:135::i;:::-;6962:187;;;;;;;;;;;;6723:12;:186;6757:134;6804:26;6856:13;6757:21;:134::i;:::-;6723:186;;;;;;;;;;;;6699:464;;;;:::i;4247:1154:71:-;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:71;-1:-1:-1;4841:9:71;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:71;;;;;;;;-1:-1:-1;4878:10:71;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:71;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:71;;;;;;;;-1:-1:-1;5084:10:71;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:71;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:71:o;4059:629:117:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:117;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:117;;-1:-1:-1;;;;;6150:32:182;;4631:40:117;;;6132:51:182;6105:18;;4631:40:117;5972:217:182;2431:307:120;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:120;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;4359:1080:30:-;4512:7;4677:15;;;;;;;;:::i;:::-;4673:83;;;4715:30;;-1:-1:-1;;;4715:30:30;;;;;;;;;;;4673:83;5047:18;5068:28;:7;5084:11;5068:15;:28::i;:::-;5116:38;;-1:-1:-1;;;5116:38:30;;;;;5820:25:182;;;5047:49:30;;-1:-1:-1;5116:5:30;-1:-1:-1;;;;;5116:26:30;;;;5793:18:182;;5116:38:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5106:48;;5242:7;5253:1;5242:12;5238:51;;5277:1;5270:8;;;;;5238:51;-1:-1:-1;;;;;5356:5:30;:20;;5377;;;;:8;:20;:::i;:::-;5356:51;;-1:-1:-1;;;;;;5356:51:30;;;;;;;-1:-1:-1;;;;;21150:32:182;;;5356:51:30;;;21132::182;21199:18;;;21192:34;;;21105:18;;5356:51:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5425:7:30;;4359:1080;-1:-1:-1;;;;4359:1080:30:o;25501:391:64:-;25670:7;25693:15;;;;;;;;:::i;:::-;25689:197;;;-1:-1:-1;25731:7:64;25724:14;;25689:197;25842:33;:7;25858:16;25842:15;:33::i;:::-;25835:40;;;;4785:450;4884:21;4917:24;150:4:73;4944:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;4917:52;;5011:16;4995:13;:32;:95;;5089:1;4995:95;;;5042:32;5058:16;5042:13;:32;:::i;:::-;4979:111;-1:-1:-1;5182:46:64;5204:23;150:4:73;5204:17:64;:23;:::i;:::-;5182:13;;:21;:46::i;6998:1166:75:-;7105:7;7114:4;7491:19;7535:20;7557:12;7573:65;7617:7;7573:26;:65::i;:::-;7534:104;;;;7657:7;7652:64;;-1:-1:-1;7692:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;;;6998:1166:75:o;7652:64::-;7896:7;:28;;;7840:30;7862:7;7840:21;:30::i;:::-;7767:21;;7760:61;;7808:13;;7760:61;:::i;:::-;:110;;;;:::i;:::-;:165;;;;:::i;:::-;7729:196;;7520:416;;8066:1;8051:12;:16;8047:64;;;-1:-1:-1;8091:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;8047:64::-;8137:12;8152:4;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;823:556:73:-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;2705:151:118:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;5348:223:64:-;5424:24;5526:37;5544:19;5526:15;:37;:::i;:::-;5495:69;;:15;:69;:::i;8492:7050:75:-;8600:6;8608:4;9410:23;9569:106;9624:7;:33;;;9569:7;:25;;;:33;;:106;;;;:::i;:::-;9487:32;;;;9456:24;;;;:64;;:30;:64::i;:::-;9436:253;;;;:::i;:::-;9410:279;;9699:30;9732:153;9809:7;:21;;;9848:7;:23;;;9732:59;:153::i;:::-;9699:186;;10135:1;10116:16;:20;10112:5397;;;10152:25;10188:16;10152:53;;10394:21;10417:12;10433:401;10514:7;:21;;;10557:7;:23;;;10602:7;:20;;;10644:7;:28;;;10700:7;:19;;;150:4:73;10694:25:75;;;;:::i;:::-;10741:7;:23;;;10786:7;:30;;;10433:59;:401::i;:::-;10393:441;;;;10853:7;10848:64;;-1:-1:-1;10888:1:75;;;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;8492:7050:75:o;10848:64::-;11089:17;11072:13;:34;11068:2044;;11126:21;11150:385;11246:22;11294:7;:20;;;11340:17;11389:7;:19;;;150:4:73;11383:25:75;;;;:::i;:::-;11434:7;:23;;;11483:7;:30;;;11150:70;:385::i;:::-;11126:409;-1:-1:-1;11561:22:75;11126:409;11561:22;:::i;:::-;11553:37;11585:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;;8492:7050:75:o;11068:2044::-;12275:1;12248:7;:23;;;:28;12244:854;;12427:28;;;;12370:85;;:22;:85;:::i;:::-;12333:148;;;:::i;:::-;12300:233;12507:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;8492:7050:75:o;12244:854::-;12973:28;;;;12949:21;;:52;;12973:28;12949:52;:::i;10112:5397::-;13237:1;13218:16;:20;13214:2295;;;13254:25;13290:17;13291:16;13290:17;:::i;:::-;13254:54;;13425:21;13449:262;13505:22;13545:7;:20;;;13589:7;:19;;;150:4:73;13583:25:75;;;;:::i;:::-;13626:7;:23;;;13667:7;:30;;;13449:38;:262::i;:::-;13425:286;;13889:17;13872:13;:34;13868:1631;;13926:21;13950:383;14044:22;14092:7;:20;;;14138:17;14187:7;:19;;;150:4:73;14181:25:75;;;;:::i;:::-;14232:7;:23;;;14281:7;:30;;;13950:68;:383::i;13868:1631::-;14662:23;14688:331;14773:22;14821:7;:20;;;14873:7;:19;;;150:4:73;14867:25:75;;;;:::i;:::-;14918:7;:23;;;14967:7;:30;;;14688:59;:331::i;:::-;14662:357;;15288:130;15365:7;:23;;;15309:13;15289:17;:33;;;;:::i;:::-;15288:43;;:130::i;:::-;15242:176;;:15;:176;:::i;13214:2295::-;-1:-1:-1;15527:1:75;;15530:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;8492:7050:75:o;15789:1157::-;15892:6;16769:156;16830:7;:32;;;150:4:73;16824:38:75;;;;:::i;:::-;16884:23;;;;16769:24;;;;;:156;:33;:156::i;:::-;16556:160;16620:7;:33;;;150:4:73;16614:39:75;;;;:::i;:::-;16675:23;;;;16556:25;;;;;:160;:36;:160::i;:::-;16532:407;;;;:::i;3180:392:118:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:118;;3394:4;3359:41;;;6132:51:182;6105:18;;3359:41:118;5972:217:182;3303:108:118;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:118;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:118:o;3117:115:73:-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;6471:340:74:-;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;15242:1794:77;15447:7;15456:4;15753:1;15746:4;:8;15742:67;;;15792:5;15793:4;15792:5;:::i;:::-;15777:21;;:4;:21;:::i;:::-;15770:28;;15742:67;16304:10;16317:55;16364:1;16367:4;16317:46;:55::i;:::-;16304:68;;16382:9;16394:22;16400:2;16404:1;16407;16410;16413:2;16394:5;:22::i;:::-;16382:34;-1:-1:-1;16426:16:77;16449:37;16460:21;16479:1;16460:14;:2;16469:4;16460:8;:14::i;:::-;:18;;:21::i;:::-;16449:1;;16483:2;16449:10;:37::i;:::-;16445:41;;:1;:41;:::i;:::-;16426:60;;150:4:73;16500:8:77;:15;16496:295;;16614:28;16627:14;150:4:73;16639:1:77;16627:11;:14::i;:::-;16614:8;;:12;:28::i;:::-;16603:39;;16496:295;;;16754:26;16767:12;150:4:73;16777:1:77;16767:9;:12::i;16754:26::-;16743:37;;16496:295;16948:1;16937:8;:12;16933:60;;;16973:1;16976:5;16965:17;;;;;;;;;16933:60;17010:12;17021:1;17010:8;:12;:::i;:::-;17024:4;17002:27;;;;;;;15242:1794;;;;;;;;;;;:::o;9013:583::-;9203:14;9229:12;9271:141;9323:2;9339:1;9354:2;9370:1;9385;9400:2;9271:38;:141::i;:::-;9251:161;;-1:-1:-1;9251:161:77;-1:-1:-1;9251:161:77;9422:168;;9450:129;9506:59;9450:38;:129::i;:::-;9219:377;9013:583;;;;;;;;:::o;13742:861::-;13901:7;14116:9;14128:20;14132:2;14136:1;14139;14142;14145:2;14128:3;:20::i;:::-;14116:32;-1:-1:-1;14158:16:77;14177:28;150:4:73;14185:13:77;:1;14195:2;14185:9;:13::i;:::-;:19;;;;:::i;:::-;14177:1;;:7;:28::i;:::-;14158:47;;150:4:73;14219:8:77;:15;14215:293;;14330:26;14343:12;150:4:73;14353:1:77;14343:9;:12::i;14330:26::-;14319:37;;14215:293;;;14469:28;14482:14;150:4:73;14494:1:77;14482:11;:14::i;14469:28::-;14458:39;;14215:293;14584:12;14588:8;14584:1;:12;:::i;:::-;14577:19;13742:861;-1:-1:-1;;;;;;;;13742:861:77:o;4244:1797::-;4432:7;4589:9;4601:20;4605:2;4609:1;4612;4615;4618:2;4601:3;:20::i;:::-;4589:32;;4695:2;4691:1;:6;4687:166;;;4713:129;4769:59;4713:38;:129::i;:::-;4895:15;4908:1;4896:6;4900:2;4896:1;:6;:::i;4895:15::-;4891:19;;4983:1;4979;:5;4975:165;;;5000:129;5056:59;5000:38;:129::i;:::-;5295:10;5308:23;5325:2;5329:1;5309:5;5313:1;5309;:5;:::i;:::-;5308:16;:23;:16;:23::i;:::-;5295:36;;150:4:73;5345:2:77;:9;5341:261;;5443:20;5450:12;150:4:73;5460:1:77;5450:9;:12::i;5443:20::-;5438:25;;5341:261;;;5569:22;5576:14;150:4:73;5588:1:77;5576:11;:14::i;5569:22::-;5564:27;;5341:261;5684:12;:2;5693;5684:8;:12::i;:::-;5679:17;;5772:2;5767;:7;5763:167;;;5790:129;5846:59;5790:38;:129::i;:::-;6027:7;6032:2;6027;:7;:::i;:::-;6020:14;4244:1797;-1:-1:-1;;;;;;;;;4244:1797:77:o;12036:1218::-;12195:7;12710:9;12722:22;12728:2;12732:1;12735;12738;12741:2;12722:5;:22::i;:::-;12710:34;-1:-1:-1;12754:17:77;12774:28;150:4:73;12784:11:77;:1;12792:2;12784:7;:11::i;:::-;:17;;;;:::i;12774:28::-;12754:48;;150:4:73;12816:9:77;:16;12812:300;;12932:29;12946:14;150:4:73;12958:1:77;12946:11;:14::i;12932:29::-;12920:41;;12812:300;;;13074:27;13088:12;150:4:73;13098:1:77;13088:9;:12::i;13074:27::-;13062:39;;12812:300;13133:21;:9;13151:2;13133:17;:21::i;:::-;13121:33;-1:-1:-1;13233:14:77;13245:2;13121:33;13233:14;:::i;2211:748:73:-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;4625:582:118:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:118;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:118;;-1:-1:-1;;;;;6150:32:182;;5121:24:118;;;6132:51:182;6105:18;;5121:24:118;5972:217:182;5041:119:118;-1:-1:-1;5180:10:118;5173:17;;18399:352:77;18540:7;18736:8;:1;18742;18736:5;:8::i;:::-;18694:39;18707:21;18726:1;18707:14;:2;18718;18707:10;:14::i;:21::-;18694:1;;18730:2;18694:12;:39::i;:::-;:50;;;;:::i;3740:838:73:-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;10285:1320:77:-;10479:14;10495:12;10657:9;10669:20;10673:2;10677:1;10680;10683;10686:2;10669:3;:20::i;:::-;10657:32;-1:-1:-1;10732:15:77;10745:1;10733:6;10737:2;10733:1;:6;:::i;10732:15::-;10728:19;;10829:1;10825;:5;10821:53;;;10854:1;10857:5;10846:17;;;;;;;10821:53;11029:10;11042:23;11059:2;11063:1;11043:5;11047:1;11043;:5;:::i;11042:23::-;11029:36;;150:4:73;11079:2:77;:9;11075:263;;11178:20;11185:12;150:4:73;11195:1:77;11185:9;:12::i;11178:20::-;11173:25;;11075:263;;;11305:22;11312:14;150:4:73;11324:1:77;11312:11;:14::i;11305:22::-;11300:27;;11075:263;11420:12;:2;11429;11420:8;:12::i;:::-;11415:17;;11530:2;11525;:7;11521:54;;;11557:7;11562:2;11557;:7;:::i;:::-;11548:16;;11521:54;11594:4;11584:14;;10509:1096;;10285:1320;;;;;;;;;;:::o;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;17543:343:77:-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;5743:516:118:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:118;;;;;;;;;;;8345:3611:73;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;-1:-1:-1;;;;;;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:182:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:182;;14:180;-1:-1:-1;14:180:182:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:182;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:182;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:182:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:182;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:118::-;1460:5;1453:13;1446:21;1439:5;1436:32;1426:60;;1482:1;1479;1472:12;1497:241;1553:6;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1661:9;1648:23;1680:28;1702:5;1680:28;:::i;1743:1050::-;1869:6;1877;1885;1893;1901;1909;1917;1925;1933;1986:3;1974:9;1965:7;1961:23;1957:33;1954:53;;;2003:1;2000;1993:12;1954:53;2039:9;2026:23;2016:33;;2096:2;2085:9;2081:18;2068:32;2058:42;;2150:2;2139:9;2135:18;2122:32;2163:39;2196:5;2163:39;:::i;:::-;2221:5;-1:-1:-1;2278:2:182;2263:18;;2250:32;2291:41;2250:32;2291:41;:::i;:::-;2351:7;-1:-1:-1;2410:3:182;2395:19;;2382:33;2424:30;2382:33;2424:30;:::i;:::-;2473:7;-1:-1:-1;2527:3:182;2512:19;;2499:33;;-1:-1:-1;2584:3:182;2569:19;;2556:33;2633:4;2620:18;;2608:31;;2598:59;;2653:1;2650;2643:12;2598:59;2676:7;2666:17;;;2730:3;2719:9;2715:19;2702:33;2692:43;;2782:3;2771:9;2767:19;2754:33;2744:43;;1743:1050;;;;;;;;;;;:::o;2798:367::-;2861:8;2871:6;2925:3;2918:4;2910:6;2906:17;2902:27;2892:55;;2943:1;2940;2933:12;2892:55;-1:-1:-1;2966:20:182;;3009:18;2998:30;;2995:50;;;3041:1;3038;3031:12;2995:50;3078:4;3070:6;3066:17;3054:29;;3138:3;3131:4;3121:6;3118:1;3114:14;3106:6;3102:27;3098:38;3095:47;3092:67;;;3155:1;3152;3145:12;3092:67;2798:367;;;;;:::o;3170:1066::-;3310:6;3318;3326;3334;3342;3350;3403:3;3391:9;3382:7;3378:23;3374:33;3371:53;;;3420:1;3417;3410:12;3371:53;3459:9;3446:23;3478:39;3511:5;3478:39;:::i;:::-;3536:5;-1:-1:-1;3593:2:182;3578:18;;3565:32;3606:41;3565:32;3606:41;:::i;:::-;3666:7;-1:-1:-1;3724:2:182;3709:18;;3696:32;3747:18;3777:14;;;3774:34;;;3804:1;3801;3794:12;3774:34;3843:70;3905:7;3896:6;3885:9;3881:22;3843:70;:::i;:::-;3932:8;;-1:-1:-1;3817:96:182;-1:-1:-1;4020:2:182;4005:18;;3992:32;;-1:-1:-1;4036:16:182;;;4033:36;;;4065:1;4062;4055:12;4033:36;;4104:72;4168:7;4157:8;4146:9;4142:24;4104:72;:::i;:::-;3170:1066;;;;-1:-1:-1;3170:1066:182;;-1:-1:-1;3170:1066:182;;4195:8;;3170:1066;-1:-1:-1;;;3170:1066:182:o;4241:541::-;4327:6;4335;4343;4351;4404:3;4392:9;4383:7;4379:23;4375:33;4372:53;;;4421:1;4418;4411:12;4372:53;4457:9;4444:23;4434:33;;4517:2;4506:9;4502:18;4489:32;4530:39;4563:5;4530:39;:::i;:::-;4588:5;-1:-1:-1;4645:2:182;4630:18;;4617:32;4658:41;4617:32;4658:41;:::i;:::-;4241:541;;;;-1:-1:-1;4718:7:182;;4772:2;4757:18;4744:32;;-1:-1:-1;;4241:541:182:o;5197:472::-;5274:6;5282;5290;5343:2;5331:9;5322:7;5318:23;5314:32;5311:52;;;5359:1;5356;5349:12;5311:52;5395:9;5382:23;5372:33;;5455:2;5444:9;5440:18;5427:32;5468:39;5501:5;5468:39;:::i;:::-;5526:5;-1:-1:-1;5583:2:182;5568:18;;5555:32;5596:41;5555:32;5596:41;:::i;:::-;5656:7;5646:17;;;5197:472;;;;;:::o;6383:323::-;6451:6;6459;6512:2;6500:9;6491:7;6487:23;6483:32;6480:52;;;6528:1;6525;6518:12;6480:52;6564:9;6551:23;6541:33;;6624:2;6613:9;6609:18;6596:32;6637:39;6670:5;6637:39;:::i;:::-;6695:5;6685:15;;;6383:323;;;;;:::o;6711:386::-;6797:6;6850:2;6838:9;6829:7;6825:23;6821:32;6818:52;;;6866:1;6863;6856:12;6818:52;6906:9;6893:23;6939:18;6931:6;6928:30;6925:50;;;6971:1;6968;6961:12;6925:50;6994:22;;7050:2;7032:16;;;7028:25;7025:45;;;7066:1;7063;7056:12;7650:541;7736:6;7744;7752;7760;7813:3;7801:9;7792:7;7788:23;7784:33;7781:53;;;7830:1;7827;7820:12;7781:53;7866:9;7853:23;7843:33;;7926:2;7915:9;7911:18;7898:32;7939:39;7972:5;7939:39;:::i;:::-;7997:5;-1:-1:-1;8049:2:182;8034:18;;8021:32;;-1:-1:-1;8105:2:182;8090:18;;8077:32;8118:41;8077:32;8118:41;:::i;:::-;7650:541;;;;-1:-1:-1;7650:541:182;;-1:-1:-1;;7650:541:182:o;8196:1266::-;8413:13;;8395:32;;8483:4;8471:17;;;8465:24;8443:20;;;8436:54;8546:4;8534:17;;;8528:24;8506:20;;;8499:54;8609:4;8597:17;;;8591:24;8569:20;;;8562:54;8672:4;8660:17;;;8654:24;8632:20;;;8625:54;8735:4;8723:17;;;8717:24;8695:20;;;8688:54;8798:4;8786:17;;;8780:24;8758:20;;;8751:54;8861:4;8849:17;;;8843:24;8821:20;;;8814:54;8887:6;8935:15;;;8929:22;8909:18;;;8902:50;8971:6;9019:15;;;9013:22;8993:18;;;8986:50;9055:6;9103:15;;;9097:22;9077:18;;;9070:50;9139:6;9187:15;;;9181:22;9161:18;;;9154:50;9223:6;9271:15;;;9265:22;9245:18;;;9238:50;9307:6;9355:15;;;9349:22;9329:18;;;9322:50;9391:6;9439:15;;;9433:22;9413:18;;;9406:50;;;;8382:3;8367:19;;8196:1266::o;9467:390::-;9532:6;9540;9593:2;9581:9;9572:7;9568:23;9564:32;9561:52;;;9609:1;9606;9599:12;9561:52;9648:9;9635:23;9667:39;9700:5;9667:39;:::i;:::-;9725:5;-1:-1:-1;9782:2:182;9767:18;;9754:32;9795:30;9754:32;9795:30;:::i;9862:391::-;9939:6;9947;9955;10008:2;9996:9;9987:7;9983:23;9979:32;9976:52;;;10024:1;10021;10014:12;9976:52;10060:9;10047:23;10037:33;;10120:2;10109:9;10105:18;10092:32;10133:39;10166:5;10133:39;:::i;:::-;9862:391;;10191:5;;-1:-1:-1;;;10243:2:182;10228:18;;;;10215:32;;9862:391::o;10520:1286::-;10749:13;;-1:-1:-1;;;;;5929:31:182;5917:44;;10710:3;10695:19;;10821:4;10813:6;10809:17;10803:24;10836:61;10891:4;10880:9;10876:20;10862:12;-1:-1:-1;;;;;5929:31:182;5917:44;;5856:111;10836:61;;10953:4;10945:6;10941:17;10935:24;10928:4;10917:9;10913:20;10906:54;11016:4;11008:6;11004:17;10998:24;10991:4;10980:9;10976:20;10969:54;11079:4;11071:6;11067:17;11061:24;11054:4;11043:9;11039:20;11032:54;11142:4;11134:6;11130:17;11124:24;11117:4;11106:9;11102:20;11095:54;11205:4;11197:6;11193:17;11187:24;11180:4;11169:9;11165:20;11158:54;11268:4;11260:6;11256:17;11250:24;11243:4;11232:9;11228:20;11221:54;11294:6;11354:2;11346:6;11342:15;11336:22;11331:2;11320:9;11316:18;11309:50;;11378:6;11433:2;11425:6;11421:15;11415:22;11446:61;11503:2;11492:9;11488:18;11472:14;-1:-1:-1;;;;;5929:31:182;5917:44;;5856:111;11446:61;-1:-1:-1;;11526:6:182;11569:15;;;11563:22;-1:-1:-1;;;;;5929:31:182;11636:18;;;5917:44;11674:6;11717:15;;;11711:22;10328:12;;11781:18;;;10316:25;10390:4;10379:16;;10373:23;10357:14;;;10350:47;10446:4;10435:16;;10429:23;10413:14;;;10406:47;10502:4;10491:16;;10485:23;10469:14;;;10462:47;11742:58;;;10520:1286;;;;:::o;11811:437::-;11897:6;11905;11958:2;11946:9;11937:7;11933:23;11929:32;11926:52;;;11974:1;11971;11964:12;11926:52;12014:9;12001:23;12047:18;12039:6;12036:30;12033:50;;;12079:1;12076;12069:12;12033:50;12118:70;12180:7;12171:6;12160:9;12156:22;12118:70;:::i;:::-;12207:8;;12092:96;;-1:-1:-1;11811:437:182;-1:-1:-1;;;;11811:437:182:o;12253:632::-;12424:2;12476:21;;;12546:13;;12449:18;;;12568:22;;;12395:4;;12424:2;12647:15;;;;12621:2;12606:18;;;12395:4;12690:169;12704:6;12701:1;12698:13;12690:169;;;12765:13;;12753:26;;12834:15;;;;12799:12;;;;12726:1;12719:9;12690:169;;;-1:-1:-1;12876:3:182;;12253:632;-1:-1:-1;;;;;;12253:632:182:o;13496:1650::-;13720:13;;-1:-1:-1;;;;;4853:46:182;4841:59;;13688:3;13673:19;;13792:4;13784:6;13780:17;13774:24;13807:54;13855:4;13844:9;13840:20;13826:12;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;13807:54;;13910:4;13902:6;13898:17;13892:24;13925:56;13975:4;13964:9;13960:20;13944:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;13925:56;;14030:4;14022:6;14018:17;14012:24;14045:56;14095:4;14084:9;14080:20;14064:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14045:56;;14150:4;14142:6;14138:17;14132:24;14165:55;14214:4;14203:9;14199:20;14183:14;13354:2;13343:21;13331:34;;13278:93;14165:55;;14269:4;14261:6;14257:17;14251:24;14284:56;14334:4;14323:9;14319:20;14303:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14284:56;;14389:4;14381:6;14377:17;14371:24;14404:56;14454:4;14443:9;14439:20;14423:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14404:56;;14509:4;14501:6;14497:17;14491:24;14524:56;14574:4;14563:9;14559:20;14543:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14524:56;-1:-1:-1;14599:6:182;14642:15;;;14636:22;7432:13;7425:21;14699:18;;;7413:34;14737:6;14780:15;;;14774:22;7432:13;7425:21;14837:18;;;7413:34;14875:6;14918:15;;;14912:22;-1:-1:-1;;;;;13442:42:182;14978:18;;;13430:55;15016:6;15060:15;;;15054:22;-1:-1:-1;;;;;4853:46:182;;15121:18;;;4841:59;15085:55;4787:119;15151:691;15246:6;15254;15262;15270;15278;15331:3;15319:9;15310:7;15306:23;15302:33;15299:53;;;15348:1;15345;15338:12;15299:53;15384:9;15371:23;15361:33;;15444:2;15433:9;15429:18;15416:32;15457:39;15490:5;15457:39;:::i;:::-;15515:5;-1:-1:-1;15572:2:182;15557:18;;15544:32;15585:41;15544:32;15585:41;:::i;:::-;15645:7;-1:-1:-1;15699:2:182;15684:18;;15671:32;;-1:-1:-1;15755:3:182;15740:19;;15727:33;15769:41;15727:33;15769:41;:::i;:::-;15829:7;15819:17;;;15151:691;;;;;;;;:::o;15847:404::-;15915:6;15923;15976:2;15964:9;15955:7;15951:23;15947:32;15944:52;;;15992:1;15989;15982:12;15944:52;16031:9;16018:23;16050:39;16083:5;16050:39;:::i;:::-;16108:5;-1:-1:-1;16165:2:182;16150:18;;16137:32;16178:41;16137:32;16178:41;:::i;16639:184::-;16709:6;16762:2;16750:9;16741:7;16737:23;16733:32;16730:52;;;16778:1;16775;16768:12;16730:52;-1:-1:-1;16801:16:182;;16639:184;-1:-1:-1;16639:184:182:o;17111:127::-;17172:10;17167:3;17163:20;17160:1;17153:31;17203:4;17200:1;17193:15;17227:4;17224:1;17217:15;17243:127;17304:10;17299:3;17295:20;17292:1;17285:31;17335:4;17332:1;17325:15;17359:4;17356:1;17349:15;17375:125;17440:9;;;17461:10;;;17458:36;;;17474:18;;:::i;17505:128::-;17572:9;;;17593:11;;;17590:37;;;17607:18;;:::i;17638:127::-;17699:10;17694:3;17690:20;17687:1;17680:31;17730:4;17727:1;17720:15;17754:4;17751:1;17744:15;17770:127;17831:10;17826:3;17822:20;17819:1;17812:31;17862:4;17859:1;17852:15;17886:4;17883:1;17876:15;19543:449;-1:-1:-1;;;19800:3:182;19793:32;19775:3;19854:6;19848:13;19870:75;19938:6;19933:2;19928:3;19924:12;19917:4;19909:6;19905:17;19870:75;:::i;:::-;19965:16;;;;19983:2;19961:25;;19543:449;-1:-1:-1;;19543:449:182:o;19997:450::-;-1:-1:-1;;;20254:3:182;20247:33;20229:3;20309:6;20303:13;20325:75;20393:6;20388:2;20383:3;20379:12;20372:4;20364:6;20360:17;20325:75;:::i;:::-;20420:16;;;;20438:2;20416:25;;19997:450;-1:-1:-1;;19997:450:182:o;22643:135::-;22682:3;22703:17;;;22700:43;;22723:18;;:::i;:::-;-1:-1:-1;22770:1:182;22759:13;;22643:135::o;23036:448::-;-1:-1:-1;;;23293:3:182;23286:31;23268:3;23346:6;23340:13;23362:75;23430:6;23425:2;23420:3;23416:12;23409:4;23401:6;23397:17;23362:75;:::i;:::-;23457:16;;;;23475:2;23453:25;;23036:448;-1:-1:-1;;23036:448:182:o;23489:449::-;-1:-1:-1;;;23746:3:182;23739:32;23721:3;23800:6;23794:13;23816:75;23884:6;23879:2;23874:3;23870:12;23863:4;23855:6;23851:17;23816:75;:::i;24658:200::-;24724:9;;;24697:4;24752:9;;24780:10;;24792:12;;;24776:29;24815:12;;;24807:21;;24773:56;24770:82;;;24832:18;;:::i;24863:127::-;24924:10;24919:3;24915:20;24912:1;24905:31;24955:4;24952:1;24945:15;24979:4;24976:1;24969:15;24995:112;25027:1;25053;25043:35;;25058:18;;:::i;:::-;-1:-1:-1;25092:9:182;;24995:112::o;25112:120::-;25152:1;25178;25168:35;;25183:18;;:::i;:::-;-1:-1:-1;25217:9:182;;25112:120::o;25237:245::-;25304:6;25357:2;25345:9;25336:7;25332:23;25328:32;25325:52;;;25373:1;25370;25363:12;25325:52;25405:9;25399:16;25424:28;25446:5;25424:28;:::i;25487:168::-;25560:9;;;25591;;25608:15;;;25602:22;;25588:37;25578:71;;25629:18;;:::i;25660:216::-;25724:9;;;25752:11;;;25699:3;25782:9;;25810:10;;25806:19;;25835:10;;25827:19;;25803:44;25800:70;;;25850:18;;:::i;25881:136::-;25916:3;-1:-1:-1;;;25937:22:182;;25934:48;;25962:18;;:::i;:::-;-1:-1:-1;26002:1:182;25998:13;;25881:136::o;26022:287::-;26151:3;26189:6;26183:13;26205:66;26264:6;26259:3;26252:4;26244:6;26240:17;26205:66;:::i;:::-;26287:16;;;;;26022:287;-1:-1:-1;;26022:287:182:o;26314:193::-;26353:1;26379;26369:35;;26384:18;;:::i;:::-;-1:-1:-1;;;26420:18:182;;-1:-1:-1;;26440:13:182;;26416:38;26413:64;;;26457:18;;:::i;:::-;-1:-1:-1;26491:10:182;;26314:193::o;26512:360::-;26676:2;26661:18;;26709:1;26698:13;;26688:144;;26754:10;26749:3;26745:20;26742:1;26735:31;26789:4;26786:1;26779:15;26817:4;26814:1;26807:15;26688:144;26841:25;;;26512:360;:::o",
        "linkReferences": {},
        "immutableReferences": {
            "13293": [
                {
                    "start": 3206,
                    "length": 32
                },
                {
                    "start": 4062,
                    "length": 32
                }
            ],
            "13296": [
                {
                    "start": 3490,
                    "length": 32
                },
                {
                    "start": 9458,
                    "length": 32
                }
            ],
            "13299": [
                {
                    "start": 3452,
                    "length": 32
                },
                {
                    "start": 4151,
                    "length": 32
                },
                {
                    "start": 9189,
                    "length": 32
                }
            ],
            "13302": [
                {
                    "start": 3528,
                    "length": 32
                },
                {
                    "start": 7730,
                    "length": 32
                }
            ],
            "13305": [
                {
                    "start": 3660,
                    "length": 32
                }
            ],
            "13308": [
                {
                    "start": 3698,
                    "length": 32
                }
            ],
            "13311": [
                {
                    "start": 3736,
                    "length": 32
                }
            ],
            "13314": [
                {
                    "start": 3774,
                    "length": 32
                }
            ],
            "13317": [
                {
                    "start": 3338,
                    "length": 32
                },
                {
                    "start": 7654,
                    "length": 32
                }
            ],
            "13320": [
                {
                    "start": 3376,
                    "length": 32
                },
                {
                    "start": 7692,
                    "length": 32
                }
            ],
            "13323": [
                {
                    "start": 3414,
                    "length": 32
                }
            ],
            "13340": [
                {
                    "start": 1267,
                    "length": 32
                },
                {
                    "start": 1706,
                    "length": 32
                },
                {
                    "start": 3602,
                    "length": 32
                },
                {
                    "start": 6445,
                    "length": 32
                },
                {
                    "start": 6567,
                    "length": 32
                },
                {
                    "start": 6691,
                    "length": 32
                }
            ],
            "13354": [
                {
                    "start": 3253,
                    "length": 32
                },
                {
                    "start": 7108,
                    "length": 32
                }
            ],
            "13357": [
                {
                    "start": 3300,
                    "length": 32
                },
                {
                    "start": 7169,
                    "length": 32
                }
            ],
            "6120": [
                {
                    "start": 1360,
                    "length": 32
                },
                {
                    "start": 1464,
                    "length": 32
                },
                {
                    "start": 1766,
                    "length": 32
                },
                {
                    "start": 2146,
                    "length": 32
                },
                {
                    "start": 7376,
                    "length": 32
                },
                {
                    "start": 8749,
                    "length": 32
                },
                {
                    "start": 8894,
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
        "lido()": "23509a2d",
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
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract ILido\",\"name\":\"_lido\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lido\",\"outputs\":[{\"internalType\":\"contract ILido\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\",\"_lido\":\"The Lido contract.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The MultiToken's decimals.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"lido()\":{\"returns\":{\"_0\":\"lido The Lido contract.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"StETHTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"NegativePresentValue()\":[{\"notice\":\"Thrown when the present value is negative. Whatever proceeded         a negative present value should be reverted.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsupportedToken()\":[{\"notice\":\"Thrown when an unsupported option is passed to a function or         a user attempts to sweep an invalid token. The options and sweep         targets that are supported vary between instances.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"decimals()\":{\"notice\":\"Returns the MultiToken's decimals.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"lido()\":{\"notice\":\"Returns the Lido contract.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"StETHHyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/steth/StETHTarget0.sol\":\"StETHTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f\",\"dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk\"]},\"contracts/src/instances/steth/StETHBase.sol\":{\"keccak256\":\"0x0cb486eaa8d75908bd8e91db3269ec203918cdd288d5aa7938ee45d405efcad2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b0aa85afa7f423a01c7d1c28e42d0ee75ced8d568eb5e085d700042c1a8756ec\",\"dweb:/ipfs/QmTSiyx6WzWsYv9viG6Dv81xpgoynU2A6uLDVXriTVtmjH\"]},\"contracts/src/instances/steth/StETHTarget0.sol\":{\"keccak256\":\"0xe449a56e1607e31d482a0534da41fdbb4111841fb900d113960d1c8aa32034b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://56c867def2f4ff1f4c9d4779b9de5e5a891ec617799aefede3a074941041d5ff\",\"dweb:/ipfs/QmQ9FdRTiPHpmSCQLyKZoKynBy1MpechNG4nnwrhF21Sxi\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x5942f8acaa122bd9f40cc0c6c4a5d489de3537efef6f7e744a89dae8a616ecc9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://629e5370ec6464f25f476b20635d67b06919f37aac7b8decba0756ab3ccbc8e3\",\"dweb:/ipfs/QmdZi8CygBNpvd1oX2GMReYRffbYirNJqnnEGxTkHoWqrw\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc\",\"dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc\",\"dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc\",\"dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626\",\"dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11\",\"dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f\",\"dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                            "internalType": "contract ILido",
                            "name": "_lido",
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
                    "stateMutability": "pure",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "lido",
                    "outputs": [
                        {
                            "internalType": "contract ILido",
                            "name": "",
                            "type": "address"
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
                            "proceeds": "The amount of base collected."
                        }
                    },
                    "constructor": {
                        "params": {
                            "_config": "The configuration of the Hyperdrive pool.",
                            "_lido": "The Lido contract."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The MultiToken's decimals."
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
                    "lido()": {
                        "returns": {
                            "_0": "lido The Lido contract."
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
                            "_target": "The target token to sweep."
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
                        "notice": "Initializes the target0 contract."
                    },
                    "decimals()": {
                        "notice": "Returns the MultiToken's decimals."
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
                    "lido()": {
                        "notice": "Returns the Lido contract."
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
                        "notice": "Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature."
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
                        "notice": "Transfers the contract's balance of a target token to the fee         collector address."
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
                "contracts/src/instances/steth/StETHTarget0.sol": "StETHTarget0"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3",
                "urls": [
                    "bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f",
                    "dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/steth/StETHBase.sol": {
                "keccak256": "0x0cb486eaa8d75908bd8e91db3269ec203918cdd288d5aa7938ee45d405efcad2",
                "urls": [
                    "bzz-raw://b0aa85afa7f423a01c7d1c28e42d0ee75ced8d568eb5e085d700042c1a8756ec",
                    "dweb:/ipfs/QmTSiyx6WzWsYv9viG6Dv81xpgoynU2A6uLDVXriTVtmjH"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/steth/StETHTarget0.sol": {
                "keccak256": "0xe449a56e1607e31d482a0534da41fdbb4111841fb900d113960d1c8aa32034b5",
                "urls": [
                    "bzz-raw://56c867def2f4ff1f4c9d4779b9de5e5a891ec617799aefede3a074941041d5ff",
                    "dweb:/ipfs/QmQ9FdRTiPHpmSCQLyKZoKynBy1MpechNG4nnwrhF21Sxi"
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
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
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
            "contracts/src/interfaces/ILido.sol": {
                "keccak256": "0x5942f8acaa122bd9f40cc0c6c4a5d489de3537efef6f7e744a89dae8a616ecc9",
                "urls": [
                    "bzz-raw://629e5370ec6464f25f476b20635d67b06919f37aac7b8decba0756ab3ccbc8e3",
                    "dweb:/ipfs/QmdZi8CygBNpvd1oX2GMReYRffbYirNJqnnEGxTkHoWqrw"
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
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
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
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5",
                "urls": [
                    "bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc",
                    "dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717",
                "urls": [
                    "bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc",
                    "dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8"
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
                "keccak256": "0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf",
                "urls": [
                    "bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc",
                    "dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370",
                "urls": [
                    "bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626",
                    "dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058",
                "urls": [
                    "bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11",
                    "dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982",
                "urls": [
                    "bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f",
                    "dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C"
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
        "absolutePath": "contracts/src/instances/steth/StETHTarget0.sol",
        "id": 6567,
        "exportedSymbols": {
            "ERC20": [
                66576
            ],
            "HyperdriveTarget0": [
                3146
            ],
            "IERC20": [
                6793
            ],
            "IHyperdrive": [
                7480
            ],
            "ILido": [
                8338
            ],
            "SafeERC20": [
                67006
            ],
            "StETHBase": [
                6319
            ],
            "StETHTarget0": [
                6566
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3033:32",
        "nodes": [
            {
                "id": 6404,
                "nodeType": "PragmaDirective",
                "src": "39:23:32",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 6406,
                "nodeType": "ImportDirective",
                "src": "64:59:32",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
                "file": "openzeppelin/token/ERC20/ERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6567,
                "sourceUnit": 66577,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6405,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66576,
                            "src": "73:5:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6408,
                "nodeType": "ImportDirective",
                "src": "124:73:32",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
                "file": "openzeppelin/token/ERC20/utils/SafeERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6567,
                "sourceUnit": 67007,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6407,
                            "name": "SafeERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67006,
                            "src": "133:9:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6410,
                "nodeType": "ImportDirective",
                "src": "198:73:32",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "../../external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6567,
                "sourceUnit": 3147,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6409,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3146,
                            "src": "207:17:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6412,
                "nodeType": "ImportDirective",
                "src": "272:63:32",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6567,
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6411,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
                            "src": "281:11:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6414,
                "nodeType": "ImportDirective",
                "src": "336:53:32",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6567,
                "sourceUnit": 6794,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6413,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6793,
                            "src": "345:6:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6416,
                "nodeType": "ImportDirective",
                "src": "390:51:32",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/ILido.sol",
                "file": "../../interfaces/ILido.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6567,
                "sourceUnit": 8339,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6415,
                            "name": "ILido",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8338,
                            "src": "399:5:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6418,
                "nodeType": "ImportDirective",
                "src": "442:44:32",
                "nodes": [],
                "absolutePath": "contracts/src/instances/steth/StETHBase.sol",
                "file": "./StETHBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6567,
                "sourceUnit": 6320,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6417,
                            "name": "StETHBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6319,
                            "src": "451:9:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6566,
                "nodeType": "ContractDefinition",
                "src": "924:2147:32",
                "nodes": [
                    {
                        "id": 6427,
                        "nodeType": "UsingForDirective",
                        "src": "984:26:32",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 6424,
                            "name": "SafeERC20",
                            "nameLocations": [
                                "990:9:32"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 67006,
                            "src": "990:9:32"
                        },
                        "typeName": {
                            "id": 6426,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 6425,
                                "name": "ERC20",
                                "nameLocations": [
                                    "1004:5:32"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 66576,
                                "src": "1004:5:32"
                            },
                            "referencedDeclaration": 66576,
                            "src": "1004:5:32",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$66576",
                                "typeString": "contract ERC20"
                            }
                        }
                    },
                    {
                        "id": 6444,
                        "nodeType": "FunctionDefinition",
                        "src": "1171:132:32",
                        "nodes": [],
                        "body": {
                            "id": 6443,
                            "nodeType": "Block",
                            "src": "1301:2:32",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 6428,
                            "nodeType": "StructuredDocumentation",
                            "src": "1016:150:32",
                            "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param _lido The Lido contract."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 6437,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6431,
                                        "src": "1275:7:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 6438,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6436,
                                    "name": "HyperdriveTarget0",
                                    "nameLocations": [
                                        "1257:17:32"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 3146,
                                    "src": "1257:17:32"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1257:26:32"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 6440,
                                        "name": "_lido",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6434,
                                        "src": "1294:5:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8338",
                                            "typeString": "contract ILido"
                                        }
                                    }
                                ],
                                "id": 6441,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6439,
                                    "name": "StETHBase",
                                    "nameLocations": [
                                        "1284:9:32"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 6319,
                                    "src": "1284:9:32"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1284:16:32"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 6435,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6431,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1222:7:32",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6444,
                                    "src": "1192:37:32",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 6430,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6429,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1192:11:32",
                                                "1204:10:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7280,
                                            "src": "1192:22:32"
                                        },
                                        "referencedDeclaration": 7280,
                                        "src": "1192:22:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6434,
                                    "mutability": "mutable",
                                    "name": "_lido",
                                    "nameLocation": "1245:5:32",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6444,
                                    "src": "1239:11:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILido_$8338",
                                        "typeString": "contract ILido"
                                    },
                                    "typeName": {
                                        "id": 6433,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6432,
                                            "name": "ILido",
                                            "nameLocations": [
                                                "1239:5:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8338,
                                            "src": "1239:5:32"
                                        },
                                        "referencedDeclaration": 8338,
                                        "src": "1239:5:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8338",
                                            "typeString": "contract ILido"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1182:74:32"
                        },
                        "returnParameters": {
                            "id": 6442,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1301:0:32"
                        },
                        "scope": 6566,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 6532,
                        "nodeType": "FunctionDefinition",
                        "src": "1731:933:32",
                        "nodes": [],
                        "body": {
                            "id": 6531,
                            "nodeType": "Block",
                            "src": "1771:893:32",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 6460,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 6454,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 6451,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1853:3:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 6452,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1857:6:32",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1853:10:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "id": 6453,
                                                "name": "_feeCollector",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13340,
                                                "src": "1867:13:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "1853:27:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "id": 6459,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "1884:21:32",
                                            "subExpression": {
                                                "baseExpression": {
                                                    "id": 6455,
                                                    "name": "_pausers",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13351,
                                                    "src": "1885:8:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 6458,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 6456,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1894:3:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 6457,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1898:6:32",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1894:10:32",
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
                                                "src": "1885:20:32",
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
                                        "src": "1853:52:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6467,
                                    "nodeType": "IfStatement",
                                    "src": "1849:116:32",
                                    "trueBody": {
                                        "id": 6466,
                                        "nodeType": "Block",
                                        "src": "1907:58:32",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6461,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7480,
                                                            "src": "1928:11:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6463,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1940:12:32",
                                                        "memberName": "Unauthorized",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7434,
                                                        "src": "1928:24:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6464,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1928:26:32",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6465,
                                                "nodeType": "RevertStatement",
                                                "src": "1921:33:32"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 6476,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 6470,
                                                    "name": "_target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 6448,
                                                    "src": "2045:7:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 6469,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2037:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 6468,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2037:7:32",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 6471,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2037:16:32",
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
                                                    "id": 6474,
                                                    "name": "_lido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 6120,
                                                    "src": "2065:5:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_ILido_$8338",
                                                        "typeString": "contract ILido"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_ILido_$8338",
                                                        "typeString": "contract ILido"
                                                    }
                                                ],
                                                "id": 6473,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2057:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 6472,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2057:7:32",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 6475,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2057:14:32",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2037:34:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6483,
                                    "nodeType": "IfStatement",
                                    "src": "2033:102:32",
                                    "trueBody": {
                                        "id": 6482,
                                        "nodeType": "Block",
                                        "src": "2073:62:32",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6477,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7480,
                                                            "src": "2094:11:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6479,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2106:16:32",
                                                        "memberName": "UnsupportedToken",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7449,
                                                        "src": "2094:28:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6480,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2094:30:32",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6481,
                                                "nodeType": "RevertStatement",
                                                "src": "2087:37:32"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        6485
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 6485,
                                            "mutability": "mutable",
                                            "name": "stETHBalance",
                                            "nameLocation": "2224:12:32",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 6531,
                                            "src": "2216:20:32",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 6484,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2216:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 6493,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6490,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2263:4:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6566",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6566",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    ],
                                                    "id": 6489,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2255:7:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6488,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2255:7:32",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6491,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2255:13:32",
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
                                                "id": 6486,
                                                "name": "_lido",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6120,
                                                "src": "2239:5:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ILido_$8338",
                                                    "typeString": "contract ILido"
                                                }
                                            },
                                            "id": 6487,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2245:9:32",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6792,
                                            "src": "2239:15:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 6492,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2239:30:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2216:53:32"
                                },
                                {
                                    "assignments": [
                                        6495
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 6495,
                                            "mutability": "mutable",
                                            "name": "balance",
                                            "nameLocation": "2369:7:32",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 6531,
                                            "src": "2361:15:32",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 6494,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2361:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 6503,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6500,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2405:4:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6566",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6566",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    ],
                                                    "id": 6499,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2397:7:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6498,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2397:7:32",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6501,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2397:13:32",
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
                                                "id": 6496,
                                                "name": "_target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6448,
                                                "src": "2379:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$6793",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 6497,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2387:9:32",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6792,
                                            "src": "2379:17:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 6502,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2379:32:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2361:50:32"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 6511,
                                                "name": "_feeCollector",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13340,
                                                "src": "2458:13:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 6512,
                                                "name": "balance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6495,
                                                "src": "2473:7:32",
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
                                                                "id": 6507,
                                                                "name": "_target",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 6448,
                                                                "src": "2435:7:32",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$6793",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$6793",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 6506,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2427:7:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 6505,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2427:7:32",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 6508,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2427:16:32",
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
                                                    "id": 6504,
                                                    "name": "ERC20",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66576,
                                                    "src": "2421:5:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ERC20_$66576_$",
                                                        "typeString": "type(contract ERC20)"
                                                    }
                                                },
                                                "id": 6509,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2421:23:32",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$66576",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 6510,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2445:12:32",
                                            "memberName": "safeTransfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 66766,
                                            "src": "2421:36:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66654_$",
                                                "typeString": "function (contract IERC20,address,uint256)"
                                            }
                                        },
                                        "id": 6513,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2421:60:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6514,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2421:60:32"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 6523,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 6519,
                                                            "name": "this",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -28,
                                                            "src": "2577:4:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_StETHTarget0_$6566",
                                                                "typeString": "contract StETHTarget0"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_StETHTarget0_$6566",
                                                                "typeString": "contract StETHTarget0"
                                                            }
                                                        ],
                                                        "id": 6518,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2569:7:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 6517,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2569:7:32",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 6520,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2569:13:32",
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
                                                    "id": 6515,
                                                    "name": "_lido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 6120,
                                                    "src": "2553:5:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_ILido_$8338",
                                                        "typeString": "contract ILido"
                                                    }
                                                },
                                                "id": 6516,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2559:9:32",
                                                "memberName": "balanceOf",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 6792,
                                                "src": "2553:15:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                    "typeString": "function (address) view external returns (uint256)"
                                                }
                                            },
                                            "id": 6521,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2553:30:32",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 6522,
                                            "name": "stETHBalance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6485,
                                            "src": "2587:12:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2553:46:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6530,
                                    "nodeType": "IfStatement",
                                    "src": "2549:109:32",
                                    "trueBody": {
                                        "id": 6529,
                                        "nodeType": "Block",
                                        "src": "2601:57:32",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6524,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7480,
                                                            "src": "2622:11:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6526,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2634:11:32",
                                                        "memberName": "SweepFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7428,
                                                        "src": "2622:23:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6527,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2622:25:32",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6528,
                                                "nodeType": "RevertStatement",
                                                "src": "2615:32:32"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 6445,
                            "nodeType": "StructuredDocumentation",
                            "src": "1329:397:32",
                            "text": "@notice Transfers the contract's balance of a target token to the fee\n         collector address.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The target token to sweep."
                        },
                        "functionSelector": "01681a62",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sweep",
                        "nameLocation": "1740:5:32",
                        "parameters": {
                            "id": 6449,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6448,
                                    "mutability": "mutable",
                                    "name": "_target",
                                    "nameLocation": "1753:7:32",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6532,
                                    "src": "1746:14:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 6447,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6446,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1746:6:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 6793,
                                            "src": "1746:6:32"
                                        },
                                        "referencedDeclaration": 6793,
                                        "src": "1746:6:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6793",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1745:16:32"
                        },
                        "returnParameters": {
                            "id": 6450,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1771:0:32"
                        },
                        "scope": 6566,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6547,
                        "nodeType": "FunctionDefinition",
                        "src": "2774:89:32",
                        "nodes": [],
                        "body": {
                            "id": 6546,
                            "nodeType": "Block",
                            "src": "2820:43:32",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6542,
                                                        "name": "_lido",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 6120,
                                                        "src": "2849:5:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ILido_$8338",
                                                            "typeString": "contract ILido"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ILido_$8338",
                                                            "typeString": "contract ILido"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 6540,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "2838:3:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 6541,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2842:6:32",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2838:10:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 6543,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2838:17:32",
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
                                            "id": 6539,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3145,
                                            "src": "2830:7:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 6544,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2830:26:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6545,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2830:26:32"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 6533,
                            "nodeType": "StructuredDocumentation",
                            "src": "2691:78:32",
                            "text": "@notice Returns the Lido contract.\n @return lido The Lido contract."
                        },
                        "functionSelector": "23509a2d",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lido",
                        "nameLocation": "2783:4:32",
                        "parameters": {
                            "id": 6534,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2787:2:32"
                        },
                        "returnParameters": {
                            "id": 6538,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6537,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6547,
                                    "src": "2813:5:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILido_$8338",
                                        "typeString": "contract ILido"
                                    },
                                    "typeName": {
                                        "id": 6536,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6535,
                                            "name": "ILido",
                                            "nameLocations": [
                                                "2813:5:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8338,
                                            "src": "2813:5:32"
                                        },
                                        "referencedDeclaration": 8338,
                                        "src": "2813:5:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8338",
                                            "typeString": "contract ILido"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2812:7:32"
                        },
                        "scope": 6566,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6565,
                        "nodeType": "FunctionDefinition",
                        "src": "2963:106:32",
                        "nodes": [],
                        "body": {
                            "id": 6564,
                            "nodeType": "Block",
                            "src": "3022:47:32",
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
                                                                "hexValue": "3138",
                                                                "id": 6559,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3057:2:32",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_18_by_1",
                                                                    "typeString": "int_const 18"
                                                                },
                                                                "value": "18"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_rational_18_by_1",
                                                                    "typeString": "int_const 18"
                                                                }
                                                            ],
                                                            "id": 6558,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3051:5:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint8_$",
                                                                "typeString": "type(uint8)"
                                                            },
                                                            "typeName": {
                                                                "id": 6557,
                                                                "name": "uint8",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3051:5:32",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 6560,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3051:9:32",
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
                                                        "id": 6555,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "3040:3:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 6556,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3044:6:32",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3040:10:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 6561,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3040:21:32",
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
                                            "id": 6554,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3145,
                                            "src": "3032:7:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 6562,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3032:30:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6563,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3032:30:32"
                                }
                            ]
                        },
                        "baseFunctions": [
                            3076
                        ],
                        "documentation": {
                            "id": 6548,
                            "nodeType": "StructuredDocumentation",
                            "src": "2869:89:32",
                            "text": "@notice Returns the MultiToken's decimals.\n @return The MultiToken's decimals."
                        },
                        "functionSelector": "313ce567",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nameLocation": "2972:8:32",
                        "overrides": {
                            "id": 6550,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "2997:8:32"
                        },
                        "parameters": {
                            "id": 6549,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2980:2:32"
                        },
                        "returnParameters": {
                            "id": 6553,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6552,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6565,
                                    "src": "3015:5:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 6551,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3015:5:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3014:7:32"
                        },
                        "scope": 6566,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 6420,
                            "name": "HyperdriveTarget0",
                            "nameLocations": [
                                "949:17:32"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 3146,
                            "src": "949:17:32"
                        },
                        "id": 6421,
                        "nodeType": "InheritanceSpecifier",
                        "src": "949:17:32"
                    },
                    {
                        "baseName": {
                            "id": 6422,
                            "name": "StETHBase",
                            "nameLocations": [
                                "968:9:32"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 6319,
                            "src": "968:9:32"
                        },
                        "id": 6423,
                        "nodeType": "InheritanceSpecifier",
                        "src": "968:9:32"
                    }
                ],
                "canonicalName": "StETHTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 6419,
                    "nodeType": "StructuredDocumentation",
                    "src": "488:436:32",
                    "text": "@author DELV\n @title StETHTarget0\n @notice StETHHyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    6566,
                    6319,
                    3146,
                    10186,
                    13270,
                    11906,
                    11031,
                    12387,
                    8790,
                    9728,
                    13478,
                    67358,
                    7924,
                    8482,
                    8230,
                    8570
                ],
                "name": "StETHTarget0",
                "nameLocation": "933:12:32",
                "scope": 6567,
                "usedErrors": [
                    7345,
                    7351,
                    7354,
                    7363,
                    7375,
                    7378,
                    7387,
                    7390,
                    7393,
                    7402,
                    7420,
                    7425,
                    7428,
                    7434,
                    7449,
                    66733,
                    67014,
                    67019,
                    67022,
                    67303
                ],
                "usedEvents": [
                    7773,
                    7788,
                    7805,
                    7818,
                    7835,
                    7854,
                    7871,
                    7888,
                    7901,
                    7908,
                    7913,
                    7918,
                    7923,
                    8463,
                    8472,
                    8481
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 32
};
