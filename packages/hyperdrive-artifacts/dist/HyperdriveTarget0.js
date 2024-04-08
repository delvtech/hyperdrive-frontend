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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vaultSharesToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token address.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vaultSharesToken()\":{\"returns\":{\"_0\":\"The vault shares token address.\"}}},\"title\":\"HyperdriveTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates target0.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to change the sweep collector.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the sweep         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vaultSharesToken()\":{\"notice\":\"Gets the vault shares token.\"}},\"notice\":\"Hyperdrive's target 0 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/HyperdriveTarget0.sol\":\"HyperdriveTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
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
                "keccak256": "0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8",
                "urls": [
                    "bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd",
                    "dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3",
                "urls": [
                    "bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186",
                    "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7",
                "urls": [
                    "bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334",
                    "dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488",
                "urls": [
                    "bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4",
                    "dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc",
                "urls": [
                    "bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4",
                    "dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ"
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
                "keccak256": "0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c",
                "urls": [
                    "bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c",
                    "dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e",
                "urls": [
                    "bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19",
                    "dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d"
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
                "keccak256": "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb",
                "urls": [
                    "bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c",
                    "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424",
                "urls": [
                    "bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a",
                    "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189",
                "urls": [
                    "bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786",
                    "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e",
                "urls": [
                    "bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797",
                    "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"
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
        "id": 5191,
        "exportedSymbols": {
            "AssetId": [
                18009
            ],
            "FixedPointMath": [
                18822
            ],
            "HyperdriveAdmin": [
                12497
            ],
            "HyperdriveCheckpoint": [
                14161
            ],
            "HyperdriveLP": [
                15127
            ],
            "HyperdriveLong": [
                16054
            ],
            "HyperdriveMultiToken": [
                16538
            ],
            "HyperdriveShort": [
                17512
            ],
            "HyperdriveStorage": [
                17734
            ],
            "HyperdriveTarget0": [
                5190
            ],
            "IERC20": [
                9666
            ],
            "IHyperdrive": [
                10351
            ],
            "IHyperdriveRead": [
                11207
            ],
            "LPMath": [
                21642
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:18380:37",
        "nodes": [
            {
                "id": 4377,
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
                "id": 4379,
                "nodeType": "ImportDirective",
                "src": "64:50:37",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 9667,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4378,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9666,
                            "src": "73:6:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4381,
                "nodeType": "ImportDirective",
                "src": "115:60:37",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4380,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "124:11:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4383,
                "nodeType": "ImportDirective",
                "src": "176:68:37",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
                "file": "../interfaces/IHyperdriveRead.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 11208,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4382,
                            "name": "IHyperdriveRead",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11207,
                            "src": "185:15:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4385,
                "nodeType": "ImportDirective",
                "src": "245:66:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
                "file": "../internal/HyperdriveAdmin.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 12498,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4384,
                            "name": "HyperdriveAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12497,
                            "src": "254:15:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4387,
                "nodeType": "ImportDirective",
                "src": "312:76:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
                "file": "../internal/HyperdriveCheckpoint.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 14162,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4386,
                            "name": "HyperdriveCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14161,
                            "src": "321:20:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4389,
                "nodeType": "ImportDirective",
                "src": "389:64:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
                "file": "../internal/HyperdriveLong.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 16055,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4388,
                            "name": "HyperdriveLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16054,
                            "src": "398:14:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4391,
                "nodeType": "ImportDirective",
                "src": "454:60:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
                "file": "../internal/HyperdriveLP.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 15128,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4390,
                            "name": "HyperdriveLP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15127,
                            "src": "463:12:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4393,
                "nodeType": "ImportDirective",
                "src": "515:76:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
                "file": "../internal/HyperdriveMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 16539,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4392,
                            "name": "HyperdriveMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16538,
                            "src": "524:20:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4395,
                "nodeType": "ImportDirective",
                "src": "592:66:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
                "file": "../internal/HyperdriveShort.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 17513,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4394,
                            "name": "HyperdriveShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17512,
                            "src": "601:15:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4397,
                "nodeType": "ImportDirective",
                "src": "659:70:37",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
                "file": "../internal/HyperdriveStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 17735,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4396,
                            "name": "HyperdriveStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17734,
                            "src": "668:17:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4399,
                "nodeType": "ImportDirective",
                "src": "730:51:37",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 18010,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4398,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18009,
                            "src": "739:7:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4401,
                "nodeType": "ImportDirective",
                "src": "782:65:37",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4400,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18822,
                            "src": "791:14:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 4403,
                "nodeType": "ImportDirective",
                "src": "848:49:37",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5191,
                "sourceUnit": 21643,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4402,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21642,
                            "src": "857:6:37",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5190,
                "nodeType": "ContractDefinition",
                "src": "1219:17199:37",
                "nodes": [
                    {
                        "id": 4421,
                        "nodeType": "UsingForDirective",
                        "src": "1416:33:37",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 4419,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1422:14:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "1422:14:37"
                        },
                        "typeName": {
                            "id": 4420,
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
                        "id": 4432,
                        "nodeType": "FunctionDefinition",
                        "src": "1558:94:37",
                        "nodes": [],
                        "body": {
                            "id": 4431,
                            "nodeType": "Block",
                            "src": "1650:2:37",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 4422,
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
                                        "id": 4428,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4425,
                                        "src": "1641:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 4429,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 4427,
                                    "name": "HyperdriveStorage",
                                    "nameLocations": [
                                        "1623:17:37"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 17734,
                                    "src": "1623:17:37"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1623:26:37"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 4426,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4425,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1609:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4432,
                                    "src": "1579:37:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 4424,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4423,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1579:11:37",
                                                "1591:10:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "1579:22:37"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "1579:22:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1569:53:37"
                        },
                        "returnParameters": {
                            "id": 4430,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1650:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 4446,
                        "nodeType": "FunctionDefinition",
                        "src": "2027:174:37",
                        "nodes": [],
                        "body": {
                            "id": 4445,
                            "nodeType": "Block",
                            "src": "2146:55:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4442,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4436,
                                                "src": "2185:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 4441,
                                            "name": "_collectGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12277,
                                            "src": "2163:21:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) returns (uint256)"
                                            }
                                        },
                                        "id": 4443,
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
                                    "functionReturnParameters": 4440,
                                    "id": 4444,
                                    "nodeType": "Return",
                                    "src": "2156:38:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4433,
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
                            "id": 4437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4436,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "2095:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4446,
                                    "src": "2066:37:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 4435,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4434,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "2066:11:37",
                                                "2078:7:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10210,
                                            "src": "2066:19:37"
                                        },
                                        "referencedDeclaration": 10210,
                                        "src": "2066:19:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2056:53:37"
                        },
                        "returnParameters": {
                            "id": 4440,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4439,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "2136:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4446,
                                    "src": "2128:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4438,
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
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4457,
                        "nodeType": "FunctionDefinition",
                        "src": "2353:70:37",
                        "nodes": [],
                        "body": {
                            "id": 4456,
                            "nodeType": "Block",
                            "src": "2391:32:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4453,
                                                "name": "_status",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4449,
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
                                            "id": 4452,
                                            "name": "_pause",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12306,
                                            "src": "2401:6:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                                                "typeString": "function (bool)"
                                            }
                                        },
                                        "id": 4454,
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
                                    "id": 4455,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2401:15:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4447,
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
                            "id": 4450,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4449,
                                    "mutability": "mutable",
                                    "name": "_status",
                                    "nameLocation": "2373:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4457,
                                    "src": "2368:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4448,
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
                            "id": 4451,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2391:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4468,
                        "nodeType": "FunctionDefinition",
                        "src": "2543:87:37",
                        "nodes": [],
                        "body": {
                            "id": 4467,
                            "nodeType": "Block",
                            "src": "2591:39:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4464,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4460,
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
                                            "id": 4463,
                                            "name": "_setFeeCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12332,
                                            "src": "2601:16:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 4465,
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
                                    "id": 4466,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2601:22:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4458,
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
                            "id": 4461,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4460,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "2576:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4468,
                                    "src": "2568:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4459,
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
                            "id": 4462,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2591:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4479,
                        "nodeType": "FunctionDefinition",
                        "src": "2754:91:37",
                        "nodes": [],
                        "body": {
                            "id": 4478,
                            "nodeType": "Block",
                            "src": "2804:41:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4475,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4471,
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
                                            "id": 4474,
                                            "name": "_setSweepCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12358,
                                            "src": "2814:18:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 4476,
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
                                    "id": 4477,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2814:24:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4469,
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
                            "id": 4472,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4471,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "2789:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4479,
                                    "src": "2781:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4470,
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
                            "id": 4473,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2804:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4490,
                        "nodeType": "FunctionDefinition",
                        "src": "2955:83:37",
                        "nodes": [],
                        "body": {
                            "id": 4489,
                            "nodeType": "Block",
                            "src": "3001:37:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4486,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4482,
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
                                            "id": 4485,
                                            "name": "_setGovernance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12384,
                                            "src": "3011:14:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 4487,
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
                                    "id": 4488,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3011:20:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4480,
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
                            "id": 4483,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4482,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "2986:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4490,
                                    "src": "2978:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4481,
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
                            "id": 4484,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3001:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4504,
                        "nodeType": "FunctionDefinition",
                        "src": "3208:94:37",
                        "nodes": [],
                        "body": {
                            "id": 4503,
                            "nodeType": "Block",
                            "src": "3262:40:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4499,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4493,
                                                "src": "3283:3:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4500,
                                                "name": "status",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4495,
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
                                            "id": 4498,
                                            "name": "_setPauser",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12415,
                                            "src": "3272:10:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,bool)"
                                            }
                                        },
                                        "id": 4501,
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
                                    "id": 4502,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3272:23:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4491,
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
                            "id": 4496,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4493,
                                    "mutability": "mutable",
                                    "name": "who",
                                    "nameLocation": "3235:3:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4504,
                                    "src": "3227:11:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4492,
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
                                    "id": 4495,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "3245:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4504,
                                    "src": "3240:11:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4494,
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
                            "id": 4497,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3262:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4516,
                        "nodeType": "FunctionDefinition",
                        "src": "3708:72:37",
                        "nodes": [],
                        "body": {
                            "id": 4515,
                            "nodeType": "Block",
                            "src": "3748:32:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4512,
                                                "name": "_target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4508,
                                                "src": "3765:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                    "typeString": "contract IERC20"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                    "typeString": "contract IERC20"
                                                }
                                            ],
                                            "id": 4511,
                                            "name": "_sweep",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12496,
                                            "src": "3758:6:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$9666_$returns$__$",
                                                "typeString": "function (contract IERC20)"
                                            }
                                        },
                                        "id": 4513,
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
                                    "id": 4514,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3758:15:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4505,
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
                            "id": 4509,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4508,
                                    "mutability": "mutable",
                                    "name": "_target",
                                    "nameLocation": "3730:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4516,
                                    "src": "3723:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 4507,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4506,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "3723:6:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 9666,
                                            "src": "3723:6:37"
                                        },
                                        "referencedDeclaration": 9666,
                                        "src": "3723:6:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3722:16:37"
                        },
                        "returnParameters": {
                            "id": 4510,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3748:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4538,
                        "nodeType": "FunctionDefinition",
                        "src": "4114:240:37",
                        "nodes": [],
                        "body": {
                            "id": 4537,
                            "nodeType": "Block",
                            "src": "4242:112:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4529,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4519,
                                                "src": "4309:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4530,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4521,
                                                "src": "4318:4:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4531,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4523,
                                                "src": "4324:2:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4532,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4525,
                                                "src": "4328:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4533,
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
                                                "id": 4534,
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
                                            "id": 4528,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16262,
                                            "src": "4295:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 4535,
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
                                    "id": 4536,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4295:52:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4517,
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
                            "id": 4526,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4519,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "4153:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4538,
                                    "src": "4145:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4518,
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
                                    "id": 4521,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "4178:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4538,
                                    "src": "4170:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4520,
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
                                    "id": 4523,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "4200:2:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4538,
                                    "src": "4192:10:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4522,
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
                                    "id": 4525,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "4220:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4538,
                                    "src": "4212:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4524,
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
                            "id": 4527,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4242:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4564,
                        "nodeType": "FunctionDefinition",
                        "src": "4759:285:37",
                        "nodes": [],
                        "body": {
                            "id": 4563,
                            "nodeType": "Block",
                            "src": "4937:107:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4556,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4541,
                                                "src": "5003:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4557,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4543,
                                                "src": "5012:4:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4558,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4545,
                                                "src": "5018:2:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4559,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4547,
                                                "src": "5022:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4560,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4549,
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
                                            "id": 4555,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16262,
                                            "src": "4989:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 4561,
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
                                    "id": 4562,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4989:48:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4539,
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
                                        "id": 4552,
                                        "name": "tokenID",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4541,
                                        "src": "4928:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                ],
                                "id": 4553,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 4551,
                                    "name": "onlyLinker",
                                    "nameLocations": [
                                        "4917:10:37"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 16087,
                                    "src": "4917:10:37"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4917:19:37"
                            }
                        ],
                        "name": "transferFromBridge",
                        "nameLocation": "4768:18:37",
                        "parameters": {
                            "id": 4550,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4541,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "4804:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4564,
                                    "src": "4796:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4540,
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
                                    "id": 4543,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "4829:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4564,
                                    "src": "4821:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4542,
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
                                    "id": 4545,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "4851:2:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4564,
                                    "src": "4843:10:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4544,
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
                                    "id": 4547,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "4871:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4564,
                                    "src": "4863:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4546,
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
                                    "id": 4549,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "4895:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4564,
                                    "src": "4887:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4548,
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
                            "id": 4554,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4937:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4587,
                        "nodeType": "FunctionDefinition",
                        "src": "5551:225:37",
                        "nodes": [],
                        "body": {
                            "id": 4586,
                            "nodeType": "Block",
                            "src": "5712:64:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4580,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4567,
                                                "src": "5735:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4581,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4569,
                                                "src": "5744:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4582,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4571,
                                                "src": "5754:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4583,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4573,
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
                                            "id": 4579,
                                            "name": "_setApproval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16291,
                                            "src": "5722:12:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,uint256,address)"
                                            }
                                        },
                                        "id": 4584,
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
                                    "id": 4585,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5722:47:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4565,
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
                                        "id": 4576,
                                        "name": "tokenID",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4567,
                                        "src": "5703:7:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                ],
                                "id": 4577,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 4575,
                                    "name": "onlyLinker",
                                    "nameLocations": [
                                        "5692:10:37"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 16087,
                                    "src": "5692:10:37"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5692:19:37"
                            }
                        ],
                        "name": "setApprovalBridge",
                        "nameLocation": "5560:17:37",
                        "parameters": {
                            "id": 4574,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4567,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "5595:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4587,
                                    "src": "5587:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4566,
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
                                    "id": 4569,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "5620:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4587,
                                    "src": "5612:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4568,
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
                                    "id": 4571,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "5646:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4587,
                                    "src": "5638:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4570,
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
                                    "id": 4573,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "5670:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4587,
                                    "src": "5662:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4572,
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
                            "id": 4578,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5712:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4612,
                        "nodeType": "FunctionDefinition",
                        "src": "6008:277:37",
                        "nodes": [],
                        "body": {
                            "id": 4611,
                            "nodeType": "Block",
                            "src": "6077:208:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 4602,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 4595,
                                                    "name": "_isApprovedForAll",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17622,
                                                    "src": "6124:17:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                                        "typeString": "mapping(address => mapping(address => bool))"
                                                    }
                                                },
                                                "id": 4599,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 4596,
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
                                                    "id": 4597,
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
                                            "id": 4600,
                                            "indexExpression": {
                                                "id": 4598,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4590,
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
                                            "id": 4601,
                                            "name": "approved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4592,
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
                                    "id": 4603,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6124:50:37"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 4605,
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
                                                "id": 4606,
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
                                                "id": 4607,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4590,
                                                "src": "6259:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4608,
                                                "name": "approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4592,
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
                                            "id": 4604,
                                            "name": "ApprovalForAll",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11458,
                                            "src": "6232:14:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,address,bool)"
                                            }
                                        },
                                        "id": 4609,
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
                                    "id": 4610,
                                    "nodeType": "EmitStatement",
                                    "src": "6227:51:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4588,
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
                            "id": 4593,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4590,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "6043:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4612,
                                    "src": "6035:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4589,
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
                                    "id": 4592,
                                    "mutability": "mutable",
                                    "name": "approved",
                                    "nameLocation": "6058:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4612,
                                    "src": "6053:13:37",
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
                            "id": 4594,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6077:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4631,
                        "nodeType": "FunctionDefinition",
                        "src": "6715:179:37",
                        "nodes": [],
                        "body": {
                            "id": 4630,
                            "nodeType": "Block",
                            "src": "6826:68:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4623,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4615,
                                                "src": "6849:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4624,
                                                "name": "operator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4617,
                                                "src": "6858:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4625,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4619,
                                                "src": "6868:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4626,
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
                                                "id": 4627,
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
                                            "id": 4622,
                                            "name": "_setApproval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16291,
                                            "src": "6836:12:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,uint256,address)"
                                            }
                                        },
                                        "id": 4628,
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
                                    "id": 4629,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6836:51:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4613,
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
                            "id": 4620,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4615,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "6753:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4631,
                                    "src": "6745:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4614,
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
                                    "id": 4617,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "6778:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4631,
                                    "src": "6770:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4616,
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
                                    "id": 4619,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6804:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4631,
                                    "src": "6796:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4618,
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
                            "id": 4621,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6826:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4653,
                        "nodeType": "FunctionDefinition",
                        "src": "7181:209:37",
                        "nodes": [],
                        "body": {
                            "id": 4652,
                            "nodeType": "Block",
                            "src": "7332:58:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4646,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4634,
                                                "src": "7361:4:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4647,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4636,
                                                "src": "7367:2:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4648,
                                                "name": "ids",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4639,
                                                "src": "7371:3:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            },
                                            {
                                                "id": 4649,
                                                "name": "values",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4642,
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
                                            "id": 4645,
                                            "name": "_batchTransferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16161,
                                            "src": "7342:18:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_calldata_ptr_$_t_array$_t_uint256_$dyn_calldata_ptr_$returns$__$",
                                                "typeString": "function (address,address,uint256[] calldata,uint256[] calldata)"
                                            }
                                        },
                                        "id": 4650,
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
                                    "id": 4651,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7342:41:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4632,
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
                            "id": 4643,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4634,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "7225:4:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4653,
                                    "src": "7217:12:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4633,
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
                                    "id": 4636,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "7247:2:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4653,
                                    "src": "7239:10:37",
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
                                    "id": 4639,
                                    "mutability": "mutable",
                                    "name": "ids",
                                    "nameLocation": "7278:3:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4653,
                                    "src": "7259:22:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 4637,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7259:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 4638,
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
                                    "id": 4642,
                                    "mutability": "mutable",
                                    "name": "values",
                                    "nameLocation": "7310:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4653,
                                    "src": "7291:25:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 4640,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7291:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 4641,
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
                            "id": 4644,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7332:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4688,
                        "nodeType": "FunctionDefinition",
                        "src": "8726:482:37",
                        "nodes": [],
                        "body": {
                            "id": 4687,
                            "nodeType": "Block",
                            "src": "8981:227:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 4676,
                                                "name": "domainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4656,
                                                "src": "9018:15:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 4677,
                                                "name": "permitTypeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4658,
                                                "src": "9047:14:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 4678,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4660,
                                                "src": "9075:5:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4679,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4662,
                                                "src": "9094:7:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 4680,
                                                "name": "_approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4664,
                                                "src": "9115:9:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 4681,
                                                "name": "deadline",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4666,
                                                "src": "9138:8:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 4682,
                                                "name": "v",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4668,
                                                "src": "9160:1:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint8",
                                                    "typeString": "uint8"
                                                }
                                            },
                                            {
                                                "id": 4683,
                                                "name": "r",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4670,
                                                "src": "9175:1:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 4684,
                                                "name": "s",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4672,
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
                                            "id": 4675,
                                            "name": "_permitForAll",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16489,
                                            "src": "8991:13:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                            }
                                        },
                                        "id": 4685,
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
                                    "id": 4686,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8991:210:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 4654,
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
                            "id": 4673,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4656,
                                    "mutability": "mutable",
                                    "name": "domainSeparator",
                                    "nameLocation": "8765:15:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8757:23:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4655,
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
                                    "id": 4658,
                                    "mutability": "mutable",
                                    "name": "permitTypeHash",
                                    "nameLocation": "8798:14:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8790:22:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4657,
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
                                    "id": 4660,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "8830:5:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8822:13:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4659,
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
                                    "id": 4662,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "8853:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8845:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4661,
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
                                    "id": 4664,
                                    "mutability": "mutable",
                                    "name": "_approved",
                                    "nameLocation": "8875:9:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8870:14:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4663,
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
                                    "id": 4666,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "8902:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8894:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4665,
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
                                    "id": 4668,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "8926:1:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8920:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 4667,
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
                                    "id": 4670,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "8945:1:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8937:9:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4669,
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
                                    "id": 4672,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "8964:1:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4688,
                                    "src": "8956:9:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4671,
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
                            "id": 4674,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8981:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4706,
                        "nodeType": "FunctionDefinition",
                        "src": "9370:121:37",
                        "nodes": [],
                        "body": {
                            "id": 4705,
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
                                                            "id": 4699,
                                                            "name": "_pausers",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17597,
                                                            "src": "9464:8:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 4701,
                                                        "indexExpression": {
                                                            "id": 4700,
                                                            "name": "_account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4691,
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
                                                        "id": 4697,
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
                                                    "id": 4698,
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
                                                "id": 4702,
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
                                            "id": 4696,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "9445:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4703,
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
                                    "id": 4704,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9445:39:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11196
                        ],
                        "documentation": {
                            "id": 4689,
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
                            "id": 4692,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4691,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "9396:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4706,
                                    "src": "9388:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4690,
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
                            "id": 4695,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4694,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4706,
                                    "src": "9429:4:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 4693,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4720,
                        "nodeType": "FunctionDefinition",
                        "src": "9574:101:37",
                        "nodes": [],
                        "body": {
                            "id": 4719,
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
                                                        "id": 4715,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17532,
                                                        "src": "9656:10:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4713,
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
                                                    "id": 4714,
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
                                                "id": 4716,
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
                                            "id": 4712,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "9637:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4717,
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
                                    "id": 4718,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9637:31:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11131
                        ],
                        "documentation": {
                            "id": 4707,
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
                            "id": 4708,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9592:2:37"
                        },
                        "returnParameters": {
                            "id": 4711,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4710,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4720,
                                    "src": "9618:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4709,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4734,
                        "nodeType": "FunctionDefinition",
                        "src": "9774:115:37",
                        "nodes": [],
                        "body": {
                            "id": 4733,
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
                                                        "id": 4729,
                                                        "name": "_vaultSharesToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17536,
                                                        "src": "9863:17:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4727,
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
                                                    "id": 4728,
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
                                                "id": 4730,
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
                                            "id": 4726,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "9844:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4731,
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
                                    "id": 4732,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9844:38:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11137
                        ],
                        "documentation": {
                            "id": 4721,
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
                            "id": 4722,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9799:2:37"
                        },
                        "returnParameters": {
                            "id": 4725,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4724,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4734,
                                    "src": "9825:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 4723,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4753,
                        "nodeType": "FunctionDefinition",
                        "src": "10024:183:37",
                        "nodes": [],
                        "body": {
                            "id": 4752,
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
                                                            "id": 4746,
                                                            "name": "_checkpoints",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17580,
                                                            "src": "10169:12:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10045_storage_$",
                                                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                            }
                                                        },
                                                        "id": 4748,
                                                        "indexExpression": {
                                                            "id": 4747,
                                                            "name": "_checkpointTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4737,
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
                                                            "typeIdentifier": "t_struct$_Checkpoint_$10045_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$10045_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4744,
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
                                                    "id": 4745,
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
                                                "id": 4749,
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
                                            "id": 4743,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "10150:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4750,
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
                                    "id": 4751,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10150:50:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11146
                        ],
                        "documentation": {
                            "id": 4735,
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
                            "id": 4738,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4737,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "10064:15:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4753,
                                    "src": "10056:23:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4736,
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
                            "id": 4742,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4741,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4753,
                                    "src": "10109:29:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Checkpoint_$10045_memory_ptr",
                                        "typeString": "struct IHyperdrive.Checkpoint"
                                    },
                                    "typeName": {
                                        "id": 4740,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4739,
                                            "name": "IHyperdrive.Checkpoint",
                                            "nameLocations": [
                                                "10109:11:37",
                                                "10121:10:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10045,
                                            "src": "10109:22:37"
                                        },
                                        "referencedDeclaration": 10045,
                                        "src": "10109:22:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Checkpoint_$10045_storage_ptr",
                                            "typeString": "struct IHyperdrive.Checkpoint"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10108:31:37"
                        },
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4773,
                        "nodeType": "FunctionDefinition",
                        "src": "10372:213:37",
                        "nodes": [],
                        "body": {
                            "id": 4772,
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
                                                                "id": 4767,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 4765,
                                                                    "name": "_checkpointTime",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 4756,
                                                                    "src": "10531:15:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "+",
                                                                "rightExpression": {
                                                                    "id": 4766,
                                                                    "name": "_positionDuration",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17542,
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
                                                            "id": 4764,
                                                            "name": "_nonNettedLongs",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 12940,
                                                            "src": "10515:15:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$",
                                                                "typeString": "function (uint256) view returns (int256)"
                                                            }
                                                        },
                                                        "id": 4768,
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
                                                        "id": 4762,
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
                                                    "id": 4763,
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
                                                "id": 4769,
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
                                            "id": 4761,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "10483:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4770,
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
                                    "id": 4771,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10483:95:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11154
                        ],
                        "documentation": {
                            "id": 4754,
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
                            "id": 4757,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4756,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "10420:15:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4773,
                                    "src": "10412:23:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4755,
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
                            "id": 4760,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4759,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4773,
                                    "src": "10465:6:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 4758,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4810,
                        "nodeType": "FunctionDefinition",
                        "src": "10790:1185:37",
                        "nodes": [],
                        "body": {
                            "id": 4809,
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
                                                                "id": 4785,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "11012:10:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            {
                                                                "id": 4786,
                                                                "name": "_vaultSharesToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17536,
                                                                "src": "11062:17:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            {
                                                                "id": 4787,
                                                                "name": "_linkerFactory",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17600,
                                                                "src": "11116:14:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 4788,
                                                                "name": "_linkerCodeHash",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17603,
                                                                "src": "11168:15:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 4789,
                                                                "name": "_initialVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17560,
                                                                "src": "11229:23:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4790,
                                                                "name": "_minimumShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17563,
                                                                "src": "11296:21:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4791,
                                                                "name": "_minimumTransactionAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17566,
                                                                "src": "11365:25:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4792,
                                                                "name": "_positionDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17542,
                                                                "src": "11430:17:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4793,
                                                                "name": "_checkpointDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17539,
                                                                "src": "11489:19:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4794,
                                                                "name": "_timeStretch",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17545,
                                                                "src": "11543:12:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 4795,
                                                                "name": "_governance",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17589,
                                                                "src": "11589:11:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 4796,
                                                                "name": "_feeCollector",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17583,
                                                                "src": "11636:13:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 4797,
                                                                "name": "_sweepCollector",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17586,
                                                                "src": "11687:15:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 4800,
                                                                        "name": "_curveFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17548,
                                                                        "src": "11772:9:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 4801,
                                                                        "name": "_flatFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17551,
                                                                        "src": "11807:8:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 4802,
                                                                        "name": "_governanceLPFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17554,
                                                                        "src": "11841:16:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 4803,
                                                                        "name": "_governanceZombieFee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17557,
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
                                                                        "id": 4798,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10351,
                                                                        "src": "11730:11:37",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 4799,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "11742:4:37",
                                                                    "memberName": "Fees",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10065,
                                                                    "src": "11730:16:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_struct$_Fees_$10065_storage_ptr_$",
                                                                        "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                                                    }
                                                                },
                                                                "id": 4804,
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
                                                                    "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
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
                                                                    "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 4783,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10351,
                                                                "src": "10956:11:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 4784,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "10968:10:37",
                                                            "memberName": "PoolConfig",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10154,
                                                            "src": "10956:22:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_struct$_PoolConfig_$10154_storage_ptr_$",
                                                                "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                                                            }
                                                        },
                                                        "id": 4805,
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
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4781,
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
                                                    "id": 4782,
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
                                                "id": 4806,
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
                                            "id": 4780,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "10907:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4807,
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
                                    "id": 4808,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10907:1061:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11168
                        ],
                        "documentation": {
                            "id": 4774,
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
                            "id": 4775,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10812:2:37"
                        },
                        "returnParameters": {
                            "id": 4779,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4778,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4810,
                                    "src": "10862:29:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 4777,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4776,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "10862:11:37",
                                                "10874:10:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "10862:22:37"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "10862:22:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10861:31:37"
                        },
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4906,
                        "nodeType": "FunctionDefinition",
                        "src": "12144:1619:37",
                        "nodes": [],
                        "body": {
                            "id": 4905,
                            "nodeType": "Block",
                            "src": "12219:1544:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        4818
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4818,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "12237:15:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 4905,
                                            "src": "12229:23:37",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 4817,
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
                                    "id": 4821,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 4819,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12690,
                                            "src": "12255:19:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 4820,
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
                                        4823
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4823,
                                            "mutability": "mutable",
                                            "name": "lpTotalSupply",
                                            "nameLocation": "12294:13:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 4905,
                                            "src": "12286:21:37",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 4822,
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
                                    "id": 4836,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 4835,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 4832,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "baseExpression": {
                                                    "id": 4824,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17615,
                                                    "src": "12310:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 4827,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 4825,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18009,
                                                        "src": "12323:7:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 4826,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12331:12:37",
                                                    "memberName": "_LP_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 17742,
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
                                                    "id": 4828,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17615,
                                                    "src": "12359:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 4831,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 4829,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18009,
                                                        "src": "12372:7:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 4830,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12380:26:37",
                                                    "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 17751,
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
                                                "id": 4833,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17574,
                                                "src": "12422:13:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10052_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 4834,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "12436:15:37",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10048,
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
                                        4838
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4838,
                                            "mutability": "mutable",
                                            "name": "presentValue",
                                            "nameLocation": "12469:12:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 4905,
                                            "src": "12461:20:37",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 4837,
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
                                    "id": 4853,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 4841,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 4839,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4818,
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
                                                "id": 4840,
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
                                            "id": 4851,
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
                                        "id": 4852,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "12484:178:37",
                                        "trueExpression": {
                                            "arguments": [
                                                {
                                                    "id": 4849,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4818,
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
                                                                    "id": 4845,
                                                                    "name": "vaultSharePrice",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 4818,
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
                                                                "id": 4844,
                                                                "name": "_getPresentValueParams",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13069,
                                                                "src": "12564:22:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$19776_memory_ptr_$",
                                                                    "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
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
                                                            "src": "12564:39:37",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 4842,
                                                            "name": "LPMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 21642,
                                                            "src": "12518:6:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                                "typeString": "type(library LPMath)"
                                                            }
                                                        },
                                                        "id": 4843,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12542:21:37",
                                                        "memberName": "calculatePresentValue",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 19805,
                                                        "src": "12518:45:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$19776_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 4847,
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
                                                "id": 4848,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12622:7:37",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18085,
                                                "src": "12518:111:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 4850,
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
                                        4858
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4858,
                                            "mutability": "mutable",
                                            "name": "poolInfo",
                                            "nameLocation": "12700:8:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 4905,
                                            "src": "12672:36:37",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolInfo_$10200_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolInfo"
                                            },
                                            "typeName": {
                                                "id": 4857,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 4856,
                                                    "name": "IHyperdrive.PoolInfo",
                                                    "nameLocations": [
                                                        "12672:11:37",
                                                        "12684:8:37"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10200,
                                                    "src": "12672:20:37"
                                                },
                                                "referencedDeclaration": 10200,
                                                "src": "12672:20:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$10200_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolInfo"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 4897,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 4861,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "12761:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4862,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12774:13:37",
                                                "memberName": "shareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10007,
                                                "src": "12761:26:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4863,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "12818:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4864,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12831:15:37",
                                                "memberName": "shareAdjustment",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10019,
                                                "src": "12818:28:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4865,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "12880:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4866,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12893:18:37",
                                                "memberName": "zombieBaseProceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10037,
                                                "src": "12880:31:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint112",
                                                    "typeString": "uint112"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4867,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "12946:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4868,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12959:19:37",
                                                "memberName": "zombieShareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10040,
                                                "src": "12946:32:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4869,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "13006:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4870,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13019:12:37",
                                                "memberName": "bondReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10010,
                                                "src": "13006:25:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 4871,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4818,
                                                "src": "13062:15:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4872,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "13109:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4873,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13122:16:37",
                                                "memberName": "longsOutstanding",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10016,
                                                "src": "13109:29:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4874,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "13177:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4875,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13190:23:37",
                                                "memberName": "longAverageMaturityTime",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10025,
                                                "src": "13177:36:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4876,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "13246:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4877,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13259:17:37",
                                                "memberName": "shortsOutstanding",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10022,
                                                "src": "13246:30:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4878,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "13316:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4879,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13329:24:37",
                                                "memberName": "shortAverageMaturityTime",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10028,
                                                "src": "13316:37:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 4880,
                                                "name": "lpTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4823,
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
                                                    "id": 4883,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 4881,
                                                        "name": "lpTotalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4823,
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
                                                        "id": 4882,
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
                                                            "id": 4887,
                                                            "name": "lpTotalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4823,
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
                                                            "id": 4885,
                                                            "name": "presentValue",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4838,
                                                            "src": "13480:12:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 4886,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13493:7:37",
                                                        "memberName": "divDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18103,
                                                        "src": "13480:20:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 4888,
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
                                                "id": 4889,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "Conditional",
                                                "src": "13423:92:37",
                                                "trueExpression": {
                                                    "hexValue": "30",
                                                    "id": 4884,
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
                                                    "id": 4890,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17574,
                                                    "src": "13562:13:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10052_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 4891,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13576:15:37",
                                                "memberName": "readyToWithdraw",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10048,
                                                "src": "13562:29:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4892,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17574,
                                                    "src": "13631:13:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10052_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 4893,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13645:8:37",
                                                "memberName": "proceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10051,
                                                "src": "13631:22:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 4894,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "13681:12:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 4895,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13694:12:37",
                                                "memberName": "longExposure",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10013,
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
                                                "id": 4859,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10351,
                                                "src": "12711:11:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 4860,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "12723:8:37",
                                            "memberName": "PoolInfo",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10200,
                                            "src": "12711:20:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_PoolInfo_$10200_storage_ptr_$",
                                                "typeString": "type(struct IHyperdrive.PoolInfo storage pointer)"
                                            }
                                        },
                                        "id": 4896,
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
                                            "typeIdentifier": "t_struct$_PoolInfo_$10200_memory_ptr",
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
                                                        "id": 4901,
                                                        "name": "poolInfo",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4858,
                                                        "src": "13746:8:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolInfo_$10200_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolInfo_$10200_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolInfo memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4899,
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
                                                    "id": 4900,
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
                                                "id": 4902,
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
                                            "id": 4898,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "13727:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4903,
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
                                    "id": 4904,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13727:29:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11175
                        ],
                        "documentation": {
                            "id": 4811,
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
                            "id": 4812,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12164:2:37"
                        },
                        "returnParameters": {
                            "id": 4816,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4815,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4906,
                                    "src": "12190:27:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolInfo_$10200_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolInfo"
                                    },
                                    "typeName": {
                                        "id": 4814,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4813,
                                            "name": "IHyperdrive.PoolInfo",
                                            "nameLocations": [
                                                "12190:11:37",
                                                "12202:8:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10200,
                                            "src": "12190:20:37"
                                        },
                                        "referencedDeclaration": 10200,
                                        "src": "12190:20:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$10200_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolInfo"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12189:29:37"
                        },
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4927,
                        "nodeType": "FunctionDefinition",
                        "src": "13887:367:37",
                        "nodes": [],
                        "body": {
                            "id": 4926,
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
                                                                    "id": 4918,
                                                                    "name": "_withdrawPool",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17574,
                                                                    "src": "14121:13:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10052_storage",
                                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                                    }
                                                                },
                                                                "id": 4919,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "14135:15:37",
                                                                "memberName": "readyToWithdraw",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10048,
                                                                "src": "14121:29:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            },
                                                            {
                                                                "expression": {
                                                                    "id": 4920,
                                                                    "name": "_withdrawPool",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17574,
                                                                    "src": "14182:13:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10052_storage",
                                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                                    }
                                                                },
                                                                "id": 4921,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "14196:8:37",
                                                                "memberName": "proceeds",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10051,
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
                                                                "id": 4916,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10351,
                                                                "src": "14057:11:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 4917,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "14069:12:37",
                                                            "memberName": "WithdrawPool",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10052,
                                                            "src": "14057:24:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_struct$_WithdrawPool_$10052_storage_ptr_$",
                                                                "typeString": "type(struct IHyperdrive.WithdrawPool storage pointer)"
                                                            }
                                                        },
                                                        "id": 4922,
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
                                                            "typeIdentifier": "t_struct$_WithdrawPool_$10052_memory_ptr",
                                                            "typeString": "struct IHyperdrive.WithdrawPool memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_WithdrawPool_$10052_memory_ptr",
                                                            "typeString": "struct IHyperdrive.WithdrawPool memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4914,
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
                                                    "id": 4915,
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
                                                "id": 4923,
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
                                            "id": 4913,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "14008:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4924,
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
                                    "id": 4925,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14008:239:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11188
                        ],
                        "documentation": {
                            "id": 4907,
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
                            "id": 4908,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13911:2:37"
                        },
                        "returnParameters": {
                            "id": 4912,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4911,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4927,
                                    "src": "13961:31:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_WithdrawPool_$10052_memory_ptr",
                                        "typeString": "struct IHyperdrive.WithdrawPool"
                                    },
                                    "typeName": {
                                        "id": 4910,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4909,
                                            "name": "IHyperdrive.WithdrawPool",
                                            "nameLocations": [
                                                "13961:11:37",
                                                "13973:12:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10052,
                                            "src": "13961:24:37"
                                        },
                                        "referencedDeclaration": 10052,
                                        "src": "13961:24:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_WithdrawPool_$10052_storage_ptr",
                                            "typeString": "struct IHyperdrive.WithdrawPool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13960:33:37"
                        },
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4941,
                        "nodeType": "FunctionDefinition",
                        "src": "14407:132:37",
                        "nodes": [],
                        "body": {
                            "id": 4940,
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
                                                        "id": 4936,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17592,
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
                                                        "id": 4934,
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
                                                    "id": 4935,
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
                                                "id": 4937,
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
                                            "id": 4933,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "14489:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4938,
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
                                    "id": 4939,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14489:43:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11181
                        ],
                        "documentation": {
                            "id": 4928,
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
                            "id": 4929,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14444:2:37"
                        },
                        "returnParameters": {
                            "id": 4932,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4931,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4941,
                                    "src": "14470:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4930,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 4956,
                        "nodeType": "FunctionDefinition",
                        "src": "14618:159:37",
                        "nodes": [],
                        "body": {
                            "id": 4955,
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
                                                        "id": 4951,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17570,
                                                        "src": "14756:12:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 4949,
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
                                                    "id": 4950,
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
                                                "id": 4952,
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
                                            "id": 4948,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "14737:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 4953,
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
                                    "id": 4954,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14737:33:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11161
                        ],
                        "documentation": {
                            "id": 4942,
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
                            "id": 4943,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14641:2:37"
                        },
                        "returnParameters": {
                            "id": 4947,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4946,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 4956,
                                    "src": "14691:30:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$10041_memory_ptr",
                                        "typeString": "struct IHyperdrive.MarketState"
                                    },
                                    "typeName": {
                                        "id": 4945,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 4944,
                                            "name": "IHyperdrive.MarketState",
                                            "nameLocations": [
                                                "14691:11:37",
                                                "14703:11:37"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10041,
                                            "src": "14691:23:37"
                                        },
                                        "referencedDeclaration": 10041,
                                        "src": "14691:23:37",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage_ptr",
                                            "typeString": "struct IHyperdrive.MarketState"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14690:32:37"
                        },
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5016,
                        "nodeType": "FunctionDefinition",
                        "src": "15018:565:37",
                        "nodes": [],
                        "body": {
                            "id": 5015,
                            "nodeType": "Block",
                            "src": "15114:469:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        4970
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 4970,
                                            "mutability": "mutable",
                                            "name": "loaded",
                                            "nameLocation": "15141:6:37",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 5015,
                                            "src": "15124:23:37",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 4968,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "15124:7:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 4969,
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
                                    "id": 4977,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 4974,
                                                    "name": "_slots",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4960,
                                                    "src": "15164:6:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                        "typeString": "uint256[] calldata"
                                                    }
                                                },
                                                "id": 4975,
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
                                            "id": 4973,
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
                                                    "id": 4971,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "15154:7:37",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 4972,
                                                "nodeType": "ArrayTypeName",
                                                "src": "15154:9:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                                    "typeString": "bytes32[]"
                                                }
                                            }
                                        },
                                        "id": 4976,
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
                                        "id": 5006,
                                        "nodeType": "Block",
                                        "src": "15286:253:37",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    4987
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 4987,
                                                        "mutability": "mutable",
                                                        "name": "slot",
                                                        "nameLocation": "15308:4:37",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 5006,
                                                        "src": "15300:12:37",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 4986,
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
                                                "id": 4991,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "id": 4988,
                                                        "name": "_slots",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4960,
                                                        "src": "15315:6:37",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                            "typeString": "uint256[] calldata"
                                                        }
                                                    },
                                                    "id": 4990,
                                                    "indexExpression": {
                                                        "id": 4989,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4979,
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
                                                    4993
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 4993,
                                                        "mutability": "mutable",
                                                        "name": "data",
                                                        "nameLocation": "15346:4:37",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 5006,
                                                        "src": "15338:12:37",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 4992,
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
                                                "id": 4994,
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
                                                        "declaration": 4993,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "15407:4:37",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 4987,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "15421:4:37",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "flags": [
                                                    "memory-safe"
                                                ],
                                                "id": 4995,
                                                "nodeType": "InlineAssembly",
                                                "src": "15364:76:37"
                                            },
                                            {
                                                "expression": {
                                                    "id": 5000,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 4996,
                                                            "name": "loaded",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4970,
                                                            "src": "15453:6:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                                "typeString": "bytes32[] memory"
                                                            }
                                                        },
                                                        "id": 4998,
                                                        "indexExpression": {
                                                            "id": 4997,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4979,
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
                                                        "id": 4999,
                                                        "name": "data",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4993,
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
                                                "id": 5001,
                                                "nodeType": "ExpressionStatement",
                                                "src": "15453:16:37"
                                            },
                                            {
                                                "id": 5005,
                                                "nodeType": "UncheckedBlock",
                                                "src": "15483:46:37",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "id": 5003,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "++",
                                                            "prefix": true,
                                                            "src": "15511:3:37",
                                                            "subExpression": {
                                                                "id": 5002,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 4979,
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
                                                        "id": 5004,
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
                                        "id": 4985,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 4982,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4979,
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
                                                "id": 4983,
                                                "name": "_slots",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4960,
                                                "src": "15269:6:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            },
                                            "id": 4984,
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
                                    "id": 5007,
                                    "initializationExpression": {
                                        "assignments": [
                                            4979
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 4979,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "15258:1:37",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 5007,
                                                "src": "15250:9:37",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 4978,
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
                                        "id": 4981,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 4980,
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
                                                        "id": 5011,
                                                        "name": "loaded",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4970,
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
                                                        "id": 5009,
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
                                                    "id": 5010,
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
                                                "id": 5012,
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
                                            "id": 5008,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "15549:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5013,
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
                                    "id": 5014,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15549:27:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11206
                        ],
                        "documentation": {
                            "id": 4957,
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
                            "id": 4961,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4960,
                                    "mutability": "mutable",
                                    "name": "_slots",
                                    "nameLocation": "15060:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5016,
                                    "src": "15041:25:37",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 4958,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "15041:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 4959,
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
                            "id": 4965,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 4964,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5016,
                                    "src": "15096:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 4962,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "15096:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 4963,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5038,
                        "nodeType": "FunctionDefinition",
                        "src": "15753:173:37",
                        "nodes": [],
                        "body": {
                            "id": 5037,
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
                                                                "id": 5029,
                                                                "name": "_balanceOf",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17610,
                                                                "src": "15889:10:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                                                }
                                                            },
                                                            "id": 5031,
                                                            "indexExpression": {
                                                                "id": 5030,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5019,
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
                                                        "id": 5033,
                                                        "indexExpression": {
                                                            "id": 5032,
                                                            "name": "account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5021,
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
                                                        "id": 5027,
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
                                                    "id": 5028,
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
                                                "id": 5034,
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
                                            "id": 5026,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "15870:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5035,
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
                                    "id": 5036,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15870:49:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11538
                        ],
                        "documentation": {
                            "id": 5017,
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
                            "id": 5022,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5019,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "15789:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5038,
                                    "src": "15781:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5018,
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
                                    "id": 5021,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "15814:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5038,
                                    "src": "15806:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5020,
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
                            "id": 5025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5024,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5038,
                                    "src": "15851:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5023,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5056,
                        "nodeType": "FunctionDefinition",
                        "src": "16061:129:37",
                        "nodes": [],
                        "body": {
                            "id": 5055,
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
                                                            "id": 5049,
                                                            "name": "_totalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17615,
                                                            "src": "16160:12:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                                "typeString": "mapping(uint256 => uint256)"
                                                            }
                                                        },
                                                        "id": 5051,
                                                        "indexExpression": {
                                                            "id": 5050,
                                                            "name": "tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5041,
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
                                                        "id": 5047,
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
                                                    "id": 5048,
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
                                                "id": 5052,
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
                                            "id": 5046,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "16141:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5053,
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
                                    "id": 5054,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16141:42:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11506
                        ],
                        "documentation": {
                            "id": 5039,
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
                            "id": 5042,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5041,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "16090:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5056,
                                    "src": "16082:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5040,
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
                            "id": 5045,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5044,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5056,
                                    "src": "16122:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5043,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5078,
                        "nodeType": "FunctionDefinition",
                        "src": "16379:186:37",
                        "nodes": [],
                        "body": {
                            "id": 5077,
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
                                                                "id": 5069,
                                                                "name": "_isApprovedForAll",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17622,
                                                                "src": "16520:17:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                                                    "typeString": "mapping(address => mapping(address => bool))"
                                                                }
                                                            },
                                                            "id": 5071,
                                                            "indexExpression": {
                                                                "id": 5070,
                                                                "name": "account",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5059,
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
                                                        "id": 5073,
                                                        "indexExpression": {
                                                            "id": 5072,
                                                            "name": "operator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5061,
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
                                                        "id": 5067,
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
                                                    "id": 5068,
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
                                                "id": 5074,
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
                                            "id": 5066,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "16501:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5075,
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
                                    "id": 5076,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16501:57:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11516
                        ],
                        "documentation": {
                            "id": 5057,
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
                            "id": 5062,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5059,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "16422:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5078,
                                    "src": "16414:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5058,
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
                                    "id": 5061,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "16447:8:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5078,
                                    "src": "16439:16:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5060,
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
                            "id": 5065,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5064,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5078,
                                    "src": "16485:4:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 5063,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5104,
                        "nodeType": "FunctionDefinition",
                        "src": "16793:223:37",
                        "nodes": [],
                        "body": {
                            "id": 5103,
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
                                                                    "id": 5093,
                                                                    "name": "_perTokenApprovals",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 17631,
                                                                    "src": "16962:18:37",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                                                        "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                                                                    }
                                                                },
                                                                "id": 5095,
                                                                "indexExpression": {
                                                                    "id": 5094,
                                                                    "name": "tokenId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 5081,
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
                                                            "id": 5097,
                                                            "indexExpression": {
                                                                "id": 5096,
                                                                "name": "account",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5083,
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
                                                        "id": 5099,
                                                        "indexExpression": {
                                                            "id": 5098,
                                                            "name": "spender",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5085,
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
                                                        "id": 5091,
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
                                                    "id": 5092,
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
                                                "id": 5100,
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
                                            "id": 5090,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "16943:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5101,
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
                                    "id": 5102,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16943:66:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11528
                        ],
                        "documentation": {
                            "id": 5079,
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
                            "id": 5086,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5081,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "16837:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5104,
                                    "src": "16829:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5080,
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
                                    "id": 5083,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "16862:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5104,
                                    "src": "16854:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5082,
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
                                    "id": 5085,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "16887:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5104,
                                    "src": "16879:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5084,
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
                            "id": 5089,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5088,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5104,
                                    "src": "16924:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5087,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5120,
                        "nodeType": "FunctionDefinition",
                        "src": "17196:117:37",
                        "nodes": [],
                        "body": {
                            "id": 5119,
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
                                                                "id": 5113,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "17283:10:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 5114,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "17294:8:37",
                                                            "memberName": "decimals",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9641,
                                                            "src": "17283:19:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                                                                "typeString": "function () view external returns (uint8)"
                                                            }
                                                        },
                                                        "id": 5115,
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
                                                        "id": 5111,
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
                                                    "id": 5112,
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
                                                "id": 5116,
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
                                            "id": 5110,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "17264:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5117,
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
                                    "id": 5118,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17264:42:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11482
                        ],
                        "documentation": {
                            "id": 5105,
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
                            "id": 5106,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "17213:2:37"
                        },
                        "returnParameters": {
                            "id": 5109,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5108,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5120,
                                    "src": "17247:5:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 5107,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 5139,
                        "nodeType": "FunctionDefinition",
                        "src": "17432:137:37",
                        "nodes": [],
                        "body": {
                            "id": 5138,
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
                                                                "id": 5133,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5123,
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
                                                                "id": 5131,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18009,
                                                                "src": "17530:7:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 5132,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "17538:13:37",
                                                            "memberName": "assetIdToName",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17870,
                                                            "src": "17530:21:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                "typeString": "function (uint256) pure returns (string memory)"
                                                            }
                                                        },
                                                        "id": 5134,
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
                                                        "id": 5129,
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
                                                    "id": 5130,
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
                                                "id": 5135,
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
                                            "id": 5128,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "17511:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5136,
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
                                    "id": 5137,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17511:51:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11490
                        ],
                        "documentation": {
                            "id": 5121,
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
                            "id": 5124,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5123,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "17454:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5139,
                                    "src": "17446:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5122,
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
                            "id": 5127,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5126,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5139,
                                    "src": "17486:13:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 5125,
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
                        "scope": 5190,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5158,
                        "nodeType": "FunctionDefinition",
                        "src": "17692:141:37",
                        "nodes": [],
                        "body": {
                            "id": 5157,
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
                                                                "id": 5152,
                                                                "name": "tokenId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 5142,
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
                                                                "id": 5150,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18009,
                                                                "src": "17792:7:37",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 5151,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "17800:15:37",
                                                            "memberName": "assetIdToSymbol",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17948,
                                                            "src": "17792:23:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                "typeString": "function (uint256) pure returns (string memory)"
                                                            }
                                                        },
                                                        "id": 5153,
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
                                                        "id": 5148,
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
                                                    "id": 5149,
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
                                                "id": 5154,
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
                                            "id": 5147,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "17773:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
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
                                        "src": "17773:53:37",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5156,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17773:53:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11498
                        ],
                        "documentation": {
                            "id": 5140,
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
                            "id": 5143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5142,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "17716:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5158,
                                    "src": "17708:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5141,
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
                            "id": 5146,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5145,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5158,
                                    "src": "17748:13:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 5144,
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
                        "scope": 5190,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5176,
                        "nodeType": "FunctionDefinition",
                        "src": "17982:119:37",
                        "nodes": [],
                        "body": {
                            "id": 5175,
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
                                                            "id": 5169,
                                                            "name": "_nonces",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17636,
                                                            "src": "18076:7:37",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 5171,
                                                        "indexExpression": {
                                                            "id": 5170,
                                                            "name": "account",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5161,
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
                                                        "id": 5167,
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
                                                    "id": 5168,
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
                                                "id": 5172,
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
                                            "id": 5166,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "18057:7:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5173,
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
                                    "id": 5174,
                                    "nodeType": "ExpressionStatement",
                                    "src": "18057:37:37"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11546
                        ],
                        "documentation": {
                            "id": 5159,
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
                            "id": 5162,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5161,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "18006:7:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5176,
                                    "src": "17998:15:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5160,
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
                            "id": 5165,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5164,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5176,
                                    "src": "18038:7:37",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5163,
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
                        "scope": 5190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5189,
                        "nodeType": "FunctionDefinition",
                        "src": "18310:106:37",
                        "nodes": [],
                        "body": {
                            "id": 5188,
                            "nodeType": "Block",
                            "src": "18362:54:37",
                            "nodes": [],
                            "statements": [
                                {
                                    "errorCall": {
                                        "arguments": [
                                            {
                                                "id": 5185,
                                                "name": "_bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5179,
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
                                                "id": 5182,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10351,
                                                "src": "18379:11:37",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 5184,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18391:10:37",
                                            "memberName": "ReturnData",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10287,
                                            "src": "18379:22:37",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 5186,
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
                                    "id": 5187,
                                    "nodeType": "RevertStatement",
                                    "src": "18372:37:37"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 5177,
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
                            "id": 5180,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5179,
                                    "mutability": "mutable",
                                    "name": "_bytes",
                                    "nameLocation": "18340:6:37",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5189,
                                    "src": "18327:19:37",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 5178,
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
                            "id": 5181,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "18362:0:37"
                        },
                        "scope": 5190,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 4405,
                            "name": "IHyperdriveRead",
                            "nameLocations": [
                                "1262:15:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11207,
                            "src": "1262:15:37"
                        },
                        "id": 4406,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1262:15:37"
                    },
                    {
                        "baseName": {
                            "id": 4407,
                            "name": "HyperdriveAdmin",
                            "nameLocations": [
                                "1283:15:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12497,
                            "src": "1283:15:37"
                        },
                        "id": 4408,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1283:15:37"
                    },
                    {
                        "baseName": {
                            "id": 4409,
                            "name": "HyperdriveMultiToken",
                            "nameLocations": [
                                "1304:20:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 16538,
                            "src": "1304:20:37"
                        },
                        "id": 4410,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1304:20:37"
                    },
                    {
                        "baseName": {
                            "id": 4411,
                            "name": "HyperdriveLP",
                            "nameLocations": [
                                "1330:12:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 15127,
                            "src": "1330:12:37"
                        },
                        "id": 4412,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1330:12:37"
                    },
                    {
                        "baseName": {
                            "id": 4413,
                            "name": "HyperdriveLong",
                            "nameLocations": [
                                "1348:14:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 16054,
                            "src": "1348:14:37"
                        },
                        "id": 4414,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1348:14:37"
                    },
                    {
                        "baseName": {
                            "id": 4415,
                            "name": "HyperdriveShort",
                            "nameLocations": [
                                "1368:15:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17512,
                            "src": "1368:15:37"
                        },
                        "id": 4416,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1368:15:37"
                    },
                    {
                        "baseName": {
                            "id": 4417,
                            "name": "HyperdriveCheckpoint",
                            "nameLocations": [
                                "1389:20:37"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14161,
                            "src": "1389:20:37"
                        },
                        "id": 4418,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1389:20:37"
                    }
                ],
                "canonicalName": "HyperdriveTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 4404,
                    "nodeType": "StructuredDocumentation",
                    "src": "899:320:37",
                    "text": "@author DELV\n @title HyperdriveTarget0\n @notice Hyperdrive's target 0 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    5190,
                    14161,
                    17512,
                    16054,
                    15127,
                    16538,
                    12497,
                    13667,
                    17734,
                    71639,
                    10887,
                    11459,
                    11207,
                    11547
                ],
                "name": "HyperdriveTarget0",
                "nameLocation": "1237:17:37",
                "scope": 5191,
                "usedErrors": [
                    10213,
                    10219,
                    10222,
                    10237,
                    10240,
                    10249,
                    10252,
                    10255,
                    10258,
                    10282,
                    10287,
                    10290,
                    10299,
                    10314,
                    71014,
                    71295,
                    71300,
                    71303,
                    71584
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 37
};
