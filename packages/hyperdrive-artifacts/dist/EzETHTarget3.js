export const EzETHTarget3 = {
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
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
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
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200448b3803806200448b83398101604081905262000035916200028b565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151840151905280516040908101516101609081529151606090810151610180908152828a0151881661022052908901516102405291880151600980549188166001600160a01b031992831617905591880151600a805491881691841691909117905593870151600b805491871691831691909117905590860151600c805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000176573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019c9190620003c8565b6001600160a01b03166102805250620003ef915050565b60405161020081016001600160401b0381118282101715620001e557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200020157600080fd5b50565b80516200021181620001eb565b919050565b6000608082840312156200022957600080fd5b604051608081016001600160401b03811182821017156200025a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620002a157600080fd5b61026080821215620002b257600080fd5b620002bc620001b3565b9150620002c98562000204565b8252620002d96020860162000204565b6020830152620002ec6040860162000204565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200035781870162000204565b908301526101806200036b86820162000204565b908301526101a06200037f86820162000204565b908301526101c06200039386820162000204565b908301526101e0620003a88787830162000216565b8184015250819350620003bd81860162000204565b925050509250929050565b600060208284031215620003db57600080fd5b8151620003e881620001eb565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613ee3620005a860003960008181611f3a01526131a3015260008181611e07015261307001526000505060005050600081816104cd015281816104fc01526105290152600081816103340152818161077301528181610c4d015261196501526000818161091d01528181610a0801528181610a9b01528181610b630152818161193f015281816125ea0152818161264d015281816129d301528181612a0f0152612c070152600081816103950152818161098d01528181610f490152611919015260006121ef0152600061234a01526000818161110d015261231e015260005050600081816103d7015281816109e001528181610f6a015261198b0152600081816103b6015281816104a2015281816109ba015281816110450152612e830152600081816102840152818161046101528181610e0801528181610e8301528181610ef901528181610fc50152610ffd015260008181611e9301528181612d97015281816130fc015261321b015260005050613ee36000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a36600461370f565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a436600461375f565b61011a565b005b6100be6100b9366004613781565b610128565b604051908152602001610080565b6100be6100da36600461370f565b610143565b3480156100eb57600080fd5b5061006f6100fa36600461370f565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261022d565b5050565b600061013786868686866102ee565b90505b95945050505050565b60006101508484846108c7565b90505b9392505050565b60008061010d858585610c37565b600080610173610d85565b61017c83610daf565b6000610186610de8565b905061019d610193610e00565b8260046001610e2c565b506101ab3387838888611425565b90935091506101bd60208501856137e5565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101fb60408b0160208c0161381c565b61020860408c018c613839565b60405161021a969594939291906138a9565b60405180910390a3506101126001600055565b610235610d85565b600061023f610de8565b6000848152600860205260409020600101549091506001600160801b0316156102735761026c8183611568565b50506102e4565b600061027d610e00565b90506102a97f0000000000000000000000000000000000000000000000000000000000000000856138f9565b1515806102b557508381105b156102d35760405163ecd29e8160e01b815260040160405180910390fd5b6102e08483856000610e2c565b5050505b6101246001600055565b60006102f8610d85565b600654610100900460ff1615610321576040516321081abf60e01b815260040160405180910390fd5b610329611763565b61033282610daf565b7f00000000000000000000000000000000000000000000000000000000000000008610156103735760405163211ddda360e11b815260040160405180910390fd5b60006103fb610380611784565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117a5565b90508481108061040a57508381115b1561042857604051633b61151160e11b815260040160405180910390fd5b60008061043589866117cb565b915091506000610443610e00565b9050610453818360046001610e2c565b5060006104c66008826104867f000000000000000000000000000000000000000000000000000000000000000086613923565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006118a4565b90506104f27f000000000000000000000000000000000000000000000000000000000000000082613936565b85118061055157507f000000000000000000000000000000000000000000000000000000000000000081118015610551575061054e7f000000000000000000000000000000000000000000000000000000000000000082613923565b85105b1561056f57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916105bb916001600160801b0390911690613923565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154919250906105f6908390613936565b90506000806000610606876118d0565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106409084906004016139c7565b602060405180830381865af415801561065d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068191906139d6565b915061069461068f89611a0a565b611a38565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916106f5918591016139c7565b602060405180830381865af4158015610712573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073691906139d6565b9250818310156107595760405163184d952160e11b815260040160405180910390fd5b61076f84836107688187613923565b9190611a5e565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107b25760405163211ddda360e11b815260040160405180910390fd5b508d8d6107bf828c611a7c565b10156107de5760405163c972651760e01b815260040160405180910390fd5b6107f660006107f060208e018e6137e5565b8c611a91565b600061080188611b3a565b90508061082157604051638bdf918d60e01b815260040160405180910390fd5b60008515610838576108338487611a7c565b61083b565b60005b90508c61084b60208201826137e5565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf8e868d610888604087016020880161381c565b876108966040890189613839565b6040516108a997969594939291906139ef565b60405180910390a250505050505050505050505061013a6001600055565b60006108d1610d85565b6108d9611763565b6108e282610daf565b60065460ff161561090657604051637983c05160e01b815260040160405180910390fd5b60008061091386856117cb565b90925090506109437f00000000000000000000000000000000000000000000000000000000000000006002613a30565b82101561096357604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a939190613a47565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ac48484611b47565b1015610ae35760405163216f4ab160e21b815260040160405180910390fd5b610aec83611b6d565b600280546001600160801b0319166001600160801b0392909216919091179055610b1582611b97565b600480546001600160801b0319166001600160801b0392909216919091179055610b3e81611b6d565b600280546001600160801b03928316600160801b029216919091179055610b876000807f0000000000000000000000000000000000000000000000000000000000000000611a91565b610b9f6000610b9960208a018a6137e5565b88611a91565b610bb4610baa610e00565b8560046001610e2c565b50610bc260208801886137e5565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af3878b87610bff60408d0160208e0161381c565b8d610c0d60408f018f613839565b604051610c2097969594939291906139ef565b60405180910390a250505050506101536001600055565b600080610c42610d85565b610c4b83610daf565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8c5760405163211ddda360e11b815260040160405180910390fd5b6000610c96610de8565b9050610ca3610193610e00565b50610cb060003388611bd3565b610cc5600360f81b610b9960208701876137e5565b6000610ce0610cd760208701876137e5565b88848989611425565b9094509050610cef8188613923565b92506000610cfc83611ca4565b509050610d0c60208701876137e5565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a8887610d4a60408d0160208e0161381c565b8a888e8060400190610d5c9190613839565b604051610d70989796959493929190613a75565b60405180910390a35050506101126001600055565b600260005403610da857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dbe60208301836137e5565b6001600160a01b031603610de55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dfb670de0b6b3a7640000611e02565b905090565b6000610dfb427f0000000000000000000000000000000000000000000000000000000000000000611fae565b600084815260086020526040812060018101546001600160801b0316151580610e5457504286115b15610e6d57600101546001600160801b0316905061141d565b6000806000610e7a610e00565b90506000610ea87f00000000000000000000000000000000000000000000000000000000000000008b613936565b90505b81811015610f1e576000818152600860205260409020600101546001600160801b03168015610ef6576000828152600860205260409020549094506001600160801b03169250610f1e565b507f000000000000000000000000000000000000000000000000000000000000000001610eab565b83600003610f9157889350610f8e610f34611784565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fc4565b92505b50610f9b83611b6d565b6001850180546001600160801b0319166001600160801b0392909216919091179055610ff1610fea7f00000000000000000000000000000000000000000000000000000000000000008b613923565b8a84611fdb565b61102f896110296110227f000000000000000000000000000000000000000000000000000000000000000083613936565b4290612119565b84611fdb565b6110388861212e565b506000905060088161106a7f00000000000000000000000000000000000000000000000000000000000000008d613923565b815260208101919091526040016000908120600101546001600160801b0316915061109660028c6122d2565b6000818152601060205260408120549192508c8c83156111dc57600192506000806110c586898d866000612307565b9150915080600d60008282546110db9190613936565b909155506110f79050866000846110f181611a0a565b886123d6565b6111018183613936565b915061113186838a8e877f0000000000000000000000000000000000000000000000000000000000000000612550565b91506111456111408385612594565b6125a9565b600680546002906111669084906201000090046001600160701b0316613abd565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061119382611b6d565b600680546010906111b5908490600160801b90046001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e96001846122d2565b60008181526010602052604090205490915080156112f85760019450600080611216838b8f886001612307565b9150915080600d600082825461122c9190613936565b9091555061124890508360008461124281611a0a565b8a6125d3565b6112528183613923565b91506112616111408387612594565b600680546002906112829084906201000090046001600160701b0316613abd565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112af82611b6d565b600680546010906112d1908490600160801b90046001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113325761132461130a87611a0a565b61131383611a0a565b61131d9190613afd565b60006127c4565b8e61132f8482611568565b50505b600061133d84611ca4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b03161561140d578e6114095a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612877565b5050505b50999b5050505050505050505050505b949350505050565b60008061143185611b3a565b505060075485906001600160801b03168082111561145657806001600160801b031691505b8160000361146b57600080925092505061155e565b61147a600360f81b8984611bd3565b6007546000906114a09084906001600160801b03600160801b9091048116908516611a5e565b90506114ab83611b6d565b6114b59083613b1d565b600780546001600160801b0319166001600160801b03929092169190911790556114de81611b6d565b60078054601090611500908490600160801b90046001600160801b0316613b1d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061152f818887612902565b935061153b868461299c565b84101561155b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916115b3916001600160801b031690613923565b9050806000036115c757600191505061175d565b60006115d2856129b1565b9050806000036115e75760019250505061175d565b6000806115f5838589612a4d565b915091508061160b57600094505050505061175d565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611647929190613b3d565b6040805180830381865af4158015611663573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116879190613bb3565b915091506116a561169782611a0a565b6116a090613bd7565b612bc1565b9250826116bb576000965050505050505061175d565b6116c482611b6d565b600780546000906116df9084906001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061170c81611b6d565b6007805460109061172e908490600160801b90046001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b341561178257604051631574f9f360e01b815260040160405180910390fd5b565b600254600454600091610dfb916001600160801b0390911690600f0b611b47565b6000806117b487878786611fc4565b90506117c081856118a4565b979650505050505050565b600080806117df604085016020860161381c565b15611804576117fa856117f56040870187613839565b612d59565b9093509050611820565b503461181c856118176040870187613839565b612d75565b8492505b611828610de8565b9150801561189b57604051600090339083908381818185875af1925050503d8060008114611872576040519150601f19603f3d011682016040523d82523d6000602084013e611877565b606091505b5050905080611899576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006101536118b884846301e13380612e12565b6118ca85670de0b6b3a7640000613923565b90611a7c565b6118d861364a565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916119d09116612e38565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611a0292900416612e38565b905292915050565b60006001600160ff1b03821115611a345760405163396ea70160e11b815260040160405180910390fd5b5090565b611a4181612bc1565b610de557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a7557600080fd5b5091020490565b600061015383670de0b6b3a764000084611a5e565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611ac3908490613936565b909155505060008381526010602052604081208054839290611ae6908490613936565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061175d826004611568565b600080611b548484612eae565b909250905080611b6657611b66612eea565b5092915050565b60006001600160801b03821115611a3457604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611bb5575060016001607f1b0382135b15611a345760405163a5353be560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115611c1657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290611c59908490613923565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b2d565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611ccd876118d0565b6040518263ffffffff1660e01b8152600401611ce991906139c7565b6040805180830381865af4158015611d05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d299190613bf3565b9150915080611d3f575060009485945092505050565b6000808611611d4f576000611d59565b611d598387612594565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691611dc49190613936565b611dce9190613923565b905080600003611de75750600096879650945050505050565b6000611df38383611a7c565b98600198509650505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611e63573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611e8b9190810190613cee565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611eef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1391906139d6565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa158015611f8a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141d91906139d6565b6000611fba82846138f9565b6101539084613923565b600061013a82611fd5858888611a5e565b90612f03565b600083815260086020526040902054600160801b90046001600160801b03168083036120075750505050565b6000848152600860205260408120546001600160801b0316908190036120615761203083611b6d565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556120df565b6120b26120ad670de0b6b3a764000061207a8886613923565b6120849190613a30565b85670de0b6b3a7640000612098878a613923565b6120a29190613a30565b859291906001612f78565b611b6d565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6120e884611b6d565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116121285782610153565b50919050565b6006546000908190612151908490600160801b90046001600160801b0316612594565b6006546201000090046001600160701b031692509050818111156122cd57600061217b8383613923565b905061218a6120ad8286613016565b600680546010906121ac908490600160801b90046001600160801b0316613b1d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006121e58583611a7c90919063ffffffff16565b90506000612213827f0000000000000000000000000000000000000000000000000000000000000000612594565b905080600d60008282546122279190613936565b9091555061223790508183613923565b915061224282611b6d565b6002805460009061225d9084906001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061228a8261302b565b6004805460009061229f908490600f0b613dce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156122fc5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806123148785611a7c565b91506000612342837f0000000000000000000000000000000000000000000000000000000000000000612594565b905061236e817f0000000000000000000000000000000000000000000000000000000000000000612594565b91508315612391576123808282613923565b61238a9084613923565b92506123a8565b61239b8282613923565b6123a59084613936565b92505b868610156123cb576123bb838789611a5e565b92506123c8828789611a5e565b91505b509550959350505050565b600454600160801b90046001600160801b031661241f6120ad82612402670de0b6b3a764000086613a30565b600554600160801b90046001600160801b031691908a6000612f78565b600580546001600160801b03928316600160801b02921691909117905561244586611b6d565b61244f9082613b1d565b600480546001600160801b03928316600160801b02921691909117905561247584611b6d565b600280546000906124909084906001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506124bd83611b97565b600480546000906124d2908490600f0b613dce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061250285611b6d565b60028054601090612524908490600160801b90046001600160801b0316613b1d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612562846118ca8a888a611a5e565b905061256f888486611a5e565b6125799082613936565b9050868111156125895786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a5e565b60006001600160701b03821115611a345760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061261557507f00000000000000000000000000000000000000000000000000000000000000006126138583613923565b105b1561262257612622612eea565b6004549084900390600f0b6126378482613afd565b90508361264386611a0a565b13801561267857507f00000000000000000000000000000000000000000000000000000000000000006126768383611b47565b105b1561268557612685612eea565b600354600160801b90046001600160801b03166126c76120ad826126b1670de0b6b3a764000088613a30565b6005546001600160801b031691908c6000612f78565b600580546001600160801b0319166001600160801b03929092169190911790556126f18882613923565b90506126fc81611b6d565b600380546001600160801b03928316600160801b02921691909117905561272283611b6d565b600280546001600160801b0319166001600160801b039290921691909117905561274b82611b97565b600480546001600160801b0319166001600160801b039290921691909117905561277487611b6d565b60028054601090612796908490600160801b90046001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006127ed6127d38483613055565b6127de846000613055565b6127e89190613afd565b611b97565b9050600081600f0b131561284257600380548291906000906128199084906001600160801b0316613add565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156128725761285781613dfb565b600380546000906128199084906001600160801b0316613b1d565b505050565b6000606060008060008661ffff1667ffffffffffffffff81111561289d5761289d613c23565b6040519080825280601f01601f1916602001820160405280156128c7576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156128e8578692505b828152826000602083013e90999098509650505050505050565b60008061290f8585612594565b905061291a8161306b565b94508460000361292e576000915050610153565b61293e604084016020850161381c565b1561296d576129668561295460208601866137e5565b6129616040870187613839565b6131da565b9150612994565b6129908561297e60208601866137e5565b61298b6040870187613839565b6131f5565b8491505b509392505050565b60006101538383670de0b6b3a7640000612e12565b60035460009081906129cc906001600160801b031684613016565b90506129f87f000000000000000000000000000000000000000000000000000000000000000082613936565b6002546001600160801b03161115612128576002547f000000000000000000000000000000000000000000000000000000000000000090612a439083906001600160801b0316613923565b6101539190613923565b612a556136ab565b600080612a61846118d0565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a9c91906139c7565b6040805180830381865af4158015612ab8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612adc9190613bf3565b9350905082612af15750600091506101129050565b6000612b18612b1384610160015185610140015161259490919063ffffffff16565b611a0a565b612b38612b1385610120015186610100015161299c90919063ffffffff16565b612b429190613afd565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c9e9190613e21565b935093509350935080612cba5750600098975050505050505050565b868414612ceb57612cca84611b6d565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612d1c57612cfb83611b97565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d4a57612d2c82611b6d565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612de8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e0c9190613e62565b50505050565b6000826000190484118302158202612e2957600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612e4c610e00565b612e569190613a30565b9050808311612e66576000612e70565b612e708184613923565b9150610153612ea7670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a30565b8390611a7c565b600080600083612ebd86611a0a565b612ec79190613afd565b90506000811215612edf57600080925092505061189d565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612f1c5750670de0b6b3a764000061175d565b82600003612f2c5750600061175d565b6000612f3783611a0a565b90506000612f4c612f4786611a0a565b61328f565b9050818102612f63670de0b6b3a764000082613e7f565b9050612f6e816134b5565b9695505050505050565b600082600003612f8957508461013a565b8115612fdc57612fba612f9c8487613936565b612fa68587612594565b612fb0888a612594565b6118ca9190613936565b90506000612fc88588612119565b905080821015612fd6578091505b5061013a565b828503612feb5750600061013a565b610137612ff88487613923565b613002858761299c565b61300c888a612594565b6118ca9190613923565b600061015383670de0b6b3a764000084612e12565b600060016001607f1b03821115611a345760405163a5353be560e01b815260040160405180910390fd5b60008183136130645781610153565b5090919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156130cc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526130f49190810190613cee565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613158573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061317c91906139d6565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a90606401611f6d565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015613264573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132889190613e62565b5050505050565b60008082136132b15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133349084901c611a0a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136134d057506000919050565b680755bf798b4a1bf1e582126134f9576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f6e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a0a565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806136bf61364a565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561212857600080fd5b60008060006060848603121561372457600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561374957600080fd5b613755868287016136fd565b9150509250925092565b6000806040838503121561377257600080fd5b50508035926020909101359150565b600080600080600060a0868803121561379957600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156137cc57600080fd5b6137d8888289016136fd565b9150509295509295909350565b6000602082840312156137f757600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610de557600080fd5b60006020828403121561382e57600080fd5b81356101538161380e565b6000808335601e1984360301811261385057600080fd5b83018035915067ffffffffffffffff82111561386b57600080fd5b60200191503681900382131561189d57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a0608082015260006138d760a083018486613880565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082613908576139086138e3565b500690565b634e487b7160e01b600052601160045260246000fd5b8181038181111561175d5761175d61390d565b8082018082111561175d5761175d61390d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161175d8284613949565b6000602082840312156139e857600080fd5b5051919050565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613a2360c083018486613880565b9998505050505050505050565b808202811582820484141761175d5761175d61390d565b600080600060608486031215613a5c57600080fd5b8351925060208401519150604084015190509250925092565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613aaf60e083018486613880565b9a9950505050505050505050565b6001600160701b03818116838216019080821115611b6657611b6661390d565b6001600160801b03818116838216019080821115611b6657611b6661390d565b8181036000831280158383131683831282161715611b6657611b6661390d565b6001600160801b03828116828216039080821115611b6657611b6661390d565b60006102a082019050613b51828551613949565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613bc657600080fd5b505080516020909101519092909150565b6000600160ff1b8201613bec57613bec61390d565b5060000390565b60008060408385031215613c0657600080fd5b825191506020830151613c188161380e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715613c6257613c62613c23565b604052919050565b600067ffffffffffffffff821115613c8457613c84613c23565b5060051b60200190565b600082601f830112613c9f57600080fd5b81516020613cb4613caf83613c6a565b613c39565b82815260059290921b84018101918181019086841115613cd357600080fd5b8286015b848110156125895780518352918301918301613cd7565b600080600060608486031215613d0357600080fd5b835167ffffffffffffffff80821115613d1b57600080fd5b818601915086601f830112613d2f57600080fd5b81516020613d3f613caf83613c6a565b82815260059290921b8401810191818101908a841115613d5e57600080fd5b8286015b84811015613d9657805186811115613d7a5760008081fd5b613d888d86838b0101613c8e565b845250918301918301613d62565b5091890151919750909350505080821115613db057600080fd5b50613dbd86828701613c8e565b925050604084015190509250925092565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561175d5761175d61390d565b600081600f0b60016001607f1b03198103613e1857613e1861390d565b60000392915050565b60008060008060808587031215613e3757600080fd5b8451935060208501519250604085015191506060850151613e578161380e565b939692955090935050565b600060208284031215613e7457600080fd5b81516101538161380e565b600082613e8e57613e8e6138e3565b600160ff1b821460001984141615613ea857613ea861390d565b50059056fea2646970667358221220f1c420db3508c96f46d4c6abe0a34469d8128fb9ff42e12a27071854f462c5bd64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
