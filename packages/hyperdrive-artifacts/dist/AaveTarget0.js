export const AaveTarget0 = {
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
            "name": "setCheckpointRewarder",
            "inputs": [
                {
                    "name": "_checkpointRewarder",
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
            "name": "vault",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IPool"
                }
            ],
            "stateMutability": "view"
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
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b506040516200407d3803806200407d8339810160408190526200003591620005cc565b600160005580516001600160a01b039081166080908152602080840151831660a0818152928501516101a0908152928501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151850151905280516040908101516101609081529151606090810151610180908152828a0151891661022052908901516102405291880151600980549189166001600160a01b031992831617905591880151600a805491891691841691909117905594870151600b805491881691831691909117905590860151600c8054919096169116179093558151633a9ae92360e11b81529151637535d2469260048082019392918290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f9190620006df565b6001600160a01b03908116610260819052608051620001b29216906001620001b9565b5062000754565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021390859083906200028516565b6200027f57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002739186916200033616565b6200027f848262000336565b50505050565b6000806000846001600160a01b031684604051620002a49190620006ff565b6000604051808303816000865af19150503d8060008114620002e3576040519150601f19603f3d011682016040523d82523d6000602084013e620002e8565b606091505b5091509150818015620003165750805115806200031657508080602001905181019062000316919062000730565b80156200032d57506000856001600160a01b03163b115b95945050505050565b60006200034d6001600160a01b03841683620003a9565b905080516000141580156200037557508080602001905181019062000373919062000730565b155b15620003a457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003b983836000620003c0565b9392505050565b606081471015620003e75760405163cd78605960e01b81523060048201526024016200039b565b600080856001600160a01b03168486604051620004059190620006ff565b60006040518083038185875af1925050503d806000811462000444576040519150601f19603f3d011682016040523d82523d6000602084013e62000449565b606091505b5090925090506200045c86838362000466565b9695505050505050565b6060826200047f576200047982620004ca565b620003b9565b81511580156200049757506001600160a01b0384163b155b15620004c257604051639996b31560e01b81526001600160a01b03851660048201526024016200039b565b5080620003b9565b805115620004db5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200052957634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004f457600080fd5b805162000552816200052f565b919050565b6000608082840312156200056a57600080fd5b604051608081016001600160401b03811182821017156200059b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215620005e057600080fd5b620005ea620004f7565b620005f58362000545565b8152620006056020840162000545565b6020820152620006186040840162000545565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101606200068381850162000545565b908201526101806200069784820162000545565b908201526101a0620006ab84820162000545565b908201526101c0620006bf84820162000545565b908201526101e0620006d48585830162000557565b908201529392505050565b600060208284031215620006f257600080fd5b8151620003b9816200052f565b6000825160005b8181101562000722576020818601810151858301520162000706565b506000920191825250919050565b6000602082840312156200074357600080fd5b81518015158114620003b957600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516137df6200089e60003960008181611365015281816122ac015281816122f9015261280e015260008181610da20152611e18015260008181610d7b0152611ddb01526000610e42015260008181610e1c0152611fd0015260008181610df60152611faa015260008181610dcc0152611f8401526000610f7e01526000610f5901526000610f3401526000610f11015260008181610eb60152611ff6015260008181610e680152818161112d01526126ac015260008181610e8f015261299801526000818161065d01528181610d4f015281816124cd01526128ea01526000818161078d01528181610d2a015281816110c60152818161228b015281816122d8015261283d01526137df6000f3fe608060405234801561001057600080fd5b50600436106102475760003560e01c80637ecebe001161013b578063c55dae63116100b8578063e44808bc1161007c578063e44808bc1461053d578063e4af29d114610550578063e985e9c514610563578063fba5600814610576578063fbfa77cf146105a557600080fd5b8063c55dae63146104f2578063c69e16ad146104fa578063c6e6f59214610502578063cf210e6514610515578063d81657431461052857600080fd5b8063ab033ea9116100ff578063ab033ea914610484578063b0d9658014610497578063b88fed9f146104ac578063bd85b039146104bf578063becee9c3146104d257600080fd5b80637ecebe00146104255780639cd241af14610438578063a22cb4651461044b578063a42dce801461045e578063a51076261461047157600080fd5b806321ff32a9116101c95780634e41a1fb1161018d5780634e41a1fb146103cf5780634ed2d6ac146103e257806354fd4d50146103f557806360246c88146103fd5780637180c8ca1461041257600080fd5b806321ff32a91461034b578063313ce5671461036c5780633656eec2146103865780633e691db91461039957806346fbf68e146103ac57600080fd5b80630a4e1493116102105780630a4e1493146102ad57806314e5f07b146102cd57806317fad7fc146102e05780631c0f12b6146102f357806320fc48811461030657600080fd5b8062ad800c1461024c57806301681a621461027557806302329a291461028a57806304baa00b1461029d57806306fdde03146102a5575b600080fd5b61025f61025a366004612c57565b6105ad565b60405161026c9190612cc0565b60405180910390f35b610288610283366004612ce8565b6105e4565b005b610288610298366004612d13565b6105f0565b61025f6105f9565b61025f610638565b6102b561064f565b6040516001600160a01b03909116815260200161026c565b6102886102db366004612d3f565b61068f565b6102886102ee366004612e1a565b6106ab565b610288610301366004612eaf565b6106c1565b610319610314366004612c57565b6106d4565b6040805182516001600160801b039081168252602080850151821690830152928201519092169082015260600161026c565b61035e610359366004612ef7565b610740565b60405190815260200161026c565b610374610786565b60405160ff909116815260200161026c565b61035e610394366004612f39565b610821565b61035e6103a7366004612f69565b61085a565b6103bf6103ba366004612ce8565b610865565b604051901515815260200161026c565b61025f6103dd366004612c57565b61089b565b6102886103f0366004612fa4565b6108a9565b61025f6108f7565b61040561092c565b60405161026c9190612fee565b61028861042036600461308f565b610c3b565b61035e610433366004612ce8565b610c49565b6102886104463660046130bd565b610c75565b61028861045936600461308f565b610c86565b61028861046c366004612ce8565b610cf2565b61028861047f366004612ce8565b610cfb565b610288610492366004612ce8565b610d04565b61049f610d0d565b60405161026c91906130f5565b61035e6104ba366004612c57565b610fbb565b61035e6104cd366004612c57565b610fdb565b6104e56104e036600461321b565b610ffd565b60405161026c919061325d565b6102b56110b8565b61035e6110f8565b61035e610510366004612c57565b611112565b61035e610523366004612c57565b611120565b610530611157565b60405161026c91906132a1565b61028861054b3660046133b2565b611263565b61028861055e366004612ce8565b6112ab565b6103bf610571366004613411565b6112b4565b61057e6112f8565b6040805182516001600160801b03908116825260209384015116928101929092520161026c565b6102b5611357565b60606105df6105bb83611397565b6040516020016105cb9190612cc0565b6040516020818303038152906040526114bf565b919050565b6105ed816114e3565b50565b6105ed81611659565b60606106356040518060400160405280600e81526020016d416176654879706572647269766560901b8152506040516020016105cb9190612cc0565b90565b606061063560016040516020016105cb919061343f565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161063591016105cb565b6106a08989898989898989896116f5565b505050505050505050565b6106b98686868686866118ec565b505050505050565b6106ce84848484336119a0565b50505050565b60408051606081018252600080825260208201819052918101919091526105df600860008481526020019081526020016000206040516020016105cb919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b60008381526012602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261077f91016105cb565b9392505050565b60006106357f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080d91906134eb565b6040805160ff9092166020830152016105cb565b6000828152600f602090815260408083206001600160a01b038516845282528083205481519283015261085491016105cb565b92915050565b600061085482611b61565b6001600160a01b0381166000908152600e602090815260408083205490516105df926105cb9260ff169101901515815260200190565b60606105df6105bb83611c9f565b836108b381611d9d565b6001600160a01b0316336001600160a01b0316146108e457604051632aab8bd360e01b815260040160405180910390fd5b6108f085858585611e5a565b5050505050565b6060610635604051806040016040528060078152602001663b18971817189b60c91b8152506040516020016105cb9190612cc0565b6109a5604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006109af611ec7565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691610a1a9190613534565b610a249190613547565b905060008215610b365773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610a5185611edf565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610b02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b26919061355a565b509050610b338184612075565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610c0757610c02848661208a565b610c0a565b60005b81526003546001600160801b0316602091820152604051919250610c34916105cb91849101612fee565b5050505090565b610c45828261209f565b5050565b6001600160a01b0381166000908152601360209081526040808320548151928301526105df91016105cb565b610c8183838333611e5a565b505050565b3360008181526011602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6105ed81612128565b6105ed8161219c565b6105ed81612210565b610d15612b70565b60408051610200810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f00000000000000000000000000000000000000000000000000000000000000006101208601527f00000000000000000000000000000000000000000000000000000000000000006101408601526009548416610160860152600a548416610180860152600b5484166101a0860152600c549093166101c0850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101e08301919091529151610635926105cb9291016130f5565b60006105df610fc983612284565b6040516020016105cb91815260200190565b6000818152601060209081526040808320548151928301526105df91016105cb565b606060008267ffffffffffffffff81111561101a5761101a61357f565b604051908082528060200260200182016040528015611043578160200160208202803683370190505b50905060005b8381101561109c57600085858381811061106557611065613595565b9050602002013590506000815490508084848151811061108757611087613595565b60209081029190910101525050600101611049565b506110b1816040516020016105cb919061325d565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161063591016105cb565b6000610635600d546040516020016105cb91815260200190565b60006105df610fc9836122d1565b60006105df610fc96111527f000000000000000000000000000000000000000000000000000000000000000085613534565b61231e565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261063560026040516020016105cb919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461126d81611d9d565b6001600160a01b0316336001600160a01b03161461129e57604051632aab8bd360e01b815260040160405180910390fd5b6106b986868686866119a0565b6105ed81612362565b6001600160a01b038281166000908152601160209081526040808320938516835292815282822054835160ff909116151591810191909152909161085491016105cb565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610635906060016105cb565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161063591016105cb565b606060f882901c6001600160f81b03831660006113b3826123d6565b905060008360038111156113c9576113c9613508565b036113fb576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506114b7565b600183600381111561140f5761140f613508565b0361143b578060405160200161142591906135ab565b60405160208183030381529060405293506114b7565b600283600381111561144f5761144f613508565b03611465578060405160200161142591906135e4565b600383600381111561147957611479613508565b036114b7576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016114da9190612cc0565b60405180910390fd5b6114eb61248b565b600b54336000908152600e60205260409020546001600160a01b039091169060ff161580156115235750336001600160a01b03821614155b801561153a57506009546001600160a01b03163314155b15611557576040516282b42960e81b815260040160405180910390fd5b60006115616124b5565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156115ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cf919061361e565b90506115e56001600160a01b0385168483612540565b816115ee6124b5565b1461160c576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105ed6001600055565b336000908152600e602052604090205460ff1615801561168457506009546001600160a01b03163314155b156116a1576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906116ea90831515815260200190565b60405180910390a150565b834211156117165760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661173d5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526013602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561182b573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461186957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389811660008181526013602090815260408083208054600101905560118252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061190957506001600160a01b038516155b156119275760405163f0dd15fd60e01b815260040160405180910390fd5b8281146119475760405163174861a760e31b815260040160405180910390fd5b60005b838110156119975761198f85858381811061196757611967613595565b90506020020135888886868681811061198257611982613595565b90506020020135336119a0565b60010161194a565b50505050505050565b6001600160a01b03841615806119bd57506001600160a01b038316155b156119db5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611a9f576001600160a01b0380851660009081526011602090815260408083209385168352929052205460ff16611a9f5760008581526012602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611a9d5760008681526012602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611a97908490613547565b90915550505b505b6000858152600f602090815260408083206001600160a01b038816845290915281208054849290611ad1908490613547565b90915550506000858152600f602090815260408083206001600160a01b038716845290915281208054849290611b08908490613534565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611b6b61248b565b611b7482612592565b600a546001600160a01b031680611b8e6020850185612ce8565b6001600160a01b031614611bb557604051630ad13b3360e21b815260040160405180910390fd5b336000908152600e602052604090205460ff16158015611bde5750336001600160a01b03821614155b8015611bf557506009546001600160a01b03163314155b15611c12576040516282b42960e81b815260040160405180910390fd5b6000611c1c611ec7565b600d80546000909155909150611c338183876125c8565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a60383618584611c7260408a0160208b01612d13565b60408051938452602084019290925215159082015260600160405180910390a25050506105df6001600055565b606060f882901c6001600160f81b0383166000611cbb826123d6565b90506000836003811115611cd157611cd1613508565b03611d03576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506114b7565b6001836003811115611d1757611d17613508565b03611d2d57806040516020016114259190613637565b6002836003811115611d4157611d41613508565b03611d575780604051602001611425919061366f565b6003836003811115611d6b57611d6b613508565b036114b757505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526012602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611eda670de0b6b3a7640000612284565b905090565b611f436040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161203b9116612661565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261206d92900416612661565b905292915050565b600061077f8383670de0b6b3a76400006126d7565b600061077f83670de0b6b3a7640000846126d7565b6009546001600160a01b031633146120c9576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600e6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6009546001600160a01b03163314612152576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6009546001600160a01b031633146121c6576040516282b42960e81b815260040160405180910390fd5b600c80546001600160a01b0319166001600160a01b0383169081179091556040517fae062fb82c932c653cd44617343ecda1d13e375e0d6f20d969c944fbda1963d390600090a250565b6009546001600160a01b0316331461223a576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006108547f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846126f5565b60006108547f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612720565b600061234660106000612332600286612744565b815260200190815260200160002054612779565b61235860106000612332600187612744565b610854919061369b565b6009546001600160a01b0316331461238c576040516282b42960e81b815260040160405180910390fd5b600b80546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561247d57612411600a866136d1565b61241c906030613534565b60f81b82600161242c8487613547565b6124369190613547565b8151811061244657612446613595565b60200101906001600160f81b031916908160001a90535080612467816136e5565b91506124769050600a866136fe565b9450612400565b918290030190815292915050565b6002600054036124ae57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561251c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eda919061361e565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c819084906127a7565b60006125a16020830183612ce8565b6001600160a01b0316036105ed5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806125d58585612075565b90506125e0816122d1565b9450846000036125f457600091505061077f565b8491506126076040840160208501612d13565b156126365761262f8561261d6020860186612ce8565b61262a6040870187613712565b61280a565b9150612659565b612659856126476020860186612ce8565b6126546040870187613712565b6128e8565b509392505050565b600080670de0b6b3a7640000612675612990565b61267f9190613759565b905080831161268f576000612699565b6126998184613547565b915061077f6126d0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613759565b839061208a565b60008260001904841183021582026126ee57600080fd5b5091020490565b600061271861270485856129bc565b83906b033b2e3c9fd0803ce80000006126d7565b949350505050565b60006127186b033b2e3c9fd0803ce800000061273c86866129bc565b8491906126d7565b60006001600160f81b0382111561276e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156127a35760405163396ea70160e11b815260040160405180910390fd5b5090565b60006127bc6001600160a01b03841683612a2a565b905080516000141580156127e15750808060200190518101906127df9190613770565b155b15610c8157604051635274afe760e01b81526001600160a01b03841660048201526024016114da565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f000000000000000000000000000000000000000000000000000000000000000061286588612284565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303816000875af11580156128bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128df919061361e565b95945050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb8461292187612284565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561296c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f09190613770565b6000611eda427f0000000000000000000000000000000000000000000000000000000000000000612a38565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa158015612a06573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077f919061361e565b606061077f83836000612a4e565b6000612a4482846136d1565b61077f9084613547565b606081471015612a735760405163cd78605960e01b81523060048201526024016114da565b600080856001600160a01b03168486604051612a8f919061378d565b60006040518083038185875af1925050503d8060008114612acc576040519150601f19603f3d011682016040523d82523d6000602084013e612ad1565b606091505b5091509150612ae1868383612aeb565b9695505050505050565b606082612b0057612afb82612b47565b61077f565b8151158015612b1757506001600160a01b0384163b155b15612b4057604051639996b31560e01b81526001600160a01b03851660048201526024016114da565b508061077f565b805115612b575780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612c526040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612c6957600080fd5b5035919050565b60005b83811015612c8b578181015183820152602001612c73565b50506000910152565b60008151808452612cac816020860160208601612c70565b601f01601f19169290920160200192915050565b60208152600061077f6020830184612c94565b6001600160a01b03811681146105ed57600080fd5b600060208284031215612cfa57600080fd5b813561077f81612cd3565b80151581146105ed57600080fd5b600060208284031215612d2557600080fd5b813561077f81612d05565b60ff811681146105ed57600080fd5b60008060008060008060008060006101208a8c031215612d5e57600080fd5b8935985060208a0135975060408a0135612d7781612cd3565b965060608a0135612d8781612cd3565b955060808a0135612d9781612d05565b945060a08a0135935060c08a0135612dae81612d30565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612de057600080fd5b50813567ffffffffffffffff811115612df857600080fd5b6020830191508360208260051b8501011115612e1357600080fd5b9250929050565b60008060008060008060808789031215612e3357600080fd5b8635612e3e81612cd3565b95506020870135612e4e81612cd3565b9450604087013567ffffffffffffffff80821115612e6b57600080fd5b612e778a838b01612dce565b90965094506060890135915080821115612e9057600080fd5b50612e9d89828a01612dce565b979a9699509497509295939492505050565b60008060008060808587031215612ec557600080fd5b843593506020850135612ed781612cd3565b92506040850135612ee781612cd3565b9396929550929360600135925050565b600080600060608486031215612f0c57600080fd5b833592506020840135612f1e81612cd3565b91506040840135612f2e81612cd3565b809150509250925092565b60008060408385031215612f4c57600080fd5b823591506020830135612f5e81612cd3565b809150509250929050565b600060208284031215612f7b57600080fd5b813567ffffffffffffffff811115612f9257600080fd5b82016060818503121561077f57600080fd5b60008060008060808587031215612fba57600080fd5b843593506020850135612fcc81612cd3565b9250604085013591506060850135612fe381612cd3565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156130a257600080fd5b82356130ad81612cd3565b91506020830135612f5e81612d05565b6000806000606084860312156130d257600080fd5b8335925060208401356130e481612cd3565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161312160208401826001600160a01b03169052565b50604083015161313c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401518184015250610160808401516131ae828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b6000806020838503121561322e57600080fd5b823567ffffffffffffffff81111561324557600080fd5b61325185828601612dce565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561329557835183529284019291840191600101613279565b50909695505050505050565b81516001600160801b03168152610180810160208301516132cd60208401826001600160801b03169052565b5060408301516132e860408401826001600160801b03169052565b50606083015161330360608401826001600160801b03169052565b5060808301516133186080840182600f0b9052565b5060a083015161333360a08401826001600160801b03169052565b5060c083015161334e60c08401826001600160801b03169052565b5060e083015161336960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613213565b600080600080600060a086880312156133ca57600080fd5b8535945060208601356133dc81612cd3565b935060408601356133ec81612cd3565b925060608601359150608086013561340381612cd3565b809150509295509295909350565b6000806040838503121561342457600080fd5b823561342f81612cd3565b91506020830135612f5e81612cd3565b600060208083526000845481600182811c91508083168061346157607f831692505b858310810361347e57634e487b7160e01b85526022600452602485fd5b87860183815260200181801561349b57600181146134b1576134dc565b60ff198616825284151560051b820196506134dc565b60008b81526020902060005b868110156134d6578154848201529085019089016134bd565b83019750505b50949998505050505050505050565b6000602082840312156134fd57600080fd5b815161077f81612d30565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156108545761085461351e565b818103818111156108545761085461351e565b6000806040838503121561356d57600080fd5b825191506020830151612f5e81612d05565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b8152600082516135d7816011850160208701612c70565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613611816012850160208701612c70565b9190910160120192915050565b60006020828403121561363057600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613662816010850160208701612c70565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b8152600082516135d7816011850160208701612c70565b81810360008312801583831316838312821617156110b1576110b161351e565b634e487b7160e01b600052601260045260246000fd5b6000826136e0576136e06136bb565b500690565b6000600182016136f7576136f761351e565b5060010190565b60008261370d5761370d6136bb565b500490565b6000808335601e1984360301811261372957600080fd5b83018035915067ffffffffffffffff82111561374457600080fd5b602001915036819003821315612e1357600080fd5b80820281158282048414176108545761085461351e565b60006020828403121561378257600080fd5b815161077f81612d05565b6000825161379f818460208701612c70565b919091019291505056fea2646970667358221220fb77dc1f334f46dc99e29cc31fe13fec42224167fa8da495877a6735f343281864736f6c63430008140033',
    methodIdentifiers: {
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
        "setCheckpointRewarder(address)": "a5107626",
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "setSweepCollector(address)": "e4af29d1",
        "sweep(address)": "01681a62",
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "vault()": "fbfa77cf",
        "vaultSharesToken()": "0a4e1493",
        "version()": "54fd4d50"
    }
};
