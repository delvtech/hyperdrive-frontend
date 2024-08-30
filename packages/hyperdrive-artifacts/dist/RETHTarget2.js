export const RETHTarget2 = {
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004163380380620041638339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613cb6620004ad60003960005050600050506000610c9501526000505060008181610154015281816103640152612d1c01526000818161152c01528181611c6a01528181611ccd0152818161247f015281816128fa0152818161293601528181612b350152612cf601526000818161084301528181610df501528181610e3701528181610f290152818161139f015281816113fe0152612cd0015260006118890152600081816119af01528181612600015281816126790152612e36015260008181610a0701528181610eaa0152818161149901528181611983015261264d015260008181610e89015281816125cc0152612df201526000818161086401528181610dd301528181610e5801528181610f4a0152818161137d0152818161141f0152612d42015260008181610232015281816103fc0152818161093f01526133540152600081816106fd0152818161077d015281816107f3015281816108bf01526108f7015260008181603d015281816116e301526124fe015260005050613cb66000f3fe60806040526004361061002d5760003560e01c8063cba2e58d14610082578063dbbe8070146100ae57600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b61009561009036600461370a565b6100c1565b6040805192835260208301919091520160405180910390f35b6100956100bc36600461370a565b6100de565b6000806100d0868686866100ed565b915091505b94509492505050565b6000806100d08686868661031d565b6000806100f861057e565b600654610100900460ff1615610121576040516321081abf60e01b815260040160405180910390fd5b6101296105a8565b610132836105c9565b60008061013f8886610602565b9092509050600061015083836106d7565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101935760405163211ddda360e11b815260040160405180910390fd5b868210156101b4576040516342af972b60e01b815260040160405180910390fd5b60006101be6106f5565b90506101ce818460046001610726565b5060008060006101de8787610da4565b919a5091945090925090508b88101561020a5760405163c972651760e01b815260040160405180910390fd5b816009600082825461021c919061377f565b9091555061022d9050844283610f86565b6102577f00000000000000000000000000000000000000000000000000000000000000008561377f565b98506102658389888c6110c4565b600061027260018b61125e565b905061028b8161028560208e018e6137a7565b8b611293565b8d8a8a898e8561029e60208301836137a7565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102db60408801602089016137d2565b896102e960408a018a6137ef565b6040516102fc979695949392919061385f565b60405180910390a350909b5050505050505050505050506100d56001600055565b60008061032861057e565b600654610100900460ff1615610351576040516321081abf60e01b815260040160405180910390fd5b6103596105a8565b610362836105c9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103a35760405163211ddda360e11b815260040160405180910390fd5b60006103ad61133b565b9050848110156103d0576040516342af972b60e01b815260040160405180910390fd5b60006103da6106f5565b905060006103f36103e96106f5565b8460046001610726565b905060006104217f00000000000000000000000000000000000000000000000000000000000000008461377f565b90506000806000806104348e898861134e565b600980549498509296509094509250839160009061045390849061377f565b909155506104649050874283610f86565b50600061047284898d6114d4565b9050808d10156104955760405163c972651760e01b815260040160405180910390fd5b61049f818c610602565b508e90506104af81858b89611506565b60006104bc60028861125e565b90508c6104d6826104d060208401846137a7565b85611293565b858b86846104e760208601866137a7565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a8661052460408b0160208c016137d2565b610538896105328a8d6138a0565b906106d7565b8d61054660408e018e6137ef565b60405161055a9897969594939291906138b3565b60405180910390a350989d50939b5050505050505050505050506100d56001600055565b6002600054036105a157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156105c757604051631574f9f360e01b815260040160405180910390fd5b565b60006105d860208301836137a7565b6001600160a01b0316036105ff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b8160008061061660408501602086016137d2565b1561063b576106318561062c60408701876137ef565b6116ba565b9093509050610653565b50346106538561064e60408701876137ef565b6116d6565b61065b61133b565b915080156106ce57604051600090339083908381818185875af1925050503d80600081146106a5576040519150601f19603f3d011682016040523d82523d6000602084013e6106aa565b606091505b50509050806106cc576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106ec8383670de0b6b3a7640000611710565b90505b92915050565b6000610721427f000000000000000000000000000000000000000000000000000000000000000061172e565b905090565b600084815260086020526040812060018101546001600160801b031615158061074e57504286115b1561076757600101546001600160801b03169050610d9c565b60008060006107746106f5565b905060006107a27f00000000000000000000000000000000000000000000000000000000000000008b61377f565b90505b81811015610818576000818152600860205260409020600101546001600160801b031680156107f0576000828152600860205260409020549094506001600160801b03169250610818565b507f0000000000000000000000000000000000000000000000000000000000000000016107a5565b8360000361088b5788935061088861082e611744565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611765565b92505b5061089583611785565b6001850180546001600160801b0319166001600160801b03929092169190911790556108eb6108e47f00000000000000000000000000000000000000000000000000000000000000008b6138a0565b8a84610f86565b6109298961092361091c7f00000000000000000000000000000000000000000000000000000000000000008361377f565b42906117b3565b84610f86565b610932886117c8565b50600090506008816109647f00000000000000000000000000000000000000000000000000000000000000008d6138a0565b815260208101919091526040016000908120600101546001600160801b0316915061099060028c61125e565b6000818152600b60205260408120549192508c8c8315610ad657600192506000806109bf86898d86600061196c565b9150915080600960008282546109d5919061377f565b909155506109f19050866000846109eb81611a3b565b88611a65565b6109fb818361377f565b9150610a2b86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611bdf565b9150610a3f610a3a83856106d7565b611c29565b60068054600290610a609084906201000090046001600160701b03166138fb565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8d82611785565b60068054601090610aaf908490600160801b90046001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae360018461125e565b6000818152600b60205260409020549091508015610bf25760019450600080610b10838b8f88600161196c565b915091508060096000828254610b26919061377f565b90915550610b42905083600084610b3c81611a3b565b8a611c53565b610b4c81836138a0565b9150610b5b610a3a83876106d7565b60068054600290610b7c9084906201000090046001600160701b03166138fb565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba982611785565b60068054601090610bcb908490600160801b90046001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2c57610c1e610c0487611a3b565b610c0d83611a3b565b610c17919061393b565b6000611e44565b8e610c298482611e83565b50505b6000610c378461207d565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d15919061395b565b90506001600160a01b03811615610d8a57610d875a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906121c9565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610db4611744565b600254909150610e19908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612254565b600254909450610e7c908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611765565b9150610ed38785610ece857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612280565b6122e5565b15610ee057610ee0612327565b610eec87858885612340565b91965094509250670de0b6b3a7640000610f6e610f09878461377f565b600254610f27908890600160801b90046001600160801b03166138a0565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611765565b1115610f7c57610f7c612327565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610fb25750505050565b6000848152600860205260408120546001600160801b03169081900361100c57610fdb83611785565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561108a565b61105d611058670de0b6b3a764000061102588866138a0565b61102f9190613978565b85670de0b6b3a7640000611043878a6138a0565b61104d9190613978565b85929190600161238c565b611785565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61109384611785565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611106611058826110f0670de0b6b3a764000086613978565b6005546001600160801b0316919088600161238c565b600580546001600160801b0319166001600160801b039290921691909117905561112f85611785565b6002805460009061114a9084906001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061117784611785565b60028054601090611199908490600160801b90046001600160801b031661398f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111c684611785565b6111d0908261391b565b600380546001600160801b03808416600160801b029116179055905060006111f783612434565b90506112158161120687611a3b565b61121090846139af565b611e44565b61121e84612478565b61122a5761122a612327565b6000611235856124d8565b90508061125557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112885760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906112c590849061377f565b90915550506000838152600b6020526040812080548392906112e890849061377f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610721670de0b6b3a76400006124e5565b600080600080600061135e611744565b6002549091506113c3908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612571565b9350876113d08589612592565b11156113de576113de612327565b6002546000908190611443908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611765565b93506114598a670de0b6b3a7640000868c6125a7565b5091935090915061146c905081836138a0565b61147690876138a0565b9550886114c3816114bd8d61148b868c6138a0565b8d61149687826126b5565b877f00000000000000000000000000000000000000000000000000000000000000006126cb565b90612592565b975090945050505093509350935093565b60006114e660408301602084016137d2565b156114f25750826114ff565b6114fc84846126f0565b90505b9392505050565b6002546001600160801b03168381101561152257611522612327565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061155a908390600f0b612705565b101561156857611568612327565b6004546115b29061105890600160801b90046001600160801b0316611595670de0b6b3a764000086613978565b600554600160801b90046001600160801b0316919089600161238c565b600580546001600160801b03928316600160801b0292169190911790556115d881611785565b600280546001600160801b0319166001600160801b039290921691909117905561160185611785565b60028054601090611623908490600160801b90046001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061165085611785565b60048054601090611672908490600160801b90046001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116a183612434565b9050611215816116b088611a3b565b611210908461393b565b60008060405163350b944160e11b815260040160405180910390fd5b61170b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308661272b565b505050565b600082600019048411830215820261172757600080fd5b5091020490565b600061173a82846139ed565b6106ec90846138a0565b600254600454600091610721916001600160801b0390911690600f0b612705565b600061177c82611776858888611710565b9061278b565b95945050505050565b60006001600160801b038211156117af57604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116117c257826106ec565b50919050565b60065460009081906117eb908490600160801b90046001600160801b03166106d7565b6006546201000090046001600160701b0316925090508181111561196757600061181583836138a0565b905061182461105882866127f6565b60068054601090611846908490600160801b90046001600160801b031661398f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061187f85836126f090919063ffffffff16565b905060006118ad827f00000000000000000000000000000000000000000000000000000000000000006106d7565b905080600960008282546118c1919061377f565b909155506118d1905081836138a0565b91506118dc82611785565b600280546000906118f79084906001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119248261280b565b60048054600090611939908490600f0b613a01565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061197987856126f0565b915060006119a7837f00000000000000000000000000000000000000000000000000000000000000006106d7565b90506119d3817f00000000000000000000000000000000000000000000000000000000000000006106d7565b915083156119f6576119e582826138a0565b6119ef90846138a0565b9250611a0d565b611a0082826138a0565b611a0a908461377f565b92505b86861015611a3057611a20838789611710565b9250611a2d828789611710565b91505b509550959350505050565b60006001600160ff1b038211156117af5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611aae61105882611a91670de0b6b3a764000086613978565b600554600160801b90046001600160801b031691908a600061238c565b600580546001600160801b03928316600160801b029216919091179055611ad486611785565b611ade908261398f565b600480546001600160801b03928316600160801b029216919091179055611b0484611785565b60028054600090611b1f9084906001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b4c83612835565b60048054600090611b61908490600f0b613a01565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b9185611785565b60028054601090611bb3908490600160801b90046001600160801b031661398f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611bf784611bf18a888a611710565b906126f0565b9050611c04888486611710565b611c0e908261377f565b905086811115611c1e5786810391505b509695505050505050565b60006001600160701b038211156117af5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611c9557507f0000000000000000000000000000000000000000000000000000000000000000611c9385836138a0565b105b15611ca257611ca2612327565b6004549084900390600f0b611cb7848261393b565b905083611cc386611a3b565b138015611cf857507f0000000000000000000000000000000000000000000000000000000000000000611cf68383612705565b105b15611d0557611d05612327565b600354600160801b90046001600160801b0316611d4761105882611d31670de0b6b3a764000088613978565b6005546001600160801b031691908c600061238c565b600580546001600160801b0319166001600160801b0392909216919091179055611d7188826138a0565b9050611d7c81611785565b600380546001600160801b03928316600160801b029216919091179055611da283611785565b600280546001600160801b0319166001600160801b0392909216919091179055611dcb82612835565b600480546001600160801b0319166001600160801b0392909216919091179055611df487611785565b60028054601090611e16908490600160801b90046001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611e5f90611058906001600160801b03168484612871565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611ece916001600160801b0316906138a0565b905080600003611ee25760019150506106ef565b6000611eed856128d8565b905080600003611f02576001925050506106ef565b600080611f10838589612974565b9150915080611f265760009450505050506106ef565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f62929190613aac565b6040805180830381865af4158015611f7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa29190613b22565b91509150611fc0611fb282611a3b565b611fbb90613b46565b612aef565b925082611fd657600096505050505050506106ef565b611fdf82611785565b60078054600090611ffa9084906001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061202781611785565b60078054601090612049908490600160801b90046001600160801b031661391b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120a687612c87565b6040518263ffffffff1660e01b81526004016120c29190613b62565b6040805180830381865af41580156120de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121029190613b71565b9150915080612118575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161217e9161377f565b61218891906138a0565b9050806000036121a057506000958695509350505050565b60008087116121b05760006121bb565b6121bb848884611710565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121ef576121ef613ba1565b6040519080825280601f01601f191660200182016040528015612219576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561223a578692505b828152826000602083013e90999098509650505050505050565b600061227587878761226e88670de0b6b3a76400006138a0565b8787612dc1565b979650505050505050565b60006114fc6122c161229a84670de0b6b3a76400006138a0565b6114bd670de0b6b3a76400006122b0818a6127f6565b6122ba91906138a0565b8790612592565b6122d390670de0b6b3a764000061377f565b611bf184670de0b6b3a76400006138a0565b60008061231c856122f4611744565b6122fe919061377f565b600254610f27908790600160801b90046001600160801b03166138a0565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000612353898789612de4565b909250905061236282896138a0565b9750600061237182888a611710565b905061237d818b6138a0565b9a989950979650505050505050565b60008260000361239d57508461177c565b81156123f0576123ce6123b0848761377f565b6123ba85876106d7565b6123c4888a6106d7565b611bf1919061377f565b905060006123dc85886117b3565b9050808210156123ea578091505b5061177c565b8285036123ff5750600061177c565b61242a61240c84876138a0565b6124168587612592565b612420888a6106d7565b611bf191906138a0565b9695505050505050565b600061245c600b600061244860028661125e565b815260200190815260200160002054611a3b565b61246e600b600061244860018761125e565b6106ef919061393b565b60006124a47f000000000000000000000000000000000000000000000000000000000000000083612592565b6003546124ba91906001600160801b031661377f565b6002546124d0906001600160801b0316846106d7565b101592915050565b60006106ef826004611e83565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa15801561254d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ef9190613bb7565b600061227587878761258b88670de0b6b3a76400006138a0565b8787612e64565b60006106ec8383670de0b6b3a7640000612e75565b60008080806125f887866125f18b6114bd6125ca8c670de0b6b3a76400006138a0565b7f000000000000000000000000000000000000000000000000000000000000000090612592565b9190612e75565b9350612624847f00000000000000000000000000000000000000000000000000000000000000006106d7565b9150600061264561263d89670de0b6b3a76400006138a0565b8a9088612e75565b9050612671817f0000000000000000000000000000000000000000000000000000000000000000612592565b935061269d847f00000000000000000000000000000000000000000000000000000000000000006106d7565b6126a7908461377f565b915050945094509450949050565b60008183116126c457816106ec565b5090919050565b6000806126e3846126dd8a888a612e75565b906127f6565b9050611c04888486612e75565b60006106ec83670de0b6b3a764000084611710565b6000806127128484612e9b565b90925090508061272457612724612327565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612785908590612ed7565b50505050565b6000816000036127a45750670de0b6b3a76400006106ef565b826000036127b4575060006106ef565b60006127bf83611a3b565b905060006127d46127cf86611a3b565b612f3f565b90508181026127eb670de0b6b3a764000082613bd0565b905061242a81613165565b60006106ec83670de0b6b3a764000084612e75565b600060016001607f1b038211156117af5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612853575060016001607f1b0382135b156117af5760405163a5353be560e01b815260040160405180910390fd5b60008061287f8460006132fa565b61288a8460006132fa565b612894919061393b565b905060008113156128b0576128a9818661377f565b94506128cf565b60008112156128cf576128c281613b46565b6128cc90866138a0565b94505b50929392505050565b60035460009081906128f3906001600160801b0316846127f6565b905061291f7f00000000000000000000000000000000000000000000000000000000000000008261377f565b6002546001600160801b031611156117c2576002547f00000000000000000000000000000000000000000000000000000000000000009061296a9083906001600160801b03166138a0565b6114ff91906138a0565b61297c613657565b60008061298884612c87565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129c39190613b62565b6040805180830381865af41580156129df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a039190613b71565b9350905082612a18575060009150612ae79050565b6000612a3f612a3a8461016001518561014001516106d790919063ffffffff16565b611a3b565b612a5f612a3a85610120015186610100015161259290919063ffffffff16565b612a69919061393b565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ba8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bcc9190613bfe565b935093509350935080612be85750600098975050505050505050565b868414612c1957612bf884611785565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c4a57612c2983612835565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c7857612c5a82611785565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c8f6136a9565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d879116613309565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612db992900416613309565b905292915050565b600080612dd288888888888861337f565b909250905080611c1e57611c1e612327565b600080612e2e856114bd85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612e24818c6127f6565b6114bd91906138a0565b9150612e5a827f00000000000000000000000000000000000000000000000000000000000000006106d7565b9050935093915050565b600080612dd2888888888888613447565b6000826000190484118302158202612e8c57600080fd5b50910281810615159190040190565b600080600083612eaa86611a3b565b612eb4919061393b565b90506000811215612ecc5760008092509250506106d0565b946001945092505050565b6000612eec6001600160a01b03841683613507565b90508051600014158015612f11575080806020019051810190612f0f9190613c34565b155b1561170b57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612f615760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fe49084901c611a3b565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361318057506000919050565b680755bf798b4a1bf1e582126131a9576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061242a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a3b565b60008183136126c457816106ec565b600080670de0b6b3a764000061331d6106f5565b6133279190613978565b9050808311613337576000613341565b61334181846138a0565b91506114ff613378670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613978565b83906126f0565b60008060006133918989888888613515565b90506133ab866117766133a48a8d61377f565b87906106d7565b98506133b8858a86611710565b9850888110156133cf57600080925092505061343c565b888103670de0b6b3a76400008110613404576133fd6133f6670de0b6b3a7640000896127f6565b829061278b565b905061341c565b6134196133f6670de0b6b3a7640000896126f0565b90505b808910156134325760008093509350505061343c565b8803925060019150505b965096945050505050565b60008060006134598989888888613515565b905061346986611776898b61377f565b97508781101561348057600080925092505061343c565b87810361348e818688612e75565b9050670de0b6b3a764000081106134bb576134b46133f6670de0b6b3a7640000896127f6565b90506134d3565b6134d06133f6670de0b6b3a7640000896126f0565b90505b6134dd81866127f6565b9050808a10156134f55760008093509350505061343c565b90980398600198509650505050505050565b60606106ec83836000613544565b6000613521858561278b565b61353a61353286611776868b612592565b859085612e75565b61242a919061377f565b6060814710156135695760405163cd78605960e01b8152306004820152602401612f36565b600080856001600160a01b031684866040516135859190613c51565b60006040518083038185875af1925050503d80600081146135c2576040519150601f19603f3d011682016040523d82523d6000602084013e6135c7565b606091505b509150915061242a8683836060826135e7576135e28261362e565b6114ff565b81511580156135fe57506001600160a01b0384163b155b1561362757604051639996b31560e01b81526001600160a01b0385166004820152602401612f36565b50806114ff565b80511561363e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061366b6136a9565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561372057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561374c57600080fd5b85016060818803121561375e57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106ef576106ef613769565b6001600160a01b03811681146105ff57600080fd5b6000602082840312156137b957600080fd5b81356114ff81613792565b80151581146105ff57600080fd5b6000602082840312156137e457600080fd5b81356114ff816137c4565b6000808335601e1984360301811261380657600080fd5b83018035915067ffffffffffffffff82111561382157600080fd5b6020019150368190038213156106d057600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061389360c083018486613836565b9998505050505050505050565b818103818111156106ef576106ef613769565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006138ed60e083018486613836565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561272457612724613769565b6001600160801b0381811683821601908082111561272457612724613769565b818103600083128015838313168383128216171561272457612724613769565b60006020828403121561396d57600080fd5b81516114ff81613792565b80820281158282048414176106ef576106ef613769565b6001600160801b0382811682821603908082111561272457612724613769565b80820182811260008312801582168215821617156139cf576139cf613769565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826139fc576139fc6139d7565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106ef576106ef613769565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613ac0828551613a2e565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613b3557600080fd5b505080516020909101519092909150565b6000600160ff1b8201613b5b57613b5b613769565b5060000390565b61018081016106ef8284613a2e565b60008060408385031215613b8457600080fd5b825191506020830151613b96816137c4565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613bc957600080fd5b5051919050565b600082613bdf57613bdf6139d7565b600160ff1b821460001984141615613bf957613bf9613769565b500590565b60008060008060808587031215613c1457600080fd5b845193506020850151925060408501519150606085015161375e816137c4565b600060208284031215613c4657600080fd5b81516114ff816137c4565b6000825160005b81811015613c725760208186018101518583015201613c58565b50600092019182525091905056fea264697066735822122004a0862e25e544c595b635a967dee4ff685d10dc30a0a9d68857ce3c8e8ee18d64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
