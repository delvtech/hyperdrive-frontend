export const LsETHTarget2 = {
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004115380380620041158339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c6e620004a760003960005050600050506000610c4101526000505060008181610100015281816103100152612c680152600081816114d801528181611c1601528181611c790152818161242b015281816128460152818161288201528181612a810152612c420152600081816107ef01528181610da101528181610de301528181610ed50152818161134b015281816113aa0152612c1c0152600061183501526000818161195b0152818161254c015281816125c50152612d820152600081816109b301528181610e56015281816114450152818161192f0152612599015260008181610e35015281816125180152612d3e01526000818161081001528181610d7f01528181610e0401528181610ef601528181611329015281816113cb0152612c8e0152600081816101de015281816103a8015281816108eb015261330c0152600081816106a9015281816107290152818161079f0152818161086b01526108a301526000818161168f0152612498015260005050613c6e6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046136c2565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046136c2565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610d50565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c89190613737565b909155506101d99050844283610f32565b6102037f000000000000000000000000000000000000000000000000000000000000000085613737565b98506102118389888c611070565b600061021e60018b61120a565b90506102378161023160208e018e61375f565b8b61123f565b8d8a8a898e8561024a602083018361375f565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a868886610287604088016020890161378a565b8961029560408a018a6137a7565b6040516102a89796959493929190613817565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112e7565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613737565b90506000806000806103e08e89886112fa565b60098054949850929650909450925083916000906103ff908490613737565b909155506104109050874283610f32565b50600061041e84898d611480565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b896114b2565b600061046860028861120a565b90508c6104828261047c602084018461375f565b8561123f565b858b8684610493602086018661375f565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c0161378a565b6104e4896104de8a8d613858565b90610683565b8d6104f260408e018e6137a7565b60405161050698979695949392919061386b565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b6000610584602083018361375f565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c2604085016020860161378a565b156105e7576105dd856105d860408701876137a7565b611666565b90935090506105ff565b50346105ff856105fa60408701876137a7565b611682565b6106076112e7565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a76400006116bc565b90505b92915050565b60006106cd427f00000000000000000000000000000000000000000000000000000000000000006116da565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610d48565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b613737565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da6116f0565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611711565b92505b5061084183611731565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613858565b8a84610f32565b6108d5896108cf6108c87f000000000000000000000000000000000000000000000000000000000000000083613737565b429061175f565b84610f32565b6108de88611774565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613858565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c61120a565b6000818152600b60205260408120549192508c8c8315610a82576001925060008061096b86898d866000611918565b9150915080600960008282546109819190613737565b9091555061099d905086600084610997816119e7565b88611a11565b6109a78183613737565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b8b565b91506109eb6109e68385610683565b611bd5565b60068054600290610a0c9084906201000090046001600160701b03166138b3565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3982611731565b60068054601090610a5b908490600160801b90046001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f60018461120a565b6000818152600b60205260409020549091508015610b9e5760019450600080610abc838b8f886001611918565b915091508060096000828254610ad29190613737565b90915550610aee905083600084610ae8816119e7565b8a611bff565b610af88183613858565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b03166138b3565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b5582611731565b60068054601090610b77908490600160801b90046001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb0876119e7565b610bb9836119e7565b610bc391906138f3565b6000611df0565b8e610bd58482611e2f565b50505b6000610be384612029565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc19190613913565b90506001600160a01b03811615610d3657610d335a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612175565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610d606116f0565b600254909150610dc5908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612200565b600254909450610e28908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611711565b9150610e7f8785610e7a857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061222c565b612291565b15610e8c57610e8c6122d3565b610e98878588856122ec565b91965094509250670de0b6b3a7640000610f1a610eb58784613737565b600254610ed3908890600160801b90046001600160801b0316613858565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611711565b1115610f2857610f286122d3565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f5e5750505050565b6000848152600860205260408120546001600160801b031690819003610fb857610f8783611731565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611036565b611009611004670de0b6b3a7640000610fd18886613858565b610fdb9190613930565b85670de0b6b3a7640000610fef878a613858565b610ff99190613930565b859291906001612338565b611731565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61103f84611731565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110b26110048261109c670de0b6b3a764000086613930565b6005546001600160801b03169190886001612338565b600580546001600160801b0319166001600160801b03929092169190911790556110db85611731565b600280546000906110f69084906001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061112384611731565b60028054601090611145908490600160801b90046001600160801b0316613947565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061117284611731565b61117c90826138d3565b600380546001600160801b03808416600160801b029116179055905060006111a3836123e0565b90506111c1816111b2876119e7565b6111bc9084613967565b611df0565b6111ca84612424565b6111d6576111d66122d3565b60006111e185612484565b90508061120157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112345760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290611271908490613737565b90915550506000838152600b602052604081208054839290611294908490613737565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a7640000612491565b600080600080600061130a6116f0565b60025490915061136f908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006124bd565b93508761137c85896124de565b111561138a5761138a6122d3565b60025460009081906113ef908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611711565b93506114058a670de0b6b3a7640000868c6124f3565b5091935090915061141890508183613858565b6114229087613858565b95508861146f816114698d611437868c613858565b8d6114428782612601565b877f0000000000000000000000000000000000000000000000000000000000000000612617565b906124de565b975090945050505093509350935093565b6000611492604083016020840161378a565b1561149e5750826114ab565b6114a8848461263c565b90505b9392505050565b6002546001600160801b0316838110156114ce576114ce6122d3565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611506908390600f0b612651565b1015611514576115146122d3565b60045461155e9061100490600160801b90046001600160801b0316611541670de0b6b3a764000086613930565b600554600160801b90046001600160801b03169190896001612338565b600580546001600160801b03928316600160801b02921691909117905561158481611731565b600280546001600160801b0319166001600160801b03929092169190911790556115ad85611731565b600280546010906115cf908490600160801b90046001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115fc85611731565b6004805460109061161e908490600160801b90046001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061164d836123e0565b90506111c18161165c886119e7565b6111bc90846138f3565b60008060405163350b944160e11b815260040160405180910390fd5b6116b76001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612677565b505050565b60008260001904841183021582026116d357600080fd5b5091020490565b60006116e682846139a5565b6106989084613858565b6002546004546000916106cd916001600160801b0390911690600f0b612651565b6000611728826117228588886116bc565b906126d7565b95945050505050565b60006001600160801b0382111561175b57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161176e5782610698565b50919050565b6006546000908190611797908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b031692509050818111156119135760006117c18383613858565b90506117d06110048286612742565b600680546010906117f2908490600160801b90046001600160801b0316613947565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061182b858361263c90919063ffffffff16565b90506000611859827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050806009600082825461186d9190613737565b9091555061187d90508183613858565b915061188882611731565b600280546000906118a39084906001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118d082612757565b600480546000906118e5908490600f0b6139b9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611925878561263c565b91506000611953837f0000000000000000000000000000000000000000000000000000000000000000610683565b905061197f817f0000000000000000000000000000000000000000000000000000000000000000610683565b915083156119a2576119918282613858565b61199b9084613858565b92506119b9565b6119ac8282613858565b6119b69084613737565b92505b868610156119dc576119cc8387896116bc565b92506119d98287896116bc565b91505b509550959350505050565b60006001600160ff1b0382111561175b5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611a5a61100482611a3d670de0b6b3a764000086613930565b600554600160801b90046001600160801b031691908a6000612338565b600580546001600160801b03928316600160801b029216919091179055611a8086611731565b611a8a9082613947565b600480546001600160801b03928316600160801b029216919091179055611ab084611731565b60028054600090611acb9084906001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611af883612781565b60048054600090611b0d908490600f0b6139b9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b3d85611731565b60028054601090611b5f908490600160801b90046001600160801b0316613947565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611ba384611b9d8a888a6116bc565b9061263c565b9050611bb08884866116bc565b611bba9082613737565b905086811115611bca5786810391505b509695505050505050565b60006001600160701b0382111561175b5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611c4157507f0000000000000000000000000000000000000000000000000000000000000000611c3f8583613858565b105b15611c4e57611c4e6122d3565b6004549084900390600f0b611c6384826138f3565b905083611c6f866119e7565b138015611ca457507f0000000000000000000000000000000000000000000000000000000000000000611ca28383612651565b105b15611cb157611cb16122d3565b600354600160801b90046001600160801b0316611cf361100482611cdd670de0b6b3a764000088613930565b6005546001600160801b031691908c6000612338565b600580546001600160801b0319166001600160801b0392909216919091179055611d1d8882613858565b9050611d2881611731565b600380546001600160801b03928316600160801b029216919091179055611d4e83611731565b600280546001600160801b0319166001600160801b0392909216919091179055611d7782612781565b600480546001600160801b0319166001600160801b0392909216919091179055611da087611731565b60028054601090611dc2908490600160801b90046001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611e0b90611004906001600160801b031684846127bd565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e7a916001600160801b031690613858565b905080600003611e8e57600191505061069b565b6000611e9985612824565b905080600003611eae5760019250505061069b565b600080611ebc8385896128c0565b9150915080611ed257600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f0e929190613a64565b6040805180830381865af4158015611f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f4e9190613ada565b91509150611f6c611f5e826119e7565b611f6790613afe565b612a3b565b925082611f82576000965050505050505061069b565b611f8b82611731565b60078054600090611fa69084906001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fd381611731565b60078054601090611ff5908490600160801b90046001600160801b03166138d3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61205287612bd3565b6040518263ffffffff1660e01b815260040161206e9190613b1a565b6040805180830381865af415801561208a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ae9190613b29565b91509150806120c4575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161212a91613737565b6121349190613858565b90508060000361214c57506000958695509350505050565b600080871161215c576000612167565b6121678488846116bc565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561219b5761219b613b59565b6040519080825280601f01601f1916602001820160405280156121c5576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121e6578692505b828152826000602083013e90999098509650505050505050565b600061222187878761221a88670de0b6b3a7640000613858565b8787612d0d565b979650505050505050565b60006114a861226d61224684670de0b6b3a7640000613858565b611469670de0b6b3a764000061225c818a612742565b6122669190613858565b87906124de565b61227f90670de0b6b3a7640000613737565b611b9d84670de0b6b3a7640000613858565b6000806122c8856122a06116f0565b6122aa9190613737565b600254610ed3908790600160801b90046001600160801b0316613858565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006122ff898789612d30565b909250905061230e8289613858565b9750600061231d82888a6116bc565b9050612329818b613858565b9a989950979650505050505050565b600082600003612349575084611728565b811561239c5761237a61235c8487613737565b6123668587610683565b612370888a610683565b611b9d9190613737565b90506000612388858861175f565b905080821015612396578091505b50611728565b8285036123ab57506000611728565b6123d66123b88487613858565b6123c285876124de565b6123cc888a610683565b611b9d9190613858565b9695505050505050565b6000612408600b60006123f460028661120a565b8152602001908152602001600020546119e7565b61241a600b60006123f460018761120a565b61069b91906138f3565b60006124507f0000000000000000000000000000000000000000000000000000000000000000836124de565b60035461246691906001600160801b0316613737565b60025461247c906001600160801b031684610683565b101592915050565b600061069b826004611e2f565b600061069b7f000000000000000000000000000000000000000000000000000000000000000083612db0565b60006122218787876124d788670de0b6b3a7640000613858565b8787612e1c565b60006106988383670de0b6b3a7640000612e2d565b6000808080612544878661253d8b6114696125168c670de0b6b3a7640000613858565b7f0000000000000000000000000000000000000000000000000000000000000000906124de565b9190612e2d565b9350612570847f0000000000000000000000000000000000000000000000000000000000000000610683565b9150600061259161258989670de0b6b3a7640000613858565b8a9088612e2d565b90506125bd817f00000000000000000000000000000000000000000000000000000000000000006124de565b93506125e9847f0000000000000000000000000000000000000000000000000000000000000000610683565b6125f39084613737565b915050945094509450949050565b60008183116126105781610698565b5090919050565b60008061262f846126298a888a612e2d565b90612742565b9050611bb0888486612e2d565b600061069883670de0b6b3a7640000846116bc565b60008061265e8484612e53565b909250905080612670576126706122d3565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526126d1908590612e8f565b50505050565b6000816000036126f05750670de0b6b3a764000061069b565b826000036127005750600061069b565b600061270b836119e7565b9050600061272061271b866119e7565b612ef7565b9050818102612737670de0b6b3a764000082613b6f565b90506123d68161311d565b600061069883670de0b6b3a764000084612e2d565b600060016001607f1b0382111561175b5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061279f575060016001607f1b0382135b1561175b5760405163a5353be560e01b815260040160405180910390fd5b6000806127cb8460006132b2565b6127d68460006132b2565b6127e091906138f3565b905060008113156127fc576127f58186613737565b945061281b565b600081121561281b5761280e81613afe565b6128189086613858565b94505b50929392505050565b600354600090819061283f906001600160801b031684612742565b905061286b7f000000000000000000000000000000000000000000000000000000000000000082613737565b6002546001600160801b0316111561176e576002547f0000000000000000000000000000000000000000000000000000000000000000906128b69083906001600160801b0316613858565b6114ab9190613858565b6128c861360f565b6000806128d484612bd3565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161290f9190613b1a565b6040805180830381865af415801561292b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061294f9190613b29565b9350905082612964575060009150612a339050565b600061298b61298684610160015185610140015161068390919063ffffffff16565b6119e7565b6129ab6129868561012001518661010001516124de90919063ffffffff16565b6129b591906138f3565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612af4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b189190613b9d565b935093509350935080612b345750600098975050505050505050565b868414612b6557612b4484611731565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b9657612b7583612781565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bc457612ba682611731565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612bdb613661565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612cd391166132c1565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d05929004166132c1565b905292915050565b600080612d1e888888888888613337565b909250905080611bca57611bca6122d3565b600080612d7a8561146985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612d70818c612742565b6114699190613858565b9150612da6827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b604051637bce1f8160e11b8152600481018290526000906001600160a01b0384169063f79c3f0290602401602060405180830381865afa158015612df8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106989190613bd3565b600080612d1e8888888888886133ff565b6000826000190484118302158202612e4457600080fd5b50910281810615159190040190565b600080600083612e62866119e7565b612e6c91906138f3565b90506000811215612e8457600080925092505061067c565b946001945092505050565b6000612ea46001600160a01b038416836134bf565b90508051600014158015612ec9575080806020019051810190612ec79190613bec565b155b156116b757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612f195760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f9c9084901c6119e7565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361313857506000919050565b680755bf798b4a1bf1e58212613161576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906123d674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119e7565b60008183136126105781610698565b600080670de0b6b3a76400006132d56106a1565b6132df9190613930565b90508083116132ef5760006132f9565b6132f98184613858565b91506114ab613330670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613930565b839061263c565b600080600061334989898888886134cd565b90506133638661172261335c8a8d613737565b8790610683565b9850613370858a866116bc565b9850888110156133875760008092509250506133f4565b888103670de0b6b3a764000081106133bc576133b56133ae670de0b6b3a764000089612742565b82906126d7565b90506133d4565b6133d16133ae670de0b6b3a76400008961263c565b90505b808910156133ea576000809350935050506133f4565b8803925060019150505b965096945050505050565b600080600061341189898888886134cd565b905061342186611722898b613737565b9750878110156134385760008092509250506133f4565b878103613446818688612e2d565b9050670de0b6b3a764000081106134735761346c6133ae670de0b6b3a764000089612742565b905061348b565b6134886133ae670de0b6b3a76400008961263c565b90505b6134958186612742565b9050808a10156134ad576000809350935050506133f4565b90980398600198509650505050505050565b6060610698838360006134fc565b60006134d985856126d7565b6134f26134ea86611722868b6124de565b859085612e2d565b6123d69190613737565b6060814710156135215760405163cd78605960e01b8152306004820152602401612eee565b600080856001600160a01b0316848660405161353d9190613c09565b60006040518083038185875af1925050503d806000811461357a576040519150601f19603f3d011682016040523d82523d6000602084013e61357f565b606091505b50915091506123d686838360608261359f5761359a826135e6565b6114ab565b81511580156135b657506001600160a01b0384163b155b156135df57604051639996b31560e01b81526001600160a01b0385166004820152602401612eee565b50806114ab565b8051156135f65780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613623613661565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156136d857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561370457600080fd5b85016060818803121561371657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b613721565b6001600160a01b03811681146105ab57600080fd5b60006020828403121561377157600080fd5b81356114ab8161374a565b80151581146105ab57600080fd5b60006020828403121561379c57600080fd5b81356114ab8161377c565b6000808335601e198436030181126137be57600080fd5b83018035915067ffffffffffffffff8211156137d957600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061384b60c0830184866137ee565b9998505050505050505050565b8181038181111561069b5761069b613721565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006138a560e0830184866137ee565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561267057612670613721565b6001600160801b0381811683821601908082111561267057612670613721565b818103600083128015838313168383128216171561267057612670613721565b60006020828403121561392557600080fd5b81516114ab8161374a565b808202811582820484141761069b5761069b613721565b6001600160801b0382811682821603908082111561267057612670613721565b808201828112600083128015821682158216171561398757613987613721565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826139b4576139b461398f565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b613721565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613a788285516139e6565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613aed57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613b1357613b13613721565b5060000390565b610180810161069b82846139e6565b60008060408385031215613b3c57600080fd5b825191506020830151613b4e8161377c565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613b7e57613b7e61398f565b600160ff1b821460001984141615613b9857613b98613721565b500590565b60008060008060808587031215613bb357600080fd5b84519350602085015192506040850151915060608501516137168161377c565b600060208284031215613be557600080fd5b5051919050565b600060208284031215613bfe57600080fd5b81516114ab8161377c565b6000825160005b81811015613c2a5760208186018101518583015201613c10565b50600092019182525091905056fea26469706673582212203a35dd66e73fc326b280ce25413763e12e7e00ffeb1c4158ca7b559a300079d464736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
