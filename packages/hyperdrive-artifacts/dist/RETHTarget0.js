export const RETHTarget0 = {
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
            "type": "receive",
            "stateMutability": "payable"
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
            "name": "TransferFailed",
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004084380380620040848339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c1e6200046660003960008181610f360152612543015260008181610f070152612506015260008181610de101528181611066015281816110f6015281816111860152818161121601528181611831015281816118c901528181611a92015281816120bd0152818161219301526122ea01526000610fce015260008181610fa801526126f6015260008181610f8201526126d0015260008181610f5c01526126aa01526000611323015260006112fd015260006112d7015260006112b1015260008181611040015261271c015260008181610ff4015281816114b80152612b3101526000818161101a0152612d790152600081816102380152818161084301528181610ed80152818161202e015281816127de0152818161286b01528181612c590152612d4a015260008181610ea901526114510152613c1e6000f3fe6080604052600436106102285760003560e01c806360246c8811610123578063bd85b039116100ab578063cf210e651161006f578063cf210e65146106d8578063d8165743146106f8578063e44808bc1461071a578063e985e9c51461073a578063fba560081461075a57600080fd5b8063bd85b03914610641578063becee9c314610661578063c55dae631461068e578063c69e16ad146106a3578063c6e6f592146106b857600080fd5b80639cd241af116100f25780639cd241af146105a1578063a22cb465146105c1578063ab033ea9146105e1578063b0d96580146105ff578063b88fed9f1461062157600080fd5b806360246c881461052b5780637180c8ca1461054d5780637ecebe001461056c578063950c5d031461058c57600080fd5b806320fc4881116101b15780633e691db9116101755780633e691db91461048657806346fbf68e146104a65780634e41a1fb146104d65780634ed2d6ac146104f657806354fd4d501461051657600080fd5b806320fc4881146103aa57806321ff32a9146103fc578063313ce5671461042a5780633656eec2146104515780633a98ef391461047157600080fd5b806306fdde03116101f857806306fdde03146103085780630a4e14931461031d57806314e5f07b1461034a57806317fad7fc1461036a5780631c0f12b61461038a57600080fd5b8062ad800c1461027d57806301681a62146102b357806302329a29146102d357806304baa00b146102f357600080fd5b3661027857336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610276576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b34801561028957600080fd5b5061029d610298366004612fca565b610796565b6040516102aa9190613033565b60405180910390f35b3480156102bf57600080fd5b506102766102ce36600461305b565b6107cd565b3480156102df57600080fd5b506102766102ee366004613086565b6107d6565b3480156102ff57600080fd5b5061029d6107df565b34801561031457600080fd5b5061029d61081e565b34801561032957600080fd5b50610332610835565b6040516001600160a01b0390911681526020016102aa565b34801561035657600080fd5b506102766103653660046130a3565b610875565b34801561037657600080fd5b50610276610385366004613184565b610891565b34801561039657600080fd5b506102766103a5366004613219565b6108a7565b3480156103b657600080fd5b506103ca6103c5366004612fca565b6108ba565b6040805182516001600160801b03908116825260208085015182169083015292820151909216908201526060016102aa565b34801561040857600080fd5b5061041c610417366004613261565b610926565b6040519081526020016102aa565b34801561043657600080fd5b5061043f61096c565b60405160ff90911681526020016102aa565b34801561045d57600080fd5b5061041c61046c3660046132a3565b610984565b34801561047d57600080fd5b5061041c6109bd565b34801561049257600080fd5b5061041c6104a13660046132d3565b6109dc565b3480156104b257600080fd5b506104c66104c136600461305b565b6109e7565b60405190151581526020016102aa565b3480156104e257600080fd5b5061029d6104f1366004612fca565b610a07565b34801561050257600080fd5b5061027661051136600461330e565b610a15565b34801561052257600080fd5b5061029d610a63565b34801561053757600080fd5b50610540610a98565b6040516102aa9190613358565b34801561055957600080fd5b506102766105683660046133f9565b5050565b34801561057857600080fd5b5061041c61058736600461305b565b610da7565b34801561059857600080fd5b50610332610dd3565b3480156105ad57600080fd5b506102766105bc366004613427565b610e13565b3480156105cd57600080fd5b506102766105dc3660046133f9565b610e24565b3480156105ed57600080fd5b506102766105fc36600461305b565b50565b34801561060b57600080fd5b50610614610e90565b6040516102aa919061345f565b34801561062d57600080fd5b5061041c61063c366004612fca565b611358565b34801561064d57600080fd5b5061041c61065c366004612fca565b611366565b34801561066d57600080fd5b5061068161067c366004613585565b611388565b6040516102aa91906135c7565b34801561069a57600080fd5b50610332611443565b3480156106af57600080fd5b5061041c611483565b3480156106c457600080fd5b5061041c6106d3366004612fca565b61149d565b3480156106e457600080fd5b5061041c6106f3366004612fca565b6114ab565b34801561070457600080fd5b5061070d6114e2565b6040516102aa919061360b565b34801561072657600080fd5b5061027661073536600461371c565b6115ee565b34801561074657600080fd5b506104c661075536600461377b565b611636565b34801561076657600080fd5b5061076f61167a565b6040805182516001600160801b0390811682526020938401511692810192909252016102aa565b60606107c86107a4836116d9565b6040516020016107b49190613033565b604051602081830303815290604052611801565b919050565b6105fc81611825565b6105fc81611a90565b606061081b6040518060400160405280600e81526020016d524554484879706572647269766560901b8152506040516020016107b49190613033565b90565b606061081b60016040516020016107b491906137a9565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161081b91016107b4565b610886898989898989898989611baa565b505050505050505050565b61089f868686868686611da1565b505050505050565b6108b48484848433611e55565b50505050565b60408051606081018252600080825260208201819052918101919091526107c8600860008481526020019081526020016000206040516020016107b4919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b6000838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261096591016107b4565b9392505050565b604080516012602082015260009161081b91016107b4565b6000828152600a602090815260408083206001600160a01b03851684528252808320548151928301526109b791016107b4565b92915050565b600061081b6109ca612016565b6040516020016107b491815260200190565b60006109b7826120a6565b60006107c86109f5836122e5565b604080519115156020830152016107b4565b60606107c86107a4836123ca565b83610a1f816124c8565b6001600160a01b0316336001600160a01b031614610a5057604051632aab8bd360e01b815260040160405180910390fd5b610a5c85858585612585565b5050505050565b606061081b604051806040016040528060078152602001660ec625c605c62760cb1b8152506040516020016107b49190613033565b610b11604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610b1b6125f2565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b0390921691610b869190613886565b610b909190613899565b905060008215610ca25773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610bbd85612605565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610c6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9291906138ac565b509050610c9f818461279b565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610d7357610d6e84866127b0565b610d76565b60005b81526003546001600160801b0316602091820152604051919250610da0916107b491849101613358565b5050505090565b6001600160a01b0381166000908152600e60209081526040808320548151928301526107c891016107b4565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161081b91016107b4565b610e1f83838333612585565b505050565b336000818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610e98612ee3565b61081b6040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e691906138dc565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611152573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117691906138dc565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120691906138dc565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611272573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129691906138dc565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016107b4919061345f565b60006107c86109ca836127c5565b6000818152600b60209081526040808320548151928301526107c891016107b4565b606060008267ffffffffffffffff8111156113a5576113a56138f9565b6040519080825280602002602001820160405280156113ce578160200160208202803683370190505b50905060005b838110156114275760008585838181106113f0576113f061390f565b905060200201359050600081549050808484815181106114125761141261390f565b602090810291909101015250506001016113d4565b5061143c816040516020016107b491906135c7565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161081b91016107b4565b600061081b6009546040516020016107b491815260200190565b60006107c86109ca83612852565b60006107c86109ca6114dd7f000000000000000000000000000000000000000000000000000000000000000085613886565b6128a2565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261081b60026040516020016107b4919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b846115f8816124c8565b6001600160a01b0316336001600160a01b03161461162957604051632aab8bd360e01b815260040160405180910390fd5b61089f8686868686611e55565b6001600160a01b038281166000908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916109b791016107b4565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261081b906060016107b4565b606060f882901c6001600160f81b03831660006116f5826128e6565b9050600083600381111561170b5761170b61385a565b0361173d576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506117f9565b60018360038111156117515761175161385a565b0361177d57806040516020016117679190613925565b60405160208183030381529060405293506117f9565b60028360038111156117915761179161385a565b036117a75780604051602001611767919061395e565b60038360038111156117bb576117bb61385a565b036117f9576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161181c9190613033565b60405180910390fd5b61182d61299b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa15801561188d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b191906138dc565b9050336001600160a01b0382161480159061195f57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611925573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194991906138dc565b6001600160a01b0316336001600160a01b031614155b8015611971575061196f336122e5565b155b1561198e576040516282b42960e81b815260040160405180910390fd5b6000611998612016565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156119e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a069190613998565b9050611a1c6001600160a01b03851684836129c5565b81611a25612016565b14611a43576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105fc6001600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611aee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1291906138dc565b6001600160a01b0316336001600160a01b031614158015611b395750611b37336122e5565b155b15611b56576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a590611b9f90831515815260200190565b60405180910390a150565b83421115611bcb5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611bf25760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611ce0573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611d1e57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611dbe57506001600160a01b038516155b15611ddc5760405163f0dd15fd60e01b815260040160405180910390fd5b828114611dfc5760405163174861a760e31b815260040160405180910390fd5b60005b83811015611e4c57611e44858583818110611e1c57611e1c61390f565b905060200201358888868686818110611e3757611e3761390f565b9050602002013533611e55565b600101611dff565b50505050505050565b6001600160a01b0384161580611e7257506001600160a01b038316155b15611e905760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611f54576001600160a01b038085166000908152600c602090815260408083209385168352929052205460ff16611f54576000858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611f52576000868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611f4c908490613899565b90915550505b505b6000858152600a602090815260408083206001600160a01b038816845290915281208054849290611f86908490613899565b90915550506000858152600a602090815260408083206001600160a01b038716845290915281208054849290611fbd908490613886565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561207d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120a19190613998565b905090565b60006120b061299b565b6120b982612a17565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612119573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213d91906138dc565b90506001600160a01b038116612156602085018561305b565b6001600160a01b03161461217d57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061222957507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156121ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061221391906138dc565b6001600160a01b0316336001600160a01b031614155b801561223b5750612239336122e5565b155b15612258576040516282b42960e81b815260040160405180910390fd5b60006122626125f2565b600980546000909155909150612279818387612a4d565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a603836185846122b860408a0160208b01613086565b60408051938452602084019290925215159082015260600160405180910390a25050506107c86001600055565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612346573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261236e91908101906139b1565b905060005b81518110156123c057836001600160a01b03168282815181106123985761239861390f565b60200260200101516001600160a01b0316036123b8575060019392505050565b600101612373565b5060009392505050565b606060f882901c6001600160f81b03831660006123e6826128e6565b905060008360038111156123fc576123fc61385a565b0361242e576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506117f9565b60018360038111156124425761244261385a565b0361245857806040516020016117679190613a76565b600283600381111561246c5761246c61385a565b0361248257806040516020016117679190613aae565b60038360038111156124965761249661385a565b036117f957505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b60006120a1670de0b6b3a76400006127c5565b6126696040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916127619116612ae6565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261279392900416612ae6565b905292915050565b60006109658383670de0b6b3a7640000612b5c565b600061096583670de0b6b3a764000084612b5c565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa15801561282e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b79190613998565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401612811565b60006128ca600b60006128b6600286612b7a565b815260200190815260200160002054612baf565b6128dc600b60006128b6600187612b7a565b6109b79190613ada565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561298d57612921600a86613b10565b61292c906030613886565b60f81b82600161293c8487613899565b6129469190613899565b815181106129565761295661390f565b60200101906001600160f81b031916908160001a9053508061297781613b24565b91506129869050600a86613b3d565b9450612910565b918290030190815292915050565b6002600054036129be57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610e1f908490612bdd565b6000612a26602083018361305b565b6001600160a01b0316036105fc5760405163f0dd15fd60e01b815260040160405180910390fd5b600080612a5a858561279b565b9050612a6581612852565b945084600003612a79576000915050610965565b849150612a8c6040840160208501613086565b15612abb57612ab485612aa2602086018661305b565b612aaf6040870187613b51565b612c40565b9150612ade565b612ade85612acc602086018661305b565b612ad96040870187613b51565b612d3d565b509392505050565b600080670de0b6b3a7640000612afa612d71565b612b049190613b98565b9050808311612b14576000612b1e565b612b1e8184613899565b9150610965612b55670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613b98565b83906127b0565b6000826000190484118302158202612b7357600080fd5b5091020490565b60006001600160f81b03821115612ba45760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b03821115612bd95760405163396ea70160e11b815260040160405180910390fd5b5090565b6000612bf26001600160a01b03841683612d9d565b90508051600014158015612c17575080806020019051810190612c159190613baf565b155b15610e1f57604051635274afe760e01b81526001600160a01b038416600482015260240161181c565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b158015612ca557600080fd5b505af1158015612cb9573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114612d0d576040519150601f19603f3d011682016040523d82523d6000602084013e612d12565b606091505b5050905080612d34576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6108b46001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866129c5565b60006120a1427f0000000000000000000000000000000000000000000000000000000000000000612dab565b606061096583836000612dc1565b6000612db78284613b10565b6109659084613899565b606081471015612de65760405163cd78605960e01b815230600482015260240161181c565b600080856001600160a01b03168486604051612e029190613bcc565b60006040518083038185875af1925050503d8060008114612e3f576040519150601f19603f3d011682016040523d82523d6000602084013e612e44565b606091505b5091509150612e54868383612e5e565b9695505050505050565b606082612e7357612e6e82612eba565b610965565b8151158015612e8a57506001600160a01b0384163b155b15612eb357604051639996b31560e01b81526001600160a01b038516600482015260240161181c565b5080610965565b805115612eca5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612fc56040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612fdc57600080fd5b5035919050565b60005b83811015612ffe578181015183820152602001612fe6565b50506000910152565b6000815180845261301f816020860160208601612fe3565b601f01601f19169290920160200192915050565b6020815260006109656020830184613007565b6001600160a01b03811681146105fc57600080fd5b60006020828403121561306d57600080fd5b813561096581613046565b80151581146105fc57600080fd5b60006020828403121561309857600080fd5b813561096581613078565b60008060008060008060008060006101208a8c0312156130c257600080fd5b8935985060208a0135975060408a01356130db81613046565b965060608a01356130eb81613046565b955060808a01356130fb81613078565b945060a08a0135935060c08a013560ff8116811461311857600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261314a57600080fd5b50813567ffffffffffffffff81111561316257600080fd5b6020830191508360208260051b850101111561317d57600080fd5b9250929050565b6000806000806000806080878903121561319d57600080fd5b86356131a881613046565b955060208701356131b881613046565b9450604087013567ffffffffffffffff808211156131d557600080fd5b6131e18a838b01613138565b909650945060608901359150808211156131fa57600080fd5b5061320789828a01613138565b979a9699509497509295939492505050565b6000806000806080858703121561322f57600080fd5b84359350602085013561324181613046565b9250604085013561325181613046565b9396929550929360600135925050565b60008060006060848603121561327657600080fd5b83359250602084013561328881613046565b9150604084013561329881613046565b809150509250925092565b600080604083850312156132b657600080fd5b8235915060208301356132c881613046565b809150509250929050565b6000602082840312156132e557600080fd5b813567ffffffffffffffff8111156132fc57600080fd5b82016060818503121561096557600080fd5b6000806000806080858703121561332457600080fd5b84359350602085013561333681613046565b925060408501359150606085013561334d81613046565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561340c57600080fd5b823561341781613046565b915060208301356132c881613078565b60008060006060848603121561343c57600080fd5b83359250602084013561344e81613046565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161348b60208401826001600160a01b03169052565b5060408301516134a660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613518828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b6000806020838503121561359857600080fd5b823567ffffffffffffffff8111156135af57600080fd5b6135bb85828601613138565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156135ff578351835292840192918401916001016135e3565b50909695505050505050565b81516001600160801b031681526101808101602083015161363760208401826001600160801b03169052565b50604083015161365260408401826001600160801b03169052565b50606083015161366d60608401826001600160801b03169052565b5060808301516136826080840182600f0b9052565b5060a083015161369d60a08401826001600160801b03169052565b5060c08301516136b860c08401826001600160801b03169052565b5060e08301516136d360e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b0381168285015261357d565b600080600080600060a0868803121561373457600080fd5b85359450602086013561374681613046565b9350604086013561375681613046565b925060608601359150608086013561376d81613046565b809150509295509295909350565b6000806040838503121561378e57600080fd5b823561379981613046565b915060208301356132c881613046565b60006020808352600084548160018260011c915060018316806137cd57607f831692505b6020831081036137eb57634e487b7160e01b85526022600452602485fd5b602088018390526040880181801561380a57600181146138205761384b565b60ff198616825284151560051b8201965061384b565b60008b81526020902060005b868110156138455781548482015290850190890161382c565b83019750505b50949998505050505050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156109b7576109b7613870565b818103818111156109b7576109b7613870565b600080604083850312156138bf57600080fd5b8251915060208301516132c881613078565b80516107c881613046565b6000602082840312156138ee57600080fd5b815161096581613046565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613951816011850160208701612fe3565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161398b816012850160208701612fe3565b9190910160120192915050565b6000602082840312156139aa57600080fd5b5051919050565b600060208083850312156139c457600080fd5b825167ffffffffffffffff808211156139dc57600080fd5b818501915085601f8301126139f057600080fd5b815181811115613a0257613a026138f9565b8060051b604051601f19603f83011681018181108582111715613a2757613a276138f9565b604052918252848201925083810185019188831115613a4557600080fd5b938501935b82851015613a6a57613a5b856138d1565b84529385019392850192613a4a565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613aa1816010850160208701612fe3565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613951816011850160208701612fe3565b818103600083128015838313168383128216171561143c5761143c613870565b634e487b7160e01b600052601260045260246000fd5b600082613b1f57613b1f613afa565b500690565b600060018201613b3657613b36613870565b5060010190565b600082613b4c57613b4c613afa565b500490565b6000808335601e19843603018112613b6857600080fd5b83018035915067ffffffffffffffff821115613b8357600080fd5b60200191503681900382131561317d57600080fd5b80820281158282048414176109b7576109b7613870565b600060208284031215613bc157600080fd5b815161096581613078565b60008251613bde818460208701612fe3565b919091019291505056fea2646970667358221220afe76e5f88e6fad0addd4bb87781b804ea5460f75509af0b1ae2552135fbb24664736f6c63430008160033',
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
        "vaultSharesToken()": "0a4e1493",
        "version()": "54fd4d50"
    }
};
