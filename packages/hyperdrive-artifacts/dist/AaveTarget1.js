export const AaveTarget1 = {
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
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620043c5380380620043c58339810160408190526200003591620005cc565b600160005580516001600160a01b039081166080908152602080840151831660a0818152928501516101a0908152928501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151850151905280516040908101516101609081529151606090810151610180908152828a0151891661022052908901516102405291880151600980549189166001600160a01b031992831617905591880151600a805491891691841691909117905594870151600b805491881691831691909117905590860151600c8054919096169116179093558151633a9ae92360e11b81529151637535d2469260048082019392918290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f9190620006df565b6001600160a01b03908116610260819052608051620001b29216906001620001b9565b5062000754565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021390859083906200028516565b6200027f57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002739186916200033616565b6200027f848262000336565b50505050565b6000806000846001600160a01b031684604051620002a49190620006ff565b6000604051808303816000865af19150503d8060008114620002e3576040519150601f19603f3d011682016040523d82523d6000602084013e620002e8565b606091505b5091509150818015620003165750805115806200031657508080602001905181019062000316919062000730565b80156200032d57506000856001600160a01b03163b115b95945050505050565b60006200034d6001600160a01b03841683620003a9565b905080516000141580156200037557508080602001905181019062000373919062000730565b155b15620003a457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003b983836000620003c0565b9392505050565b606081471015620003e75760405163cd78605960e01b81523060048201526024016200039b565b600080856001600160a01b03168486604051620004059190620006ff565b60006040518083038185875af1925050503d806000811462000444576040519150601f19603f3d011682016040523d82523d6000602084013e62000449565b606091505b5090925090506200045c86838362000466565b9695505050505050565b6060826200047f576200047982620004ca565b620003b9565b81511580156200049757506001600160a01b0384163b155b15620004c257604051639996b31560e01b81526001600160a01b03851660048201526024016200039b565b5080620003b9565b805115620004db5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200052957634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004f457600080fd5b805162000552816200052f565b919050565b6000608082840312156200056a57600080fd5b604051608081016001600160401b03811182821017156200059b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215620005e057600080fd5b620005ea620004f7565b620005f58362000545565b8152620006056020840162000545565b6020820152620006186040840162000545565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101606200068381850162000545565b908201526101806200069784820162000545565b908201526101a0620006ab84820162000545565b908201526101c0620006bf84820162000545565b908201526101e0620006d48585830162000557565b908201529392505050565b600060208284031215620006f257600080fd5b8151620003b9816200052f565b6000825160005b8181101562000722576020818601810151858301520162000706565b506000920191825250919050565b6000602082840312156200074357600080fd5b81518015158114620003b957600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613ab362000912600039600081816119770152818161256f015261259801526000505060005050600050506000818160af015281816103250152612cc201526000818161136401528181611775015281816117d8015281816128a0015281816128dc01528181612adb0152612c9c01526000818161071301528181610d6101528181610da801528181610f6d015281816115da015281816116280152612c7601526000611aea015260008181611c100152818161227301526122ec0152600081816108d701528181610f0501528181611be401526122c0015260008181610dfa015261223901526000818161073401528181610d3f01528181610dc901528181610f8e015281816115b8015281816116490152612ce801526000818161080f01528181610e84015281816116d10152818161210e01526132ae0152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600061266b0152600081816119560152818161254e01526125c70152613ab36000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461355c565b610073565b60405190815260200160405180910390f35b61004e61006e36600461355c565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bec565b3387610c21565b6000806000806000806101568b888e610cfa565b95509550955095509550955060008c90508c4210156102165782600d600082825461018191906135d1565b9091555061019990506101926105ca565b4284610fee565b6101a68c8887878561112c565b60006101b18e6112a6565b90506101cf6101bf8e6112f0565b6101c990836135e4565b8261131e565b6101d88961135d565b6101e4576101e46113bd565b60006101ef8a6113d6565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b61022086896113e3565b955061022b886113d6565b505b600061023a878a8d6114c4565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bec565b61027a6020830183613604565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161363b565b6102cc8a6102c68d8f6135d1565b9061155e565b8d6102da60408c018c613658565b6040516102ee9897969594939291906136c8565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bec565b6000806000806000806103bb8b888e611573565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e691906135d1565b909155506103f790506101926105ca565b6104048c8887878561175e565b600061040f826112a6565b905061042761041d8e6112f0565b6101c99083613710565b6104308961135d565b61043c5761043c6113bd565b60006104478a6113d6565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b61047886896113e3565b9550610483886113d6565b505b6000610492878a8d6114c4565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bec565b6104d06020830183613604565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161363b565b8a61051c60408b018b613658565b60405161052f9796959493929190613738565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105886020830183613604565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a764000061194f565b905090565b60006105c5427f000000000000000000000000000000000000000000000000000000000000000061199c565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b6135d1565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe6119b2565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d3565b92505b50610765836119ea565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b613779565b8a84610fee565b6107f9896107f36107ec7f0000000000000000000000000000000000000000000000000000000000000000836135d1565b4290611a14565b84610fee565b61080288611a29565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d613779565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bec565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611bcd565b9150915080600d60008282546108a591906135d1565b909155506108c19050866000846108bb816112f0565b8861112c565b6108cb81836135d1565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c9c565b915061090f61090a838561155e565b611ce6565b600680546002906109309084906201000090046001600160701b031661378c565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d826119ea565b6006805460109061097f908490600160801b90046001600160801b03166137ac565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bec565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611bcd565b9150915080600d60008282546109f691906135d1565b90915550610a12905083600084610a0c816112f0565b8a61175e565b610a1c8183613779565b9150610a2b61090a838761155e565b60068054600290610a4c9084906201000090046001600160701b031661378c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a79826119ea565b60068054601090610a9b908490600160801b90046001600160801b03166137ac565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f0565b610add836112f0565b610ae791906135e4565b600061131e565b8e610af98482611d10565b50505b6000610b0784611f0a565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd5578e610bd15a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612056565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c165760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6457604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca7908490613779565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d0e6119b2565b90506000610d1b8a6120e1565b6002549091508c908c90610d85908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612132565b600254919d509a50909550610ded908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d3565b9550610e23858c610e1e897f00000000000000000000000000000000000000000000000000000000000000006121a2565b6121d2565b15610e3057610e306113bd565b6000806000610e4185878b87612214565b9c5091945092509050610e548184613779565b610e5e90896135d1565b9750610e6a82846135d1565b610e74908d6135d1565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eae9190613779565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef65760008b8152600860205260409020600101546001600160801b0316610ef8565b8b5b90508b610f298e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611c9c565b9950610f35878a613779565b9850670de0b6b3a7640000610fb2610f4d87876135d1565b600254610f6b908f90600160801b90046001600160801b0316613779565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d3565b1115610fc057610fc06113bd565b610fd08a8a878a87876000612328565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101a5750505050565b6000848152600860205260408120546001600160801b03169081900361107457611043836119ea565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f2565b6110c56110c0670de0b6b3a764000061108d8886613779565b61109791906137cc565b85670de0b6b3a76400006110ab878a613779565b6110b591906137cc565b8592919060016123c7565b6119ea565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fb846119ea565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111756110c082611158670de0b6b3a7640000866137cc565b600554600160801b90046001600160801b031691908a60006123c7565b600580546001600160801b03928316600160801b02921691909117905561119b866119ea565b6111a590826137e3565b600480546001600160801b03928316600160801b0292169190911790556111cb846119ea565b600280546000906111e69084906001600160801b03166137ac565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061121383612471565b60048054600090611228908490600f0b613803565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611258856119ea565b6002805460109061127a908490600160801b90046001600160801b03166137e3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112ce601060006112ba600286610bec565b8152602001908152602001600020546112f0565b6112e0601060006112ba600187610bec565b6112ea91906135e4565b92915050565b60006001600160ff1b0382111561131a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611339906110c0906001600160801b031684846124ad565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006113897f000000000000000000000000000000000000000000000000000000000000000083612514565b60035461139f91906001600160801b03166135d1565b6002546113b5906001600160801b03168461155e565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ea826004611d10565b60008060006113f184611a29565b90925090506000611402868661155e565b90508183111561141a57611417868385612529565b95505b8281101561142c578083039250611431565b600092505b61143a83611ce6565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148d57869003611491565b5060005b61149a816119ea565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114d1858561155e565b90506114dc81612547565b9450846000036114f0576000915050611557565b849150611503604084016020850161363b565b156115325761152b856115196020860186613604565b6115266040870187613658565b612594565b9150611555565b611555856115436020860186613604565b6115506040870187613658565b612669565b505b9392505050565b60006115578383670de0b6b3a7640000612529565b6000806000806000806000806115876119b2565b905060006115948a6120e1565b6002549091508b908d906115fe908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612718565b600254919d509b509095506000908190819061166d908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d3565b985061167b84878b88612214565b9c50919450909250905061168f8284613779565b6116999089613779565b97506116a581846135d1565b6116af908e613779565b9c506116bb8a8e6135d1565b9b505050505050505061174886868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6116fb9190613779565b81526020810191909152604001600020600101546001600160801b0316428e1161173f5760008e8152600860205260409020600101546001600160801b0316611741565b8e5b6001612328565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117a057507f000000000000000000000000000000000000000000000000000000000000000061179e8583613779565b105b156117ad576117ad6113bd565b6004549084900390600f0b6117c284826135e4565b9050836117ce866112f0565b13801561180357507f0000000000000000000000000000000000000000000000000000000000000000611801838361276c565b105b15611810576118106113bd565b600354600160801b90046001600160801b03166118526110c08261183c670de0b6b3a7640000886137cc565b6005546001600160801b031691908c60006123c7565b600580546001600160801b0319166001600160801b039290921691909117905561187c8882613779565b9050611887816119ea565b600380546001600160801b03928316600160801b0292169190911790556118ad836119ea565b600280546001600160801b0319166001600160801b03929092169190911790556118d682612471565b600480546001600160801b0319166001600160801b03929092169190911790556118ff876119ea565b60028054601090611921908490600160801b90046001600160801b03166137ac565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006112ea7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612792565b60006119a88284613846565b6115579084613779565b6002546004546000916105c5916001600160801b0390911690600f0b61276c565b6000610081826119e4858888612529565b906127b5565b60006001600160801b0382111561131a57604051630f0af95160e11b815260040160405180910390fd5b6000818311611a235782611557565b50919050565b6006546000908190611a4c908490600160801b90046001600160801b031661155e565b6006546201000090046001600160701b03169250905081811115611bc8576000611a768383613779565b9050611a856110c0828661282a565b60068054601090611aa7908490600160801b90046001600160801b03166137e3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611ae0858361283f90919063ffffffff16565b90506000611b0e827f000000000000000000000000000000000000000000000000000000000000000061155e565b905080600d6000828254611b2291906135d1565b90915550611b3290508183613779565b9150611b3d826119ea565b60028054600090611b589084906001600160801b03166137ac565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b8582612854565b60048054600090611b9a908490600f0b613803565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611bda878561283f565b91506000611c08837f000000000000000000000000000000000000000000000000000000000000000061155e565b9050611c34817f000000000000000000000000000000000000000000000000000000000000000061155e565b91508315611c5757611c468282613779565b611c509084613779565b9250611c6e565b611c618282613779565b611c6b90846135d1565b92505b86861015611c9157611c81838789612529565b9250611c8e828789612529565b91505b509550959350505050565b600080611cb484611cae8a888a612529565b9061283f565b9050611cc1888486612529565b611ccb90826135d1565b905086811115611cdb5786810391505b509695505050505050565b60006001600160701b0382111561131a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611d5b916001600160801b031690613779565b905080600003611d6f5760019150506112ea565b6000611d7a8561287e565b905080600003611d8f576001925050506112ea565b600080611d9d83858961291a565b9150915080611db35760009450505050506112ea565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611def9291906138d8565b6040805180830381865af4158015611e0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e2f919061394e565b91509150611e4d611e3f826112f0565b611e4890613972565b612a95565b925082611e6357600096505050505050506112ea565b611e6c826119ea565b60078054600090611e879084906001600160801b03166137ac565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611eb4816119ea565b60078054601090611ed6908490600160801b90046001600160801b03166137ac565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f3387612c2d565b6040518263ffffffff1660e01b8152600401611f4f919061398e565b6040805180830381865af4158015611f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8f919061399d565b9150915080611fa5575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161200b916135d1565b6120159190613779565b90508060000361202d57506000958695509350505050565b600080871161203d576000612048565b612048848884612529565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561207c5761207c6139cd565b6040519080825280601f01601f1916602001820160405280156120a6576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156120c7578692505b828152826000602083013e90999098509650505050505050565b6000806120ec6105ca565b90508083116120fc576000612106565b6121068184613779565b9150611557827f000000000000000000000000000000000000000000000000000000000000000061283f565b6000808061215361214b88670de0b6b3a7640000613779565b899087612d67565b90508615612195576121658888612514565b91506121868a8a8461217f8a670de0b6b3a7640000613779565b8989612d8d565b925061219283826135d1565b90505b9750975097945050505050565b60006121c06121b984670de0b6b3a7640000613779565b8390612514565b61155790670de0b6b3a7640000613779565b600080612209856121e16119b2565b6121eb91906135d1565b600254610f6b908790600160801b90046001600160801b0316613779565b909210949350505050565b600080808061226b87866122648b61225e6122378c670de0b6b3a7640000613779565b7f000000000000000000000000000000000000000000000000000000000000000090612514565b90612514565b9190612d67565b9350612297847f000000000000000000000000000000000000000000000000000000000000000061155e565b915060006122b86122b089670de0b6b3a7640000613779565b8a9088612d67565b90506122e4817f0000000000000000000000000000000000000000000000000000000000000000612514565b9350612310847f000000000000000000000000000000000000000000000000000000000000000061155e565b61231a90846135d1565b915050945094509450949050565b6000806000806000808888101561239757861561234d5761234a8d898b612529565b9c505b6123588c898b612529565b9b506123638b6112f0565b61236c8d6112f0565b61237691906135e4565b90506123838b898b612529565b9a506123908a898b612529565b99506123b6565b6123a08b6112f0565b6123a98d6112f0565b6123b391906135e4565b90505b9b9c9a9b999a975050505050505050565b6000826000036123d8575084612468565b811561242b576124096123eb84876135d1565b6123f5858761155e565b6123ff888a61155e565b611cae91906135d1565b905060006124178588611a14565b905080821015612425578091505b50612468565b82850361243a57506000612468565b6124656124478487613779565b6124518587612514565b61245b888a61155e565b611cae9190613779565b90505b95945050505050565b600060016001607f1b031982128061248f575060016001607f1b0382135b1561131a5760405163a5353be560e01b815260040160405180910390fd5b6000806124bb846000612db0565b6124c6846000612db0565b6124d091906135e4565b905060008113156124ec576124e581866135d1565b945061250b565b600081121561250b576124fe81613972565b6125089086613779565b94505b50929392505050565b60006115578383670de0b6b3a7640000612d67565b600082600019048411830215820261254057600080fd5b5091020490565b60006112ea7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612dc6565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f00000000000000000000000000000000000000000000000000000000000000006125ef8861194f565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303816000875af1158015612645573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061008191906139e3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb846126a28761194f565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156126ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061271191906139fc565b5050505050565b6000808061273961273188670de0b6b3a7640000613779565b899087612529565b905086156121955761274b888861155e565b91506121868a8a846127658a670de0b6b3a7640000613779565b8989612dea565b6000806127798484612dfb565b90925090508061278b5761278b6113bd565b5092915050565b60006100846127a18585612e3a565b83906b033b2e3c9fd0803ce8000000612529565b6000816000036127ce5750670de0b6b3a76400006112ea565b826000036127de575060006112ea565b60006127e9836112f0565b905060006127fe6127f9866112f0565b612ea8565b9050818102612815670de0b6b3a764000082613a19565b9050612820816130ce565b9695505050505050565b600061155783670de0b6b3a764000084612d67565b600061155783670de0b6b3a764000084612529565b600060016001607f1b0382111561131a5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612899906001600160801b03168461282a565b90506128c57f0000000000000000000000000000000000000000000000000000000000000000826135d1565b6002546001600160801b03161115611a23576002547f0000000000000000000000000000000000000000000000000000000000000000906129109083906001600160801b0316613779565b6115579190613779565b6129226134a9565b60008061292e84612c2d565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612969919061398e565b6040805180830381865af4158015612985573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129a9919061399d565b93509050826129be575060009150612a8d9050565b60006129e56129e084610160015185610140015161155e90919063ffffffff16565b6112f0565b612a056129e085610120015186610100015161251490919063ffffffff16565b612a0f91906135e4565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b729190613a47565b935093509350935080612b8e5750600098975050505050505050565b868414612bbf57612b9e846119ea565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bf057612bcf83612471565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c1e57612c00826119ea565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c356134fb565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d2d9116613263565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d5f92900416613263565b905292915050565b6000826000190484118302158202612d7e57600080fd5b50910281810615159190040190565b600080612d9e8888888888886132d9565b909250905080611cdb57611cdb6113bd565b6000818313612dbf5781611557565b5090919050565b60006100846b033b2e3c9fd0803ce8000000612de28686612e3a565b849190612529565b600080612d9e8888888888886133ba565b600080600083612e0a866112f0565b612e1491906135e4565b90506000811215612e2c576000809250925050612e33565b9150600190505b9250929050565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa158015612e84573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155791906139e3565b6000808213612eca5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f4d9084901c6112f0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130e957506000919050565b680755bf798b4a1bf1e58212613112576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061282074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f0565b600080670de0b6b3a76400006132776105ca565b61328191906137cc565b905080831161329157600061329b565b61329b8184613779565b91506115576132d2670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137cc565b839061283f565b60008060006132eb898988888861347a565b9050868810156133025760008092509250506133af565b968690039661331188876127b5565b9750878110156133285760008092509250506133af565b878103613336818688612d67565b9050670de0b6b3a7640000811061336a5761336361335c670de0b6b3a76400008961282a565b82906127b5565b9050613382565b61337f61335c670de0b6b3a76400008961283f565b90505b61338c818661282a565b9050898110156133a4576000809350935050506133af565b899003925060019150505b965096945050505050565b60008060006133cc898988888861347a565b90506133dc866119e4898b6135d1565b9750878110156133f35760008092509250506133af565b878103613401818688612d67565b9050670de0b6b3a7640000811061342e5761342761335c670de0b6b3a76400008961282a565b9050613446565b61344361335c670de0b6b3a76400008961283f565b90505b613450818661282a565b9050808a1015613468576000809350935050506133af565b90980398600198509650505050505050565b600061348685856127b5565b61349f613497866119e4868b612514565b859085612d67565b61246591906135d1565b6040518061012001604052806134bd6134fb565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561357257600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561359e57600080fd5b8501606081880312156135b057600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ea576112ea6135bb565b818103600083128015838313168383128216171561278b5761278b6135bb565b60006020828403121561361657600080fd5b81356001600160a01b038116811461155757600080fd5b80151581146105af57600080fd5b60006020828403121561364d57600080fd5b81356115578161362d565b6000808335601e1984360301811261366f57600080fd5b83018035915067ffffffffffffffff82111561368a57600080fd5b602001915036819003821315612e3357600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061370260e08301848661369f565b9a9950505050505050505050565b8082018281126000831280158216821582161715613730576137306135bb565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061376c60c08301848661369f565b9998505050505050505050565b818103818111156112ea576112ea6135bb565b6001600160701b0381811683821601908082111561278b5761278b6135bb565b6001600160801b0381811683821601908082111561278b5761278b6135bb565b80820281158282048414176112ea576112ea6135bb565b6001600160801b0382811682821603908082111561278b5761278b6135bb565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ea576112ea6135bb565b634e487b7160e01b600052601260045260246000fd5b60008261385557613855613830565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506138ec82855161385a565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561396157600080fd5b505080516020909101519092909150565b6000600160ff1b8201613987576139876135bb565b5060000390565b61018081016112ea828461385a565b600080604083850312156139b057600080fd5b8251915060208301516139c28161362d565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156139f557600080fd5b5051919050565b600060208284031215613a0e57600080fd5b81516115578161362d565b600082613a2857613a28613830565b600160ff1b821460001984141615613a4257613a426135bb565b500590565b60008060008060808587031215613a5d57600080fd5b84519350602085015192506040850151915060608501516135b08161362d56fea2646970667358221220241d09c130465f247f55cff3449ab06d7c5e89d97b80da0e7c69b8e6eb8edb3364736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
