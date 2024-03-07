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
                    "name": "__lido",
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
            "name": "UnsafeCastToInt256",
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
        "object": "0x6102606040523480156200001257600080fd5b5060405162004254380380620042548339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613e5b620003f960003960008181610550015281816105b8015281816106e60152818161086201528181611cc30152818161223901526122ca015260008181610ce40152611bf4015260008181610cb50152611bb70152600081816104f3015281816106aa01528181610e12015281816119140152818161198e0152611a0a015260008181610d560152611e2c015260008181610d300152611e06015260008181610d0a0152611de001526000610ebe01526000610e9801526000610e7201526000610e4c015260008181610dc80152611e52015260008181610d7c0152818161103701526123f1015260008181610da2015261253f015260008181610c860152610fde0152613e5b6000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c806360246c881161010f578063becee9c3116100a2578063d816574311610071578063d816574314610447578063e44808bc1461045c578063e985e9c51461046f578063fba560081461048257600080fd5b8063becee9c314610404578063c55dae6314610424578063c69e16ad1461042c578063cf210e651461043457600080fd5b8063a22cb465116100de578063a22cb465146103b6578063ab033ea9146103c9578063b0d96580146103dc578063bd85b039146103f157600080fd5b806360246c88146103685780637180c8ca1461037d5780637ecebe00146103905780639cd241af146103a357600080fd5b806321ff32a9116101875780633e691db9116101565780633e691db91461030c57806346fbf68e1461031f5780634e41a1fb146103425780634ed2d6ac1461035557600080fd5b806321ff32a91461029e57806323509a2d146102bf578063313ce567146102df5780633656eec2146102f957600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f73660046133c8565b6104b1565b6040516102099190613431565b60405180910390f35b610225610220366004613459565b6104e8565b005b610225610235366004613484565b61077c565b6102256102483660046134a1565b610788565b61022561025b366004613582565b6107a4565b61022561026e366004613617565b6107ba565b6102866102813660046133c8565b6107cd565b60405190516001600160801b03168152602001610209565b6102b16102ac36600461365f565b61080e565b604051908152602001610209565b6102c7610854565b6040516001600160a01b039091168152602001610209565b6102e7610897565b60405160ff9091168152602001610209565b6102b16103073660046136a1565b6108af565b6102b161031a3660046136d1565b6108e8565b61033261032d366004613459565b6108f3565b6040519015158152602001610209565b6101fc6103503660046133c8565b610929565b61022561036336600461370c565b610937565b610370610985565b6040516102099190613756565b61022561038b3660046137f7565b610bb2565b6102b161039e366004613459565b610bc0565b6102256103b1366004613825565b610bec565b6102256103c43660046137f7565b610bf8565b6102256103d7366004613459565b610c64565b6103e4610c6d565b604051610209919061385d565b6102b16103ff3660046133c8565b610ef3565b61041761041236600461393a565b610f15565b604051610209919061397c565b6102c7610fd0565b6102b1611010565b6102b16104423660046133c8565b61102a565b61044f611073565b60405161020991906139c0565b61022561046a366004613ad1565b61117f565b61033261047d366004613b30565b6111c7565b61048a61120b565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b60606104e36104bf8361126a565b6040516020016104cf9190613431565b604051602081830303815290604052611392565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316036105a05760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062b9190613b5e565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610675573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106999190613b5e565b90506106cf6001600160a01b0384167f0000000000000000000000000000000000000000000000000000000000000000836113b6565b6040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610735573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107599190613b5e565b14610777576040516313dd85ff60e31b815260040160405180910390fd5b505050565b61078581611408565b50565b61079989898989898989898961148b565b505050505050505050565b6107b2868686868686611682565b505050505050565b6107c78484848433611736565b50505050565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261084d91016104cf565b9392505050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b90565b604080516012602082015260009161089491016104cf565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526108e291016104cf565b92915050565b60006108e2826118f7565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611a7b565b8361094181611b79565b6001600160a01b0316336001600160a01b03161461097257604051632aab8bd360e01b815260040160405180910390fd5b61097e85858585611c36565b5050505050565b6109fe604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610a08611ca3565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610a739190613ba3565b610a7d9190613bb6565b90506000808311610a8f576000610aaa565b610aaa83610aa4610a9f86611d3b565b611ed1565b90611f01565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610b7e57610b798486611f16565b610b81565b60005b81526002546001600160801b0316602091820152604051919250610bab916104cf91849101613756565b5050505090565b610bbc8282611f2b565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b61077783838333611c36565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61078581611fb4565b610c75613318565b6108946040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf919061385d565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff811115610f3257610f32613bc9565b604051908082528060200260200182016040528015610f5b578160200160208202803683370190505b50905060005b83811015610fb4576000858583818110610f7d57610f7d613bdf565b90506020020135905060008154905080848481518110610f9f57610f9f613bdf565b60209081029190910101525050600101610f61565b50610fc9816040516020016104cf919061397c565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b60006108946009546040516020016104cf91815260200190565b60006104e361106161105c7f000000000000000000000000000000000000000000000000000000000000000085613ba3565b612028565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261089460016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461118981611b79565b6001600160a01b0316336001600160a01b0316146111ba57604051632aab8bd360e01b815260040160405180910390fd5b6107b28686868686611736565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916108e291016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610894906060016104cf565b606060f882901c6001600160f81b03831660006112868261206c565b9050600083600381111561129c5761129c613b77565b036112ce576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061138a565b60018360038111156112e2576112e2613b77565b0361130e57806040516020016112f89190613bf5565b604051602081830303815290604052935061138a565b600283600381111561132257611322613b77565b0361133857806040516020016112f89190613c2e565b600383600381111561134c5761134c613b77565b0361138a576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016113ad9190613431565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610777908490612121565b336000908152600a602052604090205460ff16611437576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061148090831515815260200190565b60405180910390a150565b834211156114ac5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114d35760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156115c1573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146115ff57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600f6020908152604080832080546001019055600d8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061169f57506001600160a01b038516155b156116bd5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116dd5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561172d576117258585838181106116fd576116fd613bdf565b90506020020135888886868681811061171857611718613bdf565b9050602002013533611736565b6001016116e0565b50505050505050565b6001600160a01b038416158061175357506001600160a01b038316155b156117715760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611835576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611835576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611833576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061182d908490613bb6565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611867908490613bb6565b90915550506000858152600b602090815260408083206001600160a01b03871684529091528120805484929061189e908490613ba3565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611901612184565b61190a826121ae565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166119416020840184613459565b6001600160a01b03161461196857604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156119b15750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b80156119c857506008546001600160a01b03163314155b156119e5576040516282b42960e81b815260040160405180910390fd5b60006119ef611ca3565b600980546000909155909150611a068183866121e4565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611a5e858588612377565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611a978261206c565b90506000836003811115611aad57611aad613b77565b03611adf576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061138a565b6001836003811115611af357611af3613b77565b03611b0957806040516020016112f89190613c68565b6002836003811115611b1d57611b1d613b77565b03611b3357806040516020016112f89190613ca0565b6003836003811115611b4757611b47613b77565b0361138a57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b604051630f451f7160e31b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015611d12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d369190613b5e565b905090565b611d9f6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611e9791166123a6565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611ec9929004166123a6565b905292915050565b6000806000611edf8461241c565b9150915080610fc957604051635516328b60e11b815260040160405180910390fd5b600061084d8383670de0b6b3a76400006124a9565b600061084d83670de0b6b3a7640000846124a9565b6008546001600160a01b03163314611f55576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6008546001600160a01b03163314611fde576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000612050600c600061203c6002866124c7565b8152602001908152602001600020546124fc565b612062600c600061203c6001876124c7565b6108e29190613ccc565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415612113576120a7600a86613d02565b6120b2906030613ba3565b60f81b8260016120c28487613bb6565b6120cc9190613bb6565b815181106120dc576120dc613bdf565b60200101906001600160f81b031916908160001a905350806120fd81613d16565b915061210c9050600a86613d2f565b9450612096565b918290030190815292915050565b60006121366001600160a01b0384168361252a565b9050805160001415801561215b5750808060200190518101906121599190613d43565b155b1561077757604051635274afe760e01b81526001600160a01b03841660048201526024016113ad565b6002600054036121a757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006121bd6020830183613459565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b60006121f66040830160208401613484565b156122145760405163350b944160e11b815260040160405180910390fd5b60006122208585611f01565b604051631920845160e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401602060405180830381865afa158015612288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ac9190613b5e565b9450846000036122c057600091505061084d565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638fcb4e5b6122fc6020860186613459565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018890526044016020604051808303816000875af1158015612349573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236d9190613b5e565b5093949350505050565b60006123896040830160208401613484565b1561239557508261084d565b61239f8484611f01565b905061084d565b600080670de0b6b3a76400006123ba612538565b6123c49190613d60565b90508083116123d45760006123de565b6123de8184613bb6565b915061084d612415670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d60565b8390611f16565b600080600080600061242d8661256e565b915091508061244457506000958695509350505050565b6124518660a001516124fc565b61245a87612893565b8361246889600001516124fc565b6124729190613d77565b61247c9190613d77565b6124869190613ccc565b92505050600081121561249f5750600093849350915050565b9360019350915050565b60008260001904841183021582026124c057600080fd5b5091020490565b60006001600160f81b038211156124f15760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156125265760405163396ea70160e11b815260040160405180910390fd5b5090565b606061084d838360006128f7565b60006125647f000000000000000000000000000000000000000000000000000000000000000042613d02565b611d369042613bb6565b6000806000612598612593856101600151866101400151611f0190919063ffffffff16565b6124fc565b6125b861259386610120015187610100015161299490919063ffffffff16565b6125c29190613ccc565b905060006125d8856000015186602001516129a9565b9050600082131561272b576000829050600080612629886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061261a9190613bb6565b8d606001518e608001516129d5565b9150915080612642575060009788975095505050505050565b8282106126e057600061267c858a60400151868c60e00151670de0b6b3a764000061266d9190613bb6565b8d606001518e60800151612ace565b925090508115801561269157508860c0015184105b156126a85750600098600198509650505050505050565b816126be57506000988998509650505050505050565b6126c7816124fc565b6126d090613d97565b9960019950975050505050505050565b6000886020015112612717576126ff8860a00151856125939190613bb6565b61270890613d97565b98600198509650505050505050565b60a088015188516126ff9161259391613bb6565b600082121561288557600061273f83613d97565b90506000806127748489604001518a60e00151670de0b6b3a76400006127659190613bb6565b8b606001518c60800151612b91565b915091508061278d575060009788975095505050505050565b8282106128125760006127c7858a60400151868c60e00151670de0b6b3a76400006127b89190613bb6565b8d606001518e60800151612c3d565b92509050811580156127dc57508860c0015184105b156127f35750600098600198509650505050505050565b8161280957506000988998509650505050505050565b6126d0816124fc565b6000612844858a604001518b60e00151670de0b6b3a76400006128359190613bb6565b8c606001518d60800151612d14565b925090508161285e57506000988998509650505050505050565b6126d061287b8a6060015185876128759190613bb6565b90611f16565b6125939083613ba3565b506000946001945092505050565b60006128c6612593836101200151670de0b6b3a76400006128b49190613bb6565b60608501516101008601519190612dc3565b612062612593846101600151670de0b6b3a76400006128e59190613bb6565b606086015161014087015191906124a9565b60608147101561291c5760405163cd78605960e01b81523060048201526024016113ad565b600080856001600160a01b031684866040516129389190613db3565b60006040518083038185875af1925050503d8060008114612975576040519150601f19603f3d011682016040523d82523d6000602084013e61297a565b606091505b509150915061298a868383612de9565b9695505050505050565b600061084d8383670de0b6b3a7640000612dc3565b600080826129b6856124fc565b6129c09190613ccc565b9050600081121561084d5761084d6001612e45565b60008060008812156129f7576129ea88613d97565b6129f49087613ba3565b95505b6000612a038a8a6129a9565b90506000612a14828a898989612e60565b90506000612a37612a2f89612a29898d612994565b90612e8f565b889088612dc3565b905080821015612a505760008094509450505050612ac2565b808203670de0b6b3a76400008110612a8557612a7e612a77670de0b6b3a76400008b611f16565b8290612e8f565b9050612a9d565b612a9a612a77670de0b6b3a76400008b612efa565b90505b8a811015612ab5576000809550955050505050612ac2565b8a90039450600193505050505b97509795505050505050565b6000806000612ae08989888888612f0f565b9050612af086612a29898b613ba3565b975087811015612b07576000809250925050612b86565b878103612b15818688612dc3565b9050670de0b6b3a76400008110612b4257612b3b612a77670de0b6b3a764000089612efa565b9050612b5a565b612b57612a77670de0b6b3a764000089611f16565b90505b612b648186612efa565b9050808a1015612b7c57600080935093505050612b86565b8903925060019150505b965096945050505050565b6000806000612ba38888888888612f0f565b90506000612bce670de0b6b3a7640000612bbd8888611f16565b612bc79190613ba3565b8390612efa565b9050670de0b6b3a76400008110612bfb57612bf4612a77670de0b6b3a764000089612efa565b9050612c13565b612c10612a77670de0b6b3a764000089611f16565b90505b80881015612c2957600080935093505050612c33565b8703925060019150505b9550959350505050565b6000806000612c4f8989888888612f0f565b905086881015612c66576000809250925050612b86565b9686900396612c758887612e8f565b975087811015612c8c576000809250925050612b86565b878103612c9a818688612dc3565b9050670de0b6b3a76400008110612cc757612cc0612a77670de0b6b3a764000089612efa565b9050612cdf565b612cdc612a77670de0b6b3a764000089611f16565b90505b612ce98186612efa565b905089811015612d0157600080935093505050612b86565b9890980398600198509650505050505050565b6000806000612d268888888888612e60565b90506000612d4a670de0b6b3a7640000612d408888612efa565b6124159190613ba3565b9050670de0b6b3a76400008110612d7757612d70612a77670de0b6b3a764000089611f16565b9050612d8f565b612d8c612a77670de0b6b3a764000089612efa565b90505b612d998186611f16565b905088811015612db157600080935093505050612c33565b97909703976001975095505050505050565b6000826000190484118302158202612dda57600080fd5b50910281810615159190040190565b606082612dfe57612df982612f34565b61084d565b8151158015612e1557506001600160a01b0384163b155b15612e3e57604051639996b31560e01b81526001600160a01b03851660048201526024016113ad565b508061084d565b80604051633c06d78b60e11b81526004016113ad9190613dcf565b6000612e6c8585612e8f565b612e85612e7d86612a29868b611f01565b8590856124a9565b61298a9190613ba3565b600081600003612ea85750670de0b6b3a76400006108e2565b82600003612eb8575060006108e2565b6000612ec3836124fc565b90506000612ed8612ed3866124fc565b612f5d565b9050818102612eef670de0b6b3a764000082613df7565b905061298a81613183565b600061084d83670de0b6b3a764000084612dc3565b6000612f1b8585612e8f565b612e85612f2c86612a29868b612994565b859085612dc3565b805115612f445780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000808213612f7f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130029084901c6124fc565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361319e57506000919050565b680755bf798b4a1bf1e582126131c7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061298a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6124fc565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016133c36040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156133da57600080fd5b5035919050565b60005b838110156133fc5781810151838201526020016133e4565b50506000910152565b6000815180845261341d8160208601602086016133e1565b601f01601f19169290920160200192915050565b60208152600061084d6020830184613405565b6001600160a01b038116811461078557600080fd5b60006020828403121561346b57600080fd5b813561084d81613444565b801515811461078557600080fd5b60006020828403121561349657600080fd5b813561084d81613476565b60008060008060008060008060006101208a8c0312156134c057600080fd5b8935985060208a0135975060408a01356134d981613444565b965060608a01356134e981613444565b955060808a01356134f981613476565b945060a08a0135935060c08a013560ff8116811461351657600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261354857600080fd5b50813567ffffffffffffffff81111561356057600080fd5b6020830191508360208260051b850101111561357b57600080fd5b9250929050565b6000806000806000806080878903121561359b57600080fd5b86356135a681613444565b955060208701356135b681613444565b9450604087013567ffffffffffffffff808211156135d357600080fd5b6135df8a838b01613536565b909650945060608901359150808211156135f857600080fd5b5061360589828a01613536565b979a9699509497509295939492505050565b6000806000806080858703121561362d57600080fd5b84359350602085013561363f81613444565b9250604085013561364f81613444565b9396929550929360600135925050565b60008060006060848603121561367457600080fd5b83359250602084013561368681613444565b9150604084013561369681613444565b809150509250925092565b600080604083850312156136b457600080fd5b8235915060208301356136c681613444565b809150509250929050565b6000602082840312156136e357600080fd5b813567ffffffffffffffff8111156136fa57600080fd5b82016060818503121561084d57600080fd5b6000806000806080858703121561372257600080fd5b84359350602085013561373481613444565b925060408501359150606085013561374b81613444565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561380a57600080fd5b823561381581613444565b915060208301356136c681613476565b60008060006060848603121561383a57600080fd5b83359250602084013561384c81613444565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161388960208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516138ed828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561394d57600080fd5b823567ffffffffffffffff81111561396457600080fd5b61397085828601613536565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156139b457835183529284019291840191600101613998565b50909695505050505050565b81516001600160801b03168152610180810160208301516139ec60208401826001600160801b03169052565b506040830151613a0760408401826001600160801b03169052565b506060830151613a2260608401826001600160801b03169052565b506080830151613a376080840182600f0b9052565b5060a0830151613a5260a08401826001600160801b03169052565b5060c0830151613a6d60c08401826001600160801b03169052565b5060e0830151613a8860e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613932565b600080600080600060a08688031215613ae957600080fd5b853594506020860135613afb81613444565b93506040860135613b0b81613444565b9250606086013591506080860135613b2281613444565b809150509295509295909350565b60008060408385031215613b4357600080fd5b8235613b4e81613444565b915060208301356136c681613444565b600060208284031215613b7057600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156108e2576108e2613b8d565b818103818111156108e2576108e2613b8d565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613c218160118501602087016133e1565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613c5b8160128501602087016133e1565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613c938160108501602087016133e1565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613c218160118501602087016133e1565b8181036000831280158383131683831282161715610fc957610fc9613b8d565b634e487b7160e01b600052601260045260246000fd5b600082613d1157613d11613cec565b500690565b600060018201613d2857613d28613b8d565b5060010190565b600082613d3e57613d3e613cec565b500490565b600060208284031215613d5557600080fd5b815161084d81613476565b80820281158282048414176108e2576108e2613b8d565b808201828112600083128015821682158216171561393257613932613b8d565b6000600160ff1b8201613dac57613dac613b8d565b5060000390565b60008251613dc58184602087016133e1565b9190910192915050565b6020810160048310613df157634e487b7160e01b600052602160045260246000fd5b91905290565b600082613e0657613e06613cec565b600160ff1b821460001984141615613e2057613e20613b8d565b50059056fea264697066735822122083dba66150819306f37747e9085e1d2f7cb06b9c88660d859151b60f6fc279b364736f6c63430008140033",
        "sourceMap": "924:2149:32:-:0;;;1172:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:121;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1214:14:30;;;924:2149:32;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1373::-;1363:6;1371;1415:9;1406:7;1402:23;1445:3;1441:2;1437:12;1434:32;;;1462:1;1459;1452:12;1434:32;1485:6;1511:2;1507;1503:11;1500:31;;;1527:1;1524;1517:12;1500:31;1553:17;;:::i;:::-;1540:30;;1593:48;1631:9;1593:48;:::i;:::-;1586:5;1579:63;1674:57;1727:2;1716:9;1712:18;1674:57;:::i;:::-;1669:2;1662:5;1658:14;1651:81;1785:2;1774:9;1770:18;1764:25;1759:2;1752:5;1748:14;1741:49;1843:2;1832:9;1828:18;1822:25;1817:2;1810:5;1806:14;1799:49;1902:3;1891:9;1887:19;1881:26;1875:3;1868:5;1864:15;1857:51;1962:3;1951:9;1947:19;1941:26;1935:3;1928:5;1924:15;1917:51;2022:3;2011:9;2007:19;2001:26;1995:3;1988:5;1984:15;1977:51;2082:3;2071:9;2067:19;2061:26;2055:3;2048:5;2044:15;2037:51;2107:3;2163:2;2152:9;2148:18;2142:25;2137:2;2130:5;2126:14;2119:49;;2187:3;2222:57;2275:2;2264:9;2260:18;2222:57;:::i;:::-;2206:14;;;2199:81;2299:3;2334:57;2372:18;;;2334:57;:::i;:::-;2318:14;;;2311:81;2411:3;2446:62;2500:7;2480:18;;;2446:62;:::i;:::-;2441:2;2434:5;2430:14;2423:86;;2528:5;2518:15;;2552:57;2605:2;2594:9;2590:18;2552:57;:::i;:::-;2542:67;;;;1242:1373;;;;;:::o;:::-;924:2149:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101e45760003560e01c806360246c881161010f578063becee9c3116100a2578063d816574311610071578063d816574314610447578063e44808bc1461045c578063e985e9c51461046f578063fba560081461048257600080fd5b8063becee9c314610404578063c55dae6314610424578063c69e16ad1461042c578063cf210e651461043457600080fd5b8063a22cb465116100de578063a22cb465146103b6578063ab033ea9146103c9578063b0d96580146103dc578063bd85b039146103f157600080fd5b806360246c88146103685780637180c8ca1461037d5780637ecebe00146103905780639cd241af146103a357600080fd5b806321ff32a9116101875780633e691db9116101565780633e691db91461030c57806346fbf68e1461031f5780634e41a1fb146103425780634ed2d6ac1461035557600080fd5b806321ff32a91461029e57806323509a2d146102bf578063313ce567146102df5780633656eec2146102f957600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f73660046133c8565b6104b1565b6040516102099190613431565b60405180910390f35b610225610220366004613459565b6104e8565b005b610225610235366004613484565b61077c565b6102256102483660046134a1565b610788565b61022561025b366004613582565b6107a4565b61022561026e366004613617565b6107ba565b6102866102813660046133c8565b6107cd565b60405190516001600160801b03168152602001610209565b6102b16102ac36600461365f565b61080e565b604051908152602001610209565b6102c7610854565b6040516001600160a01b039091168152602001610209565b6102e7610897565b60405160ff9091168152602001610209565b6102b16103073660046136a1565b6108af565b6102b161031a3660046136d1565b6108e8565b61033261032d366004613459565b6108f3565b6040519015158152602001610209565b6101fc6103503660046133c8565b610929565b61022561036336600461370c565b610937565b610370610985565b6040516102099190613756565b61022561038b3660046137f7565b610bb2565b6102b161039e366004613459565b610bc0565b6102256103b1366004613825565b610bec565b6102256103c43660046137f7565b610bf8565b6102256103d7366004613459565b610c64565b6103e4610c6d565b604051610209919061385d565b6102b16103ff3660046133c8565b610ef3565b61041761041236600461393a565b610f15565b604051610209919061397c565b6102c7610fd0565b6102b1611010565b6102b16104423660046133c8565b61102a565b61044f611073565b60405161020991906139c0565b61022561046a366004613ad1565b61117f565b61033261047d366004613b30565b6111c7565b61048a61120b565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b60606104e36104bf8361126a565b6040516020016104cf9190613431565b604051602081830303815290604052611392565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316036105a05760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062b9190613b5e565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610675573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106999190613b5e565b90506106cf6001600160a01b0384167f0000000000000000000000000000000000000000000000000000000000000000836113b6565b6040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610735573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107599190613b5e565b14610777576040516313dd85ff60e31b815260040160405180910390fd5b505050565b61078581611408565b50565b61079989898989898989898961148b565b505050505050505050565b6107b2868686868686611682565b505050505050565b6107c78484848433611736565b50505050565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261084d91016104cf565b9392505050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b90565b604080516012602082015260009161089491016104cf565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526108e291016104cf565b92915050565b60006108e2826118f7565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611a7b565b8361094181611b79565b6001600160a01b0316336001600160a01b03161461097257604051632aab8bd360e01b815260040160405180910390fd5b61097e85858585611c36565b5050505050565b6109fe604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610a08611ca3565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610a739190613ba3565b610a7d9190613bb6565b90506000808311610a8f576000610aaa565b610aaa83610aa4610a9f86611d3b565b611ed1565b90611f01565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610b7e57610b798486611f16565b610b81565b60005b81526002546001600160801b0316602091820152604051919250610bab916104cf91849101613756565b5050505090565b610bbc8282611f2b565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b61077783838333611c36565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61078581611fb4565b610c75613318565b6108946040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf919061385d565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff811115610f3257610f32613bc9565b604051908082528060200260200182016040528015610f5b578160200160208202803683370190505b50905060005b83811015610fb4576000858583818110610f7d57610f7d613bdf565b90506020020135905060008154905080848481518110610f9f57610f9f613bdf565b60209081029190910101525050600101610f61565b50610fc9816040516020016104cf919061397c565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161089491016104cf565b60006108946009546040516020016104cf91815260200190565b60006104e361106161105c7f000000000000000000000000000000000000000000000000000000000000000085613ba3565b612028565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261089460016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461118981611b79565b6001600160a01b0316336001600160a01b0316146111ba57604051632aab8bd360e01b815260040160405180910390fd5b6107b28686868686611736565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916108e291016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610894906060016104cf565b606060f882901c6001600160f81b03831660006112868261206c565b9050600083600381111561129c5761129c613b77565b036112ce576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061138a565b60018360038111156112e2576112e2613b77565b0361130e57806040516020016112f89190613bf5565b604051602081830303815290604052935061138a565b600283600381111561132257611322613b77565b0361133857806040516020016112f89190613c2e565b600383600381111561134c5761134c613b77565b0361138a576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016113ad9190613431565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610777908490612121565b336000908152600a602052604090205460ff16611437576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061148090831515815260200190565b60405180910390a150565b834211156114ac5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114d35760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156115c1573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146115ff57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600f6020908152604080832080546001019055600d8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061169f57506001600160a01b038516155b156116bd5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116dd5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561172d576117258585838181106116fd576116fd613bdf565b90506020020135888886868681811061171857611718613bdf565b9050602002013533611736565b6001016116e0565b50505050505050565b6001600160a01b038416158061175357506001600160a01b038316155b156117715760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611835576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611835576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611833576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061182d908490613bb6565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611867908490613bb6565b90915550506000858152600b602090815260408083206001600160a01b03871684529091528120805484929061189e908490613ba3565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611901612184565b61190a826121ae565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166119416020840184613459565b6001600160a01b03161461196857604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156119b15750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b80156119c857506008546001600160a01b03163314155b156119e5576040516282b42960e81b815260040160405180910390fd5b60006119ef611ca3565b600980546000909155909150611a068183866121e4565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611a5e858588612377565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611a978261206c565b90506000836003811115611aad57611aad613b77565b03611adf576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061138a565b6001836003811115611af357611af3613b77565b03611b0957806040516020016112f89190613c68565b6002836003811115611b1d57611b1d613b77565b03611b3357806040516020016112f89190613ca0565b6003836003811115611b4757611b47613b77565b0361138a57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b604051630f451f7160e31b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015611d12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d369190613b5e565b905090565b611d9f6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611e9791166123a6565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611ec9929004166123a6565b905292915050565b6000806000611edf8461241c565b9150915080610fc957604051635516328b60e11b815260040160405180910390fd5b600061084d8383670de0b6b3a76400006124a9565b600061084d83670de0b6b3a7640000846124a9565b6008546001600160a01b03163314611f55576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6008546001600160a01b03163314611fde576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000612050600c600061203c6002866124c7565b8152602001908152602001600020546124fc565b612062600c600061203c6001876124c7565b6108e29190613ccc565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415612113576120a7600a86613d02565b6120b2906030613ba3565b60f81b8260016120c28487613bb6565b6120cc9190613bb6565b815181106120dc576120dc613bdf565b60200101906001600160f81b031916908160001a905350806120fd81613d16565b915061210c9050600a86613d2f565b9450612096565b918290030190815292915050565b60006121366001600160a01b0384168361252a565b9050805160001415801561215b5750808060200190518101906121599190613d43565b155b1561077757604051635274afe760e01b81526001600160a01b03841660048201526024016113ad565b6002600054036121a757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006121bd6020830183613459565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b60006121f66040830160208401613484565b156122145760405163350b944160e11b815260040160405180910390fd5b60006122208585611f01565b604051631920845160e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401602060405180830381865afa158015612288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ac9190613b5e565b9450846000036122c057600091505061084d565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638fcb4e5b6122fc6020860186613459565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018890526044016020604051808303816000875af1158015612349573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236d9190613b5e565b5093949350505050565b60006123896040830160208401613484565b1561239557508261084d565b61239f8484611f01565b905061084d565b600080670de0b6b3a76400006123ba612538565b6123c49190613d60565b90508083116123d45760006123de565b6123de8184613bb6565b915061084d612415670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d60565b8390611f16565b600080600080600061242d8661256e565b915091508061244457506000958695509350505050565b6124518660a001516124fc565b61245a87612893565b8361246889600001516124fc565b6124729190613d77565b61247c9190613d77565b6124869190613ccc565b92505050600081121561249f5750600093849350915050565b9360019350915050565b60008260001904841183021582026124c057600080fd5b5091020490565b60006001600160f81b038211156124f15760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156125265760405163396ea70160e11b815260040160405180910390fd5b5090565b606061084d838360006128f7565b60006125647f000000000000000000000000000000000000000000000000000000000000000042613d02565b611d369042613bb6565b6000806000612598612593856101600151866101400151611f0190919063ffffffff16565b6124fc565b6125b861259386610120015187610100015161299490919063ffffffff16565b6125c29190613ccc565b905060006125d8856000015186602001516129a9565b9050600082131561272b576000829050600080612629886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061261a9190613bb6565b8d606001518e608001516129d5565b9150915080612642575060009788975095505050505050565b8282106126e057600061267c858a60400151868c60e00151670de0b6b3a764000061266d9190613bb6565b8d606001518e60800151612ace565b925090508115801561269157508860c0015184105b156126a85750600098600198509650505050505050565b816126be57506000988998509650505050505050565b6126c7816124fc565b6126d090613d97565b9960019950975050505050505050565b6000886020015112612717576126ff8860a00151856125939190613bb6565b61270890613d97565b98600198509650505050505050565b60a088015188516126ff9161259391613bb6565b600082121561288557600061273f83613d97565b90506000806127748489604001518a60e00151670de0b6b3a76400006127659190613bb6565b8b606001518c60800151612b91565b915091508061278d575060009788975095505050505050565b8282106128125760006127c7858a60400151868c60e00151670de0b6b3a76400006127b89190613bb6565b8d606001518e60800151612c3d565b92509050811580156127dc57508860c0015184105b156127f35750600098600198509650505050505050565b8161280957506000988998509650505050505050565b6126d0816124fc565b6000612844858a604001518b60e00151670de0b6b3a76400006128359190613bb6565b8c606001518d60800151612d14565b925090508161285e57506000988998509650505050505050565b6126d061287b8a6060015185876128759190613bb6565b90611f16565b6125939083613ba3565b506000946001945092505050565b60006128c6612593836101200151670de0b6b3a76400006128b49190613bb6565b60608501516101008601519190612dc3565b612062612593846101600151670de0b6b3a76400006128e59190613bb6565b606086015161014087015191906124a9565b60608147101561291c5760405163cd78605960e01b81523060048201526024016113ad565b600080856001600160a01b031684866040516129389190613db3565b60006040518083038185875af1925050503d8060008114612975576040519150601f19603f3d011682016040523d82523d6000602084013e61297a565b606091505b509150915061298a868383612de9565b9695505050505050565b600061084d8383670de0b6b3a7640000612dc3565b600080826129b6856124fc565b6129c09190613ccc565b9050600081121561084d5761084d6001612e45565b60008060008812156129f7576129ea88613d97565b6129f49087613ba3565b95505b6000612a038a8a6129a9565b90506000612a14828a898989612e60565b90506000612a37612a2f89612a29898d612994565b90612e8f565b889088612dc3565b905080821015612a505760008094509450505050612ac2565b808203670de0b6b3a76400008110612a8557612a7e612a77670de0b6b3a76400008b611f16565b8290612e8f565b9050612a9d565b612a9a612a77670de0b6b3a76400008b612efa565b90505b8a811015612ab5576000809550955050505050612ac2565b8a90039450600193505050505b97509795505050505050565b6000806000612ae08989888888612f0f565b9050612af086612a29898b613ba3565b975087811015612b07576000809250925050612b86565b878103612b15818688612dc3565b9050670de0b6b3a76400008110612b4257612b3b612a77670de0b6b3a764000089612efa565b9050612b5a565b612b57612a77670de0b6b3a764000089611f16565b90505b612b648186612efa565b9050808a1015612b7c57600080935093505050612b86565b8903925060019150505b965096945050505050565b6000806000612ba38888888888612f0f565b90506000612bce670de0b6b3a7640000612bbd8888611f16565b612bc79190613ba3565b8390612efa565b9050670de0b6b3a76400008110612bfb57612bf4612a77670de0b6b3a764000089612efa565b9050612c13565b612c10612a77670de0b6b3a764000089611f16565b90505b80881015612c2957600080935093505050612c33565b8703925060019150505b9550959350505050565b6000806000612c4f8989888888612f0f565b905086881015612c66576000809250925050612b86565b9686900396612c758887612e8f565b975087811015612c8c576000809250925050612b86565b878103612c9a818688612dc3565b9050670de0b6b3a76400008110612cc757612cc0612a77670de0b6b3a764000089612efa565b9050612cdf565b612cdc612a77670de0b6b3a764000089611f16565b90505b612ce98186612efa565b905089811015612d0157600080935093505050612b86565b9890980398600198509650505050505050565b6000806000612d268888888888612e60565b90506000612d4a670de0b6b3a7640000612d408888612efa565b6124159190613ba3565b9050670de0b6b3a76400008110612d7757612d70612a77670de0b6b3a764000089611f16565b9050612d8f565b612d8c612a77670de0b6b3a764000089612efa565b90505b612d998186611f16565b905088811015612db157600080935093505050612c33565b97909703976001975095505050505050565b6000826000190484118302158202612dda57600080fd5b50910281810615159190040190565b606082612dfe57612df982612f34565b61084d565b8151158015612e1557506001600160a01b0384163b155b15612e3e57604051639996b31560e01b81526001600160a01b03851660048201526024016113ad565b508061084d565b80604051633c06d78b60e11b81526004016113ad9190613dcf565b6000612e6c8585612e8f565b612e85612e7d86612a29868b611f01565b8590856124a9565b61298a9190613ba3565b600081600003612ea85750670de0b6b3a76400006108e2565b82600003612eb8575060006108e2565b6000612ec3836124fc565b90506000612ed8612ed3866124fc565b612f5d565b9050818102612eef670de0b6b3a764000082613df7565b905061298a81613183565b600061084d83670de0b6b3a764000084612dc3565b6000612f1b8585612e8f565b612e85612f2c86612a29868b612994565b859085612dc3565b805115612f445780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000808213612f7f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130029084901c6124fc565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361319e57506000919050565b680755bf798b4a1bf1e582126131c7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061298a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6124fc565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016133c36040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156133da57600080fd5b5035919050565b60005b838110156133fc5781810151838201526020016133e4565b50506000910152565b6000815180845261341d8160208601602086016133e1565b601f01601f19169290920160200192915050565b60208152600061084d6020830184613405565b6001600160a01b038116811461078557600080fd5b60006020828403121561346b57600080fd5b813561084d81613444565b801515811461078557600080fd5b60006020828403121561349657600080fd5b813561084d81613476565b60008060008060008060008060006101208a8c0312156134c057600080fd5b8935985060208a0135975060408a01356134d981613444565b965060608a01356134e981613444565b955060808a01356134f981613476565b945060a08a0135935060c08a013560ff8116811461351657600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261354857600080fd5b50813567ffffffffffffffff81111561356057600080fd5b6020830191508360208260051b850101111561357b57600080fd5b9250929050565b6000806000806000806080878903121561359b57600080fd5b86356135a681613444565b955060208701356135b681613444565b9450604087013567ffffffffffffffff808211156135d357600080fd5b6135df8a838b01613536565b909650945060608901359150808211156135f857600080fd5b5061360589828a01613536565b979a9699509497509295939492505050565b6000806000806080858703121561362d57600080fd5b84359350602085013561363f81613444565b9250604085013561364f81613444565b9396929550929360600135925050565b60008060006060848603121561367457600080fd5b83359250602084013561368681613444565b9150604084013561369681613444565b809150509250925092565b600080604083850312156136b457600080fd5b8235915060208301356136c681613444565b809150509250929050565b6000602082840312156136e357600080fd5b813567ffffffffffffffff8111156136fa57600080fd5b82016060818503121561084d57600080fd5b6000806000806080858703121561372257600080fd5b84359350602085013561373481613444565b925060408501359150606085013561374b81613444565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561380a57600080fd5b823561381581613444565b915060208301356136c681613476565b60008060006060848603121561383a57600080fd5b83359250602084013561384c81613444565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161388960208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516138ed828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561394d57600080fd5b823567ffffffffffffffff81111561396457600080fd5b61397085828601613536565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156139b457835183529284019291840191600101613998565b50909695505050505050565b81516001600160801b03168152610180810160208301516139ec60208401826001600160801b03169052565b506040830151613a0760408401826001600160801b03169052565b506060830151613a2260608401826001600160801b03169052565b506080830151613a376080840182600f0b9052565b5060a0830151613a5260a08401826001600160801b03169052565b5060c0830151613a6d60c08401826001600160801b03169052565b5060e0830151613a8860e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613932565b600080600080600060a08688031215613ae957600080fd5b853594506020860135613afb81613444565b93506040860135613b0b81613444565b9250606086013591506080860135613b2281613444565b809150509295509295909350565b60008060408385031215613b4357600080fd5b8235613b4e81613444565b915060208301356136c681613444565b600060208284031215613b7057600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156108e2576108e2613b8d565b818103818111156108e2576108e2613b8d565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613c218160118501602087016133e1565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613c5b8160128501602087016133e1565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613c938160108501602087016133e1565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613c218160118501602087016133e1565b8181036000831280158383131683831282161715610fc957610fc9613b8d565b634e487b7160e01b600052601260045260246000fd5b600082613d1157613d11613cec565b500690565b600060018201613d2857613d28613b8d565b5060010190565b600082613d3e57613d3e613cec565b500490565b600060208284031215613d5557600080fd5b815161084d81613476565b80820281158282048414176108e2576108e2613b8d565b808201828112600083128015821682158216171561393257613932613b8d565b6000600160ff1b8201613dac57613dac613b8d565b5060000390565b60008251613dc58184602087016133e1565b9190910192915050565b6020810160048310613df157634e487b7160e01b600052602160045260246000fd5b91905290565b600082613e0657613e06613cec565b600160ff1b821460001984141615613e2057613e20613b8d565b50059056fea264697066735822122083dba66150819306f37747e9085e1d2f7cb06b9c88660d859151b60f6fc279b364736f6c63430008140033",
        "sourceMap": "924:2149:32:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16149:137:16;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1734:932:32;;;;;;:::i;:::-;;:::i;:::-;;2302:70:16;;;;;;:::i;:::-;;:::i;7775:482::-;;;;;;:::i;:::-;;:::i;6230:209::-;;;;;;:::i;:::-;;:::i;3163:240::-;;;;;;:::i;:::-;;:::i;8851:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5135:13:182;;-1:-1:-1;;;;;5131:54:182;5113:73;;5101:2;5086:18;8851:183:16;4911:281:182;15510:223:16;;;;;;:::i;:::-;;:::i;:::-;;;5820:25:182;;;5808:2;5793:18;15510:223:16;5674:177:182;2776:89:32;;;:::i;:::-;;;-1:-1:-1;;;;;6150:32:182;;;6132:51;;6120:2;6105:18;2776:89:32;5972:217:182;2965:106:32;;;:::i;:::-;;;6366:4:182;6354:17;;;6336:36;;6324:2;6309:18;2965:106:32;6194:184:182;14470:173:16;;;;;;:::i;:::-;;:::i;1976:174::-;;;;;;:::i;:::-;;:::i;8419:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7623:14:182;;7616:22;7598:41;;7586:2;7571:18;8419:121:16;7458:187:182;16409:141:16;;;;;;:::i;:::-;;:::i;4600:225::-;;;;;;:::i;:::-;;:::i;10861:1619::-;;;:::i;:::-;;;;;;;:::i;2735:94::-;;;;;;:::i;:::-;;:::i;16699:119::-;;;;;;:::i;:::-;;:::i;5764:179::-;;;;;;:::i;:::-;;:::i;5057:277::-;;;;;;:::i;:::-;;:::i;2482:83::-;;;;;;:::i;:::-;;:::i;9617:1075::-;;;:::i;:::-;;;;;;;:::i;14778:129::-;;;;;;:::i;:::-;;:::i;13735:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;8615:101::-;;;:::i;13124:132::-;;;:::i;9199:213::-;;;;;;:::i;:::-;;:::i;13335:159::-;;;:::i;:::-;;;;;;;:::i;3808:285::-;;;;;;:::i;:::-;;:::i;15096:186::-;;;;;;:::i;:::-;;:::i;12604:367::-;;;:::i;:::-;;;;16537:13:182;;-1:-1:-1;;;;;16533:22:182;;;16515:41;;16616:4;16604:17;;;16598:24;16594:33;16572:20;;;16565:63;;;;16435:18;12604:367:16;16256:378:182;16149:137:16;16203:13;16228:51;16247:30;16269:7;16247:21;:30::i;:::-;16236:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;16228:7;:51::i;:::-;16149:137;;;:::o;1734:932:32:-;1856:10;-1:-1:-1;;;;;1870:13:32;1856:27;;;;;:52;;-1:-1:-1;1897:10:32;1888:20;;;;:8;:20;;;;;;;;1887:21;1856:52;1852:116;;;1931:26;;-1:-1:-1;;;1931:26:32;;;;;;;;;;;1852:116;2067:5;-1:-1:-1;;;;;2039:34:32;2047:7;-1:-1:-1;;;;;2039:34:32;;2035:102;;2096:30;;-1:-1:-1;;;2096:30:32;;;;;;;;;;;2035:102;2241:30;;-1:-1:-1;;;2241:30:32;;2265:4;2241:30;;;6132:51:182;2218:20:32;;2241:5;-1:-1:-1;;;;;2241:15:32;;;;6105:18:182;;2241:30:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2381:32;;-1:-1:-1;;;2381:32:32;;2407:4;2381:32;;;6132:51:182;2218:53:32;;-1:-1:-1;2363:15:32;;-1:-1:-1;;;;;2381:17:32;;;;;6105:18:182;;2381:32:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2363:50;-1:-1:-1;2423:60:32;-1:-1:-1;;;;;2423:36:32;;2460:13;2363:50;2423:36;:60::i;:::-;2555:30;;-1:-1:-1;;;2555:30:32;;2579:4;2555:30;;;6132:51:182;2589:12:32;;2555:5;-1:-1:-1;;;;;2555:15:32;;;;6105:18:182;;2555:30:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:46;2551:109;;2624:25;;-1:-1:-1;;;2624:25:32;;;;;;;;;;;2551:109;1774:892;;1734:932;:::o;2302:70:16:-;2350:15;2357:7;2350:6;:15::i;:::-;2302:70;:::o;7775:482::-;8040:210;8067:15;8096:14;8124:5;8143:7;8164:9;8187:8;8209:1;8224;8239;8040:13;:210::i;:::-;7775:482;;;;;;;;;:::o;6230:209::-;6391:41;6410:4;6416:2;6420:3;;6425:6;;6391:18;:41::i;:::-;6230:209;;;;;;:::o;3163:240::-;3344:52;3358:7;3367:4;3373:2;3377:6;3385:10;3344:13;:52::i;:::-;3163:240;;;;:::o;8851:183::-;-1:-1:-1;;;;;;;;;;;;8977:50:16;8996:12;:29;9009:15;8996:29;;;;;;;;;;;8985:41;;;;;;17049:13:182;-1:-1:-1;;;;;17045:54:182;17027:73;;17015:2;17000:18;;16828:278;15510:223:16;15641:7;15679:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;15679:36:16;;;;;;;;;;;:45;;;;;;;;;;;15668:57;;;;;5820:25:182;15660:66:16;;5793:18:182;15668:57:16;5674:177:182;15660:66:16;15510:223;;;;;:::o;2776:89:32:-;2840:17;;;-1:-1:-1;;;;;2851:5:32;6150:32:182;2840:17:32;;;6132:51:182;2815:5:32;;2832:26;;6105:18:182;2840:17:32;5972:217:182;2832:26:32;2776:89;:::o;2965:106::-;3042:21;;;3059:2;3042:21;;;6336:36:182;3017:5:32;;3034:30;;6309:18:182;3042:21:32;6194:184:182;14470:173:16;14568:7;14606:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;14606:28:16;;;;;;;;;;14595:40;;;;;5820:25:182;14587:49:16;;5793:18:182;14595:40:16;5674:177:182;14587:49:16;14470:173;;;;:::o;1976:174::-;2077:16;2112:31;2134:8;2112:21;:31::i;8419:121::-;-1:-1:-1;;;;;8513:18:16;;8478:4;8513:18;;;:8;:18;;;;;;;;;8502:30;;8494:39;;8502:30;;8513:18;;;8502:30;7623:14:182;;7616:22;7598:41;;7586:2;7571:18;;7458:187;16409:141:16;16465:13;16490:53;16509:32;16533:7;16509:23;:32::i;4600:225::-;4752:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;4771:47:16::1;4784:7;4793:8;4803:6;4811;4771:12;:47::i;:::-;4600:225:::0;;;;;:::o;10861:1619::-;10907:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10907:27:16;10946:23;10972:21;:19;:21::i;:::-;11139:13;:29;11076:12;:48;;;;11003:21;11027:34;;;;;10946:47;;-1:-1:-1;11003:21:16;-1:-1:-1;;;;;11139:29:16;;;;11027:97;;11076:48;11027:97;:::i;:::-;:141;;;;:::i;:::-;11003:165;;11178:20;11219:1;11201:15;:19;:178;;11378:1;11201:178;;;11235:128;11347:15;11235:86;11281:39;11304:15;11281:22;:39::i;:::-;11235:45;:86::i;:::-;:111;;:128::i;:::-;11428:1006;;;;;;;;11478:12;:26;-1:-1:-1;;;;;11478:26:16;;;11428:1006;;11535:28;;;;;;11428:1006;;;;11597:31;;-1:-1:-1;;;;;11597:31:16;;;;11428:1006;;;;;;;-1:-1:-1;;;11663:32:16;;;;;;11428:1006;;;;11723:25;;;;;;11428:1006;;;;;;;;;;;;;;;;11535:28;11826:29;;;;;;11428:1006;;;;11597:31;11894:36;;;;11478:26;11428:1006;;;11963:30;;;;;;11428:1006;;;;12033:37;;;;;;11428:1006;;;;12279:13;:29;;;;11428:1006;;;;12348:22;;;;;;;11428:1006;;;;11178:201;;-1:-1:-1;11389:36:16;;11428:1006;;;12140:18;;:92;;12197:35;:12;12218:13;12197:20;:35::i;:::-;12140:92;;;12177:1;12140:92;11428:1006;;12398:25;;-1:-1:-1;;;;;12398:25:16;11428:1006;;;;;12452:20;;11389:1045;;-1:-1:-1;12444:29:16;;12452:20;;11389:1045;;12452:20;;:::i;12444:29::-;10936:1544;;;;10861:1619;:::o;2735:94::-;2799:23;2810:3;2815:6;2799:10;:23::i;:::-;2735:94;;:::o;16699:119::-;-1:-1:-1;;;;;16793:16:16;;16755:7;16793:16;;;:7;:16;;;;;;;;;16782:28;;;;;5820:25:182;16774:37:16;;5793:18:182;16782:28:16;5674:177:182;5764:179:16;5885:51;5898:7;5907:8;5917:6;5925:10;5885:12;:51::i;5057:277::-;5191:10;5173:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;5173:39:16;;;;;;;;;;;;:50;;-1:-1:-1;;5173:50:16;;;;;;;;;;5281:46;;7598:41:182;;;5173:39:16;;5191:10;5281:46;;7571:18:182;5281:46:16;;;;;;;5057:277;;:::o;2482:83::-;2538:20;2553:4;2538:14;:20::i;9617:1075::-;9689:29;;:::i;:::-;9734:951;9783:878;;;;;;;;9839:10;-1:-1:-1;;;;;9783:878:16;;;;;9886:14;-1:-1:-1;;;;;9783:878:16;;;;;9938:15;9783:878;;;;9999:23;9783:878;;;;10066:21;9783:878;;;;10135:25;9783:878;;;;10200:17;9783:878;;;;10259:19;9783:878;;;;10313:12;9783:878;;;;10359:11;;;;;;;;;-1:-1:-1;;;;;10359:11:16;-1:-1:-1;;;;;9783:878:16;;;;;10406:13;-1:-1:-1;;;;;9783:878:16;;;;;10447:195;;;;;;;;10489:9;10447:195;;;;10524:8;10447:195;;;;10558:16;10447:195;;;;10600:20;10447:195;;;9783:878;;;9755:920;;;;;;;;:::i;14778:129::-;14839:7;14877:21;;;:12;:21;;;;;;;;;14866:33;;;;;5820:25:182;14858:42:16;;5793:18:182;14866:33:16;5674:177:182;13735:565:16;13813:16;13841:23;13881:6;13867:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13867:28:16;;13841:54;;13967:9;13962:294;13982:17;;;13962:294;;;14017:12;14032:6;;14039:1;14032:9;;;;;;;:::i;:::-;;;;;;;14017:24;;14055:12;14138:4;14132:11;14124:19;;14182:4;14170:6;14177:1;14170:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;14228:3:16;;13962:294;;;;14266:27;14285:6;14274:18;;;;;;;;:::i;14266:27::-;13831:469;13735:565;;;;:::o;8615:101::-;8686:22;;;-1:-1:-1;;;;;8697:10:16;6150:32:182;8686:22:16;;;6132:51:182;8659:7:16;;8678:31;;6105:18:182;8686:22:16;5972:217:182;13124:132:16;13187:7;13206:43;13225:22;;13214:34;;;;;;5820:25:182;;5808:2;5793:18;;5674:177;9199:213:16;9292:6;9310:95;9342:52;9358:35;9376:17;9358:15;:35;:::i;:::-;9342:15;:52::i;:::-;9331:64;;;;;;5820:25:182;;5808:2;5793:18;;5674:177;13335:159:16;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13454:33:16;13473:12;13462:24;;;;;;;18344:13:182;;-1:-1:-1;;;;;18438:18:182;;;4841:59;;18487:3;18518:18;;;18553:4;18538:20;;4841:59;18605:4;18593:17;;18587:24;18639:20;;;18676:4;18661:20;;4841:59;18710:20;;18747:4;18732:20;;4841:59;18799:4;18787:17;;18781:24;18843:2;18832:27;;;18861:18;;;13331:34;18908:20;;18945:4;18930:20;;4841:59;18997:4;18985:17;;18979:24;19031:20;;;19068:4;19053:20;;4841:59;19102:20;;19139:4;19124:20;;4841:59;19191:4;19179:17;;;19173:24;19239:4;19222:22;;;7432:13;7425:21;19261:6;19246:22;;7413:34;19302:1;19298:19;;;19294:30;7432:13;7425:21;19341:6;19326:22;;7413:34;-1:-1:-1;;;;;19385:2:182;19381:20;;;19377:57;19451:6;19436:22;;13430:55;19487:20;;;19524:6;19509:22;;4841:59;18314:3;18299:19;;18125:1413;3808:285:16;3977:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;4038:48:16::1;4052:7;4061:4;4067:2;4071:6;4079;4038:13;:48::i;15096:186::-:0;-1:-1:-1;;;;;15237:26:16;;;15202:4;15237:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;15226:48;;15237:36;;;;7623:14:182;7616:22;15226:48:16;;;7598:41:182;;;;15202:4:16;;15218:57;;7571:18:182;15226:48:16;7458:187:182;12604:367:16;-1:-1:-1;;;;;;;;;;;;;;;;;12774:166:16;;;;;;;;12838:13;:29;-1:-1:-1;;;;;12838:29:16;;;12774:166;;;-1:-1:-1;;;12899:22:16;;;;;12774:166;;;;;;;12746:208;;;;;16515:41:182;;;;16598:24;;16594:33;16572:20;;;16565:63;;;;12725:239:16;;16435:18:182;;12746:208:16;16256:378:182;2533:693:71;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:71;2769:6;:26;;;;;;;;:::i;:::-;;2765:455;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:71;;;;;2765:455;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:369;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:369;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:239;;3084:10;3045:50;;;;;;;;:::i;2981:239::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:107;;3172:37;;;;;;;;;;;;;;;;;;;3113:107;2627:599;;;2533:693;;;:::o;17027:106:16:-;17119:6;17096:30;;-1:-1:-1;;;17096:30:16;;;;;;;;:::i;:::-;;;;;;;;1303:160:118;1412:43;;;-1:-1:-1;;;;;20867:32:182;;1412:43:118;;;20849:51:182;20916:18;;;;20909:34;;;1412:43:118;;;;;;;;;;20822:18:182;;;;1412:43:118;;;;;;;;-1:-1:-1;;;;;1412:43:118;-1:-1:-1;;;1412:43:118;;;1385:71;;1405:5;;1385:19;:71::i;2388:350:63:-;2522:10;2513:20;;;;:8;:20;;;;;;;;2508:85;;2556:26;;-1:-1:-1;;;2556:26:63;;;;;;;;;;;2508:85;2658:21;:31;;;;;;;-1:-1:-1;;2658:31:63;;;;;;2704:27;;;;;;2682:7;7623:14:182;7616:22;7598:41;;7586:2;7571:18;;7458:187;2704:27:63;;;;;;;;2388:350;:::o;8430:1543:68:-;8772:8;8754:15;:26;8750:93;;;8803:29;;-1:-1:-1;;;8803:29:68;;;;;;;;;;;8750:93;-1:-1:-1;;;;;8904:19:68;;8900:92;;8946:35;;-1:-1:-1;;;8946:35:68;;;;;;;;;;;8900:92;-1:-1:-1;;;;;9419:14:68;;;9074:18;9419:14;;;:7;:14;;;;;;;;;9244:245;;;;;21235:25:182;;;21314:18;;;21307:43;;;;21386:15;;;21366:18;;;21359:43;21445:14;;21438:22;21418:18;;;21411:50;21477:19;;;21470:35;;;;21521:19;;;;21514:35;;;9244:245:68;;;;;;;;;;21207:19:182;;;9244:245:68;;;9213:294;;;;;;;;-1:-1:-1;;;9118:403:68;;;21818:27:182;21861:11;;;21854:27;;;21897:12;;;21890:28;21934:12;;9118:403:68;;;-1:-1:-1;;9118:403:68;;;;;;;;;9095:436;;9118:403;9095:436;;;;9541:14;9558:30;;;;;;;;;22184:25:182;;;22257:4;22245:17;;22225:18;;;22218:45;;;;22279:18;;;22272:34;;;22322:18;;;22315:34;;;9095:436:68;;-1:-1:-1;9541:14:68;9558:30;;22156:19:182;;9558:30:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9541:47;;9612:5;-1:-1:-1;;;;;9602:15:68;:6;-1:-1:-1;;;;;9602:15:68;;9598:83;;9640:30;;-1:-1:-1;;;9640:30:68;;;;;;;;;;;9598:83;-1:-1:-1;;;;;9759:14:68;;;;;;;:7;:14;;;;;;;;9757:16;;;;;;9820:17;:24;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9820:45:68;;;;;;;;;;9925:41;;7598::182;;;9925::68;;7571:18:182;9925:41:68;;;;;;;8686:1287;;8430:1543;;;;;;;;;:::o;2248:716::-;-1:-1:-1;;;;;2460:18:68;;;;:38;;-1:-1:-1;;;;;;2482:16:68;;;2460:38;2456:111;;;2521:35;;-1:-1:-1;;;2521:35:68;;;;;;;;;;;2456:111;2623:27;;;2619:103;;2673:38;;-1:-1:-1;;;2673:38:68;;;;;;;;;;;2619:103;2787:9;2782:176;2802:14;;;2782:176;;;2834:54;2848:3;;2852:1;2848:6;;;;;;;:::i;:::-;;;;;;;2856:4;2862:2;2866:6;;2873:1;2866:9;;;;;;;:::i;:::-;;;;;;;2877:10;2834:13;:54::i;:::-;2930:3;;2782:176;;;;2248:716;;;;;;:::o;3315:1591::-;-1:-1:-1;;;;;3528:18:68;;;;:38;;-1:-1:-1;;;;;;3550:16:68;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:68;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:68;:6;-1:-1:-1;;;;;3729:14:68;;3725:888;;-1:-1:-1;;;;;3880:23:68;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:68;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:68;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:68;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:68;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:68;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:68;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:68;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:68;;;22534:25:182;;;22590:2;22575:18;;22568:34;;;-1:-1:-1;;;;;4850:49:68;;;;;;;;;;;;;;22507:18:182;4850:49:68;;;;;;;3315:1591;;;;;:::o;1100:1139:63:-;1215:16;2356:21:121;:19;:21::i;:::-;1297:23:63::1;1311:8;1297:13;:23::i;:::-;-1:-1:-1::0;;;;;1427:13:63::1;1403:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1403:37:63::1;;1399:110;;1463:35;;-1:-1:-1::0;;;1463:35:63::1;;;;;;;;;;;1399:110;1611:10;1602:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1601:21;:64:::0;::::1;;;-1:-1:-1::0;1638:10:63::1;-1:-1:-1::0;;;;;1652:13:63::1;1638:27;;;1601:64;:105;;;;-1:-1:-1::0;1695:11:63::1;::::0;-1:-1:-1;;;;;1695:11:63::1;1681:10;:25;;1601:105;1584:191;;;1738:26;;-1:-1:-1::0;;;1738:26:63::1;;;;;;;;;;;1584:191;1855:23;1881:21;:19;:21::i;:::-;1944:22;::::0;;1912:29:::1;1976::::0;;;1855:47;;-1:-1:-1;2026:59:63::1;1944:22:::0;1855:47;2076:8;2026:9:::1;:59::i;:::-;2015:70;;2134:13;-1:-1:-1::0;;;;;2100:132:63::1;;2161:61;2186:8;2196:15;2213:8;2161:24;:61::i;:::-;2100:132;::::0;5820:25:182;;;5808:2;5793:18;2100:132:63::1;;;;;;;1233:1006;;2398:20:121::0;1713:1;2924:7;:21;2744:208;3360:689:71;3435:21;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;3469:20;3567:19;2253:120;3567:8;:19::i;:::-;3540:46;-1:-1:-1;3610:16:71;3600:6;:26;;;;;;;;:::i;:::-;;3596:447;;3642:25;;;;;;;;;;;;;-1:-1:-1;;;3642:25:71;;;;;3596:447;;;3698:18;3688:6;:28;;;;;;;;:::i;:::-;;3684:359;;3786:10;3749:48;;;;;;;;:::i;3684:359::-;3829:19;3819:6;:29;;;;;;;;:::i;:::-;;3815:228;;3919:10;3881:49;;;;;;;;:::i;3815:228::-;3962:29;3952:6;:39;;;;;;;;:::i;:::-;;3948:95;;-1:-1:-1;;4007:25:71;;;;;;;;;;;;-1:-1:-1;;;4007:25:71;;;;;3360:689;-1:-1:-1;;;3360:689:71:o;10223:590:68:-;10419:34;;;10438:4;10419:34;;;;20849:51:182;;;;20916:18;;;20909:34;;;;10419::68;;;;;;;;;20822:18:182;;;;10419:34:68;;10409:45;;;;;;;;;-1:-1:-1;;;;;;10593:147:68;;;23731:39:182;10657:14:68;23803:15:182;;;-1:-1:-1;;23799:53:182;23786:11;;;23779:74;23869:12;;;23862:28;10711:15:68;23906:12:182;;;;23899:28;;;;10593:147:68;;;;;;;;;;23943:12:182;;;;10593:147:68;;;10570:180;;;;;;10223:590::o;5363:301::-;5509:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5509:35:68;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5623:34;;5820:25:182;;;5509:35:68;;5623:34;;5793:18:182;5623:34:68;;;;;;;5363:301;;;;:::o;5804:169:30:-;5935:31;;-1:-1:-1;;;5935:31:30;;193:4:74;5935:31:30;;;5820:25:182;5899:13:30;;5935:5;-1:-1:-1;;;;;5935:26:30;;;;5793:18:182;;5935:31:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5928:38;;5804:169;:::o;10301:1035:64:-;10396:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10396:39:64;10456:873;;;;;;;;10511:12;:26;-1:-1:-1;;;;;10511:26:64;;;10456:873;;10568:28;;;;10456:873;;;;-1:-1:-1;;;10624:25:64;;;;;;10456:873;;;;;;;;;;;;;10734:23;10456:873;;;;10793:21;10456:873;;;;10854:25;10456:873;;;;10906:12;10456:873;;;;10568:28;10950:29;;;;10511:26;10456:873;;;11066:36;;10456:873;;;;;;11019:97;;11066:36;11019:29;:97::i;:::-;10456:873;;11149:30;;-1:-1:-1;;;;;;;;11149:30:64;;;;;;10456:873;;;;11267:37;;10456:873;;;;;11220:98;;11267:37;;;11220:29;:98::i;:::-;10456:873;;10447:882;10301:1035;-1:-1:-1;;10301:1035:64:o;5717:341:76:-;5820:7;5840:20;5862:12;5878:56;5917:7;5878:25;:56::i;:::-;5839:95;;;;5949:7;5944:79;;5979:33;;-1:-1:-1;;;5979:33:76;;;;;;;;;;;1610:118:74;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;3353:344:63:-;3487:11;;-1:-1:-1;;;;;3487:11:63;3473:10;:25;3469:89;;3521:26;;-1:-1:-1;;;3521:26:63;;;;;;;;;;;3469:89;-1:-1:-1;;;;;3623:14:63;;;;;;:8;:14;;;;;;;;;:24;;-1:-1:-1;;3623:24:63;;;;;;;;;;3662:28;;7598:41:182;;;3662:28:63;;7571:18:182;3662:28:63;;;;;;;3353:344;;:::o;2856:328::-;2980:11;;-1:-1:-1;;;;;2980:11:63;2966:10;:25;2962:89;;3014:26;;-1:-1:-1;;;3014:26:63;;;;;;;;;;;2962:89;3121:11;:18;;-1:-1:-1;;;;;;3121:18:63;-1:-1:-1;;;;;3121:18:63;;;;;;;;3154:23;;;;-1:-1:-1;;3154:23:63;2856:328;:::o;7255:675:64:-;7340:6;7745:178;:12;:167;7775:123;7818:27;7867:13;7775:21;:123::i;:::-;7745:167;;;;;;;;;;;;:176;:178::i;:::-;7611:119;:12;:108;7641:64;7663:26;7691:13;7641:21;:64::i;7611:119::-;:312;;;;:::i;4207:1065:71:-;4599:26;;;4562:2;4599:26;;;;;;;;;4276:20;;4562:2;4536:23;;4562:2;4599:26;;;;;;;;;;-1:-1:-1;4599:26:71;4574:51;;4790:14;4818:180;4825:9;;4818:180;;4935:9;4942:2;4935:4;:9;:::i;:::-;4934:16;;4948:2;4934:16;:::i;:::-;4904:61;;4862:9;4899:1;4872:24;4890:6;4872:15;:24;:::i;:::-;:28;;;;:::i;:::-;4862:39;;;;;;;;:::i;:::-;;;;:103;-1:-1:-1;;;;;4862:103:71;;;;;;;;-1:-1:-1;4979:8:71;;;;:::i;:::-;;-1:-1:-1;4836:10:71;;-1:-1:-1;4844:2:71;4836:10;;:::i;:::-;;;4818:180;;;5169:28;;;;5154:44;5211:22;;;5154:44;4207:1065;-1:-1:-1;;4207:1065:71:o;4059:629:118:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:118;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:118;;-1:-1:-1;;;;;6150:32:182;;4631:40:118;;;6132:51:182;6105:18;;4631:40:118;5972:217:182;2431:307:121;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:121;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;1898:221:64:-;2042:1;2010:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;2010:34:64;;2006:107;;2067:35;;-1:-1:-1;;;2067:35:64;;;;;;;;;;;4547:1090:30;4705:7;4870:15;;;;;;;;:::i;:::-;4866:83;;;4908:30;;-1:-1:-1;;;4908:30:30;;;;;;;;;;;4866:83;5240:18;5261:33;:7;5277:16;5261:15;:33::i;:::-;5314:38;;-1:-1:-1;;;5314:38:30;;;;;5820:25:182;;;5240:54:30;;-1:-1:-1;5314:5:30;-1:-1:-1;;;;;5314:26:30;;;;5793:18:182;;5314:38:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5304:48;;5440:7;5451:1;5440:12;5436:51;;5475:1;5468:8;;;;;5436:51;-1:-1:-1;;;;;5554:5:30;:20;;5575;;;;:8;:20;:::i;:::-;5554:51;;-1:-1:-1;;;;;;5554:51:30;;;;;;;-1:-1:-1;;;;;20867:32:182;;;5554:51:30;;;20849::182;20916:18;;;20909:34;;;20822:18;;5554:51:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5623:7:30;;4547:1090;-1:-1:-1;;;;4547:1090:30:o;27506:391:64:-;27675:7;27698:15;;;;;;;;:::i;:::-;27694:197;;;-1:-1:-1;27736:7:64;27729:14;;27694:197;27847:33;:7;27863:16;27847:15;:33::i;:::-;27840:40;;;;5697:450;5796:21;5829:24;193:4:74;5856:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;5829:52;;5923:16;5907:13;:32;:95;;6001:1;5907:95;;;5954:32;5970:16;5954:13;:32;:::i;:::-;5891:111;-1:-1:-1;6094:46:64;6116:23;193:4:74;6116:17:64;:23;:::i;:::-;6094:13;;:21;:46::i;6753:1173:76:-;6860:7;6869:4;7246:19;7290:20;7312:12;7328:65;7372:7;7328:26;:65::i;:::-;7289:104;;;;7412:7;7407:64;;-1:-1:-1;7447:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;;;6753:1173:76:o;7407:64::-;7647:39;:7;:28;;;:37;:39::i;:::-;7598:30;7620:7;7598:21;:30::i;:::-;7566:13;7515:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7484:202;;7275:422;;7828:1;7813:12;:16;7809:64;;;-1:-1:-1;7853:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;7809:64::-;7899:12;7914:4;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;898:556:74:-;1014:9;1279:1;-1:-1:-1;;1262:19:74;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:74;;1411:27;;898:556::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;2001:204:77:-;2053:8;-1:-1:-1;;;;;2079:1:77;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:77;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:77;2001:204::o;2705:151:119:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;6260:223:64:-;6336:24;6438:37;6456:19;6438:15;:37;:::i;:::-;6407:69;;:15;:69;:::i;8254:9098:76:-;8362:6;8370:4;9172:23;9327:130;:102;9395:7;:33;;;9327:7;:42;;;:67;;:102;;;;:::i;:::-;:128;:130::i;:::-;9198:114;:90;9255:7;:32;;;9198:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9172:285;;9467:30;9500:153;9577:7;:21;;;9616:7;:23;;;9500:59;:153::i;:::-;9467:186;;9903:1;9884:16;:20;9880:7439;;;9920:25;9956:16;9920:53;;10162:21;10185:12;10201:401;10282:7;:21;;;10325:7;:23;;;10370:7;:20;;;10412:7;:28;;;10468:7;:19;;;193:4:74;10462:25:76;;;;:::i;:::-;10509:7;:23;;;10554:7;:30;;;10201:59;:401::i;:::-;10161:441;;;;10621:7;10616:64;;-1:-1:-1;10656:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;10616:64::-;10857:17;10840:13;:34;10836:2891;;11148:21;11214:389;11314:22;11362:7;:20;;;11408:17;11457:7;:19;;;193:4:74;11451:25:76;;;;:::i;:::-;11502:7;:23;;;11551:7;:30;;;11214:74;:389::i;:::-;11187:416;-1:-1:-1;11187:416:76;-1:-1:-1;11909:8:76;;:84;;;;;11961:7;:32;;;11941:17;:52;11909:84;11884:335;;;-1:-1:-1;12042:1:76;;12045:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;11884:335::-;12152:7;12147:72;;-1:-1:-1;12191:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;12147:72::-;12246:24;:13;:22;:24::i;:::-;12245:25;;;:::i;:::-;12237:40;12272:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;;8254:9098:76:o;10836:2891::-;12962:1;12935:7;:23;;;:28;12931:782;;13021:95;13047:7;:28;;;13022:22;:53;;;;:::i;13021:95::-;13020:96;;;:::i;:::-;12987:181;13142:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;12931:782::-;13573:28;;;;13549:21;;13548:94;;13549:52;;;:::i;9880:7439::-;13852:1;13833:16;:20;13829:3490;;;13869:25;13905:17;13906:16;13905:17;:::i;:::-;13869:54;;14041:21;14064:12;14080:307;14161:22;14205:7;:20;;;14253:7;:19;;;193:4:74;14247:25:76;;;;:::i;:::-;14294:7;:23;;;14339:7;:30;;;14080:59;:307::i;:::-;14040:347;;;;14406:7;14401:64;;-1:-1:-1;14441:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;14401:64::-;14642:17;14625:13;:34;14621:2688;;14934:21;15000:387;15098:22;15146:7;:20;;;15192:17;15241:7;:19;;;193:4:74;15235:25:76;;;;:::i;:::-;15286:7;:23;;;15335:7;:30;;;15000:72;:387::i;:::-;14973:414;-1:-1:-1;14973:414:76;-1:-1:-1;15693:8:76;;:84;;;;;15745:7;:32;;;15725:17;:52;15693:84;15668:335;;;-1:-1:-1;15826:1:76;;15829:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15668:335::-;15936:7;15931:72;;-1:-1:-1;15975:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15931:72::-;16029:24;:13;:22;:24::i;14621:2688::-;16387:23;16457:335;16546:22;16594:7;:20;;;16646:7;:19;;;193:4:74;16640:25:76;;;;:::i;:::-;16691:7;:23;;;16740:7;:30;;;16457:63;:335::i;:::-;16428:364;-1:-1:-1;16428:364:76;-1:-1:-1;16428:364:76;16810:72;;-1:-1:-1;16854:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;16810:72::-;17073:177;17116:122;17189:7;:23;;;17137:13;17117:17;:33;;;;:::i;:::-;17116:43;;:122::i;:::-;17074:164;;:15;:164;:::i;13829:3490::-;-1:-1:-1;17337:1:76;;17340:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;8254:9098:76:o;17599:1167::-;17702:6;18560:199;18578:156;18639:7;:32;;;193:4:74;18633:38:76;;;;:::i;:::-;18693:23;;;;18578:24;;;;;:156;:33;:156::i;18560:199::-;18342:203;18360:160;18424:7;:33;;;193:4:74;18418:39:76;;;;:::i;:::-;18479:23;;;;18360:25;;;;;:160;:36;:160::i;3180:392:119:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:119;;3394:4;3359:41;;;6132:51:182;6105:18;;3359:41:119;5972:217:182;3303:108:119;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:119;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:119:o;3190:114:74:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;6027:544:75:-;6162:7;6181:29;6253:16;6213:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;6181:88;;6308:1;6283:22;:26;6279:238;;;6325:181;6381:111;6325:38;:181::i;17581:1971:78:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:78;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:::-;:18;;:21::i;:::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:74;18982:15:78;;18978:295;;19096:28;19109:14;193:4:74;19121:1:78;19109:11;:14::i;:::-;19096:8;;:12;:28::i;:::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:74;19259:1:78;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:78;;-1:-1:-1;;;;17581:1971:78;;;;;;;;;;;:::o;11709:1515::-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:78;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:74;12549:2:78;:9;12545:263;;12648:20;12655:12;193:4:74;12665:1:78;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:74;12794:1:78;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:78;;-1:-1:-1;;11709:1515:78;;;;;;;;;;:::o;15892:1050::-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:78;16337:28;193:4:74;16345:13:78;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:74;16379:8:78;:15;16375:293;;16490:26;16503:12;193:4:74;16513:1:78;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:74;16654:1:78;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:78;;-1:-1:-1;;15892:1050:78;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:74;6666:2:78;:9;6662:261;;6764:20;6771:12;193:4:74;6781:1:78;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:74;6909:1:78;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:78;-1:-1:-1;;;;;;;5576:1765:78:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:78;14607:28;193:4:74;14617:11:78;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:74;14649:9:78;:16;14645:300;;14765:29;14779:14;193:4:74;14791:1:78;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:74;14931:1:78;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:78;-1:-1:-1;;;;;;13859:1409:78:o;2284:748:74:-;2398:9;2663:1;-1:-1:-1;;2646:19:74;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:74;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;4625:582:119:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:119;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:119;;-1:-1:-1;;;;;6150:32:182;;5121:24:119;;;6132:51:182;6105:18;;5121:24:119;5972:217:182;5041:119:119;-1:-1:-1;5180:10:119;5173:17;;317:182:73;485:6;451:41;;-1:-1:-1;;;451:41:73;;;;;;;;:::i;20915:352:78:-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;:::-;:50;;;;:::i;3811:844:74:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:74;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:74;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:74;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;20059:343:78:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;5743:516:119:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:119;;;;;;;;;;;8508:3846:74;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:74;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:74;-1:-1:-1;9283:1:74;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:74;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:74;10385:5;;10384:13;;-1:-1:-1;;10383:50:74;10453:5;;10452:13;;;-1:-1:-1;;10451:50:74;10519:5;;;-1:-1:-1;;10519:46:74;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:74:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:74;:26;5126:40;;-1:-1:-1;5165:1:74;;4907:3302;-1:-1:-1;4907:3302:74:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:74;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:74;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:74;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:74;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:74;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:74;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:74;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:74;7584:10;;;;-1:-1:-1;6063:75:74;;-1:-1:-1;6458:50:74;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:182:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:182;;14:180;-1:-1:-1;14:180:182:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:182;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:182;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:182:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:182;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:118::-;1460:5;1453:13;1446:21;1439:5;1436:32;1426:60;;1482:1;1479;1472:12;1497:241;1553:6;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1661:9;1648:23;1680:28;1702:5;1680:28;:::i;1743:1050::-;1869:6;1877;1885;1893;1901;1909;1917;1925;1933;1986:3;1974:9;1965:7;1961:23;1957:33;1954:53;;;2003:1;2000;1993:12;1954:53;2039:9;2026:23;2016:33;;2096:2;2085:9;2081:18;2068:32;2058:42;;2150:2;2139:9;2135:18;2122:32;2163:39;2196:5;2163:39;:::i;:::-;2221:5;-1:-1:-1;2278:2:182;2263:18;;2250:32;2291:41;2250:32;2291:41;:::i;:::-;2351:7;-1:-1:-1;2410:3:182;2395:19;;2382:33;2424:30;2382:33;2424:30;:::i;:::-;2473:7;-1:-1:-1;2527:3:182;2512:19;;2499:33;;-1:-1:-1;2584:3:182;2569:19;;2556:33;2633:4;2620:18;;2608:31;;2598:59;;2653:1;2650;2643:12;2598:59;2676:7;2666:17;;;2730:3;2719:9;2715:19;2702:33;2692:43;;2782:3;2771:9;2767:19;2754:33;2744:43;;1743:1050;;;;;;;;;;;:::o;2798:367::-;2861:8;2871:6;2925:3;2918:4;2910:6;2906:17;2902:27;2892:55;;2943:1;2940;2933:12;2892:55;-1:-1:-1;2966:20:182;;3009:18;2998:30;;2995:50;;;3041:1;3038;3031:12;2995:50;3078:4;3070:6;3066:17;3054:29;;3138:3;3131:4;3121:6;3118:1;3114:14;3106:6;3102:27;3098:38;3095:47;3092:67;;;3155:1;3152;3145:12;3092:67;2798:367;;;;;:::o;3170:1066::-;3310:6;3318;3326;3334;3342;3350;3403:3;3391:9;3382:7;3378:23;3374:33;3371:53;;;3420:1;3417;3410:12;3371:53;3459:9;3446:23;3478:39;3511:5;3478:39;:::i;:::-;3536:5;-1:-1:-1;3593:2:182;3578:18;;3565:32;3606:41;3565:32;3606:41;:::i;:::-;3666:7;-1:-1:-1;3724:2:182;3709:18;;3696:32;3747:18;3777:14;;;3774:34;;;3804:1;3801;3794:12;3774:34;3843:70;3905:7;3896:6;3885:9;3881:22;3843:70;:::i;:::-;3932:8;;-1:-1:-1;3817:96:182;-1:-1:-1;4020:2:182;4005:18;;3992:32;;-1:-1:-1;4036:16:182;;;4033:36;;;4065:1;4062;4055:12;4033:36;;4104:72;4168:7;4157:8;4146:9;4142:24;4104:72;:::i;:::-;3170:1066;;;;-1:-1:-1;3170:1066:182;;-1:-1:-1;3170:1066:182;;4195:8;;3170:1066;-1:-1:-1;;;3170:1066:182:o;4241:541::-;4327:6;4335;4343;4351;4404:3;4392:9;4383:7;4379:23;4375:33;4372:53;;;4421:1;4418;4411:12;4372:53;4457:9;4444:23;4434:33;;4517:2;4506:9;4502:18;4489:32;4530:39;4563:5;4530:39;:::i;:::-;4588:5;-1:-1:-1;4645:2:182;4630:18;;4617:32;4658:41;4617:32;4658:41;:::i;:::-;4241:541;;;;-1:-1:-1;4718:7:182;;4772:2;4757:18;4744:32;;-1:-1:-1;;4241:541:182:o;5197:472::-;5274:6;5282;5290;5343:2;5331:9;5322:7;5318:23;5314:32;5311:52;;;5359:1;5356;5349:12;5311:52;5395:9;5382:23;5372:33;;5455:2;5444:9;5440:18;5427:32;5468:39;5501:5;5468:39;:::i;:::-;5526:5;-1:-1:-1;5583:2:182;5568:18;;5555:32;5596:41;5555:32;5596:41;:::i;:::-;5656:7;5646:17;;;5197:472;;;;;:::o;6383:323::-;6451:6;6459;6512:2;6500:9;6491:7;6487:23;6483:32;6480:52;;;6528:1;6525;6518:12;6480:52;6564:9;6551:23;6541:33;;6624:2;6613:9;6609:18;6596:32;6637:39;6670:5;6637:39;:::i;:::-;6695:5;6685:15;;;6383:323;;;;;:::o;6711:386::-;6797:6;6850:2;6838:9;6829:7;6825:23;6821:32;6818:52;;;6866:1;6863;6856:12;6818:52;6906:9;6893:23;6939:18;6931:6;6928:30;6925:50;;;6971:1;6968;6961:12;6925:50;6994:22;;7050:2;7032:16;;;7028:25;7025:45;;;7066:1;7063;7056:12;7650:541;7736:6;7744;7752;7760;7813:3;7801:9;7792:7;7788:23;7784:33;7781:53;;;7830:1;7827;7820:12;7781:53;7866:9;7853:23;7843:33;;7926:2;7915:9;7911:18;7898:32;7939:39;7972:5;7939:39;:::i;:::-;7997:5;-1:-1:-1;8049:2:182;8034:18;;8021:32;;-1:-1:-1;8105:2:182;8090:18;;8077:32;8118:41;8077:32;8118:41;:::i;:::-;7650:541;;;;-1:-1:-1;7650:541:182;;-1:-1:-1;;7650:541:182:o;8196:1266::-;8413:13;;8395:32;;8483:4;8471:17;;;8465:24;8443:20;;;8436:54;8546:4;8534:17;;;8528:24;8506:20;;;8499:54;8609:4;8597:17;;;8591:24;8569:20;;;8562:54;8672:4;8660:17;;;8654:24;8632:20;;;8625:54;8735:4;8723:17;;;8717:24;8695:20;;;8688:54;8798:4;8786:17;;;8780:24;8758:20;;;8751:54;8861:4;8849:17;;;8843:24;8821:20;;;8814:54;8887:6;8935:15;;;8929:22;8909:18;;;8902:50;8971:6;9019:15;;;9013:22;8993:18;;;8986:50;9055:6;9103:15;;;9097:22;9077:18;;;9070:50;9139:6;9187:15;;;9181:22;9161:18;;;9154:50;9223:6;9271:15;;;9265:22;9245:18;;;9238:50;9307:6;9355:15;;;9349:22;9329:18;;;9322:50;9391:6;9439:15;;;9433:22;9413:18;;;9406:50;;;;8382:3;8367:19;;8196:1266::o;9467:390::-;9532:6;9540;9593:2;9581:9;9572:7;9568:23;9564:32;9561:52;;;9609:1;9606;9599:12;9561:52;9648:9;9635:23;9667:39;9700:5;9667:39;:::i;:::-;9725:5;-1:-1:-1;9782:2:182;9767:18;;9754:32;9795:30;9754:32;9795:30;:::i;9862:391::-;9939:6;9947;9955;10008:2;9996:9;9987:7;9983:23;9979:32;9976:52;;;10024:1;10021;10014:12;9976:52;10060:9;10047:23;10037:33;;10120:2;10109:9;10105:18;10092:32;10133:39;10166:5;10133:39;:::i;:::-;9862:391;;10191:5;;-1:-1:-1;;;10243:2:182;10228:18;;;;10215:32;;9862:391::o;10520:1286::-;10749:13;;-1:-1:-1;;;;;5929:31:182;5917:44;;10710:3;10695:19;;10821:4;10813:6;10809:17;10803:24;10836:61;10891:4;10880:9;10876:20;10862:12;-1:-1:-1;;;;;5929:31:182;5917:44;;5856:111;10836:61;;10953:4;10945:6;10941:17;10935:24;10928:4;10917:9;10913:20;10906:54;11016:4;11008:6;11004:17;10998:24;10991:4;10980:9;10976:20;10969:54;11079:4;11071:6;11067:17;11061:24;11054:4;11043:9;11039:20;11032:54;11142:4;11134:6;11130:17;11124:24;11117:4;11106:9;11102:20;11095:54;11205:4;11197:6;11193:17;11187:24;11180:4;11169:9;11165:20;11158:54;11268:4;11260:6;11256:17;11250:24;11243:4;11232:9;11228:20;11221:54;11294:6;11354:2;11346:6;11342:15;11336:22;11331:2;11320:9;11316:18;11309:50;;11378:6;11433:2;11425:6;11421:15;11415:22;11446:61;11503:2;11492:9;11488:18;11472:14;-1:-1:-1;;;;;5929:31:182;5917:44;;5856:111;11446:61;-1:-1:-1;;11526:6:182;11569:15;;;11563:22;-1:-1:-1;;;;;5929:31:182;11636:18;;;5917:44;11674:6;11717:15;;;11711:22;10328:12;;11781:18;;;10316:25;10390:4;10379:16;;10373:23;10357:14;;;10350:47;10446:4;10435:16;;10429:23;10413:14;;;10406:47;10502:4;10491:16;;10485:23;10469:14;;;10462:47;11742:58;;;10520:1286;;;;:::o;11811:437::-;11897:6;11905;11958:2;11946:9;11937:7;11933:23;11929:32;11926:52;;;11974:1;11971;11964:12;11926:52;12014:9;12001:23;12047:18;12039:6;12036:30;12033:50;;;12079:1;12076;12069:12;12033:50;12118:70;12180:7;12171:6;12160:9;12156:22;12118:70;:::i;:::-;12207:8;;12092:96;;-1:-1:-1;11811:437:182;-1:-1:-1;;;;11811:437:182:o;12253:632::-;12424:2;12476:21;;;12546:13;;12449:18;;;12568:22;;;12395:4;;12424:2;12647:15;;;;12621:2;12606:18;;;12395:4;12690:169;12704:6;12701:1;12698:13;12690:169;;;12765:13;;12753:26;;12834:15;;;;12799:12;;;;12726:1;12719:9;12690:169;;;-1:-1:-1;12876:3:182;;12253:632;-1:-1:-1;;;;;;12253:632:182:o;13496:1650::-;13720:13;;-1:-1:-1;;;;;4853:46:182;4841:59;;13688:3;13673:19;;13792:4;13784:6;13780:17;13774:24;13807:54;13855:4;13844:9;13840:20;13826:12;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;13807:54;;13910:4;13902:6;13898:17;13892:24;13925:56;13975:4;13964:9;13960:20;13944:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;13925:56;;14030:4;14022:6;14018:17;14012:24;14045:56;14095:4;14084:9;14080:20;14064:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14045:56;;14150:4;14142:6;14138:17;14132:24;14165:55;14214:4;14203:9;14199:20;14183:14;13354:2;13343:21;13331:34;;13278:93;14165:55;;14269:4;14261:6;14257:17;14251:24;14284:56;14334:4;14323:9;14319:20;14303:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14284:56;;14389:4;14381:6;14377:17;14371:24;14404:56;14454:4;14443:9;14439:20;14423:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14404:56;;14509:4;14501:6;14497:17;14491:24;14524:56;14574:4;14563:9;14559:20;14543:14;-1:-1:-1;;;;;4853:46:182;4841:59;;4787:119;14524:56;-1:-1:-1;14599:6:182;14642:15;;;14636:22;7432:13;7425:21;14699:18;;;7413:34;14737:6;14780:15;;;14774:22;7432:13;7425:21;14837:18;;;7413:34;14875:6;14918:15;;;14912:22;-1:-1:-1;;;;;13442:42:182;14978:18;;;13430:55;15016:6;15060:15;;;15054:22;-1:-1:-1;;;;;4853:46:182;;15121:18;;;4841:59;15085:55;4787:119;15151:691;15246:6;15254;15262;15270;15278;15331:3;15319:9;15310:7;15306:23;15302:33;15299:53;;;15348:1;15345;15338:12;15299:53;15384:9;15371:23;15361:33;;15444:2;15433:9;15429:18;15416:32;15457:39;15490:5;15457:39;:::i;:::-;15515:5;-1:-1:-1;15572:2:182;15557:18;;15544:32;15585:41;15544:32;15585:41;:::i;:::-;15645:7;-1:-1:-1;15699:2:182;15684:18;;15671:32;;-1:-1:-1;15755:3:182;15740:19;;15727:33;15769:41;15727:33;15769:41;:::i;:::-;15829:7;15819:17;;;15151:691;;;;;;;;:::o;15847:404::-;15915:6;15923;15976:2;15964:9;15955:7;15951:23;15947:32;15944:52;;;15992:1;15989;15982:12;15944:52;16031:9;16018:23;16050:39;16083:5;16050:39;:::i;:::-;16108:5;-1:-1:-1;16165:2:182;16150:18;;16137:32;16178:41;16137:32;16178:41;:::i;16639:184::-;16709:6;16762:2;16750:9;16741:7;16737:23;16733:32;16730:52;;;16778:1;16775;16768:12;16730:52;-1:-1:-1;16801:16:182;;16639:184;-1:-1:-1;16639:184:182:o;17111:127::-;17172:10;17167:3;17163:20;17160:1;17153:31;17203:4;17200:1;17193:15;17227:4;17224:1;17217:15;17243:127;17304:10;17299:3;17295:20;17292:1;17285:31;17335:4;17332:1;17325:15;17359:4;17356:1;17349:15;17375:125;17440:9;;;17461:10;;;17458:36;;;17474:18;;:::i;17505:128::-;17572:9;;;17593:11;;;17590:37;;;17607:18;;:::i;17638:127::-;17699:10;17694:3;17690:20;17687:1;17680:31;17730:4;17727:1;17720:15;17754:4;17751:1;17744:15;17770:127;17831:10;17826:3;17822:20;17819:1;17812:31;17862:4;17859:1;17852:15;17886:4;17883:1;17876:15;19543:449;-1:-1:-1;;;19800:3:182;19793:32;19775:3;19854:6;19848:13;19870:75;19938:6;19933:2;19928:3;19924:12;19917:4;19909:6;19905:17;19870:75;:::i;:::-;19965:16;;;;19983:2;19961:25;;19543:449;-1:-1:-1;;19543:449:182:o;19997:450::-;-1:-1:-1;;;20254:3:182;20247:33;20229:3;20309:6;20303:13;20325:75;20393:6;20388:2;20383:3;20379:12;20372:4;20364:6;20360:17;20325:75;:::i;:::-;20420:16;;;;20438:2;20416:25;;19997:450;-1:-1:-1;;19997:450:182:o;22613:448::-;-1:-1:-1;;;22870:3:182;22863:31;22845:3;22923:6;22917:13;22939:75;23007:6;23002:2;22997:3;22993:12;22986:4;22978:6;22974:17;22939:75;:::i;:::-;23034:16;;;;23052:2;23030:25;;22613:448;-1:-1:-1;;22613:448:182:o;23066:449::-;-1:-1:-1;;;23323:3:182;23316:32;23298:3;23377:6;23371:13;23393:75;23461:6;23456:2;23451:3;23447:12;23440:4;23432:6;23428:17;23393:75;:::i;23966:200::-;24032:9;;;24005:4;24060:9;;24088:10;;24100:12;;;24084:29;24123:12;;;24115:21;;24081:56;24078:82;;;24140:18;;:::i;24171:127::-;24232:10;24227:3;24223:20;24220:1;24213:31;24263:4;24260:1;24253:15;24287:4;24284:1;24277:15;24303:112;24335:1;24361;24351:35;;24366:18;;:::i;:::-;-1:-1:-1;24400:9:182;;24303:112::o;24420:135::-;24459:3;24480:17;;;24477:43;;24500:18;;:::i;:::-;-1:-1:-1;24547:1:182;24536:13;;24420:135::o;24560:120::-;24600:1;24626;24616:35;;24631:18;;:::i;:::-;-1:-1:-1;24665:9:182;;24560:120::o;24685:245::-;24752:6;24805:2;24793:9;24784:7;24780:23;24776:32;24773:52;;;24821:1;24818;24811:12;24773:52;24853:9;24847:16;24872:28;24894:5;24872:28;:::i;24935:168::-;25008:9;;;25039;;25056:15;;;25050:22;;25036:37;25026:71;;25077:18;;:::i;25108:216::-;25172:9;;;25200:11;;;25147:3;25230:9;;25258:10;;25254:19;;25283:10;;25275:19;;25251:44;25248:70;;;25298:18;;:::i;25329:136::-;25364:3;-1:-1:-1;;;25385:22:182;;25382:48;;25410:18;;:::i;:::-;-1:-1:-1;25450:1:182;25446:13;;25329:136::o;25470:287::-;25599:3;25637:6;25631:13;25653:66;25712:6;25707:3;25700:4;25692:6;25688:17;25653:66;:::i;:::-;25735:16;;;;;25470:287;-1:-1:-1;;25470:287:182:o;25762:360::-;25926:2;25911:18;;25959:1;25948:13;;25938:144;;26004:10;25999:3;25995:20;25992:1;25985:31;26039:4;26036:1;26029:15;26067:4;26064:1;26057:15;25938:144;26091:25;;;25762:360;:::o;26127:193::-;26166:1;26192;26182:35;;26197:18;;:::i;:::-;-1:-1:-1;;;26233:18:182;;-1:-1:-1;;26253:13:182;;26229:38;26226:64;;;26270:18;;:::i;:::-;-1:-1:-1;26304:10:182;;26127:193::o",
        "linkReferences": {},
        "immutableReferences": {
            "13657": [
                {
                    "start": 3206,
                    "length": 32
                },
                {
                    "start": 4062,
                    "length": 32
                }
            ],
            "13660": [
                {
                    "start": 3490,
                    "length": 32
                },
                {
                    "start": 9535,
                    "length": 32
                }
            ],
            "13663": [
                {
                    "start": 3452,
                    "length": 32
                },
                {
                    "start": 4151,
                    "length": 32
                },
                {
                    "start": 9201,
                    "length": 32
                }
            ],
            "13666": [
                {
                    "start": 3528,
                    "length": 32
                },
                {
                    "start": 7762,
                    "length": 32
                }
            ],
            "13669": [
                {
                    "start": 3660,
                    "length": 32
                }
            ],
            "13672": [
                {
                    "start": 3698,
                    "length": 32
                }
            ],
            "13675": [
                {
                    "start": 3736,
                    "length": 32
                }
            ],
            "13678": [
                {
                    "start": 3774,
                    "length": 32
                }
            ],
            "13681": [
                {
                    "start": 3338,
                    "length": 32
                },
                {
                    "start": 7648,
                    "length": 32
                }
            ],
            "13684": [
                {
                    "start": 3376,
                    "length": 32
                },
                {
                    "start": 7686,
                    "length": 32
                }
            ],
            "13687": [
                {
                    "start": 3414,
                    "length": 32
                },
                {
                    "start": 7724,
                    "length": 32
                }
            ],
            "13704": [
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
                    "start": 6420,
                    "length": 32
                },
                {
                    "start": 6542,
                    "length": 32
                },
                {
                    "start": 6666,
                    "length": 32
                }
            ],
            "13718": [
                {
                    "start": 3253,
                    "length": 32
                },
                {
                    "start": 7095,
                    "length": 32
                }
            ],
            "13721": [
                {
                    "start": 3300,
                    "length": 32
                },
                {
                    "start": 7156,
                    "length": 32
                }
            ],
            "6252": [
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
                    "start": 7363,
                    "length": 32
                },
                {
                    "start": 8761,
                    "length": 32
                },
                {
                    "start": 8906,
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract ILido\",\"name\":\"__lido\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lido\",\"outputs\":[{\"internalType\":\"contract ILido\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"__lido\":\"The Lido contract.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The MultiToken's decimals.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"lido()\":{\"returns\":{\"_0\":\"lido The Lido contract.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"StETHTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsupportedToken()\":[{\"notice\":\"Thrown when an unsupported option is passed to a function or         a user attempts to sweep an invalid token. The options and sweep         targets that are supported vary between instances.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"decimals()\":{\"notice\":\"Returns the MultiToken's decimals.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"lido()\":{\"notice\":\"Returns the Lido contract.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"StETHHyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/steth/StETHTarget0.sol\":\"StETHTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b\",\"dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy\"]},\"contracts/src/instances/steth/StETHBase.sol\":{\"keccak256\":\"0x639d9194f93421b99bc2b1d3b96425d845e0b2cb4d5dfb37ea358cefc8beb35c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1d405c802fdfedbccdbdd0707f2109659b8f02cc3808ee3f8ebac4d475c7c87\",\"dweb:/ipfs/Qmatdps9svvTBhZfKtxCoz2FEs7LZLh6hkd1h7VgenuJkn\"]},\"contracts/src/instances/steth/StETHTarget0.sol\":{\"keccak256\":\"0x7a8abc3960739222503a84d46781c0a50d3d62005da2d0ef2e7b5fd669ef9072\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c4387dfc3702b4d9441ae2e365fd4299b8d3aa3c518c71abb793701330006fd7\",\"dweb:/ipfs/QmaA2uDJd2Zgm3pBJfb9d1shk318rLT8B3ju4udcLY6Gs2\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x5942f8acaa122bd9f40cc0c6c4a5d489de3537efef6f7e744a89dae8a616ecc9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://629e5370ec6464f25f476b20635d67b06919f37aac7b8decba0756ab3ccbc8e3\",\"dweb:/ipfs/QmdZi8CygBNpvd1oX2GMReYRffbYirNJqnnEGxTkHoWqrw\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9\",\"dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba\",\"dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba\",\"dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca\",\"dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                            "name": "__lido",
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
                    "name": "UnsafeCastToInt256"
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
                            "proceeds": "The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
                        }
                    },
                    "constructor": {
                        "params": {
                            "__lido": "The Lido contract.",
                            "_config": "The configuration of the Hyperdrive pool."
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
                "keccak256": "0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8",
                "urls": [
                    "bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b",
                    "dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/steth/StETHBase.sol": {
                "keccak256": "0x639d9194f93421b99bc2b1d3b96425d845e0b2cb4d5dfb37ea358cefc8beb35c",
                "urls": [
                    "bzz-raw://b1d405c802fdfedbccdbdd0707f2109659b8f02cc3808ee3f8ebac4d475c7c87",
                    "dweb:/ipfs/Qmatdps9svvTBhZfKtxCoz2FEs7LZLh6hkd1h7VgenuJkn"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/steth/StETHTarget0.sol": {
                "keccak256": "0x7a8abc3960739222503a84d46781c0a50d3d62005da2d0ef2e7b5fd669ef9072",
                "urls": [
                    "bzz-raw://c4387dfc3702b4d9441ae2e365fd4299b8d3aa3c518c71abb793701330006fd7",
                    "dweb:/ipfs/QmaA2uDJd2Zgm3pBJfb9d1shk318rLT8B3ju4udcLY6Gs2"
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
        "id": 6694,
        "exportedSymbols": {
            "ERC20": [
                66276
            ],
            "HyperdriveTarget0": [
                3257
            ],
            "IERC20": [
                6920
            ],
            "IHyperdrive": [
                7616
            ],
            "ILido": [
                8479
            ],
            "SafeERC20": [
                66706
            ],
            "StETHBase": [
                6447
            ],
            "StETHTarget0": [
                6693
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3035:32",
        "nodes": [
            {
                "id": 6531,
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
                "id": 6533,
                "nodeType": "ImportDirective",
                "src": "64:59:32",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
                "file": "openzeppelin/token/ERC20/ERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6694,
                "sourceUnit": 66277,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6532,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66276,
                            "src": "73:5:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6535,
                "nodeType": "ImportDirective",
                "src": "124:73:32",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
                "file": "openzeppelin/token/ERC20/utils/SafeERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6694,
                "sourceUnit": 66707,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6534,
                            "name": "SafeERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66706,
                            "src": "133:9:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6537,
                "nodeType": "ImportDirective",
                "src": "198:73:32",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "../../external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6694,
                "sourceUnit": 3258,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6536,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3257,
                            "src": "207:17:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6539,
                "nodeType": "ImportDirective",
                "src": "272:63:32",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6694,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6538,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "281:11:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6541,
                "nodeType": "ImportDirective",
                "src": "336:53:32",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6694,
                "sourceUnit": 6921,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6540,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6920,
                            "src": "345:6:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6543,
                "nodeType": "ImportDirective",
                "src": "390:51:32",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/ILido.sol",
                "file": "../../interfaces/ILido.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6694,
                "sourceUnit": 8480,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6542,
                            "name": "ILido",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8479,
                            "src": "399:5:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6545,
                "nodeType": "ImportDirective",
                "src": "442:44:32",
                "nodes": [],
                "absolutePath": "contracts/src/instances/steth/StETHBase.sol",
                "file": "./StETHBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6694,
                "sourceUnit": 6448,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6544,
                            "name": "StETHBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6447,
                            "src": "451:9:32",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6693,
                "nodeType": "ContractDefinition",
                "src": "924:2149:32",
                "nodes": [
                    {
                        "id": 6554,
                        "nodeType": "UsingForDirective",
                        "src": "984:26:32",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 6551,
                            "name": "SafeERC20",
                            "nameLocations": [
                                "990:9:32"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 66706,
                            "src": "990:9:32"
                        },
                        "typeName": {
                            "id": 6553,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 6552,
                                "name": "ERC20",
                                "nameLocations": [
                                    "1004:5:32"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 66276,
                                "src": "1004:5:32"
                            },
                            "referencedDeclaration": 66276,
                            "src": "1004:5:32",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$66276",
                                "typeString": "contract ERC20"
                            }
                        }
                    },
                    {
                        "id": 6571,
                        "nodeType": "FunctionDefinition",
                        "src": "1172:134:32",
                        "nodes": [],
                        "body": {
                            "id": 6570,
                            "nodeType": "Block",
                            "src": "1304:2:32",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 6555,
                            "nodeType": "StructuredDocumentation",
                            "src": "1016:151:32",
                            "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __lido The Lido contract."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 6564,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6558,
                                        "src": "1277:7:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 6565,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6563,
                                    "name": "HyperdriveTarget0",
                                    "nameLocations": [
                                        "1259:17:32"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 3257,
                                    "src": "1259:17:32"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1259:26:32"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 6567,
                                        "name": "__lido",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6561,
                                        "src": "1296:6:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8479",
                                            "typeString": "contract ILido"
                                        }
                                    }
                                ],
                                "id": 6568,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6566,
                                    "name": "StETHBase",
                                    "nameLocations": [
                                        "1286:9:32"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 6447,
                                    "src": "1286:9:32"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1286:17:32"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 6562,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6558,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1223:7:32",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6571,
                                    "src": "1193:37:32",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 6557,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6556,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1193:11:32",
                                                "1205:10:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "1193:22:32"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "1193:22:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6561,
                                    "mutability": "mutable",
                                    "name": "__lido",
                                    "nameLocation": "1246:6:32",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6571,
                                    "src": "1240:12:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILido_$8479",
                                        "typeString": "contract ILido"
                                    },
                                    "typeName": {
                                        "id": 6560,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6559,
                                            "name": "ILido",
                                            "nameLocations": [
                                                "1240:5:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8479,
                                            "src": "1240:5:32"
                                        },
                                        "referencedDeclaration": 8479,
                                        "src": "1240:5:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8479",
                                            "typeString": "contract ILido"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1183:75:32"
                        },
                        "returnParameters": {
                            "id": 6569,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1304:0:32"
                        },
                        "scope": 6693,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 6659,
                        "nodeType": "FunctionDefinition",
                        "src": "1734:932:32",
                        "nodes": [],
                        "body": {
                            "id": 6658,
                            "nodeType": "Block",
                            "src": "1774:892:32",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 6587,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 6581,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 6578,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1856:3:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 6579,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1860:6:32",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1856:10:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "id": 6580,
                                                "name": "_feeCollector",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13704,
                                                "src": "1870:13:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "1856:27:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "id": 6586,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "1887:21:32",
                                            "subExpression": {
                                                "baseExpression": {
                                                    "id": 6582,
                                                    "name": "_pausers",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13715,
                                                    "src": "1888:8:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 6585,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 6583,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1897:3:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 6584,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1901:6:32",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1897:10:32",
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
                                                "src": "1888:20:32",
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
                                        "src": "1856:52:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6594,
                                    "nodeType": "IfStatement",
                                    "src": "1852:116:32",
                                    "trueBody": {
                                        "id": 6593,
                                        "nodeType": "Block",
                                        "src": "1910:58:32",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6588,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "1931:11:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6590,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1943:12:32",
                                                        "memberName": "Unauthorized",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7567,
                                                        "src": "1931:24:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6591,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1931:26:32",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6592,
                                                "nodeType": "RevertStatement",
                                                "src": "1924:33:32"
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
                                        "id": 6603,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 6597,
                                                    "name": "_target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 6575,
                                                    "src": "2047:7:32",
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
                                                "id": 6596,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2039:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 6595,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2039:7:32",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 6598,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2039:16:32",
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
                                                    "id": 6601,
                                                    "name": "_lido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 6252,
                                                    "src": "2067:5:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_ILido_$8479",
                                                        "typeString": "contract ILido"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_ILido_$8479",
                                                        "typeString": "contract ILido"
                                                    }
                                                ],
                                                "id": 6600,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2059:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 6599,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2059:7:32",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 6602,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2059:14:32",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2039:34:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6610,
                                    "nodeType": "IfStatement",
                                    "src": "2035:102:32",
                                    "trueBody": {
                                        "id": 6609,
                                        "nodeType": "Block",
                                        "src": "2075:62:32",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6604,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "2096:11:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6606,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2108:16:32",
                                                        "memberName": "UnsupportedToken",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7585,
                                                        "src": "2096:28:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6607,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2096:30:32",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6608,
                                                "nodeType": "RevertStatement",
                                                "src": "2089:37:32"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        6612
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 6612,
                                            "mutability": "mutable",
                                            "name": "stETHBalance",
                                            "nameLocation": "2226:12:32",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 6658,
                                            "src": "2218:20:32",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 6611,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2218:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 6620,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6617,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2265:4:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6693",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6693",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    ],
                                                    "id": 6616,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2257:7:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6615,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2257:7:32",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6618,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2257:13:32",
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
                                                "id": 6613,
                                                "name": "_lido",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6252,
                                                "src": "2241:5:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ILido_$8479",
                                                    "typeString": "contract ILido"
                                                }
                                            },
                                            "id": 6614,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2247:9:32",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6919,
                                            "src": "2241:15:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 6619,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2241:30:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2218:53:32"
                                },
                                {
                                    "assignments": [
                                        6622
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 6622,
                                            "mutability": "mutable",
                                            "name": "balance",
                                            "nameLocation": "2371:7:32",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 6658,
                                            "src": "2363:15:32",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 6621,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2363:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 6630,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6627,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2407:4:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6693",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_StETHTarget0_$6693",
                                                            "typeString": "contract StETHTarget0"
                                                        }
                                                    ],
                                                    "id": 6626,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2399:7:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6625,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2399:7:32",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6628,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2399:13:32",
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
                                                "id": 6623,
                                                "name": "_target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6575,
                                                "src": "2381:7:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 6624,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2389:9:32",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6919,
                                            "src": "2381:17:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 6629,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2381:32:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2363:50:32"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 6638,
                                                "name": "_feeCollector",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13704,
                                                "src": "2460:13:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 6639,
                                                "name": "balance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6622,
                                                "src": "2475:7:32",
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
                                                                "id": 6634,
                                                                "name": "_target",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 6575,
                                                                "src": "2437:7:32",
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
                                                            "id": 6633,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2429:7:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 6632,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2429:7:32",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 6635,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2429:16:32",
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
                                                    "id": 6631,
                                                    "name": "ERC20",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66276,
                                                    "src": "2423:5:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ERC20_$66276_$",
                                                        "typeString": "type(contract ERC20)"
                                                    }
                                                },
                                                "id": 6636,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2423:23:32",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$66276",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 6637,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2447:12:32",
                                            "memberName": "safeTransfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 66466,
                                            "src": "2423:36:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66354_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66354_$",
                                                "typeString": "function (contract IERC20,address,uint256)"
                                            }
                                        },
                                        "id": 6640,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2423:60:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6641,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2423:60:32"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 6650,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 6646,
                                                            "name": "this",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -28,
                                                            "src": "2579:4:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_StETHTarget0_$6693",
                                                                "typeString": "contract StETHTarget0"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_StETHTarget0_$6693",
                                                                "typeString": "contract StETHTarget0"
                                                            }
                                                        ],
                                                        "id": 6645,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2571:7:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 6644,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2571:7:32",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 6647,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2571:13:32",
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
                                                    "id": 6642,
                                                    "name": "_lido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 6252,
                                                    "src": "2555:5:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_ILido_$8479",
                                                        "typeString": "contract ILido"
                                                    }
                                                },
                                                "id": 6643,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2561:9:32",
                                                "memberName": "balanceOf",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 6919,
                                                "src": "2555:15:32",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                    "typeString": "function (address) view external returns (uint256)"
                                                }
                                            },
                                            "id": 6648,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2555:30:32",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 6649,
                                            "name": "stETHBalance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6612,
                                            "src": "2589:12:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2555:46:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6657,
                                    "nodeType": "IfStatement",
                                    "src": "2551:109:32",
                                    "trueBody": {
                                        "id": 6656,
                                        "nodeType": "Block",
                                        "src": "2603:57:32",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6651,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "2624:11:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6653,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2636:11:32",
                                                        "memberName": "SweepFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7558,
                                                        "src": "2624:23:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6654,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2624:25:32",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6655,
                                                "nodeType": "RevertStatement",
                                                "src": "2617:32:32"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 6572,
                            "nodeType": "StructuredDocumentation",
                            "src": "1332:397:32",
                            "text": "@notice Transfers the contract's balance of a target token to the fee\n         collector address.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The target token to sweep."
                        },
                        "functionSelector": "01681a62",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sweep",
                        "nameLocation": "1743:5:32",
                        "parameters": {
                            "id": 6576,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6575,
                                    "mutability": "mutable",
                                    "name": "_target",
                                    "nameLocation": "1756:7:32",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6659,
                                    "src": "1749:14:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6920",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 6574,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6573,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1749:6:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 6920,
                                            "src": "1749:6:32"
                                        },
                                        "referencedDeclaration": 6920,
                                        "src": "1749:6:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1748:16:32"
                        },
                        "returnParameters": {
                            "id": 6577,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1774:0:32"
                        },
                        "scope": 6693,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6674,
                        "nodeType": "FunctionDefinition",
                        "src": "2776:89:32",
                        "nodes": [],
                        "body": {
                            "id": 6673,
                            "nodeType": "Block",
                            "src": "2822:43:32",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6669,
                                                        "name": "_lido",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 6252,
                                                        "src": "2851:5:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ILido_$8479",
                                                            "typeString": "contract ILido"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ILido_$8479",
                                                            "typeString": "contract ILido"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 6667,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "2840:3:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 6668,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2844:6:32",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2840:10:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 6670,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2840:17:32",
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
                                            "id": 6666,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "2832:7:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 6671,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2832:26:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6672,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2832:26:32"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 6660,
                            "nodeType": "StructuredDocumentation",
                            "src": "2693:78:32",
                            "text": "@notice Returns the Lido contract.\n @return lido The Lido contract."
                        },
                        "functionSelector": "23509a2d",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lido",
                        "nameLocation": "2785:4:32",
                        "parameters": {
                            "id": 6661,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2789:2:32"
                        },
                        "returnParameters": {
                            "id": 6665,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6664,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6674,
                                    "src": "2815:5:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILido_$8479",
                                        "typeString": "contract ILido"
                                    },
                                    "typeName": {
                                        "id": 6663,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6662,
                                            "name": "ILido",
                                            "nameLocations": [
                                                "2815:5:32"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8479,
                                            "src": "2815:5:32"
                                        },
                                        "referencedDeclaration": 8479,
                                        "src": "2815:5:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8479",
                                            "typeString": "contract ILido"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2814:7:32"
                        },
                        "scope": 6693,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6692,
                        "nodeType": "FunctionDefinition",
                        "src": "2965:106:32",
                        "nodes": [],
                        "body": {
                            "id": 6691,
                            "nodeType": "Block",
                            "src": "3024:47:32",
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
                                                                "id": 6686,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3059:2:32",
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
                                                            "id": 6685,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3053:5:32",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint8_$",
                                                                "typeString": "type(uint8)"
                                                            },
                                                            "typeName": {
                                                                "id": 6684,
                                                                "name": "uint8",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3053:5:32",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 6687,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3053:9:32",
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
                                                        "id": 6682,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "3042:3:32",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 6683,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3046:6:32",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3042:10:32",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 6688,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3042:21:32",
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
                                            "id": 6681,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "3034:7:32",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 6689,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3034:30:32",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6690,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3034:30:32"
                                }
                            ]
                        },
                        "baseFunctions": [
                            3187
                        ],
                        "documentation": {
                            "id": 6675,
                            "nodeType": "StructuredDocumentation",
                            "src": "2871:89:32",
                            "text": "@notice Returns the MultiToken's decimals.\n @return The MultiToken's decimals."
                        },
                        "functionSelector": "313ce567",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nameLocation": "2974:8:32",
                        "overrides": {
                            "id": 6677,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "2999:8:32"
                        },
                        "parameters": {
                            "id": 6676,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2982:2:32"
                        },
                        "returnParameters": {
                            "id": 6680,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6679,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6692,
                                    "src": "3017:5:32",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 6678,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3017:5:32",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3016:7:32"
                        },
                        "scope": 6693,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 6547,
                            "name": "HyperdriveTarget0",
                            "nameLocations": [
                                "949:17:32"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 3257,
                            "src": "949:17:32"
                        },
                        "id": 6548,
                        "nodeType": "InheritanceSpecifier",
                        "src": "949:17:32"
                    },
                    {
                        "baseName": {
                            "id": 6549,
                            "name": "StETHBase",
                            "nameLocations": [
                                "968:9:32"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 6447,
                            "src": "968:9:32"
                        },
                        "id": 6550,
                        "nodeType": "InheritanceSpecifier",
                        "src": "968:9:32"
                    }
                ],
                "canonicalName": "StETHTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 6546,
                    "nodeType": "StructuredDocumentation",
                    "src": "488:436:32",
                    "text": "@author DELV\n @title StETHTarget0\n @notice StETHHyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    6693,
                    6447,
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
                "name": "StETHTarget0",
                "nameLocation": "933:12:32",
                "scope": 6694,
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
                    7558,
                    7567,
                    7582,
                    7585,
                    66433,
                    66714,
                    66719,
                    66722,
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
    "id": 32
};
