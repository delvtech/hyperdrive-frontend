export const EzETHTarget3 = {
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
            "name": "checkpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
            "name": "openLong",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
            "name": "BelowMinimumContribution",
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
            "name": "InvalidCheckpointTime",
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
            "name": "PoolAlreadyInitialized",
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
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004dbc38038062004dbc83398101604081905262000035916200026c565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c05260c0808601516101e0526101008087015190915260e08087015190526101208087015190915291850180515190925281518101516101409081528251604090810151610160908152935160609081015161018090815282890151871661020052908801516102205291870151600a80549187166001600160a01b0319928316179055938701516008805491871691861691909117905590860151600980549186169190941617909255918316610240819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000157573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017d919062000389565b6001600160a01b03166102605250620003b0915050565b6040516101c081016001600160401b0381118282101715620001c657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001e257600080fd5b50565b8051620001f281620001cc565b919050565b6000608082840312156200020a57600080fd5b604051608081016001600160401b03811182821017156200023b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102408112156200028257600080fd5b610220808212156200029357600080fd5b6200029d62000194565b9150620002aa85620001e5565b8252620002ba60208601620001e5565b6020830152620002cd60408601620001e5565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200032c818701620001e5565b9083015261016062000340868201620001e5565b9083015261018062000354868201620001e5565b908301526101a06200036987878301620001f7565b81840152508193506200037e818601620001e5565b925050509250929050565b6000602082840312156200039c57600080fd5b8151620003a981620001cc565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161488c620005306000396000611510015260006113dd0152600050506000505060008181610484015261267c0152600081816101fd015281816102540152818161033b015281816115ad015281816115e90152818161188401528181611ddc01528181611e3f0152818161258101526126560152600081816102aa0152818161101c0152818161106401528181611184015261263001526000611a25015260008181611b4b015261244b015260008181610a45015281816110d70152611b1f0152600081816110b601526124070152600081816102ed01528181610ffa01528181611085015281816111a501526126a20152600081816102cc015281816105500152818161098001526135a501526000818161013f01528181610826015281816108b30152610918015260008181611469015261219701526000505061488c6000f3fe6080604052600436106100345760003560e01c8063414f826d1461003957806377d05ff41461005b578063cba2e58d14610081575b600080fd5b34801561004557600080fd5b5061005961005436600461433a565b6100a9565b005b61006e61006936600461436e565b6100b7565b6040519081526020015b60405180910390f35b61009461008f3660046143be565b6100ce565b60408051928352602083019190915201610078565b6100b382826100eb565b5050565b60006100c48484846101a7565b90505b9392505050565b6000806100dd8686868661041d565b915091505b94509492505050565b6100f3610651565b60006100fd61067b565b6000848152600760205260409020549091506001600160801b03161561012e576101278183610693565b505061019d565b600061013861081f565b90506101647f00000000000000000000000000000000000000000000000000000000000000008561442e565b15158061017057508381105b1561018e5760405163ecd29e8160e01b815260040160405180910390fd5b610199848385610855565b5050505b6100b36001600055565b60006101b1610651565b6101b9610ce8565b6101c282610d09565b60055460ff16156101e657604051637983c05160e01b815260040160405180910390fd5b6000806101f38685610d42565b90925090506102237f00000000000000000000000000000000000000000000000000000000000000006002614458565b82101561024357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061028182610e1b565b600180546001600160801b0319166001600160801b0392909216919091179055610316610311837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e49565b610e1b565b600180546001600160801b03928316600160801b02921691909117905561035f6000807f0000000000000000000000000000000000000000000000000000000000000000610ee8565b6103776000610371602087018761446f565b85610ee8565b61038a61038261081f565b826004610855565b506000610398878387610f90565b90506103a7602086018661446f565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866103e460408b0160208c016144a6565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a25050506100c76001600055565b600080610428610651565b600554610100900460ff1615610451576040516321081abf60e01b815260040160405180910390fd5b610459610ce8565b61046283610d09565b60008061046f8886610d42565b909250905060006104808383610fbf565b90507f00000000000000000000000000000000000000000000000000000000000000008110156104c35760405163211ddda360e11b815260040160405180910390fd5b868210156104e4576040516342af972b60e01b815260040160405180910390fd5b60006104ee61081f565b90506104fc81846004610855565b5060008061050a8686610fd4565b90985090925090508a8710156105335760405163c972651760e01b815260040160405180910390fd5b80600b600082825461054591906144c3565b9091555061057590507f0000000000000000000000000000000000000000000000000000000000000000846144c3565b97506105838288878b6111e1565b600061059060018a61137b565b90506105a9816105a360208d018d61446f565b8a610ee8565b8c8989888d856105bc602083018361446f565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866105f2898787610f90565b6105fd8a88886113b0565b61060d60408801602089016144a6565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100e26001600055565b60026000540361067457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061068e670de0b6b3a76400006113d8565b905090565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916106de916001600160801b0316906144d6565b9050806000036106f2576001915050610819565b60006106fd8561158b565b90508060000361071257600192505050610819565b600080610720838589611630565b9150915080610736576000945050505050610819565b600080610743848961173d565b915091506107616107538261182d565b61075c906144e9565b611857565b9250826107775760009650505050505050610819565b61078082610e1b565b6006805460009061079b9084906001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506107c881610e1b565b600680546010906107ea908490600160801b90046001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600061084b7f00000000000000000000000000000000000000000000000000000000000000004261442e565b61068e90426144d6565b600083815260076020526040812080546001600160801b031615158061087a57504285115b1561089057546001600160801b031690506100c7565b60008061089b61081f565b90508087036108ac57859150610946565b60006108d87f0000000000000000000000000000000000000000000000000000000000000000896144c3565b90505b6000818152600760205260409020546001600160801b031692508181148015610902575082155b1561090b578692505b826000036109445761093d7f0000000000000000000000000000000000000000000000000000000000000000826144c3565b90506108db565b505b61094f82610e1b565b83546001600160801b0319166001600160801b039190911617835561097386611964565b50600090506007816109a57f00000000000000000000000000000000000000000000000000000000000000008b6144d6565b815260208101919091526040016000908120546001600160801b031691506109ce60028a61137b565b6000818152600e60205260408120549192508a8a8315610b1457600192506000806109fd86898c866000611b08565b9150915080600b6000828254610a1391906144c3565b90915550610a2f905086600084610a298161182d565b88611bd7565b610a3981836144c3565b9150610a6986838a8d877f0000000000000000000000000000000000000000000000000000000000000000611d51565b9150610a7d610a788385610fbf565b611d9b565b60058054600290610a9e9084906201000090046001600160701b0316614525565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610acb82610e1b565b60058054601090610aed908490600160801b90046001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b2160018461137b565b6000818152600e60205260409020549091508015610c305760019450600080610b4e838b8e886001611b08565b9150915080600b6000828254610b6491906144c3565b90915550610b80905083600084610b7a8161182d565b8a611dc5565b610b8a81836144d6565b9150610b99610a788387610fbf565b60058054600290610bba9084906201000090046001600160701b0316614525565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610be782610e1b565b60058054601090610c09908490600160801b90046001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c6857610c5c610c428761182d565b610c4b8361182d565b610c559190614545565b6000611fb6565b610c668e8e610693565b505b6000610c738f612069565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610ccc959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989e9d5050505050505050505050505050565b3415610d0757604051631574f9f360e01b815260040160405180910390fd5b565b6000610d18602083018361446f565b6001600160a01b031603610d3f5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610d5660408501602086016144a6565b15610d7b57610d7185610d6c6040870187614565565b612159565b9093509050610d97565b5034610d9385610d8e6040870187614565565b612175565b8492505b610d9f61067b565b91508015610e1257604051600090339083908381818185875af1925050503d8060008114610de9576040519150601f19603f3d011682016040523d82523d6000602084013e610dee565b606091505b5050905080610e10576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006001600160801b03821115610e4557604051630f0af95160e11b815260040160405180910390fd5b5090565b600080610e5a846301e13380612212565b90506000610e688683610fbf565b610e7a90670de0b6b3a76400006144c3565b9050670de0b6b3a76400008110610eae57610ea7610ea0670de0b6b3a764000086612212565b8290612227565b9050610ec6565b610ec3610ea0670de0b6b3a76400008661229c565b90505b610eda81610ed4898b610fbf565b90610fbf565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610f1a9084906144c3565b90915550506000838152600e602052604081208054839290610f3d9084906144c3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fa260408301602084016144a6565b15610fae5750826100c7565b610fb88484610fbf565b90506100c7565b60006100c78383670de0b6b3a76400006122b1565b6000806000611040610fe46122cf565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000006122f0565b915060006110a961104f6122cf565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061231c565b905061110086846110fb847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612333565b61239e565b1561110d5761110d6123e0565b60008061111b8884896123f9565b909250905061112a82866144d6565b94506111378184896122b1565b935061114384896144d6565b9550670de0b6b3a76400006111c98761115a6122cf565b61116491906144c3565b600154611182908990600160801b90046001600160801b03166144d6565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061231c565b11156111d7576111d76123e0565b5050509250925092565b600254600160801b90046001600160801b03166112236103118261120d670de0b6b3a764000086614458565b6004546001600160801b03169190886001612479565b600480546001600160801b0319166001600160801b039290921691909117905561124c85610e1b565b600180546000906112679084906001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129484610e1b565b600180546010906112b6908490600160801b90046001600160801b03166145ac565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112e384610e1b565b6112ed9082614505565b600280546001600160801b03808416600160801b0291161790559050600061131483612536565b9050611332816113238761182d565b61132d90846145cc565b611fb6565b61133b8461257a565b611347576113476123e0565b6000611352856125da565b90508061137257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156113a55760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006113c260408301602084016144a6565b156113d157610fb88484612212565b50826100c7565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611439573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261146191908101906146bf565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e9919061479f565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb090606401602060405180830381865afa15801561155f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611583919061479f565b949350505050565b60025460009081906115a6906001600160801b03168461229c565b90506115d27f0000000000000000000000000000000000000000000000000000000000000000826144c3565b6001546001600160801b0316111561162a576001547f00000000000000000000000000000000000000000000000000000000000000009061161d9083906001600160801b03166144d6565b61162791906144d6565b91505b50919050565b611638614287565b600080611644846125e7565b9050600061165182612721565b93509050826116665750600091506117359050565b600061168d611688846101600151856101400151610fbf90919063ffffffff16565b61182d565b6116ad6116888561012001518661010001516127ae90919063ffffffff16565b6116b79190614545565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806117558660c001518760e001516127c3565b915091508061176c57600080935093505050610e14565b600061177887846127ff565b92509050811580611787575080155b1561179b5760008094509450505050610e14565b60006117a7888361290e565b9050806000036117c1576000809550955050505050610e14565b876060015181116117d85794509250610e14915050565b50606087015160006117ec8986858b6129df565b90508060000361180757600080965096505050505050610e14565b82811061181f57600080965096505050505050610e14565b909890975095505050505050565b60006001600160ff1b03821115610e455760405163396ea70160e11b815260040160405180910390fd5b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806118a98787877f00000000000000000000000000000000000000000000000000000000000000008d612ef4565b9350935093509350806118c55750600098975050505050505050565b8684146118f6576118d584610e1b565b600180546001600160801b0319166001600160801b03929092169190911790555b858314611927576119068361300c565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146119555761193782610e1b565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6005546000908190611987908490600160801b90046001600160801b0316610fbf565b6005546201000090046001600160701b03169250905081811115611b035760006119b183836144d6565b90506119c0610311828661229c565b600580546010906119e2908490600160801b90046001600160801b03166145ac565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a1b858361221290919063ffffffff16565b90506000611a49827f0000000000000000000000000000000000000000000000000000000000000000610fbf565b905080600b6000828254611a5d91906144c3565b90915550611a6d905081836144d6565b9150611a7882610e1b565b60018054600090611a939084906001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ac082613048565b60038054600090611ad5908490600f0b6147b8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b158785612212565b91506000611b43837f0000000000000000000000000000000000000000000000000000000000000000610fbf565b9050611b6f817f0000000000000000000000000000000000000000000000000000000000000000610fbf565b91508315611b9257611b8182826144d6565b611b8b90846144d6565b9250611ba9565b611b9c82826144d6565b611ba690846144c3565b92505b86861015611bcc57611bbc8387896122b1565b9250611bc98287896122b1565b91505b509550959350505050565b600354600160801b90046001600160801b0316611c2061031182611c03670de0b6b3a764000086614458565b600454600160801b90046001600160801b031691908a6000612479565b600480546001600160801b03928316600160801b029216919091179055611c4686610e1b565b611c5090826145ac565b600380546001600160801b03928316600160801b029216919091179055611c7684610e1b565b60018054600090611c919084906001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cbe8361300c565b60038054600090611cd3908490600f0b6147b8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d0385610e1b565b60018054601090611d25908490600160801b90046001600160801b03166145ac565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611d6984611d638a888a6122b1565b90612212565b9050611d768884866122b1565b611d8090826144c3565b905086811115611d905786810391505b509695505050505050565b60006001600160701b03821115610e455760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611e0757507f0000000000000000000000000000000000000000000000000000000000000000611e0585836144d6565b105b15611e1457611e146123e0565b6003549084900390600f0b611e298482614545565b905083611e358661182d565b138015611e6a57507f0000000000000000000000000000000000000000000000000000000000000000611e688383613072565b105b15611e7757611e776123e0565b600254600160801b90046001600160801b0316611eb961031182611ea3670de0b6b3a764000088614458565b6004546001600160801b031691908c6000612479565b600480546001600160801b0319166001600160801b0392909216919091179055611ee388826144d6565b9050611eee81610e1b565b600280546001600160801b03928316600160801b029216919091179055611f1483610e1b565b600180546001600160801b0319166001600160801b0392909216919091179055611f3d8261300c565b600380546001600160801b0319166001600160801b0392909216919091179055611f6687610e1b565b60018054601090611f88908490600160801b90046001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611fdf611fc58483613098565b611fd0846000613098565b611fda9190614545565b61300c565b9050600081600f0b1315612034576002805482919060009061200b9084906001600160801b0316614505565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561206457612049816147e5565b6002805460009061200b9084906001600160801b03166145ac565b505050565b60008060008061208061207b866125e7565b612721565b9150915080612096575060009485945092505050565b60008086116120a65760006120b0565b6120b08387610fbf565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161211b91906144c3565b61212591906144d6565b90508060000361213e5750600096879650945050505050565b600061214a8383612212565b98600198509650505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156121e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061220c919061480b565b50505050565b60006100c783670de0b6b3a7640000846122b1565b6000816000036122405750670de0b6b3a7640000610819565b8260000361225057506000610819565b600061225b8361182d565b9050600061227061226b8661182d565b6130ae565b9050818102612287670de0b6b3a764000082614828565b9050612292816132d4565b9695505050505050565b60006100c783670de0b6b3a764000084613469565b60008260001904841183021582026122c857600080fd5b5091020490565b60015460035460009161068e916001600160801b0390911690600f0b613072565b600061231187878761230a88670de0b6b3a76400006144d6565b878761348f565b979650505050505050565b6000610edf8261232d8588886122b1565b90612227565b60006100c461237a61234d84670de0b6b3a76400006144d6565b612374670de0b6b3a7640000612363818a61229c565b61236d91906144d6565b87906127ae565b906127ae565b61238c90670de0b6b3a76400006144c3565b611d6384670de0b6b3a76400006144d6565b6000806123d5856123ad6122cf565b6123b791906144c3565b600154611182908790600160801b90046001600160801b03166144d6565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806124438561237485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612439818c61229c565b61237491906144d6565b915061246f827f0000000000000000000000000000000000000000000000000000000000000000610fbf565b9050935093915050565b60008260000361248a575084610edf565b81156124fc576124bb61249d84876144c3565b6124a78587610fbf565b6124b1888a610fbf565b611d6391906144c3565b905060006124c9858861353c565b905060006124d7868961354b565b9050818310156124e9578192506124f5565b808311156124f5578092505b5050610edf565b82850361250b57506000610edf565b61229261251884876144d6565b61252285876127ae565b61252c888a610fbf565b611d6391906144d6565b600061255e600e600061254a60028661137b565b81526020019081526020016000205461182d565b612570600e600061254a60018761137b565b6108199190614545565b60006125a67f0000000000000000000000000000000000000000000000000000000000000000836127ae565b6002546125bc91906001600160801b03166144c3565b6001546125d2906001600160801b031684610fbf565b101592915050565b6000610819826004610693565b6125ef6142d9565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916126e7911661355a565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926127199290041661355a565b905292915050565b6000806000806000612732866135d0565b915091508061274957506000958695509350505050565b6127568660a0015161182d565b61275f876138f0565b8361276d896000015161182d565b61277791906145cc565b61278191906145cc565b61278b9190614545565b9250505060008112156127a45750600093849350915050565b9360019350915050565b60006100c78383670de0b6b3a7640000613469565b6000806000836127d28661182d565b6127dc9190614545565b905060008112156127f4576000809250925050610e14565b946001945092505050565b60008060008460a001511261281c57505060808201516001610e14565b60008460a0015161282c906144e9565b9050600061286885876101000151886000015160e00151670de0b6b3a764000061285691906144d6565b89516060810151608090910151613954565b93509050821580612877575080155b1561288a57600080935093505050610e14565b6000612896838361229c565b9050670de0b6b3a764000081116128d25780670de0b6b3a76400000394506128cb8760c0015186610fbf90919063ffffffff16565b94506128e1565b60008094509450505050610e14565b8660800151851115612900578660800151600194509450505050610e14565b506001925050509250929050565b6000806129448460c001518560e00151866101000151876000015160a001516129368861182d565b61293f906144e9565b612ef4565b8751604081019290925260208201929092529190915290508061296b576000915050610819565b600061297a8560000151612721565b925090508161298e57600092505050610819565b846020015181106129a457600092505050610819565b6000856060015186604001516129ba91906144c3565b90506129d5828760200151836122b19092919063ffffffff16565b61229290826144d6565b600080856060015186604001516129f691906144c3565b60208701516060880151919250600091612a1091846122b1565b90508660a00151600003612a275791506115839050565b60008080896004881015612a3a57600497505b60005b88811015612d9657612a4f868b61353c565b95506000612a788360c001518460e00151856101000151866000015160a001516129368c61182d565b86516040810192909252602082019290925291909152905080612aa657600098505050505050505050611583565b6000612ab58e60000151612721565b9250905081612ad05760009950505050505050505050611583565b612adb84828b613a00565b15612af157879950505050505050505050611583565b60008460a001511315612c5a57835180516020820151604083015160a084015160e090940151600094612b4594939291612b3390670de0b6b3a76400006144d6565b8a516060810151608090910151613a6c565b9350905082612b615760009a5050505050505050505050611583565b808560a0015110612c5857612b7585613b71565b909950925082612b925760009a5050505050505050505050611583565b612bb78560c001518660e00151876101000151886000015160a001516129368e61182d565b88516040810192909252602082019290925291909152925082612be75760009a5050505050505050505050611583565b845180516020820151604083015160a084015160e090940151612c179490612b3390670de0b6b3a76400006144d6565b9350905082612c335760009a5050505050505050505050611583565b8e60a001518111612c5057889a5050505050505050505050611583565b505050612a3d565b505b6000612c6b858f8760a00151613c47565b93509050821580612c845750670de0b6b3a76400008110155b15612c9c5760009a5050505050505050505050611583565b80670de0b6b3a76400000390506000612cc9611688876040015188602001516127ae90919063ffffffff16565b612cd6611688858e610fbf565b612ce09190614545565b9050881580612cfe5750612cf389613fa2565b612cfc82613fa2565b125b15612d0d578098508997508296505b6000811315612d3557612d248b611d638385612212565b612d2e908b6144c3565b9950612d87565b6000811215612d7e576000612d4f8c611d638581866144e9565b90508a811015612d6357808b039a50612d78565b60009c50505050505050505050505050611583565b50612d87565b50505050612d96565b84600101945050505050612a3d565b506000612dbe8260c001518360e00151846101000151856000015160a001516129368b61182d565b85516040810192909252602082019290925291909152905080612deb576000975050505050505050611583565b6000612dfa8360000151613fba565b90506000612e1c611688856040015186602001516127ae90919063ffffffff16565b612e29611688848c610fbf565b612e339190614545565b9050612e3e87613fa2565b612e4782613fa2565b1215612e54578795508194505b612e7b612e6f655af3107a4000670de0b6b3a76400006144d6565b6020860151908b613469565b6040850151612e8b908790612212565b1080612ecb5750612eb9612ead655af3107a4000670de0b6b3a76400006144c3565b6020860151908b6122b1565b6040850151612ec990879061229c565b115b15612ee25760009950505050505050505050611583565b50939c9b505050505050505050505050565b60008060008084600003612f1357508792508691508590506001613000565b600085612f1f8b61182d565b612f2991906145cc565b9050612f348761182d565b811215612f4f57600080600080945094509450945050613000565b80945060008912612f6f57612f68611688868b8d6122b1565b9350612f92565b612f86611688612f7e8b6144e9565b87908d613469565b612f8f906144e9565b93505b600080612f9f8c8c6127c3565b9150915080612fbe576000806000809650965096509650505050613000565b6000612fca88886127c3565b9250905081612fea57600080600080975097509750975050505050613000565b612ff58b82856122b1565b955060019450505050505b95509550955095915050565b600060016001607f1b031982128061302a575060016001607f1b0382135b15610e455760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03821115610e455760405163a5353be560e01b815260040160405180910390fd5b60008061307f84846127c3565b909250905080613091576130916123e0565b5092915050565b60008183136130a757816100c7565b5090919050565b60008082136130d05760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131539084901c61182d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136132ef57506000919050565b680755bf798b4a1bf1e58212613318576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061229274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61182d565b600082600019048411830215820261348057600080fd5b50910281810615159190040190565b60008061349f8888878787613fea565b90506134b98561232d6134b2898c6144c3565b8690610fbf565b97506134c68489856122b1565b9750878110156134d8576134d86123e0565b878103670de0b6b3a76400008110613506576134ff610ea0670de0b6b3a76400008861229c565b905061351e565b61351b610ea0670de0b6b3a764000088612212565b90505b8088101561352e5761352e6123e0565b909603979650505050505050565b600081831161162a57826100c7565b60008183116130a757816100c7565b600080670de0b6b3a764000061356e61081f565b6135789190614458565b9050808311613588576000613592565b61359281846144d6565b91506116276135c9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614458565b8390612212565b60008060006135f5611688856101600151866101400151610fbf90919063ffffffff16565b6136156116888661012001518761010001516127ae90919063ffffffff16565b61361f9190614545565b9050600080613636866000015187602001516127c3565b915091508061364d57506000958695509350505050565b600083131561378e576000839050600061369b886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061368c91906144d6565b8d606001518e60800151613a6c565b93509050826136b4575060009788975095505050505050565b8181106137525760006136ee858a60400151858c60e00151670de0b6b3a76400006136df91906144d6565b8d606001518e60800151614019565b945090508315801561370357508860c0015183105b1561371a5750600098600198509650505050505050565b8361373057506000988998509650505050505050565b6137398161182d565b613742906144e9565b9960019950975050505050505050565b600088602001511261377a576137718860a001518561168891906144d6565b61214a906144e9565b60a0880151885161377191611688916144d6565b60008312156138e15760006137a2846144e9565b905060006137d68489604001518a60e00151670de0b6b3a76400006137c791906144d6565b8b606001518c60800151613954565b93509050826137ef575060009788975095505050505050565b818110613874576000613829858a60400151858c60e00151670de0b6b3a764000061381a91906144d6565b8d606001518e608001516140dc565b945090508315801561383e57508860c0015183105b156138555750600098600198509650505050505050565b8361386b57506000988998509650505050505050565b6137428161182d565b60006138a6858a604001518b60e00151670de0b6b3a764000061389791906144d6565b8c606001518d608001516141b3565b94509050836138c057506000988998509650505050505050565b6137426138d78a606001518486611d6391906144d6565b61168890836144c3565b50600095600195509350505050565b6000613923611688836101200151670de0b6b3a764000061391191906144d6565b60608501516101008601519190613469565b612570611688846101600151670de0b6b3a764000061394291906144d6565b606086015161014087015191906122b1565b60008060006139668888888888613fea565b90506000613991670de0b6b3a76400006139808888612212565b61398a91906144c3565b839061229c565b9050670de0b6b3a764000081106139be576139b7610ea0670de0b6b3a76400008961229c565b90506139d6565b6139d3610ea0670de0b6b3a764000089612212565b90505b808810156139ec576000809350935050506139f6565b8703925060019150505b9550959350505050565b6020830151600090613a12908461229c565b6040850151613a22908490612212565b101580156100c457506020840151613a529084613a4b633b9aca00670de0b6b3a76400006144c3565b91906122b1565b6040850151613a6290849061229c565b1115949350505050565b6000806000881215613a8e57613a81886144e9565b613a8b90876144c3565b95505b600080613a9b8b8b6127c3565b9150915080613ab257600080935093505050613b65565b6000613ac1838b8a8a8a614262565b90506000613ade613ad68a61232d8a8e6127ae565b899089613469565b905080821015613af8576000809550955050505050613b65565b808203670de0b6b3a76400008110613b2657613b1f610ea0670de0b6b3a76400008c612212565b9050613b3e565b613b3b610ea0670de0b6b3a76400008c61229c565b90505b8b811015613b5757600080965096505050505050613b65565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613b8b57506000928392509050565b6000613b9a84600001516138f0565b90506000613bc6856040015186606001518760400151613bba91906144c3565b60208801519190613469565b905060008212613bed5780821015613be057819003613c03565b5060009485945092505050565b613bf6826144e9565b613c0090826144c3565b90505b60e085015160c0860151613c18918390613469565b9050808560c001511015613c33575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613c6b57855160400151613c649085906144c3565b9050613ca6565b6000613c76856144e9565b875160400151909150811015613c96578651604001518190039150613ca4565b600080935093505050611735565b505b855180516020909101516000918291613cbf91906127c3565b9150915080613cd75760008094509450505050611735565b875160e0810151604090910151600091613d0c91613d0091613cf99190612227565b8a90610fbf565b6101008b01519061229c565b895160e0810151608090910151613d3791613d2b9161232d9088610fbf565b8b51606001519061229c565b613d4191906144c3565b90506000613d79613d6d613d668c6000015160e001518861222790919063ffffffff16565b8b906127ae565b6101008c015190612212565b905080821015613d9457600080965096505050505050611735565b80820391506000613dd6858c60000151604001518d6000015160e00151670de0b6b3a7640000613dc491906144d6565b8e516060810151608090910151613fea565b90506000613e008c6000015160e00151670de0b6b3a7640000613df991906144d6565b8890612227565b905080821015613e1d576000809850985050505050505050611735565b8b51608081015160609091015191830391613e39918391613469565b9050670de0b6b3a76400008110613e7d578b5160e00151613e7690610ea090613e6a90670de0b6b3a76400006144d6565b8e5160e001519061229c565b9050613eac565b8b5160e00151613ea990610ea090613e9d90670de0b6b3a76400006144d6565b8e5160e0015190612212565b90505b8b5160600151613ebf9085908390613469565b935083670de0b6b3a76400001115613ee35783670de0b6b3a7640000039350613ef7565b600060019850985050505050505050611735565b60008c60e0015112613f5a5760c08c015160e08d0151613f169161229c565b9250670de0b6b3a7640000831115613f3b576000809850985050505050505050611735565b670de0b6b3a76400009290920391613f538484610fbf565b9350613f8f565b613f8c613f738d60c001518e60e00151611d63906144e9565b613f8590670de0b6b3a76400006144c3565b8590610fbf565b93505b50919a60019a5098505050505050505050565b6000808212613fb15781610819565b610819826144e9565b6000806000613fc884612721565b915091508061309157604051635516328b60e11b815260040160405180910390fd5b6000613ff68585612227565b61400f6140078661232d868b6127ae565b859085613469565b61229291906144c3565b600080600061402b8989888888613fea565b905061403b8661232d898b6144c3565b9750878110156140525760008092509250506140d1565b878103614060818688613469565b9050670de0b6b3a7640000811061408d57614086610ea0670de0b6b3a76400008961229c565b90506140a5565b6140a2610ea0670de0b6b3a764000089612212565b90505b6140af818661229c565b9050808a10156140c7576000809350935050506140d1565b8903925060019150505b965096945050505050565b60008060006140ee8989888888613fea565b9050868810156141055760008092509250506140d1565b96869003966141148887612227565b97508781101561412b5760008092509250506140d1565b878103614139818688613469565b9050670de0b6b3a764000081106141665761415f610ea0670de0b6b3a76400008961229c565b905061417e565b61417b610ea0670de0b6b3a764000089612212565b90505b614188818661229c565b9050898110156141a0576000809350935050506140d1565b9890980398600198509650505050505050565b60008060006141c58888888888614262565b905060006141e9670de0b6b3a76400006141df888861229c565b6135c991906144c3565b9050670de0b6b3a764000081106142165761420f610ea0670de0b6b3a764000089612212565b905061422e565b61422b610ea0670de0b6b3a76400008961229c565b90505b6142388186612212565b905088811015614250576000809350935050506139f6565b97909703976001975095505050505050565b600061426e8585612227565b61400f61427f8661232d868b610fbf565b8590856122b1565b60405180610120016040528061429b6142d9565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806040838503121561434d57600080fd5b50508035926020909101359150565b60006060828403121561162a57600080fd5b60008060006060848603121561438357600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156143a857600080fd5b6143b48682870161435c565b9150509250925092565b600080600080608085870312156143d457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561440057600080fd5b61440c8782880161435c565b91505092959194509250565b634e487b7160e01b600052601260045260246000fd5b60008261443d5761443d614418565b500690565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761081957610819614442565b60006020828403121561448157600080fd5b81356001600160a01b03811681146100c757600080fd5b8015158114610d3f57600080fd5b6000602082840312156144b857600080fd5b81356100c781614498565b8082018082111561081957610819614442565b8181038181111561081957610819614442565b6000600160ff1b82016144fe576144fe614442565b5060000390565b6001600160801b0381811683821601908082111561309157613091614442565b6001600160701b0381811683821601908082111561309157613091614442565b818103600083128015838313168383128216171561309157613091614442565b6000808335601e1984360301811261457c57600080fd5b83018035915067ffffffffffffffff82111561459757600080fd5b602001915036819003821315610e1457600080fd5b6001600160801b0382811682821603908082111561309157613091614442565b80820182811260008312801582168215821617156145ec576145ec614442565b505092915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715614633576146336145f4565b604052919050565b600067ffffffffffffffff821115614655576146556145f4565b5060051b60200190565b600082601f83011261467057600080fd5b815160206146856146808361463b565b61460a565b82815260059290921b840181019181810190868411156146a457600080fd5b8286015b84811015611d9057805183529183019183016146a8565b6000806000606084860312156146d457600080fd5b835167ffffffffffffffff808211156146ec57600080fd5b818601915086601f83011261470057600080fd5b815160206147106146808361463b565b82815260059290921b8401810191818101908a84111561472f57600080fd5b8286015b848110156147675780518681111561474b5760008081fd5b6147598d86838b010161465f565b845250918301918301614733565b509189015191975090935050508082111561478157600080fd5b5061478e8682870161465f565b925050604084015190509250925092565b6000602082840312156147b157600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561081957610819614442565b600081600f0b60016001607f1b0319810361480257614802614442565b60000392915050565b60006020828403121561481d57600080fd5b81516100c781614498565b60008261483757614837614418565b600160ff1b82146000198414161561485157614851614442565b50059056fea2646970667358221220a90d832fb0df7f31a2622ae006c65f8d8bf6d1046ae82ae0acdb4bde1cd78d5964736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    }
};
