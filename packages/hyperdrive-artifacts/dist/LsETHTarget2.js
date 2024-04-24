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
    bytecode: '0x6102406040523480156200001257600080fd5b50604051620049fe380380620049fe8339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516145f26200040c60003960005050600050506000818160d3015281816102470152611bf0015260008181610fde0152818161104101528181611bca015281816122430152818161227f01526124e8015260008181610e4801528181610e980152611ba4015260006115e801526000818161170e01528181611e8f0152611f08015260008181610710015281816116e20152611edc01526000611e55015260008181610e2601528181610eb90152611c1601526000818161064b01528181610f4101528181611d6401526126390152600081816104f10152818161057e01526105e30152600081816114890152818161215601526121b50152600050506145f26000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063cbc134341461003b578063ded0623114610068575b600080fd5b61004e610049366004614250565b610089565b604080519283526020830191909152015b60405180910390f35b61007b6100763660046142a0565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610232565b90505b949350505050565b6000806100c861046f565b6100d183610499565b7f00000000000000000000000000000000000000000000000000000000000000008510156101125760405163211ddda360e11b815260040160405180910390fd5b600061011c6104d2565b90506101316101296104ea565b826004610520565b5061013e600033886109b5565b610159600360f81b61015360208701876142fa565b88610a8f565b600061017461016b60208701876142fa565b88848989610b2f565b90945090506101838188614339565b9250600061019083610c72565b5090506101a060208701876142fa565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a6101d789888c610d62565b6101e28a898d610d91565b6101f260408d0160208e0161435a565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a350505061009c6001600055565b600061023c61046f565b61024582610499565b7f00000000000000000000000000000000000000000000000000000000000000008410156102865760405163211ddda360e11b815260040160405180910390fd5b60006102906104d2565b9050854210156102ab576102a56101296104ea565b506102b9565b6102b786826004610520565b505b6102ce6102c7600188610db9565b33876109b5565b60008060008060006102e18a878d610dee565b9450945094509450945060008b90508b4210156103785781600b600082825461030a9190614377565b9091555061031d90508b87868685610fc7565b6000610328826111bd565b90506103466103368d611207565b610340908361438a565b82611235565b6000610351896112e8565b90508061037157604051638bdf918d60e01b815260040160405180910390fd5b505061038f565b61038285886112f5565b945061038d876112e8565b505b600061039c86898c6113d6565b90508a8110156103bf5760405163c972651760e01b815260040160405180910390fd5b8b888b6103cd600186610db9565b6103da60208301836142fa565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610411898888610d62565b61041c8a8989610d91565b61042c6040890160208a0161435a565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100b56001600055565b60026000540361049257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104a860208301836142fa565b6001600160a01b0316036104cf5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006104e5670de0b6b3a7640000611470565b905090565b60006105167f0000000000000000000000000000000000000000000000000000000000000000426143c8565b6104e59042614339565b600083815260076020526040812080546001600160801b031615158061054557504285115b1561055b57546001600160801b031690506109ae565b6000806105666104ea565b905080870361057757859150610611565b60006105a37f000000000000000000000000000000000000000000000000000000000000000089614377565b90505b6000818152600760205260409020546001600160801b0316925081811480156105cd575082155b156105d6578692505b8260000361060f576106087f000000000000000000000000000000000000000000000000000000000000000082614377565b90506105a6565b505b61061a826114fd565b83546001600160801b0319166001600160801b039190911617835561063e86611527565b50600090506007816106707f00000000000000000000000000000000000000000000000000000000000000008b614339565b815260208101919091526040016000908120546001600160801b0316915061069960028a610db9565b6000818152600e60205260408120549192508a8a83156107df57600192506000806106c886898c8660006116cb565b9150915080600b60008282546106de9190614377565b909155506106fa9050866000846106f481611207565b8861179a565b6107048183614377565b915061073486838a8d877f0000000000000000000000000000000000000000000000000000000000000000611914565b9150610748610743838561195e565b611973565b600580546002906107699084906201000090046001600160701b03166143dc565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610796826114fd565b600580546010906107b8908490600160801b90046001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006107ec600184610db9565b6000818152600e602052604090205490915080156108fb5760019450600080610819838b8e8860016116cb565b9150915080600b600082825461082f9190614377565b9091555061084b90508360008461084581611207565b8a610fc7565b6108558183614339565b9150610864610743838761195e565b600580546002906108859084906201000090046001600160701b03166143dc565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108b2826114fd565b600580546010906108d4908490600160801b90046001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109335761092761090d87611207565b61091683611207565b610920919061441c565b6000611235565b6109318e8e61199d565b505b600061093e8f610c72565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610997959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b03861684529091529020548111156109f857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a3b908490614339565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ac1908490614377565b90915550506000838152600e602052604081208054839290610ae4908490614377565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610a82565b600080610b3b856112e8565b505060065485906001600160801b031680821115610b6057806001600160801b031691505b81600003610b75576000809250925050610c68565b610b84600360f81b89846109b5565b600654600090610baa9084906001600160801b03600160801b9091048116908516611b28565b9050610bb5836114fd565b610bbf908361443c565b600680546001600160801b0319166001600160801b0392909216919091179055610be8816114fd565b60068054601090610c0a908490600160801b90046001600160801b031661443c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c398188876113d6565b9350610c458684611b46565b841015610c655760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610c89610c8486611b5b565b611c95565b9150915080610c9f575060009485945092505050565b6000808611610caf576000610cb9565b610cb9838761195e565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d249190614377565b610d2e9190614339565b905080600003610d475750600096879650945050505050565b6000610d538383611d22565b98600198509650505050505050565b6000610d74604083016020840161435a565b15610d805750826109ae565b610d8a848461195e565b90506109ae565b6000610da3604083016020840161435a565b15610db257610d8a8484611d22565b50826109ae565b60006001600160f81b03821115610de35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e0288611d37565b9050610e6c610e0f611d88565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611da9565b909850965091506000808080610edd610e83611d88565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e19565b90508c610eec8f878484611e30565b9a509196509094509250610f008486614339565b610f0a9088614339565b9650610f168386614377565b610f20908c614339565b9a50610f2c888c614377565b9950505050505050610fb285858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610f6b9190614339565b81526020810191909152604001600020546001600160801b0316428d11610fa95760008d8152600760205260409020546001600160801b0316610fab565b8d5b6001611f44565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061100957507f00000000000000000000000000000000000000000000000000000000000000006110078583614339565b105b1561101657611016611fe3565b6003549084900390600f0b61102b848261441c565b90508361103786611207565b13801561106c57507f000000000000000000000000000000000000000000000000000000000000000061106a8383611ffc565b105b1561107957611079611fe3565b600254600160801b90046001600160801b03166110c06110bb826110a5670de0b6b3a76400008861445c565b6004546001600160801b031691908c6000612022565b6114fd565b600480546001600160801b0319166001600160801b03929092169190911790556110ea8882614339565b90506110f5816114fd565b600280546001600160801b03928316600160801b02921691909117905561111b836114fd565b600180546001600160801b0319166001600160801b0392909216919091179055611144826120eb565b600380546001600160801b0319166001600160801b039290921691909117905561116d876114fd565b6001805460109061118f908490600160801b90046001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006111e5600e60006111d1600286610db9565b815260200190815260200160002054611207565b6111f7600e60006111d1600187610db9565b611201919061441c565b92915050565b60006001600160ff1b038211156112315760405163396ea70160e11b815260040160405180910390fd5b5090565b600061125e6112448483612127565b61124f846000612127565b611259919061441c565b6120eb565b9050600081600f0b13156112b3576002805482919060009061128a9084906001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112e3576112c881614473565b6002805460009061128a9084906001600160801b031661443c565b505050565b600061120182600461199d565b600080600061130384611527565b90925090506000611314868661195e565b90508183111561132c57611329868385611b28565b95505b8281101561133e578083039250611343565b600092505b61134c83611973565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561139f578690036113a3565b5060005b6113ac816114fd565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806113e3858561195e565b90506113ee8161213d565b9450846000036114025760009150506109ae565b611412604084016020850161435a565b156114415761143a8561142860208601866142fa565b6114356040870187614499565b61218d565b9150611468565b6114648561145260208601866142fa565b61145f6040870187614499565b6121a8565b8491505b509392505050565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f02906024015b602060405180830381865afa1580156114d9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120191906144e0565b60006001600160801b0382111561123157604051630f0af95160e11b815260040160405180910390fd5b600554600090819061154a908490600160801b90046001600160801b031661195e565b6005546201000090046001600160701b031692509050818111156116c65760006115748383614339565b90506115836110bb82866121e2565b600580546010906115a5908490600160801b90046001600160801b031661443c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115de8583611d2290919063ffffffff16565b9050600061160c827f000000000000000000000000000000000000000000000000000000000000000061195e565b905080600b60008282546116209190614377565b9091555061163090508183614339565b915061163b826114fd565b600180546000906116569084906001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611683826121f7565b60038054600090611698908490600f0b6144f9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806116d88785611d22565b91506000611706837f000000000000000000000000000000000000000000000000000000000000000061195e565b9050611732817f000000000000000000000000000000000000000000000000000000000000000061195e565b91508315611755576117448282614339565b61174e9084614339565b925061176c565b61175f8282614339565b6117699084614377565b92505b8686101561178f5761177f838789611b28565b925061178c828789611b28565b91505b509550959350505050565b600354600160801b90046001600160801b03166117e36110bb826117c6670de0b6b3a76400008661445c565b600454600160801b90046001600160801b031691908a6000612022565b600480546001600160801b03928316600160801b029216919091179055611809866114fd565b611813908261443c565b600380546001600160801b03928316600160801b029216919091179055611839846114fd565b600180546000906118549084906001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611881836120eb565b60038054600090611896908490600f0b6144f9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506118c6856114fd565b600180546010906118e8908490600160801b90046001600160801b031661443c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061192c846119268a888a611b28565b90611d22565b9050611939888486611b28565b6119439082614377565b9050868111156119535786810391505b509695505050505050565b60006109ae8383670de0b6b3a7640000611b28565b60006001600160701b038211156112315760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916119e8916001600160801b031690614339565b9050806000036119fc576001915050611201565b6000611a0785612221565b905080600003611a1c57600192505050611201565b600080611a2a8385896122c3565b9150915080611a40576000945050505050611201565b600080611a4d84896123c9565b91509150611a6b611a5d82611207565b611a6690614526565b6124bb565b925082611a815760009650505050505050611201565b611a8a826114fd565b60068054600090611aa59084906001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ad2816114fd565b60068054601090611af4908490600160801b90046001600160801b03166143fc565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611b3f57600080fd5b5091020490565b60006109ae8383670de0b6b3a76400006125c8565b611b6361418b565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611c5b91166125ee565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611c8d929004166125ee565b905292915050565b6000806000806000611ca686612664565b9150915080611cbd57506000958695509350505050565b611cca8660a00151611207565b611cd387612984565b83611ce18960000151611207565b611ceb919061438a565b611cf5919061438a565b611cff919061441c565b925050506000811215611d185750600093849350915050565b9360019350915050565b60006109ae83670de0b6b3a764000084611b28565b600080611d426104ea565b9050808311611d52576000611d5c565b611d5c8184614339565b91506109ae827f0000000000000000000000000000000000000000000000000000000000000000611d22565b6001546003546000916104e5916001600160801b0390911690600f0b611ffc565b60008080611dca611dc288670de0b6b3a7640000614339565b899087611b28565b90508615611e0c57611ddc888861195e565b9150611dfd8a8a84611df68a670de0b6b3a7640000614339565b89896129e8565b9250611e098382614377565b90505b9750975097945050505050565b60006100b282611e2a858888611b28565b90612a0b565b6000808080611e878786611e808b611e7a611e538c670de0b6b3a7640000614339565b7f000000000000000000000000000000000000000000000000000000000000000090611b46565b90611b46565b91906125c8565b9350611eb3847f000000000000000000000000000000000000000000000000000000000000000061195e565b91506000611ed4611ecc89670de0b6b3a7640000614339565b8a90886125c8565b9050611f00817f0000000000000000000000000000000000000000000000000000000000000000611b46565b9350611f2c847f000000000000000000000000000000000000000000000000000000000000000061195e565b611f369084614377565b915050945094509450949050565b60008060008060008088881015611fb3578615611f6957611f668d898b611b28565b9c505b611f748c898b611b28565b9b50611f7f8b611207565b611f888d611207565b611f92919061441c565b9050611f9f8b898b611b28565b9a50611fac8a898b611b28565b9950611fd2565b611fbc8b611207565b611fc58d611207565b611fcf919061441c565b90505b9b9c9a9b999a975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806120098484612a80565b90925090508061201b5761201b611fe3565b5092915050565b6000826000036120335750846120e2565b81156120a5576120646120468487614377565b612050858761195e565b61205a888a61195e565b6119269190614377565b905060006120728588612abc565b905060006120808689612acb565b9050818310156120925781925061209e565b8083111561209e578092505b50506120e2565b8285036120b4575060006120e2565b6120df6120c18487614339565b6120cb8587611b46565b6120d5888a61195e565b6119269190614339565b90505b95945050505050565b600060016001607f1b0319821280612109575060016001607f1b0382135b156112315760405163a5353be560e01b815260040160405180910390fd5b600081831361213657816109ae565b5090919050565b604051631e66865560e21b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063799a1954906024016114bc565b600060405163350b944160e11b815260040160405180910390fd5b6121dc6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612ada565b50505050565b60006109ae83670de0b6b3a7640000846125c8565b600060016001607f1b038211156112315760405163a5353be560e01b815260040160405180910390fd5b600254600090819061223c906001600160801b0316846121e2565b90506122687f000000000000000000000000000000000000000000000000000000000000000082614377565b6001546001600160801b031611156122bd576001547f0000000000000000000000000000000000000000000000000000000000000000906122b39083906001600160801b0316614339565b6109ae9190614339565b50919050565b6122cb6141ec565b6000806122d784611b5b565b905060006122e482611c95565b93509050826122f957506000915061009c9050565b600061232061231b84610160015185610140015161195e90919063ffffffff16565b611207565b61234061231b856101200151866101000151611b4690919063ffffffff16565b61234a919061441c565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806123e18660c001518760e00151612a80565b91509150806123f8576000809350935050506124b4565b60006124048784612b2c565b92509050811580612413575080155b1561242757600080945094505050506124b4565b60006124338883612c3b565b90508060000361244d5760008095509550505050506124b4565b8760600151811161246457945092506124b4915050565b50606087015160006124788986858b612d0c565b905080600003612493576000809650965050505050506124b4565b8281106124ab576000809650965050505050506124b4565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b9004168380808061250d8787877f00000000000000000000000000000000000000000000000000000000000000008d613221565b9350935093509350806125295750600098975050505050505050565b86841461255a57612539846114fd565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461258b5761256a836120eb565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146125b95761259b826114fd565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008260001904841183021582026125df57600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006126026104ea565b61260c919061445c565b905080831161261c576000612626565b6126268184614339565b91506109ae61265d670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061445c565b8390611d22565b600080600061268961231b85610160015186610140015161195e90919063ffffffff16565b6126a961231b866101200151876101000151611b4690919063ffffffff16565b6126b3919061441c565b90506000806126ca86600001518760200151612a80565b91509150806126e157506000958695509350505050565b6000831315612822576000839050600061272f886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006127209190614339565b8d606001518e60800151613339565b9350905082612748575060009788975095505050505050565b8181106127e6576000612782858a60400151858c60e00151670de0b6b3a76400006127739190614339565b8d606001518e60800151613445565b945090508315801561279757508860c0015183105b156127ae5750600098600198509650505050505050565b836127c457506000988998509650505050505050565b6127cd81611207565b6127d690614526565b9960019950975050505050505050565b600088602001511261280e576128058860a001518561231b9190614339565b610d5390614526565b60a088015188516128059161231b91614339565b600083121561297557600061283684614526565b9050600061286a8489604001518a60e00151670de0b6b3a764000061285b9190614339565b8b606001518c60800151613508565b9350905082612883575060009788975095505050505050565b8181106129085760006128bd858a60400151858c60e00151670de0b6b3a76400006128ae9190614339565b8d606001518e608001516135b1565b94509050831580156128d257508860c0015183105b156128e95750600098600198509650505050505050565b836128ff57506000988998509650505050505050565b6127d681611207565b600061293a858a604001518b60e00151670de0b6b3a764000061292b9190614339565b8c606001518d60800151613688565b945090508361295457506000988998509650505050505050565b6127d661296b8a6060015184866119269190614339565b61231b9083614377565b50600095600195509350505050565b60006129b761231b836101200151670de0b6b3a76400006129a59190614339565b606085015161010086015191906125c8565b6111f761231b846101600151670de0b6b3a76400006129d69190614339565b60608601516101408701519190611b28565b6000806129f9888888888888613445565b90925090508061195357611953611fe3565b600081600003612a245750670de0b6b3a7640000611201565b82600003612a3457506000611201565b6000612a3f83611207565b90506000612a54612a4f86611207565b613737565b9050818102612a6b670de0b6b3a764000082614542565b9050612a768161395d565b9695505050505050565b600080600083612a8f86611207565b612a99919061441c565b90506000811215612ab15760008092509250506124b4565b946001945092505050565b60008183116122bd57826109ae565b600081831161213657816109ae565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526112e3908490613af2565b60008060008460a0015112612b49575050608082015160016124b4565b60008460a00151612b5990614526565b90506000612b9585876101000151886000015160e00151670de0b6b3a7640000612b839190614339565b89516060810151608090910151613508565b93509050821580612ba4575080155b15612bb7576000809350935050506124b4565b6000612bc383836121e2565b9050670de0b6b3a76400008111612bff5780670de0b6b3a7640000039450612bf88760c001518661195e90919063ffffffff16565b9450612c0e565b600080945094505050506124b4565b8660800151851115612c2d5786608001516001945094505050506124b4565b506001925050509250929050565b600080612c718460c001518560e00151866101000151876000015160a00151612c6388611207565b612c6c90614526565b613221565b87516040810192909252602082019290925291909152905080612c98576000915050611201565b6000612ca78560000151611c95565b9250905081612cbb57600092505050611201565b84602001518110612cd157600092505050611201565b600085606001518660400151612ce79190614377565b9050612d0282876020015183611b289092919063ffffffff16565b612a769082614339565b60008085606001518660400151612d239190614377565b60208701516060880151919250600091612d3d9184611b28565b90508660a00151600003612d545791506100b59050565b60008080896004881015612d6757600497505b60005b888110156130c357612d7c868b612abc565b95506000612da58360c001518460e00151856101000151866000015160a00151612c638c611207565b86516040810192909252602082019290925291909152905080612dd3576000985050505050505050506100b5565b6000612de28e60000151611c95565b9250905081612dfd57600099505050505050505050506100b5565b612e0884828b613b5a565b15612e1e578799505050505050505050506100b5565b60008460a001511315612f8757835180516020820151604083015160a084015160e090940151600094612e7294939291612e6090670de0b6b3a7640000614339565b8a516060810151608090910151613339565b9350905082612e8e5760009a50505050505050505050506100b5565b808560a0015110612f8557612ea285613bc6565b909950925082612ebf5760009a50505050505050505050506100b5565b612ee48560c001518660e00151876101000151886000015160a00151612c638e611207565b88516040810192909252602082019290925291909152925082612f145760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612f449490612e6090670de0b6b3a7640000614339565b9350905082612f605760009a50505050505050505050506100b5565b8e60a001518111612f7d57889a50505050505050505050506100b5565b505050612d6a565b505b6000612f98858f8760a00151613c9c565b93509050821580612fb15750670de0b6b3a76400008110155b15612fc95760009a50505050505050505050506100b5565b80670de0b6b3a76400000390506000612ff661231b87604001518860200151611b4690919063ffffffff16565b61300361231b858e61195e565b61300d919061441c565b905088158061302b575061302089613ff7565b61302982613ff7565b125b1561303a578098508997508296505b6000811315613062576130518b6119268385611d22565b61305b908b614377565b99506130b4565b60008112156130ab57600061307c8c611926858186614526565b90508a81101561309057808b039a506130a5565b60009c505050505050505050505050506100b5565b506130b4565b505050506130c3565b84600101945050505050612d6a565b5060006130eb8260c001518360e00151846101000151856000015160a00151612c638b611207565b855160408101929092526020820192909252919091529050806131185760009750505050505050506100b5565b6000613127836000015161400f565b9050600061314961231b85604001518660200151611b4690919063ffffffff16565b61315661231b848c61195e565b613160919061441c565b905061316b87613ff7565b61317482613ff7565b1215613181578795508194505b6131a861319c655af3107a4000670de0b6b3a7640000614339565b6020860151908b6125c8565b60408501516131b8908790611d22565b10806131f857506131e66131da655af3107a4000670de0b6b3a7640000614377565b6020860151908b611b28565b60408501516131f69087906121e2565b115b1561320f57600099505050505050505050506100b5565b50939c9b505050505050505050505050565b600080600080846000036132405750879250869150859050600161332d565b60008561324c8b611207565b613256919061438a565b905061326187611207565b81121561327c5760008060008094509450945094505061332d565b8094506000891261329c5761329561231b868b8d611b28565b93506132bf565b6132b361231b6132ab8b614526565b87908d6125c8565b6132bc90614526565b93505b6000806132cc8c8c612a80565b91509150806132eb57600080600080965096509650965050505061332d565b60006132f78888612a80565b92509050816133175760008060008097509750975097505050505061332d565b6133228b8285611b28565b955060019450505050505b95509550955095915050565b600080600088121561335b5761334e88614526565b6133589087614377565b95505b6000806133688b8b612a80565b915091508061337f57600080935093505050613439565b600061338e838b8a8a8a61403f565b905060006133ab6133a38a611e2a8a8e611b46565b8990896125c8565b9050808210156133c5576000809550955050505050613439565b808203670de0b6b3a764000081106133fa576133f36133ec670de0b6b3a76400008c611d22565b8290612a0b565b9050613412565b61340f6133ec670de0b6b3a76400008c6121e2565b90505b8b81101561342b57600080965096505050505050613439565b8b9003955060019450505050505b97509795505050505050565b6000806000613457898988888861406e565b905061346786611e2a898b614377565b97508781101561347e5760008092509250506134fd565b87810361348c8186886125c8565b9050670de0b6b3a764000081106134b9576134b26133ec670de0b6b3a7640000896121e2565b90506134d1565b6134ce6133ec670de0b6b3a764000089611d22565b90505b6134db81866121e2565b9050808a10156134f3576000809350935050506134fd565b8903925060019150505b965096945050505050565b600080600061351a888888888861406e565b90506000613545670de0b6b3a76400006135348888611d22565b61353e9190614377565b83906121e2565b9050670de0b6b3a764000081106135725761356b6133ec670de0b6b3a7640000896121e2565b905061358a565b6135876133ec670de0b6b3a764000089611d22565b90505b808810156135a057600080935093505050610c68565b909603976001975095505050505050565b60008060006135c3898988888861406e565b9050868810156135da5760008092509250506134fd565b96869003966135e98887612a0b565b9750878110156136005760008092509250506134fd565b87810361360e8186886125c8565b9050670de0b6b3a7640000811061363b576136346133ec670de0b6b3a7640000896121e2565b9050613653565b6136506133ec670de0b6b3a764000089611d22565b90505b61365d81866121e2565b905089811015613675576000809350935050506134fd565b9890980398600198509650505050505050565b600080600061369a888888888861403f565b905060006136be670de0b6b3a76400006136b488886121e2565b61265d9190614377565b9050670de0b6b3a764000081106136eb576136e46133ec670de0b6b3a764000089611d22565b9050613703565b6137006133ec670de0b6b3a7640000896121e2565b90505b61370d8186611d22565b90508881101561372557600080935093505050610c68565b97909703976001975095505050505050565b60008082136137595760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906137dc9084901c611207565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361397857506000919050565b680755bf798b4a1bf1e582126139a1576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612a7674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611207565b6000613b076001600160a01b03841683614093565b90508051600014158015613b2c575080806020019051810190613b2a9190614570565b155b156112e357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6020830151600090613b6c90846121e2565b6040850151613b7c908490611d22565b101580156100b557506020840151613bac9084613ba5633b9aca00670de0b6b3a7640000614377565b9190611b28565b6040850151613bbc9084906121e2565b1115949350505050565b60008060008360e0015113613be057506000928392509050565b6000613bef8460000151612984565b90506000613c1b856040015186606001518760400151613c0f9190614377565b602088015191906125c8565b905060008212613c425780821015613c3557819003613c58565b5060009485945092505050565b613c4b82614526565b613c559082614377565b90505b60e085015160c0860151613c6d9183906125c8565b9050808560c001511015613c88575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613cc057855160400151613cb9908590614377565b9050613cfb565b6000613ccb85614526565b875160400151909150811015613ceb578651604001518190039150613cf9565b60008093509350505061009c565b505b855180516020909101516000918291613d149190612a80565b9150915080613d2c576000809450945050505061009c565b875160e0810151604090910151600091613d6191613d5591613d4e9190612a0b565b8a9061195e565b6101008b0151906121e2565b895160e0810151608090910151613d8c91613d8091611e2a908861195e565b8b5160600151906121e2565b613d969190614377565b90506000613dce613dc2613dbb8c6000015160e0015188612a0b90919063ffffffff16565b8b90611b46565b6101008c015190611d22565b905080821015613de95760008096509650505050505061009c565b80820391506000613e2b858c60000151604001518d6000015160e00151670de0b6b3a7640000613e199190614339565b8e51606081015160809091015161406e565b90506000613e558c6000015160e00151670de0b6b3a7640000613e4e9190614339565b8890612a0b565b905080821015613e7257600080985098505050505050505061009c565b8b51608081015160609091015191830391613e8e9183916125c8565b9050670de0b6b3a76400008110613ed2578b5160e00151613ecb906133ec90613ebf90670de0b6b3a7640000614339565b8e5160e00151906121e2565b9050613f01565b8b5160e00151613efe906133ec90613ef290670de0b6b3a7640000614339565b8e5160e0015190611d22565b90505b8b5160600151613f1490859083906125c8565b935083670de0b6b3a76400001115613f385783670de0b6b3a7640000039350613f4c565b60006001985098505050505050505061009c565b60008c60e0015112613faf5760c08c015160e08d0151613f6b916121e2565b9250670de0b6b3a7640000831115613f9057600080985098505050505050505061009c565b670de0b6b3a76400009290920391613fa8848461195e565b9350613fe4565b613fe1613fc88d60c001518e60e0015161192690614526565b613fda90670de0b6b3a7640000614377565b859061195e565b93505b50919a60019a5098505050505050505050565b60008082126140065781611201565b61120182614526565b600080600061401d84611c95565b915091508061201b57604051635516328b60e11b815260040160405180910390fd5b600061404b8585612a0b565b61406461405c86611e2a868b61195e565b859085611b28565b6120df9190614377565b600061407a8585612a0b565b61406461408b86611e2a868b611b46565b8590856125c8565b60606109ae8383600084600080856001600160a01b031684866040516140b9919061458d565b60006040518083038185875af1925050503d80600081146140f6576040519150601f19603f3d011682016040523d82523d6000602084013e6140fb565b606091505b5091509150612a7686838360608261411b5761411682614162565b6109ae565b815115801561413257506001600160a01b0384163b155b1561415b57604051639996b31560e01b81526001600160a01b0385166004820152602401613b51565b50806109ae565b8051156141725780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061420061418b565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156122bd57600080fd5b60008060006060848603121561426557600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561428a57600080fd5b6142968682870161423e565b9150509250925092565b600080600080608085870312156142b657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156142e257600080fd5b6142ee8782880161423e565b91505092959194509250565b60006020828403121561430c57600080fd5b81356001600160a01b03811681146109ae57600080fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561120157611201614323565b80151581146104cf57600080fd5b60006020828403121561436c57600080fd5b81356109ae8161434c565b8082018082111561120157611201614323565b80820182811260008312801582168215821617156143aa576143aa614323565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826143d7576143d76143b2565b500690565b6001600160701b0381811683821601908082111561201b5761201b614323565b6001600160801b0381811683821601908082111561201b5761201b614323565b818103600083128015838313168383128216171561201b5761201b614323565b6001600160801b0382811682821603908082111561201b5761201b614323565b808202811582820484141761120157611201614323565b600081600f0b60016001607f1b0319810361449057614490614323565b60000392915050565b6000808335601e198436030181126144b057600080fd5b83018035915067ffffffffffffffff8211156144cb57600080fd5b6020019150368190038213156124b457600080fd5b6000602082840312156144f257600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561120157611201614323565b6000600160ff1b820161453b5761453b614323565b5060000390565b600082614551576145516143b2565b600160ff1b82146000198414161561456b5761456b614323565b500590565b60006020828403121561458257600080fd5b81516109ae8161434c565b6000825160005b818110156145ae5760208186018101518583015201614594565b50600092019182525091905056fea26469706673582212204c3e37796a9202413494ba7fa54a88385958f30f4eb22bec87d6f8de4d88490064736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
