export const EzETHTarget0 = {
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
                },
                {
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
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
            "name": "renzo",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "renzoOracle",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IRenzoOracle"
                }
            ],
            "stateMutability": "view"
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
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620049633803806200496383398101604081905262000035916200026c565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c05260c0808601516101e0526101008087015190915260e08087015190526101208087015190915291850180515190925281518101516101409081528251604090810151610160908152935160609081015161018090815282890151871661020052908801516102205291870151600a80549187166001600160a01b0319928316179055938701516008805491871691861691909117905590860151600980549186169190941617909255918316610240819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000157573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017d919062000389565b6001600160a01b03166102605250620003b0915050565b6040516101c081016001600160401b0381118282101715620001c657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001e257600080fd5b50565b8051620001f281620001cc565b919050565b6000608082840312156200020a57600080fd5b604051608081016001600160401b03811182821017156200023b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102408112156200028257600080fd5b610220808212156200029357600080fd5b6200029d62000194565b9150620002aa85620001e5565b8252620002ba60208601620001e5565b6020830152620002cd60408601620001e5565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200032c818701620001e5565b9083015261016062000340868201620001e5565b9083015261018062000354868201620001e5565b908301526101a06200036987878301620001f7565b81840152508193506200037e818601620001e5565b925050509250929050565b6000602082840312156200039c57600080fd5b8151620003a981620001cc565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051614470620004f360003960008181610aa80152818161248a0152612825015260008181610a2e0152818161235701526126f2015260008181610bfe0152611bb7015260008181610bd70152611b7a015260008181610c780152611d6f015260008181610c520152611d49015260008181610c280152611d2301526000610da801526000610d8301526000610d5e01526000610d3b015260008181610ceb0152611d95015260008181610c9e01528181610f290152612551015260008181610cc401526129110152600081816105d301528181610bab0152818161218e015281816123e30152818161277e015261289d015260008181610b860152610ed001526144706000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c80636a1a3f3d11610130578063bd85b039116100b8578063d81657431161007c578063d8165743146104bc578063e44808bc146104d1578063e4af29d1146104e4578063e985e9c5146104f7578063fba560081461050a57600080fd5b8063bd85b03914610466578063becee9c314610479578063c55dae6314610499578063c69e16ad146104a1578063cf210e65146104a957600080fd5b80639cd241af116100ff5780639cd241af14610405578063a22cb46514610418578063a42dce801461042b578063ab033ea91461043e578063b0d965801461045157600080fd5b80636a1a3f3d146103cf5780637180c8ca146103d75780637ecebe00146103ea578063892866a4146103fd57600080fd5b806321ff32a9116101b357806346fbf68e1161018257806346fbf68e146103695780634e41a1fb1461038c5780634ed2d6ac1461039f57806354fd4d50146103b257806360246c88146103ba57600080fd5b806321ff32a914610308578063313ce567146103295780633656eec2146103435780633e691db91461035657600080fd5b80630a4e1493116101fa5780630a4e14931461028457806314e5f07b146102a457806317fad7fc146102b75780631c0f12b6146102ca57806320fc4881146102dd57600080fd5b8062ad800c1461022b57806301681a621461025457806302329a291461026957806306fdde031461027c575b600080fd5b61023e6102393660046137ee565b610539565b60405161024b9190613857565b60405180910390f35b61026761026236600461387f565b610570565b005b6102676102773660046138aa565b61057c565b61023e610585565b61028c6105c5565b6040516001600160a01b03909116815260200161024b565b6102676102b23660046138c7565b610605565b6102676102c53660046139a1565b610621565b6102676102d8366004613a36565b610637565b6102f06102eb3660046137ee565b61064a565b60405190516001600160801b0316815260200161024b565b61031b610316366004613a7e565b61068b565b60405190815260200161024b565b6103316106d1565b60405160ff909116815260200161024b565b61031b610351366004613ac0565b6106e9565b61031b610364366004613af0565b610722565b61037c61037736600461387f565b61072d565b604051901515815260200161024b565b61023e61039a3660046137ee565b610763565b6102676103ad366004613b2b565b610771565b61023e6107bf565b6103c26107f3565b60405161024b9190613b75565b61028c610a20565b6102676103e5366004613c16565b610a60565b61031b6103f836600461387f565b610a6e565b61028c610a9a565b610267610413366004613c44565b610ada565b610267610426366004613c16565b610aeb565b61026761043936600461387f565b610b57565b61026761044c36600461387f565b610b60565b610459610b69565b60405161024b9190613c7c565b61031b6104743660046137ee565b610de5565b61048c610487366004613d90565b610e07565b60405161024b9190613dd2565b61028c610ec2565b61031b610f02565b61031b6104b73660046137ee565b610f1c565b6104c4610f65565b60405161024b9190613e16565b6102676104df366004613f27565b611071565b6102676104f236600461387f565b6110b9565b61037c610505366004613f86565b6110c2565b610512611106565b6040805182516001600160801b03908116825260209384015116928101929092520161024b565b606061056b61054783611165565b6040516020016105579190613857565b60405160208183030381529060405261128d565b919050565b610579816112b1565b50565b61057981611427565b60606105c26040518060400160405280600f81526020016e457a4554484879706572647269766560881b8152506040516020016105579190613857565b90565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105c29101610557565b6106168989898989898989896114aa565b505050505050505050565b61062f8686868686866116a1565b505050505050565b6106448484848433611755565b50505050565b60408051602081019091526000815261056b6007600084815260200190815260200160002060405160200161055791546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526106ca9101610557565b9392505050565b60408051601260208201526000916105c29101610557565b6000828152600d602090815260408083206001600160a01b038516845282528083205481519283015261071c9101610557565b92915050565b600061071c82611916565b6001600160a01b0381166000908152600c6020908152604080832054905161056b926105579260ff169101901515815260200190565b606061056b61054783611a3e565b8361077b81611b3c565b6001600160a01b0316336001600160a01b0316146107ac57604051632aab8bd360e01b815260040160405180910390fd5b6107b885858585611bf9565b5050505050565b60606105c2604051806040016040528060068152602001653b189718171960d11b8152506040516020016105579190613857565b61086c604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610876611c66565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108e19190613fe0565b6108eb9190613ff3565b905060008083116108fd576000610918565b6109188361091261090d86611c7e565b611e14565b90611e44565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109ec576109e78486611e59565b6109ef565b60005b81526002546001600160801b0316602091820152604051919250610a199161055791849101613b75565b5050505090565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105c29101610557565b610a6a8282611e6e565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261056b9101610557565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105c29101610557565b610ae683838333611bf9565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61057981611ef7565b61057981611f6b565b610b7161371e565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105c292610557929101613c7c565b6000818152600e602090815260408083205481519283015261056b9101610557565b606060008267ffffffffffffffff811115610e2457610e24614006565b604051908082528060200260200182016040528015610e4d578160200160208202803683370190505b50905060005b83811015610ea6576000858583818110610e6f57610e6f61401c565b90506020020135905060008154905080848481518110610e9157610e9161401c565b60209081029190910101525050600101610e53565b50610ebb816040516020016105579190613dd2565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105c29101610557565b60006105c2600b5460405160200161055791815260200190565b600061056b610f53610f4e7f000000000000000000000000000000000000000000000000000000000000000085613fe0565b611fdf565b60405160200161055791815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105c26001604051602001610557919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461107b81611b3c565b6001600160a01b0316336001600160a01b0316146110ac57604051632aab8bd360e01b815260040160405180910390fd5b61062f8686868686611755565b61057981612023565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff909116151591810191909152909161071c9101610557565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105c290606001610557565b606060f882901c6001600160f81b038316600061118182612097565b9050600083600381111561119757611197613fb4565b036111c9576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611285565b60018360038111156111dd576111dd613fb4565b0361120957806040516020016111f39190614032565b6040516020818303038152906040529350611285565b600283600381111561121d5761121d613fb4565b0361123357806040516020016111f3919061406b565b600383600381111561124757611247613fb4565b03611285576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016112a89190613857565b60405180910390fd5b6112b961214c565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156112f15750336001600160a01b03821614155b80156113085750600a546001600160a01b03163314155b15611325576040516282b42960e81b815260040160405180910390fd5b600061132f612176565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139d91906140a5565b90506113b36001600160a01b0385168483612201565b816113bc612176565b146113da576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105796001600055565b336000908152600c602052604090205460ff16611456576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061149f90831515815260200190565b60405180910390a150565b834211156114cb5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114f25760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156115e0573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461161e57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806116be57506001600160a01b038516155b156116dc5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116fc5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561174c5761174485858381811061171c5761171c61401c565b9050602002013588888686868181106117375761173761401c565b9050602002013533611755565b6001016116ff565b50505050505050565b6001600160a01b038416158061177257506001600160a01b038316155b156117905760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611854576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166118545760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146118525760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061184c908490613ff3565b90915550505b505b6000858152600d602090815260408083206001600160a01b038816845290915281208054849290611886908490613ff3565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906118bd908490613fe0565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600061192061214c565b61192982612253565b6008546001600160a01b031680611943602085018561387f565b6001600160a01b03161461196a57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156119935750336001600160a01b03821614155b80156119aa5750600a546001600160a01b03163314155b156119c7576040516282b42960e81b815260040160405180910390fd5b60006119d1611c66565b600b805460009091559091506119e8818387612289565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611a20868589612323565b60405190815260200160405180910390a250505061056b6001600055565b606060f882901c6001600160f81b0383166000611a5a82612097565b90506000836003811115611a7057611a70613fb4565b03611aa2576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611285565b6001836003811115611ab657611ab6613fb4565b03611acc57806040516020016111f391906140be565b6002836003811115611ae057611ae0613fb4565b03611af657806040516020016111f391906140f6565b6003836003811115611b0a57611b0a613fb4565b0361128557505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611c79670de0b6b3a7640000612352565b905090565b611ce26040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611dda9116612506565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611e0c92900416612506565b905292915050565b6000806000611e228461257c565b9150915080610ebb57604051635516328b60e11b815260040160405180910390fd5b60006106ca8383670de0b6b3a7640000612609565b60006106ca83670de0b6b3a764000084612609565b600a546001600160a01b03163314611e98576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611f21576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611f95576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000612007600e6000611ff3600286612627565b81526020019081526020016000205461265c565b612019600e6000611ff3600187612627565b61071c9190614122565b600a546001600160a01b0316331461204d576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561213e576120d2600a86614158565b6120dd906030613fe0565b60f81b8260016120ed8487613ff3565b6120f79190613ff3565b815181106121075761210761401c565b60200101906001600160f81b031916908160001a905350806121288161416c565b91506121379050600a86614185565b94506120c1565b918290030190815292915050565b60026000540361216f57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156121dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7991906140a5565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610ae690849061268a565b6000612262602083018361387f565b6001600160a01b0316036105795760405163f0dd15fd60e01b815260040160405180910390fd5b6000806122968585611e44565b90506122a1816126ed565b9450846000036122b55760009150506106ca565b6122c560408401602085016138aa565b156122f4576122ed856122db602086018661387f565b6122e86040870187614199565b61285c565b915061231b565b61231785612305602086018661387f565b6123126040870187614199565b612877565b8491505b509392505050565b600061233560408301602084016138aa565b156123415750826106ca565b61234b8484611e44565b90506106ca565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156123b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526123db91908101906142a0565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561243f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061246391906140a5565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa1580156124da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124fe91906140a5565b949350505050565b600080670de0b6b3a764000061251a61290a565b6125249190614380565b905080831161253457600061253e565b61253e8184613ff3565b91506106ca612575670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614380565b8390611e59565b600080600080600061258d86612940565b91509150806125a457506000958695509350505050565b6125b18660a0015161265c565b6125ba87612c7a565b836125c8896000015161265c565b6125d29190614397565b6125dc9190614397565b6125e69190614122565b9250505060008112156125ff5750600093849350915050565b9360019350915050565b600082600019048411830215820261262057600080fd5b5091020490565b60006001600160f81b038211156126515760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156126865760405163396ea70160e11b815260040160405180910390fd5b5090565b600061269f6001600160a01b03841683612cde565b905080516000141580156126c45750808060200190518101906126c291906143b7565b155b15610ae657604051635274afe760e01b81526001600160a01b03841660048201526024016112a8565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561274e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261277691908101906142a0565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156127da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fe91906140a5565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a906064016124bd565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156128e6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b891906143b7565b60006129367f000000000000000000000000000000000000000000000000000000000000000042614158565b611c799042613ff3565b600080600061296a612965856101600151866101400151611e4490919063ffffffff16565b61265c565b61298a612965866101200151876101000151612cec90919063ffffffff16565b6129949190614122565b90506000806129ab86600001518760200151612d01565b91509150806129c257506000958695509350505050565b6000831315612b125760008390506000612a10886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612a019190613ff3565b8d606001518e60800151612d40565b9350905082612a29575060009788975095505050505050565b818110612ac7576000612a63858a60400151858c60e00151670de0b6b3a7640000612a549190613ff3565b8d606001518e60800151612e52565b9450905083158015612a7857508860c0015183105b15612a8f5750600098600198509650505050505050565b83612aa557506000988998509650505050505050565b612aae8161265c565b612ab7906143d4565b9960019950975050505050505050565b6000886020015112612afe57612ae68860a00151856129659190613ff3565b612aef906143d4565b98600198509650505050505050565b60a08801518851612ae69161296591613ff3565b6000831215612c6b576000612b26846143d4565b90506000612b5a8489604001518a60e00151670de0b6b3a7640000612b4b9190613ff3565b8b606001518c60800151612f15565b9350905082612b73575060009788975095505050505050565b818110612bf8576000612bad858a60400151858c60e00151670de0b6b3a7640000612b9e9190613ff3565b8d606001518e60800151612fc1565b9450905083158015612bc257508860c0015183105b15612bd95750600098600198509650505050505050565b83612bef57506000988998509650505050505050565b612ab78161265c565b6000612c2a858a604001518b60e00151670de0b6b3a7640000612c1b9190613ff3565b8c606001518d60800151613098565b9450905083612c4457506000988998509650505050505050565b612ab7612c618a606001518486612c5b9190613ff3565b90611e59565b6129659083613fe0565b50600095600195509350505050565b6000612cad612965836101200151670de0b6b3a7640000612c9b9190613ff3565b60608501516101008601519190613147565b612019612965846101600151670de0b6b3a7640000612ccc9190613ff3565b60608601516101408701519190612609565b60606106ca8383600061316d565b60006106ca8383670de0b6b3a7640000613147565b600080600083612d108661265c565b612d1a9190614122565b90506000811215612d32576000809250925050612d39565b9150600190505b9250929050565b6000806000881215612d6257612d55886143d4565b612d5f9087613fe0565b95505b600080612d6f8b8b612d01565b9150915080612d8657600080935093505050612e46565b6000612d95838b8a8a8a61320a565b90506000612db8612db08a612daa8a8e612cec565b90613239565b899089613147565b905080821015612dd2576000809550955050505050612e46565b808203670de0b6b3a76400008110612e0757612e00612df9670de0b6b3a76400008c611e59565b8290613239565b9050612e1f565b612e1c612df9670de0b6b3a76400008c6132a4565b90505b8b811015612e3857600080965096505050505050612e46565b8b9003955060019450505050505b97509795505050505050565b6000806000612e6489898888886132b9565b9050612e7486612daa898b613fe0565b975087811015612e8b576000809250925050612f0a565b878103612e99818688613147565b9050670de0b6b3a76400008110612ec657612ebf612df9670de0b6b3a7640000896132a4565b9050612ede565b612edb612df9670de0b6b3a764000089611e59565b90505b612ee881866132a4565b9050808a1015612f0057600080935093505050612f0a565b8903925060019150505b965096945050505050565b6000806000612f2788888888886132b9565b90506000612f52670de0b6b3a7640000612f418888611e59565b612f4b9190613fe0565b83906132a4565b9050670de0b6b3a76400008110612f7f57612f78612df9670de0b6b3a7640000896132a4565b9050612f97565b612f94612df9670de0b6b3a764000089611e59565b90505b80881015612fad57600080935093505050612fb7565b8703925060019150505b9550959350505050565b6000806000612fd389898888886132b9565b905086881015612fea576000809250925050612f0a565b9686900396612ff98887613239565b975087811015613010576000809250925050612f0a565b87810361301e818688613147565b9050670de0b6b3a7640000811061304b57613044612df9670de0b6b3a7640000896132a4565b9050613063565b613060612df9670de0b6b3a764000089611e59565b90505b61306d81866132a4565b90508981101561308557600080935093505050612f0a565b9890980398600198509650505050505050565b60008060006130aa888888888861320a565b905060006130ce670de0b6b3a76400006130c488886132a4565b6125759190613fe0565b9050670de0b6b3a764000081106130fb576130f4612df9670de0b6b3a764000089611e59565b9050613113565b613110612df9670de0b6b3a7640000896132a4565b90505b61311d8186611e59565b90508881101561313557600080935093505050612fb7565b97909703976001975095505050505050565b600082600019048411830215820261315e57600080fd5b50910281810615159190040190565b6060814710156131925760405163cd78605960e01b81523060048201526024016112a8565b600080856001600160a01b031684866040516131ae91906143f0565b60006040518083038185875af1925050503d80600081146131eb576040519150601f19603f3d011682016040523d82523d6000602084013e6131f0565b606091505b50915091506132008683836132de565b9695505050505050565b60006132168585613239565b61322f61322786612daa868b611e44565b859085612609565b6132009190613fe0565b6000816000036132525750670de0b6b3a764000061071c565b826000036132625750600061071c565b600061326d8361265c565b9050600061328261327d8661265c565b61333a565b9050818102613299670de0b6b3a76400008261440c565b905061320081613560565b60006106ca83670de0b6b3a764000084613147565b60006132c58585613239565b61322f6132d686612daa868b612cec565b859085613147565b6060826132f3576132ee826136f5565b6106ca565b815115801561330a57506001600160a01b0384163b155b1561333357604051639996b31560e01b81526001600160a01b03851660048201526024016112a8565b50806106ca565b600080821361335c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133df9084901c61265c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361357b57506000919050565b680755bf798b4a1bf1e582126135a4576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061320074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61265c565b8051156137055780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016137e96040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561380057600080fd5b5035919050565b60005b8381101561382257818101518382015260200161380a565b50506000910152565b60008151808452613843816020860160208601613807565b601f01601f19169290920160200192915050565b6020815260006106ca602083018461382b565b6001600160a01b038116811461057957600080fd5b60006020828403121561389157600080fd5b81356106ca8161386a565b801515811461057957600080fd5b6000602082840312156138bc57600080fd5b81356106ca8161389c565b60008060008060008060008060006101208a8c0312156138e657600080fd5b8935985060208a0135975060408a01356138ff8161386a565b965060608a013561390f8161386a565b955060808a013561391f8161389c565b945060a08a0135935060c08a013560ff8116811461393c57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261396e57600080fd5b50813567ffffffffffffffff81111561398657600080fd5b6020830191508360208260051b8501011115612d3957600080fd5b600080600080600080608087890312156139ba57600080fd5b86356139c58161386a565b955060208701356139d58161386a565b9450604087013567ffffffffffffffff808211156139f257600080fd5b6139fe8a838b0161395c565b90965094506060890135915080821115613a1757600080fd5b50613a2489828a0161395c565b979a9699509497509295939492505050565b60008060008060808587031215613a4c57600080fd5b843593506020850135613a5e8161386a565b92506040850135613a6e8161386a565b9396929550929360600135925050565b600080600060608486031215613a9357600080fd5b833592506020840135613aa58161386a565b91506040840135613ab58161386a565b809150509250925092565b60008060408385031215613ad357600080fd5b823591506020830135613ae58161386a565b809150509250929050565b600060208284031215613b0257600080fd5b813567ffffffffffffffff811115613b1957600080fd5b8201606081850312156106ca57600080fd5b60008060008060808587031215613b4157600080fd5b843593506020850135613b538161386a565b9250604085013591506060850135613b6a8161386a565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613c2957600080fd5b8235613c348161386a565b91506020830135613ae58161389c565b600080600060608486031215613c5957600080fd5b833592506020840135613c6b8161386a565b929592945050506040919091013590565b81516001600160a01b0316815261022081016020830151613ca860208401826001600160a01b03169052565b506040830151613cc360408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613d29828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613da357600080fd5b823567ffffffffffffffff811115613dba57600080fd5b613dc68582860161395c565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613e0a57835183529284019291840191600101613dee565b50909695505050505050565b81516001600160801b0316815261018081016020830151613e4260208401826001600160801b03169052565b506040830151613e5d60408401826001600160801b03169052565b506060830151613e7860608401826001600160801b03169052565b506080830151613e8d6080840182600f0b9052565b5060a0830151613ea860a08401826001600160801b03169052565b5060c0830151613ec360c08401826001600160801b03169052565b5060e0830151613ede60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613d88565b600080600080600060a08688031215613f3f57600080fd5b853594506020860135613f518161386a565b93506040860135613f618161386a565b9250606086013591506080860135613f788161386a565b809150509295509295909350565b60008060408385031215613f9957600080fd5b8235613fa48161386a565b91506020830135613ae58161386a565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561071c5761071c613fca565b8181038181111561071c5761071c613fca565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161405e816011850160208701613807565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251614098816012850160208701613807565b9190910160120192915050565b6000602082840312156140b757600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516140e9816010850160208701613807565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161405e816011850160208701613807565b8181036000831280158383131683831282161715610ebb57610ebb613fca565b634e487b7160e01b600052601260045260246000fd5b60008261416757614167614142565b500690565b60006001820161417e5761417e613fca565b5060010190565b60008261419457614194614142565b500490565b6000808335601e198436030181126141b057600080fd5b83018035915067ffffffffffffffff8211156141cb57600080fd5b602001915036819003821315612d3957600080fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561420957614209614006565b604052919050565b600067ffffffffffffffff82111561422b5761422b614006565b5060051b60200190565b600082601f83011261424657600080fd5b8151602061425b61425683614211565b6141e0565b82815260059290921b8401810191818101908684111561427a57600080fd5b8286015b84811015614295578051835291830191830161427e565b509695505050505050565b6000806000606084860312156142b557600080fd5b835167ffffffffffffffff808211156142cd57600080fd5b818601915086601f8301126142e157600080fd5b815160206142f161425683614211565b82815260059290921b8401810191818101908a84111561431057600080fd5b8286015b848110156143485780518681111561432c5760008081fd5b61433a8d86838b0101614235565b845250918301918301614314565b509189015191975090935050508082111561436257600080fd5b5061436f86828701614235565b925050604084015190509250925092565b808202811582820484141761071c5761071c613fca565b8082018281126000831280158216821582161715613d8857613d88613fca565b6000602082840312156143c957600080fd5b81516106ca8161389c565b6000600160ff1b82016143e9576143e9613fca565b5060000390565b60008251614402818460208701613807565b9190910192915050565b60008261441b5761441b614142565b600160ff1b82146000198414161561443557614435613fca565b50059056fea264697066735822122026cee1d2756ea3877f15fa5bb50776adcb1a0742f57c76b59bc9ccccdfbbecad64736f6c63430008140033',
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
        "renzo()": "6a1a3f3d",
        "renzoOracle()": "892866a4",
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
