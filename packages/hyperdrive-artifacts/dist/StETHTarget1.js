export const StETHTarget1 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003e5438038062003e54833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161399d620004b76000396000505060005050600050506000818160af015281816103250152612c4b0152600081816113da015281816117ec0152818161184f015281816128290152818161286501528181612a640152612c2501526000818161071301528181610d6301528181610daa01528181610f6f015281816116510152818161169f0152612bff01526000611ba1015260008181611cc70152818161233c01526123b50152600081816108d701528181610f0701528181611c9b0152612389015260008181610dfc015261230201526000818161073401528181610d4101528181610dcb01528181610f900152818161162f015281816116c00152612c7101526000818161080f01528181610e8601528181611748015281816121d7015261318f0152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600081816119df015281816125d8015261265001526000505061399d6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461343d565b610073565b60405190815260200160405180910390f35b61004e61006e36600461343d565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bee565b3387610c23565b6000806000806000806101568b888e610cfc565b95509550955095509550955060008c90508c4210156102165782600d600082825461018191906134b2565b9091555061019990506101926105ca565b4284610ff0565b6101a68c8887878561112e565b60006101b18e6112a8565b90506101cf6101bf8e6112f2565b6101c990836134c5565b82611320565b6101d8896113d3565b6101e4576101e4611433565b60006101ef8a61144c565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b6102208689611459565b955061022b8861144c565b505b600061023a878a8d61153a565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bee565b61027a60208301836134e5565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161351c565b6102cc8a6102c68d8f6134b2565b906115d5565b8d6102da60408c018c613539565b6040516102ee9897969594939291906135a9565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bee565b6000806000806000806103bb8b888e6115ea565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e691906134b2565b909155506103f790506101926105ca565b6104048c888787856117d5565b600061040f826112a8565b905061042761041d8e6112f2565b6101c990836135f1565b610430896113d3565b61043c5761043c611433565b60006104478a61144c565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b6104788689611459565b95506104838861144c565b505b6000610492878a8d61153a565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bee565b6104d060208301836134e5565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161351c565b8a61051c60408b018b613539565b60405161052f9796959493929190613619565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058860208301836134e5565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119c6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a53565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b6134b2565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a69565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a8a565b92505b5061076583611aa1565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b61365a565b8a84610ff0565b6107f9896107f36107ec7f0000000000000000000000000000000000000000000000000000000000000000836134b2565b4290611acb565b84610ff0565b61080288611ae0565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d61365a565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bee565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c84565b9150915080600d60008282546108a591906134b2565b909155506108c19050866000846108bb816112f2565b8861112e565b6108cb81836134b2565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d53565b915061090f61090a83856115d5565b611d9d565b600680546002906109309084906201000090046001600160701b031661366d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611aa1565b6006805460109061097f908490600160801b90046001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bee565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611c84565b9150915080600d60008282546109f691906134b2565b90915550610a12905083600084610a0c816112f2565b8a6117d5565b610a1c818361365a565b9150610a2b61090a83876115d5565b60068054600290610a4c9084906201000090046001600160701b031661366d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611aa1565b60068054601090610a9b908490600160801b90046001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f2565b610add836112f2565b610ae791906134c5565b6000611320565b8e610af98482611dc7565b50505b6000610b0784611fc1565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd7578e610bd35a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061211f565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca990849061365a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d10611a69565b90506000610d1d8a6121aa565b6002549091508c908c90610d87908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121fb565b600254919d509a50909550610def908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a8a565b9550610e25858c610e20897f000000000000000000000000000000000000000000000000000000000000000061226b565b61229b565b15610e3257610e32611433565b6000806000610e4385878b876122dd565b9c5091945092509050610e56818461365a565b610e6090896134b2565b9750610e6c82846134b2565b610e76908d6134b2565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eb0919061365a565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef85760008b8152600860205260409020600101546001600160801b0316610efa565b8b5b90508b610f2b8e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d53565b9950610f37878a61365a565b9850670de0b6b3a7640000610fb4610f4f87876134b2565b600254610f6d908f90600160801b90046001600160801b031661365a565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a8a565b1115610fc257610fc2611433565b610fd28a8a878a878760006123f1565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101c5750505050565b6000848152600860205260408120546001600160801b0316908190036110765761104583611aa1565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f4565b6110c76110c2670de0b6b3a764000061108f888661365a565b61109991906136ad565b85670de0b6b3a76400006110ad878a61365a565b6110b791906136ad565b859291906001612490565b611aa1565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fd84611aa1565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111776110c28261115a670de0b6b3a7640000866136ad565b600554600160801b90046001600160801b031691908a6000612490565b600580546001600160801b03928316600160801b02921691909117905561119d86611aa1565b6111a790826136c4565b600480546001600160801b03928316600160801b0292169190911790556111cd84611aa1565b600280546000906111e89084906001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112158361253a565b6004805460009061122a908490600f0b6136e4565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061125a85611aa1565b6002805460109061127c908490600160801b90046001600160801b03166136c4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112d0601060006112bc600286610bee565b8152602001908152602001600020546112f2565b6112e2601060006112bc600187610bee565b6112ec91906134c5565b92915050565b60006001600160ff1b0382111561131c5760405163396ea70160e11b815260040160405180910390fd5b5090565b600061134961132f8483612576565b61133a846000612576565b61134491906134c5565b61253a565b9050600081600f0b131561139e57600380548291906000906113759084906001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156113ce576113b381613711565b600380546000906113759084906001600160801b03166136c4565b505050565b60006113ff7f00000000000000000000000000000000000000000000000000000000000000008361258c565b60035461141591906001600160801b03166134b2565b60025461142b906001600160801b0316846115d5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ec826004611dc7565b600080600061146784611ae0565b9092509050600061147886866115d5565b9050818311156114905761148d8683856125a1565b95505b828110156114a25780830392506114a7565b600092505b6114b083611d9d565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561150357869003611507565b5060005b61151081611aa1565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061154785856115d5565b9050611552816125bf565b9450846000036115665760009150506115ce565b611576604084016020850161351c565b156115a55761159e8561158c60208601866134e5565b6115996040870187613539565b61260f565b91506115cc565b6115c8856115b660208601866134e5565b6115c36040870187613539565b61262a565b8491505b505b9392505050565b60006115ce8383670de0b6b3a76400006125a1565b6000806000806000806000806115fe611a69565b9050600061160b8a6121aa565b6002549091508b908d90611675908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f00000000000000000000000000000000000000000000000000000000000000006126c4565b600254919d509b50909550600090819081906116e4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a8a565b98506116f284878b886122dd565b9c509194509092509050611706828461365a565b611710908961365a565b975061171c81846134b2565b611726908e61365a565b9c506117328a8e6134b2565b9b50505050505050506117bf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f611772919061365a565b81526020810191909152604001600020600101546001600160801b0316428e116117b65760008e8152600860205260409020600101546001600160801b03166117b8565b8e5b60016123f1565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061181757507f0000000000000000000000000000000000000000000000000000000000000000611815858361365a565b105b1561182457611824611433565b6004549084900390600f0b61183984826134c5565b905083611845866112f2565b13801561187a57507f00000000000000000000000000000000000000000000000000000000000000006118788383612718565b105b1561188757611887611433565b600354600160801b90046001600160801b03166118c96110c2826118b3670de0b6b3a7640000886136ad565b6005546001600160801b031691908c6000612490565b600580546001600160801b0319166001600160801b03929092169190911790556118f3888261365a565b90506118fe81611aa1565b600380546001600160801b03928316600160801b02921691909117905561192483611aa1565b600280546001600160801b0319166001600160801b039290921691909117905561194d8261253a565b600480546001600160801b0319166001600160801b039290921691909117905561197687611aa1565b60028054601090611998908490600160801b90046001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa158015611a2f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ec9190613737565b6000611a5f8284613766565b6115ce908461365a565b6002546004546000916105c5916001600160801b0390911690600f0b612718565b600061008182611a9b8588886125a1565b9061273e565b60006001600160801b0382111561131c57604051630f0af95160e11b815260040160405180910390fd5b6000818311611ada57826115ce565b50919050565b6006546000908190611b03908490600160801b90046001600160801b03166115d5565b6006546201000090046001600160701b03169250905081811115611c7f576000611b2d838361365a565b9050611b3c6110c282866127b3565b60068054601090611b5e908490600160801b90046001600160801b03166136c4565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b9785836127c890919063ffffffff16565b90506000611bc5827f00000000000000000000000000000000000000000000000000000000000000006115d5565b905080600d6000828254611bd991906134b2565b90915550611be99050818361365a565b9150611bf482611aa1565b60028054600090611c0f9084906001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3c826127dd565b60048054600090611c51908490600f0b6136e4565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c9187856127c8565b91506000611cbf837f00000000000000000000000000000000000000000000000000000000000000006115d5565b9050611ceb817f00000000000000000000000000000000000000000000000000000000000000006115d5565b91508315611d0e57611cfd828261365a565b611d07908461365a565b9250611d25565b611d18828261365a565b611d2290846134b2565b92505b86861015611d4857611d388387896125a1565b9250611d458287896125a1565b91505b509550959350505050565b600080611d6b84611d658a888a6125a1565b906127c8565b9050611d788884866125a1565b611d8290826134b2565b905086811115611d925786810391505b509695505050505050565b60006001600160701b0382111561131c5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e12916001600160801b03169061365a565b905080600003611e265760019150506112ec565b6000611e3185612807565b905080600003611e46576001925050506112ec565b600080611e548385896128a3565b9150915080611e6a5760009450505050506112ec565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611ea69291906137f8565b6040805180830381865af4158015611ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ee6919061386e565b91509150611f04611ef6826112f2565b611eff90613892565b612a1e565b925082611f1a57600096505050505050506112ec565b611f2382611aa1565b60078054600090611f3e9084906001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f6b81611aa1565b60078054601090611f8d908490600160801b90046001600160801b031661368d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fea87612bb6565b6040518263ffffffff1660e01b815260040161200691906138ae565b6040805180830381865af4158015612022573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061204691906138bd565b915091508061205c575060009485945092505050565b600080861161206c576000612076565b61207683876115d5565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b03909216916120e191906134b2565b6120eb919061365a565b9050806000036121045750600096879650945050505050565b600061211083836127c8565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff811115612145576121456138ed565b6040519080825280601f01601f19166020018201604052801561216f576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612190578692505b828152826000602083013e90999098509650505050505050565b6000806121b56105ca565b90508083116121c55760006121cf565b6121cf818461365a565b91506115ce827f00000000000000000000000000000000000000000000000000000000000000006127c8565b6000808061221c61221488670de0b6b3a764000061365a565b899087612cf0565b9050861561225e5761222e888861258c565b915061224f8a8a846122488a670de0b6b3a764000061365a565b8989612d16565b925061225b83826134b2565b90505b9750975097945050505050565b600061228961228284670de0b6b3a764000061365a565b839061258c565b6115ce90670de0b6b3a764000061365a565b6000806122d2856122aa611a69565b6122b491906134b2565b600254610f6d908790600160801b90046001600160801b031661365a565b909210949350505050565b6000808080612334878661232d8b6123276123008c670de0b6b3a764000061365a565b7f00000000000000000000000000000000000000000000000000000000000000009061258c565b9061258c565b9190612cf0565b9350612360847f00000000000000000000000000000000000000000000000000000000000000006115d5565b9150600061238161237989670de0b6b3a764000061365a565b8a9088612cf0565b90506123ad817f000000000000000000000000000000000000000000000000000000000000000061258c565b93506123d9847f00000000000000000000000000000000000000000000000000000000000000006115d5565b6123e390846134b2565b915050945094509450949050565b60008060008060008088881015612460578615612416576124138d898b6125a1565b9c505b6124218c898b6125a1565b9b5061242c8b6112f2565b6124358d6112f2565b61243f91906134c5565b905061244c8b898b6125a1565b9a506124598a898b6125a1565b995061247f565b6124698b6112f2565b6124728d6112f2565b61247c91906134c5565b90505b9b9c9a9b999a975050505050505050565b6000826000036124a1575084612531565b81156124f4576124d26124b484876134b2565b6124be85876115d5565b6124c8888a6115d5565b611d6591906134b2565b905060006124e08588611acb565b9050808210156124ee578091505b50612531565b82850361250357506000612531565b61252e612510848761365a565b61251a858761258c565b612524888a6115d5565b611d65919061365a565b90505b95945050505050565b600060016001607f1b0319821280612558575060016001607f1b0382135b1561131c5760405163a5353be560e01b815260040160405180910390fd5b600081831361258557816115ce565b5090919050565b60006115ce8383670de0b6b3a7640000612cf0565b60008260001904841183021582026125b857600080fd5b5091020490565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401611a12565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af1158015612699573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126bd9190613737565b5050505050565b600080806126e56126dd88670de0b6b3a764000061365a565b8990876125a1565b9050861561225e576126f788886115d5565b915061224f8a8a846127118a670de0b6b3a764000061365a565b8989612d39565b6000806127258484612d4a565b90925090508061273757612737611433565b5092915050565b6000816000036127575750670de0b6b3a76400006112ec565b82600003612767575060006112ec565b6000612772836112f2565b90506000612787612782866112f2565b612d89565b905081810261279e670de0b6b3a764000082613903565b90506127a981612faf565b9695505050505050565b60006115ce83670de0b6b3a764000084612cf0565b60006115ce83670de0b6b3a7640000846125a1565b600060016001607f1b0382111561131c5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612822906001600160801b0316846127b3565b905061284e7f0000000000000000000000000000000000000000000000000000000000000000826134b2565b6002546001600160801b03161115611ada576002547f0000000000000000000000000000000000000000000000000000000000000000906128999083906001600160801b031661365a565b6115ce919061365a565b6128ab61338a565b6000806128b784612bb6565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128f291906138ae565b6040805180830381865af415801561290e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061293291906138bd565b9350905082612947575060009150612a169050565b600061296e6129698461016001518561014001516115d590919063ffffffff16565b6112f2565b61298e61296985610120015186610100015161258c90919063ffffffff16565b61299891906134c5565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ad7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612afb9190613931565b935093509350935080612b175750600098975050505050505050565b868414612b4857612b2784611aa1565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b7957612b588361253a565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ba757612b8982611aa1565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612bbe6133dc565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612cb69116613144565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612ce892900416613144565b905292915050565b6000826000190484118302158202612d0757600080fd5b50910281810615159190040190565b600080612d278888888888886131ba565b909250905080611d9257611d92611433565b600080612d2788888888888861329b565b600080600083612d59866112f2565b612d6391906134c5565b90506000811215612d7b576000809250925050612d82565b9150600190505b9250929050565b6000808213612dab5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e2e9084901c6112f2565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612fca57506000919050565b680755bf798b4a1bf1e58212612ff3576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906127a974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f2565b600080670de0b6b3a76400006131586105ca565b61316291906136ad565b905080831161317257600061317c565b61317c818461365a565b91506115ce6131b3670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136ad565b83906127c8565b60008060006131cc898988888861335b565b9050868810156131e3576000809250925050613290565b96869003966131f2888761273e565b975087811015613209576000809250925050613290565b878103613217818688612cf0565b9050670de0b6b3a7640000811061324b5761324461323d670de0b6b3a7640000896127b3565b829061273e565b9050613263565b61326061323d670de0b6b3a7640000896127c8565b90505b61326d81866127b3565b90508981101561328557600080935093505050613290565b899003925060019150505b965096945050505050565b60008060006132ad898988888861335b565b90506132bd86611a9b898b6134b2565b9750878110156132d4576000809250925050613290565b8781036132e2818688612cf0565b9050670de0b6b3a7640000811061330f5761330861323d670de0b6b3a7640000896127b3565b9050613327565b61332461323d670de0b6b3a7640000896127c8565b90505b61333181866127b3565b9050808a101561334957600080935093505050613290565b90980398600198509650505050505050565b6000613367858561273e565b61338061337886611a9b868b61258c565b859085612cf0565b61252e91906134b2565b60405180610120016040528061339e6133dc565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561345357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561347f57600080fd5b85016060818803121561349157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ec576112ec61349c565b81810360008312801583831316838312821617156127375761273761349c565b6000602082840312156134f757600080fd5b81356001600160a01b03811681146115ce57600080fd5b80151581146105af57600080fd5b60006020828403121561352e57600080fd5b81356115ce8161350e565b6000808335601e1984360301811261355057600080fd5b83018035915067ffffffffffffffff82111561356b57600080fd5b602001915036819003821315612d8257600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006135e360e083018486613580565b9a9950505050505050505050565b80820182811260008312801582168215821617156136115761361161349c565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061364d60c083018486613580565b9998505050505050505050565b818103818111156112ec576112ec61349c565b6001600160701b038181168382160190808211156127375761273761349c565b6001600160801b038181168382160190808211156127375761273761349c565b80820281158282048414176112ec576112ec61349c565b6001600160801b038281168282160390808211156127375761273761349c565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ec576112ec61349c565b600081600f0b60016001607f1b0319810361372e5761372e61349c565b60000392915050565b60006020828403121561374957600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261377557613775613750565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061380c82855161377a565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561388157600080fd5b505080516020909101519092909150565b6000600160ff1b82016138a7576138a761349c565b5060000390565b61018081016112ec828461377a565b600080604083850312156138d057600080fd5b8251915060208301516138e28161350e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008261391257613912613750565b600160ff1b82146000198414161561392c5761392c61349c565b500590565b6000806000806080858703121561394757600080fd5b84519350602085015192506040850151915060608501516134918161350e56fea26469706673582212208904c84b214cd754637e2da484c120402374e22a0836f70a75d9d16989c95bd464736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
