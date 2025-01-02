export const AaveTarget1 = {
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
            "name": "closeLong",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeShort",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
            "stateMutability": "nonpayable"
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
            "name": "InsufficientBalance",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
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
            "name": "OutputLimit",
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
        }
    ],
    bytecode: '0x6102a060405234801562000011575f80fd5b50604051620042ed380380620042ed83398101604081905262000034916200055e565b60015f5581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000110573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000136919062000698565b6001600160a01b0390811661028081905260805162000159921690600162000161565b505062000705565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bb90859083906200022c16565b6200022657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021a918691620002d616565b620002268482620002d6565b50505050565b5f805f846001600160a01b031684604051620002499190620006b6565b5f604051808303815f865af19150503d805f811462000284576040519150601f19603f3d011682016040523d82523d5f602084013e62000289565b606091505b5091509150818015620002b7575080511580620002b7575080806020019051810190620002b79190620006e4565b8015620002cd57505f856001600160a01b03163b115b95945050505050565b5f620002ec6001600160a01b0384168362000347565b905080515f1415801562000313575080806020019051810190620003119190620006e4565b155b156200034257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200035683835f6200035d565b9392505050565b606081471015620003845760405163cd78605960e01b815230600482015260240162000339565b5f80856001600160a01b03168486604051620003a19190620006b6565b5f6040518083038185875af1925050503d805f8114620003dd576040519150601f19603f3d011682016040523d82523d5f602084013e620003e2565b606091505b509092509050620003f5868383620003ff565b9695505050505050565b6060826200041857620004128262000463565b62000356565b81511580156200043057506001600160a01b0384163b155b156200045b57604051639996b31560e01b81526001600160a01b038516600482015260240162000339565b508062000356565b805115620004745780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004c057634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b03811681146200048d575f80fd5b8051620004e881620004c6565b919050565b5f60808284031215620004fe575f80fd5b604051608081016001600160401b03811182821017156200052d57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f8082840361028081121562000572575f80fd5b6102608082121562000582575f80fd5b6200058c62000490565b91506200059985620004db565b8252620005a960208601620004db565b6020830152620005bc60408601620004db565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000627818701620004db565b908301526101806200063b868201620004db565b908301526101a06200064f868201620004db565b908301526101c062000663868201620004db565b908301526101e06200067887878301620004ed565b81840152508193506200068d818601620004db565b925050509250929050565b5f60208284031215620006a9575f80fd5b81516200035681620004c6565b5f82515f5b81811015620006d75760208186018101518583015201620006bb565b505f920191825250919050565b5f60208284031215620006f5575f80fd5b8151801515811462000356575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613a32620008bb5f395f818161199101528181612546015261256e01525f50505f50505f610b2e01525f50505f818160a9015281816103140152612c7a01525f818161139301528181611791015281816117f4015281816128630152818161289f01528181612a970152612c5401525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612c2e01525f611afb01525f8181611c1c0152818161225d01526122d501525f81816108a901528181610f4301528181611bf001526122a901525f8181610e3e015261222301525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612ca001525f81816107e701528181610ec4015281816116ef015281816120fc015261325201525f81816105b2015281816106290152818161069d0152818161076801526107a001525f61263e01525f818161197001528181612525015261259d0152613a325ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b6100463660046134e2565b610070565b60405190815260200160405180910390f35b61004b61006b3660046134e2565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f8282546101759190613550565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc9083613563565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b6020830183613596565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a016135be565b6102bd8a6102b78d8f613550565b90611584565b8d6102cb60408c018c6135d9565b6040516102df989796959493929190613644565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf9190613550565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc908361368b565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b66020830183613596565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a016135be565b8a61050260408b018b6135d9565b60405161051597969594939291906136b2565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a6020830183613596565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f00000000000000000000000000000000000000000000000000000000000000006119b6565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b613550565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d76119cb565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119eb565b92505b5061073e83611a01565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b6136f2565b8a8461102b565b6107d2896107cc6107c57f000000000000000000000000000000000000000000000000000000000000000083613550565b4290611a2a565b8461102b565b6107db88611a3e565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d6136f2565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611bdb565b915091508060095f8282546108789190613550565b909155506108939050865f8461088d81611321565b88611164565b61089d8183613550565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611ca8565b91506108e16108dc8385611584565b611cf1565b600680546002906109029084906201000090046001600160701b0316613705565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f82611a01565b60068054601090610951908490600160801b90046001600160801b0316613725565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611bdb565b915091508060095f8282546109c49190613550565b909155506109df9050835f846109d981611321565b8a61177a565b6109e981836136f2565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b0316613705565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a4682611a01565b60068054601090610a68908490600160801b90046001600160801b0316613725565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab49190613563565b5f61134e565b8e610ac58482611d1a565b50505b5f610ad284611f09565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac9190613745565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061204b565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf19084906136f2565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d536119cb565b90505f610d5f8a6120d1565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612120565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119eb565b9550610e67858c610e62897f000000000000000000000000000000000000000000000000000000000000000061218f565b6121be565b15610e7457610e746113ec565b5f805f610e8385878b876121ff565b9c5091945092509050610e9681846136f2565b610ea09089613550565b9750610eac8284613550565b610eb6908d613550565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee91906136f2565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611ca8565b9950610f73878a6136f2565b9850670de0b6b3a7640000610ff0610f8b8787613550565b600254610fa9908f90600160801b90046001600160801b03166136f2565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119eb565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f612311565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e83611a01565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c788866136f2565b6110d19190613760565b85670de0b6b3a76400006110e5878a6136f2565b6110ef9190613760565b8592919060016123ad565b611a01565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61113484611a01565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a764000086613760565b600554600160801b90046001600160801b031691908a5f6123ad565b600580546001600160801b03928316600160801b0292169190911790556111d286611a01565b6111dc9082613777565b600480546001600160801b03928316600160801b02921691909117905561120284611a01565b600280545f9061121c9084906001600160801b0316613725565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061124983612453565b600480545f9061125d908490600f0b613797565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d85611a01565b600280546010906112af908490600160801b90046001600160801b0316613777565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b9190613563565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b0316848461248e565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f0000000000000000000000000000000000000000000000000000000000000000836124f0565b6003546113ce91906001600160801b0316613550565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611d1a565b5f805f61141d84611a3e565b90925090505f61142d8686611584565b90508183111561144557611442868385612504565b95505b8281101561145757808303925061145b565b5f92505b61146483611cf1565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c381611a01565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b90506115048161251f565b9450845f03611516575f91505061157d565b84915061152960408401602085016135be565b15611558576115518561153f6020860186613596565b61154c60408701876135d9565b61256b565b915061157b565b61157b856115696020860186613596565b61157660408701876135d9565b61263c565b505b9392505050565b5f61157d8383670de0b6b3a7640000612504565b5f805f805f805f806115a86119cb565b90505f6115b48a6120d1565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f00000000000000000000000000000000000000000000000000000000000000006126e8565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119eb565b985061169a84878b886121ff565b9c5091945090925090506116ae82846136f2565b6116b890896136f2565b97506116c48184613550565b6116ce908e6136f2565b9c506116da8a8e613550565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f61171991906136f2565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b6001612311565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba85836136f2565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de8482613563565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d838361273b565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a764000088613760565b6005546001600160801b031691908c5f6123ad565b600580546001600160801b0319166001600160801b039290921691909117905561189788826136f2565b90506118a281611a01565b600380546001600160801b03928316600160801b0292169190911790556118c883611a01565b600280546001600160801b0319166001600160801b03929092169190911790556118f182612453565b600480546001600160801b0319166001600160801b039290921691909117905561191a87611a01565b6002805460109061193c908490600160801b90046001600160801b0316613725565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b5f61131b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612760565b5f6119c182846137d8565b61157d90846136f2565b6002546004545f916105a6916001600160801b0390911690600f0b61273b565b5f61007d826119fb858888612504565b90612782565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f818311611a38578261157d565b50919050565b6006545f908190611a60908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611bd6575f611a8983836136f2565b9050611a986110fa82866127f1565b60068054601090611aba908490600160801b90046001600160801b0316613777565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611af2858361280590919063ffffffff16565b90505f611b1f827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611b329190613550565b90915550611b42905081836136f2565b9150611b4d82611a01565b600280545f90611b679084906001600160801b0316613725565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b9482612819565b600480545f90611ba8908490600f0b613797565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611be78785612805565b91505f611c14837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611c40817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611c6357611c5282826136f2565b611c5c90846136f2565b9250611c7a565b611c6d82826136f2565b611c779084613550565b92505b86861015611c9d57611c8d838789612504565b9250611c9a828789612504565b91505b509550959350505050565b5f80611cbf84611cb98a888a612504565b90612805565b9050611ccc888486612504565b611cd69082613550565b905086811115611ce65786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611d64916001600160801b0316906136f2565b9050805f03611d7757600191505061131b565b5f611d8185612842565b9050805f03611d955760019250505061131b565b5f80611da28385896128dd565b9150915080611db7575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611df2929190613869565b6040805180830381865af4158015611e0c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e3091906138de565b91509150611e4e611e4082611321565b611e4990613900565b612a51565b925082611e63575f965050505050505061131b565b611e6c82611a01565b600780545f90611e869084906001600160801b0316613725565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611eb381611a01565b60078054601090611ed5908490600160801b90046001600160801b0316613725565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f3087612be5565b6040518263ffffffff1660e01b8152600401611f4c919061391a565b6040805180830381865af4158015611f66573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f8a9190613929565b9150915080611f9f57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161200491613550565b61200e91906136f2565b9050805f0361202457505f958695509350505050565b5f808711612032575f61203d565b61203d848884612504565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561206e5761206e613957565b6040519080825280601f01601f191660200182016040528015612098576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156120b8578692505b828152825f602083013e90999098509650505050505050565b5f806120db6105ab565b90508083116120ea575f6120f4565b6120f481846136f2565b915061157d827f0000000000000000000000000000000000000000000000000000000000000000612805565b5f808061214061213888670de0b6b3a76400006136f2565b899087612d1f565b905086156121825761215288886124f0565b91506121738a8a8461216c8a670de0b6b3a76400006136f2565b8989612d42565b925061217f8382613550565b90505b9750975097945050505050565b5f6121ac6121a584670de0b6b3a76400006136f2565b83906124f0565b61157d90670de0b6b3a76400006136f2565b5f806121f4856121cc6119cb565b6121d69190613550565b600254610fa9908790600160801b90046001600160801b03166136f2565b909210949350505050565b5f808080612255878661224e8b6122486122218c670de0b6b3a76400006136f2565b7f0000000000000000000000000000000000000000000000000000000000000000906124f0565b906124f0565b9190612d1f565b9350612281847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f6122a161229989670de0b6b3a76400006136f2565b8a9088612d1f565b90506122cd817f00000000000000000000000000000000000000000000000000000000000000006124f0565b93506122f9847f0000000000000000000000000000000000000000000000000000000000000000611584565b6123039084613550565b915050945094509450949050565b5f805f805f808888101561237d578615612333576123308d898b612504565b9c505b61233e8c898b612504565b9b506123498b611321565b6123528d611321565b61235c9190613563565b90506123698b898b612504565b9a506123768a898b612504565b995061239c565b6123868b611321565b61238f8d611321565b6123999190613563565b90505b9b9c9a9b999a975050505050505050565b5f825f036123bc57508461244a565b811561240e576123ed6123cf8487613550565b6123d98587611584565b6123e3888a611584565b611cb99190613550565b90505f6123fa8588611a2a565b905080821015612408578091505b5061244a565b82850361241c57505f61244a565b61244761242984876136f2565b61243385876124f0565b61243d888a611584565b611cb991906136f2565b90505b95945050505050565b5f60016001607f1b0319821280612470575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f8061249a845f612d64565b6124a4845f612d64565b6124ae9190613563565b90505f8113156124c9576124c28186613550565b94506124e7565b5f8112156124e7576124da81613900565b6124e490866136f2565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612d1f565b5f825f190484118302158202612518575f80fd5b5091020490565b5f61131b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612d79565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f00000000000000000000000000000000000000000000000000000000000000006125c58861196a565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303815f875af1158015612618573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061007d919061396b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb846126758761196a565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303815f875af11580156126bd573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126e19190613982565b5050505050565b5f808061270861270088670de0b6b3a76400006136f2565b899087612504565b905086156121825761271a8888611584565b91506121738a8a846127348a670de0b6b3a76400006136f2565b8989612d9c565b5f806127478484612dac565b909250905080612759576127596113ec565b5092915050565b5f61008061276e8585612de7565b83906b033b2e3c9fd0803ce8000000612504565b5f815f036127995750670de0b6b3a764000061131b565b825f036127a757505f61131b565b5f6127b183611321565b90505f6127c56127c086611321565b612e52565b90508181026127dc670de0b6b3a76400008261399d565b90506127e781613077565b9695505050505050565b5f61157d83670de0b6b3a764000084612d1f565b5f61157d83670de0b6b3a764000084612504565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f90819061285c906001600160801b0316846127f1565b90506128887f000000000000000000000000000000000000000000000000000000000000000082613550565b6002546001600160801b03161115611a38576002547f0000000000000000000000000000000000000000000000000000000000000000906128d39083906001600160801b03166136f2565b61157d91906136f2565b6128e5613443565b5f806128f084612be5565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161292a919061391a565b6040805180830381865af4158015612944573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129689190613929565b935090508261297c57505f9150612a499050565b5f6129a261299d84610160015185610140015161158490919063ffffffff16565b611321565b6129c261299d8561012001518661010001516124f090919063ffffffff16565b6129cc9190613563565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b07573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b2b91906139c9565b935093509350935080612b4657505f98975050505050505050565b868414612b7757612b5684611a01565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ba857612b8783612453565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bd657612bb882611a01565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612bed61348d565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612ce59116613209565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d1792900416613209565b905292915050565b5f825f190484118302158202612d33575f80fd5b50910281810615159190040190565b5f80612d5288888888888861327d565b909250905080611ce657611ce66113ec565b5f818313612d72578161157d565b5090919050565b5f6100806b033b2e3c9fd0803ce8000000612d948686612de7565b849190612504565b5f80612d52888888888888613359565b5f805f83612db986611321565b612dc39190613563565b90505f811215612dd9575f809250925050612de0565b9150600190505b9250929050565b60405163d15e005360e01b81526001600160a01b0383811660048301525f919083169063d15e005390602401602060405180830381865afa158015612e2e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061157d919061396b565b5f808213612e735760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ef69084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361309057505f919050565b680755bf798b4a1bf1e582126130b9576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906127e774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a764000061321c6105ab565b6132269190613760565b9050808311613235575f61323f565b61323f81846136f2565b915061157d613276670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613760565b8390612805565b5f805f61328d8989888888613415565b9050868810156132a3575f80925092505061334e565b96869003966132b28887612782565b9750878110156132c8575f80925092505061334e565b8781036132d6818688612d1f565b9050670de0b6b3a7640000811061330a576133036132fc670de0b6b3a7640000896127f1565b8290612782565b9050613322565b61331f6132fc670de0b6b3a764000089612805565b90505b61332c81866127f1565b905089811015613343575f8093509350505061334e565b899003925060019150505b965096945050505050565b5f805f6133698989888888613415565b9050613379866119fb898b613550565b97508781101561338f575f80925092505061334e565b87810361339d818688612d1f565b9050670de0b6b3a764000081106133ca576133c36132fc670de0b6b3a7640000896127f1565b90506133e2565b6133df6132fc670de0b6b3a764000089612805565b90505b6133ec81866127f1565b9050808a1015613403575f8093509350505061334e565b90980398600198509650505050505050565b5f6134208585612782565b613439613431866119fb868b6124f0565b859085612d1f565b6124479190613550565b60405180610120016040528061345761348d565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f80608085870312156134f5575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613520575f80fd5b850160608188031215613531575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b61353c565b8181035f8312801583831316838312821617156127595761275961353c565b6001600160a01b0381168114610591575f80fd5b5f602082840312156135a6575f80fd5b813561157d81613582565b8015158114610591575f80fd5b5f602082840312156135ce575f80fd5b813561157d816135b1565b5f808335601e198436030181126135ee575f80fd5b83018035915067ffffffffffffffff821115613608575f80fd5b602001915036819003821315612de0575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61367d60e08301848661361c565b9a9950505050505050505050565b8082018281125f8312801582168215821617156136aa576136aa61353c565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6136e560c08301848661361c565b9998505050505050505050565b8181038181111561131b5761131b61353c565b6001600160701b038181168382160190808211156127595761275961353c565b6001600160801b038181168382160190808211156127595761275961353c565b5f60208284031215613755575f80fd5b815161157d81613582565b808202811582820484141761131b5761131b61353c565b6001600160801b038281168282160390808211156127595761275961353c565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b61353c565b634e487b7160e01b5f52601260045260245ffd5b5f826137e6576137e66137c4565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a08201905061387c8285516137eb565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f80604083850312156138ef575f80fd5b505080516020909101519092909150565b5f600160ff1b82016139145761391461353c565b505f0390565b610180810161131b82846137eb565b5f806040838503121561393a575f80fd5b82519150602083015161394c816135b1565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f6020828403121561397b575f80fd5b5051919050565b5f60208284031215613992575f80fd5b815161157d816135b1565b5f826139ab576139ab6137c4565b600160ff1b82145f19841416156139c4576139c461353c565b500590565b5f805f80608085870312156139dc575f80fd5b8451935060208501519250604085015191506060850151613531816135b156fea2646970667358221220ffd4608be92ebf531250a8b092ba0a9fbd5bb6616b3a693592e6f59d4f6096de64736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
