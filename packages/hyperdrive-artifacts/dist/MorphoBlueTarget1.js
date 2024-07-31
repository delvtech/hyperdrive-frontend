export const MorphoBlueTarget1 = {
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
                },
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct IMorphoBlueHyperdrive.MorphoBlueParams",
                    "components": [
                        {
                            "name": "morpho",
                            "type": "address",
                            "internalType": "contract IMorpho"
                        },
                        {
                            "name": "collateralToken",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "oracle",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "irm",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "lltv",
                            "type": "uint256",
                            "internalType": "uint256"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6103006040523480156200001257600080fd5b506040516200460038038062004600833981016040819052620000359162000638565b6001600081905582516001600160a01b039081166080818152602080870151841660a0908152828801516101a0908152908801516101c090815260c0808a01516101e090815260e0808c015161020052610120808d0151909352610100808d0151909152610140808d0151909152908b018051519092528151850151905280516040908101516101609081529151606090810151610180908152828d01518a1661022052818d015161024052928c015160098054918b166001600160a01b0319928316179055928c0151600a8054918b16918516919091179055938b0151600b8054918a16918416919091179055918a0151600c805491891691909216179055875186166102608190529288015186166102805287015185166102a0528601519093166102c0528401516102e05283926200017192906200017a565b505050620007cb565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001d490859083906200024616565b6200024057604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000234918691620002f716565b620002408482620002f7565b50505050565b6000806000846001600160a01b03168460405162000265919062000776565b6000604051808303816000865af19150503d8060008114620002a4576040519150601f19603f3d011682016040523d82523d6000602084013e620002a9565b606091505b5091509150818015620002d7575080511580620002d7575080806020019051810190620002d79190620007a7565b8015620002ee57506000856001600160a01b03163b115b95945050505050565b60006200030e6001600160a01b038416836200036a565b9050805160001415801562000336575080806020019051810190620003349190620007a7565b155b156200036557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200037a8383600062000381565b9392505050565b606081471015620003a85760405163cd78605960e01b81523060048201526024016200035c565b600080856001600160a01b03168486604051620003c6919062000776565b60006040518083038185875af1925050503d806000811462000405576040519150601f19603f3d011682016040523d82523d6000602084013e6200040a565b606091505b5090925090506200041d86838362000427565b9695505050505050565b60608262000440576200043a826200048b565b6200037a565b81511580156200045857506001600160a01b0384163b155b156200048357604051639996b31560e01b81526001600160a01b03851660048201526024016200035c565b50806200037a565b8051156200049c5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004ea57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004b557600080fd5b80516200051381620004f0565b919050565b6000608082840312156200052b57600080fd5b604051608081016001600160401b03811182821017156200055c57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a08284031215620005a057600080fd5b60405160a081016001600160401b0381118282101715620005d157634e487b7160e01b600052604160045260246000fd5b80604052508091508251620005e681620004f0565b81526020830151620005f881620004f0565b602082015260408301516200060d81620004f0565b604082015260608301516200062281620004f0565b6060820152608092830151920191909152919050565b6000808284036103008112156200064e57600080fd5b610260808212156200065f57600080fd5b62000669620004b8565b9150620006768562000506565b8252620006866020860162000506565b6020830152620006996040860162000506565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200070481870162000506565b908301526101806200071886820162000506565b908301526101a06200072c86820162000506565b908301526101c06200074086820162000506565b908301526101e0620007558787830162000518565b81840152508193506200076b868287016200058d565b925050509250929050565b6000825160005b818110156200079957602081860181015185830152016200077d565b506000920191825250919050565b600060208284031215620007ba57600080fd5b815180151581146200037a57600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051613c16620009ea60003960008181611a2b0152818161271d01526127fd015260008181611a09015281816126fb01526127d30152600081816119e7015281816126d901526127aa0152600081816119c5015281816126b7015261278001526000818161198101528181612673015261287a01526000505060005050600050506000818160af015281816103250152612e9101526000818161136401528181611775015281816117d801528181612a6f01528181612aab01528181612caa0152612e6b01526000818161071301528181610d6101528181610da801528181610f6d015281816115da015281816116280152612e4501526000611be4015260008181611d0a0152818161236d01526123e60152600081816108d701528181610f0501528181611cde01526123ba015260008181610dfa015261233301526000818161073401528181610d3f01528181610dc901528181610f8e015281816115b8015281816116490152612eb701526000818161080f01528181610e84015281816116d10152818161220801526133eb0152600081816105d20152818161064d015281816106c30152818161078f01526107c7015260005050600081816119a301528181612695015261275b0152613c166000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613699565b610073565b60405190815260200160405180910390f35b61004e61006e366004613699565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bec565b3387610c21565b6000806000806000806101568b888e610cfa565b95509550955095509550955060008c90508c4210156102165782600d6000828254610181919061370e565b9091555061019990506101926105ca565b4284610fee565b6101a68c8887878561112c565b60006101b18e6112a6565b90506101cf6101bf8e6112f0565b6101c99083613721565b8261131e565b6101d88961135d565b6101e4576101e46113bd565b60006101ef8a6113d6565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b61022086896113e3565b955061022b886113d6565b505b600061023a878a8d6114c4565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bec565b61027a6020830183613741565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a01613778565b6102cc8a6102c68d8f61370e565b9061155e565b8d6102da60408c018c613795565b6040516102ee989796959493929190613805565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bec565b6000806000806000806103bb8b888e611573565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e6919061370e565b909155506103f790506101926105ca565b6104048c8887878561175e565b600061040f826112a6565b905061042761041d8e6112f0565b6101c9908361384d565b6104308961135d565b61043c5761043c6113bd565b60006104478a6113d6565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b61047886896113e3565b9550610483886113d6565b505b6000610492878a8d6114c4565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bec565b6104d06020830183613741565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a01613778565b8a61051c60408b018b613795565b60405161052f9796959493929190613875565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105886020830183613741565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a764000061194f565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a96565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b61370e565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611aac565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611acd565b92505b5061076583611ae4565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b6138b6565b8a84610fee565b6107f9896107f36107ec7f00000000000000000000000000000000000000000000000000000000000000008361370e565b4290611b0e565b84610fee565b61080288611b23565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d6138b6565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bec565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611cc7565b9150915080600d60008282546108a5919061370e565b909155506108c19050866000846108bb816112f0565b8861112c565b6108cb818361370e565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d96565b915061090f61090a838561155e565b611de0565b600680546002906109309084906201000090046001600160701b03166138c9565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611ae4565b6006805460109061097f908490600160801b90046001600160801b03166138e9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bec565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611cc7565b9150915080600d60008282546109f6919061370e565b90915550610a12905083600084610a0c816112f0565b8a61175e565b610a1c81836138b6565b9150610a2b61090a838761155e565b60068054600290610a4c9084906201000090046001600160701b03166138c9565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611ae4565b60068054601090610a9b908490600160801b90046001600160801b03166138e9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f0565b610add836112f0565b610ae79190613721565b600061131e565b8e610af98482611e0a565b50505b6000610b0784612004565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd5578e610bd15a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612150565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c165760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6457604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca79084906138b6565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d0e611aac565b90506000610d1b8a6121db565b6002549091508c908c90610d85908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f000000000000000000000000000000000000000000000000000000000000000061222c565b600254919d509a50909550610ded908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611acd565b9550610e23858c610e1e897f000000000000000000000000000000000000000000000000000000000000000061229c565b6122cc565b15610e3057610e306113bd565b6000806000610e4185878b8761230e565b9c5091945092509050610e5481846138b6565b610e5e908961370e565b9750610e6a828461370e565b610e74908d61370e565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eae91906138b6565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef65760008b8152600860205260409020600101546001600160801b0316610ef8565b8b5b90508b610f298e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d96565b9950610f35878a6138b6565b9850670de0b6b3a7640000610fb2610f4d878761370e565b600254610f6b908f90600160801b90046001600160801b03166138b6565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611acd565b1115610fc057610fc06113bd565b610fd08a8a878a87876000612422565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101a5750505050565b6000848152600860205260408120546001600160801b0316908190036110745761104383611ae4565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f2565b6110c56110c0670de0b6b3a764000061108d88866138b6565b6110979190613909565b85670de0b6b3a76400006110ab878a6138b6565b6110b59190613909565b8592919060016124c1565b611ae4565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fb84611ae4565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111756110c082611158670de0b6b3a764000086613909565b600554600160801b90046001600160801b031691908a60006124c1565b600580546001600160801b03928316600160801b02921691909117905561119b86611ae4565b6111a59082613920565b600480546001600160801b03928316600160801b0292169190911790556111cb84611ae4565b600280546000906111e69084906001600160801b03166138e9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112138361256b565b60048054600090611228908490600f0b613940565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061125885611ae4565b6002805460109061127a908490600160801b90046001600160801b0316613920565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112ce601060006112ba600286610bec565b8152602001908152602001600020546112f0565b6112e0601060006112ba600187610bec565b6112ea9190613721565b92915050565b60006001600160ff1b0382111561131a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611339906110c0906001600160801b031684846125a7565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006113897f00000000000000000000000000000000000000000000000000000000000000008361260e565b60035461139f91906001600160801b031661370e565b6002546113b5906001600160801b03168461155e565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ea826004611e0a565b60008060006113f184611b23565b90925090506000611402868661155e565b90508183111561141a57611417868385612623565b95505b8281101561142c578083039250611431565b600092505b61143a83611de0565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148d57869003611491565b5060005b61149a81611ae4565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114d1858561155e565b90506114dc81612641565b9450846000036114f0576000915050611557565b8491506115036040840160208501613778565b156115325761152b856115196020860186613741565b6115266040870187613795565b612747565b9150611555565b611555856115436020860186613741565b6115506040870187613795565b6128f1565b505b9392505050565b60006115578383670de0b6b3a7640000612623565b600080600080600080600080611587611aac565b905060006115948a6121db565b6002549091508b908d906115fe908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061290a565b600254919d509b509095506000908190819061166d908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611acd565b985061167b84878b8861230e565b9c50919450909250905061168f82846138b6565b61169990896138b6565b97506116a5818461370e565b6116af908e6138b6565b9c506116bb8a8e61370e565b9b505050505050505061174886868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6116fb91906138b6565b81526020810191909152604001600020600101546001600160801b0316428e1161173f5760008e8152600860205260409020600101546001600160801b0316611741565b8e5b6001612422565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117a057507f000000000000000000000000000000000000000000000000000000000000000061179e85836138b6565b105b156117ad576117ad6113bd565b6004549084900390600f0b6117c28482613721565b9050836117ce866112f0565b13801561180357507f0000000000000000000000000000000000000000000000000000000000000000611801838361295e565b105b15611810576118106113bd565b600354600160801b90046001600160801b03166118526110c08261183c670de0b6b3a764000088613909565b6005546001600160801b031691908c60006124c1565b600580546001600160801b0319166001600160801b039290921691909117905561187c88826138b6565b905061188781611ae4565b600380546001600160801b03928316600160801b0292169190911790556118ad83611ae4565b600280546001600160801b0319166001600160801b03929092169190911790556118d68261256b565b600480546001600160801b0319166001600160801b03929092169190911790556118ff87611ae4565b60028054601090611921908490600160801b90046001600160801b03166138e9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6040516303c2063f60e41b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090611a55907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b9060040161396d565b602060405180830381865af4158015611a72573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ea91906139b0565b6000611aa282846139df565b61155790846138b6565b6002546004546000916105c5916001600160801b0390911690600f0b61295e565b600061008182611ade858888612623565b90612984565b60006001600160801b0382111561131a57604051630f0af95160e11b815260040160405180910390fd5b6000818311611b1d5782611557565b50919050565b6006546000908190611b46908490600160801b90046001600160801b031661155e565b6006546201000090046001600160701b03169250905081811115611cc2576000611b7083836138b6565b9050611b7f6110c082866129f9565b60068054601090611ba1908490600160801b90046001600160801b0316613920565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611bda8583612a0e90919063ffffffff16565b90506000611c08827f000000000000000000000000000000000000000000000000000000000000000061155e565b905080600d6000828254611c1c919061370e565b90915550611c2c905081836138b6565b9150611c3782611ae4565b60028054600090611c529084906001600160801b03166138e9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c7f82612a23565b60048054600090611c94908490600f0b613940565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cd48785612a0e565b91506000611d02837f000000000000000000000000000000000000000000000000000000000000000061155e565b9050611d2e817f000000000000000000000000000000000000000000000000000000000000000061155e565b91508315611d5157611d4082826138b6565b611d4a90846138b6565b9250611d68565b611d5b82826138b6565b611d65908461370e565b92505b86861015611d8b57611d7b838789612623565b9250611d88828789612623565b91505b509550959350505050565b600080611dae84611da88a888a612623565b90612a0e565b9050611dbb888486612623565b611dc5908261370e565b905086811115611dd55786810391505b509695505050505050565b60006001600160701b0382111561131a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e55916001600160801b0316906138b6565b905080600003611e695760019150506112ea565b6000611e7485612a4d565b905080600003611e89576001925050506112ea565b600080611e97838589612ae9565b9150915080611ead5760009450505050506112ea565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611ee9929190613a71565b6040805180830381865af4158015611f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f299190613ae7565b91509150611f47611f39826112f0565b611f4290613b0b565b612c64565b925082611f5d57600096505050505050506112ea565b611f6682611ae4565b60078054600090611f819084906001600160801b03166138e9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fae81611ae4565b60078054601090611fd0908490600160801b90046001600160801b03166138e9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61202d87612dfc565b6040518263ffffffff1660e01b81526004016120499190613b27565b6040805180830381865af4158015612065573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120899190613b36565b915091508061209f575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916121059161370e565b61210f91906138b6565b90508060000361212757506000958695509350505050565b6000808711612137576000612142565b612142848884612623565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561217657612176613b66565b6040519080825280601f01601f1916602001820160405280156121a0576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121c1578692505b828152826000602083013e90999098509650505050505050565b6000806121e66105ca565b90508083116121f6576000612200565b61220081846138b6565b9150611557827f0000000000000000000000000000000000000000000000000000000000000000612a0e565b6000808061224d61224588670de0b6b3a76400006138b6565b899087612f36565b9050861561228f5761225f888861260e565b91506122808a8a846122798a670de0b6b3a76400006138b6565b8989612f5c565b925061228c838261370e565b90505b9750975097945050505050565b60006122ba6122b384670de0b6b3a76400006138b6565b839061260e565b61155790670de0b6b3a76400006138b6565b600080612303856122db611aac565b6122e5919061370e565b600254610f6b908790600160801b90046001600160801b03166138b6565b909210949350505050565b6000808080612365878661235e8b6123586123318c670de0b6b3a76400006138b6565b7f00000000000000000000000000000000000000000000000000000000000000009061260e565b9061260e565b9190612f36565b9350612391847f000000000000000000000000000000000000000000000000000000000000000061155e565b915060006123b26123aa89670de0b6b3a76400006138b6565b8a9088612f36565b90506123de817f000000000000000000000000000000000000000000000000000000000000000061260e565b935061240a847f000000000000000000000000000000000000000000000000000000000000000061155e565b612414908461370e565b915050945094509450949050565b60008060008060008088881015612491578615612447576124448d898b612623565b9c505b6124528c898b612623565b9b5061245d8b6112f0565b6124668d6112f0565b6124709190613721565b905061247d8b898b612623565b9a5061248a8a898b612623565b99506124b0565b61249a8b6112f0565b6124a38d6112f0565b6124ad9190613721565b90505b9b9c9a9b999a975050505050505050565b6000826000036124d2575084612562565b8115612525576125036124e5848761370e565b6124ef858761155e565b6124f9888a61155e565b611da8919061370e565b905060006125118588611b0e565b90508082101561251f578091505b50612562565b82850361253457506000612562565b61255f61254184876138b6565b61254b858761260e565b612555888a61155e565b611da891906138b6565b90505b95945050505050565b600060016001607f1b0319821280612589575060016001607f1b0382135b1561131a5760405163a5353be560e01b815260040160405180910390fd5b6000806125b5846000612f7f565b6125c0846000612f7f565b6125ca9190613721565b905060008113156125e6576125df818661370e565b9450612605565b6000811215612605576125f881613b0b565b61260290866138b6565b94505b50929392505050565b60006115578383670de0b6b3a7640000612f36565b600082600019048411830215820261263a57600080fd5b5091020490565b6040516349124ca360e01b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390611a55907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b9060040161396d565b6040805160a0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000008116602083019081527f000000000000000000000000000000000000000000000000000000000000000082168385019081527f00000000000000000000000000000000000000000000000000000000000000008316606085019081527f0000000000000000000000000000000000000000000000000000000000000000608086019081529551635c2bea4960e01b81529451841660048601529151831660248501525182166044840152518116606483015291516084820152600060a4820181905260c482018790523060e4830152858316610104830152917f00000000000000000000000000000000000000000000000000000000000000001690635c2bea49906101240160408051808303816000875af11580156128c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e79190613ae7565b5095945050505050565b60405163350b944160e11b815260040160405180910390fd5b6000808061292b61292388670de0b6b3a76400006138b6565b899087612623565b9050861561228f5761293d888861155e565b91506122808a8a846129578a670de0b6b3a76400006138b6565b8989612f95565b60008061296b8484612fa6565b90925090508061297d5761297d6113bd565b5092915050565b60008160000361299d5750670de0b6b3a76400006112ea565b826000036129ad575060006112ea565b60006129b8836112f0565b905060006129cd6129c8866112f0565b612fe5565b90508181026129e4670de0b6b3a764000082613b7c565b90506129ef8161320b565b9695505050505050565b600061155783670de0b6b3a764000084612f36565b600061155783670de0b6b3a764000084612623565b600060016001607f1b0382111561131a5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612a68906001600160801b0316846129f9565b9050612a947f00000000000000000000000000000000000000000000000000000000000000008261370e565b6002546001600160801b03161115611b1d576002547f000000000000000000000000000000000000000000000000000000000000000090612adf9083906001600160801b03166138b6565b61155791906138b6565b612af16135e6565b600080612afd84612dfc565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612b389190613b27565b6040805180830381865af4158015612b54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b789190613b36565b9350905082612b8d575060009150612c5c9050565b6000612bb4612baf84610160015185610140015161155e90919063ffffffff16565b6112f0565b612bd4612baf85610120015186610100015161260e90919063ffffffff16565b612bde9190613721565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d419190613baa565b935093509350935080612d5d5750600098975050505050505050565b868414612d8e57612d6d84611ae4565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612dbf57612d9e8361256b565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ded57612dcf82611ae4565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612e04613638565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612efc91166133a0565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612f2e929004166133a0565b905292915050565b6000826000190484118302158202612f4d57600080fd5b50910281810615159190040190565b600080612f6d888888888888613416565b909250905080611dd557611dd56113bd565b6000818313612f8e5781611557565b5090919050565b600080612f6d8888888888886134f7565b600080600083612fb5866112f0565b612fbf9190613721565b90506000811215612fd7576000809250925050612fde565b9150600190505b9250929050565b60008082136130075760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061308a9084901c6112f0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361322657506000919050565b680755bf798b4a1bf1e5821261324f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906129ef74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f0565b600080670de0b6b3a76400006133b46105ca565b6133be9190613909565b90508083116133ce5760006133d8565b6133d881846138b6565b915061155761340f670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613909565b8390612a0e565b600080600061342889898888886135b7565b90508688101561343f5760008092509250506134ec565b968690039661344e8887612984565b9750878110156134655760008092509250506134ec565b878103613473818688612f36565b9050670de0b6b3a764000081106134a7576134a0613499670de0b6b3a7640000896129f9565b8290612984565b90506134bf565b6134bc613499670de0b6b3a764000089612a0e565b90505b6134c981866129f9565b9050898110156134e1576000809350935050506134ec565b899003925060019150505b965096945050505050565b600080600061350989898888886135b7565b905061351986611ade898b61370e565b9750878110156135305760008092509250506134ec565b87810361353e818688612f36565b9050670de0b6b3a7640000811061356b57613564613499670de0b6b3a7640000896129f9565b9050613583565b613580613499670de0b6b3a764000089612a0e565b90505b61358d81866129f9565b9050808a10156135a5576000809350935050506134ec565b90980398600198509650505050505050565b60006135c38585612984565b6135dc6135d486611ade868b61260e565b859085612f36565b61255f919061370e565b6040518061012001604052806135fa613638565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156136af57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136db57600080fd5b8501606081880312156136ed57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ea576112ea6136f8565b818103600083128015838313168383128216171561297d5761297d6136f8565b60006020828403121561375357600080fd5b81356001600160a01b038116811461155757600080fd5b80151581146105af57600080fd5b60006020828403121561378a57600080fd5b81356115578161376a565b6000808335601e198436030181126137ac57600080fd5b83018035915067ffffffffffffffff8211156137c757600080fd5b602001915036819003821315612fde57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061383f60e0830184866137dc565b9a9950505050505050505050565b808201828112600083128015821682158216171561386d5761386d6136f8565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006138a960c0830184866137dc565b9998505050505050505050565b818103818111156112ea576112ea6136f8565b6001600160701b0381811683821601908082111561297d5761297d6136f8565b6001600160801b0381811683821601908082111561297d5761297d6136f8565b80820281158282048414176112ea576112ea6136f8565b6001600160801b0382811682821603908082111561297d5761297d6136f8565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ea576112ea6136f8565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b6000602082840312156139c257600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b6000826139ee576139ee6139c9565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613a858285516139f3565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613afa57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613b2057613b206136f8565b5060000390565b61018081016112ea82846139f3565b60008060408385031215613b4957600080fd5b825191506020830151613b5b8161376a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613b8b57613b8b6139c9565b600160ff1b821460001984141615613ba557613ba56136f8565b500590565b60008060008060808587031215613bc057600080fd5b84519350602085015192506040850151915060608501516136ed8161376a56fea264697066735822122058ebdaf861ec6a6a17f458df6fe5e6b9546891c80be3590b0197bba56336d76164736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
