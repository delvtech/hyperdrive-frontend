export const LsETHTarget1 = {
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
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162003f0638038062003f068339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613a8c6200047a5f395f50505f50505f610b2e01525f50505f818160a9015281816103140152612b5701525f818161139301528181611791015281816117f4015281816127400152818161277c015281816129740152612b3101525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612b0b01525f611ada01525f8181611bfb0152818161223c01526122b401525f81816108a901528181610f4301528181611bcf015261228801525f8181610e3e015261220201525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612b7d01525f81816107e701528181610ec4015281816116ef015281816120db015261312701525f81816105b2015281816106290152818161069d0152818161076801526107a001525f818161197001528181612504015261255001525f5050613a8c5ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b610046366004613510565b610070565b60405190815260200160405180910390f35b61004b61006b366004613510565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f828254610175919061357e565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc9083613591565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b60208301836135c4565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a016135ec565b6102bd8a6102b78d8f61357e565b90611584565b8d6102cb60408c018c613607565b6040516102df989796959493929190613672565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf919061357e565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc90836136b9565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b660208301836135c4565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a016135ec565b8a61050260408b018b613607565b60405161051597969594939291906136e0565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a60208301836135c4565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f0000000000000000000000000000000000000000000000000000000000000000611995565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b61357e565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d76119aa565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ca565b92505b5061073e836119e0565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b613720565b8a8461102b565b6107d2896107cc6107c57f00000000000000000000000000000000000000000000000000000000000000008361357e565b4290611a09565b8461102b565b6107db88611a1d565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d613720565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611bba565b915091508060095f828254610878919061357e565b909155506108939050865f8461088d81611321565b88611164565b61089d818361357e565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c87565b91506108e16108dc8385611584565b611cd0565b600680546002906109029084906201000090046001600160701b0316613733565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f826119e0565b60068054601090610951908490600160801b90046001600160801b0316613753565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611bba565b915091508060095f8282546109c4919061357e565b909155506109df9050835f846109d981611321565b8a61177a565b6109e98183613720565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b0316613733565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a46826119e0565b60068054601090610a68908490600160801b90046001600160801b0316613753565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab49190613591565b5f61134e565b8e610ac58482611cf9565b50505b5f610ad284611ee8565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac9190613773565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061202a565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf1908490613720565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d536119aa565b90505f610d5f8a6120b0565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006120ff565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ca565b9550610e67858c610e62897f000000000000000000000000000000000000000000000000000000000000000061216e565b61219d565b15610e7457610e746113ec565b5f805f610e8385878b876121de565b9c5091945092509050610e968184613720565b610ea0908961357e565b9750610eac828461357e565b610eb6908d61357e565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee9190613720565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611c87565b9950610f73878a613720565b9850670de0b6b3a7640000610ff0610f8b878761357e565b600254610fa9908f90600160801b90046001600160801b0316613720565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ca565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f6122f0565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e836119e0565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c78886613720565b6110d1919061378e565b85670de0b6b3a76400006110e5878a613720565b6110ef919061378e565b85929190600161238c565b6119e0565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611134846119e0565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a76400008661378e565b600554600160801b90046001600160801b031691908a5f61238c565b600580546001600160801b03928316600160801b0292169190911790556111d2866119e0565b6111dc90826137a5565b600480546001600160801b03928316600160801b029216919091179055611202846119e0565b600280545f9061121c9084906001600160801b0316613753565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061124983612432565b600480545f9061125d908490600f0b6137c5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d856119e0565b600280546010906112af908490600160801b90046001600160801b03166137a5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b9190613591565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b0316848461246d565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f0000000000000000000000000000000000000000000000000000000000000000836124cf565b6003546113ce91906001600160801b031661357e565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611cf9565b5f805f61141d84611a1d565b90925090505f61142d8686611584565b905081831115611445576114428683856124e3565b95505b8281101561145757808303925061145b565b5f92505b61146483611cd0565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c3816119e0565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b9050611504816124fe565b9450845f03611516575f91505061157d565b84915061152960408401602085016135ec565b15611558576115518561153f60208601866135c4565b61154c6040870187613607565b612529565b915061157b565b61157b8561156960208601866135c4565b6115766040870187613607565b612543565b505b9392505050565b5f61157d8383670de0b6b3a76400006124e3565b5f805f805f805f806115a86119aa565b90505f6115b48a6120b0565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061257d565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ca565b985061169a84878b886121de565b9c5091945090925090506116ae8284613720565b6116b89089613720565b97506116c4818461357e565b6116ce908e613720565b9c506116da8a8e61357e565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f6117199190613720565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b60016122f0565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba8583613720565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de8482613591565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d83836125d0565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a76400008861378e565b6005546001600160801b031691908c5f61238c565b600580546001600160801b0319166001600160801b03929092169190911790556118978882613720565b90506118a2816119e0565b600380546001600160801b03928316600160801b0292169190911790556118c8836119e0565b600280546001600160801b0319166001600160801b03929092169190911790556118f182612432565b600480546001600160801b0319166001600160801b039290921691909117905561191a876119e0565b6002805460109061193c908490600160801b90046001600160801b0316613753565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b5f61131b7f0000000000000000000000000000000000000000000000000000000000000000836125f5565b5f6119a08284613806565b61157d9084613720565b6002546004545f916105a6916001600160801b0390911690600f0b6125d0565b5f61007d826119da8588886124e3565b9061265f565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f818311611a17578261157d565b50919050565b6006545f908190611a3f908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611bb5575f611a688383613720565b9050611a776110fa82866126ce565b60068054601090611a99908490600160801b90046001600160801b03166137a5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611ad185836126e290919063ffffffff16565b90505f611afe827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611b11919061357e565b90915550611b2190508183613720565b9150611b2c826119e0565b600280545f90611b469084906001600160801b0316613753565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b73826126f6565b600480545f90611b87908490600f0b6137c5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611bc687856126e2565b91505f611bf3837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611c1f817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611c4257611c318282613720565b611c3b9084613720565b9250611c59565b611c4c8282613720565b611c56908461357e565b92505b86861015611c7c57611c6c8387896124e3565b9250611c798287896124e3565b91505b509550959350505050565b5f80611c9e84611c988a888a6124e3565b906126e2565b9050611cab8884866124e3565b611cb5908261357e565b905086811115611cc55786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611d43916001600160801b031690613720565b9050805f03611d5657600191505061131b565b5f611d608561271f565b9050805f03611d745760019250505061131b565b5f80611d818385896127ba565b9150915080611d96575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611dd1929190613897565b6040805180830381865af4158015611deb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e0f919061390c565b91509150611e2d611e1f82611321565b611e289061392e565b61292e565b925082611e42575f965050505050505061131b565b611e4b826119e0565b600780545f90611e659084906001600160801b0316613753565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e92816119e0565b60078054601090611eb4908490600160801b90046001600160801b0316613753565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f0f87612ac2565b6040518263ffffffff1660e01b8152600401611f2b9190613948565b6040805180830381865af4158015611f45573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f699190613957565b9150915080611f7e57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691611fe39161357e565b611fed9190613720565b9050805f0361200357505f958695509350505050565b5f808711612011575f61201c565b61201c8488846124e3565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561204d5761204d613985565b6040519080825280601f01601f191660200182016040528015612077576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612097578692505b828152825f602083013e90999098509650505050505050565b5f806120ba6105ab565b90508083116120c9575f6120d3565b6120d38184613720565b915061157d827f00000000000000000000000000000000000000000000000000000000000000006126e2565b5f808061211f61211788670de0b6b3a7640000613720565b899087612bfc565b905086156121615761213188886124cf565b91506121528a8a8461214b8a670de0b6b3a7640000613720565b8989612c1f565b925061215e838261357e565b90505b9750975097945050505050565b5f61218b61218484670de0b6b3a7640000613720565b83906124cf565b61157d90670de0b6b3a7640000613720565b5f806121d3856121ab6119aa565b6121b5919061357e565b600254610fa9908790600160801b90046001600160801b0316613720565b909210949350505050565b5f808080612234878661222d8b6122276122008c670de0b6b3a7640000613720565b7f0000000000000000000000000000000000000000000000000000000000000000906124cf565b906124cf565b9190612bfc565b9350612260847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f61228061227889670de0b6b3a7640000613720565b8a9088612bfc565b90506122ac817f00000000000000000000000000000000000000000000000000000000000000006124cf565b93506122d8847f0000000000000000000000000000000000000000000000000000000000000000611584565b6122e2908461357e565b915050945094509450949050565b5f805f805f808888101561235c5786156123125761230f8d898b6124e3565b9c505b61231d8c898b6124e3565b9b506123288b611321565b6123318d611321565b61233b9190613591565b90506123488b898b6124e3565b9a506123558a898b6124e3565b995061237b565b6123658b611321565b61236e8d611321565b6123789190613591565b90505b9b9c9a9b999a975050505050505050565b5f825f0361239b575084612429565b81156123ed576123cc6123ae848761357e565b6123b88587611584565b6123c2888a611584565b611c98919061357e565b90505f6123d98588611a09565b9050808210156123e7578091505b50612429565b8285036123fb57505f612429565b6124266124088487613720565b61241285876124cf565b61241c888a611584565b611c989190613720565b90505b95945050505050565b5f60016001607f1b031982128061244f575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f80612479845f612c41565b612483845f612c41565b61248d9190613591565b90505f8113156124a8576124a1818661357e565b94506124c6565b5f8112156124c6576124b98161392e565b6124c39086613720565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612bfc565b5f825f1904841183021582026124f7575f80fd5b5091020490565b5f61131b7f000000000000000000000000000000000000000000000000000000000000000083612c56565b5f60405163350b944160e11b815260040160405180910390fd5b6125776001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612c85565b50505050565b5f808061259d61259588670de0b6b3a7640000613720565b8990876124e3565b90508615612161576125af8888611584565b91506121528a8a846125c98a670de0b6b3a7640000613720565b8989612cdc565b5f806125dc8484612cec565b9092509050806125ee576125ee6113ec565b5092915050565b604051637bce1f8160e11b8152600481018290525f906001600160a01b0384169063f79c3f02906024015b602060405180830381865afa15801561263b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061157d9190613999565b5f815f036126765750670de0b6b3a764000061131b565b825f0361268457505f61131b565b5f61268e83611321565b90505f6126a261269d86611321565b612d27565b90508181026126b9670de0b6b3a7640000826139b0565b90506126c481612f4c565b9695505050505050565b5f61157d83670de0b6b3a764000084612bfc565b5f61157d83670de0b6b3a7640000846124e3565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612739906001600160801b0316846126ce565b90506127657f00000000000000000000000000000000000000000000000000000000000000008261357e565b6002546001600160801b03161115611a17576002547f0000000000000000000000000000000000000000000000000000000000000000906127b09083906001600160801b0316613720565b61157d9190613720565b6127c2613471565b5f806127cd84612ac2565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128079190613948565b6040805180830381865af4158015612821573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128459190613957565b935090508261285957505f91506129269050565b5f61287f61287a84610160015185610140015161158490919063ffffffff16565b611321565b61289f61287a8561012001518661010001516124cf90919063ffffffff16565b6128a99190613591565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156129e4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a0891906139dc565b935093509350935080612a2357505f98975050505050505050565b868414612a5457612a33846119e0565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612a8557612a6483612432565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ab357612a95826119e0565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612aca6134bb565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612bc291166130de565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612bf4929004166130de565b905292915050565b5f825f190484118302158202612c10575f80fd5b50910281810615159190040190565b5f80612c2f888888888888613152565b909250905080611cc557611cc56113ec565b5f818313612c4f578161157d565b5090919050565b604051631e66865560e21b8152600481018290525f906001600160a01b0384169063799a195490602401612620565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612cd790849061322e565b505050565b5f80612c2f888888888888613294565b5f805f83612cf986611321565b612d039190613591565b90505f811215612d19575f809250925050612d20565b9150600190505b9250929050565b5f808213612d485760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612dcb9084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e198213612f6557505f919050565b680755bf798b4a1bf1e58212612f8e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906126c474029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a76400006130f16105ab565b6130fb919061378e565b905080831161310a575f613114565b6131148184613720565b915061157d61314b670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061378e565b83906126e2565b5f805f6131628989888888613350565b905086881015613178575f809250925050613223565b9686900396613187888761265f565b97508781101561319d575f809250925050613223565b8781036131ab818688612bfc565b9050670de0b6b3a764000081106131df576131d86131d1670de0b6b3a7640000896126ce565b829061265f565b90506131f7565b6131f46131d1670de0b6b3a7640000896126e2565b90505b61320181866126ce565b905089811015613218575f80935093505050613223565b899003925060019150505b965096945050505050565b5f6132426001600160a01b0384168361337e565b905080515f141580156132665750808060200190518101906132649190613a0f565b155b15612cd757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f6132a48989888888613350565b90506132b4866119da898b61357e565b9750878110156132ca575f809250925050613223565b8781036132d8818688612bfc565b9050670de0b6b3a76400008110613305576132fe6131d1670de0b6b3a7640000896126ce565b905061331d565b61331a6131d1670de0b6b3a7640000896126e2565b90505b61332781866126ce565b9050808a101561333e575f80935093505050613223565b90980398600198509650505050505050565b5f61335b858561265f565b61337461336c866119da868b6124cf565b859085612bfc565b612426919061357e565b606061157d83835f845f80856001600160a01b031684866040516133a29190613a2a565b5f6040518083038185875af1925050503d805f81146133dc576040519150601f19603f3d011682016040523d82523d5f602084013e6133e1565b606091505b50915091506126c4868383606082613401576133fc82613448565b61157d565b815115801561341857506001600160a01b0384163b155b1561344157604051639996b31560e01b81526001600160a01b038516600482015260240161328b565b508061157d565b8051156134585780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806134856134bb565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613523575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561354e575f80fd5b85016060818803121561355f575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b61356a565b8181035f8312801583831316838312821617156125ee576125ee61356a565b6001600160a01b0381168114610591575f80fd5b5f602082840312156135d4575f80fd5b813561157d816135b0565b8015158114610591575f80fd5b5f602082840312156135fc575f80fd5b813561157d816135df565b5f808335601e1984360301811261361c575f80fd5b83018035915067ffffffffffffffff821115613636575f80fd5b602001915036819003821315612d20575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6136ab60e08301848661364a565b9a9950505050505050505050565b8082018281125f8312801582168215821617156136d8576136d861356a565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61371360c08301848661364a565b9998505050505050505050565b8181038181111561131b5761131b61356a565b6001600160701b038181168382160190808211156125ee576125ee61356a565b6001600160801b038181168382160190808211156125ee576125ee61356a565b5f60208284031215613783575f80fd5b815161157d816135b0565b808202811582820484141761131b5761131b61356a565b6001600160801b038281168282160390808211156125ee576125ee61356a565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b61356a565b634e487b7160e01b5f52601260045260245ffd5b5f82613814576138146137f2565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506138aa828551613819565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f806040838503121561391d575f80fd5b505080516020909101519092909150565b5f600160ff1b82016139425761394261356a565b505f0390565b610180810161131b8284613819565b5f8060408385031215613968575f80fd5b82519150602083015161397a816135df565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f602082840312156139a9575f80fd5b5051919050565b5f826139be576139be6137f2565b600160ff1b82145f19841416156139d7576139d761356a565b500590565b5f805f80608085870312156139ef575f80fd5b845193506020850151925060408501519150606085015161355f816135df565b5f60208284031215613a1f575f80fd5b815161157d816135df565b5f82515f5b81811015613a495760208186018101518583015201613a2f565b505f92019182525091905056fea26469706673582212208f9ac18ecb569fe46dde57f9aabc772fabab3246ec6588ea860bdcb3eefbd5c864736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
