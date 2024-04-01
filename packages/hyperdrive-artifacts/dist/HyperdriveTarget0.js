export const HyperdriveTarget0 = {
    "abi": [
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
                    "internalType": "address",
                    "name": "destination",
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
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "basePayment",
                    "type": "uint256"
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
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
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
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
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
                            "internalType": "address",
                            "name": "sweepCollector",
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
            "name": "setFeeCollector",
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
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                }
            ],
            "name": "setSweepCollector",
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
            "name": "vaultSharesToken",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
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
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vaultSharesToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token address.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vaultSharesToken()\":{\"returns\":{\"_0\":\"The vault shares token address.\"}}},\"title\":\"HyperdriveTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates target0.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to change the sweep collector.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the sweep         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vaultSharesToken()\":{\"notice\":\"Gets the vault shares token.\"}},\"notice\":\"Hyperdrive's target 0 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/HyperdriveTarget0.sol\":\"HyperdriveTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "name": "basePayment",
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
                            "name": "newFeeCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "FeeCollectorUpdated",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Sweep",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newSweepCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SweepCollectorUpdated",
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
                                    "internalType": "contract IERC20",
                                    "name": "vaultSharesToken",
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
                                    "internalType": "address",
                                    "name": "sweepCollector",
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
                    "name": "setFeeCollector"
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
                            "internalType": "address",
                            "name": "_who",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setSweepCollector"
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
                    "name": "vaultSharesToken",
                    "outputs": [
                        {
                            "internalType": "address",
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
                            "_0": "The base token address."
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
                    "setFeeCollector(address)": {
                        "params": {
                            "_who": "The new fee collector address."
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
                    "setSweepCollector(address)": {
                        "params": {
                            "_who": "The new sweep collector address."
                        }
                    },
                    "sweep(address)": {
                        "details": "WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
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
                    "vaultSharesToken()": {
                        "returns": {
                            "_0": "The vault shares token address."
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
                        "notice": "Instantiates target0."
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
                    "setFeeCollector(address)": {
                        "notice": "Allows governance to change the fee collector."
                    },
                    "setGovernance(address)": {
                        "notice": "Allows governance to change governance."
                    },
                    "setPauser(address,bool)": {
                        "notice": "Allows governance to change the pauser status of an address."
                    },
                    "setSweepCollector(address)": {
                        "notice": "Allows governance to change the sweep collector."
                    },
                    "sweep(address)": {
                        "notice": "Transfers the contract's balance of a target token to the sweep         collector address."
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
                    "vaultSharesToken()": {
                        "notice": "Gets the vault shares token."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
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
                "contracts/src/external/HyperdriveTarget0.sol": "HyperdriveTarget0"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92",
                "urls": [
                    "bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206",
                    "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"
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
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
                "keccak256": "0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d",
                "urls": [
                    "bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603",
                    "dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb",
                "urls": [
                    "bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6",
                    "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"
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
                "keccak256": "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d",
                "urls": [
                    "bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2",
                    "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832",
                "urls": [
                    "bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7",
                    "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"
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
                "keccak256": "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5",
                "urls": [
                    "bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006",
                    "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4",
                "urls": [
                    "bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e",
                    "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"
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
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067",
                "urls": [
                    "bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f",
                    "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"
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
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "id": 5334,
        "exportedSymbols": {
            "AssetId": [
                18265
            ],
            "FixedPointMath": [
                19065
            ],
            "HyperdriveAdmin": [
                12819
            ],
            "HyperdriveCheckpoint": [
                14459
            ],
            "HyperdriveLP": [
                15361
            ],
            "HyperdriveLong": [
                16295
            ],
            "HyperdriveMultiToken": [
                16779
            ],
            "HyperdriveShort": [
                17765
            ],
            "HyperdriveStorage": [
                17990
            ],
            "HyperdriveTarget0": [
                5333
            ],
            "IERC20": [
                9980
            ],
            "IHyperdrive": [
                10676
            ],
            "IHyperdriveRead": [
                11525
            ],
            "LPMath": [
                21757
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:18380:37",
        "nodes": [
            {
                "id": 4520,
                "nodeType": "PragmaDirective",
                "src": "39:23:37",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 4522,
                "nodeType": "ImportDirective",
                "src": "64:50:37",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 9981,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4521,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9980,
                            "src": "73:6:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4524,
                "nodeType": "ImportDirective",
                "src": "115:60:37",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4523,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "124:11:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4526,
                "nodeType": "ImportDirective",
                "src": "176:68:37",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
                "file": "../interfaces/IHyperdriveRead.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 11526,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4525,
                            "name": "IHyperdriveRead",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11525,
                            "src": "185:15:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4528,
                "nodeType": "ImportDirective",
                "src": "245:66:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
                "file": "../internal/HyperdriveAdmin.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 12820,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4527,
                            "name": "HyperdriveAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12819,
                            "src": "254:15:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4530,
                "nodeType": "ImportDirective",
                "src": "312:76:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
                "file": "../internal/HyperdriveCheckpoint.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 14460,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4529,
                            "name": "HyperdriveCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14459,
                            "src": "321:20:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4532,
                "nodeType": "ImportDirective",
                "src": "389:64:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
                "file": "../internal/HyperdriveLong.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 16296,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4531,
                            "name": "HyperdriveLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16295,
                            "src": "398:14:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4534,
                "nodeType": "ImportDirective",
                "src": "454:60:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
                "file": "../internal/HyperdriveLP.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 15362,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4533,
                            "name": "HyperdriveLP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15361,
                            "src": "463:12:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4536,
                "nodeType": "ImportDirective",
                "src": "515:76:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
                "file": "../internal/HyperdriveMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 16780,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4535,
                            "name": "HyperdriveMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16779,
                            "src": "524:20:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4538,
                "nodeType": "ImportDirective",
                "src": "592:66:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
                "file": "../internal/HyperdriveShort.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 17766,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4537,
                            "name": "HyperdriveShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17765,
                            "src": "601:15:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4540,
                "nodeType": "ImportDirective",
                "src": "659:70:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
                "file": "../internal/HyperdriveStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 17991,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4539,
                            "name": "HyperdriveStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17990,
                            "src": "668:17:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4542,
                "nodeType": "ImportDirective",
                "src": "730:51:37",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 18266,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4541,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18265,
                            "src": "739:7:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4544,
                "nodeType": "ImportDirective",
                "src": "782:65:37",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 19066,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4543,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19065,
                            "src": "791:14:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4546,
                "nodeType": "ImportDirective",
                "src": "848:49:37",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5334,
                "sourceUnit": 21758,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4545,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21757,
                            "src": "857:6:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5333,
                "nodeType": "ContractDefinition",
                "src": "1219:17199:37",
                "nodes": [
                    {
                        "id": 4564,
                        "nodeType": "UsingForDirective",
                        "src": "1416:33:37",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 4562,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1422:14:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19065,
                            "src": "1422:14:37"
                        },
                        "typeName": {
                            "id": 4563,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1441:7:37",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 4575,
                        "nodeType": "FunctionDefinition",
                        "src": "1558:94:37",
                        "nodes": [],
                        "body": {
                            "id": 4574,
                            "nodeType": "Block",
                            "src": "1650:2:37",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 4565,
                            "nodeType": "StructuredDocumentation",
                            "src": "1455:98:37",
                            "text": "@notice Instantiates target0.\n @param _config The configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 4571,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4568,
                                        "src": "1641:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 4572,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 4570,
                                    "name": "HyperdriveStorage",
                                    "nameLocations": [
                                        "1623:17:37"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 17990,
                                    "src": "1623:17:37"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1623:26:37"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 4569,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4568,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1609:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4575,
                                    "src": "1579:37:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 4567,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4566,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1579:11:37",
                                                "1591:10:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10470,
                                            "src": "1579:22:37"
                                        },
                                        "referencedDeclaration": 10470,
                                        "src": "1579:22:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1569:53:37"
                        },
                        "returnParameters": {
                            "id": 4573,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1650:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 4589,
                        "nodeType": "FunctionDefinition",
                        "src": "2027:174:37",
                        "nodes": [],
                        "body": {
                            "id": 4588,
                            "nodeType": "Block",
                            "src": "2146:55:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4585,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4579,
                                                "src": "2185:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 4584,
                                            "name": "_collectGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12593,
                                            "src": "2163:21:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) returns (uint256)"
                                            }
                                        },
                                        "id": 4586,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2163:31:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 4583,
                                    "id": 4587,
                                    "nodeType": "Return",
                                    "src": "2156:38:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4576,
                            "nodeType": "StructuredDocumentation",
                            "src": "1677:345:37",
                            "text": "@notice This function collects the governance fees accrued by the pool.\n @param _options The options that configure how the fees are settled.\n @return proceeds The governance fees collected. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`."
                        },
                        "functionSelector": "3e691db9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "collectGovernanceFee",
                        "nameLocation": "2036:20:37",
                        "parameters": {
                            "id": 4580,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4579,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "2095:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4589,
                                    "src": "2066:37:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 4578,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4577,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "2066:11:37",
                                                "2078:7:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "2066:19:37"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "2066:19:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2056:53:37"
                        },
                        "returnParameters": {
                            "id": 4583,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4582,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "2136:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4589,
                                    "src": "2128:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4581,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2128:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2127:18:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4600,
                        "nodeType": "FunctionDefinition",
                        "src": "2353:70:37",
                        "nodes": [],
                        "body": {
                            "id": 4599,
                            "nodeType": "Block",
                            "src": "2391:32:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4596,
                                                "name": "_status",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4592,
                                                "src": "2408:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 4595,
                                            "name": "_pause",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12622,
                                            "src": "2401:6:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                                                "typeString": "function (bool)"
                                            }
                                        },
                                        "id": 4597,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2401:15:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4598,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2401:15:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4590,
                            "nodeType": "StructuredDocumentation",
                            "src": "2207:141:37",
                            "text": "@notice Allows an authorized address to pause this contract.\n @param _status True to pause all deposits and false to unpause them."
                        },
                        "functionSelector": "02329a29",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pause",
                        "nameLocation": "2362:5:37",
                        "parameters": {
                            "id": 4593,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4592,
                                    "mutability": "mutable",
                                    "name": "_status",
                                    "nameLocation": "2373:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4600,
                                    "src": "2368:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4591,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2368:4:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2367:14:37"
                        },
                        "returnParameters": {
                            "id": 4594,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2391:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4611,
                        "nodeType": "FunctionDefinition",
                        "src": "2543:87:37",
                        "nodes": [],
                        "body": {
                            "id": 4610,
                            "nodeType": "Block",
                            "src": "2591:39:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4607,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4603,
                                                "src": "2618:4:37",
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
                                            "id": 4606,
                                            "name": "_setFeeCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12648,
                                            "src": "2601:16:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 4608,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2601:22:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4609,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2601:22:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4601,
                            "nodeType": "StructuredDocumentation",
                            "src": "2429:109:37",
                            "text": "@notice Allows governance to change the fee collector.\n @param _who The new fee collector address."
                        },
                        "functionSelector": "a42dce80",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeCollector",
                        "nameLocation": "2552:15:37",
                        "parameters": {
                            "id": 4604,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4603,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "2576:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4611,
                                    "src": "2568:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4602,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2568:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2567:14:37"
                        },
                        "returnParameters": {
                            "id": 4605,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2591:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4622,
                        "nodeType": "FunctionDefinition",
                        "src": "2754:91:37",
                        "nodes": [],
                        "body": {
                            "id": 4621,
                            "nodeType": "Block",
                            "src": "2804:41:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4618,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4614,
                                                "src": "2833:4:37",
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
                                            "id": 4617,
                                            "name": "_setSweepCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12674,
                                            "src": "2814:18:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 4619,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2814:24:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4620,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2814:24:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4612,
                            "nodeType": "StructuredDocumentation",
                            "src": "2636:113:37",
                            "text": "@notice Allows governance to change the sweep collector.\n @param _who The new sweep collector address."
                        },
                        "functionSelector": "e4af29d1",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setSweepCollector",
                        "nameLocation": "2763:17:37",
                        "parameters": {
                            "id": 4615,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4614,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "2789:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4622,
                                    "src": "2781:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4613,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2781:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2780:14:37"
                        },
                        "returnParameters": {
                            "id": 4616,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2804:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4633,
                        "nodeType": "FunctionDefinition",
                        "src": "2955:83:37",
                        "nodes": [],
                        "body": {
                            "id": 4632,
                            "nodeType": "Block",
                            "src": "3001:37:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4629,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4625,
                                                "src": "3026:4:37",
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
                                            "id": 4628,
                                            "name": "_setGovernance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12700,
                                            "src": "3011:14:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 4630,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3011:20:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4631,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3011:20:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4623,
                            "nodeType": "StructuredDocumentation",
                            "src": "2851:99:37",
                            "text": "@notice Allows governance to change governance.\n @param _who The new governance address."
                        },
                        "functionSelector": "ab033ea9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setGovernance",
                        "nameLocation": "2964:13:37",
                        "parameters": {
                            "id": 4626,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4625,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "2986:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4633,
                                    "src": "2978:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4624,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2978:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2977:14:37"
                        },
                        "returnParameters": {
                            "id": 4627,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3001:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4647,
                        "nodeType": "FunctionDefinition",
                        "src": "3208:94:37",
                        "nodes": [],
                        "body": {
                            "id": 4646,
                            "nodeType": "Block",
                            "src": "3262:40:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4642,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4636,
                                                "src": "3283:3:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4643,
                                                "name": "status",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4638,
                                                "src": "3288:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 4641,
                                            "name": "_setPauser",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12731,
                                            "src": "3272:10:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,bool)"
                                            }
                                        },
                                        "id": 4644,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3272:23:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4645,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3272:23:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4634,
                            "nodeType": "StructuredDocumentation",
                            "src": "3044:159:37",
                            "text": "@notice Allows governance to change the pauser status of an address.\n @param who The address to change.\n @param status The new pauser status."
                        },
                        "functionSelector": "7180c8ca",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setPauser",
                        "nameLocation": "3217:9:37",
                        "parameters": {
                            "id": 4639,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4636,
                                    "mutability": "mutable",
                                    "name": "who",
                                    "nameLocation": "3235:3:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4647,
                                    "src": "3227:11:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4635,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3227:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4638,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "3245:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4647,
                                    "src": "3240:11:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4637,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3240:4:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3226:26:37"
                        },
                        "returnParameters": {
                            "id": 4640,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3262:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4659,
                        "nodeType": "FunctionDefinition",
                        "src": "3708:72:37",
                        "nodes": [],
                        "body": {
                            "id": 4658,
                            "nodeType": "Block",
                            "src": "3748:32:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4655,
                                                "name": "_target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4651,
                                                "src": "3765:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                    "typeString": "contract IERC20"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                    "typeString": "contract IERC20"
                                                }
                                            ],
                                            "id": 4654,
                                            "name": "_sweep",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12818,
                                            "src": "3758:6:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$9980_$returns$__$",
                                                "typeString": "function (contract IERC20)"
                                            }
                                        },
                                        "id": 4656,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3758:15:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4657,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3758:15:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4648,
                            "nodeType": "StructuredDocumentation",
                            "src": "3308:395:37",
                            "text": "@notice Transfers the contract's balance of a target token to the sweep\n         collector address.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transfer'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The target token to sweep."
                        },
                        "functionSelector": "01681a62",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sweep",
                        "nameLocation": "3717:5:37",
                        "parameters": {
                            "id": 4652,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4651,
                                    "mutability": "mutable",
                                    "name": "_target",
                                    "nameLocation": "3730:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4659,
                                    "src": "3723:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$9980",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 4650,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4649,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "3723:6:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 9980,
                                            "src": "3723:6:37"
                                        },
                                        "referencedDeclaration": 9980,
                                        "src": "3723:6:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3722:16:37"
                        },
                        "returnParameters": {
                            "id": 4653,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3748:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4681,
                        "nodeType": "FunctionDefinition",
                        "src": "4114:240:37",
                        "nodes": [],
                        "body": {
                            "id": 4680,
                            "nodeType": "Block",
                            "src": "4242:112:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4672,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4662,
                                                "src": "4309:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4673,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4664,
                                                "src": "4318:4:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4674,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4666,
                                                "src": "4324:2:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4675,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4668,
                                                "src": "4328:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4676,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "4336:3:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 4677,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4340:6:37",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "4336:10:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 4671,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16503,
                                            "src": "4295:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 4678,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4295:52:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4679,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4295:52:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4660,
                            "nodeType": "StructuredDocumentation",
                            "src": "3810:299:37",
                            "text": "@notice Transfers an amount of assets from the source to the destination.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move."
                        },
                        "functionSelector": "1c0f12b6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "4123:12:37",
                        "parameters": {
                            "id": 4669,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4662,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "4153:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4681,
                                    "src": "4145:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4661,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4145:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4664,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "4178:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4681,
                                    "src": "4170:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4663,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4170:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4666,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "4200:2:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4681,
                                    "src": "4192:10:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4665,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4192:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4668,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "4220:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4681,
                                    "src": "4212:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4667,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4212:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4135:97:37"
                        },
                        "returnParameters": {
                            "id": 4670,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4242:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4707,
                        "nodeType": "FunctionDefinition",
                        "src": "4759:285:37",
                        "nodes": [],
                        "body": {
                            "id": 4706,
                            "nodeType": "Block",
                            "src": "4937:107:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4699,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4684,
                                                "src": "5003:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4700,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4686,
                                                "src": "5012:4:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4701,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4688,
                                                "src": "5018:2:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4702,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4690,
                                                "src": "5022:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4703,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4692,
                                                "src": "5030:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 4698,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16503,
                                            "src": "4989:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 4704,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4989:48:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4705,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4989:48:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4682,
                            "nodeType": "StructuredDocumentation",
                            "src": "4360:394:37",
                            "text": "@notice Permissioned transfer for the bridge to access, only callable by\n         the ERC20 linking bridge.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move.\n @param caller The msg.sender from the bridge."
                        },
                        "functionSelector": "e44808bc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 4695,
                                        "name": "tokenID",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4684,
                                        "src": "4928:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                ],
                                "id": 4696,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 4694,
                                    "name": "onlyLinker",
                                    "nameLocations": [
                                        "4917:10:37"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 16328,
                                    "src": "4917:10:37"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4917:19:37"
                            }
                        ],
                        "name": "transferFromBridge",
                        "nameLocation": "4768:18:37",
                        "parameters": {
                            "id": 4693,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4684,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "4804:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4707,
                                    "src": "4796:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4683,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4796:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4686,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "4829:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4707,
                                    "src": "4821:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4685,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4821:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4688,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "4851:2:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4707,
                                    "src": "4843:10:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4687,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4843:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4690,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "4871:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4707,
                                    "src": "4863:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4689,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4863:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4692,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "4895:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4707,
                                    "src": "4887:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4691,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4887:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4786:121:37"
                        },
                        "returnParameters": {
                            "id": 4697,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4937:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4730,
                        "nodeType": "FunctionDefinition",
                        "src": "5551:225:37",
                        "nodes": [],
                        "body": {
                            "id": 4729,
                            "nodeType": "Block",
                            "src": "5712:64:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4723,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4710,
                                                "src": "5735:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4724,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4712,
                                                "src": "5744:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4725,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4714,
                                                "src": "5754:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4726,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4716,
                                                "src": "5762:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 4722,
                                            "name": "_setApproval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16532,
                                            "src": "5722:12:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,uint256,address)"
                                            }
                                        },
                                        "id": 4727,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5722:47:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4728,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5722:47:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4708,
                            "nodeType": "StructuredDocumentation",
                            "src": "5050:496:37",
                            "text": "@notice Allows the compatibility linking contract to forward calls to\n         set asset approvals.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement [saving gas\n        on transfer].\n @param caller The eth address which called the linking contract."
                        },
                        "functionSelector": "4ed2d6ac",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 4719,
                                        "name": "tokenID",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4710,
                                        "src": "5703:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                ],
                                "id": 4720,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 4718,
                                    "name": "onlyLinker",
                                    "nameLocations": [
                                        "5692:10:37"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 16328,
                                    "src": "5692:10:37"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5692:19:37"
                            }
                        ],
                        "name": "setApprovalBridge",
                        "nameLocation": "5560:17:37",
                        "parameters": {
                            "id": 4717,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4710,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "5595:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4730,
                                    "src": "5587:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4709,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5587:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4712,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "5620:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4730,
                                    "src": "5612:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4711,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5612:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4714,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "5646:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4730,
                                    "src": "5638:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4713,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5638:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4716,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "5670:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4730,
                                    "src": "5662:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4715,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5662:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5577:105:37"
                        },
                        "returnParameters": {
                            "id": 4721,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5712:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4755,
                        "nodeType": "FunctionDefinition",
                        "src": "6008:277:37",
                        "nodes": [],
                        "body": {
                            "id": 4754,
                            "nodeType": "Block",
                            "src": "6077:208:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 4745,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 4738,
                                                    "name": "_isApprovedForAll",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17878,
                                                    "src": "6124:17:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                                        "typeString": "mapping(address => mapping(address => bool))"
                                                    }
                                                },
                                                "id": 4742,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 4739,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "6142:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 4740,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6146:6:37",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "6142:10:37",
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
                                                "src": "6124:29:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 4743,
                                            "indexExpression": {
                                                "id": 4741,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4733,
                                                "src": "6154:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "6124:39:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 4744,
                                            "name": "approved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4735,
                                            "src": "6166:8:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "6124:50:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 4746,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6124:50:37"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 4748,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "6247:3:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 4749,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6251:6:37",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "6247:10:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4750,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4733,
                                                "src": "6259:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4751,
                                                "name": "approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4735,
                                                "src": "6269:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 4747,
                                            "name": "ApprovalForAll",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11776,
                                            "src": "6232:14:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,address,bool)"
                                            }
                                        },
                                        "id": 4752,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6232:46:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4753,
                                    "nodeType": "EmitStatement",
                                    "src": "6227:51:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4731,
                            "nodeType": "StructuredDocumentation",
                            "src": "5782:221:37",
                            "text": "@notice Allows a user to approve an operator to use all of their assets.\n @param operator The eth address which can access the caller's assets.\n @param approved True to approve, false to remove approval."
                        },
                        "functionSelector": "a22cb465",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApprovalForAll",
                        "nameLocation": "6017:17:37",
                        "parameters": {
                            "id": 4736,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4733,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "6043:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4755,
                                    "src": "6035:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4732,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6035:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4735,
                                    "mutability": "mutable",
                                    "name": "approved",
                                    "nameLocation": "6058:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4755,
                                    "src": "6053:13:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4734,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6053:4:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6034:33:37"
                        },
                        "returnParameters": {
                            "id": 4737,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6077:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4774,
                        "nodeType": "FunctionDefinition",
                        "src": "6715:179:37",
                        "nodes": [],
                        "body": {
                            "id": 4773,
                            "nodeType": "Block",
                            "src": "6826:68:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4766,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4758,
                                                "src": "6849:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4767,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4760,
                                                "src": "6858:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4768,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4762,
                                                "src": "6868:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4769,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "6876:3:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 4770,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6880:6:37",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "6876:10:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 4765,
                                            "name": "_setApproval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16532,
                                            "src": "6836:12:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,uint256,address)"
                                            }
                                        },
                                        "id": 4771,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6836:51:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4772,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6836:51:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4756,
                            "nodeType": "StructuredDocumentation",
                            "src": "6291:419:37",
                            "text": "@notice Allows a user to set an approval for an individual asset with\n         specific amount.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement (saving gas\n        on transfer)."
                        },
                        "functionSelector": "9cd241af",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApproval",
                        "nameLocation": "6724:11:37",
                        "parameters": {
                            "id": 4763,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4758,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "6753:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4774,
                                    "src": "6745:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4757,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6745:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4760,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "6778:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4774,
                                    "src": "6770:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4759,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6770:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4762,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6804:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4774,
                                    "src": "6796:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4761,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6796:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6735:81:37"
                        },
                        "returnParameters": {
                            "id": 4764,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6826:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4796,
                        "nodeType": "FunctionDefinition",
                        "src": "7181:209:37",
                        "nodes": [],
                        "body": {
                            "id": 4795,
                            "nodeType": "Block",
                            "src": "7332:58:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4789,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4777,
                                                "src": "7361:4:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4790,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4779,
                                                "src": "7367:2:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4791,
                                                "name": "ids",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4782,
                                                "src": "7371:3:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            },
                                            {
                                                "id": 4792,
                                                "name": "values",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4785,
                                                "src": "7376:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            ],
                                            "id": 4788,
                                            "name": "_batchTransferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16402,
                                            "src": "7342:18:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_calldata_ptr_$_t_array$_t_uint256_$dyn_calldata_ptr_$returns$__$",
                                                "typeString": "function (address,address,uint256[] calldata,uint256[] calldata)"
                                            }
                                        },
                                        "id": 4793,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7342:41:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4794,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7342:41:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4775,
                            "nodeType": "StructuredDocumentation",
                            "src": "6900:276:37",
                            "text": "@notice Transfers several assets from one account to another.\n @param from The source account.\n @param to The destination account.\n @param ids The array of token ids of the asset to transfer.\n @param values The amount of each token to transfer."
                        },
                        "functionSelector": "17fad7fc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchTransferFrom",
                        "nameLocation": "7190:17:37",
                        "parameters": {
                            "id": 4786,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4777,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "7225:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4796,
                                    "src": "7217:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4776,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7217:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4779,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "7247:2:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4796,
                                    "src": "7239:10:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4778,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7239:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4782,
                                    "mutability": "mutable",
                                    "name": "ids",
                                    "nameLocation": "7278:3:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4796,
                                    "src": "7259:22:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 4780,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7259:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 4781,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7259:9:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4785,
                                    "mutability": "mutable",
                                    "name": "values",
                                    "nameLocation": "7310:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4796,
                                    "src": "7291:25:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 4783,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7291:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 4784,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7291:9:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7207:115:37"
                        },
                        "returnParameters": {
                            "id": 4787,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7332:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4831,
                        "nodeType": "FunctionDefinition",
                        "src": "8726:482:37",
                        "nodes": [],
                        "body": {
                            "id": 4830,
                            "nodeType": "Block",
                            "src": "8981:227:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4819,
                                                "name": "domainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4799,
                                                "src": "9018:15:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 4820,
                                                "name": "permitTypeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4801,
                                                "src": "9047:14:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 4821,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4803,
                                                "src": "9075:5:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4822,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4805,
                                                "src": "9094:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4823,
                                                "name": "_approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4807,
                                                "src": "9115:9:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 4824,
                                                "name": "deadline",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4809,
                                                "src": "9138:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4825,
                                                "name": "v",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4811,
                                                "src": "9160:1:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint8",
                                                    "typeString": "uint8"
                                                }
                                            },
                                            {
                                                "id": 4826,
                                                "name": "r",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4813,
                                                "src": "9175:1:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 4827,
                                                "name": "s",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4815,
                                                "src": "9190:1:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint8",
                                                    "typeString": "uint8"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            ],
                                            "id": 4818,
                                            "name": "_permitForAll",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16730,
                                            "src": "8991:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                            }
                                        },
                                        "id": 4828,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8991:210:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4829,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8991:210:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4797,
                            "nodeType": "StructuredDocumentation",
                            "src": "7396:1325:37",
                            "text": "@notice Allows a caller who is not the owner of an account to execute\n         the functionality of 'approve' for all assets with the owner's\n         signature.\n @param domainSeparator The EIP712 domain separator of the contract.\n @param permitTypeHash The EIP712 domain separator of the contract.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported."
                        },
                        "functionSelector": "14e5f07b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permitForAll",
                        "nameLocation": "8735:12:37",
                        "parameters": {
                            "id": 4816,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4799,
                                    "mutability": "mutable",
                                    "name": "domainSeparator",
                                    "nameLocation": "8765:15:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8757:23:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4798,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8757:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4801,
                                    "mutability": "mutable",
                                    "name": "permitTypeHash",
                                    "nameLocation": "8798:14:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8790:22:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4800,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8790:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4803,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "8830:5:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8822:13:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4802,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8822:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4805,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "8853:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8845:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4804,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8845:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4807,
                                    "mutability": "mutable",
                                    "name": "_approved",
                                    "nameLocation": "8875:9:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8870:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4806,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8870:4:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4809,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "8902:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8894:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4808,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8894:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4811,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "8926:1:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8920:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 4810,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8920:5:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4813,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "8945:1:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8937:9:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4812,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8937:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 4815,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "8964:1:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4831,
                                    "src": "8956:9:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4814,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8956:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8747:224:37"
                        },
                        "returnParameters": {
                            "id": 4817,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8981:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4849,
                        "nodeType": "FunctionDefinition",
                        "src": "9370:121:37",
                        "nodes": [],
                        "body": {
                            "id": 4848,
                            "nodeType": "Block",
                            "src": "9435:56:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 4842,
                                                            "name": "_pausers",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17853,
                                                            "src": "9464:8:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 4844,
                                                        "indexExpression": {
                                                            "id": 4843,
                                                            "name": "_account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4834,
                                                            "src": "9473:8:37",
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
                                                        "src": "9464:18:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4840,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "9453:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 4841,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9457:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "9453:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 4845,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9453:30:37",
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
                                            "id": 4839,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "9445:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4846,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9445:39:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4847,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9445:39:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11514
                        ],
                        "documentation": {
                            "id": 4832,
                            "nodeType": "StructuredDocumentation",
                            "src": "9235:130:37",
                            "text": "@notice Gets the pauser status of an address.\n @param _account The account to check.\n @return The pauser status."
                        },
                        "functionSelector": "46fbf68e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isPauser",
                        "nameLocation": "9379:8:37",
                        "parameters": {
                            "id": 4835,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4834,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "9396:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4849,
                                    "src": "9388:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4833,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9388:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9387:18:37"
                        },
                        "returnParameters": {
                            "id": 4838,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4837,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4849,
                                    "src": "9429:4:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4836,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9429:4:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9428:6:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4863,
                        "nodeType": "FunctionDefinition",
                        "src": "9574:101:37",
                        "nodes": [],
                        "body": {
                            "id": 4862,
                            "nodeType": "Block",
                            "src": "9627:48:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 4858,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17788,
                                                        "src": "9656:10:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4856,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "9645:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 4857,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9649:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "9645:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 4859,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9645:22:37",
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
                                            "id": 4855,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "9637:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4860,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9637:31:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4861,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9637:31:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11449
                        ],
                        "documentation": {
                            "id": 4850,
                            "nodeType": "StructuredDocumentation",
                            "src": "9497:72:37",
                            "text": "@notice Gets the base token.\n @return The base token address."
                        },
                        "functionSelector": "c55dae63",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "baseToken",
                        "nameLocation": "9583:9:37",
                        "parameters": {
                            "id": 4851,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9592:2:37"
                        },
                        "returnParameters": {
                            "id": 4854,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4853,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4863,
                                    "src": "9618:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4852,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9618:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9617:9:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4877,
                        "nodeType": "FunctionDefinition",
                        "src": "9774:115:37",
                        "nodes": [],
                        "body": {
                            "id": 4876,
                            "nodeType": "Block",
                            "src": "9834:55:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 4872,
                                                        "name": "_vaultSharesToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17792,
                                                        "src": "9863:17:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4870,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "9852:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 4871,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9856:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "9852:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 4873,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9852:29:37",
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
                                            "id": 4869,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "9844:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4874,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9844:38:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4875,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9844:38:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11455
                        ],
                        "documentation": {
                            "id": 4864,
                            "nodeType": "StructuredDocumentation",
                            "src": "9681:88:37",
                            "text": "@notice Gets the vault shares token.\n @return The vault shares token address."
                        },
                        "functionSelector": "0a4e1493",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "vaultSharesToken",
                        "nameLocation": "9783:16:37",
                        "parameters": {
                            "id": 4865,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9799:2:37"
                        },
                        "returnParameters": {
                            "id": 4868,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4867,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4877,
                                    "src": "9825:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4866,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9825:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9824:9:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4896,
                        "nodeType": "FunctionDefinition",
                        "src": "10024:183:37",
                        "nodes": [],
                        "body": {
                            "id": 4895,
                            "nodeType": "Block",
                            "src": "10140:67:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 4889,
                                                            "name": "_checkpoints",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17836,
                                                            "src": "10169:12:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                            }
                                                        },
                                                        "id": 4891,
                                                        "indexExpression": {
                                                            "id": 4890,
                                                            "name": "_checkpointTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4880,
                                                            "src": "10182:15:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "10169:29:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4887,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "10158:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 4888,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10162:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "10158:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 4892,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10158:41:37",
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
                                            "id": 4886,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "10150:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4893,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10150:50:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4894,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10150:50:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11464
                        ],
                        "documentation": {
                            "id": 4878,
                            "nodeType": "StructuredDocumentation",
                            "src": "9895:124:37",
                            "text": "@notice Gets a specified checkpoint.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint."
                        },
                        "functionSelector": "20fc4881",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCheckpoint",
                        "nameLocation": "10033:13:37",
                        "parameters": {
                            "id": 4881,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4880,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "10064:15:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4896,
                                    "src": "10056:23:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4879,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10056:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10046:39:37"
                        },
                        "returnParameters": {
                            "id": 4885,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4884,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4896,
                                    "src": "10109:29:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Checkpoint_$10361_memory_ptr",
                                        "typeString": "struct IHyperdrive.Checkpoint"
                                    },
                                    "typeName": {
                                        "id": 4883,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4882,
                                            "name": "IHyperdrive.Checkpoint",
                                            "nameLocations": [
                                                "10109:11:37",
                                                "10121:10:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10361,
                                            "src": "10109:22:37"
                                        },
                                        "referencedDeclaration": 10361,
                                        "src": "10109:22:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Checkpoint_$10361_storage_ptr",
                                            "typeString": "struct IHyperdrive.Checkpoint"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10108:31:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4916,
                        "nodeType": "FunctionDefinition",
                        "src": "10372:213:37",
                        "nodes": [],
                        "body": {
                            "id": 4915,
                            "nodeType": "Block",
                            "src": "10473:112:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 4910,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 4908,
                                                                    "name": "_checkpointTime",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 4899,
                                                                    "src": "10531:15:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "+",
                                                                "rightExpression": {
                                                                    "id": 4909,
                                                                    "name": "_positionDuration",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17798,
                                                                    "src": "10549:17:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "10531:35:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "id": 4907,
                                                            "name": "_nonNettedLongs",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13268,
                                                            "src": "10515:15:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$",
                                                                "typeString": "function (uint256) view returns (int256)"
                                                            }
                                                        },
                                                        "id": 4911,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "10515:52:37",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4905,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "10504:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 4906,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10508:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "10504:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 4912,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10504:64:37",
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
                                            "id": 4904,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "10483:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4913,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10483:95:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4914,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10483:95:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11472
                        ],
                        "documentation": {
                            "id": 4897,
                            "nodeType": "StructuredDocumentation",
                            "src": "10213:154:37",
                            "text": "@notice Gets the checkpoint exposure at a specified time.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint exposure."
                        },
                        "functionSelector": "cf210e65",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCheckpointExposure",
                        "nameLocation": "10381:21:37",
                        "parameters": {
                            "id": 4900,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4899,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "10420:15:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4916,
                                    "src": "10412:23:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4898,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10412:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10402:39:37"
                        },
                        "returnParameters": {
                            "id": 4903,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4902,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4916,
                                    "src": "10465:6:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 4901,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10465:6:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10464:8:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4953,
                        "nodeType": "FunctionDefinition",
                        "src": "10790:1185:37",
                        "nodes": [],
                        "body": {
                            "id": 4952,
                            "nodeType": "Block",
                            "src": "10897:1078:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 4928,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17788,
                                                                "src": "11012:10:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            {
                                                                "id": 4929,
                                                                "name": "_vaultSharesToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17792,
                                                                "src": "11062:17:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            {
                                                                "id": 4930,
                                                                "name": "_linkerFactory",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17856,
                                                                "src": "11116:14:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 4931,
                                                                "name": "_linkerCodeHash",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17859,
                                                                "src": "11168:15:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 4932,
                                                                "name": "_initialVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17816,
                                                                "src": "11229:23:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4933,
                                                                "name": "_minimumShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17819,
                                                                "src": "11296:21:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4934,
                                                                "name": "_minimumTransactionAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17822,
                                                                "src": "11365:25:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4935,
                                                                "name": "_positionDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17798,
                                                                "src": "11430:17:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4936,
                                                                "name": "_checkpointDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17795,
                                                                "src": "11489:19:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4937,
                                                                "name": "_timeStretch",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17801,
                                                                "src": "11543:12:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4938,
                                                                "name": "_governance",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17845,
                                                                "src": "11589:11:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 4939,
                                                                "name": "_feeCollector",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17839,
                                                                "src": "11636:13:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 4940,
                                                                "name": "_sweepCollector",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17842,
                                                                "src": "11687:15:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 4943,
                                                                        "name": "_curveFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17804,
                                                                        "src": "11772:9:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 4944,
                                                                        "name": "_flatFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17807,
                                                                        "src": "11807:8:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 4945,
                                                                        "name": "_governanceLPFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17810,
                                                                        "src": "11841:16:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 4946,
                                                                        "name": "_governanceZombieFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17813,
                                                                        "src": "11883:20:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "id": 4941,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10676,
                                                                        "src": "11730:11:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 4942,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "11742:4:37",
                                                                    "memberName": "Fees",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10381,
                                                                    "src": "11730:16:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_struct$_Fees_$10381_storage_ptr_$",
                                                                        "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                                                    }
                                                                },
                                                                "id": 4947,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "structConstructorCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "11730:195:37",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                    "typeString": "contract IERC20"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                    "typeString": "contract IERC20"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 4926,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10676,
                                                                "src": "10956:11:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 4927,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "10968:10:37",
                                                            "memberName": "PoolConfig",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10470,
                                                            "src": "10956:22:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_struct$_PoolConfig_$10470_storage_ptr_$",
                                                                "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                                                            }
                                                        },
                                                        "id": 4948,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "structConstructorCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [
                                                            "11001:9:37",
                                                            "11044:16:37",
                                                            "11101:13:37",
                                                            "11152:14:37",
                                                            "11205:22:37",
                                                            "11274:20:37",
                                                            "11339:24:37",
                                                            "11412:16:37",
                                                            "11469:18:37",
                                                            "11530:11:37",
                                                            "11577:10:37",
                                                            "11622:12:37",
                                                            "11671:14:37",
                                                            "11724:4:37"
                                                        ],
                                                        "names": [
                                                            "baseToken",
                                                            "vaultSharesToken",
                                                            "linkerFactory",
                                                            "linkerCodeHash",
                                                            "initialVaultSharePrice",
                                                            "minimumShareReserves",
                                                            "minimumTransactionAmount",
                                                            "positionDuration",
                                                            "checkpointDuration",
                                                            "timeStretch",
                                                            "governance",
                                                            "feeCollector",
                                                            "sweepCollector",
                                                            "fees"
                                                        ],
                                                        "nodeType": "FunctionCall",
                                                        "src": "10956:988:37",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4924,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "10928:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 4925,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10932:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "10928:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 4949,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10928:1030:37",
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
                                            "id": 4923,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "10907:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4950,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10907:1061:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 4951,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10907:1061:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11486
                        ],
                        "documentation": {
                            "id": 4917,
                            "nodeType": "StructuredDocumentation",
                            "src": "10591:194:37",
                            "text": "@notice Gets the pool's configuration parameters.\n @dev These parameters are immutable, so this should only need to be\n      called once.\n @return The PoolConfig struct."
                        },
                        "functionSelector": "b0d96580",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPoolConfig",
                        "nameLocation": "10799:13:37",
                        "parameters": {
                            "id": 4918,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10812:2:37"
                        },
                        "returnParameters": {
                            "id": 4922,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4921,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4953,
                                    "src": "10862:29:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 4920,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4919,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "10862:11:37",
                                                "10874:10:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10470,
                                            "src": "10862:22:37"
                                        },
                                        "referencedDeclaration": 10470,
                                        "src": "10862:22:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10861:31:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5049,
                        "nodeType": "FunctionDefinition",
                        "src": "12144:1619:37",
                        "nodes": [],
                        "body": {
                            "id": 5048,
                            "nodeType": "Block",
                            "src": "12219:1544:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        4961
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4961,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "12237:15:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 5048,
                                            "src": "12229:23:37",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 4960,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12229:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 4964,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 4962,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13014,
                                            "src": "12255:19:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 4963,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12255:21:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12229:47:37"
                                },
                                {
                                    "assignments": [
                                        4966
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4966,
                                            "mutability": "mutable",
                                            "name": "lpTotalSupply",
                                            "nameLocation": "12294:13:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 5048,
                                            "src": "12286:21:37",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 4965,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12286:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 4979,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 4978,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 4975,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "baseExpression": {
                                                    "id": 4967,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17871,
                                                    "src": "12310:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 4970,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 4968,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18265,
                                                        "src": "12323:7:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 4969,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12331:12:37",
                                                    "memberName": "_LP_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 17998,
                                                    "src": "12323:20:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "12310:34:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "baseExpression": {
                                                    "id": 4971,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17871,
                                                    "src": "12359:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 4974,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 4972,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18265,
                                                        "src": "12372:7:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 4973,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12380:26:37",
                                                    "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18007,
                                                    "src": "12372:34:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "12359:48:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "12310:97:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 4976,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17830,
                                                "src": "12422:13:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 4977,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "12436:15:37",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10364,
                                            "src": "12422:29:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12310:141:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12286:165:37"
                                },
                                {
                                    "assignments": [
                                        4981
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4981,
                                            "mutability": "mutable",
                                            "name": "presentValue",
                                            "nameLocation": "12469:12:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 5048,
                                            "src": "12461:20:37",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 4980,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12461:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 4996,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 4984,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 4982,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4961,
                                                "src": "12484:15:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 4983,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "12502:1:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "12484:19:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "hexValue": "30",
                                            "id": 4994,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "12661:1:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "id": 4995,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "12484:178:37",
                                        "trueExpression": {
                                            "arguments": [
                                                {
                                                    "id": 4992,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4961,
                                                    "src": "12630:15:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
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
                                                                    "id": 4988,
                                                                    "name": "vaultSharePrice",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 4961,
                                                                    "src": "12587:15:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                ],
                                                                "id": 4987,
                                                                "name": "_getPresentValueParams",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13397,
                                                                "src": "12564:22:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$20065_memory_ptr_$",
                                                                    "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                                                }
                                                            },
                                                            "id": 4989,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "12564:39:37",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$20065_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$20065_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 4985,
                                                            "name": "LPMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 21757,
                                                            "src": "12518:6:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_LPMath_$21757_$",
                                                                "typeString": "type(library LPMath)"
                                                            }
                                                        },
                                                        "id": 4986,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12542:21:37",
                                                        "memberName": "calculatePresentValue",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 20094,
                                                        "src": "12518:45:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$20065_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 4990,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "12518:86:37",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 4991,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12622:7:37",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18345,
                                                "src": "12518:111:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 4993,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12518:128:37",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12461:201:37"
                                },
                                {
                                    "assignments": [
                                        5001
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 5001,
                                            "mutability": "mutable",
                                            "name": "poolInfo",
                                            "nameLocation": "12700:8:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 5048,
                                            "src": "12672:36:37",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolInfo_$10516_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolInfo"
                                            },
                                            "typeName": {
                                                "id": 5000,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 4999,
                                                    "name": "IHyperdrive.PoolInfo",
                                                    "nameLocations": [
                                                        "12672:11:37",
                                                        "12684:8:37"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10516,
                                                    "src": "12672:20:37"
                                                },
                                                "referencedDeclaration": 10516,
                                                "src": "12672:20:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$10516_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolInfo"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 5040,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 5004,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "12761:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5005,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12774:13:37",
                                                "memberName": "shareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10323,
                                                "src": "12761:26:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5006,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "12818:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5007,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12831:15:37",
                                                "memberName": "shareAdjustment",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10335,
                                                "src": "12818:28:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5008,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "12880:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5009,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12893:18:37",
                                                "memberName": "zombieBaseProceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10353,
                                                "src": "12880:31:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint112",
                                                    "typeString": "uint112"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5010,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "12946:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5011,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12959:19:37",
                                                "memberName": "zombieShareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10356,
                                                "src": "12946:32:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5012,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "13006:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5013,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13019:12:37",
                                                "memberName": "bondReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10326,
                                                "src": "13006:25:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 5014,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4961,
                                                "src": "13062:15:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5015,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "13109:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5016,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13122:16:37",
                                                "memberName": "longsOutstanding",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10332,
                                                "src": "13109:29:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5017,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "13177:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5018,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13190:23:37",
                                                "memberName": "longAverageMaturityTime",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10341,
                                                "src": "13177:36:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5019,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "13246:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5020,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13259:17:37",
                                                "memberName": "shortsOutstanding",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10338,
                                                "src": "13246:30:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5021,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "13316:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5022,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13329:24:37",
                                                "memberName": "shortAverageMaturityTime",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10344,
                                                "src": "13316:37:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 5023,
                                                "name": "lpTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4966,
                                                "src": "13382:13:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 5026,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 5024,
                                                        "name": "lpTotalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4966,
                                                        "src": "13423:13:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 5025,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "13440:1:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "13423:18:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseExpression": {
                                                    "arguments": [
                                                        {
                                                            "id": 5030,
                                                            "name": "lpTotalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4966,
                                                            "src": "13501:13:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 5028,
                                                            "name": "presentValue",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4981,
                                                            "src": "13480:12:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 5029,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13493:7:37",
                                                        "memberName": "divDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18363,
                                                        "src": "13480:20:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 5031,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13480:35:37",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 5032,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "Conditional",
                                                "src": "13423:92:37",
                                                "trueExpression": {
                                                    "hexValue": "30",
                                                    "id": 5027,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "13460:1:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5033,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17830,
                                                    "src": "13562:13:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 5034,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13576:15:37",
                                                "memberName": "readyToWithdraw",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10364,
                                                "src": "13562:29:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5035,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17830,
                                                    "src": "13631:13:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 5036,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13645:8:37",
                                                "memberName": "proceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10367,
                                                "src": "13631:22:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 5037,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "13681:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 5038,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13694:12:37",
                                                "memberName": "longExposure",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10329,
                                                "src": "13681:25:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint112",
                                                    "typeString": "uint112"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            ],
                                            "expression": {
                                                "id": 5002,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10676,
                                                "src": "12711:11:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 5003,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "12723:8:37",
                                            "memberName": "PoolInfo",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10516,
                                            "src": "12711:20:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_PoolInfo_$10516_storage_ptr_$",
                                                "typeString": "type(struct IHyperdrive.PoolInfo storage pointer)"
                                            }
                                        },
                                        "id": 5039,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "nameLocations": [
                                            "12746:13:37",
                                            "12801:15:37",
                                            "12860:18:37",
                                            "12925:19:37",
                                            "12992:12:37",
                                            "13045:15:37",
                                            "13091:16:37",
                                            "13152:23:37",
                                            "13227:17:37",
                                            "13290:24:37",
                                            "13367:13:37",
                                            "13409:12:37",
                                            "13529:31:37",
                                            "13605:24:37",
                                            "13667:12:37"
                                        ],
                                        "names": [
                                            "shareReserves",
                                            "shareAdjustment",
                                            "zombieBaseProceeds",
                                            "zombieShareReserves",
                                            "bondReserves",
                                            "vaultSharePrice",
                                            "longsOutstanding",
                                            "longAverageMaturityTime",
                                            "shortsOutstanding",
                                            "shortAverageMaturityTime",
                                            "lpTotalSupply",
                                            "lpSharePrice",
                                            "withdrawalSharesReadyToWithdraw",
                                            "withdrawalSharesProceeds",
                                            "longExposure"
                                        ],
                                        "nodeType": "FunctionCall",
                                        "src": "12711:1006:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$10516_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12672:1045:37"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 5044,
                                                        "name": "poolInfo",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5001,
                                                        "src": "13746:8:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolInfo_$10516_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolInfo_$10516_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5042,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "13735:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5043,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "13739:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "13735:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5045,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13735:20:37",
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
                                            "id": 5041,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "13727:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5046,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13727:29:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5047,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13727:29:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11493
                        ],
                        "documentation": {
                            "id": 4954,
                            "nodeType": "StructuredDocumentation",
                            "src": "11981:158:37",
                            "text": "@notice Gets info about the pool's reserves and other state that is\n         important to evaluate potential trades.\n @return The pool info."
                        },
                        "functionSelector": "60246c88",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPoolInfo",
                        "nameLocation": "12153:11:37",
                        "parameters": {
                            "id": 4955,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12164:2:37"
                        },
                        "returnParameters": {
                            "id": 4959,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4958,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5049,
                                    "src": "12190:27:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolInfo_$10516_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolInfo"
                                    },
                                    "typeName": {
                                        "id": 4957,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4956,
                                            "name": "IHyperdrive.PoolInfo",
                                            "nameLocations": [
                                                "12190:11:37",
                                                "12202:8:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10516,
                                            "src": "12190:20:37"
                                        },
                                        "referencedDeclaration": 10516,
                                        "src": "12190:20:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$10516_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolInfo"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12189:29:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5070,
                        "nodeType": "FunctionDefinition",
                        "src": "13887:367:37",
                        "nodes": [],
                        "body": {
                            "id": 5069,
                            "nodeType": "Block",
                            "src": "13998:256:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "id": 5061,
                                                                    "name": "_withdrawPool",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17830,
                                                                    "src": "14121:13:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage",
                                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                                    }
                                                                },
                                                                "id": 5062,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "14135:15:37",
                                                                "memberName": "readyToWithdraw",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10364,
                                                                "src": "14121:29:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            },
                                                            {
                                                                "expression": {
                                                                    "id": 5063,
                                                                    "name": "_withdrawPool",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17830,
                                                                    "src": "14182:13:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage",
                                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                                    }
                                                                },
                                                                "id": 5064,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "14196:8:37",
                                                                "memberName": "proceeds",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10367,
                                                                "src": "14182:22:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 5059,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10676,
                                                                "src": "14057:11:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 5060,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "14069:12:37",
                                                            "memberName": "WithdrawPool",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10368,
                                                            "src": "14057:24:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_struct$_WithdrawPool_$10368_storage_ptr_$",
                                                                "typeString": "type(struct IHyperdrive.WithdrawPool storage pointer)"
                                                            }
                                                        },
                                                        "id": 5065,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "structConstructorCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [
                                                            "14104:15:37",
                                                            "14172:8:37"
                                                        ],
                                                        "names": [
                                                            "readyToWithdraw",
                                                            "proceeds"
                                                        ],
                                                        "nodeType": "FunctionCall",
                                                        "src": "14057:166:37",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_WithdrawPool_$10368_memory_ptr",
                                                            "typeString": "struct IHyperdrive.WithdrawPool memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_WithdrawPool_$10368_memory_ptr",
                                                            "typeString": "struct IHyperdrive.WithdrawPool memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5057,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "14029:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5058,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14033:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "14029:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5066,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14029:208:37",
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
                                            "id": 5056,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "14008:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5067,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14008:239:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5068,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14008:239:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11506
                        ],
                        "documentation": {
                            "id": 5050,
                            "nodeType": "StructuredDocumentation",
                            "src": "13769:113:37",
                            "text": "@notice Gets information about the withdrawal pool.\n @return Hyperdrive's withdrawal pool information."
                        },
                        "functionSelector": "fba56008",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getWithdrawPool",
                        "nameLocation": "13896:15:37",
                        "parameters": {
                            "id": 5051,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13911:2:37"
                        },
                        "returnParameters": {
                            "id": 5055,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5054,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5070,
                                    "src": "13961:31:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_WithdrawPool_$10368_memory_ptr",
                                        "typeString": "struct IHyperdrive.WithdrawPool"
                                    },
                                    "typeName": {
                                        "id": 5053,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 5052,
                                            "name": "IHyperdrive.WithdrawPool",
                                            "nameLocations": [
                                                "13961:11:37",
                                                "13973:12:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10368,
                                            "src": "13961:24:37"
                                        },
                                        "referencedDeclaration": 10368,
                                        "src": "13961:24:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage_ptr",
                                            "typeString": "struct IHyperdrive.WithdrawPool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13960:33:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5084,
                        "nodeType": "FunctionDefinition",
                        "src": "14407:132:37",
                        "nodes": [],
                        "body": {
                            "id": 5083,
                            "nodeType": "Block",
                            "src": "14479:60:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 5079,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17848,
                                                        "src": "14508:22:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5077,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "14497:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5078,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14501:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "14497:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5080,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14497:34:37",
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
                                            "id": 5076,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "14489:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5081,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14489:43:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5082,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14489:43:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11499
                        ],
                        "documentation": {
                            "id": 5071,
                            "nodeType": "StructuredDocumentation",
                            "src": "14260:142:37",
                            "text": "@notice Gets info about the fees presently accrued by the pool.\n @return Governance fees denominated in shares yet to be collected."
                        },
                        "functionSelector": "c69e16ad",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUncollectedGovernanceFees",
                        "nameLocation": "14416:28:37",
                        "parameters": {
                            "id": 5072,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14444:2:37"
                        },
                        "returnParameters": {
                            "id": 5075,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5074,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5084,
                                    "src": "14470:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5073,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14470:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14469:9:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5099,
                        "nodeType": "FunctionDefinition",
                        "src": "14618:159:37",
                        "nodes": [],
                        "body": {
                            "id": 5098,
                            "nodeType": "Block",
                            "src": "14727:50:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 5094,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17826,
                                                        "src": "14756:12:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5092,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "14745:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5093,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14749:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "14745:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5095,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14745:24:37",
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
                                            "id": 5091,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "14737:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5096,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14737:33:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5097,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14737:33:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11479
                        ],
                        "documentation": {
                            "id": 5085,
                            "nodeType": "StructuredDocumentation",
                            "src": "14545:68:37",
                            "text": "@notice Gets the market state.\n @return The market state."
                        },
                        "functionSelector": "d8165743",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getMarketState",
                        "nameLocation": "14627:14:37",
                        "parameters": {
                            "id": 5086,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14641:2:37"
                        },
                        "returnParameters": {
                            "id": 5090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5089,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5099,
                                    "src": "14691:30:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$10357_memory_ptr",
                                        "typeString": "struct IHyperdrive.MarketState"
                                    },
                                    "typeName": {
                                        "id": 5088,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 5087,
                                            "name": "IHyperdrive.MarketState",
                                            "nameLocations": [
                                                "14691:11:37",
                                                "14703:11:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10357,
                                            "src": "14691:23:37"
                                        },
                                        "referencedDeclaration": 10357,
                                        "src": "14691:23:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$10357_storage_ptr",
                                            "typeString": "struct IHyperdrive.MarketState"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14690:32:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5159,
                        "nodeType": "FunctionDefinition",
                        "src": "15018:565:37",
                        "nodes": [],
                        "body": {
                            "id": 5158,
                            "nodeType": "Block",
                            "src": "15114:469:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        5113
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 5113,
                                            "mutability": "mutable",
                                            "name": "loaded",
                                            "nameLocation": "15141:6:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 5158,
                                            "src": "15124:23:37",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 5111,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "15124:7:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 5112,
                                                "nodeType": "ArrayTypeName",
                                                "src": "15124:9:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                                    "typeString": "bytes32[]"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 5120,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 5117,
                                                    "name": "_slots",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 5103,
                                                    "src": "15164:6:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                        "typeString": "uint256[] calldata"
                                                    }
                                                },
                                                "id": 5118,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15171:6:37",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "15164:13:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 5116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "15150:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes32[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 5114,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "15154:7:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 5115,
                                                "nodeType": "ArrayTypeName",
                                                "src": "15154:9:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                                    "typeString": "bytes32[]"
                                                }
                                            }
                                        },
                                        "id": 5119,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15150:28:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "15124:54:37"
                                },
                                {
                                    "body": {
                                        "id": 5149,
                                        "nodeType": "Block",
                                        "src": "15286:253:37",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    5130
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 5130,
                                                        "mutability": "mutable",
                                                        "name": "slot",
                                                        "nameLocation": "15308:4:37",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 5149,
                                                        "src": "15300:12:37",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 5129,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "15300:7:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 5134,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "id": 5131,
                                                        "name": "_slots",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5103,
                                                        "src": "15315:6:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                            "typeString": "uint256[] calldata"
                                                        }
                                                    },
                                                    "id": 5133,
                                                    "indexExpression": {
                                                        "id": 5132,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5122,
                                                        "src": "15322:1:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "15315:9:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "15300:24:37"
                                            },
                                            {
                                                "assignments": [
                                                    5136
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 5136,
                                                        "mutability": "mutable",
                                                        "name": "data",
                                                        "nameLocation": "15346:4:37",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 5149,
                                                        "src": "15338:12:37",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 5135,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "15338:7:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 5137,
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "15338:12:37"
                                            },
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "15389:51:37",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "15407:19:37",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "slot",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "15421:4:37"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "sload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "15415:5:37"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "15415:11:37"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "data",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "15407:4:37"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 5136,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "15407:4:37",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 5130,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "15421:4:37",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "flags": [
                                                    "memory-safe"
                                                ],
                                                "id": 5138,
                                                "nodeType": "InlineAssembly",
                                                "src": "15364:76:37"
                                            },
                                            {
                                                "expression": {
                                                    "id": 5143,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 5139,
                                                            "name": "loaded",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5113,
                                                            "src": "15453:6:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                                "typeString": "bytes32[] memory"
                                                            }
                                                        },
                                                        "id": 5141,
                                                        "indexExpression": {
                                                            "id": 5140,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5122,
                                                            "src": "15460:1:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "15453:9:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 5142,
                                                        "name": "data",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5136,
                                                        "src": "15465:4:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "15453:16:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 5144,
                                                "nodeType": "ExpressionStatement",
                                                "src": "15453:16:37"
                                            },
                                            {
                                                "id": 5148,
                                                "nodeType": "UncheckedBlock",
                                                "src": "15483:46:37",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "id": 5146,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "++",
                                                            "prefix": true,
                                                            "src": "15511:3:37",
                                                            "subExpression": {
                                                                "id": 5145,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5122,
                                                                "src": "15513:1:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 5147,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "15511:3:37"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 5128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 5125,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5122,
                                            "src": "15265:1:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 5126,
                                                "name": "_slots",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5103,
                                                "src": "15269:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            },
                                            "id": 5127,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "15276:6:37",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "15269:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "15265:17:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 5150,
                                    "initializationExpression": {
                                        "assignments": [
                                            5122
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 5122,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "15258:1:37",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 5150,
                                                "src": "15250:9:37",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 5121,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "15250:7:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 5124,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 5123,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "15262:1:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "15250:13:37"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "15245:294:37"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 5154,
                                                        "name": "loaded",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 5113,
                                                        "src": "15568:6:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                            "typeString": "bytes32[] memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                            "typeString": "bytes32[] memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5152,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "15557:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5153,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15561:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "15557:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5155,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15557:18:37",
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
                                            "id": 5151,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "15549:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5156,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15549:27:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5157,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15549:27:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11524
                        ],
                        "documentation": {
                            "id": 5100,
                            "nodeType": "StructuredDocumentation",
                            "src": "14783:230:37",
                            "text": "@notice Allows plugin data libs to provide getters or other complex\n         logic instead of the main.\n @param _slots The storage slots the caller wants the data from.\n @return A raw array of loaded data."
                        },
                        "functionSelector": "becee9c3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "load",
                        "nameLocation": "15027:4:37",
                        "parameters": {
                            "id": 5104,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5103,
                                    "mutability": "mutable",
                                    "name": "_slots",
                                    "nameLocation": "15060:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5159,
                                    "src": "15041:25:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 5101,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "15041:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 5102,
                                        "nodeType": "ArrayTypeName",
                                        "src": "15041:9:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15031:41:37"
                        },
                        "returnParameters": {
                            "id": 5108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5107,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5159,
                                    "src": "15096:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 5105,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "15096:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 5106,
                                        "nodeType": "ArrayTypeName",
                                        "src": "15096:9:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                            "typeString": "bytes32[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15095:18:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5181,
                        "nodeType": "FunctionDefinition",
                        "src": "15753:173:37",
                        "nodes": [],
                        "body": {
                            "id": 5180,
                            "nodeType": "Block",
                            "src": "15860:66:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "baseExpression": {
                                                                "id": 5172,
                                                                "name": "_balanceOf",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17866,
                                                                "src": "15889:10:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                                                }
                                                            },
                                                            "id": 5174,
                                                            "indexExpression": {
                                                                "id": 5173,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5162,
                                                                "src": "15900:7:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "15889:19:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 5176,
                                                        "indexExpression": {
                                                            "id": 5175,
                                                            "name": "account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5164,
                                                            "src": "15909:7:37",
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
                                                        "src": "15889:28:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5170,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "15878:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5171,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15882:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "15878:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5177,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15878:40:37",
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
                                            "id": 5169,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "15870:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5178,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15870:49:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5179,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15870:49:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11856
                        ],
                        "documentation": {
                            "id": 5160,
                            "nodeType": "StructuredDocumentation",
                            "src": "15589:159:37",
                            "text": "@notice Gets an account's balance of a sub-token.\n @param tokenId The sub-token id.\n @param account The account.\n @return The balance."
                        },
                        "functionSelector": "3656eec2",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nameLocation": "15762:9:37",
                        "parameters": {
                            "id": 5165,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5162,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "15789:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5181,
                                    "src": "15781:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5161,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15781:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5164,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "15814:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5181,
                                    "src": "15806:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5163,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15806:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15771:56:37"
                        },
                        "returnParameters": {
                            "id": 5168,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5167,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5181,
                                    "src": "15851:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5166,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15851:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15850:9:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5199,
                        "nodeType": "FunctionDefinition",
                        "src": "16061:129:37",
                        "nodes": [],
                        "body": {
                            "id": 5198,
                            "nodeType": "Block",
                            "src": "16131:59:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 5192,
                                                            "name": "_totalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17871,
                                                            "src": "16160:12:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                                "typeString": "mapping(uint256 => uint256)"
                                                            }
                                                        },
                                                        "id": 5194,
                                                        "indexExpression": {
                                                            "id": 5193,
                                                            "name": "tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5184,
                                                            "src": "16173:7:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "16160:21:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5190,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "16149:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5191,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16153:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16149:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5195,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16149:33:37",
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
                                            "id": 5189,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "16141:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5196,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16141:42:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5197,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16141:42:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11824
                        ],
                        "documentation": {
                            "id": 5182,
                            "nodeType": "StructuredDocumentation",
                            "src": "15932:124:37",
                            "text": "@notice Gets the total supply of a sub-token.\n @param tokenId The sub-token id.\n @return The total supply."
                        },
                        "functionSelector": "bd85b039",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nameLocation": "16070:11:37",
                        "parameters": {
                            "id": 5185,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5184,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "16090:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5199,
                                    "src": "16082:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5183,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16082:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16081:17:37"
                        },
                        "returnParameters": {
                            "id": 5188,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5187,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5199,
                                    "src": "16122:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5186,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16122:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16121:9:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5221,
                        "nodeType": "FunctionDefinition",
                        "src": "16379:186:37",
                        "nodes": [],
                        "body": {
                            "id": 5220,
                            "nodeType": "Block",
                            "src": "16491:74:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "baseExpression": {
                                                                "id": 5212,
                                                                "name": "_isApprovedForAll",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17878,
                                                                "src": "16520:17:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                                                    "typeString": "mapping(address => mapping(address => bool))"
                                                                }
                                                            },
                                                            "id": 5214,
                                                            "indexExpression": {
                                                                "id": 5213,
                                                                "name": "account",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5202,
                                                                "src": "16538:7:37",
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
                                                            "src": "16520:26:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 5216,
                                                        "indexExpression": {
                                                            "id": 5215,
                                                            "name": "operator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5204,
                                                            "src": "16547:8:37",
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
                                                        "src": "16520:36:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5210,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "16509:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5211,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16513:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16509:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5217,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16509:48:37",
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
                                            "id": 5209,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "16501:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5218,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16501:57:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5219,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16501:57:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11834
                        ],
                        "documentation": {
                            "id": 5200,
                            "nodeType": "StructuredDocumentation",
                            "src": "16196:178:37",
                            "text": "@notice Gets the approval status of an operator for an account.\n @param account The account.\n @param operator The operator.\n @return The approval status."
                        },
                        "functionSelector": "e985e9c5",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isApprovedForAll",
                        "nameLocation": "16388:16:37",
                        "parameters": {
                            "id": 5205,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5202,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "16422:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5221,
                                    "src": "16414:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5201,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16414:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5204,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "16447:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5221,
                                    "src": "16439:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5203,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16439:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16404:57:37"
                        },
                        "returnParameters": {
                            "id": 5208,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5207,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5221,
                                    "src": "16485:4:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 5206,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16485:4:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16484:6:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5247,
                        "nodeType": "FunctionDefinition",
                        "src": "16793:223:37",
                        "nodes": [],
                        "body": {
                            "id": 5246,
                            "nodeType": "Block",
                            "src": "16933:83:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 5236,
                                                                    "name": "_perTokenApprovals",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17887,
                                                                    "src": "16962:18:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                                                        "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                                                                    }
                                                                },
                                                                "id": 5238,
                                                                "indexExpression": {
                                                                    "id": 5237,
                                                                    "name": "tokenId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 5224,
                                                                    "src": "16981:7:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "16962:27:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                    "typeString": "mapping(address => mapping(address => uint256))"
                                                                }
                                                            },
                                                            "id": 5240,
                                                            "indexExpression": {
                                                                "id": 5239,
                                                                "name": "account",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5226,
                                                                "src": "16990:7:37",
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
                                                            "src": "16962:36:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 5242,
                                                        "indexExpression": {
                                                            "id": 5241,
                                                            "name": "spender",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5228,
                                                            "src": "16999:7:37",
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
                                                        "src": "16962:45:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5234,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "16951:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5235,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16955:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16951:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5243,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16951:57:37",
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
                                            "id": 5233,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "16943:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5244,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16943:66:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5245,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16943:66:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11846
                        ],
                        "documentation": {
                            "id": 5222,
                            "nodeType": "StructuredDocumentation",
                            "src": "16571:217:37",
                            "text": "@notice Gets the approval status of an operator for an account.\n @param tokenId The sub-token id.\n @param account The account.\n @param spender The spender.\n @return The approval status."
                        },
                        "functionSelector": "21ff32a9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "perTokenApprovals",
                        "nameLocation": "16802:17:37",
                        "parameters": {
                            "id": 5229,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5224,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "16837:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5247,
                                    "src": "16829:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5223,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16829:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5226,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "16862:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5247,
                                    "src": "16854:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5225,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16854:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5228,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "16887:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5247,
                                    "src": "16879:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5227,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16879:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16819:81:37"
                        },
                        "returnParameters": {
                            "id": 5232,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5231,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5247,
                                    "src": "16924:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5230,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16924:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16923:9:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5263,
                        "nodeType": "FunctionDefinition",
                        "src": "17196:117:37",
                        "nodes": [],
                        "body": {
                            "id": 5262,
                            "nodeType": "Block",
                            "src": "17254:59:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "id": 5256,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17788,
                                                                "src": "17283:10:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 5257,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "17294:8:37",
                                                            "memberName": "decimals",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9955,
                                                            "src": "17283:19:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                                                                "typeString": "function () view external returns (uint8)"
                                                            }
                                                        },
                                                        "id": 5258,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "17283:21:37",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint8",
                                                            "typeString": "uint8"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint8",
                                                            "typeString": "uint8"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5254,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "17272:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5255,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "17276:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "17272:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5259,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "17272:33:37",
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
                                            "id": 5253,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "17264:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5260,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "17264:42:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5261,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17264:42:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11800
                        ],
                        "documentation": {
                            "id": 5248,
                            "nodeType": "StructuredDocumentation",
                            "src": "17022:169:37",
                            "text": "@notice Gets the decimals of the MultiToken. This is the same as the\n         decimals used by the base token.\n @return The decimals of the MultiToken."
                        },
                        "functionSelector": "313ce567",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nameLocation": "17205:8:37",
                        "parameters": {
                            "id": 5249,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "17213:2:37"
                        },
                        "returnParameters": {
                            "id": 5252,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5251,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5263,
                                    "src": "17247:5:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 5250,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17247:5:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17246:7:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 5282,
                        "nodeType": "FunctionDefinition",
                        "src": "17432:137:37",
                        "nodes": [],
                        "body": {
                            "id": 5281,
                            "nodeType": "Block",
                            "src": "17501:68:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 5276,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5266,
                                                                "src": "17552:7:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 5274,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18265,
                                                                "src": "17530:7:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 5275,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "17538:13:37",
                                                            "memberName": "assetIdToName",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18126,
                                                            "src": "17530:21:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                "typeString": "function (uint256) pure returns (string memory)"
                                                            }
                                                        },
                                                        "id": 5277,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "17530:30:37",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5272,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "17519:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5273,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "17523:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "17519:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5278,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "17519:42:37",
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
                                            "id": 5271,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "17511:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5279,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "17511:51:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5280,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17511:51:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11808
                        ],
                        "documentation": {
                            "id": 5264,
                            "nodeType": "StructuredDocumentation",
                            "src": "17319:108:37",
                            "text": "@notice Gets the name of a sub-token.\n @param tokenId The sub-token id.\n @return The name."
                        },
                        "functionSelector": "00ad800c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nameLocation": "17441:4:37",
                        "parameters": {
                            "id": 5267,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5266,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "17454:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5282,
                                    "src": "17446:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5265,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17446:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17445:17:37"
                        },
                        "returnParameters": {
                            "id": 5270,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5269,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5282,
                                    "src": "17486:13:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 5268,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17486:6:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17485:15:37"
                        },
                        "scope": 5333,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5301,
                        "nodeType": "FunctionDefinition",
                        "src": "17692:141:37",
                        "nodes": [],
                        "body": {
                            "id": 5300,
                            "nodeType": "Block",
                            "src": "17763:70:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 5295,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5285,
                                                                "src": "17816:7:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 5293,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18265,
                                                                "src": "17792:7:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 5294,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "17800:15:37",
                                                            "memberName": "assetIdToSymbol",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18204,
                                                            "src": "17792:23:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                "typeString": "function (uint256) pure returns (string memory)"
                                                            }
                                                        },
                                                        "id": 5296,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "17792:32:37",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5291,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "17781:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5292,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "17785:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "17781:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5297,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "17781:44:37",
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
                                            "id": 5290,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "17773:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5298,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "17773:53:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5299,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17773:53:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11816
                        ],
                        "documentation": {
                            "id": 5283,
                            "nodeType": "StructuredDocumentation",
                            "src": "17575:112:37",
                            "text": "@notice Gets the symbol of a sub-token.\n @param tokenId The sub-token id.\n @return The symbol."
                        },
                        "functionSelector": "4e41a1fb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nameLocation": "17701:6:37",
                        "parameters": {
                            "id": 5286,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5285,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "17716:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5301,
                                    "src": "17708:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5284,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17708:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17707:17:37"
                        },
                        "returnParameters": {
                            "id": 5289,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5288,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5301,
                                    "src": "17748:13:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 5287,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17748:6:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17747:15:37"
                        },
                        "scope": 5333,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5319,
                        "nodeType": "FunctionDefinition",
                        "src": "17982:119:37",
                        "nodes": [],
                        "body": {
                            "id": 5318,
                            "nodeType": "Block",
                            "src": "18047:54:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 5312,
                                                            "name": "_nonces",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17892,
                                                            "src": "18076:7:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 5314,
                                                        "indexExpression": {
                                                            "id": 5313,
                                                            "name": "account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5304,
                                                            "src": "18084:7:37",
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
                                                        "src": "18076:16:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 5310,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "18065:3:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 5311,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "18069:6:37",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "18065:10:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 5315,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "18065:28:37",
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
                                            "id": 5309,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5332,
                                            "src": "18057:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5316,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "18057:37:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5317,
                                    "nodeType": "ExpressionStatement",
                                    "src": "18057:37:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11864
                        ],
                        "documentation": {
                            "id": 5302,
                            "nodeType": "StructuredDocumentation",
                            "src": "17839:138:37",
                            "text": "@notice Gets the permitForAll signature nonce for an account.\n @param account The account.\n @return The signature nonce."
                        },
                        "functionSelector": "7ecebe00",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nonces",
                        "nameLocation": "17991:6:37",
                        "parameters": {
                            "id": 5305,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5304,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "18006:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5319,
                                    "src": "17998:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5303,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17998:7:37",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17997:17:37"
                        },
                        "returnParameters": {
                            "id": 5308,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5307,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5319,
                                    "src": "18038:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5306,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18038:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18037:9:37"
                        },
                        "scope": 5333,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5332,
                        "nodeType": "FunctionDefinition",
                        "src": "18310:106:37",
                        "nodes": [],
                        "body": {
                            "id": 5331,
                            "nodeType": "Block",
                            "src": "18362:54:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "errorCall": {
                                        "arguments": [
                                            {
                                                "id": 5328,
                                                "name": "_bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5322,
                                                "src": "18402:6:37",
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
                                            "expression": {
                                                "id": 5325,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10676,
                                                "src": "18379:11:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 5327,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18391:10:37",
                                            "memberName": "ReturnData",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10612,
                                            "src": "18379:22:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5329,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "18379:30:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5330,
                                    "nodeType": "RevertStatement",
                                    "src": "18372:37:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 5320,
                            "nodeType": "StructuredDocumentation",
                            "src": "18128:177:37",
                            "text": "@dev Reverts with the provided bytes. This is useful in getters used\n      with the force-revert delegatecall pattern.\n @param _bytes The bytes to revert with."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_revert",
                        "nameLocation": "18319:7:37",
                        "parameters": {
                            "id": 5323,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5322,
                                    "mutability": "mutable",
                                    "name": "_bytes",
                                    "nameLocation": "18340:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5332,
                                    "src": "18327:19:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 5321,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18327:5:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18326:21:37"
                        },
                        "returnParameters": {
                            "id": 5324,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "18362:0:37"
                        },
                        "scope": 5333,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 4548,
                            "name": "IHyperdriveRead",
                            "nameLocations": [
                                "1262:15:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11525,
                            "src": "1262:15:37"
                        },
                        "id": 4549,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1262:15:37"
                    },
                    {
                        "baseName": {
                            "id": 4550,
                            "name": "HyperdriveAdmin",
                            "nameLocations": [
                                "1283:15:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12819,
                            "src": "1283:15:37"
                        },
                        "id": 4551,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1283:15:37"
                    },
                    {
                        "baseName": {
                            "id": 4552,
                            "name": "HyperdriveMultiToken",
                            "nameLocations": [
                                "1304:20:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 16779,
                            "src": "1304:20:37"
                        },
                        "id": 4553,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1304:20:37"
                    },
                    {
                        "baseName": {
                            "id": 4554,
                            "name": "HyperdriveLP",
                            "nameLocations": [
                                "1330:12:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 15361,
                            "src": "1330:12:37"
                        },
                        "id": 4555,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1330:12:37"
                    },
                    {
                        "baseName": {
                            "id": 4556,
                            "name": "HyperdriveLong",
                            "nameLocations": [
                                "1348:14:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 16295,
                            "src": "1348:14:37"
                        },
                        "id": 4557,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1348:14:37"
                    },
                    {
                        "baseName": {
                            "id": 4558,
                            "name": "HyperdriveShort",
                            "nameLocations": [
                                "1368:15:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17765,
                            "src": "1368:15:37"
                        },
                        "id": 4559,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1368:15:37"
                    },
                    {
                        "baseName": {
                            "id": 4560,
                            "name": "HyperdriveCheckpoint",
                            "nameLocations": [
                                "1389:20:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14459,
                            "src": "1389:20:37"
                        },
                        "id": 4561,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1389:20:37"
                    }
                ],
                "canonicalName": "HyperdriveTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 4547,
                    "nodeType": "StructuredDocumentation",
                    "src": "899:320:37",
                    "text": "@author DELV\n @title HyperdriveTarget0\n @notice Hyperdrive's target 0 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    5333,
                    14459,
                    17765,
                    16295,
                    15361,
                    16779,
                    12819,
                    13995,
                    17990,
                    71674,
                    11205,
                    11777,
                    11525,
                    11865
                ],
                "name": "HyperdriveTarget0",
                "nameLocation": "1237:17:37",
                "scope": 5334,
                "usedErrors": [
                    10535,
                    10541,
                    10544,
                    10553,
                    10562,
                    10565,
                    10574,
                    10577,
                    10580,
                    10583,
                    10607,
                    10612,
                    10615,
                    10624,
                    10639,
                    71049,
                    71330,
                    71335,
                    71338,
                    71619
                ],
                "usedEvents": [
                    11025,
                    11040,
                    11059,
                    11074,
                    11091,
                    11110,
                    11129,
                    11150,
                    11163,
                    11170,
                    11175,
                    11180,
                    11185,
                    11192,
                    11197,
                    11204,
                    11758,
                    11767,
                    11776
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 37
};
