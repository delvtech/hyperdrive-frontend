export const MockHyperdriveTarget0 = {
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
            "name": "getGovernanceFeesAccrued",
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004819380380620048198339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161440a6200040f60003960008181610be80152611b87015260008181610bc10152611b4a015260008181610c620152611d3f015260008181610c3c0152611d19015260008181610c120152611cf301526000610d9201526000610d6d01526000610d4801526000610d25015260008181610cd50152611d65015260008181610c8801528181610ef90152612471015260008181610cae0152612a2501526000818161059d0152610b950152600081816106a501528181610b7001528181610eba0152818161216a015281816123460152818161238f015281816125c50152818161260e0152818161274c015281816127f8015281816128e40152612990015261440a6000f3fe608060405234801561001057600080fd5b506004361061021b5760003560e01c80637180c8ca11610125578063becee9c3116100ad578063d81657431161007c578063d8165743146104c6578063e44808bc146104db578063e4af29d1146104ee578063e985e9c514610501578063fba560081461051457600080fd5b8063becee9c31461048b578063c55dae63146104ab578063c69e16ad1461040f578063cf210e65146104b357600080fd5b8063a22cb465116100f4578063a22cb4651461042a578063a42dce801461043d578063ab033ea914610450578063b0d9658014610463578063bd85b0391461047857600080fd5b80637180c8ca146103e95780637ecebe00146103fc5780638e67f87e1461040f5780639cd241af1461041757600080fd5b806321ff32a9116101a857806346fbf68e1161017757806346fbf68e146103835780634e41a1fb146103a65780634ed2d6ac146103b957806354fd4d50146103cc57806360246c88146103d457600080fd5b806321ff32a914610322578063313ce567146103435780633656eec21461035d5780633e691db91461037057600080fd5b80630a4e1493116101ef5780630a4e14931461029e57806314e5f07b146102be57806317fad7fc146102d15780631c0f12b6146102e457806320fc4881146102f757600080fd5b8062ad800c1461022057806301681a621461024957806302329a291461025e57806306fdde0314610271575b600080fd5b61023361022e366004613902565b610543565b604051610240919061396b565b60405180910390f35b61025c610257366004613993565b61057a565b005b61025c61026c3660046139be565b610586565b6102336040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b81525081565b6102a661058f565b6040516001600160a01b039091168152602001610240565b61025c6102cc3660046139ea565b6105d2565b61025c6102df366004613abe565b6105ee565b61025c6102f2366004613b53565b610604565b61030a610305366004613902565b610617565b60405190516001600160801b03168152602001610240565b610335610330366004613b9b565b610658565b604051908152602001610240565b61034b61069e565b60405160ff9091168152602001610240565b61033561036b366004613bdd565b610739565b61033561037e366004613c0d565b610772565b610396610391366004613993565b61077d565b6040519015158152602001610240565b6102336103b4366004613902565b6107b3565b61025c6103c7366004613c48565b6107c1565b61023361080f565b6103dc610843565b6040516102409190613c92565b61025c6103f7366004613d33565b610a70565b61033561040a366004613993565b610a7e565b610335610aaa565b61025c610425366004613d61565b610ac4565b61025c610438366004613d33565b610ad5565b61025c61044b366004613993565b610b41565b61025c61045e366004613993565b610b4a565b61046b610b53565b6040516102409190613d99565b610335610486366004613902565b610dcf565b61049e610499366004613ead565b610df1565b6040516102409190613eef565b6102a6610eac565b6103356104c1366004613902565b610eec565b6104ce610f35565b6040516102409190613f33565b61025c6104e9366004614044565b611041565b61025c6104fc366004613993565b611089565b61039661050f3660046140a3565b611092565b61051c6110d6565b6040805182516001600160801b039081168252602093840151169281019290925201610240565b606061057561055183611135565b604051602001610561919061396b565b60405160208183030381529060405261125d565b919050565b61058381611281565b50565b610583816113f7565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105cf9101610561565b90565b6105e389898989898989898961147a565b505050505050505050565b6105fc868686868686611671565b505050505050565b6106118484848433611725565b50505050565b6040805160208101909152600081526105756007600084815260200190815260200160002060405160200161056191546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526106979101610561565b9392505050565b60006105cf7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610701573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072591906140d1565b6040805160ff909216602083015201610561565b6000828152600d602090815260408083206001600160a01b038516845282528083205481519283015261076c9101610561565b92915050565b600061076c826118e6565b6001600160a01b0381166000908152600c60209081526040808320549051610575926105619260ff169101901515815260200190565b606061057561055183611a0e565b836107cb81611b0c565b6001600160a01b0316336001600160a01b0316146107fc57604051632aab8bd360e01b815260040160405180910390fd5b61080885858585611bc9565b5050505050565b60606105cf604051806040016040528060068152602001653b189718171960d11b815250604051602001610561919061396b565b6108bc604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006108c6611c36565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610931919061411a565b61093b919061412d565b9050600080831161094d576000610968565b6109688361096261095d86611c4e565b611de4565b90611e14565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610a3c57610a378486611e29565b610a3f565b60005b81526002546001600160801b0316602091820152604051919250610a699161056191849101613c92565b5050505090565b610a7a8282611e3e565b5050565b6001600160a01b0381166000908152601160209081526040808320548151928301526105759101610561565b60006105cf600b5460405160200161056191815260200190565b610ad083838333611bc9565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61058381611ec7565b61058381611f3b565b610b5b613832565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105cf92610561929101613d99565b6000818152600e60209081526040808320548151928301526105759101610561565b606060008267ffffffffffffffff811115610e0e57610e0e614140565b604051908082528060200260200182016040528015610e37578160200160208202803683370190505b50905060005b83811015610e90576000858583818110610e5957610e59614156565b90506020020135905060008154905080848481518110610e7b57610e7b614156565b60209081029190910101525050600101610e3d565b50610ea5816040516020016105619190613eef565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105cf9101610561565b6000610575610f23610f1e7f00000000000000000000000000000000000000000000000000000000000000008561411a565b611faf565b60405160200161056191815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105cf6001604051602001610561919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461104b81611b0c565b6001600160a01b0316336001600160a01b03161461107c57604051632aab8bd360e01b815260040160405180910390fd5b6105fc8686868686611725565b61058381611ff3565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff909116151591810191909152909161076c9101610561565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105cf90606001610561565b606060f882901c6001600160f81b038316600061115182612067565b90506000836003811115611167576111676140ee565b03611199576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611255565b60018360038111156111ad576111ad6140ee565b036111d957806040516020016111c3919061416c565b6040516020818303038152906040529350611255565b60028360038111156111ed576111ed6140ee565b0361120357806040516020016111c391906141a5565b6003836003811115611217576112176140ee565b03611255576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b8152600401611278919061396b565b60405180910390fd5b61128961211c565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156112c15750336001600160a01b03821614155b80156112d85750600a546001600160a01b03163314155b156112f5576040516282b42960e81b815260040160405180910390fd5b60006112ff612146565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611349573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136d91906141df565b90506113836001600160a01b03851684836121da565b8161138c612146565b146113aa576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105836001600055565b336000908152600c602052604090205460ff16611426576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061146f90831515815260200190565b60405180910390a150565b8342111561149b5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114c25760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156115b0573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146115ee57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061168e57506001600160a01b038516155b156116ac5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116cc5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561171c576117148585838181106116ec576116ec614156565b90506020020135888886868681811061170757611707614156565b9050602002013533611725565b6001016116cf565b50505050505050565b6001600160a01b038416158061174257506001600160a01b038316155b156117605760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611824576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166118245760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146118225760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061181c90849061412d565b90915550505b505b6000858152600d602090815260408083206001600160a01b03881684529091528120805484929061185690849061412d565b90915550506000858152600d602090815260408083206001600160a01b03871684529091528120805484929061188d90849061411a565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006118f061211c565b6118f98261222c565b6008546001600160a01b0316806119136020850185613993565b6001600160a01b03161461193a57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156119635750336001600160a01b03821614155b801561197a5750600a546001600160a01b03163314155b15611997576040516282b42960e81b815260040160405180910390fd5b60006119a1611c36565b600b805460009091559091506119b8818387612262565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476119f08685896122fc565b60405190815260200160405180910390a25050506105756001600055565b606060f882901c6001600160f81b0383166000611a2a82612067565b90506000836003811115611a4057611a406140ee565b03611a72576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611255565b6001836003811115611a8657611a866140ee565b03611a9c57806040516020016111c391906141f8565b6002836003811115611ab057611ab06140ee565b03611ac657806040516020016111c39190614230565b6003836003811115611ada57611ada6140ee565b0361125557505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611c49670de0b6b3a764000061232b565b905090565b611cb26040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611daa9116612426565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611ddc92900416612426565b905292915050565b6000806000611df28461249c565b9150915080610ea557604051635516328b60e11b815260040160405180910390fd5b60006106978383670de0b6b3a7640000612529565b600061069783670de0b6b3a764000084612529565b600a546001600160a01b03163314611e68576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611ef1576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611f65576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611fd7600e6000611fc3600286612547565b81526020019081526020016000205461257c565b611fe9600e6000611fc3600187612547565b61076c919061425c565b600a546001600160a01b0316331461201d576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561210e576120a2600a86614292565b6120ad90603061411a565b60f81b8260016120bd848761412d565b6120c7919061412d565b815181106120d7576120d7614156565b60200101906001600160f81b031916908160001a905350806120f8816142a6565b91506121079050600a866142bf565b9450612091565b918290030190815292915050565b60026000540361213f57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b8152306004820152600090611c49906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156121b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121d591906141df565b6125aa565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610ad0908490612693565b600061223b6020830183613993565b6001600160a01b0316036105835760405163f0dd15fd60e01b815260040160405180910390fd5b60008061226f8585611e14565b905061227a816125aa565b94508460000361228e576000915050610697565b61229e60408401602085016139be565b156122cd576122c6856122b46020860186613993565b6122c160408701876142d3565b6126f6565b91506122f4565b6122f0856122de6020860186613993565b6122eb60408701876142d3565b612890565b8491505b509392505050565b600061230e60408301602084016139be565b1561231a575082610697565b6123248484611e14565b9050610697565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161237a575047612405565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156123de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061240291906141df565b90505b601254600003612416576000610697565b6012546106979084908390612529565b600080670de0b6b3a764000061243a612a1e565b612444919061431a565b905080831161245457600061245e565b61245e818461412d565b9150610697612495670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061431a565b8390611e29565b60008060008060006124ad86612a54565b91509150806124c457506000958695509350505050565b6124d18660a0015161257c565b6124da87612d8e565b836124e8896000015161257c565b6124f29190614331565b6124fc9190614331565b612506919061425c565b92505050600081121561251f5750600093849350915050565b9360019350915050565b600082600019048411830215820261254057600080fd5b5091020490565b60006001600160f81b038211156125715760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156125a65760405163396ea70160e11b815260040160405180910390fd5b5090565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016125f9575047612684565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561265d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061268191906141df565b90505b60125461069790849083612529565b60006126a86001600160a01b03841683612df2565b905080516000141580156126cd5750808060200190518101906126cb9190614351565b155b15610ad057604051635274afe760e01b81526001600160a01b0384166004820152602401611278565b60006012548511612707578461270b565b6012545b945060006127188661232b565b9050856012600082825461272c919061412d565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127d2576040516001600160a01b038716908390600081818185875af1925050503d80600081146127c2576040519150601f19603f3d011682016040523d82523d6000602084013e6127c7565b606091505b505080915050612868565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612841573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128659190614351565b90505b80612886576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601254841161289f57836128a3565b6012545b935060006128b08561232b565b905084601260008282546128c4919061412d565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161296a576040516001600160a01b038616908390600081818185875af1925050503d806000811461295a576040519150601f19603f3d011682016040523d82523d6000602084013e61295f565b606091505b505080915050612a00565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156129d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129fd9190614351565b90505b806105fc576040516312171d8360e31b815260040160405180910390fd5b6000612a4a7f000000000000000000000000000000000000000000000000000000000000000042614292565b611c49904261412d565b6000806000612a7e612a79856101600151866101400151611e1490919063ffffffff16565b61257c565b612a9e612a79866101200151876101000151612e0090919063ffffffff16565b612aa8919061425c565b9050600080612abf86600001518760200151612e15565b9150915080612ad657506000958695509350505050565b6000831315612c265760008390506000612b24886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612b15919061412d565b8d606001518e60800151612e54565b9350905082612b3d575060009788975095505050505050565b818110612bdb576000612b77858a60400151858c60e00151670de0b6b3a7640000612b68919061412d565b8d606001518e60800151612f66565b9450905083158015612b8c57508860c0015183105b15612ba35750600098600198509650505050505050565b83612bb957506000988998509650505050505050565b612bc28161257c565b612bcb9061436e565b9960019950975050505050505050565b6000886020015112612c1257612bfa8860a0015185612a79919061412d565b612c039061436e565b98600198509650505050505050565b60a08801518851612bfa91612a799161412d565b6000831215612d7f576000612c3a8461436e565b90506000612c6e8489604001518a60e00151670de0b6b3a7640000612c5f919061412d565b8b606001518c60800151613029565b9350905082612c87575060009788975095505050505050565b818110612d0c576000612cc1858a60400151858c60e00151670de0b6b3a7640000612cb2919061412d565b8d606001518e608001516130d5565b9450905083158015612cd657508860c0015183105b15612ced5750600098600198509650505050505050565b83612d0357506000988998509650505050505050565b612bcb8161257c565b6000612d3e858a604001518b60e00151670de0b6b3a7640000612d2f919061412d565b8c606001518d608001516131ac565b9450905083612d5857506000988998509650505050505050565b612bcb612d758a606001518486612d6f919061412d565b90611e29565b612a79908361411a565b50600095600195509350505050565b6000612dc1612a79836101200151670de0b6b3a7640000612daf919061412d565b6060850151610100860151919061325b565b611fe9612a79846101600151670de0b6b3a7640000612de0919061412d565b60608601516101408701519190612529565b606061069783836000613281565b60006106978383670de0b6b3a764000061325b565b600080600083612e248661257c565b612e2e919061425c565b90506000811215612e46576000809250925050612e4d565b9150600190505b9250929050565b6000806000881215612e7657612e698861436e565b612e73908761411a565b95505b600080612e838b8b612e15565b9150915080612e9a57600080935093505050612f5a565b6000612ea9838b8a8a8a61331e565b90506000612ecc612ec48a612ebe8a8e612e00565b9061334d565b89908961325b565b905080821015612ee6576000809550955050505050612f5a565b808203670de0b6b3a76400008110612f1b57612f14612f0d670de0b6b3a76400008c611e29565b829061334d565b9050612f33565b612f30612f0d670de0b6b3a76400008c6133b8565b90505b8b811015612f4c57600080965096505050505050612f5a565b8b9003955060019450505050505b97509795505050505050565b6000806000612f7889898888886133cd565b9050612f8886612ebe898b61411a565b975087811015612f9f57600080925092505061301e565b878103612fad81868861325b565b9050670de0b6b3a76400008110612fda57612fd3612f0d670de0b6b3a7640000896133b8565b9050612ff2565b612fef612f0d670de0b6b3a764000089611e29565b90505b612ffc81866133b8565b9050808a10156130145760008093509350505061301e565b8903925060019150505b965096945050505050565b600080600061303b88888888886133cd565b90506000613066670de0b6b3a76400006130558888611e29565b61305f919061411a565b83906133b8565b9050670de0b6b3a764000081106130935761308c612f0d670de0b6b3a7640000896133b8565b90506130ab565b6130a8612f0d670de0b6b3a764000089611e29565b90505b808810156130c1576000809350935050506130cb565b8703925060019150505b9550959350505050565b60008060006130e789898888886133cd565b9050868810156130fe57600080925092505061301e565b968690039661310d888761334d565b97508781101561312457600080925092505061301e565b87810361313281868861325b565b9050670de0b6b3a7640000811061315f57613158612f0d670de0b6b3a7640000896133b8565b9050613177565b613174612f0d670de0b6b3a764000089611e29565b90505b61318181866133b8565b9050898110156131995760008093509350505061301e565b9890980398600198509650505050505050565b60008060006131be888888888861331e565b905060006131e2670de0b6b3a76400006131d888886133b8565b612495919061411a565b9050670de0b6b3a7640000811061320f57613208612f0d670de0b6b3a764000089611e29565b9050613227565b613224612f0d670de0b6b3a7640000896133b8565b90505b6132318186611e29565b905088811015613249576000809350935050506130cb565b97909703976001975095505050505050565b600082600019048411830215820261327257600080fd5b50910281810615159190040190565b6060814710156132a65760405163cd78605960e01b8152306004820152602401611278565b600080856001600160a01b031684866040516132c2919061438a565b60006040518083038185875af1925050503d80600081146132ff576040519150601f19603f3d011682016040523d82523d6000602084013e613304565b606091505b50915091506133148683836133f2565b9695505050505050565b600061332a858561334d565b61334361333b86612ebe868b611e14565b859085612529565b613314919061411a565b6000816000036133665750670de0b6b3a764000061076c565b826000036133765750600061076c565b60006133818361257c565b905060006133966133918661257c565b61344e565b90508181026133ad670de0b6b3a7640000826143a6565b905061331481613674565b600061069783670de0b6b3a76400008461325b565b60006133d9858561334d565b6133436133ea86612ebe868b612e00565b85908561325b565b6060826134075761340282613809565b610697565b815115801561341e57506001600160a01b0384163b155b1561344757604051639996b31560e01b81526001600160a01b0385166004820152602401611278565b5080610697565b60008082136134705760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134f39084901c61257c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361368f57506000919050565b680755bf798b4a1bf1e582126136b8576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061331474029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61257c565b8051156138195780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016138fd6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561391457600080fd5b5035919050565b60005b8381101561393657818101518382015260200161391e565b50506000910152565b6000815180845261395781602086016020860161391b565b601f01601f19169290920160200192915050565b602081526000610697602083018461393f565b6001600160a01b038116811461058357600080fd5b6000602082840312156139a557600080fd5b81356106978161397e565b801515811461058357600080fd5b6000602082840312156139d057600080fd5b8135610697816139b0565b60ff8116811461058357600080fd5b60008060008060008060008060006101208a8c031215613a0957600080fd5b8935985060208a0135975060408a0135613a228161397e565b965060608a0135613a328161397e565b955060808a0135613a42816139b0565b945060a08a0135935060c08a0135613a59816139db565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112613a8b57600080fd5b50813567ffffffffffffffff811115613aa357600080fd5b6020830191508360208260051b8501011115612e4d57600080fd5b60008060008060008060808789031215613ad757600080fd5b8635613ae28161397e565b95506020870135613af28161397e565b9450604087013567ffffffffffffffff80821115613b0f57600080fd5b613b1b8a838b01613a79565b90965094506060890135915080821115613b3457600080fd5b50613b4189828a01613a79565b979a9699509497509295939492505050565b60008060008060808587031215613b6957600080fd5b843593506020850135613b7b8161397e565b92506040850135613b8b8161397e565b9396929550929360600135925050565b600080600060608486031215613bb057600080fd5b833592506020840135613bc28161397e565b91506040840135613bd28161397e565b809150509250925092565b60008060408385031215613bf057600080fd5b823591506020830135613c028161397e565b809150509250929050565b600060208284031215613c1f57600080fd5b813567ffffffffffffffff811115613c3657600080fd5b82016060818503121561069757600080fd5b60008060008060808587031215613c5e57600080fd5b843593506020850135613c708161397e565b9250604085013591506060850135613c878161397e565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613d4657600080fd5b8235613d518161397e565b91506020830135613c02816139b0565b600080600060608486031215613d7657600080fd5b833592506020840135613d888161397e565b929592945050506040919091013590565b81516001600160a01b0316815261022081016020830151613dc560208401826001600160a01b03169052565b506040830151613de060408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613e46828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613ec057600080fd5b823567ffffffffffffffff811115613ed757600080fd5b613ee385828601613a79565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613f2757835183529284019291840191600101613f0b565b50909695505050505050565b81516001600160801b0316815261018081016020830151613f5f60208401826001600160801b03169052565b506040830151613f7a60408401826001600160801b03169052565b506060830151613f9560608401826001600160801b03169052565b506080830151613faa6080840182600f0b9052565b5060a0830151613fc560a08401826001600160801b03169052565b5060c0830151613fe060c08401826001600160801b03169052565b5060e0830151613ffb60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613ea5565b600080600080600060a0868803121561405c57600080fd5b85359450602086013561406e8161397e565b9350604086013561407e8161397e565b92506060860135915060808601356140958161397e565b809150509295509295909350565b600080604083850312156140b657600080fd5b82356140c18161397e565b91506020830135613c028161397e565b6000602082840312156140e357600080fd5b8151610697816139db565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561076c5761076c614104565b8181038181111561076c5761076c614104565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161419881601185016020870161391b565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516141d281601285016020870161391b565b9190910160120192915050565b6000602082840312156141f157600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b81526000825161422381601085016020870161391b565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161419881601185016020870161391b565b8181036000831280158383131683831282161715610ea557610ea5614104565b634e487b7160e01b600052601260045260246000fd5b6000826142a1576142a161427c565b500690565b6000600182016142b8576142b8614104565b5060010190565b6000826142ce576142ce61427c565b500490565b6000808335601e198436030181126142ea57600080fd5b83018035915067ffffffffffffffff82111561430557600080fd5b602001915036819003821315612e4d57600080fd5b808202811582820484141761076c5761076c614104565b8082018281126000831280158216821582161715613ea557613ea5614104565b60006020828403121561436357600080fd5b8151610697816139b0565b6000600160ff1b820161438357614383614104565b5060000390565b6000825161439c81846020870161391b565b9190910192915050565b6000826143b5576143b561427c565b600160ff1b8214600019841416156143cf576143cf614104565b50059056fea2646970667358221220d8d7a6664d8e095f77fc9e4a36cc27ba1256298018234070d03ed8bb991a2aeb64736f6c63430008140033',
    methodIdentifiers: {
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "decimals()": "313ce567",
        "getCheckpoint(uint256)": "20fc4881",
        "getCheckpointExposure(uint256)": "cf210e65",
        "getGovernanceFeesAccrued()": "8e67f87e",
        "getMarketState()": "d8165743",
        "getPoolConfig()": "b0d96580",
        "getPoolInfo()": "60246c88",
        "getUncollectedGovernanceFees()": "c69e16ad",
        "getWithdrawPool()": "fba56008",
        "isApprovedForAll(address,address)": "e985e9c5",
        "isPauser(address)": "46fbf68e",
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
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "setSweepCollector(address)": "e4af29d1",
        "sweep(address)": "01681a62",
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "vaultSharesToken()": "0a4e1493",
        "version()": "54fd4d50"
    }
};
