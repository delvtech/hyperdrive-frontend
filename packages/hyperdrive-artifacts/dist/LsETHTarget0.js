export const LsETHTarget0 = {
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
    bytecode: '0x6102406040523480156200001257600080fd5b50604051620042d3380380620042d38339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051613eee620003e560003960008181610ac10152611a7a015260008181610a9a0152611a3d015260008181610b3b0152611c32015260008181610b150152611c0c015260008181610aeb0152611be601526000610c6b01526000610c4601526000610c2101526000610bfe015260008181610bae0152611c58015260008181610b6101528181610dec01526122ed015260008181610b87015261252f01526000818161054701528181610a6e015281816120510152818161222e015281816124a20152612501015260008181610a490152610d930152613eee6000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637180c8ca1161011a578063becee9c3116100ad578063d81657431161007c578063d816574314610470578063e44808bc14610485578063e4af29d114610498578063e985e9c5146104ab578063fba56008146104be57600080fd5b8063becee9c31461042d578063c55dae631461044d578063c69e16ad14610455578063cf210e651461045d57600080fd5b8063a42dce80116100e9578063a42dce80146103df578063ab033ea9146103f2578063b0d9658014610405578063bd85b0391461041a57600080fd5b80637180c8ca146103935780637ecebe00146103a65780639cd241af146103b9578063a22cb465146103cc57600080fd5b806321ff32a91161019257806346fbf68e1161016157806346fbf68e146103355780634e41a1fb146103585780634ed2d6ac1461036b57806360246c881461037e57600080fd5b806321ff32a9146102d4578063313ce567146102f55780633656eec21461030f5780633e691db91461032257600080fd5b806314e5f07b116101ce57806314e5f07b1461027057806317fad7fc146102835780631c0f12b61461029657806320fc4881146102a957600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d5780630a4e149314610250575b600080fd5b61021261020d36600461340c565b6104ed565b60405161021f9190613475565b60405180910390f35b61023b61023636600461349d565b610524565b005b61023b61024b3660046134c8565b610530565b610258610539565b6040516001600160a01b03909116815260200161021f565b61023b61027e3660046134e5565b61057c565b61023b6102913660046135bf565b610598565b61023b6102a4366004613654565b6105ae565b6102bc6102b736600461340c565b6105c1565b60405190516001600160801b0316815260200161021f565b6102e76102e236600461369c565b610602565b60405190815260200161021f565b6102fd610648565b60405160ff909116815260200161021f565b6102e761031d3660046136de565b610660565b6102e761033036600461370e565b610699565b61034861034336600461349d565b6106a4565b604051901515815260200161021f565b61021261036636600461340c565b6106da565b61023b610379366004613749565b6106e8565b610386610736565b60405161021f9190613793565b61023b6103a1366004613834565b610963565b6102e76103b436600461349d565b610971565b61023b6103c7366004613862565b61099d565b61023b6103da366004613834565b6109ae565b61023b6103ed36600461349d565b610a1a565b61023b61040036600461349d565b610a23565b61040d610a2c565b60405161021f919061389a565b6102e761042836600461340c565b610ca8565b61044061043b3660046139ae565b610cca565b60405161021f91906139f0565b610258610d85565b6102e7610dc5565b6102e761046b36600461340c565b610ddf565b610478610e28565b60405161021f9190613a34565b61023b610493366004613b45565b610f34565b61023b6104a636600461349d565b610f7c565b6103486104b9366004613ba4565b610f85565b6104c6610fc9565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b606061051f6104fb83611028565b60405160200161050b9190613475565b604051602081830303815290604052611150565b919050565b61052d81611174565b50565b61052d816112ea565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b90565b61058d89898989898989898961136d565b505050505050505050565b6105a6868686868686611564565b505050505050565b6105bb8484848433611618565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610641910161050b565b9392505050565b6040805160126020820152600091610579910161050b565b6000828152600d602090815260408083206001600160a01b0385168452825280832054815192830152610693910161050b565b92915050565b6000610693826117d9565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb83611901565b836106f2816119ff565b6001600160a01b0316336001600160a01b03161461072357604051632aab8bd360e01b815260040160405180910390fd5b61072f85858585611abc565b5050505050565b6107af604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107b9611b29565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108249190613bfe565b61082e9190613c11565b9050600080831161084057600061085b565b61085b8361085561085086611b41565b611cd7565b90611d07565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a08101841561092f5761092a8486611d1c565b610932565b60005b81526002546001600160801b031660209182015260405191925061095c9161050b91849101613793565b5050505090565b61096d8282611d31565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b6109a983838333611abc565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611dba565b61052d81611e2e565b610a3461333c565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105799261050b92910161389a565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610ce757610ce7613c24565b604051908082528060200260200182016040528015610d10578160200160208202803683370190505b50905060005b83811015610d69576000858583818110610d3257610d32613c3a565b90506020020135905060008154905080848481518110610d5457610d54613c3a565b60209081029190910101525050600101610d16565b50610d7e8160405160200161050b91906139f0565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b6000610579600b5460405160200161050b91815260200190565b600061051f610e16610e117f000000000000000000000000000000000000000000000000000000000000000085613bfe565b611ea2565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610579600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610f3e816119ff565b6001600160a01b0316336001600160a01b031614610f6f57604051632aab8bd360e01b815260040160405180910390fd5b6105a68686868686611618565b61052d81611ee6565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610693910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105799060600161050b565b606060f882901c6001600160f81b038316600061104482611f5a565b9050600083600381111561105a5761105a613bd2565b0361108c576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611148565b60018360038111156110a0576110a0613bd2565b036110cc57806040516020016110b69190613c50565b6040516020818303038152906040529350611148565b60028360038111156110e0576110e0613bd2565b036110f657806040516020016110b69190613c89565b600383600381111561110a5761110a613bd2565b03611148576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161116b9190613475565b60405180910390fd5b61117c61200f565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156111b45750336001600160a01b03821614155b80156111cb5750600a546001600160a01b03163314155b156111e8576040516282b42960e81b815260040160405180910390fd5b60006111f2612039565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561123c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112609190613cc3565b90506112766001600160a01b03851684836120c4565b8161127f612039565b1461129d576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061052d6001600055565b336000908152600c602052604090205460ff16611319576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061136290831515815260200190565b60405180910390a150565b8342111561138e5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166113b55760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156114a3573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146114e157604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061158157506001600160a01b038516155b1561159f5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146115bf5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561160f576116078585838181106115df576115df613c3a565b9050602002013588888686868181106115fa576115fa613c3a565b9050602002013533611618565b6001016115c2565b50505050505050565b6001600160a01b038416158061163557506001600160a01b038316155b156116535760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611717576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117175760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117155760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061170f908490613c11565b90915550505b505b6000858152600d602090815260408083206001600160a01b038816845290915281208054849290611749908490613c11565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611780908490613bfe565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006117e361200f565b6117ec82612116565b6008546001600160a01b031680611806602085018561349d565b6001600160a01b03161461182d57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118565750336001600160a01b03821614155b801561186d5750600a546001600160a01b03163314155b1561188a576040516282b42960e81b815260040160405180910390fd5b6000611894611b29565b600b805460009091559091506118ab81838761214c565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476118e38685896121e6565b60405190815260200160405180910390a250505061051f6001600055565b606060f882901c6001600160f81b038316600061191d82611f5a565b9050600083600381111561193357611933613bd2565b03611965576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611148565b600183600381111561197957611979613bd2565b0361198f57806040516020016110b69190613cdc565b60028360038111156119a3576119a3613bd2565b036119b957806040516020016110b69190613d14565b60038360038111156119cd576119cd613bd2565b0361114857505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611b3c670de0b6b3a7640000612215565b905090565b611ba56040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611c9d91166122a2565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611ccf929004166122a2565b905292915050565b6000806000611ce584612318565b9150915080610d7e57604051635516328b60e11b815260040160405180910390fd5b60006106418383670de0b6b3a76400006123a5565b600061064183670de0b6b3a7640000846123a5565b600a546001600160a01b03163314611d5b576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611de4576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611e58576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611eca600e6000611eb66002866123c3565b8152602001908152602001600020546123f8565b611edc600e6000611eb66001876123c3565b6106939190613d40565b600a546001600160a01b03163314611f10576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561200157611f95600a86613d76565b611fa0906030613bfe565b60f81b826001611fb08487613c11565b611fba9190613c11565b81518110611fca57611fca613c3a565b60200101906001600160f81b031916908160001a90535080611feb81613d8a565b9150611ffa9050600a86613da3565b9450611f84565b918290030190815292915050565b60026000540361203257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156120a0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b3c9190613cc3565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526109a9908490612426565b6000612125602083018361349d565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121598585611d07565b905061216481612489565b945084600003612178576000915050610641565b61218860408401602085016134c8565b156121b7576121b08561219e602086018661349d565b6121ab6040870187613db7565b6124d9565b91506121de565b6121da856121c8602086018661349d565b6121d56040870187613db7565b6124f4565b8491505b509392505050565b60006121f860408301602084016134c8565b15612204575082610641565b61220e8484611d07565b9050610641565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f02906024015b602060405180830381865afa15801561227e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106939190613cc3565b600080670de0b6b3a76400006122b6612528565b6122c09190613dfe565b90508083116122d05760006122da565b6122da8184613c11565b9150610641612311670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613dfe565b8390611d1c565b60008060008060006123298661255e565b915091508061234057506000958695509350505050565b61234d8660a001516123f8565b61235687612898565b8361236489600001516123f8565b61236e9190613e15565b6123789190613e15565b6123829190613d40565b92505050600081121561239b5750600093849350915050565b9360019350915050565b60008260001904841183021582026123bc57600080fd5b5091020490565b60006001600160f81b038211156123ed5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124225760405163396ea70160e11b815260040160405180910390fd5b5090565b600061243b6001600160a01b038416836128fc565b9050805160001415801561246057508080602001905181019061245e9190613e35565b155b156109a957604051635274afe760e01b81526001600160a01b038416600482015260240161116b565b604051631e66865560e21b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063799a195490602401612261565b600060405163350b944160e11b815260040160405180910390fd5b6105bb6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866120c4565b60006125547f000000000000000000000000000000000000000000000000000000000000000042613d76565b611b3c9042613c11565b6000806000612588612583856101600151866101400151611d0790919063ffffffff16565b6123f8565b6125a861258386610120015187610100015161290a90919063ffffffff16565b6125b29190613d40565b90506000806125c98660000151876020015161291f565b91509150806125e057506000958695509350505050565b6000831315612730576000839050600061262e886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061261f9190613c11565b8d606001518e6080015161295e565b9350905082612647575060009788975095505050505050565b8181106126e5576000612681858a60400151858c60e00151670de0b6b3a76400006126729190613c11565b8d606001518e60800151612a70565b945090508315801561269657508860c0015183105b156126ad5750600098600198509650505050505050565b836126c357506000988998509650505050505050565b6126cc816123f8565b6126d590613e52565b9960019950975050505050505050565b600088602001511261271c576127048860a00151856125839190613c11565b61270d90613e52565b98600198509650505050505050565b60a088015188516127049161258391613c11565b600083121561288957600061274484613e52565b905060006127788489604001518a60e00151670de0b6b3a76400006127699190613c11565b8b606001518c60800151612b33565b9350905082612791575060009788975095505050505050565b8181106128165760006127cb858a60400151858c60e00151670de0b6b3a76400006127bc9190613c11565b8d606001518e60800151612bdf565b94509050831580156127e057508860c0015183105b156127f75750600098600198509650505050505050565b8361280d57506000988998509650505050505050565b6126d5816123f8565b6000612848858a604001518b60e00151670de0b6b3a76400006128399190613c11565b8c606001518d60800151612cb6565b945090508361286257506000988998509650505050505050565b6126d561287f8a6060015184866128799190613c11565b90611d1c565b6125839083613bfe565b50600095600195509350505050565b60006128cb612583836101200151670de0b6b3a76400006128b99190613c11565b60608501516101008601519190612d65565b611edc612583846101600151670de0b6b3a76400006128ea9190613c11565b606086015161014087015191906123a5565b606061064183836000612d8b565b60006106418383670de0b6b3a7640000612d65565b60008060008361292e866123f8565b6129389190613d40565b90506000811215612950576000809250925050612957565b9150600190505b9250929050565b60008060008812156129805761297388613e52565b61297d9087613bfe565b95505b60008061298d8b8b61291f565b91509150806129a457600080935093505050612a64565b60006129b3838b8a8a8a612e28565b905060006129d66129ce8a6129c88a8e61290a565b90612e57565b899089612d65565b9050808210156129f0576000809550955050505050612a64565b808203670de0b6b3a76400008110612a2557612a1e612a17670de0b6b3a76400008c611d1c565b8290612e57565b9050612a3d565b612a3a612a17670de0b6b3a76400008c612ec2565b90505b8b811015612a5657600080965096505050505050612a64565b8b9003955060019450505050505b97509795505050505050565b6000806000612a828989888888612ed7565b9050612a92866129c8898b613bfe565b975087811015612aa9576000809250925050612b28565b878103612ab7818688612d65565b9050670de0b6b3a76400008110612ae457612add612a17670de0b6b3a764000089612ec2565b9050612afc565b612af9612a17670de0b6b3a764000089611d1c565b90505b612b068186612ec2565b9050808a1015612b1e57600080935093505050612b28565b8903925060019150505b965096945050505050565b6000806000612b458888888888612ed7565b90506000612b70670de0b6b3a7640000612b5f8888611d1c565b612b699190613bfe565b8390612ec2565b9050670de0b6b3a76400008110612b9d57612b96612a17670de0b6b3a764000089612ec2565b9050612bb5565b612bb2612a17670de0b6b3a764000089611d1c565b90505b80881015612bcb57600080935093505050612bd5565b8703925060019150505b9550959350505050565b6000806000612bf18989888888612ed7565b905086881015612c08576000809250925050612b28565b9686900396612c178887612e57565b975087811015612c2e576000809250925050612b28565b878103612c3c818688612d65565b9050670de0b6b3a76400008110612c6957612c62612a17670de0b6b3a764000089612ec2565b9050612c81565b612c7e612a17670de0b6b3a764000089611d1c565b90505b612c8b8186612ec2565b905089811015612ca357600080935093505050612b28565b9890980398600198509650505050505050565b6000806000612cc88888888888612e28565b90506000612cec670de0b6b3a7640000612ce28888612ec2565b6123119190613bfe565b9050670de0b6b3a76400008110612d1957612d12612a17670de0b6b3a764000089611d1c565b9050612d31565b612d2e612a17670de0b6b3a764000089612ec2565b90505b612d3b8186611d1c565b905088811015612d5357600080935093505050612bd5565b97909703976001975095505050505050565b6000826000190484118302158202612d7c57600080fd5b50910281810615159190040190565b606081471015612db05760405163cd78605960e01b815230600482015260240161116b565b600080856001600160a01b03168486604051612dcc9190613e6e565b60006040518083038185875af1925050503d8060008114612e09576040519150601f19603f3d011682016040523d82523d6000602084013e612e0e565b606091505b5091509150612e1e868383612efc565b9695505050505050565b6000612e348585612e57565b612e4d612e45866129c8868b611d07565b8590856123a5565b612e1e9190613bfe565b600081600003612e705750670de0b6b3a7640000610693565b82600003612e8057506000610693565b6000612e8b836123f8565b90506000612ea0612e9b866123f8565b612f58565b9050818102612eb7670de0b6b3a764000082613e8a565b9050612e1e8161317e565b600061064183670de0b6b3a764000084612d65565b6000612ee38585612e57565b612e4d612ef4866129c8868b61290a565b859085612d65565b606082612f1157612f0c82613313565b610641565b8151158015612f2857506001600160a01b0384163b155b15612f5157604051639996b31560e01b81526001600160a01b038516600482015260240161116b565b5080610641565b6000808213612f7a5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ffd9084901c6123f8565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361319957506000919050565b680755bf798b4a1bf1e582126131c2576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e1e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6123f8565b8051156133235780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016134076040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561341e57600080fd5b5035919050565b60005b83811015613440578181015183820152602001613428565b50506000910152565b60008151808452613461816020860160208601613425565b601f01601f19169290920160200192915050565b6020815260006106416020830184613449565b6001600160a01b038116811461052d57600080fd5b6000602082840312156134af57600080fd5b813561064181613488565b801515811461052d57600080fd5b6000602082840312156134da57600080fd5b8135610641816134ba565b60008060008060008060008060006101208a8c03121561350457600080fd5b8935985060208a0135975060408a013561351d81613488565b965060608a013561352d81613488565b955060808a013561353d816134ba565b945060a08a0135935060c08a013560ff8116811461355a57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261358c57600080fd5b50813567ffffffffffffffff8111156135a457600080fd5b6020830191508360208260051b850101111561295757600080fd5b600080600080600080608087890312156135d857600080fd5b86356135e381613488565b955060208701356135f381613488565b9450604087013567ffffffffffffffff8082111561361057600080fd5b61361c8a838b0161357a565b9096509450606089013591508082111561363557600080fd5b5061364289828a0161357a565b979a9699509497509295939492505050565b6000806000806080858703121561366a57600080fd5b84359350602085013561367c81613488565b9250604085013561368c81613488565b9396929550929360600135925050565b6000806000606084860312156136b157600080fd5b8335925060208401356136c381613488565b915060408401356136d381613488565b809150509250925092565b600080604083850312156136f157600080fd5b82359150602083013561370381613488565b809150509250929050565b60006020828403121561372057600080fd5b813567ffffffffffffffff81111561373757600080fd5b82016060818503121561064157600080fd5b6000806000806080858703121561375f57600080fd5b84359350602085013561377181613488565b925060408501359150606085013561378881613488565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561384757600080fd5b823561385281613488565b91506020830135613703816134ba565b60008060006060848603121561387757600080fd5b83359250602084013561388981613488565b929592945050506040919091013590565b81516001600160a01b03168152610220810160208301516138c660208401826001600160a01b03169052565b5060408301516138e160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613947828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b600080602083850312156139c157600080fd5b823567ffffffffffffffff8111156139d857600080fd5b6139e48582860161357a565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613a2857835183529284019291840191600101613a0c565b50909695505050505050565b81516001600160801b0316815261018081016020830151613a6060208401826001600160801b03169052565b506040830151613a7b60408401826001600160801b03169052565b506060830151613a9660608401826001600160801b03169052565b506080830151613aab6080840182600f0b9052565b5060a0830151613ac660a08401826001600160801b03169052565b5060c0830151613ae160c08401826001600160801b03169052565b5060e0830151613afc60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526139a6565b600080600080600060a08688031215613b5d57600080fd5b853594506020860135613b6f81613488565b93506040860135613b7f81613488565b9250606086013591506080860135613b9681613488565b809150509295509295909350565b60008060408385031215613bb757600080fd5b8235613bc281613488565b9150602083013561370381613488565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561069357610693613be8565b8181038181111561069357610693613be8565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613c7c816011850160208701613425565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613cb6816012850160208701613425565b9190910160120192915050565b600060208284031215613cd557600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613d07816010850160208701613425565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613c7c816011850160208701613425565b8181036000831280158383131683831282161715610d7e57610d7e613be8565b634e487b7160e01b600052601260045260246000fd5b600082613d8557613d85613d60565b500690565b600060018201613d9c57613d9c613be8565b5060010190565b600082613db257613db2613d60565b500490565b6000808335601e19843603018112613dce57600080fd5b83018035915067ffffffffffffffff821115613de957600080fd5b60200191503681900382131561295757600080fd5b808202811582820484141761069357610693613be8565b80820182811260008312801582168215821617156139a6576139a6613be8565b600060208284031215613e4757600080fd5b8151610641816134ba565b6000600160ff1b8201613e6757613e67613be8565b5060000390565b60008251613e80818460208701613425565b9190910192915050565b600082613e9957613e99613d60565b600160ff1b821460001984141615613eb357613eb3613be8565b50059056fea26469706673582212200752dd83113c43cc23f8ed06a6c769ab239ae5e63ebd2a3de7122259130f568564736f6c63430008140033',
    methodIdentifiers: {
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
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
        "load(uint256[])": "becee9c3",
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
        "vaultSharesToken()": "0a4e1493"
    }
};
