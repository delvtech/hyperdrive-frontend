export const LsETHTarget4 = {
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
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
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
            "name": "openShort",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxDeposit",
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
            "name": "DecreasedPresentValueWhenAddingLiquidity",
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
            "name": "InvalidApr",
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
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004b8738038062004b878339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516147586200042f60003960005050600050506000818160fa01528181610336015281816104e30152610e2d015260008181610e070152818161125e015281816119ff01528181611a62015281816120320152818161243e01528181612654015261269001526000818161015b01528181610de1015281816110d8015261113c0152600061164e0152600081816117740152818161224601526122bf015260008181610af3015281816111d60152818161174801526122930152600061221201526000818161019d01528181610e53015281816110b6015261115d01526000818161017c0152818161057901528181610a2e0152611f4d0152600081816108d40152818161096101526109c6015260008181611536015261212b0152600050506147586000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c3660046143a2565b61007c565b6040519081526020015b60405180910390f35b610067610062366004614406565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c1610146610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107ae565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb89866107f4565b9150915061021261020a6108cd565b826004610903565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b0390911690614476565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5491925090610299908390614489565b905060008060006102a986610d98565b90506102b481610ed2565b91506102c76102c288610f09565b610f37565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610ed2565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b8187614476565b9190610f5d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610f7b565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c61449c565b8a610f99565b60006103c386611041565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610f7b565b6103fd565b60005b90508e600061040d828a8f61104e565b90508c61041d602082018261449c565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a60408701602088016144d3565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c61107d565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b60006105596108cd565b905060006105706105686108cd565b846004610903565b9050600061059e7f000000000000000000000000000000000000000000000000000000000000000084614489565b905060008060006105b08d8887611090565b92509250925080600b60008282546105c89190614489565b90915550600090506105db84898d611210565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c6107f4565b50506106168e848a88611238565b600061062360028761143f565b905060008f9050610647828e6000016020810190610641919061449c565b83610f99565b848a8e84610658602083018361449c565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b8888611474565b61069f60408801602089016144d3565b6106b5898f8c6106af9190614476565b9061149c565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561074d57604051631574f9f360e01b815260040160405180910390fd5b565b600061075e602083018361449c565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107a9916001600160801b0390911690600f0b6114b1565b905090565b6000806107bd878787866114d0565b90506107e96107d182866301e133806114e7565b6107e383670de0b6b3a7640000614476565b90610f7b565b979650505050505050565b6000808061080860408501602086016144d3565b1561082d576108238561081e60408701876144f0565b61150d565b9093509050610849565b50346108458561084060408701876144f0565b611529565b8492505b61085161107d565b915080156108c457604051600090339083908381818185875af1925050503d806000811461089b576040519150601f19603f3d011682016040523d82523d6000602084013e6108a0565b606091505b50509050806108c2576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006108f97f00000000000000000000000000000000000000000000000000000000000000004261454d565b6107a99042614476565b600083815260076020526040812080546001600160801b031615158061092857504285115b1561093e57546001600160801b03169050610d91565b6000806109496108cd565b905080870361095a578591506109f4565b60006109867f000000000000000000000000000000000000000000000000000000000000000089614489565b90505b6000818152600760205260409020546001600160801b0316925081811480156109b0575082155b156109b9578692505b826000036109f2576109eb7f000000000000000000000000000000000000000000000000000000000000000082614489565b9050610989565b505b6109fd82611563565b83546001600160801b0319166001600160801b0391909116178355610a218661158d565b5060009050600781610a537f00000000000000000000000000000000000000000000000000000000000000008b614476565b815260208101919091526040016000908120546001600160801b03169150610a7c60028a61143f565b6000818152600e60205260408120549192508a8a8315610bc25760019250600080610aab86898c866000611731565b9150915080600b6000828254610ac19190614489565b90915550610add905086600084610ad781610f09565b88611800565b610ae78183614489565b9150610b1786838a8d877f000000000000000000000000000000000000000000000000000000000000000061197a565b9150610b2b610b26838561149c565b6119be565b60058054600290610b4c9084906201000090046001600160701b0316614561565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b7982611563565b60058054601090610b9b908490600160801b90046001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610bcf60018461143f565b6000818152600e60205260409020549091508015610cde5760019450600080610bfc838b8e886001611731565b9150915080600b6000828254610c129190614489565b90915550610c2e905083600084610c2881610f09565b8a6119e8565b610c388183614476565b9150610c47610b26838761149c565b60058054600290610c689084906201000090046001600160701b0316614561565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c9582611563565b60058054601090610cb7908490600160801b90046001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d1657610d0a610cf087610f09565b610cf983610f09565b610d0391906145a1565b6000611bd9565b610d148e8e611c87565b505b6000610d218f611e12565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d7a959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610da06142dd565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610e989116611f02565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610eca92900416611f02565b905292915050565b6000806000610ee084611f78565b9150915080610f0257604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f335760405163396ea70160e11b815260040160405180910390fd5b5090565b610f4081612005565b61078557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610f7457600080fd5b5091020490565b6000610f9083670de0b6b3a764000084610f5d565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610fcb908490614489565b90915550506000838152600e602052604081208054839290610fee908490614489565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f93826004611c87565b600061106060408301602084016144d3565b1561106c575082610d91565b611076848461149c565b9050610d91565b60006107a9670de0b6b3a7640000612112565b60008060006110fc6110a0610788565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061219e565b91508561110983876121bf565b1115611117576111176121d4565b6000806000611181611127610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114d0565b905061119789670de0b6b3a7640000838b6121ed565b509194509092506111aa90508284614476565b6111b49086614476565b9450611200886111fa8b6111c8868a614476565b8b6111d38e826122fb565b8e7f0000000000000000000000000000000000000000000000000000000000000000612311565b906121bf565b9550909250505093509350939050565b600061122260408301602084016144d3565b1561122e575082610d91565b6110768484610f7b565b6001546001600160801b031683811015611254576112546121d4565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061128c908390600f0b6114b1565b101561129a5761129a6121d4565b6003546112e9906112e490600160801b90046001600160801b03166112c7670de0b6b3a7640000866145c1565b600454600160801b90046001600160801b03169190896001612336565b611563565b600480546001600160801b03928316600160801b02921691909117905561130f81611563565b600180546001600160801b0319166001600160801b039290921691909117905561133885611563565b6001805460109061135a908490600160801b90046001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061138785611563565b600380546010906113a9908490600160801b90046001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113d8836123f3565b90506113f6816113e788610f09565b6113f190846145a1565b611bd9565b6113ff84612437565b61140b5761140b6121d4565b600061141685611041565b90508061143657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114695760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061148660408301602084016144d3565b15611495576110768484610f7b565b5082610d91565b6000610f908383670de0b6b3a7640000610f5d565b6000806114be8484612497565b909250905080610f0257610f026121d4565b600061008e826114e1858888610f5d565b906124d3565b60008260001904841183021582026114fe57600080fd5b50910281810615159190040190565b60008060405163350b944160e11b815260040160405180910390fd5b61155e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612548565b505050565b60006001600160801b03821115610f3357604051630f0af95160e11b815260040160405180910390fd5b60055460009081906115b0908490600160801b90046001600160801b031661149c565b6005546201000090046001600160701b0316925090508181111561172c5760006115da8383614476565b90506115e96112e482866125a8565b6005805460109061160b908490600160801b90046001600160801b03166145d8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116448583610f7b90919063ffffffff16565b90506000611672827f000000000000000000000000000000000000000000000000000000000000000061149c565b905080600b60008282546116869190614489565b9091555061169690508183614476565b91506116a182611563565b600180546000906116bc9084906001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116e9826125bd565b600380546000906116fe908490600f0b6145f8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061173e8785610f7b565b9150600061176c837f000000000000000000000000000000000000000000000000000000000000000061149c565b9050611798817f000000000000000000000000000000000000000000000000000000000000000061149c565b915083156117bb576117aa8282614476565b6117b49084614476565b92506117d2565b6117c58282614476565b6117cf9084614489565b92505b868610156117f5576117e5838789610f5d565b92506117f2828789610f5d565b91505b509550959350505050565b600354600160801b90046001600160801b03166118496112e48261182c670de0b6b3a7640000866145c1565b600454600160801b90046001600160801b031691908a6000612336565b600480546001600160801b03928316600160801b02921691909117905561186f86611563565b61187990826145d8565b600380546001600160801b03928316600160801b02921691909117905561189f84611563565b600180546000906118ba9084906001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118e7836125e7565b600380546000906118fc908490600f0b6145f8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061192c85611563565b6001805460109061194e908490600160801b90046001600160801b03166145d8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061198c846107e38a888a610f5d565b9050611999888486610f5d565b6119a39082614489565b9050868111156119b35786810391505b509695505050505050565b60006001600160701b03821115610f335760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a2a57507f0000000000000000000000000000000000000000000000000000000000000000611a288583614476565b105b15611a3757611a376121d4565b6003549084900390600f0b611a4c84826145a1565b905083611a5886610f09565b138015611a8d57507f0000000000000000000000000000000000000000000000000000000000000000611a8b83836114b1565b105b15611a9a57611a9a6121d4565b600254600160801b90046001600160801b0316611adc6112e482611ac6670de0b6b3a7640000886145c1565b6004546001600160801b031691908c6000612336565b600480546001600160801b0319166001600160801b0392909216919091179055611b068882614476565b9050611b1181611563565b600280546001600160801b03928316600160801b029216919091179055611b3783611563565b600180546001600160801b0319166001600160801b0392909216919091179055611b60826125e7565b600380546001600160801b0319166001600160801b0392909216919091179055611b8987611563565b60018054601090611bab908490600160801b90046001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c02611be88483612623565b611bf3846000612623565b611bfd91906145a1565b6125e7565b9050600081600f0b1315611c575760028054829190600090611c2e9084906001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561155e57611c6c81614625565b60028054600090611c2e9084906001600160801b03166145d8565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611cd2916001600160801b031690614476565b905080600003611ce6576001915050610f93565b6000611cf185612632565b905080600003611d0657600192505050610f93565b600080611d148385896126d4565b9150915080611d2a576000945050505050610f93565b600080611d3784896127e1565b91509150611d55611d4782610f09565b611d509061464b565b612005565b925082611d6b5760009650505050505050610f93565b611d7482611563565b60068054600090611d8f9084906001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611dbc81611563565b60068054601090611dde908490600160801b90046001600160801b0316614581565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611e29611e2486610d98565b611f78565b9150915080611e3f575060009485945092505050565b6000808611611e4f576000611e59565b611e59838761149c565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611ec49190614489565b611ece9190614476565b905080600003611ee75750600096879650945050505050565b6000611ef38383610f7b565b98600198509650505050505050565b600080670de0b6b3a7640000611f166108cd565b611f2091906145c1565b9050808311611f30576000611f3a565b611f3a8184614476565b9150610d91611f71670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006145c1565b8390610f7b565b6000806000806000611f89866128d1565b9150915080611fa057506000958695509350505050565b611fad8660a00151610f09565b611fb687612bf1565b83611fc48960000151610f09565b611fce9190614667565b611fd89190614667565b611fe291906145a1565b925050506000811215611ffb5750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806120578787877f00000000000000000000000000000000000000000000000000000000000000008d612c55565b9350935093509350806120735750600098975050505050505050565b8684146120a45761208384611563565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146120d5576120b4836125e7565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612103576120e582611563565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f0290602401602060405180830381865afa15801561217a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f93919061468f565b60006107e98787876121b888670de0b6b3a7640000614476565b8787612d6d565b6000610f908383670de0b6b3a76400006114e7565b60405163bb55fd2760e01b815260040160405180910390fd5b600080808061223e87866122378b6111fa6122108c670de0b6b3a7640000614476565b7f0000000000000000000000000000000000000000000000000000000000000000906121bf565b91906114e7565b935061226a847f000000000000000000000000000000000000000000000000000000000000000061149c565b9150600061228b61228389670de0b6b3a7640000614476565b8a90886114e7565b90506122b7817f00000000000000000000000000000000000000000000000000000000000000006121bf565b93506122e3847f000000000000000000000000000000000000000000000000000000000000000061149c565b6122ed9084614489565b915050945094509450949050565b600081831161230a5781610f90565b5090919050565b600080612329846123238a888a6114e7565b906125a8565b90506119998884866114e7565b60008260000361234757508461008e565b81156123b95761237861235a8487614489565b612364858761149c565b61236e888a61149c565b6107e39190614489565b905060006123868588612d90565b9050600061239486896122fb565b9050818310156123a6578192506123b2565b808311156123b2578092505b505061008e565b8285036123c85750600061008e565b61008b6123d58487614476565b6123df85876121bf565b6123e9888a61149c565b6107e39190614476565b600061241b600e600061240760028661143f565b815260200190815260200160002054610f09565b61242d600e600061240760018761143f565b610f9391906145a1565b60006124637f0000000000000000000000000000000000000000000000000000000000000000836121bf565b60025461247991906001600160801b0316614489565b60015461248f906001600160801b03168461149c565b101592915050565b6000806000836124a686610f09565b6124b091906145a1565b905060008112156124c85760008092509250506108c6565b946001945092505050565b6000816000036124ec5750670de0b6b3a7640000610f93565b826000036124fc57506000610f93565b600061250783610f09565b9050600061251c61251786610f09565b612d9f565b9050818102612533670de0b6b3a7640000826146a8565b905061253e81612fc5565b9695505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526125a290859061315a565b50505050565b6000610f9083670de0b6b3a7640000846114e7565b600060016001607f1b03821115610f335760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612605575060016001607f1b0382135b15610f335760405163a5353be560e01b815260040160405180910390fd5b600081831361230a5781610f90565b600254600090819061264d906001600160801b0316846125a8565b90506126797f000000000000000000000000000000000000000000000000000000000000000082614489565b6001546001600160801b031611156126ce576001547f0000000000000000000000000000000000000000000000000000000000000000906126c49083906001600160801b0316614476565b610d919190614476565b50919050565b6126dc61433e565b6000806126e884610d98565b905060006126f582611f78565b935090508261270a5750600091506127d99050565b600061273161272c84610160015185610140015161149c90919063ffffffff16565b610f09565b61275161272c8561012001518661010001516121bf90919063ffffffff16565b61275b91906145a1565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806127f98660c001518760e00151612497565b9150915080612810576000809350935050506108c6565b600061281c87846131c2565b9250905081158061282b575080155b1561283f57600080945094505050506108c6565b600061284b88836132d1565b9050806000036128655760008095509550505050506108c6565b8760600151811161287c57945092506108c6915050565b50606087015160006128908986858b6133a2565b9050806000036128ab576000809650965050505050506108c6565b8281106128c3576000809650965050505050506108c6565b909890975095505050505050565b60008060006128f661272c85610160015186610140015161149c90919063ffffffff16565b61291661272c8661012001518761010001516121bf90919063ffffffff16565b61292091906145a1565b905060008061293786600001518760200151612497565b915091508061294e57506000958695509350505050565b6000831315612a8f576000839050600061299c886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061298d9190614476565b8d606001518e608001516138b9565b93509050826129b5575060009788975095505050505050565b818110612a535760006129ef858a60400151858c60e00151670de0b6b3a76400006129e09190614476565b8d606001518e608001516139c5565b9450905083158015612a0457508860c0015183105b15612a1b5750600098600198509650505050505050565b83612a3157506000988998509650505050505050565b612a3a81610f09565b612a439061464b565b9960019950975050505050505050565b6000886020015112612a7b57612a728860a001518561272c9190614476565b611ef39061464b565b60a08801518851612a729161272c91614476565b6000831215612be2576000612aa38461464b565b90506000612ad78489604001518a60e00151670de0b6b3a7640000612ac89190614476565b8b606001518c60800151613a88565b9350905082612af0575060009788975095505050505050565b818110612b75576000612b2a858a60400151858c60e00151670de0b6b3a7640000612b1b9190614476565b8d606001518e60800151613b34565b9450905083158015612b3f57508860c0015183105b15612b565750600098600198509650505050505050565b83612b6c57506000988998509650505050505050565b612a4381610f09565b6000612ba7858a604001518b60e00151670de0b6b3a7640000612b989190614476565b8c606001518d60800151613c0b565b9450905083612bc157506000988998509650505050505050565b612a43612bd88a6060015184866107e39190614476565b61272c9083614489565b50600095600195509350505050565b6000612c2461272c836101200151670de0b6b3a7640000612c129190614476565b606085015161010086015191906114e7565b61242d61272c846101600151670de0b6b3a7640000612c439190614476565b60608601516101408701519190610f5d565b60008060008084600003612c7457508792508691508590506001612d61565b600085612c808b610f09565b612c8a9190614667565b9050612c9587610f09565b811215612cb057600080600080945094509450945050612d61565b80945060008912612cd057612cc961272c868b8d610f5d565b9350612cf3565b612ce761272c612cdf8b61464b565b87908d6114e7565b612cf09061464b565b93505b600080612d008c8c612497565b9150915080612d1f576000806000809650965096509650505050612d61565b6000612d2b8888612497565b9250905081612d4b57600080600080975097509750975050505050612d61565b612d568b8285610f5d565b955060019450505050505b95509550955095915050565b600080612d7e8888888888886139c5565b9092509050806119b3576119b36121d4565b60008183116126ce5782610f90565b6000808213612dc15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e449084901c610f09565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612fe057506000919050565b680755bf798b4a1bf1e58212613009576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061253e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f09565b600061316f6001600160a01b03841683613cba565b9050805160001415801561319457508080602001905181019061319291906146d6565b155b1561155e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060008460a00151126131df575050608082015160016108c6565b60008460a001516131ef9061464b565b9050600061322b85876101000151886000015160e00151670de0b6b3a76400006132199190614476565b89516060810151608090910151613a88565b9350905082158061323a575080155b1561324d576000809350935050506108c6565b600061325983836125a8565b9050670de0b6b3a764000081116132955780670de0b6b3a764000003945061328e8760c001518661149c90919063ffffffff16565b94506132a4565b600080945094505050506108c6565b86608001518511156132c35786608001516001945094505050506108c6565b506001925050509250929050565b6000806133078460c001518560e00151866101000151876000015160a001516132f988610f09565b6133029061464b565b612c55565b8751604081019290925260208201929092529190915290508061332e576000915050610f93565b600061333d8560000151611f78565b925090508161335157600092505050610f93565b8460200151811061336757600092505050610f93565b60008560600151866040015161337d9190614489565b905061339882876020015183610f5d9092919063ffffffff16565b61253e9082614476565b600080856060015186604001516133b99190614489565b602087015160608801519192506000916133d39184610f5d565b90508660a001516000036133ea5791506138b19050565b600080808960048810156133fd57600497505b60005b8881101561375957613412868b612d90565b9550600061343b8360c001518460e00151856101000151866000015160a001516132f98c610f09565b86516040810192909252602082019290925291909152905080613469576000985050505050505050506138b1565b60006134788e60000151611f78565b925090508161349357600099505050505050505050506138b1565b61349e84828b613cc8565b156134b4578799505050505050505050506138b1565b60008460a00151131561361d57835180516020820151604083015160a084015160e090940151600094613508949392916134f690670de0b6b3a7640000614476565b8a5160608101516080909101516138b9565b93509050826135245760009a50505050505050505050506138b1565b808560a001511061361b5761353885613d2d565b9099509250826135555760009a50505050505050505050506138b1565b61357a8560c001518660e00151876101000151886000015160a001516132f98e610f09565b885160408101929092526020820192909252919091529250826135aa5760009a50505050505050505050506138b1565b845180516020820151604083015160a084015160e0909401516135da94906134f690670de0b6b3a7640000614476565b93509050826135f65760009a50505050505050505050506138b1565b8e60a00151811161361357889a50505050505050505050506138b1565b505050613400565b505b600061362e858f8760a00151613e03565b935090508215806136475750670de0b6b3a76400008110155b1561365f5760009a50505050505050505050506138b1565b80670de0b6b3a7640000039050600061368c61272c876040015188602001516121bf90919063ffffffff16565b61369961272c858e61149c565b6136a391906145a1565b90508815806136c157506136b68961415e565b6136bf8261415e565b125b156136d0578098508997508296505b60008113156136f8576136e78b6107e38385610f7b565b6136f1908b614489565b995061374a565b60008112156137415760006137128c6107e385818661464b565b90508a81101561372657808b039a5061373b565b60009c505050505050505050505050506138b1565b5061374a565b50505050613759565b84600101945050505050613400565b5060006137818260c001518360e00151846101000151856000015160a001516132f98b610f09565b855160408101929092526020820192909252919091529050806137ae5760009750505050505050506138b1565b60006137bd8360000151610ed2565b905060006137df61272c856040015186602001516121bf90919063ffffffff16565b6137ec61272c848c61149c565b6137f691906145a1565b90506138018761415e565b61380a8261415e565b1215613817578795508194505b61383e613832655af3107a4000670de0b6b3a7640000614476565b6020860151908b6114e7565b604085015161384e908790610f7b565b108061388e575061387c613870655af3107a4000670de0b6b3a7640000614489565b6020860151908b610f5d565b604085015161388c9087906125a8565b115b156138a557600099505050505050505050506138b1565b50939750505050505050505b949350505050565b60008060008812156138db576138ce8861464b565b6138d89087614489565b95505b6000806138e88b8b612497565b91509150806138ff576000809350935050506139b9565b600061390e838b8a8a8a614176565b9050600061392b6139238a6114e18a8e6121bf565b8990896114e7565b9050808210156139455760008095509550505050506139b9565b808203670de0b6b3a7640000811061397a5761397361396c670de0b6b3a76400008c610f7b565b82906124d3565b9050613992565b61398f61396c670de0b6b3a76400008c6125a8565b90505b8b8110156139ab576000809650965050505050506139b9565b8b9003955060019450505050505b97509795505050505050565b60008060006139d789898888886141a5565b90506139e7866114e1898b614489565b9750878110156139fe576000809250925050613a7d565b878103613a0c8186886114e7565b9050670de0b6b3a76400008110613a3957613a3261396c670de0b6b3a7640000896125a8565b9050613a51565b613a4e61396c670de0b6b3a764000089610f7b565b90505b613a5b81866125a8565b9050808a1015613a7357600080935093505050613a7d565b8903925060019150505b965096945050505050565b6000806000613a9a88888888886141a5565b90506000613ac5670de0b6b3a7640000613ab48888610f7b565b613abe9190614489565b83906125a8565b9050670de0b6b3a76400008110613af257613aeb61396c670de0b6b3a7640000896125a8565b9050613b0a565b613b0761396c670de0b6b3a764000089610f7b565b90505b80881015613b2057600080935093505050613b2a565b8703925060019150505b9550959350505050565b6000806000613b4689898888886141a5565b905086881015613b5d576000809250925050613a7d565b9686900396613b6c88876124d3565b975087811015613b83576000809250925050613a7d565b878103613b918186886114e7565b9050670de0b6b3a76400008110613bbe57613bb761396c670de0b6b3a7640000896125a8565b9050613bd6565b613bd361396c670de0b6b3a764000089610f7b565b90505b613be081866125a8565b905089811015613bf857600080935093505050613a7d565b9890980398600198509650505050505050565b6000806000613c1d8888888888614176565b90506000613c41670de0b6b3a7640000613c3788886125a8565b611f719190614489565b9050670de0b6b3a76400008110613c6e57613c6761396c670de0b6b3a764000089610f7b565b9050613c86565b613c8361396c670de0b6b3a7640000896125a8565b90505b613c908186610f7b565b905088811015613ca857600080935093505050613b2a565b97909703976001975095505050505050565b6060610f90838360006141ca565b6020830151600090613cda90846125a8565b6040850151613cea908490610f7b565b101580156138b157506020840151613d13908461032b633b9aca00670de0b6b3a7640000614489565b6040850151613d239084906125a8565b1115949350505050565b60008060008360e0015113613d4757506000928392509050565b6000613d568460000151612bf1565b90506000613d82856040015186606001518760400151613d769190614489565b602088015191906114e7565b905060008212613da95780821015613d9c57819003613dbf565b5060009485945092505050565b613db28261464b565b613dbc9082614489565b90505b60e085015160c0860151613dd49183906114e7565b9050808560c001511015613def575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613e2757855160400151613e20908590614489565b9050613e62565b6000613e328561464b565b875160400151909150811015613e52578651604001518190039150613e60565b6000809350935050506127d9565b505b855180516020909101516000918291613e7b9190612497565b9150915080613e9357600080945094505050506127d9565b875160e0810151604090910151600091613ec891613ebc91613eb591906124d3565b8a9061149c565b6101008b0151906125a8565b895160e0810151608090910151613ef391613ee7916114e1908861149c565b8b5160600151906125a8565b613efd9190614489565b90506000613f35613f29613f228c6000015160e00151886124d390919063ffffffff16565b8b906121bf565b6101008c015190610f7b565b905080821015613f50576000809650965050505050506127d9565b80820391506000613f92858c60000151604001518d6000015160e00151670de0b6b3a7640000613f809190614476565b8e5160608101516080909101516141a5565b90506000613fbc8c6000015160e00151670de0b6b3a7640000613fb59190614476565b88906124d3565b905080821015613fd95760008098509850505050505050506127d9565b8b51608081015160609091015191830391613ff59183916114e7565b9050670de0b6b3a76400008110614039578b5160e001516140329061396c9061402690670de0b6b3a7640000614476565b8e5160e00151906125a8565b9050614068565b8b5160e001516140659061396c9061405990670de0b6b3a7640000614476565b8e5160e0015190610f7b565b90505b8b516060015161407b90859083906114e7565b935083670de0b6b3a7640000111561409f5783670de0b6b3a76400000393506140b3565b6000600198509850505050505050506127d9565b60008c60e00151126141165760c08c015160e08d01516140d2916125a8565b9250670de0b6b3a76400008311156140f75760008098509850505050505050506127d9565b670de0b6b3a7640000929092039161410f848461149c565b935061414b565b61414861412f8d60c001518e60e001516107e39061464b565b61414190670de0b6b3a7640000614489565b859061149c565b93505b50919a60019a5098505050505050505050565b600080821261416d5781610f93565b610f938261464b565b600061418285856124d3565b61419b614193866114e1868b61149c565b859085610f5d565b61008b9190614489565b60006141b185856124d3565b61419b6141c2866114e1868b6121bf565b8590856114e7565b6060814710156141ef5760405163cd78605960e01b81523060048201526024016131b9565b600080856001600160a01b0316848660405161420b91906146f3565b60006040518083038185875af1925050503d8060008114614248576040519150601f19603f3d011682016040523d82523d6000602084013e61424d565b606091505b509150915061253e86838360608261426d57614268826142b4565b610d91565b815115801561428457506001600160a01b0384163b155b156142ad57604051639996b31560e01b81526001600160a01b03851660048201526024016131b9565b5080610d91565b8051156142c45780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806143526142dd565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156126ce57600080fd5b600080600080600060a086880312156143ba57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156143ed57600080fd5b6143f988828901614390565b9150509295509295909350565b6000806000806080858703121561441c57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561444857600080fd5b61445487828801614390565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f9357610f93614460565b80820180821115610f9357610f93614460565b6000602082840312156144ae57600080fd5b81356001600160a01b0381168114610d9157600080fd5b801515811461078557600080fd5b6000602082840312156144e557600080fd5b8135610d91816144c5565b6000808335601e1984360301811261450757600080fd5b83018035915067ffffffffffffffff82111561452257600080fd5b6020019150368190038213156108c657600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261455c5761455c614537565b500690565b6001600160701b03818116838216019080821115610f0257610f02614460565b6001600160801b03818116838216019080821115610f0257610f02614460565b8181036000831280158383131683831282161715610f0257610f02614460565b8082028115828204841417610f9357610f93614460565b6001600160801b03828116828216039080821115610f0257610f02614460565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610f9357610f93614460565b600081600f0b60016001607f1b0319810361464257614642614460565b60000392915050565b6000600160ff1b820161466057614660614460565b5060000390565b808201828112600083128015821682158216171561468757614687614460565b505092915050565b6000602082840312156146a157600080fd5b5051919050565b6000826146b7576146b7614537565b600160ff1b8214600019841416156146d1576146d1614460565b500590565b6000602082840312156146e857600080fd5b8151610d91816144c5565b6000825160005b8181101561471457602081860181015185830152016146fa565b50600092019182525091905056fea2646970667358221220396bd63e1c1dafdef14b084381644e64920e50eb2a671c751f0199e65ec9112264736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
