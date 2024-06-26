export const MockHyperdriveTarget3 = {
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200475738038062004757833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051614252620005056000396000505060005050600081816104cd015281816104fc01526105290152600081816103340152818161077301528181610c4d01526119b001526000818161091d01528181610a0801528181610a9b01528181610b630152818161198a01528181612584015281816125e70152818161296d015281816129a90152612ba10152600081816103950152818161098d01528181610f490152818161196401528181612f110152612f9c01526000612189015260006122e401526000818161110d01526122b8015260005050600081816103d7015281816109e001528181610f6a01526119d60152600081816103b6015281816104a2015281816109ba01528181611045015261319a0152600081816102840152818161046101528181610e0801528181610e8301528181610ef901528181610fc50152610ffd0152600050506000818161176501528181611e6801528181611eb101528181612d0f01528181612d5801528181612dea01528181612e6b0152818161300a0152818161308b0152818161339d015281816133e6015281816134c10152818161356d01528181613659015261370501526142526000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613c13565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613c63565b61011a565b005b6100be6100b9366004613c85565b610128565b604051908152602001610080565b6100be6100da366004613c13565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613c13565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261022d565b5050565b600061013786868686866102ee565b90505b95945050505050565b60006101508484846108c7565b90505b9392505050565b60008061010d858585610c37565b600080610173610d85565b61017c83610daf565b6000610186610de8565b905061019d610193610e00565b8260046001610e2c565b506101ab3387838888611425565b90935091506101bd6020850185613ce9565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101fb60408b0160208c01613d20565b61020860408c018c613d3d565b60405161021a96959493929190613dad565b60405180910390a3506101126001600055565b610235610d85565b600061023f610de8565b6000848152600860205260409020600101549091506001600160801b0316156102735761026c8183611568565b50506102e4565b600061027d610e00565b90506102a97f000000000000000000000000000000000000000000000000000000000000000085613dfd565b1515806102b557508381105b156102d35760405163ecd29e8160e01b815260040160405180910390fd5b6102e08483856000610e2c565b5050505b6101246001600055565b60006102f8610d85565b600654610100900460ff1615610321576040516321081abf60e01b815260040160405180910390fd5b610329611763565b61033282610daf565b7f00000000000000000000000000000000000000000000000000000000000000008610156103735760405163211ddda360e11b815260040160405180910390fd5b60006103fb6103806117cf565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117f0565b90508481108061040a57508381115b1561042857604051633b61151160e11b815260040160405180910390fd5b6000806104358986611816565b915091506000610443610e00565b9050610453818360046001610e2c565b5060006104c66008826104867f000000000000000000000000000000000000000000000000000000000000000086613e27565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006118ef565b90506104f27f000000000000000000000000000000000000000000000000000000000000000082613e3a565b85118061055157507f000000000000000000000000000000000000000000000000000000000000000081118015610551575061054e7f000000000000000000000000000000000000000000000000000000000000000082613e27565b85105b1561056f57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916105bb916001600160801b0390911690613e27565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154919250906105f6908390613e3a565b905060008060006106068761191b565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610640908490600401613ecb565b602060405180830381865af415801561065d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106819190613eda565b915061069461068f89611a55565b611a83565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916106f591859101613ecb565b602060405180830381865af4158015610712573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107369190613eda565b9250818310156107595760405163184d952160e11b815260040160405180910390fd5b61076f84836107688187613e27565b9190611aa9565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107b25760405163211ddda360e11b815260040160405180910390fd5b508d8d6107bf828c611ac7565b10156107de5760405163c972651760e01b815260040160405180910390fd5b6107f660006107f060208e018e613ce9565b8c611adc565b600061080188611b85565b90508061082157604051638bdf918d60e01b815260040160405180910390fd5b60008515610838576108338487611ac7565b61083b565b60005b90508c61084b6020820182613ce9565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf8e868d6108886040870160208801613d20565b876108966040890189613d3d565b6040516108a99796959493929190613ef3565b60405180910390a250505050505050505050505061013a6001600055565b60006108d1610d85565b6108d9611763565b6108e282610daf565b60065460ff161561090657604051637983c05160e01b815260040160405180910390fd5b6000806109138685611816565b90925090506109437f00000000000000000000000000000000000000000000000000000000000000006002613f34565b82101561096357604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a939190613f4b565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ac48484611b92565b1015610ae35760405163216f4ab160e21b815260040160405180910390fd5b610aec83611bb8565b600280546001600160801b0319166001600160801b0392909216919091179055610b1582611be2565b600480546001600160801b0319166001600160801b0392909216919091179055610b3e81611bb8565b600280546001600160801b03928316600160801b029216919091179055610b876000807f0000000000000000000000000000000000000000000000000000000000000000611adc565b610b9f6000610b9960208a018a613ce9565b88611adc565b610bb4610baa610e00565b8560046001610e2c565b50610bc26020880188613ce9565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af3878b87610bff60408d0160208e01613d20565b8d610c0d60408f018f613d3d565b604051610c209796959493929190613ef3565b60405180910390a250505050506101536001600055565b600080610c42610d85565b610c4b83610daf565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8c5760405163211ddda360e11b815260040160405180910390fd5b6000610c96610de8565b9050610ca3610193610e00565b50610cb060003388611c1e565b610cc5600360f81b610b996020870187613ce9565b6000610ce0610cd76020870187613ce9565b88848989611425565b9094509050610cef8188613e27565b92506000610cfc83611cef565b509050610d0c6020870187613ce9565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a8887610d4a60408d0160208e01613d20565b8a888e8060400190610d5c9190613d3d565b604051610d70989796959493929190613f79565b60405180910390a35050506101126001600055565b600260005403610da857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dbe6020830183613ce9565b6001600160a01b031603610de55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dfb670de0b6b3a7640000611e4d565b905090565b6000610dfb427f0000000000000000000000000000000000000000000000000000000000000000611f48565b600084815260086020526040812060018101546001600160801b0316151580610e5457504286115b15610e6d57600101546001600160801b0316905061141d565b6000806000610e7a610e00565b90506000610ea87f00000000000000000000000000000000000000000000000000000000000000008b613e3a565b90505b81811015610f1e576000818152600860205260409020600101546001600160801b03168015610ef6576000828152600860205260409020549094506001600160801b03169250610f1e565b507f000000000000000000000000000000000000000000000000000000000000000001610eab565b83600003610f9157889350610f8e610f346117cf565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611f5e565b92505b50610f9b83611bb8565b6001850180546001600160801b0319166001600160801b0392909216919091179055610ff1610fea7f00000000000000000000000000000000000000000000000000000000000000008b613e27565b8a84611f75565b61102f896110296110227f000000000000000000000000000000000000000000000000000000000000000083613e3a565b42906120b3565b84611f75565b611038886120c8565b506000905060088161106a7f00000000000000000000000000000000000000000000000000000000000000008d613e27565b815260208101919091526040016000908120600101546001600160801b0316915061109660028c61226c565b6000818152601060205260408120549192508c8c83156111dc57600192506000806110c586898d8660006122a1565b9150915080600d60008282546110db9190613e3a565b909155506110f79050866000846110f181611a55565b88612370565b6111018183613e3a565b915061113186838a8e877f00000000000000000000000000000000000000000000000000000000000000006124ea565b9150611145611140838561252e565b612543565b600680546002906111669084906201000090046001600160701b0316613fc1565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061119382611bb8565b600680546010906111b5908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e960018461226c565b60008181526010602052604090205490915080156112f85760019450600080611216838b8f8860016122a1565b9150915080600d600082825461122c9190613e3a565b9091555061124890508360008461124281611a55565b8a61256d565b6112528183613e27565b9150611261611140838761252e565b600680546002906112829084906201000090046001600160701b0316613fc1565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112af82611bb8565b600680546010906112d1908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113325761132461130a87611a55565b61131383611a55565b61131d9190614001565b600061275e565b8e61132f8482611568565b50505b600061133d84611cef565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b03161561140d578e6114095a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612811565b5050505b50999b5050505050505050505050505b949350505050565b60008061143185611b85565b505060075485906001600160801b03168082111561145657806001600160801b031691505b8160000361146b57600080925092505061155e565b61147a600360f81b8984611c1e565b6007546000906114a09084906001600160801b03600160801b9091048116908516611aa9565b90506114ab83611bb8565b6114b59083614021565b600780546001600160801b0319166001600160801b03929092169190911790556114de81611bb8565b60078054601090611500908490600160801b90046001600160801b0316614021565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061152f81888761289c565b935061153b8684612936565b84101561155b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916115b3916001600160801b031690613e27565b9050806000036115c757600191505061175d565b60006115d28561294b565b9050806000036115e75760019250505061175d565b6000806115f58385896129e7565b915091508061160b57600094505050505061175d565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611647929190614041565b6040805180830381865af4158015611663573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168791906140b7565b915091506116a561169782611a55565b6116a0906140db565b612b5b565b9250826116bb576000965050505050505061175d565b6116c482611bb8565b600780546000906116df9084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061170c81611bb8565b6007805460109061172e908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906117af57503415155b156117cd57604051631574f9f360e01b815260040160405180910390fd5b565b600254600454600091610dfb916001600160801b0390911690600f0b611b92565b6000806117ff87878786611f5e565b905061180b81856118ef565b979650505050505050565b6000808061182a6040850160208601613d20565b1561184f57611845856118406040870187613d3d565b612cf3565b909350905061186b565b5034611867856118626040870187613d3d565b612f7f565b8492505b611873610de8565b915080156118e657604051600090339083908381818185875af1925050503d80600081146118bd576040519150601f19603f3d011682016040523d82523d6000602084013e6118c2565b606091505b50509050806118e4576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361190384846301e13380613129565b61191585670de0b6b3a7640000613e27565b90611ac7565b611923613b4e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611a1b911661314f565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611a4d9290041661314f565b905292915050565b60006001600160ff1b03821115611a7f5760405163396ea70160e11b815260040160405180910390fd5b5090565b611a8c81612b5b565b610de557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611ac057600080fd5b5091020490565b600061015383670de0b6b3a764000084611aa9565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611b0e908490613e3a565b909155505060008381526010602052604081208054839290611b31908490613e3a565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061175d826004611568565b600080611b9f84846131c5565b909250905080611bb157611bb1613201565b5092915050565b60006001600160801b03821115611a7f57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611c00575060016001607f1b0382135b15611a7f5760405163a5353be560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115611c6157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290611ca4908490613e27565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b78565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611d188761191b565b6040518263ffffffff1660e01b8152600401611d349190613ecb565b6040805180830381865af4158015611d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7491906140f7565b9150915080611d8a575060009485945092505050565b6000808611611d9a576000611da4565b611da4838761252e565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691611e0f9190613e3a565b611e199190613e27565b905080600003611e325750600096879650945050505050565b6000611e3e8383611ac7565b98600198509650505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611e9c575047611f27565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611f00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f249190613eda565b90505b601454600003611f38576000610153565b6014546101539084908390611aa9565b6000611f548284613dfd565b6101539084613e27565b600061013a82611f6f858888611aa9565b9061321a565b600083815260086020526040902054600160801b90046001600160801b0316808303611fa15750505050565b6000848152600860205260408120546001600160801b031690819003611ffb57611fca83611bb8565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055612079565b61204c612047670de0b6b3a76400006120148886613e27565b61201e9190613f34565b85670de0b6b3a7640000612032878a613e27565b61203c9190613f34565b85929190600161328f565b611bb8565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61208284611bb8565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120c25782610153565b50919050565b60065460009081906120eb908490600160801b90046001600160801b031661252e565b6006546201000090046001600160701b031692509050818111156122675760006121158383613e27565b9050612124612047828661332d565b60068054601090612146908490600160801b90046001600160801b0316614021565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061217f8583611ac790919063ffffffff16565b905060006121ad827f000000000000000000000000000000000000000000000000000000000000000061252e565b905080600d60008282546121c19190613e3a565b909155506121d190508183613e27565b91506121dc82611bb8565b600280546000906121f79084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061222482613342565b60048054600090612239908490600f0b614127565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156122965760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122ae8785611ac7565b915060006122dc837f000000000000000000000000000000000000000000000000000000000000000061252e565b9050612308817f000000000000000000000000000000000000000000000000000000000000000061252e565b9150831561232b5761231a8282613e27565b6123249084613e27565b9250612342565b6123358282613e27565b61233f9084613e3a565b92505b8686101561236557612355838789611aa9565b9250612362828789611aa9565b91505b509550959350505050565b600454600160801b90046001600160801b03166123b96120478261239c670de0b6b3a764000086613f34565b600554600160801b90046001600160801b031691908a600061328f565b600580546001600160801b03928316600160801b0292169190911790556123df86611bb8565b6123e99082614021565b600480546001600160801b03928316600160801b02921691909117905561240f84611bb8565b6002805460009061242a9084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061245783611be2565b6004805460009061246c908490600f0b614127565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061249c85611bb8565b600280546010906124be908490600160801b90046001600160801b0316614021565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806124fc846119158a888a611aa9565b9050612509888486611aa9565b6125139082613e3a565b9050868111156125235786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611aa9565b60006001600160701b03821115611a7f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806125af57507f00000000000000000000000000000000000000000000000000000000000000006125ad8583613e27565b105b156125bc576125bc613201565b6004549084900390600f0b6125d18482614001565b9050836125dd86611a55565b13801561261257507f00000000000000000000000000000000000000000000000000000000000000006126108383611b92565b105b1561261f5761261f613201565b600354600160801b90046001600160801b03166126616120478261264b670de0b6b3a764000088613f34565b6005546001600160801b031691908c600061328f565b600580546001600160801b0319166001600160801b039290921691909117905561268b8882613e27565b905061269681611bb8565b600380546001600160801b03928316600160801b0292169190911790556126bc83611bb8565b600280546001600160801b0319166001600160801b03929092169190911790556126e582611be2565b600480546001600160801b0319166001600160801b039290921691909117905561270e87611bb8565b60028054601090612730908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061278761276d848361336c565b61277884600061336c565b6127829190614001565b611be2565b9050600081600f0b13156127dc57600380548291906000906127b39084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561280c576127f181614154565b600380546000906127b39084906001600160801b0316614021565b505050565b6000606060008060008661ffff1667ffffffffffffffff8111156128375761283761417a565b6040519080825280601f01601f191660200182016040528015612861576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612882578692505b828152826000602083013e90999098509650505050505050565b6000806128a9858561252e565b90506128b481613382565b9450846000036128c8576000915050610153565b6128d86040840160208501613d20565b1561290757612900856128ee6020860186613ce9565b6128fb6040870187613d3d565b61346b565b915061292e565b61292a856129186020860186613ce9565b6129256040870187613d3d565b613605565b8491505b509392505050565b60006101538383670de0b6b3a7640000613129565b6003546000908190612966906001600160801b03168461332d565b90506129927f000000000000000000000000000000000000000000000000000000000000000082613e3a565b6002546001600160801b031611156120c2576002547f0000000000000000000000000000000000000000000000000000000000000000906129dd9083906001600160801b0316613e27565b6101539190613e27565b6129ef613baf565b6000806129fb8461191b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a369190613ecb565b6040805180830381865af4158015612a52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7691906140f7565b9350905082612a8b5750600091506101129050565b6000612ab2612aad84610160015185610140015161252e90919063ffffffff16565b611a55565b612ad2612aad85610120015186610100015161293690919063ffffffff16565b612adc9190614001565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c389190614190565b935093509350935080612c545750600098975050505050505050565b868414612c8557612c6484611bb8565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612cb657612c9583611be2565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ce457612cc682611bb8565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612d43575047612dce565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612da7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dcb9190613eda565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e495787341015612e38576040516312171d8360e31b815260040160405180910390fd5b612e428834613e27565b9050612ee3565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612ebc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ee091906141d1565b91505b81612f01576040516312171d8360e31b815260040160405180910390fd5b601454600003612f4657612f35887f0000000000000000000000000000000000000000000000000000000000000000611ac7565b601481905594509250610112915050565b601454600090612f58908a9086611aa9565b90508060146000828254612f6c9190613e3a565b9091555090955090935061011292505050565b6000612f8a84611e4d565b9050601454600003612fc857612fc0817f0000000000000000000000000000000000000000000000000000000000000000611ac7565b601455612fee565b6000612fd382613382565b90508060146000828254612fe79190613e3a565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016130695782341015613058576040516312171d8360e31b815260040160405180910390fd5b6130628334613e27565b9050613103565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156130dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061310091906141d1565b91505b81613121576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600082600019048411830215820261314057600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000613163610e00565b61316d9190613f34565b905080831161317d576000613187565b6131878184613e27565b91506101536131be670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f34565b8390611ac7565b6000806000836131d486611a55565b6131de9190614001565b905060008112156131f65760008092509250506118e8565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000816000036132335750670de0b6b3a764000061175d565b826000036132435750600061175d565b600061324e83611a55565b9050600061326361325e86611a55565b613793565b905081810261327a670de0b6b3a7640000826141ee565b9050613285816139b9565b9695505050505050565b6000826000036132a057508461013a565b81156132f3576132d16132b38487613e3a565b6132bd858761252e565b6132c7888a61252e565b6119159190613e3a565b905060006132df85886120b3565b9050808210156132ed578091505b5061013a565b8285036133025750600061013a565b61013761330f8487613e27565b6133198587612936565b613323888a61252e565b6119159190613e27565b600061015383670de0b6b3a764000084613129565b600060016001607f1b03821115611a7f5760405163a5353be560e01b815260040160405180910390fd5b600081831361337b5781610153565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016133d157504761345c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613435573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134599190613eda565b90505b60145461015390849083611aa9565b6000601454851161347c5784613480565b6014545b9450600061348d86611e4d565b905085601460008282546134a19190613e27565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613547576040516001600160a01b038716908390600081818185875af1925050503d8060008114613537576040519150601f19603f3d011682016040523d82523d6000602084013e61353c565b606091505b5050809150506135dd565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156135b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135da91906141d1565b90505b806135fb576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60145484116136145783613618565b6014545b9350600061362585611e4d565b905084601460008282546136399190613e27565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016136df576040516001600160a01b038616908390600081818185875af1925050503d80600081146136cf576040519150601f19603f3d011682016040523d82523d6000602084013e6136d4565b606091505b505080915050613775565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561374e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061377291906141d1565b90505b80613121576040516312171d8360e31b815260040160405180910390fd5b60008082136137b55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906138389084901c611a55565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136139d457506000919050565b680755bf798b4a1bf1e582126139fd576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061328574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a55565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613bc3613b4e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156120c257600080fd5b600080600060608486031215613c2857600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613c4d57600080fd5b613c5986828701613c01565b9150509250925092565b60008060408385031215613c7657600080fd5b50508035926020909101359150565b600080600080600060a08688031215613c9d57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613cd057600080fd5b613cdc88828901613c01565b9150509295509295909350565b600060208284031215613cfb57600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610de557600080fd5b600060208284031215613d3257600080fd5b813561015381613d12565b6000808335601e19843603018112613d5457600080fd5b83018035915067ffffffffffffffff821115613d6f57600080fd5b6020019150368190038213156118e857600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000613ddb60a083018486613d84565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082613e0c57613e0c613de7565b500690565b634e487b7160e01b600052601160045260246000fd5b8181038181111561175d5761175d613e11565b8082018082111561175d5761175d613e11565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161175d8284613e4d565b600060208284031215613eec57600080fd5b5051919050565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613f2760c083018486613d84565b9998505050505050505050565b808202811582820484141761175d5761175d613e11565b600080600060608486031215613f6057600080fd5b8351925060208401519150604084015190509250925092565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613fb360e083018486613d84565b9a9950505050505050505050565b6001600160701b03818116838216019080821115611bb157611bb1613e11565b6001600160801b03818116838216019080821115611bb157611bb1613e11565b8181036000831280158383131683831282161715611bb157611bb1613e11565b6001600160801b03828116828216039080821115611bb157611bb1613e11565b60006102a082019050614055828551613e4d565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156140ca57600080fd5b505080516020909101519092909150565b6000600160ff1b82016140f0576140f0613e11565b5060000390565b6000806040838503121561410a57600080fd5b82519150602083015161411c81613d12565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561175d5761175d613e11565b600081600f0b60016001607f1b0319810361417157614171613e11565b60000392915050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156141a657600080fd5b84519350602085015192506040850151915060608501516141c681613d12565b939692955090935050565b6000602082840312156141e357600080fd5b815161015381613d12565b6000826141fd576141fd613de7565b600160ff1b82146000198414161561421757614217613e11565b50059056fea264697066735822122073073ae48d868f4da5d930108a5f1d7928fd8011f50a00c6f2f5784ec81f143464736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
