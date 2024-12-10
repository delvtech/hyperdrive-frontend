export const StakingUSDSTarget3 = {
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
                    "name": "__stakingUSDS",
                    "type": "address",
                    "internalType": "contract IStakingUSDS"
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
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004515380380620045158339810160408190526200003491620004ef565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152918801516101a052908701516101c05260c0808801516101e090815260e0808a015161020052610120808b0151909352610100808b0151909152610140808b0151909152908901805151909252815190920151909152805160409081015161016052905160609081015161018052908701518316610240528601516102605281851661022052908316610280528291620000f69190839062000100565b505050506200068a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200015a9085908390620001cb16565b620001c557604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001b99186916200027516565b620001c5848262000275565b50505050565b5f805f846001600160a01b031684604051620001e891906200063b565b5f604051808303815f865af19150503d805f811462000223576040519150601f19603f3d011682016040523d82523d5f602084013e62000228565b606091505b5091509150818015620002565750805115806200025657508080602001905181019062000256919062000669565b80156200026c57505f856001600160a01b03163b115b95945050505050565b5f6200028b6001600160a01b03841683620002e6565b905080515f14158015620002b2575080806020019051810190620002b0919062000669565b155b15620002e157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620002f583835f620002fc565b9392505050565b606081471015620003235760405163cd78605960e01b8152306004820152602401620002d8565b5f80856001600160a01b031684866040516200034091906200063b565b5f6040518083038185875af1925050503d805f81146200037c576040519150601f19603f3d011682016040523d82523d5f602084013e62000381565b606091505b509092509050620003948683836200039e565b9695505050505050565b606082620003b757620003b18262000402565b620002f5565b8151158015620003cf57506001600160a01b0384163b155b15620003fa57604051639996b31560e01b81526001600160a01b0385166004820152602401620002d8565b5080620002f5565b805115620004135780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405161020081016001600160401b03811182821017156200045c57634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000479575f80fd5b919050565b5f608082840312156200048f575f80fd5b604051608081016001600160401b0381118282101715620004be57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a081121562000504575f80fd5b6102608082121562000514575f80fd5b6200051e6200042c565b91506200052b8662000462565b82526200053b6020870162000462565b60208301526200054e6040870162000462565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620005b981880162000462565b90830152610180620005cd87820162000462565b908301526101a0620005e187820162000462565b908301526101c0620005f587820162000462565b908301526101e06200060a888883016200047e565b81840152508194506200061f81870162000462565b9350505062000632610280850162000462565b90509250925092565b5f82515f5b818110156200065c576020818601810151858301520162000640565b505f920191825250919050565b5f602082840312156200067a575f80fd5b81518015158114620002f5575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613cc0620008555f395f818161198801526119ff01525f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b015281816120a001528181612103015281816129ac01528181612dea0152612e2601525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611cb101525f8181611e06015261307501525f81816110260152611dda01525f61302b01525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f64015261294201525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f50505f818161195b01526119bc0152613cc05ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a366004613719565b610064565b60405190815260200160405180910390f35b61003f61005f366004613778565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b6137d8565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f0000000000000000000000000000000000000000000000000000000000000000896137eb565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f0000000000000000000000000000000000000000000000000000000000000000826137d8565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f0000000000000000000000000000000000000000000000000000000000000000826137eb565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b03909116906137eb565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f9083906137d8565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061046790849060040161387c565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a6919061388b565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a9185910161387c565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610559919061388b565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b81876137eb565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f01602081019061061691906138b6565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c61025491906137d8565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e60208501856138b6565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b016138de565b866107a960408c018c6138f9565b6040516107bc979695949392919061393c565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f0000000000000000000000000000000000000000000000000000000000000000600261398f565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a591906139a6565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c6138b6565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b1360208201826138b6565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b5060408701602088016138de565b87610b5e60408901896138f9565b604051610b71979695949392919061393c565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be360208301836138b6565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a60408501602086016138de565b15610c8f57610c8585610c8060408701876138f9565b61194c565b9093509050610ca7565b5034610ca785610ca260408701876138f9565b611a6d565b610caf611a86565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611a98565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b6137d8565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b6137eb565b8a84611aad565b610f4f89610f49610f427f0000000000000000000000000000000000000000000000000000000000000000836137d8565b4290611be6565b84611aad565b610f5888611bf4565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d6137eb565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611d91565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611dc5565b915091508060095f828254610ff591906137d8565b909155506110109050865f8461100a81611766565b88611e92565b61101a81836137d8565b915061104a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000612009565b915061105e611059838561204c565b612060565b6006805460029061107f9084906201000090046001600160701b03166139d1565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b03166139f1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611d91565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611dc5565b915091508060095f82825461114191906137d8565b9091555061115c9050835f8461115681611766565b8a612089565b61116681836137eb565b9150611175611059838761204c565b600680546002906111969084906201000090046001600160701b03166139d1565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b03166139f1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b6112319190613a11565b5f612279565b8e61124284826122b8565b50505b5f61124f846124a7565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113299190613a30565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906125e9565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611d91565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611d91565b6113f79190613a11565b92915050565b5f805f8061140b8a8a612671565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006137eb565b8b7f00000000000000000000000000000000000000000000000000000000000000006126a9565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006137eb565b8d7f0000000000000000000000000000000000000000000000000000000000000000612762565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c8461281c565b509093505f9050611568848f6137d8565b90505f6115888b8b61157987611766565b611583908e613a4b565b612864565b90508b6115bd6115b87f0000000000000000000000000000000000000000000000000000000000000000836128c6565b611766565b6115c683611766565b6115d36115b8868561204c565b6115dd9190613a11565b6115e79190613a11565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e133806128d6565b61162685670de0b6b3a76400006137eb565b906117d4565b61163461366a565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c91166128f9565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e929004166128f9565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c81612966565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906118199084906137d8565b90915550505f838152600b60205260408120805483929061183b9084906137d8565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f78260046122b8565b5f8183136118a7578261008d565b50919050565b5f806118b98484612671565b9092509050806118cb576118cb612afa565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612b13565b5f806119836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612b82565b6119e37f00000000000000000000000000000000000000000000000000000000000000006119b28760016137d8565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612bef565b6040516342ea02c160e01b8152600481018690525f60248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342ea02c1906044015f604051808303815f87803b158015611a48575f80fd5b505af1158015611a5a573d5f803e3d5ffd5b50505050845f915091505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b5f610c2d670de0b6b3a7640000612c7e565b5f611aa38284613a86565b61008d90846137eb565b5f83815260086020526040902054600160801b90046001600160801b0316808303611ad85750505050565b5f848152600860205260408120546001600160801b031690819003611b3057611b00836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611bad565b611b81611b7c670de0b6b3a7640000611b4988866137eb565b611b53919061398f565b85670de0b6b3a7640000611b67878a6137eb565b611b71919061398f565b859291906001612cf2565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611bb6846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611c16908490600160801b90046001600160801b031661204c565b6006546201000090046001600160701b03169250905081811115611d8c575f611c3f83836137eb565b9050611c4e611b7c8286612d8c565b60068054601090611c70908490600160801b90046001600160801b0316613a99565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611ca885836117d490919063ffffffff16565b90505f611cd5827f000000000000000000000000000000000000000000000000000000000000000061204c565b90508060095f828254611ce891906137d8565b90915550611cf8905081836137eb565b9150611d03826118d2565b600280545f90611d1d9084906001600160801b03166139f1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d4a82612da0565b600480545f90611d5e908490600f0b613ab9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611dba5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611dd187856117d4565b91505f611dfe837f000000000000000000000000000000000000000000000000000000000000000061204c565b9050611e2a817f000000000000000000000000000000000000000000000000000000000000000061204c565b91508315611e4d57611e3c82826137eb565b611e4690846137eb565b9250611e64565b611e5782826137eb565b611e6190846137d8565b92505b86861015611e8757611e778387896117b9565b9250611e848287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b0316611eda611b7c82611ebe670de0b6b3a76400008661398f565b600554600160801b90046001600160801b031691908a5f612cf2565b600580546001600160801b03928316600160801b029216919091179055611f00866118d2565b611f0a9082613a99565b600480546001600160801b03928316600160801b029216919091179055611f30846118d2565b600280545f90611f4a9084906001600160801b03166139f1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f77836118fb565b600480545f90611f8b908490600f0b613ab9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fbb856118d2565b60028054601090611fdd908490600160801b90046001600160801b0316613a99565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f8061201a846116268a888a6117b9565b90506120278884866117b9565b61203190826137d8565b9050868111156120415786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806120cb57507f00000000000000000000000000000000000000000000000000000000000000006120c985836137eb565b105b156120d8576120d8612afa565b6004549084900390600f0b6120ed8482613a11565b9050836120f986611766565b13801561212e57507f000000000000000000000000000000000000000000000000000000000000000061212c83836118ad565b105b1561213b5761213b612afa565b600354600160801b90046001600160801b031661217c611b7c82612167670de0b6b3a76400008861398f565b6005546001600160801b031691908c5f612cf2565b600580546001600160801b0319166001600160801b03929092169190911790556121a688826137eb565b90506121b1816118d2565b600380546001600160801b03928316600160801b0292169190911790556121d7836118d2565b600280546001600160801b0319166001600160801b0392909216919091179055612200826118fb565b600480546001600160801b0319166001600160801b0392909216919091179055612229876118d2565b6002805460109061224b908490600160801b90046001600160801b03166139f1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461229490611b7c906001600160801b03168484612864565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612302916001600160801b0316906137eb565b9050805f036123155760019150506113f7565b5f61231f85612dc9565b9050805f03612333576001925050506113f7565b5f80612340838589612e64565b9150915080612355575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612390929190613ae6565b6040805180830381865af41580156123aa573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123ce9190613b5b565b915091506123ec6123de82611766565b6123e790613b7d565b612966565b925082612401575f96505050505050506113f7565b61240a826118d2565b600780545f906124249084906001600160801b03166139f1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612451816118d2565b60078054601090612473908490600160801b90046001600160801b03166139f1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6124ce8761162c565b6040518263ffffffff1660e01b81526004016124ea919061387c565b6040805180830381865af4158015612504573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125289190613b97565b915091508061253d57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916125a2916137d8565b6125ac91906137eb565b9050805f036125c257505f958695509350505050565b5f8087116125d0575f6125db565b6125db8488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561260c5761260c613bc5565b6040519080825280601f01601f191660200182016040528015612636576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612656578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f8361267e86611766565b6126889190613a11565b90505f81121561269e575f809250925050610d21565b946001945092505050565b5f805f6126b98888888888612fcc565b90505f6126e3670de0b6b3a76400006126d28888612d8c565b6126dc91906137d8565b83906117d4565b9050670de0b6b3a7640000811061271757612710612709670de0b6b3a7640000896117d4565b8290612b13565b905061272f565b61272c612709670de0b6b3a764000089612d8c565b90505b61273981866117d4565b905088811015612750575f80935093505050612667565b97909703976001975095505050505050565b5f805f6127728989888888612ffa565b905061278c866119466127858a8d6137d8565b879061204c565b9850612799858a866117b9565b9850888110156127af575f8092509250506115f6565b888103670de0b6b3a764000081106127dd576127d6612709670de0b6b3a764000089612d8c565b90506127f5565b6127f2612709670de0b6b3a7640000896117d4565b90505b8089101561280a575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f61282c89878961301e565b909250905061283b82896137eb565b97505f61284982888a6117b9565b9050612855818b6137eb565b9a989950979650505050505050565b5f80612870845f6130a3565b61287a845f6130a3565b6128849190613a11565b90505f81131561289f5761289881866137d8565b94506128bd565b5f8112156128bd576128b081613b7d565b6128ba90866137eb565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f1904841183021582026128ea575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061290c610d28565b612916919061398f565b9050808311612925575f61292f565b61292f81846137eb565b915061008d6126dc670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061398f565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a1c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a409190613bd9565b935093509350935080612a5b57505f98975050505050505050565b868414612a8c57612a6b846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612abd57612a9c836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612aeb57612acd826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612b2a5750670de0b6b3a76400006113f7565b825f03612b3857505f6113f7565b5f612b4283611766565b90505f612b56612b5186611766565b6130b8565b9050818102612b6d670de0b6b3a764000082613c17565b9050612b78816132dd565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612be99186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061346f565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612c4084826134da565b612be9576040516001600160a01b0384811660248301525f6044830152612c7491869182169063095ea7b390606401612bb7565b612be9848261346f565b60405163b88fed9f60e01b8152600481018290525f9073__$27b302b103d10b9a6b3339aabd1a10a718$__9063b88fed9f90602401602060405180830381865af4158015612cce573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113f7919061388b565b5f825f03612d01575084610075565b8115612d5357612d32612d1484876137d8565b612d1e858761204c565b612d28888a61204c565b61162691906137d8565b90505f612d3f8588611be6565b905080821015612d4d578091505b50610075565b828503612d6157505f610075565b610072612d6e84876137eb565b612d7885876128c6565b612d82888a61204c565b61162691906137eb565b5f61008d83670de0b6b3a7640000846128d6565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612de3906001600160801b031684612d8c565b9050612e0f7f0000000000000000000000000000000000000000000000000000000000000000826137d8565b6002546001600160801b031611156118a7576002547f000000000000000000000000000000000000000000000000000000000000000090612e5a9083906001600160801b03166137eb565b61008d91906137eb565b612e6c6136bf565b5f80612e778461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612eb1919061387c565b6040805180830381865af4158015612ecb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612eef9190613b97565b9350905082612f0357505f9150611a659050565b5f612f246115b884610160015185610140015161204c90919063ffffffff16565b612f446115b88561012001518661010001516128c690919063ffffffff16565b612f4e9190613a11565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f612fd78585612b13565b612ff0612fe886611946868b61204c565b8590856117b9565b61007291906137d8565b5f6130058585612b13565b612ff061301686611946868b6128c6565b8590856128d6565b5f8061306d8561306785817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061305d818c612d8c565b61306791906137eb565b906128c6565b9150613099827f000000000000000000000000000000000000000000000000000000000000000061204c565b9050935093915050565b5f8183136130b1578161008d565b5090919050565b5f8082136130d95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061315c9084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132f657505f919050565b680755bf798b4a1bf1e5821261331f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b7874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f6134836001600160a01b03841683613577565b905080515f141580156134a75750808060200190518101906134a59190613c43565b155b156134d557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b0316846040516134f59190613c5e565b5f604051808303815f865af19150503d805f811461352e576040519150601f19603f3d011682016040523d82523d5f602084013e613533565b606091505b509150915081801561355d57508051158061355d57508080602001905181019061355d9190613c43565b80156100755750505050506001600160a01b03163b151590565b606061008d83835f845f80856001600160a01b0316848660405161359b9190613c5e565b5f6040518083038185875af1925050503d805f81146135d5576040519150601f19603f3d011682016040523d82523d5f602084013e6135da565b606091505b5091509150612b788683836060826135fa576135f582613641565b61008d565b815115801561361157506001600160a01b0384163b155b1561363a57604051639996b31560e01b81526001600160a01b03851660048201526024016134cc565b508061008d565b8051156136515780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061012001604052806136d361366a565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a0868803121561372d575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561375f575f80fd5b61376b88828901613709565b9150509295509295909350565b5f805f6060848603121561378a575f80fd5b8335925060208401359150604084013567ffffffffffffffff8111156137ae575f80fd5b6137ba86828701613709565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f76137c4565b818103818111156113f7576113f76137c4565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f782846137fe565b5f6020828403121561389b575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f602082840312156138c6575f80fd5b813561008d816138a2565b8015158114610c0a575f80fd5b5f602082840312156138ee575f80fd5b813561008d816138d1565b5f808335601e1984360301811261390e575f80fd5b83018035915067ffffffffffffffff821115613928575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f76137c4565b5f805f606084860312156139b8575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb6137c4565b6001600160801b038181168382160190808211156118cb576118cb6137c4565b8181035f8312801583831316838312821617156118cb576118cb6137c4565b5f60208284031215613a40575f80fd5b815161008d816138a2565b8082018281125f831280158216821582161715613a6a57613a6a6137c4565b505092915050565b634e487b7160e01b5f52601260045260245ffd5b5f82613a9457613a94613a72565b500690565b6001600160801b038281168282160390808211156118cb576118cb6137c4565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f76137c4565b5f6102a082019050613af98285516137fe565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613b6c575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613b9157613b916137c4565b505f0390565b5f8060408385031215613ba8575f80fd5b825191506020830151613bba816138d1565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613bec575f80fd5b8451935060208501519250604085015191506060850151613c0c816138d1565b939692955090935050565b5f82613c2557613c25613a72565b600160ff1b82145f1984141615613c3e57613c3e6137c4565b500590565b5f60208284031215613c53575f80fd5b815161008d816138d1565b5f82515f5b81811015613c7d5760208186018101518583015201613c63565b505f92019182525091905056fea264697066735822122084046a3a19c2b2d8b4c17c54c1915564308a2418792f4a6f2d3d606546f6f50a64736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
