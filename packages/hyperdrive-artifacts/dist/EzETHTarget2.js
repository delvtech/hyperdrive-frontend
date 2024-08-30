export const EzETHTarget2 = {
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
            "name": "openLong",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
        }
    ],
    bytecode: '0x6102c06040523480156200001257600080fd5b50604051620042f1380380620042f1833981016040819052620000359162000235565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000145919062000385565b6001600160a01b03166102a05250620003ac92505050565b60405161020081016001600160401b03811182821017156200018f57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620001ab57600080fd5b50565b8051620001bb8162000195565b919050565b600060808284031215620001d357600080fd5b604051608081016001600160401b03811182821017156200020457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a08112156200024d57600080fd5b610260808212156200025e57600080fd5b620002686200015d565b91506200027586620001ae565b82526200028560208701620001ae565b60208301526200029860408701620001ae565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e083015261010080870151818401525061012080870151818401525061014080870151818401525061016062000303818801620001ae565b9083015261018062000317878201620001ae565b908301526101a06200032b878201620001ae565b908301526101c06200033f878201620001ae565b908301526101e06200035488888301620001c0565b818401525081945062000369818701620001ae565b935050506200037c6102808501620001ae565b90509250925092565b6000602082840312156200039857600080fd5b8151620003a58162000195565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613d736200057e60003960006124fb0152600061251c015260005050600050506000610c4101526000505060008181610100015281816103100152612cad0152600081816114d801528181611c7901528181611cdc0152818161248e0152818161288b015281816128c701528181612ac60152612c870152600081816107ef01528181610da101528181610de301528181610ed50152818161134b015281816113aa0152612c61015260006118980152600081816119be015281816125f10152818161266a0152612dc70152600081816109b301528181610e560152818161144501528181611992015261263e015260008181610e35015281816125bd0152612d8301526000818161081001528181610d7f01528181610e0401528181610ef601528181611329015281816113cb0152612cd30152600081816101de015281816103a8015281816108eb01526133c80152600081816106a9015281816107290152818161079f0152818161086b01526108a30152600081816116a4015261253d015260005050613d736000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c36600461365d565b61006d565b6040805192835260208301919091520160405180910390f35b61004161006836600461365d565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610d50565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c891906136d2565b909155506101d99050844283610f32565b6102037f0000000000000000000000000000000000000000000000000000000000000000856136d2565b98506102118389888c611070565b600061021e60018b61120a565b90506102378161023160208e018e6136fa565b8b61123f565b8d8a8a898e8561024a60208301836136fa565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613725565b8961029560408a018a613742565b6040516102a897969594939291906137b2565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112e7565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f0000000000000000000000000000000000000000000000000000000000000000846136d2565b90506000806000806103e08e89886112fa565b60098054949850929650909450925083916000906103ff9084906136d2565b909155506104109050874283610f32565b50600061041e84898d611480565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b896114b2565b600061046860028861120a565b90508c6104828261047c60208401846136fa565b8561123f565b858b868461049360208601866136fa565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613725565b6104e4896104de8a8d6137f3565b90610683565b8d6104f260408e018e613742565b604051610506989796959493929190613806565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b600061058460208301836136fa565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c26040850160208601613725565b156105e7576105dd856105d86040870187613742565b611666565b90935090506105ff565b50346105ff856105fa6040870187613742565b611682565b6106076112e7565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a764000061171f565b90505b92915050565b60006106cd427f000000000000000000000000000000000000000000000000000000000000000061173d565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610d48565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b6136d2565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da611753565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611774565b92505b5061084183611794565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b6137f3565b8a84610f32565b6108d5896108cf6108c87f0000000000000000000000000000000000000000000000000000000000000000836136d2565b42906117c2565b84610f32565b6108de886117d7565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d6137f3565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c61120a565b6000818152600b60205260408120549192508c8c8315610a82576001925060008061096b86898d86600061197b565b91509150806009600082825461098191906136d2565b9091555061099d90508660008461099781611a4a565b88611a74565b6109a781836136d2565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611bee565b91506109eb6109e68385610683565b611c38565b60068054600290610a0c9084906201000090046001600160701b031661384e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3982611794565b60068054601090610a5b908490600160801b90046001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f60018461120a565b6000818152600b60205260409020549091508015610b9e5760019450600080610abc838b8f88600161197b565b915091508060096000828254610ad291906136d2565b90915550610aee905083600084610ae881611a4a565b8a611c62565b610af881836137f3565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b031661384e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b5582611794565b60068054601090610b77908490600160801b90046001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611a4a565b610bb983611a4a565b610bc3919061388e565b6000611e53565b8e610bd58482611e92565b50505b6000610be38461208c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc191906138ae565b90506001600160a01b03811615610d3657610d335a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906121d8565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610d60611753565b600254909150610dc5908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612263565b600254909450610e28908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611774565b9150610e7f8785610e7a857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061228f565b6122f4565b15610e8c57610e8c612336565b610e988785888561234f565b91965094509250670de0b6b3a7640000610f1a610eb587846136d2565b600254610ed3908890600160801b90046001600160801b03166137f3565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611774565b1115610f2857610f28612336565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f5e5750505050565b6000848152600860205260408120546001600160801b031690819003610fb857610f8783611794565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611036565b611009611004670de0b6b3a7640000610fd188866137f3565b610fdb91906138cb565b85670de0b6b3a7640000610fef878a6137f3565b610ff991906138cb565b85929190600161239b565b611794565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61103f84611794565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110b26110048261109c670de0b6b3a7640000866138cb565b6005546001600160801b0316919088600161239b565b600580546001600160801b0319166001600160801b03929092169190911790556110db85611794565b600280546000906110f69084906001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061112384611794565b60028054601090611145908490600160801b90046001600160801b03166138e2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061117284611794565b61117c908261386e565b600380546001600160801b03808416600160801b029116179055905060006111a383612443565b90506111c1816111b287611a4a565b6111bc9084613902565b611e53565b6111ca84612487565b6111d6576111d6612336565b60006111e1856124e7565b90508061120157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112345760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906112719084906136d2565b90915550506000838152600b6020526040812080548392906112949084906136d2565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a76400006124f4565b600080600080600061130a611753565b60025490915061136f908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612562565b93508761137c8589612583565b111561138a5761138a612336565b60025460009081906113ef908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611774565b93506114058a670de0b6b3a7640000868c612598565b50919350909150611418905081836137f3565b61142290876137f3565b95508861146f816114698d611437868c6137f3565b8d61144287826126a6565b877f00000000000000000000000000000000000000000000000000000000000000006126bc565b90612583565b975090945050505093509350935093565b60006114926040830160208401613725565b1561149e5750826114ab565b6114a884846126e1565b90505b9392505050565b6002546001600160801b0316838110156114ce576114ce612336565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611506908390600f0b6126f6565b101561151457611514612336565b60045461155e9061100490600160801b90046001600160801b0316611541670de0b6b3a7640000866138cb565b600554600160801b90046001600160801b0316919089600161239b565b600580546001600160801b03928316600160801b02921691909117905561158481611794565b600280546001600160801b0319166001600160801b03929092169190911790556115ad85611794565b600280546010906115cf908490600160801b90046001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115fc85611794565b6004805460109061161e908490600160801b90046001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061164d83612443565b90506111c18161165c88611a4a565b6111bc908461388e565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156116f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611719919061392a565b50505050565b600082600019048411830215820261173657600080fd5b5091020490565b6000611749828461395d565b61069890846137f3565b6002546004546000916106cd916001600160801b0390911690600f0b6126f6565b600061178b8261178585888861171f565b9061271c565b95945050505050565b60006001600160801b038211156117be57604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116117d15782610698565b50919050565b60065460009081906117fa908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b0316925090508181111561197657600061182483836137f3565b90506118336110048286612787565b60068054601090611855908490600160801b90046001600160801b03166138e2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061188e85836126e190919063ffffffff16565b905060006118bc827f0000000000000000000000000000000000000000000000000000000000000000610683565b905080600960008282546118d091906136d2565b909155506118e0905081836137f3565b91506118eb82611794565b600280546000906119069084906001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119338261279c565b60048054600090611948908490600f0b613971565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061198887856126e1565b915060006119b6837f0000000000000000000000000000000000000000000000000000000000000000610683565b90506119e2817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611a05576119f482826137f3565b6119fe90846137f3565b9250611a1c565b611a0f82826137f3565b611a1990846136d2565b92505b86861015611a3f57611a2f83878961171f565b9250611a3c82878961171f565b91505b509550959350505050565b60006001600160ff1b038211156117be5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611abd61100482611aa0670de0b6b3a7640000866138cb565b600554600160801b90046001600160801b031691908a600061239b565b600580546001600160801b03928316600160801b029216919091179055611ae386611794565b611aed90826138e2565b600480546001600160801b03928316600160801b029216919091179055611b1384611794565b60028054600090611b2e9084906001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b5b836127c6565b60048054600090611b70908490600f0b613971565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ba085611794565b60028054601090611bc2908490600160801b90046001600160801b03166138e2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c0684611c008a888a61171f565b906126e1565b9050611c1388848661171f565b611c1d90826136d2565b905086811115611c2d5786810391505b509695505050505050565b60006001600160701b038211156117be5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611ca457507f0000000000000000000000000000000000000000000000000000000000000000611ca285836137f3565b105b15611cb157611cb1612336565b6004549084900390600f0b611cc6848261388e565b905083611cd286611a4a565b138015611d0757507f0000000000000000000000000000000000000000000000000000000000000000611d0583836126f6565b105b15611d1457611d14612336565b600354600160801b90046001600160801b0316611d5661100482611d40670de0b6b3a7640000886138cb565b6005546001600160801b031691908c600061239b565b600580546001600160801b0319166001600160801b0392909216919091179055611d8088826137f3565b9050611d8b81611794565b600380546001600160801b03928316600160801b029216919091179055611db183611794565b600280546001600160801b0319166001600160801b0392909216919091179055611dda826127c6565b600480546001600160801b0319166001600160801b0392909216919091179055611e0387611794565b60028054601090611e25908490600160801b90046001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611e6e90611004906001600160801b03168484612802565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611edd916001600160801b0316906137f3565b905080600003611ef157600191505061069b565b6000611efc85612869565b905080600003611f115760019250505061069b565b600080611f1f838589612905565b9150915080611f3557600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f71929190613a1c565b6040805180830381865af4158015611f8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb19190613a92565b91509150611fcf611fc182611a4a565b611fca90613ab6565b612a80565b925082611fe5576000965050505050505061069b565b611fee82611794565b600780546000906120099084906001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061203681611794565b60078054601090612058908490600160801b90046001600160801b031661386e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120b587612c18565b6040518263ffffffff1660e01b81526004016120d19190613ad2565b6040805180830381865af41580156120ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121119190613ae1565b9150915080612127575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161218d916136d2565b61219791906137f3565b9050806000036121af57506000958695509350505050565b60008087116121bf5760006121ca565b6121ca84888461171f565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121fe576121fe613b11565b6040519080825280601f01601f191660200182016040528015612228576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612249578692505b828152826000602083013e90999098509650505050505050565b600061228487878761227d88670de0b6b3a76400006137f3565b8787612d52565b979650505050505050565b60006114a86122d06122a984670de0b6b3a76400006137f3565b611469670de0b6b3a76400006122bf818a612787565b6122c991906137f3565b8790612583565b6122e290670de0b6b3a76400006136d2565b611c0084670de0b6b3a76400006137f3565b60008061232b85612303611753565b61230d91906136d2565b600254610ed3908790600160801b90046001600160801b03166137f3565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000612362898789612d75565b909250905061237182896137f3565b9750600061238082888a61171f565b905061238c818b6137f3565b9a989950979650505050505050565b6000826000036123ac57508461178b565b81156123ff576123dd6123bf84876136d2565b6123c98587610683565b6123d3888a610683565b611c0091906136d2565b905060006123eb85886117c2565b9050808210156123f9578091505b5061178b565b82850361240e5750600061178b565b61243961241b84876137f3565b6124258587612583565b61242f888a610683565b611c0091906137f3565b9695505050505050565b600061246b600b600061245760028661120a565b815260200190815260200160002054611a4a565b61247d600b600061245760018761120a565b61069b919061388e565b60006124b37f000000000000000000000000000000000000000000000000000000000000000083612583565b6003546124c991906001600160801b03166136d2565b6002546124df906001600160801b031684610683565b101592915050565b600061069b826004611e92565b600061069b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612df5565b600061228487878761257c88670de0b6b3a76400006137f3565b8787612f40565b60006106988383670de0b6b3a7640000612f51565b60008080806125e987866125e28b6114696125bb8c670de0b6b3a76400006137f3565b7f000000000000000000000000000000000000000000000000000000000000000090612583565b9190612f51565b9350612615847f0000000000000000000000000000000000000000000000000000000000000000610683565b9150600061263661262e89670de0b6b3a76400006137f3565b8a9088612f51565b9050612662817f0000000000000000000000000000000000000000000000000000000000000000612583565b935061268e847f0000000000000000000000000000000000000000000000000000000000000000610683565b61269890846136d2565b915050945094509450949050565b60008183116126b55781610698565b5090919050565b6000806126d4846126ce8a888a612f51565b90612787565b9050611c13888486612f51565b600061069883670de0b6b3a76400008461171f565b6000806127038484612f77565b90925090508061271557612715612336565b5092915050565b6000816000036127355750670de0b6b3a764000061069b565b826000036127455750600061069b565b600061275083611a4a565b9050600061276561276086611a4a565b612fb3565b905081810261277c670de0b6b3a764000082613b27565b9050612439816131d9565b600061069883670de0b6b3a764000084612f51565b600060016001607f1b038211156117be5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806127e4575060016001607f1b0382135b156117be5760405163a5353be560e01b815260040160405180910390fd5b60008061281084600061336e565b61281b84600061336e565b612825919061388e565b905060008113156128415761283a81866136d2565b9450612860565b60008112156128605761285381613ab6565b61285d90866137f3565b94505b50929392505050565b6003546000908190612884906001600160801b031684612787565b90506128b07f0000000000000000000000000000000000000000000000000000000000000000826136d2565b6002546001600160801b031611156117d1576002547f0000000000000000000000000000000000000000000000000000000000000000906128fb9083906001600160801b03166137f3565b6114ab91906137f3565b61290d6135aa565b60008061291984612c18565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129549190613ad2565b6040805180830381865af4158015612970573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129949190613ae1565b93509050826129a9575060009150612a789050565b60006129d06129cb84610160015185610140015161068390919063ffffffff16565b611a4a565b6129f06129cb85610120015186610100015161258390919063ffffffff16565b6129fa919061388e565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b5d9190613b55565b935093509350935080612b795750600098975050505050505050565b868414612baa57612b8984611794565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bdb57612bba836127c6565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c0957612beb82611794565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c206135fc565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d18911661337d565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d4a9290041661337d565b905292915050565b600080612d638888888888886133f3565b909250905080611c2d57611c2d612336565b600080612dbf8561146985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612db5818c612787565b61146991906137f3565b9150612deb827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612e36573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612e5e9190810190613c44565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612ea2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ec69190613d24565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb090606401602060405180830381865afa158015612f1c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122849190613d24565b600080612d638888888888886134bb565b6000826000190484118302158202612f6857600080fd5b50910281810615159190040190565b600080600083612f8686611a4a565b612f90919061388e565b90506000811215612fa857600080925092505061067c565b946001945092505050565b6000808213612fd55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130589084901c611a4a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136131f457506000919050565b680755bf798b4a1bf1e5821261321d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061243974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a4a565b60008183136126b55781610698565b600080670de0b6b3a76400006133916106a1565b61339b91906138cb565b90508083116133ab5760006133b5565b6133b581846137f3565b91506114ab6133ec670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138cb565b83906126e1565b6000806000613405898988888861357b565b905061341f866117856134188a8d6136d2565b8790610683565b985061342c858a8661171f565b9850888110156134435760008092509250506134b0565b888103670de0b6b3a764000081106134785761347161346a670de0b6b3a764000089612787565b829061271c565b9050613490565b61348d61346a670de0b6b3a7640000896126e1565b90505b808910156134a6576000809350935050506134b0565b8803925060019150505b965096945050505050565b60008060006134cd898988888861357b565b90506134dd86611785898b6136d2565b9750878110156134f45760008092509250506134b0565b878103613502818688612f51565b9050670de0b6b3a7640000811061352f5761352861346a670de0b6b3a764000089612787565b9050613547565b61354461346a670de0b6b3a7640000896126e1565b90505b6135518186612787565b9050808a1015613569576000809350935050506134b0565b90980398600198509650505050505050565b6000613587858561271c565b6135a061359886611785868b612583565b859085612f51565b61243991906136d2565b6040518061012001604052806135be6135fc565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561367357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561369f57600080fd5b8501606081880312156136b157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b6136bc565b6001600160a01b03811681146105ab57600080fd5b60006020828403121561370c57600080fd5b81356114ab816136e5565b80151581146105ab57600080fd5b60006020828403121561373757600080fd5b81356114ab81613717565b6000808335601e1984360301811261375957600080fd5b83018035915067ffffffffffffffff82111561377457600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a082015260006137e660c083018486613789565b9998505050505050505050565b8181038181111561069b5761069b6136bc565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061384060e083018486613789565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612715576127156136bc565b6001600160801b03818116838216019080821115612715576127156136bc565b8181036000831280158383131683831282161715612715576127156136bc565b6000602082840312156138c057600080fd5b81516114ab816136e5565b808202811582820484141761069b5761069b6136bc565b6001600160801b03828116828216039080821115612715576127156136bc565b8082018281126000831280158216821582161715613922576139226136bc565b505092915050565b60006020828403121561393c57600080fd5b81516114ab81613717565b634e487b7160e01b600052601260045260246000fd5b60008261396c5761396c613947565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b6136bc565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613a3082855161399e565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613aa557600080fd5b505080516020909101519092909150565b6000600160ff1b8201613acb57613acb6136bc565b5060000390565b610180810161069b828461399e565b60008060408385031215613af457600080fd5b825191506020830151613b0681613717565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613b3657613b36613947565b600160ff1b821460001984141615613b5057613b506136bc565b500590565b60008060008060808587031215613b6b57600080fd5b84519350602085015192506040850151915060608501516136b181613717565b604051601f8201601f1916810167ffffffffffffffff81118282101715613bb457613bb4613b11565b604052919050565b600067ffffffffffffffff821115613bd657613bd6613b11565b5060051b60200190565b600082601f830112613bf157600080fd5b81516020613c06613c0183613bbc565b613b8b565b8083825260208201915060208460051b870101935086841115613c2857600080fd5b602086015b84811015611c2d5780518352918301918301613c2d565b600080600060608486031215613c5957600080fd5b835167ffffffffffffffff80821115613c7157600080fd5b818601915086601f830112613c8557600080fd5b81516020613c95613c0183613bbc565b82815260059290921b8401810191818101908a841115613cb457600080fd5b8286015b84811015613cec57805186811115613cd05760008081fd5b613cde8d86838b0101613be0565b845250918301918301613cb8565b5091890151919750909350505080821115613d0657600080fd5b50613d1386828701613be0565b925050604084015190509250925092565b600060208284031215613d3657600080fd5b505191905056fea26469706673582212203d523309f0a5a4aa8c925fd21a717d94495230643330a4b2a599585fa2d2791d64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
