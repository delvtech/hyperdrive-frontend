export const MockERC4626Hyperdrive = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "__name",
                    "type": "string",
                    "internalType": "string"
                },
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
                    "name": "_target0",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target1",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target2",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target3",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target4",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "fallback",
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "PERMIT_TYPEHASH",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "batchTransferFrom",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "checkpoint",
            "inputs": [
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
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeLong",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "collectGovernanceFee",
            "inputs": [
                {
                    "name": "",
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
            "name": "deposit",
            "inputs": [
                {
                    "name": "_amount",
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
                    "name": "sharesMinted",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "domainSeparator",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "openLong",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "pause",
            "inputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "permitForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_approved",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "pricePerVaultShare",
            "inputs": [],
            "outputs": [
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "redeemWithdrawalShares",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "setApproval",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalBridge",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setCheckpointRewarder",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setFeeCollector",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setGovernance",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPauser",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setSweepCollector",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "sweep",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "target0",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target1",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target2",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target3",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target4",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFromBridge",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdraw",
            "inputs": [
                {
                    "name": "_shares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_sharePrice",
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
                    "name": "amountWithdrawn",
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
            "name": "FailedInnerCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ReentrancyGuardReentrantCall",
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
            "name": "UnexpectedSuccess",
            "inputs": []
        }
    ],
    bytecode: '0x6103006040523480156200001257600080fd5b50604051620025bf380380620025bf833981016040819052620000359162000725565b6001600081905586516001600160a01b0390811660809081526020808a0151831660a0908152918a01516101a0908152918a01516101c090815260c0808c01516101e090815260e0808e015161020052610120808f0151909352610100808f0151909152610140808f0151909152908d0180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918d01518616610220528c015161024052918b0151600980549186166001600160a01b0319928316179055918b0151600a8054918616918416919091179055918a0151600b805491851691831691909117905590890151600c8054919093169116179055879087908790879087908790879087908790879087908790879087906200015d8882620008c9565b506001600160a01b0394851661026052928416610280529083166102a05282166102c05281166102e05260208901518951620001a1945090911691506001620001b5565b5050505050505050505050505050620009d7565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200020f90859083906200028116565b6200027b57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200026f9186916200033216565b6200027b848262000332565b50505050565b6000806000846001600160a01b031684604051620002a0919062000995565b6000604051808303816000865af19150503d8060008114620002df576040519150601f19603f3d011682016040523d82523d6000602084013e620002e4565b606091505b50915091508180156200031257508051158062000312575080806020019051810190620003129190620009b3565b80156200032957506000856001600160a01b03163b115b95945050505050565b6000620003496001600160a01b03841683620003a5565b90508051600014158015620003715750808060200190518101906200036f9190620009b3565b155b15620003a057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003b583836000620003bc565b9392505050565b606081471015620003e35760405163cd78605960e01b815230600482015260240162000397565b600080856001600160a01b0316848660405162000401919062000995565b60006040518083038185875af1925050503d806000811462000440576040519150601f19603f3d011682016040523d82523d6000602084013e62000445565b606091505b5090925090506200045886838362000462565b9695505050505050565b6060826200047b576200047582620004c6565b620003b5565b81511580156200049357506001600160a01b0384163b155b15620004be57604051639996b31560e01b81526001600160a01b038516600482015260240162000397565b5080620003b5565b805115620004d75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60405161020081016001600160401b03811182821017156200052c576200052c620004f0565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200055d576200055d620004f0565b604052919050565b60005b838110156200058257818101518382015260200162000568565b50506000910152565b80516001600160a01b0381168114620005a357600080fd5b919050565b600060808284031215620005bb57600080fd5b604051608081016001600160401b0381118282101715620005e057620005e0620004f0565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200062557600080fd5b6200062f62000506565b90506200063c826200058b565b81526200064c602083016200058b565b60208201526200065f604083016200058b565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100808301518183015250610120808301518183015250610140808301518183015250610160620006ca8184016200058b565b90820152610180620006de8382016200058b565b908201526101a0620006f28382016200058b565b908201526101c0620007068382016200058b565b908201526101e06200071b84848301620005a8565b9082015292915050565b6000806000806000806000610320888a0312156200074257600080fd5b87516001600160401b03808211156200075a57600080fd5b818a0191508a601f8301126200076f57600080fd5b815181811115620007845762000784620004f0565b62000799601f8201601f191660200162000532565b91508082528b6020828501011115620007b157600080fd5b620007c481602084016020860162000565565b509750620007d890508960208a0162000611565b9550620007e961028089016200058b565b9450620007fa6102a089016200058b565b93506200080b6102c089016200058b565b92506200081c6102e089016200058b565b91506200082d61030089016200058b565b905092959891949750929550565b600181811c908216806200085057607f821691505b6020821081036200087157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003a057600081815260208120601f850160051c81016020861015620008a05750805b601f850160051c820191505b81811015620008c157828155600101620008ac565b505050505050565b81516001600160401b03811115620008e557620008e5620004f0565b620008fd81620008f684546200083b565b8462000877565b602080601f8311600181146200093557600084156200091c5750858301515b600019600386901b1c1916600185901b178555620008c1565b600085815260208120601f198616915b82811015620009665788860151825594840194600190910190840162000945565b5085821015620009855787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008251620009a981846020870162000565565b9190910192915050565b600060208284031215620009c657600080fd5b81518015158114620003b557600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051611a8b62000b3460003960008181610685015281816106f101526107ea0152600081816105e80152818161081a01526108780152600081816105a10152610a430152600081816106510152610787015260008181610210015281816103d2015281816106c10152818161072301528181610755015281816107bb0152818161084d015281816108c2015281816109fa0152610a8501526000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610d1401528181610d8e01528181610e1d01528181610e6a01528181610ebe01528181610f430152610f71015260008181610ce70152610d480152611a8b6000f3fe6080604052600436106101f95760003560e01c8063a22cb4651161010d578063d899e112116100a0578063e44808bc1161006f578063e44808bc1461061f578063e4af29d114610309578063eac3e7991461063f578063f3f7070714610673578063f698da25146106a7576101f9565b8063d899e112146105d6578063daaa35fe1461060a578063dbbe8070146105c3578063ded062311461040c576101f9565b8063a6e8a859116100dc578063a6e8a8591461058f578063ab033ea914610309578063cba2e58d146105c3578063cbc1343414610346576101f9565b8063a22cb465146104dc578063a31445311461056f578063a42dce8014610309578063a510762614610309576101f9565b80633e691db9116101905780637180c8ca1161015f5780637180c8ca146104dc57806377d05ff4146104fc578063829555d41461050f5780639032c7261461052f5780639cd241af1461054f576101f9565b80633e691db91461046e578063414f826d1461048e5780634c2ac1d9146104ae5780634ed2d6ac146104c1576101f9565b80631c0f12b6116101cc5780631c0f12b6146103a057806321b57d53146103c057806329b23fc11461040c57806330adf81f1461043a576101f9565b806301681a621461030957806302329a291461032b578063074a6de91461034657806317fad7fc14610380575b34801561020557600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161024892919061138e565b600060405180830381855af49150503d8060008114610283576040519150601f19603f3d011682016040523d82523d6000602084013e610288565b606091505b509150915081156102ac57604051638bb0a34b60e01b815260040160405180910390fd5b60006102b78261139e565b90506001600160e01b03198116636e64089360e11b146102d957815160208301fd5b8151600319810160048401908152926102fa9181016020019060240161140f565b80519650602001945050505050f35b34801561031557600080fd5b506103296103243660046114d1565b6106bc565b005b34801561033757600080fd5b506103296103243660046114fc565b34801561035257600080fd5b5061036661036136600461152b565b6106e9565b604080519283526020830191909152015b60405180910390f35b34801561038c57600080fd5b5061032961039b3660046115c0565b61071e565b3480156103ac57600080fd5b506103296103bb366004611655565b610750565b3480156103cc57600080fd5b506103f47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610377565b34801561041857600080fd5b5061042c61042736600461169d565b610780565b604051908152602001610377565b34801561044657600080fd5b5061042c7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561047a57600080fd5b5061042c6104893660046116f7565b6107b4565b34801561049a57600080fd5b506103296104a9366004611734565b6107e5565b61042c6104bc366004611756565b610813565b3480156104cd57600080fd5b506103296103bb3660046117ba565b3480156104e857600080fd5b506103296104f7366004611804565b610848565b61042c61050a36600461152b565b610871565b34801561051b57600080fd5b5061036661052a36600461183d565b6108a4565b34801561053b57600080fd5b5061032961054a366004611884565b6108bd565b34801561055b57600080fd5b5061032961056a366004611904565b6109f5565b34801561057b57600080fd5b5061042c61058a36600461152b565b610a24565b34801561059b57600080fd5b506103f47f000000000000000000000000000000000000000000000000000000000000000081565b6103666105d136600461169d565b610a3b565b3480156105e257600080fd5b506103f47f000000000000000000000000000000000000000000000000000000000000000081565b34801561061657600080fd5b5061042c610a71565b34801561062b57600080fd5b5061032961063a36600461193c565b610a80565b34801561064b57600080fd5b506103f47f000000000000000000000000000000000000000000000000000000000000000081565b34801561067f57600080fd5b506103f47f000000000000000000000000000000000000000000000000000000000000000081565b3480156106b357600080fd5b5061042c610ab1565b6106e57f0000000000000000000000000000000000000000000000000000000000000000610b3f565b5050565b6000806107157f0000000000000000000000000000000000000000000000000000000000000000610b3f565b50935093915050565b6107477f0000000000000000000000000000000000000000000000000000000000000000610b3f565b50505050505050565b6107797f0000000000000000000000000000000000000000000000000000000000000000610b3f565b5050505050565b60006107ab7f0000000000000000000000000000000000000000000000000000000000000000610b3f565b50949350505050565b60006107df7f0000000000000000000000000000000000000000000000000000000000000000610b3f565b50919050565b61080e7f0000000000000000000000000000000000000000000000000000000000000000610b3f565b505050565b600061083e7f0000000000000000000000000000000000000000000000000000000000000000610b3f565b5095945050505050565b61080e7f0000000000000000000000000000000000000000000000000000000000000000610b3f565b600061089c7f0000000000000000000000000000000000000000000000000000000000000000610b3f565b509392505050565b6000806108b18484610b5f565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108f2610ab1565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161099b919061199b565b600060405180830381855af49150503d80600081146109d6576040519150601f19603f3d011682016040523d82523d6000602084013e6109db565b606091505b5091509150816109ed57805160208201fd5b805160208201f35b610a1e7f0000000000000000000000000000000000000000000000000000000000000000610b3f565b50505050565b6000610a31848484610c33565b90505b9392505050565b600080610a677f0000000000000000000000000000000000000000000000000000000000000000610b3f565b5094509492505050565b6000610a7b610cc4565b905090565b610aa97f0000000000000000000000000000000000000000000000000000000000000000610b3f565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b031660003660405161099b92919061138e565b81600080610b7360408501602086016114fc565b15610b9857610b8e85610b8960408701876119b7565b610cd7565b9093509050610bb0565b5034610bb085610bab60408701876119b7565b610e10565b610bb8610cc4565b91508015610c2b57604051600090339083908381818185875af1925050503d8060008114610c02576040519150601f19603f3d011682016040523d82523d6000602084013e610c07565b606091505b5050905080610c29576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610c408585610e45565b9050610c4b81610e63565b945084600003610c5f576000915050610a34565b849150610c7260408401602085016114fc565b15610ca157610c9a85610c8860208601866114d1565b610c9560408701876119b7565b610e8f565b915061089c565b61089c85610cb260208601866114d1565b610cbf60408701876119b7565b610f36565b6000610a7b670de0b6b3a7640000610f6a565b600080610d0f6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088610f96565b610d6f7f0000000000000000000000000000000000000000000000000000000000000000610d3e8760016119fe565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610ffd565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610ddf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e039190611a1f565b9660009650945050505050565b61080e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086610f96565b6000610e5a8383670de0b6b3a764000061108d565b90505b92915050565b6000610e5d7f0000000000000000000000000000000000000000000000000000000000000000836110ab565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015610f09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2d9190611a1f565b95945050505050565b610a1e6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611118565b6000610e5d7f000000000000000000000000000000000000000000000000000000000000000083611149565b6040516001600160a01b038481166024830152838116604483015260648201839052610a1e9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611179565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261104e84826111e1565b610a1e576040516001600160a01b0384811660248301526000604483015261108391869182169063095ea7b390606401610fcb565b610a1e8482611179565b60008260001904841183021582026110a457600080fd5b5091020490565b6040516363737ac960e11b8152600481018290526000906001600160a01b0384169063c6e6f592906024015b602060405180830381865afa1580156110f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5a9190611a1f565b6040516001600160a01b0383811660248301526044820183905261080e91859182169063a9059cbb90606401610fcb565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a906024016110d7565b600061118e6001600160a01b03841683611284565b905080516000141580156111b35750808060200190518101906111b19190611a38565b155b1561080e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516111fe919061199b565b6000604051808303816000865af19150503d806000811461123b576040519150601f19603f3d011682016040523d82523d6000602084013e611240565b606091505b509150915081801561126a57508051158061126a57508080602001905181019061126a9190611a38565b8015610f2d5750505050506001600160a01b03163b151590565b6060610e5a8383600084600080856001600160a01b031684866040516112aa919061199b565b60006040518083038185875af1925050503d80600081146112e7576040519150601f19603f3d011682016040523d82523d6000602084013e6112ec565b606091505b50915091506112fc868383611306565b9695505050505050565b60608261131b5761131682611362565b610a34565b815115801561133257506001600160a01b0384163b155b1561135b57604051639996b31560e01b81526001600160a01b03851660048201526024016111d8565b5080610a34565b8051156113725780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156113cd5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156114065781810151838201526020016113ee565b50506000910152565b60006020828403121561142157600080fd5b815167ffffffffffffffff8082111561143957600080fd5b818401915084601f83011261144d57600080fd5b81518181111561145f5761145f6113d5565b604051601f8201601f19908116603f01168101908382118183101715611487576114876113d5565b816040528281528760208487010111156114a057600080fd5b6114b18360208301602088016113eb565b979650505050505050565b6001600160a01b038116811461138b57600080fd5b6000602082840312156114e357600080fd5b8135610a34816114bc565b801515811461138b57600080fd5b60006020828403121561150e57600080fd5b8135610a34816114ee565b6000606082840312156107df57600080fd5b60008060006060848603121561154057600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561156557600080fd5b61157186828701611519565b9150509250925092565b60008083601f84011261158d57600080fd5b50813567ffffffffffffffff8111156115a557600080fd5b6020830191508360208260051b85010111156108b657600080fd5b600080600080600080608087890312156115d957600080fd5b86356115e4816114bc565b955060208701356115f4816114bc565b9450604087013567ffffffffffffffff8082111561161157600080fd5b61161d8a838b0161157b565b9096509450606089013591508082111561163657600080fd5b5061164389828a0161157b565b979a9699509497509295939492505050565b6000806000806080858703121561166b57600080fd5b84359350602085013561167d816114bc565b9250604085013561168d816114bc565b9396929550929360600135925050565b600080600080608085870312156116b357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156116df57600080fd5b6116eb87828801611519565b91505092959194509250565b60006020828403121561170957600080fd5b813567ffffffffffffffff81111561172057600080fd5b61172c84828501611519565b949350505050565b6000806040838503121561174757600080fd5b50508035926020909101359150565b600080600080600060a0868803121561176e57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156117a157600080fd5b6117ad88828901611519565b9150509295509295909350565b600080600080608085870312156117d057600080fd5b8435935060208501356117e2816114bc565b92506040850135915060608501356117f9816114bc565b939692955090935050565b6000806040838503121561181757600080fd5b8235611822816114bc565b91506020830135611832816114ee565b809150509250929050565b6000806040838503121561185057600080fd5b82359150602083013567ffffffffffffffff81111561186e57600080fd5b61187a85828601611519565b9150509250929050565b600080600080600080600060e0888a03121561189f57600080fd5b87356118aa816114bc565b965060208801356118ba816114bc565b955060408801356118ca816114ee565b945060608801359350608088013560ff811681146118e757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561191957600080fd5b83359250602084013561192b816114bc565b929592945050506040919091013590565b600080600080600060a0868803121561195457600080fd5b853594506020860135611966816114bc565b93506040860135611976816114bc565b925060608601359150608086013561198d816114bc565b809150509295509295909350565b600082516119ad8184602087016113eb565b9190910192915050565b6000808335601e198436030181126119ce57600080fd5b83018035915067ffffffffffffffff8211156119e957600080fd5b6020019150368190038213156108b657600080fd5b80820180821115610e5d57634e487b7160e01b600052601160045260246000fd5b600060208284031215611a3157600080fd5b5051919050565b600060208284031215611a4a57600080fd5b8151610a34816114ee56fea264697066735822122075a8a37c289e5167b43f952714c7d53ce6a8a67d3cbaf44e97ca86571afd10d164736f6c63430008140033',
    methodIdentifiers: {
        "PERMIT_TYPEHASH()": "30adf81f",
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "checkpoint(uint256,uint256)": "414f826d",
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "deposit(uint256,(address,bool,bytes))": "829555d4",
        "domainSeparator()": "f698da25",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
        "pause(bool)": "02329a29",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
        "pricePerVaultShare()": "daaa35fe",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setCheckpointRewarder(address)": "a5107626",
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "setSweepCollector(address)": "e4af29d1",
        "sweep(address)": "01681a62",
        "target0()": "21b57d53",
        "target1()": "eac3e799",
        "target2()": "a6e8a859",
        "target3()": "d899e112",
        "target4()": "f3f70707",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "withdraw(uint256,uint256,(address,bool,bytes))": "a3144531"
    }
};
