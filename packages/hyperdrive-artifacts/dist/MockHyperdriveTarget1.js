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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004ce438038062004ce48339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516148986200044c6000396000505060005050600081816101a7015261292c015260008181611189015281816117bb0152818161181e015281816125120152818161254e015281816127b70152612906015260008181610c4801528181610c9501528181610e5e01526128e00152600061157e0152600081816116a401528181611e220152611e9b0152600081816106a101528181610ded015281816116780152611e6f015260008181610ce70152611de8015260008181610c2601528181610cb601528181610e7f01526129520152600081816105dc01528181610d7301528181611c8501526133bf0152600081816104820152818161050f0152610574015260005050600081816113b3015281816113fc0152818161208d015281816120d6015281816121b10152818161225d0152818161234901526123f501526148986000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063074a6de91461003b57806329b23fc114610068575b600080fd5b61004e610049366004614525565b610089565b604080519283526020830191909152015b60405180910390f35b61007b610076366004614575565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610192565b90505b949350505050565b6000806100c8610400565b6100d18361042a565b60006100db610463565b90506100f06100e861047b565b8260046104b1565b506100fe3387838888610946565b909350915061011060208501856145cf565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8461014787868a610a89565b61015288878b610ab8565b61016260408b0160208c01614606565b604080519485526020850193909352918301521515606082015260800160405180910390a35061009c6001600055565b600061019c610400565b6101a58261042a565b7f00000000000000000000000000000000000000000000000000000000000000008410156101e65760405163211ddda360e11b815260040160405180910390fd5b60006101f0610463565b90508542101561020b576102056100e861047b565b50610219565b610217868260046104b1565b505b61022e610227600288610ae0565b3387610b15565b60008060008060006102418a878d610bee565b945094509450945094508a4210156102e85780600b60008282546102659190614639565b9091555061027890508a8685858f610ed8565b60006102838c611057565b90506102a16102918c6110a1565b61029b908361464c565b826110cf565b6102aa87611182565b6102b6576102b66111e2565b60006102c1886111fb565b9050806102e157604051638bdf918d60e01b815260040160405180910390fd5b50506102ff565b6102f28487611208565b93506102fd866111fb565b505b600061030c85888b6112e9565b90508981101561032f5760405163c972651760e01b815260040160405180910390fd5b8a8c85848a8d610340600286610ae0565b61034d60208301836145cf565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730886103848c8888610a89565b61038f8d8989610ab8565b61039f6040890160208a01614606565b6103b38a6103ad8d8f614639565b90611383565b6040805195865260208601949094529284019190915215156060830152608082015260a081018b905260c00160405180910390a450949b5050505050505050505050506100b56001600055565b60026000540361042357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061043960208301836145cf565b6001600160a01b0316036104605760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610476670de0b6b3a7640000611398565b905090565b60006104a77f000000000000000000000000000000000000000000000000000000000000000042614682565b6104769042614696565b600083815260076020526040812080546001600160801b03161515806104d657504285115b156104ec57546001600160801b0316905061093f565b6000806104f761047b565b9050808703610508578591506105a2565b60006105347f000000000000000000000000000000000000000000000000000000000000000089614639565b90505b6000818152600760205260409020546001600160801b03169250818114801561055e575082155b15610567578692505b826000036105a0576105997f000000000000000000000000000000000000000000000000000000000000000082614639565b9050610537565b505b6105ab82611493565b83546001600160801b0319166001600160801b03919091161783556105cf866114bd565b50600090506007816106017f00000000000000000000000000000000000000000000000000000000000000008b614696565b815260208101919091526040016000908120546001600160801b0316915061062a60028a610ae0565b6000818152600e60205260408120549192508a8a8315610770576001925060008061065986898c866000611661565b9150915080600b600082825461066f9190614639565b9091555061068b905086600084610685816110a1565b88610ed8565b6106958183614639565b91506106c586838a8d877f0000000000000000000000000000000000000000000000000000000000000000611730565b91506106d96106d48385611383565b61177a565b600580546002906106fa9084906201000090046001600160701b03166146a9565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061072782611493565b60058054601090610749908490600160801b90046001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061077d600184610ae0565b6000818152600e6020526040902054909150801561088c57600194506000806107aa838b8e886001611661565b9150915080600b60008282546107c09190614639565b909155506107dc9050836000846107d6816110a1565b8a6117a4565b6107e68183614696565b91506107f56106d48387611383565b600580546002906108169084906201000090046001600160701b03166146a9565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061084382611493565b60058054601090610865908490600160801b90046001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156108c4576108b861089e876110a1565b6108a7836110a1565b6108b1919061464c565b60006110cf565b6108c28e8e611995565b505b60006108cf8f611b20565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610928959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b600080610952856111fb565b505060065485906001600160801b03168082111561097757806001600160801b031691505b8160000361098c576000809250925050610a7f565b61099b600360f81b8984610b15565b6006546000906109c19084906001600160801b03600160801b9091048116908516611c10565b90506109cc83611493565b6109d690836146e9565b600680546001600160801b0319166001600160801b03929092169190911790556109ff81611493565b60068054601090610a21908490600160801b90046001600160801b03166146e9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610a508188876112e9565b9350610a5c8684611c2e565b841015610a7c5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b6000610a9b6040830160208401614606565b15610aa757508261093f565b610ab18484611383565b905061093f565b6000610aca6040830160208401614606565b15610ad957610ab18484611c43565b508261093f565b60006001600160f81b03821115610b0a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610b5857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610b9b908490614696565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610c0288611c58565b9050610c6c610c0f611ca9565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611cca565b909850955091506000610cda610c80611ca9565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d3a565b9050610d108389610d0b847f0000000000000000000000000000000000000000000000000000000000000000611d51565b611d81565b15610d1d57610d1d6111e2565b8a8a60008080610d2f85888887611dc3565b9b5091945092509050610d428184614696565b610d4c9089614639565b9750610d588284614639565b610d62908c614639565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610d9d9190614696565b815260208101919091526040016000908120546001600160801b03169150428911610ddf576000898152600760205260409020546001600160801b0316610de1565b895b9050610e118b8784848e7f0000000000000000000000000000000000000000000000000000000000000000611730565b9650610e1d8487614696565b9550670de0b6b3a7640000610ea384610e34611ca9565b610e3e9190614639565b600154610e5c908c90600160801b90046001600160801b0316614696565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d3a565b1115610eb157610eb16111e2565b610ec18787858786866000611ed7565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610f26610f2182610f04670de0b6b3a764000086614709565b600454600160801b90046001600160801b031691908a6000611f76565b611493565b600480546001600160801b03928316600160801b029216919091179055610f4c86611493565b610f5690826146e9565b600380546001600160801b03928316600160801b029216919091179055610f7c84611493565b60018054600090610f979084906001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc483612020565b60038054600090610fd9908490600f0b614720565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061100985611493565b6001805460109061102b908490600160801b90046001600160801b03166146e9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061107f600e600061106b600286610ae0565b8152602001908152602001600020546110a1565b611091600e600061106b600187610ae0565b61109b919061464c565b92915050565b60006001600160ff1b038211156110cb5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006110f86110de848361205c565b6110e984600061205c565b6110f3919061464c565b612020565b9050600081600f0b131561114d57600280548291906000906111249084906001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561117d576111628161474d565b600280546000906111249084906001600160801b03166146e9565b505050565b60006111ae7f000000000000000000000000000000000000000000000000000000000000000083611c2e565b6002546111c491906001600160801b0316614639565b6001546111da906001600160801b031684611383565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061109b826004611995565b6000806000611216846114bd565b909250905060006112278686611383565b90508183111561123f5761123c868385611c10565b95505b82811015611251578083039250611256565b600092505b61125f8361177a565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156112b2578690036112b6565b5060005b6112bf81611493565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806112f68585611383565b905061130181612072565b94508460000361131557600091505061093f565b6113256040840160208501614606565b156113545761134d8561133b60208601866145cf565b6113486040870187614773565b61215b565b915061137b565b6113778561136560208601866145cf565b6113726040870187614773565b6122f5565b8491505b509392505050565b600061093f8383670de0b6b3a7640000611c10565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016113e7575047611472565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561144b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146f91906147ba565b90505b60125460000361148357600061093f565b60125461093f9084908390611c10565b60006001600160801b038211156110cb57604051630f0af95160e11b815260040160405180910390fd5b60055460009081906114e0908490600160801b90046001600160801b0316611383565b6005546201000090046001600160701b0316925090508181111561165c57600061150a8383614696565b9050611519610f21828661248b565b6005805460109061153b908490600160801b90046001600160801b03166146e9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115748583611c4390919063ffffffff16565b905060006115a2827f0000000000000000000000000000000000000000000000000000000000000000611383565b905080600b60008282546115b69190614639565b909155506115c690508183614696565b91506115d182611493565b600180546000906115ec9084906001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611619826124a0565b6003805460009061162e908490600f0b614720565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061166e8785611c43565b9150600061169c837f0000000000000000000000000000000000000000000000000000000000000000611383565b90506116c8817f0000000000000000000000000000000000000000000000000000000000000000611383565b915083156116eb576116da8282614696565b6116e49084614696565b9250611702565b6116f58282614696565b6116ff9084614639565b92505b8686101561172557611715838789611c10565b9250611722828789611c10565b91505b509550959350505050565b600080611748846117428a888a611c10565b90611c43565b9050611755888486611c10565b61175f9082614639565b90508681111561176f5786810391505b509695505050505050565b60006001600160701b038211156110cb5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806117e657507f00000000000000000000000000000000000000000000000000000000000000006117e48583614696565b105b156117f3576117f36111e2565b6003549084900390600f0b611808848261464c565b905083611814866110a1565b13801561184957507f000000000000000000000000000000000000000000000000000000000000000061184783836124ca565b105b15611856576118566111e2565b600254600160801b90046001600160801b0316611898610f2182611882670de0b6b3a764000088614709565b6004546001600160801b031691908c6000611f76565b600480546001600160801b0319166001600160801b03929092169190911790556118c28882614696565b90506118cd81611493565b600280546001600160801b03928316600160801b0292169190911790556118f383611493565b600180546001600160801b0319166001600160801b039290921691909117905561191c82612020565b600380546001600160801b0319166001600160801b039290921691909117905561194587611493565b60018054601090611967908490600160801b90046001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916119e0916001600160801b031690614696565b9050806000036119f457600191505061109b565b60006119ff856124f0565b905080600003611a145760019250505061109b565b600080611a22838589612592565b9150915080611a3857600094505050505061109b565b600080611a458489612698565b91509150611a63611a55826110a1565b611a5e906147d3565b61278a565b925082611a79576000965050505050505061109b565b611a8282611493565b60068054600090611a9d9084906001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611aca81611493565b60068054601090611aec908490600160801b90046001600160801b03166146c9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611b37611b3286612897565b6129d1565b9150915080611b4d575060009485945092505050565b6000808611611b5d576000611b67565b611b678387611383565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611bd29190614639565b611bdc9190614696565b905080600003611bf55750600096879650945050505050565b6000611c018383611c43565b98600198509650505050505050565b6000826000190484118302158202611c2757600080fd5b5091020490565b600061093f8383670de0b6b3a7640000612a5e565b600061093f83670de0b6b3a764000084611c10565b600080611c6361047b565b9050808311611c73576000611c7d565b611c7d8184614696565b915061093f827f0000000000000000000000000000000000000000000000000000000000000000611c43565b600154600354600091610476916001600160801b0390911690600f0b6124ca565b60008080611ceb611ce388670de0b6b3a7640000614696565b899087612a5e565b90508615611d2d57611cfd8888611c2e565b9150611d1e8a8a84611d178a670de0b6b3a7640000614696565b8989612a84565b9250611d2a8382614639565b90505b9750975097945050505050565b60006100b282611d4b858888611c10565b90612aa7565b6000611d6f611d6884670de0b6b3a7640000614696565b8390611c2e565b61093f90670de0b6b3a7640000614696565b600080611db885611d90611ca9565b611d9a9190614639565b600154610e5c908790600160801b90046001600160801b0316614696565b909210949350505050565b6000808080611e1a8786611e138b611e0d611de68c670de0b6b3a7640000614696565b7f000000000000000000000000000000000000000000000000000000000000000090611c2e565b90611c2e565b9190612a5e565b9350611e46847f0000000000000000000000000000000000000000000000000000000000000000611383565b91506000611e67611e5f89670de0b6b3a7640000614696565b8a9088612a5e565b9050611e93817f0000000000000000000000000000000000000000000000000000000000000000611c2e565b9350611ebf847f0000000000000000000000000000000000000000000000000000000000000000611383565b611ec99084614639565b915050945094509450949050565b60008060008060008088881015611f46578615611efc57611ef98d898b611c10565b9c505b611f078c898b611c10565b9b50611f128b6110a1565b611f1b8d6110a1565b611f25919061464c565b9050611f328b898b611c10565b9a50611f3f8a898b611c10565b9950611f65565b611f4f8b6110a1565b611f588d6110a1565b611f62919061464c565b90505b9b9c9a9b999a975050505050505050565b600082600003611f87575084612017565b8115611fda57611fb8611f9a8487614639565b611fa48587611383565b611fae888a611383565b6117429190614639565b90506000611fc68588612b1c565b905080821015611fd4578091505b50612017565b828503611fe957506000612017565b612014611ff68487614696565b6120008587611c2e565b61200a888a611383565b6117429190614696565b90505b95945050505050565b600060016001607f1b031982128061203e575060016001607f1b0382135b156110cb5760405163a5353be560e01b815260040160405180910390fd5b600081831361206b578161093f565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016120c157504761214c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612125573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061214991906147ba565b90505b60125461093f90849083611c10565b6000601254851161216c5784612170565b6012545b9450600061217d86611398565b905085601260008282546121919190614696565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612237576040516001600160a01b038716908390600081818185875af1925050503d8060008114612227576040519150601f19603f3d011682016040523d82523d6000602084013e61222c565b606091505b5050809150506122cd565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156122a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ca91906147ef565b90505b806122eb576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116123045783612308565b6012545b9350600061231585611398565b905084601260008282546123299190614696565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123cf576040516001600160a01b038616908390600081818185875af1925050503d80600081146123bf576040519150601f19603f3d011682016040523d82523d6000602084013e6123c4565b606091505b505080915050612465565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561243e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061246291906147ef565b90505b80612483576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600061093f83670de0b6b3a764000084612a5e565b600060016001607f1b038211156110cb5760405163a5353be560e01b815260040160405180910390fd5b6000806124d78484612b2b565b9092509050806124e9576124e96111e2565b5092915050565b600254600090819061250b906001600160801b03168461248b565b90506125377f000000000000000000000000000000000000000000000000000000000000000082614639565b6001546001600160801b0316111561258c576001547f0000000000000000000000000000000000000000000000000000000000000000906125829083906001600160801b0316614696565b61093f9190614696565b50919050565b61259a614460565b6000806125a684612897565b905060006125b3826129d1565b93509050826125c857506000915061009c9050565b60006125ef6125ea84610160015185610140015161138390919063ffffffff16565b6110a1565b61260f6125ea856101200151866101000151611c2e90919063ffffffff16565b612619919061464c565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806126b08660c001518760e00151612b2b565b91509150806126c757600080935093505050612783565b60006126d38784612b67565b925090508115806126e2575080155b156126f65760008094509450505050612783565b60006127028883612c76565b90508060000361271c576000809550955050505050612783565b876060015181116127335794509250612783915050565b50606087015160006127478986858b612d47565b90508060000361276257600080965096505050505050612783565b82811061277a57600080965096505050505050612783565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806127dc8787877f00000000000000000000000000000000000000000000000000000000000000008d61325c565b9350935093509350806127f85750600098975050505050505050565b8684146128295761280884611493565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461285a5761283983612020565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146128885761286a82611493565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b61289f6144b2565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916129979116613374565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926129c992900416613374565b905292915050565b60008060008060006129e2866133ea565b91509150806129f957506000958695509350505050565b612a068660a001516110a1565b612a0f8761370a565b83612a1d89600001516110a1565b612a27919061480c565b612a31919061480c565b612a3b919061464c565b925050506000811215612a545750600093849350915050565b9360019350915050565b6000826000190484118302158202612a7557600080fd5b50910281810615159190040190565b600080612a9588888888888861376e565b90925090508061176f5761176f6111e2565b600081600003612ac05750670de0b6b3a764000061109b565b82600003612ad05750600061109b565b6000612adb836110a1565b90506000612af0612aeb866110a1565b61384f565b9050818102612b07670de0b6b3a764000082614834565b9050612b1281613a75565b9695505050505050565b600081831161258c578261093f565b600080600083612b3a866110a1565b612b44919061464c565b90506000811215612b5c576000809250925050612783565b946001945092505050565b60008060008460a0015112612b8457505060808201516001612783565b60008460a00151612b94906147d3565b90506000612bd085876101000151886000015160e00151670de0b6b3a7640000612bbe9190614696565b89516060810151608090910151613c0a565b93509050821580612bdf575080155b15612bf257600080935093505050612783565b6000612bfe838361248b565b9050670de0b6b3a76400008111612c3a5780670de0b6b3a7640000039450612c338760c001518661138390919063ffffffff16565b9450612c49565b60008094509450505050612783565b8660800151851115612c68578660800151600194509450505050612783565b506001925050509250929050565b600080612cac8460c001518560e00151866101000151876000015160a00151612c9e886110a1565b612ca7906147d3565b61325c565b87516040810192909252602082019290925291909152905080612cd357600091505061109b565b6000612ce285600001516129d1565b9250905081612cf65760009250505061109b565b84602001518110612d0c5760009250505061109b565b600085606001518660400151612d229190614639565b9050612d3d82876020015183611c109092919063ffffffff16565b612b129082614696565b60008085606001518660400151612d5e9190614639565b60208701516060880151919250600091612d789184611c10565b90508660a00151600003612d8f5791506100b59050565b60008080896004881015612da257600497505b60005b888110156130fe57612db7868b612b1c565b95506000612de08360c001518460e00151856101000151866000015160a00151612c9e8c6110a1565b86516040810192909252602082019290925291909152905080612e0e576000985050505050505050506100b5565b6000612e1d8e600001516129d1565b9250905081612e3857600099505050505050505050506100b5565b612e4384828b613cb3565b15612e59578799505050505050505050506100b5565b60008460a001511315612fc257835180516020820151604083015160a084015160e090940151600094612ead94939291612e9b90670de0b6b3a7640000614696565b8a516060810151608090910151613d1f565b9350905082612ec95760009a50505050505050505050506100b5565b808560a0015110612fc057612edd85613e24565b909950925082612efa5760009a50505050505050505050506100b5565b612f1f8560c001518660e00151876101000151886000015160a00151612c9e8e6110a1565b88516040810192909252602082019290925291909152925082612f4f5760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612f7f9490612e9b90670de0b6b3a7640000614696565b9350905082612f9b5760009a50505050505050505050506100b5565b8e60a001518111612fb857889a50505050505050505050506100b5565b505050612da5565b505b6000612fd3858f8760a00151613efa565b93509050821580612fec5750670de0b6b3a76400008110155b156130045760009a50505050505050505050506100b5565b80670de0b6b3a764000003905060006130316125ea87604001518860200151611c2e90919063ffffffff16565b61303e6125ea858e611383565b613048919061464c565b9050881580613066575061305b89614255565b61306482614255565b125b15613075578098508997508296505b600081131561309d5761308c8b6117428385611c43565b613096908b614639565b99506130ef565b60008112156130e65760006130b78c6117428581866147d3565b90508a8110156130cb57808b039a506130e0565b60009c505050505050505050505050506100b5565b506130ef565b505050506130fe565b84600101945050505050612da5565b5060006131268260c001518360e00151846101000151856000015160a00151612c9e8b6110a1565b855160408101929092526020820192909252919091529050806131535760009750505050505050506100b5565b6000613162836000015161426d565b905060006131846125ea85604001518660200151611c2e90919063ffffffff16565b6131916125ea848c611383565b61319b919061464c565b90506131a687614255565b6131af82614255565b12156131bc578795508194505b6131e36131d7655af3107a4000670de0b6b3a7640000614696565b6020860151908b612a5e565b60408501516131f3908790611c43565b10806132335750613221613215655af3107a4000670de0b6b3a7640000614639565b6020860151908b611c10565b604085015161323190879061248b565b115b1561324a57600099505050505050505050506100b5565b50939c9b505050505050505050505050565b6000806000808460000361327b57508792508691508590506001613368565b6000856132878b6110a1565b613291919061480c565b905061329c876110a1565b8112156132b757600080600080945094509450945050613368565b809450600089126132d7576132d06125ea868b8d611c10565b93506132fa565b6132ee6125ea6132e68b6147d3565b87908d612a5e565b6132f7906147d3565b93505b6000806133078c8c612b2b565b9150915080613326576000806000809650965096509650505050613368565b60006133328888612b2b565b925090508161335257600080600080975097509750975050505050613368565b61335d8b8285611c10565b955060019450505050505b95509550955095915050565b600080670de0b6b3a764000061338861047b565b6133929190614709565b90508083116133a25760006133ac565b6133ac8184614696565b915061093f6133e3670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614709565b8390611c43565b600080600061340f6125ea85610160015186610140015161138390919063ffffffff16565b61342f6125ea866101200151876101000151611c2e90919063ffffffff16565b613439919061464c565b905060008061345086600001518760200151612b2b565b915091508061346757506000958695509350505050565b60008313156135a857600083905060006134b5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006134a69190614696565b8d606001518e60800151613d1f565b93509050826134ce575060009788975095505050505050565b81811061356c576000613508858a60400151858c60e00151670de0b6b3a76400006134f99190614696565b8d606001518e6080015161429d565b945090508315801561351d57508860c0015183105b156135345750600098600198509650505050505050565b8361354a57506000988998509650505050505050565b613553816110a1565b61355c906147d3565b9960019950975050505050505050565b60008860200151126135945761358b8860a00151856125ea9190614696565b611c01906147d3565b60a0880151885161358b916125ea91614696565b60008312156136fb5760006135bc846147d3565b905060006135f08489604001518a60e00151670de0b6b3a76400006135e19190614696565b8b606001518c60800151613c0a565b9350905082613609575060009788975095505050505050565b81811061368e576000613643858a60400151858c60e00151670de0b6b3a76400006136349190614696565b8d606001518e6080015161376e565b945090508315801561365857508860c0015183105b1561366f5750600098600198509650505050505050565b8361368557506000988998509650505050505050565b61355c816110a1565b60006136c0858a604001518b60e00151670de0b6b3a76400006136b19190614696565b8c606001518d6080015161435d565b94509050836136da57506000988998509650505050505050565b61355c6136f18a6060015184866117429190614696565b6125ea9083614639565b50600095600195509350505050565b600061373d6125ea836101200151670de0b6b3a764000061372b9190614696565b60608501516101008601519190612a5e565b6110916125ea846101600151670de0b6b3a764000061375c9190614696565b60608601516101408701519190611c10565b6000806000613780898988888861440c565b905086881015613797576000809250925050613844565b96869003966137a68887612aa7565b9750878110156137bd576000809250925050613844565b8781036137cb818688612a5e565b9050670de0b6b3a764000081106137ff576137f86137f1670de0b6b3a76400008961248b565b8290612aa7565b9050613817565b6138146137f1670de0b6b3a764000089611c43565b90505b613821818661248b565b90508981101561383957600080935093505050613844565b899003925060019150505b965096945050505050565b60008082136138715760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906138f49084901c6110a1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613a9057506000919050565b680755bf798b4a1bf1e58212613ab9576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b1274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6110a1565b6000806000613c1c888888888861440c565b90506000613c47670de0b6b3a7640000613c368888611c43565b613c409190614639565b839061248b565b9050670de0b6b3a76400008110613c7457613c6d6137f1670de0b6b3a76400008961248b565b9050613c8c565b613c896137f1670de0b6b3a764000089611c43565b90505b80881015613ca257600080935093505050610a7f565b909603976001975095505050505050565b6020830151600090613cc5908461248b565b6040850151613cd5908490611c43565b101580156100b557506020840151613d059084613cfe633b9aca00670de0b6b3a7640000614639565b9190611c10565b6040850151613d1590849061248b565b1115949350505050565b6000806000881215613d4157613d34886147d3565b613d3e9087614639565b95505b600080613d4e8b8b612b2b565b9150915080613d6557600080935093505050613e18565b6000613d74838b8a8a8a61443b565b90506000613d91613d898a611d4b8a8e611c2e565b899089612a5e565b905080821015613dab576000809550955050505050613e18565b808203670de0b6b3a76400008110613dd957613dd26137f1670de0b6b3a76400008c611c43565b9050613df1565b613dee6137f1670de0b6b3a76400008c61248b565b90505b8b811015613e0a57600080965096505050505050613e18565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613e3e57506000928392509050565b6000613e4d846000015161370a565b90506000613e79856040015186606001518760400151613e6d9190614639565b60208801519190612a5e565b905060008212613ea05780821015613e9357819003613eb6565b5060009485945092505050565b613ea9826147d3565b613eb39082614639565b90505b60e085015160c0860151613ecb918390612a5e565b9050808560c001511015613ee6575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613f1e57855160400151613f17908590614639565b9050613f59565b6000613f29856147d3565b875160400151909150811015613f49578651604001518190039150613f57565b60008093509350505061009c565b505b855180516020909101516000918291613f729190612b2b565b9150915080613f8a576000809450945050505061009c565b875160e0810151604090910151600091613fbf91613fb391613fac9190612aa7565b8a90611383565b6101008b01519061248b565b895160e0810151608090910151613fea91613fde91611d4b9088611383565b8b51606001519061248b565b613ff49190614639565b9050600061402c6140206140198c6000015160e0015188612aa790919063ffffffff16565b8b90611c2e565b6101008c015190611c43565b9050808210156140475760008096509650505050505061009c565b80820391506000614089858c60000151604001518d6000015160e00151670de0b6b3a76400006140779190614696565b8e51606081015160809091015161440c565b905060006140b38c6000015160e00151670de0b6b3a76400006140ac9190614696565b8890612aa7565b9050808210156140d057600080985098505050505050505061009c565b8b516080810151606090910151918303916140ec918391612a5e565b9050670de0b6b3a76400008110614130578b5160e00151614129906137f19061411d90670de0b6b3a7640000614696565b8e5160e001519061248b565b905061415f565b8b5160e0015161415c906137f19061415090670de0b6b3a7640000614696565b8e5160e0015190611c43565b90505b8b51606001516141729085908390612a5e565b935083670de0b6b3a764000011156141965783670de0b6b3a76400000393506141aa565b60006001985098505050505050505061009c565b60008c60e001511261420d5760c08c015160e08d01516141c99161248b565b9250670de0b6b3a76400008311156141ee57600080985098505050505050505061009c565b670de0b6b3a764000092909203916142068484611383565b9350614242565b61423f6142268d60c001518e60e00151611742906147d3565b61423890670de0b6b3a7640000614639565b8590611383565b93505b50919a60019a5098505050505050505050565b6000808212614264578161109b565b61109b826147d3565b600080600061427b846129d1565b91509150806124e957604051635516328b60e11b815260040160405180910390fd5b60008060006142af898988888861440c565b90506142bf86611d4b898b614639565b9750878110156142d6576000809250925050613844565b8781036142e4818688612a5e565b9050670de0b6b3a764000081106143115761430a6137f1670de0b6b3a76400008961248b565b9050614329565b6143266137f1670de0b6b3a764000089611c43565b90505b614333818661248b565b9050808a101561434b57600080935093505050613844565b90980398600198509650505050505050565b600080600061436f888888888861443b565b90506000614393670de0b6b3a7640000614389888861248b565b6133e39190614639565b9050670de0b6b3a764000081106143c0576143b96137f1670de0b6b3a764000089611c43565b90506143d8565b6143d56137f1670de0b6b3a76400008961248b565b90505b6143e28186611c43565b9050888110156143fa57600080935093505050610a7f565b97909703976001975095505050505050565b60006144188585612aa7565b61443161442986611d4b868b611c2e565b859085612a5e565b6120149190614639565b60006144478585612aa7565b61443161445886611d4b868b611383565b859085611c10565b6040518061012001604052806144746144b2565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561258c57600080fd5b60008060006060848603121561453a57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561455f57600080fd5b61456b86828701614513565b9150509250925092565b6000806000806080858703121561458b57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156145b757600080fd5b6145c387828801614513565b91505092959194509250565b6000602082840312156145e157600080fd5b81356001600160a01b038116811461093f57600080fd5b801515811461046057600080fd5b60006020828403121561461857600080fd5b813561093f816145f8565b634e487b7160e01b600052601160045260246000fd5b8082018082111561109b5761109b614623565b81810360008312801583831316838312821617156124e9576124e9614623565b634e487b7160e01b600052601260045260246000fd5b6000826146915761469161466c565b500690565b8181038181111561109b5761109b614623565b6001600160701b038181168382160190808211156124e9576124e9614623565b6001600160801b038181168382160190808211156124e9576124e9614623565b6001600160801b038281168282160390808211156124e9576124e9614623565b808202811582820484141761109b5761109b614623565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561109b5761109b614623565b600081600f0b60016001607f1b0319810361476a5761476a614623565b60000392915050565b6000808335601e1984360301811261478a57600080fd5b83018035915067ffffffffffffffff8211156147a557600080fd5b60200191503681900382131561278357600080fd5b6000602082840312156147cc57600080fd5b5051919050565b6000600160ff1b82016147e8576147e8614623565b5060000390565b60006020828403121561480157600080fd5b815161093f816145f8565b808201828112600083128015821682158216171561482c5761482c614623565b505092915050565b6000826148435761484361466c565b600160ff1b82146000198414161561485d5761485d614623565b50059056fea2646970667358221220351af891b646213a913b46b4e90aba026699baf551f2a631da30e3d1b9da268364736f6c63430008140033',
    methodIdentifiers: {
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9"
    }
};
