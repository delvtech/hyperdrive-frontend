export const AaveTarget4 = {
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
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620037ca380380620037ca8339810160408190526200003591620005cc565b600160005580516001600160a01b039081166080908152602080840151831660a0818152928501516101a0908152928501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151850151905280516040908101516101609081529151606090810151610180908152828a0151891661022052908901516102405291880151600980549189166001600160a01b031992831617905591880151600a805491891691841691909117905594870151600b805491881691831691909117905590860151600c8054919096169116179093558151633a9ae92360e11b81529151637535d2469260048082019392918290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f9190620006df565b6001600160a01b03908116610260819052608051620001b29216906001620001b9565b5062000754565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021390859083906200028516565b6200027f57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002739186916200033616565b6200027f848262000336565b50505050565b6000806000846001600160a01b031684604051620002a49190620006ff565b6000604051808303816000865af19150503d8060008114620002e3576040519150601f19603f3d011682016040523d82523d6000602084013e620002e8565b606091505b5091509150818015620003165750805115806200031657508080602001905181019062000316919062000730565b80156200032d57506000856001600160a01b03163b115b95945050505050565b60006200034d6001600160a01b03841683620003a9565b905080516000141580156200037557508080602001905181019062000373919062000730565b155b15620003a457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003b983836000620003c0565b9392505050565b606081471015620003e75760405163cd78605960e01b81523060048201526024016200039b565b600080856001600160a01b03168486604051620004059190620006ff565b60006040518083038185875af1925050503d806000811462000444576040519150601f19603f3d011682016040523d82523d6000602084013e62000449565b606091505b5090925090506200045c86838362000466565b9695505050505050565b6060826200047f576200047982620004ca565b620003b9565b81511580156200049757506001600160a01b0384163b155b15620004c257604051639996b31560e01b81526001600160a01b03851660048201526024016200039b565b5080620003b9565b805115620004db5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200052957634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004f457600080fd5b805162000552816200052f565b919050565b6000608082840312156200056a57600080fd5b604051608081016001600160401b03811182821017156200059b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215620005e057600080fd5b620005ea620004f7565b620005f58362000545565b8152620006056020840162000545565b6020820152620006186040840162000545565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101606200068381850162000545565b908201526101806200069784820162000545565b908201526101a0620006ab84820162000545565b908201526101c0620006bf84820162000545565b908201526101e0620006d48585830162000557565b908201529392505050565b600060208284031215620006f257600080fd5b8151620003b9816200052f565b6000825160005b8181101562000722576020818601810151858301520162000706565b506000920191825250919050565b6000602082840312156200074357600080fd5b81518015158114620003b957600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051612f3f6200088b6000396000818161107501528181612258015261228101526000505060005050600050506000818161026d0152611f1f015260008181611765015281816117c801528181611b0401528181611b4001528181611d380152611ef901526000818161056f0152611ed30152600061133a015260006114950152600081816107330152611469015260005050600081816105900152611f4501526000818161066b01526124720152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb0152610623015260006123540152600081816110540152818161223701526122b00152612f3f6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b6100596100543660046129f2565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612a49565b6100b5565b005b6100596100953660046129f2565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610a49565b90935091506101266020850185612a6b565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612aa2565b61017160408c018c612abf565b60405161018396959493929190612b2f565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610b8c565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612b7f565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610d87565b6102eb600360f81b6102e56020870187612a6b565b88610e61565b60006103066102fd6020870187612a6b565b88848989610a49565b90945090506103158188612ba9565b9250600061032283610f01565b5090506103326020870187612a6b565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612aa2565b8a888e80604001906103829190612abf565b604051610396989796959493929190612bbc565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612a6b565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a764000061104d565b905090565b6000610421427f000000000000000000000000000000000000000000000000000000000000000061109a565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610a41565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612c04565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a6110b7565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006110d8565b92505b506105c1836110f8565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612ba9565b8a84611126565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612c04565b4290611264565b84611126565b61065e88611279565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612ba9565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c61141d565b6000818152601060205260408120549192508c8c831561080257600192506000806106eb86898d866000611452565b9150915080600d60008282546107019190612c04565b9091555061071d90508660008461071781611521565b8861154b565b6107278183612c04565b915061075786838a8e877f00000000000000000000000000000000000000000000000000000000000000006116c5565b915061076b610766838561170f565b611724565b6006805460029061078c9084906201000090046001600160701b0316612c17565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b9826110f8565b600680546010906107db908490600160801b90046001600160801b0316612c37565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f60018461141d565b600081815260106020526040902054909150801561091e576001945060008061083c838b8f886001611452565b9150915080600d60008282546108529190612c04565b9091555061086e90508360008461086881611521565b8a61174e565b6108788183612ba9565b9150610887610766838761170f565b600680546002906108a89084906201000090046001600160701b0316612c17565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d5826110f8565b600680546010906108f7908490600160801b90046001600160801b0316612c37565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a61093087611521565b61093983611521565b6109439190612c57565b600061193f565b8e6109558482610b8c565b50505b600061096384610f01565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610a31578e610a2d5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061197e565b5050505b50999b5050505050505050505050505b949350505050565b600080610a5585611a09565b505060075485906001600160801b031680821115610a7a57806001600160801b031691505b81600003610a8f576000809250925050610b82565b610a9e600360f81b8984610d87565b600754600090610ac49084906001600160801b03600160801b9091048116908516611a16565b9050610acf836110f8565b610ad99083612c77565b600780546001600160801b0319166001600160801b0392909216919091179055610b02816110f8565b60078054601090610b24908490600160801b90046001600160801b0316612c77565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b53818887611a34565b9350610b5f8684611acd565b841015610b7f5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291610bd7916001600160801b031690612ba9565b905080600003610beb576001915050610d81565b6000610bf685611ae2565b905080600003610c0b57600192505050610d81565b600080610c19838589611b7e565b9150915080610c2f576000945050505050610d81565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610c6b929190612d15565b6040805180830381865af4158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190612d8b565b91509150610cc9610cbb82611521565b610cc490612daf565b611cf2565b925082610cdf5760009650505050505050610d81565b610ce8826110f8565b60078054600090610d039084906001600160801b0316612c37565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d30816110f8565b60078054601090610d52908490600160801b90046001600160801b0316612c37565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610dca57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610e0d908490612ba9565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290610e93908490612c04565b909155505060008381526010602052604081208054839290610eb6908490612c04565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e54565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f2a87611e8a565b6040518263ffffffff1660e01b8152600401610f469190612dcb565b6040805180830381865af4158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f869190612dda565b9150915080610f9c575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161100291612c04565b61100c9190612ba9565b90508060000361102457506000958695509350505050565b600080871161103457600061103f565b61103f848884611a16565b976001975095505050505050565b6000610d817f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084611fc4565b60006110a68284612b7f565b6110b09084612ba9565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b611fe7565b60006110ef826110e9858888611a16565b9061200d565b95945050505050565b60006001600160801b0382111561112257604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036111525750505050565b6000848152600860205260408120546001600160801b0316908190036111ac5761117b836110f8565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561122a565b6111fd6111f8670de0b6b3a76400006111c58886612ba9565b6111cf9190612e0a565b85670de0b6b3a76400006111e3878a612ba9565b6111ed9190612e0a565b859291906001612082565b6110f8565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611233846110f8565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161127357826110b0565b50919050565b600654600090819061129c908490600160801b90046001600160801b031661170f565b6006546201000090046001600160701b031692509050818111156114185760006112c68383612ba9565b90506112d56111f88286612120565b600680546010906112f7908490600160801b90046001600160801b0316612c77565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611330858361213590919063ffffffff16565b9050600061135e827f000000000000000000000000000000000000000000000000000000000000000061170f565b905080600d60008282546113729190612c04565b9091555061138290508183612ba9565b915061138d826110f8565b600280546000906113a89084906001600160801b0316612c37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113d58261214a565b600480546000906113ea908490600f0b612e21565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114475760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061145f8785612135565b9150600061148d837f000000000000000000000000000000000000000000000000000000000000000061170f565b90506114b9817f000000000000000000000000000000000000000000000000000000000000000061170f565b915083156114dc576114cb8282612ba9565b6114d59084612ba9565b92506114f3565b6114e68282612ba9565b6114f09084612c04565b92505b8686101561151657611506838789611a16565b9250611513828789611a16565b91505b509550959350505050565b60006001600160ff1b038211156111225760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115946111f882611577670de0b6b3a764000086612e0a565b600554600160801b90046001600160801b031691908a6000612082565b600580546001600160801b03928316600160801b0292169190911790556115ba866110f8565b6115c49082612c77565b600480546001600160801b03928316600160801b0292169190911790556115ea846110f8565b600280546000906116059084906001600160801b0316612c37565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061163283612174565b60048054600090611647908490600f0b612e21565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611677856110f8565b60028054601090611699908490600160801b90046001600160801b0316612c77565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806116dd846116d78a888a611a16565b90612135565b90506116ea888486611a16565b6116f49082612c04565b9050868111156117045786810391505b509695505050505050565b60006110b08383670de0b6b3a7640000611a16565b60006001600160701b038211156111225760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061179057507f000000000000000000000000000000000000000000000000000000000000000061178e8583612ba9565b105b1561179d5761179d6121b0565b6004549084900390600f0b6117b28482612c57565b9050836117be86611521565b1380156117f357507f00000000000000000000000000000000000000000000000000000000000000006117f18383611fe7565b105b15611800576118006121b0565b600354600160801b90046001600160801b03166118426111f88261182c670de0b6b3a764000088612e0a565b6005546001600160801b031691908c6000612082565b600580546001600160801b0319166001600160801b039290921691909117905561186c8882612ba9565b9050611877816110f8565b600380546001600160801b03928316600160801b02921691909117905561189d836110f8565b600280546001600160801b0319166001600160801b03929092169190911790556118c682612174565b600480546001600160801b0319166001600160801b03929092169190911790556118ef876110f8565b60028054601090611911908490600160801b90046001600160801b0316612c37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461195a906111f8906001600160801b031684846121c9565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff8111156119a4576119a4612e4e565b6040519080825280601f01601f1916602001820160405280156119ce576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156119ef578692505b828152826000602083013e90999098509650505050505050565b6000610d81826004610b8c565b6000826000190484118302158202611a2d57600080fd5b5091020490565b600080611a41858561170f565b9050611a4c81612230565b945084600003611a605760009150506110b0565b849150611a736040840160208501612aa2565b15611aa257611a9b85611a896020860186612a6b565b611a966040870187612abf565b61227d565b9150611ac5565b611ac585611ab36020860186612a6b565b611ac06040870187612abf565b612352565b509392505050565b60006110b08383670de0b6b3a7640000612401565b6003546000908190611afd906001600160801b031684612120565b9050611b297f000000000000000000000000000000000000000000000000000000000000000082612c04565b6002546001600160801b03161115611273576002547f000000000000000000000000000000000000000000000000000000000000000090611b749083906001600160801b0316612ba9565b6110b09190612ba9565b611b8661293f565b600080611b9284611e8a565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611bcd9190612dcb565b6040805180830381865af4158015611be9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c0d9190612dda565b9350905082611c225750600091506100ad9050565b6000611c49611c4484610160015185610140015161170f90919063ffffffff16565b611521565b611c69611c44856101200151866101000151611acd90919063ffffffff16565b611c739190612c57565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611dab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dcf9190612e64565b935093509350935080611deb5750600098975050505050505050565b868414611e1c57611dfb846110f8565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e4d57611e2c83612174565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611e7b57611e5d826110f8565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611e92612991565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611f8a9116612427565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611fbc92900416612427565b905292915050565b6000610a41611fd3858561249d565b83906b033b2e3c9fd0803ce8000000611a16565b600080611ff4848461250b565b909250905080612006576120066121b0565b5092915050565b6000816000036120265750670de0b6b3a7640000610d81565b8260000361203657506000610d81565b600061204183611521565b9050600061205661205186611521565b61254a565b905081810261206d670de0b6b3a764000082612ea5565b905061207881612770565b9695505050505050565b6000826000036120935750846110ef565b81156120e6576120c46120a68487612c04565b6120b0858761170f565b6120ba888a61170f565b6116d79190612c04565b905060006120d28588611264565b9050808210156120e0578091505b506110ef565b8285036120f5575060006110ef565b6120786121028487612ba9565b61210c8587611acd565b612116888a61170f565b6116d79190612ba9565b60006110b083670de0b6b3a764000084612401565b60006110b083670de0b6b3a764000084611a16565b600060016001607f1b038211156111225760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612192575060016001607f1b0382135b156111225760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b6000806121d7846000612905565b6121e2846000612905565b6121ec9190612c57565b90506000811315612208576122018186612c04565b9450612227565b60008112156122275761221a81612daf565b6122249086612ba9565b94505b50929392505050565b6000610d817f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461291b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f00000000000000000000000000000000000000000000000000000000000000006122d88861104d565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303816000875af115801561232e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ef9190612ed3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb8461238b8761104d565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156123d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123fa9190612eec565b5050505050565b600082600019048411830215820261241857600080fd5b50910281810615159190040190565b600080670de0b6b3a764000061243b610426565b6124459190612e0a565b905080831161245557600061245f565b61245f8184612ba9565b91506110b0612496670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612e0a565b8390612135565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa1580156124e7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b09190612ed3565b60008060008361251a86611521565b6125249190612c57565b9050600081121561253c576000809250925050612543565b9150600190505b9250929050565b600080821361256c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906125ef9084901c611521565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361278b57506000919050565b680755bf798b4a1bf1e582126127b4576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061207874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611521565b600081831361291457816110b0565b5090919050565b6000610a416b033b2e3c9fd0803ce8000000612937868661249d565b849190611a16565b604051806101200160405280612953612991565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612a0757600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612a2c57600080fd5b840160608187031215612a3e57600080fd5b809150509250925092565b60008060408385031215612a5c57600080fd5b50508035926020909101359150565b600060208284031215612a7d57600080fd5b81356001600160a01b03811681146110b057600080fd5b801515811461040b57600080fd5b600060208284031215612ab457600080fd5b81356110b081612a94565b6000808335601e19843603018112612ad657600080fd5b83018035915067ffffffffffffffff821115612af157600080fd5b60200191503681900382131561254357600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612b5d60a083018486612b06565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612b8e57612b8e612b69565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d8157610d81612b93565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612bf660e083018486612b06565b9a9950505050505050505050565b80820180821115610d8157610d81612b93565b6001600160701b0381811683821601908082111561200657612006612b93565b6001600160801b0381811683821601908082111561200657612006612b93565b818103600083128015838313168383128216171561200657612006612b93565b6001600160801b0382811682821603908082111561200657612006612b93565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612d29828551612c97565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612d9e57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612dc457612dc4612b93565b5060000390565b6101808101610d818284612c97565b60008060408385031215612ded57600080fd5b825191506020830151612dff81612a94565b809150509250929050565b8082028115828204841417610d8157610d81612b93565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610d8157610d81612b93565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612e7a57600080fd5b8451935060208501519250604085015191506060850151612e9a81612a94565b939692955090935050565b600082612eb457612eb4612b69565b600160ff1b821460001984141615612ece57612ece612b93565b500590565b600060208284031215612ee557600080fd5b5051919050565b600060208284031215612efe57600080fd5b81516110b081612a9456fea2646970667358221220fc8d5bbd3480c7f7fa8b084dd3238f1b287400ceef2349b7a287fe82e4d59b1264736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
