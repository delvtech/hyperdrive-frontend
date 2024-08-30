export const AaveTarget2 = {
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
            "name": "openLong",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "openShort",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxDeposit",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
            "name": "MinimumSharePrice",
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
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200493c3803806200493c833981016040819052620000359162000578565b600160005581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013a9190620006b5565b6001600160a01b039081166102808190526080516200015d921690600162000165565b50506200072a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bf90859083906200023116565b6200022b57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021f918691620002e216565b6200022b8482620002e2565b50505050565b6000806000846001600160a01b031684604051620002509190620006d5565b6000604051808303816000865af19150503d80600081146200028f576040519150601f19603f3d011682016040523d82523d6000602084013e62000294565b606091505b5091509150818015620002c2575080511580620002c2575080806020019051810190620002c2919062000706565b8015620002d957506000856001600160a01b03163b115b95945050505050565b6000620002f96001600160a01b0384168362000355565b90508051600014158015620003215750808060200190518101906200031f919062000706565b155b156200035057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000365838360006200036c565b9392505050565b606081471015620003935760405163cd78605960e01b815230600482015260240162000347565b600080856001600160a01b03168486604051620003b19190620006d5565b60006040518083038185875af1925050503d8060008114620003f0576040519150601f19603f3d011682016040523d82523d6000602084013e620003f5565b606091505b5090925090506200040886838362000412565b9695505050505050565b6060826200042b57620004258262000476565b62000365565b81511580156200044357506001600160a01b0384163b155b156200046e57604051639996b31560e01b81526001600160a01b038516600482015260240162000347565b508062000365565b805115620004875780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004d557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004a057600080fd5b8051620004fe81620004db565b919050565b6000608082840312156200051657600080fd5b604051608081016001600160401b03811182821017156200054757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102808112156200058e57600080fd5b610260808212156200059f57600080fd5b620005a9620004a3565b9150620005b685620004f1565b8252620005c660208601620004f1565b6020830152620005d960408601620004f1565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000644818701620004f1565b9083015261018062000658868201620004f1565b908301526101a06200066c868201620004f1565b908301526101c062000680868201620004f1565b908301526101e0620006958787830162000503565b8184015250819350620006aa818601620004f1565b925050509250929050565b600060208284031215620006c857600080fd5b81516200036581620004db565b6000825160005b81811015620006f85760208186018101518583015201620006dc565b506000920191825250919050565b6000602082840312156200071957600080fd5b815180151581146200036557600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516102805161401e6200091e600039600081816116a3015281816117510152818161267a0152612978015260005050600050506000610c4101526000505060008181610100015281816103100152612f270152600081816114d801528181611dd701528181611e3a015281816125ec01528181612b0c01528181612b4801528181612d400152612f010152600081816107ef01528181610da101528181610de301528181610ed50152818161134b015281816113aa0152612edb015260006119f6015260008181611b1c0152818161272e015281816127a701526130410152600081816109b301528181610e560152818161144501528181611af0015261277b015260008181610e35015281816126fa0152612ffd01526000818161081001528181610d7f01528181610e0401528181610ef601528181611329015281816113cb0152612f4d0152600081816101de015281816103a8015281816108eb015261364e0152600081816106a9015281816107290152818161079f0152818161086b01526108a3015260006117c7015260008181611676015281816116d701528181611715015281816126590152612957015261401e6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613a72565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613a72565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610d50565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c89190613ae7565b909155506101d99050844283610f32565b6102037f000000000000000000000000000000000000000000000000000000000000000085613ae7565b98506102118389888c611070565b600061021e60018b61120a565b90506102378161023160208e018e613b0f565b8b61123f565b8d8a8a898e8561024a6020830183613b0f565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613b3a565b8961029560408a018a613b57565b6040516102a89796959493929190613bc7565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112e7565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613ae7565b90506000806000806103e08e89886112fa565b60098054949850929650909450925083916000906103ff908490613ae7565b909155506104109050874283610f32565b50600061041e84898d611480565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b896114b2565b600061046860028861120a565b90508c6104828261047c6020840184613b0f565b8561123f565b858b86846104936020860186613b0f565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613b3a565b6104e4896104de8a8d613c08565b90610683565b8d6104f260408e018e613b57565b604051610506989796959493929190613c1b565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b60006105846020830183613b0f565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c26040850160208601613b3a565b156105e7576105dd856105d86040870187613b57565b611666565b90935090506105ff565b50346105ff856105fa6040870187613b57565b6117c5565b6106076112e7565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a764000061187d565b90505b92915050565b60006106cd427f000000000000000000000000000000000000000000000000000000000000000061189b565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610d48565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b613ae7565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da6118b1565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d2565b92505b50610841836118f2565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613c08565b8a84610f32565b6108d5896108cf6108c87f000000000000000000000000000000000000000000000000000000000000000083613ae7565b4290611920565b84610f32565b6108de88611935565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613c08565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c61120a565b6000818152600b60205260408120549192508c8c8315610a82576001925060008061096b86898d866000611ad9565b9150915080600960008282546109819190613ae7565b9091555061099d90508660008461099781611ba8565b88611bd2565b6109a78183613ae7565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d4c565b91506109eb6109e68385610683565b611d96565b60068054600290610a0c9084906201000090046001600160701b0316613c63565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a39826118f2565b60068054601090610a5b908490600160801b90046001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f60018461120a565b6000818152600b60205260409020549091508015610b9e5760019450600080610abc838b8f886001611ad9565b915091508060096000828254610ad29190613ae7565b90915550610aee905083600084610ae881611ba8565b8a611dc0565b610af88183613c08565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b0316613c63565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b55826118f2565b60068054601090610b77908490600160801b90046001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611ba8565b610bb983611ba8565b610bc39190613ca3565b6000611fb1565b8e610bd58482611ff0565b50505b6000610be3846121ea565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc19190613cc3565b90506001600160a01b03811615610d3657610d335a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612336565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610d606118b1565b600254909150610dc5908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006123c1565b600254909450610e28908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d2565b9150610e7f8785610e7a857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006123ed565b612452565b15610e8c57610e8c612494565b610e98878588856124ad565b91965094509250670de0b6b3a7640000610f1a610eb58784613ae7565b600254610ed3908890600160801b90046001600160801b0316613c08565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d2565b1115610f2857610f28612494565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f5e5750505050565b6000848152600860205260408120546001600160801b031690819003610fb857610f87836118f2565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611036565b611009611004670de0b6b3a7640000610fd18886613c08565b610fdb9190613ce0565b85670de0b6b3a7640000610fef878a613c08565b610ff99190613ce0565b8592919060016124f9565b6118f2565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61103f846118f2565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110b26110048261109c670de0b6b3a764000086613ce0565b6005546001600160801b031691908860016124f9565b600580546001600160801b0319166001600160801b03929092169190911790556110db856118f2565b600280546000906110f69084906001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611123846118f2565b60028054601090611145908490600160801b90046001600160801b0316613cf7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611172846118f2565b61117c9082613c83565b600380546001600160801b03808416600160801b029116179055905060006111a3836125a1565b90506111c1816111b287611ba8565b6111bc9084613d17565b611fb1565b6111ca846125e5565b6111d6576111d6612494565b60006111e185612645565b90508061120157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112345760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290611271908490613ae7565b90915550506000838152600b602052604081208054839290611294908490613ae7565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a7640000612652565b600080600080600061130a6118b1565b60025490915061136f908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f000000000000000000000000000000000000000000000000000000000000000061269f565b93508761137c85896126c0565b111561138a5761138a612494565b60025460009081906113ef908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d2565b93506114058a670de0b6b3a7640000868c6126d5565b5091935090915061141890508183613c08565b6114229087613c08565b95508861146f816114698d611437868c613c08565b8d61144287826127e3565b877f00000000000000000000000000000000000000000000000000000000000000006127f9565b906126c0565b975090945050505093509350935093565b60006114926040830160208401613b3a565b1561149e5750826114ab565b6114a8848461281e565b90505b9392505050565b6002546001600160801b0316838110156114ce576114ce612494565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611506908390600f0b612833565b101561151457611514612494565b60045461155e9061100490600160801b90046001600160801b0316611541670de0b6b3a764000086613ce0565b600554600160801b90046001600160801b031691908960016124f9565b600580546001600160801b03928316600160801b029216919091179055611584816118f2565b600280546001600160801b0319166001600160801b03929092169190911790556115ad856118f2565b600280546010906115cf908490600160801b90046001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115fc856118f2565b6004805460109061161e908490600160801b90046001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061164d836125a1565b90506111c18161165c88611ba8565b6111bc9084613ca3565b60008061169e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612859565b6116fe7f00000000000000000000000000000000000000000000000000000000000000006116cd876001613ae7565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906128c0565b60405163617ba03760e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201879052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063617ba03790608401600060405180830381600087803b15801561179557600080fd5b505af11580156117a9573d6000803e3d6000fd5b505050506117b685612950565b6000915091505b935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd33306117ff87612652565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015611853573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118779190613d3f565b50505050565b600082600019048411830215820261189457600080fd5b5091020490565b60006118a78284613d72565b6106989084613c08565b6002546004546000916106cd916001600160801b0390911690600f0b612833565b60006118e9826118e385888861187d565b9061299d565b95945050505050565b60006001600160801b0382111561191c57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161192f5782610698565b50919050565b6006546000908190611958908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611ad45760006119828383613c08565b90506119916110048286612a08565b600680546010906119b3908490600160801b90046001600160801b0316613cf7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006119ec858361281e90919063ffffffff16565b90506000611a1a827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060096000828254611a2e9190613ae7565b90915550611a3e90508183613c08565b9150611a49826118f2565b60028054600090611a649084906001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a9182612a1d565b60048054600090611aa6908490600f0b613d86565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611ae6878561281e565b91506000611b14837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611b40817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611b6357611b528282613c08565b611b5c9084613c08565b9250611b7a565b611b6d8282613c08565b611b779084613ae7565b92505b86861015611b9d57611b8d83878961187d565b9250611b9a82878961187d565b91505b509550959350505050565b60006001600160ff1b0382111561191c5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611c1b61100482611bfe670de0b6b3a764000086613ce0565b600554600160801b90046001600160801b031691908a60006124f9565b600580546001600160801b03928316600160801b029216919091179055611c41866118f2565b611c4b9082613cf7565b600480546001600160801b03928316600160801b029216919091179055611c71846118f2565b60028054600090611c8c9084906001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cb983612a47565b60048054600090611cce908490600f0b613d86565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611cfe856118f2565b60028054601090611d20908490600160801b90046001600160801b0316613cf7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611d6484611d5e8a888a61187d565b9061281e565b9050611d7188848661187d565b611d7b9082613ae7565b905086811115611d8b5786810391505b509695505050505050565b60006001600160701b0382111561191c5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611e0257507f0000000000000000000000000000000000000000000000000000000000000000611e008583613c08565b105b15611e0f57611e0f612494565b6004549084900390600f0b611e248482613ca3565b905083611e3086611ba8565b138015611e6557507f0000000000000000000000000000000000000000000000000000000000000000611e638383612833565b105b15611e7257611e72612494565b600354600160801b90046001600160801b0316611eb461100482611e9e670de0b6b3a764000088613ce0565b6005546001600160801b031691908c60006124f9565b600580546001600160801b0319166001600160801b0392909216919091179055611ede8882613c08565b9050611ee9816118f2565b600380546001600160801b03928316600160801b029216919091179055611f0f836118f2565b600280546001600160801b0319166001600160801b0392909216919091179055611f3882612a47565b600480546001600160801b0319166001600160801b0392909216919091179055611f61876118f2565b60028054601090611f83908490600160801b90046001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611fcc90611004906001600160801b03168484612a83565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161203b916001600160801b031690613c08565b90508060000361204f57600191505061069b565b600061205a85612aea565b90508060000361206f5760019250505061069b565b60008061207d838589612b86565b915091508061209357600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016120cf929190613e31565b6040805180830381865af41580156120eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061210f9190613ea7565b9150915061212d61211f82611ba8565b61212890613ecb565b612cfa565b925082612143576000965050505050505061069b565b61214c826118f2565b600780546000906121679084906001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612194816118f2565b600780546010906121b6908490600160801b90046001600160801b0316613c83565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61221387612e92565b6040518263ffffffff1660e01b815260040161222f9190613ee7565b6040805180830381865af415801561224b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061226f9190613ef6565b9150915080612285575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916122eb91613ae7565b6122f59190613c08565b90508060000361230d57506000958695509350505050565b600080871161231d576000612328565b61232884888461187d565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561235c5761235c613f26565b6040519080825280601f01601f191660200182016040528015612386576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156123a7578692505b828152826000602083013e90999098509650505050505050565b60006123e28787876123db88670de0b6b3a7640000613c08565b8787612fcc565b979650505050505050565b60006114a861242e61240784670de0b6b3a7640000613c08565b611469670de0b6b3a764000061241d818a612a08565b6124279190613c08565b87906126c0565b61244090670de0b6b3a7640000613ae7565b611d5e84670de0b6b3a7640000613c08565b600080612489856124616118b1565b61246b9190613ae7565b600254610ed3908790600160801b90046001600160801b0316613c08565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006124c0898789612fef565b90925090506124cf8289613c08565b975060006124de82888a61187d565b90506124ea818b613c08565b9a989950979650505050505050565b60008260000361250a5750846118e9565b811561255d5761253b61251d8487613ae7565b6125278587610683565b612531888a610683565b611d5e9190613ae7565b905060006125498588611920565b905080821015612557578091505b506118e9565b82850361256c575060006118e9565b6125976125798487613c08565b61258385876126c0565b61258d888a610683565b611d5e9190613c08565b9695505050505050565b60006125c9600b60006125b560028661120a565b815260200190815260200160002054611ba8565b6125db600b60006125b560018761120a565b61069b9190613ca3565b60006126117f0000000000000000000000000000000000000000000000000000000000000000836126c0565b60035461262791906001600160801b0316613ae7565b60025461263d906001600160801b031684610683565b101592915050565b600061069b826004611ff0565b600061069b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461306f565b60006123e28787876126b988670de0b6b3a7640000613c08565b8787613092565b60006106988383670de0b6b3a76400006130a3565b6000808080612726878661271f8b6114696126f88c670de0b6b3a7640000613c08565b7f0000000000000000000000000000000000000000000000000000000000000000906126c0565b91906130a3565b9350612752847f0000000000000000000000000000000000000000000000000000000000000000610683565b9150600061277361276b89670de0b6b3a7640000613c08565b8a90886130a3565b905061279f817f00000000000000000000000000000000000000000000000000000000000000006126c0565b93506127cb847f0000000000000000000000000000000000000000000000000000000000000000610683565b6127d59084613ae7565b915050945094509450949050565b60008183116127f25781610698565b5090919050565b6000806128118461280b8a888a6130a3565b90612a08565b9050611d718884866130a3565b600061069883670de0b6b3a76400008461187d565b60008061284084846130c9565b90925090508061285257612852612494565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526118779186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613105565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526129118482613172565b611877576040516001600160a01b0384811660248301526000604483015261294691869182169063095ea7b39060640161288e565b6118778482613105565b600061069b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084613215565b6000816000036129b65750670de0b6b3a764000061069b565b826000036129c65750600061069b565b60006129d183611ba8565b905060006129e66129e186611ba8565b613239565b90508181026129fd670de0b6b3a764000082613f3c565b90506125978161345f565b600061069883670de0b6b3a7640000846130a3565b600060016001607f1b0382111561191c5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612a65575060016001607f1b0382135b1561191c5760405163a5353be560e01b815260040160405180910390fd5b600080612a918460006135f4565b612a9c8460006135f4565b612aa69190613ca3565b90506000811315612ac257612abb8186613ae7565b9450612ae1565b6000811215612ae157612ad481613ecb565b612ade9086613c08565b94505b50929392505050565b6003546000908190612b05906001600160801b031684612a08565b9050612b317f000000000000000000000000000000000000000000000000000000000000000082613ae7565b6002546001600160801b0316111561192f576002547f000000000000000000000000000000000000000000000000000000000000000090612b7c9083906001600160801b0316613c08565b6114ab9190613c08565b612b8e6139bf565b600080612b9a84612e92565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612bd59190613ee7565b6040805180830381865af4158015612bf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c159190613ef6565b9350905082612c2a5750600091506117bd9050565b6000612c51612c4c84610160015185610140015161068390919063ffffffff16565b611ba8565b612c71612c4c8561012001518661010001516126c090919063ffffffff16565b612c7b9190613ca3565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612db3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dd79190613f6a565b935093509350935080612df35750600098975050505050505050565b868414612e2457612e03846118f2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612e5557612e3483612a47565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612e8357612e65826118f2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612e9a613a11565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612f929116613603565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612fc492900416613603565b905292915050565b600080612fdd888888888888613679565b909250905080611d8b57611d8b612494565b6000806130398561146985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061302f818c612a08565b6114699190613c08565b9150613065827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b60006114a861307e8585613741565b83906b033b2e3c9fd0803ce800000061187d565b600080612fdd8888888888886137af565b60008260001904841183021582026130ba57600080fd5b50910281810615159190040190565b6000806000836130d886611ba8565b6130e29190613ca3565b905060008112156130fa57600080925092505061067c565b946001945092505050565b600061311a6001600160a01b0384168361386f565b9050805160001415801561313f57508080602001905181019061313d9190613d3f565b155b1561316d57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b03168460405161318f9190613fa0565b6000604051808303816000865af19150503d80600081146131cc576040519150601f19603f3d011682016040523d82523d6000602084013e6131d1565b606091505b50915091508180156131fb5750805115806131fb5750808060200190518101906131fb9190613d3f565b80156118e95750505050506001600160a01b03163b151590565b60006114a86b033b2e3c9fd0803ce80000006132318686613741565b84919061187d565b600080821361325b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132de9084901c611ba8565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361347a57506000919050565b680755bf798b4a1bf1e582126134a3576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061259774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611ba8565b60008183136127f25781610698565b600080670de0b6b3a76400006136176106a1565b6136219190613ce0565b905080831161363157600061363b565b61363b8184613c08565b91506114ab613672670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613ce0565b839061281e565b600080600061368b898988888861387d565b90506136a5866118e361369e8a8d613ae7565b8790610683565b98506136b2858a8661187d565b9850888110156136c9576000809250925050613736565b888103670de0b6b3a764000081106136fe576136f76136f0670de0b6b3a764000089612a08565b829061299d565b9050613716565b6137136136f0670de0b6b3a76400008961281e565b90505b8089101561372c57600080935093505050613736565b8803925060019150505b965096945050505050565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa15801561378b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106989190613fcf565b60008060006137c1898988888861387d565b90506137d1866118e3898b613ae7565b9750878110156137e8576000809250925050613736565b8781036137f68186886130a3565b9050670de0b6b3a764000081106138235761381c6136f0670de0b6b3a764000089612a08565b905061383b565b6138386136f0670de0b6b3a76400008961281e565b90505b6138458186612a08565b9050808a101561385d57600080935093505050613736565b90980398600198509650505050505050565b6060610698838360006138ac565b6000613889858561299d565b6138a261389a866118e3868b6126c0565b8590856130a3565b6125979190613ae7565b6060814710156138d15760405163cd78605960e01b8152306004820152602401613164565b600080856001600160a01b031684866040516138ed9190613fa0565b60006040518083038185875af1925050503d806000811461392a576040519150601f19603f3d011682016040523d82523d6000602084013e61392f565b606091505b509150915061259786838360608261394f5761394a82613996565b6114ab565b815115801561396657506001600160a01b0384163b155b1561398f57604051639996b31560e01b81526001600160a01b0385166004820152602401613164565b50806114ab565b8051156139a65780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806139d3613a11565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613a8857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613ab457600080fd5b850160608188031215613ac657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b613ad1565b6001600160a01b03811681146105ab57600080fd5b600060208284031215613b2157600080fd5b81356114ab81613afa565b80151581146105ab57600080fd5b600060208284031215613b4c57600080fd5b81356114ab81613b2c565b6000808335601e19843603018112613b6e57600080fd5b83018035915067ffffffffffffffff821115613b8957600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613bfb60c083018486613b9e565b9998505050505050505050565b8181038181111561069b5761069b613ad1565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613c5560e083018486613b9e565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561285257612852613ad1565b6001600160801b0381811683821601908082111561285257612852613ad1565b818103600083128015838313168383128216171561285257612852613ad1565b600060208284031215613cd557600080fd5b81516114ab81613afa565b808202811582820484141761069b5761069b613ad1565b6001600160801b0382811682821603908082111561285257612852613ad1565b8082018281126000831280158216821582161715613d3757613d37613ad1565b505092915050565b600060208284031215613d5157600080fd5b81516114ab81613b2c565b634e487b7160e01b600052601260045260246000fd5b600082613d8157613d81613d5c565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b613ad1565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613e45828551613db3565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613eba57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613ee057613ee0613ad1565b5060000390565b610180810161069b8284613db3565b60008060408385031215613f0957600080fd5b825191506020830151613f1b81613b2c565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613f4b57613f4b613d5c565b600160ff1b821460001984141615613f6557613f65613ad1565b500590565b60008060008060808587031215613f8057600080fd5b8451935060208501519250604085015191506060850151613ac681613b2c565b6000825160005b81811015613fc15760208186018101518583015201613fa7565b506000920191825250919050565b600060208284031215613fe157600080fd5b505191905056fea26469706673582212201e4723f45d00975e7e227118c9ddc20847f6390e8d3c358e9f23885b468862ba64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
