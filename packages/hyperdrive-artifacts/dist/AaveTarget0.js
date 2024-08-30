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
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200447b3803806200447b833981016040819052620000359162000578565b600160005581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013a9190620006b5565b6001600160a01b039081166102808190526080516200015d921690600162000165565b50506200072a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bf90859083906200023116565b6200022b57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021f918691620002e216565b6200022b8482620002e2565b50505050565b6000806000846001600160a01b031684604051620002509190620006d5565b6000604051808303816000865af19150503d80600081146200028f576040519150601f19603f3d011682016040523d82523d6000602084013e62000294565b606091505b5091509150818015620002c2575080511580620002c2575080806020019051810190620002c2919062000706565b8015620002d957506000856001600160a01b03163b115b95945050505050565b6000620002f96001600160a01b0384168362000355565b90508051600014158015620003215750808060200190518101906200031f919062000706565b155b156200035057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000365838360006200036c565b9392505050565b606081471015620003935760405163cd78605960e01b815230600482015260240162000347565b600080856001600160a01b03168486604051620003b19190620006d5565b60006040518083038185875af1925050503d8060008114620003f0576040519150601f19603f3d011682016040523d82523d6000602084013e620003f5565b606091505b5090925090506200040886838362000412565b9695505050505050565b6060826200042b57620004258262000476565b62000365565b81511580156200044357506001600160a01b0384163b155b156200046e57604051639996b31560e01b81526001600160a01b038516600482015260240162000347565b508062000365565b805115620004875780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004d557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004a057600080fd5b8051620004fe81620004db565b919050565b6000608082840312156200051657600080fd5b604051608081016001600160401b03811182821017156200054757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102808112156200058e57600080fd5b610260808212156200059f57600080fd5b620005a9620004a3565b9150620005b685620004f1565b8252620005c660208601620004f1565b6020830152620005d960408601620004f1565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000644818701620004f1565b9083015261018062000658868201620004f1565b908301526101a06200066c868201620004f1565b908301526101c062000680868201620004f1565b908301526101e0620006958787830162000503565b8184015250819350620006aa818601620004f1565b925050509250929050565b600060208284031215620006c857600080fd5b81516200036581620004db565b6000825160005b81811015620006f85760208186018101518583015201620006dc565b506000920191825250919050565b6000602082840312156200071957600080fd5b815180151581146200036557600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613bb6620008c56000396000818161154a01528181612690015281816126dd0152612af3015260008181610d9901526123e6015260008181610d6a01526123a9015260008181610c4401528181610ec901528181610f5901528181610fe901528181611079015281816116d40152818161176c0152818161193501528181611f6001528181612036015261218d01526000610e31015260008181610e0b0152612599015260008181610de50152612573015260008181610dbf015261254d01526000611186015260006111600152600061113a01526000611114015260008181610ea301526125bf015260008181610e570152818161131b0152612991015260008181610e7d0152612c7d01526000818161062301528181610d3b01528181611ed10152612bcf01526000818161075301528181610d0c015281816112b40152818161266f015281816126bc0152612b220152613bb66000f3fe608060405234801561001057600080fd5b506004361061023c5760003560e01c806360246c881161013b578063becee9c3116100b8578063d81657431161007c578063d816574314610504578063e44808bc14610519578063e985e9c51461052c578063fba560081461053f578063fbfa77cf1461056e57600080fd5b8063becee9c3146104ae578063c55dae63146104ce578063c69e16ad146104d6578063c6e6f592146104de578063cf210e65146104f157600080fd5b8063a22cb465116100ff578063a22cb4651461044f578063ab033ea914610462578063b0d9658014610473578063b88fed9f14610488578063bd85b0391461049b57600080fd5b806360246c88146103fa5780637180c8ca1461040f5780637ecebe0014610421578063950c5d03146104345780639cd241af1461043c57600080fd5b806320fc4881116101c95780633e691db91161018d5780633e691db91461039657806346fbf68e146103a95780634e41a1fb146103cc5780634ed2d6ac146103df57806354fd4d50146103f257600080fd5b806320fc4881146102fb57806321ff32a914610340578063313ce567146103615780633656eec21461037b5780633a98ef391461038e57600080fd5b806306fdde031161021057806306fdde031461029a5780630a4e1493146102a257806314e5f07b146102c257806317fad7fc146102d55780631c0f12b6146102e857600080fd5b8062ad800c1461024157806301681a621461026a57806302329a291461027f57806304baa00b14610292575b600080fd5b61025461024f366004612f3c565b610576565b6040516102619190612fa5565b60405180910390f35b61027d610278366004612fcd565b6105ad565b005b61027d61028d366004612ff8565b6105b6565b6102546105bf565b6102546105fe565b6102aa610615565b6040516001600160a01b039091168152602001610261565b61027d6102d0366004613024565b610655565b61027d6102e33660046130ff565b610671565b61027d6102f6366004613194565b610687565b61030e610309366004612f3c565b61069a565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610261565b61035361034e3660046131dc565b610706565b604051908152602001610261565b61036961074c565b60405160ff9091168152602001610261565b61035361038936600461321e565b6107e7565b610353610820565b6103536103a436600461324e565b61083f565b6103bc6103b7366004612fcd565b61084a565b6040519015158152602001610261565b6102546103da366004612f3c565b61086a565b61027d6103ed366004613289565b610878565b6102546108c6565b6104026108fb565b60405161026191906132d3565b61027d61041d366004613374565b5050565b61035361042f366004612fcd565b610c0a565b6102aa610c36565b61027d61044a3660046133a2565b610c76565b61027d61045d366004613374565b610c87565b61027d610470366004612fcd565b50565b61047b610cf3565b60405161026191906133da565b610353610496366004612f3c565b6111bb565b6103536104a9366004612f3c565b6111c9565b6104c16104bc366004613500565b6111eb565b6040516102619190613542565b6102aa6112a6565b6103536112e6565b6103536104ec366004612f3c565b611300565b6103536104ff366004612f3c565b61130e565b61050c611345565b6040516102619190613586565b61027d610527366004613697565b611451565b6103bc61053a3660046136f6565b611499565b6105476114dd565b6040805182516001600160801b039081168252602093840151169281019290925201610261565b6102aa61153c565b60606105a86105848361157c565b6040516020016105949190612fa5565b6040516020818303038152906040526116a4565b919050565b610470816116c8565b61047081611933565b60606105fb6040518060400160405280600e81526020016d416176654879706572647269766560901b8152506040516020016105949190612fa5565b90565b60606105fb60016040516020016105949190613724565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105fb9101610594565b610666898989898989898989611a4d565b505050505050505050565b61067f868686868686611c44565b505050505050565b6106948484848433611cf8565b50505050565b60408051606081018252600080825260208201819052918101919091526105a860086000848152602001908152602001600020604051602001610594919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b6000838152600d602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526107459101610594565b9392505050565b60006105fb7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d391906137d5565b6040805160ff909216602083015201610594565b6000828152600a602090815260408083206001600160a01b038516845282528083205481519283015261081a9101610594565b92915050565b60006105fb61082d611eb9565b60405160200161059491815260200190565b600061081a82611f49565b60006105a861085883612188565b60408051911515602083015201610594565b60606105a86105848361226d565b836108828161236b565b6001600160a01b0316336001600160a01b0316146108b357604051632aab8bd360e01b815260040160405180910390fd5b6108bf85858585612428565b5050505050565b60606105fb604051806040016040528060078152602001660ec625c605c62760cb1b8152506040516020016105949190612fa5565b610974604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061097e612495565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b03909216916109e9919061381e565b6109f39190613831565b905060008215610b055773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610a20856124a8565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610ad1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af59190613844565b509050610b02818461263e565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610bd657610bd18486612653565b610bd9565b60005b81526003546001600160801b0316602091820152604051919250610c0391610594918491016132d3565b5050505090565b6001600160a01b0381166000908152600e60209081526040808320548151928301526105a89101610594565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105fb9101610594565b610c8283838333612428565b505050565b336000818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cfb612e55565b6105fb6040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f499190613874565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd99190613874565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611045573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110699190613874565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f99190613874565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161059491906133da565b60006105a861082d83612668565b6000818152600b60209081526040808320548151928301526105a89101610594565b606060008267ffffffffffffffff81111561120857611208613891565b604051908082528060200260200182016040528015611231578160200160208202803683370190505b50905060005b8381101561128a576000858583818110611253576112536138a7565b90506020020135905060008154905080848481518110611275576112756138a7565b60209081029190910101525050600101611237565b5061129f816040516020016105949190613542565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105fb9101610594565b60006105fb60095460405160200161059491815260200190565b60006105a861082d836126b5565b60006105a861082d6113407f00000000000000000000000000000000000000000000000000000000000000008561381e565b612702565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105fb6002604051602001610594919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461145b8161236b565b6001600160a01b0316336001600160a01b03161461148c57604051632aab8bd360e01b815260040160405180910390fd5b61067f8686868686611cf8565b6001600160a01b038281166000908152600c60209081526040808320938516835292815282822054835160ff909116151591810191909152909161081a9101610594565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105fb90606001610594565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105fb9101610594565b606060f882901c6001600160f81b038316600061159882612746565b905060008360038111156115ae576115ae6137f2565b036115e0576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061169c565b60018360038111156115f4576115f46137f2565b03611620578060405160200161160a91906138bd565b604051602081830303815290604052935061169c565b6002836003811115611634576116346137f2565b0361164a578060405160200161160a91906138f6565b600383600381111561165e5761165e6137f2565b0361169c576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016116bf9190612fa5565b60405180910390fd5b6116d06127fb565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611730573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117549190613874565b9050336001600160a01b0382161480159061180257507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156117c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ec9190613874565b6001600160a01b0316336001600160a01b031614155b8015611814575061181233612188565b155b15611831576040516282b42960e81b815260040160405180910390fd5b600061183b611eb9565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611885573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a99190613930565b90506118bf6001600160a01b0385168483612825565b816118c8611eb9565b146118e6576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506104706001600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119b59190613874565b6001600160a01b0316336001600160a01b0316141580156119dc57506119da33612188565b155b156119f9576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a590611a4290831515815260200190565b60405180910390a150565b83421115611a6e5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a955760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611b83573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611bc157604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611c6157506001600160a01b038516155b15611c7f5760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c9f5760405163174861a760e31b815260040160405180910390fd5b60005b83811015611cef57611ce7858583818110611cbf57611cbf6138a7565b905060200201358888868686818110611cda57611cda6138a7565b9050602002013533611cf8565b600101611ca2565b50505050505050565b6001600160a01b0384161580611d1557506001600160a01b038316155b15611d335760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611df7576001600160a01b038085166000908152600c602090815260408083209385168352929052205460ff16611df7576000858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611df5576000868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611def908490613831565b90915550505b505b6000858152600a602090815260408083206001600160a01b038816845290915281208054849290611e29908490613831565b90915550506000858152600a602090815260408083206001600160a01b038716845290915281208054849290611e6090849061381e565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611f20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f449190613930565b905090565b6000611f536127fb565b611f5c82612877565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe09190613874565b90506001600160a01b038116611ff96020850185612fcd565b6001600160a01b03161461202057604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b038216148015906120cc57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015612092573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b69190613874565b6001600160a01b0316336001600160a01b031614155b80156120de57506120dc33612188565b155b156120fb576040516282b42960e81b815260040160405180910390fd5b6000612105612495565b60098054600090915590915061211c8183876128ad565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461215b60408a0160208b01612ff8565b60408051938452602084019290925215159082015260600160405180910390a25050506105a86001600055565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156121e9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526122119190810190613949565b905060005b815181101561226357836001600160a01b031682828151811061223b5761223b6138a7565b60200260200101516001600160a01b03160361225b575060019392505050565b600101612216565b5060009392505050565b606060f882901c6001600160f81b038316600061228982612746565b9050600083600381111561229f5761229f6137f2565b036122d1576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061169c565b60018360038111156122e5576122e56137f2565b036122fb578060405160200161160a9190613a0e565b600283600381111561230f5761230f6137f2565b03612325578060405160200161160a9190613a46565b6003836003811115612339576123396137f2565b0361169c57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611f44670de0b6b3a7640000612668565b61250c6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916126049116612946565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261263692900416612946565b905292915050565b60006107458383670de0b6b3a76400006129bc565b600061074583670de0b6b3a7640000846129bc565b600061081a7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846129da565b600061081a7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612a05565b600061272a600b6000612716600286612a29565b815260200190815260200160002054612a5e565b61273c600b6000612716600187612a29565b61081a9190613a72565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156127ed57612781600a86613aa8565b61278c90603061381e565b60f81b82600161279c8487613831565b6127a69190613831565b815181106127b6576127b66138a7565b60200101906001600160f81b031916908160001a905350806127d781613abc565b91506127e69050600a86613ad5565b9450612770565b918290030190815292915050565b60026000540361281e57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c82908490612a8c565b60006128866020830183612fcd565b6001600160a01b0316036104705760405163f0dd15fd60e01b815260040160405180910390fd5b6000806128ba858561263e565b90506128c5816126b5565b9450846000036128d9576000915050610745565b8491506128ec6040840160208501612ff8565b1561291b57612914856129026020860186612fcd565b61290f6040870187613ae9565b612aef565b915061293e565b61293e8561292c6020860186612fcd565b6129396040870187613ae9565b612bcd565b509392505050565b600080670de0b6b3a764000061295a612c75565b6129649190613b30565b905080831161297457600061297e565b61297e8184613831565b91506107456129b5670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613b30565b8390612653565b60008260001904841183021582026129d357600080fd5b5091020490565b60006129fd6129e98585612ca1565b83906b033b2e3c9fd0803ce80000006129bc565b949350505050565b60006129fd6b033b2e3c9fd0803ce8000000612a218686612ca1565b8491906129bc565b60006001600160f81b03821115612a535760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b03821115612a885760405163396ea70160e11b815260040160405180910390fd5b5090565b6000612aa16001600160a01b03841683612d0f565b90508051600014158015612ac6575080806020019051810190612ac49190613b47565b155b15610c8257604051635274afe760e01b81526001600160a01b03841660048201526024016116bf565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f0000000000000000000000000000000000000000000000000000000000000000612b4a88612668565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303816000875af1158015612ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bc49190613930565b95945050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb84612c0687612668565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015612c51573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bf9190613b47565b6000611f44427f0000000000000000000000000000000000000000000000000000000000000000612d1d565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa158015612ceb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107459190613930565b606061074583836000612d33565b6000612d298284613aa8565b6107459084613831565b606081471015612d585760405163cd78605960e01b81523060048201526024016116bf565b600080856001600160a01b03168486604051612d749190613b64565b60006040518083038185875af1925050503d8060008114612db1576040519150601f19603f3d011682016040523d82523d6000602084013e612db6565b606091505b5091509150612dc6868383612dd0565b9695505050505050565b606082612de557612de082612e2c565b610745565b8151158015612dfc57506001600160a01b0384163b155b15612e2557604051639996b31560e01b81526001600160a01b03851660048201526024016116bf565b5080610745565b805115612e3c5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612f376040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612f4e57600080fd5b5035919050565b60005b83811015612f70578181015183820152602001612f58565b50506000910152565b60008151808452612f91816020860160208601612f55565b601f01601f19169290920160200192915050565b6020815260006107456020830184612f79565b6001600160a01b038116811461047057600080fd5b600060208284031215612fdf57600080fd5b813561074581612fb8565b801515811461047057600080fd5b60006020828403121561300a57600080fd5b813561074581612fea565b60ff8116811461047057600080fd5b60008060008060008060008060006101208a8c03121561304357600080fd5b8935985060208a0135975060408a013561305c81612fb8565b965060608a013561306c81612fb8565b955060808a013561307c81612fea565b945060a08a0135935060c08a013561309381613015565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126130c557600080fd5b50813567ffffffffffffffff8111156130dd57600080fd5b6020830191508360208260051b85010111156130f857600080fd5b9250929050565b6000806000806000806080878903121561311857600080fd5b863561312381612fb8565b9550602087013561313381612fb8565b9450604087013567ffffffffffffffff8082111561315057600080fd5b61315c8a838b016130b3565b9096509450606089013591508082111561317557600080fd5b5061318289828a016130b3565b979a9699509497509295939492505050565b600080600080608085870312156131aa57600080fd5b8435935060208501356131bc81612fb8565b925060408501356131cc81612fb8565b9396929550929360600135925050565b6000806000606084860312156131f157600080fd5b83359250602084013561320381612fb8565b9150604084013561321381612fb8565b809150509250925092565b6000806040838503121561323157600080fd5b82359150602083013561324381612fb8565b809150509250929050565b60006020828403121561326057600080fd5b813567ffffffffffffffff81111561327757600080fd5b82016060818503121561074557600080fd5b6000806000806080858703121561329f57600080fd5b8435935060208501356132b181612fb8565b92506040850135915060608501356132c881612fb8565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561338757600080fd5b823561339281612fb8565b9150602083013561324381612fea565b6000806000606084860312156133b757600080fd5b8335925060208401356133c981612fb8565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161340660208401826001600160a01b03169052565b50604083015161342160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613493828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b6000806020838503121561351357600080fd5b823567ffffffffffffffff81111561352a57600080fd5b613536858286016130b3565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561357a5783518352928401929184019160010161355e565b50909695505050505050565b81516001600160801b03168152610180810160208301516135b260208401826001600160801b03169052565b5060408301516135cd60408401826001600160801b03169052565b5060608301516135e860608401826001600160801b03169052565b5060808301516135fd6080840182600f0b9052565b5060a083015161361860a08401826001600160801b03169052565b5060c083015161363360c08401826001600160801b03169052565b5060e083015161364e60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526134f8565b600080600080600060a086880312156136af57600080fd5b8535945060208601356136c181612fb8565b935060408601356136d181612fb8565b92506060860135915060808601356136e881612fb8565b809150509295509295909350565b6000806040838503121561370957600080fd5b823561371481612fb8565b9150602083013561324381612fb8565b60006020808352600084548160018260011c9150600183168061374857607f831692505b60208310810361376657634e487b7160e01b85526022600452602485fd5b6020880183905260408801818015613785576001811461379b576137c6565b60ff198616825284151560051b820196506137c6565b60008b81526020902060005b868110156137c0578154848201529085019089016137a7565b83019750505b50949998505050505050505050565b6000602082840312156137e757600080fd5b815161074581613015565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561081a5761081a613808565b8181038181111561081a5761081a613808565b6000806040838503121561385757600080fd5b82519150602083015161324381612fea565b80516105a881612fb8565b60006020828403121561388657600080fd5b815161074581612fb8565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b8152600082516138e9816011850160208701612f55565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613923816012850160208701612f55565b9190910160120192915050565b60006020828403121561394257600080fd5b5051919050565b6000602080838503121561395c57600080fd5b825167ffffffffffffffff8082111561397457600080fd5b818501915085601f83011261398857600080fd5b81518181111561399a5761399a613891565b8060051b604051601f19603f830116810181811085821117156139bf576139bf613891565b6040529182528482019250838101850191888311156139dd57600080fd5b938501935b82851015613a02576139f385613869565b845293850193928501926139e2565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613a39816010850160208701612f55565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b8152600082516138e9816011850160208701612f55565b818103600083128015838313168383128216171561129f5761129f613808565b634e487b7160e01b600052601260045260246000fd5b600082613ab757613ab7613a92565b500690565b600060018201613ace57613ace613808565b5060010190565b600082613ae457613ae4613a92565b500490565b6000808335601e19843603018112613b0057600080fd5b83018035915067ffffffffffffffff821115613b1b57600080fd5b6020019150368190038213156130f857600080fd5b808202811582820484141761081a5761081a613808565b600060208284031215613b5957600080fd5b815161074581612fea565b60008251613b76818460208701612f55565b919091019291505056fea2646970667358221220f66d0b0cd5f6d853c55bd62c1553f2cacfefb16605874df2cac4bc5e94c9ebc564736f6c63430008160033',
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
