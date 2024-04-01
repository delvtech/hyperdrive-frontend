export const ERC4626Target3 = {
    "abi": [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "sweepCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "BelowMinimumContribution",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DistributeExcessIdleFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                    "name": "reason",
                    "type": "uint8"
                }
            ],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidPresentValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidTimestamp",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumSharePrice",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolAlreadyInitialized",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolIsPaused",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RestrictedZeroAddress",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TransferFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint112",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UpdateLiquidityFailed",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "basePayment",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_apr",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "initialize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "openLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6102406040523480156200001257600080fd5b5060405162004a5438038062004a548339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516146136200044160003960005050600050506000818161038b015261297c0152600081816101060152818161015d01528181610244015281816117350152818161179a01528181611efb01528181612586015281816125c20152818161282401526129560152600081816101b301528181610cae01528181610cf601528181610e1801526129300152600061135901526000818161147f0152611dc501526000818161099401528181610d690152611453015260008181610d480152611d810152600081816101f601528181610c8c01528181610d1701528181610e3901526129a20152600081816101d501528181610455015281816108d401526132960152600061082b0152600081816110ad01528181611127015281816111b9015261206a01526000818161108001526110e101526146136000f3fe6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c366004614249565b61007c565b6040519081526020015b60405180910390f35b610067610062366004614299565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105a1565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc86856105da565b909250905061012c7f00000000000000000000000000000000000000000000000000000000000000006002614309565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a826106b3565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006106dd565b6106b3565b600180546001600160801b03928316600160801b0292169190911790556102686000807f000000000000000000000000000000000000000000000000000000000000000061077c565b610280600061027a6020870187614320565b8561077c565b61029161028b610824565b8261085f565b50600061029f878387610c22565b90506102ae6020860186614320565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c01614357565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105a1565b60008061037688866105da565b909250905060006103878383610c51565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f5610824565b9050610401818461085f565b5060008061040f8686610c66565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b80600b600082825461044a9190614374565b9091555061047a90507f000000000000000000000000000000000000000000000000000000000000000084614374565b97506104888288878b610e77565b600061049560018a611013565b90506104ae816104a860208d018d614320565b8a61077c565b8c8989888d856104c16020830183614320565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610c22565b6105028a8888611048565b6105126040880160208901614357565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059f57604051631574f9f360e01b815260040160405180910390fd5b565b60006105b06020830183614320565b6001600160a01b0316036105d75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105ee6040850160208601614357565b1561061357610609856106046040870187614387565b611070565b909350905061062f565b503461062b856106266040870187614387565b6111ac565b8492505b6106376111e6565b915080156106aa57604051600090339083908381818185875af1925050503d8060008114610681576040519150601f19603f3d011682016040523d82523d6000602084013e610686565b606091505b50509050806106a8576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000600160801b82106106d957604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806106ee846301e133806111f9565b905060006106fc8683610c51565b61070e90670de0b6b3a7640000614374565b9050670de0b6b3a764000081106107425761073b610734670de0b6b3a7640000866111f9565b829061120e565b905061075a565b610757610734670de0b6b3a764000086611283565b90505b61076e81610768898b610c51565b90610c51565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906107ae908490614374565b90915550506000838152600e6020526040812080548392906107d1908490614374565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006108507f0000000000000000000000000000000000000000000000000000000000000000426143e4565b61085a90426143f8565b905090565b600082815260076020526040812080546001600160801b031615158061088457504284115b1561089a57546001600160801b03169050610c1c565b6108a3836106b3565b81546001600160801b0319166001600160801b03919091161781556108c783611298565b50600090506007816108f97f0000000000000000000000000000000000000000000000000000000000000000886143f8565b815260208101919091526040016000908120546001600160801b03169150610922600287611013565b6000818152600e60205260408120549192508115610a635750600160008061094c848a888461143c565b9150915080600b60008282546109629190614374565b9091555061097e9050846000846109788161150a565b8e611534565b6109888183614374565b91506109b88483888c8d7f00000000000000000000000000000000000000000000000000000000000000006116ae565b91506109cc6109c7838b610c51565b6116f8565b600580546002906109ed9084906201000090046001600160701b031661440b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a1a826106b3565b60058054601090610a3c908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a7060018a611013565b6000818152600e60205260409020549091508015610b805760019250600080610a9c838c8a600161143c565b9150915080600b6000828254610ab29190614374565b909155508c9050610acf84600085610ac98161150a565b8561171e565b610ad982846143f8565b9250610ae86109c7848e610c51565b60058054600290610b099084906201000090046001600160701b031661440b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b36836106b3565b60058054601090610b58908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610bb757610bac610b928561150a565b610b9b8361150a565b610ba5919061444b565b6000611913565b610bb5896119c1565b505b6000610bc28a611b30565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b6000610c346040830160208401614357565b15610c4057508261008c565b610c4a8484610c51565b905061008c565b600061008c8383670de0b6b3a7640000611c20565b6000806000610cd2610c76611c3e565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611c5f565b91506000610d3b610ce1611c3e565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c8b565b9050610d928684610d8d847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ca2565b611d0d565b15610da157610da16002611d4f565b600080610daf888489611d73565b9092509050610dbe82866143f8565b9450610dcb818489611c20565b9350610dd784896143f8565b9550670de0b6b3a7640000610e5d87610dee611c3e565b610df89190614374565b600154610e16908990600160801b90046001600160801b03166143f8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c8b565b1115610e6d57610e6d6002611d4f565b5050509250925092565b600254600160801b90046001600160801b0316610eb961021a82610ea3670de0b6b3a764000086614309565b6004546001600160801b03169190886001611df3565b600480546001600160801b0319166001600160801b0392909216919091179055610ee2856106b3565b60018054600090610efd9084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f2a846106b3565b60018054601090610f4c908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f79846106b3565b610f83908261442b565b600280546001600160801b03808416600160801b02911617905590506000610faa83611eb0565b9050610fc881610fb98761150a565b610fc3908461448b565b611913565b610fd184611ef4565b610fdf57610fdf6003611d4f565b6000610fea856119c1565b90508061100a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561103d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061105a6040830160208401614357565b1561106957610c4a84846111f9565b508261008c565b6000806110a86001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088611f54565b6111087f00000000000000000000000000000000000000000000000000000000000000006110d7876001614374565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611fc1565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119c91906144b3565b925060009150505b935093915050565b6111e16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611f54565b505050565b600061085a670de0b6b3a7640000612051565b600061008c83670de0b6b3a764000084611c20565b6000816000036112275750670de0b6b3a7640000610c1c565b8260000361123757506000610c1c565b60006112428361150a565b905060006112576112528661150a565b6120dd565b905081810261126e670de0b6b3a7640000826144cc565b905061127981612303565b9695505050505050565b600061008c83670de0b6b3a764000084612498565b60055460009081906112bb908490600160801b90046001600160801b0316610c51565b6005546201000090046001600160701b031692509050818111156114375760006112e583836143f8565b90506112f461021a8286611283565b60058054601090611316908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061134f85836111f990919063ffffffff16565b9050600061137d827f0000000000000000000000000000000000000000000000000000000000000000610c51565b905080600b60008282546113919190614374565b909155506113a1905081836143f8565b91506113ac826106b3565b600180546000906113c79084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113f4826124be565b60038054600090611409908490600f0b6144fa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061144986866111f9565b91506000611477837f0000000000000000000000000000000000000000000000000000000000000000610c51565b90506114a3817f0000000000000000000000000000000000000000000000000000000000000000610c51565b915083156114c6576114b582826143f8565b6114bf90846143f8565b92506114dd565b6114d082826143f8565b6114da9084614374565b92505b84861015611500576114f0838787611c20565b92506114fd828787611c20565b91505b5094509492505050565b60006001600160ff1b038211156106d95760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661157d61021a82611560670de0b6b3a764000086614309565b600454600160801b90046001600160801b031691908a6000611df3565b600480546001600160801b03928316600160801b0292169190911790556115a3866106b3565b6115ad908261446b565b600380546001600160801b03928316600160801b0292169190911790556115d3846106b3565b600180546000906115ee9084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061161b836124e8565b60038054600090611630908490600f0b6144fa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611660856106b3565b60018054601090611682908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806116c6846116c08a888a611c20565b906111f9565b90506116d3888486611c20565b6116dd9082614374565b9050868111156116ed5786810391505b509695505050505050565b6000600160701b82106106d95760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061176057507f000000000000000000000000000000000000000000000000000000000000000061175e85836143f8565b105b1561176f5761176f6003611d4f565b6003549084900390600f0b611784848261444b565b9050836117908661150a565b1380156117c557507f00000000000000000000000000000000000000000000000000000000000000006117c38383612526565b105b156117d4576117d46001611d4f565b600254600160801b90046001600160801b031661181661021a82611800670de0b6b3a764000088614309565b6004546001600160801b031691908c6000611df3565b600480546001600160801b0319166001600160801b039290921691909117905561184088826143f8565b905061184b816106b3565b600280546001600160801b03928316600160801b029216919091179055611871836106b3565b600180546001600160801b0319166001600160801b039290921691909117905561189a826124e8565b600380546001600160801b0319166001600160801b03929092169190911790556118c3876106b3565b600180546010906118e5908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061193c611922848361254e565b61192d84600061254e565b611937919061444b565b6124e8565b9050600081600f0b131561199157600280548291906000906119689084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156111e1576119a681614527565b600280546000906119689084906001600160801b031661446b565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611a0c916001600160801b0316906143f8565b905080600003611a1f5750600192915050565b6000611a2a84612564565b905080600003611a3e575060019392505050565b600080611a4c838588612609565b9150915080611a615750600095945050505050565b600080611a6d8461270f565b91509150611a7a826106b3565b60068054600090611a959084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ac2816106b3565b60068054601090611ae4908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b22611b148261150a565b611b1d9061454d565b6127f7565b506001979650505050505050565b600080600080611b47611b42866128e7565b612a21565b9150915080611b5d575060009485945092505050565b6000808611611b6d576000611b77565b611b778387610c51565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611be29190614374565b611bec91906143f8565b905080600003611c055750600096879650945050505050565b6000611c1183836111f9565b98600198509650505050505050565b6000826000190484118302158202611c3757600080fd5b5091020490565b60015460035460009161085a916001600160801b0390911690600f0b612526565b6000611c80878787611c7988670de0b6b3a76400006143f8565b8787612aae565b979650505050505050565b600061077382611c9c858888611c20565b9061120e565b6000610089611ce9611cbc84670de0b6b3a76400006143f8565b611ce3670de0b6b3a7640000611cd2818a611283565b611cdc91906143f8565b8790612b5f565b90612b5f565b611cfb90670de0b6b3a7640000614374565b6116c084670de0b6b3a76400006143f8565b600080611d4485611d1c611c3e565b611d269190614374565b600154610e16908790600160801b90046001600160801b03166143f8565b909210949350505050565b80604051633c06d78b60e11b8152600401611d6a9190614569565b60405180910390fd5b600080611dbd85611ce385817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611db3818c611283565b611ce391906143f8565b9150611de9827f0000000000000000000000000000000000000000000000000000000000000000610c51565b9050935093915050565b600082600003611e04575084610773565b8115611e7657611e35611e178487614374565b611e218587610c51565b611e2b888a610c51565b6116c09190614374565b90506000611e438588612b74565b90506000611e518689612b83565b905081831015611e6357819250611e6f565b80831115611e6f578092505b5050610773565b828503611e8557506000610773565b611279611e9284876143f8565b611e9c8587612b5f565b611ea6888a610c51565b6116c091906143f8565b6000611ed8600e6000611ec4600286611013565b81526020019081526020016000205461150a565b611eea600e6000611ec4600187611013565b610c1c919061444b565b6000611f207f000000000000000000000000000000000000000000000000000000000000000083612b5f565b600254611f3691906001600160801b0316614374565b600154611f4c906001600160801b031684610c51565b101592915050565b6040516001600160a01b038481166024830152838116604483015260648201839052611fbb9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612b92565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526120128482612bf5565b611fbb576040516001600160a01b0384811660248301526000604483015261204791869182169063095ea7b390606401611f89565b611fbb8482612b92565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156120b9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1c91906144b3565b60008082136120ff5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906121829084901c61150a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361231e57506000919050565b680755bf798b4a1bf1e58212612347576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061127974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61150a565b60008260001904841183021582026124af57600080fd5b50910281810615159190040190565b600060016001607f1b038211156106d95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590612509575060016001607f1b038213155b6106d95760405163a5353be560e01b815260040160405180910390fd5b6000806125338484612c98565b909250905080612547576125476001611d4f565b5092915050565b600081831361255d578161008c565b5090919050565b600254600090819061257f906001600160801b031684611283565b90506125ab7f000000000000000000000000000000000000000000000000000000000000000082614374565b6001546001600160801b03161115612603576001547f0000000000000000000000000000000000000000000000000000000000000000906125f69083906001600160801b03166143f8565b61260091906143f8565b91505b50919050565b612611614184565b60008061261d846128e7565b9050600061262a82612a21565b935090508261263f5750600091506111a49050565b6000612666612661846101600151856101400151610c5190919063ffffffff16565b61150a565b612686612661856101200151866101000151612b5f90919063ffffffff16565b612690919061444b565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806127278560c001518660e00151612c98565b915091508061273d575060009485945092505050565b60006127498684612cd4565b92509050811580612758575080155b1561276b57506000958695509350505050565b60006127778783612de3565b9050806000036127905750600096879650945050505050565b866060015181116127a657969095509350505050565b50606086015160006127b9888685612eb4565b9050806000036127d3575060009788975095505050505050565b8281106127ea575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806128498686867f00000000000000000000000000000000000000000000000000000000000000008b613204565b9250925092508583146128805761285f836106b3565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146128b157612890826124e8565b600380546001600160801b0319166001600160801b03929092169190911790555b83811461100a576128c1816106b3565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6128ef6141d6565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916129e7911661324b565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612a199290041661324b565b905292915050565b6000806000806000612a32866132c1565b9150915080612a4957506000958695509350505050565b612a568660a0015161150a565b612a5f876135e1565b83612a6d896000015161150a565b612a77919061448b565b612a81919061448b565b612a8b919061444b565b925050506000811215612aa45750600093849350915050565b9360019350915050565b600080612abe8888878787613645565b9050612ad885611c9c612ad1898c614374565b8690610c51565b9750612ae5848985611c20565b975087811015612af957612af96000611d4f565b878103670de0b6b3a76400008110612b2757612b20610734670de0b6b3a764000088611283565b9050612b3f565b612b3c610734670de0b6b3a7640000886111f9565b90505b80881015612b5157612b516000611d4f565b909603979650505050505050565b600061008c8383670de0b6b3a7640000612498565b6000818311612603578261008c565b600081831161255d578161008c565b6000612ba76001600160a01b03841683613674565b90508051600014158015612bcc575080806020019051810190612bca9190614591565b155b156111e157604051635274afe760e01b81526001600160a01b0384166004820152602401611d6a565b6000806000846001600160a01b031684604051612c1291906145ae565b6000604051808303816000865af19150503d8060008114612c4f576040519150601f19603f3d011682016040523d82523d6000602084013e612c54565b606091505b5091509150818015612c7e575080511580612c7e575080806020019051810190612c7e9190614591565b80156107735750505050506001600160a01b03163b151590565b600080600083612ca78661150a565b612cb1919061444b565b90506000811215612cc95760008092509250506106ac565b946001945092505050565b60008060008460a0015112612cf1575050608082015160016106ac565b60008460a00151612d019061454d565b90506000612d3d85876101000151886000015160e00151670de0b6b3a7640000612d2b91906143f8565b89516060810151608090910151613682565b93509050821580612d4c575080155b15612d5f576000809350935050506106ac565b6000612d6b8383611283565b9050670de0b6b3a76400008111612da75780670de0b6b3a7640000039450612da08760c0015186610c5190919063ffffffff16565b9450612db6565b600080945094505050506106ac565b8660800151851115612dd55786608001516001945094505050506106ac565b506001925050509250929050565b600080612e198460c001518560e00151866101000151876000015160a00151612e0b8861150a565b612e149061454d565b61372e565b87516040810192909252602082019290925291909152905080612e40576000915050610c1c565b6000612e4f8560000151612a21565b9250905081612e6357600092505050610c1c565b84602001518110612e7957600092505050610c1c565b600085606001518660400151612e8f9190614374565b9050612eaa82876020015183611c209092919063ffffffff16565b61127990826143f8565b60008084606001518560400151612ecb9190614374565b60208601516060870151919250600091612ee59184611c20565b90508560a00151600003612efc57915061008c9050565b60005b60048110156131fa57612f128286612b74565b91506000612f3b8860c001518960e001518a61010001518b6000015160a00151612e0b8861150a565b8b516040810192909252602082019290925291909152905080612f6557600094505050505061008c565b6000612f748960000151613846565b9050612f81898287613876565b15612f8d5750506131fa565b60008960a0015113156130f157885180516020820151604083015160a084015160e0909401518d94600094612fe79490939092909190612fd590670de0b6b3a76400006143f8565b875160608101516080909101516138e2565b945090508361300057600097505050505050505061008c565b808260a00151106130ee57613014826139ce565b90965093508361302e57600097505050505050505061008c565b6130538260c001518360e00151846101000151856000015160a00151612e0b8b61150a565b8551604081019290925260208201929092529190915293508361308057600097505050505050505061008c565b815180516020820151604083015160a0909301518e5160e001516130b2949190612fd590670de0b6b3a76400006143f8565b94509050836130cb57600097505050505050505061008c565b8a60a0015181116130e5578597505050505050505061008c565b50505050612eff565b50505b60006131028a8a8c60a00151613aa4565b9350905082158061311b5750670de0b6b3a76400008110155b1561312f576000965050505050505061008c565b80670de0b6b3a7640000039050600061315c6126618c604001518d60200151612b5f90919063ffffffff16565b613169612661858a610c51565b613173919061444b565b9050600081131561319d5761318c876116c083856111f9565b6131969087614374565b95506131eb565b60008112156131e25760006131b7886116c085818661454d565b9050868110156131cb5780870396506131dc565b60009850505050505050505061008c565b506131eb565b505050506131fa565b84600101945050505050612eff565b5095945050505050565b600080600080613217898989898961372e565b929650909450925090508061323f57604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a764000061325f610824565b6132699190614309565b9050808311613279576000613283565b61328381846143f8565b91506126006132ba670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614309565b83906111f9565b60008060006132e6612661856101600151866101400151610c5190919063ffffffff16565b613306612661866101200151876101000151612b5f90919063ffffffff16565b613310919061444b565b905060008061332786600001518760200151612c98565b915091508061333e57506000958695509350505050565b600083131561347f576000839050600061338c886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061337d91906143f8565b8d606001518e608001516138e2565b93509050826133a5575060009788975095505050505050565b8181106134435760006133df858a60400151858c60e00151670de0b6b3a76400006133d091906143f8565b8d606001518e60800151613dfe565b94509050831580156133f457508860c0015183105b1561340b5750600098600198509650505050505050565b8361342157506000988998509650505050505050565b61342a8161150a565b6134339061454d565b9960019950975050505050505050565b600088602001511261346b576134628860a001518561266191906143f8565b611c119061454d565b60a0880151885161346291612661916143f8565b60008312156135d25760006134938461454d565b905060006134c78489604001518a60e00151670de0b6b3a76400006134b891906143f8565b8b606001518c60800151613682565b93509050826134e0575060009788975095505050505050565b81811061356557600061351a858a60400151858c60e00151670de0b6b3a764000061350b91906143f8565b8d606001518e60800151613ec1565b945090508315801561352f57508860c0015183105b156135465750600098600198509650505050505050565b8361355c57506000988998509650505050505050565b6134338161150a565b6000613597858a604001518b60e00151670de0b6b3a764000061358891906143f8565b8c606001518d60800151613f98565b94509050836135b157506000988998509650505050505050565b6134336135c88a6060015184866116c091906143f8565b6126619083614374565b50600095600195509350505050565b6000613614612661836101200151670de0b6b3a764000061360291906143f8565b60608501516101008601519190612498565b611eea612661846101600151670de0b6b3a764000061363391906143f8565b60608601516101408701519190611c20565b6000613651858561120e565b61366a61366286611c9c868b612b5f565b859085612498565b6112799190614374565b606061008c83836000614047565b60008060006136948888888888613645565b905060006136bf670de0b6b3a76400006136ae88886111f9565b6136b89190614374565b8390611283565b9050670de0b6b3a764000081106136ec576136e5610734670de0b6b3a764000089611283565b9050613704565b613701610734670de0b6b3a7640000896111f9565b90505b8088101561371a57600080935093505050613724565b8703925060019150505b9550959350505050565b6000806000808460000361374d5750879250869150859050600161383a565b6000856137598b61150a565b613763919061448b565b905061376e8761150a565b8112156137895760008060008094509450945094505061383a565b809450600089126137a9576137a2612661868b8d611c20565b93506137cc565b6137c06126616137b88b61454d565b87908d612498565b6137c99061454d565b93505b6000806137d98c8c612c98565b91509150806137f857600080600080965096509650965050505061383a565b60006138048888612c98565b92509050816138245760008060008097509750975097505050505061383a565b61382f8b8285611c20565b955060019450505050505b95509550955095915050565b600080600061385484612a21565b915091508061254757604051635516328b60e11b815260040160405180910390fd5b60208301516000906138889084611283565b60408501516138989084906111f9565b10158015610089575060208401516138c890846138c1633b9aca00670de0b6b3a7640000614374565b9190611c20565b60408501516138d8908490611283565b1115949350505050565b6000806000881215613904576138f78861454d565b6139019087614374565b95505b60006139108a8a612526565b90506000613921828a8989896140da565b9050600061393e61393689611c9c898d612b5f565b889088612498565b90508082101561395757600080945094505050506139c2565b808203670de0b6b3a764000081106139855761397e610734670de0b6b3a76400008b6111f9565b905061399d565b61399a610734670de0b6b3a76400008b611283565b90505b8a8110156139b55760008095509550505050506139c2565b8a90039450600193505050505b97509795505050505050565b60008060008360e00151136139e857506000928392509050565b60006139f784600001516135e1565b90506000613a23856040015186606001518760400151613a179190614374565b60208801519190612498565b905060008212613a4a5780821015613a3d57819003613a60565b5060009485945092505050565b613a538261454d565b613a5d9082614374565b90505b60e085015160c0860151613a75918390612498565b9050808560c001511015613a90575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613ac857855160400151613ac1908590614374565b9050613b03565b6000613ad38561454d565b875160400151909150811015613af3578651604001518190039150613b01565b6000809350935050506111a4565b505b855180516020909101516000918291613b1c9190612c98565b9150915080613b3457600080945094505050506111a4565b875160e0810151604090910151600091613b6991613b5d91613b56919061120e565b8a90610c51565b6101008b015190611283565b895160e0810151608090910151613b9491613b8891611c9c9088610c51565b8b516060015190611283565b613b9e9190614374565b90506000613bd6613bca613bc38c6000015160e001518861120e90919063ffffffff16565b8b90612b5f565b6101008c0151906111f9565b905080821015613bf1576000809650965050505050506111a4565b80820391506000613c33858c60000151604001518d6000015160e00151670de0b6b3a7640000613c2191906143f8565b8e516060810151608090910151613645565b90506000613c5d8c6000015160e00151670de0b6b3a7640000613c5691906143f8565b889061120e565b905080821015613c7a5760008098509850505050505050506111a4565b8b51608081015160609091015191830391613c96918391612498565b9050670de0b6b3a76400008110613cda578b5160e00151613cd39061073490613cc790670de0b6b3a76400006143f8565b8e5160e0015190611283565b9050613d09565b8b5160e00151613d069061073490613cfa90670de0b6b3a76400006143f8565b8e5160e00151906111f9565b90505b8b5160600151613d1c9085908390612498565b935083670de0b6b3a76400001115613d405783670de0b6b3a7640000039350613d54565b6000600198509850505050505050506111a4565b60008c60e0015112613db65760c08c015160e08d0151613d7391611283565b9250670de0b6b3a76400008310613d975760008098509850505050505050506111a4565b670de0b6b3a76400009290920391613daf8484610c51565b9350613deb565b613de8613dcf8d60c001518e60e001516116c09061454d565b613de190670de0b6b3a7640000614374565b8590610c51565b93505b50919a60019a5098505050505050505050565b6000806000613e108989888888613645565b9050613e2086611c9c898b614374565b975087811015613e37576000809250925050613eb6565b878103613e45818688612498565b9050670de0b6b3a76400008110613e7257613e6b610734670de0b6b3a764000089611283565b9050613e8a565b613e87610734670de0b6b3a7640000896111f9565b90505b613e948186611283565b9050808a1015613eac57600080935093505050613eb6565b8903925060019150505b965096945050505050565b6000806000613ed38989888888613645565b905086881015613eea576000809250925050613eb6565b9686900396613ef9888761120e565b975087811015613f10576000809250925050613eb6565b878103613f1e818688612498565b9050670de0b6b3a76400008110613f4b57613f44610734670de0b6b3a764000089611283565b9050613f63565b613f60610734670de0b6b3a7640000896111f9565b90505b613f6d8186611283565b905089811015613f8557600080935093505050613eb6565b9890980398600198509650505050505050565b6000806000613faa88888888886140da565b90506000613fce670de0b6b3a7640000613fc48888611283565b6132ba9190614374565b9050670de0b6b3a76400008110613ffb57613ff4610734670de0b6b3a7640000896111f9565b9050614013565b614010610734670de0b6b3a764000089611283565b90505b61401d81866111f9565b90508881101561403557600080935093505050613724565b97909703976001975095505050505050565b60608147101561406c5760405163cd78605960e01b8152306004820152602401611d6a565b600080856001600160a01b0316848660405161408891906145ae565b60006040518083038185875af1925050503d80600081146140c5576040519150601f19603f3d011682016040523d82523d6000602084013e6140ca565b606091505b50915091506112798683836140ff565b60006140e6858561120e565b61366a6140f786611c9c868b610c51565b859085611c20565b6060826141145761410f8261415b565b61008c565b815115801561412b57506001600160a01b0384163b155b1561415457604051639996b31560e01b81526001600160a01b0385166004820152602401611d6a565b508061008c565b80511561416b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806141986141d6565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561260357600080fd5b60008060006060848603121561425e57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561428357600080fd5b61428f86828701614237565b9150509250925092565b600080600080608085870312156142af57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156142db57600080fd5b6142e787828801614237565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610c1c57610c1c6142f3565b60006020828403121561433257600080fd5b81356001600160a01b038116811461008c57600080fd5b80151581146105d757600080fd5b60006020828403121561436957600080fd5b813561008c81614349565b80820180821115610c1c57610c1c6142f3565b6000808335601e1984360301811261439e57600080fd5b83018035915067ffffffffffffffff8211156143b957600080fd5b6020019150368190038213156106ac57600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826143f3576143f36143ce565b500690565b81810381811115610c1c57610c1c6142f3565b6001600160701b03818116838216019080821115612547576125476142f3565b6001600160801b03818116838216019080821115612547576125476142f3565b8181036000831280158383131683831282161715612547576125476142f3565b6001600160801b03828116828216039080821115612547576125476142f3565b80820182811260008312801582168215821617156144ab576144ab6142f3565b505092915050565b6000602082840312156144c557600080fd5b5051919050565b6000826144db576144db6143ce565b600160ff1b8214600019841416156144f5576144f56142f3565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610c1c57610c1c6142f3565b600081600f0b60016001607f1b03198103614544576145446142f3565b60000392915050565b6000600160ff1b8201614562576145626142f3565b5060000390565b602081016004831061458b57634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156145a357600080fd5b815161008c81614349565b6000825160005b818110156145cf57602081860181015185830152016145b5565b50600092019182525091905056fea2646970667358221220d3831de14e1f902f71c93f8e10c51cc25a51816cd474b9246df0e142de06de4a64736f6c63430008140033",
        "sourceMap": "697:275:49:-:0;;;876:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;;;5345:24;;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;;6632:12;;;;;:18;6620:30;;;6671:12;;:17;;6660:28;;;;6717:12;;-1:-1:-1;6717:25:118;;;;6698:44;;;;6775:12;;-1:-1:-1;6775:29:118;;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;-1:-1:-1;;;;;;7041:32:118;;;;;;;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;7147:22;;;;7129:15;:40;;;;;;;;;;697:275:49;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;697:275:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c366004614249565b61007c565b6040519081526020015b60405180910390f35b610067610062366004614299565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105a1565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc86856105da565b909250905061012c7f00000000000000000000000000000000000000000000000000000000000000006002614309565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a826106b3565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006106dd565b6106b3565b600180546001600160801b03928316600160801b0292169190911790556102686000807f000000000000000000000000000000000000000000000000000000000000000061077c565b610280600061027a6020870187614320565b8561077c565b61029161028b610824565b8261085f565b50600061029f878387610c22565b90506102ae6020860186614320565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c01614357565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105a1565b60008061037688866105da565b909250905060006103878383610c51565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f5610824565b9050610401818461085f565b5060008061040f8686610c66565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b80600b600082825461044a9190614374565b9091555061047a90507f000000000000000000000000000000000000000000000000000000000000000084614374565b97506104888288878b610e77565b600061049560018a611013565b90506104ae816104a860208d018d614320565b8a61077c565b8c8989888d856104c16020830183614320565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610c22565b6105028a8888611048565b6105126040880160208901614357565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059f57604051631574f9f360e01b815260040160405180910390fd5b565b60006105b06020830183614320565b6001600160a01b0316036105d75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105ee6040850160208601614357565b1561061357610609856106046040870187614387565b611070565b909350905061062f565b503461062b856106266040870187614387565b6111ac565b8492505b6106376111e6565b915080156106aa57604051600090339083908381818185875af1925050503d8060008114610681576040519150601f19603f3d011682016040523d82523d6000602084013e610686565b606091505b50509050806106a8576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000600160801b82106106d957604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806106ee846301e133806111f9565b905060006106fc8683610c51565b61070e90670de0b6b3a7640000614374565b9050670de0b6b3a764000081106107425761073b610734670de0b6b3a7640000866111f9565b829061120e565b905061075a565b610757610734670de0b6b3a764000086611283565b90505b61076e81610768898b610c51565b90610c51565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906107ae908490614374565b90915550506000838152600e6020526040812080548392906107d1908490614374565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006108507f0000000000000000000000000000000000000000000000000000000000000000426143e4565b61085a90426143f8565b905090565b600082815260076020526040812080546001600160801b031615158061088457504284115b1561089a57546001600160801b03169050610c1c565b6108a3836106b3565b81546001600160801b0319166001600160801b03919091161781556108c783611298565b50600090506007816108f97f0000000000000000000000000000000000000000000000000000000000000000886143f8565b815260208101919091526040016000908120546001600160801b03169150610922600287611013565b6000818152600e60205260408120549192508115610a635750600160008061094c848a888461143c565b9150915080600b60008282546109629190614374565b9091555061097e9050846000846109788161150a565b8e611534565b6109888183614374565b91506109b88483888c8d7f00000000000000000000000000000000000000000000000000000000000000006116ae565b91506109cc6109c7838b610c51565b6116f8565b600580546002906109ed9084906201000090046001600160701b031661440b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a1a826106b3565b60058054601090610a3c908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a7060018a611013565b6000818152600e60205260409020549091508015610b805760019250600080610a9c838c8a600161143c565b9150915080600b6000828254610ab29190614374565b909155508c9050610acf84600085610ac98161150a565b8561171e565b610ad982846143f8565b9250610ae86109c7848e610c51565b60058054600290610b099084906201000090046001600160701b031661440b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b36836106b3565b60058054601090610b58908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610bb757610bac610b928561150a565b610b9b8361150a565b610ba5919061444b565b6000611913565b610bb5896119c1565b505b6000610bc28a611b30565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b6000610c346040830160208401614357565b15610c4057508261008c565b610c4a8484610c51565b905061008c565b600061008c8383670de0b6b3a7640000611c20565b6000806000610cd2610c76611c3e565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611c5f565b91506000610d3b610ce1611c3e565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c8b565b9050610d928684610d8d847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ca2565b611d0d565b15610da157610da16002611d4f565b600080610daf888489611d73565b9092509050610dbe82866143f8565b9450610dcb818489611c20565b9350610dd784896143f8565b9550670de0b6b3a7640000610e5d87610dee611c3e565b610df89190614374565b600154610e16908990600160801b90046001600160801b03166143f8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c8b565b1115610e6d57610e6d6002611d4f565b5050509250925092565b600254600160801b90046001600160801b0316610eb961021a82610ea3670de0b6b3a764000086614309565b6004546001600160801b03169190886001611df3565b600480546001600160801b0319166001600160801b0392909216919091179055610ee2856106b3565b60018054600090610efd9084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f2a846106b3565b60018054601090610f4c908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f79846106b3565b610f83908261442b565b600280546001600160801b03808416600160801b02911617905590506000610faa83611eb0565b9050610fc881610fb98761150a565b610fc3908461448b565b611913565b610fd184611ef4565b610fdf57610fdf6003611d4f565b6000610fea856119c1565b90508061100a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561103d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061105a6040830160208401614357565b1561106957610c4a84846111f9565b508261008c565b6000806110a86001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088611f54565b6111087f00000000000000000000000000000000000000000000000000000000000000006110d7876001614374565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611fc1565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119c91906144b3565b925060009150505b935093915050565b6111e16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611f54565b505050565b600061085a670de0b6b3a7640000612051565b600061008c83670de0b6b3a764000084611c20565b6000816000036112275750670de0b6b3a7640000610c1c565b8260000361123757506000610c1c565b60006112428361150a565b905060006112576112528661150a565b6120dd565b905081810261126e670de0b6b3a7640000826144cc565b905061127981612303565b9695505050505050565b600061008c83670de0b6b3a764000084612498565b60055460009081906112bb908490600160801b90046001600160801b0316610c51565b6005546201000090046001600160701b031692509050818111156114375760006112e583836143f8565b90506112f461021a8286611283565b60058054601090611316908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061134f85836111f990919063ffffffff16565b9050600061137d827f0000000000000000000000000000000000000000000000000000000000000000610c51565b905080600b60008282546113919190614374565b909155506113a1905081836143f8565b91506113ac826106b3565b600180546000906113c79084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113f4826124be565b60038054600090611409908490600f0b6144fa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061144986866111f9565b91506000611477837f0000000000000000000000000000000000000000000000000000000000000000610c51565b90506114a3817f0000000000000000000000000000000000000000000000000000000000000000610c51565b915083156114c6576114b582826143f8565b6114bf90846143f8565b92506114dd565b6114d082826143f8565b6114da9084614374565b92505b84861015611500576114f0838787611c20565b92506114fd828787611c20565b91505b5094509492505050565b60006001600160ff1b038211156106d95760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661157d61021a82611560670de0b6b3a764000086614309565b600454600160801b90046001600160801b031691908a6000611df3565b600480546001600160801b03928316600160801b0292169190911790556115a3866106b3565b6115ad908261446b565b600380546001600160801b03928316600160801b0292169190911790556115d3846106b3565b600180546000906115ee9084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061161b836124e8565b60038054600090611630908490600f0b6144fa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611660856106b3565b60018054601090611682908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806116c6846116c08a888a611c20565b906111f9565b90506116d3888486611c20565b6116dd9082614374565b9050868111156116ed5786810391505b509695505050505050565b6000600160701b82106106d95760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061176057507f000000000000000000000000000000000000000000000000000000000000000061175e85836143f8565b105b1561176f5761176f6003611d4f565b6003549084900390600f0b611784848261444b565b9050836117908661150a565b1380156117c557507f00000000000000000000000000000000000000000000000000000000000000006117c38383612526565b105b156117d4576117d46001611d4f565b600254600160801b90046001600160801b031661181661021a82611800670de0b6b3a764000088614309565b6004546001600160801b031691908c6000611df3565b600480546001600160801b0319166001600160801b039290921691909117905561184088826143f8565b905061184b816106b3565b600280546001600160801b03928316600160801b029216919091179055611871836106b3565b600180546001600160801b0319166001600160801b039290921691909117905561189a826124e8565b600380546001600160801b0319166001600160801b03929092169190911790556118c3876106b3565b600180546010906118e5908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061193c611922848361254e565b61192d84600061254e565b611937919061444b565b6124e8565b9050600081600f0b131561199157600280548291906000906119689084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156111e1576119a681614527565b600280546000906119689084906001600160801b031661446b565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611a0c916001600160801b0316906143f8565b905080600003611a1f5750600192915050565b6000611a2a84612564565b905080600003611a3e575060019392505050565b600080611a4c838588612609565b9150915080611a615750600095945050505050565b600080611a6d8461270f565b91509150611a7a826106b3565b60068054600090611a959084906001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ac2816106b3565b60068054601090611ae4908490600160801b90046001600160801b031661442b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b22611b148261150a565b611b1d9061454d565b6127f7565b506001979650505050505050565b600080600080611b47611b42866128e7565b612a21565b9150915080611b5d575060009485945092505050565b6000808611611b6d576000611b77565b611b778387610c51565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611be29190614374565b611bec91906143f8565b905080600003611c055750600096879650945050505050565b6000611c1183836111f9565b98600198509650505050505050565b6000826000190484118302158202611c3757600080fd5b5091020490565b60015460035460009161085a916001600160801b0390911690600f0b612526565b6000611c80878787611c7988670de0b6b3a76400006143f8565b8787612aae565b979650505050505050565b600061077382611c9c858888611c20565b9061120e565b6000610089611ce9611cbc84670de0b6b3a76400006143f8565b611ce3670de0b6b3a7640000611cd2818a611283565b611cdc91906143f8565b8790612b5f565b90612b5f565b611cfb90670de0b6b3a7640000614374565b6116c084670de0b6b3a76400006143f8565b600080611d4485611d1c611c3e565b611d269190614374565b600154610e16908790600160801b90046001600160801b03166143f8565b909210949350505050565b80604051633c06d78b60e11b8152600401611d6a9190614569565b60405180910390fd5b600080611dbd85611ce385817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611db3818c611283565b611ce391906143f8565b9150611de9827f0000000000000000000000000000000000000000000000000000000000000000610c51565b9050935093915050565b600082600003611e04575084610773565b8115611e7657611e35611e178487614374565b611e218587610c51565b611e2b888a610c51565b6116c09190614374565b90506000611e438588612b74565b90506000611e518689612b83565b905081831015611e6357819250611e6f565b80831115611e6f578092505b5050610773565b828503611e8557506000610773565b611279611e9284876143f8565b611e9c8587612b5f565b611ea6888a610c51565b6116c091906143f8565b6000611ed8600e6000611ec4600286611013565b81526020019081526020016000205461150a565b611eea600e6000611ec4600187611013565b610c1c919061444b565b6000611f207f000000000000000000000000000000000000000000000000000000000000000083612b5f565b600254611f3691906001600160801b0316614374565b600154611f4c906001600160801b031684610c51565b101592915050565b6040516001600160a01b038481166024830152838116604483015260648201839052611fbb9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612b92565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526120128482612bf5565b611fbb576040516001600160a01b0384811660248301526000604483015261204791869182169063095ea7b390606401611f89565b611fbb8482612b92565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156120b9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1c91906144b3565b60008082136120ff5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906121829084901c61150a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361231e57506000919050565b680755bf798b4a1bf1e58212612347576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061127974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61150a565b60008260001904841183021582026124af57600080fd5b50910281810615159190040190565b600060016001607f1b038211156106d95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590612509575060016001607f1b038213155b6106d95760405163a5353be560e01b815260040160405180910390fd5b6000806125338484612c98565b909250905080612547576125476001611d4f565b5092915050565b600081831361255d578161008c565b5090919050565b600254600090819061257f906001600160801b031684611283565b90506125ab7f000000000000000000000000000000000000000000000000000000000000000082614374565b6001546001600160801b03161115612603576001547f0000000000000000000000000000000000000000000000000000000000000000906125f69083906001600160801b03166143f8565b61260091906143f8565b91505b50919050565b612611614184565b60008061261d846128e7565b9050600061262a82612a21565b935090508261263f5750600091506111a49050565b6000612666612661846101600151856101400151610c5190919063ffffffff16565b61150a565b612686612661856101200151866101000151612b5f90919063ffffffff16565b612690919061444b565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806127278560c001518660e00151612c98565b915091508061273d575060009485945092505050565b60006127498684612cd4565b92509050811580612758575080155b1561276b57506000958695509350505050565b60006127778783612de3565b9050806000036127905750600096879650945050505050565b866060015181116127a657969095509350505050565b50606086015160006127b9888685612eb4565b9050806000036127d3575060009788975095505050505050565b8281106127ea575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806128498686867f00000000000000000000000000000000000000000000000000000000000000008b613204565b9250925092508583146128805761285f836106b3565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146128b157612890826124e8565b600380546001600160801b0319166001600160801b03929092169190911790555b83811461100a576128c1816106b3565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6128ef6141d6565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916129e7911661324b565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612a199290041661324b565b905292915050565b6000806000806000612a32866132c1565b9150915080612a4957506000958695509350505050565b612a568660a0015161150a565b612a5f876135e1565b83612a6d896000015161150a565b612a77919061448b565b612a81919061448b565b612a8b919061444b565b925050506000811215612aa45750600093849350915050565b9360019350915050565b600080612abe8888878787613645565b9050612ad885611c9c612ad1898c614374565b8690610c51565b9750612ae5848985611c20565b975087811015612af957612af96000611d4f565b878103670de0b6b3a76400008110612b2757612b20610734670de0b6b3a764000088611283565b9050612b3f565b612b3c610734670de0b6b3a7640000886111f9565b90505b80881015612b5157612b516000611d4f565b909603979650505050505050565b600061008c8383670de0b6b3a7640000612498565b6000818311612603578261008c565b600081831161255d578161008c565b6000612ba76001600160a01b03841683613674565b90508051600014158015612bcc575080806020019051810190612bca9190614591565b155b156111e157604051635274afe760e01b81526001600160a01b0384166004820152602401611d6a565b6000806000846001600160a01b031684604051612c1291906145ae565b6000604051808303816000865af19150503d8060008114612c4f576040519150601f19603f3d011682016040523d82523d6000602084013e612c54565b606091505b5091509150818015612c7e575080511580612c7e575080806020019051810190612c7e9190614591565b80156107735750505050506001600160a01b03163b151590565b600080600083612ca78661150a565b612cb1919061444b565b90506000811215612cc95760008092509250506106ac565b946001945092505050565b60008060008460a0015112612cf1575050608082015160016106ac565b60008460a00151612d019061454d565b90506000612d3d85876101000151886000015160e00151670de0b6b3a7640000612d2b91906143f8565b89516060810151608090910151613682565b93509050821580612d4c575080155b15612d5f576000809350935050506106ac565b6000612d6b8383611283565b9050670de0b6b3a76400008111612da75780670de0b6b3a7640000039450612da08760c0015186610c5190919063ffffffff16565b9450612db6565b600080945094505050506106ac565b8660800151851115612dd55786608001516001945094505050506106ac565b506001925050509250929050565b600080612e198460c001518560e00151866101000151876000015160a00151612e0b8861150a565b612e149061454d565b61372e565b87516040810192909252602082019290925291909152905080612e40576000915050610c1c565b6000612e4f8560000151612a21565b9250905081612e6357600092505050610c1c565b84602001518110612e7957600092505050610c1c565b600085606001518660400151612e8f9190614374565b9050612eaa82876020015183611c209092919063ffffffff16565b61127990826143f8565b60008084606001518560400151612ecb9190614374565b60208601516060870151919250600091612ee59184611c20565b90508560a00151600003612efc57915061008c9050565b60005b60048110156131fa57612f128286612b74565b91506000612f3b8860c001518960e001518a61010001518b6000015160a00151612e0b8861150a565b8b516040810192909252602082019290925291909152905080612f6557600094505050505061008c565b6000612f748960000151613846565b9050612f81898287613876565b15612f8d5750506131fa565b60008960a0015113156130f157885180516020820151604083015160a084015160e0909401518d94600094612fe79490939092909190612fd590670de0b6b3a76400006143f8565b875160608101516080909101516138e2565b945090508361300057600097505050505050505061008c565b808260a00151106130ee57613014826139ce565b90965093508361302e57600097505050505050505061008c565b6130538260c001518360e00151846101000151856000015160a00151612e0b8b61150a565b8551604081019290925260208201929092529190915293508361308057600097505050505050505061008c565b815180516020820151604083015160a0909301518e5160e001516130b2949190612fd590670de0b6b3a76400006143f8565b94509050836130cb57600097505050505050505061008c565b8a60a0015181116130e5578597505050505050505061008c565b50505050612eff565b50505b60006131028a8a8c60a00151613aa4565b9350905082158061311b5750670de0b6b3a76400008110155b1561312f576000965050505050505061008c565b80670de0b6b3a7640000039050600061315c6126618c604001518d60200151612b5f90919063ffffffff16565b613169612661858a610c51565b613173919061444b565b9050600081131561319d5761318c876116c083856111f9565b6131969087614374565b95506131eb565b60008112156131e25760006131b7886116c085818661454d565b9050868110156131cb5780870396506131dc565b60009850505050505050505061008c565b506131eb565b505050506131fa565b84600101945050505050612eff565b5095945050505050565b600080600080613217898989898961372e565b929650909450925090508061323f57604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a764000061325f610824565b6132699190614309565b9050808311613279576000613283565b61328381846143f8565b91506126006132ba670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614309565b83906111f9565b60008060006132e6612661856101600151866101400151610c5190919063ffffffff16565b613306612661866101200151876101000151612b5f90919063ffffffff16565b613310919061444b565b905060008061332786600001518760200151612c98565b915091508061333e57506000958695509350505050565b600083131561347f576000839050600061338c886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061337d91906143f8565b8d606001518e608001516138e2565b93509050826133a5575060009788975095505050505050565b8181106134435760006133df858a60400151858c60e00151670de0b6b3a76400006133d091906143f8565b8d606001518e60800151613dfe565b94509050831580156133f457508860c0015183105b1561340b5750600098600198509650505050505050565b8361342157506000988998509650505050505050565b61342a8161150a565b6134339061454d565b9960019950975050505050505050565b600088602001511261346b576134628860a001518561266191906143f8565b611c119061454d565b60a0880151885161346291612661916143f8565b60008312156135d25760006134938461454d565b905060006134c78489604001518a60e00151670de0b6b3a76400006134b891906143f8565b8b606001518c60800151613682565b93509050826134e0575060009788975095505050505050565b81811061356557600061351a858a60400151858c60e00151670de0b6b3a764000061350b91906143f8565b8d606001518e60800151613ec1565b945090508315801561352f57508860c0015183105b156135465750600098600198509650505050505050565b8361355c57506000988998509650505050505050565b6134338161150a565b6000613597858a604001518b60e00151670de0b6b3a764000061358891906143f8565b8c606001518d60800151613f98565b94509050836135b157506000988998509650505050505050565b6134336135c88a6060015184866116c091906143f8565b6126619083614374565b50600095600195509350505050565b6000613614612661836101200151670de0b6b3a764000061360291906143f8565b60608501516101008601519190612498565b611eea612661846101600151670de0b6b3a764000061363391906143f8565b60608601516101408701519190611c20565b6000613651858561120e565b61366a61366286611c9c868b612b5f565b859085612498565b6112799190614374565b606061008c83836000614047565b60008060006136948888888888613645565b905060006136bf670de0b6b3a76400006136ae88886111f9565b6136b89190614374565b8390611283565b9050670de0b6b3a764000081106136ec576136e5610734670de0b6b3a764000089611283565b9050613704565b613701610734670de0b6b3a7640000896111f9565b90505b8088101561371a57600080935093505050613724565b8703925060019150505b9550959350505050565b6000806000808460000361374d5750879250869150859050600161383a565b6000856137598b61150a565b613763919061448b565b905061376e8761150a565b8112156137895760008060008094509450945094505061383a565b809450600089126137a9576137a2612661868b8d611c20565b93506137cc565b6137c06126616137b88b61454d565b87908d612498565b6137c99061454d565b93505b6000806137d98c8c612c98565b91509150806137f857600080600080965096509650965050505061383a565b60006138048888612c98565b92509050816138245760008060008097509750975097505050505061383a565b61382f8b8285611c20565b955060019450505050505b95509550955095915050565b600080600061385484612a21565b915091508061254757604051635516328b60e11b815260040160405180910390fd5b60208301516000906138889084611283565b60408501516138989084906111f9565b10158015610089575060208401516138c890846138c1633b9aca00670de0b6b3a7640000614374565b9190611c20565b60408501516138d8908490611283565b1115949350505050565b6000806000881215613904576138f78861454d565b6139019087614374565b95505b60006139108a8a612526565b90506000613921828a8989896140da565b9050600061393e61393689611c9c898d612b5f565b889088612498565b90508082101561395757600080945094505050506139c2565b808203670de0b6b3a764000081106139855761397e610734670de0b6b3a76400008b6111f9565b905061399d565b61399a610734670de0b6b3a76400008b611283565b90505b8a8110156139b55760008095509550505050506139c2565b8a90039450600193505050505b97509795505050505050565b60008060008360e00151136139e857506000928392509050565b60006139f784600001516135e1565b90506000613a23856040015186606001518760400151613a179190614374565b60208801519190612498565b905060008212613a4a5780821015613a3d57819003613a60565b5060009485945092505050565b613a538261454d565b613a5d9082614374565b90505b60e085015160c0860151613a75918390612498565b9050808560c001511015613a90575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613ac857855160400151613ac1908590614374565b9050613b03565b6000613ad38561454d565b875160400151909150811015613af3578651604001518190039150613b01565b6000809350935050506111a4565b505b855180516020909101516000918291613b1c9190612c98565b9150915080613b3457600080945094505050506111a4565b875160e0810151604090910151600091613b6991613b5d91613b56919061120e565b8a90610c51565b6101008b015190611283565b895160e0810151608090910151613b9491613b8891611c9c9088610c51565b8b516060015190611283565b613b9e9190614374565b90506000613bd6613bca613bc38c6000015160e001518861120e90919063ffffffff16565b8b90612b5f565b6101008c0151906111f9565b905080821015613bf1576000809650965050505050506111a4565b80820391506000613c33858c60000151604001518d6000015160e00151670de0b6b3a7640000613c2191906143f8565b8e516060810151608090910151613645565b90506000613c5d8c6000015160e00151670de0b6b3a7640000613c5691906143f8565b889061120e565b905080821015613c7a5760008098509850505050505050506111a4565b8b51608081015160609091015191830391613c96918391612498565b9050670de0b6b3a76400008110613cda578b5160e00151613cd39061073490613cc790670de0b6b3a76400006143f8565b8e5160e0015190611283565b9050613d09565b8b5160e00151613d069061073490613cfa90670de0b6b3a76400006143f8565b8e5160e00151906111f9565b90505b8b5160600151613d1c9085908390612498565b935083670de0b6b3a76400001115613d405783670de0b6b3a7640000039350613d54565b6000600198509850505050505050506111a4565b60008c60e0015112613db65760c08c015160e08d0151613d7391611283565b9250670de0b6b3a76400008310613d975760008098509850505050505050506111a4565b670de0b6b3a76400009290920391613daf8484610c51565b9350613deb565b613de8613dcf8d60c001518e60e001516116c09061454d565b613de190670de0b6b3a7640000614374565b8590610c51565b93505b50919a60019a5098505050505050505050565b6000806000613e108989888888613645565b9050613e2086611c9c898b614374565b975087811015613e37576000809250925050613eb6565b878103613e45818688612498565b9050670de0b6b3a76400008110613e7257613e6b610734670de0b6b3a764000089611283565b9050613e8a565b613e87610734670de0b6b3a7640000896111f9565b90505b613e948186611283565b9050808a1015613eac57600080935093505050613eb6565b8903925060019150505b965096945050505050565b6000806000613ed38989888888613645565b905086881015613eea576000809250925050613eb6565b9686900396613ef9888761120e565b975087811015613f10576000809250925050613eb6565b878103613f1e818688612498565b9050670de0b6b3a76400008110613f4b57613f44610734670de0b6b3a764000089611283565b9050613f63565b613f60610734670de0b6b3a7640000896111f9565b90505b613f6d8186611283565b905089811015613f8557600080935093505050613eb6565b9890980398600198509650505050505050565b6000806000613faa88888888886140da565b90506000613fce670de0b6b3a7640000613fc48888611283565b6132ba9190614374565b9050670de0b6b3a76400008110613ffb57613ff4610734670de0b6b3a7640000896111f9565b9050614013565b614010610734670de0b6b3a764000089611283565b90505b61401d81866111f9565b90508881101561403557600080935093505050613724565b97909703976001975095505050505050565b60608147101561406c5760405163cd78605960e01b8152306004820152602401611d6a565b600080856001600160a01b0316848660405161408891906145ae565b60006040518083038185875af1925050503d80600081146140c5576040519150601f19603f3d011682016040523d82523d6000602084013e6140ca565b606091505b50915091506112798683836140ff565b60006140e6858561120e565b61366a6140f786611c9c868b610c51565b859085611c20565b6060826141145761410f8261415b565b61008c565b815115801561412b57506001600160a01b0384163b155b1561415457604051639996b31560e01b81526001600160a01b0385166004820152602401611d6a565b508061008c565b80511561416b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806141986141d6565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561260357600080fd5b60008060006060848603121561425e57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561428357600080fd5b61428f86828701614237565b9150509250925092565b600080600080608085870312156142af57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156142db57600080fd5b6142e787828801614237565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610c1c57610c1c6142f3565b60006020828403121561433257600080fd5b81356001600160a01b038116811461008c57600080fd5b80151581146105d757600080fd5b60006020828403121561436957600080fd5b813561008c81614349565b80820180821115610c1c57610c1c6142f3565b6000808335601e1984360301811261439e57600080fd5b83018035915067ffffffffffffffff8211156143b957600080fd5b6020019150368190038213156106ac57600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826143f3576143f36143ce565b500690565b81810381811115610c1c57610c1c6142f3565b6001600160701b03818116838216019080821115612547576125476142f3565b6001600160801b03818116838216019080821115612547576125476142f3565b8181036000831280158383131683831282161715612547576125476142f3565b6001600160801b03828116828216039080821115612547576125476142f3565b80820182811260008312801582168215821617156144ab576144ab6142f3565b505092915050565b6000602082840312156144c557600080fd5b5051919050565b6000826144db576144db6143ce565b600160ff1b8214600019841416156144f5576144f56142f3565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610c1c57610c1c6142f3565b600081600f0b60016001607f1b03198103614544576145446142f3565b60000392915050565b6000600160ff1b8201614562576145626142f3565b5060000390565b602081016004831061458b57634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156145a357600080fd5b815161008c81614349565b6000825160005b818110156145cf57602081860181015185830152016145b5565b50600092019182525091905056fea2646970667358221220d3831de14e1f902f71c93f8e10c51cc25a51816cd474b9246df0e142de06de4a64736f6c63430008140033",
        "sourceMap": "697:275:49:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;1778:227:40;;;;;;:::i;:::-;;:::i;:::-;;;818:25:234;;;806:2;791:18;1778:227:40;;;;;;;;2774:290;;;;;;:::i;:::-;;:::i;:::-;;;;1595:25:234;;;1651:2;1636:18;;1629:34;;;;1568:18;2774:290:40;1421:248:234;1778:227:40;1930:7;1956:42;1968:13;1983:4;1989:8;1956:11;:42::i;:::-;1949:49;;1778:227;;;;;;:::o;2774:290::-;2961:7;2970;2996:61;3006:7;3015:10;3027:19;3048:8;2996:9;:61::i;:::-;2989:68;;;;2774:290;;;;;;;;:::o;1598:3704:114:-;1756:16;2356:21:169;:19;:21::i;:::-;1851:20:114::1;:18;:20::i;:::-;1936:23;1950:8;1936:13;:23::i;:::-;2035:26:::0;;::::1;;2031:100;;;2084:36;;-1:-1:-1::0;;;2084:36:114::1;;;;;;;;;;;2031:100;2259:25;2286:23:::0;2313:67:::1;2335:13;2362:8;2313;:67::i;:::-;2258:122:::0;;-1:-1:-1;2258:122:114;-1:-1:-1;3311:25:114::1;3315:21;3311:1;:25;:::i;:::-;3291:17;:45;3287:121;;;3359:38;;-1:-1:-1::0;;;3359:38:114::1;;;;;;;;;;;3287:121;3564:26:::0;:33;;-1:-1:-1;;3564:33:114::1;3593:4;3564:33;::::0;;3472:1:::1;3476:21;3472:25;3452:45:::0;::::1;::::0;-1:-1:-1;3766:29:114::1;3452:17:::0;3766:27:::1;:29::i;:::-;3737:12;:58:::0;;-1:-1:-1;;;;;;3737:58:114::1;-1:-1:-1::0;;;;;3737:58:114;;;::::1;::::0;;;::::1;::::0;;3833:258:::1;:233;3907:17:::0;3942:23:::1;3983:4:::0;4005:17:::1;4040:12;3833:56;:233::i;:::-;:256;:258::i;:::-;3805:12;:286:::0;;-1:-1:-1;;;;;3805:286:114;;::::1;-1:-1:-1::0;;;3805:286:114::1;::::0;::::1;::::0;;;::::1;::::0;;4596:62:::1;3805:25;::::0;4636:21:::1;4596:5;:62::i;:::-;4668:59;554:1:119;4696:20:114;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4718:8;4668:5;:59::i;:::-;4779:54;4796:19;:17;:19::i;:::-;4817:15;4779:16;:54::i;:::-;;4881:24;4908:112;4946:13;4973:15;5002:8;4908:24;:112::i;:::-;4881:139:::0;-1:-1:-1;5059:20:114::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;5035:234:114::1;;5093:8:::0;5115:16;5166:17;5226:15:::1;::::0;;;::::1;::::0;::::1;;:::i;:::-;5035:234;::::0;;2892:25:234;;;2948:2;2933:18;;2926:34;;;;2976:18;;;2969:34;3046:14;3039:22;3034:2;3019:18;;3012:50;3093:3;3078:19;;3071:35;;;2879:3;2864:19;5035:234:114::1;;;;;;;5280:15;;;2398:20:169::0;1713:1;2924:7;:21;2744:208;1849:3714:115;2086:20;2108;2356:21:169;:19;:21::i;:::-;9562::112;;::::1;::::0;::::1;;;9558:85;;;9606:26;;-1:-1:-1::0;;;9606:26:112::1;;;;;;;;;;;9558:85;2194:20:115::2;:18;:20::i;:::-;2279:23;2293:8;2279:13;:23::i;:::-;2358;2383::::0;2410:61:::2;2432:7;2453:8;2410;:61::i;:::-;2357:114:::0;;-1:-1:-1;2357:114:115;-1:-1:-1;3024:21:115::2;3048:40;2357:114:::0;;3048:23:::2;:40::i;:::-;3024:64;;3118:25;3102:13;:41;3098:117;;;3166:38;;-1:-1:-1::0;;;3166:38:115::2;;;;;;;;;;;3098:117;3246:19;3228:15;:37;3224:106;;;3288:31;;-1:-1:-1::0;;;3288:31:115::2;;;;;;;;;;;3224:106;3373:24;3400:19;:17;:19::i;:::-;3373:46;;3429:51;3446:16;3464:15;3429:16;:51::i;:::-;;3742:26;3778::::0;3917:52:::2;3936:15;3953;3917:18;:52::i;:::-;3814:155:::0;;-1:-1:-1;3814:155:115;;-1:-1:-1;3814:155:115;-1:-1:-1;4029:25:115;;::::2;4025:88;;;4077:25;;-1:-1:-1::0;;;4077:25:115::2;;;;;;;;;;;4025:88;4190:18;4164:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4279:36:115::2;::::0;-1:-1:-1;4298:17:115::2;4279:16:::0;:36:::2;:::i;:::-;4264:51;;4325:137;4353:18;4385:12;4411:15;4440:12;4325:14;:137::i;:::-;4546:15;4564:97;4599:26;4639:12;4564:21;:97::i;:::-;4546:115:::0;-1:-1:-1;4671:50:115::2;4546:115:::0;4686:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4708:12;4671:5;:50::i;:::-;4784:7:::0;4856:12;4933;5013:15;5108:8;5217:7;5184:19:::2;;::::0;::::2;5108:8:::0;5184:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5162:347:115::2;;5238:13;5265:59;5290:6;5298:16;5316:7;5265:24;:59::i;:::-;5354:66;5386:6;5394:16;5412:7;5354:31;:66::i;:::-;5458:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;5162:347;::::0;;2892:25:234;;;2948:2;2933:18;;2926:34;;;;2976:18;;;2969:34;3046:14;3039:22;3034:2;3019:18;;3012:50;3093:3;3078:19;;3071:35;;;2879:3;2864:19;5162:347:115::2;;;;;;;-1:-1:-1::0;5542:13:115;;-1:-1:-1;;;;;;;;;;;2398:20:169;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;4144:145:44:-;4211:9;:14;4207:76;;4248:24;;-1:-1:-1;;;4248:24:44;;;;;;;;;;;4207:76;4144:145::o;8216:221:112:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:112;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:112;;;;;;;;;;;8324:107;8216:221;:::o;1926:1509::-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:112;-1:-1:-1;2202:812:112;;;-1:-1:-1;2553:9:112;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:112;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:112;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;;:::o;884:190:125:-;937:9;-1:-1:-1;;;964:1:125;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:125;;;;;;;;;;;958:86;-1:-1:-1;1065:1:125;884:190::o;8756:1272:123:-;8992:20;;9230:35;:17;9256:8;9230:25;:35::i;:::-;9218:47;-1:-1:-1;9405:13:123;9427:15;:4;9218:47;9427:12;:15::i;:::-;9421:21;;193:4:122;9421:21:123;:::i;:::-;9405:37;;193:4:122;9456:5:123;:12;9452:300;;9563:36;9573:25;193:4:122;9585:12:123;9573:11;:25::i;:::-;9563:5;;:9;:36::i;:::-;9555:44;;9452:300;;;9707:34;9717:23;193:4:122;9727:12:123;9717:9;:23::i;9707:34::-;9699:42;;9452:300;9920:101;10002:5;9920:56;:23;9952;9920:31;:56::i;:::-;:64;;:101::i;:::-;9901:120;;;;8756:1272;;;;;;;;:::o;5934:316:116:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;1595:25:234;;;1651:2;1636:18;;1629:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;1568:18:234;6184:59:116;;;;;;;5934:316;;;:::o;11561:223:112:-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;:::-;11677:100;;11561:223;:::o;3253:7270:113:-;3379:7;3511:51;;;:12;:51;;;;;3589:27;;-1:-1:-1;;;;;3589:27:113;:32;;;:81;;;3655:15;3637;:33;3589:81;3572:168;;;3702:27;-1:-1:-1;;;;;3702:27:113;;-1:-1:-1;3695:34:113;;3572:168;3832:28;:16;:26;:28::i;:::-;3802:58;;-1:-1:-1;;;;;;3802:58:113;-1:-1:-1;;;;;3802:58:113;;;;;;;3947:40;3970:16;3947:22;:40::i;:::-;-1:-1:-1;4451:27:113;;-1:-1:-1;4481:12:113;4451:27;4507:35;4525:17;4507:15;:35;:::i;:::-;4481:71;;;;;;;;;;;-1:-1:-1;4481:71:113;;;:87;-1:-1:-1;;;;;4481:87:113;;-1:-1:-1;4601:101:113;4636:27;4677:15;4601:21;:101::i;:::-;4712:27;4742:26;;;:12;:26;;;;;;4578:124;;-1:-1:-1;4812:23:113;;4808:2275;;-1:-1:-1;5026:4:113;5189:21;;5266:190;5313:19;5354:16;5392:19;5189:21;5266:25;:190::i;:::-;5171:285;;;;5496:13;5470:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5523:238:113;;-1:-1:-1;5557:19:113;5594:1;5613:13;5644:24;5613:13;5644:22;:24::i;:::-;5732:15;5523:16;:238::i;:::-;5995:30;6012:13;5995:30;;:::i;:::-;;;6423:254;6482:19;6519:13;6550:19;6587:16;6621;6655:8;6423:41;:254::i;:::-;6407:270;-1:-1:-1;6912:85:113;:56;6407:270;6951:16;6912:38;:56::i;:::-;:83;:85::i;:::-;6877:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6877:120:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6877:120:113;;;;;-1:-1:-1;;;;;6877:120:113;;;;;;7047:25;:13;:23;:25::i;:::-;7011:32;:61;;:32;;:61;;;;-1:-1:-1;;;7011:61:113;;-1:-1:-1;;;;;7011:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7011:61:113;;;;;-1:-1:-1;;;;;7011:61:113;;;;;;4837:2246;;4808:2275;7201:19;7223:100;7258:26;7298:15;7223:21;:100::i;:::-;7333:26;7362:25;;;:12;:25;;;;;;7201:122;;-1:-1:-1;7401:22:113;;7397:1597;;7613:4;7595:22;;7775:21;7814;7852:188;7899:18;7939:16;7977:19;8018:4;7852:25;:188::i;:::-;7757:283;;;;8080:13;8054:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8132:15:113;;-1:-1:-1;8191:235:113;8224:18;8107:22;8279:13;8310:24;8279:13;8310:22;:24::i;:::-;8398:14;8191:15;:235::i;:::-;8560:30;8577:13;8560:30;;:::i;:::-;;-1:-1:-1;8823:85:113;:56;8560:30;8862:16;8823:38;:56::i;:85::-;8788:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8788:120:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8788:120:113;;;;;-1:-1:-1;;;;;8788:120:113;;;;;;8958:25;:13;:23;:25::i;:::-;8922:32;:61;;:32;;:61;;;;-1:-1:-1;;;8922:61:113;;-1:-1:-1;;;;;8922:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8922:61:113;;;;;-1:-1:-1;;;;;8922:61:113;;;;;;7425:1569;;;7397:1597;9145:15;9141:701;;;9365:132;9434:30;:19;:28;:30::i;:::-;9402:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9482:1;9365:19;:132::i;:::-;9788:43;9814:16;9788:25;:43::i;:::-;;9141:701;10221:20;10247:44;10274:16;10247:26;:44::i;:::-;-1:-1:-1;10306:176:113;;;5201:25:234;;;5257:2;5242:18;;5235:34;;;5285:18;;;5278:34;;;5343:2;5328:18;;5321:34;;;10220:71:113;;-1:-1:-1;10336:15:113;;10306:176;;5188:3:234;5173:19;10306:176:113;;;;;;;10500:16;10493:23;;;;;;;;;;3253:7270;;;;;:::o;32807:391:112:-;32976:7;32999:15;;;;;;;;:::i;:::-;32995:197;;;-1:-1:-1;33037:7:112;33030:14;;32995:197;33148:33;:7;33164:16;33148:15;:33::i;:::-;33141:40;;;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;17927:3870:115:-;18085:26;18125:25;18164:26;18386:251;18432:25;:23;:25::i;:::-;18471:12;:25;-1:-1:-1;;;18471:25:115;;-1:-1:-1;;;;;18471:25:115;18510:12;18548;18574:16;18604:23;18386:32;:251::i;:::-;18366:271;;18770:17;18790:184;18837:25;:23;:25::i;:::-;18876:12;:25;-1:-1:-1;;;18876:25:115;;-1:-1:-1;;;;;18876:25:115;18915:23;18952:12;18790:33;:184::i;:::-;18770:204;;19001:270;19038:12;19068:17;19103:154;19169:9;19200;19231:8;19103:44;:154::i;:::-;19001:19;:270::i;:::-;18984:449;;;19296:126;19352:56;19296:38;:126::i;:::-;19609:16;19648:26;19696:130;19739:12;19769:9;19796:16;19696:25;:130::i;:::-;19595:231;;-1:-1:-1;19595:231:115;-1:-1:-1;20022:29:115;19595:231;20022:29;;:::i;:::-;;-1:-1:-1;20596:92:115;:18;20639:9;20662:16;20596:29;:92::i;:::-;20575:113;-1:-1:-1;20947:33:115;20575:113;20947:12;:33;:::i;:::-;20926:54;;193:4:122;21301:245:115;21380:18;21352:25;:23;:25::i;:::-;:46;;;;:::i;:::-;21416:12;:25;:45;;21444:17;;-1:-1:-1;;;21416:25:115;;-1:-1:-1;;;;;21416:25:115;:45;:::i;:::-;21479:23;21520:12;21301:33;:245::i;:::-;:251;21284:430;;;21577:126;21633:56;21577:38;:126::i;:::-;21724:66;;;17927:3870;;;;;:::o;11762:2037::-;12040:29;;-1:-1:-1;;;12040:29:115;;-1:-1:-1;;;;;12040:29:115;12118:304;:279;12040:29;12273:19;193:4:122;12273:13:115;:19;:::i;:::-;12139:36;;-1:-1:-1;;;;;12139:36:115;;12118:279;12343:18;12379:4;12118:102;:279::i;:304::-;12079:36;:343;;-1:-1:-1;;;;;;12079:343:115;-1:-1:-1;;;;;12079:343:115;;;;;;;;;;12570:31;:19;:29;:31::i;:::-;12540:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;12540:61:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12540:61:115;;;;;-1:-1:-1;;;;;12540:61:115;;;;;;12640:30;:18;:28;:30::i;:::-;12611:12;:59;;:25;;:59;;;;-1:-1:-1;;;12611:59:115;;-1:-1:-1;;;;;12611:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12611:59:115;;;;;-1:-1:-1;;;;;12611:59:115;;;;;;12701:30;:18;:28;:30::i;:::-;12680:51;;;;:::i;:::-;12741:29;:49;;-1:-1:-1;;;;;12741:49:115;;;-1:-1:-1;;;12741:49:115;;;;;;12680:51;-1:-1:-1;;12969:30:115;12985:13;12969:15;:30::i;:::-;12945:54;;13009:117;13042:14;13087:29;:18;:27;:29::i;:::-;13070:46;;:14;:46;:::i;:::-;13009:19;:117::i;:::-;13225:28;13236:16;13225:10;:28::i;:::-;13220:186;;13269:126;13325:56;13269:38;:126::i;:::-;13639:12;13654:43;13680:16;13654:25;:43::i;:::-;13639:58;;13712:7;13707:86;;13742:40;;-1:-1:-1;;;13742:40:115;;;;;;;;;;;13707:86;11939:1860;;;11762:2037;;;;:::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;33531:405:112:-;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:112;33905:14;;1321:908:44;1443:7;;1519:129;-1:-1:-1;;;;;1533:10:44;1519:43;1576:10;1608:4;1627:11;1519:43;:129::i;:::-;1930:118;1991:17;2023:15;:11;2037:1;2023:15;:::i;:::-;-1:-1:-1;;;;;1944:10:44;1930:39;;:118;:39;:118::i;:::-;2081:106;;-1:-1:-1;;;2081:106:44;;;;;5966:25:234;;;2172:4:44;6007:18:234;;;6000:60;2058:20:44;;2098:17;-1:-1:-1;;;;;2081:44:44;;;;5939:18:234;;2081:106:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2058:129;-1:-1:-1;2220:1:44;;-1:-1:-1;;1321:908:44;;;;;;;:::o;2347:326::-;2529:137;-1:-1:-1;;;;;2543:17:44;2529:50;2593:10;2625:4;2644:12;2529:50;:137::i;:::-;2347:326;;;:::o;5594:150:112:-;5672:23;5718:19;193:4:122;5718:14:112;:19::i;1884:164:122:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:122:o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;21722:2511:112:-;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:112;;-1:-1:-1;;;;;22081:32:112;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:112;;-1:-1:-1;22022:101:112;-1:-1:-1;22328:39:112;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:112;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:112;;-1:-1:-1;;;;;22834:120:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:112;;;;;-1:-1:-1;;;;;22834:120:112;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:112;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:112;;-1:-1:-1;23856:28:112;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:112;;;;;-1:-1:-1;;;;;23898:62:112;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11087:2398:113:-;11274:21;;11680:37;:11;11700:16;11680:19;:37::i;:::-;11664:53;-1:-1:-1;11727:15:113;11745:31;11664:53;11767:8;11745:21;:31::i;:::-;11727:49;-1:-1:-1;11802:33:113;11727:49;11818:16;11802:15;:33::i;:::-;11786:49;;12262:7;12258:557;;;12302:23;12312:13;12302:7;:23;:::i;:::-;12285:40;;;;:::i;:::-;;;12258:557;;;12781:23;12791:13;12781:7;:23;:::i;:::-;12764:40;;;;:::i;:::-;;;12258:557;13033:20;13014:16;:39;13010:469;;;13148:110;:13;13190:16;13224:20;13148:24;:110::i;:::-;13132:126;-1:-1:-1;13358:110:113;:13;13400:16;13434:20;13358:24;:110::i;:::-;13342:126;;13010:469;11320:2165;11087:2398;;;;;;;:::o;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;17905:1127:117;18207:30;;-1:-1:-1;;;18207:30:117;;-1:-1:-1;;;;;18207:30:117;18287:300;:275;18207:30;18444:19;193:4:122;18444:13:117;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:117;;-1:-1:-1;;;;;18308:37:117;;;18514:11;18543:5;18287:103;:275::i;:300::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:117;;;-1:-1:-1;;;18247:340:117;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:117;;;-1:-1:-1;;;18652:101:117;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:117;;;;;-1:-1:-1;;;;;18821:61:117;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:117;;-1:-1:-1;;;;;18966:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:117;;;;;-1:-1:-1;;;;;18966:59:117;;;;;;18117:915;17905:1127;;;;;:::o;14667:1674:123:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:123;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:125:-;580:9;-1:-1:-1;;;607:1:125;:12;601:86;;643:33;;-1:-1:-1;;;643:33:125;;;;;;;;;;;14268:3167:115;14652:12;:26;-1:-1:-1;;;;;14652:26:115;14705:35;;;;:110;;-1:-1:-1;14794:21:115;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:115;;-1:-1:-1;;;;;16178:29:115;16256:297;:272;16178:29;16410:19;193:4:122;16410:13:115;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:115;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:115;-1:-1:-1;;;;;16217:336:115;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:115;;;-1:-1:-1;;;16656:60:115;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:115;-1:-1:-1;;;;;17238:54:115;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:115;-1:-1:-1;;;;;17302:57:115;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:115;;-1:-1:-1;;;;;17369:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:115;;;;;-1:-1:-1;;;;;17369:59:115;;;;;;14479:2956;;;14268:3167;;;;;:::o;18678:551:112:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:112;;;;;-1:-1:-1;;;;;19079:43:112;;;;;;2347:326:44;;;:::o;19050:173:112:-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:112;;:::i;21421:1688:114:-;21735:13;:29;-1:-1:-1;;;21514:4:114;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:114;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:114;;21421:1688;-1:-1:-1;;21421:1688:114:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:114;;21421:1688;-1:-1:-1;;;21421:1688:114:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:114;;21421:1688;-1:-1:-1;;;;;21421:1688:114:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22863:36;:24;:34;:36::i;:::-;22830:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;22830:69:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22830:69:114;;;;;-1:-1:-1;;;;;22830:69:114;;;;;;22935:25;:13;:23;:25::i;:::-;22909:13;:51;;:22;;:51;;;;-1:-1:-1;;;22909:51:114;;-1:-1:-1;;;;;22909:51:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22909:51:114;;;;;-1:-1:-1;;;;;22909:51:114;;;;;;23037:43;23055:24;:13;:22;:24::i;:::-;23054:25;;;:::i;:::-;23037:16;:43::i;:::-;-1:-1:-1;23098:4:114;;21421:1688;-1:-1:-1;;;;;;;21421:1688:114:o;25409:1358:112:-;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;25409:1358:112:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:112;-1:-1:-1;;;;;26309:29:112;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;25409:1358:112:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;;;25409:1358:112:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;11965:253:112:-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:112;;;;12169:28;;12061:46;:150::i;19247:892:123:-;19510:7;19647:485;19714:23;19755:13;19786:12;20025:18;20031:12;193:4:122;20025:18:123;:::i;:::-;20061:16;20095:23;19647:49;:485::i;:::-;19628:504;19247:892;-1:-1:-1;;;;;;;19247:892:123:o;3330:531::-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;17063:541::-;17220:7;17327:270;17463:120;17547:14;17553:8;193:4:122;17547:14:123;:::i;:::-;17463:52;193:4:122;17479:29:123;193:4:122;17489:18:123;17479:9;:29::i;:::-;:35;;;;:::i;:::-;17463:9;;:15;:52::i;:::-;:58;;:120::i;:::-;17437:146;;193:4:122;17437:146:123;:::i;:::-;17328:14;17334:8;193:4:122;17328:14:123;:::i;17116:683:112:-;17272:4;17497:23;17523:221;17598:16;17570:25;:23;:25::i;:::-;:44;;;;:::i;:::-;17628:12;:25;:43;;17656:15;;-1:-1:-1;;;17628:25:112;;-1:-1:-1;;;;;17628:25:112;:43;:::i;17523:221::-;-1:-1:-1;;;;17116:683:112;-1:-1:-1;;;;17116:683:112:o;317:182:121:-;485:6;451:41;;-1:-1:-1;;;451:41:121;;;;;;;;:::i;:::-;;;;;;;;27287:1651:112;27443:16;;28496:129;28612:12;28496:96;28575:16;28496:96;28545:9;193:4:122;28497:21:112;193:4:122;28507:10:112;28497:9;:21::i;:::-;:27;;;;:::i;28496:129::-;28485:140;-1:-1:-1;28897:34:112;28485:140;28914:16;28897;:34::i;:::-;28876:55;;27287:1651;;;;;;:::o;12712:2102:122:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;12556:675:112:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:112;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:112;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:112:o;1702:188:166:-;1829:53;;-1:-1:-1;;;;;7823:15:234;;;1829:53:166;;;7805:34:234;7875:15;;;7855:18;;;7848:43;7907:18;;;7900:34;;;1802:81:166;;1822:5;;1844:18;;;;;7740::234;;1829:53:166;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:166;;;;;;;;;;;1802:19;:81::i;:::-;1702:188;;;;:::o;3296:380::-;3411:47;;;-1:-1:-1;;;;;8137:32:234;;3411:47:166;;;8119:51:234;8186:18;;;;8179:34;;;3411:47:166;;;;;;;;;;8092:18:234;;;;3411:47:166;;;;;;;;-1:-1:-1;;;;;3411:47:166;-1:-1:-1;;;3411:47:166;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;8137:32:234;;;3561:43:166;;;8119:51:234;3601:1:166;8186:18:234;;;8179:34;3534:71:166;;3554:5;;3576:13;;;;;8092:18:234;;3561:43:166;7945:274:234;3534:71:166;3619:40;3639:5;3646:12;3619:19;:40::i;4450:203:44:-;4580:66;;-1:-1:-1;;;4580:66:44;;;;;818:25:234;;;4542:7:44;;4597:17;-1:-1:-1;;;;;4580:52:44;;;;791:18:234;;4580:66:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;1240:212:125:-;1292:8;-1:-1:-1;;;;;1318:30:125;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:125;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:125;;;;;:46;;-1:-1:-1;;;;;;1718:21:125;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:125;;;;;;;;;;;6050:574:123;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:123;-1:-1:-1;6249:139:123;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;15815:101:122:-;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;;-1:-1:-1;15904:1:122;;15815:101;-1:-1:-1;15815:101:122:o;24513:558:112:-;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:112;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:112;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:112;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:112;:57;:::i;:::-;:97;;;;:::i;:::-;24901:126;;24816:222;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:112;-1:-1:-1;14138:108:112;14256:61;;-1:-1:-1;14300:5:112;;-1:-1:-1;14284:22:112;;-1:-1:-1;14284:22:112;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:112;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15195:32:112;;14809:569;;;;15266:34;;;14809:569;;;;15336:31;;;;14809:569;;;;-1:-1:-1;14809:569:112;;15398:4;;-1:-1:-1;13522:1887:112;-1:-1:-1;13522:1887:112:o;22927:3408:124:-;23046:7;23055;23361:38;23401:12;23417:173;23498:7;:29;;;23545:7;:31;;;23417:63;:173::i;:::-;23360:230;;;;23605:7;23600:52;;-1:-1:-1;23636:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;22927:3408:124:o;23600:52::-;23661:29;23735:109;23783:7;23804:30;23735:34;:109::i;:::-;23700:144;-1:-1:-1;23700:144:124;-1:-1:-1;23858:8:124;;;:38;;-1:-1:-1;23870:26:124;;23858:38;23854:82;;;-1:-1:-1;23920:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;22927:3408:124:o;23854:82::-;24224:32;24259:131;24330:7;24355:21;24259:53;:131::i;:::-;24224:166;;24527:24;24555:1;24527:29;24523:743;;-1:-1:-1;24580:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;22927:3408:124:o;24523:743::-;24861:7;:35;;;24833:24;:63;24816:450;;24929:24;24955:21;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;22927:3408:124:o;24816:450::-;-1:-1:-1;25220:35:124;;;;25525:21;25549:152;25605:7;25626:30;25670:21;25549:42;:152::i;:::-;25525:176;;25715:13;25732:1;25715:18;25711:62;;-1:-1:-1;25757:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;;22927:3408:124:o;25711:62::-;26107:21;26090:13;:38;26086:82;;-1:-1:-1;26152:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;;22927:3408:124:o;26086:82::-;26288:24;;26314:13;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;22927:3408:124:o;23286:1121:114:-;23427:12;:26;23489:28;;-1:-1:-1;;;;;23427:26:114;;;;23489:28;;;;;;-1:-1:-1;;;23551:25:114;;;23402:22;;;23725:218;23427:26;23489:28;23551:25;23871:21;23910:19;23725:31;:218::i;:::-;23586:357;;;;;;24018:14;23994:20;:38;23990:130;;24077:32;:20;:30;:32::i;:::-;24048:12;:61;;-1:-1:-1;;;;;;24048:61:114;-1:-1:-1;;;;;24048:61:114;;;;;;;;;;23990:130;24159:16;24133:22;:42;24129:137;;24222:33;:22;:31;:33::i;:::-;24191:28;:64;;-1:-1:-1;;;;;;24191:64:114;-1:-1:-1;;;;;24191:64:114;;;;;;;;;;24129:137;24302:13;24279:19;:36;24275:126;;24359:31;:19;:29;:31::i;:::-;24331:12;:59;;-1:-1:-1;;;;;24331:59:114;;;-1:-1:-1;;;24331:59:114;;;;;;;;;23349:1058;;;;;;23286:1121;:::o;15602:1035:112:-;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:112;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:112;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:112;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:112:o;8818:1173:124:-;8925:7;8934:4;9311:19;9355:20;9377:12;9393:65;9437:7;9393:26;:65::i;:::-;9354:104;;;;9477:7;9472:64;;-1:-1:-1;9512:1:124;;;;-1:-1:-1;8818:1173:124;-1:-1:-1;;;;8818:1173:124:o;9472:64::-;9712:39;:7;:28;;;:37;:39::i;:::-;9663:30;9685:7;9663:21;:30::i;:::-;9631:13;9580:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;9549:202;;9340:422;;9893:1;9878:12;:16;9874:64;;;-1:-1:-1;9918:1:124;;;;-1:-1:-1;8818:1173:124;-1:-1:-1;;8818:1173:124:o;9874:64::-;9964:12;9979:4;;-1:-1:-1;8818:1173:124;-1:-1:-1;;8818:1173:124:o;2068:1726:126:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:126;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:126;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3135:6;;;193:4:122;3165:9:126;;3161:261;;3263:20;3270:12;193:4:122;3280:1:126;3270:9;:12::i;3263:20::-;3258:25;;3161:261;;;3389:22;3396:14;193:4:122;3408:1:126;3396:11;:14::i;3389:22::-;3384:27;;3161:261;3495:2;3491:1;:6;3487:166;;;3513:129;3569:59;3513:38;:129::i;:::-;3771:6;;;;2068:1726;-1:-1:-1;;;;;;;2068:1726:126:o;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;15264:104;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;4059:629:166;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;8925:32:234;;4631:40:166;;;8907:51:234;8880:18;;4631:40:166;8761:203:234;5189:578:166;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:166;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:166;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:166;;:30;;;5189:578::o;7273:398:123:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:123;-1:-1:-1;;;7273:398:123:o;46936:3239:124:-;47109:29;47140:12;47329:1;47304:7;:21;;;:26;47300:84;;-1:-1:-1;;47354:12:124;;;;47368:4;47346:27;;47300:84;47393:21;47426:7;:21;;;47425:22;;;:::i;:::-;47393:55;;47697:21;47755:316;47811:31;47856:7;:28;;;47904:7;:26;;;:38;;;193:4:122;47898:44:124;;;;:::i;:::-;47956:26;;:42;;;;48012:49;;;;;47755:42;:316::i;:::-;47728:343;-1:-1:-1;47728:343:124;-1:-1:-1;48085:8:124;;;:30;;-1:-1:-1;48097:18:124;;48085:30;48081:78;;;48139:1;48142:5;48131:17;;;;;;;;48081:78;49182:24;49209:34;:13;49229;49209:19;:34::i;:::-;49182:61;;193:4:122;49426:16:124;:23;49422:453;;49523:16;193:4:122;49517:22:124;49493:46;;49591:90;49638:7;:29;;;49591:21;:29;;:90;;;;:::i;:::-;49567:114;;49422:453;;;49855:1;49858:5;49847:17;;;;;;;;;49422:453;50057:7;:12;;;50033:21;:36;50029:94;;;50093:7;:12;;;50107:4;50085:27;;;;;;;;;50029:94;-1:-1:-1;50163:4:124;;-1:-1:-1;;;46936:3239:124;;;;;:::o;27196:2209::-;27376:7;27475:12;27694:274;27736:7;:29;;;27779:7;:31;;;27824:7;:28;;;27866:7;:26;;;:47;;;27928:30;:19;:28;:30::i;:::-;27927:31;;;:::i;:::-;27694:28;:274::i;:::-;27511:26;;27621:39;;;27497:471;;;;27565:42;;;27497:471;;;;;;;;;-1:-1:-1;27497:471:124;27978:167;;28133:1;28126:8;;;;;27978:167;28154:26;28222:75;28261:7;:26;;;28222:25;:75::i;:::-;28190:107;-1:-1:-1;28190:107:124;-1:-1:-1;28190:107:124;28307:167;;28462:1;28455:8;;;;;;28307:167;28808:7;:28;;;28786:18;:50;28782:89;;28859:1;28852:8;;;;;;28782:89;29120:21;29186:7;:35;;;29144:7;:27;;;:77;;;;:::i;:::-;29120:101;;29278:120;29320:18;29356:7;:28;;;29278:13;:24;;:120;;;;;:::i;:::-;29250:148;;:13;:148;:::i;30287:10343::-;30508:7;30569:21;30635:7;:35;;;30593:7;:27;;;:77;;;;:::i;:::-;31228:28;;;;31168:35;;;;30569:101;;-1:-1:-1;31144:21:124;;31168:125;;30569:101;31168:46;:125::i;:::-;31144:149;;31406:7;:21;;;31431:1;31406:26;31402:77;;31455:13;-1:-1:-1;31448:20:124;;-1:-1:-1;31448:20:124;31402:77;31842:9;31837:8756;871:1;31857;:33;31837:8756;;;32065:41;:13;32083:22;32065:17;:41::i;:::-;32049:57;;32239:12;32482:292;32528:7;:29;;;32575:7;:31;;;32624:7;:28;;;32670:7;:26;;;:47;;;32736:24;:13;:22;:24::i;32482:292::-;32283:26;;32401:39;;;32265:509;;;;32341:42;;;32265:509;;;;;;;;;-1:-1:-1;32265:509:124;32788:268;;33040:1;33033:8;;;;;;;;32788:268;33069:20;33092:79;33131:7;:26;;;33092:21;:79::i;:::-;33069:102;;33276:167;33349:7;33378:12;33412:13;33276:51;:167::i;:::-;33255:241;;;33476:5;;;;33255:241;33746:1;33722:7;:21;;;:25;33718:4509;;;34135:25;;:39;;34200:41;;;;34267:38;;;;34331:46;;;;34409:37;;;;;33931:7;;33888:40;;34046:563;;34135:39;;34200:41;;34267:38;;34331:46;34403:43;;193:4:122;34403:43:124;:::i;:::-;34472:25;;:41;;;;34539:48;;;;;34046:63;:563::i;:::-;34019:590;-1:-1:-1;34019:590:124;-1:-1:-1;34019:590:124;34627:289;;34896:1;34889:8;;;;;;;;;;;34627:289;35127:13;35102:6;:20;;;35094:46;35090:3123;;35408:115;35495:6;35408:61;:115::i;:::-;35311:212;;-1:-1:-1;35311:212:124;-1:-1:-1;35311:212:124;35545:200;;35721:1;35714:8;;;;;;;;;;;35545:200;36157:336;36211:6;:28;;;36265:6;:30;;;36321:6;:27;;;36374:6;:25;;;:46;;;36447:24;:13;:22;:24::i;36157:336::-;35929:25;;36061:38;;;35903:590;;;;35994:41;;;35903:590;;;;;;;;;-1:-1:-1;35903:590:124;36515:200;;36691:1;36684:8;;;;;;;;;;;36515:200;36860:25;;:39;;36929:41;;;;37000:38;;;;37068:46;;;;;37150:26;;:38;;;36763:600;;37000:38;37068:46;37144:44;;193:4:122;37144:44:124;:::i;36763:600::-;36736:627;-1:-1:-1;36736:627:124;-1:-1:-1;36736:627:124;37385:200;;37561:1;37554:8;;;;;;;;;;;37385:200;37908:7;:21;;;37883:13;:47;37879:316;;37965:13;37958:20;;;;;;;;;;;37879:316;38164:8;;;;31837:8756;;37879:316;33749:4478;;33718:4509;38503:18;38605:176;38672:7;38697:31;38746:7;:21;;;38605:49;:176::i;:::-;38535:246;-1:-1:-1;38535:246:124;-1:-1:-1;38799:8:124;;;:29;;;193:4:122;38811:10:124;:17;;38799:29;38795:189;;;38968:1;38961:8;;;;;;;;;;38795:189;39044:10;193:4:122;39038:16:124;39025:29;;39356:12;39436:137;:105;39513:7;:27;;;39436:7;:49;;;:76;;:105;;;;:::i;:137::-;39371:46;:35;:12;39392:13;39371:20;:35::i;:46::-;:202;;;;:::i;:::-;39356:217;;39599:1;39591:5;:9;39587:893;;;39764:57;39807:13;39764:34;39772:5;39787:10;39764:22;:34::i;:57::-;39728:93;;:13;:93;:::i;:::-;39692:129;;39587:893;;;39854:1;39846:5;:9;39842:638;;;39947:14;39964:96;40029:13;39964:35;39988:10;39964:35;39973:5;39972:6;:::i;39964:96::-;39947:113;;40091:13;40082:6;:22;40078:344;;;40196:6;40180:13;:22;40164:38;;40078:344;;;40402:1;40395:8;;;;;;;;;;;;40078:344;39857:579;39842:638;;;40460:5;;;;;;39842:638;40565:3;;;;;31894:8699;;;;31837:8756;;;-1:-1:-1;40610:13:124;30287:10343;-1:-1:-1;;;;;30287:10343:124:o;1782:813::-;2053:21;2088:22;2124:20;2169:12;2307:191;2349:14;2377:16;2407:13;2434:21;2469:19;2307:28;:191::i;:::-;2191:307;;-1:-1:-1;2191:307:124;;-1:-1:-1;2191:307:124;-1:-1:-1;2191:307:124;-1:-1:-1;2191:307:124;2508:81;;2543:35;;-1:-1:-1;;;2543:35:124;;;;;;;;;;;2508:81;2159:436;1782:813;;;;;;;;;:::o;10998:450:112:-;11097:21;11130:24;193:4:122;11157:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:112;11417:23;193:4:122;11417:17:112;:23;:::i;:::-;11395:13;;:21;:46::i;10319:9443:124:-;10427:6;10435:4;11237:23;11392:130;:102;11460:7;:33;;;11392:7;:42;;;:67;;:102;;;;:::i;:130::-;11263:114;:90;11320:7;:32;;;11263:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;11237:285;;11533:30;11565:12;11581:157;11662:7;:21;;;11701:7;:23;;;11581:63;:157::i;:::-;11532:206;;;;11753:7;11748:160;;-1:-1:-1;11888:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;10319:9443:124:o;11748:160::-;12157:1;12138:16;:20;12134:7595;;;12174:25;12210:16;12174:53;;12415:21;12477:401;12558:7;:21;;;12601:7;:23;;;12646:7;:20;;;12688:7;:28;;;12744:7;:19;;;193:4:122;12738:25:124;;;;:::i;:::-;12785:7;:23;;;12830:7;:30;;;12477:59;:401::i;:::-;12450:428;-1:-1:-1;12450:428:124;-1:-1:-1;12450:428:124;12892:176;;-1:-1:-1;13044:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;10319:9443:124:o;12892:176::-;13245:17;13228:13;:34;13224:2891;;13536:21;13602:389;13702:22;13750:7;:20;;;13796:17;13845:7;:19;;;193:4:122;13839:25:124;;;;:::i;:::-;13890:7;:23;;;13939:7;:30;;;13602:74;:389::i;:::-;13575:416;-1:-1:-1;13575:416:124;-1:-1:-1;14297:8:124;;:84;;;;;14349:7;:32;;;14329:17;:52;14297:84;14272:335;;;-1:-1:-1;14430:1:124;;14433:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;14272:335::-;14540:7;14535:72;;-1:-1:-1;14579:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;14535:72::-;14634:24;:13;:22;:24::i;:::-;14633:25;;;:::i;:::-;14625:40;14660:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;;10319:9443:124:o;13224:2891::-;15350:1;15323:7;:23;;;:28;15319:782;;15409:95;15435:7;:28;;;15410:22;:53;;;;:::i;15409:95::-;15408:96;;;:::i;15319:782::-;15961:28;;;;15937:21;;15936:94;;15937:52;;;:::i;12134:7595::-;16240:1;16221:16;:20;16217:3512;;;16257:25;16293:17;16294:16;16293:17;:::i;:::-;16257:54;;16428:21;16490:307;16571:22;16615:7;:20;;;16663:7;:19;;;193:4:122;16657:25:124;;;;:::i;:::-;16704:7;:23;;;16749:7;:30;;;16490:59;:307::i;:::-;16463:334;-1:-1:-1;16463:334:124;-1:-1:-1;16463:334:124;16811:64;;-1:-1:-1;16851:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;10319:9443:124:o;16811:64::-;17052:17;17035:13;:34;17031:2688;;17344:21;17410:387;17508:22;17556:7;:20;;;17602:17;17651:7;:19;;;193:4:122;17645:25:124;;;;:::i;:::-;17696:7;:23;;;17745:7;:30;;;17410:72;:387::i;:::-;17383:414;-1:-1:-1;17383:414:124;-1:-1:-1;18103:8:124;;:84;;;;;18155:7;:32;;;18135:17;:52;18103:84;18078:335;;;-1:-1:-1;18236:1:124;;18239:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;18078:335::-;18346:7;18341:72;;-1:-1:-1;18385:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;18341:72::-;18439:24;:13;:22;:24::i;17031:2688::-;18797:23;18867:335;18956:22;19004:7;:20;;;19056:7;:19;;;193:4:122;19050:25:124;;;;:::i;:::-;19101:7;:23;;;19150:7;:30;;;18867:63;:335::i;:::-;18838:364;-1:-1:-1;18838:364:124;-1:-1:-1;18838:364:124;19220:72;;-1:-1:-1;19264:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;19220:72::-;19483:177;19526:122;19599:7;:23;;;19547:13;19527:17;:33;;;;:::i;19526:122::-;19484:164;;:15;:164;:::i;16217:3512::-;-1:-1:-1;19747:1:124;;19750:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;10319:9443:124:o;20009:1167::-;20112:6;20970:199;20988:156;21049:7;:32;;;193:4:122;21043:38:124;;;;:::i;:::-;21103:23;;;;20988:24;;;;;:156;:33;:156::i;20970:199::-;20752:203;20770:160;20834:7;:33;;;193:4:122;20828:39:124;;;;:::i;:::-;20889:23;;;;20770:25;;;;;:160;:36;:160::i;20059:343:126:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;:::-;:46;;;;:::i;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;15892:1050:126:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:126;16337:28;193:4:122;16345:13:126;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:122;16379:8:126;:15;16375:293;;16490:26;16503:12;193:4:122;16513:1:126;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:122;16654:1:126;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:126;;-1:-1:-1;;15892:1050:126;;;;;;;;;:::o;3400:3557:124:-;3675:21;3710:22;3746:20;3780:4;3919:19;3942:1;3919:24;3915:117;;-1:-1:-1;3967:14:124;;-1:-1:-1;3983:16:124;;-1:-1:-1;4001:13:124;;-1:-1:-1;4016:4:124;3959:62;;3915:117;4201:21;4253:19;4225:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;4201:71;;4303:32;:21;:30;:32::i;:::-;4286:14;:49;4282:103;;;4359:1;4362;4365;4368:5;4351:23;;;;;;;;;;;4282:103;4418:14;4394:39;;5008:1;4988:16;:21;4984:497;;5121:112;:84;:13;5171:16;5190:14;5121:41;:84::i;:112::-;5103:130;;4984:497;;;5359:111;:83;5407:17;5408:16;5407:17;:::i;:::-;5359:13;;5427:14;5359:39;:83::i;:111::-;5358:112;;;:::i;:::-;5340:130;;4984:497;6183:33;6218:12;6234:143;6315:14;6347:16;6234:63;:143::i;:::-;6182:195;;;;6392:7;6387:62;;6423:1;6426;6429;6432:5;6415:23;;;;;;;;;;;;;6387:62;6458:30;6534:141;6615:13;6646:15;6534:63;:141::i;:::-;6498:177;-1:-1:-1;6498:177:124;-1:-1:-1;6498:177:124;6685:62;;6721:1;6724;6727;6730:5;6713:23;;;;;;;;;;;;;;6685:62;6771:109;:13;6809:22;6845:25;6771:24;:109::i;:::-;6756:124;-1:-1:-1;6945:4:124;;-1:-1:-1;;;;;3400:3557:124;;;;;;;;;;;:::o;7782:341::-;7885:7;7905:20;7927:12;7943:56;7982:7;7943:25;:56::i;:::-;7904:95;;;;8014:7;8009:79;;8044:33;;-1:-1:-1;;;8044:33:124;;;;;;;;;;;44905:1269;45532:28;;;;45109:4;;45532:50;;45567:14;45532:34;:50::i;:::-;45422:27;;;;45400:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;46093:28:124;;;;46028:139;;46139:14;46029:34;1037:3;193:4:122;46029:34:124;:::i;:::-;46028:47;:139;:47;:139::i;:::-;45916:27;;;;45896:48;;:13;;:19;:48::i;:::-;:271;;;44905:1269;-1:-1:-1;;;;44905:1269:124:o;17581:1971:126:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:126;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:21::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:122;18982:15:126;;18978:295;;19096:28;19109:14;193:4:122;19121:1:126;19109:11;:14::i;19096:28::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:122;19259:1:126;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:126;;-1:-1:-1;;;;17581:1971:126;;;;;;;;;;;:::o;42321:1866:124:-;42472:7;42481:4;42763:1;42728:7;:31;;;:36;42724:84;;-1:-1:-1;42788:1:124;;;;-1:-1:-1;42321:1866:124;-1:-1:-1;42321:1866:124:o;42724:84::-;42859:19;42881:49;42903:7;:26;;;42881:21;:49::i;:::-;42859:71;;43073:11;43087:167;43138:7;:27;;;43209:7;:35;;;43179:7;:27;;;:65;;;;:::i;:::-;43087:28;;;;;:167;:37;:167::i;:::-;43073:181;;43284:1;43268:12;:17;43264:411;;43329:3;43313:12;43305:27;43301:304;;;43384:28;;;43264:411;;43301:304;-1:-1:-1;43581:1:124;;;;-1:-1:-1;42321:1866:124;-1:-1:-1;;;42321:1866:124:o;43264:411::-;43650:13;43651:12;43650:13;:::i;:::-;43635:29;;;;:::i;:::-;;;43264:411;43915:31;;;;43838:29;;;;:119;;43890:3;;43838:38;:119::i;:::-;43832:125;;44040:3;44008:7;:29;;;:35;44004:83;;;-1:-1:-1;44067:1:124;;;;-1:-1:-1;42321:1866:124;-1:-1:-1;;;42321:1866:124:o;44004:83::-;44160:3;44128:7;:29;;;:35;44165:4;44120:50;;;;;;42321:1866;;;:::o;52581:5799::-;52797:7;52806:4;52895:20;52944:1;52929:11;:16;52925:670;;52992:26;;:39;;;:78;;53058:11;;52992:78;:::i;:::-;52961:109;;52925:670;;;53101:18;53130:12;53131:11;53130:12;:::i;:::-;53174:26;;:39;;;53101:42;;-1:-1:-1;53161:52:124;;53157:428;;;53304:26;;:39;;;:76;;;;-1:-1:-1;53157:428:124;;;53561:1;53564:5;53553:17;;;;;;;;53157:428;53087:508;52925:670;53984:26;;:40;;54042:42;;;;;53855:30;;;;53903:195;;53984:40;53903:63;:195::i;:::-;53854:244;;;;54113:7;54108:56;;54144:1;54147:5;54136:17;;;;;;;;;54108:56;54656:26;;:38;;;;54587:39;;;;;54173:18;;54474:274;;54526:208;;54587:129;;:39;:43;:129::i;:::-;54526:31;;:39;:208::i;:::-;54474:28;;;;;:34;:274::i;:::-;54410:26;;:38;;;;54256:83;;;;;54194:265;;54256:193;;:132;;54365:22;54256:108;:132::i;:193::-;54194:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;54173:575;;54818:11;54832:185;54882:125;54937:56;54954:7;:26;;;:38;;;54937:12;:16;;:56;;;;:::i;:::-;54882:31;;:37;:125::i;:::-;54832:28;;;;;:36;:185::i;:::-;54818:199;;55044:3;55031:10;:16;55027:64;;;55071:1;55074:5;55063:17;;;;;;;;;;;55027:64;55138:3;55124:17;;;;55381:9;55393:294;55425:22;55461:7;:26;;;:39;;;55520:7;:26;;;:38;;;193:4:122;55514:44:124;;;;:::i;:::-;55572:26;;:42;;;;55628:49;;;;;55393:18;:294::i;:::-;55381:306;;55697:13;55713:84;55749:7;:26;;;:38;;;193:4:122;55743:44:124;;;;:::i;:::-;55713:12;;:16;:84::i;:::-;55697:100;;55815:5;55811:1;:9;55807:201;;;55988:1;55991:5;55980:17;;;;;;;;;;;;;55807:201;56114:26;;:49;;;;56177:42;;;;;56049:9;;;;56086:143;;56049:9;;56086:14;:143::i;:::-;56078:151;;193:4:122;56243:5:124;:12;56239:584;;56454:26;;:38;;;56355:169;;56382:128;;56448:44;;193:4:122;56448:44:124;:::i;:::-;56382:26;;:38;;;;:44;:128::i;56355:169::-;56347:177;;56239:584;;;56742:26;;:38;;;56641:171;;56668:130;;56736:44;;193:4:122;56736:44:124;:::i;:::-;56668:26;;:38;;;;:46;:130::i;56641:171::-;56633:179;;56239:584;56975:26;;:42;;;56923:104;;:10;;56956:5;;56923:19;:104::i;:::-;56910:117;;57087:10;193:4:122;57081:16:124;57077:398;;;57160:10;193:4:122;57154:16:124;57141:29;;57077:398;;;57456:1;57459:4;57448:16;;;;;;;;;;;;;57077:398;57649:1;57614:7;:31;;;:36;57610:728;;57736:29;;;;57680:31;;;;57672:107;;:46;:107::i;:::-;57666:113;;193:4:122;57797:3:124;:10;57793:168;;57937:1;57940:5;57929:17;;;;;;;;;;;;;57793:168;193:4:122;58008:9:124;;;;;58058:23;:10;58008:9;58058:18;:23::i;:::-;58045:36;;57610:728;;;58125:202;58187:126;58262:7;:29;;;58196:7;:31;;;58195:32;;;:::i;58187:126::-;58161:152;;193:4:122;58161:152:124;:::i;:::-;58125:10;;:18;:202::i;:::-;58112:215;;57610:728;-1:-1:-1;58356:10:124;;58368:4;;-1:-1:-1;52581:5799:124;-1:-1:-1;;;;;;;;;52581:5799:124:o;11709:1515:126:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:126;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:122;12549:2:126;:9;12545:263;;12648:20;12655:12;193:4:122;12665:1:126;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:122;12794:1:126;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:126;;-1:-1:-1;;11709:1515:126;;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:122;6666:2:126;:9;6662:261;;6764:20;6771:12;193:4:122;6781:1:126;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:122;6909:1:126;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:126;-1:-1:-1;;;;;;;5576:1765:126:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:126;14607:28;193:4:122;14617:11:126;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:122;14649:9:126;:16;14645:300;;14765:29;14779:14;193:4:122;14791:1:126;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:122;14931:1:126;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:126;-1:-1:-1;;;;;;13859:1409:126:o;3180:392:167:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:167;;3394:4;3359:41;;;8907:51:234;8880:18;;3359:41:167;8761:203:234;3303:108:167;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;20915:352:126:-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;4625:582:167:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;8925:32:234;;5121:24:167;;;8907:51:234;8880:18;;5121:24:167;8761:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:155:234:-;74:5;119:2;110:6;105:3;101:16;97:25;94:45;;;135:1;132;125:12;174:493;279:6;287;295;348:2;336:9;327:7;323:23;319:32;316:52;;;364:1;361;354:12;316:52;400:9;387:23;377:33;;457:2;446:9;442:18;429:32;419:42;;512:2;501:9;497:18;484:32;539:18;531:6;528:30;525:50;;;571:1;568;561:12;525:50;594:67;653:7;644:6;633:9;629:22;594:67;:::i;:::-;584:77;;;174:493;;;;;:::o;854:562::-;968:6;976;984;992;1045:3;1033:9;1024:7;1020:23;1016:33;1013:53;;;1062:1;1059;1052:12;1013:53;1098:9;1085:23;1075:33;;1155:2;1144:9;1140:18;1127:32;1117:42;;1206:2;1195:9;1191:18;1178:32;1168:42;;1261:2;1250:9;1246:18;1233:32;1288:18;1280:6;1277:30;1274:50;;;1320:1;1317;1310:12;1274:50;1343:67;1402:7;1393:6;1382:9;1378:22;1343:67;:::i;:::-;1333:77;;;854:562;;;;;;;:::o;1674:127::-;1735:10;1730:3;1726:20;1723:1;1716:31;1766:4;1763:1;1756:15;1790:4;1787:1;1780:15;1806:168;1879:9;;;1910;;1927:15;;;1921:22;;1907:37;1897:71;;1948:18;;:::i;1979:286::-;2038:6;2091:2;2079:9;2070:7;2066:23;2062:32;2059:52;;;2107:1;2104;2097:12;2059:52;2133:23;;-1:-1:-1;;;;;2185:31:234;;2175:42;;2165:70;;2231:1;2228;2221:12;2270:118;2356:5;2349:13;2342:21;2335:5;2332:32;2322:60;;2378:1;2375;2368:12;2393:241;2449:6;2502:2;2490:9;2481:7;2477:23;2473:32;2470:52;;;2518:1;2515;2508:12;2470:52;2557:9;2544:23;2576:28;2598:5;2576:28;:::i;3117:125::-;3182:9;;;3203:10;;;3200:36;;;3216:18;;:::i;3247:521::-;3324:4;3330:6;3390:11;3377:25;3484:2;3480:7;3469:8;3453:14;3449:29;3445:43;3425:18;3421:68;3411:96;;3503:1;3500;3493:12;3411:96;3530:33;;3582:20;;;-1:-1:-1;3625:18:234;3614:30;;3611:50;;;3657:1;3654;3647:12;3611:50;3690:4;3678:17;;-1:-1:-1;3721:14:234;3717:27;;;3707:38;;3704:58;;;3758:1;3755;3748:12;3983:127;4044:10;4039:3;4035:20;4032:1;4025:31;4075:4;4072:1;4065:15;4099:4;4096:1;4089:15;4115:112;4147:1;4173;4163:35;;4178:18;;:::i;:::-;-1:-1:-1;4212:9:234;;4115:112::o;4232:128::-;4299:9;;;4320:11;;;4317:37;;;4334:18;;:::i;4365:193::-;-1:-1:-1;;;;;4483:10:234;;;4495;;;4479:27;;4518:11;;;4515:37;;;4532:18;;:::i;4563:197::-;-1:-1:-1;;;;;4685:10:234;;;4697;;;4681:27;;4720:11;;;4717:37;;;4734:18;;:::i;4765:200::-;4831:9;;;4804:4;4859:9;;4887:10;;4899:12;;;4883:29;4922:12;;;4914:21;;4880:56;4877:82;;;4939:18;;:::i;5366:200::-;-1:-1:-1;;;;;5502:10:234;;;5490;;;5486:27;;5525:12;;;5522:38;;;5540:18;;:::i;5571:216::-;5635:9;;;5663:11;;;5610:3;5693:9;;5721:10;;5717:19;;5746:10;;5738:19;;5714:44;5711:70;;;5761:18;;:::i;:::-;5711:70;;5571:216;;;;:::o;6071:184::-;6141:6;6194:2;6182:9;6173:7;6169:23;6165:32;6162:52;;;6210:1;6207;6200:12;6162:52;-1:-1:-1;6233:16:234;;6071:184;-1:-1:-1;6071:184:234:o;6260:193::-;6299:1;6325;6315:35;;6330:18;;:::i;:::-;-1:-1:-1;;;6366:18:234;;-1:-1:-1;;6386:13:234;;6362:38;6359:64;;;6403:18;;:::i;:::-;-1:-1:-1;6437:10:234;;6260:193::o;6458:245::-;6556:2;6526:17;;;6545;;;;6522:41;-1:-1:-1;;;;;6578:44:234;;-1:-1:-1;;;;;;6624:49:234;;6575:99;6572:125;;;6677:18;;:::i;6708:213::-;6743:3;6791:5;6787:2;6776:21;-1:-1:-1;;;;;6821:39:234;6812:7;6809:52;6806:78;;6864:18;;:::i;:::-;6904:1;6900:15;;6708:213;-1:-1:-1;;6708:213:234:o;7058:136::-;7093:3;-1:-1:-1;;;7114:22:234;;7111:48;;7139:18;;:::i;:::-;-1:-1:-1;7179:1:234;7175:13;;7058:136::o;7199:361::-;7364:2;7349:18;;7397:1;7386:13;;7376:144;;7442:10;7437:3;7433:20;7430:1;7423:31;7477:4;7474:1;7467:15;7505:4;7502:1;7495:15;7376:144;7529:25;;;7199:361;:::o;8511:245::-;8578:6;8631:2;8619:9;8610:7;8606:23;8602:32;8599:52;;;8647:1;8644;8637:12;8599:52;8679:9;8673:16;8698:28;8720:5;8698:28;:::i;8969:412::-;9098:3;9136:6;9130:13;9161:1;9171:129;9185:6;9182:1;9179:13;9171:129;;;9283:4;9267:14;;;9263:25;;9257:32;9244:11;;;9237:53;9200:12;9171:129;;;-1:-1:-1;9355:1:234;9319:16;;9344:13;;;-1:-1:-1;9319:16:234;8969:412;-1:-1:-1;8969:412:234:o",
        "linkReferences": {},
        "immutableReferences": {
            "17788": [
                {
                    "start": 4224,
                    "length": 32
                },
                {
                    "start": 4321,
                    "length": 32
                }
            ],
            "17792": [
                {
                    "start": 4269,
                    "length": 32
                },
                {
                    "start": 4391,
                    "length": 32
                },
                {
                    "start": 4537,
                    "length": 32
                },
                {
                    "start": 8298,
                    "length": 32
                }
            ],
            "17795": [
                {
                    "start": 2091,
                    "length": 32
                }
            ],
            "17798": [
                {
                    "start": 469,
                    "length": 32
                },
                {
                    "start": 1109,
                    "length": 32
                },
                {
                    "start": 2260,
                    "length": 32
                },
                {
                    "start": 12950,
                    "length": 32
                }
            ],
            "17801": [
                {
                    "start": 502,
                    "length": 32
                },
                {
                    "start": 3212,
                    "length": 32
                },
                {
                    "start": 3351,
                    "length": 32
                },
                {
                    "start": 3641,
                    "length": 32
                },
                {
                    "start": 10658,
                    "length": 32
                }
            ],
            "17804": [
                {
                    "start": 3400,
                    "length": 32
                },
                {
                    "start": 7553,
                    "length": 32
                }
            ],
            "17807": [
                {
                    "start": 2452,
                    "length": 32
                },
                {
                    "start": 3433,
                    "length": 32
                },
                {
                    "start": 5203,
                    "length": 32
                }
            ],
            "17810": [
                {
                    "start": 5247,
                    "length": 32
                },
                {
                    "start": 7621,
                    "length": 32
                }
            ],
            "17813": [
                {
                    "start": 4953,
                    "length": 32
                }
            ],
            "17816": [
                {
                    "start": 435,
                    "length": 32
                },
                {
                    "start": 3246,
                    "length": 32
                },
                {
                    "start": 3318,
                    "length": 32
                },
                {
                    "start": 3608,
                    "length": 32
                },
                {
                    "start": 10544,
                    "length": 32
                }
            ],
            "17819": [
                {
                    "start": 262,
                    "length": 32
                },
                {
                    "start": 349,
                    "length": 32
                },
                {
                    "start": 580,
                    "length": 32
                },
                {
                    "start": 5941,
                    "length": 32
                },
                {
                    "start": 6042,
                    "length": 32
                },
                {
                    "start": 7931,
                    "length": 32
                },
                {
                    "start": 9606,
                    "length": 32
                },
                {
                    "start": 9666,
                    "length": 32
                },
                {
                    "start": 10276,
                    "length": 32
                },
                {
                    "start": 10582,
                    "length": 32
                }
            ],
            "17822": [
                {
                    "start": 907,
                    "length": 32
                },
                {
                    "start": 10620,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpdateLiquidityFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}}},\"title\":\"ERC4626Target3\",\"version\":1},\"userdoc\":{\"errors\":{\"BelowMinimumContribution()\":[{\"notice\":\"Thrown when the initializer doesn't provide sufficient liquidity         to cover the minimum share reserves and the LP shares that are         burned on initialization.\"}],\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolAlreadyInitialized()\":[{\"notice\":\"Thrown when the pool is already initialized and a trader calls         `initialize`. This prevents the pool from being reinitialized         after it has been initialized.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}],\"UpdateLiquidityFailed()\":[{\"notice\":\"Thrown when `LPMath.calculateUpdateLiquidity` fails.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the target3 contract.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"}},\"notice\":\"ERC4626Hyperdrive's target3 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target3.sol\":\"ERC4626Target3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xc6f9ab1fa455f9d3199753c8b089248c93477a17bd1cc275b83b8f69c6577d55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://98dc6cf2efacfd99df9a3dce9ae9ff236db364d907915fbb540b28f12ac45982\",\"dweb:/ipfs/QmRn7R2y6wLgkQg9oqL6qswjAsa6rKqJ1v69ghVnsWToaa\"]},\"contracts/src/instances/erc4626/ERC4626Target3.sol\":{\"keccak256\":\"0xa1d28c97347d7eca95d6ee4e9376daef51027f1f1e658a4c578d817e8491cd4c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cbce93b3181ef499c9fd7f59cba10a0781ab89cf2f024bc93fe92506b183100a\",\"dweb:/ipfs/QmZujKcgCbiysYJBN3A5CUdRKvEUM1iX7YwAkwDGLGqZ3y\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "_config",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IERC20",
                                    "name": "vaultSharesToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "sweepCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressEmptyCode"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressInsufficientBalance"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "BelowMinimumContribution"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DistributeExcessIdleFailed"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpInvalidExponent"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "FailedInnerCall"
                },
                {
                    "inputs": [
                        {
                            "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                            "name": "reason",
                            "type": "uint8"
                        }
                    ],
                    "type": "error",
                    "name": "InsufficientLiquidity"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidPresentValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidTimestamp"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "LnInvalidInput"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MinimumSharePrice"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MinimumTransactionAmount"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "NotPayable"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "OutputLimit"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "PoolAlreadyInitialized"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "PoolIsPaused"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "RestrictedZeroAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "SafeERC20FailedOperation"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "TransferFailed"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt128"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint112"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint128"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UpdateLiquidityFailed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "AddLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "basePayment",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "fees",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CollectGovernanceFee",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "checkpointTime",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedShorts",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedLongs",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CreateCheckpoint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newFeeCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "FeeCollectorUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "apr",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialize",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauseStatusUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newPauser",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauserUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RedeemWithdrawalShares",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RemoveLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Sweep",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newSweepCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SweepCollectorUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_contribution",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_apr",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "initialize",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutput",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "openLong",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "constructor": {
                        "params": {
                            "_config": "The configuration of the Hyperdrive pool."
                        }
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_apr": "The target APR.",
                            "_contribution": "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The initial number of LP shares created."
                        }
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_amount": "The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.",
                            "_minOutput": "The minimum number of bonds to receive.",
                            "_minVaultSharePrice": "The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the bonds.",
                            "_1": "The amount of bonds the user received."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "constructor": {
                        "notice": "Initializes the target3 contract."
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows the first LP to initialize the market with a target APR."
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Opens a long position."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/instances/erc4626/ERC4626Target3.sol": "ERC4626Target3"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget3.sol": {
                "keccak256": "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1",
                "urls": [
                    "bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a",
                    "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Base.sol": {
                "keccak256": "0xc6f9ab1fa455f9d3199753c8b089248c93477a17bd1cc275b83b8f69c6577d55",
                "urls": [
                    "bzz-raw://98dc6cf2efacfd99df9a3dce9ae9ff236db364d907915fbb540b28f12ac45982",
                    "dweb:/ipfs/QmRn7R2y6wLgkQg9oqL6qswjAsa6rKqJ1v69ghVnsWToaa"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Target3.sol": {
                "keccak256": "0xa1d28c97347d7eca95d6ee4e9376daef51027f1f1e658a4c578d817e8491cd4c",
                "urls": [
                    "bzz-raw://cbce93b3181ef499c9fd7f59cba10a0781ab89cf2f024bc93fe92506b183100a",
                    "dweb:/ipfs/QmZujKcgCbiysYJBN3A5CUdRKvEUM1iX7YwAkwDGLGqZ3y"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626.sol": {
                "keccak256": "0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741",
                "urls": [
                    "bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366",
                    "dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d",
                "urls": [
                    "bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603",
                    "dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb",
                "urls": [
                    "bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6",
                    "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d",
                "urls": [
                    "bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2",
                    "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832",
                "urls": [
                    "bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7",
                    "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5",
                "urls": [
                    "bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006",
                    "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4",
                "urls": [
                    "bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e",
                    "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067",
                "urls": [
                    "bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f",
                    "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Target3.sol",
        "id": 8077,
        "exportedSymbols": {
            "ERC4626Base": [
                7910
            ],
            "ERC4626Target3": [
                8076
            ],
            "HyperdriveTarget3": [
                5623
            ],
            "IHyperdrive": [
                10676
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:934:49",
        "nodes": [
            {
                "id": 8053,
                "nodeType": "PragmaDirective",
                "src": "39:23:49",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 8055,
                "nodeType": "ImportDirective",
                "src": "64:73:49",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
                "file": "../../external/HyperdriveTarget3.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8077,
                "sourceUnit": 5624,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8054,
                            "name": "HyperdriveTarget3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5623,
                            "src": "73:17:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8057,
                "nodeType": "ImportDirective",
                "src": "138:63:49",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8077,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8056,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "147:11:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8059,
                "nodeType": "ImportDirective",
                "src": "202:48:49",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8077,
                "sourceUnit": 7911,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8058,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7910,
                            "src": "211:11:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8076,
                "nodeType": "ContractDefinition",
                "src": "697:275:49",
                "nodes": [
                    {
                        "id": 8075,
                        "nodeType": "FunctionDefinition",
                        "src": "876:94:49",
                        "nodes": [],
                        "body": {
                            "id": 8074,
                            "nodeType": "Block",
                            "src": "968:2:49",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 8065,
                            "nodeType": "StructuredDocumentation",
                            "src": "761:110:49",
                            "text": "@notice Initializes the target3 contract.\n @param _config The configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 8071,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8068,
                                        "src": "959:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 8072,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 8070,
                                    "name": "HyperdriveTarget3",
                                    "nameLocations": [
                                        "941:17:49"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5623,
                                    "src": "941:17:49"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "941:26:49"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 8069,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8068,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "927:7:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8075,
                                    "src": "897:37:49",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 8067,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8066,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "897:11:49",
                                                "909:10:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10470,
                                            "src": "897:22:49"
                                        },
                                        "referencedDeclaration": 10470,
                                        "src": "897:22:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "887:53:49"
                        },
                        "returnParameters": {
                            "id": 8073,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "968:0:49"
                        },
                        "scope": 8076,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 8061,
                            "name": "HyperdriveTarget3",
                            "nameLocations": [
                                "724:17:49"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5623,
                            "src": "724:17:49"
                        },
                        "id": 8062,
                        "nodeType": "InheritanceSpecifier",
                        "src": "724:17:49"
                    },
                    {
                        "baseName": {
                            "id": 8063,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "743:11:49"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 7910,
                            "src": "743:11:49"
                        },
                        "id": 8064,
                        "nodeType": "InheritanceSpecifier",
                        "src": "743:11:49"
                    }
                ],
                "canonicalName": "ERC4626Target3",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 8060,
                    "nodeType": "StructuredDocumentation",
                    "src": "252:445:49",
                    "text": "@author DELV\n @title ERC4626Target3\n @notice ERC4626Hyperdrive's target3 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    8076,
                    7910,
                    5623,
                    14459,
                    17765,
                    16295,
                    15361,
                    16779,
                    12819,
                    13995,
                    17990,
                    71674,
                    11205,
                    11777
                ],
                "name": "ERC4626Target3",
                "nameLocation": "706:14:49",
                "scope": 8077,
                "usedErrors": [
                    10538,
                    10541,
                    10553,
                    10574,
                    10580,
                    10583,
                    10586,
                    10589,
                    10595,
                    10598,
                    10601,
                    10604,
                    10607,
                    10618,
                    10621,
                    10630,
                    10633,
                    10636,
                    10639,
                    10645,
                    71049,
                    71330,
                    71335,
                    71338,
                    71619
                ],
                "usedEvents": [
                    11025,
                    11040,
                    11059,
                    11074,
                    11091,
                    11110,
                    11129,
                    11150,
                    11163,
                    11170,
                    11175,
                    11180,
                    11185,
                    11192,
                    11197,
                    11204,
                    11758,
                    11767,
                    11776
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 49
};
