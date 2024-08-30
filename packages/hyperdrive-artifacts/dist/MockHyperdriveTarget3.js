export const MockHyperdriveTarget3 = {
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
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
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
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "inputs": []
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
            "name": "InvalidApr",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidEffectiveShareReserves",
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
            "name": "PoolAlreadyInitialized",
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
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004483380380620044838339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613f7f620005046000396000505060005050600061134401526000818161030301528181610332015261035f01526000818160de015281816105a9015261176b01526000818161085601528181610941015281816109d401528181610add0152818161163c0152818161174501528181612474015281816124d701528181612db60152818161327901526132b501526000818161013f015281816108c601528181610ef20152818161150001528181611564015281816115ab0152818161171f01528181611c220152611cb5015260006120790152600081816121d4015261350e0152600081816110b601526121a8015260006134c40152600081816101810152818161091901528181610f13015281816114d001528181611534015281816115cc015261179101526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fee0152612d4c01526000818161029701528181610db101528181610e2c01528181610ea201528181610f6e0152610fa601526000505060008181610be501528181611a2001528181611a6901528181611afb01528181611b7c01528181611d2301528181611da401528181612fb101528181612ffa015281816130ac01526130f50152613f7f6000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c3660046139d2565b610066565b60405190815260200160405180910390f35b610041610061366004613a36565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c4f565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610cae565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610cd4565b9150915060006101ed610da9565b90506101fd818360046001610dd5565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613a9c565b611453565b61149d565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613aaf565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006116aa565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613a9c565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613aaf565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103f1916001600160801b0390911690613aaf565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061042c908390613a9c565b9050600080600061043c8a6116d6565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613b40565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613b4f565b91506104ca6104c58c611810565b61183e565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613b40565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613b4f565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613aaf565b9190611864565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e611882565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613b7d565b8e611897565b61063a8961193f565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613a9c565b9b5090508a158061073757506107348c600061194c565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611864565b610770565b60005b905061077f6020850185613b7d565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613ba8565b866107ca60408c018c613bc5565b6040516107dd9796959493929190613c0c565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c4f565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610cd4565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613c60565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613c77565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd8484611961565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e8585858960008061149d565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a6685611987565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f846119b1565b600480546001600160801b0319166001600160801b0392909216919091179055610ab883611987565b600280546001600160801b03928316600160801b029216919091179055610b016000807f0000000000000000000000000000000000000000000000000000000000000000611897565b610b196000610b1360208c018c613b7d565b8a611897565b610b2e610b24610da9565b8760046001610dd5565b508a8a8a610b3f6020820182613b7d565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613ba8565b87610b8a6040890189613bc5565b604051610b9d9796959493929190613c0c565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610c2f57503415155b15610c4d57604051631574f9f360e01b815260040160405180910390fd5b565b6000610c5e6020830183613b7d565b6001600160a01b031603610c855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610ca9916001600160801b0390911690600f0b611961565b905090565b600080610cbd878787866119ed565b9050610cc981856116aa565b979650505050505050565b81600080610ce86040850160208601613ba8565b15610d0d57610d0385610cfe6040870187613bc5565b611a04565b9093509050610d25565b5034610d2585610d206040870187613bc5565b611c98565b610d2d611e42565b91508015610da057604051600090339083908381818185875af1925050503d8060008114610d77576040519150601f19603f3d011682016040523d82523d6000602084013e610d7c565b606091505b5050905080610d9e576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610ca9427f0000000000000000000000000000000000000000000000000000000000000000611e55565b600084815260086020526040812060018101546001600160801b0316151580610dfd57504286115b15610e1657600101546001600160801b0316905061144b565b6000806000610e23610da9565b90506000610e517f00000000000000000000000000000000000000000000000000000000000000008b613a9c565b90505b81811015610ec7576000818152600860205260409020600101546001600160801b03168015610e9f576000828152600860205260409020549094506001600160801b03169250610ec7565b507f000000000000000000000000000000000000000000000000000000000000000001610e54565b83600003610f3a57889350610f37610edd610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ed565b92505b50610f4483611987565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f9a610f937f00000000000000000000000000000000000000000000000000000000000000008b613aaf565b8a84611e6b565b610fd889610fd2610fcb7f000000000000000000000000000000000000000000000000000000000000000083613a9c565b4290611fa9565b84611e6b565b610fe188611fb8565b50600090506008816110137f00000000000000000000000000000000000000000000000000000000000000008d613aaf565b815260208101919091526040016000908120600101546001600160801b0316915061103f60028c61215c565b6000818152600b60205260408120549192508c8c8315611185576001925060008061106e86898d866000612191565b9150915080600960008282546110849190613a9c565b909155506110a090508660008461109a81611810565b88612260565b6110aa8183613a9c565b91506110da86838a8e877f00000000000000000000000000000000000000000000000000000000000000006123da565b91506110ee6110e9838561241e565b612433565b6006805460029061110f9084906201000090046001600160701b0316613ca5565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061113c82611987565b6006805460109061115e908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061119260018461215c565b6000818152600b602052604090205490915080156112a157600194506000806111bf838b8f886001612191565b9150915080600960008282546111d59190613a9c565b909155506111f19050836000846111eb81611810565b8a61245d565b6111fb8183613aaf565b915061120a6110e9838761241e565b6006805460029061122b9084906201000090046001600160701b0316613ca5565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061125882611987565b6006805460109061127a908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112db576112cd6112b387611810565b6112bc83611810565b6112c69190613ce5565b600061264e565b8e6112d8848261268d565b50505b60006112e684612887565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c49190613d05565b90506001600160a01b03811615611439576114365a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906129d3565b50505b509b9d50505050505050505050505050505b949350505050565b600061147b600b600061146760028661215c565b815260200190815260200160002054611810565b61148d600b600061146760018761215c565b6114979190613ce5565b92915050565b6000806000806114ad8a8a612a60565b91509150806114c45760008093509350505061169f565b6000611524838a6114fd7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613aaf565b8b7f0000000000000000000000000000000000000000000000000000000000000000612a9c565b5090506000611588848b846115617f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613aaf565b8d7f0000000000000000000000000000000000000000000000000000000000000000612b59565b509050811580611596575080155b156115a2575060009050805b60006115f0858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ed565b90506115fe83838c84612c17565b5090935060009050611610848f613a9c565b905060006116318b8b61162287611810565b61162c908e613d22565b612c63565b90508b6116666116617f000000000000000000000000000000000000000000000000000000000000000083612cca565b611810565b61166f83611810565b61167c611661868561241e565b6116869190613ce5565b6116909190613ce5565b60019950995050505050505050505b965096945050505050565b60006100916116be84846301e13380612cdb565b6116d085670de0b6b3a7640000613aaf565b90611882565b6116de61390d565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117d69116612d01565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261180892900416612d01565b905292915050565b60006001600160ff1b0382111561183a5760405163396ea70160e11b815260040160405180910390fd5b5090565b61184781612d70565b610c8557604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261187b57600080fd5b5091020490565b600061009183670de0b6b3a764000084611864565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906118c9908490613a9c565b90915550506000838152600b6020526040812080548392906118ec908490613a9c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061149782600461268d565b600081831361195b5782610091565b50919050565b60008061196e8484612a60565b90925090508061198057611980612f08565b5092915050565b60006001600160801b0382111561183a57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806119cf575060016001607f1b0382135b1561183a5760405163a5353be560e01b815260040160405180910390fd5b6000610078826119fe858888611864565b90612f21565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a54575047611adf565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611ab8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611adc9190613b4f565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611b5a5787341015611b49576040516312171d8360e31b815260040160405180910390fd5b611b538834613aaf565b9050611bf4565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf19190613d4a565b91505b81611c12576040516312171d8360e31b815260040160405180910390fd5b600f54600003611c5757611c46887f0000000000000000000000000000000000000000000000000000000000000000611882565b600f81905594509250611c90915050565b600f54600090611c69908a9086611864565b905080600f6000828254611c7d9190613a9c565b90915550909550909350611c9092505050565b935093915050565b6000611ca384612f96565b9050600f54600003611ce157611cd9817f0000000000000000000000000000000000000000000000000000000000000000611882565b600f55611d07565b6000611cec82613091565b905080600f6000828254611d009190613a9c565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611d825782341015611d71576040516312171d8360e31b815260040160405180910390fd5b611d7b8334613aaf565b9050611e1c565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e199190613d4a565b91505b81611e3a576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000610ca9670de0b6b3a7640000612f96565b6000611e618284613d7d565b6100919084613aaf565b600083815260086020526040902054600160801b90046001600160801b0316808303611e975750505050565b6000848152600860205260408120546001600160801b031690819003611ef157611ec083611987565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611f6f565b611f42611f3d670de0b6b3a7640000611f0a8886613aaf565b611f149190613c60565b85670de0b6b3a7640000611f28878a613aaf565b611f329190613c60565b85929190600161317a565b611987565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611f7884611987565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161195b5782610091565b6006546000908190611fdb908490600160801b90046001600160801b031661241e565b6006546201000090046001600160701b031692509050818111156121575760006120058383613aaf565b9050612014611f3d8286613218565b60068054601090612036908490600160801b90046001600160801b0316613d91565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061206f858361188290919063ffffffff16565b9050600061209d827f000000000000000000000000000000000000000000000000000000000000000061241e565b905080600960008282546120b19190613a9c565b909155506120c190508183613aaf565b91506120cc82611987565b600280546000906120e79084906001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121148261322d565b60048054600090612129908490600f0b613db1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121865760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061219e8785611882565b915060006121cc837f000000000000000000000000000000000000000000000000000000000000000061241e565b90506121f8817f000000000000000000000000000000000000000000000000000000000000000061241e565b9150831561221b5761220a8282613aaf565b6122149084613aaf565b9250612232565b6122258282613aaf565b61222f9084613a9c565b92505b8686101561225557612245838789611864565b9250612252828789611864565b91505b509550959350505050565b600454600160801b90046001600160801b03166122a9611f3d8261228c670de0b6b3a764000086613c60565b600554600160801b90046001600160801b031691908a600061317a565b600580546001600160801b03928316600160801b0292169190911790556122cf86611987565b6122d99082613d91565b600480546001600160801b03928316600160801b0292169190911790556122ff84611987565b6002805460009061231a9084906001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612347836119b1565b6004805460009061235c908490600f0b613db1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061238c85611987565b600280546010906123ae908490600160801b90046001600160801b0316613d91565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806123ec846116d08a888a611864565b90506123f9888486611864565b6124039082613a9c565b9050868111156124135786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611864565b60006001600160701b0382111561183a5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061249f57507f000000000000000000000000000000000000000000000000000000000000000061249d8583613aaf565b105b156124ac576124ac612f08565b6004549084900390600f0b6124c18482613ce5565b9050836124cd86611810565b13801561250257507f00000000000000000000000000000000000000000000000000000000000000006125008383611961565b105b1561250f5761250f612f08565b600354600160801b90046001600160801b0316612551611f3d8261253b670de0b6b3a764000088613c60565b6005546001600160801b031691908c600061317a565b600580546001600160801b0319166001600160801b039290921691909117905561257b8882613aaf565b905061258681611987565b600380546001600160801b03928316600160801b0292169190911790556125ac83611987565b600280546001600160801b0319166001600160801b03929092169190911790556125d5826119b1565b600480546001600160801b0319166001600160801b03929092169190911790556125fe87611987565b60028054601090612620908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461266990611f3d906001600160801b03168484612c63565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916126d8916001600160801b031690613aaf565b9050806000036126ec576001915050611497565b60006126f785613257565b90508060000361270c57600192505050611497565b60008061271a8385896132f3565b9150915080612730576000945050505050611497565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161276c929190613dde565b6040805180830381865af4158015612788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127ac9190613e54565b915091506127ca6127bc82611810565b6127c590613e78565b612d70565b9250826127e05760009650505050505050611497565b6127e982611987565b600780546000906128049084906001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061283181611987565b60078054601090612853908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6128b0876116d6565b6040518263ffffffff1660e01b81526004016128cc9190613b40565b6040805180830381865af41580156128e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061290c9190613e94565b9150915080612922575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161298891613a9c565b6129929190613aaf565b9050806000036129aa57506000958695509350505050565b60008087116129ba5760006129c5565b6129c5848884611864565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156129f9576129f9613ec4565b6040519080825280601f01601f191660200182016040528015612a23576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612a44578692505b828152826000602083013e9093509150505b9550959350505050565b600080600083612a6f86611810565b612a799190613ce5565b90506000811215612a91576000809250925050610da2565b946001945092505050565b6000806000612aae8888888888613462565b90506000612ad9670de0b6b3a7640000612ac88888613218565b612ad29190613a9c565b8390611882565b9050670de0b6b3a76400008110612b0d57612b06612aff670de0b6b3a764000089611882565b8290612f21565b9050612b25565b612b22612aff670de0b6b3a764000089613218565b90505b612b2f8186611882565b905088811015612b4757600080935093505050612a56565b97909703976001975095505050505050565b6000806000612b6b8989888888613491565b9050612b85866119fe612b7e8a8d613a9c565b879061241e565b9850612b92858a86611864565b985088811015612ba957600080925092505061169f565b888103670de0b6b3a76400008110612bd757612bd0612aff670de0b6b3a764000089613218565b9050612bef565b612bec612aff670de0b6b3a764000089611882565b90505b80891015612c055760008093509350505061169f565b90970398600198509650505050505050565b6000806000806000612c2a8987896134b6565b9092509050612c398289613aaf565b97506000612c4882888a611864565b9050612c54818b613aaf565b9a989950979650505050505050565b600080612c7184600061353c565b612c7c84600061353c565b612c869190613ce5565b90506000811315612ca257612c9b8186613a9c565b9450612cc1565b6000811215612cc157612cb481613e78565b612cbe9086613aaf565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612cf257600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612d15610da9565b612d1f9190613c60565b9050808311612d2f576000612d39565b612d398184613aaf565b9150610091612ad2670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c60565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e4d9190613eda565b935093509350935080612e695750600098975050505050505050565b868414612e9a57612e7984611987565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ecb57612eaa836119b1565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ef957612edb82611987565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612f3a5750670de0b6b3a7640000611497565b82600003612f4a57506000611497565b6000612f5583611810565b90506000612f6a612f6586611810565b613552565b9050818102612f81670de0b6b3a764000082613f1b565b9050612f8c81613778565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612fe5575047613070565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061306d9190613b4f565b90505b600f54600003613081576000610091565b600f546100919084908390611864565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016130e057504761316b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613144573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131689190613b4f565b90505b600f5461009190849083611864565b60008260000361318b575084610078565b81156131de576131bc61319e8487613a9c565b6131a8858761241e565b6131b2888a61241e565b6116d09190613a9c565b905060006131ca8588611fa9565b9050808210156131d8578091505b50610078565b8285036131ed57506000610078565b6100756131fa8487613aaf565b6132048587612cca565b61320e888a61241e565b6116d09190613aaf565b600061009183670de0b6b3a764000084612cdb565b600060016001607f1b0382111561183a5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190613272906001600160801b031684613218565b905061329e7f000000000000000000000000000000000000000000000000000000000000000082613a9c565b6002546001600160801b0316111561195b576002547f0000000000000000000000000000000000000000000000000000000000000000906132e99083906001600160801b0316613aaf565b6100919190613aaf565b6132fb61396e565b600080613307846116d6565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016133429190613b40565b6040805180830381865af415801561335e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133829190613e94565b9350905082613397575060009150611c909050565b60006133b961166184610160015185610140015161241e90919063ffffffff16565b6133d9611661856101200151866101000151612cca90919063ffffffff16565b6133e39190613ce5565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600061346e8585612f21565b61348761347f866119fe868b61241e565b859085611864565b6100759190613a9c565b600061349d8585612f21565b6134876134ae866119fe868b612cca565b859085612cdb565b6000806135068561350085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006134f6818c613218565b6135009190613aaf565b90612cca565b9150613532827f000000000000000000000000000000000000000000000000000000000000000061241e565b9050935093915050565b600081831361354b5781610091565b5090919050565b60008082136135745760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906135f79084901c611810565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361379357506000919050565b680755bf798b4a1bf1e582126137bc576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f8c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611810565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061398261390d565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561195b57600080fd5b600080600080600060a086880312156139ea57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613a1d57600080fd5b613a29888289016139c0565b9150509295509295909350565b600080600060608486031215613a4b57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613a7057600080fd5b613a7c868287016139c0565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561149757611497613a86565b8181038181111561149757611497613a86565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016114978284613ac2565b600060208284031215613b6157600080fd5b5051919050565b6001600160a01b0381168114610c8557600080fd5b600060208284031215613b8f57600080fd5b813561009181613b68565b8015158114610c8557600080fd5b600060208284031215613bba57600080fd5b813561009181613b9a565b6000808335601e19843603018112613bdc57600080fd5b83018035915067ffffffffffffffff821115613bf757600080fd5b602001915036819003821315610da257600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761149757611497613a86565b600080600060608486031215613c8c57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561198057611980613a86565b6001600160801b0381811683821601908082111561198057611980613a86565b818103600083128015838313168383128216171561198057611980613a86565b600060208284031215613d1757600080fd5b815161009181613b68565b8082018281126000831280158216821582161715613d4257613d42613a86565b505092915050565b600060208284031215613d5c57600080fd5b815161009181613b9a565b634e487b7160e01b600052601260045260246000fd5b600082613d8c57613d8c613d67565b500690565b6001600160801b0382811682821603908082111561198057611980613a86565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561149757611497613a86565b60006102a082019050613df2828551613ac2565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e6757600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e8d57613e8d613a86565b5060000390565b60008060408385031215613ea757600080fd5b825191506020830151613eb981613b9a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613ef057600080fd5b8451935060208501519250604085015191506060850151613f1081613b9a565b939692955090935050565b600082613f2a57613f2a613d67565b600160ff1b821460001984141615613f4457613f44613a86565b50059056fea26469706673582212208fe535d4724c34a0af34b5c4668028f92a3efc21decb7a6e108667d20130fee964736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
