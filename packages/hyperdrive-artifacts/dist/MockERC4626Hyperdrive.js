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
                    "name": "_adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x61032060405234801562000011575f80fd5b50604051620025c9380380620025c98339810160408190526200003491620006be565b60015f81905587516001600160a01b0390811660809081526020808b0151831660a0908152918b01516101a052908a01516101c05260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c01805151909252815190920151909152805160409081015161016052905160609081015161018052908a01518216610240528901516102605287166102205288908890889088908890889088908890889088908890889088908890889088906200010a898262000868565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e05281166103005260208b01518b5162000150955090911692509050600162000166565b5050505050505050505050505050505062000972565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001c090859083906200023116565b6200022b57604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021f918691620002db16565b6200022b8482620002db565b50505050565b5f805f846001600160a01b0316846040516200024e919062000934565b5f604051808303815f865af19150503d805f811462000289576040519150601f19603f3d011682016040523d82523d5f602084013e6200028e565b606091505b5091509150818015620002bc575080511580620002bc575080806020019051810190620002bc919062000951565b8015620002d257505f856001600160a01b03163b115b95945050505050565b5f620002f16001600160a01b038416836200034c565b905080515f141580156200031857508080602001905181019062000316919062000951565b155b156200034757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200035b83835f62000362565b9392505050565b606081471015620003895760405163cd78605960e01b81523060048201526024016200033e565b5f80856001600160a01b03168486604051620003a6919062000934565b5f6040518083038185875af1925050503d805f8114620003e2576040519150601f19603f3d011682016040523d82523d5f602084013e620003e7565b606091505b509092509050620003fa86838362000404565b9695505050505050565b6060826200041d57620004178262000468565b6200035b565b81511580156200043557506001600160a01b0384163b155b156200046057604051639996b31560e01b81526001600160a01b03851660048201526024016200033e565b50806200035b565b805115620004795780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b0381118282101715620004cc57620004cc62000492565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004fd57620004fd62000492565b604052919050565b5f5b838110156200052157818101518382015260200162000507565b50505f910152565b80516001600160a01b038116811462000540575f80fd5b919050565b5f6080828403121562000556575f80fd5b604051608081016001600160401b03811182821017156200057b576200057b62000492565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f6102608284031215620005be575f80fd5b620005c8620004a6565b9050620005d58262000529565b8152620005e56020830162000529565b6020820152620005f86040830162000529565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101606200066381840162000529565b908201526101806200067783820162000529565b908201526101a06200068b83820162000529565b908201526101c06200069f83820162000529565b908201526101e0620006b48484830162000545565b9082015292915050565b5f805f805f805f80610340898b031215620006d7575f80fd5b88516001600160401b0380821115620006ee575f80fd5b818b0191508b601f83011262000702575f80fd5b81518181111562000717576200071762000492565b6200072c601f8201601f1916602001620004d2565b91508082528c602082850101111562000743575f80fd5b6200075681602084016020860162000505565b5098506200076a90508a60208b01620005ac565b96506200077b6102808a0162000529565b95506200078c6102a08a0162000529565b94506200079d6102c08a0162000529565b9350620007ae6102e08a0162000529565b9250620007bf6103008a0162000529565b9150620007d06103208a0162000529565b90509295985092959890939650565b600181811c90821680620007f457607f821691505b6020821081036200081357634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200034757805f5260205f20601f840160051c81016020851015620008405750805b601f840160051c820191505b8181101562000861575f81556001016200084c565b5050505050565b81516001600160401b0381111562000884576200088462000492565b6200089c81620008958454620007df565b8462000819565b602080601f831160018114620008d2575f8415620008ba5750858301515b5f19600386901b1c1916600185901b1785556200092c565b5f85815260208120601f198616915b828110156200090257888601518255948401946001909101908401620008e1565b50858210156200092057878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f82516200094781846020870162000505565b9190910192915050565b5f6020828403121562000962575f80fd5b815180151581146200035b575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051611afb62000ace5f395f8181610646015281816106b001526107a701525f81816105ad015281816107d6015261083301525f818161056701526109f701525f8181610613015261074501525f81816101eb015281816103a301528181610681015281816106e20152818161071401528181610778015281816108090152818161087b015281816109b00152610a3801525f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f8181610cbc01528181610d3501528181610dc001528181610e0b01528181610eeb01528181611016015261104301525f8181610c8f01528181610cf001528181610e530152610f820152611afb5ff3fe6080604052600436106101d7575f3560e01c80639032c72611610101578063d899e11211610094578063e44808bc11610063578063e44808bc146105e3578063eac3e79914610602578063f3f7070714610635578063f698da2514610668576101d7565b8063d899e1121461059c578063daaa35fe146105cf578063dbbe807014610589578063ded06231146103dd576101d7565b8063a6e8a859116100d0578063a6e8a85914610556578063ab033ea9146102e0578063cba2e58d14610589578063cbc134341461031b576101d7565b80639032c726146104f95780639cd241af14610518578063a22cb465146104a8578063a314453114610537576101d7565b806330adf81f116101795780634ed2d6ac116101485780634ed2d6ac1461048e5780637180c8ca146104a857806377d05ff4146104c7578063829555d4146104da576101d7565b806330adf81f1461040a5780633e691db91461043d578063414f826d1461045c5780634c2ac1d91461047b576101d7565b806317fad7fc116101b557806317fad7fc146103545780631c0f12b61461037357806321b57d531461039257806329b23fc1146103dd576101d7565b806301681a62146102e057806302329a2914610301578063074a6de91461031b575b3480156101e2575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161022392919061144f565b5f60405180830381855af49150503d805f811461025b576040519150601f19603f3d011682016040523d82523d5f602084013e610260565b606091505b5091509150811561028457604051638bb0a34b60e01b815260040160405180910390fd5b5f61028e8261145e565b90506001600160e01b03198116636e64089360e11b146102b057815160208301fd5b8151600319810160048401908152926102d1918101602001906024016114cb565b80519650602001945050505050f35b3480156102eb575f80fd5b506102ff6102fa366004611587565b61067c565b005b34801561030c575f80fd5b506102ff6102fa3660046115af565b348015610326575f80fd5b5061033a6103353660046115da565b6106a9565b604080519283526020830191909152015b60405180910390f35b34801561035f575f80fd5b506102ff61036e366004611667565b6106dd565b34801561037e575f80fd5b506102ff61038d3660046116f6565b61070f565b34801561039d575f80fd5b506103c57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161034b565b3480156103e8575f80fd5b506103fc6103f736600461173b565b61073f565b60405190815260200161034b565b348015610415575f80fd5b506103fc7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b348015610448575f80fd5b506103fc610457366004611791565b610772565b348015610467575f80fd5b506102ff6104763660046117cb565b6107a2565b6103fc6104893660046117eb565b6107d0565b348015610499575f80fd5b506102ff61038d36600461184a565b3480156104b3575f80fd5b506102ff6104c2366004611891565b610804565b6103fc6104d53660046115da565b61082d565b3480156104e5575f80fd5b5061033a6104f43660046118c8565b61085f565b348015610504575f80fd5b506102ff61051336600461190c565b610877565b348015610523575f80fd5b506102ff610532366004611986565b6109ab565b348015610542575f80fd5b506103fc6105513660046115da565b6109da565b348015610561575f80fd5b506103c57f000000000000000000000000000000000000000000000000000000000000000081565b61033a61059736600461173b565b6109f0565b3480156105a7575f80fd5b506103c57f000000000000000000000000000000000000000000000000000000000000000081565b3480156105da575f80fd5b506103fc610a25565b3480156105ee575f80fd5b506102ff6105fd3660046119bb565b610a33565b34801561060d575f80fd5b506103c57f000000000000000000000000000000000000000000000000000000000000000081565b348015610640575f80fd5b506103c57f000000000000000000000000000000000000000000000000000000000000000081565b348015610673575f80fd5b506103fc610a64565b6106a57f0000000000000000000000000000000000000000000000000000000000000000610af2565b5050565b5f806106d47f0000000000000000000000000000000000000000000000000000000000000000610af2565b50935093915050565b6107067f0000000000000000000000000000000000000000000000000000000000000000610af2565b50505050505050565b6107387f0000000000000000000000000000000000000000000000000000000000000000610af2565b5050505050565b5f6107697f0000000000000000000000000000000000000000000000000000000000000000610af2565b50949350505050565b5f61079c7f0000000000000000000000000000000000000000000000000000000000000000610af2565b50919050565b6107cb7f0000000000000000000000000000000000000000000000000000000000000000610af2565b505050565b5f6107fa7f0000000000000000000000000000000000000000000000000000000000000000610af2565b5095945050505050565b6107cb7f0000000000000000000000000000000000000000000000000000000000000000610af2565b5f6108577f0000000000000000000000000000000000000000000000000000000000000000610af2565b509392505050565b5f8061086b8484610b10565b915091505b9250929050565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108ab610a64565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109549190611a16565b5f60405180830381855af49150503d805f811461098c576040519150601f19603f3d011682016040523d82523d5f602084013e610991565b606091505b5091509150816109a357805160208201fd5b805160208201f35b6109d47f0000000000000000000000000000000000000000000000000000000000000000610af2565b50505050565b5f6109e6848484610be0565b90505b9392505050565b5f80610a1b7f0000000000000000000000000000000000000000000000000000000000000000610af2565b5094509492505050565b5f610a2e610c6e565b905090565b610a5c7f0000000000000000000000000000000000000000000000000000000000000000610af2565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f3660405161095492919061144f565b815f80610b2360408501602086016115af565b15610b4857610b3e85610b396040870187611a31565b610c80565b9093509050610b60565b5034610b6085610b5b6040870187611a31565b610db3565b610b68610c6e565b91508015610bd8576040515f90339083908381818185875af1925050503d805f8114610baf576040519150601f19603f3d011682016040523d82523d5f602084013e610bb4565b606091505b5050905080610bd6576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b5f80610bec8585610de8565b9050610bf781610e05565b9450845f03610c09575f9150506109e9565b849150610c1c60408401602085016115af565b15610c4b57610c4485610c326020860186611587565b610c3f6040870187611a31565b610e30565b9150610857565b61085785610c5c6020860186611587565b610c696040870187611a31565b611009565b5f610a2e670de0b6b3a764000061103d565b5f80610cb76001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088611068565b610d177f0000000000000000000000000000000000000000000000000000000000000000610ce6876001611a74565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906110cf565b604051636e553f6560e01b8152600481018690523060248201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303815f875af1158015610d83573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610da79190611a93565b965f9650945050505050565b6107cb6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611068565b5f610dfc8383670de0b6b3a764000061115e565b90505b92915050565b5f610dff7f000000000000000000000000000000000000000000000000000000000000000083611179565b6040516370a0823160e01b81526001600160a01b0384811660048301525f9182917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610e98573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ebc9190611a93565b604051635d043b2960e11b8152600481018890526001600160a01b0387811660248301523060448301529192507f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303815f875af1158015610f33573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f579190611a93565b9150610f638282611a74565b6040516370a0823160e01b81526001600160a01b0387811660048301527f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610fc7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610feb9190611a93565b146107695760405163350b944160e11b815260040160405180910390fd5b6109d46001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866111e3565b5f610dff7f000000000000000000000000000000000000000000000000000000000000000083611214565b6040516001600160a01b0384811660248301528381166044830152606482018390526109d49186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611243565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261112084826112a9565b6109d4576040516001600160a01b0384811660248301525f604483015261115491869182169063095ea7b39060640161109d565b6109d48482611243565b5f825f190484118302158202611172575f80fd5b5091020490565b6040516363737ac960e11b8152600481018290525f906001600160a01b0384169063c6e6f592906024015b602060405180830381865afa1580156111bf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dfc9190611a93565b6040516001600160a01b038381166024830152604482018390526107cb91859182169063a9059cbb9060640161109d565b6040516303d1689d60e11b8152600481018290525f906001600160a01b038416906307a2d13a906024016111a4565b5f6112576001600160a01b0384168361134a565b905080515f1415801561127b5750808060200190518101906112799190611aaa565b155b156107cb57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f846001600160a01b0316846040516112c49190611a16565b5f604051808303815f865af19150503d805f81146112fd576040519150601f19603f3d011682016040523d82523d5f602084013e611302565b606091505b509150915081801561132c57508051158061132c57508080602001905181019061132c9190611aaa565b801561134157505f856001600160a01b03163b115b95945050505050565b6060610dfc83835f845f80856001600160a01b0316848660405161136e9190611a16565b5f6040518083038185875af1925050503d805f81146113a8576040519150601f19603f3d011682016040523d82523d5f602084013e6113ad565b606091505b50915091506113bd8683836113c7565b9695505050505050565b6060826113dc576113d782611423565b6109e9565b81511580156113f357506001600160a01b0384163b155b1561141c57604051639996b31560e01b81526001600160a01b03851660048201526024016112a0565b50806109e9565b8051156114335780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b818382375f9101908152919050565b805160208201516001600160e01b0319808216929190600483101561148d5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b838110156114c35781810151838201526020016114ab565b50505f910152565b5f602082840312156114db575f80fd5b815167ffffffffffffffff808211156114f2575f80fd5b818401915084601f830112611505575f80fd5b81518181111561151757611517611495565b604051601f8201601f19908116603f0116810190838211818310171561153f5761153f611495565b81604052828152876020848701011115611557575f80fd5b6115688360208301602088016114a9565b979650505050505050565b6001600160a01b038116811461144c575f80fd5b5f60208284031215611597575f80fd5b81356109e981611573565b801515811461144c575f80fd5b5f602082840312156115bf575f80fd5b81356109e9816115a2565b5f6060828403121561079c575f80fd5b5f805f606084860312156115ec575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115611610575f80fd5b61161c868287016115ca565b9150509250925092565b5f8083601f840112611636575f80fd5b50813567ffffffffffffffff81111561164d575f80fd5b6020830191508360208260051b8501011115610870575f80fd5b5f805f805f806080878903121561167c575f80fd5b863561168781611573565b9550602087013561169781611573565b9450604087013567ffffffffffffffff808211156116b3575f80fd5b6116bf8a838b01611626565b909650945060608901359150808211156116d7575f80fd5b506116e489828a01611626565b979a9699509497509295939492505050565b5f805f8060808587031215611709575f80fd5b84359350602085013561171b81611573565b9250604085013561172b81611573565b9396929550929360600135925050565b5f805f806080858703121561174e575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115611779575f80fd5b611785878288016115ca565b91505092959194509250565b5f602082840312156117a1575f80fd5b813567ffffffffffffffff8111156117b7575f80fd5b6117c3848285016115ca565b949350505050565b5f80604083850312156117dc575f80fd5b50508035926020909101359150565b5f805f805f60a086880312156117ff575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115611831575f80fd5b61183d888289016115ca565b9150509295509295909350565b5f805f806080858703121561185d575f80fd5b84359350602085013561186f81611573565b925060408501359150606085013561188681611573565b939692955090935050565b5f80604083850312156118a2575f80fd5b82356118ad81611573565b915060208301356118bd816115a2565b809150509250929050565b5f80604083850312156118d9575f80fd5b82359150602083013567ffffffffffffffff8111156118f6575f80fd5b611902858286016115ca565b9150509250929050565b5f805f805f805f60e0888a031215611922575f80fd5b873561192d81611573565b9650602088013561193d81611573565b9550604088013561194d816115a2565b945060608801359350608088013560ff81168114611969575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f805f60608486031215611998575f80fd5b8335925060208401356119aa81611573565b929592945050506040919091013590565b5f805f805f60a086880312156119cf575f80fd5b8535945060208601356119e181611573565b935060408601356119f181611573565b9250606086013591506080860135611a0881611573565b809150509295509295909350565b5f8251611a278184602087016114a9565b9190910192915050565b5f808335601e19843603018112611a46575f80fd5b83018035915067ffffffffffffffff821115611a60575f80fd5b602001915036819003821315610870575f80fd5b80820180821115610dff57634e487b7160e01b5f52601160045260245ffd5b5f60208284031215611aa3575f80fd5b5051919050565b5f60208284031215611aba575f80fd5b81516109e9816115a256fea26469706673582212207c231f2cb3620baef7f333a17ff482b4f7b89048663d79acd00d77967563590964736f6c63430008160033',
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
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
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
