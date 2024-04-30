export const MockHyperdriveTarget3 = {
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
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004f3638038062004f368339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614aab6200048b600039600050506000505060008181610484015261296a0152600081816101fd015281816102540152818161033b015281816115400152818161157c0152818161181401528181611d6c01528181611dcf0152818161286f01526129440152600081816102aa01528181611067015281816110af015281816111cf0152818161230701528181612392015261291e015260006119b5015260008181611adb0152612758015260008181610a45015281816111220152611aaf01526000818161110101526127140152600081816102ed01528181611045015281816110d0015281816111f001526129900152600081816102cc0152818161055001528181610980015261396f01526000818161013f01528181610826015281816108b3015261091801526000505060008181610cea0152818161143e01528181611487015281816121050152818161214e015281816121e0015281816122610152818161240001528181612481015281816133b901526134020152614aab6000f3fe6080604052600436106100345760003560e01c8063414f826d1461003957806377d05ff41461005b578063cba2e58d14610081575b600080fd5b34801561004557600080fd5b50610059610054366004614704565b6100a9565b005b61006e610069366004614738565b6100b7565b6040519081526020015b60405180910390f35b61009461008f366004614788565b6100ce565b60408051928352602083019190915201610078565b6100b382826100eb565b5050565b60006100c48484846101a7565b90505b9392505050565b6000806100dd8686868661041d565b915091505b94509492505050565b6100f3610651565b60006100fd61067b565b6000848152600760205260409020549091506001600160801b03161561012e576101278183610693565b505061019d565b600061013861081f565b90506101647f0000000000000000000000000000000000000000000000000000000000000000856147f8565b15158061017057508381105b1561018e5760405163ecd29e8160e01b815260040160405180910390fd5b610199848385610855565b5050505b6100b36001600055565b60006101b1610651565b6101b9610ce8565b6101c282610d54565b60055460ff16156101e657604051637983c05160e01b815260040160405180910390fd5b6000806101f38685610d8d565b90925090506102237f00000000000000000000000000000000000000000000000000000000000000006002614822565b82101561024357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061028182610e66565b600180546001600160801b0319166001600160801b0392909216919091179055610316610311837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e94565b610e66565b600180546001600160801b03928316600160801b02921691909117905561035f6000807f0000000000000000000000000000000000000000000000000000000000000000610f33565b61037760006103716020870187614839565b85610f33565b61038a61038261081f565b826004610855565b506000610398878387610fdb565b90506103a76020860186614839565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866103e460408b0160208c01614870565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a25050506100c76001600055565b600080610428610651565b600554610100900460ff1615610451576040516321081abf60e01b815260040160405180910390fd5b610459610ce8565b61046283610d54565b60008061046f8886610d8d565b90925090506000610480838361100a565b90507f00000000000000000000000000000000000000000000000000000000000000008110156104c35760405163211ddda360e11b815260040160405180910390fd5b868210156104e4576040516342af972b60e01b815260040160405180910390fd5b60006104ee61081f565b90506104fc81846004610855565b5060008061050a868661101f565b90985090925090508a8710156105335760405163c972651760e01b815260040160405180910390fd5b80600b6000828254610545919061488d565b9091555061057590507f00000000000000000000000000000000000000000000000000000000000000008461488d565b97506105838288878b61122c565b600061059060018a6113c6565b90506105a9816105a360208d018d614839565b8a610f33565b8c8989888d856105bc6020830183614839565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866105f2898787610fdb565b6105fd8a88886113fb565b61060d6040880160208901614870565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100e26001600055565b60026000540361067457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061068e670de0b6b3a7640000611423565b905090565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916106de916001600160801b0316906148a0565b9050806000036106f2576001915050610819565b60006106fd8561151e565b90508060000361071257600192505050610819565b6000806107208385896115c0565b9150915080610736576000945050505050610819565b60008061074384896116cd565b91509150610761610753826117bd565b61075c906148b3565b6117e7565b9250826107775760009650505050505050610819565b61078082610e66565b6006805460009061079b9084906001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506107c881610e66565b600680546010906107ea908490600160801b90046001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600061084b7f0000000000000000000000000000000000000000000000000000000000000000426147f8565b61068e90426148a0565b600083815260076020526040812080546001600160801b031615158061087a57504285115b1561089057546001600160801b031690506100c7565b60008061089b61081f565b90508087036108ac57859150610946565b60006108d87f00000000000000000000000000000000000000000000000000000000000000008961488d565b90505b6000818152600760205260409020546001600160801b031692508181148015610902575082155b1561090b578692505b826000036109445761093d7f00000000000000000000000000000000000000000000000000000000000000008261488d565b90506108db565b505b61094f82610e66565b83546001600160801b0319166001600160801b0391909116178355610973866118f4565b50600090506007816109a57f00000000000000000000000000000000000000000000000000000000000000008b6148a0565b815260208101919091526040016000908120546001600160801b031691506109ce60028a6113c6565b6000818152600e60205260408120549192508a8a8315610b1457600192506000806109fd86898c866000611a98565b9150915080600b6000828254610a13919061488d565b90915550610a2f905086600084610a29816117bd565b88611b67565b610a39818361488d565b9150610a6986838a8d877f0000000000000000000000000000000000000000000000000000000000000000611ce1565b9150610a7d610a78838561100a565b611d2b565b60058054600290610a9e9084906201000090046001600160701b03166148ef565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610acb82610e66565b60058054601090610aed908490600160801b90046001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b216001846113c6565b6000818152600e60205260409020549091508015610c305760019450600080610b4e838b8e886001611a98565b9150915080600b6000828254610b64919061488d565b90915550610b80905083600084610b7a816117bd565b8a611d55565b610b8a81836148a0565b9150610b99610a78838761100a565b60058054600290610bba9084906201000090046001600160701b03166148ef565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610be782610e66565b60058054601090610c09908490600160801b90046001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c6857610c5c610c42876117bd565b610c4b836117bd565b610c55919061490f565b6000611f46565b610c668e8e610693565b505b6000610c738f611ff9565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610ccc959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610d3457503415155b15610d5257604051631574f9f360e01b815260040160405180910390fd5b565b6000610d636020830183614839565b6001600160a01b031603610d8a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610da16040850160208601614870565b15610dc657610dbc85610db7604087018761492f565b6120e9565b9093509050610de2565b5034610dde85610dd9604087018761492f565b612375565b8492505b610dea61067b565b91508015610e5d57604051600090339083908381818185875af1925050503d8060008114610e34576040519150601f19603f3d011682016040523d82523d6000602084013e610e39565b606091505b5050905080610e5b576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006001600160801b03821115610e9057604051630f0af95160e11b815260040160405180910390fd5b5090565b600080610ea5846301e1338061251f565b90506000610eb3868361100a565b610ec590670de0b6b3a764000061488d565b9050670de0b6b3a76400008110610ef957610ef2610eeb670de0b6b3a76400008661251f565b8290612534565b9050610f11565b610f0e610eeb670de0b6b3a7640000866125a9565b90505b610f2581610f1f898b61100a565b9061100a565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610f6590849061488d565b90915550506000838152600e602052604081208054839290610f8890849061488d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fed6040830160208401614870565b15610ff95750826100c7565b611003848461100a565b90506100c7565b60006100c78383670de0b6b3a76400006125be565b600080600061108b61102f6125dc565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000006125fd565b915060006110f461109a6125dc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612629565b905061114b8684611146847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612640565b6126ab565b15611158576111586126ed565b600080611166888489612706565b909250905061117582866148a0565b94506111828184896125be565b935061118e84896148a0565b9550670de0b6b3a7640000611214876111a56125dc565b6111af919061488d565b6001546111cd908990600160801b90046001600160801b03166148a0565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612629565b1115611222576112226126ed565b5050509250925092565b600254600160801b90046001600160801b031661126e61031182611258670de0b6b3a764000086614822565b6004546001600160801b03169190886001612786565b600480546001600160801b0319166001600160801b039290921691909117905561129785610e66565b600180546000906112b29084906001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112df84610e66565b60018054601090611301908490600160801b90046001600160801b0316614976565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061132e84610e66565b61133890826148cf565b600280546001600160801b03808416600160801b0291161790559050600061135f83612824565b905061137d8161136e876117bd565b6113789084614996565b611f46565b61138684612868565b611392576113926126ed565b600061139d856128c8565b9050806113bd57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156113f05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061140d6040830160208401614870565b1561141c57611003848461251f565b50826100c7565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016114725750476114fd565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156114d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fa91906149be565b90505b60125460000361150e5760006100c7565b6012546100c790849083906125be565b6002546000908190611539906001600160801b0316846125a9565b90506115657f00000000000000000000000000000000000000000000000000000000000000008261488d565b6001546001600160801b031611156115ba576001547f0000000000000000000000000000000000000000000000000000000000000000906115b09083906001600160801b03166148a0565b6100c791906148a0565b50919050565b6115c8614651565b6000806115d4846128d5565b905060006115e182612a0f565b93509050826115f65750600091506116c59050565b600061161d61161884610160015185610140015161100a90919063ffffffff16565b6117bd565b61163d611618856101200151866101000151612a9c90919063ffffffff16565b611647919061490f565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806116e58660c001518760e00151612ab1565b91509150806116fc57600080935093505050610e5f565b60006117088784612aed565b92509050811580611717575080155b1561172b5760008094509450505050610e5f565b60006117378883612bfc565b905080600003611751576000809550955050505050610e5f565b876060015181116117685794509250610e5f915050565b506060870151600061177c8986858b612ccd565b90508060000361179757600080965096505050505050610e5f565b8281106117af57600080965096505050505050610e5f565b909890975095505050505050565b60006001600160ff1b03821115610e905760405163396ea70160e11b815260040160405180910390fd5b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806118398787877f00000000000000000000000000000000000000000000000000000000000000008d6131e4565b9350935093509350806118555750600098975050505050505050565b8684146118865761186584610e66565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146118b757611896836132fc565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146118e5576118c782610e66565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6005546000908190611917908490600160801b90046001600160801b031661100a565b6005546201000090046001600160701b03169250905081811115611a9357600061194183836148a0565b905061195061031182866125a9565b60058054601090611972908490600160801b90046001600160801b0316614976565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006119ab858361251f90919063ffffffff16565b905060006119d9827f000000000000000000000000000000000000000000000000000000000000000061100a565b905080600b60008282546119ed919061488d565b909155506119fd905081836148a0565b9150611a0882610e66565b60018054600090611a239084906001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a5082613338565b60038054600090611a65908490600f0b6149d7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611aa5878561251f565b91506000611ad3837f000000000000000000000000000000000000000000000000000000000000000061100a565b9050611aff817f000000000000000000000000000000000000000000000000000000000000000061100a565b91508315611b2257611b1182826148a0565b611b1b90846148a0565b9250611b39565b611b2c82826148a0565b611b36908461488d565b92505b86861015611b5c57611b4c8387896125be565b9250611b598287896125be565b91505b509550959350505050565b600354600160801b90046001600160801b0316611bb061031182611b93670de0b6b3a764000086614822565b600454600160801b90046001600160801b031691908a6000612786565b600480546001600160801b03928316600160801b029216919091179055611bd686610e66565b611be09082614976565b600380546001600160801b03928316600160801b029216919091179055611c0684610e66565b60018054600090611c219084906001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c4e836132fc565b60038054600090611c63908490600f0b6149d7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c9385610e66565b60018054601090611cb5908490600160801b90046001600160801b0316614976565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611cf984611cf38a888a6125be565b9061251f565b9050611d068884866125be565b611d10908261488d565b905086811115611d205786810391505b509695505050505050565b60006001600160701b03821115610e905760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611d9757507f0000000000000000000000000000000000000000000000000000000000000000611d9585836148a0565b105b15611da457611da46126ed565b6003549084900390600f0b611db9848261490f565b905083611dc5866117bd565b138015611dfa57507f0000000000000000000000000000000000000000000000000000000000000000611df88383613362565b105b15611e0757611e076126ed565b600254600160801b90046001600160801b0316611e4961031182611e33670de0b6b3a764000088614822565b6004546001600160801b031691908c6000612786565b600480546001600160801b0319166001600160801b0392909216919091179055611e7388826148a0565b9050611e7e81610e66565b600280546001600160801b03928316600160801b029216919091179055611ea483610e66565b600180546001600160801b0319166001600160801b0392909216919091179055611ecd826132fc565b600380546001600160801b0319166001600160801b0392909216919091179055611ef687610e66565b60018054601090611f18908490600160801b90046001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611f6f611f558483613388565b611f60846000613388565b611f6a919061490f565b6132fc565b9050600081600f0b1315611fc45760028054829190600090611f9b9084906001600160801b03166148cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611ff457611fd981614a04565b60028054600090611f9b9084906001600160801b0316614976565b505050565b60008060008061201061200b866128d5565b612a0f565b9150915080612026575060009485945092505050565b6000808611612036576000612040565b612040838761100a565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120ab919061488d565b6120b591906148a0565b9050806000036120ce5750600096879650945050505050565b60006120da838361251f565b98600198509650505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016121395750476121c4565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561219d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c191906149be565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161223f578734101561222e576040516312171d8360e31b815260040160405180910390fd5b61223888346148a0565b90506122d9565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156122b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122d69190614a2a565b91505b816122f7576040516312171d8360e31b815260040160405180910390fd5b60125460000361233c5761232b887f000000000000000000000000000000000000000000000000000000000000000061251f565b6012819055945092506116c5915050565b60125460009061234e908a90866125be565b90508060126000828254612362919061488d565b909155509095509093506116c592505050565b600061238084611423565b90506012546000036123be576123b6817f000000000000000000000000000000000000000000000000000000000000000061251f565b6012556123e4565b60006123c98261339e565b905080601260008282546123dd919061488d565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161245f578234101561244e576040516312171d8360e31b815260040160405180910390fd5b61245883346148a0565b90506124f9565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156124d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124f69190614a2a565b91505b81612517576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006100c783670de0b6b3a7640000846125be565b60008160000361254d5750670de0b6b3a7640000610819565b8260000361255d57506000610819565b6000612568836117bd565b9050600061257d612578866117bd565b613487565b9050818102612594670de0b6b3a764000082614a47565b905061259f816136ad565b9695505050505050565b60006100c783670de0b6b3a764000084613842565b60008260001904841183021582026125d557600080fd5b5091020490565b60015460035460009161068e916001600160801b0390911690600f0b613362565b600061261e87878761261788670de0b6b3a76400006148a0565b8787613868565b979650505050505050565b6000610f2a8261263a8588886125be565b90612534565b60006100c461268761265a84670de0b6b3a76400006148a0565b612681670de0b6b3a7640000612670818a6125a9565b61267a91906148a0565b8790612a9c565b90612a9c565b61269990670de0b6b3a764000061488d565b611cf384670de0b6b3a76400006148a0565b6000806126e2856126ba6125dc565b6126c4919061488d565b6001546111cd908790600160801b90046001600160801b03166148a0565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806127508561268185817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612746818c6125a9565b61268191906148a0565b915061277c827f000000000000000000000000000000000000000000000000000000000000000061100a565b9050935093915050565b600082600003612797575084610f2a565b81156127ea576127c86127aa848761488d565b6127b4858761100a565b6127be888a61100a565b611cf3919061488d565b905060006127d68588613915565b9050808210156127e4578091505b50610f2a565b8285036127f957506000610f2a565b61259f61280684876148a0565b6128108587612a9c565b61281a888a61100a565b611cf391906148a0565b600061284c600e60006128386002866113c6565b8152602001908152602001600020546117bd565b61285e600e60006128386001876113c6565b610819919061490f565b60006128947f000000000000000000000000000000000000000000000000000000000000000083612a9c565b6002546128aa91906001600160801b031661488d565b6001546128c0906001600160801b03168461100a565b101592915050565b6000610819826004610693565b6128dd6146a3565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916129d59116613924565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612a0792900416613924565b905292915050565b6000806000806000612a208661399a565b9150915080612a3757506000958695509350505050565b612a448660a001516117bd565b612a4d87613cba565b83612a5b89600001516117bd565b612a659190614996565b612a6f9190614996565b612a79919061490f565b925050506000811215612a925750600093849350915050565b9360019350915050565b60006100c78383670de0b6b3a7640000613842565b600080600083612ac0866117bd565b612aca919061490f565b90506000811215612ae2576000809250925050610e5f565b946001945092505050565b60008060008460a0015112612b0a57505060808201516001610e5f565b60008460a00151612b1a906148b3565b90506000612b5685876101000151886000015160e00151670de0b6b3a7640000612b4491906148a0565b89516060810151608090910151613d1e565b93509050821580612b65575080155b15612b7857600080935093505050610e5f565b6000612b8483836125a9565b9050670de0b6b3a76400008111612bc05780670de0b6b3a7640000039450612bb98760c001518661100a90919063ffffffff16565b9450612bcf565b60008094509450505050610e5f565b8660800151851115612bee578660800151600194509450505050610e5f565b506001925050509250929050565b600080612c328460c001518560e00151866101000151876000015160a00151612c24886117bd565b612c2d906148b3565b6131e4565b87516040810192909252602082019290925291909152905080612c59576000915050610819565b6000612c688560000151612a0f565b9250905081612c7c57600092505050610819565b84602001518110612c9257600092505050610819565b600085606001518660400151612ca8919061488d565b9050612cc3828760200151836125be9092919063ffffffff16565b61259f90826148a0565b60008085606001518660400151612ce4919061488d565b60208701516060880151919250600091612cfe91846125be565b90508660a00151600003612d155791506131dc9050565b60008080896004881015612d2857600497505b60005b8881101561308457612d3d868b613915565b95506000612d668360c001518460e00151856101000151866000015160a00151612c248c6117bd565b86516040810192909252602082019290925291909152905080612d94576000985050505050505050506131dc565b6000612da38e60000151612a0f565b9250905081612dbe57600099505050505050505050506131dc565b612dc984828b613dca565b15612ddf578799505050505050505050506131dc565b60008460a001511315612f4857835180516020820151604083015160a084015160e090940151600094612e3394939291612e2190670de0b6b3a76400006148a0565b8a516060810151608090910151613e36565b9350905082612e4f5760009a50505050505050505050506131dc565b808560a0015110612f4657612e6385613f3b565b909950925082612e805760009a50505050505050505050506131dc565b612ea58560c001518660e00151876101000151886000015160a00151612c248e6117bd565b88516040810192909252602082019290925291909152925082612ed55760009a50505050505050505050506131dc565b845180516020820151604083015160a084015160e090940151612f059490612e2190670de0b6b3a76400006148a0565b9350905082612f215760009a50505050505050505050506131dc565b8e60a001518111612f3e57889a50505050505050505050506131dc565b505050612d2b565b505b6000612f59858f8760a00151614011565b93509050821580612f725750670de0b6b3a76400008110155b15612f8a5760009a50505050505050505050506131dc565b80670de0b6b3a76400000390506000612fb761161887604001518860200151612a9c90919063ffffffff16565b612fc4611618858e61100a565b612fce919061490f565b9050881580612fec5750612fe18961436c565b612fea8261436c565b125b15612ffb578098508997508296505b6000811315613023576130128b611cf3838561251f565b61301c908b61488d565b9950613075565b600081121561306c57600061303d8c611cf38581866148b3565b90508a81101561305157808b039a50613066565b60009c505050505050505050505050506131dc565b50613075565b50505050613084565b84600101945050505050612d2b565b5060006130ac8260c001518360e00151846101000151856000015160a00151612c248b6117bd565b855160408101929092526020820192909252919091529050806130d95760009750505050505050506131dc565b60006130e88360000151614384565b9050600061310a61161885604001518660200151612a9c90919063ffffffff16565b613117611618848c61100a565b613121919061490f565b905061312c8761436c565b6131358261436c565b1215613142578795508194505b61316961315d655af3107a4000670de0b6b3a76400006148a0565b6020860151908b613842565b604085015161317990879061251f565b10806131b957506131a761319b655af3107a4000670de0b6b3a764000061488d565b6020860151908b6125be565b60408501516131b79087906125a9565b115b156131d057600099505050505050505050506131dc565b50939750505050505050505b949350505050565b60008060008084600003613203575087925086915085905060016132f0565b60008561320f8b6117bd565b6132199190614996565b9050613224876117bd565b81121561323f576000806000809450945094509450506132f0565b8094506000891261325f57613258611618868b8d6125be565b9350613282565b61327661161861326e8b6148b3565b87908d613842565b61327f906148b3565b93505b60008061328f8c8c612ab1565b91509150806132ae5760008060008096509650965096505050506132f0565b60006132ba8888612ab1565b92509050816132da576000806000809750975097509750505050506132f0565b6132e58b82856125be565b955060019450505050505b95509550955095915050565b600060016001607f1b031982128061331a575060016001607f1b0382135b15610e905760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03821115610e905760405163a5353be560e01b815260040160405180910390fd5b60008061336f8484612ab1565b909250905080613381576133816126ed565b5092915050565b600081831361339757816100c7565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016133ed575047613478565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613451573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061347591906149be565b90505b6012546100c7908490836125be565b60008082136134a95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061352c9084901c6117bd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136136c857506000919050565b680755bf798b4a1bf1e582126136f1576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061259f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117bd565b600082600019048411830215820261385957600080fd5b50910281810615159190040190565b60008061387888888787876143b4565b90506138928561263a61388b898c61488d565b869061100a565b975061389f8489856125be565b9750878110156138b1576138b16126ed565b878103670de0b6b3a764000081106138df576138d8610eeb670de0b6b3a7640000886125a9565b90506138f7565b6138f4610eeb670de0b6b3a76400008861251f565b90505b80881015613907576139076126ed565b909603979650505050505050565b60008183116115ba57826100c7565b600080670de0b6b3a764000061393861081f565b6139429190614822565b905080831161395257600061395c565b61395c81846148a0565b91506100c7613993670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614822565b839061251f565b60008060006139bf61161885610160015186610140015161100a90919063ffffffff16565b6139df611618866101200151876101000151612a9c90919063ffffffff16565b6139e9919061490f565b9050600080613a0086600001518760200151612ab1565b9150915080613a1757506000958695509350505050565b6000831315613b585760008390506000613a65886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000613a5691906148a0565b8d606001518e60800151613e36565b9350905082613a7e575060009788975095505050505050565b818110613b1c576000613ab8858a60400151858c60e00151670de0b6b3a7640000613aa991906148a0565b8d606001518e608001516143e3565b9450905083158015613acd57508860c0015183105b15613ae45750600098600198509650505050505050565b83613afa57506000988998509650505050505050565b613b03816117bd565b613b0c906148b3565b9960019950975050505050505050565b6000886020015112613b4457613b3b8860a001518561161891906148a0565b6120da906148b3565b60a08801518851613b3b91611618916148a0565b6000831215613cab576000613b6c846148b3565b90506000613ba08489604001518a60e00151670de0b6b3a7640000613b9191906148a0565b8b606001518c60800151613d1e565b9350905082613bb9575060009788975095505050505050565b818110613c3e576000613bf3858a60400151858c60e00151670de0b6b3a7640000613be491906148a0565b8d606001518e608001516144a6565b9450905083158015613c0857508860c0015183105b15613c1f5750600098600198509650505050505050565b83613c3557506000988998509650505050505050565b613b0c816117bd565b6000613c70858a604001518b60e00151670de0b6b3a7640000613c6191906148a0565b8c606001518d6080015161457d565b9450905083613c8a57506000988998509650505050505050565b613b0c613ca18a606001518486611cf391906148a0565b611618908361488d565b50600095600195509350505050565b6000613ced611618836101200151670de0b6b3a7640000613cdb91906148a0565b60608501516101008601519190613842565b61285e611618846101600151670de0b6b3a7640000613d0c91906148a0565b606086015161014087015191906125be565b6000806000613d3088888888886143b4565b90506000613d5b670de0b6b3a7640000613d4a888861251f565b613d54919061488d565b83906125a9565b9050670de0b6b3a76400008110613d8857613d81610eeb670de0b6b3a7640000896125a9565b9050613da0565b613d9d610eeb670de0b6b3a76400008961251f565b90505b80881015613db657600080935093505050613dc0565b8703925060019150505b9550959350505050565b6020830151600090613ddc90846125a9565b6040850151613dec90849061251f565b101580156100c457506020840151613e1c9084613e15633b9aca00670de0b6b3a764000061488d565b91906125be565b6040850151613e2c9084906125a9565b1115949350505050565b6000806000881215613e5857613e4b886148b3565b613e55908761488d565b95505b600080613e658b8b612ab1565b9150915080613e7c57600080935093505050613f2f565b6000613e8b838b8a8a8a61462c565b90506000613ea8613ea08a61263a8a8e612a9c565b899089613842565b905080821015613ec2576000809550955050505050613f2f565b808203670de0b6b3a76400008110613ef057613ee9610eeb670de0b6b3a76400008c61251f565b9050613f08565b613f05610eeb670de0b6b3a76400008c6125a9565b90505b8b811015613f2157600080965096505050505050613f2f565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613f5557506000928392509050565b6000613f648460000151613cba565b90506000613f90856040015186606001518760400151613f84919061488d565b60208801519190613842565b905060008212613fb75780821015613faa57819003613fcd565b5060009485945092505050565b613fc0826148b3565b613fca908261488d565b90505b60e085015160c0860151613fe2918390613842565b9050808560c001511015613ffd575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126140355785516040015161402e90859061488d565b9050614070565b6000614040856148b3565b87516040015190915081101561406057865160400151819003915061406e565b6000809350935050506116c5565b505b8551805160209091015160009182916140899190612ab1565b91509150806140a157600080945094505050506116c5565b875160e08101516040909101516000916140d6916140ca916140c39190612534565b8a9061100a565b6101008b0151906125a9565b895160e0810151608090910151614101916140f59161263a908861100a565b8b5160600151906125a9565b61410b919061488d565b905060006141436141376141308c6000015160e001518861253490919063ffffffff16565b8b90612a9c565b6101008c01519061251f565b90508082101561415e576000809650965050505050506116c5565b808203915060006141a0858c60000151604001518d6000015160e00151670de0b6b3a764000061418e91906148a0565b8e5160608101516080909101516143b4565b905060006141ca8c6000015160e00151670de0b6b3a76400006141c391906148a0565b8890612534565b9050808210156141e75760008098509850505050505050506116c5565b8b51608081015160609091015191830391614203918391613842565b9050670de0b6b3a76400008110614247578b5160e0015161424090610eeb9061423490670de0b6b3a76400006148a0565b8e5160e00151906125a9565b9050614276565b8b5160e0015161427390610eeb9061426790670de0b6b3a76400006148a0565b8e5160e001519061251f565b90505b8b51606001516142899085908390613842565b935083670de0b6b3a764000011156142ad5783670de0b6b3a76400000393506142c1565b6000600198509850505050505050506116c5565b60008c60e00151126143245760c08c015160e08d01516142e0916125a9565b9250670de0b6b3a76400008311156143055760008098509850505050505050506116c5565b670de0b6b3a7640000929092039161431d848461100a565b9350614359565b61435661433d8d60c001518e60e00151611cf3906148b3565b61434f90670de0b6b3a764000061488d565b859061100a565b93505b50919a60019a5098505050505050505050565b600080821261437b5781610819565b610819826148b3565b600080600061439284612a0f565b915091508061338157604051635516328b60e11b815260040160405180910390fd5b60006143c08585612534565b6143d96143d18661263a868b612a9c565b859085613842565b61259f919061488d565b60008060006143f589898888886143b4565b90506144058661263a898b61488d565b97508781101561441c57600080925092505061449b565b87810361442a818688613842565b9050670de0b6b3a7640000811061445757614450610eeb670de0b6b3a7640000896125a9565b905061446f565b61446c610eeb670de0b6b3a76400008961251f565b90505b61447981866125a9565b9050808a10156144915760008093509350505061449b565b8903925060019150505b965096945050505050565b60008060006144b889898888886143b4565b9050868810156144cf57600080925092505061449b565b96869003966144de8887612534565b9750878110156144f557600080925092505061449b565b878103614503818688613842565b9050670de0b6b3a7640000811061453057614529610eeb670de0b6b3a7640000896125a9565b9050614548565b614545610eeb670de0b6b3a76400008961251f565b90505b61455281866125a9565b90508981101561456a5760008093509350505061449b565b9890980398600198509650505050505050565b600080600061458f888888888861462c565b905060006145b3670de0b6b3a76400006145a988886125a9565b613993919061488d565b9050670de0b6b3a764000081106145e0576145d9610eeb670de0b6b3a76400008961251f565b90506145f8565b6145f5610eeb670de0b6b3a7640000896125a9565b90505b614602818661251f565b90508881101561461a57600080935093505050613dc0565b97909703976001975095505050505050565b60006146388585612534565b6143d96146498661263a868b61100a565b8590856125be565b6040518061012001604052806146656146a3565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806040838503121561471757600080fd5b50508035926020909101359150565b6000606082840312156115ba57600080fd5b60008060006060848603121561474d57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561477257600080fd5b61477e86828701614726565b9150509250925092565b6000806000806080858703121561479e57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156147ca57600080fd5b6147d687828801614726565b91505092959194509250565b634e487b7160e01b600052601260045260246000fd5b600082614807576148076147e2565b500690565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176108195761081961480c565b60006020828403121561484b57600080fd5b81356001600160a01b03811681146100c757600080fd5b8015158114610d8a57600080fd5b60006020828403121561488257600080fd5b81356100c781614862565b808201808211156108195761081961480c565b818103818111156108195761081961480c565b6000600160ff1b82016148c8576148c861480c565b5060000390565b6001600160801b038181168382160190808211156133815761338161480c565b6001600160701b038181168382160190808211156133815761338161480c565b81810360008312801583831316838312821617156133815761338161480c565b6000808335601e1984360301811261494657600080fd5b83018035915067ffffffffffffffff82111561496157600080fd5b602001915036819003821315610e5f57600080fd5b6001600160801b038281168282160390808211156133815761338161480c565b80820182811260008312801582168215821617156149b6576149b661480c565b505092915050565b6000602082840312156149d057600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156108195761081961480c565b600081600f0b60016001607f1b03198103614a2157614a2161480c565b60000392915050565b600060208284031215614a3c57600080fd5b81516100c781614862565b600082614a5657614a566147e2565b600160ff1b821460001984141615614a7057614a7061480c565b50059056fea2646970667358221220bccedb452835a9b20cb8bbb058a0a4bcd412befef998d1f5dd49199c66caa4bf64736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    }
};
