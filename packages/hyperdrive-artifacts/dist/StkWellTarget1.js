export const StkWellTarget1 = {
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
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162003df938038062003df98339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161398d6200046c5f395f50505f50505f610b2e01525f50505f818160a9015281816103140152612a9e01525f818161139301528181611791015281816117f401528181612687015281816126c3015281816128bb0152612a7801525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612a5201525f611ab601525f8181611bd701528181612218015261229001525f81816108a901528181610f4301528181611bab015261226401525f8181610e3e01526121de01525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612ac401525f81816107e701528181610ec4015281816116ef015281816120b7015261303f01525f81816105b2015281816106290152818161069d0152818161076801526107a001525f61250101525f505061398d5ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b610046366004613428565b610070565b60405190815260200160405180910390f35b61004b61006b366004613428565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f8282546101759190613496565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc90836134a9565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b60208301836134dc565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a01613504565b6102bd8a6102b78d8f613496565b90611584565b8d6102cb60408c018c61351f565b6040516102df98979695949392919061358a565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf9190613496565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc90836135d1565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b660208301836134dc565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a01613504565b8a61050260408b018b61351f565b60405161051597969594939291906135f8565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a60208301836134dc565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f0000000000000000000000000000000000000000000000000000000000000000611971565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b613496565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d7611986565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a6565b92505b5061073e836119bc565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b613638565b8a8461102b565b6107d2896107cc6107c57f000000000000000000000000000000000000000000000000000000000000000083613496565b42906119e5565b8461102b565b6107db886119f9565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d613638565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611b96565b915091508060095f8282546108789190613496565b909155506108939050865f8461088d81611321565b88611164565b61089d8183613496565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c63565b91506108e16108dc8385611584565b611cac565b600680546002906109029084906201000090046001600160701b031661364b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f826119bc565b60068054601090610951908490600160801b90046001600160801b031661366b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611b96565b915091508060095f8282546109c49190613496565b909155506109df9050835f846109d981611321565b8a61177a565b6109e98183613638565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b031661364b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a46826119bc565b60068054601090610a68908490600160801b90046001600160801b031661366b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab491906134a9565b5f61134e565b8e610ac58482611cd5565b50505b5f610ad284611ec4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac919061368b565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612006565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf1908490613638565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d53611986565b90505f610d5f8a61208c565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006120db565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a6565b9550610e67858c610e62897f000000000000000000000000000000000000000000000000000000000000000061214a565b612179565b15610e7457610e746113ec565b5f805f610e8385878b876121ba565b9c5091945092509050610e968184613638565b610ea09089613496565b9750610eac8284613496565b610eb6908d613496565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee9190613638565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611c63565b9950610f73878a613638565b9850670de0b6b3a7640000610ff0610f8b8787613496565b600254610fa9908f90600160801b90046001600160801b0316613638565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a6565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f6122cc565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e836119bc565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c78886613638565b6110d191906136a6565b85670de0b6b3a76400006110e5878a613638565b6110ef91906136a6565b859291906001612368565b6119bc565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611134846119bc565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a7640000866136a6565b600554600160801b90046001600160801b031691908a5f612368565b600580546001600160801b03928316600160801b0292169190911790556111d2866119bc565b6111dc90826136bd565b600480546001600160801b03928316600160801b029216919091179055611202846119bc565b600280545f9061121c9084906001600160801b031661366b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112498361240e565b600480545f9061125d908490600f0b6136dd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d856119bc565b600280546010906112af908490600160801b90046001600160801b03166136bd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b91906134a9565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b03168484612449565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f0000000000000000000000000000000000000000000000000000000000000000836124ab565b6003546113ce91906001600160801b0316613496565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611cd5565b5f805f61141d846119f9565b90925090505f61142d8686611584565b905081831115611445576114428683856124bf565b95505b8281101561145757808303925061145b565b5f92505b61146483611cac565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c3816119bc565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b90506115048161196a565b9450845f03611516575f91505061157d565b8491506115296040840160208501613504565b15611558576115518561153f60208601866134dc565b61154c604087018761351f565b6124da565b915061157b565b61157b8561156960208601866134dc565b611576604087018761351f565b6124f4565b505b9392505050565b5f61157d8383670de0b6b3a76400006124bf565b5f805f805f805f806115a8611986565b90505f6115b48a61208c565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061252e565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a6565b985061169a84878b886121ba565b9c5091945090925090506116ae8284613638565b6116b89089613638565b97506116c48184613496565b6116ce908e613638565b9c506116da8a8e613496565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f6117199190613638565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b60016122cc565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba8583613638565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de84826134a9565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d8383612581565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a7640000886136a6565b6005546001600160801b031691908c5f612368565b600580546001600160801b0319166001600160801b03929092169190911790556118978882613638565b90506118a2816119bc565b600380546001600160801b03928316600160801b0292169190911790556118c8836119bc565b600280546001600160801b0319166001600160801b03929092169190911790556118f18261240e565b600480546001600160801b0319166001600160801b039290921691909117905561191a876119bc565b6002805460109061193c908490600160801b90046001600160801b031661366b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b5f8161131b565b5f61197c828461371e565b61157d9084613638565b6002546004545f916105a6916001600160801b0390911690600f0b612581565b5f61007d826119b68588886124bf565b906125a6565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f8183116119f3578261157d565b50919050565b6006545f908190611a1b908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611b91575f611a448383613638565b9050611a536110fa8286612615565b60068054601090611a75908490600160801b90046001600160801b03166136bd565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611aad858361262990919063ffffffff16565b90505f611ada827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611aed9190613496565b90915550611afd90508183613638565b9150611b08826119bc565b600280545f90611b229084906001600160801b031661366b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b4f8261263d565b600480545f90611b63908490600f0b6136dd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611ba28785612629565b91505f611bcf837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611bfb817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611c1e57611c0d8282613638565b611c179084613638565b9250611c35565b611c288282613638565b611c329084613496565b92505b86861015611c5857611c488387896124bf565b9250611c558287896124bf565b91505b509550959350505050565b5f80611c7a84611c748a888a6124bf565b90612629565b9050611c878884866124bf565b611c919082613496565b905086811115611ca15786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611d1f916001600160801b031690613638565b9050805f03611d3257600191505061131b565b5f611d3c85612666565b9050805f03611d505760019250505061131b565b5f80611d5d838589612701565b9150915080611d72575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611dad9291906137af565b6040805180830381865af4158015611dc7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611deb9190613824565b91509150611e09611dfb82611321565b611e0490613846565b612875565b925082611e1e575f965050505050505061131b565b611e27826119bc565b600780545f90611e419084906001600160801b031661366b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e6e816119bc565b60078054601090611e90908490600160801b90046001600160801b031661366b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611eeb87612a09565b6040518263ffffffff1660e01b8152600401611f079190613860565b6040805180830381865af4158015611f21573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f45919061386f565b9150915080611f5a57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691611fbf91613496565b611fc99190613638565b9050805f03611fdf57505f958695509350505050565b5f808711611fed575f611ff8565b611ff88488846124bf565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156120295761202961389d565b6040519080825280601f01601f191660200182016040528015612053576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612073578692505b828152825f602083013e90999098509650505050505050565b5f806120966105ab565b90508083116120a5575f6120af565b6120af8184613638565b915061157d827f0000000000000000000000000000000000000000000000000000000000000000612629565b5f80806120fb6120f388670de0b6b3a7640000613638565b899087612b43565b9050861561213d5761210d88886124ab565b915061212e8a8a846121278a670de0b6b3a7640000613638565b8989612b66565b925061213a8382613496565b90505b9750975097945050505050565b5f61216761216084670de0b6b3a7640000613638565b83906124ab565b61157d90670de0b6b3a7640000613638565b5f806121af85612187611986565b6121919190613496565b600254610fa9908790600160801b90046001600160801b0316613638565b909210949350505050565b5f80808061221087866122098b6122036121dc8c670de0b6b3a7640000613638565b7f0000000000000000000000000000000000000000000000000000000000000000906124ab565b906124ab565b9190612b43565b935061223c847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f61225c61225489670de0b6b3a7640000613638565b8a9088612b43565b9050612288817f00000000000000000000000000000000000000000000000000000000000000006124ab565b93506122b4847f0000000000000000000000000000000000000000000000000000000000000000611584565b6122be9084613496565b915050945094509450949050565b5f805f805f80888810156123385786156122ee576122eb8d898b6124bf565b9c505b6122f98c898b6124bf565b9b506123048b611321565b61230d8d611321565b61231791906134a9565b90506123248b898b6124bf565b9a506123318a898b6124bf565b9950612357565b6123418b611321565b61234a8d611321565b61235491906134a9565b90505b9b9c9a9b999a975050505050505050565b5f825f03612377575084612405565b81156123c9576123a861238a8487613496565b6123948587611584565b61239e888a611584565b611c749190613496565b90505f6123b585886119e5565b9050808210156123c3578091505b50612405565b8285036123d757505f612405565b6124026123e48487613638565b6123ee85876124ab565b6123f8888a611584565b611c749190613638565b90505b95945050505050565b5f60016001607f1b031982128061242b575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f80612455845f612b88565b61245f845f612b88565b61246991906134a9565b90505f8113156124845761247d8186613496565b94506124a2565b5f8112156124a25761249581613846565b61249f9086613638565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612b43565b5f825f1904841183021582026124d3575f80fd5b5091020490565b5f60405163350b944160e11b815260040160405180910390fd5b6125286001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612b9d565b50505050565b5f808061254e61254688670de0b6b3a7640000613638565b8990876124bf565b9050861561213d576125608888611584565b915061212e8a8a8461257a8a670de0b6b3a7640000613638565b8989612bf4565b5f8061258d8484612c04565b90925090508061259f5761259f6113ec565b5092915050565b5f815f036125bd5750670de0b6b3a764000061131b565b825f036125cb57505f61131b565b5f6125d583611321565b90505f6125e96125e486611321565b612c3f565b9050818102612600670de0b6b3a7640000826138b1565b905061260b81612e64565b9695505050505050565b5f61157d83670de0b6b3a764000084612b43565b5f61157d83670de0b6b3a7640000846124bf565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612680906001600160801b031684612615565b90506126ac7f000000000000000000000000000000000000000000000000000000000000000082613496565b6002546001600160801b031611156119f3576002547f0000000000000000000000000000000000000000000000000000000000000000906126f79083906001600160801b0316613638565b61157d9190613638565b612709613389565b5f8061271484612a09565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161274e9190613860565b6040805180830381865af4158015612768573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061278c919061386f565b93509050826127a057505f915061286d9050565b5f6127c66127c184610160015185610140015161158490919063ffffffff16565b611321565b6127e66127c18561012001518661010001516124ab90919063ffffffff16565b6127f091906134a9565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af415801561292b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061294f91906138dd565b93509350935093508061296a57505f98975050505050505050565b86841461299b5761297a846119bc565b600280546001600160801b0319166001600160801b03929092169190911790555b8583146129cc576129ab8361240e565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146129fa576129dc826119bc565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612a116133d3565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612b099116612ff6565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612b3b92900416612ff6565b905292915050565b5f825f190484118302158202612b57575f80fd5b50910281810615159190040190565b5f80612b7688888888888861306a565b909250905080611ca157611ca16113ec565b5f818313612b96578161157d565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612bef908490613146565b505050565b5f80612b768888888888886131ac565b5f805f83612c1186611321565b612c1b91906134a9565b90505f811215612c31575f809250925050612c38565b9150600190505b9250929050565b5f808213612c605760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ce39084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e198213612e7d57505f919050565b680755bf798b4a1bf1e58212612ea6576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061260b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a76400006130096105ab565b61301391906136a6565b9050808311613022575f61302c565b61302c8184613638565b915061157d613063670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136a6565b8390612629565b5f805f61307a8989888888613268565b905086881015613090575f80925092505061313b565b968690039661309f88876125a6565b9750878110156130b5575f80925092505061313b565b8781036130c3818688612b43565b9050670de0b6b3a764000081106130f7576130f06130e9670de0b6b3a764000089612615565b82906125a6565b905061310f565b61310c6130e9670de0b6b3a764000089612629565b90505b6131198186612615565b905089811015613130575f8093509350505061313b565b899003925060019150505b965096945050505050565b5f61315a6001600160a01b03841683613296565b905080515f1415801561317e57508080602001905181019061317c9190613910565b155b15612bef57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f6131bc8989888888613268565b90506131cc866119b6898b613496565b9750878110156131e2575f80925092505061313b565b8781036131f0818688612b43565b9050670de0b6b3a7640000811061321d576132166130e9670de0b6b3a764000089612615565b9050613235565b6132326130e9670de0b6b3a764000089612629565b90505b61323f8186612615565b9050808a1015613256575f8093509350505061313b565b90980398600198509650505050505050565b5f61327385856125a6565b61328c613284866119b6868b6124ab565b859085612b43565b6124029190613496565b606061157d83835f845f80856001600160a01b031684866040516132ba919061392b565b5f6040518083038185875af1925050503d805f81146132f4576040519150601f19603f3d011682016040523d82523d5f602084013e6132f9565b606091505b509150915061260b8683836060826133195761331482613360565b61157d565b815115801561333057506001600160a01b0384163b155b1561335957604051639996b31560e01b81526001600160a01b03851660048201526024016131a3565b508061157d565b8051156133705780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061339d6133d3565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561343b575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613466575f80fd5b850160608188031215613477575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b613482565b8181035f83128015838313168383128216171561259f5761259f613482565b6001600160a01b0381168114610591575f80fd5b5f602082840312156134ec575f80fd5b813561157d816134c8565b8015158114610591575f80fd5b5f60208284031215613514575f80fd5b813561157d816134f7565b5f808335601e19843603018112613534575f80fd5b83018035915067ffffffffffffffff82111561354e575f80fd5b602001915036819003821315612c38575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6135c360e083018486613562565b9a9950505050505050505050565b8082018281125f8312801582168215821617156135f0576135f0613482565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61362b60c083018486613562565b9998505050505050505050565b8181038181111561131b5761131b613482565b6001600160701b0381811683821601908082111561259f5761259f613482565b6001600160801b0381811683821601908082111561259f5761259f613482565b5f6020828403121561369b575f80fd5b815161157d816134c8565b808202811582820484141761131b5761131b613482565b6001600160801b0382811682821603908082111561259f5761259f613482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b613482565b634e487b7160e01b5f52601260045260245ffd5b5f8261372c5761372c61370a565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506137c2828551613731565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613835575f80fd5b505080516020909101519092909150565b5f600160ff1b820161385a5761385a613482565b505f0390565b610180810161131b8284613731565b5f8060408385031215613880575f80fd5b825191506020830151613892816134f7565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f826138bf576138bf61370a565b600160ff1b82145f19841416156138d8576138d8613482565b500590565b5f805f80608085870312156138f0575f80fd5b8451935060208501519250604085015191506060850151613477816134f7565b5f60208284031215613920575f80fd5b815161157d816134f7565b5f82515f5b8181101561394a5760208186018101518583015201613930565b505f92019182525091905056fea26469706673582212200bbb33ae0b759a7054d31ea526e720fee72a9c86c609543d763cfc662221537a64736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};