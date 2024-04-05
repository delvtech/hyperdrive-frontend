export const StETHTarget0 = {
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
                    "name": "_config",
                    "type": "tuple"
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
                    "name": "checkpointVaultSharePrice",
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
            "stateMutability": "pure",
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
        "object": "0x6102406040523480156200001257600080fd5b5060405162004340380380620043408339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051613f5b620003e560003960008181610ac10152611a88015260008181610a9a0152611a4b015260008181610b3b0152611c40015260008181610b150152611c1a015260008181610aeb0152611bf401526000610c6b01526000610c4601526000610c2101526000610bfe015260008181610bae0152611c66015260008181610b6101528181610dec01526122fb015260008181610b87015261259c01526000818161054701528181610a6e0152818161205f0152818161223c015281816124b00152612528015260008181610a490152610d930152613f5b6000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637180c8ca1161011a578063becee9c3116100ad578063d81657431161007c578063d816574314610470578063e44808bc14610485578063e4af29d114610498578063e985e9c5146104ab578063fba56008146104be57600080fd5b8063becee9c31461042d578063c55dae631461044d578063c69e16ad14610455578063cf210e651461045d57600080fd5b8063a42dce80116100e9578063a42dce80146103df578063ab033ea9146103f2578063b0d9658014610405578063bd85b0391461041a57600080fd5b80637180c8ca146103935780637ecebe00146103a65780639cd241af146103b9578063a22cb465146103cc57600080fd5b806321ff32a91161019257806346fbf68e1161016157806346fbf68e146103355780634e41a1fb146103585780634ed2d6ac1461036b57806360246c881461037e57600080fd5b806321ff32a9146102d4578063313ce567146102f55780633656eec21461030f5780633e691db91461032257600080fd5b806314e5f07b116101ce57806314e5f07b1461027057806317fad7fc146102835780631c0f12b61461029657806320fc4881146102a957600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d5780630a4e149314610250575b600080fd5b61021261020d366004613479565b6104ed565b60405161021f91906134e2565b60405180910390f35b61023b61023636600461350a565b610524565b005b61023b61024b366004613535565b610530565b610258610539565b6040516001600160a01b03909116815260200161021f565b61023b61027e366004613552565b61057c565b61023b61029136600461362c565b610598565b61023b6102a43660046136c1565b6105ae565b6102bc6102b7366004613479565b6105c1565b60405190516001600160801b0316815260200161021f565b6102e76102e2366004613709565b610602565b60405190815260200161021f565b6102fd610648565b60405160ff909116815260200161021f565b6102e761031d36600461374b565b610660565b6102e761033036600461377b565b610699565b61034861034336600461350a565b6106a4565b604051901515815260200161021f565b610212610366366004613479565b6106da565b61023b6103793660046137b6565b6106e8565b610386610736565b60405161021f9190613800565b61023b6103a13660046138a1565b610963565b6102e76103b436600461350a565b610971565b61023b6103c73660046138cf565b61099d565b61023b6103da3660046138a1565b6109ae565b61023b6103ed36600461350a565b610a1a565b61023b61040036600461350a565b610a23565b61040d610a2c565b60405161021f9190613907565b6102e7610428366004613479565b610ca8565b61044061043b366004613a1b565b610cca565b60405161021f9190613a5d565b610258610d85565b6102e7610dc5565b6102e761046b366004613479565b610ddf565b610478610e28565b60405161021f9190613aa1565b61023b610493366004613bb2565b610f34565b61023b6104a636600461350a565b610f7c565b6103486104b9366004613c11565b610f85565b6104c6610fc9565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b606061051f6104fb83611028565b60405160200161050b91906134e2565b604051602081830303815290604052611150565b919050565b61052d81611174565b50565b61052d816112f8565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b90565b61058d89898989898989898961137b565b505050505050505050565b6105a6868686868686611572565b505050505050565b6105bb8484848433611626565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610641910161050b565b9392505050565b6040805160126020820152600091610579910161050b565b6000828152600d602090815260408083206001600160a01b0385168452825280832054815192830152610693910161050b565b92915050565b6000610693826117e7565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb8361190f565b836106f281611a0d565b6001600160a01b0316336001600160a01b03161461072357604051632aab8bd360e01b815260040160405180910390fd5b61072f85858585611aca565b5050505050565b6107af604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107b9611b37565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108249190613c6b565b61082e9190613c7e565b9050600080831161084057600061085b565b61085b8361085561085086611b4f565b611ce5565b90611d15565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a08101841561092f5761092a8486611d2a565b610932565b60005b81526002546001600160801b031660209182015260405191925061095c9161050b91849101613800565b5050505090565b61096d8282611d3f565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b6109a983838333611aca565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611dc8565b61052d81611e3c565b610a346133a9565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105799261050b929101613907565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610ce757610ce7613c91565b604051908082528060200260200182016040528015610d10578160200160208202803683370190505b50905060005b83811015610d69576000858583818110610d3257610d32613ca7565b90506020020135905060008154905080848481518110610d5457610d54613ca7565b60209081029190910101525050600101610d16565b50610d7e8160405160200161050b9190613a5d565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b6000610579600b5460405160200161050b91815260200190565b600061051f610e16610e117f000000000000000000000000000000000000000000000000000000000000000085613c6b565b611eb0565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610579600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610f3e81611a0d565b6001600160a01b0316336001600160a01b031614610f6f57604051632aab8bd360e01b815260040160405180910390fd5b6105a68686868686611626565b61052d81611ef4565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610693910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105799060600161050b565b606060f882901c6001600160f81b038316600061104482611f68565b9050600083600381111561105a5761105a613c3f565b0361108c576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611148565b60018360038111156110a0576110a0613c3f565b036110cc57806040516020016110b69190613cbd565b6040516020818303038152906040529350611148565b60028360038111156110e0576110e0613c3f565b036110f657806040516020016110b69190613cf6565b600383600381111561110a5761110a613c3f565b03611148576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161116b91906134e2565b60405180910390fd5b61117c61201d565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156111b45750336001600160a01b03821614155b80156111cb5750600a546001600160a01b03163314155b156111e8576040516282b42960e81b815260040160405180910390fd5b6000806111f3612047565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038616906370a0823190602401602060405180830381865afa15801561123d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112619190613d30565b90506112776001600160a01b03861685836120d2565b8215158061128c575081611289612047565b14155b156112aa576040516313dd85ff60e31b815260040160405180910390fd5b846001600160a01b0316846001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050505061052d6001600055565b336000908152600c602052604090205460ff16611327576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061137090831515815260200190565b60405180910390a150565b8342111561139c5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166113c35760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156114b1573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146114ef57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061158f57506001600160a01b038516155b156115ad5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146115cd5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561161d576116158585838181106115ed576115ed613ca7565b90506020020135888886868681811061160857611608613ca7565b9050602002013533611626565b6001016115d0565b50505050505050565b6001600160a01b038416158061164357506001600160a01b038316155b156116615760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611725576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117255760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117235760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061171d908490613c7e565b90915550505b505b6000858152600d602090815260408083206001600160a01b038816845290915281208054849290611757908490613c7e565b90915550506000858152600d602090815260408083206001600160a01b03871684529091528120805484929061178e908490613c6b565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006117f161201d565b6117fa82612124565b6008546001600160a01b031680611814602085018561350a565b6001600160a01b03161461183b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118645750336001600160a01b03821614155b801561187b5750600a546001600160a01b03163314155b15611898576040516282b42960e81b815260040160405180910390fd5b60006118a2611b37565b600b805460009091559091506118b981838761215a565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476118f18685896121f4565b60405190815260200160405180910390a250505061051f6001600055565b606060f882901c6001600160f81b038316600061192b82611f68565b9050600083600381111561194157611941613c3f565b03611973576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611148565b600183600381111561198757611987613c3f565b0361199d57806040516020016110b69190613d49565b60028360038111156119b1576119b1613c3f565b036119c757806040516020016110b69190613d81565b60038360038111156119db576119db613c3f565b0361114857505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611b4a670de0b6b3a7640000612223565b905090565b611bb36040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611cab91166122b0565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611cdd929004166122b0565b905292915050565b6000806000611cf384612326565b9150915080610d7e57604051635516328b60e11b815260040160405180910390fd5b60006106418383670de0b6b3a76400006123b3565b600061064183670de0b6b3a7640000846123b3565b600a546001600160a01b03163314611d69576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611df2576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611e66576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611ed8600e6000611ec46002866123d1565b815260200190815260200160002054612406565b611eea600e6000611ec46001876123d1565b6106939190613dad565b600a546001600160a01b03163314611f1e576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561200f57611fa3600a86613de3565b611fae906030613c6b565b60f81b826001611fbe8487613c7e565b611fc89190613c7e565b81518110611fd857611fd8613ca7565b60200101906001600160f81b031916908160001a90535080611ff981613df7565b91506120089050600a86613e10565b9450611f92565b918290030190815292915050565b60026000540361204057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604051633d7ad0b760e21b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5eb42dc90602401602060405180830381865afa1580156120ae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4a9190613d30565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526109a9908490612434565b6000612133602083018361350a565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121678585611d15565b905061217281612497565b945084600003612186576000915050610641565b6121966040840160208501613535565b156121c5576121be856121ac602086018661350a565b6121b96040870187613e24565b6124e7565b91506121ec565b6121e8856121d6602086018661350a565b6121e36040870187613e24565b612502565b8491505b509392505050565b60006122066040830160208401613535565b15612212575082610641565b61221c8484611d15565b9050610641565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa15801561228c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106939190613d30565b600080670de0b6b3a76400006122c4612595565b6122ce9190613e6b565b90508083116122de5760006122e8565b6122e88184613c7e565b915061064161231f670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613e6b565b8390611d2a565b6000806000806000612337866125cb565b915091508061234e57506000958695509350505050565b61235b8660a00151612406565b61236487612905565b836123728960000151612406565b61237c9190613e82565b6123869190613e82565b6123909190613dad565b9250505060008112156123a95750600093849350915050565b9360019350915050565b60008260001904841183021582026123ca57600080fd5b5091020490565b60006001600160f81b038211156123fb5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124305760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124496001600160a01b03841683612969565b9050805160001415801561246e57508080602001905181019061246c9190613ea2565b155b156109a957604051635274afe760e01b81526001600160a01b038416600482015260240161116b565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063192084519060240161226f565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af1158015612571573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f9190613d30565b60006125c17f000000000000000000000000000000000000000000000000000000000000000042613de3565b611b4a9042613c7e565b60008060006125f56125f0856101600151866101400151611d1590919063ffffffff16565b612406565b6126156125f086610120015187610100015161297790919063ffffffff16565b61261f9190613dad565b90506000806126368660000151876020015161298c565b915091508061264d57506000958695509350505050565b600083131561279d576000839050600061269b886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061268c9190613c7e565b8d606001518e608001516129cb565b93509050826126b4575060009788975095505050505050565b8181106127525760006126ee858a60400151858c60e00151670de0b6b3a76400006126df9190613c7e565b8d606001518e60800151612add565b945090508315801561270357508860c0015183105b1561271a5750600098600198509650505050505050565b8361273057506000988998509650505050505050565b61273981612406565b61274290613ebf565b9960019950975050505050505050565b6000886020015112612789576127718860a00151856125f09190613c7e565b61277a90613ebf565b98600198509650505050505050565b60a08801518851612771916125f091613c7e565b60008312156128f65760006127b184613ebf565b905060006127e58489604001518a60e00151670de0b6b3a76400006127d69190613c7e565b8b606001518c60800151612ba0565b93509050826127fe575060009788975095505050505050565b818110612883576000612838858a60400151858c60e00151670de0b6b3a76400006128299190613c7e565b8d606001518e60800151612c4c565b945090508315801561284d57508860c0015183105b156128645750600098600198509650505050505050565b8361287a57506000988998509650505050505050565b61274281612406565b60006128b5858a604001518b60e00151670de0b6b3a76400006128a69190613c7e565b8c606001518d60800151612d23565b94509050836128cf57506000988998509650505050505050565b6127426128ec8a6060015184866128e69190613c7e565b90611d2a565b6125f09083613c6b565b50600095600195509350505050565b60006129386125f0836101200151670de0b6b3a76400006129269190613c7e565b60608501516101008601519190612dd2565b611eea6125f0846101600151670de0b6b3a76400006129579190613c7e565b606086015161014087015191906123b3565b606061064183836000612df8565b60006106418383670de0b6b3a7640000612dd2565b60008060008361299b86612406565b6129a59190613dad565b905060008112156129bd5760008092509250506129c4565b9150600190505b9250929050565b60008060008812156129ed576129e088613ebf565b6129ea9087613c6b565b95505b6000806129fa8b8b61298c565b9150915080612a1157600080935093505050612ad1565b6000612a20838b8a8a8a612e95565b90506000612a43612a3b8a612a358a8e612977565b90612ec4565b899089612dd2565b905080821015612a5d576000809550955050505050612ad1565b808203670de0b6b3a76400008110612a9257612a8b612a84670de0b6b3a76400008c611d2a565b8290612ec4565b9050612aaa565b612aa7612a84670de0b6b3a76400008c612f2f565b90505b8b811015612ac357600080965096505050505050612ad1565b8b9003955060019450505050505b97509795505050505050565b6000806000612aef8989888888612f44565b9050612aff86612a35898b613c6b565b975087811015612b16576000809250925050612b95565b878103612b24818688612dd2565b9050670de0b6b3a76400008110612b5157612b4a612a84670de0b6b3a764000089612f2f565b9050612b69565b612b66612a84670de0b6b3a764000089611d2a565b90505b612b738186612f2f565b9050808a1015612b8b57600080935093505050612b95565b8903925060019150505b965096945050505050565b6000806000612bb28888888888612f44565b90506000612bdd670de0b6b3a7640000612bcc8888611d2a565b612bd69190613c6b565b8390612f2f565b9050670de0b6b3a76400008110612c0a57612c03612a84670de0b6b3a764000089612f2f565b9050612c22565b612c1f612a84670de0b6b3a764000089611d2a565b90505b80881015612c3857600080935093505050612c42565b8703925060019150505b9550959350505050565b6000806000612c5e8989888888612f44565b905086881015612c75576000809250925050612b95565b9686900396612c848887612ec4565b975087811015612c9b576000809250925050612b95565b878103612ca9818688612dd2565b9050670de0b6b3a76400008110612cd657612ccf612a84670de0b6b3a764000089612f2f565b9050612cee565b612ceb612a84670de0b6b3a764000089611d2a565b90505b612cf88186612f2f565b905089811015612d1057600080935093505050612b95565b9890980398600198509650505050505050565b6000806000612d358888888888612e95565b90506000612d59670de0b6b3a7640000612d4f8888612f2f565b61231f9190613c6b565b9050670de0b6b3a76400008110612d8657612d7f612a84670de0b6b3a764000089611d2a565b9050612d9e565b612d9b612a84670de0b6b3a764000089612f2f565b90505b612da88186611d2a565b905088811015612dc057600080935093505050612c42565b97909703976001975095505050505050565b6000826000190484118302158202612de957600080fd5b50910281810615159190040190565b606081471015612e1d5760405163cd78605960e01b815230600482015260240161116b565b600080856001600160a01b03168486604051612e399190613edb565b60006040518083038185875af1925050503d8060008114612e76576040519150601f19603f3d011682016040523d82523d6000602084013e612e7b565b606091505b5091509150612e8b868383612f69565b9695505050505050565b6000612ea18585612ec4565b612eba612eb286612a35868b611d15565b8590856123b3565b612e8b9190613c6b565b600081600003612edd5750670de0b6b3a7640000610693565b82600003612eed57506000610693565b6000612ef883612406565b90506000612f0d612f0886612406565b612fc5565b9050818102612f24670de0b6b3a764000082613ef7565b9050612e8b816131eb565b600061064183670de0b6b3a764000084612dd2565b6000612f508585612ec4565b612eba612f6186612a35868b612977565b859085612dd2565b606082612f7e57612f7982613380565b610641565b8151158015612f9557506001600160a01b0384163b155b15612fbe57604051639996b31560e01b81526001600160a01b038516600482015260240161116b565b5080610641565b6000808213612fe75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061306a9084901c612406565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361320657506000919050565b680755bf798b4a1bf1e5821261322f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e8b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c612406565b8051156133905780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016134746040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561348b57600080fd5b5035919050565b60005b838110156134ad578181015183820152602001613495565b50506000910152565b600081518084526134ce816020860160208601613492565b601f01601f19169290920160200192915050565b60208152600061064160208301846134b6565b6001600160a01b038116811461052d57600080fd5b60006020828403121561351c57600080fd5b8135610641816134f5565b801515811461052d57600080fd5b60006020828403121561354757600080fd5b813561064181613527565b60008060008060008060008060006101208a8c03121561357157600080fd5b8935985060208a0135975060408a013561358a816134f5565b965060608a013561359a816134f5565b955060808a01356135aa81613527565b945060a08a0135935060c08a013560ff811681146135c757600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126135f957600080fd5b50813567ffffffffffffffff81111561361157600080fd5b6020830191508360208260051b85010111156129c457600080fd5b6000806000806000806080878903121561364557600080fd5b8635613650816134f5565b95506020870135613660816134f5565b9450604087013567ffffffffffffffff8082111561367d57600080fd5b6136898a838b016135e7565b909650945060608901359150808211156136a257600080fd5b506136af89828a016135e7565b979a9699509497509295939492505050565b600080600080608085870312156136d757600080fd5b8435935060208501356136e9816134f5565b925060408501356136f9816134f5565b9396929550929360600135925050565b60008060006060848603121561371e57600080fd5b833592506020840135613730816134f5565b91506040840135613740816134f5565b809150509250925092565b6000806040838503121561375e57600080fd5b823591506020830135613770816134f5565b809150509250929050565b60006020828403121561378d57600080fd5b813567ffffffffffffffff8111156137a457600080fd5b82016060818503121561064157600080fd5b600080600080608085870312156137cc57600080fd5b8435935060208501356137de816134f5565b92506040850135915060608501356137f5816134f5565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156138b457600080fd5b82356138bf816134f5565b9150602083013561377081613527565b6000806000606084860312156138e457600080fd5b8335925060208401356138f6816134f5565b929592945050506040919091013590565b81516001600160a01b031681526102208101602083015161393360208401826001600160a01b03169052565b50604083015161394e60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516139b4828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613a2e57600080fd5b823567ffffffffffffffff811115613a4557600080fd5b613a51858286016135e7565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613a9557835183529284019291840191600101613a79565b50909695505050505050565b81516001600160801b0316815261018081016020830151613acd60208401826001600160801b03169052565b506040830151613ae860408401826001600160801b03169052565b506060830151613b0360608401826001600160801b03169052565b506080830151613b186080840182600f0b9052565b5060a0830151613b3360a08401826001600160801b03169052565b5060c0830151613b4e60c08401826001600160801b03169052565b5060e0830151613b6960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613a13565b600080600080600060a08688031215613bca57600080fd5b853594506020860135613bdc816134f5565b93506040860135613bec816134f5565b9250606086013591506080860135613c03816134f5565b809150509295509295909350565b60008060408385031215613c2457600080fd5b8235613c2f816134f5565b91506020830135613770816134f5565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561069357610693613c55565b8181038181111561069357610693613c55565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613ce9816011850160208701613492565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613d23816012850160208701613492565b9190910160120192915050565b600060208284031215613d4257600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613d74816010850160208701613492565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613ce9816011850160208701613492565b8181036000831280158383131683831282161715610d7e57610d7e613c55565b634e487b7160e01b600052601260045260246000fd5b600082613df257613df2613dcd565b500690565b600060018201613e0957613e09613c55565b5060010190565b600082613e1f57613e1f613dcd565b500490565b6000808335601e19843603018112613e3b57600080fd5b83018035915067ffffffffffffffff821115613e5657600080fd5b6020019150368190038213156129c457600080fd5b808202811582820484141761069357610693613c55565b8082018281126000831280158216821582161715613a1357613a13613c55565b600060208284031215613eb457600080fd5b815161064181613527565b6000600160ff1b8201613ed457613ed4613c55565b5060000390565b60008251613eed818460208701613492565b9190910192915050565b600082613f0657613f06613dcd565b600160ff1b821460001984141615613f2057613f20613c55565b50059056fea2646970667358221220c9ca8e72a97722af0b8eefcb5b7ffcf9b050a97ec8c03066950326493ae6e6c564736f6c63430008140033",
        "sourceMap": "684:498:74:-:0;;;859:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;;;5345:24;;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;;6632:12;;;;;:18;6620:30;;;6671:12;;:17;;6660:28;;;;6717:12;;-1:-1:-1;6717:25:118;;;;6698:44;;;;6775:12;;-1:-1:-1;6775:29:118;;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;-1:-1:-1;;;;;;7041:32:118;;;;;;;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;7147:22;;;;7129:15;:40;;;;;;;;;;684:498:74;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;684:498:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637180c8ca1161011a578063becee9c3116100ad578063d81657431161007c578063d816574314610470578063e44808bc14610485578063e4af29d114610498578063e985e9c5146104ab578063fba56008146104be57600080fd5b8063becee9c31461042d578063c55dae631461044d578063c69e16ad14610455578063cf210e651461045d57600080fd5b8063a42dce80116100e9578063a42dce80146103df578063ab033ea9146103f2578063b0d9658014610405578063bd85b0391461041a57600080fd5b80637180c8ca146103935780637ecebe00146103a65780639cd241af146103b9578063a22cb465146103cc57600080fd5b806321ff32a91161019257806346fbf68e1161016157806346fbf68e146103355780634e41a1fb146103585780634ed2d6ac1461036b57806360246c881461037e57600080fd5b806321ff32a9146102d4578063313ce567146102f55780633656eec21461030f5780633e691db91461032257600080fd5b806314e5f07b116101ce57806314e5f07b1461027057806317fad7fc146102835780631c0f12b61461029657806320fc4881146102a957600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d5780630a4e149314610250575b600080fd5b61021261020d366004613479565b6104ed565b60405161021f91906134e2565b60405180910390f35b61023b61023636600461350a565b610524565b005b61023b61024b366004613535565b610530565b610258610539565b6040516001600160a01b03909116815260200161021f565b61023b61027e366004613552565b61057c565b61023b61029136600461362c565b610598565b61023b6102a43660046136c1565b6105ae565b6102bc6102b7366004613479565b6105c1565b60405190516001600160801b0316815260200161021f565b6102e76102e2366004613709565b610602565b60405190815260200161021f565b6102fd610648565b60405160ff909116815260200161021f565b6102e761031d36600461374b565b610660565b6102e761033036600461377b565b610699565b61034861034336600461350a565b6106a4565b604051901515815260200161021f565b610212610366366004613479565b6106da565b61023b6103793660046137b6565b6106e8565b610386610736565b60405161021f9190613800565b61023b6103a13660046138a1565b610963565b6102e76103b436600461350a565b610971565b61023b6103c73660046138cf565b61099d565b61023b6103da3660046138a1565b6109ae565b61023b6103ed36600461350a565b610a1a565b61023b61040036600461350a565b610a23565b61040d610a2c565b60405161021f9190613907565b6102e7610428366004613479565b610ca8565b61044061043b366004613a1b565b610cca565b60405161021f9190613a5d565b610258610d85565b6102e7610dc5565b6102e761046b366004613479565b610ddf565b610478610e28565b60405161021f9190613aa1565b61023b610493366004613bb2565b610f34565b61023b6104a636600461350a565b610f7c565b6103486104b9366004613c11565b610f85565b6104c6610fc9565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b606061051f6104fb83611028565b60405160200161050b91906134e2565b604051602081830303815290604052611150565b919050565b61052d81611174565b50565b61052d816112f8565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b90565b61058d89898989898989898961137b565b505050505050505050565b6105a6868686868686611572565b505050505050565b6105bb8484848433611626565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610641910161050b565b9392505050565b6040805160126020820152600091610579910161050b565b6000828152600d602090815260408083206001600160a01b0385168452825280832054815192830152610693910161050b565b92915050565b6000610693826117e7565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb8361190f565b836106f281611a0d565b6001600160a01b0316336001600160a01b03161461072357604051632aab8bd360e01b815260040160405180910390fd5b61072f85858585611aca565b5050505050565b6107af604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107b9611b37565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108249190613c6b565b61082e9190613c7e565b9050600080831161084057600061085b565b61085b8361085561085086611b4f565b611ce5565b90611d15565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a08101841561092f5761092a8486611d2a565b610932565b60005b81526002546001600160801b031660209182015260405191925061095c9161050b91849101613800565b5050505090565b61096d8282611d3f565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b6109a983838333611aca565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611dc8565b61052d81611e3c565b610a346133a9565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105799261050b929101613907565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610ce757610ce7613c91565b604051908082528060200260200182016040528015610d10578160200160208202803683370190505b50905060005b83811015610d69576000858583818110610d3257610d32613ca7565b90506020020135905060008154905080848481518110610d5457610d54613ca7565b60209081029190910101525050600101610d16565b50610d7e8160405160200161050b9190613a5d565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b6000610579600b5460405160200161050b91815260200190565b600061051f610e16610e117f000000000000000000000000000000000000000000000000000000000000000085613c6b565b611eb0565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610579600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610f3e81611a0d565b6001600160a01b0316336001600160a01b031614610f6f57604051632aab8bd360e01b815260040160405180910390fd5b6105a68686868686611626565b61052d81611ef4565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610693910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105799060600161050b565b606060f882901c6001600160f81b038316600061104482611f68565b9050600083600381111561105a5761105a613c3f565b0361108c576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611148565b60018360038111156110a0576110a0613c3f565b036110cc57806040516020016110b69190613cbd565b6040516020818303038152906040529350611148565b60028360038111156110e0576110e0613c3f565b036110f657806040516020016110b69190613cf6565b600383600381111561110a5761110a613c3f565b03611148576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161116b91906134e2565b60405180910390fd5b61117c61201d565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156111b45750336001600160a01b03821614155b80156111cb5750600a546001600160a01b03163314155b156111e8576040516282b42960e81b815260040160405180910390fd5b6000806111f3612047565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038616906370a0823190602401602060405180830381865afa15801561123d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112619190613d30565b90506112776001600160a01b03861685836120d2565b8215158061128c575081611289612047565b14155b156112aa576040516313dd85ff60e31b815260040160405180910390fd5b846001600160a01b0316846001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050505061052d6001600055565b336000908152600c602052604090205460ff16611327576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061137090831515815260200190565b60405180910390a150565b8342111561139c5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166113c35760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156114b1573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146114ef57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061158f57506001600160a01b038516155b156115ad5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146115cd5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561161d576116158585838181106115ed576115ed613ca7565b90506020020135888886868681811061160857611608613ca7565b9050602002013533611626565b6001016115d0565b50505050505050565b6001600160a01b038416158061164357506001600160a01b038316155b156116615760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611725576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117255760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117235760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061171d908490613c7e565b90915550505b505b6000858152600d602090815260408083206001600160a01b038816845290915281208054849290611757908490613c7e565b90915550506000858152600d602090815260408083206001600160a01b03871684529091528120805484929061178e908490613c6b565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006117f161201d565b6117fa82612124565b6008546001600160a01b031680611814602085018561350a565b6001600160a01b03161461183b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118645750336001600160a01b03821614155b801561187b5750600a546001600160a01b03163314155b15611898576040516282b42960e81b815260040160405180910390fd5b60006118a2611b37565b600b805460009091559091506118b981838761215a565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476118f18685896121f4565b60405190815260200160405180910390a250505061051f6001600055565b606060f882901c6001600160f81b038316600061192b82611f68565b9050600083600381111561194157611941613c3f565b03611973576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611148565b600183600381111561198757611987613c3f565b0361199d57806040516020016110b69190613d49565b60028360038111156119b1576119b1613c3f565b036119c757806040516020016110b69190613d81565b60038360038111156119db576119db613c3f565b0361114857505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611b4a670de0b6b3a7640000612223565b905090565b611bb36040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611cab91166122b0565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611cdd929004166122b0565b905292915050565b6000806000611cf384612326565b9150915080610d7e57604051635516328b60e11b815260040160405180910390fd5b60006106418383670de0b6b3a76400006123b3565b600061064183670de0b6b3a7640000846123b3565b600a546001600160a01b03163314611d69576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611df2576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611e66576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611ed8600e6000611ec46002866123d1565b815260200190815260200160002054612406565b611eea600e6000611ec46001876123d1565b6106939190613dad565b600a546001600160a01b03163314611f1e576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561200f57611fa3600a86613de3565b611fae906030613c6b565b60f81b826001611fbe8487613c7e565b611fc89190613c7e565b81518110611fd857611fd8613ca7565b60200101906001600160f81b031916908160001a90535080611ff981613df7565b91506120089050600a86613e10565b9450611f92565b918290030190815292915050565b60026000540361204057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604051633d7ad0b760e21b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5eb42dc90602401602060405180830381865afa1580156120ae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4a9190613d30565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526109a9908490612434565b6000612133602083018361350a565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121678585611d15565b905061217281612497565b945084600003612186576000915050610641565b6121966040840160208501613535565b156121c5576121be856121ac602086018661350a565b6121b96040870187613e24565b6124e7565b91506121ec565b6121e8856121d6602086018661350a565b6121e36040870187613e24565b612502565b8491505b509392505050565b60006122066040830160208401613535565b15612212575082610641565b61221c8484611d15565b9050610641565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa15801561228c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106939190613d30565b600080670de0b6b3a76400006122c4612595565b6122ce9190613e6b565b90508083116122de5760006122e8565b6122e88184613c7e565b915061064161231f670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613e6b565b8390611d2a565b6000806000806000612337866125cb565b915091508061234e57506000958695509350505050565b61235b8660a00151612406565b61236487612905565b836123728960000151612406565b61237c9190613e82565b6123869190613e82565b6123909190613dad565b9250505060008112156123a95750600093849350915050565b9360019350915050565b60008260001904841183021582026123ca57600080fd5b5091020490565b60006001600160f81b038211156123fb5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124305760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124496001600160a01b03841683612969565b9050805160001415801561246e57508080602001905181019061246c9190613ea2565b155b156109a957604051635274afe760e01b81526001600160a01b038416600482015260240161116b565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063192084519060240161226f565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af1158015612571573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f9190613d30565b60006125c17f000000000000000000000000000000000000000000000000000000000000000042613de3565b611b4a9042613c7e565b60008060006125f56125f0856101600151866101400151611d1590919063ffffffff16565b612406565b6126156125f086610120015187610100015161297790919063ffffffff16565b61261f9190613dad565b90506000806126368660000151876020015161298c565b915091508061264d57506000958695509350505050565b600083131561279d576000839050600061269b886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061268c9190613c7e565b8d606001518e608001516129cb565b93509050826126b4575060009788975095505050505050565b8181106127525760006126ee858a60400151858c60e00151670de0b6b3a76400006126df9190613c7e565b8d606001518e60800151612add565b945090508315801561270357508860c0015183105b1561271a5750600098600198509650505050505050565b8361273057506000988998509650505050505050565b61273981612406565b61274290613ebf565b9960019950975050505050505050565b6000886020015112612789576127718860a00151856125f09190613c7e565b61277a90613ebf565b98600198509650505050505050565b60a08801518851612771916125f091613c7e565b60008312156128f65760006127b184613ebf565b905060006127e58489604001518a60e00151670de0b6b3a76400006127d69190613c7e565b8b606001518c60800151612ba0565b93509050826127fe575060009788975095505050505050565b818110612883576000612838858a60400151858c60e00151670de0b6b3a76400006128299190613c7e565b8d606001518e60800151612c4c565b945090508315801561284d57508860c0015183105b156128645750600098600198509650505050505050565b8361287a57506000988998509650505050505050565b61274281612406565b60006128b5858a604001518b60e00151670de0b6b3a76400006128a69190613c7e565b8c606001518d60800151612d23565b94509050836128cf57506000988998509650505050505050565b6127426128ec8a6060015184866128e69190613c7e565b90611d2a565b6125f09083613c6b565b50600095600195509350505050565b60006129386125f0836101200151670de0b6b3a76400006129269190613c7e565b60608501516101008601519190612dd2565b611eea6125f0846101600151670de0b6b3a76400006129579190613c7e565b606086015161014087015191906123b3565b606061064183836000612df8565b60006106418383670de0b6b3a7640000612dd2565b60008060008361299b86612406565b6129a59190613dad565b905060008112156129bd5760008092509250506129c4565b9150600190505b9250929050565b60008060008812156129ed576129e088613ebf565b6129ea9087613c6b565b95505b6000806129fa8b8b61298c565b9150915080612a1157600080935093505050612ad1565b6000612a20838b8a8a8a612e95565b90506000612a43612a3b8a612a358a8e612977565b90612ec4565b899089612dd2565b905080821015612a5d576000809550955050505050612ad1565b808203670de0b6b3a76400008110612a9257612a8b612a84670de0b6b3a76400008c611d2a565b8290612ec4565b9050612aaa565b612aa7612a84670de0b6b3a76400008c612f2f565b90505b8b811015612ac357600080965096505050505050612ad1565b8b9003955060019450505050505b97509795505050505050565b6000806000612aef8989888888612f44565b9050612aff86612a35898b613c6b565b975087811015612b16576000809250925050612b95565b878103612b24818688612dd2565b9050670de0b6b3a76400008110612b5157612b4a612a84670de0b6b3a764000089612f2f565b9050612b69565b612b66612a84670de0b6b3a764000089611d2a565b90505b612b738186612f2f565b9050808a1015612b8b57600080935093505050612b95565b8903925060019150505b965096945050505050565b6000806000612bb28888888888612f44565b90506000612bdd670de0b6b3a7640000612bcc8888611d2a565b612bd69190613c6b565b8390612f2f565b9050670de0b6b3a76400008110612c0a57612c03612a84670de0b6b3a764000089612f2f565b9050612c22565b612c1f612a84670de0b6b3a764000089611d2a565b90505b80881015612c3857600080935093505050612c42565b8703925060019150505b9550959350505050565b6000806000612c5e8989888888612f44565b905086881015612c75576000809250925050612b95565b9686900396612c848887612ec4565b975087811015612c9b576000809250925050612b95565b878103612ca9818688612dd2565b9050670de0b6b3a76400008110612cd657612ccf612a84670de0b6b3a764000089612f2f565b9050612cee565b612ceb612a84670de0b6b3a764000089611d2a565b90505b612cf88186612f2f565b905089811015612d1057600080935093505050612b95565b9890980398600198509650505050505050565b6000806000612d358888888888612e95565b90506000612d59670de0b6b3a7640000612d4f8888612f2f565b61231f9190613c6b565b9050670de0b6b3a76400008110612d8657612d7f612a84670de0b6b3a764000089611d2a565b9050612d9e565b612d9b612a84670de0b6b3a764000089612f2f565b90505b612da88186611d2a565b905088811015612dc057600080935093505050612c42565b97909703976001975095505050505050565b6000826000190484118302158202612de957600080fd5b50910281810615159190040190565b606081471015612e1d5760405163cd78605960e01b815230600482015260240161116b565b600080856001600160a01b03168486604051612e399190613edb565b60006040518083038185875af1925050503d8060008114612e76576040519150601f19603f3d011682016040523d82523d6000602084013e612e7b565b606091505b5091509150612e8b868383612f69565b9695505050505050565b6000612ea18585612ec4565b612eba612eb286612a35868b611d15565b8590856123b3565b612e8b9190613c6b565b600081600003612edd5750670de0b6b3a7640000610693565b82600003612eed57506000610693565b6000612ef883612406565b90506000612f0d612f0886612406565b612fc5565b9050818102612f24670de0b6b3a764000082613ef7565b9050612e8b816131eb565b600061064183670de0b6b3a764000084612dd2565b6000612f508585612ec4565b612eba612f6186612a35868b612977565b859085612dd2565b606082612f7e57612f7982613380565b610641565b8151158015612f9557506001600160a01b0384163b155b15612fbe57604051639996b31560e01b81526001600160a01b038516600482015260240161116b565b5080610641565b6000808213612fe75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061306a9084901c612406565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361320657506000919050565b680755bf798b4a1bf1e5821261322f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e8b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c612406565b8051156133905780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016134746040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561348b57600080fd5b5035919050565b60005b838110156134ad578181015183820152602001613495565b50506000910152565b600081518084526134ce816020860160208601613492565b601f01601f19169290920160200192915050565b60208152600061064160208301846134b6565b6001600160a01b038116811461052d57600080fd5b60006020828403121561351c57600080fd5b8135610641816134f5565b801515811461052d57600080fd5b60006020828403121561354757600080fd5b813561064181613527565b60008060008060008060008060006101208a8c03121561357157600080fd5b8935985060208a0135975060408a013561358a816134f5565b965060608a013561359a816134f5565b955060808a01356135aa81613527565b945060a08a0135935060c08a013560ff811681146135c757600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126135f957600080fd5b50813567ffffffffffffffff81111561361157600080fd5b6020830191508360208260051b85010111156129c457600080fd5b6000806000806000806080878903121561364557600080fd5b8635613650816134f5565b95506020870135613660816134f5565b9450604087013567ffffffffffffffff8082111561367d57600080fd5b6136898a838b016135e7565b909650945060608901359150808211156136a257600080fd5b506136af89828a016135e7565b979a9699509497509295939492505050565b600080600080608085870312156136d757600080fd5b8435935060208501356136e9816134f5565b925060408501356136f9816134f5565b9396929550929360600135925050565b60008060006060848603121561371e57600080fd5b833592506020840135613730816134f5565b91506040840135613740816134f5565b809150509250925092565b6000806040838503121561375e57600080fd5b823591506020830135613770816134f5565b809150509250929050565b60006020828403121561378d57600080fd5b813567ffffffffffffffff8111156137a457600080fd5b82016060818503121561064157600080fd5b600080600080608085870312156137cc57600080fd5b8435935060208501356137de816134f5565b92506040850135915060608501356137f5816134f5565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156138b457600080fd5b82356138bf816134f5565b9150602083013561377081613527565b6000806000606084860312156138e457600080fd5b8335925060208401356138f6816134f5565b929592945050506040919091013590565b81516001600160a01b031681526102208101602083015161393360208401826001600160a01b03169052565b50604083015161394e60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516139b4828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613a2e57600080fd5b823567ffffffffffffffff811115613a4557600080fd5b613a51858286016135e7565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613a9557835183529284019291840191600101613a79565b50909695505050505050565b81516001600160801b0316815261018081016020830151613acd60208401826001600160801b03169052565b506040830151613ae860408401826001600160801b03169052565b506060830151613b0360608401826001600160801b03169052565b506080830151613b186080840182600f0b9052565b5060a0830151613b3360a08401826001600160801b03169052565b5060c0830151613b4e60c08401826001600160801b03169052565b5060e0830151613b6960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613a13565b600080600080600060a08688031215613bca57600080fd5b853594506020860135613bdc816134f5565b93506040860135613bec816134f5565b9250606086013591506080860135613c03816134f5565b809150509295509295909350565b60008060408385031215613c2457600080fd5b8235613c2f816134f5565b91506020830135613770816134f5565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561069357610693613c55565b8181038181111561069357610693613c55565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613ce9816011850160208701613492565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613d23816012850160208701613492565b9190910160120192915050565b600060208284031215613d4257600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613d74816010850160208701613492565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613ce9816011850160208701613492565b8181036000831280158383131683831282161715610d7e57610d7e613c55565b634e487b7160e01b600052601260045260246000fd5b600082613df257613df2613dcd565b500690565b600060018201613e0957613e09613c55565b5060010190565b600082613e1f57613e1f613dcd565b500490565b6000808335601e19843603018112613e3b57600080fd5b83018035915067ffffffffffffffff821115613e5657600080fd5b6020019150368190038213156129c457600080fd5b808202811582820484141761069357610693613c55565b8082018281126000831280158216821582161715613a1357613a13613c55565b600060208284031215613eb457600080fd5b815161064181613527565b6000600160ff1b8201613ed457613ed4613c55565b5060000390565b60008251613eed818460208701613492565b9190910192915050565b600082613f0657613f06613dcd565b600160ff1b821460001984141615613f2057613f20613c55565b50059056fea2646970667358221220c9ca8e72a97722af0b8eefcb5b7ffcf9b050a97ec8c03066950326493ae6e6c564736f6c63430008140033",
        "sourceMap": "684:498:74:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17432:137:37;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3708:72;;;;;;:::i;:::-;;:::i;:::-;;2353:70;;;;;;:::i;:::-;;:::i;9774:115::-;;;:::i;:::-;;;-1:-1:-1;;;;;2016:32:234;;;1998:51;;1986:2;1971:18;9774:115:37;1852:203:234;8726:482:37;;;;;;:::i;:::-;;:::i;7181:209::-;;;;;;:::i;:::-;;:::i;4114:240::-;;;;;;:::i;:::-;;:::i;10024:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5454:13:234;;-1:-1:-1;;;;;5450:54:234;5432:73;;5420:2;5405:18;10024:183:37;5228:283:234;16793:223:37;;;;;;:::i;:::-;;:::i;:::-;;;6139:25:234;;;6127:2;6112:18;16793:223:37;5993:177:234;1074:106:74;;;:::i;:::-;;;6347:4:234;6335:17;;;6317:36;;6305:2;6290:18;1074:106:74;6175:184:234;15753:173:37;;;;;;:::i;:::-;;:::i;2027:174::-;;;;;;:::i;:::-;;:::i;9370:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7605:14:234;;7598:22;7580:41;;7568:2;7553:18;9370:121:37;7440:187:234;17692:141:37;;;;;;:::i;:::-;;:::i;5551:225::-;;;;;;:::i;:::-;;:::i;12144:1619::-;;;:::i;:::-;;;;;;;:::i;3208:94::-;;;;;;:::i;:::-;;:::i;17982:119::-;;;;;;:::i;:::-;;:::i;6715:179::-;;;;;;:::i;:::-;;:::i;6008:277::-;;;;;;:::i;:::-;;:::i;2543:87::-;;;;;;:::i;:::-;;:::i;2955:83::-;;;;;;:::i;:::-;;:::i;10790:1185::-;;;:::i;:::-;;;;;;;:::i;16061:129::-;;;;;;:::i;:::-;;:::i;15018:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;9574:101::-;;;:::i;14407:132::-;;;:::i;10372:213::-;;;;;;:::i;:::-;;:::i;14618:159::-;;;:::i;:::-;;;;;;;:::i;4759:285::-;;;;;;:::i;:::-;;:::i;2754:91::-;;;;;;:::i;:::-;;:::i;16379:186::-;;;;;;:::i;:::-;;:::i;13887:367::-;;;:::i;:::-;;;;16573:13:234;;-1:-1:-1;;;;;16569:22:234;;;16551:41;;16652:4;16640:17;;;16634:24;16630:33;16608:20;;;16601:63;;;;16471:18;13887:367:37;16290:380:234;17432:137:37;17486:13;17511:51;17530:30;17552:7;17530:21;:30::i;:::-;17519:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;17511:7;:51::i;:::-;17432:137;;;:::o;3708:72::-;3758:15;3765:7;3758:6;:15::i;:::-;3708:72;:::o;2353:70::-;2401:15;2408:7;2401:6;:15::i;9774:115::-;9852:29;;;-1:-1:-1;;;;;9863:17:37;2016:32:234;9852:29:37;;;1998:51:234;9825:7:37;;9844:38;;1971:18:234;9852:29:37;1852:203:234;9844:38:37;9774:115;:::o;8726:482::-;8991:210;9018:15;9047:14;9075:5;9094:7;9115:9;9138:8;9160:1;9175;9190;8991:13;:210::i;:::-;8726:482;;;;;;;;;:::o;7181:209::-;7342:41;7361:4;7367:2;7371:3;;7376:6;;7342:18;:41::i;:::-;7181:209;;;;;;:::o;4114:240::-;4295:52;4309:7;4318:4;4324:2;4328:6;4336:10;4295:13;:52::i;:::-;4114:240;;;;:::o;10024:183::-;-1:-1:-1;;;;;;;;;;;;10150:50:37;10169:12;:29;10182:15;10169:29;;;;;;;;;;;10158:41;;;;;;17121:13:234;-1:-1:-1;;;;;17117:54:234;17099:73;;17087:2;17072:18;;16898:280;16793:223:37;16924:7;16962:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;16962:36:37;;;;;;;;;;;:45;;;;;;;;;;;16951:57;;;;;6139:25:234;16943:66:37;;6112:18:234;16951:57:37;5993:177:234;16943:66:37;16793:223;;;;;:::o;1074:106:74:-;1151:21;;;1168:2;1151:21;;;6317:36:234;1126:5:74;;1143:30;;6290:18:234;1151:21:74;6175:184:234;15753:173:37;15851:7;15889:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;15889:28:37;;;;;;;;;;15878:40;;;;;6139:25:234;15870:49:37;;6112:18:234;15878:40:37;5993:177:234;15870:49:37;15753:173;;;;:::o;2027:174::-;2128:16;2163:31;2185:8;2163:21;:31::i;9370:121::-;-1:-1:-1;;;;;9464:18:37;;9429:4;9464:18;;;:8;:18;;;;;;;;;9453:30;;9445:39;;9453:30;;9464:18;;;9453:30;7605:14:234;;7598:22;7580:41;;7568:2;7553:18;;7440:187;17692:141:37;17748:13;17773:53;17792:32;17816:7;17792:23;:32::i;5551:225::-;5703:7;1805:32:116;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:116;:10;-1:-1:-1;;;;;1791:46:116;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:116;;;;;;;;;;;1787:116;5722:47:37::1;5735:7;5744:8;5754:6;5762;5722:12;:47::i;:::-;5551:225:::0;;;;;:::o;12144:1619::-;12190:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12190:27:37;12229:23;12255:21;:19;:21::i;:::-;12422:13;:29;12359:12;:48;;;;12286:21;12310:34;;;;;12229:47;;-1:-1:-1;12286:21:37;-1:-1:-1;;;;;12422:29:37;;;;12310:97;;12359:48;12310:97;:::i;:::-;:141;;;;:::i;:::-;12286:165;;12461:20;12502:1;12484:15;:19;:178;;12661:1;12484:178;;;12518:128;12630:15;12518:86;12564:39;12587:15;12564:22;:39::i;:::-;12518:45;:86::i;:::-;:111;;:128::i;:::-;12711:1006;;;;;;;;12761:12;:26;-1:-1:-1;;;;;12761:26:37;;;12711:1006;;12818:28;;;;;;12711:1006;;;;12880:31;;-1:-1:-1;;;;;12880:31:37;;;;12711:1006;;;;;;;-1:-1:-1;;;12946:32:37;;;;;;12711:1006;;;;13006:25;;;;;;12711:1006;;;;;;;;;;;;;;;;12818:28;13109:29;;;;;;12711:1006;;;;12880:31;13177:36;;;;12761:26;12711:1006;;;13246:30;;;;;;12711:1006;;;;13316:37;;;;;;12711:1006;;;;13562:13;:29;;;;12711:1006;;;;13631:22;;;;;;;12711:1006;;;;12461:201;;-1:-1:-1;12672:36:37;;12711:1006;;;13423:18;;:92;;13480:35;:12;13501:13;13480:20;:35::i;:::-;13423:92;;;13460:1;13423:92;12711:1006;;13681:25;;-1:-1:-1;;;;;13681:25:37;12711:1006;;;;;13735:20;;12672:1045;;-1:-1:-1;13727:29:37;;13735:20;;12672:1045;;13735:20;;:::i;13727:29::-;12219:1544;;;;12144:1619;:::o;3208:94::-;3272:23;3283:3;3288:6;3272:10;:23::i;:::-;3208:94;;:::o;17982:119::-;-1:-1:-1;;;;;18076:16:37;;18038:7;18076:16;;;:7;:16;;;;;;;;;18065:28;;;;;6139:25:234;18057:37:37;;6112:18:234;18065:28:37;5993:177:234;6715:179:37;6836:51;6849:7;6858:8;6868:6;6876:10;6836:12;:51::i;:::-;6715:179;;;:::o;6008:277::-;6142:10;6124:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;6124:39:37;;;;;;;;;;;;:50;;-1:-1:-1;;6124:50:37;;;;;;;;;;6232:46;;7580:41:234;;;6124:39:37;;6142:10;6232:46;;7553:18:234;6232:46:37;;;;;;;6008:277;;:::o;2543:87::-;2601:22;2618:4;2601:16;:22::i;2955:83::-;3011:20;3026:4;3011:14;:20::i;10790:1185::-;10862:29;;:::i;:::-;10956:988;;;;;;;;-1:-1:-1;;;;;11012:10:37;10956:988;;;;11062:17;10956:988;;;;;;;;;;11116:14;10956:988;;;;;;11168:15;10956:988;;;;;;;;11229:23;10956:988;;;;;;;;11296:21;10956:988;;;;11365:25;10956:988;;;;11430:17;10956:988;;;;11489:19;10956:988;;;;11543:12;10956:988;;;;11589:11;;;;10956:988;;;;11636:13;;;;10956:988;;;;11687:15;;;;;10956:988;;;;11730:195;;;;;;;11772:9;11730:195;;11807:8;11730:195;;;;11841:16;11730:195;;;;11883:20;11730:195;;;;10956:988;;;;;;;10928:1030;;10907:1061;;10928:1030;;10956:988;10928:1030;;:::i;16061:129::-;16122:7;16160:21;;;:12;:21;;;;;;;;;16149:33;;;;;6139:25:234;16141:42:37;;6112:18:234;16149:33:37;5993:177:234;15018:565:37;15096:16;15124:23;15164:6;15150:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15150:28:37;;15124:54;;15250:9;15245:294;15265:17;;;15245:294;;;15300:12;15315:6;;15322:1;15315:9;;;;;;;:::i;:::-;;;;;;;15300:24;;15338:12;15421:4;15415:11;15407:19;;15465:4;15453:6;15460:1;15453:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;15511:3:37;;15245:294;;;;15549:27;15568:6;15557:18;;;;;;;;:::i;15549:27::-;15114:469;15018:565;;;;:::o;9574:101::-;9645:22;;;-1:-1:-1;;;;;9656:10:37;2016:32:234;9645:22:37;;;1998:51:234;9618:7:37;;9637:31;;1971:18:234;9645:22:37;1852:203:234;14407:132:37;14470:7;14489:43;14508:22;;14497:34;;;;;;6139:25:234;;6127:2;6112:18;;5993:177;10372:213:37;10465:6;10483:95;10515:52;10531:35;10549:17;10531:15;:35;:::i;:::-;10515:15;:52::i;:::-;10504:64;;;;;;6139:25:234;;6127:2;6112:18;;5993:177;14618:159:37;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14737:33:37;14756:12;14745:24;;;;;;;18195:13:234;;-1:-1:-1;;;;;18289:18:234;;;5158:59;;18338:3;18369:18;;;18404:4;18389:20;;5158:59;18456:4;18444:17;;18438:24;18490:20;;;18527:4;18512:20;;5158:59;18561:20;;18598:4;18583:20;;5158:59;18650:4;18638:17;;18632:24;18694:2;18683:27;;;18712:18;;;13363:34;18759:20;;18796:4;18781:20;;5158:59;18848:4;18836:17;;18830:24;18882:20;;;18919:4;18904:20;;5158:59;18953:20;;18990:4;18975:20;;5158:59;19042:4;19030:17;;;19024:24;19090:4;19073:22;;;7414:13;7407:21;19112:6;19097:22;;7395:34;19153:1;19149:19;;;19145:30;7414:13;7407:21;19192:6;19177:22;;7395:34;-1:-1:-1;;;;;19236:2:234;19232:20;;;19228:57;19302:6;19287:22;;13462:55;19338:20;;;19375:6;19360:22;;5158:59;18165:3;18150:19;;17974:1415;4759:285:37;4928:7;1805:32:116;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:116;:10;-1:-1:-1;;;;;1791:46:116;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:116;;;;;;;;;;;1787:116;4989:48:37::1;5003:7;5012:4;5018:2;5022:6;5030;4989:13;:48::i;2754:91::-:0;2814:24;2833:4;2814:18;:24::i;16379:186::-;-1:-1:-1;;;;;16520:26:37;;;16485:4;16520:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;16509:48;;16520:36;;;;7605:14:234;7598:22;16509:48:37;;;7580:41:234;;;;16485:4:37;;16501:57;;7553:18:234;16509:48:37;7440:187:234;13887:367:37;-1:-1:-1;;;;;;;;;;;;;;;;;14057:166:37;;;;;;;;14121:13;:29;-1:-1:-1;;;;;14121:29:37;;;14057:166;;;-1:-1:-1;;;14182:22:37;;;;;14057:166;;;;;;;14029:208;;;;;16551:41:234;;;;16634:24;;16630:33;16608:20;;;16601:63;;;;14008:239:37;;16471:18:234;;14029:208:37;16290:380:234;2533:693:119;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:119;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:119;2769:6;:26;;;;;;;;:::i;:::-;;2765:455;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:119;;;;;2765:455;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:369;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:369;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:239;;3084:10;3045:50;;;;;;;;:::i;2981:239::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:107;;3172:37;;;;;;;;;;;;;;;;;;;3113:107;2627:599;;;2533:693;;;:::o;18310:106:37:-;18402:6;18379:30;;-1:-1:-1;;;18379:30:37;;;;;;;;:::i;:::-;;;;;;;;5270:1053:111;2356:21:169;:19;:21::i;:::-;5424:15:111::1;::::0;5476:10:::1;5399:22;5467:20:::0;;;:8:::1;:20;::::0;;;;;-1:-1:-1;;;;;5424:15:111;;::::1;::::0;5467:20:::1;;5466:21;:65:::0;::::1;;;-1:-1:-1::0;5503:10:111::1;-1:-1:-1::0;;;;;5503:28:111;::::1;;;5466:65;:106;;;;-1:-1:-1::0;5561:11:111::1;::::0;-1:-1:-1;;;;;5561:11:111::1;5547:10;:25;;5466:106;5449:192;;;5604:26;;-1:-1:-1::0;;;5604:26:111::1;;;;;;;;;;;5449:192;5747:19;5791:20:::0;5814:14:::1;:12;:14::i;:::-;5951:32;::::0;-1:-1:-1;;;5951:32:111;;5977:4:::1;5951:32;::::0;::::1;1998:51:234::0;5791:37:111;;-1:-1:-1;5933:15:111::1;::::0;-1:-1:-1;;;;;5951:17:111;::::1;::::0;::::1;::::0;1971:18:234;;5951:32:111::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5933:50:::0;-1:-1:-1;5993:61:111::1;-1:-1:-1::0;;;;;5993:36:111;::::1;6030:14:::0;5933:50;5993:36:::1;:61::i;:::-;6142:27:::0;;::::1;::::0;:61:::1;;;6191:12;6173:14;:12;:14::i;:::-;:30;;6142:61;6138:124;;;6226:25;;-1:-1:-1::0;;;6226:25:111::1;;;;;;;;;;;6138:124;6307:7;-1:-1:-1::0;;;;;6277:39:111::1;6283:14;-1:-1:-1::0;;;;;6277:39:111::1;;;;;;;;;;;5324:999;;;;2398:20:169::0;1713:1;2924:7;:21;2744:208;2648:350:111;2782:10;2773:20;;;;:8;:20;;;;;;;;2768:85;;2816:26;;-1:-1:-1;;;2816:26:111;;;;;;;;;;;2768:85;2918:21;:31;;;;;;;-1:-1:-1;;2918:31:111;;;;;;2964:27;;;;;;2942:7;7605:14:234;7598:22;7580:41;;7568:2;7553:18;;7440:187;2964:27:111;;;;;;;;2648:350;:::o;8430:1543:116:-;8772:8;8754:15;:26;8750:93;;;8803:29;;-1:-1:-1;;;8803:29:116;;;;;;;;;;;8750:93;-1:-1:-1;;;;;8904:19:116;;8900:92;;8946:35;;-1:-1:-1;;;8946:35:116;;;;;;;;;;;8900:92;-1:-1:-1;;;;;9419:14:116;;;9074:18;9419:14;;;:7;:14;;;;;;;;;9244:245;;;;;20996:25:234;;;21075:18;;;21068:43;;;;21147:15;;;21127:18;;;21120:43;21206:14;;21199:22;21179:18;;;21172:50;21238:19;;;21231:35;;;;21282:19;;;;21275:35;;;9244:245:116;;;;;;;;;;20968:19:234;;;9244:245:116;;;9213:294;;;;;;;;-1:-1:-1;;;9118:403:116;;;21579:27:234;21622:11;;;21615:27;;;21658:12;;;21651:28;21695:12;;9118:403:116;;;-1:-1:-1;;9118:403:116;;;;;;;;;9095:436;;9118:403;9095:436;;;;9541:14;9558:30;;;;;;;;;21945:25:234;;;22018:4;22006:17;;21986:18;;;21979:45;;;;22040:18;;;22033:34;;;22083:18;;;22076:34;;;9095:436:116;;-1:-1:-1;9541:14:116;9558:30;;21917:19:234;;9558:30:116;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9541:47;;9612:5;-1:-1:-1;;;;;9602:15:116;:6;-1:-1:-1;;;;;9602:15:116;;9598:83;;9640:30;;-1:-1:-1;;;9640:30:116;;;;;;;;;;;9598:83;-1:-1:-1;;;;;9759:14:116;;;;;;;:7;:14;;;;;;;;9757:16;;;;;;9820:17;:24;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9820:45:116;;;;;;;;;;9925:41;;7580::234;;;9925::116;;7553:18:234;9925:41:116;;;;;;;8686:1287;;8430:1543;;;;;;;;;:::o;2248:716::-;-1:-1:-1;;;;;2460:18:116;;;;:38;;-1:-1:-1;;;;;;2482:16:116;;;2460:38;2456:111;;;2521:35;;-1:-1:-1;;;2521:35:116;;;;;;;;;;;2456:111;2623:27;;;2619:103;;2673:38;;-1:-1:-1;;;2673:38:116;;;;;;;;;;;2619:103;2787:9;2782:176;2802:14;;;2782:176;;;2834:54;2848:3;;2852:1;2848:6;;;;;;;:::i;:::-;;;;;;;2856:4;2862:2;2866:6;;2873:1;2866:9;;;;;;;:::i;:::-;;;;;;;2877:10;2834:13;:54::i;:::-;2930:3;;2782:176;;;;2248:716;;;;;;:::o;3315:1591::-;-1:-1:-1;;;;;3528:18:116;;;;:38;;-1:-1:-1;;;;;;3550:16:116;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:116;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:116;:6;-1:-1:-1;;;;;3729:14:116;;3725:888;;-1:-1:-1;;;;;3880:23:116;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:116;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:116;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:116;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:116;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:116;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:116;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:116;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:116;;;22295:25:234;;;22351:2;22336:18;;22329:34;;;-1:-1:-1;;;;;4850:49:116;;;;;;;;;;;;;;22268:18:234;4850:49:116;;;;;;;3315:1591;;;;;:::o;1317:1182:111:-;1432:16;2356:21:169;:19;:21::i;:::-;1514:23:111::1;1528:8;1514:13;:23::i;:::-;1639:13;::::0;-1:-1:-1;;;;;1639:13:111::1;::::0;1666:20:::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1666:36:111::1;;1662:109;;1725:35;;-1:-1:-1::0;;;1725:35:111::1;;;;;;;;;;;1662:109;1873:10;1864:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1863:21;:63:::0;::::1;;;-1:-1:-1::0;1900:10:111::1;-1:-1:-1::0;;;;;1900:26:111;::::1;;;1863:63;:104;;;;-1:-1:-1::0;1956:11:111::1;::::0;-1:-1:-1;;;;;1956:11:111::1;1942:10;:25;;1863:104;1846:190;;;1999:26;;-1:-1:-1::0;;;1999:26:111::1;;;;;;;;;;;1846:190;2116:23;2142:21;:19;:21::i;:::-;2205:22;::::0;;2173:29:::1;2237::::0;;;2116:47;;-1:-1:-1;2287:59:111::1;2205:22:::0;2116:47;2337:8;2287:9:::1;:59::i;:::-;2276:70;;2395:12;-1:-1:-1::0;;;;;2361:131:111::1;;2421:61;2446:8;2456:15;2473:8;2421:24;:61::i;:::-;2361:131;::::0;6139:25:234;;;6127:2;6112:18;2361:131:111::1;;;;;;;1450:1049;;;2398:20:169::0;1713:1;2924:7;:21;2744:208;3360:689:119;3435:21;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:119;;3469:20;3567:19;2253:120;3567:8;:19::i;:::-;3540:46;-1:-1:-1;3610:16:119;3600:6;:26;;;;;;;;:::i;:::-;;3596:447;;3642:25;;;;;;;;;;;;;-1:-1:-1;;;3642:25:119;;;;;3596:447;;;3698:18;3688:6;:28;;;;;;;;:::i;:::-;;3684:359;;3786:10;3749:48;;;;;;;;:::i;3684:359::-;3829:19;3819:6;:29;;;;;;;;:::i;:::-;;3815:228;;3919:10;3881:49;;;;;;;;:::i;3815:228::-;3962:29;3952:6;:39;;;;;;;;:::i;:::-;;3948:95;;-1:-1:-1;;4007:25:119;;;;;;;;;;;;-1:-1:-1;;;4007:25:119;;;;;3360:689;-1:-1:-1;;;3360:689:119:o;10223:590:116:-;10419:34;;;10438:4;10419:34;;;;23455:51:234;;;;23522:18;;;23515:34;;;;10419::116;;;;;;;;;23428:18:234;;;;10419:34:116;;10409:45;;;;;;;;;-1:-1:-1;;;;;;10593:147:116;;;23771:39:234;10657:14:116;23843:15:234;;;-1:-1:-1;;23839:53:234;23826:11;;;23819:74;23909:12;;;23902:28;10711:15:116;23946:12:234;;;;23939:28;;;;10593:147:116;;;;;;;;;;23983:12:234;;;;10593:147:116;;;10570:180;;;;;;10223:590::o;5363:301::-;5509:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5509:35:116;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5623:34;;6139:25:234;;;5509:35:116;;5623:34;;6112:18:234;5623:34:116;;;;;;;5363:301;;;;:::o;5594:150:112:-;5672:23;5718:19;193:4:122;5718:14:112;:19::i;:::-;5711:26;;5594:150;:::o;15602:1035::-;15697:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15697:39:112;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:112;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:112;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:112;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:112:o;6228:341:124:-;6331:7;6351:20;6373:12;6389:56;6428:7;6389:25;:56::i;:::-;6350:95;;;;6460:7;6455:79;;6490:33;;-1:-1:-1;;;6490:33:124;;;;;;;;;;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;4526:344:111:-;4660:11;;-1:-1:-1;;;;;4660:11:111;4646:10;:25;4642:89;;4694:26;;-1:-1:-1;;;4694:26:111;;;;;;;;;;;4642:89;-1:-1:-1;;;;;4796:14:111;;;;;;:8;:14;;;;;;;;;:24;;-1:-1:-1;;4796:24:111;;;;;;;;;;4835:28;;7580:41:234;;;4835:28:111;;7553:18:234;4835:28:111;;;;;;;4526:344;;:::o;3114:334::-;3240:11;;-1:-1:-1;;;;;3240:11:111;3226:10;:25;3222:89;;3274:26;;-1:-1:-1;;;3274:26:111;;;;;;;;;;;3222:89;3381:13;:20;;-1:-1:-1;;;;;;3381:20:111;-1:-1:-1;;;;;3381:20:111;;;;;;;;3416:25;;;;-1:-1:-1;;3416:25:111;3114:334;:::o;4029:328::-;4153:11;;-1:-1:-1;;;;;4153:11:111;4139:10;:25;4135:89;;4187:26;;-1:-1:-1;;;4187:26:111;;;;;;;;;;;4135:89;4294:11;:18;;-1:-1:-1;;;;;;4294:18:111;-1:-1:-1;;;;;4294:18:111;;;;;;;;4327:23;;;;-1:-1:-1;;4327:23:111;4029:328;:::o;12556:675:112:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;3566:345:111:-;3694:11;;-1:-1:-1;;;;;3694:11:111;3680:10;:25;3676:89;;3728:26;;-1:-1:-1;;;3728:26:111;;;;;;;;;;;3676:89;3840:15;:22;;-1:-1:-1;;;;;;3840:22:111;-1:-1:-1;;;;;3840:22:111;;;;;;;;3877:27;;;;-1:-1:-1;;3877:27:111;3566:345;:::o;4207:1065:119:-;4599:26;;;4562:2;4599:26;;;;;;;;;4276:20;;4562:2;4536:23;;4562:2;4599:26;;;;;;;;;;-1:-1:-1;4599:26:119;4574:51;;4790:14;4818:180;4825:9;;4818:180;;4935:9;4942:2;4935:4;:9;:::i;:::-;4934:16;;4948:2;4934:16;:::i;:::-;4904:61;;4862:9;4899:1;4872:24;4890:6;4872:15;:24;:::i;:::-;:28;;;;:::i;:::-;4862:39;;;;;;;;:::i;:::-;;;;:103;-1:-1:-1;;;;;4862:103:119;;;;;;;;-1:-1:-1;4979:8:119;;;;:::i;:::-;;-1:-1:-1;4836:10:119;;-1:-1:-1;4844:2:119;4836:10;;:::i;:::-;;;4818:180;;;5169:28;;;;5154:44;5211:22;;;5154:44;4207:1065;-1:-1:-1;;4207:1065:119:o;2431:307:169:-;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;5132:194:72:-;5262:57;;-1:-1:-1;;;5262:57:72;;5313:4;5262:57;;;1998:51:234;5220:19:72;;5276:17;-1:-1:-1;;;;;5262:42:72;;;;1971:18:234;;5262:57:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1303:160:166:-;1412:43;;;-1:-1:-1;;;;;23473:32:234;;1412:43:166;;;23455:51:234;23522:18;;;;23515:34;;;1412:43:166;;;;;;;;;;23428:18:234;;;;1412:43:166;;;;;;;;-1:-1:-1;;;;;1412:43:166;-1:-1:-1;;;1412:43:166;;;1385:71;;1405:5;;1385:19;:71::i;8216:221:112:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:112;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:112;;;;;;;;;;;4144:1323;4293:23;;4630:33;:7;4646:16;4630:15;:33::i;:::-;4609:54;;4683:28;4700:10;4683:16;:28::i;:::-;4673:38;;4799:7;4810:1;4799:12;4795:51;;4834:1;4827:8;;;;;4795:51;4940:15;;;;;;;;:::i;:::-;4936:492;;;5036:130;5071:7;5096:20;;;;:8;:20;:::i;:::-;5134:18;;;;:8;:18;:::i;:::-;5036:17;:130::i;:::-;5018:148;;4936:492;;;5246:132;5283:7;5308:20;;;;:8;:20;:::i;:::-;5346:18;;;;:8;:18;:::i;:::-;5246:19;:132::i;:::-;5410:7;5392:25;;4936:492;5438:22;4144:1323;;;;;:::o;32807:391::-;32976:7;32999:15;;;;;;;;:::i;:::-;32995:197;;;-1:-1:-1;33037:7:112;33030:14;;32995:197;33148:33;:7;33164:16;33148:15;:33::i;:::-;33141:40;;;;4051:235:72;4181:98;;-1:-1:-1;;;4181:98:72;;;;;6139:25:234;;;4143:7:72;;4195:17;-1:-1:-1;;;;;4181:54:72;;;;6112:18:234;;4181:98:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;10998:450:112:-;11097:21;11130:24;193:4:122;11157:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:112;11417:23;193:4:122;11417:17:112;:23;:::i;:::-;11395:13;;:21;:46::i;7264:1173:124:-;7371:7;7380:4;7757:19;7801:20;7823:12;7839:65;7883:7;7839:26;:65::i;:::-;7800:104;;;;7923:7;7918:64;;-1:-1:-1;7958:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;;;7264:1173:124:o;7918:64::-;8158:39;:7;:28;;;:37;:39::i;:::-;8109:30;8131:7;8109:21;:30::i;:::-;8077:13;8026:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7995:202;;7786:422;;8339:1;8324:12;:16;8320:64;;;-1:-1:-1;8364:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;8320:64::-;8410:12;8425:4;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:125;2001:204::o;4059:629:166:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;2016:32:234;;4631:40:166;;;1998:51:234;1971:18;;4631:40:166;1852:203:234;4458:205:72;4589:67;;-1:-1:-1;;;4589:67:72;;;;;6139:25:234;;;4551:7:72;;4603:17;-1:-1:-1;;;;;4589:54:72;;;;6112:18:234;;4589:67:72;5993:177:234;2790:358:72;2943:7;3111:30;;-1:-1:-1;;;3111:30:72;;;;;;;;;;;3390:331;3604:110;;-1:-1:-1;;;3604:110:72;;-1:-1:-1;;;;;23473:32:234;;;3604:110:72;;;23455:51:234;23522:18;;;23515:34;;;3618:17:72;3604:48;;;;23428:18:234;;3604:110:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;11561:223:112:-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;8765:9443:124:-;8873:6;8881:4;9683:23;9838:130;:102;9906:7;:33;;;9838:7;:42;;;:67;;:102;;;;:::i;:::-;:128;:130::i;:::-;9709:114;:90;9766:7;:32;;;9709:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9683:285;;9979:30;10011:12;10027:157;10108:7;:21;;;10147:7;:23;;;10027:63;:157::i;:::-;9978:206;;;;10199:7;10194:160;;-1:-1:-1;10334:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;10194:160::-;10603:1;10584:16;:20;10580:7595;;;10620:25;10656:16;10620:53;;10861:21;10923:401;11004:7;:21;;;11047:7;:23;;;11092:7;:20;;;11134:7;:28;;;11190:7;:19;;;193:4:122;11184:25:124;;;;:::i;:::-;11231:7;:23;;;11276:7;:30;;;10923:59;:401::i;:::-;10896:428;-1:-1:-1;10896:428:124;-1:-1:-1;10896:428:124;11338:176;;-1:-1:-1;11490:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;11338:176::-;11691:17;11674:13;:34;11670:2891;;11982:21;12048:389;12148:22;12196:7;:20;;;12242:17;12291:7;:19;;;193:4:122;12285:25:124;;;;:::i;:::-;12336:7;:23;;;12385:7;:30;;;12048:74;:389::i;:::-;12021:416;-1:-1:-1;12021:416:124;-1:-1:-1;12743:8:124;;:84;;;;;12795:7;:32;;;12775:17;:52;12743:84;12718:335;;;-1:-1:-1;12876:1:124;;12879:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12718:335::-;12986:7;12981:72;;-1:-1:-1;13025:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12981:72::-;13080:24;:13;:22;:24::i;:::-;13079:25;;;:::i;:::-;13071:40;13106:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;;8765:9443:124:o;11670:2891::-;13796:1;13769:7;:23;;;:28;13765:782;;13855:95;13881:7;:28;;;13856:22;:53;;;;:::i;13855:95::-;13854:96;;;:::i;:::-;13821:181;13976:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;13765:782::-;14407:28;;;;14383:21;;14382:94;;14383:52;;;:::i;10580:7595::-;14686:1;14667:16;:20;14663:3512;;;14703:25;14739:17;14740:16;14739:17;:::i;:::-;14703:54;;14874:21;14936:307;15017:22;15061:7;:20;;;15109:7;:19;;;193:4:122;15103:25:124;;;;:::i;:::-;15150:7;:23;;;15195:7;:30;;;14936:59;:307::i;:::-;14909:334;-1:-1:-1;14909:334:124;-1:-1:-1;14909:334:124;15257:64;;-1:-1:-1;15297:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;15257:64::-;15498:17;15481:13;:34;15477:2688;;15790:21;15856:387;15954:22;16002:7;:20;;;16048:17;16097:7;:19;;;193:4:122;16091:25:124;;;;:::i;:::-;16142:7;:23;;;16191:7;:30;;;15856:72;:387::i;:::-;15829:414;-1:-1:-1;15829:414:124;-1:-1:-1;16549:8:124;;:84;;;;;16601:7;:32;;;16581:17;:52;16549:84;16524:335;;;-1:-1:-1;16682:1:124;;16685:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16524:335::-;16792:7;16787:72;;-1:-1:-1;16831:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16787:72::-;16885:24;:13;:22;:24::i;15477:2688::-;17243:23;17313:335;17402:22;17450:7;:20;;;17502:7;:19;;;193:4:122;17496:25:124;;;;:::i;:::-;17547:7;:23;;;17596:7;:30;;;17313:63;:335::i;:::-;17284:364;-1:-1:-1;17284:364:124;-1:-1:-1;17284:364:124;17666:72;;-1:-1:-1;17710:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;17666:72::-;17929:177;17972:122;18045:7;:23;;;17993:13;17973:17;:33;;;;:::i;:::-;17972:43;;:122::i;:::-;17930:164;;:15;:164;:::i;14663:3512::-;-1:-1:-1;18193:1:124;;18196:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;18455:1167::-;18558:6;19416:199;19434:156;19495:7;:32;;;193:4:122;19489:38:124;;;;:::i;:::-;19549:23;;;;19434:24;;;;;:156;:33;:156::i;19416:199::-;19198:203;19216:160;19280:7;:33;;;193:4:122;19274:39:124;;;;:::i;:::-;19335:23;;;;19216:25;;;;;:160;:36;:160::i;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;7273:398:123:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;-1:-1:-1;7659:4:123;;-1:-1:-1;7273:398:123;;;;;;:::o;17581:2070:126:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18644:10;18656:12;18672:72;18736:1;18739:4;18672:63;:72::i;:::-;18643:101;;;;18760:7;18755:56;;18791:1;18794:5;18783:17;;;;;;;;18755:56;18820:9;18832:22;18838:2;18842:1;18845;18848;18851:2;18832:5;:22::i;:::-;18820:34;-1:-1:-1;18864:11:126;18878:37;18889:21;18908:1;18889:14;:2;18898:4;18889:8;:14::i;:::-;:18;;:21::i;:::-;18878:1;;18912:2;18878:10;:37::i;:::-;18864:51;;18933:3;18929:1;:7;18925:55;;;18960:1;18963:5;18952:17;;;;;;;;;;18925:55;19050:7;;;193:4:122;19081:15:126;;19077:295;;19195:28;19208:14;193:4:122;19220:1:126;19208:11;:14::i;:::-;19195:8;;:12;:28::i;:::-;19184:39;;19077:295;;;19335:26;19348:12;193:4:122;19358:1:126;19348:9;:12::i;19335:26::-;19324:37;;19077:295;19529:1;19518:8;:12;19514:60;;;19554:1;19557:5;19546:17;;;;;;;;;;;19514:60;19615:12;;;;-1:-1:-1;19629:4:126;;-1:-1:-1;;;;;17581:2070:126;;;;;;;;;;;:::o;11709:1515::-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:126;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:122;12549:2:126;:9;12545:263;;12648:20;12655:12;193:4:122;12665:1:126;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:122;12794:1:126;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:126;;-1:-1:-1;;11709:1515:126;;;;;;;;;;:::o;15892:1050::-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:126;16337:28;193:4:122;16345:13:126;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:122;16379:8:126;:15;16375:293;;16490:26;16503:12;193:4:122;16513:1:126;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:122;16654:1:126;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:126;;-1:-1:-1;;15892:1050:126;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:122;6666:2:126;:9;6662:261;;6764:20;6771:12;193:4:122;6781:1:126;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:122;6909:1:126;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:126;-1:-1:-1;;;;;;;5576:1765:126:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:126;14607:28;193:4:122;14617:11:126;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:122;14649:9:126;:16;14645:300;;14765:29;14779:14;193:4:122;14791:1:126;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:122;14931:1:126;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:126;-1:-1:-1;;;;;;13859:1409:126:o;2284:748:122:-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3180:392:167:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:167;;3394:4;3359:41;;;1998:51:234;1971:18;;3359:41:167;1852:203:234;3303:108:167;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:167:o;21014:352:126:-;21155:7;21351:8;:1;21357;21351:5;:8::i;:::-;21309:39;21322:21;21341:1;21322:14;:2;21333;21322:10;:14::i;:21::-;21309:1;;21345:2;21309:12;:39::i;:::-;:50;;;;:::i;3811:844:122:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;20158:343:126:-;20297:7;20486:8;:1;20492;20486:5;:8::i;:::-;20448:35;20459:19;20476:1;20459:12;:2;20468;20459:8;:12::i;:19::-;20448:1;;20480:2;20448:10;:35::i;4625:582:167:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;2016:32:234;;5121:24:167;;;1998:51:234;1971:18;;5121:24:167;1852:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;8508:3846:122;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;5743:516:167:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:234:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:234;;14:180;-1:-1:-1;14:180:234:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:234;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:234;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:234:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:234;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:118::-;1460:5;1453:13;1446:21;1439:5;1436:32;1426:60;;1482:1;1479;1472:12;1497:241;1553:6;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1661:9;1648:23;1680:28;1702:5;1680:28;:::i;2060:1050::-;2186:6;2194;2202;2210;2218;2226;2234;2242;2250;2303:3;2291:9;2282:7;2278:23;2274:33;2271:53;;;2320:1;2317;2310:12;2271:53;2356:9;2343:23;2333:33;;2413:2;2402:9;2398:18;2385:32;2375:42;;2467:2;2456:9;2452:18;2439:32;2480:39;2513:5;2480:39;:::i;:::-;2538:5;-1:-1:-1;2595:2:234;2580:18;;2567:32;2608:41;2567:32;2608:41;:::i;:::-;2668:7;-1:-1:-1;2727:3:234;2712:19;;2699:33;2741:30;2699:33;2741:30;:::i;:::-;2790:7;-1:-1:-1;2844:3:234;2829:19;;2816:33;;-1:-1:-1;2901:3:234;2886:19;;2873:33;2950:4;2937:18;;2925:31;;2915:59;;2970:1;2967;2960:12;2915:59;2993:7;2983:17;;;3047:3;3036:9;3032:19;3019:33;3009:43;;3099:3;3088:9;3084:19;3071:33;3061:43;;2060:1050;;;;;;;;;;;:::o;3115:367::-;3178:8;3188:6;3242:3;3235:4;3227:6;3223:17;3219:27;3209:55;;3260:1;3257;3250:12;3209:55;-1:-1:-1;3283:20:234;;3326:18;3315:30;;3312:50;;;3358:1;3355;3348:12;3312:50;3395:4;3387:6;3383:17;3371:29;;3455:3;3448:4;3438:6;3435:1;3431:14;3423:6;3419:27;3415:38;3412:47;3409:67;;;3472:1;3469;3462:12;3487:1066;3627:6;3635;3643;3651;3659;3667;3720:3;3708:9;3699:7;3695:23;3691:33;3688:53;;;3737:1;3734;3727:12;3688:53;3776:9;3763:23;3795:39;3828:5;3795:39;:::i;:::-;3853:5;-1:-1:-1;3910:2:234;3895:18;;3882:32;3923:41;3882:32;3923:41;:::i;:::-;3983:7;-1:-1:-1;4041:2:234;4026:18;;4013:32;4064:18;4094:14;;;4091:34;;;4121:1;4118;4111:12;4091:34;4160:70;4222:7;4213:6;4202:9;4198:22;4160:70;:::i;:::-;4249:8;;-1:-1:-1;4134:96:234;-1:-1:-1;4337:2:234;4322:18;;4309:32;;-1:-1:-1;4353:16:234;;;4350:36;;;4382:1;4379;4372:12;4350:36;;4421:72;4485:7;4474:8;4463:9;4459:24;4421:72;:::i;:::-;3487:1066;;;;-1:-1:-1;3487:1066:234;;-1:-1:-1;3487:1066:234;;4512:8;;3487:1066;-1:-1:-1;;;3487:1066:234:o;4558:541::-;4644:6;4652;4660;4668;4721:3;4709:9;4700:7;4696:23;4692:33;4689:53;;;4738:1;4735;4728:12;4689:53;4774:9;4761:23;4751:33;;4834:2;4823:9;4819:18;4806:32;4847:39;4880:5;4847:39;:::i;:::-;4905:5;-1:-1:-1;4962:2:234;4947:18;;4934:32;4975:41;4934:32;4975:41;:::i;:::-;4558:541;;;;-1:-1:-1;5035:7:234;;5089:2;5074:18;5061:32;;-1:-1:-1;;4558:541:234:o;5516:472::-;5593:6;5601;5609;5662:2;5650:9;5641:7;5637:23;5633:32;5630:52;;;5678:1;5675;5668:12;5630:52;5714:9;5701:23;5691:33;;5774:2;5763:9;5759:18;5746:32;5787:39;5820:5;5787:39;:::i;:::-;5845:5;-1:-1:-1;5902:2:234;5887:18;;5874:32;5915:41;5874:32;5915:41;:::i;:::-;5975:7;5965:17;;;5516:472;;;;;:::o;6364:323::-;6432:6;6440;6493:2;6481:9;6472:7;6468:23;6464:32;6461:52;;;6509:1;6506;6499:12;6461:52;6545:9;6532:23;6522:33;;6605:2;6594:9;6590:18;6577:32;6618:39;6651:5;6618:39;:::i;:::-;6676:5;6666:15;;;6364:323;;;;;:::o;6692:387::-;6779:6;6832:2;6820:9;6811:7;6807:23;6803:32;6800:52;;;6848:1;6845;6838:12;6800:52;6888:9;6875:23;6921:18;6913:6;6910:30;6907:50;;;6953:1;6950;6943:12;6907:50;6976:22;;7032:2;7014:16;;;7010:25;7007:45;;;7048:1;7045;7038:12;7632:541;7718:6;7726;7734;7742;7795:3;7783:9;7774:7;7770:23;7766:33;7763:53;;;7812:1;7809;7802:12;7763:53;7848:9;7835:23;7825:33;;7908:2;7897:9;7893:18;7880:32;7921:39;7954:5;7921:39;:::i;:::-;7979:5;-1:-1:-1;8031:2:234;8016:18;;8003:32;;-1:-1:-1;8087:2:234;8072:18;;8059:32;8100:41;8059:32;8100:41;:::i;:::-;7632:541;;;;-1:-1:-1;7632:541:234;;-1:-1:-1;;7632:541:234:o;8178:1268::-;8397:13;;8379:32;;8467:4;8455:17;;;8449:24;8427:20;;;8420:54;8530:4;8518:17;;;8512:24;8490:20;;;8483:54;8593:4;8581:17;;;8575:24;8553:20;;;8546:54;8656:4;8644:17;;;8638:24;8616:20;;;8609:54;8719:4;8707:17;;;8701:24;8679:20;;;8672:54;8782:4;8770:17;;;8764:24;8742:20;;;8735:54;8845:4;8833:17;;;8827:24;8805:20;;;8798:54;8871:6;8919:15;;;8913:22;8893:18;;;8886:50;8955:6;9003:15;;;8997:22;8977:18;;;8970:50;9039:6;9087:15;;;9081:22;9061:18;;;9054:50;9123:6;9171:15;;;9165:22;9145:18;;;9138:50;9207:6;9255:15;;;9249:22;9229:18;;;9222:50;9291:6;9339:15;;;9333:22;9313:18;;;9306:50;9375:6;9423:15;;;9417:22;9397:18;;;9390:50;;;;8366:3;8351:19;;8178:1268::o;9451:390::-;9516:6;9524;9577:2;9565:9;9556:7;9552:23;9548:32;9545:52;;;9593:1;9590;9583:12;9545:52;9632:9;9619:23;9651:39;9684:5;9651:39;:::i;:::-;9709:5;-1:-1:-1;9766:2:234;9751:18;;9738:32;9779:30;9738:32;9779:30;:::i;9846:391::-;9923:6;9931;9939;9992:2;9980:9;9971:7;9967:23;9963:32;9960:52;;;10008:1;10005;9998:12;9960:52;10044:9;10031:23;10021:33;;10104:2;10093:9;10089:18;10076:32;10117:39;10150:5;10117:39;:::i;:::-;9846:391;;10175:5;;-1:-1:-1;;;10227:2:234;10212:18;;;;10199:32;;9846:391::o;10504:1542::-;10728:13;;-1:-1:-1;;;;;1809:31:234;1797:44;;10696:3;10681:19;;10800:4;10792:6;10788:17;10782:24;10815:54;10863:4;10852:9;10848:20;10834:12;-1:-1:-1;;;;;1809:31:234;1797:44;;1743:104;10815:54;;10918:4;10910:6;10906:17;10900:24;10933:56;10983:4;10972:9;10968:20;10952:14;-1:-1:-1;;;;;1809:31:234;1797:44;;1743:104;10933:56;;11045:4;11037:6;11033:17;11027:24;11020:4;11009:9;11005:20;10998:54;11108:4;11100:6;11096:17;11090:24;11083:4;11072:9;11068:20;11061:54;11171:4;11163:6;11159:17;11153:24;11146:4;11135:9;11131:20;11124:54;11234:4;11226:6;11222:17;11216:24;11209:4;11198:9;11194:20;11187:54;11297:4;11289:6;11285:17;11279:24;11272:4;11261:9;11257:20;11250:54;11323:6;11383:2;11375:6;11371:15;11365:22;11360:2;11349:9;11345:18;11338:50;;11407:6;11467:2;11459:6;11455:15;11449:22;11444:2;11433:9;11429:18;11422:50;;11491:6;11546:2;11538:6;11534:15;11528:22;11559:54;11609:2;11598:9;11594:18;11578:14;-1:-1:-1;;;;;1809:31:234;1797:44;;1743:104;11559:54;-1:-1:-1;;11632:6:234;11675:15;;;11669:22;-1:-1:-1;;;;;1809:31:234;;11735:18;;;1797:44;-1:-1:-1;;11773:6:234;11816:15;;;11810:22;-1:-1:-1;;;;;1809:31:234;;11876:18;;;1797:44;-1:-1:-1;;11914:6:234;11957:15;;;11951:22;10312:12;;12021:18;;;10300:25;10374:4;10363:16;;10357:23;10341:14;;;10334:47;10430:4;10419:16;;10413:23;10397:14;;;10390:47;10486:4;10475:16;;10469:23;10453:14;;;10446:47;11982:58;;;10504:1542;;;;:::o;12051:437::-;12137:6;12145;12198:2;12186:9;12177:7;12173:23;12169:32;12166:52;;;12214:1;12211;12204:12;12166:52;12254:9;12241:23;12287:18;12279:6;12276:30;12273:50;;;12319:1;12316;12309:12;12273:50;12358:70;12420:7;12411:6;12400:9;12396:22;12358:70;:::i;:::-;12447:8;;12332:96;;-1:-1:-1;12051:437:234;-1:-1:-1;;;;12051:437:234:o;12493:632::-;12664:2;12716:21;;;12786:13;;12689:18;;;12808:22;;;12635:4;;12664:2;12887:15;;;;12861:2;12846:18;;;12635:4;12930:169;12944:6;12941:1;12938:13;12930:169;;;13005:13;;12993:26;;13074:15;;;;13039:12;;;;12966:1;12959:9;12930:169;;;-1:-1:-1;13116:3:234;;12493:632;-1:-1:-1;;;;;;12493:632:234:o;13528:1652::-;13754:13;;-1:-1:-1;;;;;5170:46:234;5158:59;;13722:3;13707:19;;13826:4;13818:6;13814:17;13808:24;13841:54;13889:4;13878:9;13874:20;13860:12;-1:-1:-1;;;;;5170:46:234;5158:59;;5104:119;13841:54;;13944:4;13936:6;13932:17;13926:24;13959:56;14009:4;13998:9;13994:20;13978:14;-1:-1:-1;;;;;5170:46:234;5158:59;;5104:119;13959:56;;14064:4;14056:6;14052:17;14046:24;14079:56;14129:4;14118:9;14114:20;14098:14;-1:-1:-1;;;;;5170:46:234;5158:59;;5104:119;14079:56;;14184:4;14176:6;14172:17;14166:24;14199:55;14248:4;14237:9;14233:20;14217:14;13386:2;13375:21;13363:34;;13310:93;14199:55;;14303:4;14295:6;14291:17;14285:24;14318:56;14368:4;14357:9;14353:20;14337:14;-1:-1:-1;;;;;5170:46:234;5158:59;;5104:119;14318:56;;14423:4;14415:6;14411:17;14405:24;14438:56;14488:4;14477:9;14473:20;14457:14;-1:-1:-1;;;;;5170:46:234;5158:59;;5104:119;14438:56;;14543:4;14535:6;14531:17;14525:24;14558:56;14608:4;14597:9;14593:20;14577:14;-1:-1:-1;;;;;5170:46:234;5158:59;;5104:119;14558:56;-1:-1:-1;14633:6:234;14676:15;;;14670:22;7414:13;7407:21;14733:18;;;7395:34;14771:6;14814:15;;;14808:22;7414:13;7407:21;14871:18;;;7395:34;14909:6;14952:15;;;14946:22;-1:-1:-1;;;;;13474:42:234;15012:18;;;13462:55;15050:6;15094:15;;;15088:22;-1:-1:-1;;;;;5170:46:234;;15155:18;;;5158:59;15119:55;5104:119;15185:691;15280:6;15288;15296;15304;15312;15365:3;15353:9;15344:7;15340:23;15336:33;15333:53;;;15382:1;15379;15372:12;15333:53;15418:9;15405:23;15395:33;;15478:2;15467:9;15463:18;15450:32;15491:39;15524:5;15491:39;:::i;:::-;15549:5;-1:-1:-1;15606:2:234;15591:18;;15578:32;15619:41;15578:32;15619:41;:::i;:::-;15679:7;-1:-1:-1;15733:2:234;15718:18;;15705:32;;-1:-1:-1;15789:3:234;15774:19;;15761:33;15803:41;15761:33;15803:41;:::i;:::-;15863:7;15853:17;;;15185:691;;;;;;;;:::o;15881:404::-;15949:6;15957;16010:2;15998:9;15989:7;15985:23;15981:32;15978:52;;;16026:1;16023;16016:12;15978:52;16065:9;16052:23;16084:39;16117:5;16084:39;:::i;:::-;16142:5;-1:-1:-1;16199:2:234;16184:18;;16171:32;16212:41;16171:32;16212:41;:::i;17183:127::-;17244:10;17239:3;17235:20;17232:1;17225:31;17275:4;17272:1;17265:15;17299:4;17296:1;17289:15;17315:127;17376:10;17371:3;17367:20;17364:1;17357:31;17407:4;17404:1;17397:15;17431:4;17428:1;17421:15;17447:125;17512:9;;;17533:10;;;17530:36;;;17546:18;;:::i;17577:128::-;17644:9;;;17665:11;;;17662:37;;;17679:18;;:::i;17710:127::-;17771:10;17766:3;17762:20;17759:1;17752:31;17802:4;17799:1;17792:15;17826:4;17823:1;17816:15;17842:127;17903:10;17898:3;17894:20;17891:1;17884:31;17934:4;17931:1;17924:15;17958:4;17955:1;17948:15;19394:449;-1:-1:-1;;;19651:3:234;19644:32;19626:3;19705:6;19699:13;19721:75;19789:6;19784:2;19779:3;19775:12;19768:4;19760:6;19756:17;19721:75;:::i;:::-;19816:16;;;;19834:2;19812:25;;19394:449;-1:-1:-1;;19394:449:234:o;19848:450::-;-1:-1:-1;;;20105:3:234;20098:33;20080:3;20160:6;20154:13;20176:75;20244:6;20239:2;20234:3;20230:12;20223:4;20215:6;20211:17;20176:75;:::i;:::-;20271:16;;;;20289:2;20267:25;;19848:450;-1:-1:-1;;19848:450:234:o;20526:184::-;20596:6;20649:2;20637:9;20628:7;20624:23;20620:32;20617:52;;;20665:1;20662;20655:12;20617:52;-1:-1:-1;20688:16:234;;20526:184;-1:-1:-1;20526:184:234:o;22374:448::-;-1:-1:-1;;;22631:3:234;22624:31;22606:3;22684:6;22678:13;22700:75;22768:6;22763:2;22758:3;22754:12;22747:4;22739:6;22735:17;22700:75;:::i;:::-;22795:16;;;;22813:2;22791:25;;22374:448;-1:-1:-1;;22374:448:234:o;22827:449::-;-1:-1:-1;;;23084:3:234;23077:32;23059:3;23138:6;23132:13;23154:75;23222:6;23217:2;23212:3;23208:12;23201:4;23193:6;23189:17;23154:75;:::i;24006:200::-;24072:9;;;24045:4;24100:9;;24128:10;;24140:12;;;24124:29;24163:12;;;24155:21;;24121:56;24118:82;;;24180:18;;:::i;24211:127::-;24272:10;24267:3;24263:20;24260:1;24253:31;24303:4;24300:1;24293:15;24327:4;24324:1;24317:15;24343:112;24375:1;24401;24391:35;;24406:18;;:::i;:::-;-1:-1:-1;24440:9:234;;24343:112::o;24460:135::-;24499:3;24520:17;;;24517:43;;24540:18;;:::i;:::-;-1:-1:-1;24587:1:234;24576:13;;24460:135::o;24600:120::-;24640:1;24666;24656:35;;24671:18;;:::i;:::-;-1:-1:-1;24705:9:234;;24600:120::o;24725:521::-;24802:4;24808:6;24868:11;24855:25;24962:2;24958:7;24947:8;24931:14;24927:29;24923:43;24903:18;24899:68;24889:96;;24981:1;24978;24971:12;24889:96;25008:33;;25060:20;;;-1:-1:-1;25103:18:234;25092:30;;25089:50;;;25135:1;25132;25125:12;25089:50;25168:4;25156:17;;-1:-1:-1;25199:14:234;25195:27;;;25185:38;;25182:58;;;25236:1;25233;25226:12;25251:168;25324:9;;;25355;;25372:15;;;25366:22;;25352:37;25342:71;;25393:18;;:::i;25424:216::-;25488:9;;;25516:11;;;25463:3;25546:9;;25574:10;;25570:19;;25599:10;;25591:19;;25567:44;25564:70;;;25614:18;;:::i;25645:245::-;25712:6;25765:2;25753:9;25744:7;25740:23;25736:32;25733:52;;;25781:1;25778;25771:12;25733:52;25813:9;25807:16;25832:28;25854:5;25832:28;:::i;25895:136::-;25930:3;-1:-1:-1;;;25951:22:234;;25948:48;;25976:18;;:::i;:::-;-1:-1:-1;26016:1:234;26012:13;;25895:136::o;26036:287::-;26165:3;26203:6;26197:13;26219:66;26278:6;26273:3;26266:4;26258:6;26254:17;26219:66;:::i;:::-;26301:16;;;;;26036:287;-1:-1:-1;;26036:287:234:o;26328:193::-;26367:1;26393;26383:35;;26398:18;;:::i;:::-;-1:-1:-1;;;26434:18:234;;-1:-1:-1;;26454:13:234;;26430:38;26427:64;;;26471:18;;:::i;:::-;-1:-1:-1;26505:10:234;;26328:193::o",
        "linkReferences": {},
        "immutableReferences": {
            "17691": [
                {
                    "start": 2633,
                    "length": 32
                },
                {
                    "start": 3475,
                    "length": 32
                }
            ],
            "17695": [
                {
                    "start": 1351,
                    "length": 32
                },
                {
                    "start": 2670,
                    "length": 32
                },
                {
                    "start": 8287,
                    "length": 32
                },
                {
                    "start": 8764,
                    "length": 32
                },
                {
                    "start": 9392,
                    "length": 32
                },
                {
                    "start": 9512,
                    "length": 32
                }
            ],
            "17698": [
                {
                    "start": 2951,
                    "length": 32
                },
                {
                    "start": 9628,
                    "length": 32
                }
            ],
            "17701": [
                {
                    "start": 2913,
                    "length": 32
                },
                {
                    "start": 3564,
                    "length": 32
                },
                {
                    "start": 8955,
                    "length": 32
                }
            ],
            "17704": [
                {
                    "start": 2990,
                    "length": 32
                },
                {
                    "start": 7270,
                    "length": 32
                }
            ],
            "17707": [
                {
                    "start": 3070,
                    "length": 32
                }
            ],
            "17710": [
                {
                    "start": 3105,
                    "length": 32
                }
            ],
            "17713": [
                {
                    "start": 3142,
                    "length": 32
                }
            ],
            "17716": [
                {
                    "start": 3179,
                    "length": 32
                }
            ],
            "17719": [
                {
                    "start": 2795,
                    "length": 32
                },
                {
                    "start": 7156,
                    "length": 32
                }
            ],
            "17722": [
                {
                    "start": 2837,
                    "length": 32
                },
                {
                    "start": 7194,
                    "length": 32
                }
            ],
            "17725": [
                {
                    "start": 2875,
                    "length": 32
                },
                {
                    "start": 7232,
                    "length": 32
                }
            ],
            "17759": [
                {
                    "start": 2714,
                    "length": 32
                },
                {
                    "start": 6731,
                    "length": 32
                }
            ],
            "17762": [
                {
                    "start": 2753,
                    "length": 32
                },
                {
                    "start": 6792,
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vaultSharesToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token address.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The MultiToken's decimals.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vaultSharesToken()\":{\"returns\":{\"_0\":\"The vault shares token address.\"}}},\"title\":\"StETHTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsupportedToken()\":[{\"notice\":\"Thrown when an unsupported option is passed to a function or         a user attempts to sweep an invalid token. The options and sweep         targets that are supported vary between instances.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"decimals()\":{\"notice\":\"Returns the MultiToken's decimals.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to change the sweep collector.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the sweep         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vaultSharesToken()\":{\"notice\":\"Gets the vault shares token.\"}},\"notice\":\"StETHHyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/steth/StETHTarget0.sol\":\"StETHTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/instances/steth/StETHBase.sol\":{\"keccak256\":\"0x09a034440b771cff04168ffc24f1adacc1d62720c4beab60565e828fd1db84a2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0efc44043bec87c7140b04ad38c98bed2ed9a47dd491a3ec5a10e9880dc690d\",\"dweb:/ipfs/Qmb3QMmYAF9TbKMxidjdPjHbFpEp7uXLFXbf2m8mt3TwN4\"]},\"contracts/src/instances/steth/StETHTarget0.sol\":{\"keccak256\":\"0xe1055d6ebd70b0bea766fa51cd8462886c72429bb36e06332c16f9958166a245\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbdaf4f11eb03dbd3e8bc993d2969191d11df0cb9d4afdca26ef7369b5c9c144\",\"dweb:/ipfs/QmWc2m3NSugj3bKEPis1CEhTQ2Mre12hJFfXmxBC8oocHr\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3\",\"dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad\",\"dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557\",\"dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c\",\"dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a\",\"dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9\",\"dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                            "name": "checkpointVaultSharePrice",
                            "type": "uint256",
                            "indexed": false
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
                    "stateMutability": "pure",
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
                            "_0": "The MultiToken's decimals."
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
                        "notice": "Initializes the target0 contract."
                    },
                    "decimals()": {
                        "notice": "Returns the MultiToken's decimals."
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
                "contracts/src/instances/steth/StETHTarget0.sol": "StETHTarget0"
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
            "contracts/src/instances/steth/StETHBase.sol": {
                "keccak256": "0x09a034440b771cff04168ffc24f1adacc1d62720c4beab60565e828fd1db84a2",
                "urls": [
                    "bzz-raw://f0efc44043bec87c7140b04ad38c98bed2ed9a47dd491a3ec5a10e9880dc690d",
                    "dweb:/ipfs/Qmb3QMmYAF9TbKMxidjdPjHbFpEp7uXLFXbf2m8mt3TwN4"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/steth/StETHTarget0.sol": {
                "keccak256": "0xe1055d6ebd70b0bea766fa51cd8462886c72429bb36e06332c16f9958166a245",
                "urls": [
                    "bzz-raw://fbdaf4f11eb03dbd3e8bc993d2969191d11df0cb9d4afdca26ef7369b5c9c144",
                    "dweb:/ipfs/QmWc2m3NSugj3bKEPis1CEhTQ2Mre12hJFfXmxBC8oocHr"
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
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
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
            "contracts/src/interfaces/ILido.sol": {
                "keccak256": "0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6",
                "urls": [
                    "bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3",
                    "dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE"
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
                "keccak256": "0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95",
                "urls": [
                    "bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad",
                    "dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b"
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
                "keccak256": "0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588",
                "urls": [
                    "bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557",
                    "dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976",
                "urls": [
                    "bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c",
                    "dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER"
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
                "keccak256": "0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed",
                "urls": [
                    "bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a",
                    "dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX"
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
                "keccak256": "0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1",
                "urls": [
                    "bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9",
                    "dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh"
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
        "absolutePath": "contracts/src/instances/steth/StETHTarget0.sol",
        "id": 9616,
        "exportedSymbols": {
            "HyperdriveTarget0": [
                5242
            ],
            "IHyperdrive": [
                10506
            ],
            "StETHBase": [
                9532
            ],
            "StETHTarget0": [
                9615
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1144:74",
        "nodes": [
            {
                "id": 9574,
                "nodeType": "PragmaDirective",
                "src": "39:23:74",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 9576,
                "nodeType": "ImportDirective",
                "src": "64:73:74",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "../../external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9616,
                "sourceUnit": 5243,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9575,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5242,
                            "src": "73:17:74",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9578,
                "nodeType": "ImportDirective",
                "src": "138:63:74",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9616,
                "sourceUnit": 10507,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9577,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10506,
                            "src": "147:11:74",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9580,
                "nodeType": "ImportDirective",
                "src": "202:44:74",
                "nodes": [],
                "absolutePath": "contracts/src/instances/steth/StETHBase.sol",
                "file": "./StETHBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9616,
                "sourceUnit": 9533,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9579,
                            "name": "StETHBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9532,
                            "src": "211:9:74",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9615,
                "nodeType": "ContractDefinition",
                "src": "684:498:74",
                "nodes": [
                    {
                        "id": 9596,
                        "nodeType": "FunctionDefinition",
                        "src": "859:94:74",
                        "nodes": [],
                        "body": {
                            "id": 9595,
                            "nodeType": "Block",
                            "src": "951:2:74",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 9586,
                            "nodeType": "StructuredDocumentation",
                            "src": "744:110:74",
                            "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 9592,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9589,
                                        "src": "942:7:74",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 9593,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 9591,
                                    "name": "HyperdriveTarget0",
                                    "nameLocations": [
                                        "924:17:74"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5242,
                                    "src": "924:17:74"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "924:26:74"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 9590,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9589,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "910:7:74",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9596,
                                    "src": "880:37:74",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 9588,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9587,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "880:11:74",
                                                "892:10:74"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "880:22:74"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "880:22:74",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "870:53:74"
                        },
                        "returnParameters": {
                            "id": 9594,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "951:0:74"
                        },
                        "scope": 9615,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 9614,
                        "nodeType": "FunctionDefinition",
                        "src": "1074:106:74",
                        "nodes": [],
                        "body": {
                            "id": 9613,
                            "nodeType": "Block",
                            "src": "1133:47:74",
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
                                                                "hexValue": "3138",
                                                                "id": 9608,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "1168:2:74",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_18_by_1",
                                                                    "typeString": "int_const 18"
                                                                },
                                                                "value": "18"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_rational_18_by_1",
                                                                    "typeString": "int_const 18"
                                                                }
                                                            ],
                                                            "id": 9607,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1162:5:74",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint8_$",
                                                                "typeString": "type(uint8)"
                                                            },
                                                            "typeName": {
                                                                "id": 9606,
                                                                "name": "uint8",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "1162:5:74",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 9609,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1162:9:74",
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
                                                        "id": 9604,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1151:3:74",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 9605,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1155:6:74",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1151:10:74",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 9610,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1151:21:74",
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
                                            "id": 9603,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5241,
                                            "src": "1143:7:74",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 9611,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1143:30:74",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 9612,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1143:30:74"
                                }
                            ]
                        },
                        "baseFunctions": [
                            5172
                        ],
                        "documentation": {
                            "id": 9597,
                            "nodeType": "StructuredDocumentation",
                            "src": "980:89:74",
                            "text": "@notice Returns the MultiToken's decimals.\n @return The MultiToken's decimals."
                        },
                        "functionSelector": "313ce567",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nameLocation": "1083:8:74",
                        "overrides": {
                            "id": 9599,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "1108:8:74"
                        },
                        "parameters": {
                            "id": 9598,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1091:2:74"
                        },
                        "returnParameters": {
                            "id": 9602,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9601,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9614,
                                    "src": "1126:5:74",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 9600,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1126:5:74",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1125:7:74"
                        },
                        "scope": 9615,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 9582,
                            "name": "HyperdriveTarget0",
                            "nameLocations": [
                                "709:17:74"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5242,
                            "src": "709:17:74"
                        },
                        "id": 9583,
                        "nodeType": "InheritanceSpecifier",
                        "src": "709:17:74"
                    },
                    {
                        "baseName": {
                            "id": 9584,
                            "name": "StETHBase",
                            "nameLocations": [
                                "728:9:74"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9532,
                            "src": "728:9:74"
                        },
                        "id": 9585,
                        "nodeType": "InheritanceSpecifier",
                        "src": "728:9:74"
                    }
                ],
                "canonicalName": "StETHTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 9581,
                    "nodeType": "StructuredDocumentation",
                    "src": "248:436:74",
                    "text": "@author DELV\n @title StETHTarget0\n @notice StETHHyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    9615,
                    9532,
                    5242,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609,
                    11357,
                    11697
                ],
                "name": "StETHTarget0",
                "nameLocation": "693:12:74",
                "scope": 9616,
                "usedErrors": [
                    10365,
                    10371,
                    10374,
                    10392,
                    10395,
                    10404,
                    10407,
                    10410,
                    10413,
                    10437,
                    10442,
                    10445,
                    10454,
                    10469,
                    10472,
                    70940,
                    71221,
                    71226,
                    71229,
                    71510
                ],
                "usedEvents": [
                    10855,
                    10870,
                    10889,
                    10904,
                    10921,
                    10940,
                    10959,
                    10980,
                    10995,
                    11002,
                    11007,
                    11012,
                    11017,
                    11024,
                    11029,
                    11036,
                    11590,
                    11599,
                    11608
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 74
};
