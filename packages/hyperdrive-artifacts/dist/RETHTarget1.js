export const RETHTarget1 = {
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
            "name": "closeLong",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeShort",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
        }
    ],
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162004036380380620040368339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613bae620004885f395f50505f50505f610b8d01525f50505f8181610108015281816103730152612ca801525f81816113f2015281816117f00152818161185301528181612891015281816128cd01528181612ac50152612c8201525f818161074b01528181610e0401528181610e4b0152818161100a01528181611659015281816116a60152612c5c01525f611b9801525f8181611cb9015281816122fa015261237201525f818161090801528181610fa201528181611c8d015261234601525f8181610e9d01526122c001525f818161076c01528181610de201528181610e6c0152818161102b01528181611637015281816116c70152612cce01525f818161084601528181610f230152818161174e01528181612199015261324901525f818161061101528181610688015281816106fc015281816107c701526107ff01525f8181603b015281816119e1015281816125d401528181612623015261270b01525f5050613bae5ff3fe60806040526004361061002b575f3560e01c806329b23fc11461007f578063ded06231146100b0575f80fd5b3661007b57336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610079576040516312171d8360e31b815260040160405180910390fd5b005b5f80fd5b34801561008a575f80fd5b5061009e610099366004613632565b6100cf565b60405190815260200160405180910390f35b3480156100bb575f80fd5b5061009e6100ca366004613632565b6100e7565b5f6100dc858585856100f4565b90505b949350505050565b5f6100dc8585858561035f565b5f6100fd610593565b610106826105bb565b7f00000000000000000000000000000000000000000000000000000000000000008410156101475760405163211ddda360e11b815260040160405180910390fd5b5f6101506105f3565b9050854210156101755761016f61016561060a565b8260046001610635565b50610185565b610183868260046001610635565b505b61019a610193600288610c98565b3387610ccc565b5f805f805f806101ab8b888e610da2565b9550955095509550955095505f8c90508c421015610267578260095f8282546101d491906136a0565b909155506101ec90506101e561060a565b428461108a565b6101f98c888787856111c3565b5f6102038e61133a565b90506102216102118e611380565b61021b90836136b3565b826113ad565b61022a896113ec565b6102365761023661144b565b5f6102408a611464565b90508061026057604051638bdf918d60e01b815260040160405180910390fd5b505061027e565b6102718689611470565b955061027c88611464565b505b5f61028a878a8d61154c565b90508b8110156102ad5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e6102bd600288610c98565b6102ca60208301836136e6565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876103086040890160208a0161370e565b61031c8a6103168d8f6136a0565b906115e3565b8d61032a60408c018c613729565b60405161033e989796959493929190613794565b60405180910390a450939c505050505050505050505050506100df60015f55565b5f610368610593565b610371826105bb565b7f00000000000000000000000000000000000000000000000000000000000000008410156103b25760405163211ddda360e11b815260040160405180910390fd5b5f6103bb6105f3565b9050854210156103d6576103d061016561060a565b506103e6565b6103e4868260046001610635565b505b6103f4610193600188610c98565b5f805f805f806104058b888e6115f7565b9550955095509550955095505f8c90508c4210156104b4578260095f82825461042e91906136a0565b9091555061043f90506101e561060a565b61044c8c888787856117d9565b5f6104568261133a565b905061046e6104648e611380565b61021b90836137db565b610477896113ec565b6104835761048361144b565b5f61048d8a611464565b9050806104ad57604051638bdf918d60e01b815260040160405180910390fd5b50506104cb565b6104be8689611470565b95506104c988611464565b505b5f6104d7878a8d61154c565b90508b8110156104fa5760405163c972651760e01b815260040160405180910390fd5b8c898c610508600186610c98565b61051560208301836136e6565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876105536040890160208a0161370e565b8a61056160408b018b613729565b6040516105749796959493929190613802565b60405180910390a450919a50505050505050505050506100df60015f55565b60025f54036105b557604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6105c960208301836136e6565b6001600160a01b0316036105f05760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f610605670de0b6b3a76400006119c9565b905090565b5f610605427f0000000000000000000000000000000000000000000000000000000000000000611a53565b5f84815260086020526040812060018101546001600160801b031615158061065c57504286115b1561067557600101546001600160801b031690506100df565b5f805f61068061060a565b90505f6106ad7f00000000000000000000000000000000000000000000000000000000000000008b6136a0565b90505b81811015610721575f818152600860205260409020600101546001600160801b031680156106f9575f828152600860205260409020549094506001600160801b03169250610721565b507f0000000000000000000000000000000000000000000000000000000000000000016106b0565b835f0361079357889350610790610736611a68565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a88565b92505b5061079d83611a9e565b6001850180546001600160801b0319166001600160801b03929092169190911790556107f36107ec7f00000000000000000000000000000000000000000000000000000000000000008b613842565b8a8461108a565b6108318961082b6108247f0000000000000000000000000000000000000000000000000000000000000000836136a0565b4290611ac7565b8461108a565b61083a88611adb565b505f905060088161086b7f00000000000000000000000000000000000000000000000000000000000000008d613842565b815260208101919091526040015f908120600101546001600160801b0316915061089660028c610c98565b5f818152600b60205260408120549192508c8c83156109d757600192505f806108c286898d865f611c78565b915091508060095f8282546108d791906136a0565b909155506108f29050865f846108ec81611380565b886111c3565b6108fc81836136a0565b915061092c86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d45565b915061094061093b83856115e3565b611d8e565b600680546002906109619084906201000090046001600160701b0316613855565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061098e82611a9e565b600680546010906109b0908490600160801b90046001600160801b0316613875565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6109e3600184610c98565b5f818152600b60205260409020549091508015610aee57600194505f80610a0e838b8f886001611c78565b915091508060095f828254610a2391906136a0565b90915550610a3e9050835f84610a3881611380565b8a6117d9565b610a488183613842565b9150610a5761093b83876115e3565b60068054600290610a789084906201000090046001600160701b0316613855565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610aa582611a9e565b60068054601090610ac7908490600160801b90046001600160801b0316613875565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b2757610b19610b0087611380565b610b0983611380565b610b1391906136b3565b5f6113ad565b8e610b248482611db7565b50505b5f610b3184611fa6565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610be7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c0b9190613895565b90506001600160a01b03811615610c7f57610c7c5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906120e8565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610cc15760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610d0e57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d50908490613842565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610db2611a68565b90505f610dbe8a61216e565b6002549091508c908c90610e28908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121bd565b600254919d509a50909550610e90908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a88565b9550610ec6858c610ec1897f000000000000000000000000000000000000000000000000000000000000000061222c565b61225b565b15610ed357610ed361144b565b5f805f610ee285878b8761229c565b9c5091945092509050610ef58184613842565b610eff90896136a0565b9750610f0b82846136a0565b610f15908d6136a0565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610f4d9190613842565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f93575f8b8152600860205260409020600101546001600160801b0316610f95565b8b5b90508b610fc68e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d45565b9950610fd2878a613842565b9850670de0b6b3a764000061104f610fea87876136a0565b600254611008908f90600160801b90046001600160801b0316613842565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a88565b111561105d5761105d61144b565b61106c8a8a878a87875f6123ae565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110b55750505050565b5f848152600860205260408120546001600160801b03169081900361110d576110dd83611a9e565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561118a565b61115e611159670de0b6b3a76400006111268886613842565b61113091906138b0565b85670de0b6b3a7640000611144878a613842565b61114e91906138b0565b85929190600161244a565b611a9e565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61119384611a9e565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b031661120b611159826111ef670de0b6b3a7640000866138b0565b600554600160801b90046001600160801b031691908a5f61244a565b600580546001600160801b03928316600160801b02921691909117905561123186611a9e565b61123b90826138c7565b600480546001600160801b03928316600160801b02921691909117905561126184611a9e565b600280545f9061127b9084906001600160801b0316613875565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112a8836124f0565b600480545f906112bc908490600f0b6138e7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112ec85611a9e565b6002805460109061130e908490600160801b90046001600160801b03166138c7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f61135f600b5f61134c600286610c98565b81526020019081526020015f2054611380565b611370600b5f61134c600187610c98565b61137a91906136b3565b92915050565b5f6001600160ff1b038211156113a95760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c890611159906001600160801b0316848461252b565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6114177f00000000000000000000000000000000000000000000000000000000000000008361258d565b60035461142d91906001600160801b03166136a0565b600254611443906001600160801b0316846115e3565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61137a826004611db7565b5f805f61147c84611adb565b90925090505f61148c86866115e3565b9050818311156114a4576114a18683856125a1565b95505b828110156114b65780830392506114ba565b5f92505b6114c383611d8e565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151657869003611519565b505f5b61152281611a9e565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f8061155885856115e3565b9050611563816125bc565b9450845f03611575575f9150506115dc565b849150611588604084016020850161370e565b156115b7576115b08561159e60208601866136e6565b6115ab6040870187613729565b61260b565b91506115da565b6115da856115c860208601866136e6565b6115d56040870187613729565b6126fe565b505b9392505050565b5f6115dc8383670de0b6b3a76400006125a1565b5f805f805f805f80611607611a68565b90505f6116138a61216e565b6002549091508b908d9061167d908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612738565b600254919d509b509095505f90819081906116eb908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a88565b98506116f984878b8861229c565b9c50919450909250905061170d8284613842565b6117179089613842565b975061172381846136a0565b61172d908e613842565b9c506117398a8e6136a0565b9b50505050505050506117c38686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f6117789190613842565b815260208101919091526040015f20600101546001600160801b0316428e116117ba575f8e8152600860205260409020600101546001600160801b03166117bc565b8e5b60016123ae565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061181b57507f00000000000000000000000000000000000000000000000000000000000000006118198583613842565b105b156118285761182861144b565b6004549084900390600f0b61183d84826136b3565b90508361184986611380565b13801561187e57507f000000000000000000000000000000000000000000000000000000000000000061187c838361278b565b105b1561188b5761188b61144b565b600354600160801b90046001600160801b03166118cc611159826118b7670de0b6b3a7640000886138b0565b6005546001600160801b031691908c5f61244a565b600580546001600160801b0319166001600160801b03929092169190911790556118f68882613842565b905061190181611a9e565b600380546001600160801b03928316600160801b02921691909117905561192783611a9e565b600280546001600160801b0319166001600160801b0392909216919091179055611950826124f0565b600480546001600160801b0319166001600160801b039290921691909117905561197987611a9e565b6002805460109061199b908490600160801b90046001600160801b0316613875565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b604051638b32fa2360e01b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa158015611a2f573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061137a9190613914565b5f611a5e828461393f565b6115dc9084613842565b6002546004545f91610605916001600160801b0390911690600f0b61278b565b5f6100dc82611a988588886125a1565b906127b0565b5f6001600160801b038211156113a957604051630f0af95160e11b815260040160405180910390fd5b5f818311611ad557826115dc565b50919050565b6006545f908190611afd908490600160801b90046001600160801b03166115e3565b6006546201000090046001600160701b03169250905081811115611c73575f611b268383613842565b9050611b35611159828661281f565b60068054601090611b57908490600160801b90046001600160801b03166138c7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611b8f858361283390919063ffffffff16565b90505f611bbc827f00000000000000000000000000000000000000000000000000000000000000006115e3565b90508060095f828254611bcf91906136a0565b90915550611bdf90508183613842565b9150611bea82611a9e565b600280545f90611c049084906001600160801b0316613875565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3182612847565b600480545f90611c45908490600f0b6138e7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611c848785612833565b91505f611cb1837f00000000000000000000000000000000000000000000000000000000000000006115e3565b9050611cdd817f00000000000000000000000000000000000000000000000000000000000000006115e3565b91508315611d0057611cef8282613842565b611cf99084613842565b9250611d17565b611d0a8282613842565b611d1490846136a0565b92505b86861015611d3a57611d2a8387896125a1565b9250611d378287896125a1565b91505b509550959350505050565b5f80611d5c84611d568a888a6125a1565b90612833565b9050611d698884866125a1565b611d7390826136a0565b905086811115611d835786810391505b509695505050505050565b5f6001600160701b038211156113a95760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e01916001600160801b031690613842565b9050805f03611e1457600191505061137a565b5f611e1e85612870565b9050805f03611e325760019250505061137a565b5f80611e3f83858961290b565b9150915080611e54575f94505050505061137a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e8f9291906139d0565b6040805180830381865af4158015611ea9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ecd9190613a45565b91509150611eeb611edd82611380565b611ee690613a67565b612a7f565b925082611f00575f965050505050505061137a565b611f0982611a9e565b600780545f90611f239084906001600160801b0316613875565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f5081611a9e565b60078054601090611f72908490600160801b90046001600160801b0316613875565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fcd87612c13565b6040518263ffffffff1660e01b8152600401611fe99190613a81565b6040805180830381865af4158015612003573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120279190613a90565b915091508061203c57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916120a1916136a0565b6120ab9190613842565b9050805f036120c157505f958695509350505050565b5f8087116120cf575f6120da565b6120da8488846125a1565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561210b5761210b613abe565b6040519080825280601f01601f191660200182016040528015612135576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612155578692505b828152825f602083013e90999098509650505050505050565b5f8061217861060a565b9050808311612187575f612191565b6121918184613842565b91506115dc827f0000000000000000000000000000000000000000000000000000000000000000612833565b5f80806121dd6121d588670de0b6b3a7640000613842565b899087612d4d565b9050861561221f576121ef888861258d565b91506122108a8a846122098a670de0b6b3a7640000613842565b8989612d70565b925061221c83826136a0565b90505b9750975097945050505050565b5f61224961224284670de0b6b3a7640000613842565b839061258d565b6115dc90670de0b6b3a7640000613842565b5f8061229185612269611a68565b61227391906136a0565b600254611008908790600160801b90046001600160801b0316613842565b909210949350505050565b5f8080806122f287866122eb8b6122e56122be8c670de0b6b3a7640000613842565b7f00000000000000000000000000000000000000000000000000000000000000009061258d565b9061258d565b9190612d4d565b935061231e847f00000000000000000000000000000000000000000000000000000000000000006115e3565b91505f61233e61233689670de0b6b3a7640000613842565b8a9088612d4d565b905061236a817f000000000000000000000000000000000000000000000000000000000000000061258d565b9350612396847f00000000000000000000000000000000000000000000000000000000000000006115e3565b6123a090846136a0565b915050945094509450949050565b5f805f805f808888101561241a5786156123d0576123cd8d898b6125a1565b9c505b6123db8c898b6125a1565b9b506123e68b611380565b6123ef8d611380565b6123f991906136b3565b90506124068b898b6125a1565b9a506124138a898b6125a1565b9950612439565b6124238b611380565b61242c8d611380565b61243691906136b3565b90505b9b9c9a9b999a975050505050505050565b5f825f036124595750846124e7565b81156124ab5761248a61246c84876136a0565b61247685876115e3565b612480888a6115e3565b611d5691906136a0565b90505f6124978588611ac7565b9050808210156124a5578091505b506124e7565b8285036124b957505f6124e7565b6124e46124c68487613842565b6124d0858761258d565b6124da888a6115e3565b611d569190613842565b90505b95945050505050565b5f60016001607f1b031982128061250d575060016001607f1b0382135b156113a95760405163a5353be560e01b815260040160405180910390fd5b5f80612537845f612d92565b612541845f612d92565b61254b91906136b3565b90505f8113156125665761255f81866136a0565b9450612584565b5f8112156125845761257781613a67565b6125819086613842565b94505b50929392505050565b5f6115dc8383670de0b6b3a7640000612d4d565b5f825f1904841183021582026125b5575f80fd5b5091020490565b6040516321a3781f60e11b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401611a14565b604051630852cd8d60e31b8152600481018590525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c68906024015f604051808303815f87803b15801561266c575f80fd5b505af115801561267e573d5f803e3d5ffd5b505050504790505f846001600160a01b0316826040515f6040518083038185875af1925050503d805f81146126ce576040519150601f19603f3d011682016040523d82523d5f602084013e6126d3565b606091505b50509050806126f5576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6127326001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612da7565b50505050565b5f808061275861275088670de0b6b3a7640000613842565b8990876125a1565b9050861561221f5761276a88886115e3565b91506122108a8a846127848a670de0b6b3a7640000613842565b8989612dfe565b5f806127978484612e0e565b9092509050806127a9576127a961144b565b5092915050565b5f815f036127c75750670de0b6b3a764000061137a565b825f036127d557505f61137a565b5f6127df83611380565b90505f6127f36127ee86611380565b612e49565b905081810261280a670de0b6b3a764000082613ad2565b90506128158161306e565b9695505050505050565b5f6115dc83670de0b6b3a764000084612d4d565b5f6115dc83670de0b6b3a7640000846125a1565b5f60016001607f1b038211156113a95760405163a5353be560e01b815260040160405180910390fd5b6003545f90819061288a906001600160801b03168461281f565b90506128b67f0000000000000000000000000000000000000000000000000000000000000000826136a0565b6002546001600160801b03161115611ad5576002547f0000000000000000000000000000000000000000000000000000000000000000906129019083906001600160801b0316613842565b6115dc9190613842565b612913613593565b5f8061291e84612c13565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129589190613a81565b6040805180830381865af4158015612972573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129969190613a90565b93509050826129aa57505f9150612a779050565b5f6129d06129cb8461016001518561014001516115e390919063ffffffff16565b611380565b6129f06129cb85610120015186610100015161258d90919063ffffffff16565b6129fa91906136b3565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b35573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b599190613afe565b935093509350935080612b7457505f98975050505050505050565b868414612ba557612b8484611a9e565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bd657612bb5836124f0565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c0457612be682611a9e565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c1b6135dd565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d139116613200565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d4592900416613200565b905292915050565b5f825f190484118302158202612d61575f80fd5b50910281810615159190040190565b5f80612d80888888888888613274565b909250905080611d8357611d8361144b565b5f818313612da057816115dc565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612df9908490613350565b505050565b5f80612d808888888888886133b6565b5f805f83612e1b86611380565b612e2591906136b3565b90505f811215612e3b575f809250925050612e42565b9150600190505b9250929050565b5f808213612e6a5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612eed9084901c611380565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361308757505f919050565b680755bf798b4a1bf1e582126130b0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061281574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611380565b5f80670de0b6b3a764000061321361060a565b61321d91906138b0565b905080831161322c575f613236565b6132368184613842565b91506115dc61326d670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138b0565b8390612833565b5f805f6132848989888888613472565b90508688101561329a575f809250925050613345565b96869003966132a988876127b0565b9750878110156132bf575f809250925050613345565b8781036132cd818688612d4d565b9050670de0b6b3a76400008110613301576132fa6132f3670de0b6b3a76400008961281f565b82906127b0565b9050613319565b6133166132f3670de0b6b3a764000089612833565b90505b613323818661281f565b90508981101561333a575f80935093505050613345565b899003925060019150505b965096945050505050565b5f6133646001600160a01b038416836134a0565b905080515f141580156133885750808060200190518101906133869190613b31565b155b15612df957604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f6133c68989888888613472565b90506133d686611a98898b6136a0565b9750878110156133ec575f809250925050613345565b8781036133fa818688612d4d565b9050670de0b6b3a76400008110613427576134206132f3670de0b6b3a76400008961281f565b905061343f565b61343c6132f3670de0b6b3a764000089612833565b90505b613449818661281f565b9050808a1015613460575f80935093505050613345565b90980398600198509650505050505050565b5f61347d85856127b0565b61349661348e86611a98868b61258d565b859085612d4d565b6124e491906136a0565b60606115dc83835f845f80856001600160a01b031684866040516134c49190613b4c565b5f6040518083038185875af1925050503d805f81146134fe576040519150601f19603f3d011682016040523d82523d5f602084013e613503565b606091505b50915091506128158683836060826135235761351e8261356a565b6115dc565b815115801561353a57506001600160a01b0384163b155b1561356357604051639996b31560e01b81526001600160a01b03851660048201526024016133ad565b50806115dc565b80511561357a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135a76135dd565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613645575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613670575f80fd5b850160608188031215613681575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561137a5761137a61368c565b8181035f8312801583831316838312821617156127a9576127a961368c565b6001600160a01b03811681146105f0575f80fd5b5f602082840312156136f6575f80fd5b81356115dc816136d2565b80151581146105f0575f80fd5b5f6020828403121561371e575f80fd5b81356115dc81613701565b5f808335601e1984360301811261373e575f80fd5b83018035915067ffffffffffffffff821115613758575f80fd5b602001915036819003821315612e42575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6137cd60e08301848661376c565b9a9950505050505050505050565b8082018281125f8312801582168215821617156137fa576137fa61368c565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61383560c08301848661376c565b9998505050505050505050565b8181038181111561137a5761137a61368c565b6001600160701b038181168382160190808211156127a9576127a961368c565b6001600160801b038181168382160190808211156127a9576127a961368c565b5f602082840312156138a5575f80fd5b81516115dc816136d2565b808202811582820484141761137a5761137a61368c565b6001600160801b038281168282160390808211156127a9576127a961368c565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561137a5761137a61368c565b5f60208284031215613924575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f8261394d5761394d61392b565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506139e3828551613952565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613a56575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613a7b57613a7b61368c565b505f0390565b610180810161137a8284613952565b5f8060408385031215613aa1575f80fd5b825191506020830151613ab381613701565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613ae057613ae061392b565b600160ff1b82145f1984141615613af957613af961368c565b500590565b5f805f8060808587031215613b11575f80fd5b845193506020850151925060408501519150606085015161368181613701565b5f60208284031215613b41575f80fd5b81516115dc81613701565b5f82515f5b81811015613b6b5760208186018101518583015201613b51565b505f92019182525091905056fea264697066735822122053c59466b50b176de5e5f7cb37544af90bf60514632bb631cdff5f5ece78c39464736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
