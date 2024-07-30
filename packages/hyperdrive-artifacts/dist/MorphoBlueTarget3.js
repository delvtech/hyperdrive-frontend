export const MorphoBlueTarget3 = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_config",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "components": [
                        {
                            "name": "baseToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "vaultSharesToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "linkerFactory",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "linkerCodeHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "initialVaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumTransactionAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "circuitBreakerDelta",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "positionDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "checkpointDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governance",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "feeCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sweepCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "checkpointRewarder",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "fees",
                            "type": "tuple",
                            "internalType": "struct IHyperdrive.Fees",
                            "components": [
                                {
                                    "name": "curve",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "flat",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceLP",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceZombie",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct IMorphoBlueHyperdrive.MorphoBlueParams",
                    "components": [
                        {
                            "name": "morpho",
                            "type": "address",
                            "internalType": "contract IMorpho"
                        },
                        {
                            "name": "collateralToken",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "oracle",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "irm",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "lltv",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "event",
            "name": "AddLiquidity",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CheckpointRewarderUpdated",
            "inputs": [
                {
                    "name": "newCheckpointRewarder",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CloseLong",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CloseShort",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "basePayment",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CollectGovernanceFee",
            "inputs": [
                {
                    "name": "collector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CreateCheckpoint",
            "inputs": [
                {
                    "name": "checkpointTime",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "checkpointVaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "maturedShorts",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "maturedLongs",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "FeeCollectorUpdated",
            "inputs": [
                {
                    "name": "newFeeCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernanceUpdated",
            "inputs": [
                {
                    "name": "newGovernance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Initialize",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "apr",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OpenLong",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OpenShort",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "baseProceeds",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauseStatusUpdated",
            "inputs": [
                {
                    "name": "isPaused",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauserUpdated",
            "inputs": [
                {
                    "name": "newPauser",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "status",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RedeemWithdrawalShares",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "withdrawalShareAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RemoveLiquidity",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "withdrawalShareAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Sweep",
            "inputs": [
                {
                    "name": "collector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "target",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SweepCollectorUpdated",
            "inputs": [
                {
                    "name": "newSweepCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TransferSingle",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "id",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "AddressEmptyCode",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "AddressInsufficientBalance",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DistributeExcessIdleFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "FailedInnerCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidApr",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidEffectiveShareReserves",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTimestamp",
            "inputs": []
        },
        {
            "type": "error",
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MinimumTransactionAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotPayable",
            "inputs": []
        },
        {
            "type": "error",
            "name": "OutputLimit",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PoolAlreadyInitialized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PoolIsPaused",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ReentrancyGuardReentrantCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RestrictedZeroAddress",
            "inputs": []
        },
        {
            "type": "error",
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint112",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6103006040523480156200001257600080fd5b50604051620049c3380380620049c3833981016040819052620000359162000638565b6001600081905582516001600160a01b039081166080818152602080870151841660a0908152828801516101a0908152908801516101c090815260c0808a01516101e090815260e0808c015161020052610120808d0151909352610100808d0151909152610140808d0151909152908b018051519092528151850151905280516040908101516101609081529151606090810151610180908152828d01518a1661022052818d015161024052928c015160098054918b166001600160a01b0319928316179055928c0151600a8054918b16918516919091179055938b0151600b8054918a16918416919091179055918a0151600c805491891691909216179055875186166102608190529288015186166102805287015185166102a0528601519093166102c0528401516102e05283926200017192906200017a565b505050620007cb565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001d490859083906200024616565b6200024057604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000234918691620002f716565b620002408482620002f7565b50505050565b6000806000846001600160a01b03168460405162000265919062000776565b6000604051808303816000865af19150503d8060008114620002a4576040519150601f19603f3d011682016040523d82523d6000602084013e620002a9565b606091505b5091509150818015620002d7575080511580620002d7575080806020019051810190620002d79190620007a7565b8015620002ee57506000856001600160a01b03163b115b95945050505050565b60006200030e6001600160a01b038416836200036a565b9050805160001415801562000336575080806020019051810190620003349190620007a7565b155b156200036557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200037a8383600062000381565b9392505050565b606081471015620003a85760405163cd78605960e01b81523060048201526024016200035c565b600080856001600160a01b03168486604051620003c6919062000776565b60006040518083038185875af1925050503d806000811462000405576040519150601f19603f3d011682016040523d82523d6000602084013e6200040a565b606091505b5090925090506200041d86838362000427565b9695505050505050565b60608262000440576200043a826200048b565b6200037a565b81511580156200045857506001600160a01b0384163b155b156200048357604051639996b31560e01b81526001600160a01b03851660048201526024016200035c565b50806200037a565b8051156200049c5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004ea57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004b557600080fd5b80516200051381620004f0565b919050565b6000608082840312156200052b57600080fd5b604051608081016001600160401b03811182821017156200055c57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a08284031215620005a057600080fd5b60405160a081016001600160401b0381118282101715620005d157634e487b7160e01b600052604160045260246000fd5b80604052508091508251620005e681620004f0565b81526020830151620005f881620004f0565b602082015260408301516200060d81620004f0565b604082015260608301516200062281620004f0565b6060820152608092830151920191909152919050565b6000808284036103008112156200064e57600080fd5b610260808212156200065f57600080fd5b62000669620004b8565b9150620006768562000506565b8252620006866020860162000506565b6020830152620006996040860162000506565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200070481870162000506565b908301526101806200071886820162000506565b908301526101a06200072c86820162000506565b908301526101c06200074086820162000506565b908301526101e0620007558787830162000518565b81840152508193506200076b868287016200058d565b925050509250929050565b6000825160005b818110156200079957602081860181015185830152016200077d565b506000920191825250919050565b600060208284031215620007ba57600080fd5b815180151581146200037a57600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051613fc8620009fb60003960008181611ac20152612ea5015260008181611a930152612e7e015260008181611a640152612e56015260008181611a350152612e2e01526000818161196f015281816119cc0152612dde015260005050600050506000818161030301528181610332015261035f01526000818160de015281816105a9015261169901526000818161085601528181610941015281816109d401528181610add0152818161156a01528181611673015281816121a80152818161220b01528181612aea01528181613032015261306e01526000818161013f015281816108c601528181610ea70152818161142e01528181611492015281816114d9015261164d01526000611dad015260008181611f0801526132c701526000818161106b0152611edc0152600061327d0152600081816101810152818161091901528181610ec8015281816113fe01528181611462015281816114fa01526116bf01526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa30152612a8001526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b01526000505060008181611942015281816119a301528181611a060152612e060152613fc86000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c366004613993565b610066565b60405190815260200160405180910390f35b6100416100613660046139f7565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613a5d565b611381565b6113cb565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613a70565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006115d8565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613a5d565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613a70565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916103f1916001600160801b0390911690613a70565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb01549192509061042c908390613a5d565b9050600080600061043c8a611604565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613b01565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613b10565b91506104ca6104c58c61173e565b61176c565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613b01565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613b10565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613a70565b9190611792565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e6117b0565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613b29565b8e6117c5565b61063a8961186d565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613a5d565b9b5090508a158061073757506107348c600061187a565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611792565b610770565b60005b905061077f6020850185613b29565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613b60565b866107ca60408c018c613b7d565b6040516107dd9796959493929190613bed565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613c2e565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613c45565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd848461188f565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e858585896000806113cb565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a66856118b5565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f846118df565b600480546001600160801b0319166001600160801b0392909216919091179055610ab8836118b5565b600280546001600160801b03928316600160801b029216919091179055610b016000807f00000000000000000000000000000000000000000000000000000000000000006117c5565b610b196000610b1360208c018c613b29565b8a6117c5565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f6020820182613b29565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613b60565b87610b8a6040890189613b7d565b604051610b9d9796959493929190613bed565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c136020830183613b29565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b61188f565b905090565b600080610c728787878661191b565b9050610c7e81856115d8565b979650505050505050565b81600080610c9d6040850160208601613b60565b15610cc257610cb885610cb36040870187613b7d565b611932565b9093509050610cda565b5034610cda85610cd56040870187613b7d565b611b5d565b610ce2611b76565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f0000000000000000000000000000000000000000000000000000000000000000611b89565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611379565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b613a5d565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b92505b50610ef9836118b5565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b613a70565b8a84611b9f565b610f8d89610f87610f807f000000000000000000000000000000000000000000000000000000000000000083613a5d565b4290611cdd565b84611b9f565b610f9688611cec565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d613a70565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611e90565b6000818152601060205260408120549192508c8c831561113a576001925060008061102386898d866000611ec5565b9150915080600d60008282546110399190613a5d565b9091555061105590508660008461104f8161173e565b88611f94565b61105f8183613a5d565b915061108f86838a8e877f000000000000000000000000000000000000000000000000000000000000000061210e565b91506110a361109e8385612152565b612167565b600680546002906110c49084906201000090046001600160701b0316613c73565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f1826118b5565b60068054601090611113908490600160801b90046001600160801b0316613c93565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611e90565b60008181526010602052604090205490915080156112565760019450600080611174838b8f886001611ec5565b9150915080600d600082825461118a9190613a5d565b909155506111a69050836000846111a08161173e565b8a612191565b6111b08183613a70565b91506111bf61109e8387612152565b600680546002906111e09084906201000090046001600160701b0316613c73565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d826118b5565b6006805460109061122f908490600160801b90046001600160801b0316613c93565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415611290576112826112688761173e565b6112718361173e565b61127b9190613cb3565b6000612382565b8e61128d84826123c1565b50505b600061129b846125bb565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615611369578e6113655a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612707565b5050505b50999b5050505050505050505050505b949350505050565b60006113a960106000611395600286611e90565b81526020019081526020016000205461173e565b6113bb60106000611395600187611e90565b6113c59190613cb3565b92915050565b6000806000806113db8a8a612794565b91509150806113f2576000809350935050506115cd565b6000611452838a61142b7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a70565b8b7f00000000000000000000000000000000000000000000000000000000000000006127d0565b50905060006114b6848b8461148f7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a70565b8d7f000000000000000000000000000000000000000000000000000000000000000061288d565b5090508115806114c4575080155b156114d0575060009050805b600061151e858c7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b905061152c83838c8461294b565b509093506000905061153e848f613a5d565b9050600061155f8b8b6115508761173e565b61155a908e613cd3565b612997565b90508b61159461158f7f0000000000000000000000000000000000000000000000000000000000000000836129fe565b61173e565b61159d8361173e565b6115aa61158f8685612152565b6115b49190613cb3565b6115be9190613cb3565b60019950995050505050505050505b965096945050505050565b60006100916115ec84846301e13380612a0f565b6115fe85670de0b6b3a7640000613a70565b906117b0565b61160c6138ce565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117049116612a35565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261173692900416612a35565b905292915050565b60006001600160ff1b038211156117685760405163396ea70160e11b815260040160405180910390fd5b5090565b61177581612aa4565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117a957600080fd5b5091020490565b600061009183670de0b6b3a764000084611792565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906117f7908490613a5d565b90915550506000838152601060205260408120805483929061181a908490613a5d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006113c58260046123c1565b60008183136118895782610091565b50919050565b60008061189c8484612794565b9092509050806118ae576118ae612c3c565b5092915050565b60006001600160801b0382111561176857604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806118fd575060016001607f1b0382135b156117685760405163a5353be560e01b815260040160405180910390fd5b60006100788261192c858888611792565b90612c55565b60008061196a6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612cca565b6119ca7f0000000000000000000000000000000000000000000000000000000000000000611999876001613a5d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612d37565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a99aad896040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000008152508760003089896040518763ffffffff1660e01b8152600401611b0b96959493929190613cfb565b60408051808303816000875af1158015611b29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4d9190613d64565b925060009150505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b6000610c5e670de0b6b3a7640000612dc7565b6000611b958284613d9e565b6100919084613a70565b600083815260086020526040902054600160801b90046001600160801b0316808303611bcb5750505050565b6000848152600860205260408120546001600160801b031690819003611c2557611bf4836118b5565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611ca3565b611c76611c71670de0b6b3a7640000611c3e8886613a70565b611c489190613c2e565b85670de0b6b3a7640000611c5c878a613a70565b611c669190613c2e565b859291906001612f33565b6118b5565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611cac846118b5565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118895782610091565b6006546000908190611d0f908490600160801b90046001600160801b0316612152565b6006546201000090046001600160701b03169250905081811115611e8b576000611d398383613a70565b9050611d48611c718286612fd1565b60068054601090611d6a908490600160801b90046001600160801b0316613db2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611da385836117b090919063ffffffff16565b90506000611dd1827f0000000000000000000000000000000000000000000000000000000000000000612152565b905080600d6000828254611de59190613a5d565b90915550611df590508183613a70565b9150611e00826118b5565b60028054600090611e1b9084906001600160801b0316613c93565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e4882612fe6565b60048054600090611e5d908490600f0b613dd2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611eba5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611ed287856117b0565b91506000611f00837f0000000000000000000000000000000000000000000000000000000000000000612152565b9050611f2c817f0000000000000000000000000000000000000000000000000000000000000000612152565b91508315611f4f57611f3e8282613a70565b611f489084613a70565b9250611f66565b611f598282613a70565b611f639084613a5d565b92505b86861015611f8957611f79838789611792565b9250611f86828789611792565b91505b509550959350505050565b600454600160801b90046001600160801b0316611fdd611c7182611fc0670de0b6b3a764000086613c2e565b600554600160801b90046001600160801b031691908a6000612f33565b600580546001600160801b03928316600160801b029216919091179055612003866118b5565b61200d9082613db2565b600480546001600160801b03928316600160801b029216919091179055612033846118b5565b6002805460009061204e9084906001600160801b0316613c93565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061207b836118df565b60048054600090612090908490600f0b613dd2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506120c0856118b5565b600280546010906120e2908490600160801b90046001600160801b0316613db2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612120846115fe8a888a611792565b905061212d888486611792565b6121379082613a5d565b9050868111156121475786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611792565b60006001600160701b038211156117685760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806121d357507f00000000000000000000000000000000000000000000000000000000000000006121d18583613a70565b105b156121e0576121e0612c3c565b6004549084900390600f0b6121f58482613cb3565b9050836122018661173e565b13801561223657507f0000000000000000000000000000000000000000000000000000000000000000612234838361188f565b105b1561224357612243612c3c565b600354600160801b90046001600160801b0316612285611c718261226f670de0b6b3a764000088613c2e565b6005546001600160801b031691908c6000612f33565b600580546001600160801b0319166001600160801b03929092169190911790556122af8882613a70565b90506122ba816118b5565b600380546001600160801b03928316600160801b0292169190911790556122e0836118b5565b600280546001600160801b0319166001600160801b0392909216919091179055612309826118df565b600480546001600160801b0319166001600160801b0392909216919091179055612332876118b5565b60028054601090612354908490600160801b90046001600160801b0316613c93565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461239d90611c71906001600160801b03168484612997565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be73021549091829161240c916001600160801b031690613a70565b9050806000036124205760019150506113c5565b600061242b85613010565b905080600003612440576001925050506113c5565b60008061244e8385896130ac565b91509150806124645760009450505050506113c5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016124a0929190613dff565b6040805180830381865af41580156124bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e09190613d64565b915091506124fe6124f08261173e565b6124f990613e75565b612aa4565b92508261251457600096505050505050506113c5565b61251d826118b5565b600780546000906125389084906001600160801b0316613c93565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612565816118b5565b60078054601090612587908490600160801b90046001600160801b0316613c93565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6125e487611604565b6040518263ffffffff1660e01b81526004016126009190613b01565b6040805180830381865af415801561261c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126409190613e91565b9150915080612656575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916126bc91613a5d565b6126c69190613a70565b9050806000036126de57506000958695509350505050565b60008087116126ee5760006126f9565b6126f9848884611792565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561272d5761272d613ec1565b6040519080825280601f01601f191660200182016040528015612757576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612778578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836127a38661173e565b6127ad9190613cb3565b905060008112156127c5576000809250925050610d57565b946001945092505050565b60008060006127e2888888888861321b565b9050600061280d670de0b6b3a76400006127fc8888612fd1565b6128069190613a5d565b83906117b0565b9050670de0b6b3a764000081106128415761283a612833670de0b6b3a7640000896117b0565b8290612c55565b9050612859565b612856612833670de0b6b3a764000089612fd1565b90505b61286381866117b0565b90508881101561287b5760008093509350505061278a565b97909703976001975095505050505050565b600080600061289f898988888861324a565b90506128b98661192c6128b28a8d613a5d565b8790612152565b98506128c6858a86611792565b9850888110156128dd5760008092509250506115cd565b888103670de0b6b3a7640000811061290b57612904612833670de0b6b3a764000089612fd1565b9050612923565b612920612833670de0b6b3a7640000896117b0565b90505b80891015612939576000809350935050506115cd565b90970398600198509650505050505050565b600080600080600061295e89878961326f565b909250905061296d8289613a70565b9750600061297c82888a611792565b9050612988818b613a70565b9a989950979650505050505050565b6000806129a58460006132f5565b6129b08460006132f5565b6129ba9190613cb3565b905060008113156129d6576129cf8186613a5d565b94506129f5565b60008112156129f5576129e881613e75565b6129f29086613a70565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612a2657600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612a49610d5e565b612a539190613c2e565b9050808311612a63576000612a6d565b612a6d8184613a70565b9150610091612806670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c2e565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b819190613ed7565b935093509350935080612b9d5750600098975050505050505050565b868414612bce57612bad846118b5565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bff57612bde836118df565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c2d57612c0f826118b5565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612c6e5750670de0b6b3a76400006113c5565b82600003612c7e575060006113c5565b6000612c898361173e565b90506000612c9e612c998661173e565b61330b565b9050818102612cb5670de0b6b3a764000082613f18565b9050612cc081613531565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612d319186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506136c6565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612d888482613733565b612d31576040516001600160a01b03848116602483015260006044830152612dbd91869182169063095ea7b390606401612cff565b612d3184826136c6565b6040516303c2063f60e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001660848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260c4810182905260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f09060e401602060405180830381865af4158015612f0f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c59190613b10565b600082600003612f44575084610078565b8115612f9757612f75612f578487613a5d565b612f618587612152565b612f6b888a612152565b6115fe9190613a5d565b90506000612f838588611cdd565b905080821015612f91578091505b50610078565b828503612fa657506000610078565b610075612fb38487613a70565b612fbd85876129fe565b612fc7888a612152565b6115fe9190613a70565b600061009183670de0b6b3a764000084612a0f565b600060016001607f1b038211156117685760405163a5353be560e01b815260040160405180910390fd5b600354600090819061302b906001600160801b031684612fd1565b90506130577f000000000000000000000000000000000000000000000000000000000000000082613a5d565b6002546001600160801b03161115611889576002547f0000000000000000000000000000000000000000000000000000000000000000906130a29083906001600160801b0316613a70565b6100919190613a70565b6130b461392f565b6000806130c084611604565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016130fb9190613b01565b6040805180830381865af4158015613117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061313b9190613e91565b9350905082613150575060009150611b559050565b600061317261158f84610160015185610140015161215290919063ffffffff16565b61319261158f8561012001518661010001516129fe90919063ffffffff16565b61319c9190613cb3565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006132278585612c55565b6132406132388661192c868b612152565b859085611792565b6100759190613a5d565b60006132568585612c55565b6132406132678661192c868b6129fe565b859085612a0f565b6000806132bf856132b985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006132af818c612fd1565b6132b99190613a70565b906129fe565b91506132eb827f0000000000000000000000000000000000000000000000000000000000000000612152565b9050935093915050565b60008183136133045781610091565b5090919050565b600080821361332d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133b09084901c61173e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361354c57506000919050565b680755bf798b4a1bf1e58212613575576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612cc074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61173e565b60006136db6001600160a01b038416836137d6565b905080516000141580156137005750808060200190518101906136fe9190613f46565b155b1561372e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516137509190613f63565b6000604051808303816000865af19150503d806000811461378d576040519150601f19603f3d011682016040523d82523d6000602084013e613792565b606091505b50915091508180156137bc5750805115806137bc5750808060200190518101906137bc9190613f46565b80156100785750505050506001600160a01b03163b151590565b60606100918383600084600080856001600160a01b031684866040516137fc9190613f63565b60006040518083038185875af1925050503d8060008114613839576040519150601f19603f3d011682016040523d82523d6000602084013e61383e565b606091505b5091509150612cc086838360608261385e57613859826138a5565b610091565b815115801561387557506001600160a01b0384163b155b1561389e57604051639996b31560e01b81526001600160a01b0385166004820152602401613725565b5080610091565b8051156138b55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806139436138ce565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561188957600080fd5b600080600080600060a086880312156139ab57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156139de57600080fd5b6139ea88828901613981565b9150509295509295909350565b600080600060608486031215613a0c57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613a3157600080fd5b613a3d86828701613981565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b808201808211156113c5576113c5613a47565b818103818111156113c5576113c5613a47565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113c58284613a83565b600060208284031215613b2257600080fd5b5051919050565b600060208284031215613b3b57600080fd5b81356001600160a01b038116811461009157600080fd5b8015158114610c3a57600080fd5b600060208284031215613b7257600080fd5b813561009181613b52565b6000808335601e19843603018112613b9457600080fd5b83018035915067ffffffffffffffff821115613baf57600080fd5b602001915036819003821315610d5757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613c2160c083018486613bc4565b9998505050505050505050565b80820281158282048414176113c5576113c5613a47565b600080600060608486031215613c5a57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118ae576118ae613a47565b6001600160801b038181168382160190808211156118ae576118ae613a47565b81810360008312801583831316838312821617156118ae576118ae613a47565b8082018281126000831280158216821582161715613cf357613cf3613a47565b505092915050565b600061012060018060a01b03808a511684528060208b01511660208501528060408b01511660408501528060608b015116606085015260808a015160808501528860a08501528760c085015280871660e08501525080610100840152613c218184018587613bc4565b60008060408385031215613d7757600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b600082613dad57613dad613d88565b500690565b6001600160801b038281168282160390808211156118ae576118ae613a47565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113c5576113c5613a47565b60006102a082019050613e13828551613a83565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000600160ff1b8201613e8a57613e8a613a47565b5060000390565b60008060408385031215613ea457600080fd5b825191506020830151613eb681613b52565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613eed57600080fd5b8451935060208501519250604085015191506060850151613f0d81613b52565b939692955090935050565b600082613f2757613f27613d88565b600160ff1b821460001984141615613f4157613f41613a47565b500590565b600060208284031215613f5857600080fd5b815161009181613b52565b6000825160005b81811015613f845760208186018101518583015201613f6a565b50600092019182525091905056fea2646970667358221220f1a4213edaa7d1260a0ed8267b79ab1ab71cd699e75e5eb3a632230da82c56cc64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
