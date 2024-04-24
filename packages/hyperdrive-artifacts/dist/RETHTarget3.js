export const RETHTarget3 = {
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
            "name": "BelowMinimumContribution",
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
            "name": "InvalidCheckpointTime",
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004bd938038062004bd98339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614795620004446000396000505060005050600081816104d6015261253f01526000818161024f015281816102a60152818161038d015281816114d801528181611514015281816117af01528181611d0701528181611d6a0152818161244401526125190152600081816102fc0152818161106e015281816110b6015281816111d601526124f301526000611950015260008181611a76015261230e015260008181610a97015281816111290152611a4a01526000818161110801526122ca01526000818161033f0152818161104c015281816110d7015281816111f7015261256501526000818161031e015281816105a2015281816109d201526134ca0152600081816101910152818161087801528181610905015261096a01526000818160480152818161144301526120ad0152600050506147956000f3fe6080604052600436106100385760003560e01c8063414f826d1461008d57806377d05ff4146100ad578063cba2e58d146100d357600080fd5b3661008857336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610086576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b34801561009957600080fd5b506100866100a83660046143bf565b6100fb565b6100c06100bb3660046143f3565b610109565b6040519081526020015b60405180910390f35b6100e66100e1366004614443565b610120565b604080519283526020830191909152016100ca565b610105828261013d565b5050565b60006101168484846101f9565b90505b9392505050565b60008061012f8686868661046f565b915091505b94509492505050565b6101456106a3565b600061014f6106cd565b6000848152600760205260409020549091506001600160801b0316156101805761017981836106e5565b50506101ef565b600061018a610871565b90506101b67f0000000000000000000000000000000000000000000000000000000000000000856144b3565b1515806101c257508381105b156101e05760405163ecd29e8160e01b815260040160405180910390fd5b6101eb8483856108a7565b5050505b6101056001600055565b60006102036106a3565b61020b610d3a565b61021482610d5b565b60055460ff161561023857604051637983c05160e01b815260040160405180910390fd5b6000806102458685610d94565b90925090506102757f000000000000000000000000000000000000000000000000000000000000000060026144dd565b82101561029557604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f000000000000000000000000000000000000000000000000000000000000000002820392506102d382610e6d565b600180546001600160801b0319166001600160801b0392909216919091179055610368610363837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e9b565b610e6d565b600180546001600160801b03928316600160801b0292169190911790556103b16000807f0000000000000000000000000000000000000000000000000000000000000000610f3a565b6103c960006103c360208701876144f4565b85610f3a565b6103dc6103d4610871565b8260046108a7565b5060006103ea878387610fe2565b90506103f960208601866144f4565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f95285838661043660408b0160208c0161452b565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a25050506101196001600055565b60008061047a6106a3565b600554610100900460ff16156104a3576040516321081abf60e01b815260040160405180910390fd5b6104ab610d3a565b6104b483610d5b565b6000806104c18886610d94565b909250905060006104d28383611011565b90507f00000000000000000000000000000000000000000000000000000000000000008110156105155760405163211ddda360e11b815260040160405180910390fd5b86821015610536576040516342af972b60e01b815260040160405180910390fd5b6000610540610871565b905061054e818460046108a7565b5060008061055c8686611026565b90985090925090508a8710156105855760405163c972651760e01b815260040160405180910390fd5b80600b60008282546105979190614548565b909155506105c790507f000000000000000000000000000000000000000000000000000000000000000084614548565b97506105d58288878b611233565b60006105e260018a6113cd565b90506105fb816105f560208d018d6144f4565b8a610f3a565b8c8989888d8561060e60208301836144f4565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c86610644898787610fe2565b61064f8a8888611402565b61065f604088016020890161452b565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506101346001600055565b6002600054036106c657604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006106e0670de0b6b3a764000061142a565b905090565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291610730916001600160801b03169061455b565b90508060000361074457600191505061086b565b600061074f856114b6565b9050806000036107645760019250505061086b565b60008061077283858961155b565b915091508061078857600094505050505061086b565b6000806107958489611668565b915091506107b36107a582611758565b6107ae9061456e565b611782565b9250826107c9576000965050505050505061086b565b6107d282610e6d565b600680546000906107ed9084906001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061081a81610e6d565b6006805460109061083c908490600160801b90046001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600061089d7f0000000000000000000000000000000000000000000000000000000000000000426144b3565b6106e0904261455b565b600083815260076020526040812080546001600160801b03161515806108cc57504285115b156108e257546001600160801b03169050610119565b6000806108ed610871565b90508087036108fe57859150610998565b600061092a7f000000000000000000000000000000000000000000000000000000000000000089614548565b90505b6000818152600760205260409020546001600160801b031692508181148015610954575082155b1561095d578692505b826000036109965761098f7f000000000000000000000000000000000000000000000000000000000000000082614548565b905061092d565b505b6109a182610e6d565b83546001600160801b0319166001600160801b03919091161783556109c58661188f565b50600090506007816109f77f00000000000000000000000000000000000000000000000000000000000000008b61455b565b815260208101919091526040016000908120546001600160801b03169150610a2060028a6113cd565b6000818152600e60205260408120549192508a8a8315610b665760019250600080610a4f86898c866000611a33565b9150915080600b6000828254610a659190614548565b90915550610a81905086600084610a7b81611758565b88611b02565b610a8b8183614548565b9150610abb86838a8d877f0000000000000000000000000000000000000000000000000000000000000000611c7c565b9150610acf610aca8385611011565b611cc6565b60058054600290610af09084906201000090046001600160701b03166145aa565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b1d82610e6d565b60058054601090610b3f908490600160801b90046001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b736001846113cd565b6000818152600e60205260409020549091508015610c825760019450600080610ba0838b8e886001611a33565b9150915080600b6000828254610bb69190614548565b90915550610bd2905083600084610bcc81611758565b8a611cf0565b610bdc818361455b565b9150610beb610aca8387611011565b60058054600290610c0c9084906201000090046001600160701b03166145aa565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c3982610e6d565b60058054601090610c5b908490600160801b90046001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610cba57610cae610c9487611758565b610c9d83611758565b610ca791906145ca565b6000611ee1565b610cb88e8e6106e5565b505b6000610cc58f611f94565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d1e959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989e9d5050505050505050505050505050565b3415610d5957604051631574f9f360e01b815260040160405180910390fd5b565b6000610d6a60208301836144f4565b6001600160a01b031603610d915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610da8604085016020860161452b565b15610dcd57610dc385610dbe60408701876145ea565b612084565b9093509050610de9565b5034610de585610de060408701876145ea565b6120a0565b8492505b610df16106cd565b91508015610e6457604051600090339083908381818185875af1925050503d8060008114610e3b576040519150601f19603f3d011682016040523d82523d6000602084013e610e40565b606091505b5050905080610e62576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006001600160801b03821115610e9757604051630f0af95160e11b815260040160405180910390fd5b5090565b600080610eac846301e133806120d5565b90506000610eba8683611011565b610ecc90670de0b6b3a7640000614548565b9050670de0b6b3a76400008110610f0057610ef9610ef2670de0b6b3a7640000866120d5565b82906120ea565b9050610f18565b610f15610ef2670de0b6b3a76400008661215f565b90505b610f2c81610f26898b611011565b90611011565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610f6c908490614548565b90915550506000838152600e602052604081208054839290610f8f908490614548565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610ff4604083016020840161452b565b15611000575082610119565b61100a8484611011565b9050610119565b60006101198383670de0b6b3a7640000612174565b6000806000611092611036612192565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000006121b3565b915060006110fb6110a1612192565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121df565b9050611152868461114d847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121f6565b612261565b1561115f5761115f6122a3565b60008061116d8884896122bc565b909250905061117c828661455b565b9450611189818489612174565b9350611195848961455b565b9550670de0b6b3a764000061121b876111ac612192565b6111b69190614548565b6001546111d4908990600160801b90046001600160801b031661455b565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121df565b1115611229576112296122a3565b5050509250925092565b600254600160801b90046001600160801b03166112756103638261125f670de0b6b3a7640000866144dd565b6004546001600160801b0316919088600161233c565b600480546001600160801b0319166001600160801b039290921691909117905561129e85610e6d565b600180546000906112b99084906001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112e684610e6d565b60018054601090611308908490600160801b90046001600160801b0316614631565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061133584610e6d565b61133f908261458a565b600280546001600160801b03808416600160801b02911617905590506000611366836123f9565b90506113848161137587611758565b61137f9084614651565b611ee1565b61138d8461243d565b611399576113996122a3565b60006113a48561249d565b9050806113c457604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156113f75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000611414604083016020840161452b565b156114235761100a84846120d5565b5082610119565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa158015611492573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086b9190614679565b60025460009081906114d1906001600160801b03168461215f565b90506114fd7f000000000000000000000000000000000000000000000000000000000000000082614548565b6001546001600160801b03161115611555576001547f0000000000000000000000000000000000000000000000000000000000000000906115489083906001600160801b031661455b565b611552919061455b565b91505b50919050565b61156361430c565b60008061156f846124aa565b9050600061157c826125e4565b93509050826115915750600091506116609050565b60006115b86115b384610160015185610140015161101190919063ffffffff16565b611758565b6115d86115b385610120015186610100015161267190919063ffffffff16565b6115e291906145ca565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806116808660c001518760e00151612686565b915091508061169757600080935093505050610e66565b60006116a387846126c2565b925090508115806116b2575080155b156116c65760008094509450505050610e66565b60006116d288836127d1565b9050806000036116ec576000809550955050505050610e66565b876060015181116117035794509250610e66915050565b50606087015160006117178986858b6128a2565b90508060000361173257600080965096505050505050610e66565b82811061174a57600080965096505050505050610e66565b909890975095505050505050565b60006001600160ff1b03821115610e975760405163396ea70160e11b815260040160405180910390fd5b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806117d48787877f00000000000000000000000000000000000000000000000000000000000000008d612db9565b9350935093509350806117f05750600098975050505050505050565b8684146118215761180084610e6d565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146118525761183183612ed1565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146118805761186282610e6d565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60055460009081906118b2908490600160801b90046001600160801b0316611011565b6005546201000090046001600160701b03169250905081811115611a2e5760006118dc838361455b565b90506118eb610363828661215f565b6005805460109061190d908490600160801b90046001600160801b0316614631565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061194685836120d590919063ffffffff16565b90506000611974827f0000000000000000000000000000000000000000000000000000000000000000611011565b905080600b60008282546119889190614548565b909155506119989050818361455b565b91506119a382610e6d565b600180546000906119be9084906001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119eb82612f0d565b60038054600090611a00908490600f0b614692565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611a4087856120d5565b91506000611a6e837f0000000000000000000000000000000000000000000000000000000000000000611011565b9050611a9a817f0000000000000000000000000000000000000000000000000000000000000000611011565b91508315611abd57611aac828261455b565b611ab6908461455b565b9250611ad4565b611ac7828261455b565b611ad19084614548565b92505b86861015611af757611ae7838789612174565b9250611af4828789612174565b91505b509550959350505050565b600354600160801b90046001600160801b0316611b4b61036382611b2e670de0b6b3a7640000866144dd565b600454600160801b90046001600160801b031691908a600061233c565b600480546001600160801b03928316600160801b029216919091179055611b7186610e6d565b611b7b9082614631565b600380546001600160801b03928316600160801b029216919091179055611ba184610e6d565b60018054600090611bbc9084906001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611be983612ed1565b60038054600090611bfe908490600f0b614692565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c2e85610e6d565b60018054601090611c50908490600160801b90046001600160801b0316614631565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c9484611c8e8a888a612174565b906120d5565b9050611ca1888486612174565b611cab9082614548565b905086811115611cbb5786810391505b509695505050505050565b60006001600160701b03821115610e975760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611d3257507f0000000000000000000000000000000000000000000000000000000000000000611d30858361455b565b105b15611d3f57611d3f6122a3565b6003549084900390600f0b611d5484826145ca565b905083611d6086611758565b138015611d9557507f0000000000000000000000000000000000000000000000000000000000000000611d938383612f37565b105b15611da257611da26122a3565b600254600160801b90046001600160801b0316611de461036382611dce670de0b6b3a7640000886144dd565b6004546001600160801b031691908c600061233c565b600480546001600160801b0319166001600160801b0392909216919091179055611e0e888261455b565b9050611e1981610e6d565b600280546001600160801b03928316600160801b029216919091179055611e3f83610e6d565b600180546001600160801b0319166001600160801b0392909216919091179055611e6882612ed1565b600380546001600160801b0319166001600160801b0392909216919091179055611e9187610e6d565b60018054601090611eb3908490600160801b90046001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611f0a611ef08483612f5d565b611efb846000612f5d565b611f0591906145ca565b612ed1565b9050600081600f0b1315611f5f5760028054829190600090611f369084906001600160801b031661458a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611f8f57611f74816146bf565b60028054600090611f369084906001600160801b0316614631565b505050565b600080600080611fab611fa6866124aa565b6125e4565b9150915080611fc1575060009485945092505050565b6000808611611fd1576000611fdb565b611fdb8387611011565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120469190614548565b612050919061455b565b9050806000036120695750600096879650945050505050565b600061207583836120d5565b98600198509650505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b611f8f6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612f73565b600061011983670de0b6b3a764000084612174565b6000816000036121035750670de0b6b3a764000061086b565b826000036121135750600061086b565b600061211e83611758565b9050600061213361212e86611758565b612fd3565b905081810261214a670de0b6b3a7640000826146e5565b9050612155816131f9565b9695505050505050565b600061011983670de0b6b3a76400008461338e565b600082600019048411830215820261218b57600080fd5b5091020490565b6001546003546000916106e0916001600160801b0390911690600f0b612f37565b60006121d48787876121cd88670de0b6b3a764000061455b565b87876133b4565b979650505050505050565b6000610f31826121f0858888612174565b906120ea565b600061011661223d61221084670de0b6b3a764000061455b565b612237670de0b6b3a7640000612226818a61215f565b612230919061455b565b8790612671565b90612671565b61224f90670de0b6b3a7640000614548565b611c8e84670de0b6b3a764000061455b565b60008061229885612270612192565b61227a9190614548565b6001546111d4908790600160801b90046001600160801b031661455b565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806123068561223785817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006122fc818c61215f565b612237919061455b565b9150612332827f0000000000000000000000000000000000000000000000000000000000000000611011565b9050935093915050565b60008260000361234d575084610f31565b81156123bf5761237e6123608487614548565b61236a8587611011565b612374888a611011565b611c8e9190614548565b9050600061238c8588613461565b9050600061239a8689613470565b9050818310156123ac578192506123b8565b808311156123b8578092505b5050610f31565b8285036123ce57506000610f31565b6121556123db848761455b565b6123e58587612671565b6123ef888a611011565b611c8e919061455b565b6000612421600e600061240d6002866113cd565b815260200190815260200160002054611758565b612433600e600061240d6001876113cd565b61086b91906145ca565b60006124697f000000000000000000000000000000000000000000000000000000000000000083612671565b60025461247f91906001600160801b0316614548565b600154612495906001600160801b031684611011565b101592915050565b600061086b8260046106e5565b6124b261435e565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916125aa911661347f565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926125dc9290041661347f565b905292915050565b60008060008060006125f5866134f5565b915091508061260c57506000958695509350505050565b6126198660a00151611758565b61262287613815565b836126308960000151611758565b61263a9190614651565b6126449190614651565b61264e91906145ca565b9250505060008112156126675750600093849350915050565b9360019350915050565b60006101198383670de0b6b3a764000061338e565b60008060008361269586611758565b61269f91906145ca565b905060008112156126b7576000809250925050610e66565b946001945092505050565b60008060008460a00151126126df57505060808201516001610e66565b60008460a001516126ef9061456e565b9050600061272b85876101000151886000015160e00151670de0b6b3a7640000612719919061455b565b89516060810151608090910151613879565b9350905082158061273a575080155b1561274d57600080935093505050610e66565b6000612759838361215f565b9050670de0b6b3a764000081116127955780670de0b6b3a764000003945061278e8760c001518661101190919063ffffffff16565b94506127a4565b60008094509450505050610e66565b86608001518511156127c3578660800151600194509450505050610e66565b506001925050509250929050565b6000806128078460c001518560e00151866101000151876000015160a001516127f988611758565b6128029061456e565b612db9565b8751604081019290925260208201929092529190915290508061282e57600091505061086b565b600061283d85600001516125e4565b92509050816128515760009250505061086b565b846020015181106128675760009250505061086b565b60008560600151866040015161287d9190614548565b9050612898828760200151836121749092919063ffffffff16565b612155908261455b565b600080856060015186604001516128b99190614548565b602087015160608801519192506000916128d39184612174565b90508660a001516000036128ea579150612db19050565b600080808960048810156128fd57600497505b60005b88811015612c5957612912868b613461565b9550600061293b8360c001518460e00151856101000151866000015160a001516127f98c611758565b8651604081019290925260208201929092529190915290508061296957600098505050505050505050612db1565b60006129788e600001516125e4565b92509050816129935760009950505050505050505050612db1565b61299e84828b613925565b156129b457879950505050505050505050612db1565b60008460a001511315612b1d57835180516020820151604083015160a084015160e090940151600094612a08949392916129f690670de0b6b3a764000061455b565b8a516060810151608090910151613991565b9350905082612a245760009a5050505050505050505050612db1565b808560a0015110612b1b57612a3885613a96565b909950925082612a555760009a5050505050505050505050612db1565b612a7a8560c001518660e00151876101000151886000015160a001516127f98e611758565b88516040810192909252602082019290925291909152925082612aaa5760009a5050505050505050505050612db1565b845180516020820151604083015160a084015160e090940151612ada94906129f690670de0b6b3a764000061455b565b9350905082612af65760009a5050505050505050505050612db1565b8e60a001518111612b1357889a5050505050505050505050612db1565b505050612900565b505b6000612b2e858f8760a00151613b6c565b93509050821580612b475750670de0b6b3a76400008110155b15612b5f5760009a5050505050505050505050612db1565b80670de0b6b3a76400000390506000612b8c6115b38760400151886020015161267190919063ffffffff16565b612b996115b3858e611011565b612ba391906145ca565b9050881580612bc15750612bb689613ec7565b612bbf82613ec7565b125b15612bd0578098508997508296505b6000811315612bf857612be78b611c8e83856120d5565b612bf1908b614548565b9950612c4a565b6000811215612c41576000612c128c611c8e85818661456e565b90508a811015612c2657808b039a50612c3b565b60009c50505050505050505050505050612db1565b50612c4a565b50505050612c59565b84600101945050505050612900565b506000612c818260c001518360e00151846101000151856000015160a001516127f98b611758565b85516040810192909252602082019290925291909152905080612cae576000975050505050505050612db1565b6000612cbd8360000151613edf565b90506000612cdf6115b38560400151866020015161267190919063ffffffff16565b612cec6115b3848c611011565b612cf691906145ca565b9050612d0187613ec7565b612d0a82613ec7565b1215612d17578795508194505b612d3e612d32655af3107a4000670de0b6b3a764000061455b565b6020860151908b61338e565b6040850151612d4e9087906120d5565b1080612d8e5750612d7c612d70655af3107a4000670de0b6b3a7640000614548565b6020860151908b612174565b6040850151612d8c90879061215f565b115b15612da55760009950505050505050505050612db1565b50939750505050505050505b949350505050565b60008060008084600003612dd857508792508691508590506001612ec5565b600085612de48b611758565b612dee9190614651565b9050612df987611758565b811215612e1457600080600080945094509450945050612ec5565b80945060008912612e3457612e2d6115b3868b8d612174565b9350612e57565b612e4b6115b3612e438b61456e565b87908d61338e565b612e549061456e565b93505b600080612e648c8c612686565b9150915080612e83576000806000809650965096509650505050612ec5565b6000612e8f8888612686565b9250905081612eaf57600080600080975097509750975050505050612ec5565b612eba8b8285612174565b955060019450505050505b95509550955095915050565b600060016001607f1b0319821280612eef575060016001607f1b0382135b15610e975760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03821115610e975760405163a5353be560e01b815260040160405180910390fd5b600080612f448484612686565b909250905080612f5657612f566122a3565b5092915050565b6000818313612f6c5781610119565b5090919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612fcd908590613f0f565b50505050565b6000808213612ff55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130789084901c611758565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361321457506000919050565b680755bf798b4a1bf1e5821261323d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061215574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611758565b60008260001904841183021582026133a557600080fd5b50910281810615159190040190565b6000806133c48888878787613f77565b90506133de856121f06133d7898c614548565b8690611011565b97506133eb848985612174565b9750878110156133fd576133fd6122a3565b878103670de0b6b3a7640000811061342b57613424610ef2670de0b6b3a76400008861215f565b9050613443565b613440610ef2670de0b6b3a7640000886120d5565b90505b80881015613453576134536122a3565b909603979650505050505050565b60008183116115555782610119565b6000818311612f6c5781610119565b600080670de0b6b3a7640000613493610871565b61349d91906144dd565b90508083116134ad5760006134b7565b6134b7818461455b565b91506115526134ee670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006144dd565b83906120d5565b600080600061351a6115b385610160015186610140015161101190919063ffffffff16565b61353a6115b386610120015187610100015161267190919063ffffffff16565b61354491906145ca565b905060008061355b86600001518760200151612686565b915091508061357257506000958695509350505050565b60008313156136b357600083905060006135c0886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006135b1919061455b565b8d606001518e60800151613991565b93509050826135d9575060009788975095505050505050565b818110613677576000613613858a60400151858c60e00151670de0b6b3a7640000613604919061455b565b8d606001518e60800151613fa6565b945090508315801561362857508860c0015183105b1561363f5750600098600198509650505050505050565b8361365557506000988998509650505050505050565b61365e81611758565b6136679061456e565b9960019950975050505050505050565b600088602001511261369f576136968860a00151856115b3919061455b565b6120759061456e565b60a08801518851613696916115b39161455b565b60008312156138065760006136c78461456e565b905060006136fb8489604001518a60e00151670de0b6b3a76400006136ec919061455b565b8b606001518c60800151613879565b9350905082613714575060009788975095505050505050565b81811061379957600061374e858a60400151858c60e00151670de0b6b3a764000061373f919061455b565b8d606001518e60800151614069565b945090508315801561376357508860c0015183105b1561377a5750600098600198509650505050505050565b8361379057506000988998509650505050505050565b61366781611758565b60006137cb858a604001518b60e00151670de0b6b3a76400006137bc919061455b565b8c606001518d60800151614140565b94509050836137e557506000988998509650505050505050565b6136676137fc8a606001518486611c8e919061455b565b6115b39083614548565b50600095600195509350505050565b60006138486115b3836101200151670de0b6b3a7640000613836919061455b565b6060850151610100860151919061338e565b6124336115b3846101600151670de0b6b3a7640000613867919061455b565b60608601516101408701519190612174565b600080600061388b8888888888613f77565b905060006138b6670de0b6b3a76400006138a588886120d5565b6138af9190614548565b839061215f565b9050670de0b6b3a764000081106138e3576138dc610ef2670de0b6b3a76400008961215f565b90506138fb565b6138f8610ef2670de0b6b3a7640000896120d5565b90505b808810156139115760008093509350505061391b565b8703925060019150505b9550959350505050565b6020830151600090613937908461215f565b60408501516139479084906120d5565b10158015610116575060208401516139779084613970633b9aca00670de0b6b3a7640000614548565b9190612174565b604085015161398790849061215f565b1115949350505050565b60008060008812156139b3576139a68861456e565b6139b09087614548565b95505b6000806139c08b8b612686565b91509150806139d757600080935093505050613a8a565b60006139e6838b8a8a8a6141ef565b90506000613a036139fb8a6121f08a8e612671565b89908961338e565b905080821015613a1d576000809550955050505050613a8a565b808203670de0b6b3a76400008110613a4b57613a44610ef2670de0b6b3a76400008c6120d5565b9050613a63565b613a60610ef2670de0b6b3a76400008c61215f565b90505b8b811015613a7c57600080965096505050505050613a8a565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613ab057506000928392509050565b6000613abf8460000151613815565b90506000613aeb856040015186606001518760400151613adf9190614548565b6020880151919061338e565b905060008212613b125780821015613b0557819003613b28565b5060009485945092505050565b613b1b8261456e565b613b259082614548565b90505b60e085015160c0860151613b3d91839061338e565b9050808560c001511015613b58575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b9057855160400151613b89908590614548565b9050613bcb565b6000613b9b8561456e565b875160400151909150811015613bbb578651604001518190039150613bc9565b600080935093505050611660565b505b855180516020909101516000918291613be49190612686565b9150915080613bfc5760008094509450505050611660565b875160e0810151604090910151600091613c3191613c2591613c1e91906120ea565b8a90611011565b6101008b01519061215f565b895160e0810151608090910151613c5c91613c50916121f09088611011565b8b51606001519061215f565b613c669190614548565b90506000613c9e613c92613c8b8c6000015160e00151886120ea90919063ffffffff16565b8b90612671565b6101008c0151906120d5565b905080821015613cb957600080965096505050505050611660565b80820391506000613cfb858c60000151604001518d6000015160e00151670de0b6b3a7640000613ce9919061455b565b8e516060810151608090910151613f77565b90506000613d258c6000015160e00151670de0b6b3a7640000613d1e919061455b565b88906120ea565b905080821015613d42576000809850985050505050505050611660565b8b51608081015160609091015191830391613d5e91839161338e565b9050670de0b6b3a76400008110613da2578b5160e00151613d9b90610ef290613d8f90670de0b6b3a764000061455b565b8e5160e001519061215f565b9050613dd1565b8b5160e00151613dce90610ef290613dc290670de0b6b3a764000061455b565b8e5160e00151906120d5565b90505b8b5160600151613de4908590839061338e565b935083670de0b6b3a76400001115613e085783670de0b6b3a7640000039350613e1c565b600060019850985050505050505050611660565b60008c60e0015112613e7f5760c08c015160e08d0151613e3b9161215f565b9250670de0b6b3a7640000831115613e60576000809850985050505050505050611660565b670de0b6b3a76400009290920391613e788484611011565b9350613eb4565b613eb1613e988d60c001518e60e00151611c8e9061456e565b613eaa90670de0b6b3a7640000614548565b8590611011565b93505b50919a60019a5098505050505050505050565b6000808212613ed6578161086b565b61086b8261456e565b6000806000613eed846125e4565b9150915080612f5657604051635516328b60e11b815260040160405180910390fd5b6000613f246001600160a01b03841683614214565b90508051600014158015613f49575080806020019051810190613f479190614713565b155b15611f8f57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000613f8385856120ea565b613f9c613f94866121f0868b612671565b85908561338e565b6121559190614548565b6000806000613fb88989888888613f77565b9050613fc8866121f0898b614548565b975087811015613fdf57600080925092505061405e565b878103613fed81868861338e565b9050670de0b6b3a7640000811061401a57614013610ef2670de0b6b3a76400008961215f565b9050614032565b61402f610ef2670de0b6b3a7640000896120d5565b90505b61403c818661215f565b9050808a10156140545760008093509350505061405e565b8903925060019150505b965096945050505050565b600080600061407b8989888888613f77565b90508688101561409257600080925092505061405e565b96869003966140a188876120ea565b9750878110156140b857600080925092505061405e565b8781036140c681868861338e565b9050670de0b6b3a764000081106140f3576140ec610ef2670de0b6b3a76400008961215f565b905061410b565b614108610ef2670de0b6b3a7640000896120d5565b90505b614115818661215f565b90508981101561412d5760008093509350505061405e565b9890980398600198509650505050505050565b600080600061415288888888886141ef565b90506000614176670de0b6b3a764000061416c888861215f565b6134ee9190614548565b9050670de0b6b3a764000081106141a35761419c610ef2670de0b6b3a7640000896120d5565b90506141bb565b6141b8610ef2670de0b6b3a76400008961215f565b90505b6141c581866120d5565b9050888110156141dd5760008093509350505061391b565b97909703976001975095505050505050565b60006141fb85856120ea565b613f9c61420c866121f0868b611011565b859085612174565b60606101198383600084600080856001600160a01b0316848660405161423a9190614730565b60006040518083038185875af1925050503d8060008114614277576040519150601f19603f3d011682016040523d82523d6000602084013e61427c565b606091505b509150915061215586838360608261429c57614297826142e3565b610119565b81511580156142b357506001600160a01b0384163b155b156142dc57604051639996b31560e01b81526001600160a01b0385166004820152602401613f6e565b5080610119565b8051156142f35780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061432061435e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080604083850312156143d257600080fd5b50508035926020909101359150565b60006060828403121561155557600080fd5b60008060006060848603121561440857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561442d57600080fd5b614439868287016143e1565b9150509250925092565b6000806000806080858703121561445957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561448557600080fd5b614491878288016143e1565b91505092959194509250565b634e487b7160e01b600052601260045260246000fd5b6000826144c2576144c261449d565b500690565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761086b5761086b6144c7565b60006020828403121561450657600080fd5b81356001600160a01b038116811461011957600080fd5b8015158114610d9157600080fd5b60006020828403121561453d57600080fd5b81356101198161451d565b8082018082111561086b5761086b6144c7565b8181038181111561086b5761086b6144c7565b6000600160ff1b8201614583576145836144c7565b5060000390565b6001600160801b03818116838216019080821115612f5657612f566144c7565b6001600160701b03818116838216019080821115612f5657612f566144c7565b8181036000831280158383131683831282161715612f5657612f566144c7565b6000808335601e1984360301811261460157600080fd5b83018035915067ffffffffffffffff82111561461c57600080fd5b602001915036819003821315610e6657600080fd5b6001600160801b03828116828216039080821115612f5657612f566144c7565b8082018281126000831280158216821582161715614671576146716144c7565b505092915050565b60006020828403121561468b57600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561086b5761086b6144c7565b600081600f0b60016001607f1b031981036146dc576146dc6144c7565b60000392915050565b6000826146f4576146f461449d565b600160ff1b82146000198414161561470e5761470e6144c7565b500590565b60006020828403121561472557600080fd5b81516101198161451d565b6000825160005b818110156147515760208186018101518583015201614737565b50600092019182525091905056fea26469706673582212207e530dad7f6a10f6bbf6528aa1bc83002f30e321f28371931b342afefc2a3aa964736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    }
};
