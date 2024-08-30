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
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
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
    bytecode: '0x6102c06040523480156200001257600080fd5b506040516200432238038062004322833981016040819052620000359162000235565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000145919062000385565b6001600160a01b03166102a05250620003ac92505050565b60405161020081016001600160401b03811182821017156200018f57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ab57600080fd5b50565b8051620001bb8162000195565b919050565b600060808284031215620001d357600080fd5b604051608081016001600160401b03811182821017156200020457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a08112156200024d57600080fd5b610260808212156200025e57600080fd5b620002686200015d565b91506200027586620001ae565b82526200028560208701620001ae565b60208301526200029860408701620001ae565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e083015261010080870151818401525061012080870151818401525061014080870151818401525061016062000303818801620001ae565b9083015261018062000317878201620001ae565b908301526101a06200032b878201620001ae565b908301526101c06200033f878201620001ae565b908301526101e06200035488888301620001c0565b818401525081945062000369818701620001ae565b935050506200037c6102808501620001ae565b90509250925092565b6000602082840312156200039857600080fd5b8151620003a58162000195565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613dd76200054b60003960008181610c150152818161264001526126ae015260008181610ba90152818161266101526126cf015260008181610daa01526123b7015260008181610d7b015261237a015260008181610c5501528181610eda01528181610f6a01528181610ffa0152818161108a015281816116a50152818161173d0152818161190601528181611f3101528181612007015261215e01526000610e42015260008181610e1c015261256a015260008181610df60152612544015260008181610dd0015261251e01526000611197015260006111710152600061114b01526000611125015260008181610eb40152612590015260008181610e680152818161132c01526129a4015260008181610e8e0152612dcf01526000818161063701528181610d4c01528181611ea201528181612682015281816126f00152612d5a015260008181610d1d01526112c50152613dd76000f3fe608060405234801561001057600080fd5b50600436106102475760003560e01c80636a1a3f3d1161013b578063bd85b039116100b8578063cf210e651161007c578063cf210e651461050c578063d81657431461051f578063e44808bc14610534578063e985e9c514610547578063fba560081461055a57600080fd5b8063bd85b039146104b6578063becee9c3146104c9578063c55dae63146104e9578063c69e16ad146104f1578063c6e6f592146104f957600080fd5b80639cd241af116100ff5780639cd241af14610457578063a22cb4651461046a578063ab033ea91461047d578063b0d965801461048e578063b88fed9f146104a357600080fd5b80636a1a3f3d1461041a5780637180c8ca146104225780637ecebe0014610434578063892866a414610447578063950c5d031461044f57600080fd5b806321ff32a9116101c957806346fbf68e1161018d57806346fbf68e146103b45780634e41a1fb146103d75780634ed2d6ac146103ea57806354fd4d50146103fd57806360246c881461040557600080fd5b806321ff32a91461034b578063313ce5671461036c5780633656eec2146103865780633a98ef39146103995780633e691db9146103a157600080fd5b80630a4e1493116102105780630a4e1493146102ad57806314e5f07b146102cd57806317fad7fc146102e05780631c0f12b6146102f357806320fc48811461030657600080fd5b8062ad800c1461024c57806301681a621461027557806302329a291461028a57806304baa00b1461029d57806306fdde03146102a5575b600080fd5b61025f61025a366004613020565b610589565b60405161026c9190613089565b60405180910390f35b6102886102833660046130b1565b6105c0565b005b6102886102983660046130dc565b6105c9565b61025f6105d2565b61025f610612565b6102b5610629565b6040516001600160a01b03909116815260200161026c565b6102886102db3660046130f9565b610669565b6102886102ee3660046131da565b610685565b61028861030136600461326f565b61069b565b610319610314366004613020565b6106ae565b6040805182516001600160801b039081168252602080850151821690830152928201519092169082015260600161026c565b61035e6103593660046132b7565b61071a565b60405190815260200161026c565b610374610760565b60405160ff909116815260200161026c565b61035e6103943660046132f9565b610778565b61035e6107b1565b61035e6103af366004613329565b6107d0565b6103c76103c23660046130b1565b6107db565b604051901515815260200161026c565b61025f6103e5366004613020565b6107fb565b6102886103f8366004613364565b610809565b61025f610857565b61040d61088c565b60405161026c91906133ae565b6102b5610b9b565b61028861043036600461344f565b5050565b61035e6104423660046130b1565b610bdb565b6102b5610c07565b6102b5610c47565b61028861046536600461347d565b610c87565b61028861047836600461344f565b610c98565b61028861048b3660046130b1565b50565b610496610d04565b60405161026c91906134b5565b61035e6104b1366004613020565b6111cc565b61035e6104c4366004613020565b6111da565b6104dc6104d73660046135db565b6111fc565b60405161026c919061361d565b6102b56112b7565b61035e6112f7565b61035e610507366004613020565b611311565b61035e61051a366004613020565b61131f565b610527611356565b60405161026c9190613661565b610288610542366004613772565b611462565b6103c76105553660046137d1565b6114aa565b6105626114ee565b6040805182516001600160801b03908116825260209384015116928101929092520161026c565b60606105bb6105978361154d565b6040516020016105a79190613089565b604051602081830303815290604052611675565b919050565b61048b81611699565b61048b81611904565b606061060f6040518060400160405280600f81526020016e457a4554484879706572647269766560881b8152506040516020016105a79190613089565b90565b606061060f60016040516020016105a791906137ff565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161060f91016105a7565b61067a898989898989898989611a1e565b505050505050505050565b610693868686868686611c15565b505050505050565b6106a88484848433611cc9565b50505050565b60408051606081018252600080825260208201819052918101919091526105bb600860008481526020019081526020016000206040516020016105a7919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b6000838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261075991016105a7565b9392505050565b604080516012602082015260009161060f91016105a7565b6000828152600a602090815260408083206001600160a01b03851684528252808320548151928301526107ab91016105a7565b92915050565b600061060f6107be611e8a565b6040516020016105a791815260200190565b60006107ab82611f1a565b60006105bb6107e983612159565b604080519115156020830152016105a7565b60606105bb6105978361223e565b836108138161233c565b6001600160a01b0316336001600160a01b03161461084457604051632aab8bd360e01b815260040160405180910390fd5b610850858585856123f9565b5050505050565b606061060f604051806040016040528060078152602001660ec625c605c62760cb1b8152506040516020016105a79190613089565b610905604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061090f612466565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b039092169161097a91906138dc565b61098491906138ef565b905060008215610a965773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109b185612479565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a869190613902565b509050610a93818461260f565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610b6757610b628486612624565b610b6a565b60005b81526003546001600160801b0316602091820152604051919250610b94916105a7918491016133ae565b5050505090565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161060f91016105a7565b6001600160a01b0381166000908152600e60209081526040808320548151928301526105bb91016105a7565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161060f91016105a7565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161060f91016105a7565b610c93838383336123f9565b505050565b336000818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610d0c612f39565b61060f6040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5a9190613927565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fea9190613927565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611056573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107a9190613927565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110a9190613927565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016105a791906134b5565b60006105bb6107be83612639565b6000818152600b60209081526040808320548151928301526105bb91016105a7565b606060008267ffffffffffffffff81111561121957611219613944565b604051908082528060200260200182016040528015611242578160200160208202803683370190505b50905060005b8381101561129b5760008585838181106112645761126461395a565b905060200201359050600081549050808484815181106112865761128661395a565b60209081029190910101525050600101611248565b506112b0816040516020016105a7919061361d565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161060f91016105a7565b600061060f6009546040516020016105a791815260200190565b60006105bb6107be836126a7565b60006105bb6107be6113517f0000000000000000000000000000000000000000000000000000000000000000856138dc565b612715565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261060f60026040516020016105a7919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461146c8161233c565b6001600160a01b0316336001600160a01b03161461149d57604051632aab8bd360e01b815260040160405180910390fd5b6106938686868686611cc9565b6001600160a01b038281166000908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107ab91016105a7565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261060f906060016105a7565b606060f882901c6001600160f81b038316600061156982612759565b9050600083600381111561157f5761157f6138b0565b036115b1576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061166d565b60018360038111156115c5576115c56138b0565b036115f157806040516020016115db9190613970565b604051602081830303815290604052935061166d565b6002836003811115611605576116056138b0565b0361161b57806040516020016115db91906139a9565b600383600381111561162f5761162f6138b0565b0361166d576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016116909190613089565b60405180910390fd5b6116a161280e565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611701573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117259190613927565b9050336001600160a01b038216148015906117d357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bd9190613927565b6001600160a01b0316336001600160a01b031614155b80156117e557506117e333612159565b155b15611802576040516282b42960e81b815260040160405180910390fd5b600061180c611e8a565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187a91906139e3565b90506118906001600160a01b0385168483612838565b81611899611e8a565b146118b7576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061048b6001600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611962573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119869190613927565b6001600160a01b0316336001600160a01b0316141580156119ad57506119ab33612159565b155b156119ca576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a590611a1390831515815260200190565b60405180910390a150565b83421115611a3f5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a665760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611b54573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b9257604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611c3257506001600160a01b038516155b15611c505760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c705760405163174861a760e31b815260040160405180910390fd5b60005b83811015611cc057611cb8858583818110611c9057611c9061395a565b905060200201358888868686818110611cab57611cab61395a565b9050602002013533611cc9565b600101611c73565b50505050505050565b6001600160a01b0384161580611ce657506001600160a01b038316155b15611d045760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611dc8576001600160a01b038085166000908152600c602090815260408083209385168352929052205460ff16611dc8576000858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611dc6576000868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611dc09084906138ef565b90915550505b505b6000858152600a602090815260408083206001600160a01b038816845290915281208054849290611dfa9084906138ef565b90915550506000858152600a602090815260408083206001600160a01b038716845290915281208054849290611e319084906138dc565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611ef1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1591906139e3565b905090565b6000611f2461280e565b611f2d8261288a565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb19190613927565b90506001600160a01b038116611fca60208501856130b1565b6001600160a01b031614611ff157604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061209d57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015612063573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120879190613927565b6001600160a01b0316336001600160a01b031614155b80156120af57506120ad33612159565b155b156120cc576040516282b42960e81b815260040160405180910390fd5b60006120d6612466565b6009805460009091559091506120ed8183876128c0565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461212c60408a0160208b016130dc565b60408051938452602084019290925215159082015260600160405180910390a25050506105bb6001600055565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156121ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526121e29190810190613a51565b905060005b815181101561223457836001600160a01b031682828151811061220c5761220c61395a565b60200260200101516001600160a01b03160361222c575060019392505050565b6001016121e7565b5060009392505050565b606060f882901c6001600160f81b038316600061225a82612759565b90506000836003811115612270576122706138b0565b036122a2576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061166d565b60018360038111156122b6576122b66138b0565b036122cc57806040516020016115db9190613ae5565b60028360038111156122e0576122e06138b0565b036122f657806040516020016115db9190613b1d565b600383600381111561230a5761230a6138b0565b0361166d57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611f15670de0b6b3a7640000612639565b6124dd6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916125d59116612959565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261260792900416612959565b905292915050565b60006107598383670de0b6b3a76400006129cf565b600061075983670de0b6b3a7640000846129cf565b60006107ab7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000856129ed565b60006107ab7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612b44565b600061273d600b6000612729600286612c53565b815260200190815260200160002054612c88565b61274f600b6000612729600187612c53565b6107ab9190613b49565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561280057612794600a86613b7f565b61279f9060306138dc565b60f81b8260016127af84876138ef565b6127b991906138ef565b815181106127c9576127c961395a565b60200101906001600160f81b031916908160001a905350806127ea81613b93565b91506127f99050600a86613bac565b9450612783565b918290030190815292915050565b60026000540361283157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c93908490612cb6565b600061289960208301836130b1565b6001600160a01b03160361048b5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806128cd858561260f565b90506128d8816126a7565b9450846000036128ec576000915050610759565b8491506128ff60408401602085016130dc565b1561292e576129278561291560208601866130b1565b6129226040870187613bc0565b612d19565b9150612951565b6129518561293f60208601866130b1565b61294c6040870187613bc0565b612d34565b509392505050565b600080670de0b6b3a764000061296d612dc7565b6129779190613c07565b9050808311612987576000612991565b61299181846138ef565b91506107596129c8670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c07565b8390612624565b60008260001904841183021582026129e657600080fd5b5091020490565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612a2e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612a569190810190613c88565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612abe91906139e3565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb0906064015b602060405180830381865afa158015612b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b3991906139e3565b979650505050505050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612b85573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612bad9190810190613c88565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612bf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c1591906139e3565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a90606401612af8565b60006001600160f81b03821115612c7d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b03821115612cb25760405163396ea70160e11b815260040160405180910390fd5b5090565b6000612ccb6001600160a01b03841683612df3565b90508051600014158015612cf0575080806020019051810190612cee9190613d68565b155b15610c9357604051635274afe760e01b81526001600160a01b0384166004820152602401611690565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612da3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108509190613d68565b6000611f15427f0000000000000000000000000000000000000000000000000000000000000000612e01565b606061075983836000612e17565b6000612e0d8284613b7f565b61075990846138ef565b606081471015612e3c5760405163cd78605960e01b8152306004820152602401611690565b600080856001600160a01b03168486604051612e589190613d85565b60006040518083038185875af1925050503d8060008114612e95576040519150601f19603f3d011682016040523d82523d6000602084013e612e9a565b606091505b5091509150612eaa868383612eb4565b9695505050505050565b606082612ec957612ec482612f10565b610759565b8151158015612ee057506001600160a01b0384163b155b15612f0957604051639996b31560e01b81526001600160a01b0385166004820152602401611690565b5080610759565b805115612f205780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161301b6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561303257600080fd5b5035919050565b60005b8381101561305457818101518382015260200161303c565b50506000910152565b60008151808452613075816020860160208601613039565b601f01601f19169290920160200192915050565b602081526000610759602083018461305d565b6001600160a01b038116811461048b57600080fd5b6000602082840312156130c357600080fd5b81356107598161309c565b801515811461048b57600080fd5b6000602082840312156130ee57600080fd5b8135610759816130ce565b60008060008060008060008060006101208a8c03121561311857600080fd5b8935985060208a0135975060408a01356131318161309c565b965060608a01356131418161309c565b955060808a0135613151816130ce565b945060a08a0135935060c08a013560ff8116811461316e57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126131a057600080fd5b50813567ffffffffffffffff8111156131b857600080fd5b6020830191508360208260051b85010111156131d357600080fd5b9250929050565b600080600080600080608087890312156131f357600080fd5b86356131fe8161309c565b9550602087013561320e8161309c565b9450604087013567ffffffffffffffff8082111561322b57600080fd5b6132378a838b0161318e565b9096509450606089013591508082111561325057600080fd5b5061325d89828a0161318e565b979a9699509497509295939492505050565b6000806000806080858703121561328557600080fd5b8435935060208501356132978161309c565b925060408501356132a78161309c565b9396929550929360600135925050565b6000806000606084860312156132cc57600080fd5b8335925060208401356132de8161309c565b915060408401356132ee8161309c565b809150509250925092565b6000806040838503121561330c57600080fd5b82359150602083013561331e8161309c565b809150509250929050565b60006020828403121561333b57600080fd5b813567ffffffffffffffff81111561335257600080fd5b82016060818503121561075957600080fd5b6000806000806080858703121561337a57600080fd5b84359350602085013561338c8161309c565b92506040850135915060608501356133a38161309c565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561346257600080fd5b823561346d8161309c565b9150602083013561331e816130ce565b60008060006060848603121561349257600080fd5b8335925060208401356134a48161309c565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516134e160208401826001600160a01b03169052565b5060408301516134fc60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015161356e828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b600080602083850312156135ee57600080fd5b823567ffffffffffffffff81111561360557600080fd5b6136118582860161318e565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561365557835183529284019291840191600101613639565b50909695505050505050565b81516001600160801b031681526101808101602083015161368d60208401826001600160801b03169052565b5060408301516136a860408401826001600160801b03169052565b5060608301516136c360608401826001600160801b03169052565b5060808301516136d86080840182600f0b9052565b5060a08301516136f360a08401826001600160801b03169052565b5060c083015161370e60c08401826001600160801b03169052565b5060e083015161372960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526135d3565b600080600080600060a0868803121561378a57600080fd5b85359450602086013561379c8161309c565b935060408601356137ac8161309c565b92506060860135915060808601356137c38161309c565b809150509295509295909350565b600080604083850312156137e457600080fd5b82356137ef8161309c565b9150602083013561331e8161309c565b60006020808352600084548160018260011c9150600183168061382357607f831692505b60208310810361384157634e487b7160e01b85526022600452602485fd5b60208801839052604088018180156138605760018114613876576138a1565b60ff198616825284151560051b820196506138a1565b60008b81526020902060005b8681101561389b57815484820152908501908901613882565b83019750505b50949998505050505050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156107ab576107ab6138c6565b818103818111156107ab576107ab6138c6565b6000806040838503121561391557600080fd5b82519150602083015161331e816130ce565b60006020828403121561393957600080fd5b81516107598161309c565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161399c816011850160208701613039565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516139d6816012850160208701613039565b9190910160120192915050565b6000602082840312156139f557600080fd5b5051919050565b604051601f8201601f1916810167ffffffffffffffff81118282101715613a2557613a25613944565b604052919050565b600067ffffffffffffffff821115613a4757613a47613944565b5060051b60200190565b60006020808385031215613a6457600080fd5b825167ffffffffffffffff811115613a7b57600080fd5b8301601f81018513613a8c57600080fd5b8051613a9f613a9a82613a2d565b6139fc565b81815260059190911b82018301908381019087831115613abe57600080fd5b928401925b82841015612b39578351613ad68161309c565b82529284019290840190613ac3565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613b10816010850160208701613039565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161399c816011850160208701613039565b81810360008312801583831316838312821617156112b0576112b06138c6565b634e487b7160e01b600052601260045260246000fd5b600082613b8e57613b8e613b69565b500690565b600060018201613ba557613ba56138c6565b5060010190565b600082613bbb57613bbb613b69565b500490565b6000808335601e19843603018112613bd757600080fd5b83018035915067ffffffffffffffff821115613bf257600080fd5b6020019150368190038213156131d357600080fd5b80820281158282048414176107ab576107ab6138c6565b600082601f830112613c2f57600080fd5b81516020613c3f613a9a83613a2d565b8083825260208201915060208460051b870101935086841115613c6157600080fd5b602086015b84811015613c7d5780518352918301918301613c66565b509695505050505050565b600080600060608486031215613c9d57600080fd5b835167ffffffffffffffff80821115613cb557600080fd5b818601915086601f830112613cc957600080fd5b81516020613cd9613a9a83613a2d565b82815260059290921b8401810191818101908a841115613cf857600080fd5b8286015b84811015613d3057805186811115613d145760008081fd5b613d228d86838b0101613c1e565b845250918301918301613cfc565b5091890151919750909350505080821115613d4a57600080fd5b50613d5786828701613c1e565b925050604084015190509250925092565b600060208284031215613d7a57600080fd5b8151610759816130ce565b60008251613d97818460208701613039565b919091019291505056fea264697066735822122000e47ea28a68d207bdc3a866e5ffcd7a96e82b8e00fa28dba2c43d9599b1117664736f6c63430008160033',
    methodIdentifiers: {
        "adminController()": "950c5d03",
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "convertToBase(uint256)": "b88fed9f",
        "convertToShares(uint256)": "c6e6f592",
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
        "renzo()": "6a1a3f3d",
        "renzoOracle()": "892866a4",
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
