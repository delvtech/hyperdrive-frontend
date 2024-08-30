export const MockHyperdriveTarget4 = {
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162003661380380620036618339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161322d62000434600039600050506000505060006109c10152600050506000818161026d015261205401526000818161189a015281816118fd01528181611c3901528181611c7501528181611e6d015261202e01526000818161056f01526120080152600061146f015260006115ca015260008181610733015261159e01526000505060008181610590015261207a01526000818161066b01526127cc0152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb0152610623015260005050600081816110ef015281816111380152818161235d015281816123a6015281816124810152818161252d0152818161261901526126c5015261322d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612cba565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612d11565b6100b5565b005b610059610095366004612cba565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610ad0565b90935091506101266020850185612d48565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612d73565b61017160408c018c612d90565b60405161018396959493929190612e00565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610c13565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612e50565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610e0e565b6102eb600360f81b6102e56020870187612d48565b88610ee8565b60006103066102fd6020870187612d48565b88848989610ad0565b90945090506103158188612e7a565b9250600061032283610f88565b5090506103326020870187612d48565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612d73565b8a888e80604001906103829190612d90565b604051610396989796959493929190612e8d565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612d48565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a76400006110d4565b905090565b6000610421427f00000000000000000000000000000000000000000000000000000000000000006111d6565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610ac8565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612ed5565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a6111ec565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061120d565b92505b506105c18361122d565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612e7a565b8a8461125b565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612ed5565b4290611399565b8461125b565b61065e886113ae565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612e7a565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c611552565b6000818152600b60205260408120549192508c8c831561080257600192506000806106eb86898d866000611587565b9150915080600960008282546107019190612ed5565b9091555061071d90508660008461071781611656565b88611680565b6107278183612ed5565b915061075786838a8e877f00000000000000000000000000000000000000000000000000000000000000006117fa565b915061076b6107668385611844565b611859565b6006805460029061078c9084906201000090046001600160701b0316612ee8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b98261122d565b600680546010906107db908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f600184611552565b6000818152600b6020526040902054909150801561091e576001945060008061083c838b8f886001611587565b9150915080600960008282546108529190612ed5565b9091555061086e90508360008461086881611656565b8a611883565b6108788183612e7a565b91506108876107668387611844565b600680546002906108a89084906201000090046001600160701b0316612ee8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d58261122d565b600680546010906108f7908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a61093087611656565b61093983611656565b6109439190612f28565b6000611a74565b8e6109558482610c13565b50505b600061096384610f88565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190612f48565b90506001600160a01b03811615610ab657610ab35a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611ab3565b50505b509b9d50505050505050505050505050505b949350505050565b600080610adc85611b3e565b505060075485906001600160801b031680821115610b0157806001600160801b031691505b81600003610b16576000809250925050610c09565b610b25600360f81b8984610e0e565b600754600090610b4b9084906001600160801b03600160801b9091048116908516611b4b565b9050610b568361122d565b610b609083612f65565b600780546001600160801b0319166001600160801b0392909216919091179055610b898161122d565b60078054601090610bab908490600160801b90046001600160801b0316612f65565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bda818887611b69565b9350610be68684611c02565b841015610c065760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c5e916001600160801b031690612e7a565b905080600003610c72576001915050610e08565b6000610c7d85611c17565b905080600003610c9257600192505050610e08565b600080610ca0838589611cb3565b9150915080610cb6576000945050505050610e08565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cf2929190613003565b6040805180830381865af4158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190613079565b91509150610d50610d4282611656565b610d4b9061309d565b611e27565b925082610d665760009650505050505050610e08565b610d6f8261122d565b60078054600090610d8a9084906001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610db78161122d565b60078054601090610dd9908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e94908490612e7a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f1a908490612ed5565b90915550506000838152600b602052604081208054839290610f3d908490612ed5565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610edb565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb187611fbf565b6040518263ffffffff1660e01b8152600401610fcd91906130b9565b6040805180830381865af4158015610fe9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100d91906130c8565b9150915080611023575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108991612ed5565b6110939190612e7a565b9050806000036110ab57506000958695509350505050565b60008087116110bb5760006110c6565b6110c6848884611b4b565b976001975095505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016111235750476111ae565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ab91906130f8565b90505b600f546000036111bf5760006111cf565b600f546111cf9084908390611b4b565b9392505050565b60006111e28284612e50565b6111cf9084612e7a565b600254600454600091610421916001600160801b0390911690600f0b6120f9565b60006112248261121e858888611b4b565b9061211f565b95945050505050565b60006001600160801b0382111561125757604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112875750505050565b6000848152600860205260408120546001600160801b0316908190036112e1576112b08361122d565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561135f565b61133261132d670de0b6b3a76400006112fa8886612e7a565b6113049190613111565b85670de0b6b3a7640000611318878a612e7a565b6113229190613111565b859291906001612194565b61122d565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6113688461122d565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116113a857826111cf565b50919050565b60065460009081906113d1908490600160801b90046001600160801b0316611844565b6006546201000090046001600160701b0316925090508181111561154d5760006113fb8383612e7a565b905061140a61132d8286612232565b6006805460109061142c908490600160801b90046001600160801b0316612f65565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611465858361224790919063ffffffff16565b90506000611493827f0000000000000000000000000000000000000000000000000000000000000000611844565b905080600960008282546114a79190612ed5565b909155506114b790508183612e7a565b91506114c28261122d565b600280546000906114dd9084906001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061150a8261225c565b6004805460009061151f908490600f0b613128565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561157c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806115948785612247565b915060006115c2837f0000000000000000000000000000000000000000000000000000000000000000611844565b90506115ee817f0000000000000000000000000000000000000000000000000000000000000000611844565b91508315611611576116008282612e7a565b61160a9084612e7a565b9250611628565b61161b8282612e7a565b6116259084612ed5565b92505b8686101561164b5761163b838789611b4b565b9250611648828789611b4b565b91505b509550959350505050565b60006001600160ff1b038211156112575760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166116c961132d826116ac670de0b6b3a764000086613111565b600554600160801b90046001600160801b031691908a6000612194565b600580546001600160801b03928316600160801b0292169190911790556116ef8661122d565b6116f99082612f65565b600480546001600160801b03928316600160801b02921691909117905561171f8461122d565b6002805460009061173a9084906001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061176783612286565b6004805460009061177c908490600f0b613128565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506117ac8561122d565b600280546010906117ce908490600160801b90046001600160801b0316612f65565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806118128461180c8a888a611b4b565b90612247565b905061181f888486611b4b565b6118299082612ed5565b9050868111156118395786810391505b509695505050505050565b60006111cf8383670de0b6b3a7640000611b4b565b60006001600160701b038211156112575760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806118c557507f00000000000000000000000000000000000000000000000000000000000000006118c38583612e7a565b105b156118d2576118d26122c2565b6004549084900390600f0b6118e78482612f28565b9050836118f386611656565b13801561192857507f000000000000000000000000000000000000000000000000000000000000000061192683836120f9565b105b15611935576119356122c2565b600354600160801b90046001600160801b031661197761132d82611961670de0b6b3a764000088613111565b6005546001600160801b031691908c6000612194565b600580546001600160801b0319166001600160801b03929092169190911790556119a18882612e7a565b90506119ac8161122d565b600380546001600160801b03928316600160801b0292169190911790556119d28361122d565b600280546001600160801b0319166001600160801b03929092169190911790556119fb82612286565b600480546001600160801b0319166001600160801b0392909216919091179055611a248761122d565b60028054601090611a46908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a8f9061132d906001600160801b031684846122db565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611ad957611ad9613155565b6040519080825280601f01601f191660200182016040528015611b03576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611b24578692505b828152826000602083013e90999098509650505050505050565b6000610e08826004610c13565b6000826000190484118302158202611b6257600080fd5b5091020490565b600080611b768585611844565b9050611b8181612342565b945084600003611b955760009150506111cf565b849150611ba86040840160208501612d73565b15611bd757611bd085611bbe6020860186612d48565b611bcb6040870187612d90565b61242b565b9150611bfa565b611bfa85611be86020860186612d48565b611bf56040870187612d90565b6125c5565b509392505050565b60006111cf8383670de0b6b3a764000061275b565b6003546000908190611c32906001600160801b031684612232565b9050611c5e7f000000000000000000000000000000000000000000000000000000000000000082612ed5565b6002546001600160801b031611156113a8576002547f000000000000000000000000000000000000000000000000000000000000000090611ca99083906001600160801b0316612e7a565b6111cf9190612e7a565b611cbb612c07565b600080611cc784611fbf565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611d0291906130b9565b6040805180830381865af4158015611d1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4291906130c8565b9350905082611d575750600091506100ad9050565b6000611d7e611d7984610160015185610140015161184490919063ffffffff16565b611656565b611d9e611d79856101200151866101000151611c0290919063ffffffff16565b611da89190612f28565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ee0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f04919061316b565b935093509350935080611f205750600098975050505050505050565b868414611f5157611f308461122d565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611f8257611f6183612286565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611fb057611f928261122d565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611fc7612c59565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916120bf9116612781565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120f192900416612781565b905292915050565b60008061210684846127f7565b909250905080612118576121186122c2565b5092915050565b6000816000036121385750670de0b6b3a7640000610e08565b8260000361214857506000610e08565b600061215383611656565b9050600061216861216386611656565b612836565b905081810261217f670de0b6b3a7640000826131ac565b905061218a81612a5c565b9695505050505050565b6000826000036121a5575084611224565b81156121f8576121d66121b88487612ed5565b6121c28587611844565b6121cc888a611844565b61180c9190612ed5565b905060006121e48588611399565b9050808210156121f2578091505b50611224565b82850361220757506000611224565b61218a6122148487612e7a565b61221e8587611c02565b612228888a611844565b61180c9190612e7a565b60006111cf83670de0b6b3a76400008461275b565b60006111cf83670de0b6b3a764000084611b4b565b600060016001607f1b038211156112575760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806122a4575060016001607f1b0382135b156112575760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122e9846000612bf1565b6122f4846000612bf1565b6122fe9190612f28565b9050600081131561231a576123138186612ed5565b9450612339565b60008112156123395761232c8161309d565b6123369086612e7a565b94505b50929392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161239157504761241c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156123f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061241991906130f8565b90505b600f546111cf90849083611b4b565b6000600f54851161243c5784612440565b600f545b9450600061244d866110d4565b905085600f60008282546124619190612e7a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612507576040516001600160a01b038716908390600081818185875af1925050503d80600081146124f7576040519150601f19603f3d011682016040523d82523d6000602084013e6124fc565b606091505b50508091505061259d565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061259a91906131da565b90505b806125bb576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f5484116125d457836125d8565b600f545b935060006125e5856110d4565b905084600f60008282546125f99190612e7a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161269f576040516001600160a01b038616908390600081818185875af1925050503d806000811461268f576040519150601f19603f3d011682016040523d82523d6000602084013e612694565b606091505b505080915050612735565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561270e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061273291906131da565b90505b80612753576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600082600019048411830215820261277257600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612795610426565b61279f9190613111565b90508083116127af5760006127b9565b6127b98184612e7a565b91506111cf6127f0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613111565b8390612247565b60008060008361280686611656565b6128109190612f28565b9050600081121561282857600080925092505061282f565b9150600190505b9250929050565b60008082136128585760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906128db9084901c611656565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612a7757506000919050565b680755bf798b4a1bf1e58212612aa0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061218a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611656565b6000818313612c0057816111cf565b5090919050565b604051806101200160405280612c1b612c59565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612ccf57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612cf457600080fd5b840160608187031215612d0657600080fd5b809150509250925092565b60008060408385031215612d2457600080fd5b50508035926020909101359150565b6001600160a01b038116811461040b57600080fd5b600060208284031215612d5a57600080fd5b81356111cf81612d33565b801515811461040b57600080fd5b600060208284031215612d8557600080fd5b81356111cf81612d65565b6000808335601e19843603018112612da757600080fd5b83018035915067ffffffffffffffff821115612dc257600080fd5b60200191503681900382131561282f57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612e2e60a083018486612dd7565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612e5f57612e5f612e3a565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0857610e08612e64565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612ec760e083018486612dd7565b9a9950505050505050505050565b80820180821115610e0857610e08612e64565b6001600160701b0381811683821601908082111561211857612118612e64565b6001600160801b0381811683821601908082111561211857612118612e64565b818103600083128015838313168383128216171561211857612118612e64565b600060208284031215612f5a57600080fd5b81516111cf81612d33565b6001600160801b0382811682821603908082111561211857612118612e64565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613017828551612f85565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561308c57600080fd5b505080516020909101519092909150565b6000600160ff1b82016130b2576130b2612e64565b5060000390565b6101808101610e088284612f85565b600080604083850312156130db57600080fd5b8251915060208301516130ed81612d65565b809150509250929050565b60006020828403121561310a57600080fd5b5051919050565b8082028115828204841417610e0857610e08612e64565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0857610e08612e64565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561318157600080fd5b84519350602085015192506040850151915060608501516131a181612d65565b939692955090935050565b6000826131bb576131bb612e3a565b600160ff1b8214600019841416156131d5576131d5612e64565b500590565b6000602082840312156131ec57600080fd5b81516111cf81612d6556fea264697066735822122048a85ade144bfa6998fe91d86a11a4fc7e53cc31fad1bfdb0fc9c60526543c0e64736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
