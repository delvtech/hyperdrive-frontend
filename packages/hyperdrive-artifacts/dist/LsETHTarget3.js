export const LsETHTarget3 = {
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004b8138038062004b818339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516147436200043e60003960005050600050506000818161048401526124ed0152600081816101fd015281816102540152818161033b01528181611486015281816114c20152818161175d01528181611cb501528181611d18015281816123f201526124c70152600081816102aa0152818161101c015281816110640152818161118401526124a1015260006118fe015260008181611a2401526122bc015260008181610a45015281816110d701526119f80152600081816110b601526122780152600081816102ed01528181610ffa01528181611085015281816111a501526125130152600081816102cc0152818161055001528181610980015261347801526000818161013f01528181610826015281816108b301526109180152600081816113f1015261205b0152600050506147436000f3fe6080604052600436106100345760003560e01c8063414f826d1461003957806377d05ff41461005b578063cba2e58d14610081575b600080fd5b34801561004557600080fd5b5061005961005436600461436d565b6100a9565b005b61006e6100693660046143a1565b6100b7565b6040519081526020015b60405180910390f35b61009461008f3660046143f1565b6100ce565b60408051928352602083019190915201610078565b6100b382826100eb565b5050565b60006100c48484846101a7565b90505b9392505050565b6000806100dd8686868661041d565b915091505b94509492505050565b6100f3610651565b60006100fd61067b565b6000848152600760205260409020549091506001600160801b03161561012e576101278183610693565b505061019d565b600061013861081f565b90506101647f000000000000000000000000000000000000000000000000000000000000000085614461565b15158061017057508381105b1561018e5760405163ecd29e8160e01b815260040160405180910390fd5b610199848385610855565b5050505b6100b36001600055565b60006101b1610651565b6101b9610ce8565b6101c282610d09565b60055460ff16156101e657604051637983c05160e01b815260040160405180910390fd5b6000806101f38685610d42565b90925090506102237f0000000000000000000000000000000000000000000000000000000000000000600261448b565b82101561024357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061028182610e1b565b600180546001600160801b0319166001600160801b0392909216919091179055610316610311837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e49565b610e1b565b600180546001600160801b03928316600160801b02921691909117905561035f6000807f0000000000000000000000000000000000000000000000000000000000000000610ee8565b610377600061037160208701876144a2565b85610ee8565b61038a61038261081f565b826004610855565b506000610398878387610f90565b90506103a760208601866144a2565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866103e460408b0160208c016144d9565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a25050506100c76001600055565b600080610428610651565b600554610100900460ff1615610451576040516321081abf60e01b815260040160405180910390fd5b610459610ce8565b61046283610d09565b60008061046f8886610d42565b909250905060006104808383610fbf565b90507f00000000000000000000000000000000000000000000000000000000000000008110156104c35760405163211ddda360e11b815260040160405180910390fd5b868210156104e4576040516342af972b60e01b815260040160405180910390fd5b60006104ee61081f565b90506104fc81846004610855565b5060008061050a8686610fd4565b90985090925090508a8710156105335760405163c972651760e01b815260040160405180910390fd5b80600b600082825461054591906144f6565b9091555061057590507f0000000000000000000000000000000000000000000000000000000000000000846144f6565b97506105838288878b6111e1565b600061059060018a61137b565b90506105a9816105a360208d018d6144a2565b8a610ee8565b8c8989888d856105bc60208301836144a2565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866105f2898787610f90565b6105fd8a88886113b0565b61060d60408801602089016144d9565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100e26001600055565b60026000540361067457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061068e670de0b6b3a76400006113d8565b905090565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916106de916001600160801b031690614509565b9050806000036106f2576001915050610819565b60006106fd85611464565b90508060000361071257600192505050610819565b600080610720838589611509565b9150915080610736576000945050505050610819565b6000806107438489611616565b9150915061076161075382611706565b61075c9061451c565b611730565b9250826107775760009650505050505050610819565b61078082610e1b565b6006805460009061079b9084906001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506107c881610e1b565b600680546010906107ea908490600160801b90046001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600061084b7f000000000000000000000000000000000000000000000000000000000000000042614461565b61068e9042614509565b600083815260076020526040812080546001600160801b031615158061087a57504285115b1561089057546001600160801b031690506100c7565b60008061089b61081f565b90508087036108ac57859150610946565b60006108d87f0000000000000000000000000000000000000000000000000000000000000000896144f6565b90505b6000818152600760205260409020546001600160801b031692508181148015610902575082155b1561090b578692505b826000036109445761093d7f0000000000000000000000000000000000000000000000000000000000000000826144f6565b90506108db565b505b61094f82610e1b565b83546001600160801b0319166001600160801b03919091161783556109738661183d565b50600090506007816109a57f00000000000000000000000000000000000000000000000000000000000000008b614509565b815260208101919091526040016000908120546001600160801b031691506109ce60028a61137b565b6000818152600e60205260408120549192508a8a8315610b1457600192506000806109fd86898c8660006119e1565b9150915080600b6000828254610a1391906144f6565b90915550610a2f905086600084610a2981611706565b88611ab0565b610a3981836144f6565b9150610a6986838a8d877f0000000000000000000000000000000000000000000000000000000000000000611c2a565b9150610a7d610a788385610fbf565b611c74565b60058054600290610a9e9084906201000090046001600160701b0316614558565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610acb82610e1b565b60058054601090610aed908490600160801b90046001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b2160018461137b565b6000818152600e60205260409020549091508015610c305760019450600080610b4e838b8e8860016119e1565b9150915080600b6000828254610b6491906144f6565b90915550610b80905083600084610b7a81611706565b8a611c9e565b610b8a8183614509565b9150610b99610a788387610fbf565b60058054600290610bba9084906201000090046001600160701b0316614558565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610be782610e1b565b60058054601090610c09908490600160801b90046001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c6857610c5c610c4287611706565b610c4b83611706565b610c559190614578565b6000611e8f565b610c668e8e610693565b505b6000610c738f611f42565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610ccc959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989e9d5050505050505050505050505050565b3415610d0757604051631574f9f360e01b815260040160405180910390fd5b565b6000610d1860208301836144a2565b6001600160a01b031603610d3f5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610d5660408501602086016144d9565b15610d7b57610d7185610d6c6040870187614598565b612032565b9093509050610d97565b5034610d9385610d8e6040870187614598565b61204e565b8492505b610d9f61067b565b91508015610e1257604051600090339083908381818185875af1925050503d8060008114610de9576040519150601f19603f3d011682016040523d82523d6000602084013e610dee565b606091505b5050905080610e10576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006001600160801b03821115610e4557604051630f0af95160e11b815260040160405180910390fd5b5090565b600080610e5a846301e13380612083565b90506000610e688683610fbf565b610e7a90670de0b6b3a76400006144f6565b9050670de0b6b3a76400008110610eae57610ea7610ea0670de0b6b3a764000086612083565b8290612098565b9050610ec6565b610ec3610ea0670de0b6b3a76400008661210d565b90505b610eda81610ed4898b610fbf565b90610fbf565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610f1a9084906144f6565b90915550506000838152600e602052604081208054839290610f3d9084906144f6565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fa260408301602084016144d9565b15610fae5750826100c7565b610fb88484610fbf565b90506100c7565b60006100c78383670de0b6b3a7640000612122565b6000806000611040610fe4612140565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000612161565b915060006110a961104f612140565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061218d565b905061110086846110fb847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121a4565b61220f565b1561110d5761110d612251565b60008061111b88848961226a565b909250905061112a8286614509565b9450611137818489612122565b93506111438489614509565b9550670de0b6b3a76400006111c98761115a612140565b61116491906144f6565b600154611182908990600160801b90046001600160801b0316614509565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061218d565b11156111d7576111d7612251565b5050509250925092565b600254600160801b90046001600160801b03166112236103118261120d670de0b6b3a76400008661448b565b6004546001600160801b031691908860016122ea565b600480546001600160801b0319166001600160801b039290921691909117905561124c85610e1b565b600180546000906112679084906001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129484610e1b565b600180546010906112b6908490600160801b90046001600160801b03166145df565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112e384610e1b565b6112ed9082614538565b600280546001600160801b03808416600160801b02911617905590506000611314836123a7565b90506113328161132387611706565b61132d90846145ff565b611e8f565b61133b846123eb565b61134757611347612251565b60006113528561244b565b90508061137257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156113a55760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006113c260408301602084016144d9565b156113d157610fb88484612083565b50826100c7565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f0290602401602060405180830381865afa158015611440573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108199190614627565b600254600090819061147f906001600160801b03168461210d565b90506114ab7f0000000000000000000000000000000000000000000000000000000000000000826144f6565b6001546001600160801b03161115611503576001547f0000000000000000000000000000000000000000000000000000000000000000906114f69083906001600160801b0316614509565b6115009190614509565b91505b50919050565b6115116142ba565b60008061151d84612458565b9050600061152a82612592565b935090508261153f57506000915061160e9050565b6000611566611561846101600151856101400151610fbf90919063ffffffff16565b611706565b61158661156185610120015186610100015161261f90919063ffffffff16565b6115909190614578565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60008060008061162e8660c001518760e00151612634565b915091508061164557600080935093505050610e14565b60006116518784612670565b92509050811580611660575080155b156116745760008094509450505050610e14565b6000611680888361277f565b90508060000361169a576000809550955050505050610e14565b876060015181116116b15794509250610e14915050565b50606087015160006116c58986858b612850565b9050806000036116e057600080965096505050505050610e14565b8281106116f857600080965096505050505050610e14565b909890975095505050505050565b60006001600160ff1b03821115610e455760405163396ea70160e11b815260040160405180910390fd5b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806117828787877f00000000000000000000000000000000000000000000000000000000000000008d612d67565b93509350935093508061179e5750600098975050505050505050565b8684146117cf576117ae84610e1b565b600180546001600160801b0319166001600160801b03929092169190911790555b858314611800576117df83612e7f565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461182e5761181082610e1b565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6005546000908190611860908490600160801b90046001600160801b0316610fbf565b6005546201000090046001600160701b031692509050818111156119dc57600061188a8383614509565b9050611899610311828661210d565b600580546010906118bb908490600160801b90046001600160801b03166145df565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006118f4858361208390919063ffffffff16565b90506000611922827f0000000000000000000000000000000000000000000000000000000000000000610fbf565b905080600b600082825461193691906144f6565b9091555061194690508183614509565b915061195182610e1b565b6001805460009061196c9084906001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061199982612ebb565b600380546000906119ae908490600f0b614640565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806119ee8785612083565b91506000611a1c837f0000000000000000000000000000000000000000000000000000000000000000610fbf565b9050611a48817f0000000000000000000000000000000000000000000000000000000000000000610fbf565b91508315611a6b57611a5a8282614509565b611a649084614509565b9250611a82565b611a758282614509565b611a7f90846144f6565b92505b86861015611aa557611a95838789612122565b9250611aa2828789612122565b91505b509550959350505050565b600354600160801b90046001600160801b0316611af961031182611adc670de0b6b3a76400008661448b565b600454600160801b90046001600160801b031691908a60006122ea565b600480546001600160801b03928316600160801b029216919091179055611b1f86610e1b565b611b2990826145df565b600380546001600160801b03928316600160801b029216919091179055611b4f84610e1b565b60018054600090611b6a9084906001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b9783612e7f565b60038054600090611bac908490600f0b614640565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611bdc85610e1b565b60018054601090611bfe908490600160801b90046001600160801b03166145df565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c4284611c3c8a888a612122565b90612083565b9050611c4f888486612122565b611c5990826144f6565b905086811115611c695786810391505b509695505050505050565b60006001600160701b03821115610e455760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611ce057507f0000000000000000000000000000000000000000000000000000000000000000611cde8583614509565b105b15611ced57611ced612251565b6003549084900390600f0b611d028482614578565b905083611d0e86611706565b138015611d4357507f0000000000000000000000000000000000000000000000000000000000000000611d418383612ee5565b105b15611d5057611d50612251565b600254600160801b90046001600160801b0316611d9261031182611d7c670de0b6b3a76400008861448b565b6004546001600160801b031691908c60006122ea565b600480546001600160801b0319166001600160801b0392909216919091179055611dbc8882614509565b9050611dc781610e1b565b600280546001600160801b03928316600160801b029216919091179055611ded83610e1b565b600180546001600160801b0319166001600160801b0392909216919091179055611e1682612e7f565b600380546001600160801b0319166001600160801b0392909216919091179055611e3f87610e1b565b60018054601090611e61908490600160801b90046001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611eb8611e9e8483612f0b565b611ea9846000612f0b565b611eb39190614578565b612e7f565b9050600081600f0b1315611f0d5760028054829190600090611ee49084906001600160801b0316614538565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611f3d57611f228161466d565b60028054600090611ee49084906001600160801b03166145df565b505050565b600080600080611f59611f5486612458565b612592565b9150915080611f6f575060009485945092505050565b6000808611611f7f576000611f89565b611f898387610fbf565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611ff491906144f6565b611ffe9190614509565b9050806000036120175750600096879650945050505050565b60006120238383612083565b98600198509650505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b611f3d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612f21565b60006100c783670de0b6b3a764000084612122565b6000816000036120b15750670de0b6b3a7640000610819565b826000036120c157506000610819565b60006120cc83611706565b905060006120e16120dc86611706565b612f81565b90508181026120f8670de0b6b3a764000082614693565b9050612103816131a7565b9695505050505050565b60006100c783670de0b6b3a76400008461333c565b600082600019048411830215820261213957600080fd5b5091020490565b60015460035460009161068e916001600160801b0390911690600f0b612ee5565b600061218287878761217b88670de0b6b3a7640000614509565b8787613362565b979650505050505050565b6000610edf8261219e858888612122565b90612098565b60006100c46121eb6121be84670de0b6b3a7640000614509565b6121e5670de0b6b3a76400006121d4818a61210d565b6121de9190614509565b879061261f565b9061261f565b6121fd90670de0b6b3a76400006144f6565b611c3c84670de0b6b3a7640000614509565b6000806122468561221e612140565b61222891906144f6565b600154611182908790600160801b90046001600160801b0316614509565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122b4856121e585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006122aa818c61210d565b6121e59190614509565b91506122e0827f0000000000000000000000000000000000000000000000000000000000000000610fbf565b9050935093915050565b6000826000036122fb575084610edf565b811561236d5761232c61230e84876144f6565b6123188587610fbf565b612322888a610fbf565b611c3c91906144f6565b9050600061233a858861340f565b90506000612348868961341e565b90508183101561235a57819250612366565b80831115612366578092505b5050610edf565b82850361237c57506000610edf565b6121036123898487614509565b612393858761261f565b61239d888a610fbf565b611c3c9190614509565b60006123cf600e60006123bb60028661137b565b815260200190815260200160002054611706565b6123e1600e60006123bb60018761137b565b6108199190614578565b60006124177f00000000000000000000000000000000000000000000000000000000000000008361261f565b60025461242d91906001600160801b03166144f6565b600154612443906001600160801b031684610fbf565b101592915050565b6000610819826004610693565b61246061430c565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612558911661342d565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261258a9290041661342d565b905292915050565b60008060008060006125a3866134a3565b91509150806125ba57506000958695509350505050565b6125c78660a00151611706565b6125d0876137c3565b836125de8960000151611706565b6125e891906145ff565b6125f291906145ff565b6125fc9190614578565b9250505060008112156126155750600093849350915050565b9360019350915050565b60006100c78383670de0b6b3a764000061333c565b60008060008361264386611706565b61264d9190614578565b90506000811215612665576000809250925050610e14565b946001945092505050565b60008060008460a001511261268d57505060808201516001610e14565b60008460a0015161269d9061451c565b905060006126d985876101000151886000015160e00151670de0b6b3a76400006126c79190614509565b89516060810151608090910151613827565b935090508215806126e8575080155b156126fb57600080935093505050610e14565b6000612707838361210d565b9050670de0b6b3a764000081116127435780670de0b6b3a764000003945061273c8760c0015186610fbf90919063ffffffff16565b9450612752565b60008094509450505050610e14565b8660800151851115612771578660800151600194509450505050610e14565b506001925050509250929050565b6000806127b58460c001518560e00151866101000151876000015160a001516127a788611706565b6127b09061451c565b612d67565b875160408101929092526020820192909252919091529050806127dc576000915050610819565b60006127eb8560000151612592565b92509050816127ff57600092505050610819565b8460200151811061281557600092505050610819565b60008560600151866040015161282b91906144f6565b9050612846828760200151836121229092919063ffffffff16565b6121039082614509565b6000808560600151866040015161286791906144f6565b602087015160608801519192506000916128819184612122565b90508660a00151600003612898579150612d5f9050565b600080808960048810156128ab57600497505b60005b88811015612c07576128c0868b61340f565b955060006128e98360c001518460e00151856101000151866000015160a001516127a78c611706565b8651604081019290925260208201929092529190915290508061291757600098505050505050505050612d5f565b60006129268e60000151612592565b92509050816129415760009950505050505050505050612d5f565b61294c84828b6138d3565b1561296257879950505050505050505050612d5f565b60008460a001511315612acb57835180516020820151604083015160a084015160e0909401516000946129b6949392916129a490670de0b6b3a7640000614509565b8a51606081015160809091015161393f565b93509050826129d25760009a5050505050505050505050612d5f565b808560a0015110612ac9576129e685613a44565b909950925082612a035760009a5050505050505050505050612d5f565b612a288560c001518660e00151876101000151886000015160a001516127a78e611706565b88516040810192909252602082019290925291909152925082612a585760009a5050505050505050505050612d5f565b845180516020820151604083015160a084015160e090940151612a8894906129a490670de0b6b3a7640000614509565b9350905082612aa45760009a5050505050505050505050612d5f565b8e60a001518111612ac157889a5050505050505050505050612d5f565b5050506128ae565b505b6000612adc858f8760a00151613b1a565b93509050821580612af55750670de0b6b3a76400008110155b15612b0d5760009a5050505050505050505050612d5f565b80670de0b6b3a76400000390506000612b3a6115618760400151886020015161261f90919063ffffffff16565b612b47611561858e610fbf565b612b519190614578565b9050881580612b6f5750612b6489613e75565b612b6d82613e75565b125b15612b7e578098508997508296505b6000811315612ba657612b958b611c3c8385612083565b612b9f908b6144f6565b9950612bf8565b6000811215612bef576000612bc08c611c3c85818661451c565b90508a811015612bd457808b039a50612be9565b60009c50505050505050505050505050612d5f565b50612bf8565b50505050612c07565b846001019450505050506128ae565b506000612c2f8260c001518360e00151846101000151856000015160a001516127a78b611706565b85516040810192909252602082019290925291909152905080612c5c576000975050505050505050612d5f565b6000612c6b8360000151613e8d565b90506000612c8d6115618560400151866020015161261f90919063ffffffff16565b612c9a611561848c610fbf565b612ca49190614578565b9050612caf87613e75565b612cb882613e75565b1215612cc5578795508194505b612cec612ce0655af3107a4000670de0b6b3a7640000614509565b6020860151908b61333c565b6040850151612cfc908790612083565b1080612d3c5750612d2a612d1e655af3107a4000670de0b6b3a76400006144f6565b6020860151908b612122565b6040850151612d3a90879061210d565b115b15612d535760009950505050505050505050612d5f565b50939750505050505050505b949350505050565b60008060008084600003612d8657508792508691508590506001612e73565b600085612d928b611706565b612d9c91906145ff565b9050612da787611706565b811215612dc257600080600080945094509450945050612e73565b80945060008912612de257612ddb611561868b8d612122565b9350612e05565b612df9611561612df18b61451c565b87908d61333c565b612e029061451c565b93505b600080612e128c8c612634565b9150915080612e31576000806000809650965096509650505050612e73565b6000612e3d8888612634565b9250905081612e5d57600080600080975097509750975050505050612e73565b612e688b8285612122565b955060019450505050505b95509550955095915050565b600060016001607f1b0319821280612e9d575060016001607f1b0382135b15610e455760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03821115610e455760405163a5353be560e01b815260040160405180910390fd5b600080612ef28484612634565b909250905080612f0457612f04612251565b5092915050565b6000818313612f1a57816100c7565b5090919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612f7b908590613ebd565b50505050565b6000808213612fa35760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130269084901c611706565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136131c257506000919050565b680755bf798b4a1bf1e582126131eb576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061210374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611706565b600082600019048411830215820261335357600080fd5b50910281810615159190040190565b6000806133728888878787613f25565b905061338c8561219e613385898c6144f6565b8690610fbf565b9750613399848985612122565b9750878110156133ab576133ab612251565b878103670de0b6b3a764000081106133d9576133d2610ea0670de0b6b3a76400008861210d565b90506133f1565b6133ee610ea0670de0b6b3a764000088612083565b90505b8088101561340157613401612251565b909603979650505050505050565b600081831161150357826100c7565b6000818311612f1a57816100c7565b600080670de0b6b3a764000061344161081f565b61344b919061448b565b905080831161345b576000613465565b6134658184614509565b915061150061349c670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061448b565b8390612083565b60008060006134c8611561856101600151866101400151610fbf90919063ffffffff16565b6134e861156186610120015187610100015161261f90919063ffffffff16565b6134f29190614578565b905060008061350986600001518760200151612634565b915091508061352057506000958695509350505050565b6000831315613661576000839050600061356e886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061355f9190614509565b8d606001518e6080015161393f565b9350905082613587575060009788975095505050505050565b8181106136255760006135c1858a60400151858c60e00151670de0b6b3a76400006135b29190614509565b8d606001518e60800151613f54565b94509050831580156135d657508860c0015183105b156135ed5750600098600198509650505050505050565b8361360357506000988998509650505050505050565b61360c81611706565b6136159061451c565b9960019950975050505050505050565b600088602001511261364d576136448860a00151856115619190614509565b6120239061451c565b60a088015188516136449161156191614509565b60008312156137b45760006136758461451c565b905060006136a98489604001518a60e00151670de0b6b3a764000061369a9190614509565b8b606001518c60800151613827565b93509050826136c2575060009788975095505050505050565b8181106137475760006136fc858a60400151858c60e00151670de0b6b3a76400006136ed9190614509565b8d606001518e60800151614017565b945090508315801561371157508860c0015183105b156137285750600098600198509650505050505050565b8361373e57506000988998509650505050505050565b61361581611706565b6000613779858a604001518b60e00151670de0b6b3a764000061376a9190614509565b8c606001518d608001516140ee565b945090508361379357506000988998509650505050505050565b6136156137aa8a606001518486611c3c9190614509565b61156190836144f6565b50600095600195509350505050565b60006137f6611561836101200151670de0b6b3a76400006137e49190614509565b6060850151610100860151919061333c565b6123e1611561846101600151670de0b6b3a76400006138159190614509565b60608601516101408701519190612122565b60008060006138398888888888613f25565b90506000613864670de0b6b3a76400006138538888612083565b61385d91906144f6565b839061210d565b9050670de0b6b3a764000081106138915761388a610ea0670de0b6b3a76400008961210d565b90506138a9565b6138a6610ea0670de0b6b3a764000089612083565b90505b808810156138bf576000809350935050506138c9565b8703925060019150505b9550959350505050565b60208301516000906138e5908461210d565b60408501516138f5908490612083565b101580156100c457506020840151613925908461391e633b9aca00670de0b6b3a76400006144f6565b9190612122565b604085015161393590849061210d565b1115949350505050565b6000806000881215613961576139548861451c565b61395e90876144f6565b95505b60008061396e8b8b612634565b915091508061398557600080935093505050613a38565b6000613994838b8a8a8a61419d565b905060006139b16139a98a61219e8a8e61261f565b89908961333c565b9050808210156139cb576000809550955050505050613a38565b808203670de0b6b3a764000081106139f9576139f2610ea0670de0b6b3a76400008c612083565b9050613a11565b613a0e610ea0670de0b6b3a76400008c61210d565b90505b8b811015613a2a57600080965096505050505050613a38565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613a5e57506000928392509050565b6000613a6d84600001516137c3565b90506000613a99856040015186606001518760400151613a8d91906144f6565b6020880151919061333c565b905060008212613ac05780821015613ab357819003613ad6565b5060009485945092505050565b613ac98261451c565b613ad390826144f6565b90505b60e085015160c0860151613aeb91839061333c565b9050808560c001511015613b06575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b3e57855160400151613b379085906144f6565b9050613b79565b6000613b498561451c565b875160400151909150811015613b69578651604001518190039150613b77565b60008093509350505061160e565b505b855180516020909101516000918291613b929190612634565b9150915080613baa576000809450945050505061160e565b875160e0810151604090910151600091613bdf91613bd391613bcc9190612098565b8a90610fbf565b6101008b01519061210d565b895160e0810151608090910151613c0a91613bfe9161219e9088610fbf565b8b51606001519061210d565b613c1491906144f6565b90506000613c4c613c40613c398c6000015160e001518861209890919063ffffffff16565b8b9061261f565b6101008c015190612083565b905080821015613c675760008096509650505050505061160e565b80820391506000613ca9858c60000151604001518d6000015160e00151670de0b6b3a7640000613c979190614509565b8e516060810151608090910151613f25565b90506000613cd38c6000015160e00151670de0b6b3a7640000613ccc9190614509565b8890612098565b905080821015613cf057600080985098505050505050505061160e565b8b51608081015160609091015191830391613d0c91839161333c565b9050670de0b6b3a76400008110613d50578b5160e00151613d4990610ea090613d3d90670de0b6b3a7640000614509565b8e5160e001519061210d565b9050613d7f565b8b5160e00151613d7c90610ea090613d7090670de0b6b3a7640000614509565b8e5160e0015190612083565b90505b8b5160600151613d92908590839061333c565b935083670de0b6b3a76400001115613db65783670de0b6b3a7640000039350613dca565b60006001985098505050505050505061160e565b60008c60e0015112613e2d5760c08c015160e08d0151613de99161210d565b9250670de0b6b3a7640000831115613e0e57600080985098505050505050505061160e565b670de0b6b3a76400009290920391613e268484610fbf565b9350613e62565b613e5f613e468d60c001518e60e00151611c3c9061451c565b613e5890670de0b6b3a76400006144f6565b8590610fbf565b93505b50919a60019a5098505050505050505050565b6000808212613e845781610819565b6108198261451c565b6000806000613e9b84612592565b9150915080612f0457604051635516328b60e11b815260040160405180910390fd5b6000613ed26001600160a01b038416836141c2565b90508051600014158015613ef7575080806020019051810190613ef591906146c1565b155b15611f3d57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000613f318585612098565b613f4a613f428661219e868b61261f565b85908561333c565b61210391906144f6565b6000806000613f668989888888613f25565b9050613f768661219e898b6144f6565b975087811015613f8d57600080925092505061400c565b878103613f9b81868861333c565b9050670de0b6b3a76400008110613fc857613fc1610ea0670de0b6b3a76400008961210d565b9050613fe0565b613fdd610ea0670de0b6b3a764000089612083565b90505b613fea818661210d565b9050808a10156140025760008093509350505061400c565b8903925060019150505b965096945050505050565b60008060006140298989888888613f25565b90508688101561404057600080925092505061400c565b968690039661404f8887612098565b97508781101561406657600080925092505061400c565b87810361407481868861333c565b9050670de0b6b3a764000081106140a15761409a610ea0670de0b6b3a76400008961210d565b90506140b9565b6140b6610ea0670de0b6b3a764000089612083565b90505b6140c3818661210d565b9050898110156140db5760008093509350505061400c565b9890980398600198509650505050505050565b6000806000614100888888888861419d565b90506000614124670de0b6b3a764000061411a888861210d565b61349c91906144f6565b9050670de0b6b3a764000081106141515761414a610ea0670de0b6b3a764000089612083565b9050614169565b614166610ea0670de0b6b3a76400008961210d565b90505b6141738186612083565b90508881101561418b576000809350935050506138c9565b97909703976001975095505050505050565b60006141a98585612098565b613f4a6141ba8661219e868b610fbf565b859085612122565b60606100c78383600084600080856001600160a01b031684866040516141e891906146de565b60006040518083038185875af1925050503d8060008114614225576040519150601f19603f3d011682016040523d82523d6000602084013e61422a565b606091505b509150915061210386838360608261424a5761424582614291565b6100c7565b815115801561426157506001600160a01b0384163b155b1561428a57604051639996b31560e01b81526001600160a01b0385166004820152602401613f1c565b50806100c7565b8051156142a15780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806142ce61430c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806040838503121561438057600080fd5b50508035926020909101359150565b60006060828403121561150357600080fd5b6000806000606084860312156143b657600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156143db57600080fd5b6143e78682870161438f565b9150509250925092565b6000806000806080858703121561440757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561443357600080fd5b61443f8782880161438f565b91505092959194509250565b634e487b7160e01b600052601260045260246000fd5b6000826144705761447061444b565b500690565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761081957610819614475565b6000602082840312156144b457600080fd5b81356001600160a01b03811681146100c757600080fd5b8015158114610d3f57600080fd5b6000602082840312156144eb57600080fd5b81356100c7816144cb565b8082018082111561081957610819614475565b8181038181111561081957610819614475565b6000600160ff1b820161453157614531614475565b5060000390565b6001600160801b03818116838216019080821115612f0457612f04614475565b6001600160701b03818116838216019080821115612f0457612f04614475565b8181036000831280158383131683831282161715612f0457612f04614475565b6000808335601e198436030181126145af57600080fd5b83018035915067ffffffffffffffff8211156145ca57600080fd5b602001915036819003821315610e1457600080fd5b6001600160801b03828116828216039080821115612f0457612f04614475565b808201828112600083128015821682158216171561461f5761461f614475565b505092915050565b60006020828403121561463957600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561081957610819614475565b600081600f0b60016001607f1b0319810361468a5761468a614475565b60000392915050565b6000826146a2576146a261444b565b600160ff1b8214600019841416156146bc576146bc614475565b500590565b6000602082840312156146d357600080fd5b81516100c7816144cb565b6000825160005b818110156146ff57602081860181015185830152016146e5565b50600092019182525091905056fea2646970667358221220199782d69e3fb66e724b2eb2de88050ec7a038714909c5f3d475a447ffb6c1db64736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    }
};
