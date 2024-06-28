export const RETHTarget3 = {
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
            "type": "receive",
            "stateMutability": "payable"
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200425a3803806200425a833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613da3620004b760003960005050600050506000818161051f0152818161054e015261057b015260008181610386015281816107c501528181610c9f01526119b701526000818161096f01528181610a5a01528181610aed01528181610bb5015281816119910152818161251d0152818161258001528181612906015281816129420152612b3a0152600081816103e7015281816109df01528181610f9b015261196b015260006121220152600061227d01526000818161115f01526122510152600050506000818161042901528181610a3201528181610fbc01526119dd015260008181610408015281816104f401528181610a0c015281816110970152612d4e0152600081816102d6015281816104b301528181610e5a01528181610ed501528181610f4b01528181611017015261104f015260008181605e01528181611e6d01528181612cb501528181612f4f01528181612f9f0152613090015260005050613da36000f3fe60806040526004361061004e5760003560e01c8063074a6de9146100a3578063414f826d146100dd5780634c2ac1d9146100fd57806377d05ff41461011e578063cbc134341461013157600080fd5b3661009e57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461009c576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b3480156100af57600080fd5b506100c36100be366004613735565b610151565b604080519283526020830191909152015b60405180910390f35b3480156100e957600080fd5b5061009c6100f8366004613785565b61016c565b61011061010b3660046137a7565b61017a565b6040519081526020016100d4565b61011061012c366004613735565b610195565b34801561013d57600080fd5b506100c361014c366004613735565b6101ac565b60008061015f8585856101ba565b915091505b935093915050565b610176828261027f565b5050565b60006101898686868686610340565b90505b95945050505050565b60006101a2848484610919565b90505b9392505050565b60008061015f858585610c89565b6000806101c5610dd7565b6101ce83610e01565b60006101d8610e3a565b90506101ef6101e5610e52565b8260046001610e7e565b506101fd3387838888611477565b909350915061020f602085018561380b565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561024d60408b0160208c01613842565b61025a60408c018c61385f565b60405161026c969594939291906138cf565b60405180910390a3506101646001600055565b610287610dd7565b6000610291610e3a565b6000848152600860205260409020600101549091506001600160801b0316156102c5576102be81836115ba565b5050610336565b60006102cf610e52565b90506102fb7f00000000000000000000000000000000000000000000000000000000000000008561391f565b15158061030757508381105b156103255760405163ecd29e8160e01b815260040160405180910390fd5b6103328483856000610e7e565b5050505b6101766001600055565b600061034a610dd7565b600654610100900460ff1615610373576040516321081abf60e01b815260040160405180910390fd5b61037b6117b5565b61038482610e01565b7f00000000000000000000000000000000000000000000000000000000000000008610156103c55760405163211ddda360e11b815260040160405180910390fd5b600061044d6103d26117d6565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117f7565b90508481108061045c57508381115b1561047a57604051633b61151160e11b815260040160405180910390fd5b600080610487898661181d565b915091506000610495610e52565b90506104a5818360046001610e7e565b5060006105186008826104d87f000000000000000000000000000000000000000000000000000000000000000086613949565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006118f6565b90506105447f00000000000000000000000000000000000000000000000000000000000000008261395c565b8511806105a357507f0000000000000000000000000000000000000000000000000000000000000000811180156105a357506105a07f000000000000000000000000000000000000000000000000000000000000000082613949565b85105b156105c157604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909161060d916001600160801b0390911690613949565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb01549192509061064890839061395c565b9050600080600061065887611922565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106929084906004016139ed565b602060405180830381865af41580156106af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d391906139fc565b91506106e66106e189611a5c565b611a8a565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa15691610747918591016139ed565b602060405180830381865af4158015610764573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078891906139fc565b9250818310156107ab5760405163184d952160e11b815260040160405180910390fd5b6107c184836107ba8187613949565b9190611ab0565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156108045760405163211ddda360e11b815260040160405180910390fd5b508d8d610811828c611ace565b10156108305760405163c972651760e01b815260040160405180910390fd5b610848600061084260208e018e61380b565b8c611ae3565b600061085388611b8c565b90508061087357604051638bdf918d60e01b815260040160405180910390fd5b6000851561088a576108858487611ace565b61088d565b60005b90508c61089d602082018261380b565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf8e868d6108da6040870160208801613842565b876108e8604089018961385f565b6040516108fb9796959493929190613a15565b60405180910390a250505050505050505050505061018c6001600055565b6000610923610dd7565b61092b6117b5565b61093482610e01565b60065460ff161561095857604051637983c05160e01b815260040160405180910390fd5b600080610965868561181d565b90925090506109957f00000000000000000000000000000000000000000000000000000000000000006002613a56565b8210156109b557604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610ac1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae59190613a6d565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610b168484611b99565b1015610b355760405163216f4ab160e21b815260040160405180910390fd5b610b3e83611bbf565b600280546001600160801b0319166001600160801b0392909216919091179055610b6782611be9565b600480546001600160801b0319166001600160801b0392909216919091179055610b9081611bbf565b600280546001600160801b03928316600160801b029216919091179055610bd96000807f0000000000000000000000000000000000000000000000000000000000000000611ae3565b610bf16000610beb60208a018a61380b565b88611ae3565b610c06610bfc610e52565b8560046001610e7e565b50610c14602088018861380b565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af3878b87610c5160408d0160208e01613842565b8d610c5f60408f018f61385f565b604051610c729796959493929190613a15565b60405180910390a250505050506101a56001600055565b600080610c94610dd7565b610c9d83610e01565b7f0000000000000000000000000000000000000000000000000000000000000000851015610cde5760405163211ddda360e11b815260040160405180910390fd5b6000610ce8610e3a565b9050610cf56101e5610e52565b50610d0260003388611c25565b610d17600360f81b610beb602087018761380b565b6000610d32610d29602087018761380b565b88848989611477565b9094509050610d418188613949565b92506000610d4e83611cf6565b509050610d5e602087018761380b565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a8887610d9c60408d0160208e01613842565b8a888e8060400190610dae919061385f565b604051610dc2989796959493929190613a9b565b60405180910390a35050506101646001600055565b600260005403610dfa57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610e10602083018361380b565b6001600160a01b031603610e375760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610e4d670de0b6b3a7640000611e54565b905090565b6000610e4d427f0000000000000000000000000000000000000000000000000000000000000000611ee1565b600084815260086020526040812060018101546001600160801b0316151580610ea657504286115b15610ebf57600101546001600160801b0316905061146f565b6000806000610ecc610e52565b90506000610efa7f00000000000000000000000000000000000000000000000000000000000000008b61395c565b90505b81811015610f70576000818152600860205260409020600101546001600160801b03168015610f48576000828152600860205260409020549094506001600160801b03169250610f70565b507f000000000000000000000000000000000000000000000000000000000000000001610efd565b83600003610fe357889350610fe0610f866117d6565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ef7565b92505b50610fed83611bbf565b6001850180546001600160801b0319166001600160801b039290921691909117905561104361103c7f00000000000000000000000000000000000000000000000000000000000000008b613949565b8a84611f0e565b6110818961107b6110747f00000000000000000000000000000000000000000000000000000000000000008361395c565b429061204c565b84611f0e565b61108a88612061565b50600090506008816110bc7f00000000000000000000000000000000000000000000000000000000000000008d613949565b815260208101919091526040016000908120600101546001600160801b031691506110e860028c612205565b6000818152601060205260408120549192508c8c831561122e576001925060008061111786898d86600061223a565b9150915080600d600082825461112d919061395c565b9091555061114990508660008461114381611a5c565b88612309565b611153818361395c565b915061118386838a8e877f0000000000000000000000000000000000000000000000000000000000000000612483565b915061119761119283856124c7565b6124dc565b600680546002906111b89084906201000090046001600160701b0316613ae3565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111e582611bbf565b60068054601090611207908490600160801b90046001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061123b600184612205565b600081815260106020526040902054909150801561134a5760019450600080611268838b8f88600161223a565b9150915080600d600082825461127e919061395c565b9091555061129a90508360008461129481611a5c565b8a612506565b6112a48183613949565b91506112b361119283876124c7565b600680546002906112d49084906201000090046001600160701b0316613ae3565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061130182611bbf565b60068054601090611323908490600160801b90046001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113845761137661135c87611a5c565b61136583611a5c565b61136f9190613b23565b60006126f7565b8e61138184826115ba565b50505b600061138f84611cf6565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b03161561145f578e61145b5a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906127aa565b5050505b50999b5050505050505050505050505b949350505050565b60008061148385611b8c565b505060075485906001600160801b0316808211156114a857806001600160801b031691505b816000036114bd5760008092509250506115b0565b6114cc600360f81b8984611c25565b6007546000906114f29084906001600160801b03600160801b9091048116908516611ab0565b90506114fd83611bbf565b6115079083613b43565b600780546001600160801b0319166001600160801b039290921691909117905561153081611bbf565b60078054601090611552908490600160801b90046001600160801b0316613b43565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611581818887612835565b935061158d86846128cf565b8410156115ad5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611605916001600160801b031690613949565b9050806000036116195760019150506117af565b6000611624856128e4565b905080600003611639576001925050506117af565b600080611647838589612980565b915091508061165d5760009450505050506117af565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611699929190613b63565b6040805180830381865af41580156116b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d99190613bd9565b915091506116f76116e982611a5c565b6116f290613bfd565b612af4565b92508261170d57600096505050505050506117af565b61171682611bbf565b600780546000906117319084906001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061175e81611bbf565b60078054601090611780908490600160801b90046001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b34156117d457604051631574f9f360e01b815260040160405180910390fd5b565b600254600454600091610e4d916001600160801b0390911690600f0b611b99565b60008061180687878786611ef7565b905061181281856118f6565b979650505050505050565b600080806118316040850160208601613842565b156118565761184c85611847604087018761385f565b612c8c565b9093509050611872565b503461186e85611869604087018761385f565b612ca8565b8492505b61187a610e3a565b915080156118ed57604051600090339083908381818185875af1925050503d80600081146118c4576040519150601f19603f3d011682016040523d82523d6000602084013e6118c9565b606091505b50509050806118eb576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006101a561190a84846301e13380612cdd565b61191c85670de0b6b3a7640000613949565b90611ace565b61192a613670565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611a229116612d03565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611a5492900416612d03565b905292915050565b60006001600160ff1b03821115611a865760405163396ea70160e11b815260040160405180910390fd5b5090565b611a9381612af4565b610e3757604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611ac757600080fd5b5091020490565b60006101a583670de0b6b3a764000084611ab0565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611b1590849061395c565b909155505060008381526010602052604081208054839290611b3890849061395c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006117af8260046115ba565b600080611ba68484612d79565b909250905080611bb857611bb8612db5565b5092915050565b60006001600160801b03821115611a8657604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611c07575060016001607f1b0382135b15611a865760405163a5353be560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115611c6857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290611cab908490613949565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b7f565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611d1f87611922565b6040518263ffffffff1660e01b8152600401611d3b91906139ed565b6040805180830381865af4158015611d57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7b9190613c19565b9150915080611d91575060009485945092505050565b6000808611611da1576000611dab565b611dab83876124c7565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691611e16919061395c565b611e209190613949565b905080600003611e395750600096879650945050505050565b6000611e458383611ace565b98600198509650505050505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa158015611ebd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117af91906139fc565b6000611eed828461391f565b6101a59084613949565b600061018c82611f08858888611ab0565b90612dce565b600083815260086020526040902054600160801b90046001600160801b0316808303611f3a5750505050565b6000848152600860205260408120546001600160801b031690819003611f9457611f6383611bbf565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055612012565b611fe5611fe0670de0b6b3a7640000611fad8886613949565b611fb79190613a56565b85670de0b6b3a7640000611fcb878a613949565b611fd59190613a56565b859291906001612e43565b611bbf565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61201b84611bbf565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161205b57826101a5565b50919050565b6006546000908190612084908490600160801b90046001600160801b03166124c7565b6006546201000090046001600160701b031692509050818111156122005760006120ae8383613949565b90506120bd611fe08286612ee1565b600680546010906120df908490600160801b90046001600160801b0316613b43565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006121188583611ace90919063ffffffff16565b90506000612146827f00000000000000000000000000000000000000000000000000000000000000006124c7565b905080600d600082825461215a919061395c565b9091555061216a90508183613949565b915061217582611bbf565b600280546000906121909084906001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121bd82612ef6565b600480546000906121d2908490600f0b613c49565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561222f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122478785611ace565b91506000612275837f00000000000000000000000000000000000000000000000000000000000000006124c7565b90506122a1817f00000000000000000000000000000000000000000000000000000000000000006124c7565b915083156122c4576122b38282613949565b6122bd9084613949565b92506122db565b6122ce8282613949565b6122d8908461395c565b92505b868610156122fe576122ee838789611ab0565b92506122fb828789611ab0565b91505b509550959350505050565b600454600160801b90046001600160801b0316612352611fe082612335670de0b6b3a764000086613a56565b600554600160801b90046001600160801b031691908a6000612e43565b600580546001600160801b03928316600160801b02921691909117905561237886611bbf565b6123829082613b43565b600480546001600160801b03928316600160801b0292169190911790556123a884611bbf565b600280546000906123c39084906001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123f083611be9565b60048054600090612405908490600f0b613c49565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061243585611bbf565b60028054601090612457908490600160801b90046001600160801b0316613b43565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806124958461191c8a888a611ab0565b90506124a2888486611ab0565b6124ac908261395c565b9050868111156124bc5786810391505b509695505050505050565b60006101a58383670de0b6b3a7640000611ab0565b60006001600160701b03821115611a865760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061254857507f00000000000000000000000000000000000000000000000000000000000000006125468583613949565b105b1561255557612555612db5565b6004549084900390600f0b61256a8482613b23565b90508361257686611a5c565b1380156125ab57507f00000000000000000000000000000000000000000000000000000000000000006125a98383611b99565b105b156125b8576125b8612db5565b600354600160801b90046001600160801b03166125fa611fe0826125e4670de0b6b3a764000088613a56565b6005546001600160801b031691908c6000612e43565b600580546001600160801b0319166001600160801b03929092169190911790556126248882613949565b905061262f81611bbf565b600380546001600160801b03928316600160801b02921691909117905561265583611bbf565b600280546001600160801b0319166001600160801b039290921691909117905561267e82611be9565b600480546001600160801b0319166001600160801b03929092169190911790556126a787611bbf565b600280546010906126c9908490600160801b90046001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006127206127068483612f20565b612711846000612f20565b61271b9190613b23565b611be9565b9050600081600f0b1315612775576003805482919060009061274c9084906001600160801b0316613b03565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156127a55761278a81613c76565b6003805460009061274c9084906001600160801b0316613b43565b505050565b6000606060008060008661ffff1667ffffffffffffffff8111156127d0576127d0613c9c565b6040519080825280601f01601f1916602001820160405280156127fa576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561281b578692505b828152826000602083013e90999098509650505050505050565b60008061284285856124c7565b905061284d81612f36565b9450846000036128615760009150506101a5565b6128716040840160208501613842565b156128a05761289985612887602086018661380b565b612894604087018761385f565b612f86565b91506128c7565b6128c3856128b1602086018661380b565b6128be604087018761385f565b613083565b8491505b509392505050565b60006101a58383670de0b6b3a7640000612cdd565b60035460009081906128ff906001600160801b031684612ee1565b905061292b7f00000000000000000000000000000000000000000000000000000000000000008261395c565b6002546001600160801b0316111561205b576002547f0000000000000000000000000000000000000000000000000000000000000000906129769083906001600160801b0316613949565b6101a59190613949565b6129886136d1565b60008061299484611922565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129cf91906139ed565b6040805180830381865af41580156129eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a0f9190613c19565b9350905082612a245750600091506101649050565b6000612a4b612a468461016001518561014001516124c790919063ffffffff16565b611a5c565b612a6b612a468561012001518661010001516128cf90919063ffffffff16565b612a759190613b23565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bd19190613cb2565b935093509350935080612bed5750600098975050505050505050565b868414612c1e57612bfd84611bbf565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c4f57612c2e83611be9565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c7d57612c5f82611bbf565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6127a56001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866130bd565b6000826000190484118302158202612cf457600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612d17610e52565b612d219190613a56565b9050808311612d31576000612d3b565b612d3b8184613949565b91506101a5612d72670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a56565b8390611ace565b600080600083612d8886611a5c565b612d929190613b23565b90506000811215612daa5760008092509250506118ef565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612de75750670de0b6b3a76400006117af565b82600003612df7575060006117af565b6000612e0283611a5c565b90506000612e17612e1286611a5c565b613124565b9050818102612e2e670de0b6b3a764000082613cf3565b9050612e398161334a565b9695505050505050565b600082600003612e5457508461018c565b8115612ea757612e85612e67848761395c565b612e7185876124c7565b612e7b888a6124c7565b61191c919061395c565b90506000612e93858861204c565b905080821015612ea1578091505b5061018c565b828503612eb65750600061018c565b610189612ec38487613949565b612ecd85876128cf565b612ed7888a6124c7565b61191c9190613949565b60006101a583670de0b6b3a764000084612cdd565b600060016001607f1b03821115611a865760405163a5353be560e01b815260040160405180910390fd5b6000818313612f2f57816101a5565b5090919050565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401611ea0565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b158015612feb57600080fd5b505af1158015612fff573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114613053576040519150601f19603f3d011682016040523d82523d6000602084013e613058565b606091505b505090508061307a576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6130b76001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866134df565b50505050565b6040516001600160a01b0384811660248301528381166044830152606482018390526130b79186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613510565b60008082136131465760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131c99084901c611a5c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361336557506000919050565b680755bf798b4a1bf1e5821261338e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e3974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a5c565b6040516001600160a01b038381166024830152604482018390526127a591859182169063a9059cbb906064016130f2565b60006135256001600160a01b03841683613578565b9050805160001415801561354a5750808060200190518101906135489190613d21565b155b156127a557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606101a58383600084600080856001600160a01b0316848660405161359e9190613d3e565b60006040518083038185875af1925050503d80600081146135db576040519150601f19603f3d011682016040523d82523d6000602084013e6135e0565b606091505b5091509150612e39868383606082613600576135fb82613647565b6101a5565b815115801561361757506001600160a01b0384163b155b1561364057604051639996b31560e01b81526001600160a01b038516600482015260240161356f565b50806101a5565b8051156136575780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806136e5613670565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561205b57600080fd5b60008060006060848603121561374a57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561376f57600080fd5b61377b86828701613723565b9150509250925092565b6000806040838503121561379857600080fd5b50508035926020909101359150565b600080600080600060a086880312156137bf57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156137f257600080fd5b6137fe88828901613723565b9150509295509295909350565b60006020828403121561381d57600080fd5b81356001600160a01b03811681146101a557600080fd5b8015158114610e3757600080fd5b60006020828403121561385457600080fd5b81356101a581613834565b6000808335601e1984360301811261387657600080fd5b83018035915067ffffffffffffffff82111561389157600080fd5b6020019150368190038213156118ef57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a0608082015260006138fd60a0830184866138a6565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b60008261392e5761392e613909565b500690565b634e487b7160e01b600052601160045260246000fd5b818103818111156117af576117af613933565b808201808211156117af576117af613933565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016117af828461396f565b600060208284031215613a0e57600080fd5b5051919050565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613a4960c0830184866138a6565b9998505050505050505050565b80820281158282048414176117af576117af613933565b600080600060608486031215613a8257600080fd5b8351925060208401519150604084015190509250925092565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613ad560e0830184866138a6565b9a9950505050505050505050565b6001600160701b03818116838216019080821115611bb857611bb8613933565b6001600160801b03818116838216019080821115611bb857611bb8613933565b8181036000831280158383131683831282161715611bb857611bb8613933565b6001600160801b03828116828216039080821115611bb857611bb8613933565b60006102a082019050613b7782855161396f565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613bec57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613c1257613c12613933565b5060000390565b60008060408385031215613c2c57600080fd5b825191506020830151613c3e81613834565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156117af576117af613933565b600081600f0b60016001607f1b03198103613c9357613c93613933565b60000392915050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613cc857600080fd5b8451935060208501519250604085015191506060850151613ce881613834565b939692955090935050565b600082613d0257613d02613909565b600160ff1b821460001984141615613d1c57613d1c613933565b500590565b600060208284031215613d3357600080fd5b81516101a581613834565b6000825160005b81811015613d5f5760208186018101518583015201613d45565b50600092019182525091905056fea26469706673582212209659b2f22fdb45de4c6e143b675b79ef3164129edca322ba24bf30ed095e14db64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
