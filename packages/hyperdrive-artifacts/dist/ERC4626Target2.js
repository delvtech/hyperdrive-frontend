export const ERC4626Target2 = {
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
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004a8838038062004a888339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516146756200041360003960005050600050506000818160d3015281816102470152611bf0015260008181610fde0152818161104101528181611bca015281816122c601528181612302015261256b015260008181610e4801528181610e980152611ba4015260006115e801526000818161170e01528181611e8f0152611f08015260008181610710015281816116e20152611edc01526000611e55015260008181610e2601528181610eb90152611c1601526000818161064b01528181610f4101528181611d6401526126bc0152600081816104f10152818161057e01526105e301526000818161148901528181612156015281816121bc01526122380152600050506146756000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063cbc134341461003b578063ded0623114610068575b600080fd5b61004e6100493660046142d3565b610089565b604080519283526020830191909152015b60405180910390f35b61007b610076366004614323565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610232565b90505b949350505050565b6000806100c861046f565b6100d183610499565b7f00000000000000000000000000000000000000000000000000000000000000008510156101125760405163211ddda360e11b815260040160405180910390fd5b600061011c6104d2565b90506101316101296104ea565b826004610520565b5061013e600033886109b5565b610159600360f81b610153602087018761437d565b88610a8f565b600061017461016b602087018761437d565b88848989610b2f565b909450905061018381886143bc565b9250600061019083610c72565b5090506101a0602087018761437d565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a6101d789888c610d62565b6101e28a898d610d91565b6101f260408d0160208e016143dd565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a350505061009c6001600055565b600061023c61046f565b61024582610499565b7f00000000000000000000000000000000000000000000000000000000000000008410156102865760405163211ddda360e11b815260040160405180910390fd5b60006102906104d2565b9050854210156102ab576102a56101296104ea565b506102b9565b6102b786826004610520565b505b6102ce6102c7600188610db9565b33876109b5565b60008060008060006102e18a878d610dee565b9450945094509450945060008b90508b4210156103785781600b600082825461030a91906143fa565b9091555061031d90508b87868685610fc7565b6000610328826111bd565b90506103466103368d611207565b610340908361440d565b82611235565b6000610351896112e8565b90508061037157604051638bdf918d60e01b815260040160405180910390fd5b505061038f565b61038285886112f5565b945061038d876112e8565b505b600061039c86898c6113d6565b90508a8110156103bf5760405163c972651760e01b815260040160405180910390fd5b8b888b6103cd600186610db9565b6103da602083018361437d565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610411898888610d62565b61041c8a8989610d91565b61042c6040890160208a016143dd565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100b56001600055565b60026000540361049257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104a8602083018361437d565b6001600160a01b0316036104cf5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006104e5670de0b6b3a7640000611470565b905090565b60006105167f00000000000000000000000000000000000000000000000000000000000000004261444b565b6104e590426143bc565b600083815260076020526040812080546001600160801b031615158061054557504285115b1561055b57546001600160801b031690506109ae565b6000806105666104ea565b905080870361057757859150610611565b60006105a37f0000000000000000000000000000000000000000000000000000000000000000896143fa565b90505b6000818152600760205260409020546001600160801b0316925081811480156105cd575082155b156105d6578692505b8260000361060f576106087f0000000000000000000000000000000000000000000000000000000000000000826143fa565b90506105a6565b505b61061a826114fd565b83546001600160801b0319166001600160801b039190911617835561063e86611527565b50600090506007816106707f00000000000000000000000000000000000000000000000000000000000000008b6143bc565b815260208101919091526040016000908120546001600160801b0316915061069960028a610db9565b6000818152600e60205260408120549192508a8a83156107df57600192506000806106c886898c8660006116cb565b9150915080600b60008282546106de91906143fa565b909155506106fa9050866000846106f481611207565b8861179a565b61070481836143fa565b915061073486838a8d877f0000000000000000000000000000000000000000000000000000000000000000611914565b9150610748610743838561195e565b611973565b600580546002906107699084906201000090046001600160701b031661445f565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610796826114fd565b600580546010906107b8908490600160801b90046001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006107ec600184610db9565b6000818152600e602052604090205490915080156108fb5760019450600080610819838b8e8860016116cb565b9150915080600b600082825461082f91906143fa565b9091555061084b90508360008461084581611207565b8a610fc7565b61085581836143bc565b9150610864610743838761195e565b600580546002906108859084906201000090046001600160701b031661445f565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108b2826114fd565b600580546010906108d4908490600160801b90046001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109335761092761090d87611207565b61091683611207565b610920919061449f565b6000611235565b6109318e8e61199d565b505b600061093e8f610c72565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610997959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b03861684529091529020548111156109f857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a3b9084906143bc565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ac19084906143fa565b90915550506000838152600e602052604081208054839290610ae49084906143fa565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610a82565b600080610b3b856112e8565b505060065485906001600160801b031680821115610b6057806001600160801b031691505b81600003610b75576000809250925050610c68565b610b84600360f81b89846109b5565b600654600090610baa9084906001600160801b03600160801b9091048116908516611b28565b9050610bb5836114fd565b610bbf90836144bf565b600680546001600160801b0319166001600160801b0392909216919091179055610be8816114fd565b60068054601090610c0a908490600160801b90046001600160801b03166144bf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c398188876113d6565b9350610c458684611b46565b841015610c655760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610c89610c8486611b5b565b611c95565b9150915080610c9f575060009485945092505050565b6000808611610caf576000610cb9565b610cb9838761195e565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d2491906143fa565b610d2e91906143bc565b905080600003610d475750600096879650945050505050565b6000610d538383611d22565b98600198509650505050505050565b6000610d7460408301602084016143dd565b15610d805750826109ae565b610d8a848461195e565b90506109ae565b6000610da360408301602084016143dd565b15610db257610d8a8484611d22565b50826109ae565b60006001600160f81b03821115610de35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e0288611d37565b9050610e6c610e0f611d88565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611da9565b909850965091506000808080610edd610e83611d88565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e19565b90508c610eec8f878484611e30565b9a509196509094509250610f0084866143bc565b610f0a90886143bc565b9650610f1683866143fa565b610f20908c6143bc565b9a50610f2c888c6143fa565b9950505050505050610fb285858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610f6b91906143bc565b81526020810191909152604001600020546001600160801b0316428d11610fa95760008d8152600760205260409020546001600160801b0316610fab565b8d5b6001611f44565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061100957507f000000000000000000000000000000000000000000000000000000000000000061100785836143bc565b105b1561101657611016611fe3565b6003549084900390600f0b61102b848261449f565b90508361103786611207565b13801561106c57507f000000000000000000000000000000000000000000000000000000000000000061106a8383611ffc565b105b1561107957611079611fe3565b600254600160801b90046001600160801b03166110c06110bb826110a5670de0b6b3a7640000886144df565b6004546001600160801b031691908c6000612022565b6114fd565b600480546001600160801b0319166001600160801b03929092169190911790556110ea88826143bc565b90506110f5816114fd565b600280546001600160801b03928316600160801b02921691909117905561111b836114fd565b600180546001600160801b0319166001600160801b0392909216919091179055611144826120eb565b600380546001600160801b0319166001600160801b039290921691909117905561116d876114fd565b6001805460109061118f908490600160801b90046001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006111e5600e60006111d1600286610db9565b815260200190815260200160002054611207565b6111f7600e60006111d1600187610db9565b611201919061449f565b92915050565b60006001600160ff1b038211156112315760405163396ea70160e11b815260040160405180910390fd5b5090565b600061125e6112448483612127565b61124f846000612127565b611259919061449f565b6120eb565b9050600081600f0b13156112b3576002805482919060009061128a9084906001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112e3576112c8816144f6565b6002805460009061128a9084906001600160801b03166144bf565b505050565b600061120182600461199d565b600080600061130384611527565b90925090506000611314868661195e565b90508183111561132c57611329868385611b28565b95505b8281101561133e578083039250611343565b600092505b61134c83611973565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561139f578690036113a3565b5060005b6113ac816114fd565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806113e3858561195e565b90506113ee8161213d565b9450846000036114025760009150506109ae565b61141260408401602085016143dd565b156114415761143a85611428602086018661437d565b611435604087018761451c565b61218d565b9150611468565b61146485611452602086018661437d565b61145f604087018761451c565b61222b565b8491505b509392505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa1580156114d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112019190614563565b60006001600160801b0382111561123157604051630f0af95160e11b815260040160405180910390fd5b600554600090819061154a908490600160801b90046001600160801b031661195e565b6005546201000090046001600160701b031692509050818111156116c657600061157483836143bc565b90506115836110bb8286612265565b600580546010906115a5908490600160801b90046001600160801b03166144bf565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115de8583611d2290919063ffffffff16565b9050600061160c827f000000000000000000000000000000000000000000000000000000000000000061195e565b905080600b600082825461162091906143fa565b90915550611630905081836143bc565b915061163b826114fd565b600180546000906116569084906001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116838261227a565b60038054600090611698908490600f0b61457c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806116d88785611d22565b91506000611706837f000000000000000000000000000000000000000000000000000000000000000061195e565b9050611732817f000000000000000000000000000000000000000000000000000000000000000061195e565b915083156117555761174482826143bc565b61174e90846143bc565b925061176c565b61175f82826143bc565b61176990846143fa565b92505b8686101561178f5761177f838789611b28565b925061178c828789611b28565b91505b509550959350505050565b600354600160801b90046001600160801b03166117e36110bb826117c6670de0b6b3a7640000866144df565b600454600160801b90046001600160801b031691908a6000612022565b600480546001600160801b03928316600160801b029216919091179055611809866114fd565b61181390826144bf565b600380546001600160801b03928316600160801b029216919091179055611839846114fd565b600180546000906118549084906001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611881836120eb565b60038054600090611896908490600f0b61457c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506118c6856114fd565b600180546010906118e8908490600160801b90046001600160801b03166144bf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061192c846119268a888a611b28565b90611d22565b9050611939888486611b28565b61194390826143fa565b9050868111156119535786810391505b509695505050505050565b60006109ae8383670de0b6b3a7640000611b28565b60006001600160701b038211156112315760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916119e8916001600160801b0316906143bc565b9050806000036119fc576001915050611201565b6000611a07856122a4565b905080600003611a1c57600192505050611201565b600080611a2a838589612346565b9150915080611a40576000945050505050611201565b600080611a4d848961244c565b91509150611a6b611a5d82611207565b611a66906145a9565b61253e565b925082611a815760009650505050505050611201565b611a8a826114fd565b60068054600090611aa59084906001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ad2816114fd565b60068054601090611af4908490600160801b90046001600160801b031661447f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611b3f57600080fd5b5091020490565b60006109ae8383670de0b6b3a764000061264b565b611b6361420e565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611c5b9116612671565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611c8d92900416612671565b905292915050565b6000806000806000611ca6866126e7565b9150915080611cbd57506000958695509350505050565b611cca8660a00151611207565b611cd387612a07565b83611ce18960000151611207565b611ceb919061440d565b611cf5919061440d565b611cff919061449f565b925050506000811215611d185750600093849350915050565b9360019350915050565b60006109ae83670de0b6b3a764000084611b28565b600080611d426104ea565b9050808311611d52576000611d5c565b611d5c81846143bc565b91506109ae827f0000000000000000000000000000000000000000000000000000000000000000611d22565b6001546003546000916104e5916001600160801b0390911690600f0b611ffc565b60008080611dca611dc288670de0b6b3a76400006143bc565b899087611b28565b90508615611e0c57611ddc888861195e565b9150611dfd8a8a84611df68a670de0b6b3a76400006143bc565b8989612a6b565b9250611e0983826143fa565b90505b9750975097945050505050565b60006100b282611e2a858888611b28565b90612a8e565b6000808080611e878786611e808b611e7a611e538c670de0b6b3a76400006143bc565b7f000000000000000000000000000000000000000000000000000000000000000090611b46565b90611b46565b919061264b565b9350611eb3847f000000000000000000000000000000000000000000000000000000000000000061195e565b91506000611ed4611ecc89670de0b6b3a76400006143bc565b8a908861264b565b9050611f00817f0000000000000000000000000000000000000000000000000000000000000000611b46565b9350611f2c847f000000000000000000000000000000000000000000000000000000000000000061195e565b611f3690846143fa565b915050945094509450949050565b60008060008060008088881015611fb3578615611f6957611f668d898b611b28565b9c505b611f748c898b611b28565b9b50611f7f8b611207565b611f888d611207565b611f92919061449f565b9050611f9f8b898b611b28565b9a50611fac8a898b611b28565b9950611fd2565b611fbc8b611207565b611fc58d611207565b611fcf919061449f565b90505b9b9c9a9b999a975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806120098484612b03565b90925090508061201b5761201b611fe3565b5092915050565b6000826000036120335750846120e2565b81156120a55761206461204684876143fa565b612050858761195e565b61205a888a61195e565b61192691906143fa565b905060006120728588612b3f565b905060006120808689612b4e565b9050818310156120925781925061209e565b8083111561209e578092505b50506120e2565b8285036120b4575060006120e2565b6120df6120c184876143bc565b6120cb8587611b46565b6120d5888a61195e565b61192691906143bc565b90505b95945050505050565b600060016001607f1b0319821280612109575060016001607f1b0382135b156112315760405163a5353be560e01b815260040160405180910390fd5b600081831361213657816109ae565b5090919050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024016114bc565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015612207573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b29190614563565b61225f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612b5d565b50505050565b60006109ae83670de0b6b3a76400008461264b565b600060016001607f1b038211156112315760405163a5353be560e01b815260040160405180910390fd5b60025460009081906122bf906001600160801b031684612265565b90506122eb7f0000000000000000000000000000000000000000000000000000000000000000826143fa565b6001546001600160801b03161115612340576001547f0000000000000000000000000000000000000000000000000000000000000000906123369083906001600160801b03166143bc565b6109ae91906143bc565b50919050565b61234e61426f565b60008061235a84611b5b565b9050600061236782611c95565b935090508261237c57506000915061009c9050565b60006123a361239e84610160015185610140015161195e90919063ffffffff16565b611207565b6123c361239e856101200151866101000151611b4690919063ffffffff16565b6123cd919061449f565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806124648660c001518760e00151612b03565b915091508061247b57600080935093505050612537565b60006124878784612baf565b92509050811580612496575080155b156124aa5760008094509450505050612537565b60006124b68883612cbe565b9050806000036124d0576000809550955050505050612537565b876060015181116124e75794509250612537915050565b50606087015160006124fb8986858b612d8f565b90508060000361251657600080965096505050505050612537565b82811061252e57600080965096505050505050612537565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806125908787877f00000000000000000000000000000000000000000000000000000000000000008d6132a4565b9350935093509350806125ac5750600098975050505050505050565b8684146125dd576125bc846114fd565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461260e576125ed836120eb565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461263c5761261e826114fd565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600082600019048411830215820261266257600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006126856104ea565b61268f91906144df565b905080831161269f5760006126a9565b6126a981846143bc565b91506109ae6126e0670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006144df565b8390611d22565b600080600061270c61239e85610160015186610140015161195e90919063ffffffff16565b61272c61239e866101200151876101000151611b4690919063ffffffff16565b612736919061449f565b905060008061274d86600001518760200151612b03565b915091508061276457506000958695509350505050565b60008313156128a557600083905060006127b2886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006127a391906143bc565b8d606001518e608001516133bc565b93509050826127cb575060009788975095505050505050565b818110612869576000612805858a60400151858c60e00151670de0b6b3a76400006127f691906143bc565b8d606001518e608001516134c8565b945090508315801561281a57508860c0015183105b156128315750600098600198509650505050505050565b8361284757506000988998509650505050505050565b61285081611207565b612859906145a9565b9960019950975050505050505050565b6000886020015112612891576128888860a001518561239e91906143bc565b610d53906145a9565b60a088015188516128889161239e916143bc565b60008312156129f85760006128b9846145a9565b905060006128ed8489604001518a60e00151670de0b6b3a76400006128de91906143bc565b8b606001518c6080015161358b565b9350905082612906575060009788975095505050505050565b81811061298b576000612940858a60400151858c60e00151670de0b6b3a764000061293191906143bc565b8d606001518e60800151613634565b945090508315801561295557508860c0015183105b1561296c5750600098600198509650505050505050565b8361298257506000988998509650505050505050565b61285981611207565b60006129bd858a604001518b60e00151670de0b6b3a76400006129ae91906143bc565b8c606001518d6080015161370b565b94509050836129d757506000988998509650505050505050565b6128596129ee8a60600151848661192691906143bc565b61239e90836143fa565b50600095600195509350505050565b6000612a3a61239e836101200151670de0b6b3a7640000612a2891906143bc565b6060850151610100860151919061264b565b6111f761239e846101600151670de0b6b3a7640000612a5991906143bc565b60608601516101408701519190611b28565b600080612a7c8888888888886134c8565b90925090508061195357611953611fe3565b600081600003612aa75750670de0b6b3a7640000611201565b82600003612ab757506000611201565b6000612ac283611207565b90506000612ad7612ad286611207565b6137ba565b9050818102612aee670de0b6b3a7640000826145c5565b9050612af9816139e0565b9695505050505050565b600080600083612b1286611207565b612b1c919061449f565b90506000811215612b34576000809250925050612537565b946001945092505050565b600081831161234057826109ae565b600081831161213657816109ae565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526112e3908490613b75565b60008060008460a0015112612bcc57505060808201516001612537565b60008460a00151612bdc906145a9565b90506000612c1885876101000151886000015160e00151670de0b6b3a7640000612c0691906143bc565b8951606081015160809091015161358b565b93509050821580612c27575080155b15612c3a57600080935093505050612537565b6000612c468383612265565b9050670de0b6b3a76400008111612c825780670de0b6b3a7640000039450612c7b8760c001518661195e90919063ffffffff16565b9450612c91565b60008094509450505050612537565b8660800151851115612cb0578660800151600194509450505050612537565b506001925050509250929050565b600080612cf48460c001518560e00151866101000151876000015160a00151612ce688611207565b612cef906145a9565b6132a4565b87516040810192909252602082019290925291909152905080612d1b576000915050611201565b6000612d2a8560000151611c95565b9250905081612d3e57600092505050611201565b84602001518110612d5457600092505050611201565b600085606001518660400151612d6a91906143fa565b9050612d8582876020015183611b289092919063ffffffff16565b612af990826143bc565b60008085606001518660400151612da691906143fa565b60208701516060880151919250600091612dc09184611b28565b90508660a00151600003612dd75791506100b59050565b60008080896004881015612dea57600497505b60005b8881101561314657612dff868b612b3f565b95506000612e288360c001518460e00151856101000151866000015160a00151612ce68c611207565b86516040810192909252602082019290925291909152905080612e56576000985050505050505050506100b5565b6000612e658e60000151611c95565b9250905081612e8057600099505050505050505050506100b5565b612e8b84828b613bdd565b15612ea1578799505050505050505050506100b5565b60008460a00151131561300a57835180516020820151604083015160a084015160e090940151600094612ef594939291612ee390670de0b6b3a76400006143bc565b8a5160608101516080909101516133bc565b9350905082612f115760009a50505050505050505050506100b5565b808560a001511061300857612f2585613c49565b909950925082612f425760009a50505050505050505050506100b5565b612f678560c001518660e00151876101000151886000015160a00151612ce68e611207565b88516040810192909252602082019290925291909152925082612f975760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612fc79490612ee390670de0b6b3a76400006143bc565b9350905082612fe35760009a50505050505050505050506100b5565b8e60a00151811161300057889a50505050505050505050506100b5565b505050612ded565b505b600061301b858f8760a00151613d1f565b935090508215806130345750670de0b6b3a76400008110155b1561304c5760009a50505050505050505050506100b5565b80670de0b6b3a7640000039050600061307961239e87604001518860200151611b4690919063ffffffff16565b61308661239e858e61195e565b613090919061449f565b90508815806130ae57506130a38961407a565b6130ac8261407a565b125b156130bd578098508997508296505b60008113156130e5576130d48b6119268385611d22565b6130de908b6143fa565b9950613137565b600081121561312e5760006130ff8c6119268581866145a9565b90508a81101561311357808b039a50613128565b60009c505050505050505050505050506100b5565b50613137565b50505050613146565b84600101945050505050612ded565b50600061316e8260c001518360e00151846101000151856000015160a00151612ce68b611207565b8551604081019290925260208201929092529190915290508061319b5760009750505050505050506100b5565b60006131aa8360000151614092565b905060006131cc61239e85604001518660200151611b4690919063ffffffff16565b6131d961239e848c61195e565b6131e3919061449f565b90506131ee8761407a565b6131f78261407a565b1215613204578795508194505b61322b61321f655af3107a4000670de0b6b3a76400006143bc565b6020860151908b61264b565b604085015161323b908790611d22565b108061327b575061326961325d655af3107a4000670de0b6b3a76400006143fa565b6020860151908b611b28565b6040850151613279908790612265565b115b1561329257600099505050505050505050506100b5565b50939c9b505050505050505050505050565b600080600080846000036132c3575087925086915085905060016133b0565b6000856132cf8b611207565b6132d9919061440d565b90506132e487611207565b8112156132ff576000806000809450945094509450506133b0565b8094506000891261331f5761331861239e868b8d611b28565b9350613342565b61333661239e61332e8b6145a9565b87908d61264b565b61333f906145a9565b93505b60008061334f8c8c612b03565b915091508061336e5760008060008096509650965096505050506133b0565b600061337a8888612b03565b925090508161339a576000806000809750975097509750505050506133b0565b6133a58b8285611b28565b955060019450505050505b95509550955095915050565b60008060008812156133de576133d1886145a9565b6133db90876143fa565b95505b6000806133eb8b8b612b03565b9150915080613402576000809350935050506134bc565b6000613411838b8a8a8a6140c2565b9050600061342e6134268a611e2a8a8e611b46565b89908961264b565b9050808210156134485760008095509550505050506134bc565b808203670de0b6b3a7640000811061347d5761347661346f670de0b6b3a76400008c611d22565b8290612a8e565b9050613495565b61349261346f670de0b6b3a76400008c612265565b90505b8b8110156134ae576000809650965050505050506134bc565b8b9003955060019450505050505b97509795505050505050565b60008060006134da89898888886140f1565b90506134ea86611e2a898b6143fa565b975087811015613501576000809250925050613580565b87810361350f81868861264b565b9050670de0b6b3a7640000811061353c5761353561346f670de0b6b3a764000089612265565b9050613554565b61355161346f670de0b6b3a764000089611d22565b90505b61355e8186612265565b9050808a101561357657600080935093505050613580565b8903925060019150505b965096945050505050565b600080600061359d88888888886140f1565b905060006135c8670de0b6b3a76400006135b78888611d22565b6135c191906143fa565b8390612265565b9050670de0b6b3a764000081106135f5576135ee61346f670de0b6b3a764000089612265565b905061360d565b61360a61346f670de0b6b3a764000089611d22565b90505b8088101561362357600080935093505050610c68565b909603976001975095505050505050565b600080600061364689898888886140f1565b90508688101561365d576000809250925050613580565b968690039661366c8887612a8e565b975087811015613683576000809250925050613580565b87810361369181868861264b565b9050670de0b6b3a764000081106136be576136b761346f670de0b6b3a764000089612265565b90506136d6565b6136d361346f670de0b6b3a764000089611d22565b90505b6136e08186612265565b9050898110156136f857600080935093505050613580565b9890980398600198509650505050505050565b600080600061371d88888888886140c2565b90506000613741670de0b6b3a76400006137378888612265565b6126e091906143fa565b9050670de0b6b3a7640000811061376e5761376761346f670de0b6b3a764000089611d22565b9050613786565b61378361346f670de0b6b3a764000089612265565b90505b6137908186611d22565b9050888110156137a857600080935093505050610c68565b97909703976001975095505050505050565b60008082136137dc5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061385f9084901c611207565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136139fb57506000919050565b680755bf798b4a1bf1e58212613a24576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612af974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611207565b6000613b8a6001600160a01b03841683614116565b90508051600014158015613baf575080806020019051810190613bad91906145f3565b155b156112e357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6020830151600090613bef9084612265565b6040850151613bff908490611d22565b101580156100b557506020840151613c2f9084613c28633b9aca00670de0b6b3a76400006143fa565b9190611b28565b6040850151613c3f908490612265565b1115949350505050565b60008060008360e0015113613c6357506000928392509050565b6000613c728460000151612a07565b90506000613c9e856040015186606001518760400151613c9291906143fa565b6020880151919061264b565b905060008212613cc55780821015613cb857819003613cdb565b5060009485945092505050565b613cce826145a9565b613cd890826143fa565b90505b60e085015160c0860151613cf091839061264b565b9050808560c001511015613d0b575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613d4357855160400151613d3c9085906143fa565b9050613d7e565b6000613d4e856145a9565b875160400151909150811015613d6e578651604001518190039150613d7c565b60008093509350505061009c565b505b855180516020909101516000918291613d979190612b03565b9150915080613daf576000809450945050505061009c565b875160e0810151604090910151600091613de491613dd891613dd19190612a8e565b8a9061195e565b6101008b015190612265565b895160e0810151608090910151613e0f91613e0391611e2a908861195e565b8b516060015190612265565b613e1991906143fa565b90506000613e51613e45613e3e8c6000015160e0015188612a8e90919063ffffffff16565b8b90611b46565b6101008c015190611d22565b905080821015613e6c5760008096509650505050505061009c565b80820391506000613eae858c60000151604001518d6000015160e00151670de0b6b3a7640000613e9c91906143bc565b8e5160608101516080909101516140f1565b90506000613ed88c6000015160e00151670de0b6b3a7640000613ed191906143bc565b8890612a8e565b905080821015613ef557600080985098505050505050505061009c565b8b51608081015160609091015191830391613f1191839161264b565b9050670de0b6b3a76400008110613f55578b5160e00151613f4e9061346f90613f4290670de0b6b3a76400006143bc565b8e5160e0015190612265565b9050613f84565b8b5160e00151613f819061346f90613f7590670de0b6b3a76400006143bc565b8e5160e0015190611d22565b90505b8b5160600151613f97908590839061264b565b935083670de0b6b3a76400001115613fbb5783670de0b6b3a7640000039350613fcf565b60006001985098505050505050505061009c565b60008c60e00151126140325760c08c015160e08d0151613fee91612265565b9250670de0b6b3a764000083111561401357600080985098505050505050505061009c565b670de0b6b3a7640000929092039161402b848461195e565b9350614067565b61406461404b8d60c001518e60e00151611926906145a9565b61405d90670de0b6b3a76400006143fa565b859061195e565b93505b50919a60019a5098505050505050505050565b60008082126140895781611201565b611201826145a9565b60008060006140a084611c95565b915091508061201b57604051635516328b60e11b815260040160405180910390fd5b60006140ce8585612a8e565b6140e76140df86611e2a868b61195e565b859085611b28565b6120df91906143fa565b60006140fd8585612a8e565b6140e761410e86611e2a868b611b46565b85908561264b565b60606109ae8383600084600080856001600160a01b0316848660405161413c9190614610565b60006040518083038185875af1925050503d8060008114614179576040519150601f19603f3d011682016040523d82523d6000602084013e61417e565b606091505b5091509150612af986838360608261419e57614199826141e5565b6109ae565b81511580156141b557506001600160a01b0384163b155b156141de57604051639996b31560e01b81526001600160a01b0385166004820152602401613bd4565b50806109ae565b8051156141f55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061428361420e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561234057600080fd5b6000806000606084860312156142e857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561430d57600080fd5b614319868287016142c1565b9150509250925092565b6000806000806080858703121561433957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561436557600080fd5b614371878288016142c1565b91505092959194509250565b60006020828403121561438f57600080fd5b81356001600160a01b03811681146109ae57600080fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115611201576112016143a6565b80151581146104cf57600080fd5b6000602082840312156143ef57600080fd5b81356109ae816143cf565b80820180821115611201576112016143a6565b808201828112600083128015821682158216171561442d5761442d6143a6565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261445a5761445a614435565b500690565b6001600160701b0381811683821601908082111561201b5761201b6143a6565b6001600160801b0381811683821601908082111561201b5761201b6143a6565b818103600083128015838313168383128216171561201b5761201b6143a6565b6001600160801b0382811682821603908082111561201b5761201b6143a6565b8082028115828204841417611201576112016143a6565b600081600f0b60016001607f1b03198103614513576145136143a6565b60000392915050565b6000808335601e1984360301811261453357600080fd5b83018035915067ffffffffffffffff82111561454e57600080fd5b60200191503681900382131561253757600080fd5b60006020828403121561457557600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611201576112016143a6565b6000600160ff1b82016145be576145be6143a6565b5060000390565b6000826145d4576145d4614435565b600160ff1b8214600019841416156145ee576145ee6143a6565b500590565b60006020828403121561460557600080fd5b81516109ae816143cf565b6000825160005b818110156146315760208186018101518583015201614617565b50600092019182525091905056fea26469706673582212203e1759673d545bf834f2f9f10272f741fa02de98074bd88da7de7f1a56a6bc9164736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
