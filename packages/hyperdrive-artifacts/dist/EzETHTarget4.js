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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004d7a38038062004d7a83398101604081905262000035916200026c565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c05260c0808601516101e0526101008087015190915260e08087015190526101208087015190915291850180515190925281518101516101409081528251604090810151610160908152935160609081015161018090815282890151871661020052908801516102205291870151600a80549187166001600160a01b0319928316179055938701516008805491871691861691909117905590860151600980549186169190941617909255918316610240819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000157573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017d919062000389565b6001600160a01b03166102605250620003b0915050565b6040516101c081016001600160401b0381118282101715620001c657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001e257600080fd5b50565b8051620001f281620001cc565b919050565b6000608082840312156200020a57600080fd5b604051608081016001600160401b03811182821017156200023b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102408112156200028257600080fd5b610220808212156200029357600080fd5b6200029d62000194565b9150620002aa85620001e5565b8252620002ba60208601620001e5565b6020830152620002cd60408601620001e5565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200032c818701620001e5565b9083015261016062000340868201620001e5565b9083015261018062000354868201620001e5565b908301526101a06200036987878301620001f7565b81840152508193506200037e818601620001e5565b925050509250929050565b6000602082840312156200039c57600080fd5b8151620003a981620001cc565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516148596200052160003960006122b20152600061217f015260005050600050506000818160fa01528181610336015281816104e30152610e2d015260008181610e070152818161125e01528181611a6201528181611ac50152818161209a015281816125ae0152818161276401526127a001526000818161015b01528181610de1015281816110d8015261113c015260006116b10152600081816117d7015281816123d5015261244e015260008181610af3015281816111d6015281816117ab0152612422015260006123a101526000818161019d01528181610e53015281816110b6015261115d01526000818161017c0152818161057901528181610a2e0152611fb50152600081816108d40152818161096101526109c601526000818161154b015261220b0152600050506148596000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614327565b61007c565b6040519081526020015b60405180910390f35b61006761006236600461438b565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c1610146610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107ae565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb89866107f4565b9150915061021261020a6108cd565b826004610903565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b03909116906143fb565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c549192509061029990839061440e565b905060008060006102a986610d98565b90506102b481610ed2565b91506102c76102c288610f09565b610f37565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610ed2565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b81876143fb565b9190610f5d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610f7b565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c614421565b8a610f99565b60006103c386611041565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610f7b565b6103fd565b60005b90508e600061040d828a8f61104e565b90508c61041d6020820182614421565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a6040870160208801614458565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c61107d565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b60006105596108cd565b905060006105706105686108cd565b846004610903565b9050600061059e7f00000000000000000000000000000000000000000000000000000000000000008461440e565b905060008060006105b08d8887611090565b92509250925080600b60008282546105c8919061440e565b90915550600090506105db84898d611210565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c6107f4565b50506106168e848a88611238565b600061062360028761143f565b905060008f9050610647828e60000160208101906106419190614421565b83610f99565b848a8e846106586020830183614421565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b8888611474565b61069f6040880160208901614458565b6106b5898f8c6106af91906143fb565b9061149c565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561074d57604051631574f9f360e01b815260040160405180910390fd5b565b600061075e6020830183614421565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107a9916001600160801b0390911690600f0b6114b1565b905090565b6000806107bd878787866114d0565b90506107e96107d182866301e133806114e7565b6107e383670de0b6b3a76400006143fb565b90610f7b565b979650505050505050565b600080806108086040850160208601614458565b1561082d576108238561081e6040870187614475565b61150d565b9093509050610849565b5034610845856108406040870187614475565b611529565b8492505b61085161107d565b915080156108c457604051600090339083908381818185875af1925050503d806000811461089b576040519150601f19603f3d011682016040523d82523d6000602084013e6108a0565b606091505b50509050806108c2576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006108f97f0000000000000000000000000000000000000000000000000000000000000000426144d2565b6107a990426143fb565b600083815260076020526040812080546001600160801b031615158061092857504285115b1561093e57546001600160801b03169050610d91565b6000806109496108cd565b905080870361095a578591506109f4565b60006109867f00000000000000000000000000000000000000000000000000000000000000008961440e565b90505b6000818152600760205260409020546001600160801b0316925081811480156109b0575082155b156109b9578692505b826000036109f2576109eb7f00000000000000000000000000000000000000000000000000000000000000008261440e565b9050610989565b505b6109fd826115c6565b83546001600160801b0319166001600160801b0391909116178355610a21866115f0565b5060009050600781610a537f00000000000000000000000000000000000000000000000000000000000000008b6143fb565b815260208101919091526040016000908120546001600160801b03169150610a7c60028a61143f565b6000818152600e60205260408120549192508a8a8315610bc25760019250600080610aab86898c866000611794565b9150915080600b6000828254610ac1919061440e565b90915550610add905086600084610ad781610f09565b88611863565b610ae7818361440e565b9150610b1786838a8d877f00000000000000000000000000000000000000000000000000000000000000006119dd565b9150610b2b610b26838561149c565b611a21565b60058054600290610b4c9084906201000090046001600160701b03166144e6565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b79826115c6565b60058054601090610b9b908490600160801b90046001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610bcf60018461143f565b6000818152600e60205260409020549091508015610cde5760019450600080610bfc838b8e886001611794565b9150915080600b6000828254610c12919061440e565b90915550610c2e905083600084610c2881610f09565b8a611a4b565b610c3881836143fb565b9150610c47610b26838761149c565b60058054600290610c689084906201000090046001600160701b03166144e6565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c95826115c6565b60058054601090610cb7908490600160801b90046001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d1657610d0a610cf087610f09565b610cf983610f09565b610d039190614526565b6000611c3c565b610d148e8e611cef565b505b6000610d218f611e7a565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d7a959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610da0614262565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610e989116611f6a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610eca92900416611f6a565b905292915050565b6000806000610ee084611fe0565b9150915080610f0257604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f335760405163396ea70160e11b815260040160405180910390fd5b5090565b610f408161206d565b61078557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610f7457600080fd5b5091020490565b6000610f9083670de0b6b3a764000084610f5d565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610fcb90849061440e565b90915550506000838152600e602052604081208054839290610fee90849061440e565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f93826004611cef565b60006110606040830160208401614458565b1561106c575082610d91565b611076848461149c565b9050610d91565b60006107a9670de0b6b3a764000061217a565b60008060006110fc6110a0610788565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061232d565b915085611109838761234e565b111561111757611117612363565b6000806000611181611127610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114d0565b905061119789670de0b6b3a7640000838b61237c565b509194509092506111aa905082846143fb565b6111b490866143fb565b9450611200886111fa8b6111c8868a6143fb565b8b6111d38e8261248a565b8e7f00000000000000000000000000000000000000000000000000000000000000006124a0565b9061234e565b9550909250505093509350939050565b60006112226040830160208401614458565b1561122e575082610d91565b6110768484610f7b565b6001546001600160801b03168381101561125457611254612363565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061128c908390600f0b6114b1565b101561129a5761129a612363565b6003546112e9906112e490600160801b90046001600160801b03166112c7670de0b6b3a764000086614546565b600454600160801b90046001600160801b031691908960016124c5565b6115c6565b600480546001600160801b03928316600160801b02921691909117905561130f816115c6565b600180546001600160801b0319166001600160801b0392909216919091179055611338856115c6565b6001805460109061135a908490600160801b90046001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611387856115c6565b600380546010906113a9908490600160801b90046001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113d883612563565b90506113f6816113e788610f09565b6113f19084614526565b611c3c565b6113ff846125a7565b61140b5761140b612363565b600061141685611041565b90508061143657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114695760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006114866040830160208401614458565b15611495576110768484610f7b565b5082610d91565b6000610f908383670de0b6b3a7640000610f5d565b6000806114be8484612607565b909250905080610f0257610f02612363565b600061008e826114e1858888610f5d565b90612643565b60008260001904841183021582026114fe57600080fd5b50910281810615159190040190565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561159c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c0919061455d565b50505050565b60006001600160801b03821115610f3357604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611613908490600160801b90046001600160801b031661149c565b6005546201000090046001600160701b0316925090508181111561178f57600061163d83836143fb565b905061164c6112e482866126b8565b6005805460109061166e908490600160801b90046001600160801b031661457a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116a78583610f7b90919063ffffffff16565b905060006116d5827f000000000000000000000000000000000000000000000000000000000000000061149c565b905080600b60008282546116e9919061440e565b909155506116f9905081836143fb565b9150611704826115c6565b6001805460009061171f9084906001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061174c826126cd565b60038054600090611761908490600f0b61459a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117a18785610f7b565b915060006117cf837f000000000000000000000000000000000000000000000000000000000000000061149c565b90506117fb817f000000000000000000000000000000000000000000000000000000000000000061149c565b9150831561181e5761180d82826143fb565b61181790846143fb565b9250611835565b61182882826143fb565b611832908461440e565b92505b8686101561185857611848838789610f5d565b9250611855828789610f5d565b91505b509550959350505050565b600354600160801b90046001600160801b03166118ac6112e48261188f670de0b6b3a764000086614546565b600454600160801b90046001600160801b031691908a60006124c5565b600480546001600160801b03928316600160801b0292169190911790556118d2866115c6565b6118dc908261457a565b600380546001600160801b03928316600160801b029216919091179055611902846115c6565b6001805460009061191d9084906001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061194a836126f7565b6003805460009061195f908490600f0b61459a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061198f856115c6565b600180546010906119b1908490600160801b90046001600160801b031661457a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806119ef846107e38a888a610f5d565b90506119fc888486610f5d565b611a06908261440e565b905086811115611a165786810391505b509695505050505050565b60006001600160701b03821115610f335760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a8d57507f0000000000000000000000000000000000000000000000000000000000000000611a8b85836143fb565b105b15611a9a57611a9a612363565b6003549084900390600f0b611aaf8482614526565b905083611abb86610f09565b138015611af057507f0000000000000000000000000000000000000000000000000000000000000000611aee83836114b1565b105b15611afd57611afd612363565b600254600160801b90046001600160801b0316611b3f6112e482611b29670de0b6b3a764000088614546565b6004546001600160801b031691908c60006124c5565b600480546001600160801b0319166001600160801b0392909216919091179055611b6988826143fb565b9050611b74816115c6565b600280546001600160801b03928316600160801b029216919091179055611b9a836115c6565b600180546001600160801b0319166001600160801b0392909216919091179055611bc3826126f7565b600380546001600160801b0319166001600160801b0392909216919091179055611bec876115c6565b60018054601090611c0e908490600160801b90046001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c65611c4b8483612733565b611c56846000612733565b611c609190614526565b6126f7565b9050600081600f0b1315611cba5760028054829190600090611c919084906001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611cea57611ccf816145c7565b60028054600090611c919084906001600160801b031661457a565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d3a916001600160801b0316906143fb565b905080600003611d4e576001915050610f93565b6000611d5985612742565b905080600003611d6e57600192505050610f93565b600080611d7c8385896127e4565b9150915080611d92576000945050505050610f93565b600080611d9f84896128f1565b91509150611dbd611daf82610f09565b611db8906145ed565b61206d565b925082611dd35760009650505050505050610f93565b611ddc826115c6565b60068054600090611df79084906001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e24816115c6565b60068054601090611e46908490600160801b90046001600160801b0316614506565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611e91611e8c86610d98565b611fe0565b9150915080611ea7575060009485945092505050565b6000808611611eb7576000611ec1565b611ec1838761149c565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611f2c919061440e565b611f3691906143fb565b905080600003611f4f5750600096879650945050505050565b6000611f5b8383610f7b565b98600198509650505050505050565b600080670de0b6b3a7640000611f7e6108cd565b611f889190614546565b9050808311611f98576000611fa2565b611fa281846143fb565b9150610d91611fd9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614546565b8390610f7b565b6000806000806000611ff1866129e1565b915091508061200857506000958695509350505050565b6120158660a00151610f09565b61201e87612d01565b8361202c8960000151610f09565b6120369190614609565b6120409190614609565b61204a9190614526565b9250505060008112156120635750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806120bf8787877f00000000000000000000000000000000000000000000000000000000000000008d612d65565b9350935093509350806120db5750600098975050505050505050565b86841461210c576120eb846115c6565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461213d5761211c836126f7565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461216b5761214d826115c6565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156121db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261220391908101906146fc565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061228b91906147dc565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb090606401602060405180830381865afa158015612301573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061232591906147dc565b949350505050565b60006107e987878761234788670de0b6b3a76400006143fb565b8787612e7d565b6000610f908383670de0b6b3a76400006114e7565b60405163bb55fd2760e01b815260040160405180910390fd5b60008080806123cd87866123c68b6111fa61239f8c670de0b6b3a76400006143fb565b7f00000000000000000000000000000000000000000000000000000000000000009061234e565b91906114e7565b93506123f9847f000000000000000000000000000000000000000000000000000000000000000061149c565b9150600061241a61241289670de0b6b3a76400006143fb565b8a90886114e7565b9050612446817f000000000000000000000000000000000000000000000000000000000000000061234e565b9350612472847f000000000000000000000000000000000000000000000000000000000000000061149c565b61247c908461440e565b915050945094509450949050565b60008183116124995781610f90565b5090919050565b6000806124b8846124b28a888a6114e7565b906126b8565b90506119fc8884866114e7565b6000826000036124d657508461008e565b8115612529576125076124e9848761440e565b6124f3858761149c565b6124fd888a61149c565b6107e3919061440e565b905060006125158588612ea0565b905080821015612523578091505b5061008e565b8285036125385750600061008e565b61008b61254584876143fb565b61254f858761234e565b612559888a61149c565b6107e391906143fb565b600061258b600e600061257760028661143f565b815260200190815260200160002054610f09565b61259d600e600061257760018761143f565b610f939190614526565b60006125d37f00000000000000000000000000000000000000000000000000000000000000008361234e565b6002546125e991906001600160801b031661440e565b6001546125ff906001600160801b03168461149c565b101592915050565b60008060008361261686610f09565b6126209190614526565b905060008112156126385760008092509250506108c6565b946001945092505050565b60008160000361265c5750670de0b6b3a7640000610f93565b8260000361266c57506000610f93565b600061267783610f09565b9050600061268c61268786610f09565b612eaf565b90508181026126a3670de0b6b3a7640000826147f5565b90506126ae816130d5565b9695505050505050565b6000610f9083670de0b6b3a7640000846114e7565b600060016001607f1b03821115610f335760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612715575060016001607f1b0382135b15610f335760405163a5353be560e01b815260040160405180910390fd5b60008183136124995781610f90565b600254600090819061275d906001600160801b0316846126b8565b90506127897f00000000000000000000000000000000000000000000000000000000000000008261440e565b6001546001600160801b031611156127de576001547f0000000000000000000000000000000000000000000000000000000000000000906127d49083906001600160801b03166143fb565b610d9191906143fb565b50919050565b6127ec6142c3565b6000806127f884610d98565b9050600061280582611fe0565b935090508261281a5750600091506128e99050565b600061284161283c84610160015185610140015161149c90919063ffffffff16565b610f09565b61286161283c85610120015186610100015161234e90919063ffffffff16565b61286b9190614526565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806129098660c001518760e00151612607565b9150915080612920576000809350935050506108c6565b600061292c878461326a565b9250905081158061293b575080155b1561294f57600080945094505050506108c6565b600061295b8883613379565b9050806000036129755760008095509550505050506108c6565b8760600151811161298c57945092506108c6915050565b50606087015160006129a08986858b61344a565b9050806000036129bb576000809650965050505050506108c6565b8281106129d3576000809650965050505050506108c6565b909890975095505050505050565b6000806000612a0661283c85610160015186610140015161149c90919063ffffffff16565b612a2661283c86610120015187610100015161234e90919063ffffffff16565b612a309190614526565b9050600080612a4786600001518760200151612607565b9150915080612a5e57506000958695509350505050565b6000831315612b9f5760008390506000612aac886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612a9d91906143fb565b8d606001518e6080015161395f565b9350905082612ac5575060009788975095505050505050565b818110612b63576000612aff858a60400151858c60e00151670de0b6b3a7640000612af091906143fb565b8d606001518e60800151613a6b565b9450905083158015612b1457508860c0015183105b15612b2b5750600098600198509650505050505050565b83612b4157506000988998509650505050505050565b612b4a81610f09565b612b53906145ed565b9960019950975050505050505050565b6000886020015112612b8b57612b828860a001518561283c91906143fb565b611f5b906145ed565b60a08801518851612b829161283c916143fb565b6000831215612cf2576000612bb3846145ed565b90506000612be78489604001518a60e00151670de0b6b3a7640000612bd891906143fb565b8b606001518c60800151613b2e565b9350905082612c00575060009788975095505050505050565b818110612c85576000612c3a858a60400151858c60e00151670de0b6b3a7640000612c2b91906143fb565b8d606001518e60800151613bda565b9450905083158015612c4f57508860c0015183105b15612c665750600098600198509650505050505050565b83612c7c57506000988998509650505050505050565b612b5381610f09565b6000612cb7858a604001518b60e00151670de0b6b3a7640000612ca891906143fb565b8c606001518d60800151613cb1565b9450905083612cd157506000988998509650505050505050565b612b53612ce88a6060015184866107e391906143fb565b61283c908361440e565b50600095600195509350505050565b6000612d3461283c836101200151670de0b6b3a7640000612d2291906143fb565b606085015161010086015191906114e7565b61259d61283c846101600151670de0b6b3a7640000612d5391906143fb565b60608601516101408701519190610f5d565b60008060008084600003612d8457508792508691508590506001612e71565b600085612d908b610f09565b612d9a9190614609565b9050612da587610f09565b811215612dc057600080600080945094509450945050612e71565b80945060008912612de057612dd961283c868b8d610f5d565b9350612e03565b612df761283c612def8b6145ed565b87908d6114e7565b612e00906145ed565b93505b600080612e108c8c612607565b9150915080612e2f576000806000809650965096509650505050612e71565b6000612e3b8888612607565b9250905081612e5b57600080600080975097509750975050505050612e71565b612e668b8285610f5d565b955060019450505050505b95509550955095915050565b600080612e8e888888888888613a6b565b909250905080611a1657611a16612363565b60008183116127de5782610f90565b6000808213612ed15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f549084901c610f09565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130f057506000919050565b680755bf798b4a1bf1e58212613119576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906126ae74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f09565b60008060008460a0015112613287575050608082015160016108c6565b60008460a00151613297906145ed565b905060006132d385876101000151886000015160e00151670de0b6b3a76400006132c191906143fb565b89516060810151608090910151613b2e565b935090508215806132e2575080155b156132f5576000809350935050506108c6565b600061330183836126b8565b9050670de0b6b3a7640000811161333d5780670de0b6b3a76400000394506133368760c001518661149c90919063ffffffff16565b945061334c565b600080945094505050506108c6565b866080015185111561336b5786608001516001945094505050506108c6565b506001925050509250929050565b6000806133af8460c001518560e00151866101000151876000015160a001516133a188610f09565b6133aa906145ed565b612d65565b875160408101929092526020820192909252919091529050806133d6576000915050610f93565b60006133e58560000151611fe0565b92509050816133f957600092505050610f93565b8460200151811061340f57600092505050610f93565b600085606001518660400151613425919061440e565b905061344082876020015183610f5d9092919063ffffffff16565b6126ae90826143fb565b60008085606001518660400151613461919061440e565b6020870151606088015191925060009161347b9184610f5d565b90508660a001516000036134925791506123259050565b600080808960048810156134a557600497505b60005b88811015613801576134ba868b612ea0565b955060006134e38360c001518460e00151856101000151866000015160a001516133a18c610f09565b8651604081019290925260208201929092529190915290508061351157600098505050505050505050612325565b60006135208e60000151611fe0565b925090508161353b5760009950505050505050505050612325565b61354684828b613d60565b1561355c57879950505050505050505050612325565b60008460a0015113156136c557835180516020820151604083015160a084015160e0909401516000946135b09493929161359e90670de0b6b3a76400006143fb565b8a51606081015160809091015161395f565b93509050826135cc5760009a5050505050505050505050612325565b808560a00151106136c3576135e085613dc5565b9099509250826135fd5760009a5050505050505050505050612325565b6136228560c001518660e00151876101000151886000015160a001516133a18e610f09565b885160408101929092526020820192909252919091529250826136525760009a5050505050505050505050612325565b845180516020820151604083015160a084015160e090940151613682949061359e90670de0b6b3a76400006143fb565b935090508261369e5760009a5050505050505050505050612325565b8e60a0015181116136bb57889a5050505050505050505050612325565b5050506134a8565b505b60006136d6858f8760a00151613e9b565b935090508215806136ef5750670de0b6b3a76400008110155b156137075760009a5050505050505050505050612325565b80670de0b6b3a7640000039050600061373461283c8760400151886020015161234e90919063ffffffff16565b61374161283c858e61149c565b61374b9190614526565b9050881580613769575061375e896141f6565b613767826141f6565b125b15613778578098508997508296505b60008113156137a05761378f8b6107e38385610f7b565b613799908b61440e565b99506137f2565b60008112156137e95760006137ba8c6107e38581866145ed565b90508a8110156137ce57808b039a506137e3565b60009c50505050505050505050505050612325565b506137f2565b50505050613801565b846001019450505050506134a8565b5060006138298260c001518360e00151846101000151856000015160a001516133a18b610f09565b85516040810192909252602082019290925291909152905080613856576000975050505050505050612325565b60006138658360000151610ed2565b9050600061388761283c8560400151866020015161234e90919063ffffffff16565b61389461283c848c61149c565b61389e9190614526565b90506138a9876141f6565b6138b2826141f6565b12156138bf578795508194505b6138e66138da655af3107a4000670de0b6b3a76400006143fb565b6020860151908b6114e7565b60408501516138f6908790610f7b565b10806139365750613924613918655af3107a4000670de0b6b3a764000061440e565b6020860151908b610f5d565b60408501516139349087906126b8565b115b1561394d5760009950505050505050505050612325565b50939c9b505050505050505050505050565b600080600088121561398157613974886145ed565b61397e908761440e565b95505b60008061398e8b8b612607565b91509150806139a557600080935093505050613a5f565b60006139b4838b8a8a8a61420e565b905060006139d16139c98a6114e18a8e61234e565b8990896114e7565b9050808210156139eb576000809550955050505050613a5f565b808203670de0b6b3a76400008110613a2057613a19613a12670de0b6b3a76400008c610f7b565b8290612643565b9050613a38565b613a35613a12670de0b6b3a76400008c6126b8565b90505b8b811015613a5157600080965096505050505050613a5f565b8b9003955060019450505050505b97509795505050505050565b6000806000613a7d898988888861423d565b9050613a8d866114e1898b61440e565b975087811015613aa4576000809250925050613b23565b878103613ab28186886114e7565b9050670de0b6b3a76400008110613adf57613ad8613a12670de0b6b3a7640000896126b8565b9050613af7565b613af4613a12670de0b6b3a764000089610f7b565b90505b613b0181866126b8565b9050808a1015613b1957600080935093505050613b23565b8903925060019150505b965096945050505050565b6000806000613b40888888888861423d565b90506000613b6b670de0b6b3a7640000613b5a8888610f7b565b613b64919061440e565b83906126b8565b9050670de0b6b3a76400008110613b9857613b91613a12670de0b6b3a7640000896126b8565b9050613bb0565b613bad613a12670de0b6b3a764000089610f7b565b90505b80881015613bc657600080935093505050613bd0565b8703925060019150505b9550959350505050565b6000806000613bec898988888861423d565b905086881015613c03576000809250925050613b23565b9686900396613c128887612643565b975087811015613c29576000809250925050613b23565b878103613c378186886114e7565b9050670de0b6b3a76400008110613c6457613c5d613a12670de0b6b3a7640000896126b8565b9050613c7c565b613c79613a12670de0b6b3a764000089610f7b565b90505b613c8681866126b8565b905089811015613c9e57600080935093505050613b23565b9890980398600198509650505050505050565b6000806000613cc3888888888861420e565b90506000613ce7670de0b6b3a7640000613cdd88886126b8565b611fd9919061440e565b9050670de0b6b3a76400008110613d1457613d0d613a12670de0b6b3a764000089610f7b565b9050613d2c565b613d29613a12670de0b6b3a7640000896126b8565b90505b613d368186610f7b565b905088811015613d4e57600080935093505050613bd0565b97909703976001975095505050505050565b6020830151600090613d7290846126b8565b6040850151613d82908490610f7b565b1015801561232557506020840151613dab908461032b633b9aca00670de0b6b3a764000061440e565b6040850151613dbb9084906126b8565b1115949350505050565b60008060008360e0015113613ddf57506000928392509050565b6000613dee8460000151612d01565b90506000613e1a856040015186606001518760400151613e0e919061440e565b602088015191906114e7565b905060008212613e415780821015613e3457819003613e57565b5060009485945092505050565b613e4a826145ed565b613e54908261440e565b90505b60e085015160c0860151613e6c9183906114e7565b9050808560c001511015613e87575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613ebf57855160400151613eb890859061440e565b9050613efa565b6000613eca856145ed565b875160400151909150811015613eea578651604001518190039150613ef8565b6000809350935050506128e9565b505b855180516020909101516000918291613f139190612607565b9150915080613f2b57600080945094505050506128e9565b875160e0810151604090910151600091613f6091613f5491613f4d9190612643565b8a9061149c565b6101008b0151906126b8565b895160e0810151608090910151613f8b91613f7f916114e1908861149c565b8b5160600151906126b8565b613f95919061440e565b90506000613fcd613fc1613fba8c6000015160e001518861264390919063ffffffff16565b8b9061234e565b6101008c015190610f7b565b905080821015613fe8576000809650965050505050506128e9565b8082039150600061402a858c60000151604001518d6000015160e00151670de0b6b3a764000061401891906143fb565b8e51606081015160809091015161423d565b905060006140548c6000015160e00151670de0b6b3a764000061404d91906143fb565b8890612643565b9050808210156140715760008098509850505050505050506128e9565b8b5160808101516060909101519183039161408d9183916114e7565b9050670de0b6b3a764000081106140d1578b5160e001516140ca90613a12906140be90670de0b6b3a76400006143fb565b8e5160e00151906126b8565b9050614100565b8b5160e001516140fd90613a12906140f190670de0b6b3a76400006143fb565b8e5160e0015190610f7b565b90505b8b516060015161411390859083906114e7565b935083670de0b6b3a764000011156141375783670de0b6b3a764000003935061414b565b6000600198509850505050505050506128e9565b60008c60e00151126141ae5760c08c015160e08d015161416a916126b8565b9250670de0b6b3a764000083111561418f5760008098509850505050505050506128e9565b670de0b6b3a764000092909203916141a7848461149c565b93506141e3565b6141e06141c78d60c001518e60e001516107e3906145ed565b6141d990670de0b6b3a764000061440e565b859061149c565b93505b50919a60019a5098505050505050505050565b60008082126142055781610f93565b610f93826145ed565b600061421a8585612643565b61423361422b866114e1868b61149c565b859085610f5d565b61008b919061440e565b60006142498585612643565b61423361425a866114e1868b61234e565b8590856114e7565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806142d7614262565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156127de57600080fd5b600080600080600060a0868803121561433f57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561437257600080fd5b61437e88828901614315565b9150509295509295909350565b600080600080608085870312156143a157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156143cd57600080fd5b6143d987828801614315565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f9357610f936143e5565b80820180821115610f9357610f936143e5565b60006020828403121561443357600080fd5b81356001600160a01b0381168114610d9157600080fd5b801515811461078557600080fd5b60006020828403121561446a57600080fd5b8135610d918161444a565b6000808335601e1984360301811261448c57600080fd5b83018035915067ffffffffffffffff8211156144a757600080fd5b6020019150368190038213156108c657600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826144e1576144e16144bc565b500690565b6001600160701b03818116838216019080821115610f0257610f026143e5565b6001600160801b03818116838216019080821115610f0257610f026143e5565b8181036000831280158383131683831282161715610f0257610f026143e5565b8082028115828204841417610f9357610f936143e5565b60006020828403121561456f57600080fd5b8151610d918161444a565b6001600160801b03828116828216039080821115610f0257610f026143e5565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610f9357610f936143e5565b600081600f0b60016001607f1b031981036145e4576145e46143e5565b60000392915050565b6000600160ff1b8201614602576146026143e5565b5060000390565b8082018281126000831280158216821582161715614629576146296143e5565b505092915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561467057614670614631565b604052919050565b600067ffffffffffffffff82111561469257614692614631565b5060051b60200190565b600082601f8301126146ad57600080fd5b815160206146c26146bd83614678565b614647565b82815260059290921b840181019181810190868411156146e157600080fd5b8286015b84811015611a1657805183529183019183016146e5565b60008060006060848603121561471157600080fd5b835167ffffffffffffffff8082111561472957600080fd5b818601915086601f83011261473d57600080fd5b8151602061474d6146bd83614678565b82815260059290921b8401810191818101908a84111561476c57600080fd5b8286015b848110156147a4578051868111156147885760008081fd5b6147968d86838b010161469c565b845250918301918301614770565b50918901519197509093505050808211156147be57600080fd5b506147cb8682870161469c565b925050604084015190509250925092565b6000602082840312156147ee57600080fd5b5051919050565b600082614804576148046144bc565b600160ff1b82146000198414161561481e5761481e6143e5565b50059056fea26469706673582212209336baacce144099052bd5afc98218ac6b1103b0663ce013de4551b8c307441764736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
