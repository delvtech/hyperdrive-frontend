export const MockHyperdrive = {
    abi: [
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
                            "name": "circuitBreakerDelta",
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
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientLiquidity",
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
            "inputs": [],
            "name": "UnexpectedSuccess",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UpdateLiquidityFailed",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
            "stateMutability": "nonpayable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "PERMIT_TYPEHASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
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
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "__external_transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "__setBalanceOf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "time",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "apr",
                    "type": "int256"
                }
            ],
            "name": "accrue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
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
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_normalizedTimeRemaining",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_spotPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "calculateFeesGivenBonds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalCurveFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalFlatFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "governanceCurveFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalGovernanceFee",
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
                    "name": "_shareAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_spotPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "calculateFeesGivenShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "curveFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "governanceCurveFee",
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
                    "name": "_vaultSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "calculateIdleShareReserves",
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
                    "name": "_shareAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_vaultSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "calculateOpenLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "shareReservesDelta",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bondReservesDelta",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalGovernanceFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "spotPrice",
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
                    "name": "_maturityTime",
                    "type": "uint256"
                }
            ],
            "name": "calculateTimeRemaining",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "timeRemaining",
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
                    "name": "_maturityTime",
                    "type": "uint256"
                }
            ],
            "name": "calculateTimeRemainingScaled",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "timeRemaining",
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
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "checkpoint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "closeLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "closeShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "collectGovernanceFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "domainSeparator",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalShares",
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
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "initialize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "latestCheckpoint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "checkpointTime",
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
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "openLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "openShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "",
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
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "redeemWithdrawalShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
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
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
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
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "",
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
                    "name": "",
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
                    "name": "",
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
                    "internalType": "uint128",
                    "name": "longExposure",
                    "type": "uint128"
                }
            ],
            "name": "setLongExposure",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
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
                    "name": "_marketState_",
                    "type": "tuple"
                }
            ],
            "name": "setMarketState",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "",
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
                    "internalType": "uint128",
                    "name": "shareReserves",
                    "type": "uint128"
                },
                {
                    "internalType": "uint128",
                    "name": "bondReserves",
                    "type": "uint128"
                }
            ],
            "name": "setReserves",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
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
                    "internalType": "uint256",
                    "name": "_totalShares",
                    "type": "uint256"
                }
            ],
            "name": "setTotalShares",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "sweep",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "target0",
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
            "inputs": [],
            "name": "target1",
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
            "inputs": [],
            "name": "target2",
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
            "inputs": [],
            "name": "target3",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
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
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "transferFromBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "_shareReservesDelta",
                    "type": "int256"
                }
            ],
            "name": "updateLiquidity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x6102e06040523480156200001257600080fd5b506040516201355f3803806201355f833981016040819052620000359162000324565b8081604051620000459062000222565b62000051919062000423565b604051809103906000f0801580156200006e573d6000803e3d6000fd5b50826040516200007e9062000230565b6200008a919062000423565b604051809103906000f080158015620000a7573d6000803e3d6000fd5b5083604051620000b7906200023e565b620000c3919062000423565b604051809103906000f080158015620000e0573d6000803e3d6000fd5b5084604051620000f0906200024c565b620000fc919062000423565b604051809103906000f08015801562000119573d6000803e3d6000fd5b50600160005584516001600160a01b039081166080908152602080880151831660a0908152918801516101a0908152918801516101c090815260c0808a01516101e05260e0808b015161020052610120808c0151909252610100808c0151909152610140808c0151909152918a01805151909152805190920151905280516040908101516101609081529151606090810151610180908152918a01518516610220528901516102405290880151600a80549185166001600160a01b03199283161790559088015160088054918516918316919091179055960151600980549183169190971617909555928416610260529083166102805282166102a052166102c0525062000545565b613bb180620033de83390190565b613f538062006f8f83390190565b614184806200aee283390190565b6144f9806200f06683390190565b6040516101e081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620002aa57600080fd5b919050565b600060808284031215620002c257600080fd5b604051608081016001600160401b0381118282101715620002f357634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200033857600080fd5b620003426200025a565b6200034d8362000292565b81526200035d6020840162000292565b6020820152620003706040840162000292565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620003db81850162000292565b90820152610180620003ef84820162000292565b908201526101a06200040384820162000292565b908201526101c06200041885858301620002af565b908201529392505050565b81516001600160a01b03168152610240810160208301516200045060208401826001600160a01b03169052565b5060408301516200046c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151620004df828501826001600160a01b03169052565b5050610180838101516001600160a01b0381168483015250506101a0838101516001600160a01b0381168483015250506101c08381015180518483015260208101516101e085015260408101516102008501526060810151610220850152505092915050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051612d01620006dd600039600081816108b301528181610a5001528181610b6d01528181610b9d0152610dc70152600081816107ba0152610fc90152600081816109070152610b0a01526000818161029f0152818161046101528181610a2001528181610a8201528181610ab401528181610b3e01528181610d8001528181610e0f01528181610f760152610ffc01526000505060005050600050506000505060008181611928015281816119640152611c71015260008181611671015281816116b701526117d701526000505060008181611135015281816111ae01526114f5015260008181611182015261172a0152600081816110fb015281816114b1015261170901526000818161164f015281816116d801526117f801526000818161147801526119ed015260006115f901526000505060008181610bfc01528181610c960152610d0a0152612d016000f3fe6080604052600436106102885760003560e01c8063907c0f921161015a578063ca6d38f7116100c1578063ded062311161007a578063ded06231146104db578063e44808bc146108d5578063e4af29d114610398578063eac3e799146108f5578063f45cf2e014610929578063f698da2514610a0657610288565b8063ca6d38f714610859578063cba2e58d14610879578063cbc13434146103d5578063d5002f2e1461088c578063d899e112146108a1578063dbbe80701461087957610288565b8063a42dce8011610113578063a42dce8014610398578063a6e8a859146107a8578063a77384c1146107dc578063ab033ea914610398578063b1b4b170146107fc578063b4f8da391461081c57610288565b8063907c0f92146106f257806394a97cdb146107075780639bd33498146107485780639cd241af146107685780639eea5f6614610788578063a22cb4651461063f57610288565b80634c2ac1d9116101fe5780637180c8ca116101b75780637180c8ca1461063f57806371f88b7c1461065f57806377d05ff41461067f5780638120a3e214610692578063836a1040146106b25780639032c726146106d257610288565b80634c2ac1d91461057d5780634ed2d6ac1461059057806358af4a0a146105ab57806368096239146105cb57806368c2ecb8146105eb578063702db0eb1461060b57610288565b806321b57d531161025057806321b57d531461044f57806322d5506b1461049b57806329b23fc1146104db57806330adf81f146105095780633e691db91461053d578063414f826d1461055d57610288565b806301681a621461039857806302329a29146103ba578063074a6de9146103d557806317fad7fc1461040f5780631c0f12b61461042f575b34801561029457600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516102d792919061239b565b600060405180830381855af49150503d8060008114610312576040519150601f19603f3d011682016040523d82523d6000602084013e610317565b606091505b5091509150811561033b57604051638bb0a34b60e01b815260040160405180910390fd5b6000610346826123ab565b90506001600160e01b03198116636e64089360e11b1461036857815160208301fd5b81516003198101600484019081529261038991810160200190602401612446565b80519650602001945050505050f35b3480156103a457600080fd5b506103b86103b33660046124fd565b610a1b565b005b3480156103c657600080fd5b506103b86103b3366004612538565b3480156103e157600080fd5b506103f56103f0366004612567565b610a48565b604080519283526020830191909152015b60405180910390f35b34801561041b57600080fd5b506103b861042a3660046125fc565b610a7d565b34801561043b57600080fd5b506103b861044a366004612691565b610aaf565b34801561045b57600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610406565b3480156104a757600080fd5b506104bb6104b63660046126d9565b610adf565b604080519485526020850193909352918301526060820152608001610406565b3480156104e757600080fd5b506104fb6104f636600461270b565b610b03565b604051908152602001610406565b34801561051557600080fd5b506104fb7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561054957600080fd5b506104fb610558366004612765565b610b37565b34801561056957600080fd5b506103b861057836600461279a565b610b68565b6104fb61058b3660046127bc565b610b96565b34801561059c57600080fd5b506103b861044a366004612820565b3480156105b757600080fd5b506103b86105c636600461286a565b610bcb565b3480156105d757600080fd5b506103b86105e636600461279a565b610bd8565b3480156105f757600080fd5b506104fb6106063660046128c9565b610d6a565b34801561061757600080fd5b506103b86106263660046128f9565b6001600160801b03908116600160801b02911617600155565b34801561064b57600080fd5b506103b861065a36600461292c565b610d7b565b34801561066b57600080fd5b506103f561067a366004612965565b610da4565b6104fb61068d366004612567565b610dc0565b34801561069e57600080fd5b506103b86106ad3660046128c9565b610df3565b3480156106be57600080fd5b506103b86106cd366004612991565b610dff565b3480156106de57600080fd5b506103b86106ed3660046129c9565b610e0a565b3480156106fe57600080fd5b506104fb610f42565b34801561071357600080fd5b506103b8610722366004612991565b6000928352600d602090815260408085206001600160a01b039094168552929052912055565b34801561075457600080fd5b506104bb61076336600461279a565b610f51565b34801561077457600080fd5b506103b8610783366004612991565b610f71565b34801561079457600080fd5b506103b86107a3366004612991565b610fa0565b3480156107b457600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b3480156107e857600080fd5b506103b86107f73660046128c9565b601255565b34801561080857600080fd5b506104fb6108173660046128c9565b610fab565b34801561082857600080fd5b506103b8610837366004612a49565b600280546001600160801b0319166001600160801b0392909216919091179055565b34801561086557600080fd5b506104fb6108743660046128c9565b610fb6565b6103f561088736600461270b565b610fc1565b34801561089857600080fd5b506012546104fb565b3480156108ad57600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b3480156108e157600080fd5b506103b86108f036600461286a565b610ff7565b34801561090157600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b34801561093557600080fd5b506103b8610944366004612a8d565b805160208201516001600160801b03918216600160801b91831682021760015560408301516060840151908316908316820217600255608083015160a084015190831690831682021760035560c083015160e084015190831690831682021760045561010080840151600580546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b348015610a1257600080fd5b506104fb611028565b610a447f00000000000000000000000000000000000000000000000000000000000000006110b6565b5050565b600080610a747f00000000000000000000000000000000000000000000000000000000000000006110b6565b50935093915050565b610aa67f00000000000000000000000000000000000000000000000000000000000000006110b6565b50505050505050565b610ad87f00000000000000000000000000000000000000000000000000000000000000006110b6565b5050505050565b600080600080610af1888888886110d6565b929b919a509850909650945050505050565b6000610b2e7f00000000000000000000000000000000000000000000000000000000000000006110b6565b50949350505050565b6000610b627f00000000000000000000000000000000000000000000000000000000000000006110b6565b50919050565b610b917f00000000000000000000000000000000000000000000000000000000000000006110b6565b505050565b6000610bc17f00000000000000000000000000000000000000000000000000000000000000006110b6565b5095945050505050565b610ad885858585856111ea565b6040516370a0823160e01b8152306004820152600090610c6e906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610c43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c679190612b79565b83856113ab565b9150506000811315610cf7576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f19906044015b600060405180830381600087803b158015610ce357600080fd5b505af1158015610aa6573d6000803e3d6000fd5b6000811215610b91576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610d3984612ba8565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401610cc9565b6000610d758261144b565b92915050565b610b917f00000000000000000000000000000000000000000000000000000000000000006110b6565b600080610db28585856114a3565b90925090505b935093915050565b6000610deb7f00000000000000000000000000000000000000000000000000000000000000006110b6565b509392505050565b610dfc81611523565b50565b610b91838383611549565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e3f611028565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610ee89190612bc4565b600060405180830381855af49150503d8060008114610f23576040519150601f19603f3d011682016040523d82523d6000602084013e610f28565b606091505b509150915081610f3a57805160208201fd5b805160208201f35b6000610f4c6115f2565b905090565b600080600080610f618686611628565b9299919850965090945092505050565b610f9a7f00000000000000000000000000000000000000000000000000000000000000006110b6565b50505050565b610b91838383611835565b6000610d7582611906565b6000610d75826119a2565b600080610fed7f00000000000000000000000000000000000000000000000000000000000000006110b6565b5094509492505050565b6110207f00000000000000000000000000000000000000000000000000000000000000006110b6565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b0316600036604051610ee892919061239b565b600080808061112d87866111268b6111206110f98c670de0b6b3a7640000612be0565b7f000000000000000000000000000000000000000000000000000000000000000090611a18565b90611a18565b9190611a29565b9350611159847f0000000000000000000000000000000000000000000000000000000000000000611a4f565b9150600061117a61117289670de0b6b3a7640000612be0565b8a9088611a29565b90506111a6817f0000000000000000000000000000000000000000000000000000000000000000611a18565b93506111d2847f0000000000000000000000000000000000000000000000000000000000000000611a4f565b6111dc9084612bf3565b915050945094509450949050565b6001600160a01b038416158061120757506001600160a01b038316155b156112255760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146112e9576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166112e95760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146112e75760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906112e1908490612be0565b90915550505b505b6000858152600d602090815260408083206001600160a01b03881684529091528120805484929061131b908490612be0565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611352908490612bf3565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080806113bd846301e13380611a64565b905060006113e282600088126113d357876113dc565b6113dc88612ba8565b90611a4f565b90506000861315611415576114006113f982611a79565b8890611a4f565b935061140c8785612be0565b92505050610db8565b600086121561143d5761143161142a82611a79565b8890611a64565b935061140c8785612c06565b509495600095509350505050565b6000806114566115f2565b9050808311611466576000611470565b6114708184612be0565b915061149c827f0000000000000000000000000000000000000000000000000000000000000000611a64565b9392505050565b6000806114ed8561112085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006114e3818c611c18565b6111209190612be0565b9150611519827f0000000000000000000000000000000000000000000000000000000000000000611a4f565b9050935093915050565b61152c81611c2d565b610dfc57604051635044b7f560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b03861684529091528120805483929061157b908490612bf3565b90915550506000838152600e60205260408120805483929061159e908490612bf3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061161e7f000000000000000000000000000000000000000000000000000000000000000042612c3c565b610f4c9042612be0565b600080600080611695611639611dc3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611de4565b92506116fc6116a2611dc3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e10565b9050611753868461174e847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e30565b611ea3565b1561176057611760611ee5565b60008061176e8884896114a3565b909250905061177d8286612be0565b945061178a818489611efe565b93506117968489612be0565b9550670de0b6b3a764000061181c876117ad611dc3565b6117b79190612bf3565b6001546117d5908990600160801b90046001600160801b0316612be0565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e10565b111561182a5761182a611ee5565b505092959194509250565b6000838152600d602090815260408083206001600160a01b038616845290915290205481111561187857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e909152812080548392906118bb908490612be0565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016115e5565b6002546000908190611921906001600160801b031684611c18565b905061194d7f000000000000000000000000000000000000000000000000000000000000000082612bf3565b6001546001600160801b03161115610b62576001547f0000000000000000000000000000000000000000000000000000000000000000906119989083906001600160801b0316612be0565b61149c9190612be0565b600080670de0b6b3a76400006119b66115f2565b6119c09190612c50565b90508083116119d05760006119da565b6119da8184612be0565b915061149c611a11670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612c50565b8390611a64565b600061149c8383670de0b6b3a76400005b6000826000190484118302158202611a4057600080fd5b50910281810615159190040190565b600061149c8383670de0b6b3a7640000611efe565b600061149c83670de0b6b3a764000084611efe565b6000680248ce36a70cb26b3e198213611a9457506000919050565b680755bf798b4a1bf1e58212611abd576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611c0e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611f1c565b9695505050505050565b600061149c83670de0b6b3a764000084611a29565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d089190612c67565b935093509350935080611d245750600098975050505050505050565b868414611d5557611d3484611f4a565b600180546001600160801b0319166001600160801b03929092169190911790555b858314611d8657611d6583611f74565b600380546001600160801b0319166001600160801b03929092169190911790555b848214611db457611d9682611f4a565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600154600354600091610f4c916001600160801b0390911690600f0b611fc2565b6000611e05878787611dfe88670de0b6b3a7640000612be0565b8787611fe8565b979650505050505050565b6000611e2782611e21858888611efe565b9061209c565b95945050505050565b6000611e9b611e71611e4a84670de0b6b3a7640000612be0565b611120670de0b6b3a7640000611e60818a611c18565b611e6a9190612be0565b8790611a18565b611e8390670de0b6b3a7640000612bf3565b611e9584670de0b6b3a7640000612be0565b90611a64565b949350505050565b600080611eda85611eb2611dc3565b611ebc9190612bf3565b6001546117d5908790600160801b90046001600160801b0316612be0565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000826000190484118302158202611f1557600080fd5b5091020490565b60006001600160ff1b03821115611f465760405163396ea70160e11b815260040160405180910390fd5b5090565b60006001600160801b03821115611f4657604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff19821280611fa457506f7fffffffffffffffffffffffffffffff82135b15611f465760405163a5353be560e01b815260040160405180910390fd5b600080611fcf8484612107565b909250905080611fe157611fe1611ee5565b5092915050565b600080611ff88888878787612146565b905061201285611e2161200b898c612bf3565b8690611a4f565b975061201f848985611efe565b97508781101561203157612031611ee5565b878103670de0b6b3a764000081106120665761205f612058670de0b6b3a764000088611c18565b829061209c565b905061207e565b61207b612058670de0b6b3a764000088611a64565b90505b8088101561208e5761208e611ee5565b909603979650505050505050565b6000816000036120b55750670de0b6b3a7640000610d75565b826000036120c557506000610d75565b60006120d083611f1c565b905060006120e56120e086611f1c565b612175565b90508181026120fc670de0b6b3a764000082612c9d565b9050611c0e81611a79565b60008060008361211686611f1c565b6121209190612c06565b9050600081121561213857600080925092505061213f565b9150600190505b9250929050565b6000612152858561209c565b61216b61216386611e21868b611a18565b859085611a29565b611c0e9190612bf3565b60008082136121975760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061221a9084901c611f1c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156123da5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561241c5761241c6123e2565b60405290565b60005b8381101561243d578181015183820152602001612425565b50506000910152565b60006020828403121561245857600080fd5b815167ffffffffffffffff8082111561247057600080fd5b818401915084601f83011261248457600080fd5b815181811115612496576124966123e2565b604051601f8201601f19908116603f011681019083821181831017156124be576124be6123e2565b816040528281528760208487010111156124d757600080fd5b611e05836020830160208801612422565b6001600160a01b0381168114610dfc57600080fd5b60006020828403121561250f57600080fd5b813561149c816124e8565b8015158114610dfc57600080fd5b80356125338161251a565b919050565b60006020828403121561254a57600080fd5b813561149c8161251a565b600060608284031215610b6257600080fd5b60008060006060848603121561257c57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156125a157600080fd5b6125ad86828701612555565b9150509250925092565b60008083601f8401126125c957600080fd5b50813567ffffffffffffffff8111156125e157600080fd5b6020830191508360208260051b850101111561213f57600080fd5b6000806000806000806080878903121561261557600080fd5b8635612620816124e8565b95506020870135612630816124e8565b9450604087013567ffffffffffffffff8082111561264d57600080fd5b6126598a838b016125b7565b9096509450606089013591508082111561267257600080fd5b5061267f89828a016125b7565b979a9699509497509295939492505050565b600080600080608085870312156126a757600080fd5b8435935060208501356126b9816124e8565b925060408501356126c9816124e8565b9396929550929360600135925050565b600080600080608085870312156126ef57600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561272157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561274d57600080fd5b61275987828801612555565b91505092959194509250565b60006020828403121561277757600080fd5b813567ffffffffffffffff81111561278e57600080fd5b611e9b84828501612555565b600080604083850312156127ad57600080fd5b50508035926020909101359150565b600080600080600060a086880312156127d457600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561280757600080fd5b61281388828901612555565b9150509295509295909350565b6000806000806080858703121561283657600080fd5b843593506020850135612848816124e8565b925060408501359150606085013561285f816124e8565b939692955090935050565b600080600080600060a0868803121561288257600080fd5b853594506020860135612894816124e8565b935060408601356128a4816124e8565b92506060860135915060808601356128bb816124e8565b809150509295509295909350565b6000602082840312156128db57600080fd5b5035919050565b80356001600160801b038116811461253357600080fd5b6000806040838503121561290c57600080fd5b612915836128e2565b9150612923602084016128e2565b90509250929050565b6000806040838503121561293f57600080fd5b823561294a816124e8565b9150602083013561295a8161251a565b809150509250929050565b60008060006060848603121561297a57600080fd5b505081359360208301359350604090920135919050565b6000806000606084860312156129a657600080fd5b8335925060208401356129b8816124e8565b929592945050506040919091013590565b600080600080600080600060e0888a0312156129e457600080fd5b87356129ef816124e8565b965060208801356129ff816124e8565b95506040880135612a0f8161251a565b945060608801359350608088013560ff81168114612a2c57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600060208284031215612a5b57600080fd5b61149c826128e2565b8035600f81900b811461253357600080fd5b80356001600160701b038116811461253357600080fd5b60006101808284031215612aa057600080fd5b612aa86123f8565b612ab1836128e2565b8152612abf602084016128e2565b6020820152612ad0604084016128e2565b6040820152612ae1606084016128e2565b6060820152612af260808401612a64565b6080820152612b0360a084016128e2565b60a0820152612b1460c084016128e2565b60c0820152612b2560e084016128e2565b60e0820152610100612b38818501612528565b90820152610120612b4a848201612528565b90820152610140612b5c848201612a76565b90820152610160612b6e8482016128e2565b908201529392505050565b600060208284031215612b8b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201612bbd57612bbd612b92565b5060000390565b60008251612bd6818460208701612422565b9190910192915050565b81810381811115610d7557610d75612b92565b80820180821115610d7557610d75612b92565b8181036000831280158383131683831282161715611fe157611fe1612b92565b634e487b7160e01b600052601260045260246000fd5b600082612c4b57612c4b612c26565b500690565b8082028115828204841417610d7557610d75612b92565b60008060008060808587031215612c7d57600080fd5b845193506020850151925060408501519150606085015161285f8161251a565b600082612cac57612cac612c26565b600160ff1b821460001984141615612cc657612cc6612b92565b50059056fea2646970667358221220b9165242b7e95e08986b78396f9315383ec5a0b84c61451fabb88318c0da9f4e64736f6c634300081400336102606040523480156200001257600080fd5b5060405162003bb138038062003bb18339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516137806200043160003960008181610d0f0152611ceb015260008181610ce80152611cae01526000610daf015260008181610d890152611ea3015260008181610d630152611e7d015260008181610d390152611e5701526000610ee001526000610ebb01526000610e9601526000610e73015260008181610e230152611ec9015260008181610dd5015281816110470152612576015260008181610dfc0152612a9d0152600081816105b70152610cbc0152600081816106ea01528181610c97015281816110080152818161229e0152818161244b015281816124940152818161263d01528181612686015281816127c4015281816128700152818161295c0152612a0801526137806000f3fe608060405234801561001057600080fd5b506004361061021b5760003560e01c80637180c8ca11610125578063becee9c3116100ad578063d81657431161007c578063d8165743146104e0578063e44808bc146104f5578063e4af29d114610508578063e985e9c51461051b578063fba560081461052e57600080fd5b8063becee9c3146104a5578063c55dae63146104c5578063c69e16ad14610429578063cf210e65146104cd57600080fd5b8063a22cb465116100f4578063a22cb46514610444578063a42dce8014610457578063ab033ea91461046a578063b0d965801461047d578063bd85b0391461049257600080fd5b80637180c8ca146104035780637ecebe00146104165780638e67f87e146104295780639cd241af1461043157600080fd5b806321ff32a9116101a857806346fbf68e1161017757806346fbf68e1461039d5780634e41a1fb146103c05780634ed2d6ac146103d357806354fd4d50146103e657806360246c88146103ee57600080fd5b806321ff32a91461033c578063313ce5671461035d5780633656eec2146103775780633e691db91461038a57600080fd5b80630a4e1493116101ef5780630a4e14931461029e57806314e5f07b146102be57806317fad7fc146102d15780631c0f12b6146102e457806320fc4881146102f757600080fd5b8062ad800c1461022057806301681a621461024957806302329a291461025e57806306fdde0314610271575b600080fd5b61023361022e366004612caa565b61055d565b6040516102409190612d13565b60405180910390f35b61025c610257366004612d3b565b610594565b005b61025c61026c366004612d66565b6105a0565b6102336040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b81525081565b6102a66105a9565b6040516001600160a01b039091168152602001610240565b61025c6102cc366004612d92565b6105ec565b61025c6102df366004612e6d565b610608565b61025c6102f2366004612f02565b61061e565b61030a610305366004612caa565b610631565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610240565b61034f61034a366004612f4a565b61069d565b604051908152602001610240565b6103656106e3565b60405160ff9091168152602001610240565b61034f610385366004612f8c565b61077e565b61034f610398366004612fbc565b6107b7565b6103b06103ab366004612d3b565b6107c2565b6040519015158152602001610240565b6102336103ce366004612caa565b6107f8565b61025c6103e1366004612ff7565b610806565b610233610854565b6103f6610888565b6040516102409190613041565b61025c6104113660046130e2565b610b97565b61034f610424366004612d3b565b610ba5565b61034f610bd1565b61025c61043f366004613110565b610beb565b61025c6104523660046130e2565b610bfc565b61025c610465366004612d3b565b610c68565b61025c610478366004612d3b565b610c71565b610485610c7a565b6040516102409190613148565b61034f6104a0366004612caa565b610f1d565b6104b86104b3366004613268565b610f3f565b60405161024091906132aa565b6102a6610ffa565b61034f6104db366004612caa565b61103a565b6104e8611083565b60405161024091906132ee565b61025c6105033660046133ff565b61118f565b61025c610516366004612d3b565b6111d7565b6103b061052936600461345e565b6111e0565b610536611224565b6040805182516001600160801b039081168252602093840151169281019290925201610240565b606061058f61056b83611283565b60405160200161057b9190612d13565b6040516020818303038152906040526113ab565b919050565b61059d816113cf565b50565b61059d81611545565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105e9910161057b565b90565b6105fd8989898989898989896115c8565b505050505050505050565b6106168686868686866117bf565b505050505050565b61062b8484848433611873565b50505050565b604080516060810182526000808252602082018190529181019190915261058f6007600084815260200190815260200160002060405160200161057b919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526106dc910161057b565b9392505050565b60006105e97f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610746573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076a919061348c565b6040805160ff90921660208301520161057b565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526107b1910161057b565b92915050565b60006107b182611a34565b6001600160a01b0381166000908152600c6020908152604080832054905161058f9261057b9260ff169101901515815260200190565b606061058f61056b83611b72565b8361081081611c70565b6001600160a01b0316336001600160a01b03161461084157604051632aab8bd360e01b815260040160405180910390fd5b61084d85858585611d2d565b5050505050565b60606105e9604051806040016040528060068152602001653b189718171b60d11b81525060405160200161057b9190612d13565b610901604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061090b611d9a565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161097691906134d5565b61098091906134e8565b905060008215610a925773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109ad85611db2565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8291906134fb565b509050610a8f8184611f48565b90505b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201526000906101a081018415610b6357610b5e8486611f5d565b610b66565b60005b81526002546001600160801b0316602091820152604051919250610b909161057b91849101613041565b5050505090565b610ba18282611f72565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261058f910161057b565b60006105e9600b5460405160200161057b91815260200190565b610bf783838333611d2d565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61059d81611ffb565b61059d8161206f565b610c82612bd3565b604080516101e0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f00000000000000000000000000000000000000000000000000000000000000006101208601527f0000000000000000000000000000000000000000000000000000000000000000610140860152600a54841661016086015260085484166101808601526009549093166101a0850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101c083019190915291516105e99261057b929101613148565b6000818152600e602090815260408083205481519283015261058f910161057b565b606060008267ffffffffffffffff811115610f5c57610f5c613520565b604051908082528060200260200182016040528015610f85578160200160208202803683370190505b50905060005b83811015610fde576000858583818110610fa757610fa7613536565b90506020020135905060008154905080848481518110610fc957610fc9613536565b60209081029190910101525050600101610f8b565b50610ff38160405160200161057b91906132aa565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105e9910161057b565b600061058f61107161106c7f0000000000000000000000000000000000000000000000000000000000000000856134d5565b6120e3565b60405160200161057b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105e9600160405160200161057b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461119981611c70565b6001600160a01b0316336001600160a01b0316146111ca57604051632aab8bd360e01b815260040160405180910390fd5b6106168686868686611873565b61059d81612127565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107b1910161057b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105e99060600161057b565b606060f882901c6001600160f81b038316600061129f8261219b565b905060008360038111156112b5576112b56134a9565b036112e7576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506113a3565b60018360038111156112fb576112fb6134a9565b036113275780604051602001611311919061354c565b60405160208183030381529060405293506113a3565b600283600381111561133b5761133b6134a9565b0361135157806040516020016113119190613585565b6003836003811115611365576113656134a9565b036113a3576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016113c69190612d13565b60405180910390fd5b6113d7612250565b600954336000908152600c60205260409020546001600160a01b039091169060ff1615801561140f5750336001600160a01b03821614155b80156114265750600a546001600160a01b03163314155b15611443576040516282b42960e81b815260040160405180910390fd5b600061144d61227a565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114bb91906135bf565b90506114d16001600160a01b038516848361230e565b816114da61227a565b146114f8576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061059d6001600055565b336000908152600c602052604090205460ff16611574576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906115bd90831515815260200190565b60405180910390a150565b834211156115e95760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166116105760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156116fe573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461173c57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806117dc57506001600160a01b038516155b156117fa5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461181a5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561186a5761186285858381811061183a5761183a613536565b90506020020135888886868681811061185557611855613536565b9050602002013533611873565b60010161181d565b50505050505050565b6001600160a01b038416158061189057506001600160a01b038316155b156118ae5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611972576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166119725760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146119705760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061196a9084906134e8565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906119a49084906134e8565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906119db9084906134d5565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611a3e612250565b611a4782612360565b6008546001600160a01b031680611a616020850185612d3b565b6001600160a01b031614611a8857604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff16158015611ab15750336001600160a01b03821614155b8015611ac85750600a546001600160a01b03163314155b15611ae5576040516282b42960e81b815260040160405180910390fd5b6000611aef611d9a565b600b80546000909155909150611b06818387612396565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a60383618584611b4560408a0160208b01612d66565b60408051938452602084019290925215159082015260600160405180910390a250505061058f6001600055565b606060f882901c6001600160f81b0383166000611b8e8261219b565b90506000836003811115611ba457611ba46134a9565b03611bd6576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506113a3565b6001836003811115611bea57611bea6134a9565b03611c00578060405160200161131191906135d8565b6002836003811115611c1457611c146134a9565b03611c2a57806040516020016113119190613610565b6003836003811115611c3e57611c3e6134a9565b036113a357505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611dad670de0b6b3a7640000612430565b905090565b611e166040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611f0e911661252b565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611f409290041661252b565b905292915050565b60006106dc8383670de0b6b3a76400006125a1565b60006106dc83670de0b6b3a7640000846125a1565b600a546001600160a01b03163314611f9c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314612025576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314612099576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b600061210b600e60006120f76002866125bf565b8152602001908152602001600020546125f4565b61211d600e60006120f76001876125bf565b6107b1919061363c565b600a546001600160a01b03163314612151576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415612242576121d6600a86613672565b6121e19060306134d5565b60f81b8260016121f184876134e8565b6121fb91906134e8565b8151811061220b5761220b613536565b60200101906001600160f81b031916908160001a9053508061222c81613686565b915061223b9050600a8661369f565b94506121c5565b918290030190815292915050565b60026000540361227357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b8152306004820152600090611dad906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156122e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230991906135bf565b612622565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610bf790849061270b565b600061236f6020830183612d3b565b6001600160a01b03160361059d5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806123a38585611f48565b90506123ae81612622565b9450846000036123c25760009150506106dc565b6123d26040840160208501612d66565b15612401576123fa856123e86020860186612d3b565b6123f560408701876136b3565b61276e565b9150612428565b612424856124126020860186612d3b565b61241f60408701876136b3565b612908565b8491505b509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161247f57504761250a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156124e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061250791906135bf565b90505b60125460000361251b5760006106dc565b6012546106dc90849083906125a1565b600080670de0b6b3a764000061253f612a96565b61254991906136fa565b9050808311612559576000612563565b61256381846134e8565b91506106dc61259a670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136fa565b8390611f5d565b60008260001904841183021582026125b857600080fd5b5091020490565b60006001600160f81b038211156125e95760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b0382111561261e5760405163396ea70160e11b815260040160405180910390fd5b5090565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126715750476126fc565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126f991906135bf565b90505b6012546106dc908490836125a1565b60006127206001600160a01b03841683612acc565b905080516000141580156127455750808060200190518101906127439190613711565b155b15610bf757604051635274afe760e01b81526001600160a01b03841660048201526024016113c6565b6000601254851161277f5784612783565b6012545b9450600061279086612430565b905085601260008282546127a491906134e8565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161284a576040516001600160a01b038716908390600081818185875af1925050503d806000811461283a576040519150601f19603f3d011682016040523d82523d6000602084013e61283f565b606091505b5050809150506128e0565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156128b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128dd9190613711565b90505b806128fe576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b6012548411612917578361291b565b6012545b9350600061292885612430565b9050846012600082825461293c91906134e8565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016129e2576040516001600160a01b038616908390600081818185875af1925050503d80600081146129d2576040519150601f19603f3d011682016040523d82523d6000602084013e6129d7565b606091505b505080915050612a78565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a759190613711565b90505b80610616576040516312171d8360e31b815260040160405180910390fd5b6000612ac27f000000000000000000000000000000000000000000000000000000000000000042613672565b611dad90426134e8565b60606106dc8383600084600080856001600160a01b03168486604051612af2919061372e565b60006040518083038185875af1925050503d8060008114612b2f576040519150601f19603f3d011682016040523d82523d6000602084013e612b34565b606091505b5091509150612b44868383612b4e565b9695505050505050565b606082612b6357612b5e82612baa565b6106dc565b8151158015612b7a57506001600160a01b0384163b155b15612ba357604051639996b31560e01b81526001600160a01b03851660048201526024016113c6565b50806106dc565b805115612bba5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612ca56040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612cbc57600080fd5b5035919050565b60005b83811015612cde578181015183820152602001612cc6565b50506000910152565b60008151808452612cff816020860160208601612cc3565b601f01601f19169290920160200192915050565b6020815260006106dc6020830184612ce7565b6001600160a01b038116811461059d57600080fd5b600060208284031215612d4d57600080fd5b81356106dc81612d26565b801515811461059d57600080fd5b600060208284031215612d7857600080fd5b81356106dc81612d58565b60ff8116811461059d57600080fd5b60008060008060008060008060006101208a8c031215612db157600080fd5b8935985060208a0135975060408a0135612dca81612d26565b965060608a0135612dda81612d26565b955060808a0135612dea81612d58565b945060a08a0135935060c08a0135612e0181612d83565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612e3357600080fd5b50813567ffffffffffffffff811115612e4b57600080fd5b6020830191508360208260051b8501011115612e6657600080fd5b9250929050565b60008060008060008060808789031215612e8657600080fd5b8635612e9181612d26565b95506020870135612ea181612d26565b9450604087013567ffffffffffffffff80821115612ebe57600080fd5b612eca8a838b01612e21565b90965094506060890135915080821115612ee357600080fd5b50612ef089828a01612e21565b979a9699509497509295939492505050565b60008060008060808587031215612f1857600080fd5b843593506020850135612f2a81612d26565b92506040850135612f3a81612d26565b9396929550929360600135925050565b600080600060608486031215612f5f57600080fd5b833592506020840135612f7181612d26565b91506040840135612f8181612d26565b809150509250925092565b60008060408385031215612f9f57600080fd5b823591506020830135612fb181612d26565b809150509250929050565b600060208284031215612fce57600080fd5b813567ffffffffffffffff811115612fe557600080fd5b8201606081850312156106dc57600080fd5b6000806000806080858703121561300d57600080fd5b84359350602085013561301f81612d26565b925060408501359150606085013561303681612d26565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156130f557600080fd5b823561310081612d26565b91506020830135612fb181612d58565b60008060006060848603121561312557600080fd5b83359250602084013561313781612d26565b929592945050506040919091013590565b81516001600160a01b031681526102408101602083015161317460208401826001600160a01b03169052565b50604083015161318f60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613201828501826001600160a01b03169052565b5050610180838101516001600160a01b0381168483015250506101a0838101516001600160a01b0381168483015250506101c08381015180518483015260208101516101e0850152604081015161020085015260608101516102208501525b505092915050565b6000806020838503121561327b57600080fd5b823567ffffffffffffffff81111561329257600080fd5b61329e85828601612e21565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156132e2578351835292840192918401916001016132c6565b50909695505050505050565b81516001600160801b031681526101808101602083015161331a60208401826001600160801b03169052565b50604083015161333560408401826001600160801b03169052565b50606083015161335060608401826001600160801b03169052565b5060808301516133656080840182600f0b9052565b5060a083015161338060a08401826001600160801b03169052565b5060c083015161339b60c08401826001600160801b03169052565b5060e08301516133b660e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613260565b600080600080600060a0868803121561341757600080fd5b85359450602086013561342981612d26565b9350604086013561343981612d26565b925060608601359150608086013561345081612d26565b809150509295509295909350565b6000806040838503121561347157600080fd5b823561347c81612d26565b91506020830135612fb181612d26565b60006020828403121561349e57600080fd5b81516106dc81612d83565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156107b1576107b16134bf565b818103818111156107b1576107b16134bf565b6000806040838503121561350e57600080fd5b825191506020830151612fb181612d58565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613578816011850160208701612cc3565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516135b2816012850160208701612cc3565b9190910160120192915050565b6000602082840312156135d157600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613603816010850160208701612cc3565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613578816011850160208701612cc3565b8181036000831280158383131683831282161715610ff357610ff36134bf565b634e487b7160e01b600052601260045260246000fd5b6000826136815761368161365c565b500690565b600060018201613698576136986134bf565b5060010190565b6000826136ae576136ae61365c565b500490565b6000808335601e198436030181126136ca57600080fd5b83018035915067ffffffffffffffff8211156136e557600080fd5b602001915036819003821315612e6657600080fd5b80820281158282048414176107b1576107b16134bf565b60006020828403121561372357600080fd5b81516106dc81612d58565b60008251613740818460208701612cc3565b919091019291505056fea26469706673582212201c176efb508e4b91a4a89d666e6cb6b06168b5dac56cb1f2a64a5d37281787e664736f6c634300081400336102606040523480156200001257600080fd5b5060405162003f5338038062003f538339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613abf620004946000396000505060005050600050506000818160af0152818161032b0152612e1801526000818161132f015281816116da0152818161173d015281816129f801528181612a3401528181612c310152612df201526000818161068101528181610d0701528181610ec6015281816115990152612dcc01526000611ae7015260008181611c0d015281816121f7015261227001526000818161090401528181610e5501528181611be10152612244015260008181610d4a01526121bd0152600081816106a201528181610ce501528181610ee7015281816115770152612e3e01526000818161083c01528181610dd50152818161163601528181612092015261335c0152600081816105d8015281816106d40152818161075b015281816107bc01526107f4015260005050600081816118cf0152818161191801528181612495015281816124de015281816125b9015281816126650152818161275101526127fd0152613abf6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461360a565b610073565b60405190815260200160405180910390f35b61004e61006e36600461360a565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610316565b60006100a4610556565b6100ad82610580565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b9565b90508542101561011b5761011561010d6105d1565b826004610607565b50610129565b61012786826004610607565b505b61013e610137600288610b9e565b3387610bd3565b6000806000806000806101528b888e610cac565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d919061367f565b90915550610195905061018e6105d1565b4284610f45565b6101a28c88878785611083565b60006101ad8e6111fd565b90506101cb6101bb8e611247565b6101c59083613692565b82611275565b6101d489611328565b6101e0576101e0611388565b60006101eb8a6113a1565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113ae565b9550610227886113a1565b505b6000610236878a8d61148f565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610b9e565b61027660208301836136b2565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a8a876102b46040890160208a016136e9565b6102c88a6102c28d8f61367f565b90611529565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b6000610320610556565b61032982610580565b7f000000000000000000000000000000000000000000000000000000000000000084101561036a5760405163211ddda360e11b815260040160405180910390fd5b60006103746105b9565b90508542101561038f5761038961010d6105d1565b5061039d565b61039b86826004610607565b505b6103ab610137600188610b9e565b6000806000806000806103bf8b888e61153e565b95509550955095509550955060008c90508c4210156104725782600b60008282546103ea919061367f565b909155506103fb905061018e6105d1565b6104088c888787856116c3565b6000610413826111fd565b905061042b6104218e611247565b6101c59083613706565b61043489611328565b61044057610440611388565b600061044b8a6113a1565b90508061046b57604051638bdf918d60e01b815260040160405180910390fd5b5050610489565b61047c86896113ae565b9550610487886113a1565b505b6000610496878a8d61148f565b90508b8110156104b95760405163c972651760e01b815260040160405180910390fd5b8c898c6104c7600186610b9e565b6104d460208301836136b2565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028888876105126040890160208a016136e9565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058f60208301836136b2565b6001600160a01b0316036105b65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105cc670de0b6b3a76400006118b4565b905090565b60006105fd7f000000000000000000000000000000000000000000000000000000000000000042613744565b6105cc9042613758565b600083815260076020526040812060018101546001600160801b031615158061062f57504285115b1561064857600101546001600160801b03169050610b97565b60008060006106556105d1565b90508088036106cd578692506106c661066c6119af565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d0565b9150610789565b60006106f97f00000000000000000000000000000000000000000000000000000000000000008a61367f565b90505b8181036107145787935061071161066c6119af565b92505b6000818152600760205260409020600101546001600160801b031693508315610756576000818152600760205260409020546001600160801b03169250610787565b6107807f00000000000000000000000000000000000000000000000000000000000000008261367f565b90506106fc565b505b610792836119e7565b6001850180546001600160801b0319166001600160801b03929092169190911790556107e86107e17f00000000000000000000000000000000000000000000000000000000000000008a613758565b8984610f45565b610826886108206108197f00000000000000000000000000000000000000000000000000000000000000008361367f565b4290611a11565b84610f45565b61082f87611a26565b50600090506007816108617f00000000000000000000000000000000000000000000000000000000000000008c613758565b815260208101919091526040016000908120600101546001600160801b0316915061088d60028b610b9e565b6000818152600e60205260408120549192508b8b83156109d357600192506000806108bc86898d866000611bca565b9150915080600b60008282546108d2919061367f565b909155506108ee9050866000846108e881611247565b88611083565b6108f8818361367f565b915061092886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c99565b915061093c6109378385611529565b611ce3565b6005805460029061095d9084906201000090046001600160701b031661376b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061098a826119e7565b600580546010906109ac908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109e0600184610b9e565b6000818152600e60205260409020549091508015610aef5760019450600080610a0d838b8f886001611bca565b9150915080600b6000828254610a23919061367f565b90915550610a3f905083600084610a3981611247565b8a6116c3565b610a498183613758565b9150610a586109378387611529565b60058054600290610a799084906201000090046001600160701b031661376b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610aa6826119e7565b60058054601090610ac8908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b2757610b1b610b0187611247565b610b0a83611247565b610b149190613692565b6000611275565b610b25838f611d0d565b505b6000610b3284611f07565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bc85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c1657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c59908490613758565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610cc189612065565b9050610d2b610cce6119af565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006120b6565b90995096509150610d3d61066c6119af565b9250610d738289610d6e867f0000000000000000000000000000000000000000000000000000000000000000612126565b612156565b15610d8057610d80611388565b8a8a60008080610d9285878a87612198565b9b5091945092509050610da58184613758565b610daf908861367f565b9650610dbb828461367f565b610dc5908c61367f565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610dff9190613758565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e475760008a8152600760205260409020600101546001600160801b0316610e49565b8a5b9050610e798c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611c99565b9750610e858588613758565b9650670de0b6b3a7640000610f0b84610e9c6119af565b610ea6919061367f565b600154610ec4908d90600160801b90046001600160801b0316613758565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d0565b1115610f1957610f19611388565b610f2988888588868660006122ac565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f715750505050565b6000848152600760205260408120546001600160801b031690819003610fcb57610f9a836119e7565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611049565b61101c611017670de0b6b3a7640000610fe48886613758565b610fee91906137ab565b85670de0b6b3a7640000611002878a613758565b61100c91906137ab565b85929190600161234b565b6119e7565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611052846119e7565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110cc611017826110af670de0b6b3a7640000866137ab565b600454600160801b90046001600160801b031691908a600061234b565b600480546001600160801b03928316600160801b0292169190911790556110f2866119e7565b6110fc90826137c2565b600380546001600160801b03928316600160801b029216919091179055611122846119e7565b6001805460009061113d9084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116a836123f5565b6003805460009061117f908490600f0b6137e2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111af856119e7565b600180546010906111d1908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611225600e6000611211600286610b9e565b815260200190815260200160002054611247565b611237600e6000611211600187610b9e565b6112419190613692565b92915050565b60006001600160ff1b038211156112715760405163396ea70160e11b815260040160405180910390fd5b5090565b600061129e6112848483612431565b61128f846000612431565b6112999190613692565b6123f5565b9050600081600f0b13156112f357600280548291906000906112ca9084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611323576113088161380f565b600280546000906112ca9084906001600160801b03166137c2565b505050565b60006113547f000000000000000000000000000000000000000000000000000000000000000083612447565b60025461136a91906001600160801b031661367f565b600154611380906001600160801b031684611529565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611241826004611d0d565b60008060006113bc84611a26565b909250905060006113cd8686611529565b9050818311156113e5576113e286838561245c565b95505b828110156113f75780830392506113fc565b600092505b61140583611ce3565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114585786900361145c565b5060005b611465816119e7565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061149c8585611529565b90506114a78161247a565b9450846000036114bb576000915050610b97565b6114cb60408401602085016136e9565b156114fa576114f3856114e160208601866136b2565b6114ee6040870187613835565b612563565b9150611521565b61151d8561150b60208601866136b2565b6115186040870187613835565b6126fd565b8491505b509392505050565b6000610b978383670de0b6b3a764000061245c565b60008060008060008060008061155389612065565b90506115bd6115606119af565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612893565b90995097509150600080806115d361066c6119af565b95508c6115e28f868984612198565b9a5091955090935091506115f68385613758565b6116009087613758565b955061160c828561367f565b611616908c613758565b9a50611622888c61367f565b995050505050506116ad86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116609190613758565b81526020810191909152604001600020600101546001600160801b0316428e116116a45760008e8152600760205260409020600101546001600160801b03166116a6565b8e5b60016122ac565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061170557507f00000000000000000000000000000000000000000000000000000000000000006117038583613758565b105b1561171257611712611388565b6003549084900390600f0b6117278482613692565b90508361173386611247565b13801561176857507f000000000000000000000000000000000000000000000000000000000000000061176683836128e7565b105b1561177557611775611388565b600254600160801b90046001600160801b03166117b7611017826117a1670de0b6b3a7640000886137ab565b6004546001600160801b031691908c600061234b565b600480546001600160801b0319166001600160801b03929092169190911790556117e18882613758565b90506117ec816119e7565b600280546001600160801b03928316600160801b029216919091179055611812836119e7565b600180546001600160801b0319166001600160801b039290921691909117905561183b826123f5565b600380546001600160801b0319166001600160801b0392909216919091179055611864876119e7565b60018054601090611886908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161190357504761198e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611967573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198b919061387c565b90505b60125460000361199f576000610b97565b601254610b97908490839061245c565b6001546003546000916105cc916001600160801b0390911690600f0b6128e7565b6000610081826119e185888861245c565b9061290d565b60006001600160801b0382111561127157604051630f0af95160e11b815260040160405180910390fd5b6000818311611a205782610b97565b50919050565b6005546000908190611a49908490600160801b90046001600160801b0316611529565b6005546201000090046001600160701b03169250905081811115611bc5576000611a738383613758565b9050611a826110178286612982565b60058054601090611aa4908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611add858361299790919063ffffffff16565b90506000611b0b827f0000000000000000000000000000000000000000000000000000000000000000611529565b905080600b6000828254611b1f919061367f565b90915550611b2f90508183613758565b9150611b3a826119e7565b60018054600090611b559084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b82826129ac565b60038054600090611b97908490600f0b6137e2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611bd78785612997565b91506000611c05837f0000000000000000000000000000000000000000000000000000000000000000611529565b9050611c31817f0000000000000000000000000000000000000000000000000000000000000000611529565b91508315611c5457611c438282613758565b611c4d9084613758565b9250611c6b565b611c5e8282613758565b611c68908461367f565b92505b86861015611c8e57611c7e83878961245c565b9250611c8b82878961245c565b91505b509550959350505050565b600080611cb184611cab8a888a61245c565b90612997565b9050611cbe88848661245c565b611cc8908261367f565b905086811115611cd85786810391505b509695505050505050565b60006001600160701b038211156112715760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d58916001600160801b031690613758565b905080600003611d6c576001915050611241565b6000611d77856129d6565b905080600003611d8c57600192505050611241565b600080611d9a838589612a72565b9150915080611db0576000945050505050611241565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611dec929190613913565b6040805180830381865af4158015611e08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e2c9190613989565b91509150611e4a611e3c82611247565b611e45906139ad565b612bed565b925082611e605760009650505050505050611241565b611e69826119e7565b60068054600090611e849084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611eb1816119e7565b60068054601090611ed3908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f3087612d83565b6040518263ffffffff1660e01b8152600401611f4c91906139c9565b6040805180830381865af4158015611f68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8c91906139d8565b9150915080611fa2575060009485945092505050565b6000808611611fb2576000611fbc565b611fbc8387611529565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691612027919061367f565b6120319190613758565b90508060000361204a5750600096879650945050505050565b60006120568383612997565b98600198509650505050505050565b6000806120706105d1565b905080831161208057600061208a565b61208a8184613758565b9150610b97827f0000000000000000000000000000000000000000000000000000000000000000612997565b600080806120d76120cf88670de0b6b3a7640000613758565b899087612ebd565b90508615612119576120e98888612447565b915061210a8a8a846121038a670de0b6b3a7640000613758565b8989612ee3565b9250612116838261367f565b90505b9750975097945050505050565b600061214461213d84670de0b6b3a7640000613758565b8390612447565b610b9790670de0b6b3a7640000613758565b60008061218d856121656119af565b61216f919061367f565b600154610ec4908790600160801b90046001600160801b0316613758565b909210949350505050565b60008080806121ef87866121e88b6121e26121bb8c670de0b6b3a7640000613758565b7f000000000000000000000000000000000000000000000000000000000000000090612447565b90612447565b9190612ebd565b935061221b847f0000000000000000000000000000000000000000000000000000000000000000611529565b9150600061223c61223489670de0b6b3a7640000613758565b8a9088612ebd565b9050612268817f0000000000000000000000000000000000000000000000000000000000000000612447565b9350612294847f0000000000000000000000000000000000000000000000000000000000000000611529565b61229e908461367f565b915050945094509450949050565b6000806000806000808888101561231b5786156122d1576122ce8d898b61245c565b9c505b6122dc8c898b61245c565b9b506122e78b611247565b6122f08d611247565b6122fa9190613692565b90506123078b898b61245c565b9a506123148a898b61245c565b995061233a565b6123248b611247565b61232d8d611247565b6123379190613692565b90505b9b9c9a9b999a975050505050505050565b60008260000361235c5750846123ec565b81156123af5761238d61236f848761367f565b6123798587611529565b612383888a611529565b611cab919061367f565b9050600061239b8588611a11565b9050808210156123a9578091505b506123ec565b8285036123be575060006123ec565b6123e96123cb8487613758565b6123d58587612447565b6123df888a611529565b611cab9190613758565b90505b95945050505050565b600060016001607f1b0319821280612413575060016001607f1b0382135b156112715760405163a5353be560e01b815260040160405180910390fd5b60008183136124405781610b97565b5090919050565b6000610b978383670de0b6b3a7640000612ebd565b600082600019048411830215820261247357600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016124c9575047612554565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561252d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612551919061387c565b90505b601254610b979084908361245c565b600060125485116125745784612578565b6012545b94506000612585866118b4565b905085601260008282546125999190613758565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161263f576040516001600160a01b038716908390600081818185875af1925050503d806000811461262f576040519150601f19603f3d011682016040523d82523d6000602084013e612634565b606091505b5050809150506126d5565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156126ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126d29190613a08565b90505b806126f3576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601254841161270c5783612710565b6012545b9350600061271d856118b4565b905084601260008282546127319190613758565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127d7576040516001600160a01b038616908390600081818185875af1925050503d80600081146127c7576040519150601f19603f3d011682016040523d82523d6000602084013e6127cc565b606091505b50508091505061286d565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612846573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061286a9190613a08565b90505b8061288b576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600080806128b46128ac88670de0b6b3a7640000613758565b89908761245c565b90508615612119576128c68888611529565b915061210a8a8a846128e08a670de0b6b3a7640000613758565b8989612f06565b6000806128f48484612f17565b90925090508061290657612906611388565b5092915050565b6000816000036129265750670de0b6b3a7640000611241565b8260000361293657506000611241565b600061294183611247565b9050600061295661295186611247565b612f56565b905081810261296d670de0b6b3a764000082613a25565b90506129788161317c565b9695505050505050565b6000610b9783670de0b6b3a764000084612ebd565b6000610b9783670de0b6b3a76400008461245c565b600060016001607f1b038211156112715760405163a5353be560e01b815260040160405180910390fd5b60025460009081906129f1906001600160801b031684612982565b9050612a1d7f00000000000000000000000000000000000000000000000000000000000000008261367f565b6001546001600160801b03161115611a20576001547f000000000000000000000000000000000000000000000000000000000000000090612a689083906001600160801b0316613758565b610b979190613758565b612a7a613557565b600080612a8684612d83565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612ac191906139c9565b6040805180830381865af4158015612add573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0191906139d8565b9350905082612b16575060009150612be59050565b6000612b3d612b3884610160015185610140015161152990919063ffffffff16565b611247565b612b5d612b3885610120015186610100015161244790919063ffffffff16565b612b679190613692565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ca4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cc89190613a53565b935093509350935080612ce45750600098975050505050505050565b868414612d1557612cf4846119e7565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612d4657612d25836123f5565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612d7457612d56826119e7565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d8b6135a9565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612e839116613311565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612eb592900416613311565b905292915050565b6000826000190484118302158202612ed457600080fd5b50910281810615159190040190565b600080612ef4888888888888613387565b909250905080611cd857611cd8611388565b600080612ef4888888888888613468565b600080600083612f2686611247565b612f309190613692565b90506000811215612f48576000809250925050612f4f565b9150600190505b9250929050565b6000808213612f785760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ffb9084901c611247565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361319757506000919050565b680755bf798b4a1bf1e582126131c0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061297874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611247565b600080670de0b6b3a76400006133256105d1565b61332f91906137ab565b905080831161333f576000613349565b6133498184613758565b9150610b97613380670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137ab565b8390612997565b60008060006133998989888888613528565b9050868810156133b057600080925092505061345d565b96869003966133bf888761290d565b9750878110156133d657600080925092505061345d565b8781036133e4818688612ebd565b9050670de0b6b3a764000081106134185761341161340a670de0b6b3a764000089612982565b829061290d565b9050613430565b61342d61340a670de0b6b3a764000089612997565b90505b61343a8186612982565b9050898110156134525760008093509350505061345d565b899003925060019150505b965096945050505050565b600080600061347a8989888888613528565b905061348a866119e1898b61367f565b9750878110156134a157600080925092505061345d565b8781036134af818688612ebd565b9050670de0b6b3a764000081106134dc576134d561340a670de0b6b3a764000089612982565b90506134f4565b6134f161340a670de0b6b3a764000089612997565b90505b6134fe8186612982565b9050808a10156135165760008093509350505061345d565b90980398600198509650505050505050565b6000613534858561290d565b61354d613545866119e1868b612447565b859085612ebd565b6123e9919061367f565b60405180610120016040528061356b6135a9565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561362057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561364c57600080fd5b85016060818803121561365e57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561124157611241613669565b818103600083128015838313168383128216171561290657612906613669565b6000602082840312156136c457600080fd5b81356001600160a01b0381168114610b9757600080fd5b80151581146105b657600080fd5b6000602082840312156136fb57600080fd5b8135610b97816136db565b808201828112600083128015821682158216171561372657613726613669565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826137535761375361372e565b500690565b8181038181111561124157611241613669565b6001600160701b0381811683821601908082111561290657612906613669565b6001600160801b0381811683821601908082111561290657612906613669565b808202811582820484141761124157611241613669565b6001600160801b0382811682821603908082111561290657612906613669565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561124157611241613669565b600081600f0b60016001607f1b0319810361382c5761382c613669565b60000392915050565b6000808335601e1984360301811261384c57600080fd5b83018035915067ffffffffffffffff82111561386757600080fd5b602001915036819003821315612f4f57600080fd5b60006020828403121561388e57600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613927828551613895565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561399c57600080fd5b505080516020909101519092909150565b6000600160ff1b82016139c2576139c2613669565b5060000390565b61018081016112418284613895565b600080604083850312156139eb57600080fd5b8251915060208301516139fd816136db565b809150509250929050565b600060208284031215613a1a57600080fd5b8151610b97816136db565b600082613a3457613a3461372e565b600160ff1b821460001984141615613a4e57613a4e613669565b500590565b60008060008060808587031215613a6957600080fd5b845193506020850151925060408501519150606085015161365e816136db56fea26469706673582212206bcbbece994c7b7b770849e687d21aff88fb03dc29991551733af9d583c43e5164736f6c634300081400336102606040523480156200001257600080fd5b5060405162004184380380620041848339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613cb7620004cd6000396000505060005050600050506000818161010001528181610311015261304e0152600081816113be01528181611ece01528181611f310152818161271a01528181612c3501528181612c7101528181612e6701526130280152600081816107ae01528181610d1401528181610e200152818161128f0152818161176a015281816117fd015261300201526000611aed015260008181611c13015281816125f90152818161290a0152612983015260008181610a3101528181610d730152818161133101528181611be70152612957015260008181610d52015281816125b501526128d60152600081816107cf01528181610cf201528181610e410152818161126d01526130740152600081816101dc015281816103a70152818161096901526136320152600081816107000152818161080101528181610888015281816108e901526109210152600050506000818161055f01528181611568015281816115b101528181611643015281816116c40152818161186b015281816118ec0152818161279b015281816127e401528181612a500152612a990152613cb76000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613802565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613802565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102ca565b6000806100a4610533565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561055d565b6100de836105c9565b6000806100eb8886610602565b909250905060006100fc83836106db565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106f9565b905061017881846004610734565b5060008060006101888787610ccb565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c69190613877565b909155506101d79050844283610e7e565b6102017f000000000000000000000000000000000000000000000000000000000000000085613877565b985061020f8389888c610fbc565b600061021c60018b611156565b90506102358161022f60208e018e61388a565b8b61118b565b8d8a8a898e85610248602083018361388a565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c86888661028560408801602089016138c1565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102d5610533565b600554610100900460ff16156102fe576040516321081abf60e01b815260040160405180910390fd5b61030661055d565b61030f836105c9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103505760405163211ddda360e11b815260040160405180910390fd5b600061035a611233565b90508481101561037d576040516342af972b60e01b815260040160405180910390fd5b60006103876106f9565b9050600061039e6103966106f9565b846004610734565b905060006103cc7f000000000000000000000000000000000000000000000000000000000000000084613877565b90506000806000806103df8e8988611246565b600b8054949850929650909450925083916000906103fe908490613877565b9091555061040f9050874283610e7e565b50600061041d84898d611369565b9050808d10156104405760405163c972651760e01b815260040160405180910390fd5b61044a818c610602565b508e905061045a81858b89611398565b6000610467600288611156565b90508c6104818261047b602084018461388a565b8561118b565b858b8684610492602086018661388a565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8a866104cf60408b0160208c016138c1565b6104e3896104dd8a8d6138de565b906106db565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361055657604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a957503415155b156105c757604051631574f9f360e01b815260040160405180910390fd5b565b60006105d8602083018361388a565b6001600160a01b0316036105ff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061061660408501602086016138c1565b1561063b576106318561062c60408701876138f1565b61154c565b9093509050610657565b50346106538561064e60408701876138f1565b6117e0565b8492505b61065f611233565b915080156106d257604051600090339083908381818185875af1925050503d80600081146106a9576040519150601f19603f3d011682016040523d82523d6000602084013e6106ae565b606091505b50509050806106d0576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106f08383670de0b6b3a764000061198a565b90505b92915050565b60006107257f00000000000000000000000000000000000000000000000000000000000000004261394e565b61072f90426138de565b905090565b600083815260076020526040812060018101546001600160801b031615158061075c57504285115b1561077557600101546001600160801b03169050610cc4565b60008060006107826106f9565b90508088036107fa578692506107f36107996119a8565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c9565b91506108b6565b60006108267f00000000000000000000000000000000000000000000000000000000000000008a613877565b90505b8181036108415787935061083e6107996119a8565b92505b6000818152600760205260409020600101546001600160801b031693508315610883576000818152600760205260409020546001600160801b031692506108b4565b6108ad7f000000000000000000000000000000000000000000000000000000000000000082613877565b9050610829565b505b6108bf836119e9565b6001850180546001600160801b0319166001600160801b039290921691909117905561091561090e7f00000000000000000000000000000000000000000000000000000000000000008a6138de565b8984610e7e565b6109538861094d6109467f000000000000000000000000000000000000000000000000000000000000000083613877565b4290611a17565b84610e7e565b61095c87611a2c565b506000905060078161098e7f00000000000000000000000000000000000000000000000000000000000000008c6138de565b815260208101919091526040016000908120600101546001600160801b031691506109ba60028b611156565b6000818152600e60205260408120549192508b8b8315610b0057600192506000806109e986898d866000611bd0565b9150915080600b60008282546109ff9190613877565b90915550610a1b905086600084610a1581611c9f565b88611cc9565b610a258183613877565b9150610a5586838a8e877f0000000000000000000000000000000000000000000000000000000000000000611e43565b9150610a69610a6483856106db565b611e8d565b60058054600290610a8a9084906201000090046001600160701b0316613962565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ab7826119e9565b60058054601090610ad9908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b0d600184611156565b6000818152600e60205260409020549091508015610c1c5760019450600080610b3a838b8f886001611bd0565b9150915080600b6000828254610b509190613877565b90915550610b6c905083600084610b6681611c9f565b8a611eb7565b610b7681836138de565b9150610b85610a6483876106db565b60058054600290610ba69084906201000090046001600160701b0316613962565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bd3826119e9565b60058054601090610bf5908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c5457610c48610c2e87611c9f565b610c3783611c9f565b610c4191906139a2565b60006120a8565b610c52838f61215b565b505b6000610c5f84612355565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d38610cdc6119a8565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006124b3565b9250610d456107996119a8565b9050610d9c8684610d97847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006124df565b61254c565b15610da957610da961258e565b600080610db78884896125a7565b9092509050610dc682866138de565b9450610dd381848961198a565b9350610ddf84896138de565b9550670de0b6b3a7640000610e6587610df66119a8565b610e009190613877565b600154610e1e908990600160801b90046001600160801b03166138de565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c9565b1115610e7357610e7361258e565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610eaa5750505050565b6000848152600760205260408120546001600160801b031690819003610f0457610ed3836119e9565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f82565b610f55610f50670de0b6b3a7640000610f1d88866138de565b610f2791906139c2565b85670de0b6b3a7640000610f3b878a6138de565b610f4591906139c2565b859291906001612627565b6119e9565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f8b846119e9565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610ffe610f5082610fe8670de0b6b3a7640000866139c2565b6004546001600160801b03169190886001612627565b600480546001600160801b0319166001600160801b0392909216919091179055611027856119e9565b600180546000906110429084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061106f846119e9565b60018054601090611091908490600160801b90046001600160801b03166139d9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110be846119e9565b6110c89082613982565b600280546001600160801b03808416600160801b029116179055905060006110ef836126cf565b905061110d816110fe87611c9f565b61110890846139f9565b6120a8565b61111684612713565b6111225761112261258e565b600061112d85612773565b90508061114d57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111805760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111bd908490613877565b90915550506000838152600e6020526040812080548392906111e0908490613877565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061072f670de0b6b3a7640000612780565b6000806000806112b36112576119a8565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061287b565b9250866112c0848861289c565b11156112ce576112ce61258e565b6000806112dc6107996119a8565b92506112f289670de0b6b3a7640000858b6128b1565b50919350909150611305905081836138de565b61130f90866138de565b945061135b886113558b611323858a6138de565b8b61132e8e826129bf565b8e7f00000000000000000000000000000000000000000000000000000000000000006129d5565b9061289c565b955092505093509350935093565b600061137b60408301602084016138c1565b15611387575082610cc4565b61139184846129fa565b9050610cc4565b6001546001600160801b0316838110156113b4576113b461258e565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906113ec908390600f0b612a0f565b10156113fa576113fa61258e565b60035461144490610f5090600160801b90046001600160801b0316611427670de0b6b3a7640000866139c2565b600454600160801b90046001600160801b03169190896001612627565b600480546001600160801b03928316600160801b02921691909117905561146a816119e9565b600180546001600160801b0319166001600160801b0392909216919091179055611493856119e9565b600180546010906114b5908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114e2856119e9565b60038054601090611504908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611533836126cf565b905061110d8161154288611c9f565b61110890846139a2565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161159c575047611627565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611600573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116249190613a21565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116a25787341015611691576040516312171d8360e31b815260040160405180910390fd5b61169b88346138de565b905061173c565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611715573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117399190613a3a565b91505b8161175a576040516312171d8360e31b815260040160405180910390fd5b60125460000361179f5761178e887f00000000000000000000000000000000000000000000000000000000000000006129fa565b6012819055945092506117d8915050565b6012546000906117b1908a908661198a565b905080601260008282546117c59190613877565b909155509095509093506117d892505050565b935093915050565b60006117eb84612780565b905060125460000361182957611821817f00000000000000000000000000000000000000000000000000000000000000006129fa565b60125561184f565b600061183482612a35565b905080601260008282546118489190613877565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118ca57823410156118b9576040516312171d8360e31b815260040160405180910390fd5b6118c383346138de565b9050611964565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561193d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119619190613a3a565b91505b81611982576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008260001904841183021582026119a157600080fd5b5091020490565b60015460035460009161072f916001600160801b0390911690600f0b612a0f565b60006119e0826119da85888861198a565b90612b1e565b95945050505050565b60006001600160801b03821115611a1357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611a2657826106f0565b50919050565b6005546000908190611a4f908490600160801b90046001600160801b03166106db565b6005546201000090046001600160701b03169250905081811115611bcb576000611a7983836138de565b9050611a88610f508286612b89565b60058054601090611aaa908490600160801b90046001600160801b03166139d9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611ae385836129fa90919063ffffffff16565b90506000611b11827f00000000000000000000000000000000000000000000000000000000000000006106db565b905080600b6000828254611b259190613877565b90915550611b35905081836138de565b9150611b40826119e9565b60018054600090611b5b9084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b8882612b9e565b60038054600090611b9d908490600f0b613a57565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611bdd87856129fa565b91506000611c0b837f00000000000000000000000000000000000000000000000000000000000000006106db565b9050611c37817f00000000000000000000000000000000000000000000000000000000000000006106db565b91508315611c5a57611c4982826138de565b611c5390846138de565b9250611c71565b611c6482826138de565b611c6e9084613877565b92505b86861015611c9457611c8483878961198a565b9250611c9182878961198a565b91505b509550959350505050565b60006001600160ff1b03821115611a135760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611d12610f5082611cf5670de0b6b3a7640000866139c2565b600454600160801b90046001600160801b031691908a6000612627565b600480546001600160801b03928316600160801b029216919091179055611d38866119e9565b611d4290826139d9565b600380546001600160801b03928316600160801b029216919091179055611d68846119e9565b60018054600090611d839084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611db083612bc8565b60038054600090611dc5908490600f0b613a57565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611df5856119e9565b60018054601090611e17908490600160801b90046001600160801b03166139d9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611e5b84611e558a888a61198a565b906129fa565b9050611e6888848661198a565b611e729082613877565b905086811115611e825786810391505b509695505050505050565b60006001600160701b03821115611a135760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611ef957507f0000000000000000000000000000000000000000000000000000000000000000611ef785836138de565b105b15611f0657611f0661258e565b6003549084900390600f0b611f1b84826139a2565b905083611f2786611c9f565b138015611f5c57507f0000000000000000000000000000000000000000000000000000000000000000611f5a8383612a0f565b105b15611f6957611f6961258e565b600254600160801b90046001600160801b0316611fab610f5082611f95670de0b6b3a7640000886139c2565b6004546001600160801b031691908c6000612627565b600480546001600160801b0319166001600160801b0392909216919091179055611fd588826138de565b9050611fe0816119e9565b600280546001600160801b03928316600160801b029216919091179055612006836119e9565b600180546001600160801b0319166001600160801b039290921691909117905561202f82612bc8565b600380546001600160801b0319166001600160801b0392909216919091179055612058876119e9565b6001805460109061207a908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006120d16120b78483612c04565b6120c2846000612c04565b6120cc91906139a2565b612bc8565b9050600081600f0b131561212657600280548291906000906120fd9084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156121565761213b81613a84565b600280546000906120fd9084906001600160801b03166139d9565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916121a6916001600160801b0316906138de565b9050806000036121ba5760019150506106f3565b60006121c585612c13565b9050806000036121da576001925050506106f3565b6000806121e8838589612caf565b91509150806121fe5760009450505050506106f3565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161223a929190613b28565b6040805180830381865af4158015612256573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061227a9190613b9e565b9150915061229861228a82611c9f565b61229390613bc2565b612e23565b9250826122ae57600096505050505050506106f3565b6122b7826119e9565b600680546000906122d29084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506122ff816119e9565b60068054601090612321908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61237e87612fb9565b6040518263ffffffff1660e01b815260040161239a9190613bde565b6040805180830381865af41580156123b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123da9190613bed565b91509150806123f0575060009485945092505050565b600080861161240057600061240a565b61240a83876106db565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916124759190613877565b61247f91906138de565b9050806000036124985750600096879650945050505050565b60006124a483836129fa565b98600198509650505050505050565b60006124d48787876124cd88670de0b6b3a76400006138de565b87876130f3565b979650505050505050565b60006125446125206124f984670de0b6b3a76400006138de565b611355670de0b6b3a764000061250f818a612b89565b61251991906138de565b879061289c565b61253290670de0b6b3a7640000613877565b611e5584670de0b6b3a76400006138de565b949350505050565b6000806125838561255b6119a8565b6125659190613877565b600154610e1e908790600160801b90046001600160801b03166138de565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806125f18561135585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006125e7818c612b89565b61135591906138de565b915061261d827f00000000000000000000000000000000000000000000000000000000000000006106db565b9050935093915050565b6000826000036126385750846119e0565b811561268b5761266961264b8487613877565b61265585876106db565b61265f888a6106db565b611e559190613877565b905060006126778588611a17565b905080821015612685578091505b506119e0565b82850361269a575060006119e0565b6126c56126a784876138de565b6126b1858761289c565b6126bb888a6106db565b611e5591906138de565b9695505050505050565b60006126f7600e60006126e3600286611156565b815260200190815260200160002054611c9f565b612709600e60006126e3600187611156565b6106f391906139a2565b600061273f7f00000000000000000000000000000000000000000000000000000000000000008361289c565b60025461275591906001600160801b0316613877565b60015461276b906001600160801b0316846106db565b101592915050565b60006106f382600461215b565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127cf57504761285a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612833573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128579190613a21565b90505b60125460000361286b576000610cc4565b601254610cc4908490839061198a565b60006124d487878761289588670de0b6b3a76400006138de565b87876131a7565b60006106f08383670de0b6b3a76400006131ca565b600080808061290287866128fb8b6113556128d48c670de0b6b3a76400006138de565b7f00000000000000000000000000000000000000000000000000000000000000009061289c565b91906131ca565b935061292e847f00000000000000000000000000000000000000000000000000000000000000006106db565b9150600061294f61294789670de0b6b3a76400006138de565b8a90886131ca565b905061297b817f000000000000000000000000000000000000000000000000000000000000000061289c565b93506129a7847f00000000000000000000000000000000000000000000000000000000000000006106db565b6129b19084613877565b915050945094509450949050565b60008183116129ce57816106f0565b5090919050565b6000806129ed846129e78a888a6131ca565b90612b89565b9050611e688884866131ca565b60006106f083670de0b6b3a76400008461198a565b600080612a1c84846131f0565b909250905080612a2e57612a2e61258e565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612a84575047612b0f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612ae8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0c9190613a21565b90505b601254610cc49084908361198a565b600081600003612b375750670de0b6b3a76400006106f3565b82600003612b47575060006106f3565b6000612b5283611c9f565b90506000612b67612b6286611c9f565b61322c565b9050818102612b7e670de0b6b3a764000082613c1d565b90506126c581613452565b60006106f083670de0b6b3a7640000846131ca565b600060016001607f1b03821115611a135760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612be6575060016001607f1b0382135b15611a135760405163a5353be560e01b815260040160405180910390fd5b60008183136129ce57816106f0565b6002546000908190612c2e906001600160801b031684612b89565b9050612c5a7f000000000000000000000000000000000000000000000000000000000000000082613877565b6001546001600160801b03161115611a26576001547f000000000000000000000000000000000000000000000000000000000000000090612ca59083906001600160801b03166138de565b610cc491906138de565b612cb761374f565b600080612cc384612fb9565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612cfe9190613bde565b6040805180830381865af4158015612d1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d3e9190613bed565b9350905082612d535750600091506117d89050565b6000612d7a612d758461016001518561014001516106db90919063ffffffff16565b611c9f565b612d9a612d7585610120015186610100015161289c90919063ffffffff16565b612da491906139a2565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612eda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612efe9190613c4b565b935093509350935080612f1a5750600098975050505050505050565b868414612f4b57612f2a846119e9565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612f7c57612f5b83612bc8565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612faa57612f8c826119e9565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612fc16137a1565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916130b991166135e7565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926130eb929004166135e7565b905292915050565b600080613103888887878761365d565b905061311d856119da613116898c613877565b86906106db565b975061312a84898561198a565b97508781101561313c5761313c61258e565b878103670de0b6b3a764000081106131715761316a613163670de0b6b3a764000088612b89565b8290612b1e565b9050613189565b613186613163670de0b6b3a7640000886129fa565b90505b808810156131995761319961258e565b909603979650505050505050565b6000806131b888888888888861368c565b909250905080611e8257611e8261258e565b60008260001904841183021582026131e157600080fd5b50910281810615159190040190565b6000806000836131ff86611c9f565b61320991906139a2565b905060008112156132215760008092509250506106d4565b946001945092505050565b600080821361324e5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132d19084901c611c9f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361346d57506000919050565b680755bf798b4a1bf1e58212613496576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906126c574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611c9f565b600080670de0b6b3a76400006135fb6106f9565b61360591906139c2565b905080831161361557600061361f565b61361f81846138de565b9150610cc4613656670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139c2565b83906129fa565b60006136698585612b1e565b61368261367a866119da868b61289c565b8590856131ca565b6126c59190613877565b600080600061369e898988888861365d565b90506136ae866119da898b613877565b9750878110156136c5576000809250925050613744565b8781036136d38186886131ca565b9050670de0b6b3a76400008110613700576136f9613163670de0b6b3a764000089612b89565b9050613718565b613715613163670de0b6b3a7640000896129fa565b90505b6137228186612b89565b9050808a101561373a57600080935093505050613744565b8903925060019150505b965096945050505050565b6040518061012001604052806137636137a1565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561381857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561384457600080fd5b85016060818803121561385657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106f3576106f3613861565b60006020828403121561389c57600080fd5b81356001600160a01b0381168114610cc457600080fd5b80151581146105ff57600080fd5b6000602082840312156138d357600080fd5b8135610cc4816138b3565b818103818111156106f3576106f3613861565b6000808335601e1984360301811261390857600080fd5b83018035915067ffffffffffffffff82111561392357600080fd5b6020019150368190038213156106d457600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261395d5761395d613938565b500690565b6001600160701b03818116838216019080821115612a2e57612a2e613861565b6001600160801b03818116838216019080821115612a2e57612a2e613861565b8181036000831280158383131683831282161715612a2e57612a2e613861565b80820281158282048414176106f3576106f3613861565b6001600160801b03828116828216039080821115612a2e57612a2e613861565b8082018281126000831280158216821582161715613a1957613a19613861565b505092915050565b600060208284031215613a3357600080fd5b5051919050565b600060208284031215613a4c57600080fd5b8151610cc4816138b3565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106f3576106f3613861565b600081600f0b60016001607f1b03198103613aa157613aa1613861565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613b3c828551613aaa565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613bb157600080fd5b505080516020909101519092909150565b6000600160ff1b8201613bd757613bd7613861565b5060000390565b61018081016106f38284613aaa565b60008060408385031215613c0057600080fd5b825191506020830151613c12816138b3565b809150509250929050565b600082613c2c57613c2c613938565b600160ff1b821460001984141615613c4657613c46613861565b500590565b60008060008060808587031215613c6157600080fd5b8451935060208501519250604085015191506060850151613856816138b356fea2646970667358221220b0616b5dd78cb0ec6a4de89eac362d6f2a229fd43550e43ce4551c8e9f10627f64736f6c634300081400336102606040523480156200001257600080fd5b50604051620044f9380380620044f98339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051614025620004d4600039600050506000505060008181610495015281816104c401526104f101526000818161032e0152818161073c01528181610c1a01526119280152600081816108e9015281816109d401528181610a6701528181610b2f01528181611902015281816124e60152818161254901528181612844015281816128800152612a7601526000818161038f0152818161095901528181610e82015281816118dc01528181612de60152612e71015260006120eb01526000612246015260008181611105015261221a015260005050600081816103d1015281816109ac01528181610ea3015261194e0152600081816103b00152818161046a015281816109860152818161103d015261306f01526000818161028001528181610dd901528181610ed501528181610f5c01528181610fbd0152610ff5015260005050600081816116dd01528181611de001528181611e2901528181612be401528181612c2d01528181612cbf01528181612d4001528181612edf01528181612f6001528181613272015281816132bb01528181613396015281816134420152818161352e01526135da01526140256000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613ae8565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613b38565b61011a565b005b6100be6100b9366004613b5a565b610128565b604051908152602001610080565b6100be6100da366004613ae8565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613ae8565b61015a565b60008061010d858585610168565b915091505b935093915050565b6101248282610229565b5050565b600061013786868686866102e8565b90505b95945050505050565b6000610150848484610893565b90505b9392505050565b60008061010d858585610c04565b600080610173610d57565b61017c83610d81565b6000610186610dba565b905061019b610193610dd2565b826004610e08565b506101a9338783888861139d565b90935091506101bb6020850185613bbe565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8486856101f960408b0160208c01613bf5565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610231610d57565b600061023b610dba565b6000848152600760205260409020600101549091506001600160801b03161561026f5761026881836114e0565b50506102de565b6000610279610dd2565b90506102a57f000000000000000000000000000000000000000000000000000000000000000085613c28565b1515806102b157508381105b156102cf5760405163ecd29e8160e01b815260040160405180910390fd5b6102da848385610e08565b5050505b6101246001600055565b60006102f2610d57565b600554610100900460ff161561031b576040516321081abf60e01b815260040160405180910390fd5b6103236116db565b61032c82610d81565b7f000000000000000000000000000000000000000000000000000000000000000086101561036d5760405163211ddda360e11b815260040160405180910390fd5b60006103f561037a611747565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611768565b90508481108061040457508381115b1561042257604051633b61151160e11b815260040160405180910390fd5b60008061042f898661178e565b91509150600061043d610dd2565b905061044b81836004610e08565b5060008181526007602052604081205461048e906001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611867565b90506104ba7f000000000000000000000000000000000000000000000000000000000000000082613c52565b85118061051957507f00000000000000000000000000000000000000000000000000000000000000008111801561051957506105167f000000000000000000000000000000000000000000000000000000000000000082613c65565b85105b1561053757604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610583916001600160801b0390911690613c65565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105be908390613c52565b905060008060006105ce87611893565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610608908490600401613cf6565b602060405180830381865af4158015610625573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106499190613d05565b915061065c610657896119cd565b6119fb565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106be908490600401613cf6565b602060405180830381865af41580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190613d05565b9250818310156107225760405163184d952160e11b815260040160405180910390fd5b61073884836107318187613c65565b9190611a21565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561077b5760405163211ddda360e11b815260040160405180910390fd5b508d8d610788828c611a3f565b10156107a75760405163c972651760e01b815260040160405180910390fd5b6107bf60006107b960208e018e613bbe565b8c611a54565b60006107ca88611afd565b9050806107ea57604051638bdf918d60e01b815260040160405180910390fd5b60008515610801576107fc8487611a3f565b610804565b60005b90508c6108146020820182613bbe565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e868d6108516040870160208801613bf5565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a250505050505050505050505061013a6001600055565b600061089d610d57565b6108a56116db565b6108ae82610d81565b60055460ff16156108d257604051637983c05160e01b815260040160405180910390fd5b6000806108df868561178e565b909250905061090f7f00000000000000000000000000000000000000000000000000000000000000006002613d1e565b82101561092f57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5f9190613d35565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a908484611b0a565b1015610aaf5760405163216f4ab160e21b815260040160405180910390fd5b610ab883611b30565b600180546001600160801b0319166001600160801b0392909216919091179055610ae182611b5a565b600380546001600160801b0319166001600160801b0392909216919091179055610b0a81611b30565b600180546001600160801b03928316600160801b029216919091179055610b536000807f0000000000000000000000000000000000000000000000000000000000000000611a54565b610b6b6000610b6560208a018a613bbe565b88611a54565b610b7e610b76610dd2565b856004610e08565b50610b8c6020880188613bbe565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952878b87610bc960408d0160208e01613bf5565b6040805194855260208501939093529183015215156060820152608081018b905260a00160405180910390a250505050506101536001600055565b600080610c0f610d57565b610c1883610d81565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c595760405163211ddda360e11b815260040160405180910390fd5b6000610c63610dba565b9050610c70610193610dd2565b50610c7d60003388611b96565b610c92600360f81b610b656020870187613bbe565b6000610cad610ca46020870187613bbe565b8884898961139d565b9094509050610cbc8188613c65565b92506000610cc983611c67565b509050610cd96020870187613bbe565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a8887610d1760408d0160208e01613bf5565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610d7a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610d906020830183613bbe565b6001600160a01b031603610db75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dcd670de0b6b3a7640000611dc5565b905090565b6000610dfe7f000000000000000000000000000000000000000000000000000000000000000042613c28565b610dcd9042613c65565b600083815260076020526040812060018101546001600160801b0316151580610e3057504285115b15610e4957600101546001600160801b03169050610153565b6000806000610e56610dd2565b9050808803610ece57869250610ec7610e6d611747565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ec0565b9150610f8a565b6000610efa7f00000000000000000000000000000000000000000000000000000000000000008a613c52565b90505b818103610f1557879350610f12610e6d611747565b92505b6000818152600760205260409020600101546001600160801b031693508315610f57576000818152600760205260409020546001600160801b03169250610f88565b610f817f000000000000000000000000000000000000000000000000000000000000000082613c52565b9050610efd565b505b610f9383611b30565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fe9610fe27f00000000000000000000000000000000000000000000000000000000000000008a613c65565b8984611ed7565b6110278861102161101a7f000000000000000000000000000000000000000000000000000000000000000083613c52565b4290612015565b84611ed7565b6110308761202a565b50600090506007816110627f00000000000000000000000000000000000000000000000000000000000000008c613c65565b815260208101919091526040016000908120600101546001600160801b0316915061108e60028b6121ce565b6000818152600e60205260408120549192508b8b83156111d457600192506000806110bd86898d866000612203565b9150915080600b60008282546110d39190613c52565b909155506110ef9050866000846110e9816119cd565b886122d2565b6110f98183613c52565b915061112986838a8e877f000000000000000000000000000000000000000000000000000000000000000061244c565b915061113d6111388385612490565b6124a5565b6005805460029061115e9084906201000090046001600160701b0316613d63565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061118b82611b30565b600580546010906111ad908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e16001846121ce565b6000818152600e602052604090205490915080156112f0576001945060008061120e838b8f886001612203565b9150915080600b60008282546112249190613c52565b9091555061124090508360008461123a816119cd565b8a6124cf565b61124a8183613c65565b91506112596111388387612490565b6005805460029061127a9084906201000090046001600160701b0316613d63565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112a782611b30565b600580546010906112c9908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113285761131c611302876119cd565b61130b836119cd565b6113159190613da3565b60006126c0565b611326838f6114e0565b505b600061133384611c67565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113a985611afd565b505060065485906001600160801b0316808211156113ce57806001600160801b031691505b816000036113e35760008092509250506114d6565b6113f2600360f81b8984611b96565b6006546000906114189084906001600160801b03600160801b9091048116908516611a21565b905061142383611b30565b61142d9083613dc3565b600680546001600160801b0319166001600160801b039290921691909117905561145681611b30565b60068054601090611478908490600160801b90046001600160801b0316613dc3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a7818887612773565b93506114b3868461280d565b8410156114d35760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161152b916001600160801b031690613c65565b90508060000361153f5760019150506116d5565b600061154a85612822565b90508060000361155f576001925050506116d5565b60008061156d8385896128be565b91509150806115835760009450505050506116d5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016115bf929190613de3565b6040805180830381865af41580156115db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ff9190613e59565b9150915061161d61160f826119cd565b61161890613e7d565b612a32565b92508261163357600096505050505050506116d5565b61163c82611b30565b600680546000906116579084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168481611b30565b600680546010906116a6908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061172757503415155b1561174557604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610dcd916001600160801b0390911690600f0b611b0a565b60008061177787878786611ec0565b90506117838185611867565b979650505050505050565b600080806117a26040850160208601613bf5565b156117c7576117bd856117b86040870187613e99565b612bc8565b90935090506117e3565b50346117df856117da6040870187613e99565b612e54565b8492505b6117eb610dba565b9150801561185e57604051600090339083908381818185875af1925050503d8060008114611835576040519150601f19603f3d011682016040523d82523d6000602084013e61183a565b606091505b505090508061185c576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361187b84846301e13380612ffe565b61188d85670de0b6b3a7640000613c65565b90611a3f565b61189b613a23565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119939116613024565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926119c592900416613024565b905292915050565b60006001600160ff1b038211156119f75760405163396ea70160e11b815260040160405180910390fd5b5090565b611a0481612a32565b610db757604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a3857600080fd5b5091020490565b600061015383670de0b6b3a764000084611a21565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611a86908490613c52565b90915550506000838152600e602052604081208054839290611aa9908490613c52565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006116d58260046114e0565b600080611b17848461309a565b909250905080611b2957611b296130d6565b5092915050565b60006001600160801b038211156119f757604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611b78575060016001607f1b0382135b156119f75760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611bd957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611c1c908490613c65565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611af0565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611c9087611893565b6040518263ffffffff1660e01b8152600401611cac9190613cf6565b6040805180830381865af4158015611cc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cec9190613ee0565b9150915080611d02575060009485945092505050565b6000808611611d12576000611d1c565b611d1c8387612490565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611d879190613c52565b611d919190613c65565b905080600003611daa5750600096879650945050505050565b6000611db68383611a3f565b98600198509650505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611e14575047611e9f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611e78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e9c9190613d05565b90505b601254600003611eb0576000610153565b6012546101539084908390611a21565b600061013a82611ed1858888611a21565b906130ef565b600083815260076020526040902054600160801b90046001600160801b0316808303611f035750505050565b6000848152600760205260408120546001600160801b031690819003611f5d57611f2c83611b30565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611fdb565b611fae611fa9670de0b6b3a7640000611f768886613c65565b611f809190613d1e565b85670de0b6b3a7640000611f94878a613c65565b611f9e9190613d1e565b859291906001613164565b611b30565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611fe484611b30565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120245782610153565b50919050565b600554600090819061204d908490600160801b90046001600160801b0316612490565b6005546201000090046001600160701b031692509050818111156121c95760006120778383613c65565b9050612086611fa98286613202565b600580546010906120a8908490600160801b90046001600160801b0316613dc3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006120e18583611a3f90919063ffffffff16565b9050600061210f827f0000000000000000000000000000000000000000000000000000000000000000612490565b905080600b60008282546121239190613c52565b9091555061213390508183613c65565b915061213e82611b30565b600180546000906121599084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061218682613217565b6003805460009061219b908490600f0b613f10565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121f85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122108785611a3f565b9150600061223e837f0000000000000000000000000000000000000000000000000000000000000000612490565b905061226a817f0000000000000000000000000000000000000000000000000000000000000000612490565b9150831561228d5761227c8282613c65565b6122869084613c65565b92506122a4565b6122978282613c65565b6122a19084613c52565b92505b868610156122c7576122b7838789611a21565b92506122c4828789611a21565b91505b509550959350505050565b600354600160801b90046001600160801b031661231b611fa9826122fe670de0b6b3a764000086613d1e565b600454600160801b90046001600160801b031691908a6000613164565b600480546001600160801b03928316600160801b02921691909117905561234186611b30565b61234b9082613dc3565b600380546001600160801b03928316600160801b02921691909117905561237184611b30565b6001805460009061238c9084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123b983611b5a565b600380546000906123ce908490600f0b613f10565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506123fe85611b30565b60018054601090612420908490600160801b90046001600160801b0316613dc3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061245e8461188d8a888a611a21565b905061246b888486611a21565b6124759082613c52565b9050868111156124855786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a21565b60006001600160701b038211156119f75760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061251157507f000000000000000000000000000000000000000000000000000000000000000061250f8583613c65565b105b1561251e5761251e6130d6565b6003549084900390600f0b6125338482613da3565b90508361253f866119cd565b13801561257457507f00000000000000000000000000000000000000000000000000000000000000006125728383611b0a565b105b15612581576125816130d6565b600254600160801b90046001600160801b03166125c3611fa9826125ad670de0b6b3a764000088613d1e565b6004546001600160801b031691908c6000613164565b600480546001600160801b0319166001600160801b03929092169190911790556125ed8882613c65565b90506125f881611b30565b600280546001600160801b03928316600160801b02921691909117905561261e83611b30565b600180546001600160801b0319166001600160801b039290921691909117905561264782611b5a565b600380546001600160801b0319166001600160801b039290921691909117905561267087611b30565b60018054601090612692908490600160801b90046001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006126e96126cf8483613241565b6126da846000613241565b6126e49190613da3565b611b5a565b9050600081600f0b131561273e57600280548291906000906127159084906001600160801b0316613d83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561276e5761275381613f3d565b600280546000906127159084906001600160801b0316613dc3565b505050565b6000806127808585612490565b905061278b81613257565b94508460000361279f576000915050610153565b6127af6040840160208501613bf5565b156127de576127d7856127c56020860186613bbe565b6127d26040870187613e99565b613340565b9150612805565b612801856127ef6020860186613bbe565b6127fc6040870187613e99565b6134da565b8491505b509392505050565b60006101538383670de0b6b3a7640000612ffe565b600254600090819061283d906001600160801b031684613202565b90506128697f000000000000000000000000000000000000000000000000000000000000000082613c52565b6001546001600160801b03161115612024576001547f0000000000000000000000000000000000000000000000000000000000000000906128b49083906001600160801b0316613c65565b6101539190613c65565b6128c6613a84565b6000806128d284611893565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161290d9190613cf6565b6040805180830381865af4158015612929573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061294d9190613ee0565b93509050826129625750600091506101129050565b600061298961298484610160015185610140015161249090919063ffffffff16565b6119cd565b6129a961298485610120015186610100015161280d90919063ffffffff16565b6129b39190613da3565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ae9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0d9190613f63565b935093509350935080612b295750600098975050505050505050565b868414612b5a57612b3984611b30565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612b8b57612b6a83611b5a565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612bb957612b9b82611b30565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612c18575047612ca3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612c7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ca09190613d05565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612d1e5787341015612d0d576040516312171d8360e31b815260040160405180910390fd5b612d178834613c65565b9050612db8565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612d91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612db59190613fa4565b91505b81612dd6576040516312171d8360e31b815260040160405180910390fd5b601254600003612e1b57612e0a887f0000000000000000000000000000000000000000000000000000000000000000611a3f565b601281905594509250610112915050565b601254600090612e2d908a9086611a21565b90508060126000828254612e419190613c52565b9091555090955090935061011292505050565b6000612e5f84611dc5565b9050601254600003612e9d57612e95817f0000000000000000000000000000000000000000000000000000000000000000611a3f565b601255612ec3565b6000612ea882613257565b90508060126000828254612ebc9190613c52565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612f3e5782341015612f2d576040516312171d8360e31b815260040160405180910390fd5b612f378334613c65565b9050612fd8565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612fb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fd59190613fa4565b91505b81612ff6576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600082600019048411830215820261301557600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000613038610dd2565b6130429190613d1e565b905080831161305257600061305c565b61305c8184613c65565b9150610153613093670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d1e565b8390611a3f565b6000806000836130a9866119cd565b6130b39190613da3565b905060008112156130cb576000809250925050611860565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000816000036131085750670de0b6b3a76400006116d5565b82600003613118575060006116d5565b6000613123836119cd565b90506000613138613133866119cd565b613668565b905081810261314f670de0b6b3a764000082613fc1565b905061315a8161388e565b9695505050505050565b60008260000361317557508461013a565b81156131c8576131a66131888487613c52565b6131928587612490565b61319c888a612490565b61188d9190613c52565b905060006131b48588612015565b9050808210156131c2578091505b5061013a565b8285036131d75750600061013a565b6101376131e48487613c65565b6131ee858761280d565b6131f8888a612490565b61188d9190613c65565b600061015383670de0b6b3a764000084612ffe565b600060016001607f1b038211156119f75760405163a5353be560e01b815260040160405180910390fd5b60008183136132505781610153565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132a6575047613331565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561330a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061332e9190613d05565b90505b60125461015390849083611a21565b600060125485116133515784613355565b6012545b9450600061336286611dc5565b905085601260008282546133769190613c65565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161341c576040516001600160a01b038716908390600081818185875af1925050503d806000811461340c576040519150601f19603f3d011682016040523d82523d6000602084013e613411565b606091505b5050809150506134b2565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561348b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134af9190613fa4565b90505b806134d0576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116134e957836134ed565b6012545b935060006134fa85611dc5565b9050846012600082825461350e9190613c65565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016135b4576040516001600160a01b038616908390600081818185875af1925050503d80600081146135a4576040519150601f19603f3d011682016040523d82523d6000602084013e6135a9565b606091505b50508091505061364a565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015613623573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136479190613fa4565b90505b80612ff6576040516312171d8360e31b815260040160405180910390fd5b600080821361368a5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061370d9084901c6119cd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136138a957506000919050565b680755bf798b4a1bf1e582126138d2576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061315a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119cd565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613a98613a23565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561202457600080fd5b600080600060608486031215613afd57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613b2257600080fd5b613b2e86828701613ad6565b9150509250925092565b60008060408385031215613b4b57600080fd5b50508035926020909101359150565b600080600080600060a08688031215613b7257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613ba557600080fd5b613bb188828901613ad6565b9150509295509295909350565b600060208284031215613bd057600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610db757600080fd5b600060208284031215613c0757600080fd5b813561015381613be7565b634e487b7160e01b600052601260045260246000fd5b600082613c3757613c37613c12565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156116d5576116d5613c3c565b818103818111156116d5576116d5613c3c565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016116d58284613c78565b600060208284031215613d1757600080fd5b5051919050565b80820281158282048414176116d5576116d5613c3c565b600080600060608486031215613d4a57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611b2957611b29613c3c565b6001600160801b03818116838216019080821115611b2957611b29613c3c565b8181036000831280158383131683831282161715611b2957611b29613c3c565b6001600160801b03828116828216039080821115611b2957611b29613c3c565b60006102a082019050613df7828551613c78565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e6c57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e9257613e92613c3c565b5060000390565b6000808335601e19843603018112613eb057600080fd5b83018035915067ffffffffffffffff821115613ecb57600080fd5b60200191503681900382131561186057600080fd5b60008060408385031215613ef357600080fd5b825191506020830151613f0581613be7565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116d5576116d5613c3c565b600081600f0b60016001607f1b03198103613f5a57613f5a613c3c565b60000392915050565b60008060008060808587031215613f7957600080fd5b8451935060208501519250604085015191506060850151613f9981613be7565b939692955090935050565b600060208284031215613fb657600080fd5b815161015381613be7565b600082613fd057613fd0613c12565b600160ff1b821460001984141615613fea57613fea613c3c565b50059056fea2646970667358221220a0d7ee5a8a8f762e46666339c3540968bf0085a9cfe8d1571a55db9e90d1efab64736f6c63430008140033',
    methodIdentifiers: {
        "PERMIT_TYPEHASH()": "30adf81f",
        "__external_transferFrom(uint256,address,address,uint256,address)": "58af4a0a",
        "__setBalanceOf(uint256,address,uint256)": "94a97cdb",
        "accrue(uint256,int256)": "68096239",
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "burn(uint256,address,uint256)": "9eea5f66",
        "calculateFeesGivenBonds(uint256,uint256,uint256,uint256)": "22d5506b",
        "calculateFeesGivenShares(uint256,uint256,uint256)": "71f88b7c",
        "calculateIdleShareReserves(uint256)": "b1b4b170",
        "calculateOpenLong(uint256,uint256)": "9bd33498",
        "calculateTimeRemaining(uint256)": "68c2ecb8",
        "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
        "checkpoint(uint256,uint256)": "414f826d",
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "domainSeparator()": "f698da25",
        "getTotalShares()": "d5002f2e",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "latestCheckpoint()": "907c0f92",
        "mint(uint256,address,uint256)": "836a1040",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
        "pause(bool)": "02329a29",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setLongExposure(uint128)": "b4f8da39",
        "setMarketState((uint128,uint128,uint128,uint128,int128,uint128,uint128,uint128,bool,bool,uint112,uint128))": "f45cf2e0",
        "setPauser(address,bool)": "7180c8ca",
        "setReserves(uint128,uint128)": "702db0eb",
        "setSweepCollector(address)": "e4af29d1",
        "setTotalShares(uint256)": "a77384c1",
        "sweep(address)": "01681a62",
        "target0()": "21b57d53",
        "target1()": "eac3e799",
        "target2()": "a6e8a859",
        "target3()": "d899e112",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "updateLiquidity(int256)": "8120a3e2"
    }
};
