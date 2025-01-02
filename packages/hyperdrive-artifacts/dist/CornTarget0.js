export const CornTarget0 = {
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
                    "name": "__cornSilo",
                    "type": "address",
                    "internalType": "contract ICornSilo"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "adminController",
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
            "name": "convertToBase",
            "inputs": [
                {
                    "name": "_shareAmount",
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
            "name": "convertToShares",
            "inputs": [
                {
                    "name": "_baseAmount",
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
            "name": "cornSilo",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ICornSilo"
                }
            ],
            "stateMutability": "view"
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
            "stateMutability": "view"
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
                            "name": "weightedSpotPrice",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "lastWeightedSpotPriceUpdateTime",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
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
            "name": "kind",
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
            "stateMutability": "view"
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
            "name": "totalShares",
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
            "name": "BatchInputLengthMismatch",
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
    bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003e0f38038062003e0f8339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516139a46200046b5f395f8181610bec01528181611ea10152612a8d01525f8181610da9015261239c01525f8181610d7a015261235f01525f8181610c5601528181610ed901528181610f6701528181610ff5015281816110830152818161168c01528181611722015281816118e401528181611f2601528181611ffa015261214b01525f610e4101525f8181610e1b015261254101525f8181610df5015261251b01525f8181610dcf01526124f501525f61118e01525f61116801525f61114201525f61111c01525f8181610eb3015261256701525f8181610e6701528181611319015261293d01525f8181610e8d0152612b5701525f81816106190152610d4b01525f818161074301528181610d1c015281816112b601528181611e7701528181612a5c0152612b0801526139a45ff3fe608060405234801561000f575f80fd5b5060043610610233575f3560e01c806360246c8811610135578063bd85b039116100b4578063cf210e6511610079578063cf210e65146104ef578063d816574314610502578063e44808bc14610517578063e985e9c51461052a578063fba560081461053d575f80fd5b8063bd85b03914610499578063becee9c3146104ac578063c55dae63146104cc578063c69e16ad146104d4578063c6e6f592146104dc575f80fd5b80639cd241af116100fa5780639cd241af1461043a578063a22cb4651461044d578063ab033ea914610460578063b0d9658014610471578063b88fed9f14610486575f80fd5b806360246c88146103f05780637180c8ca146104055780637d1849ab146104175780637ecebe001461041f578063950c5d0314610432575f80fd5b806320fc4881116101c15780633e691db9116101865780633e691db91461038c57806346fbf68e1461039f5780634e41a1fb146103c25780634ed2d6ac146103d557806354fd4d50146103e8575f80fd5b806320fc4881146102f157806321ff32a914610336578063313ce567146103575780633656eec2146103715780633a98ef3914610384575f80fd5b806306fdde031161020757806306fdde03146102905780630a4e14931461029857806314e5f07b146102b857806317fad7fc146102cb5780631c0f12b6146102de575f80fd5b8062ad800c1461023757806301681a621461026057806302329a291461027557806304baa00b14610288575b5f80fd5b61024a610245366004612d8f565b61056c565b6040516102579190612df3565b60405180910390f35b61027361026e366004612e19565b6105a3565b005b610273610283366004612e41565b6105ac565b61024a6105b5565b61024a6105f4565b6102a061060b565b6040516001600160a01b039091168152602001610257565b6102736102c6366004612e6a565b61064a565b6102736102d9366004612f3b565b610666565b6102736102ec366004612fca565b61067c565b6103046102ff366004612d8f565b61068f565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610257565b61034961034436600461300f565b6106f8565b604051908152602001610257565b61035f61073d565b60405160ff9091168152602001610257565b61034961037f36600461304e565b6107d5565b61034961080d565b61034961039a36600461307c565b61082b565b6103b26103ad366004612e19565b610835565b6040519015158152602001610257565b61024a6103d0366004612d8f565b610854565b6102736103e33660046130b3565b610862565b61024a6108b0565b6103f86108e5565b60405161025791906130fa565b61027361041336600461319b565b5050565b6102a0610bde565b61034961042d366004612e19565b610c1d565b6102a0610c48565b6102736104483660046131c7565b610c87565b61027361045b36600461319b565b610c98565b61027361046e366004612e19565b50565b610479610d03565b60405161025791906131fc565b610349610494366004612d8f565b6111c3565b6103496104a7366004612d8f565b6111d0565b6104bf6104ba366004613322565b6111f1565b6040516102579190613361565b6102a06112a8565b6103496112e7565b6103496104ea366004612d8f565b611300565b6103496104fd366004612d8f565b61130d565b61050a611343565b60405161025791906133a4565b6102736105253660046134b5565b61144e565b6103b2610538366004613510565b611496565b6105456114d9565b6040805182516001600160801b039081168252602093840151169281019290925201610257565b606061059e61057a83611537565b60405160200161058a9190612df3565b60405160208183030381529060405261165d565b919050565b61046e81611681565b61046e816118e2565b60606105f16040518060400160405280600e81526020016d436f726e4879706572647269766560901b81525060405160200161058a9190612df3565b90565b60606105f1600160405160200161058a919061353c565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b61065b8989898989898989896119fa565b505050505050505050565b610674868686868686611bec565b505050505050565b6106898484848433611c9f565b50505050565b604080516060810182525f808252602082018190529181019190915261059e60085f8481526020019081526020015f2060405160200161058a919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610736910161058a565b9392505050565b5f6105f17f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561079d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107c191906135e9565b6040805160ff90921660208301520161058a565b5f828152600a602090815260408083206001600160a01b0385168452825280832054815192830152610807910161058a565b92915050565b5f6105f1610819611e5a565b60405160200161058a91815260200190565b5f61080782611f11565b5f61059e61084283612147565b6040805191151560208301520161058a565b606061059e61057a83612225565b8361086c81612321565b6001600160a01b0316336001600160a01b03161461089d57604051632aab8bd360e01b815260040160405180910390fd5b6108a9858585856123de565b5050505050565b60606105f160405180604001604052806007815260200166076312e302e32360cc1b81525060405160200161058a9190612df3565b61094f604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f61095861244a565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b03909216916109c2919061362c565b6109cc919061363f565b90505f8215610adb5773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109f88561245c565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610aa7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610acb9190613652565b509050610ad881846125e6565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610bab57610ba684866125fa565b610bad565b5f5b81526003546001600160801b0316602091820152604051919250610bd79161058a918491016130fa565b5050505090565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b6001600160a01b0381165f908152600e602090815260408083205481519283015261059e910161058a565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b610c93838383336123de565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610d0b612cbb565b6105f16040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f33573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f579190613680565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fc1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fe59190613680565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa15801561104f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110739190613680565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110dd573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111019190613680565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161058a91906131fc565b5f61059e6108198361260e565b5f818152600b602090815260408083205481519283015261059e910161058a565b60605f8267ffffffffffffffff81111561120d5761120d61369b565b604051908082528060200260200182016040528015611236578160200160208202803683370190505b5090505f5b8381101561128c575f858583818110611256576112566136af565b9050602002013590505f8154905080848481518110611277576112776136af565b6020908102919091010152505060010161123b565b506112a18160405160200161058a9190613361565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b5f6105f160095460405160200161058a91815260200190565b5f61059e61081983612683565b5f61059e61081961133e7f00000000000000000000000000000000000000000000000000000000000000008561362c565b6126bd565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105f1600260405160200161058a919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461145881612321565b6001600160a01b0316336001600160a01b03161461148957604051632aab8bd360e01b815260040160405180910390fd5b6106748686868686611c9f565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610807910161058a565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105f19060600161058a565b606060f882901c6001600160f81b0383165f611552826126fd565b90505f83600381111561156757611567613604565b03611599576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611655565b60018360038111156115ad576115ad613604565b036115d957806040516020016115c391906136c3565b6040516020818303038152906040529350611655565b60028360038111156115ed576115ed613604565b0361160357806040516020016115c391906136fb565b600383600381111561161757611617613604565b03611655576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016116789190612df3565b60405180910390fd5b6116896127af565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116e6573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061170a9190613680565b9050336001600160a01b038216148015906117b657507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561177c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117a09190613680565b6001600160a01b0316336001600160a01b031614155b80156117c857506117c633612147565b155b156117e5576040516282b42960e81b815260040160405180910390fd5b5f6117ee611e5a565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa158015611835573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118599190613734565b905061186f6001600160a01b03851684836127d7565b81611878611e5a565b14611896576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061046e60015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561193e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119629190613680565b6001600160a01b0316336001600160a01b031614158015611989575061198733612147565b155b156119a6576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119ef90831515815260200190565b60405180910390a150565b83421115611a1b5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a425760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611b2c573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b6a57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611c0957506001600160a01b038516155b15611c275760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c475760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c9657611c8e858583818110611c6657611c666136af565b905060200201358888868686818110611c8157611c816136af565b9050602002013533611c9f565b600101611c49565b50505050505050565b6001600160a01b0384161580611cbc57506001600160a01b038316155b15611cda5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611d9a576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611d9a575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d98575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d9290849061363f565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611dcb90849061363f565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611e0190849061362c565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b604051630a7292f560e01b81523060048201526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660248301525f917f000000000000000000000000000000000000000000000000000000000000000090911690630a7292f590604401602060405180830381865afa158015611ee8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f0c9190613734565b905090565b5f611f1a6127af565b611f2382612829565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f80573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fa49190613680565b90506001600160a01b038116611fbd6020850185612e19565b6001600160a01b031614611fe457604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061208e57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015612054573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120789190613680565b6001600160a01b0316336001600160a01b031614155b80156120a0575061209e33612147565b155b156120bd576040516282b42960e81b815260040160405180910390fd5b5f6120c661244a565b600980545f9091559091506120dc81838761285e565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461211b60408a0160208b01612e41565b60408051938452602084019290925215159082015260600160405180910390a250505061059e60015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa1580156121a4573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526121cb919081019061374b565b90505f5b815181101561221c57836001600160a01b03168282815181106121f4576121f46136af565b60200260200101516001600160a01b031603612214575060019392505050565b6001016121cf565b505f9392505050565b606060f882901c6001600160f81b0383165f612240826126fd565b90505f83600381111561225557612255613604565b03612287576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611655565b600183600381111561229b5761229b613604565b036122b157806040516020016115c3919061380b565b60028360038111156122c5576122c5613604565b036122db57806040516020016115c39190613842565b60038360038111156122ef576122ef613604565b0361165557505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611f0c670de0b6b3a764000061260e565b6124b46040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916125ac91166128f4565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926125de929004166128f4565b905292915050565b5f6107368383670de0b6b3a7640000612968565b5f61073683670de0b6b3a764000084612968565b60405163b88fed9f60e01b8152600481018290525f9073__$5682da3f97efd8f880c10f145969e15691$__9063b88fed9f906024015b602060405180830381865af415801561265f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108079190613734565b6040516363737ac960e11b8152600481018290525f9073__$5682da3f97efd8f880c10f145969e15691$__9063c6e6f59290602401612644565b5f6126e2600b5f6126cf600286612983565b81526020019081526020015f20546129b7565b6126f3600b5f6126cf600187612983565b610807919061386d565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b84156127a157612736600a866138a0565b61274190603061362c565b60f81b826001612751848761363f565b61275b919061363f565b8151811061276b5761276b6136af565b60200101906001600160f81b03191690815f1a9053508061278b816138b3565b915061279a9050600a866138cb565b9450612725565b918290030190815292915050565b60025f54036127d157604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c939084906129e4565b5f6128376020830183612e19565b6001600160a01b03160361046e5760405163f0dd15fd60e01b815260040160405180910390fd5b5f8061286a85856125e6565b905061287581612683565b9450845f03612887575f915050610736565b84915061289a6040840160208501612e41565b156128c9576128c2856128b06020860186612e19565b6128bd60408701876138de565b612a45565b91506128ec565b6128ec856128da6020860186612e19565b6128e760408701876138de565b612b37565b509392505050565b5f80670de0b6b3a7640000612907612b50565b6129119190613921565b9050808311612920575f61292a565b61292a818461363f565b9150610736612961670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613921565b83906125fa565b5f825f19048411830215820261297c575f80fd5b5091020490565b5f6001600160f81b038211156129ac5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b038211156129e05760405163396ea70160e11b815260040160405180910390fd5b5090565b5f6129f86001600160a01b03841683612b7b565b905080515f14158015612a1c575080806020019051810190612a1a9190613938565b155b15610c9357604051635274afe760e01b81526001600160a01b0384166004820152602401611678565b60405163830cbbbd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018690525f917f00000000000000000000000000000000000000000000000000000000000000009091169063830cbbbd906044016020604051808303815f875af1158015612ad5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612af99190613734565b9050612b2f6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001685836127d7565b949350505050565b60405163350b944160e11b815260040160405180910390fd5b5f611f0c427f0000000000000000000000000000000000000000000000000000000000000000612b88565b606061073683835f612b9d565b5f612b9382846138a0565b610736908461363f565b606081471015612bc25760405163cd78605960e01b8152306004820152602401611678565b5f80856001600160a01b03168486604051612bdd9190613953565b5f6040518083038185875af1925050503d805f8114612c17576040519150601f19603f3d011682016040523d82523d5f602084013e612c1c565b606091505b5091509150612c2c868383612c36565b9695505050505050565b606082612c4b57612c4682612c92565b610736565b8151158015612c6257506001600160a01b0384163b155b15612c8b57604051639996b31560e01b81526001600160a01b0385166004820152602401611678565b5080610736565b805115612ca25780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612d8a60405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612d9f575f80fd5b5035919050565b5f5b83811015612dc0578181015183820152602001612da8565b50505f910152565b5f8151808452612ddf816020860160208601612da6565b601f01601f19169290920160200192915050565b602081525f6107366020830184612dc8565b6001600160a01b038116811461046e575f80fd5b5f60208284031215612e29575f80fd5b813561073681612e05565b801515811461046e575f80fd5b5f60208284031215612e51575f80fd5b813561073681612e34565b60ff8116811461046e575f80fd5b5f805f805f805f805f6101208a8c031215612e83575f80fd5b8935985060208a0135975060408a0135612e9c81612e05565b965060608a0135612eac81612e05565b955060808a0135612ebc81612e34565b945060a08a0135935060c08a0135612ed381612e5c565b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f840112612f03575f80fd5b50813567ffffffffffffffff811115612f1a575f80fd5b6020830191508360208260051b8501011115612f34575f80fd5b9250929050565b5f805f805f8060808789031215612f50575f80fd5b8635612f5b81612e05565b95506020870135612f6b81612e05565b9450604087013567ffffffffffffffff80821115612f87575f80fd5b612f938a838b01612ef3565b90965094506060890135915080821115612fab575f80fd5b50612fb889828a01612ef3565b979a9699509497509295939492505050565b5f805f8060808587031215612fdd575f80fd5b843593506020850135612fef81612e05565b92506040850135612fff81612e05565b9396929550929360600135925050565b5f805f60608486031215613021575f80fd5b83359250602084013561303381612e05565b9150604084013561304381612e05565b809150509250925092565b5f806040838503121561305f575f80fd5b82359150602083013561307181612e05565b809150509250929050565b5f6020828403121561308c575f80fd5b813567ffffffffffffffff8111156130a2575f80fd5b820160608185031215610736575f80fd5b5f805f80608085870312156130c6575f80fd5b8435935060208501356130d881612e05565b92506040850135915060608501356130ef81612e05565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f80604083850312156131ac575f80fd5b82356131b781612e05565b9150602083013561307181612e34565b5f805f606084860312156131d9575f80fd5b8335925060208401356131eb81612e05565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161322860208401826001600160a01b03169052565b50604083015161324360408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401518184015250610160808401516132b5828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f8060208385031215613333575f80fd5b823567ffffffffffffffff811115613349575f80fd5b61335585828601612ef3565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b818110156133985783518352928401929184019160010161337c565b50909695505050505050565b81516001600160801b03168152610180810160208301516133d060208401826001600160801b03169052565b5060408301516133eb60408401826001600160801b03169052565b50606083015161340660608401826001600160801b03169052565b50608083015161341b6080840182600f0b9052565b5060a083015161343660a08401826001600160801b03169052565b5060c083015161345160c08401826001600160801b03169052565b5060e083015161346c60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b0381168285015261331a565b5f805f805f60a086880312156134c9575f80fd5b8535945060208601356134db81612e05565b935060408601356134eb81612e05565b925060608601359150608086013561350281612e05565b809150509295509295909350565b5f8060408385031215613521575f80fd5b823561352c81612e05565b9150602083013561307181612e05565b5f60208083525f84545f60018260011c9150600183168061355e57607f831692505b60208310810361357c57634e487b7160e01b5f52602260045260245ffd5b602088018390526040880181801561359b57600181146135b1576135da565b60ff198616825284151560051b820196506135da565b5f8b8152602090205f5b868110156135d4578154848201529085019089016135bb565b83019750505b50949998505050505050505050565b5f602082840312156135f9575f80fd5b815161073681612e5c565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b8082018082111561080757610807613618565b8181038181111561080757610807613618565b5f8060408385031215613663575f80fd5b82519150602083015161307181612e34565b805161059e81612e05565b5f60208284031215613690575f80fd5b815161073681612e05565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f82516136ee816011850160208701612da6565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f8251613727816012850160208701612da6565b9190910160120192915050565b5f60208284031215613744575f80fd5b5051919050565b5f602080838503121561375c575f80fd5b825167ffffffffffffffff80821115613773575f80fd5b818501915085601f830112613786575f80fd5b8151818111156137985761379861369b565b8060051b604051601f19603f830116810181811085821117156137bd576137bd61369b565b6040529182528482019250838101850191888311156137da575f80fd5b938501935b828510156137ff576137f085613675565b845293850193928501926137df565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f8251613835816010850160208701612da6565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f82516136ee816011850160208701612da6565b8181035f8312801583831316838312821617156112a1576112a1613618565b634e487b7160e01b5f52601260045260245ffd5b5f826138ae576138ae61388c565b500690565b5f600182016138c4576138c4613618565b5060010190565b5f826138d9576138d961388c565b500490565b5f808335601e198436030181126138f3575f80fd5b83018035915067ffffffffffffffff82111561390d575f80fd5b602001915036819003821315612f34575f80fd5b808202811582820484141761080757610807613618565b5f60208284031215613948575f80fd5b815161073681612e34565b5f8251613964818460208701612da6565b919091019291505056fea2646970667358221220ce9ac7544d36e0999ee669e8cdf009ca51b5cda91c38af3927a953c1543e462c64736f6c63430008160033',
    methodIdentifiers: {
        "adminController()": "950c5d03",
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "convertToBase(uint256)": "b88fed9f",
        "convertToShares(uint256)": "c6e6f592",
        "cornSilo()": "7d1849ab",
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
        "kind()": "04baa00b",
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
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "sweep(address)": "01681a62",
        "symbol(uint256)": "4e41a1fb",
        "totalShares()": "3a98ef39",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "vaultSharesToken()": "0a4e1493",
        "version()": "54fd4d50"
    }
};