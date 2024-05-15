export const StETHTarget3 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003dbe38038062003dbe8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161393e6200048060003960005050600050506000818161048d015281816104bc01526104e90152600081816103260152818161073401528181610c0a01526118ac0152600081816108d9015281816109c401528181610a5701528181610b1f01528181611886015281816123fc0152818161245f0152818161275a01528181612796015261298c0152600081816103870152818161094901528181610e720152611860015260006120010152600061215c0152600081816110f50152612130015260005050600081816103c90152818161099c01528181610e9301526118d20152600081816103a801528181610462015281816109760152818161102d0152612cb101526000818161028001528181610dc901528181610ec501528181610f4c01528181610fad0152610fe5015260008181611d6201528181612b2a01528181612bc501528181612eb20152612f2a01526000505061393e6000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a36600461341e565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a436600461346e565b61011a565b005b6100be6100b9366004613490565b610128565b604051908152602001610080565b6100be6100da36600461341e565b610143565b3480156100eb57600080fd5b5061006f6100fa36600461341e565b61015a565b60008061010d858585610168565b915091505b935093915050565b6101248282610229565b5050565b600061013786868686866102e8565b90505b95945050505050565b600061015084848461088b565b90505b9392505050565b60008061010d858585610bf4565b600080610173610d47565b61017c83610d71565b6000610186610daa565b905061019b610193610dc2565b826004610df8565b506101a9338783888861138d565b90935091506101bb60208501856134f4565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8486856101f960408b0160208c0161352b565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610231610d47565b600061023b610daa565b6000848152600760205260409020600101549091506001600160801b03161561026f5761026881836114d0565b50506102de565b6000610279610dc2565b90506102a57f00000000000000000000000000000000000000000000000000000000000000008561355e565b1515806102b157508381105b156102cf5760405163ecd29e8160e01b815260040160405180910390fd5b6102da848385610df8565b5050505b6101246001600055565b60006102f2610d47565b600554610100900460ff161561031b576040516321081abf60e01b815260040160405180910390fd5b61032482610d71565b7f00000000000000000000000000000000000000000000000000000000000000008610156103655760405163211ddda360e11b815260040160405180910390fd5b60006103ed6103726116cb565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116ec565b9050848110806103fc57508381115b1561041a57604051633b61151160e11b815260040160405180910390fd5b6000806104278986611712565b915091506000610435610dc2565b905061044381836004610df8565b50600081815260076020526040812054610486906001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006117eb565b90506104b27f000000000000000000000000000000000000000000000000000000000000000082613588565b85118061051157507f000000000000000000000000000000000000000000000000000000000000000081118015610511575061050e7f00000000000000000000000000000000000000000000000000000000000000008261359b565b85105b1561052f57604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161057b916001600160801b039091169061359b565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105b6908390613588565b905060008060006105c687611817565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061060090849060040161362c565b602060405180830381865af415801561061d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610641919061363b565b915061065461064f89611951565b61197f565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106b690849060040161362c565b602060405180830381865af41580156106d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f7919061363b565b92508183101561071a5760405163184d952160e11b815260040160405180910390fd5b6107308483610729818761359b565b91906119a5565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107735760405163211ddda360e11b815260040160405180910390fd5b508d8d610780828c6119c3565b101561079f5760405163c972651760e01b815260040160405180910390fd5b6107b760006107b160208e018e6134f4565b8c6119d8565b60006107c288611a81565b9050806107e257604051638bdf918d60e01b815260040160405180910390fd5b600085156107f9576107f484876119c3565b6107fc565b60005b90508c61080c60208201826134f4565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e868d610849604087016020880161352b565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a250505050505050505050505061013a6001600055565b6000610895610d47565b61089e82610d71565b60055460ff16156108c257604051637983c05160e01b815260040160405180910390fd5b6000806108cf8685611712565b90925090506108ff7f00000000000000000000000000000000000000000000000000000000000000006002613654565b82101561091f57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4f919061366b565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a808484611a8e565b1015610a9f5760405163216f4ab160e21b815260040160405180910390fd5b610aa883611ab4565b600180546001600160801b0319166001600160801b0392909216919091179055610ad182611ade565b600380546001600160801b0319166001600160801b0392909216919091179055610afa81611ab4565b600180546001600160801b03928316600160801b029216919091179055610b436000807f00000000000000000000000000000000000000000000000000000000000000006119d8565b610b5b6000610b5560208a018a6134f4565b886119d8565b610b6e610b66610dc2565b856004610df8565b50610b7c60208801886134f4565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952878b87610bb960408d0160208e0161352b565b6040805194855260208501939093529183015215156060820152608081018b905260a00160405180910390a250505050506101536001600055565b600080610bff610d47565b610c0883610d71565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c495760405163211ddda360e11b815260040160405180910390fd5b6000610c53610daa565b9050610c60610193610dc2565b50610c6d60003388611b1a565b610c82600360f81b610b5560208701876134f4565b6000610c9d610c9460208701876134f4565b8884898961138d565b9094509050610cac818861359b565b92506000610cb983611beb565b509050610cc960208701876134f4565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a8887610d0760408d0160208e0161352b565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610d6a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610d8060208301836134f4565b6001600160a01b031603610da75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dbd670de0b6b3a7640000611d49565b905090565b6000610dee7f00000000000000000000000000000000000000000000000000000000000000004261355e565b610dbd904261359b565b600083815260076020526040812060018101546001600160801b0316151580610e2057504285115b15610e3957600101546001600160801b03169050610153565b6000806000610e46610dc2565b9050808803610ebe57869250610eb7610e5d6116cb565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611dd6565b9150610f7a565b6000610eea7f00000000000000000000000000000000000000000000000000000000000000008a613588565b90505b818103610f0557879350610f02610e5d6116cb565b92505b6000818152600760205260409020600101546001600160801b031693508315610f47576000818152600760205260409020546001600160801b03169250610f78565b610f717f000000000000000000000000000000000000000000000000000000000000000082613588565b9050610eed565b505b610f8383611ab4565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fd9610fd27f00000000000000000000000000000000000000000000000000000000000000008a61359b565b8984611ded565b6110178861101161100a7f000000000000000000000000000000000000000000000000000000000000000083613588565b4290611f2b565b84611ded565b61102087611f40565b50600090506007816110527f00000000000000000000000000000000000000000000000000000000000000008c61359b565b815260208101919091526040016000908120600101546001600160801b0316915061107e60028b6120e4565b6000818152600e60205260408120549192508b8b83156111c457600192506000806110ad86898d866000612119565b9150915080600b60008282546110c39190613588565b909155506110df9050866000846110d981611951565b886121e8565b6110e98183613588565b915061111986838a8e877f0000000000000000000000000000000000000000000000000000000000000000612362565b915061112d61112883856123a6565b6123bb565b6005805460029061114e9084906201000090046001600160701b0316613699565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061117b82611ab4565b6005805460109061119d908490600160801b90046001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111d16001846120e4565b6000818152600e602052604090205490915080156112e057600194506000806111fe838b8f886001612119565b9150915080600b60008282546112149190613588565b9091555061123090508360008461122a81611951565b8a6123e5565b61123a818361359b565b915061124961112883876123a6565b6005805460029061126a9084906201000090046001600160701b0316613699565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061129782611ab4565b600580546010906112b9908490600160801b90046001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113185761130c6112f287611951565b6112fb83611951565b61130591906136d9565b60006125d6565b611316838f6114d0565b505b600061132384611beb565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b60008061139985611a81565b505060065485906001600160801b0316808211156113be57806001600160801b031691505b816000036113d35760008092509250506114c6565b6113e2600360f81b8984611b1a565b6006546000906114089084906001600160801b03600160801b90910481169085166119a5565b905061141383611ab4565b61141d90836136f9565b600680546001600160801b0319166001600160801b039290921691909117905561144681611ab4565b60068054601090611468908490600160801b90046001600160801b03166136f9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611497818887612689565b93506114a38684612723565b8410156114c35760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161151b916001600160801b03169061359b565b90508060000361152f5760019150506116c5565b600061153a85612738565b90508060000361154f576001925050506116c5565b60008061155d8385896127d4565b91509150806115735760009450505050506116c5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016115af929190613719565b6040805180830381865af41580156115cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ef919061378f565b9150915061160d6115ff82611951565b611608906137b3565b612948565b92508261162357600096505050505050506116c5565b61162c82611ab4565b600680546000906116479084906001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061167481611ab4565b60068054601090611696908490600160801b90046001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600154600354600091610dbd916001600160801b0390911690600f0b611a8e565b6000806116fb87878786611dd6565b905061170781856117eb565b979650505050505050565b60008080611726604085016020860161352b565b1561174b576117418561173c60408701876137cf565b612ade565b9093509050611767565b50346117638561175e60408701876137cf565b612ba3565b8492505b61176f610daa565b915080156117e257604051600090339083908381818185875af1925050503d80600081146117b9576040519150601f19603f3d011682016040523d82523d6000602084013e6117be565b606091505b50509050806117e0576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006101536117ff84846301e13380612c40565b61181185670de0b6b3a764000061359b565b906119c3565b61181f613359565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119179116612c66565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261194992900416612c66565b905292915050565b60006001600160ff1b0382111561197b5760405163396ea70160e11b815260040160405180910390fd5b5090565b61198881612948565b610da757604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026119bc57600080fd5b5091020490565b600061015383670de0b6b3a7640000846119a5565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611a0a908490613588565b90915550506000838152600e602052604081208054839290611a2d908490613588565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006116c58260046114d0565b600080611a9b8484612cdc565b909250905080611aad57611aad612d18565b5092915050565b60006001600160801b0382111561197b57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611afc575060016001607f1b0382135b1561197b5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611b5d57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611ba090849061359b565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611a74565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611c1487611817565b6040518263ffffffff1660e01b8152600401611c30919061362c565b6040805180830381865af4158015611c4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c709190613816565b9150915080611c86575060009485945092505050565b6000808611611c96576000611ca0565b611ca083876123a6565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611d0b9190613588565b611d15919061359b565b905080600003611d2e5750600096879650945050505050565b6000611d3a83836119c3565b98600198509650505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa158015611db2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c5919061363b565b600061013a82611de78588886119a5565b90612d31565b600083815260076020526040902054600160801b90046001600160801b0316808303611e195750505050565b6000848152600760205260408120546001600160801b031690819003611e7357611e4283611ab4565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611ef1565b611ec4611ebf670de0b6b3a7640000611e8c888661359b565b611e969190613654565b85670de0b6b3a7640000611eaa878a61359b565b611eb49190613654565b859291906001612da6565b611ab4565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611efa84611ab4565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b6000818311611f3a5782610153565b50919050565b6005546000908190611f63908490600160801b90046001600160801b03166123a6565b6005546201000090046001600160701b031692509050818111156120df576000611f8d838361359b565b9050611f9c611ebf8286612e44565b60058054601090611fbe908490600160801b90046001600160801b03166136f9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611ff785836119c390919063ffffffff16565b90506000612025827f00000000000000000000000000000000000000000000000000000000000000006123a6565b905080600b60008282546120399190613588565b909155506120499050818361359b565b915061205482611ab4565b6001805460009061206f9084906001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061209c82612e59565b600380546000906120b1908490600f0b613846565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561210e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061212687856119c3565b91506000612154837f00000000000000000000000000000000000000000000000000000000000000006123a6565b9050612180817f00000000000000000000000000000000000000000000000000000000000000006123a6565b915083156121a357612192828261359b565b61219c908461359b565b92506121ba565b6121ad828261359b565b6121b79084613588565b92505b868610156121dd576121cd8387896119a5565b92506121da8287896119a5565b91505b509550959350505050565b600354600160801b90046001600160801b0316612231611ebf82612214670de0b6b3a764000086613654565b600454600160801b90046001600160801b031691908a6000612da6565b600480546001600160801b03928316600160801b02921691909117905561225786611ab4565b61226190826136f9565b600380546001600160801b03928316600160801b02921691909117905561228784611ab4565b600180546000906122a29084906001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506122cf83611ade565b600380546000906122e4908490600f0b613846565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061231485611ab4565b60018054601090612336908490600160801b90046001600160801b03166136f9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612374846118118a888a6119a5565b90506123818884866119a5565b61238b9082613588565b90508681111561239b5786810391505b509695505050505050565b60006101538383670de0b6b3a76400006119a5565b60006001600160701b0382111561197b5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061242757507f0000000000000000000000000000000000000000000000000000000000000000612425858361359b565b105b1561243457612434612d18565b6003549084900390600f0b61244984826136d9565b90508361245586611951565b13801561248a57507f00000000000000000000000000000000000000000000000000000000000000006124888383611a8e565b105b1561249757612497612d18565b600254600160801b90046001600160801b03166124d9611ebf826124c3670de0b6b3a764000088613654565b6004546001600160801b031691908c6000612da6565b600480546001600160801b0319166001600160801b0392909216919091179055612503888261359b565b905061250e81611ab4565b600280546001600160801b03928316600160801b02921691909117905561253483611ab4565b600180546001600160801b0319166001600160801b039290921691909117905561255d82611ade565b600380546001600160801b0319166001600160801b039290921691909117905561258687611ab4565b600180546010906125a8908490600160801b90046001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006125ff6125e58483612e83565b6125f0846000612e83565b6125fa91906136d9565b611ade565b9050600081600f0b1315612654576002805482919060009061262b9084906001600160801b03166136b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156126845761266981613873565b6002805460009061262b9084906001600160801b03166136f9565b505050565b60008061269685856123a6565b90506126a181612e99565b9450846000036126b5576000915050610153565b6126c5604084016020850161352b565b156126f4576126ed856126db60208601866134f4565b6126e860408701876137cf565b612ee9565b915061271b565b6127178561270560208601866134f4565b61271260408701876137cf565b612f04565b8491505b509392505050565b60006101538383670de0b6b3a7640000612c40565b6002546000908190612753906001600160801b031684612e44565b905061277f7f000000000000000000000000000000000000000000000000000000000000000082613588565b6001546001600160801b03161115611f3a576001547f0000000000000000000000000000000000000000000000000000000000000000906127ca9083906001600160801b031661359b565b610153919061359b565b6127dc6133ba565b6000806127e884611817565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612823919061362c565b6040805180830381865af415801561283f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128639190613816565b93509050826128785750600091506101129050565b600061289f61289a8461016001518561014001516123a690919063ffffffff16565b611951565b6128bf61289a85610120015186610100015161272390919063ffffffff16565b6128c991906136d9565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156129ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a239190613899565b935093509350935080612a3f5750600098975050505050505050565b868414612a7057612a4f84611ab4565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612aa157612a8083611ade565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612acf57612ab182611ab4565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008084341015612b02576040516312171d8360e31b815260040160405180910390fd5b5060085460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015612b74573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612b99919061363b565b9150935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015612c16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c3a919061363b565b50505050565b6000826000190484118302158202612c5757600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612c7a610dc2565b612c849190613654565b9050808311612c94576000612c9e565b612c9e818461359b565b9150610153612cd5670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613654565b83906119c3565b600080600083612ceb86611951565b612cf591906136d9565b90506000811215612d0d5760008092509250506117e4565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612d4a5750670de0b6b3a76400006116c5565b82600003612d5a575060006116c5565b6000612d6583611951565b90506000612d7a612d7586611951565b612f9e565b9050818102612d91670de0b6b3a7640000826138da565b9050612d9c816131c4565b9695505050505050565b600082600003612db757508461013a565b8115612e0a57612de8612dca8487613588565b612dd485876123a6565b612dde888a6123a6565b6118119190613588565b90506000612df68588611f2b565b905080821015612e04578091505b5061013a565b828503612e195750600061013a565b610137612e26848761359b565b612e308587612723565b612e3a888a6123a6565b611811919061359b565b600061015383670de0b6b3a764000084612c40565b600060016001607f1b0382111561197b5760405163a5353be560e01b815260040160405180910390fd5b6000818313612e925781610153565b5090919050565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401611d95565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af1158015612f73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f97919061363b565b5050505050565b6000808213612fc05760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130439084901c611951565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136131df57506000919050565b680755bf798b4a1bf1e58212613208576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612d9c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611951565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806133ce613359565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215611f3a57600080fd5b60008060006060848603121561343357600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561345857600080fd5b6134648682870161340c565b9150509250925092565b6000806040838503121561348157600080fd5b50508035926020909101359150565b600080600080600060a086880312156134a857600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156134db57600080fd5b6134e78882890161340c565b9150509295509295909350565b60006020828403121561350657600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610da757600080fd5b60006020828403121561353d57600080fd5b81356101538161351d565b634e487b7160e01b600052601260045260246000fd5b60008261356d5761356d613548565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156116c5576116c5613572565b818103818111156116c5576116c5613572565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016116c582846135ae565b60006020828403121561364d57600080fd5b5051919050565b80820281158282048414176116c5576116c5613572565b60008060006060848603121561368057600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611aad57611aad613572565b6001600160801b03818116838216019080821115611aad57611aad613572565b8181036000831280158383131683831282161715611aad57611aad613572565b6001600160801b03828116828216039080821115611aad57611aad613572565b60006102a08201905061372d8285516135ae565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156137a257600080fd5b505080516020909101519092909150565b6000600160ff1b82016137c8576137c8613572565b5060000390565b6000808335601e198436030181126137e657600080fd5b83018035915067ffffffffffffffff82111561380157600080fd5b6020019150368190038213156117e457600080fd5b6000806040838503121561382957600080fd5b82519150602083015161383b8161351d565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116c5576116c5613572565b600081600f0b60016001607f1b0319810361389057613890613572565b60000392915050565b600080600080608085870312156138af57600080fd5b84519350602085015192506040850151915060608501516138cf8161351d565b939692955090935050565b6000826138e9576138e9613548565b600160ff1b82146000198414161561390357613903613572565b50059056fea26469706673582212200db602fd090517cccd2a6c97221befdc5db9bec2e168b58de9c8808ddf62edbf64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
