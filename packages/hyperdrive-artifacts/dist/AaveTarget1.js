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
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200445338038062004453833981016040819052620000359162000578565b600160005581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013a9190620006b5565b6001600160a01b039081166102808190526080516200015d921690600162000165565b50506200072a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bf90859083906200023116565b6200022b57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021f918691620002e216565b6200022b8482620002e2565b50505050565b6000806000846001600160a01b031684604051620002509190620006d5565b6000604051808303816000865af19150503d80600081146200028f576040519150601f19603f3d011682016040523d82523d6000602084013e62000294565b606091505b5091509150818015620002c2575080511580620002c2575080806020019051810190620002c2919062000706565b8015620002d957506000856001600160a01b03163b115b95945050505050565b6000620002f96001600160a01b0384168362000355565b90508051600014158015620003215750808060200190518101906200031f919062000706565b155b156200035057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000365838360006200036c565b9392505050565b606081471015620003935760405163cd78605960e01b815230600482015260240162000347565b600080856001600160a01b03168486604051620003b19190620006d5565b60006040518083038185875af1925050503d8060008114620003f0576040519150601f19603f3d011682016040523d82523d6000602084013e620003f5565b606091505b5090925090506200040886838362000412565b9695505050505050565b6060826200042b57620004258262000476565b62000365565b81511580156200044357506001600160a01b0384163b155b156200046e57604051639996b31560e01b81526001600160a01b038516600482015260240162000347565b508062000365565b805115620004875780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004d557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004a057600080fd5b8051620004fe81620004db565b919050565b6000608082840312156200051657600080fd5b604051608081016001600160401b03811182821017156200054757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102808112156200058e57600080fd5b610260808212156200059f57600080fd5b620005a9620004a3565b9150620005b685620004f1565b8252620005c660208601620004f1565b6020830152620005d960408601620004f1565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000644818701620004f1565b9083015261018062000658868201620004f1565b908301526101a06200066c868201620004f1565b908301526101c062000680868201620004f1565b908301526101e0620006958787830162000503565b8184015250819350620006aa818601620004f1565b925050509250929050565b600060208284031215620006c857600080fd5b81516200036581620004db565b6000825160005b81811015620006f85760208186018101518583015201620006dc565b506000920191825250919050565b6000602082840312156200071957600080fd5b815180151581146200036557600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613b60620008f3600039600081816119fe015281816125f6015261261f015260005050600050506000610b650152600050506000818160af015281816103250152612d490152600081816113eb015281816117fc0152818161185f015281816129270152818161296301528181612b620152612d2301526000818161071301528181610de801528181610e2f01528181610ff401528181611661015281816116af0152612cfd01526000611b71015260008181611c97015281816122fa01526123730152600081816108d701528181610f8c01528181611c6b0152612347015260008181610e8101526122c001526000818161073401528181610dc601528181610e50015281816110150152818161163f015281816116d00152612d6f01526000818161080f01528181610f0b015281816117580152818161219501526133350152600081816105d20152818161064d015281816106c30152818161078f01526107c7015260006126f20152600081816119dd015281816125d5015261264e0152613b606000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046135e3565b610073565b60405190815260200160405180910390f35b61004e61006e3660046135e3565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610c73565b3387610ca8565b6000806000806000806101568b888e610d81565b95509550955095509550955060008c90508c4210156102165782600960008282546101819190613658565b9091555061019990506101926105ca565b4284611075565b6101a68c888787856111b3565b60006101b18e61132d565b90506101cf6101bf8e611377565b6101c9908361366b565b826113a5565b6101d8896113e4565b6101e4576101e4611444565b60006101ef8a61145d565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b610220868961146a565b955061022b8861145d565b505b600061023a878a8d61154b565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610c73565b61027a60208301836136a0565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a016136cb565b6102cc8a6102c68d8f613658565b906115e5565b8d6102da60408c018c6136e8565b6040516102ee989796959493929190613758565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610c73565b6000806000806000806103bb8b888e6115fa565b95509550955095509550955060008c90508c42101561046e5782600960008282546103e69190613658565b909155506103f790506101926105ca565b6104048c888787856117e5565b600061040f8261132d565b905061042761041d8e611377565b6101c990836137a0565b610430896113e4565b61043c5761043c611444565b60006104478a61145d565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b610478868961146a565b95506104838861145d565b505b6000610492878a8d61154b565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610c73565b6104d060208301836136a0565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a016136cb565b8a61051c60408b018b6136e8565b60405161052f97969594939291906137c8565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058860208301836136a0565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119d6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a23565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613658565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a39565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a5a565b92505b5061076583611a71565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b613809565b8a84611075565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613658565b4290611a9b565b84611075565b61080288611ab0565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d613809565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610c73565b6000818152600b60205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c54565b9150915080600960008282546108a59190613658565b909155506108c19050866000846108bb81611377565b886111b3565b6108cb8183613658565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d23565b915061090f61090a83856115e5565b611d6d565b600680546002906109309084906201000090046001600160701b031661381c565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611a71565b6006805460109061097f908490600160801b90046001600160801b031661383c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610c73565b6000818152600b60205260409020549091508015610ac257600194506000806109e0838b8f886001611c54565b9150915080600960008282546109f69190613658565b90915550610a12905083600084610a0c81611377565b8a6117e5565b610a1c8183613809565b9150610a2b61090a83876115e5565b60068054600290610a4c9084906201000090046001600160701b031661381c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611a71565b60068054601090610a9b908490600160801b90046001600160801b031661383c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad487611377565b610add83611377565b610ae7919061366b565b60006113a5565b8e610af98482611d97565b50505b6000610b0784611f91565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be5919061385c565b90506001600160a01b03811615610c5a57610c575a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906120dd565b50505b509b9d5050505050505050505050505050949350505050565b60006001600160f81b03821115610c9d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ceb57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d2e908490613809565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d95611a39565b90506000610da28a612168565b6002549091508c908c90610e0c908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121b9565b600254919d509a50909550610e74908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a5a565b9550610eaa858c610ea5897f0000000000000000000000000000000000000000000000000000000000000000612229565b612259565b15610eb757610eb7611444565b6000806000610ec885878b8761229b565b9c5091945092509050610edb8184613809565b610ee59089613658565b9750610ef18284613658565b610efb908d613658565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f359190613809565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f7d5760008b8152600860205260409020600101546001600160801b0316610f7f565b8b5b90508b610fb08e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d23565b9950610fbc878a613809565b9850670de0b6b3a7640000611039610fd48787613658565b600254610ff2908f90600160801b90046001600160801b0316613809565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a5a565b111561104757611047611444565b6110578a8a878a878760006123af565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b6000848152600860205260408120546001600160801b0316908190036110fb576110ca83611a71565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611179565b61114c611147670de0b6b3a76400006111148886613809565b61111e9190613879565b85670de0b6b3a7640000611132878a613809565b61113c9190613879565b85929190600161244e565b611a71565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61118284611a71565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111fc611147826111df670de0b6b3a764000086613879565b600554600160801b90046001600160801b031691908a600061244e565b600580546001600160801b03928316600160801b02921691909117905561122286611a71565b61122c9082613890565b600480546001600160801b03928316600160801b02921691909117905561125284611a71565b6002805460009061126d9084906001600160801b031661383c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129a836124f8565b600480546000906112af908490600f0b6138b0565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112df85611a71565b60028054601090611301908490600160801b90046001600160801b0316613890565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611355600b6000611341600286610c73565b815260200190815260200160002054611377565b611367600b6000611341600187610c73565b611371919061366b565b92915050565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c090611147906001600160801b03168484612534565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006114107f00000000000000000000000000000000000000000000000000000000000000008361259b565b60035461142691906001600160801b0316613658565b60025461143c906001600160801b0316846115e5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611371826004611d97565b600080600061147884611ab0565b9092509050600061148986866115e5565b9050818311156114a15761149e8683856125b0565b95505b828110156114b35780830392506114b8565b600092505b6114c183611d6d565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151457869003611518565b5060005b61152181611a71565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061155885856115e5565b9050611563816125ce565b9450846000036115775760009150506115de565b84915061158a60408401602085016136cb565b156115b9576115b2856115a060208601866136a0565b6115ad60408701876136e8565b61261b565b91506115dc565b6115dc856115ca60208601866136a0565b6115d760408701876136e8565b6126f0565b505b9392505050565b60006115de8383670de0b6b3a76400006125b0565b60008060008060008060008061160e611a39565b9050600061161b8a612168565b6002549091508b908d90611685908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061279f565b600254919d509b50909550600090819081906116f4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a5a565b985061170284878b8861229b565b9c5091945090925090506117168284613809565b6117209089613809565b975061172c8184613658565b611736908e613809565b9c506117428a8e613658565b9b50505050505050506117cf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6117829190613809565b81526020810191909152604001600020600101546001600160801b0316428e116117c65760008e8152600860205260409020600101546001600160801b03166117c8565b8e5b60016123af565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061182757507f00000000000000000000000000000000000000000000000000000000000000006118258583613809565b105b1561183457611834611444565b6004549084900390600f0b611849848261366b565b90508361185586611377565b13801561188a57507f000000000000000000000000000000000000000000000000000000000000000061188883836127f3565b105b1561189757611897611444565b600354600160801b90046001600160801b03166118d9611147826118c3670de0b6b3a764000088613879565b6005546001600160801b031691908c600061244e565b600580546001600160801b0319166001600160801b03929092169190911790556119038882613809565b905061190e81611a71565b600380546001600160801b03928316600160801b02921691909117905561193483611a71565b600280546001600160801b0319166001600160801b039290921691909117905561195d826124f8565b600480546001600160801b0319166001600160801b039290921691909117905561198687611a71565b600280546010906119a8908490600160801b90046001600160801b031661383c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006113717f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612819565b6000611a2f82846138f3565b6115de9084613809565b6002546004546000916105c5916001600160801b0390911690600f0b6127f3565b600061008182611a6b8588886125b0565b9061283c565b60006001600160801b038211156113a157604051630f0af95160e11b815260040160405180910390fd5b6000818311611aaa57826115de565b50919050565b6006546000908190611ad3908490600160801b90046001600160801b03166115e5565b6006546201000090046001600160701b03169250905081811115611c4f576000611afd8383613809565b9050611b0c61114782866128b1565b60068054601090611b2e908490600160801b90046001600160801b0316613890565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b6785836128c690919063ffffffff16565b90506000611b95827f00000000000000000000000000000000000000000000000000000000000000006115e5565b90508060096000828254611ba99190613658565b90915550611bb990508183613809565b9150611bc482611a71565b60028054600090611bdf9084906001600160801b031661383c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c0c826128db565b60048054600090611c21908490600f0b6138b0565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c6187856128c6565b91506000611c8f837f00000000000000000000000000000000000000000000000000000000000000006115e5565b9050611cbb817f00000000000000000000000000000000000000000000000000000000000000006115e5565b91508315611cde57611ccd8282613809565b611cd79084613809565b9250611cf5565b611ce88282613809565b611cf29084613658565b92505b86861015611d1857611d088387896125b0565b9250611d158287896125b0565b91505b509550959350505050565b600080611d3b84611d358a888a6125b0565b906128c6565b9050611d488884866125b0565b611d529082613658565b905086811115611d625786810391505b509695505050505050565b60006001600160701b038211156113a15760405163086b151760e11b815260040160405180910390fd5b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611de2916001600160801b031690613809565b905080600003611df6576001915050611371565b6000611e0185612905565b905080600003611e1657600192505050611371565b600080611e248385896129a1565b9150915080611e3a576000945050505050611371565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e76929190613985565b6040805180830381865af4158015611e92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb691906139fb565b91509150611ed4611ec682611377565b611ecf90613a1f565b612b1c565b925082611eea5760009650505050505050611371565b611ef382611a71565b60078054600090611f0e9084906001600160801b031661383c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f3b81611a71565b60078054601090611f5d908490600160801b90046001600160801b031661383c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fba87612cb4565b6040518263ffffffff1660e01b8152600401611fd69190613a3b565b6040805180830381865af4158015611ff2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120169190613a4a565b915091508061202c575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161209291613658565b61209c9190613809565b9050806000036120b457506000958695509350505050565b60008087116120c45760006120cf565b6120cf8488846125b0565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561210357612103613a7a565b6040519080825280601f01601f19166020018201604052801561212d576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561214e578692505b828152826000602083013e90999098509650505050505050565b6000806121736105ca565b905080831161218357600061218d565b61218d8184613809565b91506115de827f00000000000000000000000000000000000000000000000000000000000000006128c6565b600080806121da6121d288670de0b6b3a7640000613809565b899087612dee565b9050861561221c576121ec888861259b565b915061220d8a8a846122068a670de0b6b3a7640000613809565b8989612e14565b92506122198382613658565b90505b9750975097945050505050565b600061224761224084670de0b6b3a7640000613809565b839061259b565b6115de90670de0b6b3a7640000613809565b60008061229085612268611a39565b6122729190613658565b600254610ff2908790600160801b90046001600160801b0316613809565b909210949350505050565b60008080806122f287866122eb8b6122e56122be8c670de0b6b3a7640000613809565b7f00000000000000000000000000000000000000000000000000000000000000009061259b565b9061259b565b9190612dee565b935061231e847f00000000000000000000000000000000000000000000000000000000000000006115e5565b9150600061233f61233789670de0b6b3a7640000613809565b8a9088612dee565b905061236b817f000000000000000000000000000000000000000000000000000000000000000061259b565b9350612397847f00000000000000000000000000000000000000000000000000000000000000006115e5565b6123a19084613658565b915050945094509450949050565b6000806000806000808888101561241e5786156123d4576123d18d898b6125b0565b9c505b6123df8c898b6125b0565b9b506123ea8b611377565b6123f38d611377565b6123fd919061366b565b905061240a8b898b6125b0565b9a506124178a898b6125b0565b995061243d565b6124278b611377565b6124308d611377565b61243a919061366b565b90505b9b9c9a9b999a975050505050505050565b60008260000361245f5750846124ef565b81156124b2576124906124728487613658565b61247c85876115e5565b612486888a6115e5565b611d359190613658565b9050600061249e8588611a9b565b9050808210156124ac578091505b506124ef565b8285036124c1575060006124ef565b6124ec6124ce8487613809565b6124d8858761259b565b6124e2888a6115e5565b611d359190613809565b90505b95945050505050565b600060016001607f1b0319821280612516575060016001607f1b0382135b156113a15760405163a5353be560e01b815260040160405180910390fd5b600080612542846000612e37565b61254d846000612e37565b612557919061366b565b905060008113156125735761256c8186613658565b9450612592565b60008112156125925761258581613a1f565b61258f9086613809565b94505b50929392505050565b60006115de8383670de0b6b3a7640000612dee565b60008260001904841183021582026125c757600080fd5b5091020490565b60006113717f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612e4d565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166369328dec7f0000000000000000000000000000000000000000000000000000000000000000612676886119d6565b6040516001600160e01b031960e085901b1681526001600160a01b039283166004820152602481019190915290871660448201526064016020604051808303816000875af11580156126cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100819190613a90565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb84612729876119d6565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015612774573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127989190613aa9565b5050505050565b600080806127c06127b888670de0b6b3a7640000613809565b8990876125b0565b9050861561221c576127d288886115e5565b915061220d8a8a846127ec8a670de0b6b3a7640000613809565b8989612e71565b6000806128008484612e82565b90925090508061281257612812611444565b5092915050565b60006100846128288585612ec1565b83906b033b2e3c9fd0803ce80000006125b0565b6000816000036128555750670de0b6b3a7640000611371565b8260000361286557506000611371565b600061287083611377565b9050600061288561288086611377565b612f2f565b905081810261289c670de0b6b3a764000082613ac6565b90506128a781613155565b9695505050505050565b60006115de83670de0b6b3a764000084612dee565b60006115de83670de0b6b3a7640000846125b0565b600060016001607f1b038211156113a15760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612920906001600160801b0316846128b1565b905061294c7f000000000000000000000000000000000000000000000000000000000000000082613658565b6002546001600160801b03161115611aaa576002547f0000000000000000000000000000000000000000000000000000000000000000906129979083906001600160801b0316613809565b6115de9190613809565b6129a9613530565b6000806129b584612cb4565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129f09190613a3b565b6040805180830381865af4158015612a0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a309190613a4a565b9350905082612a45575060009150612b149050565b6000612a6c612a678461016001518561014001516115e590919063ffffffff16565b611377565b612a8c612a6785610120015186610100015161259b90919063ffffffff16565b612a96919061366b565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bf99190613af4565b935093509350935080612c155750600098975050505050505050565b868414612c4657612c2584611a71565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c7757612c56836124f8565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ca557612c8782611a71565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612cbc613582565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612db491166132ea565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612de6929004166132ea565b905292915050565b6000826000190484118302158202612e0557600080fd5b50910281810615159190040190565b600080612e25888888888888613360565b909250905080611d6257611d62611444565b6000818313612e4657816115de565b5090919050565b60006100846b033b2e3c9fd0803ce8000000612e698686612ec1565b8491906125b0565b600080612e25888888888888613441565b600080600083612e9186611377565b612e9b919061366b565b90506000811215612eb3576000809250925050612eba565b9150600190505b9250929050565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa158015612f0b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115de9190613a90565b6000808213612f515760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fd49084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361317057506000919050565b680755bf798b4a1bf1e58212613199576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906128a774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b600080670de0b6b3a76400006132fe6105ca565b6133089190613879565b9050808311613318576000613322565b6133228184613809565b91506115de613359670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613879565b83906128c6565b60008060006133728989888888613501565b905086881015613389576000809250925050613436565b9686900396613398888761283c565b9750878110156133af576000809250925050613436565b8781036133bd818688612dee565b9050670de0b6b3a764000081106133f1576133ea6133e3670de0b6b3a7640000896128b1565b829061283c565b9050613409565b6134066133e3670de0b6b3a7640000896128c6565b90505b61341381866128b1565b90508981101561342b57600080935093505050613436565b899003925060019150505b965096945050505050565b60008060006134538989888888613501565b905061346386611a6b898b613658565b97508781101561347a576000809250925050613436565b878103613488818688612dee565b9050670de0b6b3a764000081106134b5576134ae6133e3670de0b6b3a7640000896128b1565b90506134cd565b6134ca6133e3670de0b6b3a7640000896128c6565b90505b6134d781866128b1565b9050808a10156134ef57600080935093505050613436565b90980398600198509650505050505050565b600061350d858561283c565b61352661351e86611a6b868b61259b565b859085612dee565b6124ec9190613658565b604051806101200160405280613544613582565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156135f957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561362557600080fd5b85016060818803121561363757600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561137157611371613642565b818103600083128015838313168383128216171561281257612812613642565b6001600160a01b03811681146105af57600080fd5b6000602082840312156136b257600080fd5b81356115de8161368b565b80151581146105af57600080fd5b6000602082840312156136dd57600080fd5b81356115de816136bd565b6000808335601e198436030181126136ff57600080fd5b83018035915067ffffffffffffffff82111561371a57600080fd5b602001915036819003821315612eba57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061379260e08301848661372f565b9a9950505050505050505050565b80820182811260008312801582168215821617156137c0576137c0613642565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006137fc60c08301848661372f565b9998505050505050505050565b8181038181111561137157611371613642565b6001600160701b0381811683821601908082111561281257612812613642565b6001600160801b0381811683821601908082111561281257612812613642565b60006020828403121561386e57600080fd5b81516115de8161368b565b808202811582820484141761137157611371613642565b6001600160801b0382811682821603908082111561281257612812613642565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561137157611371613642565b634e487b7160e01b600052601260045260246000fd5b600082613902576139026138dd565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613999828551613907565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a0e57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a3457613a34613642565b5060000390565b61018081016113718284613907565b60008060408385031215613a5d57600080fd5b825191506020830151613a6f816136bd565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613aa257600080fd5b5051919050565b600060208284031215613abb57600080fd5b81516115de816136bd565b600082613ad557613ad56138dd565b600160ff1b821460001984141615613aef57613aef613642565b500590565b60008060008060808587031215613b0a57600080fd5b8451935060208501519250604085015191506060850151613637816136bd56fea2646970667358221220c760918b58be6dcdf8b496184a562643404c59e108a43d8c9f317ffb2befe91364736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
