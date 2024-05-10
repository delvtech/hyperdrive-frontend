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
    bytecode: '0x6102e06040523480156200001257600080fd5b506040516201370438038062013704833981016040819052620000359162000324565b8081604051620000459062000222565b62000051919062000423565b604051809103906000f0801580156200006e573d6000803e3d6000fd5b50826040516200007e9062000230565b6200008a919062000423565b604051809103906000f080158015620000a7573d6000803e3d6000fd5b5083604051620000b7906200023e565b620000c3919062000423565b604051809103906000f080158015620000e0573d6000803e3d6000fd5b5084604051620000f0906200024c565b620000fc919062000423565b604051809103906000f08015801562000119573d6000803e3d6000fd5b50600160005584516001600160a01b039081166080908152602080880151831660a0908152918801516101a0908152918801516101c090815260c0808a01516101e05260e0808b015161020052610120808c0151909252610100808c0151909152610140808c0151909152918a01805151909152805190920151905280516040908101516101609081529151606090810151610180908152918a01518516610220528901516102405290880151600a80549185166001600160a01b03199283161790559088015160088054918516918316919091179055960151600980549183169190971617909555928416610260529083166102805282166102a052166102c0525062000545565b613bca80620033de83390190565b613fd28062006fa883390190565b6141f2806200af7a83390190565b614598806200f16c83390190565b6040516101e081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620002aa57600080fd5b919050565b600060808284031215620002c257600080fd5b604051608081016001600160401b0381118282101715620002f357634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200033857600080fd5b620003426200025a565b6200034d8362000292565b81526200035d6020840162000292565b6020820152620003706040840162000292565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620003db81850162000292565b90820152610180620003ef84820162000292565b908201526101a06200040384820162000292565b908201526101c06200041885858301620002af565b908201529392505050565b81516001600160a01b03168152610240810160208301516200045060208401826001600160a01b03169052565b5060408301516200046c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151620004df828501826001600160a01b03169052565b5050610180838101516001600160a01b0381168483015250506101a0838101516001600160a01b0381168483015250506101c08381015180518483015260208101516101e085015260408101516102008501526060810151610220850152505092915050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051612d01620006dd600039600081816108b301528181610a5001528181610b6d01528181610b9d0152610dc70152600081816107ba0152610fc90152600081816109070152610b0a01526000818161029f0152818161046101528181610a2001528181610a8201528181610ab401528181610b3e01528181610d8001528181610e0f01528181610f760152610ffc01526000505060005050600050506000505060008181611928015281816119640152611c71015260008181611671015281816116b701526117d701526000505060008181611135015281816111ae01526114f5015260008181611182015261172a0152600081816110fb015281816114b1015261170901526000818161164f015281816116d801526117f801526000818161147801526119ed015260006115f901526000505060008181610bfc01528181610c960152610d0a0152612d016000f3fe6080604052600436106102885760003560e01c8063907c0f921161015a578063ca6d38f7116100c1578063ded062311161007a578063ded06231146104db578063e44808bc146108d5578063e4af29d114610398578063eac3e799146108f5578063f45cf2e014610929578063f698da2514610a0657610288565b8063ca6d38f714610859578063cba2e58d14610879578063cbc13434146103d5578063d5002f2e1461088c578063d899e112146108a1578063dbbe80701461087957610288565b8063a42dce8011610113578063a42dce8014610398578063a6e8a859146107a8578063a77384c1146107dc578063ab033ea914610398578063b1b4b170146107fc578063b4f8da391461081c57610288565b8063907c0f92146106f257806394a97cdb146107075780639bd33498146107485780639cd241af146107685780639eea5f6614610788578063a22cb4651461063f57610288565b80634c2ac1d9116101fe5780637180c8ca116101b75780637180c8ca1461063f57806371f88b7c1461065f57806377d05ff41461067f5780638120a3e214610692578063836a1040146106b25780639032c726146106d257610288565b80634c2ac1d91461057d5780634ed2d6ac1461059057806358af4a0a146105ab57806368096239146105cb57806368c2ecb8146105eb578063702db0eb1461060b57610288565b806321b57d531161025057806321b57d531461044f57806322d5506b1461049b57806329b23fc1146104db57806330adf81f146105095780633e691db91461053d578063414f826d1461055d57610288565b806301681a621461039857806302329a29146103ba578063074a6de9146103d557806317fad7fc1461040f5780631c0f12b61461042f575b34801561029457600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516102d792919061239b565b600060405180830381855af49150503d8060008114610312576040519150601f19603f3d011682016040523d82523d6000602084013e610317565b606091505b5091509150811561033b57604051638bb0a34b60e01b815260040160405180910390fd5b6000610346826123ab565b90506001600160e01b03198116636e64089360e11b1461036857815160208301fd5b81516003198101600484019081529261038991810160200190602401612446565b80519650602001945050505050f35b3480156103a457600080fd5b506103b86103b33660046124fd565b610a1b565b005b3480156103c657600080fd5b506103b86103b3366004612538565b3480156103e157600080fd5b506103f56103f0366004612567565b610a48565b604080519283526020830191909152015b60405180910390f35b34801561041b57600080fd5b506103b861042a3660046125fc565b610a7d565b34801561043b57600080fd5b506103b861044a366004612691565b610aaf565b34801561045b57600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610406565b3480156104a757600080fd5b506104bb6104b63660046126d9565b610adf565b604080519485526020850193909352918301526060820152608001610406565b3480156104e757600080fd5b506104fb6104f636600461270b565b610b03565b604051908152602001610406565b34801561051557600080fd5b506104fb7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561054957600080fd5b506104fb610558366004612765565b610b37565b34801561056957600080fd5b506103b861057836600461279a565b610b68565b6104fb61058b3660046127bc565b610b96565b34801561059c57600080fd5b506103b861044a366004612820565b3480156105b757600080fd5b506103b86105c636600461286a565b610bcb565b3480156105d757600080fd5b506103b86105e636600461279a565b610bd8565b3480156105f757600080fd5b506104fb6106063660046128c9565b610d6a565b34801561061757600080fd5b506103b86106263660046128f9565b6001600160801b03908116600160801b02911617600155565b34801561064b57600080fd5b506103b861065a36600461292c565b610d7b565b34801561066b57600080fd5b506103f561067a366004612965565b610da4565b6104fb61068d366004612567565b610dc0565b34801561069e57600080fd5b506103b86106ad3660046128c9565b610df3565b3480156106be57600080fd5b506103b86106cd366004612991565b610dff565b3480156106de57600080fd5b506103b86106ed3660046129c9565b610e0a565b3480156106fe57600080fd5b506104fb610f42565b34801561071357600080fd5b506103b8610722366004612991565b6000928352600d602090815260408085206001600160a01b039094168552929052912055565b34801561075457600080fd5b506104bb61076336600461279a565b610f51565b34801561077457600080fd5b506103b8610783366004612991565b610f71565b34801561079457600080fd5b506103b86107a3366004612991565b610fa0565b3480156107b457600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b3480156107e857600080fd5b506103b86107f73660046128c9565b601255565b34801561080857600080fd5b506104fb6108173660046128c9565b610fab565b34801561082857600080fd5b506103b8610837366004612a49565b600280546001600160801b0319166001600160801b0392909216919091179055565b34801561086557600080fd5b506104fb6108743660046128c9565b610fb6565b6103f561088736600461270b565b610fc1565b34801561089857600080fd5b506012546104fb565b3480156108ad57600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b3480156108e157600080fd5b506103b86108f036600461286a565b610ff7565b34801561090157600080fd5b506104837f000000000000000000000000000000000000000000000000000000000000000081565b34801561093557600080fd5b506103b8610944366004612a8d565b805160208201516001600160801b03918216600160801b91831682021760015560408301516060840151908316908316820217600255608083015160a084015190831690831682021760035560c083015160e084015190831690831682021760045561010080840151600580546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b348015610a1257600080fd5b506104fb611028565b610a447f00000000000000000000000000000000000000000000000000000000000000006110b6565b5050565b600080610a747f00000000000000000000000000000000000000000000000000000000000000006110b6565b50935093915050565b610aa67f00000000000000000000000000000000000000000000000000000000000000006110b6565b50505050505050565b610ad87f00000000000000000000000000000000000000000000000000000000000000006110b6565b5050505050565b600080600080610af1888888886110d6565b929b919a509850909650945050505050565b6000610b2e7f00000000000000000000000000000000000000000000000000000000000000006110b6565b50949350505050565b6000610b627f00000000000000000000000000000000000000000000000000000000000000006110b6565b50919050565b610b917f00000000000000000000000000000000000000000000000000000000000000006110b6565b505050565b6000610bc17f00000000000000000000000000000000000000000000000000000000000000006110b6565b5095945050505050565b610ad885858585856111ea565b6040516370a0823160e01b8152306004820152600090610c6e906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610c43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c679190612b79565b83856113ab565b9150506000811315610cf7576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f19906044015b600060405180830381600087803b158015610ce357600080fd5b505af1158015610aa6573d6000803e3d6000fd5b6000811215610b91576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610d3984612ba8565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401610cc9565b6000610d758261144b565b92915050565b610b917f00000000000000000000000000000000000000000000000000000000000000006110b6565b600080610db28585856114a3565b90925090505b935093915050565b6000610deb7f00000000000000000000000000000000000000000000000000000000000000006110b6565b509392505050565b610dfc81611523565b50565b610b91838383611549565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e3f611028565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610ee89190612bc4565b600060405180830381855af49150503d8060008114610f23576040519150601f19603f3d011682016040523d82523d6000602084013e610f28565b606091505b509150915081610f3a57805160208201fd5b805160208201f35b6000610f4c6115f2565b905090565b600080600080610f618686611628565b9299919850965090945092505050565b610f9a7f00000000000000000000000000000000000000000000000000000000000000006110b6565b50505050565b610b91838383611835565b6000610d7582611906565b6000610d75826119a2565b600080610fed7f00000000000000000000000000000000000000000000000000000000000000006110b6565b5094509492505050565b6110207f00000000000000000000000000000000000000000000000000000000000000006110b6565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b0316600036604051610ee892919061239b565b600080808061112d87866111268b6111206110f98c670de0b6b3a7640000612be0565b7f000000000000000000000000000000000000000000000000000000000000000090611a18565b90611a18565b9190611a29565b9350611159847f0000000000000000000000000000000000000000000000000000000000000000611a4f565b9150600061117a61117289670de0b6b3a7640000612be0565b8a9088611a29565b90506111a6817f0000000000000000000000000000000000000000000000000000000000000000611a18565b93506111d2847f0000000000000000000000000000000000000000000000000000000000000000611a4f565b6111dc9084612bf3565b915050945094509450949050565b6001600160a01b038416158061120757506001600160a01b038316155b156112255760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146112e9576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166112e95760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146112e75760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906112e1908490612be0565b90915550505b505b6000858152600d602090815260408083206001600160a01b03881684529091528120805484929061131b908490612be0565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611352908490612bf3565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080806113bd846301e13380611a64565b905060006113e282600088126113d357876113dc565b6113dc88612ba8565b90611a4f565b90506000861315611415576114006113f982611a79565b8890611a4f565b935061140c8785612be0565b92505050610db8565b600086121561143d5761143161142a82611a79565b8890611a64565b935061140c8785612c06565b509495600095509350505050565b6000806114566115f2565b9050808311611466576000611470565b6114708184612be0565b915061149c827f0000000000000000000000000000000000000000000000000000000000000000611a64565b9392505050565b6000806114ed8561112085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006114e3818c611c18565b6111209190612be0565b9150611519827f0000000000000000000000000000000000000000000000000000000000000000611a4f565b9050935093915050565b61152c81611c2d565b610dfc57604051635044b7f560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b03861684529091528120805483929061157b908490612bf3565b90915550506000838152600e60205260408120805483929061159e908490612bf3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061161e7f000000000000000000000000000000000000000000000000000000000000000042612c3c565b610f4c9042612be0565b600080600080611695611639611dc3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611de4565b92506116fc6116a2611dc3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e10565b9050611753868461174e847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e30565b611ea3565b1561176057611760611ee5565b60008061176e8884896114a3565b909250905061177d8286612be0565b945061178a818489611efe565b93506117968489612be0565b9550670de0b6b3a764000061181c876117ad611dc3565b6117b79190612bf3565b6001546117d5908990600160801b90046001600160801b0316612be0565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e10565b111561182a5761182a611ee5565b505092959194509250565b6000838152600d602090815260408083206001600160a01b038616845290915290205481111561187857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e909152812080548392906118bb908490612be0565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016115e5565b6002546000908190611921906001600160801b031684611c18565b905061194d7f000000000000000000000000000000000000000000000000000000000000000082612bf3565b6001546001600160801b03161115610b62576001547f0000000000000000000000000000000000000000000000000000000000000000906119989083906001600160801b0316612be0565b61149c9190612be0565b600080670de0b6b3a76400006119b66115f2565b6119c09190612c50565b90508083116119d05760006119da565b6119da8184612be0565b915061149c611a11670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612c50565b8390611a64565b600061149c8383670de0b6b3a76400005b6000826000190484118302158202611a4057600080fd5b50910281810615159190040190565b600061149c8383670de0b6b3a7640000611efe565b600061149c83670de0b6b3a764000084611efe565b6000680248ce36a70cb26b3e198213611a9457506000919050565b680755bf798b4a1bf1e58212611abd576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611c0e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611f1c565b9695505050505050565b600061149c83670de0b6b3a764000084611a29565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d089190612c67565b935093509350935080611d245750600098975050505050505050565b868414611d5557611d3484611f4a565b600180546001600160801b0319166001600160801b03929092169190911790555b858314611d8657611d6583611f74565b600380546001600160801b0319166001600160801b03929092169190911790555b848214611db457611d9682611f4a565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600154600354600091610f4c916001600160801b0390911690600f0b611fc2565b6000611e05878787611dfe88670de0b6b3a7640000612be0565b8787611fe8565b979650505050505050565b6000611e2782611e21858888611efe565b9061209c565b95945050505050565b6000611e9b611e71611e4a84670de0b6b3a7640000612be0565b611120670de0b6b3a7640000611e60818a611c18565b611e6a9190612be0565b8790611a18565b611e8390670de0b6b3a7640000612bf3565b611e9584670de0b6b3a7640000612be0565b90611a64565b949350505050565b600080611eda85611eb2611dc3565b611ebc9190612bf3565b6001546117d5908790600160801b90046001600160801b0316612be0565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000826000190484118302158202611f1557600080fd5b5091020490565b60006001600160ff1b03821115611f465760405163396ea70160e11b815260040160405180910390fd5b5090565b60006001600160801b03821115611f4657604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff19821280611fa457506f7fffffffffffffffffffffffffffffff82135b15611f465760405163a5353be560e01b815260040160405180910390fd5b600080611fcf8484612107565b909250905080611fe157611fe1611ee5565b5092915050565b600080611ff88888878787612146565b905061201285611e2161200b898c612bf3565b8690611a4f565b975061201f848985611efe565b97508781101561203157612031611ee5565b878103670de0b6b3a764000081106120665761205f612058670de0b6b3a764000088611c18565b829061209c565b905061207e565b61207b612058670de0b6b3a764000088611a64565b90505b8088101561208e5761208e611ee5565b909603979650505050505050565b6000816000036120b55750670de0b6b3a7640000610d75565b826000036120c557506000610d75565b60006120d083611f1c565b905060006120e56120e086611f1c565b612175565b90508181026120fc670de0b6b3a764000082612c9d565b9050611c0e81611a79565b60008060008361211686611f1c565b6121209190612c06565b9050600081121561213857600080925092505061213f565b9150600190505b9250929050565b6000612152858561209c565b61216b61216386611e21868b611a18565b859085611a29565b611c0e9190612bf3565b60008082136121975760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061221a9084901c611f1c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156123da5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561241c5761241c6123e2565b60405290565b60005b8381101561243d578181015183820152602001612425565b50506000910152565b60006020828403121561245857600080fd5b815167ffffffffffffffff8082111561247057600080fd5b818401915084601f83011261248457600080fd5b815181811115612496576124966123e2565b604051601f8201601f19908116603f011681019083821181831017156124be576124be6123e2565b816040528281528760208487010111156124d757600080fd5b611e05836020830160208801612422565b6001600160a01b0381168114610dfc57600080fd5b60006020828403121561250f57600080fd5b813561149c816124e8565b8015158114610dfc57600080fd5b80356125338161251a565b919050565b60006020828403121561254a57600080fd5b813561149c8161251a565b600060608284031215610b6257600080fd5b60008060006060848603121561257c57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156125a157600080fd5b6125ad86828701612555565b9150509250925092565b60008083601f8401126125c957600080fd5b50813567ffffffffffffffff8111156125e157600080fd5b6020830191508360208260051b850101111561213f57600080fd5b6000806000806000806080878903121561261557600080fd5b8635612620816124e8565b95506020870135612630816124e8565b9450604087013567ffffffffffffffff8082111561264d57600080fd5b6126598a838b016125b7565b9096509450606089013591508082111561267257600080fd5b5061267f89828a016125b7565b979a9699509497509295939492505050565b600080600080608085870312156126a757600080fd5b8435935060208501356126b9816124e8565b925060408501356126c9816124e8565b9396929550929360600135925050565b600080600080608085870312156126ef57600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561272157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561274d57600080fd5b61275987828801612555565b91505092959194509250565b60006020828403121561277757600080fd5b813567ffffffffffffffff81111561278e57600080fd5b611e9b84828501612555565b600080604083850312156127ad57600080fd5b50508035926020909101359150565b600080600080600060a086880312156127d457600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561280757600080fd5b61281388828901612555565b9150509295509295909350565b6000806000806080858703121561283657600080fd5b843593506020850135612848816124e8565b925060408501359150606085013561285f816124e8565b939692955090935050565b600080600080600060a0868803121561288257600080fd5b853594506020860135612894816124e8565b935060408601356128a4816124e8565b92506060860135915060808601356128bb816124e8565b809150509295509295909350565b6000602082840312156128db57600080fd5b5035919050565b80356001600160801b038116811461253357600080fd5b6000806040838503121561290c57600080fd5b612915836128e2565b9150612923602084016128e2565b90509250929050565b6000806040838503121561293f57600080fd5b823561294a816124e8565b9150602083013561295a8161251a565b809150509250929050565b60008060006060848603121561297a57600080fd5b505081359360208301359350604090920135919050565b6000806000606084860312156129a657600080fd5b8335925060208401356129b8816124e8565b929592945050506040919091013590565b600080600080600080600060e0888a0312156129e457600080fd5b87356129ef816124e8565b965060208801356129ff816124e8565b95506040880135612a0f8161251a565b945060608801359350608088013560ff81168114612a2c57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600060208284031215612a5b57600080fd5b61149c826128e2565b8035600f81900b811461253357600080fd5b80356001600160701b038116811461253357600080fd5b60006101808284031215612aa057600080fd5b612aa86123f8565b612ab1836128e2565b8152612abf602084016128e2565b6020820152612ad0604084016128e2565b6040820152612ae1606084016128e2565b6060820152612af260808401612a64565b6080820152612b0360a084016128e2565b60a0820152612b1460c084016128e2565b60c0820152612b2560e084016128e2565b60e0820152610100612b38818501612528565b90820152610120612b4a848201612528565b90820152610140612b5c848201612a76565b90820152610160612b6e8482016128e2565b908201529392505050565b600060208284031215612b8b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201612bbd57612bbd612b92565b5060000390565b60008251612bd6818460208701612422565b9190910192915050565b81810381811115610d7557610d75612b92565b80820180821115610d7557610d75612b92565b8181036000831280158383131683831282161715611fe157611fe1612b92565b634e487b7160e01b600052601260045260246000fd5b600082612c4b57612c4b612c26565b500690565b8082028115828204841417610d7557610d75612b92565b60008060008060808587031215612c7d57600080fd5b845193506020850151925060408501519150606085015161285f8161251a565b600082612cac57612cac612c26565b600160ff1b821460001984141615612cc657612cc6612b92565b50059056fea26469706673582212207777e0a6a8205dea15170bf8796c23009a67f693ddc258e53614fff7b060395364736f6c634300081400336102606040523480156200001257600080fd5b5060405162003bca38038062003bca8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516137996200043160003960008181610d0f0152611cd5015260008181610ce80152611c9801526000610daf015260008181610d890152611e8d015260008181610d630152611e67015260008181610d390152611e4101526000610ee001526000610ebb01526000610e9601526000610e73015260008181610e230152611eb3015260008181610dd501528181611047015261258f015260008181610dfc0152612ab60152600081816105b70152610cbc0152600081816106ea01528181610c97015281816110080152818161228801528181612464015281816124ad015281816126560152818161269f015281816127dd01528181612889015281816129750152612a2101526137996000f3fe608060405234801561001057600080fd5b506004361061021b5760003560e01c80637180c8ca11610125578063becee9c3116100ad578063d81657431161007c578063d8165743146104e0578063e44808bc146104f5578063e4af29d114610508578063e985e9c51461051b578063fba560081461052e57600080fd5b8063becee9c3146104a5578063c55dae63146104c5578063c69e16ad14610429578063cf210e65146104cd57600080fd5b8063a22cb465116100f4578063a22cb46514610444578063a42dce8014610457578063ab033ea91461046a578063b0d965801461047d578063bd85b0391461049257600080fd5b80637180c8ca146104035780637ecebe00146104165780638e67f87e146104295780639cd241af1461043157600080fd5b806321ff32a9116101a857806346fbf68e1161017757806346fbf68e1461039d5780634e41a1fb146103c05780634ed2d6ac146103d357806354fd4d50146103e657806360246c88146103ee57600080fd5b806321ff32a91461033c578063313ce5671461035d5780633656eec2146103775780633e691db91461038a57600080fd5b80630a4e1493116101ef5780630a4e14931461029e57806314e5f07b146102be57806317fad7fc146102d15780631c0f12b6146102e457806320fc4881146102f757600080fd5b8062ad800c1461022057806301681a621461024957806302329a291461025e57806306fdde0314610271575b600080fd5b61023361022e366004612cc3565b61055d565b6040516102409190612d2c565b60405180910390f35b61025c610257366004612d54565b610594565b005b61025c61026c366004612d7f565b6105a0565b6102336040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b81525081565b6102a66105a9565b6040516001600160a01b039091168152602001610240565b61025c6102cc366004612dab565b6105ec565b61025c6102df366004612e86565b610608565b61025c6102f2366004612f1b565b61061e565b61030a610305366004612cc3565b610631565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610240565b61034f61034a366004612f63565b61069d565b604051908152602001610240565b6103656106e3565b60405160ff9091168152602001610240565b61034f610385366004612fa5565b61077e565b61034f610398366004612fd5565b6107b7565b6103b06103ab366004612d54565b6107c2565b6040519015158152602001610240565b6102336103ce366004612cc3565b6107f8565b61025c6103e1366004613010565b610806565b610233610854565b6103f6610888565b604051610240919061305a565b61025c6104113660046130fb565b610b97565b61034f610424366004612d54565b610ba5565b61034f610bd1565b61025c61043f366004613129565b610beb565b61025c6104523660046130fb565b610bfc565b61025c610465366004612d54565b610c68565b61025c610478366004612d54565b610c71565b610485610c7a565b6040516102409190613161565b61034f6104a0366004612cc3565b610f1d565b6104b86104b3366004613281565b610f3f565b60405161024091906132c3565b6102a6610ffa565b61034f6104db366004612cc3565b61103a565b6104e8611083565b6040516102409190613307565b61025c610503366004613418565b61118f565b61025c610516366004612d54565b6111d7565b6103b0610529366004613477565b6111e0565b610536611224565b6040805182516001600160801b039081168252602093840151169281019290925201610240565b606061058f61056b83611283565b60405160200161057b9190612d2c565b6040516020818303038152906040526113ab565b919050565b61059d816113cf565b50565b61059d81611545565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105e9910161057b565b90565b6105fd8989898989898989896115c8565b505050505050505050565b6106168686868686866117bf565b505050505050565b61062b8484848433611873565b50505050565b604080516060810182526000808252602082018190529181019190915261058f6007600084815260200190815260200160002060405160200161057b919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b60008381526010602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526106dc910161057b565b9392505050565b60006105e97f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610746573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076a91906134a5565b6040805160ff90921660208301520161057b565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526107b1910161057b565b92915050565b60006107b182611a34565b6001600160a01b0381166000908152600c6020908152604080832054905161058f9261057b9260ff169101901515815260200190565b606061058f61056b83611b5c565b8361081081611c5a565b6001600160a01b0316336001600160a01b03161461084157604051632aab8bd360e01b815260040160405180910390fd5b61084d85858585611d17565b5050505050565b60606105e9604051806040016040528060068152602001653b189718171960d11b81525060405160200161057b9190612d2c565b610901604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061090b611d84565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161097691906134ee565b6109809190613501565b905060008215610a925773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109ad85611d9c565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a829190613514565b509050610a8f8184611f32565b90505b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201526000906101a081018415610b6357610b5e8486611f47565b610b66565b60005b81526002546001600160801b0316602091820152604051919250610b909161057b9184910161305a565b5050505090565b610ba18282611f5c565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261058f910161057b565b60006105e9600b5460405160200161057b91815260200190565b610bf783838333611d17565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61059d81611fe5565b61059d81612059565b610c82612bec565b604080516101e0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f00000000000000000000000000000000000000000000000000000000000000006101208601527f0000000000000000000000000000000000000000000000000000000000000000610140860152600a54841661016086015260085484166101808601526009549093166101a0850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101c083019190915291516105e99261057b929101613161565b6000818152600e602090815260408083205481519283015261058f910161057b565b606060008267ffffffffffffffff811115610f5c57610f5c613539565b604051908082528060200260200182016040528015610f85578160200160208202803683370190505b50905060005b83811015610fde576000858583818110610fa757610fa761354f565b90506020020135905060008154905080848481518110610fc957610fc961354f565b60209081029190910101525050600101610f8b565b50610ff38160405160200161057b91906132c3565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105e9910161057b565b600061058f61107161106c7f0000000000000000000000000000000000000000000000000000000000000000856134ee565b6120cd565b60405160200161057b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105e9600160405160200161057b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461119981611c5a565b6001600160a01b0316336001600160a01b0316146111ca57604051632aab8bd360e01b815260040160405180910390fd5b6106168686868686611873565b61059d81612111565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107b1910161057b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105e99060600161057b565b606060f882901c6001600160f81b038316600061129f82612185565b905060008360038111156112b5576112b56134c2565b036112e7576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506113a3565b60018360038111156112fb576112fb6134c2565b0361132757806040516020016113119190613565565b60405160208183030381529060405293506113a3565b600283600381111561133b5761133b6134c2565b036113515780604051602001611311919061359e565b6003836003811115611365576113656134c2565b036113a3576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016113c69190612d2c565b60405180910390fd5b6113d761223a565b600954336000908152600c60205260409020546001600160a01b039091169060ff1615801561140f5750336001600160a01b03821614155b80156114265750600a546001600160a01b03163314155b15611443576040516282b42960e81b815260040160405180910390fd5b600061144d612264565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114bb91906135d8565b90506114d16001600160a01b03851684836122f8565b816114da612264565b146114f8576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061059d6001600055565b336000908152600c602052604090205460ff16611574576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906115bd90831515815260200190565b60405180910390a150565b834211156115e95760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166116105760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156116fe573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461173c57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806117dc57506001600160a01b038516155b156117fa5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461181a5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561186a5761186285858381811061183a5761183a61354f565b9050602002013588888686868181106118555761185561354f565b9050602002013533611873565b60010161181d565b50505050505050565b6001600160a01b038416158061189057506001600160a01b038316155b156118ae5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611972576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166119725760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146119705760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061196a908490613501565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906119a4908490613501565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906119db9084906134ee565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611a3e61223a565b611a478261234a565b6008546001600160a01b031680611a616020850185612d54565b6001600160a01b031614611a8857604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff16158015611ab15750336001600160a01b03821614155b8015611ac85750600a546001600160a01b03163314155b15611ae5576040516282b42960e81b815260040160405180910390fd5b6000611aef611d84565b600b80546000909155909150611b06818387612380565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611b3e86858961241a565b60405190815260200160405180910390a250505061058f6001600055565b606060f882901c6001600160f81b0383166000611b7882612185565b90506000836003811115611b8e57611b8e6134c2565b03611bc0576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506113a3565b6001836003811115611bd457611bd46134c2565b03611bea578060405160200161131191906135f1565b6002836003811115611bfe57611bfe6134c2565b03611c1457806040516020016113119190613629565b6003836003811115611c2857611c286134c2565b036113a357505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611d97670de0b6b3a7640000612449565b905090565b611e006040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611ef89116612544565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611f2a92900416612544565b905292915050565b60006106dc8383670de0b6b3a76400006125ba565b60006106dc83670de0b6b3a7640000846125ba565b600a546001600160a01b03163314611f86576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b0316331461200f576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314612083576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006120f5600e60006120e16002866125d8565b81526020019081526020016000205461260d565b612107600e60006120e16001876125d8565b6107b19190613655565b600a546001600160a01b0316331461213b576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561222c576121c0600a8661368b565b6121cb9060306134ee565b60f81b8260016121db8487613501565b6121e59190613501565b815181106121f5576121f561354f565b60200101906001600160f81b031916908160001a905350806122168161369f565b91506122259050600a866136b8565b94506121af565b918290030190815292915050565b60026000540361225d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b8152306004820152600090611d97906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156122cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f391906135d8565b61263b565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610bf7908490612724565b60006123596020830183612d54565b6001600160a01b03160361059d5760405163f0dd15fd60e01b815260040160405180910390fd5b60008061238d8585611f32565b90506123988161263b565b9450846000036123ac5760009150506106dc565b6123bc6040840160208501612d7f565b156123eb576123e4856123d26020860186612d54565b6123df60408701876136cc565b612787565b9150612412565b61240e856123fc6020860186612d54565b61240960408701876136cc565b612921565b8491505b509392505050565b600061242c6040830160208401612d7f565b156124385750826106dc565b6124428484611f32565b90506106dc565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612498575047612523565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156124fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061252091906135d8565b90505b6012546000036125345760006106dc565b6012546106dc90849083906125ba565b600080670de0b6b3a7640000612558612aaf565b6125629190613713565b905080831161257257600061257c565b61257c8184613501565b91506106dc6125b3670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613713565b8390611f47565b60008260001904841183021582026125d157600080fd5b5091020490565b60006001600160f81b038211156126025760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156126375760405163396ea70160e11b815260040160405180910390fd5b5090565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161268a575047612715565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061271291906135d8565b90505b6012546106dc908490836125ba565b60006127396001600160a01b03841683612ae5565b9050805160001415801561275e57508080602001905181019061275c919061372a565b155b15610bf757604051635274afe760e01b81526001600160a01b03841660048201526024016113c6565b60006012548511612798578461279c565b6012545b945060006127a986612449565b905085601260008282546127bd9190613501565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612863576040516001600160a01b038716908390600081818185875af1925050503d8060008114612853576040519150601f19603f3d011682016040523d82523d6000602084013e612858565b606091505b5050809150506128f9565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156128d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128f6919061372a565b90505b80612917576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116129305783612934565b6012545b9350600061294185612449565b905084601260008282546129559190613501565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016129fb576040516001600160a01b038616908390600081818185875af1925050503d80600081146129eb576040519150601f19603f3d011682016040523d82523d6000602084013e6129f0565b606091505b505080915050612a91565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612a6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a8e919061372a565b90505b80610616576040516312171d8360e31b815260040160405180910390fd5b6000612adb7f00000000000000000000000000000000000000000000000000000000000000004261368b565b611d979042613501565b60606106dc8383600084600080856001600160a01b03168486604051612b0b9190613747565b60006040518083038185875af1925050503d8060008114612b48576040519150601f19603f3d011682016040523d82523d6000602084013e612b4d565b606091505b5091509150612b5d868383612b67565b9695505050505050565b606082612b7c57612b7782612bc3565b6106dc565b8151158015612b9357506001600160a01b0384163b155b15612bbc57604051639996b31560e01b81526001600160a01b03851660048201526024016113c6565b50806106dc565b805115612bd35780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612cbe6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612cd557600080fd5b5035919050565b60005b83811015612cf7578181015183820152602001612cdf565b50506000910152565b60008151808452612d18816020860160208601612cdc565b601f01601f19169290920160200192915050565b6020815260006106dc6020830184612d00565b6001600160a01b038116811461059d57600080fd5b600060208284031215612d6657600080fd5b81356106dc81612d3f565b801515811461059d57600080fd5b600060208284031215612d9157600080fd5b81356106dc81612d71565b60ff8116811461059d57600080fd5b60008060008060008060008060006101208a8c031215612dca57600080fd5b8935985060208a0135975060408a0135612de381612d3f565b965060608a0135612df381612d3f565b955060808a0135612e0381612d71565b945060a08a0135935060c08a0135612e1a81612d9c565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612e4c57600080fd5b50813567ffffffffffffffff811115612e6457600080fd5b6020830191508360208260051b8501011115612e7f57600080fd5b9250929050565b60008060008060008060808789031215612e9f57600080fd5b8635612eaa81612d3f565b95506020870135612eba81612d3f565b9450604087013567ffffffffffffffff80821115612ed757600080fd5b612ee38a838b01612e3a565b90965094506060890135915080821115612efc57600080fd5b50612f0989828a01612e3a565b979a9699509497509295939492505050565b60008060008060808587031215612f3157600080fd5b843593506020850135612f4381612d3f565b92506040850135612f5381612d3f565b9396929550929360600135925050565b600080600060608486031215612f7857600080fd5b833592506020840135612f8a81612d3f565b91506040840135612f9a81612d3f565b809150509250925092565b60008060408385031215612fb857600080fd5b823591506020830135612fca81612d3f565b809150509250929050565b600060208284031215612fe757600080fd5b813567ffffffffffffffff811115612ffe57600080fd5b8201606081850312156106dc57600080fd5b6000806000806080858703121561302657600080fd5b84359350602085013561303881612d3f565b925060408501359150606085013561304f81612d3f565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561310e57600080fd5b823561311981612d3f565b91506020830135612fca81612d71565b60008060006060848603121561313e57600080fd5b83359250602084013561315081612d3f565b929592945050506040919091013590565b81516001600160a01b031681526102408101602083015161318d60208401826001600160a01b03169052565b5060408301516131a860408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015161321a828501826001600160a01b03169052565b5050610180838101516001600160a01b0381168483015250506101a0838101516001600160a01b0381168483015250506101c08381015180518483015260208101516101e0850152604081015161020085015260608101516102208501525b505092915050565b6000806020838503121561329457600080fd5b823567ffffffffffffffff8111156132ab57600080fd5b6132b785828601612e3a565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156132fb578351835292840192918401916001016132df565b50909695505050505050565b81516001600160801b031681526101808101602083015161333360208401826001600160801b03169052565b50604083015161334e60408401826001600160801b03169052565b50606083015161336960608401826001600160801b03169052565b50608083015161337e6080840182600f0b9052565b5060a083015161339960a08401826001600160801b03169052565b5060c08301516133b460c08401826001600160801b03169052565b5060e08301516133cf60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613279565b600080600080600060a0868803121561343057600080fd5b85359450602086013561344281612d3f565b9350604086013561345281612d3f565b925060608601359150608086013561346981612d3f565b809150509295509295909350565b6000806040838503121561348a57600080fd5b823561349581612d3f565b91506020830135612fca81612d3f565b6000602082840312156134b757600080fd5b81516106dc81612d9c565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156107b1576107b16134d8565b818103818111156107b1576107b16134d8565b6000806040838503121561352757600080fd5b825191506020830151612fca81612d71565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613591816011850160208701612cdc565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516135cb816012850160208701612cdc565b9190910160120192915050565b6000602082840312156135ea57600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b81526000825161361c816010850160208701612cdc565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613591816011850160208701612cdc565b8181036000831280158383131683831282161715610ff357610ff36134d8565b634e487b7160e01b600052601260045260246000fd5b60008261369a5761369a613675565b500690565b6000600182016136b1576136b16134d8565b5060010190565b6000826136c7576136c7613675565b500490565b6000808335601e198436030181126136e357600080fd5b83018035915067ffffffffffffffff8211156136fe57600080fd5b602001915036819003821315612e7f57600080fd5b80820281158282048414176107b1576107b16134d8565b60006020828403121561373c57600080fd5b81516106dc81612d71565b60008251613759818460208701612cdc565b919091019291505056fea26469706673582212204d83f38ef901285b323542b68e203a5f1d5e80d6a5985f9e7cbcdec3729a2b4764736f6c634300081400336102606040523480156200001257600080fd5b5060405162003fd238038062003fd28339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b3e620004946000396000505060005050600050506000818160af0152818161033f0152612e9701526000818161135701528181611759015281816117bc01528181612a7701528181612ab301528181612cb00152612e710152600081816106a901528181610d2f01528181610eee015281816116180152612e4b01526000611b66015260008181611c8c0152818161227601526122ef01526000818161092c01528181610e7d01528181611c6001526122c3015260008181610d72015261223c0152600081816106ca01528181610d0d01528181610f0f015281816115f60152612ebd01526000818161086401528181610dfd015281816116b50152818161211101526133db015260008181610600015281816106fc01528181610783015281816107e4015261081c0152600050506000818161194e01528181611997015281816125140152818161255d01528181612638015281816126e4015281816127d0015261287c0152613b3e6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613689565b610073565b60405190815260200160405180910390f35b61004e61006e366004613689565b61008c565b60006100818585858561009a565b90505b949350505050565b60006100818585858561032a565b60006100a461057e565b6100ad826105a8565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105e1565b90508542101561011b5761011561010d6105f9565b82600461062f565b50610129565b6101278682600461062f565b505b61013e610137600288610bc6565b3387610bfb565b6000806000806000806101528b888e610cd4565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d91906136fe565b90915550610195905061018e6105f9565b4284610f6d565b6101a28c888787856110ab565b60006101ad8e611225565b90506101cb6101bb8e61126f565b6101c59083613711565b8261129d565b6101d489611350565b6101e0576101e06113b0565b60006101eb8a6113c9565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113d6565b9550610227886113c9565b505b6000610236878a8d6114b7565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610bc6565b6102766020830183613731565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a6102ad8b8888611551565b6102b88c8989611580565b6102c86040890160208a01613768565b6102dc8a6102d68d8f6136fe565b906115a8565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b600061033461057e565b61033d826105a8565b7f000000000000000000000000000000000000000000000000000000000000000084101561037e5760405163211ddda360e11b815260040160405180910390fd5b60006103886105e1565b9050854210156103a35761039d61010d6105f9565b506103b1565b6103af8682600461062f565b505b6103bf610137600188610bc6565b6000806000806000806103d38b888e6115bd565b95509550955095509550955060008c90508c4210156104865782600b60008282546103fe91906136fe565b9091555061040f905061018e6105f9565b61041c8c88878785611742565b600061042782611225565b905061043f6104358e61126f565b6101c59083613785565b61044889611350565b610454576104546113b0565b600061045f8a6113c9565b90508061047f57604051638bdf918d60e01b815260040160405180910390fd5b505061049d565b61049086896113d6565b955061049b886113c9565b505b60006104aa878a8d6114b7565b90508b8110156104cd5760405163c972651760e01b815260040160405180910390fd5b8c898c6104db600186610bc6565b6104e86020830183613731565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028861051f898888611551565b61052a8a8989611580565b61053a6040890160208a01613768565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b6002600054036105a157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105b76020830183613731565b6001600160a01b0316036105de5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105f4670de0b6b3a7640000611933565b905090565b60006106257f0000000000000000000000000000000000000000000000000000000000000000426137c3565b6105f490426137d7565b600083815260076020526040812060018101546001600160801b031615158061065757504285115b1561067057600101546001600160801b03169050610bbf565b600080600061067d6105f9565b90508088036106f5578692506106ee610694611a2e565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a4f565b91506107b1565b60006107217f00000000000000000000000000000000000000000000000000000000000000008a6136fe565b90505b81810361073c57879350610739610694611a2e565b92505b6000818152600760205260409020600101546001600160801b03169350831561077e576000818152600760205260409020546001600160801b031692506107af565b6107a87f0000000000000000000000000000000000000000000000000000000000000000826136fe565b9050610724565b505b6107ba83611a66565b6001850180546001600160801b0319166001600160801b03929092169190911790556108106108097f00000000000000000000000000000000000000000000000000000000000000008a6137d7565b8984610f6d565b61084e886108486108417f0000000000000000000000000000000000000000000000000000000000000000836136fe565b4290611a90565b84610f6d565b61085787611aa5565b50600090506007816108897f00000000000000000000000000000000000000000000000000000000000000008c6137d7565b815260208101919091526040016000908120600101546001600160801b031691506108b560028b610bc6565b6000818152600e60205260408120549192508b8b83156109fb57600192506000806108e486898d866000611c49565b9150915080600b60008282546108fa91906136fe565b909155506109169050866000846109108161126f565b886110ab565b61092081836136fe565b915061095086838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d18565b915061096461095f83856115a8565b611d62565b600580546002906109859084906201000090046001600160701b03166137ea565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109b282611a66565b600580546010906109d4908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a08600184610bc6565b6000818152600e60205260409020549091508015610b175760019450600080610a35838b8f886001611c49565b9150915080600b6000828254610a4b91906136fe565b90915550610a67905083600084610a618161126f565b8a611742565b610a7181836137d7565b9150610a8061095f83876115a8565b60058054600290610aa19084906201000090046001600160701b03166137ea565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ace82611a66565b60058054601090610af0908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b4f57610b43610b298761126f565b610b328361126f565b610b3c9190613711565b600061129d565b610b4d838f611d8c565b505b6000610b5a84611f86565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bf05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c3e57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c819084906137d7565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610ce9896120e4565b9050610d53610cf6611a2e565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612135565b90995096509150610d65610694611a2e565b9250610d9b8289610d96867f00000000000000000000000000000000000000000000000000000000000000006121a5565b6121d5565b15610da857610da86113b0565b8a8a60008080610dba85878a87612217565b9b5091945092509050610dcd81846137d7565b610dd790886136fe565b9650610de382846136fe565b610ded908c6136fe565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610e2791906137d7565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e6f5760008a8152600760205260409020600101546001600160801b0316610e71565b8a5b9050610ea18c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611d18565b9750610ead85886137d7565b9650670de0b6b3a7640000610f3384610ec4611a2e565b610ece91906136fe565b600154610eec908d90600160801b90046001600160801b03166137d7565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a4f565b1115610f4157610f416113b0565b610f51888885888686600061232b565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f995750505050565b6000848152600760205260408120546001600160801b031690819003610ff357610fc283611a66565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611071565b61104461103f670de0b6b3a764000061100c88866137d7565b611016919061382a565b85670de0b6b3a764000061102a878a6137d7565b611034919061382a565b8592919060016123ca565b611a66565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61107a84611a66565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110f461103f826110d7670de0b6b3a76400008661382a565b600454600160801b90046001600160801b031691908a60006123ca565b600480546001600160801b03928316600160801b02921691909117905561111a86611a66565b6111249082613841565b600380546001600160801b03928316600160801b02921691909117905561114a84611a66565b600180546000906111659084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061119283612474565b600380546000906111a7908490600f0b613861565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111d785611a66565b600180546010906111f9908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061124d600e6000611239600286610bc6565b81526020019081526020016000205461126f565b61125f600e6000611239600187610bc6565b6112699190613711565b92915050565b60006001600160ff1b038211156112995760405163396ea70160e11b815260040160405180910390fd5b5090565b60006112c66112ac84836124b0565b6112b78460006124b0565b6112c19190613711565b612474565b9050600081600f0b131561131b57600280548291906000906112f29084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561134b576113308161388e565b600280546000906112f29084906001600160801b0316613841565b505050565b600061137c7f0000000000000000000000000000000000000000000000000000000000000000836124c6565b60025461139291906001600160801b03166136fe565b6001546113a8906001600160801b0316846115a8565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611269826004611d8c565b60008060006113e484611aa5565b909250905060006113f586866115a8565b90508183111561140d5761140a8683856124db565b95505b8281101561141f578083039250611424565b600092505b61142d83611d62565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148057869003611484565b5060005b61148d81611a66565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114c485856115a8565b90506114cf816124f9565b9450846000036114e3576000915050610bbf565b6114f36040840160208501613768565b156115225761151b856115096020860186613731565b61151660408701876138b4565b6125e2565b9150611549565b611545856115336020860186613731565b61154060408701876138b4565b61277c565b8491505b509392505050565b60006115636040830160208401613768565b1561156f575082610bbf565b61157984846115a8565b9050610bbf565b60006115926040830160208401613768565b156115a1576115798484612912565b5082610bbf565b6000610bbf8383670de0b6b3a76400006124db565b6000806000806000806000806115d2896120e4565b905061163c6115df611a2e565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612927565b9099509750915060008080611652610694611a2e565b95508c6116618f868984612217565b9a50919550909350915061167583856137d7565b61167f90876137d7565b955061168b82856136fe565b611695908c6137d7565b9a506116a1888c6136fe565b9950505050505061172c86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116df91906137d7565b81526020810191909152604001600020600101546001600160801b0316428e116117235760008e8152600760205260409020600101546001600160801b0316611725565b8e5b600161232b565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061178457507f000000000000000000000000000000000000000000000000000000000000000061178285836137d7565b105b15611791576117916113b0565b6003549084900390600f0b6117a68482613711565b9050836117b28661126f565b1380156117e757507f00000000000000000000000000000000000000000000000000000000000000006117e5838361297b565b105b156117f4576117f46113b0565b600254600160801b90046001600160801b031661183661103f82611820670de0b6b3a76400008861382a565b6004546001600160801b031691908c60006123ca565b600480546001600160801b0319166001600160801b039290921691909117905561186088826137d7565b905061186b81611a66565b600280546001600160801b03928316600160801b02921691909117905561189183611a66565b600180546001600160801b0319166001600160801b03929092169190911790556118ba82612474565b600380546001600160801b0319166001600160801b03929092169190911790556118e387611a66565b60018054601090611905908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611982575047611a0d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156119e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a0a91906138fb565b90505b601254600003611a1e576000610bbf565b601254610bbf90849083906124db565b6001546003546000916105f4916001600160801b0390911690600f0b61297b565b600061008182611a608588886124db565b906129a1565b60006001600160801b0382111561129957604051630f0af95160e11b815260040160405180910390fd5b6000818311611a9f5782610bbf565b50919050565b6005546000908190611ac8908490600160801b90046001600160801b03166115a8565b6005546201000090046001600160701b03169250905081811115611c44576000611af283836137d7565b9050611b0161103f8286612a16565b60058054601090611b23908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b5c858361291290919063ffffffff16565b90506000611b8a827f00000000000000000000000000000000000000000000000000000000000000006115a8565b905080600b6000828254611b9e91906136fe565b90915550611bae905081836137d7565b9150611bb982611a66565b60018054600090611bd49084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c0182612a2b565b60038054600090611c16908490600f0b613861565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c568785612912565b91506000611c84837f00000000000000000000000000000000000000000000000000000000000000006115a8565b9050611cb0817f00000000000000000000000000000000000000000000000000000000000000006115a8565b91508315611cd357611cc282826137d7565b611ccc90846137d7565b9250611cea565b611cdd82826137d7565b611ce790846136fe565b92505b86861015611d0d57611cfd8387896124db565b9250611d0a8287896124db565b91505b509550959350505050565b600080611d3084611d2a8a888a6124db565b90612912565b9050611d3d8884866124db565b611d4790826136fe565b905086811115611d575786810391505b509695505050505050565b60006001600160701b038211156112995760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611dd7916001600160801b0316906137d7565b905080600003611deb576001915050611269565b6000611df685612a55565b905080600003611e0b57600192505050611269565b600080611e19838589612af1565b9150915080611e2f576000945050505050611269565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e6b929190613992565b6040805180830381865af4158015611e87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eab9190613a08565b91509150611ec9611ebb8261126f565b611ec490613a2c565b612c6c565b925082611edf5760009650505050505050611269565b611ee882611a66565b60068054600090611f039084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f3081611a66565b60068054601090611f52908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611faf87612e02565b6040518263ffffffff1660e01b8152600401611fcb9190613a48565b6040805180830381865af4158015611fe7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200b9190613a57565b9150915080612021575060009485945092505050565b600080861161203157600061203b565b61203b83876115a8565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120a691906136fe565b6120b091906137d7565b9050806000036120c95750600096879650945050505050565b60006120d58383612912565b98600198509650505050505050565b6000806120ef6105f9565b90508083116120ff576000612109565b61210981846137d7565b9150610bbf827f0000000000000000000000000000000000000000000000000000000000000000612912565b6000808061215661214e88670de0b6b3a76400006137d7565b899087612f3c565b905086156121985761216888886124c6565b91506121898a8a846121828a670de0b6b3a76400006137d7565b8989612f62565b925061219583826136fe565b90505b9750975097945050505050565b60006121c36121bc84670de0b6b3a76400006137d7565b83906124c6565b610bbf90670de0b6b3a76400006137d7565b60008061220c856121e4611a2e565b6121ee91906136fe565b600154610eec908790600160801b90046001600160801b03166137d7565b909210949350505050565b600080808061226e87866122678b61226161223a8c670de0b6b3a76400006137d7565b7f0000000000000000000000000000000000000000000000000000000000000000906124c6565b906124c6565b9190612f3c565b935061229a847f00000000000000000000000000000000000000000000000000000000000000006115a8565b915060006122bb6122b389670de0b6b3a76400006137d7565b8a9088612f3c565b90506122e7817f00000000000000000000000000000000000000000000000000000000000000006124c6565b9350612313847f00000000000000000000000000000000000000000000000000000000000000006115a8565b61231d90846136fe565b915050945094509450949050565b6000806000806000808888101561239a5786156123505761234d8d898b6124db565b9c505b61235b8c898b6124db565b9b506123668b61126f565b61236f8d61126f565b6123799190613711565b90506123868b898b6124db565b9a506123938a898b6124db565b99506123b9565b6123a38b61126f565b6123ac8d61126f565b6123b69190613711565b90505b9b9c9a9b999a975050505050505050565b6000826000036123db57508461246b565b811561242e5761240c6123ee84876136fe565b6123f885876115a8565b612402888a6115a8565b611d2a91906136fe565b9050600061241a8588611a90565b905080821015612428578091505b5061246b565b82850361243d5750600061246b565b61246861244a84876137d7565b61245485876124c6565b61245e888a6115a8565b611d2a91906137d7565b90505b95945050505050565b600060016001607f1b0319821280612492575060016001607f1b0382135b156112995760405163a5353be560e01b815260040160405180910390fd5b60008183136124bf5781610bbf565b5090919050565b6000610bbf8383670de0b6b3a7640000612f3c565b60008260001904841183021582026124f257600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016125485750476125d3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125d091906138fb565b90505b601254610bbf908490836124db565b600060125485116125f357846125f7565b6012545b9450600061260486611933565b9050856012600082825461261891906137d7565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126be576040516001600160a01b038716908390600081818185875af1925050503d80600081146126ae576040519150601f19603f3d011682016040523d82523d6000602084013e6126b3565b606091505b505080915050612754565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561272d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127519190613a87565b90505b80612772576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601254841161278b578361278f565b6012545b9350600061279c85611933565b905084601260008282546127b091906137d7565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612856576040516001600160a01b038616908390600081818185875af1925050503d8060008114612846576040519150601f19603f3d011682016040523d82523d6000602084013e61284b565b606091505b5050809150506128ec565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156128c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e99190613a87565b90505b8061290a576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000610bbf83670de0b6b3a7640000846124db565b6000808061294861294088670de0b6b3a76400006137d7565b8990876124db565b905086156121985761295a88886115a8565b91506121898a8a846129748a670de0b6b3a76400006137d7565b8989612f85565b6000806129888484612f96565b90925090508061299a5761299a6113b0565b5092915050565b6000816000036129ba5750670de0b6b3a7640000611269565b826000036129ca57506000611269565b60006129d58361126f565b905060006129ea6129e58661126f565b612fd5565b9050818102612a01670de0b6b3a764000082613aa4565b9050612a0c816131fb565b9695505050505050565b6000610bbf83670de0b6b3a764000084612f3c565b600060016001607f1b038211156112995760405163a5353be560e01b815260040160405180910390fd5b6002546000908190612a70906001600160801b031684612a16565b9050612a9c7f0000000000000000000000000000000000000000000000000000000000000000826136fe565b6001546001600160801b03161115611a9f576001547f000000000000000000000000000000000000000000000000000000000000000090612ae79083906001600160801b03166137d7565b610bbf91906137d7565b612af96135d6565b600080612b0584612e02565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612b409190613a48565b6040805180830381865af4158015612b5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b809190613a57565b9350905082612b95575060009150612c649050565b6000612bbc612bb78461016001518561014001516115a890919063ffffffff16565b61126f565b612bdc612bb78561012001518661010001516124c690919063ffffffff16565b612be69190613711565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d479190613ad2565b935093509350935080612d635750600098975050505050505050565b868414612d9457612d7384611a66565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612dc557612da483612474565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612df357612dd582611a66565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612e0a613628565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612f029116613390565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612f3492900416613390565b905292915050565b6000826000190484118302158202612f5357600080fd5b50910281810615159190040190565b600080612f73888888888888613406565b909250905080611d5757611d576113b0565b600080612f738888888888886134e7565b600080600083612fa58661126f565b612faf9190613711565b90506000811215612fc7576000809250925050612fce565b9150600190505b9250929050565b6000808213612ff75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061307a9084901c61126f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361321657506000919050565b680755bf798b4a1bf1e5821261323f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612a0c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126f565b600080670de0b6b3a76400006133a46105f9565b6133ae919061382a565b90508083116133be5760006133c8565b6133c881846137d7565b9150610bbf6133ff670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061382a565b8390612912565b600080600061341889898888886135a7565b90508688101561342f5760008092509250506134dc565b968690039661343e88876129a1565b9750878110156134555760008092509250506134dc565b878103613463818688612f3c565b9050670de0b6b3a7640000811061349757613490613489670de0b6b3a764000089612a16565b82906129a1565b90506134af565b6134ac613489670de0b6b3a764000089612912565b90505b6134b98186612a16565b9050898110156134d1576000809350935050506134dc565b899003925060019150505b965096945050505050565b60008060006134f989898888886135a7565b905061350986611a60898b6136fe565b9750878110156135205760008092509250506134dc565b87810361352e818688612f3c565b9050670de0b6b3a7640000811061355b57613554613489670de0b6b3a764000089612a16565b9050613573565b613570613489670de0b6b3a764000089612912565b90505b61357d8186612a16565b9050808a1015613595576000809350935050506134dc565b90980398600198509650505050505050565b60006135b385856129a1565b6135cc6135c486611a60868b6124c6565b859085612f3c565b61246891906136fe565b6040518061012001604052806135ea613628565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561369f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136cb57600080fd5b8501606081880312156136dd57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611269576112696136e8565b818103600083128015838313168383128216171561299a5761299a6136e8565b60006020828403121561374357600080fd5b81356001600160a01b0381168114610bbf57600080fd5b80151581146105de57600080fd5b60006020828403121561377a57600080fd5b8135610bbf8161375a565b80820182811260008312801582168215821617156137a5576137a56136e8565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826137d2576137d26137ad565b500690565b81810381811115611269576112696136e8565b6001600160701b0381811683821601908082111561299a5761299a6136e8565b6001600160801b0381811683821601908082111561299a5761299a6136e8565b8082028115828204841417611269576112696136e8565b6001600160801b0382811682821603908082111561299a5761299a6136e8565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611269576112696136e8565b600081600f0b60016001607f1b031981036138ab576138ab6136e8565b60000392915050565b6000808335601e198436030181126138cb57600080fd5b83018035915067ffffffffffffffff8211156138e657600080fd5b602001915036819003821315612fce57600080fd5b60006020828403121561390d57600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139a6828551613914565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a1b57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a4157613a416136e8565b5060000390565b61018081016112698284613914565b60008060408385031215613a6a57600080fd5b825191506020830151613a7c8161375a565b809150509250929050565b600060208284031215613a9957600080fd5b8151610bbf8161375a565b600082613ab357613ab36137ad565b600160ff1b821460001984141615613acd57613acd6136e8565b500590565b60008060008060808587031215613ae857600080fd5b84519350602085015192506040850151915060608501516136dd8161375a56fea264697066735822122062719150bbe79c3ca0b82a777f8fd455a44ad9526c1ec178dec9358ce9f41e9064736f6c634300081400336102606040523480156200001257600080fd5b50604051620041f2380380620041f28339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613d25620004cd600039600050506000505060005050600081816101000152818161032501526130bc01526000818161142c01528181611f3c01528181611f9f0152818161278801528181612ca301528181612cdf01528181612ed501526130960152600081816107cc01528181610d3201528181610e3e01528181611304015281816117d80152818161186b015261307001526000611b5b015260008181611c81015281816126670152818161298d0152612a06015260008181610a4f01528181610d91015281816113a601528181611c5501526129da015260008181610d700152818161262301526129590152600081816107ed01528181610d1001528181610e5f015281816112e201526130e20152600081816101dc015281816103bb0152818161098701526136a001526000818161071e0152818161081f015281816108a601528181610907015261093f0152600050506000818161057d015281816115d60152818161161f015281816116b101528181611732015281816118d90152818161195a0152818161281e0152818161286701528181612abe0152612b070152613d256000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613870565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613870565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102de565b6000806100a4610551565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561057b565b6100de836105e7565b6000806100eb8886610620565b909250905060006100fc83836106f9565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a610717565b905061017881846004610752565b5060008060006101888787610ce9565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c691906138e5565b909155506101d79050844283610e9c565b6102017f0000000000000000000000000000000000000000000000000000000000000000856138e5565b985061020f8389888c610fda565b600061021c60018b611174565b90506102358161022f60208e018e6138f8565b8b6111a9565b8d8a8a898e8561024860208301836138f8565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c8661027e898787611251565b6102898a8888611280565b610299604088016020890161392f565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102e9610551565b600554610100900460ff1615610312576040516321081abf60e01b815260040160405180910390fd5b61031a61057b565b610323836105e7565b7f00000000000000000000000000000000000000000000000000000000000000008610156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6112a8565b905084811015610391576040516342af972b60e01b815260040160405180910390fd5b600061039b610717565b905060006103b26103aa610717565b846004610752565b905060006103e07f0000000000000000000000000000000000000000000000000000000000000000846138e5565b90506000806000806103f38e89886112bb565b600b8054949850929650909450925083916000906104129084906138e5565b909155506104239050874283610e9c565b50600061043184898d6113de565b9050808d10156104545760405163c972651760e01b815260040160405180910390fd5b61045e818c610620565b508e905061046e81858b89611406565b600061047b600288611174565b90508c6104958261048f60208401846138f8565b856111a9565b858b86846104a660208601866138f8565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8d6104dd8c888b611280565b6104ed60408b0160208c0161392f565b610501896104fb8a8d61394c565b906106f9565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361057457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105c757503415155b156105e557604051631574f9f360e01b815260040160405180910390fd5b565b60006105f660208301836138f8565b6001600160a01b03160361061d5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610634604085016020860161392f565b156106595761064f8561064a604087018761395f565b6115ba565b9093509050610675565b50346106718561066c604087018761395f565b61184e565b8492505b61067d6112a8565b915080156106f057604051600090339083908381818185875af1925050503d80600081146106c7576040519150601f19603f3d011682016040523d82523d6000602084013e6106cc565b606091505b50509050806106ee576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061070e8383670de0b6b3a76400006119f8565b90505b92915050565b60006107437f0000000000000000000000000000000000000000000000000000000000000000426139bc565b61074d904261394c565b905090565b600083815260076020526040812060018101546001600160801b031615158061077a57504285115b1561079357600101546001600160801b03169050610ce2565b60008060006107a0610717565b9050808803610818578692506108116107b7611a16565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a37565b91506108d4565b60006108447f00000000000000000000000000000000000000000000000000000000000000008a6138e5565b90505b81810361085f5787935061085c6107b7611a16565b92505b6000818152600760205260409020600101546001600160801b0316935083156108a1576000818152600760205260409020546001600160801b031692506108d2565b6108cb7f0000000000000000000000000000000000000000000000000000000000000000826138e5565b9050610847565b505b6108dd83611a57565b6001850180546001600160801b0319166001600160801b039290921691909117905561093361092c7f00000000000000000000000000000000000000000000000000000000000000008a61394c565b8984610e9c565b6109718861096b6109647f0000000000000000000000000000000000000000000000000000000000000000836138e5565b4290611a85565b84610e9c565b61097a87611a9a565b50600090506007816109ac7f00000000000000000000000000000000000000000000000000000000000000008c61394c565b815260208101919091526040016000908120600101546001600160801b031691506109d860028b611174565b6000818152600e60205260408120549192508b8b8315610b1e5760019250600080610a0786898d866000611c3e565b9150915080600b6000828254610a1d91906138e5565b90915550610a39905086600084610a3381611d0d565b88611d37565b610a4381836138e5565b9150610a7386838a8e877f0000000000000000000000000000000000000000000000000000000000000000611eb1565b9150610a87610a8283856106f9565b611efb565b60058054600290610aa89084906201000090046001600160701b03166139d0565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ad582611a57565b60058054601090610af7908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b2b600184611174565b6000818152600e60205260409020549091508015610c3a5760019450600080610b58838b8f886001611c3e565b9150915080600b6000828254610b6e91906138e5565b90915550610b8a905083600084610b8481611d0d565b8a611f25565b610b94818361394c565b9150610ba3610a8283876106f9565b60058054600290610bc49084906201000090046001600160701b03166139d0565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bf182611a57565b60058054601090610c13908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c7257610c66610c4c87611d0d565b610c5583611d0d565b610c5f9190613a10565b6000612116565b610c70838f6121c9565b505b6000610c7d846123c3565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d56610cfa611a16565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612521565b9250610d636107b7611a16565b9050610dba8684610db5847f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061254d565b6125ba565b15610dc757610dc76125fc565b600080610dd5888489612615565b9092509050610de4828661394c565b9450610df18184896119f8565b9350610dfd848961394c565b9550670de0b6b3a7640000610e8387610e14611a16565b610e1e91906138e5565b600154610e3c908990600160801b90046001600160801b031661394c565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a37565b1115610e9157610e916125fc565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610ec85750505050565b6000848152600760205260408120546001600160801b031690819003610f2257610ef183611a57565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610fa0565b610f73610f6e670de0b6b3a7640000610f3b888661394c565b610f459190613a30565b85670de0b6b3a7640000610f59878a61394c565b610f639190613a30565b859291906001612695565b611a57565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fa984611a57565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b031661101c610f6e82611006670de0b6b3a764000086613a30565b6004546001600160801b03169190886001612695565b600480546001600160801b0319166001600160801b039290921691909117905561104585611a57565b600180546000906110609084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061108d84611a57565b600180546010906110af908490600160801b90046001600160801b0316613a47565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110dc84611a57565b6110e690826139f0565b600280546001600160801b03808416600160801b0291161790559050600061110d8361273d565b905061112b8161111c87611d0d565b6111269084613a67565b612116565b61113484612781565b611140576111406125fc565b600061114b856127e1565b90508061116b57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561119e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111db9084906138e5565b90915550506000838152600e6020526040812080548392906111fe9084906138e5565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611263604083016020840161392f565b1561126f575082610ce2565b61127984846106f9565b9050610ce2565b6000611292604083016020840161392f565b156112a15761127984846127ee565b5082610ce2565b600061074d670de0b6b3a7640000612803565b6000806000806113286112cc611a16565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006128fe565b925086611335848861291f565b1115611343576113436125fc565b6000806113516107b7611a16565b925061136789670de0b6b3a7640000858b612934565b5091935090915061137a9050818361394c565b611384908661394c565b94506113d0886113ca8b611398858a61394c565b8b6113a38e82612a42565b8e7f0000000000000000000000000000000000000000000000000000000000000000612a58565b9061291f565b955092505093509350935093565b60006113f0604083016020840161392f565b156113fc575082610ce2565b61127984846127ee565b6001546001600160801b031683811015611422576114226125fc565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061145a908390600f0b612a7d565b1015611468576114686125fc565b6003546114b290610f6e90600160801b90046001600160801b0316611495670de0b6b3a764000086613a30565b600454600160801b90046001600160801b03169190896001612695565b600480546001600160801b03928316600160801b0292169190911790556114d881611a57565b600180546001600160801b0319166001600160801b039290921691909117905561150185611a57565b60018054601090611523908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061155085611a57565b60038054601090611572908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115a18361273d565b905061112b816115b088611d0d565b6111269084613a10565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161160a575047611695565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561166e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116929190613a8f565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161171057873410156116ff576040516312171d8360e31b815260040160405180910390fd5b611709883461394c565b90506117aa565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a79190613aa8565b91505b816117c8576040516312171d8360e31b815260040160405180910390fd5b60125460000361180d576117fc887f00000000000000000000000000000000000000000000000000000000000000006127ee565b601281905594509250611846915050565b60125460009061181f908a90866119f8565b9050806012600082825461183391906138e5565b9091555090955090935061184692505050565b935093915050565b600061185984612803565b90506012546000036118975761188f817f00000000000000000000000000000000000000000000000000000000000000006127ee565b6012556118bd565b60006118a282612aa3565b905080601260008282546118b691906138e5565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119385782341015611927576040516312171d8360e31b815260040160405180910390fd5b611931833461394c565b90506119d2565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156119ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cf9190613aa8565b91505b816119f0576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611a0f57600080fd5b5091020490565b60015460035460009161074d916001600160801b0390911690600f0b612a7d565b6000611a4e82611a488588886119f8565b90612b8c565b95945050505050565b60006001600160801b03821115611a8157604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611a94578261070e565b50919050565b6005546000908190611abd908490600160801b90046001600160801b03166106f9565b6005546201000090046001600160701b03169250905081811115611c39576000611ae7838361394c565b9050611af6610f6e8286612bf7565b60058054601090611b18908490600160801b90046001600160801b0316613a47565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b5185836127ee90919063ffffffff16565b90506000611b7f827f00000000000000000000000000000000000000000000000000000000000000006106f9565b905080600b6000828254611b9391906138e5565b90915550611ba39050818361394c565b9150611bae82611a57565b60018054600090611bc99084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bf682612c0c565b60038054600090611c0b908490600f0b613ac5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c4b87856127ee565b91506000611c79837f00000000000000000000000000000000000000000000000000000000000000006106f9565b9050611ca5817f00000000000000000000000000000000000000000000000000000000000000006106f9565b91508315611cc857611cb7828261394c565b611cc1908461394c565b9250611cdf565b611cd2828261394c565b611cdc90846138e5565b92505b86861015611d0257611cf28387896119f8565b9250611cff8287896119f8565b91505b509550959350505050565b60006001600160ff1b03821115611a815760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611d80610f6e82611d63670de0b6b3a764000086613a30565b600454600160801b90046001600160801b031691908a6000612695565b600480546001600160801b03928316600160801b029216919091179055611da686611a57565b611db09082613a47565b600380546001600160801b03928316600160801b029216919091179055611dd684611a57565b60018054600090611df19084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e1e83612c36565b60038054600090611e33908490600f0b613ac5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611e6385611a57565b60018054601090611e85908490600160801b90046001600160801b0316613a47565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611ec984611ec38a888a6119f8565b906127ee565b9050611ed68884866119f8565b611ee090826138e5565b905086811115611ef05786810391505b509695505050505050565b60006001600160701b03821115611a815760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611f6757507f0000000000000000000000000000000000000000000000000000000000000000611f65858361394c565b105b15611f7457611f746125fc565b6003549084900390600f0b611f898482613a10565b905083611f9586611d0d565b138015611fca57507f0000000000000000000000000000000000000000000000000000000000000000611fc88383612a7d565b105b15611fd757611fd76125fc565b600254600160801b90046001600160801b0316612019610f6e82612003670de0b6b3a764000088613a30565b6004546001600160801b031691908c6000612695565b600480546001600160801b0319166001600160801b0392909216919091179055612043888261394c565b905061204e81611a57565b600280546001600160801b03928316600160801b02921691909117905561207483611a57565b600180546001600160801b0319166001600160801b039290921691909117905561209d82612c36565b600380546001600160801b0319166001600160801b03929092169190911790556120c687611a57565b600180546010906120e8908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061213f6121258483612c72565b612130846000612c72565b61213a9190613a10565b612c36565b9050600081600f0b1315612194576002805482919060009061216b9084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156121c4576121a981613af2565b6002805460009061216b9084906001600160801b0316613a47565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291612214916001600160801b03169061394c565b905080600003612228576001915050610711565b600061223385612c81565b90508060000361224857600192505050610711565b600080612256838589612d1d565b915091508061226c576000945050505050610711565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016122a8929190613b96565b6040805180830381865af41580156122c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e89190613c0c565b915091506123066122f882611d0d565b61230190613c30565b612e91565b92508261231c5760009650505050505050610711565b61232582611a57565b600680546000906123409084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061236d81611a57565b6006805460109061238f908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6123ec87613027565b6040518263ffffffff1660e01b81526004016124089190613c4c565b6040805180830381865af4158015612424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124489190613c5b565b915091508061245e575060009485945092505050565b600080861161246e576000612478565b61247883876106f9565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916124e391906138e5565b6124ed919061394c565b9050806000036125065750600096879650945050505050565b600061251283836127ee565b98600198509650505050505050565b600061254287878761253b88670de0b6b3a764000061394c565b8787613161565b979650505050505050565b60006125b261258e61256784670de0b6b3a764000061394c565b6113ca670de0b6b3a764000061257d818a612bf7565b612587919061394c565b879061291f565b6125a090670de0b6b3a76400006138e5565b611ec384670de0b6b3a764000061394c565b949350505050565b6000806125f1856125c9611a16565b6125d391906138e5565b600154610e3c908790600160801b90046001600160801b031661394c565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061265f856113ca85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612655818c612bf7565b6113ca919061394c565b915061268b827f00000000000000000000000000000000000000000000000000000000000000006106f9565b9050935093915050565b6000826000036126a6575084611a4e565b81156126f9576126d76126b984876138e5565b6126c385876106f9565b6126cd888a6106f9565b611ec391906138e5565b905060006126e58588611a85565b9050808210156126f3578091505b50611a4e565b82850361270857506000611a4e565b612733612715848761394c565b61271f858761291f565b612729888a6106f9565b611ec3919061394c565b9695505050505050565b6000612765600e6000612751600286611174565b815260200190815260200160002054611d0d565b612777600e6000612751600187611174565b6107119190613a10565b60006127ad7f00000000000000000000000000000000000000000000000000000000000000008361291f565b6002546127c391906001600160801b03166138e5565b6001546127d9906001600160801b0316846106f9565b101592915050565b60006107118260046121c9565b600061070e83670de0b6b3a7640000846119f8565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128525750476128dd565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156128b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128da9190613a8f565b90505b6012546000036128ee576000610ce2565b601254610ce290849083906119f8565b600061254287878761291888670de0b6b3a764000061394c565b8787613215565b600061070e8383670de0b6b3a7640000613238565b6000808080612985878661297e8b6113ca6129578c670de0b6b3a764000061394c565b7f00000000000000000000000000000000000000000000000000000000000000009061291f565b9190613238565b93506129b1847f00000000000000000000000000000000000000000000000000000000000000006106f9565b915060006129d26129ca89670de0b6b3a764000061394c565b8a9088613238565b90506129fe817f000000000000000000000000000000000000000000000000000000000000000061291f565b9350612a2a847f00000000000000000000000000000000000000000000000000000000000000006106f9565b612a3490846138e5565b915050945094509450949050565b6000818311612a51578161070e565b5090919050565b600080612a7084612a6a8a888a613238565b90612bf7565b9050611ed6888486613238565b600080612a8a848461325e565b909250905080612a9c57612a9c6125fc565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612af2575047612b7d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612b56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7a9190613a8f565b90505b601254610ce2908490836119f8565b600081600003612ba55750670de0b6b3a7640000610711565b82600003612bb557506000610711565b6000612bc083611d0d565b90506000612bd5612bd086611d0d565b61329a565b9050818102612bec670de0b6b3a764000082613c8b565b9050612733816134c0565b600061070e83670de0b6b3a764000084613238565b600060016001607f1b03821115611a815760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612c54575060016001607f1b0382135b15611a815760405163a5353be560e01b815260040160405180910390fd5b6000818313612a51578161070e565b6002546000908190612c9c906001600160801b031684612bf7565b9050612cc87f0000000000000000000000000000000000000000000000000000000000000000826138e5565b6001546001600160801b03161115611a94576001547f000000000000000000000000000000000000000000000000000000000000000090612d139083906001600160801b031661394c565b610ce2919061394c565b612d256137bd565b600080612d3184613027565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d6c9190613c4c565b6040805180830381865af4158015612d88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dac9190613c5b565b9350905082612dc15750600091506118469050565b6000612de8612de38461016001518561014001516106f990919063ffffffff16565b611d0d565b612e08612de385610120015186610100015161291f90919063ffffffff16565b612e129190613a10565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612f48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f6c9190613cb9565b935093509350935080612f885750600098975050505050505050565b868414612fb957612f9884611a57565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612fea57612fc983612c36565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461301857612ffa82611a57565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b61302f61380f565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916131279116613655565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261315992900416613655565b905292915050565b60008061317188888787876136cb565b905061318b85611a48613184898c6138e5565b86906106f9565b97506131988489856119f8565b9750878110156131aa576131aa6125fc565b878103670de0b6b3a764000081106131df576131d86131d1670de0b6b3a764000088612bf7565b8290612b8c565b90506131f7565b6131f46131d1670de0b6b3a7640000886127ee565b90505b80881015613207576132076125fc565b909603979650505050505050565b6000806132268888888888886136fa565b909250905080611ef057611ef06125fc565b600082600019048411830215820261324f57600080fd5b50910281810615159190040190565b60008060008361326d86611d0d565b6132779190613a10565b9050600081121561328f5760008092509250506106f2565b946001945092505050565b60008082136132bc5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061333f9084901c611d0d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136134db57506000919050565b680755bf798b4a1bf1e58212613504576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061273374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611d0d565b600080670de0b6b3a7640000613669610717565b6136739190613a30565b905080831161368357600061368d565b61368d818461394c565b9150610ce26136c4670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a30565b83906127ee565b60006136d78585612b8c565b6136f06136e886611a48868b61291f565b859085613238565b61273391906138e5565b600080600061370c89898888886136cb565b905061371c86611a48898b6138e5565b9750878110156137335760008092509250506137b2565b878103613741818688613238565b9050670de0b6b3a7640000811061376e576137676131d1670de0b6b3a764000089612bf7565b9050613786565b6137836131d1670de0b6b3a7640000896127ee565b90505b6137908186612bf7565b9050808a10156137a8576000809350935050506137b2565b8903925060019150505b965096945050505050565b6040518061012001604052806137d161380f565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561388657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156138b257600080fd5b8501606081880312156138c457600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610711576107116138cf565b60006020828403121561390a57600080fd5b81356001600160a01b0381168114610ce257600080fd5b801515811461061d57600080fd5b60006020828403121561394157600080fd5b8135610ce281613921565b81810381811115610711576107116138cf565b6000808335601e1984360301811261397657600080fd5b83018035915067ffffffffffffffff82111561399157600080fd5b6020019150368190038213156106f257600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826139cb576139cb6139a6565b500690565b6001600160701b03818116838216019080821115612a9c57612a9c6138cf565b6001600160801b03818116838216019080821115612a9c57612a9c6138cf565b8181036000831280158383131683831282161715612a9c57612a9c6138cf565b8082028115828204841417610711576107116138cf565b6001600160801b03828116828216039080821115612a9c57612a9c6138cf565b8082018281126000831280158216821582161715613a8757613a876138cf565b505092915050565b600060208284031215613aa157600080fd5b5051919050565b600060208284031215613aba57600080fd5b8151610ce281613921565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610711576107116138cf565b600081600f0b60016001607f1b03198103613b0f57613b0f6138cf565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613baa828551613b18565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613c1f57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613c4557613c456138cf565b5060000390565b61018081016107118284613b18565b60008060408385031215613c6e57600080fd5b825191506020830151613c8081613921565b809150509250929050565b600082613c9a57613c9a6139a6565b600160ff1b821460001984141615613cb457613cb46138cf565b500590565b60008060008060808587031215613ccf57600080fd5b84519350602085015192506040850151915060608501516138c48161392156fea2646970667358221220eaa7e3eb0815c7b99e34c36b69842303d73bb5571051172e18c533a3c400067c64736f6c634300081400336102606040523480156200001257600080fd5b5060405162004598380380620045988339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516140c4620004d46000396000505060005050600081816104a9015281816104d801526105050152600081816103420152818161075001528181610c4e01526119c701526000818161090d015281816109f801528181610a8b01528181610b53015281816119a101528181612585015281816125e8015281816128e30152818161291f0152612b150152600081816103a30152818161097d01528181610eca0152818161197b01528181612e850152612f100152600061218a015260006122e501526000818161114d01526122b9015260005050600081816103e5015281816109d001528181610eeb01526119ed0152600081816103c40152818161047e015281816109aa01528181611085015261310e01526000818161029401528181610e2101528181610f1d01528181610fa401528181611005015261103d0152600050506000818161177c01528181611e7f01528181611ec801528181612c8301528181612ccc01528181612d5e01528181612ddf01528181612f7e01528181612fff015281816133110152818161335a01528181613435015281816134e1015281816135cd015261367901526140c46000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613b87565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613bd7565b61011a565b005b6100be6100b9366004613bf9565b610128565b604051908152602001610080565b6100be6100da366004613b87565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613b87565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261023d565b5050565b600061013786868686866102fc565b90505b95945050505050565b60006101508484846108b7565b90505b9392505050565b60008061010d858585610c38565b600080610173610d9f565b61017c83610dc9565b6000610186610e02565b905061019b610193610e1a565b826004610e50565b506101a933878388886113e5565b90935091506101bb6020850185613c5d565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf846101f287868a611528565b6101fd88878b611557565b61020d60408b0160208c01613c94565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610245610d9f565b600061024f610e02565b6000848152600760205260409020600101549091506001600160801b0316156102835761027c818361157f565b50506102f2565b600061028d610e1a565b90506102b97f000000000000000000000000000000000000000000000000000000000000000085613cc7565b1515806102c557508381105b156102e35760405163ecd29e8160e01b815260040160405180910390fd5b6102ee848385610e50565b5050505b6101246001600055565b6000610306610d9f565b600554610100900460ff161561032f576040516321081abf60e01b815260040160405180910390fd5b61033761177a565b61034082610dc9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103815760405163211ddda360e11b815260040160405180910390fd5b600061040961038e6117e6565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611807565b90508481108061041857508381115b1561043657604051633b61151160e11b815260040160405180910390fd5b600080610443898661182d565b915091506000610451610e1a565b905061045f81836004610e50565b506000818152600760205260408120546104a2906001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611906565b90506104ce7f000000000000000000000000000000000000000000000000000000000000000082613cf1565b85118061052d57507f00000000000000000000000000000000000000000000000000000000000000008111801561052d575061052a7f000000000000000000000000000000000000000000000000000000000000000082613d04565b85105b1561054b57604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610597916001600160801b0390911690613d04565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105d2908390613cf1565b905060008060006105e287611932565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061061c908490600401613d95565b602060405180830381865af4158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d9190613da4565b915061067061066b89611a6c565b611a9a565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106d2908490600401613d95565b602060405180830381865af41580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107139190613da4565b9250818310156107365760405163184d952160e11b815260040160405180910390fd5b61074c84836107458187613d04565b9190611ac0565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561078f5760405163211ddda360e11b815260040160405180910390fd5b508d8d61079c828c611ade565b10156107bb5760405163c972651760e01b815260040160405180910390fd5b6107d360006107cd60208e018e613c5d565b8c611af3565b60006107de88611b9c565b9050806107fe57604051638bdf918d60e01b815260040160405180910390fd5b60008515610815576108108487611ade565b610818565b60005b90508c6000610828858c84611528565b90506108376020830183613c5d565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868f838f6108746040880160208901613c94565b60408051948552602085019390935291830152151560608201526080810186905260a00160405180910390a25050505050505050505050505061013a6001600055565b60006108c1610d9f565b6108c961177a565b6108d282610dc9565b60055460ff16156108f657604051637983c05160e01b815260040160405180910390fd5b600080610903868561182d565b90925090506109337f00000000000000000000000000000000000000000000000000000000000000006002613dbd565b82101561095357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a839190613dd4565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ab48484611ba9565b1015610ad35760405163216f4ab160e21b815260040160405180910390fd5b610adc83611bcf565b600180546001600160801b0319166001600160801b0392909216919091179055610b0582611bf9565b600380546001600160801b0319166001600160801b0392909216919091179055610b2e81611bcf565b600180546001600160801b03928316600160801b029216919091179055610b776000807f0000000000000000000000000000000000000000000000000000000000000000611af3565b610b8f6000610b8960208a018a613c5d565b88611af3565b610ba2610b9a610e1a565b856004610e50565b506000610bb08a868a611528565b9050610bbf6020890189613c5d565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952888389610bfc60408e0160208f01613c94565b6040805194855260208501939093529183015215156060820152608081018c905260a00160405180910390a25050505050506101536001600055565b600080610c43610d9f565b610c4c83610dc9565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8d5760405163211ddda360e11b815260040160405180910390fd5b6000610c97610e02565b9050610ca4610193610e1a565b50610cb160003388611c35565b610cc6600360f81b610b896020870187613c5d565b6000610ce1610cd86020870187613c5d565b888489896113e5565b9094509050610cf08188613d04565b92506000610cfd83611d06565b509050610d0d6020870187613c5d565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a610d4489888c611528565b610d4f8a898d611557565b610d5f60408d0160208e01613c94565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610dc257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dd86020830183613c5d565b6001600160a01b031603610dff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610e15670de0b6b3a7640000611e64565b905090565b6000610e467f000000000000000000000000000000000000000000000000000000000000000042613cc7565b610e159042613d04565b600083815260076020526040812060018101546001600160801b0316151580610e7857504285115b15610e9157600101546001600160801b03169050610153565b6000806000610e9e610e1a565b9050808803610f1657869250610f0f610eb56117e6565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611f5f565b9150610fd2565b6000610f427f00000000000000000000000000000000000000000000000000000000000000008a613cf1565b90505b818103610f5d57879350610f5a610eb56117e6565b92505b6000818152600760205260409020600101546001600160801b031693508315610f9f576000818152600760205260409020546001600160801b03169250610fd0565b610fc97f000000000000000000000000000000000000000000000000000000000000000082613cf1565b9050610f45565b505b610fdb83611bcf565b6001850180546001600160801b0319166001600160801b039290921691909117905561103161102a7f00000000000000000000000000000000000000000000000000000000000000008a613d04565b8984611f76565b61106f886110696110627f000000000000000000000000000000000000000000000000000000000000000083613cf1565b42906120b4565b84611f76565b611078876120c9565b50600090506007816110aa7f00000000000000000000000000000000000000000000000000000000000000008c613d04565b815260208101919091526040016000908120600101546001600160801b031691506110d660028b61226d565b6000818152600e60205260408120549192508b8b831561121c576001925060008061110586898d8660006122a2565b9150915080600b600082825461111b9190613cf1565b9091555061113790508660008461113181611a6c565b88612371565b6111418183613cf1565b915061117186838a8e877f00000000000000000000000000000000000000000000000000000000000000006124eb565b9150611185611180838561252f565b612544565b600580546002906111a69084906201000090046001600160701b0316613e02565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111d382611bcf565b600580546010906111f5908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061122960018461226d565b6000818152600e602052604090205490915080156113385760019450600080611256838b8f8860016122a2565b9150915080600b600082825461126c9190613cf1565b9091555061128890508360008461128281611a6c565b8a61256e565b6112928183613d04565b91506112a1611180838761252f565b600580546002906112c29084906201000090046001600160701b0316613e02565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112ef82611bcf565b60058054601090611311908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113705761136461134a87611a6c565b61135383611a6c565b61135d9190613e42565b600061275f565b61136e838f61157f565b505b600061137b84611d06565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113f185611b9c565b505060065485906001600160801b03168082111561141657806001600160801b031691505b8160000361142b57600080925092505061151e565b61143a600360f81b8984611c35565b6006546000906114609084906001600160801b03600160801b9091048116908516611ac0565b905061146b83611bcf565b6114759083613e62565b600680546001600160801b0319166001600160801b039290921691909117905561149e81611bcf565b600680546010906114c0908490600160801b90046001600160801b0316613e62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114ef818887612812565b93506114fb86846128ac565b84101561151b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600061153a6040830160208401613c94565b15611546575082610153565b611550848461252f565b9050610153565b60006115696040830160208401613c94565b15611578576115508484611ade565b5082610153565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916115ca916001600160801b031690613d04565b9050806000036115de576001915050611774565b60006115e9856128c1565b9050806000036115fe57600192505050611774565b60008061160c83858961295d565b9150915080611622576000945050505050611774565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161165e929190613e82565b6040805180830381865af415801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190613ef8565b915091506116bc6116ae82611a6c565b6116b790613f1c565b612ad1565b9250826116d25760009650505050505050611774565b6116db82611bcf565b600680546000906116f69084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061172381611bcf565b60068054601090611745908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906117c657503415155b156117e457604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610e15916001600160801b0390911690600f0b611ba9565b60008061181687878786611f5f565b90506118228185611906565b979650505050505050565b600080806118416040850160208601613c94565b156118665761185c856118576040870187613f38565b612c67565b9093509050611882565b503461187e856118796040870187613f38565b612ef3565b8492505b61188a610e02565b915080156118fd57604051600090339083908381818185875af1925050503d80600081146118d4576040519150601f19603f3d011682016040523d82523d6000602084013e6118d9565b606091505b50509050806118fb576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361191a84846301e1338061309d565b61192c85670de0b6b3a7640000613d04565b90611ade565b61193a613ac2565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611a3291166130c3565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611a64929004166130c3565b905292915050565b60006001600160ff1b03821115611a965760405163396ea70160e11b815260040160405180910390fd5b5090565b611aa381612ad1565b610dff57604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611ad757600080fd5b5091020490565b600061015383670de0b6b3a764000084611ac0565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611b25908490613cf1565b90915550506000838152600e602052604081208054839290611b48908490613cf1565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061177482600461157f565b600080611bb68484613139565b909250905080611bc857611bc8613175565b5092915050565b60006001600160801b03821115611a9657604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611c17575060016001607f1b0382135b15611a965760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611c7857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611cbb908490613d04565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b8f565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611d2f87611932565b6040518263ffffffff1660e01b8152600401611d4b9190613d95565b6040805180830381865af4158015611d67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8b9190613f7f565b9150915080611da1575060009485945092505050565b6000808611611db1576000611dbb565b611dbb838761252f565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611e269190613cf1565b611e309190613d04565b905080600003611e495750600096879650945050505050565b6000611e558383611ade565b98600198509650505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611eb3575047611f3e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611f17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f3b9190613da4565b90505b601254600003611f4f576000610153565b6012546101539084908390611ac0565b600061013a82611f70858888611ac0565b9061318e565b600083815260076020526040902054600160801b90046001600160801b0316808303611fa25750505050565b6000848152600760205260408120546001600160801b031690819003611ffc57611fcb83611bcf565b600086815260076020526040902080546001600160801b0319166001600160801b039290921691909117905561207a565b61204d612048670de0b6b3a76400006120158886613d04565b61201f9190613dbd565b85670de0b6b3a7640000612033878a613d04565b61203d9190613dbd565b859291906001613203565b611bcf565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61208384611bcf565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120c35782610153565b50919050565b60055460009081906120ec908490600160801b90046001600160801b031661252f565b6005546201000090046001600160701b031692509050818111156122685760006121168383613d04565b905061212561204882866132a1565b60058054601090612147908490600160801b90046001600160801b0316613e62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006121808583611ade90919063ffffffff16565b905060006121ae827f000000000000000000000000000000000000000000000000000000000000000061252f565b905080600b60008282546121c29190613cf1565b909155506121d290508183613d04565b91506121dd82611bcf565b600180546000906121f89084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612225826132b6565b6003805460009061223a908490600f0b613faf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156122975760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122af8785611ade565b915060006122dd837f000000000000000000000000000000000000000000000000000000000000000061252f565b9050612309817f000000000000000000000000000000000000000000000000000000000000000061252f565b9150831561232c5761231b8282613d04565b6123259084613d04565b9250612343565b6123368282613d04565b6123409084613cf1565b92505b8686101561236657612356838789611ac0565b9250612363828789611ac0565b91505b509550959350505050565b600354600160801b90046001600160801b03166123ba6120488261239d670de0b6b3a764000086613dbd565b600454600160801b90046001600160801b031691908a6000613203565b600480546001600160801b03928316600160801b0292169190911790556123e086611bcf565b6123ea9082613e62565b600380546001600160801b03928316600160801b02921691909117905561241084611bcf565b6001805460009061242b9084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061245883611bf9565b6003805460009061246d908490600f0b613faf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061249d85611bcf565b600180546010906124bf908490600160801b90046001600160801b0316613e62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806124fd8461192c8a888a611ac0565b905061250a888486611ac0565b6125149082613cf1565b9050868111156125245786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611ac0565b60006001600160701b03821115611a965760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806125b057507f00000000000000000000000000000000000000000000000000000000000000006125ae8583613d04565b105b156125bd576125bd613175565b6003549084900390600f0b6125d28482613e42565b9050836125de86611a6c565b13801561261357507f00000000000000000000000000000000000000000000000000000000000000006126118383611ba9565b105b1561262057612620613175565b600254600160801b90046001600160801b03166126626120488261264c670de0b6b3a764000088613dbd565b6004546001600160801b031691908c6000613203565b600480546001600160801b0319166001600160801b039290921691909117905561268c8882613d04565b905061269781611bcf565b600280546001600160801b03928316600160801b0292169190911790556126bd83611bcf565b600180546001600160801b0319166001600160801b03929092169190911790556126e682611bf9565b600380546001600160801b0319166001600160801b039290921691909117905561270f87611bcf565b60018054601090612731908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061278861276e84836132e0565b6127798460006132e0565b6127839190613e42565b611bf9565b9050600081600f0b13156127dd57600280548291906000906127b49084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561280d576127f281613fdc565b600280546000906127b49084906001600160801b0316613e62565b505050565b60008061281f858561252f565b905061282a816132f6565b94508460000361283e576000915050610153565b61284e6040840160208501613c94565b1561287d57612876856128646020860186613c5d565b6128716040870187613f38565b6133df565b91506128a4565b6128a08561288e6020860186613c5d565b61289b6040870187613f38565b613579565b8491505b509392505050565b60006101538383670de0b6b3a764000061309d565b60025460009081906128dc906001600160801b0316846132a1565b90506129087f000000000000000000000000000000000000000000000000000000000000000082613cf1565b6001546001600160801b031611156120c3576001547f0000000000000000000000000000000000000000000000000000000000000000906129539083906001600160801b0316613d04565b6101539190613d04565b612965613b23565b60008061297184611932565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129ac9190613d95565b6040805180830381865af41580156129c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129ec9190613f7f565b9350905082612a015750600091506101129050565b6000612a28612a2384610160015185610140015161252f90919063ffffffff16565b611a6c565b612a48612a238561012001518661010001516128ac90919063ffffffff16565b612a529190613e42565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bac9190614002565b935093509350935080612bc85750600098975050505050505050565b868414612bf957612bd884611bcf565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612c2a57612c0983611bf9565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612c5857612c3a82611bcf565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cb7575047612d42565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d3f9190613da4565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612dbd5787341015612dac576040516312171d8360e31b815260040160405180910390fd5b612db68834613d04565b9050612e57565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612e30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e549190614043565b91505b81612e75576040516312171d8360e31b815260040160405180910390fd5b601254600003612eba57612ea9887f0000000000000000000000000000000000000000000000000000000000000000611ade565b601281905594509250610112915050565b601254600090612ecc908a9086611ac0565b90508060126000828254612ee09190613cf1565b9091555090955090935061011292505050565b6000612efe84611e64565b9050601254600003612f3c57612f34817f0000000000000000000000000000000000000000000000000000000000000000611ade565b601255612f62565b6000612f47826132f6565b90508060126000828254612f5b9190613cf1565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612fdd5782341015612fcc576040516312171d8360e31b815260040160405180910390fd5b612fd68334613d04565b9050613077565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613050573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130749190614043565b91505b81613095576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008260001904841183021582026130b457600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006130d7610e1a565b6130e19190613dbd565b90508083116130f15760006130fb565b6130fb8184613d04565b9150610153613132670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613dbd565b8390611ade565b60008060008361314886611a6c565b6131529190613e42565b9050600081121561316a5760008092509250506118ff565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000816000036131a75750670de0b6b3a7640000611774565b826000036131b757506000611774565b60006131c283611a6c565b905060006131d76131d286611a6c565b613707565b90508181026131ee670de0b6b3a764000082614060565b90506131f98161392d565b9695505050505050565b60008260000361321457508461013a565b8115613267576132456132278487613cf1565b613231858761252f565b61323b888a61252f565b61192c9190613cf1565b9050600061325385886120b4565b905080821015613261578091505b5061013a565b8285036132765750600061013a565b6101376132838487613d04565b61328d85876128ac565b613297888a61252f565b61192c9190613d04565b600061015383670de0b6b3a76400008461309d565b600060016001607f1b03821115611a965760405163a5353be560e01b815260040160405180910390fd5b60008183136132ef5781610153565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016133455750476133d0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156133a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133cd9190613da4565b90505b60125461015390849083611ac0565b600060125485116133f057846133f4565b6012545b9450600061340186611e64565b905085601260008282546134159190613d04565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016134bb576040516001600160a01b038716908390600081818185875af1925050503d80600081146134ab576040519150601f19603f3d011682016040523d82523d6000602084013e6134b0565b606091505b505080915050613551565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561352a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061354e9190614043565b90505b8061356f576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b6012548411613588578361358c565b6012545b9350600061359985611e64565b905084601260008282546135ad9190613d04565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613653576040516001600160a01b038616908390600081818185875af1925050503d8060008114613643576040519150601f19603f3d011682016040523d82523d6000602084013e613648565b606091505b5050809150506136e9565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156136c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136e69190614043565b90505b80613095576040516312171d8360e31b815260040160405180910390fd5b60008082136137295760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906137ac9084901c611a6c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361394857506000919050565b680755bf798b4a1bf1e58212613971576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906131f974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a6c565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613b37613ac2565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156120c357600080fd5b600080600060608486031215613b9c57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613bc157600080fd5b613bcd86828701613b75565b9150509250925092565b60008060408385031215613bea57600080fd5b50508035926020909101359150565b600080600080600060a08688031215613c1157600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613c4457600080fd5b613c5088828901613b75565b9150509295509295909350565b600060208284031215613c6f57600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610dff57600080fd5b600060208284031215613ca657600080fd5b813561015381613c86565b634e487b7160e01b600052601260045260246000fd5b600082613cd657613cd6613cb1565b500690565b634e487b7160e01b600052601160045260246000fd5b8082018082111561177457611774613cdb565b8181038181111561177457611774613cdb565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016117748284613d17565b600060208284031215613db657600080fd5b5051919050565b808202811582820484141761177457611774613cdb565b600080600060608486031215613de957600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611bc857611bc8613cdb565b6001600160801b03818116838216019080821115611bc857611bc8613cdb565b8181036000831280158383131683831282161715611bc857611bc8613cdb565b6001600160801b03828116828216039080821115611bc857611bc8613cdb565b60006102a082019050613e96828551613d17565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613f0b57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613f3157613f31613cdb565b5060000390565b6000808335601e19843603018112613f4f57600080fd5b83018035915067ffffffffffffffff821115613f6a57600080fd5b6020019150368190038213156118ff57600080fd5b60008060408385031215613f9257600080fd5b825191506020830151613fa481613c86565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561177457611774613cdb565b600081600f0b60016001607f1b03198103613ff957613ff9613cdb565b60000392915050565b6000806000806080858703121561401857600080fd5b845193506020850151925060408501519150606085015161403881613c86565b939692955090935050565b60006020828403121561405557600080fd5b815161015381613c86565b60008261406f5761406f613cb1565b600160ff1b82146000198414161561408957614089613cdb565b50059056fea26469706673582212205c78549a2edaed264f77b02bb4254eea5a6273b5e8d4db797c5431ae7ead26fa64736f6c63430008140033',
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
