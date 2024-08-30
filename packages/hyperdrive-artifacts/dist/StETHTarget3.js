export const StETHTarget3 = {
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004002380380620040028339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613b3d620004c56000396000505060005050600081816112c801526119e30152600081816102fb0152818161032a015261035701526000818160d6015281816105a101526116ef01526000818161084601528181610931015281816109c401528181610acd015281816115c0015281816116c9015281816121a70152818161220a01528181612ae901528181612e540152612e90015260008181610137015281816108b601528181610e7601528181611484015281816114e80152818161152f01526116a301526000611dac015260008181611f0701526130e901526000818161103a0152611edb0152600061309f0152600081816101790152818161090901528181610e9701528181611454015281816114b801528181611550015261171501526000818161015801528181610230015281816102d0015281816106eb015281816108e301528181610f720152612a7f01526000818161028f01528181610d3501528181610db001528181610e2601528181610ef20152610f2a0152600081816119b301528181611afa0152612ce2015260005050613b3d6000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c3660046135ad565b610066565b60405190815260200160405180910390f35b610041610061366004613611565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e8484846107f8565b90505b9392505050565b60006100a2610ba9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d482610bd3565b7f00000000000000000000000000000000000000000000000000000000000000008610156101155760405163211ddda360e11b815260040160405180910390fd5b600061019d610122610c0c565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ac57508381115b156101ca57604051633b61151160e11b815260040160405180910390fd5b6000806101d78986610c58565b9150915060006101e5610d2d565b90506101f5818360046001610d59565b50600254600454600354600092839261025f926001600160801b0380841693600f9390930b92600160801b900481169189911661025a6102557f00000000000000000000000000000000000000000000000000000000000000008b613677565b6113d7565b611421565b915091508061028157604051630552b01360e31b815260040160405180910390fd5b8b60006102f46008826102b47f00000000000000000000000000000000000000000000000000000000000000008961368a565b81526020810191909152604001600020546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061162e565b90506103207f000000000000000000000000000000000000000000000000000000000000000082613677565b88118061037f57507f00000000000000000000000000000000000000000000000000000000000000008111801561037f575061037c7f00000000000000000000000000000000000000000000000000000000000000008261368a565b88105b1561039d57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e9916001600160801b039091169061368a565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765491925090610424908390613677565b905060008060006104348a61165a565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061046e90849060040161371b565b602060405180830381865af415801561048b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104af919061372a565b91506104c26104bd8c611794565b6117c2565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916105239185910161371b565b602060405180830381865af4158015610540573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610564919061372a565b9250818310156105875760405163184d952160e11b815260040160405180910390fd5b61059d8483610596818761368a565b91906117e8565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e05760405163211ddda360e11b815260040160405180910390fd5b508f6105ec868e611806565b101561060b5760405163c972651760e01b815260040160405180910390fd5b61062960008e60000160208101906106239190613758565b8e61181b565b610632896118c3565b95508561065257604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c90506000610715600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b031661025a7f00000000000000000000000000000000000000000000000000000000000000008c6102559190613677565b9b5090508a158061072f575061072c8c60006118d0565b81125b1561074d57604051630552b01360e31b815260040160405180910390fd5b600088156107655761076087848b6117e8565b610768565b60005b90506107776020850185613758565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107b460408a0160208b01613783565b866107c260408c018c6137a0565b6040516107d597969594939291906137e7565b60405180910390a250505050505050505050505050505050506100786001600055565b6000610802610ba9565b61080b82610bd3565b60065460ff161561082f57604051637983c05160e01b815260040160405180910390fd5b60008061083c8685610c58565b909250905061086c7f0000000000000000000000000000000000000000000000000000000000000000600261383b565b82101561088c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610998573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bc9190613852565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109ed84846118e5565b1015610a0c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a1e85858589600080611421565b91509150801580610a2f5750600082125b15610a4d57604051630552b01360e31b815260040160405180910390fd5b610a568561190b565b600280546001600160801b0319166001600160801b0392909216919091179055610a7f84611935565b600480546001600160801b0319166001600160801b0392909216919091179055610aa88361190b565b600280546001600160801b03928316600160801b029216919091179055610af16000807f000000000000000000000000000000000000000000000000000000000000000061181b565b610b096000610b0360208c018c613758565b8a61181b565b610b1e610b14610d2d565b8760046001610d59565b508a8a8a610b2f6020820182613758565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b6c6040870160208801613783565b87610b7a60408901896137a0565b604051610b8d97969594939291906137e7565b60405180910390a2505050505050505050506100916001600055565b600260005403610bcc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610be26020830183613758565b6001600160a01b031603610c095760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c2d916001600160801b0390911690600f0b6118e5565b905090565b600080610c4187878786611971565b9050610c4d818561162e565b979650505050505050565b81600080610c6c6040850160208601613783565b15610c9157610c8785610c8260408701876137a0565b611988565b9093509050610ca9565b5034610ca985610ca460408701876137a0565b611ad8565b610cb1611b75565b91508015610d2457604051600090339083908381818185875af1925050503d8060008114610cfb576040519150601f19603f3d011682016040523d82523d6000602084013e610d00565b606091505b5050905080610d22576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c2d427f0000000000000000000000000000000000000000000000000000000000000000611b88565b600084815260086020526040812060018101546001600160801b0316151580610d8157504286115b15610d9a57600101546001600160801b031690506113cf565b6000806000610da7610d2d565b90506000610dd57f00000000000000000000000000000000000000000000000000000000000000008b613677565b90505b81811015610e4b576000818152600860205260409020600101546001600160801b03168015610e23576000828152600860205260409020549094506001600160801b03169250610e4b565b507f000000000000000000000000000000000000000000000000000000000000000001610dd8565b83600003610ebe57889350610ebb610e61610c0c565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611971565b92505b50610ec88361190b565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f1e610f177f00000000000000000000000000000000000000000000000000000000000000008b61368a565b8a84611b9e565b610f5c89610f56610f4f7f000000000000000000000000000000000000000000000000000000000000000083613677565b4290611cdc565b84611b9e565b610f6588611ceb565b5060009050600881610f977f00000000000000000000000000000000000000000000000000000000000000008d61368a565b815260208101919091526040016000908120600101546001600160801b03169150610fc360028c611e8f565b6000818152600b60205260408120549192508c8c83156111095760019250600080610ff286898d866000611ec4565b9150915080600960008282546110089190613677565b9091555061102490508660008461101e81611794565b88611f93565b61102e8183613677565b915061105e86838a8e877f000000000000000000000000000000000000000000000000000000000000000061210d565b915061107261106d8385612151565b612166565b600680546002906110939084906201000090046001600160701b0316613880565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110c08261190b565b600680546010906110e2908490600160801b90046001600160801b03166138a0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611116600184611e8f565b6000818152600b602052604090205490915080156112255760019450600080611143838b8f886001611ec4565b9150915080600960008282546111599190613677565b9091555061117590508360008461116f81611794565b8a612190565b61117f818361368a565b915061118e61106d8387612151565b600680546002906111af9084906201000090046001600160701b0316613880565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111dc8261190b565b600680546010906111fe908490600160801b90046001600160801b03166138a0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561125f5761125161123787611794565b61124083611794565b61124a91906138c0565b6000612381565b8e61125c84826123c0565b50505b600061126a846125ba565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611324573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134891906138e0565b90506001600160a01b038116156113bd576113ba5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612706565b50505b509b9d50505050505050505050505050505b949350505050565b60006113ff600b60006113eb600286611e8f565b815260200190815260200160002054611794565b611411600b60006113eb600187611e8f565b61141b91906138c0565b92915050565b6000806000806114318a8a612793565b915091508061144857600080935093505050611623565b60006114a8838a6114817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061368a565b8b7f00000000000000000000000000000000000000000000000000000000000000006127cf565b509050600061150c848b846114e57f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061368a565b8d7f000000000000000000000000000000000000000000000000000000000000000061288c565b50905081158061151a575080155b15611526575060009050805b6000611574858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611971565b905061158283838c8461294a565b5090935060009050611594848f613677565b905060006115b58b8b6115a687611794565b6115b0908e6138fd565b612996565b90508b6115ea6115e57f0000000000000000000000000000000000000000000000000000000000000000836129fd565b611794565b6115f383611794565b6116006115e58685612151565b61160a91906138c0565b61161491906138c0565b60019950995050505050505050505b965096945050505050565b600061009161164284846301e13380612a0e565b61165485670de0b6b3a764000061368a565b90611806565b6116626134e8565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161175a9116612a34565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261178c92900416612a34565b905292915050565b60006001600160ff1b038211156117be5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117cb81612aa3565b610c0957604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117ff57600080fd5b5091020490565b600061009183670de0b6b3a7640000846117e8565b6000838152600a602090815260408083206001600160a01b03861684529091528120805483929061184d908490613677565b90915550506000838152600b602052604081208054839290611870908490613677565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061141b8260046123c0565b60008183136118df5782610091565b50919050565b6000806118f28484612793565b90925090508061190457611904612c3b565b5092915050565b60006001600160801b038211156117be57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611953575060016001607f1b0382135b156117be5760405163a5353be560e01b815260040160405180910390fd5b6000610078826119828588886117e8565b90612c54565b600080843410156119ac576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a1903eab867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6391906138e0565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af1158015611aa8573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611acd919061372a565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015611b4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6f919061372a565b50505050565b6000610c2d670de0b6b3a7640000612cc9565b6000611b94828461393b565b610091908461368a565b600083815260086020526040902054600160801b90046001600160801b0316808303611bca5750505050565b6000848152600860205260408120546001600160801b031690819003611c2457611bf38361190b565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611ca2565b611c75611c70670de0b6b3a7640000611c3d888661368a565b611c47919061383b565b85670de0b6b3a7640000611c5b878a61368a565b611c65919061383b565b859291906001612d55565b61190b565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611cab8461190b565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118df5782610091565b6006546000908190611d0e908490600160801b90046001600160801b0316612151565b6006546201000090046001600160701b03169250905081811115611e8a576000611d38838361368a565b9050611d47611c708286612df3565b60068054601090611d69908490600160801b90046001600160801b031661394f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611da2858361180690919063ffffffff16565b90506000611dd0827f0000000000000000000000000000000000000000000000000000000000000000612151565b90508060096000828254611de49190613677565b90915550611df49050818361368a565b9150611dff8261190b565b60028054600090611e1a9084906001600160801b03166138a0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e4782612e08565b60048054600090611e5c908490600f0b61396f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611eb95760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611ed18785611806565b91506000611eff837f0000000000000000000000000000000000000000000000000000000000000000612151565b9050611f2b817f0000000000000000000000000000000000000000000000000000000000000000612151565b91508315611f4e57611f3d828261368a565b611f47908461368a565b9250611f65565b611f58828261368a565b611f629084613677565b92505b86861015611f8857611f788387896117e8565b9250611f858287896117e8565b91505b509550959350505050565b600454600160801b90046001600160801b0316611fdc611c7082611fbf670de0b6b3a76400008661383b565b600554600160801b90046001600160801b031691908a6000612d55565b600580546001600160801b03928316600160801b0292169190911790556120028661190b565b61200c908261394f565b600480546001600160801b03928316600160801b0292169190911790556120328461190b565b6002805460009061204d9084906001600160801b03166138a0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061207a83611935565b6004805460009061208f908490600f0b61396f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506120bf8561190b565b600280546010906120e1908490600160801b90046001600160801b031661394f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061211f846116548a888a6117e8565b905061212c8884866117e8565b6121369082613677565b9050868111156121465786810391505b509695505050505050565b60006100918383670de0b6b3a76400006117e8565b60006001600160701b038211156117be5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806121d257507f00000000000000000000000000000000000000000000000000000000000000006121d0858361368a565b105b156121df576121df612c3b565b6004549084900390600f0b6121f484826138c0565b90508361220086611794565b13801561223557507f000000000000000000000000000000000000000000000000000000000000000061223383836118e5565b105b1561224257612242612c3b565b600354600160801b90046001600160801b0316612284611c708261226e670de0b6b3a76400008861383b565b6005546001600160801b031691908c6000612d55565b600580546001600160801b0319166001600160801b03929092169190911790556122ae888261368a565b90506122b98161190b565b600380546001600160801b03928316600160801b0292169190911790556122df8361190b565b600280546001600160801b0319166001600160801b039290921691909117905561230882611935565b600480546001600160801b0319166001600160801b03929092169190911790556123318761190b565b60028054601090612353908490600160801b90046001600160801b03166138a0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461239c90611c70906001600160801b03168484612996565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161240b916001600160801b03169061368a565b90508060000361241f57600191505061141b565b600061242a85612e32565b90508060000361243f5760019250505061141b565b60008061244d838589612ece565b915091508061246357600094505050505061141b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161249f92919061399c565b6040805180830381865af41580156124bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124df9190613a12565b915091506124fd6124ef82611794565b6124f890613a36565b612aa3565b925082612513576000965050505050505061141b565b61251c8261190b565b600780546000906125379084906001600160801b03166138a0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506125648161190b565b60078054601090612586908490600160801b90046001600160801b03166138a0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6125e38761165a565b6040518263ffffffff1660e01b81526004016125ff919061371b565b6040805180830381865af415801561261b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061263f9190613a52565b9150915080612655575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916126bb91613677565b6126c5919061368a565b9050806000036126dd57506000958695509350505050565b60008087116126ed5760006126f8565b6126f88488846117e8565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561272c5761272c613a82565b6040519080825280601f01601f191660200182016040528015612756576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612777578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836127a286611794565b6127ac91906138c0565b905060008112156127c4576000809250925050610d26565b946001945092505050565b60008060006127e1888888888861303d565b9050600061280c670de0b6b3a76400006127fb8888612df3565b6128059190613677565b8390611806565b9050670de0b6b3a7640000811061284057612839612832670de0b6b3a764000089611806565b8290612c54565b9050612858565b612855612832670de0b6b3a764000089612df3565b90505b6128628186611806565b90508881101561287a57600080935093505050612789565b97909703976001975095505050505050565b600080600061289e898988888861306c565b90506128b8866119826128b18a8d613677565b8790612151565b98506128c5858a866117e8565b9850888110156128dc576000809250925050611623565b888103670de0b6b3a7640000811061290a57612903612832670de0b6b3a764000089612df3565b9050612922565b61291f612832670de0b6b3a764000089611806565b90505b8089101561293857600080935093505050611623565b90970398600198509650505050505050565b600080600080600061295d898789613091565b909250905061296c828961368a565b9750600061297b82888a6117e8565b9050612987818b61368a565b9a989950979650505050505050565b6000806129a4846000613117565b6129af846000613117565b6129b991906138c0565b905060008113156129d5576129ce8186613677565b94506129f4565b60008112156129f4576129e781613a36565b6129f1908661368a565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612a2557600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612a48610d2d565b612a52919061383b565b9050808311612a62576000612a6c565b612a6c818461368a565b9150610091612805670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061383b565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b809190613a98565b935093509350935080612b9c5750600098975050505050505050565b868414612bcd57612bac8461190b565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bfe57612bdd83611935565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c2c57612c0e8261190b565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612c6d5750670de0b6b3a764000061141b565b82600003612c7d5750600061141b565b6000612c8883611794565b90506000612c9d612c9886611794565b61312d565b9050818102612cb4670de0b6b3a764000082613ad9565b9050612cbf81613353565b9695505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015612d31573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141b919061372a565b600082600003612d66575084610078565b8115612db957612d97612d798487613677565b612d838587612151565b612d8d888a612151565b6116549190613677565b90506000612da58588611cdc565b905080821015612db3578091505b50610078565b828503612dc857506000610078565b610075612dd5848761368a565b612ddf85876129fd565b612de9888a612151565b611654919061368a565b600061009183670de0b6b3a764000084612a0e565b600060016001607f1b038211156117be5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612e4d906001600160801b031684612df3565b9050612e797f000000000000000000000000000000000000000000000000000000000000000082613677565b6002546001600160801b031611156118df576002547f000000000000000000000000000000000000000000000000000000000000000090612ec49083906001600160801b031661368a565b610091919061368a565b612ed6613549565b600080612ee28461165a565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612f1d919061371b565b6040805180830381865af4158015612f39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f5d9190613a52565b9350905082612f72575060009150611ad09050565b6000612f946115e584610160015185610140015161215190919063ffffffff16565b612fb46115e58561012001518661010001516129fd90919063ffffffff16565b612fbe91906138c0565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006130498585612c54565b61306261305a86611982868b612151565b8590856117e8565b6100759190613677565b60006130788585612c54565b61306261308986611982868b6129fd565b859085612a0e565b6000806130e1856130db85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006130d1818c612df3565b6130db919061368a565b906129fd565b915061310d827f0000000000000000000000000000000000000000000000000000000000000000612151565b9050935093915050565b60008183136131265781610091565b5090919050565b600080821361314f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131d29084901c611794565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361336e57506000919050565b680755bf798b4a1bf1e58212613397576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612cbf74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611794565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061355d6134e8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156118df57600080fd5b600080600080600060a086880312156135c557600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156135f857600080fd5b6136048882890161359b565b9150509295509295909350565b60008060006060848603121561362657600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561364b57600080fd5b6136578682870161359b565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561141b5761141b613661565b8181038181111561141b5761141b613661565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161141b828461369d565b60006020828403121561373c57600080fd5b5051919050565b6001600160a01b0381168114610c0957600080fd5b60006020828403121561376a57600080fd5b813561009181613743565b8015158114610c0957600080fd5b60006020828403121561379557600080fd5b813561009181613775565b6000808335601e198436030181126137b757600080fd5b83018035915067ffffffffffffffff8211156137d257600080fd5b602001915036819003821315610d2657600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761141b5761141b613661565b60008060006060848603121561386757600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561190457611904613661565b6001600160801b0381811683821601908082111561190457611904613661565b818103600083128015838313168383128216171561190457611904613661565b6000602082840312156138f257600080fd5b815161009181613743565b808201828112600083128015821682158216171561391d5761391d613661565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261394a5761394a613925565b500690565b6001600160801b0382811682821603908082111561190457611904613661565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561141b5761141b613661565b60006102a0820190506139b082855161369d565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a2557600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a4b57613a4b613661565b5060000390565b60008060408385031215613a6557600080fd5b825191506020830151613a7781613775565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613aae57600080fd5b8451935060208501519250604085015191506060850151613ace81613775565b939692955090935050565b600082613ae857613ae8613925565b600160ff1b821460001984141615613b0257613b02613661565b50059056fea26469706673582212202a900c70c255181ede1e63b4945220cb95e174833a32d8b348d92a70bdd95d1b64736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
