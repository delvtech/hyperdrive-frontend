export const ERC4626Target1 = {
    "abi": [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                },
                {
                    "internalType": "contract IERC4626",
                    "name": "__vault",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                    "name": "reason",
                    "type": "uint8"
                }
            ],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidApr",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidShareReserves",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidTimestamp",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NegativePresentValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolIsPaused",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint112",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minLpSharePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minApr",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxApr",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "lpShares",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawalShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutputPerShare",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "redeemWithdrawalShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_lpShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6102606040523480156200001257600080fd5b5060405162004b5c38038062004b5c8339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161477d620003df6000396000818161071701528181610f0601528181610f7d0152818161100901528181611eb901528181611f5f01526120290152600050506000505060005050600081816102060152818161043201526105810152600081816110b1015281816111b9015281816119ed01528181611a5201528181611ca00152611cdc015260008181610267015261108b015260006115f00152600061174b0152600081816108f2015261171f015260005050600081816102a901526110d70152600081816102880152818161083a015261221301526000610796015260008181610ed90152610f3a015261477d6000f3fe6080604052600436106100345760003560e01c8063074a6de9146100395780634c2ac1d914610073578063cbc1343414610094575b600080fd5b34801561004557600080fd5b506100596100543660046143f8565b6100b4565b604080519283526020830191909152015b60405180910390f35b610086610081366004614448565b6100cf565b60405190815260200161006a565b3480156100a057600080fd5b506100596100af3660046143f8565b6100ea565b6000806100c28585856100f8565b915091505b935093915050565b60006100de86868686866101c9565b90505b95945050505050565b6000806100c2858585610574565b6000806101036106cd565b600061010d6106f7565b905061012061011a61078f565b826107c5565b5061012a81610b5b565b61013686828787610c98565b909350915061014860208501856144ac565b6001600160a01b03167f4492130ff6e87856efd8de86ccdc4c634fac84a63dbc7846c38eaf0728a8538a8361017e868589610dd2565b61018987868a610e04565b61019960408a0160208b016144e3565b604080519485526020850193909352918301521515606082015260800160405180910390a2506100c76001600055565b60006101d36106cd565b600554610100900460ff16156101fc576040516321081abf60e01b815260040160405180910390fd5b610204610e2c565b7f00000000000000000000000000000000000000000000000000000000000000008610156102455760405163211ddda360e11b815260040160405180910390fd5b60006102cd610252610e4d565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e6e565b9050848110806102dc57508381115b156102fa57604051633b61151160e11b815260040160405180910390fd5b6000806103078986610eb4565b9150915061031661011a61078f565b50600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610362916001600160801b0390911690614516565b6000808052600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e8549192509061039d908390614529565b905060008060006103ad86611042565b90506103b881611155565b91506103c38761118c565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526103f581611155565b9250818310156104185760405163184d952160e11b815260040160405180910390fd5b61042e84836104278187614516565b919061127d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156104715760405163211ddda360e11b815260040160405180910390fd5b508b61047d8e8a61129b565b101561049c5760405163c972651760e01b815260040160405180910390fd5b6104b460006104ae60208c018c6144ac565b8a6112b0565b6104bd85610b5b565b600083156104d4576104cf828561129b565b6104d7565b60005b905060006104e68f888d610dd2565b90506104f560208c018c6144ac565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868b838b8f602001602081019061053591906144e3565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a25050505050505050506100e16001600055565b60008061057f6106cd565b7f00000000000000000000000000000000000000000000000000000000000000008510156105c05760405163211ddda360e11b815260040160405180910390fd5b60006105ca6106f7565b90506105d761011a61078f565b506105e460003388611359565b6105ff600360f81b6105f960208701876144ac565b886112b0565b61060881610b5b565b600061061687838888610c98565b90945090506106258188614516565b925061063460208601866144ac565b6001600160a01b03167f831a8ce8c82bacaff5219cca17a2b0e4c06cbc095e8fd04474159cf27364bc588861066a87868a610dd2565b61067588878b610e04565b61068560408b0160208c016144e3565b8861068f8961143c565b6040805196875260208701959095529385019290925215156060840152608083015260a082015260c00160405180910390a250506100c76001600055565b6002600054036106f057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610766573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078a919061453c565b905090565b60006107bb7f00000000000000000000000000000000000000000000000000000000000000004261456b565b61078a9042614516565b600082815260076020526040812080546001600160801b03161515806107ea57504284115b1561080057546001600160801b03169050610b55565b61080983611500565b81546001600160801b0319166001600160801b039190911617815561082d8361152a565b506000905060078161085f7f000000000000000000000000000000000000000000000000000000000000000088614516565b815260208101919091526040016000908120546001600160801b031691506108886002876116d3565b6000818152600c602052604081205491925081156109c1575060016000806108b2848a8884611708565b9150915080600960008282546108c89190614529565b909155506108dc905084600084808e6117d6565b6108e68183614529565b91506109168483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611950565b915061092a610925838b61199b565b6119b0565b6005805460029061094b9084906201000090046001600160701b031661457f565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061097882611500565b6005805460109061099a908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109ce60018a6116d3565b6000818152600c60205260409020549091508015610ad657600192506000806109fa838c8a6001611708565b915091508060096000828254610a109190614529565b909155508c9050610a258460008580856119d6565b610a2f8284614516565b9250610a3e610925848e61199b565b60058054600290610a5f9084906201000090046001600160701b031661457f565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8c83611500565b60058054601090610aae908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610af957610af0610ae985836145bf565b6000611bcb565b610af989610b5b565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a8684610b278e61143c565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610ba6916001600160801b0390911690614516565b905080600003610bb4575050565b6000610bbf83611c7e565b905080600003610bce57505050565b600080610be4610bdf848688611d23565b611dfc565b91509150610bf182611500565b60068054600090610c0c9084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c3981611500565b60068054601090610c5b908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c9181610c8c906145df565b61118c565b5050505050565b60065460009085906001600160801b031680821115610cbe57806001600160801b031691505b81600003610cd3576000809250925050610dc9565b610ce2600360f81b3384611359565b6006546001600160801b03600160801b909104811690600090610d0a9085908490861661127d565b9050610d1584611500565b610d1f90846145fb565b600680546001600160801b0319166001600160801b0392909216919091179055610d4881611500565b60068054601090610d6a908490600160801b90046001600160801b03166145fb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d99818988611e93565b945084610da6888661205c565b1115610dc55760405163c972651760e01b815260040160405180910390fd5b5050505b94509492505050565b6000610de460408301602084016144e3565b15610df0575082610dfd565b610dfa848461199b565b90505b9392505050565b6000610e1660408301602084016144e3565b15610e2557610dfa848461129b565b5082610dfd565b3415610e4b57604051631574f9f360e01b815260040160405180910390fd5b565b60015460035460009161078a916001600160801b0390911690600f0b612071565b600080610e7d8787878661208e565b9050610ea9610e9182866301e133806120a5565b610ea383670de0b6b3a7640000614516565b9061129b565b979650505050505050565b600080610ec760408401602085016144e3565b15610ff957610f016001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330876120cb565b610f617f0000000000000000000000000000000000000000000000000000000000000000610f30866001614529565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612138565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610fce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff2919061453c565b9150611031565b8391506110316001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856120cb565b6110396106f7565b90509250929050565b61104a61433a565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e0820152600454909161010083019161111b91166121c8565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261114d929004166121c8565b905292915050565b60008060006111638461223e565b91509150806111855760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806111de8686867f00000000000000000000000000000000000000000000000000000000000000008b6122b8565b925092509250858314611215576111f483611500565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146112465761122582612365565b600380546001600160801b0319166001600160801b03929092169190911790555b8381146112745761125681611500565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b600082600019048411830215820261129457600080fd5b5091020490565b6000610dfd83670de0b6b3a76400008461127d565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906112e2908490614529565b90915550506000838152600c602052604081208054839290611305908490614529565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600b602090815260408083206001600160a01b038616845290915290205481111561139c57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906113ce908490614516565b90915550506000838152600c6020526040812080548392906113f1908490614516565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161134c565b6000806000831161144e576000611469565b6114698361146361145e86611042565b611155565b9061199b565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916114d49190614529565b6114de9190614516565b905080156114f5576114f0828261129b565b6114f8565b60005b949350505050565b6000600160801b821061152657604051630f0af95160e11b815260040160405180910390fd5b5090565b600554600090819061154d908490600160801b90046001600160801b031661199b565b6005546201000090046001600160701b031692509050818111156116ce5760006115778383614516565b905061158b61158682866123a3565b611500565b600580546010906115ad908490600160801b90046001600160801b03166145fb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115e6858361129b90919063ffffffff16565b90506000611614827f000000000000000000000000000000000000000000000000000000000000000061199b565b905080600960008282546116289190614529565b9091555061163890508183614516565b915061164382611500565b6001805460009061165e9084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168b82611500565b600380546000906116a0908490600f0b61461b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156116fd5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611715868661129b565b91506000611743837f000000000000000000000000000000000000000000000000000000000000000061199b565b905061176f817f000000000000000000000000000000000000000000000000000000000000000061199b565b91508315611792576117818282614516565b61178b9084614516565b92506117a9565b61179c8282614516565b6117a69084614529565b92505b848610156117cc576117bc83878761127d565b92506117c982878761127d565b91505b5094509492505050565b600354600160801b90046001600160801b031661181f6115868261180285670de0b6b3a7640000614648565b600454600160801b90046001600160801b031691908a60006123b8565b600480546001600160801b03928316600160801b02921691909117905561184586611500565b61184f90826145fb565b600380546001600160801b03928316600160801b02921691909117905561187584611500565b600180546000906118909084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118bd83612365565b600380546000906118d2908490600f0b61461b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061190285611500565b60018054601090611924908490600160801b90046001600160801b03166145fb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061196284610ea38a888a61127d565b905061196f88848661127d565b6119799082614529565b9050868111156119905761198d8782614516565b91505b509695505050505050565b6000610dfd8383670de0b6b3a764000061127d565b6000600160701b82106115265760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a1857507f0000000000000000000000000000000000000000000000000000000000000000611a168583614516565b105b15611a2757611a276003612475565b611a318482614516565b600354909150600f0b611a4484826145bf565b90508385138015611a7d57507f0000000000000000000000000000000000000000000000000000000000000000611a7b8383612071565b105b15611a8c57611a8c6001612475565b600254600160801b90046001600160801b0316611ace61158682611ab887670de0b6b3a7640000614648565b6004546001600160801b031691908c60006123b8565b600480546001600160801b0319166001600160801b0392909216919091179055611af88882614516565b9050611b0381611500565b600280546001600160801b03928316600160801b029216919091179055611b2983611500565b600180546001600160801b0319166001600160801b0392909216919091179055611b5282612365565b600380546001600160801b0319166001600160801b0392909216919091179055611b7b87611500565b60018054601090611b9d908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611bf4611bda8483612499565b611be5846000612499565b611bef91906145bf565b612365565b9050600081600f0b1315611c495760028054829190600090611c209084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611c7957611c5e8161465f565b60028054600090611c209084906001600160801b03166145fb565b505050565b6002546000908190611c99906001600160801b0316846123a3565b9050611cc57f000000000000000000000000000000000000000000000000000000000000000082614529565b6001546001600160801b03161115611d1d576001547f000000000000000000000000000000000000000000000000000000000000000090611d109083906001600160801b0316614516565b611d1a9190614516565b91505b50919050565b611d2b614394565b6000611d3683611042565b90506000611d4382611155565b90506000611d6483610140015184610120015161199b90919063ffffffff16565b61010084015160e0850151611d789161205c565b611d8291906145bf565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b6000806000611e138460c001518560e00151612071565b90506000611e2185836124af565b90506000611e2f86836127ad565b905080600003611e4757506000958695509350505050565b85606001518111611e5c579590945092505050565b5060608501516000611e6e8785612862565b905080600003611e875750600096879650945050505050565b90969095509350505050565b600080611ea0858561199b565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015611f08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2c919061453c565b945084600003611f40576000915050610dfd565b611f5060408401602085016144e3565b1561200f576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765286611f9260208701876144ac565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611fe4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612008919061453c565b9150612054565b61205061201f60208501856144ac565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169087612c8c565b8491505b509392505050565b6000610dfd8383670de0b6b3a76400006120a5565b60008061207e83856145bf565b90506000811215610dfd57600080fd5b60006100e18261209f85888861127d565b90612cbd565b60008260001904841183021582026120bc57600080fd5b50910281810615159190040190565b6040516001600160a01b0384811660248301528381166044830152606482018390526121329186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612d14565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526121898482612d77565b612132576040516001600160a01b038481166024830152600060448301526121be91869182169063095ea7b390606401612100565b6121328482612d14565b600080670de0b6b3a76400006121dc61078f565b6121e69190614648565b90508083116121f6576000612200565b6122008184614516565b9150611d1a612237670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614648565b839061129b565b600080600080600061224f86612e1a565b915091508061226657506000958695509350505050565b8560a0015161227487613057565b8751612281908590614685565b61228b9190614685565b61229591906145bf565b9250505060008112156122ae5750600093849350915050565b9360019350915050565b6000806000836000036122d257508691508590508461235a565b60006122de858a614685565b9050858112156123015760405163585fe6df60e11b815260040160405180910390fd5b8093506000881261231e5761231784898b61127d565b925061233e565b61233261232a896145df565b85908b61127d565b61233b906145df565b92505b6123568761234c8b8b612071565b6104278787612071565b9150505b955095509592505050565b600060016001607f1b03198212801590612386575060016001607f1b038213155b6115265760405163a5353be560e01b815260040160405180910390fd5b6000610dfd83670de0b6b3a7640000846120a5565b6000826000036123c95750846100e1565b811561243b576123fa6123dc8487614529565b6123e6858761199b565b6123f0888a61199b565b610ea39190614529565b9050600061240885886130be565b9050600061241686896130cd565b90508183101561242857819250612434565b80831115612434578092505b50506100e1565b82850361244a575060006100e1565b6100de6124578487614516565b612461858761205c565b61246b888a61199b565b610ea39190614516565b80604051633c06d78b60e11b815260040161249091906146a5565b60405180910390fd5b60008183136124a85781610dfd565b5090919050565b6000808360a00151126124c757506080820151610b55565b60008360a001516124d7906145df565b90506125088460c001518560e00151866101000151876000015160a001518860800151612503906145df565b6122b8565b865160408101919091526020808201929092529190915284518051910151600091612568916125379190612071565b8651604081015160c09091015161255690670de0b6b3a7640000614516565b885160608101516080909101516130dc565b905081811061257e575050506080820151610b55565b50600061258c858584613179565b905060005b6003811015612708576125c08660c001518760e00151886101000151896000015160a0015186612503906145df565b885160408101919091526020808201929092529190915286518051910151600091612620916125ef9190612071565b8851604081015160c09091015161260e90670de0b6b3a7640000614516565b8a5160608101516080909101516130dc565b905060008061262f898961331d565b915091508061264057505050612708565b8583111561269c5784965061266c620f4240670de0b6b3a76400006126659190614529565b879061199b565b831161267d57505050505050610b55565b61268b82610ea38886614516565b6126959086614529565b94506126e6565b858310156126d85760006126b483610ea3868a614516565b90508581106126c65750505050612708565b6126d08187614516565b9550506126e6565b849650505050505050610b55565b88608001518511156126fa57886080015194505b836001019350505050612591565b508281146127a5576127368560c001518660e00151876101000151886000015160a0015185612503906145df565b875160408101919091526020808201929092529190915285518051910151600091612796916127659190612071565b8751604081015160c09091015161278490670de0b6b3a7640000614516565b895160608101516080909101516130dc565b90508281106127a3578193505b505b505092915050565b60006127d58360c001518460e00151856101000151866000015160a0015186612503906145df565b85516040810191909152602081019190915252825160009081906127f89061223e565b9150915080158061280d575084602001518210155b1561281d57600092505050610b55565b6000856060015186604001516128339190614529565b905061284e8387602001518361127d9092919063ffffffff16565b6128589082614516565b9695505050505050565b600080836060015184604001516128799190614529565b90508360a001516000036128a3576060840151602085015161289b918361127d565b915050610b55565b602084015160608501516000916128bb91908461127d565b905060008560a001511315612afd5760005b6004811015612af7576128fc8660c001518760e00151886101000151896000015160a0015186612503906145df565b88516040810191909152602081019190915252855160009061291d90611155565b905061292a87828661358e565b156129355750612af7565b865180516020820151604083015160a084015160c0909401516000948594612982949093909290919061297090670de0b6b3a7640000614516565b8e516060810151608090910151613607565b915091508061299357505050612af7565b6000828a60a00151116129f6576129af8a8a8c60a001516136e9565b925090508115806129c85750670de0b6b3a76400008110155b156129dd576000975050505050505050610b55565b6129ef81670de0b6b3a7640000614516565b9050612a28565b6129ff8a6139a7565b909650915081612a19576000975050505050505050610b55565b85975050505050505050610b55565b6000612a458b604001518c6020015161205c90919063ffffffff16565b612a4f868a61199b565b612a5991906145bf565b90506000811315612a8957612a78612a71838a61205c565b829061129b565b612a829088614529565b9650612ae7565b6000811215612add576000612aaa612aa1848b61205c565b610ea3846145df565b905087811015612ac557612abe8189614516565b9750612ad7565b60009950505050505050505050610b55565b50612ae7565b5050505050612af7565b85600101955050505050506128cd565b506114f8565b60005b6004811015612c8357612b2f8660c001518760e00151886101000151896000015160a0015186612503906145df565b885160408101919091526020810191909152528551600090612b5090611155565b9050612b5d87828661358e565b15612b685750612c83565b600080612b8389898b60a00151612b7e906145df565b613a92565b91509150801580612b9c5750670de0b6b3a76400008210155b15612bb05760009650505050505050610b55565b612bc282670de0b6b3a7640000614516565b91506000612be18a604001518b6020015161205c90919063ffffffff16565b612beb858961199b565b612bf591906145bf565b90506000811315612c1f57612c0e87610ea3838661129b565b612c189087614529565b9550612c74565b6000811215612c6b576000612c3988610ea38681866145df565b905086811015612c5457612c4d8188614516565b9650612c65565b600098505050505050505050610b55565b50612c74565b50505050612c83565b84600101945050505050612b00565b50949350505050565b6040516001600160a01b03838116602483015260448201839052611c7991859182169063a9059cbb90606401612100565b600081600003612cd65750670de0b6b3a7640000610b55565b82600003612ce657506000610b55565b816000612cf285613bd1565b9050818102612d09670de0b6b3a7640000826146cd565b905061285881613de4565b6000612d296001600160a01b03841683613f6f565b90508051600014158015612d4e575080806020019051810190612d4c91906146fb565b155b15611c7957604051635274afe760e01b81526001600160a01b0384166004820152602401612490565b6000806000846001600160a01b031684604051612d949190614718565b6000604051808303816000865af19150503d8060008114612dd1576040519150601f19603f3d011682016040523d82523d6000602084013e612dd6565b606091505b5091509150818015612e00575080511580612e00575080806020019051810190612e0091906146fb565b80156100e15750505050506001600160a01b03163b151590565b6000806000612e3c84610140015185610120015161199b90919063ffffffff16565b61010085015160e0860151612e509161205c565b612e5a91906145bf565b90506000612e7085600001518660200151612071565b90506000821315612f73576000829050600080612ec1886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000612eb29190614516565b8d606001518e60800151613607565b9150915080612eda575060009788975095505050505050565b828210612f2f576000612f14858a60400151868c60c00151670de0b6b3a7640000612f059190614516565b8d606001518e60800151613f7d565b9050612f1f816145df565b9960019950975050505050505050565b6000886020015112612f625760a0880151612f4a9085614516565b612f53906145df565b98600198509650505050505050565b60a08801518851612f4a9190614516565b6000821215613049576000612f87836145df565b90506000612fbb8388604001518960c00151670de0b6b3a7640000612fac9190614516565b8a606001518b608001516130dc565b9050818110612ff7576000612f53848960400151858b60c00151670de0b6b3a7640000612fe89190614516565b8c606001518d60800151613fa2565b60006130298489604001518a60c00151670de0b6b3a764000061301a9190614516565b8b606001518c6080015161407a565b905061303f88606001518385610ea39190614516565b612f539082614529565b506000946001945092505050565b6000613086826101000151670de0b6b3a76400006130759190614516565b606084015160e085015191906120a5565b6130b4836101400151670de0b6b3a76400006130a29190614516565b6060850151610120860151919061127d565b610b5591906145bf565b6000818311611d1d5782610dfd565b60008183116124a85781610dfd565b6000806130ec8787878787614109565b90506000613117670de0b6b3a7640000613106878761129b565b6131109190614529565b83906123a3565b9050670de0b6b3a7640000811061314b5761314461313d670de0b6b3a7640000886123a3565b8290612cbd565b9050613163565b61316061313d670de0b6b3a76400008861129b565b90505b61316d8188614516565b98975050505050505050565b8251608081015160609091015160009182916131e891670de0b6b3a7640000916131a29161129b565b6131ac9190614529565b610100870151875160c001516131e29188916131d090670de0b6b3a7640000614516565b8a516060810151608090910151614109565b906123a3565b9050670de0b6b3a7640000811061322f57845160c001516132289061313d9061321990670de0b6b3a7640000614516565b670de0b6b3a7640000906123a3565b9050613261565b845160c0015161325e9061313d9061324f90670de0b6b3a7640000614516565b670de0b6b3a76400009061129b565b90505b61326b8382614529565b905060008560e00151126132c7576132c06132b961329a8760c001518860e001516123a390919063ffffffff16565b6132ac90670de0b6b3a7640000614516565b610100880151908761127d565b82906123a3565b90506132f8565b6132f56132b96132e38760c001518860e00151610ea3906145df565b6132ac90670de0b6b3a7640000614529565b90505b8460c00151811061330d576000915050610dfd565b808560c001516100e19190614516565b815180516020909101516000918291829161333791612071565b855160c081015160409091015191925060009161336e916133629161335b91612cbd565b879061205c565b6101008801519061129b565b865160c08101516080909101516133999161338d9161209f908761205c565b8851606001519061129b565b6133a39190614529565b905060006133e283886000015160400151896000015160c00151670de0b6b3a76400006133d09190614516565b8a516060810151608090910151614138565b9050670de0b6b3a764000081106134395761343261342b613424896000015160c00151670de0b6b3a76400006134189190614516565b8a5160c001519061129b565b8390612cbd565b839061199b565b915061346d565b61346a61342b613424896000015160c00151670de0b6b3a764000061345e9190614516565b8a5160c00151906123a3565b91505b6134bd612237613492896000015160c00151670de0b6b3a76400006132199190614516565b89516080810151606090910151670de0b6b3a7640000916134b391906123a3565b61209f9190614529565b915060006134d9878961010001516123a390919063ffffffff16565b90508083116134f3576134ec8382614516565b9250613503565b6000809550955050505050613587565b60008860e001511261354d576135468361352e8a60c001518b60e0015161129b90919063ffffffff16565b61354090670de0b6b3a7640000614516565b9061205c565b925061357c565b613579836135678a60c001518b60e001516131e2906145df565b61354090670de0b6b3a7640000614529565b92505b509093506001925050505b9250929050565b6000806135a884866020015161129b90919063ffffffff16565b905060006135c386604001518561129b90919063ffffffff16565b9050818110156135d857600092505050610dfd565b81811015801561285857506135fc61342b633b9aca00670de0b6b3a7640000614529565b101595945050505050565b60008060008812156136295761361c886145df565b6136269087614529565b95505b60006136358a8a612071565b90506000613646828a898989614138565b9050600061366361365b8961209f898d61205c565b8890886120a5565b61366d9083614516565b9050670de0b6b3a7640000811061369a5761369361313d670de0b6b3a76400008a61129b565b90506136b2565b6136af61313d670de0b6b3a76400008a6123a3565b90505b898110156136c957600080945094505050506136dd565b6136d38a82614516565b6001945094505050505b97509795505050505050565b825180516020909101516000918291829161370391612071565b9050600061374061373461372d896000015160c00151888b600001516040015161209f9190614529565b889061205c565b6101008901519061129b565b875160c0810151604090910151613771916137659161375e91612cbd565b899061199b565b6101008a0151906123a3565b885160c081015160809091015161379c916137909161209f908861199b565b8a5160600151906123a3565b6137a69190614529565b6137b09190614516565b905060006137ef838960000151604001518a6000015160c00151670de0b6b3a76400006137dd9190614516565b8b516060810151608090910151614109565b90506000613823896000015160c00151670de0b6b3a76400006138129190614516565b8a516040015161209f908a90614529565b90508082101561383d5760008095509550505050506100c7565b61385e61384a8284614516565b8a51606081015160809091015191906120a5565b9050670de0b6b3a764000081106138a257885160c0015161389b9061313d9061388f90670de0b6b3a7640000614516565b8b5160c00151906123a3565b90506138d1565b885160c001516138ce9061313d906138c290670de0b6b3a7640000614516565b8b5160c001519061129b565b90505b8851606001516138e490849083906120a5565b925082670de0b6b3a76400001061390e5761390783670de0b6b3a7640000614516565b925061391f565b6000600195509550505050506100c7565b60008960e0015112613969576139626139498a60c001518b60e001516123a390919063ffffffff16565b61395b90670de0b6b3a7640000614516565b849061199b565b9250613997565b6139946139828a60c001518b60e00151610ea3906145df565b61395b90670de0b6b3a7640000614529565b92505b5090976001975095505050505050565b60008060008360e00151136139c157506000928392509050565b60c083015183515260e083015183516020015261010083015183516040015282516000906139ee90613057565b90506000808212613a3057604085015160608601518391613a1f91613a139082614529565b602089015191906120a5565b613a299190614516565b9050613a5f565b613a39826145df565b60408601516060870151613a529190613a139082614529565b613a5c9190614529565b90505b60e085015160c0860151613a749183906120a5565b9050808560c00151613a869190614516565b95600195509350505050565b8251805160209091015160009182918291613aac91612071565b90506000613ad661373461372d896000015160c00151888b600001516040015161209f9190614516565b875160c0810151604090910151613af4916137659161375e91612cbd565b885160c0810151608090910151613b13916137909161209f908861199b565b613b1d9190614529565b613b279190614516565b90506000613b54838960000151604001518a6000015160c00151670de0b6b3a76400006137dd9190614516565b90506000613b88896000015160c00151670de0b6b3a7640000613b779190614516565b8a516040015161209f908a90614516565b905080821015613ba25760008095509550505050506100c7565b613baf61384a8284614516565b9050885160c0015161389b9061313d9061388f90670de0b6b3a7640000614516565b6000808213613bf35760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213613dff57506000919050565b680755bf798b4a1bf1e58212613e28576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6060610dfd8383600061415d565b600080613f8e8888888888886141f0565b909250905080611990576119906000612475565b600080613fb28888878787614109565b905085871015613fc657613fc66000612475565b613fd48561209f888a614516565b965086811015613fe857613fe86000612475565b60006140008486613ff98b86614516565b91906120a5565b9050670de0b6b3a7640000811061402d5761402661313d670de0b6b3a7640000886123a3565b9050614045565b61404261313d670de0b6b3a76400008861129b565b90505b61404f81856123a3565b905088811015614063576140636000612475565b61406d8982614516565b9998505050505050505050565b60008061408a8787878787614138565b905060006140ae670de0b6b3a76400006140a487876123a3565b6122379190614529565b9050670de0b6b3a764000081106140db576140d461313d670de0b6b3a76400008861129b565b90506140f3565b6140f061313d670de0b6b3a7640000886123a3565b90505b6140fd818561129b565b905061316d8882614516565b60006141158585612cbd565b61412e6141268661209f868b61205c565b8590856120a5565b6100de9190614529565b60006141448585612cbd565b61412e6141558661209f868b61199b565b85908561127d565b6060814710156141825760405163cd78605960e01b8152306004820152602401612490565b600080856001600160a01b0316848660405161419e9190614718565b60006040518083038185875af1925050503d80600081146141db576040519150601f19603f3d011682016040523d82523d6000602084013e6141e0565b606091505b50915091506128588683836142b2565b60008060006142028989888888614109565b90506142128661209f898b614529565b9750878110156142295760008092509250506142a7565b600061423a8587613ff98c86614516565b9050670de0b6b3a764000081106142675761426061313d670de0b6b3a7640000896123a3565b905061427f565b61427c61313d670de0b6b3a76400008961129b565b90505b61428981866123a3565b9050808a11156142a05761429d818b614516565b93505b6001925050505b965096945050505050565b6060826142c7576142c28261430e565b610dfd565b81511580156142de57506001600160a01b0384163b155b1561430757604051639996b31560e01b81526001600160a01b0385166004820152602401612490565b5080610dfd565b80511561431e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806143a861433a565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215611d1d57600080fd5b60008060006060848603121561440d57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561443257600080fd5b61443e868287016143e6565b9150509250925092565b600080600080600060a0868803121561446057600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561449357600080fd5b61449f888289016143e6565b9150509295509295909350565b6000602082840312156144be57600080fd5b81356001600160a01b0381168114610dfd57600080fd5b801515811461433757600080fd5b6000602082840312156144f557600080fd5b8135610dfd816144d5565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b5557610b55614500565b80820180821115610b5557610b55614500565b60006020828403121561454e57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261457a5761457a614555565b500690565b6001600160701b0381811683821601908082111561118557611185614500565b6001600160801b0381811683821601908082111561118557611185614500565b818103600083128015838313168383128216171561118557611185614500565b6000600160ff1b82016145f4576145f4614500565b5060000390565b6001600160801b0382811682821603908082111561118557611185614500565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610b5557610b55614500565b8082028115828204841417610b5557610b55614500565b600081600f0b60016001607f1b0319810361467c5761467c614500565b60000392915050565b80820182811260008312801582168215821617156127a5576127a5614500565b60208101600483106146c757634e487b7160e01b600052602160045260246000fd5b91905290565b6000826146dc576146dc614555565b600160ff1b8214600019841416156146f6576146f6614500565b500590565b60006020828403121561470d57600080fd5b8151610dfd816144d5565b6000825160005b81811015614739576020818601810151858301520161471f565b50600092019182525091905056fea264697066735822122090ed19743ba27a14a0d331f9fbb62eebc504588c2cee868f0bf70b871af8c11364736f6c63430008140033",
        "sourceMap": "633:375:26:-:0;;;865:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:120;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1315:16:23;;;633:375:26;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1376::-;1366:6;1374;1418:9;1409:7;1405:23;1448:3;1444:2;1440:12;1437:32;;;1465:1;1462;1455:12;1437:32;1488:6;1514:2;1510;1506:11;1503:31;;;1530:1;1527;1520:12;1503:31;1556:17;;:::i;:::-;1543:30;;1596:48;1634:9;1596:48;:::i;:::-;1589:5;1582:63;1677:57;1730:2;1719:9;1715:18;1677:57;:::i;:::-;1672:2;1665:5;1661:14;1654:81;1788:2;1777:9;1773:18;1767:25;1762:2;1755:5;1751:14;1744:49;1846:2;1835:9;1831:18;1825:25;1820:2;1813:5;1809:14;1802:49;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;2025:3;2014:9;2010:19;2004:26;1998:3;1991:5;1987:15;1980:51;2085:3;2074:9;2070:19;2064:26;2058:3;2051:5;2047:15;2040:51;2110:3;2166:2;2155:9;2151:18;2145:25;2140:2;2133:5;2129:14;2122:49;;2190:3;2225:57;2278:2;2267:9;2263:18;2225:57;:::i;:::-;2209:14;;;2202:81;2302:3;2337:57;2375:18;;;2337:57;:::i;:::-;2321:14;;;2314:81;2414:3;2449:62;2503:7;2483:18;;;2449:62;:::i;:::-;2444:2;2437:5;2433:14;2426:86;;2531:5;2521:15;;2555:57;2608:2;2597:9;2593:18;2555:57;:::i;:::-;2545:67;;;;1242:1376;;;;;:::o;:::-;633:375:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106100345760003560e01c8063074a6de9146100395780634c2ac1d914610073578063cbc1343414610094575b600080fd5b34801561004557600080fd5b506100596100543660046143f8565b6100b4565b604080519283526020830191909152015b60405180910390f35b610086610081366004614448565b6100cf565b60405190815260200161006a565b3480156100a057600080fd5b506100596100af3660046143f8565b6100ea565b6000806100c28585856100f8565b915091505b935093915050565b60006100de86868686866101c9565b90505b95945050505050565b6000806100c2858585610574565b6000806101036106cd565b600061010d6106f7565b905061012061011a61078f565b826107c5565b5061012a81610b5b565b61013686828787610c98565b909350915061014860208501856144ac565b6001600160a01b03167f4492130ff6e87856efd8de86ccdc4c634fac84a63dbc7846c38eaf0728a8538a8361017e868589610dd2565b61018987868a610e04565b61019960408a0160208b016144e3565b604080519485526020850193909352918301521515606082015260800160405180910390a2506100c76001600055565b60006101d36106cd565b600554610100900460ff16156101fc576040516321081abf60e01b815260040160405180910390fd5b610204610e2c565b7f00000000000000000000000000000000000000000000000000000000000000008610156102455760405163211ddda360e11b815260040160405180910390fd5b60006102cd610252610e4d565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e6e565b9050848110806102dc57508381115b156102fa57604051633b61151160e11b815260040160405180910390fd5b6000806103078986610eb4565b9150915061031661011a61078f565b50600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610362916001600160801b0390911690614516565b6000808052600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e8549192509061039d908390614529565b905060008060006103ad86611042565b90506103b881611155565b91506103c38761118c565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526103f581611155565b9250818310156104185760405163184d952160e11b815260040160405180910390fd5b61042e84836104278187614516565b919061127d565b98507f00000000000000000000000000000000000000000000000000000000000000008910156104715760405163211ddda360e11b815260040160405180910390fd5b508b61047d8e8a61129b565b101561049c5760405163c972651760e01b815260040160405180910390fd5b6104b460006104ae60208c018c6144ac565b8a6112b0565b6104bd85610b5b565b600083156104d4576104cf828561129b565b6104d7565b60005b905060006104e68f888d610dd2565b90506104f560208c018c6144ac565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868b838b8f602001602081019061053591906144e3565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a25050505050505050506100e16001600055565b60008061057f6106cd565b7f00000000000000000000000000000000000000000000000000000000000000008510156105c05760405163211ddda360e11b815260040160405180910390fd5b60006105ca6106f7565b90506105d761011a61078f565b506105e460003388611359565b6105ff600360f81b6105f960208701876144ac565b886112b0565b61060881610b5b565b600061061687838888610c98565b90945090506106258188614516565b925061063460208601866144ac565b6001600160a01b03167f831a8ce8c82bacaff5219cca17a2b0e4c06cbc095e8fd04474159cf27364bc588861066a87868a610dd2565b61067588878b610e04565b61068560408b0160208c016144e3565b8861068f8961143c565b6040805196875260208701959095529385019290925215156060840152608083015260a082015260c00160405180910390a250506100c76001600055565b6002600054036106f057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610766573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078a919061453c565b905090565b60006107bb7f00000000000000000000000000000000000000000000000000000000000000004261456b565b61078a9042614516565b600082815260076020526040812080546001600160801b03161515806107ea57504284115b1561080057546001600160801b03169050610b55565b61080983611500565b81546001600160801b0319166001600160801b039190911617815561082d8361152a565b506000905060078161085f7f000000000000000000000000000000000000000000000000000000000000000088614516565b815260208101919091526040016000908120546001600160801b031691506108886002876116d3565b6000818152600c602052604081205491925081156109c1575060016000806108b2848a8884611708565b9150915080600960008282546108c89190614529565b909155506108dc905084600084808e6117d6565b6108e68183614529565b91506109168483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611950565b915061092a610925838b61199b565b6119b0565b6005805460029061094b9084906201000090046001600160701b031661457f565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061097882611500565b6005805460109061099a908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109ce60018a6116d3565b6000818152600c60205260409020549091508015610ad657600192506000806109fa838c8a6001611708565b915091508060096000828254610a109190614529565b909155508c9050610a258460008580856119d6565b610a2f8284614516565b9250610a3e610925848e61199b565b60058054600290610a5f9084906201000090046001600160701b031661457f565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8c83611500565b60058054601090610aae908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610af957610af0610ae985836145bf565b6000611bcb565b610af989610b5b565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a8684610b278e61143c565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610ba6916001600160801b0390911690614516565b905080600003610bb4575050565b6000610bbf83611c7e565b905080600003610bce57505050565b600080610be4610bdf848688611d23565b611dfc565b91509150610bf182611500565b60068054600090610c0c9084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c3981611500565b60068054601090610c5b908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c9181610c8c906145df565b61118c565b5050505050565b60065460009085906001600160801b031680821115610cbe57806001600160801b031691505b81600003610cd3576000809250925050610dc9565b610ce2600360f81b3384611359565b6006546001600160801b03600160801b909104811690600090610d0a9085908490861661127d565b9050610d1584611500565b610d1f90846145fb565b600680546001600160801b0319166001600160801b0392909216919091179055610d4881611500565b60068054601090610d6a908490600160801b90046001600160801b03166145fb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d99818988611e93565b945084610da6888661205c565b1115610dc55760405163c972651760e01b815260040160405180910390fd5b5050505b94509492505050565b6000610de460408301602084016144e3565b15610df0575082610dfd565b610dfa848461199b565b90505b9392505050565b6000610e1660408301602084016144e3565b15610e2557610dfa848461129b565b5082610dfd565b3415610e4b57604051631574f9f360e01b815260040160405180910390fd5b565b60015460035460009161078a916001600160801b0390911690600f0b612071565b600080610e7d8787878661208e565b9050610ea9610e9182866301e133806120a5565b610ea383670de0b6b3a7640000614516565b9061129b565b979650505050505050565b600080610ec760408401602085016144e3565b15610ff957610f016001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330876120cb565b610f617f0000000000000000000000000000000000000000000000000000000000000000610f30866001614529565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612138565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610fce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff2919061453c565b9150611031565b8391506110316001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856120cb565b6110396106f7565b90509250929050565b61104a61433a565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e0820152600454909161010083019161111b91166121c8565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261114d929004166121c8565b905292915050565b60008060006111638461223e565b91509150806111855760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806111de8686867f00000000000000000000000000000000000000000000000000000000000000008b6122b8565b925092509250858314611215576111f483611500565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146112465761122582612365565b600380546001600160801b0319166001600160801b03929092169190911790555b8381146112745761125681611500565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b600082600019048411830215820261129457600080fd5b5091020490565b6000610dfd83670de0b6b3a76400008461127d565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906112e2908490614529565b90915550506000838152600c602052604081208054839290611305908490614529565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600b602090815260408083206001600160a01b038616845290915290205481111561139c57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906113ce908490614516565b90915550506000838152600c6020526040812080548392906113f1908490614516565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161134c565b6000806000831161144e576000611469565b6114698361146361145e86611042565b611155565b9061199b565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916114d49190614529565b6114de9190614516565b905080156114f5576114f0828261129b565b6114f8565b60005b949350505050565b6000600160801b821061152657604051630f0af95160e11b815260040160405180910390fd5b5090565b600554600090819061154d908490600160801b90046001600160801b031661199b565b6005546201000090046001600160701b031692509050818111156116ce5760006115778383614516565b905061158b61158682866123a3565b611500565b600580546010906115ad908490600160801b90046001600160801b03166145fb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115e6858361129b90919063ffffffff16565b90506000611614827f000000000000000000000000000000000000000000000000000000000000000061199b565b905080600960008282546116289190614529565b9091555061163890508183614516565b915061164382611500565b6001805460009061165e9084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168b82611500565b600380546000906116a0908490600f0b61461b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156116fd5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611715868661129b565b91506000611743837f000000000000000000000000000000000000000000000000000000000000000061199b565b905061176f817f000000000000000000000000000000000000000000000000000000000000000061199b565b91508315611792576117818282614516565b61178b9084614516565b92506117a9565b61179c8282614516565b6117a69084614529565b92505b848610156117cc576117bc83878761127d565b92506117c982878761127d565b91505b5094509492505050565b600354600160801b90046001600160801b031661181f6115868261180285670de0b6b3a7640000614648565b600454600160801b90046001600160801b031691908a60006123b8565b600480546001600160801b03928316600160801b02921691909117905561184586611500565b61184f90826145fb565b600380546001600160801b03928316600160801b02921691909117905561187584611500565b600180546000906118909084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118bd83612365565b600380546000906118d2908490600f0b61461b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061190285611500565b60018054601090611924908490600160801b90046001600160801b03166145fb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061196284610ea38a888a61127d565b905061196f88848661127d565b6119799082614529565b9050868111156119905761198d8782614516565b91505b509695505050505050565b6000610dfd8383670de0b6b3a764000061127d565b6000600160701b82106115265760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a1857507f0000000000000000000000000000000000000000000000000000000000000000611a168583614516565b105b15611a2757611a276003612475565b611a318482614516565b600354909150600f0b611a4484826145bf565b90508385138015611a7d57507f0000000000000000000000000000000000000000000000000000000000000000611a7b8383612071565b105b15611a8c57611a8c6001612475565b600254600160801b90046001600160801b0316611ace61158682611ab887670de0b6b3a7640000614648565b6004546001600160801b031691908c60006123b8565b600480546001600160801b0319166001600160801b0392909216919091179055611af88882614516565b9050611b0381611500565b600280546001600160801b03928316600160801b029216919091179055611b2983611500565b600180546001600160801b0319166001600160801b0392909216919091179055611b5282612365565b600380546001600160801b0319166001600160801b0392909216919091179055611b7b87611500565b60018054601090611b9d908490600160801b90046001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611bf4611bda8483612499565b611be5846000612499565b611bef91906145bf565b612365565b9050600081600f0b1315611c495760028054829190600090611c209084906001600160801b031661459f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611c7957611c5e8161465f565b60028054600090611c209084906001600160801b03166145fb565b505050565b6002546000908190611c99906001600160801b0316846123a3565b9050611cc57f000000000000000000000000000000000000000000000000000000000000000082614529565b6001546001600160801b03161115611d1d576001547f000000000000000000000000000000000000000000000000000000000000000090611d109083906001600160801b0316614516565b611d1a9190614516565b91505b50919050565b611d2b614394565b6000611d3683611042565b90506000611d4382611155565b90506000611d6483610140015184610120015161199b90919063ffffffff16565b61010084015160e0850151611d789161205c565b611d8291906145bf565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b6000806000611e138460c001518560e00151612071565b90506000611e2185836124af565b90506000611e2f86836127ad565b905080600003611e4757506000958695509350505050565b85606001518111611e5c579590945092505050565b5060608501516000611e6e8785612862565b905080600003611e875750600096879650945050505050565b90969095509350505050565b600080611ea0858561199b565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015611f08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2c919061453c565b945084600003611f40576000915050610dfd565b611f5060408401602085016144e3565b1561200f576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765286611f9260208701876144ac565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611fe4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612008919061453c565b9150612054565b61205061201f60208501856144ac565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169087612c8c565b8491505b509392505050565b6000610dfd8383670de0b6b3a76400006120a5565b60008061207e83856145bf565b90506000811215610dfd57600080fd5b60006100e18261209f85888861127d565b90612cbd565b60008260001904841183021582026120bc57600080fd5b50910281810615159190040190565b6040516001600160a01b0384811660248301528381166044830152606482018390526121329186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612d14565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526121898482612d77565b612132576040516001600160a01b038481166024830152600060448301526121be91869182169063095ea7b390606401612100565b6121328482612d14565b600080670de0b6b3a76400006121dc61078f565b6121e69190614648565b90508083116121f6576000612200565b6122008184614516565b9150611d1a612237670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614648565b839061129b565b600080600080600061224f86612e1a565b915091508061226657506000958695509350505050565b8560a0015161227487613057565b8751612281908590614685565b61228b9190614685565b61229591906145bf565b9250505060008112156122ae5750600093849350915050565b9360019350915050565b6000806000836000036122d257508691508590508461235a565b60006122de858a614685565b9050858112156123015760405163585fe6df60e11b815260040160405180910390fd5b8093506000881261231e5761231784898b61127d565b925061233e565b61233261232a896145df565b85908b61127d565b61233b906145df565b92505b6123568761234c8b8b612071565b6104278787612071565b9150505b955095509592505050565b600060016001607f1b03198212801590612386575060016001607f1b038213155b6115265760405163a5353be560e01b815260040160405180910390fd5b6000610dfd83670de0b6b3a7640000846120a5565b6000826000036123c95750846100e1565b811561243b576123fa6123dc8487614529565b6123e6858761199b565b6123f0888a61199b565b610ea39190614529565b9050600061240885886130be565b9050600061241686896130cd565b90508183101561242857819250612434565b80831115612434578092505b50506100e1565b82850361244a575060006100e1565b6100de6124578487614516565b612461858761205c565b61246b888a61199b565b610ea39190614516565b80604051633c06d78b60e11b815260040161249091906146a5565b60405180910390fd5b60008183136124a85781610dfd565b5090919050565b6000808360a00151126124c757506080820151610b55565b60008360a001516124d7906145df565b90506125088460c001518560e00151866101000151876000015160a001518860800151612503906145df565b6122b8565b865160408101919091526020808201929092529190915284518051910151600091612568916125379190612071565b8651604081015160c09091015161255690670de0b6b3a7640000614516565b885160608101516080909101516130dc565b905081811061257e575050506080820151610b55565b50600061258c858584613179565b905060005b6003811015612708576125c08660c001518760e00151886101000151896000015160a0015186612503906145df565b885160408101919091526020808201929092529190915286518051910151600091612620916125ef9190612071565b8851604081015160c09091015161260e90670de0b6b3a7640000614516565b8a5160608101516080909101516130dc565b905060008061262f898961331d565b915091508061264057505050612708565b8583111561269c5784965061266c620f4240670de0b6b3a76400006126659190614529565b879061199b565b831161267d57505050505050610b55565b61268b82610ea38886614516565b6126959086614529565b94506126e6565b858310156126d85760006126b483610ea3868a614516565b90508581106126c65750505050612708565b6126d08187614516565b9550506126e6565b849650505050505050610b55565b88608001518511156126fa57886080015194505b836001019350505050612591565b508281146127a5576127368560c001518660e00151876101000151886000015160a0015185612503906145df565b875160408101919091526020808201929092529190915285518051910151600091612796916127659190612071565b8751604081015160c09091015161278490670de0b6b3a7640000614516565b895160608101516080909101516130dc565b90508281106127a3578193505b505b505092915050565b60006127d58360c001518460e00151856101000151866000015160a0015186612503906145df565b85516040810191909152602081019190915252825160009081906127f89061223e565b9150915080158061280d575084602001518210155b1561281d57600092505050610b55565b6000856060015186604001516128339190614529565b905061284e8387602001518361127d9092919063ffffffff16565b6128589082614516565b9695505050505050565b600080836060015184604001516128799190614529565b90508360a001516000036128a3576060840151602085015161289b918361127d565b915050610b55565b602084015160608501516000916128bb91908461127d565b905060008560a001511315612afd5760005b6004811015612af7576128fc8660c001518760e00151886101000151896000015160a0015186612503906145df565b88516040810191909152602081019190915252855160009061291d90611155565b905061292a87828661358e565b156129355750612af7565b865180516020820151604083015160a084015160c0909401516000948594612982949093909290919061297090670de0b6b3a7640000614516565b8e516060810151608090910151613607565b915091508061299357505050612af7565b6000828a60a00151116129f6576129af8a8a8c60a001516136e9565b925090508115806129c85750670de0b6b3a76400008110155b156129dd576000975050505050505050610b55565b6129ef81670de0b6b3a7640000614516565b9050612a28565b6129ff8a6139a7565b909650915081612a19576000975050505050505050610b55565b85975050505050505050610b55565b6000612a458b604001518c6020015161205c90919063ffffffff16565b612a4f868a61199b565b612a5991906145bf565b90506000811315612a8957612a78612a71838a61205c565b829061129b565b612a829088614529565b9650612ae7565b6000811215612add576000612aaa612aa1848b61205c565b610ea3846145df565b905087811015612ac557612abe8189614516565b9750612ad7565b60009950505050505050505050610b55565b50612ae7565b5050505050612af7565b85600101955050505050506128cd565b506114f8565b60005b6004811015612c8357612b2f8660c001518760e00151886101000151896000015160a0015186612503906145df565b885160408101919091526020810191909152528551600090612b5090611155565b9050612b5d87828661358e565b15612b685750612c83565b600080612b8389898b60a00151612b7e906145df565b613a92565b91509150801580612b9c5750670de0b6b3a76400008210155b15612bb05760009650505050505050610b55565b612bc282670de0b6b3a7640000614516565b91506000612be18a604001518b6020015161205c90919063ffffffff16565b612beb858961199b565b612bf591906145bf565b90506000811315612c1f57612c0e87610ea3838661129b565b612c189087614529565b9550612c74565b6000811215612c6b576000612c3988610ea38681866145df565b905086811015612c5457612c4d8188614516565b9650612c65565b600098505050505050505050610b55565b50612c74565b50505050612c83565b84600101945050505050612b00565b50949350505050565b6040516001600160a01b03838116602483015260448201839052611c7991859182169063a9059cbb90606401612100565b600081600003612cd65750670de0b6b3a7640000610b55565b82600003612ce657506000610b55565b816000612cf285613bd1565b9050818102612d09670de0b6b3a7640000826146cd565b905061285881613de4565b6000612d296001600160a01b03841683613f6f565b90508051600014158015612d4e575080806020019051810190612d4c91906146fb565b155b15611c7957604051635274afe760e01b81526001600160a01b0384166004820152602401612490565b6000806000846001600160a01b031684604051612d949190614718565b6000604051808303816000865af19150503d8060008114612dd1576040519150601f19603f3d011682016040523d82523d6000602084013e612dd6565b606091505b5091509150818015612e00575080511580612e00575080806020019051810190612e0091906146fb565b80156100e15750505050506001600160a01b03163b151590565b6000806000612e3c84610140015185610120015161199b90919063ffffffff16565b61010085015160e0860151612e509161205c565b612e5a91906145bf565b90506000612e7085600001518660200151612071565b90506000821315612f73576000829050600080612ec1886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000612eb29190614516565b8d606001518e60800151613607565b9150915080612eda575060009788975095505050505050565b828210612f2f576000612f14858a60400151868c60c00151670de0b6b3a7640000612f059190614516565b8d606001518e60800151613f7d565b9050612f1f816145df565b9960019950975050505050505050565b6000886020015112612f625760a0880151612f4a9085614516565b612f53906145df565b98600198509650505050505050565b60a08801518851612f4a9190614516565b6000821215613049576000612f87836145df565b90506000612fbb8388604001518960c00151670de0b6b3a7640000612fac9190614516565b8a606001518b608001516130dc565b9050818110612ff7576000612f53848960400151858b60c00151670de0b6b3a7640000612fe89190614516565b8c606001518d60800151613fa2565b60006130298489604001518a60c00151670de0b6b3a764000061301a9190614516565b8b606001518c6080015161407a565b905061303f88606001518385610ea39190614516565b612f539082614529565b506000946001945092505050565b6000613086826101000151670de0b6b3a76400006130759190614516565b606084015160e085015191906120a5565b6130b4836101400151670de0b6b3a76400006130a29190614516565b6060850151610120860151919061127d565b610b5591906145bf565b6000818311611d1d5782610dfd565b60008183116124a85781610dfd565b6000806130ec8787878787614109565b90506000613117670de0b6b3a7640000613106878761129b565b6131109190614529565b83906123a3565b9050670de0b6b3a7640000811061314b5761314461313d670de0b6b3a7640000886123a3565b8290612cbd565b9050613163565b61316061313d670de0b6b3a76400008861129b565b90505b61316d8188614516565b98975050505050505050565b8251608081015160609091015160009182916131e891670de0b6b3a7640000916131a29161129b565b6131ac9190614529565b610100870151875160c001516131e29188916131d090670de0b6b3a7640000614516565b8a516060810151608090910151614109565b906123a3565b9050670de0b6b3a7640000811061322f57845160c001516132289061313d9061321990670de0b6b3a7640000614516565b670de0b6b3a7640000906123a3565b9050613261565b845160c0015161325e9061313d9061324f90670de0b6b3a7640000614516565b670de0b6b3a76400009061129b565b90505b61326b8382614529565b905060008560e00151126132c7576132c06132b961329a8760c001518860e001516123a390919063ffffffff16565b6132ac90670de0b6b3a7640000614516565b610100880151908761127d565b82906123a3565b90506132f8565b6132f56132b96132e38760c001518860e00151610ea3906145df565b6132ac90670de0b6b3a7640000614529565b90505b8460c00151811061330d576000915050610dfd565b808560c001516100e19190614516565b815180516020909101516000918291829161333791612071565b855160c081015160409091015191925060009161336e916133629161335b91612cbd565b879061205c565b6101008801519061129b565b865160c08101516080909101516133999161338d9161209f908761205c565b8851606001519061129b565b6133a39190614529565b905060006133e283886000015160400151896000015160c00151670de0b6b3a76400006133d09190614516565b8a516060810151608090910151614138565b9050670de0b6b3a764000081106134395761343261342b613424896000015160c00151670de0b6b3a76400006134189190614516565b8a5160c001519061129b565b8390612cbd565b839061199b565b915061346d565b61346a61342b613424896000015160c00151670de0b6b3a764000061345e9190614516565b8a5160c00151906123a3565b91505b6134bd612237613492896000015160c00151670de0b6b3a76400006132199190614516565b89516080810151606090910151670de0b6b3a7640000916134b391906123a3565b61209f9190614529565b915060006134d9878961010001516123a390919063ffffffff16565b90508083116134f3576134ec8382614516565b9250613503565b6000809550955050505050613587565b60008860e001511261354d576135468361352e8a60c001518b60e0015161129b90919063ffffffff16565b61354090670de0b6b3a7640000614516565b9061205c565b925061357c565b613579836135678a60c001518b60e001516131e2906145df565b61354090670de0b6b3a7640000614529565b92505b509093506001925050505b9250929050565b6000806135a884866020015161129b90919063ffffffff16565b905060006135c386604001518561129b90919063ffffffff16565b9050818110156135d857600092505050610dfd565b81811015801561285857506135fc61342b633b9aca00670de0b6b3a7640000614529565b101595945050505050565b60008060008812156136295761361c886145df565b6136269087614529565b95505b60006136358a8a612071565b90506000613646828a898989614138565b9050600061366361365b8961209f898d61205c565b8890886120a5565b61366d9083614516565b9050670de0b6b3a7640000811061369a5761369361313d670de0b6b3a76400008a61129b565b90506136b2565b6136af61313d670de0b6b3a76400008a6123a3565b90505b898110156136c957600080945094505050506136dd565b6136d38a82614516565b6001945094505050505b97509795505050505050565b825180516020909101516000918291829161370391612071565b9050600061374061373461372d896000015160c00151888b600001516040015161209f9190614529565b889061205c565b6101008901519061129b565b875160c0810151604090910151613771916137659161375e91612cbd565b899061199b565b6101008a0151906123a3565b885160c081015160809091015161379c916137909161209f908861199b565b8a5160600151906123a3565b6137a69190614529565b6137b09190614516565b905060006137ef838960000151604001518a6000015160c00151670de0b6b3a76400006137dd9190614516565b8b516060810151608090910151614109565b90506000613823896000015160c00151670de0b6b3a76400006138129190614516565b8a516040015161209f908a90614529565b90508082101561383d5760008095509550505050506100c7565b61385e61384a8284614516565b8a51606081015160809091015191906120a5565b9050670de0b6b3a764000081106138a257885160c0015161389b9061313d9061388f90670de0b6b3a7640000614516565b8b5160c00151906123a3565b90506138d1565b885160c001516138ce9061313d906138c290670de0b6b3a7640000614516565b8b5160c001519061129b565b90505b8851606001516138e490849083906120a5565b925082670de0b6b3a76400001061390e5761390783670de0b6b3a7640000614516565b925061391f565b6000600195509550505050506100c7565b60008960e0015112613969576139626139498a60c001518b60e001516123a390919063ffffffff16565b61395b90670de0b6b3a7640000614516565b849061199b565b9250613997565b6139946139828a60c001518b60e00151610ea3906145df565b61395b90670de0b6b3a7640000614529565b92505b5090976001975095505050505050565b60008060008360e00151136139c157506000928392509050565b60c083015183515260e083015183516020015261010083015183516040015282516000906139ee90613057565b90506000808212613a3057604085015160608601518391613a1f91613a139082614529565b602089015191906120a5565b613a299190614516565b9050613a5f565b613a39826145df565b60408601516060870151613a529190613a139082614529565b613a5c9190614529565b90505b60e085015160c0860151613a749183906120a5565b9050808560c00151613a869190614516565b95600195509350505050565b8251805160209091015160009182918291613aac91612071565b90506000613ad661373461372d896000015160c00151888b600001516040015161209f9190614516565b875160c0810151604090910151613af4916137659161375e91612cbd565b885160c0810151608090910151613b13916137909161209f908861199b565b613b1d9190614529565b613b279190614516565b90506000613b54838960000151604001518a6000015160c00151670de0b6b3a76400006137dd9190614516565b90506000613b88896000015160c00151670de0b6b3a7640000613b779190614516565b8a516040015161209f908a90614516565b905080821015613ba25760008095509550505050506100c7565b613baf61384a8284614516565b9050885160c0015161389b9061313d9061388f90670de0b6b3a7640000614516565b6000808213613bf35760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213613dff57506000919050565b680755bf798b4a1bf1e58212613e28576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6060610dfd8383600061415d565b600080613f8e8888888888886141f0565b909250905080611990576119906000612475565b600080613fb28888878787614109565b905085871015613fc657613fc66000612475565b613fd48561209f888a614516565b965086811015613fe857613fe86000612475565b60006140008486613ff98b86614516565b91906120a5565b9050670de0b6b3a7640000811061402d5761402661313d670de0b6b3a7640000886123a3565b9050614045565b61404261313d670de0b6b3a76400008861129b565b90505b61404f81856123a3565b905088811015614063576140636000612475565b61406d8982614516565b9998505050505050505050565b60008061408a8787878787614138565b905060006140ae670de0b6b3a76400006140a487876123a3565b6122379190614529565b9050670de0b6b3a764000081106140db576140d461313d670de0b6b3a76400008861129b565b90506140f3565b6140f061313d670de0b6b3a7640000886123a3565b90505b6140fd818561129b565b905061316d8882614516565b60006141158585612cbd565b61412e6141268661209f868b61205c565b8590856120a5565b6100de9190614529565b60006141448585612cbd565b61412e6141558661209f868b61199b565b85908561127d565b6060814710156141825760405163cd78605960e01b8152306004820152602401612490565b600080856001600160a01b0316848660405161419e9190614718565b60006040518083038185875af1925050503d80600081146141db576040519150601f19603f3d011682016040523d82523d6000602084013e6141e0565b606091505b50915091506128588683836142b2565b60008060006142028989888888614109565b90506142128661209f898b614529565b9750878110156142295760008092509250506142a7565b600061423a8587613ff98c86614516565b9050670de0b6b3a764000081106142675761426061313d670de0b6b3a7640000896123a3565b905061427f565b61427c61313d670de0b6b3a76400008961129b565b90505b61428981866123a3565b9050808a11156142a05761429d818b614516565b93505b6001925050505b965096945050505050565b6060826142c7576142c28261430e565b610dfd565b81511580156142de57506001600160a01b0384163b155b1561430757604051639996b31560e01b81526001600160a01b0385166004820152602401612490565b5080610dfd565b80511561431e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806143a861433a565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215611d1d57600080fd5b60008060006060848603121561440d57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561443257600080fd5b61443e868287016143e6565b9150509250925092565b600080600080600060a0868803121561446057600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561449357600080fd5b61449f888289016143e6565b9150509295509295909350565b6000602082840312156144be57600080fd5b81356001600160a01b0381168114610dfd57600080fd5b801515811461433757600080fd5b6000602082840312156144f557600080fd5b8135610dfd816144d5565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b5557610b55614500565b80820180821115610b5557610b55614500565b60006020828403121561454e57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261457a5761457a614555565b500690565b6001600160701b0381811683821601908082111561118557611185614500565b6001600160801b0381811683821601908082111561118557611185614500565b818103600083128015838313168383128216171561118557611185614500565b6000600160ff1b82016145f4576145f4614500565b5060000390565b6001600160801b0382811682821603908082111561118557611185614500565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610b5557610b55614500565b8082028115828204841417610b5557610b55614500565b600081600f0b60016001607f1b0319810361467c5761467c614500565b60000392915050565b80820182811260008312801582168215821617156127a5576127a5614500565b60208101600483106146c757634e487b7160e01b600052602160045260246000fd5b91905290565b6000826146dc576146dc614555565b600160ff1b8214600019841416156146f6576146f6614500565b500590565b60006020828403121561470d57600080fd5b8151610dfd816144d5565b6000825160005b81811015614739576020818601810151858301520161471f565b50600092019182525091905056fea264697066735822122090ed19743ba27a14a0d331f9fbb62eebc504588c2cee868f0bf70b871af8c11364736f6c63430008140033",
        "sourceMap": "633:375:26:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4461:362:17;;;;;;;;;;-1:-1:-1;4461:362:17;;;;;:::i;:::-;;:::i;:::-;;;;845:25:182;;;901:2;886:18;;879:34;;;;818:18;4461:362:17;;;;;;;;2076:438;;;;;;:::i;:::-;;:::i;:::-;;;1705:25:182;;;1693:2;1678:18;2076:438:17;1559:177:182;3517:242:17;;;;;;;;;;-1:-1:-1;3517:242:17;;;;;:::i;:::-;;:::i;4461:362::-;4635:7;4644;4682:134;4723:17;4758:18;4794:8;4682:23;:134::i;:::-;4663:153;;;;4461:362;;;;;;;:::o;2076:438::-;2292:16;2339:168;2370:13;2401:16;2435:7;2460;2485:8;2339:13;:168::i;:::-;2320:187;;2076:438;;;;;;;;:::o;3517:242::-;3668:7;3677;3703:49;3720:9;3731:10;3743:8;3703:16;:49::i;13910:1331:66:-;14122:16;14140:32;2356:21:120;:19;:21::i;:::-;14221:23:66::1;14247:21;:19;:21::i;:::-;14221:47;;14278:54;14295:19;:17;:19::i;:::-;14316:15;14278:16;:54::i;:::-;;14457:38;14479:15;14457:21;:38::i;:::-;14609:155;14654:17;14685:15;14714:18;14746:8;14609:31;:155::i;:::-;14570:194:::0;;-1:-1:-1;14570:194:66;-1:-1:-1;14864:20:66::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;14828:352:66::1;;14898:24;14936:61;14961:8;14971:15;14988:8;14936:24;:61::i;:::-;15011:130;15060:8;15086:15;15119:8;15011:31;:130::i;:::-;15155:15;::::0;;;::::1;::::0;::::1;;:::i;:::-;14828:352;::::0;;2626:25:182;;;2682:2;2667:18;;2660:34;;;;2710:18;;;2703:34;2780:14;2773:22;2768:2;2753:18;;2746:50;2613:3;2598:19;14828:352:66::1;;;;;;;15191:43;2398:20:120::0;1713:1;2924:7;:21;2744:208;5691:4815:66;5925:16;2356:21:120;:19;:21::i;:::-;3349::64;;::::1;::::0;::::1;;;3345:85;;;3393:26;;-1:-1:-1::0;;;3393:26:64::1;;;;;;;;;;;3345:85;6020:20:66::2;:18;:20::i;:::-;6070:25;6054:13;:41;6050:117;;;6118:38;;-1:-1:-1::0;;;6118:38:66::2;;;;;;;;;;;6050:117;6216:11;6230:213;6275:25;:23;:25::i;:::-;6314:12;:25:::0;-1:-1:-1;;;6314:25:66;::::2;-1:-1:-1::0;;;;;6314:25:66::2;6353:23;6390:17;6421:12;6230:31;:213::i;:::-;6216:227;;6463:7;6457:3;:13;:30;;;;6480:7;6474:3;:13;6457:30;6453:92;;;6510:24;;-1:-1:-1::0;;;6510:24:66::2;;;;;;;;;;;6453:92;6624:19;6645:23:::0;6672:67:::2;6694:13;6721:8;6672;:67::i;:::-;6623:116;;;;6783:54;6800:19;:17;:19::i;6783:54::-;-1:-1:-1::0;7366:13:66::2;:29:::0;-1:-1:-1;;;7255:35:66::2;7293:70:::0;;;:12:::2;:70;::::0;;;7255:35;;7293:102:::2;::::0;-1:-1:-1;;;;;7366:29:66;;::::2;::::0;7293:102:::2;:::i;:::-;7405:21;7429:34:::0;;;:12:::2;:34;::::0;;;7255:140;;-1:-1:-1;7405:21:66;7429:76:::2;::::0;7255:140;;7429:76:::2;:::i;:::-;7405:100;;7570:26;7606:28:::0;7731:39:::2;7773:69;7813:15;7773:22;:69::i;:::-;7731:111;;7879:36;7908:6;7879:28;:36::i;:::-;7856:59;;8038:37;8062:11;8038:16;:37::i;:::-;8112:12;:26:::0;-1:-1:-1;;;;;8112:26:66;;::::2;8089:49:::0;;8177:28;;::::2;;8152:22;::::0;::::2;:53:::0;-1:-1:-1;;;8241:25:66;;::::2;;8219:19;::::0;::::2;:47:::0;8301:36:::2;8089:6:::0;8301:28:::2;:36::i;:::-;8280:57;;8454:20;8433:18;:41;8429:141;;;8501:54;;-1:-1:-1::0;;;8501:54:66::2;;;;;;;;;;;8429:141;9065:137;9137:13:::0;9168:20;9066:41:::2;9168:20:::0;9066:18;:41:::2;:::i;:::-;9065:54:::0;:137;:54:::2;:137::i;:::-;9054:148;;9317:25;9306:8;:36;9302:120;;;9369:38;;-1:-1:-1::0;;;9369:38:66::2;;;;;;;;;;;9302:120;-1:-1:-1::0;9618:16:66;9584:31:::2;:13:::0;9606:8;9584:21:::2;:31::i;:::-;:50;9580:113;;;9657:25;;-1:-1:-1::0;;;9657:25:66::2;;;;;;;;;;;9580:113;9746:59;554:1:71;9774:20:66;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;9796:8;9746:5;:59::i;:::-;9878:38;9900:15;9878:21;:38::i;:::-;9966:20;9989:18:::0;;:158:::2;;10104:43;:20:::0;10133:13;10104:28:::2;:43::i;:::-;9989:158;;;10022:1;9989:158;9966:181;;10157:24;10184:112;10222:13;10249:15;10278:8;10184:24;:112::i;:::-;10157:139:::0;-1:-1:-1;10337:20:66::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;-1:-1:-1::0;;;;;10311:188:66::2;;10371:8;10393:16;10423:11;10448:8;:15;;;;;;;;;;:::i;:::-;10311:188;::::0;;3587:25:182;;;3643:2;3628:18;;3621:34;;;;3671:18;;;3664:34;3741:14;3734:22;3729:2;3714:18;;3707:50;3788:3;3773:19;;3766:35;;;3574:3;3559:19;10311:188:66::2;;;;;;;5943:4563;;;;;;;;;2398:20:120::0;1713:1;2924:7;:21;2744:208;11357:1813:66;11554:16;11572:24;2356:21:120;:19;:21::i;:::-;11628:25:66::1;11616:9;:37;11612:113;;;11676:38;;-1:-1:-1::0;;;11676:38:66::1;;;;;;;;;;;11612:113;11768:23;11794:21;:19;:21::i;:::-;11768:47;;11825:54;11842:19;:17;:19::i;11825:54::-;;11923:50;554:1:71;11951:10:66;11963:9;11923:5;:50::i;:::-;12043:120;-1:-1:-1::0;;;12110:20:66::1;;::::0;::::1;::::0;::::1;:::i;:::-;12144:9;12043:5;:120::i;:::-;12232:38;12254:15;12232:21;:38::i;:::-;12345:32;12426:147;12471:9;12494:15;12523:18;12555:8;12426:31;:147::i;:::-;12387:186:::0;;-1:-1:-1;12387:186:66;-1:-1:-1;12602:36:66::1;12387:186:::0;12602:9;:36:::1;:::i;:::-;12583:55:::0;-1:-1:-1;12724:20:66::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;12695:422:66::1;;12758:9;12781:61;12806:8;12816:15;12833:8;12781:24;:61::i;:::-;12856:130;12905:8;12931:15;12964:8;12856:31;:130::i;:::-;13000:15;::::0;;;::::1;::::0;::::1;;:::i;:::-;13037:16;13068:39;13091:15;13068:22;:39::i;:::-;12695:422;::::0;;4093:25:182;;;4149:2;4134:18;;4127:34;;;;4177:18;;;4170:34;;;;4247:14;4240:22;4235:2;4220:18;;4213:50;4294:3;4279:19;;4272:35;4338:3;4323:19;;4316:35;4080:3;4065:19;12695:422:66::1;;;;;;;13128:35;;2398:20:120::0;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:120;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;6024:123:23:-;6113:27;;-1:-1:-1;;;6113:27:23;;150:4:73;6113:27:23;;;1705:25:182;6087:7:23;;6113:6;-1:-1:-1;;;;;6113:22:23;;;;1678:18:182;;6113:27:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6106:34;;6024:123;:::o;5348:223:64:-;5424:24;5526:37;5544:19;5526:15;:37;:::i;:::-;5495:69;;:15;:69;:::i;3209:6723:65:-;3335:7;3467:51;;;:12;:51;;;;;3545:27;;-1:-1:-1;;;;;3545:27:65;:32;;;:81;;;3611:15;3593;:33;3545:81;3528:168;;;3658:27;-1:-1:-1;;;;;3658:27:65;;-1:-1:-1;3651:34:65;;3528:168;3788:28;:16;:26;:28::i;:::-;3758:58;;-1:-1:-1;;;;;;3758:58:65;-1:-1:-1;;;;;3758:58:65;;;;;;;3903:40;3926:16;3903:22;:40::i;:::-;-1:-1:-1;4407:27:65;;-1:-1:-1;4437:12:65;4407:27;4463:35;4481:17;4463:15;:35;:::i;:::-;4437:71;;;;;;;;;;;-1:-1:-1;4437:71:65;;;:87;-1:-1:-1;;;;;4437:87:65;;-1:-1:-1;4557:101:65;4592:27;4633:15;4557:21;:101::i;:::-;4668:27;4698:26;;;:12;:26;;;;;;4534:124;;-1:-1:-1;4768:23:65;;4764:2272;;-1:-1:-1;4982:4:65;5145:21;;5222:190;5269:19;5310:16;5348:19;5145:21;5222:25;:190::i;:::-;5127:285;;;;5452:13;5426:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5479:235:65;;-1:-1:-1;5513:19:65;5550:1;5569:13;;5685:15;5479:16;:235::i;:::-;5948:30;5965:13;5948:30;;:::i;:::-;;;6376:254;6435:19;6472:13;6503:19;6540:16;6574;6608:8;6376:41;:254::i;:::-;6360:270;-1:-1:-1;6865:85:65;:56;6360:270;6904:16;6865:38;:56::i;:::-;:83;:85::i;:::-;6830:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6830:120:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6830:120:65;;;;;-1:-1:-1;;;;;6830:120:65;;;;;;7000:25;:13;:23;:25::i;:::-;6964:32;:61;;:32;;:61;;;;-1:-1:-1;;;6964:61:65;;-1:-1:-1;;;;;6964:61:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6964:61:65;;;;;-1:-1:-1;;;;;6964:61:65;;;;;;4793:2243;;4764:2272;7154:19;7176:100;7211:26;7251:15;7176:21;:100::i;:::-;7286:26;7315:25;;;:12;:25;;;;;;7154:122;;-1:-1:-1;7354:22:65;;7350:1594;;7566:4;7548:22;;7728:21;7767;7805:188;7852:18;7892:16;7930:19;7971:4;7805:25;:188::i;:::-;7710:283;;;;8033:13;8007:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8085:15:65;;-1:-1:-1;8144:232:65;8177:18;8060:22;8232:13;;8085:15;8144;:232::i;:::-;8510:30;8527:13;8510:30;;:::i;:::-;;-1:-1:-1;8773:85:65;:56;8510:30;8812:16;8773:38;:56::i;:85::-;8738:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8738:120:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8738:120:65;;;;;-1:-1:-1;;;;;8738:120:65;;;;;;8908:25;:13;:23;:25::i;:::-;8872:32;:61;;:32;;:61;;;;-1:-1:-1;;;8872:61:65;;-1:-1:-1;;;;;8872:61:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8872:61:65;;;;;-1:-1:-1;;;;;8872:61:65;;;;;;7378:1566;;;7350:1594;9095:15;9091:481;;;9315:126;9352:56;9388:19;9359:18;9352:56;:::i;:::-;9426:1;9315:19;:126::i;:::-;9522:39;9544:16;9522:21;:39::i;:::-;9717:15;9687:204;9746:16;9776:19;9809:18;9841:40;9864:16;9841:22;:40::i;:::-;9687:204;;;5636:25:182;;;5692:2;5677:18;;5670:34;;;;5720:18;;;5713:34;5778:2;5763:18;;5756:34;5623:3;5608:19;9687:204:65;;;;;;;9909:16;9902:23;;;;;;;;;3209:6723;;;;;:::o;18205:1329:66:-;18486:13;:29;-1:-1:-1;;;18375:35:66;18413:70;;;:12;:70;;;;18375:35;;18413:102;;-1:-1:-1;;;;;18486:29:66;;;;18413:102;:::i;:::-;18375:140;;18529:27;18560:1;18529:32;18525:69;;18577:7;18205:1329;:::o;18525:69::-;18680:12;18695:45;18723:16;18695:27;:45::i;:::-;18680:60;;18754:4;18762:1;18754:9;18750:46;;18779:7;;18205:1329;:::o;18750:46::-;18921:32;18955:21;18980:242;19047:161;19099:4;19125:27;19174:16;19047:30;:161::i;:::-;18980:49;:242::i;:::-;18920:302;;;;19313:36;:24;:34;:36::i;:::-;19280:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;19280:69:66;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19280:69:66;;;;;-1:-1:-1;;;;;19280:69:66;;;;;;19385:25;:13;:23;:25::i;:::-;19359:13;:51;;:22;;:51;;;;-1:-1:-1;;;19359:51:66;;-1:-1:-1;;;;;19359:51:66;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19359:51:66;;;;;-1:-1:-1;;;;;19359:51:66;;;;;;19487:40;19512:13;19504:22;;;:::i;:::-;19487:16;:40::i;:::-;18271:1263;;;;18205:1329;:::o;16025:1969::-;16572:13;:29;16237:16;;16518:17;;-1:-1:-1;;;;;16572:29:66;16615:43;;;16611:117;;;16701:16;-1:-1:-1;;;;;16674:43:66;;;16611:117;16741:24;16769:1;16741:29;16737:48;;16780:1;16783;16772:13;;;;;;;16737:48;16841:125;-1:-1:-1;;;16908:10:66;16932:24;16841:5;:125::i;:::-;17143:13;:22;-1:-1:-1;;;;;;;;17143:22:66;;;;;;17123:17;;17199:116;;:24;;17143:22;;17199:116;;:35;:116::i;:::-;17175:140;;17453:36;:24;:34;:36::i;:::-;17422:67;;:16;:67;:::i;:::-;17378:13;:111;;-1:-1:-1;;;;;;17378:111:66;-1:-1:-1;;;;;17378:111:66;;;;;;;;;;17525:25;:13;:23;:25::i;:::-;17499:13;:51;;:22;;:51;;;;-1:-1:-1;;;17499:51:66;;-1:-1:-1;;;;;17499:51:66;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17499:51:66;;;;;-1:-1:-1;;;;;17499:51:66;;;;;;17624:47;17634:13;17649:11;17662:8;17624:9;:47::i;:::-;17613:58;-1:-1:-1;17613:58:66;17814:50;:18;17839:24;17814;:50::i;:::-;:61;17810:124;;;17898:25;;-1:-1:-1;;;17898:25:66;;;;;;;;;;;17810:124;17944:43;;;16025:1969;;;;;;;;:::o;25501:391:64:-;25670:7;25693:15;;;;;;;;:::i;:::-;25689:197;;;-1:-1:-1;25731:7:64;25724:14;;25689:197;25842:33;:7;25858:16;25842:15;:33::i;:::-;25835:40;;25689:197;25501:391;;;;;:::o;26225:405::-;26401:7;26424:15;;;;;;;;:::i;:::-;26420:204;;;26535:33;:7;26551:16;26535:15;:33::i;26420:204::-;-1:-1:-1;26606:7:64;26599:14;;6265:145:23;6332:9;:14;6328:76;;6369:24;;-1:-1:-1;;;6369:24:23;;;;;;;;;;;6328:76;6265:145::o;5752:253:64:-;5912:12;:26;5956:28;;5810:7;;5848:150;;-1:-1:-1;;;;;5912:26:64;;;;5956:28;;5848:46;:150::i;4941:945:74:-;5174:11;5503:17;5523:155;5555:23;5592:13;5619:23;5656:12;5523:18;:155::i;:::-;5503:175;-1:-1:-1;5707:172:74;5818:47;5503:175;5837:17;5856:8;5818:18;:47::i;:::-;5708:15;5714:9;150:4:73;5708:15:74;:::i;:::-;5707:25;;:172::i;:::-;5688:191;4941:945;-1:-1:-1;;;;;;;4941:945:74:o;2066:1468:23:-;2213:20;;2278:15;;;;;;;;:::i;:::-;2274:1205;;;2361:141;-1:-1:-1;;;;;2375:10:23;2361:43;2422:10;2458:4;2481:7;2361:43;:141::i;:::-;2808:115;2873:6;2898:11;:7;2908:1;2898:11;:::i;:::-;-1:-1:-1;;;;;2822:10:23;2808:39;;:115;:39;:115::i;:::-;2952:38;;-1:-1:-1;;;2952:38:23;;;;;6321:25:182;;;2984:4:23;6362:18:182;;;6355:60;2952:6:23;-1:-1:-1;;;;;2952:14:23;;;;6294:18:182;;2952:38:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2937:53;;2274:1205;;;3244:7;;-1:-1:-1;3326:142:23;-1:-1:-1;;;;;3340:6:23;3326:39;3383:10;3419:4;3244:7;3326:39;:142::i;:::-;3506:21;:19;:21::i;:::-;3488:39;;2066:1468;;;;;:::o;9144:970:64:-;9239:39;;:::i;:::-;9299:808;;;;;;;;9354:12;:26;-1:-1:-1;;;;;9354:26:64;;;9299:808;;9411:28;;;;9299:808;;;;-1:-1:-1;;;9467:25:64;;;;;;9299:808;;;;;;;;;;;;;9577:23;9299:808;;;;9636:21;9299:808;;;;9684:12;9299:808;;;;9411:28;9728:29;;;;9299:808;;;;9844:36;;9299:808;;9354:26;9299:808;;;9797:97;;9844:36;9797:29;:97::i;:::-;9299:808;;9927:30;;-1:-1:-1;;;;;;;;9927:30:64;;;;;;9299:808;;;;10045:37;;9299:808;;;;;9998:98;;10045:37;;;9998:29;:98::i;:::-;9299:808;;9290:817;9144:970;-1:-1:-1;;9144:970:64:o;6170:342:75:-;6273:7;6293:20;6315:12;6331:56;6370:7;6331:25;:56::i;:::-;6292:95;;;;6402:7;6397:80;;6432:34;;-1:-1:-1;;;6432:34:75;;;;;;;;;;;6397:80;-1:-1:-1;6493:12:75;6170:342;-1:-1:-1;;6170:342:75:o;19711:1121:66:-;19852:12;:26;19914:28;;-1:-1:-1;;;;;19852:26:66;;;;19914:28;;;;;;-1:-1:-1;;;19976:25:66;;;19827:22;;;20150:218;19852:26;19914:28;19976:25;20296:21;20335:19;20150:31;:218::i;:::-;20011:357;;;;;;20443:14;20419:20;:38;20415:130;;20502:32;:20;:30;:32::i;:::-;20473:12;:61;;-1:-1:-1;;;;;;20473:61:66;-1:-1:-1;;;;;20473:61:66;;;;;;;;;;20415:130;20584:16;20558:22;:42;20554:137;;20647:33;:22;:31;:33::i;:::-;20616:28;:64;;-1:-1:-1;;;;;;20616:64:66;-1:-1:-1;;;;;20616:64:66;;;;;;;;;;20554:137;20727:13;20704:19;:36;20700:126;;20784:31;:19;:29;:31::i;:::-;20756:12;:59;;-1:-1:-1;;;;;20756:59:66;;;-1:-1:-1;;;20756:59:66;;;;;;;;;20700:126;19774:1058;;;;;;19711:1121;:::o;823:556:73:-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;5921:316:68:-;6038:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6038:23:68;;;;;;;;;:33;;6065:6;;6038:19;:33;;6065:6;;6038:33;:::i;:::-;;;;-1:-1:-1;;6081:21:68;;;;:12;:21;;;;;:31;;6106:6;;6081:21;:31;;6106:6;;6081:31;:::i;:::-;;;;-1:-1:-1;;6171:59:68;;;845:25:182;;;901:2;886:18;;879:34;;;-1:-1:-1;;;;;6171:59:68;;;6206:1;;6186:10;;6171:59;;818:18:182;6171:59:68;;;;;;;;5921:316;;;:::o;6509:563::-;6709:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6709:25:68;;;;;;;;;;:34;-1:-1:-1;6705:105:68;;;6766:33;;-1:-1:-1;;;6766:33:68;;;;;;;;;;;6705:105;6869:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6869:25:68;;;;;;;;;:35;;6898:6;;6869:19;:35;;6898:6;;6869:35;:::i;:::-;;;;-1:-1:-1;;6914:21:68;;;;:12;:21;;;;;:31;;6939:6;;6914:21;:31;;6939:6;;6914:31;:::i;:::-;;;;-1:-1:-1;;7004:61:68;;;845:25:182;;;901:2;886:18;;879:34;;;7045:1:68;;-1:-1:-1;;;;;7004:61:68;;;7019:10;;7004:61;;818:18:182;7004:61:68;671:248:182;18778:773:64;18873:20;18970;19012:1;18993:16;:20;:181;;19173:1;18993:181;;;19028:130;19141:16;19028:87;19074:40;19097:16;19074:22;:40::i;:::-;19028:45;:87::i;:::-;:112;;:130::i;:::-;19320:13;:29;19257:12;:48;;;;19184:21;19208:34;;;;;18970:204;;-1:-1:-1;19184:21:64;-1:-1:-1;;;;;19320:29:64;;;;19208:97;;19257:48;19208:97;:::i;:::-;:141;;;;:::i;:::-;19184:165;-1:-1:-1;19374:18:64;;:141;;19480:35;:12;19501:13;19480:20;:35::i;:::-;19374:141;;;19407:1;19374:141;19359:156;18778:773;-1:-1:-1;;;;18778:773:64:o;884:190:76:-;937:9;-1:-1:-1;;;964:1:76;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:76;;;;;;;;;;;958:86;-1:-1:-1;1065:1:76;884:190::o;15196:2551:64:-;15555:32;;15302:26;;;;15517:80;;:16;;-1:-1:-1;;;15555:32:64;;-1:-1:-1;;;;;15555:32:64;15517:24;:80::i;:::-;15628:31;;;;;-1:-1:-1;;;;;15628:31:64;;-1:-1:-1;15496:101:64;-1:-1:-1;15802:39:64;;;15798:1943;;;16007:22;16032:39;16053:18;16032;:39;:::i;:::-;16007:64;-1:-1:-1;16344:84:64;:55;16007:64;16382:16;16344:37;:55::i;:::-;:82;:84::i;:::-;16308:32;:120;;:32;;:120;;;;-1:-1:-1;;;16308:120:64;;-1:-1:-1;;;;;16308:120:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;16308:120:64;;;;;-1:-1:-1;;;;;16308:120:64;;;;;;16728:28;16759:70;16799:16;16759:14;:22;;:70;;;;:::i;:::-;16728:101;-1:-1:-1;16843:36:64;16882:80;16728:101;16928:20;16882:28;:80::i;:::-;16843:119;;17002:28;16976:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;17307:52:64;;-1:-1:-1;17331:28:64;17307:52;;:::i;:::-;;;17403:32;:20;:30;:32::i;:::-;17373:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;17373:62:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17373:62:64;;;;;-1:-1:-1;;;;;17373:62:64;;;;;;17505:32;:20;:30;:32::i;:::-;17449:28;:102;;:28;;:102;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17449:102:64;;;;;;;-1:-1:-1;;;;;17449:102:64;;;;;;17712:18;17691:39;;15843:1898;;;15798:1943;15196:2551;;;:::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;10496:2398:65:-;10683:21;;11089:37;:11;11109:16;11089:19;:37::i;:::-;11073:53;-1:-1:-1;11136:15:65;11154:31;11073:53;11176:8;11154:21;:31::i;:::-;11136:49;-1:-1:-1;11211:33:65;11136:49;11227:16;11211:15;:33::i;:::-;11195:49;;11671:7;11667:557;;;11711:23;11721:13;11711:7;:23;:::i;:::-;11694:40;;;;:::i;:::-;;;11667:557;;;12190:23;12200:13;12190:7;:23;:::i;:::-;12173:40;;;;:::i;:::-;;;11667:557;12442:20;12423:16;:39;12419:469;;;12557:110;:13;12599:16;12633:20;12557:24;:110::i;:::-;12541:126;-1:-1:-1;12767:110:65;:13;12809:16;12843:20;12767:24;:110::i;:::-;12751:126;;12419:469;10729:2165;10496:2398;;;;;;;:::o;14619:1128:69:-;14921:30;;-1:-1:-1;;;14921:30:69;;-1:-1:-1;;;;;14921:30:69;15001:301;:276;14921:30;15158:20;:13;15174:4;15158:20;:::i;:::-;15022:37;;-1:-1:-1;;;15022:37:69;;-1:-1:-1;;;;;15022:37:69;;;15229:11;15258:5;15001:103;:276::i;:301::-;14961:37;:341;;-1:-1:-1;;;;;14961:341:69;;;-1:-1:-1;;;14961:341:69;;;;;;;;;15445:23;:11;:21;:23::i;:::-;15412:56;;:18;:56;:::i;:::-;15367:30;:101;;-1:-1:-1;;;;;15367:101:69;;;-1:-1:-1;;;15367:101:69;;;;;;;;;15566:31;:19;:29;:31::i;:::-;15536:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;15536:61:69;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15536:61:69;;;;;-1:-1:-1;;;;;15536:61:69;;;;;;15639:32;:21;:30;:32::i;:::-;15607:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15607:64:69;;;;;;;-1:-1:-1;;;;;15607:64:69;;;;;;15710:30;:18;:28;:30::i;:::-;15681:12;:59;;:25;;:59;;;;-1:-1:-1;;;15681:59:69;;-1:-1:-1;;;;;15681:59:69;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15681:59:69;;;;;-1:-1:-1;;;;;15681:59:69;;;;;;14831:916;14619:1128;;;;;:::o;13765:1632:74:-;14026:21;;14492:119;14594:16;14492:80;:11;14528:21;14551:20;14492:35;:80::i;:119::-;14471:140;-1:-1:-1;14862:50:74;:11;14885:8;14895:16;14862:22;:50::i;:::-;14848:64;;;;:::i;:::-;;;15228:12;15215:10;:25;15211:149;;;15324:25;15337:12;15324:10;:25;:::i;:::-;15308:41;;15211:149;15370:20;13765:1632;;;;;;;;:::o;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;527:190:76:-;580:9;-1:-1:-1;;;607:1:76;:12;601:86;;643:33;;-1:-1:-1;;;643:33:76;;;;;;;;;;;12565:3131:67;12949:12;:26;-1:-1:-1;;;;;12949:26:67;13002:35;;;;:110;;-1:-1:-1;13091:21:67;13053:35;13069:19;13053:13;:35;:::i;:::-;:59;13002:110;12985:289;;;13137:126;13193:56;13137:38;:126::i;:::-;13283:36;13300:19;13283:36;;:::i;:::-;13802:28;;13283:36;;-1:-1:-1;13802:28:67;;13840:40;13859:21;13802:28;13840:40;:::i;:::-;;;13937:21;13914:19;13907:51;:227;;;;;14113:21;13974:124;14038:13;14069:15;13974:46;:124::i;:::-;:160;13907:227;13890:461;;;14159:181;14215:111;14159:38;:181::i;:::-;14438:29;;-1:-1:-1;;;14438:29:67;;-1:-1:-1;;;;;14438:29:67;14516:298;:273;14438:29;14670:20;:13;14686:4;14670:20;:::i;:::-;14537:36;;-1:-1:-1;;;;;14537:36:67;;14516:273;14741:11;14770:5;14516:102;:273::i;:298::-;14477:36;:337;;-1:-1:-1;;;;;;14477:337:67;-1:-1:-1;;;;;14477:337:67;;;;;;;;;;14876:31;14896:11;14876:31;;:::i;:::-;;;14949:28;:16;:26;:28::i;:::-;14917:29;:60;;-1:-1:-1;;;;;14917:60:67;;;-1:-1:-1;;;14917:60:67;;;;;;;;;15528:25;:13;:23;:25::i;:::-;15499:12;:54;;-1:-1:-1;;;;;;15499:54:67;-1:-1:-1;;;;;15499:54:67;;;;;;;;;;15594:26;:15;:24;:26::i;:::-;15563:28;:57;;-1:-1:-1;;;;;;15563:57:67;-1:-1:-1;;;;;15563:57:67;;;;;;;;;;15659:30;:18;:28;:30::i;:::-;15630:12;:59;;:25;;:59;;;;-1:-1:-1;;;15630:59:67;;-1:-1:-1;;;;;15630:59:67;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15630:59:67;;;;;-1:-1:-1;;;;;15630:59:67;;;;;;12776:2920;;;12565:3131;;;;;:::o;12207:580:64:-;12511:12;12526:72;12558:14;:7;12511:12;12558:11;:14::i;:::-;12534:13;:6;12545:1;12534:10;:13::i;:::-;12527:46;;;;:::i;:::-;12526:70;:72::i;:::-;12511:87;;12620:1;12612:5;:9;;;12608:173;;;12637:25;:43;;12674:5;;12637:25;;;:43;;12674:5;;-1:-1:-1;;;;;12637:43:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12637:43:64;;;;;-1:-1:-1;;;;;12637:43:64;;;;;;12276:511;12207:580;;:::o;12608:173::-;12709:1;12701:5;:9;;;12697:84;;;12763:6;12764:5;12763:6;:::i;:::-;12726:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;12726:44:64;;:::i;12697:84::-;12276:511;12207:580;;:::o;18027:558::-;18248:25;;18127:18;;;;18240:80;;-1:-1:-1;;;;;18248:25:64;18294:16;18240:40;:80::i;:::-;18217:103;-1:-1:-1;18363:36:64;18378:21;18217:103;18363:36;:::i;:::-;18334:12;:26;-1:-1:-1;;;;;18334:26:64;:65;18330:222;;;18444:12;:26;18520:21;;18444:57;;18489:12;;-1:-1:-1;;;;;18444:26:64;:57;:::i;:::-;:97;;;;:::i;:::-;18415:126;;18330:222;18561:17;18027:558;;;:::o;7381:1570::-;7553:47;;:::i;:::-;7612:63;7678:70;7718:16;7678:22;:70::i;:::-;7612:136;;7758:28;7789:70;7831:18;7789:28;:70::i;:::-;7758:101;;8006:20;8214:128;8280:18;:44;;;8214:18;:36;;;:44;;:128;;;;:::i;:::-;8108:43;;;;8049:35;;;;:116;;:41;:116::i;:::-;8029:327;;;;:::i;:::-;8375:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;8552:34:64;;:12;:34;;;;8375:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8761:32:64;;8375:569;;;;8832:34;;;8375:569;;;;8902:31;;;;8375:569;;;;-1:-1:-1;8375:569:64;7381:1570;-1:-1:-1;7381:1570:64:o;18696:2575:75:-;18815:7;18824;18944:38;18985:169;19062:7;:29;;;19109:7;:31;;;18985:59;:169::i;:::-;18944:210;;19164:29;19196:105;19240:7;19261:30;19196;:105::i;:::-;19164:137;;19590:32;19625:131;19696:7;19721:21;19625:53;:131::i;:::-;19590:166;;19893:24;19921:1;19893:29;19889:743;;-1:-1:-1;19946:1:75;;;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;;18696:2575:75:o;19889:743::-;20227:7;:35;;;20199:24;:63;20182:450;;20295:24;20321:21;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;18696:2575:75:o;20182:450::-;-1:-1:-1;20586:35:75;;;;20891:21;20915:117;20971:7;20992:30;20915:42;:117::i;:::-;20891:141;;21046:13;21063:1;21046:18;21042:62;;-1:-1:-1;21088:1:75;;;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;;;18696:2575:75:o;21042:62::-;21224:24;;21250:13;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;;18696:2575:75:o;4345:1482:23:-;4498:23;;4835:28;:7;4851:11;4835:15;:28::i;:::-;4883:34;;-1:-1:-1;;;4883:34:23;;;;;1705:25:182;;;4814:49:23;;-1:-1:-1;4883:6:23;-1:-1:-1;;;;;4883:22:23;;;;1678:18:182;;4883:34:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4873:44;;5005:7;5016:1;5005:12;5001:51;;5040:1;5033:8;;;;;5001:51;5203:15;;;;;;;;:::i;:::-;5199:622;;;-1:-1:-1;;;;;5371:6:23;:13;;5402:7;5427:20;;;;:8;:20;:::i;:::-;5371:121;;-1:-1:-1;;;;;;5371:121:23;;;;;;;;;;7269:25:182;;;;-1:-1:-1;;;;;7368:15:182;7348:18;;;7341:43;5473:4:23;7400:18:182;;;7393:43;7242:18;;5371:121:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5353:139;;5199:622;;;5705:66;5741:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;5719:6:23;5705:35;;5763:7;5705:35;:66::i;:::-;5803:7;5785:25;;5199:622;4523:1304;4345:1482;;;;;:::o;3117:115:73:-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;6471:340:74:-;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;3774:531;3974:17;4180:118;4285:12;4180:87;:23;4228;4253:13;4180:47;:87::i;:::-;:104;;:118::i;2211:748:73:-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;1702:188:117:-;1829:53;;-1:-1:-1;;;;;7705:15:182;;;1829:53:117;;;7687:34:182;7757:15;;;7737:18;;;7730:43;7789:18;;;7782:34;;;1802:81:117;;1822:5;;1844:18;;;;;7622::182;;1829:53:117;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:117;;;;;;;;;;;1802:19;:81::i;:::-;1702:188;;;;:::o;3296:380::-;3411:47;;;-1:-1:-1;;;;;8019:32:182;;3411:47:117;;;8001:51:182;8068:18;;;;8061:34;;;3411:47:117;;;;;;;;;;7974:18:182;;;;3411:47:117;;;;;;;;-1:-1:-1;;;;;3411:47:117;-1:-1:-1;;;3411:47:117;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;8019:32:182;;;3561:43:117;;;8001:51:182;3601:1:117;8068:18:182;;;8061:34;3534:71:117;;3554:5;;3576:13;;;;;7974:18:182;;3561:43:117;7827:274:182;3534:71:117;3619:40;3639:5;3646:12;3619:19;:40::i;4785:450:64:-;4884:21;4917:24;150:4:73;4944:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;4917:52;;5011:16;4995:13;:32;:95;;5089:1;4995:95;;;5042:32;5058:16;5042:13;:32;:::i;:::-;4979:111;-1:-1:-1;5182:46:64;5204:23;150:4:73;5204:17:64;:23;:::i;:::-;5182:13;;:21;:46::i;6998:1166:75:-;7105:7;7114:4;7491:19;7535:20;7557:12;7573:65;7617:7;7573:26;:65::i;:::-;7534:104;;;;7657:7;7652:64;;-1:-1:-1;7692:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;;;6998:1166:75:o;7652:64::-;7896:7;:28;;;7840:30;7862:7;7840:21;:30::i;:::-;7767:21;;7760:61;;7808:13;;7760:61;:::i;:::-;:110;;;;:::i;:::-;:165;;;;:::i;:::-;7729:196;;7520:416;;8066:1;8051:12;:16;8047:64;;;-1:-1:-1;8091:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;8047:64::-;8137:12;8152:4;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;2119:3268::-;2390:21;2425:22;2461:20;2616:19;2639:1;2616:24;2612:111;;-1:-1:-1;2664:14:75;;-1:-1:-1;2680:16:75;;-1:-1:-1;2698:13:75;2656:56;;2612:111;2892:21;2916:44;2941:19;2923:14;2916:44;:::i;:::-;2892:68;;2998:21;2974:14;:46;2970:118;;;3043:34;;-1:-1:-1;;;3043:34:75;;;;;;;;;;;2970:118;3121:14;3097:39;;3711:1;3691:16;:21;3687:661;;3868:134;3876:13;3931:16;3970:14;3868:33;:134::i;:::-;3826:190;;3687:661;;;4188:135;4251:17;4252:16;4251:17;:::i;:::-;4196:13;;4291:14;4188:33;:135::i;:::-;4163:174;;;:::i;:::-;4145:192;;3687:661;5064:316;5197:13;5228:138;5296:14;5332:16;5228:46;:138::i;:::-;5064:91;5124:13;5139:15;5064:59;:91::i;:316::-;5049:331;;2496:2891;2119:3268;;;;;;;;;;:::o;1238:219:76:-;1289:8;-1:-1:-1;;;;;;1315:21:76;;;;;:46;;-1:-1:-1;;;;;;1340:21:76;;;1315:46;1309:119;;1385:32;;-1:-1:-1;;;1385:32:76;;;;;;;;;;;3390:115:73;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;12314:2102::-;12508:15;12608:12;12624:1;12608:17;12604:63;;-1:-1:-1;12648:8:73;12641:15;;12604:63;12925:9;12921:1489;;;13022:154;13131:27;13146:12;13131;:27;:::i;:::-;13072:28;:12;13093:6;13072:20;:28::i;:::-;13023:30;:12;13044:8;13023:20;:30::i;:::-;:77;;;;:::i;13022:154::-;13012:164;-1:-1:-1;13523:18:73;13544:20;:6;13555:8;13544:10;:20::i;:::-;13523:41;-1:-1:-1;13578:18:73;13599:20;:6;13610:8;13599:10;:20::i;:::-;13578:41;;13647:10;13637:7;:20;13633:164;;;13687:10;13677:20;;13633:164;;;13732:10;13722:7;:20;13718:79;;;13772:10;13762:20;;13718:79;12936:871;;12921:1489;;;14106:12;14090;:28;14086:75;;-1:-1:-1;14145:1:73;14138:8;;14086:75;14247:152;14354:27;14369:12;14354;:27;:::i;:::-;14297:26;:12;14316:6;14297:18;:26::i;:::-;14248:30;:12;14269:8;14248:20;:30::i;:::-;:75;;;;:::i;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;:::-;;;;;;;;15417:101:73;15473:6;15502:1;15498;:5;:13;;15510:1;15498:13;;;-1:-1:-1;15506:1:73;;15417:101;-1:-1:-1;15417:101:73:o;40422:9253:75:-;40591:29;40797:1;40772:7;:21;;;:26;40768:76;;-1:-1:-1;40821:12:75;;;;40814:19;;40768:76;40853:21;40886:7;:21;;;40885:22;;;:::i;:::-;40853:55;;41431:284;41473:7;:29;;;41520:7;:31;;;41569:7;:28;;;41615:7;:26;;;:47;;;41688:7;:12;;;41680:21;;;:::i;:::-;41431:24;:284::i;:::-;41257:26;;41375:39;;;41239:476;;;;41315:42;;;;41239:476;;;;;;;;41877:26;;:40;;41939:42;;;41257:26;;41753:506;;41809:190;;41877:40;41809:46;:190::i;:::-;42017:26;;:39;;;;42080:38;;;;;42074:44;;150:4:73;42074:44:75;:::i;:::-;42136:26;;:42;;;;42196:49;;;;;41753:38;:506::i;:::-;41729:530;;42488:13;42471;:30;42467:88;;-1:-1:-1;;;42528:12:75;;;;42521:19;;42467:88;41093:1472;42638:34;42675:161;42735:7;42760:31;42809:13;42675:42;:161::i;:::-;42638:198;;42914:9;42909:5389;1188:1;42929;:43;42909:5389;;;43321:298;43363:7;:29;;;43410:7;:31;;;43459:7;:28;;;43505:7;:26;;;:47;;;43578:26;43570:35;;;:::i;43321:298::-;43147:26;;43265:39;;;43129:490;;;;43205:42;;;;43129:490;;;;;;;;43781:26;;:40;;43843:42;;;43147:26;;43657:506;;43713:190;;43781:40;43713:46;:190::i;:::-;43921:26;;:39;;;;43984:38;;;;;43978:44;;150:4:73;43978:44:75;:::i;:::-;44040:26;;:42;;;;44100:49;;;;;43657:38;:506::i;:::-;43633:530;;44351:18;44387:12;44416:137;44475:7;44504:31;44416:37;:137::i;:::-;44333:220;;;;44572:7;44567:52;;44599:5;;;;;44567:52;44809:13;44793;:29;44789:3134;;;45044:26;45020:50;;45308:113;1374:3;150:4:73;45355:44:75;;;;:::i;:::-;45308:13;;:21;:113::i;:::-;45271:13;:150;45246:263;;45462:28;;;;;;;;45246:263;46374:51;46414:10;46375:29;46391:13;46375;:29;:::i;46374:51::-;46325:100;;:26;:100;:::i;:::-;46276:149;;44789:3134;;;46634:13;46618;:29;46614:1309;;;47416:13;47432:89;47493:10;47433:29;47449:13;47433;:29;:::i;47432:89::-;47416:105;;47552:26;47543:5;:35;47539:87;;47602:5;;;;;;47539:87;47672:34;47701:5;47672:26;:34;:::i;:::-;47643:63;;46649:1072;46614:1309;;;47882:26;47875:33;;;;;;;;;;46614:1309;48097:7;:12;;;48068:26;:41;48064:121;;;48158:7;:12;;;48129:41;;48064:121;48270:3;;;;;42976:5322;;;42909:5389;;;;48416:21;48386:26;:51;48382:1248;;48645:298;48687:7;:29;;;48734:7;:31;;;48783:7;:28;;;48829:7;:26;;;:47;;;48902:26;48894:35;;;:::i;48645:298::-;48471:26;;48589:39;;;48453:490;;;;48529:42;;;;48453:490;;;;;;;;49105:26;;:40;;49167:42;;;48471:26;;48981:506;;49037:190;;49105:40;49037:46;:190::i;:::-;49245:26;;:39;;;;49308:38;;;;;49302:44;;150:4:73;49302:44:75;:::i;:::-;49364:26;;:42;;;;49424:49;;;;;48981:38;:506::i;:::-;48957:530;;49522:13;49505;:30;49501:119;;49579:26;49555:50;;49501:119;48439:1191;48382:1248;49640:28;;40422:9253;;;;:::o;22132:1838::-;22312:7;22587:267;22625:7;:29;;;22668:7;:31;;;22713:7;:28;;;22755:7;:26;;;:47;;;22824:19;22816:28;;;:::i;22587:267::-;22425:26;;22535:39;;;22411:443;;;;22479:42;;;22411:443;;;;;22948:26;;22425;;;;22909:75;;:25;:75::i;:::-;22864:120;;;;23340:7;23339:8;:62;;;;23373:7;:28;;;23351:18;:50;;23339:62;23335:101;;;23424:1;23417:8;;;;;;23335:101;23685:21;23751:7;:35;;;23709:7;:27;;;:77;;;;:::i;:::-;23685:101;;23843:120;23885:18;23921:7;:28;;;23843:13;:24;;:120;;;;;:::i;:::-;23815:148;;:13;:148;:::i;:::-;23796:167;22132:1838;-1:-1:-1;;;;;;22132:1838:75:o;24613:10855::-;24794:7;24855:21;24921:7;:35;;;24879:7;:27;;;:77;;;;:::i;:::-;24855:101;;25033:7;:21;;;25058:1;25033:26;25029:293;;25223:35;;;;25162:28;;;;:149;;25280:13;25162:39;:149::i;:::-;25139:172;;;;;25029:293;25879:28;;;;25819:35;;;;25795:21;;25819:125;;:35;25921:13;25819:46;:125::i;:::-;25795:149;;26052:1;26028:7;:21;;;:25;26024:9407;;;26074:9;26069:5339;839:1;26089;:33;26069:5339;;;26478:309;26524:7;:29;;;26575:7;:31;;;26628:7;:28;;;26678:7;:26;;;:47;;;26755:13;26747:22;;;:::i;26478:309::-;26292:26;;26418:39;;;26270:517;;;;26354:42;;;26270:517;;;;;26871:26;;26292;;26828:87;;:21;:87::i;:::-;26805:110;;27032:183;27109:7;27142:12;27180:13;27032:51;:183::i;:::-;27007:273;;;27256:5;;;27007:273;27712:26;;:40;;27778:42;;;;27846:39;;;;27911:47;;;;27990:38;;;;;27584:21;;;;27623:570;;27712:40;;27778:42;;27846:39;;27911:47;27984:44;;150:4:73;27984:44:75;:::i;:::-;28054:26;;:42;;;;28122:49;;;;;27623:63;:570::i;:::-;27583:610;;;;28216:7;28211:60;;28247:5;;;;;28211:60;28288:18;28362:13;28336:7;:21;;;28328:47;28324:1308;;28493:212;28563:7;28596:31;28661:7;:21;;;28493:44;:212::i;:::-;28399:306;-1:-1:-1;28399:306:75;-1:-1:-1;28731:8:75;;;:29;;;150:4:73;28743:10:75;:17;;28731:29;28727:221;;;28924:1;28917:8;;;;;;;;;;;28727:221;28982:16;28988:10;150:4:73;28982:16:75;:::i;:::-;28969:29;;28324:1308;;;29234:116;29321:7;29234:61;:116::i;:::-;29137:213;;-1:-1:-1;29137:213:75;-1:-1:-1;29137:213:75;29372:200;;29548:1;29541:8;;;;;;;;;;;29372:200;29600:13;29593:20;;;;;;;;;;;28324:1308;30098:12;30211:117;30275:7;:27;;;30211:7;:28;;;:34;;:117;;;;:::i;:::-;30120:35;:12;30141:13;30120:20;:35::i;:::-;30113:237;;;;:::i;:::-;30098:252;;30380:1;30372:5;:9;30368:907;;;30561:55;30584:31;:10;30601:13;30584:16;:31::i;:::-;30569:5;;30561:22;:55::i;:::-;30521:95;;:13;:95;:::i;:::-;30481:135;;30368:907;;;30653:1;30645:5;:9;30641:634;;;30754:14;30771:102;30820:31;:10;30837:13;30820:16;:31::i;:::-;30779:6;30780:5;30779:6;:::i;30771:102::-;30754:119;;30908:13;30899:6;:22;30895:310;;;30965:22;30981:6;30965:13;:22;:::i;:::-;30949:38;;30895:310;;;31181:1;31174:8;;;;;;;;;;;;;30895:310;30656:567;30641:634;;;31251:5;;;;;;;30641:634;31372:3;;;;;26126:5282;;;;;26069:5339;;;;26024:9407;;;31496:9;31491:3930;839:1;31511;:33;31491:3930;;;31900:309;31946:7;:29;;;31997:7;:31;;;32050:7;:28;;;32100:7;:26;;;:47;;;32177:13;32169:22;;;:::i;31900:309::-;31714:26;;31840:39;;;31692:517;;;;31776:42;;;31692:517;;;;;32293:26;;31714;;32250:87;;:21;:87::i;:::-;32227:110;;32454:183;32531:7;32564:12;32602:13;32454:51;:183::i;:::-;32429:273;;;32678:5;;;32429:273;33027:18;33067:12;33100:213;33170:7;33203:31;33269:7;:21;;;33268:22;;;:::i;:::-;33100:44;:213::i;:::-;33005:308;;;;33336:7;33335:8;:29;;;;150:4:73;33347:10:75;:17;;33335:29;33331:205;;;33516:1;33509:8;;;;;;;;;;33331:205;33566:16;33572:10;150:4:73;33566:16:75;:::i;:::-;33553:29;;34049:12;34162:117;34226:7;:27;;;34162:7;:28;;;:34;;:117;;;;:::i;:::-;34071:35;:12;34092:13;34071:20;:35::i;:::-;34064:237;;;;:::i;:::-;34049:252;;34331:1;34323:5;:9;34319:969;;;34512:111;34584:13;34512:34;34520:5;34535:10;34512:22;:34::i;:111::-;34472:151;;:13;:151;:::i;:::-;34432:191;;34319:969;;;34660:1;34652:5;:9;34648:640;;;34761:14;34778:108;34872:13;34778:60;34827:10;34778:60;34787:5;34786:6;:::i;34778:108::-;34761:125;;34921:13;34912:6;:22;34908:310;;;34978:22;34994:6;34978:13;:22;:::i;:::-;34962:38;;34908:310;;;35194:1;35187:8;;;;;;;;;;;;34908:310;34663:573;34648:640;;;35264:5;;;;;;34648:640;35385:3;;;;;31548:3873;;;;31491:3930;;;;35448:13;24613:10855;-1:-1:-1;;;;24613:10855:75:o;1303:160:117:-;1412:43;;-1:-1:-1;;;;;8019:32:182;;;1412:43:117;;;8001:51:182;8068:18;;;8061:34;;;1385:71:117;;1405:5;;1427:14;;;;;7974:18:182;;1412:43:117;7827:274:182;3740:838:73;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;4059:629:117:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:117;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:117;;-1:-1:-1;;;;;9591:32:182;;4631:40:117;;;9573:51:182;9546:18;;4631:40:117;9427:203:182;5189:578:117;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:117;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:117;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:117;;:30;;;5189:578::o;8492:7050:75:-;8600:6;8608:4;9410:23;9569:106;9624:7;:33;;;9569:7;:25;;;:33;;:106;;;;:::i;:::-;9487:32;;;;9456:24;;;;:64;;:30;:64::i;:::-;9436:253;;;;:::i;:::-;9410:279;;9699:30;9732:153;9809:7;:21;;;9848:7;:23;;;9732:59;:153::i;:::-;9699:186;;10135:1;10116:16;:20;10112:5397;;;10152:25;10188:16;10152:53;;10394:21;10417:12;10433:401;10514:7;:21;;;10557:7;:23;;;10602:7;:20;;;10644:7;:28;;;10700:7;:19;;;150:4:73;10694:25:75;;;;:::i;:::-;10741:7;:23;;;10786:7;:30;;;10433:59;:401::i;:::-;10393:441;;;;10853:7;10848:64;;-1:-1:-1;10888:1:75;;;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;8492:7050:75:o;10848:64::-;11089:17;11072:13;:34;11068:2044;;11126:21;11150:385;11246:22;11294:7;:20;;;11340:17;11389:7;:19;;;150:4:73;11383:25:75;;;;:::i;:::-;11434:7;:23;;;11483:7;:30;;;11150:70;:385::i;:::-;11126:409;-1:-1:-1;11561:22:75;11126:409;11561:22;:::i;:::-;11553:37;11585:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;;8492:7050:75:o;11068:2044::-;12275:1;12248:7;:23;;;:28;12244:854;;12427:28;;;;12370:85;;:22;:85;:::i;:::-;12333:148;;;:::i;:::-;12300:233;12507:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;8492:7050:75:o;12244:854::-;12973:28;;;;12949:21;;:52;;12973:28;12949:52;:::i;10112:5397::-;13237:1;13218:16;:20;13214:2295;;;13254:25;13290:17;13291:16;13290:17;:::i;:::-;13254:54;;13425:21;13449:262;13505:22;13545:7;:20;;;13589:7;:19;;;150:4:73;13583:25:75;;;;:::i;:::-;13626:7;:23;;;13667:7;:30;;;13449:38;:262::i;:::-;13425:286;;13889:17;13872:13;:34;13868:1631;;13926:21;13950:383;14044:22;14092:7;:20;;;14138:17;14187:7;:19;;;150:4:73;14181:25:75;;;;:::i;:::-;14232:7;:23;;;14281:7;:30;;;13950:68;:383::i;13868:1631::-;14662:23;14688:331;14773:22;14821:7;:20;;;14873:7;:19;;;150:4:73;14867:25:75;;;;:::i;:::-;14918:7;:23;;;14967:7;:30;;;14688:59;:331::i;:::-;14662:357;;15288:130;15365:7;:23;;;15309:13;15289:17;:33;;;;:::i;15288:130::-;15242:176;;:15;:176;:::i;13214:2295::-;-1:-1:-1;15527:1:75;;15530:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;8492:7050:75:o;15789:1157::-;15892:6;16769:156;16830:7;:32;;;150:4:73;16824:38:75;;;;:::i;:::-;16884:23;;;;16769:24;;;;;:156;:33;:156::i;:::-;16556:160;16620:7;:33;;;150:4:73;16614:39:75;;;;:::i;:::-;16675:23;;;;16556:25;;;;;:160;:36;:160::i;:::-;16532:407;;;;:::i;14589:104:73:-;14647:7;14677:1;14673;:5;:13;;14685:1;14673:13;;14866:104;14924:7;14954:1;14950;:5;:13;;14962:1;14950:13;;13742:861:77;13901:7;14116:9;14128:20;14132:2;14136:1;14139;14142;14145:2;14128:3;:20::i;:::-;14116:32;-1:-1:-1;14158:16:77;14177:28;150:4:73;14185:13:77;:1;14195:2;14185:9;:13::i;:::-;:19;;;;:::i;:::-;14177:1;;:7;:28::i;:::-;14158:47;;150:4:73;14219:8:77;:15;14215:293;;14330:26;14343:12;150:4:73;14353:1:77;14343:9;:12::i;:::-;14330:8;;:12;:26::i;:::-;14319:37;;14215:293;;;14469:28;14482:14;150:4:73;14494:1:77;14482:11;:14::i;14469:28::-;14458:39;;14215:293;14584:12;14588:8;14584:1;:12;:::i;:::-;14577:19;13742:861;-1:-1:-1;;;;;;;;13742:861:77:o;50953:2775:75:-;51785:26;;:49;;;;51713:42;;;;;51166:7;;;;51347:525;;150:4:73;;51713:139:75;;:50;:139::i;:::-;:145;;;;:::i;:::-;51445:28;;;;51497:26;;:38;;;51347:329;;51396:31;;51491:44;;150:4:73;51491:44:75;:::i;:::-;51553:26;;:42;;;;51613:49;;;;;51347:31;:329::i;:::-;:348;;:525::i;:::-;51333:539;;150:4:73;51886:3:75;:10;51882:428;;52035:26;;:38;;;51994:94;;52019:55;;52029:44;;150:4:73;52029:44:75;:::i;:::-;150:4:73;;52019:9:75;:55::i;51994:94::-;51988:100;;51882:428;;;52246:26;;:38;;;52203:96;;52228:57;;52240:44;;150:4:73;52240:44:75;:::i;:::-;150:4:73;;52228:11:75;:57::i;52203:96::-;52197:102;;51882:428;52361:20;52367:14;52361:3;:20;:::i;:::-;52355:26;;52571:1;52536:7;:31;;;:36;52532:931;;52594:409;52696:293;52787:131;52863:7;:29;;;52795:7;:31;;;52787:46;;:131;;;;:::i;:::-;52757:161;;150:4:73;52757:161:75;:::i;:::-;52696:28;;;;;52940:31;52696:39;:293::i;:::-;52594:3;;:9;:409::i;:::-;52588:415;;52532:931;;;53040:412;53142:296;53233:134;53312:7;:29;;;53242:7;:31;;;53241:32;;;:::i;53233:134::-;53203:164;;150:4:73;53203:164:75;:::i;53040:412::-;53034:418;;52532:931;53606:7;:29;;;53599:3;:36;53595:75;;53658:1;53651:8;;;;;53595:75;53718:3;53686:7;:29;;;:35;;;;:::i;66411:4306::-;66891:26;;:40;;66949:42;;;;;66587:7;;;;;;66814:191;;:59;:191::i;:::-;67498:26;;:38;;;;67429:39;;;;;66781:224;;-1:-1:-1;67015:18:75;;67316:274;;67370:206;;67429:129;;:43;:129::i;:::-;67370:31;;:37;:206::i;:::-;67316:28;;;;;:36;:274::i;:::-;67252:26;;:38;;;;67100:83;;;;;67036:265;;67100:191;;:130;;67207:22;67100:106;:130::i;:191::-;67036:26;;:42;;;;:50;:265::i;:::-;:554;;;;:::i;:::-;67015:575;;67756:9;67768:296;67802:22;67838:7;:26;;;:39;;;67897:7;:26;;;:38;;;150:4:73;67891:44:75;;;;:::i;:::-;67949:26;;:42;;;;68005:49;;;;;67768:20;:296::i;:::-;67756:308;;150:4:73;68078:1:75;:8;68074:718;;68195:233;68231:183;68258:138;68336:7;:26;;;:38;;;150:4:73;68330:44:75;;;;:::i;:::-;68258:26;;:38;;;;:46;:138::i;:::-;68231:1;;:5;:183::i;:::-;68195:10;;:18;:233::i;:::-;68182:246;;68074:718;;;68550:231;68586:181;68613:136;68689:7;:26;;;:38;;;150:4:73;68683:44:75;;;;:::i;:::-;68613:26;;:38;;;;:44;:136::i;68550:231::-;68537:244;;68074:718;68976:568;69008:526;69461:55;69477:7;:26;;;:38;;;150:4:73;69471:44:75;;;;:::i;69461:55::-;69169:26;;:49;;;;69103:42;;;;;150:4:73;;69103:129:75;;:42;:48;:129::i;:::-;:135;;;;:::i;68976:568::-;68963:581;;69670:13;69686:89;69734:31;69686:7;:28;;;:34;;:89;;;;:::i;:::-;69670:105;;69847:5;69833:10;:19;69829:274;;69881:18;69889:10;69881:5;:18;:::i;:::-;69868:31;;69829:274;;;70083:1;70086:5;70075:17;;;;;;;;;;69829:274;70273:1;70238:7;:31;;;:36;70234:441;;70303:159;70451:10;70326:117;70396:7;:29;;;70334:7;:31;;;70326:48;;:117;;;;:::i;:::-;70304:139;;150:4:73;70304:139:75;:::i;:::-;70303:147;;:159::i;:::-;70290:172;;70234:441;;;70506:158;70653:10;70529:116;70598:7;:29;;;70538:7;:31;;;70537:32;;;:::i;70529:116::-;70507:138;;150:4:73;70507:138:75;:::i;70506:158::-;70493:171;;70234:441;-1:-1:-1;70693:10:75;;-1:-1:-1;70705:4:75;;-1:-1:-1;;;66411:4306:75;;;;;;:::o;38963:769::-;39167:4;39183:26;39212:74;39262:14;39212:7;:28;;;:36;;:74;;;;:::i;:::-;39183:103;;39296:25;39324:72;39359:7;:27;;;39324:13;:21;;:72;;;;:::i;:::-;39296:100;;39430:18;39410:17;:38;39406:81;;;39471:5;39464:12;;;;;;39406:81;39536:18;39515:17;:39;;:210;;;;-1:-1:-1;39663:62:75;39690:34;1005:3;150:4:73;39690:34:75;:::i;39663:62::-;-1:-1:-1;39570:155:75;;39496:229;-1:-1:-1;;;;;38963:769:75:o;15242:1794:77:-;15447:7;15456:4;15753:1;15746:4;:8;15742:67;;;15792:5;15793:4;15792:5;:::i;:::-;15777:21;;:4;:21;:::i;:::-;15770:28;;15742:67;16304:10;16317:55;16364:1;16367:4;16317:46;:55::i;:::-;16304:68;;16382:9;16394:22;16400:2;16404:1;16407;16410;16413:2;16394:5;:22::i;:::-;16382:34;-1:-1:-1;16426:16:77;16449:37;16460:21;16479:1;16460:14;:2;16469:4;16460:8;:14::i;:21::-;16449:1;;16483:2;16449:10;:37::i;:::-;16445:41;;:1;:41;:::i;:::-;16426:60;;150:4:73;16500:8:77;:15;16496:295;;16614:28;16627:14;150:4:73;16639:1:77;16627:11;:14::i;16614:28::-;16603:39;;16496:295;;;16754:26;16767:12;150:4:73;16777:1:77;16767:9;:12::i;16754:26::-;16743:37;;16496:295;16948:1;16937:8;:12;16933:60;;;16973:1;16976:5;16965:17;;;;;;;;;16933:60;17010:12;17021:1;17010:8;:12;:::i;:::-;17024:4;17002:27;;;;;;;15242:1794;;;;;;;;;;;:::o;54767:4623:75:-;55363:26;;:40;;55421:42;;;;;54979:7;;;;;;55286:191;;:59;:191::i;:::-;55253:224;;55487:18;56138:290;56192:222;56251:145;56336:7;:26;;;:38;;;56294:11;56252:7;:26;;;:39;;;:53;;;;:::i;56251:145::-;56192:31;;:37;:222::i;:::-;56138:28;;;;;:36;:290::i;:::-;55970:26;;:38;;;;55901:39;;;;;55788:274;;55840:208;;55901:129;;:43;:129::i;:::-;55840:31;;:39;:208::i;:::-;55788:28;;;;;:34;:274::i;:::-;55724:26;;:38;;;;55570:83;;;;;55508:265;;55570:193;;:132;;55679:22;55570:108;:132::i;:193::-;55508:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;:920;;;;:::i;:::-;55487:941;;56658:9;56670:294;56702:22;56738:7;:26;;;:39;;;56797:7;:26;;;:38;;;150:4:73;56791:44:75;;;;:::i;:::-;56849:26;;:42;;;;56905:49;;;;;56670:18;:294::i;:::-;56658:306;;56974:13;56990:118;57069:7;:26;;;:38;;;150:4:73;57063:44:75;;;;:::i;:::-;56991:26;;:39;;;:53;;57033:11;;56991:53;:::i;56990:118::-;56974:134;;57126:5;57122:1;:9;57118:201;;;57299:1;57302:5;57291:17;;;;;;;;;;57118:201;57336:147;57408:9;57412:5;57408:1;:9;:::i;:::-;57431:26;;:42;;;;57336:49;;;;;;:147;:58;:147::i;:::-;57328:155;;150:4:73;57497:5:75;:12;57493:584;;57708:26;;:38;;;57609:169;;57636:128;;57702:44;;150:4:73;57702:44:75;:::i;:::-;57636:26;;:38;;;;:44;:128::i;57609:169::-;57601:177;;57493:584;;;57996:26;;:38;;;57895:171;;57922:130;;57990:44;;150:4:73;57990:44:75;:::i;:::-;57922:26;;:38;;;;:46;:130::i;57895:171::-;57887:179;;57493:584;58229:26;;:42;;;58177:104;;:10;;58210:5;;58177:19;:104::i;:::-;58164:117;;58342:10;150:4:73;58335:17:75;58331:357;;58381:16;58387:10;150:4:73;58381:16:75;:::i;:::-;58368:29;;58331:357;;;58669:1;58672:4;58661:16;;;;;;;;;;58331:357;58862:1;58827:7;:31;;;:36;58823:525;;58892:199;58954:123;59026:7;:29;;;58962:7;:31;;;58954:46;;:123;;;;:::i;:::-;58928:149;;150:4:73;58928:149:75;:::i;:::-;58892:10;;:18;:199::i;:::-;58879:212;;58823:525;;;59135:202;59197:126;59272:7;:29;;;59206:7;:31;;;59205:32;;;:::i;59197:126::-;59171:152;;150:4:73;59171:152:75;:::i;59135:202::-;59122:215;;58823:525;-1:-1:-1;59366:10:75;;59378:4;;-1:-1:-1;54767:4623:75;-1:-1:-1;;;;;;54767:4623:75:o;36150:2095::-;36301:7;36310:4;36592:1;36557:7;:31;;;:36;36553:84;;-1:-1:-1;36617:1:75;;;;-1:-1:-1;36150:2095:75;-1:-1:-1;36150:2095:75:o;36553:84::-;36759:42;;;;36716:26;;:85;36856:44;;;;36811:26;;:42;;:89;36952:28;;;;36910:26;;:39;;:70;37034:26;;36716;;37012:49;;:21;:49::i;:::-;36990:71;;37204:11;37245:1;37229:12;:17;37225:634;;37343:27;;;;37446:35;;;;37526:12;;37284:215;;37392:89;;37343:27;37392:89;:::i;:::-;37284:28;;;;;:215;:37;:215::i;:::-;:255;;;;:::i;:::-;37262:277;;37225:634;;;37834:13;37835:12;37834:13;:::i;:::-;37651:27;;;;37754:35;;;;37592:215;;37651:27;37700:89;;37651:27;37700:89;:::i;37592:215::-;:256;;;;:::i;:::-;37570:278;;37225:634;38099:31;;;;38022:29;;;;:119;;38074:3;;38022:38;:119::i;:::-;38016:125;;38228:3;38196:7;:29;;;:35;;;;:::i;:::-;38188:50;38233:4;;-1:-1:-1;36150:2095:75;-1:-1:-1;;;;36150:2095:75:o;60429:4993::-;61025:26;;:40;;61083:42;;;;;60641:7;;;;;;60948:191;;:59;:191::i;:::-;60915:224;;61149:18;61803:290;61857:222;61916:145;62001:7;:26;;;:38;;;61959:11;61917:7;:26;;;:39;;;:53;;;;:::i;61803:290::-;61632:26;;:38;;;;61563:39;;;;;61450:274;;61502:208;;61563:129;;:43;:129::i;61450:274::-;61386:26;;:38;;;;61232:83;;;;;61170:265;;61232:193;;:132;;61341:22;61232:108;:132::i;61170:265::-;:554;;;;:::i;:::-;:923;;;;:::i;:::-;61149:944;;62323:9;62335:294;62367:22;62403:7;:26;;;:39;;;62462:7;:26;;;:38;;;150:4:73;62456:44:75;;;;:::i;62335:294::-;62323:306;;62639:13;62655:118;62734:7;:26;;;:38;;;150:4:73;62728:44:75;;;;:::i;:::-;62656:26;;:39;;;:53;;62698:11;;62656:53;:::i;62655:118::-;62639:134;;62791:5;62787:1;:9;62783:201;;;62964:1;62967:5;62956:17;;;;;;;;;;62783:201;63001:147;63073:9;63077:5;63073:1;:9;:::i;63001:147::-;62993:155;-1:-1:-1;63371:26:75;;:38;;;63272:169;;63299:128;;63365:44;;150:4:73;63365:44:75;:::i;8345:3611:73:-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;-1:-1:-1;;;;;;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;2705:151:118:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;9013:583:77:-;9203:14;9229:12;9271:141;9323:2;9339:1;9354:2;9370:1;9385;9400:2;9271:38;:141::i;:::-;9251:161;;-1:-1:-1;9251:161:77;-1:-1:-1;9251:161:77;9422:168;;9450:129;9506:59;9450:38;:129::i;4244:1797::-;4432:7;4589:9;4601:20;4605:2;4609:1;4612;4615;4618:2;4601:3;:20::i;:::-;4589:32;;4695:2;4691:1;:6;4687:166;;;4713:129;4769:59;4713:38;:129::i;:::-;4895:15;4908:1;4896:6;4900:2;4896:1;:6;:::i;4895:15::-;4891:19;;4983:1;4979;:5;4975:165;;;5000:129;5056:59;5000:38;:129::i;:::-;5295:10;5308:23;5325:2;5329:1;5309:5;5313:1;5309;:5;:::i;:::-;5308:16;:23;:16;:23::i;:::-;5295:36;;150:4:73;5345:2:77;:9;5341:261;;5443:20;5450:12;150:4:73;5460:1:77;5450:9;:12::i;5443:20::-;5438:25;;5341:261;;;5569:22;5576:14;150:4:73;5588:1:77;5576:11;:14::i;5569:22::-;5564:27;;5341:261;5684:12;:2;5693;5684:8;:12::i;:::-;5679:17;;5772:2;5767;:7;5763:167;;;5790:129;5846:59;5790:38;:129::i;:::-;6027:7;6032:2;6027;:7;:::i;:::-;6020:14;4244:1797;-1:-1:-1;;;;;;;;;4244:1797:77:o;12036:1218::-;12195:7;12710:9;12722:22;12728:2;12732:1;12735;12738;12741:2;12722:5;:22::i;:::-;12710:34;-1:-1:-1;12754:17:77;12774:28;150:4:73;12784:11:77;:1;12792:2;12784:7;:11::i;:::-;:17;;;;:::i;12774:28::-;12754:48;;150:4:73;12816:9:77;:16;12812:300;;12932:29;12946:14;150:4:73;12958:1:77;12946:11;:14::i;12932:29::-;12920:41;;12812:300;;;13074:27;13088:12;150:4:73;13098:1:77;13088:9;:12::i;13074:27::-;13062:39;;12812:300;13133:21;:9;13151:2;13133:17;:21::i;:::-;13121:33;-1:-1:-1;13233:14:77;13245:2;13121:33;13233:14;:::i;17543:343::-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;:::-;:46;;;;:::i;18399:352::-;18540:7;18736:8;:1;18742;18736:5;:8::i;:::-;18694:39;18707:21;18726:1;18707:14;:2;18718;18707:10;:14::i;:21::-;18694:1;;18730:2;18694:12;:39::i;3180:392:118:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:118;;3394:4;3359:41;;;9573:51:182;9546:18;;3359:41:118;9427:203:182;3303:108:118;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:118;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;10285:1320:77:-;10479:14;10495:12;10657:9;10669:20;10673:2;10677:1;10680;10683;10686:2;10669:3;:20::i;:::-;10657:32;-1:-1:-1;10732:15:77;10745:1;10733:6;10737:2;10733:1;:6;:::i;10732:15::-;10728:19;;10829:1;10825;:5;10821:53;;;10854:1;10857:5;10846:17;;;;;;;10821:53;11029:10;11042:23;11059:2;11063:1;11043:5;11047:1;11043;:5;:::i;11042:23::-;11029:36;;150:4:73;11079:2:77;:9;11075:263;;11178:20;11185:12;150:4:73;11195:1:77;11185:9;:12::i;11178:20::-;11173:25;;11075:263;;;11305:22;11312:14;150:4:73;11324:1:77;11312:11;:14::i;11305:22::-;11300:27;;11075:263;11420:12;:2;11429;11420:8;:12::i;:::-;11415:17;;11530:2;11525;:7;11521:54;;;11557:7;11562:2;11557;:7;:::i;:::-;11548:16;;11521:54;11594:4;11584:14;;10509:1096;;10285:1320;;;;;;;;;;:::o;4625:582:118:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:118;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:118;;-1:-1:-1;;;;;9591:32:182;;5121:24:118;;;9573:51:182;9546:18;;5121:24:118;9427:203:182;5041:119:118;-1:-1:-1;5180:10:118;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:118;;;;;;;;;;;5870:383;5743:516;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:155:182:-;74:5;119:2;110:6;105:3;101:16;97:25;94:45;;;135:1;132;125:12;174:492;278:6;286;294;347:2;335:9;326:7;322:23;318:32;315:52;;;363:1;360;353:12;315:52;399:9;386:23;376:33;;456:2;445:9;441:18;428:32;418:42;;511:2;500:9;496:18;483:32;538:18;530:6;527:30;524:50;;;570:1;567;560:12;524:50;593:67;652:7;643:6;632:9;628:22;593:67;:::i;:::-;583:77;;;174:492;;;;;:::o;924:630::-;1046:6;1054;1062;1070;1078;1131:3;1119:9;1110:7;1106:23;1102:33;1099:53;;;1148:1;1145;1138:12;1099:53;1184:9;1171:23;1161:33;;1241:2;1230:9;1226:18;1213:32;1203:42;;1292:2;1281:9;1277:18;1264:32;1254:42;;1343:2;1332:9;1328:18;1315:32;1305:42;;1398:3;1387:9;1383:19;1370:33;1426:18;1418:6;1415:30;1412:50;;;1458:1;1455;1448:12;1412:50;1481:67;1540:7;1531:6;1520:9;1516:22;1481:67;:::i;:::-;1471:77;;;924:630;;;;;;;;:::o;1741:286::-;1800:6;1853:2;1841:9;1832:7;1828:23;1824:32;1821:52;;;1869:1;1866;1859:12;1821:52;1895:23;;-1:-1:-1;;;;;1947:31:182;;1937:42;;1927:70;;1993:1;1990;1983:12;2032:118;2118:5;2111:13;2104:21;2097:5;2094:32;2084:60;;2140:1;2137;2130:12;2155:241;2211:6;2264:2;2252:9;2243:7;2239:23;2235:32;2232:52;;;2280:1;2277;2270:12;2232:52;2319:9;2306:23;2338:28;2360:5;2338:28;:::i;2939:127::-;3000:10;2995:3;2991:20;2988:1;2981:31;3031:4;3028:1;3021:15;3055:4;3052:1;3045:15;3071:128;3138:9;;;3159:11;;;3156:37;;;3173:18;;:::i;3204:125::-;3269:9;;;3290:10;;;3287:36;;;3303:18;;:::i;4362:184::-;4432:6;4485:2;4473:9;4464:7;4460:23;4456:32;4453:52;;;4501:1;4498;4491:12;4453:52;-1:-1:-1;4524:16:182;;4362:184;-1:-1:-1;4362:184:182:o;4551:127::-;4612:10;4607:3;4603:20;4600:1;4593:31;4643:4;4640:1;4633:15;4667:4;4664:1;4657:15;4683:112;4715:1;4741;4731:35;;4746:18;;:::i;:::-;-1:-1:-1;4780:9:182;;4683:112::o;4800:193::-;-1:-1:-1;;;;;4918:10:182;;;4930;;;4914:27;;4953:11;;;4950:37;;;4967:18;;:::i;4998:197::-;-1:-1:-1;;;;;5120:10:182;;;5132;;;5116:27;;5155:11;;;5152:37;;;5169:18;;:::i;5200:200::-;5266:9;;;5239:4;5294:9;;5322:10;;5334:12;;;5318:29;5357:12;;;5349:21;;5315:56;5312:82;;;5374:18;;:::i;5801:136::-;5836:3;-1:-1:-1;;;5857:22:182;;5854:48;;5882:18;;:::i;:::-;-1:-1:-1;5922:1:182;5918:13;;5801:136::o;5942:200::-;-1:-1:-1;;;;;6078:10:182;;;6066;;;6062:27;;6101:12;;;6098:38;;;6116:18;;:::i;6426:245::-;6524:2;6494:17;;;6513;;;;6490:41;-1:-1:-1;;;;;6546:44:182;;-1:-1:-1;;;;;;6592:49:182;;6543:99;6540:125;;;6645:18;;:::i;6676:168::-;6749:9;;;6780;;6797:15;;;6791:22;;6777:37;6767:71;;6818:18;;:::i;6849:213::-;6884:3;6932:5;6928:2;6917:21;-1:-1:-1;;;;;6962:39:182;6953:7;6950:52;6947:78;;7005:18;;:::i;:::-;7045:1;7041:15;;6849:213;-1:-1:-1;;6849:213:182:o;8393:216::-;8457:9;;;8485:11;;;8432:3;8515:9;;8543:10;;8539:19;;8568:10;;8560:19;;8536:44;8533:70;;;8583:18;;:::i;8614:360::-;8778:2;8763:18;;8811:1;8800:13;;8790:144;;8856:10;8851:3;8847:20;8844:1;8837:31;8891:4;8888:1;8881:15;8919:4;8916:1;8909:15;8790:144;8943:25;;;8614:360;:::o;8979:193::-;9018:1;9044;9034:35;;9049:18;;:::i;:::-;-1:-1:-1;;;9085:18:182;;-1:-1:-1;;9105:13:182;;9081:38;9078:64;;;9122:18;;:::i;:::-;-1:-1:-1;9156:10:182;;8979:193::o;9177:245::-;9244:6;9297:2;9285:9;9276:7;9272:23;9268:32;9265:52;;;9313:1;9310;9303:12;9265:52;9345:9;9339:16;9364:28;9386:5;9364:28;:::i;9635:412::-;9764:3;9802:6;9796:13;9827:1;9837:129;9851:6;9848:1;9845:13;9837:129;;;9949:4;9933:14;;;9929:25;;9923:32;9910:11;;;9903:53;9866:12;9837:129;;;-1:-1:-1;10021:1:182;9985:16;;10010:13;;;-1:-1:-1;9985:16:182;9635:412;-1:-1:-1;9635:412:182:o",
        "linkReferences": {},
        "immutableReferences": {
            "13293": [
                {
                    "start": 3801,
                    "length": 32
                },
                {
                    "start": 3898,
                    "length": 32
                }
            ],
            "13296": [
                {
                    "start": 1942,
                    "length": 32
                }
            ],
            "13299": [
                {
                    "start": 648,
                    "length": 32
                },
                {
                    "start": 2106,
                    "length": 32
                },
                {
                    "start": 8723,
                    "length": 32
                }
            ],
            "13302": [
                {
                    "start": 681,
                    "length": 32
                },
                {
                    "start": 4311,
                    "length": 32
                }
            ],
            "13308": [
                {
                    "start": 2290,
                    "length": 32
                },
                {
                    "start": 5919,
                    "length": 32
                }
            ],
            "13311": [
                {
                    "start": 5963,
                    "length": 32
                }
            ],
            "13314": [
                {
                    "start": 5616,
                    "length": 32
                }
            ],
            "13317": [
                {
                    "start": 615,
                    "length": 32
                },
                {
                    "start": 4235,
                    "length": 32
                }
            ],
            "13320": [
                {
                    "start": 4273,
                    "length": 32
                },
                {
                    "start": 4537,
                    "length": 32
                },
                {
                    "start": 6637,
                    "length": 32
                },
                {
                    "start": 6738,
                    "length": 32
                },
                {
                    "start": 7328,
                    "length": 32
                },
                {
                    "start": 7388,
                    "length": 32
                }
            ],
            "13323": [
                {
                    "start": 518,
                    "length": 32
                },
                {
                    "start": 1074,
                    "length": 32
                },
                {
                    "start": 1409,
                    "length": 32
                }
            ],
            "5478": [
                {
                    "start": 1815,
                    "length": 32
                },
                {
                    "start": 3846,
                    "length": 32
                },
                {
                    "start": 3965,
                    "length": 32
                },
                {
                    "start": 4105,
                    "length": 32
                },
                {
                    "start": 7865,
                    "length": 32
                },
                {
                    "start": 8031,
                    "length": 32
                },
                {
                    "start": 8233,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DecreasedPresentValueWhenAddingLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minLpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of base to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LP's incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created.\"}},\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received.\",\"_1\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutput\":\"The minium amount of the base token to receive.        NOTE: This value is likely to be less than the amount LP shares        are worth. The remainder is in short and long withdraw shares        which are hard to game the value of.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The LP receives a         proportional amount of the pool's idle capital.\",\"_1\":\"The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares.\"}}},\"title\":\"ERC4626Target1\",\"version\":1},\"userdoc\":{\"errors\":{\"DecreasedPresentValueWhenAddingLiquidity()\":[{\"notice\":\"Thrown when the present value prior to adding liquidity results in a         decrease in present value after liquidity. This is caused by a         shortage in liquidity that prevents all the open positions being         closed on the curve and therefore marked to 1.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientBalance()\":[{\"notice\":\"Thrown when a user doesn't have a sufficient balance to perform         an action.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidApr()\":[{\"notice\":\"Thrown when the pool's APR is outside the bounds specified by         a LP when they are adding liquidity.\"}],\"InvalidShareReserves()\":[{\"notice\":\"Thrown when update liquidity brings the share reserves below         the minimum share reserves.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NegativePresentValue()\":[{\"notice\":\"Thrown when the present value is negative. Whatever proceeded         a negative present value should be reverted.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"constructor\":{\"notice\":\"Initializes the target1 contract.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"}},\"notice\":\"ERC4626Hyperdrive's target1 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target1.sol\":\"ERC4626Target1\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x100ce6f7fbc10a19226304986165fdf13491004498e77ad1d2b21a051eeca0da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9e1565462744d053668571275afd83a8a338efc9662aebb433a25199229e2a6d\",\"dweb:/ipfs/QmT5Db8WDETyjbr3x2yDPD5r6pzytJddSgtjjd6U7pwRqn\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79\",\"dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs\"]},\"contracts/src/instances/erc4626/ERC4626Target1.sol\":{\"keccak256\":\"0x8b8a7be14a7f2adbf7a3ca2d82ec418b5e46960d40a18eed97305cdfd923a86d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2329d0ed611ad064d94f3303c15ad8553f7cc745342110fb9de2344664f1f6ab\",\"dweb:/ipfs/QmRGutBJH9HEf7zZQsNTvHFofxcX1coKTtex6spL9ney5R\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0\",\"dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc\",\"dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc\",\"dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc\",\"dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626\",\"dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11\",\"dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f\",\"dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "_config",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "internalType": "contract IERC4626",
                            "name": "__vault",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressEmptyCode"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressInsufficientBalance"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DecreasedPresentValueWhenAddingLiquidity"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpInvalidExponent"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "FailedInnerCall"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InsufficientBalance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                            "name": "reason",
                            "type": "uint8"
                        }
                    ],
                    "type": "error",
                    "name": "InsufficientLiquidity"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidApr"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidShareReserves"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidTimestamp"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "LnInvalidInput"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MinimumTransactionAmount"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "NegativePresentValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "NotPayable"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "OutputLimit"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "PoolIsPaused"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "SafeERC20FailedOperation"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt128"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint112"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint128"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "AddLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "fees",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CollectGovernanceFee",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "checkpointTime",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedShorts",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedLongs",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CreateCheckpoint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "apr",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialize",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauseStatusUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newPauser",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "PauserUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RedeemWithdrawalShares",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RemoveLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_contribution",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minLpSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minApr",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_maxApr",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "addLiquidity",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "lpShares",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_withdrawalShares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutputPerShare",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "redeemWithdrawalShares",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_lpShares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutput",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "removeLiquidity",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_contribution": "The amount of base to supply.",
                            "_maxApr": "The maximum APR at which the LP is willing to supply.",
                            "_minApr": "The minimum APR at which the LP is willing to supply.",
                            "_minLpSharePrice": "The minimum LP share price the LP is willing        to accept for their shares. LP's incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "lpShares": "The number of LP tokens created."
                        }
                    },
                    "constructor": {
                        "params": {
                            "__vault": "The ERC4626 compatible vault.",
                            "_config": "The configuration of the Hyperdrive pool."
                        }
                    },
                    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_minOutputPerShare": "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
                            "_options": "The options that configure how the operation is settled.",
                            "_withdrawalShares": "The withdrawal shares to redeem."
                        },
                        "returns": {
                            "_0": "The amount the LP received.",
                            "_1": "The amount of withdrawal shares that were redeemed."
                        }
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_lpShares": "The LP shares to burn.",
                            "_minOutput": "The minium amount of the base token to receive.        NOTE: This value is likely to be less than the amount LP shares        are worth. The remainder is in short and long withdraw shares        which are hard to game the value of.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The amount the LP removing liquidity receives. The LP receives a         proportional amount of the pool's idle capital.",
                            "_1": "The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows LPs to supply liquidity for LP shares."
                    },
                    "constructor": {
                        "notice": "Initializes the target1 contract."
                    },
                    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows an LP to burn shares and withdraw from the pool."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/instances/erc4626/ERC4626Target1.sol": "ERC4626Target1"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget1.sol": {
                "keccak256": "0x100ce6f7fbc10a19226304986165fdf13491004498e77ad1d2b21a051eeca0da",
                "urls": [
                    "bzz-raw://9e1565462744d053668571275afd83a8a338efc9662aebb433a25199229e2a6d",
                    "dweb:/ipfs/QmT5Db8WDETyjbr3x2yDPD5r6pzytJddSgtjjd6U7pwRqn"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Base.sol": {
                "keccak256": "0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18",
                "urls": [
                    "bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79",
                    "dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Target1.sol": {
                "keccak256": "0x8b8a7be14a7f2adbf7a3ca2d82ec418b5e46960d40a18eed97305cdfd923a86d",
                "urls": [
                    "bzz-raw://2329d0ed611ad064d94f3303c15ad8553f7cc745342110fb9de2344664f1f6ab",
                    "dweb:/ipfs/QmRGutBJH9HEf7zZQsNTvHFofxcX1coKTtex6spL9ney5R"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626.sol": {
                "keccak256": "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e",
                "urls": [
                    "bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3",
                    "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"
                ],
                "license": "GPL-2.0-or-later"
            },
            "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
                "keccak256": "0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7",
                "urls": [
                    "bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f",
                    "dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
                "keccak256": "0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a",
                "urls": [
                    "bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0",
                    "dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
                "keccak256": "0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33",
                "urls": [
                    "bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73",
                    "dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5",
                "urls": [
                    "bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc",
                    "dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717",
                "urls": [
                    "bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc",
                    "dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582",
                "urls": [
                    "bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e",
                    "dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf",
                "urls": [
                    "bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc",
                    "dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370",
                "urls": [
                    "bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626",
                    "dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058",
                "urls": [
                    "bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11",
                    "dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982",
                "urls": [
                    "bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f",
                    "dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
                "urls": [
                    "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
                    "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2",
                "urls": [
                    "bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b",
                    "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
                "urls": [
                    "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
                    "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
                "urls": [
                    "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
                    "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266",
                "urls": [
                    "bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244",
                    "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
                "urls": [
                    "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
                    "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
                "urls": [
                    "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
                    "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Target1.sol",
        "id": 6001,
        "exportedSymbols": {
            "ERC4626Base": [
                5679
            ],
            "ERC4626Target1": [
                6000
            ],
            "HyperdriveTarget1": [
                3259
            ],
            "IERC4626": [
                7076
            ],
            "IHyperdrive": [
                7480
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:970:26",
        "nodes": [
            {
                "id": 5969,
                "nodeType": "PragmaDirective",
                "src": "39:23:26",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 5971,
                "nodeType": "ImportDirective",
                "src": "64:73:26",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
                "file": "../../external/HyperdriveTarget1.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6001,
                "sourceUnit": 3260,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5970,
                            "name": "HyperdriveTarget1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3259,
                            "src": "73:17:26",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5973,
                "nodeType": "ImportDirective",
                "src": "138:57:26",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC4626.sol",
                "file": "../../interfaces/IERC4626.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6001,
                "sourceUnit": 7077,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5972,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7076,
                            "src": "147:8:26",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5975,
                "nodeType": "ImportDirective",
                "src": "196:63:26",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6001,
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5974,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
                            "src": "205:11:26",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5977,
                "nodeType": "ImportDirective",
                "src": "260:48:26",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6001,
                "sourceUnit": 5680,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5976,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5679,
                            "src": "269:11:26",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6000,
                "nodeType": "ContractDefinition",
                "src": "633:375:26",
                "nodes": [
                    {
                        "id": 5999,
                        "nodeType": "FunctionDefinition",
                        "src": "865:141:26",
                        "nodes": [],
                        "body": {
                            "id": 5998,
                            "nodeType": "Block",
                            "src": "1004:2:26",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 5983,
                            "nodeType": "StructuredDocumentation",
                            "src": "697:163:26",
                            "text": "@notice Initializes the target1 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 5992,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 5986,
                                        "src": "974:7:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 5993,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 5991,
                                    "name": "HyperdriveTarget1",
                                    "nameLocations": [
                                        "956:17:26"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 3259,
                                    "src": "956:17:26"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "956:26:26"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 5995,
                                        "name": "__vault",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 5989,
                                        "src": "995:7:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7076",
                                            "typeString": "contract IERC4626"
                                        }
                                    }
                                ],
                                "id": 5996,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 5994,
                                    "name": "ERC4626Base",
                                    "nameLocations": [
                                        "983:11:26"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5679,
                                    "src": "983:11:26"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "983:20:26"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 5990,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5986,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "916:7:26",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5999,
                                    "src": "886:37:26",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 5985,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 5984,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "886:11:26",
                                                "898:10:26"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7280,
                                            "src": "886:22:26"
                                        },
                                        "referencedDeclaration": 7280,
                                        "src": "886:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5989,
                                    "mutability": "mutable",
                                    "name": "__vault",
                                    "nameLocation": "942:7:26",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5999,
                                    "src": "933:16:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$7076",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 5988,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 5987,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "933:8:26"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7076,
                                            "src": "933:8:26"
                                        },
                                        "referencedDeclaration": 7076,
                                        "src": "933:8:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7076",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "876:79:26"
                        },
                        "returnParameters": {
                            "id": 5997,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1004:0:26"
                        },
                        "scope": 6000,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 5979,
                            "name": "HyperdriveTarget1",
                            "nameLocations": [
                                "660:17:26"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 3259,
                            "src": "660:17:26"
                        },
                        "id": 5980,
                        "nodeType": "InheritanceSpecifier",
                        "src": "660:17:26"
                    },
                    {
                        "baseName": {
                            "id": 5981,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "679:11:26"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5679,
                            "src": "679:11:26"
                        },
                        "id": 5982,
                        "nodeType": "InheritanceSpecifier",
                        "src": "679:11:26"
                    }
                ],
                "canonicalName": "ERC4626Target1",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 5978,
                    "nodeType": "StructuredDocumentation",
                    "src": "310:323:26",
                    "text": "@author DELV\n @title ERC4626Target1\n @notice ERC4626Hyperdrive's target1 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    6000,
                    5679,
                    3259,
                    10186,
                    13270,
                    11906,
                    11031,
                    12387,
                    8790,
                    9728,
                    13478,
                    67358,
                    7924,
                    8482
                ],
                "name": "ERC4626Target1",
                "nameLocation": "642:14:26",
                "scope": 6001,
                "usedErrors": [
                    7351,
                    7357,
                    7363,
                    7366,
                    7384,
                    7390,
                    7393,
                    7399,
                    7402,
                    7405,
                    7408,
                    7411,
                    7417,
                    7440,
                    7443,
                    7446,
                    66733,
                    67014,
                    67019,
                    67022,
                    67303
                ],
                "usedEvents": [
                    7773,
                    7788,
                    7805,
                    7818,
                    7835,
                    7854,
                    7871,
                    7888,
                    7901,
                    7908,
                    7913,
                    7918,
                    7923,
                    8463,
                    8472,
                    8481
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 26
};
