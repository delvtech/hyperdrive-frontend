export const EzETHTarget3 = {
    abi: [
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
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
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
                            "name": "circuitBreakerDelta",
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
                    "internalType": "contract IRestakeManager",
                    "name": "_restakeManager",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "BelowMinimumContribution",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "CircuitBreakerTriggered",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DistributeExcessIdleFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidApr",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidCheckpointTime",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidEffectiveShareReserves",
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
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolAlreadyInitialized",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolIsPaused",
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
            "inputs": [],
            "name": "TransferFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint112",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsupportedToken",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UpdateLiquidityFailed",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "checkpointVaultSharePrice",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minLpSharePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minApr",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxApr",
                    "type": "uint256"
                },
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
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_checkpointTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxIterations",
                    "type": "uint256"
                }
            ],
            "name": "checkpoint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_apr",
                    "type": "uint256"
                },
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
            "name": "initialize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawalShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutputPerShare",
                    "type": "uint256"
                },
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
            "name": "redeemWithdrawalShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_lpShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutputPerShare",
                    "type": "uint256"
                },
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
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200424c3803806200424c833981016040819052620000359162000276565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e05260e0808801516102005261012080890151909252610100808901519091526101408089015190915291870180515190915280518301519091528051604090810151610160908152915160609081015161018090815282890151871661022052908801516102405291870151600a80549187166001600160a01b03199283161790559187015160088054918716918416919091179055928601516009805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018791906200039f565b6001600160a01b03166102805250620003c6915050565b6040516101e081016001600160401b0381118282101715620001d057634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ec57600080fd5b50565b8051620001fc81620001d6565b919050565b6000608082840312156200021457600080fd5b604051608081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102608112156200028c57600080fd5b610240808212156200029d57600080fd5b620002a76200019e565b9150620002b485620001ef565b8252620002c460208601620001ef565b6020830152620002d760408601620001ef565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000342818701620001ef565b9083015261018062000356868201620001ef565b908301526101a06200036a868201620001ef565b908301526101c06200037f8787830162000201565b818401525081935062000394818601620001ef565b925050509250929050565b600060208284031215620003b257600080fd5b8151620003bf81620001d6565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613cd46200057860003960008181611eb20152613080015260008181611d7f0152612f4d0152600050506000505060008181610495015281816104c401526104f101526000818161032e0152818161073c01528181610c1a01526118dd0152600081816108e9015281816109d401528181610a6701528181610b2f015281816118b701528181612554015281816125b7015281816128b2015281816128ee0152612ae401526000818161038f0152818161095901528181610e82015261189101526000612159015260006122b40152600081816111050152612288015260005050600081816103d1015281816109ac01528181610ea301526119030152600081816103b00152818161046a015281816109860152818161103d0152612d6001526000818161028001528181610dd901528181610ed501528181610f5c01528181610fbd0152610ff5015260008181611e0b01528181612c7401528181612fd901526130f8015260005050613cd46000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a3660046135ec565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a436600461363c565b61011a565b005b6100be6100b936600461365e565b610128565b604051908152602001610080565b6100be6100da3660046135ec565b610143565b3480156100eb57600080fd5b5061006f6100fa3660046135ec565b61015a565b60008061010d858585610168565b915091505b935093915050565b6101248282610229565b5050565b600061013786868686866102e8565b90505b95945050505050565b6000610150848484610893565b90505b9392505050565b60008061010d858585610c04565b600080610173610d57565b61017c83610d81565b6000610186610dba565b905061019b610193610dd2565b826004610e08565b506101a9338783888861139d565b90935091506101bb60208501856136c2565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8486856101f960408b0160208c016136f9565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610231610d57565b600061023b610dba565b6000848152600760205260409020600101549091506001600160801b03161561026f5761026881836114e0565b50506102de565b6000610279610dd2565b90506102a57f00000000000000000000000000000000000000000000000000000000000000008561372c565b1515806102b157508381105b156102cf5760405163ecd29e8160e01b815260040160405180910390fd5b6102da848385610e08565b5050505b6101246001600055565b60006102f2610d57565b600554610100900460ff161561031b576040516321081abf60e01b815260040160405180910390fd5b6103236116db565b61032c82610d81565b7f000000000000000000000000000000000000000000000000000000000000000086101561036d5760405163211ddda360e11b815260040160405180910390fd5b60006103f561037a6116fc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061171d565b90508481108061040457508381115b1561042257604051633b61151160e11b815260040160405180910390fd5b60008061042f8986611743565b91509150600061043d610dd2565b905061044b81836004610e08565b5060008181526007602052604081205461048e906001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061181c565b90506104ba7f000000000000000000000000000000000000000000000000000000000000000082613756565b85118061051957507f00000000000000000000000000000000000000000000000000000000000000008111801561051957506105167f000000000000000000000000000000000000000000000000000000000000000082613769565b85105b1561053757604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610583916001600160801b0390911690613769565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105be908390613756565b905060008060006105ce87611848565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106089084906004016137fa565b602060405180830381865af4158015610625573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106499190613809565b915061065c61065789611982565b6119b0565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106be9084906004016137fa565b602060405180830381865af41580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190613809565b9250818310156107225760405163184d952160e11b815260040160405180910390fd5b61073884836107318187613769565b91906119d6565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561077b5760405163211ddda360e11b815260040160405180910390fd5b508d8d610788828c6119f4565b10156107a75760405163c972651760e01b815260040160405180910390fd5b6107bf60006107b960208e018e6136c2565b8c611a09565b60006107ca88611ab2565b9050806107ea57604051638bdf918d60e01b815260040160405180910390fd5b60008515610801576107fc84876119f4565b610804565b60005b90508c61081460208201826136c2565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e868d61085160408701602088016136f9565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a250505050505050505050505061013a6001600055565b600061089d610d57565b6108a56116db565b6108ae82610d81565b60055460ff16156108d257604051637983c05160e01b815260040160405180910390fd5b6000806108df8685611743565b909250905061090f7f00000000000000000000000000000000000000000000000000000000000000006002613822565b82101561092f57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5f9190613839565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a908484611abf565b1015610aaf5760405163216f4ab160e21b815260040160405180910390fd5b610ab883611ae5565b600180546001600160801b0319166001600160801b0392909216919091179055610ae182611b0f565b600380546001600160801b0319166001600160801b0392909216919091179055610b0a81611ae5565b600180546001600160801b03928316600160801b029216919091179055610b536000807f0000000000000000000000000000000000000000000000000000000000000000611a09565b610b6b6000610b6560208a018a6136c2565b88611a09565b610b7e610b76610dd2565b856004610e08565b50610b8c60208801886136c2565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952878b87610bc960408d0160208e016136f9565b6040805194855260208501939093529183015215156060820152608081018b905260a00160405180910390a250505050506101536001600055565b600080610c0f610d57565b610c1883610d81565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c595760405163211ddda360e11b815260040160405180910390fd5b6000610c63610dba565b9050610c70610193610dd2565b50610c7d60003388611b4b565b610c92600360f81b610b6560208701876136c2565b6000610cad610ca460208701876136c2565b8884898961139d565b9094509050610cbc8188613769565b92506000610cc983611c1c565b509050610cd960208701876136c2565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a8887610d1760408d0160208e016136f9565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610d7a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610d9060208301836136c2565b6001600160a01b031603610db75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dcd670de0b6b3a7640000611d7a565b905090565b6000610dfe7f00000000000000000000000000000000000000000000000000000000000000004261372c565b610dcd9042613769565b600083815260076020526040812060018101546001600160801b0316151580610e3057504285115b15610e4957600101546001600160801b03169050610153565b6000806000610e56610dd2565b9050808803610ece57869250610ec7610e6d6116fc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611f2e565b9150610f8a565b6000610efa7f00000000000000000000000000000000000000000000000000000000000000008a613756565b90505b818103610f1557879350610f12610e6d6116fc565b92505b6000818152600760205260409020600101546001600160801b031693508315610f57576000818152600760205260409020546001600160801b03169250610f88565b610f817f000000000000000000000000000000000000000000000000000000000000000082613756565b9050610efd565b505b610f9383611ae5565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fe9610fe27f00000000000000000000000000000000000000000000000000000000000000008a613769565b8984611f45565b6110278861102161101a7f000000000000000000000000000000000000000000000000000000000000000083613756565b4290612083565b84611f45565b61103087612098565b50600090506007816110627f00000000000000000000000000000000000000000000000000000000000000008c613769565b815260208101919091526040016000908120600101546001600160801b0316915061108e60028b61223c565b6000818152600e60205260408120549192508b8b83156111d457600192506000806110bd86898d866000612271565b9150915080600b60008282546110d39190613756565b909155506110ef9050866000846110e981611982565b88612340565b6110f98183613756565b915061112986838a8e877f00000000000000000000000000000000000000000000000000000000000000006124ba565b915061113d61113883856124fe565b612513565b6005805460029061115e9084906201000090046001600160701b0316613867565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061118b82611ae5565b600580546010906111ad908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e160018461223c565b6000818152600e602052604090205490915080156112f0576001945060008061120e838b8f886001612271565b9150915080600b60008282546112249190613756565b9091555061124090508360008461123a81611982565b8a61253d565b61124a8183613769565b915061125961113883876124fe565b6005805460029061127a9084906201000090046001600160701b0316613867565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112a782611ae5565b600580546010906112c9908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113285761131c61130287611982565b61130b83611982565b61131591906138a7565b600061272e565b611326838f6114e0565b505b600061133384611c1c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113a985611ab2565b505060065485906001600160801b0316808211156113ce57806001600160801b031691505b816000036113e35760008092509250506114d6565b6113f2600360f81b8984611b4b565b6006546000906114189084906001600160801b03600160801b90910481169085166119d6565b905061142383611ae5565b61142d90836138c7565b600680546001600160801b0319166001600160801b039290921691909117905561145681611ae5565b60068054601090611478908490600160801b90046001600160801b03166138c7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a78188876127e1565b93506114b3868461287b565b8410156114d35760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161152b916001600160801b031690613769565b90508060000361153f5760019150506116d5565b600061154a85612890565b90508060000361155f576001925050506116d5565b60008061156d83858961292c565b91509150806115835760009450505050506116d5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016115bf9291906138e7565b6040805180830381865af41580156115db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ff919061395d565b9150915061161d61160f82611982565b61161890613981565b612aa0565b92508261163357600096505050505050506116d5565b61163c82611ae5565b600680546000906116579084906001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168481611ae5565b600680546010906116a6908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b34156116fa57604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610dcd916001600160801b0390911690600f0b611abf565b60008061172c87878786611f2e565b9050611738818561181c565b979650505050505050565b6000808061175760408501602086016136f9565b1561177c576117728561176d604087018761399d565b612c36565b9093509050611798565b50346117948561178f604087018761399d565b612c52565b8492505b6117a0610dba565b9150801561181357604051600090339083908381818185875af1925050503d80600081146117ea576040519150601f19603f3d011682016040523d82523d6000602084013e6117ef565b606091505b5050905080611811576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361183084846301e13380612cef565b61184285670de0b6b3a7640000613769565b906119f4565b611850613527565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119489116612d15565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261197a92900416612d15565b905292915050565b60006001600160ff1b038211156119ac5760405163396ea70160e11b815260040160405180910390fd5b5090565b6119b981612aa0565b610db757604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026119ed57600080fd5b5091020490565b600061015383670de0b6b3a7640000846119d6565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611a3b908490613756565b90915550506000838152600e602052604081208054839290611a5e908490613756565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006116d58260046114e0565b600080611acc8484612d8b565b909250905080611ade57611ade612dc7565b5092915050565b60006001600160801b038211156119ac57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611b2d575060016001607f1b0382135b156119ac5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611b8e57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611bd1908490613769565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611aa5565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611c4587611848565b6040518263ffffffff1660e01b8152600401611c6191906137fa565b6040805180830381865af4158015611c7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca191906139e4565b9150915080611cb7575060009485945092505050565b6000808611611cc7576000611cd1565b611cd183876124fe565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611d3c9190613756565b611d469190613769565b905080600003611d5f5750600096879650945050505050565b6000611d6b83836119f4565b98600198509650505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611ddb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611e039190810190613adf565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e8b9190613809565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa158015611f02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f269190613809565b949350505050565b600061013a82611f3f8588886119d6565b90612de0565b600083815260076020526040902054600160801b90046001600160801b0316808303611f715750505050565b6000848152600760205260408120546001600160801b031690819003611fcb57611f9a83611ae5565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055612049565b61201c612017670de0b6b3a7640000611fe48886613769565b611fee9190613822565b85670de0b6b3a7640000612002878a613769565b61200c9190613822565b859291906001612e55565b611ae5565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61205284611ae5565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120925782610153565b50919050565b60055460009081906120bb908490600160801b90046001600160801b03166124fe565b6005546201000090046001600160701b031692509050818111156122375760006120e58383613769565b90506120f46120178286612ef3565b60058054601090612116908490600160801b90046001600160801b03166138c7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061214f85836119f490919063ffffffff16565b9050600061217d827f00000000000000000000000000000000000000000000000000000000000000006124fe565b905080600b60008282546121919190613756565b909155506121a190508183613769565b91506121ac82611ae5565b600180546000906121c79084906001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121f482612f08565b60038054600090612209908490600f0b613bbf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156122665760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061227e87856119f4565b915060006122ac837f00000000000000000000000000000000000000000000000000000000000000006124fe565b90506122d8817f00000000000000000000000000000000000000000000000000000000000000006124fe565b915083156122fb576122ea8282613769565b6122f49084613769565b9250612312565b6123058282613769565b61230f9084613756565b92505b86861015612335576123258387896119d6565b92506123328287896119d6565b91505b509550959350505050565b600354600160801b90046001600160801b03166123896120178261236c670de0b6b3a764000086613822565b600454600160801b90046001600160801b031691908a6000612e55565b600480546001600160801b03928316600160801b0292169190911790556123af86611ae5565b6123b990826138c7565b600380546001600160801b03928316600160801b0292169190911790556123df84611ae5565b600180546000906123fa9084906001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061242783611b0f565b6003805460009061243c908490600f0b613bbf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061246c85611ae5565b6001805460109061248e908490600160801b90046001600160801b03166138c7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806124cc846118428a888a6119d6565b90506124d98884866119d6565b6124e39082613756565b9050868111156124f35786810391505b509695505050505050565b60006101538383670de0b6b3a76400006119d6565b60006001600160701b038211156119ac5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061257f57507f000000000000000000000000000000000000000000000000000000000000000061257d8583613769565b105b1561258c5761258c612dc7565b6003549084900390600f0b6125a184826138a7565b9050836125ad86611982565b1380156125e257507f00000000000000000000000000000000000000000000000000000000000000006125e08383611abf565b105b156125ef576125ef612dc7565b600254600160801b90046001600160801b03166126316120178261261b670de0b6b3a764000088613822565b6004546001600160801b031691908c6000612e55565b600480546001600160801b0319166001600160801b039290921691909117905561265b8882613769565b905061266681611ae5565b600280546001600160801b03928316600160801b02921691909117905561268c83611ae5565b600180546001600160801b0319166001600160801b03929092169190911790556126b582611b0f565b600380546001600160801b0319166001600160801b03929092169190911790556126de87611ae5565b60018054601090612700908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061275761273d8483612f32565b612748846000612f32565b61275291906138a7565b611b0f565b9050600081600f0b13156127ac57600280548291906000906127839084906001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156127dc576127c181613bec565b600280546000906127839084906001600160801b03166138c7565b505050565b6000806127ee85856124fe565b90506127f981612f48565b94508460000361280d576000915050610153565b61281d60408401602085016136f9565b1561284c576128458561283360208601866136c2565b612840604087018761399d565b6130b7565b9150612873565b61286f8561285d60208601866136c2565b61286a604087018761399d565b6130d2565b8491505b509392505050565b60006101538383670de0b6b3a7640000612cef565b60025460009081906128ab906001600160801b031684612ef3565b90506128d77f000000000000000000000000000000000000000000000000000000000000000082613756565b6001546001600160801b03161115612092576001547f0000000000000000000000000000000000000000000000000000000000000000906129229083906001600160801b0316613769565b6101539190613769565b612934613588565b60008061294084611848565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161297b91906137fa565b6040805180830381865af4158015612997573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129bb91906139e4565b93509050826129d05750600091506101129050565b60006129f76129f28461016001518561014001516124fe90919063ffffffff16565b611982565b612a176129f285610120015186610100015161287b90919063ffffffff16565b612a2191906138a7565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7b9190613c12565b935093509350935080612b975750600098975050505050505050565b868414612bc857612ba784611ae5565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612bf957612bd883611b0f565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612c2757612c0982611ae5565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612cc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ce99190613c53565b50505050565b6000826000190484118302158202612d0657600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612d29610dd2565b612d339190613822565b9050808311612d43576000612d4d565b612d4d8184613769565b9150610153612d84670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613822565b83906119f4565b600080600083612d9a86611982565b612da491906138a7565b90506000811215612dbc576000809250925050611815565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612df95750670de0b6b3a76400006116d5565b82600003612e09575060006116d5565b6000612e1483611982565b90506000612e29612e2486611982565b61316c565b9050818102612e40670de0b6b3a764000082613c70565b9050612e4b81613392565b9695505050505050565b600082600003612e6657508461013a565b8115612eb957612e97612e798487613756565b612e8385876124fe565b612e8d888a6124fe565b6118429190613756565b90506000612ea58588612083565b905080821015612eb3578091505b5061013a565b828503612ec85750600061013a565b610137612ed58487613769565b612edf858761287b565b612ee9888a6124fe565b6118429190613769565b600061015383670de0b6b3a764000084612cef565b600060016001607f1b038211156119ac5760405163a5353be560e01b815260040160405180910390fd5b6000818313612f415781610153565b5090919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612fa9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612fd19190810190613adf565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613035573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130599190613809565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a90606401611ee5565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015613141573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131659190613c53565b5050505050565b600080821361318e5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132119084901c611982565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133ad57506000919050565b680755bf798b4a1bf1e582126133d6576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e4b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611982565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061359c613527565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561209257600080fd5b60008060006060848603121561360157600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561362657600080fd5b613632868287016135da565b9150509250925092565b6000806040838503121561364f57600080fd5b50508035926020909101359150565b600080600080600060a0868803121561367657600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156136a957600080fd5b6136b5888289016135da565b9150509295509295909350565b6000602082840312156136d457600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610db757600080fd5b60006020828403121561370b57600080fd5b8135610153816136eb565b634e487b7160e01b600052601260045260246000fd5b60008261373b5761373b613716565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156116d5576116d5613740565b818103818111156116d5576116d5613740565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016116d5828461377c565b60006020828403121561381b57600080fd5b5051919050565b80820281158282048414176116d5576116d5613740565b60008060006060848603121561384e57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611ade57611ade613740565b6001600160801b03818116838216019080821115611ade57611ade613740565b8181036000831280158383131683831282161715611ade57611ade613740565b6001600160801b03828116828216039080821115611ade57611ade613740565b60006102a0820190506138fb82855161377c565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561397057600080fd5b505080516020909101519092909150565b6000600160ff1b820161399657613996613740565b5060000390565b6000808335601e198436030181126139b457600080fd5b83018035915067ffffffffffffffff8211156139cf57600080fd5b60200191503681900382131561181557600080fd5b600080604083850312156139f757600080fd5b825191506020830151613a09816136eb565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715613a5357613a53613a14565b604052919050565b600067ffffffffffffffff821115613a7557613a75613a14565b5060051b60200190565b600082601f830112613a9057600080fd5b81516020613aa5613aa083613a5b565b613a2a565b82815260059290921b84018101918181019086841115613ac457600080fd5b8286015b848110156124f35780518352918301918301613ac8565b600080600060608486031215613af457600080fd5b835167ffffffffffffffff80821115613b0c57600080fd5b818601915086601f830112613b2057600080fd5b81516020613b30613aa083613a5b565b82815260059290921b8401810191818101908a841115613b4f57600080fd5b8286015b84811015613b8757805186811115613b6b5760008081fd5b613b798d86838b0101613a7f565b845250918301918301613b53565b5091890151919750909350505080821115613ba157600080fd5b50613bae86828701613a7f565b925050604084015190509250925092565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116d5576116d5613740565b600081600f0b60016001607f1b03198103613c0957613c09613740565b60000392915050565b60008060008060808587031215613c2857600080fd5b8451935060208501519250604085015191506060850151613c48816136eb565b939692955090935050565b600060208284031215613c6557600080fd5b8151610153816136eb565b600082613c7f57613c7f613716565b600160ff1b821460001984141615613c9957613c99613740565b50059056fea26469706673582212203a516af44af62947d940d92611bb7584d81d41a03c09dc60a55fbb65e4c2a4f964736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
