export const ChainlinkTarget0 = {
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
                    "name": "__aggregator",
                    "type": "address",
                    "internalType": "contract IChainlinkAggregatorV3"
                },
                {
                    "name": "__decimals",
                    "type": "uint8",
                    "internalType": "uint8"
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
            "name": "aggregator",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IChainlinkAggregatorV3"
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
            "name": "UnsafeCastToUint256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102c060405234801562000011575f80fd5b5060405162003d9438038062003d948339810160408190526200003491620001c6565b60015f5583516001600160a01b039081166080908152602080870151831660a0908152918701516101a052908601516101c05260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a0151909152908801805151909252815190920151909152805160409081015161016052905160609081015161018052908601518216610240529094015161026052918316610220529091166102a05260ff166102805262000326565b60405161020081016001600160401b03811182821017156200012257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200013f575f80fd5b919050565b5f6080828403121562000155575f80fd5b604051608081016001600160401b03811182821017156200018457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b805160ff811681146200013f575f80fd5b5f805f808486036102c0811215620001dc575f80fd5b61026080821215620001ec575f80fd5b620001f6620000f2565b9150620002038762000128565b8252620002136020880162000128565b6020830152620002266040880162000128565b6040830152606087015160608301526080870151608083015260a087015160a083015260c087015160c083015260e087015160e08301526101008088015181840152506101208088015181840152506101408088015181840152506101606200029181890162000128565b90830152610180620002a588820162000128565b908301526101a0620002b988820162000128565b908301526101c0620002cd88820162000128565b908301526101e0620002e28989830162000144565b8184015250819550620002f781880162000128565b945050506200030a610280860162000128565b91506200031b6102a08601620001b5565b905092959194509250565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516138ff620004955f395f81816107500152818161259001526125bb01525f61078901525f8181610d4f015261231801525f8181610d2001526122db01525f8181610bfc01528181610e7f01528181610f0d01528181610f9b0152818161102901528181611632015281816116c80152818161188a01528181611ea201528181611f7601526120c701525f610de701525f8181610dc101526124bd01525f8181610d9b015261249701525f8181610d75015261247101525f61113401525f61110e01525f6110e801525f6110c201525f8181610e5901526124e301525f8181610e0d015281816112bf015261286001525f8181610e3301526129de01525f818161061e01528181610cf101528181611e1701526129b001525f8181610cc2015261125c01526138ff5ff3fe608060405234801561000f575f80fd5b5060043610610233575f3560e01c806354fd4d5011610135578063bd85b039116100b4578063cf210e6511610079578063cf210e65146104ef578063d816574314610502578063e44808bc14610517578063e985e9c51461052a578063fba560081461053d575f80fd5b8063bd85b03914610499578063becee9c3146104ac578063c55dae63146104cc578063c69e16ad146104d4578063c6e6f592146104dc575f80fd5b80639cd241af116100fa5780639cd241af1461043a578063a22cb4651461044d578063ab033ea914610460578063b0d9658014610471578063b88fed9f14610486575f80fd5b806354fd4d50146103f057806360246c88146103f85780637180c8ca1461040d5780637ecebe001461041f578063950c5d0314610432575f80fd5b806320fc4881116101c15780633a98ef39116101865780633a98ef391461038c5780633e691db91461039457806346fbf68e146103a75780634e41a1fb146103ca5780634ed2d6ac146103dd575f80fd5b806320fc4881146102f157806321ff32a914610336578063245a7bfc14610357578063313ce5671461035f5780633656eec214610379575f80fd5b806306fdde031161020757806306fdde03146102905780630a4e14931461029857806314e5f07b146102b857806317fad7fc146102cb5780631c0f12b6146102de575f80fd5b8062ad800c1461023757806301681a621461026057806302329a291461027557806304baa00b14610288575b5f80fd5b61024a610245366004612ca9565b61056c565b6040516102579190612d0d565b60405180910390f35b61027361026e366004612d33565b6105a3565b005b610273610283366004612d5b565b6105ac565b61024a6105b5565b61024a6105f9565b6102a0610610565b6040516001600160a01b039091168152602001610257565b6102736102c6366004612d76565b61064f565b6102736102d9366004612e4c565b61066b565b6102736102ec366004612edb565b610681565b6103046102ff366004612ca9565b610694565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610257565b610349610344366004612f20565b6106fd565b604051908152602001610257565b6102a0610742565b610367610781565b60405160ff9091168152602001610257565b610349610387366004612f5f565b6107ba565b6103496107f2565b6103496103a2366004612f8d565b610810565b6103ba6103b5366004612d33565b61081a565b6040519015158152602001610257565b61024a6103d8366004612ca9565b610839565b6102736103eb366004612fc4565b610847565b61024a610895565b6104006108ca565b604051610257919061300b565b61027361041b3660046130ac565b5050565b61034961042d366004612d33565b610bc3565b6102a0610bee565b6102736104483660046130d8565b610c2d565b61027361045b3660046130ac565b610c3e565b61027361046e366004612d33565b50565b610479610ca9565b604051610257919061310d565b610349610494366004612ca9565b611169565b6103496104a7366004612ca9565b611176565b6104bf6104ba366004613233565b611197565b6040516102579190613272565b6102a061124e565b61034961128d565b6103496104ea366004612ca9565b6112a6565b6103496104fd366004612ca9565b6112b3565b61050a6112e9565b60405161025791906132b5565b6102736105253660046133c6565b6113f4565b6103ba610538366004613421565b61143c565b61054561147f565b6040805182516001600160801b039081168252602093840151169281019290925201610257565b606061059e61057a836114dd565b60405160200161058a9190612d0d565b604051602081830303815290604052611603565b919050565b61046e81611627565b61046e81611888565b60606105f660405180604001604052806013815260200172436861696e6c696e6b4879706572647269766560681b81525060405160200161058a9190612d0d565b90565b60606105f6600160405160200161058a919061344d565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f6910161058a565b6106608989898989898989896119a0565b505050505050505050565b610679868686868686611b92565b505050505050565b61068e8484848433611c45565b50505050565b604080516060810182525f808252602082018190529181019190915261059e60085f8481526020019081526020015f2060405160200161058a919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261073b910161058a565b9392505050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f6910161058a565b6040805160ff7f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f6910161058a565b5f828152600a602090815260408083206001600160a01b03851684528252808320548151928301526107ec910161058a565b92915050565b5f6105f66107fe611e00565b60405160200161058a91815260200190565b5f6107ec82611e8d565b5f61059e610827836120c3565b6040805191151560208301520161058a565b606061059e61057a836121a1565b836108518161229d565b6001600160a01b0316336001600160a01b03161461088257604051632aab8bd360e01b815260040160405180910390fd5b61088e8585858561235a565b5050505050565b60606105f660405180604001604052806007815260200166076312e302e32360cc1b81525060405160200161058a9190612d0d565b610934604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f61093d6123c6565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b03909216916109a79190613522565b6109b19190613535565b90505f8215610ac05773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109dd856123d8565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a8c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab09190613548565b509050610abd8184612562565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610b9057610b8b8486612576565b610b92565b5f5b81526003546001600160801b0316602091820152604051919250610bbc9161058a9184910161300b565b5050505090565b6001600160a01b0381165f908152600e602090815260408083205481519283015261059e910161058a565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f6910161058a565b610c398383833361235a565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cb1612bd5565b6105f66040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ed9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610efd9190613576565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f67573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f8b9190613576565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ff5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110199190613576565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611083573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110a79190613576565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161058a919061310d565b5f61059e6107fe8361258a565b5f818152600b602090815260408083205481519283015261059e910161058a565b60605f8267ffffffffffffffff8111156111b3576111b3613591565b6040519080825280602002602001820160405280156111dc578160200160208202803683370190505b5090505f5b83811015611232575f8585838181106111fc576111fc6135a5565b9050602002013590505f815490508084848151811061121d5761121d6135a5565b602090810291909101015250506001016111e1565b506112478160405160200161058a9190613272565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f6910161058a565b5f6105f660095460405160200161058a91815260200190565b5f61059e6107fe836125b5565b5f61059e6107fe6112e47f000000000000000000000000000000000000000000000000000000000000000085613522565b6125e0565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105f6600260405160200161058a919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b846113fe8161229d565b6001600160a01b0316336001600160a01b03161461142f57604051632aab8bd360e01b815260040160405180910390fd5b6106798686868686611c45565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107ec910161058a565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105f69060600161058a565b606060f882901c6001600160f81b0383165f6114f882612620565b90505f83600381111561150d5761150d6134fa565b0361153f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506115fb565b6001836003811115611553576115536134fa565b0361157f578060405160200161156991906135b9565b60405160208183030381529060405293506115fb565b6002836003811115611593576115936134fa565b036115a9578060405160200161156991906135f1565b60038360038111156115bd576115bd6134fa565b036115fb576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161161e9190612d0d565b60405180910390fd5b61162f6126d2565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa15801561168c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116b09190613576565b9050336001600160a01b0382161480159061175c57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611722573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117469190613576565b6001600160a01b0316336001600160a01b031614155b801561176e575061176c336120c3565b155b1561178b576040516282b42960e81b815260040160405180910390fd5b5f611794611e00565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa1580156117db573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117ff919061362a565b90506118156001600160a01b03851684836126fa565b8161181e611e00565b1461183c576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061046e60015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118e4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119089190613576565b6001600160a01b0316336001600160a01b03161415801561192f575061192d336120c3565b155b1561194c576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061199590831515815260200190565b60405180910390a150565b834211156119c15760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166119e85760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611ad2573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b1057604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611baf57506001600160a01b038516155b15611bcd5760405163f0dd15fd60e01b815260040160405180910390fd5b828114611bed5760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c3c57611c34858583818110611c0c57611c0c6135a5565b905060200201358888868686818110611c2757611c276135a5565b9050602002013533611c45565b600101611bef565b50505050505050565b6001600160a01b0384161580611c6257506001600160a01b038316155b15611c805760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611d40576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611d40575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d3e575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d38908490613535565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611d71908490613535565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611da7908490613522565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611e64573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e88919061362a565b905090565b5f611e966126d2565b611e9f8261274c565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611efc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f209190613576565b90506001600160a01b038116611f396020850185612d33565b6001600160a01b031614611f6057604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061200a57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fd0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ff49190613576565b6001600160a01b0316336001600160a01b031614155b801561201c575061201a336120c3565b155b15612039576040516282b42960e81b815260040160405180910390fd5b5f6120426123c6565b600980545f909155909150612058818387612781565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461209760408a0160208b01612d5b565b60408051938452602084019290925215159082015260600160405180910390a250505061059e60015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa158015612120573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526121479190810190613641565b90505f5b815181101561219857836001600160a01b0316828281518110612170576121706135a5565b60200260200101516001600160a01b031603612190575060019392505050565b60010161214b565b505f9392505050565b606060f882901c6001600160f81b0383165f6121bc82612620565b90505f8360038111156121d1576121d16134fa565b03612203576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506115fb565b6001836003811115612217576122176134fa565b0361222d57806040516020016115699190613701565b6002836003811115612241576122416134fa565b0361225757806040516020016115699190613738565b600383600381111561226b5761226b6134fa565b036115fb57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611e88670de0b6b3a764000061258a565b6124306040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916125289116612817565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261255a92900416612817565b905292915050565b5f61073b8383670de0b6b3a764000061288b565b5f61073b83670de0b6b3a76400008461288b565b5f6107ec7f0000000000000000000000000000000000000000000000000000000000000000836128a6565b5f6107ec7f0000000000000000000000000000000000000000000000000000000000000000836128ba565b5f612605600b5f6125f26002866128c7565b81526020019081526020015f20546128fb565b612616600b5f6125f26001876128c7565b6107ec9190613763565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b84156126c457612659600a86613796565b612664906030613522565b60f81b8260016126748487613535565b61267e9190613535565b8151811061268e5761268e6135a5565b60200101906001600160f81b03191690815f1a905350806126ae816137a9565b91506126bd9050600a866137c1565b9450612648565b918290030190815292915050565b60025f54036126f457604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c39908490612928565b5f61275a6020830183612d33565b6001600160a01b03160361046e5760405163f0dd15fd60e01b815260040160405180910390fd5b5f8061278d8585612562565b9050612798816125b5565b9450845f036127aa575f91505061073b565b8491506127bd6040840160208501612d5b565b156127ec576127e5856127d36020860186612d33565b6127e060408701876137d4565b612989565b915061280f565b61280f856127fd6020860186612d33565b61280a60408701876137d4565b6129a3565b509392505050565b5f80670de0b6b3a764000061282a6129d7565b6128349190613817565b9050808311612843575f61284d565b61284d8184613535565b915061073b612884670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613817565b8390612576565b5f825f19048411830215820261289f575f80fd5b5091020490565b5f61073b6128b384612a02565b8390612562565b5f61073b61288484612a02565b5f6001600160f81b038211156128f05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b038211156129245760405163396ea70160e11b815260040160405180910390fd5b5090565b5f61293c6001600160a01b03841683612a73565b905080515f1415801561296057508080602001905181019061295e919061382e565b155b15610c3957604051635274afe760e01b81526001600160a01b038416600482015260240161161e565b5f60405163350b944160e11b815260040160405180910390fd5b61068e6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866126fa565b5f611e88427f0000000000000000000000000000000000000000000000000000000000000000612a80565b5f80826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015612a40573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a649190613862565b50505091505061073b81612a95565b606061073b83835f612ab7565b5f612a8b8284613796565b61073b9084613535565b5f808212156129245760405163071d137160e51b815260040160405180910390fd5b606081471015612adc5760405163cd78605960e01b815230600482015260240161161e565b5f80856001600160a01b03168486604051612af791906138ae565b5f6040518083038185875af1925050503d805f8114612b31576040519150601f19603f3d011682016040523d82523d5f602084013e612b36565b606091505b5091509150612b46868383612b50565b9695505050505050565b606082612b6557612b6082612bac565b61073b565b8151158015612b7c57506001600160a01b0384163b155b15612ba557604051639996b31560e01b81526001600160a01b038516600482015260240161161e565b508061073b565b805115612bbc5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612ca460405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612cb9575f80fd5b5035919050565b5f5b83811015612cda578181015183820152602001612cc2565b50505f910152565b5f8151808452612cf9816020860160208601612cc0565b601f01601f19169290920160200192915050565b602081525f61073b6020830184612ce2565b6001600160a01b038116811461046e575f80fd5b5f60208284031215612d43575f80fd5b813561073b81612d1f565b801515811461046e575f80fd5b5f60208284031215612d6b575f80fd5b813561073b81612d4e565b5f805f805f805f805f6101208a8c031215612d8f575f80fd5b8935985060208a0135975060408a0135612da881612d1f565b965060608a0135612db881612d1f565b955060808a0135612dc881612d4e565b945060a08a0135935060c08a013560ff81168114612de4575f80fd5b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f840112612e14575f80fd5b50813567ffffffffffffffff811115612e2b575f80fd5b6020830191508360208260051b8501011115612e45575f80fd5b9250929050565b5f805f805f8060808789031215612e61575f80fd5b8635612e6c81612d1f565b95506020870135612e7c81612d1f565b9450604087013567ffffffffffffffff80821115612e98575f80fd5b612ea48a838b01612e04565b90965094506060890135915080821115612ebc575f80fd5b50612ec989828a01612e04565b979a9699509497509295939492505050565b5f805f8060808587031215612eee575f80fd5b843593506020850135612f0081612d1f565b92506040850135612f1081612d1f565b9396929550929360600135925050565b5f805f60608486031215612f32575f80fd5b833592506020840135612f4481612d1f565b91506040840135612f5481612d1f565b809150509250925092565b5f8060408385031215612f70575f80fd5b823591506020830135612f8281612d1f565b809150509250929050565b5f60208284031215612f9d575f80fd5b813567ffffffffffffffff811115612fb3575f80fd5b82016060818503121561073b575f80fd5b5f805f8060808587031215612fd7575f80fd5b843593506020850135612fe981612d1f565b925060408501359150606085013561300081612d1f565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f80604083850312156130bd575f80fd5b82356130c881612d1f565b91506020830135612f8281612d4e565b5f805f606084860312156130ea575f80fd5b8335925060208401356130fc81612d1f565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161313960208401826001600160a01b03169052565b50604083015161315460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401518184015250610160808401516131c6828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f8060208385031215613244575f80fd5b823567ffffffffffffffff81111561325a575f80fd5b61326685828601612e04565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b818110156132a95783518352928401929184019160010161328d565b50909695505050505050565b81516001600160801b03168152610180810160208301516132e160208401826001600160801b03169052565b5060408301516132fc60408401826001600160801b03169052565b50606083015161331760608401826001600160801b03169052565b50608083015161332c6080840182600f0b9052565b5060a083015161334760a08401826001600160801b03169052565b5060c083015161336260c08401826001600160801b03169052565b5060e083015161337d60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b0381168285015261322b565b5f805f805f60a086880312156133da575f80fd5b8535945060208601356133ec81612d1f565b935060408601356133fc81612d1f565b925060608601359150608086013561341381612d1f565b809150509295509295909350565b5f8060408385031215613432575f80fd5b823561343d81612d1f565b91506020830135612f8281612d1f565b5f60208083525f84545f60018260011c9150600183168061346f57607f831692505b60208310810361348d57634e487b7160e01b5f52602260045260245ffd5b60208801839052604088018180156134ac57600181146134c2576134eb565b60ff198616825284151560051b820196506134eb565b5f8b8152602090205f5b868110156134e5578154848201529085019089016134cc565b83019750505b50949998505050505050505050565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b808201808211156107ec576107ec61350e565b818103818111156107ec576107ec61350e565b5f8060408385031215613559575f80fd5b825191506020830151612f8281612d4e565b805161059e81612d1f565b5f60208284031215613586575f80fd5b815161073b81612d1f565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f82516135e4816011850160208701612cc0565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f825161361d816012850160208701612cc0565b9190910160120192915050565b5f6020828403121561363a575f80fd5b5051919050565b5f6020808385031215613652575f80fd5b825167ffffffffffffffff80821115613669575f80fd5b818501915085601f83011261367c575f80fd5b81518181111561368e5761368e613591565b8060051b604051601f19603f830116810181811085821117156136b3576136b3613591565b6040529182528482019250838101850191888311156136d0575f80fd5b938501935b828510156136f5576136e68561356b565b845293850193928501926136d5565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f825161372b816010850160208701612cc0565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f82516135e4816011850160208701612cc0565b8181035f8312801583831316838312821617156112475761124761350e565b634e487b7160e01b5f52601260045260245ffd5b5f826137a4576137a4613782565b500690565b5f600182016137ba576137ba61350e565b5060010190565b5f826137cf576137cf613782565b500490565b5f808335601e198436030181126137e9575f80fd5b83018035915067ffffffffffffffff821115613803575f80fd5b602001915036819003821315612e45575f80fd5b80820281158282048414176107ec576107ec61350e565b5f6020828403121561383e575f80fd5b815161073b81612d4e565b805169ffffffffffffffffffff8116811461059e575f80fd5b5f805f805f60a08688031215613876575f80fd5b61387f86613849565b94506020860151935060408601519250606086015191506138a260808701613849565b90509295509295909350565b5f82516138bf818460208701612cc0565b919091019291505056fea2646970667358221220865bcc4e363df9c8c27d2739b1d8270b265f9ec9ec21b7eff679a90dcae2e04c64736f6c63430008160033',
    methodIdentifiers: {
        "adminController()": "950c5d03",
        "aggregator()": "245a7bfc",
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
