export const AaveL2Target4 = {
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
            "name": "checkpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "redeemWithdrawalShares",
            "inputs": [
                {
                    "name": "_withdrawalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
                },
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
            "name": "removeLiquidity",
            "inputs": [
                {
                    "name": "_lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
                },
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
            "name": "InvalidCheckpointTime",
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
    bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003a6e38038062003a6e83398101604081905262000034916200055e565b60015f5581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000110573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000136919062000698565b6001600160a01b0390811661028081905260805162000159921690600162000161565b505062000705565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bb90859083906200022c16565b6200022657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021a918691620002d616565b620002268482620002d6565b50505050565b5f805f846001600160a01b031684604051620002499190620006b6565b5f604051808303815f865af19150503d805f811462000284576040519150601f19603f3d011682016040523d82523d5f602084013e62000289565b606091505b5091509150818015620002b7575080511580620002b7575080806020019051810190620002b79190620006e4565b8015620002cd57505f856001600160a01b03163b115b95945050505050565b5f620002ec6001600160a01b0384168362000347565b905080515f1415801562000313575080806020019051810190620003119190620006e4565b155b156200034257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200035683835f6200035d565b9392505050565b606081471015620003845760405163cd78605960e01b815230600482015260240162000339565b5f80856001600160a01b03168486604051620003a19190620006b6565b5f6040518083038185875af1925050503d805f8114620003dd576040519150601f19603f3d011682016040523d82523d5f602084013e620003e2565b606091505b509092509050620003f5868383620003ff565b9695505050505050565b6060826200041857620004128262000463565b62000356565b81511580156200043057506001600160a01b0384163b155b156200045b57604051639996b31560e01b81526001600160a01b038516600482015260240162000339565b508062000356565b805115620004745780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004c057634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b03811681146200048d575f80fd5b8051620004e881620004c6565b919050565b5f60808284031215620004fe575f80fd5b604051608081016001600160401b03811182821017156200052d57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f8082840361028081121562000572575f80fd5b6102608082121562000582575f80fd5b6200058c62000490565b91506200059985620004db565b8252620005a960208601620004db565b6020830152620005bc60408601620004db565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000627818701620004db565b908301526101806200063b868201620004db565b908301526101a06200064f868201620004db565b908301526101c062000663868201620004db565b908301526101e06200067887878301620004ed565b81840152508193506200068d818601620004db565b925050509250929050565b5f60208284031215620006a9575f80fd5b81516200035681620004c6565b5f82515f5b81811015620006d75760208186018101518583015201620006bb565b505f920191825250919050565b5f60208284031215620006f5575f80fd5b8151801515811462000356575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516102805161322c620008425f395f81816110aa01528181612242015281816122b401526129c001525f50505f50505f61099201525f50505f818161025f0152611f1f01525f818161177f015281816117e201528181611b0f01528181611b4b01528181611d3c0152611ef901525f81816105500152611ed301525f61136101525f6114b601525f818161070d015261148a01525f50505f81816105710152611f4501525f818161064b01526124dd01525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f6123c701525f8181611089015281816122210152818161226e015261234f015261322c5ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b610056610051366004612af9565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d366004612b4b565b6100b1565b005b610056610092366004612af9565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f6020850185612b7f565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612ba7565b61016a60408c018c612bc2565b60405161017c96959493929190612c2d565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612c7a565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d56020870187612b7f565b88610ea4565b5f6102f56102ec6020870187612b7f565b88848989610a9e565b90945090506103048188612ca1565b92505f61031083610f41565b5090506103206020870187612b7f565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612ba7565b8a888e80604001906103709190612bc2565b604051610384989796959493929190612cb4565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce6020830183612b7f565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f00000000000000000000000000000000000000000000000000000000000000006110cf565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612cfb565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b6110eb565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061110b565b92505b506105a28361112a565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612ca1565b8a84611157565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612cfb565b4290611290565b84611157565b61063f886112a4565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612ca1565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c611441565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f611475565b915091508060095f8282546106dc9190612cfb565b909155506106f79050865f846106f181611542565b8861156b565b6107018183612cfb565b915061073186838a8e877f00000000000000000000000000000000000000000000000000000000000000006116e2565b9150610745610740838561172b565b61173f565b600680546002906107669084906201000090046001600160701b0316612d0e565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107938261112a565b600680546010906107b5908490600160801b90046001600160801b0316612d2e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e8600184611441565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f886001611475565b915091508060095f8282546108289190612cfb565b909155506108439050835f8461083d81611542565b8a611768565b61084d8183612ca1565b915061085c610740838761172b565b6006805460029061087d9084906201000090046001600160701b0316612d0e565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa8261112a565b600680546010906108cc908490600160801b90046001600160801b0316612d2e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e61090587611542565b61090e83611542565b6109189190612d4e565b5f611958565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612d7d565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611997565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa985611a1d565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611a29565b9050610b208361112a565b610b2a9083612d98565b600780546001600160801b0319166001600160801b0392909216919091179055610b538161112a565b60078054601090610b75908490600160801b90046001600160801b0316612d98565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611a44565b9350610bb08684611ada565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612ca1565b9050805f03610c3a576001915050610dc7565b5f610c4485611aee565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611b89565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612e36565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612eab565b91509150610d11610d0382611542565b610d0c90612ecd565b611cf6565b925082610d26575f9650505050505050610dc7565b610d2f8261112a565b600780545f90610d499084906001600160801b0316612d2e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d768161112a565b60078054601090610d98908490600160801b90046001600160801b0316612d2e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612ca1565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612cfb565b90915550505f838152600b602052604081208054839290610ef7908490612cfb565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611e8a565b6040518263ffffffff1660e01b8152600401610f849190612ee7565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612ef6565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612cfb565b6110469190612ca1565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611a29565b976001975095505050505050565b5f610dc77f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084611fc4565b5f6110da8284612c7a565b6110e49084612ca1565b9392505050565b6002546004545f9161040a916001600160801b0390911690600f0b611fe6565b5f6111218261111b858888611a29565b9061200b565b95945050505050565b5f6001600160801b0382111561115357604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b03168083036111825750505050565b5f848152600860205260408120546001600160801b0316908190036111da576111aa8361112a565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611257565b61122b611226670de0b6b3a76400006111f38886612ca1565b6111fd9190612f24565b85670de0b6b3a7640000611211878a612ca1565b61121b9190612f24565b85929190600161207a565b61112a565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112608461112a565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f81831161129e57826110e4565b50919050565b6006545f9081906112c6908490600160801b90046001600160801b031661172b565b6006546201000090046001600160701b0316925090508181111561143c575f6112ef8383612ca1565b90506112fe6112268286612114565b60068054601090611320908490600160801b90046001600160801b0316612d98565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611358858361212890919063ffffffff16565b90505f611385827f000000000000000000000000000000000000000000000000000000000000000061172b565b90508060095f8282546113989190612cfb565b909155506113a890508183612ca1565b91506113b38261112a565b600280545f906113cd9084906001600160801b0316612d2e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113fa8261213c565b600480545f9061140e908490600f0b612f3b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b0382111561146a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f806114818785612128565b91505f6114ae837f000000000000000000000000000000000000000000000000000000000000000061172b565b90506114da817f000000000000000000000000000000000000000000000000000000000000000061172b565b915083156114fd576114ec8282612ca1565b6114f69084612ca1565b9250611514565b6115078282612ca1565b6115119084612cfb565b92505b8686101561153757611527838789611a29565b9250611534828789611a29565b91505b509550959350505050565b5f6001600160ff1b038211156111535760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115b361122682611597670de0b6b3a764000086612f24565b600554600160801b90046001600160801b031691908a5f61207a565b600580546001600160801b03928316600160801b0292169190911790556115d98661112a565b6115e39082612d98565b600480546001600160801b03928316600160801b0292169190911790556116098461112a565b600280545f906116239084906001600160801b0316612d2e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061165083612165565b600480545f90611664908490600f0b612f3b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116948561112a565b600280546010906116b6908490600160801b90046001600160801b0316612d98565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806116f9846116f38a888a611a29565b90612128565b9050611706888486611a29565b6117109082612cfb565b9050868111156117205786810391505b509695505050505050565b5f6110e48383670de0b6b3a7640000611a29565b5f6001600160701b038211156111535760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117aa57507f00000000000000000000000000000000000000000000000000000000000000006117a88583612ca1565b105b156117b7576117b76121a0565b6004549084900390600f0b6117cc8482612d4e565b9050836117d886611542565b13801561180d57507f000000000000000000000000000000000000000000000000000000000000000061180b8383611fe6565b105b1561181a5761181a6121a0565b600354600160801b90046001600160801b031661185b61122682611846670de0b6b3a764000088612f24565b6005546001600160801b031691908c5f61207a565b600580546001600160801b0319166001600160801b03929092169190911790556118858882612ca1565b90506118908161112a565b600380546001600160801b03928316600160801b0292169190911790556118b68361112a565b600280546001600160801b0319166001600160801b03929092169190911790556118df82612165565b600480546001600160801b0319166001600160801b03929092169190911790556119088761112a565b6002805460109061192a908490600160801b90046001600160801b0316612d2e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461197390611226906001600160801b031684846121b9565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff8111156119ba576119ba612f68565b6040519080825280601f01601f1916602001820160405280156119e4576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611a04578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611a3d575f80fd5b5091020490565b5f80611a50858561172b565b9050611a5b8161221b565b9450845f03611a6d575f9150506110e4565b849150611a806040840160208501612ba7565b15611aaf57611aa885611a966020860186612b7f565b611aa36040870187612bc2565b612267565b9150611ad2565b611ad285611ac06020860186612b7f565b611acd6040870187612bc2565b6123c5565b509392505050565b5f6110e48383670de0b6b3a7640000612471565b6003545f908190611b08906001600160801b031684612114565b9050611b347f000000000000000000000000000000000000000000000000000000000000000082612cfb565b6002546001600160801b0316111561129e576002547f000000000000000000000000000000000000000000000000000000000000000090611b7f9083906001600160801b0316612ca1565b6110e49190612ca1565b611b91612a5a565b5f80611b9c84611e8a565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611bd69190612ee7565b6040805180830381865af4158015611bf0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c149190612ef6565b9350905082611c2857505f91506100a99050565b5f611c4e611c4984610160015185610140015161172b90919063ffffffff16565b611542565b611c6e611c49856101200151866101000151611ada90919063ffffffff16565b611c789190612d4e565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611dac573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611dd09190612f7c565b935093509350935080611deb57505f98975050505050505050565b868414611e1c57611dfb8461112a565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e4d57611e2c83612165565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611e7b57611e5d8261112a565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611e92612aa4565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611f8a9116612494565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611fbc92900416612494565b905292915050565b5f610a96611fd28585612508565b83906b033b2e3c9fd0803ce8000000611a29565b5f80611ff28484612573565b909250905080612004576120046121a0565b5092915050565b5f815f036120225750670de0b6b3a7640000610dc7565b825f0361203057505f610dc7565b5f61203a83611542565b90505f61204e61204986611542565b6125ae565b9050818102612065670de0b6b3a764000082612fba565b9050612070816127d3565b9695505050505050565b5f825f03612089575084611121565b81156120db576120ba61209c8487612cfb565b6120a6858761172b565b6120b0888a61172b565b6116f39190612cfb565b90505f6120c78588611290565b9050808210156120d5578091505b50611121565b8285036120e957505f611121565b6120706120f68487612ca1565b6121008587611ada565b61210a888a61172b565b6116f39190612ca1565b5f6110e483670de0b6b3a764000084612471565b5f6110e483670de0b6b3a764000084611a29565b5f60016001607f1b038211156111535760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612182575060016001607f1b0382135b156111535760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f806121c5845f612965565b6121cf845f612965565b6121d99190612d4e565b90505f8113156121f4576121ed8186612cfb565b9450612212565b5f8112156122125761220581612ecd565b61220f9086612ca1565b94505b50929392505050565b5f610dc77f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461297a565b5f8061229b7f000000000000000000000000000000000000000000000000000000000000000061229688611083565b61299d565b60405163470cc4cf60e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638e19899e906024016020604051808303815f875af1158015612302573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123269190612fe6565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018390529193507f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb906044016020604051808303815f875af1158015612397573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123bb9190612ffd565b5050949350505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb846123fe87611083565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303815f875af1158015612446573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061246a9190612ffd565b5050505050565b5f825f190484118302158202612485575f80fd5b50910281810615159190040190565b5f80670de0b6b3a76400006124a761040f565b6124b19190612f24565b90508083116124c0575f6124ca565b6124ca8184612ca1565b91506110e4612501670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612f24565b8390612128565b60405163d15e005360e01b81526001600160a01b0383811660048301525f919083169063d15e005390602401602060405180830381865afa15801561254f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110e49190612fe6565b5f805f8361258086611542565b61258a9190612d4e565b90505f8112156125a0575f8092509250506125a7565b9150600190505b9250929050565b5f8082136125cf5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906126529084901c611542565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136127ec57505f919050565b680755bf798b4a1bf1e58212612815576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061207074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611542565b5f81831361297357816110e4565b5090919050565b5f610a966b033b2e3c9fd0803ce80000006129958686612508565b849190611a29565b6040516335ea6a7560e01b81526001600160a01b0383811660048301525f9182917f000000000000000000000000000000000000000000000000000000000000000016906335ea6a75906024016101e060405180830381865afa158015612a06573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a2a91906130d5565b60e08101519091505f5f198514612a415784612a4a565b6001600160801b035b60101b9190910195945050505050565b604051806101200160405280612a6e612aa4565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612b0b575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612b2f575f80fd5b840160608187031215612b40575f80fd5b809150509250925092565b5f8060408385031215612b5c575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f60208284031215612b8f575f80fd5b81356110e481612b6b565b80151581146103f5575f80fd5b5f60208284031215612bb7575f80fd5b81356110e481612b9a565b5f808335601e19843603018112612bd7575f80fd5b83018035915067ffffffffffffffff821115612bf1575f80fd5b6020019150368190038213156125a7575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612c5a60a083018486612c05565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612c8857612c88612c66565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612c8d565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612ced60e083018486612c05565b9a9950505050505050505050565b80820180821115610dc757610dc7612c8d565b6001600160701b0381811683821601908082111561200457612004612c8d565b6001600160801b0381811683821601908082111561200457612004612c8d565b8181035f83128015838313168383128216171561200457612004612c8d565b8051612d7881612b6b565b919050565b5f60208284031215612d8d575f80fd5b81516110e481612b6b565b6001600160801b0382811682821603908082111561200457612004612c8d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612e49828551612db8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612ebc575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612ee157612ee1612c8d565b505f0390565b6101808101610dc78284612db8565b5f8060408385031215612f07575f80fd5b825191506020830151612f1981612b9a565b809150509250929050565b8082028115828204841417610dc757610dc7612c8d565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612c8d565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612f8f575f80fd5b8451935060208501519250604085015191506060850151612faf81612b9a565b939692955090935050565b5f82612fc857612fc8612c66565b600160ff1b82145f1984141615612fe157612fe1612c8d565b500590565b5f60208284031215612ff6575f80fd5b5051919050565b5f6020828403121561300d575f80fd5b81516110e481612b9a565b6040516101e0810167ffffffffffffffff8111828210171561304857634e487b7160e01b5f52604160045260245ffd5b60405290565b5f6020828403121561305e575f80fd5b6040516020810181811067ffffffffffffffff8211171561308d57634e487b7160e01b5f52604160045260245ffd5b6040529151825250919050565b80516001600160801b0381168114612d78575f80fd5b805164ffffffffff81168114612d78575f80fd5b805161ffff81168114612d78575f80fd5b5f6101e082840312156130e6575f80fd5b6130ee613018565b6130f8848461304e565b81526131066020840161309a565b60208201526131176040840161309a565b60408201526131286060840161309a565b60608201526131396080840161309a565b608082015261314a60a0840161309a565b60a082015261315b60c084016130b0565b60c082015261316c60e084016130c4565b60e082015261010061317f818501612d6d565b90820152610120613191848201612d6d565b908201526101406131a3848201612d6d565b908201526101606131b5848201612d6d565b908201526101806131c784820161309a565b908201526101a06131d984820161309a565b908201526101c06131eb84820161309a565b90820152939250505056fea2646970667358221220173c1d6628f106d9671541f080af69e51f8a356bed447913f2d707c21468971864736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
