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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004c2238038062004c228339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516147f36200042f60003960005050600050506000818160d3015281816102470152611c5e015260008181610fde0152818161104101528181611c38015281816126250152818161266101526128ca015260008181610e4801528181610e980152611c120152600061165601526000818161177c01528181611efd0152611f76015260008181610710015281816117500152611f4a01526000611ec3015260008181610e2601528181610eb90152611c8401526000818161064b01528181610f4101528181611dd20152612a1b0152600081816104f10152818161057e01526105e30152600050506000818161148b015281816114d4015281816121c60152818161220f015281816122ea0152818161239601528181612482015261252e01526147f36000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063cbc134341461003b578063ded0623114610068575b600080fd5b61004e610049366004614480565b610089565b604080519283526020830191909152015b60405180910390f35b61007b6100763660046144d0565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610232565b90505b949350505050565b6000806100c861046f565b6100d183610499565b7f00000000000000000000000000000000000000000000000000000000000000008510156101125760405163211ddda360e11b815260040160405180910390fd5b600061011c6104d2565b90506101316101296104ea565b826004610520565b5061013e600033886109b5565b610159600360f81b610153602087018761452a565b88610a8f565b600061017461016b602087018761452a565b88848989610b2f565b90945090506101838188614569565b9250600061019083610c72565b5090506101a0602087018761452a565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a6101d789888c610d62565b6101e28a898d610d91565b6101f260408d0160208e0161458a565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a350505061009c6001600055565b600061023c61046f565b61024582610499565b7f00000000000000000000000000000000000000000000000000000000000000008410156102865760405163211ddda360e11b815260040160405180910390fd5b60006102906104d2565b9050854210156102ab576102a56101296104ea565b506102b9565b6102b786826004610520565b505b6102ce6102c7600188610db9565b33876109b5565b60008060008060006102e18a878d610dee565b9450945094509450945060008b90508b4210156103785781600b600082825461030a91906145a7565b9091555061031d90508b87868685610fc7565b6000610328826111bd565b90506103466103368d611207565b61034090836145ba565b82611235565b6000610351896112e8565b90508061037157604051638bdf918d60e01b815260040160405180910390fd5b505061038f565b61038285886112f5565b945061038d876112e8565b505b600061039c86898c6113d6565b90508a8110156103bf5760405163c972651760e01b815260040160405180910390fd5b8b888b6103cd600186610db9565b6103da602083018361452a565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610411898888610d62565b61041c8a8989610d91565b61042c6040890160208a0161458a565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100b56001600055565b60026000540361049257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104a8602083018361452a565b6001600160a01b0316036104cf5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006104e5670de0b6b3a7640000611470565b905090565b60006105167f0000000000000000000000000000000000000000000000000000000000000000426145f8565b6104e59042614569565b600083815260076020526040812080546001600160801b031615158061054557504285115b1561055b57546001600160801b031690506109ae565b6000806105666104ea565b905080870361057757859150610611565b60006105a37f0000000000000000000000000000000000000000000000000000000000000000896145a7565b90505b6000818152600760205260409020546001600160801b0316925081811480156105cd575082155b156105d6578692505b8260000361060f576106087f0000000000000000000000000000000000000000000000000000000000000000826145a7565b90506105a6565b505b61061a8261156b565b83546001600160801b0319166001600160801b039190911617835561063e86611595565b50600090506007816106707f00000000000000000000000000000000000000000000000000000000000000008b614569565b815260208101919091526040016000908120546001600160801b0316915061069960028a610db9565b6000818152600e60205260408120549192508a8a83156107df57600192506000806106c886898c866000611739565b9150915080600b60008282546106de91906145a7565b909155506106fa9050866000846106f481611207565b88611808565b61070481836145a7565b915061073486838a8d877f0000000000000000000000000000000000000000000000000000000000000000611982565b915061074861074383856119cc565b6119e1565b600580546002906107699084906201000090046001600160701b031661460c565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107968261156b565b600580546010906107b8908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006107ec600184610db9565b6000818152600e602052604090205490915080156108fb5760019450600080610819838b8e886001611739565b9150915080600b600082825461082f91906145a7565b9091555061084b90508360008461084581611207565b8a610fc7565b6108558183614569565b915061086461074383876119cc565b600580546002906108859084906201000090046001600160701b031661460c565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108b28261156b565b600580546010906108d4908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109335761092761090d87611207565b61091683611207565b610920919061464c565b6000611235565b6109318e8e611a0b565b505b600061093e8f610c72565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610997959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b03861684529091529020548111156109f857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a3b908490614569565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ac19084906145a7565b90915550506000838152600e602052604081208054839290610ae49084906145a7565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610a82565b600080610b3b856112e8565b505060065485906001600160801b031680821115610b6057806001600160801b031691505b81600003610b75576000809250925050610c68565b610b84600360f81b89846109b5565b600654600090610baa9084906001600160801b03600160801b9091048116908516611b96565b9050610bb58361156b565b610bbf908361466c565b600680546001600160801b0319166001600160801b0392909216919091179055610be88161156b565b60068054601090610c0a908490600160801b90046001600160801b031661466c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c398188876113d6565b9350610c458684611bb4565b841015610c655760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610c89610c8486611bc9565b611d03565b9150915080610c9f575060009485945092505050565b6000808611610caf576000610cb9565b610cb983876119cc565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d2491906145a7565b610d2e9190614569565b905080600003610d475750600096879650945050505050565b6000610d538383611d90565b98600198509650505050505050565b6000610d74604083016020840161458a565b15610d805750826109ae565b610d8a84846119cc565b90506109ae565b6000610da3604083016020840161458a565b15610db257610d8a8484611d90565b50826109ae565b60006001600160f81b03821115610de35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e0288611da5565b9050610e6c610e0f611df6565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611e17565b909850965091506000808080610edd610e83611df6565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e87565b90508c610eec8f878484611e9e565b9a509196509094509250610f008486614569565b610f0a9088614569565b9650610f1683866145a7565b610f20908c614569565b9a50610f2c888c6145a7565b9950505050505050610fb285858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610f6b9190614569565b81526020810191909152604001600020546001600160801b0316428d11610fa95760008d8152600760205260409020546001600160801b0316610fab565b8d5b6001611fb2565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061100957507f00000000000000000000000000000000000000000000000000000000000000006110078583614569565b105b1561101657611016612051565b6003549084900390600f0b61102b848261464c565b90508361103786611207565b13801561106c57507f000000000000000000000000000000000000000000000000000000000000000061106a838361206a565b105b1561107957611079612051565b600254600160801b90046001600160801b03166110c06110bb826110a5670de0b6b3a76400008861468c565b6004546001600160801b031691908c6000612090565b61156b565b600480546001600160801b0319166001600160801b03929092169190911790556110ea8882614569565b90506110f58161156b565b600280546001600160801b03928316600160801b02921691909117905561111b8361156b565b600180546001600160801b0319166001600160801b039290921691909117905561114482612159565b600380546001600160801b0319166001600160801b039290921691909117905561116d8761156b565b6001805460109061118f908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006111e5600e60006111d1600286610db9565b815260200190815260200160002054611207565b6111f7600e60006111d1600187610db9565b611201919061464c565b92915050565b60006001600160ff1b038211156112315760405163396ea70160e11b815260040160405180910390fd5b5090565b600061125e6112448483612195565b61124f846000612195565b611259919061464c565b612159565b9050600081600f0b13156112b3576002805482919060009061128a9084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112e3576112c8816146a3565b6002805460009061128a9084906001600160801b031661466c565b505050565b6000611201826004611a0b565b600080600061130384611595565b9092509050600061131486866119cc565b90508183111561132c57611329868385611b96565b95505b8281101561133e578083039250611343565b600092505b61134c836119e1565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561139f578690036113a3565b5060005b6113ac8161156b565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806113e385856119cc565b90506113ee816121ab565b9450846000036114025760009150506109ae565b611412604084016020850161458a565b156114415761143a85611428602086018661452a565b61143560408701876146c9565b612294565b9150611468565b61146485611452602086018661452a565b61145f60408701876146c9565b61242e565b8491505b509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016114bf57504761154a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611523573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115479190614710565b90505b60125460000361155b5760006109ae565b6012546109ae9084908390611b96565b60006001600160801b0382111561123157604051630f0af95160e11b815260040160405180910390fd5b60055460009081906115b8908490600160801b90046001600160801b03166119cc565b6005546201000090046001600160701b031692509050818111156117345760006115e28383614569565b90506115f16110bb82866125c4565b60058054601090611613908490600160801b90046001600160801b031661466c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061164c8583611d9090919063ffffffff16565b9050600061167a827f00000000000000000000000000000000000000000000000000000000000000006119cc565b905080600b600082825461168e91906145a7565b9091555061169e90508183614569565b91506116a98261156b565b600180546000906116c49084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116f1826125d9565b60038054600090611706908490600f0b614729565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117468785611d90565b91506000611774837f00000000000000000000000000000000000000000000000000000000000000006119cc565b90506117a0817f00000000000000000000000000000000000000000000000000000000000000006119cc565b915083156117c3576117b28282614569565b6117bc9084614569565b92506117da565b6117cd8282614569565b6117d790846145a7565b92505b868610156117fd576117ed838789611b96565b92506117fa828789611b96565b91505b509550959350505050565b600354600160801b90046001600160801b03166118516110bb82611834670de0b6b3a76400008661468c565b600454600160801b90046001600160801b031691908a6000612090565b600480546001600160801b03928316600160801b0292169190911790556118778661156b565b611881908261466c565b600380546001600160801b03928316600160801b0292169190911790556118a78461156b565b600180546000906118c29084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118ef83612159565b60038054600090611904908490600f0b614729565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506119348561156b565b60018054601090611956908490600160801b90046001600160801b031661466c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061199a846119948a888a611b96565b90611d90565b90506119a7888486611b96565b6119b190826145a7565b9050868111156119c15786810391505b509695505050505050565b60006109ae8383670de0b6b3a7640000611b96565b60006001600160701b038211156112315760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611a56916001600160801b031690614569565b905080600003611a6a576001915050611201565b6000611a7585612603565b905080600003611a8a57600192505050611201565b600080611a988385896126a5565b9150915080611aae576000945050505050611201565b600080611abb84896127ab565b91509150611ad9611acb82611207565b611ad490614756565b61289d565b925082611aef5760009650505050505050611201565b611af88261156b565b60068054600090611b139084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b408161156b565b60068054601090611b62908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611bad57600080fd5b5091020490565b60006109ae8383670de0b6b3a76400006129aa565b611bd16143bb565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611cc991166129d0565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611cfb929004166129d0565b905292915050565b6000806000806000611d1486612a46565b9150915080611d2b57506000958695509350505050565b611d388660a00151611207565b611d4187612d66565b83611d4f8960000151611207565b611d5991906145ba565b611d6391906145ba565b611d6d919061464c565b925050506000811215611d865750600093849350915050565b9360019350915050565b60006109ae83670de0b6b3a764000084611b96565b600080611db06104ea565b9050808311611dc0576000611dca565b611dca8184614569565b91506109ae827f0000000000000000000000000000000000000000000000000000000000000000611d90565b6001546003546000916104e5916001600160801b0390911690600f0b61206a565b60008080611e38611e3088670de0b6b3a7640000614569565b899087611b96565b90508615611e7a57611e4a88886119cc565b9150611e6b8a8a84611e648a670de0b6b3a7640000614569565b8989612dca565b9250611e7783826145a7565b90505b9750975097945050505050565b60006100b282611e98858888611b96565b90612ded565b6000808080611ef58786611eee8b611ee8611ec18c670de0b6b3a7640000614569565b7f000000000000000000000000000000000000000000000000000000000000000090611bb4565b90611bb4565b91906129aa565b9350611f21847f00000000000000000000000000000000000000000000000000000000000000006119cc565b91506000611f42611f3a89670de0b6b3a7640000614569565b8a90886129aa565b9050611f6e817f0000000000000000000000000000000000000000000000000000000000000000611bb4565b9350611f9a847f00000000000000000000000000000000000000000000000000000000000000006119cc565b611fa490846145a7565b915050945094509450949050565b60008060008060008088881015612021578615611fd757611fd48d898b611b96565b9c505b611fe28c898b611b96565b9b50611fed8b611207565b611ff68d611207565b612000919061464c565b905061200d8b898b611b96565b9a5061201a8a898b611b96565b9950612040565b61202a8b611207565b6120338d611207565b61203d919061464c565b90505b9b9c9a9b999a975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806120778484612e62565b90925090508061208957612089612051565b5092915050565b6000826000036120a1575084612150565b8115612113576120d26120b484876145a7565b6120be85876119cc565b6120c8888a6119cc565b61199491906145a7565b905060006120e08588612e9e565b905060006120ee8689612ead565b9050818310156121005781925061210c565b8083111561210c578092505b5050612150565b82850361212257506000612150565b61214d61212f8487614569565b6121398587611bb4565b612143888a6119cc565b6119949190614569565b90505b95945050505050565b600060016001607f1b0319821280612177575060016001607f1b0382135b156112315760405163a5353be560e01b815260040160405180910390fd5b60008183136121a457816109ae565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016121fa575047612285565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561225e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122829190614710565b90505b6012546109ae90849083611b96565b600060125485116122a557846122a9565b6012545b945060006122b686611470565b905085601260008282546122ca9190614569565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612370576040516001600160a01b038716908390600081818185875af1925050503d8060008114612360576040519150601f19603f3d011682016040523d82523d6000602084013e612365565b606091505b505080915050612406565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156123df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124039190614772565b90505b80612424576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601254841161243d5783612441565b6012545b9350600061244e85611470565b905084601260008282546124629190614569565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612508576040516001600160a01b038616908390600081818185875af1925050503d80600081146124f8576040519150601f19603f3d011682016040523d82523d6000602084013e6124fd565b606091505b50508091505061259e565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061259b9190614772565b90505b806125bc576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006109ae83670de0b6b3a7640000846129aa565b600060016001607f1b038211156112315760405163a5353be560e01b815260040160405180910390fd5b600254600090819061261e906001600160801b0316846125c4565b905061264a7f0000000000000000000000000000000000000000000000000000000000000000826145a7565b6001546001600160801b0316111561269f576001547f0000000000000000000000000000000000000000000000000000000000000000906126959083906001600160801b0316614569565b6109ae9190614569565b50919050565b6126ad61441c565b6000806126b984611bc9565b905060006126c682611d03565b93509050826126db57506000915061009c9050565b60006127026126fd8461016001518561014001516119cc90919063ffffffff16565b611207565b6127226126fd856101200151866101000151611bb490919063ffffffff16565b61272c919061464c565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806127c38660c001518760e00151612e62565b91509150806127da57600080935093505050612896565b60006127e68784612ebc565b925090508115806127f5575080155b156128095760008094509450505050612896565b60006128158883612fcb565b90508060000361282f576000809550955050505050612896565b876060015181116128465794509250612896915050565b506060870151600061285a8986858b61309c565b90508060000361287557600080965096505050505050612896565b82811061288d57600080965096505050505050612896565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806128ef8787877f00000000000000000000000000000000000000000000000000000000000000008d6135b1565b93509350935093508061290b5750600098975050505050505050565b86841461293c5761291b8461156b565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461296d5761294c83612159565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461299b5761297d8261156b565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008260001904841183021582026129c157600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006129e46104ea565b6129ee919061468c565b90508083116129fe576000612a08565b612a088184614569565b91506109ae612a3f670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061468c565b8390611d90565b6000806000612a6b6126fd8561016001518661014001516119cc90919063ffffffff16565b612a8b6126fd866101200151876101000151611bb490919063ffffffff16565b612a95919061464c565b9050600080612aac86600001518760200151612e62565b9150915080612ac357506000958695509350505050565b6000831315612c045760008390506000612b11886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612b029190614569565b8d606001518e608001516136c9565b9350905082612b2a575060009788975095505050505050565b818110612bc8576000612b64858a60400151858c60e00151670de0b6b3a7640000612b559190614569565b8d606001518e608001516137d5565b9450905083158015612b7957508860c0015183105b15612b905750600098600198509650505050505050565b83612ba657506000988998509650505050505050565b612baf81611207565b612bb890614756565b9960019950975050505050505050565b6000886020015112612bf057612be78860a00151856126fd9190614569565b610d5390614756565b60a08801518851612be7916126fd91614569565b6000831215612d57576000612c1884614756565b90506000612c4c8489604001518a60e00151670de0b6b3a7640000612c3d9190614569565b8b606001518c60800151613898565b9350905082612c65575060009788975095505050505050565b818110612cea576000612c9f858a60400151858c60e00151670de0b6b3a7640000612c909190614569565b8d606001518e60800151613941565b9450905083158015612cb457508860c0015183105b15612ccb5750600098600198509650505050505050565b83612ce157506000988998509650505050505050565b612bb881611207565b6000612d1c858a604001518b60e00151670de0b6b3a7640000612d0d9190614569565b8c606001518d60800151613a18565b9450905083612d3657506000988998509650505050505050565b612bb8612d4d8a6060015184866119949190614569565b6126fd90836145a7565b50600095600195509350505050565b6000612d996126fd836101200151670de0b6b3a7640000612d879190614569565b606085015161010086015191906129aa565b6111f76126fd846101600151670de0b6b3a7640000612db89190614569565b60608601516101408701519190611b96565b600080612ddb8888888888886137d5565b9092509050806119c1576119c1612051565b600081600003612e065750670de0b6b3a7640000611201565b82600003612e1657506000611201565b6000612e2183611207565b90506000612e36612e3186611207565b613ac7565b9050818102612e4d670de0b6b3a76400008261478f565b9050612e5881613ced565b9695505050505050565b600080600083612e7186611207565b612e7b919061464c565b90506000811215612e93576000809250925050612896565b946001945092505050565b600081831161269f57826109ae565b60008183116121a457816109ae565b60008060008460a0015112612ed957505060808201516001612896565b60008460a00151612ee990614756565b90506000612f2585876101000151886000015160e00151670de0b6b3a7640000612f139190614569565b89516060810151608090910151613898565b93509050821580612f34575080155b15612f4757600080935093505050612896565b6000612f5383836125c4565b9050670de0b6b3a76400008111612f8f5780670de0b6b3a7640000039450612f888760c00151866119cc90919063ffffffff16565b9450612f9e565b60008094509450505050612896565b8660800151851115612fbd578660800151600194509450505050612896565b506001925050509250929050565b6000806130018460c001518560e00151866101000151876000015160a00151612ff388611207565b612ffc90614756565b6135b1565b87516040810192909252602082019290925291909152905080613028576000915050611201565b60006130378560000151611d03565b925090508161304b57600092505050611201565b8460200151811061306157600092505050611201565b60008560600151866040015161307791906145a7565b905061309282876020015183611b969092919063ffffffff16565b612e589082614569565b600080856060015186604001516130b391906145a7565b602087015160608801519192506000916130cd9184611b96565b90508660a001516000036130e45791506100b59050565b600080808960048810156130f757600497505b60005b888110156134535761310c868b612e9e565b955060006131358360c001518460e00151856101000151866000015160a00151612ff38c611207565b86516040810192909252602082019290925291909152905080613163576000985050505050505050506100b5565b60006131728e60000151611d03565b925090508161318d57600099505050505050505050506100b5565b61319884828b613e82565b156131ae578799505050505050505050506100b5565b60008460a00151131561331757835180516020820151604083015160a084015160e090940151600094613202949392916131f090670de0b6b3a7640000614569565b8a5160608101516080909101516136c9565b935090508261321e5760009a50505050505050505050506100b5565b808560a00151106133155761323285613eee565b90995092508261324f5760009a50505050505050505050506100b5565b6132748560c001518660e00151876101000151886000015160a00151612ff38e611207565b885160408101929092526020820192909252919091529250826132a45760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e0909401516132d494906131f090670de0b6b3a7640000614569565b93509050826132f05760009a50505050505050505050506100b5565b8e60a00151811161330d57889a50505050505050505050506100b5565b5050506130fa565b505b6000613328858f8760a00151613fc4565b935090508215806133415750670de0b6b3a76400008110155b156133595760009a50505050505050505050506100b5565b80670de0b6b3a764000003905060006133866126fd87604001518860200151611bb490919063ffffffff16565b6133936126fd858e6119cc565b61339d919061464c565b90508815806133bb57506133b08961431f565b6133b98261431f565b125b156133ca578098508997508296505b60008113156133f2576133e18b6119948385611d90565b6133eb908b6145a7565b9950613444565b600081121561343b57600061340c8c611994858186614756565b90508a81101561342057808b039a50613435565b60009c505050505050505050505050506100b5565b50613444565b50505050613453565b846001019450505050506130fa565b50600061347b8260c001518360e00151846101000151856000015160a00151612ff38b611207565b855160408101929092526020820192909252919091529050806134a85760009750505050505050506100b5565b60006134b78360000151614337565b905060006134d96126fd85604001518660200151611bb490919063ffffffff16565b6134e66126fd848c6119cc565b6134f0919061464c565b90506134fb8761431f565b6135048261431f565b1215613511578795508194505b61353861352c655af3107a4000670de0b6b3a7640000614569565b6020860151908b6129aa565b6040850151613548908790611d90565b1080613588575061357661356a655af3107a4000670de0b6b3a76400006145a7565b6020860151908b611b96565b60408501516135869087906125c4565b115b1561359f57600099505050505050505050506100b5565b50939c9b505050505050505050505050565b600080600080846000036135d0575087925086915085905060016136bd565b6000856135dc8b611207565b6135e691906145ba565b90506135f187611207565b81121561360c576000806000809450945094509450506136bd565b8094506000891261362c576136256126fd868b8d611b96565b935061364f565b6136436126fd61363b8b614756565b87908d6129aa565b61364c90614756565b93505b60008061365c8c8c612e62565b915091508061367b5760008060008096509650965096505050506136bd565b60006136878888612e62565b92509050816136a7576000806000809750975097509750505050506136bd565b6136b28b8285611b96565b955060019450505050505b95509550955095915050565b60008060008812156136eb576136de88614756565b6136e890876145a7565b95505b6000806136f88b8b612e62565b915091508061370f576000809350935050506137c9565b600061371e838b8a8a8a614367565b9050600061373b6137338a611e988a8e611bb4565b8990896129aa565b9050808210156137555760008095509550505050506137c9565b808203670de0b6b3a7640000811061378a5761378361377c670de0b6b3a76400008c611d90565b8290612ded565b90506137a2565b61379f61377c670de0b6b3a76400008c6125c4565b90505b8b8110156137bb576000809650965050505050506137c9565b8b9003955060019450505050505b97509795505050505050565b60008060006137e78989888888614396565b90506137f786611e98898b6145a7565b97508781101561380e57600080925092505061388d565b87810361381c8186886129aa565b9050670de0b6b3a764000081106138495761384261377c670de0b6b3a7640000896125c4565b9050613861565b61385e61377c670de0b6b3a764000089611d90565b90505b61386b81866125c4565b9050808a10156138835760008093509350505061388d565b8903925060019150505b965096945050505050565b60008060006138aa8888888888614396565b905060006138d5670de0b6b3a76400006138c48888611d90565b6138ce91906145a7565b83906125c4565b9050670de0b6b3a76400008110613902576138fb61377c670de0b6b3a7640000896125c4565b905061391a565b61391761377c670de0b6b3a764000089611d90565b90505b8088101561393057600080935093505050610c68565b909603976001975095505050505050565b60008060006139538989888888614396565b90508688101561396a57600080925092505061388d565b96869003966139798887612ded565b97508781101561399057600080925092505061388d565b87810361399e8186886129aa565b9050670de0b6b3a764000081106139cb576139c461377c670de0b6b3a7640000896125c4565b90506139e3565b6139e061377c670de0b6b3a764000089611d90565b90505b6139ed81866125c4565b905089811015613a055760008093509350505061388d565b9890980398600198509650505050505050565b6000806000613a2a8888888888614367565b90506000613a4e670de0b6b3a7640000613a4488886125c4565b612a3f91906145a7565b9050670de0b6b3a76400008110613a7b57613a7461377c670de0b6b3a764000089611d90565b9050613a93565b613a9061377c670de0b6b3a7640000896125c4565b90505b613a9d8186611d90565b905088811015613ab557600080935093505050610c68565b97909703976001975095505050505050565b6000808213613ae95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190613b6c9084901c611207565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613d0857506000919050565b680755bf798b4a1bf1e58212613d31576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e5874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611207565b6020830151600090613e9490846125c4565b6040850151613ea4908490611d90565b101580156100b557506020840151613ed49084613ecd633b9aca00670de0b6b3a76400006145a7565b9190611b96565b6040850151613ee49084906125c4565b1115949350505050565b60008060008360e0015113613f0857506000928392509050565b6000613f178460000151612d66565b90506000613f43856040015186606001518760400151613f3791906145a7565b602088015191906129aa565b905060008212613f6a5780821015613f5d57819003613f80565b5060009485945092505050565b613f7382614756565b613f7d90826145a7565b90505b60e085015160c0860151613f959183906129aa565b9050808560c001511015613fb0575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613fe857855160400151613fe19085906145a7565b9050614023565b6000613ff385614756565b875160400151909150811015614013578651604001518190039150614021565b60008093509350505061009c565b505b85518051602090910151600091829161403c9190612e62565b9150915080614054576000809450945050505061009c565b875160e08101516040909101516000916140899161407d916140769190612ded565b8a906119cc565b6101008b0151906125c4565b895160e08101516080909101516140b4916140a891611e9890886119cc565b8b5160600151906125c4565b6140be91906145a7565b905060006140f66140ea6140e38c6000015160e0015188612ded90919063ffffffff16565b8b90611bb4565b6101008c015190611d90565b9050808210156141115760008096509650505050505061009c565b80820391506000614153858c60000151604001518d6000015160e00151670de0b6b3a76400006141419190614569565b8e516060810151608090910151614396565b9050600061417d8c6000015160e00151670de0b6b3a76400006141769190614569565b8890612ded565b90508082101561419a57600080985098505050505050505061009c565b8b516080810151606090910151918303916141b69183916129aa565b9050670de0b6b3a764000081106141fa578b5160e001516141f39061377c906141e790670de0b6b3a7640000614569565b8e5160e00151906125c4565b9050614229565b8b5160e001516142269061377c9061421a90670de0b6b3a7640000614569565b8e5160e0015190611d90565b90505b8b516060015161423c90859083906129aa565b935083670de0b6b3a764000011156142605783670de0b6b3a7640000039350614274565b60006001985098505050505050505061009c565b60008c60e00151126142d75760c08c015160e08d0151614293916125c4565b9250670de0b6b3a76400008311156142b857600080985098505050505050505061009c565b670de0b6b3a764000092909203916142d084846119cc565b935061430c565b6143096142f08d60c001518e60e0015161199490614756565b61430290670de0b6b3a76400006145a7565b85906119cc565b93505b50919a60019a5098505050505050505050565b600080821261432e5781611201565b61120182614756565b600080600061434584611d03565b915091508061208957604051635516328b60e11b815260040160405180910390fd5b60006143738585612ded565b61438c61438486611e98868b6119cc565b859085611b96565b61214d91906145a7565b60006143a28585612ded565b61438c6143b386611e98868b611bb4565b8590856129aa565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806144306143bb565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561269f57600080fd5b60008060006060848603121561449557600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156144ba57600080fd5b6144c68682870161446e565b9150509250925092565b600080600080608085870312156144e657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561451257600080fd5b61451e8782880161446e565b91505092959194509250565b60006020828403121561453c57600080fd5b81356001600160a01b03811681146109ae57600080fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561120157611201614553565b80151581146104cf57600080fd5b60006020828403121561459c57600080fd5b81356109ae8161457c565b8082018082111561120157611201614553565b80820182811260008312801582168215821617156145da576145da614553565b505092915050565b634e487b7160e01b600052601260045260246000fd5b600082614607576146076145e2565b500690565b6001600160701b0381811683821601908082111561208957612089614553565b6001600160801b0381811683821601908082111561208957612089614553565b818103600083128015838313168383128216171561208957612089614553565b6001600160801b0382811682821603908082111561208957612089614553565b808202811582820484141761120157611201614553565b600081600f0b60016001607f1b031981036146c0576146c0614553565b60000392915050565b6000808335601e198436030181126146e057600080fd5b83018035915067ffffffffffffffff8211156146fb57600080fd5b60200191503681900382131561289657600080fd5b60006020828403121561472257600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561120157611201614553565b6000600160ff1b820161476b5761476b614553565b5060000390565b60006020828403121561478457600080fd5b81516109ae8161457c565b60008261479e5761479e6145e2565b600160ff1b8214600019841416156147b8576147b8614553565b50059056fea264697066735822122099dd45c717b9ac0e4b59c7f695ca4ba32ce6cb27519c8de04e22ae2a25b8131764736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
