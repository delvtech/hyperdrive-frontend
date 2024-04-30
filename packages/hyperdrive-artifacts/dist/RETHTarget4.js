export const RETHTarget4 = {
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004bc338038062004bc38339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161478d6200043660003960005050600050506000818161014e0152818161038a015281816105370152610e81015260008181610e5b015281816112b201528181611a5301528181611ab601528181612086015281816124730152818161268901526126c50152600081816101af01528181610e350152818161112c0152611190015260006116a20152600081816117c80152818161229a0152612313015260008181610b470152818161122a0152818161179c01526122e7015260006122660152600081816101f101528181610ea70152818161110a01526111b10152600081816101d0015281816105cd01528181610a820152611fa1015260008181610928015281816109b50152610a1a015260008181603d0152818161158a015261217f01526000505061478d6000f3fe60806040526004361061002d5760003560e01c80634c2ac1d914610082578063dbbe8070146100a857600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b6100956100903660046143d7565b6100d0565b6040519081526020015b60405180910390f35b6100bb6100b636600461443b565b6100eb565b6040805192835260208301919091520161009f565b60006100df8686868686610108565b90505b95945050505050565b6000806100fa868686866104f0565b915091505b94509492505050565b6000610112610758565b600554610100900460ff161561013b576040516321081abf60e01b815260040160405180910390fd5b610143610782565b61014c826107a3565b7f000000000000000000000000000000000000000000000000000000000000000086101561018d5760405163211ddda360e11b815260040160405180910390fd5b600061021561019a6107dc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610802565b90508481108061022457508381115b1561024257604051633b61151160e11b815260040160405180910390fd5b60008061024f8986610848565b9150915061026661025e610921565b826004610957565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490916102b2916001600160801b03909116906144ab565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906102ed9083906144be565b905060008060006102fd86610dec565b905061030881610f26565b915061031b61031688610f5d565b610f8b565b6001546001600160801b038082168352600354600f0b6020840152600160801b90910416604082015261034d81610f26565b9250818310156103705760405163184d952160e11b815260040160405180910390fd5b610386848361037f81876144ab565b9190610fb1565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103c95760405163211ddda360e11b815260040160405180910390fd5b508b6103d58e8a610fcf565b10156103f45760405163c972651760e01b815260040160405180910390fd5b61040c600061040660208c018c6144d1565b8a610fed565b600061041786611095565b90508061043757604051638bdf918d60e01b815260040160405180910390fd5b6000841561044e576104498386610fcf565b610451565b60005b90508e6000610461828a8f6110a2565b90508c61047160208201826144d1565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e6104ae6040870160208801614508565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a25050505050505050505050506100e26001600055565b6000806104fb610758565b600554610100900460ff1615610524576040516321081abf60e01b815260040160405180910390fd5b61052c610782565b610535836107a3565b7f00000000000000000000000000000000000000000000000000000000000000008610156105765760405163211ddda360e11b815260040160405180910390fd5b60006105806110d1565b9050848110156105a3576040516342af972b60e01b815260040160405180910390fd5b60006105ad610921565b905060006105c46105bc610921565b846004610957565b905060006105f27f0000000000000000000000000000000000000000000000000000000000000000846144be565b905060008060006106048d88876110e4565b92509250925080600b600082825461061c91906144be565b909155506000905061062f84898d611264565b9050808d10156106525760405163c972651760e01b815260040160405180910390fd5b61065c818c610848565b505061066a8e848a8861128c565b6000610677600287611493565b905060008f905061069b828e600001602081019061069591906144d1565b83610fed565b848a8e846106ac60208301836144d1565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c6106e38b88886114c8565b6106f36040880160208901614508565b610709898f8c61070391906144ab565b906114f0565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ff6001600055565b60026000540361077b57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156107a157604051631574f9f360e01b815260040160405180910390fd5b565b60006107b260208301836144d1565b6001600160a01b0316036107d95760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107fd916001600160801b0390911690600f0b611505565b905090565b60008061081187878786611524565b905061083d61082582866301e1338061153b565b61083783670de0b6b3a76400006144ab565b90610fcf565b979650505050505050565b6000808061085c6040850160208601614508565b1561088157610877856108726040870187614525565b611561565b909350905061089d565b5034610899856108946040870187614525565b61157d565b8492505b6108a56110d1565b9150801561091857604051600090339083908381818185875af1925050503d80600081146108ef576040519150601f19603f3d011682016040523d82523d6000602084013e6108f4565b606091505b5050905080610916576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061094d7f000000000000000000000000000000000000000000000000000000000000000042614582565b6107fd90426144ab565b600083815260076020526040812080546001600160801b031615158061097c57504285115b1561099257546001600160801b03169050610de5565b60008061099d610921565b90508087036109ae57859150610a48565b60006109da7f0000000000000000000000000000000000000000000000000000000000000000896144be565b90505b6000818152600760205260409020546001600160801b031692508181148015610a04575082155b15610a0d578692505b82600003610a4657610a3f7f0000000000000000000000000000000000000000000000000000000000000000826144be565b90506109dd565b505b610a51826115b7565b83546001600160801b0319166001600160801b0391909116178355610a75866115e1565b5060009050600781610aa77f00000000000000000000000000000000000000000000000000000000000000008b6144ab565b815260208101919091526040016000908120546001600160801b03169150610ad060028a611493565b6000818152600e60205260408120549192508a8a8315610c165760019250600080610aff86898c866000611785565b9150915080600b6000828254610b1591906144be565b90915550610b31905086600084610b2b81610f5d565b88611854565b610b3b81836144be565b9150610b6b86838a8d877f00000000000000000000000000000000000000000000000000000000000000006119ce565b9150610b7f610b7a83856114f0565b611a12565b60058054600290610ba09084906201000090046001600160701b0316614596565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bcd826115b7565b60058054601090610bef908490600160801b90046001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610c23600184611493565b6000818152600e60205260409020549091508015610d325760019450600080610c50838b8e886001611785565b9150915080600b6000828254610c6691906144be565b90915550610c82905083600084610c7c81610f5d565b8a611a3c565b610c8c81836144ab565b9150610c9b610b7a83876114f0565b60058054600290610cbc9084906201000090046001600160701b0316614596565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ce9826115b7565b60058054601090610d0b908490600160801b90046001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d6a57610d5e610d4487610f5d565b610d4d83610f5d565b610d5791906145d6565b6000611c2d565b610d688e8e611cdb565b505b6000610d758f611e66565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610dce959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610df4614312565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610eec9116611f56565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610f1e92900416611f56565b905292915050565b6000806000610f3484611fcc565b9150915080610f5657604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f875760405163396ea70160e11b815260040160405180910390fd5b5090565b610f9481612059565b6107d957604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610fc857600080fd5b5091020490565b6000610fe483670de0b6b3a764000084610fb1565b90505b92915050565b6000838152600d602090815260408083206001600160a01b03861684529091528120805483929061101f9084906144be565b90915550506000838152600e6020526040812080548392906110429084906144be565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fe7826004611cdb565b60006110b46040830160208401614508565b156110c0575082610de5565b6110ca84846114f0565b9050610de5565b60006107fd670de0b6b3a7640000612166565b60008060006111506110f46107dc565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006121f2565b91508561115d8387612213565b111561116b5761116b612228565b60008060006111d561117b6107dc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611524565b90506111eb89670de0b6b3a7640000838b612241565b509194509092506111fe905082846144ab565b61120890866144ab565b94506112548861124e8b61121c868a6144ab565b8b6112278e8261234f565b8e7f0000000000000000000000000000000000000000000000000000000000000000612365565b90612213565b9550909250505093509350939050565b60006112766040830160208401614508565b15611282575082610de5565b6110ca8484610fcf565b6001546001600160801b0316838110156112a8576112a8612228565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906112e0908390600f0b611505565b10156112ee576112ee612228565b60035461133d9061133890600160801b90046001600160801b031661131b670de0b6b3a7640000866145f6565b600454600160801b90046001600160801b0316919089600161238a565b6115b7565b600480546001600160801b03928316600160801b029216919091179055611363816115b7565b600180546001600160801b0319166001600160801b039290921691909117905561138c856115b7565b600180546010906113ae908490600160801b90046001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113db856115b7565b600380546010906113fd908490600160801b90046001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061142c83612428565b905061144a8161143b88610f5d565b61144590846145d6565b611c2d565b6114538461246c565b61145f5761145f612228565b600061146a85611095565b90508061148a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114bd5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006114da6040830160208401614508565b156114e9576110ca8484610fcf565b5082610de5565b6000610fe48383670de0b6b3a7640000610fb1565b60008061151284846124cc565b909250905080610f5657610f56612228565b60006100e282611535858888610fb1565b90612508565b600082600019048411830215820261155257600080fd5b50910281810615159190040190565b60008060405163350b944160e11b815260040160405180910390fd5b6115b26001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308661257d565b505050565b60006001600160801b03821115610f8757604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611604908490600160801b90046001600160801b03166114f0565b6005546201000090046001600160701b0316925090508181111561178057600061162e83836144ab565b905061163d61133882866125dd565b6005805460109061165f908490600160801b90046001600160801b031661460d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116988583610fcf90919063ffffffff16565b905060006116c6827f00000000000000000000000000000000000000000000000000000000000000006114f0565b905080600b60008282546116da91906144be565b909155506116ea905081836144ab565b91506116f5826115b7565b600180546000906117109084906001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061173d826125f2565b60038054600090611752908490600f0b61462d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117928785610fcf565b915060006117c0837f00000000000000000000000000000000000000000000000000000000000000006114f0565b90506117ec817f00000000000000000000000000000000000000000000000000000000000000006114f0565b9150831561180f576117fe82826144ab565b61180890846144ab565b9250611826565b61181982826144ab565b61182390846144be565b92505b8686101561184957611839838789610fb1565b9250611846828789610fb1565b91505b509550959350505050565b600354600160801b90046001600160801b031661189d61133882611880670de0b6b3a7640000866145f6565b600454600160801b90046001600160801b031691908a600061238a565b600480546001600160801b03928316600160801b0292169190911790556118c3866115b7565b6118cd908261460d565b600380546001600160801b03928316600160801b0292169190911790556118f3846115b7565b6001805460009061190e9084906001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061193b8361261c565b60038054600090611950908490600f0b61462d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611980856115b7565b600180546010906119a2908490600160801b90046001600160801b031661460d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806119e0846108378a888a610fb1565b90506119ed888486610fb1565b6119f790826144be565b905086811115611a075786810391505b509695505050505050565b60006001600160701b03821115610f875760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a7e57507f0000000000000000000000000000000000000000000000000000000000000000611a7c85836144ab565b105b15611a8b57611a8b612228565b6003549084900390600f0b611aa084826145d6565b905083611aac86610f5d565b138015611ae157507f0000000000000000000000000000000000000000000000000000000000000000611adf8383611505565b105b15611aee57611aee612228565b600254600160801b90046001600160801b0316611b3061133882611b1a670de0b6b3a7640000886145f6565b6004546001600160801b031691908c600061238a565b600480546001600160801b0319166001600160801b0392909216919091179055611b5a88826144ab565b9050611b65816115b7565b600280546001600160801b03928316600160801b029216919091179055611b8b836115b7565b600180546001600160801b0319166001600160801b0392909216919091179055611bb48261261c565b600380546001600160801b0319166001600160801b0392909216919091179055611bdd876115b7565b60018054601090611bff908490600160801b90046001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c56611c3c8483612658565b611c47846000612658565b611c5191906145d6565b61261c565b9050600081600f0b1315611cab5760028054829190600090611c829084906001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156115b257611cc08161465a565b60028054600090611c829084906001600160801b031661460d565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d26916001600160801b0316906144ab565b905080600003611d3a576001915050610fe7565b6000611d4585612667565b905080600003611d5a57600192505050610fe7565b600080611d68838589612709565b9150915080611d7e576000945050505050610fe7565b600080611d8b8489612816565b91509150611da9611d9b82610f5d565b611da490614680565b612059565b925082611dbf5760009650505050505050610fe7565b611dc8826115b7565b60068054600090611de39084906001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e10816115b7565b60068054601090611e32908490600160801b90046001600160801b03166145b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611e7d611e7886610dec565b611fcc565b9150915080611e93575060009485945092505050565b6000808611611ea3576000611ead565b611ead83876114f0565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611f1891906144be565b611f2291906144ab565b905080600003611f3b5750600096879650945050505050565b6000611f478383610fcf565b98600198509650505050505050565b600080670de0b6b3a7640000611f6a610921565b611f7491906145f6565b9050808311611f84576000611f8e565b611f8e81846144ab565b9150610de5611fc5670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006145f6565b8390610fcf565b6000806000806000611fdd86612906565b9150915080611ff457506000958695509350505050565b6120018660a00151610f5d565b61200a87612c26565b836120188960000151610f5d565b612022919061469c565b61202c919061469c565b61203691906145d6565b92505050600081121561204f5750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806120ab8787877f00000000000000000000000000000000000000000000000000000000000000008d612c8a565b9350935093509350806120c75750600098975050505050505050565b8684146120f8576120d7846115b7565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612129576121088361261c565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461215757612139826115b7565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa1580156121ce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe791906146c4565b600061083d87878761220c88670de0b6b3a76400006144ab565b8787612da2565b6000610fe48383670de0b6b3a764000061153b565b60405163bb55fd2760e01b815260040160405180910390fd5b6000808080612292878661228b8b61124e6122648c670de0b6b3a76400006144ab565b7f000000000000000000000000000000000000000000000000000000000000000090612213565b919061153b565b93506122be847f00000000000000000000000000000000000000000000000000000000000000006114f0565b915060006122df6122d789670de0b6b3a76400006144ab565b8a908861153b565b905061230b817f0000000000000000000000000000000000000000000000000000000000000000612213565b9350612337847f00000000000000000000000000000000000000000000000000000000000000006114f0565b61234190846144be565b915050945094509450949050565b600081831161235e5781610fe4565b5090919050565b60008061237d846123778a888a61153b565b906125dd565b90506119ed88848661153b565b60008260000361239b5750846100e2565b81156123ee576123cc6123ae84876144be565b6123b885876114f0565b6123c2888a6114f0565b61083791906144be565b905060006123da8588612dc5565b9050808210156123e8578091505b506100e2565b8285036123fd575060006100e2565b6100df61240a84876144ab565b6124148587612213565b61241e888a6114f0565b61083791906144ab565b6000612450600e600061243c600286611493565b815260200190815260200160002054610f5d565b612462600e600061243c600187611493565b610fe791906145d6565b60006124987f000000000000000000000000000000000000000000000000000000000000000083612213565b6002546124ae91906001600160801b03166144be565b6001546124c4906001600160801b0316846114f0565b101592915050565b6000806000836124db86610f5d565b6124e591906145d6565b905060008112156124fd57600080925092505061091a565b946001945092505050565b6000816000036125215750670de0b6b3a7640000610fe7565b8260000361253157506000610fe7565b600061253c83610f5d565b9050600061255161254c86610f5d565b612dd4565b9050818102612568670de0b6b3a7640000826146dd565b905061257381612ffa565b9695505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526125d790859061318f565b50505050565b6000610fe483670de0b6b3a76400008461153b565b600060016001607f1b03821115610f875760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061263a575060016001607f1b0382135b15610f875760405163a5353be560e01b815260040160405180910390fd5b600081831361235e5781610fe4565b6002546000908190612682906001600160801b0316846125dd565b90506126ae7f0000000000000000000000000000000000000000000000000000000000000000826144be565b6001546001600160801b03161115612703576001547f0000000000000000000000000000000000000000000000000000000000000000906126f99083906001600160801b03166144ab565b610de591906144ab565b50919050565b612711614373565b60008061271d84610dec565b9050600061272a82611fcc565b935090508261273f57506000915061280e9050565b60006127666127618461016001518561014001516114f090919063ffffffff16565b610f5d565b61278661276185610120015186610100015161221390919063ffffffff16565b61279091906145d6565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60008060008061282e8660c001518760e001516124cc565b91509150806128455760008093509350505061091a565b600061285187846131f7565b92509050811580612860575080155b15612874576000809450945050505061091a565b60006128808883613306565b90508060000361289a57600080955095505050505061091a565b876060015181116128b1579450925061091a915050565b50606087015160006128c58986858b6133d7565b9050806000036128e05760008096509650505050505061091a565b8281106128f85760008096509650505050505061091a565b909890975095505050505050565b600080600061292b6127618561016001518661014001516114f090919063ffffffff16565b61294b61276186610120015187610100015161221390919063ffffffff16565b61295591906145d6565b905060008061296c866000015187602001516124cc565b915091508061298357506000958695509350505050565b6000831315612ac457600083905060006129d1886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006129c291906144ab565b8d606001518e608001516138ee565b93509050826129ea575060009788975095505050505050565b818110612a88576000612a24858a60400151858c60e00151670de0b6b3a7640000612a1591906144ab565b8d606001518e608001516139fa565b9450905083158015612a3957508860c0015183105b15612a505750600098600198509650505050505050565b83612a6657506000988998509650505050505050565b612a6f81610f5d565b612a7890614680565b9960019950975050505050505050565b6000886020015112612ab057612aa78860a001518561276191906144ab565b611f4790614680565b60a08801518851612aa791612761916144ab565b6000831215612c17576000612ad884614680565b90506000612b0c8489604001518a60e00151670de0b6b3a7640000612afd91906144ab565b8b606001518c60800151613abd565b9350905082612b25575060009788975095505050505050565b818110612baa576000612b5f858a60400151858c60e00151670de0b6b3a7640000612b5091906144ab565b8d606001518e60800151613b69565b9450905083158015612b7457508860c0015183105b15612b8b5750600098600198509650505050505050565b83612ba157506000988998509650505050505050565b612a7881610f5d565b6000612bdc858a604001518b60e00151670de0b6b3a7640000612bcd91906144ab565b8c606001518d60800151613c40565b9450905083612bf657506000988998509650505050505050565b612a78612c0d8a60600151848661083791906144ab565b61276190836144be565b50600095600195509350505050565b6000612c59612761836101200151670de0b6b3a7640000612c4791906144ab565b6060850151610100860151919061153b565b612462612761846101600151670de0b6b3a7640000612c7891906144ab565b60608601516101408701519190610fb1565b60008060008084600003612ca957508792508691508590506001612d96565b600085612cb58b610f5d565b612cbf919061469c565b9050612cca87610f5d565b811215612ce557600080600080945094509450945050612d96565b80945060008912612d0557612cfe612761868b8d610fb1565b9350612d28565b612d1c612761612d148b614680565b87908d61153b565b612d2590614680565b93505b600080612d358c8c6124cc565b9150915080612d54576000806000809650965096509650505050612d96565b6000612d6088886124cc565b9250905081612d8057600080600080975097509750975050505050612d96565b612d8b8b8285610fb1565b955060019450505050505b95509550955095915050565b600080612db38888888888886139fa565b909250905080611a0757611a07612228565b60008183116127035782610fe4565b6000808213612df65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e799084901c610f5d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361301557506000919050565b680755bf798b4a1bf1e5821261303e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061257374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f5d565b60006131a46001600160a01b03841683613cef565b905080516000141580156131c95750808060200190518101906131c7919061470b565b155b156115b257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060008460a00151126132145750506080820151600161091a565b60008460a0015161322490614680565b9050600061326085876101000151886000015160e00151670de0b6b3a764000061324e91906144ab565b89516060810151608090910151613abd565b9350905082158061326f575080155b156132825760008093509350505061091a565b600061328e83836125dd565b9050670de0b6b3a764000081116132ca5780670de0b6b3a76400000394506132c38760c00151866114f090919063ffffffff16565b94506132d9565b6000809450945050505061091a565b86608001518511156132f857866080015160019450945050505061091a565b506001925050509250929050565b60008061333c8460c001518560e00151866101000151876000015160a0015161332e88610f5d565b61333790614680565b612c8a565b87516040810192909252602082019290925291909152905080613363576000915050610fe7565b60006133728560000151611fcc565b925090508161338657600092505050610fe7565b8460200151811061339c57600092505050610fe7565b6000856060015186604001516133b291906144be565b90506133cd82876020015183610fb19092919063ffffffff16565b61257390826144ab565b600080856060015186604001516133ee91906144be565b602087015160608801519192506000916134089184610fb1565b90508660a0015160000361341f5791506138e69050565b6000808089600488101561343257600497505b60005b8881101561378e57613447868b612dc5565b955060006134708360c001518460e00151856101000151866000015160a0015161332e8c610f5d565b8651604081019290925260208201929092529190915290508061349e576000985050505050505050506138e6565b60006134ad8e60000151611fcc565b92509050816134c857600099505050505050505050506138e6565b6134d384828b613cfd565b156134e9578799505050505050505050506138e6565b60008460a00151131561365257835180516020820151604083015160a084015160e09094015160009461353d9493929161352b90670de0b6b3a76400006144ab565b8a5160608101516080909101516138ee565b93509050826135595760009a50505050505050505050506138e6565b808560a00151106136505761356d85613d62565b90995092508261358a5760009a50505050505050505050506138e6565b6135af8560c001518660e00151876101000151886000015160a0015161332e8e610f5d565b885160408101929092526020820192909252919091529250826135df5760009a50505050505050505050506138e6565b845180516020820151604083015160a084015160e09094015161360f949061352b90670de0b6b3a76400006144ab565b935090508261362b5760009a50505050505050505050506138e6565b8e60a00151811161364857889a50505050505050505050506138e6565b505050613435565b505b6000613663858f8760a00151613e38565b9350905082158061367c5750670de0b6b3a76400008110155b156136945760009a50505050505050505050506138e6565b80670de0b6b3a764000003905060006136c16127618760400151886020015161221390919063ffffffff16565b6136ce612761858e6114f0565b6136d891906145d6565b90508815806136f657506136eb89614193565b6136f482614193565b125b15613705578098508997508296505b600081131561372d5761371c8b6108378385610fcf565b613726908b6144be565b995061377f565b60008112156137765760006137478c610837858186614680565b90508a81101561375b57808b039a50613770565b60009c505050505050505050505050506138e6565b5061377f565b5050505061378e565b84600101945050505050613435565b5060006137b68260c001518360e00151846101000151856000015160a0015161332e8b610f5d565b855160408101929092526020820192909252919091529050806137e35760009750505050505050506138e6565b60006137f28360000151610f26565b905060006138146127618560400151866020015161221390919063ffffffff16565b613821612761848c6114f0565b61382b91906145d6565b905061383687614193565b61383f82614193565b121561384c578795508194505b613873613867655af3107a4000670de0b6b3a76400006144ab565b6020860151908b61153b565b6040850151613883908790610fcf565b10806138c357506138b16138a5655af3107a4000670de0b6b3a76400006144be565b6020860151908b610fb1565b60408501516138c19087906125dd565b115b156138da57600099505050505050505050506138e6565b50939750505050505050505b949350505050565b60008060008812156139105761390388614680565b61390d90876144be565b95505b60008061391d8b8b6124cc565b9150915080613934576000809350935050506139ee565b6000613943838b8a8a8a6141ab565b905060006139606139588a6115358a8e612213565b89908961153b565b90508082101561397a5760008095509550505050506139ee565b808203670de0b6b3a764000081106139af576139a86139a1670de0b6b3a76400008c610fcf565b8290612508565b90506139c7565b6139c46139a1670de0b6b3a76400008c6125dd565b90505b8b8110156139e0576000809650965050505050506139ee565b8b9003955060019450505050505b97509795505050505050565b6000806000613a0c89898888886141da565b9050613a1c86611535898b6144be565b975087811015613a33576000809250925050613ab2565b878103613a4181868861153b565b9050670de0b6b3a76400008110613a6e57613a676139a1670de0b6b3a7640000896125dd565b9050613a86565b613a836139a1670de0b6b3a764000089610fcf565b90505b613a9081866125dd565b9050808a1015613aa857600080935093505050613ab2565b8903925060019150505b965096945050505050565b6000806000613acf88888888886141da565b90506000613afa670de0b6b3a7640000613ae98888610fcf565b613af391906144be565b83906125dd565b9050670de0b6b3a76400008110613b2757613b206139a1670de0b6b3a7640000896125dd565b9050613b3f565b613b3c6139a1670de0b6b3a764000089610fcf565b90505b80881015613b5557600080935093505050613b5f565b8703925060019150505b9550959350505050565b6000806000613b7b89898888886141da565b905086881015613b92576000809250925050613ab2565b9686900396613ba18887612508565b975087811015613bb8576000809250925050613ab2565b878103613bc681868861153b565b9050670de0b6b3a76400008110613bf357613bec6139a1670de0b6b3a7640000896125dd565b9050613c0b565b613c086139a1670de0b6b3a764000089610fcf565b90505b613c1581866125dd565b905089811015613c2d57600080935093505050613ab2565b9890980398600198509650505050505050565b6000806000613c5288888888886141ab565b90506000613c76670de0b6b3a7640000613c6c88886125dd565b611fc591906144be565b9050670de0b6b3a76400008110613ca357613c9c6139a1670de0b6b3a764000089610fcf565b9050613cbb565b613cb86139a1670de0b6b3a7640000896125dd565b90505b613cc58186610fcf565b905088811015613cdd57600080935093505050613b5f565b97909703976001975095505050505050565b6060610fe4838360006141ff565b6020830151600090613d0f90846125dd565b6040850151613d1f908490610fcf565b101580156138e657506020840151613d48908461037f633b9aca00670de0b6b3a76400006144be565b6040850151613d589084906125dd565b1115949350505050565b60008060008360e0015113613d7c57506000928392509050565b6000613d8b8460000151612c26565b90506000613db7856040015186606001518760400151613dab91906144be565b6020880151919061153b565b905060008212613dde5780821015613dd157819003613df4565b5060009485945092505050565b613de782614680565b613df190826144be565b90505b60e085015160c0860151613e0991839061153b565b9050808560c001511015613e24575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613e5c57855160400151613e559085906144be565b9050613e97565b6000613e6785614680565b875160400151909150811015613e87578651604001518190039150613e95565b60008093509350505061280e565b505b855180516020909101516000918291613eb091906124cc565b9150915080613ec8576000809450945050505061280e565b875160e0810151604090910151600091613efd91613ef191613eea9190612508565b8a906114f0565b6101008b0151906125dd565b895160e0810151608090910151613f2891613f1c9161153590886114f0565b8b5160600151906125dd565b613f3291906144be565b90506000613f6a613f5e613f578c6000015160e001518861250890919063ffffffff16565b8b90612213565b6101008c015190610fcf565b905080821015613f855760008096509650505050505061280e565b80820391506000613fc7858c60000151604001518d6000015160e00151670de0b6b3a7640000613fb591906144ab565b8e5160608101516080909101516141da565b90506000613ff18c6000015160e00151670de0b6b3a7640000613fea91906144ab565b8890612508565b90508082101561400e57600080985098505050505050505061280e565b8b5160808101516060909101519183039161402a91839161153b565b9050670de0b6b3a7640000811061406e578b5160e00151614067906139a19061405b90670de0b6b3a76400006144ab565b8e5160e00151906125dd565b905061409d565b8b5160e0015161409a906139a19061408e90670de0b6b3a76400006144ab565b8e5160e0015190610fcf565b90505b8b51606001516140b0908590839061153b565b935083670de0b6b3a764000011156140d45783670de0b6b3a76400000393506140e8565b60006001985098505050505050505061280e565b60008c60e001511261414b5760c08c015160e08d0151614107916125dd565b9250670de0b6b3a764000083111561412c57600080985098505050505050505061280e565b670de0b6b3a7640000929092039161414484846114f0565b9350614180565b61417d6141648d60c001518e60e0015161083790614680565b61417690670de0b6b3a76400006144be565b85906114f0565b93505b50919a60019a5098505050505050505050565b60008082126141a25781610fe7565b610fe782614680565b60006141b78585612508565b6141d06141c886611535868b6114f0565b859085610fb1565b6100df91906144be565b60006141e68585612508565b6141d06141f786611535868b612213565b85908561153b565b6060814710156142245760405163cd78605960e01b81523060048201526024016131ee565b600080856001600160a01b031684866040516142409190614728565b60006040518083038185875af1925050503d806000811461427d576040519150601f19603f3d011682016040523d82523d6000602084013e614282565b606091505b50915091506125738683836060826142a25761429d826142e9565b610de5565b81511580156142b957506001600160a01b0384163b155b156142e257604051639996b31560e01b81526001600160a01b03851660048201526024016131ee565b5080610de5565b8051156142f95780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280614387614312565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561270357600080fd5b600080600080600060a086880312156143ef57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561442257600080fd5b61442e888289016143c5565b9150509295509295909350565b6000806000806080858703121561445157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561447d57600080fd5b614489878288016143c5565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fe757610fe7614495565b80820180821115610fe757610fe7614495565b6000602082840312156144e357600080fd5b81356001600160a01b0381168114610de557600080fd5b80151581146107d957600080fd5b60006020828403121561451a57600080fd5b8135610de5816144fa565b6000808335601e1984360301811261453c57600080fd5b83018035915067ffffffffffffffff82111561455757600080fd5b60200191503681900382131561091a57600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826145915761459161456c565b500690565b6001600160701b03818116838216019080821115610f5657610f56614495565b6001600160801b03818116838216019080821115610f5657610f56614495565b8181036000831280158383131683831282161715610f5657610f56614495565b8082028115828204841417610fe757610fe7614495565b6001600160801b03828116828216039080821115610f5657610f56614495565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610fe757610fe7614495565b600081600f0b60016001607f1b0319810361467757614677614495565b60000392915050565b6000600160ff1b820161469557614695614495565b5060000390565b80820182811260008312801582168215821617156146bc576146bc614495565b505092915050565b6000602082840312156146d657600080fd5b5051919050565b6000826146ec576146ec61456c565b600160ff1b82146000198414161561470657614706614495565b500590565b60006020828403121561471d57600080fd5b8151610de5816144fa565b6000825160005b81811015614749576020818601810151858301520161472f565b50600092019182525091905056fea264697066735822122020fb8c3d2290dc41c20f8aba89e316d4bc783578e144f486316e11dbb9850eca64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
