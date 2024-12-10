export const AaveTarget3 = {
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
                            "name": "circuitBreakerDelta",
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
                            "name": "checkpointRewarder",
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
                },
                {
                    "name": "__adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DistributeExcessIdleFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "FailedInnerCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidApr",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidEffectiveShareReserves",
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
            "name": "MinimumTransactionAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotPayable",
            "inputs": []
        },
        {
            "type": "error",
            "name": "OutputLimit",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PoolAlreadyInitialized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PoolIsPaused",
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
            "name": "TransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint112",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102a060405234801562000011575f80fd5b506040516200477f3803806200477f83398101604081905262000034916200055e565b60015f5581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000110573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000136919062000698565b6001600160a01b0390811661028081905260805162000159921690600162000161565b505062000705565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bb90859083906200022c16565b6200022657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021a918691620002d616565b620002268482620002d6565b50505050565b5f805f846001600160a01b031684604051620002499190620006b6565b5f604051808303815f865af19150503d805f811462000284576040519150601f19603f3d011682016040523d82523d5f602084013e62000289565b606091505b5091509150818015620002b7575080511580620002b7575080806020019051810190620002b79190620006e4565b8015620002cd57505f856001600160a01b03163b115b95945050505050565b5f620002ec6001600160a01b0384168362000347565b905080515f1415801562000313575080806020019051810190620003119190620006e4565b155b156200034257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200035683835f6200035d565b9392505050565b606081471015620003845760405163cd78605960e01b815230600482015260240162000339565b5f80856001600160a01b03168486604051620003a19190620006b6565b5f6040518083038185875af1925050503d805f8114620003dd576040519150601f19603f3d011682016040523d82523d5f602084013e620003e2565b606091505b509092509050620003f5868383620003ff565b9695505050505050565b6060826200041857620004128262000463565b62000356565b81511580156200043057506001600160a01b0384163b155b156200045b57604051639996b31560e01b81526001600160a01b038516600482015260240162000339565b508062000356565b805115620004745780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004c057634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b03811681146200048d575f80fd5b8051620004e881620004c6565b919050565b5f60808284031215620004fe575f80fd5b604051608081016001600160401b03811182821017156200052d57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f8082840361028081121562000572575f80fd5b6102608082121562000582575f80fd5b6200058c62000490565b91506200059985620004db565b8252620005a960208601620004db565b6020830152620005bc60408601620004db565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000627818701620004db565b908301526101806200063b868201620004db565b908301526101a06200064f868201620004db565b908301526101c062000663868201620004db565b908301526101e06200067887878301620004ed565b81840152508193506200068d818601620004db565b925050509250929050565b5f60208284031215620006a9575f80fd5b81516200035681620004c6565b5f82515f5b81811015620006d75760208186018101518583015201620006bb565b505f920191825250919050565b5f60208284031215620006f5575f80fd5b8151801515811462000356575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613e89620008f65f395f818161198801528181611a3501528181612d710152612dbd01525f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b01528181612172015281816121d501528181612a7e01528181612eda0152612f1601525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611d8301525f8181611ed8015261316501525f81816110260152611eac01525f61311b01525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f640152612a1401525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f611aa501525f818161195b015281816119bc015281816119fa01528181612d500152612d9c0152613e895ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a3660046138e2565b610064565b60405190815260200160405180910390f35b61003f61005f366004613941565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b6139a1565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f0000000000000000000000000000000000000000000000000000000000000000896139b4565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f0000000000000000000000000000000000000000000000000000000000000000826139a1565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f0000000000000000000000000000000000000000000000000000000000000000826139b4565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b03909116906139b4565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f9083906139a1565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610467908490600401613a45565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a69190613a54565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a91859101613a45565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105599190613a54565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b81876139b4565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f0160208101906106169190613a7f565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c61025491906139a1565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e6020850185613a7f565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b01613aa7565b866107a960408c018c613ac2565b6040516107bc9796959493929190613b05565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f00000000000000000000000000000000000000000000000000000000000000006002613b58565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a59190613b6f565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c613a7f565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b136020820182613a7f565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b506040870160208801613aa7565b87610b5e6040890189613ac2565b604051610b719796959493929190613b05565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be36020830183613a7f565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a6040850160208601613aa7565b15610c8f57610c8585610c806040870187613ac2565b61194c565b9093509050610ca7565b5034610ca785610ca26040870187613ac2565b611aa3565b610caf611b58565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611b6a565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b6139a1565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b6139b4565b8a84611b7f565b610f4f89610f49610f427f0000000000000000000000000000000000000000000000000000000000000000836139a1565b4290611cb8565b84611b7f565b610f5888611cc6565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d6139b4565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611e63565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611e97565b915091508060095f828254610ff591906139a1565b909155506110109050865f8461100a81611766565b88611f64565b61101a81836139a1565b915061104a86838a8e877f00000000000000000000000000000000000000000000000000000000000000006120db565b915061105e611059838561211e565b612132565b6006805460029061107f9084906201000090046001600160701b0316613b9a565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b0316613bba565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611e63565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611e97565b915091508060095f82825461114191906139a1565b9091555061115c9050835f8461115681611766565b8a61215b565b61116681836139b4565b9150611175611059838761211e565b600680546002906111969084906201000090046001600160701b0316613b9a565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b0316613bba565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b6112319190613bda565b5f61234b565b8e611242848261238a565b50505b5f61124f84612579565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113299190613bf9565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906126bb565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611e63565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611e63565b6113f79190613bda565b92915050565b5f805f8061140b8a8a612743565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006139b4565b8b7f000000000000000000000000000000000000000000000000000000000000000061277b565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006139b4565b8d7f0000000000000000000000000000000000000000000000000000000000000000612834565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c846128ee565b509093505f9050611568848f6139a1565b90505f6115888b8b61157987611766565b611583908e613c14565b612936565b90508b6115bd6115b87f000000000000000000000000000000000000000000000000000000000000000083612998565b611766565b6115c683611766565b6115d36115b8868561211e565b6115dd9190613bda565b6115e79190613bda565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e133806129a8565b61162685670de0b6b3a76400006139b4565b906117d4565b611634613833565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c91166129cb565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e929004166129cb565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c81612a38565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906118199084906139a1565b90915550505f838152600b60205260408120805483929061183b9084906139a1565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f782600461238a565b5f8183136118a7578261008d565b50919050565b5f806118b98484612743565b9092509050806118cb576118cb612bcc565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612be5565b5f806119836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612c54565b6119e37f00000000000000000000000000000000000000000000000000000000000000006119b28760016139a1565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612cbb565b60405163617ba03760e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018790523060448301525f60648301527f0000000000000000000000000000000000000000000000000000000000000000169063617ba037906084015f604051808303815f87803b158015611a76575f80fd5b505af1158015611a88573d5f803e3d5ffd5b50505050611a9585612d4a565b5f915091505b935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd3330611add87612d96565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303815f875af1158015611b2e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b529190613c3b565b50505050565b5f610c2d670de0b6b3a7640000612d96565b5f611b758284613c6a565b61008d90846139b4565b5f83815260086020526040902054600160801b90046001600160801b0316808303611baa5750505050565b5f848152600860205260408120546001600160801b031690819003611c0257611bd2836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611c7f565b611c53611c4e670de0b6b3a7640000611c1b88866139b4565b611c259190613b58565b85670de0b6b3a7640000611c39878a6139b4565b611c439190613b58565b859291906001612de2565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611c88846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611ce8908490600160801b90046001600160801b031661211e565b6006546201000090046001600160701b03169250905081811115611e5e575f611d1183836139b4565b9050611d20611c4e8286612e7c565b60068054601090611d42908490600160801b90046001600160801b0316613c7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611d7a85836117d490919063ffffffff16565b90505f611da7827f000000000000000000000000000000000000000000000000000000000000000061211e565b90508060095f828254611dba91906139a1565b90915550611dca905081836139b4565b9150611dd5826118d2565b600280545f90611def9084906001600160801b0316613bba565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e1c82612e90565b600480545f90611e30908490600f0b613c9d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611e8c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611ea387856117d4565b91505f611ed0837f000000000000000000000000000000000000000000000000000000000000000061211e565b9050611efc817f000000000000000000000000000000000000000000000000000000000000000061211e565b91508315611f1f57611f0e82826139b4565b611f1890846139b4565b9250611f36565b611f2982826139b4565b611f3390846139a1565b92505b86861015611f5957611f498387896117b9565b9250611f568287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b0316611fac611c4e82611f90670de0b6b3a764000086613b58565b600554600160801b90046001600160801b031691908a5f612de2565b600580546001600160801b03928316600160801b029216919091179055611fd2866118d2565b611fdc9082613c7d565b600480546001600160801b03928316600160801b029216919091179055612002846118d2565b600280545f9061201c9084906001600160801b0316613bba565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612049836118fb565b600480545f9061205d908490600f0b613c9d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061208d856118d2565b600280546010906120af908490600160801b90046001600160801b0316613c7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806120ec846116268a888a6117b9565b90506120f98884866117b9565b61210390826139a1565b9050868111156121135786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061219d57507f000000000000000000000000000000000000000000000000000000000000000061219b85836139b4565b105b156121aa576121aa612bcc565b6004549084900390600f0b6121bf8482613bda565b9050836121cb86611766565b13801561220057507f00000000000000000000000000000000000000000000000000000000000000006121fe83836118ad565b105b1561220d5761220d612bcc565b600354600160801b90046001600160801b031661224e611c4e82612239670de0b6b3a764000088613b58565b6005546001600160801b031691908c5f612de2565b600580546001600160801b0319166001600160801b039290921691909117905561227888826139b4565b9050612283816118d2565b600380546001600160801b03928316600160801b0292169190911790556122a9836118d2565b600280546001600160801b0319166001600160801b03929092169190911790556122d2826118fb565b600480546001600160801b0319166001600160801b03929092169190911790556122fb876118d2565b6002805460109061231d908490600160801b90046001600160801b0316613bba565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461236690611c4e906001600160801b03168484612936565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916123d4916001600160801b0316906139b4565b9050805f036123e75760019150506113f7565b5f6123f185612eb9565b9050805f03612405576001925050506113f7565b5f80612412838589612f54565b9150915080612427575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612462929190613cca565b6040805180830381865af415801561247c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124a09190613d3f565b915091506124be6124b082611766565b6124b990613d61565b612a38565b9250826124d3575f96505050505050506113f7565b6124dc826118d2565b600780545f906124f69084906001600160801b0316613bba565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612523816118d2565b60078054601090612545908490600160801b90046001600160801b0316613bba565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6125a08761162c565b6040518263ffffffff1660e01b81526004016125bc9190613a45565b6040805180830381865af41580156125d6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125fa9190613d7b565b915091508061260f57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691612674916139a1565b61267e91906139b4565b9050805f0361269457505f958695509350505050565b5f8087116126a2575f6126ad565b6126ad8488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156126de576126de613da9565b6040519080825280601f01601f191660200182016040528015612708576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612728578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f8361275086611766565b61275a9190613bda565b90505f811215612770575f809250925050610d21565b946001945092505050565b5f805f61278b88888888886130bc565b90505f6127b5670de0b6b3a76400006127a48888612e7c565b6127ae91906139a1565b83906117d4565b9050670de0b6b3a764000081106127e9576127e26127db670de0b6b3a7640000896117d4565b8290612be5565b9050612801565b6127fe6127db670de0b6b3a764000089612e7c565b90505b61280b81866117d4565b905088811015612822575f80935093505050612739565b97909703976001975095505050505050565b5f805f61284489898888886130ea565b905061285e866119466128578a8d6139a1565b879061211e565b985061286b858a866117b9565b985088811015612881575f8092509250506115f6565b888103670de0b6b3a764000081106128af576128a86127db670de0b6b3a764000089612e7c565b90506128c7565b6128c46127db670de0b6b3a7640000896117d4565b90505b808910156128dc575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f6128fe89878961310e565b909250905061290d82896139b4565b97505f61291b82888a6117b9565b9050612927818b6139b4565b9a989950979650505050505050565b5f80612942845f613193565b61294c845f613193565b6129569190613bda565b90505f8113156129715761296a81866139a1565b945061298f565b5f81121561298f5761298281613d61565b61298c90866139b4565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f1904841183021582026129bc575f80fd5b50910281810615159190040190565b5f80670de0b6b3a76400006129de610d28565b6129e89190613b58565b90508083116129f7575f612a01565b612a0181846139b4565b915061008d6127ae670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613b58565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612aee573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b129190613dbd565b935093509350935080612b2d57505f98975050505050505050565b868414612b5e57612b3d846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b8f57612b6e836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bbd57612b9f826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612bfc5750670de0b6b3a76400006113f7565b825f03612c0a57505f6113f7565b5f612c1483611766565b90505f612c28612c2386611766565b6131a8565b9050818102612c3f670de0b6b3a764000082613dfb565b9050612c4a816133cd565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052611b529186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061355f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612d0c84826135ca565b611b52576040516001600160a01b0384811660248301525f6044830152612d4091869182169063095ea7b390606401612c89565b611b52848261355f565b5f6113f77f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084613667565b5f6113f77f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461368a565b5f825f03612df1575084610075565b8115612e4357612e22612e0484876139a1565b612e0e858761211e565b612e18888a61211e565b61162691906139a1565b90505f612e2f8588611cb8565b905080821015612e3d578091505b50610075565b828503612e5157505f610075565b610072612e5e84876139b4565b612e688587612998565b612e72888a61211e565b61162691906139b4565b5f61008d83670de0b6b3a7640000846129a8565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612ed3906001600160801b031684612e7c565b9050612eff7f0000000000000000000000000000000000000000000000000000000000000000826139a1565b6002546001600160801b031611156118a7576002547f000000000000000000000000000000000000000000000000000000000000000090612f4a9083906001600160801b03166139b4565b61008d91906139b4565b612f5c613888565b5f80612f678461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612fa19190613a45565b6040805180830381865af4158015612fbb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612fdf9190613d7b565b9350905082612ff357505f9150611a9b9050565b5f6130146115b884610160015185610140015161211e90919063ffffffff16565b6130346115b885610120015186610100015161299890919063ffffffff16565b61303e9190613bda565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f6130c78585612be5565b6130e06130d886611946868b61211e565b8590856117b9565b61007291906139a1565b5f6130f58585612be5565b6130e061310686611946868b612998565b8590856129a8565b5f8061315d8561315785817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061314d818c612e7c565b61315791906139b4565b90612998565b9150613189827f000000000000000000000000000000000000000000000000000000000000000061211e565b9050935093915050565b5f8183136131a1578161008d565b5090919050565b5f8082136131c95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061324c9084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136133e657505f919050565b680755bf798b4a1bf1e5821261340f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612c4a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f6135736001600160a01b038416836136ac565b905080515f141580156135975750808060200190518101906135959190613c3b565b155b156135c557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b0316846040516135e59190613e27565b5f604051808303815f865af19150503d805f811461361e576040519150601f19603f3d011682016040523d82523d5f602084013e613623565b606091505b509150915081801561364d57508051158061364d57508080602001905181019061364d9190613c3b565b80156100755750505050506001600160a01b03163b151590565b5f61008a6b033b2e3c9fd0803ce800000061368286866136b9565b8491906117b9565b5f61008a61369885856136b9565b83906b033b2e3c9fd0803ce80000006117b9565b606061008d83835f613724565b60405163d15e005360e01b81526001600160a01b0383811660048301525f919083169063d15e005390602401602060405180830381865afa158015613700573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061008d9190613a54565b6060814710156137495760405163cd78605960e01b81523060048201526024016135bc565b5f80856001600160a01b031684866040516137649190613e27565b5f6040518083038185875af1925050503d805f811461379e576040519150601f19603f3d011682016040523d82523d5f602084013e6137a3565b606091505b5091509150612c4a8683836060826137c3576137be8261380a565b61008d565b81511580156137da57506001600160a01b0384163b155b1561380357604051639996b31560e01b81526001600160a01b03851660048201526024016135bc565b508061008d565b80511561381a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405180610120016040528061389c613833565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a086880312156138f6575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613928575f80fd5b613934888289016138d2565b9150509295509295909350565b5f805f60608486031215613953575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115613977575f80fd5b613983868287016138d2565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f761398d565b818103818111156113f7576113f761398d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f782846139c7565b5f60208284031215613a64575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f60208284031215613a8f575f80fd5b813561008d81613a6b565b8015158114610c0a575f80fd5b5f60208284031215613ab7575f80fd5b813561008d81613a9a565b5f808335601e19843603018112613ad7575f80fd5b83018035915067ffffffffffffffff821115613af1575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f761398d565b5f805f60608486031215613b81575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb61398d565b6001600160801b038181168382160190808211156118cb576118cb61398d565b8181035f8312801583831316838312821617156118cb576118cb61398d565b5f60208284031215613c09575f80fd5b815161008d81613a6b565b8082018281125f831280158216821582161715613c3357613c3361398d565b505092915050565b5f60208284031215613c4b575f80fd5b815161008d81613a9a565b634e487b7160e01b5f52601260045260245ffd5b5f82613c7857613c78613c56565b500690565b6001600160801b038281168282160390808211156118cb576118cb61398d565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f761398d565b5f6102a082019050613cdd8285516139c7565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613d50575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613d7557613d7561398d565b505f0390565b5f8060408385031215613d8c575f80fd5b825191506020830151613d9e81613a9a565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613dd0575f80fd5b8451935060208501519250604085015191506060850151613df081613a9a565b939692955090935050565b5f82613e0957613e09613c56565b600160ff1b82145f1984141615613e2257613e2261398d565b500590565b5f82515f5b81811015613e465760208186018101518583015201613e2c565b505f92019182525091905056fea2646970667358221220640a92cbc756d9143c0dbc01bfb8447576eb5a91a48299f33ec97a3e60e09ddf64736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
