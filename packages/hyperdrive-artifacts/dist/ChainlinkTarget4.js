export const ChainlinkTarget4 = {
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
    bytecode: '0x6102c06040523480156200001257600080fd5b5060405162003522380380620035228339810160408190526200003591620001d0565b600160005583516001600160a01b039081166080908152602080870151831660a0908152918701516101a052908601516101c05260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a0151909152908801805151909252815190920151909152805160409081015161016052905160609081015161018052908601518216610240529094015161026052918316610220529091166102a05260ff166102805262000334565b60405161020081016001600160401b03811182821017156200012657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014457600080fd5b919050565b6000608082840312156200015c57600080fd5b604051608081016001600160401b03811182821017156200018d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b805160ff811681146200014457600080fd5b6000806000808486036102c0811215620001e957600080fd5b61026080821215620001fa57600080fd5b62000204620000f4565b915062000211876200012c565b825262000221602088016200012c565b602083015262000234604088016200012c565b6040830152606087015160608301526080870151608083015260a087015160a083015260c087015160c083015260e087015160e08301526101008088015181840152506101208088015181840152506101408088015181840152506101606200029f8189016200012c565b90830152610180620002b38882016200012c565b908301526101a0620002c78882016200012c565b908301526101c0620002db8882016200012c565b908301526101e0620002f08989830162000149565b8184015250819550620003058188016200012c565b945050506200031861028086016200012c565b9150620003296102a08601620001be565b905092959194509250565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516130bc62000466600039600081816110db015261228f015260005050600050506000505060006109c10152600050506000818161026d0152611f850152600081816117cb0152818161182e01528181611b6a01528181611ba601528181611d9e0152611f5f01526000818161056f0152611f39015260006113a0015260006114fb01526000818161073301526114cf015260005050600081816105900152611fab01526000818161066b015261237a0152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb0152610623015260006122dc0152600050506130bc6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612ac4565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612b1b565b6100b5565b005b610059610095366004612ac4565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610ad0565b90935091506101266020850185612b52565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612b7d565b61017160408c018c612b9a565b60405161018396959493929190612c0a565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610c13565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612c5a565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610e0e565b6102eb600360f81b6102e56020870187612b52565b88610ee8565b60006103066102fd6020870187612b52565b88848989610ad0565b90945090506103158188612c84565b9250600061032283610f88565b5090506103326020870187612b52565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612b7d565b8a888e80604001906103829190612b9a565b604051610396989796959493929190612c97565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612b52565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a76400006110d4565b905090565b6000610421427f0000000000000000000000000000000000000000000000000000000000000000611100565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610ac8565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612cdf565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a61111d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061113e565b92505b506105c18361115e565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612c84565b8a8461118c565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612cdf565b42906112ca565b8461118c565b61065e886112df565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612c84565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c611483565b6000818152600b60205260408120549192508c8c831561080257600192506000806106eb86898d8660006114b8565b9150915080600960008282546107019190612cdf565b9091555061071d90508660008461071781611587565b886115b1565b6107278183612cdf565b915061075786838a8e877f000000000000000000000000000000000000000000000000000000000000000061172b565b915061076b6107668385611775565b61178a565b6006805460029061078c9084906201000090046001600160701b0316612cf2565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b98261115e565b600680546010906107db908490600160801b90046001600160801b0316612d12565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f600184611483565b6000818152600b6020526040902054909150801561091e576001945060008061083c838b8f8860016114b8565b9150915080600960008282546108529190612cdf565b9091555061086e90508360008461086881611587565b8a6117b4565b6108788183612c84565b91506108876107668387611775565b600680546002906108a89084906201000090046001600160701b0316612cf2565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d58261115e565b600680546010906108f7908490600160801b90046001600160801b0316612d12565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a61093087611587565b61093983611587565b6109439190612d32565b60006119a5565b8e6109558482610c13565b50505b600061096384610f88565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190612d52565b90506001600160a01b03811615610ab657610ab35a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906119e4565b50505b509b9d50505050505050505050505050505b949350505050565b600080610adc85611a6f565b505060075485906001600160801b031680821115610b0157806001600160801b031691505b81600003610b16576000809250925050610c09565b610b25600360f81b8984610e0e565b600754600090610b4b9084906001600160801b03600160801b9091048116908516611a7c565b9050610b568361115e565b610b609083612d6f565b600780546001600160801b0319166001600160801b0392909216919091179055610b898161115e565b60078054601090610bab908490600160801b90046001600160801b0316612d6f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bda818887611a9a565b9350610be68684611b33565b841015610c065760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c5e916001600160801b031690612c84565b905080600003610c72576001915050610e08565b6000610c7d85611b48565b905080600003610c9257600192505050610e08565b600080610ca0838589611be4565b9150915080610cb6576000945050505050610e08565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cf2929190612e0d565b6040805180830381865af4158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190612e83565b91509150610d50610d4282611587565b610d4b90612ea7565b611d58565b925082610d665760009650505050505050610e08565b610d6f8261115e565b60078054600090610d8a9084906001600160801b0316612d12565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610db78161115e565b60078054601090610dd9908490600160801b90046001600160801b0316612d12565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e94908490612c84565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f1a908490612cdf565b90915550506000838152600b602052604081208054839290610f3d908490612cdf565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610edb565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb187611ef0565b6040518263ffffffff1660e01b8152600401610fcd9190612ec3565b6040805180830381865af4158015610fe9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100d9190612ed2565b9150915080611023575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108991612cdf565b6110939190612c84565b9050806000036110ab57506000958695509350505050565b60008087116110bb5760006110c6565b6110c6848884611a7c565b976001975095505050505050565b6000610e087f00000000000000000000000000000000000000000000000000000000000000008361202a565b600061110c8284612c5a565b6111169084612c84565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b61203f565b60006111558261114f858888611a7c565b90612065565b95945050505050565b60006001600160801b0382111561118857604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036111b85750505050565b6000848152600860205260408120546001600160801b031690819003611212576111e18361115e565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611290565b61126361125e670de0b6b3a764000061122b8886612c84565b6112359190612f02565b85670de0b6b3a7640000611249878a612c84565b6112539190612f02565b8592919060016120da565b61115e565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112998461115e565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116112d95782611116565b50919050565b6006546000908190611302908490600160801b90046001600160801b0316611775565b6006546201000090046001600160701b0316925090508181111561147e57600061132c8383612c84565b905061133b61125e8286612178565b6006805460109061135d908490600160801b90046001600160801b0316612d6f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611396858361218d90919063ffffffff16565b905060006113c4827f0000000000000000000000000000000000000000000000000000000000000000611775565b905080600960008282546113d89190612cdf565b909155506113e890508183612c84565b91506113f38261115e565b6002805460009061140e9084906001600160801b0316612d12565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061143b826121a2565b60048054600090611450908490600f0b612f19565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114ad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806114c5878561218d565b915060006114f3837f0000000000000000000000000000000000000000000000000000000000000000611775565b905061151f817f0000000000000000000000000000000000000000000000000000000000000000611775565b91508315611542576115318282612c84565b61153b9084612c84565b9250611559565b61154c8282612c84565b6115569084612cdf565b92505b8686101561157c5761156c838789611a7c565b9250611579828789611a7c565b91505b509550959350505050565b60006001600160ff1b038211156111885760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115fa61125e826115dd670de0b6b3a764000086612f02565b600554600160801b90046001600160801b031691908a60006120da565b600580546001600160801b03928316600160801b0292169190911790556116208661115e565b61162a9082612d6f565b600480546001600160801b03928316600160801b0292169190911790556116508461115e565b6002805460009061166b9084906001600160801b0316612d12565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611698836121cc565b600480546000906116ad908490600f0b612f19565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116dd8561115e565b600280546010906116ff908490600160801b90046001600160801b0316612d6f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117438461173d8a888a611a7c565b9061218d565b9050611750888486611a7c565b61175a9082612cdf565b90508681111561176a5786810391505b509695505050505050565b60006111168383670de0b6b3a7640000611a7c565b60006001600160701b038211156111885760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117f657507f00000000000000000000000000000000000000000000000000000000000000006117f48583612c84565b105b1561180357611803612208565b6004549084900390600f0b6118188482612d32565b90508361182486611587565b13801561185957507f0000000000000000000000000000000000000000000000000000000000000000611857838361203f565b105b1561186657611866612208565b600354600160801b90046001600160801b03166118a861125e82611892670de0b6b3a764000088612f02565b6005546001600160801b031691908c60006120da565b600580546001600160801b0319166001600160801b03929092169190911790556118d28882612c84565b90506118dd8161115e565b600380546001600160801b03928316600160801b0292169190911790556119038361115e565b600280546001600160801b0319166001600160801b039290921691909117905561192c826121cc565b600480546001600160801b0319166001600160801b03929092169190911790556119558761115e565b60028054601090611977908490600160801b90046001600160801b0316612d12565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546119c09061125e906001600160801b03168484612221565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a0a57611a0a612f46565b6040519080825280601f01601f191660200182016040528015611a34576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611a55578692505b828152826000602083013e90999098509650505050505050565b6000610e08826004610c13565b6000826000190484118302158202611a9357600080fd5b5091020490565b600080611aa78585611775565b9050611ab281612288565b945084600003611ac6576000915050611116565b849150611ad96040840160208501612b7d565b15611b0857611b0185611aef6020860186612b52565b611afc6040870187612b9a565b6122b4565b9150611b2b565b611b2b85611b196020860186612b52565b611b266040870187612b9a565b6122cf565b509392505050565b60006111168383670de0b6b3a7640000612309565b6003546000908190611b63906001600160801b031684612178565b9050611b8f7f000000000000000000000000000000000000000000000000000000000000000082612cdf565b6002546001600160801b031611156112d9576002547f000000000000000000000000000000000000000000000000000000000000000090611bda9083906001600160801b0316612c84565b6111169190612c84565b611bec612a11565b600080611bf884611ef0565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c339190612ec3565b6040805180830381865af4158015611c4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c739190612ed2565b9350905082611c885750600091506100ad9050565b6000611caf611caa84610160015185610140015161177590919063ffffffff16565b611587565b611ccf611caa856101200151866101000151611b3390919063ffffffff16565b611cd99190612d32565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e359190612f5c565b935093509350935080611e515750600098975050505050505050565b868414611e8257611e618461115e565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611eb357611e92836121cc565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611ee157611ec38261115e565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611ef8612a63565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611ff0911661232f565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120229290041661232f565b905292915050565b6000611116612038846123a5565b8390611775565b60008061204c8484612419565b90925090508061205e5761205e612208565b5092915050565b60008160000361207e5750670de0b6b3a7640000610e08565b8260000361208e57506000610e08565b600061209983611587565b905060006120ae6120a986611587565b612458565b90508181026120c5670de0b6b3a764000082612f9d565b90506120d08161267e565b9695505050505050565b6000826000036120eb575084611155565b811561213e5761211c6120fe8487612cdf565b6121088587611775565b612112888a611775565b61173d9190612cdf565b9050600061212a85886112ca565b905080821015612138578091505b50611155565b82850361214d57506000611155565b6120d061215a8487612c84565b6121648587611b33565b61216e888a611775565b61173d9190612c84565b600061111683670de0b6b3a764000084612309565b600061111683670de0b6b3a764000084611a7c565b600060016001607f1b038211156111885760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806121ea575060016001607f1b0382135b156111885760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b60008061222f846000612813565b61223a846000612813565b6122449190612d32565b90506000811315612260576122598186612cdf565b945061227f565b600081121561227f5761227281612ea7565b61227c9086612c84565b94505b50929392505050565b6000610e087f000000000000000000000000000000000000000000000000000000000000000083612829565b600060405163350b944160e11b815260040160405180910390fd5b6123036001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612837565b50505050565b600082600019048411830215820261232057600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612343610426565b61234d9190612f02565b905080831161235d576000612367565b6123678184612c84565b915061111661239e670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612f02565b839061218d565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156123e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061240a9190612fea565b5050509150506111168161288e565b60008060008361242886611587565b6124329190612d32565b9050600081121561244a576000809250925050612451565b9150600190505b9250929050565b600080821361247a5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906124fd9084901c611587565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361269957506000919050565b680755bf798b4a1bf1e582126126c2576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120d074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611587565b60008183136128225781611116565b5090919050565b600061111661239e846123a5565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526128899084906128b1565b505050565b6000808212156111885760405163071d137160e51b815260040160405180910390fd5b60006128c66001600160a01b03841683612919565b905080516000141580156128eb5750808060200190518101906128e9919061303a565b155b1561288957604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606111168383600084600080856001600160a01b0316848660405161293f9190613057565b60006040518083038185875af1925050503d806000811461297c576040519150601f19603f3d011682016040523d82523d6000602084013e612981565b606091505b50915091506120d08683836060826129a15761299c826129e8565b611116565b81511580156129b857506001600160a01b0384163b155b156129e157604051639996b31560e01b81526001600160a01b0385166004820152602401612910565b5080611116565b8051156129f85780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280612a25612a63565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612ad957600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612afe57600080fd5b840160608187031215612b1057600080fd5b809150509250925092565b60008060408385031215612b2e57600080fd5b50508035926020909101359150565b6001600160a01b038116811461040b57600080fd5b600060208284031215612b6457600080fd5b813561111681612b3d565b801515811461040b57600080fd5b600060208284031215612b8f57600080fd5b813561111681612b6f565b6000808335601e19843603018112612bb157600080fd5b83018035915067ffffffffffffffff821115612bcc57600080fd5b60200191503681900382131561245157600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612c3860a083018486612be1565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612c6957612c69612c44565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0857610e08612c6e565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612cd160e083018486612be1565b9a9950505050505050505050565b80820180821115610e0857610e08612c6e565b6001600160701b0381811683821601908082111561205e5761205e612c6e565b6001600160801b0381811683821601908082111561205e5761205e612c6e565b818103600083128015838313168383128216171561205e5761205e612c6e565b600060208284031215612d6457600080fd5b815161111681612b3d565b6001600160801b0382811682821603908082111561205e5761205e612c6e565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612e21828551612d8f565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612e9657600080fd5b505080516020909101519092909150565b6000600160ff1b8201612ebc57612ebc612c6e565b5060000390565b6101808101610e088284612d8f565b60008060408385031215612ee557600080fd5b825191506020830151612ef781612b6f565b809150509250929050565b8082028115828204841417610e0857610e08612c6e565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0857610e08612c6e565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612f7257600080fd5b8451935060208501519250604085015191506060850151612f9281612b6f565b939692955090935050565b600082612fac57612fac612c44565b600160ff1b821460001984141615612fc657612fc6612c6e565b500590565b805169ffffffffffffffffffff81168114612fe557600080fd5b919050565b600080600080600060a0868803121561300257600080fd5b61300b86612fcb565b945060208601519350604086015192506060860151915061302e60808701612fcb565b90509295509295909350565b60006020828403121561304c57600080fd5b815161111681612b6f565b6000825160005b81811015613078576020818601810151858301520161305e565b50600092019182525091905056fea2646970667358221220a3bfec1b3589f7f34eaebe7ed34c0afda8aaad532a904d6cdacc1ff87e0bbe8964736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
