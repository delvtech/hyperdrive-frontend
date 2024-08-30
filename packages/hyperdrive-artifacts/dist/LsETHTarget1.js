export const LsETHTarget1 = {
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004055380380620040558339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613bbd6200049860003960005050600050506000610b650152600050506000818160af015281816103250152612c220152600081816113eb015281816117fc0152818161185f015281816128000152818161283c01528181612a3b0152612bfc01526000818161071301528181610de801528181610e2f01528181610ff401528181611661015281816116af0152612bd601526000611b50015260008181611c76015281816122d901526123520152600081816108d701528181610f8c01528181611c4a0152612326015260008181610e81015261229f01526000818161073401528181610dc601528181610e50015281816110150152818161163f015281816116d00152612c4801526000818161080f01528181610f0b015281816117580152818161217401526132030152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600081816119dd015281816125b40152612601015260005050613bbd6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613611565b610073565b60405190815260200160405180910390f35b61004e61006e366004613611565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610c73565b3387610ca8565b6000806000806000806101568b888e610d81565b95509550955095509550955060008c90508c4210156102165782600960008282546101819190613686565b9091555061019990506101926105ca565b4284611075565b6101a68c888787856111b3565b60006101b18e61132d565b90506101cf6101bf8e611377565b6101c99083613699565b826113a5565b6101d8896113e4565b6101e4576101e4611444565b60006101ef8a61145d565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b610220868961146a565b955061022b8861145d565b505b600061023a878a8d61154b565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610c73565b61027a60208301836136ce565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a016136f9565b6102cc8a6102c68d8f613686565b906115e5565b8d6102da60408c018c613716565b6040516102ee989796959493929190613786565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610c73565b6000806000806000806103bb8b888e6115fa565b95509550955095509550955060008c90508c42101561046e5782600960008282546103e69190613686565b909155506103f790506101926105ca565b6104048c888787856117e5565b600061040f8261132d565b905061042761041d8e611377565b6101c990836137ce565b610430896113e4565b61043c5761043c611444565b60006104478a61145d565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b610478868961146a565b95506104838861145d565b505b6000610492878a8d61154b565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610c73565b6104d060208301836136ce565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a016136f9565b8a61051c60408b018b613716565b60405161052f97969594939291906137f6565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058860208301836136ce565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119d6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a02565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613686565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a18565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b92505b5061076583611a50565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b613837565b8a84611075565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613686565b4290611a7a565b84611075565b61080288611a8f565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d613837565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610c73565b6000818152600b60205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c33565b9150915080600960008282546108a59190613686565b909155506108c19050866000846108bb81611377565b886111b3565b6108cb8183613686565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d02565b915061090f61090a83856115e5565b611d4c565b600680546002906109309084906201000090046001600160701b031661384a565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611a50565b6006805460109061097f908490600160801b90046001600160801b031661386a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610c73565b6000818152600b60205260409020549091508015610ac257600194506000806109e0838b8f886001611c33565b9150915080600960008282546109f69190613686565b90915550610a12905083600084610a0c81611377565b8a6117e5565b610a1c8183613837565b9150610a2b61090a83876115e5565b60068054600290610a4c9084906201000090046001600160701b031661384a565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611a50565b60068054601090610a9b908490600160801b90046001600160801b031661386a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad487611377565b610add83611377565b610ae79190613699565b60006113a5565b8e610af98482611d76565b50505b6000610b0784611f70565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be5919061388a565b90506001600160a01b03811615610c5a57610c575a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906120bc565b50505b509b9d5050505050505050505050505050949350505050565b60006001600160f81b03821115610c9d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ceb57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d2e908490613837565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d95611a18565b90506000610da28a612147565b6002549091508c908c90610e0c908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612198565b600254919d509a50909550610e74908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b9550610eaa858c610ea5897f0000000000000000000000000000000000000000000000000000000000000000612208565b612238565b15610eb757610eb7611444565b6000806000610ec885878b8761227a565b9c5091945092509050610edb8184613837565b610ee59089613686565b9750610ef18284613686565b610efb908d613686565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f359190613837565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f7d5760008b8152600860205260409020600101546001600160801b0316610f7f565b8b5b90508b610fb08e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d02565b9950610fbc878a613837565b9850670de0b6b3a7640000611039610fd48787613686565b600254610ff2908f90600160801b90046001600160801b0316613837565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b111561104757611047611444565b6110578a8a878a8787600061238e565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b6000848152600860205260408120546001600160801b0316908190036110fb576110ca83611a50565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611179565b61114c611147670de0b6b3a76400006111148886613837565b61111e91906138a7565b85670de0b6b3a7640000611132878a613837565b61113c91906138a7565b85929190600161242d565b611a50565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61118284611a50565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111fc611147826111df670de0b6b3a7640000866138a7565b600554600160801b90046001600160801b031691908a600061242d565b600580546001600160801b03928316600160801b02921691909117905561122286611a50565b61122c90826138be565b600480546001600160801b03928316600160801b02921691909117905561125284611a50565b6002805460009061126d9084906001600160801b031661386a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129a836124d7565b600480546000906112af908490600f0b6138de565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112df85611a50565b60028054601090611301908490600160801b90046001600160801b03166138be565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611355600b6000611341600286610c73565b815260200190815260200160002054611377565b611367600b6000611341600187610c73565b6113719190613699565b92915050565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c090611147906001600160801b03168484612513565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006114107f00000000000000000000000000000000000000000000000000000000000000008361257a565b60035461142691906001600160801b0316613686565b60025461143c906001600160801b0316846115e5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611371826004611d76565b600080600061147884611a8f565b9092509050600061148986866115e5565b9050818311156114a15761149e86838561258f565b95505b828110156114b35780830392506114b8565b600092505b6114c183611d4c565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151457869003611518565b5060005b61152181611a50565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061155885856115e5565b9050611563816125ad565b9450846000036115775760009150506115de565b84915061158a60408401602085016136f9565b156115b9576115b2856115a060208601866136ce565b6115ad6040870187613716565b6125d9565b91506115dc565b6115dc856115ca60208601866136ce565b6115d76040870187613716565b6125f4565b505b9392505050565b60006115de8383670de0b6b3a764000061258f565b60008060008060008060008061160e611a18565b9050600061161b8a612147565b6002549091508b908d90611685908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061262e565b600254919d509b50909550600090819081906116f4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b985061170284878b8861227a565b9c5091945090925090506117168284613837565b6117209089613837565b975061172c8184613686565b611736908e613837565b9c506117428a8e613686565b9b50505050505050506117cf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6117829190613837565b81526020810191909152604001600020600101546001600160801b0316428e116117c65760008e8152600860205260409020600101546001600160801b03166117c8565b8e5b600161238e565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061182757507f00000000000000000000000000000000000000000000000000000000000000006118258583613837565b105b1561183457611834611444565b6004549084900390600f0b6118498482613699565b90508361185586611377565b13801561188a57507f00000000000000000000000000000000000000000000000000000000000000006118888383612682565b105b1561189757611897611444565b600354600160801b90046001600160801b03166118d9611147826118c3670de0b6b3a7640000886138a7565b6005546001600160801b031691908c600061242d565b600580546001600160801b0319166001600160801b03929092169190911790556119038882613837565b905061190e81611a50565b600380546001600160801b03928316600160801b02921691909117905561193483611a50565b600280546001600160801b0319166001600160801b039290921691909117905561195d826124d7565b600480546001600160801b0319166001600160801b039290921691909117905561198687611a50565b600280546010906119a8908490600160801b90046001600160801b031661386a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006113717f0000000000000000000000000000000000000000000000000000000000000000836126a8565b6000611a0e8284613921565b6115de9084613837565b6002546004546000916105c5916001600160801b0390911690600f0b612682565b600061008182611a4a85888861258f565b90612715565b60006001600160801b038211156113a157604051630f0af95160e11b815260040160405180910390fd5b6000818311611a8957826115de565b50919050565b6006546000908190611ab2908490600160801b90046001600160801b03166115e5565b6006546201000090046001600160701b03169250905081811115611c2e576000611adc8383613837565b9050611aeb611147828661278a565b60068054601090611b0d908490600160801b90046001600160801b03166138be565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b46858361279f90919063ffffffff16565b90506000611b74827f00000000000000000000000000000000000000000000000000000000000000006115e5565b90508060096000828254611b889190613686565b90915550611b9890508183613837565b9150611ba382611a50565b60028054600090611bbe9084906001600160801b031661386a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611beb826127b4565b60048054600090611c00908490600f0b6138de565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c40878561279f565b91506000611c6e837f00000000000000000000000000000000000000000000000000000000000000006115e5565b9050611c9a817f00000000000000000000000000000000000000000000000000000000000000006115e5565b91508315611cbd57611cac8282613837565b611cb69084613837565b9250611cd4565b611cc78282613837565b611cd19084613686565b92505b86861015611cf757611ce783878961258f565b9250611cf482878961258f565b91505b509550959350505050565b600080611d1a84611d148a888a61258f565b9061279f565b9050611d2788848661258f565b611d319082613686565b905086811115611d415786810391505b509695505050505050565b60006001600160701b038211156113a15760405163086b151760e11b815260040160405180910390fd5b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611dc1916001600160801b031690613837565b905080600003611dd5576001915050611371565b6000611de0856127de565b905080600003611df557600192505050611371565b600080611e0383858961287a565b9150915080611e19576000945050505050611371565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e559291906139b3565b6040805180830381865af4158015611e71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e959190613a29565b91509150611eb3611ea582611377565b611eae90613a4d565b6129f5565b925082611ec95760009650505050505050611371565b611ed282611a50565b60078054600090611eed9084906001600160801b031661386a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f1a81611a50565b60078054601090611f3c908490600160801b90046001600160801b031661386a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f9987612b8d565b6040518263ffffffff1660e01b8152600401611fb59190613a69565b6040805180830381865af4158015611fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff59190613a78565b915091508061200b575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161207191613686565b61207b9190613837565b90508060000361209357506000958695509350505050565b60008087116120a35760006120ae565b6120ae84888461258f565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156120e2576120e2613aa8565b6040519080825280601f01601f19166020018201604052801561210c576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561212d578692505b828152826000602083013e90999098509650505050505050565b6000806121526105ca565b905080831161216257600061216c565b61216c8184613837565b91506115de827f000000000000000000000000000000000000000000000000000000000000000061279f565b600080806121b96121b188670de0b6b3a7640000613837565b899087612cc7565b905086156121fb576121cb888861257a565b91506121ec8a8a846121e58a670de0b6b3a7640000613837565b8989612ced565b92506121f88382613686565b90505b9750975097945050505050565b600061222661221f84670de0b6b3a7640000613837565b839061257a565b6115de90670de0b6b3a7640000613837565b60008061226f85612247611a18565b6122519190613686565b600254610ff2908790600160801b90046001600160801b0316613837565b909210949350505050565b60008080806122d187866122ca8b6122c461229d8c670de0b6b3a7640000613837565b7f00000000000000000000000000000000000000000000000000000000000000009061257a565b9061257a565b9190612cc7565b93506122fd847f00000000000000000000000000000000000000000000000000000000000000006115e5565b9150600061231e61231689670de0b6b3a7640000613837565b8a9088612cc7565b905061234a817f000000000000000000000000000000000000000000000000000000000000000061257a565b9350612376847f00000000000000000000000000000000000000000000000000000000000000006115e5565b6123809084613686565b915050945094509450949050565b600080600080600080888810156123fd5786156123b3576123b08d898b61258f565b9c505b6123be8c898b61258f565b9b506123c98b611377565b6123d28d611377565b6123dc9190613699565b90506123e98b898b61258f565b9a506123f68a898b61258f565b995061241c565b6124068b611377565b61240f8d611377565b6124199190613699565b90505b9b9c9a9b999a975050505050505050565b60008260000361243e5750846124ce565b81156124915761246f6124518487613686565b61245b85876115e5565b612465888a6115e5565b611d149190613686565b9050600061247d8588611a7a565b90508082101561248b578091505b506124ce565b8285036124a0575060006124ce565b6124cb6124ad8487613837565b6124b7858761257a565b6124c1888a6115e5565b611d149190613837565b90505b95945050505050565b600060016001607f1b03198212806124f5575060016001607f1b0382135b156113a15760405163a5353be560e01b815260040160405180910390fd5b600080612521846000612d10565b61252c846000612d10565b6125369190613699565b905060008113156125525761254b8186613686565b9450612571565b60008112156125715761256481613a4d565b61256e9086613837565b94505b50929392505050565b60006115de8383670de0b6b3a7640000612cc7565b60008260001904841183021582026125a657600080fd5b5091020490565b60006113717f000000000000000000000000000000000000000000000000000000000000000083612d26565b600060405163350b944160e11b815260040160405180910390fd5b6126286001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612d56565b50505050565b6000808061264f61264788670de0b6b3a7640000613837565b89908761258f565b905086156121fb5761266188886115e5565b91506121ec8a8a8461267b8a670de0b6b3a7640000613837565b8989612dad565b60008061268f8484612dbe565b9092509050806126a1576126a1611444565b5092915050565b604051637bce1f8160e11b8152600481018290526000906001600160a01b0384169063f79c3f02906024015b602060405180830381865afa1580156126f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115de9190613abe565b60008160000361272e5750670de0b6b3a7640000611371565b8260000361273e57506000611371565b600061274983611377565b9050600061275e61275986611377565b612dfd565b9050818102612775670de0b6b3a764000082613ad7565b905061278081613023565b9695505050505050565b60006115de83670de0b6b3a764000084612cc7565b60006115de83670de0b6b3a76400008461258f565b600060016001607f1b038211156113a15760405163a5353be560e01b815260040160405180910390fd5b60035460009081906127f9906001600160801b03168461278a565b90506128257f000000000000000000000000000000000000000000000000000000000000000082613686565b6002546001600160801b03161115611a89576002547f0000000000000000000000000000000000000000000000000000000000000000906128709083906001600160801b0316613837565b6115de9190613837565b61288261355e565b60008061288e84612b8d565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128c99190613a69565b6040805180830381865af41580156128e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129099190613a78565b935090508261291e5750600091506129ed9050565b60006129456129408461016001518561014001516115e590919063ffffffff16565b611377565b61296561294085610120015186610100015161257a90919063ffffffff16565b61296f9190613699565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612aae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ad29190613b05565b935093509350935080612aee5750600098975050505050505050565b868414612b1f57612afe84611a50565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b5057612b2f836124d7565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b7e57612b6082611a50565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b956135b0565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c8d91166131b8565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612cbf929004166131b8565b905292915050565b6000826000190484118302158202612cde57600080fd5b50910281810615159190040190565b600080612cfe88888888888861322e565b909250905080611d4157611d41611444565b6000818313612d1f57816115de565b5090919050565b604051631e66865560e21b8152600481018290526000906001600160a01b0384169063799a1954906024016126d4565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612da890849061330f565b505050565b600080612cfe888888888888613377565b600080600083612dcd86611377565b612dd79190613699565b90506000811215612def576000809250925050612df6565b9150600190505b9250929050565b6000808213612e1f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ea29084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361303e57506000919050565b680755bf798b4a1bf1e58212613067576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061278074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b600080670de0b6b3a76400006131cc6105ca565b6131d691906138a7565b90508083116131e65760006131f0565b6131f08184613837565b91506115de613227670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138a7565b839061279f565b60008060006132408989888888613437565b905086881015613257576000809250925050613304565b96869003966132668887612715565b97508781101561327d576000809250925050613304565b87810361328b818688612cc7565b9050670de0b6b3a764000081106132bf576132b86132b1670de0b6b3a76400008961278a565b8290612715565b90506132d7565b6132d46132b1670de0b6b3a76400008961279f565b90505b6132e1818661278a565b9050898110156132f957600080935093505050613304565b899003925060019150505b965096945050505050565b60006133246001600160a01b03841683613466565b905080516000141580156133495750808060200190518101906133479190613b3b565b155b15612da857604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060006133898989888888613437565b905061339986611a4a898b613686565b9750878110156133b0576000809250925050613304565b8781036133be818688612cc7565b9050670de0b6b3a764000081106133eb576133e46132b1670de0b6b3a76400008961278a565b9050613403565b6134006132b1670de0b6b3a76400008961279f565b90505b61340d818661278a565b9050808a101561342557600080935093505050613304565b90980398600198509650505050505050565b60006134438585612715565b61345c61345486611a4a868b61257a565b859085612cc7565b6124cb9190613686565b60606115de8383600084600080856001600160a01b0316848660405161348c9190613b58565b60006040518083038185875af1925050503d80600081146134c9576040519150601f19603f3d011682016040523d82523d6000602084013e6134ce565b606091505b50915091506127808683836060826134ee576134e982613535565b6115de565b815115801561350557506001600160a01b0384163b155b1561352e57604051639996b31560e01b81526001600160a01b038516600482015260240161336e565b50806115de565b8051156135455780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135726135b0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561362757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561365357600080fd5b85016060818803121561366557600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561137157611371613670565b81810360008312801583831316838312821617156126a1576126a1613670565b6001600160a01b03811681146105af57600080fd5b6000602082840312156136e057600080fd5b81356115de816136b9565b80151581146105af57600080fd5b60006020828403121561370b57600080fd5b81356115de816136eb565b6000808335601e1984360301811261372d57600080fd5b83018035915067ffffffffffffffff82111561374857600080fd5b602001915036819003821315612df657600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006137c060e08301848661375d565b9a9950505050505050505050565b80820182811260008312801582168215821617156137ee576137ee613670565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061382a60c08301848661375d565b9998505050505050505050565b8181038181111561137157611371613670565b6001600160701b038181168382160190808211156126a1576126a1613670565b6001600160801b038181168382160190808211156126a1576126a1613670565b60006020828403121561389c57600080fd5b81516115de816136b9565b808202811582820484141761137157611371613670565b6001600160801b038281168282160390808211156126a1576126a1613670565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561137157611371613670565b634e487b7160e01b600052601260045260246000fd5b6000826139305761393061390b565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139c7828551613935565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a3c57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a6257613a62613670565b5060000390565b61018081016113718284613935565b60008060408385031215613a8b57600080fd5b825191506020830151613a9d816136eb565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613ad057600080fd5b5051919050565b600082613ae657613ae661390b565b600160ff1b821460001984141615613b0057613b00613670565b500590565b60008060008060808587031215613b1b57600080fd5b8451935060208501519250604085015191506060850151613665816136eb565b600060208284031215613b4d57600080fd5b81516115de816136eb565b6000825160005b81811015613b795760208186018101518583015201613b5f565b50600092019182525091905056fea2646970667358221220864468b4c6a3fe50afa46919298bb87e2a46a287b46b5d510e3464c06732d60464736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
