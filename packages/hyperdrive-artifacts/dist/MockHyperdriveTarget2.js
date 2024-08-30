export const MockHyperdriveTarget2 = {
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
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620044c2380380620044c28339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613fce620004f460003960005050600050506000610c8c015260005050600081816101000152818161031001526131ec01526000818161152301528181612049015281816120ac0152818161285e01528181612dd101528181612e0d0152818161300501526131c601526000818161083a01528181610dec01528181610e2e01528181610f2001528181611396015281816113f5015281816118cf0152818161196201526131a001526000611c68015260008181611d8e01528181612a4e01528181612ac701526133060152600081816109fe01528181610ea10152818161149001528181611d620152612a9b015260008181610e8001528181612a1a01526132c201526000818161085b01528181610dca01528181610e4f01528181610f41015281816113740152818161141601526132120152600081816101de015281816103a80152818161093601526137bc0152600081816106f401528181610774015281816107ea015281816108b601526108ee01526000505060008181610556015281816116cd01528181611716015281816117a801528181611829015281816119d001528181611a51015281816128df0152818161292801528181612b940152612bdd0152613fce6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613a51565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613a51565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de836105c0565b6000806100eb88866105f9565b909250905060006100fc83836106ce565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106ec565b905061017a81846004600161071d565b50600080600061018a8787610d9b565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c89190613ac6565b909155506101d99050844283610f7d565b6102037f000000000000000000000000000000000000000000000000000000000000000085613ac6565b98506102118389888c6110bb565b600061021e60018b611255565b90506102378161023160208e018e613aee565b8b61128a565b8d8a8a898e8561024a6020830183613aee565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613b19565b8961029560408a018a613b36565b6040516102a89796959493929190613ba6565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e836105c0565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b6000610359611332565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106ec565b9050600061039f6103956106ec565b846004600161071d565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613ac6565b90506000806000806103e08e8988611345565b60098054949850929650909450925083916000906103ff908490613ac6565b909155506104109050874283610f7d565b50600061041e84898d6114cb565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105f9565b508e905061045b81858b896114fd565b6000610468600288611255565b90508c6104828261047c6020840184613aee565b8561128a565b858b86846104936020860186613aee565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613b19565b6104e4896104de8a8d613be7565b906106ce565b8d6104f260408e018e613b36565b604051610506989796959493929190613bfa565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a057503415155b156105be57604051631574f9f360e01b815260040160405180910390fd5b565b60006105cf6020830183613aee565b6001600160a01b0316036105f65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b8160008061060d6040850160208601613b19565b1561063257610628856106236040870187613b36565b6116b1565b909350905061064a565b503461064a856106456040870187613b36565b611945565b610652611332565b915080156106c557604051600090339083908381818185875af1925050503d806000811461069c576040519150601f19603f3d011682016040523d82523d6000602084013e6106a1565b606091505b50509050806106c3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106e38383670de0b6b3a7640000611aef565b90505b92915050565b6000610718427f0000000000000000000000000000000000000000000000000000000000000000611b0d565b905090565b600084815260086020526040812060018101546001600160801b031615158061074557504286115b1561075e57600101546001600160801b03169050610d93565b600080600061076b6106ec565b905060006107997f00000000000000000000000000000000000000000000000000000000000000008b613ac6565b90505b8181101561080f576000818152600860205260409020600101546001600160801b031680156107e7576000828152600860205260409020549094506001600160801b0316925061080f565b507f00000000000000000000000000000000000000000000000000000000000000000161079c565b836000036108825788935061087f610825611b23565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b92505b5061088c83611b64565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e26108db7f00000000000000000000000000000000000000000000000000000000000000008b613be7565b8a84610f7d565b6109208961091a6109137f000000000000000000000000000000000000000000000000000000000000000083613ac6565b4290611b92565b84610f7d565b61092988611ba7565b506000905060088161095b7f00000000000000000000000000000000000000000000000000000000000000008d613be7565b815260208101919091526040016000908120600101546001600160801b0316915061098760028c611255565b6000818152600b60205260408120549192508c8c8315610acd57600192506000806109b686898d866000611d4b565b9150915080600960008282546109cc9190613ac6565b909155506109e89050866000846109e281611e1a565b88611e44565b6109f28183613ac6565b9150610a2286838a8e877f0000000000000000000000000000000000000000000000000000000000000000611fbe565b9150610a36610a3183856106ce565b612008565b60068054600290610a579084906201000090046001600160701b0316613c42565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8482611b64565b60068054601090610aa6908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ada600184611255565b6000818152600b60205260409020549091508015610be95760019450600080610b07838b8f886001611d4b565b915091508060096000828254610b1d9190613ac6565b90915550610b39905083600084610b3381611e1a565b8a612032565b610b438183613be7565b9150610b52610a3183876106ce565b60068054600290610b739084906201000090046001600160701b0316613c42565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba082611b64565b60068054601090610bc2908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2357610c15610bfb87611e1a565b610c0483611e1a565b610c0e9190613c82565b6000612223565b8e610c208482612262565b50505b6000610c2e8461245c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ce8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0c9190613ca2565b90506001600160a01b03811615610d8157610d7e5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906125a8565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610dab611b23565b600254909150610e10908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612633565b600254909450610e73908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b9150610eca8785610ec5857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061265f565b6126c4565b15610ed757610ed7612706565b610ee38785888561271f565b91965094509250670de0b6b3a7640000610f65610f008784613ac6565b600254610f1e908890600160801b90046001600160801b0316613be7565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b1115610f7357610f73612706565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610fa95750505050565b6000848152600860205260408120546001600160801b03169081900361100357610fd283611b64565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611081565b61105461104f670de0b6b3a764000061101c8886613be7565b6110269190613cbf565b85670de0b6b3a764000061103a878a613be7565b6110449190613cbf565b85929190600161276b565b611b64565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61108a84611b64565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110fd61104f826110e7670de0b6b3a764000086613cbf565b6005546001600160801b0316919088600161276b565b600580546001600160801b0319166001600160801b039290921691909117905561112685611b64565b600280546000906111419084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116e84611b64565b60028054601090611190908490600160801b90046001600160801b0316613cd6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111bd84611b64565b6111c79082613c62565b600380546001600160801b03808416600160801b029116179055905060006111ee83612813565b905061120c816111fd87611e1a565b6112079084613cf6565b612223565b61121584612857565b61122157611221612706565b600061122c856128b7565b90508061124c57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561127f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906112bc908490613ac6565b90915550506000838152600b6020526040812080548392906112df908490613ac6565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610718670de0b6b3a76400006128c4565b6000806000806000611355611b23565b6002549091506113ba908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006129bf565b9350876113c785896129e0565b11156113d5576113d5612706565b600254600090819061143a908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b93506114508a670de0b6b3a7640000868c6129f5565b5091935090915061146390508183613be7565b61146d9087613be7565b9550886114ba816114b48d611482868c613be7565b8d61148d8782612b03565b877f0000000000000000000000000000000000000000000000000000000000000000612b19565b906129e0565b975090945050505093509350935093565b60006114dd6040830160208401613b19565b156114e95750826114f6565b6114f38484612b3e565b90505b9392505050565b6002546001600160801b03168381101561151957611519612706565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611551908390600f0b612b53565b101561155f5761155f612706565b6004546115a99061104f90600160801b90046001600160801b031661158c670de0b6b3a764000086613cbf565b600554600160801b90046001600160801b0316919089600161276b565b600580546001600160801b03928316600160801b0292169190911790556115cf81611b64565b600280546001600160801b0319166001600160801b03929092169190911790556115f885611b64565b6002805460109061161a908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061164785611b64565b60048054601090611669908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061169883612813565b905061120c816116a788611e1a565b6112079084613c82565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161170157504761178c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611765573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117899190613d1e565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161180757873410156117f6576040516312171d8360e31b815260040160405180910390fd5b6118008834613be7565b90506118a1565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561187a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189e9190613d37565b91505b816118bf576040516312171d8360e31b815260040160405180910390fd5b600f54600003611904576118f3887f0000000000000000000000000000000000000000000000000000000000000000612b3e565b600f8190559450925061193d915050565b600f54600090611916908a9086611aef565b905080600f600082825461192a9190613ac6565b9091555090955090935061193d92505050565b935093915050565b6000611950846128c4565b9050600f5460000361198e57611986817f0000000000000000000000000000000000000000000000000000000000000000612b3e565b600f556119b4565b600061199982612b79565b905080600f60008282546119ad9190613ac6565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a2f5782341015611a1e576040516312171d8360e31b815260040160405180910390fd5b611a288334613be7565b9050611ac9565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac69190613d37565b91505b81611ae7576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611b0657600080fd5b5091020490565b6000611b198284613d6a565b6106e39084613be7565b600254600454600091610718916001600160801b0390911690600f0b612b53565b6000611b5b82611b55858888611aef565b90612c62565b95945050505050565b60006001600160801b03821115611b8e57604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611ba157826106e3565b50919050565b6006546000908190611bca908490600160801b90046001600160801b03166106ce565b6006546201000090046001600160701b03169250905081811115611d46576000611bf48383613be7565b9050611c0361104f8286612ccd565b60068054601090611c25908490600160801b90046001600160801b0316613cd6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c5e8583612b3e90919063ffffffff16565b90506000611c8c827f00000000000000000000000000000000000000000000000000000000000000006106ce565b90508060096000828254611ca09190613ac6565b90915550611cb090508183613be7565b9150611cbb82611b64565b60028054600090611cd69084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d0382612ce2565b60048054600090611d18908490600f0b613d7e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611d588785612b3e565b91506000611d86837f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050611db2817f00000000000000000000000000000000000000000000000000000000000000006106ce565b91508315611dd557611dc48282613be7565b611dce9084613be7565b9250611dec565b611ddf8282613be7565b611de99084613ac6565b92505b86861015611e0f57611dff838789611aef565b9250611e0c828789611aef565b91505b509550959350505050565b60006001600160ff1b03821115611b8e5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611e8d61104f82611e70670de0b6b3a764000086613cbf565b600554600160801b90046001600160801b031691908a600061276b565b600580546001600160801b03928316600160801b029216919091179055611eb386611b64565b611ebd9082613cd6565b600480546001600160801b03928316600160801b029216919091179055611ee384611b64565b60028054600090611efe9084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f2b83612d0c565b60048054600090611f40908490600f0b613d7e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f7085611b64565b60028054601090611f92908490600160801b90046001600160801b0316613cd6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611fd684611fd08a888a611aef565b90612b3e565b9050611fe3888486611aef565b611fed9082613ac6565b905086811115611ffd5786810391505b509695505050505050565b60006001600160701b03821115611b8e5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061207457507f00000000000000000000000000000000000000000000000000000000000000006120728583613be7565b105b1561208157612081612706565b6004549084900390600f0b6120968482613c82565b9050836120a286611e1a565b1380156120d757507f00000000000000000000000000000000000000000000000000000000000000006120d58383612b53565b105b156120e4576120e4612706565b600354600160801b90046001600160801b031661212661104f82612110670de0b6b3a764000088613cbf565b6005546001600160801b031691908c600061276b565b600580546001600160801b0319166001600160801b03929092169190911790556121508882613be7565b905061215b81611b64565b600380546001600160801b03928316600160801b02921691909117905561218183611b64565b600280546001600160801b0319166001600160801b03929092169190911790556121aa82612d0c565b600480546001600160801b0319166001600160801b03929092169190911790556121d387611b64565b600280546010906121f5908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461223e9061104f906001600160801b03168484612d48565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916122ad916001600160801b031690613be7565b9050806000036122c15760019150506106e6565b60006122cc85612daf565b9050806000036122e1576001925050506106e6565b6000806122ef838589612e4b565b91509150806123055760009450505050506106e6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612341929190613e29565b6040805180830381865af415801561235d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123819190613e9f565b9150915061239f61239182611e1a565b61239a90613ec3565b612fbf565b9250826123b557600096505050505050506106e6565b6123be82611b64565b600780546000906123d99084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061240681611b64565b60078054601090612428908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61248587613157565b6040518263ffffffff1660e01b81526004016124a19190613edf565b6040805180830381865af41580156124bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e19190613eee565b91509150806124f7575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161255d91613ac6565b6125679190613be7565b90508060000361257f57506000958695509350505050565b600080871161258f57600061259a565b61259a848884611aef565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156125ce576125ce613f1e565b6040519080825280601f01601f1916602001820160405280156125f8576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612619578692505b828152826000602083013e90999098509650505050505050565b600061265487878761264d88670de0b6b3a7640000613be7565b8787613291565b979650505050505050565b60006114f36126a061267984670de0b6b3a7640000613be7565b6114b4670de0b6b3a764000061268f818a612ccd565b6126999190613be7565b87906129e0565b6126b290670de0b6b3a7640000613ac6565b611fd084670de0b6b3a7640000613be7565b6000806126fb856126d3611b23565b6126dd9190613ac6565b600254610f1e908790600160801b90046001600160801b0316613be7565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006127328987896132b4565b90925090506127418289613be7565b9750600061275082888a611aef565b905061275c818b613be7565b9a989950979650505050505050565b60008260000361277c575084611b5b565b81156127cf576127ad61278f8487613ac6565b61279985876106ce565b6127a3888a6106ce565b611fd09190613ac6565b905060006127bb8588611b92565b9050808210156127c9578091505b50611b5b565b8285036127de57506000611b5b565b6128096127eb8487613be7565b6127f585876129e0565b6127ff888a6106ce565b611fd09190613be7565b9695505050505050565b600061283b600b6000612827600286611255565b815260200190815260200160002054611e1a565b61284d600b6000612827600187611255565b6106e69190613c82565b60006128837f0000000000000000000000000000000000000000000000000000000000000000836129e0565b60035461289991906001600160801b0316613ac6565b6002546128af906001600160801b0316846106ce565b101592915050565b60006106e6826004612262565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161291357504761299e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612977573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061299b9190613d1e565b90505b600f546000036129af5760006114f6565b600f546114f69084908390611aef565b60006126548787876129d988670de0b6b3a7640000613be7565b8787613334565b60006106e38383670de0b6b3a7640000613345565b6000808080612a468786612a3f8b6114b4612a188c670de0b6b3a7640000613be7565b7f0000000000000000000000000000000000000000000000000000000000000000906129e0565b9190613345565b9350612a72847f00000000000000000000000000000000000000000000000000000000000000006106ce565b91506000612a93612a8b89670de0b6b3a7640000613be7565b8a9088613345565b9050612abf817f00000000000000000000000000000000000000000000000000000000000000006129e0565b9350612aeb847f00000000000000000000000000000000000000000000000000000000000000006106ce565b612af59084613ac6565b915050945094509450949050565b6000818311612b1257816106e3565b5090919050565b600080612b3184612b2b8a888a613345565b90612ccd565b9050611fe3888486613345565b60006106e383670de0b6b3a764000084611aef565b600080612b60848461336b565b909250905080612b7257612b72612706565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612bc8575047612c53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612c2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c509190613d1e565b90505b600f546114f690849083611aef565b600081600003612c7b5750670de0b6b3a76400006106e6565b82600003612c8b575060006106e6565b6000612c9683611e1a565b90506000612cab612ca686611e1a565b6133a7565b9050818102612cc2670de0b6b3a764000082613f34565b9050612809816135cd565b60006106e383670de0b6b3a764000084613345565b600060016001607f1b03821115611b8e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612d2a575060016001607f1b0382135b15611b8e5760405163a5353be560e01b815260040160405180910390fd5b600080612d56846000613762565b612d61846000613762565b612d6b9190613c82565b90506000811315612d8757612d808186613ac6565b9450612da6565b6000811215612da657612d9981613ec3565b612da39086613be7565b94505b50929392505050565b6003546000908190612dca906001600160801b031684612ccd565b9050612df67f000000000000000000000000000000000000000000000000000000000000000082613ac6565b6002546001600160801b03161115611ba1576002547f000000000000000000000000000000000000000000000000000000000000000090612e419083906001600160801b0316613be7565b6114f69190613be7565b612e5361399e565b600080612e5f84613157565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e9a9190613edf565b6040805180830381865af4158015612eb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612eda9190613eee565b9350905082612eef57506000915061193d9050565b6000612f16612f118461016001518561014001516106ce90919063ffffffff16565b611e1a565b612f36612f118561012001518661010001516129e090919063ffffffff16565b612f409190613c82565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015613078573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061309c9190613f62565b9350935093509350806130b85750600098975050505050505050565b8684146130e9576130c884611b64565b600280546001600160801b0319166001600160801b03929092169190911790555b85831461311a576130f983612d0c565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146131485761312a82611b64565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b61315f6139f0565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916132579116613771565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261328992900416613771565b905292915050565b6000806132a28888888888886137e7565b909250905080611ffd57611ffd612706565b6000806132fe856114b485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006132f4818c612ccd565b6114b49190613be7565b915061332a827f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050935093915050565b6000806132a28888888888886138af565b600082600019048411830215820261335c57600080fd5b50910281810615159190040190565b60008060008361337a86611e1a565b6133849190613c82565b9050600081121561339c5760008092509250506106c7565b946001945092505050565b60008082136133c95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061344c9084901c611e1a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136135e857506000919050565b680755bf798b4a1bf1e58212613611576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061280974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611e1a565b6000818313612b1257816106e3565b600080670de0b6b3a76400006137856106ec565b61378f9190613cbf565b905080831161379f5760006137a9565b6137a98184613be7565b91506114f66137e0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613cbf565b8390612b3e565b60008060006137f9898988888861396f565b905061381386611b5561380c8a8d613ac6565b87906106ce565b9850613820858a86611aef565b9850888110156138375760008092509250506138a4565b888103670de0b6b3a7640000811061386c5761386561385e670de0b6b3a764000089612ccd565b8290612c62565b9050613884565b61388161385e670de0b6b3a764000089612b3e565b90505b8089101561389a576000809350935050506138a4565b8803925060019150505b965096945050505050565b60008060006138c1898988888861396f565b90506138d186611b55898b613ac6565b9750878110156138e85760008092509250506138a4565b8781036138f6818688613345565b9050670de0b6b3a764000081106139235761391c61385e670de0b6b3a764000089612ccd565b905061393b565b61393861385e670de0b6b3a764000089612b3e565b90505b6139458186612ccd565b9050808a101561395d576000809350935050506138a4565b90980398600198509650505050505050565b600061397b8585612c62565b61399461398c86611b55868b6129e0565b859085613345565b6128099190613ac6565b6040518061012001604052806139b26139f0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613a6757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a9357600080fd5b850160608188031215613aa557600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106e6576106e6613ab0565b6001600160a01b03811681146105f657600080fd5b600060208284031215613b0057600080fd5b81356114f681613ad9565b80151581146105f657600080fd5b600060208284031215613b2b57600080fd5b81356114f681613b0b565b6000808335601e19843603018112613b4d57600080fd5b83018035915067ffffffffffffffff821115613b6857600080fd5b6020019150368190038213156106c757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613bda60c083018486613b7d565b9998505050505050505050565b818103818111156106e6576106e6613ab0565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613c3460e083018486613b7d565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612b7257612b72613ab0565b6001600160801b03818116838216019080821115612b7257612b72613ab0565b8181036000831280158383131683831282161715612b7257612b72613ab0565b600060208284031215613cb457600080fd5b81516114f681613ad9565b80820281158282048414176106e6576106e6613ab0565b6001600160801b03828116828216039080821115612b7257612b72613ab0565b8082018281126000831280158216821582161715613d1657613d16613ab0565b505092915050565b600060208284031215613d3057600080fd5b5051919050565b600060208284031215613d4957600080fd5b81516114f681613b0b565b634e487b7160e01b600052601260045260246000fd5b600082613d7957613d79613d54565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106e6576106e6613ab0565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613e3d828551613dab565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613eb257600080fd5b505080516020909101519092909150565b6000600160ff1b8201613ed857613ed8613ab0565b5060000390565b61018081016106e68284613dab565b60008060408385031215613f0157600080fd5b825191506020830151613f1381613b0b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613f4357613f43613d54565b600160ff1b821460001984141615613f5d57613f5d613ab0565b500590565b60008060008060808587031215613f7857600080fd5b8451935060208501519250604085015191506060850151613aa581613b0b56fea26469706673582212207a71f99251d5fa4e75796bfea6136f7a4837e1e6076631aa1484dd0a04a64a0964736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
