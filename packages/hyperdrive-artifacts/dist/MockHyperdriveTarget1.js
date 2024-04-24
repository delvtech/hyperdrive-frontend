export const MockHyperdriveTarget1 = {
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004d1238038062004d128339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516148c66200044c6000396000505060005050600081816101a7015261294b015260008181611189015281816117bb0152818161181e015281816125310152818161256d015281816127d60152612925015260008181610c4801528181610c9501528181610e5e01526128ff0152600061157e0152600081816116a401528181611e220152611e9b0152600081816106a101528181610ded015281816116780152611e6f015260008181610ce70152611de8015260008181610c2601528181610cb601528181610e7f01526129710152600081816105dc01528181610d7301528181611c8501526133ed0152600081816104820152818161050f0152610574015260005050600081816113b3015281816113fc015281816120ac015281816120f5015281816121d00152818161227c01528181612368015261241401526148c66000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063074a6de91461003b57806329b23fc114610068575b600080fd5b61004e610049366004614553565b610089565b604080519283526020830191909152015b60405180910390f35b61007b6100763660046145a3565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610192565b90505b949350505050565b6000806100c8610400565b6100d18361042a565b60006100db610463565b90506100f06100e861047b565b8260046104b1565b506100fe3387838888610946565b909350915061011060208501856145fd565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8461014787868a610a89565b61015288878b610ab8565b61016260408b0160208c01614634565b604080519485526020850193909352918301521515606082015260800160405180910390a35061009c6001600055565b600061019c610400565b6101a58261042a565b7f00000000000000000000000000000000000000000000000000000000000000008410156101e65760405163211ddda360e11b815260040160405180910390fd5b60006101f0610463565b90508542101561020b576102056100e861047b565b50610219565b610217868260046104b1565b505b61022e610227600288610ae0565b3387610b15565b60008060008060006102418a878d610bee565b945094509450945094508a4210156102e85780600b60008282546102659190614667565b9091555061027890508a8685858f610ed8565b60006102838c611057565b90506102a16102918c6110a1565b61029b908361467a565b826110cf565b6102aa87611182565b6102b6576102b66111e2565b60006102c1886111fb565b9050806102e157604051638bdf918d60e01b815260040160405180910390fd5b50506102ff565b6102f28487611208565b93506102fd866111fb565b505b600061030c85888b6112e9565b90508981101561032f5760405163c972651760e01b815260040160405180910390fd5b8a8c85848a8d610340600286610ae0565b61034d60208301836145fd565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730886103848c8888610a89565b61038f8d8989610ab8565b61039f6040890160208a01614634565b6103b38a6103ad8d8f614667565b90611383565b6040805195865260208601949094529284019190915215156060830152608082015260a081018b905260c00160405180910390a450949b5050505050505050505050506100b56001600055565b60026000540361042357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061043960208301836145fd565b6001600160a01b0316036104605760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610476670de0b6b3a7640000611398565b905090565b60006104a77f0000000000000000000000000000000000000000000000000000000000000000426146b0565b61047690426146c4565b600083815260076020526040812080546001600160801b03161515806104d657504285115b156104ec57546001600160801b0316905061093f565b6000806104f761047b565b9050808703610508578591506105a2565b60006105347f000000000000000000000000000000000000000000000000000000000000000089614667565b90505b6000818152600760205260409020546001600160801b03169250818114801561055e575082155b15610567578692505b826000036105a0576105997f000000000000000000000000000000000000000000000000000000000000000082614667565b9050610537565b505b6105ab82611493565b83546001600160801b0319166001600160801b03919091161783556105cf866114bd565b50600090506007816106017f00000000000000000000000000000000000000000000000000000000000000008b6146c4565b815260208101919091526040016000908120546001600160801b0316915061062a60028a610ae0565b6000818152600e60205260408120549192508a8a8315610770576001925060008061065986898c866000611661565b9150915080600b600082825461066f9190614667565b9091555061068b905086600084610685816110a1565b88610ed8565b6106958183614667565b91506106c586838a8d877f0000000000000000000000000000000000000000000000000000000000000000611730565b91506106d96106d48385611383565b61177a565b600580546002906106fa9084906201000090046001600160701b03166146d7565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061072782611493565b60058054601090610749908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061077d600184610ae0565b6000818152600e6020526040902054909150801561088c57600194506000806107aa838b8e886001611661565b9150915080600b60008282546107c09190614667565b909155506107dc9050836000846107d6816110a1565b8a6117a4565b6107e681836146c4565b91506107f56106d48387611383565b600580546002906108169084906201000090046001600160701b03166146d7565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061084382611493565b60058054601090610865908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156108c4576108b861089e876110a1565b6108a7836110a1565b6108b1919061467a565b60006110cf565b6108c28e8e611995565b505b60006108cf8f611b20565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610928959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b600080610952856111fb565b505060065485906001600160801b03168082111561097757806001600160801b031691505b8160000361098c576000809250925050610a7f565b61099b600360f81b8984610b15565b6006546000906109c19084906001600160801b03600160801b9091048116908516611c10565b90506109cc83611493565b6109d69083614717565b600680546001600160801b0319166001600160801b03929092169190911790556109ff81611493565b60068054601090610a21908490600160801b90046001600160801b0316614717565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610a508188876112e9565b9350610a5c8684611c2e565b841015610a7c5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b6000610a9b6040830160208401614634565b15610aa757508261093f565b610ab18484611383565b905061093f565b6000610aca6040830160208401614634565b15610ad957610ab18484611c43565b508261093f565b60006001600160f81b03821115610b0a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610b5857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610b9b9084906146c4565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610c0288611c58565b9050610c6c610c0f611ca9565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611cca565b909850955091506000610cda610c80611ca9565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d3a565b9050610d108389610d0b847f0000000000000000000000000000000000000000000000000000000000000000611d51565b611d81565b15610d1d57610d1d6111e2565b8a8a60008080610d2f85888887611dc3565b9b5091945092509050610d4281846146c4565b610d4c9089614667565b9750610d588284614667565b610d62908c614667565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610d9d91906146c4565b815260208101919091526040016000908120546001600160801b03169150428911610ddf576000898152600760205260409020546001600160801b0316610de1565b895b9050610e118b8784848e7f0000000000000000000000000000000000000000000000000000000000000000611730565b9650610e1d84876146c4565b9550670de0b6b3a7640000610ea384610e34611ca9565b610e3e9190614667565b600154610e5c908c90600160801b90046001600160801b03166146c4565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d3a565b1115610eb157610eb16111e2565b610ec18787858786866000611ed7565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610f26610f2182610f04670de0b6b3a764000086614737565b600454600160801b90046001600160801b031691908a6000611f76565b611493565b600480546001600160801b03928316600160801b029216919091179055610f4c86611493565b610f569082614717565b600380546001600160801b03928316600160801b029216919091179055610f7c84611493565b60018054600090610f979084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc48361203f565b60038054600090610fd9908490600f0b61474e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061100985611493565b6001805460109061102b908490600160801b90046001600160801b0316614717565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061107f600e600061106b600286610ae0565b8152602001908152602001600020546110a1565b611091600e600061106b600187610ae0565b61109b919061467a565b92915050565b60006001600160ff1b038211156110cb5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006110f86110de848361207b565b6110e984600061207b565b6110f3919061467a565b61203f565b9050600081600f0b131561114d57600280548291906000906111249084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561117d576111628161477b565b600280546000906111249084906001600160801b0316614717565b505050565b60006111ae7f000000000000000000000000000000000000000000000000000000000000000083611c2e565b6002546111c491906001600160801b0316614667565b6001546111da906001600160801b031684611383565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061109b826004611995565b6000806000611216846114bd565b909250905060006112278686611383565b90508183111561123f5761123c868385611c10565b95505b82811015611251578083039250611256565b600092505b61125f8361177a565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156112b2578690036112b6565b5060005b6112bf81611493565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806112f68585611383565b905061130181612091565b94508460000361131557600091505061093f565b6113256040840160208501614634565b156113545761134d8561133b60208601866145fd565b61134860408701876147a1565b61217a565b915061137b565b6113778561136560208601866145fd565b61137260408701876147a1565b612314565b8491505b509392505050565b600061093f8383670de0b6b3a7640000611c10565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016113e7575047611472565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561144b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146f91906147e8565b90505b60125460000361148357600061093f565b60125461093f9084908390611c10565b60006001600160801b038211156110cb57604051630f0af95160e11b815260040160405180910390fd5b60055460009081906114e0908490600160801b90046001600160801b0316611383565b6005546201000090046001600160701b0316925090508181111561165c57600061150a83836146c4565b9050611519610f2182866124aa565b6005805460109061153b908490600160801b90046001600160801b0316614717565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115748583611c4390919063ffffffff16565b905060006115a2827f0000000000000000000000000000000000000000000000000000000000000000611383565b905080600b60008282546115b69190614667565b909155506115c6905081836146c4565b91506115d182611493565b600180546000906115ec9084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611619826124bf565b6003805460009061162e908490600f0b61474e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061166e8785611c43565b9150600061169c837f0000000000000000000000000000000000000000000000000000000000000000611383565b90506116c8817f0000000000000000000000000000000000000000000000000000000000000000611383565b915083156116eb576116da82826146c4565b6116e490846146c4565b9250611702565b6116f582826146c4565b6116ff9084614667565b92505b8686101561172557611715838789611c10565b9250611722828789611c10565b91505b509550959350505050565b600080611748846117428a888a611c10565b90611c43565b9050611755888486611c10565b61175f9082614667565b90508681111561176f5786810391505b509695505050505050565b60006001600160701b038211156110cb5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806117e657507f00000000000000000000000000000000000000000000000000000000000000006117e485836146c4565b105b156117f3576117f36111e2565b6003549084900390600f0b611808848261467a565b905083611814866110a1565b13801561184957507f000000000000000000000000000000000000000000000000000000000000000061184783836124e9565b105b15611856576118566111e2565b600254600160801b90046001600160801b0316611898610f2182611882670de0b6b3a764000088614737565b6004546001600160801b031691908c6000611f76565b600480546001600160801b0319166001600160801b03929092169190911790556118c288826146c4565b90506118cd81611493565b600280546001600160801b03928316600160801b0292169190911790556118f383611493565b600180546001600160801b0319166001600160801b039290921691909117905561191c8261203f565b600380546001600160801b0319166001600160801b039290921691909117905561194587611493565b60018054601090611967908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916119e0916001600160801b0316906146c4565b9050806000036119f457600191505061109b565b60006119ff8561250f565b905080600003611a145760019250505061109b565b600080611a228385896125b1565b9150915080611a3857600094505050505061109b565b600080611a4584896126b7565b91509150611a63611a55826110a1565b611a5e90614801565b6127a9565b925082611a79576000965050505050505061109b565b611a8282611493565b60068054600090611a9d9084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611aca81611493565b60068054601090611aec908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611b37611b32866128b6565b6129f0565b9150915080611b4d575060009485945092505050565b6000808611611b5d576000611b67565b611b678387611383565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611bd29190614667565b611bdc91906146c4565b905080600003611bf55750600096879650945050505050565b6000611c018383611c43565b98600198509650505050505050565b6000826000190484118302158202611c2757600080fd5b5091020490565b600061093f8383670de0b6b3a7640000612a7d565b600061093f83670de0b6b3a764000084611c10565b600080611c6361047b565b9050808311611c73576000611c7d565b611c7d81846146c4565b915061093f827f0000000000000000000000000000000000000000000000000000000000000000611c43565b600154600354600091610476916001600160801b0390911690600f0b6124e9565b60008080611ceb611ce388670de0b6b3a76400006146c4565b899087612a7d565b90508615611d2d57611cfd8888611c2e565b9150611d1e8a8a84611d178a670de0b6b3a76400006146c4565b8989612aa3565b9250611d2a8382614667565b90505b9750975097945050505050565b60006100b282611d4b858888611c10565b90612ac6565b6000611d6f611d6884670de0b6b3a76400006146c4565b8390611c2e565b61093f90670de0b6b3a76400006146c4565b600080611db885611d90611ca9565b611d9a9190614667565b600154610e5c908790600160801b90046001600160801b03166146c4565b909210949350505050565b6000808080611e1a8786611e138b611e0d611de68c670de0b6b3a76400006146c4565b7f000000000000000000000000000000000000000000000000000000000000000090611c2e565b90611c2e565b9190612a7d565b9350611e46847f0000000000000000000000000000000000000000000000000000000000000000611383565b91506000611e67611e5f89670de0b6b3a76400006146c4565b8a9088612a7d565b9050611e93817f0000000000000000000000000000000000000000000000000000000000000000611c2e565b9350611ebf847f0000000000000000000000000000000000000000000000000000000000000000611383565b611ec99084614667565b915050945094509450949050565b60008060008060008088881015611f46578615611efc57611ef98d898b611c10565b9c505b611f078c898b611c10565b9b50611f128b6110a1565b611f1b8d6110a1565b611f25919061467a565b9050611f328b898b611c10565b9a50611f3f8a898b611c10565b9950611f65565b611f4f8b6110a1565b611f588d6110a1565b611f62919061467a565b90505b9b9c9a9b999a975050505050505050565b600082600003611f87575084612036565b8115611ff957611fb8611f9a8487614667565b611fa48587611383565b611fae888a611383565b6117429190614667565b90506000611fc68588612b3b565b90506000611fd48689612b4a565b905081831015611fe657819250611ff2565b80831115611ff2578092505b5050612036565b82850361200857506000612036565b61203361201584876146c4565b61201f8587611c2e565b612029888a611383565b61174291906146c4565b90505b95945050505050565b600060016001607f1b031982128061205d575060016001607f1b0382135b156110cb5760405163a5353be560e01b815260040160405180910390fd5b600081831361208a578161093f565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016120e057504761216b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612144573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061216891906147e8565b90505b60125461093f90849083611c10565b6000601254851161218b578461218f565b6012545b9450600061219c86611398565b905085601260008282546121b091906146c4565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612256576040516001600160a01b038716908390600081818185875af1925050503d8060008114612246576040519150601f19603f3d011682016040523d82523d6000602084013e61224b565b606091505b5050809150506122ec565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156122c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e9919061481d565b90505b8061230a576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116123235783612327565b6012545b9350600061233485611398565b9050846012600082825461234891906146c4565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123ee576040516001600160a01b038616908390600081818185875af1925050503d80600081146123de576040519150601f19603f3d011682016040523d82523d6000602084013e6123e3565b606091505b505080915050612484565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561245d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612481919061481d565b90505b806124a2576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600061093f83670de0b6b3a764000084612a7d565b600060016001607f1b038211156110cb5760405163a5353be560e01b815260040160405180910390fd5b6000806124f68484612b59565b909250905080612508576125086111e2565b5092915050565b600254600090819061252a906001600160801b0316846124aa565b90506125567f000000000000000000000000000000000000000000000000000000000000000082614667565b6001546001600160801b031611156125ab576001547f0000000000000000000000000000000000000000000000000000000000000000906125a19083906001600160801b03166146c4565b61093f91906146c4565b50919050565b6125b961448e565b6000806125c5846128b6565b905060006125d2826129f0565b93509050826125e757506000915061009c9050565b600061260e61260984610160015185610140015161138390919063ffffffff16565b6110a1565b61262e612609856101200151866101000151611c2e90919063ffffffff16565b612638919061467a565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806126cf8660c001518760e00151612b59565b91509150806126e6576000809350935050506127a2565b60006126f28784612b95565b92509050811580612701575080155b1561271557600080945094505050506127a2565b60006127218883612ca4565b90508060000361273b5760008095509550505050506127a2565b8760600151811161275257945092506127a2915050565b50606087015160006127668986858b612d75565b905080600003612781576000809650965050505050506127a2565b828110612799576000809650965050505050506127a2565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806127fb8787877f00000000000000000000000000000000000000000000000000000000000000008d61328a565b9350935093509350806128175750600098975050505050505050565b8684146128485761282784611493565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612879576128588361203f565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146128a75761288982611493565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6128be6144e0565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916129b691166133a2565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926129e8929004166133a2565b905292915050565b6000806000806000612a0186613418565b9150915080612a1857506000958695509350505050565b612a258660a001516110a1565b612a2e87613738565b83612a3c89600001516110a1565b612a46919061483a565b612a50919061483a565b612a5a919061467a565b925050506000811215612a735750600093849350915050565b9360019350915050565b6000826000190484118302158202612a9457600080fd5b50910281810615159190040190565b600080612ab488888888888861379c565b90925090508061176f5761176f6111e2565b600081600003612adf5750670de0b6b3a764000061109b565b82600003612aef5750600061109b565b6000612afa836110a1565b90506000612b0f612b0a866110a1565b61387d565b9050818102612b26670de0b6b3a764000082614862565b9050612b3181613aa3565b9695505050505050565b60008183116125ab578261093f565b600081831161208a578161093f565b600080600083612b68866110a1565b612b72919061467a565b90506000811215612b8a5760008092509250506127a2565b946001945092505050565b60008060008460a0015112612bb2575050608082015160016127a2565b60008460a00151612bc290614801565b90506000612bfe85876101000151886000015160e00151670de0b6b3a7640000612bec91906146c4565b89516060810151608090910151613c38565b93509050821580612c0d575080155b15612c20576000809350935050506127a2565b6000612c2c83836124aa565b9050670de0b6b3a76400008111612c685780670de0b6b3a7640000039450612c618760c001518661138390919063ffffffff16565b9450612c77565b600080945094505050506127a2565b8660800151851115612c965786608001516001945094505050506127a2565b506001925050509250929050565b600080612cda8460c001518560e00151866101000151876000015160a00151612ccc886110a1565b612cd590614801565b61328a565b87516040810192909252602082019290925291909152905080612d0157600091505061109b565b6000612d1085600001516129f0565b9250905081612d245760009250505061109b565b84602001518110612d3a5760009250505061109b565b600085606001518660400151612d509190614667565b9050612d6b82876020015183611c109092919063ffffffff16565b612b3190826146c4565b60008085606001518660400151612d8c9190614667565b60208701516060880151919250600091612da69184611c10565b90508660a00151600003612dbd5791506100b59050565b60008080896004881015612dd057600497505b60005b8881101561312c57612de5868b612b3b565b95506000612e0e8360c001518460e00151856101000151866000015160a00151612ccc8c6110a1565b86516040810192909252602082019290925291909152905080612e3c576000985050505050505050506100b5565b6000612e4b8e600001516129f0565b9250905081612e6657600099505050505050505050506100b5565b612e7184828b613ce1565b15612e87578799505050505050505050506100b5565b60008460a001511315612ff057835180516020820151604083015160a084015160e090940151600094612edb94939291612ec990670de0b6b3a76400006146c4565b8a516060810151608090910151613d4d565b9350905082612ef75760009a50505050505050505050506100b5565b808560a0015110612fee57612f0b85613e52565b909950925082612f285760009a50505050505050505050506100b5565b612f4d8560c001518660e00151876101000151886000015160a00151612ccc8e6110a1565b88516040810192909252602082019290925291909152925082612f7d5760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612fad9490612ec990670de0b6b3a76400006146c4565b9350905082612fc95760009a50505050505050505050506100b5565b8e60a001518111612fe657889a50505050505050505050506100b5565b505050612dd3565b505b6000613001858f8760a00151613f28565b9350905082158061301a5750670de0b6b3a76400008110155b156130325760009a50505050505050505050506100b5565b80670de0b6b3a7640000039050600061305f61260987604001518860200151611c2e90919063ffffffff16565b61306c612609858e611383565b613076919061467a565b9050881580613094575061308989614283565b61309282614283565b125b156130a3578098508997508296505b60008113156130cb576130ba8b6117428385611c43565b6130c4908b614667565b995061311d565b60008112156131145760006130e58c611742858186614801565b90508a8110156130f957808b039a5061310e565b60009c505050505050505050505050506100b5565b5061311d565b5050505061312c565b84600101945050505050612dd3565b5060006131548260c001518360e00151846101000151856000015160a00151612ccc8b6110a1565b855160408101929092526020820192909252919091529050806131815760009750505050505050506100b5565b6000613190836000015161429b565b905060006131b261260985604001518660200151611c2e90919063ffffffff16565b6131bf612609848c611383565b6131c9919061467a565b90506131d487614283565b6131dd82614283565b12156131ea578795508194505b613211613205655af3107a4000670de0b6b3a76400006146c4565b6020860151908b612a7d565b6040850151613221908790611c43565b1080613261575061324f613243655af3107a4000670de0b6b3a7640000614667565b6020860151908b611c10565b604085015161325f9087906124aa565b115b1561327857600099505050505050505050506100b5565b50939c9b505050505050505050505050565b600080600080846000036132a957508792508691508590506001613396565b6000856132b58b6110a1565b6132bf919061483a565b90506132ca876110a1565b8112156132e557600080600080945094509450945050613396565b80945060008912613305576132fe612609868b8d611c10565b9350613328565b61331c6126096133148b614801565b87908d612a7d565b61332590614801565b93505b6000806133358c8c612b59565b9150915080613354576000806000809650965096509650505050613396565b60006133608888612b59565b925090508161338057600080600080975097509750975050505050613396565b61338b8b8285611c10565b955060019450505050505b95509550955095915050565b600080670de0b6b3a76400006133b661047b565b6133c09190614737565b90508083116133d05760006133da565b6133da81846146c4565b915061093f613411670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614737565b8390611c43565b600080600061343d61260985610160015186610140015161138390919063ffffffff16565b61345d612609866101200151876101000151611c2e90919063ffffffff16565b613467919061467a565b905060008061347e86600001518760200151612b59565b915091508061349557506000958695509350505050565b60008313156135d657600083905060006134e3886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006134d491906146c4565b8d606001518e60800151613d4d565b93509050826134fc575060009788975095505050505050565b81811061359a576000613536858a60400151858c60e00151670de0b6b3a764000061352791906146c4565b8d606001518e608001516142cb565b945090508315801561354b57508860c0015183105b156135625750600098600198509650505050505050565b8361357857506000988998509650505050505050565b613581816110a1565b61358a90614801565b9960019950975050505050505050565b60008860200151126135c2576135b98860a001518561260991906146c4565b611c0190614801565b60a088015188516135b991612609916146c4565b60008312156137295760006135ea84614801565b9050600061361e8489604001518a60e00151670de0b6b3a764000061360f91906146c4565b8b606001518c60800151613c38565b9350905082613637575060009788975095505050505050565b8181106136bc576000613671858a60400151858c60e00151670de0b6b3a764000061366291906146c4565b8d606001518e6080015161379c565b945090508315801561368657508860c0015183105b1561369d5750600098600198509650505050505050565b836136b357506000988998509650505050505050565b61358a816110a1565b60006136ee858a604001518b60e00151670de0b6b3a76400006136df91906146c4565b8c606001518d6080015161438b565b945090508361370857506000988998509650505050505050565b61358a61371f8a60600151848661174291906146c4565b6126099083614667565b50600095600195509350505050565b600061376b612609836101200151670de0b6b3a764000061375991906146c4565b60608501516101008601519190612a7d565b611091612609846101600151670de0b6b3a764000061378a91906146c4565b60608601516101408701519190611c10565b60008060006137ae898988888861443a565b9050868810156137c5576000809250925050613872565b96869003966137d48887612ac6565b9750878110156137eb576000809250925050613872565b8781036137f9818688612a7d565b9050670de0b6b3a7640000811061382d5761382661381f670de0b6b3a7640000896124aa565b8290612ac6565b9050613845565b61384261381f670de0b6b3a764000089611c43565b90505b61384f81866124aa565b90508981101561386757600080935093505050613872565b899003925060019150505b965096945050505050565b600080821361389f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906139229084901c6110a1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613abe57506000919050565b680755bf798b4a1bf1e58212613ae7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b3174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6110a1565b6000806000613c4a888888888861443a565b90506000613c75670de0b6b3a7640000613c648888611c43565b613c6e9190614667565b83906124aa565b9050670de0b6b3a76400008110613ca257613c9b61381f670de0b6b3a7640000896124aa565b9050613cba565b613cb761381f670de0b6b3a764000089611c43565b90505b80881015613cd057600080935093505050610a7f565b909603976001975095505050505050565b6020830151600090613cf390846124aa565b6040850151613d03908490611c43565b101580156100b557506020840151613d339084613d2c633b9aca00670de0b6b3a7640000614667565b9190611c10565b6040850151613d439084906124aa565b1115949350505050565b6000806000881215613d6f57613d6288614801565b613d6c9087614667565b95505b600080613d7c8b8b612b59565b9150915080613d9357600080935093505050613e46565b6000613da2838b8a8a8a614469565b90506000613dbf613db78a611d4b8a8e611c2e565b899089612a7d565b905080821015613dd9576000809550955050505050613e46565b808203670de0b6b3a76400008110613e0757613e0061381f670de0b6b3a76400008c611c43565b9050613e1f565b613e1c61381f670de0b6b3a76400008c6124aa565b90505b8b811015613e3857600080965096505050505050613e46565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613e6c57506000928392509050565b6000613e7b8460000151613738565b90506000613ea7856040015186606001518760400151613e9b9190614667565b60208801519190612a7d565b905060008212613ece5780821015613ec157819003613ee4565b5060009485945092505050565b613ed782614801565b613ee19082614667565b90505b60e085015160c0860151613ef9918390612a7d565b9050808560c001511015613f14575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613f4c57855160400151613f45908590614667565b9050613f87565b6000613f5785614801565b875160400151909150811015613f77578651604001518190039150613f85565b60008093509350505061009c565b505b855180516020909101516000918291613fa09190612b59565b9150915080613fb8576000809450945050505061009c565b875160e0810151604090910151600091613fed91613fe191613fda9190612ac6565b8a90611383565b6101008b0151906124aa565b895160e08101516080909101516140189161400c91611d4b9088611383565b8b5160600151906124aa565b6140229190614667565b9050600061405a61404e6140478c6000015160e0015188612ac690919063ffffffff16565b8b90611c2e565b6101008c015190611c43565b9050808210156140755760008096509650505050505061009c565b808203915060006140b7858c60000151604001518d6000015160e00151670de0b6b3a76400006140a591906146c4565b8e51606081015160809091015161443a565b905060006140e18c6000015160e00151670de0b6b3a76400006140da91906146c4565b8890612ac6565b9050808210156140fe57600080985098505050505050505061009c565b8b5160808101516060909101519183039161411a918391612a7d565b9050670de0b6b3a7640000811061415e578b5160e001516141579061381f9061414b90670de0b6b3a76400006146c4565b8e5160e00151906124aa565b905061418d565b8b5160e0015161418a9061381f9061417e90670de0b6b3a76400006146c4565b8e5160e0015190611c43565b90505b8b51606001516141a09085908390612a7d565b935083670de0b6b3a764000011156141c45783670de0b6b3a76400000393506141d8565b60006001985098505050505050505061009c565b60008c60e001511261423b5760c08c015160e08d01516141f7916124aa565b9250670de0b6b3a764000083111561421c57600080985098505050505050505061009c565b670de0b6b3a764000092909203916142348484611383565b9350614270565b61426d6142548d60c001518e60e0015161174290614801565b61426690670de0b6b3a7640000614667565b8590611383565b93505b50919a60019a5098505050505050505050565b6000808212614292578161109b565b61109b82614801565b60008060006142a9846129f0565b915091508061250857604051635516328b60e11b815260040160405180910390fd5b60008060006142dd898988888861443a565b90506142ed86611d4b898b614667565b975087811015614304576000809250925050613872565b878103614312818688612a7d565b9050670de0b6b3a7640000811061433f5761433861381f670de0b6b3a7640000896124aa565b9050614357565b61435461381f670de0b6b3a764000089611c43565b90505b61436181866124aa565b9050808a101561437957600080935093505050613872565b90980398600198509650505050505050565b600080600061439d8888888888614469565b905060006143c1670de0b6b3a76400006143b788886124aa565b6134119190614667565b9050670de0b6b3a764000081106143ee576143e761381f670de0b6b3a764000089611c43565b9050614406565b61440361381f670de0b6b3a7640000896124aa565b90505b6144108186611c43565b90508881101561442857600080935093505050610a7f565b97909703976001975095505050505050565b60006144468585612ac6565b61445f61445786611d4b868b611c2e565b859085612a7d565b6120339190614667565b60006144758585612ac6565b61445f61448686611d4b868b611383565b859085611c10565b6040518061012001604052806144a26144e0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156125ab57600080fd5b60008060006060848603121561456857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561458d57600080fd5b61459986828701614541565b9150509250925092565b600080600080608085870312156145b957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156145e557600080fd5b6145f187828801614541565b91505092959194509250565b60006020828403121561460f57600080fd5b81356001600160a01b038116811461093f57600080fd5b801515811461046057600080fd5b60006020828403121561464657600080fd5b813561093f81614626565b634e487b7160e01b600052601160045260246000fd5b8082018082111561109b5761109b614651565b818103600083128015838313168383128216171561250857612508614651565b634e487b7160e01b600052601260045260246000fd5b6000826146bf576146bf61469a565b500690565b8181038181111561109b5761109b614651565b6001600160701b0381811683821601908082111561250857612508614651565b6001600160801b0381811683821601908082111561250857612508614651565b6001600160801b0382811682821603908082111561250857612508614651565b808202811582820484141761109b5761109b614651565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561109b5761109b614651565b600081600f0b60016001607f1b0319810361479857614798614651565b60000392915050565b6000808335601e198436030181126147b857600080fd5b83018035915067ffffffffffffffff8211156147d357600080fd5b6020019150368190038213156127a257600080fd5b6000602082840312156147fa57600080fd5b5051919050565b6000600160ff1b820161481657614816614651565b5060000390565b60006020828403121561482f57600080fd5b815161093f81614626565b808201828112600083128015821682158216171561485a5761485a614651565b505092915050565b6000826148715761487161469a565b600160ff1b82146000198414161561488b5761488b614651565b50059056fea26469706673582212207f8bffe0c2f90a329a0098e3618580389c3cb193afe2ec7e7c4e86f1a297903a64736f6c63430008140033',
    methodIdentifiers: {
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9"
    }
};
