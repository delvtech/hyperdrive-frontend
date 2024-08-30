export const EETHTarget4 = {
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
    bytecode: '0x6102a06040523480156200001257600080fd5b50604051620034c8380380620034c88339810160408190526200003591620001b5565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519092015190915280516040908101516101605290516060908101516101805290850151821661024052909301516102605290821661022052166102805262000305565b60405161020081016001600160401b03811182821017156200011d57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013b57600080fd5b919050565b6000608082840312156200015357600080fd5b604051608081016001600160401b03811182821017156200018457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a0811215620001cd57600080fd5b61026080821215620001de57600080fd5b620001e8620000eb565b9150620001f58662000123565b8252620002056020870162000123565b6020830152620002186040870162000123565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e08301526101008087015181840152506101208087015181840152506101408087015181840152506101606200028381880162000123565b908301526101806200029787820162000123565b908301526101a0620002ab87820162000123565b908301526101c0620002bf87820162000123565b908301526101e0620002d48888830162000140565b8184015250819450620002e981870162000123565b93505050620002fc610280850162000123565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613085620004436000396000818160830152818161112601526123cc015260005050600050506000610a0c015260005050600081816102b80152611ff10152600081816118370152818161189a01528181611bd601528181611c1201528181611e0a0152611fcb0152600081816105ba0152611fa50152600061140c0152600061156701526000818161077e015261153b015260005050600081816105db01526120170152600081816106b6015261256a01526000818161023801528181610479015281816104f40152818161056a01528181610636015261066e015260008181611147015281816123ed01526124640152600050506130856000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063074a6de914610051578063207deba01461007e578063414f826d146100bd578063cbc13434146100d2575b600080fd5b61006461005f366004612b12565b6100e5565b604080519283526020830191909152015b60405180910390f35b6100a57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610075565b6100d06100cb366004612b69565b610100565b005b6100646100e0366004612b12565b61010e565b6000806100f385858561011c565b915091505b935093915050565b61010a82826101e1565b5050565b6000806100f38585856102a2565b6000806101276103f6565b61013083610420565b600061013a610459565b9050610151610147610471565b826004600161049d565b5061015f3387838888610b1b565b90935091506101716020850185612ba0565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101af60408b0160208c01612bcb565b6101bc60408c018c612be8565b6040516101ce96959493929190612c58565b60405180910390a3506100f86001600055565b6101e96103f6565b60006101f3610459565b6000848152600860205260409020600101549091506001600160801b031615610227576102208183610c5e565b5050610298565b6000610231610471565b905061025d7f000000000000000000000000000000000000000000000000000000000000000085612ca8565b15158061026957508381105b156102875760405163ecd29e8160e01b815260040160405180910390fd5b610294848385600061049d565b5050505b61010a6001600055565b6000806102ad6103f6565b6102b683610420565b7f00000000000000000000000000000000000000000000000000000000000000008510156102f75760405163211ddda360e11b815260040160405180910390fd5b6000610301610459565b905061030e610147610471565b5061031b60003388610e59565b610336600360f81b6103306020870187612ba0565b88610f33565b60006103516103486020870187612ba0565b88848989610b1b565b90945090506103608188612cd2565b9250600061036d83610fd3565b50905061037d6020870187612ba0565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a88876103bb60408d0160208e01612bcb565b8a888e80604001906103cd9190612be8565b6040516103e1989796959493929190612ce5565b60405180910390a35050506100f86001600055565b60026000540361041957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061042f6020830183612ba0565b6001600160a01b0316036104565760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600061046c670de0b6b3a764000061111f565b905090565b600061046c427f000000000000000000000000000000000000000000000000000000000000000061116c565b600084815260086020526040812060018101546001600160801b03161515806104c557504286115b156104de57600101546001600160801b03169050610b13565b60008060006104eb610471565b905060006105197f00000000000000000000000000000000000000000000000000000000000000008b612d2d565b90505b8181101561058f576000818152600860205260409020600101546001600160801b03168015610567576000828152600860205260409020549094506001600160801b0316925061058f565b507f00000000000000000000000000000000000000000000000000000000000000000161051c565b83600003610602578893506105ff6105a5611189565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006111aa565b92505b5061060c836111ca565b6001850180546001600160801b0319166001600160801b039290921691909117905561066261065b7f00000000000000000000000000000000000000000000000000000000000000008b612cd2565b8a846111f8565b6106a08961069a6106937f000000000000000000000000000000000000000000000000000000000000000083612d2d565b4290611336565b846111f8565b6106a98861134b565b50600090506008816106db7f00000000000000000000000000000000000000000000000000000000000000008d612cd2565b815260208101919091526040016000908120600101546001600160801b0316915061070760028c6114ef565b6000818152600b60205260408120549192508c8c831561084d576001925060008061073686898d866000611524565b91509150806009600082825461074c9190612d2d565b90915550610768905086600084610762816115f3565b8861161d565b6107728183612d2d565b91506107a286838a8e877f0000000000000000000000000000000000000000000000000000000000000000611797565b91506107b66107b183856117e1565b6117f6565b600680546002906107d79084906201000090046001600160701b0316612d40565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610804826111ca565b60068054601090610826908490600160801b90046001600160801b0316612d60565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061085a6001846114ef565b6000818152600b602052604090205490915080156109695760019450600080610887838b8f886001611524565b91509150806009600082825461089d9190612d2d565b909155506108b99050836000846108b3816115f3565b8a611820565b6108c38183612cd2565b91506108d26107b183876117e1565b600680546002906108f39084906201000090046001600160701b0316612d40565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610920826111ca565b60068054601090610942908490600160801b90046001600160801b0316612d60565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109a35761099561097b876115f3565b610984836115f3565b61098e9190612d80565b6000611a11565b8e6109a08482610c5e565b50505b60006109ae84610fd3565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8c9190612da0565b90506001600160a01b03811615610b0157610afe5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a50565b50505b509b9d50505050505050505050505050505b949350505050565b600080610b2785611adb565b505060075485906001600160801b031680821115610b4c57806001600160801b031691505b81600003610b61576000809250925050610c54565b610b70600360f81b8984610e59565b600754600090610b969084906001600160801b03600160801b9091048116908516611ae8565b9050610ba1836111ca565b610bab9083612dbd565b600780546001600160801b0319166001600160801b0392909216919091179055610bd4816111ca565b60078054601090610bf6908490600160801b90046001600160801b0316612dbd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c25818887611b06565b9350610c318684611b9f565b841015610c515760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610ca9916001600160801b031690612cd2565b905080600003610cbd576001915050610e53565b6000610cc885611bb4565b905080600003610cdd57600192505050610e53565b600080610ceb838589611c50565b9150915080610d01576000945050505050610e53565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610d3d929190612e5b565b6040805180830381865af4158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d9190612ed1565b91509150610d9b610d8d826115f3565b610d9690612ef5565b611dc4565b925082610db15760009650505050505050610e53565b610dba826111ca565b60078054600090610dd59084906001600160801b0316612d60565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610e02816111ca565b60078054601090610e24908490600160801b90046001600160801b0316612d60565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e9c57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610edf908490612cd2565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f65908490612d2d565b90915550506000838152600b602052604081208054839290610f88908490612d2d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610f26565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610ffc87611f5c565b6040518263ffffffff1660e01b81526004016110189190612f11565b6040805180830381865af4158015611034573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110589190612f20565b915091508061106e575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916110d491612d2d565b6110de9190612cd2565b9050806000036110f657506000958695509350505050565b6000808711611106576000611111565b611111848884611ae8565b976001975095505050505050565b6000610e537f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612096565b60006111788284612ca8565b6111829084612cd2565b9392505050565b60025460045460009161046c916001600160801b0390911690600f0b61217c565b60006111c1826111bb858888611ae8565b906121a2565b95945050505050565b60006001600160801b038211156111f457604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112245750505050565b6000848152600860205260408120546001600160801b03169081900361127e5761124d836111ca565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112fc565b6112cf6112ca670de0b6b3a76400006112978886612cd2565b6112a19190612f50565b85670de0b6b3a76400006112b5878a612cd2565b6112bf9190612f50565b859291906001612217565b6111ca565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611305846111ca565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116113455782611182565b50919050565b600654600090819061136e908490600160801b90046001600160801b03166117e1565b6006546201000090046001600160701b031692509050818111156114ea5760006113988383612cd2565b90506113a76112ca82866122b5565b600680546010906113c9908490600160801b90046001600160801b0316612dbd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061140285836122ca90919063ffffffff16565b90506000611430827f00000000000000000000000000000000000000000000000000000000000000006117e1565b905080600960008282546114449190612d2d565b9091555061145490508183612cd2565b915061145f826111ca565b6002805460009061147a9084906001600160801b0316612d60565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a7826122df565b600480546000906114bc908490600f0b612f67565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156115195760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061153187856122ca565b9150600061155f837f00000000000000000000000000000000000000000000000000000000000000006117e1565b905061158b817f00000000000000000000000000000000000000000000000000000000000000006117e1565b915083156115ae5761159d8282612cd2565b6115a79084612cd2565b92506115c5565b6115b88282612cd2565b6115c29084612d2d565b92505b868610156115e8576115d8838789611ae8565b92506115e5828789611ae8565b91505b509550959350505050565b60006001600160ff1b038211156111f45760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166116666112ca82611649670de0b6b3a764000086612f50565b600554600160801b90046001600160801b031691908a6000612217565b600580546001600160801b03928316600160801b02921691909117905561168c866111ca565b6116969082612dbd565b600480546001600160801b03928316600160801b0292169190911790556116bc846111ca565b600280546000906116d79084906001600160801b0316612d60565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061170483612309565b60048054600090611719908490600f0b612f67565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611749856111ca565b6002805460109061176b908490600160801b90046001600160801b0316612dbd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117af846117a98a888a611ae8565b906122ca565b90506117bc888486611ae8565b6117c69082612d2d565b9050868111156117d65786810391505b509695505050505050565b60006111828383670de0b6b3a7640000611ae8565b60006001600160701b038211156111f45760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061186257507f00000000000000000000000000000000000000000000000000000000000000006118608583612cd2565b105b1561186f5761186f612345565b6004549084900390600f0b6118848482612d80565b905083611890866115f3565b1380156118c557507f00000000000000000000000000000000000000000000000000000000000000006118c3838361217c565b105b156118d2576118d2612345565b600354600160801b90046001600160801b03166119146112ca826118fe670de0b6b3a764000088612f50565b6005546001600160801b031691908c6000612217565b600580546001600160801b0319166001600160801b039290921691909117905561193e8882612cd2565b9050611949816111ca565b600380546001600160801b03928316600160801b02921691909117905561196f836111ca565b600280546001600160801b0319166001600160801b039290921691909117905561199882612309565b600480546001600160801b0319166001600160801b03929092169190911790556119c1876111ca565b600280546010906119e3908490600160801b90046001600160801b0316612d60565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a2c906112ca906001600160801b0316848461235e565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a7657611a76612f94565b6040519080825280601f01601f191660200182016040528015611aa0576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611ac1578692505b828152826000602083013e90999098509650505050505050565b6000610e53826004610c5e565b6000826000190484118302158202611aff57600080fd5b5091020490565b600080611b1385856117e1565b9050611b1e816123c5565b945084600003611b32576000915050611182565b849150611b456040840160208501612bcb565b15611b7457611b6d85611b5b6020860186612ba0565b611b686040870187612be8565b612412565b9150611b97565b611b9785611b856020860186612ba0565b611b926040870187612be8565b61242d565b509392505050565b60006111828383670de0b6b3a76400006124f9565b6003546000908190611bcf906001600160801b0316846122b5565b9050611bfb7f000000000000000000000000000000000000000000000000000000000000000082612d2d565b6002546001600160801b03161115611345576002547f000000000000000000000000000000000000000000000000000000000000000090611c469083906001600160801b0316612cd2565b6111829190612cd2565b611c58612a5f565b600080611c6484611f5c565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c9f9190612f11565b6040805180830381865af4158015611cbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cdf9190612f20565b9350905082611cf45750600091506100f89050565b6000611d1b611d168461016001518561014001516117e190919063ffffffff16565b6115f3565b611d3b611d16856101200151866101000151611b9f90919063ffffffff16565b611d459190612d80565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ea19190612faa565b935093509350935080611ebd5750600098975050505050505050565b868414611eee57611ecd846111ca565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611f1f57611efe83612309565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f4d57611f2f826111ca565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f64612ab1565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161205c911661251f565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261208e9290041661251f565b905292915050565b600080836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156120d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120fb9190612feb565b90508060000361210f576000915050611182565b6111c1856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612150573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121749190612feb565b849083611ae8565b6000806121898484612595565b90925090508061219b5761219b612345565b5092915050565b6000816000036121bb5750670de0b6b3a7640000610e53565b826000036121cb57506000610e53565b60006121d6836115f3565b905060006121eb6121e6866115f3565b6125d4565b9050818102612202670de0b6b3a764000082613004565b905061220d816127fa565b9695505050505050565b6000826000036122285750846111c1565b811561227b5761225961223b8487612d2d565b61224585876117e1565b61224f888a6117e1565b6117a99190612d2d565b905060006122678588611336565b905080821015612275578091505b506111c1565b82850361228a575060006111c1565b61220d6122978487612cd2565b6122a18587611b9f565b6122ab888a6117e1565b6117a99190612cd2565b600061118283670de0b6b3a7640000846124f9565b600061118283670de0b6b3a764000084611ae8565b600060016001607f1b038211156111f45760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612327575060016001607f1b0382135b156111f45760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b60008061236c84600061298f565b61237784600061298f565b6123819190612d80565b9050600081131561239d576123968186612d2d565b94506123bc565b60008112156123bc576123af81612ef5565b6123b99086612cd2565b94505b50929392505050565b6000610e537f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846129a5565b600060405163350b944160e11b815260040160405180910390fd5b60006124388561111f565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018390529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156124ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124d19190613032565b9050806124f1576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600082600019048411830215820261251057600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612533610471565b61253d9190612f50565b905080831161254d576000612557565b6125578184612cd2565b915061118261258e670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612f50565b83906122ca565b6000806000836125a4866115f3565b6125ae9190612d80565b905060008112156125c65760008092509250506125cd565b9150600190505b9250929050565b60008082136125f65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906126799084901c6115f3565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361281557506000919050565b680755bf798b4a1bf1e5821261283e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061220d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115f3565b600081831361299e5781611182565b5090919050565b600080846001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a0a9190612feb565b905080600003612a1e576000915050611182565b6111c1846001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015612150573d6000803e3d6000fd5b604051806101200160405280612a73612ab1565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612b2757600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612b4c57600080fd5b840160608187031215612b5e57600080fd5b809150509250925092565b60008060408385031215612b7c57600080fd5b50508035926020909101359150565b6001600160a01b038116811461045657600080fd5b600060208284031215612bb257600080fd5b813561118281612b8b565b801515811461045657600080fd5b600060208284031215612bdd57600080fd5b813561118281612bbd565b6000808335601e19843603018112612bff57600080fd5b83018035915067ffffffffffffffff821115612c1a57600080fd5b6020019150368190038213156125cd57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612c8660a083018486612c2f565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612cb757612cb7612c92565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e5357610e53612cbc565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612d1f60e083018486612c2f565b9a9950505050505050505050565b80820180821115610e5357610e53612cbc565b6001600160701b0381811683821601908082111561219b5761219b612cbc565b6001600160801b0381811683821601908082111561219b5761219b612cbc565b818103600083128015838313168383128216171561219b5761219b612cbc565b600060208284031215612db257600080fd5b815161118281612b8b565b6001600160801b0382811682821603908082111561219b5761219b612cbc565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612e6f828551612ddd565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612ee457600080fd5b505080516020909101519092909150565b6000600160ff1b8201612f0a57612f0a612cbc565b5060000390565b6101808101610e538284612ddd565b60008060408385031215612f3357600080fd5b825191506020830151612f4581612bbd565b809150509250929050565b8082028115828204841417610e5357610e53612cbc565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e5357610e53612cbc565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612fc057600080fd5b8451935060208501519250604085015191506060850151612fe081612bbd565b939692955090935050565b600060208284031215612ffd57600080fd5b5051919050565b60008261301357613013612c92565b600160ff1b82146000198414161561302d5761302d612cbc565b500590565b60006020828403121561304457600080fd5b815161118281612bbd56fea2646970667358221220f0456d3b071933a3d031ec71c67cad5b5b703caf28d7030cb063a051ceb87e8d64736f6c63430008160033',
    methodIdentifiers: {
        "_liquidityPool()": "207deba0",
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
