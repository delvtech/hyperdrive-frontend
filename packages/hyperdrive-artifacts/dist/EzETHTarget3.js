export const EzETHTarget3 = {
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
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
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
            "name": "InvalidEffectiveShareReserves",
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
            "name": "PoolAlreadyInitialized",
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
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102c06040523480156200001257600080fd5b50604051620042b2380380620042b2833981016040819052620000359162000235565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000145919062000385565b6001600160a01b03166102a05250620003ac92505050565b60405161020081016001600160401b03811182821017156200018f57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ab57600080fd5b50565b8051620001bb8162000195565b919050565b600060808284031215620001d357600080fd5b604051608081016001600160401b03811182821017156200020457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a08112156200024d57600080fd5b610260808212156200025e57600080fd5b620002686200015d565b91506200027586620001ae565b82526200028560208701620001ae565b60208301526200029860408701620001ae565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e083015261010080870151818401525061012080870151818401525061014080870151818401525061016062000303818801620001ae565b9083015261018062000317878201620001ae565b908301526101a06200032b878201620001ae565b908301526101c06200033f878201620001ae565b908301526101e06200035488888301620001c0565b818401525081945062000369818701620001ae565b935050506200037c6102808501620001ae565b90509250925092565b6000602082840312156200039857600080fd5b8151620003a58162000195565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613d246200058e6000396000612bcd01526000612bee0152600050506000505060006112f901526000818161030301528181610332015261035f01526000818160de015281816105a9015261172001526000818161085601528181610941015281816109d401528181610add015281816115f1015281816116fa015281816120a401528181612107015281816129e601528181612d330152612d6f01526000818161013f015281816108c601528181610ea7015281816114b5015281816115190152818161156001526116d401526000611ca9015260008181611e040152612fcf01526000818161106b0152611dd801526000612f850152600081816101810152818161091901528181610ec801528181611485015281816114e901528181611581015261174601526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa3015261297c01526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b0152600081816119f70152612c0f015260005050613d246000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c3660046135de565b610066565b60405190815260200160405180910390f35b610041610061366004613642565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b6136a8565b611408565b611452565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f0000000000000000000000000000000000000000000000000000000000000000896136bb565b81526020810191909152604001600020546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061165f565b90506103287f0000000000000000000000000000000000000000000000000000000000000000826136a8565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f0000000000000000000000000000000000000000000000000000000000000000826136bb565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103f1916001600160801b03909116906136bb565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061042c9083906136a8565b9050600080600061043c8a61168b565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061047690849060040161374c565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b7919061375b565b91506104ca6104c58c6117c5565b6117f3565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b9185910161374c565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c919061375b565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e81876136bb565b9190611819565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e611837565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613789565b8e61184c565b61063a896118f4565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d91906136a8565b9b5090508a158061073757506107348c6000611901565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611819565b610770565b60005b905061077f6020850185613789565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b016137b4565b866107ca60408c018c6137d1565b6040516107dd9796959493929190613818565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f0000000000000000000000000000000000000000000000000000000000000000600261386c565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613883565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd8484611916565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e85858589600080611452565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a668561193c565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f84611966565b600480546001600160801b0319166001600160801b0392909216919091179055610ab88361193c565b600280546001600160801b03928316600160801b029216919091179055610b016000807f000000000000000000000000000000000000000000000000000000000000000061184c565b610b196000610b1360208c018c613789565b8a61184c565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f6020820182613789565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c60408701602088016137b4565b87610b8a60408901896137d1565b604051610b9d9796959493929190613818565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c136020830183613789565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b611916565b905090565b600080610c72878787866119a2565b9050610c7e818561165f565b979650505050505050565b81600080610c9d60408501602086016137b4565b15610cc257610cb885610cb360408701876137d1565b6119b9565b9093509050610cda565b5034610cda85610cd560408701876137d1565b6119d5565b610ce2611a72565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f0000000000000000000000000000000000000000000000000000000000000000611a85565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611400565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b6136a8565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b92505b50610ef98361193c565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b6136bb565b8a84611a9b565b610f8d89610f87610f807f0000000000000000000000000000000000000000000000000000000000000000836136a8565b4290611bd9565b84611a9b565b610f9688611be8565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d6136bb565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611d8c565b6000818152600b60205260408120549192508c8c831561113a576001925060008061102386898d866000611dc1565b91509150806009600082825461103991906136a8565b9091555061105590508660008461104f816117c5565b88611e90565b61105f81836136a8565b915061108f86838a8e877f000000000000000000000000000000000000000000000000000000000000000061200a565b91506110a361109e838561204e565b612063565b600680546002906110c49084906201000090046001600160701b03166138b1565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f18261193c565b60068054601090611113908490600160801b90046001600160801b03166138d1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611d8c565b6000818152600b602052604090205490915080156112565760019450600080611174838b8f886001611dc1565b91509150806009600082825461118a91906136a8565b909155506111a69050836000846111a0816117c5565b8a61208d565b6111b081836136bb565b91506111bf61109e838761204e565b600680546002906111e09084906201000090046001600160701b03166138b1565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d8261193c565b6006805460109061122f908490600160801b90046001600160801b03166138d1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561129057611282611268876117c5565b611271836117c5565b61127b91906138f1565b600061227e565b8e61128d84826122bd565b50505b600061129b846124b7565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113799190613911565b90506001600160a01b038116156113ee576113eb5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612603565b50505b509b9d50505050505050505050505050505b949350505050565b6000611430600b600061141c600286611d8c565b8152602001908152602001600020546117c5565b611442600b600061141c600187611d8c565b61144c91906138f1565b92915050565b6000806000806114628a8a612690565b915091508061147957600080935093505050611654565b60006114d9838a6114b27f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006136bb565b8b7f00000000000000000000000000000000000000000000000000000000000000006126cc565b509050600061153d848b846115167f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006136bb565b8d7f0000000000000000000000000000000000000000000000000000000000000000612789565b50905081158061154b575080155b15611557575060009050805b60006115a5858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b90506115b383838c84612847565b50909350600090506115c5848f6136a8565b905060006115e68b8b6115d7876117c5565b6115e1908e61392e565b612893565b90508b61161b6116167f0000000000000000000000000000000000000000000000000000000000000000836128fa565b6117c5565b611624836117c5565b611631611616868561204e565b61163b91906138f1565b61164591906138f1565b60019950995050505050505050505b965096945050505050565b600061009161167384846301e1338061290b565b61168585670de0b6b3a76400006136bb565b90611837565b611693613519565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161178b9116612931565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117bd92900416612931565b905292915050565b60006001600160ff1b038211156117ef5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117fc816129a0565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261183057600080fd5b5091020490565b600061009183670de0b6b3a764000084611819565b6000838152600a602090815260408083206001600160a01b03861684529091528120805483929061187e9084906136a8565b90915550506000838152600b6020526040812080548392906118a19084906136a8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061144c8260046122bd565b60008183136119105782610091565b50919050565b6000806119238484612690565b90925090508061193557611935612b38565b5092915050565b60006001600160801b038211156117ef57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611984575060016001607f1b0382135b156117ef5760405163a5353be560e01b815260040160405180910390fd5b6000610078826119b3858888611819565b90612b51565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6c9190613956565b50505050565b6000610c5e670de0b6b3a7640000612bc6565b6000611a918284613989565b61009190846136bb565b600083815260086020526040902054600160801b90046001600160801b0316808303611ac75750505050565b6000848152600860205260408120546001600160801b031690819003611b2157611af08361193c565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b9f565b611b72611b6d670de0b6b3a7640000611b3a88866136bb565b611b44919061386c565b85670de0b6b3a7640000611b58878a6136bb565b611b62919061386c565b859291906001612c34565b61193c565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611ba88461193c565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116119105782610091565b6006546000908190611c0b908490600160801b90046001600160801b031661204e565b6006546201000090046001600160701b03169250905081811115611d87576000611c3583836136bb565b9050611c44611b6d8286612cd2565b60068054601090611c66908490600160801b90046001600160801b031661399d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c9f858361183790919063ffffffff16565b90506000611ccd827f000000000000000000000000000000000000000000000000000000000000000061204e565b90508060096000828254611ce191906136a8565b90915550611cf1905081836136bb565b9150611cfc8261193c565b60028054600090611d179084906001600160801b03166138d1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d4482612ce7565b60048054600090611d59908490600f0b6139bd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611db65760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611dce8785611837565b91506000611dfc837f000000000000000000000000000000000000000000000000000000000000000061204e565b9050611e28817f000000000000000000000000000000000000000000000000000000000000000061204e565b91508315611e4b57611e3a82826136bb565b611e4490846136bb565b9250611e62565b611e5582826136bb565b611e5f90846136a8565b92505b86861015611e8557611e75838789611819565b9250611e82828789611819565b91505b509550959350505050565b600454600160801b90046001600160801b0316611ed9611b6d82611ebc670de0b6b3a76400008661386c565b600554600160801b90046001600160801b031691908a6000612c34565b600580546001600160801b03928316600160801b029216919091179055611eff8661193c565b611f09908261399d565b600480546001600160801b03928316600160801b029216919091179055611f2f8461193c565b60028054600090611f4a9084906001600160801b03166138d1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f7783611966565b60048054600090611f8c908490600f0b6139bd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fbc8561193c565b60028054601090611fde908490600160801b90046001600160801b031661399d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061201c846116858a888a611819565b9050612029888486611819565b61203390826136a8565b9050868111156120435786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611819565b60006001600160701b038211156117ef5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806120cf57507f00000000000000000000000000000000000000000000000000000000000000006120cd85836136bb565b105b156120dc576120dc612b38565b6004549084900390600f0b6120f184826138f1565b9050836120fd866117c5565b13801561213257507f00000000000000000000000000000000000000000000000000000000000000006121308383611916565b105b1561213f5761213f612b38565b600354600160801b90046001600160801b0316612181611b6d8261216b670de0b6b3a76400008861386c565b6005546001600160801b031691908c6000612c34565b600580546001600160801b0319166001600160801b03929092169190911790556121ab88826136bb565b90506121b68161193c565b600380546001600160801b03928316600160801b0292169190911790556121dc8361193c565b600280546001600160801b0319166001600160801b039290921691909117905561220582611966565b600480546001600160801b0319166001600160801b039290921691909117905561222e8761193c565b60028054601090612250908490600160801b90046001600160801b03166138d1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461229990611b6d906001600160801b03168484612893565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612308916001600160801b0316906136bb565b90508060000361231c57600191505061144c565b600061232785612d11565b90508060000361233c5760019250505061144c565b60008061234a838589612dad565b915091508061236057600094505050505061144c565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161239c9291906139ea565b6040805180830381865af41580156123b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123dc9190613a60565b915091506123fa6123ec826117c5565b6123f590613a84565b6129a0565b925082612410576000965050505050505061144c565b6124198261193c565b600780546000906124349084906001600160801b03166138d1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506124618161193c565b60078054601090612483908490600160801b90046001600160801b03166138d1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6124e08761168b565b6040518263ffffffff1660e01b81526004016124fc919061374c565b6040805180830381865af4158015612518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061253c9190613aa0565b9150915080612552575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916125b8916136a8565b6125c291906136bb565b9050806000036125da57506000958695509350505050565b60008087116125ea5760006125f5565b6125f5848884611819565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561262957612629613ad0565b6040519080825280601f01601f191660200182016040528015612653576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612674578692505b828152826000602083013e9093509150505b9550959350505050565b60008060008361269f866117c5565b6126a991906138f1565b905060008112156126c1576000809250925050610d57565b946001945092505050565b60008060006126de8888888888612f23565b90506000612709670de0b6b3a76400006126f88888612cd2565b61270291906136a8565b8390611837565b9050670de0b6b3a7640000811061273d5761273661272f670de0b6b3a764000089611837565b8290612b51565b9050612755565b61275261272f670de0b6b3a764000089612cd2565b90505b61275f8186611837565b90508881101561277757600080935093505050612686565b97909703976001975095505050505050565b600080600061279b8989888888612f52565b90506127b5866119b36127ae8a8d6136a8565b879061204e565b98506127c2858a86611819565b9850888110156127d9576000809250925050611654565b888103670de0b6b3a764000081106128075761280061272f670de0b6b3a764000089612cd2565b905061281f565b61281c61272f670de0b6b3a764000089611837565b90505b8089101561283557600080935093505050611654565b90970398600198509650505050505050565b600080600080600061285a898789612f77565b909250905061286982896136bb565b9750600061287882888a611819565b9050612884818b6136bb565b9a989950979650505050505050565b6000806128a1846000612ffd565b6128ac846000612ffd565b6128b691906138f1565b905060008113156128d2576128cb81866136a8565b94506128f1565b60008112156128f1576128e481613a84565b6128ee90866136bb565b94505b50929392505050565b60006100918383670de0b6b3a76400005b600082600019048411830215820261292257600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612945610d5e565b61294f919061386c565b905080831161295f576000612969565b61296981846136bb565b9150610091612702670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061386c565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7d9190613ae6565b935093509350935080612a995750600098975050505050505050565b868414612aca57612aa98461193c565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612afb57612ada83611966565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b2957612b0b8261193c565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612b6a5750670de0b6b3a764000061144c565b82600003612b7a5750600061144c565b6000612b85836117c5565b90506000612b9a612b95866117c5565b613013565b9050818102612bb1670de0b6b3a764000082613b27565b9050612bbc81613239565b9695505050505050565b600061144c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000856133ce565b600082600003612c45575084610078565b8115612c9857612c76612c5884876136a8565b612c62858761204e565b612c6c888a61204e565b61168591906136a8565b90506000612c848588611bd9565b905080821015612c92578091505b50610078565b828503612ca757506000610078565b610075612cb484876136bb565b612cbe85876128fa565b612cc8888a61204e565b61168591906136bb565b600061009183670de0b6b3a76400008461290b565b600060016001607f1b038211156117ef5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612d2c906001600160801b031684612cd2565b9050612d587f0000000000000000000000000000000000000000000000000000000000000000826136a8565b6002546001600160801b03161115611910576002547f000000000000000000000000000000000000000000000000000000000000000090612da39083906001600160801b03166136bb565b61009191906136bb565b612db561357a565b600080612dc18461168b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612dfc919061374c565b6040805180830381865af4158015612e18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e3c9190613aa0565b9350905082612e51575060009150612f1b9050565b6000612e7361161684610160015185610140015161204e90919063ffffffff16565b612e936116168561012001518661010001516128fa90919063ffffffff16565b612e9d91906138f1565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000612f2f8585612b51565b612f48612f40866119b3868b61204e565b859085611819565b61007591906136a8565b6000612f5e8585612b51565b612f48612f6f866119b3868b6128fa565b85908561290b565b600080612fc785612fc185817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612fb7818c612cd2565b612fc191906136bb565b906128fa565b9150612ff3827f000000000000000000000000000000000000000000000000000000000000000061204e565b9050935093915050565b600081831361300c5781610091565b5090919050565b60008082136130355760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130b89084901c6117c5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361325457506000919050565b680755bf798b4a1bf1e5821261327d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612bbc74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117c5565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561340f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526134379190810190613c0e565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561347b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061349f919061375b565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb090606401602060405180830381865afa1580156134f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7e919061375b565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061358e613519565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561191057600080fd5b600080600080600060a086880312156135f657600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561362957600080fd5b613635888289016135cc565b9150509295509295909350565b60008060006060848603121561365757600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561367c57600080fd5b613688868287016135cc565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561144c5761144c613692565b8181038181111561144c5761144c613692565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161144c82846136ce565b60006020828403121561376d57600080fd5b5051919050565b6001600160a01b0381168114610c3a57600080fd5b60006020828403121561379b57600080fd5b813561009181613774565b8015158114610c3a57600080fd5b6000602082840312156137c657600080fd5b8135610091816137a6565b6000808335601e198436030181126137e857600080fd5b83018035915067ffffffffffffffff82111561380357600080fd5b602001915036819003821315610d5757600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761144c5761144c613692565b60008060006060848603121561389857600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561193557611935613692565b6001600160801b0381811683821601908082111561193557611935613692565b818103600083128015838313168383128216171561193557611935613692565b60006020828403121561392357600080fd5b815161009181613774565b808201828112600083128015821682158216171561394e5761394e613692565b505092915050565b60006020828403121561396857600080fd5b8151610091816137a6565b634e487b7160e01b600052601260045260246000fd5b60008261399857613998613973565b500690565b6001600160801b0382811682821603908082111561193557611935613692565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561144c5761144c613692565b60006102a0820190506139fe8285516136ce565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a7357600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a9957613a99613692565b5060000390565b60008060408385031215613ab357600080fd5b825191506020830151613ac5816137a6565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613afc57600080fd5b8451935060208501519250604085015191506060850151613b1c816137a6565b939692955090935050565b600082613b3657613b36613973565b600160ff1b821460001984141615613b5057613b50613692565b500590565b604051601f8201601f1916810167ffffffffffffffff81118282101715613b7e57613b7e613ad0565b604052919050565b600067ffffffffffffffff821115613ba057613ba0613ad0565b5060051b60200190565b600082601f830112613bbb57600080fd5b81516020613bd0613bcb83613b86565b613b55565b8083825260208201915060208460051b870101935086841115613bf257600080fd5b602086015b848110156120435780518352918301918301613bf7565b600080600060608486031215613c2357600080fd5b835167ffffffffffffffff80821115613c3b57600080fd5b818601915086601f830112613c4f57600080fd5b81516020613c5f613bcb83613b86565b82815260059290921b8401810191818101908a841115613c7e57600080fd5b8286015b84811015613cb657805186811115613c9a5760008081fd5b613ca88d86838b0101613baa565b845250918301918301613c82565b5091890151919750909350505080821115613cd057600080fd5b50613cdd86828701613baa565b92505060408401519050925092509256fea2646970667358221220cb1d41cd09f146137f527652cdb67a2595490e58d351aafa88bce125bd85688664736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
