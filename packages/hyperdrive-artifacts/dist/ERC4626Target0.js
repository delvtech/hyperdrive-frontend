export const ERC4626Target0 = {
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
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004416380380620044168339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614023620003f360003960008181610b440152611afd015260008181610b1d0152611ac0015260008181610bbe0152611cb5015260008181610b980152611c8f015260008181610b6e0152611c6901526000610cee01526000610cc901526000610ca401526000610c81015260008181610c310152611cdb015260008181610be401528181610e6f0152612370015260008181610c0a015261263e01526000818161054701528181610af1015281816120d4015281816122b1015281816125250152818161258b015261261001526000818161064f01528181610acc0152610e1601526140236000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637180c8ca1161011a578063becee9c3116100ad578063d81657431161007c578063d816574314610470578063e44808bc14610485578063e4af29d114610498578063e985e9c5146104ab578063fba56008146104be57600080fd5b8063becee9c31461042d578063c55dae631461044d578063c69e16ad14610455578063cf210e651461045d57600080fd5b8063a42dce80116100e9578063a42dce80146103df578063ab033ea9146103f2578063b0d9658014610405578063bd85b0391461041a57600080fd5b80637180c8ca146103935780637ecebe00146103a65780639cd241af146103b9578063a22cb465146103cc57600080fd5b806321ff32a91161019257806346fbf68e1161016157806346fbf68e146103355780634e41a1fb146103585780634ed2d6ac1461036b57806360246c881461037e57600080fd5b806321ff32a9146102d4578063313ce567146102f55780633656eec21461030f5780633e691db91461032257600080fd5b806314e5f07b116101ce57806314e5f07b1461027057806317fad7fc146102835780631c0f12b61461029657806320fc4881146102a957600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d5780630a4e149314610250575b600080fd5b61021261020d36600461351b565b6104ed565b60405161021f9190613584565b60405180910390f35b61023b6102363660046135ac565b610524565b005b61023b61024b3660046135d7565b610530565b610258610539565b6040516001600160a01b03909116815260200161021f565b61023b61027e366004613603565b61057c565b61023b6102913660046136d7565b610598565b61023b6102a436600461376c565b6105ae565b6102bc6102b736600461351b565b6105c1565b60405190516001600160801b0316815260200161021f565b6102e76102e23660046137b4565b610602565b60405190815260200161021f565b6102fd610648565b60405160ff909116815260200161021f565b6102e761031d3660046137f6565b6106e3565b6102e7610330366004613826565b61071c565b6103486103433660046135ac565b610727565b604051901515815260200161021f565b61021261036636600461351b565b61075d565b61023b610379366004613861565b61076b565b6103866107b9565b60405161021f91906138ab565b61023b6103a136600461394c565b6109e6565b6102e76103b43660046135ac565b6109f4565b61023b6103c736600461397a565b610a20565b61023b6103da36600461394c565b610a31565b61023b6103ed3660046135ac565b610a9d565b61023b6104003660046135ac565b610aa6565b61040d610aaf565b60405161021f91906139b2565b6102e761042836600461351b565b610d2b565b61044061043b366004613ac6565b610d4d565b60405161021f9190613b08565b610258610e08565b6102e7610e48565b6102e761046b36600461351b565b610e62565b610478610eab565b60405161021f9190613b4c565b61023b610493366004613c5d565b610fb7565b61023b6104a63660046135ac565b610fff565b6103486104b9366004613cbc565b611008565b6104c661104c565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b606061051f6104fb836110ab565b60405160200161050b9190613584565b6040516020818303038152906040526111d3565b919050565b61052d816111f7565b50565b61052d8161136d565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b90565b61058d8989898989898989896113f0565b505050505050505050565b6105a68686868686866115e7565b505050505050565b6105bb848484843361169b565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610641910161050b565b9392505050565b60006105797f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cf9190613cea565b6040805160ff90921660208301520161050b565b6000828152600d602090815260408083206001600160a01b0385168452825280832054815192830152610716910161050b565b92915050565b60006107168261185c565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb83611984565b8361077581611a82565b6001600160a01b0316336001600160a01b0316146107a657604051632aab8bd360e01b815260040160405180910390fd5b6107b285858585611b3f565b5050505050565b610832604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061083c611bac565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108a79190613d33565b6108b19190613d46565b905060008083116108c35760006108de565b6108de836108d86108d386611bc4565b611d5a565b90611d8a565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109b2576109ad8486611d9f565b6109b5565b60005b81526002546001600160801b03166020918201526040519192506109df9161050b918491016138ab565b5050505090565b6109f08282611db4565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b610a2c83838333611b3f565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611e3d565b61052d81611eb1565b610ab761344b565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105799261050b9291016139b2565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610d6a57610d6a613d59565b604051908082528060200260200182016040528015610d93578160200160208202803683370190505b50905060005b83811015610dec576000858583818110610db557610db5613d6f565b90506020020135905060008154905080848481518110610dd757610dd7613d6f565b60209081029190910101525050600101610d99565b50610e018160405160200161050b9190613b08565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b6000610579600b5460405160200161050b91815260200190565b600061051f610e99610e947f000000000000000000000000000000000000000000000000000000000000000085613d33565b611f25565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610579600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fc181611a82565b6001600160a01b0316336001600160a01b031614610ff257604051632aab8bd360e01b815260040160405180910390fd5b6105a6868686868661169b565b61052d81611f69565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610716910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105799060600161050b565b606060f882901c6001600160f81b03831660006110c782611fdd565b905060008360038111156110dd576110dd613d07565b0361110f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111cb565b600183600381111561112357611123613d07565b0361114f57806040516020016111399190613d85565b60405160208183030381529060405293506111cb565b600283600381111561116357611163613d07565b0361117957806040516020016111399190613dbe565b600383600381111561118d5761118d613d07565b036111cb576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111ee9190613584565b60405180910390fd5b6111ff612092565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156112375750336001600160a01b03821614155b801561124e5750600a546001600160a01b03163314155b1561126b576040516282b42960e81b815260040160405180910390fd5b60006112756120bc565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e39190613df8565b90506112f96001600160a01b0385168483612147565b816113026120bc565b14611320576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061052d6001600055565b336000908152600c602052604090205460ff1661139c576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113e590831515815260200190565b60405180910390a150565b834211156114115760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114385760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611526573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461156457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061160457506001600160a01b038516155b156116225760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116425760405163174861a760e31b815260040160405180910390fd5b60005b838110156116925761168a85858381811061166257611662613d6f565b90506020020135888886868681811061167d5761167d613d6f565b905060200201353361169b565b600101611645565b50505050505050565b6001600160a01b03841615806116b857506001600160a01b038316155b156116d65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461179a576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff1661179a5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117985760008681526010602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611792908490613d46565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117cc908490613d46565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611803908490613d33565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611866612092565b61186f82612199565b6008546001600160a01b03168061188960208501856135ac565b6001600160a01b0316146118b057604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118d95750336001600160a01b03821614155b80156118f05750600a546001600160a01b03163314155b1561190d576040516282b42960e81b815260040160405180910390fd5b6000611917611bac565b600b8054600090915590915061192e8183876121cf565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611966868589612269565b60405190815260200160405180910390a250505061051f6001600055565b606060f882901c6001600160f81b03831660006119a082611fdd565b905060008360038111156119b6576119b6613d07565b036119e8576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111cb565b60018360038111156119fc576119fc613d07565b03611a1257806040516020016111399190613e11565b6002836003811115611a2657611a26613d07565b03611a3c57806040516020016111399190613e49565b6003836003811115611a5057611a50613d07565b036111cb57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bbf670de0b6b3a7640000612298565b905090565b611c286040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d209116612325565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d5292900416612325565b905292915050565b6000806000611d688461239b565b9150915080610e0157604051635516328b60e11b815260040160405180910390fd5b60006106418383670de0b6b3a7640000612428565b600061064183670de0b6b3a764000084612428565b600a546001600160a01b03163314611dde576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e67576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611edb576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f4d600e6000611f39600286612446565b81526020019081526020016000205461247b565b611f5f600e6000611f39600187612446565b6107169190613e75565b600a546001600160a01b03163314611f93576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561208457612018600a86613eab565b612023906030613d33565b60f81b8260016120338487613d46565b61203d9190613d46565b8151811061204d5761204d613d6f565b60200101906001600160f81b031916908160001a9053508061206e81613ebf565b915061207d9050600a86613ed8565b9450612007565b918290030190815292915050565b6002600054036120b557604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612123573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bbf9190613df8565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a2c9084906124a9565b60006121a860208301836135ac565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121dc8585611d8a565b90506121e78161250c565b9450846000036121fb576000915050610641565b61220b60408401602085016135d7565b1561223a576122338561222160208601866135ac565b61222e6040870187613eec565b61255c565b9150612261565b61225d8561224b60208601866135ac565b6122586040870187613eec565b612603565b8491505b509392505050565b600061227b60408301602084016135d7565b15612287575082610641565b6122918484611d8a565b9050610641565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015612301573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107169190613df8565b600080670de0b6b3a7640000612339612637565b6123439190613f33565b905080831161235357600061235d565b61235d8184613d46565b9150610641612394670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f33565b8390611d9f565b60008060008060006123ac8661266d565b91509150806123c357506000958695509350505050565b6123d08660a0015161247b565b6123d9876129a7565b836123e7896000015161247b565b6123f19190613f4a565b6123fb9190613f4a565b6124059190613e75565b92505050600081121561241e5750600093849350915050565b9360019350915050565b600082600019048411830215820261243f57600080fd5b5091020490565b60006001600160f81b038211156124705760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124a55760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124be6001600160a01b03841683612a0b565b905080516000141580156124e35750808060200190518101906124e19190613f6a565b155b15610a2c57604051635274afe760e01b81526001600160a01b03841660048201526024016111ee565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024016122e4565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156125d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fa9190613df8565b95945050505050565b6105bb6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612147565b60006126637f000000000000000000000000000000000000000000000000000000000000000042613eab565b611bbf9042613d46565b6000806000612697612692856101600151866101400151611d8a90919063ffffffff16565b61247b565b6126b7612692866101200151876101000151612a1990919063ffffffff16565b6126c19190613e75565b90506000806126d886600001518760200151612a2e565b91509150806126ef57506000958695509350505050565b600083131561283f576000839050600061273d886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061272e9190613d46565b8d606001518e60800151612a6d565b9350905082612756575060009788975095505050505050565b8181106127f4576000612790858a60400151858c60e00151670de0b6b3a76400006127819190613d46565b8d606001518e60800151612b7f565b94509050831580156127a557508860c0015183105b156127bc5750600098600198509650505050505050565b836127d257506000988998509650505050505050565b6127db8161247b565b6127e490613f87565b9960019950975050505050505050565b600088602001511261282b576128138860a00151856126929190613d46565b61281c90613f87565b98600198509650505050505050565b60a088015188516128139161269291613d46565b600083121561299857600061285384613f87565b905060006128878489604001518a60e00151670de0b6b3a76400006128789190613d46565b8b606001518c60800151612c42565b93509050826128a0575060009788975095505050505050565b8181106129255760006128da858a60400151858c60e00151670de0b6b3a76400006128cb9190613d46565b8d606001518e60800151612cee565b94509050831580156128ef57508860c0015183105b156129065750600098600198509650505050505050565b8361291c57506000988998509650505050505050565b6127e48161247b565b6000612957858a604001518b60e00151670de0b6b3a76400006129489190613d46565b8c606001518d60800151612dc5565b945090508361297157506000988998509650505050505050565b6127e461298e8a6060015184866129889190613d46565b90611d9f565b6126929083613d33565b50600095600195509350505050565b60006129da612692836101200151670de0b6b3a76400006129c89190613d46565b60608501516101008601519190612e74565b611f5f612692846101600151670de0b6b3a76400006129f99190613d46565b60608601516101408701519190612428565b606061064183836000612e9a565b60006106418383670de0b6b3a7640000612e74565b600080600083612a3d8661247b565b612a479190613e75565b90506000811215612a5f576000809250925050612a66565b9150600190505b9250929050565b6000806000881215612a8f57612a8288613f87565b612a8c9087613d33565b95505b600080612a9c8b8b612a2e565b9150915080612ab357600080935093505050612b73565b6000612ac2838b8a8a8a612f37565b90506000612ae5612add8a612ad78a8e612a19565b90612f66565b899089612e74565b905080821015612aff576000809550955050505050612b73565b808203670de0b6b3a76400008110612b3457612b2d612b26670de0b6b3a76400008c611d9f565b8290612f66565b9050612b4c565b612b49612b26670de0b6b3a76400008c612fd1565b90505b8b811015612b6557600080965096505050505050612b73565b8b9003955060019450505050505b97509795505050505050565b6000806000612b918989888888612fe6565b9050612ba186612ad7898b613d33565b975087811015612bb8576000809250925050612c37565b878103612bc6818688612e74565b9050670de0b6b3a76400008110612bf357612bec612b26670de0b6b3a764000089612fd1565b9050612c0b565b612c08612b26670de0b6b3a764000089611d9f565b90505b612c158186612fd1565b9050808a1015612c2d57600080935093505050612c37565b8903925060019150505b965096945050505050565b6000806000612c548888888888612fe6565b90506000612c7f670de0b6b3a7640000612c6e8888611d9f565b612c789190613d33565b8390612fd1565b9050670de0b6b3a76400008110612cac57612ca5612b26670de0b6b3a764000089612fd1565b9050612cc4565b612cc1612b26670de0b6b3a764000089611d9f565b90505b80881015612cda57600080935093505050612ce4565b8703925060019150505b9550959350505050565b6000806000612d008989888888612fe6565b905086881015612d17576000809250925050612c37565b9686900396612d268887612f66565b975087811015612d3d576000809250925050612c37565b878103612d4b818688612e74565b9050670de0b6b3a76400008110612d7857612d71612b26670de0b6b3a764000089612fd1565b9050612d90565b612d8d612b26670de0b6b3a764000089611d9f565b90505b612d9a8186612fd1565b905089811015612db257600080935093505050612c37565b9890980398600198509650505050505050565b6000806000612dd78888888888612f37565b90506000612dfb670de0b6b3a7640000612df18888612fd1565b6123949190613d33565b9050670de0b6b3a76400008110612e2857612e21612b26670de0b6b3a764000089611d9f565b9050612e40565b612e3d612b26670de0b6b3a764000089612fd1565b90505b612e4a8186611d9f565b905088811015612e6257600080935093505050612ce4565b97909703976001975095505050505050565b6000826000190484118302158202612e8b57600080fd5b50910281810615159190040190565b606081471015612ebf5760405163cd78605960e01b81523060048201526024016111ee565b600080856001600160a01b03168486604051612edb9190613fa3565b60006040518083038185875af1925050503d8060008114612f18576040519150601f19603f3d011682016040523d82523d6000602084013e612f1d565b606091505b5091509150612f2d86838361300b565b9695505050505050565b6000612f438585612f66565b612f5c612f5486612ad7868b611d8a565b859085612428565b612f2d9190613d33565b600081600003612f7f5750670de0b6b3a7640000610716565b82600003612f8f57506000610716565b6000612f9a8361247b565b90506000612faf612faa8661247b565b613067565b9050818102612fc6670de0b6b3a764000082613fbf565b9050612f2d8161328d565b600061064183670de0b6b3a764000084612e74565b6000612ff28585612f66565b612f5c61300386612ad7868b612a19565b859085612e74565b6060826130205761301b82613422565b610641565b815115801561303757506001600160a01b0384163b155b1561306057604051639996b31560e01b81526001600160a01b03851660048201526024016111ee565b5080610641565b60008082136130895760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061310c9084901c61247b565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136132a857506000919050565b680755bf798b4a1bf1e582126132d1576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f2d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61247b565b8051156134325780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016135166040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561352d57600080fd5b5035919050565b60005b8381101561354f578181015183820152602001613537565b50506000910152565b60008151808452613570816020860160208601613534565b601f01601f19169290920160200192915050565b6020815260006106416020830184613558565b6001600160a01b038116811461052d57600080fd5b6000602082840312156135be57600080fd5b813561064181613597565b801515811461052d57600080fd5b6000602082840312156135e957600080fd5b8135610641816135c9565b60ff8116811461052d57600080fd5b60008060008060008060008060006101208a8c03121561362257600080fd5b8935985060208a0135975060408a013561363b81613597565b965060608a013561364b81613597565b955060808a013561365b816135c9565b945060a08a0135935060c08a0135613672816135f4565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126136a457600080fd5b50813567ffffffffffffffff8111156136bc57600080fd5b6020830191508360208260051b8501011115612a6657600080fd5b600080600080600080608087890312156136f057600080fd5b86356136fb81613597565b9550602087013561370b81613597565b9450604087013567ffffffffffffffff8082111561372857600080fd5b6137348a838b01613692565b9096509450606089013591508082111561374d57600080fd5b5061375a89828a01613692565b979a9699509497509295939492505050565b6000806000806080858703121561378257600080fd5b84359350602085013561379481613597565b925060408501356137a481613597565b9396929550929360600135925050565b6000806000606084860312156137c957600080fd5b8335925060208401356137db81613597565b915060408401356137eb81613597565b809150509250925092565b6000806040838503121561380957600080fd5b82359150602083013561381b81613597565b809150509250929050565b60006020828403121561383857600080fd5b813567ffffffffffffffff81111561384f57600080fd5b82016060818503121561064157600080fd5b6000806000806080858703121561387757600080fd5b84359350602085013561388981613597565b92506040850135915060608501356138a081613597565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561395f57600080fd5b823561396a81613597565b9150602083013561381b816135c9565b60008060006060848603121561398f57600080fd5b8335925060208401356139a181613597565b929592945050506040919091013590565b81516001600160a01b03168152610220810160208301516139de60208401826001600160a01b03169052565b5060408301516139f960408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613a5f828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613ad957600080fd5b823567ffffffffffffffff811115613af057600080fd5b613afc85828601613692565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613b4057835183529284019291840191600101613b24565b50909695505050505050565b81516001600160801b0316815261018081016020830151613b7860208401826001600160801b03169052565b506040830151613b9360408401826001600160801b03169052565b506060830151613bae60608401826001600160801b03169052565b506080830151613bc36080840182600f0b9052565b5060a0830151613bde60a08401826001600160801b03169052565b5060c0830151613bf960c08401826001600160801b03169052565b5060e0830151613c1460e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613abe565b600080600080600060a08688031215613c7557600080fd5b853594506020860135613c8781613597565b93506040860135613c9781613597565b9250606086013591506080860135613cae81613597565b809150509295509295909350565b60008060408385031215613ccf57600080fd5b8235613cda81613597565b9150602083013561381b81613597565b600060208284031215613cfc57600080fd5b8151610641816135f4565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561071657610716613d1d565b8181038181111561071657610716613d1d565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613db1816011850160208701613534565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613deb816012850160208701613534565b9190910160120192915050565b600060208284031215613e0a57600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613e3c816010850160208701613534565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613db1816011850160208701613534565b8181036000831280158383131683831282161715610e0157610e01613d1d565b634e487b7160e01b600052601260045260246000fd5b600082613eba57613eba613e95565b500690565b600060018201613ed157613ed1613d1d565b5060010190565b600082613ee757613ee7613e95565b500490565b6000808335601e19843603018112613f0357600080fd5b83018035915067ffffffffffffffff821115613f1e57600080fd5b602001915036819003821315612a6657600080fd5b808202811582820484141761071657610716613d1d565b8082018281126000831280158216821582161715613abe57613abe613d1d565b600060208284031215613f7c57600080fd5b8151610641816135c9565b6000600160ff1b8201613f9c57613f9c613d1d565b5060000390565b60008251613fb5818460208701613534565b9190910192915050565b600082613fce57613fce613e95565b600160ff1b821460001984141615613fe857613fe8613d1d565b50059056fea264697066735822122046389dc0e77800202751cf0d5803496b478d265f49fc141019c996a69564ae2664736f6c63430008140033',
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
