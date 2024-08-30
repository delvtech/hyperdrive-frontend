export const ERC4626Target1 = {
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
    bytecode: '0x6102806040523480156200001257600080fd5b50604051620040df380380620040df8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c406200049f60003960005050600050506000610b650152600050506000818160af015281816103250152612ca50152600081816113eb015281816117fc0152818161185f01528181612883015281816128bf01528181612abe0152612c7f01526000818161071301528181610de801528181610e2f01528181610ff401528181611661015281816116af0152612c5901526000611b50015260008181611c76015281816122d901526123520152600081816108d701528181610f8c01528181611c4a0152612326015260008181610e81015261229f01526000818161073401528181610dc601528181610e50015281816110150152818161163f015281816116d00152612ccb01526000818161080f01528181610f0b015281816117580152818161217401526132860152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600081816119dd015281816125b4015281816126080152612684015260005050613c406000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613694565b610073565b60405190815260200160405180910390f35b61004e61006e366004613694565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610c73565b3387610ca8565b6000806000806000806101568b888e610d81565b95509550955095509550955060008c90508c4210156102165782600960008282546101819190613709565b9091555061019990506101926105ca565b4284611075565b6101a68c888787856111b3565b60006101b18e61132d565b90506101cf6101bf8e611377565b6101c9908361371c565b826113a5565b6101d8896113e4565b6101e4576101e4611444565b60006101ef8a61145d565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b610220868961146a565b955061022b8861145d565b505b600061023a878a8d61154b565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610c73565b61027a6020830183613751565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161377c565b6102cc8a6102c68d8f613709565b906115e5565b8d6102da60408c018c613799565b6040516102ee989796959493929190613809565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610c73565b6000806000806000806103bb8b888e6115fa565b95509550955095509550955060008c90508c42101561046e5782600960008282546103e69190613709565b909155506103f790506101926105ca565b6104048c888787856117e5565b600061040f8261132d565b905061042761041d8e611377565b6101c99083613851565b610430896113e4565b61043c5761043c611444565b60006104478a61145d565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b610478868961146a565b95506104838861145d565b505b6000610492878a8d61154b565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610c73565b6104d06020830183613751565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161377c565b8a61051c60408b018b613799565b60405161052f9796959493929190613879565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105886020830183613751565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119d6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a02565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613709565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a18565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b92505b5061076583611a50565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b6138ba565b8a84611075565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613709565b4290611a7a565b84611075565b61080288611a8f565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d6138ba565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610c73565b6000818152600b60205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c33565b9150915080600960008282546108a59190613709565b909155506108c19050866000846108bb81611377565b886111b3565b6108cb8183613709565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d02565b915061090f61090a83856115e5565b611d4c565b600680546002906109309084906201000090046001600160701b03166138cd565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611a50565b6006805460109061097f908490600160801b90046001600160801b03166138ed565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610c73565b6000818152600b60205260409020549091508015610ac257600194506000806109e0838b8f886001611c33565b9150915080600960008282546109f69190613709565b90915550610a12905083600084610a0c81611377565b8a6117e5565b610a1c81836138ba565b9150610a2b61090a83876115e5565b60068054600290610a4c9084906201000090046001600160701b03166138cd565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611a50565b60068054601090610a9b908490600160801b90046001600160801b03166138ed565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad487611377565b610add83611377565b610ae7919061371c565b60006113a5565b8e610af98482611d76565b50505b6000610b0784611f70565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be5919061390d565b90506001600160a01b03811615610c5a57610c575a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906120bc565b50505b509b9d5050505050505050505050505050949350505050565b60006001600160f81b03821115610c9d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ceb57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d2e9084906138ba565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d95611a18565b90506000610da28a612147565b6002549091508c908c90610e0c908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612198565b600254919d509a50909550610e74908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b9550610eaa858c610ea5897f0000000000000000000000000000000000000000000000000000000000000000612208565b612238565b15610eb757610eb7611444565b6000806000610ec885878b8761227a565b9c5091945092509050610edb81846138ba565b610ee59089613709565b9750610ef18284613709565b610efb908d613709565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f3591906138ba565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f7d5760008b8152600860205260409020600101546001600160801b0316610f7f565b8b5b90508b610fb08e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d02565b9950610fbc878a6138ba565b9850670de0b6b3a7640000611039610fd48787613709565b600254610ff2908f90600160801b90046001600160801b03166138ba565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b111561104757611047611444565b6110578a8a878a8787600061238e565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b6000848152600860205260408120546001600160801b0316908190036110fb576110ca83611a50565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611179565b61114c611147670de0b6b3a764000061111488866138ba565b61111e919061392a565b85670de0b6b3a7640000611132878a6138ba565b61113c919061392a565b85929190600161242d565b611a50565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61118284611a50565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111fc611147826111df670de0b6b3a76400008661392a565b600554600160801b90046001600160801b031691908a600061242d565b600580546001600160801b03928316600160801b02921691909117905561122286611a50565b61122c9082613941565b600480546001600160801b03928316600160801b02921691909117905561125284611a50565b6002805460009061126d9084906001600160801b03166138ed565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129a836124d7565b600480546000906112af908490600f0b613961565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112df85611a50565b60028054601090611301908490600160801b90046001600160801b0316613941565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611355600b6000611341600286610c73565b815260200190815260200160002054611377565b611367600b6000611341600187610c73565b611371919061371c565b92915050565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c090611147906001600160801b03168484612513565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006114107f00000000000000000000000000000000000000000000000000000000000000008361257a565b60035461142691906001600160801b0316613709565b60025461143c906001600160801b0316846115e5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611371826004611d76565b600080600061147884611a8f565b9092509050600061148986866115e5565b9050818311156114a15761149e86838561258f565b95505b828110156114b35780830392506114b8565b600092505b6114c183611d4c565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151457869003611518565b5060005b61152181611a50565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061155885856115e5565b9050611563816125ad565b9450846000036115775760009150506115de565b84915061158a604084016020850161377c565b156115b9576115b2856115a06020860186613751565b6115ad6040870187613799565b6125d9565b91506115dc565b6115dc856115ca6020860186613751565b6115d76040870187613799565b612677565b505b9392505050565b60006115de8383670de0b6b3a764000061258f565b60008060008060008060008061160e611a18565b9050600061161b8a612147565b6002549091508b908d90611685908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f00000000000000000000000000000000000000000000000000000000000000006126b1565b600254919d509b50909550600090819081906116f4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a39565b985061170284878b8861227a565b9c50919450909250905061171682846138ba565b61172090896138ba565b975061172c8184613709565b611736908e6138ba565b9c506117428a8e613709565b9b50505050505050506117cf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f61178291906138ba565b81526020810191909152604001600020600101546001600160801b0316428e116117c65760008e8152600860205260409020600101546001600160801b03166117c8565b8e5b600161238e565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061182757507f000000000000000000000000000000000000000000000000000000000000000061182585836138ba565b105b1561183457611834611444565b6004549084900390600f0b611849848261371c565b90508361185586611377565b13801561188a57507f00000000000000000000000000000000000000000000000000000000000000006118888383612705565b105b1561189757611897611444565b600354600160801b90046001600160801b03166118d9611147826118c3670de0b6b3a76400008861392a565b6005546001600160801b031691908c600061242d565b600580546001600160801b0319166001600160801b039290921691909117905561190388826138ba565b905061190e81611a50565b600380546001600160801b03928316600160801b02921691909117905561193483611a50565b600280546001600160801b0319166001600160801b039290921691909117905561195d826124d7565b600480546001600160801b0319166001600160801b039290921691909117905561198687611a50565b600280546010906119a8908490600160801b90046001600160801b03166138ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006113717f00000000000000000000000000000000000000000000000000000000000000008361272b565b6000611a0e82846139a4565b6115de90846138ba565b6002546004546000916105c5916001600160801b0390911690600f0b612705565b600061008182611a4a85888861258f565b90612798565b60006001600160801b038211156113a157604051630f0af95160e11b815260040160405180910390fd5b6000818311611a8957826115de565b50919050565b6006546000908190611ab2908490600160801b90046001600160801b03166115e5565b6006546201000090046001600160701b03169250905081811115611c2e576000611adc83836138ba565b9050611aeb611147828661280d565b60068054601090611b0d908490600160801b90046001600160801b0316613941565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b46858361282290919063ffffffff16565b90506000611b74827f00000000000000000000000000000000000000000000000000000000000000006115e5565b90508060096000828254611b889190613709565b90915550611b98905081836138ba565b9150611ba382611a50565b60028054600090611bbe9084906001600160801b03166138ed565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611beb82612837565b60048054600090611c00908490600f0b613961565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c408785612822565b91506000611c6e837f00000000000000000000000000000000000000000000000000000000000000006115e5565b9050611c9a817f00000000000000000000000000000000000000000000000000000000000000006115e5565b91508315611cbd57611cac82826138ba565b611cb690846138ba565b9250611cd4565b611cc782826138ba565b611cd19084613709565b92505b86861015611cf757611ce783878961258f565b9250611cf482878961258f565b91505b509550959350505050565b600080611d1a84611d148a888a61258f565b90612822565b9050611d2788848661258f565b611d319082613709565b905086811115611d415786810391505b509695505050505050565b60006001600160701b038211156113a15760405163086b151760e11b815260040160405180910390fd5b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611dc1916001600160801b0316906138ba565b905080600003611dd5576001915050611371565b6000611de085612861565b905080600003611df557600192505050611371565b600080611e038385896128fd565b9150915080611e19576000945050505050611371565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e55929190613a36565b6040805180830381865af4158015611e71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e959190613aac565b91509150611eb3611ea582611377565b611eae90613ad0565b612a78565b925082611ec95760009650505050505050611371565b611ed282611a50565b60078054600090611eed9084906001600160801b03166138ed565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f1a81611a50565b60078054601090611f3c908490600160801b90046001600160801b03166138ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f9987612c10565b6040518263ffffffff1660e01b8152600401611fb59190613aec565b6040805180830381865af4158015611fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff59190613afb565b915091508061200b575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161207191613709565b61207b91906138ba565b90508060000361209357506000958695509350505050565b60008087116120a35760006120ae565b6120ae84888461258f565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156120e2576120e2613b2b565b6040519080825280601f01601f19166020018201604052801561210c576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561212d578692505b828152826000602083013e90999098509650505050505050565b6000806121526105ca565b905080831161216257600061216c565b61216c81846138ba565b91506115de827f0000000000000000000000000000000000000000000000000000000000000000612822565b600080806121b96121b188670de0b6b3a76400006138ba565b899087612d4a565b905086156121fb576121cb888861257a565b91506121ec8a8a846121e58a670de0b6b3a76400006138ba565b8989612d70565b92506121f88382613709565b90505b9750975097945050505050565b600061222661221f84670de0b6b3a76400006138ba565b839061257a565b6115de90670de0b6b3a76400006138ba565b60008061226f85612247611a18565b6122519190613709565b600254610ff2908790600160801b90046001600160801b03166138ba565b909210949350505050565b60008080806122d187866122ca8b6122c461229d8c670de0b6b3a76400006138ba565b7f00000000000000000000000000000000000000000000000000000000000000009061257a565b9061257a565b9190612d4a565b93506122fd847f00000000000000000000000000000000000000000000000000000000000000006115e5565b9150600061231e61231689670de0b6b3a76400006138ba565b8a9088612d4a565b905061234a817f000000000000000000000000000000000000000000000000000000000000000061257a565b9350612376847f00000000000000000000000000000000000000000000000000000000000000006115e5565b6123809084613709565b915050945094509450949050565b600080600080600080888810156123fd5786156123b3576123b08d898b61258f565b9c505b6123be8c898b61258f565b9b506123c98b611377565b6123d28d611377565b6123dc919061371c565b90506123e98b898b61258f565b9a506123f68a898b61258f565b995061241c565b6124068b611377565b61240f8d611377565b612419919061371c565b90505b9b9c9a9b999a975050505050505050565b60008260000361243e5750846124ce565b81156124915761246f6124518487613709565b61245b85876115e5565b612465888a6115e5565b611d149190613709565b9050600061247d8588611a7a565b90508082101561248b578091505b506124ce565b8285036124a0575060006124ce565b6124cb6124ad84876138ba565b6124b7858761257a565b6124c1888a6115e5565b611d1491906138ba565b90505b95945050505050565b600060016001607f1b03198212806124f5575060016001607f1b0382135b156113a15760405163a5353be560e01b815260040160405180910390fd5b600080612521846000612d93565b61252c846000612d93565b612536919061371c565b905060008113156125525761254b8186613709565b9450612571565b60008112156125715761256481613ad0565b61256e90866138ba565b94505b50929392505050565b60006115de8383670de0b6b3a7640000612d4a565b60008260001904841183021582026125a657600080fd5b5091020490565b60006113717f000000000000000000000000000000000000000000000000000000000000000083612da9565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015612653573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100819190613b41565b6126ab6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612dd9565b50505050565b600080806126d26126ca88670de0b6b3a76400006138ba565b89908761258f565b905086156121fb576126e488886115e5565b91506121ec8a8a846126fe8a670de0b6b3a76400006138ba565b8989612e30565b6000806127128484612e41565b90925090508061272457612724611444565b5092915050565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a906024015b602060405180830381865afa158015612774573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115de9190613b41565b6000816000036127b15750670de0b6b3a7640000611371565b826000036127c157506000611371565b60006127cc83611377565b905060006127e16127dc86611377565b612e80565b90508181026127f8670de0b6b3a764000082613b5a565b9050612803816130a6565b9695505050505050565b60006115de83670de0b6b3a764000084612d4a565b60006115de83670de0b6b3a76400008461258f565b600060016001607f1b038211156113a15760405163a5353be560e01b815260040160405180910390fd5b600354600090819061287c906001600160801b03168461280d565b90506128a87f000000000000000000000000000000000000000000000000000000000000000082613709565b6002546001600160801b03161115611a89576002547f0000000000000000000000000000000000000000000000000000000000000000906128f39083906001600160801b03166138ba565b6115de91906138ba565b6129056135e1565b60008061291184612c10565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161294c9190613aec565b6040805180830381865af4158015612968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298c9190613afb565b93509050826129a1575060009150612a709050565b60006129c86129c38461016001518561014001516115e590919063ffffffff16565b611377565b6129e86129c385610120015186610100015161257a90919063ffffffff16565b6129f2919061371c565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b559190613b88565b935093509350935080612b715750600098975050505050505050565b868414612ba257612b8184611a50565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bd357612bb2836124d7565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c0157612be382611a50565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c18613633565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d10911661323b565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d429290041661323b565b905292915050565b6000826000190484118302158202612d6157600080fd5b50910281810615159190040190565b600080612d818888888888886132b1565b909250905080611d4157611d41611444565b6000818313612da257816115de565b5090919050565b6040516363737ac960e11b8152600481018290526000906001600160a01b0384169063c6e6f59290602401612757565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612e2b908490613392565b505050565b600080612d818888888888886133fa565b600080600083612e5086611377565b612e5a919061371c565b90506000811215612e72576000809250925050612e79565b9150600190505b9250929050565b6000808213612ea25760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f259084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130c157506000919050565b680755bf798b4a1bf1e582126130ea576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061280374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b600080670de0b6b3a764000061324f6105ca565b613259919061392a565b9050808311613269576000613273565b61327381846138ba565b91506115de6132aa670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061392a565b8390612822565b60008060006132c389898888886134ba565b9050868810156132da576000809250925050613387565b96869003966132e98887612798565b975087811015613300576000809250925050613387565b87810361330e818688612d4a565b9050670de0b6b3a764000081106133425761333b613334670de0b6b3a76400008961280d565b8290612798565b905061335a565b613357613334670de0b6b3a764000089612822565b90505b613364818661280d565b90508981101561337c57600080935093505050613387565b899003925060019150505b965096945050505050565b60006133a76001600160a01b038416836134e9565b905080516000141580156133cc5750808060200190518101906133ca9190613bbe565b155b15612e2b57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b600080600061340c89898888886134ba565b905061341c86611a4a898b613709565b975087811015613433576000809250925050613387565b878103613441818688612d4a565b9050670de0b6b3a7640000811061346e57613467613334670de0b6b3a76400008961280d565b9050613486565b613483613334670de0b6b3a764000089612822565b90505b613490818661280d565b9050808a10156134a857600080935093505050613387565b90980398600198509650505050505050565b60006134c68585612798565b6134df6134d786611a4a868b61257a565b859085612d4a565b6124cb9190613709565b60606115de8383600084600080856001600160a01b0316848660405161350f9190613bdb565b60006040518083038185875af1925050503d806000811461354c576040519150601f19603f3d011682016040523d82523d6000602084013e613551565b606091505b50915091506128038683836060826135715761356c826135b8565b6115de565b815115801561358857506001600160a01b0384163b155b156135b157604051639996b31560e01b81526001600160a01b03851660048201526024016133f1565b50806115de565b8051156135c85780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135f5613633565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156136aa57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136d657600080fd5b8501606081880312156136e857600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611371576113716136f3565b8181036000831280158383131683831282161715612724576127246136f3565b6001600160a01b03811681146105af57600080fd5b60006020828403121561376357600080fd5b81356115de8161373c565b80151581146105af57600080fd5b60006020828403121561378e57600080fd5b81356115de8161376e565b6000808335601e198436030181126137b057600080fd5b83018035915067ffffffffffffffff8211156137cb57600080fd5b602001915036819003821315612e7957600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061384360e0830184866137e0565b9a9950505050505050505050565b8082018281126000831280158216821582161715613871576138716136f3565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006138ad60c0830184866137e0565b9998505050505050505050565b81810381811115611371576113716136f3565b6001600160701b03818116838216019080821115612724576127246136f3565b6001600160801b03818116838216019080821115612724576127246136f3565b60006020828403121561391f57600080fd5b81516115de8161373c565b8082028115828204841417611371576113716136f3565b6001600160801b03828116828216039080821115612724576127246136f3565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611371576113716136f3565b634e487b7160e01b600052601260045260246000fd5b6000826139b3576139b361398e565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613a4a8285516139b8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613abf57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613ae557613ae56136f3565b5060000390565b610180810161137182846139b8565b60008060408385031215613b0e57600080fd5b825191506020830151613b208161376e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613b5357600080fd5b5051919050565b600082613b6957613b6961398e565b600160ff1b821460001984141615613b8357613b836136f3565b500590565b60008060008060808587031215613b9e57600080fd5b84519350602085015192506040850151915060608501516136e88161376e565b600060208284031215613bd057600080fd5b81516115de8161376e565b6000825160005b81811015613bfc5760208186018101518583015201613be2565b50600092019182525091905056fea26469706673582212207c8bdf9711175e038c9d2a4f86123dc58604ff6065d860ae8d695736ba131bf064736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
