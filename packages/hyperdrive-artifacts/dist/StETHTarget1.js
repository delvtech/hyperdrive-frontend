export const StETHTarget1 = {
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004919380380620049198339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516144f0620004296000396000505060005050600081816101a701526125aa0152600081816111890152818161174d015281816117b001528181612190015281816121cc015281816124350152612584015260008181610c4801528181610c9501528181610e5e015261255e0152600061151001526000818161163601528181611db40152611e2d0152600081816106a101528181610ded0152818161160a0152611e01015260008181610ce70152611d7a015260008181610c2601528181610cb601528181610e7f01526125d00152600081816105dc01528181610d7301528181611c17015261303d0152600081816104820152818161050f01526105740152600081816113b10152818161201d01526120950152600050506144f06000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063074a6de91461003b57806329b23fc114610068575b600080fd5b61004e6100493660046141a3565b610089565b604080519283526020830191909152015b60405180910390f35b61007b6100763660046141f3565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610192565b90505b949350505050565b6000806100c8610400565b6100d18361042a565b60006100db610463565b90506100f06100e861047b565b8260046104b1565b506100fe3387838888610946565b9093509150610110602085018561424d565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8461014787868a610a89565b61015288878b610ab8565b61016260408b0160208c01614276565b604080519485526020850193909352918301521515606082015260800160405180910390a35061009c6001600055565b600061019c610400565b6101a58261042a565b7f00000000000000000000000000000000000000000000000000000000000000008410156101e65760405163211ddda360e11b815260040160405180910390fd5b60006101f0610463565b90508542101561020b576102056100e861047b565b50610219565b610217868260046104b1565b505b61022e610227600288610ae0565b3387610b15565b60008060008060006102418a878d610bee565b945094509450945094508a4210156102e85780600b600082825461026591906142ae565b9091555061027890508a8685858f610ed8565b60006102838c611057565b90506102a16102918c6110a1565b61029b90836142c1565b826110cf565b6102aa87611182565b6102b6576102b66111e2565b60006102c1886111fb565b9050806102e157604051638bdf918d60e01b815260040160405180910390fd5b50506102ff565b6102f28487611208565b93506102fd866111fb565b505b600061030c85888b6112e9565b90508981101561032f5760405163c972651760e01b815260040160405180910390fd5b8a8c85848a8d610340600286610ae0565b61034d602083018361424d565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730886103848c8888610a89565b61038f8d8989610ab8565b61039f6040890160208a01614276565b6103b38a6103ad8d8f6142ae565b90611383565b6040805195865260208601949094529284019190915215156060830152608082015260a081018b905260c00160405180910390a450949b5050505050505050505050506100b56001600055565b60026000540361042357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610439602083018361424d565b6001600160a01b0316036104605760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610476670de0b6b3a7640000611398565b905090565b60006104a77f0000000000000000000000000000000000000000000000000000000000000000426142f7565b610476904261430b565b600083815260076020526040812080546001600160801b03161515806104d657504285115b156104ec57546001600160801b0316905061093f565b6000806104f761047b565b9050808703610508578591506105a2565b60006105347f0000000000000000000000000000000000000000000000000000000000000000896142ae565b90505b6000818152600760205260409020546001600160801b03169250818114801561055e575082155b15610567578692505b826000036105a0576105997f0000000000000000000000000000000000000000000000000000000000000000826142ae565b9050610537565b505b6105ab82611425565b83546001600160801b0319166001600160801b03919091161783556105cf8661144f565b50600090506007816106017f00000000000000000000000000000000000000000000000000000000000000008b61430b565b815260208101919091526040016000908120546001600160801b0316915061062a60028a610ae0565b6000818152600e60205260408120549192508a8a8315610770576001925060008061065986898c8660006115f3565b9150915080600b600082825461066f91906142ae565b9091555061068b905086600084610685816110a1565b88610ed8565b61069581836142ae565b91506106c586838a8d877f00000000000000000000000000000000000000000000000000000000000000006116c2565b91506106d96106d48385611383565b61170c565b600580546002906106fa9084906201000090046001600160701b031661431e565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061072782611425565b60058054601090610749908490600160801b90046001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061077d600184610ae0565b6000818152600e6020526040902054909150801561088c57600194506000806107aa838b8e8860016115f3565b9150915080600b60008282546107c091906142ae565b909155506107dc9050836000846107d6816110a1565b8a611736565b6107e6818361430b565b91506107f56106d48387611383565b600580546002906108169084906201000090046001600160701b031661431e565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061084382611425565b60058054601090610865908490600160801b90046001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156108c4576108b861089e876110a1565b6108a7836110a1565b6108b191906142c1565b60006110cf565b6108c28e8e611927565b505b60006108cf8f611ab2565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610928959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b600080610952856111fb565b505060065485906001600160801b03168082111561097757806001600160801b031691505b8160000361098c576000809250925050610a7f565b61099b600360f81b8984610b15565b6006546000906109c19084906001600160801b03600160801b9091048116908516611ba2565b90506109cc83611425565b6109d6908361435e565b600680546001600160801b0319166001600160801b03929092169190911790556109ff81611425565b60068054601090610a21908490600160801b90046001600160801b031661435e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610a508188876112e9565b9350610a5c8684611bc0565b841015610a7c5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b6000610a9b6040830160208401614276565b15610aa757508261093f565b610ab18484611383565b905061093f565b6000610aca6040830160208401614276565b15610ad957610ab18484611bd5565b508261093f565b60006001600160f81b03821115610b0a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610b5857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610b9b90849061430b565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610c0288611bea565b9050610c6c610c0f611c3b565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611c5c565b909850955091506000610cda610c80611c3b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ccc565b9050610d108389610d0b847f0000000000000000000000000000000000000000000000000000000000000000611ce3565b611d13565b15610d1d57610d1d6111e2565b8a8a60008080610d2f85888887611d55565b9b5091945092509050610d42818461430b565b610d4c90896142ae565b9750610d5882846142ae565b610d62908c6142ae565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610d9d919061430b565b815260208101919091526040016000908120546001600160801b03169150428911610ddf576000898152600760205260409020546001600160801b0316610de1565b895b9050610e118b8784848e7f00000000000000000000000000000000000000000000000000000000000000006116c2565b9650610e1d848761430b565b9550670de0b6b3a7640000610ea384610e34611c3b565b610e3e91906142ae565b600154610e5c908c90600160801b90046001600160801b031661430b565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ccc565b1115610eb157610eb16111e2565b610ec18787858786866000611e69565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610f26610f2182610f04670de0b6b3a76400008661437e565b600454600160801b90046001600160801b031691908a6000611f08565b611425565b600480546001600160801b03928316600160801b029216919091179055610f4c86611425565b610f56908261435e565b600380546001600160801b03928316600160801b029216919091179055610f7c84611425565b60018054600090610f979084906001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc483611fb2565b60038054600090610fd9908490600f0b614395565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061100985611425565b6001805460109061102b908490600160801b90046001600160801b031661435e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061107f600e600061106b600286610ae0565b8152602001908152602001600020546110a1565b611091600e600061106b600187610ae0565b61109b91906142c1565b92915050565b60006001600160ff1b038211156110cb5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006110f86110de8483611fee565b6110e9846000611fee565b6110f391906142c1565b611fb2565b9050600081600f0b131561114d57600280548291906000906111249084906001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561117d57611162816143c2565b600280546000906111249084906001600160801b031661435e565b505050565b60006111ae7f000000000000000000000000000000000000000000000000000000000000000083611bc0565b6002546111c491906001600160801b03166142ae565b6001546111da906001600160801b031684611383565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061109b826004611927565b60008060006112168461144f565b909250905060006112278686611383565b90508183111561123f5761123c868385611ba2565b95505b82811015611251578083039250611256565b600092505b61125f8361170c565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156112b2578690036112b6565b5060005b6112bf81611425565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806112f68585611383565b905061130181612004565b94508460000361131557600091505061093f565b6113256040840160208501614276565b156113545761134d8561133b602086018661424d565b61134860408701876143e8565b612054565b915061137b565b61137785611365602086018661424d565b61137260408701876143e8565b61206f565b8491505b509392505050565b600061093f8383670de0b6b3a7640000611ba2565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa158015611401573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109b919061442f565b60006001600160801b038211156110cb57604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611472908490600160801b90046001600160801b0316611383565b6005546201000090046001600160701b031692509050818111156115ee57600061149c838361430b565b90506114ab610f218286612109565b600580546010906114cd908490600160801b90046001600160801b031661435e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115068583611bd590919063ffffffff16565b90506000611534827f0000000000000000000000000000000000000000000000000000000000000000611383565b905080600b600082825461154891906142ae565b909155506115589050818361430b565b915061156382611425565b6001805460009061157e9084906001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115ab8261211e565b600380546000906115c0908490600f0b614395565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806116008785611bd5565b9150600061162e837f0000000000000000000000000000000000000000000000000000000000000000611383565b905061165a817f0000000000000000000000000000000000000000000000000000000000000000611383565b9150831561167d5761166c828261430b565b611676908461430b565b9250611694565b611687828261430b565b61169190846142ae565b92505b868610156116b7576116a7838789611ba2565b92506116b4828789611ba2565b91505b509550959350505050565b6000806116da846116d48a888a611ba2565b90611bd5565b90506116e7888486611ba2565b6116f190826142ae565b9050868111156117015786810391505b509695505050505050565b60006001600160701b038211156110cb5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061177857507f0000000000000000000000000000000000000000000000000000000000000000611776858361430b565b105b15611785576117856111e2565b6003549084900390600f0b61179a84826142c1565b9050836117a6866110a1565b1380156117db57507f00000000000000000000000000000000000000000000000000000000000000006117d98383612148565b105b156117e8576117e86111e2565b600254600160801b90046001600160801b031661182a610f2182611814670de0b6b3a76400008861437e565b6004546001600160801b031691908c6000611f08565b600480546001600160801b0319166001600160801b0392909216919091179055611854888261430b565b905061185f81611425565b600280546001600160801b03928316600160801b02921691909117905561188583611425565b600180546001600160801b0319166001600160801b03929092169190911790556118ae82611fb2565b600380546001600160801b0319166001600160801b03929092169190911790556118d787611425565b600180546010906118f9908490600160801b90046001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611972916001600160801b03169061430b565b90508060000361198657600191505061109b565b60006119918561216e565b9050806000036119a65760019250505061109b565b6000806119b4838589612210565b91509150806119ca57600094505050505061109b565b6000806119d78489612316565b915091506119f56119e7826110a1565b6119f090614448565b612408565b925082611a0b576000965050505050505061109b565b611a1482611425565b60068054600090611a2f9084906001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a5c81611425565b60068054601090611a7e908490600160801b90046001600160801b031661433e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611ac9611ac486612515565b61264f565b9150915080611adf575060009485945092505050565b6000808611611aef576000611af9565b611af98387611383565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611b6491906142ae565b611b6e919061430b565b905080600003611b875750600096879650945050505050565b6000611b938383611bd5565b98600198509650505050505050565b6000826000190484118302158202611bb957600080fd5b5091020490565b600061093f8383670de0b6b3a76400006126dc565b600061093f83670de0b6b3a764000084611ba2565b600080611bf561047b565b9050808311611c05576000611c0f565b611c0f818461430b565b915061093f827f0000000000000000000000000000000000000000000000000000000000000000611bd5565b600154600354600091610476916001600160801b0390911690600f0b612148565b60008080611c7d611c7588670de0b6b3a764000061430b565b8990876126dc565b90508615611cbf57611c8f8888611bc0565b9150611cb08a8a84611ca98a670de0b6b3a764000061430b565b8989612702565b9250611cbc83826142ae565b90505b9750975097945050505050565b60006100b282611cdd858888611ba2565b90612725565b6000611d01611cfa84670de0b6b3a764000061430b565b8390611bc0565b61093f90670de0b6b3a764000061430b565b600080611d4a85611d22611c3b565b611d2c91906142ae565b600154610e5c908790600160801b90046001600160801b031661430b565b909210949350505050565b6000808080611dac8786611da58b611d9f611d788c670de0b6b3a764000061430b565b7f000000000000000000000000000000000000000000000000000000000000000090611bc0565b90611bc0565b91906126dc565b9350611dd8847f0000000000000000000000000000000000000000000000000000000000000000611383565b91506000611df9611df189670de0b6b3a764000061430b565b8a90886126dc565b9050611e25817f0000000000000000000000000000000000000000000000000000000000000000611bc0565b9350611e51847f0000000000000000000000000000000000000000000000000000000000000000611383565b611e5b90846142ae565b915050945094509450949050565b60008060008060008088881015611ed8578615611e8e57611e8b8d898b611ba2565b9c505b611e998c898b611ba2565b9b50611ea48b6110a1565b611ead8d6110a1565b611eb791906142c1565b9050611ec48b898b611ba2565b9a50611ed18a898b611ba2565b9950611ef7565b611ee18b6110a1565b611eea8d6110a1565b611ef491906142c1565b90505b9b9c9a9b999a975050505050505050565b600082600003611f19575084611fa9565b8115611f6c57611f4a611f2c84876142ae565b611f368587611383565b611f40888a611383565b6116d491906142ae565b90506000611f58858861279a565b905080821015611f66578091505b50611fa9565b828503611f7b57506000611fa9565b611fa6611f88848761430b565b611f928587611bc0565b611f9c888a611383565b6116d4919061430b565b90505b95945050505050565b600060016001607f1b0319821280611fd0575060016001607f1b0382135b156110cb5760405163a5353be560e01b815260040160405180910390fd5b6000818313611ffd578161093f565b5090919050565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906319208451906024016113e4565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af11580156120de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612102919061442f565b5050505050565b600061093f83670de0b6b3a7640000846126dc565b600060016001607f1b038211156110cb5760405163a5353be560e01b815260040160405180910390fd5b60008061215584846127a9565b909250905080612167576121676111e2565b5092915050565b6002546000908190612189906001600160801b031684612109565b90506121b57f0000000000000000000000000000000000000000000000000000000000000000826142ae565b6001546001600160801b0316111561220a576001547f0000000000000000000000000000000000000000000000000000000000000000906122009083906001600160801b031661430b565b61093f919061430b565b50919050565b6122186140de565b60008061222484612515565b905060006122318261264f565b935090508261224657506000915061009c9050565b600061226d61226884610160015185610140015161138390919063ffffffff16565b6110a1565b61228d612268856101200151866101000151611bc090919063ffffffff16565b61229791906142c1565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60008060008061232e8660c001518760e001516127a9565b915091508061234557600080935093505050612401565b600061235187846127e5565b92509050811580612360575080155b156123745760008094509450505050612401565b600061238088836128f4565b90508060000361239a576000809550955050505050612401565b876060015181116123b15794509250612401915050565b50606087015160006123c58986858b6129c5565b9050806000036123e057600080965096505050505050612401565b8281106123f857600080965096505050505050612401565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b9004168380808061245a8787877f00000000000000000000000000000000000000000000000000000000000000008d612eda565b9350935093509350806124765750600098975050505050505050565b8684146124a75761248684611425565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146124d8576124b783611fb2565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612506576124e882611425565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b61251d614130565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916126159116612ff2565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261264792900416612ff2565b905292915050565b600080600080600061266086613068565b915091508061267757506000958695509350505050565b6126848660a001516110a1565b61268d87613388565b8361269b89600001516110a1565b6126a59190614464565b6126af9190614464565b6126b991906142c1565b9250505060008112156126d25750600093849350915050565b9360019350915050565b60008260001904841183021582026126f357600080fd5b50910281810615159190040190565b6000806127138888888888886133ec565b909250905080611701576117016111e2565b60008160000361273e5750670de0b6b3a764000061109b565b8260000361274e5750600061109b565b6000612759836110a1565b9050600061276e612769866110a1565b6134cd565b9050818102612785670de0b6b3a76400008261448c565b9050612790816136f3565b9695505050505050565b600081831161220a578261093f565b6000806000836127b8866110a1565b6127c291906142c1565b905060008112156127da576000809250925050612401565b946001945092505050565b60008060008460a001511261280257505060808201516001612401565b60008460a0015161281290614448565b9050600061284e85876101000151886000015160e00151670de0b6b3a764000061283c919061430b565b89516060810151608090910151613888565b9350905082158061285d575080155b1561287057600080935093505050612401565b600061287c8383612109565b9050670de0b6b3a764000081116128b85780670de0b6b3a76400000394506128b18760c001518661138390919063ffffffff16565b94506128c7565b60008094509450505050612401565b86608001518511156128e6578660800151600194509450505050612401565b506001925050509250929050565b60008061292a8460c001518560e00151866101000151876000015160a0015161291c886110a1565b61292590614448565b612eda565b8751604081019290925260208201929092529190915290508061295157600091505061109b565b6000612960856000015161264f565b92509050816129745760009250505061109b565b8460200151811061298a5760009250505061109b565b6000856060015186604001516129a091906142ae565b90506129bb82876020015183611ba29092919063ffffffff16565b612790908261430b565b600080856060015186604001516129dc91906142ae565b602087015160608801519192506000916129f69184611ba2565b90508660a00151600003612a0d5791506100b59050565b60008080896004881015612a2057600497505b60005b88811015612d7c57612a35868b61279a565b95506000612a5e8360c001518460e00151856101000151866000015160a0015161291c8c6110a1565b86516040810192909252602082019290925291909152905080612a8c576000985050505050505050506100b5565b6000612a9b8e6000015161264f565b9250905081612ab657600099505050505050505050506100b5565b612ac184828b613931565b15612ad7578799505050505050505050506100b5565b60008460a001511315612c4057835180516020820151604083015160a084015160e090940151600094612b2b94939291612b1990670de0b6b3a764000061430b565b8a51606081015160809091015161399d565b9350905082612b475760009a50505050505050505050506100b5565b808560a0015110612c3e57612b5b85613aa2565b909950925082612b785760009a50505050505050505050506100b5565b612b9d8560c001518660e00151876101000151886000015160a0015161291c8e6110a1565b88516040810192909252602082019290925291909152925082612bcd5760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612bfd9490612b1990670de0b6b3a764000061430b565b9350905082612c195760009a50505050505050505050506100b5565b8e60a001518111612c3657889a50505050505050505050506100b5565b505050612a23565b505b6000612c51858f8760a00151613b78565b93509050821580612c6a5750670de0b6b3a76400008110155b15612c825760009a50505050505050505050506100b5565b80670de0b6b3a76400000390506000612caf61226887604001518860200151611bc090919063ffffffff16565b612cbc612268858e611383565b612cc691906142c1565b9050881580612ce45750612cd989613ed3565b612ce282613ed3565b125b15612cf3578098508997508296505b6000811315612d1b57612d0a8b6116d48385611bd5565b612d14908b6142ae565b9950612d6d565b6000811215612d64576000612d358c6116d4858186614448565b90508a811015612d4957808b039a50612d5e565b60009c505050505050505050505050506100b5565b50612d6d565b50505050612d7c565b84600101945050505050612a23565b506000612da48260c001518360e00151846101000151856000015160a0015161291c8b6110a1565b85516040810192909252602082019290925291909152905080612dd15760009750505050505050506100b5565b6000612de08360000151613eeb565b90506000612e0261226885604001518660200151611bc090919063ffffffff16565b612e0f612268848c611383565b612e1991906142c1565b9050612e2487613ed3565b612e2d82613ed3565b1215612e3a578795508194505b612e61612e55655af3107a4000670de0b6b3a764000061430b565b6020860151908b6126dc565b6040850151612e71908790611bd5565b1080612eb15750612e9f612e93655af3107a4000670de0b6b3a76400006142ae565b6020860151908b611ba2565b6040850151612eaf908790612109565b115b15612ec857600099505050505050505050506100b5565b50939c9b505050505050505050505050565b60008060008084600003612ef957508792508691508590506001612fe6565b600085612f058b6110a1565b612f0f9190614464565b9050612f1a876110a1565b811215612f3557600080600080945094509450945050612fe6565b80945060008912612f5557612f4e612268868b8d611ba2565b9350612f78565b612f6c612268612f648b614448565b87908d6126dc565b612f7590614448565b93505b600080612f858c8c6127a9565b9150915080612fa4576000806000809650965096509650505050612fe6565b6000612fb088886127a9565b9250905081612fd057600080600080975097509750975050505050612fe6565b612fdb8b8285611ba2565b955060019450505050505b95509550955095915050565b600080670de0b6b3a764000061300661047b565b613010919061437e565b905080831161302057600061302a565b61302a818461430b565b915061093f613061670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061437e565b8390611bd5565b600080600061308d61226885610160015186610140015161138390919063ffffffff16565b6130ad612268866101200151876101000151611bc090919063ffffffff16565b6130b791906142c1565b90506000806130ce866000015187602001516127a9565b91509150806130e557506000958695509350505050565b60008313156132265760008390506000613133886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000613124919061430b565b8d606001518e6080015161399d565b935090508261314c575060009788975095505050505050565b8181106131ea576000613186858a60400151858c60e00151670de0b6b3a7640000613177919061430b565b8d606001518e60800151613f1b565b945090508315801561319b57508860c0015183105b156131b25750600098600198509650505050505050565b836131c857506000988998509650505050505050565b6131d1816110a1565b6131da90614448565b9960019950975050505050505050565b6000886020015112613212576132098860a0015185612268919061430b565b611b9390614448565b60a08801518851613209916122689161430b565b600083121561337957600061323a84614448565b9050600061326e8489604001518a60e00151670de0b6b3a764000061325f919061430b565b8b606001518c60800151613888565b9350905082613287575060009788975095505050505050565b81811061330c5760006132c1858a60400151858c60e00151670de0b6b3a76400006132b2919061430b565b8d606001518e608001516133ec565b94509050831580156132d657508860c0015183105b156132ed5750600098600198509650505050505050565b8361330357506000988998509650505050505050565b6131da816110a1565b600061333e858a604001518b60e00151670de0b6b3a764000061332f919061430b565b8c606001518d60800151613fdb565b945090508361335857506000988998509650505050505050565b6131da61336f8a6060015184866116d4919061430b565b61226890836142ae565b50600095600195509350505050565b60006133bb612268836101200151670de0b6b3a76400006133a9919061430b565b606085015161010086015191906126dc565b611091612268846101600151670de0b6b3a76400006133da919061430b565b60608601516101408701519190611ba2565b60008060006133fe898988888861408a565b9050868810156134155760008092509250506134c2565b96869003966134248887612725565b97508781101561343b5760008092509250506134c2565b8781036134498186886126dc565b9050670de0b6b3a7640000811061347d5761347661346f670de0b6b3a764000089612109565b8290612725565b9050613495565b61349261346f670de0b6b3a764000089611bd5565b90505b61349f8186612109565b9050898110156134b7576000809350935050506134c2565b899003925060019150505b965096945050505050565b60008082136134ef5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906135729084901c6110a1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361370e57506000919050565b680755bf798b4a1bf1e58212613737576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061279074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6110a1565b600080600061389a888888888861408a565b905060006138c5670de0b6b3a76400006138b48888611bd5565b6138be91906142ae565b8390612109565b9050670de0b6b3a764000081106138f2576138eb61346f670de0b6b3a764000089612109565b905061390a565b61390761346f670de0b6b3a764000089611bd5565b90505b8088101561392057600080935093505050610a7f565b909603976001975095505050505050565b60208301516000906139439084612109565b6040850151613953908490611bd5565b101580156100b557506020840151613983908461397c633b9aca00670de0b6b3a76400006142ae565b9190611ba2565b6040850151613993908490612109565b1115949350505050565b60008060008812156139bf576139b288614448565b6139bc90876142ae565b95505b6000806139cc8b8b6127a9565b91509150806139e357600080935093505050613a96565b60006139f2838b8a8a8a6140b9565b90506000613a0f613a078a611cdd8a8e611bc0565b8990896126dc565b905080821015613a29576000809550955050505050613a96565b808203670de0b6b3a76400008110613a5757613a5061346f670de0b6b3a76400008c611bd5565b9050613a6f565b613a6c61346f670de0b6b3a76400008c612109565b90505b8b811015613a8857600080965096505050505050613a96565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613abc57506000928392509050565b6000613acb8460000151613388565b90506000613af7856040015186606001518760400151613aeb91906142ae565b602088015191906126dc565b905060008212613b1e5780821015613b1157819003613b34565b5060009485945092505050565b613b2782614448565b613b3190826142ae565b90505b60e085015160c0860151613b499183906126dc565b9050808560c001511015613b64575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b9c57855160400151613b959085906142ae565b9050613bd7565b6000613ba785614448565b875160400151909150811015613bc7578651604001518190039150613bd5565b60008093509350505061009c565b505b855180516020909101516000918291613bf091906127a9565b9150915080613c08576000809450945050505061009c565b875160e0810151604090910151600091613c3d91613c3191613c2a9190612725565b8a90611383565b6101008b015190612109565b895160e0810151608090910151613c6891613c5c91611cdd9088611383565b8b516060015190612109565b613c7291906142ae565b90506000613caa613c9e613c978c6000015160e001518861272590919063ffffffff16565b8b90611bc0565b6101008c015190611bd5565b905080821015613cc55760008096509650505050505061009c565b80820391506000613d07858c60000151604001518d6000015160e00151670de0b6b3a7640000613cf5919061430b565b8e51606081015160809091015161408a565b90506000613d318c6000015160e00151670de0b6b3a7640000613d2a919061430b565b8890612725565b905080821015613d4e57600080985098505050505050505061009c565b8b51608081015160609091015191830391613d6a9183916126dc565b9050670de0b6b3a76400008110613dae578b5160e00151613da79061346f90613d9b90670de0b6b3a764000061430b565b8e5160e0015190612109565b9050613ddd565b8b5160e00151613dda9061346f90613dce90670de0b6b3a764000061430b565b8e5160e0015190611bd5565b90505b8b5160600151613df090859083906126dc565b935083670de0b6b3a76400001115613e145783670de0b6b3a7640000039350613e28565b60006001985098505050505050505061009c565b60008c60e0015112613e8b5760c08c015160e08d0151613e4791612109565b9250670de0b6b3a7640000831115613e6c57600080985098505050505050505061009c565b670de0b6b3a76400009290920391613e848484611383565b9350613ec0565b613ebd613ea48d60c001518e60e001516116d490614448565b613eb690670de0b6b3a76400006142ae565b8590611383565b93505b50919a60019a5098505050505050505050565b6000808212613ee2578161109b565b61109b82614448565b6000806000613ef98461264f565b915091508061216757604051635516328b60e11b815260040160405180910390fd5b6000806000613f2d898988888861408a565b9050613f3d86611cdd898b6142ae565b975087811015613f545760008092509250506134c2565b878103613f628186886126dc565b9050670de0b6b3a76400008110613f8f57613f8861346f670de0b6b3a764000089612109565b9050613fa7565b613fa461346f670de0b6b3a764000089611bd5565b90505b613fb18186612109565b9050808a1015613fc9576000809350935050506134c2565b90980398600198509650505050505050565b6000806000613fed88888888886140b9565b90506000614011670de0b6b3a76400006140078888612109565b61306191906142ae565b9050670de0b6b3a7640000811061403e5761403761346f670de0b6b3a764000089611bd5565b9050614056565b61405361346f670de0b6b3a764000089612109565b90505b6140608186611bd5565b90508881101561407857600080935093505050610a7f565b97909703976001975095505050505050565b60006140968585612725565b6140af6140a786611cdd868b611bc0565b8590856126dc565b611fa691906142ae565b60006140c58585612725565b6140af6140d686611cdd868b611383565b859085611ba2565b6040518061012001604052806140f2614130565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561220a57600080fd5b6000806000606084860312156141b857600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156141dd57600080fd5b6141e986828701614191565b9150509250925092565b6000806000806080858703121561420957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561423557600080fd5b61424187828801614191565b91505092959194509250565b60006020828403121561425f57600080fd5b81356001600160a01b038116811461093f57600080fd5b60006020828403121561428857600080fd5b8135801515811461093f57600080fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561109b5761109b614298565b818103600083128015838313168383128216171561216757612167614298565b634e487b7160e01b600052601260045260246000fd5b600082614306576143066142e1565b500690565b8181038181111561109b5761109b614298565b6001600160701b0381811683821601908082111561216757612167614298565b6001600160801b0381811683821601908082111561216757612167614298565b6001600160801b0382811682821603908082111561216757612167614298565b808202811582820484141761109b5761109b614298565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561109b5761109b614298565b600081600f0b60016001607f1b031981036143df576143df614298565b60000392915050565b6000808335601e198436030181126143ff57600080fd5b83018035915067ffffffffffffffff82111561441a57600080fd5b60200191503681900382131561240157600080fd5b60006020828403121561444157600080fd5b5051919050565b6000600160ff1b820161445d5761445d614298565b5060000390565b808201828112600083128015821682158216171561448457614484614298565b505092915050565b60008261449b5761449b6142e1565b600160ff1b8214600019841416156144b5576144b5614298565b50059056fea2646970667358221220b81f107a45f925cfe988446f5468788310cb9ea3aaad88c7d24b9796677ad5a364736f6c63430008140033',
    methodIdentifiers: {
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9"
    }
};
