export const ERC4626Target3 = {
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
            "name": "FailedInnerCall",
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
    bytecode: '0x6102806040523480156200001257600080fd5b506040516200431e3803806200431e8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613e4f620004cf600039600050506000505060006112f901526000818161030301528181610332015261035f01526000818160de015281816105a9015261172001526000818161085601528181610941015281816109d401528181610add015281816115f1015281816116fa01528181612161015281816121c401528181612aa301528181612eab0152612ee701526000818161013f015281816108c601528181610ea7015281816114b5015281816115190152818161156001526116d401526000611d66015260008181611ec1015261314001526000818161106b0152611e95015260006130f60152600081816101810152818161091901528181610ec801528181611485015281816114e901528181611581015261174601526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa30152612a3901526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b0152600081816119f601528181611a7001528181611b020152612d870152600081816119c90152611a2a0152613e4f6000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c366004613873565b610066565b60405190815260200160405180910390f35b6100416100613660046138d7565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b61393d565b611408565b611452565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613950565b81526020810191909152604001600020546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061165f565b90506103287f00000000000000000000000000000000000000000000000000000000000000008261393d565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613950565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103f1916001600160801b0390911690613950565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061042c90839061393d565b9050600080600061043c8a61168b565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104769084906004016139e1565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b791906139f0565b91506104ca6104c58c6117c5565b6117f3565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b918591016139e1565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c91906139f0565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613950565b9190611819565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e611837565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613a1e565b8e61184c565b61063a896118f4565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d919061393d565b9b5090508a158061073757506107348c6000611901565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611819565b610770565b60005b905061077f6020850185613a1e565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613a49565b866107ca60408c018c613a66565b6040516107dd9796959493929190613aad565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613b01565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613b18565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd8484611916565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e85858589600080611452565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a668561193c565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f84611966565b600480546001600160801b0319166001600160801b0392909216919091179055610ab88361193c565b600280546001600160801b03928316600160801b029216919091179055610b016000807f000000000000000000000000000000000000000000000000000000000000000061184c565b610b196000610b1360208c018c613a1e565b8a61184c565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f6020820182613a1e565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613a49565b87610b8a6040890189613a66565b604051610b9d9796959493929190613aad565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c136020830183613a1e565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b611916565b905090565b600080610c72878787866119a2565b9050610c7e818561165f565b979650505050505050565b81600080610c9d6040850160208601613a49565b15610cc257610cb885610cb36040870187613a66565b6119b9565b9093509050610cda565b5034610cda85610cd56040870187613a66565b611af5565b610ce2611b2f565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f0000000000000000000000000000000000000000000000000000000000000000611b42565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611400565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b61393d565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b92505b50610ef98361193c565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b613950565b8a84611b58565b610f8d89610f87610f807f00000000000000000000000000000000000000000000000000000000000000008361393d565b4290611c96565b84611b58565b610f9688611ca5565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d613950565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611e49565b6000818152600b60205260408120549192508c8c831561113a576001925060008061102386898d866000611e7e565b915091508060096000828254611039919061393d565b9091555061105590508660008461104f816117c5565b88611f4d565b61105f818361393d565b915061108f86838a8e877f00000000000000000000000000000000000000000000000000000000000000006120c7565b91506110a361109e838561210b565b612120565b600680546002906110c49084906201000090046001600160701b0316613b46565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f18261193c565b60068054601090611113908490600160801b90046001600160801b0316613b66565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611e49565b6000818152600b602052604090205490915080156112565760019450600080611174838b8f886001611e7e565b91509150806009600082825461118a919061393d565b909155506111a69050836000846111a0816117c5565b8a61214a565b6111b08183613950565b91506111bf61109e838761210b565b600680546002906111e09084906201000090046001600160701b0316613b46565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d8261193c565b6006805460109061122f908490600160801b90046001600160801b0316613b66565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561129057611282611268876117c5565b611271836117c5565b61127b9190613b86565b600061233b565b8e61128d848261237a565b50505b600061129b84612574565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113799190613ba6565b90506001600160a01b038116156113ee576113eb5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906126c0565b50505b509b9d50505050505050505050505050505b949350505050565b6000611430600b600061141c600286611e49565b8152602001908152602001600020546117c5565b611442600b600061141c600187611e49565b61144c9190613b86565b92915050565b6000806000806114628a8a61274d565b915091508061147957600080935093505050611654565b60006114d9838a6114b27f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613950565b8b7f0000000000000000000000000000000000000000000000000000000000000000612789565b509050600061153d848b846115167f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613950565b8d7f0000000000000000000000000000000000000000000000000000000000000000612846565b50905081158061154b575080155b15611557575060009050805b60006115a5858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a2565b90506115b383838c84612904565b50909350600090506115c5848f61393d565b905060006115e68b8b6115d7876117c5565b6115e1908e613bc3565b612950565b90508b61161b6116167f0000000000000000000000000000000000000000000000000000000000000000836129b7565b6117c5565b611624836117c5565b611631611616868561210b565b61163b9190613b86565b6116459190613b86565b60019950995050505050505050505b965096945050505050565b600061009161167384846301e133806129c8565b61168585670de0b6b3a7640000613950565b90611837565b6116936137ae565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161178b91166129ee565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117bd929004166129ee565b905292915050565b60006001600160ff1b038211156117ef5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117fc81612a5d565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261183057600080fd5b5091020490565b600061009183670de0b6b3a764000084611819565b6000838152600a602090815260408083206001600160a01b03861684529091528120805483929061187e90849061393d565b90915550506000838152600b6020526040812080548392906118a190849061393d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061144c82600461237a565b60008183136119105782610091565b50919050565b600080611923848461274d565b90925090508061193557611935612bf5565b5092915050565b60006001600160801b038211156117ef57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611984575060016001607f1b0382135b156117ef5760405163a5353be560e01b815260040160405180910390fd5b6000610078826119b3858888611819565b90612c0e565b6000806119f16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612c83565b611a517f0000000000000000000000000000000000000000000000000000000000000000611a2087600161393d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612cf0565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611ac1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae591906139f0565b925060009150505b935093915050565b611b2a6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612c83565b505050565b6000610c5e670de0b6b3a7640000612d80565b6000611b4e8284613c01565b6100919084613950565b600083815260086020526040902054600160801b90046001600160801b0316808303611b845750505050565b6000848152600860205260408120546001600160801b031690819003611bde57611bad8361193c565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611c5c565b611c2f611c2a670de0b6b3a7640000611bf78886613950565b611c019190613b01565b85670de0b6b3a7640000611c15878a613950565b611c1f9190613b01565b859291906001612dac565b61193c565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611c658461193c565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116119105782610091565b6006546000908190611cc8908490600160801b90046001600160801b031661210b565b6006546201000090046001600160701b03169250905081811115611e44576000611cf28383613950565b9050611d01611c2a8286612e4a565b60068054601090611d23908490600160801b90046001600160801b0316613c15565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611d5c858361183790919063ffffffff16565b90506000611d8a827f000000000000000000000000000000000000000000000000000000000000000061210b565b90508060096000828254611d9e919061393d565b90915550611dae90508183613950565b9150611db98261193c565b60028054600090611dd49084906001600160801b0316613b66565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e0182612e5f565b60048054600090611e16908490600f0b613c35565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611e735760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611e8b8785611837565b91506000611eb9837f000000000000000000000000000000000000000000000000000000000000000061210b565b9050611ee5817f000000000000000000000000000000000000000000000000000000000000000061210b565b91508315611f0857611ef78282613950565b611f019084613950565b9250611f1f565b611f128282613950565b611f1c908461393d565b92505b86861015611f4257611f32838789611819565b9250611f3f828789611819565b91505b509550959350505050565b600454600160801b90046001600160801b0316611f96611c2a82611f79670de0b6b3a764000086613b01565b600554600160801b90046001600160801b031691908a6000612dac565b600580546001600160801b03928316600160801b029216919091179055611fbc8661193c565b611fc69082613c15565b600480546001600160801b03928316600160801b029216919091179055611fec8461193c565b600280546000906120079084906001600160801b0316613b66565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061203483611966565b60048054600090612049908490600f0b613c35565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506120798561193c565b6002805460109061209b908490600160801b90046001600160801b0316613c15565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806120d9846116858a888a611819565b90506120e6888486611819565b6120f0908261393d565b9050868111156121005786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611819565b60006001600160701b038211156117ef5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061218c57507f000000000000000000000000000000000000000000000000000000000000000061218a8583613950565b105b1561219957612199612bf5565b6004549084900390600f0b6121ae8482613b86565b9050836121ba866117c5565b1380156121ef57507f00000000000000000000000000000000000000000000000000000000000000006121ed8383611916565b105b156121fc576121fc612bf5565b600354600160801b90046001600160801b031661223e611c2a82612228670de0b6b3a764000088613b01565b6005546001600160801b031691908c6000612dac565b600580546001600160801b0319166001600160801b03929092169190911790556122688882613950565b90506122738161193c565b600380546001600160801b03928316600160801b0292169190911790556122998361193c565b600280546001600160801b0319166001600160801b03929092169190911790556122c282611966565b600480546001600160801b0319166001600160801b03929092169190911790556122eb8761193c565b6002805460109061230d908490600160801b90046001600160801b0316613b66565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461235690611c2a906001600160801b03168484612950565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916123c5916001600160801b031690613950565b9050806000036123d957600191505061144c565b60006123e485612e89565b9050806000036123f95760019250505061144c565b600080612407838589612f25565b915091508061241d57600094505050505061144c565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612459929190613c62565b6040805180830381865af4158015612475573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124999190613cd8565b915091506124b76124a9826117c5565b6124b290613cfc565b612a5d565b9250826124cd576000965050505050505061144c565b6124d68261193c565b600780546000906124f19084906001600160801b0316613b66565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061251e8161193c565b60078054601090612540908490600160801b90046001600160801b0316613b66565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61259d8761168b565b6040518263ffffffff1660e01b81526004016125b991906139e1565b6040805180830381865af41580156125d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125f99190613d18565b915091508061260f575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916126759161393d565b61267f9190613950565b90508060000361269757506000958695509350505050565b60008087116126a75760006126b2565b6126b2848884611819565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156126e6576126e6613d48565b6040519080825280601f01601f191660200182016040528015612710576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612731578692505b828152826000602083013e9093509150505b9550959350505050565b60008060008361275c866117c5565b6127669190613b86565b9050600081121561277e576000809250925050610d57565b946001945092505050565b600080600061279b8888888888613094565b905060006127c6670de0b6b3a76400006127b58888612e4a565b6127bf919061393d565b8390611837565b9050670de0b6b3a764000081106127fa576127f36127ec670de0b6b3a764000089611837565b8290612c0e565b9050612812565b61280f6127ec670de0b6b3a764000089612e4a565b90505b61281c8186611837565b90508881101561283457600080935093505050612743565b97909703976001975095505050505050565b600080600061285889898888886130c3565b9050612872866119b361286b8a8d61393d565b879061210b565b985061287f858a86611819565b985088811015612896576000809250925050611654565b888103670de0b6b3a764000081106128c4576128bd6127ec670de0b6b3a764000089612e4a565b90506128dc565b6128d96127ec670de0b6b3a764000089611837565b90505b808910156128f257600080935093505050611654565b90970398600198509650505050505050565b60008060008060006129178987896130e8565b90925090506129268289613950565b9750600061293582888a611819565b9050612941818b613950565b9a989950979650505050505050565b60008061295e84600061316e565b61296984600061316e565b6129739190613b86565b9050600081131561298f57612988818661393d565b94506129ae565b60008112156129ae576129a181613cfc565b6129ab9086613950565b94505b50929392505050565b60006100918383670de0b6b3a76400005b60008260001904841183021582026129df57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612a02610d5e565b612a0c9190613b01565b9050808311612a1c576000612a26565b612a268184613950565b91506100916127bf670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613b01565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b3a9190613d5e565b935093509350935080612b565750600098975050505050505050565b868414612b8757612b668461193c565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bb857612b9783611966565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612be657612bc88261193c565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612c275750670de0b6b3a764000061144c565b82600003612c375750600061144c565b6000612c42836117c5565b90506000612c57612c52866117c5565b613184565b9050818102612c6e670de0b6b3a764000082613d9f565b9050612c79816133aa565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612cea9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061353f565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612d4184826135a7565b612cea576040516001600160a01b03848116602483015260006044830152612d7691869182169063095ea7b390606401612cb8565b612cea848261353f565b600061144c7f00000000000000000000000000000000000000000000000000000000000000008361364a565b600082600003612dbd575084610078565b8115612e1057612dee612dd0848761393d565b612dda858761210b565b612de4888a61210b565b611685919061393d565b90506000612dfc8588611c96565b905080821015612e0a578091505b50610078565b828503612e1f57506000610078565b610075612e2c8487613950565b612e3685876129b7565b612e40888a61210b565b6116859190613950565b600061009183670de0b6b3a7640000846129c8565b600060016001607f1b038211156117ef5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612ea4906001600160801b031684612e4a565b9050612ed07f00000000000000000000000000000000000000000000000000000000000000008261393d565b6002546001600160801b03161115611910576002547f000000000000000000000000000000000000000000000000000000000000000090612f1b9083906001600160801b0316613950565b6100919190613950565b612f2d61380f565b600080612f398461168b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612f7491906139e1565b6040805180830381865af4158015612f90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fb49190613d18565b9350905082612fc9575060009150611aed9050565b6000612feb61161684610160015185610140015161210b90919063ffffffff16565b61300b6116168561012001518661010001516129b790919063ffffffff16565b6130159190613b86565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006130a08585612c0e565b6130b96130b1866119b3868b61210b565b859085611819565b610075919061393d565b60006130cf8585612c0e565b6130b96130e0866119b3868b6129b7565b8590856129c8565b6000806131388561313285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613128818c612e4a565b6131329190613950565b906129b7565b9150613164827f000000000000000000000000000000000000000000000000000000000000000061210b565b9050935093915050565b600081831361317d5781610091565b5090919050565b60008082136131a65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132299084901c6117c5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133c557506000919050565b680755bf798b4a1bf1e582126133ee576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612c7974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117c5565b60006135546001600160a01b038416836136b6565b905080516000141580156135795750808060200190518101906135779190613dcd565b155b15611b2a57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516135c49190613dea565b6000604051808303816000865af19150503d8060008114613601576040519150601f19603f3d011682016040523d82523d6000602084013e613606565b606091505b50915091508180156136305750805115806136305750808060200190518101906136309190613dcd565b80156100785750505050506001600160a01b03163b151590565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a90602401602060405180830381865afa158015613692573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061009191906139f0565b60606100918383600084600080856001600160a01b031684866040516136dc9190613dea565b60006040518083038185875af1925050503d8060008114613719576040519150601f19603f3d011682016040523d82523d6000602084013e61371e565b606091505b5091509150612c7986838360608261373e5761373982613785565b610091565b815115801561375557506001600160a01b0384163b155b1561377e57604051639996b31560e01b81526001600160a01b038516600482015260240161359e565b5080610091565b8051156137955780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806138236137ae565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561191057600080fd5b600080600080600060a0868803121561388b57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156138be57600080fd5b6138ca88828901613861565b9150509295509295909350565b6000806000606084860312156138ec57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561391157600080fd5b61391d86828701613861565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561144c5761144c613927565b8181038181111561144c5761144c613927565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161144c8284613963565b600060208284031215613a0257600080fd5b5051919050565b6001600160a01b0381168114610c3a57600080fd5b600060208284031215613a3057600080fd5b813561009181613a09565b8015158114610c3a57600080fd5b600060208284031215613a5b57600080fd5b813561009181613a3b565b6000808335601e19843603018112613a7d57600080fd5b83018035915067ffffffffffffffff821115613a9857600080fd5b602001915036819003821315610d5757600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761144c5761144c613927565b600080600060608486031215613b2d57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561193557611935613927565b6001600160801b0381811683821601908082111561193557611935613927565b818103600083128015838313168383128216171561193557611935613927565b600060208284031215613bb857600080fd5b815161009181613a09565b8082018281126000831280158216821582161715613be357613be3613927565b505092915050565b634e487b7160e01b600052601260045260246000fd5b600082613c1057613c10613beb565b500690565b6001600160801b0382811682821603908082111561193557611935613927565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561144c5761144c613927565b60006102a082019050613c76828551613963565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613ceb57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613d1157613d11613927565b5060000390565b60008060408385031215613d2b57600080fd5b825191506020830151613d3d81613a3b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613d7457600080fd5b8451935060208501519250604085015191506060850151613d9481613a3b565b939692955090935050565b600082613dae57613dae613beb565b600160ff1b821460001984141615613dc857613dc8613927565b500590565b600060208284031215613ddf57600080fd5b815161009181613a3b565b6000825160005b81811015613e0b5760208186018101518583015201613df1565b50600092019182525091905056fea26469706673582212208268ac56975dee3773f21c085db698335122c659c6eb5876b6edec2899c2922764736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
