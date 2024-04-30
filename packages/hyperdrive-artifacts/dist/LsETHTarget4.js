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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004b6838038062004b688339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516147396200042f60003960005050600050506000818160fa01528181610336015281816104e30152610e2d015260008181610e070152818161125e015281816119ff01528181611a62015281816120320152818161241f01528181612635015261267101526000818161015b01528181610de1015281816110d8015261113c0152600061164e0152600081816117740152818161224601526122bf015260008181610af3015281816111d60152818161174801526122930152600061221201526000818161019d01528181610e53015281816110b6015261115d01526000818161017c0152818161057901528181610a2e0152611f4d0152600081816108d40152818161096101526109c6015260008181611536015261212b0152600050506147396000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614383565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046143e7565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c1610146610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107ae565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb89866107f4565b9150915061021261020a6108cd565b826004610903565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b0390911690614457565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c549192509061029990839061446a565b905060008060006102a986610d98565b90506102b481610ed2565b91506102c76102c288610f09565b610f37565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610ed2565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b8187614457565b9190610f5d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610f7b565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c61447d565b8a610f99565b60006103c386611041565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610f7b565b6103fd565b60005b90508e600061040d828a8f61104e565b90508c61041d602082018261447d565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a60408701602088016144b4565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c61107d565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b60006105596108cd565b905060006105706105686108cd565b846004610903565b9050600061059e7f00000000000000000000000000000000000000000000000000000000000000008461446a565b905060008060006105b08d8887611090565b92509250925080600b60008282546105c8919061446a565b90915550600090506105db84898d611210565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c6107f4565b50506106168e848a88611238565b600061062360028761143f565b905060008f9050610647828e6000016020810190610641919061447d565b83610f99565b848a8e84610658602083018361447d565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b8888611474565b61069f60408801602089016144b4565b6106b5898f8c6106af9190614457565b9061149c565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561074d57604051631574f9f360e01b815260040160405180910390fd5b565b600061075e602083018361447d565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107a9916001600160801b0390911690600f0b6114b1565b905090565b6000806107bd878787866114d0565b90506107e96107d182866301e133806114e7565b6107e383670de0b6b3a7640000614457565b90610f7b565b979650505050505050565b6000808061080860408501602086016144b4565b1561082d576108238561081e60408701876144d1565b61150d565b9093509050610849565b50346108458561084060408701876144d1565b611529565b8492505b61085161107d565b915080156108c457604051600090339083908381818185875af1925050503d806000811461089b576040519150601f19603f3d011682016040523d82523d6000602084013e6108a0565b606091505b50509050806108c2576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006108f97f00000000000000000000000000000000000000000000000000000000000000004261452e565b6107a99042614457565b600083815260076020526040812080546001600160801b031615158061092857504285115b1561093e57546001600160801b03169050610d91565b6000806109496108cd565b905080870361095a578591506109f4565b60006109867f00000000000000000000000000000000000000000000000000000000000000008961446a565b90505b6000818152600760205260409020546001600160801b0316925081811480156109b0575082155b156109b9578692505b826000036109f2576109eb7f00000000000000000000000000000000000000000000000000000000000000008261446a565b9050610989565b505b6109fd82611563565b83546001600160801b0319166001600160801b0391909116178355610a218661158d565b5060009050600781610a537f00000000000000000000000000000000000000000000000000000000000000008b614457565b815260208101919091526040016000908120546001600160801b03169150610a7c60028a61143f565b6000818152600e60205260408120549192508a8a8315610bc25760019250600080610aab86898c866000611731565b9150915080600b6000828254610ac1919061446a565b90915550610add905086600084610ad781610f09565b88611800565b610ae7818361446a565b9150610b1786838a8d877f000000000000000000000000000000000000000000000000000000000000000061197a565b9150610b2b610b26838561149c565b6119be565b60058054600290610b4c9084906201000090046001600160701b0316614542565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b7982611563565b60058054601090610b9b908490600160801b90046001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610bcf60018461143f565b6000818152600e60205260409020549091508015610cde5760019450600080610bfc838b8e886001611731565b9150915080600b6000828254610c12919061446a565b90915550610c2e905083600084610c2881610f09565b8a6119e8565b610c388183614457565b9150610c47610b26838761149c565b60058054600290610c689084906201000090046001600160701b0316614542565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c9582611563565b60058054601090610cb7908490600160801b90046001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d1657610d0a610cf087610f09565b610cf983610f09565b610d039190614582565b6000611bd9565b610d148e8e611c87565b505b6000610d218f611e12565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d7a959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610da06142be565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610e989116611f02565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610eca92900416611f02565b905292915050565b6000806000610ee084611f78565b9150915080610f0257604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f335760405163396ea70160e11b815260040160405180910390fd5b5090565b610f4081612005565b61078557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610f7457600080fd5b5091020490565b6000610f9083670de0b6b3a764000084610f5d565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610fcb90849061446a565b90915550506000838152600e602052604081208054839290610fee90849061446a565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f93826004611c87565b600061106060408301602084016144b4565b1561106c575082610d91565b611076848461149c565b9050610d91565b60006107a9670de0b6b3a7640000612112565b60008060006110fc6110a0610788565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061219e565b91508561110983876121bf565b1115611117576111176121d4565b6000806000611181611127610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114d0565b905061119789670de0b6b3a7640000838b6121ed565b509194509092506111aa90508284614457565b6111b49086614457565b9450611200886111fa8b6111c8868a614457565b8b6111d38e826122fb565b8e7f0000000000000000000000000000000000000000000000000000000000000000612311565b906121bf565b9550909250505093509350939050565b600061122260408301602084016144b4565b1561122e575082610d91565b6110768484610f7b565b6001546001600160801b031683811015611254576112546121d4565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061128c908390600f0b6114b1565b101561129a5761129a6121d4565b6003546112e9906112e490600160801b90046001600160801b03166112c7670de0b6b3a7640000866145a2565b600454600160801b90046001600160801b03169190896001612336565b611563565b600480546001600160801b03928316600160801b02921691909117905561130f81611563565b600180546001600160801b0319166001600160801b039290921691909117905561133885611563565b6001805460109061135a908490600160801b90046001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061138785611563565b600380546010906113a9908490600160801b90046001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113d8836123d4565b90506113f6816113e788610f09565b6113f19084614582565b611bd9565b6113ff84612418565b61140b5761140b6121d4565b600061141685611041565b90508061143657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114695760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061148660408301602084016144b4565b15611495576110768484610f7b565b5082610d91565b6000610f908383670de0b6b3a7640000610f5d565b6000806114be8484612478565b909250905080610f0257610f026121d4565b600061008e826114e1858888610f5d565b906124b4565b60008260001904841183021582026114fe57600080fd5b50910281810615159190040190565b60008060405163350b944160e11b815260040160405180910390fd5b61155e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612529565b505050565b60006001600160801b03821115610f3357604051630f0af95160e11b815260040160405180910390fd5b60055460009081906115b0908490600160801b90046001600160801b031661149c565b6005546201000090046001600160701b0316925090508181111561172c5760006115da8383614457565b90506115e96112e48286612589565b6005805460109061160b908490600160801b90046001600160801b03166145b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116448583610f7b90919063ffffffff16565b90506000611672827f000000000000000000000000000000000000000000000000000000000000000061149c565b905080600b6000828254611686919061446a565b9091555061169690508183614457565b91506116a182611563565b600180546000906116bc9084906001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116e98261259e565b600380546000906116fe908490600f0b6145d9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061173e8785610f7b565b9150600061176c837f000000000000000000000000000000000000000000000000000000000000000061149c565b9050611798817f000000000000000000000000000000000000000000000000000000000000000061149c565b915083156117bb576117aa8282614457565b6117b49084614457565b92506117d2565b6117c58282614457565b6117cf908461446a565b92505b868610156117f5576117e5838789610f5d565b92506117f2828789610f5d565b91505b509550959350505050565b600354600160801b90046001600160801b03166118496112e48261182c670de0b6b3a7640000866145a2565b600454600160801b90046001600160801b031691908a6000612336565b600480546001600160801b03928316600160801b02921691909117905561186f86611563565b61187990826145b9565b600380546001600160801b03928316600160801b02921691909117905561189f84611563565b600180546000906118ba9084906001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118e7836125c8565b600380546000906118fc908490600f0b6145d9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061192c85611563565b6001805460109061194e908490600160801b90046001600160801b03166145b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061198c846107e38a888a610f5d565b9050611999888486610f5d565b6119a3908261446a565b9050868111156119b35786810391505b509695505050505050565b60006001600160701b03821115610f335760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a2a57507f0000000000000000000000000000000000000000000000000000000000000000611a288583614457565b105b15611a3757611a376121d4565b6003549084900390600f0b611a4c8482614582565b905083611a5886610f09565b138015611a8d57507f0000000000000000000000000000000000000000000000000000000000000000611a8b83836114b1565b105b15611a9a57611a9a6121d4565b600254600160801b90046001600160801b0316611adc6112e482611ac6670de0b6b3a7640000886145a2565b6004546001600160801b031691908c6000612336565b600480546001600160801b0319166001600160801b0392909216919091179055611b068882614457565b9050611b1181611563565b600280546001600160801b03928316600160801b029216919091179055611b3783611563565b600180546001600160801b0319166001600160801b0392909216919091179055611b60826125c8565b600380546001600160801b0319166001600160801b0392909216919091179055611b8987611563565b60018054601090611bab908490600160801b90046001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c02611be88483612604565b611bf3846000612604565b611bfd9190614582565b6125c8565b9050600081600f0b1315611c575760028054829190600090611c2e9084906001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561155e57611c6c81614606565b60028054600090611c2e9084906001600160801b03166145b9565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611cd2916001600160801b031690614457565b905080600003611ce6576001915050610f93565b6000611cf185612613565b905080600003611d0657600192505050610f93565b600080611d148385896126b5565b9150915080611d2a576000945050505050610f93565b600080611d3784896127c2565b91509150611d55611d4782610f09565b611d509061462c565b612005565b925082611d6b5760009650505050505050610f93565b611d7482611563565b60068054600090611d8f9084906001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611dbc81611563565b60068054601090611dde908490600160801b90046001600160801b0316614562565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611e29611e2486610d98565b611f78565b9150915080611e3f575060009485945092505050565b6000808611611e4f576000611e59565b611e59838761149c565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611ec4919061446a565b611ece9190614457565b905080600003611ee75750600096879650945050505050565b6000611ef38383610f7b565b98600198509650505050505050565b600080670de0b6b3a7640000611f166108cd565b611f2091906145a2565b9050808311611f30576000611f3a565b611f3a8184614457565b9150610d91611f71670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006145a2565b8390610f7b565b6000806000806000611f89866128b2565b9150915080611fa057506000958695509350505050565b611fad8660a00151610f09565b611fb687612bd2565b83611fc48960000151610f09565b611fce9190614648565b611fd89190614648565b611fe29190614582565b925050506000811215611ffb5750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806120578787877f00000000000000000000000000000000000000000000000000000000000000008d612c36565b9350935093509350806120735750600098975050505050505050565b8684146120a45761208384611563565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146120d5576120b4836125c8565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612103576120e582611563565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f0290602401602060405180830381865afa15801561217a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f939190614670565b60006107e98787876121b888670de0b6b3a7640000614457565b8787612d4e565b6000610f908383670de0b6b3a76400006114e7565b60405163bb55fd2760e01b815260040160405180910390fd5b600080808061223e87866122378b6111fa6122108c670de0b6b3a7640000614457565b7f0000000000000000000000000000000000000000000000000000000000000000906121bf565b91906114e7565b935061226a847f000000000000000000000000000000000000000000000000000000000000000061149c565b9150600061228b61228389670de0b6b3a7640000614457565b8a90886114e7565b90506122b7817f00000000000000000000000000000000000000000000000000000000000000006121bf565b93506122e3847f000000000000000000000000000000000000000000000000000000000000000061149c565b6122ed908461446a565b915050945094509450949050565b600081831161230a5781610f90565b5090919050565b600080612329846123238a888a6114e7565b90612589565b90506119998884866114e7565b60008260000361234757508461008e565b811561239a5761237861235a848761446a565b612364858761149c565b61236e888a61149c565b6107e3919061446a565b905060006123868588612d71565b905080821015612394578091505b5061008e565b8285036123a95750600061008e565b61008b6123b68487614457565b6123c085876121bf565b6123ca888a61149c565b6107e39190614457565b60006123fc600e60006123e860028661143f565b815260200190815260200160002054610f09565b61240e600e60006123e860018761143f565b610f939190614582565b60006124447f0000000000000000000000000000000000000000000000000000000000000000836121bf565b60025461245a91906001600160801b031661446a565b600154612470906001600160801b03168461149c565b101592915050565b60008060008361248786610f09565b6124919190614582565b905060008112156124a95760008092509250506108c6565b946001945092505050565b6000816000036124cd5750670de0b6b3a7640000610f93565b826000036124dd57506000610f93565b60006124e883610f09565b905060006124fd6124f886610f09565b612d80565b9050818102612514670de0b6b3a764000082614689565b905061251f81612fa6565b9695505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261258390859061313b565b50505050565b6000610f9083670de0b6b3a7640000846114e7565b600060016001607f1b03821115610f335760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806125e6575060016001607f1b0382135b15610f335760405163a5353be560e01b815260040160405180910390fd5b600081831361230a5781610f90565b600254600090819061262e906001600160801b031684612589565b905061265a7f00000000000000000000000000000000000000000000000000000000000000008261446a565b6001546001600160801b031611156126af576001547f0000000000000000000000000000000000000000000000000000000000000000906126a59083906001600160801b0316614457565b610d919190614457565b50919050565b6126bd61431f565b6000806126c984610d98565b905060006126d682611f78565b93509050826126eb5750600091506127ba9050565b600061271261270d84610160015185610140015161149c90919063ffffffff16565b610f09565b61273261270d8561012001518661010001516121bf90919063ffffffff16565b61273c9190614582565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806127da8660c001518760e00151612478565b91509150806127f1576000809350935050506108c6565b60006127fd87846131a3565b9250905081158061280c575080155b1561282057600080945094505050506108c6565b600061282c88836132b2565b9050806000036128465760008095509550505050506108c6565b8760600151811161285d57945092506108c6915050565b50606087015160006128718986858b613383565b90508060000361288c576000809650965050505050506108c6565b8281106128a4576000809650965050505050506108c6565b909890975095505050505050565b60008060006128d761270d85610160015186610140015161149c90919063ffffffff16565b6128f761270d8661012001518761010001516121bf90919063ffffffff16565b6129019190614582565b905060008061291886600001518760200151612478565b915091508061292f57506000958695509350505050565b6000831315612a70576000839050600061297d886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061296e9190614457565b8d606001518e6080015161389a565b9350905082612996575060009788975095505050505050565b818110612a345760006129d0858a60400151858c60e00151670de0b6b3a76400006129c19190614457565b8d606001518e608001516139a6565b94509050831580156129e557508860c0015183105b156129fc5750600098600198509650505050505050565b83612a1257506000988998509650505050505050565b612a1b81610f09565b612a249061462c565b9960019950975050505050505050565b6000886020015112612a5c57612a538860a001518561270d9190614457565b611ef39061462c565b60a08801518851612a539161270d91614457565b6000831215612bc3576000612a848461462c565b90506000612ab88489604001518a60e00151670de0b6b3a7640000612aa99190614457565b8b606001518c60800151613a69565b9350905082612ad1575060009788975095505050505050565b818110612b56576000612b0b858a60400151858c60e00151670de0b6b3a7640000612afc9190614457565b8d606001518e60800151613b15565b9450905083158015612b2057508860c0015183105b15612b375750600098600198509650505050505050565b83612b4d57506000988998509650505050505050565b612a2481610f09565b6000612b88858a604001518b60e00151670de0b6b3a7640000612b799190614457565b8c606001518d60800151613bec565b9450905083612ba257506000988998509650505050505050565b612a24612bb98a6060015184866107e39190614457565b61270d908361446a565b50600095600195509350505050565b6000612c0561270d836101200151670de0b6b3a7640000612bf39190614457565b606085015161010086015191906114e7565b61240e61270d846101600151670de0b6b3a7640000612c249190614457565b60608601516101408701519190610f5d565b60008060008084600003612c5557508792508691508590506001612d42565b600085612c618b610f09565b612c6b9190614648565b9050612c7687610f09565b811215612c9157600080600080945094509450945050612d42565b80945060008912612cb157612caa61270d868b8d610f5d565b9350612cd4565b612cc861270d612cc08b61462c565b87908d6114e7565b612cd19061462c565b93505b600080612ce18c8c612478565b9150915080612d00576000806000809650965096509650505050612d42565b6000612d0c8888612478565b9250905081612d2c57600080600080975097509750975050505050612d42565b612d378b8285610f5d565b955060019450505050505b95509550955095915050565b600080612d5f8888888888886139a6565b9092509050806119b3576119b36121d4565b60008183116126af5782610f90565b6000808213612da25760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e259084901c610f09565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612fc157506000919050565b680755bf798b4a1bf1e58212612fea576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061251f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f09565b60006131506001600160a01b03841683613c9b565b9050805160001415801561317557508080602001905181019061317391906146b7565b155b1561155e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060008460a00151126131c0575050608082015160016108c6565b60008460a001516131d09061462c565b9050600061320c85876101000151886000015160e00151670de0b6b3a76400006131fa9190614457565b89516060810151608090910151613a69565b9350905082158061321b575080155b1561322e576000809350935050506108c6565b600061323a8383612589565b9050670de0b6b3a764000081116132765780670de0b6b3a764000003945061326f8760c001518661149c90919063ffffffff16565b9450613285565b600080945094505050506108c6565b86608001518511156132a45786608001516001945094505050506108c6565b506001925050509250929050565b6000806132e88460c001518560e00151866101000151876000015160a001516132da88610f09565b6132e39061462c565b612c36565b8751604081019290925260208201929092529190915290508061330f576000915050610f93565b600061331e8560000151611f78565b925090508161333257600092505050610f93565b8460200151811061334857600092505050610f93565b60008560600151866040015161335e919061446a565b905061337982876020015183610f5d9092919063ffffffff16565b61251f9082614457565b6000808560600151866040015161339a919061446a565b602087015160608801519192506000916133b49184610f5d565b90508660a001516000036133cb5791506138929050565b600080808960048810156133de57600497505b60005b8881101561373a576133f3868b612d71565b9550600061341c8360c001518460e00151856101000151866000015160a001516132da8c610f09565b8651604081019290925260208201929092529190915290508061344a57600098505050505050505050613892565b60006134598e60000151611f78565b92509050816134745760009950505050505050505050613892565b61347f84828b613ca9565b1561349557879950505050505050505050613892565b60008460a0015113156135fe57835180516020820151604083015160a084015160e0909401516000946134e9949392916134d790670de0b6b3a7640000614457565b8a51606081015160809091015161389a565b93509050826135055760009a5050505050505050505050613892565b808560a00151106135fc5761351985613d0e565b9099509250826135365760009a5050505050505050505050613892565b61355b8560c001518660e00151876101000151886000015160a001516132da8e610f09565b8851604081019290925260208201929092529190915292508261358b5760009a5050505050505050505050613892565b845180516020820151604083015160a084015160e0909401516135bb94906134d790670de0b6b3a7640000614457565b93509050826135d75760009a5050505050505050505050613892565b8e60a0015181116135f457889a5050505050505050505050613892565b5050506133e1565b505b600061360f858f8760a00151613de4565b935090508215806136285750670de0b6b3a76400008110155b156136405760009a5050505050505050505050613892565b80670de0b6b3a7640000039050600061366d61270d876040015188602001516121bf90919063ffffffff16565b61367a61270d858e61149c565b6136849190614582565b90508815806136a257506136978961413f565b6136a08261413f565b125b156136b1578098508997508296505b60008113156136d9576136c88b6107e38385610f7b565b6136d2908b61446a565b995061372b565b60008112156137225760006136f38c6107e385818661462c565b90508a81101561370757808b039a5061371c565b60009c50505050505050505050505050613892565b5061372b565b5050505061373a565b846001019450505050506133e1565b5060006137628260c001518360e00151846101000151856000015160a001516132da8b610f09565b8551604081019290925260208201929092529190915290508061378f576000975050505050505050613892565b600061379e8360000151610ed2565b905060006137c061270d856040015186602001516121bf90919063ffffffff16565b6137cd61270d848c61149c565b6137d79190614582565b90506137e28761413f565b6137eb8261413f565b12156137f8578795508194505b61381f613813655af3107a4000670de0b6b3a7640000614457565b6020860151908b6114e7565b604085015161382f908790610f7b565b108061386f575061385d613851655af3107a4000670de0b6b3a764000061446a565b6020860151908b610f5d565b604085015161386d908790612589565b115b156138865760009950505050505050505050613892565b50939750505050505050505b949350505050565b60008060008812156138bc576138af8861462c565b6138b9908761446a565b95505b6000806138c98b8b612478565b91509150806138e05760008093509350505061399a565b60006138ef838b8a8a8a614157565b9050600061390c6139048a6114e18a8e6121bf565b8990896114e7565b90508082101561392657600080955095505050505061399a565b808203670de0b6b3a7640000811061395b5761395461394d670de0b6b3a76400008c610f7b565b82906124b4565b9050613973565b61397061394d670de0b6b3a76400008c612589565b90505b8b81101561398c5760008096509650505050505061399a565b8b9003955060019450505050505b97509795505050505050565b60008060006139b88989888888614186565b90506139c8866114e1898b61446a565b9750878110156139df576000809250925050613a5e565b8781036139ed8186886114e7565b9050670de0b6b3a76400008110613a1a57613a1361394d670de0b6b3a764000089612589565b9050613a32565b613a2f61394d670de0b6b3a764000089610f7b565b90505b613a3c8186612589565b9050808a1015613a5457600080935093505050613a5e565b8903925060019150505b965096945050505050565b6000806000613a7b8888888888614186565b90506000613aa6670de0b6b3a7640000613a958888610f7b565b613a9f919061446a565b8390612589565b9050670de0b6b3a76400008110613ad357613acc61394d670de0b6b3a764000089612589565b9050613aeb565b613ae861394d670de0b6b3a764000089610f7b565b90505b80881015613b0157600080935093505050613b0b565b8703925060019150505b9550959350505050565b6000806000613b278989888888614186565b905086881015613b3e576000809250925050613a5e565b9686900396613b4d88876124b4565b975087811015613b64576000809250925050613a5e565b878103613b728186886114e7565b9050670de0b6b3a76400008110613b9f57613b9861394d670de0b6b3a764000089612589565b9050613bb7565b613bb461394d670de0b6b3a764000089610f7b565b90505b613bc18186612589565b905089811015613bd957600080935093505050613a5e565b9890980398600198509650505050505050565b6000806000613bfe8888888888614157565b90506000613c22670de0b6b3a7640000613c188888612589565b611f71919061446a565b9050670de0b6b3a76400008110613c4f57613c4861394d670de0b6b3a764000089610f7b565b9050613c67565b613c6461394d670de0b6b3a764000089612589565b90505b613c718186610f7b565b905088811015613c8957600080935093505050613b0b565b97909703976001975095505050505050565b6060610f90838360006141ab565b6020830151600090613cbb9084612589565b6040850151613ccb908490610f7b565b1015801561389257506020840151613cf4908461032b633b9aca00670de0b6b3a764000061446a565b6040850151613d04908490612589565b1115949350505050565b60008060008360e0015113613d2857506000928392509050565b6000613d378460000151612bd2565b90506000613d63856040015186606001518760400151613d57919061446a565b602088015191906114e7565b905060008212613d8a5780821015613d7d57819003613da0565b5060009485945092505050565b613d938261462c565b613d9d908261446a565b90505b60e085015160c0860151613db59183906114e7565b9050808560c001511015613dd0575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613e0857855160400151613e0190859061446a565b9050613e43565b6000613e138561462c565b875160400151909150811015613e33578651604001518190039150613e41565b6000809350935050506127ba565b505b855180516020909101516000918291613e5c9190612478565b9150915080613e7457600080945094505050506127ba565b875160e0810151604090910151600091613ea991613e9d91613e9691906124b4565b8a9061149c565b6101008b015190612589565b895160e0810151608090910151613ed491613ec8916114e1908861149c565b8b516060015190612589565b613ede919061446a565b90506000613f16613f0a613f038c6000015160e00151886124b490919063ffffffff16565b8b906121bf565b6101008c015190610f7b565b905080821015613f31576000809650965050505050506127ba565b80820391506000613f73858c60000151604001518d6000015160e00151670de0b6b3a7640000613f619190614457565b8e516060810151608090910151614186565b90506000613f9d8c6000015160e00151670de0b6b3a7640000613f969190614457565b88906124b4565b905080821015613fba5760008098509850505050505050506127ba565b8b51608081015160609091015191830391613fd69183916114e7565b9050670de0b6b3a7640000811061401a578b5160e001516140139061394d9061400790670de0b6b3a7640000614457565b8e5160e0015190612589565b9050614049565b8b5160e001516140469061394d9061403a90670de0b6b3a7640000614457565b8e5160e0015190610f7b565b90505b8b516060015161405c90859083906114e7565b935083670de0b6b3a764000011156140805783670de0b6b3a7640000039350614094565b6000600198509850505050505050506127ba565b60008c60e00151126140f75760c08c015160e08d01516140b391612589565b9250670de0b6b3a76400008311156140d85760008098509850505050505050506127ba565b670de0b6b3a764000092909203916140f0848461149c565b935061412c565b6141296141108d60c001518e60e001516107e39061462c565b61412290670de0b6b3a764000061446a565b859061149c565b93505b50919a60019a5098505050505050505050565b600080821261414e5781610f93565b610f938261462c565b600061416385856124b4565b61417c614174866114e1868b61149c565b859085610f5d565b61008b919061446a565b600061419285856124b4565b61417c6141a3866114e1868b6121bf565b8590856114e7565b6060814710156141d05760405163cd78605960e01b815230600482015260240161319a565b600080856001600160a01b031684866040516141ec91906146d4565b60006040518083038185875af1925050503d8060008114614229576040519150601f19603f3d011682016040523d82523d6000602084013e61422e565b606091505b509150915061251f86838360608261424e5761424982614295565b610d91565b815115801561426557506001600160a01b0384163b155b1561428e57604051639996b31560e01b81526001600160a01b038516600482015260240161319a565b5080610d91565b8051156142a55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806143336142be565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156126af57600080fd5b600080600080600060a0868803121561439b57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156143ce57600080fd5b6143da88828901614371565b9150509295509295909350565b600080600080608085870312156143fd57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561442957600080fd5b61443587828801614371565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f9357610f93614441565b80820180821115610f9357610f93614441565b60006020828403121561448f57600080fd5b81356001600160a01b0381168114610d9157600080fd5b801515811461078557600080fd5b6000602082840312156144c657600080fd5b8135610d91816144a6565b6000808335601e198436030181126144e857600080fd5b83018035915067ffffffffffffffff82111561450357600080fd5b6020019150368190038213156108c657600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261453d5761453d614518565b500690565b6001600160701b03818116838216019080821115610f0257610f02614441565b6001600160801b03818116838216019080821115610f0257610f02614441565b8181036000831280158383131683831282161715610f0257610f02614441565b8082028115828204841417610f9357610f93614441565b6001600160801b03828116828216039080821115610f0257610f02614441565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610f9357610f93614441565b600081600f0b60016001607f1b0319810361462357614623614441565b60000392915050565b6000600160ff1b820161464157614641614441565b5060000390565b808201828112600083128015821682158216171561466857614668614441565b505092915050565b60006020828403121561468257600080fd5b5051919050565b60008261469857614698614518565b600160ff1b8214600019841416156146b2576146b2614441565b500590565b6000602082840312156146c957600080fd5b8151610d91816144a6565b6000825160005b818110156146f557602081860181015185830152016146db565b50600092019182525091905056fea2646970667358221220f5e5aa629d4219e3a04db3425aace90fdd2342ce7341da25a74d186f6a73917d64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
