export const StETHTarget3 = {
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
            "name": "checkpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "type": "function",
            "name": "redeemWithdrawalShares",
            "inputs": [
                {
                    "name": "_withdrawalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeLiquidity",
            "inputs": [
                {
                    "name": "_lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
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
            "name": "InsufficientBalance",
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
            "name": "InvalidCheckpointTime",
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200401c3803806200401c833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b6b620004b16000396000505060005050600081816104c5015281816104f4015261052101526000818161032c0152818161076b01528181610c3d015261193401526000818161090d015281816109f801528181610a8b01528181610b530152818161190e0152818161249a015281816124fd01528181612883015281816128bf0152612ab701526000818161038d0152818161097d01528181610f3901526118e80152600061209f015260006121fa0152600081816110fd01526121ce015260005050600081816103cf015281816109d001528181610f5a015261195a0152600081816103ae0152818161049a015281816109aa015281816110350152612ddc0152600081816102840152818161045901528181610df801528181610e7301528181610ee901528181610fb50152610fed015260008181611dea01528181612c5501528181612cf001528181612fdd0152613055015260005050613b6b6000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613549565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613599565b61011a565b005b6100be6100b93660046135bb565b610128565b604051908152602001610080565b6100be6100da366004613549565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613549565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261022d565b5050565b600061013786868686866102ee565b90505b95945050505050565b60006101508484846108bf565b90505b9392505050565b60008061010d858585610c27565b600080610173610d75565b61017c83610d9f565b6000610186610dd8565b905061019d610193610df0565b8260046001610e1c565b506101ab3387838888611415565b90935091506101bd602085018561361f565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101fb60408b0160208c01613656565b61020860408c018c613673565b60405161021a969594939291906136e3565b60405180910390a3506101126001600055565b610235610d75565b600061023f610dd8565b6000848152600860205260409020600101549091506001600160801b0316156102735761026c8183611558565b50506102e4565b600061027d610df0565b90506102a97f000000000000000000000000000000000000000000000000000000000000000085613733565b1515806102b557508381105b156102d35760405163ecd29e8160e01b815260040160405180910390fd5b6102e08483856000610e1c565b5050505b6101246001600055565b60006102f8610d75565b600654610100900460ff1615610321576040516321081abf60e01b815260040160405180910390fd5b61032a82610d9f565b7f000000000000000000000000000000000000000000000000000000000000000086101561036b5760405163211ddda360e11b815260040160405180910390fd5b60006103f3610378611753565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611774565b90508481108061040257508381115b1561042057604051633b61151160e11b815260040160405180910390fd5b60008061042d898661179a565b91509150600061043b610df0565b905061044b818360046001610e1c565b5060006104be60088261047e7f00000000000000000000000000000000000000000000000000000000000000008661375d565b81526020810191909152604001600020546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611873565b90506104ea7f000000000000000000000000000000000000000000000000000000000000000082613770565b85118061054957507f00000000000000000000000000000000000000000000000000000000000000008111801561054957506105467f00000000000000000000000000000000000000000000000000000000000000008261375d565b85105b1561056757604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916105b3916001600160801b039091169061375d565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154919250906105ee908390613770565b905060008060006105fe8761189f565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610638908490600401613801565b602060405180830381865af4158015610655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106799190613810565b915061068c610687896119d9565b611a07565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916106ed91859101613801565b602060405180830381865af415801561070a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072e9190613810565b9250818310156107515760405163184d952160e11b815260040160405180910390fd5b6107678483610760818761375d565b9190611a2d565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107aa5760405163211ddda360e11b815260040160405180910390fd5b508d8d6107b7828c611a4b565b10156107d65760405163c972651760e01b815260040160405180910390fd5b6107ee60006107e860208e018e61361f565b8c611a60565b60006107f988611b09565b90508061081957604051638bdf918d60e01b815260040160405180910390fd5b600085156108305761082b8487611a4b565b610833565b60005b90508c610843602082018261361f565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf8e868d6108806040870160208801613656565b8761088e6040890189613673565b6040516108a19796959493929190613829565b60405180910390a250505050505050505050505061013a6001600055565b60006108c9610d75565b6108d282610d9f565b60065460ff16156108f657604051637983c05160e01b815260040160405180910390fd5b600080610903868561179a565b90925090506109337f0000000000000000000000000000000000000000000000000000000000000000600261386a565b82101561095357604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a839190613881565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ab48484611b16565b1015610ad35760405163216f4ab160e21b815260040160405180910390fd5b610adc83611b3c565b600280546001600160801b0319166001600160801b0392909216919091179055610b0582611b66565b600480546001600160801b0319166001600160801b0392909216919091179055610b2e81611b3c565b600280546001600160801b03928316600160801b029216919091179055610b776000807f0000000000000000000000000000000000000000000000000000000000000000611a60565b610b8f6000610b8960208a018a61361f565b88611a60565b610ba4610b9a610df0565b8560046001610e1c565b50610bb2602088018861361f565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af3878b87610bef60408d0160208e01613656565b8d610bfd60408f018f613673565b604051610c109796959493929190613829565b60405180910390a250505050506101536001600055565b600080610c32610d75565b610c3b83610d9f565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c7c5760405163211ddda360e11b815260040160405180910390fd5b6000610c86610dd8565b9050610c93610193610df0565b50610ca060003388611ba2565b610cb5600360f81b610b89602087018761361f565b6000610cd0610cc7602087018761361f565b88848989611415565b9094509050610cdf818861375d565b92506000610cec83611c73565b509050610cfc602087018761361f565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a8887610d3a60408d0160208e01613656565b8a888e8060400190610d4c9190613673565b604051610d609897969594939291906138af565b60405180910390a35050506101126001600055565b600260005403610d9857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dae602083018361361f565b6001600160a01b031603610dd55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610deb670de0b6b3a7640000611dd1565b905090565b6000610deb427f0000000000000000000000000000000000000000000000000000000000000000611e5e565b600084815260086020526040812060018101546001600160801b0316151580610e4457504286115b15610e5d57600101546001600160801b0316905061140d565b6000806000610e6a610df0565b90506000610e987f00000000000000000000000000000000000000000000000000000000000000008b613770565b90505b81811015610f0e576000818152600860205260409020600101546001600160801b03168015610ee6576000828152600860205260409020549094506001600160801b03169250610f0e565b507f000000000000000000000000000000000000000000000000000000000000000001610e9b565b83600003610f8157889350610f7e610f24611753565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e74565b92505b50610f8b83611b3c565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fe1610fda7f00000000000000000000000000000000000000000000000000000000000000008b61375d565b8a84611e8b565b61101f896110196110127f000000000000000000000000000000000000000000000000000000000000000083613770565b4290611fc9565b84611e8b565b61102888611fde565b506000905060088161105a7f00000000000000000000000000000000000000000000000000000000000000008d61375d565b815260208101919091526040016000908120600101546001600160801b0316915061108660028c612182565b6000818152601060205260408120549192508c8c83156111cc57600192506000806110b586898d8660006121b7565b9150915080600d60008282546110cb9190613770565b909155506110e79050866000846110e1816119d9565b88612286565b6110f18183613770565b915061112186838a8e877f0000000000000000000000000000000000000000000000000000000000000000612400565b91506111356111308385612444565b612459565b600680546002906111569084906201000090046001600160701b03166138f7565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061118382611b3c565b600680546010906111a5908490600160801b90046001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111d9600184612182565b60008181526010602052604090205490915080156112e85760019450600080611206838b8f8860016121b7565b9150915080600d600082825461121c9190613770565b90915550611238905083600084611232816119d9565b8a612483565b611242818361375d565b91506112516111308387612444565b600680546002906112729084906201000090046001600160701b03166138f7565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061129f82611b3c565b600680546010906112c1908490600160801b90046001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415611322576113146112fa876119d9565b611303836119d9565b61130d9190613937565b6000612674565b8e61131f8482611558565b50505b600061132d84611c73565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b0316156113fd578e6113f95a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612727565b5050505b50999b5050505050505050505050505b949350505050565b60008061142185611b09565b505060075485906001600160801b03168082111561144657806001600160801b031691505b8160000361145b57600080925092505061154e565b61146a600360f81b8984611ba2565b6007546000906114909084906001600160801b03600160801b9091048116908516611a2d565b905061149b83611b3c565b6114a59083613957565b600780546001600160801b0319166001600160801b03929092169190911790556114ce81611b3c565b600780546010906114f0908490600160801b90046001600160801b0316613957565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061151f8188876127b2565b935061152b868461284c565b84101561154b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916115a3916001600160801b03169061375d565b9050806000036115b757600191505061174d565b60006115c285612861565b9050806000036115d75760019250505061174d565b6000806115e58385896128fd565b91509150806115fb57600094505050505061174d565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611637929190613977565b6040805180830381865af4158015611653573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167791906139ed565b91509150611695611687826119d9565b61169090613a11565b612a71565b9250826116ab576000965050505050505061174d565b6116b482611b3c565b600780546000906116cf9084906001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116fc81611b3c565b6007805460109061171e908490600160801b90046001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600254600454600091610deb916001600160801b0390911690600f0b611b16565b60008061178387878786611e74565b905061178f8185611873565b979650505050505050565b600080806117ae6040850160208601613656565b156117d3576117c9856117c46040870187613673565b612c09565b90935090506117ef565b50346117eb856117e66040870187613673565b612cce565b8492505b6117f7610dd8565b9150801561186a57604051600090339083908381818185875af1925050503d8060008114611841576040519150601f19603f3d011682016040523d82523d6000602084013e611846565b606091505b5050905080611868576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361188784846301e13380612d6b565b61189985670de0b6b3a764000061375d565b90611a4b565b6118a7613484565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161199f9116612d91565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926119d192900416612d91565b905292915050565b60006001600160ff1b03821115611a035760405163396ea70160e11b815260040160405180910390fd5b5090565b611a1081612a71565b610dd557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a4457600080fd5b5091020490565b600061015383670de0b6b3a764000084611a2d565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611a92908490613770565b909155505060008381526010602052604081208054839290611ab5908490613770565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061174d826004611558565b600080611b238484612e07565b909250905080611b3557611b35612e43565b5092915050565b60006001600160801b03821115611a0357604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611b84575060016001607f1b0382135b15611a035760405163a5353be560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115611be557604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290611c2890849061375d565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611afc565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611c9c8761189f565b6040518263ffffffff1660e01b8152600401611cb89190613801565b6040805180830381865af4158015611cd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cf89190613a2d565b9150915080611d0e575060009485945092505050565b6000808611611d1e576000611d28565b611d288387612444565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691611d939190613770565b611d9d919061375d565b905080600003611db65750600096879650945050505050565b6000611dc28383611a4b565b98600198509650505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa158015611e3a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174d9190613810565b6000611e6a8284613733565b610153908461375d565b600061013a82611e85858888611a2d565b90612e5c565b600083815260086020526040902054600160801b90046001600160801b0316808303611eb75750505050565b6000848152600860205260408120546001600160801b031690819003611f1157611ee083611b3c565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611f8f565b611f62611f5d670de0b6b3a7640000611f2a888661375d565b611f34919061386a565b85670de0b6b3a7640000611f48878a61375d565b611f52919061386a565b859291906001612ed1565b611b3c565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611f9884611b3c565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b6000818311611fd85782610153565b50919050565b6006546000908190612001908490600160801b90046001600160801b0316612444565b6006546201000090046001600160701b0316925090508181111561217d57600061202b838361375d565b905061203a611f5d8286612f6f565b6006805460109061205c908490600160801b90046001600160801b0316613957565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006120958583611a4b90919063ffffffff16565b905060006120c3827f0000000000000000000000000000000000000000000000000000000000000000612444565b905080600d60008282546120d79190613770565b909155506120e79050818361375d565b91506120f282611b3c565b6002805460009061210d9084906001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061213a82612f84565b6004805460009061214f908490600f0b613a5d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121ac5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806121c48785611a4b565b915060006121f2837f0000000000000000000000000000000000000000000000000000000000000000612444565b905061221e817f0000000000000000000000000000000000000000000000000000000000000000612444565b9150831561224157612230828261375d565b61223a908461375d565b9250612258565b61224b828261375d565b6122559084613770565b92505b8686101561227b5761226b838789611a2d565b9250612278828789611a2d565b91505b509550959350505050565b600454600160801b90046001600160801b03166122cf611f5d826122b2670de0b6b3a76400008661386a565b600554600160801b90046001600160801b031691908a6000612ed1565b600580546001600160801b03928316600160801b0292169190911790556122f586611b3c565b6122ff9082613957565b600480546001600160801b03928316600160801b02921691909117905561232584611b3c565b600280546000906123409084906001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061236d83611b66565b60048054600090612382908490600f0b613a5d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506123b285611b3c565b600280546010906123d4908490600160801b90046001600160801b0316613957565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612412846118998a888a611a2d565b905061241f888486611a2d565b6124299082613770565b9050868111156124395786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a2d565b60006001600160701b03821115611a035760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806124c557507f00000000000000000000000000000000000000000000000000000000000000006124c3858361375d565b105b156124d2576124d2612e43565b6004549084900390600f0b6124e78482613937565b9050836124f3866119d9565b13801561252857507f00000000000000000000000000000000000000000000000000000000000000006125268383611b16565b105b1561253557612535612e43565b600354600160801b90046001600160801b0316612577611f5d82612561670de0b6b3a76400008861386a565b6005546001600160801b031691908c6000612ed1565b600580546001600160801b0319166001600160801b03929092169190911790556125a1888261375d565b90506125ac81611b3c565b600380546001600160801b03928316600160801b0292169190911790556125d283611b3c565b600280546001600160801b0319166001600160801b03929092169190911790556125fb82611b66565b600480546001600160801b0319166001600160801b039290921691909117905561262487611b3c565b60028054601090612646908490600160801b90046001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061269d6126838483612fae565b61268e846000612fae565b6126989190613937565b611b66565b9050600081600f0b13156126f257600380548291906000906126c99084906001600160801b0316613917565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156127225761270781613a8a565b600380546000906126c99084906001600160801b0316613957565b505050565b6000606060008060008661ffff1667ffffffffffffffff81111561274d5761274d613ab0565b6040519080825280601f01601f191660200182016040528015612777576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612798578692505b828152826000602083013e90999098509650505050505050565b6000806127bf8585612444565b90506127ca81612fc4565b9450846000036127de576000915050610153565b6127ee6040840160208501613656565b1561281d5761281685612804602086018661361f565b6128116040870187613673565b613014565b9150612844565b6128408561282e602086018661361f565b61283b6040870187613673565b61302f565b8491505b509392505050565b60006101538383670de0b6b3a7640000612d6b565b600354600090819061287c906001600160801b031684612f6f565b90506128a87f000000000000000000000000000000000000000000000000000000000000000082613770565b6002546001600160801b03161115611fd8576002547f0000000000000000000000000000000000000000000000000000000000000000906128f39083906001600160801b031661375d565b610153919061375d565b6129056134e5565b6000806129118461189f565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161294c9190613801565b6040805180830381865af4158015612968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298c9190613a2d565b93509050826129a15750600091506101129050565b60006129c86129c384610160015185610140015161244490919063ffffffff16565b6119d9565b6129e86129c385610120015186610100015161284c90919063ffffffff16565b6129f29190613937565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b4e9190613ac6565b935093509350935080612b6a5750600098975050505050505050565b868414612b9b57612b7a84611b3c565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bcc57612bab83611b66565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bfa57612bdc82611b3c565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008084341015612c2d576040516312171d8360e31b815260040160405180910390fd5b50600a5460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015612c9f573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612cc49190613810565b9150935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015612d41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d659190613810565b50505050565b6000826000190484118302158202612d8257600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612da5610df0565b612daf919061386a565b9050808311612dbf576000612dc9565b612dc9818461375d565b9150610153612e00670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061386a565b8390611a4b565b600080600083612e16866119d9565b612e209190613937565b90506000811215612e3857600080925092505061186c565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612e755750670de0b6b3a764000061174d565b82600003612e855750600061174d565b6000612e90836119d9565b90506000612ea5612ea0866119d9565b6130c9565b9050818102612ebc670de0b6b3a764000082613b07565b9050612ec7816132ef565b9695505050505050565b600082600003612ee257508461013a565b8115612f3557612f13612ef58487613770565b612eff8587612444565b612f09888a612444565b6118999190613770565b90506000612f218588611fc9565b905080821015612f2f578091505b5061013a565b828503612f445750600061013a565b610137612f51848761375d565b612f5b858761284c565b612f65888a612444565b611899919061375d565b600061015383670de0b6b3a764000084612d6b565b600060016001607f1b03821115611a035760405163a5353be560e01b815260040160405180910390fd5b6000818313612fbd5781610153565b5090919050565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401611e1d565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af115801561309e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130c29190613810565b5050505050565b60008082136130eb5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061316e9084901c6119d9565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361330a57506000919050565b680755bf798b4a1bf1e58212613333576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612ec774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119d9565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806134f9613484565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215611fd857600080fd5b60008060006060848603121561355e57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561358357600080fd5b61358f86828701613537565b9150509250925092565b600080604083850312156135ac57600080fd5b50508035926020909101359150565b600080600080600060a086880312156135d357600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561360657600080fd5b61361288828901613537565b9150509295509295909350565b60006020828403121561363157600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610dd557600080fd5b60006020828403121561366857600080fd5b813561015381613648565b6000808335601e1984360301811261368a57600080fd5b83018035915067ffffffffffffffff8211156136a557600080fd5b60200191503681900382131561186c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a06080820152600061371160a0830184866136ba565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b6000826137425761374261371d565b500690565b634e487b7160e01b600052601160045260246000fd5b8181038181111561174d5761174d613747565b8082018082111561174d5761174d613747565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161174d8284613783565b60006020828403121561382257600080fd5b5051919050565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061385d60c0830184866136ba565b9998505050505050505050565b808202811582820484141761174d5761174d613747565b60008060006060848603121561389657600080fd5b8351925060208401519150604084015190509250925092565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006138e960e0830184866136ba565b9a9950505050505050505050565b6001600160701b03818116838216019080821115611b3557611b35613747565b6001600160801b03818116838216019080821115611b3557611b35613747565b8181036000831280158383131683831282161715611b3557611b35613747565b6001600160801b03828116828216039080821115611b3557611b35613747565b60006102a08201905061398b828551613783565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a0057600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a2657613a26613747565b5060000390565b60008060408385031215613a4057600080fd5b825191506020830151613a5281613648565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561174d5761174d613747565b600081600f0b60016001607f1b03198103613aa757613aa7613747565b60000392915050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613adc57600080fd5b8451935060208501519250604085015191506060850151613afc81613648565b939692955090935050565b600082613b1657613b1661371d565b600160ff1b821460001984141615613b3057613b30613747565b50059056fea2646970667358221220a2a56960befa109fcf1f32fa73fe2d5ad3d514f17d9f9a3d808afe99b042183164736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
