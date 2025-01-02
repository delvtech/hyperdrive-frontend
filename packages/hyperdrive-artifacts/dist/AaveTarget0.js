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
                },
                {
                    "name": "__adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
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
        }
    ],
    bytecode: '0x6102a060405234801562000011575f80fd5b506040516200431c3803806200431c83398101604081905262000034916200055e565b60015f5581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000110573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000136919062000698565b6001600160a01b0390811661028081905260805162000159921690600162000161565b505062000705565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bb90859083906200022c16565b6200022657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021a918691620002d616565b620002268482620002d6565b50505050565b5f805f846001600160a01b031684604051620002499190620006b6565b5f604051808303815f865af19150503d805f811462000284576040519150601f19603f3d011682016040523d82523d5f602084013e62000289565b606091505b5091509150818015620002b7575080511580620002b7575080806020019051810190620002b79190620006e4565b8015620002cd57505f856001600160a01b03163b115b95945050505050565b5f620002ec6001600160a01b0384168362000347565b905080515f1415801562000313575080806020019051810190620003119190620006e4565b155b156200034257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200035683835f6200035d565b9392505050565b606081471015620003845760405163cd78605960e01b815230600482015260240162000339565b5f80856001600160a01b03168486604051620003a19190620006b6565b5f6040518083038185875af1925050503d805f8114620003dd576040519150601f19603f3d011682016040523d82523d5f602084013e620003e2565b606091505b509092509050620003f5868383620003ff565b9695505050505050565b6060826200041857620004128262000463565b62000356565b81511580156200043057506001600160a01b0384163b155b156200045b57604051639996b31560e01b81526001600160a01b038516600482015260240162000339565b508062000356565b805115620004745780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004c057634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b03811681146200048d575f80fd5b8051620004e881620004c6565b919050565b5f60808284031215620004fe575f80fd5b604051608081016001600160401b03811182821017156200052d57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f8082840361028081121562000572575f80fd5b6102608082121562000582575f80fd5b6200058c62000490565b91506200059985620004db565b8252620005a960208601620004db565b6020830152620005bc60408601620004db565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000627818701620004db565b908301526101806200063b868201620004db565b908301526101a06200064f868201620004db565b908301526101c062000663868201620004db565b908301526101e06200067887878301620004ed565b81840152508193506200068d818601620004db565b925050509250929050565b5f60208284031215620006a9575f80fd5b81516200035681620004c6565b5f82515f5b81811015620006d75760208186018101518583015201620006bb565b505f920191825250919050565b5f60208284031215620006f5575f80fd5b8151801515811462000356575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613a8f6200088d5f395f81816115060152818161260b015281816126570152612a5401525f8181610d6a015261237201525f8181610d3b015261233501525f8181610c1701528181610e9a01528181610f2801528181610fb6015281816110440152818161168c01528181611722015281816118e401528181611efc01528181611fd0015261212101525f610e0201525f8181610ddc015261251701525f8181610db601526124f101525f8181610d9001526124cb01525f61114f01525f61112901525f61110301525f6110dd01525f8181610e74015261253d01525f8181610e28015281816112da01526128fc01525f8181610e4e0152612bd701525f818161061901528181610d0c01528181611e710152612b2d01525f818161074301528181610cdd01528181611277015281816125ea015281816126360152612a830152613a8f5ff3fe608060405234801561000f575f80fd5b5060043610610233575f3560e01c806360246c8811610135578063becee9c3116100b4578063d816574311610079578063d8165743146104fa578063e44808bc1461050f578063e985e9c514610522578063fba5600814610535578063fbfa77cf14610564575f80fd5b8063becee9c3146104a4578063c55dae63146104c4578063c69e16ad146104cc578063c6e6f592146104d4578063cf210e65146104e7575f80fd5b8063a22cb465116100fa578063a22cb46514610445578063ab033ea914610458578063b0d9658014610469578063b88fed9f1461047e578063bd85b03914610491575f80fd5b806360246c88146103f05780637180c8ca146104055780637ecebe0014610417578063950c5d031461042a5780639cd241af14610432575f80fd5b806320fc4881116101c15780633e691db9116101865780633e691db91461038c57806346fbf68e1461039f5780634e41a1fb146103c25780634ed2d6ac146103d557806354fd4d50146103e8575f80fd5b806320fc4881146102f157806321ff32a914610336578063313ce567146103575780633656eec2146103715780633a98ef3914610384575f80fd5b806306fdde031161020757806306fdde03146102905780630a4e14931461029857806314e5f07b146102b857806317fad7fc146102cb5780631c0f12b6146102de575f80fd5b8062ad800c1461023757806301681a621461026057806302329a291461027557806304baa00b14610288575b5f80fd5b61024a610245366004612e7a565b61056c565b6040516102579190612ede565b60405180910390f35b61027361026e366004612f04565b6105a3565b005b610273610283366004612f2c565b6105ac565b61024a6105b5565b61024a6105f4565b6102a061060b565b6040516001600160a01b039091168152602001610257565b6102736102c6366004612f55565b61064a565b6102736102d9366004613026565b610666565b6102736102ec3660046130b5565b61067c565b6103046102ff366004612e7a565b61068f565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610257565b6103496103443660046130fa565b6106f8565b604051908152602001610257565b61035f61073d565b60405160ff9091168152602001610257565b61034961037f366004613139565b6107d5565b61034961080d565b61034961039a366004613167565b61082b565b6103b26103ad366004612f04565b610835565b6040519015158152602001610257565b61024a6103d0366004612e7a565b610854565b6102736103e336600461319e565b610862565b61024a6108b0565b6103f86108e5565b60405161025791906131e5565b610273610413366004613286565b5050565b610349610425366004612f04565b610bde565b6102a0610c09565b6102736104403660046132b2565b610c48565b610273610453366004613286565b610c59565b610273610466366004612f04565b50565b610471610cc4565b60405161025791906132e7565b61034961048c366004612e7a565b611184565b61034961049f366004612e7a565b611191565b6104b76104b236600461340d565b6111b2565b604051610257919061344c565b6102a0611269565b6103496112a8565b6103496104e2366004612e7a565b6112c1565b6103496104f5366004612e7a565b6112ce565b610502611304565b604051610257919061348f565b61027361051d3660046135a0565b61140f565b6103b26105303660046135fb565b611457565b61053d61149a565b6040805182516001600160801b039081168252602093840151169281019290925201610257565b6102a06114f8565b606061059e61057a83611537565b60405160200161058a9190612ede565b60405160208183030381529060405261165d565b919050565b61046681611681565b610466816118e2565b60606105f16040518060400160405280600e81526020016d416176654879706572647269766560901b81525060405160200161058a9190612ede565b90565b60606105f1600160405160200161058a9190613627565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b61065b8989898989898989896119fa565b505050505050505050565b610674868686868686611bec565b505050505050565b6106898484848433611c9f565b50505050565b604080516060810182525f808252602082018190529181019190915261059e60085f8481526020019081526020015f2060405160200161058a919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610736910161058a565b9392505050565b5f6105f17f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561079d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107c191906136d4565b6040805160ff90921660208301520161058a565b5f828152600a602090815260408083206001600160a01b0385168452825280832054815192830152610807910161058a565b92915050565b5f6105f1610819611e5a565b60405160200161058a91815260200190565b5f61080782611ee7565b5f61059e6108428361211d565b6040805191151560208301520161058a565b606061059e61057a836121fb565b8361086c816122f7565b6001600160a01b0316336001600160a01b03161461089d57604051632aab8bd360e01b815260040160405180910390fd5b6108a9858585856123b4565b5050505050565b60606105f160405180604001604052806007815260200166076312e302e32360cc1b81525060405160200161058a9190612ede565b61094f604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f610958612420565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b03909216916109c29190613717565b6109cc919061372a565b90505f8215610adb5773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109f885612432565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610aa7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610acb919061373d565b509050610ad881846125bc565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610bab57610ba684866125d0565b610bad565b5f5b81526003546001600160801b0316602091820152604051919250610bd79161058a918491016131e5565b5050505090565b6001600160a01b0381165f908152600e602090815260408083205481519283015261059e910161058a565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b610c54838383336123b4565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610ccc612da6565b6105f16040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ef4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f18919061376b565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fa6919061376b565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611010573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611034919061376b565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa15801561109e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110c2919061376b565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161058a91906132e7565b5f61059e610819836125e4565b5f818152600b602090815260408083205481519283015261059e910161058a565b60605f8267ffffffffffffffff8111156111ce576111ce613786565b6040519080825280602002602001820160405280156111f7578160200160208202803683370190505b5090505f5b8381101561124d575f8585838181106112175761121761379a565b9050602002013590505f81549050808484815181106112385761123861379a565b602090810291909101015250506001016111fc565b506112628160405160200161058a919061344c565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b5f6105f160095460405160200161058a91815260200190565b5f61059e61081983612630565b5f61059e6108196112ff7f000000000000000000000000000000000000000000000000000000000000000085613717565b61267c565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105f1600260405160200161058a919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84611419816122f7565b6001600160a01b0316336001600160a01b03161461144a57604051632aab8bd360e01b815260040160405180910390fd5b6106748686868686611c9f565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610807910161058a565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105f19060600161058a565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f1910161058a565b606060f882901c6001600160f81b0383165f611552826126bc565b90505f836003811115611567576115676136ef565b03611599576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611655565b60018360038111156115ad576115ad6136ef565b036115d957806040516020016115c391906137ae565b6040516020818303038152906040529350611655565b60028360038111156115ed576115ed6136ef565b0361160357806040516020016115c391906137e6565b6003836003811115611617576116176136ef565b03611655576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016116789190612ede565b60405180910390fd5b61168961276e565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116e6573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061170a919061376b565b9050336001600160a01b038216148015906117b657507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561177c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117a0919061376b565b6001600160a01b0316336001600160a01b031614155b80156117c857506117c63361211d565b155b156117e5576040516282b42960e81b815260040160405180910390fd5b5f6117ee611e5a565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa158015611835573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611859919061381f565b905061186f6001600160a01b0385168483612796565b81611878611e5a565b14611896576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061046660015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561193e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611962919061376b565b6001600160a01b0316336001600160a01b03161415801561198957506119873361211d565b155b156119a6576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119ef90831515815260200190565b60405180910390a150565b83421115611a1b5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a425760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611b2c573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b6a57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611c0957506001600160a01b038516155b15611c275760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c475760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c9657611c8e858583818110611c6657611c6661379a565b905060200201358888868686818110611c8157611c8161379a565b9050602002013533611c9f565b600101611c49565b50505050505050565b6001600160a01b0384161580611cbc57506001600160a01b038316155b15611cda5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611d9a576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611d9a575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d98575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d9290849061372a565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611dcb90849061372a565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611e01908490613717565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611ebe573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ee2919061381f565b905090565b5f611ef061276e565b611ef9826127e8565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f56573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f7a919061376b565b90506001600160a01b038116611f936020850185612f04565b6001600160a01b031614611fba57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061206457507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561202a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061204e919061376b565b6001600160a01b0316336001600160a01b031614155b801561207657506120743361211d565b155b15612093576040516282b42960e81b815260040160405180910390fd5b5f61209c612420565b600980545f9091559091506120b281838761281d565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a603836185846120f160408a0160208b01612f2c565b60408051938452602084019290925215159082015260600160405180910390a250505061059e60015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa15801561217a573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526121a19190810190613836565b90505f5b81518110156121f257836001600160a01b03168282815181106121ca576121ca61379a565b60200260200101516001600160a01b0316036121ea575060019392505050565b6001016121a5565b505f9392505050565b606060f882901c6001600160f81b0383165f612216826126bc565b90505f83600381111561222b5761222b6136ef565b0361225d576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611655565b6001836003811115612271576122716136ef565b0361228757806040516020016115c391906138f6565b600283600381111561229b5761229b6136ef565b036122b157806040516020016115c3919061392d565b60038360038111156122c5576122c56136ef565b0361165557505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611ee2670de0b6b3a76400006125e4565b61248a6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161258291166128b3565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926125b4929004166128b3565b905292915050565b5f6107368383670de0b6b3a7640000612927565b5f61073683670de0b6b3a764000084612927565b5f6108077f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612942565b5f6108077f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461296c565b5f6126a1600b5f61268e60028661298f565b81526020019081526020015f20546129c3565b6126b2600b5f61268e60018761298f565b6108079190613958565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b8415612760576126f5600a8661398b565b612700906030613717565b60f81b826001612710848761372a565b61271a919061372a565b8151811061272a5761272a61379a565b60200101906001600160f81b03191690815f1a9053508061274a8161399e565b91506127599050600a866139b6565b94506126e4565b918290030190815292915050565b60025f540361279057604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c549084906129f0565b5f6127f66020830183612f04565b6001600160a01b0316036104665760405163f0dd15fd60e01b815260040160405180910390fd5b5f8061282985856125bc565b905061283481612630565b9450845f03612846575f915050610736565b8491506128596040840160208501612f2c565b15612888576128818561286f6020860186612f04565b61287c60408701876139c9565b612a51565b91506128ab565b6128ab856128996020860186612f04565b6128a660408701876139c9565b612b2b565b509392505050565b5f80670de0b6b3a76400006128c6612bd0565b6128d09190613a0c565b90508083116128df575f6128e9565b6128e9818461372a565b9150610736612920670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a0c565b83906125d0565b5f825f19048411830215820261293b575f80fd5b5091020490565b5f6129646129508585612bfb565b83906b033b2e3c9fd0803ce8000000612927565b949350505050565b5f6129646b033b2e3c9fd0803ce80000006129878686612bfb565b849190612927565b5f6001600160f81b038211156129b85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b038211156129ec5760405163396ea70160e11b815260040160405180910390fd5b5090565b5f612a046001600160a01b03841683612c66565b905080515f14158015612a28575080806020019051810190612a269190613a23565b155b15610c5457604051635274afe760e01b81526001600160a01b0384166004820152602401611678565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f0000000000000000000000000000000000000000000000000000000000000000612aab886125e4565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303815f875af1158015612afe573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b22919061381f565b95945050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb84612b64876125e4565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303815f875af1158015612bac573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108a99190613a23565b5f611ee2427f0000000000000000000000000000000000000000000000000000000000000000612c73565b60405163d15e005360e01b81526001600160a01b0383811660048301525f919083169063d15e005390602401602060405180830381865afa158015612c42573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610736919061381f565b606061073683835f612c88565b5f612c7e828461398b565b610736908461372a565b606081471015612cad5760405163cd78605960e01b8152306004820152602401611678565b5f80856001600160a01b03168486604051612cc89190613a3e565b5f6040518083038185875af1925050503d805f8114612d02576040519150601f19603f3d011682016040523d82523d5f602084013e612d07565b606091505b5091509150612d17868383612d21565b9695505050505050565b606082612d3657612d3182612d7d565b610736565b8151158015612d4d57506001600160a01b0384163b155b15612d7657604051639996b31560e01b81526001600160a01b0385166004820152602401611678565b5080610736565b805115612d8d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612e7560405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612e8a575f80fd5b5035919050565b5f5b83811015612eab578181015183820152602001612e93565b50505f910152565b5f8151808452612eca816020860160208601612e91565b601f01601f19169290920160200192915050565b602081525f6107366020830184612eb3565b6001600160a01b0381168114610466575f80fd5b5f60208284031215612f14575f80fd5b813561073681612ef0565b8015158114610466575f80fd5b5f60208284031215612f3c575f80fd5b813561073681612f1f565b60ff81168114610466575f80fd5b5f805f805f805f805f6101208a8c031215612f6e575f80fd5b8935985060208a0135975060408a0135612f8781612ef0565b965060608a0135612f9781612ef0565b955060808a0135612fa781612f1f565b945060a08a0135935060c08a0135612fbe81612f47565b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f840112612fee575f80fd5b50813567ffffffffffffffff811115613005575f80fd5b6020830191508360208260051b850101111561301f575f80fd5b9250929050565b5f805f805f806080878903121561303b575f80fd5b863561304681612ef0565b9550602087013561305681612ef0565b9450604087013567ffffffffffffffff80821115613072575f80fd5b61307e8a838b01612fde565b90965094506060890135915080821115613096575f80fd5b506130a389828a01612fde565b979a9699509497509295939492505050565b5f805f80608085870312156130c8575f80fd5b8435935060208501356130da81612ef0565b925060408501356130ea81612ef0565b9396929550929360600135925050565b5f805f6060848603121561310c575f80fd5b83359250602084013561311e81612ef0565b9150604084013561312e81612ef0565b809150509250925092565b5f806040838503121561314a575f80fd5b82359150602083013561315c81612ef0565b809150509250929050565b5f60208284031215613177575f80fd5b813567ffffffffffffffff81111561318d575f80fd5b820160608185031215610736575f80fd5b5f805f80608085870312156131b1575f80fd5b8435935060208501356131c381612ef0565b92506040850135915060608501356131da81612ef0565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f8060408385031215613297575f80fd5b82356132a281612ef0565b9150602083013561315c81612f1f565b5f805f606084860312156132c4575f80fd5b8335925060208401356132d681612ef0565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161331360208401826001600160a01b03169052565b50604083015161332e60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401518184015250610160808401516133a0828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f806020838503121561341e575f80fd5b823567ffffffffffffffff811115613434575f80fd5b61344085828601612fde565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b8181101561348357835183529284019291840191600101613467565b50909695505050505050565b81516001600160801b03168152610180810160208301516134bb60208401826001600160801b03169052565b5060408301516134d660408401826001600160801b03169052565b5060608301516134f160608401826001600160801b03169052565b5060808301516135066080840182600f0b9052565b5060a083015161352160a08401826001600160801b03169052565b5060c083015161353c60c08401826001600160801b03169052565b5060e083015161355760e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613405565b5f805f805f60a086880312156135b4575f80fd5b8535945060208601356135c681612ef0565b935060408601356135d681612ef0565b92506060860135915060808601356135ed81612ef0565b809150509295509295909350565b5f806040838503121561360c575f80fd5b823561361781612ef0565b9150602083013561315c81612ef0565b5f60208083525f84545f60018260011c9150600183168061364957607f831692505b60208310810361366757634e487b7160e01b5f52602260045260245ffd5b6020880183905260408801818015613686576001811461369c576136c5565b60ff198616825284151560051b820196506136c5565b5f8b8152602090205f5b868110156136bf578154848201529085019089016136a6565b83019750505b50949998505050505050505050565b5f602082840312156136e4575f80fd5b815161073681612f47565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b8082018082111561080757610807613703565b8181038181111561080757610807613703565b5f806040838503121561374e575f80fd5b82519150602083015161315c81612f1f565b805161059e81612ef0565b5f6020828403121561377b575f80fd5b815161073681612ef0565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f82516137d9816011850160208701612e91565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f8251613812816012850160208701612e91565b9190910160120192915050565b5f6020828403121561382f575f80fd5b5051919050565b5f6020808385031215613847575f80fd5b825167ffffffffffffffff8082111561385e575f80fd5b818501915085601f830112613871575f80fd5b81518181111561388357613883613786565b8060051b604051601f19603f830116810181811085821117156138a8576138a8613786565b6040529182528482019250838101850191888311156138c5575f80fd5b938501935b828510156138ea576138db85613760565b845293850193928501926138ca565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f8251613920816010850160208701612e91565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f82516137d9816011850160208701612e91565b8181035f83128015838313168383128216171561126257611262613703565b634e487b7160e01b5f52601260045260245ffd5b5f8261399957613999613977565b500690565b5f600182016139af576139af613703565b5060010190565b5f826139c4576139c4613977565b500490565b5f808335601e198436030181126139de575f80fd5b83018035915067ffffffffffffffff8211156139f8575f80fd5b60200191503681900382131561301f575f80fd5b808202811582820484141761080757610807613703565b5f60208284031215613a33575f80fd5b815161073681612f1f565b5f8251613a4f818460208701612e91565b919091019291505056fea264697066735822122064870db4cdf96a2311a224b2012e527bf5e40a9ecc102be5afb02ed7cf8fdb8a64736f6c63430008160033',
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
        "vault()": "fbfa77cf",
        "vaultSharesToken()": "0a4e1493",
        "version()": "54fd4d50"
    }
};
