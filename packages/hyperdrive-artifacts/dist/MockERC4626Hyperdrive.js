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
    bytecode: '0x6102e06040523480156200001257600080fd5b506040516200254538038062002545833981016040819052620000359162000718565b6001600081905585516001600160a01b039081166080908152602080890151831660a0908152918901516101a0908152918901516101c090815260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c0180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918c01518616610220528b015161024052918a0151600980549186166001600160a01b0319928316179055918a0151600a805491861691841691909117905591890151600b805491851691831691909117905590880151600c8054919093169116179055869086908690869086908690869086908690869086908690620001598782620008a7565b506001600160a01b03938416610260529183166102805282166102a05281166102c0526020880151885162000196945090911691506001620001a8565b505050505050505050505050620009b5565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200020290859083906200027416565b6200026e57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002629186916200032516565b6200026e848262000325565b50505050565b6000806000846001600160a01b03168460405162000293919062000973565b6000604051808303816000865af19150503d8060008114620002d2576040519150601f19603f3d011682016040523d82523d6000602084013e620002d7565b606091505b5091509150818015620003055750805115806200030557508080602001905181019062000305919062000991565b80156200031c57506000856001600160a01b03163b115b95945050505050565b60006200033c6001600160a01b0384168362000398565b905080516000141580156200036457508080602001905181019062000362919062000991565b155b156200039357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003a883836000620003af565b9392505050565b606081471015620003d65760405163cd78605960e01b81523060048201526024016200038a565b600080856001600160a01b03168486604051620003f4919062000973565b60006040518083038185875af1925050503d806000811462000433576040519150601f19603f3d011682016040523d82523d6000602084013e62000438565b606091505b5090925090506200044b86838362000455565b9695505050505050565b6060826200046e576200046882620004b9565b620003a8565b81511580156200048657506001600160a01b0384163b155b15620004b157604051639996b31560e01b81526001600160a01b03851660048201526024016200038a565b5080620003a8565b805115620004ca5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60405161020081016001600160401b03811182821017156200051f576200051f620004e3565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620005505762000550620004e3565b604052919050565b60005b83811015620005755781810151838201526020016200055b565b50506000910152565b80516001600160a01b03811681146200059657600080fd5b919050565b600060808284031215620005ae57600080fd5b604051608081016001600160401b0381118282101715620005d357620005d3620004e3565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200061857600080fd5b62000622620004f9565b90506200062f826200057e565b81526200063f602083016200057e565b602082015262000652604083016200057e565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100808301518183015250610120808301518183015250610140808301518183015250610160620006bd8184016200057e565b90820152610180620006d18382016200057e565b908201526101a0620006e58382016200057e565b908201526101c0620006f98382016200057e565b908201526101e06200070e848483016200059b565b9082015292915050565b60008060008060008061030087890312156200073357600080fd5b86516001600160401b03808211156200074b57600080fd5b818901915089601f8301126200076057600080fd5b815181811115620007755762000775620004e3565b6200078a601f8201601f191660200162000525565b91508082528a6020828501011115620007a257600080fd5b620007b581602084016020860162000558565b509650620007c99050886020890162000604565b9450620007da61028088016200057e565b9350620007eb6102a088016200057e565b9250620007fc6102c088016200057e565b91506200080d6102e088016200057e565b90509295509295509295565b600181811c908216806200082e57607f821691505b6020821081036200084f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200039357600081815260208120601f850160051c810160208610156200087e5750805b601f850160051c820191505b818110156200089f578281556001016200088a565b505050505050565b81516001600160401b03811115620008c357620008c3620004e3565b620008db81620008d4845462000819565b8462000855565b602080601f831160018114620009135760008415620008fa5750858301515b600019600386901b1c1916600185901b1785556200089f565b600085815260208120601f198616915b82811015620009445788860151825594840194600190910190840162000923565b5085821015620009635787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082516200098781846020870162000558565b9190910192915050565b600060208284031215620009a457600080fd5b81518015158114620003a857600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051611a3e62000b07600039600081816105dd015281816106b2015281816107ab015281816107db01526108390152600081816105960152610a040152600081816106460152610748015260008181610205015281816103c701528181610682015281816106e4015281816107160152818161077c0152818161080e01528181610883015281816109bb0152610a4601526000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610cdf01528181610d5901528181610de801528181610e4701528181610eea01528181610f6f0152610faf015260008181610cb20152610d130152611a3e6000f3fe6080604052600436106101ee5760003560e01c80639cd241af1161010d578063cbc13434116100a0578063ded062311161006f578063ded0623114610401578063e44808bc14610614578063e4af29d1146102fe578063eac3e79914610634578063f698da2514610668576101ee565b8063cbc134341461033b578063d899e112146105cb578063daaa35fe146105ff578063dbbe8070146105b8576101ee565b8063a5107626116100dc578063a5107626146102fe578063a6e8a85914610584578063ab033ea9146102fe578063cba2e58d146105b8576101ee565b80639cd241af14610544578063a22cb465146104d1578063a314453114610564578063a42dce80146102fe576101ee565b80633e691db9116101855780637180c8ca116101545780637180c8ca146104d157806377d05ff4146104f1578063829555d4146105045780639032c72614610524576101ee565b80633e691db914610463578063414f826d146104835780634c2ac1d9146104a35780634ed2d6ac146104b6576101ee565b80631c0f12b6116101c15780631c0f12b61461039557806321b57d53146103b557806329b23fc11461040157806330adf81f1461042f576101ee565b806301681a62146102fe57806302329a2914610320578063074a6de91461033b57806317fad7fc14610375575b3480156101fa57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161023d929190611341565b600060405180830381855af49150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b509150915081156102a157604051638bb0a34b60e01b815260040160405180910390fd5b60006102ac82611351565b90506001600160e01b03198116636e64089360e11b146102ce57815160208301fd5b8151600319810160048401908152926102ef918101602001906024016113c2565b80519650602001945050505050f35b34801561030a57600080fd5b5061031e610319366004611484565b61067d565b005b34801561032c57600080fd5b5061031e6103193660046114af565b34801561034757600080fd5b5061035b6103563660046114de565b6106aa565b604080519283526020830191909152015b60405180910390f35b34801561038157600080fd5b5061031e610390366004611573565b6106df565b3480156103a157600080fd5b5061031e6103b0366004611608565b610711565b3480156103c157600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161036c565b34801561040d57600080fd5b5061042161041c366004611650565b610741565b60405190815260200161036c565b34801561043b57600080fd5b506104217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561046f57600080fd5b5061042161047e3660046116aa565b610775565b34801561048f57600080fd5b5061031e61049e3660046116e7565b6107a6565b6104216104b1366004611709565b6107d4565b3480156104c257600080fd5b5061031e6103b036600461176d565b3480156104dd57600080fd5b5061031e6104ec3660046117b7565b610809565b6104216104ff3660046114de565b610832565b34801561051057600080fd5b5061035b61051f3660046117f0565b610865565b34801561053057600080fd5b5061031e61053f366004611837565b61087e565b34801561055057600080fd5b5061031e61055f3660046118b7565b6109b6565b34801561057057600080fd5b5061042161057f3660046114de565b6109e5565b34801561059057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b61035b6105c6366004611650565b6109fc565b3480156105d757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561060b57600080fd5b50610421610a32565b34801561062057600080fd5b5061031e61062f3660046118ef565b610a41565b34801561064057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561067457600080fd5b50610421610a72565b6106a67f0000000000000000000000000000000000000000000000000000000000000000610b00565b5050565b6000806106d67f0000000000000000000000000000000000000000000000000000000000000000610b00565b50935093915050565b6107087f0000000000000000000000000000000000000000000000000000000000000000610b00565b50505050505050565b61073a7f0000000000000000000000000000000000000000000000000000000000000000610b00565b5050505050565b600061076c7f0000000000000000000000000000000000000000000000000000000000000000610b00565b50949350505050565b60006107a07f0000000000000000000000000000000000000000000000000000000000000000610b00565b50919050565b6107cf7f0000000000000000000000000000000000000000000000000000000000000000610b00565b505050565b60006107ff7f0000000000000000000000000000000000000000000000000000000000000000610b00565b5095945050505050565b6107cf7f0000000000000000000000000000000000000000000000000000000000000000610b00565b600061085d7f0000000000000000000000000000000000000000000000000000000000000000610b00565b509392505050565b6000806108728484610b20565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108b3610a72565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161095c919061194e565b600060405180830381855af49150503d8060008114610997576040519150601f19603f3d011682016040523d82523d6000602084013e61099c565b606091505b5091509150816109ae57805160208201fd5b805160208201f35b6109df7f0000000000000000000000000000000000000000000000000000000000000000610b00565b50505050565b60006109f2848484610bf8565b90505b9392505050565b600080610a287f0000000000000000000000000000000000000000000000000000000000000000610b00565b5094509492505050565b6000610a3c610c8f565b905090565b610a6a7f0000000000000000000000000000000000000000000000000000000000000000610b00565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b031660003660405161095c929190611341565b60008080610b3460408501602086016114af565b15610b5957610b4f85610b4a604087018761196a565b610ca2565b9093509050610b75565b5034610b7185610b6c604087018761196a565b610ddb565b8492505b610b7d610c8f565b91508015610bf057604051600090339083908381818185875af1925050503d8060008114610bc7576040519150601f19603f3d011682016040523d82523d6000602084013e610bcc565b606091505b5050905080610bee576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610c058585610e10565b9050610c1081610e2e565b945084600003610c245760009150506109f5565b610c3460408401602085016114af565b15610c6357610c5c85610c4a6020860186611484565b610c57604087018761196a565b610ebb565b915061085d565b610c8685610c746020860186611484565b610c81604087018761196a565b610f62565b50929392505050565b6000610a3c670de0b6b3a7640000610f96565b600080610cda6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088610fe6565b610d3a7f0000000000000000000000000000000000000000000000000000000000000000610d098760016119b1565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061104d565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610daa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dce91906119d2565b9660009650945050505050565b6107cf6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086610fe6565b6000610e258383670de0b6b3a76400006110dd565b90505b92915050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024015b602060405180830381865afa158015610e97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2891906119d2565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015610f35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5991906119d2565b95945050505050565b6109df6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866110fb565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401610e7a565b6040516001600160a01b0384811660248301528381166044830152606482018390526109df9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061112c565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261109e8482611194565b6109df576040516001600160a01b038481166024830152600060448301526110d391869182169063095ea7b39060640161101b565b6109df848261112c565b60008260001904841183021582026110f457600080fd5b5091020490565b6040516001600160a01b038381166024830152604482018390526107cf91859182169063a9059cbb9060640161101b565b60006111416001600160a01b03841683611237565b9050805160001415801561116657508080602001905181019061116491906119eb565b155b156107cf57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516111b1919061194e565b6000604051808303816000865af19150503d80600081146111ee576040519150601f19603f3d011682016040523d82523d6000602084013e6111f3565b606091505b509150915081801561121d57508051158061121d57508080602001905181019061121d91906119eb565b8015610f595750505050506001600160a01b03163b151590565b6060610e258383600084600080856001600160a01b0316848660405161125d919061194e565b60006040518083038185875af1925050503d806000811461129a576040519150601f19603f3d011682016040523d82523d6000602084013e61129f565b606091505b50915091506112af8683836112b9565b9695505050505050565b6060826112ce576112c982611315565b6109f5565b81511580156112e557506001600160a01b0384163b155b1561130e57604051639996b31560e01b81526001600160a01b038516600482015260240161118b565b50806109f5565b8051156113255780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156113805780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156113b95781810151838201526020016113a1565b50506000910152565b6000602082840312156113d457600080fd5b815167ffffffffffffffff808211156113ec57600080fd5b818401915084601f83011261140057600080fd5b81518181111561141257611412611388565b604051601f8201601f19908116603f0116810190838211818310171561143a5761143a611388565b8160405282815287602084870101111561145357600080fd5b61146483602083016020880161139e565b979650505050505050565b6001600160a01b038116811461133e57600080fd5b60006020828403121561149657600080fd5b81356109f58161146f565b801515811461133e57600080fd5b6000602082840312156114c157600080fd5b81356109f5816114a1565b6000606082840312156107a057600080fd5b6000806000606084860312156114f357600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561151857600080fd5b611524868287016114cc565b9150509250925092565b60008083601f84011261154057600080fd5b50813567ffffffffffffffff81111561155857600080fd5b6020830191508360208260051b850101111561087757600080fd5b6000806000806000806080878903121561158c57600080fd5b86356115978161146f565b955060208701356115a78161146f565b9450604087013567ffffffffffffffff808211156115c457600080fd5b6115d08a838b0161152e565b909650945060608901359150808211156115e957600080fd5b506115f689828a0161152e565b979a9699509497509295939492505050565b6000806000806080858703121561161e57600080fd5b8435935060208501356116308161146f565b925060408501356116408161146f565b9396929550929360600135925050565b6000806000806080858703121561166657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561169257600080fd5b61169e878288016114cc565b91505092959194509250565b6000602082840312156116bc57600080fd5b813567ffffffffffffffff8111156116d357600080fd5b6116df848285016114cc565b949350505050565b600080604083850312156116fa57600080fd5b50508035926020909101359150565b600080600080600060a0868803121561172157600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561175457600080fd5b611760888289016114cc565b9150509295509295909350565b6000806000806080858703121561178357600080fd5b8435935060208501356117958161146f565b92506040850135915060608501356117ac8161146f565b939692955090935050565b600080604083850312156117ca57600080fd5b82356117d58161146f565b915060208301356117e5816114a1565b809150509250929050565b6000806040838503121561180357600080fd5b82359150602083013567ffffffffffffffff81111561182157600080fd5b61182d858286016114cc565b9150509250929050565b600080600080600080600060e0888a03121561185257600080fd5b873561185d8161146f565b9650602088013561186d8161146f565b9550604088013561187d816114a1565b945060608801359350608088013560ff8116811461189a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156118cc57600080fd5b8335925060208401356118de8161146f565b929592945050506040919091013590565b600080600080600060a0868803121561190757600080fd5b8535945060208601356119198161146f565b935060408601356119298161146f565b92506060860135915060808601356119408161146f565b809150509295509295909350565b6000825161196081846020870161139e565b9190910192915050565b6000808335601e1984360301811261198157600080fd5b83018035915067ffffffffffffffff82111561199c57600080fd5b60200191503681900382131561087757600080fd5b80820180821115610e2857634e487b7160e01b600052601160045260246000fd5b6000602082840312156119e457600080fd5b5051919050565b6000602082840312156119fd57600080fd5b81516109f5816114a156fea2646970667358221220b08ce7c1794aa6da505e2ff5dbd156590d3d2eaa1f10715b9666ed1dc29ae17f64736f6c63430008140033',
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
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "withdraw(uint256,uint256,(address,bool,bytes))": "a3144531"
    }
};
