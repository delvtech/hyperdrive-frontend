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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200443438038062004434833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613f21620005136000396000505060005050600050506000818161010001528181610310015261316501526000818161149c01528181611fc201528181612025015281816127d701528181612d4a01528181612d8601528181612f7e015261313f01526000818161083a01528181610d6501528181610da701528181610e990152818161130f0152818161136e01528181611848015281816118db015261311901526000611be1015260008181611d07015281816129c701528181612a40015261327f0152600081816109fe01528181610e1a0152818161140901528181611cdb0152612a14015260008181610df901528181612993015261323b01526000818161085b01528181610d4301528181610dc801528181610eba015281816112ed0152818161138f015261318b0152600081816101de015281816103a80152818161093601526137350152600081816106f401528181610774015281816107ea015281816108b601526108ee01526000505060008181610556015281816116460152818161168f01528181611721015281816117a201528181611949015281816119ca01528181612858015281816128a101528181612b0d0152612b560152613f216000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046139ca565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046139ca565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de836105c0565b6000806100eb88866105f9565b909250905060006100fc83836106ce565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106ec565b905061017a81846004600161071d565b50600080600061018a8787610d14565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613a3f565b909155506101d99050844283610ef6565b6102037f000000000000000000000000000000000000000000000000000000000000000085613a3f565b98506102118389888c611034565b600061021e60018b6111ce565b90506102378161023160208e018e613a52565b8b611203565b8d8a8a898e8561024a6020830183613a52565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613a89565b8961029560408a018a613aa6565b6040516102a89796959493929190613b16565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e836105c0565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112ab565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106ec565b9050600061039f6103956106ec565b846004600161071d565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613a3f565b90506000806000806103e08e89886112be565b600d8054949850929650909450925083916000906103ff908490613a3f565b909155506104109050874283610ef6565b50600061041e84898d611444565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105f9565b508e905061045b81858b89611476565b60006104686002886111ce565b90508c6104828261047c6020840184613a52565b85611203565b858b86846104936020860186613a52565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613a89565b6104e4896104de8a8d613b57565b906106ce565b8d6104f260408e018e613aa6565b604051610506989796959493929190613b6a565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a057503415155b156105be57604051631574f9f360e01b815260040160405180910390fd5b565b60006105cf6020830183613a52565b6001600160a01b0316036105f65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b8160008061060d6040850160208601613a89565b1561063257610628856106236040870187613aa6565b61162a565b909350905061064a565b503461064a856106456040870187613aa6565b6118be565b6106526112ab565b915080156106c557604051600090339083908381818185875af1925050503d806000811461069c576040519150601f19603f3d011682016040523d82523d6000602084013e6106a1565b606091505b50509050806106c3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106e38383670de0b6b3a7640000611a68565b90505b92915050565b6000610718427f0000000000000000000000000000000000000000000000000000000000000000611a86565b905090565b600084815260086020526040812060018101546001600160801b031615158061074557504286115b1561075e57600101546001600160801b03169050610d0c565b600080600061076b6106ec565b905060006107997f00000000000000000000000000000000000000000000000000000000000000008b613a3f565b90505b8181101561080f576000818152600860205260409020600101546001600160801b031680156107e7576000828152600860205260409020549094506001600160801b0316925061080f565b507f00000000000000000000000000000000000000000000000000000000000000000161079c565b836000036108825788935061087f610825611a9c565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b92505b5061088c83611add565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e26108db7f00000000000000000000000000000000000000000000000000000000000000008b613b57565b8a84610ef6565b6109208961091a6109137f000000000000000000000000000000000000000000000000000000000000000083613a3f565b4290611b0b565b84610ef6565b61092988611b20565b506000905060088161095b7f00000000000000000000000000000000000000000000000000000000000000008d613b57565b815260208101919091526040016000908120600101546001600160801b0316915061098760028c6111ce565b6000818152601060205260408120549192508c8c8315610acd57600192506000806109b686898d866000611cc4565b9150915080600d60008282546109cc9190613a3f565b909155506109e89050866000846109e281611d93565b88611dbd565b6109f28183613a3f565b9150610a2286838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f37565b9150610a36610a3183856106ce565b611f81565b60068054600290610a579084906201000090046001600160701b0316613bb2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8482611add565b60068054601090610aa6908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ada6001846111ce565b6000818152601060205260409020549091508015610be95760019450600080610b07838b8f886001611cc4565b9150915080600d6000828254610b1d9190613a3f565b90915550610b39905083600084610b3381611d93565b8a611fab565b610b438183613b57565b9150610b52610a3183876106ce565b60068054600290610b739084906201000090046001600160701b0316613bb2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba082611add565b60068054601090610bc2908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2357610c15610bfb87611d93565b610c0483611d93565b610c0e9190613bf2565b600061219c565b8e610c2084826121db565b50505b6000610c2e846123d5565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cfc578e610cf85a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612521565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610d24611a9c565b600254909150610d89908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006125ac565b600254909450610dec908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b9150610e438785610e3e857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006125d8565b61263d565b15610e5057610e5061267f565b610e5c87858885612698565b91965094509250670de0b6b3a7640000610ede610e798784613a3f565b600254610e97908890600160801b90046001600160801b0316613b57565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b1115610eec57610eec61267f565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f225750505050565b6000848152600860205260408120546001600160801b031690819003610f7c57610f4b83611add565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610ffa565b610fcd610fc8670de0b6b3a7640000610f958886613b57565b610f9f9190613c12565b85670de0b6b3a7640000610fb3878a613b57565b610fbd9190613c12565b8592919060016126e4565b611add565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61100384611add565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611076610fc882611060670de0b6b3a764000086613c12565b6005546001600160801b031691908860016126e4565b600580546001600160801b0319166001600160801b039290921691909117905561109f85611add565b600280546000906110ba9084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110e784611add565b60028054601090611109908490600160801b90046001600160801b0316613c29565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061113684611add565b6111409082613bd2565b600380546001600160801b03808416600160801b029116179055905060006111678361278c565b90506111858161117687611d93565b6111809084613c49565b61219c565b61118e846127d0565b61119a5761119a61267f565b60006111a585612830565b9050806111c557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111f85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611235908490613a3f565b909155505060008381526010602052604081208054839290611258908490613a3f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610718670de0b6b3a764000061283d565b60008060008060006112ce611a9c565b600254909150611333908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612938565b9350876113408589612959565b111561134e5761134e61267f565b60025460009081906113b3908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b93506113c98a670de0b6b3a7640000868c61296e565b509193509091506113dc90508183613b57565b6113e69087613b57565b9550886114338161142d8d6113fb868c613b57565b8d6114068782612a7c565b877f0000000000000000000000000000000000000000000000000000000000000000612a92565b90612959565b975090945050505093509350935093565b60006114566040830160208401613a89565b1561146257508261146f565b61146c8484612ab7565b90505b9392505050565b6002546001600160801b0316838110156114925761149261267f565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114ca908390600f0b612acc565b10156114d8576114d861267f565b60045461152290610fc890600160801b90046001600160801b0316611505670de0b6b3a764000086613c12565b600554600160801b90046001600160801b031691908960016126e4565b600580546001600160801b03928316600160801b02921691909117905561154881611add565b600280546001600160801b0319166001600160801b039290921691909117905561157185611add565b60028054601090611593908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115c085611add565b600480546010906115e2908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116118361278c565b90506111858161162088611d93565b6111809084613bf2565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161167a575047611705565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156116de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117029190613c71565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611780578734101561176f576040516312171d8360e31b815260040160405180910390fd5b6117798834613b57565b905061181a565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156117f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118179190613c8a565b91505b81611838576040516312171d8360e31b815260040160405180910390fd5b60145460000361187d5761186c887f0000000000000000000000000000000000000000000000000000000000000000612ab7565b6014819055945092506118b6915050565b60145460009061188f908a9086611a68565b905080601460008282546118a39190613a3f565b909155509095509093506118b692505050565b935093915050565b60006118c98461283d565b9050601454600003611907576118ff817f0000000000000000000000000000000000000000000000000000000000000000612ab7565b60145561192d565b600061191282612af2565b905080601460008282546119269190613a3f565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119a85782341015611997576040516312171d8360e31b815260040160405180910390fd5b6119a18334613b57565b9050611a42565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611a1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3f9190613c8a565b91505b81611a60576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611a7f57600080fd5b5091020490565b6000611a928284613cbd565b6106e39084613b57565b600254600454600091610718916001600160801b0390911690600f0b612acc565b6000611ad482611ace858888611a68565b90612bdb565b95945050505050565b60006001600160801b03821115611b0757604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611b1a57826106e3565b50919050565b6006546000908190611b43908490600160801b90046001600160801b03166106ce565b6006546201000090046001600160701b03169250905081811115611cbf576000611b6d8383613b57565b9050611b7c610fc88286612c46565b60068054601090611b9e908490600160801b90046001600160801b0316613c29565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611bd78583612ab790919063ffffffff16565b90506000611c05827f00000000000000000000000000000000000000000000000000000000000000006106ce565b905080600d6000828254611c199190613a3f565b90915550611c2990508183613b57565b9150611c3482611add565b60028054600090611c4f9084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c7c82612c5b565b60048054600090611c91908490600f0b613cd1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cd18785612ab7565b91506000611cff837f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050611d2b817f00000000000000000000000000000000000000000000000000000000000000006106ce565b91508315611d4e57611d3d8282613b57565b611d479084613b57565b9250611d65565b611d588282613b57565b611d629084613a3f565b92505b86861015611d8857611d78838789611a68565b9250611d85828789611a68565b91505b509550959350505050565b60006001600160ff1b03821115611b075760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611e06610fc882611de9670de0b6b3a764000086613c12565b600554600160801b90046001600160801b031691908a60006126e4565b600580546001600160801b03928316600160801b029216919091179055611e2c86611add565b611e369082613c29565b600480546001600160801b03928316600160801b029216919091179055611e5c84611add565b60028054600090611e779084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ea483612c85565b60048054600090611eb9908490600f0b613cd1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ee985611add565b60028054601090611f0b908490600160801b90046001600160801b0316613c29565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611f4f84611f498a888a611a68565b90612ab7565b9050611f5c888486611a68565b611f669082613a3f565b905086811115611f765786810391505b509695505050505050565b60006001600160701b03821115611b075760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611fed57507f0000000000000000000000000000000000000000000000000000000000000000611feb8583613b57565b105b15611ffa57611ffa61267f565b6004549084900390600f0b61200f8482613bf2565b90508361201b86611d93565b13801561205057507f000000000000000000000000000000000000000000000000000000000000000061204e8383612acc565b105b1561205d5761205d61267f565b600354600160801b90046001600160801b031661209f610fc882612089670de0b6b3a764000088613c12565b6005546001600160801b031691908c60006126e4565b600580546001600160801b0319166001600160801b03929092169190911790556120c98882613b57565b90506120d481611add565b600380546001600160801b03928316600160801b0292169190911790556120fa83611add565b600280546001600160801b0319166001600160801b039290921691909117905561212382612c85565b600480546001600160801b0319166001600160801b039290921691909117905561214c87611add565b6002805460109061216e908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546121b790610fc8906001600160801b03168484612cc1565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291612226916001600160801b031690613b57565b90508060000361223a5760019150506106e6565b600061224585612d28565b90508060000361225a576001925050506106e6565b600080612268838589612dc4565b915091508061227e5760009450505050506106e6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016122ba929190613d7c565b6040805180830381865af41580156122d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122fa9190613df2565b9150915061231861230a82611d93565b61231390613e16565b612f38565b92508261232e57600096505050505050506106e6565b61233782611add565b600780546000906123529084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061237f81611add565b600780546010906123a1908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6123fe876130d0565b6040518263ffffffff1660e01b815260040161241a9190613e32565b6040805180830381865af4158015612436573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061245a9190613e41565b9150915080612470575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916124d691613a3f565b6124e09190613b57565b9050806000036124f857506000958695509350505050565b6000808711612508576000612513565b612513848884611a68565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561254757612547613e71565b6040519080825280601f01601f191660200182016040528015612571576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612592578692505b828152826000602083013e90999098509650505050505050565b60006125cd8787876125c688670de0b6b3a7640000613b57565b878761320a565b979650505050505050565b600061146c6126196125f284670de0b6b3a7640000613b57565b61142d670de0b6b3a7640000612608818a612c46565b6126129190613b57565b8790612959565b61262b90670de0b6b3a7640000613a3f565b611f4984670de0b6b3a7640000613b57565b6000806126748561264c611a9c565b6126569190613a3f565b600254610e97908790600160801b90046001600160801b0316613b57565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006126ab89878961322d565b90925090506126ba8289613b57565b975060006126c982888a611a68565b90506126d5818b613b57565b9a989950979650505050505050565b6000826000036126f5575084611ad4565b8115612748576127266127088487613a3f565b61271285876106ce565b61271c888a6106ce565b611f499190613a3f565b905060006127348588611b0b565b905080821015612742578091505b50611ad4565b82850361275757506000611ad4565b6127826127648487613b57565b61276e8587612959565b612778888a6106ce565b611f499190613b57565b9695505050505050565b60006127b4601060006127a06002866111ce565b815260200190815260200160002054611d93565b6127c6601060006127a06001876111ce565b6106e69190613bf2565b60006127fc7f000000000000000000000000000000000000000000000000000000000000000083612959565b60035461281291906001600160801b0316613a3f565b600254612828906001600160801b0316846106ce565b101592915050565b60006106e68260046121db565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161288c575047612917565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156128f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129149190613c71565b90505b60145460000361292857600061146f565b60145461146f9084908390611a68565b60006125cd87878761295288670de0b6b3a7640000613b57565b87876132ad565b60006106e38383670de0b6b3a76400006132be565b60008080806129bf87866129b88b61142d6129918c670de0b6b3a7640000613b57565b7f000000000000000000000000000000000000000000000000000000000000000090612959565b91906132be565b93506129eb847f00000000000000000000000000000000000000000000000000000000000000006106ce565b91506000612a0c612a0489670de0b6b3a7640000613b57565b8a90886132be565b9050612a38817f0000000000000000000000000000000000000000000000000000000000000000612959565b9350612a64847f00000000000000000000000000000000000000000000000000000000000000006106ce565b612a6e9084613a3f565b915050945094509450949050565b6000818311612a8b57816106e3565b5090919050565b600080612aaa84612aa48a888a6132be565b90612c46565b9050611f5c8884866132be565b60006106e383670de0b6b3a764000084611a68565b600080612ad984846132e4565b909250905080612aeb57612aeb61267f565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612b41575047612bcc565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612ba5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bc99190613c71565b90505b60145461146f90849083611a68565b600081600003612bf45750670de0b6b3a76400006106e6565b82600003612c04575060006106e6565b6000612c0f83611d93565b90506000612c24612c1f86611d93565b613320565b9050818102612c3b670de0b6b3a764000082613e87565b905061278281613546565b60006106e383670de0b6b3a7640000846132be565b600060016001607f1b03821115611b075760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612ca3575060016001607f1b0382135b15611b075760405163a5353be560e01b815260040160405180910390fd5b600080612ccf8460006136db565b612cda8460006136db565b612ce49190613bf2565b90506000811315612d0057612cf98186613a3f565b9450612d1f565b6000811215612d1f57612d1281613e16565b612d1c9086613b57565b94505b50929392505050565b6003546000908190612d43906001600160801b031684612c46565b9050612d6f7f000000000000000000000000000000000000000000000000000000000000000082613a3f565b6002546001600160801b03161115611b1a576002547f000000000000000000000000000000000000000000000000000000000000000090612dba9083906001600160801b0316613b57565b61146f9190613b57565b612dcc613917565b600080612dd8846130d0565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e139190613e32565b6040805180830381865af4158015612e2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e539190613e41565b9350905082612e685750600091506118b69050565b6000612e8f612e8a8461016001518561014001516106ce90919063ffffffff16565b611d93565b612eaf612e8a85610120015186610100015161295990919063ffffffff16565b612eb99190613bf2565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ff1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130159190613eb5565b9350935093509350806130315750600098975050505050505050565b8684146130625761304184611add565b600280546001600160801b0319166001600160801b03929092169190911790555b8583146130935761307283612c85565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146130c1576130a382611add565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6130d8613969565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916131d091166136ea565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192613202929004166136ea565b905292915050565b60008061321b888888888888613760565b909250905080611f7657611f7661267f565b6000806132778561142d85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061326d818c612c46565b61142d9190613b57565b91506132a3827f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050935093915050565b60008061321b888888888888613828565b60008260001904841183021582026132d557600080fd5b50910281810615159190040190565b6000806000836132f386611d93565b6132fd9190613bf2565b905060008112156133155760008092509250506106c7565b946001945092505050565b60008082136133425760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133c59084901c611d93565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361356157506000919050565b680755bf798b4a1bf1e5821261358a576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061278274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611d93565b6000818313612a8b57816106e3565b600080670de0b6b3a76400006136fe6106ec565b6137089190613c12565b9050808311613718576000613722565b6137228184613b57565b915061146f613759670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c12565b8390612ab7565b600080600061377289898888886138e8565b905061378c86611ace6137858a8d613a3f565b87906106ce565b9850613799858a86611a68565b9850888110156137b057600080925092505061381d565b888103670de0b6b3a764000081106137e5576137de6137d7670de0b6b3a764000089612c46565b8290612bdb565b90506137fd565b6137fa6137d7670de0b6b3a764000089612ab7565b90505b808910156138135760008093509350505061381d565b8803925060019150505b965096945050505050565b600080600061383a89898888886138e8565b905061384a86611ace898b613a3f565b97508781101561386157600080925092505061381d565b87810361386f8186886132be565b9050670de0b6b3a7640000811061389c576138956137d7670de0b6b3a764000089612c46565b90506138b4565b6138b16137d7670de0b6b3a764000089612ab7565b90505b6138be8186612c46565b9050808a10156138d65760008093509350505061381d565b90980398600198509650505050505050565b60006138f48585612bdb565b61390d61390586611ace868b612959565b8590856132be565b6127829190613a3f565b60405180610120016040528061392b613969565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156139e057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a0c57600080fd5b850160608188031215613a1e57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106e6576106e6613a29565b600060208284031215613a6457600080fd5b81356001600160a01b038116811461146f57600080fd5b80151581146105f657600080fd5b600060208284031215613a9b57600080fd5b813561146f81613a7b565b6000808335601e19843603018112613abd57600080fd5b83018035915067ffffffffffffffff821115613ad857600080fd5b6020019150368190038213156106c757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613b4a60c083018486613aed565b9998505050505050505050565b818103818111156106e6576106e6613a29565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613ba460e083018486613aed565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612aeb57612aeb613a29565b6001600160801b03818116838216019080821115612aeb57612aeb613a29565b8181036000831280158383131683831282161715612aeb57612aeb613a29565b80820281158282048414176106e6576106e6613a29565b6001600160801b03828116828216039080821115612aeb57612aeb613a29565b8082018281126000831280158216821582161715613c6957613c69613a29565b505092915050565b600060208284031215613c8357600080fd5b5051919050565b600060208284031215613c9c57600080fd5b815161146f81613a7b565b634e487b7160e01b600052601260045260246000fd5b600082613ccc57613ccc613ca7565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106e6576106e6613a29565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613d90828551613cfe565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e0557600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e2b57613e2b613a29565b5060000390565b61018081016106e68284613cfe565b60008060408385031215613e5457600080fd5b825191506020830151613e6681613a7b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613e9657613e96613ca7565b600160ff1b821460001984141615613eb057613eb0613a29565b500590565b60008060008060808587031215613ecb57600080fd5b8451935060208501519250604085015191506060850151613a1e81613a7b56fea2646970667358221220977e76ddc60d949579ba4827d645dc6e030e1bf9a3f8ba6c8eb1e5135454e0d764736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
