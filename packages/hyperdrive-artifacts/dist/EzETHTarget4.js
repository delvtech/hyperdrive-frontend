export const EzETHTarget4 = {
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
                },
                {
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004d9938038062004d9983398101604081905262000035916200026c565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c05260c0808601516101e0526101008087015190915260e08087015190526101208087015190915291850180515190925281518101516101409081528251604090810151610160908152935160609081015161018090815282890151871661020052908801516102205291870151600a80549187166001600160a01b0319928316179055938701516008805491871691861691909117905590860151600980549186169190941617909255918316610240819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000157573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017d919062000389565b6001600160a01b03166102605250620003b0915050565b6040516101c081016001600160401b0381118282101715620001c657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001e257600080fd5b50565b8051620001f281620001cc565b919050565b6000608082840312156200020a57600080fd5b604051608081016001600160401b03811182821017156200023b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102408112156200028257600080fd5b610220808212156200029357600080fd5b6200029d62000194565b9150620002aa85620001e5565b8252620002ba60208601620001e5565b6020830152620002cd60408601620001e5565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200032c818701620001e5565b9083015261016062000340868201620001e5565b9083015261018062000354868201620001e5565b908301526101a06200036987878301620001f7565b81840152508193506200037e818601620001e5565b925050509250929050565b6000602082840312156200039c57600080fd5b8151620003a981620001cc565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516148786200052160003960006122b20152600061217f015260005050600050506000818160fa01528181610336015281816104e30152610e2d015260008181610e070152818161125e01528181611a6201528181611ac50152818161209a015281816125cd0152818161278301526127bf01526000818161015b01528181610de1015281816110d8015261113c015260006116b10152600081816117d7015281816123d5015261244e015260008181610af3015281816111d6015281816117ab0152612422015260006123a101526000818161019d01528181610e53015281816110b6015261115d01526000818161017c0152818161057901528181610a2e0152611fb50152600081816108d40152818161096101526109c601526000818161154b015261220b0152600050506148786000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614346565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046143aa565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c1610146610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107ae565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb89866107f4565b9150915061021261020a6108cd565b826004610903565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b039091169061441a565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c549192509061029990839061442d565b905060008060006102a986610d98565b90506102b481610ed2565b91506102c76102c288610f09565b610f37565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610ed2565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b818761441a565b9190610f5d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610f7b565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c614440565b8a610f99565b60006103c386611041565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610f7b565b6103fd565b60005b90508e600061040d828a8f61104e565b90508c61041d6020820182614440565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a6040870160208801614477565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c61107d565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b60006105596108cd565b905060006105706105686108cd565b846004610903565b9050600061059e7f00000000000000000000000000000000000000000000000000000000000000008461442d565b905060008060006105b08d8887611090565b92509250925080600b60008282546105c8919061442d565b90915550600090506105db84898d611210565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c6107f4565b50506106168e848a88611238565b600061062360028761143f565b905060008f9050610647828e60000160208101906106419190614440565b83610f99565b848a8e846106586020830183614440565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b8888611474565b61069f6040880160208901614477565b6106b5898f8c6106af919061441a565b9061149c565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561074d57604051631574f9f360e01b815260040160405180910390fd5b565b600061075e6020830183614440565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107a9916001600160801b0390911690600f0b6114b1565b905090565b6000806107bd878787866114d0565b90506107e96107d182866301e133806114e7565b6107e383670de0b6b3a764000061441a565b90610f7b565b979650505050505050565b600080806108086040850160208601614477565b1561082d576108238561081e6040870187614494565b61150d565b9093509050610849565b5034610845856108406040870187614494565b611529565b8492505b61085161107d565b915080156108c457604051600090339083908381818185875af1925050503d806000811461089b576040519150601f19603f3d011682016040523d82523d6000602084013e6108a0565b606091505b50509050806108c2576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006108f97f0000000000000000000000000000000000000000000000000000000000000000426144f1565b6107a9904261441a565b600083815260076020526040812080546001600160801b031615158061092857504285115b1561093e57546001600160801b03169050610d91565b6000806109496108cd565b905080870361095a578591506109f4565b60006109867f00000000000000000000000000000000000000000000000000000000000000008961442d565b90505b6000818152600760205260409020546001600160801b0316925081811480156109b0575082155b156109b9578692505b826000036109f2576109eb7f00000000000000000000000000000000000000000000000000000000000000008261442d565b9050610989565b505b6109fd826115c6565b83546001600160801b0319166001600160801b0391909116178355610a21866115f0565b5060009050600781610a537f00000000000000000000000000000000000000000000000000000000000000008b61441a565b815260208101919091526040016000908120546001600160801b03169150610a7c60028a61143f565b6000818152600e60205260408120549192508a8a8315610bc25760019250600080610aab86898c866000611794565b9150915080600b6000828254610ac1919061442d565b90915550610add905086600084610ad781610f09565b88611863565b610ae7818361442d565b9150610b1786838a8d877f00000000000000000000000000000000000000000000000000000000000000006119dd565b9150610b2b610b26838561149c565b611a21565b60058054600290610b4c9084906201000090046001600160701b0316614505565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b79826115c6565b60058054601090610b9b908490600160801b90046001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610bcf60018461143f565b6000818152600e60205260409020549091508015610cde5760019450600080610bfc838b8e886001611794565b9150915080600b6000828254610c12919061442d565b90915550610c2e905083600084610c2881610f09565b8a611a4b565b610c38818361441a565b9150610c47610b26838761149c565b60058054600290610c689084906201000090046001600160701b0316614505565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c95826115c6565b60058054601090610cb7908490600160801b90046001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d1657610d0a610cf087610f09565b610cf983610f09565b610d039190614545565b6000611c3c565b610d148e8e611cef565b505b6000610d218f611e7a565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d7a959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610da0614281565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610e989116611f6a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610eca92900416611f6a565b905292915050565b6000806000610ee084611fe0565b9150915080610f0257604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f335760405163396ea70160e11b815260040160405180910390fd5b5090565b610f408161206d565b61078557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610f7457600080fd5b5091020490565b6000610f9083670de0b6b3a764000084610f5d565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610fcb90849061442d565b90915550506000838152600e602052604081208054839290610fee90849061442d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f93826004611cef565b60006110606040830160208401614477565b1561106c575082610d91565b611076848461149c565b9050610d91565b60006107a9670de0b6b3a764000061217a565b60008060006110fc6110a0610788565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061232d565b915085611109838761234e565b111561111757611117612363565b6000806000611181611127610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114d0565b905061119789670de0b6b3a7640000838b61237c565b509194509092506111aa9050828461441a565b6111b4908661441a565b9450611200886111fa8b6111c8868a61441a565b8b6111d38e8261248a565b8e7f00000000000000000000000000000000000000000000000000000000000000006124a0565b9061234e565b9550909250505093509350939050565b60006112226040830160208401614477565b1561122e575082610d91565b6110768484610f7b565b6001546001600160801b03168381101561125457611254612363565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061128c908390600f0b6114b1565b101561129a5761129a612363565b6003546112e9906112e490600160801b90046001600160801b03166112c7670de0b6b3a764000086614565565b600454600160801b90046001600160801b031691908960016124c5565b6115c6565b600480546001600160801b03928316600160801b02921691909117905561130f816115c6565b600180546001600160801b0319166001600160801b0392909216919091179055611338856115c6565b6001805460109061135a908490600160801b90046001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611387856115c6565b600380546010906113a9908490600160801b90046001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113d883612582565b90506113f6816113e788610f09565b6113f19084614545565b611c3c565b6113ff846125c6565b61140b5761140b612363565b600061141685611041565b90508061143657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114695760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006114866040830160208401614477565b15611495576110768484610f7b565b5082610d91565b6000610f908383670de0b6b3a7640000610f5d565b6000806114be8484612626565b909250905080610f0257610f02612363565b600061008e826114e1858888610f5d565b90612662565b60008260001904841183021582026114fe57600080fd5b50910281810615159190040190565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561159c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c0919061457c565b50505050565b60006001600160801b03821115610f3357604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611613908490600160801b90046001600160801b031661149c565b6005546201000090046001600160701b0316925090508181111561178f57600061163d838361441a565b905061164c6112e482866126d7565b6005805460109061166e908490600160801b90046001600160801b0316614599565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116a78583610f7b90919063ffffffff16565b905060006116d5827f000000000000000000000000000000000000000000000000000000000000000061149c565b905080600b60008282546116e9919061442d565b909155506116f99050818361441a565b9150611704826115c6565b6001805460009061171f9084906001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061174c826126ec565b60038054600090611761908490600f0b6145b9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117a18785610f7b565b915060006117cf837f000000000000000000000000000000000000000000000000000000000000000061149c565b90506117fb817f000000000000000000000000000000000000000000000000000000000000000061149c565b9150831561181e5761180d828261441a565b611817908461441a565b9250611835565b611828828261441a565b611832908461442d565b92505b8686101561185857611848838789610f5d565b9250611855828789610f5d565b91505b509550959350505050565b600354600160801b90046001600160801b03166118ac6112e48261188f670de0b6b3a764000086614565565b600454600160801b90046001600160801b031691908a60006124c5565b600480546001600160801b03928316600160801b0292169190911790556118d2866115c6565b6118dc9082614599565b600380546001600160801b03928316600160801b029216919091179055611902846115c6565b6001805460009061191d9084906001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061194a83612716565b6003805460009061195f908490600f0b6145b9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061198f856115c6565b600180546010906119b1908490600160801b90046001600160801b0316614599565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806119ef846107e38a888a610f5d565b90506119fc888486610f5d565b611a06908261442d565b905086811115611a165786810391505b509695505050505050565b60006001600160701b03821115610f335760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a8d57507f0000000000000000000000000000000000000000000000000000000000000000611a8b858361441a565b105b15611a9a57611a9a612363565b6003549084900390600f0b611aaf8482614545565b905083611abb86610f09565b138015611af057507f0000000000000000000000000000000000000000000000000000000000000000611aee83836114b1565b105b15611afd57611afd612363565b600254600160801b90046001600160801b0316611b3f6112e482611b29670de0b6b3a764000088614565565b6004546001600160801b031691908c60006124c5565b600480546001600160801b0319166001600160801b0392909216919091179055611b69888261441a565b9050611b74816115c6565b600280546001600160801b03928316600160801b029216919091179055611b9a836115c6565b600180546001600160801b0319166001600160801b0392909216919091179055611bc382612716565b600380546001600160801b0319166001600160801b0392909216919091179055611bec876115c6565b60018054601090611c0e908490600160801b90046001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c65611c4b8483612752565b611c56846000612752565b611c609190614545565b612716565b9050600081600f0b1315611cba5760028054829190600090611c919084906001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611cea57611ccf816145e6565b60028054600090611c919084906001600160801b0316614599565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d3a916001600160801b03169061441a565b905080600003611d4e576001915050610f93565b6000611d5985612761565b905080600003611d6e57600192505050610f93565b600080611d7c838589612803565b9150915080611d92576000945050505050610f93565b600080611d9f8489612910565b91509150611dbd611daf82610f09565b611db89061460c565b61206d565b925082611dd35760009650505050505050610f93565b611ddc826115c6565b60068054600090611df79084906001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e24816115c6565b60068054601090611e46908490600160801b90046001600160801b0316614525565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611e91611e8c86610d98565b611fe0565b9150915080611ea7575060009485945092505050565b6000808611611eb7576000611ec1565b611ec1838761149c565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611f2c919061442d565b611f36919061441a565b905080600003611f4f5750600096879650945050505050565b6000611f5b8383610f7b565b98600198509650505050505050565b600080670de0b6b3a7640000611f7e6108cd565b611f889190614565565b9050808311611f98576000611fa2565b611fa2818461441a565b9150610d91611fd9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614565565b8390610f7b565b6000806000806000611ff186612a00565b915091508061200857506000958695509350505050565b6120158660a00151610f09565b61201e87612d20565b8361202c8960000151610f09565b6120369190614628565b6120409190614628565b61204a9190614545565b9250505060008112156120635750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806120bf8787877f00000000000000000000000000000000000000000000000000000000000000008d612d84565b9350935093509350806120db5750600098975050505050505050565b86841461210c576120eb846115c6565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461213d5761211c83612716565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461216b5761214d826115c6565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156121db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612203919081019061471b565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061228b91906147fb565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb090606401602060405180830381865afa158015612301573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061232591906147fb565b949350505050565b60006107e987878761234788670de0b6b3a764000061441a565b8787612e9c565b6000610f908383670de0b6b3a76400006114e7565b60405163bb55fd2760e01b815260040160405180910390fd5b60008080806123cd87866123c68b6111fa61239f8c670de0b6b3a764000061441a565b7f00000000000000000000000000000000000000000000000000000000000000009061234e565b91906114e7565b93506123f9847f000000000000000000000000000000000000000000000000000000000000000061149c565b9150600061241a61241289670de0b6b3a764000061441a565b8a90886114e7565b9050612446817f000000000000000000000000000000000000000000000000000000000000000061234e565b9350612472847f000000000000000000000000000000000000000000000000000000000000000061149c565b61247c908461442d565b915050945094509450949050565b60008183116124995781610f90565b5090919050565b6000806124b8846124b28a888a6114e7565b906126d7565b90506119fc8884866114e7565b6000826000036124d657508461008e565b8115612548576125076124e9848761442d565b6124f3858761149c565b6124fd888a61149c565b6107e3919061442d565b905060006125158588612ebf565b90506000612523868961248a565b90508183101561253557819250612541565b80831115612541578092505b505061008e565b8285036125575750600061008e565b61008b612564848761441a565b61256e858761234e565b612578888a61149c565b6107e3919061441a565b60006125aa600e600061259660028661143f565b815260200190815260200160002054610f09565b6125bc600e600061259660018761143f565b610f939190614545565b60006125f27f00000000000000000000000000000000000000000000000000000000000000008361234e565b60025461260891906001600160801b031661442d565b60015461261e906001600160801b03168461149c565b101592915050565b60008060008361263586610f09565b61263f9190614545565b905060008112156126575760008092509250506108c6565b946001945092505050565b60008160000361267b5750670de0b6b3a7640000610f93565b8260000361268b57506000610f93565b600061269683610f09565b905060006126ab6126a686610f09565b612ece565b90508181026126c2670de0b6b3a764000082614814565b90506126cd816130f4565b9695505050505050565b6000610f9083670de0b6b3a7640000846114e7565b600060016001607f1b03821115610f335760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612734575060016001607f1b0382135b15610f335760405163a5353be560e01b815260040160405180910390fd5b60008183136124995781610f90565b600254600090819061277c906001600160801b0316846126d7565b90506127a87f00000000000000000000000000000000000000000000000000000000000000008261442d565b6001546001600160801b031611156127fd576001547f0000000000000000000000000000000000000000000000000000000000000000906127f39083906001600160801b031661441a565b610d91919061441a565b50919050565b61280b6142e2565b60008061281784610d98565b9050600061282482611fe0565b93509050826128395750600091506129089050565b600061286061285b84610160015185610140015161149c90919063ffffffff16565b610f09565b61288061285b85610120015186610100015161234e90919063ffffffff16565b61288a9190614545565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806129288660c001518760e00151612626565b915091508061293f576000809350935050506108c6565b600061294b8784613289565b9250905081158061295a575080155b1561296e57600080945094505050506108c6565b600061297a8883613398565b9050806000036129945760008095509550505050506108c6565b876060015181116129ab57945092506108c6915050565b50606087015160006129bf8986858b613469565b9050806000036129da576000809650965050505050506108c6565b8281106129f2576000809650965050505050506108c6565b909890975095505050505050565b6000806000612a2561285b85610160015186610140015161149c90919063ffffffff16565b612a4561285b86610120015187610100015161234e90919063ffffffff16565b612a4f9190614545565b9050600080612a6686600001518760200151612626565b9150915080612a7d57506000958695509350505050565b6000831315612bbe5760008390506000612acb886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612abc919061441a565b8d606001518e6080015161397e565b9350905082612ae4575060009788975095505050505050565b818110612b82576000612b1e858a60400151858c60e00151670de0b6b3a7640000612b0f919061441a565b8d606001518e60800151613a8a565b9450905083158015612b3357508860c0015183105b15612b4a5750600098600198509650505050505050565b83612b6057506000988998509650505050505050565b612b6981610f09565b612b729061460c565b9960019950975050505050505050565b6000886020015112612baa57612ba18860a001518561285b919061441a565b611f5b9061460c565b60a08801518851612ba19161285b9161441a565b6000831215612d11576000612bd28461460c565b90506000612c068489604001518a60e00151670de0b6b3a7640000612bf7919061441a565b8b606001518c60800151613b4d565b9350905082612c1f575060009788975095505050505050565b818110612ca4576000612c59858a60400151858c60e00151670de0b6b3a7640000612c4a919061441a565b8d606001518e60800151613bf9565b9450905083158015612c6e57508860c0015183105b15612c855750600098600198509650505050505050565b83612c9b57506000988998509650505050505050565b612b7281610f09565b6000612cd6858a604001518b60e00151670de0b6b3a7640000612cc7919061441a565b8c606001518d60800151613cd0565b9450905083612cf057506000988998509650505050505050565b612b72612d078a6060015184866107e3919061441a565b61285b908361442d565b50600095600195509350505050565b6000612d5361285b836101200151670de0b6b3a7640000612d41919061441a565b606085015161010086015191906114e7565b6125bc61285b846101600151670de0b6b3a7640000612d72919061441a565b60608601516101408701519190610f5d565b60008060008084600003612da357508792508691508590506001612e90565b600085612daf8b610f09565b612db99190614628565b9050612dc487610f09565b811215612ddf57600080600080945094509450945050612e90565b80945060008912612dff57612df861285b868b8d610f5d565b9350612e22565b612e1661285b612e0e8b61460c565b87908d6114e7565b612e1f9061460c565b93505b600080612e2f8c8c612626565b9150915080612e4e576000806000809650965096509650505050612e90565b6000612e5a8888612626565b9250905081612e7a57600080600080975097509750975050505050612e90565b612e858b8285610f5d565b955060019450505050505b95509550955095915050565b600080612ead888888888888613a8a565b909250905080611a1657611a16612363565b60008183116127fd5782610f90565b6000808213612ef05760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f739084901c610f09565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361310f57506000919050565b680755bf798b4a1bf1e58212613138576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906126cd74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f09565b60008060008460a00151126132a6575050608082015160016108c6565b60008460a001516132b69061460c565b905060006132f285876101000151886000015160e00151670de0b6b3a76400006132e0919061441a565b89516060810151608090910151613b4d565b93509050821580613301575080155b15613314576000809350935050506108c6565b600061332083836126d7565b9050670de0b6b3a7640000811161335c5780670de0b6b3a76400000394506133558760c001518661149c90919063ffffffff16565b945061336b565b600080945094505050506108c6565b866080015185111561338a5786608001516001945094505050506108c6565b506001925050509250929050565b6000806133ce8460c001518560e00151866101000151876000015160a001516133c088610f09565b6133c99061460c565b612d84565b875160408101929092526020820192909252919091529050806133f5576000915050610f93565b60006134048560000151611fe0565b925090508161341857600092505050610f93565b8460200151811061342e57600092505050610f93565b600085606001518660400151613444919061442d565b905061345f82876020015183610f5d9092919063ffffffff16565b6126cd908261441a565b60008085606001518660400151613480919061442d565b6020870151606088015191925060009161349a9184610f5d565b90508660a001516000036134b15791506123259050565b600080808960048810156134c457600497505b60005b88811015613820576134d9868b612ebf565b955060006135028360c001518460e00151856101000151866000015160a001516133c08c610f09565b8651604081019290925260208201929092529190915290508061353057600098505050505050505050612325565b600061353f8e60000151611fe0565b925090508161355a5760009950505050505050505050612325565b61356584828b613d7f565b1561357b57879950505050505050505050612325565b60008460a0015113156136e457835180516020820151604083015160a084015160e0909401516000946135cf949392916135bd90670de0b6b3a764000061441a565b8a51606081015160809091015161397e565b93509050826135eb5760009a5050505050505050505050612325565b808560a00151106136e2576135ff85613de4565b90995092508261361c5760009a5050505050505050505050612325565b6136418560c001518660e00151876101000151886000015160a001516133c08e610f09565b885160408101929092526020820192909252919091529250826136715760009a5050505050505050505050612325565b845180516020820151604083015160a084015160e0909401516136a194906135bd90670de0b6b3a764000061441a565b93509050826136bd5760009a5050505050505050505050612325565b8e60a0015181116136da57889a5050505050505050505050612325565b5050506134c7565b505b60006136f5858f8760a00151613eba565b9350905082158061370e5750670de0b6b3a76400008110155b156137265760009a5050505050505050505050612325565b80670de0b6b3a7640000039050600061375361285b8760400151886020015161234e90919063ffffffff16565b61376061285b858e61149c565b61376a9190614545565b9050881580613788575061377d89614215565b61378682614215565b125b15613797578098508997508296505b60008113156137bf576137ae8b6107e38385610f7b565b6137b8908b61442d565b9950613811565b60008112156138085760006137d98c6107e385818661460c565b90508a8110156137ed57808b039a50613802565b60009c50505050505050505050505050612325565b50613811565b50505050613820565b846001019450505050506134c7565b5060006138488260c001518360e00151846101000151856000015160a001516133c08b610f09565b85516040810192909252602082019290925291909152905080613875576000975050505050505050612325565b60006138848360000151610ed2565b905060006138a661285b8560400151866020015161234e90919063ffffffff16565b6138b361285b848c61149c565b6138bd9190614545565b90506138c887614215565b6138d182614215565b12156138de578795508194505b6139056138f9655af3107a4000670de0b6b3a764000061441a565b6020860151908b6114e7565b6040850151613915908790610f7b565b10806139555750613943613937655af3107a4000670de0b6b3a764000061442d565b6020860151908b610f5d565b60408501516139539087906126d7565b115b1561396c5760009950505050505050505050612325565b50939c9b505050505050505050505050565b60008060008812156139a0576139938861460c565b61399d908761442d565b95505b6000806139ad8b8b612626565b91509150806139c457600080935093505050613a7e565b60006139d3838b8a8a8a61422d565b905060006139f06139e88a6114e18a8e61234e565b8990896114e7565b905080821015613a0a576000809550955050505050613a7e565b808203670de0b6b3a76400008110613a3f57613a38613a31670de0b6b3a76400008c610f7b565b8290612662565b9050613a57565b613a54613a31670de0b6b3a76400008c6126d7565b90505b8b811015613a7057600080965096505050505050613a7e565b8b9003955060019450505050505b97509795505050505050565b6000806000613a9c898988888861425c565b9050613aac866114e1898b61442d565b975087811015613ac3576000809250925050613b42565b878103613ad18186886114e7565b9050670de0b6b3a76400008110613afe57613af7613a31670de0b6b3a7640000896126d7565b9050613b16565b613b13613a31670de0b6b3a764000089610f7b565b90505b613b2081866126d7565b9050808a1015613b3857600080935093505050613b42565b8903925060019150505b965096945050505050565b6000806000613b5f888888888861425c565b90506000613b8a670de0b6b3a7640000613b798888610f7b565b613b83919061442d565b83906126d7565b9050670de0b6b3a76400008110613bb757613bb0613a31670de0b6b3a7640000896126d7565b9050613bcf565b613bcc613a31670de0b6b3a764000089610f7b565b90505b80881015613be557600080935093505050613bef565b8703925060019150505b9550959350505050565b6000806000613c0b898988888861425c565b905086881015613c22576000809250925050613b42565b9686900396613c318887612662565b975087811015613c48576000809250925050613b42565b878103613c568186886114e7565b9050670de0b6b3a76400008110613c8357613c7c613a31670de0b6b3a7640000896126d7565b9050613c9b565b613c98613a31670de0b6b3a764000089610f7b565b90505b613ca581866126d7565b905089811015613cbd57600080935093505050613b42565b9890980398600198509650505050505050565b6000806000613ce2888888888861422d565b90506000613d06670de0b6b3a7640000613cfc88886126d7565b611fd9919061442d565b9050670de0b6b3a76400008110613d3357613d2c613a31670de0b6b3a764000089610f7b565b9050613d4b565b613d48613a31670de0b6b3a7640000896126d7565b90505b613d558186610f7b565b905088811015613d6d57600080935093505050613bef565b97909703976001975095505050505050565b6020830151600090613d9190846126d7565b6040850151613da1908490610f7b565b1015801561232557506020840151613dca908461032b633b9aca00670de0b6b3a764000061442d565b6040850151613dda9084906126d7565b1115949350505050565b60008060008360e0015113613dfe57506000928392509050565b6000613e0d8460000151612d20565b90506000613e39856040015186606001518760400151613e2d919061442d565b602088015191906114e7565b905060008212613e605780821015613e5357819003613e76565b5060009485945092505050565b613e698261460c565b613e73908261442d565b90505b60e085015160c0860151613e8b9183906114e7565b9050808560c001511015613ea6575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613ede57855160400151613ed790859061442d565b9050613f19565b6000613ee98561460c565b875160400151909150811015613f09578651604001518190039150613f17565b600080935093505050612908565b505b855180516020909101516000918291613f329190612626565b9150915080613f4a5760008094509450505050612908565b875160e0810151604090910151600091613f7f91613f7391613f6c9190612662565b8a9061149c565b6101008b0151906126d7565b895160e0810151608090910151613faa91613f9e916114e1908861149c565b8b5160600151906126d7565b613fb4919061442d565b90506000613fec613fe0613fd98c6000015160e001518861266290919063ffffffff16565b8b9061234e565b6101008c015190610f7b565b90508082101561400757600080965096505050505050612908565b80820391506000614049858c60000151604001518d6000015160e00151670de0b6b3a7640000614037919061441a565b8e51606081015160809091015161425c565b905060006140738c6000015160e00151670de0b6b3a764000061406c919061441a565b8890612662565b905080821015614090576000809850985050505050505050612908565b8b516080810151606090910151918303916140ac9183916114e7565b9050670de0b6b3a764000081106140f0578b5160e001516140e990613a31906140dd90670de0b6b3a764000061441a565b8e5160e00151906126d7565b905061411f565b8b5160e0015161411c90613a319061411090670de0b6b3a764000061441a565b8e5160e0015190610f7b565b90505b8b516060015161413290859083906114e7565b935083670de0b6b3a764000011156141565783670de0b6b3a764000003935061416a565b600060019850985050505050505050612908565b60008c60e00151126141cd5760c08c015160e08d0151614189916126d7565b9250670de0b6b3a76400008311156141ae576000809850985050505050505050612908565b670de0b6b3a764000092909203916141c6848461149c565b9350614202565b6141ff6141e68d60c001518e60e001516107e39061460c565b6141f890670de0b6b3a764000061442d565b859061149c565b93505b50919a60019a5098505050505050505050565b60008082126142245781610f93565b610f938261460c565b60006142398585612662565b61425261424a866114e1868b61149c565b859085610f5d565b61008b919061442d565b60006142688585612662565b614252614279866114e1868b61234e565b8590856114e7565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806142f6614281565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156127fd57600080fd5b600080600080600060a0868803121561435e57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561439157600080fd5b61439d88828901614334565b9150509295509295909350565b600080600080608085870312156143c057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156143ec57600080fd5b6143f887828801614334565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f9357610f93614404565b80820180821115610f9357610f93614404565b60006020828403121561445257600080fd5b81356001600160a01b0381168114610d9157600080fd5b801515811461078557600080fd5b60006020828403121561448957600080fd5b8135610d9181614469565b6000808335601e198436030181126144ab57600080fd5b83018035915067ffffffffffffffff8211156144c657600080fd5b6020019150368190038213156108c657600080fd5b634e487b7160e01b600052601260045260246000fd5b600082614500576145006144db565b500690565b6001600160701b03818116838216019080821115610f0257610f02614404565b6001600160801b03818116838216019080821115610f0257610f02614404565b8181036000831280158383131683831282161715610f0257610f02614404565b8082028115828204841417610f9357610f93614404565b60006020828403121561458e57600080fd5b8151610d9181614469565b6001600160801b03828116828216039080821115610f0257610f02614404565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610f9357610f93614404565b600081600f0b60016001607f1b0319810361460357614603614404565b60000392915050565b6000600160ff1b820161462157614621614404565b5060000390565b808201828112600083128015821682158216171561464857614648614404565b505092915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561468f5761468f614650565b604052919050565b600067ffffffffffffffff8211156146b1576146b1614650565b5060051b60200190565b600082601f8301126146cc57600080fd5b815160206146e16146dc83614697565b614666565b82815260059290921b8401810191818101908684111561470057600080fd5b8286015b84811015611a165780518352918301918301614704565b60008060006060848603121561473057600080fd5b835167ffffffffffffffff8082111561474857600080fd5b818601915086601f83011261475c57600080fd5b8151602061476c6146dc83614697565b82815260059290921b8401810191818101908a84111561478b57600080fd5b8286015b848110156147c3578051868111156147a75760008081fd5b6147b58d86838b01016146bb565b84525091830191830161478f565b50918901519197509093505050808211156147dd57600080fd5b506147ea868287016146bb565b925050604084015190509250925092565b60006020828403121561480d57600080fd5b5051919050565b600082614823576148236144db565b600160ff1b82146000198414161561483d5761483d614404565b50059056fea2646970667358221220f103d03c3918ee256e619a8d63389b8906cbe86c8fbbb18fb2edd3b8edc7f31864736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
