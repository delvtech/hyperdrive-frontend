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
    bytecode: '0x6102c060405234801562000011575f80fd5b50604051620041c2380380620041c283398101604081905262000034916200022a565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000141919062000376565b6001600160a01b03166102a052506200039b92505050565b60405161020081016001600160401b03811182821017156200018957634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b0381168114620001a4575f80fd5b50565b8051620001b4816200018f565b919050565b5f60808284031215620001ca575f80fd5b604051608081016001600160401b0381118282101715620001f957634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a08112156200023f575f80fd5b610260808212156200024f575f80fd5b6200025962000159565b91506200026686620001a7565b82526200027660208701620001a7565b60208301526200028960408701620001a7565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002f4818801620001a7565b9083015261018062000308878201620001a7565b908301526101a06200031c878201620001a7565b908301526101c062000330878201620001a7565b908301526101e06200034588888301620001b9565b81840152508194506200035a818701620001a7565b935050506200036d6102808501620001a7565b90509250925092565b5f6020828403121562000387575f80fd5b815162000394816200018f565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613c9c620005265f395f8181610be9015281816125bc015261262901525f8181610b7f015281816125dd015261264a01525f8181610d7b015261234401525f8181610d4c015261230701525f8181610c2801528181610eab01528181610f3901528181610fc7015281816110550152818161165e015281816116f4015281816118b601528181611ece01528181611fa201526120f301525f610e1301525f8181610ded01526124e901525f8181610dc701526124c301525f8181610da1015261249d01525f61116001525f61113a01525f61111401525f6110ee01525f8181610e85015261250f01525f8181610e39015281816112eb015261291001525f8181610e5f0152612d1d01525f818161062d01528181610d1d01528181611e43015281816125fe0152818161266b0152612cac01525f8181610cee01526112880152613c9c5ff3fe608060405234801561000f575f80fd5b506004361061023e575f3560e01c80636a1a3f3d11610135578063bd85b039116100b4578063cf210e6511610079578063cf210e6514610502578063d816574314610515578063e44808bc1461052a578063e985e9c51461053d578063fba5600814610550575f80fd5b8063bd85b039146104ac578063becee9c3146104bf578063c55dae63146104df578063c69e16ad146104e7578063c6e6f592146104ef575f80fd5b80639cd241af116100fa5780639cd241af1461044d578063a22cb46514610460578063ab033ea914610473578063b0d9658014610484578063b88fed9f14610499575f80fd5b80636a1a3f3d146104105780637180c8ca146104185780637ecebe001461042a578063892866a41461043d578063950c5d0314610445575f80fd5b806321ff32a9116101c157806346fbf68e1161018657806346fbf68e146103aa5780634e41a1fb146103cd5780634ed2d6ac146103e057806354fd4d50146103f357806360246c88146103fb575f80fd5b806321ff32a914610341578063313ce567146103625780633656eec21461037c5780633a98ef391461038f5780633e691db914610397575f80fd5b80630a4e1493116102075780630a4e1493146102a357806314e5f07b146102c357806317fad7fc146102d65780631c0f12b6146102e957806320fc4881146102fc575f80fd5b8062ad800c1461024257806301681a621461026b57806302329a291461028057806304baa00b1461029357806306fdde031461029b575b5f80fd5b610255610250366004612f55565b61057f565b6040516102629190612fb9565b60405180910390f35b61027e610279366004612fdf565b6105b6565b005b61027e61028e366004613007565b6105bf565b6102556105c8565b610255610608565b6102ab61061f565b6040516001600160a01b039091168152602001610262565b61027e6102d1366004613022565b61065e565b61027e6102e43660046130f8565b61067a565b61027e6102f7366004613187565b610690565b61030f61030a366004612f55565b6106a3565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610262565b61035461034f3660046131cc565b61070c565b604051908152602001610262565b61036a610751565b60405160ff9091168152602001610262565b61035461038a36600461320b565b610768565b6103546107a0565b6103546103a5366004613239565b6107be565b6103bd6103b8366004612fdf565b6107c8565b6040519015158152602001610262565b6102556103db366004612f55565b6107e7565b61027e6103ee366004613270565b6107f5565b610255610843565b610403610878565b60405161026291906132b7565b6102ab610b71565b61027e610426366004613358565b5050565b610354610438366004612fdf565b610bb0565b6102ab610bdb565b6102ab610c1a565b61027e61045b366004613384565b610c59565b61027e61046e366004613358565b610c6a565b61027e610481366004612fdf565b50565b61048c610cd5565b60405161026291906133b9565b6103546104a7366004612f55565b611195565b6103546104ba366004612f55565b6111a2565b6104d26104cd3660046134df565b6111c3565b604051610262919061351e565b6102ab61127a565b6103546112b9565b6103546104fd366004612f55565b6112d2565b610354610510366004612f55565b6112df565b61051d611315565b6040516102629190613561565b61027e610538366004613672565b611420565b6103bd61054b3660046136cd565b611468565b6105586114ab565b6040805182516001600160801b039081168252602093840151169281019290925201610262565b60606105b161058d83611509565b60405160200161059d9190612fb9565b60405160208183030381529060405261162f565b919050565b61048181611653565b610481816118b4565b60606106056040518060400160405280600f81526020016e457a4554484879706572647269766560881b81525060405160200161059d9190612fb9565b90565b6060610605600160405160200161059d91906136f9565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f91610605910161059d565b61066f8989898989898989896119cc565b505050505050505050565b610688868686868686611bbe565b505050505050565b61069d8484848433611c71565b50505050565b604080516060810182525f80825260208201819052918101919091526105b160085f8481526020019081526020015f2060405160200161059d919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261074a910161059d565b9392505050565b60408051601260208201525f91610605910161059d565b5f828152600a602090815260408083206001600160a01b038516845282528083205481519283015261079a910161059d565b92915050565b5f6106056107ac611e2c565b60405160200161059d91815260200190565b5f61079a82611eb9565b5f6105b16107d5836120ef565b6040805191151560208301520161059d565b60606105b161058d836121cd565b836107ff816122c9565b6001600160a01b0316336001600160a01b03161461083057604051632aab8bd360e01b815260040160405180910390fd5b61083c85858585612386565b5050505050565b606061060560405180604001604052806007815260200166076312e302e32360cc1b81525060405160200161059d9190612fb9565b6108e2604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f6108eb6123f2565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b039092169161095591906137ce565b61095f91906137e1565b90505f8215610a6e5773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61098b85612404565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a3a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a5e91906137f4565b509050610a6b818461258e565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610b3e57610b3984866125a2565b610b40565b5f5b81526003546001600160801b0316602091820152604051919250610b6a9161059d918491016132b7565b5050505090565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f91610605910161059d565b6001600160a01b0381165f908152600e60209081526040808320548151928301526105b1910161059d565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f91610605910161059d565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f91610605910161059d565b610c6583838333612386565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cdd612e81565b6106056040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f05573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f299190613817565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f93573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fb79190613817565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611021573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110459190613817565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110af573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d39190613817565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161059d91906133b9565b5f6105b16107ac836125b6565b5f818152600b60209081526040808320548151928301526105b1910161059d565b60605f8267ffffffffffffffff8111156111df576111df613832565b604051908082528060200260200182016040528015611208578160200160208202803683370190505b5090505f5b8381101561125e575f85858381811061122857611228613846565b9050602002013590505f815490508084848151811061124957611249613846565b6020908102919091010152505060010161120d565b506112738160405160200161059d919061351e565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f91610605910161059d565b5f61060560095460405160200161059d91815260200190565b5f6105b16107ac83612623565b5f6105b16107ac6113107f0000000000000000000000000000000000000000000000000000000000000000856137ce565b612690565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610605600260405160200161059d919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461142a816122c9565b6001600160a01b0316336001600160a01b03161461145b57604051632aab8bd360e01b815260040160405180910390fd5b6106888686868686611c71565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff909116151591810191909152909161079a910161059d565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526106059060600161059d565b606060f882901c6001600160f81b0383165f611524826126d0565b90505f836003811115611539576115396137a6565b0361156b576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611627565b600183600381111561157f5761157f6137a6565b036115ab5780604051602001611595919061385a565b6040516020818303038152906040529350611627565b60028360038111156115bf576115bf6137a6565b036115d557806040516020016115959190613892565b60038360038111156115e9576115e96137a6565b03611627576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161164a9190612fb9565b60405180910390fd5b61165b612782565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116b8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116dc9190613817565b9050336001600160a01b0382161480159061178857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561174e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117729190613817565b6001600160a01b0316336001600160a01b031614155b801561179a5750611798336120ef565b155b156117b7576040516282b42960e81b815260040160405180910390fd5b5f6117c0611e2c565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa158015611807573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061182b91906138cb565b90506118416001600160a01b03851684836127aa565b8161184a611e2c565b14611868576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061048160015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611910573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119349190613817565b6001600160a01b0316336001600160a01b03161415801561195b5750611959336120ef565b155b15611978576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119c190831515815260200190565b60405180910390a150565b834211156119ed5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a145760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611afe573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b3c57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611bdb57506001600160a01b038516155b15611bf95760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c195760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c6857611c60858583818110611c3857611c38613846565b905060200201358888868686818110611c5357611c53613846565b9050602002013533611c71565b600101611c1b565b50505050505050565b6001600160a01b0384161580611c8e57506001600160a01b038316155b15611cac5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611d6c576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611d6c575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d6a575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d649084906137e1565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611d9d9084906137e1565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611dd39084906137ce565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611e90573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611eb491906138cb565b905090565b5f611ec2612782565b611ecb826127fc565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f28573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f4c9190613817565b90506001600160a01b038116611f656020850185612fdf565b6001600160a01b031614611f8c57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061203657507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ffc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120209190613817565b6001600160a01b0316336001600160a01b031614155b80156120485750612046336120ef565b155b15612065576040516282b42960e81b815260040160405180910390fd5b5f61206e6123f2565b600980545f909155909150612084818387612831565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a603836185846120c360408a0160208b01613007565b60408051938452602084019290925215159082015260600160405180910390a25050506105b160015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa15801561214c573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526121739190810190613936565b90505f5b81518110156121c457836001600160a01b031682828151811061219c5761219c613846565b60200260200101516001600160a01b0316036121bc575060019392505050565b600101612177565b505f9392505050565b606060f882901c6001600160f81b0383165f6121e8826126d0565b90505f8360038111156121fd576121fd6137a6565b0361222f576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611627565b6001836003811115612243576122436137a6565b03612259578060405160200161159591906139c5565b600283600381111561226d5761226d6137a6565b03612283578060405160200161159591906139fc565b6003836003811115612297576122976137a6565b0361162757505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611eb4670de0b6b3a76400006125b6565b61245c6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161255491166128c7565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612586929004166128c7565b905292915050565b5f61074a8383670de0b6b3a764000061293b565b5f61074a83670de0b6b3a76400008461293b565b5f61079a7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612956565b5f61079a7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612aa3565b5f6126b5600b5f6126a2600286612baa565b81526020019081526020015f2054612bde565b6126c6600b5f6126a2600187612baa565b61079a9190613a27565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b841561277457612709600a86613a5a565b6127149060306137ce565b60f81b82600161272484876137e1565b61272e91906137e1565b8151811061273e5761273e613846565b60200101906001600160f81b03191690815f1a9053508061275e81613a6d565b915061276d9050600a86613a85565b94506126f8565b918290030190815292915050565b60025f54036127a457604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c65908490612c0b565b5f61280a6020830183612fdf565b6001600160a01b0316036104815760405163f0dd15fd60e01b815260040160405180910390fd5b5f8061283d858561258e565b905061284881612623565b9450845f0361285a575f91505061074a565b84915061286d6040840160208501613007565b1561289c57612895856128836020860186612fdf565b6128906040870187613a98565b612c6c565b91506128bf565b6128bf856128ad6020860186612fdf565b6128ba6040870187613a98565b612c86565b509392505050565b5f80670de0b6b3a76400006128da612d16565b6128e49190613adb565b90508083116128f3575f6128fd565b6128fd81846137e1565b915061074a612934670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613adb565b83906125a2565b5f825f19048411830215820261294f575f80fd5b5091020490565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa158015612993573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526129ba9190810190613b59565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129fb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a1f91906138cb565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb0906064015b602060405180830381865afa158015612a74573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a9891906138cb565b979650505050505050565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa158015612ae0573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052612b079190810190613b59565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612b48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b6c91906138cb565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a90606401612a59565b5f6001600160f81b03821115612bd35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b03821115612c075760405163396ea70160e11b815260040160405180910390fd5b5090565b5f612c1f6001600160a01b03841683612d41565b905080515f14158015612c43575080806020019051810190612c419190613c30565b155b15610c6557604051635274afe760e01b81526001600160a01b038416600482015260240161164a565b5f60405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612cf2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061083c9190613c30565b5f611eb4427f0000000000000000000000000000000000000000000000000000000000000000612d4e565b606061074a83835f612d63565b5f612d598284613a5a565b61074a90846137e1565b606081471015612d885760405163cd78605960e01b815230600482015260240161164a565b5f80856001600160a01b03168486604051612da39190613c4b565b5f6040518083038185875af1925050503d805f8114612ddd576040519150601f19603f3d011682016040523d82523d5f602084013e612de2565b606091505b5091509150612df2868383612dfc565b9695505050505050565b606082612e1157612e0c82612e58565b61074a565b8151158015612e2857506001600160a01b0384163b155b15612e5157604051639996b31560e01b81526001600160a01b038516600482015260240161164a565b508061074a565b805115612e685780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612f5060405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612f65575f80fd5b5035919050565b5f5b83811015612f86578181015183820152602001612f6e565b50505f910152565b5f8151808452612fa5816020860160208601612f6c565b601f01601f19169290920160200192915050565b602081525f61074a6020830184612f8e565b6001600160a01b0381168114610481575f80fd5b5f60208284031215612fef575f80fd5b813561074a81612fcb565b8015158114610481575f80fd5b5f60208284031215613017575f80fd5b813561074a81612ffa565b5f805f805f805f805f6101208a8c03121561303b575f80fd5b8935985060208a0135975060408a013561305481612fcb565b965060608a013561306481612fcb565b955060808a013561307481612ffa565b945060a08a0135935060c08a013560ff81168114613090575f80fd5b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f8401126130c0575f80fd5b50813567ffffffffffffffff8111156130d7575f80fd5b6020830191508360208260051b85010111156130f1575f80fd5b9250929050565b5f805f805f806080878903121561310d575f80fd5b863561311881612fcb565b9550602087013561312881612fcb565b9450604087013567ffffffffffffffff80821115613144575f80fd5b6131508a838b016130b0565b90965094506060890135915080821115613168575f80fd5b5061317589828a016130b0565b979a9699509497509295939492505050565b5f805f806080858703121561319a575f80fd5b8435935060208501356131ac81612fcb565b925060408501356131bc81612fcb565b9396929550929360600135925050565b5f805f606084860312156131de575f80fd5b8335925060208401356131f081612fcb565b9150604084013561320081612fcb565b809150509250925092565b5f806040838503121561321c575f80fd5b82359150602083013561322e81612fcb565b809150509250929050565b5f60208284031215613249575f80fd5b813567ffffffffffffffff81111561325f575f80fd5b82016060818503121561074a575f80fd5b5f805f8060808587031215613283575f80fd5b84359350602085013561329581612fcb565b92506040850135915060608501356132ac81612fcb565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f8060408385031215613369575f80fd5b823561337481612fcb565b9150602083013561322e81612ffa565b5f805f60608486031215613396575f80fd5b8335925060208401356133a881612fcb565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516133e560208401826001600160a01b03169052565b50604083015161340060408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613472828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f80602083850312156134f0575f80fd5b823567ffffffffffffffff811115613506575f80fd5b613512858286016130b0565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b8181101561355557835183529284019291840191600101613539565b50909695505050505050565b81516001600160801b031681526101808101602083015161358d60208401826001600160801b03169052565b5060408301516135a860408401826001600160801b03169052565b5060608301516135c360608401826001600160801b03169052565b5060808301516135d86080840182600f0b9052565b5060a08301516135f360a08401826001600160801b03169052565b5060c083015161360e60c08401826001600160801b03169052565b5060e083015161362960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526134d7565b5f805f805f60a08688031215613686575f80fd5b85359450602086013561369881612fcb565b935060408601356136a881612fcb565b92506060860135915060808601356136bf81612fcb565b809150509295509295909350565b5f80604083850312156136de575f80fd5b82356136e981612fcb565b9150602083013561322e81612fcb565b5f60208083525f84545f60018260011c9150600183168061371b57607f831692505b60208310810361373957634e487b7160e01b5f52602260045260245ffd5b6020880183905260408801818015613758576001811461376e57613797565b60ff198616825284151560051b82019650613797565b5f8b8152602090205f5b8681101561379157815484820152908501908901613778565b83019750505b50949998505050505050505050565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b8082018082111561079a5761079a6137ba565b8181038181111561079a5761079a6137ba565b5f8060408385031215613805575f80fd5b82519150602083015161322e81612ffa565b5f60208284031215613827575f80fd5b815161074a81612fcb565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f8251613885816011850160208701612f6c565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f82516138be816012850160208701612f6c565b9190910160120192915050565b5f602082840312156138db575f80fd5b5051919050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561390b5761390b613832565b604052919050565b5f67ffffffffffffffff82111561392c5761392c613832565b5060051b60200190565b5f6020808385031215613947575f80fd5b825167ffffffffffffffff81111561395d575f80fd5b8301601f8101851361396d575f80fd5b805161398061397b82613913565b6138e2565b81815260059190911b8201830190838101908783111561399e575f80fd5b928401925b82841015612a985783516139b681612fcb565b825292840192908401906139a3565b6f242ca822a9222924ab2296a627a7239d60811b81525f82516139ef816010850160208701612f6c565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f8251613885816011850160208701612f6c565b8181035f831280158383131683831282161715611273576112736137ba565b634e487b7160e01b5f52601260045260245ffd5b5f82613a6857613a68613a46565b500690565b5f60018201613a7e57613a7e6137ba565b5060010190565b5f82613a9357613a93613a46565b500490565b5f808335601e19843603018112613aad575f80fd5b83018035915067ffffffffffffffff821115613ac7575f80fd5b6020019150368190038213156130f1575f80fd5b808202811582820484141761079a5761079a6137ba565b5f82601f830112613b01575f80fd5b81516020613b1161397b83613913565b8083825260208201915060208460051b870101935086841115613b32575f80fd5b602086015b84811015613b4e5780518352918301918301613b37565b509695505050505050565b5f805f60608486031215613b6b575f80fd5b835167ffffffffffffffff80821115613b82575f80fd5b818601915086601f830112613b95575f80fd5b81516020613ba561397b83613913565b82815260059290921b8401810191818101908a841115613bc3575f80fd5b8286015b84811015613bf957805186811115613bdd575f80fd5b613beb8d86838b0101613af2565b845250918301918301613bc7565b5091890151919750909350505080821115613c12575f80fd5b50613c1f86828701613af2565b925050604084015190509250925092565b5f60208284031215613c40575f80fd5b815161074a81612ffa565b5f8251613c5c818460208701612f6c565b919091019291505056fea2646970667358221220f8cb2e7e0b30a5ebfbbbe9dfc0af59b14d26a68115a6d152152c1b9c01ef524264736f6c63430008160033',
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
