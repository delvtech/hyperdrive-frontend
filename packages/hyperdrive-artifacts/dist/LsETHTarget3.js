export const LsETHTarget3 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003ebb38038062003ebb8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613a4262000479600039600050506000505060008181610495015281816104c401526104f101526000818161032e0152818161073c01528181610c1a01526118dd0152600081816108e9015281816109d401528181610a6701528181610b2f015281816118b70152818161242d015281816124900152818161278b015281816127c701526129bd01526000818161038f0152818161095901528181610e820152611891015260006120320152600061218d0152600081816111050152612161015260005050600081816103d1015281816109ac01528181610ea301526119030152600081816103b00152818161046a015281816109860152818161103d0152612bd101526000818161028001528181610dd901528181610ed501528181610f5c01528181610fbd0152610ff5015260008181611d9301528181612b3801528181612dd20152612e31015260005050613a426000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a3660046134d6565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613526565b61011a565b005b6100be6100b9366004613548565b610128565b604051908152602001610080565b6100be6100da3660046134d6565b610143565b3480156100eb57600080fd5b5061006f6100fa3660046134d6565b61015a565b60008061010d858585610168565b915091505b935093915050565b6101248282610229565b5050565b600061013786868686866102e8565b90505b95945050505050565b6000610150848484610893565b90505b9392505050565b60008061010d858585610c04565b600080610173610d57565b61017c83610d81565b6000610186610dba565b905061019b610193610dd2565b826004610e08565b506101a9338783888861139d565b90935091506101bb60208501856135ac565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8486856101f960408b0160208c016135e3565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610231610d57565b600061023b610dba565b6000848152600760205260409020600101549091506001600160801b03161561026f5761026881836114e0565b50506102de565b6000610279610dd2565b90506102a57f000000000000000000000000000000000000000000000000000000000000000085613616565b1515806102b157508381105b156102cf5760405163ecd29e8160e01b815260040160405180910390fd5b6102da848385610e08565b5050505b6101246001600055565b60006102f2610d57565b600554610100900460ff161561031b576040516321081abf60e01b815260040160405180910390fd5b6103236116db565b61032c82610d81565b7f000000000000000000000000000000000000000000000000000000000000000086101561036d5760405163211ddda360e11b815260040160405180910390fd5b60006103f561037a6116fc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061171d565b90508481108061040457508381115b1561042257604051633b61151160e11b815260040160405180910390fd5b60008061042f8986611743565b91509150600061043d610dd2565b905061044b81836004610e08565b5060008181526007602052604081205461048e906001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061181c565b90506104ba7f000000000000000000000000000000000000000000000000000000000000000082613640565b85118061051957507f00000000000000000000000000000000000000000000000000000000000000008111801561051957506105167f000000000000000000000000000000000000000000000000000000000000000082613653565b85105b1561053757604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610583916001600160801b0390911690613653565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105be908390613640565b905060008060006105ce87611848565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106089084906004016136e4565b602060405180830381865af4158015610625573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064991906136f3565b915061065c61065789611982565b6119b0565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106be9084906004016136e4565b602060405180830381865af41580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff91906136f3565b9250818310156107225760405163184d952160e11b815260040160405180910390fd5b61073884836107318187613653565b91906119d6565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561077b5760405163211ddda360e11b815260040160405180910390fd5b508d8d610788828c6119f4565b10156107a75760405163c972651760e01b815260040160405180910390fd5b6107bf60006107b960208e018e6135ac565b8c611a09565b60006107ca88611ab2565b9050806107ea57604051638bdf918d60e01b815260040160405180910390fd5b60008515610801576107fc84876119f4565b610804565b60005b90508c61081460208201826135ac565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e868d61085160408701602088016135e3565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a250505050505050505050505061013a6001600055565b600061089d610d57565b6108a56116db565b6108ae82610d81565b60055460ff16156108d257604051637983c05160e01b815260040160405180910390fd5b6000806108df8685611743565b909250905061090f7f0000000000000000000000000000000000000000000000000000000000000000600261370c565b82101561092f57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5f9190613723565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a908484611abf565b1015610aaf5760405163216f4ab160e21b815260040160405180910390fd5b610ab883611ae5565b600180546001600160801b0319166001600160801b0392909216919091179055610ae182611b0f565b600380546001600160801b0319166001600160801b0392909216919091179055610b0a81611ae5565b600180546001600160801b03928316600160801b029216919091179055610b536000807f0000000000000000000000000000000000000000000000000000000000000000611a09565b610b6b6000610b6560208a018a6135ac565b88611a09565b610b7e610b76610dd2565b856004610e08565b50610b8c60208801886135ac565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952878b87610bc960408d0160208e016135e3565b6040805194855260208501939093529183015215156060820152608081018b905260a00160405180910390a250505050506101536001600055565b600080610c0f610d57565b610c1883610d81565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c595760405163211ddda360e11b815260040160405180910390fd5b6000610c63610dba565b9050610c70610193610dd2565b50610c7d60003388611b4b565b610c92600360f81b610b6560208701876135ac565b6000610cad610ca460208701876135ac565b8884898961139d565b9094509050610cbc8188613653565b92506000610cc983611c1c565b509050610cd960208701876135ac565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a8887610d1760408d0160208e016135e3565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610d7a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610d9060208301836135ac565b6001600160a01b031603610db75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dcd670de0b6b3a7640000611d7a565b905090565b6000610dfe7f000000000000000000000000000000000000000000000000000000000000000042613616565b610dcd9042613653565b600083815260076020526040812060018101546001600160801b0316151580610e3057504285115b15610e4957600101546001600160801b03169050610153565b6000806000610e56610dd2565b9050808803610ece57869250610ec7610e6d6116fc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e07565b9150610f8a565b6000610efa7f00000000000000000000000000000000000000000000000000000000000000008a613640565b90505b818103610f1557879350610f12610e6d6116fc565b92505b6000818152600760205260409020600101546001600160801b031693508315610f57576000818152600760205260409020546001600160801b03169250610f88565b610f817f000000000000000000000000000000000000000000000000000000000000000082613640565b9050610efd565b505b610f9383611ae5565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fe9610fe27f00000000000000000000000000000000000000000000000000000000000000008a613653565b8984611e1e565b6110278861102161101a7f000000000000000000000000000000000000000000000000000000000000000083613640565b4290611f5c565b84611e1e565b61103087611f71565b50600090506007816110627f00000000000000000000000000000000000000000000000000000000000000008c613653565b815260208101919091526040016000908120600101546001600160801b0316915061108e60028b612115565b6000818152600e60205260408120549192508b8b83156111d457600192506000806110bd86898d86600061214a565b9150915080600b60008282546110d39190613640565b909155506110ef9050866000846110e981611982565b88612219565b6110f98183613640565b915061112986838a8e877f0000000000000000000000000000000000000000000000000000000000000000612393565b915061113d61113883856123d7565b6123ec565b6005805460029061115e9084906201000090046001600160701b0316613751565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061118b82611ae5565b600580546010906111ad908490600160801b90046001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e1600184612115565b6000818152600e602052604090205490915080156112f0576001945060008061120e838b8f88600161214a565b9150915080600b60008282546112249190613640565b9091555061124090508360008461123a81611982565b8a612416565b61124a8183613653565b915061125961113883876123d7565b6005805460029061127a9084906201000090046001600160701b0316613751565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112a782611ae5565b600580546010906112c9908490600160801b90046001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113285761131c61130287611982565b61130b83611982565b6113159190613791565b6000612607565b611326838f6114e0565b505b600061133384611c1c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113a985611ab2565b505060065485906001600160801b0316808211156113ce57806001600160801b031691505b816000036113e35760008092509250506114d6565b6113f2600360f81b8984611b4b565b6006546000906114189084906001600160801b03600160801b90910481169085166119d6565b905061142383611ae5565b61142d90836137b1565b600680546001600160801b0319166001600160801b039290921691909117905561145681611ae5565b60068054601090611478908490600160801b90046001600160801b03166137b1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a78188876126ba565b93506114b38684612754565b8410156114d35760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161152b916001600160801b031690613653565b90508060000361153f5760019150506116d5565b600061154a85612769565b90508060000361155f576001925050506116d5565b60008061156d838589612805565b91509150806115835760009450505050506116d5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016115bf9291906137d1565b6040805180830381865af41580156115db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ff9190613847565b9150915061161d61160f82611982565b6116189061386b565b612979565b92508261163357600096505050505050506116d5565b61163c82611ae5565b600680546000906116579084906001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168481611ae5565b600680546010906116a6908490600160801b90046001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b34156116fa57604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610dcd916001600160801b0390911690600f0b611abf565b60008061172c87878786611e07565b9050611738818561181c565b979650505050505050565b6000808061175760408501602086016135e3565b1561177c576117728561176d6040870187613887565b612b0f565b9093509050611798565b50346117948561178f6040870187613887565b612b2b565b8492505b6117a0610dba565b9150801561181357604051600090339083908381818185875af1925050503d80600081146117ea576040519150601f19603f3d011682016040523d82523d6000602084013e6117ef565b606091505b5050905080611811576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361183084846301e13380612b60565b61184285670de0b6b3a7640000613653565b906119f4565b611850613411565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119489116612b86565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261197a92900416612b86565b905292915050565b60006001600160ff1b038211156119ac5760405163396ea70160e11b815260040160405180910390fd5b5090565b6119b981612979565b610db757604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026119ed57600080fd5b5091020490565b600061015383670de0b6b3a7640000846119d6565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611a3b908490613640565b90915550506000838152600e602052604081208054839290611a5e908490613640565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006116d58260046114e0565b600080611acc8484612bfc565b909250905080611ade57611ade612c38565b5092915050565b60006001600160801b038211156119ac57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611b2d575060016001607f1b0382135b156119ac5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611b8e57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611bd1908490613653565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611aa5565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611c4587611848565b6040518263ffffffff1660e01b8152600401611c6191906136e4565b6040805180830381865af4158015611c7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca191906138ce565b9150915080611cb7575060009485945092505050565b6000808611611cc7576000611cd1565b611cd183876123d7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611d3c9190613640565b611d469190613653565b905080600003611d5f5750600096879650945050505050565b6000611d6b83836119f4565b98600198509650505050505050565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f02906024015b602060405180830381865afa158015611de3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d591906136f3565b600061013a82611e188588886119d6565b90612c51565b600083815260076020526040902054600160801b90046001600160801b0316808303611e4a5750505050565b6000848152600760205260408120546001600160801b031690819003611ea457611e7383611ae5565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611f22565b611ef5611ef0670de0b6b3a7640000611ebd8886613653565b611ec7919061370c565b85670de0b6b3a7640000611edb878a613653565b611ee5919061370c565b859291906001612cc6565b611ae5565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611f2b84611ae5565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b6000818311611f6b5782610153565b50919050565b6005546000908190611f94908490600160801b90046001600160801b03166123d7565b6005546201000090046001600160701b03169250905081811115612110576000611fbe8383613653565b9050611fcd611ef08286612d64565b60058054601090611fef908490600160801b90046001600160801b03166137b1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061202885836119f490919063ffffffff16565b90506000612056827f00000000000000000000000000000000000000000000000000000000000000006123d7565b905080600b600082825461206a9190613640565b9091555061207a90508183613653565b915061208582611ae5565b600180546000906120a09084906001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120cd82612d79565b600380546000906120e2908490600f0b6138fe565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561213f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061215787856119f4565b91506000612185837f00000000000000000000000000000000000000000000000000000000000000006123d7565b90506121b1817f00000000000000000000000000000000000000000000000000000000000000006123d7565b915083156121d4576121c38282613653565b6121cd9084613653565b92506121eb565b6121de8282613653565b6121e89084613640565b92505b8686101561220e576121fe8387896119d6565b925061220b8287896119d6565b91505b509550959350505050565b600354600160801b90046001600160801b0316612262611ef082612245670de0b6b3a76400008661370c565b600454600160801b90046001600160801b031691908a6000612cc6565b600480546001600160801b03928316600160801b02921691909117905561228886611ae5565b61229290826137b1565b600380546001600160801b03928316600160801b0292169190911790556122b884611ae5565b600180546000906122d39084906001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061230083611b0f565b60038054600090612315908490600f0b6138fe565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061234585611ae5565b60018054601090612367908490600160801b90046001600160801b03166137b1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806123a5846118428a888a6119d6565b90506123b28884866119d6565b6123bc9082613640565b9050868111156123cc5786810391505b509695505050505050565b60006101538383670de0b6b3a76400006119d6565b60006001600160701b038211156119ac5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061245857507f00000000000000000000000000000000000000000000000000000000000000006124568583613653565b105b1561246557612465612c38565b6003549084900390600f0b61247a8482613791565b90508361248686611982565b1380156124bb57507f00000000000000000000000000000000000000000000000000000000000000006124b98383611abf565b105b156124c8576124c8612c38565b600254600160801b90046001600160801b031661250a611ef0826124f4670de0b6b3a76400008861370c565b6004546001600160801b031691908c6000612cc6565b600480546001600160801b0319166001600160801b03929092169190911790556125348882613653565b905061253f81611ae5565b600280546001600160801b03928316600160801b02921691909117905561256583611ae5565b600180546001600160801b0319166001600160801b039290921691909117905561258e82611b0f565b600380546001600160801b0319166001600160801b03929092169190911790556125b787611ae5565b600180546010906125d9908490600160801b90046001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006126306126168483612da3565b612621846000612da3565b61262b9190613791565b611b0f565b9050600081600f0b1315612685576002805482919060009061265c9084906001600160801b0316613771565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156126b55761269a8161392b565b6002805460009061265c9084906001600160801b03166137b1565b505050565b6000806126c785856123d7565b90506126d281612db9565b9450846000036126e6576000915050610153565b6126f660408401602085016135e3565b156127255761271e8561270c60208601866135ac565b6127196040870187613887565b612e09565b915061274c565b6127488561273660208601866135ac565b6127436040870187613887565b612e24565b8491505b509392505050565b60006101538383670de0b6b3a7640000612b60565b6002546000908190612784906001600160801b031684612d64565b90506127b07f000000000000000000000000000000000000000000000000000000000000000082613640565b6001546001600160801b03161115611f6b576001547f0000000000000000000000000000000000000000000000000000000000000000906127fb9083906001600160801b0316613653565b6101539190613653565b61280d613472565b60008061281984611848565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161285491906136e4565b6040805180830381865af4158015612870573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061289491906138ce565b93509050826128a95750600091506101129050565b60006128d06128cb8461016001518561014001516123d790919063ffffffff16565b611982565b6128f06128cb85610120015186610100015161275490919063ffffffff16565b6128fa9190613791565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a549190613951565b935093509350935080612a705750600098975050505050505050565b868414612aa157612a8084611ae5565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612ad257612ab183611b0f565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612b0057612ae282611ae5565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6126b56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612e5e565b6000826000190484118302158202612b7757600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612b9a610dd2565b612ba4919061370c565b9050808311612bb4576000612bbe565b612bbe8184613653565b9150610153612bf5670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061370c565b83906119f4565b600080600083612c0b86611982565b612c159190613791565b90506000811215612c2d576000809250925050611815565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612c6a5750670de0b6b3a76400006116d5565b82600003612c7a575060006116d5565b6000612c8583611982565b90506000612c9a612c9586611982565b612ec5565b9050818102612cb1670de0b6b3a764000082613992565b9050612cbc816130eb565b9695505050505050565b600082600003612cd757508461013a565b8115612d2a57612d08612cea8487613640565b612cf485876123d7565b612cfe888a6123d7565b6118429190613640565b90506000612d168588611f5c565b905080821015612d24578091505b5061013a565b828503612d395750600061013a565b610137612d468487613653565b612d508587612754565b612d5a888a6123d7565b6118429190613653565b600061015383670de0b6b3a764000084612b60565b600060016001607f1b038211156119ac5760405163a5353be560e01b815260040160405180910390fd5b6000818313612db25781610153565b5090919050565b604051631e66865560e21b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063799a195490602401611dc6565b600060405163350b944160e11b815260040160405180910390fd5b612e586001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486613280565b50505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612e589186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506132b1565b6000808213612ee75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f6a9084901c611982565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361310657506000919050565b680755bf798b4a1bf1e5821261312f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612cbc74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611982565b6040516001600160a01b038381166024830152604482018390526126b591859182169063a9059cbb90606401612e93565b60006132c66001600160a01b03841683613319565b905080516000141580156132eb5750808060200190518101906132e991906139c0565b155b156126b557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606101538383600084600080856001600160a01b0316848660405161333f91906139dd565b60006040518083038185875af1925050503d806000811461337c576040519150601f19603f3d011682016040523d82523d6000602084013e613381565b606091505b5091509150612cbc8683836060826133a15761339c826133e8565b610153565b81511580156133b857506001600160a01b0384163b155b156133e157604051639996b31560e01b81526001600160a01b0385166004820152602401613310565b5080610153565b8051156133f85780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613486613411565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215611f6b57600080fd5b6000806000606084860312156134eb57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561351057600080fd5b61351c868287016134c4565b9150509250925092565b6000806040838503121561353957600080fd5b50508035926020909101359150565b600080600080600060a0868803121561356057600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561359357600080fd5b61359f888289016134c4565b9150509295509295909350565b6000602082840312156135be57600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610db757600080fd5b6000602082840312156135f557600080fd5b8135610153816135d5565b634e487b7160e01b600052601260045260246000fd5b60008261362557613625613600565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156116d5576116d561362a565b818103818111156116d5576116d561362a565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016116d58284613666565b60006020828403121561370557600080fd5b5051919050565b80820281158282048414176116d5576116d561362a565b60008060006060848603121561373857600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611ade57611ade61362a565b6001600160801b03818116838216019080821115611ade57611ade61362a565b8181036000831280158383131683831282161715611ade57611ade61362a565b6001600160801b03828116828216039080821115611ade57611ade61362a565b60006102a0820190506137e5828551613666565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561385a57600080fd5b505080516020909101519092909150565b6000600160ff1b82016138805761388061362a565b5060000390565b6000808335601e1984360301811261389e57600080fd5b83018035915067ffffffffffffffff8211156138b957600080fd5b60200191503681900382131561181557600080fd5b600080604083850312156138e157600080fd5b8251915060208301516138f3816135d5565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116d5576116d561362a565b600081600f0b60016001607f1b031981036139485761394861362a565b60000392915050565b6000806000806080858703121561396757600080fd5b8451935060208501519250604085015191506060850151613987816135d5565b939692955090935050565b6000826139a1576139a1613600565b600160ff1b8214600019841416156139bb576139bb61362a565b500590565b6000602082840312156139d257600080fd5b8151610153816135d5565b6000825160005b818110156139fe57602081860181015185830152016139e4565b50600092019182525091905056fea26469706673582212208a92a693b8479daefd054a8895cb902d9dae3f6b0387b3c6ce282220a847c7f464736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
