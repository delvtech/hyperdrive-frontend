export const ERC4626Target0 = {
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
                            "internalType": "address",
                            "name": "sweepCollector",
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
                    "internalType": "address",
                    "name": "destination",
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
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "basePayment",
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
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
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
                            "internalType": "address",
                            "name": "sweepCollector",
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
            "name": "setFeeCollector",
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
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                }
            ],
            "name": "setSweepCollector",
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
        "object": "0x6102406040523480156200001257600080fd5b5060405162004484380380620044848339810160408190526200003591620001de565b600160005581516001600160a01b039081166080908152606080850151610180908152918501516101a05260a0808601516101c05260e08087015190915260c080870151905261010080870151909152918501805151909252815160209081015161012090815283516040908101516101409081529451909301516101609081529187015185166101e052918601516102005290850151600a80549185166001600160a01b03199283161790559185015160088054918516918416919091179055909301516009805491831691909416179092551661022052620002e6565b6040516101a081016001600160401b03811182821017156200014657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016457600080fd5b919050565b6000608082840312156200017c57600080fd5b604051608081016001600160401b0381118282101715620001ad57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610220811215620001f457600080fd5b610200808212156200020557600080fd5b6200020f62000114565b91506200021c856200014c565b82526200022c602086016200014c565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e0830152610100808601518184015250610120620002898187016200014c565b908301526101406200029d8682016200014c565b90830152610160620002b18682016200014c565b90830152610180620002c68787830162000169565b8184015250819350620002db8186016200014c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161407f62000405600039600081816110500152818161214e015281816122ef01528181612563015281816125c9015261264e015260008181610add0152611aeb015260008181610ab10152611aae015260008181610b560152611ca3015260008181610b2c0152611c7d015260008181610b020152611c5701526000610c8501526000610c6001526000610c3b01526000610c18015260008181610bc80152611cc9015260008181610b7c01528181610e0601526123ae015260008181610ba2015261267c01526000818161060c01528181610a8c01528181610dad01526120c2015261407f6000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637ecebe001161011a578063c55dae63116100ad578063e44808bc1161007c578063e44808bc1461047d578063e4af29d114610490578063e985e9c5146104a3578063fba56008146104b6578063fbfa77cf146104e557600080fd5b8063c55dae631461042d578063c69e16ad1461044d578063cf210e6514610455578063d81657431461046857600080fd5b8063ab033ea9116100e9578063ab033ea9146103d2578063b0d96580146103e5578063bd85b039146103fa578063becee9c31461040d57600080fd5b80637ecebe00146103865780639cd241af14610399578063a22cb465146103ac578063a42dce80146103bf57600080fd5b8063313ce567116101925780634e41a1fb116101615780634e41a1fb146103385780634ed2d6ac1461034b57806360246c881461035e5780637180c8ca1461037357600080fd5b8063313ce567146102d55780633656eec2146102ef5780633e691db91461030257806346fbf68e1461031557600080fd5b806317fad7fc116101ce57806317fad7fc146102635780631c0f12b61461027657806320fc48811461028957806321ff32a9146102b457600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d57806314e5f07b14610250575b600080fd5b61021261020d36600461356c565b6104ed565b60405161021f91906135d5565b60405180910390f35b61023b6102363660046135fd565b610524565b005b61023b61024b366004613628565b610530565b61023b61025e366004613654565b610539565b61023b610271366004613728565b610555565b61023b6102843660046137bd565b61056b565b61029c61029736600461356c565b61057e565b60405190516001600160801b0316815260200161021f565b6102c76102c2366004613805565b6105bf565b60405190815260200161021f565b6102dd610605565b60405160ff909116815260200161021f565b6102c76102fd366004613847565b6106a3565b6102c7610310366004613877565b6106dc565b6103286103233660046135fd565b6106e7565b604051901515815260200161021f565b61021261034636600461356c565b61071d565b61023b6103593660046138b2565b61072b565b610366610779565b60405161021f91906138fc565b61023b61038136600461399d565b6109a6565b6102c76103943660046135fd565b6109b4565b61023b6103a73660046139cb565b6109e0565b61023b6103ba36600461399d565b6109f1565b61023b6103cd3660046135fd565b610a5d565b61023b6103e03660046135fd565b610a66565b6103ed610a6f565b60405161021f9190613a03565b6102c761040836600461356c565b610cc2565b61042061041b366004613afa565b610ce4565b60405161021f9190613b3c565b610435610d9f565b6040516001600160a01b03909116815260200161021f565b6102c7610ddf565b6102c761046336600461356c565b610df9565b610470610e42565b60405161021f9190613b80565b61023b61048b366004613c91565b610f4e565b61023b61049e3660046135fd565b610f96565b6103286104b1366004613cf0565b610f9f565b6104be610fe3565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b610435611042565b606061051f6104fb83611082565b60405160200161050b91906135d5565b6040516020818303038152906040526111aa565b919050565b61052d816111ce565b50565b61052d81611358565b61054a8989898989898989896113db565b505050505050505050565b6105638686868686866115d2565b505050505050565b6105788484848433611686565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526105fe910161050b565b9392505050565b60006106a07f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068c9190613d1e565b6040805160ff90921660208301520161050b565b90565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526106d6910161050b565b92915050565b60006106d682611847565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb83611972565b8361073581611a70565b6001600160a01b0316336001600160a01b03161461076657604051632aab8bd360e01b815260040160405180910390fd5b61077285858585611b2d565b5050505050565b6107f2604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107fc611b9a565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108679190613d67565b6108719190613d7a565b9050600080831161088357600061089e565b61089e8361089861089386611bb2565b611d48565b90611d78565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109725761096d8486611d8d565b610975565b60005b81526002546001600160801b031660209182015260405191925061099f9161050b918491016138fc565b5050505090565b6109b08282611da2565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b6109ec83838333611b2d565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611e2b565b61052d81611e9f565b610a776134ac565b604080516101a0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f0000000000000000000000000000000000000000000000000000000000000000610100860152600a5484166101208601526008548416610140860152600954909316610160850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f00000000000000000000000000000000000000000000000000000000000000009083015261018083019190915291516106a09261050b929101613a03565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610d0157610d01613d8d565b604051908082528060200260200182016040528015610d2a578160200160208202803683370190505b50905060005b83811015610d83576000858583818110610d4c57610d4c613da3565b90506020020135905060008154905080848481518110610d6e57610d6e613da3565b60209081029190910101525050600101610d30565b50610d988160405160200161050b9190613b3c565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916106a0910161050b565b60006106a0600b5460405160200161050b91815260200190565b600061051f610e30610e2b7f000000000000000000000000000000000000000000000000000000000000000085613d67565b611f13565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526106a0600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610f5881611a70565b6001600160a01b0316336001600160a01b031614610f8957604051632aab8bd360e01b815260040160405180910390fd5b6105638686868686611686565b61052d81611f57565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916106d6910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526106a09060600161050b565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916106a0910161050b565b606060f882901c6001600160f81b038316600061109e82611fcb565b905060008360038111156110b4576110b4613d3b565b036110e6576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111a2565b60018360038111156110fa576110fa613d3b565b0361112657806040516020016111109190613db9565b60405160208183030381529060405293506111a2565b600283600381111561113a5761113a613d3b565b0361115057806040516020016111109190613df2565b600383600381111561116457611164613d3b565b036111a2576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111c591906135d5565b60405180910390fd5b6111d6612080565b336000908152600c602052604090205460ff1615801561120157506009546001600160a01b03163314155b80156112185750600a546001600160a01b03163314155b15611235576040516282b42960e81b815260040160405180910390fd5b600061123f6120aa565b9050600061124b612136565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611295573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b99190613e2c565b6009549091506112d6906001600160a01b03868116911683612185565b826112df6120aa565b1415806112f35750816112f0612136565b14155b15611311576040516313dd85ff60e31b815260040160405180910390fd5b6009546040516001600160a01b038087169216907f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09690600090a350505061052d6001600055565b336000908152600c602052604090205460ff16611387576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113d090831515815260200190565b60405180910390a150565b834211156113fc5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114235760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611511573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461154f57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806115ef57506001600160a01b038516155b1561160d5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461162d5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561167d5761167585858381811061164d5761164d613da3565b90506020020135888886868681811061166857611668613da3565b9050602002013533611686565b600101611630565b50505050505050565b6001600160a01b03841615806116a357506001600160a01b038316155b156116c15760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611785576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117855760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117835760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061177d908490613d7a565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117b7908490613d7a565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906117ee908490613d67565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611851612080565b61185a826121d7565b6008546001600160a01b031661187360208401846135fd565b6001600160a01b03161461189a57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118c557506008546001600160a01b03163314155b80156118dc5750600a546001600160a01b03163314155b156118f9576040516282b42960e81b815260040160405180910390fd5b6000611903611b9a565b600b8054600090915590915061191a81838661220d565b6008549093506001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476119558585886122a7565b60405190815260200160405180910390a2505061051f6001600055565b606060f882901c6001600160f81b038316600061198e82611fcb565b905060008360038111156119a4576119a4613d3b565b036119d6576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111a2565b60018360038111156119ea576119ea613d3b565b03611a0057806040516020016111109190613e45565b6002836003811115611a1457611a14613d3b565b03611a2a57806040516020016111109190613e7d565b6003836003811115611a3e57611a3e613d3b565b036111a257505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bad670de0b6b3a76400006122d6565b905090565b611c166040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d0e9116612363565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d4092900416612363565b905292915050565b6000806000611d56846123d9565b9150915080610d9857604051635516328b60e11b815260040160405180910390fd5b60006105fe8383670de0b6b3a7640000612466565b60006105fe83670de0b6b3a764000084612466565b600a546001600160a01b03163314611dcc576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e55576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611ec9576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f3b600e6000611f27600286612484565b8152602001908152602001600020546124b9565b611f4d600e6000611f27600187612484565b6106d69190613ea9565b600a546001600160a01b03163314611f81576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561207257612006600a86613edf565b612011906030613d67565b60f81b8260016120218487613d7a565b61202b9190613d7a565b8151811061203b5761203b613da3565b60200101906001600160f81b031916908160001a9053508061205c81613ef3565b915061206b9050600a86613f0c565b9450611ff5565b918290030190815292915050565b6002600054036120a357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a08231906024015b602060405180830381865afa158015612112573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bad9190613e2c565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a08231906024016120f5565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526109ec9084906124e7565b60006121e660208301836135fd565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b60008061221a8585611d78565b90506122258161254a565b9450846000036122395760009150506105fe565b6122496040840160208501613628565b15612278576122718561225f60208601866135fd565b61226c6040870187613f20565b61259a565b915061229f565b61229b8561228960208601866135fd565b6122966040870187613f20565b612641565b8491505b509392505050565b60006122b96040830160208401613628565b156122c55750826105fe565b6122cf8484611d78565b90506105fe565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa15801561233f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d69190613e2c565b600080670de0b6b3a7640000612377612675565b6123819190613f67565b905080831161239157600061239b565b61239b8184613d7a565b91506105fe6123d2670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f67565b8390611d8d565b60008060008060006123ea866126ab565b915091508061240157506000958695509350505050565b61240e8660a001516124b9565b612417876129e5565b8361242589600001516124b9565b61242f9190613f7e565b6124399190613f7e565b6124439190613ea9565b92505050600081121561245c5750600093849350915050565b9360019350915050565b600082600019048411830215820261247d57600080fd5b5091020490565b60006001600160f81b038211156124ae5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124e35760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124fc6001600160a01b03841683612a49565b9050805160001415801561252157508080602001905181019061251f9190613f9e565b155b156109ec57604051635274afe760e01b81526001600160a01b03841660048201526024016111c5565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401612322565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015612614573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126389190613e2c565b95945050505050565b6105786001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612185565b60006126a17f000000000000000000000000000000000000000000000000000000000000000042613edf565b611bad9042613d7a565b60008060006126d56126d0856101600151866101400151611d7890919063ffffffff16565b6124b9565b6126f56126d0866101200151876101000151612a5790919063ffffffff16565b6126ff9190613ea9565b905060008061271686600001518760200151612a6c565b915091508061272d57506000958695509350505050565b600083131561287d576000839050600061277b886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061276c9190613d7a565b8d606001518e60800151612aab565b9350905082612794575060009788975095505050505050565b8181106128325760006127ce858a60400151858c60e00151670de0b6b3a76400006127bf9190613d7a565b8d606001518e60800151612ba4565b94509050831580156127e357508860c0015183105b156127fa5750600098600198509650505050505050565b8361281057506000988998509650505050505050565b612819816124b9565b61282290613fbb565b9960019950975050505050505050565b6000886020015112612869576128518860a00151856126d09190613d7a565b61285a90613fbb565b98600198509650505050505050565b60a08801518851612851916126d091613d7a565b60008312156129d657600061289184613fbb565b905060006128c58489604001518a60e00151670de0b6b3a76400006128b69190613d7a565b8b606001518c60800151612c67565b93509050826128de575060009788975095505050505050565b818110612963576000612918858a60400151858c60e00151670de0b6b3a76400006129099190613d7a565b8d606001518e60800151612d13565b945090508315801561292d57508860c0015183105b156129445750600098600198509650505050505050565b8361295a57506000988998509650505050505050565b612822816124b9565b6000612995858a604001518b60e00151670de0b6b3a76400006129869190613d7a565b8c606001518d60800151612dea565b94509050836129af57506000988998509650505050505050565b6128226129cc8a6060015184866129c69190613d7a565b90611d8d565b6126d09083613d67565b50600095600195509350505050565b6000612a186126d0836101200151670de0b6b3a7640000612a069190613d7a565b60608501516101008601519190612e99565b611f4d6126d0846101600151670de0b6b3a7640000612a379190613d7a565b60608601516101408701519190612466565b60606105fe83836000612ebf565b60006105fe8383670de0b6b3a7640000612e99565b600080600083612a7b866124b9565b612a859190613ea9565b90506000811215612a9d576000809250925050612aa4565b9150600190505b9250929050565b6000806000881215612acd57612ac088613fbb565b612aca9087613d67565b95505b6000612ad98a8a612f5c565b90506000612aea828a898989612f7d565b90506000612b0d612b0589612aff898d612a57565b90612fac565b889088612e99565b905080821015612b265760008094509450505050612b98565b808203670de0b6b3a76400008110612b5b57612b54612b4d670de0b6b3a76400008b611d8d565b8290612fac565b9050612b73565b612b70612b4d670de0b6b3a76400008b613017565b90505b8a811015612b8b576000809550955050505050612b98565b8a90039450600193505050505b97509795505050505050565b6000806000612bb6898988888861302c565b9050612bc686612aff898b613d67565b975087811015612bdd576000809250925050612c5c565b878103612beb818688612e99565b9050670de0b6b3a76400008110612c1857612c11612b4d670de0b6b3a764000089613017565b9050612c30565b612c2d612b4d670de0b6b3a764000089611d8d565b90505b612c3a8186613017565b9050808a1015612c5257600080935093505050612c5c565b8903925060019150505b965096945050505050565b6000806000612c79888888888861302c565b90506000612ca4670de0b6b3a7640000612c938888611d8d565b612c9d9190613d67565b8390613017565b9050670de0b6b3a76400008110612cd157612cca612b4d670de0b6b3a764000089613017565b9050612ce9565b612ce6612b4d670de0b6b3a764000089611d8d565b90505b80881015612cff57600080935093505050612d09565b8703925060019150505b9550959350505050565b6000806000612d25898988888861302c565b905086881015612d3c576000809250925050612c5c565b9686900396612d4b8887612fac565b975087811015612d62576000809250925050612c5c565b878103612d70818688612e99565b9050670de0b6b3a76400008110612d9d57612d96612b4d670de0b6b3a764000089613017565b9050612db5565b612db2612b4d670de0b6b3a764000089611d8d565b90505b612dbf8186613017565b905089811015612dd757600080935093505050612c5c565b9890980398600198509650505050505050565b6000806000612dfc8888888888612f7d565b90506000612e20670de0b6b3a7640000612e168888613017565b6123d29190613d67565b9050670de0b6b3a76400008110612e4d57612e46612b4d670de0b6b3a764000089611d8d565b9050612e65565b612e62612b4d670de0b6b3a764000089613017565b90505b612e6f8186611d8d565b905088811015612e8757600080935093505050612d09565b97909703976001975095505050505050565b6000826000190484118302158202612eb057600080fd5b50910281810615159190040190565b606081471015612ee45760405163cd78605960e01b81523060048201526024016111c5565b600080856001600160a01b03168486604051612f009190613fd7565b60006040518083038185875af1925050503d8060008114612f3d576040519150601f19603f3d011682016040523d82523d6000602084013e612f42565b606091505b5091509150612f52868383613051565b9695505050505050565b600080612f698484612a6c565b909250905080610d9857610d9860016130ad565b6000612f898585612fac565b612fa2612f9a86612aff868b611d78565b859085612466565b612f529190613d67565b600081600003612fc55750670de0b6b3a76400006106d6565b82600003612fd5575060006106d6565b6000612fe0836124b9565b90506000612ff5612ff0866124b9565b6130c8565b905081810261300c670de0b6b3a764000082613ff3565b9050612f52816132ee565b60006105fe83670de0b6b3a764000084612e99565b60006130388585612fac565b612fa261304986612aff868b612a57565b859085612e99565b6060826130665761306182613483565b6105fe565b815115801561307d57506001600160a01b0384163b155b156130a657604051639996b31560e01b81526001600160a01b03851660048201526024016111c5565b50806105fe565b80604051633c06d78b60e11b81526004016111c59190614021565b60008082136130ea5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061316d9084901c6124b9565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361330957506000919050565b680755bf798b4a1bf1e58212613332576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f5274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6124b9565b8051156134935780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016135676040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561357e57600080fd5b5035919050565b60005b838110156135a0578181015183820152602001613588565b50506000910152565b600081518084526135c1816020860160208601613585565b601f01601f19169290920160200192915050565b6020815260006105fe60208301846135a9565b6001600160a01b038116811461052d57600080fd5b60006020828403121561360f57600080fd5b81356105fe816135e8565b801515811461052d57600080fd5b60006020828403121561363a57600080fd5b81356105fe8161361a565b60ff8116811461052d57600080fd5b60008060008060008060008060006101208a8c03121561367357600080fd5b8935985060208a0135975060408a013561368c816135e8565b965060608a013561369c816135e8565b955060808a01356136ac8161361a565b945060a08a0135935060c08a01356136c381613645565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126136f557600080fd5b50813567ffffffffffffffff81111561370d57600080fd5b6020830191508360208260051b8501011115612aa457600080fd5b6000806000806000806080878903121561374157600080fd5b863561374c816135e8565b9550602087013561375c816135e8565b9450604087013567ffffffffffffffff8082111561377957600080fd5b6137858a838b016136e3565b9096509450606089013591508082111561379e57600080fd5b506137ab89828a016136e3565b979a9699509497509295939492505050565b600080600080608085870312156137d357600080fd5b8435935060208501356137e5816135e8565b925060408501356137f5816135e8565b9396929550929360600135925050565b60008060006060848603121561381a57600080fd5b83359250602084013561382c816135e8565b9150604084013561383c816135e8565b809150509250925092565b6000806040838503121561385a57600080fd5b82359150602083013561386c816135e8565b809150509250929050565b60006020828403121561388957600080fd5b813567ffffffffffffffff8111156138a057600080fd5b8201606081850312156105fe57600080fd5b600080600080608085870312156138c857600080fd5b8435935060208501356138da816135e8565b92506040850135915060608501356138f1816135e8565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156139b057600080fd5b82356139bb816135e8565b9150602083013561386c8161361a565b6000806000606084860312156139e057600080fd5b8335925060208401356139f2816135e8565b929592945050506040919091013590565b81516001600160a01b0316815261020081016020830151613a2f60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613a93828501826001600160a01b03169052565b5050610140838101516001600160a01b038116848301525050610160838101516001600160a01b0381168483015250506101808381015180518483015260208101516101a085015260408101516101c085015260608101516101e08501525b505092915050565b60008060208385031215613b0d57600080fd5b823567ffffffffffffffff811115613b2457600080fd5b613b30858286016136e3565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613b7457835183529284019291840191600101613b58565b50909695505050505050565b81516001600160801b0316815261018081016020830151613bac60208401826001600160801b03169052565b506040830151613bc760408401826001600160801b03169052565b506060830151613be260608401826001600160801b03169052565b506080830151613bf76080840182600f0b9052565b5060a0830151613c1260a08401826001600160801b03169052565b5060c0830151613c2d60c08401826001600160801b03169052565b5060e0830151613c4860e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613af2565b600080600080600060a08688031215613ca957600080fd5b853594506020860135613cbb816135e8565b93506040860135613ccb816135e8565b9250606086013591506080860135613ce2816135e8565b809150509295509295909350565b60008060408385031215613d0357600080fd5b8235613d0e816135e8565b9150602083013561386c816135e8565b600060208284031215613d3057600080fd5b81516105fe81613645565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156106d6576106d6613d51565b818103818111156106d6576106d6613d51565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613de5816011850160208701613585565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613e1f816012850160208701613585565b9190910160120192915050565b600060208284031215613e3e57600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613e70816010850160208701613585565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613de5816011850160208701613585565b8181036000831280158383131683831282161715610d9857610d98613d51565b634e487b7160e01b600052601260045260246000fd5b600082613eee57613eee613ec9565b500690565b600060018201613f0557613f05613d51565b5060010190565b600082613f1b57613f1b613ec9565b500490565b6000808335601e19843603018112613f3757600080fd5b83018035915067ffffffffffffffff821115613f5257600080fd5b602001915036819003821315612aa457600080fd5b80820281158282048414176106d6576106d6613d51565b8082018281126000831280158216821582161715613af257613af2613d51565b600060208284031215613fb057600080fd5b81516105fe8161361a565b6000600160ff1b8201613fd057613fd0613d51565b5060000390565b60008251613fe9818460208701613585565b9190910192915050565b60008261400257614002613ec9565b600160ff1b82146000198414161561401c5761401c613d51565b500590565b602081016004831061404357634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220972478ebcc894c8dbb60d72b649354d4568c58a7d868354f6cd81e9fdc36392364736f6c63430008140033",
        "sourceMap": "938:681:46:-:0;;;1202:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:171;1917:7;:21;5192:17:120;;-1:-1:-1;;;;;5179:30:120;;;;;;;5299;;;;;5273:56;;;;5752:28;;;;5728:52;;6068:32;;;;;6040:60;;6283:26;;;;;6261:48;;;6339:24;;;;;6319:44;;-1:-1:-1;6388:19:120;;;;6373:34;;;6472:12;;;;;:18;6460:30;;;6511:12;;-1:-1:-1;6511:17:120;;;;-1:-1:-1;6500:28:120;;;6557:12;;-1:-1:-1;6557:25:120;;;;6538:44;;;;6615:12;;:29;;;;6592:52;;;;-1:-1:-1;;;6721:21:120;6704:38;;;;-1:-1:-1;;;6770:22:120;6752:40;;6895:18;;;;6881:11;:32;;;;;-1:-1:-1;;;;;;6881:32:120;;;;;;6939:20;;;;6923:13;:36;;;;;;;;;;;;;;6987:22;;;;6969:15;:40;;;;;;;;;;;;;1508:16:44;;;938:681:46;;14:347:235;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:235;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:235;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:235;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1490::-;1368:6;1376;1420:9;1411:7;1407:23;1450:3;1446:2;1442:12;1439:32;;;1467:1;1464;1457:12;1439:32;1490:6;1516:2;1512;1508:11;1505:31;;;1532:1;1529;1522:12;1505:31;1558:17;;:::i;:::-;1545:30;;1598:48;1636:9;1598:48;:::i;:::-;1591:5;1584:63;1679:57;1732:2;1721:9;1717:18;1679:57;:::i;:::-;1674:2;1667:5;1663:14;1656:81;1790:2;1779:9;1775:18;1769:25;1764:2;1757:5;1753:14;1746:49;1848:2;1837:9;1833:18;1827:25;1822:2;1815:5;1811:14;1804:49;1907:3;1896:9;1892:19;1886:26;1880:3;1873:5;1869:15;1862:51;1967:3;1956:9;1952:19;1946:26;1940:3;1933:5;1929:15;1922:51;2027:3;2016:9;2012:19;2006:26;2000:3;1993:5;1989:15;1982:51;2087:3;2076:9;2072:19;2066:26;2060:3;2053:5;2049:15;2042:51;2112:3;2168:2;2157:9;2153:18;2147:25;2142:2;2135:5;2131:14;2124:49;;2192:3;2227:57;2280:2;2269:9;2265:18;2227:57;:::i;:::-;2211:14;;;2204:81;2304:3;2339:57;2377:18;;;2339:57;:::i;:::-;2323:14;;;2316:81;2416:3;2451:57;2489:18;;;2451:57;:::i;:::-;2435:14;;;2428:81;2528:3;2563:62;2617:7;2597:18;;;2563:62;:::i;:::-;2558:2;2551:5;2547:14;2540:86;;2645:5;2635:15;;2669:57;2722:2;2711:9;2707:18;2669:57;:::i;:::-;2659:67;;;;1242:1490;;;;;:::o;:::-;938:681:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637ecebe001161011a578063c55dae63116100ad578063e44808bc1161007c578063e44808bc1461047d578063e4af29d114610490578063e985e9c5146104a3578063fba56008146104b6578063fbfa77cf146104e557600080fd5b8063c55dae631461042d578063c69e16ad1461044d578063cf210e6514610455578063d81657431461046857600080fd5b8063ab033ea9116100e9578063ab033ea9146103d2578063b0d96580146103e5578063bd85b039146103fa578063becee9c31461040d57600080fd5b80637ecebe00146103865780639cd241af14610399578063a22cb465146103ac578063a42dce80146103bf57600080fd5b8063313ce567116101925780634e41a1fb116101615780634e41a1fb146103385780634ed2d6ac1461034b57806360246c881461035e5780637180c8ca1461037357600080fd5b8063313ce567146102d55780633656eec2146102ef5780633e691db91461030257806346fbf68e1461031557600080fd5b806317fad7fc116101ce57806317fad7fc146102635780631c0f12b61461027657806320fc48811461028957806321ff32a9146102b457600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d57806314e5f07b14610250575b600080fd5b61021261020d36600461356c565b6104ed565b60405161021f91906135d5565b60405180910390f35b61023b6102363660046135fd565b610524565b005b61023b61024b366004613628565b610530565b61023b61025e366004613654565b610539565b61023b610271366004613728565b610555565b61023b6102843660046137bd565b61056b565b61029c61029736600461356c565b61057e565b60405190516001600160801b0316815260200161021f565b6102c76102c2366004613805565b6105bf565b60405190815260200161021f565b6102dd610605565b60405160ff909116815260200161021f565b6102c76102fd366004613847565b6106a3565b6102c7610310366004613877565b6106dc565b6103286103233660046135fd565b6106e7565b604051901515815260200161021f565b61021261034636600461356c565b61071d565b61023b6103593660046138b2565b61072b565b610366610779565b60405161021f91906138fc565b61023b61038136600461399d565b6109a6565b6102c76103943660046135fd565b6109b4565b61023b6103a73660046139cb565b6109e0565b61023b6103ba36600461399d565b6109f1565b61023b6103cd3660046135fd565b610a5d565b61023b6103e03660046135fd565b610a66565b6103ed610a6f565b60405161021f9190613a03565b6102c761040836600461356c565b610cc2565b61042061041b366004613afa565b610ce4565b60405161021f9190613b3c565b610435610d9f565b6040516001600160a01b03909116815260200161021f565b6102c7610ddf565b6102c761046336600461356c565b610df9565b610470610e42565b60405161021f9190613b80565b61023b61048b366004613c91565b610f4e565b61023b61049e3660046135fd565b610f96565b6103286104b1366004613cf0565b610f9f565b6104be610fe3565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b610435611042565b606061051f6104fb83611082565b60405160200161050b91906135d5565b6040516020818303038152906040526111aa565b919050565b61052d816111ce565b50565b61052d81611358565b61054a8989898989898989896113db565b505050505050505050565b6105638686868686866115d2565b505050505050565b6105788484848433611686565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526105fe910161050b565b9392505050565b60006106a07f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068c9190613d1e565b6040805160ff90921660208301520161050b565b90565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526106d6910161050b565b92915050565b60006106d682611847565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb83611972565b8361073581611a70565b6001600160a01b0316336001600160a01b03161461076657604051632aab8bd360e01b815260040160405180910390fd5b61077285858585611b2d565b5050505050565b6107f2604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107fc611b9a565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108679190613d67565b6108719190613d7a565b9050600080831161088357600061089e565b61089e8361089861089386611bb2565b611d48565b90611d78565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109725761096d8486611d8d565b610975565b60005b81526002546001600160801b031660209182015260405191925061099f9161050b918491016138fc565b5050505090565b6109b08282611da2565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b6109ec83838333611b2d565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611e2b565b61052d81611e9f565b610a776134ac565b604080516101a0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f0000000000000000000000000000000000000000000000000000000000000000610100860152600a5484166101208601526008548416610140860152600954909316610160850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f00000000000000000000000000000000000000000000000000000000000000009083015261018083019190915291516106a09261050b929101613a03565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610d0157610d01613d8d565b604051908082528060200260200182016040528015610d2a578160200160208202803683370190505b50905060005b83811015610d83576000858583818110610d4c57610d4c613da3565b90506020020135905060008154905080848481518110610d6e57610d6e613da3565b60209081029190910101525050600101610d30565b50610d988160405160200161050b9190613b3c565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916106a0910161050b565b60006106a0600b5460405160200161050b91815260200190565b600061051f610e30610e2b7f000000000000000000000000000000000000000000000000000000000000000085613d67565b611f13565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526106a0600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610f5881611a70565b6001600160a01b0316336001600160a01b031614610f8957604051632aab8bd360e01b815260040160405180910390fd5b6105638686868686611686565b61052d81611f57565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916106d6910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526106a09060600161050b565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916106a0910161050b565b606060f882901c6001600160f81b038316600061109e82611fcb565b905060008360038111156110b4576110b4613d3b565b036110e6576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111a2565b60018360038111156110fa576110fa613d3b565b0361112657806040516020016111109190613db9565b60405160208183030381529060405293506111a2565b600283600381111561113a5761113a613d3b565b0361115057806040516020016111109190613df2565b600383600381111561116457611164613d3b565b036111a2576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111c591906135d5565b60405180910390fd5b6111d6612080565b336000908152600c602052604090205460ff1615801561120157506009546001600160a01b03163314155b80156112185750600a546001600160a01b03163314155b15611235576040516282b42960e81b815260040160405180910390fd5b600061123f6120aa565b9050600061124b612136565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611295573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b99190613e2c565b6009549091506112d6906001600160a01b03868116911683612185565b826112df6120aa565b1415806112f35750816112f0612136565b14155b15611311576040516313dd85ff60e31b815260040160405180910390fd5b6009546040516001600160a01b038087169216907f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09690600090a350505061052d6001600055565b336000908152600c602052604090205460ff16611387576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113d090831515815260200190565b60405180910390a150565b834211156113fc5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114235760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611511573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461154f57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806115ef57506001600160a01b038516155b1561160d5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461162d5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561167d5761167585858381811061164d5761164d613da3565b90506020020135888886868681811061166857611668613da3565b9050602002013533611686565b600101611630565b50505050505050565b6001600160a01b03841615806116a357506001600160a01b038316155b156116c15760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611785576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117855760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117835760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061177d908490613d7a565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117b7908490613d7a565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906117ee908490613d67565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611851612080565b61185a826121d7565b6008546001600160a01b031661187360208401846135fd565b6001600160a01b03161461189a57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118c557506008546001600160a01b03163314155b80156118dc5750600a546001600160a01b03163314155b156118f9576040516282b42960e81b815260040160405180910390fd5b6000611903611b9a565b600b8054600090915590915061191a81838661220d565b6008549093506001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476119558585886122a7565b60405190815260200160405180910390a2505061051f6001600055565b606060f882901c6001600160f81b038316600061198e82611fcb565b905060008360038111156119a4576119a4613d3b565b036119d6576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111a2565b60018360038111156119ea576119ea613d3b565b03611a0057806040516020016111109190613e45565b6002836003811115611a1457611a14613d3b565b03611a2a57806040516020016111109190613e7d565b6003836003811115611a3e57611a3e613d3b565b036111a257505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bad670de0b6b3a76400006122d6565b905090565b611c166040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d0e9116612363565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d4092900416612363565b905292915050565b6000806000611d56846123d9565b9150915080610d9857604051635516328b60e11b815260040160405180910390fd5b60006105fe8383670de0b6b3a7640000612466565b60006105fe83670de0b6b3a764000084612466565b600a546001600160a01b03163314611dcc576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e55576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611ec9576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f3b600e6000611f27600286612484565b8152602001908152602001600020546124b9565b611f4d600e6000611f27600187612484565b6106d69190613ea9565b600a546001600160a01b03163314611f81576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561207257612006600a86613edf565b612011906030613d67565b60f81b8260016120218487613d7a565b61202b9190613d7a565b8151811061203b5761203b613da3565b60200101906001600160f81b031916908160001a9053508061205c81613ef3565b915061206b9050600a86613f0c565b9450611ff5565b918290030190815292915050565b6002600054036120a357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a08231906024015b602060405180830381865afa158015612112573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bad9190613e2c565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a08231906024016120f5565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526109ec9084906124e7565b60006121e660208301836135fd565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b60008061221a8585611d78565b90506122258161254a565b9450846000036122395760009150506105fe565b6122496040840160208501613628565b15612278576122718561225f60208601866135fd565b61226c6040870187613f20565b61259a565b915061229f565b61229b8561228960208601866135fd565b6122966040870187613f20565b612641565b8491505b509392505050565b60006122b96040830160208401613628565b156122c55750826105fe565b6122cf8484611d78565b90506105fe565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa15801561233f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d69190613e2c565b600080670de0b6b3a7640000612377612675565b6123819190613f67565b905080831161239157600061239b565b61239b8184613d7a565b91506105fe6123d2670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f67565b8390611d8d565b60008060008060006123ea866126ab565b915091508061240157506000958695509350505050565b61240e8660a001516124b9565b612417876129e5565b8361242589600001516124b9565b61242f9190613f7e565b6124399190613f7e565b6124439190613ea9565b92505050600081121561245c5750600093849350915050565b9360019350915050565b600082600019048411830215820261247d57600080fd5b5091020490565b60006001600160f81b038211156124ae5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124e35760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124fc6001600160a01b03841683612a49565b9050805160001415801561252157508080602001905181019061251f9190613f9e565b155b156109ec57604051635274afe760e01b81526001600160a01b03841660048201526024016111c5565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401612322565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015612614573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126389190613e2c565b95945050505050565b6105786001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612185565b60006126a17f000000000000000000000000000000000000000000000000000000000000000042613edf565b611bad9042613d7a565b60008060006126d56126d0856101600151866101400151611d7890919063ffffffff16565b6124b9565b6126f56126d0866101200151876101000151612a5790919063ffffffff16565b6126ff9190613ea9565b905060008061271686600001518760200151612a6c565b915091508061272d57506000958695509350505050565b600083131561287d576000839050600061277b886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061276c9190613d7a565b8d606001518e60800151612aab565b9350905082612794575060009788975095505050505050565b8181106128325760006127ce858a60400151858c60e00151670de0b6b3a76400006127bf9190613d7a565b8d606001518e60800151612ba4565b94509050831580156127e357508860c0015183105b156127fa5750600098600198509650505050505050565b8361281057506000988998509650505050505050565b612819816124b9565b61282290613fbb565b9960019950975050505050505050565b6000886020015112612869576128518860a00151856126d09190613d7a565b61285a90613fbb565b98600198509650505050505050565b60a08801518851612851916126d091613d7a565b60008312156129d657600061289184613fbb565b905060006128c58489604001518a60e00151670de0b6b3a76400006128b69190613d7a565b8b606001518c60800151612c67565b93509050826128de575060009788975095505050505050565b818110612963576000612918858a60400151858c60e00151670de0b6b3a76400006129099190613d7a565b8d606001518e60800151612d13565b945090508315801561292d57508860c0015183105b156129445750600098600198509650505050505050565b8361295a57506000988998509650505050505050565b612822816124b9565b6000612995858a604001518b60e00151670de0b6b3a76400006129869190613d7a565b8c606001518d60800151612dea565b94509050836129af57506000988998509650505050505050565b6128226129cc8a6060015184866129c69190613d7a565b90611d8d565b6126d09083613d67565b50600095600195509350505050565b6000612a186126d0836101200151670de0b6b3a7640000612a069190613d7a565b60608501516101008601519190612e99565b611f4d6126d0846101600151670de0b6b3a7640000612a379190613d7a565b60608601516101408701519190612466565b60606105fe83836000612ebf565b60006105fe8383670de0b6b3a7640000612e99565b600080600083612a7b866124b9565b612a859190613ea9565b90506000811215612a9d576000809250925050612aa4565b9150600190505b9250929050565b6000806000881215612acd57612ac088613fbb565b612aca9087613d67565b95505b6000612ad98a8a612f5c565b90506000612aea828a898989612f7d565b90506000612b0d612b0589612aff898d612a57565b90612fac565b889088612e99565b905080821015612b265760008094509450505050612b98565b808203670de0b6b3a76400008110612b5b57612b54612b4d670de0b6b3a76400008b611d8d565b8290612fac565b9050612b73565b612b70612b4d670de0b6b3a76400008b613017565b90505b8a811015612b8b576000809550955050505050612b98565b8a90039450600193505050505b97509795505050505050565b6000806000612bb6898988888861302c565b9050612bc686612aff898b613d67565b975087811015612bdd576000809250925050612c5c565b878103612beb818688612e99565b9050670de0b6b3a76400008110612c1857612c11612b4d670de0b6b3a764000089613017565b9050612c30565b612c2d612b4d670de0b6b3a764000089611d8d565b90505b612c3a8186613017565b9050808a1015612c5257600080935093505050612c5c565b8903925060019150505b965096945050505050565b6000806000612c79888888888861302c565b90506000612ca4670de0b6b3a7640000612c938888611d8d565b612c9d9190613d67565b8390613017565b9050670de0b6b3a76400008110612cd157612cca612b4d670de0b6b3a764000089613017565b9050612ce9565b612ce6612b4d670de0b6b3a764000089611d8d565b90505b80881015612cff57600080935093505050612d09565b8703925060019150505b9550959350505050565b6000806000612d25898988888861302c565b905086881015612d3c576000809250925050612c5c565b9686900396612d4b8887612fac565b975087811015612d62576000809250925050612c5c565b878103612d70818688612e99565b9050670de0b6b3a76400008110612d9d57612d96612b4d670de0b6b3a764000089613017565b9050612db5565b612db2612b4d670de0b6b3a764000089611d8d565b90505b612dbf8186613017565b905089811015612dd757600080935093505050612c5c565b9890980398600198509650505050505050565b6000806000612dfc8888888888612f7d565b90506000612e20670de0b6b3a7640000612e168888613017565b6123d29190613d67565b9050670de0b6b3a76400008110612e4d57612e46612b4d670de0b6b3a764000089611d8d565b9050612e65565b612e62612b4d670de0b6b3a764000089613017565b90505b612e6f8186611d8d565b905088811015612e8757600080935093505050612d09565b97909703976001975095505050505050565b6000826000190484118302158202612eb057600080fd5b50910281810615159190040190565b606081471015612ee45760405163cd78605960e01b81523060048201526024016111c5565b600080856001600160a01b03168486604051612f009190613fd7565b60006040518083038185875af1925050503d8060008114612f3d576040519150601f19603f3d011682016040523d82523d6000602084013e612f42565b606091505b5091509150612f52868383613051565b9695505050505050565b600080612f698484612a6c565b909250905080610d9857610d9860016130ad565b6000612f898585612fac565b612fa2612f9a86612aff868b611d78565b859085612466565b612f529190613d67565b600081600003612fc55750670de0b6b3a76400006106d6565b82600003612fd5575060006106d6565b6000612fe0836124b9565b90506000612ff5612ff0866124b9565b6130c8565b905081810261300c670de0b6b3a764000082613ff3565b9050612f52816132ee565b60006105fe83670de0b6b3a764000084612e99565b60006130388585612fac565b612fa261304986612aff868b612a57565b859085612e99565b6060826130665761306182613483565b6105fe565b815115801561307d57506001600160a01b0384163b155b156130a657604051639996b31560e01b81526001600160a01b03851660048201526024016111c5565b50806105fe565b80604051633c06d78b60e11b81526004016111c59190614021565b60008082136130ea5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061316d9084901c6124b9565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361330957506000919050565b680755bf798b4a1bf1e58212613332576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f5274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6124b9565b8051156134935780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016135676040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561357e57600080fd5b5035919050565b60005b838110156135a0578181015183820152602001613588565b50506000910152565b600081518084526135c1816020860160208601613585565b601f01601f19169290920160200192915050565b6020815260006105fe60208301846135a9565b6001600160a01b038116811461052d57600080fd5b60006020828403121561360f57600080fd5b81356105fe816135e8565b801515811461052d57600080fd5b60006020828403121561363a57600080fd5b81356105fe8161361a565b60ff8116811461052d57600080fd5b60008060008060008060008060006101208a8c03121561367357600080fd5b8935985060208a0135975060408a013561368c816135e8565b965060608a013561369c816135e8565b955060808a01356136ac8161361a565b945060a08a0135935060c08a01356136c381613645565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126136f557600080fd5b50813567ffffffffffffffff81111561370d57600080fd5b6020830191508360208260051b8501011115612aa457600080fd5b6000806000806000806080878903121561374157600080fd5b863561374c816135e8565b9550602087013561375c816135e8565b9450604087013567ffffffffffffffff8082111561377957600080fd5b6137858a838b016136e3565b9096509450606089013591508082111561379e57600080fd5b506137ab89828a016136e3565b979a9699509497509295939492505050565b600080600080608085870312156137d357600080fd5b8435935060208501356137e5816135e8565b925060408501356137f5816135e8565b9396929550929360600135925050565b60008060006060848603121561381a57600080fd5b83359250602084013561382c816135e8565b9150604084013561383c816135e8565b809150509250925092565b6000806040838503121561385a57600080fd5b82359150602083013561386c816135e8565b809150509250929050565b60006020828403121561388957600080fd5b813567ffffffffffffffff8111156138a057600080fd5b8201606081850312156105fe57600080fd5b600080600080608085870312156138c857600080fd5b8435935060208501356138da816135e8565b92506040850135915060608501356138f1816135e8565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156139b057600080fd5b82356139bb816135e8565b9150602083013561386c8161361a565b6000806000606084860312156139e057600080fd5b8335925060208401356139f2816135e8565b929592945050506040919091013590565b81516001600160a01b0316815261020081016020830151613a2f60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613a93828501826001600160a01b03169052565b5050610140838101516001600160a01b038116848301525050610160838101516001600160a01b0381168483015250506101808381015180518483015260208101516101a085015260408101516101c085015260608101516101e08501525b505092915050565b60008060208385031215613b0d57600080fd5b823567ffffffffffffffff811115613b2457600080fd5b613b30858286016136e3565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613b7457835183529284019291840191600101613b58565b50909695505050505050565b81516001600160801b0316815261018081016020830151613bac60208401826001600160801b03169052565b506040830151613bc760408401826001600160801b03169052565b506060830151613be260608401826001600160801b03169052565b506080830151613bf76080840182600f0b9052565b5060a0830151613c1260a08401826001600160801b03169052565b5060c0830151613c2d60c08401826001600160801b03169052565b5060e0830151613c4860e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613af2565b600080600080600060a08688031215613ca957600080fd5b853594506020860135613cbb816135e8565b93506040860135613ccb816135e8565b9250606086013591506080860135613ce2816135e8565b809150509295509295909350565b60008060408385031215613d0357600080fd5b8235613d0e816135e8565b9150602083013561386c816135e8565b600060208284031215613d3057600080fd5b81516105fe81613645565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156106d6576106d6613d51565b818103818111156106d6576106d6613d51565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613de5816011850160208701613585565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613e1f816012850160208701613585565b9190910160120192915050565b600060208284031215613e3e57600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613e70816010850160208701613585565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613de5816011850160208701613585565b8181036000831280158383131683831282161715610d9857610d98613d51565b634e487b7160e01b600052601260045260246000fd5b600082613eee57613eee613ec9565b500690565b600060018201613f0557613f05613d51565b5060010190565b600082613f1b57613f1b613ec9565b500490565b6000808335601e19843603018112613f3757600080fd5b83018035915067ffffffffffffffff821115613f5257600080fd5b602001915036819003821315612aa457600080fd5b80820281158282048414176106d6576106d6613d51565b8082018281126000831280158216821582161715613af257613af2613d51565b600060208284031215613fb057600080fd5b81516105fe8161361a565b6000600160ff1b8201613fd057613fd0613d51565b5060000390565b60008251613fe9818460208701613585565b9190910192915050565b60008261400257614002613ec9565b600160ff1b82146000198414161561401c5761401c613d51565b500590565b602081016004831061404357634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220972478ebcc894c8dbb60d72b649354d4568c58a7d868354f6cd81e9fdc36392364736f6c63430008140033",
        "sourceMap": "938:681:46:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17153:137:37;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3708:72;;;;;;:::i;:::-;;:::i;:::-;;2353:70;;;;;;:::i;:::-;;:::i;8726:482::-;;;;;;:::i;:::-;;:::i;7181:209::-;;;;;;:::i;:::-;;:::i;4114:240::-;;;;;;:::i;:::-;;:::i;9802:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5229:13:235;;-1:-1:-1;;;;;5225:54:235;5207:73;;5195:2;5180:18;9802:183:37;5003:283:235;16514:223:37;;;;;;:::i;:::-;;:::i;:::-;;;5914:25:235;;;5902:2;5887:18;16514:223:37;5768:177:235;16917:117:37;;;:::i;:::-;;;6122:4:235;6110:17;;;6092:36;;6080:2;6065:18;16917:117:37;5950:184:235;15474:173:37;;;;;;:::i;:::-;;:::i;2027:174::-;;;;;;:::i;:::-;;:::i;9370:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7380:14:235;;7373:22;7355:41;;7343:2;7328:18;9370:121:37;7215:187:235;17413:141:37;;;;;;:::i;:::-;;:::i;5551:225::-;;;;;;:::i;:::-;;:::i;11865:1619::-;;;:::i;:::-;;;;;;;:::i;3208:94::-;;;;;;:::i;:::-;;:::i;17703:119::-;;;;;;:::i;:::-;;:::i;6715:179::-;;;;;;:::i;:::-;;:::i;6008:277::-;;;;;;:::i;:::-;;:::i;2543:87::-;;;;;;:::i;:::-;;:::i;2955:83::-;;;;;;:::i;:::-;;:::i;10568:1128::-;;;:::i;:::-;;;;;;;:::i;15782:129::-;;;;;;:::i;:::-;;:::i;14739:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;9566:101::-;;;:::i;:::-;;;-1:-1:-1;;;;;13085:32:235;;;13067:51;;13055:2;13040:18;9566:101:37;12921:203:235;14128:132:37;;;:::i;10150:213::-;;;;;;:::i;:::-;;:::i;14339:159::-;;;:::i;:::-;;;;;;;:::i;4759:285::-;;;;;;:::i;:::-;;:::i;2754:91::-;;;;;;:::i;:::-;;:::i;16100:186::-;;;;;;:::i;:::-;;:::i;13608:367::-;;;:::i;:::-;;;;16572:13:235;;-1:-1:-1;;;;;16568:22:235;;;16550:41;;16651:4;16639:17;;;16633:24;16629:33;16607:20;;;16600:63;;;;16470:18;13608:367:37;16289:380:235;1523:94:46;;;:::i;17153:137:37:-;17207:13;17232:51;17251:30;17273:7;17251:21;:30::i;:::-;17240:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;17232:7;:51::i;:::-;17153:137;;;:::o;3708:72::-;3758:15;3765:7;3758:6;:15::i;:::-;3708:72;:::o;2353:70::-;2401:15;2408:7;2401:6;:15::i;8726:482::-;8991:210;9018:15;9047:14;9075:5;9094:7;9115:9;9138:8;9160:1;9175;9190;8991:13;:210::i;:::-;8726:482;;;;;;;;;:::o;7181:209::-;7342:41;7361:4;7367:2;7371:3;;7376:6;;7342:18;:41::i;:::-;7181:209;;;;;;:::o;4114:240::-;4295:52;4309:7;4318:4;4324:2;4328:6;4336:10;4295:13;:52::i;:::-;4114:240;;;;:::o;9802:183::-;-1:-1:-1;;;;;;;;;;;;9928:50:37;9947:12;:29;9960:15;9947:29;;;;;;;;;;;9936:41;;;;;;17123:13:235;-1:-1:-1;;;;;17119:54:235;17101:73;;17089:2;17074:18;;16900:280;16514:223:37;16645:7;16683:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;16683:36:37;;;;;;;;;;;:45;;;;;;;;;;;16672:57;;;;;5914:25:235;16664:66:37;;5887:18:235;16672:57:37;5768:177:235;16664:66:37;16514:223;;;;;:::o;16917:117::-;16968:5;16985:42;17004:10;-1:-1:-1;;;;;17004:19:37;;:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16993:33;;;6122:4:235;6110:17;;;16993:33:37;;;6092:36:235;6065:18;16993:33:37;5950:184:235;16985:42:37;16917:117;:::o;15474:173::-;15572:7;15610:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;15610:28:37;;;;;;;;;;15599:40;;;;;5914:25:235;15591:49:37;;5887:18:235;15599:40:37;5768:177:235;15591:49:37;15474:173;;;;:::o;2027:174::-;2128:16;2163:31;2185:8;2163:21;:31::i;9370:121::-;-1:-1:-1;;;;;9464:18:37;;9429:4;9464:18;;;:8;:18;;;;;;;;;9453:30;;9445:39;;9453:30;;9464:18;;;9453:30;7380:14:235;;7373:22;7355:41;;7343:2;7328:18;;7215:187;17413:141:37;17469:13;17494:53;17513:32;17537:7;17513:23;:32::i;5551:225::-;5703:7;1805:32:118;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:118;:10;-1:-1:-1;;;;;1791:46:118;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:118;;;;;;;;;;;1787:116;5722:47:37::1;5735:7;5744:8;5754:6;5762;5722:12;:47::i;:::-;5551:225:::0;;;;;:::o;11865:1619::-;11911:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11911:27:37;11950:23;11976:21;:19;:21::i;:::-;12143:13;:29;12080:12;:48;;;;12007:21;12031:34;;;;;11950:47;;-1:-1:-1;12007:21:37;-1:-1:-1;;;;;12143:29:37;;;;12031:97;;12080:48;12031:97;:::i;:::-;:141;;;;:::i;:::-;12007:165;;12182:20;12223:1;12205:15;:19;:178;;12382:1;12205:178;;;12239:128;12351:15;12239:86;12285:39;12308:15;12285:22;:39::i;:::-;12239:45;:86::i;:::-;:111;;:128::i;:::-;12432:1006;;;;;;;;12482:12;:26;-1:-1:-1;;;;;12482:26:37;;;12432:1006;;12539:28;;;;;;12432:1006;;;;12601:31;;-1:-1:-1;;;;;12601:31:37;;;;12432:1006;;;;;;;-1:-1:-1;;;12667:32:37;;;;;;12432:1006;;;;12727:25;;;;;;12432:1006;;;;;;;;;;;;;;;;12539:28;12830:29;;;;;;12432:1006;;;;12601:31;12898:36;;;;12482:26;12432:1006;;;12967:30;;;;;;12432:1006;;;;13037:37;;;;;;12432:1006;;;;13283:13;:29;;;;12432:1006;;;;13352:22;;;;;;;12432:1006;;;;12182:201;;-1:-1:-1;12393:36:37;;12432:1006;;;13144:18;;:92;;13201:35;:12;13222:13;13201:20;:35::i;:::-;13144:92;;;13181:1;13144:92;12432:1006;;13402:25;;-1:-1:-1;;;;;13402:25:37;12432:1006;;;;;13456:20;;12393:1045;;-1:-1:-1;13448:29:37;;13456:20;;12393:1045;;13456:20;;:::i;13448:29::-;11940:1544;;;;11865:1619;:::o;3208:94::-;3272:23;3283:3;3288:6;3272:10;:23::i;:::-;3208:94;;:::o;17703:119::-;-1:-1:-1;;;;;17797:16:37;;17759:7;17797:16;;;:7;:16;;;;;;;;;17786:28;;;;;5914:25:235;17778:37:37;;5887:18:235;17786:28:37;5768:177:235;6715:179:37;6836:51;6849:7;6858:8;6868:6;6876:10;6836:12;:51::i;:::-;6715:179;;;:::o;6008:277::-;6142:10;6124:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;6124:39:37;;;;;;;;;;;;:50;;-1:-1:-1;;6124:50:37;;;;;;;;;;6232:46;;7355:41:235;;;6124:39:37;;6142:10;6232:46;;7328:18:235;6232:46:37;;;;;;;6008:277;;:::o;2543:87::-;2601:22;2618:4;2601:16;:22::i;2955:83::-;3011:20;3026:4;3011:14;:20::i;10568:1128::-;10640:29;;:::i;:::-;10734:931;;;;;;;;-1:-1:-1;;;;;10790:10:37;10734:931;;;;10837:14;10734:931;;;;;;;;;;10889:15;10734:931;;;;10950:23;10734:931;;;;;;;;11017:21;10734:931;;;;;;;;11086:25;10734:931;;;;11151:17;10734:931;;;;11210:19;10734:931;;;;11264:12;10734:931;;;;11310:11;;;;10734:931;;;;11357:13;;;;10734:931;;;;11408:15;;;;;10734:931;;;;11451:195;;;;;;;11493:9;11451:195;;11528:8;11451:195;;;;11562:16;11451:195;;;;11604:20;11451:195;;;;10734:931;;;;;;;10706:973;;10685:1004;;10706:973;;10734:931;10706:973;;:::i;15782:129::-;15843:7;15881:21;;;:12;:21;;;;;;;;;15870:33;;;;;5914:25:235;15862:42:37;;5887:18:235;15870:33:37;5768:177:235;14739:565:37;14817:16;14845:23;14885:6;14871:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;14871:28:37;;14845:54;;14971:9;14966:294;14986:17;;;14966:294;;;15021:12;15036:6;;15043:1;15036:9;;;;;;;:::i;:::-;;;;;;;15021:24;;15059:12;15142:4;15136:11;15128:19;;15186:4;15174:6;15181:1;15174:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;15232:3:37;;14966:294;;;;15270:27;15289:6;15278:18;;;;;;;;:::i;15270:27::-;14835:469;14739:565;;;;:::o;9566:101::-;9637:22;;;-1:-1:-1;;;;;9648:10:37;13085:32:235;9637:22:37;;;13067:51:235;9610:7:37;;9629:31;;13040:18:235;9637:22:37;12921:203:235;14128:132:37;14191:7;14210:43;14229:22;;14218:34;;;;;;5914:25:235;;5902:2;5887:18;;5768:177;10150:213:37;10243:6;10261:95;10293:52;10309:35;10327:17;10309:15;:35;:::i;:::-;10293:15;:52::i;:::-;10282:64;;;;;;5914:25:235;;5902:2;5887:18;;5768:177;14339:159:37;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14458:33:37;14477:12;14466:24;;;;;;;18673:13:235;;-1:-1:-1;;;;;18767:18:235;;;4933:59;;18816:3;18847:18;;;18882:4;18867:20;;4933:59;18934:4;18922:17;;18916:24;18968:20;;;19005:4;18990:20;;4933:59;19039:20;;19076:4;19061:20;;4933:59;19128:4;19116:17;;19110:24;19172:2;19161:27;;;19190:18;;;13362:34;19237:20;;19274:4;19259:20;;4933:59;19326:4;19314:17;;19308:24;19360:20;;;19397:4;19382:20;;4933:59;19431:20;;19468:4;19453:20;;4933:59;19520:4;19508:17;;;19502:24;19568:4;19551:22;;;7189:13;7182:21;19590:6;19575:22;;7170:34;19631:1;19627:19;;;19623:30;7189:13;7182:21;19670:6;19655:22;;7170:34;-1:-1:-1;;;;;19714:2:235;19710:20;;;19706:57;19780:6;19765:22;;13461:55;19816:20;;;19853:6;19838:22;;4933:59;18643:3;18628:19;;18452:1415;4759:285:37;4928:7;1805:32:118;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:118;:10;-1:-1:-1;;;;;1791:46:118;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:118;;;;;;;;;;;1787:116;4989:48:37::1;5003:7;5012:4;5018:2;5022:6;5030;4989:13;:48::i;2754:91::-:0;2814:24;2833:4;2814:18;:24::i;16100:186::-;-1:-1:-1;;;;;16241:26:37;;;16206:4;16241:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;16230:48;;16241:36;;;;7380:14:235;7373:22;16230:48:37;;;7355:41:235;;;;16206:4:37;;16222:57;;7328:18:235;16230:48:37;7215:187:235;13608:367:37;-1:-1:-1;;;;;;;;;;;;;;;;;13778:166:37;;;;;;;;13842:13;:29;-1:-1:-1;;;;;13842:29:37;;;13778:166;;;-1:-1:-1;;;13903:22:37;;;;;13778:166;;;;;;;13750:208;;;;;16550:41:235;;;;16633:24;;16629:33;16607:20;;;16600:63;;;;13729:239:37;;16470:18:235;;13750:208:37;16289:380:235;1523:94:46;1591:18;;;-1:-1:-1;;;;;1602:6:46;13085:32:235;1591:18:46;;;13067:51:235;1563:8:46;;1583:27;;13040:18:235;1591::46;12921:203:235;2533:693:121;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:121;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:121;2769:6;:26;;;;;;;;:::i;:::-;;2765:455;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:121;;;;;2765:455;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:369;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:369;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:239;;3084:10;3045:50;;;;;;;;:::i;2981:239::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:107;;3172:37;;;;;;;;;;;;;;;;;;;3113:107;2627:599;;;2533:693;;;:::o;18031:106:37:-;18123:6;18100:30;;-1:-1:-1;;;18100:30:37;;;;;;;;:::i;:::-;;;;;;;;5227:1006:113;2356:21:171;:19;:21::i;:::-;5383:10:113::1;5374:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;5373:21;:66:::0;::::1;;;-1:-1:-1::0;5424:15:113::1;::::0;-1:-1:-1;;;;;5424:15:113::1;5410:10;:29;;5373:66;:107;;;;-1:-1:-1::0;5469:11:113::1;::::0;-1:-1:-1;;;;;5469:11:113::1;5455:10;:25;;5373:107;5356:193;;;5512:26;;-1:-1:-1::0;;;5512:26:113::1;;;;;;;;;;;5356:193;5655:19;5677:12;:10;:12::i;:::-;5655:34;;5699:20;5722:14;:12;:14::i;:::-;5859:32;::::0;-1:-1:-1;;;5859:32:113;;5885:4:::1;5859:32;::::0;::::1;13067:51:235::0;5699:37:113;;-1:-1:-1;5841:15:113::1;::::0;-1:-1:-1;;;;;5859:17:113;::::1;::::0;::::1;::::0;13040:18:235;;5859:32:113::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5938:15;::::0;5841:50;;-1:-1:-1;5901:62:113::1;::::0;-1:-1:-1;;;;;5901:36:113;;::::1;::::0;5938:15:::1;5841:50:::0;5901:36:::1;:62::i;:::-;6067:11;6051:12;:10;:12::i;:::-;:27;;:61;;;;6100:12;6082:14;:12;:14::i;:::-;:30;;6051:61;6047:124;;;6135:25;;-1:-1:-1::0;;;6135:25:113::1;;;;;;;;;;;6047:124;6192:15;::::0;6186:40:::1;::::0;-1:-1:-1;;;;;6186:40:113;;::::1;::::0;6192:15:::1;::::0;6186:40:::1;::::0;6192:15:::1;::::0;6186:40:::1;5281:952;;;2398:20:171::0;1713:1;2924:7;:21;2744:208;2605:350:113;2739:10;2730:20;;;;:8;:20;;;;;;;;2725:85;;2773:26;;-1:-1:-1;;;2773:26:113;;;;;;;;;;;2725:85;2875:21;:31;;;;;;;-1:-1:-1;;2875:31:113;;;;;;2921:27;;;;;;2899:7;7380:14:235;7373:22;7355:41;;7343:2;7328:18;;7215:187;2921:27:113;;;;;;;;2605:350;:::o;8430:1543:118:-;8772:8;8754:15;:26;8750:93;;;8803:29;;-1:-1:-1;;;8803:29:118;;;;;;;;;;;8750:93;-1:-1:-1;;;;;8904:19:118;;8900:92;;8946:35;;-1:-1:-1;;;8946:35:118;;;;;;;;;;;8900:92;-1:-1:-1;;;;;9419:14:118;;;9074:18;9419:14;;;:7;:14;;;;;;;;;9244:245;;;;;21474:25:235;;;21553:18;;;21546:43;;;;21625:15;;;21605:18;;;21598:43;21684:14;;21677:22;21657:18;;;21650:50;21716:19;;;21709:35;;;;21760:19;;;;21753:35;;;9244:245:118;;;;;;;;;;21446:19:235;;;9244:245:118;;;9213:294;;;;;;;;-1:-1:-1;;;9118:403:118;;;22057:27:235;22100:11;;;22093:27;;;22136:12;;;22129:28;22173:12;;9118:403:118;;;-1:-1:-1;;9118:403:118;;;;;;;;;9095:436;;9118:403;9095:436;;;;9541:14;9558:30;;;;;;;;;22423:25:235;;;22496:4;22484:17;;22464:18;;;22457:45;;;;22518:18;;;22511:34;;;22561:18;;;22554:34;;;9095:436:118;;-1:-1:-1;9541:14:118;9558:30;;22395:19:235;;9558:30:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9541:47;;9612:5;-1:-1:-1;;;;;9602:15:118;:6;-1:-1:-1;;;;;9602:15:118;;9598:83;;9640:30;;-1:-1:-1;;;9640:30:118;;;;;;;;;;;9598:83;-1:-1:-1;;;;;9759:14:118;;;;;;;:7;:14;;;;;;;;9757:16;;;;;;9820:17;:24;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9820:45:118;;;;;;;;;;9925:41;;7355::235;;;9925::118;;7328:18:235;9925:41:118;;;;;;;8686:1287;;8430:1543;;;;;;;;;:::o;2248:716::-;-1:-1:-1;;;;;2460:18:118;;;;:38;;-1:-1:-1;;;;;;2482:16:118;;;2460:38;2456:111;;;2521:35;;-1:-1:-1;;;2521:35:118;;;;;;;;;;;2456:111;2623:27;;;2619:103;;2673:38;;-1:-1:-1;;;2673:38:118;;;;;;;;;;;2619:103;2787:9;2782:176;2802:14;;;2782:176;;;2834:54;2848:3;;2852:1;2848:6;;;;;;;:::i;:::-;;;;;;;2856:4;2862:2;2866:6;;2873:1;2866:9;;;;;;;:::i;:::-;;;;;;;2877:10;2834:13;:54::i;:::-;2930:3;;2782:176;;;;2248:716;;;;;;:::o;3315:1591::-;-1:-1:-1;;;;;3528:18:118;;;;:38;;-1:-1:-1;;;;;;3550:16:118;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:118;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:118;:6;-1:-1:-1;;;;;3729:14:118;;3725:888;;-1:-1:-1;;;;;3880:23:118;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:118;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:118;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:118;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:118;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:118;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:118;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:118;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:118;;;22773:25:235;;;22829:2;22814:18;;22807:34;;;-1:-1:-1;;;;;4850:49:118;;;;;;;;;;;;;;22746:18:235;4850:49:118;;;;;;;3315:1591;;;;;:::o;1317:1139:113:-;1432:16;2356:21:171;:19;:21::i;:::-;1514:23:113::1;1528:8;1514:13;:23::i;:::-;1644:13;::::0;-1:-1:-1;;;;;1644:13:113::1;1620:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1620:37:113::1;;1616:110;;1680:35;;-1:-1:-1::0;;;1680:35:113::1;;;;;;;;;;;1616:110;1828:10;1819:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1818:21;:64:::0;::::1;;;-1:-1:-1::0;1869:13:113::1;::::0;-1:-1:-1;;;;;1869:13:113::1;1855:10;:27;;1818:64;:105;;;;-1:-1:-1::0;1912:11:113::1;::::0;-1:-1:-1;;;;;1912:11:113::1;1898:10;:25;;1818:105;1801:191;;;1955:26;;-1:-1:-1::0;;;1955:26:113::1;;;;;;;;;;;1801:191;2072:23;2098:21;:19;:21::i;:::-;2161:22;::::0;;2129:29:::1;2193::::0;;;2072:47;;-1:-1:-1;2243:59:113::1;2161:22:::0;2072:47;2293:8;2243:9:::1;:59::i;:::-;2351:13;::::0;2232:70;;-1:-1:-1;;;;;;2351:13:113::1;2317:132;2378:61;2232:70:::0;2413:15;2430:8;2378:24:::1;:61::i;:::-;2317:132;::::0;5914:25:235;;;5902:2;5887:18;2317:132:113::1;;;;;;;1450:1006;;2398:20:171::0;1713:1;2924:7;:21;2744:208;3360:689:121;3435:21;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:121;;3469:20;3567:19;2253:120;3567:8;:19::i;:::-;3540:46;-1:-1:-1;3610:16:121;3600:6;:26;;;;;;;;:::i;:::-;;3596:447;;3642:25;;;;;;;;;;;;;-1:-1:-1;;;3642:25:121;;;;;3596:447;;;3698:18;3688:6;:28;;;;;;;;:::i;:::-;;3684:359;;3786:10;3749:48;;;;;;;;:::i;3684:359::-;3829:19;3819:6;:29;;;;;;;;:::i;:::-;;3815:228;;3919:10;3881:49;;;;;;;;:::i;3815:228::-;3962:29;3952:6;:39;;;;;;;;:::i;:::-;;3948:95;;-1:-1:-1;;4007:25:121;;;;;;;;;;;;-1:-1:-1;;;4007:25:121;;;;;3360:689;-1:-1:-1;;;3360:689:121:o;10223:590:118:-;10419:34;;;10438:4;10419:34;;;;23933:51:235;;;;24000:18;;;23993:34;;;;10419::118;;;;;;;;;23906:18:235;;;;10419:34:118;;10409:45;;;;;;;;;-1:-1:-1;;;;;;10593:147:118;;;24249:39:235;10657:14:118;24321:15:235;;;-1:-1:-1;;24317:53:235;24304:11;;;24297:74;24387:12;;;24380:28;10711:15:118;24424:12:235;;;;24417:28;;;;10593:147:118;;;;;;;;;;24461:12:235;;;;10593:147:118;;;10570:180;;;;;;10223:590::o;5363:301::-;5509:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5509:35:118;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5623:34;;5914:25:235;;;5509:35:118;;5623:34;;5887:18:235;5623:34:118;;;;;;;5363:301;;;;:::o;5594:150:114:-;5672:23;5718:19;193:4:124;5718:14:114;:19::i;:::-;5711:26;;5594:150;:::o;15602:1035::-;15697:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15697:39:114;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:114;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:114;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:114;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:114:o;7782:341:126:-;7885:7;7905:20;7927:12;7943:56;7982:7;7943:25;:56::i;:::-;7904:95;;;;8014:7;8009:79;;8044:33;;-1:-1:-1;;;8044:33:126;;;;;;;;;;;1610:118:124;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;4483:344:113:-;4617:11;;-1:-1:-1;;;;;4617:11:113;4603:10;:25;4599:89;;4651:26;;-1:-1:-1;;;4651:26:113;;;;;;;;;;;4599:89;-1:-1:-1;;;;;4753:14:113;;;;;;:8;:14;;;;;;;;;:24;;-1:-1:-1;;4753:24:113;;;;;;;;;;4792:28;;7355:41:235;;;4792:28:113;;7328:18:235;4792:28:113;;;;;;;4483:344;;:::o;3071:334::-;3197:11;;-1:-1:-1;;;;;3197:11:113;3183:10;:25;3179:89;;3231:26;;-1:-1:-1;;;3231:26:113;;;;;;;;;;;3179:89;3338:13;:20;;-1:-1:-1;;;;;;3338:20:113;-1:-1:-1;;;;;3338:20:113;;;;;;;;3373:25;;;;-1:-1:-1;;3373:25:113;3071:334;:::o;3986:328::-;4110:11;;-1:-1:-1;;;;;4110:11:113;4096:10;:25;4092:89;;4144:26;;-1:-1:-1;;;4144:26:113;;;;;;;;;;;4092:89;4251:11;:18;;-1:-1:-1;;;;;;4251:18:113;-1:-1:-1;;;;;4251:18:113;;;;;;;;4284:23;;;;-1:-1:-1;;4284:23:113;3986:328;:::o;12556:675:114:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;3523:345:113:-;3651:11;;-1:-1:-1;;;;;3651:11:113;3637:10;:25;3633:89;;3685:26;;-1:-1:-1;;;3685:26:113;;;;;;;;;;;3633:89;3797:15;:22;;-1:-1:-1;;;;;;3797:22:113;-1:-1:-1;;;;;3797:22:113;;;;;;;;3834:27;;;;-1:-1:-1;;3834:27:113;3523:345;:::o;4207:1065:121:-;4599:26;;;4562:2;4599:26;;;;;;;;;4276:20;;4562:2;4536:23;;4562:2;4599:26;;;;;;;;;;-1:-1:-1;4599:26:121;4574:51;;4790:14;4818:180;4825:9;;4818:180;;4935:9;4942:2;4935:4;:9;:::i;:::-;4934:16;;4948:2;4934:16;:::i;:::-;4904:61;;4862:9;4899:1;4872:24;4890:6;4872:15;:24;:::i;:::-;:28;;;;:::i;:::-;4862:39;;;;;;;;:::i;:::-;;;;:103;-1:-1:-1;;;;;4862:103:121;;;;;;;;-1:-1:-1;4979:8:121;;;;:::i;:::-;;-1:-1:-1;4836:10:121;;-1:-1:-1;4844:2:121;4836:10;;:::i;:::-;;;4818:180;;;5169:28;;;;5154:44;5211:22;;;5154:44;4207:1065;-1:-1:-1;;4207:1065:121:o;2431:307:171:-;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:171;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;5423:122:44:-;5503:35;;-1:-1:-1;;;5503:35:44;;5532:4;5503:35;;;13067:51:235;5477:7:44;;5503:10;-1:-1:-1;;;;;5503:20:44;;;;13040:18:235;;5503:35:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;5703:168::-;5833:31;;-1:-1:-1;;;5833:31:44;;5858:4;5833:31;;;13067:51:235;5791:19:44;;5833:6;-1:-1:-1;;;;;5833:16:44;;;;13040:18:235;;5833:31:44;12921:203:235;1303:160:168;1412:43;;;-1:-1:-1;;;;;23951:32:235;;1412:43:168;;;23933:51:235;24000:18;;;;23993:34;;;1412:43:168;;;;;;;;;;23906:18:235;;;;1412:43:168;;;;;;;;-1:-1:-1;;;;;1412:43:168;-1:-1:-1;;;1412:43:168;;;1385:71;;1405:5;;1385:19;:71::i;8216:221:114:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:114;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:114;;;;;;;;;;;4144:1323;4293:23;;4630:33;:7;4646:16;4630:15;:33::i;:::-;4609:54;;4683:28;4700:10;4683:16;:28::i;:::-;4673:38;;4799:7;4810:1;4799:12;4795:51;;4834:1;4827:8;;;;;4795:51;4940:15;;;;;;;;:::i;:::-;4936:492;;;5036:130;5071:7;5096:20;;;;:8;:20;:::i;:::-;5134:18;;;;:8;:18;:::i;:::-;5036:17;:130::i;:::-;5018:148;;4936:492;;;5246:132;5283:7;5308:20;;;;:8;:20;:::i;:::-;5346:18;;;;:8;:18;:::i;:::-;5246:19;:132::i;:::-;5410:7;5392:25;;4936:492;5438:22;4144:1323;;;;;:::o;32807:391::-;32976:7;32999:15;;;;;;;;:::i;:::-;32995:197;;;-1:-1:-1;33037:7:114;33030:14;;32995:197;33148:33;:7;33164:16;33148:15;:33::i;:::-;33141:40;;;;4821:161:44;4939:36;;-1:-1:-1;;;4939:36:44;;;;;5914:25:235;;;4913:7:44;;4939:6;-1:-1:-1;;;;;4939:22:44;;;;5887:18:235;;4939:36:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;10998:450:114:-;11097:21;11130:24;193:4:124;11157:19:114;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:114;11417:23;193:4:124;11417:17:114;:23;:::i;:::-;11395:13;;:21;:46::i;8818:1173:126:-;8925:7;8934:4;9311:19;9355:20;9377:12;9393:65;9437:7;9393:26;:65::i;:::-;9354:104;;;;9477:7;9472:64;;-1:-1:-1;9512:1:126;;;;-1:-1:-1;8818:1173:126;-1:-1:-1;;;;8818:1173:126:o;9472:64::-;9712:39;:7;:28;;;:37;:39::i;:::-;9663:30;9685:7;9663:21;:30::i;:::-;9631:13;9580:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;9549:202;;9340:422;;9893:1;9878:12;:16;9874:64;;;-1:-1:-1;9918:1:126;;;;-1:-1:-1;8818:1173:126;-1:-1:-1;;8818:1173:126:o;9874:64::-;9964:12;9979:4;;-1:-1:-1;8818:1173:126;-1:-1:-1;;8818:1173:126:o;898:556:124:-;1014:9;1279:1;-1:-1:-1;;1262:19:124;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:124;;1411:27;;898:556::o;1198:469:121:-;1309:10;-1:-1:-1;;;;;1401:10:121;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:121;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:121;1620:18;;;;1617:34;;1198:469::o;2001:204:127:-;2053:8;-1:-1:-1;;;;;2079:1:127;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:127;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:127;2001:204::o;4059:629:168:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:168;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:168;;-1:-1:-1;;;;;13085:32:235;;4631:40:168;;;13067:51:235;13040:18;;4631:40:168;12921:203:235;5142:161:44;5261:35;;-1:-1:-1;;;5261:35:44;;;;;5914:25:235;;;5235:7:44;;5261:6;-1:-1:-1;;;;;5261:22:44;;;;5887:18:235;;5261:35:44;5768:177:235;3415:460:44;3733:102;;-1:-1:-1;;;3733:102:44;;;;;26575:25:235;;;-1:-1:-1;;;;;26674:15:235;;;26654:18;;;26647:43;3820:4:44;26706:18:235;;;26699:43;3569:23:44;;3733:6;:13;;;;;;26548:18:235;;3733:102:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3715:120;3415:460;-1:-1:-1;;;;;3415:460:44:o;4117:280::-;4327:63;-1:-1:-1;;;;;4341:6:44;4327:35;4363:12;4377;4327:35;:63::i;11561:223:114:-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;10319:9443:126:-;10427:6;10435:4;11237:23;11392:130;:102;11460:7;:33;;;11392:7;:42;;;:67;;:102;;;;:::i;:::-;:128;:130::i;:::-;11263:114;:90;11320:7;:32;;;11263:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;11237:285;;11533:30;11565:12;11581:157;11662:7;:21;;;11701:7;:23;;;11581:63;:157::i;:::-;11532:206;;;;11753:7;11748:160;;-1:-1:-1;11888:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;10319:9443:126:o;11748:160::-;12157:1;12138:16;:20;12134:7595;;;12174:25;12210:16;12174:53;;12415:21;12477:401;12558:7;:21;;;12601:7;:23;;;12646:7;:20;;;12688:7;:28;;;12744:7;:19;;;193:4:124;12738:25:126;;;;:::i;:::-;12785:7;:23;;;12830:7;:30;;;12477:59;:401::i;:::-;12450:428;-1:-1:-1;12450:428:126;-1:-1:-1;12450:428:126;12892:176;;-1:-1:-1;13044:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;10319:9443:126:o;12892:176::-;13245:17;13228:13;:34;13224:2891;;13536:21;13602:389;13702:22;13750:7;:20;;;13796:17;13845:7;:19;;;193:4:124;13839:25:126;;;;:::i;:::-;13890:7;:23;;;13939:7;:30;;;13602:74;:389::i;:::-;13575:416;-1:-1:-1;13575:416:126;-1:-1:-1;14297:8:126;;:84;;;;;14349:7;:32;;;14329:17;:52;14297:84;14272:335;;;-1:-1:-1;14430:1:126;;14433:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;14272:335::-;14540:7;14535:72;;-1:-1:-1;14579:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;14535:72::-;14634:24;:13;:22;:24::i;:::-;14633:25;;;:::i;:::-;14625:40;14660:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;;10319:9443:126:o;13224:2891::-;15350:1;15323:7;:23;;;:28;15319:782;;15409:95;15435:7;:28;;;15410:22;:53;;;;:::i;15409:95::-;15408:96;;;:::i;:::-;15375:181;15530:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;15319:782::-;15961:28;;;;15937:21;;15936:94;;15937:52;;;:::i;12134:7595::-;16240:1;16221:16;:20;16217:3512;;;16257:25;16293:17;16294:16;16293:17;:::i;:::-;16257:54;;16428:21;16490:307;16571:22;16615:7;:20;;;16663:7;:19;;;193:4:124;16657:25:126;;;;:::i;:::-;16704:7;:23;;;16749:7;:30;;;16490:59;:307::i;:::-;16463:334;-1:-1:-1;16463:334:126;-1:-1:-1;16463:334:126;16811:64;;-1:-1:-1;16851:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;10319:9443:126:o;16811:64::-;17052:17;17035:13;:34;17031:2688;;17344:21;17410:387;17508:22;17556:7;:20;;;17602:17;17651:7;:19;;;193:4:124;17645:25:126;;;;:::i;:::-;17696:7;:23;;;17745:7;:30;;;17410:72;:387::i;:::-;17383:414;-1:-1:-1;17383:414:126;-1:-1:-1;18103:8:126;;:84;;;;;18155:7;:32;;;18135:17;:52;18103:84;18078:335;;;-1:-1:-1;18236:1:126;;18239:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;18078:335::-;18346:7;18341:72;;-1:-1:-1;18385:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;18341:72::-;18439:24;:13;:22;:24::i;17031:2688::-;18797:23;18867:335;18956:22;19004:7;:20;;;19056:7;:19;;;193:4:124;19050:25:126;;;;:::i;:::-;19101:7;:23;;;19150:7;:30;;;18867:63;:335::i;:::-;18838:364;-1:-1:-1;18838:364:126;-1:-1:-1;18838:364:126;19220:72;;-1:-1:-1;19264:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;19220:72::-;19483:177;19526:122;19599:7;:23;;;19547:13;19527:17;:33;;;;:::i;:::-;19526:43;;:122::i;:::-;19484:164;;:15;:164;:::i;16217:3512::-;-1:-1:-1;19747:1:126;;19750:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;10319:9443:126:o;20009:1167::-;20112:6;20970:199;20988:156;21049:7;:32;;;193:4:124;21043:38:126;;;;:::i;:::-;21103:23;;;;20988:24;;;;;:156;:33;:156::i;20970:199::-;20752:203;20770:160;20834:7;:33;;;193:4:124;20828:39:126;;;;:::i;:::-;20889:23;;;;20770:25;;;;;:160;:36;:160::i;2705:151:169:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;3190:114:124:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;7273:398:125:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;-1:-1:-1;7659:4:125;;-1:-1:-1;7273:398:125;;;;;;:::o;17581:1971:128:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:128;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:::-;:18;;:21::i;:::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:124;18982:15:128;;18978:295;;19096:28;19109:14;193:4:124;19121:1:128;19109:11;:14::i;:::-;19096:8;;:12;:28::i;:::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:124;19259:1:128;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:128;;-1:-1:-1;;;;17581:1971:128;;;;;;;;;;;:::o;11709:1515::-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:128;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:124;12549:2:128;:9;12545:263;;12648:20;12655:12;193:4:124;12665:1:128;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:124;12794:1:128;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:128;;-1:-1:-1;;11709:1515:128;;;;;;;;;;:::o;15892:1050::-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:128;16337:28;193:4:124;16345:13:128;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:124;16379:8:128;:15;16375:293;;16490:26;16503:12;193:4:124;16513:1:128;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:124;16654:1:128;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:128;;-1:-1:-1;;15892:1050:128;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:124;6666:2:128;:9;6662:261;;6764:20;6771:12;193:4:124;6781:1:128;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:124;6909:1:128;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:128;-1:-1:-1;;;;;;;5576:1765:128:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:128;14607:28;193:4:124;14617:11:128;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:124;14649:9:128;:16;14645:300;;14765:29;14779:14;193:4:124;14791:1:128;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:124;14931:1:128;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:128;-1:-1:-1;;;;;;13859:1409:128:o;2284:748:124:-;2398:9;2663:1;-1:-1:-1;;2646:19:124;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:124;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3180:392:169:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:169;;3394:4;3359:41;;;13067:51:235;13040:18;;3359:41:169;12921:203:235;3303:108:169;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:169;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:169:o;6050:574:125:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:125;-1:-1:-1;6249:139:125;6398:220;;6426:181;6482:111;6426:38;:181::i;20915:352:128:-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;:::-;:50;;;;:::i;3811:844:124:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:124;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:124;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:124;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;20059:343:128:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;4625:582:169:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:169;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:169;;-1:-1:-1;;;;;13085:32:235;;5121:24:169;;;13067:51:235;13040:18;;5121:24:169;12921:203:235;5041:119:169;-1:-1:-1;5180:10:169;5173:17;;317:182:123;485:6;451:41;;-1:-1:-1;;;451:41:123;;;;;;;;:::i;8508:3846:124:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:124;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:124;-1:-1:-1;9283:1:124;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:124;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:124;10385:5;;10384:13;;-1:-1:-1;;10383:50:124;10453:5;;10452:13;;;-1:-1:-1;;10451:50:124;10519:5;;;-1:-1:-1;;10519:46:124;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:124:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:124;:26;5126:40;;-1:-1:-1;5165:1:124;;4907:3302;-1:-1:-1;4907:3302:124:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:124;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:124;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:124;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:124;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:124;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:124;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:124;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:124;7584:10;;;;-1:-1:-1;6063:75:124;;-1:-1:-1;6458:50:124;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;5743:516:169:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:169;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:235:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:235;;14:180;-1:-1:-1;14:180:235:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:235;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:235;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:235:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:235;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:271;1174:6;1227:2;1215:9;1206:7;1202:23;1198:32;1195:52;;;1243:1;1240;1233:12;1195:52;1282:9;1269:23;1301:39;1334:5;1301:39;:::i;1375:118::-;1461:5;1454:13;1447:21;1440:5;1437:32;1427:60;;1483:1;1480;1473:12;1498:241;1554:6;1607:2;1595:9;1586:7;1582:23;1578:32;1575:52;;;1623:1;1620;1613:12;1575:52;1662:9;1649:23;1681:28;1703:5;1681:28;:::i;1744:114::-;1828:4;1821:5;1817:16;1810:5;1807:27;1797:55;;1848:1;1845;1838:12;1863:1022;1989:6;1997;2005;2013;2021;2029;2037;2045;2053;2106:3;2094:9;2085:7;2081:23;2077:33;2074:53;;;2123:1;2120;2113:12;2074:53;2159:9;2146:23;2136:33;;2216:2;2205:9;2201:18;2188:32;2178:42;;2270:2;2259:9;2255:18;2242:32;2283:39;2316:5;2283:39;:::i;:::-;2341:5;-1:-1:-1;2398:2:235;2383:18;;2370:32;2411:41;2370:32;2411:41;:::i;:::-;2471:7;-1:-1:-1;2530:3:235;2515:19;;2502:33;2544:30;2502:33;2544:30;:::i;:::-;2593:7;-1:-1:-1;2647:3:235;2632:19;;2619:33;;-1:-1:-1;2704:3:235;2689:19;;2676:33;2718:31;2676:33;2718:31;:::i;:::-;2768:7;2758:17;;;2822:3;2811:9;2807:19;2794:33;2784:43;;2874:3;2863:9;2859:19;2846:33;2836:43;;1863:1022;;;;;;;;;;;:::o;2890:367::-;2953:8;2963:6;3017:3;3010:4;3002:6;2998:17;2994:27;2984:55;;3035:1;3032;3025:12;2984:55;-1:-1:-1;3058:20:235;;3101:18;3090:30;;3087:50;;;3133:1;3130;3123:12;3087:50;3170:4;3162:6;3158:17;3146:29;;3230:3;3223:4;3213:6;3210:1;3206:14;3198:6;3194:27;3190:38;3187:47;3184:67;;;3247:1;3244;3237:12;3262:1066;3402:6;3410;3418;3426;3434;3442;3495:3;3483:9;3474:7;3470:23;3466:33;3463:53;;;3512:1;3509;3502:12;3463:53;3551:9;3538:23;3570:39;3603:5;3570:39;:::i;:::-;3628:5;-1:-1:-1;3685:2:235;3670:18;;3657:32;3698:41;3657:32;3698:41;:::i;:::-;3758:7;-1:-1:-1;3816:2:235;3801:18;;3788:32;3839:18;3869:14;;;3866:34;;;3896:1;3893;3886:12;3866:34;3935:70;3997:7;3988:6;3977:9;3973:22;3935:70;:::i;:::-;4024:8;;-1:-1:-1;3909:96:235;-1:-1:-1;4112:2:235;4097:18;;4084:32;;-1:-1:-1;4128:16:235;;;4125:36;;;4157:1;4154;4147:12;4125:36;;4196:72;4260:7;4249:8;4238:9;4234:24;4196:72;:::i;:::-;3262:1066;;;;-1:-1:-1;3262:1066:235;;-1:-1:-1;3262:1066:235;;4287:8;;3262:1066;-1:-1:-1;;;3262:1066:235:o;4333:541::-;4419:6;4427;4435;4443;4496:3;4484:9;4475:7;4471:23;4467:33;4464:53;;;4513:1;4510;4503:12;4464:53;4549:9;4536:23;4526:33;;4609:2;4598:9;4594:18;4581:32;4622:39;4655:5;4622:39;:::i;:::-;4680:5;-1:-1:-1;4737:2:235;4722:18;;4709:32;4750:41;4709:32;4750:41;:::i;:::-;4333:541;;;;-1:-1:-1;4810:7:235;;4864:2;4849:18;4836:32;;-1:-1:-1;;4333:541:235:o;5291:472::-;5368:6;5376;5384;5437:2;5425:9;5416:7;5412:23;5408:32;5405:52;;;5453:1;5450;5443:12;5405:52;5489:9;5476:23;5466:33;;5549:2;5538:9;5534:18;5521:32;5562:39;5595:5;5562:39;:::i;:::-;5620:5;-1:-1:-1;5677:2:235;5662:18;;5649:32;5690:41;5649:32;5690:41;:::i;:::-;5750:7;5740:17;;;5291:472;;;;;:::o;6139:323::-;6207:6;6215;6268:2;6256:9;6247:7;6243:23;6239:32;6236:52;;;6284:1;6281;6274:12;6236:52;6320:9;6307:23;6297:33;;6380:2;6369:9;6365:18;6352:32;6393:39;6426:5;6393:39;:::i;:::-;6451:5;6441:15;;;6139:323;;;;;:::o;6467:387::-;6554:6;6607:2;6595:9;6586:7;6582:23;6578:32;6575:52;;;6623:1;6620;6613:12;6575:52;6663:9;6650:23;6696:18;6688:6;6685:30;6682:50;;;6728:1;6725;6718:12;6682:50;6751:22;;6807:2;6789:16;;;6785:25;6782:45;;;6823:1;6820;6813:12;7407:541;7493:6;7501;7509;7517;7570:3;7558:9;7549:7;7545:23;7541:33;7538:53;;;7587:1;7584;7577:12;7538:53;7623:9;7610:23;7600:33;;7683:2;7672:9;7668:18;7655:32;7696:39;7729:5;7696:39;:::i;:::-;7754:5;-1:-1:-1;7806:2:235;7791:18;;7778:32;;-1:-1:-1;7862:2:235;7847:18;;7834:32;7875:41;7834:32;7875:41;:::i;:::-;7407:541;;;;-1:-1:-1;7407:541:235;;-1:-1:-1;;7407:541:235:o;7953:1268::-;8172:13;;8154:32;;8242:4;8230:17;;;8224:24;8202:20;;;8195:54;8305:4;8293:17;;;8287:24;8265:20;;;8258:54;8368:4;8356:17;;;8350:24;8328:20;;;8321:54;8431:4;8419:17;;;8413:24;8391:20;;;8384:54;8494:4;8482:17;;;8476:24;8454:20;;;8447:54;8557:4;8545:17;;;8539:24;8517:20;;;8510:54;8620:4;8608:17;;;8602:24;8580:20;;;8573:54;8646:6;8694:15;;;8688:22;8668:18;;;8661:50;8730:6;8778:15;;;8772:22;8752:18;;;8745:50;8814:6;8862:15;;;8856:22;8836:18;;;8829:50;8898:6;8946:15;;;8940:22;8920:18;;;8913:50;8982:6;9030:15;;;9024:22;9004:18;;;8997:50;9066:6;9114:15;;;9108:22;9088:18;;;9081:50;9150:6;9198:15;;;9192:22;9172:18;;;9165:50;;;;8141:3;8126:19;;7953:1268::o;9226:390::-;9291:6;9299;9352:2;9340:9;9331:7;9327:23;9323:32;9320:52;;;9368:1;9365;9358:12;9320:52;9407:9;9394:23;9426:39;9459:5;9426:39;:::i;:::-;9484:5;-1:-1:-1;9541:2:235;9526:18;;9513:32;9554:30;9513:32;9554:30;:::i;9621:391::-;9698:6;9706;9714;9767:2;9755:9;9746:7;9742:23;9738:32;9735:52;;;9783:1;9780;9773:12;9735:52;9819:9;9806:23;9796:33;;9879:2;9868:9;9864:18;9851:32;9892:39;9925:5;9892:39;:::i;:::-;9621:391;;9950:5;;-1:-1:-1;;;10002:2:235;9987:18;;;;9974:32;;9621:391::o;10396:1441::-;10628:13;;-1:-1:-1;;;;;10091:31:235;10079:44;;10588:3;10573:19;;10700:4;10692:6;10688:17;10682:24;10715:62;10771:4;10760:9;10756:20;10742:12;-1:-1:-1;;;;;10091:31:235;10079:44;;10017:112;10715:62;;10833:4;10825:6;10821:17;10815:24;10808:4;10797:9;10793:20;10786:54;10896:4;10888:6;10884:17;10878:24;10871:4;10860:9;10856:20;10849:54;10959:4;10951:6;10947:17;10941:24;10934:4;10923:9;10919:20;10912:54;11022:4;11014:6;11010:17;11004:24;10997:4;10986:9;10982:20;10975:54;11085:4;11077:6;11073:17;11067:24;11060:4;11049:9;11045:20;11038:54;11148:4;11140:6;11136:17;11130:24;11123:4;11112:9;11108:20;11101:54;11174:6;11234:2;11226:6;11222:15;11216:22;11211:2;11200:9;11196:18;11189:50;;11258:6;11313:2;11305:6;11301:15;11295:22;11326:62;11384:2;11373:9;11369:18;11353:14;-1:-1:-1;;;;;10091:31:235;10079:44;;10017:112;11326:62;-1:-1:-1;;11407:6:235;11450:15;;;11444:22;-1:-1:-1;;;;;10091:31:235;;11518:18;;;10079:44;-1:-1:-1;;11556:6:235;11599:15;;;11593:22;-1:-1:-1;;;;;10091:31:235;;11667:18;;;10079:44;-1:-1:-1;;11705:6:235;11748:15;;;11742:22;10204:12;;11812:18;;;10192:25;10266:4;10255:16;;10249:23;10233:14;;;10226:47;10322:4;10311:16;;10305:23;10289:14;;;10282:47;10378:4;10367:16;;10361:23;10345:14;;;10338:47;11773:58;;;10396:1441;;;;:::o;11842:437::-;11928:6;11936;11989:2;11977:9;11968:7;11964:23;11960:32;11957:52;;;12005:1;12002;11995:12;11957:52;12045:9;12032:23;12078:18;12070:6;12067:30;12064:50;;;12110:1;12107;12100:12;12064:50;12149:70;12211:7;12202:6;12191:9;12187:22;12149:70;:::i;:::-;12238:8;;12123:96;;-1:-1:-1;11842:437:235;-1:-1:-1;;;;11842:437:235:o;12284:632::-;12455:2;12507:21;;;12577:13;;12480:18;;;12599:22;;;12426:4;;12455:2;12678:15;;;;12652:2;12637:18;;;12426:4;12721:169;12735:6;12732:1;12729:13;12721:169;;;12796:13;;12784:26;;12865:15;;;;12830:12;;;;12757:1;12750:9;12721:169;;;-1:-1:-1;12907:3:235;;12284:632;-1:-1:-1;;;;;;12284:632:235:o;13527:1652::-;13753:13;;-1:-1:-1;;;;;4945:46:235;4933:59;;13721:3;13706:19;;13825:4;13817:6;13813:17;13807:24;13840:54;13888:4;13877:9;13873:20;13859:12;-1:-1:-1;;;;;4945:46:235;4933:59;;4879:119;13840:54;;13943:4;13935:6;13931:17;13925:24;13958:56;14008:4;13997:9;13993:20;13977:14;-1:-1:-1;;;;;4945:46:235;4933:59;;4879:119;13958:56;;14063:4;14055:6;14051:17;14045:24;14078:56;14128:4;14117:9;14113:20;14097:14;-1:-1:-1;;;;;4945:46:235;4933:59;;4879:119;14078:56;;14183:4;14175:6;14171:17;14165:24;14198:55;14247:4;14236:9;14232:20;14216:14;13385:2;13374:21;13362:34;;13309:93;14198:55;;14302:4;14294:6;14290:17;14284:24;14317:56;14367:4;14356:9;14352:20;14336:14;-1:-1:-1;;;;;4945:46:235;4933:59;;4879:119;14317:56;;14422:4;14414:6;14410:17;14404:24;14437:56;14487:4;14476:9;14472:20;14456:14;-1:-1:-1;;;;;4945:46:235;4933:59;;4879:119;14437:56;;14542:4;14534:6;14530:17;14524:24;14557:56;14607:4;14596:9;14592:20;14576:14;-1:-1:-1;;;;;4945:46:235;4933:59;;4879:119;14557:56;-1:-1:-1;14632:6:235;14675:15;;;14669:22;7189:13;7182:21;14732:18;;;7170:34;14770:6;14813:15;;;14807:22;7189:13;7182:21;14870:18;;;7170:34;14908:6;14951:15;;;14945:22;-1:-1:-1;;;;;13473:42:235;15011:18;;;13461:55;15049:6;15093:15;;;15087:22;-1:-1:-1;;;;;4945:46:235;;15154:18;;;4933:59;15118:55;4879:119;15184:691;15279:6;15287;15295;15303;15311;15364:3;15352:9;15343:7;15339:23;15335:33;15332:53;;;15381:1;15378;15371:12;15332:53;15417:9;15404:23;15394:33;;15477:2;15466:9;15462:18;15449:32;15490:39;15523:5;15490:39;:::i;:::-;15548:5;-1:-1:-1;15605:2:235;15590:18;;15577:32;15618:41;15577:32;15618:41;:::i;:::-;15678:7;-1:-1:-1;15732:2:235;15717:18;;15704:32;;-1:-1:-1;15788:3:235;15773:19;;15760:33;15802:41;15760:33;15802:41;:::i;:::-;15862:7;15852:17;;;15184:691;;;;;;;;:::o;15880:404::-;15948:6;15956;16009:2;15997:9;15988:7;15984:23;15980:32;15977:52;;;16025:1;16022;16015:12;15977:52;16064:9;16051:23;16083:39;16116:5;16083:39;:::i;:::-;16141:5;-1:-1:-1;16198:2:235;16183:18;;16170:32;16211:41;16170:32;16211:41;:::i;17185:247::-;17253:6;17306:2;17294:9;17285:7;17281:23;17277:32;17274:52;;;17322:1;17319;17312:12;17274:52;17354:9;17348:16;17373:29;17396:5;17373:29;:::i;17437:127::-;17498:10;17493:3;17489:20;17486:1;17479:31;17529:4;17526:1;17519:15;17553:4;17550:1;17543:15;17569:127;17630:10;17625:3;17621:20;17618:1;17611:31;17661:4;17658:1;17651:15;17685:4;17682:1;17675:15;17701:125;17766:9;;;17787:10;;;17784:36;;;17800:18;;:::i;17831:128::-;17898:9;;;17919:11;;;17916:37;;;17933:18;;:::i;17964:127::-;18025:10;18020:3;18016:20;18013:1;18006:31;18056:4;18053:1;18046:15;18080:4;18077:1;18070:15;18096:127;18157:10;18152:3;18148:20;18145:1;18138:31;18188:4;18185:1;18178:15;18212:4;18209:1;18202:15;19872:449;-1:-1:-1;;;20129:3:235;20122:32;20104:3;20183:6;20177:13;20199:75;20267:6;20262:2;20257:3;20253:12;20246:4;20238:6;20234:17;20199:75;:::i;:::-;20294:16;;;;20312:2;20290:25;;19872:449;-1:-1:-1;;19872:449:235:o;20326:450::-;-1:-1:-1;;;20583:3:235;20576:33;20558:3;20638:6;20632:13;20654:75;20722:6;20717:2;20712:3;20708:12;20701:4;20693:6;20689:17;20654:75;:::i;:::-;20749:16;;;;20767:2;20745:25;;20326:450;-1:-1:-1;;20326:450:235:o;21004:184::-;21074:6;21127:2;21115:9;21106:7;21102:23;21098:32;21095:52;;;21143:1;21140;21133:12;21095:52;-1:-1:-1;21166:16:235;;21004:184;-1:-1:-1;21004:184:235:o;22852:448::-;-1:-1:-1;;;23109:3:235;23102:31;23084:3;23162:6;23156:13;23178:75;23246:6;23241:2;23236:3;23232:12;23225:4;23217:6;23213:17;23178:75;:::i;:::-;23273:16;;;;23291:2;23269:25;;22852:448;-1:-1:-1;;22852:448:235:o;23305:449::-;-1:-1:-1;;;23562:3:235;23555:32;23537:3;23616:6;23610:13;23632:75;23700:6;23695:2;23690:3;23686:12;23679:4;23671:6;23667:17;23632:75;:::i;24484:200::-;24550:9;;;24523:4;24578:9;;24606:10;;24618:12;;;24602:29;24641:12;;;24633:21;;24599:56;24596:82;;;24658:18;;:::i;24689:127::-;24750:10;24745:3;24741:20;24738:1;24731:31;24781:4;24778:1;24771:15;24805:4;24802:1;24795:15;24821:112;24853:1;24879;24869:35;;24884:18;;:::i;:::-;-1:-1:-1;24918:9:235;;24821:112::o;24938:135::-;24977:3;24998:17;;;24995:43;;25018:18;;:::i;:::-;-1:-1:-1;25065:1:235;25054:13;;24938:135::o;25078:120::-;25118:1;25144;25134:35;;25149:18;;:::i;:::-;-1:-1:-1;25183:9:235;;25078:120::o;25203:521::-;25280:4;25286:6;25346:11;25333:25;25440:2;25436:7;25425:8;25409:14;25405:29;25401:43;25381:18;25377:68;25367:96;;25459:1;25456;25449:12;25367:96;25486:33;;25538:20;;;-1:-1:-1;25581:18:235;25570:30;;25567:50;;;25613:1;25610;25603:12;25567:50;25646:4;25634:17;;-1:-1:-1;25677:14:235;25673:27;;;25663:38;;25660:58;;;25714:1;25711;25704:12;25729:168;25802:9;;;25833;;25850:15;;;25844:22;;25830:37;25820:71;;25871:18;;:::i;25902:216::-;25966:9;;;25994:11;;;25941:3;26024:9;;26052:10;;26048:19;;26077:10;;26069:19;;26045:44;26042:70;;;26092:18;;:::i;26123:245::-;26190:6;26243:2;26231:9;26222:7;26218:23;26214:32;26211:52;;;26259:1;26256;26249:12;26211:52;26291:9;26285:16;26310:28;26332:5;26310:28;:::i;26753:136::-;26788:3;-1:-1:-1;;;26809:22:235;;26806:48;;26834:18;;:::i;:::-;-1:-1:-1;26874:1:235;26870:13;;26753:136::o;26894:287::-;27023:3;27061:6;27055:13;27077:66;27136:6;27131:3;27124:4;27116:6;27112:17;27077:66;:::i;:::-;27159:16;;;;;26894:287;-1:-1:-1;;26894:287:235:o;27186:193::-;27225:1;27251;27241:35;;27256:18;;:::i;:::-;-1:-1:-1;;;27292:18:235;;-1:-1:-1;;27312:13:235;;27288:38;27285:64;;;27329:18;;:::i;:::-;-1:-1:-1;27363:10:235;;27186:193::o;27384:361::-;27549:2;27534:18;;27582:1;27571:13;;27561:144;;27627:10;27622:3;27618:20;27615:1;27608:31;27662:4;27659:1;27652:15;27690:4;27687:1;27680:15;27561:144;27714:25;;;27384:361;:::o",
        "linkReferences": {},
        "immutableReferences": {
            "18126": [
                {
                    "start": 1548,
                    "length": 32
                },
                {
                    "start": 2700,
                    "length": 32
                },
                {
                    "start": 3501,
                    "length": 32
                },
                {
                    "start": 8386,
                    "length": 32
                }
            ],
            "18129": [
                {
                    "start": 2978,
                    "length": 32
                },
                {
                    "start": 9852,
                    "length": 32
                }
            ],
            "18132": [
                {
                    "start": 2940,
                    "length": 32
                },
                {
                    "start": 3590,
                    "length": 32
                },
                {
                    "start": 9134,
                    "length": 32
                }
            ],
            "18135": [
                {
                    "start": 3016,
                    "length": 32
                },
                {
                    "start": 7369,
                    "length": 32
                }
            ],
            "18138": [
                {
                    "start": 3096,
                    "length": 32
                }
            ],
            "18141": [
                {
                    "start": 3131,
                    "length": 32
                }
            ],
            "18144": [
                {
                    "start": 3168,
                    "length": 32
                }
            ],
            "18147": [
                {
                    "start": 3205,
                    "length": 32
                }
            ],
            "18150": [
                {
                    "start": 2818,
                    "length": 32
                },
                {
                    "start": 7255,
                    "length": 32
                }
            ],
            "18153": [
                {
                    "start": 2860,
                    "length": 32
                },
                {
                    "start": 7293,
                    "length": 32
                }
            ],
            "18156": [
                {
                    "start": 2902,
                    "length": 32
                },
                {
                    "start": 7331,
                    "length": 32
                }
            ],
            "18190": [
                {
                    "start": 2737,
                    "length": 32
                },
                {
                    "start": 6830,
                    "length": 32
                }
            ],
            "18193": [
                {
                    "start": 2781,
                    "length": 32
                },
                {
                    "start": 6891,
                    "length": 32
                }
            ],
            "7753": [
                {
                    "start": 4176,
                    "length": 32
                },
                {
                    "start": 8526,
                    "length": 32
                },
                {
                    "start": 8943,
                    "length": 32
                },
                {
                    "start": 9571,
                    "length": 32
                },
                {
                    "start": 9673,
                    "length": 32
                },
                {
                    "start": 9806,
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
        "load(uint256[])": "becee9c3",
        "name(uint256)": "00ad800c",
        "nonces(address)": "7ecebe00",
        "pause(bool)": "02329a29",
        "perTokenApprovals(uint256,address,address)": "21ff32a9",
        "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": "14e5f07b",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "setSweepCollector(address)": "e4af29d1",
        "sweep(address)": "01681a62",
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "vault()": "fbfa77cf"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vault\",\"outputs\":[{\"internalType\":\"contract IERC4626\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vault()\":{\"returns\":{\"_0\":\"The ERC4626 compatible yield source.\"}}},\"title\":\"ERC4626Target0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to change the sweep collector.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the sweep         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vault()\":{\"notice\":\"Gets the ERC4626 compatible vault used as this pool's yield         source.\"}},\"notice\":\"ERC4626Hyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target0.sol\":\"ERC4626Target0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597\",\"dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad\",\"dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb\"]},\"contracts/src/instances/erc4626/ERC4626Target0.sol\":{\"keccak256\":\"0x002fa2b8a3e916b523c3dec34c7655f202de28e6411df343cb8e87d26a98ca99\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e8804ac60e4438bd9892cc113dccd61013f4db9e88168643a60f6773989f669b\",\"dweb:/ipfs/QmQePPL7YjBwHgGFcCAKNe7aniju9nRH4rRc7EQtTj3iXh\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0x95d34e3dbf7a85d9d5d0071baddf3a8d73cf8a68a5c062d7656f4984b3ef5cb6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2067273085c326e2f1789d1f571ea6fe4ecf211e551ffcda03b98ae0c9cdb724\",\"dweb:/ipfs/QmYxrY9uCXkaTSTCqvQvYx9phDcvkJim1JFbopxJRFEPbw\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                                    "internalType": "address",
                                    "name": "sweepCollector",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "name": "basePayment",
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
                            "name": "newFeeCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "FeeCollectorUpdated",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Sweep",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newSweepCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SweepCollectorUpdated",
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
                                    "internalType": "address",
                                    "name": "sweepCollector",
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
                    "name": "setFeeCollector"
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
                            "internalType": "address",
                            "name": "_who",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setSweepCollector"
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
                            "__vault": "The ERC4626 compatible vault.",
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
                    "setFeeCollector(address)": {
                        "params": {
                            "_who": "The new fee collector address."
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
                    "setSweepCollector(address)": {
                        "params": {
                            "_who": "The new sweep collector address."
                        }
                    },
                    "sweep(address)": {
                        "details": "WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
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
                    },
                    "vault()": {
                        "returns": {
                            "_0": "The ERC4626 compatible yield source."
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
                    "setFeeCollector(address)": {
                        "notice": "Allows governance to change the fee collector."
                    },
                    "setGovernance(address)": {
                        "notice": "Allows governance to change governance."
                    },
                    "setPauser(address,bool)": {
                        "notice": "Allows governance to change the pauser status of an address."
                    },
                    "setSweepCollector(address)": {
                        "notice": "Allows governance to change the sweep collector."
                    },
                    "sweep(address)": {
                        "notice": "Transfers the contract's balance of a target token to the sweep         collector address."
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
                        "notice": "Gets the ERC4626 compatible vault used as this pool's yield         source."
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
                "keccak256": "0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d",
                "urls": [
                    "bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597",
                    "dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Base.sol": {
                "keccak256": "0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18",
                "urls": [
                    "bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad",
                    "dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Target0.sol": {
                "keccak256": "0x002fa2b8a3e916b523c3dec34c7655f202de28e6411df343cb8e87d26a98ca99",
                "urls": [
                    "bzz-raw://e8804ac60e4438bd9892cc113dccd61013f4db9e88168643a60f6773989f669b",
                    "dweb:/ipfs/QmQePPL7YjBwHgGFcCAKNe7aniju9nRH4rRc7EQtTj3iXh"
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
            "contracts/src/interfaces/IERC4626.sol": {
                "keccak256": "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e",
                "urls": [
                    "bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3",
                    "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"
                ],
                "license": "GPL-2.0-or-later"
            },
            "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
                "keccak256": "0x95d34e3dbf7a85d9d5d0071baddf3a8d73cf8a68a5c062d7656f4984b3ef5cb6",
                "urls": [
                    "bzz-raw://2067273085c326e2f1789d1f571ea6fe4ecf211e551ffcda03b98ae0c9cdb724",
                    "dweb:/ipfs/QmYxrY9uCXkaTSTCqvQvYx9phDcvkJim1JFbopxJRFEPbw"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
                "keccak256": "0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33",
                "urls": [
                    "bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73",
                    "dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952",
                "urls": [
                    "bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf",
                    "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
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
                "keccak256": "0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d",
                "urls": [
                    "bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603",
                    "dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb",
                "urls": [
                    "bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6",
                    "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"
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
                "keccak256": "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d",
                "urls": [
                    "bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2",
                    "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832",
                "urls": [
                    "bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7",
                    "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"
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
                "keccak256": "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5",
                "urls": [
                    "bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006",
                    "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a",
                "urls": [
                    "bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195",
                    "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"
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
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067",
                "urls": [
                    "bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f",
                    "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"
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
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Target0.sol",
        "id": 8138,
        "exportedSymbols": {
            "ERC20": [
                71213
            ],
            "ERC4626Base": [
                7983
            ],
            "ERC4626Target0": [
                8137
            ],
            "HyperdriveTarget0": [
                5402
            ],
            "IERC20": [
                10319
            ],
            "IERC4626": [
                10602
            ],
            "IHyperdrive": [
                11028
            ],
            "SafeERC20": [
                71643
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1581:46",
        "nodes": [
            {
                "id": 8081,
                "nodeType": "PragmaDirective",
                "src": "39:23:46",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 8083,
                "nodeType": "ImportDirective",
                "src": "64:59:46",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
                "file": "openzeppelin/token/ERC20/ERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8138,
                "sourceUnit": 71214,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8082,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71213,
                            "src": "73:5:46",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8085,
                "nodeType": "ImportDirective",
                "src": "124:73:46",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
                "file": "openzeppelin/token/ERC20/utils/SafeERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8138,
                "sourceUnit": 71644,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8084,
                            "name": "SafeERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71643,
                            "src": "133:9:46",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8087,
                "nodeType": "ImportDirective",
                "src": "198:73:46",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "../../external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8138,
                "sourceUnit": 5403,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8086,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5402,
                            "src": "207:17:46",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8089,
                "nodeType": "ImportDirective",
                "src": "272:53:46",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8138,
                "sourceUnit": 10320,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8088,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10319,
                            "src": "281:6:46",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8091,
                "nodeType": "ImportDirective",
                "src": "326:57:46",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC4626.sol",
                "file": "../../interfaces/IERC4626.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8138,
                "sourceUnit": 10603,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8090,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10602,
                            "src": "335:8:46",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8093,
                "nodeType": "ImportDirective",
                "src": "384:63:46",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8138,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8092,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "393:11:46",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8095,
                "nodeType": "ImportDirective",
                "src": "448:48:46",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8138,
                "sourceUnit": 7984,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8094,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7983,
                            "src": "457:11:46",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8137,
                "nodeType": "ContractDefinition",
                "src": "938:681:46",
                "nodes": [
                    {
                        "id": 8104,
                        "nodeType": "UsingForDirective",
                        "src": "1002:26:46",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 8101,
                            "name": "SafeERC20",
                            "nameLocations": [
                                "1008:9:46"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 71643,
                            "src": "1008:9:46"
                        },
                        "typeName": {
                            "id": 8103,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 8102,
                                "name": "ERC20",
                                "nameLocations": [
                                    "1022:5:46"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 71213,
                                "src": "1022:5:46"
                            },
                            "referencedDeclaration": 71213,
                            "src": "1022:5:46",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$71213",
                                "typeString": "contract ERC20"
                            }
                        }
                    },
                    {
                        "id": 8121,
                        "nodeType": "FunctionDefinition",
                        "src": "1202:141:46",
                        "nodes": [],
                        "body": {
                            "id": 8120,
                            "nodeType": "Block",
                            "src": "1341:2:46",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 8105,
                            "nodeType": "StructuredDocumentation",
                            "src": "1034:163:46",
                            "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 8114,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8108,
                                        "src": "1311:7:46",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 8115,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 8113,
                                    "name": "HyperdriveTarget0",
                                    "nameLocations": [
                                        "1293:17:46"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5402,
                                    "src": "1293:17:46"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1293:26:46"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 8117,
                                        "name": "__vault",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8111,
                                        "src": "1332:7:46",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$10602",
                                            "typeString": "contract IERC4626"
                                        }
                                    }
                                ],
                                "id": 8118,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 8116,
                                    "name": "ERC4626Base",
                                    "nameLocations": [
                                        "1320:11:46"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 7983,
                                    "src": "1320:11:46"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1320:20:46"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 8112,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8108,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1253:7:46",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8121,
                                    "src": "1223:37:46",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 8107,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8106,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1223:11:46",
                                                "1235:10:46"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10819,
                                            "src": "1223:22:46"
                                        },
                                        "referencedDeclaration": 10819,
                                        "src": "1223:22:46",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10819_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8111,
                                    "mutability": "mutable",
                                    "name": "__vault",
                                    "nameLocation": "1279:7:46",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8121,
                                    "src": "1270:16:46",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$10602",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 8110,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8109,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "1270:8:46"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10602,
                                            "src": "1270:8:46"
                                        },
                                        "referencedDeclaration": 10602,
                                        "src": "1270:8:46",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$10602",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1213:79:46"
                        },
                        "returnParameters": {
                            "id": 8119,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1341:0:46"
                        },
                        "scope": 8137,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8136,
                        "nodeType": "FunctionDefinition",
                        "src": "1523:94:46",
                        "nodes": [],
                        "body": {
                            "id": 8135,
                            "nodeType": "Block",
                            "src": "1573:44:46",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 8131,
                                                        "name": "_vault",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 7753,
                                                        "src": "1602:6:46",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC4626_$10602",
                                                            "typeString": "contract IERC4626"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC4626_$10602",
                                                            "typeString": "contract IERC4626"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 8129,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1591:3:46",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 8130,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1595:6:46",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1591:10:46",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 8132,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1591:18:46",
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
                                            "id": 8128,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5401,
                                            "src": "1583:7:46",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 8133,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1583:27:46",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8134,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1583:27:46"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 8122,
                            "nodeType": "StructuredDocumentation",
                            "src": "1370:148:46",
                            "text": "@notice Gets the ERC4626 compatible vault used as this pool's yield\n         source.\n @return The ERC4626 compatible yield source."
                        },
                        "functionSelector": "fbfa77cf",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "vault",
                        "nameLocation": "1532:5:46",
                        "parameters": {
                            "id": 8123,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1537:2:46"
                        },
                        "returnParameters": {
                            "id": 8127,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8126,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8136,
                                    "src": "1563:8:46",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$10602",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 8125,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8124,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "1563:8:46"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10602,
                                            "src": "1563:8:46"
                                        },
                                        "referencedDeclaration": 10602,
                                        "src": "1563:8:46",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$10602",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1562:10:46"
                        },
                        "scope": 8137,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 8097,
                            "name": "HyperdriveTarget0",
                            "nameLocations": [
                                "965:17:46"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5402,
                            "src": "965:17:46"
                        },
                        "id": 8098,
                        "nodeType": "InheritanceSpecifier",
                        "src": "965:17:46"
                    },
                    {
                        "baseName": {
                            "id": 8099,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "984:11:46"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 7983,
                            "src": "984:11:46"
                        },
                        "id": 8100,
                        "nodeType": "InheritanceSpecifier",
                        "src": "984:11:46"
                    }
                ],
                "canonicalName": "ERC4626Target0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 8096,
                    "nodeType": "StructuredDocumentation",
                    "src": "498:440:46",
                    "text": "@author DELV\n @title ERC4626Target0\n @notice ERC4626Hyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    8137,
                    7983,
                    5402,
                    14797,
                    18103,
                    16633,
                    15699,
                    17117,
                    13157,
                    14333,
                    18319,
                    71995,
                    11551,
                    12117,
                    11865,
                    12205
                ],
                "name": "ERC4626Target0",
                "nameLocation": "947:14:46",
                "scope": 8138,
                "usedErrors": [
                    10884,
                    10890,
                    10893,
                    10902,
                    10914,
                    10917,
                    10926,
                    10929,
                    10932,
                    10935,
                    10959,
                    10964,
                    10967,
                    10976,
                    10991,
                    71370,
                    71651,
                    71656,
                    71659,
                    71940
                ],
                "usedEvents": [
                    11371,
                    11386,
                    11405,
                    11420,
                    11437,
                    11456,
                    11475,
                    11496,
                    11509,
                    11516,
                    11521,
                    11526,
                    11531,
                    11538,
                    11543,
                    11550,
                    12098,
                    12107,
                    12116
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 46
};
