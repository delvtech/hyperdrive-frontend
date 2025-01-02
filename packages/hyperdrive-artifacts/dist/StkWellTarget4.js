export const StkWellTarget4 = {
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
            "name": "redeemWithdrawalShares",
            "inputs": [
                {
                    "name": "_withdrawalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeLiquidity",
            "inputs": [
                {
                    "name": "_lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
            "name": "InvalidCheckpointTime",
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
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162003234380380620032348339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051612e4f620003e55f395f50505f50505f61099201525f50505f818161025f0152611eda01525f818161173a0152818161179d01528181611aca01528181611b0601528181611cf70152611eb401525f81816105500152611e8e01525f61131c01525f61147101525f818161070d015261144501525f50505f81816105710152611f0001525f818161064b015261227401525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f6121db01525f5050612e4f5ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b6100566100513660046128f5565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d366004612947565b6100b1565b005b6100566100923660046128f5565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f602085018561297b565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c016129a3565b61016a60408c018c6129be565b60405161017c96959493929190612a29565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612a76565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d5602087018761297b565b88610ea4565b5f6102f56102ec602087018761297b565b88848989610a9e565b90945090506103048188612a9d565b92505f61031083610f41565b509050610320602087018761297b565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e016129a3565b8a888e806040019061037091906129be565b604051610384989796959493929190612ab0565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce602083018361297b565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f000000000000000000000000000000000000000000000000000000000000000061108a565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612af7565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b6110a6565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006110c6565b92505b506105a2836110e5565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612a9d565b8a84611112565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612af7565b429061124b565b84611112565b61063f8861125f565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612a9d565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c6113fc565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f611430565b915091508060095f8282546106dc9190612af7565b909155506106f79050865f846106f1816114fd565b88611526565b6107018183612af7565b915061073186838a8e877f000000000000000000000000000000000000000000000000000000000000000061169d565b915061074561074083856116e6565b6116fa565b600680546002906107669084906201000090046001600160701b0316612b0a565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610793826110e5565b600680546010906107b5908490600160801b90046001600160801b0316612b2a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e86001846113fc565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f886001611430565b915091508060095f8282546108289190612af7565b909155506108439050835f8461083d816114fd565b8a611723565b61084d8183612a9d565b915061085c61074083876116e6565b6006805460029061087d9084906201000090046001600160701b0316612b0a565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa826110e5565b600680546010906108cc908490600160801b90046001600160801b0316612b2a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e610905876114fd565b61090e836114fd565b6109189190612b4a565b5f611913565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612b69565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611952565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa9856119d8565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b90910481169085166119e4565b9050610b20836110e5565b610b2a9083612b84565b600780546001600160801b0319166001600160801b0392909216919091179055610b53816110e5565b60078054601090610b75908490600160801b90046001600160801b0316612b84565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba48188876119ff565b9350610bb08684611a95565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612a9d565b9050805f03610c3a576001915050610dc7565b5f610c4485611aa9565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611b44565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612c22565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612c97565b91509150610d11610d03826114fd565b610d0c90612cb9565b611cb1565b925082610d26575f9650505050505050610dc7565b610d2f826110e5565b600780545f90610d499084906001600160801b0316612b2a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d76816110e5565b60078054601090610d98908490600160801b90046001600160801b0316612b2a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612a9d565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612af7565b90915550505f838152600b602052604081208054839290610ef7908490612af7565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611e45565b6040518263ffffffff1660e01b8152600401610f849190612cd3565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612ce2565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612af7565b6110469190612a9d565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b6110758488846119e4565b976001975095505050505050565b5f81610dc7565b5f6110958284612a76565b61109f9084612a9d565b9392505050565b6002546004545f9161040a916001600160801b0390911690600f0b611f7f565b5f6110dc826110d68588886119e4565b90611fa4565b95945050505050565b5f6001600160801b0382111561110e57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b031680830361113d5750505050565b5f848152600860205260408120546001600160801b03169081900361119557611165836110e5565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611212565b6111e66111e1670de0b6b3a76400006111ae8886612a9d565b6111b89190612d10565b85670de0b6b3a76400006111cc878a612a9d565b6111d69190612d10565b859291906001612013565b6110e5565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61121b846110e5565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f818311611259578261109f565b50919050565b6006545f908190611281908490600160801b90046001600160801b03166116e6565b6006546201000090046001600160701b031692509050818111156113f7575f6112aa8383612a9d565b90506112b96111e182866120ad565b600680546010906112db908490600160801b90046001600160801b0316612b84565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61131385836120c190919063ffffffff16565b90505f611340827f00000000000000000000000000000000000000000000000000000000000000006116e6565b90508060095f8282546113539190612af7565b9091555061136390508183612a9d565b915061136e826110e5565b600280545f906113889084906001600160801b0316612b2a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113b5826120d5565b600480545f906113c9908490600f0b612d27565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156114255760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061143c87856120c1565b91505f611469837f00000000000000000000000000000000000000000000000000000000000000006116e6565b9050611495817f00000000000000000000000000000000000000000000000000000000000000006116e6565b915083156114b8576114a78282612a9d565b6114b19084612a9d565b92506114cf565b6114c28282612a9d565b6114cc9084612af7565b92505b868610156114f2576114e28387896119e4565b92506114ef8287896119e4565b91505b509550959350505050565b5f6001600160ff1b0382111561110e5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661156e6111e182611552670de0b6b3a764000086612d10565b600554600160801b90046001600160801b031691908a5f612013565b600580546001600160801b03928316600160801b029216919091179055611594866110e5565b61159e9082612b84565b600480546001600160801b03928316600160801b0292169190911790556115c4846110e5565b600280545f906115de9084906001600160801b0316612b2a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061160b836120fe565b600480545f9061161f908490600f0b612d27565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061164f856110e5565b60028054601090611671908490600160801b90046001600160801b0316612b84565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806116b4846116ae8a888a6119e4565b906120c1565b90506116c18884866119e4565b6116cb9082612af7565b9050868111156116db5786810391505b509695505050505050565b5f61109f8383670de0b6b3a76400006119e4565b5f6001600160701b0382111561110e5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061176557507f00000000000000000000000000000000000000000000000000000000000000006117638583612a9d565b105b1561177257611772612139565b6004549084900390600f0b6117878482612b4a565b905083611793866114fd565b1380156117c857507f00000000000000000000000000000000000000000000000000000000000000006117c68383611f7f565b105b156117d5576117d5612139565b600354600160801b90046001600160801b03166118166111e182611801670de0b6b3a764000088612d10565b6005546001600160801b031691908c5f612013565b600580546001600160801b0319166001600160801b03929092169190911790556118408882612a9d565b905061184b816110e5565b600380546001600160801b03928316600160801b029216919091179055611871836110e5565b600280546001600160801b0319166001600160801b039290921691909117905561189a826120fe565b600480546001600160801b0319166001600160801b03929092169190911790556118c3876110e5565b600280546010906118e5908490600160801b90046001600160801b0316612b2a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461192e906111e1906001600160801b03168484612152565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff81111561197557611975612d54565b6040519080825280601f01601f19166020018201604052801561199f576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156119bf578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f1904841183021582026119f8575f80fd5b5091020490565b5f80611a0b85856116e6565b9050611a1681611083565b9450845f03611a28575f91505061109f565b849150611a3b60408401602085016129a3565b15611a6a57611a6385611a51602086018661297b565b611a5e60408701876129be565b6121b4565b9150611a8d565b611a8d85611a7b602086018661297b565b611a8860408701876129be565b6121ce565b509392505050565b5f61109f8383670de0b6b3a7640000612208565b6003545f908190611ac3906001600160801b0316846120ad565b9050611aef7f000000000000000000000000000000000000000000000000000000000000000082612af7565b6002546001600160801b03161115611259576002547f000000000000000000000000000000000000000000000000000000000000000090611b3a9083906001600160801b0316612a9d565b61109f9190612a9d565b611b4c612856565b5f80611b5784611e45565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611b919190612cd3565b6040805180830381865af4158015611bab573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bcf9190612ce2565b9350905082611be357505f91506100a99050565b5f611c09611c048461016001518561014001516116e690919063ffffffff16565b6114fd565b611c29611c04856101200151866101000151611a9590919063ffffffff16565b611c339190612b4a565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611d67573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d8b9190612d68565b935093509350935080611da657505f98975050505050505050565b868414611dd757611db6846110e5565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e0857611de7836120fe565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611e3657611e18826110e5565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611e4d6128a0565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611f45911661222b565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611f779290041661222b565b905292915050565b5f80611f8b848461229f565b909250905080611f9d57611f9d612139565b5092915050565b5f815f03611fbb5750670de0b6b3a7640000610dc7565b825f03611fc957505f610dc7565b5f611fd3836114fd565b90505f611fe7611fe2866114fd565b6122da565b9050818102611ffe670de0b6b3a764000082612da6565b9050612009816124ff565b9695505050505050565b5f825f036120225750846110dc565b8115612074576120536120358487612af7565b61203f85876116e6565b612049888a6116e6565b6116ae9190612af7565b90505f612060858861124b565b90508082101561206e578091505b506110dc565b82850361208257505f6110dc565b61200961208f8487612a9d565b6120998587611a95565b6120a3888a6116e6565b6116ae9190612a9d565b5f61109f83670de0b6b3a764000084612208565b5f61109f83670de0b6b3a7640000846119e4565b5f60016001607f1b0382111561110e5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b031982128061211b575060016001607f1b0382135b1561110e5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f8061215e845f612691565b612168845f612691565b6121729190612b4a565b90505f81131561218d576121868186612af7565b94506121ab565b5f8112156121ab5761219e81612cb9565b6121a89086612a9d565b94505b50929392505050565b5f60405163350b944160e11b815260040160405180910390fd5b6122026001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866126a6565b50505050565b5f825f19048411830215820261221c575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061223e61040f565b6122489190612d10565b9050808311612257575f612261565b6122618184612a9d565b915061109f612298670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612d10565b83906120c1565b5f805f836122ac866114fd565b6122b69190612b4a565b90505f8112156122cc575f8092509250506122d3565b9150600190505b9250929050565b5f8082136122fb5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061237e9084901c6114fd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361251857505f919050565b680755bf798b4a1bf1e58212612541576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061200974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6114fd565b5f81831361269f578161109f565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526126f89084906126fd565b505050565b5f6127116001600160a01b03841683612763565b905080515f141580156127355750808060200190518101906127339190612dd2565b155b156126f857604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b606061109f83835f845f80856001600160a01b031684866040516127879190612ded565b5f6040518083038185875af1925050503d805f81146127c1576040519150601f19603f3d011682016040523d82523d5f602084013e6127c6565b606091505b50915091506120098683836060826127e6576127e18261282d565b61109f565b81511580156127fd57506001600160a01b0384163b155b1561282657604051639996b31560e01b81526001600160a01b038516600482015260240161275a565b508061109f565b80511561283d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061286a6128a0565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612907575f80fd5b8335925060208401359150604084013567ffffffffffffffff81111561292b575f80fd5b84016060818703121561293c575f80fd5b809150509250925092565b5f8060408385031215612958575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f6020828403121561298b575f80fd5b813561109f81612967565b80151581146103f5575f80fd5b5f602082840312156129b3575f80fd5b813561109f81612996565b5f808335601e198436030181126129d3575f80fd5b83018035915067ffffffffffffffff8211156129ed575f80fd5b6020019150368190038213156122d3575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612a5660a083018486612a01565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612a8457612a84612a62565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612a89565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612ae960e083018486612a01565b9a9950505050505050505050565b80820180821115610dc757610dc7612a89565b6001600160701b03818116838216019080821115611f9d57611f9d612a89565b6001600160801b03818116838216019080821115611f9d57611f9d612a89565b8181035f831280158383131683831282161715611f9d57611f9d612a89565b5f60208284031215612b79575f80fd5b815161109f81612967565b6001600160801b03828116828216039080821115611f9d57611f9d612a89565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612c35828551612ba4565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612ca8575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612ccd57612ccd612a89565b505f0390565b6101808101610dc78284612ba4565b5f8060408385031215612cf3575f80fd5b825191506020830151612d0581612996565b809150509250929050565b8082028115828204841417610dc757610dc7612a89565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612a89565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612d7b575f80fd5b8451935060208501519250604085015191506060850151612d9b81612996565b939692955090935050565b5f82612db457612db4612a62565b600160ff1b82145f1984141615612dcd57612dcd612a89565b500590565b5f60208284031215612de2575f80fd5b815161109f81612996565b5f82515f5b81811015612e0c5760208186018101518583015201612df2565b505f92019182525091905056fea264697066735822122070c1d6323565ab843f4f8860f22738189f86eac0578d2aa9d44b8b8d8aa3ab7364736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
