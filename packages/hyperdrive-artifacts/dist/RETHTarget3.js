export const RETHTarget3 = {
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
            "type": "receive",
            "stateMutability": "payable"
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
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620040fc380380620040fc8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c3e620004be6000396000505060005050600061134d0152600081816103570152818161038601526103b3015260008181610132015281816105fd01526117740152600081816108aa0152818161099501528181610a2801528181610b31015281816116450152818161174e01528181612095015281816120f8015281816129d701528181612da20152612dde0152600081816101930152818161091a01528181610efb015281816115090152818161156d015281816115b4015261172801526000611c9a015260008181611df5015261303e0152600081816110bf0152611dc901526000612ff40152600081816101d50152818161096d01528181610f1c015281816114d90152818161153d015281816115d5015261179a0152600081816101b40152818161028c0152818161032c015281816107470152818161094701528181610ff7015261296d0152600081816102eb01528181610dba01528181610e3501528181610eab01528181610f770152610faf015260008181603d01528181611a360152612c30015260005050613c3e6000f3fe60806040526004361061002d5760003560e01c80634c2ac1d91461008257806377d05ff4146100a757600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b610095610090366004613662565b6100ba565b60405190815260200160405180910390f35b6100956100b53660046136c6565b6100d5565b60006100c986868686866100ec565b90505b95945050505050565b60006100e2848484610854565b90505b9392505050565b60006100f6610c0d565b600654610100900460ff161561011f576040516321081abf60e01b815260040160405180910390fd5b610127610c37565b61013082610c58565b7f00000000000000000000000000000000000000000000000000000000000000008610156101715760405163211ddda360e11b815260040160405180910390fd5b60006101f961017e610c91565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610cb7565b90508481108061020857508381115b1561022657604051633b61151160e11b815260040160405180910390fd5b6000806102338986610cdd565b915091506000610241610db2565b9050610251818360046001610dde565b5060025460045460035460009283926102bb926001600160801b0380841693600f9390930b92600160801b90048116918991166102b66102b17f00000000000000000000000000000000000000000000000000000000000000008b61372c565b61145c565b6114a6565b91509150806102dd57604051630552b01360e31b815260040160405180910390fd5b8b60006103506008826103107f00000000000000000000000000000000000000000000000000000000000000008961373f565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006116b3565b905061037c7f00000000000000000000000000000000000000000000000000000000000000008261372c565b8811806103db57507f0000000000000000000000000000000000000000000000000000000000000000811180156103db57506103d87f00000000000000000000000000000000000000000000000000000000000000008261373f565b88105b156103f957604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091610445916001600160801b039091169061373f565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061048090839061372c565b905060008060006104908a6116df565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104ca9084906004016137d0565b602060405180830381865af41580156104e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050b91906137df565b915061051e6105198c611819565b611847565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161057f918591016137d0565b602060405180830381865af415801561059c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c091906137df565b9250818310156105e35760405163184d952160e11b815260040160405180910390fd5b6105f984836105f2818761373f565b919061186d565b9c507f00000000000000000000000000000000000000000000000000000000000000008d101561063c5760405163211ddda360e11b815260040160405180910390fd5b508f610648868e61188b565b10156106675760405163c972651760e01b815260040160405180910390fd5b61068560008e600001602081019061067f919061380d565b8e6118a0565b61068e89611948565b9550856106ae57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c90506000610771600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102b67f00000000000000000000000000000000000000000000000000000000000000008c6102b1919061372c565b9b5090508a158061078b57506107888c6000611955565b81125b156107a957604051630552b01360e31b815260040160405180910390fd5b600088156107c1576107bc87848b61186d565b6107c4565b60005b90506107d3602085018561380d565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661081060408a0160208b01613838565b8661081e60408c018c613855565b604051610831979695949392919061389c565b60405180910390a250505050505050505050505050505050506100cc6001600055565b600061085e610c0d565b610866610c37565b61086f82610c58565b60065460ff161561089357604051637983c05160e01b815260040160405180910390fd5b6000806108a08685610cdd565b90925090506108d07f000000000000000000000000000000000000000000000000000000000000000060026138f0565b8210156108f057604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a209190613907565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a51848461196a565b1015610a705760405163216f4ab160e21b815260040160405180910390fd5b600080610a82858585896000806114a6565b91509150801580610a935750600082125b15610ab157604051630552b01360e31b815260040160405180910390fd5b610aba85611990565b600280546001600160801b0319166001600160801b0392909216919091179055610ae3846119ba565b600480546001600160801b0319166001600160801b0392909216919091179055610b0c83611990565b600280546001600160801b03928316600160801b029216919091179055610b556000807f00000000000000000000000000000000000000000000000000000000000000006118a0565b610b6d6000610b6760208c018c61380d565b8a6118a0565b610b82610b78610db2565b8760046001610dde565b508a8a8a610b93602082018261380d565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610bd06040870160208801613838565b87610bde6040890189613855565b604051610bf1979695949392919061389c565b60405180910390a2505050505050505050506100e56001600055565b600260005403610c3057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c5657604051631574f9f360e01b815260040160405180910390fd5b565b6000610c67602083018361380d565b6001600160a01b031603610c8e5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610cb2916001600160801b0390911690600f0b61196a565b905090565b600080610cc6878787866119f6565b9050610cd281856116b3565b979650505050505050565b81600080610cf16040850160208601613838565b15610d1657610d0c85610d076040870187613855565b611a0d565b9093509050610d2e565b5034610d2e85610d296040870187613855565b611a29565b610d36611a63565b91508015610da957604051600090339083908381818185875af1925050503d8060008114610d80576040519150601f19603f3d011682016040523d82523d6000602084013e610d85565b606091505b5050905080610da7576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610cb2427f0000000000000000000000000000000000000000000000000000000000000000611a76565b600084815260086020526040812060018101546001600160801b0316151580610e0657504286115b15610e1f57600101546001600160801b03169050611454565b6000806000610e2c610db2565b90506000610e5a7f00000000000000000000000000000000000000000000000000000000000000008b61372c565b90505b81811015610ed0576000818152600860205260409020600101546001600160801b03168015610ea8576000828152600860205260409020549094506001600160801b03169250610ed0565b507f000000000000000000000000000000000000000000000000000000000000000001610e5d565b83600003610f4357889350610f40610ee6610c91565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119f6565b92505b50610f4d83611990565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fa3610f9c7f00000000000000000000000000000000000000000000000000000000000000008b61373f565b8a84611a8c565b610fe189610fdb610fd47f00000000000000000000000000000000000000000000000000000000000000008361372c565b4290611bca565b84611a8c565b610fea88611bd9565b506000905060088161101c7f00000000000000000000000000000000000000000000000000000000000000008d61373f565b815260208101919091526040016000908120600101546001600160801b0316915061104860028c611d7d565b6000818152600b60205260408120549192508c8c831561118e576001925060008061107786898d866000611db2565b91509150806009600082825461108d919061372c565b909155506110a99050866000846110a381611819565b88611e81565b6110b3818361372c565b91506110e386838a8e877f0000000000000000000000000000000000000000000000000000000000000000611ffb565b91506110f76110f2838561203f565b612054565b600680546002906111189084906201000090046001600160701b0316613935565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061114582611990565b60068054601090611167908490600160801b90046001600160801b0316613955565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061119b600184611d7d565b6000818152600b602052604090205490915080156112aa57600194506000806111c8838b8f886001611db2565b9150915080600960008282546111de919061372c565b909155506111fa9050836000846111f481611819565b8a61207e565b611204818361373f565b91506112136110f2838761203f565b600680546002906112349084906201000090046001600160701b0316613935565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061126182611990565b60068054601090611283908490600160801b90046001600160801b0316613955565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112e4576112d66112bc87611819565b6112c583611819565b6112cf9190613975565b600061226f565b8e6112e184826122ae565b50505b60006112ef846124a8565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cd9190613995565b90506001600160a01b038116156114425761143f5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906125f4565b50505b509b9d50505050505050505050505050505b949350505050565b6000611484600b6000611470600286611d7d565b815260200190815260200160002054611819565b611496600b6000611470600187611d7d565b6114a09190613975565b92915050565b6000806000806114b68a8a612681565b91509150806114cd576000809350935050506116a8565b600061152d838a6115067f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061373f565b8b7f00000000000000000000000000000000000000000000000000000000000000006126bd565b5090506000611591848b8461156a7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061373f565b8d7f000000000000000000000000000000000000000000000000000000000000000061277a565b50905081158061159f575080155b156115ab575060009050805b60006115f9858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119f6565b905061160783838c84612838565b5090935060009050611619848f61372c565b9050600061163a8b8b61162b87611819565b611635908e6139b2565b612884565b90508b61166f61166a7f0000000000000000000000000000000000000000000000000000000000000000836128eb565b611819565b61167883611819565b61168561166a868561203f565b61168f9190613975565b6116999190613975565b60019950995050505050505050505b965096945050505050565b60006100e56116c784846301e133806128fc565b6116d985670de0b6b3a764000061373f565b9061188b565b6116e761359d565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117df9116612922565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261181192900416612922565b905292915050565b60006001600160ff1b038211156118435760405163396ea70160e11b815260040160405180910390fd5b5090565b61185081612991565b610c8e57604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261188457600080fd5b5091020490565b60006100e583670de0b6b3a76400008461186d565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906118d290849061372c565b90915550506000838152600b6020526040812080548392906118f590849061372c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006114a08260046122ae565b600081831361196457826100e5565b50919050565b6000806119778484612681565b90925090508061198957611989612b29565b5092915050565b60006001600160801b0382111561184357604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806119d8575060016001607f1b0382135b156118435760405163a5353be560e01b815260040160405180910390fd5b60006100cc82611a0785888861186d565b90612b42565b60008060405163350b944160e11b815260040160405180910390fd5b611a5e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612bb7565b505050565b6000610cb2670de0b6b3a7640000612c17565b6000611a8282846139f0565b6100e5908461373f565b600083815260086020526040902054600160801b90046001600160801b0316808303611ab85750505050565b6000848152600860205260408120546001600160801b031690819003611b1257611ae183611990565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b90565b611b63611b5e670de0b6b3a7640000611b2b888661373f565b611b3591906138f0565b85670de0b6b3a7640000611b49878a61373f565b611b5391906138f0565b859291906001612ca3565b611990565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611b9984611990565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161196457826100e5565b6006546000908190611bfc908490600160801b90046001600160801b031661203f565b6006546201000090046001600160701b03169250905081811115611d78576000611c26838361373f565b9050611c35611b5e8286612d41565b60068054601090611c57908490600160801b90046001600160801b0316613a04565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c90858361188b90919063ffffffff16565b90506000611cbe827f000000000000000000000000000000000000000000000000000000000000000061203f565b90508060096000828254611cd2919061372c565b90915550611ce29050818361373f565b9150611ced82611990565b60028054600090611d089084906001600160801b0316613955565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d3582612d56565b60048054600090611d4a908490600f0b613a24565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611da75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611dbf878561188b565b91506000611ded837f000000000000000000000000000000000000000000000000000000000000000061203f565b9050611e19817f000000000000000000000000000000000000000000000000000000000000000061203f565b91508315611e3c57611e2b828261373f565b611e35908461373f565b9250611e53565b611e46828261373f565b611e50908461372c565b92505b86861015611e7657611e6683878961186d565b9250611e7382878961186d565b91505b509550959350505050565b600454600160801b90046001600160801b0316611eca611b5e82611ead670de0b6b3a7640000866138f0565b600554600160801b90046001600160801b031691908a6000612ca3565b600580546001600160801b03928316600160801b029216919091179055611ef086611990565b611efa9082613a04565b600480546001600160801b03928316600160801b029216919091179055611f2084611990565b60028054600090611f3b9084906001600160801b0316613955565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f68836119ba565b60048054600090611f7d908490600f0b613a24565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fad85611990565b60028054601090611fcf908490600160801b90046001600160801b0316613a04565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061200d846116d98a888a61186d565b905061201a88848661186d565b612024908261372c565b9050868111156120345786810391505b509695505050505050565b60006100e58383670de0b6b3a764000061186d565b60006001600160701b038211156118435760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806120c057507f00000000000000000000000000000000000000000000000000000000000000006120be858361373f565b105b156120cd576120cd612b29565b6004549084900390600f0b6120e28482613975565b9050836120ee86611819565b13801561212357507f0000000000000000000000000000000000000000000000000000000000000000612121838361196a565b105b1561213057612130612b29565b600354600160801b90046001600160801b0316612172611b5e8261215c670de0b6b3a7640000886138f0565b6005546001600160801b031691908c6000612ca3565b600580546001600160801b0319166001600160801b039290921691909117905561219c888261373f565b90506121a781611990565b600380546001600160801b03928316600160801b0292169190911790556121cd83611990565b600280546001600160801b0319166001600160801b03929092169190911790556121f6826119ba565b600480546001600160801b0319166001600160801b039290921691909117905561221f87611990565b60028054601090612241908490600160801b90046001600160801b0316613955565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461228a90611b5e906001600160801b03168484612884565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916122f9916001600160801b03169061373f565b90508060000361230d5760019150506114a0565b600061231885612d80565b90508060000361232d576001925050506114a0565b60008061233b838589612e1c565b91509150806123515760009450505050506114a0565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161238d929190613a51565b6040805180830381865af41580156123a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123cd9190613ac7565b915091506123eb6123dd82611819565b6123e690613aeb565b612991565b92508261240157600096505050505050506114a0565b61240a82611990565b600780546000906124259084906001600160801b0316613955565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061245281611990565b60078054601090612474908490600160801b90046001600160801b0316613955565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6124d1876116df565b6040518263ffffffff1660e01b81526004016124ed91906137d0565b6040805180830381865af4158015612509573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061252d9190613b07565b9150915080612543575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916125a99161372c565b6125b3919061373f565b9050806000036125cb57506000958695509350505050565b60008087116125db5760006125e6565b6125e684888461186d565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561261a5761261a613b37565b6040519080825280601f01601f191660200182016040528015612644576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612665578692505b828152826000602083013e9093509150505b9550959350505050565b60008060008361269086611819565b61269a9190613975565b905060008112156126b2576000809250925050610dab565b946001945092505050565b60008060006126cf8888888888612f92565b905060006126fa670de0b6b3a76400006126e98888612d41565b6126f3919061372c565b839061188b565b9050670de0b6b3a7640000811061272e57612727612720670de0b6b3a76400008961188b565b8290612b42565b9050612746565b612743612720670de0b6b3a764000089612d41565b90505b612750818661188b565b90508881101561276857600080935093505050612677565b97909703976001975095505050505050565b600080600061278c8989888888612fc1565b90506127a686611a0761279f8a8d61372c565b879061203f565b98506127b3858a8661186d565b9850888110156127ca5760008092509250506116a8565b888103670de0b6b3a764000081106127f8576127f1612720670de0b6b3a764000089612d41565b9050612810565b61280d612720670de0b6b3a76400008961188b565b90505b80891015612826576000809350935050506116a8565b90970398600198509650505050505050565b600080600080600061284b898789612fe6565b909250905061285a828961373f565b9750600061286982888a61186d565b9050612875818b61373f565b9a989950979650505050505050565b60008061289284600061306c565b61289d84600061306c565b6128a79190613975565b905060008113156128c3576128bc818661372c565b94506128e2565b60008112156128e2576128d581613aeb565b6128df908661373f565b94505b50929392505050565b60006100e58383670de0b6b3a76400005b600082600019048411830215820261291357600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612936610db2565b61294091906138f0565b905080831161295057600061295a565b61295a818461373f565b91506100e56126f3670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138f0565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6e9190613b4d565b935093509350935080612a8a5750600098975050505050505050565b868414612abb57612a9a84611990565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612aec57612acb836119ba565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b1a57612afc82611990565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612b5b5750670de0b6b3a76400006114a0565b82600003612b6b575060006114a0565b6000612b7683611819565b90506000612b8b612b8686611819565b613082565b9050818102612ba2670de0b6b3a764000082613b8e565b9050612bad816132a8565b9695505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612c1190859061343d565b50505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa158015612c7f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a091906137df565b600082600003612cb45750846100cc565b8115612d0757612ce5612cc7848761372c565b612cd1858761203f565b612cdb888a61203f565b6116d9919061372c565b90506000612cf38588611bca565b905080821015612d01578091505b506100cc565b828503612d16575060006100cc565b6100c9612d23848761373f565b612d2d85876128eb565b612d37888a61203f565b6116d9919061373f565b60006100e583670de0b6b3a7640000846128fc565b600060016001607f1b038211156118435760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612d9b906001600160801b031684612d41565b9050612dc77f00000000000000000000000000000000000000000000000000000000000000008261372c565b6002546001600160801b03161115611964576002547f000000000000000000000000000000000000000000000000000000000000000090612e129083906001600160801b031661373f565b6100e5919061373f565b612e246135fe565b600080612e30846116df565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e6b91906137d0565b6040805180830381865af4158015612e87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612eab9190613b07565b9350905082612ec0575060009150612f8a9050565b6000612ee261166a84610160015185610140015161203f90919063ffffffff16565b612f0261166a8561012001518661010001516128eb90919063ffffffff16565b612f0c9190613975565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000612f9e8585612b42565b612fb7612faf86611a07868b61203f565b85908561186d565b6100c9919061372c565b6000612fcd8585612b42565b612fb7612fde86611a07868b6128eb565b8590856128fc565b6000806130368561303085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613026818c612d41565b613030919061373f565b906128eb565b9150613062827f000000000000000000000000000000000000000000000000000000000000000061203f565b9050935093915050565b600081831361307b57816100e5565b5090919050565b60008082136130a45760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131279084901c611819565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136132c357506000919050565b680755bf798b4a1bf1e582126132ec576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612bad74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611819565b60006134526001600160a01b038416836134a5565b905080516000141580156134775750808060200190518101906134759190613bbc565b155b15611a5e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606100e58383600084600080856001600160a01b031684866040516134cb9190613bd9565b60006040518083038185875af1925050503d8060008114613508576040519150601f19603f3d011682016040523d82523d6000602084013e61350d565b606091505b5091509150612bad86838360608261352d5761352882613574565b6100e5565b815115801561354457506001600160a01b0384163b155b1561356d57604051639996b31560e01b81526001600160a01b038516600482015260240161349c565b50806100e5565b8051156135845780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061361261359d565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561196457600080fd5b600080600080600060a0868803121561367a57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156136ad57600080fd5b6136b988828901613650565b9150509295509295909350565b6000806000606084860312156136db57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561370057600080fd5b61370c86828701613650565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b808201808211156114a0576114a0613716565b818103818111156114a0576114a0613716565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016114a08284613752565b6000602082840312156137f157600080fd5b5051919050565b6001600160a01b0381168114610c8e57600080fd5b60006020828403121561381f57600080fd5b81356100e5816137f8565b8015158114610c8e57600080fd5b60006020828403121561384a57600080fd5b81356100e58161382a565b6000808335601e1984360301811261386c57600080fd5b83018035915067ffffffffffffffff82111561388757600080fd5b602001915036819003821315610dab57600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176114a0576114a0613716565b60008060006060848603121561391c57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561198957611989613716565b6001600160801b0381811683821601908082111561198957611989613716565b818103600083128015838313168383128216171561198957611989613716565b6000602082840312156139a757600080fd5b81516100e5816137f8565b80820182811260008312801582168215821617156139d2576139d2613716565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826139ff576139ff6139da565b500690565b6001600160801b0382811682821603908082111561198957611989613716565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156114a0576114a0613716565b60006102a082019050613a65828551613752565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613ada57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613b0057613b00613716565b5060000390565b60008060408385031215613b1a57600080fd5b825191506020830151613b2c8161382a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613b6357600080fd5b8451935060208501519250604085015191506060850151613b838161382a565b939692955090935050565b600082613b9d57613b9d6139da565b600160ff1b821460001984141615613bb757613bb7613716565b500590565b600060208284031215613bce57600080fd5b81516100e58161382a565b6000825160005b81811015613bfa5760208186018101518583015201613be0565b50600092019182525091905056fea2646970667358221220b37a936547898f632ec044d433d538651f03bd0fb016ba0bea38cf9aefcff0fa64736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
