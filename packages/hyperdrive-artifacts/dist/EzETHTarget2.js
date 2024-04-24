export const EzETHTarget2 = {
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
            "name": "closeLong",
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
            "name": "removeLiquidity",
            "inputs": [
                {
                    "name": "_lpShares",
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004d6638038062004d6683398101604081905262000035916200026c565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c05260c0808601516101e0526101008087015190915260e08087015190526101208087015190915291850180515190925281518101516101409081528251604090810151610160908152935160609081015161018090815282890151871661020052908801516102205291870151600a80549187166001600160a01b0319928316179055938701516008805491871691861691909117905590860151600980549186169190941617909255918316610240819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000157573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017d919062000389565b6001600160a01b03166102605250620003b0915050565b6040516101c081016001600160401b0381118282101715620001c657634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001e257600080fd5b50565b8051620001f281620001cc565b919050565b6000608082840312156200020a57600080fd5b604051608081016001600160401b03811182821017156200023b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102408112156200028257600080fd5b610220808212156200029357600080fd5b6200029d62000194565b9150620002aa85620001e5565b8252620002ba60208601620001e5565b6020830152620002cd60408601620001e5565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200032c818701620001e5565b9083015261016062000340868201620001e5565b9083015261018062000354868201620001e5565b908301526101a06200036987878301620001f7565b81840152508193506200037e818601620001e5565b925050509250929050565b6000602082840312156200039c57600080fd5b8151620003a981620001cc565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161485a6200050c600039600081816115a801526123940152600081816114750152612261015260005050600050506000818160d3015281816102470152611d0f015260008181610fde0152818161104101528181611ce9015281816124e10152818161251d0152612786015260008181610e4801528181610e980152611cc30152600061170701526000818161182d01528181611fae0152612027015260008181610710015281816118010152611ffb01526000611f74015260008181610e2601528181610eb90152611d3501526000818161064b01528181610f4101528181611e8301526128d70152600081816104f10152818161057e01526105e3015260008181611501015281816122ed015261240c01526000505061485a6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063cbc134341461003b578063ded0623114610068575b600080fd5b61004e61004936600461433c565b610089565b604080519283526020830191909152015b60405180910390f35b61007b61007636600461438c565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610232565b90505b949350505050565b6000806100c861046f565b6100d183610499565b7f00000000000000000000000000000000000000000000000000000000000000008510156101125760405163211ddda360e11b815260040160405180910390fd5b600061011c6104d2565b90506101316101296104ea565b826004610520565b5061013e600033886109b5565b610159600360f81b61015360208701876143e6565b88610a8f565b600061017461016b60208701876143e6565b88848989610b2f565b90945090506101838188614425565b9250600061019083610c72565b5090506101a060208701876143e6565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a6101d789888c610d62565b6101e28a898d610d91565b6101f260408d0160208e01614446565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a350505061009c6001600055565b600061023c61046f565b61024582610499565b7f00000000000000000000000000000000000000000000000000000000000000008410156102865760405163211ddda360e11b815260040160405180910390fd5b60006102906104d2565b9050854210156102ab576102a56101296104ea565b506102b9565b6102b786826004610520565b505b6102ce6102c7600188610db9565b33876109b5565b60008060008060006102e18a878d610dee565b9450945094509450945060008b90508b4210156103785781600b600082825461030a9190614463565b9091555061031d90508b87868685610fc7565b6000610328826111bd565b90506103466103368d611207565b6103409083614476565b82611235565b6000610351896112e8565b90508061037157604051638bdf918d60e01b815260040160405180910390fd5b505061038f565b61038285886112f5565b945061038d876112e8565b505b600061039c86898c6113d6565b90508a8110156103bf5760405163c972651760e01b815260040160405180910390fd5b8b888b6103cd600186610db9565b6103da60208301836143e6565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610411898888610d62565b61041c8a8989610d91565b61042c6040890160208a01614446565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100b56001600055565b60026000540361049257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104a860208301836143e6565b6001600160a01b0316036104cf5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006104e5670de0b6b3a7640000611470565b905090565b60006105167f0000000000000000000000000000000000000000000000000000000000000000426144b4565b6104e59042614425565b600083815260076020526040812080546001600160801b031615158061054557504285115b1561055b57546001600160801b031690506109ae565b6000806105666104ea565b905080870361057757859150610611565b60006105a37f000000000000000000000000000000000000000000000000000000000000000089614463565b90505b6000818152600760205260409020546001600160801b0316925081811480156105cd575082155b156105d6578692505b8260000361060f576106087f000000000000000000000000000000000000000000000000000000000000000082614463565b90506105a6565b505b61061a8261161c565b83546001600160801b0319166001600160801b039190911617835561063e86611646565b50600090506007816106707f00000000000000000000000000000000000000000000000000000000000000008b614425565b815260208101919091526040016000908120546001600160801b0316915061069960028a610db9565b6000818152600e60205260408120549192508a8a83156107df57600192506000806106c886898c8660006117ea565b9150915080600b60008282546106de9190614463565b909155506106fa9050866000846106f481611207565b886118b9565b6107048183614463565b915061073486838a8d877f0000000000000000000000000000000000000000000000000000000000000000611a33565b91506107486107438385611a7d565b611a92565b600580546002906107699084906201000090046001600160701b03166144c8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107968261161c565b600580546010906107b8908490600160801b90046001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006107ec600184610db9565b6000818152600e602052604090205490915080156108fb5760019450600080610819838b8e8860016117ea565b9150915080600b600082825461082f9190614463565b9091555061084b90508360008461084581611207565b8a610fc7565b6108558183614425565b91506108646107438387611a7d565b600580546002906108859084906201000090046001600160701b03166144c8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108b28261161c565b600580546010906108d4908490600160801b90046001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109335761092761090d87611207565b61091683611207565b6109209190614508565b6000611235565b6109318e8e611abc565b505b600061093e8f610c72565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610997959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b03861684529091529020548111156109f857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a3b908490614425565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ac1908490614463565b90915550506000838152600e602052604081208054839290610ae4908490614463565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610a82565b600080610b3b856112e8565b505060065485906001600160801b031680821115610b6057806001600160801b031691505b81600003610b75576000809250925050610c68565b610b84600360f81b89846109b5565b600654600090610baa9084906001600160801b03600160801b9091048116908516611c47565b9050610bb58361161c565b610bbf9083614528565b600680546001600160801b0319166001600160801b0392909216919091179055610be88161161c565b60068054601090610c0a908490600160801b90046001600160801b0316614528565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c398188876113d6565b9350610c458684611c65565b841015610c655760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610c89610c8486611c7a565b611db4565b9150915080610c9f575060009485945092505050565b6000808611610caf576000610cb9565b610cb98387611a7d565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d249190614463565b610d2e9190614425565b905080600003610d475750600096879650945050505050565b6000610d538383611e41565b98600198509650505050505050565b6000610d746040830160208401614446565b15610d805750826109ae565b610d8a8484611a7d565b90506109ae565b6000610da36040830160208401614446565b15610db257610d8a8484611e41565b50826109ae565b60006001600160f81b03821115610de35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e0288611e56565b9050610e6c610e0f611ea7565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611ec8565b909850965091506000808080610edd610e83611ea7565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611f38565b90508c610eec8f878484611f4f565b9a509196509094509250610f008486614425565b610f0a9088614425565b9650610f168386614463565b610f20908c614425565b9a50610f2c888c614463565b9950505050505050610fb285858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610f6b9190614425565b81526020810191909152604001600020546001600160801b0316428d11610fa95760008d8152600760205260409020546001600160801b0316610fab565b8d5b6001612063565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061100957507f00000000000000000000000000000000000000000000000000000000000000006110078583614425565b105b1561101657611016612102565b6003549084900390600f0b61102b8482614508565b90508361103786611207565b13801561106c57507f000000000000000000000000000000000000000000000000000000000000000061106a838361211b565b105b1561107957611079612102565b600254600160801b90046001600160801b03166110c06110bb826110a5670de0b6b3a764000088614548565b6004546001600160801b031691908c6000612141565b61161c565b600480546001600160801b0319166001600160801b03929092169190911790556110ea8882614425565b90506110f58161161c565b600280546001600160801b03928316600160801b02921691909117905561111b8361161c565b600180546001600160801b0319166001600160801b03929092169190911790556111448261220a565b600380546001600160801b0319166001600160801b039290921691909117905561116d8761161c565b6001805460109061118f908490600160801b90046001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006111e5600e60006111d1600286610db9565b815260200190815260200160002054611207565b6111f7600e60006111d1600187610db9565b6112019190614508565b92915050565b60006001600160ff1b038211156112315760405163396ea70160e11b815260040160405180910390fd5b5090565b600061125e6112448483612246565b61124f846000612246565b6112599190614508565b61220a565b9050600081600f0b13156112b3576002805482919060009061128a9084906001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112e3576112c88161455f565b6002805460009061128a9084906001600160801b0316614528565b505050565b6000611201826004611abc565b600080600061130384611646565b909250905060006113148686611a7d565b90508183111561132c57611329868385611c47565b95505b8281101561133e578083039250611343565b600092505b61134c83611a92565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561139f578690036113a3565b5060005b6113ac8161161c565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806113e38585611a7d565b90506113ee8161225c565b9450846000036114025760009150506109ae565b6114126040840160208501614446565b156114415761143a8561142860208601866143e6565b6114356040870187614585565b6123cb565b9150611468565b6114648561145260208601866143e6565b61145f6040870187614585565b6123e6565b8491505b509392505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156114d1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114f99190810190614697565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561155d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115819190614777565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb0906064015b602060405180830381865afa1580156115f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b59190614777565b60006001600160801b0382111561123157604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611669908490600160801b90046001600160801b0316611a7d565b6005546201000090046001600160701b031692509050818111156117e55760006116938383614425565b90506116a26110bb8286612480565b600580546010906116c4908490600160801b90046001600160801b0316614528565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116fd8583611e4190919063ffffffff16565b9050600061172b827f0000000000000000000000000000000000000000000000000000000000000000611a7d565b905080600b600082825461173f9190614463565b9091555061174f90508183614425565b915061175a8261161c565b600180546000906117759084906001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117a282612495565b600380546000906117b7908490600f0b614790565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117f78785611e41565b91506000611825837f0000000000000000000000000000000000000000000000000000000000000000611a7d565b9050611851817f0000000000000000000000000000000000000000000000000000000000000000611a7d565b91508315611874576118638282614425565b61186d9084614425565b925061188b565b61187e8282614425565b6118889084614463565b92505b868610156118ae5761189e838789611c47565b92506118ab828789611c47565b91505b509550959350505050565b600354600160801b90046001600160801b03166119026110bb826118e5670de0b6b3a764000086614548565b600454600160801b90046001600160801b031691908a6000612141565b600480546001600160801b03928316600160801b0292169190911790556119288661161c565b6119329082614528565b600380546001600160801b03928316600160801b0292169190911790556119588461161c565b600180546000906119739084906001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119a08361220a565b600380546000906119b5908490600f0b614790565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506119e58561161c565b60018054601090611a07908490600160801b90046001600160801b0316614528565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611a4b84611a458a888a611c47565b90611e41565b9050611a58888486611c47565b611a629082614463565b905086811115611a725786810391505b509695505050505050565b60006109ae8383670de0b6b3a7640000611c47565b60006001600160701b038211156112315760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611b07916001600160801b031690614425565b905080600003611b1b576001915050611201565b6000611b26856124bf565b905080600003611b3b57600192505050611201565b600080611b49838589612561565b9150915080611b5f576000945050505050611201565b600080611b6c8489612667565b91509150611b8a611b7c82611207565b611b85906147bd565b612759565b925082611ba05760009650505050505050611201565b611ba98261161c565b60068054600090611bc49084906001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bf18161161c565b60068054601090611c13908490600160801b90046001600160801b03166144e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611c5e57600080fd5b5091020490565b60006109ae8383670de0b6b3a7640000612866565b611c82614277565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d7a911661288c565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611dac9290041661288c565b905292915050565b6000806000806000611dc586612902565b9150915080611ddc57506000958695509350505050565b611de98660a00151611207565b611df287612c22565b83611e008960000151611207565b611e0a9190614476565b611e149190614476565b611e1e9190614508565b925050506000811215611e375750600093849350915050565b9360019350915050565b60006109ae83670de0b6b3a764000084611c47565b600080611e616104ea565b9050808311611e71576000611e7b565b611e7b8184614425565b91506109ae827f0000000000000000000000000000000000000000000000000000000000000000611e41565b6001546003546000916104e5916001600160801b0390911690600f0b61211b565b60008080611ee9611ee188670de0b6b3a7640000614425565b899087611c47565b90508615611f2b57611efb8888611a7d565b9150611f1c8a8a84611f158a670de0b6b3a7640000614425565b8989612c86565b9250611f288382614463565b90505b9750975097945050505050565b60006100b282611f49858888611c47565b90612ca9565b6000808080611fa68786611f9f8b611f99611f728c670de0b6b3a7640000614425565b7f000000000000000000000000000000000000000000000000000000000000000090611c65565b90611c65565b9190612866565b9350611fd2847f0000000000000000000000000000000000000000000000000000000000000000611a7d565b91506000611ff3611feb89670de0b6b3a7640000614425565b8a9088612866565b905061201f817f0000000000000000000000000000000000000000000000000000000000000000611c65565b935061204b847f0000000000000000000000000000000000000000000000000000000000000000611a7d565b6120559084614463565b915050945094509450949050565b600080600080600080888810156120d2578615612088576120858d898b611c47565b9c505b6120938c898b611c47565b9b5061209e8b611207565b6120a78d611207565b6120b19190614508565b90506120be8b898b611c47565b9a506120cb8a898b611c47565b99506120f1565b6120db8b611207565b6120e48d611207565b6120ee9190614508565b90505b9b9c9a9b999a975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806121288484612d1e565b90925090508061213a5761213a612102565b5092915050565b600082600003612152575084612201565b81156121c4576121836121658487614463565b61216f8587611a7d565b612179888a611a7d565b611a459190614463565b905060006121918588612d5a565b9050600061219f8689612d69565b9050818310156121b1578192506121bd565b808311156121bd578092505b5050612201565b8285036121d357506000612201565b6121fe6121e08487614425565b6121ea8587611c65565b6121f4888a611a7d565b611a459190614425565b90505b95945050505050565b600060016001607f1b0319821280612228575060016001607f1b0382135b156112315760405163a5353be560e01b815260040160405180910390fd5b600081831361225557816109ae565b5090919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156122bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526122e59190810190614697565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612349573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236d9190614777565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638f686e6a906064016115db565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612455573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061247991906147d9565b5050505050565b60006109ae83670de0b6b3a764000084612866565b600060016001607f1b038211156112315760405163a5353be560e01b815260040160405180910390fd5b60025460009081906124da906001600160801b031684612480565b90506125067f000000000000000000000000000000000000000000000000000000000000000082614463565b6001546001600160801b0316111561255b576001547f0000000000000000000000000000000000000000000000000000000000000000906125519083906001600160801b0316614425565b6109ae9190614425565b50919050565b6125696142d8565b60008061257584611c7a565b9050600061258282611db4565b935090508261259757506000915061009c9050565b60006125be6125b9846101600151856101400151611a7d90919063ffffffff16565b611207565b6125de6125b9856101200151866101000151611c6590919063ffffffff16565b6125e89190614508565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60008060008061267f8660c001518760e00151612d1e565b915091508061269657600080935093505050612752565b60006126a28784612d78565b925090508115806126b1575080155b156126c55760008094509450505050612752565b60006126d18883612e87565b9050806000036126eb576000809550955050505050612752565b876060015181116127025794509250612752915050565b50606087015160006127168986858b612f58565b90508060000361273157600080965096505050505050612752565b82811061274957600080965096505050505050612752565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806127ab8787877f00000000000000000000000000000000000000000000000000000000000000008d61346d565b9350935093509350806127c75750600098975050505050505050565b8684146127f8576127d78461161c565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612829576128088361220a565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612857576128398261161c565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600082600019048411830215820261287d57600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006128a06104ea565b6128aa9190614548565b90508083116128ba5760006128c4565b6128c48184614425565b91506109ae6128fb670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614548565b8390611e41565b60008060006129276125b9856101600151866101400151611a7d90919063ffffffff16565b6129476125b9866101200151876101000151611c6590919063ffffffff16565b6129519190614508565b905060008061296886600001518760200151612d1e565b915091508061297f57506000958695509350505050565b6000831315612ac057600083905060006129cd886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006129be9190614425565b8d606001518e60800151613585565b93509050826129e6575060009788975095505050505050565b818110612a84576000612a20858a60400151858c60e00151670de0b6b3a7640000612a119190614425565b8d606001518e60800151613691565b9450905083158015612a3557508860c0015183105b15612a4c5750600098600198509650505050505050565b83612a6257506000988998509650505050505050565b612a6b81611207565b612a74906147bd565b9960019950975050505050505050565b6000886020015112612aac57612aa38860a00151856125b99190614425565b610d53906147bd565b60a08801518851612aa3916125b991614425565b6000831215612c13576000612ad4846147bd565b90506000612b088489604001518a60e00151670de0b6b3a7640000612af99190614425565b8b606001518c60800151613754565b9350905082612b21575060009788975095505050505050565b818110612ba6576000612b5b858a60400151858c60e00151670de0b6b3a7640000612b4c9190614425565b8d606001518e608001516137fd565b9450905083158015612b7057508860c0015183105b15612b875750600098600198509650505050505050565b83612b9d57506000988998509650505050505050565b612a7481611207565b6000612bd8858a604001518b60e00151670de0b6b3a7640000612bc99190614425565b8c606001518d608001516138d4565b9450905083612bf257506000988998509650505050505050565b612a74612c098a606001518486611a459190614425565b6125b99083614463565b50600095600195509350505050565b6000612c556125b9836101200151670de0b6b3a7640000612c439190614425565b60608501516101008601519190612866565b6111f76125b9846101600151670de0b6b3a7640000612c749190614425565b60608601516101408701519190611c47565b600080612c97888888888888613691565b909250905080611a7257611a72612102565b600081600003612cc25750670de0b6b3a7640000611201565b82600003612cd257506000611201565b6000612cdd83611207565b90506000612cf2612ced86611207565b613983565b9050818102612d09670de0b6b3a7640000826147f6565b9050612d1481613ba9565b9695505050505050565b600080600083612d2d86611207565b612d379190614508565b90506000811215612d4f576000809250925050612752565b946001945092505050565b600081831161255b57826109ae565b600081831161225557816109ae565b60008060008460a0015112612d9557505060808201516001612752565b60008460a00151612da5906147bd565b90506000612de185876101000151886000015160e00151670de0b6b3a7640000612dcf9190614425565b89516060810151608090910151613754565b93509050821580612df0575080155b15612e0357600080935093505050612752565b6000612e0f8383612480565b9050670de0b6b3a76400008111612e4b5780670de0b6b3a7640000039450612e448760c0015186611a7d90919063ffffffff16565b9450612e5a565b60008094509450505050612752565b8660800151851115612e79578660800151600194509450505050612752565b506001925050509250929050565b600080612ebd8460c001518560e00151866101000151876000015160a00151612eaf88611207565b612eb8906147bd565b61346d565b87516040810192909252602082019290925291909152905080612ee4576000915050611201565b6000612ef38560000151611db4565b9250905081612f0757600092505050611201565b84602001518110612f1d57600092505050611201565b600085606001518660400151612f339190614463565b9050612f4e82876020015183611c479092919063ffffffff16565b612d149082614425565b60008085606001518660400151612f6f9190614463565b60208701516060880151919250600091612f899184611c47565b90508660a00151600003612fa05791506100b59050565b60008080896004881015612fb357600497505b60005b8881101561330f57612fc8868b612d5a565b95506000612ff18360c001518460e00151856101000151866000015160a00151612eaf8c611207565b8651604081019290925260208201929092529190915290508061301f576000985050505050505050506100b5565b600061302e8e60000151611db4565b925090508161304957600099505050505050505050506100b5565b61305484828b613d3e565b1561306a578799505050505050505050506100b5565b60008460a0015113156131d357835180516020820151604083015160a084015160e0909401516000946130be949392916130ac90670de0b6b3a7640000614425565b8a516060810151608090910151613585565b93509050826130da5760009a50505050505050505050506100b5565b808560a00151106131d1576130ee85613daa565b90995092508261310b5760009a50505050505050505050506100b5565b6131308560c001518660e00151876101000151886000015160a00151612eaf8e611207565b885160408101929092526020820192909252919091529250826131605760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e09094015161319094906130ac90670de0b6b3a7640000614425565b93509050826131ac5760009a50505050505050505050506100b5565b8e60a0015181116131c957889a50505050505050505050506100b5565b505050612fb6565b505b60006131e4858f8760a00151613e80565b935090508215806131fd5750670de0b6b3a76400008110155b156132155760009a50505050505050505050506100b5565b80670de0b6b3a764000003905060006132426125b987604001518860200151611c6590919063ffffffff16565b61324f6125b9858e611a7d565b6132599190614508565b9050881580613277575061326c896141db565b613275826141db565b125b15613286578098508997508296505b60008113156132ae5761329d8b611a458385611e41565b6132a7908b614463565b9950613300565b60008112156132f75760006132c88c611a458581866147bd565b90508a8110156132dc57808b039a506132f1565b60009c505050505050505050505050506100b5565b50613300565b5050505061330f565b84600101945050505050612fb6565b5060006133378260c001518360e00151846101000151856000015160a00151612eaf8b611207565b855160408101929092526020820192909252919091529050806133645760009750505050505050506100b5565b600061337383600001516141f3565b905060006133956125b985604001518660200151611c6590919063ffffffff16565b6133a26125b9848c611a7d565b6133ac9190614508565b90506133b7876141db565b6133c0826141db565b12156133cd578795508194505b6133f46133e8655af3107a4000670de0b6b3a7640000614425565b6020860151908b612866565b6040850151613404908790611e41565b10806134445750613432613426655af3107a4000670de0b6b3a7640000614463565b6020860151908b611c47565b6040850151613442908790612480565b115b1561345b57600099505050505050505050506100b5565b50939c9b505050505050505050505050565b6000806000808460000361348c57508792508691508590506001613579565b6000856134988b611207565b6134a29190614476565b90506134ad87611207565b8112156134c857600080600080945094509450945050613579565b809450600089126134e8576134e16125b9868b8d611c47565b935061350b565b6134ff6125b96134f78b6147bd565b87908d612866565b613508906147bd565b93505b6000806135188c8c612d1e565b9150915080613537576000806000809650965096509650505050613579565b60006135438888612d1e565b925090508161356357600080600080975097509750975050505050613579565b61356e8b8285611c47565b955060019450505050505b95509550955095915050565b60008060008812156135a75761359a886147bd565b6135a49087614463565b95505b6000806135b48b8b612d1e565b91509150806135cb57600080935093505050613685565b60006135da838b8a8a8a614223565b905060006135f76135ef8a611f498a8e611c65565b899089612866565b905080821015613611576000809550955050505050613685565b808203670de0b6b3a764000081106136465761363f613638670de0b6b3a76400008c611e41565b8290612ca9565b905061365e565b61365b613638670de0b6b3a76400008c612480565b90505b8b81101561367757600080965096505050505050613685565b8b9003955060019450505050505b97509795505050505050565b60008060006136a38989888888614252565b90506136b386611f49898b614463565b9750878110156136ca576000809250925050613749565b8781036136d8818688612866565b9050670de0b6b3a76400008110613705576136fe613638670de0b6b3a764000089612480565b905061371d565b61371a613638670de0b6b3a764000089611e41565b90505b6137278186612480565b9050808a101561373f57600080935093505050613749565b8903925060019150505b965096945050505050565b60008060006137668888888888614252565b90506000613791670de0b6b3a76400006137808888611e41565b61378a9190614463565b8390612480565b9050670de0b6b3a764000081106137be576137b7613638670de0b6b3a764000089612480565b90506137d6565b6137d3613638670de0b6b3a764000089611e41565b90505b808810156137ec57600080935093505050610c68565b909603976001975095505050505050565b600080600061380f8989888888614252565b905086881015613826576000809250925050613749565b96869003966138358887612ca9565b97508781101561384c576000809250925050613749565b87810361385a818688612866565b9050670de0b6b3a7640000811061388757613880613638670de0b6b3a764000089612480565b905061389f565b61389c613638670de0b6b3a764000089611e41565b90505b6138a98186612480565b9050898110156138c157600080935093505050613749565b9890980398600198509650505050505050565b60008060006138e68888888888614223565b9050600061390a670de0b6b3a76400006139008888612480565b6128fb9190614463565b9050670de0b6b3a7640000811061393757613930613638670de0b6b3a764000089611e41565b905061394f565b61394c613638670de0b6b3a764000089612480565b90505b6139598186611e41565b90508881101561397157600080935093505050610c68565b97909703976001975095505050505050565b60008082136139a55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190613a289084901c611207565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613bc457506000919050565b680755bf798b4a1bf1e58212613bed576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612d1474029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611207565b6020830151600090613d509084612480565b6040850151613d60908490611e41565b101580156100b557506020840151613d909084613d89633b9aca00670de0b6b3a7640000614463565b9190611c47565b6040850151613da0908490612480565b1115949350505050565b60008060008360e0015113613dc457506000928392509050565b6000613dd38460000151612c22565b90506000613dff856040015186606001518760400151613df39190614463565b60208801519190612866565b905060008212613e265780821015613e1957819003613e3c565b5060009485945092505050565b613e2f826147bd565b613e399082614463565b90505b60e085015160c0860151613e51918390612866565b9050808560c001511015613e6c575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613ea457855160400151613e9d908590614463565b9050613edf565b6000613eaf856147bd565b875160400151909150811015613ecf578651604001518190039150613edd565b60008093509350505061009c565b505b855180516020909101516000918291613ef89190612d1e565b9150915080613f10576000809450945050505061009c565b875160e0810151604090910151600091613f4591613f3991613f329190612ca9565b8a90611a7d565b6101008b015190612480565b895160e0810151608090910151613f7091613f6491611f499088611a7d565b8b516060015190612480565b613f7a9190614463565b90506000613fb2613fa6613f9f8c6000015160e0015188612ca990919063ffffffff16565b8b90611c65565b6101008c015190611e41565b905080821015613fcd5760008096509650505050505061009c565b8082039150600061400f858c60000151604001518d6000015160e00151670de0b6b3a7640000613ffd9190614425565b8e516060810151608090910151614252565b905060006140398c6000015160e00151670de0b6b3a76400006140329190614425565b8890612ca9565b90508082101561405657600080985098505050505050505061009c565b8b51608081015160609091015191830391614072918391612866565b9050670de0b6b3a764000081106140b6578b5160e001516140af90613638906140a390670de0b6b3a7640000614425565b8e5160e0015190612480565b90506140e5565b8b5160e001516140e290613638906140d690670de0b6b3a7640000614425565b8e5160e0015190611e41565b90505b8b51606001516140f89085908390612866565b935083670de0b6b3a7640000111561411c5783670de0b6b3a7640000039350614130565b60006001985098505050505050505061009c565b60008c60e00151126141935760c08c015160e08d015161414f91612480565b9250670de0b6b3a764000083111561417457600080985098505050505050505061009c565b670de0b6b3a7640000929092039161418c8484611a7d565b93506141c8565b6141c56141ac8d60c001518e60e00151611a45906147bd565b6141be90670de0b6b3a7640000614463565b8590611a7d565b93505b50919a60019a5098505050505050505050565b60008082126141ea5781611201565b611201826147bd565b600080600061420184611db4565b915091508061213a57604051635516328b60e11b815260040160405180910390fd5b600061422f8585612ca9565b61424861424086611f49868b611a7d565b859085611c47565b6121fe9190614463565b600061425e8585612ca9565b61424861426f86611f49868b611c65565b859085612866565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806142ec614277565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561255b57600080fd5b60008060006060848603121561435157600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561437657600080fd5b6143828682870161432a565b9150509250925092565b600080600080608085870312156143a257600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156143ce57600080fd5b6143da8782880161432a565b91505092959194509250565b6000602082840312156143f857600080fd5b81356001600160a01b03811681146109ae57600080fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156112015761120161440f565b80151581146104cf57600080fd5b60006020828403121561445857600080fd5b81356109ae81614438565b808201808211156112015761120161440f565b80820182811260008312801582168215821617156144965761449661440f565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826144c3576144c361449e565b500690565b6001600160701b0381811683821601908082111561213a5761213a61440f565b6001600160801b0381811683821601908082111561213a5761213a61440f565b818103600083128015838313168383128216171561213a5761213a61440f565b6001600160801b0382811682821603908082111561213a5761213a61440f565b80820281158282048414176112015761120161440f565b600081600f0b60016001607f1b0319810361457c5761457c61440f565b60000392915050565b6000808335601e1984360301811261459c57600080fd5b83018035915067ffffffffffffffff8211156145b757600080fd5b60200191503681900382131561275257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561460b5761460b6145cc565b604052919050565b600067ffffffffffffffff82111561462d5761462d6145cc565b5060051b60200190565b600082601f83011261464857600080fd5b8151602061465d61465883614613565b6145e2565b82815260059290921b8401810191818101908684111561467c57600080fd5b8286015b84811015611a725780518352918301918301614680565b6000806000606084860312156146ac57600080fd5b835167ffffffffffffffff808211156146c457600080fd5b818601915086601f8301126146d857600080fd5b815160206146e861465883614613565b82815260059290921b8401810191818101908a84111561470757600080fd5b8286015b8481101561473f578051868111156147235760008081fd5b6147318d86838b0101614637565b84525091830191830161470b565b509189015191975090935050508082111561475957600080fd5b5061476686828701614637565b925050604084015190509250925092565b60006020828403121561478957600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112015761120161440f565b6000600160ff1b82016147d2576147d261440f565b5060000390565b6000602082840312156147eb57600080fd5b81516109ae81614438565b6000826148055761480561449e565b600160ff1b82146000198414161561481f5761481f61440f565b50059056fea2646970667358221220386f2276acfb36fbb09cbcddf8db8a25b4072e6e02415be26b620470d2d287c964736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
