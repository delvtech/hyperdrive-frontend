export const EETHTarget2 = {
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
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b50604051620041ba380380620041ba8339810160408190526200003591620001b5565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519092015190915280516040908101516101605290516060908101516101805290850151821661024052909301516102605290821661022052166102805262000305565b60405161020081016001600160401b03811182821017156200011d57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013b57600080fd5b919050565b6000608082840312156200015357600080fd5b604051608081016001600160401b03811182821017156200018457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a0811215620001cd57600080fd5b61026080821215620001de57600080fd5b620001e8620000eb565b9150620001f58662000123565b8252620002056020870162000123565b6020830152620002186040870162000123565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e08301526101008087015181840152506101208087015181840152506101408087015181840152506101606200028381880162000123565b908301526101806200029787820162000123565b908301526101a0620002ab87820162000123565b908301526101c0620002bf87820162000123565b908301526101e0620002d48888830162000140565b8184015250819450620002e981870162000123565b93505050620002fc610280850162000123565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613cda620004e060003960008181604b015281816116b801526126880152600050506000505060008181610c6801526116e801526000505060008181610150015281816103580152612e120152600081816114ff01528181611e0601528181611e690152818161261b015281816129f701528181612a3301528181612c2b0152612dec01526000818161081601528181610dc801528181610e0a01528181610efc01528181611372015281816113d10152612dc601526000611a25015260008181611b4b0152818161275d015281816127d60152612f2c0152600081816109da01528181610e7d0152818161146c01528181611b1f01526127aa015260008181610e5c015281816127290152612ee801526000818161083701528181610da601528181610e2b01528181610f1d01528181611350015281816113f20152612e3801526000818161022e015281816103f00152818161091201526134c80152600081816106d001528181610750015281816107c60152818161089201526108ca01526000818161181801526126a9015260005050613cda6000f3fe6080604052600436106100345760003560e01c8063207deba014610039578063cba2e58d1461008a578063dbbe8070146100b2575b600080fd5b34801561004557600080fd5b5061006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61009d61009836600461375d565b6100c5565b60408051928352602083019190915201610081565b61009d6100c036600461375d565b6100e2565b6000806100d4868686866100f1565b915091505b94509492505050565b6000806100d486868686610319565b6000806100fc610572565b600654610100900460ff1615610125576040516321081abf60e01b815260040160405180910390fd5b61012e8361059c565b60008061013b88866105d5565b9092509050600061014c83836106aa565b90507f000000000000000000000000000000000000000000000000000000000000000081101561018f5760405163211ddda360e11b815260040160405180910390fd5b868210156101b0576040516342af972b60e01b815260040160405180910390fd5b60006101ba6106c8565b90506101ca8184600460016106f9565b5060008060006101da8787610d77565b919a5091945090925090508b8810156102065760405163c972651760e01b815260040160405180910390fd5b816009600082825461021891906137d2565b909155506102299050844283610f59565b6102537f0000000000000000000000000000000000000000000000000000000000000000856137d2565b98506102618389888c611097565b600061026e60018b611231565b90506102878161028160208e018e6137fa565b8b611266565b8d8a8a898e8561029a60208301836137fa565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102d76040880160208901613825565b896102e560408a018a613842565b6040516102f897969594939291906138b2565b60405180910390a350909b5050505050505050505050506100d96001600055565b600080610324610572565b600654610100900460ff161561034d576040516321081abf60e01b815260040160405180910390fd5b6103568361059c565b7f00000000000000000000000000000000000000000000000000000000000000008610156103975760405163211ddda360e11b815260040160405180910390fd5b60006103a161130e565b9050848110156103c4576040516342af972b60e01b815260040160405180910390fd5b60006103ce6106c8565b905060006103e76103dd6106c8565b84600460016106f9565b905060006104157f0000000000000000000000000000000000000000000000000000000000000000846137d2565b90506000806000806104288e8988611321565b60098054949850929650909450925083916000906104479084906137d2565b909155506104589050874283610f59565b50600061046684898d6114a7565b9050808d10156104895760405163c972651760e01b815260040160405180910390fd5b610493818c6105d5565b508e90506104a381858b896114d9565b60006104b0600288611231565b90508c6104ca826104c460208401846137fa565b85611266565b858b86846104db60208601866137fa565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a8661051860408b0160208c01613825565b61052c896105268a8d6138f3565b906106aa565b8d61053a60408e018e613842565b60405161054e989796959493929190613906565b60405180910390a350989d50939b5050505050505050505050506100d96001600055565b60026000540361059557604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105ab60208301836137fa565b6001600160a01b0316036105d25760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105e96040850160208601613825565b1561060e57610604856105ff6040870187613842565b61168d565b9093509050610626565b5034610626856106216040870187613842565b6117dd565b61062e61130e565b915080156106a157604051600090339083908381818185875af1925050503d8060008114610678576040519150601f19603f3d011682016040523d82523d6000602084013e61067d565b606091505b505090508061069f576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106bf8383670de0b6b3a76400006118ac565b90505b92915050565b60006106f4427f00000000000000000000000000000000000000000000000000000000000000006118ca565b905090565b600084815260086020526040812060018101546001600160801b031615158061072157504286115b1561073a57600101546001600160801b03169050610d6f565b60008060006107476106c8565b905060006107757f00000000000000000000000000000000000000000000000000000000000000008b6137d2565b90505b818110156107eb576000818152600860205260409020600101546001600160801b031680156107c3576000828152600860205260409020549094506001600160801b031692506107eb565b507f000000000000000000000000000000000000000000000000000000000000000001610778565b8360000361085e5788935061085b6108016118e0565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b92505b5061086883611921565b6001850180546001600160801b0319166001600160801b03929092169190911790556108be6108b77f00000000000000000000000000000000000000000000000000000000000000008b6138f3565b8a84610f59565b6108fc896108f66108ef7f0000000000000000000000000000000000000000000000000000000000000000836137d2565b429061194f565b84610f59565b61090588611964565b50600090506008816109377f00000000000000000000000000000000000000000000000000000000000000008d6138f3565b815260208101919091526040016000908120600101546001600160801b0316915061096360028c611231565b6000818152600b60205260408120549192508c8c8315610aa9576001925060008061099286898d866000611b08565b9150915080600960008282546109a891906137d2565b909155506109c49050866000846109be81611bd7565b88611c01565b6109ce81836137d2565b91506109fe86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d7b565b9150610a12610a0d83856106aa565b611dc5565b60068054600290610a339084906201000090046001600160701b031661394e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a6082611921565b60068054601090610a82908490600160801b90046001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ab6600184611231565b6000818152600b60205260409020549091508015610bc55760019450600080610ae3838b8f886001611b08565b915091508060096000828254610af991906137d2565b90915550610b15905083600084610b0f81611bd7565b8a611def565b610b1f81836138f3565b9150610b2e610a0d83876106aa565b60068054600290610b4f9084906201000090046001600160701b031661394e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b7c82611921565b60068054601090610b9e908490600160801b90046001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bff57610bf1610bd787611bd7565b610be083611bd7565b610bea919061398e565b6000611fe0565b8e610bfc848261201f565b50505b6000610c0a84612219565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce891906139ae565b90506001600160a01b03811615610d5d57610d5a5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612365565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610d876118e0565b600254909150610dec908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006123f0565b600254909450610e4f908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b9150610ea68785610ea1857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061241c565b612481565b15610eb357610eb36124c3565b610ebf878588856124dc565b91965094509250670de0b6b3a7640000610f41610edc87846137d2565b600254610efa908890600160801b90046001600160801b03166138f3565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b1115610f4f57610f4f6124c3565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f855750505050565b6000848152600860205260408120546001600160801b031690819003610fdf57610fae83611921565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561105d565b61103061102b670de0b6b3a7640000610ff888866138f3565b61100291906139cb565b85670de0b6b3a7640000611016878a6138f3565b61102091906139cb565b859291906001612528565b611921565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61106684611921565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110d961102b826110c3670de0b6b3a7640000866139cb565b6005546001600160801b03169190886001612528565b600580546001600160801b0319166001600160801b039290921691909117905561110285611921565b6002805460009061111d9084906001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114a84611921565b6002805460109061116c908490600160801b90046001600160801b03166139e2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061119984611921565b6111a3908261396e565b600380546001600160801b03808416600160801b029116179055905060006111ca836125d0565b90506111e8816111d987611bd7565b6111e39084613a02565b611fe0565b6111f184612614565b6111fd576111fd6124c3565b600061120885612674565b90508061122857604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561125b5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906112989084906137d2565b90915550506000838152600b6020526040812080548392906112bb9084906137d2565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106f4670de0b6b3a7640000612681565b60008060008060006113316118e0565b600254909150611396908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006126ce565b9350876113a385896126ef565b11156113b1576113b16124c3565b6002546000908190611416908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b935061142c8a670de0b6b3a7640000868c612704565b5091935090915061143f905081836138f3565b61144990876138f3565b955088611496816114908d61145e868c6138f3565b8d6114698782612812565b877f0000000000000000000000000000000000000000000000000000000000000000612828565b906126ef565b975090945050505093509350935093565b60006114b96040830160208401613825565b156114c55750826114d2565b6114cf848461284d565b90505b9392505050565b6002546001600160801b0316838110156114f5576114f56124c3565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061152d908390600f0b612862565b101561153b5761153b6124c3565b6004546115859061102b90600160801b90046001600160801b0316611568670de0b6b3a7640000866139cb565b600554600160801b90046001600160801b03169190896001612528565b600580546001600160801b03928316600160801b0292169190911790556115ab81611921565b600280546001600160801b0319166001600160801b03929092169190911790556115d485611921565b600280546010906115f6908490600160801b90046001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061162385611921565b60048054601090611645908490600160801b90046001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611674836125d0565b90506111e88161168388611bd7565b6111e3908461398e565b600080843410156116b1576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f340fa01867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611744573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176891906139ae565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af11580156117ad573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906117d29190613a2a565b91505b935093915050565b60006117e884612681565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303816000875af1158015611861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118859190613a43565b9050806118a5576040516312171d8360e31b815260040160405180910390fd5b5050505050565b60008260001904841183021582026118c357600080fd5b5091020490565b60006118d68284613a76565b6106bf90846138f3565b6002546004546000916106f4916001600160801b0390911690600f0b612862565b6000611918826119128588886118ac565b90612888565b95945050505050565b60006001600160801b0382111561194b57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161195e57826106bf565b50919050565b6006546000908190611987908490600160801b90046001600160801b03166106aa565b6006546201000090046001600160701b03169250905081811115611b035760006119b183836138f3565b90506119c061102b82866128f3565b600680546010906119e2908490600160801b90046001600160801b03166139e2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a1b858361284d90919063ffffffff16565b90506000611a49827f00000000000000000000000000000000000000000000000000000000000000006106aa565b90508060096000828254611a5d91906137d2565b90915550611a6d905081836138f3565b9150611a7882611921565b60028054600090611a939084906001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ac082612908565b60048054600090611ad5908490600f0b613a8a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b15878561284d565b91506000611b43837f00000000000000000000000000000000000000000000000000000000000000006106aa565b9050611b6f817f00000000000000000000000000000000000000000000000000000000000000006106aa565b91508315611b9257611b8182826138f3565b611b8b90846138f3565b9250611ba9565b611b9c82826138f3565b611ba690846137d2565b92505b86861015611bcc57611bbc8387896118ac565b9250611bc98287896118ac565b91505b509550959350505050565b60006001600160ff1b0382111561194b5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611c4a61102b82611c2d670de0b6b3a7640000866139cb565b600554600160801b90046001600160801b031691908a6000612528565b600580546001600160801b03928316600160801b029216919091179055611c7086611921565b611c7a90826139e2565b600480546001600160801b03928316600160801b029216919091179055611ca084611921565b60028054600090611cbb9084906001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ce883612932565b60048054600090611cfd908490600f0b613a8a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d2d85611921565b60028054601090611d4f908490600160801b90046001600160801b03166139e2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611d9384611d8d8a888a6118ac565b9061284d565b9050611da08884866118ac565b611daa90826137d2565b905086811115611dba5786810391505b509695505050505050565b60006001600160701b0382111561194b5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611e3157507f0000000000000000000000000000000000000000000000000000000000000000611e2f85836138f3565b105b15611e3e57611e3e6124c3565b6004549084900390600f0b611e53848261398e565b905083611e5f86611bd7565b138015611e9457507f0000000000000000000000000000000000000000000000000000000000000000611e928383612862565b105b15611ea157611ea16124c3565b600354600160801b90046001600160801b0316611ee361102b82611ecd670de0b6b3a7640000886139cb565b6005546001600160801b031691908c6000612528565b600580546001600160801b0319166001600160801b0392909216919091179055611f0d88826138f3565b9050611f1881611921565b600380546001600160801b03928316600160801b029216919091179055611f3e83611921565b600280546001600160801b0319166001600160801b0392909216919091179055611f6782612932565b600480546001600160801b0319166001600160801b0392909216919091179055611f9087611921565b60028054601090611fb2908490600160801b90046001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611ffb9061102b906001600160801b0316848461296e565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161206a916001600160801b0316906138f3565b90508060000361207e5760019150506106c2565b6000612089856129d5565b90508060000361209e576001925050506106c2565b6000806120ac838589612a71565b91509150806120c25760009450505050506106c2565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016120fe929190613b35565b6040805180830381865af415801561211a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213e9190613bab565b9150915061215c61214e82611bd7565b61215790613bcf565b612be5565b92508261217257600096505050505050506106c2565b61217b82611921565b600780546000906121969084906001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121c381611921565b600780546010906121e5908490600160801b90046001600160801b031661396e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61224287612d7d565b6040518263ffffffff1660e01b815260040161225e9190613beb565b6040805180830381865af415801561227a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061229e9190613bfa565b91509150806122b4575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161231a916137d2565b61232491906138f3565b90508060000361233c57506000958695509350505050565b600080871161234c576000612357565b6123578488846118ac565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561238b5761238b613c2a565b6040519080825280601f01601f1916602001820160405280156123b5576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156123d6578692505b828152826000602083013e90999098509650505050505050565b600061241187878761240a88670de0b6b3a76400006138f3565b8787612eb7565b979650505050505050565b60006114cf61245d61243684670de0b6b3a76400006138f3565b611490670de0b6b3a764000061244c818a6128f3565b61245691906138f3565b87906126ef565b61246f90670de0b6b3a76400006137d2565b611d8d84670de0b6b3a76400006138f3565b6000806124b8856124906118e0565b61249a91906137d2565b600254610efa908790600160801b90046001600160801b03166138f3565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006124ef898789612eda565b90925090506124fe82896138f3565b9750600061250d82888a6118ac565b9050612519818b6138f3565b9a989950979650505050505050565b600082600003612539575084611918565b811561258c5761256a61254c84876137d2565b61255685876106aa565b612560888a6106aa565b611d8d91906137d2565b90506000612578858861194f565b905080821015612586578091505b50611918565b82850361259b57506000611918565b6125c66125a884876138f3565b6125b285876126ef565b6125bc888a6106aa565b611d8d91906138f3565b9695505050505050565b60006125f8600b60006125e4600286611231565b815260200190815260200160002054611bd7565b61260a600b60006125e4600187611231565b6106c2919061398e565b60006126407f0000000000000000000000000000000000000000000000000000000000000000836126ef565b60035461265691906001600160801b03166137d2565b60025461266c906001600160801b0316846106aa565b101592915050565b60006106c282600461201f565b60006106c27f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612f5a565b60006124118787876126e888670de0b6b3a76400006138f3565b8787613040565b60006106bf8383670de0b6b3a7640000613051565b6000808080612755878661274e8b6114906127278c670de0b6b3a76400006138f3565b7f0000000000000000000000000000000000000000000000000000000000000000906126ef565b9190613051565b9350612781847f00000000000000000000000000000000000000000000000000000000000000006106aa565b915060006127a261279a89670de0b6b3a76400006138f3565b8a9088613051565b90506127ce817f00000000000000000000000000000000000000000000000000000000000000006126ef565b93506127fa847f00000000000000000000000000000000000000000000000000000000000000006106aa565b61280490846137d2565b915050945094509450949050565b600081831161282157816106bf565b5090919050565b6000806128408461283a8a888a613051565b906128f3565b9050611da0888486613051565b60006106bf83670de0b6b3a7640000846118ac565b60008061286f8484613077565b909250905080612881576128816124c3565b5092915050565b6000816000036128a15750670de0b6b3a76400006106c2565b826000036128b1575060006106c2565b60006128bc83611bd7565b905060006128d16128cc86611bd7565b6130b3565b90508181026128e8670de0b6b3a764000082613c40565b90506125c6816132d9565b60006106bf83670de0b6b3a764000084613051565b600060016001607f1b0382111561194b5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612950575060016001607f1b0382135b1561194b5760405163a5353be560e01b815260040160405180910390fd5b60008061297c84600061346e565b61298784600061346e565b612991919061398e565b905060008113156129ad576129a681866137d2565b94506129cc565b60008112156129cc576129bf81613bcf565b6129c990866138f3565b94505b50929392505050565b60035460009081906129f0906001600160801b0316846128f3565b9050612a1c7f0000000000000000000000000000000000000000000000000000000000000000826137d2565b6002546001600160801b0316111561195e576002547f000000000000000000000000000000000000000000000000000000000000000090612a679083906001600160801b03166138f3565b6114d291906138f3565b612a796136aa565b600080612a8584612d7d565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612ac09190613beb565b6040805180830381865af4158015612adc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b009190613bfa565b9350905082612b155750600091506117d59050565b6000612b3c612b378461016001518561014001516106aa90919063ffffffff16565b611bd7565b612b5c612b378561012001518661010001516126ef90919063ffffffff16565b612b66919061398e565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cc29190613c6e565b935093509350935080612cde5750600098975050505050505050565b868414612d0f57612cee84611921565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612d4057612d1f83612932565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d6e57612d5082611921565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d856136fc565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e7d911661347d565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612eaf9290041661347d565b905292915050565b600080612ec88888888888886134f3565b909250905080611dba57611dba6124c3565b600080612f248561149085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612f1a818c6128f3565b61149091906138f3565b9150612f50827f00000000000000000000000000000000000000000000000000000000000000006106aa565b9050935093915050565b600080836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015612f9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fbf9190613a2a565b905080600003612fd35760009150506114d2565b611918856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613014573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130389190613a2a565b8490836118ac565b600080612ec88888888888886135bb565b600082600019048411830215820261306857600080fd5b50910281810615159190040190565b60008060008361308686611bd7565b613090919061398e565b905060008112156130a85760008092509250506106a3565b946001945092505050565b60008082136130d55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131589084901c611bd7565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136132f457506000919050565b680755bf798b4a1bf1e5821261331d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906125c674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611bd7565b600081831361282157816106bf565b600080670de0b6b3a76400006134916106c8565b61349b91906139cb565b90508083116134ab5760006134b5565b6134b581846138f3565b91506114d26134ec670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139cb565b839061284d565b6000806000613505898988888861367b565b905061351f866119126135188a8d6137d2565b87906106aa565b985061352c858a866118ac565b9850888110156135435760008092509250506135b0565b888103670de0b6b3a764000081106135785761357161356a670de0b6b3a7640000896128f3565b8290612888565b9050613590565b61358d61356a670de0b6b3a76400008961284d565b90505b808910156135a6576000809350935050506135b0565b8803925060019150505b965096945050505050565b60008060006135cd898988888861367b565b90506135dd86611912898b6137d2565b9750878110156135f45760008092509250506135b0565b878103613602818688613051565b9050670de0b6b3a7640000811061362f5761362861356a670de0b6b3a7640000896128f3565b9050613647565b61364461356a670de0b6b3a76400008961284d565b90505b61365181866128f3565b9050808a1015613669576000809350935050506135b0565b90980398600198509650505050505050565b60006136878585612888565b6136a061369886611912868b6126ef565b859085613051565b6125c691906137d2565b6040518061012001604052806136be6136fc565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561377357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561379f57600080fd5b8501606081880312156137b157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106c2576106c26137bc565b6001600160a01b03811681146105d257600080fd5b60006020828403121561380c57600080fd5b81356114d2816137e5565b80151581146105d257600080fd5b60006020828403121561383757600080fd5b81356114d281613817565b6000808335601e1984360301811261385957600080fd5b83018035915067ffffffffffffffff82111561387457600080fd5b6020019150368190038213156106a357600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a082015260006138e660c083018486613889565b9998505050505050505050565b818103818111156106c2576106c26137bc565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061394060e083018486613889565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612881576128816137bc565b6001600160801b03818116838216019080821115612881576128816137bc565b8181036000831280158383131683831282161715612881576128816137bc565b6000602082840312156139c057600080fd5b81516114d2816137e5565b80820281158282048414176106c2576106c26137bc565b6001600160801b03828116828216039080821115612881576128816137bc565b8082018281126000831280158216821582161715613a2257613a226137bc565b505092915050565b600060208284031215613a3c57600080fd5b5051919050565b600060208284031215613a5557600080fd5b81516114d281613817565b634e487b7160e01b600052601260045260246000fd5b600082613a8557613a85613a60565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106c2576106c26137bc565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613b49828551613ab7565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613bbe57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613be457613be46137bc565b5060000390565b61018081016106c28284613ab7565b60008060408385031215613c0d57600080fd5b825191506020830151613c1f81613817565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613c4f57613c4f613a60565b600160ff1b821460001984141615613c6957613c696137bc565b500590565b60008060008060808587031215613c8457600080fd5b84519350602085015192506040850151915060608501516137b18161381756fea26469706673582212202439d73d0ca7cd4cba3cb3f20766a62fa93cc7fbc02673e76eb5f84aa78e596d64736f6c63430008160033',
    methodIdentifiers: {
        "_liquidityPool()": "207deba0",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
