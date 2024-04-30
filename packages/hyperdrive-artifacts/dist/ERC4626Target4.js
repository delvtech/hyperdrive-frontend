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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004dd938038062004dd98339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516149926200044760003960005050600050506000818160fa01528181610336015281816104e30152610e2d015260008181610e070152818161125e01528181611b1f01528181611b82015281816121520152818161253f015281816127f2015261282e01526000818161015b01528181610de1015281816110d8015261113c0152600061176e0152600081816118940152818161236601526123df015260008181610af3015281816111d60152818161186801526123b30152600061233201526000818161019d01528181610e53015281816110b6015261115d01526000818161017c0152818161057901528181610a2e015261206d0152600081816108d40152818161096101526109c601526000818161154a015281816115c401528181611656015261224b01526000818161151d015261157e01526149926000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c3660046145dc565b61007c565b6040519081526020015b60405180910390f35b610067610062366004614640565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c1610146610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107ae565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb89866107f4565b9150915061021261020a6108cd565b826004610903565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b03909116906146b0565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906102999083906146c3565b905060008060006102a986610d98565b90506102b481610ed2565b91506102c76102c288610f09565b610f37565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610ed2565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b81876146b0565b9190610f5d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610f7b565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c6146d6565b8a610f99565b60006103c386611041565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610f7b565b6103fd565b60005b90508e600061040d828a8f61104e565b90508c61041d60208201826146d6565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a604087016020880161470d565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361074f565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c61107d565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b60006105596108cd565b905060006105706105686108cd565b846004610903565b9050600061059e7f0000000000000000000000000000000000000000000000000000000000000000846146c3565b905060008060006105b08d8887611090565b92509250925080600b60008282546105c891906146c3565b90915550600090506105db84898d611210565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c6107f4565b50506106168e848a88611238565b600061062360028761143f565b905060008f9050610647828e600001602081019061064191906146d6565b83610f99565b848a8e8461065860208301836146d6565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b8888611474565b61069f604088016020890161470d565b6106b5898f8c6106af91906146b0565b9061149c565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561074d57604051631574f9f360e01b815260040160405180910390fd5b565b600061075e60208301836146d6565b6001600160a01b0316036107855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107a9916001600160801b0390911690600f0b6114b1565b905090565b6000806107bd878787866114d0565b90506107e96107d182866301e133806114e7565b6107e383670de0b6b3a76400006146b0565b90610f7b565b979650505050505050565b60008080610808604085016020860161470d565b1561082d576108238561081e604087018761472a565b61150d565b9093509050610849565b503461084585610840604087018761472a565b611649565b8492505b61085161107d565b915080156108c457604051600090339083908381818185875af1925050503d806000811461089b576040519150601f19603f3d011682016040523d82523d6000602084013e6108a0565b606091505b50509050806108c2576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006108f97f000000000000000000000000000000000000000000000000000000000000000042614787565b6107a990426146b0565b600083815260076020526040812080546001600160801b031615158061092857504285115b1561093e57546001600160801b03169050610d91565b6000806109496108cd565b905080870361095a578591506109f4565b60006109867f0000000000000000000000000000000000000000000000000000000000000000896146c3565b90505b6000818152600760205260409020546001600160801b0316925081811480156109b0575082155b156109b9578692505b826000036109f2576109eb7f0000000000000000000000000000000000000000000000000000000000000000826146c3565b9050610989565b505b6109fd82611683565b83546001600160801b0319166001600160801b0391909116178355610a21866116ad565b5060009050600781610a537f00000000000000000000000000000000000000000000000000000000000000008b6146b0565b815260208101919091526040016000908120546001600160801b03169150610a7c60028a61143f565b6000818152600e60205260408120549192508a8a8315610bc25760019250600080610aab86898c866000611851565b9150915080600b6000828254610ac191906146c3565b90915550610add905086600084610ad781610f09565b88611920565b610ae781836146c3565b9150610b1786838a8d877f0000000000000000000000000000000000000000000000000000000000000000611a9a565b9150610b2b610b26838561149c565b611ade565b60058054600290610b4c9084906201000090046001600160701b031661479b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b7982611683565b60058054601090610b9b908490600160801b90046001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610bcf60018461143f565b6000818152600e60205260409020549091508015610cde5760019450600080610bfc838b8e886001611851565b9150915080600b6000828254610c1291906146c3565b90915550610c2e905083600084610c2881610f09565b8a611b08565b610c3881836146b0565b9150610c47610b26838761149c565b60058054600290610c689084906201000090046001600160701b031661479b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c9582611683565b60058054601090610cb7908490600160801b90046001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d1657610d0a610cf087610f09565b610cf983610f09565b610d0391906147db565b6000611cf9565b610d148e8e611da7565b505b6000610d218f611f32565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610d7a959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610da0614517565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610e989116612022565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610eca92900416612022565b905292915050565b6000806000610ee084612098565b9150915080610f0257604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f335760405163396ea70160e11b815260040160405180910390fd5b5090565b610f4081612125565b61078557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610f7457600080fd5b5091020490565b6000610f9083670de0b6b3a764000084610f5d565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610fcb9084906146c3565b90915550506000838152600e602052604081208054839290610fee9084906146c3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f93826004611da7565b6000611060604083016020840161470d565b1561106c575082610d91565b611076848461149c565b9050610d91565b60006107a9670de0b6b3a7640000612232565b60008060006110fc6110a0610788565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006122be565b91508561110983876122df565b1115611117576111176122f4565b6000806000611181611127610788565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114d0565b905061119789670de0b6b3a7640000838b61230d565b509194509092506111aa905082846146b0565b6111b490866146b0565b9450611200886111fa8b6111c8868a6146b0565b8b6111d38e8261241b565b8e7f0000000000000000000000000000000000000000000000000000000000000000612431565b906122df565b9550909250505093509350939050565b6000611222604083016020840161470d565b1561122e575082610d91565b6110768484610f7b565b6001546001600160801b031683811015611254576112546122f4565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061128c908390600f0b6114b1565b101561129a5761129a6122f4565b6003546112e9906112e490600160801b90046001600160801b03166112c7670de0b6b3a7640000866147fb565b600454600160801b90046001600160801b03169190896001612456565b611683565b600480546001600160801b03928316600160801b02921691909117905561130f81611683565b600180546001600160801b0319166001600160801b039290921691909117905561133885611683565b6001805460109061135a908490600160801b90046001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061138785611683565b600380546010906113a9908490600160801b90046001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113d8836124f4565b90506113f6816113e788610f09565b6113f190846147db565b611cf9565b6113ff84612538565b61140b5761140b6122f4565b600061141685611041565b90508061143657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114695760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000611486604083016020840161470d565b15611495576110768484610f7b565b5082610d91565b6000610f908383670de0b6b3a7640000610f5d565b6000806114be8484612598565b909250905080610f0257610f026122f4565b600061008e826114e1858888610f5d565b906125d4565b60008260001904841183021582026114fe57600080fd5b50910281810615159190040190565b6000806115456001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612649565b6115a57f00000000000000000000000000000000000000000000000000000000000000006115748760016146c3565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906126b6565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611615573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116399190614812565b925060009150505b935093915050565b61167e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612649565b505050565b60006001600160801b03821115610f3357604051630f0af95160e11b815260040160405180910390fd5b60055460009081906116d0908490600160801b90046001600160801b031661149c565b6005546201000090046001600160701b0316925090508181111561184c5760006116fa83836146b0565b90506117096112e48286612746565b6005805460109061172b908490600160801b90046001600160801b031661482b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117648583610f7b90919063ffffffff16565b90506000611792827f000000000000000000000000000000000000000000000000000000000000000061149c565b905080600b60008282546117a691906146c3565b909155506117b6905081836146b0565b91506117c182611683565b600180546000906117dc9084906001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118098261275b565b6003805460009061181e908490600f0b61484b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061185e8785610f7b565b9150600061188c837f000000000000000000000000000000000000000000000000000000000000000061149c565b90506118b8817f000000000000000000000000000000000000000000000000000000000000000061149c565b915083156118db576118ca82826146b0565b6118d490846146b0565b92506118f2565b6118e582826146b0565b6118ef90846146c3565b92505b8686101561191557611905838789610f5d565b9250611912828789610f5d565b91505b509550959350505050565b600354600160801b90046001600160801b03166119696112e48261194c670de0b6b3a7640000866147fb565b600454600160801b90046001600160801b031691908a6000612456565b600480546001600160801b03928316600160801b02921691909117905561198f86611683565b611999908261482b565b600380546001600160801b03928316600160801b0292169190911790556119bf84611683565b600180546000906119da9084906001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a0783612785565b60038054600090611a1c908490600f0b61484b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a4c85611683565b60018054601090611a6e908490600160801b90046001600160801b031661482b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611aac846107e38a888a610f5d565b9050611ab9888486610f5d565b611ac390826146c3565b905086811115611ad35786810391505b509695505050505050565b60006001600160701b03821115610f335760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b4a57507f0000000000000000000000000000000000000000000000000000000000000000611b4885836146b0565b105b15611b5757611b576122f4565b6003549084900390600f0b611b6c84826147db565b905083611b7886610f09565b138015611bad57507f0000000000000000000000000000000000000000000000000000000000000000611bab83836114b1565b105b15611bba57611bba6122f4565b600254600160801b90046001600160801b0316611bfc6112e482611be6670de0b6b3a7640000886147fb565b6004546001600160801b031691908c6000612456565b600480546001600160801b0319166001600160801b0392909216919091179055611c2688826146b0565b9050611c3181611683565b600280546001600160801b03928316600160801b029216919091179055611c5783611683565b600180546001600160801b0319166001600160801b0392909216919091179055611c8082612785565b600380546001600160801b0319166001600160801b0392909216919091179055611ca987611683565b60018054601090611ccb908490600160801b90046001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611d22611d0884836127c1565b611d138460006127c1565b611d1d91906147db565b612785565b9050600081600f0b1315611d775760028054829190600090611d4e9084906001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561167e57611d8c81614878565b60028054600090611d4e9084906001600160801b031661482b565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611df2916001600160801b0316906146b0565b905080600003611e06576001915050610f93565b6000611e11856127d0565b905080600003611e2657600192505050610f93565b600080611e34838589612872565b9150915080611e4a576000945050505050610f93565b600080611e578489612978565b91509150611e75611e6782610f09565b611e709061489e565b612125565b925082611e8b5760009650505050505050610f93565b611e9482611683565b60068054600090611eaf9084906001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611edc81611683565b60068054601090611efe908490600160801b90046001600160801b03166147bb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611f49611f4486610d98565b612098565b9150915080611f5f575060009485945092505050565b6000808611611f6f576000611f79565b611f79838761149c565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611fe491906146c3565b611fee91906146b0565b9050806000036120075750600096879650945050505050565b60006120138383610f7b565b98600198509650505050505050565b600080670de0b6b3a76400006120366108cd565b61204091906147fb565b905080831161205057600061205a565b61205a81846146b0565b9150610d91612091670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006147fb565b8390610f7b565b60008060008060006120a986612a68565b91509150806120c057506000958695509350505050565b6120cd8660a00151610f09565b6120d687612d88565b836120e48960000151610f09565b6120ee91906148ba565b6120f891906148ba565b61210291906147db565b92505050600081121561211b5750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806121778787877f00000000000000000000000000000000000000000000000000000000000000008d612dec565b9350935093509350806121935750600098975050505050505050565b8684146121c4576121a384611683565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146121f5576121d483612785565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146122235761220582611683565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561229a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f939190614812565b60006107e98787876122d888670de0b6b3a76400006146b0565b8787612f04565b6000610f908383670de0b6b3a76400006114e7565b60405163bb55fd2760e01b815260040160405180910390fd5b600080808061235e87866123578b6111fa6123308c670de0b6b3a76400006146b0565b7f0000000000000000000000000000000000000000000000000000000000000000906122df565b91906114e7565b935061238a847f000000000000000000000000000000000000000000000000000000000000000061149c565b915060006123ab6123a389670de0b6b3a76400006146b0565b8a90886114e7565b90506123d7817f00000000000000000000000000000000000000000000000000000000000000006122df565b9350612403847f000000000000000000000000000000000000000000000000000000000000000061149c565b61240d90846146c3565b915050945094509450949050565b600081831161242a5781610f90565b5090919050565b600080612449846124438a888a6114e7565b90612746565b9050611ab98884866114e7565b60008260000361246757508461008e565b81156124ba5761249861247a84876146c3565b612484858761149c565b61248e888a61149c565b6107e391906146c3565b905060006124a68588612f27565b9050808210156124b4578091505b5061008e565b8285036124c95750600061008e565b61008b6124d684876146b0565b6124e085876122df565b6124ea888a61149c565b6107e391906146b0565b600061251c600e600061250860028661143f565b815260200190815260200160002054610f09565b61252e600e600061250860018761143f565b610f9391906147db565b60006125647f0000000000000000000000000000000000000000000000000000000000000000836122df565b60025461257a91906001600160801b03166146c3565b600154612590906001600160801b03168461149c565b101592915050565b6000806000836125a786610f09565b6125b191906147db565b905060008112156125c95760008092509250506108c6565b946001945092505050565b6000816000036125ed5750670de0b6b3a7640000610f93565b826000036125fd57506000610f93565b600061260883610f09565b9050600061261d61261886610f09565b612f36565b9050818102612634670de0b6b3a7640000826148e2565b905061263f8161315c565b9695505050505050565b6040516001600160a01b0384811660248301528381166044830152606482018390526126b09186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506132f1565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526127078482613359565b6126b0576040516001600160a01b0384811660248301526000604483015261273c91869182169063095ea7b39060640161267e565b6126b084826132f1565b6000610f9083670de0b6b3a7640000846114e7565b600060016001607f1b03821115610f335760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806127a3575060016001607f1b0382135b15610f335760405163a5353be560e01b815260040160405180910390fd5b600081831361242a5781610f90565b60025460009081906127eb906001600160801b031684612746565b90506128177f0000000000000000000000000000000000000000000000000000000000000000826146c3565b6001546001600160801b0316111561286c576001547f0000000000000000000000000000000000000000000000000000000000000000906128629083906001600160801b03166146b0565b610d9191906146b0565b50919050565b61287a614578565b60008061288684610d98565b9050600061289382612098565b93509050826128a85750600091506116419050565b60006128cf6128ca84610160015185610140015161149c90919063ffffffff16565b610f09565b6128ef6128ca8561012001518661010001516122df90919063ffffffff16565b6128f991906147db565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806129908660c001518760e00151612598565b91509150806129a7576000809350935050506108c6565b60006129b387846133fc565b925090508115806129c2575080155b156129d657600080945094505050506108c6565b60006129e2888361350b565b9050806000036129fc5760008095509550505050506108c6565b87606001518111612a1357945092506108c6915050565b5060608701516000612a278986858b6135dc565b905080600003612a42576000809650965050505050506108c6565b828110612a5a576000809650965050505050506108c6565b909890975095505050505050565b6000806000612a8d6128ca85610160015186610140015161149c90919063ffffffff16565b612aad6128ca8661012001518761010001516122df90919063ffffffff16565b612ab791906147db565b9050600080612ace86600001518760200151612598565b9150915080612ae557506000958695509350505050565b6000831315612c265760008390506000612b33886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612b2491906146b0565b8d606001518e60800151613af3565b9350905082612b4c575060009788975095505050505050565b818110612bea576000612b86858a60400151858c60e00151670de0b6b3a7640000612b7791906146b0565b8d606001518e60800151613bff565b9450905083158015612b9b57508860c0015183105b15612bb25750600098600198509650505050505050565b83612bc857506000988998509650505050505050565b612bd181610f09565b612bda9061489e565b9960019950975050505050505050565b6000886020015112612c1257612c098860a00151856128ca91906146b0565b6120139061489e565b60a08801518851612c09916128ca916146b0565b6000831215612d79576000612c3a8461489e565b90506000612c6e8489604001518a60e00151670de0b6b3a7640000612c5f91906146b0565b8b606001518c60800151613cc2565b9350905082612c87575060009788975095505050505050565b818110612d0c576000612cc1858a60400151858c60e00151670de0b6b3a7640000612cb291906146b0565b8d606001518e60800151613d6e565b9450905083158015612cd657508860c0015183105b15612ced5750600098600198509650505050505050565b83612d0357506000988998509650505050505050565b612bda81610f09565b6000612d3e858a604001518b60e00151670de0b6b3a7640000612d2f91906146b0565b8c606001518d60800151613e45565b9450905083612d5857506000988998509650505050505050565b612bda612d6f8a6060015184866107e391906146b0565b6128ca90836146c3565b50600095600195509350505050565b6000612dbb6128ca836101200151670de0b6b3a7640000612da991906146b0565b606085015161010086015191906114e7565b61252e6128ca846101600151670de0b6b3a7640000612dda91906146b0565b60608601516101408701519190610f5d565b60008060008084600003612e0b57508792508691508590506001612ef8565b600085612e178b610f09565b612e2191906148ba565b9050612e2c87610f09565b811215612e4757600080600080945094509450945050612ef8565b80945060008912612e6757612e606128ca868b8d610f5d565b9350612e8a565b612e7e6128ca612e768b61489e565b87908d6114e7565b612e879061489e565b93505b600080612e978c8c612598565b9150915080612eb6576000806000809650965096509650505050612ef8565b6000612ec28888612598565b9250905081612ee257600080600080975097509750975050505050612ef8565b612eed8b8285610f5d565b955060019450505050505b95509550955095915050565b600080612f15888888888888613bff565b909250905080611ad357611ad36122f4565b600081831161286c5782610f90565b6000808213612f585760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fdb9084901c610f09565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361317757506000919050565b680755bf798b4a1bf1e582126131a0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061263f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f09565b60006133066001600160a01b03841683613ef4565b9050805160001415801561332b5750808060200190518101906133299190614910565b155b1561167e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b031684604051613376919061492d565b6000604051808303816000865af19150503d80600081146133b3576040519150601f19603f3d011682016040523d82523d6000602084013e6133b8565b606091505b50915091508180156133e25750805115806133e25750808060200190518101906133e29190614910565b801561008e5750505050506001600160a01b03163b151590565b60008060008460a0015112613419575050608082015160016108c6565b60008460a001516134299061489e565b9050600061346585876101000151886000015160e00151670de0b6b3a764000061345391906146b0565b89516060810151608090910151613cc2565b93509050821580613474575080155b15613487576000809350935050506108c6565b60006134938383612746565b9050670de0b6b3a764000081116134cf5780670de0b6b3a76400000394506134c88760c001518661149c90919063ffffffff16565b94506134de565b600080945094505050506108c6565b86608001518511156134fd5786608001516001945094505050506108c6565b506001925050509250929050565b6000806135418460c001518560e00151866101000151876000015160a0015161353388610f09565b61353c9061489e565b612dec565b87516040810192909252602082019290925291909152905080613568576000915050610f93565b60006135778560000151612098565b925090508161358b57600092505050610f93565b846020015181106135a157600092505050610f93565b6000856060015186604001516135b791906146c3565b90506135d282876020015183610f5d9092919063ffffffff16565b61263f90826146b0565b600080856060015186604001516135f391906146c3565b6020870151606088015191925060009161360d9184610f5d565b90508660a00151600003613624579150613aeb9050565b6000808089600488101561363757600497505b60005b888110156139935761364c868b612f27565b955060006136758360c001518460e00151856101000151866000015160a001516135338c610f09565b865160408101929092526020820192909252919091529050806136a357600098505050505050505050613aeb565b60006136b28e60000151612098565b92509050816136cd5760009950505050505050505050613aeb565b6136d884828b613f02565b156136ee57879950505050505050505050613aeb565b60008460a00151131561385757835180516020820151604083015160a084015160e0909401516000946137429493929161373090670de0b6b3a76400006146b0565b8a516060810151608090910151613af3565b935090508261375e5760009a5050505050505050505050613aeb565b808560a00151106138555761377285613f67565b90995092508261378f5760009a5050505050505050505050613aeb565b6137b48560c001518660e00151876101000151886000015160a001516135338e610f09565b885160408101929092526020820192909252919091529250826137e45760009a5050505050505050505050613aeb565b845180516020820151604083015160a084015160e090940151613814949061373090670de0b6b3a76400006146b0565b93509050826138305760009a5050505050505050505050613aeb565b8e60a00151811161384d57889a5050505050505050505050613aeb565b50505061363a565b505b6000613868858f8760a0015161403d565b935090508215806138815750670de0b6b3a76400008110155b156138995760009a5050505050505050505050613aeb565b80670de0b6b3a764000003905060006138c66128ca876040015188602001516122df90919063ffffffff16565b6138d36128ca858e61149c565b6138dd91906147db565b90508815806138fb57506138f089614398565b6138f982614398565b125b1561390a578098508997508296505b6000811315613932576139218b6107e38385610f7b565b61392b908b6146c3565b9950613984565b600081121561397b57600061394c8c6107e385818661489e565b90508a81101561396057808b039a50613975565b60009c50505050505050505050505050613aeb565b50613984565b50505050613993565b8460010194505050505061363a565b5060006139bb8260c001518360e00151846101000151856000015160a001516135338b610f09565b855160408101929092526020820192909252919091529050806139e8576000975050505050505050613aeb565b60006139f78360000151610ed2565b90506000613a196128ca856040015186602001516122df90919063ffffffff16565b613a266128ca848c61149c565b613a3091906147db565b9050613a3b87614398565b613a4482614398565b1215613a51578795508194505b613a78613a6c655af3107a4000670de0b6b3a76400006146b0565b6020860151908b6114e7565b6040850151613a88908790610f7b565b1080613ac85750613ab6613aaa655af3107a4000670de0b6b3a76400006146c3565b6020860151908b610f5d565b6040850151613ac6908790612746565b115b15613adf5760009950505050505050505050613aeb565b50939750505050505050505b949350505050565b6000806000881215613b1557613b088861489e565b613b1290876146c3565b95505b600080613b228b8b612598565b9150915080613b3957600080935093505050613bf3565b6000613b48838b8a8a8a6143b0565b90506000613b65613b5d8a6114e18a8e6122df565b8990896114e7565b905080821015613b7f576000809550955050505050613bf3565b808203670de0b6b3a76400008110613bb457613bad613ba6670de0b6b3a76400008c610f7b565b82906125d4565b9050613bcc565b613bc9613ba6670de0b6b3a76400008c612746565b90505b8b811015613be557600080965096505050505050613bf3565b8b9003955060019450505050505b97509795505050505050565b6000806000613c1189898888886143df565b9050613c21866114e1898b6146c3565b975087811015613c38576000809250925050613cb7565b878103613c468186886114e7565b9050670de0b6b3a76400008110613c7357613c6c613ba6670de0b6b3a764000089612746565b9050613c8b565b613c88613ba6670de0b6b3a764000089610f7b565b90505b613c958186612746565b9050808a1015613cad57600080935093505050613cb7565b8903925060019150505b965096945050505050565b6000806000613cd488888888886143df565b90506000613cff670de0b6b3a7640000613cee8888610f7b565b613cf891906146c3565b8390612746565b9050670de0b6b3a76400008110613d2c57613d25613ba6670de0b6b3a764000089612746565b9050613d44565b613d41613ba6670de0b6b3a764000089610f7b565b90505b80881015613d5a57600080935093505050613d64565b8703925060019150505b9550959350505050565b6000806000613d8089898888886143df565b905086881015613d97576000809250925050613cb7565b9686900396613da688876125d4565b975087811015613dbd576000809250925050613cb7565b878103613dcb8186886114e7565b9050670de0b6b3a76400008110613df857613df1613ba6670de0b6b3a764000089612746565b9050613e10565b613e0d613ba6670de0b6b3a764000089610f7b565b90505b613e1a8186612746565b905089811015613e3257600080935093505050613cb7565b9890980398600198509650505050505050565b6000806000613e5788888888886143b0565b90506000613e7b670de0b6b3a7640000613e718888612746565b61209191906146c3565b9050670de0b6b3a76400008110613ea857613ea1613ba6670de0b6b3a764000089610f7b565b9050613ec0565b613ebd613ba6670de0b6b3a764000089612746565b90505b613eca8186610f7b565b905088811015613ee257600080935093505050613d64565b97909703976001975095505050505050565b6060610f9083836000614404565b6020830151600090613f149084612746565b6040850151613f24908490610f7b565b10158015613aeb57506020840151613f4d908461032b633b9aca00670de0b6b3a76400006146c3565b6040850151613f5d908490612746565b1115949350505050565b60008060008360e0015113613f8157506000928392509050565b6000613f908460000151612d88565b90506000613fbc856040015186606001518760400151613fb091906146c3565b602088015191906114e7565b905060008212613fe35780821015613fd657819003613ff9565b5060009485945092505050565b613fec8261489e565b613ff690826146c3565b90505b60e085015160c086015161400e9183906114e7565b9050808560c001511015614029575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126140615785516040015161405a9085906146c3565b905061409c565b600061406c8561489e565b87516040015190915081101561408c57865160400151819003915061409a565b600080935093505050611641565b505b8551805160209091015160009182916140b59190612598565b91509150806140cd5760008094509450505050611641565b875160e0810151604090910151600091614102916140f6916140ef91906125d4565b8a9061149c565b6101008b015190612746565b895160e081015160809091015161412d91614121916114e1908861149c565b8b516060015190612746565b61413791906146c3565b9050600061416f61416361415c8c6000015160e00151886125d490919063ffffffff16565b8b906122df565b6101008c015190610f7b565b90508082101561418a57600080965096505050505050611641565b808203915060006141cc858c60000151604001518d6000015160e00151670de0b6b3a76400006141ba91906146b0565b8e5160608101516080909101516143df565b905060006141f68c6000015160e00151670de0b6b3a76400006141ef91906146b0565b88906125d4565b905080821015614213576000809850985050505050505050611641565b8b5160808101516060909101519183039161422f9183916114e7565b9050670de0b6b3a76400008110614273578b5160e0015161426c90613ba69061426090670de0b6b3a76400006146b0565b8e5160e0015190612746565b90506142a2565b8b5160e0015161429f90613ba69061429390670de0b6b3a76400006146b0565b8e5160e0015190610f7b565b90505b8b51606001516142b590859083906114e7565b935083670de0b6b3a764000011156142d95783670de0b6b3a76400000393506142ed565b600060019850985050505050505050611641565b60008c60e00151126143505760c08c015160e08d015161430c91612746565b9250670de0b6b3a7640000831115614331576000809850985050505050505050611641565b670de0b6b3a76400009290920391614349848461149c565b9350614385565b6143826143698d60c001518e60e001516107e39061489e565b61437b90670de0b6b3a76400006146c3565b859061149c565b93505b50919a60019a5098505050505050505050565b60008082126143a75781610f93565b610f938261489e565b60006143bc85856125d4565b6143d56143cd866114e1868b61149c565b859085610f5d565b61008b91906146c3565b60006143eb85856125d4565b6143d56143fc866114e1868b6122df565b8590856114e7565b6060814710156144295760405163cd78605960e01b8152306004820152602401613350565b600080856001600160a01b03168486604051614445919061492d565b60006040518083038185875af1925050503d8060008114614482576040519150601f19603f3d011682016040523d82523d6000602084013e614487565b606091505b509150915061263f8683836060826144a7576144a2826144ee565b610d91565b81511580156144be57506001600160a01b0384163b155b156144e757604051639996b31560e01b81526001600160a01b0385166004820152602401613350565b5080610d91565b8051156144fe5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061458c614517565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561286c57600080fd5b600080600080600060a086880312156145f457600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561462757600080fd5b614633888289016145ca565b9150509295509295909350565b6000806000806080858703121561465657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561468257600080fd5b61468e878288016145ca565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f9357610f9361469a565b80820180821115610f9357610f9361469a565b6000602082840312156146e857600080fd5b81356001600160a01b0381168114610d9157600080fd5b801515811461078557600080fd5b60006020828403121561471f57600080fd5b8135610d91816146ff565b6000808335601e1984360301811261474157600080fd5b83018035915067ffffffffffffffff82111561475c57600080fd5b6020019150368190038213156108c657600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261479657614796614771565b500690565b6001600160701b03818116838216019080821115610f0257610f0261469a565b6001600160801b03818116838216019080821115610f0257610f0261469a565b8181036000831280158383131683831282161715610f0257610f0261469a565b8082028115828204841417610f9357610f9361469a565b60006020828403121561482457600080fd5b5051919050565b6001600160801b03828116828216039080821115610f0257610f0261469a565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610f9357610f9361469a565b600081600f0b60016001607f1b031981036148955761489561469a565b60000392915050565b6000600160ff1b82016148b3576148b361469a565b5060000390565b80820182811260008312801582168215821617156148da576148da61469a565b505092915050565b6000826148f1576148f1614771565b600160ff1b82146000198414161561490b5761490b61469a565b500590565b60006020828403121561492257600080fd5b8151610d91816146ff565b6000825160005b8181101561494e5760208186018101518583015201614934565b50600092019182525091905056fea2646970667358221220c8f700dad24c49f578071883071ba08edb4fcec9b12a5860f5d6bf509059eeb864736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
