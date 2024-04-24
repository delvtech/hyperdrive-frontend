export const ERC4626Target1 = {
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004ba138038062004ba18339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614771620004306000396000505060005050600081816101a701526125ec0152600081816111890152818161174d015281816117b0015281816121d20152818161220e0152818161247701526125c6015260008181610c4801528181610c9501528181610e5e01526125a00152600061151001526000818161163601528181611db40152611e2d0152600081816106a101528181610ded0152818161160a0152611e01015260008181610ce70152611d7a015260008181610c2601528181610cb601528181610e7f01526126120152600081816105dc01528181610d7301528181611c1701526130e00152600081816104820152818161050f01526105740152600081816113b10152818161203c015281816120a2015261211e0152600050506147716000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063074a6de91461003b57806329b23fc114610068575b600080fd5b61004e6100493660046143cf565b610089565b604080519283526020830191909152015b60405180910390f35b61007b61007636600461441f565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610192565b90505b949350505050565b6000806100c8610400565b6100d18361042a565b60006100db610463565b90506100f06100e861047b565b8260046104b1565b506100fe3387838888610946565b90935091506101106020850185614479565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8461014787868a610a89565b61015288878b610ab8565b61016260408b0160208c016144b0565b604080519485526020850193909352918301521515606082015260800160405180910390a35061009c6001600055565b600061019c610400565b6101a58261042a565b7f00000000000000000000000000000000000000000000000000000000000000008410156101e65760405163211ddda360e11b815260040160405180910390fd5b60006101f0610463565b90508542101561020b576102056100e861047b565b50610219565b610217868260046104b1565b505b61022e610227600288610ae0565b3387610b15565b60008060008060006102418a878d610bee565b945094509450945094508a4210156102e85780600b600082825461026591906144e3565b9091555061027890508a8685858f610ed8565b60006102838c611057565b90506102a16102918c6110a1565b61029b90836144f6565b826110cf565b6102aa87611182565b6102b6576102b66111e2565b60006102c1886111fb565b9050806102e157604051638bdf918d60e01b815260040160405180910390fd5b50506102ff565b6102f28487611208565b93506102fd866111fb565b505b600061030c85888b6112e9565b90508981101561032f5760405163c972651760e01b815260040160405180910390fd5b8a8c85848a8d610340600286610ae0565b61034d6020830183614479565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730886103848c8888610a89565b61038f8d8989610ab8565b61039f6040890160208a016144b0565b6103b38a6103ad8d8f6144e3565b90611383565b6040805195865260208601949094529284019190915215156060830152608082015260a081018b905260c00160405180910390a450949b5050505050505050505050506100b56001600055565b60026000540361042357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104396020830183614479565b6001600160a01b0316036104605760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610476670de0b6b3a7640000611398565b905090565b60006104a77f00000000000000000000000000000000000000000000000000000000000000004261452c565b6104769042614540565b600083815260076020526040812080546001600160801b03161515806104d657504285115b156104ec57546001600160801b0316905061093f565b6000806104f761047b565b9050808703610508578591506105a2565b60006105347f0000000000000000000000000000000000000000000000000000000000000000896144e3565b90505b6000818152600760205260409020546001600160801b03169250818114801561055e575082155b15610567578692505b826000036105a0576105997f0000000000000000000000000000000000000000000000000000000000000000826144e3565b9050610537565b505b6105ab82611425565b83546001600160801b0319166001600160801b03919091161783556105cf8661144f565b50600090506007816106017f00000000000000000000000000000000000000000000000000000000000000008b614540565b815260208101919091526040016000908120546001600160801b0316915061062a60028a610ae0565b6000818152600e60205260408120549192508a8a8315610770576001925060008061065986898c8660006115f3565b9150915080600b600082825461066f91906144e3565b9091555061068b905086600084610685816110a1565b88610ed8565b61069581836144e3565b91506106c586838a8d877f00000000000000000000000000000000000000000000000000000000000000006116c2565b91506106d96106d48385611383565b61170c565b600580546002906106fa9084906201000090046001600160701b0316614553565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061072782611425565b60058054601090610749908490600160801b90046001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061077d600184610ae0565b6000818152600e6020526040902054909150801561088c57600194506000806107aa838b8e8860016115f3565b9150915080600b60008282546107c091906144e3565b909155506107dc9050836000846107d6816110a1565b8a611736565b6107e68183614540565b91506107f56106d48387611383565b600580546002906108169084906201000090046001600160701b0316614553565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061084382611425565b60058054601090610865908490600160801b90046001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156108c4576108b861089e876110a1565b6108a7836110a1565b6108b191906144f6565b60006110cf565b6108c28e8e611927565b505b60006108cf8f611ab2565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610928959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b600080610952856111fb565b505060065485906001600160801b03168082111561097757806001600160801b031691505b8160000361098c576000809250925050610a7f565b61099b600360f81b8984610b15565b6006546000906109c19084906001600160801b03600160801b9091048116908516611ba2565b90506109cc83611425565b6109d69083614593565b600680546001600160801b0319166001600160801b03929092169190911790556109ff81611425565b60068054601090610a21908490600160801b90046001600160801b0316614593565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610a508188876112e9565b9350610a5c8684611bc0565b841015610a7c5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b6000610a9b60408301602084016144b0565b15610aa757508261093f565b610ab18484611383565b905061093f565b6000610aca60408301602084016144b0565b15610ad957610ab18484611bd5565b508261093f565b60006001600160f81b03821115610b0a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610b5857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610b9b908490614540565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610c0288611bea565b9050610c6c610c0f611c3b565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611c5c565b909850955091506000610cda610c80611c3b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ccc565b9050610d108389610d0b847f0000000000000000000000000000000000000000000000000000000000000000611ce3565b611d13565b15610d1d57610d1d6111e2565b8a8a60008080610d2f85888887611d55565b9b5091945092509050610d428184614540565b610d4c90896144e3565b9750610d5882846144e3565b610d62908c6144e3565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610d9d9190614540565b815260208101919091526040016000908120546001600160801b03169150428911610ddf576000898152600760205260409020546001600160801b0316610de1565b895b9050610e118b8784848e7f00000000000000000000000000000000000000000000000000000000000000006116c2565b9650610e1d8487614540565b9550670de0b6b3a7640000610ea384610e34611c3b565b610e3e91906144e3565b600154610e5c908c90600160801b90046001600160801b0316614540565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ccc565b1115610eb157610eb16111e2565b610ec18787858786866000611e69565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610f26610f2182610f04670de0b6b3a7640000866145b3565b600454600160801b90046001600160801b031691908a6000611f08565b611425565b600480546001600160801b03928316600160801b029216919091179055610f4c86611425565b610f569082614593565b600380546001600160801b03928316600160801b029216919091179055610f7c84611425565b60018054600090610f979084906001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc483611fd1565b60038054600090610fd9908490600f0b6145ca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061100985611425565b6001805460109061102b908490600160801b90046001600160801b0316614593565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061107f600e600061106b600286610ae0565b8152602001908152602001600020546110a1565b611091600e600061106b600187610ae0565b61109b91906144f6565b92915050565b60006001600160ff1b038211156110cb5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006110f86110de848361200d565b6110e984600061200d565b6110f391906144f6565b611fd1565b9050600081600f0b131561114d57600280548291906000906111249084906001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561117d57611162816145f7565b600280546000906111249084906001600160801b0316614593565b505050565b60006111ae7f000000000000000000000000000000000000000000000000000000000000000083611bc0565b6002546111c491906001600160801b03166144e3565b6001546111da906001600160801b031684611383565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061109b826004611927565b60008060006112168461144f565b909250905060006112278686611383565b90508183111561123f5761123c868385611ba2565b95505b82811015611251578083039250611256565b600092505b61125f8361170c565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156112b2578690036112b6565b5060005b6112bf81611425565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806112f68585611383565b905061130181612023565b94508460000361131557600091505061093f565b61132560408401602085016144b0565b156113545761134d8561133b6020860186614479565b611348604087018761461d565b612073565b915061137b565b611377856113656020860186614479565b611372604087018761461d565b612111565b8491505b509392505050565b600061093f8383670de0b6b3a7640000611ba2565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015611401573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109b9190614664565b60006001600160801b038211156110cb57604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611472908490600160801b90046001600160801b0316611383565b6005546201000090046001600160701b031692509050818111156115ee57600061149c8383614540565b90506114ab610f21828661214b565b600580546010906114cd908490600160801b90046001600160801b0316614593565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115068583611bd590919063ffffffff16565b90506000611534827f0000000000000000000000000000000000000000000000000000000000000000611383565b905080600b600082825461154891906144e3565b9091555061155890508183614540565b915061156382611425565b6001805460009061157e9084906001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115ab82612160565b600380546000906115c0908490600f0b6145ca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806116008785611bd5565b9150600061162e837f0000000000000000000000000000000000000000000000000000000000000000611383565b905061165a817f0000000000000000000000000000000000000000000000000000000000000000611383565b9150831561167d5761166c8282614540565b6116769084614540565b9250611694565b6116878282614540565b61169190846144e3565b92505b868610156116b7576116a7838789611ba2565b92506116b4828789611ba2565b91505b509550959350505050565b6000806116da846116d48a888a611ba2565b90611bd5565b90506116e7888486611ba2565b6116f190826144e3565b9050868111156117015786810391505b509695505050505050565b60006001600160701b038211156110cb5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061177857507f00000000000000000000000000000000000000000000000000000000000000006117768583614540565b105b15611785576117856111e2565b6003549084900390600f0b61179a84826144f6565b9050836117a6866110a1565b1380156117db57507f00000000000000000000000000000000000000000000000000000000000000006117d9838361218a565b105b156117e8576117e86111e2565b600254600160801b90046001600160801b031661182a610f2182611814670de0b6b3a7640000886145b3565b6004546001600160801b031691908c6000611f08565b600480546001600160801b0319166001600160801b03929092169190911790556118548882614540565b905061185f81611425565b600280546001600160801b03928316600160801b02921691909117905561188583611425565b600180546001600160801b0319166001600160801b03929092169190911790556118ae82611fd1565b600380546001600160801b0319166001600160801b03929092169190911790556118d787611425565b600180546010906118f9908490600160801b90046001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611972916001600160801b031690614540565b90508060000361198657600191505061109b565b6000611991856121b0565b9050806000036119a65760019250505061109b565b6000806119b4838589612252565b91509150806119ca57600094505050505061109b565b6000806119d78489612358565b915091506119f56119e7826110a1565b6119f09061467d565b61244a565b925082611a0b576000965050505050505061109b565b611a1482611425565b60068054600090611a2f9084906001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a5c81611425565b60068054601090611a7e908490600160801b90046001600160801b0316614573565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611ac9611ac486612557565b612691565b9150915080611adf575060009485945092505050565b6000808611611aef576000611af9565b611af98387611383565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611b6491906144e3565b611b6e9190614540565b905080600003611b875750600096879650945050505050565b6000611b938383611bd5565b98600198509650505050505050565b6000826000190484118302158202611bb957600080fd5b5091020490565b600061093f8383670de0b6b3a764000061271e565b600061093f83670de0b6b3a764000084611ba2565b600080611bf561047b565b9050808311611c05576000611c0f565b611c0f8184614540565b915061093f827f0000000000000000000000000000000000000000000000000000000000000000611bd5565b600154600354600091610476916001600160801b0390911690600f0b61218a565b60008080611c7d611c7588670de0b6b3a7640000614540565b89908761271e565b90508615611cbf57611c8f8888611bc0565b9150611cb08a8a84611ca98a670de0b6b3a7640000614540565b8989612744565b9250611cbc83826144e3565b90505b9750975097945050505050565b60006100b282611cdd858888611ba2565b90612767565b6000611d01611cfa84670de0b6b3a7640000614540565b8390611bc0565b61093f90670de0b6b3a7640000614540565b600080611d4a85611d22611c3b565b611d2c91906144e3565b600154610e5c908790600160801b90046001600160801b0316614540565b909210949350505050565b6000808080611dac8786611da58b611d9f611d788c670de0b6b3a7640000614540565b7f000000000000000000000000000000000000000000000000000000000000000090611bc0565b90611bc0565b919061271e565b9350611dd8847f0000000000000000000000000000000000000000000000000000000000000000611383565b91506000611df9611df189670de0b6b3a7640000614540565b8a908861271e565b9050611e25817f0000000000000000000000000000000000000000000000000000000000000000611bc0565b9350611e51847f0000000000000000000000000000000000000000000000000000000000000000611383565b611e5b90846144e3565b915050945094509450949050565b60008060008060008088881015611ed8578615611e8e57611e8b8d898b611ba2565b9c505b611e998c898b611ba2565b9b50611ea48b6110a1565b611ead8d6110a1565b611eb791906144f6565b9050611ec48b898b611ba2565b9a50611ed18a898b611ba2565b9950611ef7565b611ee18b6110a1565b611eea8d6110a1565b611ef491906144f6565b90505b9b9c9a9b999a975050505050505050565b600082600003611f19575084611fc8565b8115611f8b57611f4a611f2c84876144e3565b611f368587611383565b611f40888a611383565b6116d491906144e3565b90506000611f5885886127dc565b90506000611f6686896127eb565b905081831015611f7857819250611f84565b80831115611f84578092505b5050611fc8565b828503611f9a57506000611fc8565b611fc5611fa78487614540565b611fb18587611bc0565b611fbb888a611383565b6116d49190614540565b90505b95945050505050565b600060016001607f1b0319821280611fef575060016001607f1b0382135b156110cb5760405163a5353be560e01b815260040160405180910390fd5b600081831361201c578161093f565b5090919050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024016113e4565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156120ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b29190614664565b6121456001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866127fa565b50505050565b600061093f83670de0b6b3a76400008461271e565b600060016001607f1b038211156110cb5760405163a5353be560e01b815260040160405180910390fd5b600080612197848461284c565b9092509050806121a9576121a96111e2565b5092915050565b60025460009081906121cb906001600160801b03168461214b565b90506121f77f0000000000000000000000000000000000000000000000000000000000000000826144e3565b6001546001600160801b0316111561224c576001547f0000000000000000000000000000000000000000000000000000000000000000906122429083906001600160801b0316614540565b61093f9190614540565b50919050565b61225a61430a565b60008061226684612557565b9050600061227382612691565b935090508261228857506000915061009c9050565b60006122af6122aa84610160015185610140015161138390919063ffffffff16565b6110a1565b6122cf6122aa856101200151866101000151611bc090919063ffffffff16565b6122d991906144f6565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806123708660c001518760e0015161284c565b915091508061238757600080935093505050612443565b60006123938784612888565b925090508115806123a2575080155b156123b65760008094509450505050612443565b60006123c28883612997565b9050806000036123dc576000809550955050505050612443565b876060015181116123f35794509250612443915050565b50606087015160006124078986858b612a68565b90508060000361242257600080965096505050505050612443565b82811061243a57600080965096505050505050612443565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b9004168380808061249c8787877f00000000000000000000000000000000000000000000000000000000000000008d612f7d565b9350935093509350806124b85750600098975050505050505050565b8684146124e9576124c884611425565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461251a576124f983611fd1565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146125485761252a82611425565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b61255f61435c565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916126579116613095565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261268992900416613095565b905292915050565b60008060008060006126a28661310b565b91509150806126b957506000958695509350505050565b6126c68660a001516110a1565b6126cf8761342b565b836126dd89600001516110a1565b6126e79190614699565b6126f19190614699565b6126fb91906144f6565b9250505060008112156127145750600093849350915050565b9360019350915050565b600082600019048411830215820261273557600080fd5b50910281810615159190040190565b60008061275588888888888861348f565b909250905080611701576117016111e2565b6000816000036127805750670de0b6b3a764000061109b565b826000036127905750600061109b565b600061279b836110a1565b905060006127b06127ab866110a1565b613570565b90508181026127c7670de0b6b3a7640000826146c1565b90506127d281613796565b9695505050505050565b600081831161224c578261093f565b600081831161201c578161093f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261117d90849061392b565b60008060008361285b866110a1565b61286591906144f6565b9050600081121561287d576000809250925050612443565b946001945092505050565b60008060008460a00151126128a557505060808201516001612443565b60008460a001516128b59061467d565b905060006128f185876101000151886000015160e00151670de0b6b3a76400006128df9190614540565b89516060810151608090910151613993565b93509050821580612900575080155b1561291357600080935093505050612443565b600061291f838361214b565b9050670de0b6b3a7640000811161295b5780670de0b6b3a76400000394506129548760c001518661138390919063ffffffff16565b945061296a565b60008094509450505050612443565b8660800151851115612989578660800151600194509450505050612443565b506001925050509250929050565b6000806129cd8460c001518560e00151866101000151876000015160a001516129bf886110a1565b6129c89061467d565b612f7d565b875160408101929092526020820192909252919091529050806129f457600091505061109b565b6000612a038560000151612691565b9250905081612a175760009250505061109b565b84602001518110612a2d5760009250505061109b565b600085606001518660400151612a4391906144e3565b9050612a5e82876020015183611ba29092919063ffffffff16565b6127d29082614540565b60008085606001518660400151612a7f91906144e3565b60208701516060880151919250600091612a999184611ba2565b90508660a00151600003612ab05791506100b59050565b60008080896004881015612ac357600497505b60005b88811015612e1f57612ad8868b6127dc565b95506000612b018360c001518460e00151856101000151866000015160a001516129bf8c6110a1565b86516040810192909252602082019290925291909152905080612b2f576000985050505050505050506100b5565b6000612b3e8e60000151612691565b9250905081612b5957600099505050505050505050506100b5565b612b6484828b613a3c565b15612b7a578799505050505050505050506100b5565b60008460a001511315612ce357835180516020820151604083015160a084015160e090940151600094612bce94939291612bbc90670de0b6b3a7640000614540565b8a516060810151608090910151613aa8565b9350905082612bea5760009a50505050505050505050506100b5565b808560a0015110612ce157612bfe85613bad565b909950925082612c1b5760009a50505050505050505050506100b5565b612c408560c001518660e00151876101000151886000015160a001516129bf8e6110a1565b88516040810192909252602082019290925291909152925082612c705760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612ca09490612bbc90670de0b6b3a7640000614540565b9350905082612cbc5760009a50505050505050505050506100b5565b8e60a001518111612cd957889a50505050505050505050506100b5565b505050612ac6565b505b6000612cf4858f8760a00151613c83565b93509050821580612d0d5750670de0b6b3a76400008110155b15612d255760009a50505050505050505050506100b5565b80670de0b6b3a76400000390506000612d526122aa87604001518860200151611bc090919063ffffffff16565b612d5f6122aa858e611383565b612d6991906144f6565b9050881580612d875750612d7c89613fde565b612d8582613fde565b125b15612d96578098508997508296505b6000811315612dbe57612dad8b6116d48385611bd5565b612db7908b6144e3565b9950612e10565b6000811215612e07576000612dd88c6116d485818661467d565b90508a811015612dec57808b039a50612e01565b60009c505050505050505050505050506100b5565b50612e10565b50505050612e1f565b84600101945050505050612ac6565b506000612e478260c001518360e00151846101000151856000015160a001516129bf8b6110a1565b85516040810192909252602082019290925291909152905080612e745760009750505050505050506100b5565b6000612e838360000151613ff6565b90506000612ea56122aa85604001518660200151611bc090919063ffffffff16565b612eb26122aa848c611383565b612ebc91906144f6565b9050612ec787613fde565b612ed082613fde565b1215612edd578795508194505b612f04612ef8655af3107a4000670de0b6b3a7640000614540565b6020860151908b61271e565b6040850151612f14908790611bd5565b1080612f545750612f42612f36655af3107a4000670de0b6b3a76400006144e3565b6020860151908b611ba2565b6040850151612f5290879061214b565b115b15612f6b57600099505050505050505050506100b5565b50939c9b505050505050505050505050565b60008060008084600003612f9c57508792508691508590506001613089565b600085612fa88b6110a1565b612fb29190614699565b9050612fbd876110a1565b811215612fd857600080600080945094509450945050613089565b80945060008912612ff857612ff16122aa868b8d611ba2565b935061301b565b61300f6122aa6130078b61467d565b87908d61271e565b6130189061467d565b93505b6000806130288c8c61284c565b9150915080613047576000806000809650965096509650505050613089565b6000613053888861284c565b925090508161307357600080600080975097509750975050505050613089565b61307e8b8285611ba2565b955060019450505050505b95509550955095915050565b600080670de0b6b3a76400006130a961047b565b6130b391906145b3565b90508083116130c35760006130cd565b6130cd8184614540565b915061093f613104670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006145b3565b8390611bd5565b60008060006131306122aa85610160015186610140015161138390919063ffffffff16565b6131506122aa866101200151876101000151611bc090919063ffffffff16565b61315a91906144f6565b90506000806131718660000151876020015161284c565b915091508061318857506000958695509350505050565b60008313156132c957600083905060006131d6886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006131c79190614540565b8d606001518e60800151613aa8565b93509050826131ef575060009788975095505050505050565b81811061328d576000613229858a60400151858c60e00151670de0b6b3a764000061321a9190614540565b8d606001518e60800151614026565b945090508315801561323e57508860c0015183105b156132555750600098600198509650505050505050565b8361326b57506000988998509650505050505050565b613274816110a1565b61327d9061467d565b9960019950975050505050505050565b60008860200151126132b5576132ac8860a00151856122aa9190614540565b611b939061467d565b60a088015188516132ac916122aa91614540565b600083121561341c5760006132dd8461467d565b905060006133118489604001518a60e00151670de0b6b3a76400006133029190614540565b8b606001518c60800151613993565b935090508261332a575060009788975095505050505050565b8181106133af576000613364858a60400151858c60e00151670de0b6b3a76400006133559190614540565b8d606001518e6080015161348f565b945090508315801561337957508860c0015183105b156133905750600098600198509650505050505050565b836133a657506000988998509650505050505050565b61327d816110a1565b60006133e1858a604001518b60e00151670de0b6b3a76400006133d29190614540565b8c606001518d608001516140e6565b94509050836133fb57506000988998509650505050505050565b61327d6134128a6060015184866116d49190614540565b6122aa90836144e3565b50600095600195509350505050565b600061345e6122aa836101200151670de0b6b3a764000061344c9190614540565b6060850151610100860151919061271e565b6110916122aa846101600151670de0b6b3a764000061347d9190614540565b60608601516101408701519190611ba2565b60008060006134a18989888888614195565b9050868810156134b8576000809250925050613565565b96869003966134c78887612767565b9750878110156134de576000809250925050613565565b8781036134ec81868861271e565b9050670de0b6b3a7640000811061352057613519613512670de0b6b3a76400008961214b565b8290612767565b9050613538565b613535613512670de0b6b3a764000089611bd5565b90505b613542818661214b565b90508981101561355a57600080935093505050613565565b899003925060019150505b965096945050505050565b60008082136135925760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906136159084901c6110a1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136137b157506000919050565b680755bf798b4a1bf1e582126137da576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906127d274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6110a1565b60006139406001600160a01b038416836141c4565b9050805160001415801561396557508080602001905181019061396391906146ef565b155b1561117d57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060006139a58888888888614195565b905060006139d0670de0b6b3a76400006139bf8888611bd5565b6139c991906144e3565b839061214b565b9050670de0b6b3a764000081106139fd576139f6613512670de0b6b3a76400008961214b565b9050613a15565b613a12613512670de0b6b3a764000089611bd5565b90505b80881015613a2b57600080935093505050610a7f565b909603976001975095505050505050565b6020830151600090613a4e908461214b565b6040850151613a5e908490611bd5565b101580156100b557506020840151613a8e9084613a87633b9aca00670de0b6b3a76400006144e3565b9190611ba2565b6040850151613a9e90849061214b565b1115949350505050565b6000806000881215613aca57613abd8861467d565b613ac790876144e3565b95505b600080613ad78b8b61284c565b9150915080613aee57600080935093505050613ba1565b6000613afd838b8a8a8a6141d2565b90506000613b1a613b128a611cdd8a8e611bc0565b89908961271e565b905080821015613b34576000809550955050505050613ba1565b808203670de0b6b3a76400008110613b6257613b5b613512670de0b6b3a76400008c611bd5565b9050613b7a565b613b77613512670de0b6b3a76400008c61214b565b90505b8b811015613b9357600080965096505050505050613ba1565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613bc757506000928392509050565b6000613bd6846000015161342b565b90506000613c02856040015186606001518760400151613bf691906144e3565b6020880151919061271e565b905060008212613c295780821015613c1c57819003613c3f565b5060009485945092505050565b613c328261467d565b613c3c90826144e3565b90505b60e085015160c0860151613c5491839061271e565b9050808560c001511015613c6f575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613ca757855160400151613ca09085906144e3565b9050613ce2565b6000613cb28561467d565b875160400151909150811015613cd2578651604001518190039150613ce0565b60008093509350505061009c565b505b855180516020909101516000918291613cfb919061284c565b9150915080613d13576000809450945050505061009c565b875160e0810151604090910151600091613d4891613d3c91613d359190612767565b8a90611383565b6101008b01519061214b565b895160e0810151608090910151613d7391613d6791611cdd9088611383565b8b51606001519061214b565b613d7d91906144e3565b90506000613db5613da9613da28c6000015160e001518861276790919063ffffffff16565b8b90611bc0565b6101008c015190611bd5565b905080821015613dd05760008096509650505050505061009c565b80820391506000613e12858c60000151604001518d6000015160e00151670de0b6b3a7640000613e009190614540565b8e516060810151608090910151614195565b90506000613e3c8c6000015160e00151670de0b6b3a7640000613e359190614540565b8890612767565b905080821015613e5957600080985098505050505050505061009c565b8b51608081015160609091015191830391613e7591839161271e565b9050670de0b6b3a76400008110613eb9578b5160e00151613eb29061351290613ea690670de0b6b3a7640000614540565b8e5160e001519061214b565b9050613ee8565b8b5160e00151613ee59061351290613ed990670de0b6b3a7640000614540565b8e5160e0015190611bd5565b90505b8b5160600151613efb908590839061271e565b935083670de0b6b3a76400001115613f1f5783670de0b6b3a7640000039350613f33565b60006001985098505050505050505061009c565b60008c60e0015112613f965760c08c015160e08d0151613f529161214b565b9250670de0b6b3a7640000831115613f7757600080985098505050505050505061009c565b670de0b6b3a76400009290920391613f8f8484611383565b9350613fcb565b613fc8613faf8d60c001518e60e001516116d49061467d565b613fc190670de0b6b3a76400006144e3565b8590611383565b93505b50919a60019a5098505050505050505050565b6000808212613fed578161109b565b61109b8261467d565b600080600061400484612691565b91509150806121a957604051635516328b60e11b815260040160405180910390fd5b60008060006140388989888888614195565b905061404886611cdd898b6144e3565b97508781101561405f576000809250925050613565565b87810361406d81868861271e565b9050670de0b6b3a7640000811061409a57614093613512670de0b6b3a76400008961214b565b90506140b2565b6140af613512670de0b6b3a764000089611bd5565b90505b6140bc818661214b565b9050808a10156140d457600080935093505050613565565b90980398600198509650505050505050565b60008060006140f888888888886141d2565b9050600061411c670de0b6b3a7640000614112888861214b565b61310491906144e3565b9050670de0b6b3a7640000811061414957614142613512670de0b6b3a764000089611bd5565b9050614161565b61415e613512670de0b6b3a76400008961214b565b90505b61416b8186611bd5565b90508881101561418357600080935093505050610a7f565b97909703976001975095505050505050565b60006141a18585612767565b6141ba6141b286611cdd868b611bc0565b85908561271e565b611fc591906144e3565b606061093f838360006141f7565b60006141de8585612767565b6141ba6141ef86611cdd868b611383565b859085611ba2565b60608147101561421c5760405163cd78605960e01b815230600482015260240161398a565b600080856001600160a01b03168486604051614238919061470c565b60006040518083038185875af1925050503d8060008114614275576040519150601f19603f3d011682016040523d82523d6000602084013e61427a565b606091505b50915091506127d286838360608261429a57614295826142e1565b61093f565b81511580156142b157506001600160a01b0384163b155b156142da57604051639996b31560e01b81526001600160a01b038516600482015260240161398a565b508061093f565b8051156142f15780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061431e61435c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561224c57600080fd5b6000806000606084860312156143e457600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561440957600080fd5b614415868287016143bd565b9150509250925092565b6000806000806080858703121561443557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561446157600080fd5b61446d878288016143bd565b91505092959194509250565b60006020828403121561448b57600080fd5b81356001600160a01b038116811461093f57600080fd5b801515811461046057600080fd5b6000602082840312156144c257600080fd5b813561093f816144a2565b634e487b7160e01b600052601160045260246000fd5b8082018082111561109b5761109b6144cd565b81810360008312801583831316838312821617156121a9576121a96144cd565b634e487b7160e01b600052601260045260246000fd5b60008261453b5761453b614516565b500690565b8181038181111561109b5761109b6144cd565b6001600160701b038181168382160190808211156121a9576121a96144cd565b6001600160801b038181168382160190808211156121a9576121a96144cd565b6001600160801b038281168282160390808211156121a9576121a96144cd565b808202811582820484141761109b5761109b6144cd565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561109b5761109b6144cd565b600081600f0b60016001607f1b03198103614614576146146144cd565b60000392915050565b6000808335601e1984360301811261463457600080fd5b83018035915067ffffffffffffffff82111561464f57600080fd5b60200191503681900382131561244357600080fd5b60006020828403121561467657600080fd5b5051919050565b6000600160ff1b8201614692576146926144cd565b5060000390565b80820182811260008312801582168215821617156146b9576146b96144cd565b505092915050565b6000826146d0576146d0614516565b600160ff1b8214600019841416156146ea576146ea6144cd565b500590565b60006020828403121561470157600080fd5b815161093f816144a2565b6000825160005b8181101561472d5760208186018101518583015201614713565b50600092019182525091905056fea264697066735822122024bd68fee66d581192185bace8e1eccffbe5528fdd3ad14f1b85b4ddf8fcebae64736f6c63430008140033',
    methodIdentifiers: {
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9"
    }
};
