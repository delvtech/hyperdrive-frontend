export const StETHTarget4 = {
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
            "name": "ExpInvalidExponent",
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
    bytecode: '0x6102806040523480156200001257600080fd5b506040516200329f3803806200329f8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051612e8e62000411600039600050506000505060006109c10152600050506000818161026d0152611fe601526000818161182c0152818161188f01528181611bcb01528181611c0701528181611dff0152611fc001526000818161056f0152611f9a015260006114010152600061155c015260008181610733015261153001526000505060008181610590015261200c01526000818161066b015261244a0152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb01526106230152600081816110ed015281816122ed0152612365015260005050612e8e6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612938565b61009a565b6040805192835260208301919091520160405180910390f35b61008561008036600461298f565b6100b5565b005b610059610095366004612938565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610ad0565b909350915061012660208501856129c6565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c016129f1565b61017160408c018c612a0e565b60405161018396959493929190612a7e565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610c13565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612ace565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610e0e565b6102eb600360f81b6102e560208701876129c6565b88610ee8565b60006103066102fd60208701876129c6565b88848989610ad0565b90945090506103158188612af8565b9250600061032283610f88565b50905061033260208701876129c6565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e016129f1565b8a888e80604001906103829190612a0e565b604051610396989796959493929190612b0b565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e460208301836129c6565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a76400006110d4565b905090565b6000610421427f0000000000000000000000000000000000000000000000000000000000000000611161565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610ac8565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612b53565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a61117e565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061119f565b92505b506105c1836111bf565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612af8565b8a846111ed565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612b53565b429061132b565b846111ed565b61065e88611340565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612af8565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c6114e4565b6000818152600b60205260408120549192508c8c831561080257600192506000806106eb86898d866000611519565b9150915080600960008282546107019190612b53565b9091555061071d905086600084610717816115e8565b88611612565b6107278183612b53565b915061075786838a8e877f000000000000000000000000000000000000000000000000000000000000000061178c565b915061076b61076683856117d6565b6117eb565b6006805460029061078c9084906201000090046001600160701b0316612b66565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b9826111bf565b600680546010906107db908490600160801b90046001600160801b0316612b86565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f6001846114e4565b6000818152600b6020526040902054909150801561091e576001945060008061083c838b8f886001611519565b9150915080600960008282546108529190612b53565b9091555061086e905083600084610868816115e8565b8a611815565b6108788183612af8565b915061088761076683876117d6565b600680546002906108a89084906201000090046001600160701b0316612b66565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d5826111bf565b600680546010906108f7908490600160801b90046001600160801b0316612b86565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a610930876115e8565b610939836115e8565b6109439190612ba6565b6000611a06565b8e6109558482610c13565b50505b600061096384610f88565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190612bc6565b90506001600160a01b03811615610ab657610ab35a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a45565b50505b509b9d50505050505050505050505050505b949350505050565b600080610adc85611ad0565b505060075485906001600160801b031680821115610b0157806001600160801b031691505b81600003610b16576000809250925050610c09565b610b25600360f81b8984610e0e565b600754600090610b4b9084906001600160801b03600160801b9091048116908516611add565b9050610b56836111bf565b610b609083612be3565b600780546001600160801b0319166001600160801b0392909216919091179055610b89816111bf565b60078054601090610bab908490600160801b90046001600160801b0316612be3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bda818887611afb565b9350610be68684611b94565b841015610c065760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c5e916001600160801b031690612af8565b905080600003610c72576001915050610e08565b6000610c7d85611ba9565b905080600003610c9257600192505050610e08565b600080610ca0838589611c45565b9150915080610cb6576000945050505050610e08565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cf2929190612c81565b6040805180830381865af4158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190612cf7565b91509150610d50610d42826115e8565b610d4b90612d1b565b611db9565b925082610d665760009650505050505050610e08565b610d6f826111bf565b60078054600090610d8a9084906001600160801b0316612b86565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610db7816111bf565b60078054601090610dd9908490600160801b90046001600160801b0316612b86565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e94908490612af8565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f1a908490612b53565b90915550506000838152600b602052604081208054839290610f3d908490612b53565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610edb565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb187611f51565b6040518263ffffffff1660e01b8152600401610fcd9190612d37565b6040805180830381865af4158015610fe9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100d9190612d46565b9150915080611023575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108991612b53565b6110939190612af8565b9050806000036110ab57506000958695509350505050565b60008087116110bb5760006110c6565b6110c6848884611add565b976001975095505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa15801561113d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e089190612d76565b600061116d8284612ace565b6111779084612af8565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b61208b565b60006111b6826111b0858888611add565b906120b1565b95945050505050565b60006001600160801b038211156111e957604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112195750505050565b6000848152600860205260408120546001600160801b03169081900361127357611242836111bf565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112f1565b6112c46112bf670de0b6b3a764000061128c8886612af8565b6112969190612d8f565b85670de0b6b3a76400006112aa878a612af8565b6112b49190612d8f565b859291906001612126565b6111bf565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112fa846111bf565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161133a5782611177565b50919050565b6006546000908190611363908490600160801b90046001600160801b03166117d6565b6006546201000090046001600160701b031692509050818111156114df57600061138d8383612af8565b905061139c6112bf82866121c4565b600680546010906113be908490600160801b90046001600160801b0316612be3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113f785836121d990919063ffffffff16565b90506000611425827f00000000000000000000000000000000000000000000000000000000000000006117d6565b905080600960008282546114399190612b53565b9091555061144990508183612af8565b9150611454826111bf565b6002805460009061146f9084906001600160801b0316612b86565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061149c826121ee565b600480546000906114b1908490600f0b612da6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561150e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061152687856121d9565b91506000611554837f00000000000000000000000000000000000000000000000000000000000000006117d6565b9050611580817f00000000000000000000000000000000000000000000000000000000000000006117d6565b915083156115a3576115928282612af8565b61159c9084612af8565b92506115ba565b6115ad8282612af8565b6115b79084612b53565b92505b868610156115dd576115cd838789611add565b92506115da828789611add565b91505b509550959350505050565b60006001600160ff1b038211156111e95760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661165b6112bf8261163e670de0b6b3a764000086612d8f565b600554600160801b90046001600160801b031691908a6000612126565b600580546001600160801b03928316600160801b029216919091179055611681866111bf565b61168b9082612be3565b600480546001600160801b03928316600160801b0292169190911790556116b1846111bf565b600280546000906116cc9084906001600160801b0316612b86565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116f983612218565b6004805460009061170e908490600f0b612da6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061173e856111bf565b60028054601090611760908490600160801b90046001600160801b0316612be3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117a48461179e8a888a611add565b906121d9565b90506117b1888486611add565b6117bb9082612b53565b9050868111156117cb5786810391505b509695505050505050565b60006111778383670de0b6b3a7640000611add565b60006001600160701b038211156111e95760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061185757507f00000000000000000000000000000000000000000000000000000000000000006118558583612af8565b105b1561186457611864612254565b6004549084900390600f0b6118798482612ba6565b905083611885866115e8565b1380156118ba57507f00000000000000000000000000000000000000000000000000000000000000006118b8838361208b565b105b156118c7576118c7612254565b600354600160801b90046001600160801b03166119096112bf826118f3670de0b6b3a764000088612d8f565b6005546001600160801b031691908c6000612126565b600580546001600160801b0319166001600160801b03929092169190911790556119338882612af8565b905061193e816111bf565b600380546001600160801b03928316600160801b029216919091179055611964836111bf565b600280546001600160801b0319166001600160801b039290921691909117905561198d82612218565b600480546001600160801b0319166001600160801b03929092169190911790556119b6876111bf565b600280546010906119d8908490600160801b90046001600160801b0316612b86565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a21906112bf906001600160801b0316848461226d565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a6b57611a6b612dd3565b6040519080825280601f01601f191660200182016040528015611a95576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611ab6578692505b828152826000602083013e90999098509650505050505050565b6000610e08826004610c13565b6000826000190484118302158202611af457600080fd5b5091020490565b600080611b0885856117d6565b9050611b13816122d4565b945084600003611b27576000915050611177565b849150611b3a60408401602085016129f1565b15611b6957611b6285611b5060208601866129c6565b611b5d6040870187612a0e565b612324565b9150611b8c565b611b8c85611b7a60208601866129c6565b611b876040870187612a0e565b61233f565b509392505050565b60006111778383670de0b6b3a76400006123d9565b6003546000908190611bc4906001600160801b0316846121c4565b9050611bf07f000000000000000000000000000000000000000000000000000000000000000082612b53565b6002546001600160801b0316111561133a576002547f000000000000000000000000000000000000000000000000000000000000000090611c3b9083906001600160801b0316612af8565b6111779190612af8565b611c4d612885565b600080611c5984611f51565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c949190612d37565b6040805180830381865af4158015611cb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd49190612d46565b9350905082611ce95750600091506100ad9050565b6000611d10611d0b8461016001518561014001516117d690919063ffffffff16565b6115e8565b611d30611d0b856101200151866101000151611b9490919063ffffffff16565b611d3a9190612ba6565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e969190612de9565b935093509350935080611eb25750600098975050505050505050565b868414611ee357611ec2846111bf565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611f1457611ef383612218565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f4257611f24826111bf565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f596128d7565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161205191166123ff565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612083929004166123ff565b905292915050565b6000806120988484612475565b9092509050806120aa576120aa612254565b5092915050565b6000816000036120ca5750670de0b6b3a7640000610e08565b826000036120da57506000610e08565b60006120e5836115e8565b905060006120fa6120f5866115e8565b6124b4565b9050818102612111670de0b6b3a764000082612e2a565b905061211c816126da565b9695505050505050565b6000826000036121375750846111b6565b811561218a5761216861214a8487612b53565b61215485876117d6565b61215e888a6117d6565b61179e9190612b53565b90506000612176858861132b565b905080821015612184578091505b506111b6565b828503612199575060006111b6565b61211c6121a68487612af8565b6121b08587611b94565b6121ba888a6117d6565b61179e9190612af8565b600061117783670de0b6b3a7640000846123d9565b600061117783670de0b6b3a764000084611add565b600060016001607f1b038211156111e95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612236575060016001607f1b0382135b156111e95760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b60008061227b84600061286f565b61228684600061286f565b6122909190612ba6565b905060008113156122ac576122a58186612b53565b94506122cb565b60008112156122cb576122be81612d1b565b6122c89086612af8565b94505b50929392505050565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401611120565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af11580156123ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123d29190612d76565b5050505050565b60008260001904841183021582026123f057600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612413610426565b61241d9190612d8f565b905080831161242d576000612437565b6124378184612af8565b915061117761246e670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612d8f565b83906121d9565b600080600083612484866115e8565b61248e9190612ba6565b905060008112156124a65760008092509250506124ad565b9150600190505b9250929050565b60008082136124d65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906125599084901c6115e8565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136126f557506000919050565b680755bf798b4a1bf1e5821261271e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061211c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115e8565b600081831361287e5781611177565b5090919050565b6040518061012001604052806128996128d7565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060006060848603121561294d57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561297257600080fd5b84016060818703121561298457600080fd5b809150509250925092565b600080604083850312156129a257600080fd5b50508035926020909101359150565b6001600160a01b038116811461040b57600080fd5b6000602082840312156129d857600080fd5b8135611177816129b1565b801515811461040b57600080fd5b600060208284031215612a0357600080fd5b8135611177816129e3565b6000808335601e19843603018112612a2557600080fd5b83018035915067ffffffffffffffff821115612a4057600080fd5b6020019150368190038213156124ad57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612aac60a083018486612a55565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612add57612add612ab8565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0857610e08612ae2565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612b4560e083018486612a55565b9a9950505050505050505050565b80820180821115610e0857610e08612ae2565b6001600160701b038181168382160190808211156120aa576120aa612ae2565b6001600160801b038181168382160190808211156120aa576120aa612ae2565b81810360008312801583831316838312821617156120aa576120aa612ae2565b600060208284031215612bd857600080fd5b8151611177816129b1565b6001600160801b038281168282160390808211156120aa576120aa612ae2565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612c95828551612c03565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612d0a57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612d3057612d30612ae2565b5060000390565b6101808101610e088284612c03565b60008060408385031215612d5957600080fd5b825191506020830151612d6b816129e3565b809150509250929050565b600060208284031215612d8857600080fd5b5051919050565b8082028115828204841417610e0857610e08612ae2565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0857610e08612ae2565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612dff57600080fd5b8451935060208501519250604085015191506060850151612e1f816129e3565b939692955090935050565b600082612e3957612e39612ab8565b600160ff1b821460001984141615612e5357612e53612ae2565b50059056fea2646970667358221220d841912540a7400b3ab5bb227ab6f959a0760f626f27e562704a686f5e55201f64736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
