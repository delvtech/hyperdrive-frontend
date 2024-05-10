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
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200403f3803806200403f833981016040819052620000359162000276565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e05260e0808801516102005261012080890151909252610100808901519091526101408089015190915291870180515190915280518301519091528051604090810151610160908152915160609081015161018090815282890151871661022052908801516102405291870151600a80549187166001600160a01b03199283161790559187015160088054918716918416919091179055928601516009805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018791906200039f565b6001600160a01b03166102805250620003c6915050565b6040516101e081016001600160401b0381118282101715620001d057634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ec57600080fd5b50565b8051620001fc81620001d6565b919050565b6000608082840312156200021457600080fd5b604051608081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102608112156200028c57600080fd5b610240808212156200029d57600080fd5b620002a76200019e565b9150620002b485620001ef565b8252620002c460208601620001ef565b6020830152620002d760408601620001ef565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000342818701620001ef565b9083015261018062000356868201620001ef565b908301526101a06200036a868201620001ef565b908301526101c06200037f8787830162000201565b818401525081935062000394818601620001ef565b925050509250929050565b600060208284031215620003b257600080fd5b8151620003bf81620001d6565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613ace62000571600039600061256b01526000612438015260005050600050506000505060008181610100015281816103250152612cba0152600081816113e101528181611b6c01528181611bcf015281816123b80152818161289a015281816128d601528181612ad30152612c9401526000818161078101528181610ce701528181610df3015281816112b90152612c6e0152600061178b0152600081816118b1015281816122970152818161266d01526126e6015260008181610a0401528181610d460152818161135b0152818161188501526126ba015260008181610d250152818161225301526126390152600081816107a201528181610cc501528181610e14015281816112970152612ce00152600081816101dc015281816103bb0152818161093c015261329e0152600081816106d3015281816107d40152818161085b015281816108bc01526108f40152600081816115ad01526124c4015260005050613ace6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c36600461346e565b61006d565b6040805192835260208301919091520160405180910390f35b61004161006836600461346e565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102de565b6000806100a4610551565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561057b565b6100de8361059c565b6000806100eb88866105d5565b909250905060006100fc83836106ae565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106cc565b905061017881846004610707565b5060008060006101888787610c9e565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c691906134e3565b909155506101d79050844283610e51565b6102017f0000000000000000000000000000000000000000000000000000000000000000856134e3565b985061020f8389888c610f8f565b600061021c60018b611129565b90506102358161022f60208e018e6134f6565b8b61115e565b8d8a8a898e8561024860208301836134f6565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c8661027e898787611206565b6102898a8888611235565b610299604088016020890161352d565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102e9610551565b600554610100900460ff1615610312576040516321081abf60e01b815260040160405180910390fd5b61031a61057b565b6103238361059c565b7f00000000000000000000000000000000000000000000000000000000000000008610156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e61125d565b905084811015610391576040516342af972b60e01b815260040160405180910390fd5b600061039b6106cc565b905060006103b26103aa6106cc565b846004610707565b905060006103e07f0000000000000000000000000000000000000000000000000000000000000000846134e3565b90506000806000806103f38e8988611270565b600b8054949850929650909450925083916000906104129084906134e3565b909155506104239050874283610e51565b50600061043184898d611393565b9050808d10156104545760405163c972651760e01b815260040160405180910390fd5b61045e818c6105d5565b508e905061046e81858b896113bb565b600061047b600288611129565b90508c6104958261048f60208401846134f6565b8561115e565b858b86846104a660208601866134f6565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8d6104dd8c888b611235565b6104ed60408b0160208c0161352d565b610501896104fb8a8d61354a565b906106ae565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361057457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059a57604051631574f9f360e01b815260040160405180910390fd5b565b60006105ab60208301836134f6565b6001600160a01b0316036105d25760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105e9604085016020860161352d565b1561060e57610604856105ff604087018761355d565b61156f565b909350905061062a565b503461062685610621604087018761355d565b61158b565b8492505b61063261125d565b915080156106a557604051600090339083908381818185875af1925050503d806000811461067c576040519150601f19603f3d011682016040523d82523d6000602084013e610681565b606091505b50509050806106a3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106c38383670de0b6b3a7640000611628565b90505b92915050565b60006106f87f0000000000000000000000000000000000000000000000000000000000000000426135ba565b610702904261354a565b905090565b600083815260076020526040812060018101546001600160801b031615158061072f57504285115b1561074857600101546001600160801b03169050610c97565b60008060006107556106cc565b90508088036107cd578692506107c661076c611646565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611667565b9150610889565b60006107f97f00000000000000000000000000000000000000000000000000000000000000008a6134e3565b90505b8181036108145787935061081161076c611646565b92505b6000818152600760205260409020600101546001600160801b031693508315610856576000818152600760205260409020546001600160801b03169250610887565b6108807f0000000000000000000000000000000000000000000000000000000000000000826134e3565b90506107fc565b505b61089283611687565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e86108e17f00000000000000000000000000000000000000000000000000000000000000008a61354a565b8984610e51565b610926886109206109197f0000000000000000000000000000000000000000000000000000000000000000836134e3565b42906116b5565b84610e51565b61092f876116ca565b50600090506007816109617f00000000000000000000000000000000000000000000000000000000000000008c61354a565b815260208101919091526040016000908120600101546001600160801b0316915061098d60028b611129565b6000818152600e60205260408120549192508b8b8315610ad357600192506000806109bc86898d86600061186e565b9150915080600b60008282546109d291906134e3565b909155506109ee9050866000846109e88161193d565b88611967565b6109f881836134e3565b9150610a2886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611ae1565b9150610a3c610a3783856106ae565b611b2b565b60058054600290610a5d9084906201000090046001600160701b03166135ce565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8a82611687565b60058054601090610aac908490600160801b90046001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae0600184611129565b6000818152600e60205260409020549091508015610bef5760019450600080610b0d838b8f88600161186e565b9150915080600b6000828254610b2391906134e3565b90915550610b3f905083600084610b398161193d565b8a611b55565b610b49818361354a565b9150610b58610a3783876106ae565b60058054600290610b799084906201000090046001600160701b03166135ce565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba682611687565b60058054601090610bc8908490600160801b90046001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2757610c1b610c018761193d565b610c0a8361193d565b610c14919061360e565b6000611d46565b610c25838f611df9565b505b6000610c3284611ff3565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d0b610caf611646565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612151565b9250610d1861076c611646565b9050610d6f8684610d6a847f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061217d565b6121ea565b15610d7c57610d7c61222c565b600080610d8a888489612245565b9092509050610d99828661354a565b9450610da6818489611628565b9350610db2848961354a565b9550670de0b6b3a7640000610e3887610dc9611646565b610dd391906134e3565b600154610df1908990600160801b90046001600160801b031661354a565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611667565b1115610e4657610e4661222c565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e7d5750505050565b6000848152600760205260408120546001600160801b031690819003610ed757610ea683611687565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f55565b610f28610f23670de0b6b3a7640000610ef0888661354a565b610efa919061362e565b85670de0b6b3a7640000610f0e878a61354a565b610f18919061362e565b8592919060016122c5565b611687565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f5e84611687565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610fd1610f2382610fbb670de0b6b3a76400008661362e565b6004546001600160801b031691908860016122c5565b600480546001600160801b0319166001600160801b0392909216919091179055610ffa85611687565b600180546000906110159084906001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061104284611687565b60018054601090611064908490600160801b90046001600160801b0316613645565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109184611687565b61109b90826135ee565b600280546001600160801b03808416600160801b029116179055905060006110c28361236d565b90506110e0816110d18761193d565b6110db9084613665565b611d46565b6110e9846123b1565b6110f5576110f561222c565b600061110085612411565b90508061112057604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111535760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111909084906134e3565b90915550506000838152600e6020526040812080548392906111b39084906134e3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611218604083016020840161352d565b15611224575082610c97565b61122e84846106ae565b9050610c97565b6000611247604083016020840161352d565b156112565761122e848461241e565b5082610c97565b6000610702670de0b6b3a7640000612433565b6000806000806112dd611281611646565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006125de565b9250866112ea84886125ff565b11156112f8576112f861222c565b60008061130661076c611646565b925061131c89670de0b6b3a7640000858b612614565b5091935090915061132f9050818361354a565b611339908661354a565b94506113858861137f8b61134d858a61354a565b8b6113588e82612722565b8e7f0000000000000000000000000000000000000000000000000000000000000000612738565b906125ff565b955092505093509350935093565b60006113a5604083016020840161352d565b156113b1575082610c97565b61122e848461241e565b6001546001600160801b0316838110156113d7576113d761222c565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061140f908390600f0b61275d565b101561141d5761141d61222c565b60035461146790610f2390600160801b90046001600160801b031661144a670de0b6b3a76400008661362e565b600454600160801b90046001600160801b031691908960016122c5565b600480546001600160801b03928316600160801b02921691909117905561148d81611687565b600180546001600160801b0319166001600160801b03929092169190911790556114b685611687565b600180546010906114d8908490600160801b90046001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061150585611687565b60038054601090611527908490600160801b90046001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115568361236d565b90506110e0816115658861193d565b6110db908461360e565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156115fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611622919061368d565b50505050565b600082600019048411830215820261163f57600080fd5b5091020490565b600154600354600091610702916001600160801b0390911690600f0b61275d565b600061167e82611678858888611628565b90612783565b95945050505050565b60006001600160801b038211156116b157604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116116c457826106c3565b50919050565b60055460009081906116ed908490600160801b90046001600160801b03166106ae565b6005546201000090046001600160701b03169250905081811115611869576000611717838361354a565b9050611726610f2382866127ee565b60058054601090611748908490600160801b90046001600160801b0316613645565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611781858361241e90919063ffffffff16565b905060006117af827f00000000000000000000000000000000000000000000000000000000000000006106ae565b905080600b60008282546117c391906134e3565b909155506117d39050818361354a565b91506117de82611687565b600180546000906117f99084906001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061182682612803565b6003805460009061183b908490600f0b6136aa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061187b878561241e565b915060006118a9837f00000000000000000000000000000000000000000000000000000000000000006106ae565b90506118d5817f00000000000000000000000000000000000000000000000000000000000000006106ae565b915083156118f8576118e7828261354a565b6118f1908461354a565b925061190f565b611902828261354a565b61190c90846134e3565b92505b8686101561193257611922838789611628565b925061192f828789611628565b91505b509550959350505050565b60006001600160ff1b038211156116b15760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b03166119b0610f2382611993670de0b6b3a76400008661362e565b600454600160801b90046001600160801b031691908a60006122c5565b600480546001600160801b03928316600160801b0292169190911790556119d686611687565b6119e09082613645565b600380546001600160801b03928316600160801b029216919091179055611a0684611687565b60018054600090611a219084906001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a4e8361282d565b60038054600090611a63908490600f0b6136aa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a9385611687565b60018054601090611ab5908490600160801b90046001600160801b0316613645565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611af984611af38a888a611628565b9061241e565b9050611b06888486611628565b611b1090826134e3565b905086811115611b205786810391505b509695505050505050565b60006001600160701b038211156116b15760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b9757507f0000000000000000000000000000000000000000000000000000000000000000611b95858361354a565b105b15611ba457611ba461222c565b6003549084900390600f0b611bb9848261360e565b905083611bc58661193d565b138015611bfa57507f0000000000000000000000000000000000000000000000000000000000000000611bf8838361275d565b105b15611c0757611c0761222c565b600254600160801b90046001600160801b0316611c49610f2382611c33670de0b6b3a76400008861362e565b6004546001600160801b031691908c60006122c5565b600480546001600160801b0319166001600160801b0392909216919091179055611c73888261354a565b9050611c7e81611687565b600280546001600160801b03928316600160801b029216919091179055611ca483611687565b600180546001600160801b0319166001600160801b0392909216919091179055611ccd8261282d565b600380546001600160801b0319166001600160801b0392909216919091179055611cf687611687565b60018054601090611d18908490600160801b90046001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611d6f611d558483612869565b611d60846000612869565b611d6a919061360e565b61282d565b9050600081600f0b1315611dc45760028054829190600090611d9b9084906001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611df457611dd9816136d7565b60028054600090611d9b9084906001600160801b0316613645565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611e44916001600160801b03169061354a565b905080600003611e585760019150506106c6565b6000611e6385612878565b905080600003611e78576001925050506106c6565b600080611e86838589612914565b9150915080611e9c5760009450505050506106c6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611ed892919061377b565b6040805180830381865af4158015611ef4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1891906137f1565b91509150611f36611f288261193d565b611f3190613815565b612a8f565b925082611f4c57600096505050505050506106c6565b611f5582611687565b60068054600090611f709084906001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f9d81611687565b60068054601090611fbf908490600160801b90046001600160801b03166135ee565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61201c87612c25565b6040518263ffffffff1660e01b81526004016120389190613831565b6040805180830381865af4158015612054573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120789190613840565b915091508061208e575060009485945092505050565b600080861161209e5760006120a8565b6120a883876106ae565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161211391906134e3565b61211d919061354a565b9050806000036121365750600096879650945050505050565b6000612142838361241e565b98600198509650505050505050565b600061217287878761216b88670de0b6b3a764000061354a565b8787612d5f565b979650505050505050565b60006121e26121be61219784670de0b6b3a764000061354a565b61137f670de0b6b3a76400006121ad818a6127ee565b6121b7919061354a565b87906125ff565b6121d090670de0b6b3a76400006134e3565b611af384670de0b6b3a764000061354a565b949350505050565b600080612221856121f9611646565b61220391906134e3565b600154610df1908790600160801b90046001600160801b031661354a565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061228f8561137f85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612285818c6127ee565b61137f919061354a565b91506122bb827f00000000000000000000000000000000000000000000000000000000000000006106ae565b9050935093915050565b6000826000036122d657508461167e565b8115612329576123076122e984876134e3565b6122f385876106ae565b6122fd888a6106ae565b611af391906134e3565b9050600061231585886116b5565b905080821015612323578091505b5061167e565b8285036123385750600061167e565b612363612345848761354a565b61234f85876125ff565b612359888a6106ae565b611af3919061354a565b9695505050505050565b6000612395600e6000612381600286611129565b81526020019081526020016000205461193d565b6123a7600e6000612381600187611129565b6106c6919061360e565b60006123dd7f0000000000000000000000000000000000000000000000000000000000000000836125ff565b6002546123f391906001600160801b03166134e3565b600154612409906001600160801b0316846106ae565b101592915050565b60006106c6826004611df9565b60006106c383670de0b6b3a764000084611628565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612494573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526124bc919081019061393b565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125449190613a1b565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb090606401602060405180830381865afa1580156125ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e29190613a1b565b60006121728787876125f888670de0b6b3a764000061354a565b8787612e13565b60006106c38383670de0b6b3a7640000612e36565b6000808080612665878661265e8b61137f6126378c670de0b6b3a764000061354a565b7f0000000000000000000000000000000000000000000000000000000000000000906125ff565b9190612e36565b9350612691847f00000000000000000000000000000000000000000000000000000000000000006106ae565b915060006126b26126aa89670de0b6b3a764000061354a565b8a9088612e36565b90506126de817f00000000000000000000000000000000000000000000000000000000000000006125ff565b935061270a847f00000000000000000000000000000000000000000000000000000000000000006106ae565b61271490846134e3565b915050945094509450949050565b600081831161273157816106c3565b5090919050565b6000806127508461274a8a888a612e36565b906127ee565b9050611b06888486612e36565b60008061276a8484612e5c565b90925090508061277c5761277c61222c565b5092915050565b60008160000361279c5750670de0b6b3a76400006106c6565b826000036127ac575060006106c6565b60006127b78361193d565b905060006127cc6127c78661193d565b612e98565b90508181026127e3670de0b6b3a764000082613a34565b9050612363816130be565b60006106c383670de0b6b3a764000084612e36565b600060016001607f1b038211156116b15760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061284b575060016001607f1b0382135b156116b15760405163a5353be560e01b815260040160405180910390fd5b600081831361273157816106c3565b6002546000908190612893906001600160801b0316846127ee565b90506128bf7f0000000000000000000000000000000000000000000000000000000000000000826134e3565b6001546001600160801b031611156116c4576001547f00000000000000000000000000000000000000000000000000000000000000009061290a9083906001600160801b031661354a565b610c97919061354a565b61291c6133bb565b60008061292884612c25565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129639190613831565b6040805180830381865af415801561297f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129a39190613840565b93509050826129b8575060009150612a879050565b60006129df6129da8461016001518561014001516106ae90919063ffffffff16565b61193d565b6129ff6129da8561012001518661010001516125ff90919063ffffffff16565b612a09919061360e565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b6a9190613a62565b935093509350935080612b865750600098975050505050505050565b868414612bb757612b9684611687565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612be857612bc78361282d565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612c1657612bf882611687565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c2d61340d565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612d259116613253565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612d5792900416613253565b905292915050565b600080612d6f88888787876132c9565b9050612d8985611678612d82898c6134e3565b86906106ae565b9750612d96848985611628565b975087811015612da857612da861222c565b878103670de0b6b3a76400008110612ddd57612dd6612dcf670de0b6b3a7640000886127ee565b8290612783565b9050612df5565b612df2612dcf670de0b6b3a76400008861241e565b90505b80881015612e0557612e0561222c565b909603979650505050505050565b600080612e248888888888886132f8565b909250905080611b2057611b2061222c565b6000826000190484118302158202612e4d57600080fd5b50910281810615159190040190565b600080600083612e6b8661193d565b612e75919061360e565b90506000811215612e8d5760008092509250506106a7565b946001945092505050565b6000808213612eba5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f3d9084901c61193d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130d957506000919050565b680755bf798b4a1bf1e58212613102576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061236374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61193d565b600080670de0b6b3a76400006132676106cc565b613271919061362e565b905080831161328157600061328b565b61328b818461354a565b9150610c976132c2670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061362e565b839061241e565b60006132d58585612783565b6132ee6132e686611678868b6125ff565b859085612e36565b61236391906134e3565b600080600061330a89898888886132c9565b905061331a86611678898b6134e3565b9750878110156133315760008092509250506133b0565b87810361333f818688612e36565b9050670de0b6b3a7640000811061336c57613365612dcf670de0b6b3a7640000896127ee565b9050613384565b613381612dcf670de0b6b3a76400008961241e565b90505b61338e81866127ee565b9050808a10156133a6576000809350935050506133b0565b8903925060019150505b965096945050505050565b6040518061012001604052806133cf61340d565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561348457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156134b057600080fd5b8501606081880312156134c257600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106c6576106c66134cd565b60006020828403121561350857600080fd5b81356001600160a01b0381168114610c9757600080fd5b80151581146105d257600080fd5b60006020828403121561353f57600080fd5b8135610c978161351f565b818103818111156106c6576106c66134cd565b6000808335601e1984360301811261357457600080fd5b83018035915067ffffffffffffffff82111561358f57600080fd5b6020019150368190038213156106a757600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826135c9576135c96135a4565b500690565b6001600160701b0381811683821601908082111561277c5761277c6134cd565b6001600160801b0381811683821601908082111561277c5761277c6134cd565b818103600083128015838313168383128216171561277c5761277c6134cd565b80820281158282048414176106c6576106c66134cd565b6001600160801b0382811682821603908082111561277c5761277c6134cd565b8082018281126000831280158216821582161715613685576136856134cd565b505092915050565b60006020828403121561369f57600080fd5b8151610c978161351f565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106c6576106c66134cd565b600081600f0b60016001607f1b031981036136f4576136f46134cd565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061378f8285516136fd565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561380457600080fd5b505080516020909101519092909150565b6000600160ff1b820161382a5761382a6134cd565b5060000390565b61018081016106c682846136fd565b6000806040838503121561385357600080fd5b8251915060208301516138658161351f565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156138af576138af613870565b604052919050565b600067ffffffffffffffff8211156138d1576138d1613870565b5060051b60200190565b600082601f8301126138ec57600080fd5b815160206139016138fc836138b7565b613886565b82815260059290921b8401810191818101908684111561392057600080fd5b8286015b84811015611b205780518352918301918301613924565b60008060006060848603121561395057600080fd5b835167ffffffffffffffff8082111561396857600080fd5b818601915086601f83011261397c57600080fd5b8151602061398c6138fc836138b7565b82815260059290921b8401810191818101908a8411156139ab57600080fd5b8286015b848110156139e3578051868111156139c75760008081fd5b6139d58d86838b01016138db565b8452509183019183016139af565b50918901519197509093505050808211156139fd57600080fd5b50613a0a868287016138db565b925050604084015190509250925092565b600060208284031215613a2d57600080fd5b5051919050565b600082613a4357613a436135a4565b600160ff1b821460001984141615613a5d57613a5d6134cd565b500590565b60008060008060808587031215613a7857600080fd5b84519350602085015192506040850151915060608501516134c28161351f56fea26469706673582212208b48fd1de769e0bf7c67334a3434f0b2d1931de177b1fda5d6feaf99b225e84c64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
