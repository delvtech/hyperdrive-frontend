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
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620040d5380380620040d5833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613c09620004cc60003960005050600050506000505060008181610154015281816103640152612c950152600081816114a501528181611be301528181611c46015281816123f801528181612873015281816128af01528181612aae0152612c6f01526000818161084301528181610d6e01528181610db001528181610ea201528181611318015281816113770152612c490152600061180201526000818161192801528181612579015281816125f20152612daf015260008181610a0701528181610e2301528181611412015281816118fc01526125c6015260008181610e02015281816125450152612d6b01526000818161086401528181610d4c01528181610dd101528181610ec3015281816112f6015281816113980152612cbb015260008181610232015281816103fc0152818161093f01526132cd0152600081816106fd0152818161077d015281816107f3015281816108bf01526108f7015260008181603d0152818161165c0152612477015260005050613c096000f3fe60806040526004361061002d5760003560e01c8063cba2e58d14610082578063dbbe8070146100ae57600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b610095610090366004613683565b6100c1565b6040805192835260208301919091520160405180910390f35b6100956100bc366004613683565b6100de565b6000806100d0868686866100ed565b915091505b94509492505050565b6000806100d08686868661031d565b6000806100f861057e565b600654610100900460ff1615610121576040516321081abf60e01b815260040160405180910390fd5b6101296105a8565b610132836105c9565b60008061013f8886610602565b9092509050600061015083836106d7565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101935760405163211ddda360e11b815260040160405180910390fd5b868210156101b4576040516342af972b60e01b815260040160405180910390fd5b60006101be6106f5565b90506101ce818460046001610726565b5060008060006101de8787610d1d565b919a5091945090925090508b88101561020a5760405163c972651760e01b815260040160405180910390fd5b81600d600082825461021c91906136f8565b9091555061022d9050844283610eff565b6102577f0000000000000000000000000000000000000000000000000000000000000000856136f8565b98506102658389888c61103d565b600061027260018b6111d7565b905061028b8161028560208e018e61370b565b8b61120c565b8d8a8a898e8561029e602083018361370b565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102db6040880160208901613742565b896102e960408a018a61375f565b6040516102fc97969594939291906137cf565b60405180910390a350909b5050505050505050505050506100d56001600055565b60008061032861057e565b600654610100900460ff1615610351576040516321081abf60e01b815260040160405180910390fd5b6103596105a8565b610362836105c9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103a35760405163211ddda360e11b815260040160405180910390fd5b60006103ad6112b4565b9050848110156103d0576040516342af972b60e01b815260040160405180910390fd5b60006103da6106f5565b905060006103f36103e96106f5565b8460046001610726565b905060006104217f0000000000000000000000000000000000000000000000000000000000000000846136f8565b90506000806000806104348e89886112c7565b600d8054949850929650909450925083916000906104539084906136f8565b909155506104649050874283610eff565b50600061047284898d61144d565b9050808d10156104955760405163c972651760e01b815260040160405180910390fd5b61049f818c610602565b508e90506104af81858b8961147f565b60006104bc6002886111d7565b90508c6104d6826104d0602084018461370b565b8561120c565b858b86846104e7602086018661370b565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a8661052460408b0160208c01613742565b610538896105328a8d613810565b906106d7565b8d61054660408e018e61375f565b60405161055a989796959493929190613823565b60405180910390a350989d50939b5050505050505050505050506100d56001600055565b6002600054036105a157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156105c757604051631574f9f360e01b815260040160405180910390fd5b565b60006105d8602083018361370b565b6001600160a01b0316036105ff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806106166040850160208601613742565b1561063b576106318561062c604087018761375f565b611633565b9093509050610653565b50346106538561064e604087018761375f565b61164f565b61065b6112b4565b915080156106ce57604051600090339083908381818185875af1925050503d80600081146106a5576040519150601f19603f3d011682016040523d82523d6000602084013e6106aa565b606091505b50509050806106cc576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106ec8383670de0b6b3a7640000611689565b90505b92915050565b6000610721427f00000000000000000000000000000000000000000000000000000000000000006116a7565b905090565b600084815260086020526040812060018101546001600160801b031615158061074e57504286115b1561076757600101546001600160801b03169050610d15565b60008060006107746106f5565b905060006107a27f00000000000000000000000000000000000000000000000000000000000000008b6136f8565b90505b81811015610818576000818152600860205260409020600101546001600160801b031680156107f0576000828152600860205260409020549094506001600160801b03169250610818565b507f0000000000000000000000000000000000000000000000000000000000000000016107a5565b8360000361088b5788935061088861082e6116bd565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116de565b92505b50610895836116fe565b6001850180546001600160801b0319166001600160801b03929092169190911790556108eb6108e47f00000000000000000000000000000000000000000000000000000000000000008b613810565b8a84610eff565b6109298961092361091c7f0000000000000000000000000000000000000000000000000000000000000000836136f8565b429061172c565b84610eff565b61093288611741565b50600090506008816109647f00000000000000000000000000000000000000000000000000000000000000008d613810565b815260208101919091526040016000908120600101546001600160801b0316915061099060028c6111d7565b6000818152601060205260408120549192508c8c8315610ad657600192506000806109bf86898d8660006118e5565b9150915080600d60008282546109d591906136f8565b909155506109f19050866000846109eb816119b4565b886119de565b6109fb81836136f8565b9150610a2b86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b58565b9150610a3f610a3a83856106d7565b611ba2565b60068054600290610a609084906201000090046001600160701b031661386b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8d826116fe565b60068054601090610aaf908490600160801b90046001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae36001846111d7565b6000818152601060205260409020549091508015610bf25760019450600080610b10838b8f8860016118e5565b9150915080600d6000828254610b2691906136f8565b90915550610b42905083600084610b3c816119b4565b8a611bcc565b610b4c8183613810565b9150610b5b610a3a83876106d7565b60068054600290610b7c9084906201000090046001600160701b031661386b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba9826116fe565b60068054601090610bcb908490600160801b90046001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2c57610c1e610c04876119b4565b610c0d836119b4565b610c1791906138ab565b6000611dbd565b8e610c298482611dfc565b50505b6000610c3784611ff6565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610d05578e610d015a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612142565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610d2d6116bd565b600254909150610d92908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006121cd565b600254909450610df5908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116de565b9150610e4c8785610e47857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121f9565b61225e565b15610e5957610e596122a0565b610e65878588856122b9565b91965094509250670de0b6b3a7640000610ee7610e8287846136f8565b600254610ea0908890600160801b90046001600160801b0316613810565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116de565b1115610ef557610ef56122a0565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f2b5750505050565b6000848152600860205260408120546001600160801b031690819003610f8557610f54836116fe565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611003565b610fd6610fd1670de0b6b3a7640000610f9e8886613810565b610fa891906138cb565b85670de0b6b3a7640000610fbc878a613810565b610fc691906138cb565b859291906001612305565b6116fe565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61100c846116fe565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661107f610fd182611069670de0b6b3a7640000866138cb565b6005546001600160801b03169190886001612305565b600580546001600160801b0319166001600160801b03929092169190911790556110a8856116fe565b600280546000906110c39084906001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110f0846116fe565b60028054601090611112908490600160801b90046001600160801b03166138e2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061113f846116fe565b611149908261388b565b600380546001600160801b03808416600160801b02911617905590506000611170836123ad565b905061118e8161117f876119b4565b6111899084613902565b611dbd565b611197846123f1565b6111a3576111a36122a0565b60006111ae85612451565b9050806111ce57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112015760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b03861684529091528120805483929061123e9084906136f8565b9091555050600083815260106020526040812080548392906112619084906136f8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610721670de0b6b3a764000061245e565b60008060008060006112d76116bd565b60025490915061133c908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006124ea565b935087611349858961250b565b1115611357576113576122a0565b60025460009081906113bc908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116de565b93506113d28a670de0b6b3a7640000868c612520565b509193509091506113e590508183613810565b6113ef9087613810565b95508861143c816114368d611404868c613810565b8d61140f878261262e565b877f0000000000000000000000000000000000000000000000000000000000000000612644565b9061250b565b975090945050505093509350935093565b600061145f6040830160208401613742565b1561146b575082611478565b6114758484612669565b90505b9392505050565b6002546001600160801b03168381101561149b5761149b6122a0565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114d3908390600f0b61267e565b10156114e1576114e16122a0565b60045461152b90610fd190600160801b90046001600160801b031661150e670de0b6b3a7640000866138cb565b600554600160801b90046001600160801b03169190896001612305565b600580546001600160801b03928316600160801b029216919091179055611551816116fe565b600280546001600160801b0319166001600160801b039290921691909117905561157a856116fe565b6002805460109061159c908490600160801b90046001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115c9856116fe565b600480546010906115eb908490600160801b90046001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061161a836123ad565b905061118e81611629886119b4565b61118990846138ab565b60008060405163350b944160e11b815260040160405180910390fd5b6116846001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866126a4565b505050565b60008260001904841183021582026116a057600080fd5b5091020490565b60006116b38284613940565b6106ec9084613810565b600254600454600091610721916001600160801b0390911690600f0b61267e565b60006116f5826116ef858888611689565b90612704565b95945050505050565b60006001600160801b0382111561172857604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161173b57826106ec565b50919050565b6006546000908190611764908490600160801b90046001600160801b03166106d7565b6006546201000090046001600160701b031692509050818111156118e057600061178e8383613810565b905061179d610fd1828661276f565b600680546010906117bf908490600160801b90046001600160801b03166138e2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117f8858361266990919063ffffffff16565b90506000611826827f00000000000000000000000000000000000000000000000000000000000000006106d7565b905080600d600082825461183a91906136f8565b9091555061184a90508183613810565b9150611855826116fe565b600280546000906118709084906001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061189d82612784565b600480546000906118b2908490600f0b613954565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806118f28785612669565b91506000611920837f00000000000000000000000000000000000000000000000000000000000000006106d7565b905061194c817f00000000000000000000000000000000000000000000000000000000000000006106d7565b9150831561196f5761195e8282613810565b6119689084613810565b9250611986565b6119798282613810565b61198390846136f8565b92505b868610156119a957611999838789611689565b92506119a6828789611689565b91505b509550959350505050565b60006001600160ff1b038211156117285760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611a27610fd182611a0a670de0b6b3a7640000866138cb565b600554600160801b90046001600160801b031691908a6000612305565b600580546001600160801b03928316600160801b029216919091179055611a4d866116fe565b611a5790826138e2565b600480546001600160801b03928316600160801b029216919091179055611a7d846116fe565b60028054600090611a989084906001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ac5836127ae565b60048054600090611ada908490600f0b613954565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b0a856116fe565b60028054601090611b2c908490600160801b90046001600160801b03166138e2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b7084611b6a8a888a611689565b90612669565b9050611b7d888486611689565b611b8790826136f8565b905086811115611b975786810391505b509695505050505050565b60006001600160701b038211156117285760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611c0e57507f0000000000000000000000000000000000000000000000000000000000000000611c0c8583613810565b105b15611c1b57611c1b6122a0565b6004549084900390600f0b611c3084826138ab565b905083611c3c866119b4565b138015611c7157507f0000000000000000000000000000000000000000000000000000000000000000611c6f838361267e565b105b15611c7e57611c7e6122a0565b600354600160801b90046001600160801b0316611cc0610fd182611caa670de0b6b3a7640000886138cb565b6005546001600160801b031691908c6000612305565b600580546001600160801b0319166001600160801b0392909216919091179055611cea8882613810565b9050611cf5816116fe565b600380546001600160801b03928316600160801b029216919091179055611d1b836116fe565b600280546001600160801b0319166001600160801b0392909216919091179055611d44826127ae565b600480546001600160801b0319166001600160801b0392909216919091179055611d6d876116fe565b60028054601090611d8f908490600160801b90046001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611dd890610fd1906001600160801b031684846127ea565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e47916001600160801b031690613810565b905080600003611e5b5760019150506106ef565b6000611e6685612851565b905080600003611e7b576001925050506106ef565b600080611e898385896128ed565b9150915080611e9f5760009450505050506106ef565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611edb9291906139ff565b6040805180830381865af4158015611ef7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1b9190613a75565b91509150611f39611f2b826119b4565b611f3490613a99565b612a68565b925082611f4f57600096505050505050506106ef565b611f58826116fe565b60078054600090611f739084906001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fa0816116fe565b60078054601090611fc2908490600160801b90046001600160801b031661388b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61201f87612c00565b6040518263ffffffff1660e01b815260040161203b9190613ab5565b6040805180830381865af4158015612057573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061207b9190613ac4565b9150915080612091575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916120f7916136f8565b6121019190613810565b90508060000361211957506000958695509350505050565b6000808711612129576000612134565b612134848884611689565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561216857612168613af4565b6040519080825280601f01601f191660200182016040528015612192576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121b3578692505b828152826000602083013e90999098509650505050505050565b60006121ee8787876121e788670de0b6b3a7640000613810565b8787612d3a565b979650505050505050565b600061147561223a61221384670de0b6b3a7640000613810565b611436670de0b6b3a7640000612229818a61276f565b6122339190613810565b879061250b565b61224c90670de0b6b3a76400006136f8565b611b6a84670de0b6b3a7640000613810565b6000806122958561226d6116bd565b61227791906136f8565b600254610ea0908790600160801b90046001600160801b0316613810565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006122cc898789612d5d565b90925090506122db8289613810565b975060006122ea82888a611689565b90506122f6818b613810565b9a989950979650505050505050565b6000826000036123165750846116f5565b81156123695761234761232984876136f8565b61233385876106d7565b61233d888a6106d7565b611b6a91906136f8565b90506000612355858861172c565b905080821015612363578091505b506116f5565b828503612378575060006116f5565b6123a36123858487613810565b61238f858761250b565b612399888a6106d7565b611b6a9190613810565b9695505050505050565b60006123d5601060006123c16002866111d7565b8152602001908152602001600020546119b4565b6123e7601060006123c16001876111d7565b6106ef91906138ab565b600061241d7f00000000000000000000000000000000000000000000000000000000000000008361250b565b60035461243391906001600160801b03166136f8565b600254612449906001600160801b0316846106d7565b101592915050565b60006106ef826004611dfc565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa1580156124c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ef9190613b0a565b60006121ee87878761250488670de0b6b3a7640000613810565b8787612ddd565b60006106ec8383670de0b6b3a7640000612dee565b6000808080612571878661256a8b6114366125438c670de0b6b3a7640000613810565b7f00000000000000000000000000000000000000000000000000000000000000009061250b565b9190612dee565b935061259d847f00000000000000000000000000000000000000000000000000000000000000006106d7565b915060006125be6125b689670de0b6b3a7640000613810565b8a9088612dee565b90506125ea817f000000000000000000000000000000000000000000000000000000000000000061250b565b9350612616847f00000000000000000000000000000000000000000000000000000000000000006106d7565b61262090846136f8565b915050945094509450949050565b600081831161263d57816106ec565b5090919050565b60008061265c846126568a888a612dee565b9061276f565b9050611b7d888486612dee565b60006106ec83670de0b6b3a764000084611689565b60008061268b8484612e14565b90925090508061269d5761269d6122a0565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526126fe908590612e50565b50505050565b60008160000361271d5750670de0b6b3a76400006106ef565b8260000361272d575060006106ef565b6000612738836119b4565b9050600061274d612748866119b4565b612eb8565b9050818102612764670de0b6b3a764000082613b23565b90506123a3816130de565b60006106ec83670de0b6b3a764000084612dee565b600060016001607f1b038211156117285760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806127cc575060016001607f1b0382135b156117285760405163a5353be560e01b815260040160405180910390fd5b6000806127f8846000613273565b612803846000613273565b61280d91906138ab565b905060008113156128295761282281866136f8565b9450612848565b60008112156128485761283b81613a99565b6128459086613810565b94505b50929392505050565b600354600090819061286c906001600160801b03168461276f565b90506128987f0000000000000000000000000000000000000000000000000000000000000000826136f8565b6002546001600160801b0316111561173b576002547f0000000000000000000000000000000000000000000000000000000000000000906128e39083906001600160801b0316613810565b6114789190613810565b6128f56135d0565b60008061290184612c00565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161293c9190613ab5565b6040805180830381865af4158015612958573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297c9190613ac4565b9350905082612991575060009150612a609050565b60006129b86129b38461016001518561014001516106d790919063ffffffff16565b6119b4565b6129d86129b385610120015186610100015161250b90919063ffffffff16565b6129e291906138ab565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b459190613b51565b935093509350935080612b615750600098975050505050505050565b868414612b9257612b71846116fe565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bc357612ba2836127ae565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bf157612bd3826116fe565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c08613622565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d009116613282565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d3292900416613282565b905292915050565b600080612d4b8888888888886132f8565b909250905080611b9757611b976122a0565b600080612da78561143685817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612d9d818c61276f565b6114369190613810565b9150612dd3827f00000000000000000000000000000000000000000000000000000000000000006106d7565b9050935093915050565b600080612d4b8888888888886133c0565b6000826000190484118302158202612e0557600080fd5b50910281810615159190040190565b600080600083612e23866119b4565b612e2d91906138ab565b90506000811215612e455760008092509250506106d0565b946001945092505050565b6000612e656001600160a01b03841683613480565b90508051600014158015612e8a575080806020019051810190612e889190613b87565b155b1561168457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612eda5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f5d9084901c6119b4565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130f957506000919050565b680755bf798b4a1bf1e58212613122576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906123a374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119b4565b600081831361263d57816106ec565b600080670de0b6b3a76400006132966106f5565b6132a091906138cb565b90508083116132b05760006132ba565b6132ba8184613810565b91506114786132f1670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138cb565b8390612669565b600080600061330a898988888861348e565b9050613324866116ef61331d8a8d6136f8565b87906106d7565b9850613331858a86611689565b9850888110156133485760008092509250506133b5565b888103670de0b6b3a7640000811061337d5761337661336f670de0b6b3a76400008961276f565b8290612704565b9050613395565b61339261336f670de0b6b3a764000089612669565b90505b808910156133ab576000809350935050506133b5565b8803925060019150505b965096945050505050565b60008060006133d2898988888861348e565b90506133e2866116ef898b6136f8565b9750878110156133f95760008092509250506133b5565b878103613407818688612dee565b9050670de0b6b3a764000081106134345761342d61336f670de0b6b3a76400008961276f565b905061344c565b61344961336f670de0b6b3a764000089612669565b90505b613456818661276f565b9050808a101561346e576000809350935050506133b5565b90980398600198509650505050505050565b60606106ec838360006134bd565b600061349a8585612704565b6134b36134ab866116ef868b61250b565b859085612dee565b6123a391906136f8565b6060814710156134e25760405163cd78605960e01b8152306004820152602401612eaf565b600080856001600160a01b031684866040516134fe9190613ba4565b60006040518083038185875af1925050503d806000811461353b576040519150601f19603f3d011682016040523d82523d6000602084013e613540565b606091505b50915091506123a38683836060826135605761355b826135a7565b611478565b815115801561357757506001600160a01b0384163b155b156135a057604051639996b31560e01b81526001600160a01b0385166004820152602401612eaf565b5080611478565b8051156135b75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135e4613622565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561369957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136c557600080fd5b8501606081880312156136d757600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106ef576106ef6136e2565b60006020828403121561371d57600080fd5b81356001600160a01b038116811461147857600080fd5b80151581146105ff57600080fd5b60006020828403121561375457600080fd5b813561147881613734565b6000808335601e1984360301811261377657600080fd5b83018035915067ffffffffffffffff82111561379157600080fd5b6020019150368190038213156106d057600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061380360c0830184866137a6565b9998505050505050505050565b818103818111156106ef576106ef6136e2565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061385d60e0830184866137a6565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561269d5761269d6136e2565b6001600160801b0381811683821601908082111561269d5761269d6136e2565b818103600083128015838313168383128216171561269d5761269d6136e2565b80820281158282048414176106ef576106ef6136e2565b6001600160801b0382811682821603908082111561269d5761269d6136e2565b8082018281126000831280158216821582161715613922576139226136e2565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261394f5761394f61392a565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106ef576106ef6136e2565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613a13828551613981565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a8857600080fd5b505080516020909101519092909150565b6000600160ff1b8201613aae57613aae6136e2565b5060000390565b61018081016106ef8284613981565b60008060408385031215613ad757600080fd5b825191506020830151613ae981613734565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613b1c57600080fd5b5051919050565b600082613b3257613b3261392a565b600160ff1b821460001984141615613b4c57613b4c6136e2565b500590565b60008060008060808587031215613b6757600080fd5b84519350602085015192506040850151915060608501516136d781613734565b600060208284031215613b9957600080fd5b815161147881613734565b6000825160005b81811015613bc55760208186018101518583015201613bab565b50600092019182525091905056fea2646970667358221220193ea63ed9e48615624ac34545a6525ff67fca295c7dbae312768802985ee9ae64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
