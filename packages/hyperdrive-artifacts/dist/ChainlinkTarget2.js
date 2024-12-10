export const ChainlinkTarget2 = {
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
                },
                {
                    "name": "__aggregator",
                    "type": "address",
                    "internalType": "contract IChainlinkAggregatorV3"
                },
                {
                    "name": "__decimals",
                    "type": "uint8",
                    "internalType": "uint8"
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
            "name": "UnsafeCastToUint256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102c060405234801562000011575f80fd5b50604051620040d3380380620040d38339810160408190526200003491620001c6565b60015f5583516001600160a01b039081166080908152602080870151831660a0908152918701516101a052908601516101c05260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a0151909152908801805151909252815190920151909152805160409081015161016052905160609081015161018052908601518216610240529094015161026052918316610220529091166102a05260ff166102805262000326565b60405161020081016001600160401b03811182821017156200012257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200013f575f80fd5b919050565b5f6080828403121562000155575f80fd5b604051608081016001600160401b03811182821017156200018457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b805160ff811681146200013f575f80fd5b5f805f808486036102c0811215620001dc575f80fd5b61026080821215620001ec575f80fd5b620001f6620000f2565b9150620002038762000128565b8252620002136020880162000128565b6020830152620002266040880162000128565b6040830152606087015160608301526080870151608083015260a087015160a083015260c087015160c083015260e087015160e08301526101008088015181840152506101208088015181840152506101408088015181840152506101606200029181890162000128565b90830152610180620002a588820162000128565b908301526101a0620002b988820162000128565b908301526101c0620002cd88820162000128565b908301526101e0620002e28989830162000144565b8184015250819550620002f781880162000128565b945050506200030a610280860162000128565b91506200031b6102a08601620001b5565b905092959194509250565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613bfa620004d95f395f61146a01525f50505f50505f50505f610c2801525f50505f818160f9015281816103020152612c0201525f81816114e601528181611c0b01528181611c6e015281816123f5015281816127eb0152818161282701528181612a1f0152612bdc01525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612bb601525f61183501525f8181611956015281816124e60152818161255e0152612d1a01525f81816109a301528181610e37015281816114150152818161192a015261253201525f8181610e16015281816124b20152612cd601525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612c2801525f81816101d301528181610396015281816108e1015261327501525f81816106a7015281816107230152818161079701528181610862015261089a01525f61169b01525f5050613bfa5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a36600461362b565b61006b565b6040805192835260208301919091520160405180910390f35b61003f61006636600461362b565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613699565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613699565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e6136c0565b8b611217565b8d8a8a898e8561023e60208301836136c0565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b60408801602089016136e8565b8961028960408a018a613703565b60405161029c979695949392919061376e565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613699565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613699565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613699565b9350505f61042784898d61148f565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b896114c0565b5f6104706002886111e3565b90508c61048a8261048460208401846136c0565b85611217565b858b868461049b60208601866136c0565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c016136e8565b6104ec896104e68a8d6137ae565b90610683565b8d6104fa60408e018e613703565b60405161050e9897969594939291906137c1565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f61058860208301836136c0565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c560408501602086016136e8565b156105ea576105e0856105db6040870187613703565b611673565b9093509050610602565b5034610602856105fd6040870187613703565b61168e565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a76400006116c8565b90505b92915050565b5f6106cb427f00000000000000000000000000000000000000000000000000000000000000006116e3565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613699565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d16116f8565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611718565b92505b5061083883611737565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b6137ae565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613699565b4290611764565b84610f13565b6108d588611778565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d6137ae565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611915565b915091508060095f8282546109729190613699565b9091555061098d9050865f84610987816119e2565b88611a0b565b6109978183613699565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b82565b91506109db6109d68385610683565b611bcb565b600680546002906109fc9084906201000090046001600160701b0316613808565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a2982611737565b60068054601090610a4b908490600160801b90046001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611915565b915091508060095f828254610abe9190613699565b90915550610ad99050835f84610ad3816119e2565b8a611bf4565b610ae381836137ae565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b0316613808565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b4082611737565b60068054601090610b62908490600160801b90046001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b876119e2565b610ba4836119e2565b610bae9190613848565b5f611de4565b8e610bbf8482611e23565b50505b5f610bcc84612012565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca69190613867565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612154565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d416116f8565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006121da565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611718565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612205565b612269565b15610e6d57610e6d6122aa565b610e79878588856122c3565b91965094509250670de0b6b3a7640000610efb610e968784613699565b600254610eb4908890600160801b90046001600160801b03166137ae565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611718565b1115610f0957610f096122aa565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f6683611737565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf88866137ae565b610fb99190613882565b85670de0b6b3a7640000610fcd878a6137ae565b610fd79190613882565b85929190600161230b565b611737565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c84611737565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a764000086613882565b6005546001600160801b0316919088600161230b565b600580546001600160801b0319166001600160801b03929092169190911790556110b785611737565b600280545f906110d19084906001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe84611737565b60028054601090611120908490600160801b90046001600160801b0316613899565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d84611737565b6111579082613828565b600380546001600160801b03808416600160801b02911617905590505f61117d836123af565b905061119b8161118c876119e2565b61119690846138b9565b611de4565b6111a4846123ef565b6111b0576111b06122aa565b5f6111ba8561244e565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613699565b90915550505f838152600b60205260408120805483929061126a908490613699565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db6116f8565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f000000000000000000000000000000000000000000000000000000000000000061245a565b93508761134d858961247a565b111561135b5761135b6122aa565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611718565b93506113d58a670de0b6b3a7640000868c61248e565b509193509091506113e8905081836137ae565b6113f290876137ae565b95508861143f816114398d611407868c6137ae565b8d611412878261259a565b877f00000000000000000000000000000000000000000000000000000000000000006125af565b9061247a565b975090945050505093509350935093565b5f61069783670de0b6b3a7640000846125cf565b5f61069a7f0000000000000000000000000000000000000000000000000000000000000000836125f2565b5f6114a060408301602084016136e8565b156114ac5750826114b9565b6114b68484612606565b90505b9392505050565b6002546001600160801b0316838110156114dc576114dc6122aa565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611514908390600f0b61261a565b1015611522576115226122aa565b60045461156c90610fe290600160801b90046001600160801b031661154f670de0b6b3a764000086613882565b600554600160801b90046001600160801b0316919089600161230b565b600580546001600160801b03928316600160801b02921691909117905561159281611737565b600280546001600160801b0319166001600160801b03929092169190911790556115bb85611737565b600280546010906115dd908490600160801b90046001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061160a85611737565b6004805460109061162c908490600160801b90046001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61165a836123af565b905061119b81611669886119e2565b6111969084613848565b5f8060405163350b944160e11b815260040160405180910390fd5b6116c36001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308661263f565b505050565b5f825f1904841183021582026116dc575f80fd5b5091020490565b5f6116ee82846138f4565b61069790846137ae565b6002546004545f916106cb916001600160801b0390911690600f0b61261a565b5f61172e826117288588886116c8565b9061269f565b95945050505050565b5f6001600160801b0382111561176057604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116117725782610697565b50919050565b6006545f90819061179a908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611910575f6117c383836137ae565b90506117d2610fe28286611450565b600680546010906117f4908490600160801b90046001600160801b0316613899565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61182c858361260690919063ffffffff16565b90505f611859827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f82825461186c9190613699565b9091555061187c905081836137ae565b915061188782611737565b600280545f906118a19084906001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118ce82612704565b600480545f906118e2908490600f0b613907565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f806119218785612606565b91505f61194e837f0000000000000000000000000000000000000000000000000000000000000000610683565b905061197a817f0000000000000000000000000000000000000000000000000000000000000000610683565b9150831561199d5761198c82826137ae565b61199690846137ae565b92506119b4565b6119a782826137ae565b6119b19084613699565b92505b868610156119d7576119c78387896116c8565b92506119d48287896116c8565b91505b509550959350505050565b5f6001600160ff1b038211156117605760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611a53610fe282611a37670de0b6b3a764000086613882565b600554600160801b90046001600160801b031691908a5f61230b565b600580546001600160801b03928316600160801b029216919091179055611a7986611737565b611a839082613899565b600480546001600160801b03928316600160801b029216919091179055611aa984611737565b600280545f90611ac39084906001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611af08361272d565b600480545f90611b04908490600f0b613907565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b3485611737565b60028054601090611b56908490600160801b90046001600160801b0316613899565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611b9984611b938a888a6116c8565b90612606565b9050611ba68884866116c8565b611bb09082613699565b905086811115611bc05786810391505b509695505050505050565b5f6001600160701b038211156117605760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611c3657507f0000000000000000000000000000000000000000000000000000000000000000611c3485836137ae565b105b15611c4357611c436122aa565b6004549084900390600f0b611c588482613848565b905083611c64866119e2565b138015611c9957507f0000000000000000000000000000000000000000000000000000000000000000611c97838361261a565b105b15611ca657611ca66122aa565b600354600160801b90046001600160801b0316611ce7610fe282611cd2670de0b6b3a764000088613882565b6005546001600160801b031691908c5f61230b565b600580546001600160801b0319166001600160801b0392909216919091179055611d1188826137ae565b9050611d1c81611737565b600380546001600160801b03928316600160801b029216919091179055611d4283611737565b600280546001600160801b0319166001600160801b0392909216919091179055611d6b8261272d565b600480546001600160801b0319166001600160801b0392909216919091179055611d9487611737565b60028054601090611db6908490600160801b90046001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611dff90610fe2906001600160801b03168484612768565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e6d916001600160801b0316906137ae565b9050805f03611e8057600191505061069a565b5f611e8a856127ca565b9050805f03611e9e5760019250505061069a565b5f80611eab838589612865565b9150915080611ec0575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611efb9291906139b2565b6040805180830381865af4158015611f15573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f399190613a27565b91509150611f57611f49826119e2565b611f5290613a49565b6129d9565b925082611f6c575f965050505050505061069a565b611f7582611737565b600780545f90611f8f9084906001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fbc81611737565b60078054601090611fde908490600160801b90046001600160801b0316613828565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61203987612b6d565b6040518263ffffffff1660e01b81526004016120559190613a63565b6040805180830381865af415801561206f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120939190613a72565b91509150806120a857505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161210d91613699565b61211791906137ae565b9050805f0361212d57505f958695509350505050565b5f80871161213b575f612146565b6121468488846116c8565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561217757612177613aa0565b6040519080825280601f01601f1916602001820160405280156121a1576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156121c1578692505b828152825f602083013e90999098509650505050505050565b5f6121fa8787876121f388670de0b6b3a76400006137ae565b8787612ca7565b979650505050505050565b5f6114b661224561221e84670de0b6b3a76400006137ae565b611439670de0b6b3a7640000612234818a611450565b61223e91906137ae565b879061247a565b61225790670de0b6b3a7640000613699565b611b9384670de0b6b3a76400006137ae565b5f8061229f856122776116f8565b6122819190613699565b600254610eb4908790600160801b90046001600160801b03166137ae565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6122d3898789612cc9565b90925090506122e282896137ae565b97505f6122f082888a6116c8565b90506122fc818b6137ae565b9a989950979650505050505050565b5f825f0361231a57508461172e565b811561236c5761234b61232d8487613699565b6123378587610683565b612341888a610683565b611b939190613699565b90505f6123588588611764565b905080821015612366578091505b5061172e565b82850361237a57505f61172e565b6123a561238784876137ae565b612391858761247a565b61239b888a610683565b611b9391906137ae565b9695505050505050565b5f6123d4600b5f6123c16002866111e3565b81526020019081526020015f20546119e2565b6123e5600b5f6123c16001876111e3565b61069a9190613848565b5f61241a7f00000000000000000000000000000000000000000000000000000000000000008361247a565b60035461243091906001600160801b0316613699565b600254612446906001600160801b031684610683565b101592915050565b5f61069a826004611e23565b5f6121fa87878761247388670de0b6b3a76400006137ae565b8787612d48565b5f6106978383670de0b6b3a76400006125cf565b5f8080806124de87866124d78b6114396124b08c670de0b6b3a76400006137ae565b7f00000000000000000000000000000000000000000000000000000000000000009061247a565b91906125cf565b935061250a847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f61252a61252289670de0b6b3a76400006137ae565b8a90886125cf565b9050612556817f000000000000000000000000000000000000000000000000000000000000000061247a565b9350612582847f0000000000000000000000000000000000000000000000000000000000000000610683565b61258c9084613699565b915050945094509450949050565b5f8183116125a85781610697565b5090919050565b5f806125c6846125c08a888a6125cf565b90611450565b9050611ba68884865b5f825f1904841183021582026125e3575f80fd5b50910281810615159190040190565b5f6106976125ff84612d58565b8390610683565b5f61069783670de0b6b3a7640000846116c8565b5f806126268484612dc9565b909250905080612638576126386122aa565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612699908590612e01565b50505050565b5f815f036126b65750670de0b6b3a764000061069a565b825f036126c457505f61069a565b5f6126ce836119e2565b90505f6126e26126dd866119e2565b612e67565b90508181026126f9670de0b6b3a764000082613ab4565b90506123a58161308c565b5f60016001607f1b038211156117605760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b031982128061274a575060016001607f1b0382135b156117605760405163a5353be560e01b815260040160405180910390fd5b5f80612774845f61321e565b61277e845f61321e565b6127889190613848565b90505f8113156127a35761279c8186613699565b94506127c1565b5f8112156127c1576127b481613a49565b6127be90866137ae565b94505b50929392505050565b6003545f9081906127e4906001600160801b031684611450565b90506128107f000000000000000000000000000000000000000000000000000000000000000082613699565b6002546001600160801b03161115611772576002547f00000000000000000000000000000000000000000000000000000000000000009061285b9083906001600160801b03166137ae565b6114b991906137ae565b61286d61358c565b5f8061287884612b6d565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128b29190613a63565b6040805180830381865af41580156128cc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128f09190613a72565b935090508261290457505f91506129d19050565b5f61292a61292584610160015185610140015161068390919063ffffffff16565b6119e2565b61294a61292585610120015186610100015161247a90919063ffffffff16565b6129549190613848565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a8f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ab39190613ae0565b935093509350935080612ace57505f98975050505050505050565b868414612aff57612ade84611737565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b3057612b0f8361272d565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b5e57612b4082611737565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b756135d6565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c6d911661322c565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612c9f9290041661322c565b905292915050565b5f80612cb78888888888886132a0565b909250905080611bc057611bc06122aa565b5f80612d128561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612d08818c611450565b61143991906137ae565b9150612d3e827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612cb7888888888888613364565b5f80826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015612d96573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612dba9190613b31565b5050509150506114b981613420565b5f805f83612dd6866119e2565b612de09190613848565b90505f811215612df6575f80925092505061067c565b946001945092505050565b5f612e156001600160a01b03841683613442565b905080515f14158015612e39575080806020019051810190612e379190613b7d565b155b156116c357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f808213612e885760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f0b9084901c6119e2565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136130a557505f919050565b680755bf798b4a1bf1e582126130ce576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906123a574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119e2565b5f8183136125a85781610697565b5f80670de0b6b3a764000061323f6106a0565b6132499190613882565b9050808311613258575f613262565b61326281846137ae565b91506114b9613299670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613882565b8390612606565b5f805f6132b0898988888861344f565b90506132ca866117286132c38a8d613699565b8790610683565b98506132d7858a866116c8565b9850888110156132ed575f809250925050613359565b888103670de0b6b3a764000081106133225761331b613314670de0b6b3a764000089611450565b829061269f565b905061333a565b613337613314670de0b6b3a764000089612606565b90505b8089101561334f575f80935093505050613359565b8803925060019150505b965096945050505050565b5f805f613374898988888861344f565b905061338486611728898b613699565b97508781101561339a575f809250925050613359565b8781036133a88186886125cf565b9050670de0b6b3a764000081106133d5576133ce613314670de0b6b3a764000089611450565b90506133ed565b6133ea613314670de0b6b3a764000089612606565b90505b6133f78186611450565b9050808a101561340e575f80935093505050613359565b90980398600198509650505050505050565b5f808212156117605760405163071d137160e51b815260040160405180910390fd5b606061069783835f61347d565b5f61345a858561269f565b61347361346b86611728868b61247a565b8590856125cf565b6123a59190613699565b6060814710156134a25760405163cd78605960e01b8152306004820152602401612e5e565b5f80856001600160a01b031684866040516134bd9190613b98565b5f6040518083038185875af1925050503d805f81146134f7576040519150601f19603f3d011682016040523d82523d5f602084013e6134fc565b606091505b50915091506123a586838360608261351c5761351782613563565b6114b9565b815115801561353357506001600160a01b0384163b155b1561355c57604051639996b31560e01b81526001600160a01b0385166004820152602401612e5e565b50806114b9565b8051156135735780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135a06135d6565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561363e575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613669575f80fd5b85016060818803121561367a575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a613685565b6001600160a01b03811681146105af575f80fd5b5f602082840312156136d0575f80fd5b81356114b9816136ac565b80151581146105af575f80fd5b5f602082840312156136f8575f80fd5b81356114b9816136db565b5f808335601e19843603018112613718575f80fd5b83018035915067ffffffffffffffff821115613732575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6137a160c083018486613746565b9998505050505050505050565b8181038181111561069a5761069a613685565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6137fa60e083018486613746565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561263857612638613685565b6001600160801b0381811683821601908082111561263857612638613685565b8181035f83128015838313168383128216171561263857612638613685565b5f60208284031215613877575f80fd5b81516114b9816136ac565b808202811582820484141761069a5761069a613685565b6001600160801b0382811682821603908082111561263857612638613685565b8082018281125f8312801582168215821617156138d8576138d8613685565b505092915050565b634e487b7160e01b5f52601260045260245ffd5b5f82613902576139026138e0565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a613685565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506139c5828551613934565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613a38575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613a5d57613a5d613685565b505f0390565b610180810161069a8284613934565b5f8060408385031215613a83575f80fd5b825191506020830151613a95816136db565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613ac257613ac26138e0565b600160ff1b82145f1984141615613adb57613adb613685565b500590565b5f805f8060808587031215613af3575f80fd5b845193506020850151925060408501519150606085015161367a816136db565b805169ffffffffffffffffffff81168114613b2c575f80fd5b919050565b5f805f805f60a08688031215613b45575f80fd5b613b4e86613b13565b9450602086015193506040860151925060608601519150613b7160808701613b13565b90509295509295909350565b5f60208284031215613b8d575f80fd5b81516114b9816136db565b5f82515f5b81811015613bb75760208186018101518583015201613b9d565b505f92019182525091905056fea2646970667358221220fd7bcf9d20b3a827267355b78180e9c498491cf137c663b1f116a4fe25c46f0364736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
