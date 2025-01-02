export const MorphoBlueTarget2 = {
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
        }
    ],
    bytecode: '0x61032060405234801562000011575f80fd5b50604051620049b6380380620049b68339810160408190526200003491620005c8565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011a929062000124565b5050505062000764565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200017e9085908390620001ef16565b620001e957604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001dd9186916200029916565b620001e9848262000299565b50505050565b5f805f846001600160a01b0316846040516200020c919062000715565b5f604051808303815f865af19150503d805f811462000247576040519150601f19603f3d011682016040523d82523d5f602084013e6200024c565b606091505b50915091508180156200027a5750805115806200027a5750808060200190518101906200027a919062000743565b80156200029057505f856001600160a01b03163b115b95945050505050565b5f620002af6001600160a01b038416836200030a565b905080515f14158015620002d6575080806020019051810190620002d4919062000743565b155b156200030557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200031983835f62000320565b9392505050565b606081471015620003475760405163cd78605960e01b8152306004820152602401620002fc565b5f80856001600160a01b0316848660405162000364919062000715565b5f6040518083038185875af1925050503d805f8114620003a0576040519150601f19603f3d011682016040523d82523d5f602084013e620003a5565b606091505b509092509050620003b8868383620003c2565b9695505050505050565b606082620003db57620003d58262000426565b62000319565b8151158015620003f357506001600160a01b0384163b155b156200041e57604051639996b31560e01b81526001600160a01b0385166004820152602401620002fc565b508062000319565b805115620004375780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200048357634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b038116811462000450575f80fd5b8051620004ab8162000489565b919050565b5f60808284031215620004c1575f80fd5b604051608081016001600160401b0381118282101715620004f057634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f60a0828403121562000532575f80fd5b60405160a081016001600160401b03811182821017156200056157634e487b7160e01b5f52604160045260245ffd5b80604052508091508251620005768162000489565b81526020830151620005888162000489565b602082015260408301516200059d8162000489565b60408201526060830151620005b28162000489565b6060820152608092830151920191909152919050565b5f805f838503610320811215620005dd575f80fd5b61026080821215620005ed575f80fd5b620005f762000453565b915062000604866200049e565b825262000614602087016200049e565b602083015262000627604087016200049e565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006928188016200049e565b90830152610180620006a68782016200049e565b908301526101a0620006ba8782016200049e565b908301526101c0620006ce8782016200049e565b908301526101e0620006e388888301620004b0565b8184015250819450620006f88187016200049e565b935050506200070c85610280860162000521565b90509250925092565b5f82515f5b818110156200073657602081860181015185830152016200071a565b505f920191825250919050565b5f6020828403121562000754575f80fd5b8151801515811462000319575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e0516103005161403f620009775f395f8181611542015261194001525f818161151b015261191101525f81816114f301526118e201525f81816114cb01526118b301525f818161147b015281816117ed015261184a01525f50505f50505f610c2801525f50505f818160f9015281816103020152612feb01525f818161162401528181611f7301528181611fd60152818161275d01528181612bdb01528181612c1701528181612e080152612fc501525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612f9f01525f611b9d01525f8181611cbe0152818161284e015281816128c6015261310301525f81816109a301528181610e370152818161141501528181611c92015261289a01525f8181610e160152818161281a01526130bf01525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b015261301101525f81816101d301528181610396015281816108e1015261368f01525f81816106a7015281816107230152818161079701528181610862015261089a01525f50505f81816114a3015281816117c0015281816118210152611884015261403f5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a366004613a23565b61006b565b6040805192835260208301919091520160405180910390f35b61003f610066366004613a23565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613a91565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613a91565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e613ab8565b8b611217565b8d8a8a898e8561023e6020830183613ab8565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b6040880160208901613ae0565b8961028960408a018a613afb565b60405161029c9796959493929190613b66565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613a91565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613a91565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613a91565b9350505f61042784898d6115cd565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b896115fe565b5f6104706002886111e3565b90508c61048a826104846020840184613ab8565b85611217565b858b868461049b6020860186613ab8565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c01613ae0565b6104ec896104e68a8d613ba6565b90610683565b8d6104fa60408e018e613afb565b60405161050e989796959493929190613bb9565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f6105886020830183613ab8565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c56040850160208601613ae0565b156105ea576105e0856105db6040870187613afb565b6117b1565b9093509050610602565b5034610602856105fd6040870187613afb565b611a17565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a7640000611a30565b90505b92915050565b5f6106cb427f0000000000000000000000000000000000000000000000000000000000000000611a4b565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613a91565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d1611a60565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a80565b92505b5061083883611a9f565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b613ba6565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613a91565b4290611acc565b84610f13565b6108d588611ae0565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d613ba6565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611c7d565b915091508060095f8282546109729190613a91565b9091555061098d9050865f8461098781611d4a565b88611d73565b6109978183613a91565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611eea565b91506109db6109d68385610683565b611f33565b600680546002906109fc9084906201000090046001600160701b0316613c00565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a2982611a9f565b60068054601090610a4b908490600160801b90046001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611c7d565b915091508060095f828254610abe9190613a91565b90915550610ad99050835f84610ad381611d4a565b8a611f5c565b610ae38183613ba6565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b0316613c00565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b4082611a9f565b60068054601090610b62908490600160801b90046001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611d4a565b610ba483611d4a565b610bae9190613c40565b5f61214c565b8e610bbf848261218b565b50505b5f610bcc8461237a565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca69190613c5f565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906124bc565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d41611a60565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612542565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a80565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061256d565b6125d1565b15610e6d57610e6d612612565b610e798785888561262b565b91965094509250670de0b6b3a7640000610efb610e968784613a91565b600254610eb4908890600160801b90046001600160801b0316613ba6565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a80565b1115610f0957610f09612612565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f6683611a9f565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf8886613ba6565b610fb99190613c7a565b85670de0b6b3a7640000610fcd878a613ba6565b610fd79190613c7a565b859291906001612673565b611a9f565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c84611a9f565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a764000086613c7a565b6005546001600160801b03169190886001612673565b600580546001600160801b0319166001600160801b03929092169190911790556110b785611a9f565b600280545f906110d19084906001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe84611a9f565b60028054601090611120908490600160801b90046001600160801b0316613c91565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d84611a9f565b6111579082613c20565b600380546001600160801b03808416600160801b02911617905590505f61117d83612717565b905061119b8161118c87611d4a565b6111969084613cb1565b61214c565b6111a484612757565b6111b0576111b0612612565b5f6111ba856127b6565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613a91565b90915550505f838152600b60205260408120805483929061126a908490613a91565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db611a60565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006127c2565b93508761134d85896127e2565b111561135b5761135b612612565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a80565b93506113d58a670de0b6b3a7640000868c6127f6565b509193509091506113e890508183613ba6565b6113f29087613ba6565b95508861143f816114398d611407868c613ba6565b8d6114128782612902565b877f0000000000000000000000000000000000000000000000000000000000000000612917565b906127e2565b975090945050505093509350935093565b5f61069783670de0b6b3a764000084612937565b6040516303c2063f60e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001660848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260c481018290525f9073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f09060e401602060405180830381865af41580156115a9573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061069a9190613cd8565b5f6115de6040830160208401613ae0565b156115ea5750826115f7565b6115f4848461295a565b90505b9392505050565b6002546001600160801b03168381101561161a5761161a612612565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611652908390600f0b61296e565b101561166057611660612612565b6004546116aa90610fe290600160801b90046001600160801b031661168d670de0b6b3a764000086613c7a565b600554600160801b90046001600160801b03169190896001612673565b600580546001600160801b03928316600160801b0292169190911790556116d081611a9f565b600280546001600160801b0319166001600160801b03929092169190911790556116f985611a9f565b6002805460109061171b908490600160801b90046001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061174885611a9f565b6004805460109061176a908490600160801b90046001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61179883612717565b905061119b816117a788611d4a565b6111969084613c40565b5f806117e86001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612993565b6118487f0000000000000000000000000000000000000000000000000000000000000000611817876001613a91565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612a00565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a99aad896040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f0000000000000000000000000000000000000000000000000000000000000000815250875f305f67ffffffffffffffff81111561197e5761197e613cef565b6040519080825280601f01601f1916602001820160405280156119a8576020820181803683370190505b506040518663ffffffff1660e01b81526004016119c9959493929190613d25565b60408051808303815f875af11580156119e4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a089190613db4565b92505f9150505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b5f825f190484118302158202611a44575f80fd5b5091020490565b5f611a568284613dea565b6106979084613ba6565b6002546004545f916106cb916001600160801b0390911690600f0b61296e565b5f611a9682611a90858888611a30565b90612a8f565b95945050505050565b5f6001600160801b03821115611ac857604051630f0af95160e11b815260040160405180910390fd5b5090565b5f818311611ada5782610697565b50919050565b6006545f908190611b02908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611c78575f611b2b8383613ba6565b9050611b3a610fe28286611450565b60068054601090611b5c908490600160801b90046001600160801b0316613c91565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611b94858361295a90919063ffffffff16565b90505f611bc1827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f828254611bd49190613a91565b90915550611be490508183613ba6565b9150611bef82611a9f565b600280545f90611c099084906001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3682612af4565b600480545f90611c4a908490600f0b613dfd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611c89878561295a565b91505f611cb6837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611ce2817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611d0557611cf48282613ba6565b611cfe9084613ba6565b9250611d1c565b611d0f8282613ba6565b611d199084613a91565b92505b86861015611d3f57611d2f838789611a30565b9250611d3c828789611a30565b91505b509550959350505050565b5f6001600160ff1b03821115611ac85760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611dbb610fe282611d9f670de0b6b3a764000086613c7a565b600554600160801b90046001600160801b031691908a5f612673565b600580546001600160801b03928316600160801b029216919091179055611de186611a9f565b611deb9082613c91565b600480546001600160801b03928316600160801b029216919091179055611e1184611a9f565b600280545f90611e2b9084906001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e5883612b1d565b600480545f90611e6c908490600f0b613dfd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611e9c85611a9f565b60028054601090611ebe908490600160801b90046001600160801b0316613c91565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611f0184611efb8a888a611a30565b9061295a565b9050611f0e888486611a30565b611f189082613a91565b905086811115611f285786810391505b509695505050505050565b5f6001600160701b03821115611ac85760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611f9e57507f0000000000000000000000000000000000000000000000000000000000000000611f9c8583613ba6565b105b15611fab57611fab612612565b6004549084900390600f0b611fc08482613c40565b905083611fcc86611d4a565b13801561200157507f0000000000000000000000000000000000000000000000000000000000000000611fff838361296e565b105b1561200e5761200e612612565b600354600160801b90046001600160801b031661204f610fe28261203a670de0b6b3a764000088613c7a565b6005546001600160801b031691908c5f612673565b600580546001600160801b0319166001600160801b03929092169190911790556120798882613ba6565b905061208481611a9f565b600380546001600160801b03928316600160801b0292169190911790556120aa83611a9f565b600280546001600160801b0319166001600160801b03929092169190911790556120d382612b1d565b600480546001600160801b0319166001600160801b03929092169190911790556120fc87611a9f565b6002805460109061211e908490600160801b90046001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461216790610fe2906001600160801b03168484612b58565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916121d5916001600160801b031690613ba6565b9050805f036121e857600191505061069a565b5f6121f285612bba565b9050805f036122065760019250505061069a565b5f80612213838589612c55565b9150915080612228575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612263929190613ea8565b6040805180830381865af415801561227d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906122a19190613db4565b915091506122bf6122b182611d4a565b6122ba90613f1d565b612dc2565b9250826122d4575f965050505050505061069a565b6122dd82611a9f565b600780545f906122f79084906001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061232481611a9f565b60078054601090612346908490600160801b90046001600160801b0316613c20565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6123a187612f56565b6040518263ffffffff1660e01b81526004016123bd9190613f37565b6040805180830381865af41580156123d7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123fb9190613f46565b915091508061241057505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161247591613a91565b61247f9190613ba6565b9050805f0361249557505f958695509350505050565b5f8087116124a3575f6124ae565b6124ae848884611a30565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156124df576124df613cef565b6040519080825280601f01601f191660200182016040528015612509576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612529578692505b828152825f602083013e90999098509650505050505050565b5f61256287878761255b88670de0b6b3a7640000613ba6565b8787613090565b979650505050505050565b5f6115f46125ad61258684670de0b6b3a7640000613ba6565b611439670de0b6b3a764000061259c818a611450565b6125a69190613ba6565b87906127e2565b6125bf90670de0b6b3a7640000613a91565b611efb84670de0b6b3a7640000613ba6565b5f80612607856125df611a60565b6125e99190613a91565b600254610eb4908790600160801b90046001600160801b0316613ba6565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f61263b8987896130b2565b909250905061264a8289613ba6565b97505f61265882888a611a30565b9050612664818b613ba6565b9a989950979650505050505050565b5f825f03612682575084611a96565b81156126d4576126b36126958487613a91565b61269f8587610683565b6126a9888a610683565b611efb9190613a91565b90505f6126c08588611acc565b9050808210156126ce578091505b50611a96565b8285036126e257505f611a96565b61270d6126ef8487613ba6565b6126f985876127e2565b612703888a610683565b611efb9190613ba6565b9695505050505050565b5f61273c600b5f6127296002866111e3565b81526020019081526020015f2054611d4a565b61274d600b5f6127296001876111e3565b61069a9190613c40565b5f6127827f0000000000000000000000000000000000000000000000000000000000000000836127e2565b60035461279891906001600160801b0316613a91565b6002546127ae906001600160801b031684610683565b101592915050565b5f61069a82600461218b565b5f6125628787876127db88670de0b6b3a7640000613ba6565b8787613131565b5f6106978383670de0b6b3a7640000612937565b5f808080612846878661283f8b6114396128188c670de0b6b3a7640000613ba6565b7f0000000000000000000000000000000000000000000000000000000000000000906127e2565b9190612937565b9350612872847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f61289261288a89670de0b6b3a7640000613ba6565b8a9088612937565b90506128be817f00000000000000000000000000000000000000000000000000000000000000006127e2565b93506128ea847f0000000000000000000000000000000000000000000000000000000000000000610683565b6128f49084613a91565b915050945094509450949050565b5f8183116129105781610697565b5090919050565b5f8061292e846129288a888a612937565b90611450565b9050611f0e8884865b5f825f19048411830215820261294b575f80fd5b50910281810615159190040190565b5f61069783670de0b6b3a764000084611a30565b5f8061297a8484613141565b90925090508061298c5761298c612612565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526129fa9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613179565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612a5184826131e4565b6129fa576040516001600160a01b0384811660248301525f6044830152612a8591869182169063095ea7b3906064016129c8565b6129fa8482613179565b5f815f03612aa65750670de0b6b3a764000061069a565b825f03612ab457505f61069a565b5f612abe83611d4a565b90505f612ad2612acd86611d4a565b613281565b9050818102612ae9670de0b6b3a764000082613f74565b905061270d816134a6565b5f60016001607f1b03821115611ac85760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612b3a575060016001607f1b0382135b15611ac85760405163a5353be560e01b815260040160405180910390fd5b5f80612b64845f613638565b612b6e845f613638565b612b789190613c40565b90505f811315612b9357612b8c8186613a91565b9450612bb1565b5f811215612bb157612ba481613f1d565b612bae9086613ba6565b94505b50929392505050565b6003545f908190612bd4906001600160801b031684611450565b9050612c007f000000000000000000000000000000000000000000000000000000000000000082613a91565b6002546001600160801b03161115611ada576002547f000000000000000000000000000000000000000000000000000000000000000090612c4b9083906001600160801b0316613ba6565b6115f79190613ba6565b612c5d613984565b5f80612c6884612f56565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612ca29190613f37565b6040805180830381865af4158015612cbc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ce09190613f46565b9350905082612cf457505f9150611a0f9050565b5f612d1a612d1584610160015185610140015161068390919063ffffffff16565b611d4a565b612d3a612d158561012001518661010001516127e290919063ffffffff16565b612d449190613c40565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e78573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612e9c9190613fa0565b935093509350935080612eb757505f98975050505050505050565b868414612ee857612ec784611a9f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612f1957612ef883612b1d565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612f4757612f2982611a9f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f5e6139ce565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916130569116613646565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261308892900416613646565b905292915050565b5f806130a08888888888886136ba565b909250905080611f2857611f28612612565b5f806130fb8561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006130f1818c611450565b6114399190613ba6565b9150613127827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f806130a088888888888861377e565b5f805f8361314e86611d4a565b6131589190613c40565b90505f81121561316e575f80925092505061067c565b946001945092505050565b5f61318d6001600160a01b0384168361383a565b905080515f141580156131b15750808060200190518101906131af9190613fd3565b155b156131df57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b0316846040516131ff9190613fee565b5f604051808303815f865af19150503d805f8114613238576040519150601f19603f3d011682016040523d82523d5f602084013e61323d565b606091505b50915091508180156132675750805115806132675750808060200190518101906132679190613fd3565b8015611a965750505050506001600160a01b03163b151590565b5f8082136132a25760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133259084901c611d4a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136134bf57505f919050565b680755bf798b4a1bf1e582126134e8576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061270d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611d4a565b5f8183136129105781610697565b5f80670de0b6b3a76400006136596106a0565b6136639190613c7a565b9050808311613672575f61367c565b61367c8184613ba6565b91506115f76136b3670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c7a565b839061295a565b5f805f6136ca8989888888613847565b90506136e486611a906136dd8a8d613a91565b8790610683565b98506136f1858a86611a30565b985088811015613707575f809250925050613773565b888103670de0b6b3a7640000811061373c5761373561372e670de0b6b3a764000089611450565b8290612a8f565b9050613754565b61375161372e670de0b6b3a76400008961295a565b90505b80891015613769575f80935093505050613773565b8803925060019150505b965096945050505050565b5f805f61378e8989888888613847565b905061379e86611a90898b613a91565b9750878110156137b4575f809250925050613773565b8781036137c2818688612937565b9050670de0b6b3a764000081106137ef576137e861372e670de0b6b3a764000089611450565b9050613807565b61380461372e670de0b6b3a76400008961295a565b90505b6138118186611450565b9050808a1015613828575f80935093505050613773565b90980398600198509650505050505050565b606061069783835f613875565b5f6138528585612a8f565b61386b61386386611a90868b6127e2565b859085612937565b61270d9190613a91565b60608147101561389a5760405163cd78605960e01b81523060048201526024016131d6565b5f80856001600160a01b031684866040516138b59190613fee565b5f6040518083038185875af1925050503d805f81146138ef576040519150601f19603f3d011682016040523d82523d5f602084013e6138f4565b606091505b509150915061270d8683836060826139145761390f8261395b565b6115f7565b815115801561392b57506001600160a01b0384163b155b1561395457604051639996b31560e01b81526001600160a01b03851660048201526024016131d6565b50806115f7565b80511561396b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806139986139ce565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613a36575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a61575f80fd5b850160608188031215613a72575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a613a7d565b6001600160a01b03811681146105af575f80fd5b5f60208284031215613ac8575f80fd5b81356115f781613aa4565b80151581146105af575f80fd5b5f60208284031215613af0575f80fd5b81356115f781613ad3565b5f808335601e19843603018112613b10575f80fd5b83018035915067ffffffffffffffff821115613b2a575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f613b9960c083018486613b3e565b9998505050505050505050565b8181038181111561069a5761069a613a7d565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f613bf260e083018486613b3e565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561298c5761298c613a7d565b6001600160801b0381811683821601908082111561298c5761298c613a7d565b8181035f83128015838313168383128216171561298c5761298c613a7d565b5f60208284031215613c6f575f80fd5b81516115f781613aa4565b808202811582820484141761069a5761069a613a7d565b6001600160801b0382811682821603908082111561298c5761298c613a7d565b8082018281125f831280158216821582161715613cd057613cd0613a7d565b505092915050565b5f60208284031215613ce8575f80fd5b5051919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015613d1d578181015183820152602001613d05565b50505f910152565b5f61012060018060a01b038089511684528060208a01511660208501528060408a01511660408501528060608a0151166060850152608089015160808501528760a08501528660c085015280861660e08501525080610100840152835180828501526101409150613d9c8183860160208801613d03565b601f01601f1916929092019091019695505050505050565b5f8060408385031215613dc5575f80fd5b505080516020909101519092909150565b634e487b7160e01b5f52601260045260245ffd5b5f82613df857613df8613dd6565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a613a7d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613ebb828551613e2a565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f600160ff1b8201613f3157613f31613a7d565b505f0390565b610180810161069a8284613e2a565b5f8060408385031215613f57575f80fd5b825191506020830151613f6981613ad3565b809150509250929050565b5f82613f8257613f82613dd6565b600160ff1b82145f1984141615613f9b57613f9b613a7d565b500590565b5f805f8060808587031215613fb3575f80fd5b8451935060208501519250604085015191506060850151613a7281613ad3565b5f60208284031215613fe3575f80fd5b81516115f781613ad3565b5f8251613fff818460208701613d03565b919091019291505056fea2646970667358221220b68378afd3ccf010f62bd895c4f729a302b35ca37011dcaafe55e441a7cd844664736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
