export const EETHTarget3 = {
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
                    "name": "_liquidityPool",
                    "type": "address",
                    "internalType": "contract ILiquidityPool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "_liquidityPool",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ILiquidityPool"
                }
            ],
            "stateMutability": "view"
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200417c3803806200417c8339810160408190526200003591620001b5565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519092015190915280516040908101516101605290516060908101516101805290850151821661024052909301516102605290821661022052166102805262000305565b60405161020081016001600160401b03811182821017156200011d57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013b57600080fd5b919050565b6000608082840312156200015357600080fd5b604051608081016001600160401b03811182821017156200018457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a0811215620001cd57600080fd5b61026080821215620001de57600080fd5b620001e8620000eb565b9150620001f58662000123565b8252620002056020870162000123565b6020830152620002186040870162000123565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e08301526101008087015181840152506101208087015181840152506101408087015181840152506101606200028381880162000123565b908301526101806200029787820162000123565b908301526101a0620002ab87820162000123565b908301526101c0620002bf87820162000123565b908301526101e0620002d48888830162000140565b8184015250819450620002e981870162000123565b93505050620002fc610280850162000123565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613c8b620004f160003960008181604b01528181611a0b0152612d5a01526000505060005050600081816113200152611a3b0152600081816103530152818161038201526103af01526000818161012e015281816105f9015261174701526000818161089e0152818161098901528181610a1c01528181610b250152818161161801528181611721015281816122310152818161229401528181612b7301528181612e9f0152612edb01526000818161018f0152818161090e01528181610ece015281816114dc015281816115400152818161158701526116fb01526000611e36015260008181611f9101526131340152600081816110920152611f65015260006130ea0152600081816101d10152818161096101528181610eef015281816114ac01528181611510015281816115a8015261176d0152600081816101b00152818161028801528181610328015281816107430152818161093b01528181610fca0152612b090152600081816102e701528181610d8d01528181610e0801528181610e7e01528181610f4a0152610f82015260008181611b6b0152612d7b015260005050613c8b6000f3fe6080604052600436106100345760003560e01c8063207deba0146100395780634c2ac1d91461008a57806377d05ff4146100ab575b600080fd5b34801561004557600080fd5b5061006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61009d6100983660046136de565b6100be565b604051908152602001610081565b61009d6100b9366004613742565b6100d9565b60006100cd86868686866100f0565b90505b95945050505050565b60006100e6848484610850565b90505b9392505050565b60006100fa610c01565b600654610100900460ff1615610123576040516321081abf60e01b815260040160405180910390fd5b61012c82610c2b565b7f000000000000000000000000000000000000000000000000000000000000000086101561016d5760405163211ddda360e11b815260040160405180910390fd5b60006101f561017a610c64565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c8a565b90508481108061020457508381115b1561022257604051633b61151160e11b815260040160405180910390fd5b60008061022f8986610cb0565b91509150600061023d610d85565b905061024d818360046001610db1565b5060025460045460035460009283926102b7926001600160801b0380841693600f9390930b92600160801b90048116918991166102b26102ad7f00000000000000000000000000000000000000000000000000000000000000008b6137a8565b61142f565b611479565b91509150806102d957604051630552b01360e31b815260040160405180910390fd5b8b600061034c60088261030c7f0000000000000000000000000000000000000000000000000000000000000000896137bb565b81526020810191909152604001600020546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611686565b90506103787f0000000000000000000000000000000000000000000000000000000000000000826137a8565b8811806103d757507f0000000000000000000000000000000000000000000000000000000000000000811180156103d757506103d47f0000000000000000000000000000000000000000000000000000000000000000826137bb565b88105b156103f557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091610441916001600160801b03909116906137bb565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061047c9083906137a8565b9050600080600061048c8a6116b2565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104c690849060040161384c565b602060405180830381865af41580156104e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610507919061385b565b915061051a6105158c6117ec565b61181a565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161057b9185910161384c565b602060405180830381865af4158015610598573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bc919061385b565b9250818310156105df5760405163184d952160e11b815260040160405180910390fd5b6105f584836105ee81876137bb565b9190611840565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156106385760405163211ddda360e11b815260040160405180910390fd5b508f610644868e61185e565b10156106635760405163c972651760e01b815260040160405180910390fd5b61068160008e600001602081019061067b9190613889565b8e611873565b61068a8961191b565b9550856106aa57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061076d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102b27f00000000000000000000000000000000000000000000000000000000000000008c6102ad91906137a8565b9b5090508a158061078757506107848c6000611928565b81125b156107a557604051630552b01360e31b815260040160405180910390fd5b600088156107bd576107b887848b611840565b6107c0565b60005b90506107cf6020850185613889565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661080c60408a0160208b016138b4565b8661081a60408c018c6138d1565b60405161082d9796959493929190613918565b60405180910390a250505050505050505050505050505050506100d06001600055565b600061085a610c01565b61086382610c2b565b60065460ff161561088757604051637983c05160e01b815260040160405180910390fd5b6000806108948685610cb0565b90925090506108c47f0000000000000000000000000000000000000000000000000000000000000000600261396c565b8210156108e457604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a149190613983565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a45848461193d565b1015610a645760405163216f4ab160e21b815260040160405180910390fd5b600080610a7685858589600080611479565b91509150801580610a875750600082125b15610aa557604051630552b01360e31b815260040160405180910390fd5b610aae85611963565b600280546001600160801b0319166001600160801b0392909216919091179055610ad78461198d565b600480546001600160801b0319166001600160801b0392909216919091179055610b0083611963565b600280546001600160801b03928316600160801b029216919091179055610b496000807f0000000000000000000000000000000000000000000000000000000000000000611873565b610b616000610b5b60208c018c613889565b8a611873565b610b76610b6c610d85565b8760046001610db1565b508a8a8a610b876020820182613889565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610bc460408701602088016138b4565b87610bd260408901896138d1565b604051610be59796959493929190613918565b60405180910390a2505050505050505050506100e96001600055565b600260005403610c2457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610c3a6020830183613889565b6001600160a01b031603610c615760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c85916001600160801b0390911690600f0b61193d565b905090565b600080610c99878787866119c9565b9050610ca58185611686565b979650505050505050565b81600080610cc460408501602086016138b4565b15610ce957610cdf85610cda60408701876138d1565b6119e0565b9093509050610d01565b5034610d0185610cfc60408701876138d1565b611b30565b610d09611bff565b91508015610d7c57604051600090339083908381818185875af1925050503d8060008114610d53576040519150601f19603f3d011682016040523d82523d6000602084013e610d58565b606091505b5050905080610d7a576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c85427f0000000000000000000000000000000000000000000000000000000000000000611c12565b600084815260086020526040812060018101546001600160801b0316151580610dd957504286115b15610df257600101546001600160801b03169050611427565b6000806000610dff610d85565b90506000610e2d7f00000000000000000000000000000000000000000000000000000000000000008b6137a8565b90505b81811015610ea3576000818152600860205260409020600101546001600160801b03168015610e7b576000828152600860205260409020549094506001600160801b03169250610ea3565b507f000000000000000000000000000000000000000000000000000000000000000001610e30565b83600003610f1657889350610f13610eb9610c64565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c9565b92505b50610f2083611963565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f76610f6f7f00000000000000000000000000000000000000000000000000000000000000008b6137bb565b8a84611c28565b610fb489610fae610fa77f0000000000000000000000000000000000000000000000000000000000000000836137a8565b4290611d66565b84611c28565b610fbd88611d75565b5060009050600881610fef7f00000000000000000000000000000000000000000000000000000000000000008d6137bb565b815260208101919091526040016000908120600101546001600160801b0316915061101b60028c611f19565b6000818152600b60205260408120549192508c8c8315611161576001925060008061104a86898d866000611f4e565b91509150806009600082825461106091906137a8565b9091555061107c905086600084611076816117ec565b8861201d565b61108681836137a8565b91506110b686838a8e877f0000000000000000000000000000000000000000000000000000000000000000612197565b91506110ca6110c583856121db565b6121f0565b600680546002906110eb9084906201000090046001600160701b03166139b1565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061111882611963565b6006805460109061113a908490600160801b90046001600160801b03166139d1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061116e600184611f19565b6000818152600b6020526040902054909150801561127d576001945060008061119b838b8f886001611f4e565b9150915080600960008282546111b191906137a8565b909155506111cd9050836000846111c7816117ec565b8a61221a565b6111d781836137bb565b91506111e66110c583876121db565b600680546002906112079084906201000090046001600160701b03166139b1565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061123482611963565b60068054601090611256908490600160801b90046001600160801b03166139d1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112b7576112a961128f876117ec565b611298836117ec565b6112a291906139f1565b600061240b565b8e6112b4848261244a565b50505b60006112c284612644565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa15801561137c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a09190613a11565b90506001600160a01b03811615611415576114125a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612790565b50505b509b9d50505050505050505050505050505b949350505050565b6000611457600b6000611443600286611f19565b8152602001908152602001600020546117ec565b611469600b6000611443600187611f19565b61147391906139f1565b92915050565b6000806000806114898a8a61281d565b91509150806114a05760008093509350505061167b565b6000611500838a6114d97f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006137bb565b8b7f0000000000000000000000000000000000000000000000000000000000000000612859565b5090506000611564848b8461153d7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006137bb565b8d7f0000000000000000000000000000000000000000000000000000000000000000612916565b509050811580611572575080155b1561157e575060009050805b60006115cc858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c9565b90506115da83838c846129d4565b50909350600090506115ec848f6137a8565b9050600061160d8b8b6115fe876117ec565b611608908e613a2e565b612a20565b90508b61164261163d7f000000000000000000000000000000000000000000000000000000000000000083612a87565b6117ec565b61164b836117ec565b61165861163d86856121db565b61166291906139f1565b61166c91906139f1565b60019950995050505050505050505b965096945050505050565b60006100e961169a84846301e13380612a98565b6116ac85670de0b6b3a76400006137bb565b9061185e565b6116ba613619565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117b29116612abe565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117e492900416612abe565b905292915050565b60006001600160ff1b038211156118165760405163396ea70160e11b815260040160405180910390fd5b5090565b61182381612b2d565b610c6157604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261185757600080fd5b5091020490565b60006100e983670de0b6b3a764000084611840565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906118a59084906137a8565b90915550506000838152600b6020526040812080548392906118c89084906137a8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061147382600461244a565b600081831361193757826100e9565b50919050565b60008061194a848461281d565b90925090508061195c5761195c612cc5565b5092915050565b60006001600160801b0382111561181657604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806119ab575060016001607f1b0382135b156118165760405163a5353be560e01b815260040160405180910390fd5b60006100d0826119da858888611840565b90612cde565b60008084341015611a04576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f340fa01867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611abb9190613a11565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af1158015611b00573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611b25919061385b565b91505b935093915050565b6000611b3b84612d53565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303816000875af1158015611bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd89190613a56565b905080611bf8576040516312171d8360e31b815260040160405180910390fd5b5050505050565b6000610c85670de0b6b3a7640000612d53565b6000611c1e8284613a89565b6100e990846137bb565b600083815260086020526040902054600160801b90046001600160801b0316808303611c545750505050565b6000848152600860205260408120546001600160801b031690819003611cae57611c7d83611963565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611d2c565b611cff611cfa670de0b6b3a7640000611cc788866137bb565b611cd1919061396c565b85670de0b6b3a7640000611ce5878a6137bb565b611cef919061396c565b859291906001612da0565b611963565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611d3584611963565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161193757826100e9565b6006546000908190611d98908490600160801b90046001600160801b03166121db565b6006546201000090046001600160701b03169250905081811115611f14576000611dc283836137bb565b9050611dd1611cfa8286612e3e565b60068054601090611df3908490600160801b90046001600160801b0316613a9d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611e2c858361185e90919063ffffffff16565b90506000611e5a827f00000000000000000000000000000000000000000000000000000000000000006121db565b90508060096000828254611e6e91906137a8565b90915550611e7e905081836137bb565b9150611e8982611963565b60028054600090611ea49084906001600160801b03166139d1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ed182612e53565b60048054600090611ee6908490600f0b613abd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611f435760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611f5b878561185e565b91506000611f89837f00000000000000000000000000000000000000000000000000000000000000006121db565b9050611fb5817f00000000000000000000000000000000000000000000000000000000000000006121db565b91508315611fd857611fc782826137bb565b611fd190846137bb565b9250611fef565b611fe282826137bb565b611fec90846137a8565b92505b8686101561201257612002838789611840565b925061200f828789611840565b91505b509550959350505050565b600454600160801b90046001600160801b0316612066611cfa82612049670de0b6b3a76400008661396c565b600554600160801b90046001600160801b031691908a6000612da0565b600580546001600160801b03928316600160801b02921691909117905561208c86611963565b6120969082613a9d565b600480546001600160801b03928316600160801b0292169190911790556120bc84611963565b600280546000906120d79084906001600160801b03166139d1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121048361198d565b60048054600090612119908490600f0b613abd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061214985611963565b6002805460109061216b908490600160801b90046001600160801b0316613a9d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806121a9846116ac8a888a611840565b90506121b6888486611840565b6121c090826137a8565b9050868111156121d05786810391505b509695505050505050565b60006100e98383670de0b6b3a7640000611840565b60006001600160701b038211156118165760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061225c57507f000000000000000000000000000000000000000000000000000000000000000061225a85836137bb565b105b1561226957612269612cc5565b6004549084900390600f0b61227e84826139f1565b90508361228a866117ec565b1380156122bf57507f00000000000000000000000000000000000000000000000000000000000000006122bd838361193d565b105b156122cc576122cc612cc5565b600354600160801b90046001600160801b031661230e611cfa826122f8670de0b6b3a76400008861396c565b6005546001600160801b031691908c6000612da0565b600580546001600160801b0319166001600160801b039290921691909117905561233888826137bb565b905061234381611963565b600380546001600160801b03928316600160801b02921691909117905561236983611963565b600280546001600160801b0319166001600160801b03929092169190911790556123928261198d565b600480546001600160801b0319166001600160801b03929092169190911790556123bb87611963565b600280546010906123dd908490600160801b90046001600160801b03166139d1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461242690611cfa906001600160801b03168484612a20565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612495916001600160801b0316906137bb565b9050806000036124a9576001915050611473565b60006124b485612e7d565b9050806000036124c957600192505050611473565b6000806124d7838589612f19565b91509150806124ed576000945050505050611473565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612529929190613aea565b6040805180830381865af4158015612545573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125699190613b60565b91509150612587612579826117ec565b61258290613b84565b612b2d565b92508261259d5760009650505050505050611473565b6125a682611963565b600780546000906125c19084906001600160801b03166139d1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506125ee81611963565b60078054601090612610908490600160801b90046001600160801b03166139d1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61266d876116b2565b6040518263ffffffff1660e01b8152600401612689919061384c565b6040805180830381865af41580156126a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126c99190613ba0565b91509150806126df575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691612745916137a8565b61274f91906137bb565b90508060000361276757506000958695509350505050565b6000808711612777576000612782565b612782848884611840565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156127b6576127b6613bd0565b6040519080825280601f01601f1916602001820160405280156127e0576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612801578692505b828152826000602083013e9093509150505b9550959350505050565b60008060008361282c866117ec565b61283691906139f1565b9050600081121561284e576000809250925050610d7e565b946001945092505050565b600080600061286b8888888888613088565b90506000612896670de0b6b3a76400006128858888612e3e565b61288f91906137a8565b839061185e565b9050670de0b6b3a764000081106128ca576128c36128bc670de0b6b3a76400008961185e565b8290612cde565b90506128e2565b6128df6128bc670de0b6b3a764000089612e3e565b90505b6128ec818661185e565b90508881101561290457600080935093505050612813565b97909703976001975095505050505050565b600080600061292889898888886130b7565b9050612942866119da61293b8a8d6137a8565b87906121db565b985061294f858a86611840565b98508881101561296657600080925092505061167b565b888103670de0b6b3a764000081106129945761298d6128bc670de0b6b3a764000089612e3e565b90506129ac565b6129a96128bc670de0b6b3a76400008961185e565b90505b808910156129c25760008093509350505061167b565b90970398600198509650505050505050565b60008060008060006129e78987896130dc565b90925090506129f682896137bb565b97506000612a0582888a611840565b9050612a11818b6137bb565b9a989950979650505050505050565b600080612a2e846000613162565b612a39846000613162565b612a4391906139f1565b90506000811315612a5f57612a5881866137a8565b9450612a7e565b6000811215612a7e57612a7181613b84565b612a7b90866137bb565b94505b50929392505050565b60006100e98383670de0b6b3a76400005b6000826000190484118302158202612aaf57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612ad2610d85565b612adc919061396c565b9050808311612aec576000612af6565b612af681846137bb565b91506100e961288f670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061396c565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612be6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c0a9190613be6565b935093509350935080612c265750600098975050505050505050565b868414612c5757612c3684611963565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c8857612c678361198d565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612cb657612c9882611963565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612cf75750670de0b6b3a7640000611473565b82600003612d0757506000611473565b6000612d12836117ec565b90506000612d27612d22866117ec565b613178565b9050818102612d3e670de0b6b3a764000082613c27565b9050612d498161339e565b9695505050505050565b60006114737f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084613533565b600082600003612db15750846100d0565b8115612e0457612de2612dc484876137a8565b612dce85876121db565b612dd8888a6121db565b6116ac91906137a8565b90506000612df08588611d66565b905080821015612dfe578091505b506100d0565b828503612e13575060006100d0565b6100cd612e2084876137bb565b612e2a8587612a87565b612e34888a6121db565b6116ac91906137bb565b60006100e983670de0b6b3a764000084612a98565b600060016001607f1b038211156118165760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612e98906001600160801b031684612e3e565b9050612ec47f0000000000000000000000000000000000000000000000000000000000000000826137a8565b6002546001600160801b03161115611937576002547f000000000000000000000000000000000000000000000000000000000000000090612f0f9083906001600160801b03166137bb565b6100e991906137bb565b612f2161367a565b600080612f2d846116b2565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612f68919061384c565b6040805180830381865af4158015612f84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fa89190613ba0565b9350905082612fbd575060009150611b289050565b6000612fdf61163d8461016001518561014001516121db90919063ffffffff16565b612fff61163d856101200151866101000151612a8790919063ffffffff16565b61300991906139f1565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006130948585612cde565b6130ad6130a5866119da868b6121db565b859085611840565b6100cd91906137a8565b60006130c38585612cde565b6130ad6130d4866119da868b612a87565b859085612a98565b60008061312c8561312685817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061311c818c612e3e565b61312691906137bb565b90612a87565b9150613158827f00000000000000000000000000000000000000000000000000000000000000006121db565b9050935093915050565b600081831361317157816100e9565b5090919050565b600080821361319a5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061321d9084901c6117ec565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133b957506000919050565b680755bf798b4a1bf1e582126133e2576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612d4974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117ec565b600080836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015613574573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613598919061385b565b9050806000036135ac5760009150506100e9565b6100d0856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156135ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613611919061385b565b849083611840565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061368e613619565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561193757600080fd5b600080600080600060a086880312156136f657600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561372957600080fd5b613735888289016136cc565b9150509295509295909350565b60008060006060848603121561375757600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561377c57600080fd5b613788868287016136cc565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561147357611473613792565b8181038181111561147357611473613792565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161147382846137ce565b60006020828403121561386d57600080fd5b5051919050565b6001600160a01b0381168114610c6157600080fd5b60006020828403121561389b57600080fd5b81356100e981613874565b8015158114610c6157600080fd5b6000602082840312156138c657600080fd5b81356100e9816138a6565b6000808335601e198436030181126138e857600080fd5b83018035915067ffffffffffffffff82111561390357600080fd5b602001915036819003821315610d7e57600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761147357611473613792565b60008060006060848603121561399857600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561195c5761195c613792565b6001600160801b0381811683821601908082111561195c5761195c613792565b818103600083128015838313168383128216171561195c5761195c613792565b600060208284031215613a2357600080fd5b81516100e981613874565b8082018281126000831280158216821582161715613a4e57613a4e613792565b505092915050565b600060208284031215613a6857600080fd5b81516100e9816138a6565b634e487b7160e01b600052601260045260246000fd5b600082613a9857613a98613a73565b500690565b6001600160801b0382811682821603908082111561195c5761195c613792565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147357611473613792565b60006102a082019050613afe8285516137ce565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613b7357600080fd5b505080516020909101519092909150565b6000600160ff1b8201613b9957613b99613792565b5060000390565b60008060408385031215613bb357600080fd5b825191506020830151613bc5816138a6565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613bfc57600080fd5b8451935060208501519250604085015191506060850151613c1c816138a6565b939692955090935050565b600082613c3657613c36613a73565b600160ff1b821460001984141615613c5057613c50613792565b50059056fea2646970667358221220c1df0f5daa43ab115c56d117eb7baaece9e457e2208b01836da3675435a2b90764736f6c63430008160033',
    methodIdentifiers: {
        "_liquidityPool()": "207deba0",
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
