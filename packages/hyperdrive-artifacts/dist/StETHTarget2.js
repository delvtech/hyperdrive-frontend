export const StETHTarget2 = {
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
    bytecode: '0x6102406040523480156200001257600080fd5b50604051620048a5380380620048a58339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516144926200041360003960005050600050506000818160d3015281816102470152611c7e015260008181610ff3015281816110560152818161130401528181611c58015281816122f901528181612335015261259e015260008181610e5d01528181610ead0152611c320152600061167601526000818161179c01528181611f1d0152611f96015260008181610725015281816117700152611f6a01526000611ee3015260008181610e3b01528181610ece0152611ca401526000818161066001528181610f5601528181611df201526126ef0152600081816105060152818161059301526105f8015260008181611517015281816121ac01526122240152600050506144926000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063cbc134341461003b578063ded0623114610068575b600080fd5b61004e610049366004614145565b610089565b604080519283526020830191909152015b60405180910390f35b61007b610076366004614195565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610232565b90505b949350505050565b6000806100c8610484565b6100d1836104ae565b7f00000000000000000000000000000000000000000000000000000000000000008510156101125760405163211ddda360e11b815260040160405180910390fd5b600061011c6104e7565b90506101316101296104ff565b826004610535565b5061013e600033886109ca565b610159600360f81b61015360208701876141ef565b88610aa4565b600061017461016b60208701876141ef565b88848989610b44565b9094509050610183818861422e565b9250600061019083610c87565b5090506101a060208701876141ef565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a6101d789888c610d77565b6101e28a898d610da6565b6101f260408d0160208e01614241565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a350505061009c6001600055565b600061023c610484565b610245826104ae565b7f00000000000000000000000000000000000000000000000000000000000000008410156102865760405163211ddda360e11b815260040160405180910390fd5b60006102906104e7565b9050854210156102ab576102a56101296104ff565b506102b9565b6102b786826004610535565b505b6102ce6102c7600188610dce565b33876109ca565b60008060008060006102e18a878d610e03565b9450945094509450945060008b90508b42101561038d5781600b600082825461030a9190614263565b9091555061031d90508b87868685610fdc565b6000610328826111d2565b90506103466103368d61121c565b6103409083614276565b8261124a565b61034f886112fd565b61035b5761035b61135d565b600061036689611376565b90508061038657604051638bdf918d60e01b815260040160405180910390fd5b50506103a4565b6103978588611383565b94506103a287611376565b505b60006103b186898c611464565b90508a8110156103d45760405163c972651760e01b815260040160405180910390fd5b8b888b6103e2600186610dce565b6103ef60208301836141ef565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610426898888610d77565b6104318a8989610da6565b6104416040890160208a01614241565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100b56001600055565b6002600054036104a757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104bd60208301836141ef565b6001600160a01b0316036104e45760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006104fa670de0b6b3a76400006114fe565b905090565b600061052b7f0000000000000000000000000000000000000000000000000000000000000000426142b4565b6104fa904261422e565b600083815260076020526040812080546001600160801b031615158061055a57504285115b1561057057546001600160801b031690506109c3565b60008061057b6104ff565b905080870361058c57859150610626565b60006105b87f000000000000000000000000000000000000000000000000000000000000000089614263565b90505b6000818152600760205260409020546001600160801b0316925081811480156105e2575082155b156105eb578692505b826000036106245761061d7f000000000000000000000000000000000000000000000000000000000000000082614263565b90506105bb565b505b61062f8261158b565b83546001600160801b0319166001600160801b0391909116178355610653866115b5565b50600090506007816106857f00000000000000000000000000000000000000000000000000000000000000008b61422e565b815260208101919091526040016000908120546001600160801b031691506106ae60028a610dce565b6000818152600e60205260408120549192508a8a83156107f457600192506000806106dd86898c866000611759565b9150915080600b60008282546106f39190614263565b9091555061070f9050866000846107098161121c565b88611828565b6107198183614263565b915061074986838a8d877f00000000000000000000000000000000000000000000000000000000000000006119a2565b915061075d61075883856119ec565b611a01565b6005805460029061077e9084906201000090046001600160701b03166142c8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107ab8261158b565b600580546010906107cd908490600160801b90046001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610801600184610dce565b6000818152600e60205260409020549091508015610910576001945060008061082e838b8e886001611759565b9150915080600b60008282546108449190614263565b9091555061086090508360008461085a8161121c565b8a610fdc565b61086a818361422e565b915061087961075883876119ec565b6005805460029061089a9084906201000090046001600160701b03166142c8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108c78261158b565b600580546010906108e9908490600160801b90046001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109485761093c6109228761121c565b61092b8361121c565b6109359190614308565b600061124a565b6109468e8e611a2b565b505b60006109538f610c87565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a86866040516109ac959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610a0d57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a5090849061422e565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ad6908490614263565b90915550506000838152600e602052604081208054839290610af9908490614263565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610a97565b600080610b5085611376565b505060065485906001600160801b031680821115610b7557806001600160801b031691505b81600003610b8a576000809250925050610c7d565b610b99600360f81b89846109ca565b600654600090610bbf9084906001600160801b03600160801b9091048116908516611bb6565b9050610bca8361158b565b610bd49083614328565b600680546001600160801b0319166001600160801b0392909216919091179055610bfd8161158b565b60068054601090610c1f908490600160801b90046001600160801b0316614328565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c4e818887611464565b9350610c5a8684611bd4565b841015610c7a5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610c9e610c9986611be9565b611d23565b9150915080610cb4575060009485945092505050565b6000808611610cc4576000610cce565b610cce83876119ec565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d399190614263565b610d43919061422e565b905080600003610d5c5750600096879650945050505050565b6000610d688383611db0565b98600198509650505050505050565b6000610d896040830160208401614241565b15610d955750826109c3565b610d9f84846119ec565b90506109c3565b6000610db86040830160208401614241565b15610dc757610d9f8484611db0565b50826109c3565b60006001600160f81b03821115610df85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e1788611dc5565b9050610e81610e24611e16565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611e37565b909850965091506000808080610ef2610e98611e16565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ea7565b90508c610f018f878484611ebe565b9a509196509094509250610f15848661422e565b610f1f908861422e565b9650610f2b8386614263565b610f35908c61422e565b9a50610f41888c614263565b9950505050505050610fc785858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610f80919061422e565b81526020810191909152604001600020546001600160801b0316428d11610fbe5760008d8152600760205260409020546001600160801b0316610fc0565b8d5b6001611fd2565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061101e57507f000000000000000000000000000000000000000000000000000000000000000061101c858361422e565b105b1561102b5761102b61135d565b6003549084900390600f0b6110408482614308565b90508361104c8661121c565b13801561108157507f000000000000000000000000000000000000000000000000000000000000000061107f8383612071565b105b1561108e5761108e61135d565b600254600160801b90046001600160801b03166110d56110d0826110ba670de0b6b3a764000088614348565b6004546001600160801b031691908c6000612097565b61158b565b600480546001600160801b0319166001600160801b03929092169190911790556110ff888261422e565b905061110a8161158b565b600280546001600160801b03928316600160801b0292169190911790556111308361158b565b600180546001600160801b0319166001600160801b039290921691909117905561115982612141565b600380546001600160801b0319166001600160801b03929092169190911790556111828761158b565b600180546010906111a4908490600160801b90046001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006111fa600e60006111e6600286610dce565b81526020019081526020016000205461121c565b61120c600e60006111e6600187610dce565b6112169190614308565b92915050565b60006001600160ff1b038211156112465760405163396ea70160e11b815260040160405180910390fd5b5090565b6000611273611259848361217d565b61126484600061217d565b61126e9190614308565b612141565b9050600081600f0b13156112c8576002805482919060009061129f9084906001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112f8576112dd8161435f565b6002805460009061129f9084906001600160801b0316614328565b505050565b60006113297f000000000000000000000000000000000000000000000000000000000000000083611bd4565b60025461133f91906001600160801b0316614263565b600154611355906001600160801b0316846119ec565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611216826004611a2b565b6000806000611391846115b5565b909250905060006113a286866119ec565b9050818311156113ba576113b7868385611bb6565b95505b828110156113cc5780830392506113d1565b600092505b6113da83611a01565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561142d57869003611431565b5060005b61143a8161158b565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061147185856119ec565b905061147c81612193565b9450846000036114905760009150506109c3565b6114a06040840160208501614241565b156114cf576114c8856114b660208601866141ef565b6114c36040870187614385565b6121e3565b91506114f6565b6114f2856114e060208601866141ef565b6114ed6040870187614385565b6121fe565b8491505b509392505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa158015611567573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121691906143cc565b60006001600160801b0382111561124657604051630f0af95160e11b815260040160405180910390fd5b60055460009081906115d8908490600160801b90046001600160801b03166119ec565b6005546201000090046001600160701b03169250905081811115611754576000611602838361422e565b90506116116110d08286612298565b60058054601090611633908490600160801b90046001600160801b0316614328565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061166c8583611db090919063ffffffff16565b9050600061169a827f00000000000000000000000000000000000000000000000000000000000000006119ec565b905080600b60008282546116ae9190614263565b909155506116be9050818361422e565b91506116c98261158b565b600180546000906116e49084906001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611711826122ad565b60038054600090611726908490600f0b6143e5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117668785611db0565b91506000611794837f00000000000000000000000000000000000000000000000000000000000000006119ec565b90506117c0817f00000000000000000000000000000000000000000000000000000000000000006119ec565b915083156117e3576117d2828261422e565b6117dc908461422e565b92506117fa565b6117ed828261422e565b6117f79084614263565b92505b8686101561181d5761180d838789611bb6565b925061181a828789611bb6565b91505b509550959350505050565b600354600160801b90046001600160801b03166118716110d082611854670de0b6b3a764000086614348565b600454600160801b90046001600160801b031691908a6000612097565b600480546001600160801b03928316600160801b0292169190911790556118978661158b565b6118a19082614328565b600380546001600160801b03928316600160801b0292169190911790556118c78461158b565b600180546000906118e29084906001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061190f83612141565b60038054600090611924908490600f0b6143e5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506119548561158b565b60018054601090611976908490600160801b90046001600160801b0316614328565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806119ba846119b48a888a611bb6565b90611db0565b90506119c7888486611bb6565b6119d19082614263565b9050868111156119e15786810391505b509695505050505050565b60006109c38383670de0b6b3a7640000611bb6565b60006001600160701b038211156112465760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611a76916001600160801b03169061422e565b905080600003611a8a576001915050611216565b6000611a95856122d7565b905080600003611aaa57600192505050611216565b600080611ab8838589612379565b9150915080611ace576000945050505050611216565b600080611adb848961247f565b91509150611af9611aeb8261121c565b611af490614412565b612571565b925082611b0f5760009650505050505050611216565b611b188261158b565b60068054600090611b339084906001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b608161158b565b60068054601090611b82908490600160801b90046001600160801b03166142e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611bcd57600080fd5b5091020490565b60006109c38383670de0b6b3a764000061267e565b611bf1614080565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611ce991166126a4565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d1b929004166126a4565b905292915050565b6000806000806000611d348661271a565b9150915080611d4b57506000958695509350505050565b611d588660a0015161121c565b611d6187612a3a565b83611d6f896000015161121c565b611d799190614276565b611d839190614276565b611d8d9190614308565b925050506000811215611da65750600093849350915050565b9360019350915050565b60006109c383670de0b6b3a764000084611bb6565b600080611dd06104ff565b9050808311611de0576000611dea565b611dea818461422e565b91506109c3827f0000000000000000000000000000000000000000000000000000000000000000611db0565b6001546003546000916104fa916001600160801b0390911690600f0b612071565b60008080611e58611e5088670de0b6b3a764000061422e565b899087611bb6565b90508615611e9a57611e6a88886119ec565b9150611e8b8a8a84611e848a670de0b6b3a764000061422e565b8989612a9e565b9250611e978382614263565b90505b9750975097945050505050565b60006100b282611eb8858888611bb6565b90612ac1565b6000808080611f158786611f0e8b611f08611ee18c670de0b6b3a764000061422e565b7f000000000000000000000000000000000000000000000000000000000000000090611bd4565b90611bd4565b919061267e565b9350611f41847f00000000000000000000000000000000000000000000000000000000000000006119ec565b91506000611f62611f5a89670de0b6b3a764000061422e565b8a908861267e565b9050611f8e817f0000000000000000000000000000000000000000000000000000000000000000611bd4565b9350611fba847f00000000000000000000000000000000000000000000000000000000000000006119ec565b611fc49084614263565b915050945094509450949050565b60008060008060008088881015612041578615611ff757611ff48d898b611bb6565b9c505b6120028c898b611bb6565b9b5061200d8b61121c565b6120168d61121c565b6120209190614308565b905061202d8b898b611bb6565b9a5061203a8a898b611bb6565b9950612060565b61204a8b61121c565b6120538d61121c565b61205d9190614308565b90505b9b9c9a9b999a975050505050505050565b60008061207e8484612b36565b9092509050806120905761209061135d565b5092915050565b6000826000036120a8575084612138565b81156120fb576120d96120bb8487614263565b6120c585876119ec565b6120cf888a6119ec565b6119b49190614263565b905060006120e78588612b72565b9050808210156120f5578091505b50612138565b82850361210a57506000612138565b612135612117848761422e565b6121218587611bd4565b61212b888a6119ec565b6119b4919061422e565b90505b95945050505050565b600060016001607f1b031982128061215f575060016001607f1b0382135b156112465760405163a5353be560e01b815260040160405180910390fd5b600081831361218c57816109c3565b5090919050565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063192084519060240161154a565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af115801561226d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061229191906143cc565b5050505050565b60006109c383670de0b6b3a76400008461267e565b600060016001607f1b038211156112465760405163a5353be560e01b815260040160405180910390fd5b60025460009081906122f2906001600160801b031684612298565b905061231e7f000000000000000000000000000000000000000000000000000000000000000082614263565b6001546001600160801b03161115612373576001547f0000000000000000000000000000000000000000000000000000000000000000906123699083906001600160801b031661422e565b6109c3919061422e565b50919050565b6123816140e1565b60008061238d84611be9565b9050600061239a82611d23565b93509050826123af57506000915061009c9050565b60006123d66123d18461016001518561014001516119ec90919063ffffffff16565b61121c565b6123f66123d1856101200151866101000151611bd490919063ffffffff16565b6124009190614308565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806124978660c001518760e00151612b36565b91509150806124ae5760008093509350505061256a565b60006124ba8784612b81565b925090508115806124c9575080155b156124dd576000809450945050505061256a565b60006124e98883612c90565b90508060000361250357600080955095505050505061256a565b8760600151811161251a579450925061256a915050565b506060870151600061252e8986858b612d61565b9050806000036125495760008096509650505050505061256a565b8281106125615760008096509650505050505061256a565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806125c38787877f00000000000000000000000000000000000000000000000000000000000000008d613276565b9350935093509350806125df5750600098975050505050505050565b868414612610576125ef8461158b565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146126415761262083612141565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461266f576126518261158b565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600082600019048411830215820261269557600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006126b86104ff565b6126c29190614348565b90508083116126d25760006126dc565b6126dc818461422e565b91506109c3612713670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614348565b8390611db0565b600080600061273f6123d18561016001518661014001516119ec90919063ffffffff16565b61275f6123d1866101200151876101000151611bd490919063ffffffff16565b6127699190614308565b905060008061278086600001518760200151612b36565b915091508061279757506000958695509350505050565b60008313156128d857600083905060006127e5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006127d6919061422e565b8d606001518e6080015161338e565b93509050826127fe575060009788975095505050505050565b81811061289c576000612838858a60400151858c60e00151670de0b6b3a7640000612829919061422e565b8d606001518e6080015161349a565b945090508315801561284d57508860c0015183105b156128645750600098600198509650505050505050565b8361287a57506000988998509650505050505050565b6128838161121c565b61288c90614412565b9960019950975050505050505050565b60008860200151126128c4576128bb8860a00151856123d1919061422e565b610d6890614412565b60a088015188516128bb916123d19161422e565b6000831215612a2b5760006128ec84614412565b905060006129208489604001518a60e00151670de0b6b3a7640000612911919061422e565b8b606001518c6080015161355d565b9350905082612939575060009788975095505050505050565b8181106129be576000612973858a60400151858c60e00151670de0b6b3a7640000612964919061422e565b8d606001518e60800151613606565b945090508315801561298857508860c0015183105b1561299f5750600098600198509650505050505050565b836129b557506000988998509650505050505050565b61288c8161121c565b60006129f0858a604001518b60e00151670de0b6b3a76400006129e1919061422e565b8c606001518d608001516136dd565b9450905083612a0a57506000988998509650505050505050565b61288c612a218a6060015184866119b4919061422e565b6123d19083614263565b50600095600195509350505050565b6000612a6d6123d1836101200151670de0b6b3a7640000612a5b919061422e565b6060850151610100860151919061267e565b61120c6123d1846101600151670de0b6b3a7640000612a8c919061422e565b60608601516101408701519190611bb6565b600080612aaf88888888888861349a565b9092509050806119e1576119e161135d565b600081600003612ada5750670de0b6b3a7640000611216565b82600003612aea57506000611216565b6000612af58361121c565b90506000612b0a612b058661121c565b61378c565b9050818102612b21670de0b6b3a76400008261442e565b9050612b2c816139b2565b9695505050505050565b600080600083612b458661121c565b612b4f9190614308565b90506000811215612b6757600080925092505061256a565b946001945092505050565b600081831161237357826109c3565b60008060008460a0015112612b9e5750506080820151600161256a565b60008460a00151612bae90614412565b90506000612bea85876101000151886000015160e00151670de0b6b3a7640000612bd8919061422e565b8951606081015160809091015161355d565b93509050821580612bf9575080155b15612c0c5760008093509350505061256a565b6000612c188383612298565b9050670de0b6b3a76400008111612c545780670de0b6b3a7640000039450612c4d8760c00151866119ec90919063ffffffff16565b9450612c63565b6000809450945050505061256a565b8660800151851115612c8257866080015160019450945050505061256a565b506001925050509250929050565b600080612cc68460c001518560e00151866101000151876000015160a00151612cb88861121c565b612cc190614412565b613276565b87516040810192909252602082019290925291909152905080612ced576000915050611216565b6000612cfc8560000151611d23565b9250905081612d1057600092505050611216565b84602001518110612d2657600092505050611216565b600085606001518660400151612d3c9190614263565b9050612d5782876020015183611bb69092919063ffffffff16565b612b2c908261422e565b60008085606001518660400151612d789190614263565b60208701516060880151919250600091612d929184611bb6565b90508660a00151600003612da95791506100b59050565b60008080896004881015612dbc57600497505b60005b8881101561311857612dd1868b612b72565b95506000612dfa8360c001518460e00151856101000151866000015160a00151612cb88c61121c565b86516040810192909252602082019290925291909152905080612e28576000985050505050505050506100b5565b6000612e378e60000151611d23565b9250905081612e5257600099505050505050505050506100b5565b612e5d84828b613b47565b15612e73578799505050505050505050506100b5565b60008460a001511315612fdc57835180516020820151604083015160a084015160e090940151600094612ec794939291612eb590670de0b6b3a764000061422e565b8a51606081015160809091015161338e565b9350905082612ee35760009a50505050505050505050506100b5565b808560a0015110612fda57612ef785613bb3565b909950925082612f145760009a50505050505050505050506100b5565b612f398560c001518660e00151876101000151886000015160a00151612cb88e61121c565b88516040810192909252602082019290925291909152925082612f695760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612f999490612eb590670de0b6b3a764000061422e565b9350905082612fb55760009a50505050505050505050506100b5565b8e60a001518111612fd257889a50505050505050505050506100b5565b505050612dbf565b505b6000612fed858f8760a00151613c89565b935090508215806130065750670de0b6b3a76400008110155b1561301e5760009a50505050505050505050506100b5565b80670de0b6b3a7640000039050600061304b6123d187604001518860200151611bd490919063ffffffff16565b6130586123d1858e6119ec565b6130629190614308565b9050881580613080575061307589613fe4565b61307e82613fe4565b125b1561308f578098508997508296505b60008113156130b7576130a68b6119b48385611db0565b6130b0908b614263565b9950613109565b60008112156131005760006130d18c6119b4858186614412565b90508a8110156130e557808b039a506130fa565b60009c505050505050505050505050506100b5565b50613109565b50505050613118565b84600101945050505050612dbf565b5060006131408260c001518360e00151846101000151856000015160a00151612cb88b61121c565b8551604081019290925260208201929092529190915290508061316d5760009750505050505050506100b5565b600061317c8360000151613ffc565b9050600061319e6123d185604001518660200151611bd490919063ffffffff16565b6131ab6123d1848c6119ec565b6131b59190614308565b90506131c087613fe4565b6131c982613fe4565b12156131d6578795508194505b6131fd6131f1655af3107a4000670de0b6b3a764000061422e565b6020860151908b61267e565b604085015161320d908790611db0565b108061324d575061323b61322f655af3107a4000670de0b6b3a7640000614263565b6020860151908b611bb6565b604085015161324b908790612298565b115b1561326457600099505050505050505050506100b5565b50939c9b505050505050505050505050565b6000806000808460000361329557508792508691508590506001613382565b6000856132a18b61121c565b6132ab9190614276565b90506132b68761121c565b8112156132d157600080600080945094509450945050613382565b809450600089126132f1576132ea6123d1868b8d611bb6565b9350613314565b6133086123d16133008b614412565b87908d61267e565b61331190614412565b93505b6000806133218c8c612b36565b9150915080613340576000806000809650965096509650505050613382565b600061334c8888612b36565b925090508161336c57600080600080975097509750975050505050613382565b6133778b8285611bb6565b955060019450505050505b95509550955095915050565b60008060008812156133b0576133a388614412565b6133ad9087614263565b95505b6000806133bd8b8b612b36565b91509150806133d45760008093509350505061348e565b60006133e3838b8a8a8a61402c565b905060006134006133f88a611eb88a8e611bd4565b89908961267e565b90508082101561341a57600080955095505050505061348e565b808203670de0b6b3a7640000811061344f57613448613441670de0b6b3a76400008c611db0565b8290612ac1565b9050613467565b613464613441670de0b6b3a76400008c612298565b90505b8b8110156134805760008096509650505050505061348e565b8b9003955060019450505050505b97509795505050505050565b60008060006134ac898988888861405b565b90506134bc86611eb8898b614263565b9750878110156134d3576000809250925050613552565b8781036134e181868861267e565b9050670de0b6b3a7640000811061350e57613507613441670de0b6b3a764000089612298565b9050613526565b613523613441670de0b6b3a764000089611db0565b90505b6135308186612298565b9050808a101561354857600080935093505050613552565b8903925060019150505b965096945050505050565b600080600061356f888888888861405b565b9050600061359a670de0b6b3a76400006135898888611db0565b6135939190614263565b8390612298565b9050670de0b6b3a764000081106135c7576135c0613441670de0b6b3a764000089612298565b90506135df565b6135dc613441670de0b6b3a764000089611db0565b90505b808810156135f557600080935093505050610c7d565b909603976001975095505050505050565b6000806000613618898988888861405b565b90508688101561362f576000809250925050613552565b968690039661363e8887612ac1565b975087811015613655576000809250925050613552565b87810361366381868861267e565b9050670de0b6b3a7640000811061369057613689613441670de0b6b3a764000089612298565b90506136a8565b6136a5613441670de0b6b3a764000089611db0565b90505b6136b28186612298565b9050898110156136ca57600080935093505050613552565b9890980398600198509650505050505050565b60008060006136ef888888888861402c565b90506000613713670de0b6b3a76400006137098888612298565b6127139190614263565b9050670de0b6b3a7640000811061374057613739613441670de0b6b3a764000089611db0565b9050613758565b613755613441670de0b6b3a764000089612298565b90505b6137628186611db0565b90508881101561377a57600080935093505050610c7d565b97909703976001975095505050505050565b60008082136137ae5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906138319084901c61121c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136139cd57506000919050565b680755bf798b4a1bf1e582126139f6576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b2c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61121c565b6020830151600090613b599084612298565b6040850151613b69908490611db0565b101580156100b557506020840151613b999084613b92633b9aca00670de0b6b3a7640000614263565b9190611bb6565b6040850151613ba9908490612298565b1115949350505050565b60008060008360e0015113613bcd57506000928392509050565b6000613bdc8460000151612a3a565b90506000613c08856040015186606001518760400151613bfc9190614263565b6020880151919061267e565b905060008212613c2f5780821015613c2257819003613c45565b5060009485945092505050565b613c3882614412565b613c429082614263565b90505b60e085015160c0860151613c5a91839061267e565b9050808560c001511015613c75575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613cad57855160400151613ca6908590614263565b9050613ce8565b6000613cb885614412565b875160400151909150811015613cd8578651604001518190039150613ce6565b60008093509350505061009c565b505b855180516020909101516000918291613d019190612b36565b9150915080613d19576000809450945050505061009c565b875160e0810151604090910151600091613d4e91613d4291613d3b9190612ac1565b8a906119ec565b6101008b015190612298565b895160e0810151608090910151613d7991613d6d91611eb890886119ec565b8b516060015190612298565b613d839190614263565b90506000613dbb613daf613da88c6000015160e0015188612ac190919063ffffffff16565b8b90611bd4565b6101008c015190611db0565b905080821015613dd65760008096509650505050505061009c565b80820391506000613e18858c60000151604001518d6000015160e00151670de0b6b3a7640000613e06919061422e565b8e51606081015160809091015161405b565b90506000613e428c6000015160e00151670de0b6b3a7640000613e3b919061422e565b8890612ac1565b905080821015613e5f57600080985098505050505050505061009c565b8b51608081015160609091015191830391613e7b91839161267e565b9050670de0b6b3a76400008110613ebf578b5160e00151613eb89061344190613eac90670de0b6b3a764000061422e565b8e5160e0015190612298565b9050613eee565b8b5160e00151613eeb9061344190613edf90670de0b6b3a764000061422e565b8e5160e0015190611db0565b90505b8b5160600151613f01908590839061267e565b935083670de0b6b3a76400001115613f255783670de0b6b3a7640000039350613f39565b60006001985098505050505050505061009c565b60008c60e0015112613f9c5760c08c015160e08d0151613f5891612298565b9250670de0b6b3a7640000831115613f7d57600080985098505050505050505061009c565b670de0b6b3a76400009290920391613f9584846119ec565b9350613fd1565b613fce613fb58d60c001518e60e001516119b490614412565b613fc790670de0b6b3a7640000614263565b85906119ec565b93505b50919a60019a5098505050505050505050565b6000808212613ff35781611216565b61121682614412565b600080600061400a84611d23565b915091508061209057604051635516328b60e11b815260040160405180910390fd5b60006140388585612ac1565b61405161404986611eb8868b6119ec565b859085611bb6565b6121359190614263565b60006140678585612ac1565b61405161407886611eb8868b611bd4565b85908561267e565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806140f5614080565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561237357600080fd5b60008060006060848603121561415a57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561417f57600080fd5b61418b86828701614133565b9150509250925092565b600080600080608085870312156141ab57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156141d757600080fd5b6141e387828801614133565b91505092959194509250565b60006020828403121561420157600080fd5b81356001600160a01b03811681146109c357600080fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561121657611216614218565b60006020828403121561425357600080fd5b813580151581146109c357600080fd5b8082018082111561121657611216614218565b808201828112600083128015821682158216171561429657614296614218565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826142c3576142c361429e565b500690565b6001600160701b0381811683821601908082111561209057612090614218565b6001600160801b0381811683821601908082111561209057612090614218565b818103600083128015838313168383128216171561209057612090614218565b6001600160801b0382811682821603908082111561209057612090614218565b808202811582820484141761121657611216614218565b600081600f0b60016001607f1b0319810361437c5761437c614218565b60000392915050565b6000808335601e1984360301811261439c57600080fd5b83018035915067ffffffffffffffff8211156143b757600080fd5b60200191503681900382131561256a57600080fd5b6000602082840312156143de57600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561121657611216614218565b6000600160ff1b820161442757614427614218565b5060000390565b60008261443d5761443d61429e565b600160ff1b82146000198414161561445757614457614218565b50059056fea26469706673582212207576ab12abd10db3bac629c2d1f047dc87791a2063ac8d5def131385f803a08864736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
