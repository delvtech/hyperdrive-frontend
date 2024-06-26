export const StETHTarget4 = {
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004a2a38038062004a2a8339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516145f46200043660003960005050600050506000818160f20152818161032e015281816104d30152610dfc015260008181610dd60152818161122d01528181611adb01528181611b3e015281816121130152818161251f015281816126d5015261271101526000818161015301528181610db0015281816110a7015261110b0152600061172a0152600081816118500152818161232701526123a0015260008181610ac2015281816111a5015281816118240152612374015260006122f301526000818161019501528181610e2201528181611085015261112c01526000818161017401528181610569015281816109fd015261202e0152600081816108a3015281816109300152610995015260008181611528015281816115c4015261220c0152600050506145f46000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614293565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046142f7565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a686868686610494565b915091505b94509492505050565b60006100be6106f4565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100f08261071e565b7f00000000000000000000000000000000000000000000000000000000000000008610156101315760405163211ddda360e11b815260040160405180910390fd5b60006101b961013e610757565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061077d565b9050848110806101c857508381115b156101e657604051633b61151160e11b815260040160405180910390fd5b6000806101f389866107c3565b9150915061020a61020261089c565b8260046108d2565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610256916001600160801b0390911690614367565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c549192509061029190839061437a565b905060008060006102a186610d67565b90506102ac81610ea1565b91506102bf6102ba88610ed8565b610f06565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f181610ea1565b9250818310156103145760405163184d952160e11b815260040160405180910390fd5b61032a84836103238187614367565b9190610f2c565b98507f000000000000000000000000000000000000000000000000000000000000000089101561036d5760405163211ddda360e11b815260040160405180910390fd5b508b6103798e8a610f4a565b10156103985760405163c972651760e01b815260040160405180910390fd5b6103b060006103aa60208c018c61438d565b8a610f68565b60006103bb86611010565b9050806103db57604051638bdf918d60e01b815260040160405180910390fd5b600084156103f2576103ed8386610f4a565b6103f5565b60005b90508e6000610405828a8f61101d565b90508c610415602082018261438d565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045260408701602088016143b6565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b60008061049f6106f4565b600554610100900460ff16156104c8576040516321081abf60e01b815260040160405180910390fd5b6104d18361071e565b7f00000000000000000000000000000000000000000000000000000000000000008610156105125760405163211ddda360e11b815260040160405180910390fd5b600061051c61104c565b90508481101561053f576040516342af972b60e01b815260040160405180910390fd5b600061054961089c565b9050600061056061055861089c565b8460046108d2565b9050600061058e7f00000000000000000000000000000000000000000000000000000000000000008461437a565b905060008060006105a08d888761105f565b92509250925080600b60008282546105b8919061437a565b90915550600090506105cb84898d6111df565b9050808d10156105ee5760405163c972651760e01b815260040160405180910390fd5b6105f8818c6107c3565b50506106068e848a88611207565b600061061360028761140e565b905060008f9050610637828e6000016020810190610631919061438d565b83610f68565b848a8e84610648602083018361438d565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61067f8b8888611443565b61068f60408801602089016143b6565b6106a5898f8c61069f9190614367565b9061146b565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361071757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061072d602083018361438d565b6001600160a01b0316036107545760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600154600354600091610778916001600160801b0390911690600f0b611480565b905090565b60008061078c8787878661149f565b90506107b86107a082866301e133806114b6565b6107b283670de0b6b3a7640000614367565b90610f4a565b979650505050505050565b600080806107d760408501602086016143b6565b156107fc576107f2856107ed60408701876143d8565b6114dc565b9093509050610818565b50346108148561080f60408701876143d8565b6115a2565b8492505b61082061104c565b9150801561089357604051600090339083908381818185875af1925050503d806000811461086a576040519150601f19603f3d011682016040523d82523d6000602084013e61086f565b606091505b5050905080610891576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006108c87f000000000000000000000000000000000000000000000000000000000000000042614435565b6107789042614367565b600083815260076020526040812080546001600160801b03161515806108f757504285115b1561090d57546001600160801b03169050610d60565b60008061091861089c565b9050808703610929578591506109c3565b60006109557f00000000000000000000000000000000000000000000000000000000000000008961437a565b90505b6000818152600760205260409020546001600160801b03169250818114801561097f575082155b15610988578692505b826000036109c1576109ba7f00000000000000000000000000000000000000000000000000000000000000008261437a565b9050610958565b505b6109cc8261163f565b83546001600160801b0319166001600160801b03919091161783556109f086611669565b5060009050600781610a227f00000000000000000000000000000000000000000000000000000000000000008b614367565b815260208101919091526040016000908120546001600160801b03169150610a4b60028a61140e565b6000818152600e60205260408120549192508a8a8315610b915760019250600080610a7a86898c86600061180d565b9150915080600b6000828254610a90919061437a565b90915550610aac905086600084610aa681610ed8565b886118dc565b610ab6818361437a565b9150610ae686838a8d877f0000000000000000000000000000000000000000000000000000000000000000611a56565b9150610afa610af5838561146b565b611a9a565b60058054600290610b1b9084906201000090046001600160701b0316614449565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b488261163f565b60058054601090610b6a908490600160801b90046001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b9e60018461140e565b6000818152600e60205260409020549091508015610cad5760019450600080610bcb838b8e88600161180d565b9150915080600b6000828254610be1919061437a565b90915550610bfd905083600084610bf781610ed8565b8a611ac4565b610c078183614367565b9150610c16610af5838761146b565b60058054600290610c379084906201000090046001600160701b0316614449565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c648261163f565b60058054601090610c86908490600160801b90046001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ce557610cd9610cbf87610ed8565b610cc883610ed8565b610cd29190614489565b6000611cb5565b610ce38e8e611d68565b505b6000610cf08f611ef3565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d49959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610d6f6141ce565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610e679116611fe3565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610e9992900416611fe3565b905292915050565b6000806000610eaf84612059565b9150915080610ed157604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f025760405163396ea70160e11b815260040160405180910390fd5b5090565b610f0f816120e6565b61075457604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610f4357600080fd5b5091020490565b6000610f5f83670de0b6b3a764000084610f2c565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610f9a90849061437a565b90915550506000838152600e602052604081208054839290610fbd90849061437a565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f62826004611d68565b600061102f60408301602084016143b6565b1561103b575082610d60565b611045848461146b565b9050610d60565b6000610778670de0b6b3a76400006121f3565b60008060006110cb61106f610757565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061227f565b9150856110d883876122a0565b11156110e6576110e66122b5565b60008060006111506110f6610757565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061149f565b905061116689670de0b6b3a7640000838b6122ce565b5091945090925061117990508284614367565b6111839086614367565b94506111cf886111c98b611197868a614367565b8b6111a28e826123dc565b8e7f00000000000000000000000000000000000000000000000000000000000000006123f2565b906122a0565b9550909250505093509350939050565b60006111f160408301602084016143b6565b156111fd575082610d60565b6110458484610f4a565b6001546001600160801b031683811015611223576112236122b5565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061125b908390600f0b611480565b1015611269576112696122b5565b6003546112b8906112b390600160801b90046001600160801b0316611296670de0b6b3a7640000866144a9565b600454600160801b90046001600160801b03169190896001612417565b61163f565b600480546001600160801b03928316600160801b0292169190911790556112de8161163f565b600180546001600160801b0319166001600160801b03929092169190911790556113078561163f565b60018054601090611329908490600160801b90046001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113568561163f565b60038054601090611378908490600160801b90046001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113a7836124d4565b90506113c5816113b688610ed8565b6113c09084614489565b611cb5565b6113ce84612518565b6113da576113da6122b5565b60006113e585611010565b90508061140557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114385760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061145560408301602084016143b6565b15611464576110458484610f4a565b5082610d60565b6000610f5f8383670de0b6b3a7640000610f2c565b60008061148d8484612578565b909250905080610ed157610ed16122b5565b600061008e826114b0858888610f2c565b906125b4565b60008260001904841183021582026114cd57600080fd5b50910281810615159190040190565b60008084341015611500576040516312171d8360e31b815260040160405180910390fd5b5060085460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015611572573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061159791906144c0565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015611615573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163991906144c0565b50505050565b60006001600160801b03821115610f0257604051630f0af95160e11b815260040160405180910390fd5b600554600090819061168c908490600160801b90046001600160801b031661146b565b6005546201000090046001600160701b031692509050818111156118085760006116b68383614367565b90506116c56112b38286612629565b600580546010906116e7908490600160801b90046001600160801b03166144d9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117208583610f4a90919063ffffffff16565b9050600061174e827f000000000000000000000000000000000000000000000000000000000000000061146b565b905080600b6000828254611762919061437a565b9091555061177290508183614367565b915061177d8261163f565b600180546000906117989084906001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117c58261263e565b600380546000906117da908490600f0b6144f9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061181a8785610f4a565b91506000611848837f000000000000000000000000000000000000000000000000000000000000000061146b565b9050611874817f000000000000000000000000000000000000000000000000000000000000000061146b565b91508315611897576118868282614367565b6118909084614367565b92506118ae565b6118a18282614367565b6118ab908461437a565b92505b868610156118d1576118c1838789610f2c565b92506118ce828789610f2c565b91505b509550959350505050565b600354600160801b90046001600160801b03166119256112b382611908670de0b6b3a7640000866144a9565b600454600160801b90046001600160801b031691908a6000612417565b600480546001600160801b03928316600160801b02921691909117905561194b8661163f565b61195590826144d9565b600380546001600160801b03928316600160801b02921691909117905561197b8461163f565b600180546000906119969084906001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119c383612668565b600380546000906119d8908490600f0b6144f9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a088561163f565b60018054601090611a2a908490600160801b90046001600160801b03166144d9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611a68846107b28a888a610f2c565b9050611a75888486610f2c565b611a7f908261437a565b905086811115611a8f5786810391505b509695505050505050565b60006001600160701b03821115610f025760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b0657507f0000000000000000000000000000000000000000000000000000000000000000611b048583614367565b105b15611b1357611b136122b5565b6003549084900390600f0b611b288482614489565b905083611b3486610ed8565b138015611b6957507f0000000000000000000000000000000000000000000000000000000000000000611b678383611480565b105b15611b7657611b766122b5565b600254600160801b90046001600160801b0316611bb86112b382611ba2670de0b6b3a7640000886144a9565b6004546001600160801b031691908c6000612417565b600480546001600160801b0319166001600160801b0392909216919091179055611be28882614367565b9050611bed8161163f565b600280546001600160801b03928316600160801b029216919091179055611c138361163f565b600180546001600160801b0319166001600160801b0392909216919091179055611c3c82612668565b600380546001600160801b0319166001600160801b0392909216919091179055611c658761163f565b60018054601090611c87908490600160801b90046001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611cde611cc484836126a4565b611ccf8460006126a4565b611cd99190614489565b612668565b9050600081600f0b1315611d335760028054829190600090611d0a9084906001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611d6357611d4881614526565b60028054600090611d0a9084906001600160801b03166144d9565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611db3916001600160801b031690614367565b905080600003611dc7576001915050610f62565b6000611dd2856126b3565b905080600003611de757600192505050610f62565b600080611df5838589612755565b9150915080611e0b576000945050505050610f62565b600080611e18848961285b565b91509150611e36611e2882610ed8565b611e319061454c565b6120e6565b925082611e4c5760009650505050505050610f62565b611e558261163f565b60068054600090611e709084906001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e9d8161163f565b60068054601090611ebf908490600160801b90046001600160801b0316614469565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611f0a611f0586610d67565b612059565b9150915080611f20575060009485945092505050565b6000808611611f30576000611f3a565b611f3a838761146b565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611fa5919061437a565b611faf9190614367565b905080600003611fc85750600096879650945050505050565b6000611fd48383610f4a565b98600198509650505050505050565b600080670de0b6b3a7640000611ff761089c565b61200191906144a9565b905080831161201157600061201b565b61201b8184614367565b9150610d60612052670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006144a9565b8390610f4a565b600080600080600061206a8661294b565b915091508061208157506000958695509350505050565b61208e8660a00151610ed8565b61209787612c6b565b836120a58960000151610ed8565b6120af9190614568565b6120b99190614568565b6120c39190614489565b9250505060008112156120dc5750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806121388787877f00000000000000000000000000000000000000000000000000000000000000008d612ccf565b9350935093509350806121545750600098975050505050505050565b868414612185576121648461163f565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146121b65761219583612668565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146121e4576121c68261163f565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa15801561225b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6291906144c0565b60006107b887878761229988670de0b6b3a7640000614367565b8787612de7565b6000610f5f8383670de0b6b3a76400006114b6565b60405163bb55fd2760e01b815260040160405180910390fd5b600080808061231f87866123188b6111c96122f18c670de0b6b3a7640000614367565b7f0000000000000000000000000000000000000000000000000000000000000000906122a0565b91906114b6565b935061234b847f000000000000000000000000000000000000000000000000000000000000000061146b565b9150600061236c61236489670de0b6b3a7640000614367565b8a90886114b6565b9050612398817f00000000000000000000000000000000000000000000000000000000000000006122a0565b93506123c4847f000000000000000000000000000000000000000000000000000000000000000061146b565b6123ce908461437a565b915050945094509450949050565b60008183116123eb5781610f5f565b5090919050565b60008061240a846124048a888a6114b6565b90612629565b9050611a758884866114b6565b60008260000361242857508461008e565b811561249a5761245961243b848761437a565b612445858761146b565b61244f888a61146b565b6107b2919061437a565b905060006124678588612e0a565b9050600061247586896123dc565b90508183101561248757819250612493565b80831115612493578092505b505061008e565b8285036124a95750600061008e565b61008b6124b68487614367565b6124c085876122a0565b6124ca888a61146b565b6107b29190614367565b60006124fc600e60006124e860028661140e565b815260200190815260200160002054610ed8565b61250e600e60006124e860018761140e565b610f629190614489565b60006125447f0000000000000000000000000000000000000000000000000000000000000000836122a0565b60025461255a91906001600160801b031661437a565b600154612570906001600160801b03168461146b565b101592915050565b60008060008361258786610ed8565b6125919190614489565b905060008112156125a9576000809250925050610895565b946001945092505050565b6000816000036125cd5750670de0b6b3a7640000610f62565b826000036125dd57506000610f62565b60006125e883610ed8565b905060006125fd6125f886610ed8565b612e19565b9050818102612614670de0b6b3a764000082614590565b905061261f8161303f565b9695505050505050565b6000610f5f83670de0b6b3a7640000846114b6565b600060016001607f1b03821115610f025760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612686575060016001607f1b0382135b15610f025760405163a5353be560e01b815260040160405180910390fd5b60008183136123eb5781610f5f565b60025460009081906126ce906001600160801b031684612629565b90506126fa7f00000000000000000000000000000000000000000000000000000000000000008261437a565b6001546001600160801b0316111561274f576001547f0000000000000000000000000000000000000000000000000000000000000000906127459083906001600160801b0316614367565b610d609190614367565b50919050565b61275d61422f565b60008061276984610d67565b9050600061277682612059565b935090508261278b57506000915061159a9050565b60006127b26127ad84610160015185610140015161146b90919063ffffffff16565b610ed8565b6127d26127ad8561012001518661010001516122a090919063ffffffff16565b6127dc9190614489565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806128738660c001518760e00151612578565b915091508061288a57600080935093505050610895565b600061289687846131d4565b925090508115806128a5575080155b156128b95760008094509450505050610895565b60006128c588836132e3565b9050806000036128df576000809550955050505050610895565b876060015181116128f65794509250610895915050565b506060870151600061290a8986858b6133b4565b90508060000361292557600080965096505050505050610895565b82811061293d57600080965096505050505050610895565b909890975095505050505050565b60008060006129706127ad85610160015186610140015161146b90919063ffffffff16565b6129906127ad8661012001518761010001516122a090919063ffffffff16565b61299a9190614489565b90506000806129b186600001518760200151612578565b91509150806129c857506000958695509350505050565b6000831315612b095760008390506000612a16886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612a079190614367565b8d606001518e608001516138cb565b9350905082612a2f575060009788975095505050505050565b818110612acd576000612a69858a60400151858c60e00151670de0b6b3a7640000612a5a9190614367565b8d606001518e608001516139d7565b9450905083158015612a7e57508860c0015183105b15612a955750600098600198509650505050505050565b83612aab57506000988998509650505050505050565b612ab481610ed8565b612abd9061454c565b9960019950975050505050505050565b6000886020015112612af557612aec8860a00151856127ad9190614367565b611fd49061454c565b60a08801518851612aec916127ad91614367565b6000831215612c5c576000612b1d8461454c565b90506000612b518489604001518a60e00151670de0b6b3a7640000612b429190614367565b8b606001518c60800151613a9a565b9350905082612b6a575060009788975095505050505050565b818110612bef576000612ba4858a60400151858c60e00151670de0b6b3a7640000612b959190614367565b8d606001518e60800151613b46565b9450905083158015612bb957508860c0015183105b15612bd05750600098600198509650505050505050565b83612be657506000988998509650505050505050565b612abd81610ed8565b6000612c21858a604001518b60e00151670de0b6b3a7640000612c129190614367565b8c606001518d60800151613c1d565b9450905083612c3b57506000988998509650505050505050565b612abd612c528a6060015184866107b29190614367565b6127ad908361437a565b50600095600195509350505050565b6000612c9e6127ad836101200151670de0b6b3a7640000612c8c9190614367565b606085015161010086015191906114b6565b61250e6127ad846101600151670de0b6b3a7640000612cbd9190614367565b60608601516101408701519190610f2c565b60008060008084600003612cee57508792508691508590506001612ddb565b600085612cfa8b610ed8565b612d049190614568565b9050612d0f87610ed8565b811215612d2a57600080600080945094509450945050612ddb565b80945060008912612d4a57612d436127ad868b8d610f2c565b9350612d6d565b612d616127ad612d598b61454c565b87908d6114b6565b612d6a9061454c565b93505b600080612d7a8c8c612578565b9150915080612d99576000806000809650965096509650505050612ddb565b6000612da58888612578565b9250905081612dc557600080600080975097509750975050505050612ddb565b612dd08b8285610f2c565b955060019450505050505b95509550955095915050565b600080612df88888888888886139d7565b909250905080611a8f57611a8f6122b5565b600081831161274f5782610f5f565b6000808213612e3b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ebe9084901c610ed8565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361305a57506000919050565b680755bf798b4a1bf1e58212613083576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061261f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610ed8565b60008060008460a00151126131f157505060808201516001610895565b60008460a001516132019061454c565b9050600061323d85876101000151886000015160e00151670de0b6b3a764000061322b9190614367565b89516060810151608090910151613a9a565b9350905082158061324c575080155b1561325f57600080935093505050610895565b600061326b8383612629565b9050670de0b6b3a764000081116132a75780670de0b6b3a76400000394506132a08760c001518661146b90919063ffffffff16565b94506132b6565b60008094509450505050610895565b86608001518511156132d5578660800151600194509450505050610895565b506001925050509250929050565b6000806133198460c001518560e00151866101000151876000015160a0015161330b88610ed8565b6133149061454c565b612ccf565b87516040810192909252602082019290925291909152905080613340576000915050610f62565b600061334f8560000151612059565b925090508161336357600092505050610f62565b8460200151811061337957600092505050610f62565b60008560600151866040015161338f919061437a565b90506133aa82876020015183610f2c9092919063ffffffff16565b61261f9082614367565b600080856060015186604001516133cb919061437a565b602087015160608801519192506000916133e59184610f2c565b90508660a001516000036133fc5791506138c39050565b6000808089600488101561340f57600497505b60005b8881101561376b57613424868b612e0a565b9550600061344d8360c001518460e00151856101000151866000015160a0015161330b8c610ed8565b8651604081019290925260208201929092529190915290508061347b576000985050505050505050506138c3565b600061348a8e60000151612059565b92509050816134a557600099505050505050505050506138c3565b6134b084828b613ccc565b156134c6578799505050505050505050506138c3565b60008460a00151131561362f57835180516020820151604083015160a084015160e09094015160009461351a9493929161350890670de0b6b3a7640000614367565b8a5160608101516080909101516138cb565b93509050826135365760009a50505050505050505050506138c3565b808560a001511061362d5761354a85613d31565b9099509250826135675760009a50505050505050505050506138c3565b61358c8560c001518660e00151876101000151886000015160a0015161330b8e610ed8565b885160408101929092526020820192909252919091529250826135bc5760009a50505050505050505050506138c3565b845180516020820151604083015160a084015160e0909401516135ec949061350890670de0b6b3a7640000614367565b93509050826136085760009a50505050505050505050506138c3565b8e60a00151811161362557889a50505050505050505050506138c3565b505050613412565b505b6000613640858f8760a00151613e07565b935090508215806136595750670de0b6b3a76400008110155b156136715760009a50505050505050505050506138c3565b80670de0b6b3a7640000039050600061369e6127ad876040015188602001516122a090919063ffffffff16565b6136ab6127ad858e61146b565b6136b59190614489565b90508815806136d357506136c889614162565b6136d182614162565b125b156136e2578098508997508296505b600081131561370a576136f98b6107b28385610f4a565b613703908b61437a565b995061375c565b60008112156137535760006137248c6107b285818661454c565b90508a81101561373857808b039a5061374d565b60009c505050505050505050505050506138c3565b5061375c565b5050505061376b565b84600101945050505050613412565b5060006137938260c001518360e00151846101000151856000015160a0015161330b8b610ed8565b855160408101929092526020820192909252919091529050806137c05760009750505050505050506138c3565b60006137cf8360000151610ea1565b905060006137f16127ad856040015186602001516122a090919063ffffffff16565b6137fe6127ad848c61146b565b6138089190614489565b905061381387614162565b61381c82614162565b1215613829578795508194505b613850613844655af3107a4000670de0b6b3a7640000614367565b6020860151908b6114b6565b6040850151613860908790610f4a565b10806138a0575061388e613882655af3107a4000670de0b6b3a764000061437a565b6020860151908b610f2c565b604085015161389e908790612629565b115b156138b757600099505050505050505050506138c3565b50939750505050505050505b949350505050565b60008060008812156138ed576138e08861454c565b6138ea908761437a565b95505b6000806138fa8b8b612578565b9150915080613911576000809350935050506139cb565b6000613920838b8a8a8a61417a565b9050600061393d6139358a6114b08a8e6122a0565b8990896114b6565b9050808210156139575760008095509550505050506139cb565b808203670de0b6b3a7640000811061398c5761398561397e670de0b6b3a76400008c610f4a565b82906125b4565b90506139a4565b6139a161397e670de0b6b3a76400008c612629565b90505b8b8110156139bd576000809650965050505050506139cb565b8b9003955060019450505050505b97509795505050505050565b60008060006139e989898888886141a9565b90506139f9866114b0898b61437a565b975087811015613a10576000809250925050613a8f565b878103613a1e8186886114b6565b9050670de0b6b3a76400008110613a4b57613a4461397e670de0b6b3a764000089612629565b9050613a63565b613a6061397e670de0b6b3a764000089610f4a565b90505b613a6d8186612629565b9050808a1015613a8557600080935093505050613a8f565b8903925060019150505b965096945050505050565b6000806000613aac88888888886141a9565b90506000613ad7670de0b6b3a7640000613ac68888610f4a565b613ad0919061437a565b8390612629565b9050670de0b6b3a76400008110613b0457613afd61397e670de0b6b3a764000089612629565b9050613b1c565b613b1961397e670de0b6b3a764000089610f4a565b90505b80881015613b3257600080935093505050613b3c565b8703925060019150505b9550959350505050565b6000806000613b5889898888886141a9565b905086881015613b6f576000809250925050613a8f565b9686900396613b7e88876125b4565b975087811015613b95576000809250925050613a8f565b878103613ba38186886114b6565b9050670de0b6b3a76400008110613bd057613bc961397e670de0b6b3a764000089612629565b9050613be8565b613be561397e670de0b6b3a764000089610f4a565b90505b613bf28186612629565b905089811015613c0a57600080935093505050613a8f565b9890980398600198509650505050505050565b6000806000613c2f888888888861417a565b90506000613c53670de0b6b3a7640000613c498888612629565b612052919061437a565b9050670de0b6b3a76400008110613c8057613c7961397e670de0b6b3a764000089610f4a565b9050613c98565b613c9561397e670de0b6b3a764000089612629565b90505b613ca28186610f4a565b905088811015613cba57600080935093505050613b3c565b97909703976001975095505050505050565b6020830151600090613cde9084612629565b6040850151613cee908490610f4a565b101580156138c357506020840151613d179084610323633b9aca00670de0b6b3a764000061437a565b6040850151613d27908490612629565b1115949350505050565b60008060008360e0015113613d4b57506000928392509050565b6000613d5a8460000151612c6b565b90506000613d86856040015186606001518760400151613d7a919061437a565b602088015191906114b6565b905060008212613dad5780821015613da057819003613dc3565b5060009485945092505050565b613db68261454c565b613dc0908261437a565b90505b60e085015160c0860151613dd89183906114b6565b9050808560c001511015613df3575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613e2b57855160400151613e2490859061437a565b9050613e66565b6000613e368561454c565b875160400151909150811015613e56578651604001518190039150613e64565b60008093509350505061159a565b505b855180516020909101516000918291613e7f9190612578565b9150915080613e97576000809450945050505061159a565b875160e0810151604090910151600091613ecc91613ec091613eb991906125b4565b8a9061146b565b6101008b015190612629565b895160e0810151608090910151613ef791613eeb916114b0908861146b565b8b516060015190612629565b613f01919061437a565b90506000613f39613f2d613f268c6000015160e00151886125b490919063ffffffff16565b8b906122a0565b6101008c015190610f4a565b905080821015613f545760008096509650505050505061159a565b80820391506000613f96858c60000151604001518d6000015160e00151670de0b6b3a7640000613f849190614367565b8e5160608101516080909101516141a9565b90506000613fc08c6000015160e00151670de0b6b3a7640000613fb99190614367565b88906125b4565b905080821015613fdd57600080985098505050505050505061159a565b8b51608081015160609091015191830391613ff99183916114b6565b9050670de0b6b3a7640000811061403d578b5160e001516140369061397e9061402a90670de0b6b3a7640000614367565b8e5160e0015190612629565b905061406c565b8b5160e001516140699061397e9061405d90670de0b6b3a7640000614367565b8e5160e0015190610f4a565b90505b8b516060015161407f90859083906114b6565b935083670de0b6b3a764000011156140a35783670de0b6b3a76400000393506140b7565b60006001985098505050505050505061159a565b60008c60e001511261411a5760c08c015160e08d01516140d691612629565b9250670de0b6b3a76400008311156140fb57600080985098505050505050505061159a565b670de0b6b3a76400009290920391614113848461146b565b935061414f565b61414c6141338d60c001518e60e001516107b29061454c565b61414590670de0b6b3a764000061437a565b859061146b565b93505b50919a60019a5098505050505050505050565b60008082126141715781610f62565b610f628261454c565b600061418685856125b4565b61419f614197866114b0868b61146b565b859085610f2c565b61008b919061437a565b60006141b585856125b4565b61419f6141c6866114b0868b6122a0565b8590856114b6565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806142436141ce565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561274f57600080fd5b600080600080600060a086880312156142ab57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156142de57600080fd5b6142ea88828901614281565b9150509295509295909350565b6000806000806080858703121561430d57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561433957600080fd5b61434587828801614281565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f6257610f62614351565b80820180821115610f6257610f62614351565b60006020828403121561439f57600080fd5b81356001600160a01b0381168114610d6057600080fd5b6000602082840312156143c857600080fd5b81358015158114610d6057600080fd5b6000808335601e198436030181126143ef57600080fd5b83018035915067ffffffffffffffff82111561440a57600080fd5b60200191503681900382131561089557600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826144445761444461441f565b500690565b6001600160701b03818116838216019080821115610ed157610ed1614351565b6001600160801b03818116838216019080821115610ed157610ed1614351565b8181036000831280158383131683831282161715610ed157610ed1614351565b8082028115828204841417610f6257610f62614351565b6000602082840312156144d257600080fd5b5051919050565b6001600160801b03828116828216039080821115610ed157610ed1614351565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610f6257610f62614351565b600081600f0b60016001607f1b0319810361454357614543614351565b60000392915050565b6000600160ff1b820161456157614561614351565b5060000390565b808201828112600083128015821682158216171561458857614588614351565b505092915050565b60008261459f5761459f61441f565b600160ff1b8214600019841416156145b9576145b9614351565b50059056fea2646970667358221220b5048209bc9218996a46d19be5ab025e7dc525014d12124414dec69fc6d18a3c64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
