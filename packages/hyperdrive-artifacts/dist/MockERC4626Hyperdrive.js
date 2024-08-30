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
        }
    ],
    bytecode: '0x6103206040523480156200001257600080fd5b506040516200256e3803806200256e8339810160408190526200003591620006d8565b6001600081905587516001600160a01b0390811660809081526020808b0151831660a0908152918b01516101a052908a01516101c05260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c01805151909252815190920151909152805160409081015161016052905160609081015161018052908a01518216610240528901516102605287166102205288908890889088908890889088908890889088908890889088908890889088906200010c898262000891565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e05281166103005260208b01518b5162000152955090911692509050600162000168565b505050505050505050505050505050506200099f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001c290859083906200023416565b6200022e57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000222918691620002e516565b6200022e8482620002e5565b50505050565b6000806000846001600160a01b0316846040516200025391906200095d565b6000604051808303816000865af19150503d806000811462000292576040519150601f19603f3d011682016040523d82523d6000602084013e62000297565b606091505b5091509150818015620002c5575080511580620002c5575080806020019051810190620002c591906200097b565b8015620002dc57506000856001600160a01b03163b115b95945050505050565b6000620002fc6001600160a01b0384168362000358565b90508051600014158015620003245750808060200190518101906200032291906200097b565b155b156200035357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000368838360006200036f565b9392505050565b606081471015620003965760405163cd78605960e01b81523060048201526024016200034a565b600080856001600160a01b03168486604051620003b491906200095d565b60006040518083038185875af1925050503d8060008114620003f3576040519150601f19603f3d011682016040523d82523d6000602084013e620003f8565b606091505b5090925090506200040b86838362000415565b9695505050505050565b6060826200042e57620004288262000479565b62000368565b81511580156200044657506001600160a01b0384163b155b156200047157604051639996b31560e01b81526001600160a01b03851660048201526024016200034a565b508062000368565b8051156200048a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60405161020081016001600160401b0381118282101715620004df57620004df620004a3565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620005105762000510620004a3565b604052919050565b60005b83811015620005355781810151838201526020016200051b565b50506000910152565b80516001600160a01b03811681146200055657600080fd5b919050565b6000608082840312156200056e57600080fd5b604051608081016001600160401b0381118282101715620005935762000593620004a3565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215620005d857600080fd5b620005e2620004b9565b9050620005ef826200053e565b8152620005ff602083016200053e565b602082015262000612604083016200053e565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101606200067d8184016200053e565b90820152610180620006918382016200053e565b908201526101a0620006a58382016200053e565b908201526101c0620006b98382016200053e565b908201526101e0620006ce848483016200055b565b9082015292915050565b600080600080600080600080610340898b031215620006f657600080fd5b88516001600160401b03808211156200070e57600080fd5b818b0191508b601f8301126200072357600080fd5b815181811115620007385762000738620004a3565b6200074d601f8201601f1916602001620004e5565b91508082528c60208285010111156200076557600080fd5b6200077881602084016020860162000518565b5098506200078c90508a60208b01620005c4565b96506200079d6102808a016200053e565b9550620007ae6102a08a016200053e565b9450620007bf6102c08a016200053e565b9350620007d06102e08a016200053e565b9250620007e16103008a016200053e565b9150620007f26103208a016200053e565b90509295985092959890939650565b600181811c908216806200081657607f821691505b6020821081036200083757634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000353576000816000526020600020601f850160051c81016020861015620008685750805b601f850160051c820191505b81811015620008895782815560010162000874565b505050505050565b81516001600160401b03811115620008ad57620008ad620004a3565b620008c581620008be845462000801565b846200083d565b602080601f831160018114620008fd5760008415620008e45750858301515b600019600386901b1c1916600185901b17855562000889565b600085815260208120601f198616915b828110156200092e578886015182559484019460019091019084016200090d565b50858210156200094d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082516200097181846020870162000518565b9190910192915050565b6000602082840312156200098e57600080fd5b815180151581146200036857600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051611a6a62000b0460003960008181610664015281816106d001526107c90152600081816105c7015281816107f901526108570152600081816105800152610a2201526000818161063001526107660152600081816101ef015281816103b1015281816106a001528181610702015281816107340152818161079a0152818161082c015281816108a1015281816109d90152610a640152600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610cf301528181610d6d01528181610dfc01528181610e4901528181610e9d01528181610f220152610f50015260008181610cc60152610d270152611a6a6000f3fe6080604052600436106101d85760003560e01c80639032c72611610102578063d899e11211610095578063e44808bc11610064578063e44808bc146105fe578063eac3e7991461061e578063f3f7070714610652578063f698da2514610686576101d8565b8063d899e112146105b5578063daaa35fe146105e9578063dbbe8070146105a2578063ded06231146103eb576101d8565b8063a6e8a859116100d1578063a6e8a8591461056e578063ab033ea9146102e8578063cba2e58d146105a2578063cbc1343414610325576101d8565b80639032c7261461050e5780639cd241af1461052e578063a22cb465146104bb578063a31445311461054e576101d8565b806330adf81f1161017a5780634ed2d6ac116101495780634ed2d6ac146104a05780637180c8ca146104bb57806377d05ff4146104db578063829555d4146104ee576101d8565b806330adf81f146104195780633e691db91461044d578063414f826d1461046d5780634c2ac1d91461048d576101d8565b806317fad7fc116101b657806317fad7fc1461035f5780631c0f12b61461037f57806321b57d531461039f57806329b23fc1146103eb576101d8565b806301681a62146102e857806302329a291461030a578063074a6de914610325575b3480156101e457600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161022792919061136d565b600060405180830381855af49150503d8060008114610262576040519150601f19603f3d011682016040523d82523d6000602084013e610267565b606091505b5091509150811561028b57604051638bb0a34b60e01b815260040160405180910390fd5b60006102968261137d565b90506001600160e01b03198116636e64089360e11b146102b857815160208301fd5b8151600319810160048401908152926102d9918101602001906024016113ee565b80519650602001945050505050f35b3480156102f457600080fd5b506103086103033660046114b0565b61069b565b005b34801561031657600080fd5b506103086103033660046114db565b34801561033157600080fd5b5061034561034036600461150a565b6106c8565b604080519283526020830191909152015b60405180910390f35b34801561036b57600080fd5b5061030861037a36600461159f565b6106fd565b34801561038b57600080fd5b5061030861039a366004611634565b61072f565b3480156103ab57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610356565b3480156103f757600080fd5b5061040b61040636600461167c565b61075f565b604051908152602001610356565b34801561042557600080fd5b5061040b7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045957600080fd5b5061040b6104683660046116d6565b610793565b34801561047957600080fd5b50610308610488366004611713565b6107c4565b61040b61049b366004611735565b6107f2565b3480156104ac57600080fd5b5061030861039a366004611799565b3480156104c757600080fd5b506103086104d63660046117e3565b610827565b61040b6104e936600461150a565b610850565b3480156104fa57600080fd5b5061034561050936600461181c565b610883565b34801561051a57600080fd5b50610308610529366004611863565b61089c565b34801561053a57600080fd5b506103086105493660046118e3565b6109d4565b34801561055a57600080fd5b5061040b61056936600461150a565b610a03565b34801561057a57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6103456105b036600461167c565b610a1a565b3480156105c157600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105f557600080fd5b5061040b610a50565b34801561060a57600080fd5b5061030861061936600461191b565b610a5f565b34801561062a57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b34801561065e57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b34801561069257600080fd5b5061040b610a90565b6106c47f0000000000000000000000000000000000000000000000000000000000000000610b1e565b5050565b6000806106f47f0000000000000000000000000000000000000000000000000000000000000000610b1e565b50935093915050565b6107267f0000000000000000000000000000000000000000000000000000000000000000610b1e565b50505050505050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610b1e565b5050505050565b600061078a7f0000000000000000000000000000000000000000000000000000000000000000610b1e565b50949350505050565b60006107be7f0000000000000000000000000000000000000000000000000000000000000000610b1e565b50919050565b6107ed7f0000000000000000000000000000000000000000000000000000000000000000610b1e565b505050565b600061081d7f0000000000000000000000000000000000000000000000000000000000000000610b1e565b5095945050505050565b6107ed7f0000000000000000000000000000000000000000000000000000000000000000610b1e565b600061087b7f0000000000000000000000000000000000000000000000000000000000000000610b1e565b509392505050565b6000806108908484610b3e565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108d1610a90565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161097a919061197a565b600060405180830381855af49150503d80600081146109b5576040519150601f19603f3d011682016040523d82523d6000602084013e6109ba565b606091505b5091509150816109cc57805160208201fd5b805160208201f35b6109fd7f0000000000000000000000000000000000000000000000000000000000000000610b1e565b50505050565b6000610a10848484610c12565b90505b9392505050565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b1e565b5094509492505050565b6000610a5a610ca3565b905090565b610a887f0000000000000000000000000000000000000000000000000000000000000000610b1e565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b031660003660405161097a92919061136d565b81600080610b5260408501602086016114db565b15610b7757610b6d85610b686040870187611996565b610cb6565b9093509050610b8f565b5034610b8f85610b8a6040870187611996565b610def565b610b97610ca3565b91508015610c0a57604051600090339083908381818185875af1925050503d8060008114610be1576040519150601f19603f3d011682016040523d82523d6000602084013e610be6565b606091505b5050905080610c08576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610c1f8585610e24565b9050610c2a81610e42565b945084600003610c3e576000915050610a13565b849150610c5160408401602085016114db565b15610c8057610c7985610c6760208601866114b0565b610c746040870187611996565b610e6e565b915061087b565b61087b85610c9160208601866114b0565b610c9e6040870187611996565b610f15565b6000610a5a670de0b6b3a7640000610f49565b600080610cee6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088610f75565b610d4e7f0000000000000000000000000000000000000000000000000000000000000000610d1d8760016119dd565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610fdc565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610dbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de291906119fe565b9660009650945050505050565b6107ed6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086610f75565b6000610e398383670de0b6b3a764000061106c565b90505b92915050565b6000610e3c7f00000000000000000000000000000000000000000000000000000000000000008361108a565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015610ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0c91906119fe565b95945050505050565b6109fd6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866110f7565b6000610e3c7f000000000000000000000000000000000000000000000000000000000000000083611128565b6040516001600160a01b0384811660248301528381166044830152606482018390526109fd9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611158565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261102d84826111c0565b6109fd576040516001600160a01b0384811660248301526000604483015261106291869182169063095ea7b390606401610faa565b6109fd8482611158565b600082600019048411830215820261108357600080fd5b5091020490565b6040516363737ac960e11b8152600481018290526000906001600160a01b0384169063c6e6f592906024015b602060405180830381865afa1580156110d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3991906119fe565b6040516001600160a01b038381166024830152604482018390526107ed91859182169063a9059cbb90606401610faa565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a906024016110b6565b600061116d6001600160a01b03841683611263565b905080516000141580156111925750808060200190518101906111909190611a17565b155b156107ed57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516111dd919061197a565b6000604051808303816000865af19150503d806000811461121a576040519150601f19603f3d011682016040523d82523d6000602084013e61121f565b606091505b50915091508180156112495750805115806112495750808060200190518101906112499190611a17565b8015610f0c5750505050506001600160a01b03163b151590565b6060610e398383600084600080856001600160a01b03168486604051611289919061197a565b60006040518083038185875af1925050503d80600081146112c6576040519150601f19603f3d011682016040523d82523d6000602084013e6112cb565b606091505b50915091506112db8683836112e5565b9695505050505050565b6060826112fa576112f582611341565b610a13565b815115801561131157506001600160a01b0384163b155b1561133a57604051639996b31560e01b81526001600160a01b03851660048201526024016111b7565b5080610a13565b8051156113515780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156113ac5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156113e55781810151838201526020016113cd565b50506000910152565b60006020828403121561140057600080fd5b815167ffffffffffffffff8082111561141857600080fd5b818401915084601f83011261142c57600080fd5b81518181111561143e5761143e6113b4565b604051601f8201601f19908116603f01168101908382118183101715611466576114666113b4565b8160405282815287602084870101111561147f57600080fd5b6114908360208301602088016113ca565b979650505050505050565b6001600160a01b038116811461136a57600080fd5b6000602082840312156114c257600080fd5b8135610a138161149b565b801515811461136a57600080fd5b6000602082840312156114ed57600080fd5b8135610a13816114cd565b6000606082840312156107be57600080fd5b60008060006060848603121561151f57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561154457600080fd5b611550868287016114f8565b9150509250925092565b60008083601f84011261156c57600080fd5b50813567ffffffffffffffff81111561158457600080fd5b6020830191508360208260051b850101111561089557600080fd5b600080600080600080608087890312156115b857600080fd5b86356115c38161149b565b955060208701356115d38161149b565b9450604087013567ffffffffffffffff808211156115f057600080fd5b6115fc8a838b0161155a565b9096509450606089013591508082111561161557600080fd5b5061162289828a0161155a565b979a9699509497509295939492505050565b6000806000806080858703121561164a57600080fd5b84359350602085013561165c8161149b565b9250604085013561166c8161149b565b9396929550929360600135925050565b6000806000806080858703121561169257600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156116be57600080fd5b6116ca878288016114f8565b91505092959194509250565b6000602082840312156116e857600080fd5b813567ffffffffffffffff8111156116ff57600080fd5b61170b848285016114f8565b949350505050565b6000806040838503121561172657600080fd5b50508035926020909101359150565b600080600080600060a0868803121561174d57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561178057600080fd5b61178c888289016114f8565b9150509295509295909350565b600080600080608085870312156117af57600080fd5b8435935060208501356117c18161149b565b92506040850135915060608501356117d88161149b565b939692955090935050565b600080604083850312156117f657600080fd5b82356118018161149b565b91506020830135611811816114cd565b809150509250929050565b6000806040838503121561182f57600080fd5b82359150602083013567ffffffffffffffff81111561184d57600080fd5b611859858286016114f8565b9150509250929050565b600080600080600080600060e0888a03121561187e57600080fd5b87356118898161149b565b965060208801356118998161149b565b955060408801356118a9816114cd565b945060608801359350608088013560ff811681146118c657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156118f857600080fd5b83359250602084013561190a8161149b565b929592945050506040919091013590565b600080600080600060a0868803121561193357600080fd5b8535945060208601356119458161149b565b935060408601356119558161149b565b925060608601359150608086013561196c8161149b565b809150509295509295909350565b6000825161198c8184602087016113ca565b9190910192915050565b6000808335601e198436030181126119ad57600080fd5b83018035915067ffffffffffffffff8211156119c857600080fd5b60200191503681900382131561089557600080fd5b80820180821115610e3c57634e487b7160e01b600052601160045260246000fd5b600060208284031215611a1057600080fd5b5051919050565b600060208284031215611a2957600080fd5b8151610a13816114cd56fea2646970667358221220eef9212422e22f88ac37b8feaf2be2f80d9bfec239692859c072d61a4f00a93264736f6c63430008160033',
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
