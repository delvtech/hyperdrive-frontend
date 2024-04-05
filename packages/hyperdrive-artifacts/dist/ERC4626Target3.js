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
                    "name": "checkpointVaultSharePrice",
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
        "object": "0x6102406040523480156200001257600080fd5b5060405162004b1238038062004b128339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516146c36200044f60003960005050600050506000818161038b0152612a750152600081816101060152818161015d01528181610244015281816117fb0152818161186001528181611fd7015281816126620152818161269e015281816129000152612a4f0152600081816101b301528181610d7301528181610dbb01528181610edd0152612a290152600061141e0152600081816115440152611ea1015260008181610a4d01528181610e2e0152611518015260008181610e0d0152611e5d0152600081816101f601528181610d5101528181610ddc01528181610efe0152612a9b0152600081816101d5015281816104550152818161098a015261347501526000818161082b015281816108bd0152610922015260008181611172015281816111ec0152818161127e015261214601526000818161114501526111a601526146c36000f3fe6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c3660046142f9565b61007c565b6040519081526020015b60405180910390f35b610067610062366004614349565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105a1565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc86856105da565b909250905061012c7f000000000000000000000000000000000000000000000000000000000000000060026143b9565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a826106b3565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006106dd565b6106b3565b600180546001600160801b03928316600160801b0292169190911790556102686000807f000000000000000000000000000000000000000000000000000000000000000061077c565b610280600061027a60208701876143d0565b8561077c565b61029161028b610824565b8261085f565b50600061029f878387610ce7565b90506102ae60208601866143d0565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c01614407565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105a1565b60008061037688866105da565b909250905060006103878383610d16565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f5610824565b9050610401818461085f565b5060008061040f8686610d2b565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b80600b600082825461044a9190614424565b9091555061047a90507f000000000000000000000000000000000000000000000000000000000000000084614424565b97506104888288878b610f3c565b600061049560018a6110d8565b90506104ae816104a860208d018d6143d0565b8a61077c565b8c8989888d856104c160208301836143d0565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610ce7565b6105028a888861110d565b6105126040880160208901614407565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059f57604051631574f9f360e01b815260040160405180910390fd5b565b60006105b060208301836143d0565b6001600160a01b0316036105d75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105ee6040850160208601614407565b1561061357610609856106046040870187614437565b611135565b909350905061062f565b503461062b856106266040870187614437565b611271565b8492505b6106376112ab565b915080156106aa57604051600090339083908381818185875af1925050503d8060008114610681576040519150601f19603f3d011682016040523d82523d6000602084013e610686565b606091505b50509050806106a8576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000600160801b82106106d957604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806106ee846301e133806112be565b905060006106fc8683610d16565b61070e90670de0b6b3a7640000614424565b9050670de0b6b3a764000081106107425761073b610734670de0b6b3a7640000866112be565b82906112d3565b905061075a565b610757610734670de0b6b3a764000086611348565b90505b61076e81610768898b610d16565b90610d16565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906107ae908490614424565b90915550506000838152600e6020526040812080548392906107d1908490614424565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006108507f000000000000000000000000000000000000000000000000000000000000000042614494565b61085a90426144a8565b905090565b600082815260076020526040812080546001600160801b031615158061088457504284115b1561089a57546001600160801b03169050610ce1565b6000806108a5610824565b90508086036108b657849150610950565b60006108e27f000000000000000000000000000000000000000000000000000000000000000088614424565b90505b6000818152600760205260409020546001600160801b03169250818114801561090c575082155b15610915578592505b8260000361094e576109477f000000000000000000000000000000000000000000000000000000000000000082614424565b90506108e5565b505b610959826106b3565b83546001600160801b0319166001600160801b039190911617835561097d8561135d565b50600090506007816109af7f00000000000000000000000000000000000000000000000000000000000000008a6144a8565b815260208101919091526040016000908120546001600160801b031691506109d86002896110d8565b6000818152600e60205260408120549192508115610b1e57506001600080610a0384878a8e85611501565b9150915080600b6000828254610a199190614424565b909155508c9050610a3685600085610a30816115d0565b856115fa565b610a408284614424565b92508b610a7186858a8d857f0000000000000000000000000000000000000000000000000000000000000000611774565b9350610a85610a808583610d16565b6117be565b60058054600290610aa69084906201000090046001600160701b03166144bb565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ad3846106b3565b60058054601090610af5908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b6000610b2b60018c6110d8565b6000818152600e60205260409020549091508015610c3d57600192508a600080610b58848a8d868a611501565b9150915080600b6000828254610b6e9190614424565b909155508f9050610b8b85600085610b85816115d0565b856117e4565b610b9582846144a8565b9250610ba4610a808486610d16565b60058054600290610bc59084906201000090046001600160701b03166144bb565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bf2836106b3565b60058054601090610c14908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b8215610c7457610c69610c4f856115d0565b610c58836115d0565b610c6291906144fb565b60006119d9565b610c728b611a87565b505b6000610c7f8c611c0c565b50604080518b8152602081018f905290810187905260608101849052608081018290529091508d907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25096985050505050505050505b92915050565b6000610cf96040830160208401614407565b15610d0557508261008c565b610d0f8484610d16565b905061008c565b600061008c8383670de0b6b3a7640000611cfc565b6000806000610d97610d3b611d1a565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611d3b565b91506000610e00610da6611d1a565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d67565b9050610e578684610e52847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d7e565b611de9565b15610e6657610e666002611e2b565b600080610e74888489611e4f565b9092509050610e8382866144a8565b9450610e90818489611cfc565b9350610e9c84896144a8565b9550670de0b6b3a7640000610f2287610eb3611d1a565b610ebd9190614424565b600154610edb908990600160801b90046001600160801b03166144a8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d67565b1115610f3257610f326002611e2b565b5050509250925092565b600254600160801b90046001600160801b0316610f7e61021a82610f68670de0b6b3a7640000866143b9565b6004546001600160801b03169190886001611ecf565b600480546001600160801b0319166001600160801b0392909216919091179055610fa7856106b3565b60018054600090610fc29084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fef846106b3565b60018054601090611011908490600160801b90046001600160801b031661451b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061103e846106b3565b61104890826144db565b600280546001600160801b03808416600160801b0291161790559050600061106f83611f8c565b905061108d8161107e876115d0565b611088908461453b565b6119d9565b61109684611fd0565b6110a4576110a46003611e2b565b60006110af85611a87565b9050806110cf57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111025760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061111f6040830160208401614407565b1561112e57610d0f84846112be565b508261008c565b60008061116d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612030565b6111cd7f000000000000000000000000000000000000000000000000000000000000000061119c876001614424565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061209d565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af115801561123d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112619190614563565b925060009150505b935093915050565b6112a66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612030565b505050565b600061085a670de0b6b3a764000061212d565b600061008c83670de0b6b3a764000084611cfc565b6000816000036112ec5750670de0b6b3a7640000610ce1565b826000036112fc57506000610ce1565b6000611307836115d0565b9050600061131c611317866115d0565b6121b9565b9050818102611333670de0b6b3a76400008261457c565b905061133e816123df565b9695505050505050565b600061008c83670de0b6b3a764000084612574565b6005546000908190611380908490600160801b90046001600160801b0316610d16565b6005546201000090046001600160701b031692509050818111156114fc5760006113aa83836144a8565b90506113b961021a8286611348565b600580546010906113db908490600160801b90046001600160801b031661451b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061141485836112be90919063ffffffff16565b90506000611442827f0000000000000000000000000000000000000000000000000000000000000000610d16565b905080600b60008282546114569190614424565b90915550611466905081836144a8565b9150611471826106b3565b6001805460009061148c9084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114b98261259a565b600380546000906114ce908490600f0b6145aa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061150e87856112be565b9150600061153c837f0000000000000000000000000000000000000000000000000000000000000000610d16565b9050611568817f0000000000000000000000000000000000000000000000000000000000000000610d16565b9150831561158b5761157a82826144a8565b61158490846144a8565b92506115a2565b61159582826144a8565b61159f9084614424565b92505b868610156115c5576115b5838789611cfc565b92506115c2828789611cfc565b91505b509550959350505050565b60006001600160ff1b038211156106d95760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661164361021a82611626670de0b6b3a7640000866143b9565b600454600160801b90046001600160801b031691908a6000611ecf565b600480546001600160801b03928316600160801b029216919091179055611669866106b3565b611673908261451b565b600380546001600160801b03928316600160801b029216919091179055611699846106b3565b600180546000906116b49084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116e1836125c4565b600380546000906116f6908490600f0b6145aa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611726856106b3565b60018054601090611748908490600160801b90046001600160801b031661451b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061178c846117868a888a611cfc565b906112be565b9050611799888486611cfc565b6117a39082614424565b9050868111156117b35786810391505b509695505050505050565b6000600160701b82106106d95760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061182657507f000000000000000000000000000000000000000000000000000000000000000061182485836144a8565b105b15611835576118356003611e2b565b6003549084900390600f0b61184a84826144fb565b905083611856866115d0565b13801561188b57507f00000000000000000000000000000000000000000000000000000000000000006118898383612602565b105b1561189a5761189a6001611e2b565b600254600160801b90046001600160801b03166118dc61021a826118c6670de0b6b3a7640000886143b9565b6004546001600160801b031691908c6000611ecf565b600480546001600160801b0319166001600160801b039290921691909117905561190688826144a8565b9050611911816106b3565b600280546001600160801b03928316600160801b029216919091179055611937836106b3565b600180546001600160801b0319166001600160801b0392909216919091179055611960826125c4565b600380546001600160801b0319166001600160801b0392909216919091179055611989876106b3565b600180546010906119ab908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611a026119e8848361262a565b6119f384600061262a565b6119fd91906144fb565b6125c4565b9050600081600f0b1315611a575760028054829190600090611a2e9084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112a657611a6c816145d7565b60028054600090611a2e9084906001600160801b031661451b565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611ad2916001600160801b0316906144a8565b905080600003611ae55750600192915050565b6000611af084612640565b905080600003611b04575060019392505050565b600080611b128385886126e5565b9150915080611b275750600095945050505050565b600080611b33846127eb565b91509150611b51611b43826115d0565b611b4c906145fd565b6128d3565b925082611b6657506000979650505050505050565b611b6f826106b3565b60068054600090611b8a9084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bb7816106b3565b60068054601090611bd9908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060019650505050505050919050565b600080600080611c23611c1e866129e0565b612b1a565b9150915080611c39575060009485945092505050565b6000808611611c49576000611c53565b611c538387610d16565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611cbe9190614424565b611cc891906144a8565b905080600003611ce15750600096879650945050505050565b6000611ced83836112be565b98600198509650505050505050565b6000826000190484118302158202611d1357600080fd5b5091020490565b60015460035460009161085a916001600160801b0390911690600f0b612602565b6000611d5c878787611d5588670de0b6b3a76400006144a8565b8787612ba7565b979650505050505050565b600061077382611d78858888611cfc565b906112d3565b6000610089611dc5611d9884670de0b6b3a76400006144a8565b611dbf670de0b6b3a7640000611dae818a611348565b611db891906144a8565b8790612c58565b90612c58565b611dd790670de0b6b3a7640000614424565b61178684670de0b6b3a76400006144a8565b600080611e2085611df8611d1a565b611e029190614424565b600154610edb908790600160801b90046001600160801b03166144a8565b909210949350505050565b80604051633c06d78b60e11b8152600401611e469190614619565b60405180910390fd5b600080611e9985611dbf85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611e8f818c611348565b611dbf91906144a8565b9150611ec5827f0000000000000000000000000000000000000000000000000000000000000000610d16565b9050935093915050565b600082600003611ee0575084610773565b8115611f5257611f11611ef38487614424565b611efd8587610d16565b611f07888a610d16565b6117869190614424565b90506000611f1f8588612c6d565b90506000611f2d8689612c7c565b905081831015611f3f57819250611f4b565b80831115611f4b578092505b5050610773565b828503611f6157506000610773565b61133e611f6e84876144a8565b611f788587612c58565b611f82888a610d16565b61178691906144a8565b6000611fb4600e6000611fa06002866110d8565b8152602001908152602001600020546115d0565b611fc6600e6000611fa06001876110d8565b610ce191906144fb565b6000611ffc7f000000000000000000000000000000000000000000000000000000000000000083612c58565b60025461201291906001600160801b0316614424565b600154612028906001600160801b031684610d16565b101592915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526120979186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612c8b565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526120ee8482612cee565b612097576040516001600160a01b0384811660248301526000604483015261212391869182169063095ea7b390606401612065565b6120978482612c8b565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612195573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce19190614563565b60008082136121db5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061225e9084901c6115d0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136123fa57506000919050565b680755bf798b4a1bf1e58212612423576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061133e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115d0565b600082600019048411830215820261258b57600080fd5b50910281810615159190040190565b600060016001607f1b038211156106d95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128015906125e5575060016001607f1b038213155b6106d95760405163a5353be560e01b815260040160405180910390fd5b60008061260f8484612d91565b909250905080612623576126236001611e2b565b5092915050565b6000818313612639578161008c565b5090919050565b600254600090819061265b906001600160801b031684611348565b90506126877f000000000000000000000000000000000000000000000000000000000000000082614424565b6001546001600160801b031611156126df576001547f0000000000000000000000000000000000000000000000000000000000000000906126d29083906001600160801b03166144a8565b6126dc91906144a8565b91505b50919050565b6126ed614234565b6000806126f9846129e0565b9050600061270682612b1a565b935090508261271b5750600091506112699050565b600061274261273d846101600151856101400151610d1690919063ffffffff16565b6115d0565b61276261273d856101200151866101000151612c5890919063ffffffff16565b61276c91906144fb565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806128038560c001518660e00151612d91565b9150915080612819575060009485945092505050565b60006128258684612dcd565b92509050811580612834575080155b1561284757506000958695509350505050565b60006128538783612edc565b90508060000361286c5750600096879650945050505050565b8660600151811161288257969095509350505050565b5060608601516000612895888685612fad565b9050806000036128af575060009788975095505050505050565b8281106128c6575060009788975095505050505050565b9097909650945050505050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806129258787877f00000000000000000000000000000000000000000000000000000000000000008d613312565b9350935093509350806129415750600098975050505050505050565b86841461297257612951846106b3565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146129a357612982836125c4565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146129d1576129b3826106b3565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6129e8614286565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612ae0911661342a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612b129290041661342a565b905292915050565b6000806000806000612b2b866134a0565b9150915080612b4257506000958695509350505050565b612b4f8660a001516115d0565b612b58876137c0565b83612b6689600001516115d0565b612b70919061453b565b612b7a919061453b565b612b8491906144fb565b925050506000811215612b9d5750600093849350915050565b9360019350915050565b600080612bb78888878787613824565b9050612bd185611d78612bca898c614424565b8690610d16565b9750612bde848985611cfc565b975087811015612bf257612bf26000611e2b565b878103670de0b6b3a76400008110612c2057612c19610734670de0b6b3a764000088611348565b9050612c38565b612c35610734670de0b6b3a7640000886112be565b90505b80881015612c4a57612c4a6000611e2b565b909603979650505050505050565b600061008c8383670de0b6b3a7640000612574565b60008183116126df578261008c565b6000818311612639578161008c565b6000612ca06001600160a01b03841683613853565b90508051600014158015612cc5575080806020019051810190612cc39190614641565b155b156112a657604051635274afe760e01b81526001600160a01b0384166004820152602401611e46565b6000806000846001600160a01b031684604051612d0b919061465e565b6000604051808303816000865af19150503d8060008114612d48576040519150601f19603f3d011682016040523d82523d6000602084013e612d4d565b606091505b5091509150818015612d77575080511580612d77575080806020019051810190612d779190614641565b80156107735750505050506001600160a01b03163b151590565b600080600083612da0866115d0565b612daa91906144fb565b90506000811215612dc25760008092509250506106ac565b946001945092505050565b60008060008460a0015112612dea575050608082015160016106ac565b60008460a00151612dfa906145fd565b90506000612e3685876101000151886000015160e00151670de0b6b3a7640000612e2491906144a8565b89516060810151608090910151613861565b93509050821580612e45575080155b15612e58576000809350935050506106ac565b6000612e648383611348565b9050670de0b6b3a76400008111612ea05780670de0b6b3a7640000039450612e998760c0015186610d1690919063ffffffff16565b9450612eaf565b600080945094505050506106ac565b8660800151851115612ece5786608001516001945094505050506106ac565b506001925050509250929050565b600080612f128460c001518560e00151866101000151876000015160a00151612f04886115d0565b612f0d906145fd565b613312565b87516040810192909252602082019290925291909152905080612f39576000915050610ce1565b6000612f488560000151612b1a565b9250905081612f5c57600092505050610ce1565b84602001518110612f7257600092505050610ce1565b600085606001518660400151612f889190614424565b9050612fa382876020015183611cfc9092919063ffffffff16565b61133e90826144a8565b60008084606001518560400151612fc49190614424565b60208601516060870151919250600091612fde9184611cfc565b90508560a00151600003612ff557915061008c9050565b60005b60048110156133085761300b8286612c6d565b915060006130348860c001518960e001518a61010001518b6000015160a00151612f04886115d0565b8b51604081019290925260208201929092529190915290508061305e57600094505050505061008c565b600061306d8960000151612b1a565b92509050816130845760009550505050505061008c565b61308f89828761390d565b1561309b575050613308565b60008960a0015113156131ff57885180516020820151604083015160a084015160e0909401518d946000946130f594909390929091906130e390670de0b6b3a76400006144a8565b87516060810151608090910151613979565b945090508361310e57600097505050505050505061008c565b808260a00151106131fc5761312282613a7e565b90965093508361313c57600097505050505050505061008c565b6131618260c001518360e00151846101000151856000015160a00151612f048b6115d0565b8551604081019290925260208201929092529190915293508361318e57600097505050505050505061008c565b815180516020820151604083015160a0909301518e5160e001516131c09491906130e390670de0b6b3a76400006144a8565b94509050836131d957600097505050505050505061008c565b8a60a0015181116131f3578597505050505050505061008c565b50505050612ff8565b50505b60006132108a8a8c60a00151613b54565b935090508215806132295750670de0b6b3a76400008110155b1561323d576000965050505050505061008c565b80670de0b6b3a7640000039050600061326a61273d8c604001518d60200151612c5890919063ffffffff16565b61327761273d858a610d16565b61328191906144fb565b905060008113156132ab5761329a8761178683856112be565b6132a49087614424565b95506132f9565b60008112156132f05760006132c5886117868581866145fd565b9050868110156132d95780870396506132ea565b60009850505050505050505061008c565b506132f9565b50505050613308565b84600101945050505050612ff8565b5095945050505050565b600080600080846000036133315750879250869150859050600161341e565b60008561333d8b6115d0565b613347919061453b565b9050613352876115d0565b81121561336d5760008060008094509450945094505061341e565b8094506000891261338d5761338661273d868b8d611cfc565b93506133b0565b6133a461273d61339c8b6145fd565b87908d612574565b6133ad906145fd565b93505b6000806133bd8c8c612d91565b91509150806133dc57600080600080965096509650965050505061341e565b60006133e88888612d91565b92509050816134085760008060008097509750975097505050505061341e565b6134138b8285611cfc565b955060019450505050505b95509550955095915050565b600080670de0b6b3a764000061343e610824565b61344891906143b9565b9050808311613458576000613462565b61346281846144a8565b91506126dc613499670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006143b9565b83906112be565b60008060006134c561273d856101600151866101400151610d1690919063ffffffff16565b6134e561273d866101200151876101000151612c5890919063ffffffff16565b6134ef91906144fb565b905060008061350686600001518760200151612d91565b915091508061351d57506000958695509350505050565b600083131561365e576000839050600061356b886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061355c91906144a8565b8d606001518e60800151613979565b9350905082613584575060009788975095505050505050565b8181106136225760006135be858a60400151858c60e00151670de0b6b3a76400006135af91906144a8565b8d606001518e60800151613eae565b94509050831580156135d357508860c0015183105b156135ea5750600098600198509650505050505050565b8361360057506000988998509650505050505050565b613609816115d0565b613612906145fd565b9960019950975050505050505050565b600088602001511261364a576136418860a001518561273d91906144a8565b611ced906145fd565b60a088015188516136419161273d916144a8565b60008312156137b1576000613672846145fd565b905060006136a68489604001518a60e00151670de0b6b3a764000061369791906144a8565b8b606001518c60800151613861565b93509050826136bf575060009788975095505050505050565b8181106137445760006136f9858a60400151858c60e00151670de0b6b3a76400006136ea91906144a8565b8d606001518e60800151613f71565b945090508315801561370e57508860c0015183105b156137255750600098600198509650505050505050565b8361373b57506000988998509650505050505050565b613612816115d0565b6000613776858a604001518b60e00151670de0b6b3a764000061376791906144a8565b8c606001518d60800151614048565b945090508361379057506000988998509650505050505050565b6136126137a78a60600151848661178691906144a8565b61273d9083614424565b50600095600195509350505050565b60006137f361273d836101200151670de0b6b3a76400006137e191906144a8565b60608501516101008601519190612574565b611fc661273d846101600151670de0b6b3a764000061381291906144a8565b60608601516101408701519190611cfc565b600061383085856112d3565b61384961384186611d78868b612c58565b859085612574565b61133e9190614424565b606061008c838360006140f7565b60008060006138738888888888613824565b9050600061389e670de0b6b3a764000061388d88886112be565b6138979190614424565b8390611348565b9050670de0b6b3a764000081106138cb576138c4610734670de0b6b3a764000089611348565b90506138e3565b6138e0610734670de0b6b3a7640000896112be565b90505b808810156138f957600080935093505050613903565b8703925060019150505b9550959350505050565b602083015160009061391f9084611348565b604085015161392f9084906112be565b101580156100895750602084015161395f9084613958633b9aca00670de0b6b3a7640000614424565b9190611cfc565b604085015161396f908490611348565b1115949350505050565b600080600088121561399b5761398e886145fd565b6139989087614424565b95505b6000806139a88b8b612d91565b91509150806139bf57600080935093505050613a72565b60006139ce838b8a8a8a61418a565b905060006139eb6139e38a611d788a8e612c58565b899089612574565b905080821015613a05576000809550955050505050613a72565b808203670de0b6b3a76400008110613a3357613a2c610734670de0b6b3a76400008c6112be565b9050613a4b565b613a48610734670de0b6b3a76400008c611348565b90505b8b811015613a6457600080965096505050505050613a72565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613a9857506000928392509050565b6000613aa784600001516137c0565b90506000613ad3856040015186606001518760400151613ac79190614424565b60208801519190612574565b905060008212613afa5780821015613aed57819003613b10565b5060009485945092505050565b613b03826145fd565b613b0d9082614424565b90505b60e085015160c0860151613b25918390612574565b9050808560c001511015613b40575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b7857855160400151613b71908590614424565b9050613bb3565b6000613b83856145fd565b875160400151909150811015613ba3578651604001518190039150613bb1565b600080935093505050611269565b505b855180516020909101516000918291613bcc9190612d91565b9150915080613be45760008094509450505050611269565b875160e0810151604090910151600091613c1991613c0d91613c0691906112d3565b8a90610d16565b6101008b015190611348565b895160e0810151608090910151613c4491613c3891611d789088610d16565b8b516060015190611348565b613c4e9190614424565b90506000613c86613c7a613c738c6000015160e00151886112d390919063ffffffff16565b8b90612c58565b6101008c0151906112be565b905080821015613ca157600080965096505050505050611269565b80820391506000613ce3858c60000151604001518d6000015160e00151670de0b6b3a7640000613cd191906144a8565b8e516060810151608090910151613824565b90506000613d0d8c6000015160e00151670de0b6b3a7640000613d0691906144a8565b88906112d3565b905080821015613d2a576000809850985050505050505050611269565b8b51608081015160609091015191830391613d46918391612574565b9050670de0b6b3a76400008110613d8a578b5160e00151613d839061073490613d7790670de0b6b3a76400006144a8565b8e5160e0015190611348565b9050613db9565b8b5160e00151613db69061073490613daa90670de0b6b3a76400006144a8565b8e5160e00151906112be565b90505b8b5160600151613dcc9085908390612574565b935083670de0b6b3a76400001115613df05783670de0b6b3a7640000039350613e04565b600060019850985050505050505050611269565b60008c60e0015112613e665760c08c015160e08d0151613e2391611348565b9250670de0b6b3a76400008310613e47576000809850985050505050505050611269565b670de0b6b3a76400009290920391613e5f8484610d16565b9350613e9b565b613e98613e7f8d60c001518e60e00151611786906145fd565b613e9190670de0b6b3a7640000614424565b8590610d16565b93505b50919a60019a5098505050505050505050565b6000806000613ec08989888888613824565b9050613ed086611d78898b614424565b975087811015613ee7576000809250925050613f66565b878103613ef5818688612574565b9050670de0b6b3a76400008110613f2257613f1b610734670de0b6b3a764000089611348565b9050613f3a565b613f37610734670de0b6b3a7640000896112be565b90505b613f448186611348565b9050808a1015613f5c57600080935093505050613f66565b8903925060019150505b965096945050505050565b6000806000613f838989888888613824565b905086881015613f9a576000809250925050613f66565b9686900396613fa988876112d3565b975087811015613fc0576000809250925050613f66565b878103613fce818688612574565b9050670de0b6b3a76400008110613ffb57613ff4610734670de0b6b3a764000089611348565b9050614013565b614010610734670de0b6b3a7640000896112be565b90505b61401d8186611348565b90508981101561403557600080935093505050613f66565b9890980398600198509650505050505050565b600080600061405a888888888861418a565b9050600061407e670de0b6b3a76400006140748888611348565b6134999190614424565b9050670de0b6b3a764000081106140ab576140a4610734670de0b6b3a7640000896112be565b90506140c3565b6140c0610734670de0b6b3a764000089611348565b90505b6140cd81866112be565b9050888110156140e557600080935093505050613903565b97909703976001975095505050505050565b60608147101561411c5760405163cd78605960e01b8152306004820152602401611e46565b600080856001600160a01b03168486604051614138919061465e565b60006040518083038185875af1925050503d8060008114614175576040519150601f19603f3d011682016040523d82523d6000602084013e61417a565b606091505b509150915061133e8683836141af565b600061419685856112d3565b6138496141a786611d78868b610d16565b859085611cfc565b6060826141c4576141bf8261420b565b61008c565b81511580156141db57506001600160a01b0384163b155b1561420457604051639996b31560e01b81526001600160a01b0385166004820152602401611e46565b508061008c565b80511561421b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280614248614286565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156126df57600080fd5b60008060006060848603121561430e57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561433357600080fd5b61433f868287016142e7565b9150509250925092565b6000806000806080858703121561435f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561438b57600080fd5b614397878288016142e7565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610ce157610ce16143a3565b6000602082840312156143e257600080fd5b81356001600160a01b038116811461008c57600080fd5b80151581146105d757600080fd5b60006020828403121561441957600080fd5b813561008c816143f9565b80820180821115610ce157610ce16143a3565b6000808335601e1984360301811261444e57600080fd5b83018035915067ffffffffffffffff82111561446957600080fd5b6020019150368190038213156106ac57600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826144a3576144a361447e565b500690565b81810381811115610ce157610ce16143a3565b6001600160701b03818116838216019080821115612623576126236143a3565b6001600160801b03818116838216019080821115612623576126236143a3565b8181036000831280158383131683831282161715612623576126236143a3565b6001600160801b03828116828216039080821115612623576126236143a3565b808201828112600083128015821682158216171561455b5761455b6143a3565b505092915050565b60006020828403121561457557600080fd5b5051919050565b60008261458b5761458b61447e565b600160ff1b8214600019841416156145a5576145a56143a3565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610ce157610ce16143a3565b600081600f0b60016001607f1b031981036145f4576145f46143a3565b60000392915050565b6000600160ff1b8201614612576146126143a3565b5060000390565b602081016004831061463b57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561465357600080fd5b815161008c816143f9565b6000825160005b8181101561467f5760208186018101518583015201614665565b50600092019182525091905056fea264697066735822122074dbd403b6619ced2a3273d726a3070ad893b281c0d4bb53bd630cc99ade5b8b64736f6c63430008140033",
        "sourceMap": "697:275:49:-:0;;;876:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;;;5345:24;;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;;6632:12;;;;;:18;6620:30;;;6671:12;;:17;;6660:28;;;;6717:12;;-1:-1:-1;6717:25:118;;;;6698:44;;;;6775:12;;-1:-1:-1;6775:29:118;;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;-1:-1:-1;;;;;;7041:32:118;;;;;;;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;7147:22;;;;7129:15;:40;;;;;;;;;;697:275:49;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;697:275:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c3660046142f9565b61007c565b6040519081526020015b60405180910390f35b610067610062366004614349565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105a1565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc86856105da565b909250905061012c7f000000000000000000000000000000000000000000000000000000000000000060026143b9565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a826106b3565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006106dd565b6106b3565b600180546001600160801b03928316600160801b0292169190911790556102686000807f000000000000000000000000000000000000000000000000000000000000000061077c565b610280600061027a60208701876143d0565b8561077c565b61029161028b610824565b8261085f565b50600061029f878387610ce7565b90506102ae60208601866143d0565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c01614407565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105a1565b60008061037688866105da565b909250905060006103878383610d16565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f5610824565b9050610401818461085f565b5060008061040f8686610d2b565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b80600b600082825461044a9190614424565b9091555061047a90507f000000000000000000000000000000000000000000000000000000000000000084614424565b97506104888288878b610f3c565b600061049560018a6110d8565b90506104ae816104a860208d018d6143d0565b8a61077c565b8c8989888d856104c160208301836143d0565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610ce7565b6105028a888861110d565b6105126040880160208901614407565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059f57604051631574f9f360e01b815260040160405180910390fd5b565b60006105b060208301836143d0565b6001600160a01b0316036105d75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105ee6040850160208601614407565b1561061357610609856106046040870187614437565b611135565b909350905061062f565b503461062b856106266040870187614437565b611271565b8492505b6106376112ab565b915080156106aa57604051600090339083908381818185875af1925050503d8060008114610681576040519150601f19603f3d011682016040523d82523d6000602084013e610686565b606091505b50509050806106a8576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000600160801b82106106d957604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806106ee846301e133806112be565b905060006106fc8683610d16565b61070e90670de0b6b3a7640000614424565b9050670de0b6b3a764000081106107425761073b610734670de0b6b3a7640000866112be565b82906112d3565b905061075a565b610757610734670de0b6b3a764000086611348565b90505b61076e81610768898b610d16565b90610d16565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906107ae908490614424565b90915550506000838152600e6020526040812080548392906107d1908490614424565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006108507f000000000000000000000000000000000000000000000000000000000000000042614494565b61085a90426144a8565b905090565b600082815260076020526040812080546001600160801b031615158061088457504284115b1561089a57546001600160801b03169050610ce1565b6000806108a5610824565b90508086036108b657849150610950565b60006108e27f000000000000000000000000000000000000000000000000000000000000000088614424565b90505b6000818152600760205260409020546001600160801b03169250818114801561090c575082155b15610915578592505b8260000361094e576109477f000000000000000000000000000000000000000000000000000000000000000082614424565b90506108e5565b505b610959826106b3565b83546001600160801b0319166001600160801b039190911617835561097d8561135d565b50600090506007816109af7f00000000000000000000000000000000000000000000000000000000000000008a6144a8565b815260208101919091526040016000908120546001600160801b031691506109d86002896110d8565b6000818152600e60205260408120549192508115610b1e57506001600080610a0384878a8e85611501565b9150915080600b6000828254610a199190614424565b909155508c9050610a3685600085610a30816115d0565b856115fa565b610a408284614424565b92508b610a7186858a8d857f0000000000000000000000000000000000000000000000000000000000000000611774565b9350610a85610a808583610d16565b6117be565b60058054600290610aa69084906201000090046001600160701b03166144bb565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ad3846106b3565b60058054601090610af5908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b6000610b2b60018c6110d8565b6000818152600e60205260409020549091508015610c3d57600192508a600080610b58848a8d868a611501565b9150915080600b6000828254610b6e9190614424565b909155508f9050610b8b85600085610b85816115d0565b856117e4565b610b9582846144a8565b9250610ba4610a808486610d16565b60058054600290610bc59084906201000090046001600160701b03166144bb565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bf2836106b3565b60058054601090610c14908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b8215610c7457610c69610c4f856115d0565b610c58836115d0565b610c6291906144fb565b60006119d9565b610c728b611a87565b505b6000610c7f8c611c0c565b50604080518b8152602081018f905290810187905260608101849052608081018290529091508d907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25096985050505050505050505b92915050565b6000610cf96040830160208401614407565b15610d0557508261008c565b610d0f8484610d16565b905061008c565b600061008c8383670de0b6b3a7640000611cfc565b6000806000610d97610d3b611d1a565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611d3b565b91506000610e00610da6611d1a565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d67565b9050610e578684610e52847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d7e565b611de9565b15610e6657610e666002611e2b565b600080610e74888489611e4f565b9092509050610e8382866144a8565b9450610e90818489611cfc565b9350610e9c84896144a8565b9550670de0b6b3a7640000610f2287610eb3611d1a565b610ebd9190614424565b600154610edb908990600160801b90046001600160801b03166144a8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d67565b1115610f3257610f326002611e2b565b5050509250925092565b600254600160801b90046001600160801b0316610f7e61021a82610f68670de0b6b3a7640000866143b9565b6004546001600160801b03169190886001611ecf565b600480546001600160801b0319166001600160801b0392909216919091179055610fa7856106b3565b60018054600090610fc29084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fef846106b3565b60018054601090611011908490600160801b90046001600160801b031661451b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061103e846106b3565b61104890826144db565b600280546001600160801b03808416600160801b0291161790559050600061106f83611f8c565b905061108d8161107e876115d0565b611088908461453b565b6119d9565b61109684611fd0565b6110a4576110a46003611e2b565b60006110af85611a87565b9050806110cf57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111025760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061111f6040830160208401614407565b1561112e57610d0f84846112be565b508261008c565b60008061116d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612030565b6111cd7f000000000000000000000000000000000000000000000000000000000000000061119c876001614424565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061209d565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af115801561123d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112619190614563565b925060009150505b935093915050565b6112a66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612030565b505050565b600061085a670de0b6b3a764000061212d565b600061008c83670de0b6b3a764000084611cfc565b6000816000036112ec5750670de0b6b3a7640000610ce1565b826000036112fc57506000610ce1565b6000611307836115d0565b9050600061131c611317866115d0565b6121b9565b9050818102611333670de0b6b3a76400008261457c565b905061133e816123df565b9695505050505050565b600061008c83670de0b6b3a764000084612574565b6005546000908190611380908490600160801b90046001600160801b0316610d16565b6005546201000090046001600160701b031692509050818111156114fc5760006113aa83836144a8565b90506113b961021a8286611348565b600580546010906113db908490600160801b90046001600160801b031661451b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061141485836112be90919063ffffffff16565b90506000611442827f0000000000000000000000000000000000000000000000000000000000000000610d16565b905080600b60008282546114569190614424565b90915550611466905081836144a8565b9150611471826106b3565b6001805460009061148c9084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114b98261259a565b600380546000906114ce908490600f0b6145aa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061150e87856112be565b9150600061153c837f0000000000000000000000000000000000000000000000000000000000000000610d16565b9050611568817f0000000000000000000000000000000000000000000000000000000000000000610d16565b9150831561158b5761157a82826144a8565b61158490846144a8565b92506115a2565b61159582826144a8565b61159f9084614424565b92505b868610156115c5576115b5838789611cfc565b92506115c2828789611cfc565b91505b509550959350505050565b60006001600160ff1b038211156106d95760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661164361021a82611626670de0b6b3a7640000866143b9565b600454600160801b90046001600160801b031691908a6000611ecf565b600480546001600160801b03928316600160801b029216919091179055611669866106b3565b611673908261451b565b600380546001600160801b03928316600160801b029216919091179055611699846106b3565b600180546000906116b49084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116e1836125c4565b600380546000906116f6908490600f0b6145aa565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611726856106b3565b60018054601090611748908490600160801b90046001600160801b031661451b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061178c846117868a888a611cfc565b906112be565b9050611799888486611cfc565b6117a39082614424565b9050868111156117b35786810391505b509695505050505050565b6000600160701b82106106d95760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061182657507f000000000000000000000000000000000000000000000000000000000000000061182485836144a8565b105b15611835576118356003611e2b565b6003549084900390600f0b61184a84826144fb565b905083611856866115d0565b13801561188b57507f00000000000000000000000000000000000000000000000000000000000000006118898383612602565b105b1561189a5761189a6001611e2b565b600254600160801b90046001600160801b03166118dc61021a826118c6670de0b6b3a7640000886143b9565b6004546001600160801b031691908c6000611ecf565b600480546001600160801b0319166001600160801b039290921691909117905561190688826144a8565b9050611911816106b3565b600280546001600160801b03928316600160801b029216919091179055611937836106b3565b600180546001600160801b0319166001600160801b0392909216919091179055611960826125c4565b600380546001600160801b0319166001600160801b0392909216919091179055611989876106b3565b600180546010906119ab908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611a026119e8848361262a565b6119f384600061262a565b6119fd91906144fb565b6125c4565b9050600081600f0b1315611a575760028054829190600090611a2e9084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112a657611a6c816145d7565b60028054600090611a2e9084906001600160801b031661451b565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611ad2916001600160801b0316906144a8565b905080600003611ae55750600192915050565b6000611af084612640565b905080600003611b04575060019392505050565b600080611b128385886126e5565b9150915080611b275750600095945050505050565b600080611b33846127eb565b91509150611b51611b43826115d0565b611b4c906145fd565b6128d3565b925082611b6657506000979650505050505050565b611b6f826106b3565b60068054600090611b8a9084906001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bb7816106b3565b60068054601090611bd9908490600160801b90046001600160801b03166144db565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060019650505050505050919050565b600080600080611c23611c1e866129e0565b612b1a565b9150915080611c39575060009485945092505050565b6000808611611c49576000611c53565b611c538387610d16565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611cbe9190614424565b611cc891906144a8565b905080600003611ce15750600096879650945050505050565b6000611ced83836112be565b98600198509650505050505050565b6000826000190484118302158202611d1357600080fd5b5091020490565b60015460035460009161085a916001600160801b0390911690600f0b612602565b6000611d5c878787611d5588670de0b6b3a76400006144a8565b8787612ba7565b979650505050505050565b600061077382611d78858888611cfc565b906112d3565b6000610089611dc5611d9884670de0b6b3a76400006144a8565b611dbf670de0b6b3a7640000611dae818a611348565b611db891906144a8565b8790612c58565b90612c58565b611dd790670de0b6b3a7640000614424565b61178684670de0b6b3a76400006144a8565b600080611e2085611df8611d1a565b611e029190614424565b600154610edb908790600160801b90046001600160801b03166144a8565b909210949350505050565b80604051633c06d78b60e11b8152600401611e469190614619565b60405180910390fd5b600080611e9985611dbf85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611e8f818c611348565b611dbf91906144a8565b9150611ec5827f0000000000000000000000000000000000000000000000000000000000000000610d16565b9050935093915050565b600082600003611ee0575084610773565b8115611f5257611f11611ef38487614424565b611efd8587610d16565b611f07888a610d16565b6117869190614424565b90506000611f1f8588612c6d565b90506000611f2d8689612c7c565b905081831015611f3f57819250611f4b565b80831115611f4b578092505b5050610773565b828503611f6157506000610773565b61133e611f6e84876144a8565b611f788587612c58565b611f82888a610d16565b61178691906144a8565b6000611fb4600e6000611fa06002866110d8565b8152602001908152602001600020546115d0565b611fc6600e6000611fa06001876110d8565b610ce191906144fb565b6000611ffc7f000000000000000000000000000000000000000000000000000000000000000083612c58565b60025461201291906001600160801b0316614424565b600154612028906001600160801b031684610d16565b101592915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526120979186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612c8b565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526120ee8482612cee565b612097576040516001600160a01b0384811660248301526000604483015261212391869182169063095ea7b390606401612065565b6120978482612c8b565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612195573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce19190614563565b60008082136121db5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061225e9084901c6115d0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136123fa57506000919050565b680755bf798b4a1bf1e58212612423576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061133e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115d0565b600082600019048411830215820261258b57600080fd5b50910281810615159190040190565b600060016001607f1b038211156106d95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128015906125e5575060016001607f1b038213155b6106d95760405163a5353be560e01b815260040160405180910390fd5b60008061260f8484612d91565b909250905080612623576126236001611e2b565b5092915050565b6000818313612639578161008c565b5090919050565b600254600090819061265b906001600160801b031684611348565b90506126877f000000000000000000000000000000000000000000000000000000000000000082614424565b6001546001600160801b031611156126df576001547f0000000000000000000000000000000000000000000000000000000000000000906126d29083906001600160801b03166144a8565b6126dc91906144a8565b91505b50919050565b6126ed614234565b6000806126f9846129e0565b9050600061270682612b1a565b935090508261271b5750600091506112699050565b600061274261273d846101600151856101400151610d1690919063ffffffff16565b6115d0565b61276261273d856101200151866101000151612c5890919063ffffffff16565b61276c91906144fb565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806128038560c001518660e00151612d91565b9150915080612819575060009485945092505050565b60006128258684612dcd565b92509050811580612834575080155b1561284757506000958695509350505050565b60006128538783612edc565b90508060000361286c5750600096879650945050505050565b8660600151811161288257969095509350505050565b5060608601516000612895888685612fad565b9050806000036128af575060009788975095505050505050565b8281106128c6575060009788975095505050505050565b9097909650945050505050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806129258787877f00000000000000000000000000000000000000000000000000000000000000008d613312565b9350935093509350806129415750600098975050505050505050565b86841461297257612951846106b3565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146129a357612982836125c4565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146129d1576129b3826106b3565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6129e8614286565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612ae0911661342a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612b129290041661342a565b905292915050565b6000806000806000612b2b866134a0565b9150915080612b4257506000958695509350505050565b612b4f8660a001516115d0565b612b58876137c0565b83612b6689600001516115d0565b612b70919061453b565b612b7a919061453b565b612b8491906144fb565b925050506000811215612b9d5750600093849350915050565b9360019350915050565b600080612bb78888878787613824565b9050612bd185611d78612bca898c614424565b8690610d16565b9750612bde848985611cfc565b975087811015612bf257612bf26000611e2b565b878103670de0b6b3a76400008110612c2057612c19610734670de0b6b3a764000088611348565b9050612c38565b612c35610734670de0b6b3a7640000886112be565b90505b80881015612c4a57612c4a6000611e2b565b909603979650505050505050565b600061008c8383670de0b6b3a7640000612574565b60008183116126df578261008c565b6000818311612639578161008c565b6000612ca06001600160a01b03841683613853565b90508051600014158015612cc5575080806020019051810190612cc39190614641565b155b156112a657604051635274afe760e01b81526001600160a01b0384166004820152602401611e46565b6000806000846001600160a01b031684604051612d0b919061465e565b6000604051808303816000865af19150503d8060008114612d48576040519150601f19603f3d011682016040523d82523d6000602084013e612d4d565b606091505b5091509150818015612d77575080511580612d77575080806020019051810190612d779190614641565b80156107735750505050506001600160a01b03163b151590565b600080600083612da0866115d0565b612daa91906144fb565b90506000811215612dc25760008092509250506106ac565b946001945092505050565b60008060008460a0015112612dea575050608082015160016106ac565b60008460a00151612dfa906145fd565b90506000612e3685876101000151886000015160e00151670de0b6b3a7640000612e2491906144a8565b89516060810151608090910151613861565b93509050821580612e45575080155b15612e58576000809350935050506106ac565b6000612e648383611348565b9050670de0b6b3a76400008111612ea05780670de0b6b3a7640000039450612e998760c0015186610d1690919063ffffffff16565b9450612eaf565b600080945094505050506106ac565b8660800151851115612ece5786608001516001945094505050506106ac565b506001925050509250929050565b600080612f128460c001518560e00151866101000151876000015160a00151612f04886115d0565b612f0d906145fd565b613312565b87516040810192909252602082019290925291909152905080612f39576000915050610ce1565b6000612f488560000151612b1a565b9250905081612f5c57600092505050610ce1565b84602001518110612f7257600092505050610ce1565b600085606001518660400151612f889190614424565b9050612fa382876020015183611cfc9092919063ffffffff16565b61133e90826144a8565b60008084606001518560400151612fc49190614424565b60208601516060870151919250600091612fde9184611cfc565b90508560a00151600003612ff557915061008c9050565b60005b60048110156133085761300b8286612c6d565b915060006130348860c001518960e001518a61010001518b6000015160a00151612f04886115d0565b8b51604081019290925260208201929092529190915290508061305e57600094505050505061008c565b600061306d8960000151612b1a565b92509050816130845760009550505050505061008c565b61308f89828761390d565b1561309b575050613308565b60008960a0015113156131ff57885180516020820151604083015160a084015160e0909401518d946000946130f594909390929091906130e390670de0b6b3a76400006144a8565b87516060810151608090910151613979565b945090508361310e57600097505050505050505061008c565b808260a00151106131fc5761312282613a7e565b90965093508361313c57600097505050505050505061008c565b6131618260c001518360e00151846101000151856000015160a00151612f048b6115d0565b8551604081019290925260208201929092529190915293508361318e57600097505050505050505061008c565b815180516020820151604083015160a0909301518e5160e001516131c09491906130e390670de0b6b3a76400006144a8565b94509050836131d957600097505050505050505061008c565b8a60a0015181116131f3578597505050505050505061008c565b50505050612ff8565b50505b60006132108a8a8c60a00151613b54565b935090508215806132295750670de0b6b3a76400008110155b1561323d576000965050505050505061008c565b80670de0b6b3a7640000039050600061326a61273d8c604001518d60200151612c5890919063ffffffff16565b61327761273d858a610d16565b61328191906144fb565b905060008113156132ab5761329a8761178683856112be565b6132a49087614424565b95506132f9565b60008112156132f05760006132c5886117868581866145fd565b9050868110156132d95780870396506132ea565b60009850505050505050505061008c565b506132f9565b50505050613308565b84600101945050505050612ff8565b5095945050505050565b600080600080846000036133315750879250869150859050600161341e565b60008561333d8b6115d0565b613347919061453b565b9050613352876115d0565b81121561336d5760008060008094509450945094505061341e565b8094506000891261338d5761338661273d868b8d611cfc565b93506133b0565b6133a461273d61339c8b6145fd565b87908d612574565b6133ad906145fd565b93505b6000806133bd8c8c612d91565b91509150806133dc57600080600080965096509650965050505061341e565b60006133e88888612d91565b92509050816134085760008060008097509750975097505050505061341e565b6134138b8285611cfc565b955060019450505050505b95509550955095915050565b600080670de0b6b3a764000061343e610824565b61344891906143b9565b9050808311613458576000613462565b61346281846144a8565b91506126dc613499670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006143b9565b83906112be565b60008060006134c561273d856101600151866101400151610d1690919063ffffffff16565b6134e561273d866101200151876101000151612c5890919063ffffffff16565b6134ef91906144fb565b905060008061350686600001518760200151612d91565b915091508061351d57506000958695509350505050565b600083131561365e576000839050600061356b886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061355c91906144a8565b8d606001518e60800151613979565b9350905082613584575060009788975095505050505050565b8181106136225760006135be858a60400151858c60e00151670de0b6b3a76400006135af91906144a8565b8d606001518e60800151613eae565b94509050831580156135d357508860c0015183105b156135ea5750600098600198509650505050505050565b8361360057506000988998509650505050505050565b613609816115d0565b613612906145fd565b9960019950975050505050505050565b600088602001511261364a576136418860a001518561273d91906144a8565b611ced906145fd565b60a088015188516136419161273d916144a8565b60008312156137b1576000613672846145fd565b905060006136a68489604001518a60e00151670de0b6b3a764000061369791906144a8565b8b606001518c60800151613861565b93509050826136bf575060009788975095505050505050565b8181106137445760006136f9858a60400151858c60e00151670de0b6b3a76400006136ea91906144a8565b8d606001518e60800151613f71565b945090508315801561370e57508860c0015183105b156137255750600098600198509650505050505050565b8361373b57506000988998509650505050505050565b613612816115d0565b6000613776858a604001518b60e00151670de0b6b3a764000061376791906144a8565b8c606001518d60800151614048565b945090508361379057506000988998509650505050505050565b6136126137a78a60600151848661178691906144a8565b61273d9083614424565b50600095600195509350505050565b60006137f361273d836101200151670de0b6b3a76400006137e191906144a8565b60608501516101008601519190612574565b611fc661273d846101600151670de0b6b3a764000061381291906144a8565b60608601516101408701519190611cfc565b600061383085856112d3565b61384961384186611d78868b612c58565b859085612574565b61133e9190614424565b606061008c838360006140f7565b60008060006138738888888888613824565b9050600061389e670de0b6b3a764000061388d88886112be565b6138979190614424565b8390611348565b9050670de0b6b3a764000081106138cb576138c4610734670de0b6b3a764000089611348565b90506138e3565b6138e0610734670de0b6b3a7640000896112be565b90505b808810156138f957600080935093505050613903565b8703925060019150505b9550959350505050565b602083015160009061391f9084611348565b604085015161392f9084906112be565b101580156100895750602084015161395f9084613958633b9aca00670de0b6b3a7640000614424565b9190611cfc565b604085015161396f908490611348565b1115949350505050565b600080600088121561399b5761398e886145fd565b6139989087614424565b95505b6000806139a88b8b612d91565b91509150806139bf57600080935093505050613a72565b60006139ce838b8a8a8a61418a565b905060006139eb6139e38a611d788a8e612c58565b899089612574565b905080821015613a05576000809550955050505050613a72565b808203670de0b6b3a76400008110613a3357613a2c610734670de0b6b3a76400008c6112be565b9050613a4b565b613a48610734670de0b6b3a76400008c611348565b90505b8b811015613a6457600080965096505050505050613a72565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613a9857506000928392509050565b6000613aa784600001516137c0565b90506000613ad3856040015186606001518760400151613ac79190614424565b60208801519190612574565b905060008212613afa5780821015613aed57819003613b10565b5060009485945092505050565b613b03826145fd565b613b0d9082614424565b90505b60e085015160c0860151613b25918390612574565b9050808560c001511015613b40575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b7857855160400151613b71908590614424565b9050613bb3565b6000613b83856145fd565b875160400151909150811015613ba3578651604001518190039150613bb1565b600080935093505050611269565b505b855180516020909101516000918291613bcc9190612d91565b9150915080613be45760008094509450505050611269565b875160e0810151604090910151600091613c1991613c0d91613c0691906112d3565b8a90610d16565b6101008b015190611348565b895160e0810151608090910151613c4491613c3891611d789088610d16565b8b516060015190611348565b613c4e9190614424565b90506000613c86613c7a613c738c6000015160e00151886112d390919063ffffffff16565b8b90612c58565b6101008c0151906112be565b905080821015613ca157600080965096505050505050611269565b80820391506000613ce3858c60000151604001518d6000015160e00151670de0b6b3a7640000613cd191906144a8565b8e516060810151608090910151613824565b90506000613d0d8c6000015160e00151670de0b6b3a7640000613d0691906144a8565b88906112d3565b905080821015613d2a576000809850985050505050505050611269565b8b51608081015160609091015191830391613d46918391612574565b9050670de0b6b3a76400008110613d8a578b5160e00151613d839061073490613d7790670de0b6b3a76400006144a8565b8e5160e0015190611348565b9050613db9565b8b5160e00151613db69061073490613daa90670de0b6b3a76400006144a8565b8e5160e00151906112be565b90505b8b5160600151613dcc9085908390612574565b935083670de0b6b3a76400001115613df05783670de0b6b3a7640000039350613e04565b600060019850985050505050505050611269565b60008c60e0015112613e665760c08c015160e08d0151613e2391611348565b9250670de0b6b3a76400008310613e47576000809850985050505050505050611269565b670de0b6b3a76400009290920391613e5f8484610d16565b9350613e9b565b613e98613e7f8d60c001518e60e00151611786906145fd565b613e9190670de0b6b3a7640000614424565b8590610d16565b93505b50919a60019a5098505050505050505050565b6000806000613ec08989888888613824565b9050613ed086611d78898b614424565b975087811015613ee7576000809250925050613f66565b878103613ef5818688612574565b9050670de0b6b3a76400008110613f2257613f1b610734670de0b6b3a764000089611348565b9050613f3a565b613f37610734670de0b6b3a7640000896112be565b90505b613f448186611348565b9050808a1015613f5c57600080935093505050613f66565b8903925060019150505b965096945050505050565b6000806000613f838989888888613824565b905086881015613f9a576000809250925050613f66565b9686900396613fa988876112d3565b975087811015613fc0576000809250925050613f66565b878103613fce818688612574565b9050670de0b6b3a76400008110613ffb57613ff4610734670de0b6b3a764000089611348565b9050614013565b614010610734670de0b6b3a7640000896112be565b90505b61401d8186611348565b90508981101561403557600080935093505050613f66565b9890980398600198509650505050505050565b600080600061405a888888888861418a565b9050600061407e670de0b6b3a76400006140748888611348565b6134999190614424565b9050670de0b6b3a764000081106140ab576140a4610734670de0b6b3a7640000896112be565b90506140c3565b6140c0610734670de0b6b3a764000089611348565b90505b6140cd81866112be565b9050888110156140e557600080935093505050613903565b97909703976001975095505050505050565b60608147101561411c5760405163cd78605960e01b8152306004820152602401611e46565b600080856001600160a01b03168486604051614138919061465e565b60006040518083038185875af1925050503d8060008114614175576040519150601f19603f3d011682016040523d82523d6000602084013e61417a565b606091505b509150915061133e8683836141af565b600061419685856112d3565b6138496141a786611d78868b610d16565b859085611cfc565b6060826141c4576141bf8261420b565b61008c565b81511580156141db57506001600160a01b0384163b155b1561420457604051639996b31560e01b81526001600160a01b0385166004820152602401611e46565b508061008c565b80511561421b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280614248614286565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156126df57600080fd5b60008060006060848603121561430e57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561433357600080fd5b61433f868287016142e7565b9150509250925092565b6000806000806080858703121561435f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561438b57600080fd5b614397878288016142e7565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610ce157610ce16143a3565b6000602082840312156143e257600080fd5b81356001600160a01b038116811461008c57600080fd5b80151581146105d757600080fd5b60006020828403121561441957600080fd5b813561008c816143f9565b80820180821115610ce157610ce16143a3565b6000808335601e1984360301811261444e57600080fd5b83018035915067ffffffffffffffff82111561446957600080fd5b6020019150368190038213156106ac57600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826144a3576144a361447e565b500690565b81810381811115610ce157610ce16143a3565b6001600160701b03818116838216019080821115612623576126236143a3565b6001600160801b03818116838216019080821115612623576126236143a3565b8181036000831280158383131683831282161715612623576126236143a3565b6001600160801b03828116828216039080821115612623576126236143a3565b808201828112600083128015821682158216171561455b5761455b6143a3565b505092915050565b60006020828403121561457557600080fd5b5051919050565b60008261458b5761458b61447e565b600160ff1b8214600019841416156145a5576145a56143a3565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610ce157610ce16143a3565b600081600f0b60016001607f1b031981036145f4576145f46143a3565b60000392915050565b6000600160ff1b8201614612576146126143a3565b5060000390565b602081016004831061463b57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561465357600080fd5b815161008c816143f9565b6000825160005b8181101561467f5760208186018101518583015201614665565b50600092019182525091905056fea264697066735822122074dbd403b6619ced2a3273d726a3070ad893b281c0d4bb53bd630cc99ade5b8b64736f6c63430008140033",
        "sourceMap": "697:275:49:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;1778:227:40;;;;;;:::i;:::-;;:::i;:::-;;;818:25:234;;;806:2;791:18;1778:227:40;;;;;;;;2774:290;;;;;;:::i;:::-;;:::i;:::-;;;;1595:25:234;;;1651:2;1636:18;;1629:34;;;;1568:18;2774:290:40;1421:248:234;1778:227:40;1930:7;1956:42;1968:13;1983:4;1989:8;1956:11;:42::i;:::-;1949:49;;1778:227;;;;;;:::o;2774:290::-;2961:7;2970;2996:61;3006:7;3015:10;3027:19;3048:8;2996:9;:61::i;:::-;2989:68;;;;2774:290;;;;;;;;:::o;1598:3704:114:-;1756:16;2356:21:169;:19;:21::i;:::-;1851:20:114::1;:18;:20::i;:::-;1936:23;1950:8;1936:13;:23::i;:::-;2035:26:::0;;::::1;;2031:100;;;2084:36;;-1:-1:-1::0;;;2084:36:114::1;;;;;;;;;;;2031:100;2259:25;2286:23:::0;2313:67:::1;2335:13;2362:8;2313;:67::i;:::-;2258:122:::0;;-1:-1:-1;2258:122:114;-1:-1:-1;3311:25:114::1;3315:21;3311:1;:25;:::i;:::-;3291:17;:45;3287:121;;;3359:38;;-1:-1:-1::0;;;3359:38:114::1;;;;;;;;;;;3287:121;3564:26:::0;:33;;-1:-1:-1;;3564:33:114::1;3593:4;3564:33;::::0;;3472:1:::1;3476:21;3472:25;3452:45:::0;::::1;::::0;-1:-1:-1;3766:29:114::1;3452:17:::0;3766:27:::1;:29::i;:::-;3737:12;:58:::0;;-1:-1:-1;;;;;;3737:58:114::1;-1:-1:-1::0;;;;;3737:58:114;;;::::1;::::0;;;::::1;::::0;;3833:258:::1;:233;3907:17:::0;3942:23:::1;3983:4:::0;4005:17:::1;4040:12;3833:56;:233::i;:::-;:256;:258::i;:::-;3805:12;:286:::0;;-1:-1:-1;;;;;3805:286:114;;::::1;-1:-1:-1::0;;;3805:286:114::1;::::0;::::1;::::0;;;::::1;::::0;;4596:62:::1;3805:25;::::0;4636:21:::1;4596:5;:62::i;:::-;4668:59;554:1:119;4696:20:114;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4718:8;4668:5;:59::i;:::-;4779:54;4796:19;:17;:19::i;:::-;4817:15;4779:16;:54::i;:::-;;4881:24;4908:112;4946:13;4973:15;5002:8;4908:24;:112::i;:::-;4881:139:::0;-1:-1:-1;5059:20:114::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;5035:234:114::1;;5093:8:::0;5115:16;5166:17;5226:15:::1;::::0;;;::::1;::::0;::::1;;:::i;:::-;5035:234;::::0;;2892:25:234;;;2948:2;2933:18;;2926:34;;;;2976:18;;;2969:34;3046:14;3039:22;3034:2;3019:18;;3012:50;3093:3;3078:19;;3071:35;;;2879:3;2864:19;5035:234:114::1;;;;;;;5280:15;;;2398:20:169::0;1713:1;2924:7;:21;2744:208;1849:3714:115;2086:20;2108;2356:21:169;:19;:21::i;:::-;9562::112;;::::1;::::0;::::1;;;9558:85;;;9606:26;;-1:-1:-1::0;;;9606:26:112::1;;;;;;;;;;;9558:85;2194:20:115::2;:18;:20::i;:::-;2279:23;2293:8;2279:13;:23::i;:::-;2358;2383::::0;2410:61:::2;2432:7;2453:8;2410;:61::i;:::-;2357:114:::0;;-1:-1:-1;2357:114:115;-1:-1:-1;3024:21:115::2;3048:40;2357:114:::0;;3048:23:::2;:40::i;:::-;3024:64;;3118:25;3102:13;:41;3098:117;;;3166:38;;-1:-1:-1::0;;;3166:38:115::2;;;;;;;;;;;3098:117;3246:19;3228:15;:37;3224:106;;;3288:31;;-1:-1:-1::0;;;3288:31:115::2;;;;;;;;;;;3224:106;3373:24;3400:19;:17;:19::i;:::-;3373:46;;3429:51;3446:16;3464:15;3429:16;:51::i;:::-;;3742:26;3778::::0;3917:52:::2;3936:15;3953;3917:18;:52::i;:::-;3814:155:::0;;-1:-1:-1;3814:155:115;;-1:-1:-1;3814:155:115;-1:-1:-1;4029:25:115;;::::2;4025:88;;;4077:25;;-1:-1:-1::0;;;4077:25:115::2;;;;;;;;;;;4025:88;4190:18;4164:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4279:36:115::2;::::0;-1:-1:-1;4298:17:115::2;4279:16:::0;:36:::2;:::i;:::-;4264:51;;4325:137;4353:18;4385:12;4411:15;4440:12;4325:14;:137::i;:::-;4546:15;4564:97;4599:26;4639:12;4564:21;:97::i;:::-;4546:115:::0;-1:-1:-1;4671:50:115::2;4546:115:::0;4686:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4708:12;4671:5;:50::i;:::-;4784:7:::0;4856:12;4933;5013:15;5108:8;5217:7;5184:19:::2;;::::0;::::2;5108:8:::0;5184:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5162:347:115::2;;5238:13;5265:59;5290:6;5298:16;5316:7;5265:24;:59::i;:::-;5354:66;5386:6;5394:16;5412:7;5354:31;:66::i;:::-;5458:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;5162:347;::::0;;2892:25:234;;;2948:2;2933:18;;2926:34;;;;2976:18;;;2969:34;3046:14;3039:22;3034:2;3019:18;;3012:50;3093:3;3078:19;;3071:35;;;2879:3;2864:19;5162:347:115::2;;;;;;;-1:-1:-1::0;5542:13:115;;-1:-1:-1;;;;;;;;;;;2398:20:169;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;4144:145:44:-;4211:9;:14;4207:76;;4248:24;;-1:-1:-1;;;4248:24:44;;;;;;;;;;;4207:76;4144:145::o;8216:221:112:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:112;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:112;;;;;;;;;;;8324:107;8216:221;:::o;1926:1509::-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:112;-1:-1:-1;2202:812:112;;;-1:-1:-1;2553:9:112;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:112;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:112;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;;:::o;884:190:125:-;937:9;-1:-1:-1;;;964:1:125;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:125;;;;;;;;;;;958:86;-1:-1:-1;1065:1:125;884:190::o;8756:1272:123:-;8992:20;;9230:35;:17;9256:8;9230:25;:35::i;:::-;9218:47;-1:-1:-1;9405:13:123;9427:15;:4;9218:47;9427:12;:15::i;:::-;9421:21;;193:4:122;9421:21:123;:::i;:::-;9405:37;;193:4:122;9456:5:123;:12;9452:300;;9563:36;9573:25;193:4:122;9585:12:123;9573:11;:25::i;:::-;9563:5;;:9;:36::i;:::-;9555:44;;9452:300;;;9707:34;9717:23;193:4:122;9727:12:123;9717:9;:23::i;9707:34::-;9699:42;;9452:300;9920:101;10002:5;9920:56;:23;9952;9920:31;:56::i;:::-;:64;;:101::i;:::-;9901:120;;;;8756:1272;;;;;;;;:::o;5934:316:116:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;1595:25:234;;;1651:2;1636:18;;1629:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;1568:18:234;6184:59:116;;;;;;;5934:316;;;:::o;11561:223:112:-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;:::-;11677:100;;11561:223;:::o;2367:8688:113:-;2493:7;2625:51;;;:12;:51;;;;;2703:27;;-1:-1:-1;;;;;2703:27:113;:32;;;:81;;;2769:15;2751;:33;2703:81;2686:168;;;2816:27;-1:-1:-1;;;;;2816:27:113;;-1:-1:-1;2809:34:113;;2686:168;3096:33;3139:24;3166:19;:17;:19::i;:::-;3139:46;;3218:16;3199:15;:35;3195:690;;3278:16;3250:44;;3195:690;;;3347:12;3362:37;3380:19;3362:15;:37;:::i;:::-;3347:52;;3325:550;3523:18;;;;:12;:18;;;;;:34;-1:-1:-1;;;;;3523:34:113;;-1:-1:-1;3600:24:113;;;:58;;;;-1:-1:-1;3628:30:113;;3600:58;3575:187;;;3727:16;3699:44;;3575:187;3783:25;3812:1;3783:30;3837:5;3779:82;3435:27;3443:19;3435:27;;:::i;:::-;;;3325:550;;;;3195:690;3977:37;:25;:35;:37::i;:::-;3947:67;;-1:-1:-1;;;;;;3947:67:113;-1:-1:-1;;;;;3947:67:113;;;;;;;4101:40;4124:16;4101:22;:40::i;:::-;-1:-1:-1;4605:27:113;;-1:-1:-1;4635:12:113;4605:27;4661:35;4679:17;4661:15;:35;:::i;:::-;4635:71;;;;;;;;;;;-1:-1:-1;4635:71:113;;;:87;-1:-1:-1;;;;;4635:87:113;;-1:-1:-1;4755:101:113;4790:27;4831:15;4755:21;:101::i;:::-;4866:27;4896:26;;;:12;:26;;;;;;4732:124;;-1:-1:-1;4966:23:113;;4962:2486;;-1:-1:-1;5180:4:113;5343:21;;5420:237;5467:19;5508;5549:25;5596:16;5343:21;5420:25;:237::i;:::-;5325:332;;;;5697:13;5671:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5749:15:113;;-1:-1:-1;5802:237:113;5836:19;5724:22;5892:13;5923:24;5892:13;5923:22;:24::i;:::-;6011:14;5802:16;:237::i;:::-;6273:30;6290:13;6273:30;;:::i;:::-;;-1:-1:-1;6711:16:113;6781:262;6840:19;6273:30;6908:19;6945:25;6711:16;7021:8;6781:41;:262::i;:::-;6765:278;-1:-1:-1;7278:84:113;:55;6765:278;7317:15;7278:38;:55::i;:::-;:82;:84::i;:::-;7243:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;7243:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7243:119:113;;;;;-1:-1:-1;;;;;7243:119:113;;;;;;7412:25;:13;:23;:25::i;:::-;7376:32;:61;;:32;;:61;;;;-1:-1:-1;;;7376:61:113;;-1:-1:-1;;;;;7376:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7376:61:113;;;;;-1:-1:-1;;;;;7376:61:113;;;;;;4991:2457;;;;4962:2486;7566:19;7588:100;7623:26;7663:15;7588:21;:100::i;:::-;7698:26;7727:25;;;:12;:25;;;;;;7566:122;;-1:-1:-1;7766:22:113;;7762:1716;;7978:4;;-1:-1:-1;8148:16:113;8122:23;;8297:234;8344:18;8384:19;8425:25;8148:16;7978:4;8297:25;:234::i;:::-;8202:329;;;;8571:13;8545:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8623:15:113;;-1:-1:-1;8676:235:113;8709:18;8598:22;8764:13;8795:24;8764:13;8795:22;:24::i;:::-;8883:14;8676:15;:235::i;:::-;9045:30;9062:13;9045:30;;:::i;:::-;;-1:-1:-1;9308:84:113;:55;9045:30;9347:15;9308:38;:55::i;:84::-;9273:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;9273:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9273:119:113;;;;;-1:-1:-1;;;;;9273:119:113;;;;;;9442:25;:13;:23;:25::i;:::-;9406:32;:61;;:32;;:61;;;;-1:-1:-1;;;9406:61:113;;-1:-1:-1;;;;;9406:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9406:61:113;;;;;-1:-1:-1;;;;;9406:61:113;;;;;;7790:1688;;;;7762:1716;9629:15;9625:701;;;9849:132;9918:30;:19;:28;:30::i;:::-;9886:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9966:1;9849:19;:132::i;:::-;10272:43;10298:16;10272:25;:43::i;:::-;;9625:701;10705:20;10731:44;10758:16;10731:26;:44::i;:::-;-1:-1:-1;10790:215:113;;;5229:25:234;;;5285:2;5270:18;;5263:34;;;5313:18;;;5306:34;;;5371:2;5356:18;;5349:34;;;5414:3;5399:19;;5392:35;;;10704:71:113;;-1:-1:-1;10820:15:113;;10790:215;;5216:3:234;5201:19;10790:215:113;;;;;;;-1:-1:-1;11023:25:113;;-1:-1:-1;;;;;;;;;2367:8688:113;;;;;:::o;32807:391:112:-;32976:7;32999:15;;;;;;;;:::i;:::-;32995:197;;;-1:-1:-1;33037:7:112;33030:14;;32995:197;33148:33;:7;33164:16;33148:15;:33::i;:::-;33141:40;;;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;17927:3870:115:-;18085:26;18125:25;18164:26;18386:251;18432:25;:23;:25::i;:::-;18471:12;:25;-1:-1:-1;;;18471:25:115;;-1:-1:-1;;;;;18471:25:115;18510:12;18548;18574:16;18604:23;18386:32;:251::i;:::-;18366:271;;18770:17;18790:184;18837:25;:23;:25::i;:::-;18876:12;:25;-1:-1:-1;;;18876:25:115;;-1:-1:-1;;;;;18876:25:115;18915:23;18952:12;18790:33;:184::i;:::-;18770:204;;19001:270;19038:12;19068:17;19103:154;19169:9;19200;19231:8;19103:44;:154::i;:::-;19001:19;:270::i;:::-;18984:449;;;19296:126;19352:56;19296:38;:126::i;:::-;19609:16;19648:26;19696:130;19739:12;19769:9;19796:16;19696:25;:130::i;:::-;19595:231;;-1:-1:-1;19595:231:115;-1:-1:-1;20022:29:115;19595:231;20022:29;;:::i;:::-;;-1:-1:-1;20596:92:115;:18;20639:9;20662:16;20596:29;:92::i;:::-;20575:113;-1:-1:-1;20947:33:115;20575:113;20947:12;:33;:::i;:::-;20926:54;;193:4:122;21301:245:115;21380:18;21352:25;:23;:25::i;:::-;:46;;;;:::i;:::-;21416:12;:25;:45;;21444:17;;-1:-1:-1;;;21416:25:115;;-1:-1:-1;;;;;21416:25:115;:45;:::i;:::-;21479:23;21520:12;21301:33;:245::i;:::-;:251;21284:430;;;21577:126;21633:56;21577:38;:126::i;:::-;21724:66;;;17927:3870;;;;;:::o;11762:2037::-;12040:29;;-1:-1:-1;;;12040:29:115;;-1:-1:-1;;;;;12040:29:115;12118:304;:279;12040:29;12273:19;193:4:122;12273:13:115;:19;:::i;:::-;12139:36;;-1:-1:-1;;;;;12139:36:115;;12118:279;12343:18;12379:4;12118:102;:279::i;:304::-;12079:36;:343;;-1:-1:-1;;;;;;12079:343:115;-1:-1:-1;;;;;12079:343:115;;;;;;;;;;12570:31;:19;:29;:31::i;:::-;12540:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;12540:61:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12540:61:115;;;;;-1:-1:-1;;;;;12540:61:115;;;;;;12640:30;:18;:28;:30::i;:::-;12611:12;:59;;:25;;:59;;;;-1:-1:-1;;;12611:59:115;;-1:-1:-1;;;;;12611:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12611:59:115;;;;;-1:-1:-1;;;;;12611:59:115;;;;;;12701:30;:18;:28;:30::i;:::-;12680:51;;;;:::i;:::-;12741:29;:49;;-1:-1:-1;;;;;12741:49:115;;;-1:-1:-1;;;12741:49:115;;;;;;12680:51;-1:-1:-1;;12969:30:115;12985:13;12969:15;:30::i;:::-;12945:54;;13009:117;13042:14;13087:29;:18;:27;:29::i;:::-;13070:46;;:14;:46;:::i;:::-;13009:19;:117::i;:::-;13225:28;13236:16;13225:10;:28::i;:::-;13220:186;;13269:126;13325:56;13269:38;:126::i;:::-;13639:12;13654:43;13680:16;13654:25;:43::i;:::-;13639:58;;13712:7;13707:86;;13742:40;;-1:-1:-1;;;13742:40:115;;;;;;;;;;;13707:86;11939:1860;;;11762:2037;;;;:::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;33531:405:112:-;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:112;33905:14;;1321:908:44;1443:7;;1519:129;-1:-1:-1;;;;;1533:10:44;1519:43;1576:10;1608:4;1627:11;1519:43;:129::i;:::-;1930:118;1991:17;2023:15;:11;2037:1;2023:15;:::i;:::-;-1:-1:-1;;;;;1944:10:44;1930:39;;:118;:39;:118::i;:::-;2081:106;;-1:-1:-1;;;2081:106:44;;;;;6038:25:234;;;2172:4:44;6079:18:234;;;6072:60;2058:20:44;;2098:17;-1:-1:-1;;;;;2081:44:44;;;;6011:18:234;;2081:106:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2058:129;-1:-1:-1;2220:1:44;;-1:-1:-1;;1321:908:44;;;;;;;:::o;2347:326::-;2529:137;-1:-1:-1;;;;;2543:17:44;2529:50;2593:10;2625:4;2644:12;2529:50;:137::i;:::-;2347:326;;;:::o;5594:150:112:-;5672:23;5718:19;193:4:122;5718:14:112;:19::i;1884:164:122:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:122:o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;21722:2511:112:-;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:112;;-1:-1:-1;;;;;22081:32:112;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:112;;-1:-1:-1;22022:101:112;-1:-1:-1;22328:39:112;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:112;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:112;;-1:-1:-1;;;;;22834:120:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:112;;;;;-1:-1:-1;;;;;22834:120:112;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:112;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:112;;-1:-1:-1;23856:28:112;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:112;;;;;-1:-1:-1;;;;;23898:62:112;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11726:2452:113:-;11952:21;;12358:37;:11;12378:16;12358:19;:37::i;:::-;12342:53;-1:-1:-1;12405:15:113;12423:31;12342:53;12445:8;12423:21;:31::i;:::-;12405:49;-1:-1:-1;12480:33:113;12405:49;12496:16;12480:15;:33::i;:::-;12464:49;;12940:7;12936:557;;;12980:23;12990:13;12980:7;:23;:::i;:::-;12963:40;;;;:::i;:::-;;;12936:557;;;13459:23;13469:13;13459:7;:23;:::i;:::-;13442:40;;;;:::i;:::-;;;12936:557;13716:20;13692:21;:44;13688:484;;;13831:115;:13;13873:21;13912:20;13831:24;:115::i;:::-;13815:131;-1:-1:-1;14046:115:113;:13;14088:21;14127:20;14046:24;:115::i;:::-;14030:131;;13688:484;11998:2180;11726:2452;;;;;;;;:::o;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;17905:1127:117;18207:30;;-1:-1:-1;;;18207:30:117;;-1:-1:-1;;;;;18207:30:117;18287:300;:275;18207:30;18444:19;193:4:122;18444:13:117;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:117;;-1:-1:-1;;;;;18308:37:117;;;18514:11;18543:5;18287:103;:275::i;:300::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:117;;;-1:-1:-1;;;18247:340:117;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:117;;;-1:-1:-1;;;18652:101:117;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:117;;;;;-1:-1:-1;;;;;18821:61:117;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:117;;-1:-1:-1;;;;;18966:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:117;;;;;-1:-1:-1;;;;;18966:59:117;;;;;;18117:915;17905:1127;;;;;:::o;14667:1674:123:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:123;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:125:-;580:9;-1:-1:-1;;;607:1:125;:12;601:86;;643:33;;-1:-1:-1;;;643:33:125;;;;;;;;;;;14268:3167:115;14652:12;:26;-1:-1:-1;;;;;14652:26:115;14705:35;;;;:110;;-1:-1:-1;14794:21:115;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:115;;-1:-1:-1;;;;;16178:29:115;16256:297;:272;16178:29;16410:19;193:4:122;16410:13:115;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:115;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:115;-1:-1:-1;;;;;16217:336:115;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:115;;;-1:-1:-1;;;16656:60:115;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:115;-1:-1:-1;;;;;17238:54:115;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:115;-1:-1:-1;;;;;17302:57:115;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:115;;-1:-1:-1;;;;;17369:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:115;;;;;-1:-1:-1;;;;;17369:59:115;;;;;;14479:2956;;;14268:3167;;;;;:::o;18678:551:112:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:112;;;;;-1:-1:-1;;;;;19079:43:112;;;;;;2347:326:44;;;:::o;19050:173:112:-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:112;;:::i;21421:1762:114:-;21735:13;:29;-1:-1:-1;;;21514:4:114;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:114;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:114;;21421:1762;-1:-1:-1;;21421:1762:114:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:114;;21421:1762;-1:-1:-1;;;21421:1762:114:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:114;;21421:1762;-1:-1:-1;;;;;21421:1762:114:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22859:47;22881:24;:13;:22;:24::i;:::-;22880:25;;;:::i;:::-;22859:20;:47::i;:::-;22849:57;;22921:7;22916:51;;-1:-1:-1;22951:5:114;;21421:1762;-1:-1:-1;;;;;;;21421:1762:114:o;22916:51::-;23057:36;:24;:34;:36::i;:::-;23024:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;23024:69:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23024:69:114;;;;;-1:-1:-1;;;;;23024:69:114;;;;;;23129:25;:13;:23;:25::i;:::-;23103:13;:51;;:22;;:51;;;;-1:-1:-1;;;23103:51:114;;-1:-1:-1;;;;;23103:51:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23103:51:114;;;;;-1:-1:-1;;;;;23103:51:114;;;;;;23172:4;23165:11;;;;;;;;21421:1762;;;:::o;25409:1358:112:-;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;25409:1358:112:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:112;-1:-1:-1;;;;;26309:29:112;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;25409:1358:112:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;;;25409:1358:112:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;11965:253:112:-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:112;;;;12169:28;;12061:46;:150::i;19247:892:123:-;19510:7;19647:485;19714:23;19755:13;19786:12;20025:18;20031:12;193:4:122;20025:18:123;:::i;:::-;20061:16;20095:23;19647:49;:485::i;:::-;19628:504;19247:892;-1:-1:-1;;;;;;;19247:892:123:o;3330:531::-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;17063:541::-;17220:7;17327:270;17463:120;17547:14;17553:8;193:4:122;17547:14:123;:::i;:::-;17463:52;193:4:122;17479:29:123;193:4:122;17489:18:123;17479:9;:29::i;:::-;:35;;;;:::i;:::-;17463:9;;:15;:52::i;:::-;:58;;:120::i;:::-;17437:146;;193:4:122;17437:146:123;:::i;:::-;17328:14;17334:8;193:4:122;17328:14:123;:::i;17116:683:112:-;17272:4;17497:23;17523:221;17598:16;17570:25;:23;:25::i;:::-;:44;;;;:::i;:::-;17628:12;:25;:43;;17656:15;;-1:-1:-1;;;17628:25:112;;-1:-1:-1;;;;;17628:25:112;:43;:::i;17523:221::-;-1:-1:-1;;;;17116:683:112;-1:-1:-1;;;;17116:683:112:o;317:182:121:-;485:6;451:41;;-1:-1:-1;;;451:41:121;;;;;;;;:::i;:::-;;;;;;;;27287:1651:112;27443:16;;28496:129;28612:12;28496:96;28575:16;28496:96;28545:9;193:4:122;28497:21:112;193:4:122;28507:10:112;28497:9;:21::i;:::-;:27;;;;:::i;28496:129::-;28485:140;-1:-1:-1;28897:34:112;28485:140;28914:16;28897;:34::i;:::-;28876:55;;27287:1651;;;;;;:::o;12712:2102:122:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;12556:675:112:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:112;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:112;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:112:o;1702:188:166:-;1829:53;;-1:-1:-1;;;;;7895:15:234;;;1829:53:166;;;7877:34:234;7947:15;;;7927:18;;;7920:43;7979:18;;;7972:34;;;1802:81:166;;1822:5;;1844:18;;;;;7812::234;;1829:53:166;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:166;;;;;;;;;;;1802:19;:81::i;:::-;1702:188;;;;:::o;3296:380::-;3411:47;;;-1:-1:-1;;;;;8209:32:234;;3411:47:166;;;8191:51:234;8258:18;;;;8251:34;;;3411:47:166;;;;;;;;;;8164:18:234;;;;3411:47:166;;;;;;;;-1:-1:-1;;;;;3411:47:166;-1:-1:-1;;;3411:47:166;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;8209:32:234;;;3561:43:166;;;8191:51:234;3601:1:166;8258:18:234;;;8251:34;3534:71:166;;3554:5;;3576:13;;;;;8164:18:234;;3561:43:166;8017:274:234;3534:71:166;3619:40;3639:5;3646:12;3619:19;:40::i;4450:203:44:-;4580:66;;-1:-1:-1;;;4580:66:44;;;;;818:25:234;;;4542:7:44;;4597:17;-1:-1:-1;;;;;4580:52:44;;;;791:18:234;;4580:66:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;1240:212:125:-;1292:8;-1:-1:-1;;;;;1318:30:125;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:125;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:125;;;;;:46;;-1:-1:-1;;;;;;1718:21:125;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:125;;;;;;;;;;;6050:574:123;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:123;-1:-1:-1;6249:139:123;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;15815:101:122:-;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;;-1:-1:-1;15904:1:122;;15815:101;-1:-1:-1;15815:101:122:o;24513:558:112:-;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:112;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:112;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:112;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:112;:57;:::i;:::-;:97;;;;:::i;:::-;24901:126;;24816:222;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:112;-1:-1:-1;14138:108:112;14256:61;;-1:-1:-1;14300:5:112;;-1:-1:-1;14284:22:112;;-1:-1:-1;14284:22:112;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:112;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15195:32:112;;14809:569;;;;15266:34;;;14809:569;;;;15336:31;;;;14809:569;;;;-1:-1:-1;14809:569:112;;15398:4;;-1:-1:-1;13522:1887:112;-1:-1:-1;13522:1887:112:o;21373:3408:124:-;21492:7;21501;21807:38;21847:12;21863:173;21944:7;:29;;;21991:7;:31;;;21863:63;:173::i;:::-;21806:230;;;;22051:7;22046:52;;-1:-1:-1;22082:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;21373:3408:124:o;22046:52::-;22107:29;22181:109;22229:7;22250:30;22181:34;:109::i;:::-;22146:144;-1:-1:-1;22146:144:124;-1:-1:-1;22304:8:124;;;:38;;-1:-1:-1;22316:26:124;;22304:38;22300:82;;;-1:-1:-1;22366:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;21373:3408:124:o;22300:82::-;22670:32;22705:131;22776:7;22801:21;22705:53;:131::i;:::-;22670:166;;22973:24;23001:1;22973:29;22969:743;;-1:-1:-1;23026:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;21373:3408:124:o;22969:743::-;23307:7;:35;;;23279:24;:63;23262:450;;23375:24;23401:21;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;21373:3408:124:o;23262:450::-;-1:-1:-1;23666:35:124;;;;23971:21;23995:152;24051:7;24072:30;24116:21;23995:42;:152::i;:::-;23971:176;;24161:13;24178:1;24161:18;24157:62;;-1:-1:-1;24203:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;;21373:3408:124:o;24157:62::-;24553:21;24536:13;:38;24532:82;;-1:-1:-1;24598:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;;21373:3408:124:o;24532:82::-;24734:24;;24760:13;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;21373:3408:124:o;23871:1355:114:-;24087:12;:26;24149:28;;23961:4;;-1:-1:-1;;;;;24087:26:114;;;;24149:28;;;-1:-1:-1;;;24211:25:114;;;23961:4;;;;24411:222;24087:26;24149:28;24211:25;24561:21;24600:19;24411:35;:222::i;:::-;24246:387;;;;;;;;24648:7;24643:51;;-1:-1:-1;24678:5:114;;23871:1355;-1:-1:-1;;;;;;;;23871:1355:114:o;24643:51::-;24816:14;24792:20;:38;24788:130;;24875:32;:20;:30;:32::i;:::-;24846:12;:61;;-1:-1:-1;;;;;;24846:61:114;-1:-1:-1;;;;;24846:61:114;;;;;;;;;;24788:130;24957:16;24931:22;:42;24927:137;;25020:33;:22;:31;:33::i;:::-;24989:28;:64;;-1:-1:-1;;;;;;24989:64:114;-1:-1:-1;;;;;24989:64:114;;;;;;;;;;24927:137;25100:13;25077:19;:36;25073:126;;25157:31;:19;:29;:31::i;:::-;25129:12;:59;;-1:-1:-1;;;;;25129:59:114;;;-1:-1:-1;;;25129:59:114;;;;;;;;;25073:126;-1:-1:-1;25215:4:114;;23871:1355;-1:-1:-1;;;;;;;;23871:1355:114:o;15602:1035:112:-;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:112;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:112;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:112;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:112:o;7264:1173:124:-;7371:7;7380:4;7757:19;7801:20;7823:12;7839:65;7883:7;7839:26;:65::i;:::-;7800:104;;;;7923:7;7918:64;;-1:-1:-1;7958:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;;;7264:1173:124:o;7918:64::-;8158:39;:7;:28;;;:37;:39::i;:::-;8109:30;8131:7;8109:21;:30::i;:::-;8077:13;8026:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7995:202;;7786:422;;8339:1;8324:12;:16;8320:64;;;-1:-1:-1;8364:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;8320:64::-;8410:12;8425:4;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;2068:1726:126:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:126;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:126;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3135:6;;;193:4:122;3165:9:126;;3161:261;;3263:20;3270:12;193:4:122;3280:1:126;3270:9;:12::i;3263:20::-;3258:25;;3161:261;;;3389:22;3396:14;193:4:122;3408:1:126;3396:11;:14::i;3389:22::-;3384:27;;3161:261;3495:2;3491:1;:6;3487:166;;;3513:129;3569:59;3513:38;:129::i;:::-;3771:6;;;;2068:1726;-1:-1:-1;;;;;;;2068:1726:126:o;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;15264:104;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;4059:629:166;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;8997:32:234;;4631:40:166;;;8979:51:234;8952:18;;4631:40:166;8833:203:234;5189:578:166;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:166;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:166;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:166;;:30;;;5189:578::o;7273:398:123:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:123;-1:-1:-1;;;7273:398:123:o;45699:3239:124:-;45872:29;45903:12;46092:1;46067:7;:21;;;:26;46063:84;;-1:-1:-1;;46117:12:124;;;;46131:4;46109:27;;46063:84;46156:21;46189:7;:21;;;46188:22;;;:::i;:::-;46156:55;;46460:21;46518:316;46574:31;46619:7;:28;;;46667:7;:26;;;:38;;;193:4:122;46661:44:124;;;;:::i;:::-;46719:26;;:42;;;;46775:49;;;;;46518:42;:316::i;:::-;46491:343;-1:-1:-1;46491:343:124;-1:-1:-1;46848:8:124;;;:30;;-1:-1:-1;46860:18:124;;46848:30;46844:78;;;46902:1;46905:5;46894:17;;;;;;;;46844:78;47945:24;47972:34;:13;47992;47972:19;:34::i;:::-;47945:61;;193:4:122;48189:16:124;:23;48185:453;;48286:16;193:4:122;48280:22:124;48256:46;;48354:90;48401:7;:29;;;48354:21;:29;;:90;;;;:::i;:::-;48330:114;;48185:453;;;48618:1;48621:5;48610:17;;;;;;;;;48185:453;48820:7;:12;;;48796:21;:36;48792:94;;;48856:7;:12;;;48870:4;48848:27;;;;;;;;;48792:94;-1:-1:-1;48926:4:124;;-1:-1:-1;;;45699:3239:124;;;;;:::o;25642:2209::-;25822:7;25921:12;26140:274;26182:7;:29;;;26225:7;:31;;;26270:7;:28;;;26312:7;:26;;;:47;;;26374:30;:19;:28;:30::i;:::-;26373:31;;;:::i;:::-;26140:28;:274::i;:::-;25957:26;;26067:39;;;25943:471;;;;26011:42;;;25943:471;;;;;;;;;-1:-1:-1;25943:471:124;26424:167;;26579:1;26572:8;;;;;26424:167;26600:26;26668:75;26707:7;:26;;;26668:25;:75::i;:::-;26636:107;-1:-1:-1;26636:107:124;-1:-1:-1;26636:107:124;26753:167;;26908:1;26901:8;;;;;;26753:167;27254:7;:28;;;27232:18;:50;27228:89;;27305:1;27298:8;;;;;;27228:89;27566:21;27632:7;:35;;;27590:7;:27;;;:77;;;;:::i;:::-;27566:101;;27724:120;27766:18;27802:7;:28;;;27724:13;:24;;:120;;;;;:::i;:::-;27696:148;;:13;:148;:::i;28733:10660::-;28954:7;29015:21;29081:7;:35;;;29039:7;:27;;;:77;;;;:::i;:::-;29674:28;;;;29614:35;;;;29015:101;;-1:-1:-1;29590:21:124;;29614:125;;29015:101;29614:46;:125::i;:::-;29590:149;;29852:7;:21;;;29877:1;29852:26;29848:77;;29901:13;-1:-1:-1;29894:20:124;;-1:-1:-1;29894:20:124;29848:77;30288:9;30283:9073;871:1;30303;:33;30283:9073;;;30511:41;:13;30529:22;30511:17;:41::i;:::-;30495:57;;30636:12;30879:292;30925:7;:29;;;30972:7;:31;;;31021:7;:28;;;31067:7;:26;;;:47;;;31133:24;:13;:22;:24::i;30879:292::-;30680:26;;30798:39;;;30662:509;;;;30738:42;;;30662:509;;;;;;;;;-1:-1:-1;30662:509:124;31185:268;;31437:1;31430:8;;;;;;;;31185:268;31513:20;31573:83;31616:7;:26;;;31573:25;:83::i;:::-;31547:109;-1:-1:-1;31547:109:124;-1:-1:-1;31547:109:124;31670:265;;31919:1;31912:8;;;;;;;;;31670:265;32039:167;32112:7;32141:12;32175:13;32039:51;:167::i;:::-;32018:241;;;32239:5;;;;32018:241;32509:1;32485:7;:21;;;:25;32481:4509;;;32898:25;;:39;;32963:41;;;;33030:38;;;;33094:46;;;;33172:37;;;;;32694:7;;32651:40;;32809:563;;32898:39;;32963:41;;33030:38;;33094:46;33166:43;;193:4:122;33166:43:124;:::i;:::-;33235:25;;:41;;;;33302:48;;;;;32809:63;:563::i;:::-;32782:590;-1:-1:-1;32782:590:124;-1:-1:-1;32782:590:124;33390:289;;33659:1;33652:8;;;;;;;;;;;33390:289;33890:13;33865:6;:20;;;33857:46;33853:3123;;34171:115;34258:6;34171:61;:115::i;:::-;34074:212;;-1:-1:-1;34074:212:124;-1:-1:-1;34074:212:124;34308:200;;34484:1;34477:8;;;;;;;;;;;34308:200;34920:336;34974:6;:28;;;35028:6;:30;;;35084:6;:27;;;35137:6;:25;;;:46;;;35210:24;:13;:22;:24::i;34920:336::-;34692:25;;34824:38;;;34666:590;;;;34757:41;;;34666:590;;;;;;;;;-1:-1:-1;34666:590:124;35278:200;;35454:1;35447:8;;;;;;;;;;;35278:200;35623:25;;:39;;35692:41;;;;35763:38;;;;35831:46;;;;;35913:26;;:38;;;35526:600;;35763:38;35831:46;35907:44;;193:4:122;35907:44:124;:::i;35526:600::-;35499:627;-1:-1:-1;35499:627:124;-1:-1:-1;35499:627:124;36148:200;;36324:1;36317:8;;;;;;;;;;;36148:200;36671:7;:21;;;36646:13;:47;36642:316;;36728:13;36721:20;;;;;;;;;;;36642:316;36927:8;;;;30283:9073;;36642:316;32512:4478;;32481:4509;37266:18;37368:176;37435:7;37460:31;37509:7;:21;;;37368:49;:176::i;:::-;37298:246;-1:-1:-1;37298:246:124;-1:-1:-1;37562:8:124;;;:29;;;193:4:122;37574:10:124;:17;;37562:29;37558:189;;;37731:1;37724:8;;;;;;;;;;37558:189;37807:10;193:4:122;37801:16:124;37788:29;;38119:12;38199:137;:105;38276:7;:27;;;38199:7;:49;;;:76;;:105;;;;:::i;:137::-;38134:46;:35;:12;38155:13;38134:20;:35::i;:46::-;:202;;;;:::i;:::-;38119:217;;38362:1;38354:5;:9;38350:893;;;38527:57;38570:13;38527:34;38535:5;38550:10;38527:22;:34::i;:57::-;38491:93;;:13;:93;:::i;:::-;38455:129;;38350:893;;;38617:1;38609:5;:9;38605:638;;;38710:14;38727:96;38792:13;38727:35;38751:10;38727:35;38736:5;38735:6;:::i;38727:96::-;38710:113;;38854:13;38845:6;:22;38841:344;;;38959:6;38943:13;:22;38927:38;;38841:344;;;39165:1;39158:8;;;;;;;;;;;;38841:344;38620:579;38605:638;;;39223:5;;;;;;38605:638;39328:3;;;;;30340:9016;;;;30283:9073;;;-1:-1:-1;39373:13:124;28733:10660;-1:-1:-1;;;;;28733:10660:124:o;1846:3557::-;2121:21;2156:22;2192:20;2226:4;2365:19;2388:1;2365:24;2361:117;;-1:-1:-1;2413:14:124;;-1:-1:-1;2429:16:124;;-1:-1:-1;2447:13:124;;-1:-1:-1;2462:4:124;2405:62;;2361:117;2647:21;2699:19;2671:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2647:71;;2749:32;:21;:30;:32::i;:::-;2732:14;:49;2728:103;;;2805:1;2808;2811;2814:5;2797:23;;;;;;;;;;;2728:103;2864:14;2840:39;;3454:1;3434:16;:21;3430:497;;3567:112;:84;:13;3617:16;3636:14;3567:41;:84::i;:112::-;3549:130;;3430:497;;;3805:111;:83;3853:17;3854:16;3853:17;:::i;:::-;3805:13;;3873:14;3805:39;:83::i;:111::-;3804:112;;;:::i;:::-;3786:130;;3430:497;4629:33;4664:12;4680:143;4761:14;4793:16;4680:63;:143::i;:::-;4628:195;;;;4838:7;4833:62;;4869:1;4872;4875;4878:5;4861:23;;;;;;;;;;;;;4833:62;4904:30;4980:141;5061:13;5092:15;4980:63;:141::i;:::-;4944:177;-1:-1:-1;4944:177:124;-1:-1:-1;4944:177:124;5131:62;;5167:1;5170;5173;5176:5;5159:23;;;;;;;;;;;;;;5131:62;5217:109;:13;5255:22;5291:25;5217:24;:109::i;:::-;5202:124;-1:-1:-1;5391:4:124;;-1:-1:-1;;;;;1846:3557:124;;;;;;;;;;;:::o;10998:450:112:-;11097:21;11130:24;193:4:122;11157:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:112;11417:23;193:4:122;11417:17:112;:23;:::i;:::-;11395:13;;:21;:46::i;8765:9443:124:-;8873:6;8881:4;9683:23;9838:130;:102;9906:7;:33;;;9838:7;:42;;;:67;;:102;;;;:::i;:130::-;9709:114;:90;9766:7;:32;;;9709:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9683:285;;9979:30;10011:12;10027:157;10108:7;:21;;;10147:7;:23;;;10027:63;:157::i;:::-;9978:206;;;;10199:7;10194:160;;-1:-1:-1;10334:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;10194:160::-;10603:1;10584:16;:20;10580:7595;;;10620:25;10656:16;10620:53;;10861:21;10923:401;11004:7;:21;;;11047:7;:23;;;11092:7;:20;;;11134:7;:28;;;11190:7;:19;;;193:4:122;11184:25:124;;;;:::i;:::-;11231:7;:23;;;11276:7;:30;;;10923:59;:401::i;:::-;10896:428;-1:-1:-1;10896:428:124;-1:-1:-1;10896:428:124;11338:176;;-1:-1:-1;11490:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;11338:176::-;11691:17;11674:13;:34;11670:2891;;11982:21;12048:389;12148:22;12196:7;:20;;;12242:17;12291:7;:19;;;193:4:122;12285:25:124;;;;:::i;:::-;12336:7;:23;;;12385:7;:30;;;12048:74;:389::i;:::-;12021:416;-1:-1:-1;12021:416:124;-1:-1:-1;12743:8:124;;:84;;;;;12795:7;:32;;;12775:17;:52;12743:84;12718:335;;;-1:-1:-1;12876:1:124;;12879:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12718:335::-;12986:7;12981:72;;-1:-1:-1;13025:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12981:72::-;13080:24;:13;:22;:24::i;:::-;13079:25;;;:::i;:::-;13071:40;13106:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;;8765:9443:124:o;11670:2891::-;13796:1;13769:7;:23;;;:28;13765:782;;13855:95;13881:7;:28;;;13856:22;:53;;;;:::i;13855:95::-;13854:96;;;:::i;13765:782::-;14407:28;;;;14383:21;;14382:94;;14383:52;;;:::i;10580:7595::-;14686:1;14667:16;:20;14663:3512;;;14703:25;14739:17;14740:16;14739:17;:::i;:::-;14703:54;;14874:21;14936:307;15017:22;15061:7;:20;;;15109:7;:19;;;193:4:122;15103:25:124;;;;:::i;:::-;15150:7;:23;;;15195:7;:30;;;14936:59;:307::i;:::-;14909:334;-1:-1:-1;14909:334:124;-1:-1:-1;14909:334:124;15257:64;;-1:-1:-1;15297:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;15257:64::-;15498:17;15481:13;:34;15477:2688;;15790:21;15856:387;15954:22;16002:7;:20;;;16048:17;16097:7;:19;;;193:4:122;16091:25:124;;;;:::i;:::-;16142:7;:23;;;16191:7;:30;;;15856:72;:387::i;:::-;15829:414;-1:-1:-1;15829:414:124;-1:-1:-1;16549:8:124;;:84;;;;;16601:7;:32;;;16581:17;:52;16549:84;16524:335;;;-1:-1:-1;16682:1:124;;16685:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16524:335::-;16792:7;16787:72;;-1:-1:-1;16831:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16787:72::-;16885:24;:13;:22;:24::i;15477:2688::-;17243:23;17313:335;17402:22;17450:7;:20;;;17502:7;:19;;;193:4:122;17496:25:124;;;;:::i;:::-;17547:7;:23;;;17596:7;:30;;;17313:63;:335::i;:::-;17284:364;-1:-1:-1;17284:364:124;-1:-1:-1;17284:364:124;17666:72;;-1:-1:-1;17710:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;17666:72::-;17929:177;17972:122;18045:7;:23;;;17993:13;17973:17;:33;;;;:::i;17972:122::-;17930:164;;:15;:164;:::i;14663:3512::-;-1:-1:-1;18193:1:124;;18196:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;18455:1167::-;18558:6;19416:199;19434:156;19495:7;:32;;;193:4:122;19489:38:124;;;;:::i;:::-;19549:23;;;;19434:24;;;;;:156;:33;:156::i;19416:199::-;19198:203;19216:160;19280:7;:33;;;193:4:122;19274:39:124;;;;:::i;:::-;19335:23;;;;19216:25;;;;;:160;:36;:160::i;20158:343:126:-;20297:7;20486:8;:1;20492;20486:5;:8::i;:::-;20448:35;20459:19;20476:1;20459:12;:2;20468;20459:8;:12::i;:19::-;20448:1;;20480:2;20448:10;:35::i;:::-;:46;;;;:::i;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;15892:1050:126:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:126;16337:28;193:4:122;16345:13:126;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:122;16379:8:126;:15;16375:293;;16490:26;16503:12;193:4:122;16513:1:126;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:122;16654:1:126;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:126;;-1:-1:-1;;15892:1050:126;;;;;;;;;:::o;43668:1269:124:-;44295:28;;;;43872:4;;44295:50;;44330:14;44295:34;:50::i;:::-;44185:27;;;;44163:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;44856:28:124;;;;44791:139;;44902:14;44792:34;1037:3;193:4:122;44792:34:124;:::i;:::-;44791:47;:139;:47;:139::i;:::-;44679:27;;;;44659:48;;:13;;:19;:48::i;:::-;:271;;;43668:1269;-1:-1:-1;;;;43668:1269:124:o;17581:2070:126:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18644:10;18656:12;18672:72;18736:1;18739:4;18672:63;:72::i;:::-;18643:101;;;;18760:7;18755:56;;18791:1;18794:5;18783:17;;;;;;;;18755:56;18820:9;18832:22;18838:2;18842:1;18845;18848;18851:2;18832:5;:22::i;:::-;18820:34;-1:-1:-1;18864:11:126;18878:37;18889:21;18908:1;18889:14;:2;18898:4;18889:8;:14::i;:21::-;18878:1;;18912:2;18878:10;:37::i;:::-;18864:51;;18933:3;18929:1;:7;18925:55;;;18960:1;18963:5;18952:17;;;;;;;;;;18925:55;19050:7;;;193:4:122;19081:15:126;;19077:295;;19195:28;19208:14;193:4:122;19220:1:126;19208:11;:14::i;19195:28::-;19184:39;;19077:295;;;19335:26;19348:12;193:4:122;19358:1:126;19348:9;:12::i;19335:26::-;19324:37;;19077:295;19529:1;19518:8;:12;19514:60;;;19554:1;19557:5;19546:17;;;;;;;;;;;19514:60;19615:12;;;;-1:-1:-1;19629:4:126;;-1:-1:-1;;;;;17581:2070:126;;;;;;;;;;;:::o;41084:1866:124:-;41235:7;41244:4;41526:1;41491:7;:31;;;:36;41487:84;;-1:-1:-1;41551:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;41084:1866:124:o;41487:84::-;41622:19;41644:49;41666:7;:26;;;41644:21;:49::i;:::-;41622:71;;41836:11;41850:167;41901:7;:27;;;41972:7;:35;;;41942:7;:27;;;:65;;;;:::i;:::-;41850:28;;;;;:167;:37;:167::i;:::-;41836:181;;42047:1;42031:12;:17;42027:411;;42092:3;42076:12;42068:27;42064:304;;;42147:28;;;42027:411;;42064:304;-1:-1:-1;42344:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42027:411::-;42413:13;42414:12;42413:13;:::i;:::-;42398:29;;;;:::i;:::-;;;42027:411;42678:31;;;;42601:29;;;;:119;;42653:3;;42601:38;:119::i;:::-;42595:125;;42803:3;42771:7;:29;;;:35;42767:83;;;-1:-1:-1;42830:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42767:83::-;42923:3;42891:7;:29;;;:35;42928:4;42883:50;;;;;;41084:1866;;;:::o;51344:5799::-;51560:7;51569:4;51658:20;51707:1;51692:11;:16;51688:670;;51755:26;;:39;;;:78;;51821:11;;51755:78;:::i;:::-;51724:109;;51688:670;;;51864:18;51893:12;51894:11;51893:12;:::i;:::-;51937:26;;:39;;;51864:42;;-1:-1:-1;51924:52:124;;51920:428;;;52067:26;;:39;;;:76;;;;-1:-1:-1;51920:428:124;;;52324:1;52327:5;52316:17;;;;;;;;51920:428;51850:508;51688:670;52747:26;;:40;;52805:42;;;;;52618:30;;;;52666:195;;52747:40;52666:63;:195::i;:::-;52617:244;;;;52876:7;52871:56;;52907:1;52910:5;52899:17;;;;;;;;;52871:56;53419:26;;:38;;;;53350:39;;;;;52936:18;;53237:274;;53289:208;;53350:129;;:39;:43;:129::i;:::-;53289:31;;:39;:208::i;:::-;53237:28;;;;;:34;:274::i;:::-;53173:26;;:38;;;;53019:83;;;;;52957:265;;53019:193;;:132;;53128:22;53019:108;:132::i;:193::-;52957:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;52936:575;;53581:11;53595:185;53645:125;53700:56;53717:7;:26;;;:38;;;53700:12;:16;;:56;;;;:::i;:::-;53645:31;;:37;:125::i;:::-;53595:28;;;;;:36;:185::i;:::-;53581:199;;53807:3;53794:10;:16;53790:64;;;53834:1;53837:5;53826:17;;;;;;;;;;;53790:64;53901:3;53887:17;;;;54144:9;54156:294;54188:22;54224:7;:26;;;:39;;;54283:7;:26;;;:38;;;193:4:122;54277:44:124;;;;:::i;:::-;54335:26;;:42;;;;54391:49;;;;;54156:18;:294::i;:::-;54144:306;;54460:13;54476:84;54512:7;:26;;;:38;;;193:4:122;54506:44:124;;;;:::i;:::-;54476:12;;:16;:84::i;:::-;54460:100;;54578:5;54574:1;:9;54570:201;;;54751:1;54754:5;54743:17;;;;;;;;;;;;;54570:201;54877:26;;:49;;;;54940:42;;;;;54812:9;;;;54849:143;;54812:9;;54849:14;:143::i;:::-;54841:151;;193:4:122;55006:5:124;:12;55002:584;;55217:26;;:38;;;55118:169;;55145:128;;55211:44;;193:4:122;55211:44:124;:::i;:::-;55145:26;;:38;;;;:44;:128::i;55118:169::-;55110:177;;55002:584;;;55505:26;;:38;;;55404:171;;55431:130;;55499:44;;193:4:122;55499:44:124;:::i;:::-;55431:26;;:38;;;;:46;:130::i;55404:171::-;55396:179;;55002:584;55738:26;;:42;;;55686:104;;:10;;55719:5;;55686:19;:104::i;:::-;55673:117;;55850:10;193:4:122;55844:16:124;55840:398;;;55923:10;193:4:122;55917:16:124;55904:29;;55840:398;;;56219:1;56222:4;56211:16;;;;;;;;;;;;;55840:398;56412:1;56377:7;:31;;;:36;56373:728;;56499:29;;;;56443:31;;;;56435:107;;:46;:107::i;:::-;56429:113;;193:4:122;56560:3:124;:10;56556:168;;56700:1;56703:5;56692:17;;;;;;;;;;;;;56556:168;193:4:122;56771:9:124;;;;;56821:23;:10;56771:9;56821:18;:23::i;:::-;56808:36;;56373:728;;;56888:202;56950:126;57025:7;:29;;;56959:7;:31;;;56958:32;;;:::i;56950:126::-;56924:152;;193:4:122;56924:152:124;:::i;:::-;56888:10;;:18;:202::i;:::-;56875:215;;56373:728;-1:-1:-1;57119:10:124;;57131:4;;-1:-1:-1;51344:5799:124;-1:-1:-1;;;;;;;;;51344:5799:124:o;11709:1515:126:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:126;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:122;12549:2:126;:9;12545:263;;12648:20;12655:12;193:4:122;12665:1:126;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:122;12794:1:126;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:126;;-1:-1:-1;;11709:1515:126;;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:122;6666:2:126;:9;6662:261;;6764:20;6771:12;193:4:122;6781:1:126;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:122;6909:1:126;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:126;-1:-1:-1;;;;;;;5576:1765:126:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:126;14607:28;193:4:122;14617:11:126;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:122;14649:9:126;:16;14645:300;;14765:29;14779:14;193:4:122;14791:1:126;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:122;14931:1:126;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:126;-1:-1:-1;;;;;;13859:1409:126:o;3180:392:167:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:167;;3394:4;3359:41;;;8979:51:234;8952:18;;3359:41:167;8833:203:234;3303:108:167;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;21014:352:126:-;21155:7;21351:8;:1;21357;21351:5;:8::i;:::-;21309:39;21322:21;21341:1;21322:14;:2;21333;21322:10;:14::i;:21::-;21309:1;;21345:2;21309:12;:39::i;4625:582:167:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;8997:32:234;;5121:24:167;;;8979:51:234;8952:18;;5121:24:167;8833:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:155:234:-;74:5;119:2;110:6;105:3;101:16;97:25;94:45;;;135:1;132;125:12;174:493;279:6;287;295;348:2;336:9;327:7;323:23;319:32;316:52;;;364:1;361;354:12;316:52;400:9;387:23;377:33;;457:2;446:9;442:18;429:32;419:42;;512:2;501:9;497:18;484:32;539:18;531:6;528:30;525:50;;;571:1;568;561:12;525:50;594:67;653:7;644:6;633:9;629:22;594:67;:::i;:::-;584:77;;;174:493;;;;;:::o;854:562::-;968:6;976;984;992;1045:3;1033:9;1024:7;1020:23;1016:33;1013:53;;;1062:1;1059;1052:12;1013:53;1098:9;1085:23;1075:33;;1155:2;1144:9;1140:18;1127:32;1117:42;;1206:2;1195:9;1191:18;1178:32;1168:42;;1261:2;1250:9;1246:18;1233:32;1288:18;1280:6;1277:30;1274:50;;;1320:1;1317;1310:12;1274:50;1343:67;1402:7;1393:6;1382:9;1378:22;1343:67;:::i;:::-;1333:77;;;854:562;;;;;;;:::o;1674:127::-;1735:10;1730:3;1726:20;1723:1;1716:31;1766:4;1763:1;1756:15;1790:4;1787:1;1780:15;1806:168;1879:9;;;1910;;1927:15;;;1921:22;;1907:37;1897:71;;1948:18;;:::i;1979:286::-;2038:6;2091:2;2079:9;2070:7;2066:23;2062:32;2059:52;;;2107:1;2104;2097:12;2059:52;2133:23;;-1:-1:-1;;;;;2185:31:234;;2175:42;;2165:70;;2231:1;2228;2221:12;2270:118;2356:5;2349:13;2342:21;2335:5;2332:32;2322:60;;2378:1;2375;2368:12;2393:241;2449:6;2502:2;2490:9;2481:7;2477:23;2473:32;2470:52;;;2518:1;2515;2508:12;2470:52;2557:9;2544:23;2576:28;2598:5;2576:28;:::i;3117:125::-;3182:9;;;3203:10;;;3200:36;;;3216:18;;:::i;3247:521::-;3324:4;3330:6;3390:11;3377:25;3484:2;3480:7;3469:8;3453:14;3449:29;3445:43;3425:18;3421:68;3411:96;;3503:1;3500;3493:12;3411:96;3530:33;;3582:20;;;-1:-1:-1;3625:18:234;3614:30;;3611:50;;;3657:1;3654;3647:12;3611:50;3690:4;3678:17;;-1:-1:-1;3721:14:234;3717:27;;;3707:38;;3704:58;;;3758:1;3755;3748:12;3983:127;4044:10;4039:3;4035:20;4032:1;4025:31;4075:4;4072:1;4065:15;4099:4;4096:1;4089:15;4115:112;4147:1;4173;4163:35;;4178:18;;:::i;:::-;-1:-1:-1;4212:9:234;;4115:112::o;4232:128::-;4299:9;;;4320:11;;;4317:37;;;4334:18;;:::i;4365:193::-;-1:-1:-1;;;;;4483:10:234;;;4495;;;4479:27;;4518:11;;;4515:37;;;4532:18;;:::i;4563:197::-;-1:-1:-1;;;;;4685:10:234;;;4697;;;4681:27;;4720:11;;;4717:37;;;4734:18;;:::i;4765:200::-;4831:9;;;4804:4;4859:9;;4887:10;;4899:12;;;4883:29;4922:12;;;4914:21;;4880:56;4877:82;;;4939:18;;:::i;5438:200::-;-1:-1:-1;;;;;5574:10:234;;;5562;;;5558:27;;5597:12;;;5594:38;;;5612:18;;:::i;5643:216::-;5707:9;;;5735:11;;;5682:3;5765:9;;5793:10;;5789:19;;5818:10;;5810:19;;5786:44;5783:70;;;5833:18;;:::i;:::-;5783:70;;5643:216;;;;:::o;6143:184::-;6213:6;6266:2;6254:9;6245:7;6241:23;6237:32;6234:52;;;6282:1;6279;6272:12;6234:52;-1:-1:-1;6305:16:234;;6143:184;-1:-1:-1;6143:184:234:o;6332:193::-;6371:1;6397;6387:35;;6402:18;;:::i;:::-;-1:-1:-1;;;6438:18:234;;-1:-1:-1;;6458:13:234;;6434:38;6431:64;;;6475:18;;:::i;:::-;-1:-1:-1;6509:10:234;;6332:193::o;6530:245::-;6628:2;6598:17;;;6617;;;;6594:41;-1:-1:-1;;;;;6650:44:234;;-1:-1:-1;;;;;;6696:49:234;;6647:99;6644:125;;;6749:18;;:::i;6780:213::-;6815:3;6863:5;6859:2;6848:21;-1:-1:-1;;;;;6893:39:234;6884:7;6881:52;6878:78;;6936:18;;:::i;:::-;6976:1;6972:15;;6780:213;-1:-1:-1;;6780:213:234:o;7130:136::-;7165:3;-1:-1:-1;;;7186:22:234;;7183:48;;7211:18;;:::i;:::-;-1:-1:-1;7251:1:234;7247:13;;7130:136::o;7271:361::-;7436:2;7421:18;;7469:1;7458:13;;7448:144;;7514:10;7509:3;7505:20;7502:1;7495:31;7549:4;7546:1;7539:15;7577:4;7574:1;7567:15;7448:144;7601:25;;;7271:361;:::o;8583:245::-;8650:6;8703:2;8691:9;8682:7;8678:23;8674:32;8671:52;;;8719:1;8716;8709:12;8671:52;8751:9;8745:16;8770:28;8792:5;8770:28;:::i;9041:412::-;9170:3;9208:6;9202:13;9233:1;9243:129;9257:6;9254:1;9251:13;9243:129;;;9355:4;9339:14;;;9335:25;;9329:32;9316:11;;;9309:53;9272:12;9243:129;;;-1:-1:-1;9427:1:234;9391:16;;9416:13;;;-1:-1:-1;9391:16:234;9041:412;-1:-1:-1;9041:412:234:o",
        "linkReferences": {},
        "immutableReferences": {
            "17691": [
                {
                    "start": 4421,
                    "length": 32
                },
                {
                    "start": 4518,
                    "length": 32
                }
            ],
            "17695": [
                {
                    "start": 4466,
                    "length": 32
                },
                {
                    "start": 4588,
                    "length": 32
                },
                {
                    "start": 4734,
                    "length": 32
                },
                {
                    "start": 8518,
                    "length": 32
                }
            ],
            "17698": [
                {
                    "start": 2091,
                    "length": 32
                },
                {
                    "start": 2237,
                    "length": 32
                },
                {
                    "start": 2338,
                    "length": 32
                }
            ],
            "17701": [
                {
                    "start": 469,
                    "length": 32
                },
                {
                    "start": 1109,
                    "length": 32
                },
                {
                    "start": 2442,
                    "length": 32
                },
                {
                    "start": 13429,
                    "length": 32
                }
            ],
            "17704": [
                {
                    "start": 502,
                    "length": 32
                },
                {
                    "start": 3409,
                    "length": 32
                },
                {
                    "start": 3548,
                    "length": 32
                },
                {
                    "start": 3838,
                    "length": 32
                },
                {
                    "start": 10907,
                    "length": 32
                }
            ],
            "17707": [
                {
                    "start": 3597,
                    "length": 32
                },
                {
                    "start": 7773,
                    "length": 32
                }
            ],
            "17710": [
                {
                    "start": 2637,
                    "length": 32
                },
                {
                    "start": 3630,
                    "length": 32
                },
                {
                    "start": 5400,
                    "length": 32
                }
            ],
            "17713": [
                {
                    "start": 5444,
                    "length": 32
                },
                {
                    "start": 7841,
                    "length": 32
                }
            ],
            "17716": [
                {
                    "start": 5150,
                    "length": 32
                }
            ],
            "17719": [
                {
                    "start": 435,
                    "length": 32
                },
                {
                    "start": 3443,
                    "length": 32
                },
                {
                    "start": 3515,
                    "length": 32
                },
                {
                    "start": 3805,
                    "length": 32
                },
                {
                    "start": 10793,
                    "length": 32
                }
            ],
            "17722": [
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
                    "start": 6139,
                    "length": 32
                },
                {
                    "start": 6240,
                    "length": 32
                },
                {
                    "start": 8151,
                    "length": 32
                },
                {
                    "start": 9826,
                    "length": 32
                },
                {
                    "start": 9886,
                    "length": 32
                },
                {
                    "start": 10496,
                    "length": 32
                },
                {
                    "start": 10831,
                    "length": 32
                }
            ],
            "17725": [
                {
                    "start": 907,
                    "length": 32
                },
                {
                    "start": 10869,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}}},\"title\":\"ERC4626Target3\",\"version\":1},\"userdoc\":{\"errors\":{\"BelowMinimumContribution()\":[{\"notice\":\"Thrown when the initializer doesn't provide sufficient liquidity         to cover the minimum share reserves and the LP shares that are         burned on initialization.\"}],\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolAlreadyInitialized()\":[{\"notice\":\"Thrown when the pool is already initialized and a trader calls         `initialize`. This prevents the pool from being reinitialized         after it has been initialized.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the target3 contract.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"}},\"notice\":\"ERC4626Hyperdrive's target3 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target3.sol\":\"ERC4626Target3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xc6f9ab1fa455f9d3199753c8b089248c93477a17bd1cc275b83b8f69c6577d55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://98dc6cf2efacfd99df9a3dce9ae9ff236db364d907915fbb540b28f12ac45982\",\"dweb:/ipfs/QmRn7R2y6wLgkQg9oqL6qswjAsa6rKqJ1v69ghVnsWToaa\"]},\"contracts/src/instances/erc4626/ERC4626Target3.sol\":{\"keccak256\":\"0xa1d28c97347d7eca95d6ee4e9376daef51027f1f1e658a4c578d817e8491cd4c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cbce93b3181ef499c9fd7f59cba10a0781ab89cf2f024bc93fe92506b183100a\",\"dweb:/ipfs/QmZujKcgCbiysYJBN3A5CUdRKvEUM1iX7YwAkwDGLGqZ3y\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad\",\"dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557\",\"dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c\",\"dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a\",\"dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9\",\"dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                            "name": "checkpointVaultSharePrice",
                            "type": "uint256",
                            "indexed": false
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
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
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
                "keccak256": "0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95",
                "urls": [
                    "bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad",
                    "dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b"
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
                "keccak256": "0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588",
                "urls": [
                    "bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557",
                    "dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976",
                "urls": [
                    "bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c",
                    "dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER"
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
                "keccak256": "0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed",
                "urls": [
                    "bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a",
                    "dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX"
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
                "keccak256": "0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1",
                "urls": [
                    "bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9",
                    "dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh"
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
        "id": 7986,
        "exportedSymbols": {
            "ERC4626Base": [
                7819
            ],
            "ERC4626Target3": [
                7985
            ],
            "HyperdriveTarget3": [
                5532
            ],
            "IHyperdrive": [
                10506
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:934:49",
        "nodes": [
            {
                "id": 7962,
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
                "id": 7964,
                "nodeType": "ImportDirective",
                "src": "64:73:49",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
                "file": "../../external/HyperdriveTarget3.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7986,
                "sourceUnit": 5533,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7963,
                            "name": "HyperdriveTarget3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5532,
                            "src": "73:17:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7966,
                "nodeType": "ImportDirective",
                "src": "138:63:49",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7986,
                "sourceUnit": 10507,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7965,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10506,
                            "src": "147:11:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7968,
                "nodeType": "ImportDirective",
                "src": "202:48:49",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7986,
                "sourceUnit": 7820,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7967,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7819,
                            "src": "211:11:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7985,
                "nodeType": "ContractDefinition",
                "src": "697:275:49",
                "nodes": [
                    {
                        "id": 7984,
                        "nodeType": "FunctionDefinition",
                        "src": "876:94:49",
                        "nodes": [],
                        "body": {
                            "id": 7983,
                            "nodeType": "Block",
                            "src": "968:2:49",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 7974,
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
                                        "id": 7980,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7977,
                                        "src": "959:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 7981,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 7979,
                                    "name": "HyperdriveTarget3",
                                    "nameLocations": [
                                        "941:17:49"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5532,
                                    "src": "941:17:49"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "941:26:49"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 7978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7977,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "927:7:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7984,
                                    "src": "897:37:49",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 7976,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7975,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "897:11:49",
                                                "909:10:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "897:22:49"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "897:22:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "887:53:49"
                        },
                        "returnParameters": {
                            "id": 7982,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "968:0:49"
                        },
                        "scope": 7985,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 7970,
                            "name": "HyperdriveTarget3",
                            "nameLocations": [
                                "724:17:49"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5532,
                            "src": "724:17:49"
                        },
                        "id": 7971,
                        "nodeType": "InheritanceSpecifier",
                        "src": "724:17:49"
                    },
                    {
                        "baseName": {
                            "id": 7972,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "743:11:49"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 7819,
                            "src": "743:11:49"
                        },
                        "id": 7973,
                        "nodeType": "InheritanceSpecifier",
                        "src": "743:11:49"
                    }
                ],
                "canonicalName": "ERC4626Target3",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 7969,
                    "nodeType": "StructuredDocumentation",
                    "src": "252:445:49",
                    "text": "@author DELV\n @title ERC4626Target3\n @notice ERC4626Hyperdrive's target3 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    7985,
                    7819,
                    5532,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609
                ],
                "name": "ERC4626Target3",
                "nameLocation": "706:14:49",
                "scope": 7986,
                "usedErrors": [
                    10368,
                    10371,
                    10383,
                    10410,
                    10413,
                    10416,
                    10419,
                    10425,
                    10428,
                    10431,
                    10434,
                    10437,
                    10448,
                    10451,
                    10460,
                    10463,
                    10466,
                    10469,
                    70940,
                    71221,
                    71226,
                    71229,
                    71510
                ],
                "usedEvents": [
                    10855,
                    10870,
                    10889,
                    10904,
                    10921,
                    10940,
                    10959,
                    10980,
                    10995,
                    11002,
                    11007,
                    11012,
                    11017,
                    11024,
                    11029,
                    11036,
                    11590,
                    11599,
                    11608
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 49
};
