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
            "type": "receive",
            "stateMutability": "payable"
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
    bytecode: '0x6102406040523480156200001257600080fd5b50604051620045b5380380620045b58339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516141c2620003f360003960008181610cb30152611c6c015260008181610c8c0152611c2f015260008181610d2d0152611e24015260008181610d070152611dfe015260008181610cdd0152611dd801526000610e5d01526000610e3801526000610e1301526000610df0015260008181610da00152611e4a015260008181610d5301528181610fde01526124df015260008181610d7901526128030152600081816102010152818161073901528181610c60015281816122430152818161242001528181612694015281816126e401526127d5015260008181610c3b0152610f8501526141c26000f3fe6080604052600436106101f15760003560e01c80637180c8ca1161010d578063becee9c3116100a0578063d81657431161006f578063d816574314610621578063e44808bc14610643578063e4af29d114610663578063e985e9c514610683578063fba56008146106a357600080fd5b8063becee9c3146105aa578063c55dae63146105d7578063c69e16ad146105ec578063cf210e651461060157600080fd5b8063a42dce80116100dc578063a42dce8014610528578063ab033ea914610548578063b0d9658014610568578063bd85b0391461058a57600080fd5b80637180c8ca146104a85780637ecebe00146104c85780639cd241af146104e8578063a22cb4651461050857600080fd5b806321ff32a91161018557806346fbf68e1161015457806346fbf68e146104165780634e41a1fb146104465780634ed2d6ac1461046657806360246c881461048657600080fd5b806321ff32a914610381578063313ce567146103af5780633656eec2146103d65780633e691db9146103f657600080fd5b806314e5f07b116101c157806314e5f07b146102e957806317fad7fc146103095780631c0f12b61461032957806320fc48811461034957600080fd5b8062ad800c1461024657806301681a621461027c57806302329a291461029c5780630a4e1493146102bc57600080fd5b3661024157336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461023f576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b34801561025257600080fd5b506102666102613660046136e0565b6106df565b6040516102739190613749565b60405180910390f35b34801561028857600080fd5b5061023f610297366004613771565b610716565b3480156102a857600080fd5b5061023f6102b736600461379c565b610722565b3480156102c857600080fd5b506102d161072b565b6040516001600160a01b039091168152602001610273565b3480156102f557600080fd5b5061023f6103043660046137b9565b61076e565b34801561031557600080fd5b5061023f610324366004613893565b61078a565b34801561033557600080fd5b5061023f610344366004613928565b6107a0565b34801561035557600080fd5b506103696103643660046136e0565b6107b3565b60405190516001600160801b03168152602001610273565b34801561038d57600080fd5b506103a161039c366004613970565b6107f4565b604051908152602001610273565b3480156103bb57600080fd5b506103c461083a565b60405160ff9091168152602001610273565b3480156103e257600080fd5b506103a16103f13660046139b2565b610852565b34801561040257600080fd5b506103a16104113660046139e2565b61088b565b34801561042257600080fd5b50610436610431366004613771565b610896565b6040519015158152602001610273565b34801561045257600080fd5b506102666104613660046136e0565b6108cc565b34801561047257600080fd5b5061023f610481366004613a1d565b6108da565b34801561049257600080fd5b5061049b610928565b6040516102739190613a67565b3480156104b457600080fd5b5061023f6104c3366004613b08565b610b55565b3480156104d457600080fd5b506103a16104e3366004613771565b610b63565b3480156104f457600080fd5b5061023f610503366004613b36565b610b8f565b34801561051457600080fd5b5061023f610523366004613b08565b610ba0565b34801561053457600080fd5b5061023f610543366004613771565b610c0c565b34801561055457600080fd5b5061023f610563366004613771565b610c15565b34801561057457600080fd5b5061057d610c1e565b6040516102739190613b6e565b34801561059657600080fd5b506103a16105a53660046136e0565b610e9a565b3480156105b657600080fd5b506105ca6105c5366004613c82565b610ebc565b6040516102739190613cc4565b3480156105e357600080fd5b506102d1610f77565b3480156105f857600080fd5b506103a1610fb7565b34801561060d57600080fd5b506103a161061c3660046136e0565b610fd1565b34801561062d57600080fd5b5061063661101a565b6040516102739190613d08565b34801561064f57600080fd5b5061023f61065e366004613e19565b611126565b34801561066f57600080fd5b5061023f61067e366004613771565b61116e565b34801561068f57600080fd5b5061043661069e366004613e78565b611177565b3480156106af57600080fd5b506106b86111bb565b6040805182516001600160801b039081168252602093840151169281019290925201610273565b60606107116106ed8361121a565b6040516020016106fd9190613749565b604051602081830303815290604052611342565b919050565b61071f81611366565b50565b61071f816114dc565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161076b91016106fd565b90565b61077f89898989898989898961155f565b505050505050505050565b610798868686868686611756565b505050505050565b6107ad848484843361180a565b50505050565b604080516020810190915260008152610711600760008481526020019081526020016000206040516020016106fd91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261083391016106fd565b9392505050565b604080516012602082015260009161076b91016106fd565b6000828152600d602090815260408083206001600160a01b038516845282528083205481519283015261088591016106fd565b92915050565b6000610885826119cb565b6001600160a01b0381166000908152600c60209081526040808320549051610711926106fd9260ff169101901515815260200190565b60606107116106ed83611af3565b836108e481611bf1565b6001600160a01b0316336001600160a01b03161461091557604051632aab8bd360e01b815260040160405180910390fd5b61092185858585611cae565b5050505050565b6109a1604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006109ab611d1b565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610a169190613ed2565b610a209190613ee5565b90506000808311610a32576000610a4d565b610a4d83610a47610a4286611d33565b611ec9565b90611ef9565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610b2157610b1c8486611f0e565b610b24565b60005b81526002546001600160801b0316602091820152604051919250610b4e916106fd91849101613a67565b5050505090565b610b5f8282611f23565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261071191016106fd565b610b9b83838333611cae565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61071f81611fac565b61071f81612020565b610c26613610565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a0830191909152915161076b926106fd929101613b6e565b6000818152600e602090815260408083205481519283015261071191016106fd565b606060008267ffffffffffffffff811115610ed957610ed9613ef8565b604051908082528060200260200182016040528015610f02578160200160208202803683370190505b50905060005b83811015610f5b576000858583818110610f2457610f24613f0e565b90506020020135905060008154905080848481518110610f4657610f46613f0e565b60209081029190910101525050600101610f08565b50610f70816040516020016106fd9190613cc4565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161076b91016106fd565b600061076b600b546040516020016106fd91815260200190565b60006107116110086110037f000000000000000000000000000000000000000000000000000000000000000085613ed2565b612094565b6040516020016106fd91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261076b60016040516020016106fd919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461113081611bf1565b6001600160a01b0316336001600160a01b03161461116157604051632aab8bd360e01b815260040160405180910390fd5b610798868686868661180a565b61071f816120d8565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff909116151591810191909152909161088591016106fd565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261076b906060016106fd565b606060f882901c6001600160f81b03831660006112368261214c565b9050600083600381111561124c5761124c613ea6565b0361127e576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061133a565b600183600381111561129257611292613ea6565b036112be57806040516020016112a89190613f24565b604051602081830303815290604052935061133a565b60028360038111156112d2576112d2613ea6565b036112e857806040516020016112a89190613f5d565b60038360038111156112fc576112fc613ea6565b0361133a576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161135d9190613749565b60405180910390fd5b61136e612201565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156113a65750336001600160a01b03821614155b80156113bd5750600a546001600160a01b03163314155b156113da576040516282b42960e81b815260040160405180910390fd5b60006113e461222b565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561142e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114529190613f97565b90506114686001600160a01b03851684836122b6565b8161147161222b565b1461148f576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061071f6001600055565b336000908152600c602052604090205460ff1661150b576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061155490831515815260200190565b60405180910390a150565b834211156115805760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166115a75760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611695573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146116d357604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061177357506001600160a01b038516155b156117915760405163f0dd15fd60e01b815260040160405180910390fd5b8281146117b15760405163174861a760e31b815260040160405180910390fd5b60005b83811015611801576117f98585838181106117d1576117d1613f0e565b9050602002013588888686868181106117ec576117ec613f0e565b905060200201353361180a565b6001016117b4565b50505050505050565b6001600160a01b038416158061182757506001600160a01b038316155b156118455760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611909576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166119095760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146119075760008681526010602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611901908490613ee5565b90915550505b505b6000858152600d602090815260408083206001600160a01b03881684529091528120805484929061193b908490613ee5565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611972908490613ed2565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006119d5612201565b6119de82612308565b6008546001600160a01b0316806119f86020850185613771565b6001600160a01b031614611a1f57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff16158015611a485750336001600160a01b03821614155b8015611a5f5750600a546001600160a01b03163314155b15611a7c576040516282b42960e81b815260040160405180910390fd5b6000611a86611d1b565b600b80546000909155909150611a9d81838761233e565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611ad58685896123d8565b60405190815260200160405180910390a25050506107116001600055565b606060f882901c6001600160f81b0383166000611b0f8261214c565b90506000836003811115611b2557611b25613ea6565b03611b57576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061133a565b6001836003811115611b6b57611b6b613ea6565b03611b8157806040516020016112a89190613fb0565b6002836003811115611b9557611b95613ea6565b03611bab57806040516020016112a89190613fe8565b6003836003811115611bbf57611bbf613ea6565b0361133a57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611d2e670de0b6b3a7640000612407565b905090565b611d976040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611e8f9116612494565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611ec192900416612494565b905292915050565b6000806000611ed78461250a565b9150915080610f7057604051635516328b60e11b815260040160405180910390fd5b60006108338383670de0b6b3a7640000612597565b600061083383670de0b6b3a764000084612597565b600a546001600160a01b03163314611f4d576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611fd6576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b0316331461204a576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006120bc600e60006120a86002866125b5565b8152602001908152602001600020546125ea565b6120ce600e60006120a86001876125b5565b6108859190614014565b600a546001600160a01b03163314612102576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156121f357612187600a8661404a565b612192906030613ed2565b60f81b8260016121a28487613ee5565b6121ac9190613ee5565b815181106121bc576121bc613f0e565b60200101906001600160f81b031916908160001a905350806121dd8161405e565b91506121ec9050600a86614077565b9450612176565b918290030190815292915050565b60026000540361222457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612292573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d2e9190613f97565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610b9b908490612618565b60006123176020830183613771565b6001600160a01b03160361071f5760405163f0dd15fd60e01b815260040160405180910390fd5b60008061234b8585611ef9565b90506123568161267b565b94508460000361236a576000915050610833565b61237a604084016020850161379c565b156123a9576123a2856123906020860186613771565b61239d604087018761408b565b6126cb565b91506123d0565b6123cc856123ba6020860186613771565b6123c7604087018761408b565b6127c8565b8491505b509392505050565b60006123ea604083016020840161379c565b156123f6575082610833565b6124008484611ef9565b9050610833565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa158015612470573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108859190613f97565b600080670de0b6b3a76400006124a86127fc565b6124b291906140d2565b90508083116124c25760006124cc565b6124cc8184613ee5565b9150610833612503670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006140d2565b8390611f0e565b600080600080600061251b86612832565b915091508061253257506000958695509350505050565b61253f8660a001516125ea565b61254887612b6c565b8361255689600001516125ea565b61256091906140e9565b61256a91906140e9565b6125749190614014565b92505050600081121561258d5750600093849350915050565b9360019350915050565b60008260001904841183021582026125ae57600080fd5b5091020490565b60006001600160f81b038211156125df5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156126145760405163396ea70160e11b815260040160405180910390fd5b5090565b600061262d6001600160a01b03841683612bd0565b905080516000141580156126525750808060200190518101906126509190614109565b155b15610b9b57604051635274afe760e01b81526001600160a01b038416600482015260240161135d565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401612453565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b15801561273057600080fd5b505af1158015612744573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114612798576040519150601f19603f3d011682016040523d82523d6000602084013e61279d565b606091505b50509050806127bf576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6107ad6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866122b6565b60006128287f00000000000000000000000000000000000000000000000000000000000000004261404a565b611d2e9042613ee5565b600080600061285c612857856101600151866101400151611ef990919063ffffffff16565b6125ea565b61287c612857866101200151876101000151612bde90919063ffffffff16565b6128869190614014565b905060008061289d86600001518760200151612bf3565b91509150806128b457506000958695509350505050565b6000831315612a045760008390506000612902886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006128f39190613ee5565b8d606001518e60800151612c32565b935090508261291b575060009788975095505050505050565b8181106129b9576000612955858a60400151858c60e00151670de0b6b3a76400006129469190613ee5565b8d606001518e60800151612d44565b945090508315801561296a57508860c0015183105b156129815750600098600198509650505050505050565b8361299757506000988998509650505050505050565b6129a0816125ea565b6129a990614126565b9960019950975050505050505050565b60008860200151126129f0576129d88860a00151856128579190613ee5565b6129e190614126565b98600198509650505050505050565b60a088015188516129d89161285791613ee5565b6000831215612b5d576000612a1884614126565b90506000612a4c8489604001518a60e00151670de0b6b3a7640000612a3d9190613ee5565b8b606001518c60800151612e07565b9350905082612a65575060009788975095505050505050565b818110612aea576000612a9f858a60400151858c60e00151670de0b6b3a7640000612a909190613ee5565b8d606001518e60800151612eb3565b9450905083158015612ab457508860c0015183105b15612acb5750600098600198509650505050505050565b83612ae157506000988998509650505050505050565b6129a9816125ea565b6000612b1c858a604001518b60e00151670de0b6b3a7640000612b0d9190613ee5565b8c606001518d60800151612f8a565b9450905083612b3657506000988998509650505050505050565b6129a9612b538a606001518486612b4d9190613ee5565b90611f0e565b6128579083613ed2565b50600095600195509350505050565b6000612b9f612857836101200151670de0b6b3a7640000612b8d9190613ee5565b60608501516101008601519190613039565b6120ce612857846101600151670de0b6b3a7640000612bbe9190613ee5565b60608601516101408701519190612597565b60606108338383600061305f565b60006108338383670de0b6b3a7640000613039565b600080600083612c02866125ea565b612c0c9190614014565b90506000811215612c24576000809250925050612c2b565b9150600190505b9250929050565b6000806000881215612c5457612c4788614126565b612c519087613ed2565b95505b600080612c618b8b612bf3565b9150915080612c7857600080935093505050612d38565b6000612c87838b8a8a8a6130fc565b90506000612caa612ca28a612c9c8a8e612bde565b9061312b565b899089613039565b905080821015612cc4576000809550955050505050612d38565b808203670de0b6b3a76400008110612cf957612cf2612ceb670de0b6b3a76400008c611f0e565b829061312b565b9050612d11565b612d0e612ceb670de0b6b3a76400008c613196565b90505b8b811015612d2a57600080965096505050505050612d38565b8b9003955060019450505050505b97509795505050505050565b6000806000612d5689898888886131ab565b9050612d6686612c9c898b613ed2565b975087811015612d7d576000809250925050612dfc565b878103612d8b818688613039565b9050670de0b6b3a76400008110612db857612db1612ceb670de0b6b3a764000089613196565b9050612dd0565b612dcd612ceb670de0b6b3a764000089611f0e565b90505b612dda8186613196565b9050808a1015612df257600080935093505050612dfc565b8903925060019150505b965096945050505050565b6000806000612e1988888888886131ab565b90506000612e44670de0b6b3a7640000612e338888611f0e565b612e3d9190613ed2565b8390613196565b9050670de0b6b3a76400008110612e7157612e6a612ceb670de0b6b3a764000089613196565b9050612e89565b612e86612ceb670de0b6b3a764000089611f0e565b90505b80881015612e9f57600080935093505050612ea9565b8703925060019150505b9550959350505050565b6000806000612ec589898888886131ab565b905086881015612edc576000809250925050612dfc565b9686900396612eeb888761312b565b975087811015612f02576000809250925050612dfc565b878103612f10818688613039565b9050670de0b6b3a76400008110612f3d57612f36612ceb670de0b6b3a764000089613196565b9050612f55565b612f52612ceb670de0b6b3a764000089611f0e565b90505b612f5f8186613196565b905089811015612f7757600080935093505050612dfc565b9890980398600198509650505050505050565b6000806000612f9c88888888886130fc565b90506000612fc0670de0b6b3a7640000612fb68888613196565b6125039190613ed2565b9050670de0b6b3a76400008110612fed57612fe6612ceb670de0b6b3a764000089611f0e565b9050613005565b613002612ceb670de0b6b3a764000089613196565b90505b61300f8186611f0e565b90508881101561302757600080935093505050612ea9565b97909703976001975095505050505050565b600082600019048411830215820261305057600080fd5b50910281810615159190040190565b6060814710156130845760405163cd78605960e01b815230600482015260240161135d565b600080856001600160a01b031684866040516130a09190614142565b60006040518083038185875af1925050503d80600081146130dd576040519150601f19603f3d011682016040523d82523d6000602084013e6130e2565b606091505b50915091506130f28683836131d0565b9695505050505050565b6000613108858561312b565b61312161311986612c9c868b611ef9565b859085612597565b6130f29190613ed2565b6000816000036131445750670de0b6b3a7640000610885565b8260000361315457506000610885565b600061315f836125ea565b9050600061317461316f866125ea565b61322c565b905081810261318b670de0b6b3a76400008261415e565b90506130f281613452565b600061083383670de0b6b3a764000084613039565b60006131b7858561312b565b6131216131c886612c9c868b612bde565b859085613039565b6060826131e5576131e0826135e7565b610833565b81511580156131fc57506001600160a01b0384163b155b1561322557604051639996b31560e01b81526001600160a01b038516600482015260240161135d565b5080610833565b600080821361324e5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132d19084901c6125ea565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361346d57506000919050565b680755bf798b4a1bf1e58212613496576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906130f274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6125ea565b8051156135f75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016136db6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156136f257600080fd5b5035919050565b60005b838110156137145781810151838201526020016136fc565b50506000910152565b600081518084526137358160208601602086016136f9565b601f01601f19169290920160200192915050565b602081526000610833602083018461371d565b6001600160a01b038116811461071f57600080fd5b60006020828403121561378357600080fd5b81356108338161375c565b801515811461071f57600080fd5b6000602082840312156137ae57600080fd5b81356108338161378e565b60008060008060008060008060006101208a8c0312156137d857600080fd5b8935985060208a0135975060408a01356137f18161375c565b965060608a01356138018161375c565b955060808a01356138118161378e565b945060a08a0135935060c08a013560ff8116811461382e57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261386057600080fd5b50813567ffffffffffffffff81111561387857600080fd5b6020830191508360208260051b8501011115612c2b57600080fd5b600080600080600080608087890312156138ac57600080fd5b86356138b78161375c565b955060208701356138c78161375c565b9450604087013567ffffffffffffffff808211156138e457600080fd5b6138f08a838b0161384e565b9096509450606089013591508082111561390957600080fd5b5061391689828a0161384e565b979a9699509497509295939492505050565b6000806000806080858703121561393e57600080fd5b8435935060208501356139508161375c565b925060408501356139608161375c565b9396929550929360600135925050565b60008060006060848603121561398557600080fd5b8335925060208401356139978161375c565b915060408401356139a78161375c565b809150509250925092565b600080604083850312156139c557600080fd5b8235915060208301356139d78161375c565b809150509250929050565b6000602082840312156139f457600080fd5b813567ffffffffffffffff811115613a0b57600080fd5b82016060818503121561083357600080fd5b60008060008060808587031215613a3357600080fd5b843593506020850135613a458161375c565b9250604085013591506060850135613a5c8161375c565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613b1b57600080fd5b8235613b268161375c565b915060208301356139d78161378e565b600080600060608486031215613b4b57600080fd5b833592506020840135613b5d8161375c565b929592945050506040919091013590565b81516001600160a01b0316815261022081016020830151613b9a60208401826001600160a01b03169052565b506040830151613bb560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613c1b828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613c9557600080fd5b823567ffffffffffffffff811115613cac57600080fd5b613cb88582860161384e565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613cfc57835183529284019291840191600101613ce0565b50909695505050505050565b81516001600160801b0316815261018081016020830151613d3460208401826001600160801b03169052565b506040830151613d4f60408401826001600160801b03169052565b506060830151613d6a60608401826001600160801b03169052565b506080830151613d7f6080840182600f0b9052565b5060a0830151613d9a60a08401826001600160801b03169052565b5060c0830151613db560c08401826001600160801b03169052565b5060e0830151613dd060e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613c7a565b600080600080600060a08688031215613e3157600080fd5b853594506020860135613e438161375c565b93506040860135613e538161375c565b9250606086013591506080860135613e6a8161375c565b809150509295509295909350565b60008060408385031215613e8b57600080fd5b8235613e968161375c565b915060208301356139d78161375c565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561088557610885613ebc565b8181038181111561088557610885613ebc565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613f508160118501602087016136f9565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613f8a8160128501602087016136f9565b9190910160120192915050565b600060208284031215613fa957600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613fdb8160108501602087016136f9565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613f508160118501602087016136f9565b8181036000831280158383131683831282161715610f7057610f70613ebc565b634e487b7160e01b600052601260045260246000fd5b60008261405957614059614034565b500690565b60006001820161407057614070613ebc565b5060010190565b60008261408657614086614034565b500490565b6000808335601e198436030181126140a257600080fd5b83018035915067ffffffffffffffff8211156140bd57600080fd5b602001915036819003821315612c2b57600080fd5b808202811582820484141761088557610885613ebc565b8082018281126000831280158216821582161715613c7a57613c7a613ebc565b60006020828403121561411b57600080fd5b81516108338161378e565b6000600160ff1b820161413b5761413b613ebc565b5060000390565b600082516141548184602087016136f9565b9190910192915050565b60008261416d5761416d614034565b600160ff1b82146000198414161561418757614187613ebc565b50059056fea264697066735822122011c3b55ca8f830abdbddc05329c0982557b3041aa6999e459c6804c2a4a0ae5364736f6c63430008140033',
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
