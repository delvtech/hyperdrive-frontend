export const StETHTarget2 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003f2538038062003f25833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613a59620004cc6000396000505060005050600050506000818160f8015281816103000152612d4501526000818161144d01528181611c9801528181611cfb015281816125670152818161292a0152818161296601528181612b5e0152612d1f0152600081816107c201528181610cef01528181610d3101528181610e48015281816112c00152818161131f0152612cf9015260006118b70152600081816119dd01528181612446015281816126e8015261276101526000818161098601528181610da4015281816113ba015281816119b10152612735015260008181610d830152818161240201526126b40152600081816107e301528181610ccd01528181610d5201528181610e690152818161129e015281816113400152612d6b0152600081816101d601528181610398015281816108be015261332901526000818161067c015281816106fc015281816107720152818161083e0152610876015260008181611627015281816116c301526125e6015260005050613a596000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046134f9565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046134f9565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c1565b6000806100a461051a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d683610544565b6000806100e3888661057d565b909250905060006100f48383610656565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101375760405163211ddda360e11b815260040160405180910390fd5b86821015610158576040516342af972b60e01b815260040160405180910390fd5b6000610162610674565b90506101728184600460016106a5565b5060008060006101828787610c9e565b919a5091945090925090508b8810156101ae5760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c0919061356e565b909155506101d19050844283610ea7565b6101fb7f00000000000000000000000000000000000000000000000000000000000000008561356e565b98506102098389888c610fe5565b600061021660018b61117f565b905061022f8161022960208e018e613581565b8b6111b4565b8d8a8a898e856102426020830183613581565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027f60408801602089016135b8565b8961028d60408a018a6135d5565b6040516102a09796959493929190613645565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102cc61051a565b600654610100900460ff16156102f5576040516321081abf60e01b815260040160405180910390fd5b6102fe83610544565b7f000000000000000000000000000000000000000000000000000000000000000086101561033f5760405163211ddda360e11b815260040160405180910390fd5b600061034961125c565b90508481101561036c576040516342af972b60e01b815260040160405180910390fd5b6000610376610674565b9050600061038f610385610674565b84600460016106a5565b905060006103bd7f00000000000000000000000000000000000000000000000000000000000000008461356e565b90506000806000806103d08e898861126f565b600d8054949850929650909450925083916000906103ef90849061356e565b909155506104009050874283610ea7565b50600061040e84898d6113f5565b9050808d10156104315760405163c972651760e01b815260040160405180910390fd5b61043b818c61057d565b508e905061044b81858b89611427565b600061045860028861117f565b90508c6104728261046c6020840184613581565b856111b4565b858b86846104836020860186613581565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104c060408b0160208c016135b8565b6104d4896104ce8a8d613686565b90610656565b8d6104e260408e018e6135d5565b6040516104f6989796959493929190613699565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361053d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105536020830183613581565b6001600160a01b03160361057a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061059160408501602086016135b8565b156105b6576105ac856105a760408701876135d5565b6115db565b90935090506105d2565b50346105ce856105c960408701876135d5565b6116a1565b8492505b6105da61125c565b9150801561064d57604051600090339083908381818185875af1925050503d8060008114610624576040519150601f19603f3d011682016040523d82523d6000602084013e610629565b606091505b505090508061064b576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061066b8383670de0b6b3a764000061173e565b90505b92915050565b60006106a0427f000000000000000000000000000000000000000000000000000000000000000061175c565b905090565b600084815260086020526040812060018101546001600160801b03161515806106cd57504286115b156106e657600101546001600160801b03169050610c96565b60008060006106f3610674565b905060006107217f00000000000000000000000000000000000000000000000000000000000000008b61356e565b90505b81811015610797576000818152600860205260409020600101546001600160801b0316801561076f576000828152600860205260409020549094506001600160801b03169250610797565b507f000000000000000000000000000000000000000000000000000000000000000001610724565b8360000361080a578893506108076107ad611772565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611793565b92505b50610814836117b3565b6001850180546001600160801b0319166001600160801b039290921691909117905561086a6108637f00000000000000000000000000000000000000000000000000000000000000008b613686565b8a84610ea7565b6108a8896108a261089b7f00000000000000000000000000000000000000000000000000000000000000008361356e565b42906117e1565b84610ea7565b6108b1886117f6565b50600090506008816108e37f00000000000000000000000000000000000000000000000000000000000000008d613686565b815260208101919091526040016000908120600101546001600160801b0316915061090f60028c61117f565b6000818152601060205260408120549192508c8c8315610a55576001925060008061093e86898d86600061199a565b9150915080600d6000828254610954919061356e565b9091555061097090508660008461096a81611a69565b88611a93565b61097a818361356e565b91506109aa86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c0d565b91506109be6109b98385610656565b611c57565b600680546002906109df9084906201000090046001600160701b03166136e1565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a0c826117b3565b60068054601090610a2e908490600160801b90046001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a6260018461117f565b6000818152601060205260409020549091508015610b715760019450600080610a8f838b8f88600161199a565b9150915080600d6000828254610aa5919061356e565b90915550610ac1905083600084610abb81611a69565b8a611c81565b610acb8183613686565b9150610ada6109b98387610656565b60068054600290610afb9084906201000090046001600160701b03166136e1565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b28826117b3565b60068054601090610b4a908490600160801b90046001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bab57610b9d610b8387611a69565b610b8c83611a69565b610b969190613721565b6000611e72565b8e610ba88482611f25565b50505b6000610bb68461211f565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610c86578e610c825a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061227d565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cae611772565b600254909150610d13908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612308565b600254909450610d76908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611793565b9150610dcd8785610dc8857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612334565b612399565b15610dda57610dda6123db565b600080610de889858a6123f4565b9092509050610df78287613686565b9550610e0481858a61173e565b9450610e10858a613686565b9650670de0b6b3a7640000610e8d610e28898661356e565b600254610e46908a90600160801b90046001600160801b0316613686565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611793565b1115610e9b57610e9b6123db565b50505092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610ed35750505050565b6000848152600860205260408120546001600160801b031690819003610f2d57610efc836117b3565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610fab565b610f7e610f79670de0b6b3a7640000610f468886613686565b610f509190613741565b85670de0b6b3a7640000610f64878a613686565b610f6e9190613741565b859291906001612474565b6117b3565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fb4846117b3565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611027610f7982611011670de0b6b3a764000086613741565b6005546001600160801b03169190886001612474565b600580546001600160801b0319166001600160801b0392909216919091179055611050856117b3565b6002805460009061106b9084906001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611098846117b3565b600280546010906110ba908490600160801b90046001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110e7846117b3565b6110f19082613701565b600380546001600160801b03808416600160801b029116179055905060006111188361251c565b90506111368161112787611a69565b6111319084613778565b611e72565b61113f84612560565b61114b5761114b6123db565b6000611156856125c0565b90508061117657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111a95760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906111e690849061356e565b90915550506000838152601060205260408120805483929061120990849061356e565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106a0670de0b6b3a76400006125cd565b600080600080600061127f611772565b6002549091506112e4908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612659565b9350876112f1858961267a565b11156112ff576112ff6123db565b6002546000908190611364908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611793565b935061137a8a670de0b6b3a7640000868c61268f565b5091935090915061138d90508183613686565b6113979087613686565b9550886113e4816113de8d6113ac868c613686565b8d6113b7878261279d565b877f00000000000000000000000000000000000000000000000000000000000000006127b3565b9061267a565b975090945050505093509350935093565b600061140760408301602084016135b8565b15611413575082611420565b61141d84846127d8565b90505b9392505050565b6002546001600160801b031683811015611443576114436123db565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061147b908390600f0b6127ed565b1015611489576114896123db565b6004546114d390610f7990600160801b90046001600160801b03166114b6670de0b6b3a764000086613741565b600554600160801b90046001600160801b03169190896001612474565b600580546001600160801b03928316600160801b0292169190911790556114f9816117b3565b600280546001600160801b0319166001600160801b0392909216919091179055611522856117b3565b60028054601090611544908490600160801b90046001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611571856117b3565b60048054601090611593908490600160801b90046001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115c28361251c565b9050611136816115d188611a69565b6111319084613721565b600080843410156115ff576040516312171d8360e31b815260040160405180910390fd5b50600a5460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015611671573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061169691906137a0565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015611714573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173891906137a0565b50505050565b600082600019048411830215820261175557600080fd5b5091020490565b600061176882846137cf565b61066b9084613686565b6002546004546000916106a0916001600160801b0390911690600f0b6127ed565b60006117aa826117a485888861173e565b90612813565b95945050505050565b60006001600160801b038211156117dd57604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116117f0578261066b565b50919050565b6006546000908190611819908490600160801b90046001600160801b0316610656565b6006546201000090046001600160701b031692509050818111156119955760006118438383613686565b9050611852610f79828661287e565b60068054601090611874908490600160801b90046001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006118ad85836127d890919063ffffffff16565b905060006118db827f0000000000000000000000000000000000000000000000000000000000000000610656565b905080600d60008282546118ef919061356e565b909155506118ff90508183613686565b915061190a826117b3565b600280546000906119259084906001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061195282612893565b60048054600090611967908490600f0b6137e3565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806119a787856127d8565b915060006119d5837f0000000000000000000000000000000000000000000000000000000000000000610656565b9050611a01817f0000000000000000000000000000000000000000000000000000000000000000610656565b91508315611a2457611a138282613686565b611a1d9084613686565b9250611a3b565b611a2e8282613686565b611a38908461356e565b92505b86861015611a5e57611a4e83878961173e565b9250611a5b82878961173e565b91505b509550959350505050565b60006001600160ff1b038211156117dd5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611adc610f7982611abf670de0b6b3a764000086613741565b600554600160801b90046001600160801b031691908a6000612474565b600580546001600160801b03928316600160801b029216919091179055611b02866117b3565b611b0c9082613758565b600480546001600160801b03928316600160801b029216919091179055611b32846117b3565b60028054600090611b4d9084906001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b7a836128bd565b60048054600090611b8f908490600f0b6137e3565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611bbf856117b3565b60028054601090611be1908490600160801b90046001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c2584611c1f8a888a61173e565b906127d8565b9050611c3288848661173e565b611c3c908261356e565b905086811115611c4c5786810391505b509695505050505050565b60006001600160701b038211156117dd5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611cc357507f0000000000000000000000000000000000000000000000000000000000000000611cc18583613686565b105b15611cd057611cd06123db565b6004549084900390600f0b611ce58482613721565b905083611cf186611a69565b138015611d2657507f0000000000000000000000000000000000000000000000000000000000000000611d2483836127ed565b105b15611d3357611d336123db565b600354600160801b90046001600160801b0316611d75610f7982611d5f670de0b6b3a764000088613741565b6005546001600160801b031691908c6000612474565b600580546001600160801b0319166001600160801b0392909216919091179055611d9f8882613686565b9050611daa816117b3565b600380546001600160801b03928316600160801b029216919091179055611dd0836117b3565b600280546001600160801b0319166001600160801b0392909216919091179055611df9826128bd565b600480546001600160801b0319166001600160801b0392909216919091179055611e22876117b3565b60028054601090611e44908490600160801b90046001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611e9b611e8184836128f9565b611e8c8460006128f9565b611e969190613721565b6128bd565b9050600081600f0b1315611ef05760038054829190600090611ec79084906001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611f2057611f0581613810565b60038054600090611ec79084906001600160801b0316613758565b505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611f70916001600160801b031690613686565b905080600003611f8457600191505061066e565b6000611f8f85612908565b905080600003611fa45760019250505061066e565b600080611fb28385896129a4565b9150915080611fc857600094505050505061066e565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016120049291906138b4565b6040805180830381865af4158015612020573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612044919061392a565b9150915061206261205482611a69565b61205d9061394e565b612b18565b925082612078576000965050505050505061066e565b612081826117b3565b6007805460009061209c9084906001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120c9816117b3565b600780546010906120eb908490600160801b90046001600160801b0316613701565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61214887612cb0565b6040518263ffffffff1660e01b8152600401612164919061396a565b6040805180830381865af4158015612180573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121a49190613979565b91509150806121ba575060009485945092505050565b60008086116121ca5760006121d4565b6121d48387610656565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b039092169161223f919061356e565b6122499190613686565b9050806000036122625750600096879650945050505050565b600061226e83836127d8565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156122a3576122a36139a9565b6040519080825280601f01601f1916602001820160405280156122cd576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156122ee578692505b828152826000602083013e90999098509650505050505050565b600061232987878761232288670de0b6b3a7640000613686565b8787612dea565b979650505050505050565b600061141d61237561234e84670de0b6b3a7640000613686565b6113de670de0b6b3a7640000612364818a61287e565b61236e9190613686565b879061267a565b61238790670de0b6b3a764000061356e565b611c1f84670de0b6b3a7640000613686565b6000806123d0856123a8611772565b6123b2919061356e565b600254610e46908790600160801b90046001600160801b0316613686565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061243e856113de85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612434818c61287e565b6113de9190613686565b915061246a827f0000000000000000000000000000000000000000000000000000000000000000610656565b9050935093915050565b6000826000036124855750846117aa565b81156124d8576124b6612498848761356e565b6124a28587610656565b6124ac888a610656565b611c1f919061356e565b905060006124c485886117e1565b9050808210156124d2578091505b506117aa565b8285036124e7575060006117aa565b6125126124f48487613686565b6124fe858761267a565b612508888a610656565b611c1f9190613686565b9695505050505050565b60006125446010600061253060028661117f565b815260200190815260200160002054611a69565b6125566010600061253060018761117f565b61066e9190613721565b600061258c7f00000000000000000000000000000000000000000000000000000000000000008361267a565b6003546125a291906001600160801b031661356e565b6002546125b8906001600160801b031684610656565b101592915050565b600061066e826004611f25565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015612635573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066e91906137a0565b600061232987878761267388670de0b6b3a7640000613686565b8787612e9e565b600061066b8383670de0b6b3a7640000612ec1565b60008080806126e087866126d98b6113de6126b28c670de0b6b3a7640000613686565b7f00000000000000000000000000000000000000000000000000000000000000009061267a565b9190612ec1565b935061270c847f0000000000000000000000000000000000000000000000000000000000000000610656565b9150600061272d61272589670de0b6b3a7640000613686565b8a9088612ec1565b9050612759817f000000000000000000000000000000000000000000000000000000000000000061267a565b9350612785847f0000000000000000000000000000000000000000000000000000000000000000610656565b61278f908461356e565b915050945094509450949050565b60008183116127ac578161066b565b5090919050565b6000806127cb846127c58a888a612ec1565b9061287e565b9050611c32888486612ec1565b600061066b83670de0b6b3a76400008461173e565b6000806127fa8484612ee7565b90925090508061280c5761280c6123db565b5092915050565b60008160000361282c5750670de0b6b3a764000061066e565b8260000361283c5750600061066e565b600061284783611a69565b9050600061285c61285786611a69565b612f23565b9050818102612873670de0b6b3a7640000826139bf565b905061251281613149565b600061066b83670de0b6b3a764000084612ec1565b600060016001607f1b038211156117dd5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806128db575060016001607f1b0382135b156117dd5760405163a5353be560e01b815260040160405180910390fd5b60008183136127ac578161066b565b6003546000908190612923906001600160801b03168461287e565b905061294f7f00000000000000000000000000000000000000000000000000000000000000008261356e565b6002546001600160801b031611156117f0576002547f00000000000000000000000000000000000000000000000000000000000000009061299a9083906001600160801b0316613686565b6114209190613686565b6129ac613446565b6000806129b884612cb0565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129f3919061396a565b6040805180830381865af4158015612a0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a339190613979565b9350905082612a485750600091506116999050565b6000612a6f612a6a84610160015185610140015161065690919063ffffffff16565b611a69565b612a8f612a6a85610120015186610100015161267a90919063ffffffff16565b612a999190613721565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bf591906139ed565b935093509350935080612c115750600098975050505050505050565b868414612c4257612c21846117b3565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c7357612c52836128bd565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ca157612c83826117b3565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612cb8613498565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612db091166132de565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612de2929004166132de565b905292915050565b600080612dfa8888878787613354565b9050612e14856117a4612e0d898c61356e565b8690610656565b9750612e2184898561173e565b975087811015612e3357612e336123db565b878103670de0b6b3a76400008110612e6857612e61612e5a670de0b6b3a76400008861287e565b8290612813565b9050612e80565b612e7d612e5a670de0b6b3a7640000886127d8565b90505b80881015612e9057612e906123db565b909603979650505050505050565b600080612eaf888888888888613383565b909250905080611c4c57611c4c6123db565b6000826000190484118302158202612ed857600080fd5b50910281810615159190040190565b600080600083612ef686611a69565b612f009190613721565b90506000811215612f1857600080925092505061064f565b946001945092505050565b6000808213612f455760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fc89084901c611a69565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361316457506000919050565b680755bf798b4a1bf1e5821261318d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061251274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a69565b600080670de0b6b3a76400006132f2610674565b6132fc9190613741565b905080831161330c576000613316565b6133168184613686565b915061142061334d670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613741565b83906127d8565b60006133608585612813565b613379613371866117a4868b61267a565b859085612ec1565b612512919061356e565b60008060006133958989888888613354565b90506133a5866117a4898b61356e565b9750878110156133bc57600080925092505061343b565b8781036133ca818688612ec1565b9050670de0b6b3a764000081106133f7576133f0612e5a670de0b6b3a76400008961287e565b905061340f565b61340c612e5a670de0b6b3a7640000896127d8565b90505b613419818661287e565b9050808a10156134315760008093509350505061343b565b8903925060019150505b965096945050505050565b60405180610120016040528061345a613498565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561350f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561353b57600080fd5b85016060818803121561354d57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561066e5761066e613558565b60006020828403121561359357600080fd5b81356001600160a01b038116811461142057600080fd5b801515811461057a57600080fd5b6000602082840312156135ca57600080fd5b8135611420816135aa565b6000808335601e198436030181126135ec57600080fd5b83018035915067ffffffffffffffff82111561360757600080fd5b60200191503681900382131561064f57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061367960c08301848661361c565b9998505050505050505050565b8181038181111561066e5761066e613558565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006136d360e08301848661361c565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561280c5761280c613558565b6001600160801b0381811683821601908082111561280c5761280c613558565b818103600083128015838313168383128216171561280c5761280c613558565b808202811582820484141761066e5761066e613558565b6001600160801b0382811682821603908082111561280c5761280c613558565b808201828112600083128015821682158216171561379857613798613558565b505092915050565b6000602082840312156137b257600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b6000826137de576137de6137b9565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561066e5761066e613558565b600081600f0b60016001607f1b0319810361382d5761382d613558565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506138c8828551613836565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561393d57600080fd5b505080516020909101519092909150565b6000600160ff1b820161396357613963613558565b5060000390565b610180810161066e8284613836565b6000806040838503121561398c57600080fd5b82519150602083015161399e816135aa565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000826139ce576139ce6137b9565b600160ff1b8214600019841416156139e8576139e8613558565b500590565b60008060008060808587031215613a0357600080fd5b845193506020850151925060408501519150606085015161354d816135aa56fea264697066735822122015feb546298b2119ac5e6f7b563afd203ffb3a98bd1ec4b61baab12bc291f88264736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
