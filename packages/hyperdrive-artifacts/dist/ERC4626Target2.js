export const ERC4626Target2 = {
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
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620042c2380380620042c2833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613de4620004de60003960005050600050506000505060008181610100015281816103100152612e8101526000818161147e01528181611cdc01528181611d3f015281816125a601528181612a6601528181612aa201528181612c9a0152612e5b0152600081816107f301528181610d2001528181610d6201528181610e79015281816112f1015281816113500152612e35015260006118fb015260008181611a21015281816124850152818161272701526127a00152600081816109b701528181610dd5015281816113eb015281816119f50152612774015260008181610db40152818161244101526126f301526000818161081401528181610cfe01528181610d8301528181610e9a015281816112cf015281816113710152612ea70152600081816101de015281816103a8015281816108ef01526135700152600081816106ad0152818161072d015281816107a30152818161086f01526108a7015260008181611649015281816116c301528181611755015261262501526000818161161c015261167d0152613de46000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613838565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613838565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610687565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a5565b905061017a8184600460016106d6565b50600080600061018a8787610ccf565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c891906138ad565b909155506101d99050844283610ed8565b6102037f0000000000000000000000000000000000000000000000000000000000000000856138ad565b98506102118389888c611016565b600061021e60018b6111b0565b90506102378161023160208e018e6138c0565b8b6111e5565b8d8a8a898e8561024a60208301836138c0565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661028760408801602089016138f7565b8961029560408a018a613914565b6040516102a89796959493929190613984565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b600061035961128d565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a5565b9050600061039f6103956106a5565b84600460016106d6565b905060006103cd7f0000000000000000000000000000000000000000000000000000000000000000846138ad565b90506000806000806103e08e89886112a0565b600d8054949850929650909450925083916000906103ff9084906138ad565b909155506104109050874283610ed8565b50600061041e84898d611426565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b89611458565b60006104686002886111b0565b90508c6104828261047c60208401846138c0565b856111e5565b858b868461049360208601866138c0565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c016138f7565b6104e4896104de8a8d6139c5565b90610687565b8d6104f260408e018e613914565b6040516105069897969594939291906139d8565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b600061058460208301836138c0565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105c260408501602086016138f7565b156105e7576105dd856105d86040870187613914565b61160c565b9093509050610603565b50346105ff856105fa6040870187613914565b611748565b8492505b61060b61128d565b9150801561067e57604051600090339083908381818185875af1925050503d8060008114610655576040519150601f19603f3d011682016040523d82523d6000602084013e61065a565b606091505b505090508061067c576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061069c8383670de0b6b3a7640000611782565b90505b92915050565b60006106d1427f00000000000000000000000000000000000000000000000000000000000000006117a0565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fe57504286115b1561071757600101546001600160801b03169050610cc7565b60008060006107246106a5565b905060006107527f00000000000000000000000000000000000000000000000000000000000000008b6138ad565b90505b818110156107c8576000818152600860205260409020600101546001600160801b031680156107a0576000828152600860205260409020549094506001600160801b031692506107c8565b507f000000000000000000000000000000000000000000000000000000000000000001610755565b8360000361083b578893506108386107de6117b6565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117d7565b92505b50610845836117f7565b6001850180546001600160801b0319166001600160801b039290921691909117905561089b6108947f00000000000000000000000000000000000000000000000000000000000000008b6139c5565b8a84610ed8565b6108d9896108d36108cc7f0000000000000000000000000000000000000000000000000000000000000000836138ad565b4290611825565b84610ed8565b6108e28861183a565b50600090506008816109147f00000000000000000000000000000000000000000000000000000000000000008d6139c5565b815260208101919091526040016000908120600101546001600160801b0316915061094060028c6111b0565b6000818152601060205260408120549192508c8c8315610a86576001925060008061096f86898d8660006119de565b9150915080600d600082825461098591906138ad565b909155506109a190508660008461099b81611aad565b88611ad7565b6109ab81836138ad565b91506109db86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c51565b91506109ef6109ea8385610687565b611c9b565b60068054600290610a109084906201000090046001600160701b0316613a20565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3d826117f7565b60068054601090610a5f908490600160801b90046001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a936001846111b0565b6000818152601060205260409020549091508015610ba25760019450600080610ac0838b8f8860016119de565b9150915080600d6000828254610ad691906138ad565b90915550610af2905083600084610aec81611aad565b8a611cc5565b610afc81836139c5565b9150610b0b6109ea8387610687565b60068054600290610b2c9084906201000090046001600160701b0316613a20565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b59826117f7565b60068054601090610b7b908490600160801b90046001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bdc57610bce610bb487611aad565b610bbd83611aad565b610bc79190613a60565b6000611eb6565b8e610bd98482611f64565b50505b6000610be78461215e565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb7578e610cb35a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906122bc565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cdf6117b6565b600254909150610d44908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612347565b600254909450610da7908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117d7565b9150610dfe8785610df9857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612373565b6123d8565b15610e0b57610e0b61241a565b600080610e1989858a612433565b9092509050610e2882876139c5565b9550610e3581858a611782565b9450610e41858a6139c5565b9650670de0b6b3a7640000610ebe610e5989866138ad565b600254610e77908a90600160801b90046001600160801b03166139c5565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117d7565b1115610ecc57610ecc61241a565b50505092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f045750505050565b6000848152600860205260408120546001600160801b031690819003610f5e57610f2d836117f7565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610fdc565b610faf610faa670de0b6b3a7640000610f7788866139c5565b610f819190613a80565b85670de0b6b3a7640000610f95878a6139c5565b610f9f9190613a80565b8592919060016124b3565b6117f7565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fe5846117f7565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611058610faa82611042670de0b6b3a764000086613a80565b6005546001600160801b031691908860016124b3565b600580546001600160801b0319166001600160801b0392909216919091179055611081856117f7565b6002805460009061109c9084906001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110c9846117f7565b600280546010906110eb908490600160801b90046001600160801b0316613a97565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611118846117f7565b6111229082613a40565b600380546001600160801b03808416600160801b029116179055905060006111498361255b565b90506111678161115887611aad565b6111629084613ab7565b611eb6565b6111708461259f565b61117c5761117c61241a565b6000611187856125ff565b9050806111a757604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111da5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906112179084906138ad565b90915550506000838152601060205260408120805483929061123a9084906138ad565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106d1670de0b6b3a764000061260c565b60008060008060006112b06117b6565b600254909150611315908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612698565b93508761132285896126b9565b11156113305761133061241a565b6002546000908190611395908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117d7565b93506113ab8a670de0b6b3a7640000868c6126ce565b509193509091506113be905081836139c5565b6113c890876139c5565b9550886114158161140f8d6113dd868c6139c5565b8d6113e887826127dc565b877f00000000000000000000000000000000000000000000000000000000000000006127f2565b906126b9565b975090945050505093509350935093565b600061143860408301602084016138f7565b15611444575082611451565b61144e8484612817565b90505b9392505050565b6002546001600160801b0316838110156114745761147461241a565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114ac908390600f0b61282c565b10156114ba576114ba61241a565b60045461150490610faa90600160801b90046001600160801b03166114e7670de0b6b3a764000086613a80565b600554600160801b90046001600160801b031691908960016124b3565b600580546001600160801b03928316600160801b02921691909117905561152a816117f7565b600280546001600160801b0319166001600160801b0392909216919091179055611553856117f7565b60028054601090611575908490600160801b90046001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115a2856117f7565b600480546010906115c4908490600160801b90046001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115f38361255b565b90506111678161160288611aad565b6111629084613a60565b6000806116446001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612852565b6116a47f00000000000000000000000000000000000000000000000000000000000000006116738760016138ad565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906128bf565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117389190613adf565b925060009150505b935093915050565b61177d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612852565b505050565b600082600019048411830215820261179957600080fd5b5091020490565b60006117ac8284613b0e565b61069c90846139c5565b6002546004546000916106d1916001600160801b0390911690600f0b61282c565b60006117ee826117e8858888611782565b9061294f565b95945050505050565b60006001600160801b0382111561182157604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611834578261069c565b50919050565b600654600090819061185d908490600160801b90046001600160801b0316610687565b6006546201000090046001600160701b031692509050818111156119d957600061188783836139c5565b9050611896610faa82866129ba565b600680546010906118b8908490600160801b90046001600160801b0316613a97565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006118f1858361281790919063ffffffff16565b9050600061191f827f0000000000000000000000000000000000000000000000000000000000000000610687565b905080600d600082825461193391906138ad565b90915550611943905081836139c5565b915061194e826117f7565b600280546000906119699084906001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611996826129cf565b600480546000906119ab908490600f0b613b22565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806119eb8785612817565b91506000611a19837f0000000000000000000000000000000000000000000000000000000000000000610687565b9050611a45817f0000000000000000000000000000000000000000000000000000000000000000610687565b91508315611a6857611a5782826139c5565b611a6190846139c5565b9250611a7f565b611a7282826139c5565b611a7c90846138ad565b92505b86861015611aa257611a92838789611782565b9250611a9f828789611782565b91505b509550959350505050565b60006001600160ff1b038211156118215760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b20610faa82611b03670de0b6b3a764000086613a80565b600554600160801b90046001600160801b031691908a60006124b3565b600580546001600160801b03928316600160801b029216919091179055611b46866117f7565b611b509082613a97565b600480546001600160801b03928316600160801b029216919091179055611b76846117f7565b60028054600090611b919084906001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bbe836129f9565b60048054600090611bd3908490600f0b613b22565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c03856117f7565b60028054601090611c25908490600160801b90046001600160801b0316613a97565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c6984611c638a888a611782565b90612817565b9050611c76888486611782565b611c8090826138ad565b905086811115611c905786810391505b509695505050505050565b60006001600160701b038211156118215760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d0757507f0000000000000000000000000000000000000000000000000000000000000000611d0585836139c5565b105b15611d1457611d1461241a565b6004549084900390600f0b611d298482613a60565b905083611d3586611aad565b138015611d6a57507f0000000000000000000000000000000000000000000000000000000000000000611d68838361282c565b105b15611d7757611d7761241a565b600354600160801b90046001600160801b0316611db9610faa82611da3670de0b6b3a764000088613a80565b6005546001600160801b031691908c60006124b3565b600580546001600160801b0319166001600160801b0392909216919091179055611de388826139c5565b9050611dee816117f7565b600380546001600160801b03928316600160801b029216919091179055611e14836117f7565b600280546001600160801b0319166001600160801b0392909216919091179055611e3d826129f9565b600480546001600160801b0319166001600160801b0392909216919091179055611e66876117f7565b60028054601090611e88908490600160801b90046001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611edf611ec58483612a35565b611ed0846000612a35565b611eda9190613a60565b6129f9565b9050600081600f0b1315611f345760038054829190600090611f0b9084906001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561177d57611f4981613b4f565b60038054600090611f0b9084906001600160801b0316613a97565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611faf916001600160801b0316906139c5565b905080600003611fc357600191505061069f565b6000611fce85612a44565b905080600003611fe35760019250505061069f565b600080611ff1838589612ae0565b915091508061200757600094505050505061069f565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612043929190613bf3565b6040805180830381865af415801561205f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120839190613c69565b915091506120a161209382611aad565b61209c90613c8d565b612c54565b9250826120b7576000965050505050505061069f565b6120c0826117f7565b600780546000906120db9084906001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612108816117f7565b6007805460109061212a908490600160801b90046001600160801b0316613a40565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61218787612dec565b6040518263ffffffff1660e01b81526004016121a39190613ca9565b6040805180830381865af41580156121bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e39190613cb8565b91509150806121f9575060009485945092505050565b6000808611612209576000612213565b6122138387610687565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b039092169161227e91906138ad565b61228891906139c5565b9050806000036122a15750600096879650945050505050565b60006122ad8383612817565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156122e2576122e2613ce8565b6040519080825280601f01601f19166020018201604052801561230c576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561232d578692505b828152826000602083013e90999098509650505050505050565b600061236887878761236188670de0b6b3a76400006139c5565b8787612f26565b979650505050505050565b600061144e6123b461238d84670de0b6b3a76400006139c5565b61140f670de0b6b3a76400006123a3818a6129ba565b6123ad91906139c5565b87906126b9565b6123c690670de0b6b3a76400006138ad565b611c6384670de0b6b3a76400006139c5565b60008061240f856123e76117b6565b6123f191906138ad565b600254610e77908790600160801b90046001600160801b03166139c5565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061247d8561140f85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612473818c6129ba565b61140f91906139c5565b91506124a9827f0000000000000000000000000000000000000000000000000000000000000000610687565b9050935093915050565b6000826000036124c45750846117ee565b8115612517576124f56124d784876138ad565b6124e18587610687565b6124eb888a610687565b611c6391906138ad565b905060006125038588611825565b905080821015612511578091505b506117ee565b828503612526575060006117ee565b61255161253384876139c5565b61253d85876126b9565b612547888a610687565b611c6391906139c5565b9695505050505050565b60006125836010600061256f6002866111b0565b815260200190815260200160002054611aad565b6125956010600061256f6001876111b0565b61069f9190613a60565b60006125cb7f0000000000000000000000000000000000000000000000000000000000000000836126b9565b6003546125e191906001600160801b03166138ad565b6002546125f7906001600160801b031684610687565b101592915050565b600061069f826004611f64565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612674573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069f9190613adf565b60006123688787876126b288670de0b6b3a76400006139c5565b8787612fda565b600061069c8383670de0b6b3a7640000612ffd565b600080808061271f87866127188b61140f6126f18c670de0b6b3a76400006139c5565b7f0000000000000000000000000000000000000000000000000000000000000000906126b9565b9190612ffd565b935061274b847f0000000000000000000000000000000000000000000000000000000000000000610687565b9150600061276c61276489670de0b6b3a76400006139c5565b8a9088612ffd565b9050612798817f00000000000000000000000000000000000000000000000000000000000000006126b9565b93506127c4847f0000000000000000000000000000000000000000000000000000000000000000610687565b6127ce90846138ad565b915050945094509450949050565b60008183116127eb578161069c565b5090919050565b60008061280a846128048a888a612ffd565b906129ba565b9050611c76888486612ffd565b600061069c83670de0b6b3a764000084611782565b6000806128398484613023565b90925090508061284b5761284b61241a565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526128b99186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061305f565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261291084826130c7565b6128b9576040516001600160a01b0384811660248301526000604483015261294591869182169063095ea7b390606401612887565b6128b9848261305f565b6000816000036129685750670de0b6b3a764000061069f565b826000036129785750600061069f565b600061298383611aad565b9050600061299861299386611aad565b61316a565b90508181026129af670de0b6b3a764000082613cfe565b905061255181613390565b600061069c83670de0b6b3a764000084612ffd565b600060016001607f1b038211156118215760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612a17575060016001607f1b0382135b156118215760405163a5353be560e01b815260040160405180910390fd5b60008183136127eb578161069c565b6003546000908190612a5f906001600160801b0316846129ba565b9050612a8b7f0000000000000000000000000000000000000000000000000000000000000000826138ad565b6002546001600160801b03161115611834576002547f000000000000000000000000000000000000000000000000000000000000000090612ad69083906001600160801b03166139c5565b61145191906139c5565b612ae8613785565b600080612af484612dec565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612b2f9190613ca9565b6040805180830381865af4158015612b4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b6f9190613cb8565b9350905082612b845750600091506117409050565b6000612bab612ba684610160015185610140015161068790919063ffffffff16565b611aad565b612bcb612ba68561012001518661010001516126b990919063ffffffff16565b612bd59190613a60565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d319190613d2c565b935093509350935080612d4d5750600098975050505050505050565b868414612d7e57612d5d846117f7565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612daf57612d8e836129f9565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ddd57612dbf826117f7565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612df46137d7565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612eec9116613525565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612f1e92900416613525565b905292915050565b600080612f36888887878761359b565b9050612f50856117e8612f49898c6138ad565b8690610687565b9750612f5d848985611782565b975087811015612f6f57612f6f61241a565b878103670de0b6b3a76400008110612fa457612f9d612f96670de0b6b3a7640000886129ba565b829061294f565b9050612fbc565b612fb9612f96670de0b6b3a764000088612817565b90505b80881015612fcc57612fcc61241a565b909603979650505050505050565b600080612feb8888888888886135ca565b909250905080611c9057611c9061241a565b600082600019048411830215820261301457600080fd5b50910281810615159190040190565b60008060008361303286611aad565b61303c9190613a60565b90506000811215613054576000809250925050610680565b946001945092505050565b60006130746001600160a01b0384168361368d565b905080516000141580156130995750808060200190518101906130979190613d62565b155b1561177d57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516130e49190613d7f565b6000604051808303816000865af19150503d8060008114613121576040519150601f19603f3d011682016040523d82523d6000602084013e613126565b606091505b50915091508180156131505750805115806131505750808060200190518101906131509190613d62565b80156117ee5750505050506001600160a01b03163b151590565b600080821361318c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061320f9084901c611aad565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133ab57506000919050565b680755bf798b4a1bf1e582126133d4576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061255174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611aad565b600080670de0b6b3a76400006135396106a5565b6135439190613a80565b905080831161355357600061355d565b61355d81846139c5565b9150611451613594670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a80565b8390612817565b60006135a7858561294f565b6135c06135b8866117e8868b6126b9565b859085612ffd565b61255191906138ad565b60008060006135dc898988888861359b565b90506135ec866117e8898b6138ad565b975087811015613603576000809250925050613682565b878103613611818688612ffd565b9050670de0b6b3a7640000811061363e57613637612f96670de0b6b3a7640000896129ba565b9050613656565b613653612f96670de0b6b3a764000089612817565b90505b61366081866129ba565b9050808a101561367857600080935093505050613682565b8903925060019150505b965096945050505050565b606061069c8383600084600080856001600160a01b031684866040516136b39190613d7f565b60006040518083038185875af1925050503d80600081146136f0576040519150601f19603f3d011682016040523d82523d6000602084013e6136f5565b606091505b5091509150612551868383606082613715576137108261375c565b611451565b815115801561372c57506001600160a01b0384163b155b1561375557604051639996b31560e01b81526001600160a01b03851660048201526024016130be565b5080611451565b80511561376c5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806137996137d7565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561384e57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561387a57600080fd5b85016060818803121561388c57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069f5761069f613897565b6000602082840312156138d257600080fd5b81356001600160a01b038116811461145157600080fd5b80151581146105ab57600080fd5b60006020828403121561390957600080fd5b8135611451816138e9565b6000808335601e1984360301811261392b57600080fd5b83018035915067ffffffffffffffff82111561394657600080fd5b60200191503681900382131561068057600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a082015260006139b860c08301848661395b565b9998505050505050505050565b8181038181111561069f5761069f613897565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613a1260e08301848661395b565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561284b5761284b613897565b6001600160801b0381811683821601908082111561284b5761284b613897565b818103600083128015838313168383128216171561284b5761284b613897565b808202811582820484141761069f5761069f613897565b6001600160801b0382811682821603908082111561284b5761284b613897565b8082018281126000831280158216821582161715613ad757613ad7613897565b505092915050565b600060208284031215613af157600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613b1d57613b1d613af8565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069f5761069f613897565b600081600f0b60016001607f1b03198103613b6c57613b6c613897565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613c07828551613b75565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613c7c57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613ca257613ca2613897565b5060000390565b610180810161069f8284613b75565b60008060408385031215613ccb57600080fd5b825191506020830151613cdd816138e9565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613d0d57613d0d613af8565b600160ff1b821460001984141615613d2757613d27613897565b500590565b60008060008060808587031215613d4257600080fd5b845193506020850151925060408501519150606085015161388c816138e9565b600060208284031215613d7457600080fd5b8151611451816138e9565b6000825160005b81811015613da05760208186018101518583015201613d86565b50600092019182525091905056fea264697066735822122051c32cb74f9177ede2d3acba49acc76b6f1f121d3f56866994aee824bf876fc364736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
