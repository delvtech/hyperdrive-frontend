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
    bytecode: '0x6102c060405234801562000011575f80fd5b50604051620041b9380380620041b983398101604081905262000034916200022a565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000141919062000376565b6001600160a01b03166102a052506200039b92505050565b60405161020081016001600160401b03811182821017156200018957634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b0381168114620001a4575f80fd5b50565b8051620001b4816200018f565b919050565b5f60808284031215620001ca575f80fd5b604051608081016001600160401b0381118282101715620001f957634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a08112156200023f575f80fd5b610260808212156200024f575f80fd5b6200025962000159565b91506200026686620001a7565b82526200027660208701620001a7565b60208301526200028960408701620001a7565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002f4818801620001a7565b9083015261018062000308878201620001a7565b908301526101a06200031c878201620001a7565b908301526101c062000330878201620001a7565b908301526101e06200034588888301620001b9565b81840152508194506200035a818701620001a7565b935050506200036d6102808501620001a7565b90509250925092565b5f6020828403121562000387575f80fd5b815162000394816200018f565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613c61620005585f395f61146a01525f61148b01525f50505f50505f610c2801525f50505f818160f9015281816103020152612d7101525f818161152801528181611cad01528181611d10015281816124970152818161295a0152818161299601528181612b8e0152612d4b01525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612d2501525f6118d701525f81816119f801528181612588015281816126000152612e8901525f81816109a301528181610e3701528181611415015281816119cc01526125d401525f8181610e16015281816125540152612e4501525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612d9701525f81816101d301528181610396015281816108e1015261330d01525f81816106a7015281816107230152818161079701528181610862015261089a01525f81816114ac01526116f201525f5050613c615ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a366004613585565b61006b565b6040805192835260208301919091520160405180910390f35b61003f610066366004613585565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd91906135f3565b909155506101ce9050844283610f13565b6101f87f0000000000000000000000000000000000000000000000000000000000000000856135f3565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e61361a565b8b611217565b8d8a8a898e8561023e602083018361361a565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b6040880160208901613642565b8961028960408a018a61365d565b60405161029c97969594939291906136c8565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f0000000000000000000000000000000000000000000000000000000000000000846135f3565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea9084906135f3565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b6104189060016135f3565b9350505f61042784898d6114d1565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b89611502565b5f6104706002886111e3565b90508c61048a82610484602084018461361a565b85611217565b858b868461049b602086018661361a565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c01613642565b6104ec896104e68a8d613708565b90610683565b8d6104fa60408e018e61365d565b60405161050e98979695949392919061371b565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f610588602083018361361a565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c56040850160208601613642565b156105ea576105e0856105db604087018761365d565b6116b5565b9093509050610602565b5034610602856105fd604087018761365d565b6116d0565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a764000061176a565b90505b92915050565b5f6106cb427f0000000000000000000000000000000000000000000000000000000000000000611785565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b6135f3565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d161179a565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117ba565b92505b50610838836117d9565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b613708565b8a84610f13565b6108cc896108c66108bf7f0000000000000000000000000000000000000000000000000000000000000000836135f3565b4290611806565b84610f13565b6108d58861181a565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d613708565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f6119b7565b915091508060095f82825461097291906135f3565b9091555061098d9050865f8461098781611a84565b88611aad565b61099781836135f3565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c24565b91506109db6109d68385610683565b611c6d565b600680546002906109fc9084906201000090046001600160701b0316613762565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a29826117d9565b60068054601090610a4b908490600160801b90046001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f8860016119b7565b915091508060095f828254610abe91906135f3565b90915550610ad99050835f84610ad381611a84565b8a611c96565b610ae38183613708565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b0316613762565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b40826117d9565b60068054601090610b62908490600160801b90046001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611a84565b610ba483611a84565b610bae91906137a2565b5f611e86565b8e610bbf8482611ec5565b50505b5f610bcc846120b4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca691906137c1565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906121f6565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d4161179a565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061227c565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117ba565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122a7565b61230b565b15610e6d57610e6d61234c565b610e7987858885612365565b91965094509250670de0b6b3a7640000610efb610e9687846135f3565b600254610eb4908890600160801b90046001600160801b0316613708565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117ba565b1115610f0957610f0961234c565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f66836117d9565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf8886613708565b610fb991906137dc565b85670de0b6b3a7640000610fcd878a613708565b610fd791906137dc565b8592919060016123ad565b6117d9565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c846117d9565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a7640000866137dc565b6005546001600160801b031691908860016123ad565b600580546001600160801b0319166001600160801b03929092169190911790556110b7856117d9565b600280545f906110d19084906001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe846117d9565b60028054601090611120908490600160801b90046001600160801b03166137f3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d846117d9565b6111579082613782565b600380546001600160801b03808416600160801b02911617905590505f61117d83612451565b905061119b8161118c87611a84565b6111969084613813565b611e86565b6111a484612491565b6111b0576111b061234c565b5f6111ba856124f0565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906112489084906135f3565b90915550505f838152600b60205260408120805483929061126a9084906135f3565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db61179a565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006124fc565b93508761134d858961251c565b111561135b5761135b61234c565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117ba565b93506113d58a670de0b6b3a7640000868c612530565b509193509091506113e890508183613708565b6113f29087613708565b95508861143f816114398d611407868c613708565b8d611412878261263c565b877f0000000000000000000000000000000000000000000000000000000000000000612651565b9061251c565b975090945050505093509350935093565b5f61069783670de0b6b3a764000084612671565b5f61069a7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612694565b5f6114e26040830160208401613642565b156114ee5750826114fb565b6114f884846127d5565b90505b9392505050565b6002546001600160801b03168381101561151e5761151e61234c565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611556908390600f0b6127e9565b10156115645761156461234c565b6004546115ae90610fe290600160801b90046001600160801b0316611591670de0b6b3a7640000866137dc565b600554600160801b90046001600160801b031691908960016123ad565b600580546001600160801b03928316600160801b0292169190911790556115d4816117d9565b600280546001600160801b0319166001600160801b03929092169190911790556115fd856117d9565b6002805460109061161f908490600160801b90046001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061164c856117d9565b6004805460109061166e908490600160801b90046001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61169c83612451565b905061119b816116ab88611a84565b61119690846137a2565b5f8060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611740573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611764919061383a565b50505050565b5f825f19048411830215820261177e575f80fd5b5091020490565b5f6117908284613869565b6106979084613708565b6002546004545f916106cb916001600160801b0390911690600f0b6127e9565b5f6117d0826117ca85888861176a565b9061280e565b95945050505050565b5f6001600160801b0382111561180257604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116118145782610697565b50919050565b6006545f90819061183c908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b031692509050818111156119b2575f6118658383613708565b9050611874610fe28286611450565b60068054601090611896908490600160801b90046001600160801b03166137f3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6118ce85836127d590919063ffffffff16565b90505f6118fb827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f82825461190e91906135f3565b9091555061191e90508183613708565b9150611929826117d9565b600280545f906119439084906001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061197082612873565b600480545f90611984908490600f0b61387c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f806119c387856127d5565b91505f6119f0837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611a1c817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611a3f57611a2e8282613708565b611a389084613708565b9250611a56565b611a498282613708565b611a5390846135f3565b92505b86861015611a7957611a6983878961176a565b9250611a7682878961176a565b91505b509550959350505050565b5f6001600160ff1b038211156118025760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611af5610fe282611ad9670de0b6b3a7640000866137dc565b600554600160801b90046001600160801b031691908a5f6123ad565b600580546001600160801b03928316600160801b029216919091179055611b1b866117d9565b611b2590826137f3565b600480546001600160801b03928316600160801b029216919091179055611b4b846117d9565b600280545f90611b659084906001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b928361289c565b600480545f90611ba6908490600f0b61387c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611bd6856117d9565b60028054601090611bf8908490600160801b90046001600160801b03166137f3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611c3b84611c358a888a61176a565b906127d5565b9050611c4888848661176a565b611c5290826135f3565b905086811115611c625786810391505b509695505050505050565b5f6001600160701b038211156118025760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611cd857507f0000000000000000000000000000000000000000000000000000000000000000611cd68583613708565b105b15611ce557611ce561234c565b6004549084900390600f0b611cfa84826137a2565b905083611d0686611a84565b138015611d3b57507f0000000000000000000000000000000000000000000000000000000000000000611d3983836127e9565b105b15611d4857611d4861234c565b600354600160801b90046001600160801b0316611d89610fe282611d74670de0b6b3a7640000886137dc565b6005546001600160801b031691908c5f6123ad565b600580546001600160801b0319166001600160801b0392909216919091179055611db38882613708565b9050611dbe816117d9565b600380546001600160801b03928316600160801b029216919091179055611de4836117d9565b600280546001600160801b0319166001600160801b0392909216919091179055611e0d8261289c565b600480546001600160801b0319166001600160801b0392909216919091179055611e36876117d9565b60028054601090611e58908490600160801b90046001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611ea190610fe2906001600160801b031684846128d7565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611f0f916001600160801b031690613708565b9050805f03611f2257600191505061069a565b5f611f2c85612939565b9050805f03611f405760019250505061069a565b5f80611f4d8385896129d4565b9150915080611f62575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f9d929190613927565b6040805180830381865af4158015611fb7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fdb919061399c565b91509150611ff9611feb82611a84565b611ff4906139be565b612b48565b92508261200e575f965050505050505061069a565b612017826117d9565b600780545f906120319084906001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061205e816117d9565b60078054601090612080908490600160801b90046001600160801b0316613782565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120db87612cdc565b6040518263ffffffff1660e01b81526004016120f791906139d8565b6040805180830381865af4158015612111573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061213591906139e7565b915091508061214a57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916121af916135f3565b6121b99190613708565b9050805f036121cf57505f958695509350505050565b5f8087116121dd575f6121e8565b6121e884888461176a565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561221957612219613a15565b6040519080825280601f01601f191660200182016040528015612243576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612263578692505b828152825f602083013e90999098509650505050505050565b5f61229c87878761229588670de0b6b3a7640000613708565b8787612e16565b979650505050505050565b5f6114f86122e76122c084670de0b6b3a7640000613708565b611439670de0b6b3a76400006122d6818a611450565b6122e09190613708565b879061251c565b6122f990670de0b6b3a76400006135f3565b611c3584670de0b6b3a7640000613708565b5f806123418561231961179a565b61232391906135f3565b600254610eb4908790600160801b90046001600160801b0316613708565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f612375898789612e38565b90925090506123848289613708565b97505f61239282888a61176a565b905061239e818b613708565b9a989950979650505050505050565b5f825f036123bc5750846117d0565b811561240e576123ed6123cf84876135f3565b6123d98587610683565b6123e3888a610683565b611c3591906135f3565b90505f6123fa8588611806565b905080821015612408578091505b506117d0565b82850361241c57505f6117d0565b6124476124298487613708565b612433858761251c565b61243d888a610683565b611c359190613708565b9695505050505050565b5f612476600b5f6124636002866111e3565b81526020019081526020015f2054611a84565b612487600b5f6124636001876111e3565b61069a91906137a2565b5f6124bc7f00000000000000000000000000000000000000000000000000000000000000008361251c565b6003546124d291906001600160801b03166135f3565b6002546124e8906001600160801b031684610683565b101592915050565b5f61069a826004611ec5565b5f61229c87878761251588670de0b6b3a7640000613708565b8787612eb7565b5f6106978383670de0b6b3a7640000612671565b5f80808061258087866125798b6114396125528c670de0b6b3a7640000613708565b7f00000000000000000000000000000000000000000000000000000000000000009061251c565b9190612671565b93506125ac847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f6125cc6125c489670de0b6b3a7640000613708565b8a9088612671565b90506125f8817f000000000000000000000000000000000000000000000000000000000000000061251c565b9350612624847f0000000000000000000000000000000000000000000000000000000000000000610683565b61262e90846135f3565b915050945094509450949050565b5f81831161264a5781610697565b5090919050565b5f80612668846126628a888a612671565b90611450565b9050611c488884865b5f825f190484118302158202612685575f80fd5b50910281810615159190040190565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa1580156126d1573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526126f89190810190613ade565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612739573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061275d9190613bb5565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb090606401602060405180830381865afa1580156127b1573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061229c9190613bb5565b5f61069783670de0b6b3a76400008461176a565b5f806127f58484612ec7565b9092509050806128075761280761234c565b5092915050565b5f815f036128255750670de0b6b3a764000061069a565b825f0361283357505f61069a565b5f61283d83611a84565b90505f61285161284c86611a84565b612eff565b9050818102612868670de0b6b3a764000082613bcc565b905061244781613124565b5f60016001607f1b038211156118025760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b03198212806128b9575060016001607f1b0382135b156118025760405163a5353be560e01b815260040160405180910390fd5b5f806128e3845f6132b6565b6128ed845f6132b6565b6128f791906137a2565b90505f8113156129125761290b81866135f3565b9450612930565b5f81121561293057612923816139be565b61292d9086613708565b94505b50929392505050565b6003545f908190612953906001600160801b031684611450565b905061297f7f0000000000000000000000000000000000000000000000000000000000000000826135f3565b6002546001600160801b03161115611814576002547f0000000000000000000000000000000000000000000000000000000000000000906129ca9083906001600160801b0316613708565b6114fb9190613708565b6129dc6134e6565b5f806129e784612cdc565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a2191906139d8565b6040805180830381865af4158015612a3b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a5f91906139e7565b9350905082612a7357505f9150612b409050565b5f612a99612a9484610160015185610140015161068390919063ffffffff16565b611a84565b612ab9612a9485610120015186610100015161251c90919063ffffffff16565b612ac391906137a2565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bfe573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c229190613bf8565b935093509350935080612c3d57505f98975050505050505050565b868414612c6e57612c4d846117d9565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c9f57612c7e8361289c565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ccd57612caf826117d9565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612ce4613530565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612ddc91166132c4565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e0e929004166132c4565b905292915050565b5f80612e26888888888888613338565b909250905080611c6257611c6261234c565b5f80612e818561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612e77818c611450565b6114399190613708565b9150612ead827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612e268888888888886133fc565b5f805f83612ed486611a84565b612ede91906137a2565b90505f811215612ef4575f80925092505061067c565b946001945092505050565b5f808213612f205760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fa39084901c611a84565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361313d57505f919050565b680755bf798b4a1bf1e58212613166576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061244774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a84565b5f81831361264a5781610697565b5f80670de0b6b3a76400006132d76106a0565b6132e191906137dc565b90508083116132f0575f6132fa565b6132fa8184613708565b91506114fb613331670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137dc565b83906127d5565b5f805f61334889898888886134b8565b9050613362866117ca61335b8a8d6135f3565b8790610683565b985061336f858a8661176a565b985088811015613385575f8092509250506133f1565b888103670de0b6b3a764000081106133ba576133b36133ac670de0b6b3a764000089611450565b829061280e565b90506133d2565b6133cf6133ac670de0b6b3a7640000896127d5565b90505b808910156133e7575f809350935050506133f1565b8803925060019150505b965096945050505050565b5f805f61340c89898888886134b8565b905061341c866117ca898b6135f3565b975087811015613432575f8092509250506133f1565b878103613440818688612671565b9050670de0b6b3a7640000811061346d576134666133ac670de0b6b3a764000089611450565b9050613485565b6134826133ac670de0b6b3a7640000896127d5565b90505b61348f8186611450565b9050808a10156134a6575f809350935050506133f1565b90980398600198509650505050505050565b5f6134c3858561280e565b6134dc6134d4866117ca868b61251c565b859085612671565b61244791906135f3565b6040518061012001604052806134fa613530565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613598575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156135c3575f80fd5b8501606081880312156135d4575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a6135df565b6001600160a01b03811681146105af575f80fd5b5f6020828403121561362a575f80fd5b81356114fb81613606565b80151581146105af575f80fd5b5f60208284031215613652575f80fd5b81356114fb81613635565b5f808335601e19843603018112613672575f80fd5b83018035915067ffffffffffffffff82111561368c575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6136fb60c0830184866136a0565b9998505050505050505050565b8181038181111561069a5761069a6135df565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61375460e0830184866136a0565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612807576128076135df565b6001600160801b03818116838216019080821115612807576128076135df565b8181035f831280158383131683831282161715612807576128076135df565b5f602082840312156137d1575f80fd5b81516114fb81613606565b808202811582820484141761069a5761069a6135df565b6001600160801b03828116828216039080821115612807576128076135df565b8082018281125f831280158216821582161715613832576138326135df565b505092915050565b5f6020828403121561384a575f80fd5b81516114fb81613635565b634e487b7160e01b5f52601260045260245ffd5b5f8261387757613877613855565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a6135df565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a08201905061393a8285516138a9565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f80604083850312156139ad575f80fd5b505080516020909101519092909150565b5f600160ff1b82016139d2576139d26135df565b505f0390565b610180810161069a82846138a9565b5f80604083850312156139f8575f80fd5b825191506020830151613a0a81613635565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715613a5257613a52613a15565b604052919050565b5f67ffffffffffffffff821115613a7357613a73613a15565b5060051b60200190565b5f82601f830112613a8c575f80fd5b81516020613aa1613a9c83613a5a565b613a29565b8083825260208201915060208460051b870101935086841115613ac2575f80fd5b602086015b84811015611c625780518352918301918301613ac7565b5f805f60608486031215613af0575f80fd5b835167ffffffffffffffff80821115613b07575f80fd5b818601915086601f830112613b1a575f80fd5b81516020613b2a613a9c83613a5a565b82815260059290921b8401810191818101908a841115613b48575f80fd5b8286015b84811015613b7e57805186811115613b62575f80fd5b613b708d86838b0101613a7d565b845250918301918301613b4c565b5091890151919750909350505080821115613b97575f80fd5b50613ba486828701613a7d565b925050604084015190509250925092565b5f60208284031215613bc5575f80fd5b5051919050565b5f82613bda57613bda613855565b600160ff1b82145f1984141615613bf357613bf36135df565b500590565b5f805f8060808587031215613c0b575f80fd5b84519350602085015192506040850151915060608501516135d48161363556fea26469706673582212204cda7d6160535a33cc6cda69fe36662a5e479c8bc3fb800750f275520e21b92a64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
