export const EzETHTarget4 = {
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
    bytecode: '0x6102c06040523480156200001257600080fd5b506040516200379f3803806200379f833981016040819052620000359162000235565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000145919062000385565b6001600160a01b03166102a05250620003ac92505050565b60405161020081016001600160401b03811182821017156200018f57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ab57600080fd5b50565b8051620001bb8162000195565b919050565b600060808284031215620001d357600080fd5b604051608081016001600160401b03811182821017156200020457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a08112156200024d57600080fd5b610260808212156200025e57600080fd5b620002686200015d565b91506200027586620001ae565b82526200028560208701620001ae565b60208301526200029860408701620001ae565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e083015261010080870151818401525061012080870151818401525061014080870151818401525061016062000303818801620001ae565b9083015261018062000317878201620001ae565b908301526101a06200032b878201620001ae565b908301526101c06200033f878201620001ae565b908301526101e06200035488888301620001c0565b818401525081945062000369818701620001ae565b935050506200037c6102808501620001ae565b90509250925092565b6000602082840312156200039857600080fd5b8151620003a58162000195565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516132a9620004f6600039600081816110db01526124130152600081816110fc01526124340152600050506000505060006109c10152600050506000818161026d0152611fc701526000818161180d0152818161187001528181611bac01528181611be801528181611de00152611fa101526000818161056f0152611f7b015260006113e20152600061153d0152600081816107330152611511015260005050600081816105900152611fed01526000818161066b01526125a00152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb015261062301526000818161111d0152818161245501526124bb0152600050506132a96000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612b9d565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612bf4565b6100b5565b005b610059610095366004612b9d565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610ad0565b90935091506101266020850185612c2b565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612c56565b61017160408c018c612c73565b60405161018396959493929190612ce3565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610c13565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612d33565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610e0e565b6102eb600360f81b6102e56020870187612c2b565b88610ee8565b60006103066102fd6020870187612c2b565b88848989610ad0565b90945090506103158188612d5d565b9250600061032283610f88565b5090506103326020870187612c2b565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612c56565b8a888e80604001906103829190612c73565b604051610396989796959493929190612d70565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612c2b565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a76400006110d4565b905090565b6000610421427f0000000000000000000000000000000000000000000000000000000000000000611142565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610ac8565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612db8565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a61115f565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611180565b92505b506105c1836111a0565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612d5d565b8a846111ce565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612db8565b429061130c565b846111ce565b61065e88611321565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612d5d565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c6114c5565b6000818152600b60205260408120549192508c8c831561080257600192506000806106eb86898d8660006114fa565b9150915080600960008282546107019190612db8565b9091555061071d905086600084610717816115c9565b886115f3565b6107278183612db8565b915061075786838a8e877f000000000000000000000000000000000000000000000000000000000000000061176d565b915061076b61076683856117b7565b6117cc565b6006805460029061078c9084906201000090046001600160701b0316612dcb565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b9826111a0565b600680546010906107db908490600160801b90046001600160801b0316612deb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f6001846114c5565b6000818152600b6020526040902054909150801561091e576001945060008061083c838b8f8860016114fa565b9150915080600960008282546108529190612db8565b9091555061086e905083600084610868816115c9565b8a6117f6565b6108788183612d5d565b915061088761076683876117b7565b600680546002906108a89084906201000090046001600160701b0316612dcb565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d5826111a0565b600680546010906108f7908490600160801b90046001600160801b0316612deb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a610930876115c9565b610939836115c9565b6109439190612e0b565b60006119e7565b8e6109558482610c13565b50505b600061096384610f88565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190612e2b565b90506001600160a01b03811615610ab657610ab35a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a26565b50505b509b9d50505050505050505050505050505b949350505050565b600080610adc85611ab1565b505060075485906001600160801b031680821115610b0157806001600160801b031691505b81600003610b16576000809250925050610c09565b610b25600360f81b8984610e0e565b600754600090610b4b9084906001600160801b03600160801b9091048116908516611abe565b9050610b56836111a0565b610b609083612e48565b600780546001600160801b0319166001600160801b0392909216919091179055610b89816111a0565b60078054601090610bab908490600160801b90046001600160801b0316612e48565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bda818887611adc565b9350610be68684611b75565b841015610c065760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c5e916001600160801b031690612d5d565b905080600003610c72576001915050610e08565b6000610c7d85611b8a565b905080600003610c9257600192505050610e08565b600080610ca0838589611c26565b9150915080610cb6576000945050505050610e08565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cf2929190612ee6565b6040805180830381865af4158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190612f5c565b91509150610d50610d42826115c9565b610d4b90612f80565b611d9a565b925082610d665760009650505050505050610e08565b610d6f826111a0565b60078054600090610d8a9084906001600160801b0316612deb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610db7816111a0565b60078054601090610dd9908490600160801b90046001600160801b0316612deb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e94908490612d5d565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f1a908490612db8565b90915550506000838152600b602052604081208054839290610f3d908490612db8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610edb565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb187611f32565b6040518263ffffffff1660e01b8152600401610fcd9190612f9c565b6040805180830381865af4158015610fe9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100d9190612fab565b9150915080611023575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108991612db8565b6110939190612d5d565b9050806000036110ab57506000958695509350505050565b60008087116110bb5760006110c6565b6110c6848884611abe565b976001975095505050505050565b6000610e087f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008561206c565b600061114e8284612d33565b6111589084612d5d565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b6121c3565b600061119782611191858888611abe565b906121e9565b95945050505050565b60006001600160801b038211156111ca57604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036111fa5750505050565b6000848152600860205260408120546001600160801b03169081900361125457611223836111a0565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112d2565b6112a56112a0670de0b6b3a764000061126d8886612d5d565b6112779190612fdb565b85670de0b6b3a764000061128b878a612d5d565b6112959190612fdb565b85929190600161225e565b6111a0565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112db846111a0565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161131b5782611158565b50919050565b6006546000908190611344908490600160801b90046001600160801b03166117b7565b6006546201000090046001600160701b031692509050818111156114c057600061136e8383612d5d565b905061137d6112a082866122fc565b6006805460109061139f908490600160801b90046001600160801b0316612e48565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113d8858361231190919063ffffffff16565b90506000611406827f00000000000000000000000000000000000000000000000000000000000000006117b7565b9050806009600082825461141a9190612db8565b9091555061142a90508183612d5d565b9150611435826111a0565b600280546000906114509084906001600160801b0316612deb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061147d82612326565b60048054600090611492908490600f0b612ff2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114ef5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806115078785612311565b91506000611535837f00000000000000000000000000000000000000000000000000000000000000006117b7565b9050611561817f00000000000000000000000000000000000000000000000000000000000000006117b7565b91508315611584576115738282612d5d565b61157d9084612d5d565b925061159b565b61158e8282612d5d565b6115989084612db8565b92505b868610156115be576115ae838789611abe565b92506115bb828789611abe565b91505b509550959350505050565b60006001600160ff1b038211156111ca5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661163c6112a08261161f670de0b6b3a764000086612fdb565b600554600160801b90046001600160801b031691908a600061225e565b600580546001600160801b03928316600160801b029216919091179055611662866111a0565b61166c9082612e48565b600480546001600160801b03928316600160801b029216919091179055611692846111a0565b600280546000906116ad9084906001600160801b0316612deb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116da83612350565b600480546000906116ef908490600f0b612ff2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061171f856111a0565b60028054601090611741908490600160801b90046001600160801b0316612e48565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117858461177f8a888a611abe565b90612311565b9050611792888486611abe565b61179c9082612db8565b9050868111156117ac5786810391505b509695505050505050565b60006111588383670de0b6b3a7640000611abe565b60006001600160701b038211156111ca5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061183857507f00000000000000000000000000000000000000000000000000000000000000006118368583612d5d565b105b156118455761184561238c565b6004549084900390600f0b61185a8482612e0b565b905083611866866115c9565b13801561189b57507f000000000000000000000000000000000000000000000000000000000000000061189983836121c3565b105b156118a8576118a861238c565b600354600160801b90046001600160801b03166118ea6112a0826118d4670de0b6b3a764000088612fdb565b6005546001600160801b031691908c600061225e565b600580546001600160801b0319166001600160801b03929092169190911790556119148882612d5d565b905061191f816111a0565b600380546001600160801b03928316600160801b029216919091179055611945836111a0565b600280546001600160801b0319166001600160801b039290921691909117905561196e82612350565b600480546001600160801b0319166001600160801b0392909216919091179055611997876111a0565b600280546010906119b9908490600160801b90046001600160801b0316612deb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a02906112a0906001600160801b031684846123a5565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a4c57611a4c61301f565b6040519080825280601f01601f191660200182016040528015611a76576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611a97578692505b828152826000602083013e90999098509650505050505050565b6000610e08826004610c13565b6000826000190484118302158202611ad557600080fd5b5091020490565b600080611ae985856117b7565b9050611af48161240c565b945084600003611b08576000915050611158565b849150611b1b6040840160208501612c56565b15611b4a57611b4385611b316020860186612c2b565b611b3e6040870187612c73565b61247a565b9150611b6d565b611b6d85611b5b6020860186612c2b565b611b686040870187612c73565b612495565b509392505050565b60006111588383670de0b6b3a764000061252f565b6003546000908190611ba5906001600160801b0316846122fc565b9050611bd17f000000000000000000000000000000000000000000000000000000000000000082612db8565b6002546001600160801b0316111561131b576002547f000000000000000000000000000000000000000000000000000000000000000090611c1c9083906001600160801b0316612d5d565b6111589190612d5d565b611c2e612aea565b600080611c3a84611f32565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c759190612f9c565b6040805180830381865af4158015611c91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cb59190612fab565b9350905082611cca5750600091506100ad9050565b6000611cf1611cec8461016001518561014001516117b790919063ffffffff16565b6115c9565b611d11611cec856101200151866101000151611b7590919063ffffffff16565b611d1b9190612e0b565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e779190613035565b935093509350935080611e935750600098975050505050505050565b868414611ec457611ea3846111a0565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611ef557611ed483612350565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f2357611f05826111a0565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f3a612b3c565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916120329116612555565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261206492900416612555565b905292915050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156120ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526120d5919081019061312f565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612119573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213d919061320f565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb0906064015b602060405180830381865afa158015612194573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121b8919061320f565b979650505050505050565b6000806121d084846125cb565b9092509050806121e2576121e261238c565b5092915050565b6000816000036122025750670de0b6b3a7640000610e08565b8260000361221257506000610e08565b600061221d836115c9565b9050600061223261222d866115c9565b61260a565b9050818102612249670de0b6b3a764000082613228565b905061225481612830565b9695505050505050565b60008260000361226f575084611197565b81156122c2576122a06122828487612db8565b61228c85876117b7565b612296888a6117b7565b61177f9190612db8565b905060006122ae858861130c565b9050808210156122bc578091505b50611197565b8285036122d157506000611197565b6122546122de8487612d5d565b6122e88587611b75565b6122f2888a6117b7565b61177f9190612d5d565b600061115883670de0b6b3a76400008461252f565b600061115883670de0b6b3a764000084611abe565b600060016001607f1b038211156111ca5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061236e575060016001607f1b0382135b156111ca5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b6000806123b38460006129c5565b6123be8460006129c5565b6123c89190612e0b565b905060008113156123e4576123dd8186612db8565b9450612403565b6000811215612403576123f681612f80565b6124009086612d5d565b94505b50929392505050565b6000610e087f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000856129db565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612504573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125289190613256565b5050505050565b600082600019048411830215820261254657600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612569610426565b6125739190612fdb565b905080831161258357600061258d565b61258d8184612d5d565b91506111586125c4670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612fdb565b8390612311565b6000806000836125da866115c9565b6125e49190612e0b565b905060008112156125fc576000809250925050612603565b9150600190505b9250929050565b600080821361262c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906126af9084901c6115c9565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361284b57506000919050565b680755bf798b4a1bf1e58212612874576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061225474029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115c9565b60008183136129d45781611158565b5090919050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612a1c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612a44919081019061312f565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612aac919061320f565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a90606401612177565b604051806101200160405280612afe612b3c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612bb257600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612bd757600080fd5b840160608187031215612be957600080fd5b809150509250925092565b60008060408385031215612c0757600080fd5b50508035926020909101359150565b6001600160a01b038116811461040b57600080fd5b600060208284031215612c3d57600080fd5b813561115881612c16565b801515811461040b57600080fd5b600060208284031215612c6857600080fd5b813561115881612c48565b6000808335601e19843603018112612c8a57600080fd5b83018035915067ffffffffffffffff821115612ca557600080fd5b60200191503681900382131561260357600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612d1160a083018486612cba565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612d4257612d42612d1d565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0857610e08612d47565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612daa60e083018486612cba565b9a9950505050505050505050565b80820180821115610e0857610e08612d47565b6001600160701b038181168382160190808211156121e2576121e2612d47565b6001600160801b038181168382160190808211156121e2576121e2612d47565b81810360008312801583831316838312821617156121e2576121e2612d47565b600060208284031215612e3d57600080fd5b815161115881612c16565b6001600160801b038281168282160390808211156121e2576121e2612d47565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612efa828551612e68565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612f6f57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612f9557612f95612d47565b5060000390565b6101808101610e088284612e68565b60008060408385031215612fbe57600080fd5b825191506020830151612fd081612c48565b809150509250929050565b8082028115828204841417610e0857610e08612d47565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0857610e08612d47565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561304b57600080fd5b845193506020850151925060408501519150606085015161306b81612c48565b939692955090935050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561309f5761309f61301f565b604052919050565b600067ffffffffffffffff8211156130c1576130c161301f565b5060051b60200190565b600082601f8301126130dc57600080fd5b815160206130f16130ec836130a7565b613076565b8083825260208201915060208460051b87010193508684111561311357600080fd5b602086015b848110156117ac5780518352918301918301613118565b60008060006060848603121561314457600080fd5b835167ffffffffffffffff8082111561315c57600080fd5b818601915086601f83011261317057600080fd5b815160206131806130ec836130a7565b82815260059290921b8401810191818101908a84111561319f57600080fd5b8286015b848110156131d7578051868111156131bb5760008081fd5b6131c98d86838b01016130cb565b8452509183019183016131a3565b50918901519197509093505050808211156131f157600080fd5b506131fe868287016130cb565b925050604084015190509250925092565b60006020828403121561322157600080fd5b5051919050565b60008261323757613237612d1d565b600160ff1b82146000198414161561325157613251612d47565b500590565b60006020828403121561326857600080fd5b815161115881612c4856fea26469706673582212205e885e9605bc409f5ecae8ae47b7cb20e88cf1e69165e3f0c2fb3e32abd7fb4064736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
