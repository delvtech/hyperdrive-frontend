export const MorphoBlueTarget4 = {
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6103206040523480156200001257600080fd5b5060405162003ace38038062003ace8339810160408190526200003591620005e4565b6001600081905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011c929062000126565b505050506200078a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001809085908390620001f216565b620001ec57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001e0918691620002a316565b620001ec8482620002a3565b50505050565b6000806000846001600160a01b03168460405162000211919062000735565b6000604051808303816000865af19150503d806000811462000250576040519150601f19603f3d011682016040523d82523d6000602084013e62000255565b606091505b5091509150818015620002835750805115806200028357508080602001905181019062000283919062000766565b80156200029a57506000856001600160a01b03163b115b95945050505050565b6000620002ba6001600160a01b0384168362000316565b90508051600014158015620002e2575080806020019051810190620002e0919062000766565b155b156200031157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000326838360006200032d565b9392505050565b606081471015620003545760405163cd78605960e01b815230600482015260240162000308565b600080856001600160a01b0316848660405162000372919062000735565b60006040518083038185875af1925050503d8060008114620003b1576040519150601f19603f3d011682016040523d82523d6000602084013e620003b6565b606091505b509092509050620003c9868383620003d3565b9695505050505050565b606082620003ec57620003e68262000437565b62000326565b81511580156200040457506001600160a01b0384163b155b156200042f57604051639996b31560e01b81526001600160a01b038516600482015260240162000308565b508062000326565b805115620004485780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200049657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200046157600080fd5b8051620004bf816200049c565b919050565b600060808284031215620004d757600080fd5b604051608081016001600160401b03811182821017156200050857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a082840312156200054c57600080fd5b60405160a081016001600160401b03811182821017156200057d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825162000592816200049c565b81526020830151620005a4816200049c565b60208201526040830151620005b9816200049c565b60408201526060830151620005ce816200049c565b6060820152608092830151920191909152919050565b6000806000838503610320811215620005fc57600080fd5b610260808212156200060d57600080fd5b6200061762000464565b91506200062486620004b2565b82526200063460208701620004b2565b60208301526200064760408701620004b2565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006b2818801620004b2565b90830152610180620006c6878201620004b2565b908301526101a0620006da878201620004b2565b908301526101c0620006ee878201620004b2565b908301526101e06200070388888301620004c4565b818401525081945062000718818701620004b2565b935050506200072c85610280860162000539565b90509250925092565b6000825160005b818110156200075857602081860181015185830152016200073c565b506000920191825250919050565b6000602082840312156200077957600080fd5b815180151581146200032657600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610300516131a16200092d600039600081816111b00152818161246a01526125a001526000818161118e01528181612448015261257101526000818161116c01528181612426015261254201526000818161114a015281816124040152612513015260008181611106015281816123c001526124aa0152600050506000505060006109c10152600050506000818161026d01526120a00152600081816118e60152818161194901528181611c8501528181611cc101528181611eb9015261207a01526000818161056f0152612054015260006114bb0152600061161601526000818161073301526115ea0152600050506000818161059001526120c601526000818161066b015261271a0152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb015261062301526000505060008181611128015281816123e201526124e401526131a16000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612c08565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612c5f565b6100b5565b005b610059610095366004612c08565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610ad0565b90935091506101266020850185612c96565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612cc1565b61017160408c018c612cde565b60405161018396959493929190612d4e565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610c13565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612d9e565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610e0e565b6102eb600360f81b6102e56020870187612c96565b88610ee8565b60006103066102fd6020870187612c96565b88848989610ad0565b90945090506103158188612dc8565b9250600061032283610f88565b5090506103326020870187612c96565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612cc1565b8a888e80604001906103829190612cde565b604051610396989796959493929190612ddb565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612c96565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a76400006110d4565b905090565b6000610421427f000000000000000000000000000000000000000000000000000000000000000061121b565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610ac8565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612e23565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a611238565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611259565b92505b506105c183611279565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612dc8565b8a846112a7565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612e23565b42906113e5565b846112a7565b61065e886113fa565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612dc8565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c61159e565b6000818152600b60205260408120549192508c8c831561080257600192506000806106eb86898d8660006115d3565b9150915080600960008282546107019190612e23565b9091555061071d905086600084610717816116a2565b886116cc565b6107278183612e23565b915061075786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611846565b915061076b6107668385611890565b6118a5565b6006805460029061078c9084906201000090046001600160701b0316612e36565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b982611279565b600680546010906107db908490600160801b90046001600160801b0316612e56565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f60018461159e565b6000818152600b6020526040902054909150801561091e576001945060008061083c838b8f8860016115d3565b9150915080600960008282546108529190612e23565b9091555061086e905083600084610868816116a2565b8a6118cf565b6108788183612dc8565b91506108876107668387611890565b600680546002906108a89084906201000090046001600160701b0316612e36565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d582611279565b600680546010906108f7908490600160801b90046001600160801b0316612e56565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a610930876116a2565b610939836116a2565b6109439190612e76565b6000611ac0565b8e6109558482610c13565b50505b600061096384610f88565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190612e96565b90506001600160a01b03811615610ab657610ab35a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611aff565b50505b509b9d50505050505050505050505050505b949350505050565b600080610adc85611b8a565b505060075485906001600160801b031680821115610b0157806001600160801b031691505b81600003610b16576000809250925050610c09565b610b25600360f81b8984610e0e565b600754600090610b4b9084906001600160801b03600160801b9091048116908516611b97565b9050610b5683611279565b610b609083612eb3565b600780546001600160801b0319166001600160801b0392909216919091179055610b8981611279565b60078054601090610bab908490600160801b90046001600160801b0316612eb3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bda818887611bb5565b9350610be68684611c4e565b841015610c065760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c5e916001600160801b031690612dc8565b905080600003610c72576001915050610e08565b6000610c7d85611c63565b905080600003610c9257600192505050610e08565b600080610ca0838589611cff565b9150915080610cb6576000945050505050610e08565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cf2929190612f51565b6040805180830381865af4158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190612fc7565b91509150610d50610d42826116a2565b610d4b90612feb565b611e73565b925082610d665760009650505050505050610e08565b610d6f82611279565b60078054600090610d8a9084906001600160801b0316612e56565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610db781611279565b60078054601090610dd9908490600160801b90046001600160801b0316612e56565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e94908490612dc8565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f1a908490612e23565b90915550506000838152600b602052604081208054839290610f3d908490612e23565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610edb565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb18761200b565b6040518263ffffffff1660e01b8152600401610fcd9190613007565b6040805180830381865af4158015610fe9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100d9190613016565b9150915080611023575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108991612e23565b6110939190612dc8565b9050806000036110ab57506000958695509350505050565b60008087116110bb5760006110c6565b6110c6848884611b97565b976001975095505050505050565b6040516303c2063f60e41b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f0906111da907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613046565b602060405180830381865af41580156111f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e089190613089565b60006112278284612d9e565b6112319084612dc8565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b612145565b60006112708261126a858888611b97565b9061216b565b95945050505050565b60006001600160801b038211156112a357604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112d35750505050565b6000848152600860205260408120546001600160801b03169081900361132d576112fc83611279565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556113ab565b61137e611379670de0b6b3a76400006113468886612dc8565b61135091906130a2565b85670de0b6b3a7640000611364878a612dc8565b61136e91906130a2565b8592919060016121e0565b611279565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6113b484611279565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116113f45782611231565b50919050565b600654600090819061141d908490600160801b90046001600160801b0316611890565b6006546201000090046001600160701b031692509050818111156115995760006114478383612dc8565b9050611456611379828661227e565b60068054601090611478908490600160801b90046001600160801b0316612eb3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114b1858361229390919063ffffffff16565b905060006114df827f0000000000000000000000000000000000000000000000000000000000000000611890565b905080600960008282546114f39190612e23565b9091555061150390508183612dc8565b915061150e82611279565b600280546000906115299084906001600160801b0316612e56565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611556826122a8565b6004805460009061156b908490600f0b6130b9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156115c85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806115e08785612293565b9150600061160e837f0000000000000000000000000000000000000000000000000000000000000000611890565b905061163a817f0000000000000000000000000000000000000000000000000000000000000000611890565b9150831561165d5761164c8282612dc8565b6116569084612dc8565b9250611674565b6116678282612dc8565b6116719084612e23565b92505b8686101561169757611687838789611b97565b9250611694828789611b97565b91505b509550959350505050565b60006001600160ff1b038211156112a35760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611715611379826116f8670de0b6b3a7640000866130a2565b600554600160801b90046001600160801b031691908a60006121e0565b600580546001600160801b03928316600160801b02921691909117905561173b86611279565b6117459082612eb3565b600480546001600160801b03928316600160801b02921691909117905561176b84611279565b600280546000906117869084906001600160801b0316612e56565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117b3836122d2565b600480546000906117c8908490600f0b6130b9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506117f885611279565b6002805460109061181a908490600160801b90046001600160801b0316612eb3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061185e846118588a888a611b97565b90612293565b905061186b888486611b97565b6118759082612e23565b9050868111156118855786810391505b509695505050505050565b60006112318383670de0b6b3a7640000611b97565b60006001600160701b038211156112a35760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061191157507f000000000000000000000000000000000000000000000000000000000000000061190f8583612dc8565b105b1561191e5761191e61230e565b6004549084900390600f0b6119338482612e76565b90508361193f866116a2565b13801561197457507f00000000000000000000000000000000000000000000000000000000000000006119728383612145565b105b156119815761198161230e565b600354600160801b90046001600160801b03166119c3611379826119ad670de0b6b3a7640000886130a2565b6005546001600160801b031691908c60006121e0565b600580546001600160801b0319166001600160801b03929092169190911790556119ed8882612dc8565b90506119f881611279565b600380546001600160801b03928316600160801b029216919091179055611a1e83611279565b600280546001600160801b0319166001600160801b0392909216919091179055611a47826122d2565b600480546001600160801b0319166001600160801b0392909216919091179055611a7087611279565b60028054601090611a92908490600160801b90046001600160801b0316612e56565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611adb90611379906001600160801b03168484612327565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611b2557611b256130e6565b6040519080825280601f01601f191660200182016040528015611b4f576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611b70578692505b828152826000602083013e90999098509650505050505050565b6000610e08826004610c13565b6000826000190484118302158202611bae57600080fd5b5091020490565b600080611bc28585611890565b9050611bcd8161238e565b945084600003611be1576000915050611231565b849150611bf46040840160208501612cc1565b15611c2357611c1c85611c0a6020860186612c96565b611c176040870187612cde565b612494565b9150611c46565b611c4685611c346020860186612c96565b611c416040870187612cde565b612690565b509392505050565b60006112318383670de0b6b3a76400006126a9565b6003546000908190611c7e906001600160801b03168461227e565b9050611caa7f000000000000000000000000000000000000000000000000000000000000000082612e23565b6002546001600160801b031611156113f4576002547f000000000000000000000000000000000000000000000000000000000000000090611cf59083906001600160801b0316612dc8565b6112319190612dc8565b611d07612b55565b600080611d138461200b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611d4e9190613007565b6040805180830381865af4158015611d6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8e9190613016565b9350905082611da35750600091506100ad9050565b6000611dca611dc584610160015185610140015161189090919063ffffffff16565b6116a2565b611dea611dc5856101200151866101000151611c4e90919063ffffffff16565b611df49190612e76565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611f2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f5091906130fc565b935093509350935080611f6c5750600098975050505050505050565b868414611f9d57611f7c84611279565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611fce57611fad836122d2565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611ffc57611fde82611279565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612013612ba7565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161210b91166126cf565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261213d929004166126cf565b905292915050565b6000806121528484612745565b9092509050806121645761216461230e565b5092915050565b6000816000036121845750670de0b6b3a7640000610e08565b8260000361219457506000610e08565b600061219f836116a2565b905060006121b46121af866116a2565b612784565b90508181026121cb670de0b6b3a76400008261313d565b90506121d6816129aa565b9695505050505050565b6000826000036121f1575084611270565b8115612244576122226122048487612e23565b61220e8587611890565b612218888a611890565b6118589190612e23565b9050600061223085886113e5565b90508082101561223e578091505b50611270565b82850361225357506000611270565b6121d66122608487612dc8565b61226a8587611c4e565b612274888a611890565b6118589190612dc8565b600061123183670de0b6b3a7640000846126a9565b600061123183670de0b6b3a764000084611b97565b600060016001607f1b038211156112a35760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806122f0575060016001607f1b0382135b156112a35760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b600080612335846000612b3f565b612340846000612b3f565b61234a9190612e76565b905060008113156123665761235f8186612e23565b9450612385565b60008112156123855761237881612feb565b6123829086612dc8565b94505b50929392505050565b6040516349124ca360e01b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca3906111da907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613046565b6000806124a0866110d4565b90508015612687577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c2bea496040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000008152506125cb896110d4565b604080516001600160e01b031960e086901b16815283516001600160a01b0390811660048301526020850151811660248301529184015182166044820152606084015182166064820152608090930151608484015260a4830191909152600060c48301523060e483015288166101048201526101240160408051808303816000875af115801561265f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126839190612fc7565b5091505b50949350505050565b60405163350b944160e11b815260040160405180910390fd5b60008260001904841183021582026126c057600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006126e3610426565b6126ed91906130a2565b90508083116126fd576000612707565b6127078184612dc8565b915061123161273e670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006130a2565b8390612293565b600080600083612754866116a2565b61275e9190612e76565b9050600081121561277657600080925092505061277d565b9150600190505b9250929050565b60008082136127a65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906128299084901c6116a2565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136129c557506000919050565b680755bf798b4a1bf1e582126129ee576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906121d674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6116a2565b6000818313612b4e5781611231565b5090919050565b604051806101200160405280612b69612ba7565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612c1d57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612c4257600080fd5b840160608187031215612c5457600080fd5b809150509250925092565b60008060408385031215612c7257600080fd5b50508035926020909101359150565b6001600160a01b038116811461040b57600080fd5b600060208284031215612ca857600080fd5b813561123181612c81565b801515811461040b57600080fd5b600060208284031215612cd357600080fd5b813561123181612cb3565b6000808335601e19843603018112612cf557600080fd5b83018035915067ffffffffffffffff821115612d1057600080fd5b60200191503681900382131561277d57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612d7c60a083018486612d25565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612dad57612dad612d88565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0857610e08612db2565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612e1560e083018486612d25565b9a9950505050505050505050565b80820180821115610e0857610e08612db2565b6001600160701b0381811683821601908082111561216457612164612db2565b6001600160801b0381811683821601908082111561216457612164612db2565b818103600083128015838313168383128216171561216457612164612db2565b600060208284031215612ea857600080fd5b815161123181612c81565b6001600160801b0382811682821603908082111561216457612164612db2565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612f65828551612ed3565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612fda57600080fd5b505080516020909101519092909150565b6000600160ff1b820161300057613000612db2565b5060000390565b6101808101610e088284612ed3565b6000806040838503121561302957600080fd5b82519150602083015161303b81612cb3565b809150509250929050565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b60006020828403121561309b57600080fd5b5051919050565b8082028115828204841417610e0857610e08612db2565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0857610e08612db2565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561311257600080fd5b845193506020850151925060408501519150606085015161313281612cb3565b939692955090935050565b60008261314c5761314c612d88565b600160ff1b82146000198414161561316657613166612db2565b50059056fea26469706673582212204a032d7be35c8eff2605ede54fed727cf8b46837916240d45631344a6555309364736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
