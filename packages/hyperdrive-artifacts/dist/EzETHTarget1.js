export const EzETHTarget1 = {
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
                            "name": "circuitBreakerDelta",
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
                            "name": "checkpointRewarder",
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
                    "name": "__adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
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
            "name": "closeShort",
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
                    "name": "amount",
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
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
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
    bytecode: '0x6102c060405234801562000011575f80fd5b50604051620042303803806200423083398101604081905262000034916200022a565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000141919062000376565b6001600160a01b03166102a052506200039b92505050565b60405161020081016001600160401b03811182821017156200018957634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b0381168114620001a4575f80fd5b50565b8051620001b4816200018f565b919050565b5f60808284031215620001ca575f80fd5b604051608081016001600160401b0381118282101715620001f957634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a08112156200023f575f80fd5b610260808212156200024f575f80fd5b6200025962000159565b91506200026686620001a7565b82526200027660208701620001a7565b60208301526200028960408701620001a7565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002f4818801620001a7565b9083015261018062000308878201620001a7565b908301526101a06200031c878201620001a7565b908301526101c062000330878201620001a7565b908301526101e06200034588888301620001b9565b81840152508194506200035a818701620001a7565b935050506200036d6102808501620001a7565b90509250925092565b5f6020828403121562000387575f80fd5b815162000394816200018f565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613cd8620005585f395f8181611970015261254601525f8181611991015261256701525f50505f50505f610b2e01525f50505f818160a9015281816103140152612d1b01525f818161139301528181611791015281816117f4015281816129040152818161294001528181612b380152612cf501525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612ccf01525f611b1c01525f8181611c3d0152818161227e01526122f601525f81816108a901528181610f4301528181611c1101526122ca01525f8181610e3e015261224401525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612d4101525f81816107e701528181610ec4015281816116ef0152818161211d015261336c01525f81816105b2015281816106290152818161069d0152818161076801526107a001525f81816119b20152818161258801526125ed01525f5050613cd85ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b6100463660046135fc565b610070565b60405190815260200160405180910390f35b61004b61006b3660046135fc565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f828254610175919061366a565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc908361367d565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b60208301836136b0565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a016136d8565b6102bd8a6102b78d8f61366a565b90611584565b8d6102cb60408c018c6136f3565b6040516102df98979695949392919061375e565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf919061366a565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc90836137a5565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b660208301836136b0565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a016136d8565b8a61050260408b018b6136f3565b60405161051597969594939291906137cc565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a60208301836136b0565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f00000000000000000000000000000000000000000000000000000000000000006119d7565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b61366a565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d76119ec565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a0c565b92505b5061073e83611a22565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b61380c565b8a8461102b565b6107d2896107cc6107c57f00000000000000000000000000000000000000000000000000000000000000008361366a565b4290611a4b565b8461102b565b6107db88611a5f565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d61380c565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611bfc565b915091508060095f828254610878919061366a565b909155506108939050865f8461088d81611321565b88611164565b61089d818361366a565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cc9565b91506108e16108dc8385611584565b611d12565b600680546002906109029084906201000090046001600160701b031661381f565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f82611a22565b60068054601090610951908490600160801b90046001600160801b031661383f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611bfc565b915091508060095f8282546109c4919061366a565b909155506109df9050835f846109d981611321565b8a61177a565b6109e9818361380c565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b031661381f565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a4682611a22565b60068054601090610a68908490600160801b90046001600160801b031661383f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab4919061367d565b5f61134e565b8e610ac58482611d3b565b50505b5f610ad284611f2a565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac919061385f565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061206c565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf190849061380c565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d536119ec565b90505f610d5f8a6120f2565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612141565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a0c565b9550610e67858c610e62897f00000000000000000000000000000000000000000000000000000000000000006121b0565b6121df565b15610e7457610e746113ec565b5f805f610e8385878b87612220565b9c5091945092509050610e96818461380c565b610ea0908961366a565b9750610eac828461366a565b610eb6908d61366a565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee919061380c565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611cc9565b9950610f73878a61380c565b9850670de0b6b3a7640000610ff0610f8b878761366a565b600254610fa9908f90600160801b90046001600160801b031661380c565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a0c565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f612332565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e83611a22565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c7888661380c565b6110d1919061387a565b85670de0b6b3a76400006110e5878a61380c565b6110ef919061387a565b8592919060016123ce565b611a22565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61113484611a22565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a76400008661387a565b600554600160801b90046001600160801b031691908a5f6123ce565b600580546001600160801b03928316600160801b0292169190911790556111d286611a22565b6111dc9082613891565b600480546001600160801b03928316600160801b02921691909117905561120284611a22565b600280545f9061121c9084906001600160801b031661383f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061124983612474565b600480545f9061125d908490600f0b6138b1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d85611a22565b600280546010906112af908490600160801b90046001600160801b0316613891565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b919061367d565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b031684846124af565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f000000000000000000000000000000000000000000000000000000000000000083612511565b6003546113ce91906001600160801b031661366a565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611d3b565b5f805f61141d84611a5f565b90925090505f61142d8686611584565b90508183111561144557611442868385612525565b95505b8281101561145757808303925061145b565b5f92505b61146483611d12565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c381611a22565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b905061150481612540565b9450845f03611516575f91505061157d565b84915061152960408401602085016136d8565b15611558576115518561153f60208601866136b0565b61154c60408701876136f3565b6125ad565b915061157b565b61157b8561156960208601866136b0565b61157660408701876136f3565b6125c7565b505b9392505050565b5f61157d8383670de0b6b3a7640000612525565b5f805f805f805f806115a86119ec565b90505f6115b48a6120f2565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061265e565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a0c565b985061169a84878b88612220565b9c5091945090925090506116ae828461380c565b6116b8908961380c565b97506116c4818461366a565b6116ce908e61380c565b9c506116da8a8e61366a565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f611719919061380c565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b6001612332565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba858361380c565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de848261367d565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d83836126b1565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a76400008861387a565b6005546001600160801b031691908c5f6123ce565b600580546001600160801b0319166001600160801b0392909216919091179055611897888261380c565b90506118a281611a22565b600380546001600160801b03928316600160801b0292169190911790556118c883611a22565b600280546001600160801b0319166001600160801b03929092169190911790556118f182612474565b600480546001600160801b0319166001600160801b039290921691909117905561191a87611a22565b6002805460109061193c908490600160801b90046001600160801b031661383f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b5f61131b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000856126d6565b5f6119e282846138f2565b61157d908461380c565b6002546004545f916105a6916001600160801b0390911690600f0b6126b1565b5f61007d82611a1c858888612525565b90612823565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f818311611a59578261157d565b50919050565b6006545f908190611a81908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611bf7575f611aaa838361380c565b9050611ab96110fa8286612892565b60068054601090611adb908490600160801b90046001600160801b0316613891565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611b1385836128a690919063ffffffff16565b90505f611b40827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611b53919061366a565b90915550611b639050818361380c565b9150611b6e82611a22565b600280545f90611b889084906001600160801b031661383f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bb5826128ba565b600480545f90611bc9908490600f0b6138b1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611c0887856128a6565b91505f611c35837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611c61817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611c8457611c73828261380c565b611c7d908461380c565b9250611c9b565b611c8e828261380c565b611c98908461366a565b92505b86861015611cbe57611cae838789612525565b9250611cbb828789612525565b91505b509550959350505050565b5f80611ce084611cda8a888a612525565b906128a6565b9050611ced888486612525565b611cf7908261366a565b905086811115611d075786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611d85916001600160801b03169061380c565b9050805f03611d9857600191505061131b565b5f611da2856128e3565b9050805f03611db65760019250505061131b565b5f80611dc383858961297e565b9150915080611dd8575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e13929190613983565b6040805180830381865af4158015611e2d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e5191906139f8565b91509150611e6f611e6182611321565b611e6a90613a1a565b612af2565b925082611e84575f965050505050505061131b565b611e8d82611a22565b600780545f90611ea79084906001600160801b031661383f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ed481611a22565b60078054601090611ef6908490600160801b90046001600160801b031661383f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f5187612c86565b6040518263ffffffff1660e01b8152600401611f6d9190613a34565b6040805180830381865af4158015611f87573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fab9190613a43565b9150915080611fc057505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916120259161366a565b61202f919061380c565b9050805f0361204557505f958695509350505050565b5f808711612053575f61205e565b61205e848884612525565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561208f5761208f613a71565b6040519080825280601f01601f1916602001820160405280156120b9576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156120d9578692505b828152825f602083013e90999098509650505050505050565b5f806120fc6105ab565b905080831161210b575f612115565b612115818461380c565b915061157d827f00000000000000000000000000000000000000000000000000000000000000006128a6565b5f808061216161215988670de0b6b3a764000061380c565b899087612dc0565b905086156121a3576121738888612511565b91506121948a8a8461218d8a670de0b6b3a764000061380c565b8989612de3565b92506121a0838261366a565b90505b9750975097945050505050565b5f6121cd6121c684670de0b6b3a764000061380c565b8390612511565b61157d90670de0b6b3a764000061380c565b5f80612215856121ed6119ec565b6121f7919061366a565b600254610fa9908790600160801b90046001600160801b031661380c565b909210949350505050565b5f808080612276878661226f8b6122696122428c670de0b6b3a764000061380c565b7f000000000000000000000000000000000000000000000000000000000000000090612511565b90612511565b9190612dc0565b93506122a2847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f6122c26122ba89670de0b6b3a764000061380c565b8a9088612dc0565b90506122ee817f0000000000000000000000000000000000000000000000000000000000000000612511565b935061231a847f0000000000000000000000000000000000000000000000000000000000000000611584565b612324908461366a565b915050945094509450949050565b5f805f805f808888101561239e578615612354576123518d898b612525565b9c505b61235f8c898b612525565b9b5061236a8b611321565b6123738d611321565b61237d919061367d565b905061238a8b898b612525565b9a506123978a898b612525565b99506123bd565b6123a78b611321565b6123b08d611321565b6123ba919061367d565b90505b9b9c9a9b999a975050505050505050565b5f825f036123dd57508461246b565b811561242f5761240e6123f0848761366a565b6123fa8587611584565b612404888a611584565b611cda919061366a565b90505f61241b8588611a4b565b905080821015612429578091505b5061246b565b82850361243d57505f61246b565b61246861244a848761380c565b6124548587612511565b61245e888a611584565b611cda919061380c565b90505b95945050505050565b5f60016001607f1b0319821280612491575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f806124bb845f612e05565b6124c5845f612e05565b6124cf919061367d565b90505f8113156124ea576124e3818661366a565b9450612508565b5f811215612508576124fb81613a1a565b612505908661380c565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612dc0565b5f825f190484118302158202612539575f80fd5b5091020490565b5f61131b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612e1a565b5f60405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612633573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126579190613a85565b5050505050565b5f808061267e61267688670de0b6b3a764000061380c565b899087612525565b905086156121a3576126908888611584565b91506121948a8a846126aa8a670de0b6b3a764000061380c565b8989612f21565b5f806126bd8484612f31565b9092509050806126cf576126cf6113ec565b5092915050565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa158015612713573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261273a9190810190613b55565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561277b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061279f9190613c2c565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb0906064015b602060405180830381865afa1580156127f4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128189190613c2c565b979650505050505050565b5f815f0361283a5750670de0b6b3a764000061131b565b825f0361284857505f61131b565b5f61285283611321565b90505f61286661286186611321565b612f6c565b905081810261287d670de0b6b3a764000082613c43565b905061288881613191565b9695505050505050565b5f61157d83670de0b6b3a764000084612dc0565b5f61157d83670de0b6b3a764000084612525565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f9081906128fd906001600160801b031684612892565b90506129297f00000000000000000000000000000000000000000000000000000000000000008261366a565b6002546001600160801b03161115611a59576002547f0000000000000000000000000000000000000000000000000000000000000000906129749083906001600160801b031661380c565b61157d919061380c565b61298661355d565b5f8061299184612c86565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129cb9190613a34565b6040805180830381865af41580156129e5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a099190613a43565b9350905082612a1d57505f9150612aea9050565b5f612a43612a3e84610160015185610140015161158490919063ffffffff16565b611321565b612a63612a3e85610120015186610100015161251190919063ffffffff16565b612a6d919061367d565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ba8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612bcc9190613c6f565b935093509350935080612be757505f98975050505050505050565b868414612c1857612bf784611a22565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c4957612c2883612474565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c7757612c5982611a22565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c8e6135a7565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d869116613323565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612db892900416613323565b905292915050565b5f825f190484118302158202612dd4575f80fd5b50910281810615159190040190565b5f80612df3888888888888613397565b909250905080611d0757611d076113ec565b5f818313612e13578161157d565b5090919050565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa158015612e57573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052612e7e9190810190613b55565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612ebf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ee39190613c2c565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a906064016127d9565b5f80612df3888888888888613473565b5f805f83612f3e86611321565b612f48919061367d565b90505f811215612f5e575f809250925050612f65565b9150600190505b9250929050565b5f808213612f8d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130109084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136131aa57505f919050565b680755bf798b4a1bf1e582126131d3576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061288874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a76400006133366105ab565b613340919061387a565b905080831161334f575f613359565b613359818461380c565b915061157d613390670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061387a565b83906128a6565b5f805f6133a7898988888861352f565b9050868810156133bd575f809250925050613468565b96869003966133cc8887612823565b9750878110156133e2575f809250925050613468565b8781036133f0818688612dc0565b9050670de0b6b3a764000081106134245761341d613416670de0b6b3a764000089612892565b8290612823565b905061343c565b613439613416670de0b6b3a7640000896128a6565b90505b6134468186612892565b90508981101561345d575f80935093505050613468565b899003925060019150505b965096945050505050565b5f805f613483898988888861352f565b905061349386611a1c898b61366a565b9750878110156134a9575f809250925050613468565b8781036134b7818688612dc0565b9050670de0b6b3a764000081106134e4576134dd613416670de0b6b3a764000089612892565b90506134fc565b6134f9613416670de0b6b3a7640000896128a6565b90505b6135068186612892565b9050808a101561351d575f80935093505050613468565b90980398600198509650505050505050565b5f61353a8585612823565b61355361354b86611a1c868b612511565b859085612dc0565b612468919061366a565b6040518061012001604052806135716135a7565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561360f575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561363a575f80fd5b85016060818803121561364b575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b613656565b8181035f8312801583831316838312821617156126cf576126cf613656565b6001600160a01b0381168114610591575f80fd5b5f602082840312156136c0575f80fd5b813561157d8161369c565b8015158114610591575f80fd5b5f602082840312156136e8575f80fd5b813561157d816136cb565b5f808335601e19843603018112613708575f80fd5b83018035915067ffffffffffffffff821115613722575f80fd5b602001915036819003821315612f65575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61379760e083018486613736565b9a9950505050505050505050565b8082018281125f8312801582168215821617156137c4576137c4613656565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6137ff60c083018486613736565b9998505050505050505050565b8181038181111561131b5761131b613656565b6001600160701b038181168382160190808211156126cf576126cf613656565b6001600160801b038181168382160190808211156126cf576126cf613656565b5f6020828403121561386f575f80fd5b815161157d8161369c565b808202811582820484141761131b5761131b613656565b6001600160801b038281168282160390808211156126cf576126cf613656565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b613656565b634e487b7160e01b5f52601260045260245ffd5b5f82613900576139006138de565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613996828551613905565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613a09575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613a2e57613a2e613656565b505f0390565b610180810161131b8284613905565b5f8060408385031215613a54575f80fd5b825191506020830151613a66816136cb565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215613a95575f80fd5b815161157d816136cb565b604051601f8201601f1916810167ffffffffffffffff81118282101715613ac957613ac9613a71565b604052919050565b5f67ffffffffffffffff821115613aea57613aea613a71565b5060051b60200190565b5f82601f830112613b03575f80fd5b81516020613b18613b1383613ad1565b613aa0565b8083825260208201915060208460051b870101935086841115613b39575f80fd5b602086015b84811015611d075780518352918301918301613b3e565b5f805f60608486031215613b67575f80fd5b835167ffffffffffffffff80821115613b7e575f80fd5b818601915086601f830112613b91575f80fd5b81516020613ba1613b1383613ad1565b82815260059290921b8401810191818101908a841115613bbf575f80fd5b8286015b84811015613bf557805186811115613bd9575f80fd5b613be78d86838b0101613af4565b845250918301918301613bc3565b5091890151919750909350505080821115613c0e575f80fd5b50613c1b86828701613af4565b925050604084015190509250925092565b5f60208284031215613c3c575f80fd5b5051919050565b5f82613c5157613c516138de565b600160ff1b82145f1984141615613c6a57613c6a613656565b500590565b5f805f8060808587031215613c82575f80fd5b845193506020850151925060408501519150606085015161364b816136cb56fea264697066735822122057e1978fd3631ec66fbf3f0a12ef64cbbd2e4cc99c8dc40f65cc64c08085a8f364736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
