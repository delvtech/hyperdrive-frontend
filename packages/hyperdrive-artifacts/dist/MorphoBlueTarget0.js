export const MorphoBlueTarget0 = {
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
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct IMorphoBlueHyperdrive.MorphoBlueParams",
                    "components": [
                        {
                            "name": "morpho",
                            "type": "address",
                            "internalType": "contract IMorpho"
                        },
                        {
                            "name": "collateralToken",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "oracle",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "irm",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "lltv",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
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
            "name": "collateralToken",
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
            "name": "id",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "Id"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "irm",
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
            "name": "lltv",
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
            "name": "oracle",
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
                    "internalType": "contract IMorpho"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6103206040523480156200001257600080fd5b5060405162004b7338038062004b738339810160408190526200003591620005e4565b6001600081905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011c929062000126565b505050506200078a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001809085908390620001f216565b620001ec57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001e0918691620002a316565b620001ec8482620002a3565b50505050565b6000806000846001600160a01b03168460405162000211919062000735565b6000604051808303816000865af19150503d806000811462000250576040519150601f19603f3d011682016040523d82523d6000602084013e62000255565b606091505b5091509150818015620002835750805115806200028357508080602001905181019062000283919062000766565b80156200029a57506000856001600160a01b03163b115b95945050505050565b6000620002ba6001600160a01b0384168362000316565b90508051600014158015620002e2575080806020019051810190620002e0919062000766565b155b156200031157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000326838360006200032d565b9392505050565b606081471015620003545760405163cd78605960e01b815230600482015260240162000308565b600080856001600160a01b0316848660405162000372919062000735565b60006040518083038185875af1925050503d8060008114620003b1576040519150601f19603f3d011682016040523d82523d6000602084013e620003b6565b606091505b509092509050620003c9868383620003d3565b9695505050505050565b606082620003ec57620003e68262000437565b62000326565b81511580156200040457506001600160a01b0384163b155b156200042f57604051639996b31560e01b81526001600160a01b038516600482015260240162000308565b508062000326565b805115620004485780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200049657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200046157600080fd5b8051620004bf816200049c565b919050565b600060808284031215620004d757600080fd5b604051608081016001600160401b03811182821017156200050857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a082840312156200054c57600080fd5b60405160a081016001600160401b03811182821017156200057d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825162000592816200049c565b81526020830151620005a4816200049c565b60208201526040830151620005b9816200049c565b60408201526060830151620005ce816200049c565b6060820152608092830151920191909152919050565b6000806000838503610320811215620005fc57600080fd5b610260808212156200060d57600080fd5b6200061762000464565b91506200062486620004b2565b82526200063460208701620004b2565b60208301526200064760408701620004b2565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006b2818801620004b2565b90830152610180620006c6878201620004b2565b908301526101a0620006da878201620004b2565b908301526101c0620006ee878201620004b2565b908301526101e06200070388888301620004c4565b818401525081945062000718818701620004b2565b935050506200072c85610280860162000539565b90509250925092565b6000825160005b818110156200075857602081860181015185830152016200073c565b506000920191825250919050565b6000602082840312156200077957600080fd5b815180151581146200032657600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e0516103005161418f620009e46000396000818161077201528181610ee10152818161220d01528181612aa201528181612be901526130bd0152600081816107f701528181610eb2015281816121de01528181612a8001528181612bc7015261308e015260008181610cf501528181610e83015281816121af01528181612a5e01528181612ba5015261305f015260008181610e54015281816113e00152818161218001528181612a3c01528181612b8301526130300152600081816117a101528181612114015281816129f801528181612b3f0152612fc7015260008181610fb0015261273f015260008181610f810152612702015260008181610d61015281816110e00152818161117001528181611200015281816112900152818161192b015281816119c301528181611b8c015281816122b90152818161238f01526124e60152600061104801526000818161102201526128f7015260008181610ffc01526128d1015260008181610fd601526128ab0152600061139d01526000611377015260006113510152600061132b0152600081816110ba015261291d01526000818161106e015281816115720152612ea201526000818161109401526131ce0152600081816106880152610f5201526000818161083001528181610e2501528181610f230152818161150b0152818161215101528181612a1a01528181612b610152613001015261418f6000f3fe608060405234801561001057600080fd5b50600436106102735760003560e01c80637180c8ca11610151578063bd85b039116100c3578063cf210e6511610087578063cf210e6514610550578063d816574314610563578063e44808bc14610578578063e985e9c51461058b578063fba560081461059e578063fbfa77cf146105cd57600080fd5b8063bd85b039146104fa578063becee9c31461050d578063c55dae631461052d578063c69e16ad14610535578063c6e6f5921461053d57600080fd5b8063a22cb46511610115578063a22cb4651461049e578063ab033ea9146104b1578063af640d0f146104c2578063b0d96580146104ca578063b2016bd4146104df578063b88fed9f146104e757600080fd5b80637180c8ca146104565780637dc0d1d0146104685780637ecebe0014610470578063950c5d03146104835780639cd241af1461048b57600080fd5b806321ff32a9116101ea5780633e691db9116101ae5780633e691db9146103dd57806346fbf68e146103f05780634e41a1fb146104135780634ed2d6ac1461042657806354fd4d501461043957806360246c881461044157600080fd5b806321ff32a91461038d57806328e8fe7d146103a0578063313ce567146103a85780633656eec2146103c25780633a98ef39146103d557600080fd5b80630a4e14931161023c5780630a4e1493146102d957806314e5f07b146102f957806317fad7fc1461030c5780631c0f12b61461031f57806320fc488114610332578063217b7ffe1461037757600080fd5b8062ad800c1461027857806301681a62146102a157806302329a29146102b657806304baa00b146102c957806306fdde03146102d1575b600080fd5b61028b61028636600461341f565b6105d5565b6040516102989190613488565b60405180910390f35b6102b46102af3660046134b0565b61060c565b005b6102b46102c43660046134db565b610615565b61028b61061e565b61028b610663565b6102e161067a565b6040516001600160a01b039091168152602001610298565b6102b4610307366004613507565b6106ba565b6102b461031a3660046135e2565b6106d6565b6102b461032d366004613677565b6106ec565b61034561034036600461341f565b6106ff565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610298565b61037f61076b565b604051908152602001610298565b61037f61039b3660046136bf565b6107a3565b6102e16107e9565b6103b0610829565b60405160ff9091168152602001610298565b61037f6103d0366004613701565b6108c4565b61037f6108fd565b61037f6103eb366004613731565b61091c565b6104036103fe3660046134b0565b610927565b6040519015158152602001610298565b61028b61042136600461341f565b610947565b6102b461043436600461376c565b610955565b61028b6109a3565b6104496109d8565b60405161029891906137b6565b6102b4610464366004613857565b5050565b6102e1610ce7565b61037f61047e3660046134b0565b610d27565b6102e1610d53565b6102b4610499366004613885565b610d93565b6102b46104ac366004613857565b610da4565b6102b46104bf3660046134b0565b50565b61037f610e10565b6104d2610f0a565b60405161029891906138bd565b6102e16113d2565b61037f6104f536600461341f565b611412565b61037f61050836600461341f565b611420565b61052061051b3660046139e3565b611442565b6040516102989190613a25565b6102e16114fd565b61037f61153d565b61037f61054b36600461341f565b611557565b61037f61055e36600461341f565b611565565b61056b61159c565b6040516102989190613a69565b6102b4610586366004613b7a565b6116a8565b610403610599366004613bd9565b6116f0565b6105a6611734565b6040805182516001600160801b039081168252602093840151169281019290925201610298565b6102e1611793565b60606106076105e3836117d3565b6040516020016105f39190613488565b6040516020818303038152906040526118fb565b919050565b6104bf8161191f565b6104bf81611b8a565b6060610660604051806040016040528060148152602001734d6f7270686f426c75654879706572647269766560601b8152506040516020016105f39190613488565b90565b606061066060016040516020016105f39190613c07565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066091016105f3565b6106cb898989898989898989611ca4565b505050505050505050565b6106e4868686868686611e9b565b505050505050565b6106f98484848433611f4f565b50505050565b6040805160608101825260008082526020820181905291810191909152610607600860008481526020019081526020016000206040516020016105f3919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b60006106607f00000000000000000000000000000000000000000000000000000000000000006040516020016105f391815260200190565b6000838152600d602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526107e291016105f3565b9392505050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066091016105f3565b60006106607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561088c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b09190613cb8565b6040805160ff9092166020830152016105f3565b6000828152600a602090815260408083206001600160a01b03851684528252808320548151928301526108f791016105f3565b92915050565b600061066061090a612110565b6040516020016105f391815260200190565b60006108f7826122a2565b6000610607610935836124e1565b604080519115156020830152016105f3565b60606106076105e3836125c6565b8361095f816126c4565b6001600160a01b0316336001600160a01b03161461099057604051632aab8bd360e01b815260040160405180910390fd5b61099c85858585612781565b5050505050565b6060610660604051806040016040528060078152602001660ec625c605c62760cb1b8152506040516020016105f39190613488565b610a51604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610a5b6127ee565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b0390921691610ac69190613d01565b610ad09190613d14565b905060008215610be25773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610afd85612806565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610bae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd29190613d27565b509050610bdf818461299c565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610cb357610cae84866129b1565b610cb6565b60005b81526003546001600160801b0316602091820152604051919250610ce0916105f3918491016137b6565b5050505090565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066091016105f3565b6001600160a01b0381166000908152600e602090815260408083205481519283015261060791016105f3565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066091016105f3565b610d9f83838333612781565b505050565b336000818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600061066061090a6040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081525060a0902090565b610f12613338565b6106606040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561113c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111609190613d4c565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f09190613d4c565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa15801561125c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112809190613d4c565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113109190613d4c565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016105f391906138bd565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066091016105f3565b600061060761090a836129c6565b6000818152600b602090815260408083205481519283015261060791016105f3565b606060008267ffffffffffffffff81111561145f5761145f613d69565b604051908082528060200260200182016040528015611488578160200160208202803683370190505b50905060005b838110156114e15760008585838181106114aa576114aa613d7f565b905060200201359050600081549050808484815181106114cc576114cc613d7f565b6020908102919091010152505060010161148e565b506114f6816040516020016105f39190613a25565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066091016105f3565b60006106606009546040516020016105f391815260200190565b600061060761090a83612b0d565b600061060761090a6115977f000000000000000000000000000000000000000000000000000000000000000085613d01565b612c13565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261066060026040516020016105f3919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b846116b2816126c4565b6001600160a01b0316336001600160a01b0316146116e357604051632aab8bd360e01b815260040160405180910390fd5b6106e48686868686611f4f565b6001600160a01b038281166000908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916108f791016105f3565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610660906060016105f3565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066091016105f3565b606060f882901c6001600160f81b03831660006117ef82612c57565b9050600083600381111561180557611805613cd5565b03611837576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506118f3565b600183600381111561184b5761184b613cd5565b0361187757806040516020016118619190613d95565b60405160208183030381529060405293506118f3565b600283600381111561188b5761188b613cd5565b036118a157806040516020016118619190613dce565b60038360038111156118b5576118b5613cd5565b036118f3576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016119169190613488565b60405180910390fd5b611927612d0c565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611987573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ab9190613d4c565b9050336001600160a01b03821614801590611a5957507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a439190613d4c565b6001600160a01b0316336001600160a01b031614155b8015611a6b5750611a69336124e1565b155b15611a88576040516282b42960e81b815260040160405180910390fd5b6000611a92612110565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611adc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b009190613e08565b9050611b166001600160a01b0385168483612d36565b81611b1f612110565b14611b3d576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506104bf6001600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611be8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c0c9190613d4c565b6001600160a01b0316336001600160a01b031614158015611c335750611c31336124e1565b155b15611c50576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a590611c9990831515815260200190565b60405180910390a150565b83421115611cc55760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611cec5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611dda573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611e1857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611eb857506001600160a01b038516155b15611ed65760405163f0dd15fd60e01b815260040160405180910390fd5b828114611ef65760405163174861a760e31b815260040160405180910390fd5b60005b83811015611f4657611f3e858583818110611f1657611f16613d7f565b905060200201358888868686818110611f3157611f31613d7f565b9050602002013533611f4f565b600101611ef9565b50505050505050565b6001600160a01b0384161580611f6c57506001600160a01b038316155b15611f8a5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461204e576001600160a01b038085166000908152600c602090815260408083209385168352929052205460ff1661204e576000858152600d602090815260408083206001600160a01b0380891685529083528184209085168452909152902054600019811461204c576000868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612046908490613d14565b90915550505b505b6000858152600a602090815260408083206001600160a01b038816845290915281208054849290612080908490613d14565b90915550506000858152600a602090815260408083206001600160a01b0387168452909152812080548492906120b7908490613d01565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166393c520626122366040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081525060a0902090565b6040516001600160e01b031960e084901b1681526004810191909152306024820152604401606060405180830381865afa158015612278573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061229c9190613e69565b51919050565b60006122ac612d0c565b6122b582612d88565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123399190613d4c565b90506001600160a01b03811661235260208501856134b0565b6001600160a01b03161461237957604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061242557507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156123eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061240f9190613d4c565b6001600160a01b0316336001600160a01b031614155b80156124375750612435336124e1565b155b15612454576040516282b42960e81b815260040160405180910390fd5b600061245e6127ee565b600980546000909155909150612475818387612dbe565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a603836185846124b460408a0160208b016134db565b60408051938452602084019290925215159082015260600160405180910390a25050506106076001600055565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612542573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261256a9190810190613ece565b905060005b81518110156125bc57836001600160a01b031682828151811061259457612594613d7f565b60200260200101516001600160a01b0316036125b4575060019392505050565b60010161256f565b5060009392505050565b606060f882901c6001600160f81b03831660006125e282612c57565b905060008360038111156125f8576125f8613cd5565b0361262a576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506118f3565b600183600381111561263e5761263e613cd5565b0361265457806040516020016118619190613f80565b600283600381111561266857612668613cd5565b0361267e57806040516020016118619190613fb8565b600383600381111561269257612692613cd5565b036118f357505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000612801670de0b6b3a76400006129c6565b905090565b61286a6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916129629116612e57565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261299492900416612e57565b905292915050565b60006107e28383670de0b6b3a7640000612ecd565b60006107e283670de0b6b3a764000084612ecd565b6040516303c2063f60e41b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090612acc907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613fe4565b602060405180830381865af4158015612ae9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f79190613e08565b6040516349124ca360e01b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390612acc907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613fe4565b6000612c3b600b6000612c27600286612eeb565b815260200190815260200160002054612f20565b612c4d600b6000612c27600187612eeb565b6108f79190614027565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415612cfe57612c92600a8661405d565b612c9d906030613d01565b60f81b826001612cad8487613d14565b612cb79190613d14565b81518110612cc757612cc7613d7f565b60200101906001600160f81b031916908160001a90535080612ce881614071565b9150612cf79050600a8661408a565b9450612c81565b918290030190815292915050565b600260005403612d2f57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d9f908490612f4e565b6000612d9760208301836134b0565b6001600160a01b0316036104bf5760405163f0dd15fd60e01b815260040160405180910390fd5b600080612dcb858561299c565b9050612dd681612b0d565b945084600003612dea5760009150506107e2565b849150612dfd60408401602085016134db565b15612e2c57612e2585612e1360208601866134b0565b612e20604087018761409e565b612fb1565b9150612e4f565b612e4f85612e3d60208601866134b0565b612e4a604087018761409e565b6131ad565b509392505050565b600080670de0b6b3a7640000612e6b6131c6565b612e7591906140e5565b9050808311612e85576000612e8f565b612e8f8184613d14565b91506107e2612ec6670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006140e5565b83906129b1565b6000826000190484118302158202612ee457600080fd5b5091020490565b60006001600160f81b03821115612f155760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b03821115612f4a5760405163396ea70160e11b815260040160405180910390fd5b5090565b6000612f636001600160a01b038416836131f2565b90508051600014158015612f88575080806020019051810190612f8691906140fc565b155b15610d9f57604051635274afe760e01b81526001600160a01b0384166004820152602401611916565b600080612fbd866129c6565b905080156131a4577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c2bea496040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000008152506130e8896129c6565b604080516001600160e01b031960e086901b16815283516001600160a01b0390811660048301526020850151811660248301529184015182166044820152606084015182166064820152608090930151608484015260a4830191909152600060c48301523060e483015288166101048201526101240160408051808303816000875af115801561317c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131a09190614119565b5091505b50949350505050565b60405163350b944160e11b815260040160405180910390fd5b6000612801427f0000000000000000000000000000000000000000000000000000000000000000613200565b60606107e283836000613216565b600061320c828461405d565b6107e29084613d14565b60608147101561323b5760405163cd78605960e01b8152306004820152602401611916565b600080856001600160a01b03168486604051613257919061413d565b60006040518083038185875af1925050503d8060008114613294576040519150601f19603f3d011682016040523d82523d6000602084013e613299565b606091505b50915091506132a98683836132b3565b9695505050505050565b6060826132c8576132c38261330f565b6107e2565b81511580156132df57506001600160a01b0384163b155b1561330857604051639996b31560e01b81526001600160a01b0385166004820152602401611916565b50806107e2565b80511561331f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161341a6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561343157600080fd5b5035919050565b60005b8381101561345357818101518382015260200161343b565b50506000910152565b60008151808452613474816020860160208601613438565b601f01601f19169290920160200192915050565b6020815260006107e2602083018461345c565b6001600160a01b03811681146104bf57600080fd5b6000602082840312156134c257600080fd5b81356107e28161349b565b80151581146104bf57600080fd5b6000602082840312156134ed57600080fd5b81356107e2816134cd565b60ff811681146104bf57600080fd5b60008060008060008060008060006101208a8c03121561352657600080fd5b8935985060208a0135975060408a013561353f8161349b565b965060608a013561354f8161349b565b955060808a013561355f816134cd565b945060a08a0135935060c08a0135613576816134f8565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126135a857600080fd5b50813567ffffffffffffffff8111156135c057600080fd5b6020830191508360208260051b85010111156135db57600080fd5b9250929050565b600080600080600080608087890312156135fb57600080fd5b86356136068161349b565b955060208701356136168161349b565b9450604087013567ffffffffffffffff8082111561363357600080fd5b61363f8a838b01613596565b9096509450606089013591508082111561365857600080fd5b5061366589828a01613596565b979a9699509497509295939492505050565b6000806000806080858703121561368d57600080fd5b84359350602085013561369f8161349b565b925060408501356136af8161349b565b9396929550929360600135925050565b6000806000606084860312156136d457600080fd5b8335925060208401356136e68161349b565b915060408401356136f68161349b565b809150509250925092565b6000806040838503121561371457600080fd5b8235915060208301356137268161349b565b809150509250929050565b60006020828403121561374357600080fd5b813567ffffffffffffffff81111561375a57600080fd5b8201606081850312156107e257600080fd5b6000806000806080858703121561378257600080fd5b8435935060208501356137948161349b565b92506040850135915060608501356137ab8161349b565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561386a57600080fd5b82356138758161349b565b91506020830135613726816134cd565b60008060006060848603121561389a57600080fd5b8335925060208401356138ac8161349b565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516138e960208401826001600160a01b03169052565b50604083015161390460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613976828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b600080602083850312156139f657600080fd5b823567ffffffffffffffff811115613a0d57600080fd5b613a1985828601613596565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613a5d57835183529284019291840191600101613a41565b50909695505050505050565b81516001600160801b0316815261018081016020830151613a9560208401826001600160801b03169052565b506040830151613ab060408401826001600160801b03169052565b506060830151613acb60608401826001600160801b03169052565b506080830151613ae06080840182600f0b9052565b5060a0830151613afb60a08401826001600160801b03169052565b5060c0830151613b1660c08401826001600160801b03169052565b5060e0830151613b3160e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526139db565b600080600080600060a08688031215613b9257600080fd5b853594506020860135613ba48161349b565b93506040860135613bb48161349b565b9250606086013591506080860135613bcb8161349b565b809150509295509295909350565b60008060408385031215613bec57600080fd5b8235613bf78161349b565b915060208301356137268161349b565b60006020808352600084548160018260011c91506001831680613c2b57607f831692505b602083108103613c4957634e487b7160e01b85526022600452602485fd5b6020880183905260408801818015613c685760018114613c7e57613ca9565b60ff198616825284151560051b82019650613ca9565b60008b81526020902060005b86811015613ca357815484820152908501908901613c8a565b83019750505b50949998505050505050505050565b600060208284031215613cca57600080fd5b81516107e2816134f8565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156108f7576108f7613ceb565b818103818111156108f7576108f7613ceb565b60008060408385031215613d3a57600080fd5b825191506020830151613726816134cd565b600060208284031215613d5e57600080fd5b81516107e28161349b565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613dc1816011850160208701613438565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613dfb816012850160208701613438565b9190910160120192915050565b600060208284031215613e1a57600080fd5b5051919050565b604051601f8201601f1916810167ffffffffffffffff81118282101715613e4a57613e4a613d69565b604052919050565b80516001600160801b038116811461060757600080fd5b600060608284031215613e7b57600080fd5b6040516060810181811067ffffffffffffffff82111715613e9e57613e9e613d69565b60405282518152613eb160208401613e52565b6020820152613ec260408401613e52565b60408201529392505050565b60006020808385031215613ee157600080fd5b825167ffffffffffffffff80821115613ef957600080fd5b818501915085601f830112613f0d57600080fd5b815181811115613f1f57613f1f613d69565b8060051b9150613f30848301613e21565b8181529183018401918481019088841115613f4a57600080fd5b938501935b83851015613f745784519250613f648361349b565b8282529385019390850190613f4f565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613fab816010850160208701613438565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613dc1816011850160208701613438565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b81810360008312801583831316838312821617156114f6576114f6613ceb565b634e487b7160e01b600052601260045260246000fd5b60008261406c5761406c614047565b500690565b60006001820161408357614083613ceb565b5060010190565b60008261409957614099614047565b500490565b6000808335601e198436030181126140b557600080fd5b83018035915067ffffffffffffffff8211156140d057600080fd5b6020019150368190038213156135db57600080fd5b80820281158282048414176108f7576108f7613ceb565b60006020828403121561410e57600080fd5b81516107e2816134cd565b6000806040838503121561412c57600080fd5b505080516020909101519092909150565b6000825161414f818460208701613438565b919091019291505056fea2646970667358221220b4598c4666f215d0a43b8edc492e9a4b02387c9ddafcc646210e69d3450b92bf64736f6c63430008160033',
    methodIdentifiers: {
        "adminController()": "950c5d03",
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collateralToken()": "b2016bd4",
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
        "id()": "af640d0f",
        "irm()": "28e8fe7d",
        "isApprovedForAll(address,address)": "e985e9c5",
        "isPauser(address)": "46fbf68e",
        "kind()": "04baa00b",
        "lltv()": "217b7ffe",
        "load(uint256[])": "becee9c3",
        "name()": "06fdde03",
        "name(uint256)": "00ad800c",
        "nonces(address)": "7ecebe00",
        "oracle()": "7dc0d1d0",
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
