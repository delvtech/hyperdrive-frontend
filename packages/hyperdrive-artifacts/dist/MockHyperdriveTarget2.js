export const MockHyperdriveTarget2 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200443838038062004438833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613f2562000513600039600050506000505060005050600081816101000152818161031001526131f40152600081816114c901528181611fef01528181612052015281816128be01528181612dd901528181612e150152818161300d01526131ce01526000818161083e01528181610d6b01528181610dad01528181610ec40152818161133c0152818161139b015281816118750152818161190801526131a801526000611c0e015260008181611d340152818161279d01528181612aae0152612b27015260008181610a0201528181610e200152818161143601528181611d080152612afb015260008181610dff015281816127590152612a7a01526000818161085f01528181610d4901528181610dce01528181610ee50152818161131a015281816113bc015261321a0152600081816101de015281816103a80152818161093a01526137d80152600081816106f801528181610778015281816107ee015281816108ba01526108f20152600050506000818161055601528181611673015281816116bc0152818161174e015281816117cf01528181611976015281816119f70152818161293f0152818161298801528181612bf40152612c3d0152613f256000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046139a8565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046139a8565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de836105c0565b6000806100eb88866105f9565b909250905060006100fc83836106d2565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106f0565b905061017a818460046001610721565b50600080600061018a8787610d1a565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613a1d565b909155506101d99050844283610f23565b6102037f000000000000000000000000000000000000000000000000000000000000000085613a1d565b98506102118389888c611061565b600061021e60018b6111fb565b90506102378161023160208e018e613a30565b8b611230565b8d8a8a898e8561024a6020830183613a30565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613a67565b8961029560408a018a613a84565b6040516102a89796959493929190613af4565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e836105c0565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112d8565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106f0565b9050600061039f6103956106f0565b8460046001610721565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613a1d565b90506000806000806103e08e89886112eb565b600d8054949850929650909450925083916000906103ff908490613a1d565b909155506104109050874283610f23565b50600061041e84898d611471565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105f9565b508e905061045b81858b896114a3565b60006104686002886111fb565b90508c6104828261047c6020840184613a30565b85611230565b858b86846104936020860186613a30565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613a67565b6104e4896104de8a8d613b35565b906106d2565b8d6104f260408e018e613a84565b604051610506989796959493929190613b48565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a057503415155b156105be57604051631574f9f360e01b815260040160405180910390fd5b565b60006105cf6020830183613a30565b6001600160a01b0316036105f65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061060d6040850160208601613a67565b1561063257610628856106236040870187613a84565b611657565b909350905061064e565b503461064a856106456040870187613a84565b6118eb565b8492505b6106566112d8565b915080156106c957604051600090339083908381818185875af1925050503d80600081146106a0576040519150601f19603f3d011682016040523d82523d6000602084013e6106a5565b606091505b50509050806106c7576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106e78383670de0b6b3a7640000611a95565b90505b92915050565b600061071c427f0000000000000000000000000000000000000000000000000000000000000000611ab3565b905090565b600084815260086020526040812060018101546001600160801b031615158061074957504286115b1561076257600101546001600160801b03169050610d12565b600080600061076f6106f0565b9050600061079d7f00000000000000000000000000000000000000000000000000000000000000008b613a1d565b90505b81811015610813576000818152600860205260409020600101546001600160801b031680156107eb576000828152600860205260409020549094506001600160801b03169250610813565b507f0000000000000000000000000000000000000000000000000000000000000000016107a0565b8360000361088657889350610883610829611ac9565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b92505b5061089083611b0a565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e66108df7f00000000000000000000000000000000000000000000000000000000000000008b613b35565b8a84610f23565b6109248961091e6109177f000000000000000000000000000000000000000000000000000000000000000083613a1d565b4290611b38565b84610f23565b61092d88611b4d565b506000905060088161095f7f00000000000000000000000000000000000000000000000000000000000000008d613b35565b815260208101919091526040016000908120600101546001600160801b0316915061098b60028c6111fb565b6000818152601060205260408120549192508c8c8315610ad157600192506000806109ba86898d866000611cf1565b9150915080600d60008282546109d09190613a1d565b909155506109ec9050866000846109e681611dc0565b88611dea565b6109f68183613a1d565b9150610a2686838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f64565b9150610a3a610a3583856106d2565b611fae565b60068054600290610a5b9084906201000090046001600160701b0316613b90565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8882611b0a565b60068054601090610aaa908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ade6001846111fb565b6000818152601060205260409020549091508015610bed5760019450600080610b0b838b8f886001611cf1565b9150915080600d6000828254610b219190613a1d565b90915550610b3d905083600084610b3781611dc0565b8a611fd8565b610b478183613b35565b9150610b56610a3583876106d2565b60068054600290610b779084906201000090046001600160701b0316613b90565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba482611b0a565b60068054601090610bc6908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2757610c19610bff87611dc0565b610c0883611dc0565b610c129190613bd0565b60006121c9565b8e610c24848261227c565b50505b6000610c3284612476565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610d02578e610cfe5a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906125d4565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610d2a611ac9565b600254909150610d8f908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061265f565b600254909450610df2908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b9150610e498785610e44857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061268b565b6126f0565b15610e5657610e56612732565b600080610e6489858a61274b565b9092509050610e738287613b35565b9550610e8081858a611a95565b9450610e8c858a613b35565b9650670de0b6b3a7640000610f09610ea48986613a1d565b600254610ec2908a90600160801b90046001600160801b0316613b35565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b1115610f1757610f17612732565b50505092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f4f5750505050565b6000848152600860205260408120546001600160801b031690819003610fa957610f7883611b0a565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611027565b610ffa610ff5670de0b6b3a7640000610fc28886613b35565b610fcc9190613bf0565b85670de0b6b3a7640000610fe0878a613b35565b610fea9190613bf0565b8592919060016127cb565b611b0a565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61103084611b0a565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110a3610ff58261108d670de0b6b3a764000086613bf0565b6005546001600160801b031691908860016127cb565b600580546001600160801b0319166001600160801b03929092169190911790556110cc85611b0a565b600280546000906110e79084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061111484611b0a565b60028054601090611136908490600160801b90046001600160801b0316613c07565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116384611b0a565b61116d9082613bb0565b600380546001600160801b03808416600160801b0291161790559050600061119483612873565b90506111b2816111a387611dc0565b6111ad9084613c27565b6121c9565b6111bb846128b7565b6111c7576111c7612732565b60006111d285612917565b9050806111f257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112255760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611262908490613a1d565b909155505060008381526010602052604081208054839290611285908490613a1d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061071c670de0b6b3a7640000612924565b60008060008060006112fb611ac9565b600254909150611360908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612a1f565b93508761136d8589612a40565b111561137b5761137b612732565b60025460009081906113e0908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b93506113f68a670de0b6b3a7640000868c612a55565b5091935090915061140990508183613b35565b6114139087613b35565b9550886114608161145a8d611428868c613b35565b8d6114338782612b63565b877f0000000000000000000000000000000000000000000000000000000000000000612b79565b90612a40565b975090945050505093509350935093565b60006114836040830160208401613a67565b1561148f57508261149c565b6114998484612b9e565b90505b9392505050565b6002546001600160801b0316838110156114bf576114bf612732565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114f7908390600f0b612bb3565b101561150557611505612732565b60045461154f90610ff590600160801b90046001600160801b0316611532670de0b6b3a764000086613bf0565b600554600160801b90046001600160801b031691908960016127cb565b600580546001600160801b03928316600160801b02921691909117905561157581611b0a565b600280546001600160801b0319166001600160801b039290921691909117905561159e85611b0a565b600280546010906115c0908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115ed85611b0a565b6004805460109061160f908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061163e83612873565b90506111b28161164d88611dc0565b6111ad9084613bd0565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116a7575047611732565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561170b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172f9190613c4f565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016117ad578734101561179c576040516312171d8360e31b815260040160405180910390fd5b6117a68834613b35565b9050611847565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611820573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118449190613c68565b91505b81611865576040516312171d8360e31b815260040160405180910390fd5b6014546000036118aa57611899887f0000000000000000000000000000000000000000000000000000000000000000612b9e565b6014819055945092506118e3915050565b6014546000906118bc908a9086611a95565b905080601460008282546118d09190613a1d565b909155509095509093506118e392505050565b935093915050565b60006118f684612924565b90506014546000036119345761192c817f0000000000000000000000000000000000000000000000000000000000000000612b9e565b60145561195a565b600061193f82612bd9565b905080601460008282546119539190613a1d565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119d557823410156119c4576040516312171d8360e31b815260040160405180910390fd5b6119ce8334613b35565b9050611a6f565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6c9190613c68565b91505b81611a8d576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611aac57600080fd5b5091020490565b6000611abf8284613c9b565b6106e79084613b35565b60025460045460009161071c916001600160801b0390911690600f0b612bb3565b6000611b0182611afb858888611a95565b90612cc2565b95945050505050565b60006001600160801b03821115611b3457604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611b4757826106e7565b50919050565b6006546000908190611b70908490600160801b90046001600160801b03166106d2565b6006546201000090046001600160701b03169250905081811115611cec576000611b9a8383613b35565b9050611ba9610ff58286612d2d565b60068054601090611bcb908490600160801b90046001600160801b0316613c07565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c048583612b9e90919063ffffffff16565b90506000611c32827f00000000000000000000000000000000000000000000000000000000000000006106d2565b905080600d6000828254611c469190613a1d565b90915550611c5690508183613b35565b9150611c6182611b0a565b60028054600090611c7c9084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ca982612d42565b60048054600090611cbe908490600f0b613caf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cfe8785612b9e565b91506000611d2c837f00000000000000000000000000000000000000000000000000000000000000006106d2565b9050611d58817f00000000000000000000000000000000000000000000000000000000000000006106d2565b91508315611d7b57611d6a8282613b35565b611d749084613b35565b9250611d92565b611d858282613b35565b611d8f9084613a1d565b92505b86861015611db557611da5838789611a95565b9250611db2828789611a95565b91505b509550959350505050565b60006001600160ff1b03821115611b345760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611e33610ff582611e16670de0b6b3a764000086613bf0565b600554600160801b90046001600160801b031691908a60006127cb565b600580546001600160801b03928316600160801b029216919091179055611e5986611b0a565b611e639082613c07565b600480546001600160801b03928316600160801b029216919091179055611e8984611b0a565b60028054600090611ea49084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ed183612d6c565b60048054600090611ee6908490600f0b613caf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f1685611b0a565b60028054601090611f38908490600160801b90046001600160801b0316613c07565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611f7c84611f768a888a611a95565b90612b9e565b9050611f89888486611a95565b611f939082613a1d565b905086811115611fa35786810391505b509695505050505050565b60006001600160701b03821115611b345760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061201a57507f00000000000000000000000000000000000000000000000000000000000000006120188583613b35565b105b1561202757612027612732565b6004549084900390600f0b61203c8482613bd0565b90508361204886611dc0565b13801561207d57507f000000000000000000000000000000000000000000000000000000000000000061207b8383612bb3565b105b1561208a5761208a612732565b600354600160801b90046001600160801b03166120cc610ff5826120b6670de0b6b3a764000088613bf0565b6005546001600160801b031691908c60006127cb565b600580546001600160801b0319166001600160801b03929092169190911790556120f68882613b35565b905061210181611b0a565b600380546001600160801b03928316600160801b02921691909117905561212783611b0a565b600280546001600160801b0319166001600160801b039290921691909117905561215082612d6c565b600480546001600160801b0319166001600160801b039290921691909117905561217987611b0a565b6002805460109061219b908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006121f26121d88483612da8565b6121e3846000612da8565b6121ed9190613bd0565b612d6c565b9050600081600f0b1315612247576003805482919060009061221e9084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156122775761225c81613cdc565b6003805460009061221e9084906001600160801b0316613c07565b505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916122c7916001600160801b031690613b35565b9050806000036122db5760019150506106ea565b60006122e685612db7565b9050806000036122fb576001925050506106ea565b600080612309838589612e53565b915091508061231f5760009450505050506106ea565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161235b929190613d80565b6040805180830381865af4158015612377573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061239b9190613df6565b915091506123b96123ab82611dc0565b6123b490613e1a565b612fc7565b9250826123cf57600096505050505050506106ea565b6123d882611b0a565b600780546000906123f39084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061242081611b0a565b60078054601090612442908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61249f8761315f565b6040518263ffffffff1660e01b81526004016124bb9190613e36565b6040805180830381865af41580156124d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124fb9190613e45565b9150915080612511575060009485945092505050565b600080861161252157600061252b565b61252b83876106d2565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b03909216916125969190613a1d565b6125a09190613b35565b9050806000036125b95750600096879650945050505050565b60006125c58383612b9e565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156125fa576125fa613e75565b6040519080825280601f01601f191660200182016040528015612624576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612645578692505b828152826000602083013e90999098509650505050505050565b600061268087878761267988670de0b6b3a7640000613b35565b8787613299565b979650505050505050565b60006114996126cc6126a584670de0b6b3a7640000613b35565b61145a670de0b6b3a76400006126bb818a612d2d565b6126c59190613b35565b8790612a40565b6126de90670de0b6b3a7640000613a1d565b611f7684670de0b6b3a7640000613b35565b600080612727856126ff611ac9565b6127099190613a1d565b600254610ec2908790600160801b90046001600160801b0316613b35565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806127958561145a85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061278b818c612d2d565b61145a9190613b35565b91506127c1827f00000000000000000000000000000000000000000000000000000000000000006106d2565b9050935093915050565b6000826000036127dc575084611b01565b811561282f5761280d6127ef8487613a1d565b6127f985876106d2565b612803888a6106d2565b611f769190613a1d565b9050600061281b8588611b38565b905080821015612829578091505b50611b01565b82850361283e57506000611b01565b61286961284b8487613b35565b6128558587612a40565b61285f888a6106d2565b611f769190613b35565b9695505050505050565b600061289b601060006128876002866111fb565b815260200190815260200160002054611dc0565b6128ad601060006128876001876111fb565b6106ea9190613bd0565b60006128e37f000000000000000000000000000000000000000000000000000000000000000083612a40565b6003546128f991906001600160801b0316613a1d565b60025461290f906001600160801b0316846106d2565b101592915050565b60006106ea82600461227c565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016129735750476129fe565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156129d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129fb9190613c4f565b90505b601454600003612a0f57600061149c565b60145461149c9084908390611a95565b6000612680878787612a3988670de0b6b3a7640000613b35565b878761334d565b60006106e78383670de0b6b3a7640000613370565b6000808080612aa68786612a9f8b61145a612a788c670de0b6b3a7640000613b35565b7f000000000000000000000000000000000000000000000000000000000000000090612a40565b9190613370565b9350612ad2847f00000000000000000000000000000000000000000000000000000000000000006106d2565b91506000612af3612aeb89670de0b6b3a7640000613b35565b8a9088613370565b9050612b1f817f0000000000000000000000000000000000000000000000000000000000000000612a40565b9350612b4b847f00000000000000000000000000000000000000000000000000000000000000006106d2565b612b559084613a1d565b915050945094509450949050565b6000818311612b7257816106e7565b5090919050565b600080612b9184612b8b8a888a613370565b90612d2d565b9050611f89888486613370565b60006106e783670de0b6b3a764000084611a95565b600080612bc08484613396565b909250905080612bd257612bd2612732565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612c28575047612cb3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb09190613c4f565b90505b60145461149c90849083611a95565b600081600003612cdb5750670de0b6b3a76400006106ea565b82600003612ceb575060006106ea565b6000612cf683611dc0565b90506000612d0b612d0686611dc0565b6133d2565b9050818102612d22670de0b6b3a764000082613e8b565b9050612869816135f8565b60006106e783670de0b6b3a764000084613370565b600060016001607f1b03821115611b345760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612d8a575060016001607f1b0382135b15611b345760405163a5353be560e01b815260040160405180910390fd5b6000818313612b7257816106e7565b6003546000908190612dd2906001600160801b031684612d2d565b9050612dfe7f000000000000000000000000000000000000000000000000000000000000000082613a1d565b6002546001600160801b03161115611b47576002547f000000000000000000000000000000000000000000000000000000000000000090612e499083906001600160801b0316613b35565b61149c9190613b35565b612e5b6138f5565b600080612e678461315f565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612ea29190613e36565b6040805180830381865af4158015612ebe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ee29190613e45565b9350905082612ef75750600091506118e39050565b6000612f1e612f198461016001518561014001516106d290919063ffffffff16565b611dc0565b612f3e612f19856101200151866101000151612a4090919063ffffffff16565b612f489190613bd0565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015613080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130a49190613eb9565b9350935093509350806130c05750600098975050505050505050565b8684146130f1576130d084611b0a565b600280546001600160801b0319166001600160801b03929092169190911790555b8583146131225761310183612d6c565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146131505761313282611b0a565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b613167613947565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161325f911661378d565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926132919290041661378d565b905292915050565b6000806132a98888878787613803565b90506132c385611afb6132bc898c613a1d565b86906106d2565b97506132d0848985611a95565b9750878110156132e2576132e2612732565b878103670de0b6b3a7640000811061331757613310613309670de0b6b3a764000088612d2d565b8290612cc2565b905061332f565b61332c613309670de0b6b3a764000088612b9e565b90505b8088101561333f5761333f612732565b909603979650505050505050565b60008061335e888888888888613832565b909250905080611fa357611fa3612732565b600082600019048411830215820261338757600080fd5b50910281810615159190040190565b6000806000836133a586611dc0565b6133af9190613bd0565b905060008112156133c75760008092509250506106cb565b946001945092505050565b60008082136133f45760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134779084901c611dc0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361361357506000919050565b680755bf798b4a1bf1e5821261363c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061286974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611dc0565b600080670de0b6b3a76400006137a16106f0565b6137ab9190613bf0565b90508083116137bb5760006137c5565b6137c58184613b35565b915061149c6137fc670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bf0565b8390612b9e565b600061380f8585612cc2565b61382861382086611afb868b612a40565b859085613370565b6128699190613a1d565b60008060006138448989888888613803565b905061385486611afb898b613a1d565b97508781101561386b5760008092509250506138ea565b878103613879818688613370565b9050670de0b6b3a764000081106138a65761389f613309670de0b6b3a764000089612d2d565b90506138be565b6138bb613309670de0b6b3a764000089612b9e565b90505b6138c88186612d2d565b9050808a10156138e0576000809350935050506138ea565b8903925060019150505b965096945050505050565b604051806101200160405280613909613947565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156139be57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156139ea57600080fd5b8501606081880312156139fc57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106ea576106ea613a07565b600060208284031215613a4257600080fd5b81356001600160a01b038116811461149c57600080fd5b80151581146105f657600080fd5b600060208284031215613a7957600080fd5b813561149c81613a59565b6000808335601e19843603018112613a9b57600080fd5b83018035915067ffffffffffffffff821115613ab657600080fd5b6020019150368190038213156106cb57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613b2860c083018486613acb565b9998505050505050505050565b818103818111156106ea576106ea613a07565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613b8260e083018486613acb565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612bd257612bd2613a07565b6001600160801b03818116838216019080821115612bd257612bd2613a07565b8181036000831280158383131683831282161715612bd257612bd2613a07565b80820281158282048414176106ea576106ea613a07565b6001600160801b03828116828216039080821115612bd257612bd2613a07565b8082018281126000831280158216821582161715613c4757613c47613a07565b505092915050565b600060208284031215613c6157600080fd5b5051919050565b600060208284031215613c7a57600080fd5b815161149c81613a59565b634e487b7160e01b600052601260045260246000fd5b600082613caa57613caa613c85565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106ea576106ea613a07565b600081600f0b60016001607f1b03198103613cf957613cf9613a07565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613d94828551613d02565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e0957600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e2f57613e2f613a07565b5060000390565b61018081016106ea8284613d02565b60008060408385031215613e5857600080fd5b825191506020830151613e6a81613a59565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613e9a57613e9a613c85565b600160ff1b821460001984141615613eb457613eb4613a07565b500590565b60008060008060808587031215613ecf57600080fd5b84519350602085015192506040850151915060608501516139fc81613a5956fea2646970667358221220410c8f81c00a3f817c790841fb5eb9a74d2d173e1c481119d8b7a7adede1691164736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
