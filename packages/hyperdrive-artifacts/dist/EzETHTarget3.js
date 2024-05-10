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
    bytecode: '0x6102a06040523480156200001257600080fd5b50604051620042eb380380620042eb833981016040819052620000359162000276565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e05260e0808801516102005261012080890151909252610100808901519091526101408089015190915291870180515190915280518301519091528051604090810151610160908152915160609081015161018090815282890151871661022052908801516102405291870151600a80549187166001600160a01b03199283161790559187015160088054918716918416919091179055928601516009805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018791906200039f565b6001600160a01b03166102805250620003c6915050565b6040516101e081016001600160401b0381118282101715620001d057634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ec57600080fd5b50565b8051620001fc81620001d6565b919050565b6000608082840312156200021457600080fd5b604051608081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102608112156200028c57600080fd5b610240808212156200029d57600080fd5b620002a76200019e565b9150620002b485620001ef565b8252620002c460208601620001ef565b6020830152620002d760408601620001ef565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000342818701620001ef565b9083015261018062000356868201620001ef565b908301526101a06200036a868201620001ef565b908301526101c06200037f8787830162000201565b818401525081935062000394818601620001ef565b925050509250929050565b600060208284031215620003b257600080fd5b8151620003bf81620001d6565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613d736200057860003960008181611f51015261311f015260008181611e1e0152612fec01526000505060005050600081816104a9015281816104d801526105050152600081816103420152818161075001528181610c4e015261197c01526000818161090d015281816109f801528181610a8b01528181610b5301528181611956015281816125f301528181612656015281816129510152818161298d0152612b830152600081816103a30152818161097d01528181610eca0152611930015260006121f80152600061235301526000818161114d0152612327015260005050600081816103e5015281816109d001528181610eeb01526119a20152600081816103c40152818161047e015281816109aa015281816110850152612dff01526000818161029401528181610e2101528181610f1d01528181610fa401528181611005015261103d015260008181611eaa01528181612d13015281816130780152613197015260005050613d736000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a36600461368b565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a43660046136db565b61011a565b005b6100be6100b93660046136fd565b610128565b604051908152602001610080565b6100be6100da36600461368b565b610143565b3480156100eb57600080fd5b5061006f6100fa36600461368b565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261023d565b5050565b600061013786868686866102fc565b90505b95945050505050565b60006101508484846108b7565b90505b9392505050565b60008061010d858585610c38565b600080610173610d9f565b61017c83610dc9565b6000610186610e02565b905061019b610193610e1a565b826004610e50565b506101a933878388886113e5565b90935091506101bb6020850185613761565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf846101f287868a611528565b6101fd88878b611557565b61020d60408b0160208c01613798565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610245610d9f565b600061024f610e02565b6000848152600760205260409020600101549091506001600160801b0316156102835761027c818361157f565b50506102f2565b600061028d610e1a565b90506102b97f0000000000000000000000000000000000000000000000000000000000000000856137cb565b1515806102c557508381105b156102e35760405163ecd29e8160e01b815260040160405180910390fd5b6102ee848385610e50565b5050505b6101246001600055565b6000610306610d9f565b600554610100900460ff161561032f576040516321081abf60e01b815260040160405180910390fd5b61033761177a565b61034082610dc9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103815760405163211ddda360e11b815260040160405180910390fd5b600061040961038e61179b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117bc565b90508481108061041857508381115b1561043657604051633b61151160e11b815260040160405180910390fd5b60008061044389866117e2565b915091506000610451610e1a565b905061045f81836004610e50565b506000818152600760205260408120546104a2906001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006118bb565b90506104ce7f0000000000000000000000000000000000000000000000000000000000000000826137f5565b85118061052d57507f00000000000000000000000000000000000000000000000000000000000000008111801561052d575061052a7f000000000000000000000000000000000000000000000000000000000000000082613808565b85105b1561054b57604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610597916001600160801b0390911690613808565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105d29083906137f5565b905060008060006105e2876118e7565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061061c908490600401613899565b602060405180830381865af4158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d91906138a8565b915061067061066b89611a21565b611a4f565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106d2908490600401613899565b602060405180830381865af41580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071391906138a8565b9250818310156107365760405163184d952160e11b815260040160405180910390fd5b61074c84836107458187613808565b9190611a75565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561078f5760405163211ddda360e11b815260040160405180910390fd5b508d8d61079c828c611a93565b10156107bb5760405163c972651760e01b815260040160405180910390fd5b6107d360006107cd60208e018e613761565b8c611aa8565b60006107de88611b51565b9050806107fe57604051638bdf918d60e01b815260040160405180910390fd5b60008515610815576108108487611a93565b610818565b60005b90508c6000610828858c84611528565b90506108376020830183613761565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868f838f6108746040880160208901613798565b60408051948552602085019390935291830152151560608201526080810186905260a00160405180910390a25050505050505050505050505061013a6001600055565b60006108c1610d9f565b6108c961177a565b6108d282610dc9565b60055460ff16156108f657604051637983c05160e01b815260040160405180910390fd5b60008061090386856117e2565b90925090506109337f000000000000000000000000000000000000000000000000000000000000000060026138c1565b82101561095357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8391906138d8565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ab48484611b5e565b1015610ad35760405163216f4ab160e21b815260040160405180910390fd5b610adc83611b84565b600180546001600160801b0319166001600160801b0392909216919091179055610b0582611bae565b600380546001600160801b0319166001600160801b0392909216919091179055610b2e81611b84565b600180546001600160801b03928316600160801b029216919091179055610b776000807f0000000000000000000000000000000000000000000000000000000000000000611aa8565b610b8f6000610b8960208a018a613761565b88611aa8565b610ba2610b9a610e1a565b856004610e50565b506000610bb08a868a611528565b9050610bbf6020890189613761565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952888389610bfc60408e0160208f01613798565b6040805194855260208501939093529183015215156060820152608081018c905260a00160405180910390a25050505050506101536001600055565b600080610c43610d9f565b610c4c83610dc9565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8d5760405163211ddda360e11b815260040160405180910390fd5b6000610c97610e02565b9050610ca4610193610e1a565b50610cb160003388611bea565b610cc6600360f81b610b896020870187613761565b6000610ce1610cd86020870187613761565b888489896113e5565b9094509050610cf08188613808565b92506000610cfd83611cbb565b509050610d0d6020870187613761565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a610d4489888c611528565b610d4f8a898d611557565b610d5f60408d0160208e01613798565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610dc257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dd86020830183613761565b6001600160a01b031603610dff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610e15670de0b6b3a7640000611e19565b905090565b6000610e467f0000000000000000000000000000000000000000000000000000000000000000426137cb565b610e159042613808565b600083815260076020526040812060018101546001600160801b0316151580610e7857504285115b15610e9157600101546001600160801b03169050610153565b6000806000610e9e610e1a565b9050808803610f1657869250610f0f610eb561179b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fcd565b9150610fd2565b6000610f427f00000000000000000000000000000000000000000000000000000000000000008a6137f5565b90505b818103610f5d57879350610f5a610eb561179b565b92505b6000818152600760205260409020600101546001600160801b031693508315610f9f576000818152600760205260409020546001600160801b03169250610fd0565b610fc97f0000000000000000000000000000000000000000000000000000000000000000826137f5565b9050610f45565b505b610fdb83611b84565b6001850180546001600160801b0319166001600160801b039290921691909117905561103161102a7f00000000000000000000000000000000000000000000000000000000000000008a613808565b8984611fe4565b61106f886110696110627f0000000000000000000000000000000000000000000000000000000000000000836137f5565b4290612122565b84611fe4565b61107887612137565b50600090506007816110aa7f00000000000000000000000000000000000000000000000000000000000000008c613808565b815260208101919091526040016000908120600101546001600160801b031691506110d660028b6122db565b6000818152600e60205260408120549192508b8b831561121c576001925060008061110586898d866000612310565b9150915080600b600082825461111b91906137f5565b9091555061113790508660008461113181611a21565b886123df565b61114181836137f5565b915061117186838a8e877f0000000000000000000000000000000000000000000000000000000000000000612559565b9150611185611180838561259d565b6125b2565b600580546002906111a69084906201000090046001600160701b0316613906565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111d382611b84565b600580546010906111f5908490600160801b90046001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006112296001846122db565b6000818152600e602052604090205490915080156113385760019450600080611256838b8f886001612310565b9150915080600b600082825461126c91906137f5565b9091555061128890508360008461128281611a21565b8a6125dc565b6112928183613808565b91506112a1611180838761259d565b600580546002906112c29084906201000090046001600160701b0316613906565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112ef82611b84565b60058054601090611311908490600160801b90046001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113705761136461134a87611a21565b61135383611a21565b61135d9190613946565b60006127cd565b61136e838f61157f565b505b600061137b84611cbb565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113f185611b51565b505060065485906001600160801b03168082111561141657806001600160801b031691505b8160000361142b57600080925092505061151e565b61143a600360f81b8984611bea565b6006546000906114609084906001600160801b03600160801b9091048116908516611a75565b905061146b83611b84565b6114759083613966565b600680546001600160801b0319166001600160801b039290921691909117905561149e81611b84565b600680546010906114c0908490600160801b90046001600160801b0316613966565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114ef818887612880565b93506114fb868461291a565b84101561151b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600061153a6040830160208401613798565b15611546575082610153565b611550848461259d565b9050610153565b60006115696040830160208401613798565b15611578576115508484611a93565b5082610153565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916115ca916001600160801b031690613808565b9050806000036115de576001915050611774565b60006115e98561292f565b9050806000036115fe57600192505050611774565b60008061160c8385896129cb565b9150915080611622576000945050505050611774565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161165e929190613986565b6040805180830381865af415801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e91906139fc565b915091506116bc6116ae82611a21565b6116b790613a20565b612b3f565b9250826116d25760009650505050505050611774565b6116db82611b84565b600680546000906116f69084906001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061172381611b84565b60068054601090611745908490600160801b90046001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b341561179957604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610e15916001600160801b0390911690600f0b611b5e565b6000806117cb87878786611fcd565b90506117d781856118bb565b979650505050505050565b600080806117f66040850160208601613798565b1561181b576118118561180c6040870187613a3c565b612cd5565b9093509050611837565b50346118338561182e6040870187613a3c565b612cf1565b8492505b61183f610e02565b915080156118b257604051600090339083908381818185875af1925050503d8060008114611889576040519150601f19603f3d011682016040523d82523d6000602084013e61188e565b606091505b50509050806118b0576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006101536118cf84846301e13380612d8e565b6118e185670de0b6b3a7640000613808565b90611a93565b6118ef6135c6565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119e79116612db4565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611a1992900416612db4565b905292915050565b60006001600160ff1b03821115611a4b5760405163396ea70160e11b815260040160405180910390fd5b5090565b611a5881612b3f565b610dff57604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a8c57600080fd5b5091020490565b600061015383670de0b6b3a764000084611a75565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611ada9084906137f5565b90915550506000838152600e602052604081208054839290611afd9084906137f5565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061177482600461157f565b600080611b6b8484612e2a565b909250905080611b7d57611b7d612e66565b5092915050565b60006001600160801b03821115611a4b57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611bcc575060016001607f1b0382135b15611a4b5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611c2d57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611c70908490613808565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b44565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611ce4876118e7565b6040518263ffffffff1660e01b8152600401611d009190613899565b6040805180830381865af4158015611d1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d409190613a83565b9150915080611d56575060009485945092505050565b6000808611611d66576000611d70565b611d70838761259d565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611ddb91906137f5565b611de59190613808565b905080600003611dfe5750600096879650945050505050565b6000611e0a8383611a93565b98600198509650505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611e7a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611ea29190810190613b7e565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2a91906138a8565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa158015611fa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fc591906138a8565b949350505050565b600061013a82611fde858888611a75565b90612e7f565b600083815260076020526040902054600160801b90046001600160801b03168083036120105750505050565b6000848152600760205260408120546001600160801b03169081900361206a5761203983611b84565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790556120e8565b6120bb6120b6670de0b6b3a76400006120838886613808565b61208d91906138c1565b85670de0b6b3a76400006120a1878a613808565b6120ab91906138c1565b859291906001612ef4565b611b84565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b6120f184611b84565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116121315782610153565b50919050565b600554600090819061215a908490600160801b90046001600160801b031661259d565b6005546201000090046001600160701b031692509050818111156122d65760006121848383613808565b90506121936120b68286612f92565b600580546010906121b5908490600160801b90046001600160801b0316613966565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006121ee8583611a9390919063ffffffff16565b9050600061221c827f000000000000000000000000000000000000000000000000000000000000000061259d565b905080600b600082825461223091906137f5565b9091555061224090508183613808565b915061224b82611b84565b600180546000906122669084906001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061229382612fa7565b600380546000906122a8908490600f0b613c5e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156123055760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061231d8785611a93565b9150600061234b837f000000000000000000000000000000000000000000000000000000000000000061259d565b9050612377817f000000000000000000000000000000000000000000000000000000000000000061259d565b9150831561239a576123898282613808565b6123939084613808565b92506123b1565b6123a48282613808565b6123ae90846137f5565b92505b868610156123d4576123c4838789611a75565b92506123d1828789611a75565b91505b509550959350505050565b600354600160801b90046001600160801b03166124286120b68261240b670de0b6b3a7640000866138c1565b600454600160801b90046001600160801b031691908a6000612ef4565b600480546001600160801b03928316600160801b02921691909117905561244e86611b84565b6124589082613966565b600380546001600160801b03928316600160801b02921691909117905561247e84611b84565b600180546000906124999084906001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506124c683611bae565b600380546000906124db908490600f0b613c5e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061250b85611b84565b6001805460109061252d908490600160801b90046001600160801b0316613966565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061256b846118e18a888a611a75565b9050612578888486611a75565b61258290826137f5565b9050868111156125925786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a75565b60006001600160701b03821115611a4b5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061261e57507f000000000000000000000000000000000000000000000000000000000000000061261c8583613808565b105b1561262b5761262b612e66565b6003549084900390600f0b6126408482613946565b90508361264c86611a21565b13801561268157507f000000000000000000000000000000000000000000000000000000000000000061267f8383611b5e565b105b1561268e5761268e612e66565b600254600160801b90046001600160801b03166126d06120b6826126ba670de0b6b3a7640000886138c1565b6004546001600160801b031691908c6000612ef4565b600480546001600160801b0319166001600160801b03929092169190911790556126fa8882613808565b905061270581611b84565b600280546001600160801b03928316600160801b02921691909117905561272b83611b84565b600180546001600160801b0319166001600160801b039290921691909117905561275482611bae565b600380546001600160801b0319166001600160801b039290921691909117905561277d87611b84565b6001805460109061279f908490600160801b90046001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006127f66127dc8483612fd1565b6127e7846000612fd1565b6127f19190613946565b611bae565b9050600081600f0b131561284b57600280548291906000906128229084906001600160801b0316613926565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561287b5761286081613c8b565b600280546000906128229084906001600160801b0316613966565b505050565b60008061288d858561259d565b905061289881612fe7565b9450846000036128ac576000915050610153565b6128bc6040840160208501613798565b156128eb576128e4856128d26020860186613761565b6128df6040870187613a3c565b613156565b9150612912565b61290e856128fc6020860186613761565b6129096040870187613a3c565b613171565b8491505b509392505050565b60006101538383670de0b6b3a7640000612d8e565b600254600090819061294a906001600160801b031684612f92565b90506129767f0000000000000000000000000000000000000000000000000000000000000000826137f5565b6001546001600160801b03161115612131576001547f0000000000000000000000000000000000000000000000000000000000000000906129c19083906001600160801b0316613808565b6101539190613808565b6129d3613627565b6000806129df846118e7565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a1a9190613899565b6040805180830381865af4158015612a36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a5a9190613a83565b9350905082612a6f5750600091506101129050565b6000612a96612a9184610160015185610140015161259d90919063ffffffff16565b611a21565b612ab6612a9185610120015186610100015161291a90919063ffffffff16565b612ac09190613946565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c1a9190613cb1565b935093509350935080612c365750600098975050505050505050565b868414612c6757612c4684611b84565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612c9857612c7783611bae565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612cc657612ca882611b84565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612d64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d889190613cf2565b50505050565b6000826000190484118302158202612da557600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612dc8610e1a565b612dd291906138c1565b9050808311612de2576000612dec565b612dec8184613808565b9150610153612e23670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138c1565b8390611a93565b600080600083612e3986611a21565b612e439190613946565b90506000811215612e5b5760008092509250506118b4565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612e985750670de0b6b3a7640000611774565b82600003612ea857506000611774565b6000612eb383611a21565b90506000612ec8612ec386611a21565b61320b565b9050818102612edf670de0b6b3a764000082613d0f565b9050612eea81613431565b9695505050505050565b600082600003612f0557508461013a565b8115612f5857612f36612f1884876137f5565b612f22858761259d565b612f2c888a61259d565b6118e191906137f5565b90506000612f448588612122565b905080821015612f52578091505b5061013a565b828503612f675750600061013a565b610137612f748487613808565b612f7e858761291a565b612f88888a61259d565b6118e19190613808565b600061015383670de0b6b3a764000084612d8e565b600060016001607f1b03821115611a4b5760405163a5353be560e01b815260040160405180910390fd5b6000818313612fe05781610153565b5090919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015613048573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526130709190810190613b7e565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156130d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130f891906138a8565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a90606401611f84565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156131e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132049190613cf2565b5050505050565b600080821361322d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132b09084901c611a21565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361344c57506000919050565b680755bf798b4a1bf1e58212613475576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612eea74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a21565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061363b6135c6565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561213157600080fd5b6000806000606084860312156136a057600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156136c557600080fd5b6136d186828701613679565b9150509250925092565b600080604083850312156136ee57600080fd5b50508035926020909101359150565b600080600080600060a0868803121561371557600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561374857600080fd5b61375488828901613679565b9150509295509295909350565b60006020828403121561377357600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610dff57600080fd5b6000602082840312156137aa57600080fd5b81356101538161378a565b634e487b7160e01b600052601260045260246000fd5b6000826137da576137da6137b5565b500690565b634e487b7160e01b600052601160045260246000fd5b80820180821115611774576117746137df565b81810381811115611774576117746137df565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b6101808101611774828461381b565b6000602082840312156138ba57600080fd5b5051919050565b8082028115828204841417611774576117746137df565b6000806000606084860312156138ed57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611b7d57611b7d6137df565b6001600160801b03818116838216019080821115611b7d57611b7d6137df565b8181036000831280158383131683831282161715611b7d57611b7d6137df565b6001600160801b03828116828216039080821115611b7d57611b7d6137df565b60006102a08201905061399a82855161381b565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a0f57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a3557613a356137df565b5060000390565b6000808335601e19843603018112613a5357600080fd5b83018035915067ffffffffffffffff821115613a6e57600080fd5b6020019150368190038213156118b457600080fd5b60008060408385031215613a9657600080fd5b825191506020830151613aa88161378a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715613af257613af2613ab3565b604052919050565b600067ffffffffffffffff821115613b1457613b14613ab3565b5060051b60200190565b600082601f830112613b2f57600080fd5b81516020613b44613b3f83613afa565b613ac9565b82815260059290921b84018101918181019086841115613b6357600080fd5b8286015b848110156125925780518352918301918301613b67565b600080600060608486031215613b9357600080fd5b835167ffffffffffffffff80821115613bab57600080fd5b818601915086601f830112613bbf57600080fd5b81516020613bcf613b3f83613afa565b82815260059290921b8401810191818101908a841115613bee57600080fd5b8286015b84811015613c2657805186811115613c0a5760008081fd5b613c188d86838b0101613b1e565b845250918301918301613bf2565b5091890151919750909350505080821115613c4057600080fd5b50613c4d86828701613b1e565b925050604084015190509250925092565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611774576117746137df565b600081600f0b60016001607f1b03198103613ca857613ca86137df565b60000392915050565b60008060008060808587031215613cc757600080fd5b8451935060208501519250604085015191506060850151613ce78161378a565b939692955090935050565b600060208284031215613d0457600080fd5b81516101538161378a565b600082613d1e57613d1e6137b5565b600160ff1b821460001984141615613d3857613d386137df565b50059056fea2646970667358221220562f36ed23c9d6189fee153ecb296125288e4e17800f7e4989dcc84c7bd50d9f64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
