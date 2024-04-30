export const LsETHTarget0 = {
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
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "baseToken",
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
            "name": "batchTransferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "ids",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "values",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "collectGovernanceFee",
            "inputs": [
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
                    "name": "proceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "getCheckpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Checkpoint",
                    "components": [
                        {
                            "name": "vaultSharePrice",
                            "type": "uint128",
                            "internalType": "uint128"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getCheckpointExposure",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getMarketState",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.MarketState",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int128",
                            "internalType": "int128"
                        },
                        {
                            "name": "shortsOutstanding",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "longAverageMaturityTime",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "shortAverageMaturityTime",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "isInitialized",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isPaused",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "zombieBaseProceeds",
                            "type": "uint112",
                            "internalType": "uint112"
                        },
                        {
                            "name": "zombieShareReserves",
                            "type": "uint128",
                            "internalType": "uint128"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPoolConfig",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPoolInfo",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolInfo",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "zombieBaseProceeds",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "zombieShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longAverageMaturityTime",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortAverageMaturityTime",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesReadyToWithdraw",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesProceeds",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUncollectedGovernanceFees",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getWithdrawPool",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.WithdrawPool",
                    "components": [
                        {
                            "name": "readyToWithdraw",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "proceeds",
                            "type": "uint128",
                            "internalType": "uint128"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isApprovedForAll",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isPauser",
            "inputs": [
                {
                    "name": "_account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "load",
            "inputs": [
                {
                    "name": "_slots",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "nonces",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "pause",
            "inputs": [
                {
                    "name": "_status",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "perTokenApprovals",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permitForAll",
            "inputs": [
                {
                    "name": "domainSeparator",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "permitTypeHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
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
            "name": "setApproval",
            "inputs": [
                {
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
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
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "caller",
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
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "internalType": "bool"
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
                    "name": "_who",
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
                    "name": "_who",
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
                    "name": "who",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "status",
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
                    "name": "_who",
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
                    "name": "_target",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "totalSupply",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
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
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "caller",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "vaultSharesToken",
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
            "name": "version",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "fees",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
            "name": "BatchInputLengthMismatch",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpiredDeadline",
            "inputs": []
        },
        {
            "type": "error",
            "name": "FailedInnerCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidERC20Bridge",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidFeeDestination",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidPresentValue",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSignature",
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
            "name": "ReturnData",
            "inputs": [
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ]
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
            "name": "SweepFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "Unauthorized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b506040516200436a3803806200436a8339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051613f85620003e560003960008181610b580152611b11015260008181610b310152611ad4015260008181610bd20152611cc9015260008181610bac0152611ca3015260008181610b820152611c7d01526000610d0201526000610cdd01526000610cb801526000610c95015260008181610c450152611cef015260008181610bf801528181610e830152612384015260008181610c1e01526125c60152600081816105ad01528181610b05015281816120e8015281816122c5015281816125390152612598015260008181610ae00152610e2a0152613f856000f3fe608060405234801561001057600080fd5b50600436106102105760003560e01c806360246c8811610125578063becee9c3116100ad578063d81657431161007c578063d816574314610496578063e44808bc146104ab578063e4af29d1146104be578063e985e9c5146104d1578063fba56008146104e457600080fd5b8063becee9c314610453578063c55dae6314610473578063c69e16ad1461047b578063cf210e651461048357600080fd5b8063a22cb465116100f4578063a22cb465146103f2578063a42dce8014610405578063ab033ea914610418578063b0d965801461042b578063bd85b0391461044057600080fd5b806360246c88146103a45780637180c8ca146103b95780637ecebe00146103cc5780639cd241af146103df57600080fd5b806320fc4881116101a85780633e691db9116101775780633e691db91461034057806346fbf68e146103535780634e41a1fb146103765780634ed2d6ac1461038957806354fd4d501461039c57600080fd5b806320fc4881146102c757806321ff32a9146102f2578063313ce567146103135780633656eec21461032d57600080fd5b80630a4e1493116101e45780630a4e14931461026e57806314e5f07b1461028e57806317fad7fc146102a15780631c0f12b6146102b457600080fd5b8062ad800c1461021557806301681a621461023e57806302329a291461025357806306fdde0314610266575b600080fd5b6102286102233660046134a3565b610513565b604051610235919061350c565b60405180910390f35b61025161024c366004613534565b61054a565b005b61025161026136600461355f565b610556565b61022861055f565b61027661059f565b6040516001600160a01b039091168152602001610235565b61025161029c36600461357c565b6105df565b6102516102af366004613656565b6105fb565b6102516102c23660046136eb565b610611565b6102da6102d53660046134a3565b610624565b60405190516001600160801b03168152602001610235565b610305610300366004613733565b610665565b604051908152602001610235565b61031b6106ab565b60405160ff9091168152602001610235565b61030561033b366004613775565b6106c3565b61030561034e3660046137a5565b6106fc565b610366610361366004613534565b610707565b6040519015158152602001610235565b6102286103843660046134a3565b61073d565b6102516103973660046137e0565b61074b565b610228610799565b6103ac6107cd565b604051610235919061382a565b6102516103c73660046138cb565b6109fa565b6103056103da366004613534565b610a08565b6102516103ed3660046138f9565b610a34565b6102516104003660046138cb565b610a45565b610251610413366004613534565b610ab1565b610251610426366004613534565b610aba565b610433610ac3565b6040516102359190613931565b61030561044e3660046134a3565b610d3f565b610466610461366004613a45565b610d61565b6040516102359190613a87565b610276610e1c565b610305610e5c565b6103056104913660046134a3565b610e76565b61049e610ebf565b6040516102359190613acb565b6102516104b9366004613bdc565b610fcb565b6102516104cc366004613534565b611013565b6103666104df366004613c3b565b61101c565b6104ec611060565b6040805182516001600160801b039081168252602093840151169281019290925201610235565b6060610545610521836110bf565b604051602001610531919061350c565b6040516020818303038152906040526111e7565b919050565b6105538161120b565b50565b61055381611381565b606061059c6040518060400160405280600f81526020016e4c734554484879706572647269766560881b815250604051602001610531919061350c565b90565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161059c9101610531565b6105f0898989898989898989611404565b505050505050505050565b6106098686868686866115fb565b505050505050565b61061e84848484336116af565b50505050565b6040805160208101909152600081526105456007600084815260200190815260200160002060405160200161053191546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526106a49101610531565b9392505050565b604080516012602082015260009161059c9101610531565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526106f69101610531565b92915050565b60006106f682611870565b6001600160a01b0381166000908152600c60209081526040808320549051610545926105319260ff169101901515815260200190565b606061054561052183611998565b8361075581611a96565b6001600160a01b0316336001600160a01b03161461078657604051632aab8bd360e01b815260040160405180910390fd5b61079285858585611b53565b5050505050565b606061059c604051806040016040528060068152602001653b189718171960d11b815250604051602001610531919061350c565b610846604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610850611bc0565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108bb9190613c95565b6108c59190613ca8565b905060008083116108d75760006108f2565b6108f2836108ec6108e786611bd8565b611d6e565b90611d9e565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109c6576109c18486611db3565b6109c9565b60005b81526002546001600160801b03166020918201526040519192506109f3916105319184910161382a565b5050505090565b610a048282611dc8565b5050565b6001600160a01b0381166000908152601160209081526040808320548151928301526105459101610531565b610a4083838333611b53565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61055381611e51565b61055381611ec5565b610acb6133d3565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a0830191909152915161059c92610531929101613931565b6000818152600e60209081526040808320548151928301526105459101610531565b606060008267ffffffffffffffff811115610d7e57610d7e613cbb565b604051908082528060200260200182016040528015610da7578160200160208202803683370190505b50905060005b83811015610e00576000858583818110610dc957610dc9613cd1565b90506020020135905060008154905080848481518110610deb57610deb613cd1565b60209081029190910101525050600101610dad565b50610e15816040516020016105319190613a87565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161059c9101610531565b600061059c600b5460405160200161053191815260200190565b6000610545610ead610ea87f000000000000000000000000000000000000000000000000000000000000000085613c95565b611f39565b60405160200161053191815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261059c6001604051602001610531919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fd581611a96565b6001600160a01b0316336001600160a01b03161461100657604051632aab8bd360e01b815260040160405180910390fd5b61060986868686866116af565b61055381611f7d565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916106f69101610531565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261059c90606001610531565b606060f882901c6001600160f81b03831660006110db82611ff1565b905060008360038111156110f1576110f1613c69565b03611123576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111df565b600183600381111561113757611137613c69565b03611163578060405160200161114d9190613ce7565b60405160208183030381529060405293506111df565b600283600381111561117757611177613c69565b0361118d578060405160200161114d9190613d20565b60038360038111156111a1576111a1613c69565b036111df576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b8152600401611202919061350c565b60405180910390fd5b6112136120a6565b600954336000908152600c60205260409020546001600160a01b039091169060ff1615801561124b5750336001600160a01b03821614155b80156112625750600a546001600160a01b03163314155b1561127f576040516282b42960e81b815260040160405180910390fd5b60006112896120d0565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f79190613d5a565b905061130d6001600160a01b038516848361215b565b816113166120d0565b14611334576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105536001600055565b336000908152600c602052604090205460ff166113b0576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113f990831515815260200190565b60405180910390a150565b834211156114255760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661144c5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561153a573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461157857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061161857506001600160a01b038516155b156116365760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116565760405163174861a760e31b815260040160405180910390fd5b60005b838110156116a65761169e85858381811061167657611676613cd1565b90506020020135888886868681811061169157611691613cd1565b90506020020135336116af565b600101611659565b50505050505050565b6001600160a01b03841615806116cc57506001600160a01b038316155b156116ea5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146117ae576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117ae5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117ac5760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906117a6908490613ca8565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117e0908490613ca8565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611817908490613c95565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600061187a6120a6565b611883826121ad565b6008546001600160a01b03168061189d6020850185613534565b6001600160a01b0316146118c457604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118ed5750336001600160a01b03821614155b80156119045750600a546001600160a01b03163314155b15611921576040516282b42960e81b815260040160405180910390fd5b600061192b611bc0565b600b805460009091559091506119428183876121e3565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761197a86858961227d565b60405190815260200160405180910390a25050506105456001600055565b606060f882901c6001600160f81b03831660006119b482611ff1565b905060008360038111156119ca576119ca613c69565b036119fc576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111df565b6001836003811115611a1057611a10613c69565b03611a26578060405160200161114d9190613d73565b6002836003811115611a3a57611a3a613c69565b03611a50578060405160200161114d9190613dab565b6003836003811115611a6457611a64613c69565b036111df57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bd3670de0b6b3a76400006122ac565b905090565b611c3c6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d349116612339565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d6692900416612339565b905292915050565b6000806000611d7c846123af565b9150915080610e1557604051635516328b60e11b815260040160405180910390fd5b60006106a48383670de0b6b3a764000061243c565b60006106a483670de0b6b3a76400008461243c565b600a546001600160a01b03163314611df2576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e7b576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611eef576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f61600e6000611f4d60028661245a565b81526020019081526020016000205461248f565b611f73600e6000611f4d60018761245a565b6106f69190613dd7565b600a546001600160a01b03163314611fa7576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156120985761202c600a86613e0d565b612037906030613c95565b60f81b8260016120478487613ca8565b6120519190613ca8565b8151811061206157612061613cd1565b60200101906001600160f81b031916908160001a9053508061208281613e21565b91506120919050600a86613e3a565b945061201b565b918290030190815292915050565b6002600054036120c957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612137573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd39190613d5a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a409084906124bd565b60006121bc6020830183613534565b6001600160a01b0316036105535760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121f08585611d9e565b90506121fb81612520565b94508460000361220f5760009150506106a4565b61221f604084016020850161355f565b1561224e57612247856122356020860186613534565b6122426040870187613e4e565b612570565b9150612275565b6122718561225f6020860186613534565b61226c6040870187613e4e565b61258b565b8491505b509392505050565b600061228f604083016020840161355f565b1561229b5750826106a4565b6122a58484611d9e565b90506106a4565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f02906024015b602060405180830381865afa158015612315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190613d5a565b600080670de0b6b3a764000061234d6125bf565b6123579190613e95565b9050808311612367576000612371565b6123718184613ca8565b91506106a46123a8670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613e95565b8390611db3565b60008060008060006123c0866125f5565b91509150806123d757506000958695509350505050565b6123e48660a0015161248f565b6123ed8761292f565b836123fb896000015161248f565b6124059190613eac565b61240f9190613eac565b6124199190613dd7565b9250505060008112156124325750600093849350915050565b9360019350915050565b600082600019048411830215820261245357600080fd5b5091020490565b60006001600160f81b038211156124845760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124b95760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124d26001600160a01b03841683612993565b905080516000141580156124f75750808060200190518101906124f59190613ecc565b155b15610a4057604051635274afe760e01b81526001600160a01b0384166004820152602401611202565b604051631e66865560e21b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063799a1954906024016122f8565b600060405163350b944160e11b815260040160405180910390fd5b61061e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661215b565b60006125eb7f000000000000000000000000000000000000000000000000000000000000000042613e0d565b611bd39042613ca8565b600080600061261f61261a856101600151866101400151611d9e90919063ffffffff16565b61248f565b61263f61261a8661012001518761010001516129a190919063ffffffff16565b6126499190613dd7565b9050600080612660866000015187602001516129b6565b915091508061267757506000958695509350505050565b60008313156127c757600083905060006126c5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006126b69190613ca8565b8d606001518e608001516129f5565b93509050826126de575060009788975095505050505050565b81811061277c576000612718858a60400151858c60e00151670de0b6b3a76400006127099190613ca8565b8d606001518e60800151612b07565b945090508315801561272d57508860c0015183105b156127445750600098600198509650505050505050565b8361275a57506000988998509650505050505050565b6127638161248f565b61276c90613ee9565b9960019950975050505050505050565b60008860200151126127b35761279b8860a001518561261a9190613ca8565b6127a490613ee9565b98600198509650505050505050565b60a0880151885161279b9161261a91613ca8565b60008312156129205760006127db84613ee9565b9050600061280f8489604001518a60e00151670de0b6b3a76400006128009190613ca8565b8b606001518c60800151612bca565b9350905082612828575060009788975095505050505050565b8181106128ad576000612862858a60400151858c60e00151670de0b6b3a76400006128539190613ca8565b8d606001518e60800151612c76565b945090508315801561287757508860c0015183105b1561288e5750600098600198509650505050505050565b836128a457506000988998509650505050505050565b61276c8161248f565b60006128df858a604001518b60e00151670de0b6b3a76400006128d09190613ca8565b8c606001518d60800151612d4d565b94509050836128f957506000988998509650505050505050565b61276c6129168a6060015184866129109190613ca8565b90611db3565b61261a9083613c95565b50600095600195509350505050565b600061296261261a836101200151670de0b6b3a76400006129509190613ca8565b60608501516101008601519190612dfc565b611f7361261a846101600151670de0b6b3a76400006129819190613ca8565b6060860151610140870151919061243c565b60606106a483836000612e22565b60006106a48383670de0b6b3a7640000612dfc565b6000806000836129c58661248f565b6129cf9190613dd7565b905060008112156129e75760008092509250506129ee565b9150600190505b9250929050565b6000806000881215612a1757612a0a88613ee9565b612a149087613c95565b95505b600080612a248b8b6129b6565b9150915080612a3b57600080935093505050612afb565b6000612a4a838b8a8a8a612ebf565b90506000612a6d612a658a612a5f8a8e6129a1565b90612eee565b899089612dfc565b905080821015612a87576000809550955050505050612afb565b808203670de0b6b3a76400008110612abc57612ab5612aae670de0b6b3a76400008c611db3565b8290612eee565b9050612ad4565b612ad1612aae670de0b6b3a76400008c612f59565b90505b8b811015612aed57600080965096505050505050612afb565b8b9003955060019450505050505b97509795505050505050565b6000806000612b198989888888612f6e565b9050612b2986612a5f898b613c95565b975087811015612b40576000809250925050612bbf565b878103612b4e818688612dfc565b9050670de0b6b3a76400008110612b7b57612b74612aae670de0b6b3a764000089612f59565b9050612b93565b612b90612aae670de0b6b3a764000089611db3565b90505b612b9d8186612f59565b9050808a1015612bb557600080935093505050612bbf565b8903925060019150505b965096945050505050565b6000806000612bdc8888888888612f6e565b90506000612c07670de0b6b3a7640000612bf68888611db3565b612c009190613c95565b8390612f59565b9050670de0b6b3a76400008110612c3457612c2d612aae670de0b6b3a764000089612f59565b9050612c4c565b612c49612aae670de0b6b3a764000089611db3565b90505b80881015612c6257600080935093505050612c6c565b8703925060019150505b9550959350505050565b6000806000612c888989888888612f6e565b905086881015612c9f576000809250925050612bbf565b9686900396612cae8887612eee565b975087811015612cc5576000809250925050612bbf565b878103612cd3818688612dfc565b9050670de0b6b3a76400008110612d0057612cf9612aae670de0b6b3a764000089612f59565b9050612d18565b612d15612aae670de0b6b3a764000089611db3565b90505b612d228186612f59565b905089811015612d3a57600080935093505050612bbf565b9890980398600198509650505050505050565b6000806000612d5f8888888888612ebf565b90506000612d83670de0b6b3a7640000612d798888612f59565b6123a89190613c95565b9050670de0b6b3a76400008110612db057612da9612aae670de0b6b3a764000089611db3565b9050612dc8565b612dc5612aae670de0b6b3a764000089612f59565b90505b612dd28186611db3565b905088811015612dea57600080935093505050612c6c565b97909703976001975095505050505050565b6000826000190484118302158202612e1357600080fd5b50910281810615159190040190565b606081471015612e475760405163cd78605960e01b8152306004820152602401611202565b600080856001600160a01b03168486604051612e639190613f05565b60006040518083038185875af1925050503d8060008114612ea0576040519150601f19603f3d011682016040523d82523d6000602084013e612ea5565b606091505b5091509150612eb5868383612f93565b9695505050505050565b6000612ecb8585612eee565b612ee4612edc86612a5f868b611d9e565b85908561243c565b612eb59190613c95565b600081600003612f075750670de0b6b3a76400006106f6565b82600003612f17575060006106f6565b6000612f228361248f565b90506000612f37612f328661248f565b612fef565b9050818102612f4e670de0b6b3a764000082613f21565b9050612eb581613215565b60006106a483670de0b6b3a764000084612dfc565b6000612f7a8585612eee565b612ee4612f8b86612a5f868b6129a1565b859085612dfc565b606082612fa857612fa3826133aa565b6106a4565b8151158015612fbf57506001600160a01b0384163b155b15612fe857604051639996b31560e01b81526001600160a01b0385166004820152602401611202565b50806106a4565b60008082136130115760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130949084901c61248f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361323057506000919050565b680755bf798b4a1bf1e58212613259576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612eb574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61248f565b8051156133ba5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161349e6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156134b557600080fd5b5035919050565b60005b838110156134d75781810151838201526020016134bf565b50506000910152565b600081518084526134f88160208601602086016134bc565b601f01601f19169290920160200192915050565b6020815260006106a460208301846134e0565b6001600160a01b038116811461055357600080fd5b60006020828403121561354657600080fd5b81356106a48161351f565b801515811461055357600080fd5b60006020828403121561357157600080fd5b81356106a481613551565b60008060008060008060008060006101208a8c03121561359b57600080fd5b8935985060208a0135975060408a01356135b48161351f565b965060608a01356135c48161351f565b955060808a01356135d481613551565b945060a08a0135935060c08a013560ff811681146135f157600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261362357600080fd5b50813567ffffffffffffffff81111561363b57600080fd5b6020830191508360208260051b85010111156129ee57600080fd5b6000806000806000806080878903121561366f57600080fd5b863561367a8161351f565b9550602087013561368a8161351f565b9450604087013567ffffffffffffffff808211156136a757600080fd5b6136b38a838b01613611565b909650945060608901359150808211156136cc57600080fd5b506136d989828a01613611565b979a9699509497509295939492505050565b6000806000806080858703121561370157600080fd5b8435935060208501356137138161351f565b925060408501356137238161351f565b9396929550929360600135925050565b60008060006060848603121561374857600080fd5b83359250602084013561375a8161351f565b9150604084013561376a8161351f565b809150509250925092565b6000806040838503121561378857600080fd5b82359150602083013561379a8161351f565b809150509250929050565b6000602082840312156137b757600080fd5b813567ffffffffffffffff8111156137ce57600080fd5b8201606081850312156106a457600080fd5b600080600080608085870312156137f657600080fd5b8435935060208501356138088161351f565b925060408501359150606085013561381f8161351f565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156138de57600080fd5b82356138e98161351f565b9150602083013561379a81613551565b60008060006060848603121561390e57600080fd5b8335925060208401356139208161351f565b929592945050506040919091013590565b81516001600160a01b031681526102208101602083015161395d60208401826001600160a01b03169052565b50604083015161397860408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516139de828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613a5857600080fd5b823567ffffffffffffffff811115613a6f57600080fd5b613a7b85828601613611565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613abf57835183529284019291840191600101613aa3565b50909695505050505050565b81516001600160801b0316815261018081016020830151613af760208401826001600160801b03169052565b506040830151613b1260408401826001600160801b03169052565b506060830151613b2d60608401826001600160801b03169052565b506080830151613b426080840182600f0b9052565b5060a0830151613b5d60a08401826001600160801b03169052565b5060c0830151613b7860c08401826001600160801b03169052565b5060e0830151613b9360e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613a3d565b600080600080600060a08688031215613bf457600080fd5b853594506020860135613c068161351f565b93506040860135613c168161351f565b9250606086013591506080860135613c2d8161351f565b809150509295509295909350565b60008060408385031215613c4e57600080fd5b8235613c598161351f565b9150602083013561379a8161351f565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156106f6576106f6613c7f565b818103818111156106f6576106f6613c7f565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613d138160118501602087016134bc565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613d4d8160128501602087016134bc565b9190910160120192915050565b600060208284031215613d6c57600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613d9e8160108501602087016134bc565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613d138160118501602087016134bc565b8181036000831280158383131683831282161715610e1557610e15613c7f565b634e487b7160e01b600052601260045260246000fd5b600082613e1c57613e1c613df7565b500690565b600060018201613e3357613e33613c7f565b5060010190565b600082613e4957613e49613df7565b500490565b6000808335601e19843603018112613e6557600080fd5b83018035915067ffffffffffffffff821115613e8057600080fd5b6020019150368190038213156129ee57600080fd5b80820281158282048414176106f6576106f6613c7f565b8082018281126000831280158216821582161715613a3d57613a3d613c7f565b600060208284031215613ede57600080fd5b81516106a481613551565b6000600160ff1b8201613efe57613efe613c7f565b5060000390565b60008251613f178184602087016134bc565b9190910192915050565b600082613f3057613f30613df7565b600160ff1b821460001984141615613f4a57613f4a613c7f565b50059056fea26469706673582212201097e7a90571cd7adcd94be5568a3e94f7413661886e5c9d698a1c4fb8c25a8664736f6c63430008140033',
    methodIdentifiers: {
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "decimals()": "313ce567",
        "getCheckpoint(uint256)": "20fc4881",
        "getCheckpointExposure(uint256)": "cf210e65",
        "getMarketState()": "d8165743",
        "getPoolConfig()": "b0d96580",
        "getPoolInfo()": "60246c88",
        "getUncollectedGovernanceFees()": "c69e16ad",
        "getWithdrawPool()": "fba56008",
        "isApprovedForAll(address,address)": "e985e9c5",
        "isPauser(address)": "46fbf68e",
        "load(uint256[])": "becee9c3",
        "name()": "06fdde03",
        "name(uint256)": "00ad800c",
        "nonces(address)": "7ecebe00",
        "pause(bool)": "02329a29",
        "perTokenApprovals(uint256,address,address)": "21ff32a9",
        "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": "14e5f07b",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "setSweepCollector(address)": "e4af29d1",
        "sweep(address)": "01681a62",
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "vaultSharesToken()": "0a4e1493",
        "version()": "54fd4d50"
    }
};
