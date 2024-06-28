export const MockHyperdriveTarget1 = {
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
            "name": "closeLong",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeShort",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200421638038062004216833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613d3c620004da6000396000505060005050600050506000818160af015281816103250152612fcd0152600081816113da015281816117ec0152818161184f01528181612bab01528181612be701528181612de60152612fa701526000818161071301528181610d6301528181610daa01528181610f6f015281816116510152818161169f0152612f8101526000611c0f015260008181611d35015281816123aa01526124230152600081816108d701528181610f0701528181611d0901526123f7015260008181610dfc015261237001526000818161073401528181610d4101528181610dcb01528181610f900152818161162f015281816116c00152612ff301526000818161080f01528181610e86015281816117480152818161224501526135110152600081816105d20152818161064d015281816106c30152818161078f01526107c7015260005050600081816119e101528181611a2a01528181612648015281816126910152818161276c015281816128180152818161290401526129b00152613d3c6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046137bf565b610073565b60405190815260200160405180910390f35b61004e61006e3660046137bf565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bee565b3387610c23565b6000806000806000806101568b888e610cfc565b95509550955095509550955060008c90508c4210156102165782600d60008282546101819190613834565b9091555061019990506101926105ca565b4284610ff0565b6101a68c8887878561112e565b60006101b18e6112a8565b90506101cf6101bf8e6112f2565b6101c99083613847565b82611320565b6101d8896113d3565b6101e4576101e4611433565b60006101ef8a61144c565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b6102208689611459565b955061022b8861144c565b505b600061023a878a8d61153a565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bee565b61027a6020830183613867565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161389e565b6102cc8a6102c68d8f613834565b906115d5565b8d6102da60408c018c6138bb565b6040516102ee98979695949392919061392b565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bee565b6000806000806000806103bb8b888e6115ea565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e69190613834565b909155506103f790506101926105ca565b6104048c888787856117d5565b600061040f826112a8565b905061042761041d8e6112f2565b6101c99083613973565b610430896113d3565b61043c5761043c611433565b60006104478a61144c565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b6104788689611459565b95506104838861144c565b505b6000610492878a8d61153a565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bee565b6104d06020830183613867565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161389e565b8a61051c60408b018b6138bb565b60405161052f979695949392919061399b565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105886020830183613867565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119c6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611ac1565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613834565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611ad7565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b92505b5061076583611b0f565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b6139dc565b8a84610ff0565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613834565b4290611b39565b84610ff0565b61080288611b4e565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d6139dc565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bee565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611cf2565b9150915080600d60008282546108a59190613834565b909155506108c19050866000846108bb816112f2565b8861112e565b6108cb8183613834565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611dc1565b915061090f61090a83856115d5565b611e0b565b600680546002906109309084906201000090046001600160701b03166139ef565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611b0f565b6006805460109061097f908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bee565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611cf2565b9150915080600d60008282546109f69190613834565b90915550610a12905083600084610a0c816112f2565b8a6117d5565b610a1c81836139dc565b9150610a2b61090a83876115d5565b60068054600290610a4c9084906201000090046001600160701b03166139ef565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611b0f565b60068054601090610a9b908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f2565b610add836112f2565b610ae79190613847565b6000611320565b8e610af98482611e35565b50505b6000610b078461202f565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd7578e610bd35a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061218d565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca99084906139dc565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d10611ad7565b90506000610d1d8a612218565b6002549091508c908c90610d87908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612269565b600254919d509a50909550610def908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b9550610e25858c610e20897f00000000000000000000000000000000000000000000000000000000000000006122d9565b612309565b15610e3257610e32611433565b6000806000610e4385878b8761234b565b9c5091945092509050610e5681846139dc565b610e609089613834565b9750610e6c8284613834565b610e76908d613834565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eb091906139dc565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef85760008b8152600860205260409020600101546001600160801b0316610efa565b8b5b90508b610f2b8e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611dc1565b9950610f37878a6139dc565b9850670de0b6b3a7640000610fb4610f4f8787613834565b600254610f6d908f90600160801b90046001600160801b03166139dc565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b1115610fc257610fc2611433565b610fd28a8a878a8787600061245f565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101c5750505050565b6000848152600860205260408120546001600160801b0316908190036110765761104583611b0f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f4565b6110c76110c2670de0b6b3a764000061108f88866139dc565b6110999190613a2f565b85670de0b6b3a76400006110ad878a6139dc565b6110b79190613a2f565b8592919060016124fe565b611b0f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fd84611b0f565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111776110c28261115a670de0b6b3a764000086613a2f565b600554600160801b90046001600160801b031691908a60006124fe565b600580546001600160801b03928316600160801b02921691909117905561119d86611b0f565b6111a79082613a46565b600480546001600160801b03928316600160801b0292169190911790556111cd84611b0f565b600280546000906111e89084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611215836125a8565b6004805460009061122a908490600f0b613a66565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061125a85611b0f565b6002805460109061127c908490600160801b90046001600160801b0316613a46565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112d0601060006112bc600286610bee565b8152602001908152602001600020546112f2565b6112e2601060006112bc600187610bee565b6112ec9190613847565b92915050565b60006001600160ff1b0382111561131c5760405163396ea70160e11b815260040160405180910390fd5b5090565b600061134961132f84836125e4565b61133a8460006125e4565b6113449190613847565b6125a8565b9050600081600f0b131561139e57600380548291906000906113759084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156113ce576113b381613a93565b600380546000906113759084906001600160801b0316613a46565b505050565b60006113ff7f0000000000000000000000000000000000000000000000000000000000000000836125fa565b60035461141591906001600160801b0316613834565b60025461142b906001600160801b0316846115d5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ec826004611e35565b600080600061146784611b4e565b9092509050600061147886866115d5565b9050818311156114905761148d86838561260f565b95505b828110156114a25780830392506114a7565b600092505b6114b083611e0b565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561150357869003611507565b5060005b61151081611b0f565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061154785856115d5565b90506115528161262d565b9450846000036115665760009150506115ce565b611576604084016020850161389e565b156115a55761159e8561158c6020860186613867565b61159960408701876138bb565b612716565b91506115cc565b6115c8856115b66020860186613867565b6115c360408701876138bb565b6128b0565b8491505b505b9392505050565b60006115ce8383670de0b6b3a764000061260f565b6000806000806000806000806115fe611ad7565b9050600061160b8a612218565b6002549091508b908d90611675908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612a46565b600254919d509b50909550600090819081906116e4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b98506116f284878b8861234b565b9c50919450909250905061170682846139dc565b61171090896139dc565b975061171c8184613834565b611726908e6139dc565b9c506117328a8e613834565b9b50505050505050506117bf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f61177291906139dc565b81526020810191909152604001600020600101546001600160801b0316428e116117b65760008e8152600860205260409020600101546001600160801b03166117b8565b8e5b600161245f565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061181757507f000000000000000000000000000000000000000000000000000000000000000061181585836139dc565b105b1561182457611824611433565b6004549084900390600f0b6118398482613847565b905083611845866112f2565b13801561187a57507f00000000000000000000000000000000000000000000000000000000000000006118788383612a9a565b105b1561188757611887611433565b600354600160801b90046001600160801b03166118c96110c2826118b3670de0b6b3a764000088613a2f565b6005546001600160801b031691908c60006124fe565b600580546001600160801b0319166001600160801b03929092169190911790556118f388826139dc565b90506118fe81611b0f565b600380546001600160801b03928316600160801b02921691909117905561192483611b0f565b600280546001600160801b0319166001600160801b039290921691909117905561194d826125a8565b600480546001600160801b0319166001600160801b039290921691909117905561197687611b0f565b60028054601090611998908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a15575047611aa0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9d9190613ab9565b90505b601454600003611ab15760006115ce565b6014546115ce908490839061260f565b6000611acd8284613ae8565b6115ce90846139dc565b6002546004546000916105c5916001600160801b0390911690600f0b612a9a565b600061008182611b0985888861260f565b90612ac0565b60006001600160801b0382111561131c57604051630f0af95160e11b815260040160405180910390fd5b6000818311611b4857826115ce565b50919050565b6006546000908190611b71908490600160801b90046001600160801b03166115d5565b6006546201000090046001600160701b03169250905081811115611ced576000611b9b83836139dc565b9050611baa6110c28286612b35565b60068054601090611bcc908490600160801b90046001600160801b0316613a46565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c058583612b4a90919063ffffffff16565b90506000611c33827f00000000000000000000000000000000000000000000000000000000000000006115d5565b905080600d6000828254611c479190613834565b90915550611c57905081836139dc565b9150611c6282611b0f565b60028054600090611c7d9084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611caa82612b5f565b60048054600090611cbf908490600f0b613a66565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cff8785612b4a565b91506000611d2d837f00000000000000000000000000000000000000000000000000000000000000006115d5565b9050611d59817f00000000000000000000000000000000000000000000000000000000000000006115d5565b91508315611d7c57611d6b82826139dc565b611d7590846139dc565b9250611d93565b611d8682826139dc565b611d909084613834565b92505b86861015611db657611da683878961260f565b9250611db382878961260f565b91505b509550959350505050565b600080611dd984611dd38a888a61260f565b90612b4a565b9050611de688848661260f565b611df09082613834565b905086811115611e005786810391505b509695505050505050565b60006001600160701b0382111561131c5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e80916001600160801b0316906139dc565b905080600003611e945760019150506112ec565b6000611e9f85612b89565b905080600003611eb4576001925050506112ec565b600080611ec2838589612c25565b9150915080611ed85760009450505050506112ec565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f14929190613b7a565b6040805180830381865af4158015611f30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f549190613bf0565b91509150611f72611f64826112f2565b611f6d90613c14565b612da0565b925082611f8857600096505050505050506112ec565b611f9182611b0f565b60078054600090611fac9084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fd981611b0f565b60078054601090611ffb908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61205887612f38565b6040518263ffffffff1660e01b81526004016120749190613c30565b6040805180830381865af4158015612090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b49190613c3f565b91509150806120ca575060009485945092505050565b60008086116120da5760006120e4565b6120e483876115d5565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b039092169161214f9190613834565b61215991906139dc565b9050806000036121725750600096879650945050505050565b600061217e8383612b4a565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121b3576121b3613c6f565b6040519080825280601f01601f1916602001820160405280156121dd576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121fe578692505b828152826000602083013e90999098509650505050505050565b6000806122236105ca565b905080831161223357600061223d565b61223d81846139dc565b91506115ce827f0000000000000000000000000000000000000000000000000000000000000000612b4a565b6000808061228a61228288670de0b6b3a76400006139dc565b899087613072565b905086156122cc5761229c88886125fa565b91506122bd8a8a846122b68a670de0b6b3a76400006139dc565b8989613098565b92506122c98382613834565b90505b9750975097945050505050565b60006122f76122f084670de0b6b3a76400006139dc565b83906125fa565b6115ce90670de0b6b3a76400006139dc565b60008061234085612318611ad7565b6123229190613834565b600254610f6d908790600160801b90046001600160801b03166139dc565b909210949350505050565b60008080806123a2878661239b8b61239561236e8c670de0b6b3a76400006139dc565b7f0000000000000000000000000000000000000000000000000000000000000000906125fa565b906125fa565b9190613072565b93506123ce847f00000000000000000000000000000000000000000000000000000000000000006115d5565b915060006123ef6123e789670de0b6b3a76400006139dc565b8a9088613072565b905061241b817f00000000000000000000000000000000000000000000000000000000000000006125fa565b9350612447847f00000000000000000000000000000000000000000000000000000000000000006115d5565b6124519084613834565b915050945094509450949050565b600080600080600080888810156124ce578615612484576124818d898b61260f565b9c505b61248f8c898b61260f565b9b5061249a8b6112f2565b6124a38d6112f2565b6124ad9190613847565b90506124ba8b898b61260f565b9a506124c78a898b61260f565b99506124ed565b6124d78b6112f2565b6124e08d6112f2565b6124ea9190613847565b90505b9b9c9a9b999a975050505050505050565b60008260000361250f57508461259f565b8115612562576125406125228487613834565b61252c85876115d5565b612536888a6115d5565b611dd39190613834565b9050600061254e8588611b39565b90508082101561255c578091505b5061259f565b8285036125715750600061259f565b61259c61257e84876139dc565b61258885876125fa565b612592888a6115d5565b611dd391906139dc565b90505b95945050505050565b600060016001607f1b03198212806125c6575060016001607f1b0382135b1561131c5760405163a5353be560e01b815260040160405180910390fd5b60008183136125f357816115ce565b5090919050565b60006115ce8383670de0b6b3a7640000613072565b600082600019048411830215820261262657600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161267c575047612707565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127049190613ab9565b90505b6014546115ce9084908361260f565b60006014548511612727578461272b565b6014545b94506000612738866119c6565b9050856014600082825461274c91906139dc565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127f2576040516001600160a01b038716908390600081818185875af1925050503d80600081146127e2576040519150601f19603f3d011682016040523d82523d6000602084013e6127e7565b606091505b505080915050612888565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128859190613c85565b90505b806128a6576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60145484116128bf57836128c3565b6014545b935060006128d0856119c6565b905084601460008282546128e491906139dc565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161298a576040516001600160a01b038616908390600081818185875af1925050503d806000811461297a576040519150601f19603f3d011682016040523d82523d6000602084013e61297f565b606091505b505080915050612a20565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156129f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a1d9190613c85565b90505b80612a3e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008080612a67612a5f88670de0b6b3a76400006139dc565b89908761260f565b905086156122cc57612a7988886115d5565b91506122bd8a8a84612a938a670de0b6b3a76400006139dc565b89896130bb565b600080612aa784846130cc565b909250905080612ab957612ab9611433565b5092915050565b600081600003612ad95750670de0b6b3a76400006112ec565b82600003612ae9575060006112ec565b6000612af4836112f2565b90506000612b09612b04866112f2565b61310b565b9050818102612b20670de0b6b3a764000082613ca2565b9050612b2b81613331565b9695505050505050565b60006115ce83670de0b6b3a764000084613072565b60006115ce83670de0b6b3a76400008461260f565b600060016001607f1b0382111561131c5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612ba4906001600160801b031684612b35565b9050612bd07f000000000000000000000000000000000000000000000000000000000000000082613834565b6002546001600160801b03161115611b48576002547f000000000000000000000000000000000000000000000000000000000000000090612c1b9083906001600160801b03166139dc565b6115ce91906139dc565b612c2d61370c565b600080612c3984612f38565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612c749190613c30565b6040805180830381865af4158015612c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb49190613c3f565b9350905082612cc9575060009150612d989050565b6000612cf0612ceb8461016001518561014001516115d590919063ffffffff16565b6112f2565b612d10612ceb8561012001518661010001516125fa90919063ffffffff16565b612d1a9190613847565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e7d9190613cd0565b935093509350935080612e995750600098975050505050505050565b868414612eca57612ea984611b0f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612efb57612eda836125a8565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612f2957612f0b82611b0f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f4061375e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161303891166134c6565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261306a929004166134c6565b905292915050565b600082600019048411830215820261308957600080fd5b50910281810615159190040190565b6000806130a988888888888861353c565b909250905080611e0057611e00611433565b6000806130a988888888888861361d565b6000806000836130db866112f2565b6130e59190613847565b905060008112156130fd576000809250925050613104565b9150600190505b9250929050565b600080821361312d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131b09084901c6112f2565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361334c57506000919050565b680755bf798b4a1bf1e58212613375576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b2b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f2565b600080670de0b6b3a76400006134da6105ca565b6134e49190613a2f565b90508083116134f45760006134fe565b6134fe81846139dc565b91506115ce613535670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a2f565b8390612b4a565b600080600061354e89898888886136dd565b905086881015613565576000809250925050613612565b96869003966135748887612ac0565b97508781101561358b576000809250925050613612565b878103613599818688613072565b9050670de0b6b3a764000081106135cd576135c66135bf670de0b6b3a764000089612b35565b8290612ac0565b90506135e5565b6135e26135bf670de0b6b3a764000089612b4a565b90505b6135ef8186612b35565b90508981101561360757600080935093505050613612565b899003925060019150505b965096945050505050565b600080600061362f89898888886136dd565b905061363f86611b09898b613834565b975087811015613656576000809250925050613612565b878103613664818688613072565b9050670de0b6b3a764000081106136915761368a6135bf670de0b6b3a764000089612b35565b90506136a9565b6136a66135bf670de0b6b3a764000089612b4a565b90505b6136b38186612b35565b9050808a10156136cb57600080935093505050613612565b90980398600198509650505050505050565b60006136e98585612ac0565b6137026136fa86611b09868b6125fa565b859085613072565b61259c9190613834565b60405180610120016040528061372061375e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156137d557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561380157600080fd5b85016060818803121561381357600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ec576112ec61381e565b8181036000831280158383131683831282161715612ab957612ab961381e565b60006020828403121561387957600080fd5b81356001600160a01b03811681146115ce57600080fd5b80151581146105af57600080fd5b6000602082840312156138b057600080fd5b81356115ce81613890565b6000808335601e198436030181126138d257600080fd5b83018035915067ffffffffffffffff8211156138ed57600080fd5b60200191503681900382131561310457600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061396560e083018486613902565b9a9950505050505050505050565b80820182811260008312801582168215821617156139935761399361381e565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006139cf60c083018486613902565b9998505050505050505050565b818103818111156112ec576112ec61381e565b6001600160701b03818116838216019080821115612ab957612ab961381e565b6001600160801b03818116838216019080821115612ab957612ab961381e565b80820281158282048414176112ec576112ec61381e565b6001600160801b03828116828216039080821115612ab957612ab961381e565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ec576112ec61381e565b600081600f0b60016001607f1b03198103613ab057613ab061381e565b60000392915050565b600060208284031215613acb57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613af757613af7613ad2565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613b8e828551613afc565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613c0357600080fd5b505080516020909101519092909150565b6000600160ff1b8201613c2957613c2961381e565b5060000390565b61018081016112ec8284613afc565b60008060408385031215613c5257600080fd5b825191506020830151613c6481613890565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613c9757600080fd5b81516115ce81613890565b600082613cb157613cb1613ad2565b600160ff1b821460001984141615613ccb57613ccb61381e565b500590565b60008060008060808587031215613ce657600080fd5b84519350602085015192506040850151915060608501516138138161389056fea2646970667358221220604722529255f0ffd69040c7954adafc0400f7631bdc719b9f8cb41c7e6c4bf164736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
