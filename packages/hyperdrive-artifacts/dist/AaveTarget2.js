export const AaveTarget2 = {
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
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620048ae380380620048ae8339810160408190526200003591620005cc565b600160005580516001600160a01b039081166080908152602080840151831660a0818152928501516101a0908152928501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151850151905280516040908101516101609081529151606090810151610180908152828a0151891661022052908901516102405291880151600980549189166001600160a01b031992831617905591880151600a805491891691841691909117905594870151600b805491881691831691909117905590860151600c8054919096169116179093558151633a9ae92360e11b81529151637535d2469260048082019392918290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f9190620006df565b6001600160a01b03908116610260819052608051620001b29216906001620001b9565b5062000754565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021390859083906200028516565b6200027f57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002739186916200033616565b6200027f848262000336565b50505050565b6000806000846001600160a01b031684604051620002a49190620006ff565b6000604051808303816000865af19150503d8060008114620002e3576040519150601f19603f3d011682016040523d82523d6000602084013e620002e8565b606091505b5091509150818015620003165750805115806200031657508080602001905181019062000316919062000730565b80156200032d57506000856001600160a01b03163b115b95945050505050565b60006200034d6001600160a01b03841683620003a9565b905080516000141580156200037557508080602001905181019062000373919062000730565b155b15620003a457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003b983836000620003c0565b9392505050565b606081471015620003e75760405163cd78605960e01b81523060048201526024016200039b565b600080856001600160a01b03168486604051620004059190620006ff565b60006040518083038185875af1925050503d806000811462000444576040519150601f19603f3d011682016040523d82523d6000602084013e62000449565b606091505b5090925090506200045c86838362000466565b9695505050505050565b6060826200047f576200047982620004ca565b620003b9565b81511580156200049757506001600160a01b0384163b155b15620004c257604051639996b31560e01b81526001600160a01b03851660048201526024016200039b565b5080620003b9565b805115620004db5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200052957634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004f457600080fd5b805162000552816200052f565b919050565b6000608082840312156200056a57600080fd5b604051608081016001600160401b03811182821017156200059b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215620005e057600080fd5b620005ea620004f7565b620005f58362000545565b8152620006056020840162000545565b6020820152620006186040840162000545565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101606200068381850162000545565b908201526101806200069784820162000545565b908201526101a0620006ab84820162000545565b908201526101c0620006bf84820162000545565b908201526101e0620006d48585830162000557565b908201529392505050565b600060208284031215620006f257600080fd5b8151620003b9816200052f565b6000825160005b8181101562000722576020818601810151858301520162000706565b506000920191825250919050565b6000602082840312156200074357600080fd5b81518015158114620003b957600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613f716200093d6000396000818161161c015281816116ca015281816125f301526128f1015260005050600050506000505060008181610100015281816103100152612ea001526000818161145101528181611d5001528181611db30152818161256501528181612a8501528181612ac101528181612cb90152612e7a0152600081816107ef01528181610d1a01528181610d5c01528181610e4e015281816112c4015281816113230152612e540152600061196f015260008181611a95015281816126a7015281816127200152612fba0152600081816109b301528181610dcf015281816113be01528181611a6901526126f4015260008181610dae015281816126730152612f7601526000818161081001528181610cf801528181610d7d01528181610e6f015281816112a2015281816113440152612ec60152600081816101de015281816103a8015281816108eb01526135c70152600081816106a9015281816107290152818161079f0152818161086b01526108a3015260006117400152600081816115ef015281816116500152818161168e015281816125d201526128d00152613f716000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046139eb565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046139eb565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610cc9565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613a60565b909155506101d99050844283610eab565b6102037f000000000000000000000000000000000000000000000000000000000000000085613a60565b98506102118389888c610fe9565b600061021e60018b611183565b90506102378161023160208e018e613a73565b8b6111b8565b8d8a8a898e8561024a6020830183613a73565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613aaa565b8961029560408a018a613ac7565b6040516102a89796959493929190613b37565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b6000610359611260565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613a60565b90506000806000806103e08e8988611273565b600d8054949850929650909450925083916000906103ff908490613a60565b909155506104109050874283610eab565b50600061041e84898d6113f9565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b8961142b565b6000610468600288611183565b90508c6104828261047c6020840184613a73565b856111b8565b858b86846104936020860186613a73565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613aaa565b6104e4896104de8a8d613b78565b90610683565b8d6104f260408e018e613ac7565b604051610506989796959493929190613b8b565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b60006105846020830183613a73565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c26040850160208601613aaa565b156105e7576105dd856105d86040870187613ac7565b6115df565b90935090506105ff565b50346105ff856105fa6040870187613ac7565b61173e565b610607611260565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a76400006117f6565b90505b92915050565b60006106cd427f0000000000000000000000000000000000000000000000000000000000000000611814565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610cc1565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b613a60565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da61182a565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061184b565b92505b506108418361186b565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613b78565b8a84610eab565b6108d5896108cf6108c87f000000000000000000000000000000000000000000000000000000000000000083613a60565b4290611899565b84610eab565b6108de886118ae565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613b78565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c611183565b6000818152601060205260408120549192508c8c8315610a82576001925060008061096b86898d866000611a52565b9150915080600d60008282546109819190613a60565b9091555061099d90508660008461099781611b21565b88611b4b565b6109a78183613a60565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cc5565b91506109eb6109e68385610683565b611d0f565b60068054600290610a0c9084906201000090046001600160701b0316613bd3565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a398261186b565b60068054601090610a5b908490600160801b90046001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f600184611183565b6000818152601060205260409020549091508015610b9e5760019450600080610abc838b8f886001611a52565b9150915080600d6000828254610ad29190613a60565b90915550610aee905083600084610ae881611b21565b8a611d39565b610af88183613b78565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b0316613bd3565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b558261186b565b60068054601090610b77908490600160801b90046001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611b21565b610bb983611b21565b610bc39190613c13565b6000611f2a565b8e610bd58482611f69565b50505b6000610be384612163565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb1578e610cad5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906122af565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cd961182a565b600254909150610d3e908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061233a565b600254909450610da1908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061184b565b9150610df88785610df3857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612366565b6123cb565b15610e0557610e0561240d565b610e1187858885612426565b91965094509250670de0b6b3a7640000610e93610e2e8784613a60565b600254610e4c908890600160801b90046001600160801b0316613b78565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061184b565b1115610ea157610ea161240d565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610ed75750505050565b6000848152600860205260408120546001600160801b031690819003610f3157610f008361186b565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610faf565b610f82610f7d670de0b6b3a7640000610f4a8886613b78565b610f549190613c33565b85670de0b6b3a7640000610f68878a613b78565b610f729190613c33565b859291906001612472565b61186b565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fb88461186b565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661102b610f7d82611015670de0b6b3a764000086613c33565b6005546001600160801b03169190886001612472565b600580546001600160801b0319166001600160801b03929092169190911790556110548561186b565b6002805460009061106f9084906001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109c8461186b565b600280546010906110be908490600160801b90046001600160801b0316613c4a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110eb8461186b565b6110f59082613bf3565b600380546001600160801b03808416600160801b0291161790559050600061111c8361251a565b905061113a8161112b87611b21565b6111359084613c6a565b611f2a565b6111438461255e565b61114f5761114f61240d565b600061115a856125be565b90508061117a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111ad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906111ea908490613a60565b90915550506000838152601060205260408120805483929061120d908490613a60565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a76400006125cb565b600080600080600061128361182a565b6002549091506112e8908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612618565b9350876112f58589612639565b11156113035761130361240d565b6002546000908190611368908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061184b565b935061137e8a670de0b6b3a7640000868c61264e565b5091935090915061139190508183613b78565b61139b9087613b78565b9550886113e8816113e28d6113b0868c613b78565b8d6113bb878261275c565b877f0000000000000000000000000000000000000000000000000000000000000000612772565b90612639565b975090945050505093509350935093565b600061140b6040830160208401613aaa565b15611417575082611424565b6114218484612797565b90505b9392505050565b6002546001600160801b0316838110156114475761144761240d565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061147f908390600f0b6127ac565b101561148d5761148d61240d565b6004546114d790610f7d90600160801b90046001600160801b03166114ba670de0b6b3a764000086613c33565b600554600160801b90046001600160801b03169190896001612472565b600580546001600160801b03928316600160801b0292169190911790556114fd8161186b565b600280546001600160801b0319166001600160801b03929092169190911790556115268561186b565b60028054601090611548908490600160801b90046001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115758561186b565b60048054601090611597908490600160801b90046001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115c68361251a565b905061113a816115d588611b21565b6111359084613c13565b6000806116176001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886127d2565b6116777f0000000000000000000000000000000000000000000000000000000000000000611646876001613a60565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612839565b60405163617ba03760e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201879052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063617ba03790608401600060405180830381600087803b15801561170e57600080fd5b505af1158015611722573d6000803e3d6000fd5b5050505061172f856128c9565b6000915091505b935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd3330611778876125cb565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af11580156117cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f09190613c92565b50505050565b600082600019048411830215820261180d57600080fd5b5091020490565b60006118208284613cc5565b6106989084613b78565b6002546004546000916106cd916001600160801b0390911690600f0b6127ac565b60006118628261185c8588886117f6565b90612916565b95945050505050565b60006001600160801b0382111561189557604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116118a85782610698565b50919050565b60065460009081906118d1908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611a4d5760006118fb8383613b78565b905061190a610f7d8286612981565b6006805460109061192c908490600160801b90046001600160801b0316613c4a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611965858361279790919063ffffffff16565b90506000611993827f0000000000000000000000000000000000000000000000000000000000000000610683565b905080600d60008282546119a79190613a60565b909155506119b790508183613b78565b91506119c28261186b565b600280546000906119dd9084906001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a0a82612996565b60048054600090611a1f908490600f0b613cd9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611a5f8785612797565b91506000611a8d837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611ab9817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611adc57611acb8282613b78565b611ad59084613b78565b9250611af3565b611ae68282613b78565b611af09084613a60565b92505b86861015611b1657611b068387896117f6565b9250611b138287896117f6565b91505b509550959350505050565b60006001600160ff1b038211156118955760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b94610f7d82611b77670de0b6b3a764000086613c33565b600554600160801b90046001600160801b031691908a6000612472565b600580546001600160801b03928316600160801b029216919091179055611bba8661186b565b611bc49082613c4a565b600480546001600160801b03928316600160801b029216919091179055611bea8461186b565b60028054600090611c059084906001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c32836129c0565b60048054600090611c47908490600f0b613cd9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c778561186b565b60028054601090611c99908490600160801b90046001600160801b0316613c4a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611cdd84611cd78a888a6117f6565b90612797565b9050611cea8884866117f6565b611cf49082613a60565b905086811115611d045786810391505b509695505050505050565b60006001600160701b038211156118955760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d7b57507f0000000000000000000000000000000000000000000000000000000000000000611d798583613b78565b105b15611d8857611d8861240d565b6004549084900390600f0b611d9d8482613c13565b905083611da986611b21565b138015611dde57507f0000000000000000000000000000000000000000000000000000000000000000611ddc83836127ac565b105b15611deb57611deb61240d565b600354600160801b90046001600160801b0316611e2d610f7d82611e17670de0b6b3a764000088613c33565b6005546001600160801b031691908c6000612472565b600580546001600160801b0319166001600160801b0392909216919091179055611e578882613b78565b9050611e628161186b565b600380546001600160801b03928316600160801b029216919091179055611e888361186b565b600280546001600160801b0319166001600160801b0392909216919091179055611eb1826129c0565b600480546001600160801b0319166001600160801b0392909216919091179055611eda8761186b565b60028054601090611efc908490600160801b90046001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f4590610f7d906001600160801b031684846129fc565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611fb4916001600160801b031690613b78565b905080600003611fc857600191505061069b565b6000611fd385612a63565b905080600003611fe85760019250505061069b565b600080611ff6838589612aff565b915091508061200c57600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612048929190613d84565b6040805180830381865af4158015612064573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120889190613dfa565b915091506120a661209882611b21565b6120a190613e1e565b612c73565b9250826120bc576000965050505050505061069b565b6120c58261186b565b600780546000906120e09084906001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061210d8161186b565b6007805460109061212f908490600160801b90046001600160801b0316613bf3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61218c87612e0b565b6040518263ffffffff1660e01b81526004016121a89190613e3a565b6040805180830381865af41580156121c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e89190613e49565b91509150806121fe575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161226491613a60565b61226e9190613b78565b90508060000361228657506000958695509350505050565b60008087116122965760006122a1565b6122a18488846117f6565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156122d5576122d5613e79565b6040519080825280601f01601f1916602001820160405280156122ff576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612320578692505b828152826000602083013e90999098509650505050505050565b600061235b87878761235488670de0b6b3a7640000613b78565b8787612f45565b979650505050505050565b60006114216123a761238084670de0b6b3a7640000613b78565b6113e2670de0b6b3a7640000612396818a612981565b6123a09190613b78565b8790612639565b6123b990670de0b6b3a7640000613a60565b611cd784670de0b6b3a7640000613b78565b600080612402856123da61182a565b6123e49190613a60565b600254610e4c908790600160801b90046001600160801b0316613b78565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000612439898789612f68565b90925090506124488289613b78565b9750600061245782888a6117f6565b9050612463818b613b78565b9a989950979650505050505050565b600082600003612483575084611862565b81156124d6576124b46124968487613a60565b6124a08587610683565b6124aa888a610683565b611cd79190613a60565b905060006124c28588611899565b9050808210156124d0578091505b50611862565b8285036124e557506000611862565b6125106124f28487613b78565b6124fc8587612639565b612506888a610683565b611cd79190613b78565b9695505050505050565b60006125426010600061252e600286611183565b815260200190815260200160002054611b21565b6125546010600061252e600187611183565b61069b9190613c13565b600061258a7f000000000000000000000000000000000000000000000000000000000000000083612639565b6003546125a091906001600160801b0316613a60565b6002546125b6906001600160801b031684610683565b101592915050565b600061069b826004611f69565b600061069b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612fe8565b600061235b87878761263288670de0b6b3a7640000613b78565b878761300b565b60006106988383670de0b6b3a764000061301c565b600080808061269f87866126988b6113e26126718c670de0b6b3a7640000613b78565b7f000000000000000000000000000000000000000000000000000000000000000090612639565b919061301c565b93506126cb847f0000000000000000000000000000000000000000000000000000000000000000610683565b915060006126ec6126e489670de0b6b3a7640000613b78565b8a908861301c565b9050612718817f0000000000000000000000000000000000000000000000000000000000000000612639565b9350612744847f0000000000000000000000000000000000000000000000000000000000000000610683565b61274e9084613a60565b915050945094509450949050565b600081831161276b5781610698565b5090919050565b60008061278a846127848a888a61301c565b90612981565b9050611cea88848661301c565b600061069883670de0b6b3a7640000846117f6565b6000806127b98484613042565b9092509050806127cb576127cb61240d565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526117f09186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061307e565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261288a84826130eb565b6117f0576040516001600160a01b038481166024830152600060448301526128bf91869182169063095ea7b390606401612807565b6117f0848261307e565b600061069b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461318e565b60008160000361292f5750670de0b6b3a764000061069b565b8260000361293f5750600061069b565b600061294a83611b21565b9050600061295f61295a86611b21565b6131b2565b9050818102612976670de0b6b3a764000082613e8f565b9050612510816133d8565b600061069883670de0b6b3a76400008461301c565b600060016001607f1b038211156118955760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806129de575060016001607f1b0382135b156118955760405163a5353be560e01b815260040160405180910390fd5b600080612a0a84600061356d565b612a1584600061356d565b612a1f9190613c13565b90506000811315612a3b57612a348186613a60565b9450612a5a565b6000811215612a5a57612a4d81613e1e565b612a579086613b78565b94505b50929392505050565b6003546000908190612a7e906001600160801b031684612981565b9050612aaa7f000000000000000000000000000000000000000000000000000000000000000082613a60565b6002546001600160801b031611156118a8576002547f000000000000000000000000000000000000000000000000000000000000000090612af59083906001600160801b0316613b78565b6114249190613b78565b612b07613938565b600080612b1384612e0b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612b4e9190613e3a565b6040805180830381865af4158015612b6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b8e9190613e49565b9350905082612ba35750600091506117369050565b6000612bca612bc584610160015185610140015161068390919063ffffffff16565b611b21565b612bea612bc585610120015186610100015161263990919063ffffffff16565b612bf49190613c13565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d509190613ebd565b935093509350935080612d6c5750600098975050505050505050565b868414612d9d57612d7c8461186b565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612dce57612dad836129c0565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612dfc57612dde8261186b565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612e1361398a565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612f0b911661357c565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612f3d9290041661357c565b905292915050565b600080612f568888888888886135f2565b909250905080611d0457611d0461240d565b600080612fb2856113e285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612fa8818c612981565b6113e29190613b78565b9150612fde827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b6000611421612ff785856136ba565b83906b033b2e3c9fd0803ce80000006117f6565b600080612f56888888888888613728565b600082600019048411830215820261303357600080fd5b50910281810615159190040190565b60008060008361305186611b21565b61305b9190613c13565b9050600081121561307357600080925092505061067c565b946001945092505050565b60006130936001600160a01b038416836137e8565b905080516000141580156130b85750808060200190518101906130b69190613c92565b155b156130e657604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516131089190613ef3565b6000604051808303816000865af19150503d8060008114613145576040519150601f19603f3d011682016040523d82523d6000602084013e61314a565b606091505b50915091508180156131745750805115806131745750808060200190518101906131749190613c92565b80156118625750505050506001600160a01b03163b151590565b60006114216b033b2e3c9fd0803ce80000006131aa86866136ba565b8491906117f6565b60008082136131d45760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132579084901c611b21565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133f357506000919050565b680755bf798b4a1bf1e5821261341c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061251074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b21565b600081831361276b5781610698565b600080670de0b6b3a76400006135906106a1565b61359a9190613c33565b90508083116135aa5760006135b4565b6135b48184613b78565b91506114246135eb670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c33565b8390612797565b600080600061360489898888886137f6565b905061361e8661185c6136178a8d613a60565b8790610683565b985061362b858a866117f6565b9850888110156136425760008092509250506136af565b888103670de0b6b3a7640000811061367757613670613669670de0b6b3a764000089612981565b8290612916565b905061368f565b61368c613669670de0b6b3a764000089612797565b90505b808910156136a5576000809350935050506136af565b8803925060019150505b965096945050505050565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa158015613704573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106989190613f22565b600080600061373a89898888886137f6565b905061374a8661185c898b613a60565b9750878110156137615760008092509250506136af565b87810361376f81868861301c565b9050670de0b6b3a7640000811061379c57613795613669670de0b6b3a764000089612981565b90506137b4565b6137b1613669670de0b6b3a764000089612797565b90505b6137be8186612981565b9050808a10156137d6576000809350935050506136af565b90980398600198509650505050505050565b606061069883836000613825565b60006138028585612916565b61381b6138138661185c868b612639565b85908561301c565b6125109190613a60565b60608147101561384a5760405163cd78605960e01b81523060048201526024016130dd565b600080856001600160a01b031684866040516138669190613ef3565b60006040518083038185875af1925050503d80600081146138a3576040519150601f19603f3d011682016040523d82523d6000602084013e6138a8565b606091505b50915091506125108683836060826138c8576138c38261390f565b611424565b81511580156138df57506001600160a01b0384163b155b1561390857604051639996b31560e01b81526001600160a01b03851660048201526024016130dd565b5080611424565b80511561391f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061394c61398a565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613a0157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a2d57600080fd5b850160608188031215613a3f57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b613a4a565b600060208284031215613a8557600080fd5b81356001600160a01b038116811461142457600080fd5b80151581146105ab57600080fd5b600060208284031215613abc57600080fd5b813561142481613a9c565b6000808335601e19843603018112613ade57600080fd5b83018035915067ffffffffffffffff821115613af957600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613b6b60c083018486613b0e565b9998505050505050505050565b8181038181111561069b5761069b613a4a565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613bc560e083018486613b0e565b9a9950505050505050505050565b6001600160701b038181168382160190808211156127cb576127cb613a4a565b6001600160801b038181168382160190808211156127cb576127cb613a4a565b81810360008312801583831316838312821617156127cb576127cb613a4a565b808202811582820484141761069b5761069b613a4a565b6001600160801b038281168282160390808211156127cb576127cb613a4a565b8082018281126000831280158216821582161715613c8a57613c8a613a4a565b505092915050565b600060208284031215613ca457600080fd5b815161142481613a9c565b634e487b7160e01b600052601260045260246000fd5b600082613cd457613cd4613caf565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b613a4a565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613d98828551613d06565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e0d57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e3357613e33613a4a565b5060000390565b610180810161069b8284613d06565b60008060408385031215613e5c57600080fd5b825191506020830151613e6e81613a9c565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613e9e57613e9e613caf565b600160ff1b821460001984141615613eb857613eb8613a4a565b500590565b60008060008060808587031215613ed357600080fd5b8451935060208501519250604085015191506060850151613a3f81613a9c565b6000825160005b81811015613f145760208186018101518583015201613efa565b506000920191825250919050565b600060208284031215613f3457600080fd5b505191905056fea2646970667358221220f993fd03dfb0585f16d0d7c6eac5cd675201276b8531f8ecab1f4e0c60e7879d64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
