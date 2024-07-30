export const LsETHTarget4 = {
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
            "name": "InvalidCheckpointTime",
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
            "name": "OutputLimit",
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
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620033cc380380620033cc833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051612f9c620004306000396000505060005050600050506000818161026d0152611efe015260008181611744015281816117a701528181611ae301528181611b1f01528181611d170152611ed801526000818161056f0152611eb201526000611319015260006114740152600081816107330152611448015260005050600081816105900152611f2401526000818161066b015261234b0152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb01526106230152600081816110540152818161226001526122ad015260005050612f9c6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612a20565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612a77565b6100b5565b005b610059610095366004612a20565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610a49565b90935091506101266020850185612a99565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612ad0565b61017160408c018c612aed565b60405161018396959493929190612b5d565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610b8c565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612bad565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610d87565b6102eb600360f81b6102e56020870187612a99565b88610e61565b60006103066102fd6020870187612a99565b88848989610a49565b90945090506103158188612bd7565b9250600061032283610f01565b5090506103326020870187612a99565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612ad0565b8a888e80604001906103829190612aed565b604051610396989796959493929190612bea565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612a99565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a764000061104d565b905090565b6000610421427f0000000000000000000000000000000000000000000000000000000000000000611079565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610a41565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612c32565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a611096565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006110b7565b92505b506105c1836110d7565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612bd7565b8a84611105565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612c32565b4290611243565b84611105565b61065e88611258565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612bd7565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c6113fc565b6000818152601060205260408120549192508c8c831561080257600192506000806106eb86898d866000611431565b9150915080600d60008282546107019190612c32565b9091555061071d90508660008461071781611500565b8861152a565b6107278183612c32565b915061075786838a8e877f00000000000000000000000000000000000000000000000000000000000000006116a4565b915061076b61076683856116ee565b611703565b6006805460029061078c9084906201000090046001600160701b0316612c45565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b9826110d7565b600680546010906107db908490600160801b90046001600160801b0316612c65565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f6001846113fc565b600081815260106020526040902054909150801561091e576001945060008061083c838b8f886001611431565b9150915080600d60008282546108529190612c32565b9091555061086e90508360008461086881611500565b8a61172d565b6108788183612bd7565b915061088761076683876116ee565b600680546002906108a89084906201000090046001600160701b0316612c45565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d5826110d7565b600680546010906108f7908490600160801b90046001600160801b0316612c65565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a61093087611500565b61093983611500565b6109439190612c85565b600061191e565b8e6109558482610b8c565b50505b600061096384610f01565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610a31578e610a2d5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061195d565b5050505b50999b5050505050505050505050505b949350505050565b600080610a55856119e8565b505060075485906001600160801b031680821115610a7a57806001600160801b031691505b81600003610a8f576000809250925050610b82565b610a9e600360f81b8984610d87565b600754600090610ac49084906001600160801b03600160801b90910481169085166119f5565b9050610acf836110d7565b610ad99083612ca5565b600780546001600160801b0319166001600160801b0392909216919091179055610b02816110d7565b60078054601090610b24908490600160801b90046001600160801b0316612ca5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b53818887611a13565b9350610b5f8684611aac565b841015610b7f5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291610bd7916001600160801b031690612bd7565b905080600003610beb576001915050610d81565b6000610bf685611ac1565b905080600003610c0b57600192505050610d81565b600080610c19838589611b5d565b9150915080610c2f576000945050505050610d81565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610c6b929190612d43565b6040805180830381865af4158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190612db9565b91509150610cc9610cbb82611500565b610cc490612ddd565b611cd1565b925082610cdf5760009650505050505050610d81565b610ce8826110d7565b60078054600090610d039084906001600160801b0316612c65565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d30816110d7565b60078054601090610d52908490600160801b90046001600160801b0316612c65565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610dca57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610e0d908490612bd7565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290610e93908490612c32565b909155505060008381526010602052604081208054839290610eb6908490612c32565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e54565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f2a87611e69565b6040518263ffffffff1660e01b8152600401610f469190612df9565b6040805180830381865af4158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f869190612e08565b9150915080610f9c575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161100291612c32565b61100c9190612bd7565b90508060000361102457506000958695509350505050565b600080871161103457600061103f565b61103f8488846119f5565b976001975095505050505050565b6000610d817f000000000000000000000000000000000000000000000000000000000000000083611fa3565b60006110858284612bad565b61108f9084612bd7565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b612010565b60006110ce826110c88588886119f5565b90612036565b95945050505050565b60006001600160801b0382111561110157604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036111315750505050565b6000848152600860205260408120546001600160801b03169081900361118b5761115a836110d7565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611209565b6111dc6111d7670de0b6b3a76400006111a48886612bd7565b6111ae9190612e38565b85670de0b6b3a76400006111c2878a612bd7565b6111cc9190612e38565b8592919060016120ab565b6110d7565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611212846110d7565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b6000818311611252578261108f565b50919050565b600654600090819061127b908490600160801b90046001600160801b03166116ee565b6006546201000090046001600160701b031692509050818111156113f75760006112a58383612bd7565b90506112b46111d78286612149565b600680546010906112d6908490600160801b90046001600160801b0316612ca5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061130f858361215e90919063ffffffff16565b9050600061133d827f00000000000000000000000000000000000000000000000000000000000000006116ee565b905080600d60008282546113519190612c32565b9091555061136190508183612bd7565b915061136c826110d7565b600280546000906113879084906001600160801b0316612c65565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113b482612173565b600480546000906113c9908490600f0b612e4f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114265760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061143e878561215e565b9150600061146c837f00000000000000000000000000000000000000000000000000000000000000006116ee565b9050611498817f00000000000000000000000000000000000000000000000000000000000000006116ee565b915083156114bb576114aa8282612bd7565b6114b49084612bd7565b92506114d2565b6114c58282612bd7565b6114cf9084612c32565b92505b868610156114f5576114e58387896119f5565b92506114f28287896119f5565b91505b509550959350505050565b60006001600160ff1b038211156111015760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115736111d782611556670de0b6b3a764000086612e38565b600554600160801b90046001600160801b031691908a60006120ab565b600580546001600160801b03928316600160801b029216919091179055611599866110d7565b6115a39082612ca5565b600480546001600160801b03928316600160801b0292169190911790556115c9846110d7565b600280546000906115e49084906001600160801b0316612c65565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116118361219d565b60048054600090611626908490600f0b612e4f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611656856110d7565b60028054601090611678908490600160801b90046001600160801b0316612ca5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806116bc846116b68a888a6119f5565b9061215e565b90506116c98884866119f5565b6116d39082612c32565b9050868111156116e35786810391505b509695505050505050565b600061108f8383670de0b6b3a76400006119f5565b60006001600160701b038211156111015760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061176f57507f000000000000000000000000000000000000000000000000000000000000000061176d8583612bd7565b105b1561177c5761177c6121d9565b6004549084900390600f0b6117918482612c85565b90508361179d86611500565b1380156117d257507f00000000000000000000000000000000000000000000000000000000000000006117d08383612010565b105b156117df576117df6121d9565b600354600160801b90046001600160801b03166118216111d78261180b670de0b6b3a764000088612e38565b6005546001600160801b031691908c60006120ab565b600580546001600160801b0319166001600160801b039290921691909117905561184b8882612bd7565b9050611856816110d7565b600380546001600160801b03928316600160801b02921691909117905561187c836110d7565b600280546001600160801b0319166001600160801b03929092169190911790556118a58261219d565b600480546001600160801b0319166001600160801b03929092169190911790556118ce876110d7565b600280546010906118f0908490600160801b90046001600160801b0316612c65565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611939906111d7906001600160801b031684846121f2565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff81111561198357611983612e7c565b6040519080825280601f01601f1916602001820160405280156119ad576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156119ce578692505b828152826000602083013e90999098509650505050505050565b6000610d81826004610b8c565b6000826000190484118302158202611a0c57600080fd5b5091020490565b600080611a2085856116ee565b9050611a2b81612259565b945084600003611a3f57600091505061108f565b849150611a526040840160208501612ad0565b15611a8157611a7a85611a686020860186612a99565b611a756040870187612aed565b612285565b9150611aa4565b611aa485611a926020860186612a99565b611a9f6040870187612aed565b6122a0565b509392505050565b600061108f8383670de0b6b3a76400006122da565b6003546000908190611adc906001600160801b031684612149565b9050611b087f000000000000000000000000000000000000000000000000000000000000000082612c32565b6002546001600160801b03161115611252576002547f000000000000000000000000000000000000000000000000000000000000000090611b539083906001600160801b0316612bd7565b61108f9190612bd7565b611b6561296d565b600080611b7184611e69565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611bac9190612df9565b6040805180830381865af4158015611bc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bec9190612e08565b9350905082611c015750600091506100ad9050565b6000611c28611c238461016001518561014001516116ee90919063ffffffff16565b611500565b611c48611c23856101200151866101000151611aac90919063ffffffff16565b611c529190612c85565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611d8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dae9190612e92565b935093509350935080611dca5750600098975050505050505050565b868414611dfb57611dda846110d7565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e2c57611e0b8361219d565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611e5a57611e3c826110d7565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611e716129bf565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611f699116612300565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611f9b92900416612300565b905292915050565b604051637bce1f8160e11b8152600481018290526000906001600160a01b0384169063f79c3f02906024015b602060405180830381865afa158015611fec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108f9190612ed3565b60008061201d8484612376565b90925090508061202f5761202f6121d9565b5092915050565b60008160000361204f5750670de0b6b3a7640000610d81565b8260000361205f57506000610d81565b600061206a83611500565b9050600061207f61207a86611500565b6123b5565b9050818102612096670de0b6b3a764000082612eec565b90506120a1816125db565b9695505050505050565b6000826000036120bc5750846110ce565b811561210f576120ed6120cf8487612c32565b6120d985876116ee565b6120e3888a6116ee565b6116b69190612c32565b905060006120fb8588611243565b905080821015612109578091505b506110ce565b82850361211e575060006110ce565b6120a161212b8487612bd7565b6121358587611aac565b61213f888a6116ee565b6116b69190612bd7565b600061108f83670de0b6b3a7640000846122da565b600061108f83670de0b6b3a7640000846119f5565b600060016001607f1b038211156111015760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806121bb575060016001607f1b0382135b156111015760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b600080612200846000612770565b61220b846000612770565b6122159190612c85565b905060008113156122315761222a8186612c32565b9450612250565b60008112156122505761224381612ddd565b61224d9086612bd7565b94505b50929392505050565b6000610d817f000000000000000000000000000000000000000000000000000000000000000083612786565b600060405163350b944160e11b815260040160405180910390fd5b6122d46001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866127b6565b50505050565b60008260001904841183021582026122f157600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612314610426565b61231e9190612e38565b905080831161232e576000612338565b6123388184612bd7565b915061108f61236f670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612e38565b839061215e565b60008060008361238586611500565b61238f9190612c85565b905060008112156123a75760008092509250506123ae565b9150600190505b9250929050565b60008082136123d75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061245a9084901c611500565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136125f657506000919050565b680755bf798b4a1bf1e5821261261f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120a174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611500565b600081831361277f578161108f565b5090919050565b604051631e66865560e21b8152600481018290526000906001600160a01b0384169063799a195490602401611fcf565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261280890849061280d565b505050565b60006128226001600160a01b03841683612875565b905080516000141580156128475750808060200190518101906128459190612f1a565b155b1561280857604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b606061108f8383600084600080856001600160a01b0316848660405161289b9190612f37565b60006040518083038185875af1925050503d80600081146128d8576040519150601f19603f3d011682016040523d82523d6000602084013e6128dd565b606091505b50915091506120a18683836060826128fd576128f882612944565b61108f565b815115801561291457506001600160a01b0384163b155b1561293d57604051639996b31560e01b81526001600160a01b038516600482015260240161286c565b508061108f565b8051156129545780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806129816129bf565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612a3557600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612a5a57600080fd5b840160608187031215612a6c57600080fd5b809150509250925092565b60008060408385031215612a8a57600080fd5b50508035926020909101359150565b600060208284031215612aab57600080fd5b81356001600160a01b038116811461108f57600080fd5b801515811461040b57600080fd5b600060208284031215612ae257600080fd5b813561108f81612ac2565b6000808335601e19843603018112612b0457600080fd5b83018035915067ffffffffffffffff821115612b1f57600080fd5b6020019150368190038213156123ae57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612b8b60a083018486612b34565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612bbc57612bbc612b97565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d8157610d81612bc1565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612c2460e083018486612b34565b9a9950505050505050505050565b80820180821115610d8157610d81612bc1565b6001600160701b0381811683821601908082111561202f5761202f612bc1565b6001600160801b0381811683821601908082111561202f5761202f612bc1565b818103600083128015838313168383128216171561202f5761202f612bc1565b6001600160801b0382811682821603908082111561202f5761202f612bc1565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612d57828551612cc5565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612dcc57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612df257612df2612bc1565b5060000390565b6101808101610d818284612cc5565b60008060408385031215612e1b57600080fd5b825191506020830151612e2d81612ac2565b809150509250929050565b8082028115828204841417610d8157610d81612bc1565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610d8157610d81612bc1565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612ea857600080fd5b8451935060208501519250604085015191506060850151612ec881612ac2565b939692955090935050565b600060208284031215612ee557600080fd5b5051919050565b600082612efb57612efb612b97565b600160ff1b821460001984141615612f1557612f15612bc1565b500590565b600060208284031215612f2c57600080fd5b815161108f81612ac2565b6000825160005b81811015612f585760208186018101518583015201612f3e565b50600092019182525091905056fea2646970667358221220dff1819874f4611d1e9b55fe5de024e8c89bee8be1accb093968c4f7f00fafdd64736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
