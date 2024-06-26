export const ERC4626Target3 = {
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200440b3803806200440b833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613f42620004c96000396000505060005050600081816104cd015281816104fc01526105290152600081816103340152818161077301528181610c4d015261196501526000818161091d01528181610a0801528181610a9b01528181610b630152818161193f015281816124cb0152818161252e015281816128b4015281816128f00152612ae80152600081816103950152818161098d01528181610f490152611919015260006120d00152600061222b01526000818161110d01526121ff015260005050600081816103d7015281816109e001528181610f6a015261198b0152600081816103b6015281816104a2015281816109ba015281816110450152612e190152600081816102840152818161046101528181610e0801528181610e8301528181610ef901528181610fc50152610ffd015260008181611e1b01528181612c7701528181612cf101528181612d800152818161301a0152818161308001526130fc015260008181612c4a0152612cab0152613f426000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a3660046138d4565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613924565b61011a565b005b6100be6100b9366004613946565b610128565b604051908152602001610080565b6100be6100da3660046138d4565b610143565b3480156100eb57600080fd5b5061006f6100fa3660046138d4565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261022d565b5050565b600061013786868686866102ee565b90505b95945050505050565b60006101508484846108c7565b90505b9392505050565b60008061010d858585610c37565b600080610173610d85565b61017c83610daf565b6000610186610de8565b905061019d610193610e00565b8260046001610e2c565b506101ab3387838888611425565b90935091506101bd60208501856139aa565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101fb60408b0160208c016139e1565b61020860408c018c6139fe565b60405161021a96959493929190613a6e565b60405180910390a3506101126001600055565b610235610d85565b600061023f610de8565b6000848152600860205260409020600101549091506001600160801b0316156102735761026c8183611568565b50506102e4565b600061027d610e00565b90506102a97f000000000000000000000000000000000000000000000000000000000000000085613abe565b1515806102b557508381105b156102d35760405163ecd29e8160e01b815260040160405180910390fd5b6102e08483856000610e2c565b5050505b6101246001600055565b60006102f8610d85565b600654610100900460ff1615610321576040516321081abf60e01b815260040160405180910390fd5b610329611763565b61033282610daf565b7f00000000000000000000000000000000000000000000000000000000000000008610156103735760405163211ddda360e11b815260040160405180910390fd5b60006103fb610380611784565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117a5565b90508481108061040a57508381115b1561042857604051633b61151160e11b815260040160405180910390fd5b60008061043589866117cb565b915091506000610443610e00565b9050610453818360046001610e2c565b5060006104c66008826104867f000000000000000000000000000000000000000000000000000000000000000086613ae8565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006118a4565b90506104f27f000000000000000000000000000000000000000000000000000000000000000082613afb565b85118061055157507f000000000000000000000000000000000000000000000000000000000000000081118015610551575061054e7f000000000000000000000000000000000000000000000000000000000000000082613ae8565b85105b1561056f57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916105bb916001600160801b0390911690613ae8565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154919250906105f6908390613afb565b90506000806000610606876118d0565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610640908490600401613b8c565b602060405180830381865af415801561065d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106819190613b9b565b915061069461068f89611a0a565b611a38565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916106f591859101613b8c565b602060405180830381865af4158015610712573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107369190613b9b565b9250818310156107595760405163184d952160e11b815260040160405180910390fd5b61076f84836107688187613ae8565b9190611a5e565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107b25760405163211ddda360e11b815260040160405180910390fd5b508d8d6107bf828c611a7c565b10156107de5760405163c972651760e01b815260040160405180910390fd5b6107f660006107f060208e018e6139aa565b8c611a91565b600061080188611b3a565b90508061082157604051638bdf918d60e01b815260040160405180910390fd5b60008515610838576108338487611a7c565b61083b565b60005b90508c61084b60208201826139aa565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf8e868d61088860408701602088016139e1565b8761089660408901896139fe565b6040516108a99796959493929190613bb4565b60405180910390a250505050505050505050505061013a6001600055565b60006108d1610d85565b6108d9611763565b6108e282610daf565b60065460ff161561090657604051637983c05160e01b815260040160405180910390fd5b60008061091386856117cb565b90925090506109437f00000000000000000000000000000000000000000000000000000000000000006002613bf5565b82101561096357604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a939190613c0c565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ac48484611b47565b1015610ae35760405163216f4ab160e21b815260040160405180910390fd5b610aec83611b6d565b600280546001600160801b0319166001600160801b0392909216919091179055610b1582611b97565b600480546001600160801b0319166001600160801b0392909216919091179055610b3e81611b6d565b600280546001600160801b03928316600160801b029216919091179055610b876000807f0000000000000000000000000000000000000000000000000000000000000000611a91565b610b9f6000610b9960208a018a6139aa565b88611a91565b610bb4610baa610e00565b8560046001610e2c565b50610bc260208801886139aa565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af3878b87610bff60408d0160208e016139e1565b8d610c0d60408f018f6139fe565b604051610c209796959493929190613bb4565b60405180910390a250505050506101536001600055565b600080610c42610d85565b610c4b83610daf565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8c5760405163211ddda360e11b815260040160405180910390fd5b6000610c96610de8565b9050610ca3610193610e00565b50610cb060003388611bd3565b610cc5600360f81b610b9960208701876139aa565b6000610ce0610cd760208701876139aa565b88848989611425565b9094509050610cef8188613ae8565b92506000610cfc83611ca4565b509050610d0c60208701876139aa565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a8887610d4a60408d0160208e016139e1565b8a888e8060400190610d5c91906139fe565b604051610d70989796959493929190613c3a565b60405180910390a35050506101126001600055565b600260005403610da857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dbe60208301836139aa565b6001600160a01b031603610de55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dfb670de0b6b3a7640000611e02565b905090565b6000610dfb427f0000000000000000000000000000000000000000000000000000000000000000611e8f565b600084815260086020526040812060018101546001600160801b0316151580610e5457504286115b15610e6d57600101546001600160801b0316905061141d565b6000806000610e7a610e00565b90506000610ea87f00000000000000000000000000000000000000000000000000000000000000008b613afb565b90505b81811015610f1e576000818152600860205260409020600101546001600160801b03168015610ef6576000828152600860205260409020549094506001600160801b03169250610f1e565b507f000000000000000000000000000000000000000000000000000000000000000001610eab565b83600003610f9157889350610f8e610f34611784565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ea5565b92505b50610f9b83611b6d565b6001850180546001600160801b0319166001600160801b0392909216919091179055610ff1610fea7f00000000000000000000000000000000000000000000000000000000000000008b613ae8565b8a84611ebc565b61102f896110296110227f000000000000000000000000000000000000000000000000000000000000000083613afb565b4290611ffa565b84611ebc565b6110388861200f565b506000905060088161106a7f00000000000000000000000000000000000000000000000000000000000000008d613ae8565b815260208101919091526040016000908120600101546001600160801b0316915061109660028c6121b3565b6000818152601060205260408120549192508c8c83156111dc57600192506000806110c586898d8660006121e8565b9150915080600d60008282546110db9190613afb565b909155506110f79050866000846110f181611a0a565b886122b7565b6111018183613afb565b915061113186838a8e877f0000000000000000000000000000000000000000000000000000000000000000612431565b91506111456111408385612475565b61248a565b600680546002906111669084906201000090046001600160701b0316613c82565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061119382611b6d565b600680546010906111b5908490600160801b90046001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e96001846121b3565b60008181526010602052604090205490915080156112f85760019450600080611216838b8f8860016121e8565b9150915080600d600082825461122c9190613afb565b9091555061124890508360008461124281611a0a565b8a6124b4565b6112528183613ae8565b91506112616111408387612475565b600680546002906112829084906201000090046001600160701b0316613c82565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112af82611b6d565b600680546010906112d1908490600160801b90046001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113325761132461130a87611a0a565b61131383611a0a565b61131d9190613cc2565b60006126a5565b8e61132f8482611568565b50505b600061133d84611ca4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b03161561140d578e6114095a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612758565b5050505b50999b5050505050505050505050505b949350505050565b60008061143185611b3a565b505060075485906001600160801b03168082111561145657806001600160801b031691505b8160000361146b57600080925092505061155e565b61147a600360f81b8984611bd3565b6007546000906114a09084906001600160801b03600160801b9091048116908516611a5e565b90506114ab83611b6d565b6114b59083613ce2565b600780546001600160801b0319166001600160801b03929092169190911790556114de81611b6d565b60078054601090611500908490600160801b90046001600160801b0316613ce2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061152f8188876127e3565b935061153b868461287d565b84101561155b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916115b3916001600160801b031690613ae8565b9050806000036115c757600191505061175d565b60006115d285612892565b9050806000036115e75760019250505061175d565b6000806115f583858961292e565b915091508061160b57600094505050505061175d565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611647929190613d02565b6040805180830381865af4158015611663573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116879190613d78565b915091506116a561169782611a0a565b6116a090613d9c565b612aa2565b9250826116bb576000965050505050505061175d565b6116c482611b6d565b600780546000906116df9084906001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061170c81611b6d565b6007805460109061172e908490600160801b90046001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b341561178257604051631574f9f360e01b815260040160405180910390fd5b565b600254600454600091610dfb916001600160801b0390911690600f0b611b47565b6000806117b487878786611ea5565b90506117c081856118a4565b979650505050505050565b600080806117df60408501602086016139e1565b15611804576117fa856117f560408701876139fe565b612c3a565b9093509050611820565b503461181c8561181760408701876139fe565b612d73565b8492505b611828610de8565b9150801561189b57604051600090339083908381818185875af1925050503d8060008114611872576040519150601f19603f3d011682016040523d82523d6000602084013e611877565b606091505b5050905080611899576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006101536118b884846301e13380612da8565b6118ca85670de0b6b3a7640000613ae8565b90611a7c565b6118d861380f565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916119d09116612dce565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611a0292900416612dce565b905292915050565b60006001600160ff1b03821115611a345760405163396ea70160e11b815260040160405180910390fd5b5090565b611a4181612aa2565b610de557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a7557600080fd5b5091020490565b600061015383670de0b6b3a764000084611a5e565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611ac3908490613afb565b909155505060008381526010602052604081208054839290611ae6908490613afb565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061175d826004611568565b600080611b548484612e44565b909250905080611b6657611b66612e80565b5092915050565b60006001600160801b03821115611a3457604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611bb5575060016001607f1b0382135b15611a345760405163a5353be560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115611c1657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290611c59908490613ae8565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b2d565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611ccd876118d0565b6040518263ffffffff1660e01b8152600401611ce99190613b8c565b6040805180830381865af4158015611d05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d299190613db8565b9150915080611d3f575060009485945092505050565b6000808611611d4f576000611d59565b611d598387612475565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691611dc49190613afb565b611dce9190613ae8565b905080600003611de75750600096879650945050505050565b6000611df38383611a7c565b98600198509650505050505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015611e6b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061175d9190613b9b565b6000611e9b8284613abe565b6101539084613ae8565b600061013a82611eb6858888611a5e565b90612e99565b600083815260086020526040902054600160801b90046001600160801b0316808303611ee85750505050565b6000848152600860205260408120546001600160801b031690819003611f4257611f1183611b6d565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611fc0565b611f93611f8e670de0b6b3a7640000611f5b8886613ae8565b611f659190613bf5565b85670de0b6b3a7640000611f79878a613ae8565b611f839190613bf5565b859291906001612f0e565b611b6d565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611fc984611b6d565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120095782610153565b50919050565b6006546000908190612032908490600160801b90046001600160801b0316612475565b6006546201000090046001600160701b031692509050818111156121ae57600061205c8383613ae8565b905061206b611f8e8286612fac565b6006805460109061208d908490600160801b90046001600160801b0316613ce2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006120c68583611a7c90919063ffffffff16565b905060006120f4827f0000000000000000000000000000000000000000000000000000000000000000612475565b905080600d60008282546121089190613afb565b9091555061211890508183613ae8565b915061212382611b6d565b6002805460009061213e9084906001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061216b82612fc1565b60048054600090612180908490600f0b613de8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121dd5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806121f58785611a7c565b91506000612223837f0000000000000000000000000000000000000000000000000000000000000000612475565b905061224f817f0000000000000000000000000000000000000000000000000000000000000000612475565b91508315612272576122618282613ae8565b61226b9084613ae8565b9250612289565b61227c8282613ae8565b6122869084613afb565b92505b868610156122ac5761229c838789611a5e565b92506122a9828789611a5e565b91505b509550959350505050565b600454600160801b90046001600160801b0316612300611f8e826122e3670de0b6b3a764000086613bf5565b600554600160801b90046001600160801b031691908a6000612f0e565b600580546001600160801b03928316600160801b02921691909117905561232686611b6d565b6123309082613ce2565b600480546001600160801b03928316600160801b02921691909117905561235684611b6d565b600280546000906123719084906001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061239e83611b97565b600480546000906123b3908490600f0b613de8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506123e385611b6d565b60028054601090612405908490600160801b90046001600160801b0316613ce2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612443846118ca8a888a611a5e565b9050612450888486611a5e565b61245a9082613afb565b90508681111561246a5786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a5e565b60006001600160701b03821115611a345760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806124f657507f00000000000000000000000000000000000000000000000000000000000000006124f48583613ae8565b105b1561250357612503612e80565b6004549084900390600f0b6125188482613cc2565b90508361252486611a0a565b13801561255957507f00000000000000000000000000000000000000000000000000000000000000006125578383611b47565b105b1561256657612566612e80565b600354600160801b90046001600160801b03166125a8611f8e82612592670de0b6b3a764000088613bf5565b6005546001600160801b031691908c6000612f0e565b600580546001600160801b0319166001600160801b03929092169190911790556125d28882613ae8565b90506125dd81611b6d565b600380546001600160801b03928316600160801b02921691909117905561260383611b6d565b600280546001600160801b0319166001600160801b039290921691909117905561262c82611b97565b600480546001600160801b0319166001600160801b039290921691909117905561265587611b6d565b60028054601090612677908490600160801b90046001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006126ce6126b48483612feb565b6126bf846000612feb565b6126c99190613cc2565b611b97565b9050600081600f0b131561272357600380548291906000906126fa9084906001600160801b0316613ca2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156127535761273881613e15565b600380546000906126fa9084906001600160801b0316613ce2565b505050565b6000606060008060008661ffff1667ffffffffffffffff81111561277e5761277e613e3b565b6040519080825280601f01601f1916602001820160405280156127a8576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156127c9578692505b828152826000602083013e90999098509650505050505050565b6000806127f08585612475565b90506127fb81613001565b94508460000361280f576000915050610153565b61281f60408401602085016139e1565b1561284e576128478561283560208601866139aa565b61284260408701876139fe565b613051565b9150612875565b6128718561285f60208601866139aa565b61286c60408701876139fe565b6130ef565b8491505b509392505050565b60006101538383670de0b6b3a7640000612da8565b60035460009081906128ad906001600160801b031684612fac565b90506128d97f000000000000000000000000000000000000000000000000000000000000000082613afb565b6002546001600160801b03161115612009576002547f0000000000000000000000000000000000000000000000000000000000000000906129249083906001600160801b0316613ae8565b6101539190613ae8565b612936613870565b600080612942846118d0565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161297d9190613b8c565b6040805180830381865af4158015612999573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129bd9190613db8565b93509050826129d25750600091506101129050565b60006129f96129f484610160015185610140015161247590919063ffffffff16565b611a0a565b612a196129f485610120015186610100015161287d90919063ffffffff16565b612a239190613cc2565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7f9190613e51565b935093509350935080612b9b5750600098975050505050505050565b868414612bcc57612bab84611b6d565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bfd57612bdc83611b97565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c2b57612c0d82611b6d565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600080612c726001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088613129565b612cd27f0000000000000000000000000000000000000000000000000000000000000000612ca1876001613afb565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190613190565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015612d42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d669190613b9b565b9660009650945050505050565b6127536001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086613129565b6000826000190484118302158202612dbf57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612de2610e00565b612dec9190613bf5565b9050808311612dfc576000612e06565b612e068184613ae8565b9150610153612e3d670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bf5565b8390611a7c565b600080600083612e5386611a0a565b612e5d9190613cc2565b90506000811215612e7557600080925092505061189d565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612eb25750670de0b6b3a764000061175d565b82600003612ec25750600061175d565b6000612ecd83611a0a565b90506000612ee2612edd86611a0a565b613220565b9050818102612ef9670de0b6b3a764000082613e92565b9050612f0481613446565b9695505050505050565b600082600003612f1f57508461013a565b8115612f7257612f50612f328487613afb565b612f3c8587612475565b612f46888a612475565b6118ca9190613afb565b90506000612f5e8588611ffa565b905080821015612f6c578091505b5061013a565b828503612f815750600061013a565b610137612f8e8487613ae8565b612f98858761287d565b612fa2888a612475565b6118ca9190613ae8565b600061015383670de0b6b3a764000084612da8565b600060016001607f1b03821115611a345760405163a5353be560e01b815260040160405180910390fd5b6000818313612ffa5781610153565b5090919050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401611e4e565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156130cb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013a9190613b9b565b6131236001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866135db565b50505050565b6040516001600160a01b0384811660248301528381166044830152606482018390526131239186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061360c565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526131e18482613674565b613123576040516001600160a01b0384811660248301526000604483015261321691869182169063095ea7b39060640161315e565b613123848261360c565b60008082136132425760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132c59084901c611a0a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361346157506000919050565b680755bf798b4a1bf1e5821261348a576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f0474029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a0a565b6040516001600160a01b0383811660248301526044820183905261275391859182169063a9059cbb9060640161315e565b60006136216001600160a01b03841683613717565b905080516000141580156136465750808060200190518101906136449190613ec0565b155b1561275357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516136919190613edd565b6000604051808303816000865af19150503d80600081146136ce576040519150601f19603f3d011682016040523d82523d6000602084013e6136d3565b606091505b50915091508180156136fd5750805115806136fd5750808060200190518101906136fd9190613ec0565b801561013a5750505050506001600160a01b03163b151590565b60606101538383600084600080856001600160a01b0316848660405161373d9190613edd565b60006040518083038185875af1925050503d806000811461377a576040519150601f19603f3d011682016040523d82523d6000602084013e61377f565b606091505b5091509150612f0486838360608261379f5761379a826137e6565b610153565b81511580156137b657506001600160a01b0384163b155b156137df57604051639996b31560e01b81526001600160a01b038516600482015260240161366b565b5080610153565b8051156137f65780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061388461380f565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561200957600080fd5b6000806000606084860312156138e957600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561390e57600080fd5b61391a868287016138c2565b9150509250925092565b6000806040838503121561393757600080fd5b50508035926020909101359150565b600080600080600060a0868803121561395e57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561399157600080fd5b61399d888289016138c2565b9150509295509295909350565b6000602082840312156139bc57600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610de557600080fd5b6000602082840312156139f357600080fd5b8135610153816139d3565b6000808335601e19843603018112613a1557600080fd5b83018035915067ffffffffffffffff821115613a3057600080fd5b60200191503681900382131561189d57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000613a9c60a083018486613a45565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082613acd57613acd613aa8565b500690565b634e487b7160e01b600052601160045260246000fd5b8181038181111561175d5761175d613ad2565b8082018082111561175d5761175d613ad2565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161175d8284613b0e565b600060208284031215613bad57600080fd5b5051919050565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613be860c083018486613a45565b9998505050505050505050565b808202811582820484141761175d5761175d613ad2565b600080600060608486031215613c2157600080fd5b8351925060208401519150604084015190509250925092565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613c7460e083018486613a45565b9a9950505050505050505050565b6001600160701b03818116838216019080821115611b6657611b66613ad2565b6001600160801b03818116838216019080821115611b6657611b66613ad2565b8181036000831280158383131683831282161715611b6657611b66613ad2565b6001600160801b03828116828216039080821115611b6657611b66613ad2565b60006102a082019050613d16828551613b0e565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613d8b57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613db157613db1613ad2565b5060000390565b60008060408385031215613dcb57600080fd5b825191506020830151613ddd816139d3565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561175d5761175d613ad2565b600081600f0b60016001607f1b03198103613e3257613e32613ad2565b60000392915050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613e6757600080fd5b8451935060208501519250604085015191506060850151613e87816139d3565b939692955090935050565b600082613ea157613ea1613aa8565b600160ff1b821460001984141615613ebb57613ebb613ad2565b500590565b600060208284031215613ed257600080fd5b8151610153816139d3565b6000825160005b81811015613efe5760208186018101518583015201613ee4565b50600092019182525091905056fea26469706673582212203f3cb283d8c56ab1a4f4b3f8d57ad6501c3342f00107ba783d0dc78fac30977f64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
