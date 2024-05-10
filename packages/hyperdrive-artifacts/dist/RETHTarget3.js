export const RETHTarget3 = {
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
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
            "name": "FailedInnerCall",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
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
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200409b3803806200409b8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613c15620004866000396000505060005050600081816104fb0152818161052a0152610557015260008181610394015281816107a201528181610ca001526119ce01526000818161095f01528181610a4a01528181610add01528181610ba5015281816119a80152818161251e015281816125810152818161287c015281816128b80152612aae0152600081816103f5015281816109cf01528181610f1c0152611982015260006121230152600061227e01526000818161119f01526122520152600050506000818161043701528181610a2201528181610f3d01526119f4015260008181610416015281816104d0015281816109fc015281816110d70152612cc20152600081816102e601528181610e7301528181610f6f01528181610ff601528181611057015261108f015260008181605e01528181611e8401528181612c2901528181612ec301528181612f130152613004015260005050613c156000f3fe60806040526004361061004e5760003560e01c8063074a6de9146100a3578063414f826d146100dd5780634c2ac1d9146100fd57806377d05ff41461011e578063cbc134341461013157600080fd5b3661009e57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461009c576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b3480156100af57600080fd5b506100c36100be3660046136a9565b610151565b604080519283526020830191909152015b60405180910390f35b3480156100e957600080fd5b5061009c6100f83660046136f9565b61016c565b61011061010b36600461371b565b61017a565b6040519081526020016100d4565b61011061012c3660046136a9565b610195565b34801561013d57600080fd5b506100c361014c3660046136a9565b6101ac565b60008061015f8585856101ba565b915091505b935093915050565b610176828261028f565b5050565b6000610189868686868661034e565b90505b95945050505050565b60006101a2848484610909565b90505b9392505050565b60008061015f858585610c8a565b6000806101c5610df1565b6101ce83610e1b565b60006101d8610e54565b90506101ed6101e5610e6c565b826004610ea2565b506101fb3387838888611437565b909350915061020d602085018561377f565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8461024487868a61157a565b61024f88878b6115a9565b61025f60408b0160208c016137b6565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101646001600055565b610297610df1565b60006102a1610e54565b6000848152600760205260409020600101549091506001600160801b0316156102d5576102ce81836115d1565b5050610344565b60006102df610e6c565b905061030b7f0000000000000000000000000000000000000000000000000000000000000000856137e9565b15158061031757508381105b156103355760405163ecd29e8160e01b815260040160405180910390fd5b610340848385610ea2565b5050505b6101766001600055565b6000610358610df1565b600554610100900460ff1615610381576040516321081abf60e01b815260040160405180910390fd5b6103896117cc565b61039282610e1b565b7f00000000000000000000000000000000000000000000000000000000000000008610156103d35760405163211ddda360e11b815260040160405180910390fd5b600061045b6103e06117ed565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061180e565b90508481108061046a57508381115b1561048857604051633b61151160e11b815260040160405180910390fd5b6000806104958986611834565b9150915060006104a3610e6c565b90506104b181836004610ea2565b506000818152600760205260408120546104f4906001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061190d565b90506105207f000000000000000000000000000000000000000000000000000000000000000082613813565b85118061057f57507f00000000000000000000000000000000000000000000000000000000000000008111801561057f575061057c7f000000000000000000000000000000000000000000000000000000000000000082613826565b85105b1561059d57604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490916105e9916001600160801b0390911690613826565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5491925090610624908390613813565b9050600080600061063487611939565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061066e9084906004016138b7565b602060405180830381865af415801561068b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106af91906138c6565b91506106c26106bd89611a73565b611aa1565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906107249084906004016138b7565b602060405180830381865af4158015610741573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076591906138c6565b9250818310156107885760405163184d952160e11b815260040160405180910390fd5b61079e84836107978187613826565b9190611ac7565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107e15760405163211ddda360e11b815260040160405180910390fd5b508d8d6107ee828c611ae5565b101561080d5760405163c972651760e01b815260040160405180910390fd5b610825600061081f60208e018e61377f565b8c611afa565b600061083088611ba3565b90508061085057604051638bdf918d60e01b815260040160405180910390fd5b60008515610867576108628487611ae5565b61086a565b60005b90508c600061087a858c8461157a565b9050610889602083018361377f565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868f838f6108c660408801602089016137b6565b60408051948552602085019390935291830152151560608201526080810186905260a00160405180910390a25050505050505050505050505061018c6001600055565b6000610913610df1565b61091b6117cc565b61092482610e1b565b60055460ff161561094857604051637983c05160e01b815260040160405180910390fd5b6000806109558685611834565b90925090506109857f000000000000000000000000000000000000000000000000000000000000000060026138df565b8210156109a557604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610ab1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad591906138f6565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610b068484611bb0565b1015610b255760405163216f4ab160e21b815260040160405180910390fd5b610b2e83611bd6565b600180546001600160801b0319166001600160801b0392909216919091179055610b5782611c00565b600380546001600160801b0319166001600160801b0392909216919091179055610b8081611bd6565b600180546001600160801b03928316600160801b029216919091179055610bc96000807f0000000000000000000000000000000000000000000000000000000000000000611afa565b610be16000610bdb60208a018a61377f565b88611afa565b610bf4610bec610e6c565b856004610ea2565b506000610c028a868a61157a565b9050610c11602089018961377f565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952888389610c4e60408e0160208f016137b6565b6040805194855260208501939093529183015215156060820152608081018c905260a00160405180910390a25050505050506101a56001600055565b600080610c95610df1565b610c9e83610e1b565b7f0000000000000000000000000000000000000000000000000000000000000000851015610cdf5760405163211ddda360e11b815260040160405180910390fd5b6000610ce9610e54565b9050610cf66101e5610e6c565b50610d0360003388611c3c565b610d18600360f81b610bdb602087018761377f565b6000610d33610d2a602087018761377f565b88848989611437565b9094509050610d428188613826565b92506000610d4f83611d0d565b509050610d5f602087018761377f565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a610d9689888c61157a565b610da18a898d6115a9565b610db160408d0160208e016137b6565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101646001600055565b600260005403610e1457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610e2a602083018361377f565b6001600160a01b031603610e515760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610e67670de0b6b3a7640000611e6b565b905090565b6000610e987f0000000000000000000000000000000000000000000000000000000000000000426137e9565b610e679042613826565b600083815260076020526040812060018101546001600160801b0316151580610eca57504285115b15610ee357600101546001600160801b031690506101a5565b6000806000610ef0610e6c565b9050808803610f6857869250610f61610f076117ed565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ef8565b9150611024565b6000610f947f00000000000000000000000000000000000000000000000000000000000000008a613813565b90505b818103610faf57879350610fac610f076117ed565b92505b6000818152600760205260409020600101546001600160801b031693508315610ff1576000818152600760205260409020546001600160801b03169250611022565b61101b7f000000000000000000000000000000000000000000000000000000000000000082613813565b9050610f97565b505b61102d83611bd6565b6001850180546001600160801b0319166001600160801b039290921691909117905561108361107c7f00000000000000000000000000000000000000000000000000000000000000008a613826565b8984611f0f565b6110c1886110bb6110b47f000000000000000000000000000000000000000000000000000000000000000083613813565b429061204d565b84611f0f565b6110ca87612062565b50600090506007816110fc7f00000000000000000000000000000000000000000000000000000000000000008c613826565b815260208101919091526040016000908120600101546001600160801b0316915061112860028b612206565b6000818152600e60205260408120549192508b8b831561126e576001925060008061115786898d86600061223b565b9150915080600b600082825461116d9190613813565b9091555061118990508660008461118381611a73565b8861230a565b6111938183613813565b91506111c386838a8e877f0000000000000000000000000000000000000000000000000000000000000000612484565b91506111d76111d283856124c8565b6124dd565b600580546002906111f89084906201000090046001600160701b0316613924565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061122582611bd6565b60058054601090611247908490600160801b90046001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061127b600184612206565b6000818152600e6020526040902054909150801561138a57600194506000806112a8838b8f88600161223b565b9150915080600b60008282546112be9190613813565b909155506112da9050836000846112d481611a73565b8a612507565b6112e48183613826565b91506112f36111d283876124c8565b600580546002906113149084906201000090046001600160701b0316613924565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061134182611bd6565b60058054601090611363908490600160801b90046001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113c2576113b661139c87611a73565b6113a583611a73565b6113af9190613964565b60006126f8565b6113c0838f6115d1565b505b60006113cd84611d0d565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b60008061144385611ba3565b505060065485906001600160801b03168082111561146857806001600160801b031691505b8160000361147d576000809250925050611570565b61148c600360f81b8984611c3c565b6006546000906114b29084906001600160801b03600160801b9091048116908516611ac7565b90506114bd83611bd6565b6114c79083613984565b600680546001600160801b0319166001600160801b03929092169190911790556114f081611bd6565b60068054601090611512908490600160801b90046001600160801b0316613984565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115418188876127ab565b935061154d8684612845565b84101561156d5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600061158c60408301602084016137b6565b156115985750826101a5565b6115a284846124c8565b90506101a5565b60006115bb60408301602084016137b6565b156115ca576115a28484611ae5565b50826101a5565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161161c916001600160801b031690613826565b9050806000036116305760019150506117c6565b600061163b8561285a565b905080600003611650576001925050506117c6565b60008061165e8385896128f6565b91509150806116745760009450505050506117c6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016116b09291906139a4565b6040805180830381865af41580156116cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f09190613a1a565b9150915061170e61170082611a73565b61170990613a3e565b612a6a565b92508261172457600096505050505050506117c6565b61172d82611bd6565b600680546000906117489084906001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061177581611bd6565b60068054601090611797908490600160801b90046001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b34156117eb57604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610e67916001600160801b0390911690600f0b611bb0565b60008061181d87878786611ef8565b9050611829818561190d565b979650505050505050565b6000808061184860408501602086016137b6565b1561186d576118638561185e6040870187613a5a565b612c00565b9093509050611889565b5034611885856118806040870187613a5a565b612c1c565b8492505b611891610e54565b9150801561190457604051600090339083908381818185875af1925050503d80600081146118db576040519150601f19603f3d011682016040523d82523d6000602084013e6118e0565b606091505b5050905080611902576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006101a561192184846301e13380612c51565b61193385670de0b6b3a7640000613826565b90611ae5565b6119416135e4565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611a399116612c77565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611a6b92900416612c77565b905292915050565b60006001600160ff1b03821115611a9d5760405163396ea70160e11b815260040160405180910390fd5b5090565b611aaa81612a6a565b610e5157604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611ade57600080fd5b5091020490565b60006101a583670de0b6b3a764000084611ac7565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611b2c908490613813565b90915550506000838152600e602052604081208054839290611b4f908490613813565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006117c68260046115d1565b600080611bbd8484612ced565b909250905080611bcf57611bcf612d29565b5092915050565b60006001600160801b03821115611a9d57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611c1e575060016001607f1b0382135b15611a9d5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611c7f57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611cc2908490613826565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b96565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611d3687611939565b6040518263ffffffff1660e01b8152600401611d5291906138b7565b6040805180830381865af4158015611d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d929190613aa1565b9150915080611da8575060009485945092505050565b6000808611611db8576000611dc2565b611dc283876124c8565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611e2d9190613813565b611e379190613826565b905080600003611e505750600096879650945050505050565b6000611e5c8383611ae5565b98600198509650505050505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa158015611ed4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c691906138c6565b600061018c82611f09858888611ac7565b90612d42565b600083815260076020526040902054600160801b90046001600160801b0316808303611f3b5750505050565b6000848152600760205260408120546001600160801b031690819003611f9557611f6483611bd6565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055612013565b611fe6611fe1670de0b6b3a7640000611fae8886613826565b611fb891906138df565b85670de0b6b3a7640000611fcc878a613826565b611fd691906138df565b859291906001612db7565b611bd6565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61201c84611bd6565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161205c57826101a5565b50919050565b6005546000908190612085908490600160801b90046001600160801b03166124c8565b6005546201000090046001600160701b031692509050818111156122015760006120af8383613826565b90506120be611fe18286612e55565b600580546010906120e0908490600160801b90046001600160801b0316613984565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006121198583611ae590919063ffffffff16565b90506000612147827f00000000000000000000000000000000000000000000000000000000000000006124c8565b905080600b600082825461215b9190613813565b9091555061216b90508183613826565b915061217682611bd6565b600180546000906121919084906001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121be82612e6a565b600380546000906121d3908490600f0b613ad1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156122305760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122488785611ae5565b91506000612276837f00000000000000000000000000000000000000000000000000000000000000006124c8565b90506122a2817f00000000000000000000000000000000000000000000000000000000000000006124c8565b915083156122c5576122b48282613826565b6122be9084613826565b92506122dc565b6122cf8282613826565b6122d99084613813565b92505b868610156122ff576122ef838789611ac7565b92506122fc828789611ac7565b91505b509550959350505050565b600354600160801b90046001600160801b0316612353611fe182612336670de0b6b3a7640000866138df565b600454600160801b90046001600160801b031691908a6000612db7565b600480546001600160801b03928316600160801b02921691909117905561237986611bd6565b6123839082613984565b600380546001600160801b03928316600160801b0292169190911790556123a984611bd6565b600180546000906123c49084906001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123f183611c00565b60038054600090612406908490600f0b613ad1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061243685611bd6565b60018054601090612458908490600160801b90046001600160801b0316613984565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612496846119338a888a611ac7565b90506124a3888486611ac7565b6124ad9082613813565b9050868111156124bd5786810391505b509695505050505050565b60006101a58383670de0b6b3a7640000611ac7565b60006001600160701b03821115611a9d5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061254957507f00000000000000000000000000000000000000000000000000000000000000006125478583613826565b105b1561255657612556612d29565b6003549084900390600f0b61256b8482613964565b90508361257786611a73565b1380156125ac57507f00000000000000000000000000000000000000000000000000000000000000006125aa8383611bb0565b105b156125b9576125b9612d29565b600254600160801b90046001600160801b03166125fb611fe1826125e5670de0b6b3a7640000886138df565b6004546001600160801b031691908c6000612db7565b600480546001600160801b0319166001600160801b03929092169190911790556126258882613826565b905061263081611bd6565b600280546001600160801b03928316600160801b02921691909117905561265683611bd6565b600180546001600160801b0319166001600160801b039290921691909117905561267f82611c00565b600380546001600160801b0319166001600160801b03929092169190911790556126a887611bd6565b600180546010906126ca908490600160801b90046001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006127216127078483612e94565b612712846000612e94565b61271c9190613964565b611c00565b9050600081600f0b1315612776576002805482919060009061274d9084906001600160801b0316613944565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156127a65761278b81613afe565b6002805460009061274d9084906001600160801b0316613984565b505050565b6000806127b885856124c8565b90506127c381612eaa565b9450846000036127d75760009150506101a5565b6127e760408401602085016137b6565b156128165761280f856127fd602086018661377f565b61280a6040870187613a5a565b612efa565b915061283d565b61283985612827602086018661377f565b6128346040870187613a5a565b612ff7565b8491505b509392505050565b60006101a58383670de0b6b3a7640000612c51565b6002546000908190612875906001600160801b031684612e55565b90506128a17f000000000000000000000000000000000000000000000000000000000000000082613813565b6001546001600160801b0316111561205c576001547f0000000000000000000000000000000000000000000000000000000000000000906128ec9083906001600160801b0316613826565b6101a59190613826565b6128fe613645565b60008061290a84611939565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161294591906138b7565b6040805180830381865af4158015612961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129859190613aa1565b935090508261299a5750600091506101649050565b60006129c16129bc8461016001518561014001516124c890919063ffffffff16565b611a73565b6129e16129bc85610120015186610100015161284590919063ffffffff16565b6129eb9190613964565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b459190613b24565b935093509350935080612b615750600098975050505050505050565b868414612b9257612b7184611bd6565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612bc357612ba283611c00565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612bf157612bd382611bd6565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6127a66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086613031565b6000826000190484118302158202612c6857600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612c8b610e6c565b612c9591906138df565b9050808311612ca5576000612caf565b612caf8184613826565b91506101a5612ce6670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138df565b8390611ae5565b600080600083612cfc86611a73565b612d069190613964565b90506000811215612d1e576000809250925050611906565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612d5b5750670de0b6b3a76400006117c6565b82600003612d6b575060006117c6565b6000612d7683611a73565b90506000612d8b612d8686611a73565b613098565b9050818102612da2670de0b6b3a764000082613b65565b9050612dad816132be565b9695505050505050565b600082600003612dc857508461018c565b8115612e1b57612df9612ddb8487613813565b612de585876124c8565b612def888a6124c8565b6119339190613813565b90506000612e07858861204d565b905080821015612e15578091505b5061018c565b828503612e2a5750600061018c565b610189612e378487613826565b612e418587612845565b612e4b888a6124c8565b6119339190613826565b60006101a583670de0b6b3a764000084612c51565b600060016001607f1b03821115611a9d5760405163a5353be560e01b815260040160405180910390fd5b6000818313612ea357816101a5565b5090919050565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401611eb7565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b158015612f5f57600080fd5b505af1158015612f73573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114612fc7576040519150601f19603f3d011682016040523d82523d6000602084013e612fcc565b606091505b5050905080612fee576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b61302b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486613453565b50505050565b6040516001600160a01b03848116602483015283811660448301526064820183905261302b9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613484565b60008082136130ba5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061313d9084901c611a73565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136132d957506000919050565b680755bf798b4a1bf1e58212613302576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612dad74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a73565b6040516001600160a01b038381166024830152604482018390526127a691859182169063a9059cbb90606401613066565b60006134996001600160a01b038416836134ec565b905080516000141580156134be5750808060200190518101906134bc9190613b93565b155b156127a657604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606101a58383600084600080856001600160a01b031684866040516135129190613bb0565b60006040518083038185875af1925050503d806000811461354f576040519150601f19603f3d011682016040523d82523d6000602084013e613554565b606091505b5091509150612dad8683836060826135745761356f826135bb565b6101a5565b815115801561358b57506001600160a01b0384163b155b156135b457604051639996b31560e01b81526001600160a01b03851660048201526024016134e3565b50806101a5565b8051156135cb5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806136596135e4565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561205c57600080fd5b6000806000606084860312156136be57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156136e357600080fd5b6136ef86828701613697565b9150509250925092565b6000806040838503121561370c57600080fd5b50508035926020909101359150565b600080600080600060a0868803121561373357600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561376657600080fd5b61377288828901613697565b9150509295509295909350565b60006020828403121561379157600080fd5b81356001600160a01b03811681146101a557600080fd5b8015158114610e5157600080fd5b6000602082840312156137c857600080fd5b81356101a5816137a8565b634e487b7160e01b600052601260045260246000fd5b6000826137f8576137f86137d3565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156117c6576117c66137fd565b818103818111156117c6576117c66137fd565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016117c68284613839565b6000602082840312156138d857600080fd5b5051919050565b80820281158282048414176117c6576117c66137fd565b60008060006060848603121561390b57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611bcf57611bcf6137fd565b6001600160801b03818116838216019080821115611bcf57611bcf6137fd565b8181036000831280158383131683831282161715611bcf57611bcf6137fd565b6001600160801b03828116828216039080821115611bcf57611bcf6137fd565b60006102a0820190506139b8828551613839565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a2d57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a5357613a536137fd565b5060000390565b6000808335601e19843603018112613a7157600080fd5b83018035915067ffffffffffffffff821115613a8c57600080fd5b60200191503681900382131561190657600080fd5b60008060408385031215613ab457600080fd5b825191506020830151613ac6816137a8565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156117c6576117c66137fd565b600081600f0b60016001607f1b03198103613b1b57613b1b6137fd565b60000392915050565b60008060008060808587031215613b3a57600080fd5b8451935060208501519250604085015191506060850151613b5a816137a8565b939692955090935050565b600082613b7457613b746137d3565b600160ff1b821460001984141615613b8e57613b8e6137fd565b500590565b600060208284031215613ba557600080fd5b81516101a5816137a8565b6000825160005b81811015613bd15760208186018101518583015201613bb7565b50600092019182525091905056fea2646970667358221220f2e9987dd09a08c0175976e9eae57a9371a2ff1f1e393cd5945d343007ee164e64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
