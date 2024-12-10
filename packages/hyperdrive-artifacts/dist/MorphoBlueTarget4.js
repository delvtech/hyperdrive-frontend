export const MorphoBlueTarget4 = {
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
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct IMorphoBlueHyperdrive.MorphoBlueParams",
                    "components": [
                        {
                            "name": "morpho",
                            "type": "address",
                            "internalType": "contract IMorpho"
                        },
                        {
                            "name": "collateralToken",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "oracle",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "irm",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "lltv",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x61032060405234801562000011575f80fd5b50604051620039a0380380620039a08339810160408190526200003491620005c8565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011a929062000124565b5050505062000764565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200017e9085908390620001ef16565b620001e957604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001dd9186916200029916565b620001e9848262000299565b50505050565b5f805f846001600160a01b0316846040516200020c919062000715565b5f604051808303815f865af19150503d805f811462000247576040519150601f19603f3d011682016040523d82523d5f602084013e6200024c565b606091505b50915091508180156200027a5750805115806200027a5750808060200190518101906200027a919062000743565b80156200029057505f856001600160a01b03163b115b95945050505050565b5f620002af6001600160a01b038416836200030a565b905080515f14158015620002d6575080806020019051810190620002d4919062000743565b155b156200030557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200031983835f62000320565b9392505050565b606081471015620003475760405163cd78605960e01b8152306004820152602401620002fc565b5f80856001600160a01b0316848660405162000364919062000715565b5f6040518083038185875af1925050503d805f8114620003a0576040519150601f19603f3d011682016040523d82523d5f602084013e620003a5565b606091505b509092509050620003b8868383620003c2565b9695505050505050565b606082620003db57620003d58262000426565b62000319565b8151158015620003f357506001600160a01b0384163b155b156200041e57604051639996b31560e01b81526001600160a01b0385166004820152602401620002fc565b508062000319565b805115620004375780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200048357634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b038116811462000450575f80fd5b8051620004ab8162000489565b919050565b5f60808284031215620004c1575f80fd5b604051608081016001600160401b0381118282101715620004f057634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f60a0828403121562000532575f80fd5b60405160a081016001600160401b03811182821017156200056157634e487b7160e01b5f52604160045260245ffd5b80604052508091508251620005768162000489565b81526020830151620005888162000489565b602082015260408301516200059d8162000489565b60408201526060830151620005b28162000489565b6060820152608092830151920191909152919050565b5f805f838503610320811215620005dd575f80fd5b61026080821215620005ed575f80fd5b620005f762000453565b915062000604866200049e565b825262000614602087016200049e565b602083015262000627604087016200049e565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006928188016200049e565b90830152610180620006a68782016200049e565b908301526101a0620006ba8782016200049e565b908301526101c0620006ce8782016200049e565b908301526101e0620006e388888301620004b0565b8184015250819450620006f88187016200049e565b935050506200070c85610280860162000521565b90509250925092565b5f82515f5b818110156200073657602081860181015185830152016200071a565b505f920191825250919050565b5f6020828403121562000754575f80fd5b8151801515811462000319575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610300516130b0620008f05f395f818161115e015281816123cc015261250101525f818161113c015281816123aa01526124d201525f818161111a0152818161238801526124a301525f81816110f801528181612366015261247401525f81816110b401528181612322015261240b01525f50505f50505f61099201525f50505f818161025f015261201701525f8181611877015281816118da01528181611c0701528181611c4301528181611e340152611ff101525f81816105500152611fcb01525f61145901525f6115ae01525f818161070d015261158201525f50505f8181610571015261203d01525f818161064b015261267201525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f50505f81816110d601528181612344015261244501526130b05ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b610056610051366004612b43565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d366004612b95565b6100b1565b005b610056610092366004612b43565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f6020850185612bc9565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612bf1565b61016a60408c018c612c0c565b60405161017c96959493929190612c77565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612cc4565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d56020870187612bc9565b88610ea4565b5f6102f56102ec6020870187612bc9565b88848989610a9e565b90945090506103048188612ceb565b92505f61031083610f41565b5090506103206020870187612bc9565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612bf1565b8a888e80604001906103709190612c0c565b604051610384989796959493929190612cfe565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce6020830183612bc9565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f00000000000000000000000000000000000000000000000000000000000000006111c7565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612d45565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b6111e3565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611203565b92505b506105a283611222565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612ceb565b8a8461124f565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612d45565b4290611388565b8461124f565b61063f8861139c565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612ceb565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c611539565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f61156d565b915091508060095f8282546106dc9190612d45565b909155506106f79050865f846106f18161163a565b88611663565b6107018183612d45565b915061073186838a8e877f00000000000000000000000000000000000000000000000000000000000000006117da565b91506107456107408385611823565b611837565b600680546002906107669084906201000090046001600160701b0316612d58565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061079382611222565b600680546010906107b5908490600160801b90046001600160801b0316612d78565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e8600184611539565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f88600161156d565b915091508060095f8282546108289190612d45565b909155506108439050835f8461083d8161163a565b8a611860565b61084d8183612ceb565b915061085c6107408387611823565b6006805460029061087d9084906201000090046001600160701b0316612d58565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa82611222565b600680546010906108cc908490600160801b90046001600160801b0316612d78565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e6109058761163a565b61090e8361163a565b6109189190612d98565b5f611a50565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612db7565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a8f565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa985611b15565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611b21565b9050610b2083611222565b610b2a9083612dd2565b600780546001600160801b0319166001600160801b0392909216919091179055610b5381611222565b60078054601090610b75908490600160801b90046001600160801b0316612dd2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611b3c565b9350610bb08684611bd2565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612ceb565b9050805f03610c3a576001915050610dc7565b5f610c4485611be6565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611c81565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612e70565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612ee5565b91509150610d11610d038261163a565b610d0c90612f07565b611dee565b925082610d26575f9650505050505050610dc7565b610d2f82611222565b600780545f90610d499084906001600160801b0316612d78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d7681611222565b60078054601090610d98908490600160801b90046001600160801b0316612d78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612ceb565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612d45565b90915550505f838152600b602052604081208054839290610ef7908490612d45565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611f82565b6040518263ffffffff1660e01b8152600401610f849190612f21565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612f30565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612d45565b6110469190612ceb565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611b21565b976001975095505050505050565b6040516303c2063f60e41b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090611188907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401612f5e565b602060405180830381865af41580156111a3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dc79190612fa1565b5f6111d28284612cc4565b6111dc9084612ceb565b9392505050565b6002546004545f9161040a916001600160801b0390911690600f0b6120bc565b5f61121982611213858888611b21565b906120e1565b95945050505050565b5f6001600160801b0382111561124b57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b031680830361127a5750505050565b5f848152600860205260408120546001600160801b0316908190036112d2576112a283611222565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561134f565b61132361131e670de0b6b3a76400006112eb8886612ceb565b6112f59190612fb8565b85670de0b6b3a7640000611309878a612ceb565b6113139190612fb8565b859291906001612150565b611222565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61135884611222565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f81831161139657826111dc565b50919050565b6006545f9081906113be908490600160801b90046001600160801b0316611823565b6006546201000090046001600160701b03169250905081811115611534575f6113e78383612ceb565b90506113f661131e82866121ea565b60068054601090611418908490600160801b90046001600160801b0316612dd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61145085836121fe90919063ffffffff16565b90505f61147d827f0000000000000000000000000000000000000000000000000000000000000000611823565b90508060095f8282546114909190612d45565b909155506114a090508183612ceb565b91506114ab82611222565b600280545f906114c59084906001600160801b0316612d78565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114f282612212565b600480545f90611506908490600f0b612fcf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156115625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061157987856121fe565b91505f6115a6837f0000000000000000000000000000000000000000000000000000000000000000611823565b90506115d2817f0000000000000000000000000000000000000000000000000000000000000000611823565b915083156115f5576115e48282612ceb565b6115ee9084612ceb565b925061160c565b6115ff8282612ceb565b6116099084612d45565b92505b8686101561162f5761161f838789611b21565b925061162c828789611b21565b91505b509550959350505050565b5f6001600160ff1b0382111561124b5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166116ab61131e8261168f670de0b6b3a764000086612fb8565b600554600160801b90046001600160801b031691908a5f612150565b600580546001600160801b03928316600160801b0292169190911790556116d186611222565b6116db9082612dd2565b600480546001600160801b03928316600160801b02921691909117905561170184611222565b600280545f9061171b9084906001600160801b0316612d78565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117488361223b565b600480545f9061175c908490600f0b612fcf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061178c85611222565b600280546010906117ae908490600160801b90046001600160801b0316612dd2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806117f1846117eb8a888a611b21565b906121fe565b90506117fe888486611b21565b6118089082612d45565b9050868111156118185786810391505b509695505050505050565b5f6111dc8383670de0b6b3a7640000611b21565b5f6001600160701b0382111561124b5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806118a257507f00000000000000000000000000000000000000000000000000000000000000006118a08583612ceb565b105b156118af576118af612276565b6004549084900390600f0b6118c48482612d98565b9050836118d08661163a565b13801561190557507f000000000000000000000000000000000000000000000000000000000000000061190383836120bc565b105b1561191257611912612276565b600354600160801b90046001600160801b031661195361131e8261193e670de0b6b3a764000088612fb8565b6005546001600160801b031691908c5f612150565b600580546001600160801b0319166001600160801b039290921691909117905561197d8882612ceb565b905061198881611222565b600380546001600160801b03928316600160801b0292169190911790556119ae83611222565b600280546001600160801b0319166001600160801b03929092169190911790556119d78261223b565b600480546001600160801b0319166001600160801b0392909216919091179055611a0087611222565b60028054601090611a22908490600160801b90046001600160801b0316612d78565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a6b9061131e906001600160801b0316848461228f565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff811115611ab257611ab2612ffc565b6040519080825280601f01601f191660200182016040528015611adc576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611afc578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611b35575f80fd5b5091020490565b5f80611b488585611823565b9050611b53816122f1565b9450845f03611b65575f9150506111dc565b849150611b786040840160208501612bf1565b15611ba757611ba085611b8e6020860186612bc9565b611b9b6040870187612c0c565b6123f6565b9150611bca565b611bca85611bb86020860186612bc9565b611bc56040870187612c0c565b6125ed565b509392505050565b5f6111dc8383670de0b6b3a7640000612606565b6003545f908190611c00906001600160801b0316846121ea565b9050611c2c7f000000000000000000000000000000000000000000000000000000000000000082612d45565b6002546001600160801b03161115611396576002547f000000000000000000000000000000000000000000000000000000000000000090611c779083906001600160801b0316612ceb565b6111dc9190612ceb565b611c89612aa4565b5f80611c9484611f82565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611cce9190612f21565b6040805180830381865af4158015611ce8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d0c9190612f30565b9350905082611d2057505f91506100a99050565b5f611d46611d4184610160015185610140015161182390919063ffffffff16565b61163a565b611d66611d41856101200151866101000151611bd290919063ffffffff16565b611d709190612d98565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ea4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ec89190613010565b935093509350935080611ee357505f98975050505050505050565b868414611f1457611ef384611222565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611f4557611f248361223b565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f7357611f5582611222565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f8a612aee565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916120829116612629565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120b492900416612629565b905292915050565b5f806120c8848461269d565b9092509050806120da576120da612276565b5092915050565b5f815f036120f85750670de0b6b3a7640000610dc7565b825f0361210657505f610dc7565b5f6121108361163a565b90505f61212461211f8661163a565b6126d8565b905081810261213b670de0b6b3a76400008261304e565b9050612146816128fd565b9695505050505050565b5f825f0361215f575084611219565b81156121b1576121906121728487612d45565b61217c8587611823565b612186888a611823565b6117eb9190612d45565b90505f61219d8588611388565b9050808210156121ab578091505b50611219565b8285036121bf57505f611219565b6121466121cc8487612ceb565b6121d68587611bd2565b6121e0888a611823565b6117eb9190612ceb565b5f6111dc83670de0b6b3a764000084612606565b5f6111dc83670de0b6b3a764000084611b21565b5f60016001607f1b0382111561124b5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612258575060016001607f1b0382135b1561124b5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f8061229b845f612a8f565b6122a5845f612a8f565b6122af9190612d98565b90505f8113156122ca576122c38186612d45565b94506122e8565b5f8112156122e8576122db81612f07565b6122e59086612ceb565b94505b50929392505050565b6040516349124ca360e01b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390611188907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401612f5e565b5f8061240186611083565b905080156125e4577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c2bea496040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081525061252c89611083565b604080516001600160e01b031960e086901b16815283516001600160a01b0390811660048301526020850151811660248301529184015182166044820152606084015182166064820152608090930151608484015260a48301919091525f60c48301523060e483015288166101048201526101240160408051808303815f875af11580156125bc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125e09190612ee5565b5091505b50949350505050565b60405163350b944160e11b815260040160405180910390fd5b5f825f19048411830215820261261a575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061263c61040f565b6126469190612fb8565b9050808311612655575f61265f565b61265f8184612ceb565b91506111dc612696670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612fb8565b83906121fe565b5f805f836126aa8661163a565b6126b49190612d98565b90505f8112156126ca575f8092509250506126d1565b9150600190505b9250929050565b5f8082136126f95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061277c9084901c61163a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361291657505f919050565b680755bf798b4a1bf1e5821261293f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061214674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61163a565b5f818313612a9d57816111dc565b5090919050565b604051806101200160405280612ab8612aee565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612b55575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612b79575f80fd5b840160608187031215612b8a575f80fd5b809150509250925092565b5f8060408385031215612ba6575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f60208284031215612bd9575f80fd5b81356111dc81612bb5565b80151581146103f5575f80fd5b5f60208284031215612c01575f80fd5b81356111dc81612be4565b5f808335601e19843603018112612c21575f80fd5b83018035915067ffffffffffffffff821115612c3b575f80fd5b6020019150368190038213156126d1575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612ca460a083018486612c4f565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612cd257612cd2612cb0565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612cd7565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612d3760e083018486612c4f565b9a9950505050505050505050565b80820180821115610dc757610dc7612cd7565b6001600160701b038181168382160190808211156120da576120da612cd7565b6001600160801b038181168382160190808211156120da576120da612cd7565b8181035f8312801583831316838312821617156120da576120da612cd7565b5f60208284031215612dc7575f80fd5b81516111dc81612bb5565b6001600160801b038281168282160390808211156120da576120da612cd7565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612e83828551612df2565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612ef6575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612f1b57612f1b612cd7565b505f0390565b6101808101610dc78284612df2565b5f8060408385031215612f41575f80fd5b825191506020830151612f5381612be4565b809150509250929050565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b5f60208284031215612fb1575f80fd5b5051919050565b8082028115828204841417610dc757610dc7612cd7565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612cd7565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613023575f80fd5b845193506020850151925060408501519150606085015161304381612be4565b939692955090935050565b5f8261305c5761305c612cb0565b600160ff1b82145f198414161561307557613075612cd7565b50059056fea2646970667358221220c40995ac1c605ad12ca7f12a2a65167a8ac489f50c9b2b93ecb6c361547e7d3164736f6c63430008160033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
