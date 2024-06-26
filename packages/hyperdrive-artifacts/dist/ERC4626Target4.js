export const ERC4626Target4 = {
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004df838038062004df88339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516149b16200044760003960005050600050506000818160fa01528181610336015281816104e30152610e2d015260008181610e070152818161125e01528181611b1f01528181611b82015281816121520152818161255e01528181612811015261284d01526000818161015b01528181610de1015281816110d8015261113c0152600061176e0152600081816118940152818161236601526123df015260008181610af3015281816111d60152818161186801526123b30152600061233201526000818161019d01528181610e53015281816110b6015261115d01526000818161017c0152818161057901528181610a2e015261206d0152600081816108d40152818161096101526109c601526000818161154a015281816115c401528181611656015261224b01526000818161151d015261157e01526149b16000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c3660046145fb565b61007c565b6040519081526020015b60405180910390f35b61006761006236600461465f565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c1610146610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107ae565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb89866107f4565b9150915061021261020a6108cd565b826004610903565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b03909116906146cf565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906102999083906146e2565b905060008060006102a986610d98565b90506102b481610ed2565b91506102c76102c288610f09565b610f37565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610ed2565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b81876146cf565b9190610f5d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610f7b565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c6146f5565b8a610f99565b60006103c386611041565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610f7b565b6103fd565b60005b90508e600061040d828a8f61104e565b90508c61041d60208201826146f5565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a604087016020880161472c565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c61107d565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b60006105596108cd565b905060006105706105686108cd565b846004610903565b9050600061059e7f0000000000000000000000000000000000000000000000000000000000000000846146e2565b905060008060006105b08d8887611090565b92509250925080600b60008282546105c891906146e2565b90915550600090506105db84898d611210565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c6107f4565b50506106168e848a88611238565b600061062360028761143f565b905060008f9050610647828e600001602081019061064191906146f5565b83610f99565b848a8e8461065860208301836146f5565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b8888611474565b61069f604088016020890161472c565b6106b5898f8c6106af91906146cf565b9061149c565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561074d57604051631574f9f360e01b815260040160405180910390fd5b565b600061075e60208301836146f5565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107a9916001600160801b0390911690600f0b6114b1565b905090565b6000806107bd878787866114d0565b90506107e96107d182866301e133806114e7565b6107e383670de0b6b3a76400006146cf565b90610f7b565b979650505050505050565b60008080610808604085016020860161472c565b1561082d576108238561081e6040870187614749565b61150d565b9093509050610849565b5034610845856108406040870187614749565b611649565b8492505b61085161107d565b915080156108c457604051600090339083908381818185875af1925050503d806000811461089b576040519150601f19603f3d011682016040523d82523d6000602084013e6108a0565b606091505b50509050806108c2576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006108f97f0000000000000000000000000000000000000000000000000000000000000000426147a6565b6107a990426146cf565b600083815260076020526040812080546001600160801b031615158061092857504285115b1561093e57546001600160801b03169050610d91565b6000806109496108cd565b905080870361095a578591506109f4565b60006109867f0000000000000000000000000000000000000000000000000000000000000000896146e2565b90505b6000818152600760205260409020546001600160801b0316925081811480156109b0575082155b156109b9578692505b826000036109f2576109eb7f0000000000000000000000000000000000000000000000000000000000000000826146e2565b9050610989565b505b6109fd82611683565b83546001600160801b0319166001600160801b0391909116178355610a21866116ad565b5060009050600781610a537f00000000000000000000000000000000000000000000000000000000000000008b6146cf565b815260208101919091526040016000908120546001600160801b03169150610a7c60028a61143f565b6000818152600e60205260408120549192508a8a8315610bc25760019250600080610aab86898c866000611851565b9150915080600b6000828254610ac191906146e2565b90915550610add905086600084610ad781610f09565b88611920565b610ae781836146e2565b9150610b1786838a8d877f0000000000000000000000000000000000000000000000000000000000000000611a9a565b9150610b2b610b26838561149c565b611ade565b60058054600290610b4c9084906201000090046001600160701b03166147ba565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b7982611683565b60058054601090610b9b908490600160801b90046001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610bcf60018461143f565b6000818152600e60205260409020549091508015610cde5760019450600080610bfc838b8e886001611851565b9150915080600b6000828254610c1291906146e2565b90915550610c2e905083600084610c2881610f09565b8a611b08565b610c3881836146cf565b9150610c47610b26838761149c565b60058054600290610c689084906201000090046001600160701b03166147ba565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c9582611683565b60058054601090610cb7908490600160801b90046001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d1657610d0a610cf087610f09565b610cf983610f09565b610d0391906147fa565b6000611cf9565b610d148e8e611da7565b505b6000610d218f611f32565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d7a959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610da0614536565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610e989116612022565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610eca92900416612022565b905292915050565b6000806000610ee084612098565b9150915080610f0257604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f335760405163396ea70160e11b815260040160405180910390fd5b5090565b610f4081612125565b61078557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610f7457600080fd5b5091020490565b6000610f9083670de0b6b3a764000084610f5d565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610fcb9084906146e2565b90915550506000838152600e602052604081208054839290610fee9084906146e2565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f93826004611da7565b6000611060604083016020840161472c565b1561106c575082610d91565b611076848461149c565b9050610d91565b60006107a9670de0b6b3a7640000612232565b60008060006110fc6110a0610788565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006122be565b91508561110983876122df565b1115611117576111176122f4565b6000806000611181611127610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114d0565b905061119789670de0b6b3a7640000838b61230d565b509194509092506111aa905082846146cf565b6111b490866146cf565b9450611200886111fa8b6111c8868a6146cf565b8b6111d38e8261241b565b8e7f0000000000000000000000000000000000000000000000000000000000000000612431565b906122df565b9550909250505093509350939050565b6000611222604083016020840161472c565b1561122e575082610d91565b6110768484610f7b565b6001546001600160801b031683811015611254576112546122f4565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061128c908390600f0b6114b1565b101561129a5761129a6122f4565b6003546112e9906112e490600160801b90046001600160801b03166112c7670de0b6b3a76400008661481a565b600454600160801b90046001600160801b03169190896001612456565b611683565b600480546001600160801b03928316600160801b02921691909117905561130f81611683565b600180546001600160801b0319166001600160801b039290921691909117905561133885611683565b6001805460109061135a908490600160801b90046001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061138785611683565b600380546010906113a9908490600160801b90046001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113d883612513565b90506113f6816113e788610f09565b6113f190846147fa565b611cf9565b6113ff84612557565b61140b5761140b6122f4565b600061141685611041565b90508061143657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114695760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000611486604083016020840161472c565b15611495576110768484610f7b565b5082610d91565b6000610f908383670de0b6b3a7640000610f5d565b6000806114be84846125b7565b909250905080610f0257610f026122f4565b600061008e826114e1858888610f5d565b906125f3565b60008260001904841183021582026114fe57600080fd5b50910281810615159190040190565b6000806115456001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612668565b6115a57f00000000000000000000000000000000000000000000000000000000000000006115748760016146e2565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906126d5565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611615573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116399190614831565b925060009150505b935093915050565b61167e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612668565b505050565b60006001600160801b03821115610f3357604051630f0af95160e11b815260040160405180910390fd5b60055460009081906116d0908490600160801b90046001600160801b031661149c565b6005546201000090046001600160701b0316925090508181111561184c5760006116fa83836146cf565b90506117096112e48286612765565b6005805460109061172b908490600160801b90046001600160801b031661484a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117648583610f7b90919063ffffffff16565b90506000611792827f000000000000000000000000000000000000000000000000000000000000000061149c565b905080600b60008282546117a691906146e2565b909155506117b6905081836146cf565b91506117c182611683565b600180546000906117dc9084906001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118098261277a565b6003805460009061181e908490600f0b61486a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061185e8785610f7b565b9150600061188c837f000000000000000000000000000000000000000000000000000000000000000061149c565b90506118b8817f000000000000000000000000000000000000000000000000000000000000000061149c565b915083156118db576118ca82826146cf565b6118d490846146cf565b92506118f2565b6118e582826146cf565b6118ef90846146e2565b92505b8686101561191557611905838789610f5d565b9250611912828789610f5d565b91505b509550959350505050565b600354600160801b90046001600160801b03166119696112e48261194c670de0b6b3a76400008661481a565b600454600160801b90046001600160801b031691908a6000612456565b600480546001600160801b03928316600160801b02921691909117905561198f86611683565b611999908261484a565b600380546001600160801b03928316600160801b0292169190911790556119bf84611683565b600180546000906119da9084906001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a07836127a4565b60038054600090611a1c908490600f0b61486a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a4c85611683565b60018054601090611a6e908490600160801b90046001600160801b031661484a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611aac846107e38a888a610f5d565b9050611ab9888486610f5d565b611ac390826146e2565b905086811115611ad35786810391505b509695505050505050565b60006001600160701b03821115610f335760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b4a57507f0000000000000000000000000000000000000000000000000000000000000000611b4885836146cf565b105b15611b5757611b576122f4565b6003549084900390600f0b611b6c84826147fa565b905083611b7886610f09565b138015611bad57507f0000000000000000000000000000000000000000000000000000000000000000611bab83836114b1565b105b15611bba57611bba6122f4565b600254600160801b90046001600160801b0316611bfc6112e482611be6670de0b6b3a76400008861481a565b6004546001600160801b031691908c6000612456565b600480546001600160801b0319166001600160801b0392909216919091179055611c2688826146cf565b9050611c3181611683565b600280546001600160801b03928316600160801b029216919091179055611c5783611683565b600180546001600160801b0319166001600160801b0392909216919091179055611c80826127a4565b600380546001600160801b0319166001600160801b0392909216919091179055611ca987611683565b60018054601090611ccb908490600160801b90046001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611d22611d0884836127e0565b611d138460006127e0565b611d1d91906147fa565b6127a4565b9050600081600f0b1315611d775760028054829190600090611d4e9084906001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561167e57611d8c81614897565b60028054600090611d4e9084906001600160801b031661484a565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611df2916001600160801b0316906146cf565b905080600003611e06576001915050610f93565b6000611e11856127ef565b905080600003611e2657600192505050610f93565b600080611e34838589612891565b9150915080611e4a576000945050505050610f93565b600080611e578489612997565b91509150611e75611e6782610f09565b611e70906148bd565b612125565b925082611e8b5760009650505050505050610f93565b611e9482611683565b60068054600090611eaf9084906001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611edc81611683565b60068054601090611efe908490600160801b90046001600160801b03166147da565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611f49611f4486610d98565b612098565b9150915080611f5f575060009485945092505050565b6000808611611f6f576000611f79565b611f79838761149c565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611fe491906146e2565b611fee91906146cf565b9050806000036120075750600096879650945050505050565b60006120138383610f7b565b98600198509650505050505050565b600080670de0b6b3a76400006120366108cd565b612040919061481a565b905080831161205057600061205a565b61205a81846146cf565b9150610d91612091670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061481a565b8390610f7b565b60008060008060006120a986612a87565b91509150806120c057506000958695509350505050565b6120cd8660a00151610f09565b6120d687612da7565b836120e48960000151610f09565b6120ee91906148d9565b6120f891906148d9565b61210291906147fa565b92505050600081121561211b5750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806121778787877f00000000000000000000000000000000000000000000000000000000000000008d612e0b565b9350935093509350806121935750600098975050505050505050565b8684146121c4576121a384611683565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146121f5576121d4836127a4565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146122235761220582611683565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561229a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f939190614831565b60006107e98787876122d888670de0b6b3a76400006146cf565b8787612f23565b6000610f908383670de0b6b3a76400006114e7565b60405163bb55fd2760e01b815260040160405180910390fd5b600080808061235e87866123578b6111fa6123308c670de0b6b3a76400006146cf565b7f0000000000000000000000000000000000000000000000000000000000000000906122df565b91906114e7565b935061238a847f000000000000000000000000000000000000000000000000000000000000000061149c565b915060006123ab6123a389670de0b6b3a76400006146cf565b8a90886114e7565b90506123d7817f00000000000000000000000000000000000000000000000000000000000000006122df565b9350612403847f000000000000000000000000000000000000000000000000000000000000000061149c565b61240d90846146e2565b915050945094509450949050565b600081831161242a5781610f90565b5090919050565b600080612449846124438a888a6114e7565b90612765565b9050611ab98884866114e7565b60008260000361246757508461008e565b81156124d95761249861247a84876146e2565b612484858761149c565b61248e888a61149c565b6107e391906146e2565b905060006124a68588612f46565b905060006124b4868961241b565b9050818310156124c6578192506124d2565b808311156124d2578092505b505061008e565b8285036124e85750600061008e565b61008b6124f584876146cf565b6124ff85876122df565b612509888a61149c565b6107e391906146cf565b600061253b600e600061252760028661143f565b815260200190815260200160002054610f09565b61254d600e600061252760018761143f565b610f9391906147fa565b60006125837f0000000000000000000000000000000000000000000000000000000000000000836122df565b60025461259991906001600160801b03166146e2565b6001546125af906001600160801b03168461149c565b101592915050565b6000806000836125c686610f09565b6125d091906147fa565b905060008112156125e85760008092509250506108c6565b946001945092505050565b60008160000361260c5750670de0b6b3a7640000610f93565b8260000361261c57506000610f93565b600061262783610f09565b9050600061263c61263786610f09565b612f55565b9050818102612653670de0b6b3a764000082614901565b905061265e8161317b565b9695505050505050565b6040516001600160a01b0384811660248301528381166044830152606482018390526126cf9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613310565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526127268482613378565b6126cf576040516001600160a01b0384811660248301526000604483015261275b91869182169063095ea7b39060640161269d565b6126cf8482613310565b6000610f9083670de0b6b3a7640000846114e7565b600060016001607f1b03821115610f335760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806127c2575060016001607f1b0382135b15610f335760405163a5353be560e01b815260040160405180910390fd5b600081831361242a5781610f90565b600254600090819061280a906001600160801b031684612765565b90506128367f0000000000000000000000000000000000000000000000000000000000000000826146e2565b6001546001600160801b0316111561288b576001547f0000000000000000000000000000000000000000000000000000000000000000906128819083906001600160801b03166146cf565b610d9191906146cf565b50919050565b612899614597565b6000806128a584610d98565b905060006128b282612098565b93509050826128c75750600091506116419050565b60006128ee6128e984610160015185610140015161149c90919063ffffffff16565b610f09565b61290e6128e98561012001518661010001516122df90919063ffffffff16565b61291891906147fa565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806129af8660c001518760e001516125b7565b91509150806129c6576000809350935050506108c6565b60006129d2878461341b565b925090508115806129e1575080155b156129f557600080945094505050506108c6565b6000612a01888361352a565b905080600003612a1b5760008095509550505050506108c6565b87606001518111612a3257945092506108c6915050565b5060608701516000612a468986858b6135fb565b905080600003612a61576000809650965050505050506108c6565b828110612a79576000809650965050505050506108c6565b909890975095505050505050565b6000806000612aac6128e985610160015186610140015161149c90919063ffffffff16565b612acc6128e98661012001518761010001516122df90919063ffffffff16565b612ad691906147fa565b9050600080612aed866000015187602001516125b7565b9150915080612b0457506000958695509350505050565b6000831315612c455760008390506000612b52886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612b4391906146cf565b8d606001518e60800151613b12565b9350905082612b6b575060009788975095505050505050565b818110612c09576000612ba5858a60400151858c60e00151670de0b6b3a7640000612b9691906146cf565b8d606001518e60800151613c1e565b9450905083158015612bba57508860c0015183105b15612bd15750600098600198509650505050505050565b83612be757506000988998509650505050505050565b612bf081610f09565b612bf9906148bd565b9960019950975050505050505050565b6000886020015112612c3157612c288860a00151856128e991906146cf565b612013906148bd565b60a08801518851612c28916128e9916146cf565b6000831215612d98576000612c59846148bd565b90506000612c8d8489604001518a60e00151670de0b6b3a7640000612c7e91906146cf565b8b606001518c60800151613ce1565b9350905082612ca6575060009788975095505050505050565b818110612d2b576000612ce0858a60400151858c60e00151670de0b6b3a7640000612cd191906146cf565b8d606001518e60800151613d8d565b9450905083158015612cf557508860c0015183105b15612d0c5750600098600198509650505050505050565b83612d2257506000988998509650505050505050565b612bf981610f09565b6000612d5d858a604001518b60e00151670de0b6b3a7640000612d4e91906146cf565b8c606001518d60800151613e64565b9450905083612d7757506000988998509650505050505050565b612bf9612d8e8a6060015184866107e391906146cf565b6128e990836146e2565b50600095600195509350505050565b6000612dda6128e9836101200151670de0b6b3a7640000612dc891906146cf565b606085015161010086015191906114e7565b61254d6128e9846101600151670de0b6b3a7640000612df991906146cf565b60608601516101408701519190610f5d565b60008060008084600003612e2a57508792508691508590506001612f17565b600085612e368b610f09565b612e4091906148d9565b9050612e4b87610f09565b811215612e6657600080600080945094509450945050612f17565b80945060008912612e8657612e7f6128e9868b8d610f5d565b9350612ea9565b612e9d6128e9612e958b6148bd565b87908d6114e7565b612ea6906148bd565b93505b600080612eb68c8c6125b7565b9150915080612ed5576000806000809650965096509650505050612f17565b6000612ee188886125b7565b9250905081612f0157600080600080975097509750975050505050612f17565b612f0c8b8285610f5d565b955060019450505050505b95509550955095915050565b600080612f34888888888888613c1e565b909250905080611ad357611ad36122f4565b600081831161288b5782610f90565b6000808213612f775760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ffa9084901c610f09565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361319657506000919050565b680755bf798b4a1bf1e582126131bf576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061265e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f09565b60006133256001600160a01b03841683613f13565b9050805160001415801561334a575080806020019051810190613348919061492f565b155b1561167e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b031684604051613395919061494c565b6000604051808303816000865af19150503d80600081146133d2576040519150601f19603f3d011682016040523d82523d6000602084013e6133d7565b606091505b5091509150818015613401575080511580613401575080806020019051810190613401919061492f565b801561008e5750505050506001600160a01b03163b151590565b60008060008460a0015112613438575050608082015160016108c6565b60008460a00151613448906148bd565b9050600061348485876101000151886000015160e00151670de0b6b3a764000061347291906146cf565b89516060810151608090910151613ce1565b93509050821580613493575080155b156134a6576000809350935050506108c6565b60006134b28383612765565b9050670de0b6b3a764000081116134ee5780670de0b6b3a76400000394506134e78760c001518661149c90919063ffffffff16565b94506134fd565b600080945094505050506108c6565b866080015185111561351c5786608001516001945094505050506108c6565b506001925050509250929050565b6000806135608460c001518560e00151866101000151876000015160a0015161355288610f09565b61355b906148bd565b612e0b565b87516040810192909252602082019290925291909152905080613587576000915050610f93565b60006135968560000151612098565b92509050816135aa57600092505050610f93565b846020015181106135c057600092505050610f93565b6000856060015186604001516135d691906146e2565b90506135f182876020015183610f5d9092919063ffffffff16565b61265e90826146cf565b6000808560600151866040015161361291906146e2565b6020870151606088015191925060009161362c9184610f5d565b90508660a00151600003613643579150613b0a9050565b6000808089600488101561365657600497505b60005b888110156139b25761366b868b612f46565b955060006136948360c001518460e00151856101000151866000015160a001516135528c610f09565b865160408101929092526020820192909252919091529050806136c257600098505050505050505050613b0a565b60006136d18e60000151612098565b92509050816136ec5760009950505050505050505050613b0a565b6136f784828b613f21565b1561370d57879950505050505050505050613b0a565b60008460a00151131561387657835180516020820151604083015160a084015160e0909401516000946137619493929161374f90670de0b6b3a76400006146cf565b8a516060810151608090910151613b12565b935090508261377d5760009a5050505050505050505050613b0a565b808560a00151106138745761379185613f86565b9099509250826137ae5760009a5050505050505050505050613b0a565b6137d38560c001518660e00151876101000151886000015160a001516135528e610f09565b885160408101929092526020820192909252919091529250826138035760009a5050505050505050505050613b0a565b845180516020820151604083015160a084015160e090940151613833949061374f90670de0b6b3a76400006146cf565b935090508261384f5760009a5050505050505050505050613b0a565b8e60a00151811161386c57889a5050505050505050505050613b0a565b505050613659565b505b6000613887858f8760a0015161405c565b935090508215806138a05750670de0b6b3a76400008110155b156138b85760009a5050505050505050505050613b0a565b80670de0b6b3a764000003905060006138e56128e9876040015188602001516122df90919063ffffffff16565b6138f26128e9858e61149c565b6138fc91906147fa565b905088158061391a575061390f896143b7565b613918826143b7565b125b15613929578098508997508296505b6000811315613951576139408b6107e38385610f7b565b61394a908b6146e2565b99506139a3565b600081121561399a57600061396b8c6107e38581866148bd565b90508a81101561397f57808b039a50613994565b60009c50505050505050505050505050613b0a565b506139a3565b505050506139b2565b84600101945050505050613659565b5060006139da8260c001518360e00151846101000151856000015160a001516135528b610f09565b85516040810192909252602082019290925291909152905080613a07576000975050505050505050613b0a565b6000613a168360000151610ed2565b90506000613a386128e9856040015186602001516122df90919063ffffffff16565b613a456128e9848c61149c565b613a4f91906147fa565b9050613a5a876143b7565b613a63826143b7565b1215613a70578795508194505b613a97613a8b655af3107a4000670de0b6b3a76400006146cf565b6020860151908b6114e7565b6040850151613aa7908790610f7b565b1080613ae75750613ad5613ac9655af3107a4000670de0b6b3a76400006146e2565b6020860151908b610f5d565b6040850151613ae5908790612765565b115b15613afe5760009950505050505050505050613b0a565b50939750505050505050505b949350505050565b6000806000881215613b3457613b27886148bd565b613b3190876146e2565b95505b600080613b418b8b6125b7565b9150915080613b5857600080935093505050613c12565b6000613b67838b8a8a8a6143cf565b90506000613b84613b7c8a6114e18a8e6122df565b8990896114e7565b905080821015613b9e576000809550955050505050613c12565b808203670de0b6b3a76400008110613bd357613bcc613bc5670de0b6b3a76400008c610f7b565b82906125f3565b9050613beb565b613be8613bc5670de0b6b3a76400008c612765565b90505b8b811015613c0457600080965096505050505050613c12565b8b9003955060019450505050505b97509795505050505050565b6000806000613c3089898888886143fe565b9050613c40866114e1898b6146e2565b975087811015613c57576000809250925050613cd6565b878103613c658186886114e7565b9050670de0b6b3a76400008110613c9257613c8b613bc5670de0b6b3a764000089612765565b9050613caa565b613ca7613bc5670de0b6b3a764000089610f7b565b90505b613cb48186612765565b9050808a1015613ccc57600080935093505050613cd6565b8903925060019150505b965096945050505050565b6000806000613cf388888888886143fe565b90506000613d1e670de0b6b3a7640000613d0d8888610f7b565b613d1791906146e2565b8390612765565b9050670de0b6b3a76400008110613d4b57613d44613bc5670de0b6b3a764000089612765565b9050613d63565b613d60613bc5670de0b6b3a764000089610f7b565b90505b80881015613d7957600080935093505050613d83565b8703925060019150505b9550959350505050565b6000806000613d9f89898888886143fe565b905086881015613db6576000809250925050613cd6565b9686900396613dc588876125f3565b975087811015613ddc576000809250925050613cd6565b878103613dea8186886114e7565b9050670de0b6b3a76400008110613e1757613e10613bc5670de0b6b3a764000089612765565b9050613e2f565b613e2c613bc5670de0b6b3a764000089610f7b565b90505b613e398186612765565b905089811015613e5157600080935093505050613cd6565b9890980398600198509650505050505050565b6000806000613e7688888888886143cf565b90506000613e9a670de0b6b3a7640000613e908888612765565b61209191906146e2565b9050670de0b6b3a76400008110613ec757613ec0613bc5670de0b6b3a764000089610f7b565b9050613edf565b613edc613bc5670de0b6b3a764000089612765565b90505b613ee98186610f7b565b905088811015613f0157600080935093505050613d83565b97909703976001975095505050505050565b6060610f9083836000614423565b6020830151600090613f339084612765565b6040850151613f43908490610f7b565b10158015613b0a57506020840151613f6c908461032b633b9aca00670de0b6b3a76400006146e2565b6040850151613f7c908490612765565b1115949350505050565b60008060008360e0015113613fa057506000928392509050565b6000613faf8460000151612da7565b90506000613fdb856040015186606001518760400151613fcf91906146e2565b602088015191906114e7565b9050600082126140025780821015613ff557819003614018565b5060009485945092505050565b61400b826148bd565b61401590826146e2565b90505b60e085015160c086015161402d9183906114e7565b9050808560c001511015614048575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412614080578551604001516140799085906146e2565b90506140bb565b600061408b856148bd565b8751604001519091508110156140ab5786516040015181900391506140b9565b600080935093505050611641565b505b8551805160209091015160009182916140d491906125b7565b91509150806140ec5760008094509450505050611641565b875160e0810151604090910151600091614121916141159161410e91906125f3565b8a9061149c565b6101008b015190612765565b895160e081015160809091015161414c91614140916114e1908861149c565b8b516060015190612765565b61415691906146e2565b9050600061418e61418261417b8c6000015160e00151886125f390919063ffffffff16565b8b906122df565b6101008c015190610f7b565b9050808210156141a957600080965096505050505050611641565b808203915060006141eb858c60000151604001518d6000015160e00151670de0b6b3a76400006141d991906146cf565b8e5160608101516080909101516143fe565b905060006142158c6000015160e00151670de0b6b3a764000061420e91906146cf565b88906125f3565b905080821015614232576000809850985050505050505050611641565b8b5160808101516060909101519183039161424e9183916114e7565b9050670de0b6b3a76400008110614292578b5160e0015161428b90613bc59061427f90670de0b6b3a76400006146cf565b8e5160e0015190612765565b90506142c1565b8b5160e001516142be90613bc5906142b290670de0b6b3a76400006146cf565b8e5160e0015190610f7b565b90505b8b51606001516142d490859083906114e7565b935083670de0b6b3a764000011156142f85783670de0b6b3a764000003935061430c565b600060019850985050505050505050611641565b60008c60e001511261436f5760c08c015160e08d015161432b91612765565b9250670de0b6b3a7640000831115614350576000809850985050505050505050611641565b670de0b6b3a76400009290920391614368848461149c565b93506143a4565b6143a16143888d60c001518e60e001516107e3906148bd565b61439a90670de0b6b3a76400006146e2565b859061149c565b93505b50919a60019a5098505050505050505050565b60008082126143c65781610f93565b610f93826148bd565b60006143db85856125f3565b6143f46143ec866114e1868b61149c565b859085610f5d565b61008b91906146e2565b600061440a85856125f3565b6143f461441b866114e1868b6122df565b8590856114e7565b6060814710156144485760405163cd78605960e01b815230600482015260240161336f565b600080856001600160a01b03168486604051614464919061494c565b60006040518083038185875af1925050503d80600081146144a1576040519150601f19603f3d011682016040523d82523d6000602084013e6144a6565b606091505b509150915061265e8683836060826144c6576144c18261450d565b610d91565b81511580156144dd57506001600160a01b0384163b155b1561450657604051639996b31560e01b81526001600160a01b038516600482015260240161336f565b5080610d91565b80511561451d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806145ab614536565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561288b57600080fd5b600080600080600060a0868803121561461357600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561464657600080fd5b614652888289016145e9565b9150509295509295909350565b6000806000806080858703121561467557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156146a157600080fd5b6146ad878288016145e9565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f9357610f936146b9565b80820180821115610f9357610f936146b9565b60006020828403121561470757600080fd5b81356001600160a01b0381168114610d9157600080fd5b801515811461078557600080fd5b60006020828403121561473e57600080fd5b8135610d918161471e565b6000808335601e1984360301811261476057600080fd5b83018035915067ffffffffffffffff82111561477b57600080fd5b6020019150368190038213156108c657600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826147b5576147b5614790565b500690565b6001600160701b03818116838216019080821115610f0257610f026146b9565b6001600160801b03818116838216019080821115610f0257610f026146b9565b8181036000831280158383131683831282161715610f0257610f026146b9565b8082028115828204841417610f9357610f936146b9565b60006020828403121561484357600080fd5b5051919050565b6001600160801b03828116828216039080821115610f0257610f026146b9565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610f9357610f936146b9565b600081600f0b60016001607f1b031981036148b4576148b46146b9565b60000392915050565b6000600160ff1b82016148d2576148d26146b9565b5060000390565b80820182811260008312801582168215821617156148f9576148f96146b9565b505092915050565b60008261491057614910614790565b600160ff1b82146000198414161561492a5761492a6146b9565b500590565b60006020828403121561494157600080fd5b8151610d918161471e565b6000825160005b8181101561496d5760208186018101518583015201614953565b50600092019182525091905056fea26469706673582212204882833c689a20d6a09aa78cc51cc67831af2e886ad728ddf1f844f0ab4fde3f64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
