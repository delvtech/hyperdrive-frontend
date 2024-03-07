export const ERC4626Target0 = {
    "abi": [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                },
                {
                    "internalType": "contract IERC4626",
                    "name": "__vault",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "BatchInputLengthMismatch",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpiredDeadline",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                    "name": "reason",
                    "type": "uint8"
                }
            ],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidERC20Bridge",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidFeeDestination",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidPresentValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidSignature",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidTimestamp",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RestrictedZeroAddress",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "ReturnData",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "SweepFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsupportedToken",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "baseToken",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "ids",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "values",
                    "type": "uint256[]"
                }
            ],
            "name": "batchTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "collectGovernanceFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "proceeds",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_checkpointTime",
                    "type": "uint256"
                }
            ],
            "name": "getCheckpoint",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint128",
                            "name": "vaultSharePrice",
                            "type": "uint128"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Checkpoint",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_checkpointTime",
                    "type": "uint256"
                }
            ],
            "name": "getCheckpointExposure",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMarketState",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint128",
                            "name": "shareReserves",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "bondReserves",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "longExposure",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "longsOutstanding",
                            "type": "uint128"
                        },
                        {
                            "internalType": "int128",
                            "name": "shareAdjustment",
                            "type": "int128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "shortsOutstanding",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "longAverageMaturityTime",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "shortAverageMaturityTime",
                            "type": "uint128"
                        },
                        {
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint112",
                            "name": "zombieBaseProceeds",
                            "type": "uint112"
                        },
                        {
                            "internalType": "uint128",
                            "name": "zombieShareReserves",
                            "type": "uint128"
                        }
                    ],
                    "internalType": "struct IHyperdrive.MarketState",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolConfig",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "shareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "shareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "zombieBaseProceeds",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "zombieShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longAverageMaturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortAverageMaturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesReadyToWithdraw",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesProceeds",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longExposure",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolInfo",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUncollectedGovernanceFees",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getWithdrawPool",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint128",
                            "name": "readyToWithdraw",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "proceeds",
                            "type": "uint128"
                        }
                    ],
                    "internalType": "struct IHyperdrive.WithdrawPool",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "isPauser",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_slots",
                    "type": "uint256[]"
                }
            ],
            "name": "load",
            "outputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "",
                    "type": "bytes32[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "nonces",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                }
            ],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "perTokenApprovals",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "domainSeparator",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "permitTypeHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permitForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "setApproval",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "setApprovalBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                }
            ],
            "name": "setGovernance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "who",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "setPauser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "_target",
                    "type": "address"
                }
            ],
            "name": "sweep",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "transferFromBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "vault",
            "outputs": [
                {
                    "internalType": "contract IERC4626",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6102606040523480156200001257600080fd5b50604051620044b6380380620044b68339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161409a6200041c6000396000818161058b0152818161068b015281816108430152818161141b01528181611ea6015281816123ed01528181612493015261255d015260008181610e870152611dd7015260008181610e580152611d9a0152600081816104f30152818161077501528181610fb501528181611af701528181611b710152611bed015260008181610ef9015261200f015260008181610ed30152611fe9015260008181610ead0152611fc3015260006110610152600061103b0152600061101501526000610fef015260008181610f6b0152612035015260008181610f1f015281816111da015261260a015260008181610f450152612758015260008181610550015281816105f5015281816107b1015281816109b601528181610e290152611181015261409a6000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c80637180c8ca1161010f578063c55dae63116100a2578063e44808bc11610071578063e44808bc14610454578063e985e9c514610467578063fba560081461047a578063fbfa77cf146104a957600080fd5b8063c55dae6314610404578063c69e16ad14610424578063cf210e651461042c578063d81657431461043f57600080fd5b8063ab033ea9116100de578063ab033ea9146103a9578063b0d96580146103bc578063bd85b039146103d1578063becee9c3146103e457600080fd5b80637180c8ca1461035d5780637ecebe00146103705780639cd241af14610383578063a22cb4651461039657600080fd5b806321ff32a91161018757806346fbf68e1161015657806346fbf68e146102ff5780634e41a1fb146103225780634ed2d6ac1461033557806360246c881461034857600080fd5b806321ff32a91461029e578063313ce567146102bf5780633656eec2146102d95780633e691db9146102ec57600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f73660046135e1565b6104b1565b604051610209919061364a565b60405180910390f35b610225610220366004613672565b6104e8565b005b61022561023536600461369d565b6108dd565b6102256102483660046136c9565b6108e9565b61022561025b3660046137a4565b610905565b61022561026e366004613839565b61091b565b6102866102813660046135e1565b610928565b60405190516001600160801b03168152602001610209565b6102b16102ac366004613881565b610969565b604051908152602001610209565b6102c76109af565b60405160ff9091168152602001610209565b6102b16102e73660046138c3565b610a4d565b6102b16102fa3660046138f3565b610a86565b61031261030d366004613672565b610a91565b6040519015158152602001610209565b6101fc6103303660046135e1565b610ac7565b61022561034336600461392e565b610ad5565b610350610b23565b6040516102099190613978565b61022561036b366004613a19565b610d50565b6102b161037e366004613672565b610d5e565b610225610391366004613a47565b610d8a565b6102256103a4366004613a19565b610d9b565b6102256103b7366004613672565b610e07565b6103c4610e10565b6040516102099190613a7f565b6102b16103df3660046135e1565b611096565b6103f76103f2366004613b5c565b6110b8565b6040516102099190613b9e565b61040c611173565b6040516001600160a01b039091168152602001610209565b6102b16111b3565b6102b161043a3660046135e1565b6111cd565b610447611216565b6040516102099190613be2565b610225610462366004613cf3565b611322565b610312610475366004613d52565b61136a565b6104826113ae565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b61040c61140d565b60606104e36104bf8361144d565b6040516020016104cf919061364a565b604051602081830303815290604052611575565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b031614806105bf57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316145b156105dd5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190613d80565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190613d80565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015610740573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107649190613d80565b905061079a6001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000083611599565b6040516370a0823160e01b815230600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108249190613d80565b1415806108b957506040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b69190613d80565b14155b156108d7576040516313dd85ff60e31b815260040160405180910390fd5b50505050565b6108e6816115eb565b50565b6108fa89898989898989898961166e565b505050505050505050565b610913868686868686611865565b505050505050565b6108d78484848433611919565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526109a891016104cf565b9392505050565b6000610a4a7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a369190613d99565b6040805160ff9092166020830152016104cf565b90565b6000828152600b602090815260408083206001600160a01b0385168452825280832054815192830152610a8091016104cf565b92915050565b6000610a8082611ada565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611c5e565b83610adf81611d5c565b6001600160a01b0316336001600160a01b031614610b1057604051632aab8bd360e01b815260040160405180910390fd5b610b1c85858585611e19565b5050505050565b610b9c604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610ba6611e86565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610c119190613de2565b610c1b9190613df5565b90506000808311610c2d576000610c48565b610c4883610c42610c3d86611f1e565b6120b4565b906120e4565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610d1c57610d1784866120f9565b610d1f565b60005b81526002546001600160801b0316602091820152604051919250610d49916104cf91849101613978565b5050505090565b610d5a828261210e565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b610d9683838333611e19565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108e681612197565b610e18613531565b610a4a6040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf9190613a7f565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff8111156110d5576110d5613e08565b6040519080825280602002602001820160405280156110fe578160200160208202803683370190505b50905060005b8381101561115757600085858381811061112057611120613e1e565b9050602002013590506000815490508084848151811061114257611142613e1e565b60209081029190910101525050600101611104565b5061116c816040516020016104cf9190613b9e565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b6000610a4a6009546040516020016104cf91815260200190565b60006104e36112046111ff7f000000000000000000000000000000000000000000000000000000000000000085613de2565b61220b565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610a4a60016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461132c81611d5c565b6001600160a01b0316336001600160a01b03161461135d57604051632aab8bd360e01b815260040160405180910390fd5b6109138686868686611919565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610a8091016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610a4a906060016104cf565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b606060f882901c6001600160f81b03831660006114698261224f565b9050600083600381111561147f5761147f613db6565b036114b1576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061156d565b60018360038111156114c5576114c5613db6565b036114f157806040516020016114db9190613e34565b604051602081830303815290604052935061156d565b600283600381111561150557611505613db6565b0361151b57806040516020016114db9190613e6d565b600383600381111561152f5761152f613db6565b0361156d576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b8152600401611590919061364a565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d96908490612304565b336000908152600a602052604090205460ff1661161a576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061166390831515815260200190565b60405180910390a150565b8342111561168f5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166116b65760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117a4573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e257604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600f6020908152604080832080546001019055600d8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061188257506001600160a01b038516155b156118a05760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118c05760405163174861a760e31b815260040160405180910390fd5b60005b83811015611910576119088585838181106118e0576118e0613e1e565b9050602002013588888686868181106118fb576118fb613e1e565b9050602002013533611919565b6001016118c3565b50505050505050565b6001600160a01b038416158061193657506001600160a01b038316155b156119545760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611a18576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611a18576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611a16576000868152600e602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611a10908490613df5565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611a4a908490613df5565b90915550506000858152600b602090815260408083206001600160a01b038716845290915281208054849290611a81908490613de2565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611ae4612367565b611aed82612391565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016611b246020840184613672565b6001600160a01b031614611b4b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff16158015611b945750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015611bab57506008546001600160a01b03163314155b15611bc8576040516282b42960e81b815260040160405180910390fd5b6000611bd2611e86565b600980546000909155909150611be98183866123c7565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611c41858588612590565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611c7a8261224f565b90506000836003811115611c9057611c90613db6565b03611cc2576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061156d565b6001836003811115611cd657611cd6613db6565b03611cec57806040516020016114db9190613ea7565b6002836003811115611d0057611d00613db6565b03611d1657806040516020016114db9190613edf565b6003836003811115611d2a57611d2a613db6565b0361156d57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611ef5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f199190613d80565b905090565b611f826040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600254048216610100820152600454909161012083019161207a91166125bf565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926120ac929004166125bf565b905292915050565b60008060006120c284612635565b915091508061116c57604051635516328b60e11b815260040160405180910390fd5b60006109a88383670de0b6b3a76400006126c2565b60006109a883670de0b6b3a7640000846126c2565b6008546001600160a01b03163314612138576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6008546001600160a01b031633146121c1576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000612233600c600061221f6002866126e0565b815260200190815260200160002054612715565b612245600c600061221f6001876126e0565b610a809190613f0b565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156122f65761228a600a86613f41565b612295906030613de2565b60f81b8260016122a58487613df5565b6122af9190613df5565b815181106122bf576122bf613e1e565b60200101906001600160f81b031916908160001a905350806122e081613f55565b91506122ef9050600a86613f6e565b9450612279565b918290030190815292915050565b60006123196001600160a01b03841683612743565b9050805160001415801561233e57508080602001905181019061233c9190613f82565b155b15610d9657604051635274afe760e01b81526001600160a01b0384166004820152602401611590565b60026000540361238a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006123a06020830183613672565b6001600160a01b0316036108e65760405163f0dd15fd60e01b815260040160405180910390fd5b6000806123d485856120e4565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa15801561243c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124609190613d80565b9450846000036124745760009150506109a8565b612484604084016020850161369d565b15612543576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652866124c66020870187613672565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015612518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061253c9190613d80565b9150612588565b6125846125536020850185613672565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169087611599565b8491505b509392505050565b60006125a2604083016020840161369d565b156125ae5750826109a8565b6125b884846120e4565b90506109a8565b600080670de0b6b3a76400006125d3612751565b6125dd9190613f9f565b90508083116125ed5760006125f7565b6125f78184613df5565b91506109a861262e670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f9f565b83906120f9565b600080600080600061264686612787565b915091508061265d57506000958695509350505050565b61266a8660a00151612715565b61267387612aac565b836126818960000151612715565b61268b9190613fb6565b6126959190613fb6565b61269f9190613f0b565b9250505060008112156126b85750600093849350915050565b9360019350915050565b60008260001904841183021582026126d957600080fd5b5091020490565b60006001600160f81b0382111561270a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b0382111561273f5760405163396ea70160e11b815260040160405180910390fd5b5090565b60606109a883836000612b10565b600061277d7f000000000000000000000000000000000000000000000000000000000000000042613f41565b611f199042613df5565b60008060006127b16127ac8561016001518661014001516120e490919063ffffffff16565b612715565b6127d16127ac866101200151876101000151612bad90919063ffffffff16565b6127db9190613f0b565b905060006127f185600001518660200151612bc2565b90506000821315612944576000829050600080612842886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006128339190613df5565b8d606001518e60800151612bee565b915091508061285b575060009788975095505050505050565b8282106128f9576000612895858a60400151868c60e00151670de0b6b3a76400006128869190613df5565b8d606001518e60800151612ce7565b92509050811580156128aa57508860c0015184105b156128c15750600098600198509650505050505050565b816128d757506000988998509650505050505050565b6128e081612715565b6128e990613fd6565b9960019950975050505050505050565b6000886020015112612930576129188860a00151856127ac9190613df5565b61292190613fd6565b98600198509650505050505050565b60a08801518851612918916127ac91613df5565b6000821215612a9e57600061295883613fd6565b905060008061298d8489604001518a60e00151670de0b6b3a764000061297e9190613df5565b8b606001518c60800151612daa565b91509150806129a6575060009788975095505050505050565b828210612a2b5760006129e0858a60400151868c60e00151670de0b6b3a76400006129d19190613df5565b8d606001518e60800151612e56565b92509050811580156129f557508860c0015184105b15612a0c5750600098600198509650505050505050565b81612a2257506000988998509650505050505050565b6128e981612715565b6000612a5d858a604001518b60e00151670de0b6b3a7640000612a4e9190613df5565b8c606001518d60800151612f2d565b9250905081612a7757506000988998509650505050505050565b6128e9612a948a606001518587612a8e9190613df5565b906120f9565b6127ac9083613de2565b506000946001945092505050565b6000612adf6127ac836101200151670de0b6b3a7640000612acd9190613df5565b60608501516101008601519190612fdc565b6122456127ac846101600151670de0b6b3a7640000612afe9190613df5565b606086015161014087015191906126c2565b606081471015612b355760405163cd78605960e01b8152306004820152602401611590565b600080856001600160a01b03168486604051612b519190613ff2565b60006040518083038185875af1925050503d8060008114612b8e576040519150601f19603f3d011682016040523d82523d6000602084013e612b93565b606091505b5091509150612ba3868383613002565b9695505050505050565b60006109a88383670de0b6b3a7640000612fdc565b60008082612bcf85612715565b612bd99190613f0b565b905060008112156109a8576109a8600161305e565b6000806000881215612c1057612c0388613fd6565b612c0d9087613de2565b95505b6000612c1c8a8a612bc2565b90506000612c2d828a898989613079565b90506000612c50612c4889612c42898d612bad565b906130a8565b889088612fdc565b905080821015612c695760008094509450505050612cdb565b808203670de0b6b3a76400008110612c9e57612c97612c90670de0b6b3a76400008b6120f9565b82906130a8565b9050612cb6565b612cb3612c90670de0b6b3a76400008b613113565b90505b8a811015612cce576000809550955050505050612cdb565b8a90039450600193505050505b97509795505050505050565b6000806000612cf98989888888613128565b9050612d0986612c42898b613de2565b975087811015612d20576000809250925050612d9f565b878103612d2e818688612fdc565b9050670de0b6b3a76400008110612d5b57612d54612c90670de0b6b3a764000089613113565b9050612d73565b612d70612c90670de0b6b3a7640000896120f9565b90505b612d7d8186613113565b9050808a1015612d9557600080935093505050612d9f565b8903925060019150505b965096945050505050565b6000806000612dbc8888888888613128565b90506000612de7670de0b6b3a7640000612dd688886120f9565b612de09190613de2565b8390613113565b9050670de0b6b3a76400008110612e1457612e0d612c90670de0b6b3a764000089613113565b9050612e2c565b612e29612c90670de0b6b3a7640000896120f9565b90505b80881015612e4257600080935093505050612e4c565b8703925060019150505b9550959350505050565b6000806000612e688989888888613128565b905086881015612e7f576000809250925050612d9f565b9686900396612e8e88876130a8565b975087811015612ea5576000809250925050612d9f565b878103612eb3818688612fdc565b9050670de0b6b3a76400008110612ee057612ed9612c90670de0b6b3a764000089613113565b9050612ef8565b612ef5612c90670de0b6b3a7640000896120f9565b90505b612f028186613113565b905089811015612f1a57600080935093505050612d9f565b9890980398600198509650505050505050565b6000806000612f3f8888888888613079565b90506000612f63670de0b6b3a7640000612f598888613113565b61262e9190613de2565b9050670de0b6b3a76400008110612f9057612f89612c90670de0b6b3a7640000896120f9565b9050612fa8565b612fa5612c90670de0b6b3a764000089613113565b90505b612fb281866120f9565b905088811015612fca57600080935093505050612e4c565b97909703976001975095505050505050565b6000826000190484118302158202612ff357600080fd5b50910281810615159190040190565b606082613017576130128261314d565b6109a8565b815115801561302e57506001600160a01b0384163b155b1561305757604051639996b31560e01b81526001600160a01b0385166004820152602401611590565b50806109a8565b80604051633c06d78b60e11b8152600401611590919061400e565b600061308585856130a8565b61309e61309686612c42868b6120e4565b8590856126c2565b612ba39190613de2565b6000816000036130c15750670de0b6b3a7640000610a80565b826000036130d157506000610a80565b60006130dc83612715565b905060006130f16130ec86612715565b613176565b9050818102613108670de0b6b3a764000082614036565b9050612ba38161339c565b60006109a883670de0b6b3a764000084612fdc565b600061313485856130a8565b61309e61314586612c42868b612bad565b859085612fdc565b80511561315d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60008082136131985760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061321b9084901c612715565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133b757506000919050565b680755bf798b4a1bf1e582126133e0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612ba374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c612715565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016135dc6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156135f357600080fd5b5035919050565b60005b838110156136155781810151838201526020016135fd565b50506000910152565b600081518084526136368160208601602086016135fa565b601f01601f19169290920160200192915050565b6020815260006109a8602083018461361e565b6001600160a01b03811681146108e657600080fd5b60006020828403121561368457600080fd5b81356109a88161365d565b80151581146108e657600080fd5b6000602082840312156136af57600080fd5b81356109a88161368f565b60ff811681146108e657600080fd5b60008060008060008060008060006101208a8c0312156136e857600080fd5b8935985060208a0135975060408a01356137018161365d565b965060608a01356137118161365d565b955060808a01356137218161368f565b945060a08a0135935060c08a0135613738816136ba565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261376a57600080fd5b50813567ffffffffffffffff81111561378257600080fd5b6020830191508360208260051b850101111561379d57600080fd5b9250929050565b600080600080600080608087890312156137bd57600080fd5b86356137c88161365d565b955060208701356137d88161365d565b9450604087013567ffffffffffffffff808211156137f557600080fd5b6138018a838b01613758565b9096509450606089013591508082111561381a57600080fd5b5061382789828a01613758565b979a9699509497509295939492505050565b6000806000806080858703121561384f57600080fd5b8435935060208501356138618161365d565b925060408501356138718161365d565b9396929550929360600135925050565b60008060006060848603121561389657600080fd5b8335925060208401356138a88161365d565b915060408401356138b88161365d565b809150509250925092565b600080604083850312156138d657600080fd5b8235915060208301356138e88161365d565b809150509250929050565b60006020828403121561390557600080fd5b813567ffffffffffffffff81111561391c57600080fd5b8201606081850312156109a857600080fd5b6000806000806080858703121561394457600080fd5b8435935060208501356139568161365d565b925060408501359150606085013561396d8161365d565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613a2c57600080fd5b8235613a378161365d565b915060208301356138e88161368f565b600080600060608486031215613a5c57600080fd5b833592506020840135613a6e8161365d565b929592945050506040919091013590565b81516001600160a01b031681526101e081016020830151613aab60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613b0f828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b60008060208385031215613b6f57600080fd5b823567ffffffffffffffff811115613b8657600080fd5b613b9285828601613758565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613bd657835183529284019291840191600101613bba565b50909695505050505050565b81516001600160801b0316815261018081016020830151613c0e60208401826001600160801b03169052565b506040830151613c2960408401826001600160801b03169052565b506060830151613c4460608401826001600160801b03169052565b506080830151613c596080840182600f0b9052565b5060a0830151613c7460a08401826001600160801b03169052565b5060c0830151613c8f60c08401826001600160801b03169052565b5060e0830151613caa60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613b54565b600080600080600060a08688031215613d0b57600080fd5b853594506020860135613d1d8161365d565b93506040860135613d2d8161365d565b9250606086013591506080860135613d448161365d565b809150509295509295909350565b60008060408385031215613d6557600080fd5b8235613d708161365d565b915060208301356138e88161365d565b600060208284031215613d9257600080fd5b5051919050565b600060208284031215613dab57600080fd5b81516109a8816136ba565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610a8057610a80613dcc565b81810381811115610a8057610a80613dcc565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613e608160118501602087016135fa565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613e9a8160128501602087016135fa565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613ed28160108501602087016135fa565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613e608160118501602087016135fa565b818103600083128015838313168383128216171561116c5761116c613dcc565b634e487b7160e01b600052601260045260246000fd5b600082613f5057613f50613f2b565b500690565b600060018201613f6757613f67613dcc565b5060010190565b600082613f7d57613f7d613f2b565b500490565b600060208284031215613f9457600080fd5b81516109a88161368f565b8082028115828204841417610a8057610a80613dcc565b8082018281126000831280158216821582161715613b5457613b54613dcc565b6000600160ff1b8201613feb57613feb613dcc565b5060000390565b600082516140048184602087016135fa565b9190910192915050565b602081016004831061403057634e487b7160e01b600052602160045260246000fd5b91905290565b60008261404557614045613f2b565b600160ff1b82146000198414161561405f5761405f613dcc565b50059056fea2646970667358221220b2cb1898e6ba5f4a7df70b3069d2cc9d07144fd0360d0460f99d06d9c074c68264736f6c63430008140033",
        "sourceMap": "938:2588:25:-:0;;;1202:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:121;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1508:16:23;;;938:2588:25;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1376::-;1366:6;1374;1418:9;1409:7;1405:23;1448:3;1444:2;1440:12;1437:32;;;1465:1;1462;1455:12;1437:32;1488:6;1514:2;1510;1506:11;1503:31;;;1530:1;1527;1520:12;1503:31;1556:17;;:::i;:::-;1543:30;;1596:48;1634:9;1596:48;:::i;:::-;1589:5;1582:63;1677:57;1730:2;1719:9;1715:18;1677:57;:::i;:::-;1672:2;1665:5;1661:14;1654:81;1788:2;1777:9;1773:18;1767:25;1762:2;1755:5;1751:14;1744:49;1846:2;1835:9;1831:18;1825:25;1820:2;1813:5;1809:14;1802:49;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;2025:3;2014:9;2010:19;2004:26;1998:3;1991:5;1987:15;1980:51;2085:3;2074:9;2070:19;2064:26;2058:3;2051:5;2047:15;2040:51;2110:3;2166:2;2155:9;2151:18;2145:25;2140:2;2133:5;2129:14;2122:49;;2190:3;2225:57;2278:2;2267:9;2263:18;2225:57;:::i;:::-;2209:14;;;2202:81;2302:3;2337:57;2375:18;;;2337:57;:::i;:::-;2321:14;;;2314:81;2414:3;2449:62;2503:7;2483:18;;;2449:62;:::i;:::-;2444:2;2437:5;2433:14;2426:86;;2531:5;2521:15;;2555:57;2608:2;2597:9;2593:18;2555:57;:::i;:::-;2545:67;;;;1242:1376;;;;;:::o;:::-;938:2588:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101e45760003560e01c80637180c8ca1161010f578063c55dae63116100a2578063e44808bc11610071578063e44808bc14610454578063e985e9c514610467578063fba560081461047a578063fbfa77cf146104a957600080fd5b8063c55dae6314610404578063c69e16ad14610424578063cf210e651461042c578063d81657431461043f57600080fd5b8063ab033ea9116100de578063ab033ea9146103a9578063b0d96580146103bc578063bd85b039146103d1578063becee9c3146103e457600080fd5b80637180c8ca1461035d5780637ecebe00146103705780639cd241af14610383578063a22cb4651461039657600080fd5b806321ff32a91161018757806346fbf68e1161015657806346fbf68e146102ff5780634e41a1fb146103225780634ed2d6ac1461033557806360246c881461034857600080fd5b806321ff32a91461029e578063313ce567146102bf5780633656eec2146102d95780633e691db9146102ec57600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f73660046135e1565b6104b1565b604051610209919061364a565b60405180910390f35b610225610220366004613672565b6104e8565b005b61022561023536600461369d565b6108dd565b6102256102483660046136c9565b6108e9565b61022561025b3660046137a4565b610905565b61022561026e366004613839565b61091b565b6102866102813660046135e1565b610928565b60405190516001600160801b03168152602001610209565b6102b16102ac366004613881565b610969565b604051908152602001610209565b6102c76109af565b60405160ff9091168152602001610209565b6102b16102e73660046138c3565b610a4d565b6102b16102fa3660046138f3565b610a86565b61031261030d366004613672565b610a91565b6040519015158152602001610209565b6101fc6103303660046135e1565b610ac7565b61022561034336600461392e565b610ad5565b610350610b23565b6040516102099190613978565b61022561036b366004613a19565b610d50565b6102b161037e366004613672565b610d5e565b610225610391366004613a47565b610d8a565b6102256103a4366004613a19565b610d9b565b6102256103b7366004613672565b610e07565b6103c4610e10565b6040516102099190613a7f565b6102b16103df3660046135e1565b611096565b6103f76103f2366004613b5c565b6110b8565b6040516102099190613b9e565b61040c611173565b6040516001600160a01b039091168152602001610209565b6102b16111b3565b6102b161043a3660046135e1565b6111cd565b610447611216565b6040516102099190613be2565b610225610462366004613cf3565b611322565b610312610475366004613d52565b61136a565b6104826113ae565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b61040c61140d565b60606104e36104bf8361144d565b6040516020016104cf919061364a565b604051602081830303815290604052611575565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b031614806105bf57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316145b156105dd5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190613d80565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190613d80565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015610740573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107649190613d80565b905061079a6001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000083611599565b6040516370a0823160e01b815230600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108249190613d80565b1415806108b957506040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b69190613d80565b14155b156108d7576040516313dd85ff60e31b815260040160405180910390fd5b50505050565b6108e6816115eb565b50565b6108fa89898989898989898961166e565b505050505050505050565b610913868686868686611865565b505050505050565b6108d78484848433611919565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526109a891016104cf565b9392505050565b6000610a4a7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a369190613d99565b6040805160ff9092166020830152016104cf565b90565b6000828152600b602090815260408083206001600160a01b0385168452825280832054815192830152610a8091016104cf565b92915050565b6000610a8082611ada565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611c5e565b83610adf81611d5c565b6001600160a01b0316336001600160a01b031614610b1057604051632aab8bd360e01b815260040160405180910390fd5b610b1c85858585611e19565b5050505050565b610b9c604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610ba6611e86565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610c119190613de2565b610c1b9190613df5565b90506000808311610c2d576000610c48565b610c4883610c42610c3d86611f1e565b6120b4565b906120e4565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610d1c57610d1784866120f9565b610d1f565b60005b81526002546001600160801b0316602091820152604051919250610d49916104cf91849101613978565b5050505090565b610d5a828261210e565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b610d9683838333611e19565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108e681612197565b610e18613531565b610a4a6040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf9190613a7f565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff8111156110d5576110d5613e08565b6040519080825280602002602001820160405280156110fe578160200160208202803683370190505b50905060005b8381101561115757600085858381811061112057611120613e1e565b9050602002013590506000815490508084848151811061114257611142613e1e565b60209081029190910101525050600101611104565b5061116c816040516020016104cf9190613b9e565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b6000610a4a6009546040516020016104cf91815260200190565b60006104e36112046111ff7f000000000000000000000000000000000000000000000000000000000000000085613de2565b61220b565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610a4a60016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461132c81611d5c565b6001600160a01b0316336001600160a01b03161461135d57604051632aab8bd360e01b815260040160405180910390fd5b6109138686868686611919565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610a8091016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610a4a906060016104cf565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b606060f882901c6001600160f81b03831660006114698261224f565b9050600083600381111561147f5761147f613db6565b036114b1576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061156d565b60018360038111156114c5576114c5613db6565b036114f157806040516020016114db9190613e34565b604051602081830303815290604052935061156d565b600283600381111561150557611505613db6565b0361151b57806040516020016114db9190613e6d565b600383600381111561152f5761152f613db6565b0361156d576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b8152600401611590919061364a565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d96908490612304565b336000908152600a602052604090205460ff1661161a576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061166390831515815260200190565b60405180910390a150565b8342111561168f5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166116b65760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117a4573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e257604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600f6020908152604080832080546001019055600d8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061188257506001600160a01b038516155b156118a05760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118c05760405163174861a760e31b815260040160405180910390fd5b60005b83811015611910576119088585838181106118e0576118e0613e1e565b9050602002013588888686868181106118fb576118fb613e1e565b9050602002013533611919565b6001016118c3565b50505050505050565b6001600160a01b038416158061193657506001600160a01b038316155b156119545760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611a18576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611a18576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611a16576000868152600e602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611a10908490613df5565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611a4a908490613df5565b90915550506000858152600b602090815260408083206001600160a01b038716845290915281208054849290611a81908490613de2565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611ae4612367565b611aed82612391565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016611b246020840184613672565b6001600160a01b031614611b4b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff16158015611b945750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015611bab57506008546001600160a01b03163314155b15611bc8576040516282b42960e81b815260040160405180910390fd5b6000611bd2611e86565b600980546000909155909150611be98183866123c7565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611c41858588612590565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611c7a8261224f565b90506000836003811115611c9057611c90613db6565b03611cc2576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061156d565b6001836003811115611cd657611cd6613db6565b03611cec57806040516020016114db9190613ea7565b6002836003811115611d0057611d00613db6565b03611d1657806040516020016114db9190613edf565b6003836003811115611d2a57611d2a613db6565b0361156d57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611ef5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f199190613d80565b905090565b611f826040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600254048216610100820152600454909161012083019161207a91166125bf565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926120ac929004166125bf565b905292915050565b60008060006120c284612635565b915091508061116c57604051635516328b60e11b815260040160405180910390fd5b60006109a88383670de0b6b3a76400006126c2565b60006109a883670de0b6b3a7640000846126c2565b6008546001600160a01b03163314612138576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6008546001600160a01b031633146121c1576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000612233600c600061221f6002866126e0565b815260200190815260200160002054612715565b612245600c600061221f6001876126e0565b610a809190613f0b565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156122f65761228a600a86613f41565b612295906030613de2565b60f81b8260016122a58487613df5565b6122af9190613df5565b815181106122bf576122bf613e1e565b60200101906001600160f81b031916908160001a905350806122e081613f55565b91506122ef9050600a86613f6e565b9450612279565b918290030190815292915050565b60006123196001600160a01b03841683612743565b9050805160001415801561233e57508080602001905181019061233c9190613f82565b155b15610d9657604051635274afe760e01b81526001600160a01b0384166004820152602401611590565b60026000540361238a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006123a06020830183613672565b6001600160a01b0316036108e65760405163f0dd15fd60e01b815260040160405180910390fd5b6000806123d485856120e4565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa15801561243c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124609190613d80565b9450846000036124745760009150506109a8565b612484604084016020850161369d565b15612543576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652866124c66020870187613672565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015612518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061253c9190613d80565b9150612588565b6125846125536020850185613672565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169087611599565b8491505b509392505050565b60006125a2604083016020840161369d565b156125ae5750826109a8565b6125b884846120e4565b90506109a8565b600080670de0b6b3a76400006125d3612751565b6125dd9190613f9f565b90508083116125ed5760006125f7565b6125f78184613df5565b91506109a861262e670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f9f565b83906120f9565b600080600080600061264686612787565b915091508061265d57506000958695509350505050565b61266a8660a00151612715565b61267387612aac565b836126818960000151612715565b61268b9190613fb6565b6126959190613fb6565b61269f9190613f0b565b9250505060008112156126b85750600093849350915050565b9360019350915050565b60008260001904841183021582026126d957600080fd5b5091020490565b60006001600160f81b0382111561270a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b0382111561273f5760405163396ea70160e11b815260040160405180910390fd5b5090565b60606109a883836000612b10565b600061277d7f000000000000000000000000000000000000000000000000000000000000000042613f41565b611f199042613df5565b60008060006127b16127ac8561016001518661014001516120e490919063ffffffff16565b612715565b6127d16127ac866101200151876101000151612bad90919063ffffffff16565b6127db9190613f0b565b905060006127f185600001518660200151612bc2565b90506000821315612944576000829050600080612842886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006128339190613df5565b8d606001518e60800151612bee565b915091508061285b575060009788975095505050505050565b8282106128f9576000612895858a60400151868c60e00151670de0b6b3a76400006128869190613df5565b8d606001518e60800151612ce7565b92509050811580156128aa57508860c0015184105b156128c15750600098600198509650505050505050565b816128d757506000988998509650505050505050565b6128e081612715565b6128e990613fd6565b9960019950975050505050505050565b6000886020015112612930576129188860a00151856127ac9190613df5565b61292190613fd6565b98600198509650505050505050565b60a08801518851612918916127ac91613df5565b6000821215612a9e57600061295883613fd6565b905060008061298d8489604001518a60e00151670de0b6b3a764000061297e9190613df5565b8b606001518c60800151612daa565b91509150806129a6575060009788975095505050505050565b828210612a2b5760006129e0858a60400151868c60e00151670de0b6b3a76400006129d19190613df5565b8d606001518e60800151612e56565b92509050811580156129f557508860c0015184105b15612a0c5750600098600198509650505050505050565b81612a2257506000988998509650505050505050565b6128e981612715565b6000612a5d858a604001518b60e00151670de0b6b3a7640000612a4e9190613df5565b8c606001518d60800151612f2d565b9250905081612a7757506000988998509650505050505050565b6128e9612a948a606001518587612a8e9190613df5565b906120f9565b6127ac9083613de2565b506000946001945092505050565b6000612adf6127ac836101200151670de0b6b3a7640000612acd9190613df5565b60608501516101008601519190612fdc565b6122456127ac846101600151670de0b6b3a7640000612afe9190613df5565b606086015161014087015191906126c2565b606081471015612b355760405163cd78605960e01b8152306004820152602401611590565b600080856001600160a01b03168486604051612b519190613ff2565b60006040518083038185875af1925050503d8060008114612b8e576040519150601f19603f3d011682016040523d82523d6000602084013e612b93565b606091505b5091509150612ba3868383613002565b9695505050505050565b60006109a88383670de0b6b3a7640000612fdc565b60008082612bcf85612715565b612bd99190613f0b565b905060008112156109a8576109a8600161305e565b6000806000881215612c1057612c0388613fd6565b612c0d9087613de2565b95505b6000612c1c8a8a612bc2565b90506000612c2d828a898989613079565b90506000612c50612c4889612c42898d612bad565b906130a8565b889088612fdc565b905080821015612c695760008094509450505050612cdb565b808203670de0b6b3a76400008110612c9e57612c97612c90670de0b6b3a76400008b6120f9565b82906130a8565b9050612cb6565b612cb3612c90670de0b6b3a76400008b613113565b90505b8a811015612cce576000809550955050505050612cdb565b8a90039450600193505050505b97509795505050505050565b6000806000612cf98989888888613128565b9050612d0986612c42898b613de2565b975087811015612d20576000809250925050612d9f565b878103612d2e818688612fdc565b9050670de0b6b3a76400008110612d5b57612d54612c90670de0b6b3a764000089613113565b9050612d73565b612d70612c90670de0b6b3a7640000896120f9565b90505b612d7d8186613113565b9050808a1015612d9557600080935093505050612d9f565b8903925060019150505b965096945050505050565b6000806000612dbc8888888888613128565b90506000612de7670de0b6b3a7640000612dd688886120f9565b612de09190613de2565b8390613113565b9050670de0b6b3a76400008110612e1457612e0d612c90670de0b6b3a764000089613113565b9050612e2c565b612e29612c90670de0b6b3a7640000896120f9565b90505b80881015612e4257600080935093505050612e4c565b8703925060019150505b9550959350505050565b6000806000612e688989888888613128565b905086881015612e7f576000809250925050612d9f565b9686900396612e8e88876130a8565b975087811015612ea5576000809250925050612d9f565b878103612eb3818688612fdc565b9050670de0b6b3a76400008110612ee057612ed9612c90670de0b6b3a764000089613113565b9050612ef8565b612ef5612c90670de0b6b3a7640000896120f9565b90505b612f028186613113565b905089811015612f1a57600080935093505050612d9f565b9890980398600198509650505050505050565b6000806000612f3f8888888888613079565b90506000612f63670de0b6b3a7640000612f598888613113565b61262e9190613de2565b9050670de0b6b3a76400008110612f9057612f89612c90670de0b6b3a7640000896120f9565b9050612fa8565b612fa5612c90670de0b6b3a764000089613113565b90505b612fb281866120f9565b905088811015612fca57600080935093505050612e4c565b97909703976001975095505050505050565b6000826000190484118302158202612ff357600080fd5b50910281810615159190040190565b606082613017576130128261314d565b6109a8565b815115801561302e57506001600160a01b0384163b155b1561305757604051639996b31560e01b81526001600160a01b0385166004820152602401611590565b50806109a8565b80604051633c06d78b60e11b8152600401611590919061400e565b600061308585856130a8565b61309e61309686612c42868b6120e4565b8590856126c2565b612ba39190613de2565b6000816000036130c15750670de0b6b3a7640000610a80565b826000036130d157506000610a80565b60006130dc83612715565b905060006130f16130ec86612715565b613176565b9050818102613108670de0b6b3a764000082614036565b9050612ba38161339c565b60006109a883670de0b6b3a764000084612fdc565b600061313485856130a8565b61309e61314586612c42868b612bad565b859085612fdc565b80511561315d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60008082136131985760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061321b9084901c612715565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133b757506000919050565b680755bf798b4a1bf1e582126133e0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612ba374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c612715565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016135dc6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156135f357600080fd5b5035919050565b60005b838110156136155781810151838201526020016135fd565b50506000910152565b600081518084526136368160208601602086016135fa565b601f01601f19169290920160200192915050565b6020815260006109a8602083018461361e565b6001600160a01b03811681146108e657600080fd5b60006020828403121561368457600080fd5b81356109a88161365d565b80151581146108e657600080fd5b6000602082840312156136af57600080fd5b81356109a88161368f565b60ff811681146108e657600080fd5b60008060008060008060008060006101208a8c0312156136e857600080fd5b8935985060208a0135975060408a01356137018161365d565b965060608a01356137118161365d565b955060808a01356137218161368f565b945060a08a0135935060c08a0135613738816136ba565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261376a57600080fd5b50813567ffffffffffffffff81111561378257600080fd5b6020830191508360208260051b850101111561379d57600080fd5b9250929050565b600080600080600080608087890312156137bd57600080fd5b86356137c88161365d565b955060208701356137d88161365d565b9450604087013567ffffffffffffffff808211156137f557600080fd5b6138018a838b01613758565b9096509450606089013591508082111561381a57600080fd5b5061382789828a01613758565b979a9699509497509295939492505050565b6000806000806080858703121561384f57600080fd5b8435935060208501356138618161365d565b925060408501356138718161365d565b9396929550929360600135925050565b60008060006060848603121561389657600080fd5b8335925060208401356138a88161365d565b915060408401356138b88161365d565b809150509250925092565b600080604083850312156138d657600080fd5b8235915060208301356138e88161365d565b809150509250929050565b60006020828403121561390557600080fd5b813567ffffffffffffffff81111561391c57600080fd5b8201606081850312156109a857600080fd5b6000806000806080858703121561394457600080fd5b8435935060208501356139568161365d565b925060408501359150606085013561396d8161365d565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613a2c57600080fd5b8235613a378161365d565b915060208301356138e88161368f565b600080600060608486031215613a5c57600080fd5b833592506020840135613a6e8161365d565b929592945050506040919091013590565b81516001600160a01b031681526101e081016020830151613aab60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613b0f828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b60008060208385031215613b6f57600080fd5b823567ffffffffffffffff811115613b8657600080fd5b613b9285828601613758565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613bd657835183529284019291840191600101613bba565b50909695505050505050565b81516001600160801b0316815261018081016020830151613c0e60208401826001600160801b03169052565b506040830151613c2960408401826001600160801b03169052565b506060830151613c4460608401826001600160801b03169052565b506080830151613c596080840182600f0b9052565b5060a0830151613c7460a08401826001600160801b03169052565b5060c0830151613c8f60c08401826001600160801b03169052565b5060e0830151613caa60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613b54565b600080600080600060a08688031215613d0b57600080fd5b853594506020860135613d1d8161365d565b93506040860135613d2d8161365d565b9250606086013591506080860135613d448161365d565b809150509295509295909350565b60008060408385031215613d6557600080fd5b8235613d708161365d565b915060208301356138e88161365d565b600060208284031215613d9257600080fd5b5051919050565b600060208284031215613dab57600080fd5b81516109a8816136ba565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610a8057610a80613dcc565b81810381811115610a8057610a80613dcc565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613e608160118501602087016135fa565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613e9a8160128501602087016135fa565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613ed28160108501602087016135fa565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613e608160118501602087016135fa565b818103600083128015838313168383128216171561116c5761116c613dcc565b634e487b7160e01b600052601260045260246000fd5b600082613f5057613f50613f2b565b500690565b600060018201613f6757613f67613dcc565b5060010190565b600082613f7d57613f7d613f2b565b500490565b600060208284031215613f9457600080fd5b81516109a88161368f565b8082028115828204841417610a8057610a80613dcc565b8082018281126000831280158216821582161715613b5457613b54613dcc565b6000600160ff1b8201613feb57613feb613dcc565b5060000390565b600082516140048184602087016135fa565b9190910192915050565b602081016004831061403057634e487b7160e01b600052602160045260246000fd5b91905290565b60008261404557614045613f2b565b600160ff1b82146000198414161561405f5761405f613dcc565b50059056fea2646970667358221220b2cb1898e6ba5f4a7df70b3069d2cc9d07144fd0360d0460f99d06d9c074c68264736f6c63430008140033",
        "sourceMap": "938:2588:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16149:137:16;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2040:1210:25;;;;;;:::i;:::-;;:::i;:::-;;2302:70:16;;;;;;:::i;:::-;;:::i;7775:482::-;;;;;;:::i;:::-;;:::i;6230:209::-;;;;;;:::i;:::-;;:::i;3163:240::-;;;;;;:::i;:::-;;:::i;8851:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5226:13:182;;-1:-1:-1;;;;;5222:54:182;5204:73;;5192:2;5177:18;8851:183:16;5002:281:182;15510:223:16;;;;;;:::i;:::-;;:::i;:::-;;;5911:25:182;;;5899:2;5884:18;15510:223:16;5765:177:182;15913:117:16;;;:::i;:::-;;;6119:4:182;6107:17;;;6089:36;;6077:2;6062:18;15913:117:16;5947:184:182;14470:173:16;;;;;;:::i;:::-;;:::i;1976:174::-;;;;;;:::i;:::-;;:::i;8419:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7376:14:182;;7369:22;7351:41;;7339:2;7324:18;8419:121:16;7211:187:182;16409:141:16;;;;;;:::i;:::-;;:::i;4600:225::-;;;;;;:::i;:::-;;:::i;10861:1619::-;;;:::i;:::-;;;;;;;:::i;2735:94::-;;;;;;:::i;:::-;;:::i;16699:119::-;;;;;;:::i;:::-;;:::i;5764:179::-;;;;;;:::i;:::-;;:::i;5057:277::-;;;;;;:::i;:::-;;:::i;2482:83::-;;;;;;:::i;:::-;;:::i;9617:1075::-;;;:::i;:::-;;;;;;;:::i;14778:129::-;;;;;;:::i;:::-;;:::i;13735:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;8615:101::-;;;:::i;:::-;;;-1:-1:-1;;;;;12928:32:182;;;12910:51;;12898:2;12883:18;8615:101:16;12764:203:182;13124:132:16;;;:::i;9199:213::-;;;;;;:::i;:::-;;:::i;13335:159::-;;;:::i;:::-;;;;;;;:::i;3808:285::-;;;;;;:::i;:::-;;:::i;15096:186::-;;;;;;:::i;:::-;;:::i;12604:367::-;;;:::i;:::-;;;;16411:13:182;;-1:-1:-1;;;;;16407:22:182;;;16389:41;;16490:4;16478:17;;;16472:24;16468:33;16446:20;;;16439:63;;;;16309:18;12604:367:16;16130:378:182;3430:94:25;;;:::i;16149:137:16:-;16203:13;16228:51;16247:30;16269:7;16247:21;:30::i;:::-;16236:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;16228:7;:51::i;:::-;16149:137;;;:::o;2040:1210:25:-;2162:10;-1:-1:-1;;;;;2176:13:25;2162:27;;;;;:52;;-1:-1:-1;2203:10:25;2194:20;;;;:8;:20;;;;;;;;2193:21;2162:52;2158:116;;;2237:26;;-1:-1:-1;;;2237:26:25;;;;;;;;;;;2158:116;2394:10;-1:-1:-1;;;;;2366:39:25;2374:7;-1:-1:-1;;;;;2366:39:25;;:90;;;;2449:6;-1:-1:-1;;;;;2421:35:25;2429:7;-1:-1:-1;;;;;2421:35:25;;2366:90;2349:180;;;2488:30;;-1:-1:-1;;;2488:30:25;;;;;;;;;;;2349:180;2656:35;;-1:-1:-1;;;2656:35:25;;2685:4;2656:35;;;12910:51:182;2634:19:25;;2656:10;-1:-1:-1;;;;;2656:20:25;;;;12883:18:182;;2656:35:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2724:31;;-1:-1:-1;;;2724:31:25;;2749:4;2724:31;;;12910:51:182;2634:57:25;;-1:-1:-1;2701:20:25;;-1:-1:-1;;;;;2724:6:25;:16;;;;12883:18:182;;2724:31:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2865:32;;-1:-1:-1;;;2865:32:25;;2891:4;2865:32;;;12910:51:182;2701:54:25;;-1:-1:-1;2847:15:25;;-1:-1:-1;;;;;2865:17:25;;;;;12883:18:182;;2865:32:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2847:50;-1:-1:-1;2907:60:25;-1:-1:-1;;;;;2907:36:25;;2944:13;2847:50;2907:36;:60::i;:::-;3063:35;;-1:-1:-1;;;3063:35:25;;3092:4;3063:35;;;12910:51:182;3102:11:25;;3063:10;-1:-1:-1;;;;;3063:20:25;;;;12883:18:182;;3063:35:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;:113;;;-1:-1:-1;3129:31:25;;-1:-1:-1;;;3129:31:25;;3154:4;3129:31;;;12910:51:182;3164:12:25;;3129:6;-1:-1:-1;;;;;3129:16:25;;;;12883:18:182;;3129:31:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:47;;3063:113;3046:198;;;3208:25;;-1:-1:-1;;;3208:25:25;;;;;;;;;;;3046:198;2080:1170;;;2040:1210;:::o;2302:70:16:-;2350:15;2357:7;2350:6;:15::i;:::-;2302:70;:::o;7775:482::-;8040:210;8067:15;8096:14;8124:5;8143:7;8164:9;8187:8;8209:1;8224;8239;8040:13;:210::i;:::-;7775:482;;;;;;;;;:::o;6230:209::-;6391:41;6410:4;6416:2;6420:3;;6425:6;;6391:18;:41::i;:::-;6230:209;;;;;;:::o;3163:240::-;3344:52;3358:7;3367:4;3373:2;3377:6;3385:10;3344:13;:52::i;8851:183::-;-1:-1:-1;;;;;;;;;;;;8977:50:16;8996:12;:29;9009:15;8996:29;;;;;;;;;;;8985:41;;;;;;17148:13:182;-1:-1:-1;;;;;17144:54:182;17126:73;;17114:2;17099:18;;16927:278;15510:223:16;15641:7;15679:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;15679:36:16;;;;;;;;;;;:45;;;;;;;;;;;15668:57;;;;;5911:25:182;15660:66:16;;5884:18:182;15668:57:16;5765:177:182;15660:66:16;15510:223;;;;;:::o;15913:117::-;15964:5;15981:42;16000:10;-1:-1:-1;;;;;16000:19:16;;:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;15989:33;;;6119:4:182;6107:17;;;15989:33:16;;;6089:36:182;6062:18;15989:33:16;5947:184:182;15981:42:16;15913:117;:::o;14470:173::-;14568:7;14606:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;14606:28:16;;;;;;;;;;14595:40;;;;;5911:25:182;14587:49:16;;5884:18:182;14595:40:16;5765:177:182;14587:49:16;14470:173;;;;:::o;1976:174::-;2077:16;2112:31;2134:8;2112:21;:31::i;8419:121::-;-1:-1:-1;;;;;8513:18:16;;8478:4;8513:18;;;:8;:18;;;;;;;;;8502:30;;8494:39;;8502:30;;8513:18;;;8502:30;7376:14:182;;7369:22;7351:41;;7339:2;7324:18;;7211:187;16409:141:16;16465:13;16490:53;16509:32;16533:7;16509:23;:32::i;4600:225::-;4752:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;4771:47:16::1;4784:7;4793:8;4803:6;4811;4771:12;:47::i;:::-;4600:225:::0;;;;;:::o;10861:1619::-;10907:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10907:27:16;10946:23;10972:21;:19;:21::i;:::-;11139:13;:29;11076:12;:48;;;;11003:21;11027:34;;;;;10946:47;;-1:-1:-1;11003:21:16;-1:-1:-1;;;;;11139:29:16;;;;11027:97;;11076:48;11027:97;:::i;:::-;:141;;;;:::i;:::-;11003:165;;11178:20;11219:1;11201:15;:19;:178;;11378:1;11201:178;;;11235:128;11347:15;11235:86;11281:39;11304:15;11281:22;:39::i;:::-;11235:45;:86::i;:::-;:111;;:128::i;:::-;11428:1006;;;;;;;;11478:12;:26;-1:-1:-1;;;;;11478:26:16;;;11428:1006;;11535:28;;;;;;11428:1006;;;;11597:31;;-1:-1:-1;;;;;11597:31:16;;;;11428:1006;;;;;;;-1:-1:-1;;;11663:32:16;;;;;;11428:1006;;;;11723:25;;;;;;11428:1006;;;;;;;;;;;;;;;;11535:28;11826:29;;;;;;11428:1006;;;;11597:31;11894:36;;;;11478:26;11428:1006;;;11963:30;;;;;;11428:1006;;;;12033:37;;;;;;11428:1006;;;;12279:13;:29;;;;11428:1006;;;;12348:22;;;;;;;11428:1006;;;;11178:201;;-1:-1:-1;11389:36:16;;11428:1006;;;12140:18;;:92;;12197:35;:12;12218:13;12197:20;:35::i;:::-;12140:92;;;12177:1;12140:92;11428:1006;;12398:25;;-1:-1:-1;;;;;12398:25:16;11428:1006;;;;;12452:20;;11389:1045;;-1:-1:-1;12444:29:16;;12452:20;;11389:1045;;12452:20;;:::i;12444:29::-;10936:1544;;;;10861:1619;:::o;2735:94::-;2799:23;2810:3;2815:6;2799:10;:23::i;:::-;2735:94;;:::o;16699:119::-;-1:-1:-1;;;;;16793:16:16;;16755:7;16793:16;;;:7;:16;;;;;;;;;16782:28;;;;;5911:25:182;16774:37:16;;5884:18:182;16782:28:16;5765:177:182;5764:179:16;5885:51;5898:7;5907:8;5917:6;5925:10;5885:12;:51::i;:::-;5764:179;;;:::o;5057:277::-;5191:10;5173:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;5173:39:16;;;;;;;;;;;;:50;;-1:-1:-1;;5173:50:16;;;;;;;;;;5281:46;;7351:41:182;;;5173:39:16;;5191:10;5281:46;;7324:18:182;5281:46:16;;;;;;;5057:277;;:::o;2482:83::-;2538:20;2553:4;2538:14;:20::i;9617:1075::-;9689:29;;:::i;:::-;9734:951;9783:878;;;;;;;;9839:10;-1:-1:-1;;;;;9783:878:16;;;;;9886:14;-1:-1:-1;;;;;9783:878:16;;;;;9938:15;9783:878;;;;9999:23;9783:878;;;;10066:21;9783:878;;;;10135:25;9783:878;;;;10200:17;9783:878;;;;10259:19;9783:878;;;;10313:12;9783:878;;;;10359:11;;;;;;;;;-1:-1:-1;;;;;10359:11:16;-1:-1:-1;;;;;9783:878:16;;;;;10406:13;-1:-1:-1;;;;;9783:878:16;;;;;10447:195;;;;;;;;10489:9;10447:195;;;;10524:8;10447:195;;;;10558:16;10447:195;;;;10600:20;10447:195;;;9783:878;;;9755:920;;;;;;;;:::i;14778:129::-;14839:7;14877:21;;;:12;:21;;;;;;;;;14866:33;;;;;5911:25:182;14858:42:16;;5884:18:182;14866:33:16;5765:177:182;13735:565:16;13813:16;13841:23;13881:6;13867:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13867:28:16;;13841:54;;13967:9;13962:294;13982:17;;;13962:294;;;14017:12;14032:6;;14039:1;14032:9;;;;;;;:::i;:::-;;;;;;;14017:24;;14055:12;14138:4;14132:11;14124:19;;14182:4;14170:6;14177:1;14170:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;14228:3:16;;13962:294;;;;14266:27;14285:6;14274:18;;;;;;;;:::i;14266:27::-;13831:469;13735:565;;;;:::o;8615:101::-;8686:22;;;-1:-1:-1;;;;;8697:10:16;12928:32:182;8686:22:16;;;12910:51:182;8659:7:16;;8678:31;;12883:18:182;8686:22:16;12764:203:182;13124:132:16;13187:7;13206:43;13225:22;;13214:34;;;;;;5911:25:182;;5899:2;5884:18;;5765:177;9199:213:16;9292:6;9310:95;9342:52;9358:35;9376:17;9358:15;:35;:::i;:::-;9342:15;:52::i;:::-;9331:64;;;;;;5911:25:182;;5899:2;5884:18;;5765:177;13335:159:16;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13454:33:16;13473:12;13462:24;;;;;;;18695:13:182;;-1:-1:-1;;;;;18789:18:182;;;4932:59;;18838:3;18869:18;;;18904:4;18889:20;;4932:59;18956:4;18944:17;;18938:24;18990:20;;;19027:4;19012:20;;4932:59;19061:20;;19098:4;19083:20;;4932:59;19150:4;19138:17;;19132:24;19194:2;19183:27;;;19212:18;;;13205:34;19259:20;;19296:4;19281:20;;4932:59;19348:4;19336:17;;19330:24;19382:20;;;19419:4;19404:20;;4932:59;19453:20;;19490:4;19475:20;;4932:59;19542:4;19530:17;;;19524:24;19590:4;19573:22;;;7185:13;7178:21;19612:6;19597:22;;7166:34;19653:1;19649:19;;;19645:30;7185:13;7178:21;19692:6;19677:22;;7166:34;-1:-1:-1;;;;;19736:2:182;19732:20;;;19728:57;19802:6;19787:22;;13304:55;19838:20;;;19875:6;19860:22;;4932:59;18665:3;18650:19;;18476:1413;3808:285:16;3977:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;4038:48:16::1;4052:7;4061:4;4067:2;4071:6;4079;4038:13;:48::i;15096:186::-:0;-1:-1:-1;;;;;15237:26:16;;;15202:4;15237:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;15226:48;;15237:36;;;;7376:14:182;7369:22;15226:48:16;;;7351:41:182;;;;15202:4:16;;15218:57;;7324:18:182;15226:48:16;7211:187:182;12604:367:16;-1:-1:-1;;;;;;;;;;;;;;;;;12774:166:16;;;;;;;;12838:13;:29;-1:-1:-1;;;;;12838:29:16;;;12774:166;;;-1:-1:-1;;;12899:22:16;;;;;12774:166;;;;;;;12746:208;;;;;16389:41:182;;;;16472:24;;16468:33;16446:20;;;16439:63;;;;12725:239:16;;16309:18:182;;12746:208:16;16130:378:182;3430:94:25;3498:18;;;-1:-1:-1;;;;;3509:6:25;12928:32:182;3498:18:25;;;12910:51:182;3470:8:25;;3490:27;;12883:18:182;3498::25;12764:203:182;2533:693:71;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:71;2769:6;:26;;;;;;;;:::i;:::-;;2765:455;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:71;;;;;2765:455;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:369;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:369;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:239;;3084:10;3045:50;;;;;;;;:::i;2981:239::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:107;;3172:37;;;;;;;;;;;;;;;;;;;3113:107;2627:599;;;2533:693;;;:::o;17027:106:16:-;17119:6;17096:30;;-1:-1:-1;;;17096:30:16;;;;;;;;:::i;:::-;;;;;;;;1303:160:118;1412:43;;;-1:-1:-1;;;;;21218:32:182;;1412:43:118;;;21200:51:182;21267:18;;;;21260:34;;;1412:43:118;;;;;;;;;;21173:18:182;;;;1412:43:118;;;;;;;;-1:-1:-1;;;;;1412:43:118;-1:-1:-1;;;1412:43:118;;;1385:71;;1405:5;;1385:19;:71::i;2388:350:63:-;2522:10;2513:20;;;;:8;:20;;;;;;;;2508:85;;2556:26;;-1:-1:-1;;;2556:26:63;;;;;;;;;;;2508:85;2658:21;:31;;;;;;;-1:-1:-1;;2658:31:63;;;;;;2704:27;;;;;;2682:7;7376:14:182;7369:22;7351:41;;7339:2;7324:18;;7211:187;2704:27:63;;;;;;;;2388:350;:::o;8430:1543:68:-;8772:8;8754:15;:26;8750:93;;;8803:29;;-1:-1:-1;;;8803:29:68;;;;;;;;;;;8750:93;-1:-1:-1;;;;;8904:19:68;;8900:92;;8946:35;;-1:-1:-1;;;8946:35:68;;;;;;;;;;;8900:92;-1:-1:-1;;;;;9419:14:68;;;9074:18;9419:14;;;:7;:14;;;;;;;;;9244:245;;;;;21586:25:182;;;21665:18;;;21658:43;;;;21737:15;;;21717:18;;;21710:43;21796:14;;21789:22;21769:18;;;21762:50;21828:19;;;21821:35;;;;21872:19;;;;21865:35;;;9244:245:68;;;;;;;;;;21558:19:182;;;9244:245:68;;;9213:294;;;;;;;;-1:-1:-1;;;9118:403:68;;;22169:27:182;22212:11;;;22205:27;;;22248:12;;;22241:28;22285:12;;9118:403:68;;;-1:-1:-1;;9118:403:68;;;;;;;;;9095:436;;9118:403;9095:436;;;;9541:14;9558:30;;;;;;;;;22535:25:182;;;22608:4;22596:17;;22576:18;;;22569:45;;;;22630:18;;;22623:34;;;22673:18;;;22666:34;;;9095:436:68;;-1:-1:-1;9541:14:68;9558:30;;22507:19:182;;9558:30:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9541:47;;9612:5;-1:-1:-1;;;;;9602:15:68;:6;-1:-1:-1;;;;;9602:15:68;;9598:83;;9640:30;;-1:-1:-1;;;9640:30:68;;;;;;;;;;;9598:83;-1:-1:-1;;;;;9759:14:68;;;;;;;:7;:14;;;;;;;;9757:16;;;;;;9820:17;:24;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9820:45:68;;;;;;;;;;9925:41;;7351::182;;;9925::68;;7324:18:182;9925:41:68;;;;;;;8686:1287;;8430:1543;;;;;;;;;:::o;2248:716::-;-1:-1:-1;;;;;2460:18:68;;;;:38;;-1:-1:-1;;;;;;2482:16:68;;;2460:38;2456:111;;;2521:35;;-1:-1:-1;;;2521:35:68;;;;;;;;;;;2456:111;2623:27;;;2619:103;;2673:38;;-1:-1:-1;;;2673:38:68;;;;;;;;;;;2619:103;2787:9;2782:176;2802:14;;;2782:176;;;2834:54;2848:3;;2852:1;2848:6;;;;;;;:::i;:::-;;;;;;;2856:4;2862:2;2866:6;;2873:1;2866:9;;;;;;;:::i;:::-;;;;;;;2877:10;2834:13;:54::i;:::-;2930:3;;2782:176;;;;2248:716;;;;;;:::o;3315:1591::-;-1:-1:-1;;;;;3528:18:68;;;;:38;;-1:-1:-1;;;;;;3550:16:68;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:68;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:68;:6;-1:-1:-1;;;;;3729:14:68;;3725:888;;-1:-1:-1;;;;;3880:23:68;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:68;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:68;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:68;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:68;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:68;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:68;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:68;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:68;;;22885:25:182;;;22941:2;22926:18;;22919:34;;;-1:-1:-1;;;;;4850:49:68;;;;;;;;;;;;;;22858:18:182;4850:49:68;;;;;;;3315:1591;;;;;:::o;1100:1139:63:-;1215:16;2356:21:121;:19;:21::i;:::-;1297:23:63::1;1311:8;1297:13;:23::i;:::-;-1:-1:-1::0;;;;;1427:13:63::1;1403:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1403:37:63::1;;1399:110;;1463:35;;-1:-1:-1::0;;;1463:35:63::1;;;;;;;;;;;1399:110;1611:10;1602:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1601:21;:64:::0;::::1;;;-1:-1:-1::0;1638:10:63::1;-1:-1:-1::0;;;;;1652:13:63::1;1638:27;;;1601:64;:105;;;;-1:-1:-1::0;1695:11:63::1;::::0;-1:-1:-1;;;;;1695:11:63::1;1681:10;:25;;1601:105;1584:191;;;1738:26;;-1:-1:-1::0;;;1738:26:63::1;;;;;;;;;;;1584:191;1855:23;1881:21;:19;:21::i;:::-;1944:22;::::0;;1912:29:::1;1976::::0;;;1855:47;;-1:-1:-1;2026:59:63::1;1944:22:::0;1855:47;2076:8;2026:9:::1;:59::i;:::-;2015:70;;2134:13;-1:-1:-1::0;;;;;2100:132:63::1;;2161:61;2186:8;2196:15;2213:8;2161:24;:61::i;:::-;2100:132;::::0;5911:25:182;;;5899:2;5884:18;2100:132:63::1;;;;;;;1233:1006;;2398:20:121::0;1713:1;2924:7;:21;2744:208;3360:689:71;3435:21;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;3469:20;3567:19;2253:120;3567:8;:19::i;:::-;3540:46;-1:-1:-1;3610:16:71;3600:6;:26;;;;;;;;:::i;:::-;;3596:447;;3642:25;;;;;;;;;;;;;-1:-1:-1;;;3642:25:71;;;;;3596:447;;;3698:18;3688:6;:28;;;;;;;;:::i;:::-;;3684:359;;3786:10;3749:48;;;;;;;;:::i;3684:359::-;3829:19;3819:6;:29;;;;;;;;:::i;:::-;;3815:228;;3919:10;3881:49;;;;;;;;:::i;3815:228::-;3962:29;3952:6;:39;;;;;;;;:::i;:::-;;3948:95;;-1:-1:-1;;4007:25:71;;;;;;;;;;;;-1:-1:-1;;;4007:25:71;;;;;3360:689;-1:-1:-1;;;3360:689:71:o;10223:590:68:-;10419:34;;;10438:4;10419:34;;;;21200:51:182;;;;21267:18;;;21260:34;;;;10419::68;;;;;;;;;21173:18:182;;;;10419:34:68;;10409:45;;;;;;;;;-1:-1:-1;;;;;;10593:147:68;;;24082:39:182;10657:14:68;24154:15:182;;;-1:-1:-1;;24150:53:182;24137:11;;;24130:74;24220:12;;;24213:28;10711:15:68;24257:12:182;;;;24250:28;;;;10593:147:68;;;;;;;;;;24294:12:182;;;;10593:147:68;;;10570:180;;;;;;10223:590::o;5363:301::-;5509:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5509:35:68;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5623:34;;5911:25:182;;;5509:35:68;;5623:34;;5884:18:182;5623:34:68;;;;;;;5363:301;;;;:::o;6289:123:23:-;6378:27;;-1:-1:-1;;;6378:27:23;;193:4:74;6378:27:23;;;5911:25:182;6352:7:23;;6378:6;-1:-1:-1;;;;;6378:22:23;;;;5884:18:182;;6378:27:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6371:34;;6289:123;:::o;10301:1035:64:-;10396:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10396:39:64;10456:873;;;;;;;;10511:12;:26;-1:-1:-1;;;;;10511:26:64;;;10456:873;;10568:28;;;;10456:873;;;;-1:-1:-1;;;10624:25:64;;;;;;10456:873;;;;;;;;;;;;;10734:23;10456:873;;;;10793:21;10456:873;;;;10854:25;10456:873;;;;10906:12;10456:873;;;;10568:28;10950:29;;;;10511:26;10456:873;;;11066:36;;10456:873;;;;;;11019:97;;11066:36;11019:29;:97::i;:::-;10456:873;;11149:30;;-1:-1:-1;;;;;;;;11149:30:64;;;;;;10456:873;;;;11267:37;;10456:873;;;;;11220:98;;11267:37;;;11220:29;:98::i;:::-;10456:873;;10447:882;10301:1035;-1:-1:-1;;10301:1035:64:o;5717:341:76:-;5820:7;5840:20;5862:12;5878:56;5917:7;5878:25;:56::i;:::-;5839:95;;;;5949:7;5944:79;;5979:33;;-1:-1:-1;;;5979:33:76;;;;;;;;;;;1610:118:74;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;3353:344:63:-;3487:11;;-1:-1:-1;;;;;3487:11:63;3473:10;:25;3469:89;;3521:26;;-1:-1:-1;;;3521:26:63;;;;;;;;;;;3469:89;-1:-1:-1;;;;;3623:14:63;;;;;;:8;:14;;;;;;;;;:24;;-1:-1:-1;;3623:24:63;;;;;;;;;;3662:28;;7351:41:182;;;3662:28:63;;7324:18:182;3662:28:63;;;;;;;3353:344;;:::o;2856:328::-;2980:11;;-1:-1:-1;;;;;2980:11:63;2966:10;:25;2962:89;;3014:26;;-1:-1:-1;;;3014:26:63;;;;;;;;;;;2962:89;3121:11;:18;;-1:-1:-1;;;;;;3121:18:63;-1:-1:-1;;;;;3121:18:63;;;;;;;;3154:23;;;;-1:-1:-1;;3154:23:63;2856:328;:::o;7255:675:64:-;7340:6;7745:178;:12;:167;7775:123;7818:27;7867:13;7775:21;:123::i;:::-;7745:167;;;;;;;;;;;;:176;:178::i;:::-;7611:119;:12;:108;7641:64;7663:26;7691:13;7641:21;:64::i;7611:119::-;:312;;;;:::i;4207:1065:71:-;4599:26;;;4562:2;4599:26;;;;;;;;;4276:20;;4562:2;4536:23;;4562:2;4599:26;;;;;;;;;;-1:-1:-1;4599:26:71;4574:51;;4790:14;4818:180;4825:9;;4818:180;;4935:9;4942:2;4935:4;:9;:::i;:::-;4934:16;;4948:2;4934:16;:::i;:::-;4904:61;;4862:9;4899:1;4872:24;4890:6;4872:15;:24;:::i;:::-;:28;;;;:::i;:::-;4862:39;;;;;;;;:::i;:::-;;;;:103;-1:-1:-1;;;;;4862:103:71;;;;;;;;-1:-1:-1;4979:8:71;;;;:::i;:::-;;-1:-1:-1;4836:10:71;;-1:-1:-1;4844:2:71;4836:10;;:::i;:::-;;;4818:180;;;5169:28;;;;5154:44;5211:22;;;5154:44;4207:1065;-1:-1:-1;;4207:1065:71:o;4059:629:118:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:118;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:118;;-1:-1:-1;;;;;12928:32:182;;4631:40:118;;;12910:51:182;12883:18;;4631:40:118;12764:203:182;2431:307:121;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:121;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;1898:221:64:-;2042:1;2010:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;2010:34:64;;2006:107;;2067:35;;-1:-1:-1;;;2067:35:64;;;;;;;;;;;4677:1492:23;4835:23;;5172:33;:7;5188:16;5172:15;:33::i;:::-;5225:34;;-1:-1:-1;;;5225:34:23;;;;;5911:25:182;;;5151:54:23;;-1:-1:-1;5225:6:23;-1:-1:-1;;;;;5225:22:23;;;;5884:18:182;;5225:34:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5215:44;;5347:7;5358:1;5347:12;5343:51;;5382:1;5375:8;;;;;5343:51;5545:15;;;;;;;;:::i;:::-;5541:622;;;-1:-1:-1;;;;;5713:6:23;:13;;5744:7;5769:20;;;;:8;:20;:::i;:::-;5713:121;;-1:-1:-1;;;;;;5713:121:23;;;;;;;;;;25488:25:182;;;;-1:-1:-1;;;;;25587:15:182;25567:18;;;25560:43;5815:4:23;25619:18:182;;;25612:43;25461:18;;5713:121:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5695:139;;5541:622;;;6047:66;6083:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;6061:6:23;6047:35;;6105:7;6047:35;:66::i;:::-;6145:7;6127:25;;5541:622;4860:1309;4677:1492;;;;;:::o;27506:391:64:-;27675:7;27698:15;;;;;;;;:::i;:::-;27694:197;;;-1:-1:-1;27736:7:64;27729:14;;27694:197;27847:33;:7;27863:16;27847:15;:33::i;:::-;27840:40;;;;5697:450;5796:21;5829:24;193:4:74;5856:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;5829:52;;5923:16;5907:13;:32;:95;;6001:1;5907:95;;;5954:32;5970:16;5954:13;:32;:::i;:::-;5891:111;-1:-1:-1;6094:46:64;6116:23;193:4:74;6116:17:64;:23;:::i;:::-;6094:13;;:21;:46::i;6753:1173:76:-;6860:7;6869:4;7246:19;7290:20;7312:12;7328:65;7372:7;7328:26;:65::i;:::-;7289:104;;;;7412:7;7407:64;;-1:-1:-1;7447:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;;;6753:1173:76:o;7407:64::-;7647:39;:7;:28;;;:37;:39::i;:::-;7598:30;7620:7;7598:21;:30::i;:::-;7566:13;7515:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7484:202;;7275:422;;7828:1;7813:12;:16;7809:64;;;-1:-1:-1;7853:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;7809:64::-;7899:12;7914:4;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;898:556:74:-;1014:9;1279:1;-1:-1:-1;;1262:19:74;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:74;;1411:27;;898:556::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;2001:204:77:-;2053:8;-1:-1:-1;;;;;2079:1:77;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:77;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:77;2001:204::o;2705:151:119:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;6260:223:64:-;6336:24;6438:37;6456:19;6438:15;:37;:::i;:::-;6407:69;;:15;:69;:::i;8254:9098:76:-;8362:6;8370:4;9172:23;9327:130;:102;9395:7;:33;;;9327:7;:42;;;:67;;:102;;;;:::i;:::-;:128;:130::i;:::-;9198:114;:90;9255:7;:32;;;9198:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9172:285;;9467:30;9500:153;9577:7;:21;;;9616:7;:23;;;9500:59;:153::i;:::-;9467:186;;9903:1;9884:16;:20;9880:7439;;;9920:25;9956:16;9920:53;;10162:21;10185:12;10201:401;10282:7;:21;;;10325:7;:23;;;10370:7;:20;;;10412:7;:28;;;10468:7;:19;;;193:4:74;10462:25:76;;;;:::i;:::-;10509:7;:23;;;10554:7;:30;;;10201:59;:401::i;:::-;10161:441;;;;10621:7;10616:64;;-1:-1:-1;10656:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;10616:64::-;10857:17;10840:13;:34;10836:2891;;11148:21;11214:389;11314:22;11362:7;:20;;;11408:17;11457:7;:19;;;193:4:74;11451:25:76;;;;:::i;:::-;11502:7;:23;;;11551:7;:30;;;11214:74;:389::i;:::-;11187:416;-1:-1:-1;11187:416:76;-1:-1:-1;11909:8:76;;:84;;;;;11961:7;:32;;;11941:17;:52;11909:84;11884:335;;;-1:-1:-1;12042:1:76;;12045:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;11884:335::-;12152:7;12147:72;;-1:-1:-1;12191:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;12147:72::-;12246:24;:13;:22;:24::i;:::-;12245:25;;;:::i;:::-;12237:40;12272:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;;8254:9098:76:o;10836:2891::-;12962:1;12935:7;:23;;;:28;12931:782;;13021:95;13047:7;:28;;;13022:22;:53;;;;:::i;13021:95::-;13020:96;;;:::i;:::-;12987:181;13142:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;12931:782::-;13573:28;;;;13549:21;;13548:94;;13549:52;;;:::i;9880:7439::-;13852:1;13833:16;:20;13829:3490;;;13869:25;13905:17;13906:16;13905:17;:::i;:::-;13869:54;;14041:21;14064:12;14080:307;14161:22;14205:7;:20;;;14253:7;:19;;;193:4:74;14247:25:76;;;;:::i;:::-;14294:7;:23;;;14339:7;:30;;;14080:59;:307::i;:::-;14040:347;;;;14406:7;14401:64;;-1:-1:-1;14441:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;14401:64::-;14642:17;14625:13;:34;14621:2688;;14934:21;15000:387;15098:22;15146:7;:20;;;15192:17;15241:7;:19;;;193:4:74;15235:25:76;;;;:::i;:::-;15286:7;:23;;;15335:7;:30;;;15000:72;:387::i;:::-;14973:414;-1:-1:-1;14973:414:76;-1:-1:-1;15693:8:76;;:84;;;;;15745:7;:32;;;15725:17;:52;15693:84;15668:335;;;-1:-1:-1;15826:1:76;;15829:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15668:335::-;15936:7;15931:72;;-1:-1:-1;15975:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15931:72::-;16029:24;:13;:22;:24::i;14621:2688::-;16387:23;16457:335;16546:22;16594:7;:20;;;16646:7;:19;;;193:4:74;16640:25:76;;;;:::i;:::-;16691:7;:23;;;16740:7;:30;;;16457:63;:335::i;:::-;16428:364;-1:-1:-1;16428:364:76;-1:-1:-1;16428:364:76;16810:72;;-1:-1:-1;16854:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;16810:72::-;17073:177;17116:122;17189:7;:23;;;17137:13;17117:17;:33;;;;:::i;:::-;17116:43;;:122::i;:::-;17074:164;;:15;:164;:::i;13829:3490::-;-1:-1:-1;17337:1:76;;17340:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;8254:9098:76:o;17599:1167::-;17702:6;18560:199;18578:156;18639:7;:32;;;193:4:74;18633:38:76;;;;:::i;:::-;18693:23;;;;18578:24;;;;;:156;:33;:156::i;18560:199::-;18342:203;18360:160;18424:7;:33;;;193:4:74;18418:39:76;;;;:::i;:::-;18479:23;;;;18360:25;;;;;:160;:36;:160::i;3180:392:119:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:119;;3394:4;3359:41;;;12910:51:182;12883:18;;3359:41:119;12764:203:182;3303:108:119;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:119;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:119:o;3190:114:74:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;6027:544:75:-;6162:7;6181:29;6253:16;6213:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;6181:88;;6308:1;6283:22;:26;6279:238;;;6325:181;6381:111;6325:38;:181::i;17581:1971:78:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:78;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:::-;:18;;:21::i;:::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:74;18982:15:78;;18978:295;;19096:28;19109:14;193:4:74;19121:1:78;19109:11;:14::i;:::-;19096:8;;:12;:28::i;:::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:74;19259:1:78;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:78;;-1:-1:-1;;;;17581:1971:78;;;;;;;;;;;:::o;11709:1515::-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:78;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:74;12549:2:78;:9;12545:263;;12648:20;12655:12;193:4:74;12665:1:78;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:74;12794:1:78;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:78;;-1:-1:-1;;11709:1515:78;;;;;;;;;;:::o;15892:1050::-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:78;16337:28;193:4:74;16345:13:78;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:74;16379:8:78;:15;16375:293;;16490:26;16503:12;193:4:74;16513:1:78;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:74;16654:1:78;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:78;;-1:-1:-1;;15892:1050:78;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:74;6666:2:78;:9;6662:261;;6764:20;6771:12;193:4:74;6781:1:78;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:74;6909:1:78;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:78;-1:-1:-1;;;;;;;5576:1765:78:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:78;14607:28;193:4:74;14617:11:78;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:74;14649:9:78;:16;14645:300;;14765:29;14779:14;193:4:74;14791:1:78;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:74;14931:1:78;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:78;-1:-1:-1;;;;;;13859:1409:78:o;2284:748:74:-;2398:9;2663:1;-1:-1:-1;;2646:19:74;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:74;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;4625:582:119:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:119;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:119;;-1:-1:-1;;;;;12928:32:182;;5121:24:119;;;12910:51:182;12883:18;;5121:24:119;12764:203:182;5041:119:119;-1:-1:-1;5180:10:119;5173:17;;317:182:73;485:6;451:41;;-1:-1:-1;;;451:41:73;;;;;;;;:::i;20915:352:78:-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;:::-;:50;;;;:::i;3811:844:74:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:74;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:74;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:74;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;20059:343:78:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;5743:516:119:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:119;;;;;;;;;;;8508:3846:74;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:74;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:74;-1:-1:-1;9283:1:74;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:74;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:74;10385:5;;10384:13;;-1:-1:-1;;10383:50:74;10453:5;;10452:13;;;-1:-1:-1;;10451:50:74;10519:5;;;-1:-1:-1;;10519:46:74;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:74:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:74;:26;5126:40;;-1:-1:-1;5165:1:74;;4907:3302;-1:-1:-1;4907:3302:74:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:74;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:74;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:74;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:74;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:74;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:74;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:74;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:74;7584:10;;;;-1:-1:-1;6063:75:74;;-1:-1:-1;6458:50:74;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:182:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:182;;14:180;-1:-1:-1;14:180:182:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:182;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:182;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:182:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:182;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:118::-;1460:5;1453:13;1446:21;1439:5;1436:32;1426:60;;1482:1;1479;1472:12;1497:241;1553:6;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1661:9;1648:23;1680:28;1702:5;1680:28;:::i;1743:114::-;1827:4;1820:5;1816:16;1809:5;1806:27;1796:55;;1847:1;1844;1837:12;1862:1022;1988:6;1996;2004;2012;2020;2028;2036;2044;2052;2105:3;2093:9;2084:7;2080:23;2076:33;2073:53;;;2122:1;2119;2112:12;2073:53;2158:9;2145:23;2135:33;;2215:2;2204:9;2200:18;2187:32;2177:42;;2269:2;2258:9;2254:18;2241:32;2282:39;2315:5;2282:39;:::i;:::-;2340:5;-1:-1:-1;2397:2:182;2382:18;;2369:32;2410:41;2369:32;2410:41;:::i;:::-;2470:7;-1:-1:-1;2529:3:182;2514:19;;2501:33;2543:30;2501:33;2543:30;:::i;:::-;2592:7;-1:-1:-1;2646:3:182;2631:19;;2618:33;;-1:-1:-1;2703:3:182;2688:19;;2675:33;2717:31;2675:33;2717:31;:::i;:::-;2767:7;2757:17;;;2821:3;2810:9;2806:19;2793:33;2783:43;;2873:3;2862:9;2858:19;2845:33;2835:43;;1862:1022;;;;;;;;;;;:::o;2889:367::-;2952:8;2962:6;3016:3;3009:4;3001:6;2997:17;2993:27;2983:55;;3034:1;3031;3024:12;2983:55;-1:-1:-1;3057:20:182;;3100:18;3089:30;;3086:50;;;3132:1;3129;3122:12;3086:50;3169:4;3161:6;3157:17;3145:29;;3229:3;3222:4;3212:6;3209:1;3205:14;3197:6;3193:27;3189:38;3186:47;3183:67;;;3246:1;3243;3236:12;3183:67;2889:367;;;;;:::o;3261:1066::-;3401:6;3409;3417;3425;3433;3441;3494:3;3482:9;3473:7;3469:23;3465:33;3462:53;;;3511:1;3508;3501:12;3462:53;3550:9;3537:23;3569:39;3602:5;3569:39;:::i;:::-;3627:5;-1:-1:-1;3684:2:182;3669:18;;3656:32;3697:41;3656:32;3697:41;:::i;:::-;3757:7;-1:-1:-1;3815:2:182;3800:18;;3787:32;3838:18;3868:14;;;3865:34;;;3895:1;3892;3885:12;3865:34;3934:70;3996:7;3987:6;3976:9;3972:22;3934:70;:::i;:::-;4023:8;;-1:-1:-1;3908:96:182;-1:-1:-1;4111:2:182;4096:18;;4083:32;;-1:-1:-1;4127:16:182;;;4124:36;;;4156:1;4153;4146:12;4124:36;;4195:72;4259:7;4248:8;4237:9;4233:24;4195:72;:::i;:::-;3261:1066;;;;-1:-1:-1;3261:1066:182;;-1:-1:-1;3261:1066:182;;4286:8;;3261:1066;-1:-1:-1;;;3261:1066:182:o;4332:541::-;4418:6;4426;4434;4442;4495:3;4483:9;4474:7;4470:23;4466:33;4463:53;;;4512:1;4509;4502:12;4463:53;4548:9;4535:23;4525:33;;4608:2;4597:9;4593:18;4580:32;4621:39;4654:5;4621:39;:::i;:::-;4679:5;-1:-1:-1;4736:2:182;4721:18;;4708:32;4749:41;4708:32;4749:41;:::i;:::-;4332:541;;;;-1:-1:-1;4809:7:182;;4863:2;4848:18;4835:32;;-1:-1:-1;;4332:541:182:o;5288:472::-;5365:6;5373;5381;5434:2;5422:9;5413:7;5409:23;5405:32;5402:52;;;5450:1;5447;5440:12;5402:52;5486:9;5473:23;5463:33;;5546:2;5535:9;5531:18;5518:32;5559:39;5592:5;5559:39;:::i;:::-;5617:5;-1:-1:-1;5674:2:182;5659:18;;5646:32;5687:41;5646:32;5687:41;:::i;:::-;5747:7;5737:17;;;5288:472;;;;;:::o;6136:323::-;6204:6;6212;6265:2;6253:9;6244:7;6240:23;6236:32;6233:52;;;6281:1;6278;6271:12;6233:52;6317:9;6304:23;6294:33;;6377:2;6366:9;6362:18;6349:32;6390:39;6423:5;6390:39;:::i;:::-;6448:5;6438:15;;;6136:323;;;;;:::o;6464:386::-;6550:6;6603:2;6591:9;6582:7;6578:23;6574:32;6571:52;;;6619:1;6616;6609:12;6571:52;6659:9;6646:23;6692:18;6684:6;6681:30;6678:50;;;6724:1;6721;6714:12;6678:50;6747:22;;6803:2;6785:16;;;6781:25;6778:45;;;6819:1;6816;6809:12;7403:541;7489:6;7497;7505;7513;7566:3;7554:9;7545:7;7541:23;7537:33;7534:53;;;7583:1;7580;7573:12;7534:53;7619:9;7606:23;7596:33;;7679:2;7668:9;7664:18;7651:32;7692:39;7725:5;7692:39;:::i;:::-;7750:5;-1:-1:-1;7802:2:182;7787:18;;7774:32;;-1:-1:-1;7858:2:182;7843:18;;7830:32;7871:41;7830:32;7871:41;:::i;:::-;7403:541;;;;-1:-1:-1;7403:541:182;;-1:-1:-1;;7403:541:182:o;7949:1266::-;8166:13;;8148:32;;8236:4;8224:17;;;8218:24;8196:20;;;8189:54;8299:4;8287:17;;;8281:24;8259:20;;;8252:54;8362:4;8350:17;;;8344:24;8322:20;;;8315:54;8425:4;8413:17;;;8407:24;8385:20;;;8378:54;8488:4;8476:17;;;8470:24;8448:20;;;8441:54;8551:4;8539:17;;;8533:24;8511:20;;;8504:54;8614:4;8602:17;;;8596:24;8574:20;;;8567:54;8640:6;8688:15;;;8682:22;8662:18;;;8655:50;8724:6;8772:15;;;8766:22;8746:18;;;8739:50;8808:6;8856:15;;;8850:22;8830:18;;;8823:50;8892:6;8940:15;;;8934:22;8914:18;;;8907:50;8976:6;9024:15;;;9018:22;8998:18;;;8991:50;9060:6;9108:15;;;9102:22;9082:18;;;9075:50;9144:6;9192:15;;;9186:22;9166:18;;;9159:50;;;;8135:3;8120:19;;7949:1266::o;9220:390::-;9285:6;9293;9346:2;9334:9;9325:7;9321:23;9317:32;9314:52;;;9362:1;9359;9352:12;9314:52;9401:9;9388:23;9420:39;9453:5;9420:39;:::i;:::-;9478:5;-1:-1:-1;9535:2:182;9520:18;;9507:32;9548:30;9507:32;9548:30;:::i;9615:391::-;9692:6;9700;9708;9761:2;9749:9;9740:7;9736:23;9732:32;9729:52;;;9777:1;9774;9767:12;9729:52;9813:9;9800:23;9790:33;;9873:2;9862:9;9858:18;9845:32;9886:39;9919:5;9886:39;:::i;:::-;9615:391;;9944:5;;-1:-1:-1;;;9996:2:182;9981:18;;;;9968:32;;9615:391::o;10390:1290::-;10620:13;;-1:-1:-1;;;;;10085:31:182;10073:44;;10580:3;10565:19;;10692:4;10684:6;10680:17;10674:24;10707:62;10763:4;10752:9;10748:20;10734:12;-1:-1:-1;;;;;10085:31:182;10073:44;;10011:112;10707:62;;10825:4;10817:6;10813:17;10807:24;10800:4;10789:9;10785:20;10778:54;10888:4;10880:6;10876:17;10870:24;10863:4;10852:9;10848:20;10841:54;10951:4;10943:6;10939:17;10933:24;10926:4;10915:9;10911:20;10904:54;11014:4;11006:6;11002:17;10996:24;10989:4;10978:9;10974:20;10967:54;11077:4;11069:6;11065:17;11059:24;11052:4;11041:9;11037:20;11030:54;11140:4;11132:6;11128:17;11122:24;11115:4;11104:9;11100:20;11093:54;11166:6;11226:2;11218:6;11214:15;11208:22;11203:2;11192:9;11188:18;11181:50;;11250:6;11305:2;11297:6;11293:15;11287:22;11318:62;11376:2;11365:9;11361:18;11345:14;-1:-1:-1;;;;;10085:31:182;10073:44;;10011:112;11318:62;-1:-1:-1;;11399:6:182;11442:15;;;11436:22;-1:-1:-1;;;;;10085:31:182;11510:18;;;10073:44;11548:6;11591:15;;;11585:22;10198:12;;11655:18;;;10186:25;10260:4;10249:16;;10243:23;10227:14;;;10220:47;10316:4;10305:16;;10299:23;10283:14;;;10276:47;10372:4;10361:16;;10355:23;10339:14;;;10332:47;11616:58;;;10390:1290;;;;:::o;11685:437::-;11771:6;11779;11832:2;11820:9;11811:7;11807:23;11803:32;11800:52;;;11848:1;11845;11838:12;11800:52;11888:9;11875:23;11921:18;11913:6;11910:30;11907:50;;;11953:1;11950;11943:12;11907:50;11992:70;12054:7;12045:6;12034:9;12030:22;11992:70;:::i;:::-;12081:8;;11966:96;;-1:-1:-1;11685:437:182;-1:-1:-1;;;;11685:437:182:o;12127:632::-;12298:2;12350:21;;;12420:13;;12323:18;;;12442:22;;;12269:4;;12298:2;12521:15;;;;12495:2;12480:18;;;12269:4;12564:169;12578:6;12575:1;12572:13;12564:169;;;12639:13;;12627:26;;12708:15;;;;12673:12;;;;12600:1;12593:9;12564:169;;;-1:-1:-1;12750:3:182;;12127:632;-1:-1:-1;;;;;;12127:632:182:o;13370:1650::-;13594:13;;-1:-1:-1;;;;;4944:46:182;4932:59;;13562:3;13547:19;;13666:4;13658:6;13654:17;13648:24;13681:54;13729:4;13718:9;13714:20;13700:12;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;13681:54;;13784:4;13776:6;13772:17;13766:24;13799:56;13849:4;13838:9;13834:20;13818:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;13799:56;;13904:4;13896:6;13892:17;13886:24;13919:56;13969:4;13958:9;13954:20;13938:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;13919:56;;14024:4;14016:6;14012:17;14006:24;14039:55;14088:4;14077:9;14073:20;14057:14;13228:2;13217:21;13205:34;;13152:93;14039:55;;14143:4;14135:6;14131:17;14125:24;14158:56;14208:4;14197:9;14193:20;14177:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;14158:56;;14263:4;14255:6;14251:17;14245:24;14278:56;14328:4;14317:9;14313:20;14297:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;14278:56;;14383:4;14375:6;14371:17;14365:24;14398:56;14448:4;14437:9;14433:20;14417:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;14398:56;-1:-1:-1;14473:6:182;14516:15;;;14510:22;7185:13;7178:21;14573:18;;;7166:34;14611:6;14654:15;;;14648:22;7185:13;7178:21;14711:18;;;7166:34;14749:6;14792:15;;;14786:22;-1:-1:-1;;;;;13316:42:182;14852:18;;;13304:55;14890:6;14934:15;;;14928:22;-1:-1:-1;;;;;4944:46:182;;14995:18;;;4932:59;14959:55;4878:119;15025:691;15120:6;15128;15136;15144;15152;15205:3;15193:9;15184:7;15180:23;15176:33;15173:53;;;15222:1;15219;15212:12;15173:53;15258:9;15245:23;15235:33;;15318:2;15307:9;15303:18;15290:32;15331:39;15364:5;15331:39;:::i;:::-;15389:5;-1:-1:-1;15446:2:182;15431:18;;15418:32;15459:41;15418:32;15459:41;:::i;:::-;15519:7;-1:-1:-1;15573:2:182;15558:18;;15545:32;;-1:-1:-1;15629:3:182;15614:19;;15601:33;15643:41;15601:33;15643:41;:::i;:::-;15703:7;15693:17;;;15025:691;;;;;;;;:::o;15721:404::-;15789:6;15797;15850:2;15838:9;15829:7;15825:23;15821:32;15818:52;;;15866:1;15863;15856:12;15818:52;15905:9;15892:23;15924:39;15957:5;15924:39;:::i;:::-;15982:5;-1:-1:-1;16039:2:182;16024:18;;16011:32;16052:41;16011:32;16052:41;:::i;16738:184::-;16808:6;16861:2;16849:9;16840:7;16836:23;16832:32;16829:52;;;16877:1;16874;16867:12;16829:52;-1:-1:-1;16900:16:182;;16738:184;-1:-1:-1;16738:184:182:o;17210:247::-;17278:6;17331:2;17319:9;17310:7;17306:23;17302:32;17299:52;;;17347:1;17344;17337:12;17299:52;17379:9;17373:16;17398:29;17421:5;17398:29;:::i;17462:127::-;17523:10;17518:3;17514:20;17511:1;17504:31;17554:4;17551:1;17544:15;17578:4;17575:1;17568:15;17594:127;17655:10;17650:3;17646:20;17643:1;17636:31;17686:4;17683:1;17676:15;17710:4;17707:1;17700:15;17726:125;17791:9;;;17812:10;;;17809:36;;;17825:18;;:::i;17856:128::-;17923:9;;;17944:11;;;17941:37;;;17958:18;;:::i;17989:127::-;18050:10;18045:3;18041:20;18038:1;18031:31;18081:4;18078:1;18071:15;18105:4;18102:1;18095:15;18121:127;18182:10;18177:3;18173:20;18170:1;18163:31;18213:4;18210:1;18203:15;18237:4;18234:1;18227:15;19894:449;-1:-1:-1;;;20151:3:182;20144:32;20126:3;20205:6;20199:13;20221:75;20289:6;20284:2;20279:3;20275:12;20268:4;20260:6;20256:17;20221:75;:::i;:::-;20316:16;;;;20334:2;20312:25;;19894:449;-1:-1:-1;;19894:449:182:o;20348:450::-;-1:-1:-1;;;20605:3:182;20598:33;20580:3;20660:6;20654:13;20676:75;20744:6;20739:2;20734:3;20730:12;20723:4;20715:6;20711:17;20676:75;:::i;:::-;20771:16;;;;20789:2;20767:25;;20348:450;-1:-1:-1;;20348:450:182:o;22964:448::-;-1:-1:-1;;;23221:3:182;23214:31;23196:3;23274:6;23268:13;23290:75;23358:6;23353:2;23348:3;23344:12;23337:4;23329:6;23325:17;23290:75;:::i;:::-;23385:16;;;;23403:2;23381:25;;22964:448;-1:-1:-1;;22964:448:182:o;23417:449::-;-1:-1:-1;;;23674:3:182;23667:32;23649:3;23728:6;23722:13;23744:75;23812:6;23807:2;23802:3;23798:12;23791:4;23783:6;23779:17;23744:75;:::i;24317:200::-;24383:9;;;24356:4;24411:9;;24439:10;;24451:12;;;24435:29;24474:12;;;24466:21;;24432:56;24429:82;;;24491:18;;:::i;24522:127::-;24583:10;24578:3;24574:20;24571:1;24564:31;24614:4;24611:1;24604:15;24638:4;24635:1;24628:15;24654:112;24686:1;24712;24702:35;;24717:18;;:::i;:::-;-1:-1:-1;24751:9:182;;24654:112::o;24771:135::-;24810:3;24831:17;;;24828:43;;24851:18;;:::i;:::-;-1:-1:-1;24898:1:182;24887:13;;24771:135::o;24911:120::-;24951:1;24977;24967:35;;24982:18;;:::i;:::-;-1:-1:-1;25016:9:182;;24911:120::o;25036:245::-;25103:6;25156:2;25144:9;25135:7;25131:23;25127:32;25124:52;;;25172:1;25169;25162:12;25124:52;25204:9;25198:16;25223:28;25245:5;25223:28;:::i;25666:168::-;25739:9;;;25770;;25787:15;;;25781:22;;25767:37;25757:71;;25808:18;;:::i;25839:216::-;25903:9;;;25931:11;;;25878:3;25961:9;;25989:10;;25985:19;;26014:10;;26006:19;;25982:44;25979:70;;;26029:18;;:::i;26060:136::-;26095:3;-1:-1:-1;;;26116:22:182;;26113:48;;26141:18;;:::i;:::-;-1:-1:-1;26181:1:182;26177:13;;26060:136::o;26201:287::-;26330:3;26368:6;26362:13;26384:66;26443:6;26438:3;26431:4;26423:6;26419:17;26384:66;:::i;:::-;26466:16;;;;;26201:287;-1:-1:-1;;26201:287:182:o;26493:360::-;26657:2;26642:18;;26690:1;26679:13;;26669:144;;26735:10;26730:3;26726:20;26723:1;26716:31;26770:4;26767:1;26760:15;26798:4;26795:1;26788:15;26669:144;26822:25;;;26493:360;:::o;26858:193::-;26897:1;26923;26913:35;;26928:18;;:::i;:::-;-1:-1:-1;;;26964:18:182;;-1:-1:-1;;26984:13:182;;26960:38;26957:64;;;27001:18;;:::i;:::-;-1:-1:-1;27035:10:182;;26858:193::o",
        "linkReferences": {},
        "immutableReferences": {
            "13657": [
                {
                    "start": 1360,
                    "length": 32
                },
                {
                    "start": 1525,
                    "length": 32
                },
                {
                    "start": 1969,
                    "length": 32
                },
                {
                    "start": 2486,
                    "length": 32
                },
                {
                    "start": 3625,
                    "length": 32
                },
                {
                    "start": 4481,
                    "length": 32
                }
            ],
            "13660": [
                {
                    "start": 3909,
                    "length": 32
                },
                {
                    "start": 10072,
                    "length": 32
                }
            ],
            "13663": [
                {
                    "start": 3871,
                    "length": 32
                },
                {
                    "start": 4570,
                    "length": 32
                },
                {
                    "start": 9738,
                    "length": 32
                }
            ],
            "13666": [
                {
                    "start": 3947,
                    "length": 32
                },
                {
                    "start": 8245,
                    "length": 32
                }
            ],
            "13669": [
                {
                    "start": 4079,
                    "length": 32
                }
            ],
            "13672": [
                {
                    "start": 4117,
                    "length": 32
                }
            ],
            "13675": [
                {
                    "start": 4155,
                    "length": 32
                }
            ],
            "13678": [
                {
                    "start": 4193,
                    "length": 32
                }
            ],
            "13681": [
                {
                    "start": 3757,
                    "length": 32
                },
                {
                    "start": 8131,
                    "length": 32
                }
            ],
            "13684": [
                {
                    "start": 3795,
                    "length": 32
                },
                {
                    "start": 8169,
                    "length": 32
                }
            ],
            "13687": [
                {
                    "start": 3833,
                    "length": 32
                },
                {
                    "start": 8207,
                    "length": 32
                }
            ],
            "13704": [
                {
                    "start": 1267,
                    "length": 32
                },
                {
                    "start": 1909,
                    "length": 32
                },
                {
                    "start": 4021,
                    "length": 32
                },
                {
                    "start": 6903,
                    "length": 32
                },
                {
                    "start": 7025,
                    "length": 32
                },
                {
                    "start": 7149,
                    "length": 32
                }
            ],
            "13718": [
                {
                    "start": 3672,
                    "length": 32
                },
                {
                    "start": 7578,
                    "length": 32
                }
            ],
            "13721": [
                {
                    "start": 3719,
                    "length": 32
                },
                {
                    "start": 7639,
                    "length": 32
                }
            ],
            "5610": [
                {
                    "start": 1419,
                    "length": 32
                },
                {
                    "start": 1675,
                    "length": 32
                },
                {
                    "start": 2115,
                    "length": 32
                },
                {
                    "start": 5147,
                    "length": 32
                },
                {
                    "start": 7846,
                    "length": 32
                },
                {
                    "start": 9197,
                    "length": 32
                },
                {
                    "start": 9363,
                    "length": 32
                },
                {
                    "start": 9565,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
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
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "sweep(address)": "01681a62",
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "vault()": "fbfa77cf"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vault\",\"outputs\":[{\"internalType\":\"contract IERC4626\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"Some yield sources (e.g. Morpho) pay rewards directly to this      contract, but we can't handle distributing them internally. With      this in mind, we sweep the tokens to the fee collector address to      then redistribute to users.WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked for      that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vault()\":{\"returns\":{\"_0\":\"The ERC4626 compatible yield source.\"}}},\"title\":\"ERC4626Target0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsupportedToken()\":[{\"notice\":\"Thrown when an unsupported option is passed to a function or         a user attempts to sweep an invalid token. The options and sweep         targets that are supported vary between instances.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vault()\":{\"notice\":\"Gets the ERC4626 compatible vault used as this pool's yield         source.\"}},\"notice\":\"ERC4626Hyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target0.sol\":\"ERC4626Target0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b\",\"dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xee1d1cbc761adf6eec60161512631235beb00d0655ef3dcd0ec7531c4048304f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://278e515459a4d84a0c44da78949247ece0be57fe16fa9afd1a1c39f14e6f79d7\",\"dweb:/ipfs/QmQhSrHbgLEHzM6sLFmAwgvDycGkYDVXhHrdFj2T3vgZuT\"]},\"contracts/src/instances/erc4626/ERC4626Target0.sol\":{\"keccak256\":\"0xc04875d93837d960af7a0a0bead79c2fe571febeb226cef28138b4d24b324c77\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5f7734e83f08a120d2b1052dcba12c053a15bc69c97858e7f4e0db535e1f83be\",\"dweb:/ipfs/QmenDngdD7uDRgjvkeeKKF7r5P5zv9uY8WvxxKDdbAJ1aW\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0\",\"dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9\",\"dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba\",\"dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba\",\"dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca\",\"dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "_config",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "internalType": "contract IERC4626",
                            "name": "__vault",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressEmptyCode"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressInsufficientBalance"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "BatchInputLengthMismatch"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpInvalidExponent"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpiredDeadline"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "FailedInnerCall"
                },
                {
                    "inputs": [
                        {
                            "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                            "name": "reason",
                            "type": "uint8"
                        }
                    ],
                    "type": "error",
                    "name": "InsufficientLiquidity"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidERC20Bridge"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidFeeDestination"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidPresentValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidSignature"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidTimestamp"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "LnInvalidInput"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "RestrictedZeroAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes",
                            "name": "data",
                            "type": "bytes"
                        }
                    ],
                    "type": "error",
                    "name": "ReturnData"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "SafeERC20FailedOperation"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "SweepFailed"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "Unauthorized"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsupportedToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "AddLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "fees",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CollectGovernanceFee",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "checkpointTime",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedShorts",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedLongs",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CreateCheckpoint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "apr",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialize",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauseStatusUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newPauser",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauserUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RedeemWithdrawalShares",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RemoveLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "baseToken",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "ids",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "values",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "batchTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "collectGovernanceFee",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "proceeds",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "decimals",
                    "outputs": [
                        {
                            "internalType": "uint8",
                            "name": "",
                            "type": "uint8"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_checkpointTime",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCheckpoint",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.Checkpoint",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint128",
                                    "name": "vaultSharePrice",
                                    "type": "uint128"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_checkpointTime",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCheckpointExposure",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getMarketState",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.MarketState",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint128",
                                    "name": "shareReserves",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "bondReserves",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "longExposure",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "longsOutstanding",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "int128",
                                    "name": "shareAdjustment",
                                    "type": "int128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "shortsOutstanding",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "longAverageMaturityTime",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "shortAverageMaturityTime",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isInitialized",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isPaused",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "uint112",
                                    "name": "zombieBaseProceeds",
                                    "type": "uint112"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "zombieShareReserves",
                                    "type": "uint128"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPoolConfig",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPoolInfo",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolInfo",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "zombieBaseProceeds",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "zombieShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lpTotalSupply",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageMaturityTime",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageMaturityTime",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "withdrawalSharesReadyToWithdraw",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "withdrawalSharesProceeds",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lpSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longExposure",
                                    "type": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getUncollectedGovernanceFees",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getWithdrawPool",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.WithdrawPool",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint128",
                                    "name": "readyToWithdraw",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "proceeds",
                                    "type": "uint128"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isApprovedForAll",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isPauser",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "_slots",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "load",
                    "outputs": [
                        {
                            "internalType": "bytes32[]",
                            "name": "",
                            "type": "bytes32[]"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "name",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "nonces",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "_status",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "pause"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "perTokenApprovals",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "domainSeparator",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "permitTypeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "_approved",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "v",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "r",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "s",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permitForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApproval"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalBridge"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_who",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setGovernance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "who",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPauser"
                },
                {
                    "inputs": [
                        {
                            "internalType": "contract IERC20",
                            "name": "_target",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "sweep"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "symbol",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFromBridge"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "vault",
                    "outputs": [
                        {
                            "internalType": "contract IERC4626",
                            "name": "",
                            "type": "address"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "balanceOf(uint256,address)": {
                        "params": {
                            "account": "The account.",
                            "tokenId": "The sub-token id."
                        },
                        "returns": {
                            "_0": "The balance."
                        }
                    },
                    "baseToken()": {
                        "returns": {
                            "_0": "The base token."
                        }
                    },
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "params": {
                            "from": "The source account.",
                            "ids": "The array of token ids of the asset to transfer.",
                            "to": "The destination account.",
                            "values": "The amount of each token to transfer."
                        }
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "params": {
                            "_options": "The options that configure how the fees are settled."
                        },
                        "returns": {
                            "proceeds": "The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
                        }
                    },
                    "constructor": {
                        "params": {
                            "__vault": "The ERC4626 compatible vault.",
                            "_config": "The configuration of the Hyperdrive pool."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The decimals of the MultiToken."
                        }
                    },
                    "getCheckpoint(uint256)": {
                        "params": {
                            "_checkpointTime": "The checkpoint time."
                        },
                        "returns": {
                            "_0": "The checkpoint."
                        }
                    },
                    "getCheckpointExposure(uint256)": {
                        "params": {
                            "_checkpointTime": "The checkpoint time."
                        },
                        "returns": {
                            "_0": "The checkpoint exposure."
                        }
                    },
                    "getMarketState()": {
                        "returns": {
                            "_0": "The market state."
                        }
                    },
                    "getPoolConfig()": {
                        "details": "These parameters are immutable, so this should only need to be      called once.",
                        "returns": {
                            "_0": "The PoolConfig struct."
                        }
                    },
                    "getPoolInfo()": {
                        "returns": {
                            "_0": "The pool info."
                        }
                    },
                    "getUncollectedGovernanceFees()": {
                        "returns": {
                            "_0": "Governance fees denominated in shares yet to be collected."
                        }
                    },
                    "getWithdrawPool()": {
                        "returns": {
                            "_0": "Hyperdrive's withdrawal pool information."
                        }
                    },
                    "isApprovedForAll(address,address)": {
                        "params": {
                            "account": "The account.",
                            "operator": "The operator."
                        },
                        "returns": {
                            "_0": "The approval status."
                        }
                    },
                    "isPauser(address)": {
                        "params": {
                            "_account": "The account to check."
                        },
                        "returns": {
                            "_0": "The pauser status."
                        }
                    },
                    "load(uint256[])": {
                        "params": {
                            "_slots": "The storage slots the caller wants the data from."
                        },
                        "returns": {
                            "_0": "A raw array of loaded data."
                        }
                    },
                    "name(uint256)": {
                        "params": {
                            "tokenId": "The sub-token id."
                        },
                        "returns": {
                            "_0": "The name."
                        }
                    },
                    "nonces(address)": {
                        "params": {
                            "account": "The account."
                        },
                        "returns": {
                            "_0": "The signature nonce."
                        }
                    },
                    "pause(bool)": {
                        "params": {
                            "_status": "True to pause all deposits and false to unpause them."
                        }
                    },
                    "perTokenApprovals(uint256,address,address)": {
                        "params": {
                            "account": "The account.",
                            "spender": "The spender.",
                            "tokenId": "The sub-token id."
                        },
                        "returns": {
                            "_0": "The approval status."
                        }
                    },
                    "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
                        "params": {
                            "_approved": "A boolean of the approval status to set to.",
                            "deadline": "The timestamp which the signature must be submitted by        to be valid.",
                            "domainSeparator": "The EIP712 domain separator of the contract.",
                            "owner": "The owner of the account which is having the new approval set.",
                            "permitTypeHash": "The EIP712 domain separator of the contract.",
                            "r": "The r component of the ECDSA signature.",
                            "s": "The s component of the ECDSA signature.",
                            "spender": "The address which will be allowed to spend owner's tokens.",
                            "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
                        }
                    },
                    "setApproval(uint256,address,uint256)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
                        }
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
                            "caller": "The eth address which called the linking contract.",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
                        }
                    },
                    "setApprovalForAll(address,bool)": {
                        "params": {
                            "approved": "True to approve, false to remove approval.",
                            "operator": "The eth address which can access the caller's assets."
                        }
                    },
                    "setGovernance(address)": {
                        "params": {
                            "_who": "The new governance address."
                        }
                    },
                    "setPauser(address,bool)": {
                        "params": {
                            "status": "The new pauser status.",
                            "who": "The address to change."
                        }
                    },
                    "sweep(address)": {
                        "details": "Some yield sources (e.g. Morpho) pay rewards directly to this      contract, but we can't handle distributing them internally. With      this in mind, we sweep the tokens to the fee collector address to      then redistribute to users.WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked for      that, as it may result in an unexpected call from this address.",
                        "params": {
                            "_target": "The target token to sweep."
                        }
                    },
                    "symbol(uint256)": {
                        "params": {
                            "tokenId": "The sub-token id."
                        },
                        "returns": {
                            "_0": "The symbol."
                        }
                    },
                    "totalSupply(uint256)": {
                        "params": {
                            "tokenId": "The sub-token id."
                        },
                        "returns": {
                            "_0": "The total supply."
                        }
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "caller": "The msg.sender from the bridge.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    },
                    "vault()": {
                        "returns": {
                            "_0": "The ERC4626 compatible yield source."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "balanceOf(uint256,address)": {
                        "notice": "Gets an account's balance of a sub-token."
                    },
                    "baseToken()": {
                        "notice": "Gets the base token."
                    },
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "notice": "Transfers several assets from one account to another."
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "notice": "This function collects the governance fees accrued by the pool."
                    },
                    "constructor": {
                        "notice": "Initializes the target0 contract."
                    },
                    "decimals()": {
                        "notice": "Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token."
                    },
                    "getCheckpoint(uint256)": {
                        "notice": "Gets a specified checkpoint."
                    },
                    "getCheckpointExposure(uint256)": {
                        "notice": "Gets the checkpoint exposure at a specified time."
                    },
                    "getMarketState()": {
                        "notice": "Gets the market state."
                    },
                    "getPoolConfig()": {
                        "notice": "Gets the pool's configuration parameters."
                    },
                    "getPoolInfo()": {
                        "notice": "Gets info about the pool's reserves and other state that is         important to evaluate potential trades."
                    },
                    "getUncollectedGovernanceFees()": {
                        "notice": "Gets info about the fees presently accrued by the pool."
                    },
                    "getWithdrawPool()": {
                        "notice": "Gets information about the withdrawal pool."
                    },
                    "isApprovedForAll(address,address)": {
                        "notice": "Gets the approval status of an operator for an account."
                    },
                    "isPauser(address)": {
                        "notice": "Gets the pauser status of an address."
                    },
                    "load(uint256[])": {
                        "notice": "Allows plugin data libs to provide getters or other complex         logic instead of the main."
                    },
                    "name(uint256)": {
                        "notice": "Gets the name of a sub-token."
                    },
                    "nonces(address)": {
                        "notice": "Gets the permitForAll signature nonce for an account."
                    },
                    "pause(bool)": {
                        "notice": "Allows an authorized address to pause this contract."
                    },
                    "perTokenApprovals(uint256,address,address)": {
                        "notice": "Gets the approval status of an operator for an account."
                    },
                    "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "notice": "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature."
                    },
                    "setApproval(uint256,address,uint256)": {
                        "notice": "Allows a user to set an approval for an individual asset with         specific amount."
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "notice": "Allows the compatibility linking contract to forward calls to         set asset approvals."
                    },
                    "setApprovalForAll(address,bool)": {
                        "notice": "Allows a user to approve an operator to use all of their assets."
                    },
                    "setGovernance(address)": {
                        "notice": "Allows governance to change governance."
                    },
                    "setPauser(address,bool)": {
                        "notice": "Allows governance to change the pauser status of an address."
                    },
                    "sweep(address)": {
                        "notice": "Transfers the contract's balance of a target token to the fee         collector address."
                    },
                    "symbol(uint256)": {
                        "notice": "Gets the symbol of a sub-token."
                    },
                    "totalSupply(uint256)": {
                        "notice": "Gets the total supply of a sub-token."
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "notice": "Transfers an amount of assets from the source to the destination."
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "notice": "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge."
                    },
                    "vault()": {
                        "notice": "Gets the ERC4626 compatible vault used as this pool's yield         source."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/instances/erc4626/ERC4626Target0.sol": "ERC4626Target0"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8",
                "urls": [
                    "bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b",
                    "dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Base.sol": {
                "keccak256": "0xee1d1cbc761adf6eec60161512631235beb00d0655ef3dcd0ec7531c4048304f",
                "urls": [
                    "bzz-raw://278e515459a4d84a0c44da78949247ece0be57fe16fa9afd1a1c39f14e6f79d7",
                    "dweb:/ipfs/QmQhSrHbgLEHzM6sLFmAwgvDycGkYDVXhHrdFj2T3vgZuT"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Target0.sol": {
                "keccak256": "0xc04875d93837d960af7a0a0bead79c2fe571febeb226cef28138b4d24b324c77",
                "urls": [
                    "bzz-raw://5f7734e83f08a120d2b1052dcba12c053a15bc69c97858e7f4e0db535e1f83be",
                    "dweb:/ipfs/QmenDngdD7uDRgjvkeeKKF7r5P5zv9uY8WvxxKDdbAJ1aW"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626.sol": {
                "keccak256": "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e",
                "urls": [
                    "bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3",
                    "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"
                ],
                "license": "GPL-2.0-or-later"
            },
            "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
                "keccak256": "0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7",
                "urls": [
                    "bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f",
                    "dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
                "keccak256": "0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a",
                "urls": [
                    "bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0",
                    "dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
                "keccak256": "0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33",
                "urls": [
                    "bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73",
                    "dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5",
                "urls": [
                    "bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9",
                    "dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc",
                "urls": [
                    "bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa",
                    "dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12",
                "urls": [
                    "bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba",
                    "dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0",
                "urls": [
                    "bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba",
                    "dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c",
                "urls": [
                    "bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca",
                    "dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
                "urls": [
                    "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
                    "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e",
                "urls": [
                    "bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534",
                    "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785",
                "urls": [
                    "bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263",
                    "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Target0.sol",
        "id": 6100,
        "exportedSymbols": {
            "ERC20": [
                66276
            ],
            "ERC4626Base": [
                5811
            ],
            "ERC4626Target0": [
                6099
            ],
            "HyperdriveTarget0": [
                3257
            ],
            "IERC20": [
                6920
            ],
            "IERC4626": [
                7203
            ],
            "IHyperdrive": [
                7616
            ],
            "SafeERC20": [
                66706
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3488:25",
        "nodes": [
            {
                "id": 5925,
                "nodeType": "PragmaDirective",
                "src": "39:23:25",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 5927,
                "nodeType": "ImportDirective",
                "src": "64:59:25",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
                "file": "openzeppelin/token/ERC20/ERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6100,
                "sourceUnit": 66277,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5926,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66276,
                            "src": "73:5:25",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5929,
                "nodeType": "ImportDirective",
                "src": "124:73:25",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
                "file": "openzeppelin/token/ERC20/utils/SafeERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6100,
                "sourceUnit": 66707,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5928,
                            "name": "SafeERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66706,
                            "src": "133:9:25",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5931,
                "nodeType": "ImportDirective",
                "src": "198:73:25",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "../../external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6100,
                "sourceUnit": 3258,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5930,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3257,
                            "src": "207:17:25",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5933,
                "nodeType": "ImportDirective",
                "src": "272:53:25",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6100,
                "sourceUnit": 6921,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5932,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6920,
                            "src": "281:6:25",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5935,
                "nodeType": "ImportDirective",
                "src": "326:57:25",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC4626.sol",
                "file": "../../interfaces/IERC4626.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6100,
                "sourceUnit": 7204,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5934,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7203,
                            "src": "335:8:25",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5937,
                "nodeType": "ImportDirective",
                "src": "384:63:25",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6100,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5936,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "393:11:25",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5939,
                "nodeType": "ImportDirective",
                "src": "448:48:25",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6100,
                "sourceUnit": 5812,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5938,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5811,
                            "src": "457:11:25",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6099,
                "nodeType": "ContractDefinition",
                "src": "938:2588:25",
                "nodes": [
                    {
                        "id": 5948,
                        "nodeType": "UsingForDirective",
                        "src": "1002:26:25",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 5945,
                            "name": "SafeERC20",
                            "nameLocations": [
                                "1008:9:25"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 66706,
                            "src": "1008:9:25"
                        },
                        "typeName": {
                            "id": 5947,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 5946,
                                "name": "ERC20",
                                "nameLocations": [
                                    "1022:5:25"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 66276,
                                "src": "1022:5:25"
                            },
                            "referencedDeclaration": 66276,
                            "src": "1022:5:25",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$66276",
                                "typeString": "contract ERC20"
                            }
                        }
                    },
                    {
                        "id": 5965,
                        "nodeType": "FunctionDefinition",
                        "src": "1202:141:25",
                        "nodes": [],
                        "body": {
                            "id": 5964,
                            "nodeType": "Block",
                            "src": "1341:2:25",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 5949,
                            "nodeType": "StructuredDocumentation",
                            "src": "1034:163:25",
                            "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 5958,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 5952,
                                        "src": "1311:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 5959,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 5957,
                                    "name": "HyperdriveTarget0",
                                    "nameLocations": [
                                        "1293:17:25"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 3257,
                                    "src": "1293:17:25"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1293:26:25"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 5961,
                                        "name": "__vault",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 5955,
                                        "src": "1332:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                            "typeString": "contract IERC4626"
                                        }
                                    }
                                ],
                                "id": 5962,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 5960,
                                    "name": "ERC4626Base",
                                    "nameLocations": [
                                        "1320:11:25"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5811,
                                    "src": "1320:11:25"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1320:20:25"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 5956,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5952,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1253:7:25",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5965,
                                    "src": "1223:37:25",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 5951,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 5950,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1223:11:25",
                                                "1235:10:25"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "1223:22:25"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "1223:22:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5955,
                                    "mutability": "mutable",
                                    "name": "__vault",
                                    "nameLocation": "1279:7:25",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5965,
                                    "src": "1270:16:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$7203",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 5954,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 5953,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "1270:8:25"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7203,
                                            "src": "1270:8:25"
                                        },
                                        "referencedDeclaration": 7203,
                                        "src": "1270:8:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1213:79:25"
                        },
                        "returnParameters": {
                            "id": 5963,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1341:0:25"
                        },
                        "scope": 6099,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 6083,
                        "nodeType": "FunctionDefinition",
                        "src": "2040:1210:25",
                        "nodes": [],
                        "body": {
                            "id": 6082,
                            "nodeType": "Block",
                            "src": "2080:1170:25",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 5981,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 5975,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 5972,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2162:3:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 5973,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2166:6:25",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2162:10:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "id": 5974,
                                                "name": "_feeCollector",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13704,
                                                "src": "2176:13:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "2162:27:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "id": 5980,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "2193:21:25",
                                            "subExpression": {
                                                "baseExpression": {
                                                    "id": 5976,
                                                    "name": "_pausers",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13715,
                                                    "src": "2194:8:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 5979,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 5977,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2203:3:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 5978,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2207:6:25",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2203:10:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2194:20:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "2162:52:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 5988,
                                    "nodeType": "IfStatement",
                                    "src": "2158:116:25",
                                    "trueBody": {
                                        "id": 5987,
                                        "nodeType": "Block",
                                        "src": "2216:58:25",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 5982,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "2237:11:25",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 5984,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2249:12:25",
                                                        "memberName": "Unauthorized",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7567,
                                                        "src": "2237:24:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 5985,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2237:26:25",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 5986,
                                                "nodeType": "RevertStatement",
                                                "src": "2230:33:25"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 6007,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 5997,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 5991,
                                                        "name": "_target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5969,
                                                        "src": "2374:7:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 5990,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2366:7:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 5989,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2366:7:25",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 5992,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2366:16:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 5995,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13657,
                                                        "src": "2394:10:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 5994,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2386:7:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 5993,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2386:7:25",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 5996,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2386:19:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "2366:39:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 6006,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 6000,
                                                        "name": "_target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5969,
                                                        "src": "2429:7:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 5999,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2421:7:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 5998,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2421:7:25",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6001,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2421:16:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 6004,
                                                        "name": "_vault",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5610,
                                                        "src": "2449:6:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                                            "typeString": "contract IERC4626"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                                            "typeString": "contract IERC4626"
                                                        }
                                                    ],
                                                    "id": 6003,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2441:7:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6002,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2441:7:25",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6005,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2441:15:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "2421:35:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "2366:90:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6014,
                                    "nodeType": "IfStatement",
                                    "src": "2349:180:25",
                                    "trueBody": {
                                        "id": 6013,
                                        "nodeType": "Block",
                                        "src": "2467:62:25",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6008,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "2488:11:25",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6010,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2500:16:25",
                                                        "memberName": "UnsupportedToken",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7585,
                                                        "src": "2488:28:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6011,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2488:30:25",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6012,
                                                "nodeType": "RevertStatement",
                                                "src": "2481:37:25"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        6016
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 6016,
                                            "mutability": "mutable",
                                            "name": "baseBalance",
                                            "nameLocation": "2642:11:25",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 6082,
                                            "src": "2634:19:25",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 6015,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2634:7:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 6024,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6021,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2685:4:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                            "typeString": "contract ERC4626Target0"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                            "typeString": "contract ERC4626Target0"
                                                        }
                                                    ],
                                                    "id": 6020,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2677:7:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6019,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2677:7:25",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6022,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2677:13:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 6017,
                                                "name": "_baseToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13657,
                                                "src": "2656:10:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 6018,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2667:9:25",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6919,
                                            "src": "2656:20:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 6023,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2656:35:25",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2634:57:25"
                                },
                                {
                                    "assignments": [
                                        6026
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 6026,
                                            "mutability": "mutable",
                                            "name": "vaultBalance",
                                            "nameLocation": "2709:12:25",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 6082,
                                            "src": "2701:20:25",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 6025,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2701:7:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 6034,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6031,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2749:4:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                            "typeString": "contract ERC4626Target0"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                            "typeString": "contract ERC4626Target0"
                                                        }
                                                    ],
                                                    "id": 6030,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2741:7:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6029,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2741:7:25",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6032,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2741:13:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 6027,
                                                "name": "_vault",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5610,
                                                "src": "2724:6:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC4626_$7203",
                                                    "typeString": "contract IERC4626"
                                                }
                                            },
                                            "id": 6028,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2731:9:25",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6919,
                                            "src": "2724:16:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 6033,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2724:31:25",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2701:54:25"
                                },
                                {
                                    "assignments": [
                                        6036
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 6036,
                                            "mutability": "mutable",
                                            "name": "balance",
                                            "nameLocation": "2855:7:25",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 6082,
                                            "src": "2847:15:25",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 6035,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2847:7:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 6044,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6041,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2891:4:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                            "typeString": "contract ERC4626Target0"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                            "typeString": "contract ERC4626Target0"
                                                        }
                                                    ],
                                                    "id": 6040,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2883:7:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 6039,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2883:7:25",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 6042,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2883:13:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 6037,
                                                "name": "_target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5969,
                                                "src": "2865:7:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 6038,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2873:9:25",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6919,
                                            "src": "2865:17:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 6043,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2865:32:25",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2847:50:25"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 6052,
                                                "name": "_feeCollector",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13704,
                                                "src": "2944:13:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 6053,
                                                "name": "balance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6036,
                                                "src": "2959:7:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 6048,
                                                                "name": "_target",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5969,
                                                                "src": "2921:7:25",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$6920",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 6047,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2913:7:25",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 6046,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2913:7:25",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 6049,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2913:16:25",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 6045,
                                                    "name": "ERC20",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66276,
                                                    "src": "2907:5:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ERC20_$66276_$",
                                                        "typeString": "type(contract ERC20)"
                                                    }
                                                },
                                                "id": 6050,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2907:23:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$66276",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 6051,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2931:12:25",
                                            "memberName": "safeTransfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 66466,
                                            "src": "2907:36:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66354_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66354_$",
                                                "typeString": "function (contract IERC20,address,uint256)"
                                            }
                                        },
                                        "id": 6054,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2907:60:25",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6055,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2907:60:25"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 6074,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 6064,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 6060,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "3092:4:25",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                                    "typeString": "contract ERC4626Target0"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                                    "typeString": "contract ERC4626Target0"
                                                                }
                                                            ],
                                                            "id": 6059,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3084:7:25",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 6058,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3084:7:25",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 6061,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3084:13:25",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 6056,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13657,
                                                        "src": "3063:10:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 6057,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3074:9:25",
                                                    "memberName": "balanceOf",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6919,
                                                    "src": "3063:20:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 6062,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3063:35:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "id": 6063,
                                                "name": "baseBalance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6016,
                                                "src": "3102:11:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3063:50:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 6073,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 6069,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "3154:4:25",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                                    "typeString": "contract ERC4626Target0"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_ERC4626Target0_$6099",
                                                                    "typeString": "contract ERC4626Target0"
                                                                }
                                                            ],
                                                            "id": 6068,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3146:7:25",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 6067,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3146:7:25",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 6070,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3146:13:25",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 6065,
                                                        "name": "_vault",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5610,
                                                        "src": "3129:6:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                                            "typeString": "contract IERC4626"
                                                        }
                                                    },
                                                    "id": 6066,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3136:9:25",
                                                    "memberName": "balanceOf",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6919,
                                                    "src": "3129:16:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 6071,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3129:31:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "id": 6072,
                                                "name": "vaultBalance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 6026,
                                                "src": "3164:12:25",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3129:47:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "3063:113:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6081,
                                    "nodeType": "IfStatement",
                                    "src": "3046:198:25",
                                    "trueBody": {
                                        "id": 6080,
                                        "nodeType": "Block",
                                        "src": "3187:57:25",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6075,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "3208:11:25",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6077,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3220:11:25",
                                                        "memberName": "SweepFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7558,
                                                        "src": "3208:23:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6078,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3208:25:25",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6079,
                                                "nodeType": "RevertStatement",
                                                "src": "3201:32:25"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 5966,
                            "nodeType": "StructuredDocumentation",
                            "src": "1369:666:25",
                            "text": "@notice Transfers the contract's balance of a target token to the fee\n         collector address.\n @dev Some yield sources (e.g. Morpho) pay rewards directly to this\n      contract, but we can't handle distributing them internally. With\n      this in mind, we sweep the tokens to the fee collector address to\n      then redistribute to users.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transfer'. Any integrating contracts should be checked for\n      that, as it may result in an unexpected call from this address.\n @param _target The target token to sweep."
                        },
                        "functionSelector": "01681a62",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sweep",
                        "nameLocation": "2049:5:25",
                        "parameters": {
                            "id": 5970,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5969,
                                    "mutability": "mutable",
                                    "name": "_target",
                                    "nameLocation": "2062:7:25",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6083,
                                    "src": "2055:14:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6920",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 5968,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 5967,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2055:6:25"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 6920,
                                            "src": "2055:6:25"
                                        },
                                        "referencedDeclaration": 6920,
                                        "src": "2055:6:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2054:16:25"
                        },
                        "returnParameters": {
                            "id": 5971,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2080:0:25"
                        },
                        "scope": 6099,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6098,
                        "nodeType": "FunctionDefinition",
                        "src": "3430:94:25",
                        "nodes": [],
                        "body": {
                            "id": 6097,
                            "nodeType": "Block",
                            "src": "3480:44:25",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 6093,
                                                        "name": "_vault",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5610,
                                                        "src": "3509:6:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                                            "typeString": "contract IERC4626"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                                            "typeString": "contract IERC4626"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 6091,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "3498:3:25",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 6092,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3502:6:25",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3498:10:25",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 6094,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3498:18:25",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 6090,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3256,
                                            "src": "3490:7:25",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 6095,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3490:27:25",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 6096,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3490:27:25"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 6084,
                            "nodeType": "StructuredDocumentation",
                            "src": "3277:148:25",
                            "text": "@notice Gets the ERC4626 compatible vault used as this pool's yield\n         source.\n @return The ERC4626 compatible yield source."
                        },
                        "functionSelector": "fbfa77cf",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "vault",
                        "nameLocation": "3439:5:25",
                        "parameters": {
                            "id": 6085,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3444:2:25"
                        },
                        "returnParameters": {
                            "id": 6089,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6088,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6098,
                                    "src": "3470:8:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$7203",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 6087,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6086,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "3470:8:25"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7203,
                                            "src": "3470:8:25"
                                        },
                                        "referencedDeclaration": 7203,
                                        "src": "3470:8:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3469:10:25"
                        },
                        "scope": 6099,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 5941,
                            "name": "HyperdriveTarget0",
                            "nameLocations": [
                                "965:17:25"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 3257,
                            "src": "965:17:25"
                        },
                        "id": 5942,
                        "nodeType": "InheritanceSpecifier",
                        "src": "965:17:25"
                    },
                    {
                        "baseName": {
                            "id": 5943,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "984:11:25"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5811,
                            "src": "984:11:25"
                        },
                        "id": 5944,
                        "nodeType": "InheritanceSpecifier",
                        "src": "984:11:25"
                    }
                ],
                "canonicalName": "ERC4626Target0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 5940,
                    "nodeType": "StructuredDocumentation",
                    "src": "498:440:25",
                    "text": "@author DELV\n @title ERC4626Target0\n @notice ERC4626Hyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    6099,
                    5811,
                    3257,
                    10381,
                    13634,
                    12198,
                    11279,
                    12682,
                    8936,
                    9917,
                    13842,
                    67058,
                    8062,
                    8623,
                    8371,
                    8711
                ],
                "name": "ERC4626Target0",
                "nameLocation": "947:14:25",
                "scope": 6100,
                "usedErrors": [
                    7472,
                    7478,
                    7481,
                    7490,
                    7502,
                    7505,
                    7514,
                    7520,
                    7523,
                    7526,
                    7550,
                    7555,
                    7558,
                    7567,
                    7582,
                    7585,
                    66433,
                    66714,
                    66719,
                    66722,
                    67003
                ],
                "usedEvents": [
                    7909,
                    7924,
                    7941,
                    7954,
                    7971,
                    7990,
                    8007,
                    8024,
                    8037,
                    8044,
                    8049,
                    8056,
                    8061,
                    8604,
                    8613,
                    8622
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 25
};
