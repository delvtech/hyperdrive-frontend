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
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620048cc380380620048cc83398101604081905262000035916200026c565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c05260c0808601516101e0526101008087015190915260e08087015190526101208087015190915291850180515190925281518101516101409081528251604090810151610160908152935160609081015161018090815282890151871661020052908801516102205291870151600a80549187166001600160a01b0319928316179055938701516008805491871691861691909117905590860151600980549186169190941617909255918316610240819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000157573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017d919062000389565b6001600160a01b03166102605250620003b0915050565b6040516101c081016001600160401b0381118282101715620001c657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001e257600080fd5b50565b8051620001f281620001cc565b919050565b6000608082840312156200020a57600080fd5b604051608081016001600160401b03811182821017156200023b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102408112156200028257600080fd5b610220808212156200029357600080fd5b6200029d62000194565b9150620002aa85620001e5565b8252620002ba60208601620001e5565b6020830152620002cd60408601620001e5565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200032c818701620001e5565b9083015261016062000340868201620001e5565b9083015261018062000354868201620001e5565b908301526101a06200036987878301620001f7565b81840152508193506200037e818601620001e5565b925050509250929050565b6000602082840312156200039c57600080fd5b8151620003a981620001cc565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516143d9620004f360003960008181610a11015281816123f3015261278e015260008181610997015281816122c0015261265b015260008181610b670152611b20015260008181610b400152611ae3015260008181610be10152611cd8015260008181610bbb0152611cb2015260008181610b910152611c8c01526000610d1101526000610cec01526000610cc701526000610ca4015260008181610c540152611cfe015260008181610c0701528181610e9201526124ba015260008181610c2d015261287a01526000818161056d01528181610b14015281816120f70152818161234c015281816126e70152612806015260008181610aef0152610e3901526143d96000f3fe608060405234801561001057600080fd5b50600436106102105760003560e01c80637180c8ca11610125578063becee9c3116100ad578063d81657431161007c578063d816574314610496578063e44808bc146104ab578063e4af29d1146104be578063e985e9c5146104d1578063fba56008146104e457600080fd5b8063becee9c314610453578063c55dae6314610473578063c69e16ad1461047b578063cf210e651461048357600080fd5b8063a22cb465116100f4578063a22cb465146103f2578063a42dce8014610405578063ab033ea914610418578063b0d965801461042b578063bd85b0391461044057600080fd5b80637180c8ca146103b15780637ecebe00146103c4578063892866a4146103d75780639cd241af146103df57600080fd5b806321ff32a9116101a857806346fbf68e1161017757806346fbf68e1461034b5780634e41a1fb1461036e5780634ed2d6ac1461038157806360246c88146103945780636a1a3f3d146103a957600080fd5b806321ff32a9146102ea578063313ce5671461030b5780633656eec2146103255780633e691db91461033857600080fd5b806314e5f07b116101e457806314e5f07b1461028657806317fad7fc146102995780631c0f12b6146102ac57806320fc4881146102bf57600080fd5b8062ad800c1461021557806301681a621461023e57806302329a29146102535780630a4e149314610266575b600080fd5b610228610223366004613757565b610513565b60405161023591906137c0565b60405180910390f35b61025161024c3660046137e8565b61054a565b005b610251610261366004613813565b610556565b61026e61055f565b6040516001600160a01b039091168152602001610235565b610251610294366004613830565b6105a2565b6102516102a736600461390a565b6105be565b6102516102ba36600461399f565b6105d4565b6102d26102cd366004613757565b6105e7565b60405190516001600160801b03168152602001610235565b6102fd6102f83660046139e7565b610628565b604051908152602001610235565b61031361066e565b60405160ff9091168152602001610235565b6102fd610333366004613a29565b610686565b6102fd610346366004613a59565b6106bf565b61035e6103593660046137e8565b6106ca565b6040519015158152602001610235565b61022861037c366004613757565b610700565b61025161038f366004613a94565b61070e565b61039c61075c565b6040516102359190613ade565b61026e610989565b6102516103bf366004613b7f565b6109c9565b6102fd6103d23660046137e8565b6109d7565b61026e610a03565b6102516103ed366004613bad565b610a43565b610251610400366004613b7f565b610a54565b6102516104133660046137e8565b610ac0565b6102516104263660046137e8565b610ac9565b610433610ad2565b6040516102359190613be5565b6102fd61044e366004613757565b610d4e565b610466610461366004613cf9565b610d70565b6040516102359190613d3b565b61026e610e2b565b6102fd610e6b565b6102fd610491366004613757565b610e85565b61049e610ece565b6040516102359190613d7f565b6102516104b9366004613e90565b610fda565b6102516104cc3660046137e8565b611022565b61035e6104df366004613eef565b61102b565b6104ec61106f565b6040805182516001600160801b039081168252602093840151169281019290925201610235565b6060610545610521836110ce565b60405160200161053191906137c0565b6040516020818303038152906040526111f6565b919050565b6105538161121a565b50565b61055381611390565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161059f9101610531565b90565b6105b3898989898989898989611413565b505050505050505050565b6105cc86868686868661160a565b505050505050565b6105e184848484336116be565b50505050565b6040805160208101909152600081526105456007600084815260200190815260200160002060405160200161053191546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526106679101610531565b9392505050565b604080516012602082015260009161059f9101610531565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526106b99101610531565b92915050565b60006106b98261187f565b6001600160a01b0381166000908152600c60209081526040808320549051610545926105319260ff169101901515815260200190565b6060610545610521836119a7565b8361071881611aa5565b6001600160a01b0316336001600160a01b03161461074957604051632aab8bd360e01b815260040160405180910390fd5b61075585858585611b62565b5050505050565b6107d5604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107df611bcf565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161084a9190613f49565b6108549190613f5c565b90506000808311610866576000610881565b6108818361087b61087686611be7565b611d7d565b90611dad565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610955576109508486611dc2565b610958565b60005b81526002546001600160801b03166020918201526040519192506109829161053191849101613ade565b5050505090565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161059f9101610531565b6109d38282611dd7565b5050565b6001600160a01b0381166000908152601160209081526040808320548151928301526105459101610531565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161059f9101610531565b610a4f83838333611b62565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61055381611e60565b61055381611ed4565b610ada613687565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a0830191909152915161059f92610531929101613be5565b6000818152600e60209081526040808320548151928301526105459101610531565b606060008267ffffffffffffffff811115610d8d57610d8d613f6f565b604051908082528060200260200182016040528015610db6578160200160208202803683370190505b50905060005b83811015610e0f576000858583818110610dd857610dd8613f85565b90506020020135905060008154905080848481518110610dfa57610dfa613f85565b60209081029190910101525050600101610dbc565b50610e24816040516020016105319190613d3b565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161059f9101610531565b600061059f600b5460405160200161053191815260200190565b6000610545610ebc610eb77f000000000000000000000000000000000000000000000000000000000000000085613f49565b611f48565b60405160200161053191815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261059f6001604051602001610531919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fe481611aa5565b6001600160a01b0316336001600160a01b03161461101557604051632aab8bd360e01b815260040160405180910390fd5b6105cc86868686866116be565b61055381611f8c565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916106b99101610531565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261059f90606001610531565b606060f882901c6001600160f81b03831660006110ea82612000565b9050600083600381111561110057611100613f1d565b03611132576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111ee565b600183600381111561114657611146613f1d565b03611172578060405160200161115c9190613f9b565b60405160208183030381529060405293506111ee565b600283600381111561118657611186613f1d565b0361119c578060405160200161115c9190613fd4565b60038360038111156111b0576111b0613f1d565b036111ee576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161121191906137c0565b60405180910390fd5b6112226120b5565b600954336000908152600c60205260409020546001600160a01b039091169060ff1615801561125a5750336001600160a01b03821614155b80156112715750600a546001600160a01b03163314155b1561128e576040516282b42960e81b815260040160405180910390fd5b60006112986120df565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611306919061400e565b905061131c6001600160a01b038516848361216a565b816113256120df565b14611343576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105536001600055565b336000908152600c602052604090205460ff166113bf576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061140890831515815260200190565b60405180910390a150565b834211156114345760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661145b5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611549573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461158757604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061162757506001600160a01b038516155b156116455760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116655760405163174861a760e31b815260040160405180910390fd5b60005b838110156116b5576116ad85858381811061168557611685613f85565b9050602002013588888686868181106116a0576116a0613f85565b90506020020135336116be565b600101611668565b50505050505050565b6001600160a01b03841615806116db57506001600160a01b038316155b156116f95760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146117bd576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117bd5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117bb5760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906117b5908490613f5c565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117ef908490613f5c565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611826908490613f49565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006118896120b5565b611892826121bc565b6008546001600160a01b0316806118ac60208501856137e8565b6001600160a01b0316146118d357604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118fc5750336001600160a01b03821614155b80156119135750600a546001600160a01b03163314155b15611930576040516282b42960e81b815260040160405180910390fd5b600061193a611bcf565b600b805460009091559091506119518183876121f2565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761198986858961228c565b60405190815260200160405180910390a25050506105456001600055565b606060f882901c6001600160f81b03831660006119c382612000565b905060008360038111156119d9576119d9613f1d565b03611a0b576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111ee565b6001836003811115611a1f57611a1f613f1d565b03611a35578060405160200161115c9190614027565b6002836003811115611a4957611a49613f1d565b03611a5f578060405160200161115c919061405f565b6003836003811115611a7357611a73613f1d565b036111ee57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611be2670de0b6b3a76400006122bb565b905090565b611c4b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d43911661246f565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d759290041661246f565b905292915050565b6000806000611d8b846124e5565b9150915080610e2457604051635516328b60e11b815260040160405180910390fd5b60006106678383670de0b6b3a7640000612572565b600061066783670de0b6b3a764000084612572565b600a546001600160a01b03163314611e01576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e8a576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611efe576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f70600e6000611f5c600286612590565b8152602001908152602001600020546125c5565b611f82600e6000611f5c600187612590565b6106b9919061408b565b600a546001600160a01b03163314611fb6576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156120a75761203b600a866140c1565b612046906030613f49565b60f81b8260016120568487613f5c565b6120609190613f5c565b8151811061207057612070613f85565b60200101906001600160f81b031916908160001a90535080612091816140d5565b91506120a09050600a866140ee565b945061202a565b918290030190815292915050565b6002600054036120d857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612146573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be2919061400e565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a4f9084906125f3565b60006121cb60208301836137e8565b6001600160a01b0316036105535760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121ff8585611dad565b905061220a81612656565b94508460000361221e576000915050610667565b61222e6040840160208501613813565b1561225d576122568561224460208601866137e8565b6122516040870187614102565b6127c5565b9150612284565b6122808561226e60208601866137e8565b61227b6040870187614102565b6127e0565b8491505b509392505050565b600061229e6040830160208401613813565b156122aa575082610667565b6122b48484611dad565b9050610667565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561231c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526123449190810190614209565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156123a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123cc919061400e565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa158015612443573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612467919061400e565b949350505050565b600080670de0b6b3a7640000612483612873565b61248d91906142e9565b905080831161249d5760006124a7565b6124a78184613f5c565b91506106676124de670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006142e9565b8390611dc2565b60008060008060006124f6866128a9565b915091508061250d57506000958695509350505050565b61251a8660a001516125c5565b61252387612be3565b8361253189600001516125c5565b61253b9190614300565b6125459190614300565b61254f919061408b565b9250505060008112156125685750600093849350915050565b9360019350915050565b600082600019048411830215820261258957600080fd5b5091020490565b60006001600160f81b038211156125ba5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156125ef5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006126086001600160a01b03841683612c47565b9050805160001415801561262d57508080602001905181019061262b9190614320565b155b15610a4f57604051635274afe760e01b81526001600160a01b0384166004820152602401611211565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156126b7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526126df9190810190614209565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612743573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612767919061400e565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a90606401612426565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561284f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190614320565b600061289f7f0000000000000000000000000000000000000000000000000000000000000000426140c1565b611be29042613f5c565b60008060006128d36128ce856101600151866101400151611dad90919063ffffffff16565b6125c5565b6128f36128ce866101200151876101000151612c5590919063ffffffff16565b6128fd919061408b565b905060008061291486600001518760200151612c6a565b915091508061292b57506000958695509350505050565b6000831315612a7b5760008390506000612979886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061296a9190613f5c565b8d606001518e60800151612ca9565b9350905082612992575060009788975095505050505050565b818110612a305760006129cc858a60400151858c60e00151670de0b6b3a76400006129bd9190613f5c565b8d606001518e60800151612dbb565b94509050831580156129e157508860c0015183105b156129f85750600098600198509650505050505050565b83612a0e57506000988998509650505050505050565b612a17816125c5565b612a209061433d565b9960019950975050505050505050565b6000886020015112612a6757612a4f8860a00151856128ce9190613f5c565b612a589061433d565b98600198509650505050505050565b60a08801518851612a4f916128ce91613f5c565b6000831215612bd4576000612a8f8461433d565b90506000612ac38489604001518a60e00151670de0b6b3a7640000612ab49190613f5c565b8b606001518c60800151612e7e565b9350905082612adc575060009788975095505050505050565b818110612b61576000612b16858a60400151858c60e00151670de0b6b3a7640000612b079190613f5c565b8d606001518e60800151612f2a565b9450905083158015612b2b57508860c0015183105b15612b425750600098600198509650505050505050565b83612b5857506000988998509650505050505050565b612a20816125c5565b6000612b93858a604001518b60e00151670de0b6b3a7640000612b849190613f5c565b8c606001518d60800151613001565b9450905083612bad57506000988998509650505050505050565b612a20612bca8a606001518486612bc49190613f5c565b90611dc2565b6128ce9083613f49565b50600095600195509350505050565b6000612c166128ce836101200151670de0b6b3a7640000612c049190613f5c565b606085015161010086015191906130b0565b611f826128ce846101600151670de0b6b3a7640000612c359190613f5c565b60608601516101408701519190612572565b6060610667838360006130d6565b60006106678383670de0b6b3a76400006130b0565b600080600083612c79866125c5565b612c83919061408b565b90506000811215612c9b576000809250925050612ca2565b9150600190505b9250929050565b6000806000881215612ccb57612cbe8861433d565b612cc89087613f49565b95505b600080612cd88b8b612c6a565b9150915080612cef57600080935093505050612daf565b6000612cfe838b8a8a8a613173565b90506000612d21612d198a612d138a8e612c55565b906131a2565b8990896130b0565b905080821015612d3b576000809550955050505050612daf565b808203670de0b6b3a76400008110612d7057612d69612d62670de0b6b3a76400008c611dc2565b82906131a2565b9050612d88565b612d85612d62670de0b6b3a76400008c61320d565b90505b8b811015612da157600080965096505050505050612daf565b8b9003955060019450505050505b97509795505050505050565b6000806000612dcd8989888888613222565b9050612ddd86612d13898b613f49565b975087811015612df4576000809250925050612e73565b878103612e028186886130b0565b9050670de0b6b3a76400008110612e2f57612e28612d62670de0b6b3a76400008961320d565b9050612e47565b612e44612d62670de0b6b3a764000089611dc2565b90505b612e51818661320d565b9050808a1015612e6957600080935093505050612e73565b8903925060019150505b965096945050505050565b6000806000612e908888888888613222565b90506000612ebb670de0b6b3a7640000612eaa8888611dc2565b612eb49190613f49565b839061320d565b9050670de0b6b3a76400008110612ee857612ee1612d62670de0b6b3a76400008961320d565b9050612f00565b612efd612d62670de0b6b3a764000089611dc2565b90505b80881015612f1657600080935093505050612f20565b8703925060019150505b9550959350505050565b6000806000612f3c8989888888613222565b905086881015612f53576000809250925050612e73565b9686900396612f6288876131a2565b975087811015612f79576000809250925050612e73565b878103612f878186886130b0565b9050670de0b6b3a76400008110612fb457612fad612d62670de0b6b3a76400008961320d565b9050612fcc565b612fc9612d62670de0b6b3a764000089611dc2565b90505b612fd6818661320d565b905089811015612fee57600080935093505050612e73565b9890980398600198509650505050505050565b60008060006130138888888888613173565b90506000613037670de0b6b3a764000061302d888861320d565b6124de9190613f49565b9050670de0b6b3a764000081106130645761305d612d62670de0b6b3a764000089611dc2565b905061307c565b613079612d62670de0b6b3a76400008961320d565b90505b6130868186611dc2565b90508881101561309e57600080935093505050612f20565b97909703976001975095505050505050565b60008260001904841183021582026130c757600080fd5b50910281810615159190040190565b6060814710156130fb5760405163cd78605960e01b8152306004820152602401611211565b600080856001600160a01b031684866040516131179190614359565b60006040518083038185875af1925050503d8060008114613154576040519150601f19603f3d011682016040523d82523d6000602084013e613159565b606091505b5091509150613169868383613247565b9695505050505050565b600061317f85856131a2565b61319861319086612d13868b611dad565b859085612572565b6131699190613f49565b6000816000036131bb5750670de0b6b3a76400006106b9565b826000036131cb575060006106b9565b60006131d6836125c5565b905060006131eb6131e6866125c5565b6132a3565b9050818102613202670de0b6b3a764000082614375565b9050613169816134c9565b600061066783670de0b6b3a7640000846130b0565b600061322e85856131a2565b61319861323f86612d13868b612c55565b8590856130b0565b60608261325c576132578261365e565b610667565b815115801561327357506001600160a01b0384163b155b1561329c57604051639996b31560e01b81526001600160a01b0385166004820152602401611211565b5080610667565b60008082136132c55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133489084901c6125c5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136134e457506000919050565b680755bf798b4a1bf1e5821261350d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061316974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6125c5565b80511561366e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016137526040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561376957600080fd5b5035919050565b60005b8381101561378b578181015183820152602001613773565b50506000910152565b600081518084526137ac816020860160208601613770565b601f01601f19169290920160200192915050565b6020815260006106676020830184613794565b6001600160a01b038116811461055357600080fd5b6000602082840312156137fa57600080fd5b8135610667816137d3565b801515811461055357600080fd5b60006020828403121561382557600080fd5b813561066781613805565b60008060008060008060008060006101208a8c03121561384f57600080fd5b8935985060208a0135975060408a0135613868816137d3565b965060608a0135613878816137d3565b955060808a013561388881613805565b945060a08a0135935060c08a013560ff811681146138a557600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126138d757600080fd5b50813567ffffffffffffffff8111156138ef57600080fd5b6020830191508360208260051b8501011115612ca257600080fd5b6000806000806000806080878903121561392357600080fd5b863561392e816137d3565b9550602087013561393e816137d3565b9450604087013567ffffffffffffffff8082111561395b57600080fd5b6139678a838b016138c5565b9096509450606089013591508082111561398057600080fd5b5061398d89828a016138c5565b979a9699509497509295939492505050565b600080600080608085870312156139b557600080fd5b8435935060208501356139c7816137d3565b925060408501356139d7816137d3565b9396929550929360600135925050565b6000806000606084860312156139fc57600080fd5b833592506020840135613a0e816137d3565b91506040840135613a1e816137d3565b809150509250925092565b60008060408385031215613a3c57600080fd5b823591506020830135613a4e816137d3565b809150509250929050565b600060208284031215613a6b57600080fd5b813567ffffffffffffffff811115613a8257600080fd5b82016060818503121561066757600080fd5b60008060008060808587031215613aaa57600080fd5b843593506020850135613abc816137d3565b9250604085013591506060850135613ad3816137d3565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613b9257600080fd5b8235613b9d816137d3565b91506020830135613a4e81613805565b600080600060608486031215613bc257600080fd5b833592506020840135613bd4816137d3565b929592945050506040919091013590565b81516001600160a01b0316815261022081016020830151613c1160208401826001600160a01b03169052565b506040830151613c2c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613c92828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613d0c57600080fd5b823567ffffffffffffffff811115613d2357600080fd5b613d2f858286016138c5565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613d7357835183529284019291840191600101613d57565b50909695505050505050565b81516001600160801b0316815261018081016020830151613dab60208401826001600160801b03169052565b506040830151613dc660408401826001600160801b03169052565b506060830151613de160608401826001600160801b03169052565b506080830151613df66080840182600f0b9052565b5060a0830151613e1160a08401826001600160801b03169052565b5060c0830151613e2c60c08401826001600160801b03169052565b5060e0830151613e4760e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613cf1565b600080600080600060a08688031215613ea857600080fd5b853594506020860135613eba816137d3565b93506040860135613eca816137d3565b9250606086013591506080860135613ee1816137d3565b809150509295509295909350565b60008060408385031215613f0257600080fd5b8235613f0d816137d3565b91506020830135613a4e816137d3565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156106b9576106b9613f33565b818103818111156106b9576106b9613f33565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613fc7816011850160208701613770565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251614001816012850160208701613770565b9190910160120192915050565b60006020828403121561402057600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251614052816010850160208701613770565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613fc7816011850160208701613770565b8181036000831280158383131683831282161715610e2457610e24613f33565b634e487b7160e01b600052601260045260246000fd5b6000826140d0576140d06140ab565b500690565b6000600182016140e7576140e7613f33565b5060010190565b6000826140fd576140fd6140ab565b500490565b6000808335601e1984360301811261411957600080fd5b83018035915067ffffffffffffffff82111561413457600080fd5b602001915036819003821315612ca257600080fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561417257614172613f6f565b604052919050565b600067ffffffffffffffff82111561419457614194613f6f565b5060051b60200190565b600082601f8301126141af57600080fd5b815160206141c46141bf8361417a565b614149565b82815260059290921b840181019181810190868411156141e357600080fd5b8286015b848110156141fe57805183529183019183016141e7565b509695505050505050565b60008060006060848603121561421e57600080fd5b835167ffffffffffffffff8082111561423657600080fd5b818601915086601f83011261424a57600080fd5b8151602061425a6141bf8361417a565b82815260059290921b8401810191818101908a84111561427957600080fd5b8286015b848110156142b1578051868111156142955760008081fd5b6142a38d86838b010161419e565b84525091830191830161427d565b50918901519197509093505050808211156142cb57600080fd5b506142d88682870161419e565b925050604084015190509250925092565b80820281158282048414176106b9576106b9613f33565b8082018281126000831280158216821582161715613cf157613cf1613f33565b60006020828403121561433257600080fd5b815161066781613805565b6000600160ff1b820161435257614352613f33565b5060000390565b6000825161436b818460208701613770565b9190910192915050565b600082614384576143846140ab565b600160ff1b82146000198414161561439e5761439e613f33565b50059056fea26469706673582212204c5fb1a8605dfb43792a016450897a3f57bb443a3dcb75483d4fce8ebd5fb23d64736f6c63430008140033',
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
        "vaultSharesToken()": "0a4e1493"
    }
};
