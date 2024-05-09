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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
                    "name": "fees",
                    "type": "uint256"
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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
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
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200411538038062004115833981016040819052620000359162000276565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e05260e0808801516102005261012080890151909252610100808901519091526101408089015190915291870180515190915280518301519091528051604090810151610160908152915160609081015161018090815282890151871661022052908801516102405291870151600a80549187166001600160a01b03199283161790559187015160088054918716918416919091179055928601516009805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018791906200039f565b6001600160a01b03166102805250620003c6915050565b6040516101e081016001600160401b0381118282101715620001d057634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ec57600080fd5b50565b8051620001fc81620001d6565b919050565b6000608082840312156200021457600080fd5b604051608081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102608112156200028c57600080fd5b610240808212156200029d57600080fd5b620002a76200019e565b9150620002b485620001ef565b8252620002c460208601620001ef565b6020830152620002d760408601620001ef565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000342818701620001ef565b9083015261018062000356868201620001ef565b908301526101a06200036a868201620001ef565b908301526101c06200037f8787830162000201565b818401525081935062000394818601620001ef565b925050509250929050565b600060208284031215620003b257600080fd5b8151620003bf81620001d6565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613ba56200057060003960008181611a6b01526126e201526000818161193801526125af01526000505060005050600050506000818160af0152818161033f0152612d5301526000818161135701528181611759015281816117bc015281816129330152818161296f01528181612b6c0152612d2d0152600081816106a901528181610d2f01528181610eee015281816116180152612d0701526000611c17015260008181611d3d0152818161232701526123a001526000818161092c01528181610e7d01528181611d110152612374015260008181610d7201526122ed0152600081816106ca01528181610d0d01528181610f0f015281816115f60152612d7901526000818161086401528181610dfd015281816116b5015281816121c20152613297015260008181610600015281816106fc01528181610783015281816107e4015261081c0152600081816119c40152818161263b015261275a015260005050613ba56000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613545565b610073565b60405190815260200160405180910390f35b61004e61006e366004613545565b61008c565b60006100818585858561009a565b90505b949350505050565b60006100818585858561032a565b60006100a461057e565b6100ad826105a8565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105e1565b90508542101561011b5761011561010d6105f9565b82600461062f565b50610129565b6101278682600461062f565b505b61013e610137600288610bc6565b3387610bfb565b6000806000806000806101528b888e610cd4565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d91906135ba565b90915550610195905061018e6105f9565b4284610f6d565b6101a28c888787856110ab565b60006101ad8e611225565b90506101cb6101bb8e61126f565b6101c590836135cd565b8261129d565b6101d489611350565b6101e0576101e06113b0565b60006101eb8a6113c9565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113d6565b9550610227886113c9565b505b6000610236878a8d6114b7565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610bc6565b61027660208301836135ed565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a6102ad8b8888611551565b6102b88c8989611580565b6102c86040890160208a01613624565b6102dc8a6102d68d8f6135ba565b906115a8565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b600061033461057e565b61033d826105a8565b7f000000000000000000000000000000000000000000000000000000000000000084101561037e5760405163211ddda360e11b815260040160405180910390fd5b60006103886105e1565b9050854210156103a35761039d61010d6105f9565b506103b1565b6103af8682600461062f565b505b6103bf610137600188610bc6565b6000806000806000806103d38b888e6115bd565b95509550955095509550955060008c90508c4210156104865782600b60008282546103fe91906135ba565b9091555061040f905061018e6105f9565b61041c8c88878785611742565b600061042782611225565b905061043f6104358e61126f565b6101c59083613641565b61044889611350565b610454576104546113b0565b600061045f8a6113c9565b90508061047f57604051638bdf918d60e01b815260040160405180910390fd5b505061049d565b61049086896113d6565b955061049b886113c9565b505b60006104aa878a8d6114b7565b90508b8110156104cd5760405163c972651760e01b815260040160405180910390fd5b8c898c6104db600186610bc6565b6104e860208301836135ed565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028861051f898888611551565b61052a8a8989611580565b61053a6040890160208a01613624565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b6002600054036105a157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105b760208301836135ed565b6001600160a01b0316036105de5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105f4670de0b6b3a7640000611933565b905090565b60006106257f00000000000000000000000000000000000000000000000000000000000000004261367f565b6105f49042613693565b600083815260076020526040812060018101546001600160801b031615158061065757504285115b1561067057600101546001600160801b03169050610bbf565b600080600061067d6105f9565b90508088036106f5578692506106ee610694611adf565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b00565b91506107b1565b60006107217f00000000000000000000000000000000000000000000000000000000000000008a6135ba565b90505b81810361073c57879350610739610694611adf565b92505b6000818152600760205260409020600101546001600160801b03169350831561077e576000818152600760205260409020546001600160801b031692506107af565b6107a87f0000000000000000000000000000000000000000000000000000000000000000826135ba565b9050610724565b505b6107ba83611b17565b6001850180546001600160801b0319166001600160801b03929092169190911790556108106108097f00000000000000000000000000000000000000000000000000000000000000008a613693565b8984610f6d565b61084e886108486108417f0000000000000000000000000000000000000000000000000000000000000000836135ba565b4290611b41565b84610f6d565b61085787611b56565b50600090506007816108897f00000000000000000000000000000000000000000000000000000000000000008c613693565b815260208101919091526040016000908120600101546001600160801b031691506108b560028b610bc6565b6000818152600e60205260408120549192508b8b83156109fb57600192506000806108e486898d866000611cfa565b9150915080600b60008282546108fa91906135ba565b909155506109169050866000846109108161126f565b886110ab565b61092081836135ba565b915061095086838a8e877f0000000000000000000000000000000000000000000000000000000000000000611dc9565b915061096461095f83856115a8565b611e13565b600580546002906109859084906201000090046001600160701b03166136a6565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109b282611b17565b600580546010906109d4908490600160801b90046001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a08600184610bc6565b6000818152600e60205260409020549091508015610b175760019450600080610a35838b8f886001611cfa565b9150915080600b6000828254610a4b91906135ba565b90915550610a67905083600084610a618161126f565b8a611742565b610a718183613693565b9150610a8061095f83876115a8565b60058054600290610aa19084906201000090046001600160701b03166136a6565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ace82611b17565b60058054601090610af0908490600160801b90046001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b4f57610b43610b298761126f565b610b328361126f565b610b3c91906135cd565b600061129d565b610b4d838f611e3d565b505b6000610b5a84612037565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bf05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c3e57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c81908490613693565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610ce989612195565b9050610d53610cf6611adf565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006121e6565b90995096509150610d65610694611adf565b9250610d9b8289610d96867f0000000000000000000000000000000000000000000000000000000000000000612256565b612286565b15610da857610da86113b0565b8a8a60008080610dba85878a876122c8565b9b5091945092509050610dcd8184613693565b610dd790886135ba565b9650610de382846135ba565b610ded908c6135ba565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610e279190613693565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e6f5760008a8152600760205260409020600101546001600160801b0316610e71565b8a5b9050610ea18c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611dc9565b9750610ead8588613693565b9650670de0b6b3a7640000610f3384610ec4611adf565b610ece91906135ba565b600154610eec908d90600160801b90046001600160801b0316613693565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b00565b1115610f4157610f416113b0565b610f5188888588868660006123dc565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f995750505050565b6000848152600760205260408120546001600160801b031690819003610ff357610fc283611b17565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611071565b61104461103f670de0b6b3a764000061100c8886613693565b61101691906136e6565b85670de0b6b3a764000061102a878a613693565b61103491906136e6565b85929190600161247b565b611b17565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61107a84611b17565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110f461103f826110d7670de0b6b3a7640000866136e6565b600454600160801b90046001600160801b031691908a600061247b565b600480546001600160801b03928316600160801b02921691909117905561111a86611b17565b61112490826136fd565b600380546001600160801b03928316600160801b02921691909117905561114a84611b17565b600180546000906111659084906001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061119283612525565b600380546000906111a7908490600f0b61371d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111d785611b17565b600180546010906111f9908490600160801b90046001600160801b03166136fd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061124d600e6000611239600286610bc6565b81526020019081526020016000205461126f565b61125f600e6000611239600187610bc6565b61126991906135cd565b92915050565b60006001600160ff1b038211156112995760405163396ea70160e11b815260040160405180910390fd5b5090565b60006112c66112ac8483612561565b6112b7846000612561565b6112c191906135cd565b612525565b9050600081600f0b131561131b57600280548291906000906112f29084906001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561134b576113308161374a565b600280546000906112f29084906001600160801b03166136fd565b505050565b600061137c7f000000000000000000000000000000000000000000000000000000000000000083612577565b60025461139291906001600160801b03166135ba565b6001546113a8906001600160801b0316846115a8565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611269826004611e3d565b60008060006113e484611b56565b909250905060006113f586866115a8565b90508183111561140d5761140a86838561258c565b95505b8281101561141f578083039250611424565b600092505b61142d83611e13565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148057869003611484565b5060005b61148d81611b17565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114c485856115a8565b90506114cf816125aa565b9450846000036114e3576000915050610bbf565b6114f36040840160208501613624565b156115225761151b8561150960208601866135ed565b6115166040870187613770565b612719565b9150611549565b6115458561153360208601866135ed565b6115406040870187613770565b612734565b8491505b509392505050565b60006115636040830160208401613624565b1561156f575082610bbf565b61157984846115a8565b9050610bbf565b60006115926040830160208401613624565b156115a15761157984846127ce565b5082610bbf565b6000610bbf8383670de0b6b3a764000061258c565b6000806000806000806000806115d289612195565b905061163c6115df611adf565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006127e3565b9099509750915060008080611652610694611adf565b95508c6116618f8689846122c8565b9a5091955090935091506116758385613693565b61167f9087613693565b955061168b82856135ba565b611695908c613693565b9a506116a1888c6135ba565b9950505050505061172c86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116df9190613693565b81526020810191909152604001600020600101546001600160801b0316428e116117235760008e8152600760205260409020600101546001600160801b0316611725565b8e5b60016123dc565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061178457507f00000000000000000000000000000000000000000000000000000000000000006117828583613693565b105b15611791576117916113b0565b6003549084900390600f0b6117a684826135cd565b9050836117b28661126f565b1380156117e757507f00000000000000000000000000000000000000000000000000000000000000006117e58383612837565b105b156117f4576117f46113b0565b600254600160801b90046001600160801b031661183661103f82611820670de0b6b3a7640000886136e6565b6004546001600160801b031691908c600061247b565b600480546001600160801b0319166001600160801b03929092169190911790556118608882613693565b905061186b81611b17565b600280546001600160801b03928316600160801b02921691909117905561189183611b17565b600180546001600160801b0319166001600160801b03929092169190911790556118ba82612525565b600380546001600160801b0319166001600160801b03929092169190911790556118e387611b17565b60018054601090611905908490600160801b90046001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611994573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526119bc9190810190613882565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a449190613962565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa158015611abb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100849190613962565b6001546003546000916105f4916001600160801b0390911690600f0b612837565b600061008182611b1185888861258c565b9061285d565b60006001600160801b0382111561129957604051630f0af95160e11b815260040160405180910390fd5b6000818311611b505782610bbf565b50919050565b6005546000908190611b79908490600160801b90046001600160801b03166115a8565b6005546201000090046001600160701b03169250905081811115611cf5576000611ba38383613693565b9050611bb261103f82866128d2565b60058054601090611bd4908490600160801b90046001600160801b03166136fd565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c0d85836127ce90919063ffffffff16565b90506000611c3b827f00000000000000000000000000000000000000000000000000000000000000006115a8565b905080600b6000828254611c4f91906135ba565b90915550611c5f90508183613693565b9150611c6a82611b17565b60018054600090611c859084906001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cb2826128e7565b60038054600090611cc7908490600f0b61371d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611d0787856127ce565b91506000611d35837f00000000000000000000000000000000000000000000000000000000000000006115a8565b9050611d61817f00000000000000000000000000000000000000000000000000000000000000006115a8565b91508315611d8457611d738282613693565b611d7d9084613693565b9250611d9b565b611d8e8282613693565b611d9890846135ba565b92505b86861015611dbe57611dae83878961258c565b9250611dbb82878961258c565b91505b509550959350505050565b600080611de184611ddb8a888a61258c565b906127ce565b9050611dee88848661258c565b611df890826135ba565b905086811115611e085786810391505b509695505050505050565b60006001600160701b038211156112995760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611e88916001600160801b031690613693565b905080600003611e9c576001915050611269565b6000611ea785612911565b905080600003611ebc57600192505050611269565b600080611eca8385896129ad565b9150915080611ee0576000945050505050611269565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f1c9291906139f9565b6040805180830381865af4158015611f38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f5c9190613a6f565b91509150611f7a611f6c8261126f565b611f7590613a93565b612b28565b925082611f905760009650505050505050611269565b611f9982611b17565b60068054600090611fb49084906001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fe181611b17565b60068054601090612003908490600160801b90046001600160801b03166136c6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61206087612cbe565b6040518263ffffffff1660e01b815260040161207c9190613aaf565b6040805180830381865af4158015612098573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120bc9190613abe565b91509150806120d2575060009485945092505050565b60008086116120e25760006120ec565b6120ec83876115a8565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161215791906135ba565b6121619190613693565b90508060000361217a5750600096879650945050505050565b600061218683836127ce565b98600198509650505050505050565b6000806121a06105f9565b90508083116121b05760006121ba565b6121ba8184613693565b9150610bbf827f00000000000000000000000000000000000000000000000000000000000000006127ce565b600080806122076121ff88670de0b6b3a7640000613693565b899087612df8565b90508615612249576122198888612577565b915061223a8a8a846122338a670de0b6b3a7640000613693565b8989612e1e565b925061224683826135ba565b90505b9750975097945050505050565b600061227461226d84670de0b6b3a7640000613693565b8390612577565b610bbf90670de0b6b3a7640000613693565b6000806122bd85612295611adf565b61229f91906135ba565b600154610eec908790600160801b90046001600160801b0316613693565b909210949350505050565b600080808061231f87866123188b6123126122eb8c670de0b6b3a7640000613693565b7f000000000000000000000000000000000000000000000000000000000000000090612577565b90612577565b9190612df8565b935061234b847f00000000000000000000000000000000000000000000000000000000000000006115a8565b9150600061236c61236489670de0b6b3a7640000613693565b8a9088612df8565b9050612398817f0000000000000000000000000000000000000000000000000000000000000000612577565b93506123c4847f00000000000000000000000000000000000000000000000000000000000000006115a8565b6123ce90846135ba565b915050945094509450949050565b6000806000806000808888101561244b578615612401576123fe8d898b61258c565b9c505b61240c8c898b61258c565b9b506124178b61126f565b6124208d61126f565b61242a91906135cd565b90506124378b898b61258c565b9a506124448a898b61258c565b995061246a565b6124548b61126f565b61245d8d61126f565b61246791906135cd565b90505b9b9c9a9b999a975050505050505050565b60008260000361248c57508461251c565b81156124df576124bd61249f84876135ba565b6124a985876115a8565b6124b3888a6115a8565b611ddb91906135ba565b905060006124cb8588611b41565b9050808210156124d9578091505b5061251c565b8285036124ee5750600061251c565b6125196124fb8487613693565b6125058587612577565b61250f888a6115a8565b611ddb9190613693565b90505b95945050505050565b600060016001607f1b0319821280612543575060016001607f1b0382135b156112995760405163a5353be560e01b815260040160405180910390fd5b60008183136125705781610bbf565b5090919050565b6000610bbf8383670de0b6b3a7640000612df8565b60008260001904841183021582026125a357600080fd5b5091020490565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561260b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526126339190810190613882565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126bb9190613962565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a90606401611a9e565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156127a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127c79190613aee565b5050505050565b6000610bbf83670de0b6b3a76400008461258c565b600080806128046127fc88670de0b6b3a7640000613693565b89908761258c565b905086156122495761281688886115a8565b915061223a8a8a846128308a670de0b6b3a7640000613693565b8989612e41565b6000806128448484612e52565b909250905080612856576128566113b0565b5092915050565b6000816000036128765750670de0b6b3a7640000611269565b8260000361288657506000611269565b60006128918361126f565b905060006128a66128a18661126f565b612e91565b90508181026128bd670de0b6b3a764000082613b0b565b90506128c8816130b7565b9695505050505050565b6000610bbf83670de0b6b3a764000084612df8565b600060016001607f1b038211156112995760405163a5353be560e01b815260040160405180910390fd5b600254600090819061292c906001600160801b0316846128d2565b90506129587f0000000000000000000000000000000000000000000000000000000000000000826135ba565b6001546001600160801b03161115611b50576001547f0000000000000000000000000000000000000000000000000000000000000000906129a39083906001600160801b0316613693565b610bbf9190613693565b6129b5613492565b6000806129c184612cbe565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129fc9190613aaf565b6040805180830381865af4158015612a18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a3c9190613abe565b9350905082612a51575060009150612b209050565b6000612a78612a738461016001518561014001516115a890919063ffffffff16565b61126f565b612a98612a7385610120015186610100015161257790919063ffffffff16565b612aa291906135cd565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c039190613b39565b935093509350935080612c1f5750600098975050505050505050565b868414612c5057612c2f84611b17565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612c8157612c6083612525565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612caf57612c9182611b17565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612cc66134e4565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612dbe911661324c565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612df09290041661324c565b905292915050565b6000826000190484118302158202612e0f57600080fd5b50910281810615159190040190565b600080612e2f8888888888886132c2565b909250905080611e0857611e086113b0565b600080612e2f8888888888886133a3565b600080600083612e618661126f565b612e6b91906135cd565b90506000811215612e83576000809250925050612e8a565b9150600190505b9250929050565b6000808213612eb35760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f369084901c61126f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130d257506000919050565b680755bf798b4a1bf1e582126130fb576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906128c874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126f565b600080670de0b6b3a76400006132606105f9565b61326a91906136e6565b905080831161327a576000613284565b6132848184613693565b9150610bbf6132bb670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136e6565b83906127ce565b60008060006132d48989888888613463565b9050868810156132eb576000809250925050613398565b96869003966132fa888761285d565b975087811015613311576000809250925050613398565b87810361331f818688612df8565b9050670de0b6b3a764000081106133535761334c613345670de0b6b3a7640000896128d2565b829061285d565b905061336b565b613368613345670de0b6b3a7640000896127ce565b90505b61337581866128d2565b90508981101561338d57600080935093505050613398565b899003925060019150505b965096945050505050565b60008060006133b58989888888613463565b90506133c586611b11898b6135ba565b9750878110156133dc576000809250925050613398565b8781036133ea818688612df8565b9050670de0b6b3a7640000811061341757613410613345670de0b6b3a7640000896128d2565b905061342f565b61342c613345670de0b6b3a7640000896127ce565b90505b61343981866128d2565b9050808a101561345157600080935093505050613398565b90980398600198509650505050505050565b600061346f858561285d565b61348861348086611b11868b612577565b859085612df8565b61251991906135ba565b6040518061012001604052806134a66134e4565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561355b57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561358757600080fd5b85016060818803121561359957600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611269576112696135a4565b8181036000831280158383131683831282161715612856576128566135a4565b6000602082840312156135ff57600080fd5b81356001600160a01b0381168114610bbf57600080fd5b80151581146105de57600080fd5b60006020828403121561363657600080fd5b8135610bbf81613616565b8082018281126000831280158216821582161715613661576136616135a4565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261368e5761368e613669565b500690565b81810381811115611269576112696135a4565b6001600160701b03818116838216019080821115612856576128566135a4565b6001600160801b03818116838216019080821115612856576128566135a4565b8082028115828204841417611269576112696135a4565b6001600160801b03828116828216039080821115612856576128566135a4565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611269576112696135a4565b600081600f0b60016001607f1b03198103613767576137676135a4565b60000392915050565b6000808335601e1984360301811261378757600080fd5b83018035915067ffffffffffffffff8211156137a257600080fd5b602001915036819003821315612e8a57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156137f6576137f66137b7565b604052919050565b600067ffffffffffffffff821115613818576138186137b7565b5060051b60200190565b600082601f83011261383357600080fd5b81516020613848613843836137fe565b6137cd565b82815260059290921b8401810191818101908684111561386757600080fd5b8286015b84811015611e08578051835291830191830161386b565b60008060006060848603121561389757600080fd5b835167ffffffffffffffff808211156138af57600080fd5b818601915086601f8301126138c357600080fd5b815160206138d3613843836137fe565b82815260059290921b8401810191818101908a8411156138f257600080fd5b8286015b8481101561392a5780518681111561390e5760008081fd5b61391c8d86838b0101613822565b8452509183019183016138f6565b509189015191975090935050508082111561394457600080fd5b5061395186828701613822565b925050604084015190509250925092565b60006020828403121561397457600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613a0d82855161397b565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a8257600080fd5b505080516020909101519092909150565b6000600160ff1b8201613aa857613aa86135a4565b5060000390565b6101808101611269828461397b565b60008060408385031215613ad157600080fd5b825191506020830151613ae381613616565b809150509250929050565b600060208284031215613b0057600080fd5b8151610bbf81613616565b600082613b1a57613b1a613669565b600160ff1b821460001984141615613b3457613b346135a4565b500590565b60008060008060808587031215613b4f57600080fd5b84519350602085015192506040850151915060608501516135998161361656fea26469706673582212209285068affa04047e7ed2ceea8d0146d0454c6e931ac68a49ae27735e67895c664736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
