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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "fees",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
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
            "name": "FeeCollectorUpdated",
            "inputs": [
                {
                    "name": "newFeeCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernanceUpdated",
            "inputs": [
                {
                    "name": "newGovernance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
            "name": "PauserUpdated",
            "inputs": [
                {
                    "name": "newPauser",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "status",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
            "name": "SweepCollectorUpdated",
            "inputs": [
                {
                    "name": "newSweepCollector",
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
            "name": "InvalidPresentValue",
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004b4f38038062004b4f8339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516147356200041a600039600050506000505060008181610134015281816102a80152611c5101526000818161103f015281816110a201528181611c2b01528181612386015281816123c2015261262b015260008181610ea901528181610ef90152611c050152600061164901526000818161176f01528181611ef00152611f69015260008181610771015281816117430152611f3d01526000611eb6015260008181610e8701528181610f1a0152611c770152600081816106ac01528181610fa201528181611dc5015261277c015260008181610552015281816105df0152610644015260008181603d015281816114ea015281816121b70152818161220701526122f80152600050506147356000f3fe60806040526004361061002d5760003560e01c8063cbc1343414610082578063ded06231146100bc57600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b34801561008e57600080fd5b506100a261009d366004614393565b6100ea565b604080519283526020830191909152015b60405180910390f35b3480156100c857600080fd5b506100dc6100d73660046143e3565b610105565b6040519081526020016100b3565b6000806100f885858561011e565b915091505b935093915050565b600061011385858585610293565b90505b949350505050565b6000806101296104d0565b610132836104fa565b7f00000000000000000000000000000000000000000000000000000000000000008510156101735760405163211ddda360e11b815260040160405180910390fd5b600061017d610533565b905061019261018a61054b565b826004610581565b5061019f60003388610a16565b6101ba600360f81b6101b4602087018761443d565b88610af0565b60006101d56101cc602087018761443d565b88848989610b90565b90945090506101e4818861447c565b925060006101f183610cd3565b509050610201602087018761443d565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a61023889888c610dc3565b6102438a898d610df2565b61025360408d0160208e0161449d565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506100fd6001600055565b600061029d6104d0565b6102a6826104fa565b7f00000000000000000000000000000000000000000000000000000000000000008410156102e75760405163211ddda360e11b815260040160405180910390fd5b60006102f1610533565b90508542101561030c5761030661018a61054b565b5061031a565b61031886826004610581565b505b61032f610328600188610e1a565b3387610a16565b60008060008060006103428a878d610e4f565b9450945094509450945060008b90508b4210156103d95781600b600082825461036b91906144ba565b9091555061037e90508b87868685611028565b60006103898261121e565b90506103a76103978d611268565b6103a190836144cd565b82611296565b60006103b289611349565b9050806103d257604051638bdf918d60e01b815260040160405180910390fd5b50506103f0565b6103e38588611356565b94506103ee87611349565b505b60006103fd86898c611437565b90508a8110156104205760405163c972651760e01b815260040160405180910390fd5b8b888b61042e600186610e1a565b61043b602083018361443d565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610472898888610dc3565b61047d8a8989610df2565b61048d6040890160208a0161449d565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506101166001600055565b6002600054036104f357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610509602083018361443d565b6001600160a01b0316036105305760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610546670de0b6b3a76400006114d1565b905090565b60006105777f00000000000000000000000000000000000000000000000000000000000000004261450b565b610546904261447c565b600083815260076020526040812080546001600160801b03161515806105a657504285115b156105bc57546001600160801b03169050610a0f565b6000806105c761054b565b90508087036105d857859150610672565b60006106047f0000000000000000000000000000000000000000000000000000000000000000896144ba565b90505b6000818152600760205260409020546001600160801b03169250818114801561062e575082155b15610637578692505b82600003610670576106697f0000000000000000000000000000000000000000000000000000000000000000826144ba565b9050610607565b505b61067b8261155e565b83546001600160801b0319166001600160801b039190911617835561069f86611588565b50600090506007816106d17f00000000000000000000000000000000000000000000000000000000000000008b61447c565b815260208101919091526040016000908120546001600160801b031691506106fa60028a610e1a565b6000818152600e60205260408120549192508a8a8315610840576001925060008061072986898c86600061172c565b9150915080600b600082825461073f91906144ba565b9091555061075b90508660008461075581611268565b886117fb565b61076581836144ba565b915061079586838a8d877f0000000000000000000000000000000000000000000000000000000000000000611975565b91506107a96107a483856119bf565b6119d4565b600580546002906107ca9084906201000090046001600160701b031661451f565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107f78261155e565b60058054601090610819908490600160801b90046001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061084d600184610e1a565b6000818152600e6020526040902054909150801561095c576001945060008061087a838b8e88600161172c565b9150915080600b600082825461089091906144ba565b909155506108ac9050836000846108a681611268565b8a611028565b6108b6818361447c565b91506108c56107a483876119bf565b600580546002906108e69084906201000090046001600160701b031661451f565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109138261155e565b60058054601090610935908490600160801b90046001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109945761098861096e87611268565b61097783611268565b610981919061455f565b6000611296565b6109928e8e6119fe565b505b600061099f8f610cd3565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a86866040516109f8959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610a5957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a9c90849061447c565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610b229084906144ba565b90915550506000838152600e602052604081208054839290610b459084906144ba565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610ae3565b600080610b9c85611349565b505060065485906001600160801b031680821115610bc157806001600160801b031691505b81600003610bd6576000809250925050610cc9565b610be5600360f81b8984610a16565b600654600090610c0b9084906001600160801b03600160801b9091048116908516611b89565b9050610c168361155e565b610c20908361457f565b600680546001600160801b0319166001600160801b0392909216919091179055610c498161155e565b60068054601090610c6b908490600160801b90046001600160801b031661457f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c9a818887611437565b9350610ca68684611ba7565b841015610cc65760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610cea610ce586611bbc565b611cf6565b9150915080610d00575060009485945092505050565b6000808611610d10576000610d1a565b610d1a83876119bf565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d8591906144ba565b610d8f919061447c565b905080600003610da85750600096879650945050505050565b6000610db48383611d83565b98600198509650505050505050565b6000610dd5604083016020840161449d565b15610de1575082610a0f565b610deb84846119bf565b9050610a0f565b6000610e04604083016020840161449d565b15610e1357610deb8484611d83565b5082610a0f565b60006001600160f81b03821115610e445760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e6388611d98565b9050610ecd610e70611de9565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611e0a565b909850965091506000808080610f3e610ee4611de9565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e7a565b90508c610f4d8f878484611e91565b9a509196509094509250610f61848661447c565b610f6b908861447c565b9650610f7783866144ba565b610f81908c61447c565b9a50610f8d888c6144ba565b995050505050505061101385858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610fcc919061447c565b81526020810191909152604001600020546001600160801b0316428d1161100a5760008d8152600760205260409020546001600160801b031661100c565b8d5b6001611fa5565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061106a57507f0000000000000000000000000000000000000000000000000000000000000000611068858361447c565b105b1561107757611077612044565b6003549084900390600f0b61108c848261455f565b90508361109886611268565b1380156110cd57507f00000000000000000000000000000000000000000000000000000000000000006110cb838361205d565b105b156110da576110da612044565b600254600160801b90046001600160801b031661112161111c82611106670de0b6b3a76400008861459f565b6004546001600160801b031691908c6000612083565b61155e565b600480546001600160801b0319166001600160801b039290921691909117905561114b888261447c565b90506111568161155e565b600280546001600160801b03928316600160801b02921691909117905561117c8361155e565b600180546001600160801b0319166001600160801b03929092169190911790556111a58261214c565b600380546001600160801b0319166001600160801b03929092169190911790556111ce8761155e565b600180546010906111f0908490600160801b90046001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611246600e6000611232600286610e1a565b815260200190815260200160002054611268565b611258600e6000611232600187610e1a565b611262919061455f565b92915050565b60006001600160ff1b038211156112925760405163396ea70160e11b815260040160405180910390fd5b5090565b60006112bf6112a58483612188565b6112b0846000612188565b6112ba919061455f565b61214c565b9050600081600f0b131561131457600280548291906000906112eb9084906001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561134457611329816145b6565b600280546000906112eb9084906001600160801b031661457f565b505050565b60006112628260046119fe565b600080600061136484611588565b9092509050600061137586866119bf565b90508183111561138d5761138a868385611b89565b95505b8281101561139f5780830392506113a4565b600092505b6113ad836119d4565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561140057869003611404565b5060005b61140d8161155e565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061144485856119bf565b905061144f8161219e565b945084600003611463576000915050610a0f565b611473604084016020850161449d565b156114a25761149b85611489602086018661443d565b61149660408701876145dc565b6121ee565b91506114c9565b6114c5856114b3602086018661443d565b6114c060408701876145dc565b6122eb565b8491505b509392505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa15801561153a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112629190614623565b60006001600160801b0382111561129257604051630f0af95160e11b815260040160405180910390fd5b60055460009081906115ab908490600160801b90046001600160801b03166119bf565b6005546201000090046001600160701b031692509050818111156117275760006115d5838361447c565b90506115e461111c8286612325565b60058054601090611606908490600160801b90046001600160801b031661457f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061163f8583611d8390919063ffffffff16565b9050600061166d827f00000000000000000000000000000000000000000000000000000000000000006119bf565b905080600b600082825461168191906144ba565b909155506116919050818361447c565b915061169c8261155e565b600180546000906116b79084906001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116e48261233a565b600380546000906116f9908490600f0b61463c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117398785611d83565b91506000611767837f00000000000000000000000000000000000000000000000000000000000000006119bf565b9050611793817f00000000000000000000000000000000000000000000000000000000000000006119bf565b915083156117b6576117a5828261447c565b6117af908461447c565b92506117cd565b6117c0828261447c565b6117ca90846144ba565b92505b868610156117f0576117e0838789611b89565b92506117ed828789611b89565b91505b509550959350505050565b600354600160801b90046001600160801b031661184461111c82611827670de0b6b3a76400008661459f565b600454600160801b90046001600160801b031691908a6000612083565b600480546001600160801b03928316600160801b02921691909117905561186a8661155e565b611874908261457f565b600380546001600160801b03928316600160801b02921691909117905561189a8461155e565b600180546000906118b59084906001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118e28361214c565b600380546000906118f7908490600f0b61463c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506119278561155e565b60018054601090611949908490600160801b90046001600160801b031661457f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061198d846119878a888a611b89565b90611d83565b905061199a888486611b89565b6119a490826144ba565b9050868111156119b45786810391505b509695505050505050565b6000610a0f8383670de0b6b3a7640000611b89565b60006001600160701b038211156112925760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611a49916001600160801b03169061447c565b905080600003611a5d576001915050611262565b6000611a6885612364565b905080600003611a7d57600192505050611262565b600080611a8b838589612406565b9150915080611aa1576000945050505050611262565b600080611aae848961250c565b91509150611acc611abe82611268565b611ac790614669565b6125fe565b925082611ae25760009650505050505050611262565b611aeb8261155e565b60068054600090611b069084906001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b338161155e565b60068054601090611b55908490600160801b90046001600160801b031661453f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611ba057600080fd5b5091020490565b6000610a0f8383670de0b6b3a764000061270b565b611bc46142ce565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611cbc9116612731565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611cee92900416612731565b905292915050565b6000806000806000611d07866127a7565b9150915080611d1e57506000958695509350505050565b611d2b8660a00151611268565b611d3487612ac7565b83611d428960000151611268565b611d4c91906144cd565b611d5691906144cd565b611d60919061455f565b925050506000811215611d795750600093849350915050565b9360019350915050565b6000610a0f83670de0b6b3a764000084611b89565b600080611da361054b565b9050808311611db3576000611dbd565b611dbd818461447c565b9150610a0f827f0000000000000000000000000000000000000000000000000000000000000000611d83565b600154600354600091610546916001600160801b0390911690600f0b61205d565b60008080611e2b611e2388670de0b6b3a764000061447c565b899087611b89565b90508615611e6d57611e3d88886119bf565b9150611e5e8a8a84611e578a670de0b6b3a764000061447c565b8989612b2b565b9250611e6a83826144ba565b90505b9750975097945050505050565b600061011382611e8b858888611b89565b90612b4e565b6000808080611ee88786611ee18b611edb611eb48c670de0b6b3a764000061447c565b7f000000000000000000000000000000000000000000000000000000000000000090611ba7565b90611ba7565b919061270b565b9350611f14847f00000000000000000000000000000000000000000000000000000000000000006119bf565b91506000611f35611f2d89670de0b6b3a764000061447c565b8a908861270b565b9050611f61817f0000000000000000000000000000000000000000000000000000000000000000611ba7565b9350611f8d847f00000000000000000000000000000000000000000000000000000000000000006119bf565b611f9790846144ba565b915050945094509450949050565b60008060008060008088881015612014578615611fca57611fc78d898b611b89565b9c505b611fd58c898b611b89565b9b50611fe08b611268565b611fe98d611268565b611ff3919061455f565b90506120008b898b611b89565b9a5061200d8a898b611b89565b9950612033565b61201d8b611268565b6120268d611268565b612030919061455f565b90505b9b9c9a9b999a975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061206a8484612bc3565b90925090508061207c5761207c612044565b5092915050565b600082600003612094575084612143565b8115612106576120c56120a784876144ba565b6120b185876119bf565b6120bb888a6119bf565b61198791906144ba565b905060006120d38588612bff565b905060006120e18689612c0e565b9050818310156120f3578192506120ff565b808311156120ff578092505b5050612143565b82850361211557506000612143565b612140612122848761447c565b61212c8587611ba7565b612136888a6119bf565b611987919061447c565b90505b95945050505050565b600060016001607f1b031982128061216a575060016001607f1b0382135b156112925760405163a5353be560e01b815260040160405180910390fd5b60008183136121975781610a0f565b5090919050565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e9060240161151d565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b15801561225357600080fd5b505af1158015612267573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d80600081146122bb576040519150601f19603f3d011682016040523d82523d6000602084013e6122c0565b606091505b50509050806122e2576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b61231f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612c1d565b50505050565b6000610a0f83670de0b6b3a76400008461270b565b600060016001607f1b038211156112925760405163a5353be560e01b815260040160405180910390fd5b600254600090819061237f906001600160801b031684612325565b90506123ab7f0000000000000000000000000000000000000000000000000000000000000000826144ba565b6001546001600160801b03161115612400576001547f0000000000000000000000000000000000000000000000000000000000000000906123f69083906001600160801b031661447c565b610a0f919061447c565b50919050565b61240e61432f565b60008061241a84611bbc565b9050600061242782611cf6565b935090508261243c5750600091506100fd9050565b600061246361245e8461016001518561014001516119bf90919063ffffffff16565b611268565b61248361245e856101200151866101000151611ba790919063ffffffff16565b61248d919061455f565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806125248660c001518760e00151612bc3565b915091508061253b576000809350935050506125f7565b60006125478784612c6f565b92509050811580612556575080155b1561256a57600080945094505050506125f7565b60006125768883612d7e565b9050806000036125905760008095509550505050506125f7565b876060015181116125a757945092506125f7915050565b50606087015160006125bb8986858b612e4f565b9050806000036125d6576000809650965050505050506125f7565b8281106125ee576000809650965050505050506125f7565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806126508787877f00000000000000000000000000000000000000000000000000000000000000008d613364565b93509350935093508061266c5750600098975050505050505050565b86841461269d5761267c8461155e565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146126ce576126ad8361214c565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146126fc576126de8261155e565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600082600019048411830215820261272257600080fd5b50910281810615159190040190565b600080670de0b6b3a764000061274561054b565b61274f919061459f565b905080831161275f576000612769565b612769818461447c565b9150610a0f6127a0670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061459f565b8390611d83565b60008060006127cc61245e8561016001518661014001516119bf90919063ffffffff16565b6127ec61245e866101200151876101000151611ba790919063ffffffff16565b6127f6919061455f565b905060008061280d86600001518760200151612bc3565b915091508061282457506000958695509350505050565b60008313156129655760008390506000612872886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612863919061447c565b8d606001518e6080015161347c565b935090508261288b575060009788975095505050505050565b8181106129295760006128c5858a60400151858c60e00151670de0b6b3a76400006128b6919061447c565b8d606001518e60800151613588565b94509050831580156128da57508860c0015183105b156128f15750600098600198509650505050505050565b8361290757506000988998509650505050505050565b61291081611268565b61291990614669565b9960019950975050505050505050565b6000886020015112612951576129488860a001518561245e919061447c565b610db490614669565b60a088015188516129489161245e9161447c565b6000831215612ab857600061297984614669565b905060006129ad8489604001518a60e00151670de0b6b3a764000061299e919061447c565b8b606001518c6080015161364b565b93509050826129c6575060009788975095505050505050565b818110612a4b576000612a00858a60400151858c60e00151670de0b6b3a76400006129f1919061447c565b8d606001518e608001516136f4565b9450905083158015612a1557508860c0015183105b15612a2c5750600098600198509650505050505050565b83612a4257506000988998509650505050505050565b61291981611268565b6000612a7d858a604001518b60e00151670de0b6b3a7640000612a6e919061447c565b8c606001518d608001516137cb565b9450905083612a9757506000988998509650505050505050565b612919612aae8a606001518486611987919061447c565b61245e90836144ba565b50600095600195509350505050565b6000612afa61245e836101200151670de0b6b3a7640000612ae8919061447c565b6060850151610100860151919061270b565b61125861245e846101600151670de0b6b3a7640000612b19919061447c565b60608601516101408701519190611b89565b600080612b3c888888888888613588565b9092509050806119b4576119b4612044565b600081600003612b675750670de0b6b3a7640000611262565b82600003612b7757506000611262565b6000612b8283611268565b90506000612b97612b9286611268565b61387a565b9050818102612bae670de0b6b3a764000082614685565b9050612bb981613aa0565b9695505050505050565b600080600083612bd286611268565b612bdc919061455f565b90506000811215612bf45760008092509250506125f7565b946001945092505050565b60008183116124005782610a0f565b60008183116121975781610a0f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611344908490613c35565b60008060008460a0015112612c8c575050608082015160016125f7565b60008460a00151612c9c90614669565b90506000612cd885876101000151886000015160e00151670de0b6b3a7640000612cc6919061447c565b8951606081015160809091015161364b565b93509050821580612ce7575080155b15612cfa576000809350935050506125f7565b6000612d068383612325565b9050670de0b6b3a76400008111612d425780670de0b6b3a7640000039450612d3b8760c00151866119bf90919063ffffffff16565b9450612d51565b600080945094505050506125f7565b8660800151851115612d705786608001516001945094505050506125f7565b506001925050509250929050565b600080612db48460c001518560e00151866101000151876000015160a00151612da688611268565b612daf90614669565b613364565b87516040810192909252602082019290925291909152905080612ddb576000915050611262565b6000612dea8560000151611cf6565b9250905081612dfe57600092505050611262565b84602001518110612e1457600092505050611262565b600085606001518660400151612e2a91906144ba565b9050612e4582876020015183611b899092919063ffffffff16565b612bb9908261447c565b60008085606001518660400151612e6691906144ba565b60208701516060880151919250600091612e809184611b89565b90508660a00151600003612e975791506101169050565b60008080896004881015612eaa57600497505b60005b8881101561320657612ebf868b612bff565b95506000612ee88360c001518460e00151856101000151866000015160a00151612da68c611268565b86516040810192909252602082019290925291909152905080612f1657600098505050505050505050610116565b6000612f258e60000151611cf6565b9250905081612f405760009950505050505050505050610116565b612f4b84828b613c9d565b15612f6157879950505050505050505050610116565b60008460a0015113156130ca57835180516020820151604083015160a084015160e090940151600094612fb594939291612fa390670de0b6b3a764000061447c565b8a51606081015160809091015161347c565b9350905082612fd15760009a5050505050505050505050610116565b808560a00151106130c857612fe585613d09565b9099509250826130025760009a5050505050505050505050610116565b6130278560c001518660e00151876101000151886000015160a00151612da68e611268565b885160408101929092526020820192909252919091529250826130575760009a5050505050505050505050610116565b845180516020820151604083015160a084015160e0909401516130879490612fa390670de0b6b3a764000061447c565b93509050826130a35760009a5050505050505050505050610116565b8e60a0015181116130c057889a5050505050505050505050610116565b505050612ead565b505b60006130db858f8760a00151613ddf565b935090508215806130f45750670de0b6b3a76400008110155b1561310c5760009a5050505050505050505050610116565b80670de0b6b3a7640000039050600061313961245e87604001518860200151611ba790919063ffffffff16565b61314661245e858e6119bf565b613150919061455f565b905088158061316e57506131638961413a565b61316c8261413a565b125b1561317d578098508997508296505b60008113156131a5576131948b6119878385611d83565b61319e908b6144ba565b99506131f7565b60008112156131ee5760006131bf8c611987858186614669565b90508a8110156131d357808b039a506131e8565b60009c50505050505050505050505050610116565b506131f7565b50505050613206565b84600101945050505050612ead565b50600061322e8260c001518360e00151846101000151856000015160a00151612da68b611268565b8551604081019290925260208201929092529190915290508061325b576000975050505050505050610116565b600061326a8360000151614152565b9050600061328c61245e85604001518660200151611ba790919063ffffffff16565b61329961245e848c6119bf565b6132a3919061455f565b90506132ae8761413a565b6132b78261413a565b12156132c4578795508194505b6132eb6132df655af3107a4000670de0b6b3a764000061447c565b6020860151908b61270b565b60408501516132fb908790611d83565b108061333b575061332961331d655af3107a4000670de0b6b3a76400006144ba565b6020860151908b611b89565b6040850151613339908790612325565b115b156133525760009950505050505050505050610116565b50939c9b505050505050505050505050565b6000806000808460000361338357508792508691508590506001613470565b60008561338f8b611268565b61339991906144cd565b90506133a487611268565b8112156133bf57600080600080945094509450945050613470565b809450600089126133df576133d861245e868b8d611b89565b9350613402565b6133f661245e6133ee8b614669565b87908d61270b565b6133ff90614669565b93505b60008061340f8c8c612bc3565b915091508061342e576000806000809650965096509650505050613470565b600061343a8888612bc3565b925090508161345a57600080600080975097509750975050505050613470565b6134658b8285611b89565b955060019450505050505b95509550955095915050565b600080600088121561349e5761349188614669565b61349b90876144ba565b95505b6000806134ab8b8b612bc3565b91509150806134c25760008093509350505061357c565b60006134d1838b8a8a8a614182565b905060006134ee6134e68a611e8b8a8e611ba7565b89908961270b565b90508082101561350857600080955095505050505061357c565b808203670de0b6b3a7640000811061353d5761353661352f670de0b6b3a76400008c611d83565b8290612b4e565b9050613555565b61355261352f670de0b6b3a76400008c612325565b90505b8b81101561356e5760008096509650505050505061357c565b8b9003955060019450505050505b97509795505050505050565b600080600061359a89898888886141b1565b90506135aa86611e8b898b6144ba565b9750878110156135c1576000809250925050613640565b8781036135cf81868861270b565b9050670de0b6b3a764000081106135fc576135f561352f670de0b6b3a764000089612325565b9050613614565b61361161352f670de0b6b3a764000089611d83565b90505b61361e8186612325565b9050808a101561363657600080935093505050613640565b8903925060019150505b965096945050505050565b600080600061365d88888888886141b1565b90506000613688670de0b6b3a76400006136778888611d83565b61368191906144ba565b8390612325565b9050670de0b6b3a764000081106136b5576136ae61352f670de0b6b3a764000089612325565b90506136cd565b6136ca61352f670de0b6b3a764000089611d83565b90505b808810156136e357600080935093505050610cc9565b909603976001975095505050505050565b600080600061370689898888886141b1565b90508688101561371d576000809250925050613640565b968690039661372c8887612b4e565b975087811015613743576000809250925050613640565b87810361375181868861270b565b9050670de0b6b3a7640000811061377e5761377761352f670de0b6b3a764000089612325565b9050613796565b61379361352f670de0b6b3a764000089611d83565b90505b6137a08186612325565b9050898110156137b857600080935093505050613640565b9890980398600198509650505050505050565b60008060006137dd8888888888614182565b90506000613801670de0b6b3a76400006137f78888612325565b6127a091906144ba565b9050670de0b6b3a7640000811061382e5761382761352f670de0b6b3a764000089611d83565b9050613846565b61384361352f670de0b6b3a764000089612325565b90505b6138508186611d83565b90508881101561386857600080935093505050610cc9565b97909703976001975095505050505050565b600080821361389c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061391f9084901c611268565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613abb57506000919050565b680755bf798b4a1bf1e58212613ae4576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612bb974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611268565b6000613c4a6001600160a01b038416836141d6565b90508051600014158015613c6f575080806020019051810190613c6d91906146b3565b155b1561134457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6020830151600090613caf9084612325565b6040850151613cbf908490611d83565b1015801561011657506020840151613cef9084613ce8633b9aca00670de0b6b3a76400006144ba565b9190611b89565b6040850151613cff908490612325565b1115949350505050565b60008060008360e0015113613d2357506000928392509050565b6000613d328460000151612ac7565b90506000613d5e856040015186606001518760400151613d5291906144ba565b6020880151919061270b565b905060008212613d855780821015613d7857819003613d9b565b5060009485945092505050565b613d8e82614669565b613d9890826144ba565b90505b60e085015160c0860151613db091839061270b565b9050808560c001511015613dcb575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613e0357855160400151613dfc9085906144ba565b9050613e3e565b6000613e0e85614669565b875160400151909150811015613e2e578651604001518190039150613e3c565b6000809350935050506100fd565b505b855180516020909101516000918291613e579190612bc3565b9150915080613e6f57600080945094505050506100fd565b875160e0810151604090910151600091613ea491613e9891613e919190612b4e565b8a906119bf565b6101008b015190612325565b895160e0810151608090910151613ecf91613ec391611e8b90886119bf565b8b516060015190612325565b613ed991906144ba565b90506000613f11613f05613efe8c6000015160e0015188612b4e90919063ffffffff16565b8b90611ba7565b6101008c015190611d83565b905080821015613f2c576000809650965050505050506100fd565b80820391506000613f6e858c60000151604001518d6000015160e00151670de0b6b3a7640000613f5c919061447c565b8e5160608101516080909101516141b1565b90506000613f988c6000015160e00151670de0b6b3a7640000613f91919061447c565b8890612b4e565b905080821015613fb55760008098509850505050505050506100fd565b8b51608081015160609091015191830391613fd191839161270b565b9050670de0b6b3a76400008110614015578b5160e0015161400e9061352f9061400290670de0b6b3a764000061447c565b8e5160e0015190612325565b9050614044565b8b5160e001516140419061352f9061403590670de0b6b3a764000061447c565b8e5160e0015190611d83565b90505b8b5160600151614057908590839061270b565b935083670de0b6b3a7640000111561407b5783670de0b6b3a764000003935061408f565b6000600198509850505050505050506100fd565b60008c60e00151126140f25760c08c015160e08d01516140ae91612325565b9250670de0b6b3a76400008311156140d35760008098509850505050505050506100fd565b670de0b6b3a764000092909203916140eb84846119bf565b9350614127565b61412461410b8d60c001518e60e0015161198790614669565b61411d90670de0b6b3a76400006144ba565b85906119bf565b93505b50919a60019a5098505050505050505050565b60008082126141495781611262565b61126282614669565b600080600061416084611cf6565b915091508061207c57604051635516328b60e11b815260040160405180910390fd5b600061418e8585612b4e565b6141a761419f86611e8b868b6119bf565b859085611b89565b61214091906144ba565b60006141bd8585612b4e565b6141a76141ce86611e8b868b611ba7565b85908561270b565b6060610a0f8383600084600080856001600160a01b031684866040516141fc91906146d0565b60006040518083038185875af1925050503d8060008114614239576040519150601f19603f3d011682016040523d82523d6000602084013e61423e565b606091505b5091509150612bb986838360608261425e57614259826142a5565b610a0f565b815115801561427557506001600160a01b0384163b155b1561429e57604051639996b31560e01b81526001600160a01b0385166004820152602401613c94565b5080610a0f565b8051156142b55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806143436142ce565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561240057600080fd5b6000806000606084860312156143a857600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156143cd57600080fd5b6143d986828701614381565b9150509250925092565b600080600080608085870312156143f957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561442557600080fd5b61443187828801614381565b91505092959194509250565b60006020828403121561444f57600080fd5b81356001600160a01b0381168114610a0f57600080fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561126257611262614466565b801515811461053057600080fd5b6000602082840312156144af57600080fd5b8135610a0f8161448f565b8082018082111561126257611262614466565b80820182811260008312801582168215821617156144ed576144ed614466565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261451a5761451a6144f5565b500690565b6001600160701b0381811683821601908082111561207c5761207c614466565b6001600160801b0381811683821601908082111561207c5761207c614466565b818103600083128015838313168383128216171561207c5761207c614466565b6001600160801b0382811682821603908082111561207c5761207c614466565b808202811582820484141761126257611262614466565b600081600f0b60016001607f1b031981036145d3576145d3614466565b60000392915050565b6000808335601e198436030181126145f357600080fd5b83018035915067ffffffffffffffff82111561460e57600080fd5b6020019150368190038213156125f757600080fd5b60006020828403121561463557600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561126257611262614466565b6000600160ff1b820161467e5761467e614466565b5060000390565b600082614694576146946144f5565b600160ff1b8214600019841416156146ae576146ae614466565b500590565b6000602082840312156146c557600080fd5b8151610a0f8161448f565b6000825160005b818110156146f157602081860181015185830152016146d7565b50600092019182525091905056fea2646970667358221220fbf4817b9221285e77cd6d1f484c90387582d6abacbff29d1a2331c2a05d021e64736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
