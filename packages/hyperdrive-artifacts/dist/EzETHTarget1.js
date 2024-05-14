export const EzETHTarget1 = {
    abi: [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "circuitBreakerDelta",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "sweepCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                },
                {
                    "internalType": "contract IRestakeManager",
                    "name": "_restakeManager",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "DistributeExcessIdleFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidTimestamp",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RestrictedZeroAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint112",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsupportedToken",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "basePayment",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "checkpointVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "closeLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "closeShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200409638038062004096833981016040819052620000359162000276565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e05260e0808801516102005261012080890151909252610100808901519091526101408089015190915291870180515190915280518301519091528051604090810151610160908152915160609081015161018090815282890151871661022052908801516102405291870151600a80549187166001600160a01b03199283161790559187015160088054918716918416919091179055928601516009805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018791906200039f565b6001600160a01b03166102805250620003c6915050565b6040516101e081016001600160401b0381118282101715620001d057634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ec57600080fd5b50565b8051620001fc81620001d6565b919050565b6000608082840312156200021457600080fd5b604051608081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102608112156200028c57600080fd5b610240808212156200029d57600080fd5b620002a76200019e565b9150620002b485620001ef565b8252620002c460208601620001ef565b6020830152620002d760408601620001ef565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000342818701620001ef565b9083015261018062000356868201620001ef565b908301526101a06200036a868201620001ef565b908301526101c06200037f8787830162000201565b818401525081935062000394818601620001ef565b925050509250929050565b600060208284031215620003b257600080fd5b8151620003bf81620001d6565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613b2662000570600039600081816119ec01526126630152600081816118b9015261253001526000505060005050600050506000818160af0152818161032b0152612cd401526000818161132f015281816116da0152818161173d015281816128b4015281816128f001528181612aed0152612cae01526000818161068101528181610d0701528181610ec6015281816115990152612c8801526000611b98015260008181611cbe015281816122a8015261232101526000818161090401528181610e5501528181611c9201526122f5015260008181610d4a015261226e0152600081816106a201528181610ce501528181610ee7015281816115770152612cfa01526000818161083c01528181610dd5015281816116360152818161214301526132180152600081816105d8015281816106d40152818161075b015281816107bc01526107f4015260008181611945015281816125bc01526126db015260005050613b266000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046134c6565b610073565b60405190815260200160405180910390f35b61004e61006e3660046134c6565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610316565b60006100a4610556565b6100ad82610580565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b9565b90508542101561011b5761011561010d6105d1565b826004610607565b50610129565b61012786826004610607565b505b61013e610137600288610b9e565b3387610bd3565b6000806000806000806101528b888e610cac565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d919061353b565b90915550610195905061018e6105d1565b4284610f45565b6101a28c88878785611083565b60006101ad8e6111fd565b90506101cb6101bb8e611247565b6101c5908361354e565b82611275565b6101d489611328565b6101e0576101e0611388565b60006101eb8a6113a1565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113ae565b9550610227886113a1565b505b6000610236878a8d61148f565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610b9e565b610276602083018361356e565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a8a876102b46040890160208a016135a5565b6102c88a6102c28d8f61353b565b90611529565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b6000610320610556565b61032982610580565b7f000000000000000000000000000000000000000000000000000000000000000084101561036a5760405163211ddda360e11b815260040160405180910390fd5b60006103746105b9565b90508542101561038f5761038961010d6105d1565b5061039d565b61039b86826004610607565b505b6103ab610137600188610b9e565b6000806000806000806103bf8b888e61153e565b95509550955095509550955060008c90508c4210156104725782600b60008282546103ea919061353b565b909155506103fb905061018e6105d1565b6104088c888787856116c3565b6000610413826111fd565b905061042b6104218e611247565b6101c590836135c2565b61043489611328565b61044057610440611388565b600061044b8a6113a1565b90508061046b57604051638bdf918d60e01b815260040160405180910390fd5b5050610489565b61047c86896113ae565b9550610487886113a1565b505b6000610496878a8d61148f565b90508b8110156104b95760405163c972651760e01b815260040160405180910390fd5b8c898c6104c7600186610b9e565b6104d4602083018361356e565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028888876105126040890160208a016135a5565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058f602083018361356e565b6001600160a01b0316036105b65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105cc670de0b6b3a76400006118b4565b905090565b60006105fd7f000000000000000000000000000000000000000000000000000000000000000042613600565b6105cc9042613614565b600083815260076020526040812060018101546001600160801b031615158061062f57504285115b1561064857600101546001600160801b03169050610b97565b60008060006106556105d1565b90508088036106cd578692506106c661066c611a60565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b9150610789565b60006106f97f00000000000000000000000000000000000000000000000000000000000000008a61353b565b90505b8181036107145787935061071161066c611a60565b92505b6000818152600760205260409020600101546001600160801b031693508315610756576000818152600760205260409020546001600160801b03169250610787565b6107807f00000000000000000000000000000000000000000000000000000000000000008261353b565b90506106fc565b505b61079283611a98565b6001850180546001600160801b0319166001600160801b03929092169190911790556107e86107e17f00000000000000000000000000000000000000000000000000000000000000008a613614565b8984610f45565b610826886108206108197f00000000000000000000000000000000000000000000000000000000000000008361353b565b4290611ac2565b84610f45565b61082f87611ad7565b50600090506007816108617f00000000000000000000000000000000000000000000000000000000000000008c613614565b815260208101919091526040016000908120600101546001600160801b0316915061088d60028b610b9e565b6000818152600e60205260408120549192508b8b83156109d357600192506000806108bc86898d866000611c7b565b9150915080600b60008282546108d2919061353b565b909155506108ee9050866000846108e881611247565b88611083565b6108f8818361353b565b915061092886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d4a565b915061093c6109378385611529565b611d94565b6005805460029061095d9084906201000090046001600160701b0316613627565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061098a82611a98565b600580546010906109ac908490600160801b90046001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109e0600184610b9e565b6000818152600e60205260409020549091508015610aef5760019450600080610a0d838b8f886001611c7b565b9150915080600b6000828254610a23919061353b565b90915550610a3f905083600084610a3981611247565b8a6116c3565b610a498183613614565b9150610a586109378387611529565b60058054600290610a799084906201000090046001600160701b0316613627565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610aa682611a98565b60058054601090610ac8908490600160801b90046001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b2757610b1b610b0187611247565b610b0a83611247565b610b14919061354e565b6000611275565b610b25838f611dbe565b505b6000610b3284611fb8565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bc85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c1657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c59908490613614565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610cc189612116565b9050610d2b610cce611a60565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612167565b90995096509150610d3d61066c611a60565b9250610d738289610d6e867f00000000000000000000000000000000000000000000000000000000000000006121d7565b612207565b15610d8057610d80611388565b8a8a60008080610d9285878a87612249565b9b5091945092509050610da58184613614565b610daf908861353b565b9650610dbb828461353b565b610dc5908c61353b565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610dff9190613614565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e475760008a8152600760205260409020600101546001600160801b0316610e49565b8a5b9050610e798c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611d4a565b9750610e858588613614565b9650670de0b6b3a7640000610f0b84610e9c611a60565b610ea6919061353b565b600154610ec4908d90600160801b90046001600160801b0316613614565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b1115610f1957610f19611388565b610f29888885888686600061235d565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f715750505050565b6000848152600760205260408120546001600160801b031690819003610fcb57610f9a83611a98565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611049565b61101c611017670de0b6b3a7640000610fe48886613614565b610fee9190613667565b85670de0b6b3a7640000611002878a613614565b61100c9190613667565b8592919060016123fc565b611a98565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61105284611a98565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110cc611017826110af670de0b6b3a764000086613667565b600454600160801b90046001600160801b031691908a60006123fc565b600480546001600160801b03928316600160801b0292169190911790556110f286611a98565b6110fc908261367e565b600380546001600160801b03928316600160801b02921691909117905561112284611a98565b6001805460009061113d9084906001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116a836124a6565b6003805460009061117f908490600f0b61369e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111af85611a98565b600180546010906111d1908490600160801b90046001600160801b031661367e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611225600e6000611211600286610b9e565b815260200190815260200160002054611247565b611237600e6000611211600187610b9e565b611241919061354e565b92915050565b60006001600160ff1b038211156112715760405163396ea70160e11b815260040160405180910390fd5b5090565b600061129e61128484836124e2565b61128f8460006124e2565b611299919061354e565b6124a6565b9050600081600f0b13156112f357600280548291906000906112ca9084906001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561132357611308816136cb565b600280546000906112ca9084906001600160801b031661367e565b505050565b60006113547f0000000000000000000000000000000000000000000000000000000000000000836124f8565b60025461136a91906001600160801b031661353b565b600154611380906001600160801b031684611529565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611241826004611dbe565b60008060006113bc84611ad7565b909250905060006113cd8686611529565b9050818311156113e5576113e286838561250d565b95505b828110156113f75780830392506113fc565b600092505b61140583611d94565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114585786900361145c565b5060005b61146581611a98565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061149c8585611529565b90506114a78161252b565b9450846000036114bb576000915050610b97565b6114cb60408401602085016135a5565b156114fa576114f3856114e1602086018661356e565b6114ee60408701876136f1565b61269a565b9150611521565b61151d8561150b602086018661356e565b61151860408701876136f1565b6126b5565b8491505b509392505050565b6000610b978383670de0b6b3a764000061250d565b60008060008060008060008061155389612116565b90506115bd611560611a60565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f000000000000000000000000000000000000000000000000000000000000000061274f565b90995097509150600080806115d361066c611a60565b95508c6115e28f868984612249565b9a5091955090935091506115f68385613614565b6116009087613614565b955061160c828561353b565b611616908c613614565b9a50611622888c61353b565b995050505050506116ad86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116609190613614565b81526020810191909152604001600020600101546001600160801b0316428e116116a45760008e8152600760205260409020600101546001600160801b03166116a6565b8e5b600161235d565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061170557507f00000000000000000000000000000000000000000000000000000000000000006117038583613614565b105b1561171257611712611388565b6003549084900390600f0b611727848261354e565b90508361173386611247565b13801561176857507f000000000000000000000000000000000000000000000000000000000000000061176683836127a3565b105b1561177557611775611388565b600254600160801b90046001600160801b03166117b7611017826117a1670de0b6b3a764000088613667565b6004546001600160801b031691908c60006123fc565b600480546001600160801b0319166001600160801b03929092169190911790556117e18882613614565b90506117ec81611a98565b600280546001600160801b03928316600160801b02921691909117905561181283611a98565b600180546001600160801b0319166001600160801b039290921691909117905561183b826124a6565b600380546001600160801b0319166001600160801b039290921691909117905561186487611a98565b60018054601090611886908490600160801b90046001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611915573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261193d9190810190613803565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c591906138e3565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa158015611a3c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061008491906138e3565b6001546003546000916105cc916001600160801b0390911690600f0b6127a3565b600061008182611a9285888861250d565b906127c9565b60006001600160801b0382111561127157604051630f0af95160e11b815260040160405180910390fd5b6000818311611ad15782610b97565b50919050565b6005546000908190611afa908490600160801b90046001600160801b0316611529565b6005546201000090046001600160701b03169250905081811115611c76576000611b248383613614565b9050611b33611017828661283e565b60058054601090611b55908490600160801b90046001600160801b031661367e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b8e858361285390919063ffffffff16565b90506000611bbc827f0000000000000000000000000000000000000000000000000000000000000000611529565b905080600b6000828254611bd0919061353b565b90915550611be090508183613614565b9150611beb82611a98565b60018054600090611c069084906001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3382612868565b60038054600090611c48908490600f0b61369e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c888785612853565b91506000611cb6837f0000000000000000000000000000000000000000000000000000000000000000611529565b9050611ce2817f0000000000000000000000000000000000000000000000000000000000000000611529565b91508315611d0557611cf48282613614565b611cfe9084613614565b9250611d1c565b611d0f8282613614565b611d19908461353b565b92505b86861015611d3f57611d2f83878961250d565b9250611d3c82878961250d565b91505b509550959350505050565b600080611d6284611d5c8a888a61250d565b90612853565b9050611d6f88848661250d565b611d79908261353b565b905086811115611d895786810391505b509695505050505050565b60006001600160701b038211156112715760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611e09916001600160801b031690613614565b905080600003611e1d576001915050611241565b6000611e2885612892565b905080600003611e3d57600192505050611241565b600080611e4b83858961292e565b9150915080611e61576000945050505050611241565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e9d92919061397a565b6040805180830381865af4158015611eb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611edd91906139f0565b91509150611efb611eed82611247565b611ef690613a14565b612aa9565b925082611f115760009650505050505050611241565b611f1a82611a98565b60068054600090611f359084906001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f6281611a98565b60068054601090611f84908490600160801b90046001600160801b0316613647565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fe187612c3f565b6040518263ffffffff1660e01b8152600401611ffd9190613a30565b6040805180830381865af4158015612019573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203d9190613a3f565b9150915080612053575060009485945092505050565b600080861161206357600061206d565b61206d8387611529565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120d8919061353b565b6120e29190613614565b9050806000036120fb5750600096879650945050505050565b60006121078383612853565b98600198509650505050505050565b6000806121216105d1565b905080831161213157600061213b565b61213b8184613614565b9150610b97827f0000000000000000000000000000000000000000000000000000000000000000612853565b6000808061218861218088670de0b6b3a7640000613614565b899087612d79565b905086156121ca5761219a88886124f8565b91506121bb8a8a846121b48a670de0b6b3a7640000613614565b8989612d9f565b92506121c7838261353b565b90505b9750975097945050505050565b60006121f56121ee84670de0b6b3a7640000613614565b83906124f8565b610b9790670de0b6b3a7640000613614565b60008061223e85612216611a60565b612220919061353b565b600154610ec4908790600160801b90046001600160801b0316613614565b909210949350505050565b60008080806122a087866122998b61229361226c8c670de0b6b3a7640000613614565b7f0000000000000000000000000000000000000000000000000000000000000000906124f8565b906124f8565b9190612d79565b93506122cc847f0000000000000000000000000000000000000000000000000000000000000000611529565b915060006122ed6122e589670de0b6b3a7640000613614565b8a9088612d79565b9050612319817f00000000000000000000000000000000000000000000000000000000000000006124f8565b9350612345847f0000000000000000000000000000000000000000000000000000000000000000611529565b61234f908461353b565b915050945094509450949050565b600080600080600080888810156123cc5786156123825761237f8d898b61250d565b9c505b61238d8c898b61250d565b9b506123988b611247565b6123a18d611247565b6123ab919061354e565b90506123b88b898b61250d565b9a506123c58a898b61250d565b99506123eb565b6123d58b611247565b6123de8d611247565b6123e8919061354e565b90505b9b9c9a9b999a975050505050505050565b60008260000361240d57508461249d565b81156124605761243e612420848761353b565b61242a8587611529565b612434888a611529565b611d5c919061353b565b9050600061244c8588611ac2565b90508082101561245a578091505b5061249d565b82850361246f5750600061249d565b61249a61247c8487613614565b61248685876124f8565b612490888a611529565b611d5c9190613614565b90505b95945050505050565b600060016001607f1b03198212806124c4575060016001607f1b0382135b156112715760405163a5353be560e01b815260040160405180910390fd5b60008183136124f15781610b97565b5090919050565b6000610b978383670de0b6b3a7640000612d79565b600082600019048411830215820261252457600080fd5b5091020490565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561258c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526125b49190810190613803565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612618573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061263c91906138e3565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a90606401611a1f565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612724573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127489190613a6f565b5050505050565b6000808061277061276888670de0b6b3a7640000613614565b89908761250d565b905086156121ca576127828888611529565b91506121bb8a8a8461279c8a670de0b6b3a7640000613614565b8989612dc2565b6000806127b08484612dd3565b9092509050806127c2576127c2611388565b5092915050565b6000816000036127e25750670de0b6b3a7640000611241565b826000036127f257506000611241565b60006127fd83611247565b9050600061281261280d86611247565b612e12565b9050818102612829670de0b6b3a764000082613a8c565b905061283481613038565b9695505050505050565b6000610b9783670de0b6b3a764000084612d79565b6000610b9783670de0b6b3a76400008461250d565b600060016001607f1b038211156112715760405163a5353be560e01b815260040160405180910390fd5b60025460009081906128ad906001600160801b03168461283e565b90506128d97f00000000000000000000000000000000000000000000000000000000000000008261353b565b6001546001600160801b03161115611ad1576001547f0000000000000000000000000000000000000000000000000000000000000000906129249083906001600160801b0316613614565b610b979190613614565b612936613413565b60008061294284612c3f565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161297d9190613a30565b6040805180830381865af4158015612999573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129bd9190613a3f565b93509050826129d2575060009150612aa19050565b60006129f96129f484610160015185610140015161152990919063ffffffff16565b611247565b612a196129f48561012001518661010001516124f890919063ffffffff16565b612a23919061354e565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b849190613aba565b935093509350935080612ba05750600098975050505050505050565b868414612bd157612bb084611a98565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612c0257612be1836124a6565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612c3057612c1282611a98565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c47613465565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612d3f91166131cd565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612d71929004166131cd565b905292915050565b6000826000190484118302158202612d9057600080fd5b50910281810615159190040190565b600080612db0888888888888613243565b909250905080611d8957611d89611388565b600080612db0888888888888613324565b600080600083612de286611247565b612dec919061354e565b90506000811215612e04576000809250925050612e0b565b9150600190505b9250929050565b6000808213612e345760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612eb79084901c611247565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361305357506000919050565b680755bf798b4a1bf1e5821261307c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061283474029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611247565b600080670de0b6b3a76400006131e16105d1565b6131eb9190613667565b90508083116131fb576000613205565b6132058184613614565b9150610b9761323c670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613667565b8390612853565b600080600061325589898888886133e4565b90508688101561326c576000809250925050613319565b968690039661327b88876127c9565b975087811015613292576000809250925050613319565b8781036132a0818688612d79565b9050670de0b6b3a764000081106132d4576132cd6132c6670de0b6b3a76400008961283e565b82906127c9565b90506132ec565b6132e96132c6670de0b6b3a764000089612853565b90505b6132f6818661283e565b90508981101561330e57600080935093505050613319565b899003925060019150505b965096945050505050565b600080600061333689898888886133e4565b905061334686611a92898b61353b565b97508781101561335d576000809250925050613319565b87810361336b818688612d79565b9050670de0b6b3a76400008110613398576133916132c6670de0b6b3a76400008961283e565b90506133b0565b6133ad6132c6670de0b6b3a764000089612853565b90505b6133ba818661283e565b9050808a10156133d257600080935093505050613319565b90980398600198509650505050505050565b60006133f085856127c9565b61340961340186611a92868b6124f8565b859085612d79565b61249a919061353b565b604051806101200160405280613427613465565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156134dc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561350857600080fd5b85016060818803121561351a57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561124157611241613525565b81810360008312801583831316838312821617156127c2576127c2613525565b60006020828403121561358057600080fd5b81356001600160a01b0381168114610b9757600080fd5b80151581146105b657600080fd5b6000602082840312156135b757600080fd5b8135610b9781613597565b80820182811260008312801582168215821617156135e2576135e2613525565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261360f5761360f6135ea565b500690565b8181038181111561124157611241613525565b6001600160701b038181168382160190808211156127c2576127c2613525565b6001600160801b038181168382160190808211156127c2576127c2613525565b808202811582820484141761124157611241613525565b6001600160801b038281168282160390808211156127c2576127c2613525565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561124157611241613525565b600081600f0b60016001607f1b031981036136e8576136e8613525565b60000392915050565b6000808335601e1984360301811261370857600080fd5b83018035915067ffffffffffffffff82111561372357600080fd5b602001915036819003821315612e0b57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561377757613777613738565b604052919050565b600067ffffffffffffffff82111561379957613799613738565b5060051b60200190565b600082601f8301126137b457600080fd5b815160206137c96137c48361377f565b61374e565b82815260059290921b840181019181810190868411156137e857600080fd5b8286015b84811015611d8957805183529183019183016137ec565b60008060006060848603121561381857600080fd5b835167ffffffffffffffff8082111561383057600080fd5b818601915086601f83011261384457600080fd5b815160206138546137c48361377f565b82815260059290921b8401810191818101908a84111561387357600080fd5b8286015b848110156138ab5780518681111561388f5760008081fd5b61389d8d86838b01016137a3565b845250918301918301613877565b50918901519197509093505050808211156138c557600080fd5b506138d2868287016137a3565b925050604084015190509250925092565b6000602082840312156138f557600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061398e8285516138fc565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a0357600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a2957613a29613525565b5060000390565b610180810161124182846138fc565b60008060408385031215613a5257600080fd5b825191506020830151613a6481613597565b809150509250929050565b600060208284031215613a8157600080fd5b8151610b9781613597565b600082613a9b57613a9b6135ea565b600160ff1b821460001984141615613ab557613ab5613525565b500590565b60008060008060808587031215613ad057600080fd5b845193506020850151925060408501519150606085015161351a8161359756fea264697066735822122020e0d8180da475de97fe135db9219353690f4795c4652a634b210777deba622e64736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
