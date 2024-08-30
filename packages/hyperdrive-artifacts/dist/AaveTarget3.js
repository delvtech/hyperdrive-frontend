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
    bytecode: '0x6102a06040523480156200001257600080fd5b50604051620048fd380380620048fd833981016040819052620000359162000578565b600160005581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013a9190620006b5565b6001600160a01b039081166102808190526080516200015d921690600162000165565b50506200072a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bf90859083906200023116565b6200022b57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021f918691620002e216565b6200022b8482620002e2565b50505050565b6000806000846001600160a01b031684604051620002509190620006d5565b6000604051808303816000865af19150503d80600081146200028f576040519150601f19603f3d011682016040523d82523d6000602084013e62000294565b606091505b5091509150818015620002c2575080511580620002c2575080806020019051810190620002c2919062000706565b8015620002d957506000856001600160a01b03163b115b95945050505050565b6000620002f96001600160a01b0384168362000355565b90508051600014158015620003215750808060200190518101906200031f919062000706565b155b156200035057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000365838360006200036c565b9392505050565b606081471015620003935760405163cd78605960e01b815230600482015260240162000347565b600080856001600160a01b03168486604051620003b19190620006d5565b60006040518083038185875af1925050503d8060008114620003f0576040519150601f19603f3d011682016040523d82523d6000602084013e620003f5565b606091505b5090925090506200040886838362000412565b9695505050505050565b6060826200042b57620004258262000476565b62000365565b81511580156200044357506001600160a01b0384163b155b156200046e57604051639996b31560e01b81526001600160a01b038516600482015260240162000347565b508062000365565b805115620004875780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004d557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004a057600080fd5b8051620004fe81620004db565b919050565b6000608082840312156200051657600080fd5b604051608081016001600160401b03811182821017156200054757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102808112156200058e57600080fd5b610260808212156200059f57600080fd5b620005a9620004a3565b9150620005b685620004f1565b8252620005c660208601620004f1565b6020830152620005d960408601620004f1565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000644818701620004f1565b9083015261018062000658868201620004f1565b908301526101a06200066c868201620004f1565b908301526101c062000680868201620004f1565b908301526101e0620006958787830162000503565b8184015250819350620006aa818601620004f1565b925050509250929050565b600060208284031215620006c857600080fd5b81516200036581620004db565b6000825160005b81811015620006f85760208186018101518583015201620006dc565b506000920191825250919050565b6000602082840312156200071957600080fd5b815180151581146200036557600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613fcf6200092e600039600081816119f601528181611aa401528181612e430152612e900152600050506000505060006112f901526000818161030301528181610332015261035f01526000818160de015281816105a9015261172001526000818161085601528181610941015281816109d401528181610add015281816115f1015281816116fa015281816122020152818161226501528181612b4401528181612fb40152612ff001526000818161013f015281816108c601528181610ea7015281816114b5015281816115190152818161156001526116d401526000611e07015260008181611f62015261324901526000818161106b0152611f36015260006131ff0152600081816101810152818161091901528181610ec801528181611485015281816114e901528181611581015261174601526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa30152612ada01526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b01526000611b1a0152600081816119c901528181611a2a01528181611a6801528181612e220152612e6f0152613fcf6000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c3660046139f3565b610066565b60405190815260200160405180910390f35b610041610061366004613a57565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613abd565b611408565b611452565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613ad0565b81526020810191909152604001600020546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061165f565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613abd565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613ad0565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103f1916001600160801b0390911690613ad0565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061042c908390613abd565b9050600080600061043c8a61168b565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613b61565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613b70565b91506104ca6104c58c6117c5565b6117f3565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613b61565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613b70565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613ad0565b9190611819565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e611837565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613b9e565b8e61184c565b61063a896118f4565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613abd565b9b5090508a158061073757506107348c6000611901565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611819565b610770565b60005b905061077f6020850185613b9e565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613bc9565b866107ca60408c018c613be6565b6040516107dd9796959493929190613c2d565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613c81565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613c98565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd8484611916565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e85858589600080611452565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a668561193c565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f84611966565b600480546001600160801b0319166001600160801b0392909216919091179055610ab88361193c565b600280546001600160801b03928316600160801b029216919091179055610b016000807f000000000000000000000000000000000000000000000000000000000000000061184c565b610b196000610b1360208c018c613b9e565b8a61184c565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f6020820182613b9e565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613bc9565b87610b8a6040890189613be6565b604051610b9d9796959493929190613c2d565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c136020830183613b9e565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b611916565b905090565b600080610c72878787866119a2565b9050610c7e818561165f565b979650505050505050565b81600080610c9d6040850160208601613bc9565b15610cc257610cb885610cb36040870187613be6565b6119b9565b9093509050610cda565b5034610cda85610cd56040870187613be6565b611b18565b610ce2611bd0565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f0000000000000000000000000000000000000000000000000000000000000000611be3565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611400565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b613abd565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b92505b50610ef98361193c565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b613ad0565b8a84611bf9565b610f8d89610f87610f807f000000000000000000000000000000000000000000000000000000000000000083613abd565b4290611d37565b84611bf9565b610f9688611d46565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d613ad0565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611eea565b6000818152600b60205260408120549192508c8c831561113a576001925060008061102386898d866000611f1f565b9150915080600960008282546110399190613abd565b9091555061105590508660008461104f816117c5565b88611fee565b61105f8183613abd565b915061108f86838a8e877f0000000000000000000000000000000000000000000000000000000000000000612168565b91506110a361109e83856121ac565b6121c1565b600680546002906110c49084906201000090046001600160701b0316613cc6565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f18261193c565b60068054601090611113908490600160801b90046001600160801b0316613ce6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611eea565b6000818152600b602052604090205490915080156112565760019450600080611174838b8f886001611f1f565b91509150806009600082825461118a9190613abd565b909155506111a69050836000846111a0816117c5565b8a6121eb565b6111b08183613ad0565b91506111bf61109e83876121ac565b600680546002906111e09084906201000090046001600160701b0316613cc6565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d8261193c565b6006805460109061122f908490600160801b90046001600160801b0316613ce6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561129057611282611268876117c5565b611271836117c5565b61127b9190613d06565b60006123dc565b8e61128d848261241b565b50505b600061129b84612615565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113799190613d26565b90506001600160a01b038116156113ee576113eb5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612761565b50505b509b9d50505050505050505050505050505b949350505050565b6000611430600b600061141c600286611eea565b8152602001908152602001600020546117c5565b611442600b600061141c600187611eea565b61144c9190613d06565b92915050565b6000806000806114628a8a6127ee565b915091508061147957600080935093505050611654565b60006114d9838a6114b27f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613ad0565b8b7f000000000000000000000000000000000000000000000000000000000000000061282a565b509050600061153d848b846115167f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613ad0565b8d7f00000000000000000000000000000000000000000000000000000000000000006128e7565b50905081158061154b575080155b15611557575060009050805b60006115a5858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b90506115b383838c846129a5565b50909350600090506115c5848f613abd565b905060006115e68b8b6115d7876117c5565b6115e1908e613d43565b6129f1565b90508b61161b6116167f000000000000000000000000000000000000000000000000000000000000000083612a58565b6117c5565b611624836117c5565b61163161161686856121ac565b61163b9190613d06565b6116459190613d06565b60019950995050505050505050505b965096945050505050565b600061009161167384846301e13380612a69565b61168585670de0b6b3a7640000613ad0565b90611837565b61169361392e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161178b9116612a8f565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117bd92900416612a8f565b905292915050565b60006001600160ff1b038211156117ef5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117fc81612afe565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261183057600080fd5b5091020490565b600061009183670de0b6b3a764000084611819565b6000838152600a602090815260408083206001600160a01b03861684529091528120805483929061187e908490613abd565b90915550506000838152600b6020526040812080548392906118a1908490613abd565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061144c82600461241b565b60008183136119105782610091565b50919050565b60008061192384846127ee565b90925090508061193557611935612c96565b5092915050565b60006001600160801b038211156117ef57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611984575060016001607f1b0382135b156117ef5760405163a5353be560e01b815260040160405180910390fd5b6000610078826119b3858888611819565b90612caf565b6000806119f16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612d24565b611a517f0000000000000000000000000000000000000000000000000000000000000000611a20876001613abd565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612d8b565b60405163617ba03760e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201879052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063617ba03790608401600060405180830381600087803b158015611ae857600080fd5b505af1158015611afc573d6000803e3d6000fd5b50505050611b0985612e1b565b6000915091505b935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd3330611b5287612e68565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015611ba6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bca9190613d6b565b50505050565b6000610c5e670de0b6b3a7640000612e68565b6000611bef8284613d9e565b6100919084613ad0565b600083815260086020526040902054600160801b90046001600160801b0316808303611c255750505050565b6000848152600860205260408120546001600160801b031690819003611c7f57611c4e8361193c565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611cfd565b611cd0611ccb670de0b6b3a7640000611c988886613ad0565b611ca29190613c81565b85670de0b6b3a7640000611cb6878a613ad0565b611cc09190613c81565b859291906001612eb5565b61193c565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611d068461193c565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116119105782610091565b6006546000908190611d69908490600160801b90046001600160801b03166121ac565b6006546201000090046001600160701b03169250905081811115611ee5576000611d938383613ad0565b9050611da2611ccb8286612f53565b60068054601090611dc4908490600160801b90046001600160801b0316613db2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611dfd858361183790919063ffffffff16565b90506000611e2b827f00000000000000000000000000000000000000000000000000000000000000006121ac565b90508060096000828254611e3f9190613abd565b90915550611e4f90508183613ad0565b9150611e5a8261193c565b60028054600090611e759084906001600160801b0316613ce6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ea282612f68565b60048054600090611eb7908490600f0b613dd2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611f145760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611f2c8785611837565b91506000611f5a837f00000000000000000000000000000000000000000000000000000000000000006121ac565b9050611f86817f00000000000000000000000000000000000000000000000000000000000000006121ac565b91508315611fa957611f988282613ad0565b611fa29084613ad0565b9250611fc0565b611fb38282613ad0565b611fbd9084613abd565b92505b86861015611fe357611fd3838789611819565b9250611fe0828789611819565b91505b509550959350505050565b600454600160801b90046001600160801b0316612037611ccb8261201a670de0b6b3a764000086613c81565b600554600160801b90046001600160801b031691908a6000612eb5565b600580546001600160801b03928316600160801b02921691909117905561205d8661193c565b6120679082613db2565b600480546001600160801b03928316600160801b02921691909117905561208d8461193c565b600280546000906120a89084906001600160801b0316613ce6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120d583611966565b600480546000906120ea908490600f0b613dd2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061211a8561193c565b6002805460109061213c908490600160801b90046001600160801b0316613db2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061217a846116858a888a611819565b9050612187888486611819565b6121919082613abd565b9050868111156121a15786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611819565b60006001600160701b038211156117ef5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061222d57507f000000000000000000000000000000000000000000000000000000000000000061222b8583613ad0565b105b1561223a5761223a612c96565b6004549084900390600f0b61224f8482613d06565b90508361225b866117c5565b13801561229057507f000000000000000000000000000000000000000000000000000000000000000061228e8383611916565b105b1561229d5761229d612c96565b600354600160801b90046001600160801b03166122df611ccb826122c9670de0b6b3a764000088613c81565b6005546001600160801b031691908c6000612eb5565b600580546001600160801b0319166001600160801b03929092169190911790556123098882613ad0565b90506123148161193c565b600380546001600160801b03928316600160801b02921691909117905561233a8361193c565b600280546001600160801b0319166001600160801b039290921691909117905561236382611966565b600480546001600160801b0319166001600160801b039290921691909117905561238c8761193c565b600280546010906123ae908490600160801b90046001600160801b0316613ce6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546123f790611ccb906001600160801b031684846129f1565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612466916001600160801b031690613ad0565b90508060000361247a57600191505061144c565b600061248585612f92565b90508060000361249a5760019250505061144c565b6000806124a883858961302e565b91509150806124be57600094505050505061144c565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016124fa929190613dff565b6040805180830381865af4158015612516573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061253a9190613e75565b9150915061255861254a826117c5565b61255390613e99565b612afe565b92508261256e576000965050505050505061144c565b6125778261193c565b600780546000906125929084906001600160801b0316613ce6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506125bf8161193c565b600780546010906125e1908490600160801b90046001600160801b0316613ce6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61263e8761168b565b6040518263ffffffff1660e01b815260040161265a9190613b61565b6040805180830381865af4158015612676573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061269a9190613eb5565b91509150806126b0575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161271691613abd565b6127209190613ad0565b90508060000361273857506000958695509350505050565b6000808711612748576000612753565b612753848884611819565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561278757612787613ee5565b6040519080825280601f01601f1916602001820160405280156127b1576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156127d2578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836127fd866117c5565b6128079190613d06565b9050600081121561281f576000809250925050610d57565b946001945092505050565b600080600061283c888888888861319d565b90506000612867670de0b6b3a76400006128568888612f53565b6128609190613abd565b8390611837565b9050670de0b6b3a7640000811061289b5761289461288d670de0b6b3a764000089611837565b8290612caf565b90506128b3565b6128b061288d670de0b6b3a764000089612f53565b90505b6128bd8186611837565b9050888110156128d5576000809350935050506127e4565b97909703976001975095505050505050565b60008060006128f989898888886131cc565b9050612913866119b361290c8a8d613abd565b87906121ac565b9850612920858a86611819565b985088811015612937576000809250925050611654565b888103670de0b6b3a764000081106129655761295e61288d670de0b6b3a764000089612f53565b905061297d565b61297a61288d670de0b6b3a764000089611837565b90505b8089101561299357600080935093505050611654565b90970398600198509650505050505050565b60008060008060006129b88987896131f1565b90925090506129c78289613ad0565b975060006129d682888a611819565b90506129e2818b613ad0565b9a989950979650505050505050565b6000806129ff846000613277565b612a0a846000613277565b612a149190613d06565b90506000811315612a3057612a298186613abd565b9450612a4f565b6000811215612a4f57612a4281613e99565b612a4c9086613ad0565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612a8057600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612aa3610d5e565b612aad9190613c81565b9050808311612abd576000612ac7565b612ac78184613ad0565b9150610091612860670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c81565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bdb9190613efb565b935093509350935080612bf75750600098975050505050505050565b868414612c2857612c078461193c565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c5957612c3883611966565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c8757612c698261193c565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612cc85750670de0b6b3a764000061144c565b82600003612cd85750600061144c565b6000612ce3836117c5565b90506000612cf8612cf3866117c5565b61328d565b9050818102612d0f670de0b6b3a764000082613f3c565b9050612d1a816134b3565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052611bca9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613648565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612ddc84826136b5565b611bca576040516001600160a01b03848116602483015260006044830152612e1191869182169063095ea7b390606401612d59565b611bca8482613648565b600061144c7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084613758565b600061144c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461377c565b600082600003612ec6575084610078565b8115612f1957612ef7612ed98487613abd565b612ee385876121ac565b612eed888a6121ac565b6116859190613abd565b90506000612f058588611d37565b905080821015612f13578091505b50610078565b828503612f2857506000610078565b610075612f358487613ad0565b612f3f8587612a58565b612f49888a6121ac565b6116859190613ad0565b600061009183670de0b6b3a764000084612a69565b600060016001607f1b038211156117ef5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612fad906001600160801b031684612f53565b9050612fd97f000000000000000000000000000000000000000000000000000000000000000082613abd565b6002546001600160801b03161115611910576002547f0000000000000000000000000000000000000000000000000000000000000000906130249083906001600160801b0316613ad0565b6100919190613ad0565b61303661398f565b6000806130428461168b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161307d9190613b61565b6040805180830381865af4158015613099573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130bd9190613eb5565b93509050826130d2575060009150611b109050565b60006130f46116168461016001518561014001516121ac90919063ffffffff16565b613114611616856101200151866101000151612a5890919063ffffffff16565b61311e9190613d06565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006131a98585612caf565b6131c26131ba866119b3868b6121ac565b859085611819565b6100759190613abd565b60006131d88585612caf565b6131c26131e9866119b3868b612a58565b859085612a69565b6000806132418561323b85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613231818c612f53565b61323b9190613ad0565b90612a58565b915061326d827f00000000000000000000000000000000000000000000000000000000000000006121ac565b9050935093915050565b60008183136132865781610091565b5090919050565b60008082136132af5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133329084901c6117c5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136134ce57506000919050565b680755bf798b4a1bf1e582126134f7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612d1a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117c5565b600061365d6001600160a01b0384168361379f565b905080516000141580156136825750808060200190518101906136809190613d6b565b155b156136b057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516136d29190613f6a565b6000604051808303816000865af19150503d806000811461370f576040519150601f19603f3d011682016040523d82523d6000602084013e613714565b606091505b509150915081801561373e57508051158061373e57508080602001905181019061373e9190613d6b565b80156100785750505050506001600160a01b03163b151590565b600061008e6b033b2e3c9fd0803ce800000061377486866137ad565b849190611819565b600061008e61378b85856137ad565b83906b033b2e3c9fd0803ce8000000611819565b60606100918383600061381b565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa1580156137f7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100919190613b70565b6060814710156138405760405163cd78605960e01b81523060048201526024016136a7565b600080856001600160a01b0316848660405161385c9190613f6a565b60006040518083038185875af1925050503d8060008114613899576040519150601f19603f3d011682016040523d82523d6000602084013e61389e565b606091505b5091509150612d1a8683836060826138be576138b982613905565b610091565b81511580156138d557506001600160a01b0384163b155b156138fe57604051639996b31560e01b81526001600160a01b03851660048201526024016136a7565b5080610091565b8051156139155780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806139a361392e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561191057600080fd5b600080600080600060a08688031215613a0b57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613a3e57600080fd5b613a4a888289016139e1565b9150509295509295909350565b600080600060608486031215613a6c57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613a9157600080fd5b613a9d868287016139e1565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561144c5761144c613aa7565b8181038181111561144c5761144c613aa7565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161144c8284613ae3565b600060208284031215613b8257600080fd5b5051919050565b6001600160a01b0381168114610c3a57600080fd5b600060208284031215613bb057600080fd5b813561009181613b89565b8015158114610c3a57600080fd5b600060208284031215613bdb57600080fd5b813561009181613bbb565b6000808335601e19843603018112613bfd57600080fd5b83018035915067ffffffffffffffff821115613c1857600080fd5b602001915036819003821315610d5757600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761144c5761144c613aa7565b600080600060608486031215613cad57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561193557611935613aa7565b6001600160801b0381811683821601908082111561193557611935613aa7565b818103600083128015838313168383128216171561193557611935613aa7565b600060208284031215613d3857600080fd5b815161009181613b89565b8082018281126000831280158216821582161715613d6357613d63613aa7565b505092915050565b600060208284031215613d7d57600080fd5b815161009181613bbb565b634e487b7160e01b600052601260045260246000fd5b600082613dad57613dad613d88565b500690565b6001600160801b0382811682821603908082111561193557611935613aa7565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561144c5761144c613aa7565b60006102a082019050613e13828551613ae3565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e8857600080fd5b505080516020909101519092909150565b6000600160ff1b8201613eae57613eae613aa7565b5060000390565b60008060408385031215613ec857600080fd5b825191506020830151613eda81613bbb565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613f1157600080fd5b8451935060208501519250604085015191506060850151613f3181613bbb565b939692955090935050565b600082613f4b57613f4b613d88565b600160ff1b821460001984141615613f6557613f65613aa7565b500590565b6000825160005b81811015613f8b5760208186018101518583015201613f71565b50600092019182525091905056fea26469706673582212201b9cf8a259b74fdae310f93e5e5b4047894b4b12ef29f1de8118d8ec7bfb8d8164736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
