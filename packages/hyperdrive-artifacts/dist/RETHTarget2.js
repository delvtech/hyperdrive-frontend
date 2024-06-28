export const RETHTarget2 = {
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
            "name": "openLong",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "openShort",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxDeposit",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
            "stateMutability": "payable"
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
            "name": "InsufficientLiquidity",
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
            "name": "MinimumSharePrice",
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
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620040ab380380620040ab833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613bdf620004cc60003960005050600050506000505060008181610154015281816103640152612d1f0152600081816114d201528181611c1001528181611c73015281816124da015281816128fd0152818161293901528181612b380152612cf901526000818161084701528181610d7401528181610db601528181610ecd01528181611345015281816113a40152612cd30152600061182f015260008181611955015281816123b90152818161265b01526126d4015260008181610a0b01528181610e290152818161143f0152818161192901526126a8015260008181610e0801528181612375015261262701526000818161086801528181610d5201528181610dd701528181610eee01528181611323015281816113c50152612d45015260008181610232015281816103fc01528181610943015261336b01526000818161070101528181610781015281816107f7015281816108c301526108fb015260008181603d015281816116890152612559015260005050613bdf6000f3fe60806040526004361061002d5760003560e01c8063cba2e58d14610082578063dbbe8070146100ae57600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b610095610090366004613633565b6100c1565b6040805192835260208301919091520160405180910390f35b6100956100bc366004613633565b6100de565b6000806100d0868686866100ed565b915091505b94509492505050565b6000806100d08686868661031d565b6000806100f861057e565b600654610100900460ff1615610121576040516321081abf60e01b815260040160405180910390fd5b6101296105a8565b610132836105c9565b60008061013f8886610602565b9092509050600061015083836106db565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101935760405163211ddda360e11b815260040160405180910390fd5b868210156101b4576040516342af972b60e01b815260040160405180910390fd5b60006101be6106f9565b90506101ce81846004600161072a565b5060008060006101de8787610d23565b919a5091945090925090508b88101561020a5760405163c972651760e01b815260040160405180910390fd5b81600d600082825461021c91906136a8565b9091555061022d9050844283610f2c565b6102577f0000000000000000000000000000000000000000000000000000000000000000856136a8565b98506102658389888c61106a565b600061027260018b611204565b905061028b8161028560208e018e6136bb565b8b611239565b8d8a8a898e8561029e60208301836136bb565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102db60408801602089016136f2565b896102e960408a018a61370f565b6040516102fc979695949392919061377f565b60405180910390a350909b5050505050505050505050506100d56001600055565b60008061032861057e565b600654610100900460ff1615610351576040516321081abf60e01b815260040160405180910390fd5b6103596105a8565b610362836105c9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103a35760405163211ddda360e11b815260040160405180910390fd5b60006103ad6112e1565b9050848110156103d0576040516342af972b60e01b815260040160405180910390fd5b60006103da6106f9565b905060006103f36103e96106f9565b846004600161072a565b905060006104217f0000000000000000000000000000000000000000000000000000000000000000846136a8565b90506000806000806104348e89886112f4565b600d8054949850929650909450925083916000906104539084906136a8565b909155506104649050874283610f2c565b50600061047284898d61147a565b9050808d10156104955760405163c972651760e01b815260040160405180910390fd5b61049f818c610602565b508e90506104af81858b896114ac565b60006104bc600288611204565b90508c6104d6826104d060208401846136bb565b85611239565b858b86846104e760208601866136bb565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a8661052460408b0160208c016136f2565b610538896105328a8d6137c0565b906106db565b8d61054660408e018e61370f565b60405161055a9897969594939291906137d3565b60405180910390a350989d50939b5050505050505050505050506100d56001600055565b6002600054036105a157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156105c757604051631574f9f360e01b815260040160405180910390fd5b565b60006105d860208301836136bb565b6001600160a01b0316036105ff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061061660408501602086016136f2565b1561063b576106318561062c604087018761370f565b611660565b9093509050610657565b50346106538561064e604087018761370f565b61167c565b8492505b61065f6112e1565b915080156106d257604051600090339083908381818185875af1925050503d80600081146106a9576040519150601f19603f3d011682016040523d82523d6000602084013e6106ae565b606091505b50509050806106d0576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106f08383670de0b6b3a76400006116b6565b90505b92915050565b6000610725427f00000000000000000000000000000000000000000000000000000000000000006116d4565b905090565b600084815260086020526040812060018101546001600160801b031615158061075257504286115b1561076b57600101546001600160801b03169050610d1b565b60008060006107786106f9565b905060006107a67f00000000000000000000000000000000000000000000000000000000000000008b6136a8565b90505b8181101561081c576000818152600860205260409020600101546001600160801b031680156107f4576000828152600860205260409020549094506001600160801b0316925061081c565b507f0000000000000000000000000000000000000000000000000000000000000000016107a9565b8360000361088f5788935061088c6108326116ea565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061170b565b92505b506108998361172b565b6001850180546001600160801b0319166001600160801b03929092169190911790556108ef6108e87f00000000000000000000000000000000000000000000000000000000000000008b6137c0565b8a84610f2c565b61092d896109276109207f0000000000000000000000000000000000000000000000000000000000000000836136a8565b4290611759565b84610f2c565b6109368861176e565b50600090506008816109687f00000000000000000000000000000000000000000000000000000000000000008d6137c0565b815260208101919091526040016000908120600101546001600160801b0316915061099460028c611204565b6000818152601060205260408120549192508c8c8315610ada57600192506000806109c386898d866000611912565b9150915080600d60008282546109d991906136a8565b909155506109f59050866000846109ef816119e1565b88611a0b565b6109ff81836136a8565b9150610a2f86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b85565b9150610a43610a3e83856106db565b611bcf565b60068054600290610a649084906201000090046001600160701b031661381b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a918261172b565b60068054601090610ab3908490600160801b90046001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae7600184611204565b6000818152601060205260409020549091508015610bf65760019450600080610b14838b8f886001611912565b9150915080600d6000828254610b2a91906136a8565b90915550610b46905083600084610b40816119e1565b8a611bf9565b610b5081836137c0565b9150610b5f610a3e83876106db565b60068054600290610b809084906201000090046001600160701b031661381b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bad8261172b565b60068054601090610bcf908490600160801b90046001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c3057610c22610c08876119e1565b610c11836119e1565b610c1b919061385b565b6000611dea565b8e610c2d8482611e98565b50505b6000610c3b84612092565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610d0b578e610d075a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906121f0565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610d336116ea565b600254909150610d98908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061227b565b600254909450610dfb908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061170b565b9150610e528785610e4d857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122a7565b61230c565b15610e5f57610e5f61234e565b600080610e6d89858a612367565b9092509050610e7c82876137c0565b9550610e8981858a6116b6565b9450610e95858a6137c0565b9650670de0b6b3a7640000610f12610ead89866136a8565b600254610ecb908a90600160801b90046001600160801b03166137c0565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061170b565b1115610f2057610f2061234e565b50505092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f585750505050565b6000848152600860205260408120546001600160801b031690819003610fb257610f818361172b565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611030565b611003610ffe670de0b6b3a7640000610fcb88866137c0565b610fd5919061387b565b85670de0b6b3a7640000610fe9878a6137c0565b610ff3919061387b565b8592919060016123e7565b61172b565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110398461172b565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110ac610ffe82611096670de0b6b3a76400008661387b565b6005546001600160801b031691908860016123e7565b600580546001600160801b0319166001600160801b03929092169190911790556110d58561172b565b600280546000906110f09084906001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061111d8461172b565b6002805460109061113f908490600160801b90046001600160801b0316613892565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c8461172b565b611176908261383b565b600380546001600160801b03808416600160801b0291161790559050600061119d8361248f565b90506111bb816111ac876119e1565b6111b690846138b2565b611dea565b6111c4846124d3565b6111d0576111d061234e565b60006111db85612533565b9050806111fb57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561122e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b03861684529091528120805483929061126b9084906136a8565b90915550506000838152601060205260408120805483929061128e9084906136a8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610725670de0b6b3a7640000612540565b60008060008060006113046116ea565b600254909150611369908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006125cc565b93508761137685896125ed565b11156113845761138461234e565b60025460009081906113e9908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061170b565b93506113ff8a670de0b6b3a7640000868c612602565b50919350909150611412905081836137c0565b61141c90876137c0565b955088611469816114638d611431868c6137c0565b8d61143c8782612710565b877f0000000000000000000000000000000000000000000000000000000000000000612726565b906125ed565b975090945050505093509350935093565b600061148c60408301602084016136f2565b156114985750826114a5565b6114a2848461274b565b90505b9392505050565b6002546001600160801b0316838110156114c8576114c861234e565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611500908390600f0b612760565b101561150e5761150e61234e565b60045461155890610ffe90600160801b90046001600160801b031661153b670de0b6b3a76400008661387b565b600554600160801b90046001600160801b031691908960016123e7565b600580546001600160801b03928316600160801b02921691909117905561157e8161172b565b600280546001600160801b0319166001600160801b03929092169190911790556115a78561172b565b600280546010906115c9908490600160801b90046001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115f68561172b565b60048054601090611618908490600160801b90046001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116478361248f565b90506111bb81611656886119e1565b6111b6908461385b565b60008060405163350b944160e11b815260040160405180910390fd5b6116b16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612786565b505050565b60008260001904841183021582026116cd57600080fd5b5091020490565b60006116e082846138f0565b6106f090846137c0565b600254600454600091610725916001600160801b0390911690600f0b612760565b60006117228261171c8588886116b6565b906127e6565b95945050505050565b60006001600160801b0382111561175557604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161176857826106f0565b50919050565b6006546000908190611791908490600160801b90046001600160801b03166106db565b6006546201000090046001600160701b0316925090508181111561190d5760006117bb83836137c0565b90506117ca610ffe8286612851565b600680546010906117ec908490600160801b90046001600160801b0316613892565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611825858361274b90919063ffffffff16565b90506000611853827f00000000000000000000000000000000000000000000000000000000000000006106db565b905080600d600082825461186791906136a8565b90915550611877905081836137c0565b91506118828261172b565b6002805460009061189d9084906001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118ca82612866565b600480546000906118df908490600f0b613904565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061191f878561274b565b9150600061194d837f00000000000000000000000000000000000000000000000000000000000000006106db565b9050611979817f00000000000000000000000000000000000000000000000000000000000000006106db565b9150831561199c5761198b82826137c0565b61199590846137c0565b92506119b3565b6119a682826137c0565b6119b090846136a8565b92505b868610156119d6576119c68387896116b6565b92506119d38287896116b6565b91505b509550959350505050565b60006001600160ff1b038211156117555760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611a54610ffe82611a37670de0b6b3a76400008661387b565b600554600160801b90046001600160801b031691908a60006123e7565b600580546001600160801b03928316600160801b029216919091179055611a7a8661172b565b611a849082613892565b600480546001600160801b03928316600160801b029216919091179055611aaa8461172b565b60028054600090611ac59084906001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611af283612890565b60048054600090611b07908490600f0b613904565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b378561172b565b60028054601090611b59908490600160801b90046001600160801b0316613892565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b9d84611b978a888a6116b6565b9061274b565b9050611baa8884866116b6565b611bb490826136a8565b905086811115611bc45786810391505b509695505050505050565b60006001600160701b038211156117555760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611c3b57507f0000000000000000000000000000000000000000000000000000000000000000611c3985836137c0565b105b15611c4857611c4861234e565b6004549084900390600f0b611c5d848261385b565b905083611c69866119e1565b138015611c9e57507f0000000000000000000000000000000000000000000000000000000000000000611c9c8383612760565b105b15611cab57611cab61234e565b600354600160801b90046001600160801b0316611ced610ffe82611cd7670de0b6b3a76400008861387b565b6005546001600160801b031691908c60006123e7565b600580546001600160801b0319166001600160801b0392909216919091179055611d1788826137c0565b9050611d228161172b565b600380546001600160801b03928316600160801b029216919091179055611d488361172b565b600280546001600160801b0319166001600160801b0392909216919091179055611d7182612890565b600480546001600160801b0319166001600160801b0392909216919091179055611d9a8761172b565b60028054601090611dbc908490600160801b90046001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611e13611df984836128cc565b611e048460006128cc565b611e0e919061385b565b612890565b9050600081600f0b1315611e685760038054829190600090611e3f9084906001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156116b157611e7d81613931565b60038054600090611e3f9084906001600160801b0316613892565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611ee3916001600160801b0316906137c0565b905080600003611ef75760019150506106f3565b6000611f02856128db565b905080600003611f17576001925050506106f3565b600080611f25838589612977565b9150915080611f3b5760009450505050506106f3565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f779291906139d5565b6040805180830381865af4158015611f93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb79190613a4b565b91509150611fd5611fc7826119e1565b611fd090613a6f565b612af2565b925082611feb57600096505050505050506106f3565b611ff48261172b565b6007805460009061200f9084906001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061203c8161172b565b6007805460109061205e908490600160801b90046001600160801b031661383b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120bb87612c8a565b6040518263ffffffff1660e01b81526004016120d79190613a8b565b6040805180830381865af41580156120f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121179190613a9a565b915091508061212d575060009485945092505050565b600080861161213d576000612147565b61214783876106db565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b03909216916121b291906136a8565b6121bc91906137c0565b9050806000036121d55750600096879650945050505050565b60006121e1838361274b565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561221657612216613aca565b6040519080825280601f01601f191660200182016040528015612240576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612261578692505b828152826000602083013e90999098509650505050505050565b600061229c87878761229588670de0b6b3a76400006137c0565b8787612dc4565b979650505050505050565b60006114a26122e86122c184670de0b6b3a76400006137c0565b611463670de0b6b3a76400006122d7818a612851565b6122e191906137c0565b87906125ed565b6122fa90670de0b6b3a76400006136a8565b611b9784670de0b6b3a76400006137c0565b6000806123438561231b6116ea565b61232591906136a8565b600254610ecb908790600160801b90046001600160801b03166137c0565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806123b18561146385817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006123a7818c612851565b61146391906137c0565b91506123dd827f00000000000000000000000000000000000000000000000000000000000000006106db565b9050935093915050565b6000826000036123f8575084611722565b811561244b5761242961240b84876136a8565b61241585876106db565b61241f888a6106db565b611b9791906136a8565b905060006124378588611759565b905080821015612445578091505b50611722565b82850361245a57506000611722565b61248561246784876137c0565b61247185876125ed565b61247b888a6106db565b611b9791906137c0565b9695505050505050565b60006124b7601060006124a3600286611204565b8152602001908152602001600020546119e1565b6124c9601060006124a3600187611204565b6106f3919061385b565b60006124ff7f0000000000000000000000000000000000000000000000000000000000000000836125ed565b60035461251591906001600160801b03166136a8565b60025461252b906001600160801b0316846106db565b101592915050565b60006106f3826004611e98565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa1580156125a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f39190613ae0565b600061229c8787876125e688670de0b6b3a76400006137c0565b8787612e78565b60006106f08383670de0b6b3a7640000612e9b565b6000808080612653878661264c8b6114636126258c670de0b6b3a76400006137c0565b7f0000000000000000000000000000000000000000000000000000000000000000906125ed565b9190612e9b565b935061267f847f00000000000000000000000000000000000000000000000000000000000000006106db565b915060006126a061269889670de0b6b3a76400006137c0565b8a9088612e9b565b90506126cc817f00000000000000000000000000000000000000000000000000000000000000006125ed565b93506126f8847f00000000000000000000000000000000000000000000000000000000000000006106db565b61270290846136a8565b915050945094509450949050565b600081831161271f57816106f0565b5090919050565b60008061273e846127388a888a612e9b565b90612851565b9050611baa888486612e9b565b60006106f083670de0b6b3a7640000846116b6565b60008061276d8484612ec1565b90925090508061277f5761277f61234e565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526127e0908590612efd565b50505050565b6000816000036127ff5750670de0b6b3a76400006106f3565b8260000361280f575060006106f3565b600061281a836119e1565b9050600061282f61282a866119e1565b612f65565b9050818102612846670de0b6b3a764000082613af9565b90506124858161318b565b60006106f083670de0b6b3a764000084612e9b565b600060016001607f1b038211156117555760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806128ae575060016001607f1b0382135b156117555760405163a5353be560e01b815260040160405180910390fd5b600081831361271f57816106f0565b60035460009081906128f6906001600160801b031684612851565b90506129227f0000000000000000000000000000000000000000000000000000000000000000826136a8565b6002546001600160801b03161115611768576002547f00000000000000000000000000000000000000000000000000000000000000009061296d9083906001600160801b03166137c0565b6114a591906137c0565b61297f613580565b60008061298b84612c8a565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129c69190613a8b565b6040805180830381865af41580156129e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a069190613a9a565b9350905082612a1b575060009150612aea9050565b6000612a42612a3d8461016001518561014001516106db90919063ffffffff16565b6119e1565b612a62612a3d8561012001518661010001516125ed90919063ffffffff16565b612a6c919061385b565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bcf9190613b27565b935093509350935080612beb5750600098975050505050505050565b868414612c1c57612bfb8461172b565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c4d57612c2c83612890565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c7b57612c5d8261172b565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c926135d2565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d8a9116613320565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612dbc92900416613320565b905292915050565b600080612dd48888878787613396565b9050612dee8561171c612de7898c6136a8565b86906106db565b9750612dfb8489856116b6565b975087811015612e0d57612e0d61234e565b878103670de0b6b3a76400008110612e4257612e3b612e34670de0b6b3a764000088612851565b82906127e6565b9050612e5a565b612e57612e34670de0b6b3a76400008861274b565b90505b80881015612e6a57612e6a61234e565b909603979650505050505050565b600080612e898888888888886133c5565b909250905080611bc457611bc461234e565b6000826000190484118302158202612eb257600080fd5b50910281810615159190040190565b600080600083612ed0866119e1565b612eda919061385b565b90506000811215612ef25760008092509250506106d4565b946001945092505050565b6000612f126001600160a01b03841683613488565b90508051600014158015612f37575080806020019051810190612f359190613b5d565b155b156116b157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612f875760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061300a9084901c6119e1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136131a657506000919050565b680755bf798b4a1bf1e582126131cf576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061248574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119e1565b600080670de0b6b3a76400006133346106f9565b61333e919061387b565b905080831161334e576000613358565b61335881846137c0565b91506114a561338f670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061387b565b839061274b565b60006133a285856127e6565b6133bb6133b38661171c868b6125ed565b859085612e9b565b61248591906136a8565b60008060006133d78989888888613396565b90506133e78661171c898b6136a8565b9750878110156133fe57600080925092505061347d565b87810361340c818688612e9b565b9050670de0b6b3a7640000811061343957613432612e34670de0b6b3a764000089612851565b9050613451565b61344e612e34670de0b6b3a76400008961274b565b90505b61345b8186612851565b9050808a10156134735760008093509350505061347d565b8903925060019150505b965096945050505050565b60606106f08383600084600080856001600160a01b031684866040516134ae9190613b7a565b60006040518083038185875af1925050503d80600081146134eb576040519150601f19603f3d011682016040523d82523d6000602084013e6134f0565b606091505b50915091506124858683836060826135105761350b82613557565b6114a5565b815115801561352757506001600160a01b0384163b155b1561355057604051639996b31560e01b81526001600160a01b0385166004820152602401612f5c565b50806114a5565b8051156135675780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135946135d2565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561364957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561367557600080fd5b85016060818803121561368757600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106f3576106f3613692565b6000602082840312156136cd57600080fd5b81356001600160a01b03811681146114a557600080fd5b80151581146105ff57600080fd5b60006020828403121561370457600080fd5b81356114a5816136e4565b6000808335601e1984360301811261372657600080fd5b83018035915067ffffffffffffffff82111561374157600080fd5b6020019150368190038213156106d457600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a082015260006137b360c083018486613756565b9998505050505050505050565b818103818111156106f3576106f3613692565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061380d60e083018486613756565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561277f5761277f613692565b6001600160801b0381811683821601908082111561277f5761277f613692565b818103600083128015838313168383128216171561277f5761277f613692565b80820281158282048414176106f3576106f3613692565b6001600160801b0382811682821603908082111561277f5761277f613692565b80820182811260008312801582168215821617156138d2576138d2613692565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826138ff576138ff6138da565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106f3576106f3613692565b600081600f0b60016001607f1b0319810361394e5761394e613692565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139e9828551613957565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a5e57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a8457613a84613692565b5060000390565b61018081016106f38284613957565b60008060408385031215613aad57600080fd5b825191506020830151613abf816136e4565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613af257600080fd5b5051919050565b600082613b0857613b086138da565b600160ff1b821460001984141615613b2257613b22613692565b500590565b60008060008060808587031215613b3d57600080fd5b8451935060208501519250604085015191506060850151613687816136e4565b600060208284031215613b6f57600080fd5b81516114a5816136e4565b6000825160005b81811015613b9b5760208186018101518583015201613b81565b50600092019182525091905056fea2646970667358221220d637e1024af63302bbadca704f726a4631a3c6a687ab024046ef9938e87729bb64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
