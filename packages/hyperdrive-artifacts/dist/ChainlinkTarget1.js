export const ChainlinkTarget1 = {
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
            "name": "UnsafeCastToUint256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102c06040523480156200001257600080fd5b506040516200411d3803806200411d8339810160408190526200003591620001d0565b600160005583516001600160a01b039081166080908152602080870151831660a0908152918701516101a052908601516101c05260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a0151909152908801805151909252815190920151909152805160409081015161016052905160609081015161018052908601518216610240529094015161026052918316610220529091166102a05260ff166102805262000334565b60405161020081016001600160401b03811182821017156200012657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014457600080fd5b919050565b6000608082840312156200015c57600080fd5b604051608081016001600160401b03811182821017156200018d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b805160ff811681146200014457600080fd5b6000806000808486036102c0811215620001e957600080fd5b61026080821215620001fa57600080fd5b62000204620000f4565b915062000211876200012c565b825262000221602088016200012c565b602083015262000234604088016200012c565b6040830152606087015160608301526080870151608083015260a087015160a083015260c087015160c083015260e087015160e08301526101008088015181840152506101208088015181840152506101408088015181840152506101606200029f8189016200012c565b90830152610180620002b38882016200012c565b908301526101a0620002c78882016200012c565b908301526101c0620002db8882016200012c565b908301526101e0620002f08989830162000149565b8184015250819550620003058188016200012c565b945050506200031861028086016200012c565b9150620003296102a08601620001be565b905092959194509250565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613c30620004ed600039600081816119dd01526125b401526000505060005050600050506000610b650152600050506000818160af015281816103250152612bca0152600081816113eb015281816117fc0152818161185f015281816127a8015281816127e4015281816129e30152612ba401526000818161071301528181610de801528181610e2f01528181610ff401528181611661015281816116af0152612b7e01526000611b50015260008181611c76015281816122d901526123520152600081816108d701528181610f8c01528181611c4a0152612326015260008181610e81015261229f01526000818161073401528181610dc601528181610e50015281816110150152818161163f015281816116d00152612bf001526000818161080f01528181610f0b015281816117580152818161217401526132040152600081816105d20152818161064d015281816106c30152818161078f01526107c701526000612601015260005050613c306000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461362e565b610073565b60405190815260200160405180910390f35b61004e61006e36600461362e565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610c73565b3387610ca8565b6000806000806000806101568b888e610d81565b95509550955095509550955060008c90508c42101561021657826009600082825461018191906136a3565b9091555061019990506101926105ca565b4284611075565b6101a68c888787856111b3565b60006101b18e61132d565b90506101cf6101bf8e611377565b6101c990836136b6565b826113a5565b6101d8896113e4565b6101e4576101e4611444565b60006101ef8a61145d565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b610220868961146a565b955061022b8861145d565b505b600061023a878a8d61154b565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610c73565b61027a60208301836136eb565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a01613716565b6102cc8a6102c68d8f6136a3565b906115e5565b8d6102da60408c018c613733565b6040516102ee9897969594939291906137a3565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610c73565b6000806000806000806103bb8b888e6115fa565b95509550955095509550955060008c90508c42101561046e5782600960008282546103e691906136a3565b909155506103f790506101926105ca565b6104048c888787856117e5565b600061040f8261132d565b905061042761041d8e611377565b6101c990836137eb565b610430896113e4565b61043c5761043c611444565b60006104478a61145d565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b610478868961146a565b95506104838861145d565b505b6000610492878a8d61154b565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610c73565b6104d060208301836136eb565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a01613716565b8a61051c60408b018b613733565b60405161052f9796959493929190613813565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058860208301836136eb565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119d6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a02565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b6136a3565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a18565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b92505b5061076583611a50565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b613854565b8a84611075565b6107f9896107f36107ec7f0000000000000000000000000000000000000000000000000000000000000000836136a3565b4290611a7a565b84611075565b61080288611a8f565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d613854565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610c73565b6000818152600b60205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c33565b9150915080600960008282546108a591906136a3565b909155506108c19050866000846108bb81611377565b886111b3565b6108cb81836136a3565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d02565b915061090f61090a83856115e5565b611d4c565b600680546002906109309084906201000090046001600160701b0316613867565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611a50565b6006805460109061097f908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610c73565b6000818152600b60205260409020549091508015610ac257600194506000806109e0838b8f886001611c33565b9150915080600960008282546109f691906136a3565b90915550610a12905083600084610a0c81611377565b8a6117e5565b610a1c8183613854565b9150610a2b61090a83876115e5565b60068054600290610a4c9084906201000090046001600160701b0316613867565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611a50565b60068054601090610a9b908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad487611377565b610add83611377565b610ae791906136b6565b60006113a5565b8e610af98482611d76565b50505b6000610b0784611f70565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be591906138a7565b90506001600160a01b03811615610c5a57610c575a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906120bc565b50505b509b9d5050505050505050505050505050949350505050565b60006001600160f81b03821115610c9d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ceb57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d2e908490613854565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d95611a18565b90506000610da28a612147565b6002549091508c908c90610e0c908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612198565b600254919d509a50909550610e74908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b9550610eaa858c610ea5897f0000000000000000000000000000000000000000000000000000000000000000612208565b612238565b15610eb757610eb7611444565b6000806000610ec885878b8761227a565b9c5091945092509050610edb8184613854565b610ee590896136a3565b9750610ef182846136a3565b610efb908d6136a3565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f359190613854565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f7d5760008b8152600860205260409020600101546001600160801b0316610f7f565b8b5b90508b610fb08e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d02565b9950610fbc878a613854565b9850670de0b6b3a7640000611039610fd487876136a3565b600254610ff2908f90600160801b90046001600160801b0316613854565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b111561104757611047611444565b6110578a8a878a8787600061238e565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b6000848152600860205260408120546001600160801b0316908190036110fb576110ca83611a50565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611179565b61114c611147670de0b6b3a76400006111148886613854565b61111e91906138c4565b85670de0b6b3a7640000611132878a613854565b61113c91906138c4565b85929190600161242d565b611a50565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61118284611a50565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111fc611147826111df670de0b6b3a7640000866138c4565b600554600160801b90046001600160801b031691908a600061242d565b600580546001600160801b03928316600160801b02921691909117905561122286611a50565b61122c90826138db565b600480546001600160801b03928316600160801b02921691909117905561125284611a50565b6002805460009061126d9084906001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129a836124d7565b600480546000906112af908490600f0b6138fb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112df85611a50565b60028054601090611301908490600160801b90046001600160801b03166138db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611355600b6000611341600286610c73565b815260200190815260200160002054611377565b611367600b6000611341600187610c73565b61137191906136b6565b92915050565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c090611147906001600160801b03168484612513565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006114107f00000000000000000000000000000000000000000000000000000000000000008361257a565b60035461142691906001600160801b03166136a3565b60025461143c906001600160801b0316846115e5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611371826004611d76565b600080600061147884611a8f565b9092509050600061148986866115e5565b9050818311156114a15761149e86838561258f565b95505b828110156114b35780830392506114b8565b600092505b6114c183611d4c565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151457869003611518565b5060005b61152181611a50565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061155885856115e5565b9050611563816125ad565b9450846000036115775760009150506115de565b84915061158a6040840160208501613716565b156115b9576115b2856115a060208601866136eb565b6115ad6040870187613733565b6125d9565b91506115dc565b6115dc856115ca60208601866136eb565b6115d76040870187613733565b6125f4565b505b9392505050565b60006115de8383670de0b6b3a764000061258f565b60008060008060008060008061160e611a18565b9050600061161b8a612147565b6002549091508b908d90611685908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061262e565b600254919d509b50909550600090819081906116f4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b985061170284878b8861227a565b9c5091945090925090506117168284613854565b6117209089613854565b975061172c81846136a3565b611736908e613854565b9c506117428a8e6136a3565b9b50505050505050506117cf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6117829190613854565b81526020810191909152604001600020600101546001600160801b0316428e116117c65760008e8152600860205260409020600101546001600160801b03166117c8565b8e5b600161238e565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061182757507f00000000000000000000000000000000000000000000000000000000000000006118258583613854565b105b1561183457611834611444565b6004549084900390600f0b61184984826136b6565b90508361185586611377565b13801561188a57507f00000000000000000000000000000000000000000000000000000000000000006118888383612682565b105b1561189757611897611444565b600354600160801b90046001600160801b03166118d9611147826118c3670de0b6b3a7640000886138c4565b6005546001600160801b031691908c600061242d565b600580546001600160801b0319166001600160801b03929092169190911790556119038882613854565b905061190e81611a50565b600380546001600160801b03928316600160801b02921691909117905561193483611a50565b600280546001600160801b0319166001600160801b039290921691909117905561195d826124d7565b600480546001600160801b0319166001600160801b039290921691909117905561198687611a50565b600280546010906119a8908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006113717f0000000000000000000000000000000000000000000000000000000000000000836126a8565b6000611a0e828461393e565b6115de9084613854565b6002546004546000916105c5916001600160801b0390911690600f0b612682565b600061008182611a4a85888861258f565b906126bd565b60006001600160801b038211156113a157604051630f0af95160e11b815260040160405180910390fd5b6000818311611a8957826115de565b50919050565b6006546000908190611ab2908490600160801b90046001600160801b03166115e5565b6006546201000090046001600160701b03169250905081811115611c2e576000611adc8383613854565b9050611aeb6111478286612732565b60068054601090611b0d908490600160801b90046001600160801b03166138db565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b46858361274790919063ffffffff16565b90506000611b74827f00000000000000000000000000000000000000000000000000000000000000006115e5565b90508060096000828254611b8891906136a3565b90915550611b9890508183613854565b9150611ba382611a50565b60028054600090611bbe9084906001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611beb8261275c565b60048054600090611c00908490600f0b6138fb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c408785612747565b91506000611c6e837f00000000000000000000000000000000000000000000000000000000000000006115e5565b9050611c9a817f00000000000000000000000000000000000000000000000000000000000000006115e5565b91508315611cbd57611cac8282613854565b611cb69084613854565b9250611cd4565b611cc78282613854565b611cd190846136a3565b92505b86861015611cf757611ce783878961258f565b9250611cf482878961258f565b91505b509550959350505050565b600080611d1a84611d148a888a61258f565b90612747565b9050611d2788848661258f565b611d3190826136a3565b905086811115611d415786810391505b509695505050505050565b60006001600160701b038211156113a15760405163086b151760e11b815260040160405180910390fd5b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611dc1916001600160801b031690613854565b905080600003611dd5576001915050611371565b6000611de085612786565b905080600003611df557600192505050611371565b600080611e03838589612822565b9150915080611e19576000945050505050611371565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e559291906139d0565b6040805180830381865af4158015611e71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e959190613a46565b91509150611eb3611ea582611377565b611eae90613a6a565b61299d565b925082611ec95760009650505050505050611371565b611ed282611a50565b60078054600090611eed9084906001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f1a81611a50565b60078054601090611f3c908490600160801b90046001600160801b0316613887565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f9987612b35565b6040518263ffffffff1660e01b8152600401611fb59190613a86565b6040805180830381865af4158015611fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff59190613a95565b915091508061200b575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691612071916136a3565b61207b9190613854565b90508060000361209357506000958695509350505050565b60008087116120a35760006120ae565b6120ae84888461258f565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156120e2576120e2613ac5565b6040519080825280601f01601f19166020018201604052801561210c576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561212d578692505b828152826000602083013e90999098509650505050505050565b6000806121526105ca565b905080831161216257600061216c565b61216c8184613854565b91506115de827f0000000000000000000000000000000000000000000000000000000000000000612747565b600080806121b96121b188670de0b6b3a7640000613854565b899087612c6f565b905086156121fb576121cb888861257a565b91506121ec8a8a846121e58a670de0b6b3a7640000613854565b8989612c95565b92506121f883826136a3565b90505b9750975097945050505050565b600061222661221f84670de0b6b3a7640000613854565b839061257a565b6115de90670de0b6b3a7640000613854565b60008061226f85612247611a18565b61225191906136a3565b600254610ff2908790600160801b90046001600160801b0316613854565b909210949350505050565b60008080806122d187866122ca8b6122c461229d8c670de0b6b3a7640000613854565b7f00000000000000000000000000000000000000000000000000000000000000009061257a565b9061257a565b9190612c6f565b93506122fd847f00000000000000000000000000000000000000000000000000000000000000006115e5565b9150600061231e61231689670de0b6b3a7640000613854565b8a9088612c6f565b905061234a817f000000000000000000000000000000000000000000000000000000000000000061257a565b9350612376847f00000000000000000000000000000000000000000000000000000000000000006115e5565b61238090846136a3565b915050945094509450949050565b600080600080600080888810156123fd5786156123b3576123b08d898b61258f565b9c505b6123be8c898b61258f565b9b506123c98b611377565b6123d28d611377565b6123dc91906136b6565b90506123e98b898b61258f565b9a506123f68a898b61258f565b995061241c565b6124068b611377565b61240f8d611377565b61241991906136b6565b90505b9b9c9a9b999a975050505050505050565b60008260000361243e5750846124ce565b81156124915761246f61245184876136a3565b61245b85876115e5565b612465888a6115e5565b611d1491906136a3565b9050600061247d8588611a7a565b90508082101561248b578091505b506124ce565b8285036124a0575060006124ce565b6124cb6124ad8487613854565b6124b7858761257a565b6124c1888a6115e5565b611d149190613854565b90505b95945050505050565b600060016001607f1b03198212806124f5575060016001607f1b0382135b156113a15760405163a5353be560e01b815260040160405180910390fd5b600080612521846000612cb8565b61252c846000612cb8565b61253691906136b6565b905060008113156125525761254b81866136a3565b9450612571565b60008112156125715761256481613a6a565b61256e9086613854565b94505b50929392505050565b60006115de8383670de0b6b3a7640000612c6f565b60008260001904841183021582026125a657600080fd5b5091020490565b60006113717f000000000000000000000000000000000000000000000000000000000000000083612cce565b600060405163350b944160e11b815260040160405180910390fd5b6126286001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612ce3565b50505050565b6000808061264f61264788670de0b6b3a7640000613854565b89908761258f565b905086156121fb5761266188886115e5565b91506121ec8a8a8461267b8a670de0b6b3a7640000613854565b8989612d3a565b60008061268f8484612d4b565b9092509050806126a1576126a1611444565b5092915050565b60006115de6126b684612d8a565b83906115e5565b6000816000036126d65750670de0b6b3a7640000611371565b826000036126e657506000611371565b60006126f183611377565b9050600061270661270186611377565b612dfe565b905081810261271d670de0b6b3a764000082613adb565b905061272881613024565b9695505050505050565b60006115de83670de0b6b3a764000084612c6f565b60006115de83670de0b6b3a76400008461258f565b600060016001607f1b038211156113a15760405163a5353be560e01b815260040160405180910390fd5b60035460009081906127a1906001600160801b031684612732565b90506127cd7f0000000000000000000000000000000000000000000000000000000000000000826136a3565b6002546001600160801b03161115611a89576002547f0000000000000000000000000000000000000000000000000000000000000000906128189083906001600160801b0316613854565b6115de9190613854565b61282a61357b565b60008061283684612b35565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128719190613a86565b6040805180830381865af415801561288d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128b19190613a95565b93509050826128c65750600091506129959050565b60006128ed6128e88461016001518561014001516115e590919063ffffffff16565b611377565b61290d6128e885610120015186610100015161257a90919063ffffffff16565b61291791906136b6565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7a9190613b09565b935093509350935080612a965750600098975050505050505050565b868414612ac757612aa684611a50565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612af857612ad7836124d7565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b2657612b0882611a50565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b3d6135cd565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c3591166131b9565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612c67929004166131b9565b905292915050565b6000826000190484118302158202612c8657600080fd5b50910281810615159190040190565b600080612ca6888888888888613228565b909250905080611d4157611d41611444565b6000818313612cc757816115de565b5090919050565b60006115de612cdc84612d8a565b8390612747565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612d35908490613309565b505050565b600080612ca6888888888888613371565b600080600083612d5a86611377565b612d6491906136b6565b90506000811215612d7c576000809250925050612d83565b9150600190505b9250929050565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015612dcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612def9190613b5e565b5050509150506115de81613431565b6000808213612e205760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ea39084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361303f57506000919050565b680755bf798b4a1bf1e58212613068576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061272874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b600080670de0b6b3a76400006131cd6105ca565b6131d791906138c4565b90508083116131e75760006131f1565b6131f18184613854565b91506115de612cdc670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138c4565b600080600061323a8989888888613454565b9050868810156132515760008092509250506132fe565b968690039661326088876126bd565b9750878110156132775760008092509250506132fe565b878103613285818688612c6f565b9050670de0b6b3a764000081106132b9576132b26132ab670de0b6b3a764000089612732565b82906126bd565b90506132d1565b6132ce6132ab670de0b6b3a764000089612747565b90505b6132db8186612732565b9050898110156132f3576000809350935050506132fe565b899003925060019150505b965096945050505050565b600061331e6001600160a01b03841683613483565b905080516000141580156133435750808060200190518101906133419190613bae565b155b15612d3557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060006133838989888888613454565b905061339386611a4a898b6136a3565b9750878110156133aa5760008092509250506132fe565b8781036133b8818688612c6f565b9050670de0b6b3a764000081106133e5576133de6132ab670de0b6b3a764000089612732565b90506133fd565b6133fa6132ab670de0b6b3a764000089612747565b90505b6134078186612732565b9050808a101561341f576000809350935050506132fe565b90980398600198509650505050505050565b6000808212156113a15760405163071d137160e51b815260040160405180910390fd5b600061346085856126bd565b61347961347186611a4a868b61257a565b859085612c6f565b6124cb91906136a3565b60606115de8383600084600080856001600160a01b031684866040516134a99190613bcb565b60006040518083038185875af1925050503d80600081146134e6576040519150601f19603f3d011682016040523d82523d6000602084013e6134eb565b606091505b509150915061272886838360608261350b5761350682613552565b6115de565b815115801561352257506001600160a01b0384163b155b1561354b57604051639996b31560e01b81526001600160a01b0385166004820152602401613368565b50806115de565b8051156135625780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061358f6135cd565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561364457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561367057600080fd5b85016060818803121561368257600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156113715761137161368d565b81810360008312801583831316838312821617156126a1576126a161368d565b6001600160a01b03811681146105af57600080fd5b6000602082840312156136fd57600080fd5b81356115de816136d6565b80151581146105af57600080fd5b60006020828403121561372857600080fd5b81356115de81613708565b6000808335601e1984360301811261374a57600080fd5b83018035915067ffffffffffffffff82111561376557600080fd5b602001915036819003821315612d8357600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006137dd60e08301848661377a565b9a9950505050505050505050565b808201828112600083128015821682158216171561380b5761380b61368d565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061384760c08301848661377a565b9998505050505050505050565b818103818111156113715761137161368d565b6001600160701b038181168382160190808211156126a1576126a161368d565b6001600160801b038181168382160190808211156126a1576126a161368d565b6000602082840312156138b957600080fd5b81516115de816136d6565b80820281158282048414176113715761137161368d565b6001600160801b038281168282160390808211156126a1576126a161368d565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113715761137161368d565b634e487b7160e01b600052601260045260246000fd5b60008261394d5761394d613928565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139e4828551613952565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a5957600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a7f57613a7f61368d565b5060000390565b61018081016113718284613952565b60008060408385031215613aa857600080fd5b825191506020830151613aba81613708565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613aea57613aea613928565b600160ff1b821460001984141615613b0457613b0461368d565b500590565b60008060008060808587031215613b1f57600080fd5b845193506020850151925060408501519150606085015161368281613708565b805169ffffffffffffffffffff81168114613b5957600080fd5b919050565b600080600080600060a08688031215613b7657600080fd5b613b7f86613b3f565b9450602086015193506040860151925060608601519150613ba260808701613b3f565b90509295509295909350565b600060208284031215613bc057600080fd5b81516115de81613708565b6000825160005b81811015613bec5760208186018101518583015201613bd2565b50600092019182525091905056fea26469706673582212202c0cbcdae3060bf2cc057d81b2ad34bf49ea5dc612eacc20826cfd1d3012c6ea64736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
