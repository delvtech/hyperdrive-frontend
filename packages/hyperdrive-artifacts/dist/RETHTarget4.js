export const RETHTarget4 = {
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
            "type": "receive",
            "stateMutability": "payable"
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
    bytecode: '0x6102806040523480156200001257600080fd5b506040516200359d3803806200359d8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161317f6200041e60003960005050600050506000610a2d015260005050600081816102d90152612052015260008181611898015281816118fb01528181611c3701528181611c7301528181611e6b015261202c0152600081816105db01526120060152600061146d015260006115c801526000818161079f015261159c015260005050600081816105fc01526120780152600081816106d701526125380152600081816102590152818161049a015281816105150152818161058b01528181610657015261068f01526000818160480152818161115901528181612359015281816123a9015261249a01526000505061317f6000f3fe6080604052600436106100385760003560e01c8063074a6de91461008d578063414f826d146100c6578063cbc13434146100e657600080fd5b3661008857336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610086576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b34801561009957600080fd5b506100ad6100a8366004612bdd565b610106565b6040805192835260208301919091520160405180910390f35b3480156100d257600080fd5b506100866100e1366004612c34565b610121565b3480156100f257600080fd5b506100ad610101366004612bdd565b61012f565b60008061011485858561013d565b915091505b935093915050565b61012b8282610202565b5050565b6000806101148585856102c3565b600080610148610417565b61015183610441565b600061015b61047a565b9050610172610168610492565b82600460016104be565b506101803387838888610b3c565b90935091506101926020850185612c6b565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101d060408b0160208c01612c96565b6101dd60408c018c612cb3565b6040516101ef96959493929190612d23565b60405180910390a3506101196001600055565b61020a610417565b600061021461047a565b6000848152600860205260409020600101549091506001600160801b031615610248576102418183610c7f565b50506102b9565b6000610252610492565b905061027e7f000000000000000000000000000000000000000000000000000000000000000085612d73565b15158061028a57508381105b156102a85760405163ecd29e8160e01b815260040160405180910390fd5b6102b584838560006104be565b5050505b61012b6001600055565b6000806102ce610417565b6102d783610441565b7f00000000000000000000000000000000000000000000000000000000000000008510156103185760405163211ddda360e11b815260040160405180910390fd5b600061032261047a565b905061032f610168610492565b5061033c60003388610e7a565b610357600360f81b6103516020870187612c6b565b88610f54565b60006103726103696020870187612c6b565b88848989610b3c565b90945090506103818188612d9d565b9250600061038e83610ff4565b50905061039e6020870187612c6b565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a88876103dc60408d0160208e01612c96565b8a888e80604001906103ee9190612cb3565b604051610402989796959493929190612db0565b60405180910390a35050506101196001600055565b60026000540361043a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104506020830183612c6b565b6001600160a01b0316036104775760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600061048d670de0b6b3a7640000611140565b905090565b600061048d427f00000000000000000000000000000000000000000000000000000000000000006111cd565b600084815260086020526040812060018101546001600160801b03161515806104e657504286115b156104ff57600101546001600160801b03169050610b34565b600080600061050c610492565b9050600061053a7f00000000000000000000000000000000000000000000000000000000000000008b612df8565b90505b818110156105b0576000818152600860205260409020600101546001600160801b03168015610588576000828152600860205260409020549094506001600160801b031692506105b0565b507f00000000000000000000000000000000000000000000000000000000000000000161053d565b83600003610623578893506106206105c66111ea565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061120b565b92505b5061062d8361122b565b6001850180546001600160801b0319166001600160801b039290921691909117905561068361067c7f00000000000000000000000000000000000000000000000000000000000000008b612d9d565b8a84611259565b6106c1896106bb6106b47f000000000000000000000000000000000000000000000000000000000000000083612df8565b4290611397565b84611259565b6106ca886113ac565b50600090506008816106fc7f00000000000000000000000000000000000000000000000000000000000000008d612d9d565b815260208101919091526040016000908120600101546001600160801b0316915061072860028c611550565b6000818152600b60205260408120549192508c8c831561086e576001925060008061075786898d866000611585565b91509150806009600082825461076d9190612df8565b9091555061078990508660008461078381611654565b8861167e565b6107938183612df8565b91506107c386838a8e877f00000000000000000000000000000000000000000000000000000000000000006117f8565b91506107d76107d28385611842565b611857565b600680546002906107f89084906201000090046001600160701b0316612e0b565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108258261122b565b60068054601090610847908490600160801b90046001600160801b0316612e2b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061087b600184611550565b6000818152600b6020526040902054909150801561098a57600194506000806108a8838b8f886001611585565b9150915080600960008282546108be9190612df8565b909155506108da9050836000846108d481611654565b8a611881565b6108e48183612d9d565b91506108f36107d28387611842565b600680546002906109149084906201000090046001600160701b0316612e0b565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109418261122b565b60068054601090610963908490600160801b90046001600160801b0316612e2b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109c4576109b661099c87611654565b6109a583611654565b6109af9190612e4b565b6000611a72565b8e6109c18482610c7f565b50505b60006109cf84610ff4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aad9190612e6b565b90506001600160a01b03811615610b2257610b1f5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611ab1565b50505b509b9d50505050505050505050505050505b949350505050565b600080610b4885611b3c565b505060075485906001600160801b031680821115610b6d57806001600160801b031691505b81600003610b82576000809250925050610c75565b610b91600360f81b8984610e7a565b600754600090610bb79084906001600160801b03600160801b9091048116908516611b49565b9050610bc28361122b565b610bcc9083612e88565b600780546001600160801b0319166001600160801b0392909216919091179055610bf58161122b565b60078054601090610c17908490600160801b90046001600160801b0316612e88565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c46818887611b67565b9350610c528684611c00565b841015610c725760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610cca916001600160801b031690612d9d565b905080600003610cde576001915050610e74565b6000610ce985611c15565b905080600003610cfe57600192505050610e74565b600080610d0c838589611cb1565b9150915080610d22576000945050505050610e74565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610d5e929190612f26565b6040805180830381865af4158015610d7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9e9190612f9c565b91509150610dbc610dae82611654565b610db790612fc0565b611e25565b925082610dd25760009650505050505050610e74565b610ddb8261122b565b60078054600090610df69084906001600160801b0316612e2b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610e238161122b565b60078054601090610e45908490600160801b90046001600160801b0316612e2b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ebd57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610f00908490612d9d565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f86908490612df8565b90915550506000838152600b602052604081208054839290610fa9908490612df8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610f47565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61101d87611fbd565b6040518263ffffffff1660e01b81526004016110399190612fdc565b6040805180830381865af4158015611055573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110799190612feb565b915091508061108f575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916110f591612df8565b6110ff9190612d9d565b90508060000361111757506000958695509350505050565b6000808711611127576000611132565b611132848884611b49565b976001975095505050505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa1580156111a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e74919061301b565b60006111d98284612d73565b6111e39084612d9d565b9392505050565b60025460045460009161048d916001600160801b0390911690600f0b6120f7565b60006112228261121c858888611b49565b9061211d565b95945050505050565b60006001600160801b0382111561125557604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112855750505050565b6000848152600860205260408120546001600160801b0316908190036112df576112ae8361122b565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561135d565b61133061132b670de0b6b3a76400006112f88886612d9d565b6113029190613034565b85670de0b6b3a7640000611316878a612d9d565b6113209190613034565b859291906001612192565b61122b565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6113668461122b565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116113a657826111e3565b50919050565b60065460009081906113cf908490600160801b90046001600160801b0316611842565b6006546201000090046001600160701b0316925090508181111561154b5760006113f98383612d9d565b905061140861132b8286612230565b6006805460109061142a908490600160801b90046001600160801b0316612e88565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611463858361224590919063ffffffff16565b90506000611491827f0000000000000000000000000000000000000000000000000000000000000000611842565b905080600960008282546114a59190612df8565b909155506114b590508183612d9d565b91506114c08261122b565b600280546000906114db9084906001600160801b0316612e2b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115088261225a565b6004805460009061151d908490600f0b61304b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561157a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806115928785612245565b915060006115c0837f0000000000000000000000000000000000000000000000000000000000000000611842565b90506115ec817f0000000000000000000000000000000000000000000000000000000000000000611842565b9150831561160f576115fe8282612d9d565b6116089084612d9d565b9250611626565b6116198282612d9d565b6116239084612df8565b92505b8686101561164957611639838789611b49565b9250611646828789611b49565b91505b509550959350505050565b60006001600160ff1b038211156112555760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166116c761132b826116aa670de0b6b3a764000086613034565b600554600160801b90046001600160801b031691908a6000612192565b600580546001600160801b03928316600160801b0292169190911790556116ed8661122b565b6116f79082612e88565b600480546001600160801b03928316600160801b02921691909117905561171d8461122b565b600280546000906117389084906001600160801b0316612e2b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061176583612284565b6004805460009061177a908490600f0b61304b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506117aa8561122b565b600280546010906117cc908490600160801b90046001600160801b0316612e88565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806118108461180a8a888a611b49565b90612245565b905061181d888486611b49565b6118279082612df8565b9050868111156118375786810391505b509695505050505050565b60006111e38383670de0b6b3a7640000611b49565b60006001600160701b038211156112555760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806118c357507f00000000000000000000000000000000000000000000000000000000000000006118c18583612d9d565b105b156118d0576118d06122c0565b6004549084900390600f0b6118e58482612e4b565b9050836118f186611654565b13801561192657507f000000000000000000000000000000000000000000000000000000000000000061192483836120f7565b105b15611933576119336122c0565b600354600160801b90046001600160801b031661197561132b8261195f670de0b6b3a764000088613034565b6005546001600160801b031691908c6000612192565b600580546001600160801b0319166001600160801b039290921691909117905561199f8882612d9d565b90506119aa8161122b565b600380546001600160801b03928316600160801b0292169190911790556119d08361122b565b600280546001600160801b0319166001600160801b03929092169190911790556119f982612284565b600480546001600160801b0319166001600160801b0392909216919091179055611a228761122b565b60028054601090611a44908490600160801b90046001600160801b0316612e2b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a8d9061132b906001600160801b031684846122d9565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611ad757611ad7613078565b6040519080825280601f01601f191660200182016040528015611b01576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611b22578692505b828152826000602083013e90999098509650505050505050565b6000610e74826004610c7f565b6000826000190484118302158202611b6057600080fd5b5091020490565b600080611b748585611842565b9050611b7f81612340565b945084600003611b935760009150506111e3565b849150611ba66040840160208501612c96565b15611bd557611bce85611bbc6020860186612c6b565b611bc96040870187612cb3565b612390565b9150611bf8565b611bf885611be66020860186612c6b565b611bf36040870187612cb3565b61248d565b509392505050565b60006111e38383670de0b6b3a76400006124c7565b6003546000908190611c30906001600160801b031684612230565b9050611c5c7f000000000000000000000000000000000000000000000000000000000000000082612df8565b6002546001600160801b031611156113a6576002547f000000000000000000000000000000000000000000000000000000000000000090611ca79083906001600160801b0316612d9d565b6111e39190612d9d565b611cb9612b2a565b600080611cc584611fbd565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611d009190612fdc565b6040805180830381865af4158015611d1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d409190612feb565b9350905082611d555750600091506101199050565b6000611d7c611d7784610160015185610140015161184290919063ffffffff16565b611654565b611d9c611d77856101200151866101000151611c0090919063ffffffff16565b611da69190612e4b565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ede573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f02919061308e565b935093509350935080611f1e5750600098975050505050505050565b868414611f4f57611f2e8461122b565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611f8057611f5f83612284565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611fae57611f908261122b565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611fc5612b7c565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916120bd91166124ed565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120ef929004166124ed565b905292915050565b6000806121048484612563565b909250905080612116576121166122c0565b5092915050565b6000816000036121365750670de0b6b3a7640000610e74565b8260000361214657506000610e74565b600061215183611654565b9050600061216661216186611654565b6125a2565b905081810261217d670de0b6b3a7640000826130cf565b9050612188816127c8565b9695505050505050565b6000826000036121a3575084611222565b81156121f6576121d46121b68487612df8565b6121c08587611842565b6121ca888a611842565b61180a9190612df8565b905060006121e28588611397565b9050808210156121f0578091505b50611222565b82850361220557506000611222565b6121886122128487612d9d565b61221c8587611c00565b612226888a611842565b61180a9190612d9d565b60006111e383670de0b6b3a7640000846124c7565b60006111e383670de0b6b3a764000084611b49565b600060016001607f1b038211156112555760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806122a2575060016001607f1b0382135b156112555760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122e784600061295d565b6122f284600061295d565b6122fc9190612e4b565b90506000811315612318576123118186612df8565b9450612337565b60008112156123375761232a81612fc0565b6123349086612d9d565b94505b50929392505050565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e9060240161118c565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b1580156123f557600080fd5b505af1158015612409573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d806000811461245d576040519150601f19603f3d011682016040523d82523d6000602084013e612462565b606091505b5050905080612484576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6124c16001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612973565b50505050565b60008260001904841183021582026124de57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612501610492565b61250b9190613034565b905080831161251b576000612525565b6125258184612d9d565b91506111e361255c670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613034565b8390612245565b60008060008361257286611654565b61257c9190612e4b565b9050600081121561259457600080925092505061259b565b9150600190505b9250929050565b60008082136125c45760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906126479084901c611654565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136127e357506000919050565b680755bf798b4a1bf1e5821261280c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061218874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611654565b600081831361296c57816111e3565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526129c59084906129ca565b505050565b60006129df6001600160a01b03841683612a32565b90508051600014158015612a04575080806020019051810190612a0291906130fd565b155b156129c557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606111e38383600084600080856001600160a01b03168486604051612a58919061311a565b60006040518083038185875af1925050503d8060008114612a95576040519150601f19603f3d011682016040523d82523d6000602084013e612a9a565b606091505b5091509150612188868383606082612aba57612ab582612b01565b6111e3565b8151158015612ad157506001600160a01b0384163b155b15612afa57604051639996b31560e01b81526001600160a01b0385166004820152602401612a29565b50806111e3565b805115612b115780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280612b3e612b7c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612bf257600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612c1757600080fd5b840160608187031215612c2957600080fd5b809150509250925092565b60008060408385031215612c4757600080fd5b50508035926020909101359150565b6001600160a01b038116811461047757600080fd5b600060208284031215612c7d57600080fd5b81356111e381612c56565b801515811461047757600080fd5b600060208284031215612ca857600080fd5b81356111e381612c88565b6000808335601e19843603018112612cca57600080fd5b83018035915067ffffffffffffffff821115612ce557600080fd5b60200191503681900382131561259b57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612d5160a083018486612cfa565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612d8257612d82612d5d565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e7457610e74612d87565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612dea60e083018486612cfa565b9a9950505050505050505050565b80820180821115610e7457610e74612d87565b6001600160701b0381811683821601908082111561211657612116612d87565b6001600160801b0381811683821601908082111561211657612116612d87565b818103600083128015838313168383128216171561211657612116612d87565b600060208284031215612e7d57600080fd5b81516111e381612c56565b6001600160801b0382811682821603908082111561211657612116612d87565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612f3a828551612ea8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612faf57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612fd557612fd5612d87565b5060000390565b6101808101610e748284612ea8565b60008060408385031215612ffe57600080fd5b82519150602083015161301081612c88565b809150509250929050565b60006020828403121561302d57600080fd5b5051919050565b8082028115828204841417610e7457610e74612d87565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e7457610e74612d87565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156130a457600080fd5b84519350602085015192506040850151915060608501516130c481612c88565b939692955090935050565b6000826130de576130de612d5d565b600160ff1b8214600019841416156130f8576130f8612d87565b500590565b60006020828403121561310f57600080fd5b81516111e381612c88565b6000825160005b8181101561313b5760208186018101518583015201613121565b50600092019182525091905056fea264697066735822122054819e4434d52530c67bf767f61e3cc9c6d4b4f1812d9d8768bc675d966c5b1964736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
