export const MockHyperdriveTarget4 = {
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004f2638038062004f268339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614aaa6200047c60003960005050600050506000818160fa01528181610336015281816104e30152610e78015260008181610e52015281816112a901528181611e3201528181611e950152818161246a015281816128c601528181612b650152612ba101526000818161015b01528181610e2c015281816111230152818161118701528181611776015261180901526000611a81015260008181611ba7015281816126ed0152612766015260008181610b3e0152818161122101528181611b7b015261273a015260006126b901526000818161019d01528181610e9e0152818161110101526111a801526000818161017c0152818161057901528181610a79015261238501526000818161091f015281816109ac0152610a110152600050506000818161073001528181611574015281816115bd0152818161164f015281816116d001528181611877015281816118f801528181612565015281816125ae015281816129eb0152612a340152614aaa6000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614723565b61007c565b6040519081526020015b60405180910390f35b610067610062366004614787565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c16101466107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107f9565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb898661083f565b9150915061021261020a610918565b82600461094e565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b03909116906147f7565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c549192509061029990839061480a565b905060008060006102a986610de3565b90506102b481610f1d565b91506102c76102c288610f54565b610f82565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610f1d565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b81876147f7565b9190610fa8565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610fc6565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c61481d565b8a610fe4565b60006103c38661108c565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610fc6565b6103fd565b60005b90508e600061040d828a8f611099565b90508c61041d602082018261481d565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a6040870160208801614854565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c6110c8565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b6000610559610918565b90506000610570610568610918565b84600461094e565b9050600061059e7f00000000000000000000000000000000000000000000000000000000000000008461480a565b905060008060006105b08d88876110db565b92509250925080600b60008282546105c8919061480a565b90915550600090506105db84898d61125b565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c61083f565b50506106168e848a88611283565b600061062360028761148a565b905060008f9050610647828e6000016020810190610641919061481d565b83610fe4565b848a8e84610658602083018361481d565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b88886114bf565b61069f6040880160208901614854565b6106b5898f8c6106af91906147f7565b906114e7565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061077a57503415155b1561079857604051631574f9f360e01b815260040160405180910390fd5b565b60006107a9602083018361481d565b6001600160a01b0316036107d05760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107f4916001600160801b0390911690600f0b6114fc565b905090565b6000806108088787878661151b565b905061083461081c82866301e13380611532565b61082e83670de0b6b3a76400006147f7565b90610fc6565b979650505050505050565b600080806108536040850160208601614854565b156108785761086e856108696040870187614871565b611558565b9093509050610894565b50346108908561088b6040870187614871565b6117ec565b8492505b61089c6110c8565b9150801561090f57604051600090339083908381818185875af1925050503d80600081146108e6576040519150601f19603f3d011682016040523d82523d6000602084013e6108eb565b606091505b505090508061090d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006109447f0000000000000000000000000000000000000000000000000000000000000000426148ce565b6107f490426147f7565b600083815260076020526040812080546001600160801b031615158061097357504285115b1561098957546001600160801b03169050610ddc565b600080610994610918565b90508087036109a557859150610a3f565b60006109d17f00000000000000000000000000000000000000000000000000000000000000008961480a565b90505b6000818152600760205260409020546001600160801b0316925081811480156109fb575082155b15610a04578692505b82600003610a3d57610a367f00000000000000000000000000000000000000000000000000000000000000008261480a565b90506109d4565b505b610a4882611996565b83546001600160801b0319166001600160801b0391909116178355610a6c866119c0565b5060009050600781610a9e7f00000000000000000000000000000000000000000000000000000000000000008b6147f7565b815260208101919091526040016000908120546001600160801b03169150610ac760028a61148a565b6000818152600e60205260408120549192508a8a8315610c0d5760019250600080610af686898c866000611b64565b9150915080600b6000828254610b0c919061480a565b90915550610b28905086600084610b2281610f54565b88611c33565b610b32818361480a565b9150610b6286838a8d877f0000000000000000000000000000000000000000000000000000000000000000611dad565b9150610b76610b7183856114e7565b611df1565b60058054600290610b979084906201000090046001600160701b03166148e2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bc482611996565b60058054601090610be6908490600160801b90046001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610c1a60018461148a565b6000818152600e60205260409020549091508015610d295760019450600080610c47838b8e886001611b64565b9150915080600b6000828254610c5d919061480a565b90915550610c79905083600084610c7381610f54565b8a611e1b565b610c8381836147f7565b9150610c92610b7183876114e7565b60058054600290610cb39084906201000090046001600160701b03166148e2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ce082611996565b60058054601090610d02908490600160801b90046001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d6157610d55610d3b87610f54565b610d4483610f54565b610d4e9190614922565b600061200c565b610d5f8e8e6120bf565b505b6000610d6c8f61224a565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610dc5959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610deb61465e565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610ee3911661233a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610f159290041661233a565b905292915050565b6000806000610f2b846123b0565b9150915080610f4d57604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f7e5760405163396ea70160e11b815260040160405180910390fd5b5090565b610f8b8161243d565b6107d057604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610fbf57600080fd5b5091020490565b6000610fdb83670de0b6b3a764000084610fa8565b90505b92915050565b6000838152600d602090815260408083206001600160a01b03861684529091528120805483929061101690849061480a565b90915550506000838152600e60205260408120805483929061103990849061480a565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fde8260046120bf565b60006110ab6040830160208401614854565b156110b7575082610ddc565b6110c184846114e7565b9050610ddc565b60006107f4670de0b6b3a764000061254a565b60008060006111476110eb6107d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612645565b9150856111548387612666565b11156111625761116261267b565b60008060006111cc6111726107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061151b565b90506111e289670de0b6b3a7640000838b612694565b509194509092506111f5905082846147f7565b6111ff90866147f7565b945061124b886112458b611213868a6147f7565b8b61121e8e826127a2565b8e7f00000000000000000000000000000000000000000000000000000000000000006127b8565b90612666565b9550909250505093509350939050565b600061126d6040830160208401614854565b15611279575082610ddc565b6110c18484610fc6565b6001546001600160801b03168381101561129f5761129f61267b565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906112d7908390600f0b6114fc565b10156112e5576112e561267b565b6003546113349061132f90600160801b90046001600160801b0316611312670de0b6b3a764000086614942565b600454600160801b90046001600160801b031691908960016127dd565b611996565b600480546001600160801b03928316600160801b02921691909117905561135a81611996565b600180546001600160801b0319166001600160801b039290921691909117905561138385611996565b600180546010906113a5908490600160801b90046001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113d285611996565b600380546010906113f4908490600160801b90046001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114238361287b565b90506114418161143288610f54565b61143c9084614922565b61200c565b61144a846128bf565b6114565761145661267b565b60006114618561108c565b90508061148157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114b45760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006114d16040830160208401614854565b156114e0576110c18484610fc6565b5082610ddc565b6000610fdb8383670de0b6b3a7640000610fa8565b600080611509848461291f565b909250905080610f4d57610f4d61267b565b600061008e8261152c858888610fa8565b9061295b565b600082600019048411830215820261154957600080fd5b50910281810615159190040190565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016115a8575047611633565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561160c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116309190614959565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116ae578734101561169d576040516312171d8360e31b815260040160405180910390fd5b6116a788346147f7565b9050611748565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117459190614972565b91505b81611766576040516312171d8360e31b815260040160405180910390fd5b6012546000036117ab5761179a887f0000000000000000000000000000000000000000000000000000000000000000610fc6565b6012819055945092506117e4915050565b6012546000906117bd908a9086610fa8565b905080601260008282546117d1919061480a565b909155509095509093506117e492505050565b935093915050565b60006117f78461254a565b90506012546000036118355761182d817f0000000000000000000000000000000000000000000000000000000000000000610fc6565b60125561185b565b6000611840826129d0565b90508060126000828254611854919061480a565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118d657823410156118c5576040516312171d8360e31b815260040160405180910390fd5b6118cf83346147f7565b9050611970565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196d9190614972565b91505b8161198e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006001600160801b03821115610f7e57604051630f0af95160e11b815260040160405180910390fd5b60055460009081906119e3908490600160801b90046001600160801b03166114e7565b6005546201000090046001600160701b03169250905081811115611b5f576000611a0d83836147f7565b9050611a1c61132f8286612ab9565b60058054601090611a3e908490600160801b90046001600160801b031661498f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a778583610fc690919063ffffffff16565b90506000611aa5827f00000000000000000000000000000000000000000000000000000000000000006114e7565b905080600b6000828254611ab9919061480a565b90915550611ac9905081836147f7565b9150611ad482611996565b60018054600090611aef9084906001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b1c82612ace565b60038054600090611b31908490600f0b6149af565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b718785610fc6565b91506000611b9f837f00000000000000000000000000000000000000000000000000000000000000006114e7565b9050611bcb817f00000000000000000000000000000000000000000000000000000000000000006114e7565b91508315611bee57611bdd82826147f7565b611be790846147f7565b9250611c05565b611bf882826147f7565b611c02908461480a565b92505b86861015611c2857611c18838789610fa8565b9250611c25828789610fa8565b91505b509550959350505050565b600354600160801b90046001600160801b0316611c7c61132f82611c5f670de0b6b3a764000086614942565b600454600160801b90046001600160801b031691908a60006127dd565b600480546001600160801b03928316600160801b029216919091179055611ca286611996565b611cac908261498f565b600380546001600160801b03928316600160801b029216919091179055611cd284611996565b60018054600090611ced9084906001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d1a83612af8565b60038054600090611d2f908490600f0b6149af565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d5f85611996565b60018054601090611d81908490600160801b90046001600160801b031661498f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611dbf8461082e8a888a610fa8565b9050611dcc888486610fa8565b611dd6908261480a565b905086811115611de65786810391505b509695505050505050565b60006001600160701b03821115610f7e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611e5d57507f0000000000000000000000000000000000000000000000000000000000000000611e5b85836147f7565b105b15611e6a57611e6a61267b565b6003549084900390600f0b611e7f8482614922565b905083611e8b86610f54565b138015611ec057507f0000000000000000000000000000000000000000000000000000000000000000611ebe83836114fc565b105b15611ecd57611ecd61267b565b600254600160801b90046001600160801b0316611f0f61132f82611ef9670de0b6b3a764000088614942565b6004546001600160801b031691908c60006127dd565b600480546001600160801b0319166001600160801b0392909216919091179055611f3988826147f7565b9050611f4481611996565b600280546001600160801b03928316600160801b029216919091179055611f6a83611996565b600180546001600160801b0319166001600160801b0392909216919091179055611f9382612af8565b600380546001600160801b0319166001600160801b0392909216919091179055611fbc87611996565b60018054601090611fde908490600160801b90046001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061203561201b8483612b34565b612026846000612b34565b6120309190614922565b612af8565b9050600081600f0b131561208a57600280548291906000906120619084906001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156120ba5761209f816149dc565b600280546000906120619084906001600160801b031661498f565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161210a916001600160801b0316906147f7565b90508060000361211e576001915050610fde565b600061212985612b43565b90508060000361213e57600192505050610fde565b60008061214c838589612be5565b9150915080612162576000945050505050610fde565b60008061216f8489612ceb565b9150915061218d61217f82610f54565b61218890614a02565b61243d565b9250826121a35760009650505050505050610fde565b6121ac82611996565b600680546000906121c79084906001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121f481611996565b60068054601090612216908490600160801b90046001600160801b0316614902565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008061226161225c86610de3565b6123b0565b9150915080612277575060009485945092505050565b6000808611612287576000612291565b61229183876114e7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916122fc919061480a565b61230691906147f7565b90508060000361231f5750600096879650945050505050565b600061232b8383610fc6565b98600198509650505050505050565b600080670de0b6b3a764000061234e610918565b6123589190614942565b9050808311612368576000612372565b61237281846147f7565b9150610ddc6123a9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614942565b8390610fc6565b60008060008060006123c186612ddb565b91509150806123d857506000958695509350505050565b6123e58660a00151610f54565b6123ee876130fb565b836123fc8960000151610f54565b6124069190614a1e565b6124109190614a1e565b61241a9190614922565b9250505060008112156124335750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b9004168380808061248f8787877f00000000000000000000000000000000000000000000000000000000000000008d61315f565b9350935093509350806124ab5750600098975050505050505050565b8684146124dc576124bb84611996565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461250d576124ec83612af8565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461253b5761251d82611996565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612599575047612624565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126219190614959565b90505b601254600003612635576000610ddc565b601254610ddc9084908390610fa8565b600061083487878761265f88670de0b6b3a76400006147f7565b8787613277565b6000610fdb8383670de0b6b3a7640000611532565b60405163bb55fd2760e01b815260040160405180910390fd5b60008080806126e587866126de8b6112456126b78c670de0b6b3a76400006147f7565b7f000000000000000000000000000000000000000000000000000000000000000090612666565b9190611532565b9350612711847f00000000000000000000000000000000000000000000000000000000000000006114e7565b9150600061273261272a89670de0b6b3a76400006147f7565b8a9088611532565b905061275e817f0000000000000000000000000000000000000000000000000000000000000000612666565b935061278a847f00000000000000000000000000000000000000000000000000000000000000006114e7565b612794908461480a565b915050945094509450949050565b60008183116127b15781610fdb565b5090919050565b6000806127d0846127ca8a888a611532565b90612ab9565b9050611dcc888486611532565b6000826000036127ee57508461008e565b81156128415761281f612801848761480a565b61280b85876114e7565b612815888a6114e7565b61082e919061480a565b9050600061282d858861329a565b90508082101561283b578091505b5061008e565b8285036128505750600061008e565b61008b61285d84876147f7565b6128678587612666565b612871888a6114e7565b61082e91906147f7565b60006128a3600e600061288f60028661148a565b815260200190815260200160002054610f54565b6128b5600e600061288f60018761148a565b610fde9190614922565b60006128eb7f000000000000000000000000000000000000000000000000000000000000000083612666565b60025461290191906001600160801b031661480a565b600154612917906001600160801b0316846114e7565b101592915050565b60008060008361292e86610f54565b6129389190614922565b90506000811215612950576000809250925050610911565b946001945092505050565b6000816000036129745750670de0b6b3a7640000610fde565b8260000361298457506000610fde565b600061298f83610f54565b905060006129a461299f86610f54565b6132a9565b90508181026129bb670de0b6b3a764000082614a46565b90506129c6816134cf565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612a1f575047612aaa565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612a83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612aa79190614959565b90505b601254610ddc90849083610fa8565b6000610fdb83670de0b6b3a764000084611532565b600060016001607f1b03821115610f7e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612b16575060016001607f1b0382135b15610f7e5760405163a5353be560e01b815260040160405180910390fd5b60008183136127b15781610fdb565b6002546000908190612b5e906001600160801b031684612ab9565b9050612b8a7f00000000000000000000000000000000000000000000000000000000000000008261480a565b6001546001600160801b03161115612bdf576001547f000000000000000000000000000000000000000000000000000000000000000090612bd59083906001600160801b03166147f7565b610ddc91906147f7565b50919050565b612bed6146bf565b600080612bf984610de3565b90506000612c06826123b0565b9350905082612c1b5750600091506117e49050565b6000612c42612c3d8461016001518561014001516114e790919063ffffffff16565b610f54565b612c62612c3d85610120015186610100015161266690919063ffffffff16565b612c6c9190614922565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600080600080612d038660c001518760e0015161291f565b9150915080612d1a57600080935093505050610911565b6000612d268784613664565b92509050811580612d35575080155b15612d495760008094509450505050610911565b6000612d558883613773565b905080600003612d6f576000809550955050505050610911565b87606001518111612d865794509250610911915050565b5060608701516000612d9a8986858b613844565b905080600003612db557600080965096505050505050610911565b828110612dcd57600080965096505050505050610911565b909890975095505050505050565b6000806000612e00612c3d8561016001518661014001516114e790919063ffffffff16565b612e20612c3d86610120015187610100015161266690919063ffffffff16565b612e2a9190614922565b9050600080612e418660000151876020015161291f565b9150915080612e5857506000958695509350505050565b6000831315612f995760008390506000612ea6886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612e9791906147f7565b8d606001518e60800151613d5b565b9350905082612ebf575060009788975095505050505050565b818110612f5d576000612ef9858a60400151858c60e00151670de0b6b3a7640000612eea91906147f7565b8d606001518e60800151613e67565b9450905083158015612f0e57508860c0015183105b15612f255750600098600198509650505050505050565b83612f3b57506000988998509650505050505050565b612f4481610f54565b612f4d90614a02565b9960019950975050505050505050565b6000886020015112612f8557612f7c8860a0015185612c3d91906147f7565b61232b90614a02565b60a08801518851612f7c91612c3d916147f7565b60008312156130ec576000612fad84614a02565b90506000612fe18489604001518a60e00151670de0b6b3a7640000612fd291906147f7565b8b606001518c60800151613f2a565b9350905082612ffa575060009788975095505050505050565b81811061307f576000613034858a60400151858c60e00151670de0b6b3a764000061302591906147f7565b8d606001518e60800151613fd6565b945090508315801561304957508860c0015183105b156130605750600098600198509650505050505050565b8361307657506000988998509650505050505050565b612f4d81610f54565b60006130b1858a604001518b60e00151670de0b6b3a76400006130a291906147f7565b8c606001518d608001516140ad565b94509050836130cb57506000988998509650505050505050565b612f4d6130e28a60600151848661082e91906147f7565b612c3d908361480a565b50600095600195509350505050565b600061312e612c3d836101200151670de0b6b3a764000061311c91906147f7565b60608501516101008601519190611532565b6128b5612c3d846101600151670de0b6b3a764000061314d91906147f7565b60608601516101408701519190610fa8565b6000806000808460000361317e5750879250869150859050600161326b565b60008561318a8b610f54565b6131949190614a1e565b905061319f87610f54565b8112156131ba5760008060008094509450945094505061326b565b809450600089126131da576131d3612c3d868b8d610fa8565b93506131fd565b6131f1612c3d6131e98b614a02565b87908d611532565b6131fa90614a02565b93505b60008061320a8c8c61291f565b915091508061322957600080600080965096509650965050505061326b565b6000613235888861291f565b92509050816132555760008060008097509750975097505050505061326b565b6132608b8285610fa8565b955060019450505050505b95509550955095915050565b600080613288888888888888613e67565b909250905080611de657611de661267b565b6000818311612bdf5782610fdb565b60008082136132cb5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061334e9084901c610f54565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136134ea57506000919050565b680755bf798b4a1bf1e58212613513576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906129c674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f54565b60008060008460a001511261368157505060808201516001610911565b60008460a0015161369190614a02565b905060006136cd85876101000151886000015160e00151670de0b6b3a76400006136bb91906147f7565b89516060810151608090910151613f2a565b935090508215806136dc575080155b156136ef57600080935093505050610911565b60006136fb8383612ab9565b9050670de0b6b3a764000081116137375780670de0b6b3a76400000394506137308760c00151866114e790919063ffffffff16565b9450613746565b60008094509450505050610911565b8660800151851115613765578660800151600194509450505050610911565b506001925050509250929050565b6000806137a98460c001518560e00151866101000151876000015160a0015161379b88610f54565b6137a490614a02565b61315f565b875160408101929092526020820192909252919091529050806137d0576000915050610fde565b60006137df85600001516123b0565b92509050816137f357600092505050610fde565b8460200151811061380957600092505050610fde565b60008560600151866040015161381f919061480a565b905061383a82876020015183610fa89092919063ffffffff16565b6129c690826147f7565b6000808560600151866040015161385b919061480a565b602087015160608801519192506000916138759184610fa8565b90508660a0015160000361388c579150613d539050565b6000808089600488101561389f57600497505b60005b88811015613bfb576138b4868b61329a565b955060006138dd8360c001518460e00151856101000151866000015160a0015161379b8c610f54565b8651604081019290925260208201929092529190915290508061390b57600098505050505050505050613d53565b600061391a8e600001516123b0565b92509050816139355760009950505050505050505050613d53565b61394084828b61415c565b1561395657879950505050505050505050613d53565b60008460a001511315613abf57835180516020820151604083015160a084015160e0909401516000946139aa9493929161399890670de0b6b3a76400006147f7565b8a516060810151608090910151613d5b565b93509050826139c65760009a5050505050505050505050613d53565b808560a0015110613abd576139da856141c1565b9099509250826139f75760009a5050505050505050505050613d53565b613a1c8560c001518660e00151876101000151886000015160a0015161379b8e610f54565b88516040810192909252602082019290925291909152925082613a4c5760009a5050505050505050505050613d53565b845180516020820151604083015160a084015160e090940151613a7c949061399890670de0b6b3a76400006147f7565b9350905082613a985760009a5050505050505050505050613d53565b8e60a001518111613ab557889a5050505050505050505050613d53565b5050506138a2565b505b6000613ad0858f8760a00151614297565b93509050821580613ae95750670de0b6b3a76400008110155b15613b015760009a5050505050505050505050613d53565b80670de0b6b3a76400000390506000613b2e612c3d8760400151886020015161266690919063ffffffff16565b613b3b612c3d858e6114e7565b613b459190614922565b9050881580613b635750613b58896145f2565b613b61826145f2565b125b15613b72578098508997508296505b6000811315613b9a57613b898b61082e8385610fc6565b613b93908b61480a565b9950613bec565b6000811215613be3576000613bb48c61082e858186614a02565b90508a811015613bc857808b039a50613bdd565b60009c50505050505050505050505050613d53565b50613bec565b50505050613bfb565b846001019450505050506138a2565b506000613c238260c001518360e00151846101000151856000015160a0015161379b8b610f54565b85516040810192909252602082019290925291909152905080613c50576000975050505050505050613d53565b6000613c5f8360000151610f1d565b90506000613c81612c3d8560400151866020015161266690919063ffffffff16565b613c8e612c3d848c6114e7565b613c989190614922565b9050613ca3876145f2565b613cac826145f2565b1215613cb9578795508194505b613ce0613cd4655af3107a4000670de0b6b3a76400006147f7565b6020860151908b611532565b6040850151613cf0908790610fc6565b1080613d305750613d1e613d12655af3107a4000670de0b6b3a764000061480a565b6020860151908b610fa8565b6040850151613d2e908790612ab9565b115b15613d475760009950505050505050505050613d53565b50939750505050505050505b949350505050565b6000806000881215613d7d57613d7088614a02565b613d7a908761480a565b95505b600080613d8a8b8b61291f565b9150915080613da157600080935093505050613e5b565b6000613db0838b8a8a8a61460a565b90506000613dcd613dc58a61152c8a8e612666565b899089611532565b905080821015613de7576000809550955050505050613e5b565b808203670de0b6b3a76400008110613e1c57613e15613e0e670de0b6b3a76400008c610fc6565b829061295b565b9050613e34565b613e31613e0e670de0b6b3a76400008c612ab9565b90505b8b811015613e4d57600080965096505050505050613e5b565b8b9003955060019450505050505b97509795505050505050565b6000806000613e798989888888614639565b9050613e898661152c898b61480a565b975087811015613ea0576000809250925050613f1f565b878103613eae818688611532565b9050670de0b6b3a76400008110613edb57613ed4613e0e670de0b6b3a764000089612ab9565b9050613ef3565b613ef0613e0e670de0b6b3a764000089610fc6565b90505b613efd8186612ab9565b9050808a1015613f1557600080935093505050613f1f565b8903925060019150505b965096945050505050565b6000806000613f3c8888888888614639565b90506000613f67670de0b6b3a7640000613f568888610fc6565b613f60919061480a565b8390612ab9565b9050670de0b6b3a76400008110613f9457613f8d613e0e670de0b6b3a764000089612ab9565b9050613fac565b613fa9613e0e670de0b6b3a764000089610fc6565b90505b80881015613fc257600080935093505050613fcc565b8703925060019150505b9550959350505050565b6000806000613fe88989888888614639565b905086881015613fff576000809250925050613f1f565b968690039661400e888761295b565b975087811015614025576000809250925050613f1f565b878103614033818688611532565b9050670de0b6b3a7640000811061406057614059613e0e670de0b6b3a764000089612ab9565b9050614078565b614075613e0e670de0b6b3a764000089610fc6565b90505b6140828186612ab9565b90508981101561409a57600080935093505050613f1f565b9890980398600198509650505050505050565b60008060006140bf888888888861460a565b905060006140e3670de0b6b3a76400006140d98888612ab9565b6123a9919061480a565b9050670de0b6b3a7640000811061411057614109613e0e670de0b6b3a764000089610fc6565b9050614128565b614125613e0e670de0b6b3a764000089612ab9565b90505b6141328186610fc6565b90508881101561414a57600080935093505050613fcc565b97909703976001975095505050505050565b602083015160009061416e9084612ab9565b604085015161417e908490610fc6565b10158015613d53575060208401516141a7908461032b633b9aca00670de0b6b3a764000061480a565b60408501516141b7908490612ab9565b1115949350505050565b60008060008360e00151136141db57506000928392509050565b60006141ea84600001516130fb565b9050600061421685604001518660600151876040015161420a919061480a565b60208801519190611532565b90506000821261423d578082101561423057819003614253565b5060009485945092505050565b61424682614a02565b614250908261480a565b90505b60e085015160c0860151614268918390611532565b9050808560c001511015614283575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126142bb578551604001516142b490859061480a565b90506142f6565b60006142c685614a02565b8751604001519091508110156142e65786516040015181900391506142f4565b6000809350935050506117e4565b505b85518051602090910151600091829161430f919061291f565b915091508061432757600080945094505050506117e4565b875160e081015160409091015160009161435c9161435091614349919061295b565b8a906114e7565b6101008b015190612ab9565b895160e08101516080909101516143879161437b9161152c90886114e7565b8b516060015190612ab9565b614391919061480a565b905060006143c96143bd6143b68c6000015160e001518861295b90919063ffffffff16565b8b90612666565b6101008c015190610fc6565b9050808210156143e4576000809650965050505050506117e4565b80820391506000614426858c60000151604001518d6000015160e00151670de0b6b3a764000061441491906147f7565b8e516060810151608090910151614639565b905060006144508c6000015160e00151670de0b6b3a764000061444991906147f7565b889061295b565b90508082101561446d5760008098509850505050505050506117e4565b8b51608081015160609091015191830391614489918391611532565b9050670de0b6b3a764000081106144cd578b5160e001516144c690613e0e906144ba90670de0b6b3a76400006147f7565b8e5160e0015190612ab9565b90506144fc565b8b5160e001516144f990613e0e906144ed90670de0b6b3a76400006147f7565b8e5160e0015190610fc6565b90505b8b516060015161450f9085908390611532565b935083670de0b6b3a764000011156145335783670de0b6b3a7640000039350614547565b6000600198509850505050505050506117e4565b60008c60e00151126145aa5760c08c015160e08d015161456691612ab9565b9250670de0b6b3a764000083111561458b5760008098509850505050505050506117e4565b670de0b6b3a764000092909203916145a384846114e7565b93506145df565b6145dc6145c38d60c001518e60e0015161082e90614a02565b6145d590670de0b6b3a764000061480a565b85906114e7565b93505b50919a60019a5098505050505050505050565b60008082126146015781610fde565b610fde82614a02565b6000614616858561295b565b61462f6146278661152c868b6114e7565b859085610fa8565b61008b919061480a565b6000614645858561295b565b61462f6146568661152c868b612666565b859085611532565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806146d361465e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215612bdf57600080fd5b600080600080600060a0868803121561473b57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561476e57600080fd5b61477a88828901614711565b9150509295509295909350565b6000806000806080858703121561479d57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156147c957600080fd5b6147d587828801614711565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fde57610fde6147e1565b80820180821115610fde57610fde6147e1565b60006020828403121561482f57600080fd5b81356001600160a01b0381168114610ddc57600080fd5b80151581146107d057600080fd5b60006020828403121561486657600080fd5b8135610ddc81614846565b6000808335601e1984360301811261488857600080fd5b83018035915067ffffffffffffffff8211156148a357600080fd5b60200191503681900382131561091157600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826148dd576148dd6148b8565b500690565b6001600160701b03818116838216019080821115610f4d57610f4d6147e1565b6001600160801b03818116838216019080821115610f4d57610f4d6147e1565b8181036000831280158383131683831282161715610f4d57610f4d6147e1565b8082028115828204841417610fde57610fde6147e1565b60006020828403121561496b57600080fd5b5051919050565b60006020828403121561498457600080fd5b8151610ddc81614846565b6001600160801b03828116828216039080821115610f4d57610f4d6147e1565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610fde57610fde6147e1565b600081600f0b60016001607f1b031981036149f9576149f96147e1565b60000392915050565b6000600160ff1b8201614a1757614a176147e1565b5060000390565b8082018281126000831280158216821582161715614a3e57614a3e6147e1565b505092915050565b600082614a5557614a556148b8565b600160ff1b821460001984141615614a6f57614a6f6147e1565b50059056fea2646970667358221220d595e68a2a10bfa8bf8a99e2ab66ed6cecd9a4111d1d9832e71cb972f61bf08d64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
