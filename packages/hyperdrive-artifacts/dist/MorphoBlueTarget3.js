export const MorphoBlueTarget3 = {
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
                    "name": "__adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
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
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
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
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "inputs": []
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
            "name": "InvalidApr",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidEffectiveShareReserves",
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
            "name": "PoolAlreadyInitialized",
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6103206040523480156200001257600080fd5b5060405162004a9e38038062004a9e8339810160408190526200003591620005e4565b6001600081905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011c929062000126565b505050506200078a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001809085908390620001f216565b620001ec57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001e0918691620002a316565b620001ec8482620002a3565b50505050565b6000806000846001600160a01b03168460405162000211919062000735565b6000604051808303816000865af19150503d806000811462000250576040519150601f19603f3d011682016040523d82523d6000602084013e62000255565b606091505b5091509150818015620002835750805115806200028357508080602001905181019062000283919062000766565b80156200029a57506000856001600160a01b03163b115b95945050505050565b6000620002ba6001600160a01b0384168362000316565b90508051600014158015620002e2575080806020019051810190620002e0919062000766565b155b156200031157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000326838360006200032d565b9392505050565b606081471015620003545760405163cd78605960e01b815230600482015260240162000308565b600080856001600160a01b0316848660405162000372919062000735565b60006040518083038185875af1925050503d8060008114620003b1576040519150601f19603f3d011682016040523d82523d6000602084013e620003b6565b606091505b509092509050620003c9868383620003d3565b9695505050505050565b606082620003ec57620003e68262000437565b62000326565b81511580156200040457506001600160a01b0384163b155b156200042f57604051639996b31560e01b81526001600160a01b038516600482015260240162000308565b508062000326565b805115620004485780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200049657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200046157600080fd5b8051620004bf816200049c565b919050565b600060808284031215620004d757600080fd5b604051608081016001600160401b03811182821017156200050857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a082840312156200054c57600080fd5b60405160a081016001600160401b03811182821017156200057d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825162000592816200049c565b81526020830151620005a4816200049c565b60208201526040830151620005b9816200049c565b60408201526060830151620005ce816200049c565b6060820152608092830151920191909152919050565b6000806000838503610320811215620005fc57600080fd5b610260808212156200060d57600080fd5b6200061762000464565b91506200062486620004b2565b82526200063460208701620004b2565b60208301526200064760408701620004b2565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006b2818801620004b2565b90830152610180620006c6878201620004b2565b908301526101a0620006da878201620004b2565b908301526101c0620006ee878201620004b2565b908301526101e06200070388888301620004c4565b818401525081945062000718818701620004b2565b935050506200072c85610280860162000539565b90509250925092565b6000825160005b818110156200075857602081860181015185830152016200073c565b506000920191825250919050565b6000602082840312156200077957600080fd5b815180151581146200032657600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610300516140d9620009c560003960008181611b490152612f6e015260008181611b1a0152612f47015260008181611aeb0152612f1f015260008181611abc0152612ef70152600081816119f601528181611a530152612ea70152600050506000505060006112f901526000818161030301528181610332015261035f01526000818160de015281816105a9015261172001526000818161085601528181610941015281816109d401528181610add015281816115f1015281816116fa01528181612271015281816122d401528181612bb3015281816130fb015261313701526000818161013f015281816108c601528181610ea7015281816114b5015281816115190152818161156001526116d401526000611e76015260008181611fd1015261339001526000818161106b0152611fa5015260006133460152600081816101810152818161091901528181610ec801528181611485015281816114e901528181611581015261174601526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa30152612b4901526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b015260005050600081816119c901528181611a2a01528181611a8d0152612ecf01526140d96000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c366004613a5c565b610066565b60405190815260200160405180910390f35b610041610061366004613ac0565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613b26565b611408565b611452565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613b39565b81526020810191909152604001600020546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061165f565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613b26565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613b39565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103f1916001600160801b0390911690613b39565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061042c908390613b26565b9050600080600061043c8a61168b565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613bca565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613bd9565b91506104ca6104c58c6117c5565b6117f3565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613bca565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613bd9565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613b39565b9190611819565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e611837565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613c07565b8e61184c565b61063a896118f4565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613b26565b9b5090508a158061073757506107348c6000611901565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611819565b610770565b60005b905061077f6020850185613c07565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613c32565b866107ca60408c018c613c4f565b6040516107dd9796959493929190613c96565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613cea565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613d01565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd8484611916565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e85858589600080611452565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a668561193c565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f84611966565b600480546001600160801b0319166001600160801b0392909216919091179055610ab88361193c565b600280546001600160801b03928316600160801b029216919091179055610b016000807f000000000000000000000000000000000000000000000000000000000000000061184c565b610b196000610b1360208c018c613c07565b8a61184c565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f6020820182613c07565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613c32565b87610b8a6040890189613c4f565b604051610b9d9796959493929190613c96565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c136020830183613c07565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b611916565b905090565b600080610c72878787866119a2565b9050610c7e818561165f565b979650505050505050565b81600080610c9d6040850160208601613c32565b15610cc257610cb885610cb36040870187613c4f565b6119b9565b9093509050610cda565b5034610cda85610cd56040870187613c4f565b611c26565b610ce2611c3f565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f0000000000000000000000000000000000000000000000000000000000000000611c52565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611400565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b613b26565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b92505b50610ef98361193c565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b613b39565b8a84611c68565b610f8d89610f87610f807f000000000000000000000000000000000000000000000000000000000000000083613b26565b4290611da6565b84611c68565b610f9688611db5565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d613b39565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611f59565b6000818152600b60205260408120549192508c8c831561113a576001925060008061102386898d866000611f8e565b9150915080600960008282546110399190613b26565b9091555061105590508660008461104f816117c5565b8861205d565b61105f8183613b26565b915061108f86838a8e877f00000000000000000000000000000000000000000000000000000000000000006121d7565b91506110a361109e838561221b565b612230565b600680546002906110c49084906201000090046001600160701b0316613d2f565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f18261193c565b60068054601090611113908490600160801b90046001600160801b0316613d4f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611f59565b6000818152600b602052604090205490915080156112565760019450600080611174838b8f886001611f8e565b91509150806009600082825461118a9190613b26565b909155506111a69050836000846111a0816117c5565b8a61225a565b6111b08183613b39565b91506111bf61109e838761221b565b600680546002906111e09084906201000090046001600160701b0316613d2f565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d8261193c565b6006805460109061122f908490600160801b90046001600160801b0316613d4f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561129057611282611268876117c5565b611271836117c5565b61127b9190613d6f565b600061244b565b8e61128d848261248a565b50505b600061129b84612684565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113799190613d8f565b90506001600160a01b038116156113ee576113eb5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906127d0565b50505b509b9d50505050505050505050505050505b949350505050565b6000611430600b600061141c600286611f59565b8152602001908152602001600020546117c5565b611442600b600061141c600187611f59565b61144c9190613d6f565b92915050565b6000806000806114628a8a61285d565b915091508061147957600080935093505050611654565b60006114d9838a6114b27f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613b39565b8b7f0000000000000000000000000000000000000000000000000000000000000000612899565b509050600061153d848b846115167f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613b39565b8d7f0000000000000000000000000000000000000000000000000000000000000000612956565b50905081158061154b575080155b15611557575060009050805b60006115a5858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b90506115b383838c84612a14565b50909350600090506115c5848f613b26565b905060006115e68b8b6115d7876117c5565b6115e1908e613dac565b612a60565b90508b61161b6116167f000000000000000000000000000000000000000000000000000000000000000083612ac7565b6117c5565b611624836117c5565b611631611616868561221b565b61163b9190613d6f565b6116459190613d6f565b60019950995050505050505050505b965096945050505050565b600061009161167384846301e13380612ad8565b61168585670de0b6b3a7640000613b39565b90611837565b611693613997565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161178b9116612afe565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117bd92900416612afe565b905292915050565b60006001600160ff1b038211156117ef5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117fc81612b6d565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261183057600080fd5b5091020490565b600061009183670de0b6b3a764000084611819565b6000838152600a602090815260408083206001600160a01b03861684529091528120805483929061187e908490613b26565b90915550506000838152600b6020526040812080548392906118a1908490613b26565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061144c82600461248a565b60008183136119105782610091565b50919050565b600080611923848461285d565b90925090508061193557611935612d05565b5092915050565b60006001600160801b038211156117ef57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611984575060016001607f1b0382135b156117ef5760405163a5353be560e01b815260040160405180910390fd5b6000610078826119b3858888611819565b90612d1e565b6000806119f16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612d93565b611a517f0000000000000000000000000000000000000000000000000000000000000000611a20876001613b26565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612e00565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a99aad896040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081525087600030600067ffffffffffffffff811115611b8957611b89613dd4565b6040519080825280601f01601f191660200182016040528015611bb3576020820181803683370190505b506040518663ffffffff1660e01b8152600401611bd4959493929190613e0e565b60408051808303816000875af1158015611bf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c169190613e9e565b925060009150505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b6000610c5e670de0b6b3a7640000612e90565b6000611c5e8284613ed8565b6100919084613b39565b600083815260086020526040902054600160801b90046001600160801b0316808303611c945750505050565b6000848152600860205260408120546001600160801b031690819003611cee57611cbd8361193c565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611d6c565b611d3f611d3a670de0b6b3a7640000611d078886613b39565b611d119190613cea565b85670de0b6b3a7640000611d25878a613b39565b611d2f9190613cea565b859291906001612ffc565b61193c565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611d758461193c565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116119105782610091565b6006546000908190611dd8908490600160801b90046001600160801b031661221b565b6006546201000090046001600160701b03169250905081811115611f54576000611e028383613b39565b9050611e11611d3a828661309a565b60068054601090611e33908490600160801b90046001600160801b0316613eec565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611e6c858361183790919063ffffffff16565b90506000611e9a827f000000000000000000000000000000000000000000000000000000000000000061221b565b90508060096000828254611eae9190613b26565b90915550611ebe90508183613b39565b9150611ec98261193c565b60028054600090611ee49084906001600160801b0316613d4f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f11826130af565b60048054600090611f26908490600f0b613f0c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611f835760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611f9b8785611837565b91506000611fc9837f000000000000000000000000000000000000000000000000000000000000000061221b565b9050611ff5817f000000000000000000000000000000000000000000000000000000000000000061221b565b91508315612018576120078282613b39565b6120119084613b39565b925061202f565b6120228282613b39565b61202c9084613b26565b92505b8686101561205257612042838789611819565b925061204f828789611819565b91505b509550959350505050565b600454600160801b90046001600160801b03166120a6611d3a82612089670de0b6b3a764000086613cea565b600554600160801b90046001600160801b031691908a6000612ffc565b600580546001600160801b03928316600160801b0292169190911790556120cc8661193c565b6120d69082613eec565b600480546001600160801b03928316600160801b0292169190911790556120fc8461193c565b600280546000906121179084906001600160801b0316613d4f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061214483611966565b60048054600090612159908490600f0b613f0c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506121898561193c565b600280546010906121ab908490600160801b90046001600160801b0316613eec565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806121e9846116858a888a611819565b90506121f6888486611819565b6122009082613b26565b9050868111156122105786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611819565b60006001600160701b038211156117ef5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061229c57507f000000000000000000000000000000000000000000000000000000000000000061229a8583613b39565b105b156122a9576122a9612d05565b6004549084900390600f0b6122be8482613d6f565b9050836122ca866117c5565b1380156122ff57507f00000000000000000000000000000000000000000000000000000000000000006122fd8383611916565b105b1561230c5761230c612d05565b600354600160801b90046001600160801b031661234e611d3a82612338670de0b6b3a764000088613cea565b6005546001600160801b031691908c6000612ffc565b600580546001600160801b0319166001600160801b03929092169190911790556123788882613b39565b90506123838161193c565b600380546001600160801b03928316600160801b0292169190911790556123a98361193c565b600280546001600160801b0319166001600160801b03929092169190911790556123d282611966565b600480546001600160801b0319166001600160801b03929092169190911790556123fb8761193c565b6002805460109061241d908490600160801b90046001600160801b0316613d4f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461246690611d3a906001600160801b03168484612a60565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916124d5916001600160801b031690613b39565b9050806000036124e957600191505061144c565b60006124f4856130d9565b9050806000036125095760019250505061144c565b600080612517838589613175565b915091508061252d57600094505050505061144c565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612569929190613f39565b6040805180830381865af4158015612585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125a99190613e9e565b915091506125c76125b9826117c5565b6125c290613faf565b612b6d565b9250826125dd576000965050505050505061144c565b6125e68261193c565b600780546000906126019084906001600160801b0316613d4f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061262e8161193c565b60078054601090612650908490600160801b90046001600160801b0316613d4f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6126ad8761168b565b6040518263ffffffff1660e01b81526004016126c99190613bca565b6040805180830381865af41580156126e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127099190613fcb565b915091508061271f575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161278591613b26565b61278f9190613b39565b9050806000036127a757506000958695509350505050565b60008087116127b75760006127c2565b6127c2848884611819565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156127f6576127f6613dd4565b6040519080825280601f01601f191660200182016040528015612820576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612841578692505b828152826000602083013e9093509150505b9550959350505050565b60008060008361286c866117c5565b6128769190613d6f565b9050600081121561288e576000809250925050610d57565b946001945092505050565b60008060006128ab88888888886132e4565b905060006128d6670de0b6b3a76400006128c5888861309a565b6128cf9190613b26565b8390611837565b9050670de0b6b3a7640000811061290a576129036128fc670de0b6b3a764000089611837565b8290612d1e565b9050612922565b61291f6128fc670de0b6b3a76400008961309a565b90505b61292c8186611837565b90508881101561294457600080935093505050612853565b97909703976001975095505050505050565b60008060006129688989888888613313565b9050612982866119b361297b8a8d613b26565b879061221b565b985061298f858a86611819565b9850888110156129a6576000809250925050611654565b888103670de0b6b3a764000081106129d4576129cd6128fc670de0b6b3a76400008961309a565b90506129ec565b6129e96128fc670de0b6b3a764000089611837565b90505b80891015612a0257600080935093505050611654565b90970398600198509650505050505050565b6000806000806000612a27898789613338565b9092509050612a368289613b39565b97506000612a4582888a611819565b9050612a51818b613b39565b9a989950979650505050505050565b600080612a6e8460006133be565b612a798460006133be565b612a839190613d6f565b90506000811315612a9f57612a988186613b26565b9450612abe565b6000811215612abe57612ab181613faf565b612abb9086613b39565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612aef57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612b12610d5e565b612b1c9190613cea565b9050808311612b2c576000612b36565b612b368184613b39565b91506100916128cf670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613cea565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c4a9190613ffb565b935093509350935080612c665750600098975050505050505050565b868414612c9757612c768461193c565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612cc857612ca783611966565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612cf657612cd88261193c565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612d375750670de0b6b3a764000061144c565b82600003612d475750600061144c565b6000612d52836117c5565b90506000612d67612d62866117c5565b6133d4565b9050818102612d7e670de0b6b3a76400008261403c565b9050612d89816135fa565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612dfa9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061378f565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612e5184826137fc565b612dfa576040516001600160a01b03848116602483015260006044830152612e8691869182169063095ea7b390606401612dc8565b612dfa848261378f565b6040516303c2063f60e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001660848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260c4810182905260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f09060e401602060405180830381865af4158015612fd8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144c9190613bd9565b60008260000361300d575084610078565b81156130605761303e6130208487613b26565b61302a858761221b565b613034888a61221b565b6116859190613b26565b9050600061304c8588611da6565b90508082101561305a578091505b50610078565b82850361306f57506000610078565b61007561307c8487613b39565b6130868587612ac7565b613090888a61221b565b6116859190613b39565b600061009183670de0b6b3a764000084612ad8565b600060016001607f1b038211156117ef5760405163a5353be560e01b815260040160405180910390fd5b60035460009081906130f4906001600160801b03168461309a565b90506131207f000000000000000000000000000000000000000000000000000000000000000082613b26565b6002546001600160801b03161115611910576002547f00000000000000000000000000000000000000000000000000000000000000009061316b9083906001600160801b0316613b39565b6100919190613b39565b61317d6139f8565b6000806131898461168b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016131c49190613bca565b6040805180830381865af41580156131e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132049190613fcb565b9350905082613219575060009150611c1e9050565b600061323b61161684610160015185610140015161221b90919063ffffffff16565b61325b611616856101200151866101000151612ac790919063ffffffff16565b6132659190613d6f565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006132f08585612d1e565b613309613301866119b3868b61221b565b859085611819565b6100759190613b26565b600061331f8585612d1e565b613309613330866119b3868b612ac7565b859085612ad8565b6000806133888561338285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613378818c61309a565b6133829190613b39565b90612ac7565b91506133b4827f000000000000000000000000000000000000000000000000000000000000000061221b565b9050935093915050565b60008183136133cd5781610091565b5090919050565b60008082136133f65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134799084901c6117c5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361361557506000919050565b680755bf798b4a1bf1e5821261363e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612d8974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117c5565b60006137a46001600160a01b0384168361389f565b905080516000141580156137c95750808060200190518101906137c7919061406a565b155b156137f757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516138199190614087565b6000604051808303816000865af19150503d8060008114613856576040519150601f19603f3d011682016040523d82523d6000602084013e61385b565b606091505b5091509150818015613885575080511580613885575080806020019051810190613885919061406a565b80156100785750505050506001600160a01b03163b151590565b60606100918383600084600080856001600160a01b031684866040516138c59190614087565b60006040518083038185875af1925050503d8060008114613902576040519150601f19603f3d011682016040523d82523d6000602084013e613907565b606091505b5091509150612d89868383606082613927576139228261396e565b610091565b815115801561393e57506001600160a01b0384163b155b1561396757604051639996b31560e01b81526001600160a01b03851660048201526024016137ee565b5080610091565b80511561397e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613a0c613997565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561191057600080fd5b600080600080600060a08688031215613a7457600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613aa757600080fd5b613ab388828901613a4a565b9150509295509295909350565b600080600060608486031215613ad557600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613afa57600080fd5b613b0686828701613a4a565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561144c5761144c613b10565b8181038181111561144c5761144c613b10565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161144c8284613b4c565b600060208284031215613beb57600080fd5b5051919050565b6001600160a01b0381168114610c3a57600080fd5b600060208284031215613c1957600080fd5b813561009181613bf2565b8015158114610c3a57600080fd5b600060208284031215613c4457600080fd5b813561009181613c24565b6000808335601e19843603018112613c6657600080fd5b83018035915067ffffffffffffffff821115613c8157600080fd5b602001915036819003821315610d5757600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761144c5761144c613b10565b600080600060608486031215613d1657600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561193557611935613b10565b6001600160801b0381811683821601908082111561193557611935613b10565b818103600083128015838313168383128216171561193557611935613b10565b600060208284031215613da157600080fd5b815161009181613bf2565b8082018281126000831280158216821582161715613dcc57613dcc613b10565b505092915050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015613e05578181015183820152602001613ded565b50506000910152565b600061012060018060a01b038089511684528060208a01511660208501528060408a01511660408501528060608a0151166060850152608089015160808501528760a08501528660c085015280861660e08501525080610100840152835180828501526101409150613e868183860160208801613dea565b601f01601f1916929092019091019695505050505050565b60008060408385031215613eb157600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b600082613ee757613ee7613ec2565b500690565b6001600160801b0382811682821603908082111561193557611935613b10565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561144c5761144c613b10565b60006102a082019050613f4d828551613b4c565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000600160ff1b8201613fc457613fc4613b10565b5060000390565b60008060408385031215613fde57600080fd5b825191506020830151613ff081613c24565b809150509250929050565b6000806000806080858703121561401157600080fd5b845193506020850151925060408501519150606085015161403181613c24565b939692955090935050565b60008261404b5761404b613ec2565b600160ff1b82146000198414161561406557614065613b10565b500590565b60006020828403121561407c57600080fd5b815161009181613c24565b60008251614099818460208701613dea565b919091019291505056fea2646970667358221220e20289f2b922eab140168c23c75e7b438f473250139cf38400e0a6279d6aeb6064736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
