export const MorphoBlueTarget2 = {
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6103206040523480156200001257600080fd5b5060405162004b0638038062004b068339810160408190526200003591620005e4565b6001600081905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011c929062000126565b505050506200078a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001809085908390620001f216565b620001ec57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001e0918691620002a316565b620001ec8482620002a3565b50505050565b6000806000846001600160a01b03168460405162000211919062000735565b6000604051808303816000865af19150503d806000811462000250576040519150601f19603f3d011682016040523d82523d6000602084013e62000255565b606091505b5091509150818015620002835750805115806200028357508080602001905181019062000283919062000766565b80156200029a57506000856001600160a01b03163b115b95945050505050565b6000620002ba6001600160a01b0384168362000316565b90508051600014158015620002e2575080806020019051810190620002e0919062000766565b155b156200031157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000326838360006200032d565b9392505050565b606081471015620003545760405163cd78605960e01b815230600482015260240162000308565b600080856001600160a01b0316848660405162000372919062000735565b60006040518083038185875af1925050503d8060008114620003b1576040519150601f19603f3d011682016040523d82523d6000602084013e620003b6565b606091505b509092509050620003c9868383620003d3565b9695505050505050565b606082620003ec57620003e68262000437565b62000326565b81511580156200040457506001600160a01b0384163b155b156200042f57604051639996b31560e01b81526001600160a01b038516600482015260240162000308565b508062000326565b805115620004485780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200049657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200046157600080fd5b8051620004bf816200049c565b919050565b600060808284031215620004d757600080fd5b604051608081016001600160401b03811182821017156200050857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a082840312156200054c57600080fd5b60405160a081016001600160401b03811182821017156200057d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825162000592816200049c565b81526020830151620005a4816200049c565b60208201526040830151620005b9816200049c565b60408201526060830151620005ce816200049c565b6060820152608092830151920191909152919050565b6000806000838503610320811215620005fc57600080fd5b610260808212156200060d57600080fd5b6200061762000464565b91506200062486620004b2565b82526200063460208701620004b2565b60208301526200064760408701620004b2565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006b2818801620004b2565b90830152610180620006c6878201620004b2565b908301526101a0620006da878201620004b2565b908301526101c0620006ee878201620004b2565b908301526101e06200070388888301620004c4565b818401525081945062000718818701620004b2565b935050506200072c85610280860162000539565b90509250925092565b6000825160005b818110156200075857602081860181015185830152016200073c565b506000920191825250919050565b6000602082840312156200077957600080fd5b815180151581146200032657600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051614151620009b5600039600081816117f6015261279f0152600081816117c70152612778015260008181611798015261275001526000818161176901526127280152600081816116a30152818161170001526126d8015260005050600050506000610c410152600050506000818161010001528181610310015261306e0152600081816114d801528181611e4601528181611ea90152818161265b01528181612c5301528181612c8f01528181612e8701526130480152600081816107ef01528181610da101528181610de301528181610ed50152818161134b015281816113aa015261302201526000611a65015260008181611b8b015281816128bc0152818161293501526131880152600081816109b301528181610e560152818161144501528181611b5f0152612909015260008181610e3501528181612888015261314401526000818161081001528181610d7f01528181610e0401528181610ef601528181611329015281816113cb01526130940152600081816101de015281816103a8015281816108eb015261374e0152600081816106a9015281816107290152818161079f0152818161086b01526108a301526000505060008181611676015281816116d70152818161173a015261270001526141516000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613b04565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613b04565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610d50565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c89190613b79565b909155506101d99050844283610f32565b6102037f000000000000000000000000000000000000000000000000000000000000000085613b79565b98506102118389888c611070565b600061021e60018b61120a565b90506102378161023160208e018e613ba1565b8b61123f565b8d8a8a898e8561024a6020830183613ba1565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613bcc565b8961029560408a018a613be9565b6040516102a89796959493929190613c59565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112e7565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613b79565b90506000806000806103e08e89886112fa565b60098054949850929650909450925083916000906103ff908490613b79565b909155506104109050874283610f32565b50600061041e84898d611480565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b896114b2565b600061046860028861120a565b90508c6104828261047c6020840184613ba1565b8561123f565b858b86846104936020860186613ba1565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613bcc565b6104e4896104de8a8d613c9a565b90610683565b8d6104f260408e018e613be9565b604051610506989796959493929190613cad565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b60006105846020830183613ba1565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c26040850160208601613bcc565b156105e7576105dd856105d86040870187613be9565b611666565b90935090506105ff565b50346105ff856105fa6040870187613be9565b6118d3565b6106076112e7565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a76400006118ec565b90505b92915050565b60006106cd427f000000000000000000000000000000000000000000000000000000000000000061190a565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610d48565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b613b79565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da611920565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611941565b92505b5061084183611961565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613c9a565b8a84610f32565b6108d5896108cf6108c87f000000000000000000000000000000000000000000000000000000000000000083613b79565b429061198f565b84610f32565b6108de886119a4565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613c9a565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c61120a565b6000818152600b60205260408120549192508c8c8315610a82576001925060008061096b86898d866000611b48565b9150915080600960008282546109819190613b79565b9091555061099d90508660008461099781611c17565b88611c41565b6109a78183613b79565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611dbb565b91506109eb6109e68385610683565b611e05565b60068054600290610a0c9084906201000090046001600160701b0316613cf5565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3982611961565b60068054601090610a5b908490600160801b90046001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f60018461120a565b6000818152600b60205260409020549091508015610b9e5760019450600080610abc838b8f886001611b48565b915091508060096000828254610ad29190613b79565b90915550610aee905083600084610ae881611c17565b8a611e2f565b610af88183613c9a565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b0316613cf5565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b5582611961565b60068054601090610b77908490600160801b90046001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611c17565b610bb983611c17565b610bc39190613d35565b6000612020565b8e610bd5848261205f565b50505b6000610be384612259565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc19190613d55565b90506001600160a01b03811615610d3657610d335a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906123a5565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610d60611920565b600254909150610dc5908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612430565b600254909450610e28908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611941565b9150610e7f8785610e7a857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061245c565b6124c1565b15610e8c57610e8c612503565b610e988785888561251c565b91965094509250670de0b6b3a7640000610f1a610eb58784613b79565b600254610ed3908890600160801b90046001600160801b0316613c9a565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611941565b1115610f2857610f28612503565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f5e5750505050565b6000848152600860205260408120546001600160801b031690819003610fb857610f8783611961565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611036565b611009611004670de0b6b3a7640000610fd18886613c9a565b610fdb9190613d72565b85670de0b6b3a7640000610fef878a613c9a565b610ff99190613d72565b859291906001612568565b611961565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61103f84611961565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110b26110048261109c670de0b6b3a764000086613d72565b6005546001600160801b03169190886001612568565b600580546001600160801b0319166001600160801b03929092169190911790556110db85611961565b600280546000906110f69084906001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061112384611961565b60028054601090611145908490600160801b90046001600160801b0316613d89565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061117284611961565b61117c9082613d15565b600380546001600160801b03808416600160801b029116179055905060006111a383612610565b90506111c1816111b287611c17565b6111bc9084613da9565b612020565b6111ca84612654565b6111d6576111d6612503565b60006111e1856126b4565b90508061120157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112345760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290611271908490613b79565b90915550506000838152600b602052604081208054839290611294908490613b79565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a76400006126c1565b600080600080600061130a611920565b60025490915061136f908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f000000000000000000000000000000000000000000000000000000000000000061282d565b93508761137c858961284e565b111561138a5761138a612503565b60025460009081906113ef908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611941565b93506114058a670de0b6b3a7640000868c612863565b5091935090915061141890508183613c9a565b6114229087613c9a565b95508861146f816114698d611437868c613c9a565b8d6114428782612971565b877f0000000000000000000000000000000000000000000000000000000000000000612987565b9061284e565b975090945050505093509350935093565b60006114926040830160208401613bcc565b1561149e5750826114ab565b6114a884846129ac565b90505b9392505050565b6002546001600160801b0316838110156114ce576114ce612503565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611506908390600f0b6129c1565b101561151457611514612503565b60045461155e9061100490600160801b90046001600160801b0316611541670de0b6b3a764000086613d72565b600554600160801b90046001600160801b03169190896001612568565b600580546001600160801b03928316600160801b02921691909117905561158481611961565b600280546001600160801b0319166001600160801b03929092169190911790556115ad85611961565b600280546010906115cf908490600160801b90046001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115fc85611961565b6004805460109061161e908490600160801b90046001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061164d83612610565b90506111c18161165c88611c17565b6111bc9084613d35565b60008061169e6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886129e7565b6116fe7f00000000000000000000000000000000000000000000000000000000000000006116cd876001613b79565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612a54565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a99aad896040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081525087600030600067ffffffffffffffff81111561183657611836613dd1565b6040519080825280601f01601f191660200182016040528015611860576020820181803683370190505b506040518663ffffffff1660e01b8152600401611881959493929190613e0b565b60408051808303816000875af115801561189f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c39190613e9b565b925060009150505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b600082600019048411830215820261190357600080fd5b5091020490565b60006119168284613ed5565b6106989084613c9a565b6002546004546000916106cd916001600160801b0390911690600f0b6129c1565b6000611958826119528588886118ec565b90612ae4565b95945050505050565b60006001600160801b0382111561198b57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161199e5782610698565b50919050565b60065460009081906119c7908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611b435760006119f18383613c9a565b9050611a006110048286612b4f565b60068054601090611a22908490600160801b90046001600160801b0316613d89565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a5b85836129ac90919063ffffffff16565b90506000611a89827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060096000828254611a9d9190613b79565b90915550611aad90508183613c9a565b9150611ab882611961565b60028054600090611ad39084906001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b0082612b64565b60048054600090611b15908490600f0b613ee9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b5587856129ac565b91506000611b83837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611baf817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611bd257611bc18282613c9a565b611bcb9084613c9a565b9250611be9565b611bdc8282613c9a565b611be69084613b79565b92505b86861015611c0c57611bfc8387896118ec565b9250611c098287896118ec565b91505b509550959350505050565b60006001600160ff1b0382111561198b5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611c8a61100482611c6d670de0b6b3a764000086613d72565b600554600160801b90046001600160801b031691908a6000612568565b600580546001600160801b03928316600160801b029216919091179055611cb086611961565b611cba9082613d89565b600480546001600160801b03928316600160801b029216919091179055611ce084611961565b60028054600090611cfb9084906001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d2883612b8e565b60048054600090611d3d908490600f0b613ee9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d6d85611961565b60028054601090611d8f908490600160801b90046001600160801b0316613d89565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611dd384611dcd8a888a6118ec565b906129ac565b9050611de08884866118ec565b611dea9082613b79565b905086811115611dfa5786810391505b509695505050505050565b60006001600160701b0382111561198b5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611e7157507f0000000000000000000000000000000000000000000000000000000000000000611e6f8583613c9a565b105b15611e7e57611e7e612503565b6004549084900390600f0b611e938482613d35565b905083611e9f86611c17565b138015611ed457507f0000000000000000000000000000000000000000000000000000000000000000611ed283836129c1565b105b15611ee157611ee1612503565b600354600160801b90046001600160801b0316611f2361100482611f0d670de0b6b3a764000088613d72565b6005546001600160801b031691908c6000612568565b600580546001600160801b0319166001600160801b0392909216919091179055611f4d8882613c9a565b9050611f5881611961565b600380546001600160801b03928316600160801b029216919091179055611f7e83611961565b600280546001600160801b0319166001600160801b0392909216919091179055611fa782612b8e565b600480546001600160801b0319166001600160801b0392909216919091179055611fd087611961565b60028054601090611ff2908490600160801b90046001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461203b90611004906001600160801b03168484612bca565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916120aa916001600160801b031690613c9a565b9050806000036120be57600191505061069b565b60006120c985612c31565b9050806000036120de5760019250505061069b565b6000806120ec838589612ccd565b915091508061210257600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161213e929190613f94565b6040805180830381865af415801561215a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217e9190613e9b565b9150915061219c61218e82611c17565b6121979061400a565b612e41565b9250826121b2576000965050505050505061069b565b6121bb82611961565b600780546000906121d69084906001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061220381611961565b60078054601090612225908490600160801b90046001600160801b0316613d15565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61228287612fd9565b6040518263ffffffff1660e01b815260040161229e9190614026565b6040805180830381865af41580156122ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122de9190614035565b91509150806122f4575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161235a91613b79565b6123649190613c9a565b90508060000361237c57506000958695509350505050565b600080871161238c576000612397565b6123978488846118ec565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156123cb576123cb613dd1565b6040519080825280601f01601f1916602001820160405280156123f5576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612416578692505b828152826000602083013e90999098509650505050505050565b600061245187878761244a88670de0b6b3a7640000613c9a565b8787613113565b979650505050505050565b60006114a861249d61247684670de0b6b3a7640000613c9a565b611469670de0b6b3a764000061248c818a612b4f565b6124969190613c9a565b879061284e565b6124af90670de0b6b3a7640000613b79565b611dcd84670de0b6b3a7640000613c9a565b6000806124f8856124d0611920565b6124da9190613b79565b600254610ed3908790600160801b90046001600160801b0316613c9a565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600080600080600061252f898789613136565b909250905061253e8289613c9a565b9750600061254d82888a6118ec565b9050612559818b613c9a565b9a989950979650505050505050565b600082600003612579575084611958565b81156125cc576125aa61258c8487613b79565b6125968587610683565b6125a0888a610683565b611dcd9190613b79565b905060006125b8858861198f565b9050808210156125c6578091505b50611958565b8285036125db57506000611958565b6126066125e88487613c9a565b6125f2858761284e565b6125fc888a610683565b611dcd9190613c9a565b9695505050505050565b6000612638600b600061262460028661120a565b815260200190815260200160002054611c17565b61264a600b600061262460018761120a565b61069b9190613d35565b60006126807f00000000000000000000000000000000000000000000000000000000000000008361284e565b60035461269691906001600160801b0316613b79565b6002546126ac906001600160801b031684610683565b101592915050565b600061069b82600461205f565b6040516303c2063f60e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001660848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260c4810182905260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f09060e401602060405180830381865af4158015612809573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069b9190614065565b600061245187878761284788670de0b6b3a7640000613c9a565b87876131b6565b60006106988383670de0b6b3a76400006131c7565b60008080806128b487866128ad8b6114696128868c670de0b6b3a7640000613c9a565b7f00000000000000000000000000000000000000000000000000000000000000009061284e565b91906131c7565b93506128e0847f0000000000000000000000000000000000000000000000000000000000000000610683565b915060006129016128f989670de0b6b3a7640000613c9a565b8a90886131c7565b905061292d817f000000000000000000000000000000000000000000000000000000000000000061284e565b9350612959847f0000000000000000000000000000000000000000000000000000000000000000610683565b6129639084613b79565b915050945094509450949050565b60008183116129805781610698565b5090919050565b60008061299f846129998a888a6131c7565b90612b4f565b9050611de08884866131c7565b600061069883670de0b6b3a7640000846118ec565b6000806129ce84846131ed565b9092509050806129e0576129e0612503565b5092915050565b6040516001600160a01b038481166024830152838116604483015260648201839052612a4e9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613229565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612aa58482613296565b612a4e576040516001600160a01b03848116602483015260006044830152612ada91869182169063095ea7b390606401612a1c565b612a4e8482613229565b600081600003612afd5750670de0b6b3a764000061069b565b82600003612b0d5750600061069b565b6000612b1883611c17565b90506000612b2d612b2886611c17565b613339565b9050818102612b44670de0b6b3a76400008261407e565b90506126068161355f565b600061069883670de0b6b3a7640000846131c7565b600060016001607f1b0382111561198b5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612bac575060016001607f1b0382135b1561198b5760405163a5353be560e01b815260040160405180910390fd5b600080612bd88460006136f4565b612be38460006136f4565b612bed9190613d35565b90506000811315612c0957612c028186613b79565b9450612c28565b6000811215612c2857612c1b8161400a565b612c259086613c9a565b94505b50929392505050565b6003546000908190612c4c906001600160801b031684612b4f565b9050612c787f000000000000000000000000000000000000000000000000000000000000000082613b79565b6002546001600160801b0316111561199e576002547f000000000000000000000000000000000000000000000000000000000000000090612cc39083906001600160801b0316613c9a565b6114ab9190613c9a565b612cd5613a51565b600080612ce184612fd9565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d1c9190614026565b6040805180830381865af4158015612d38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5c9190614035565b9350905082612d715750600091506118cb9050565b6000612d98612d9384610160015185610140015161068390919063ffffffff16565b611c17565b612db8612d9385610120015186610100015161284e90919063ffffffff16565b612dc29190613d35565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612efa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f1e91906140ac565b935093509350935080612f3a5750600098975050505050505050565b868414612f6b57612f4a84611961565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612f9c57612f7b83612b8e565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612fca57612fac82611961565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612fe1613aa3565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916130d99116613703565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261310b92900416613703565b905292915050565b600080613124888888888888613779565b909250905080611dfa57611dfa612503565b6000806131808561146985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613176818c612b4f565b6114699190613c9a565b91506131ac827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b600080613124888888888888613841565b60008260001904841183021582026131de57600080fd5b50910281810615159190040190565b6000806000836131fc86611c17565b6132069190613d35565b9050600081121561321e57600080925092505061067c565b946001945092505050565b600061323e6001600160a01b03841683613901565b9050805160001415801561326357508080602001905181019061326191906140e2565b155b1561329157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516132b391906140ff565b6000604051808303816000865af19150503d80600081146132f0576040519150601f19603f3d011682016040523d82523d6000602084013e6132f5565b606091505b509150915081801561331f57508051158061331f57508080602001905181019061331f91906140e2565b80156119585750505050506001600160a01b03163b151590565b600080821361335b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133de9084901c611c17565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361357a57506000919050565b680755bf798b4a1bf1e582126135a3576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061260674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611c17565b60008183136129805781610698565b600080670de0b6b3a76400006137176106a1565b6137219190613d72565b905080831161373157600061373b565b61373b8184613c9a565b91506114ab613772670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d72565b83906129ac565b600080600061378b898988888861390f565b90506137a58661195261379e8a8d613b79565b8790610683565b98506137b2858a866118ec565b9850888110156137c9576000809250925050613836565b888103670de0b6b3a764000081106137fe576137f76137f0670de0b6b3a764000089612b4f565b8290612ae4565b9050613816565b6138136137f0670de0b6b3a7640000896129ac565b90505b8089101561382c57600080935093505050613836565b8803925060019150505b965096945050505050565b6000806000613853898988888861390f565b905061386386611952898b613b79565b97508781101561387a576000809250925050613836565b8781036138888186886131c7565b9050670de0b6b3a764000081106138b5576138ae6137f0670de0b6b3a764000089612b4f565b90506138cd565b6138ca6137f0670de0b6b3a7640000896129ac565b90505b6138d78186612b4f565b9050808a10156138ef57600080935093505050613836565b90980398600198509650505050505050565b60606106988383600061393e565b600061391b8585612ae4565b61393461392c86611952868b61284e565b8590856131c7565b6126069190613b79565b6060814710156139635760405163cd78605960e01b8152306004820152602401613288565b600080856001600160a01b0316848660405161397f91906140ff565b60006040518083038185875af1925050503d80600081146139bc576040519150601f19603f3d011682016040523d82523d6000602084013e6139c1565b606091505b50915091506126068683836060826139e1576139dc82613a28565b6114ab565b81511580156139f857506001600160a01b0384163b155b15613a2157604051639996b31560e01b81526001600160a01b0385166004820152602401613288565b50806114ab565b805115613a385780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613a65613aa3565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613b1a57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613b4657600080fd5b850160608188031215613b5857600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b613b63565b6001600160a01b03811681146105ab57600080fd5b600060208284031215613bb357600080fd5b81356114ab81613b8c565b80151581146105ab57600080fd5b600060208284031215613bde57600080fd5b81356114ab81613bbe565b6000808335601e19843603018112613c0057600080fd5b83018035915067ffffffffffffffff821115613c1b57600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613c8d60c083018486613c30565b9998505050505050505050565b8181038181111561069b5761069b613b63565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613ce760e083018486613c30565b9a9950505050505050505050565b6001600160701b038181168382160190808211156129e0576129e0613b63565b6001600160801b038181168382160190808211156129e0576129e0613b63565b81810360008312801583831316838312821617156129e0576129e0613b63565b600060208284031215613d6757600080fd5b81516114ab81613b8c565b808202811582820484141761069b5761069b613b63565b6001600160801b038281168282160390808211156129e0576129e0613b63565b8082018281126000831280158216821582161715613dc957613dc9613b63565b505092915050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015613e02578181015183820152602001613dea565b50506000910152565b600061012060018060a01b038089511684528060208a01511660208501528060408a01511660408501528060608a0151166060850152608089015160808501528760a08501528660c085015280861660e08501525080610100840152835180828501526101409150613e838183860160208801613de7565b601f01601f1916929092019091019695505050505050565b60008060408385031215613eae57600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b600082613ee457613ee4613ebf565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b613b63565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613fa8828551613f16565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000600160ff1b820161401f5761401f613b63565b5060000390565b610180810161069b8284613f16565b6000806040838503121561404857600080fd5b82519150602083015161405a81613bbe565b809150509250929050565b60006020828403121561407757600080fd5b5051919050565b60008261408d5761408d613ebf565b600160ff1b8214600019841416156140a7576140a7613b63565b500590565b600080600080608085870312156140c257600080fd5b8451935060208501519250604085015191506060850151613b5881613bbe565b6000602082840312156140f457600080fd5b81516114ab81613bbe565b60008251614111818460208701613de7565b919091019291505056fea2646970667358221220be68706845b89f24f711f3f77a8b6a0716b9d57c56e067eb9ee6cf6a763b4bc964736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
