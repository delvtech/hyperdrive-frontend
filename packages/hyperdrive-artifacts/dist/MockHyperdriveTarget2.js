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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004c7038038062004c708339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161483a6200043660003960005050600050506000818160d3015281816102470152611cec015260008181610ff3015281816110560152818161130401528181611cc60152818161267b015281816126b70152612920015260008181610e5d01528181610ead0152611ca0015260006116e401526000818161180a01528181611f8b0152612004015260008181610725015281816117de0152611fd801526000611f51015260008181610e3b01528181610ece0152611d1201526000818161066001528181610f5601528181611e600152612a710152600081816105060152818161059301526105f801526000505060008181611519015281816115620152818161221c0152818161226501528181612340015281816123ec015281816124d80152612584015261483a6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063cbc134341461003b578063ded0623114610068575b600080fd5b61004e6100493660046144c7565b610089565b604080519283526020830191909152015b60405180910390f35b61007b610076366004614517565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610232565b90505b949350505050565b6000806100c8610484565b6100d1836104ae565b7f00000000000000000000000000000000000000000000000000000000000000008510156101125760405163211ddda360e11b815260040160405180910390fd5b600061011c6104e7565b90506101316101296104ff565b826004610535565b5061013e600033886109ca565b610159600360f81b6101536020870187614571565b88610aa4565b600061017461016b6020870187614571565b88848989610b44565b909450905061018381886145b0565b9250600061019083610c87565b5090506101a06020870187614571565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a6101d789888c610d77565b6101e28a898d610da6565b6101f260408d0160208e016145d1565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a350505061009c6001600055565b600061023c610484565b610245826104ae565b7f00000000000000000000000000000000000000000000000000000000000000008410156102865760405163211ddda360e11b815260040160405180910390fd5b60006102906104e7565b9050854210156102ab576102a56101296104ff565b506102b9565b6102b786826004610535565b505b6102ce6102c7600188610dce565b33876109ca565b60008060008060006102e18a878d610e03565b9450945094509450945060008b90508b42101561038d5781600b600082825461030a91906145ee565b9091555061031d90508b87868685610fdc565b6000610328826111d2565b90506103466103368d61121c565b6103409083614601565b8261124a565b61034f886112fd565b61035b5761035b61135d565b600061036689611376565b90508061038657604051638bdf918d60e01b815260040160405180910390fd5b50506103a4565b6103978588611383565b94506103a287611376565b505b60006103b186898c611464565b90508a8110156103d45760405163c972651760e01b815260040160405180910390fd5b8b888b6103e2600186610dce565b6103ef6020830183614571565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610426898888610d77565b6104318a8989610da6565b6104416040890160208a016145d1565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100b56001600055565b6002600054036104a757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104bd6020830183614571565b6001600160a01b0316036104e45760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006104fa670de0b6b3a76400006114fe565b905090565b600061052b7f00000000000000000000000000000000000000000000000000000000000000004261463f565b6104fa90426145b0565b600083815260076020526040812080546001600160801b031615158061055a57504285115b1561057057546001600160801b031690506109c3565b60008061057b6104ff565b905080870361058c57859150610626565b60006105b87f0000000000000000000000000000000000000000000000000000000000000000896145ee565b90505b6000818152600760205260409020546001600160801b0316925081811480156105e2575082155b156105eb578692505b826000036106245761061d7f0000000000000000000000000000000000000000000000000000000000000000826145ee565b90506105bb565b505b61062f826115f9565b83546001600160801b0319166001600160801b039190911617835561065386611623565b50600090506007816106857f00000000000000000000000000000000000000000000000000000000000000008b6145b0565b815260208101919091526040016000908120546001600160801b031691506106ae60028a610dce565b6000818152600e60205260408120549192508a8a83156107f457600192506000806106dd86898c8660006117c7565b9150915080600b60008282546106f391906145ee565b9091555061070f9050866000846107098161121c565b88611896565b61071981836145ee565b915061074986838a8d877f0000000000000000000000000000000000000000000000000000000000000000611a10565b915061075d6107588385611a5a565b611a6f565b6005805460029061077e9084906201000090046001600160701b0316614653565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107ab826115f9565b600580546010906107cd908490600160801b90046001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610801600184610dce565b6000818152600e60205260409020549091508015610910576001945060008061082e838b8e8860016117c7565b9150915080600b600082825461084491906145ee565b9091555061086090508360008461085a8161121c565b8a610fdc565b61086a81836145b0565b91506108796107588387611a5a565b6005805460029061089a9084906201000090046001600160701b0316614653565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108c7826115f9565b600580546010906108e9908490600160801b90046001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109485761093c6109228761121c565b61092b8361121c565b6109359190614693565b600061124a565b6109468e8e611a99565b505b60006109538f610c87565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a86866040516109ac959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610a0d57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a509084906145b0565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ad69084906145ee565b90915550506000838152600e602052604081208054839290610af99084906145ee565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610a97565b600080610b5085611376565b505060065485906001600160801b031680821115610b7557806001600160801b031691505b81600003610b8a576000809250925050610c7d565b610b99600360f81b89846109ca565b600654600090610bbf9084906001600160801b03600160801b9091048116908516611c24565b9050610bca836115f9565b610bd490836146b3565b600680546001600160801b0319166001600160801b0392909216919091179055610bfd816115f9565b60068054601090610c1f908490600160801b90046001600160801b03166146b3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c4e818887611464565b9350610c5a8684611c42565b841015610c7a5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610c9e610c9986611c57565b611d91565b9150915080610cb4575060009485945092505050565b6000808611610cc4576000610cce565b610cce8387611a5a565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d3991906145ee565b610d4391906145b0565b905080600003610d5c5750600096879650945050505050565b6000610d688383611e1e565b98600198509650505050505050565b6000610d8960408301602084016145d1565b15610d955750826109c3565b610d9f8484611a5a565b90506109c3565b6000610db860408301602084016145d1565b15610dc757610d9f8484611e1e565b50826109c3565b60006001600160f81b03821115610df85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e1788611e33565b9050610e81610e24611e84565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611ea5565b909850965091506000808080610ef2610e98611e84565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611f15565b90508c610f018f878484611f2c565b9a509196509094509250610f1584866145b0565b610f1f90886145b0565b9650610f2b83866145ee565b610f35908c6145b0565b9a50610f41888c6145ee565b9950505050505050610fc785858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610f8091906145b0565b81526020810191909152604001600020546001600160801b0316428d11610fbe5760008d8152600760205260409020546001600160801b0316610fc0565b8d5b6001612040565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061101e57507f000000000000000000000000000000000000000000000000000000000000000061101c85836145b0565b105b1561102b5761102b61135d565b6003549084900390600f0b6110408482614693565b90508361104c8661121c565b13801561108157507f000000000000000000000000000000000000000000000000000000000000000061107f83836120df565b105b1561108e5761108e61135d565b600254600160801b90046001600160801b03166110d56110d0826110ba670de0b6b3a7640000886146d3565b6004546001600160801b031691908c6000612105565b6115f9565b600480546001600160801b0319166001600160801b03929092169190911790556110ff88826145b0565b905061110a816115f9565b600280546001600160801b03928316600160801b029216919091179055611130836115f9565b600180546001600160801b0319166001600160801b0392909216919091179055611159826121af565b600380546001600160801b0319166001600160801b0392909216919091179055611182876115f9565b600180546010906111a4908490600160801b90046001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006111fa600e60006111e6600286610dce565b81526020019081526020016000205461121c565b61120c600e60006111e6600187610dce565b6112169190614693565b92915050565b60006001600160ff1b038211156112465760405163396ea70160e11b815260040160405180910390fd5b5090565b600061127361125984836121eb565b6112648460006121eb565b61126e9190614693565b6121af565b9050600081600f0b13156112c8576002805482919060009061129f9084906001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112f8576112dd816146ea565b6002805460009061129f9084906001600160801b03166146b3565b505050565b60006113297f000000000000000000000000000000000000000000000000000000000000000083611c42565b60025461133f91906001600160801b03166145ee565b600154611355906001600160801b031684611a5a565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611216826004611a99565b600080600061139184611623565b909250905060006113a28686611a5a565b9050818311156113ba576113b7868385611c24565b95505b828110156113cc5780830392506113d1565b600092505b6113da83611a6f565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561142d57869003611431565b5060005b61143a816115f9565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114718585611a5a565b905061147c81612201565b9450846000036114905760009150506109c3565b6114a060408401602085016145d1565b156114cf576114c8856114b66020860186614571565b6114c36040870187614710565b6122ea565b91506114f6565b6114f2856114e06020860186614571565b6114ed6040870187614710565b612484565b8491505b509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161154d5750476115d8565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156115b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d59190614757565b90505b6012546000036115e95760006109c3565b6012546109c39084908390611c24565b60006001600160801b0382111561124657604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611646908490600160801b90046001600160801b0316611a5a565b6005546201000090046001600160701b031692509050818111156117c257600061167083836145b0565b905061167f6110d0828661261a565b600580546010906116a1908490600160801b90046001600160801b03166146b3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116da8583611e1e90919063ffffffff16565b90506000611708827f0000000000000000000000000000000000000000000000000000000000000000611a5a565b905080600b600082825461171c91906145ee565b9091555061172c905081836145b0565b9150611737826115f9565b600180546000906117529084906001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061177f8261262f565b60038054600090611794908490600f0b614770565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117d48785611e1e565b91506000611802837f0000000000000000000000000000000000000000000000000000000000000000611a5a565b905061182e817f0000000000000000000000000000000000000000000000000000000000000000611a5a565b915083156118515761184082826145b0565b61184a90846145b0565b9250611868565b61185b82826145b0565b61186590846145ee565b92505b8686101561188b5761187b838789611c24565b9250611888828789611c24565b91505b509550959350505050565b600354600160801b90046001600160801b03166118df6110d0826118c2670de0b6b3a7640000866146d3565b600454600160801b90046001600160801b031691908a6000612105565b600480546001600160801b03928316600160801b029216919091179055611905866115f9565b61190f90826146b3565b600380546001600160801b03928316600160801b029216919091179055611935846115f9565b600180546000906119509084906001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061197d836121af565b60038054600090611992908490600f0b614770565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506119c2856115f9565b600180546010906119e4908490600160801b90046001600160801b03166146b3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611a2884611a228a888a611c24565b90611e1e565b9050611a35888486611c24565b611a3f90826145ee565b905086811115611a4f5786810391505b509695505050505050565b60006109c38383670de0b6b3a7640000611c24565b60006001600160701b038211156112465760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611ae4916001600160801b0316906145b0565b905080600003611af8576001915050611216565b6000611b0385612659565b905080600003611b1857600192505050611216565b600080611b268385896126fb565b9150915080611b3c576000945050505050611216565b600080611b498489612801565b91509150611b67611b598261121c565b611b629061479d565b6128f3565b925082611b7d5760009650505050505050611216565b611b86826115f9565b60068054600090611ba19084906001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bce816115f9565b60068054601090611bf0908490600160801b90046001600160801b0316614673565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611c3b57600080fd5b5091020490565b60006109c38383670de0b6b3a7640000612a00565b611c5f614402565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d579116612a26565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d8992900416612a26565b905292915050565b6000806000806000611da286612a9c565b9150915080611db957506000958695509350505050565b611dc68660a0015161121c565b611dcf87612dbc565b83611ddd896000015161121c565b611de79190614601565b611df19190614601565b611dfb9190614693565b925050506000811215611e145750600093849350915050565b9360019350915050565b60006109c383670de0b6b3a764000084611c24565b600080611e3e6104ff565b9050808311611e4e576000611e58565b611e5881846145b0565b91506109c3827f0000000000000000000000000000000000000000000000000000000000000000611e1e565b6001546003546000916104fa916001600160801b0390911690600f0b6120df565b60008080611ec6611ebe88670de0b6b3a76400006145b0565b899087611c24565b90508615611f0857611ed88888611a5a565b9150611ef98a8a84611ef28a670de0b6b3a76400006145b0565b8989612e20565b9250611f0583826145ee565b90505b9750975097945050505050565b60006100b282611f26858888611c24565b90612e43565b6000808080611f838786611f7c8b611f76611f4f8c670de0b6b3a76400006145b0565b7f000000000000000000000000000000000000000000000000000000000000000090611c42565b90611c42565b9190612a00565b9350611faf847f0000000000000000000000000000000000000000000000000000000000000000611a5a565b91506000611fd0611fc889670de0b6b3a76400006145b0565b8a9088612a00565b9050611ffc817f0000000000000000000000000000000000000000000000000000000000000000611c42565b9350612028847f0000000000000000000000000000000000000000000000000000000000000000611a5a565b61203290846145ee565b915050945094509450949050565b600080600080600080888810156120af578615612065576120628d898b611c24565b9c505b6120708c898b611c24565b9b5061207b8b61121c565b6120848d61121c565b61208e9190614693565b905061209b8b898b611c24565b9a506120a88a898b611c24565b99506120ce565b6120b88b61121c565b6120c18d61121c565b6120cb9190614693565b90505b9b9c9a9b999a975050505050505050565b6000806120ec8484612eb8565b9092509050806120fe576120fe61135d565b5092915050565b6000826000036121165750846121a6565b81156121695761214761212984876145ee565b6121338587611a5a565b61213d888a611a5a565b611a2291906145ee565b905060006121558588612ef4565b905080821015612163578091505b506121a6565b828503612178575060006121a6565b6121a361218584876145b0565b61218f8587611c42565b612199888a611a5a565b611a2291906145b0565b90505b95945050505050565b600060016001607f1b03198212806121cd575060016001607f1b0382135b156112465760405163a5353be560e01b815260040160405180910390fd5b60008183136121fa57816109c3565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016122505750476122db565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156122b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122d89190614757565b90505b6012546109c390849083611c24565b600060125485116122fb57846122ff565b6012545b9450600061230c866114fe565b9050856012600082825461232091906145b0565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123c6576040516001600160a01b038716908390600081818185875af1925050503d80600081146123b6576040519150601f19603f3d011682016040523d82523d6000602084013e6123bb565b606091505b50508091505061245c565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612435573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061245991906147b9565b90505b8061247a576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116124935783612497565b6012545b935060006124a4856114fe565b905084601260008282546124b891906145b0565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161255e576040516001600160a01b038616908390600081818185875af1925050503d806000811461254e576040519150601f19603f3d011682016040523d82523d6000602084013e612553565b606091505b5050809150506125f4565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156125cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125f191906147b9565b90505b80612612576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006109c383670de0b6b3a764000084612a00565b600060016001607f1b038211156112465760405163a5353be560e01b815260040160405180910390fd5b6002546000908190612674906001600160801b03168461261a565b90506126a07f0000000000000000000000000000000000000000000000000000000000000000826145ee565b6001546001600160801b031611156126f5576001547f0000000000000000000000000000000000000000000000000000000000000000906126eb9083906001600160801b03166145b0565b6109c391906145b0565b50919050565b612703614463565b60008061270f84611c57565b9050600061271c82611d91565b935090508261273157506000915061009c9050565b6000612758612753846101600151856101400151611a5a90919063ffffffff16565b61121c565b612778612753856101200151866101000151611c4290919063ffffffff16565b6127829190614693565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806128198660c001518760e00151612eb8565b9150915080612830576000809350935050506128ec565b600061283c8784612f03565b9250905081158061284b575080155b1561285f57600080945094505050506128ec565b600061286b8883613012565b9050806000036128855760008095509550505050506128ec565b8760600151811161289c57945092506128ec915050565b50606087015160006128b08986858b6130e3565b9050806000036128cb576000809650965050505050506128ec565b8281106128e3576000809650965050505050506128ec565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806129458787877f00000000000000000000000000000000000000000000000000000000000000008d6135f8565b9350935093509350806129615750600098975050505050505050565b86841461299257612971846115f9565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146129c3576129a2836121af565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146129f1576129d3826115f9565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000826000190484118302158202612a1757600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612a3a6104ff565b612a4491906146d3565b9050808311612a54576000612a5e565b612a5e81846145b0565b91506109c3612a95670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006146d3565b8390611e1e565b6000806000612ac1612753856101600151866101400151611a5a90919063ffffffff16565b612ae1612753866101200151876101000151611c4290919063ffffffff16565b612aeb9190614693565b9050600080612b0286600001518760200151612eb8565b9150915080612b1957506000958695509350505050565b6000831315612c5a5760008390506000612b67886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612b5891906145b0565b8d606001518e60800151613710565b9350905082612b80575060009788975095505050505050565b818110612c1e576000612bba858a60400151858c60e00151670de0b6b3a7640000612bab91906145b0565b8d606001518e6080015161381c565b9450905083158015612bcf57508860c0015183105b15612be65750600098600198509650505050505050565b83612bfc57506000988998509650505050505050565b612c058161121c565b612c0e9061479d565b9960019950975050505050505050565b6000886020015112612c4657612c3d8860a001518561275391906145b0565b610d689061479d565b60a08801518851612c3d91612753916145b0565b6000831215612dad576000612c6e8461479d565b90506000612ca28489604001518a60e00151670de0b6b3a7640000612c9391906145b0565b8b606001518c608001516138df565b9350905082612cbb575060009788975095505050505050565b818110612d40576000612cf5858a60400151858c60e00151670de0b6b3a7640000612ce691906145b0565b8d606001518e60800151613988565b9450905083158015612d0a57508860c0015183105b15612d215750600098600198509650505050505050565b83612d3757506000988998509650505050505050565b612c0e8161121c565b6000612d72858a604001518b60e00151670de0b6b3a7640000612d6391906145b0565b8c606001518d60800151613a5f565b9450905083612d8c57506000988998509650505050505050565b612c0e612da38a606001518486611a2291906145b0565b61275390836145ee565b50600095600195509350505050565b6000612def612753836101200151670de0b6b3a7640000612ddd91906145b0565b60608501516101008601519190612a00565b61120c612753846101600151670de0b6b3a7640000612e0e91906145b0565b60608601516101408701519190611c24565b600080612e3188888888888861381c565b909250905080611a4f57611a4f61135d565b600081600003612e5c5750670de0b6b3a7640000611216565b82600003612e6c57506000611216565b6000612e778361121c565b90506000612e8c612e878661121c565b613b0e565b9050818102612ea3670de0b6b3a7640000826147d6565b9050612eae81613d34565b9695505050505050565b600080600083612ec78661121c565b612ed19190614693565b90506000811215612ee95760008092509250506128ec565b946001945092505050565b60008183116126f557826109c3565b60008060008460a0015112612f20575050608082015160016128ec565b60008460a00151612f309061479d565b90506000612f6c85876101000151886000015160e00151670de0b6b3a7640000612f5a91906145b0565b895160608101516080909101516138df565b93509050821580612f7b575080155b15612f8e576000809350935050506128ec565b6000612f9a838361261a565b9050670de0b6b3a76400008111612fd65780670de0b6b3a7640000039450612fcf8760c0015186611a5a90919063ffffffff16565b9450612fe5565b600080945094505050506128ec565b86608001518511156130045786608001516001945094505050506128ec565b506001925050509250929050565b6000806130488460c001518560e00151866101000151876000015160a0015161303a8861121c565b6130439061479d565b6135f8565b8751604081019290925260208201929092529190915290508061306f576000915050611216565b600061307e8560000151611d91565b925090508161309257600092505050611216565b846020015181106130a857600092505050611216565b6000856060015186604001516130be91906145ee565b90506130d982876020015183611c249092919063ffffffff16565b612eae90826145b0565b600080856060015186604001516130fa91906145ee565b602087015160608801519192506000916131149184611c24565b90508660a0015160000361312b5791506100b59050565b6000808089600488101561313e57600497505b60005b8881101561349a57613153868b612ef4565b9550600061317c8360c001518460e00151856101000151866000015160a0015161303a8c61121c565b865160408101929092526020820192909252919091529050806131aa576000985050505050505050506100b5565b60006131b98e60000151611d91565b92509050816131d457600099505050505050505050506100b5565b6131df84828b613ec9565b156131f5578799505050505050505050506100b5565b60008460a00151131561335e57835180516020820151604083015160a084015160e0909401516000946132499493929161323790670de0b6b3a76400006145b0565b8a516060810151608090910151613710565b93509050826132655760009a50505050505050505050506100b5565b808560a001511061335c5761327985613f35565b9099509250826132965760009a50505050505050505050506100b5565b6132bb8560c001518660e00151876101000151886000015160a0015161303a8e61121c565b885160408101929092526020820192909252919091529250826132eb5760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e09094015161331b949061323790670de0b6b3a76400006145b0565b93509050826133375760009a50505050505050505050506100b5565b8e60a00151811161335457889a50505050505050505050506100b5565b505050613141565b505b600061336f858f8760a0015161400b565b935090508215806133885750670de0b6b3a76400008110155b156133a05760009a50505050505050505050506100b5565b80670de0b6b3a764000003905060006133cd61275387604001518860200151611c4290919063ffffffff16565b6133da612753858e611a5a565b6133e49190614693565b905088158061340257506133f789614366565b61340082614366565b125b15613411578098508997508296505b6000811315613439576134288b611a228385611e1e565b613432908b6145ee565b995061348b565b60008112156134825760006134538c611a2285818661479d565b90508a81101561346757808b039a5061347c565b60009c505050505050505050505050506100b5565b5061348b565b5050505061349a565b84600101945050505050613141565b5060006134c28260c001518360e00151846101000151856000015160a0015161303a8b61121c565b855160408101929092526020820192909252919091529050806134ef5760009750505050505050506100b5565b60006134fe836000015161437e565b9050600061352061275385604001518660200151611c4290919063ffffffff16565b61352d612753848c611a5a565b6135379190614693565b905061354287614366565b61354b82614366565b1215613558578795508194505b61357f613573655af3107a4000670de0b6b3a76400006145b0565b6020860151908b612a00565b604085015161358f908790611e1e565b10806135cf57506135bd6135b1655af3107a4000670de0b6b3a76400006145ee565b6020860151908b611c24565b60408501516135cd90879061261a565b115b156135e657600099505050505050505050506100b5565b50939c9b505050505050505050505050565b6000806000808460000361361757508792508691508590506001613704565b6000856136238b61121c565b61362d9190614601565b90506136388761121c565b81121561365357600080600080945094509450945050613704565b809450600089126136735761366c612753868b8d611c24565b9350613696565b61368a6127536136828b61479d565b87908d612a00565b6136939061479d565b93505b6000806136a38c8c612eb8565b91509150806136c2576000806000809650965096509650505050613704565b60006136ce8888612eb8565b92509050816136ee57600080600080975097509750975050505050613704565b6136f98b8285611c24565b955060019450505050505b95509550955095915050565b6000806000881215613732576137258861479d565b61372f90876145ee565b95505b60008061373f8b8b612eb8565b915091508061375657600080935093505050613810565b6000613765838b8a8a8a6143ae565b9050600061378261377a8a611f268a8e611c42565b899089612a00565b90508082101561379c576000809550955050505050613810565b808203670de0b6b3a764000081106137d1576137ca6137c3670de0b6b3a76400008c611e1e565b8290612e43565b90506137e9565b6137e66137c3670de0b6b3a76400008c61261a565b90505b8b81101561380257600080965096505050505050613810565b8b9003955060019450505050505b97509795505050505050565b600080600061382e89898888886143dd565b905061383e86611f26898b6145ee565b9750878110156138555760008092509250506138d4565b878103613863818688612a00565b9050670de0b6b3a76400008110613890576138896137c3670de0b6b3a76400008961261a565b90506138a8565b6138a56137c3670de0b6b3a764000089611e1e565b90505b6138b2818661261a565b9050808a10156138ca576000809350935050506138d4565b8903925060019150505b965096945050505050565b60008060006138f188888888886143dd565b9050600061391c670de0b6b3a764000061390b8888611e1e565b61391591906145ee565b839061261a565b9050670de0b6b3a76400008110613949576139426137c3670de0b6b3a76400008961261a565b9050613961565b61395e6137c3670de0b6b3a764000089611e1e565b90505b8088101561397757600080935093505050610c7d565b909603976001975095505050505050565b600080600061399a89898888886143dd565b9050868810156139b15760008092509250506138d4565b96869003966139c08887612e43565b9750878110156139d75760008092509250506138d4565b8781036139e5818688612a00565b9050670de0b6b3a76400008110613a1257613a0b6137c3670de0b6b3a76400008961261a565b9050613a2a565b613a276137c3670de0b6b3a764000089611e1e565b90505b613a34818661261a565b905089811015613a4c576000809350935050506138d4565b9890980398600198509650505050505050565b6000806000613a7188888888886143ae565b90506000613a95670de0b6b3a7640000613a8b888861261a565b612a9591906145ee565b9050670de0b6b3a76400008110613ac257613abb6137c3670de0b6b3a764000089611e1e565b9050613ada565b613ad76137c3670de0b6b3a76400008961261a565b90505b613ae48186611e1e565b905088811015613afc57600080935093505050610c7d565b97909703976001975095505050505050565b6000808213613b305760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190613bb39084901c61121c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613d4f57506000919050565b680755bf798b4a1bf1e58212613d78576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612eae74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61121c565b6020830151600090613edb908461261a565b6040850151613eeb908490611e1e565b101580156100b557506020840151613f1b9084613f14633b9aca00670de0b6b3a76400006145ee565b9190611c24565b6040850151613f2b90849061261a565b1115949350505050565b60008060008360e0015113613f4f57506000928392509050565b6000613f5e8460000151612dbc565b90506000613f8a856040015186606001518760400151613f7e91906145ee565b60208801519190612a00565b905060008212613fb15780821015613fa457819003613fc7565b5060009485945092505050565b613fba8261479d565b613fc490826145ee565b90505b60e085015160c0860151613fdc918390612a00565b9050808560c001511015613ff7575060009485945092505050565b808560c00151036001935093505050915091565b600080600080841261402f578551604001516140289085906145ee565b905061406a565b600061403a8561479d565b87516040015190915081101561405a578651604001518190039150614068565b60008093509350505061009c565b505b8551805160209091015160009182916140839190612eb8565b915091508061409b576000809450945050505061009c565b875160e08101516040909101516000916140d0916140c4916140bd9190612e43565b8a90611a5a565b6101008b01519061261a565b895160e08101516080909101516140fb916140ef91611f269088611a5a565b8b51606001519061261a565b61410591906145ee565b9050600061413d61413161412a8c6000015160e0015188612e4390919063ffffffff16565b8b90611c42565b6101008c015190611e1e565b9050808210156141585760008096509650505050505061009c565b8082039150600061419a858c60000151604001518d6000015160e00151670de0b6b3a764000061418891906145b0565b8e5160608101516080909101516143dd565b905060006141c48c6000015160e00151670de0b6b3a76400006141bd91906145b0565b8890612e43565b9050808210156141e157600080985098505050505050505061009c565b8b516080810151606090910151918303916141fd918391612a00565b9050670de0b6b3a76400008110614241578b5160e0015161423a906137c39061422e90670de0b6b3a76400006145b0565b8e5160e001519061261a565b9050614270565b8b5160e0015161426d906137c39061426190670de0b6b3a76400006145b0565b8e5160e0015190611e1e565b90505b8b51606001516142839085908390612a00565b935083670de0b6b3a764000011156142a75783670de0b6b3a76400000393506142bb565b60006001985098505050505050505061009c565b60008c60e001511261431e5760c08c015160e08d01516142da9161261a565b9250670de0b6b3a76400008311156142ff57600080985098505050505050505061009c565b670de0b6b3a764000092909203916143178484611a5a565b9350614353565b6143506143378d60c001518e60e00151611a229061479d565b61434990670de0b6b3a76400006145ee565b8590611a5a565b93505b50919a60019a5098505050505050505050565b60008082126143755781611216565b6112168261479d565b600080600061438c84611d91565b91509150806120fe57604051635516328b60e11b815260040160405180910390fd5b60006143ba8585612e43565b6143d36143cb86611f26868b611a5a565b859085611c24565b6121a391906145ee565b60006143e98585612e43565b6143d36143fa86611f26868b611c42565b859085612a00565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280614477614402565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156126f557600080fd5b6000806000606084860312156144dc57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561450157600080fd5b61450d868287016144b5565b9150509250925092565b6000806000806080858703121561452d57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561455957600080fd5b614565878288016144b5565b91505092959194509250565b60006020828403121561458357600080fd5b81356001600160a01b03811681146109c357600080fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156112165761121661459a565b80151581146104e457600080fd5b6000602082840312156145e357600080fd5b81356109c3816145c3565b808201808211156112165761121661459a565b80820182811260008312801582168215821617156146215761462161459a565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261464e5761464e614629565b500690565b6001600160701b038181168382160190808211156120fe576120fe61459a565b6001600160801b038181168382160190808211156120fe576120fe61459a565b81810360008312801583831316838312821617156120fe576120fe61459a565b6001600160801b038281168282160390808211156120fe576120fe61459a565b80820281158282048414176112165761121661459a565b600081600f0b60016001607f1b031981036147075761470761459a565b60000392915050565b6000808335601e1984360301811261472757600080fd5b83018035915067ffffffffffffffff82111561474257600080fd5b6020019150368190038213156128ec57600080fd5b60006020828403121561476957600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112165761121661459a565b6000600160ff1b82016147b2576147b261459a565b5060000390565b6000602082840312156147cb57600080fd5b81516109c3816145c3565b6000826147e5576147e5614629565b600160ff1b8214600019841416156147ff576147ff61459a565b50059056fea26469706673582212200468998f07c95382ce91229596ea3163721f49bec00837f9d585a22ff77d2cdb64736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
