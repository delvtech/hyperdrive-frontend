export const MockHyperdriveTarget1 = {
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
        }
    ],
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162004103380380620041038339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c666200049d5f395f50505f50505f610b2e01525f50505f818160a9015281816103140152612f3c01525f818161139301528181611791015281816117f401528181612b2501528181612b6101528181612d590152612f1601525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612ef001525f611ba501525f8181611cc601528181612307015261237f01525f81816108a901528181610f4301528181611c9a015261235301525f8181610e3e01526122cd01525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612f6201525f81816107e701528181610ec4015281816116ef015281816121a6015261348601525f81816105b2015281816106290152818161069d0152818161076801526107a001525f50505f8181611984015281816119cd015281816125e30152818161262c01528181612701015281816127aa0152818161289001526129390152613c665ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b610046366004613716565b610070565b60405190815260200160405180910390f35b61004b61006b366004613716565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f8282546101759190613784565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc9083613797565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b60208301836137ca565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a016137f2565b6102bd8a6102b78d8f613784565b90611584565b8d6102cb60408c018c61380d565b6040516102df989796959493929190613878565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf9190613784565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc90836138bf565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b660208301836137ca565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a016137f2565b8a61050260408b018b61380d565b60405161051597969594939291906138e6565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a60208301836137ca565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f0000000000000000000000000000000000000000000000000000000000000000611a60565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b613784565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d7611a75565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b92505b5061073e83611aab565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b613926565b8a8461102b565b6107d2896107cc6107c57f000000000000000000000000000000000000000000000000000000000000000083613784565b4290611ad4565b8461102b565b6107db88611ae8565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d613926565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611c85565b915091508060095f8282546108789190613784565b909155506108939050865f8461088d81611321565b88611164565b61089d8183613784565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d52565b91506108e16108dc8385611584565b611d9b565b600680546002906109029084906201000090046001600160701b0316613939565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f82611aab565b60068054601090610951908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611c85565b915091508060095f8282546109c49190613784565b909155506109df9050835f846109d981611321565b8a61177a565b6109e98183613926565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b0316613939565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a4682611aab565b60068054601090610a68908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab49190613797565b5f61134e565b8e610ac58482611dc4565b50505b5f610ad284611fb3565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac9190613979565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906120f5565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf1908490613926565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d53611a75565b90505f610d5f8a61217b565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121ca565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b9550610e67858c610e62897f0000000000000000000000000000000000000000000000000000000000000000612239565b612268565b15610e7457610e746113ec565b5f805f610e8385878b876122a9565b9c5091945092509050610e968184613926565b610ea09089613784565b9750610eac8284613784565b610eb6908d613784565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee9190613926565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d52565b9950610f73878a613926565b9850670de0b6b3a7640000610ff0610f8b8787613784565b600254610fa9908f90600160801b90046001600160801b0316613926565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f6123bb565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e83611aab565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c78886613926565b6110d19190613994565b85670de0b6b3a76400006110e5878a613926565b6110ef9190613994565b859291906001612457565b611aab565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61113484611aab565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a764000086613994565b600554600160801b90046001600160801b031691908a5f612457565b600580546001600160801b03928316600160801b0292169190911790556111d286611aab565b6111dc90826139ab565b600480546001600160801b03928316600160801b02921691909117905561120284611aab565b600280545f9061121c9084906001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611249836124fd565b600480545f9061125d908490600f0b6139cb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d85611aab565b600280546010906112af908490600160801b90046001600160801b03166139ab565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b9190613797565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b03168484612538565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f00000000000000000000000000000000000000000000000000000000000000008361259a565b6003546113ce91906001600160801b0316613784565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611dc4565b5f805f61141d84611ae8565b90925090505f61142d8686611584565b905081831115611445576114428683856125ae565b95505b8281101561145757808303925061145b565b5f92505b61146483611d9b565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c381611aab565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b9050611504816125c9565b9450845f03611516575f91505061157d565b84915061152960408401602085016137f2565b15611558576115518561153f60208601866137ca565b61154c604087018761380d565b6126af565b915061157b565b61157b8561156960208601866137ca565b611576604087018761380d565b61283f565b505b9392505050565b5f61157d8383670de0b6b3a76400006125ae565b5f805f805f805f806115a8611a75565b90505f6115b48a61217b565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f00000000000000000000000000000000000000000000000000000000000000006129cc565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b985061169a84878b886122a9565b9c5091945090925090506116ae8284613926565b6116b89089613926565b97506116c48184613784565b6116ce908e613926565b9c506116da8a8e613784565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f6117199190613926565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b60016123bb565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba8583613926565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de8482613797565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d8383612a1f565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a764000088613994565b6005546001600160801b031691908c5f612457565b600580546001600160801b0319166001600160801b03929092169190911790556118978882613926565b90506118a281611aab565b600380546001600160801b03928316600160801b0292169190911790556118c883611aab565b600280546001600160801b0319166001600160801b03929092169190911790556118f1826124fd565b600480546001600160801b0319166001600160801b039290921691909117905561191a87611aab565b6002805460109061193c908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119b8575047611a41565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a1a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a3e91906139f8565b90505b600f545f03611a50575f61157d565b600f5461157d90849083906125ae565b5f611a6b8284613a23565b61157d9084613926565b6002546004545f916105a6916001600160801b0390911690600f0b612a1f565b5f61007d82611aa58588886125ae565b90612a44565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f818311611ae2578261157d565b50919050565b6006545f908190611b0a908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611c80575f611b338383613926565b9050611b426110fa8286612ab3565b60068054601090611b64908490600160801b90046001600160801b03166139ab565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611b9c8583612ac790919063ffffffff16565b90505f611bc9827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611bdc9190613784565b90915550611bec90508183613926565b9150611bf782611aab565b600280545f90611c119084906001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3e82612adb565b600480545f90611c52908490600f0b6139cb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611c918785612ac7565b91505f611cbe837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611cea817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611d0d57611cfc8282613926565b611d069084613926565b9250611d24565b611d178282613926565b611d219084613784565b92505b86861015611d4757611d378387896125ae565b9250611d448287896125ae565b91505b509550959350505050565b5f80611d6984611d638a888a6125ae565b90612ac7565b9050611d768884866125ae565b611d809082613784565b905086811115611d905786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e0e916001600160801b031690613926565b9050805f03611e2157600191505061131b565b5f611e2b85612b04565b9050805f03611e3f5760019250505061131b565b5f80611e4c838589612b9f565b9150915080611e61575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e9c929190613ab4565b6040805180830381865af4158015611eb6573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611eda9190613b29565b91509150611ef8611eea82611321565b611ef390613b4b565b612d13565b925082611f0d575f965050505050505061131b565b611f1682611aab565b600780545f90611f309084906001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f5d81611aab565b60078054601090611f7f908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fda87612ea7565b6040518263ffffffff1660e01b8152600401611ff69190613b65565b6040805180830381865af4158015612010573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120349190613b74565b915091508061204957505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916120ae91613784565b6120b89190613926565b9050805f036120ce57505f958695509350505050565b5f8087116120dc575f6120e7565b6120e78488846125ae565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561211857612118613ba2565b6040519080825280601f01601f191660200182016040528015612142576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612162578692505b828152825f602083013e90999098509650505050505050565b5f806121856105ab565b9050808311612194575f61219e565b61219e8184613926565b915061157d827f0000000000000000000000000000000000000000000000000000000000000000612ac7565b5f80806121ea6121e288670de0b6b3a7640000613926565b899087612fe1565b9050861561222c576121fc888861259a565b915061221d8a8a846122168a670de0b6b3a7640000613926565b8989613004565b92506122298382613784565b90505b9750975097945050505050565b5f61225661224f84670de0b6b3a7640000613926565b839061259a565b61157d90670de0b6b3a7640000613926565b5f8061229e85612276611a75565b6122809190613784565b600254610fa9908790600160801b90046001600160801b0316613926565b909210949350505050565b5f8080806122ff87866122f88b6122f26122cb8c670de0b6b3a7640000613926565b7f00000000000000000000000000000000000000000000000000000000000000009061259a565b9061259a565b9190612fe1565b935061232b847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f61234b61234389670de0b6b3a7640000613926565b8a9088612fe1565b9050612377817f000000000000000000000000000000000000000000000000000000000000000061259a565b93506123a3847f0000000000000000000000000000000000000000000000000000000000000000611584565b6123ad9084613784565b915050945094509450949050565b5f805f805f80888810156124275786156123dd576123da8d898b6125ae565b9c505b6123e88c898b6125ae565b9b506123f38b611321565b6123fc8d611321565b6124069190613797565b90506124138b898b6125ae565b9a506124208a898b6125ae565b9950612446565b6124308b611321565b6124398d611321565b6124439190613797565b90505b9b9c9a9b999a975050505050505050565b5f825f036124665750846124f4565b81156124b8576124976124798487613784565b6124838587611584565b61248d888a611584565b611d639190613784565b90505f6124a48588611ad4565b9050808210156124b2578091505b506124f4565b8285036124c657505f6124f4565b6124f16124d38487613926565b6124dd858761259a565b6124e7888a611584565b611d639190613926565b90505b95945050505050565b5f60016001607f1b031982128061251a575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f80612544845f613026565b61254e845f613026565b6125589190613797565b90505f8113156125735761256c8186613784565b9450612591565b5f8112156125915761258481613b4b565b61258e9086613926565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612fe1565b5f825f1904841183021582026125c2575f80fd5b5091020490565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126175750476126a0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612679573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061269d91906139f8565b90505b600f5461157d908490836125ae565b5f600f5485116126bf57846126c3565b600f545b94505f6126cf8661196a565b905085600f5f8282546126e29190613926565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612784576040516001600160a01b0387169083905f81818185875af1925050503d805f8114612774576040519150601f19603f3d011682016040523d82523d5f602084013e612779565b606091505b505080915050612817565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af11580156127f0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128149190613bb6565b90505b80612835576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f54841161284e5783612852565b600f545b93505f61285e8561196a565b905084600f5f8282546128719190613926565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612913576040516001600160a01b0386169083905f81818185875af1925050503d805f8114612903576040519150601f19603f3d011682016040523d82523d5f602084013e612908565b606091505b5050809150506129a6565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af115801561297f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129a39190613bb6565b90505b806129c4576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f80806129ec6129e488670de0b6b3a7640000613926565b8990876125ae565b9050861561222c576129fe8888611584565b915061221d8a8a84612a188a670de0b6b3a7640000613926565b898961303b565b5f80612a2b848461304b565b909250905080612a3d57612a3d6113ec565b5092915050565b5f815f03612a5b5750670de0b6b3a764000061131b565b825f03612a6957505f61131b565b5f612a7383611321565b90505f612a87612a8286611321565b613086565b9050818102612a9e670de0b6b3a764000082613bd1565b9050612aa9816132ab565b9695505050505050565b5f61157d83670de0b6b3a764000084612fe1565b5f61157d83670de0b6b3a7640000846125ae565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612b1e906001600160801b031684612ab3565b9050612b4a7f000000000000000000000000000000000000000000000000000000000000000082613784565b6002546001600160801b03161115611ae2576002547f000000000000000000000000000000000000000000000000000000000000000090612b959083906001600160801b0316613926565b61157d9190613926565b612ba7613677565b5f80612bb284612ea7565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612bec9190613b65565b6040805180830381865af4158015612c06573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c2a9190613b74565b9350905082612c3e57505f9150612d0b9050565b5f612c64612c5f84610160015185610140015161158490919063ffffffff16565b611321565b612c84612c5f85610120015186610100015161259a90919063ffffffff16565b612c8e9190613797565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612dc9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ded9190613bfd565b935093509350935080612e0857505f98975050505050505050565b868414612e3957612e1884611aab565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612e6a57612e49836124fd565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612e9857612e7a82611aab565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612eaf6136c1565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612fa7911661343d565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612fd99290041661343d565b905292915050565b5f825f190484118302158202612ff5575f80fd5b50910281810615159190040190565b5f806130148888888888886134b1565b909250905080611d9057611d906113ec565b5f818313613034578161157d565b5090919050565b5f8061301488888888888861358d565b5f805f8361305886611321565b6130629190613797565b90505f811215613078575f80925092505061307f565b9150600190505b9250929050565b5f8082136130a75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061312a9084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132c457505f919050565b680755bf798b4a1bf1e582126132ed576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612aa974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a76400006134506105ab565b61345a9190613994565b9050808311613469575f613473565b6134738184613926565b915061157d6134aa670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613994565b8390612ac7565b5f805f6134c18989888888613649565b9050868810156134d7575f809250925050613582565b96869003966134e68887612a44565b9750878110156134fc575f809250925050613582565b87810361350a818688612fe1565b9050670de0b6b3a7640000811061353e57613537613530670de0b6b3a764000089612ab3565b8290612a44565b9050613556565b613553613530670de0b6b3a764000089612ac7565b90505b6135608186612ab3565b905089811015613577575f80935093505050613582565b899003925060019150505b965096945050505050565b5f805f61359d8989888888613649565b90506135ad86611aa5898b613784565b9750878110156135c3575f809250925050613582565b8781036135d1818688612fe1565b9050670de0b6b3a764000081106135fe576135f7613530670de0b6b3a764000089612ab3565b9050613616565b613613613530670de0b6b3a764000089612ac7565b90505b6136208186612ab3565b9050808a1015613637575f80935093505050613582565b90980398600198509650505050505050565b5f6136548585612a44565b61366d61366586611aa5868b61259a565b859085612fe1565b6124f19190613784565b60405180610120016040528061368b6136c1565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613729575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613754575f80fd5b850160608188031215613765575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b613770565b8181035f831280158383131683831282161715612a3d57612a3d613770565b6001600160a01b0381168114610591575f80fd5b5f602082840312156137da575f80fd5b813561157d816137b6565b8015158114610591575f80fd5b5f60208284031215613802575f80fd5b813561157d816137e5565b5f808335601e19843603018112613822575f80fd5b83018035915067ffffffffffffffff82111561383c575f80fd5b60200191503681900382131561307f575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6138b160e083018486613850565b9a9950505050505050505050565b8082018281125f8312801582168215821617156138de576138de613770565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61391960c083018486613850565b9998505050505050505050565b8181038181111561131b5761131b613770565b6001600160701b03818116838216019080821115612a3d57612a3d613770565b6001600160801b03818116838216019080821115612a3d57612a3d613770565b5f60208284031215613989575f80fd5b815161157d816137b6565b808202811582820484141761131b5761131b613770565b6001600160801b03828116828216039080821115612a3d57612a3d613770565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b613770565b5f60208284031215613a08575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f82613a3157613a31613a0f565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613ac7828551613a36565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613b3a575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613b5f57613b5f613770565b505f0390565b610180810161131b8284613a36565b5f8060408385031215613b85575f80fd5b825191506020830151613b97816137e5565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215613bc6575f80fd5b815161157d816137e5565b5f82613bdf57613bdf613a0f565b600160ff1b82145f1984141615613bf857613bf8613770565b500590565b5f805f8060808587031215613c10575f80fd5b8451935060208501519250604085015191506060850151613765816137e556fea264697066735822122034da2b5732f62280d0c6e2269d467a1f7828d6d5aff85ef3b012edddfc43472564736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
