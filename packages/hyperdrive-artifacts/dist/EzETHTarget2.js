export const EzETHTarget2 = {
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
            "name": "MinimumSharePrice",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolIsPaused",
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
            "name": "TransferFailed",
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
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
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
            "name": "openLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxDeposit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
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
            "name": "openShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b5060405162003fd138038062003fd1833981016040819052620000359162000276565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e05260e0808801516102005261012080890151909252610100808901519091526101408089015190915291870180515190915280518301519091528051604090810151610160908152915160609081015161018090815282890151871661022052908801516102405291870151600a80549187166001600160a01b03199283161790559187015160088054918716918416919091179055928601516009805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018791906200039f565b6001600160a01b03166102805250620003c6915050565b6040516101e081016001600160401b0381118282101715620001d057634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ec57600080fd5b50565b8051620001fc81620001d6565b919050565b6000608082840312156200021457600080fd5b604051608081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102608112156200028c57600080fd5b610240808212156200029d57600080fd5b620002a76200019e565b9150620002b485620001ef565b8252620002c460208601620001ef565b6020830152620002d760408601620001ef565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000342818701620001ef565b9083015261018062000356868201620001ef565b908301526101a06200036a868201620001ef565b908301526101c06200037f8787830162000201565b818401525081935062000394818601620001ef565b925050509250929050565b600060208284031215620003b257600080fd5b8151620003bf81620001d6565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613a606200057160003960006124e8015260006123b5015260005050600050506000505060008181610100015281816103110152612c4c01526000818161137301528181611afe01528181611b610152818161234a0152818161282c0152818161286801528181612a650152612c2601526000818161076301528181610cc901528181610dd5015281816112440152612c000152600061171d01526000818161184301528181612229015281816125ea01526126630152600081816109e601528181610d28015281816112e6015281816118170152612637015260008181610d07015281816121e501526125b601526000818161078401528181610ca701528181610df6015281816112220152612c720152600081816101dc015281816103a70152818161091e01526132300152600081816106b5015281816107b60152818161083d0152818161089e01526108d601526000818161153f0152612441015260005050613a606000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613400565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613400565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102ca565b6000806100a4610533565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561055d565b6100de8361057e565b6000806100eb88866105b7565b909250905060006100fc8383610690565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106ae565b9050610178818460046106e9565b5060008060006101888787610c80565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c69190613475565b909155506101d79050844283610e33565b6102017f000000000000000000000000000000000000000000000000000000000000000085613475565b985061020f8389888c610f71565b600061021c60018b61110b565b90506102358161022f60208e018e613488565b8b611140565b8d8a8a898e856102486020830183613488565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c86888661028560408801602089016134bf565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102d5610533565b600554610100900460ff16156102fe576040516321081abf60e01b815260040160405180910390fd5b61030661055d565b61030f8361057e565b7f00000000000000000000000000000000000000000000000000000000000000008610156103505760405163211ddda360e11b815260040160405180910390fd5b600061035a6111e8565b90508481101561037d576040516342af972b60e01b815260040160405180910390fd5b60006103876106ae565b9050600061039e6103966106ae565b8460046106e9565b905060006103cc7f000000000000000000000000000000000000000000000000000000000000000084613475565b90506000806000806103df8e89886111fb565b600b8054949850929650909450925083916000906103fe908490613475565b9091555061040f9050874283610e33565b50600061041d84898d61131e565b9050808d10156104405760405163c972651760e01b815260040160405180910390fd5b61044a818c6105b7565b508e905061045a81858b8961134d565b600061046760028861110b565b90508c6104818261047b6020840184613488565b85611140565b858b86846104926020860186613488565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8a866104cf60408b0160208c016134bf565b6104e3896104dd8a8d6134dc565b90610690565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361055657604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057c57604051631574f9f360e01b815260040160405180910390fd5b565b600061058d6020830183613488565b6001600160a01b0316036105b45760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105cb60408501602086016134bf565b156105f0576105e6856105e160408701876134ef565b611501565b909350905061060c565b50346106088561060360408701876134ef565b61151d565b8492505b6106146111e8565b9150801561068757604051600090339083908381818185875af1925050503d806000811461065e576040519150601f19603f3d011682016040523d82523d6000602084013e610663565b606091505b5050905080610685576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106a58383670de0b6b3a76400006115ba565b90505b92915050565b60006106da7f00000000000000000000000000000000000000000000000000000000000000004261354c565b6106e490426134dc565b905090565b600083815260076020526040812060018101546001600160801b031615158061071157504285115b1561072a57600101546001600160801b03169050610c79565b60008060006107376106ae565b90508088036107af578692506107a861074e6115d8565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006115f9565b915061086b565b60006107db7f00000000000000000000000000000000000000000000000000000000000000008a613475565b90505b8181036107f6578793506107f361074e6115d8565b92505b6000818152600760205260409020600101546001600160801b031693508315610838576000818152600760205260409020546001600160801b03169250610869565b6108627f000000000000000000000000000000000000000000000000000000000000000082613475565b90506107de565b505b61087483611619565b6001850180546001600160801b0319166001600160801b03929092169190911790556108ca6108c37f00000000000000000000000000000000000000000000000000000000000000008a6134dc565b8984610e33565b610908886109026108fb7f000000000000000000000000000000000000000000000000000000000000000083613475565b4290611647565b84610e33565b6109118761165c565b50600090506007816109437f00000000000000000000000000000000000000000000000000000000000000008c6134dc565b815260208101919091526040016000908120600101546001600160801b0316915061096f60028b61110b565b6000818152600e60205260408120549192508b8b8315610ab5576001925060008061099e86898d866000611800565b9150915080600b60008282546109b49190613475565b909155506109d09050866000846109ca816118cf565b886118f9565b6109da8183613475565b9150610a0a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611a73565b9150610a1e610a198385610690565b611abd565b60058054600290610a3f9084906201000090046001600160701b0316613560565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a6c82611619565b60058054601090610a8e908490600160801b90046001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ac260018461110b565b6000818152600e60205260409020549091508015610bd15760019450600080610aef838b8f886001611800565b9150915080600b6000828254610b059190613475565b90915550610b21905083600084610b1b816118cf565b8a611ae7565b610b2b81836134dc565b9150610b3a610a198387610690565b60058054600290610b5b9084906201000090046001600160701b0316613560565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b8882611619565b60058054601090610baa908490600160801b90046001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c0957610bfd610be3876118cf565b610bec836118cf565b610bf691906135a0565b6000611cd8565b610c07838f611d8b565b505b6000610c1484611f85565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610ced610c916115d8565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006120e3565b9250610cfa61074e6115d8565b9050610d518684610d4c847f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061210f565b61217c565b15610d5e57610d5e6121be565b600080610d6c8884896121d7565b9092509050610d7b82866134dc565b9450610d888184896115ba565b9350610d9484896134dc565b9550670de0b6b3a7640000610e1a87610dab6115d8565b610db59190613475565b600154610dd3908990600160801b90046001600160801b03166134dc565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006115f9565b1115610e2857610e286121be565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e5f5750505050565b6000848152600760205260408120546001600160801b031690819003610eb957610e8883611619565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f37565b610f0a610f05670de0b6b3a7640000610ed288866134dc565b610edc91906135c0565b85670de0b6b3a7640000610ef0878a6134dc565b610efa91906135c0565b859291906001612257565b611619565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f4084611619565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610fb3610f0582610f9d670de0b6b3a7640000866135c0565b6004546001600160801b03169190886001612257565b600480546001600160801b0319166001600160801b0392909216919091179055610fdc85611619565b60018054600090610ff79084906001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061102484611619565b60018054601090611046908490600160801b90046001600160801b03166135d7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061107384611619565b61107d9082613580565b600280546001600160801b03808416600160801b029116179055905060006110a4836122ff565b90506110c2816110b3876118cf565b6110bd90846135f7565b611cd8565b6110cb84612343565b6110d7576110d76121be565b60006110e2856123a3565b90508061110257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111355760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611172908490613475565b90915550506000838152600e602052604081208054839290611195908490613475565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106e4670de0b6b3a76400006123b0565b60008060008061126861120c6115d8565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061255b565b925086611275848861257c565b1115611283576112836121be565b60008061129161074e6115d8565b92506112a789670de0b6b3a7640000858b612591565b509193509091506112ba905081836134dc565b6112c490866134dc565b94506113108861130a8b6112d8858a6134dc565b8b6112e38e8261269f565b8e7f00000000000000000000000000000000000000000000000000000000000000006126b5565b9061257c565b955092505093509350935093565b600061133060408301602084016134bf565b1561133c575082610c79565b61134684846126da565b9050610c79565b6001546001600160801b031683811015611369576113696121be565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906113a1908390600f0b6126ef565b10156113af576113af6121be565b6003546113f990610f0590600160801b90046001600160801b03166113dc670de0b6b3a7640000866135c0565b600454600160801b90046001600160801b03169190896001612257565b600480546001600160801b03928316600160801b02921691909117905561141f81611619565b600180546001600160801b0319166001600160801b039290921691909117905561144885611619565b6001805460109061146a908490600160801b90046001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061149785611619565b600380546010906114b9908490600160801b90046001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114e8836122ff565b90506110c2816114f7886118cf565b6110bd90846135a0565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b4919061361f565b50505050565b60008260001904841183021582026115d157600080fd5b5091020490565b6001546003546000916106e4916001600160801b0390911690600f0b6126ef565b60006116108261160a8588886115ba565b90612715565b95945050505050565b60006001600160801b0382111561164357604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161165657826106a5565b50919050565b600554600090819061167f908490600160801b90046001600160801b0316610690565b6005546201000090046001600160701b031692509050818111156117fb5760006116a983836134dc565b90506116b8610f058286612780565b600580546010906116da908490600160801b90046001600160801b03166135d7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061171385836126da90919063ffffffff16565b90506000611741827f0000000000000000000000000000000000000000000000000000000000000000610690565b905080600b60008282546117559190613475565b90915550611765905081836134dc565b915061177082611619565b6001805460009061178b9084906001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117b882612795565b600380546000906117cd908490600f0b61363c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061180d87856126da565b9150600061183b837f0000000000000000000000000000000000000000000000000000000000000000610690565b9050611867817f0000000000000000000000000000000000000000000000000000000000000000610690565b9150831561188a5761187982826134dc565b61188390846134dc565b92506118a1565b61189482826134dc565b61189e9084613475565b92505b868610156118c4576118b48387896115ba565b92506118c18287896115ba565b91505b509550959350505050565b60006001600160ff1b038211156116435760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611942610f0582611925670de0b6b3a7640000866135c0565b600454600160801b90046001600160801b031691908a6000612257565b600480546001600160801b03928316600160801b02921691909117905561196886611619565b61197290826135d7565b600380546001600160801b03928316600160801b02921691909117905561199884611619565b600180546000906119b39084906001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119e0836127bf565b600380546000906119f5908490600f0b61363c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a2585611619565b60018054601090611a47908490600160801b90046001600160801b03166135d7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611a8b84611a858a888a6115ba565b906126da565b9050611a988884866115ba565b611aa29082613475565b905086811115611ab25786810391505b509695505050505050565b60006001600160701b038211156116435760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b2957507f0000000000000000000000000000000000000000000000000000000000000000611b2785836134dc565b105b15611b3657611b366121be565b6003549084900390600f0b611b4b84826135a0565b905083611b57866118cf565b138015611b8c57507f0000000000000000000000000000000000000000000000000000000000000000611b8a83836126ef565b105b15611b9957611b996121be565b600254600160801b90046001600160801b0316611bdb610f0582611bc5670de0b6b3a7640000886135c0565b6004546001600160801b031691908c6000612257565b600480546001600160801b0319166001600160801b0392909216919091179055611c0588826134dc565b9050611c1081611619565b600280546001600160801b03928316600160801b029216919091179055611c3683611619565b600180546001600160801b0319166001600160801b0392909216919091179055611c5f826127bf565b600380546001600160801b0319166001600160801b0392909216919091179055611c8887611619565b60018054601090611caa908490600160801b90046001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611d01611ce784836127fb565b611cf28460006127fb565b611cfc91906135a0565b6127bf565b9050600081600f0b1315611d565760028054829190600090611d2d9084906001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611d8657611d6b81613669565b60028054600090611d2d9084906001600160801b03166135d7565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611dd6916001600160801b0316906134dc565b905080600003611dea5760019150506106a8565b6000611df58561280a565b905080600003611e0a576001925050506106a8565b600080611e188385896128a6565b9150915080611e2e5760009450505050506106a8565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e6a92919061370d565b6040805180830381865af4158015611e86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eaa9190613783565b91509150611ec8611eba826118cf565b611ec3906137a7565b612a21565b925082611ede57600096505050505050506106a8565b611ee782611619565b60068054600090611f029084906001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f2f81611619565b60068054601090611f51908490600160801b90046001600160801b0316613580565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fae87612bb7565b6040518263ffffffff1660e01b8152600401611fca91906137c3565b6040805180830381865af4158015611fe6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200a91906137d2565b9150915080612020575060009485945092505050565b600080861161203057600061203a565b61203a8387610690565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120a59190613475565b6120af91906134dc565b9050806000036120c85750600096879650945050505050565b60006120d483836126da565b98600198509650505050505050565b60006121048787876120fd88670de0b6b3a76400006134dc565b8787612cf1565b979650505050505050565b600061217461215061212984670de0b6b3a76400006134dc565b61130a670de0b6b3a764000061213f818a612780565b61214991906134dc565b879061257c565b61216290670de0b6b3a7640000613475565b611a8584670de0b6b3a76400006134dc565b949350505050565b6000806121b38561218b6115d8565b6121959190613475565b600154610dd3908790600160801b90046001600160801b03166134dc565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122218561130a85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612217818c612780565b61130a91906134dc565b915061224d827f0000000000000000000000000000000000000000000000000000000000000000610690565b9050935093915050565b600082600003612268575084611610565b81156122bb5761229961227b8487613475565b6122858587610690565b61228f888a610690565b611a859190613475565b905060006122a78588611647565b9050808210156122b5578091505b50611610565b8285036122ca57506000611610565b6122f56122d784876134dc565b6122e1858761257c565b6122eb888a610690565b611a8591906134dc565b9695505050505050565b6000612327600e600061231360028661110b565b8152602001908152602001600020546118cf565b612339600e600061231360018761110b565b6106a891906135a0565b600061236f7f00000000000000000000000000000000000000000000000000000000000000008361257c565b60025461238591906001600160801b0316613475565b60015461239b906001600160801b031684610690565b101592915050565b60006106a8826004611d8b565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612411573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261243991908101906138cd565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561249d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124c191906139ad565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb090606401602060405180830381865afa158015612537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217491906139ad565b600061210487878761257588670de0b6b3a76400006134dc565b8787612da5565b60006106a58383670de0b6b3a7640000612dc8565b60008080806125e287866125db8b61130a6125b48c670de0b6b3a76400006134dc565b7f00000000000000000000000000000000000000000000000000000000000000009061257c565b9190612dc8565b935061260e847f0000000000000000000000000000000000000000000000000000000000000000610690565b9150600061262f61262789670de0b6b3a76400006134dc565b8a9088612dc8565b905061265b817f000000000000000000000000000000000000000000000000000000000000000061257c565b9350612687847f0000000000000000000000000000000000000000000000000000000000000000610690565b6126919084613475565b915050945094509450949050565b60008183116126ae57816106a5565b5090919050565b6000806126cd846126c78a888a612dc8565b90612780565b9050611a98888486612dc8565b60006106a583670de0b6b3a7640000846115ba565b6000806126fc8484612dee565b90925090508061270e5761270e6121be565b5092915050565b60008160000361272e5750670de0b6b3a76400006106a8565b8260000361273e575060006106a8565b6000612749836118cf565b9050600061275e612759866118cf565b612e2a565b9050818102612775670de0b6b3a7640000826139c6565b90506122f581613050565b60006106a583670de0b6b3a764000084612dc8565b600060016001607f1b038211156116435760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806127dd575060016001607f1b0382135b156116435760405163a5353be560e01b815260040160405180910390fd5b60008183136126ae57816106a5565b6002546000908190612825906001600160801b031684612780565b90506128517f000000000000000000000000000000000000000000000000000000000000000082613475565b6001546001600160801b03161115611656576001547f00000000000000000000000000000000000000000000000000000000000000009061289c9083906001600160801b03166134dc565b610c7991906134dc565b6128ae61334d565b6000806128ba84612bb7565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128f591906137c3565b6040805180830381865af4158015612911573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061293591906137d2565b935090508261294a575060009150612a199050565b600061297161296c84610160015185610140015161069090919063ffffffff16565b6118cf565b61299161296c85610120015186610100015161257c90919063ffffffff16565b61299b91906135a0565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ad8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612afc91906139f4565b935093509350935080612b185750600098975050505050505050565b868414612b4957612b2884611619565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612b7a57612b59836127bf565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612ba857612b8a82611619565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612bbf61339f565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612cb791166131e5565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612ce9929004166131e5565b905292915050565b600080612d01888887878761325b565b9050612d1b8561160a612d14898c613475565b8690610690565b9750612d288489856115ba565b975087811015612d3a57612d3a6121be565b878103670de0b6b3a76400008110612d6f57612d68612d61670de0b6b3a764000088612780565b8290612715565b9050612d87565b612d84612d61670de0b6b3a7640000886126da565b90505b80881015612d9757612d976121be565b909603979650505050505050565b600080612db688888888888861328a565b909250905080611ab257611ab26121be565b6000826000190484118302158202612ddf57600080fd5b50910281810615159190040190565b600080600083612dfd866118cf565b612e0791906135a0565b90506000811215612e1f576000809250925050610689565b946001945092505050565b6000808213612e4c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ecf9084901c6118cf565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361306b57506000919050565b680755bf798b4a1bf1e58212613094576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906122f574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6118cf565b600080670de0b6b3a76400006131f96106ae565b61320391906135c0565b905080831161321357600061321d565b61321d81846134dc565b9150610c79613254670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006135c0565b83906126da565b60006132678585612715565b6132806132788661160a868b61257c565b859085612dc8565b6122f59190613475565b600080600061329c898988888861325b565b90506132ac8661160a898b613475565b9750878110156132c3576000809250925050613342565b8781036132d1818688612dc8565b9050670de0b6b3a764000081106132fe576132f7612d61670de0b6b3a764000089612780565b9050613316565b613313612d61670de0b6b3a7640000896126da565b90505b6133208186612780565b9050808a101561333857600080935093505050613342565b8903925060019150505b965096945050505050565b60405180610120016040528061336161339f565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561341657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561344257600080fd5b85016060818803121561345457600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106a8576106a861345f565b60006020828403121561349a57600080fd5b81356001600160a01b0381168114610c7957600080fd5b80151581146105b457600080fd5b6000602082840312156134d157600080fd5b8135610c79816134b1565b818103818111156106a8576106a861345f565b6000808335601e1984360301811261350657600080fd5b83018035915067ffffffffffffffff82111561352157600080fd5b60200191503681900382131561068957600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261355b5761355b613536565b500690565b6001600160701b0381811683821601908082111561270e5761270e61345f565b6001600160801b0381811683821601908082111561270e5761270e61345f565b818103600083128015838313168383128216171561270e5761270e61345f565b80820281158282048414176106a8576106a861345f565b6001600160801b0382811682821603908082111561270e5761270e61345f565b80820182811260008312801582168215821617156136175761361761345f565b505092915050565b60006020828403121561363157600080fd5b8151610c79816134b1565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106a8576106a861345f565b600081600f0b60016001607f1b031981036136865761368661345f565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061372182855161368f565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561379657600080fd5b505080516020909101519092909150565b6000600160ff1b82016137bc576137bc61345f565b5060000390565b61018081016106a8828461368f565b600080604083850312156137e557600080fd5b8251915060208301516137f7816134b1565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561384157613841613802565b604052919050565b600067ffffffffffffffff82111561386357613863613802565b5060051b60200190565b600082601f83011261387e57600080fd5b8151602061389361388e83613849565b613818565b82815260059290921b840181019181810190868411156138b257600080fd5b8286015b84811015611ab257805183529183019183016138b6565b6000806000606084860312156138e257600080fd5b835167ffffffffffffffff808211156138fa57600080fd5b818601915086601f83011261390e57600080fd5b8151602061391e61388e83613849565b82815260059290921b8401810191818101908a84111561393d57600080fd5b8286015b84811015613975578051868111156139595760008081fd5b6139678d86838b010161386d565b845250918301918301613941565b509189015191975090935050508082111561398f57600080fd5b5061399c8682870161386d565b925050604084015190509250925092565b6000602082840312156139bf57600080fd5b5051919050565b6000826139d5576139d5613536565b600160ff1b8214600019841416156139ef576139ef61345f565b500590565b60008060008060808587031215613a0a57600080fd5b8451935060208501519250604085015191506060850151613454816134b156fea26469706673582212207fdb0210640bb946005172f80a61b19eb3b8fea2016dc728cbb9ba8462ef1d9a64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
