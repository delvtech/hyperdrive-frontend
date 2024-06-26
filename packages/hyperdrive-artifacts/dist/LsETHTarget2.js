export const LsETHTarget2 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200405138038062004051833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b8b620004c660003960005050600050506000505060008181610100015281816103100152612ccb01526000818161147e01528181611bbc01528181611c1f01528181612486015281816128a9015281816128e501528181612ae40152612ca50152600081816107f301528181610d2001528181610d6201528181610e79015281816112f1015281816113500152612c7f015260006117db015260008181611901015281816123650152818161260701526126800152600081816109b701528181610dd5015281816113eb015281816118d50152612654015260008181610db40152818161232101526125d301526000818161081401528181610cfe01528181610d8301528181610e9a015281816112cf015281816113710152612cf10152600081816101de015281816103a8015281816108ef01526133170152600081816106ad0152818161072d015281816107a30152818161086f01526108a70152600081816116350152612505015260005050613b8b6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046135df565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046135df565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610687565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a5565b905061017a8184600460016106d6565b50600080600061018a8787610ccf565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613654565b909155506101d99050844283610ed8565b6102037f000000000000000000000000000000000000000000000000000000000000000085613654565b98506102118389888c611016565b600061021e60018b6111b0565b90506102378161023160208e018e613667565b8b6111e5565b8d8a8a898e8561024a6020830183613667565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a868886610287604088016020890161369e565b8961029560408a018a6136bb565b6040516102a8979695949392919061372b565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b600061035961128d565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a5565b9050600061039f6103956106a5565b84600460016106d6565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613654565b90506000806000806103e08e89886112a0565b600d8054949850929650909450925083916000906103ff908490613654565b909155506104109050874283610ed8565b50600061041e84898d611426565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b89611458565b60006104686002886111b0565b90508c6104828261047c6020840184613667565b856111e5565b858b86846104936020860186613667565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c0161369e565b6104e4896104de8a8d61376c565b90610687565b8d6104f260408e018e6136bb565b60405161050698979695949392919061377f565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b60006105846020830183613667565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105c2604085016020860161369e565b156105e7576105dd856105d860408701876136bb565b61160c565b9093509050610603565b50346105ff856105fa60408701876136bb565b611628565b8492505b61060b61128d565b9150801561067e57604051600090339083908381818185875af1925050503d8060008114610655576040519150601f19603f3d011682016040523d82523d6000602084013e61065a565b606091505b505090508061067c576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061069c8383670de0b6b3a7640000611662565b90505b92915050565b60006106d1427f0000000000000000000000000000000000000000000000000000000000000000611680565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fe57504286115b1561071757600101546001600160801b03169050610cc7565b60008060006107246106a5565b905060006107527f00000000000000000000000000000000000000000000000000000000000000008b613654565b90505b818110156107c8576000818152600860205260409020600101546001600160801b031680156107a0576000828152600860205260409020549094506001600160801b031692506107c8565b507f000000000000000000000000000000000000000000000000000000000000000001610755565b8360000361083b578893506108386107de611696565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116b7565b92505b50610845836116d7565b6001850180546001600160801b0319166001600160801b039290921691909117905561089b6108947f00000000000000000000000000000000000000000000000000000000000000008b61376c565b8a84610ed8565b6108d9896108d36108cc7f000000000000000000000000000000000000000000000000000000000000000083613654565b4290611705565b84610ed8565b6108e28861171a565b50600090506008816109147f00000000000000000000000000000000000000000000000000000000000000008d61376c565b815260208101919091526040016000908120600101546001600160801b0316915061094060028c6111b0565b6000818152601060205260408120549192508c8c8315610a86576001925060008061096f86898d8660006118be565b9150915080600d60008282546109859190613654565b909155506109a190508660008461099b8161198d565b886119b7565b6109ab8183613654565b91506109db86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b31565b91506109ef6109ea8385610687565b611b7b565b60068054600290610a109084906201000090046001600160701b03166137c7565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3d826116d7565b60068054601090610a5f908490600160801b90046001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a936001846111b0565b6000818152601060205260409020549091508015610ba25760019450600080610ac0838b8f8860016118be565b9150915080600d6000828254610ad69190613654565b90915550610af2905083600084610aec8161198d565b8a611ba5565b610afc818361376c565b9150610b0b6109ea8387610687565b60068054600290610b2c9084906201000090046001600160701b03166137c7565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b59826116d7565b60068054601090610b7b908490600160801b90046001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bdc57610bce610bb48761198d565b610bbd8361198d565b610bc79190613807565b6000611d96565b8e610bd98482611e44565b50505b6000610be78461203e565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb7578e610cb35a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061219c565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cdf611696565b600254909150610d44908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612227565b600254909450610da7908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116b7565b9150610dfe8785610df9857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612253565b6122b8565b15610e0b57610e0b6122fa565b600080610e1989858a612313565b9092509050610e28828761376c565b9550610e3581858a611662565b9450610e41858a61376c565b9650670de0b6b3a7640000610ebe610e598986613654565b600254610e77908a90600160801b90046001600160801b031661376c565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116b7565b1115610ecc57610ecc6122fa565b50505092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f045750505050565b6000848152600860205260408120546001600160801b031690819003610f5e57610f2d836116d7565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610fdc565b610faf610faa670de0b6b3a7640000610f77888661376c565b610f819190613827565b85670de0b6b3a7640000610f95878a61376c565b610f9f9190613827565b859291906001612393565b6116d7565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fe5846116d7565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611058610faa82611042670de0b6b3a764000086613827565b6005546001600160801b03169190886001612393565b600580546001600160801b0319166001600160801b0392909216919091179055611081856116d7565b6002805460009061109c9084906001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110c9846116d7565b600280546010906110eb908490600160801b90046001600160801b031661383e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611118846116d7565b61112290826137e7565b600380546001600160801b03808416600160801b029116179055905060006111498361243b565b9050611167816111588761198d565b611162908461385e565b611d96565b6111708461247f565b61117c5761117c6122fa565b6000611187856124df565b9050806111a757604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111da5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611217908490613654565b90915550506000838152601060205260408120805483929061123a908490613654565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106d1670de0b6b3a76400006124ec565b60008060008060006112b0611696565b600254909150611315908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612578565b9350876113228589612599565b1115611330576113306122fa565b6002546000908190611395908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116b7565b93506113ab8a670de0b6b3a7640000868c6125ae565b509193509091506113be9050818361376c565b6113c8908761376c565b9550886114158161140f8d6113dd868c61376c565b8d6113e887826126bc565b877f00000000000000000000000000000000000000000000000000000000000000006126d2565b90612599565b975090945050505093509350935093565b6000611438604083016020840161369e565b15611444575082611451565b61144e84846126f7565b90505b9392505050565b6002546001600160801b031683811015611474576114746122fa565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114ac908390600f0b61270c565b10156114ba576114ba6122fa565b60045461150490610faa90600160801b90046001600160801b03166114e7670de0b6b3a764000086613827565b600554600160801b90046001600160801b03169190896001612393565b600580546001600160801b03928316600160801b02921691909117905561152a816116d7565b600280546001600160801b0319166001600160801b0392909216919091179055611553856116d7565b60028054601090611575908490600160801b90046001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115a2856116d7565b600480546010906115c4908490600160801b90046001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115f38361243b565b9050611167816116028861198d565b6111629084613807565b60008060405163350b944160e11b815260040160405180910390fd5b61165d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612732565b505050565b600082600019048411830215820261167957600080fd5b5091020490565b600061168c828461389c565b61069c908461376c565b6002546004546000916106d1916001600160801b0390911690600f0b61270c565b60006116ce826116c8858888611662565b90612792565b95945050505050565b60006001600160801b0382111561170157604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611714578261069c565b50919050565b600654600090819061173d908490600160801b90046001600160801b0316610687565b6006546201000090046001600160701b031692509050818111156118b9576000611767838361376c565b9050611776610faa82866127fd565b60068054601090611798908490600160801b90046001600160801b031661383e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117d185836126f790919063ffffffff16565b905060006117ff827f0000000000000000000000000000000000000000000000000000000000000000610687565b905080600d60008282546118139190613654565b909155506118239050818361376c565b915061182e826116d7565b600280546000906118499084906001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061187682612812565b6004805460009061188b908490600f0b6138b0565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806118cb87856126f7565b915060006118f9837f0000000000000000000000000000000000000000000000000000000000000000610687565b9050611925817f0000000000000000000000000000000000000000000000000000000000000000610687565b9150831561194857611937828261376c565b611941908461376c565b925061195f565b611952828261376c565b61195c9084613654565b92505b8686101561198257611972838789611662565b925061197f828789611662565b91505b509550959350505050565b60006001600160ff1b038211156117015760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611a00610faa826119e3670de0b6b3a764000086613827565b600554600160801b90046001600160801b031691908a6000612393565b600580546001600160801b03928316600160801b029216919091179055611a26866116d7565b611a30908261383e565b600480546001600160801b03928316600160801b029216919091179055611a56846116d7565b60028054600090611a719084906001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a9e8361283c565b60048054600090611ab3908490600f0b6138b0565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ae3856116d7565b60028054601090611b05908490600160801b90046001600160801b031661383e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b4984611b438a888a611662565b906126f7565b9050611b56888486611662565b611b609082613654565b905086811115611b705786810391505b509695505050505050565b60006001600160701b038211156117015760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611be757507f0000000000000000000000000000000000000000000000000000000000000000611be5858361376c565b105b15611bf457611bf46122fa565b6004549084900390600f0b611c098482613807565b905083611c158661198d565b138015611c4a57507f0000000000000000000000000000000000000000000000000000000000000000611c48838361270c565b105b15611c5757611c576122fa565b600354600160801b90046001600160801b0316611c99610faa82611c83670de0b6b3a764000088613827565b6005546001600160801b031691908c6000612393565b600580546001600160801b0319166001600160801b0392909216919091179055611cc3888261376c565b9050611cce816116d7565b600380546001600160801b03928316600160801b029216919091179055611cf4836116d7565b600280546001600160801b0319166001600160801b0392909216919091179055611d1d8261283c565b600480546001600160801b0319166001600160801b0392909216919091179055611d46876116d7565b60028054601090611d68908490600160801b90046001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611dbf611da58483612878565b611db0846000612878565b611dba9190613807565b61283c565b9050600081600f0b1315611e145760038054829190600090611deb9084906001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561165d57611e29816138dd565b60038054600090611deb9084906001600160801b031661383e565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e8f916001600160801b03169061376c565b905080600003611ea357600191505061069f565b6000611eae85612887565b905080600003611ec35760019250505061069f565b600080611ed1838589612923565b9150915080611ee757600094505050505061069f565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f23929190613981565b6040805180830381865af4158015611f3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f6391906139f7565b91509150611f81611f738261198d565b611f7c90613a1b565b612a9e565b925082611f97576000965050505050505061069f565b611fa0826116d7565b60078054600090611fbb9084906001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fe8816116d7565b6007805460109061200a908490600160801b90046001600160801b03166137e7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61206787612c36565b6040518263ffffffff1660e01b81526004016120839190613a37565b6040805180830381865af415801561209f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c39190613a46565b91509150806120d9575060009485945092505050565b60008086116120e95760006120f3565b6120f38387610687565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b039092169161215e9190613654565b612168919061376c565b9050806000036121815750600096879650945050505050565b600061218d83836126f7565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121c2576121c2613a76565b6040519080825280601f01601f1916602001820160405280156121ec576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561220d578692505b828152826000602083013e90999098509650505050505050565b600061224887878761224188670de0b6b3a764000061376c565b8787612d70565b979650505050505050565b600061144e61229461226d84670de0b6b3a764000061376c565b61140f670de0b6b3a7640000612283818a6127fd565b61228d919061376c565b8790612599565b6122a690670de0b6b3a7640000613654565b611b4384670de0b6b3a764000061376c565b6000806122ef856122c7611696565b6122d19190613654565b600254610e77908790600160801b90046001600160801b031661376c565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061235d8561140f85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612353818c6127fd565b61140f919061376c565b9150612389827f0000000000000000000000000000000000000000000000000000000000000000610687565b9050935093915050565b6000826000036123a45750846116ce565b81156123f7576123d56123b78487613654565b6123c18587610687565b6123cb888a610687565b611b439190613654565b905060006123e38588611705565b9050808210156123f1578091505b506116ce565b828503612406575060006116ce565b612431612413848761376c565b61241d8587612599565b612427888a610687565b611b43919061376c565b9695505050505050565b60006124636010600061244f6002866111b0565b81526020019081526020016000205461198d565b6124756010600061244f6001876111b0565b61069f9190613807565b60006124ab7f000000000000000000000000000000000000000000000000000000000000000083612599565b6003546124c191906001600160801b0316613654565b6002546124d7906001600160801b031684610687565b101592915050565b600061069f826004611e44565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f0290602401602060405180830381865afa158015612554573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069f9190613a8c565b600061224887878761259288670de0b6b3a764000061376c565b8787612e24565b600061069c8383670de0b6b3a7640000612e47565b60008080806125ff87866125f88b61140f6125d18c670de0b6b3a764000061376c565b7f000000000000000000000000000000000000000000000000000000000000000090612599565b9190612e47565b935061262b847f0000000000000000000000000000000000000000000000000000000000000000610687565b9150600061264c61264489670de0b6b3a764000061376c565b8a9088612e47565b9050612678817f0000000000000000000000000000000000000000000000000000000000000000612599565b93506126a4847f0000000000000000000000000000000000000000000000000000000000000000610687565b6126ae9084613654565b915050945094509450949050565b60008183116126cb578161069c565b5090919050565b6000806126ea846126e48a888a612e47565b906127fd565b9050611b56888486612e47565b600061069c83670de0b6b3a764000084611662565b6000806127198484612e6d565b90925090508061272b5761272b6122fa565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261278c908590612ea9565b50505050565b6000816000036127ab5750670de0b6b3a764000061069f565b826000036127bb5750600061069f565b60006127c68361198d565b905060006127db6127d68661198d565b612f11565b90508181026127f2670de0b6b3a764000082613aa5565b905061243181613137565b600061069c83670de0b6b3a764000084612e47565b600060016001607f1b038211156117015760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061285a575060016001607f1b0382135b156117015760405163a5353be560e01b815260040160405180910390fd5b60008183136126cb578161069c565b60035460009081906128a2906001600160801b0316846127fd565b90506128ce7f000000000000000000000000000000000000000000000000000000000000000082613654565b6002546001600160801b03161115611714576002547f0000000000000000000000000000000000000000000000000000000000000000906129199083906001600160801b031661376c565b611451919061376c565b61292b61352c565b60008061293784612c36565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129729190613a37565b6040805180830381865af415801561298e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129b29190613a46565b93509050826129c7575060009150612a969050565b60006129ee6129e984610160015185610140015161068790919063ffffffff16565b61198d565b612a0e6129e985610120015186610100015161259990919063ffffffff16565b612a189190613807565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7b9190613ad3565b935093509350935080612b975750600098975050505050505050565b868414612bc857612ba7846116d7565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bf957612bd88361283c565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c2757612c09826116d7565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c3e61357e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d3691166132cc565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d68929004166132cc565b905292915050565b600080612d808888878787613342565b9050612d9a856116c8612d93898c613654565b8690610687565b9750612da7848985611662565b975087811015612db957612db96122fa565b878103670de0b6b3a76400008110612dee57612de7612de0670de0b6b3a7640000886127fd565b8290612792565b9050612e06565b612e03612de0670de0b6b3a7640000886126f7565b90505b80881015612e1657612e166122fa565b909603979650505050505050565b600080612e35888888888888613371565b909250905080611b7057611b706122fa565b6000826000190484118302158202612e5e57600080fd5b50910281810615159190040190565b600080600083612e7c8661198d565b612e869190613807565b90506000811215612e9e576000809250925050610680565b946001945092505050565b6000612ebe6001600160a01b03841683613434565b90508051600014158015612ee3575080806020019051810190612ee19190613b09565b155b1561165d57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612f335760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fb69084901c61198d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361315257506000919050565b680755bf798b4a1bf1e5821261317b576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061243174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61198d565b600080670de0b6b3a76400006132e06106a5565b6132ea9190613827565b90508083116132fa576000613304565b613304818461376c565b915061145161333b670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613827565b83906126f7565b600061334e8585612792565b61336761335f866116c8868b612599565b859085612e47565b6124319190613654565b60008060006133838989888888613342565b9050613393866116c8898b613654565b9750878110156133aa576000809250925050613429565b8781036133b8818688612e47565b9050670de0b6b3a764000081106133e5576133de612de0670de0b6b3a7640000896127fd565b90506133fd565b6133fa612de0670de0b6b3a7640000896126f7565b90505b61340781866127fd565b9050808a101561341f57600080935093505050613429565b8903925060019150505b965096945050505050565b606061069c8383600084600080856001600160a01b0316848660405161345a9190613b26565b60006040518083038185875af1925050503d8060008114613497576040519150601f19603f3d011682016040523d82523d6000602084013e61349c565b606091505b50915091506124318683836060826134bc576134b782613503565b611451565b81511580156134d357506001600160a01b0384163b155b156134fc57604051639996b31560e01b81526001600160a01b0385166004820152602401612f08565b5080611451565b8051156135135780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061354061357e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156135f557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561362157600080fd5b85016060818803121561363357600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069f5761069f61363e565b60006020828403121561367957600080fd5b81356001600160a01b038116811461145157600080fd5b80151581146105ab57600080fd5b6000602082840312156136b057600080fd5b813561145181613690565b6000808335601e198436030181126136d257600080fd5b83018035915067ffffffffffffffff8211156136ed57600080fd5b60200191503681900382131561068057600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061375f60c083018486613702565b9998505050505050505050565b8181038181111561069f5761069f61363e565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006137b960e083018486613702565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561272b5761272b61363e565b6001600160801b0381811683821601908082111561272b5761272b61363e565b818103600083128015838313168383128216171561272b5761272b61363e565b808202811582820484141761069f5761069f61363e565b6001600160801b0382811682821603908082111561272b5761272b61363e565b808201828112600083128015821682158216171561387e5761387e61363e565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826138ab576138ab613886565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069f5761069f61363e565b600081600f0b60016001607f1b031981036138fa576138fa61363e565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613995828551613903565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a0a57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a3057613a3061363e565b5060000390565b610180810161069f8284613903565b60008060408385031215613a5957600080fd5b825191506020830151613a6b81613690565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613a9e57600080fd5b5051919050565b600082613ab457613ab4613886565b600160ff1b821460001984141615613ace57613ace61363e565b500590565b60008060008060808587031215613ae957600080fd5b845193506020850151925060408501519150606085015161363381613690565b600060208284031215613b1b57600080fd5b815161145181613690565b6000825160005b81811015613b475760208186018101518583015201613b2d565b50600092019182525091905056fea26469706673582212202803b9a0492f0b43abd028332e1c65f82793a60d80501db87654513150e52b4264736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
