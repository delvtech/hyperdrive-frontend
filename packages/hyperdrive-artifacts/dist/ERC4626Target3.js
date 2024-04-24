export const ERC4626Target3 = {
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
            "name": "AddressEmptyCode",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "AddressInsufficientBalance",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
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
            "name": "FailedInnerCall",
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
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004df638038062004df68339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516149a062000456600039600050506000505060008181610484015261260a0152600081816101fd015281816102540152818161033b01528181611486015281816114c20152818161175d01528181611cb501528181611d180152818161250f01526125e40152600081816102aa0152818161101c015281816110640152818161118401526125be015260006118fe015260008181611a2401526123d9015260008181610a45015281816110d701526119f80152600081816110b601526123950152600081816102ed01528181610ffa01528181611085015281816111a501526126300152600081816102cc0152818161055001528181610980015261363201526000818161013f01528181610826015281816108b301526109180152600081816113f10152818161206f015281816120e9015261217801526000818161204201526120a301526149a06000f3fe6080604052600436106100345760003560e01c8063414f826d1461003957806377d05ff41461005b578063cba2e58d14610081575b600080fd5b34801561004557600080fd5b506100596100543660046145ca565b6100a9565b005b61006e6100693660046145fe565b6100b7565b6040519081526020015b60405180910390f35b61009461008f36600461464e565b6100ce565b60408051928352602083019190915201610078565b6100b382826100eb565b5050565b60006100c48484846101a7565b90505b9392505050565b6000806100dd8686868661041d565b915091505b94509492505050565b6100f3610651565b60006100fd61067b565b6000848152600760205260409020549091506001600160801b03161561012e576101278183610693565b505061019d565b600061013861081f565b90506101647f0000000000000000000000000000000000000000000000000000000000000000856146be565b15158061017057508381105b1561018e5760405163ecd29e8160e01b815260040160405180910390fd5b610199848385610855565b5050505b6100b36001600055565b60006101b1610651565b6101b9610ce8565b6101c282610d09565b60055460ff16156101e657604051637983c05160e01b815260040160405180910390fd5b6000806101f38685610d42565b90925090506102237f000000000000000000000000000000000000000000000000000000000000000060026146e8565b82101561024357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061028182610e1b565b600180546001600160801b0319166001600160801b0392909216919091179055610316610311837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e49565b610e1b565b600180546001600160801b03928316600160801b02921691909117905561035f6000807f0000000000000000000000000000000000000000000000000000000000000000610ee8565b610377600061037160208701876146ff565b85610ee8565b61038a61038261081f565b826004610855565b506000610398878387610f90565b90506103a760208601866146ff565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866103e460408b0160208c01614736565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a25050506100c76001600055565b600080610428610651565b600554610100900460ff1615610451576040516321081abf60e01b815260040160405180910390fd5b610459610ce8565b61046283610d09565b60008061046f8886610d42565b909250905060006104808383610fbf565b90507f00000000000000000000000000000000000000000000000000000000000000008110156104c35760405163211ddda360e11b815260040160405180910390fd5b868210156104e4576040516342af972b60e01b815260040160405180910390fd5b60006104ee61081f565b90506104fc81846004610855565b5060008061050a8686610fd4565b90985090925090508a8710156105335760405163c972651760e01b815260040160405180910390fd5b80600b60008282546105459190614753565b9091555061057590507f000000000000000000000000000000000000000000000000000000000000000084614753565b97506105838288878b6111e1565b600061059060018a61137b565b90506105a9816105a360208d018d6146ff565b8a610ee8565b8c8989888d856105bc60208301836146ff565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866105f2898787610f90565b6105fd8a88886113b0565b61060d6040880160208901614736565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100e26001600055565b60026000540361067457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061068e670de0b6b3a76400006113d8565b905090565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916106de916001600160801b031690614766565b9050806000036106f2576001915050610819565b60006106fd85611464565b90508060000361071257600192505050610819565b600080610720838589611509565b9150915080610736576000945050505050610819565b6000806107438489611616565b9150915061076161075382611706565b61075c90614779565b611730565b9250826107775760009650505050505050610819565b61078082610e1b565b6006805460009061079b9084906001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506107c881610e1b565b600680546010906107ea908490600160801b90046001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600061084b7f0000000000000000000000000000000000000000000000000000000000000000426146be565b61068e9042614766565b600083815260076020526040812080546001600160801b031615158061087a57504285115b1561089057546001600160801b031690506100c7565b60008061089b61081f565b90508087036108ac57859150610946565b60006108d87f000000000000000000000000000000000000000000000000000000000000000089614753565b90505b6000818152600760205260409020546001600160801b031692508181148015610902575082155b1561090b578692505b826000036109445761093d7f000000000000000000000000000000000000000000000000000000000000000082614753565b90506108db565b505b61094f82610e1b565b83546001600160801b0319166001600160801b03919091161783556109738661183d565b50600090506007816109a57f00000000000000000000000000000000000000000000000000000000000000008b614766565b815260208101919091526040016000908120546001600160801b031691506109ce60028a61137b565b6000818152600e60205260408120549192508a8a8315610b1457600192506000806109fd86898c8660006119e1565b9150915080600b6000828254610a139190614753565b90915550610a2f905086600084610a2981611706565b88611ab0565b610a398183614753565b9150610a6986838a8d877f0000000000000000000000000000000000000000000000000000000000000000611c2a565b9150610a7d610a788385610fbf565b611c74565b60058054600290610a9e9084906201000090046001600160701b03166147b5565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610acb82610e1b565b60058054601090610aed908490600160801b90046001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b2160018461137b565b6000818152600e60205260409020549091508015610c305760019450600080610b4e838b8e8860016119e1565b9150915080600b6000828254610b649190614753565b90915550610b80905083600084610b7a81611706565b8a611c9e565b610b8a8183614766565b9150610b99610a788387610fbf565b60058054600290610bba9084906201000090046001600160701b03166147b5565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610be782610e1b565b60058054601090610c09908490600160801b90046001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c6857610c5c610c4287611706565b610c4b83611706565b610c5591906147d5565b6000611e8f565b610c668e8e610693565b505b6000610c738f611f42565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610ccc959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989e9d5050505050505050505050505050565b3415610d0757604051631574f9f360e01b815260040160405180910390fd5b565b6000610d1860208301836146ff565b6001600160a01b031603610d3f5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610d566040850160208601614736565b15610d7b57610d7185610d6c60408701876147f5565b612032565b9093509050610d97565b5034610d9385610d8e60408701876147f5565b61216b565b8492505b610d9f61067b565b91508015610e1257604051600090339083908381818185875af1925050503d8060008114610de9576040519150601f19603f3d011682016040523d82523d6000602084013e610dee565b606091505b5050905080610e10576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006001600160801b03821115610e4557604051630f0af95160e11b815260040160405180910390fd5b5090565b600080610e5a846301e133806121a0565b90506000610e688683610fbf565b610e7a90670de0b6b3a7640000614753565b9050670de0b6b3a76400008110610eae57610ea7610ea0670de0b6b3a7640000866121a0565b82906121b5565b9050610ec6565b610ec3610ea0670de0b6b3a76400008661222a565b90505b610eda81610ed4898b610fbf565b90610fbf565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610f1a908490614753565b90915550506000838152600e602052604081208054839290610f3d908490614753565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fa26040830160208401614736565b15610fae5750826100c7565b610fb88484610fbf565b90506100c7565b60006100c78383670de0b6b3a764000061223f565b6000806000611040610fe461225d565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f000000000000000000000000000000000000000000000000000000000000000061227e565b915060006110a961104f61225d565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122aa565b905061110086846110fb847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122c1565b61232c565b1561110d5761110d61236e565b60008061111b888489612387565b909250905061112a8286614766565b945061113781848961223f565b93506111438489614766565b9550670de0b6b3a76400006111c98761115a61225d565b6111649190614753565b600154611182908990600160801b90046001600160801b0316614766565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122aa565b11156111d7576111d761236e565b5050509250925092565b600254600160801b90046001600160801b03166112236103118261120d670de0b6b3a7640000866146e8565b6004546001600160801b03169190886001612407565b600480546001600160801b0319166001600160801b039290921691909117905561124c85610e1b565b600180546000906112679084906001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129484610e1b565b600180546010906112b6908490600160801b90046001600160801b031661483c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112e384610e1b565b6112ed9082614795565b600280546001600160801b03808416600160801b02911617905590506000611314836124c4565b90506113328161132387611706565b61132d908461485c565b611e8f565b61133b84612508565b6113475761134761236e565b600061135285612568565b90508061137257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156113a55760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006113c26040830160208401614736565b156113d157610fb884846121a0565b50826100c7565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611440573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108199190614884565b600254600090819061147f906001600160801b03168461222a565b90506114ab7f000000000000000000000000000000000000000000000000000000000000000082614753565b6001546001600160801b03161115611503576001547f0000000000000000000000000000000000000000000000000000000000000000906114f69083906001600160801b0316614766565b6115009190614766565b91505b50919050565b611511614517565b60008061151d84612575565b9050600061152a826126af565b935090508261153f57506000915061160e9050565b6000611566611561846101600151856101400151610fbf90919063ffffffff16565b611706565b61158661156185610120015186610100015161273c90919063ffffffff16565b61159091906147d5565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60008060008061162e8660c001518760e00151612751565b915091508061164557600080935093505050610e14565b6000611651878461278d565b92509050811580611660575080155b156116745760008094509450505050610e14565b6000611680888361289c565b90508060000361169a576000809550955050505050610e14565b876060015181116116b15794509250610e14915050565b50606087015160006116c58986858b61296d565b9050806000036116e057600080965096505050505050610e14565b8281106116f857600080965096505050505050610e14565b909890975095505050505050565b60006001600160ff1b03821115610e455760405163396ea70160e11b815260040160405180910390fd5b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806117828787877f00000000000000000000000000000000000000000000000000000000000000008d612e84565b93509350935093508061179e5750600098975050505050505050565b8684146117cf576117ae84610e1b565b600180546001600160801b0319166001600160801b03929092169190911790555b858314611800576117df83612f9c565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461182e5761181082610e1b565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6005546000908190611860908490600160801b90046001600160801b0316610fbf565b6005546201000090046001600160701b031692509050818111156119dc57600061188a8383614766565b9050611899610311828661222a565b600580546010906118bb908490600160801b90046001600160801b031661483c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006118f485836121a090919063ffffffff16565b90506000611922827f0000000000000000000000000000000000000000000000000000000000000000610fbf565b905080600b60008282546119369190614753565b9091555061194690508183614766565b915061195182610e1b565b6001805460009061196c9084906001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061199982612fd8565b600380546000906119ae908490600f0b61489d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806119ee87856121a0565b91506000611a1c837f0000000000000000000000000000000000000000000000000000000000000000610fbf565b9050611a48817f0000000000000000000000000000000000000000000000000000000000000000610fbf565b91508315611a6b57611a5a8282614766565b611a649084614766565b9250611a82565b611a758282614766565b611a7f9084614753565b92505b86861015611aa557611a9583878961223f565b9250611aa282878961223f565b91505b509550959350505050565b600354600160801b90046001600160801b0316611af961031182611adc670de0b6b3a7640000866146e8565b600454600160801b90046001600160801b031691908a6000612407565b600480546001600160801b03928316600160801b029216919091179055611b1f86610e1b565b611b29908261483c565b600380546001600160801b03928316600160801b029216919091179055611b4f84610e1b565b60018054600090611b6a9084906001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b9783612f9c565b60038054600090611bac908490600f0b61489d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611bdc85610e1b565b60018054601090611bfe908490600160801b90046001600160801b031661483c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c4284611c3c8a888a61223f565b906121a0565b9050611c4f88848661223f565b611c599082614753565b905086811115611c695786810391505b509695505050505050565b60006001600160701b03821115610e455760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611ce057507f0000000000000000000000000000000000000000000000000000000000000000611cde8583614766565b105b15611ced57611ced61236e565b6003549084900390600f0b611d0284826147d5565b905083611d0e86611706565b138015611d4357507f0000000000000000000000000000000000000000000000000000000000000000611d418383613002565b105b15611d5057611d5061236e565b600254600160801b90046001600160801b0316611d9261031182611d7c670de0b6b3a7640000886146e8565b6004546001600160801b031691908c6000612407565b600480546001600160801b0319166001600160801b0392909216919091179055611dbc8882614766565b9050611dc781610e1b565b600280546001600160801b03928316600160801b029216919091179055611ded83610e1b565b600180546001600160801b0319166001600160801b0392909216919091179055611e1682612f9c565b600380546001600160801b0319166001600160801b0392909216919091179055611e3f87610e1b565b60018054601090611e61908490600160801b90046001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611eb8611e9e8483613028565b611ea9846000613028565b611eb391906147d5565b612f9c565b9050600081600f0b1315611f0d5760028054829190600090611ee49084906001600160801b0316614795565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611f3d57611f22816148ca565b60028054600090611ee49084906001600160801b031661483c565b505050565b600080600080611f59611f5486612575565b6126af565b9150915080611f6f575060009485945092505050565b6000808611611f7f576000611f89565b611f898387610fbf565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611ff49190614753565b611ffe9190614766565b9050806000036120175750600096879650945050505050565b600061202383836121a0565b98600198509650505050505050565b60008061206a6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308861303e565b6120ca7f0000000000000000000000000000000000000000000000000000000000000000612099876001614753565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906130ab565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af115801561213a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215e9190614884565b9660009650945050505050565b611f3d6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308661303e565b60006100c783670de0b6b3a76400008461223f565b6000816000036121ce5750670de0b6b3a7640000610819565b826000036121de57506000610819565b60006121e983611706565b905060006121fe6121f986611706565b61313b565b9050818102612215670de0b6b3a7640000826148f0565b905061222081613361565b9695505050505050565b60006100c783670de0b6b3a7640000846134f6565b600082600019048411830215820261225657600080fd5b5091020490565b60015460035460009161068e916001600160801b0390911690600f0b613002565b600061229f87878761229888670de0b6b3a7640000614766565b878761351c565b979650505050505050565b6000610edf826122bb85888861223f565b906121b5565b60006100c46123086122db84670de0b6b3a7640000614766565b612302670de0b6b3a76400006122f1818a61222a565b6122fb9190614766565b879061273c565b9061273c565b61231a90670de0b6b3a7640000614753565b611c3c84670de0b6b3a7640000614766565b6000806123638561233b61225d565b6123459190614753565b600154611182908790600160801b90046001600160801b0316614766565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806123d18561230285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006123c7818c61222a565b6123029190614766565b91506123fd827f0000000000000000000000000000000000000000000000000000000000000000610fbf565b9050935093915050565b600082600003612418575084610edf565b811561248a5761244961242b8487614753565b6124358587610fbf565b61243f888a610fbf565b611c3c9190614753565b9050600061245785886135c9565b9050600061246586896135d8565b90508183101561247757819250612483565b80831115612483578092505b5050610edf565b82850361249957506000610edf565b6122206124a68487614766565b6124b0858761273c565b6124ba888a610fbf565b611c3c9190614766565b60006124ec600e60006124d860028661137b565b815260200190815260200160002054611706565b6124fe600e60006124d860018761137b565b61081991906147d5565b60006125347f00000000000000000000000000000000000000000000000000000000000000008361273c565b60025461254a91906001600160801b0316614753565b600154612560906001600160801b031684610fbf565b101592915050565b6000610819826004610693565b61257d614569565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600254048216610100820152600454909161012083019161267591166135e7565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926126a7929004166135e7565b905292915050565b60008060008060006126c08661365d565b91509150806126d757506000958695509350505050565b6126e48660a00151611706565b6126ed8761397d565b836126fb8960000151611706565b612705919061485c565b61270f919061485c565b61271991906147d5565b9250505060008112156127325750600093849350915050565b9360019350915050565b60006100c78383670de0b6b3a76400006134f6565b60008060008361276086611706565b61276a91906147d5565b90506000811215612782576000809250925050610e14565b946001945092505050565b60008060008460a00151126127aa57505060808201516001610e14565b60008460a001516127ba90614779565b905060006127f685876101000151886000015160e00151670de0b6b3a76400006127e49190614766565b895160608101516080909101516139e1565b93509050821580612805575080155b1561281857600080935093505050610e14565b6000612824838361222a565b9050670de0b6b3a764000081116128605780670de0b6b3a76400000394506128598760c0015186610fbf90919063ffffffff16565b945061286f565b60008094509450505050610e14565b866080015185111561288e578660800151600194509450505050610e14565b506001925050509250929050565b6000806128d28460c001518560e00151866101000151876000015160a001516128c488611706565b6128cd90614779565b612e84565b875160408101929092526020820192909252919091529050806128f9576000915050610819565b600061290885600001516126af565b925090508161291c57600092505050610819565b8460200151811061293257600092505050610819565b6000856060015186604001516129489190614753565b90506129638287602001518361223f9092919063ffffffff16565b6122209082614766565b600080856060015186604001516129849190614753565b6020870151606088015191925060009161299e918461223f565b90508660a001516000036129b5579150612e7c9050565b600080808960048810156129c857600497505b60005b88811015612d24576129dd868b6135c9565b95506000612a068360c001518460e00151856101000151866000015160a001516128c48c611706565b86516040810192909252602082019290925291909152905080612a3457600098505050505050505050612e7c565b6000612a438e600001516126af565b9250905081612a5e5760009950505050505050505050612e7c565b612a6984828b613a8d565b15612a7f57879950505050505050505050612e7c565b60008460a001511315612be857835180516020820151604083015160a084015160e090940151600094612ad394939291612ac190670de0b6b3a7640000614766565b8a516060810151608090910151613af9565b9350905082612aef5760009a5050505050505050505050612e7c565b808560a0015110612be657612b0385613bfe565b909950925082612b205760009a5050505050505050505050612e7c565b612b458560c001518660e00151876101000151886000015160a001516128c48e611706565b88516040810192909252602082019290925291909152925082612b755760009a5050505050505050505050612e7c565b845180516020820151604083015160a084015160e090940151612ba59490612ac190670de0b6b3a7640000614766565b9350905082612bc15760009a5050505050505050505050612e7c565b8e60a001518111612bde57889a5050505050505050505050612e7c565b5050506129cb565b505b6000612bf9858f8760a00151613cd4565b93509050821580612c125750670de0b6b3a76400008110155b15612c2a5760009a5050505050505050505050612e7c565b80670de0b6b3a76400000390506000612c576115618760400151886020015161273c90919063ffffffff16565b612c64611561858e610fbf565b612c6e91906147d5565b9050881580612c8c5750612c818961402f565b612c8a8261402f565b125b15612c9b578098508997508296505b6000811315612cc357612cb28b611c3c83856121a0565b612cbc908b614753565b9950612d15565b6000811215612d0c576000612cdd8c611c3c858186614779565b90508a811015612cf157808b039a50612d06565b60009c50505050505050505050505050612e7c565b50612d15565b50505050612d24565b846001019450505050506129cb565b506000612d4c8260c001518360e00151846101000151856000015160a001516128c48b611706565b85516040810192909252602082019290925291909152905080612d79576000975050505050505050612e7c565b6000612d888360000151614047565b90506000612daa6115618560400151866020015161273c90919063ffffffff16565b612db7611561848c610fbf565b612dc191906147d5565b9050612dcc8761402f565b612dd58261402f565b1215612de2578795508194505b612e09612dfd655af3107a4000670de0b6b3a7640000614766565b6020860151908b6134f6565b6040850151612e199087906121a0565b1080612e595750612e47612e3b655af3107a4000670de0b6b3a7640000614753565b6020860151908b61223f565b6040850151612e5790879061222a565b115b15612e705760009950505050505050505050612e7c565b50939750505050505050505b949350505050565b60008060008084600003612ea357508792508691508590506001612f90565b600085612eaf8b611706565b612eb9919061485c565b9050612ec487611706565b811215612edf57600080600080945094509450945050612f90565b80945060008912612eff57612ef8611561868b8d61223f565b9350612f22565b612f16611561612f0e8b614779565b87908d6134f6565b612f1f90614779565b93505b600080612f2f8c8c612751565b9150915080612f4e576000806000809650965096509650505050612f90565b6000612f5a8888612751565b9250905081612f7a57600080600080975097509750975050505050612f90565b612f858b828561223f565b955060019450505050505b95509550955095915050565b600060016001607f1b0319821280612fba575060016001607f1b0382135b15610e455760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03821115610e455760405163a5353be560e01b815260040160405180910390fd5b60008061300f8484612751565b9092509050806130215761302161236e565b5092915050565b600081831361303757816100c7565b5090919050565b6040516001600160a01b0384811660248301528381166044830152606482018390526130a59186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050614077565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526130fc84826140df565b6130a5576040516001600160a01b0384811660248301526000604483015261313191869182169063095ea7b390606401613073565b6130a58482614077565b600080821361315d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131e09084901c611706565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361337c57506000919050565b680755bf798b4a1bf1e582126133a5576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061222074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611706565b600082600019048411830215820261350d57600080fd5b50910281810615159190040190565b60008061352c8888878787614182565b9050613546856122bb61353f898c614753565b8690610fbf565b975061355384898561223f565b9750878110156135655761356561236e565b878103670de0b6b3a764000081106135935761358c610ea0670de0b6b3a76400008861222a565b90506135ab565b6135a8610ea0670de0b6b3a7640000886121a0565b90505b808810156135bb576135bb61236e565b909603979650505050505050565b600081831161150357826100c7565b600081831161303757816100c7565b600080670de0b6b3a76400006135fb61081f565b61360591906146e8565b905080831161361557600061361f565b61361f8184614766565b9150611500613656670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006146e8565b83906121a0565b6000806000613682611561856101600151866101400151610fbf90919063ffffffff16565b6136a261156186610120015187610100015161273c90919063ffffffff16565b6136ac91906147d5565b90506000806136c386600001518760200151612751565b91509150806136da57506000958695509350505050565b600083131561381b5760008390506000613728886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006137199190614766565b8d606001518e60800151613af9565b9350905082613741575060009788975095505050505050565b8181106137df57600061377b858a60400151858c60e00151670de0b6b3a764000061376c9190614766565b8d606001518e608001516141b1565b945090508315801561379057508860c0015183105b156137a75750600098600198509650505050505050565b836137bd57506000988998509650505050505050565b6137c681611706565b6137cf90614779565b9960019950975050505050505050565b6000886020015112613807576137fe8860a00151856115619190614766565b61202390614779565b60a088015188516137fe9161156191614766565b600083121561396e57600061382f84614779565b905060006138638489604001518a60e00151670de0b6b3a76400006138549190614766565b8b606001518c608001516139e1565b935090508261387c575060009788975095505050505050565b8181106139015760006138b6858a60400151858c60e00151670de0b6b3a76400006138a79190614766565b8d606001518e60800151614274565b94509050831580156138cb57508860c0015183105b156138e25750600098600198509650505050505050565b836138f857506000988998509650505050505050565b6137cf81611706565b6000613933858a604001518b60e00151670de0b6b3a76400006139249190614766565b8c606001518d6080015161434b565b945090508361394d57506000988998509650505050505050565b6137cf6139648a606001518486611c3c9190614766565b6115619083614753565b50600095600195509350505050565b60006139b0611561836101200151670de0b6b3a764000061399e9190614766565b606085015161010086015191906134f6565b6124fe611561846101600151670de0b6b3a76400006139cf9190614766565b6060860151610140870151919061223f565b60008060006139f38888888888614182565b90506000613a1e670de0b6b3a7640000613a0d88886121a0565b613a179190614753565b839061222a565b9050670de0b6b3a76400008110613a4b57613a44610ea0670de0b6b3a76400008961222a565b9050613a63565b613a60610ea0670de0b6b3a7640000896121a0565b90505b80881015613a7957600080935093505050613a83565b8703925060019150505b9550959350505050565b6020830151600090613a9f908461222a565b6040850151613aaf9084906121a0565b101580156100c457506020840151613adf9084613ad8633b9aca00670de0b6b3a7640000614753565b919061223f565b6040850151613aef90849061222a565b1115949350505050565b6000806000881215613b1b57613b0e88614779565b613b189087614753565b95505b600080613b288b8b612751565b9150915080613b3f57600080935093505050613bf2565b6000613b4e838b8a8a8a6143fa565b90506000613b6b613b638a6122bb8a8e61273c565b8990896134f6565b905080821015613b85576000809550955050505050613bf2565b808203670de0b6b3a76400008110613bb357613bac610ea0670de0b6b3a76400008c6121a0565b9050613bcb565b613bc8610ea0670de0b6b3a76400008c61222a565b90505b8b811015613be457600080965096505050505050613bf2565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613c1857506000928392509050565b6000613c27846000015161397d565b90506000613c53856040015186606001518760400151613c479190614753565b602088015191906134f6565b905060008212613c7a5780821015613c6d57819003613c90565b5060009485945092505050565b613c8382614779565b613c8d9082614753565b90505b60e085015160c0860151613ca59183906134f6565b9050808560c001511015613cc0575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613cf857855160400151613cf1908590614753565b9050613d33565b6000613d0385614779565b875160400151909150811015613d23578651604001518190039150613d31565b60008093509350505061160e565b505b855180516020909101516000918291613d4c9190612751565b9150915080613d64576000809450945050505061160e565b875160e0810151604090910151600091613d9991613d8d91613d8691906121b5565b8a90610fbf565b6101008b01519061222a565b895160e0810151608090910151613dc491613db8916122bb9088610fbf565b8b51606001519061222a565b613dce9190614753565b90506000613e06613dfa613df38c6000015160e00151886121b590919063ffffffff16565b8b9061273c565b6101008c0151906121a0565b905080821015613e215760008096509650505050505061160e565b80820391506000613e63858c60000151604001518d6000015160e00151670de0b6b3a7640000613e519190614766565b8e516060810151608090910151614182565b90506000613e8d8c6000015160e00151670de0b6b3a7640000613e869190614766565b88906121b5565b905080821015613eaa57600080985098505050505050505061160e565b8b51608081015160609091015191830391613ec69183916134f6565b9050670de0b6b3a76400008110613f0a578b5160e00151613f0390610ea090613ef790670de0b6b3a7640000614766565b8e5160e001519061222a565b9050613f39565b8b5160e00151613f3690610ea090613f2a90670de0b6b3a7640000614766565b8e5160e00151906121a0565b90505b8b5160600151613f4c90859083906134f6565b935083670de0b6b3a76400001115613f705783670de0b6b3a7640000039350613f84565b60006001985098505050505050505061160e565b60008c60e0015112613fe75760c08c015160e08d0151613fa39161222a565b9250670de0b6b3a7640000831115613fc857600080985098505050505050505061160e565b670de0b6b3a76400009290920391613fe08484610fbf565b935061401c565b6140196140008d60c001518e60e00151611c3c90614779565b61401290670de0b6b3a7640000614753565b8590610fbf565b93505b50919a60019a5098505050505050505050565b600080821261403e5781610819565b61081982614779565b6000806000614055846126af565b915091508061302157604051635516328b60e11b815260040160405180910390fd5b600061408c6001600160a01b0384168361441f565b905080516000141580156140b15750808060200190518101906140af919061491e565b155b15611f3d57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516140fc919061493b565b6000604051808303816000865af19150503d8060008114614139576040519150601f19603f3d011682016040523d82523d6000602084013e61413e565b606091505b5091509150818015614168575080511580614168575080806020019051810190614168919061491e565b8015610edf5750505050506001600160a01b03163b151590565b600061418e85856121b5565b6141a761419f866122bb868b61273c565b8590856134f6565b6122209190614753565b60008060006141c38989888888614182565b90506141d3866122bb898b614753565b9750878110156141ea576000809250925050614269565b8781036141f88186886134f6565b9050670de0b6b3a764000081106142255761421e610ea0670de0b6b3a76400008961222a565b905061423d565b61423a610ea0670de0b6b3a7640000896121a0565b90505b614247818661222a565b9050808a101561425f57600080935093505050614269565b8903925060019150505b965096945050505050565b60008060006142868989888888614182565b90508688101561429d576000809250925050614269565b96869003966142ac88876121b5565b9750878110156142c3576000809250925050614269565b8781036142d18186886134f6565b9050670de0b6b3a764000081106142fe576142f7610ea0670de0b6b3a76400008961222a565b9050614316565b614313610ea0670de0b6b3a7640000896121a0565b90505b614320818661222a565b90508981101561433857600080935093505050614269565b9890980398600198509650505050505050565b600080600061435d88888888886143fa565b90506000614381670de0b6b3a7640000614377888861222a565b6136569190614753565b9050670de0b6b3a764000081106143ae576143a7610ea0670de0b6b3a7640000896121a0565b90506143c6565b6143c3610ea0670de0b6b3a76400008961222a565b90505b6143d081866121a0565b9050888110156143e857600080935093505050613a83565b97909703976001975095505050505050565b600061440685856121b5565b6141a7614417866122bb868b610fbf565b85908561223f565b60606100c78383600084600080856001600160a01b03168486604051614445919061493b565b60006040518083038185875af1925050503d8060008114614482576040519150601f19603f3d011682016040523d82523d6000602084013e614487565b606091505b50915091506122208683836060826144a7576144a2826144ee565b6100c7565b81511580156144be57506001600160a01b0384163b155b156144e757604051639996b31560e01b81526001600160a01b03851660048201526024016140d6565b50806100c7565b8051156144fe5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061452b614569565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080604083850312156145dd57600080fd5b50508035926020909101359150565b60006060828403121561150357600080fd5b60008060006060848603121561461357600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561463857600080fd5b614644868287016145ec565b9150509250925092565b6000806000806080858703121561466457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561469057600080fd5b61469c878288016145ec565b91505092959194509250565b634e487b7160e01b600052601260045260246000fd5b6000826146cd576146cd6146a8565b500690565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610819576108196146d2565b60006020828403121561471157600080fd5b81356001600160a01b03811681146100c757600080fd5b8015158114610d3f57600080fd5b60006020828403121561474857600080fd5b81356100c781614728565b80820180821115610819576108196146d2565b81810381811115610819576108196146d2565b6000600160ff1b820161478e5761478e6146d2565b5060000390565b6001600160801b03818116838216019080821115613021576130216146d2565b6001600160701b03818116838216019080821115613021576130216146d2565b8181036000831280158383131683831282161715613021576130216146d2565b6000808335601e1984360301811261480c57600080fd5b83018035915067ffffffffffffffff82111561482757600080fd5b602001915036819003821315610e1457600080fd5b6001600160801b03828116828216039080821115613021576130216146d2565b808201828112600083128015821682158216171561487c5761487c6146d2565b505092915050565b60006020828403121561489657600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610819576108196146d2565b600081600f0b60016001607f1b031981036148e7576148e76146d2565b60000392915050565b6000826148ff576148ff6146a8565b600160ff1b821460001984141615614919576149196146d2565b500590565b60006020828403121561493057600080fd5b81516100c781614728565b6000825160005b8181101561495c5760208186018101518583015201614942565b50600092019182525091905056fea264697066735822122018590eb4b6e1c88677949d0d5dca4f02953f110e10a02ae7541b1152e697d60f64736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    }
};
