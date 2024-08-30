export const AaveTarget4 = {
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
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200385838038062003858833981016040819052620000359162000578565b600160005581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013a9190620006b5565b6001600160a01b039081166102808190526080516200015d921690600162000165565b50506200072a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bf90859083906200023116565b6200022b57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021f918691620002e216565b6200022b8482620002e2565b50505050565b6000806000846001600160a01b031684604051620002509190620006d5565b6000604051808303816000865af19150503d80600081146200028f576040519150601f19603f3d011682016040523d82523d6000602084013e62000294565b606091505b5091509150818015620002c2575080511580620002c2575080806020019051810190620002c2919062000706565b8015620002d957506000856001600160a01b03163b115b95945050505050565b6000620002f96001600160a01b0384168362000355565b90508051600014158015620003215750808060200190518101906200031f919062000706565b155b156200035057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000365838360006200036c565b9392505050565b606081471015620003935760405163cd78605960e01b815230600482015260240162000347565b600080856001600160a01b03168486604051620003b19190620006d5565b60006040518083038185875af1925050503d8060008114620003f0576040519150601f19603f3d011682016040523d82523d6000602084013e620003f5565b606091505b5090925090506200040886838362000412565b9695505050505050565b6060826200042b57620004258262000476565b62000365565b81511580156200044357506001600160a01b0384163b155b156200046e57604051639996b31560e01b81526001600160a01b038516600482015260240162000347565b508062000365565b805115620004875780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004d557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004a057600080fd5b8051620004fe81620004db565b919050565b6000608082840312156200051657600080fd5b604051608081016001600160401b03811182821017156200054757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102808112156200058e57600080fd5b610260808212156200059f57600080fd5b620005a9620004a3565b9150620005b685620004f1565b8252620005c660208601620004f1565b6020830152620005d960408601620004f1565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000644818701620004f1565b9083015261018062000658868201620004f1565b908301526101a06200066c868201620004f1565b908301526101c062000680868201620004f1565b908301526101e0620006958787830162000503565b8184015250819350620006aa818601620004f1565b925050509250929050565b600060208284031215620006c857600080fd5b81516200036581620004db565b6000825160005b81811015620006f85760208186018101518583015201620006dc565b506000920191825250919050565b6000602082840312156200071957600080fd5b815180151581146200036557600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051612fec6200086c600039600081816110fc015281816122df01526123080152600050506000505060006109c10152600050506000818161026d0152611fa60152600081816117ec0152818161184f01528181611b8b01528181611bc701528181611dbf0152611f8001526000818161056f0152611f5a015260006113c10152600061151c01526000818161073301526114f0015260005050600081816105900152611fcc01526000818161066b01526124f90152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb0152610623015260006123db0152600081816110db015281816122be01526123370152612fec6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612a79565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612ad0565b6100b5565b005b610059610095366004612a79565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610ad0565b90935091506101266020850185612b07565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612b32565b61017160408c018c612b4f565b60405161018396959493929190612bbf565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610c13565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612c0f565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610e0e565b6102eb600360f81b6102e56020870187612b07565b88610ee8565b60006103066102fd6020870187612b07565b88848989610ad0565b90945090506103158188612c39565b9250600061032283610f88565b5090506103326020870187612b07565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612b32565b8a888e80604001906103829190612b4f565b604051610396989796959493929190612c4c565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612b07565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a76400006110d4565b905090565b6000610421427f0000000000000000000000000000000000000000000000000000000000000000611121565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610ac8565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612c94565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a61113e565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061115f565b92505b506105c18361117f565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612c39565b8a846111ad565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612c94565b42906112eb565b846111ad565b61065e88611300565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612c39565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c6114a4565b6000818152600b60205260408120549192508c8c831561080257600192506000806106eb86898d8660006114d9565b9150915080600960008282546107019190612c94565b9091555061071d905086600084610717816115a8565b886115d2565b6107278183612c94565b915061075786838a8e877f000000000000000000000000000000000000000000000000000000000000000061174c565b915061076b6107668385611796565b6117ab565b6006805460029061078c9084906201000090046001600160701b0316612ca7565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b98261117f565b600680546010906107db908490600160801b90046001600160801b0316612cc7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f6001846114a4565b6000818152600b6020526040902054909150801561091e576001945060008061083c838b8f8860016114d9565b9150915080600960008282546108529190612c94565b9091555061086e905083600084610868816115a8565b8a6117d5565b6108788183612c39565b91506108876107668387611796565b600680546002906108a89084906201000090046001600160701b0316612ca7565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d58261117f565b600680546010906108f7908490600160801b90046001600160801b0316612cc7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a610930876115a8565b610939836115a8565b6109439190612ce7565b60006119c6565b8e6109558482610c13565b50505b600061096384610f88565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190612d07565b90506001600160a01b03811615610ab657610ab35a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a05565b50505b509b9d50505050505050505050505050505b949350505050565b600080610adc85611a90565b505060075485906001600160801b031680821115610b0157806001600160801b031691505b81600003610b16576000809250925050610c09565b610b25600360f81b8984610e0e565b600754600090610b4b9084906001600160801b03600160801b9091048116908516611a9d565b9050610b568361117f565b610b609083612d24565b600780546001600160801b0319166001600160801b0392909216919091179055610b898161117f565b60078054601090610bab908490600160801b90046001600160801b0316612d24565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bda818887611abb565b9350610be68684611b54565b841015610c065760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c5e916001600160801b031690612c39565b905080600003610c72576001915050610e08565b6000610c7d85611b69565b905080600003610c9257600192505050610e08565b600080610ca0838589611c05565b9150915080610cb6576000945050505050610e08565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cf2929190612dc2565b6040805180830381865af4158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190612e38565b91509150610d50610d42826115a8565b610d4b90612e5c565b611d79565b925082610d665760009650505050505050610e08565b610d6f8261117f565b60078054600090610d8a9084906001600160801b0316612cc7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610db78161117f565b60078054601090610dd9908490600160801b90046001600160801b0316612cc7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e94908490612c39565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f1a908490612c94565b90915550506000838152600b602052604081208054839290610f3d908490612c94565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610edb565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb187611f11565b6040518263ffffffff1660e01b8152600401610fcd9190612e78565b6040805180830381865af4158015610fe9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100d9190612e87565b9150915080611023575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108991612c94565b6110939190612c39565b9050806000036110ab57506000958695509350505050565b60008087116110bb5760006110c6565b6110c6848884611a9d565b976001975095505050505050565b6000610e087f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461204b565b600061112d8284612c0f565b6111379084612c39565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b61206e565b600061117682611170858888611a9d565b90612094565b95945050505050565b60006001600160801b038211156111a957604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036111d95750505050565b6000848152600860205260408120546001600160801b031690819003611233576112028361117f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112b1565b61128461127f670de0b6b3a764000061124c8886612c39565b6112569190612eb7565b85670de0b6b3a764000061126a878a612c39565b6112749190612eb7565b859291906001612109565b61117f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112ba8461117f565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116112fa5782611137565b50919050565b6006546000908190611323908490600160801b90046001600160801b0316611796565b6006546201000090046001600160701b0316925090508181111561149f57600061134d8383612c39565b905061135c61127f82866121a7565b6006805460109061137e908490600160801b90046001600160801b0316612d24565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113b785836121bc90919063ffffffff16565b905060006113e5827f0000000000000000000000000000000000000000000000000000000000000000611796565b905080600960008282546113f99190612c94565b9091555061140990508183612c39565b91506114148261117f565b6002805460009061142f9084906001600160801b0316612cc7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061145c826121d1565b60048054600090611471908490600f0b612ece565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114ce5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806114e687856121bc565b91506000611514837f0000000000000000000000000000000000000000000000000000000000000000611796565b9050611540817f0000000000000000000000000000000000000000000000000000000000000000611796565b91508315611563576115528282612c39565b61155c9084612c39565b925061157a565b61156d8282612c39565b6115779084612c94565b92505b8686101561159d5761158d838789611a9d565b925061159a828789611a9d565b91505b509550959350505050565b60006001600160ff1b038211156111a95760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661161b61127f826115fe670de0b6b3a764000086612eb7565b600554600160801b90046001600160801b031691908a6000612109565b600580546001600160801b03928316600160801b0292169190911790556116418661117f565b61164b9082612d24565b600480546001600160801b03928316600160801b0292169190911790556116718461117f565b6002805460009061168c9084906001600160801b0316612cc7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116b9836121fb565b600480546000906116ce908490600f0b612ece565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116fe8561117f565b60028054601090611720908490600160801b90046001600160801b0316612d24565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117648461175e8a888a611a9d565b906121bc565b9050611771888486611a9d565b61177b9082612c94565b90508681111561178b5786810391505b509695505050505050565b60006111378383670de0b6b3a7640000611a9d565b60006001600160701b038211156111a95760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061181757507f00000000000000000000000000000000000000000000000000000000000000006118158583612c39565b105b1561182457611824612237565b6004549084900390600f0b6118398482612ce7565b905083611845866115a8565b13801561187a57507f0000000000000000000000000000000000000000000000000000000000000000611878838361206e565b105b1561188757611887612237565b600354600160801b90046001600160801b03166118c961127f826118b3670de0b6b3a764000088612eb7565b6005546001600160801b031691908c6000612109565b600580546001600160801b0319166001600160801b03929092169190911790556118f38882612c39565b90506118fe8161117f565b600380546001600160801b03928316600160801b0292169190911790556119248361117f565b600280546001600160801b0319166001600160801b039290921691909117905561194d826121fb565b600480546001600160801b0319166001600160801b03929092169190911790556119768761117f565b60028054601090611998908490600160801b90046001600160801b0316612cc7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546119e19061127f906001600160801b03168484612250565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a2b57611a2b612efb565b6040519080825280601f01601f191660200182016040528015611a55576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611a76578692505b828152826000602083013e90999098509650505050505050565b6000610e08826004610c13565b6000826000190484118302158202611ab457600080fd5b5091020490565b600080611ac88585611796565b9050611ad3816122b7565b945084600003611ae7576000915050611137565b849150611afa6040840160208501612b32565b15611b2957611b2285611b106020860186612b07565b611b1d6040870187612b4f565b612304565b9150611b4c565b611b4c85611b3a6020860186612b07565b611b476040870187612b4f565b6123d9565b509392505050565b60006111378383670de0b6b3a7640000612488565b6003546000908190611b84906001600160801b0316846121a7565b9050611bb07f000000000000000000000000000000000000000000000000000000000000000082612c94565b6002546001600160801b031611156112fa576002547f000000000000000000000000000000000000000000000000000000000000000090611bfb9083906001600160801b0316612c39565b6111379190612c39565b611c0d6129c6565b600080611c1984611f11565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c549190612e78565b6040805180830381865af4158015611c70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c949190612e87565b9350905082611ca95750600091506100ad9050565b6000611cd0611ccb84610160015185610140015161179690919063ffffffff16565b6115a8565b611cf0611ccb856101200151866101000151611b5490919063ffffffff16565b611cfa9190612ce7565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e569190612f11565b935093509350935080611e725750600098975050505050505050565b868414611ea357611e828461117f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611ed457611eb3836121fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f0257611ee48261117f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f19612a18565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161201191166124ae565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612043929004166124ae565b905292915050565b6000610ac861205a8585612524565b83906b033b2e3c9fd0803ce8000000611a9d565b60008061207b8484612592565b90925090508061208d5761208d612237565b5092915050565b6000816000036120ad5750670de0b6b3a7640000610e08565b826000036120bd57506000610e08565b60006120c8836115a8565b905060006120dd6120d8866115a8565b6125d1565b90508181026120f4670de0b6b3a764000082612f52565b90506120ff816127f7565b9695505050505050565b60008260000361211a575084611176565b811561216d5761214b61212d8487612c94565b6121378587611796565b612141888a611796565b61175e9190612c94565b9050600061215985886112eb565b905080821015612167578091505b50611176565b82850361217c57506000611176565b6120ff6121898487612c39565b6121938587611b54565b61219d888a611796565b61175e9190612c39565b600061113783670de0b6b3a764000084612488565b600061113783670de0b6b3a764000084611a9d565b600060016001607f1b038211156111a95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612219575060016001607f1b0382135b156111a95760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b60008061225e84600061298c565b61226984600061298c565b6122739190612ce7565b9050600081131561228f576122888186612c94565b94506122ae565b60008112156122ae576122a181612e5c565b6122ab9086612c39565b94505b50929392505050565b6000610e087f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846129a2565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f000000000000000000000000000000000000000000000000000000000000000061235f886110d4565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303816000875af11580156123b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111769190612f80565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb84612412876110d4565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561245d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124819190612f99565b5050505050565b600082600019048411830215820261249f57600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006124c2610426565b6124cc9190612eb7565b90508083116124dc5760006124e6565b6124e68184612c39565b915061113761251d670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612eb7565b83906121bc565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa15801561256e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111379190612f80565b6000806000836125a1866115a8565b6125ab9190612ce7565b905060008112156125c35760008092509250506125ca565b9150600190505b9250929050565b60008082136125f35760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906126769084901c6115a8565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361281257506000919050565b680755bf798b4a1bf1e5821261283b576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120ff74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115a8565b600081831361299b5781611137565b5090919050565b6000610ac86b033b2e3c9fd0803ce80000006129be8686612524565b849190611a9d565b6040518061012001604052806129da612a18565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612a8e57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612ab357600080fd5b840160608187031215612ac557600080fd5b809150509250925092565b60008060408385031215612ae357600080fd5b50508035926020909101359150565b6001600160a01b038116811461040b57600080fd5b600060208284031215612b1957600080fd5b813561113781612af2565b801515811461040b57600080fd5b600060208284031215612b4457600080fd5b813561113781612b24565b6000808335601e19843603018112612b6657600080fd5b83018035915067ffffffffffffffff821115612b8157600080fd5b6020019150368190038213156125ca57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612bed60a083018486612b96565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612c1e57612c1e612bf9565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0857610e08612c23565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612c8660e083018486612b96565b9a9950505050505050505050565b80820180821115610e0857610e08612c23565b6001600160701b0381811683821601908082111561208d5761208d612c23565b6001600160801b0381811683821601908082111561208d5761208d612c23565b818103600083128015838313168383128216171561208d5761208d612c23565b600060208284031215612d1957600080fd5b815161113781612af2565b6001600160801b0382811682821603908082111561208d5761208d612c23565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612dd6828551612d44565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612e4b57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612e7157612e71612c23565b5060000390565b6101808101610e088284612d44565b60008060408385031215612e9a57600080fd5b825191506020830151612eac81612b24565b809150509250929050565b8082028115828204841417610e0857610e08612c23565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0857610e08612c23565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612f2757600080fd5b8451935060208501519250604085015191506060850151612f4781612b24565b939692955090935050565b600082612f6157612f61612bf9565b600160ff1b821460001984141615612f7b57612f7b612c23565b500590565b600060208284031215612f9257600080fd5b5051919050565b600060208284031215612fab57600080fd5b815161113781612b2456fea26469706673582212206d15420312c10c0f4961d98962f6b9d15e496410cc84124299e27fd2a53adf6d64736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
