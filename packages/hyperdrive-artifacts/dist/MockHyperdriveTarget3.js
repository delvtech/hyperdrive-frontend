export const MockHyperdriveTarget3 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620044f9380380620044f98339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051614025620004d4600039600050506000505060008181610495015281816104c401526104f101526000818161032e0152818161073c01528181610c1a01526119280152600081816108e9015281816109d401528181610a6701528181610b2f01528181611902015281816124e60152818161254901528181612844015281816128800152612a7601526000818161038f0152818161095901528181610e82015281816118dc01528181612de60152612e71015260006120eb01526000612246015260008181611105015261221a015260005050600081816103d1015281816109ac01528181610ea3015261194e0152600081816103b00152818161046a015281816109860152818161103d015261306f01526000818161028001528181610dd901528181610ed501528181610f5c01528181610fbd0152610ff5015260005050600081816116dd01528181611de001528181611e2901528181612be401528181612c2d01528181612cbf01528181612d4001528181612edf01528181612f6001528181613272015281816132bb01528181613396015281816134420152818161352e01526135da01526140256000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613ae8565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613b38565b61011a565b005b6100be6100b9366004613b5a565b610128565b604051908152602001610080565b6100be6100da366004613ae8565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613ae8565b61015a565b60008061010d858585610168565b915091505b935093915050565b6101248282610229565b5050565b600061013786868686866102e8565b90505b95945050505050565b6000610150848484610893565b90505b9392505050565b60008061010d858585610c04565b600080610173610d57565b61017c83610d81565b6000610186610dba565b905061019b610193610dd2565b826004610e08565b506101a9338783888861139d565b90935091506101bb6020850185613bbe565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8486856101f960408b0160208c01613bf5565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610231610d57565b600061023b610dba565b6000848152600760205260409020600101549091506001600160801b03161561026f5761026881836114e0565b50506102de565b6000610279610dd2565b90506102a57f000000000000000000000000000000000000000000000000000000000000000085613c28565b1515806102b157508381105b156102cf5760405163ecd29e8160e01b815260040160405180910390fd5b6102da848385610e08565b5050505b6101246001600055565b60006102f2610d57565b600554610100900460ff161561031b576040516321081abf60e01b815260040160405180910390fd5b6103236116db565b61032c82610d81565b7f000000000000000000000000000000000000000000000000000000000000000086101561036d5760405163211ddda360e11b815260040160405180910390fd5b60006103f561037a611747565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611768565b90508481108061040457508381115b1561042257604051633b61151160e11b815260040160405180910390fd5b60008061042f898661178e565b91509150600061043d610dd2565b905061044b81836004610e08565b5060008181526007602052604081205461048e906001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611867565b90506104ba7f000000000000000000000000000000000000000000000000000000000000000082613c52565b85118061051957507f00000000000000000000000000000000000000000000000000000000000000008111801561051957506105167f000000000000000000000000000000000000000000000000000000000000000082613c65565b85105b1561053757604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610583916001600160801b0390911690613c65565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105be908390613c52565b905060008060006105ce87611893565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610608908490600401613cf6565b602060405180830381865af4158015610625573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106499190613d05565b915061065c610657896119cd565b6119fb565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106be908490600401613cf6565b602060405180830381865af41580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190613d05565b9250818310156107225760405163184d952160e11b815260040160405180910390fd5b61073884836107318187613c65565b9190611a21565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561077b5760405163211ddda360e11b815260040160405180910390fd5b508d8d610788828c611a3f565b10156107a75760405163c972651760e01b815260040160405180910390fd5b6107bf60006107b960208e018e613bbe565b8c611a54565b60006107ca88611afd565b9050806107ea57604051638bdf918d60e01b815260040160405180910390fd5b60008515610801576107fc8487611a3f565b610804565b60005b90508c6108146020820182613bbe565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e868d6108516040870160208801613bf5565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a250505050505050505050505061013a6001600055565b600061089d610d57565b6108a56116db565b6108ae82610d81565b60055460ff16156108d257604051637983c05160e01b815260040160405180910390fd5b6000806108df868561178e565b909250905061090f7f00000000000000000000000000000000000000000000000000000000000000006002613d1e565b82101561092f57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5f9190613d35565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a908484611b0a565b1015610aaf5760405163216f4ab160e21b815260040160405180910390fd5b610ab883611b30565b600180546001600160801b0319166001600160801b0392909216919091179055610ae182611b5a565b600380546001600160801b0319166001600160801b0392909216919091179055610b0a81611b30565b600180546001600160801b03928316600160801b029216919091179055610b536000807f0000000000000000000000000000000000000000000000000000000000000000611a54565b610b6b6000610b6560208a018a613bbe565b88611a54565b610b7e610b76610dd2565b856004610e08565b50610b8c6020880188613bbe565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952878b87610bc960408d0160208e01613bf5565b6040805194855260208501939093529183015215156060820152608081018b905260a00160405180910390a250505050506101536001600055565b600080610c0f610d57565b610c1883610d81565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c595760405163211ddda360e11b815260040160405180910390fd5b6000610c63610dba565b9050610c70610193610dd2565b50610c7d60003388611b96565b610c92600360f81b610b656020870187613bbe565b6000610cad610ca46020870187613bbe565b8884898961139d565b9094509050610cbc8188613c65565b92506000610cc983611c67565b509050610cd96020870187613bbe565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a8887610d1760408d0160208e01613bf5565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610d7a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610d906020830183613bbe565b6001600160a01b031603610db75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dcd670de0b6b3a7640000611dc5565b905090565b6000610dfe7f000000000000000000000000000000000000000000000000000000000000000042613c28565b610dcd9042613c65565b600083815260076020526040812060018101546001600160801b0316151580610e3057504285115b15610e4957600101546001600160801b03169050610153565b6000806000610e56610dd2565b9050808803610ece57869250610ec7610e6d611747565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ec0565b9150610f8a565b6000610efa7f00000000000000000000000000000000000000000000000000000000000000008a613c52565b90505b818103610f1557879350610f12610e6d611747565b92505b6000818152600760205260409020600101546001600160801b031693508315610f57576000818152600760205260409020546001600160801b03169250610f88565b610f817f000000000000000000000000000000000000000000000000000000000000000082613c52565b9050610efd565b505b610f9383611b30565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fe9610fe27f00000000000000000000000000000000000000000000000000000000000000008a613c65565b8984611ed7565b6110278861102161101a7f000000000000000000000000000000000000000000000000000000000000000083613c52565b4290612015565b84611ed7565b6110308761202a565b50600090506007816110627f00000000000000000000000000000000000000000000000000000000000000008c613c65565b815260208101919091526040016000908120600101546001600160801b0316915061108e60028b6121ce565b6000818152600e60205260408120549192508b8b83156111d457600192506000806110bd86898d866000612203565b9150915080600b60008282546110d39190613c52565b909155506110ef9050866000846110e9816119cd565b886122d2565b6110f98183613c52565b915061112986838a8e877f000000000000000000000000000000000000000000000000000000000000000061244c565b915061113d6111388385612490565b6124a5565b6005805460029061115e9084906201000090046001600160701b0316613d63565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061118b82611b30565b600580546010906111ad908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e16001846121ce565b6000818152600e602052604090205490915080156112f0576001945060008061120e838b8f886001612203565b9150915080600b60008282546112249190613c52565b9091555061124090508360008461123a816119cd565b8a6124cf565b61124a8183613c65565b91506112596111388387612490565b6005805460029061127a9084906201000090046001600160701b0316613d63565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112a782611b30565b600580546010906112c9908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113285761131c611302876119cd565b61130b836119cd565b6113159190613da3565b60006126c0565b611326838f6114e0565b505b600061133384611c67565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113a985611afd565b505060065485906001600160801b0316808211156113ce57806001600160801b031691505b816000036113e35760008092509250506114d6565b6113f2600360f81b8984611b96565b6006546000906114189084906001600160801b03600160801b9091048116908516611a21565b905061142383611b30565b61142d9083613dc3565b600680546001600160801b0319166001600160801b039290921691909117905561145681611b30565b60068054601090611478908490600160801b90046001600160801b0316613dc3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a7818887612773565b93506114b3868461280d565b8410156114d35760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161152b916001600160801b031690613c65565b90508060000361153f5760019150506116d5565b600061154a85612822565b90508060000361155f576001925050506116d5565b60008061156d8385896128be565b91509150806115835760009450505050506116d5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016115bf929190613de3565b6040805180830381865af41580156115db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ff9190613e59565b9150915061161d61160f826119cd565b61161890613e7d565b612a32565b92508261163357600096505050505050506116d5565b61163c82611b30565b600680546000906116579084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168481611b30565b600680546010906116a6908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061172757503415155b1561174557604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610dcd916001600160801b0390911690600f0b611b0a565b60008061177787878786611ec0565b90506117838185611867565b979650505050505050565b600080806117a26040850160208601613bf5565b156117c7576117bd856117b86040870187613e99565b612bc8565b90935090506117e3565b50346117df856117da6040870187613e99565b612e54565b8492505b6117eb610dba565b9150801561185e57604051600090339083908381818185875af1925050503d8060008114611835576040519150601f19603f3d011682016040523d82523d6000602084013e61183a565b606091505b505090508061185c576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361187b84846301e13380612ffe565b61188d85670de0b6b3a7640000613c65565b90611a3f565b61189b613a23565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119939116613024565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926119c592900416613024565b905292915050565b60006001600160ff1b038211156119f75760405163396ea70160e11b815260040160405180910390fd5b5090565b611a0481612a32565b610db757604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a3857600080fd5b5091020490565b600061015383670de0b6b3a764000084611a21565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611a86908490613c52565b90915550506000838152600e602052604081208054839290611aa9908490613c52565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006116d58260046114e0565b600080611b17848461309a565b909250905080611b2957611b296130d6565b5092915050565b60006001600160801b038211156119f757604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611b78575060016001607f1b0382135b156119f75760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611bd957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611c1c908490613c65565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611af0565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611c9087611893565b6040518263ffffffff1660e01b8152600401611cac9190613cf6565b6040805180830381865af4158015611cc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cec9190613ee0565b9150915080611d02575060009485945092505050565b6000808611611d12576000611d1c565b611d1c8387612490565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611d879190613c52565b611d919190613c65565b905080600003611daa5750600096879650945050505050565b6000611db68383611a3f565b98600198509650505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611e14575047611e9f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611e78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e9c9190613d05565b90505b601254600003611eb0576000610153565b6012546101539084908390611a21565b600061013a82611ed1858888611a21565b906130ef565b600083815260076020526040902054600160801b90046001600160801b0316808303611f035750505050565b6000848152600760205260408120546001600160801b031690819003611f5d57611f2c83611b30565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611fdb565b611fae611fa9670de0b6b3a7640000611f768886613c65565b611f809190613d1e565b85670de0b6b3a7640000611f94878a613c65565b611f9e9190613d1e565b859291906001613164565b611b30565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611fe484611b30565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120245782610153565b50919050565b600554600090819061204d908490600160801b90046001600160801b0316612490565b6005546201000090046001600160701b031692509050818111156121c95760006120778383613c65565b9050612086611fa98286613202565b600580546010906120a8908490600160801b90046001600160801b0316613dc3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006120e18583611a3f90919063ffffffff16565b9050600061210f827f0000000000000000000000000000000000000000000000000000000000000000612490565b905080600b60008282546121239190613c52565b9091555061213390508183613c65565b915061213e82611b30565b600180546000906121599084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061218682613217565b6003805460009061219b908490600f0b613f10565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121f85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122108785611a3f565b9150600061223e837f0000000000000000000000000000000000000000000000000000000000000000612490565b905061226a817f0000000000000000000000000000000000000000000000000000000000000000612490565b9150831561228d5761227c8282613c65565b6122869084613c65565b92506122a4565b6122978282613c65565b6122a19084613c52565b92505b868610156122c7576122b7838789611a21565b92506122c4828789611a21565b91505b509550959350505050565b600354600160801b90046001600160801b031661231b611fa9826122fe670de0b6b3a764000086613d1e565b600454600160801b90046001600160801b031691908a6000613164565b600480546001600160801b03928316600160801b02921691909117905561234186611b30565b61234b9082613dc3565b600380546001600160801b03928316600160801b02921691909117905561237184611b30565b6001805460009061238c9084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123b983611b5a565b600380546000906123ce908490600f0b613f10565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506123fe85611b30565b60018054601090612420908490600160801b90046001600160801b0316613dc3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061245e8461188d8a888a611a21565b905061246b888486611a21565b6124759082613c52565b9050868111156124855786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a21565b60006001600160701b038211156119f75760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061251157507f000000000000000000000000000000000000000000000000000000000000000061250f8583613c65565b105b1561251e5761251e6130d6565b6003549084900390600f0b6125338482613da3565b90508361253f866119cd565b13801561257457507f00000000000000000000000000000000000000000000000000000000000000006125728383611b0a565b105b15612581576125816130d6565b600254600160801b90046001600160801b03166125c3611fa9826125ad670de0b6b3a764000088613d1e565b6004546001600160801b031691908c6000613164565b600480546001600160801b0319166001600160801b03929092169190911790556125ed8882613c65565b90506125f881611b30565b600280546001600160801b03928316600160801b02921691909117905561261e83611b30565b600180546001600160801b0319166001600160801b039290921691909117905561264782611b5a565b600380546001600160801b0319166001600160801b039290921691909117905561267087611b30565b60018054601090612692908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006126e96126cf8483613241565b6126da846000613241565b6126e49190613da3565b611b5a565b9050600081600f0b131561273e57600280548291906000906127159084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561276e5761275381613f3d565b600280546000906127159084906001600160801b0316613dc3565b505050565b6000806127808585612490565b905061278b81613257565b94508460000361279f576000915050610153565b6127af6040840160208501613bf5565b156127de576127d7856127c56020860186613bbe565b6127d26040870187613e99565b613340565b9150612805565b612801856127ef6020860186613bbe565b6127fc6040870187613e99565b6134da565b8491505b509392505050565b60006101538383670de0b6b3a7640000612ffe565b600254600090819061283d906001600160801b031684613202565b90506128697f000000000000000000000000000000000000000000000000000000000000000082613c52565b6001546001600160801b03161115612024576001547f0000000000000000000000000000000000000000000000000000000000000000906128b49083906001600160801b0316613c65565b6101539190613c65565b6128c6613a84565b6000806128d284611893565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161290d9190613cf6565b6040805180830381865af4158015612929573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061294d9190613ee0565b93509050826129625750600091506101129050565b600061298961298484610160015185610140015161249090919063ffffffff16565b6119cd565b6129a961298485610120015186610100015161280d90919063ffffffff16565b6129b39190613da3565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ae9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0d9190613f63565b935093509350935080612b295750600098975050505050505050565b868414612b5a57612b3984611b30565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612b8b57612b6a83611b5a565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612bb957612b9b82611b30565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612c18575047612ca3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612c7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ca09190613d05565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612d1e5787341015612d0d576040516312171d8360e31b815260040160405180910390fd5b612d178834613c65565b9050612db8565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612d91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612db59190613fa4565b91505b81612dd6576040516312171d8360e31b815260040160405180910390fd5b601254600003612e1b57612e0a887f0000000000000000000000000000000000000000000000000000000000000000611a3f565b601281905594509250610112915050565b601254600090612e2d908a9086611a21565b90508060126000828254612e419190613c52565b9091555090955090935061011292505050565b6000612e5f84611dc5565b9050601254600003612e9d57612e95817f0000000000000000000000000000000000000000000000000000000000000000611a3f565b601255612ec3565b6000612ea882613257565b90508060126000828254612ebc9190613c52565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612f3e5782341015612f2d576040516312171d8360e31b815260040160405180910390fd5b612f378334613c65565b9050612fd8565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612fb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fd59190613fa4565b91505b81612ff6576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600082600019048411830215820261301557600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000613038610dd2565b6130429190613d1e565b905080831161305257600061305c565b61305c8184613c65565b9150610153613093670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d1e565b8390611a3f565b6000806000836130a9866119cd565b6130b39190613da3565b905060008112156130cb576000809250925050611860565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000816000036131085750670de0b6b3a76400006116d5565b82600003613118575060006116d5565b6000613123836119cd565b90506000613138613133866119cd565b613668565b905081810261314f670de0b6b3a764000082613fc1565b905061315a8161388e565b9695505050505050565b60008260000361317557508461013a565b81156131c8576131a66131888487613c52565b6131928587612490565b61319c888a612490565b61188d9190613c52565b905060006131b48588612015565b9050808210156131c2578091505b5061013a565b8285036131d75750600061013a565b6101376131e48487613c65565b6131ee858761280d565b6131f8888a612490565b61188d9190613c65565b600061015383670de0b6b3a764000084612ffe565b600060016001607f1b038211156119f75760405163a5353be560e01b815260040160405180910390fd5b60008183136132505781610153565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132a6575047613331565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561330a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061332e9190613d05565b90505b60125461015390849083611a21565b600060125485116133515784613355565b6012545b9450600061336286611dc5565b905085601260008282546133769190613c65565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161341c576040516001600160a01b038716908390600081818185875af1925050503d806000811461340c576040519150601f19603f3d011682016040523d82523d6000602084013e613411565b606091505b5050809150506134b2565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561348b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134af9190613fa4565b90505b806134d0576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116134e957836134ed565b6012545b935060006134fa85611dc5565b9050846012600082825461350e9190613c65565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016135b4576040516001600160a01b038616908390600081818185875af1925050503d80600081146135a4576040519150601f19603f3d011682016040523d82523d6000602084013e6135a9565b606091505b50508091505061364a565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015613623573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136479190613fa4565b90505b80612ff6576040516312171d8360e31b815260040160405180910390fd5b600080821361368a5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061370d9084901c6119cd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136138a957506000919050565b680755bf798b4a1bf1e582126138d2576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061315a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119cd565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613a98613a23565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561202457600080fd5b600080600060608486031215613afd57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613b2257600080fd5b613b2e86828701613ad6565b9150509250925092565b60008060408385031215613b4b57600080fd5b50508035926020909101359150565b600080600080600060a08688031215613b7257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613ba557600080fd5b613bb188828901613ad6565b9150509295509295909350565b600060208284031215613bd057600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610db757600080fd5b600060208284031215613c0757600080fd5b813561015381613be7565b634e487b7160e01b600052601260045260246000fd5b600082613c3757613c37613c12565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156116d5576116d5613c3c565b818103818111156116d5576116d5613c3c565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016116d58284613c78565b600060208284031215613d1757600080fd5b5051919050565b80820281158282048414176116d5576116d5613c3c565b600080600060608486031215613d4a57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611b2957611b29613c3c565b6001600160801b03818116838216019080821115611b2957611b29613c3c565b8181036000831280158383131683831282161715611b2957611b29613c3c565b6001600160801b03828116828216039080821115611b2957611b29613c3c565b60006102a082019050613df7828551613c78565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e6c57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e9257613e92613c3c565b5060000390565b6000808335601e19843603018112613eb057600080fd5b83018035915067ffffffffffffffff821115613ecb57600080fd5b60200191503681900382131561186057600080fd5b60008060408385031215613ef357600080fd5b825191506020830151613f0581613be7565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116d5576116d5613c3c565b600081600f0b60016001607f1b03198103613f5a57613f5a613c3c565b60000392915050565b60008060008060808587031215613f7957600080fd5b8451935060208501519250604085015191506060850151613f9981613be7565b939692955090935050565b600060208284031215613fb657600080fd5b815161015381613be7565b600082613fd057613fd0613c12565b600160ff1b821460001984141615613fea57613fea613c3c565b50059056fea2646970667358221220a0d7ee5a8a8f762e46666339c3540968bf0085a9cfe8d1571a55db9e90d1efab64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
